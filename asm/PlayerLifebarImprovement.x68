*----------------------------------------------------------------------------------------------
* Title:        CDREE Player Lifebar Improvement
* Written by:   GameHackFan
* Date:
* Description:  Code that fixes the lifebar of the players, the
*               original game bugs if the player has more than
*               64 HP (100 points).
*----------------------------------------------------------------------------------------------

; ORG         $1644E                    ; Replace 1644E (Improves DINORE feature caller) 

                                        ; Block of code that changes DINORE call to 180220 feature
  JMP         $180220                   ; Calls the 180220 feature.
  NOP                                   ; No operation, does nothing.
  BSR         $164E4                    ; Code from the original game readjusted (prints lifebar).
  SUB.W       #$80, A0                  ; Code from the original game.


; ORG         $16474                    ; Replace 16474, 164DC, 16518.

                                        ; Code that sets the lifebar pallete ID.
  MOVE.W      ($7FE0, A5), ($2, A0)     ; Stores ($7FE0 + A5) inside ($2 + A0), the correct lifebar pallete ID.


; ORG         $16484                    ; Replace 16484

                                        ; Code that fixes the lifebar progress.
  MOVE.W      ($7FE2, A5), D4           ; Stores ($7FE2 + A5) inside D4, the correct lifebar progress.


; ORG         $164B6                    ; Replace 164B6, 164E4

                                        ; Code that fixes the lifebar progress.
  MOVE.W      ($7FE2, A5), D0           ; Stores ($7FE2 + A5) inside D0, the correct lifebar progress.


; ORG         $180220

                                        ; Block of code that draws the power indicator.
  BSR         $182000                   ; Calls the routine that handles the player lifebar.
  JSR         $1631A                    ; Code from the original game readjusted.
  ADD.W       #$788, A0                 ; Code from the original game readjusted.
  BSR         $181600                   ; Calls the routine that prints the power indicator.
  JMP         $16454                    ; Jumps back to where it stopped in the original code.


; ORG         $182000

                                        ; Block of code ensures the 3 players will use different lifebar palletes.
  CLR.W       D0                        ; Clears D0.
  LEA         $9145A0, A0               ; Stores 9145A0 inside A0, 1st player lifebar address.
  MOVE.B      ($2, A6), D0              ; Stores ($2 + A6) inside D0, the player ID.
  LSL.W       #$5, D0                   ; Shifts left D5 bits by 5, to get the player pallete index.
  ADD.W       D0, A0                    ; Adds D0 to A0, the player pallete address.

                                        ; Block of code saves in memory the player pallete ID to be used later.
  LSR.W       #$5, D0                   ; Shifts right D5 bits by 5, restore the player ID.
  ADD.W       #$18D, D0                 ; Adds 18D to D0, the lifebar pallete.
  MOVE.W      D0, ($7FE0, A5)           ; Stores D0 inside ($7FE0 + A5), to be used later.

                                        ; Block of code that sets the lifebar border color
  MOVE.W      #$0FFF, D0                ; Stores FFF inside D0, the lifebar border color.
  BSR         $182046                   ; Call the code to apply the the color.

                                        ; Block of code that sets the lifebar color
  MOVE.W      ($6C, A6), D5             ; Stores ($6C + A6) inside D5, the player HP.
  BEQ         $182032                   ; If D5 is 0, ignore the 4 lines below.
  SUBQ.W      #$1, D5                   ; Subtracts 1 from D5, need to properly get the lifebar value.
  DIVU.W      #$64, D5                  ; Divides D5 by 64, gets the player HP and lifebar color.
  ADD.W       D5, D5                    ; Adds D5 to D5, doubles it, color index is 2 bytes.
  AND.W       #$1F, D5                  ; D5 and 1F, force the lifebar color index to a valid range.
  MOVE.L      ($2C, PC, D5.W), D0       ; Stores ($2C + PC + D5.W) inside D0, the lifebar color.
  BSR         $182046                   ; Call the code to apply the the color.
  SWAP        D0                        ; Inverts D0 higher and lower bits, to get the next color.
  BSR         $182046                   ; Call the code to apply the color.
  SWAP        D5                        ; Inverts D5 higher and lower bits, to get the player HP progress.
  ADDQ.W      #$1, D5                   ; Adds 1 to D5, adds back the 1 that was subtracted.
  MOVE.W      D5, ($7FE2, A5)           ; Stores D5 inside ($7FE2 + A5), to be used later.
  RTS                                   ; Returns back to the routine that called this code.

                                        ; Block of code that sets the color
  MOVE.W      (A0), D5                  ; Stores (A0) inside D5, the current color.
  AND.W       #$F000, D5                ; D5 and F000, to keep only the current brightness.
  OR.W        D0, D5                    ; D0 or D5, the lifebar color color.
  MOVE.W      D5, (A0)+                 ; Stores D5 inside (A0) and sum 2 to A0, sets the color.
  RTS                                   ; Returns back to the routine that called this code.
  

; ORG         $180936                   ; Replace 180936 (There is enough space to add all the code).

                                        ; Block of code that forces the lifebar to be redrawn.
  BSR         $182000                   ; Calls the routine that draws the lifebar.
  RTS                                   ; Returns back to the routine that called this code.
                                        

; Code that adds support to up to 16 lifebar colors for the 
; player lifebars, it ensures that if the player has 16+ 
; lifebars, the colors will circle around. It also forces 
; all 3 players to use different palletes for their lifebars, 
; which is needed so the lifebar color changes made do not 
; affect all players at once. Finally, it fixes a bug with 
; the lifebar progress, not allowing values outside the 
; range, which was making the game draw the lifebar bugged 
; sometimes if the player HP is over 64.
; 
; 01644E:   DINORE Feature Caller Improvement.
; 016474:   Sets the Lifebar Pallete ID.
; 016484:   Fix the Lifebar Progress.
; 0164B6:   Fix the Lifebar Progress.
; 0164DC:   Sets the Lifebar Pallete ID.
; 0164E4:   Fix the Lifebar Progress.
; 016518:   Sets the Lifebar Pallete ID.
; 180220:   DINORE Feature Extension (Added Player Lifebar Improvement).
; 182000:   Player Lifebar Improvement.
; 180936:   Forces the Lifebar To Be Redrawn.
; 
; 182050:   Lifebar Colors (Add the data below).
;           00 0E 0E 0F 09 09 E5 05 0D 00 CB 0E 4A 0E CF 07
;           AA 00 67 05 00 00 53 09 51 0F 03 0B 75 01 2A 04 
;           0E 00
