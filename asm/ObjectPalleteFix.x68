*----------------------------------------------------------------------------------------------
* Title:        CDREE Object Pallete Fix
* Written by:   GameHackFan
* Date:
* Description:  Fix the pallete of objects due to changes brought
*               by the editor
*----------------------------------------------------------------------------------------------

  JSR         $182B00                   ; Replace 392EE.

; ORG         $182B00

                                        ; Block of code that fixes custom pallete ID transfer (object).
  MOVE.B      #$1, (A1)                 ; Code from the original game readjusted.
  MOVE.B      ($DE, A0), ($DE, A1)      ; Stores ($DE + A0) inside ($DE + A1), pallete ID transfer.
  MOVE.B      ($23, A0), ($23, A1)      ; Stores ($23 + A0) inside ($23 + A1), pallete ID transfer.
  RTS                                   ; Returns back to the routine that called this code.


  JSR         $182B30                   ; Replace 392B0, 4FD02, 5B000.

; ORG         $182B30

                                        ; Block of code that fixes custom pallete ID transfer (enemy).
  MOVE.B      #$1, (A0)                 ; Code from the original game readjusted.
  MOVE.B      ($DE, A6), ($DE, A0)      ; Stores ($DE + A6) inside ($DE + A0), custom pallete ID.
  RTS                                   ; Returns back to the routine that called this code.


  JSR         $182B50                   ; Replace 40268, 516CC.

; ORG         $182B50

                                        ; Block of code that fixes custom pallete ID transfer (enemy).
  MOVE.B      #$1, (A1)                 ; Code from the original game readjusted.
  MOVE.B      ($DE, A6), ($DE, A1)      ; Stores ($DE + A6) inside ($DE + A1), custom pallete ID.
  RTS                                   ; Returns back to the routine that called this code.


  JSR         $182B70                   ; Replace 3380A, 402A6, 4DCCE, 81918, 81942, 8197C.

; ORG         $182B70

                                        ; Block of that removes custom pallete (enemy).
  MOVE.B      #$1, (A0)                 ; Code from the original game readjusted.
  CLR.W       ($DE, A0)                 ; Clears ($DE + A0), remove any custom pallete ID.
  CLR.B       ($23, A0)                 ; Clears ($23 + A0), remove any custom pallete ID.
  RTS                                   ; Returns back to the routine that called this code.


  JSR         $182B90                   ; Replace 658A2.

; ORG         $182B90

                                        ; Block of code that fixes tyrog pallete when taking damage.
  MOVE.B      ($DE, A6), D0             ; Stores ($DE + A6) inside D0, the custom pallete ID.
  BEQ         $182B9C                   ; If it D0 is 0, ignore the 2 lines below.
  MOVE.B      D0, ($23, A6)             ; Stores D0 inside ($23 + A6), the custom pallete ID.
  RTS                                   ; Returns back to the routine that called this code.
  MOVE.B      #$9F, ($23, A6)           ; Code from the original game that was replaced to jump to this code.
  RTS                                   ; Returns back to the routine that called this code.


  JSR         $182BC0                   ; Replace 402C4.

; ORG         $182BC0

                                        ; Block of that removes custom pallete (enemy).
  MOVE.B      #$1, (A2)                 ; Code from the original game readjusted.
  CLR.W       ($DE, A2)                 ; Clears ($DE + A2), remove any custom pallete ID.
  CLR.B       ($23, A2)                 ; Clears ($23 + A2), remove any custom pallete ID.
  RTS                                   ; Returns back to the routine that called this code.


  JSR         $182BE0                   ; Replace 5B03A.

; ORG         $182BE0

                                        ; Block of that removes custom pallete (enemy).
  MOVE.B      #$1, (A1)                 ; Code from the original game readjusted.
  CLR.W       ($DE, A1)                 ; Clears ($DE + A1), remove any custom pallete ID.
  CLR.B       ($23, A1)                 ; Clears ($23 + A1), remove any custom pallete ID.
  RTS                                   ; Returns back to the routine that called this code.


  JSR         $182C00                   ; Replace 38DA6, 5E070.

; ORG         $182C00

                                        ; Block of that removes custom pallete (enemy).
  MOVE.B      #$1, (A6)                 ; Code from the original game readjusted.
  CLR.W       ($DE, A6)                 ; Clears (DE + A6), remove any custom pallete ID.
  CLR.B       ($23, A6)                 ; Clears (23 + A6), remove any custom pallete ID.
  RTS                                   ; Returns back to the routine that called this code.


  JSR         $182C20                   ; Replace 50FDA, 5C420.

; ORG         $182C20

                                        ; Block of code that sets a random custom pallete ID (Bikes).
  JSR         $120E.L                   ; Code from the original game that was replaced to jump to this code.
  TST.B       ($DE, A6)                 ; Compares 0 and ($DE + A6), the custom pallete ID.
  BNE         $182C4E                   ; If it is not 0, it has a custom pallete ID, go to one line before RTS.
  MOVE.B      ($4D9, A5), D1            ; Stores ($4D9 + A5) inside D1, the stage ID.
  LSL.W       #$2, D1                   ; Shifts left D1 bits by 2, 0 to 0, 1 to 4, 2 to 8, etc.
  ADD.B       ($786, A5), D1            ; Adds ($786 + A5) to D1, the area ID.
  LSL.W       #$1, D1                   ; Shifts left D1 bits by 2, 4 to 10, 5 to 14, 6 to 18, etc.
  BSR         $181AB0                   ; Calls the routine that randomizes a value.
  AND.W       #$1, D0                   ; D0 and 1, each area has 2 custom pallete ID available.
  ADD.B       D1, D0                    ; Stores D1 inside D0, the final offset of the pallete ID.
  MOVE.B      ($1C, PC, D0.W), D1       ; Stores ($1C + PC + D0.W) inside D1, the randomized pallete ID.
  MOVE.B      D1, ($DE, A6)             ; Stores D1 inside ($DE + A6), the custom pallete ID.
  MOVE.B      D1, ($23, A6)             ; Stores D1 inside ($23 + A6), the custom pallete ID.
  RTS                                   ; Returns back to the routine that called this code.


  JSR         $182D00                   ; Replace 6551E.

; ORG         $182D00

                                        ; Block of code that sets a random custom pallete ID (Tyrog 2).
  TST.B       ($DE, A6)                 ; Compares 0 and ($DE + A6), the custom pallete ID.
  BNE         $182D28                   ; If it is not 0, it has a custom pallete ID, go to RTS line.
  MOVE.B      ($4D9, A5), D1            ; Stores ($4D9 + A5) inside D1, the stage ID.
  LSL.W       #$2, D1                   ; Shifts left D1 bits by 2, 0 to 0, 1 to 4, 2 to 8, etc.
  ADD.B       ($786, A5), D1            ; Adds ($786 + A5) to D1, the area ID.
  LSL.W       #$2, D1                   ; Shifts left D1 bits by 2, 4 to 10, 5 to 14, 6 to 18, etc.
  BSR         $181AB0                   ; Calls the routine that randomizes a value.
  AND.W       #$3, D0                   ; D0 and 3, each area has 4 custom pallete ID available.
  ADD.B       D1, D0                    ; Stores D1 inside D0, the final offset of the pallete ID.
  MOVE.B      ($22, PC, D0.W), D1       ; Stores ($22 + PC + D0.W) inside D1, the randomized pallete ID.
  MOVE.B      D1, ($DE, A6)             ; Stores D1 inside ($DE + A6), the custom pallete ID.
  MOVE.B      D1, ($23, A6)             ; Stores D1 inside ($23 + A6), the custom pallete ID.
  RTS                                   ; Returns back to the routine that called this code.


  JSR         $182E00                   ; Replace 61764.

; ORG         $182E00

                                        ; Block of code that sets a random custom pallete ID (Fessenden 2nd).
  JSR         $483C.L                   ; Code from the original game that was replaced.
  BTST        #7, ($27, A6)             ; Compares 0 and the 8th bit of (27 + A6), subboss posture ID.
  BEQ         $182E36                   ; If it is 0, it is not a subboss, go to the RTS line.
  TST.B       ($DE, A6)                 ; Compares 0 and ($DE + A6), the custom pallete ID.
  BNE         $182E36                   ; If it is not 0, it has a custom pallete ID, go to RTS line.
  MOVE.B      ($4D9, A5), D1            ; Stores ($4D9 + A5) inside D1, the stage ID.
  LSL.W       #$2, D1                   ; Shifts left D1 bits by 2, 0 to 0, 1 to 4, 2 to 8, etc.
  ADD.B       ($786, A5), D1            ; Adds ($786 + A5) to D1, the area ID.
  LSL.W       #$2, D1                   ; Shifts left D1 bits by 2, 4 to 10, 5 to 14, 6 to 18, etc.
  BSR         $181AB0                   ; Calls the routine that randomizes a value.
  AND.W       #$3, D0                   ; D0 and 3, each area has 4 custom pallete ID available.
  ADD.B       D1, D0                    ; Stores D1 inside D0, the final offset of the pallete ID.
  MOVE.B      ($14, PC, D0.W), D1       ; Stores ($14 + PC + D0.W) inside D1, the randomized pallete ID.
  MOVE.B      D1, ($DE, A6)             ; Stores D1 inside ($DE + A6), the custom pallete ID.
  MOVE.B      D1, ($23, A6)             ; Stores D1 inside ($23 + A6), the custom pallete ID.
  RTS                                   ; Returns back to the routine that called this code.


; ORG         $35904                    ; Replace 35904 (There is enough space for the new code).

                                        ; Block of code that fixes custom pallete ID transfer (enemy).
  BGE         $35908                    ; Code from the original game readjusted.
  EXG         A0, A1                    ; Code from the original game.
  MOVE.B      #$1, (A0)                 ; Code from the original game readjusted.
  MOVE.W      #$0C, ($20, A0)           ; Code from the original game.
  CLR.W       ($26, A0)                 ; Code from the original game readjusted.
  MOVE.B      ($DE, A6), ($DE, A0)      ; Stores ($DE + A6) inside ($DE + A0), custom pallete ID.


; ORG         $5E558                    ; Replace 5E558 (There is enough space for the new code).

                                        ; Block of code that sets Tyrog 2 Spikes pallete ID to 09.
  MOVE.B      #$89, ($23, A6)           ; Stores 89 inside ($23 + A6), sets pallete ID to 89 (09).


; ORG         $655BA                    ; Replace 655BA (There is enough space for the new code).

                                        ; Block of code that fixes tyrog 2 custom pallete ID.
  MOVE.B      ($DE, A6), ($23, A6)      ; Stores ($DE + A6) inside ($23 + A6), forces custom pallete ID.


; This module has routines that fixes the pallete of objects 
; and enemies, they are necessary because of the whole custom 
; pallete ID feature.
;
; 182B00:   Pallete Transfer Fix (Object)
; 182B30:   Pallete Transfer Fix 1 (Enemy)
; 182B50:   Pallete Transfer Fix 2 (Enemy)
; 182B70:   Removes Custom Pallete 1 (Enemy)
; 182B90:   Fixes Tyrog Pallete When Taking Damage
; 182BC0:   Removes Custom Pallete 2 (Enemy)
; 182BE0:   Removes Custom Pallete 3 (Enemy)
; 182C00:   Removes Custom Pallete 4 (Enemy)
; 182C20:   Sets a Random Custom Pallete ID (Bikes)
; 182D00:   Sets a Random Custom Pallete ID (Tyrog 2)
; 182E00:   Sets a Random Custom Pallete ID (Fessenden 2nd)
; 035904:   Pallete Transfer Fix 4.
; 05E558:   Sets Tyrog 2 Spikes Pallete ID to 09.
; 0655BA:   Tyrog 2 Custom Pallete ID Fix.