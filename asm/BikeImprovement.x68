*----------------------------------------------------------------------------------------------
* Title:        CDREE Bike Improvement
* Written by:   GameHackFan
* Date:
* Description:  Changes the behavior of bikes, changing direction after
*               leaving the screen instead of disappearing.
*----------------------------------------------------------------------------------------------

  JMP         $182300                   ; Replace 5C4B2.

; ORG         $182300

                                        ; Block of code that handles the bike changing direction.
  MOVE.W      ($8, A6), D0              ; Code from the original game, off screen calculation step.
  SUB.W       ($744, A5), D0            ; Code from the original game, off screen calculation step.
  ADD.W       #$00C0, D0                ; Code from the original game, off screen calculation step.
  CMP.W       #$300, D0                 ; Code from the original game, off screen comparison.
  BCS         $18233C                   ; If D0 is less than 300, go to the JMP line.
  SUB.W       #$00C0, D0                ; Subtracts C0 from D0, to remove the addition made previously.
  BMI         $18231C                   ; If the result is negative, ignore the 2 lines below.
  BSR         $18235A                   ; Calls the routine that positions the bike on the right side.
  BRA         $18231E                   ; Ignore the line below.
  BSR         $182342                   ; Calls the routine that positions the bike on the left side.
  ADD.W       ($744, A5), D0            ; Adds (744 + A5) to D0, left side screen position X.
  SUB.W       #$78, D0                  ; Subtracts 78 from D0, 0 to -78, 270 to 1F8, final position.
  MOVE.W      D0, ($8, A6)              ; Stores D0 inside (8 + A6), biker position X.
  BSR         $182376                   ; Calls the routine that randomizes the position Y.
  MOVE.W      #$2, ($4, A6)             ; Stores 2 inside (4 + A6), the starting action.
  CLR.W       ($0C, A6)                 ; Clears (0C + A6), the enemy position elevation.
  JSR         $12D2E                    ; Calls the code that properly places the enemy on the ground.
  JMP         $5C4B8                    ; Jumps back to where it stopped in the original code.

                                        ; Block of code that positions the bike on the left side.
  BSR         $181AB0                   ; Calls the routine that randomizes a value.
  AND.W       #$3, D0                   ; D0 and 3, 0 to 3.
  ADDQ.B      #$4, D0                   ; Adds 4 to D0, 4 to 7, the car speed.
  MOVE.B      D0, ($14, A6)             ; Stores D0 inside (14 + A6), biker move to right speed.
  MOVE.B      #$1, ($24, A6)            ; Stores 1 inside (24 + A6), biker looks right.
  CLR.W       D0                        ; Clears D0, no position X shift to start.  
  RTS                                   ; Returns back to the routine that called this code.

                                        ; Block of code that positions the bike on the right side.
  BSR         $181AB0                   ; Calls the routine that randomizes a value.
  AND.W       #$3, D0                   ; D0 and 3, 0 to 3.
  ADDQ.B      #$4, D0                   ; Adds 4 to D0, 4 to 7, the car speed.
  ADD.B       #$F5, D0                  ; Adds F5 to D0, fastest left speed is F9, F9 to FC.
  MOVE.B      D0, ($14, A6)             ; Stores D0 inside (14 + A6), biker left move speed.
  CLR.B       ($24, A6)                 ; Clears (24 + A6), biker looks left.
  MOVE.W      #$270, D0                 ; Stores 270 inside D0, position at the right side of screen.
  RTS                                   ; Returns back to the routine that called this code.

                                        ; Block of code that randomizes position Y based on area.
  CLR.W       D0                        ; Clears D0.
  MOVE.B      ($4D9, A5), D0            ; Stores (4D9 + A5) inside D0, the stage ID.
  LSL.W       #$2, D0                   ; Shifts left D0 bits by 2, 0 to 0, 1 to 4, 2 to 8, etc.
  ADD.B       ($786, A5), D0            ; Adds (786 + A5) to D0, the area ID.
  LSL.W       #$1, D0                   ; Shifts left D0 bits by 1, 0 to 0, 5 to 10, 6 to 12, etc.
  MOVE.W      ($1A, PC, D0.W), D1       ; Stores (1A + PC + D0.W) inside D0, area mininum position Y.
  BSR         $181AB0                   ; Calls the routine that randomizes a value.
  AND.W       #$7, D0                   ; D0 and 7, to keep the value between 0 and 7.
  LSL.W       #$3, D0                   ; Shifts left D0 bits by 3, 0 to 0, 1 to 8, 2 to 10, etc.
  ADD.W       D1, D0                    ; Adds D1 to D0, the bike final position Y.
  MOVE.W      D0, ($10, A6)             ; Stores D0 inside (10 + A6), set the position Y.
  RTS                                   ; Returns back to the routine that called this code.


; This module changes the behavior of the bikes, making it 
; change its direction after it is out of screen instead of
; disappear.
;
; 182300:   Change Direction When Out of Screen (Bike).