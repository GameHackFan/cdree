*----------------------------------------------------------------------------------------------
* Title:        CDREE Enemy Position Improvement
* Written by:   GameHackFan
* Date:
* Description:  Improves the way some enemies update their position.
*----------------------------------------------------------------------------------------------

  JMP         $183000                   ; Replace 5080C.
  NOP

; ORG         $183000

                                        ; Block of code that better handles Hogg position Y and elevation.
  MOVE.W      D0, ($8, A1)              ; Code from the original game that was replaced to jump to this code.
  CLR.W       D0                        ; Clears D0.
  MOVE.B      ($4D9, A5), D0            ; Stores ($4D9 + A5) inside D0, the stage ID.
  LSL.W       #$2, D0                   ; Shifts left D0 bits by 2, 0 to 0, 1 to 4, 2 to 8, etc.
  ADD.B       ($786, A5), D0            ; Adds ($786 + A5) to D0, the area ID.
  LSL.W       #$1, D0                   ; Shifts left D0 bits by 1, 0 to 0, 5 to 10, 6 to 12, etc.
  MOVE.W      ($1C, PC, D0.W), D0       ; Stores ($1C + PC + D0.W) inside D0, area mininum position Y.
  LSL.W       #$2, D1                   ; Shifts left D1 bits by 2, 0 to 0, 4 to 10, 8 to 20, etc.
  ADD.W       D1, D0                    ; Adds D1 to D0, the final position Y.
  MOVE.W      D0, ($10, A1)             ; Stores D0 inside ($10 + A1), the new position Y.
  CLR.W       ($0C, A1)                 ; Clears ($0C + A1), the enemy position elevation.
  JSR         $12D2E                    ; Calls the code that properly places the enemy on the ground.
  JMP         $50814                    ; Jumps back to where it stopped in the original code.


  JMP         $183080                   ; Replace 5CCA0.

; ORG         $183080

                                        ; Block of code that better handles Slisaur out of screen (Subboss).
  BTST        #7, ($27, A6)             ; Compares 0 and the 8th bit of ($27 + A6), subboss posture ID.
  BEQ         $1830BA                   ; If it is 0, not a subboss, go to the JSR line.
  MOVE.W      ($8, A6), D0              ; Stores ($8 + A6) inside D0, Slisaur position X, 
  SUB.W       ($744, A5), D0            ; Subtracts ($744 + A5) from D0, screen position X.
  ADD.W       #$40, D0                  ; Adds 40 to D0, out of screen tolerance.
  CMP.W       #$200, D0                 ; Compares 200 and D0, to check if he is out of screen.
  BCS         $1830BA                   ; If D0 is less than 200, go to the JSR line.
  SUB.W       #$40, D0                  ; Subtracts 40 from D0, to remove the addition made previously.
  BMI         $1830A6                   ; If the result is negative, ignore the 2 lines below.
  MOVE.W      #$1C0, D0                 ; Stores 1C0 inside D0, to place him out of screen, right side.
  BRA         $1830AA                   ; Ignores the lines below.
  MOVE.W      #$FFC0, D0                ; Stores FFC0 inside D0, to place him out of screen, left side.
  ADD.W       ($744, A5), D0            ; Stores ($744 + A5) inside D0, screen position X.
  MOVE.W      D0, ($8, A6)              ; Stores D0 inside ($8 + A6), Slisaur new position X.
  MOVE.L      #$200040E, ($4, A6)       ; Stores 200040E inside ($4 + A6), force Slisaur to his aggressive action.
  JSR         $1862                     ; Code from the original game that was replaced to jump to this code.
  JMP         $5CCA6                    ; Jumps back to where it stopped in the original code.


  JSR         $1830E0                   ; Replace 35AEC.
  NOP

; ORG         $1830E0

                                        ; Block of code that forces the enemy to the ground.
  CLR.W       ($0C, A6)                 ; Clears ($0C + A6), the enemy elevation.
  JSR         $12D2E                    ; Calls the code that properly places the enemy on the ground.
  RTS                                   ; Returns back to the routine that called this code.


  JMP         $183100                   ; Replace 53778 (Must be a JMP).

; ORG         $183100

                                        ; Block of code that better handles mack's elevation and becoming meek.
  JSR         $189C.L                   ; Code from the original game readjusted.
  CLR.W       ($0C, A6)                 ; Clears ($0C + A6), the enemy elevation.
  JSR         $12D2E                    ; Calls the code that properly places the enemy on the ground.
  MOVE.W      ($744, A5), D0            ; Stores ($744 + A5) inside D0, camera position.
  SUB.W       ($8, A6), D0              ; Subtracts ($8 + A6) from D0, dinosaur position.
  BPL         $18311C                   ; If D0 is positive, ignore the line below.
  NEG         D0                        ; Converts negative value to positive.
  CMP.W       #$480, D0                 ; Compares 480 to D0, distance tolerance.
  BCS         $18312C                   ; If D0 is smaller than 480, keep angry, go to the last line of code.
  CLR.W       ($6C, A6)                 ; Clears ($6C + A6), the dinosaur health.
  MOVE.W      #$4, ($A0, A6)            ; Stores 4 inside ($A0 + A6), forces the dinosaur to go meek.
  RTS                                   ; Returns back to the routine that called this code.


  JMP         $183140                   ; Replace 4FD08.

; ORG         $183140

                                        ; Block of code that better handles hoggs's position X.
  MOVE.W      #$7C, ($20, A0)           ; Code from the original game that was replaced.
  MOVE.W      ($744, A5), D0            ; Stores ($744 + A5) inside D0, camera position.
  SUB.W       ($8, A6), D0              ; Subtracts ($8 + A6) from D0, Hogg position.
  BPL         $183152                   ; If D0 is positive, ignore the line below.
  NEG         D0                        ; Converts negative value to positive.
  CMP.W       #$300, D0                 ; Compares 300 to D0, distance tolerance.
  BCS         $183164                   ; If D0 is smaller than 300, keep angry, go to the last line of code.
  MOVE.W      ($744, A5), D0            ; Stores ($744 + A5) inside D0, camera position.
  SUB.W       #$300, D0                 ; Subtracts 300 from D0, out of screen position.
  MOVE.W      D0, ($8, A6)              ; Stores D0 inside ($8 + A6), not so far behind position.
  JMP         $4FD0E                    ; Jumps back to where it stopped in the original code.


; This module has routines that fixes the position of some
; enemies that do not behave properly, like Hogg that only 
; moves in some specific Y positions and he also floats in
; areas with multiple elavations, Slisaur that runs away 
; and never comes back Lash Terhune that literaly bugs and 
; disappears if he is falling, because his falling animation
; wasn't coded properly in the original game.
; 
; 183000:   Handles Better Position Y and Elevation (Hogg)
; 183080:   Handles Better Out of Screen Position X and Behavior (Slisaur Subboss)
; 1830E0:   Handles Better Elevation (Enemy)
; 183100:   Handles Better Mack Elevation And Becoming Meek
; 183140:   Forces Hogg To Spawn Not Too Far Behind