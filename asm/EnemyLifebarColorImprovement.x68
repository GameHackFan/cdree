*----------------------------------------------------------------------------------------------
* Title:        CDREE Enemy Lifebar Color Improvement
* Written by:   GameHackFan
* Date:
* Description:  Adds up to 16 lifebar colors for the enemy lifebars.
*               Make sure the colors wrap up if the enemy has more HP
*               than lifebar colors.
*----------------------------------------------------------------------------------------------

; ORG         $17876                    ; Replace 17876 (There is enough space for the new code).

                                        ; Block of code that changes the lifebar color in the pallete.
  MOVE.W      #$0FFF, D0                ; Stores FFF inside D0, the lifebar border color.
  BSR         $17896                    ; Call the code to apply the the color.
  MOVE.W      D4, D5                    ; Stores D4 inside D5, data related to the ID of the lifebar.
  LSR.W       #$2, D5                   ; Shifts right D5 bits by 2, to get the lifebar color index.
  AND.W       #$1F, D5                  ; D5 and 1F, force the lifebar color index to a valid range.
  MOVE.L      ($20, PC, D5.W), D0       ; Stores (20 + PC + D5.W) inside D0, the lifebar color.
  BSR         $17896                    ; Call the code to apply the the color.
  SWAP        D0                        ; Inverts D0 higher and lower bits, to get the next color.
  BSR         $17896                    ; Call the code to apply the the color.
  CLR.L       D0                        ; Clears D0.
  ADDQ        #6, D4                    ; Adds 6 to D4, the original code adds 2 in 3 iterations.
  MOVE.W      D3, D0                    ; Code from the original game, stores D3 inside D0.
  RTS                                   ; Returns back to the routine that called this code.

                                        ; Code that stores the color inside D0 in the pallete memory region.
  MOVE.W      (A1), D5                  ; Stores (A1) inside D5, the current color.
  AND.W       #$F000, D5                ; D5 and F000, to keep only the current brightness.
  OR.W        D0, D5                    ; D0 or D5, the lifebar color.
  MOVE.W      D5, (A1)+                 ; Stores D5 inside (A1) and sum 2 to A1, sets the color.
  RTS                                   ; Returns back to the routine that called this code.
  

; Code that adds support to up to 16 lifebar colors for 
; the enemy lifebars, it also ensures that if the enemy
; has 16+ lifebars, the colors will circle around.
; 
; 017876:   Handles Enemy Lifebar Color.
;
; 0178A6:   Lifebar Colors (Add the data below).
;           00 0E 0E 0F 09 09 E5 05 0D 00 CB 0E 4A 0E CF 07
;           AA 00 67 05 00 00 53 09 51 0F 03 0B 75 01 2A 04 
;           0E 00
