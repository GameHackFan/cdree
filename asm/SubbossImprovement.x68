*----------------------------------------------------------------------------------------------
* Title:        CDREE Subboss Improvement
* Written by:   GameHackFan
* Date:
* Description:  Provides several routines to modify the bosses behavior
*               in a way they can be used as subbosses (like Tyrog2).
*----------------------------------------------------------------------------------------------

  JSR         $182600                   ; Replace 5A36A, 50364, 55806, 63492.

; ORG         $182600

                                        ; Block of code that handles slowdown and end of stage (Bosses).
  BTST        #7, ($27, A6)             ; Compares 0 and the 8th bit of ($27 + A6), subboss posture ID.
  BNE         $18260E                   ; If it is not 0, it is a subboss, go to the RTS line.
  JSR         $ACEE                     ; Code from the original game, trigger slowdown and end of stage.
  RTS                                   ; Returns back to the routine that called this code.


  JSR         $182620                   ; Replace 617C4.

; ORG         $182620

                                        ; Block of code that forces the posture ID (Fessenden 2nd, multiple characters).
  MOVE.W      #$150, ($20, A0)          ; Code from the original game that was replaced to jump to this code.
  MOVE.B      ($27, A6), ($27, A0)      ; Stores ($27 + A6) inside ($27 + A0), the posture ID.
  RTS                                   ; Returns back to the routine that called this code.


  JMP         $182640                   ; Replace 7C0D8.

; ORG         $182640

                                        ; Block of code that handles end of area (Bosses).
  BTST        #7, ($27, A6)             ; Compares 0 and the 8th bit of ($27 + A6), subboss posture ID.
  BNE         $18264E                   ; If it is not 0, it is a subboss, go to the RTS line.
  JMP         $1D95E                    ; Code from the original game that was replaced to jump to this code.
  RTS                                   ; Returns back to the correct line of execution.


  JSR         $182660                   ; Replace 5A38A, 5036E, 55826.

; ORG         $182660

                                        ; Block of code that handles ending the music (Bosses).
  BTST        #7, ($27, A6)             ; Compares 0 and the 8th bit of ($27 + A6), subboss posture ID.
  BNE         $18266E                   ; If it is not 0, it is a subboss, go to the RTS line.
  JSR         $A5EA                     ; Code from the original game, triggers the ending of the music.
  RTS                                   ; Returns back to the routine that called this code.


  JSR         $182680                   ; Replace 2AF8C, 504D6.
  NOP

; ORG         $182680

                                        ; Block of code that handles enemies disappearing when they die (Bosses).
  MOVE.L      #$04000000, ($4, A6)      ; Code from the original game that was replaced to jump to this code.
  BTST        #7, ($27, A6)             ; Compares 0 and the 8th bit of ($27 + A6), subboss posture ID.
  BEQ         $18269C                   ; If it is 0, not a subboss, go to the RTS line.
  MOVE.W      #$0C, ($20, A6)           ; Stores C inside ($20 + A6), it makes the enemy dissapear (Lash Spawn ID).
  JMP         $182A00                   ; Jumps to the code that handles all Fessenden parts disappearing.
  RTS                                   ; Returns back to the correct line of execution.


  JMP         $1826B0                   ; Replace 52D86.
  NOP
  NOP

; ORG         $1826B0

                                        ; Block of code that handles morgan slowdown when he dies.
  BTST        #7, ($27, A6)             ; Compares 0 and the 8th bit of ($27 + A6), subboss posture ID.
  BNE         $1826C8                   ; If it is not 0, subboss, go to the last line.
  MOVE.W      ($6E, A6), D1             ; Code from the original game that was replaced to jump to this code.
  MOVE.B      #$3, ($4D6, A5)           ; Code from the original game that was replaced to jump to this code.
  JMP         $52D90                    ; Jumps back to where it stopped in the original code.
  JMP         $52D98                    ; Jumps to a code to ensure it will properly behave as subboss.


  JSR         $1826E0                   ; Replace 58612, 4FE0E, 517D6, 61882.

; ORG         $1826E0

                                        ; Block of code that handles starting the music (Bosses).
  BTST        #7, ($27, A6)             ; Compares 0 and the 8th bit of ($27 + A6), subboss posture ID.
  BNE         $1826EE                   ; If it is not 0, it is a subboss, go to the RTS line.
  JSR         $A63C                     ; Code from the original game, triggers the start of the music.
  RTS                                   ; Returns back to the routine that called this code.


  JSR         $182700                   ; Replace 617BE, 617F8, 6182C, 61862.

; ORG         $182700

                                        ; Block of code that handles custom pallete ID (Fessenden 2nd).
  MOVE.B      #$1, (A0)                 ; Code from the original game readjusted.
  MOVE.W      ($DE, A6), ($DE, A0)      ; Stores ($DE + A6) inside ($DE + A0), the custom pallete ID to Fessenden 2nd part.
  MOVE.B      ($DE, A6), ($23, A0)      ; Stores ($DE + A6) inside ($23 + A0), the custom pallete ID to Fessenden 2nd part.
  RTS                                   ; Returns back to the routine that called this code.


  JSR         $182730                   ; Replace 58604, 4FE40, 517EE, 53EDA, 6194A.

; ORG         $182730

                                        ; Block of code that handles calling the boss helper groups (Bosses).
  BTST        #7, ($27, A6)             ; Compares 0 and the 8th bit of ($27 + A6), subboss posture ID.
  BNE         $18273E                   ; If it is not 0, subboss, go to the RTS.
  JSR         $7BEDC                    ; Code from the original game, triggers the start of the music.
  RTS                                   ; Returns back to the routine that called this code.


  JSR         $182750                   ; Replace 52EBE.

; ORG         $182750

                                        ; Block of code that fixes morgue immortal when he transforms.
  MOVE.B      #$1, (A6)                 ; Stores 1 inside (A6), sets his active flag to 1, can take hit.
  MOVE.W      #$A0, ($20, A6)           ; Code from the original game that was replaced to jump to this code.
  RTS                                   ; Returns back to the routine that called this code.


  JSR         $182770                   ; Replace 4FD3A.

; ORG         $182770

                                        ; Block of code that fixes Hogg's bike spawn and forces pallete 08.
  MOVE.B      #$1, (A1)                 ; Code from the original game readjusted.
  MOVE.L      #$51076, ($40, A1)        ; Stores 51076 inside ($40 + A1), necessary address, fix a spawn bug.
  CLR.W       ($DE, A1)                 ; Clears ($DE + A1), the custom pallete ID.
  RTS                                   ; Returns back to the routine that called this code.


  JMP         $1827A0                   ; Replace 96436.

; ORG         $1827A0

                                        ; Block of code that fixes Slice/Slisaur shadow pallete (Subboss).
  MOVE.B      ($7E, A6), D1             ; Store ($7E + A6) inside D1, the custom pallete ID.
  BEQ         $1827AC                   ; If D1 is 0, not a custom pallete, ignore the line below.
  JMP         $96444                    ; Jumps back to the code that fixes and sets the pallete ID.
  MOVEQ       #$0, D1                   ; Code from the original game that was replaced to jump to this code.
  MOVE.W      ($58, A6), D0             ; Code from the original game that was replaced to jump to this code.
  JMP         $9643C                    ; Jumps back to where it stopped in the original code.


  JSR         $1827D0                   ; Replace 5738E, 58566, 585AC, 59622, 595C6.

; ORG         $1827D0

                                        ; Block of code that fixes Butcher's machete pallete (Subboss).
  MOVE.B      #$1, (A0)                 ; Code from the original game readjusted.
  MOVE.B      ($23, A6), ($23, A0)      ; Stores ($23 + A6) inside ($23 + A0), grabs Butcher's pallete.
  MOVE.B      ($23, A6), ($BE, A0)      ; Stores ($DE + A6) inside ($BE + A0), grabs Butcher's pallete.
  RTS                                   ; Returns back to the routine that called this code.


  JMP         $182800                   ; Replace 53EE0.

; ORG         $182800

                                        ; Block of code that fixes Morgue's pallete.
  MOVE.B      #$84, ($DF, A6)           ; Stores 84 inside ($DF + A6), transformation custom pallete ID.
  MOVE.B      ($DE, A6), D0             ; Stores ($DE + A6) inside D0, custom pallete ID.
  BNE         $182810                   ; If D0 is not 0, custom pallete, ignore the line below.
  MOVE.B      #$9D, D0                  ; Stores 9D inside D0, original pallete ID.
  MOVE.B      D0, ($23, A6)             ; Stores D0 inside ($23 + A0), the correct pallete ID.
  JMP         $53EE6                    ; Jumps back to where it stopped in the original code.


  JMP         $182830                   ; Replace 548C2.

; ORG         $182830

                                        ; Block of code that fixes Morgue's pallete.
  TST.B       ($DE, A6)                 ; Compares 0 and ($DE + A6), custom pallete ID.
  BEQ         $18284E                   ; If it is 0, not a custom pallete, ignore the 6 lines below.
  MOVE.W      D0, D1                    ; Stores D0 inside D1, value from 0 to B.
  LSR.W       #1, D1                    ; Shifts right D1 bits by 1, to have the same value for 2 frames.
  AND.W       #$1, D1                   ; D1 and 1, to ensure it will be 0 or 1.
  ADD.B       #$DE, D1                  ; Add DE to D1, the custom pallete ID offset.
  MOVE.B      (A6, D1.W), ($23, A6)     ; Stores (A6 + D1.W) inside ($23 + A6), the custom pallete ID.
  JMP         $548D4                    ; Jumps back to end of the routine that handles the pallete ID.
  MOVE.W      D0, D1                    ; Code from the original game that was replaced to jump to this code.
  AND.W       #$1, D1                   ; Code from the original game that was replaced to jump to this code.
  JMP         $548C8                    ; Jumps back to where it stopped in the original code.


  JMP         $182870                   ; Replace 548D6.

; ORG         $182870

                                        ; Block of code that fixes Morgue's pallete.
  MOVE.B      ($DE, A6), D2             ; Stores ($DE + A6) inside D2, the custom pallete ID.
  BNE         $18287A                   ; If D2 is not 0, custom pallete, ignore the line below.
  MOVE.B      #$9F, D2                  ; Stores 9F inside D2, the original pallete ID.
  MOVE.B      D2, ($23, A6)             ; Stores D2 inside ($23 + A6), the correct pallete ID.
  JMP         $548DC                    ; Jumps back to where it stopped in the original code.


  JMP         $1828A0                   ; Replace 963A6.

; ORG         $1828A0

                                        ; Block of code that saves Slisaur's shadow custom pallete ID.
  MOVE.B      #$1, (A0)                 ; Code from the original game readjusted.
  CLR.B       ($7E, A0)                 ; Clears ($7E + A0), clears the custom pallete ID.
  BTST        #7, ($27, A6)             ; Compares 0 and the 8th bit of ($27 + A6), subboss posture ID.
  BEQ         $1828B6                   ; If it is 0, not a subboss, ignore the line below.
  MOVE.B      #$84, ($7E, A0)           ; Stores 84 inside ($7E + A0), the custom pallete ID.
  JMP         $963AC                    ; Jumps back to where it stopped in the original code.


  JSR         $1828D0                   ; Replace 6183C.

; ORG         $1828D0

                                        ; Block of code that saves Fessenden 2nd body part address.
  MOVE.B      #$4, ($63, A0)            ; Code from the original game that was replaced to jump to this code.
  MOVE.L      D0, A0                    ; Stores D0 inside A0, main Fessenden address.
  MOVE.W      D3, ($DC, A0)             ; Stores D3 inside ($DC + A0), the missing body part address.
  RTS                                   ; Returns back to the routine that called this code.


  JSR         $1828F0                   ; Replace 5855C, 585A4.

; ORG         $1828F0

                                        ; Block of code that ignores the spawn of additional things (Enemy).
  BTST        #7, ($27, A6)             ; Compares 0 and the 8th bit of ($27 + A6), subboss posture ID.
  BNE         $1828FE                   ; If it is not 0, it is a subboss, ignore the line below.
  JMP         $483C                     ; Code from the original game readjusted.
  CLR.L       ($A6, A6)                 ; Clears ($A6, A6), both machete addresses.
  CLR.L       ($B4, A6)                 ; Clears ($B4, A6), both machete addresses.
  JMP         $485A                     ; Jump to the code that ensures spawning stuff will be ignored.


  JMP         $182920                   ; Replace 81A92.
  NOP

; ORG         $182920

                                        ; Block of code that ignores the spawn of additional things (Enemy).
  CLR.W       ($6E, A6)                 ; Code from the original game that was replaced to jump to this code.
  BTST        #7, ($27, A6)             ; Compares 0 and the 8th bit of ($27 + A6), subboss posture ID.
  BEQ         $182936                   ; If it is 0, it is not a subboss, ignore the line below.
  CLR.W       ($00C6, A6)               ; Clears ($C6 + A6), to not allow a bugged address.
  JMP         $81AEE                    ; Jumps to a code that ignores marking slisaur boss as dead.
  MOVE.W      ($00C6, A6), A0           ; Code from the original game that was replaced to jump to this code.
  JMP         $81A9A                    ; Jumps to a code that ignores marking slisaur boss as dead.


  JMP         $182950                   ; Replace 53EF0.

; ORG         $182950

                                        ; Block of code that ignores replacing pallete ID (Morgue).
  BTST        #7, ($27, A6)             ; Compares 0 and the 8th bit of ($27 + A6), subboss posture ID.
  BEQ         $18295E                   ; If it is 0, it is not a subboss, ignore the line below.
  JMP         $53F0C                    ; Jumps to the code that ignores replacing pallete ID.
  LEA         $9143A0, A0               ; Code from the original game that was replaced to jump to this code.
  JMP         $53EF6                    ; Jumps back to where it stopped in the original code.


; ORG         $182A00

                                        ; Block of code that handles Fessenden 2nd parts disappearing.
  CMP.B       #$22, ($3, A6)            ; Compares 22 and ($3 + A6), character ID.
  BNE         $182A34                   ; If it is not 22, not Fessenden 2nd, go to the JMP line.
  BSR         $181A30                   ; Calls a routine that saves some register values.
  MOVEQ       #$0, D0                   ; Store 0 inside D0, the 1st part address.
  MOVE.L      #$04000000, D1            ; Stores 4000000 inside D1, dead action.
  MOVE.W      #$0C, D6                  ; Stores C inside D6, it makes the enemy dissapear (Lash Terhune ID).
  LEA         ($B0, A6), A0             ; Stores ($B0 + A6) inside A0, Fessenden 2nd 1st part address.
  MOVE.L      A6, A1                    ; Stores A6 inside A1, to ensure the higher 2 bytes are correct.
  BSR         $182A3A                   ; Calls the code that trigger the death animation.
  CMP.B       #$8, D0                   ; Compares 8 and D0, 4 body parts, addresses of 2 bytes.
  BCS         $182A1E                   ; If it is less than 8, go back 2 lines above to the BSR line.
  ADD.B       #$24, D0                  ; Adds 24 to D0, go to the missing body part address.
  BSR         $182A3A                   ; Calls the code that trigger the death animation.
  ADDQ.B      #$5, ($0C, A1)            ; Adds 5 to ($C + A1), set height to a very high value.
  BSR         $181A60                   ; Calls a routine that restore some register values.
  JMP         $18269C                   ; Jumps back to where it stopped.
  MOVE.W      (A0, D0.W), A1            ; Stores (A0 + D0.W) inside A1, the current part address.
  MOVE.L      D1, ($4, A1)              ; Stores D1 inside ($4 + A1), the dead action in the part address.
  MOVE.W      D6, ($20, A1)             ; Stores D6 inside ($20 + A1), Lash ID in the body part address.
  ADDQ.W      #$2, D0                   ; Stores 2 inside D0, the next body part offset.
  CMP.B       #$4, D0                   ; Compares 4 and D0, body part being check, addresses of 2 bytes.
  BGT         $182A52                   ; If it is more than 4, not a bugged body part, ignore the line below.
  ADDQ.B      #$5, ($0C, A1)            ; Adds 5 to ($C + A1), set height to a very high value, so it won't be displayed.
  RTS                                   ; Returns back to the routine that called this code.


; ORG         $181400                   ; Replace 181400 (There is enough space to add all the code).

                                        ; Check if the enemy should become invulnerable.
  CLR.W       D0                        ; Clears D0.
  MOVE.B      ($3, A6), D0              ; Stores ($3 + A6) inside D0, the enemy ID.
  MOVE.B      ($18, PC, D0.W), D0       ; Stores ($18 + PC + D0.W) inside D0, the enemy update target flag.
  TST.B       D0                        ; Compares 0 and D0.
  BLT         $18141A                   ; If it is less than 0, go to the RTS line.
  BTST        #7, ($27, A6)             ; Compares 0 and the 8th bit of ($27 + A6), subboss posture ID.
  BNE         $18141A                   ; If it is not 0, it is a subboss, ignore the line below.
  MOVE.B      #$4, (A6)                 ; Stores 4 inside (A6), the invulnerability flag.
  RTS                                   ; Returns back to the routine that called this code.


; This module has several routines that modifies the way bosses
; behave, to make it possible to use them as subbosses at any
; moment in the stage without bugging the game.
; 
; 182600:   Handles Slowdown and End of Stage (Boss)
; 182620:   Forces Posture ID to Fessenden 2nd Body Parts
; 182640:   Handles End of Area (Boss)
; 182660:   Handles Ending the Music (Boss)
; 182680:   Handles Subbosses Disappearing When They Die
; 1826B0:   Handles Slowdown When Morgan Dies
; 1826E0:   Handles Starting the Music (Boss)
; 182700:   Pallete Transfer Fix (Fessenden 2nd)
; 182730:   Handles Calling the Boss Helper Enemy Group (Boss)
; 182750:   Fixes Morgan Becoming Immortal When He Transforms
; 182770:   Fixes Hogg's Bike Spawn
; 1827A0:   Fixes Slice / Slisaurs Shadow Pallete (Subboss)
; 1827D0:   Fixes Butcher's Machete Pallete (Subboss)
; 182800:   Fixes Morgue's Pallet 1
; 182830:   Fixes Morgue's Pallet 2
; 182870:   Fixes Morgue's Pallet 3
; 1828A0:   Saves Slisaur Shadow Custom Pallete
; 1828D0:   Saves Fessenden 2nd Body Part Address
; 1828F0:   Ignores the Spawn of Additional Objects 1 (Enemy)
; 182920:   Ignores the Spawn of Additional Objects 2 (Enemy)
; 182950:   Ignores Replacing Pallete ID (Morgue)
; 182A00:   Handles Fessenden 2nd Body Parts Disappearing When He Dies
; 181400:   Handles If Bosses Should Become Invulnerable