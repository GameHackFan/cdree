*----------------------------------------------------------------------------------------------
* Title:        CDREE Enemy Health Improvement
* Written by:   GameHackFan
* Date:
* Description:  Increases the HP by a value based on the Game Difficulty 2.
*----------------------------------------------------------------------------------------------

  JSR         $182500                   ; Replace 31436, 31E34.

; ORG         $182500

                                        ; Block of code that increases the enemy HP based.
  BTST        #7, ($27, A6)             ; Compares 0 and the 8th bit of (27 + A6), subboss posture ID.
  BNE         $18253A                   ; If it is not 0, subboss, jump to 3rd block of code.
  ADD.W       D1, A0                    ; Code from the original game that was replaced to jump to this code.
  MOVE.W      (A0), D0                  ; Code from the original game that was replaced to jump to this code.
  CLR.W       D1                        ; Clears D1, the offset of the normal enemies HP increase list.
  ADD.B       ($766C, A5), D1           ; Adds (766C + A5) to D1, game difficulty 2 value.
  ADD.W       D1, D1                    ; Adds D1 to D1, doubles it, the HP increase is 2 bytes.
  ADD.W       ($3A, PC, D1.W), D0       ; Adds (3A + PC + D1.W) to D0, the HP value to increase.
  MOVE.W      D0, D1                    ; Code from the original game that was replaced to jump to this code.
  RTS                                   ; Returns back to the routine that called this code.

                                        ; Block of code that increases the boss HP based.
  BTST        #7, ($27, A6)             ; Compares 0 and the 8th bit of (27 + A6), subboss posture ID.
  BNE         $18253A                   ; If it is not 0, subboss, jump to the 3rd block of code.
  ADD.W       D1, A0                    ; Code from the original game that was replaced to jump to this code.
  MOVE.W      (A0), D0                  ; Code from the original game that was replaced to jump to this code.
  CLR.W       D1                        ; Clears D1.
  MOVE.B      ($766C, A5), D1           ; Stores (766C + A5) inside D1, game difficulty 2 value.
  ADD.W       D1, D1                    ; Adds D1 to D1, doubles it, the HP increase is 2 bytes.
  ADDQ.W      #$8, D1                   ; Adds 8 to D1, the offset of the boss HP increase list.
  ADD.W       ($1C, PC, D1.W), D0       ; Adds (1C + PC + D1.W) to D0, the HP value to increase.
  MOVE.W      D0, D1                    ; Code from the original game that was replaced to jump to this code.
  RTS                                   ; Returns back to the routine that called this code.

                                        ; Block of code that sets the subboss HP.
  CLR.W       D1                        ; Clears D1.
  MOVE.B      ($27, A6), D1             ; Stores (27 + A6) inside D1, the posture ID.
  AND.W       #$F, D1                   ; D1 and F, to have the HP index.
  MOVE.W      ($1A, PC, D1.W), D0       ; Moves (1A + PC + D1.W) to D0, the subboss HP value.
  BRA         $182528                   ; Jump to 2nd code CLR.W line of code.


  JSR         $182580                   ; Replace 5AAEE.

; ORG         $182580

                                        ; Block of code that sets the enemy HP to C.
  MOVEQ       #$C, D0                   ; Stores C inside D0, the enemy HP.
  MOVE.W      D0, ($6A, A6)             ; Stores D0 inside (6A + A6), the enemy lifebar size.
  MOVE.W      D0, ($6C, A6)             ; Stores D0 inside (6A + A6), the enemy health.
  MOVE.W      D0, ($6E, A6)             ; Stores D0 inside (6A + A6), related to the enemy health.
  RTS                                   ; Returns back to the routine that called this code.


  JSR         $1825A0                   ; Replace 6070E.

; ORG         $1825A0

                                        ; Block of code that sets the enemy HP to 32.
  MOVE.W      #$A, ($78, A6)            ; Code from the original game that was replaced.
  MOVEQ       #$32, D0                  ; Stores 32 inside D0, the enemy HP.
  BRA         $182582                   ; Jumps to the code that sets the enemy HP.


; ORG         $5B070                    ; Replace 5B070, 5B09A (There is enough space for the new code).

                                        ; Block of code that sets the dwarf HP to C.
  MOVE.W      #$C, ($6A, A6)            ; Stores C inside (6A + A6), the enemy lifebar size.
  MOVE.W      #$C, ($6C, A6)            ; Stores C inside (6A + A6), the enemy health.
  MOVE.W      #$C, ($6E, A6)            ; Stores C inside (6A + A6), related to the enemy health.


; This module has routines that increases the enemies HP based 
; on the game difficulty 2 value. For subbosses it sets the 
; starting HP based on their posture ID and increases it after,
; based on the game difficulty 2. For enemies that throw things
; and run away, they are forced to have C (12) HP.
; 
; 182500:   Increases the Enemy HP (Current Enemy).
; 18251C:   Increases the Enemy HP (Current Boss).
; 18253A:   Sets the Enemy HP (Subboss).
;
; 182550:   HP Increase Values (Add the data below).
;           00 00 20 00 42 00 64 00 00 00 42 00 84 00 C8 00
;
; 182560:   Subboss HP Values (Add the data below).
;           C8 00 C8 00 C8 00 C8 00 C8 00 C8 00 C8 00 F4 01