*----------------------------------------------------------------------------------------------
* Title:        CDREE Dinosaur Improvement
* Written by:   GameHackFan
* Date:
* Description:  It has routines that improves the way the dinosaurs behave.
*               It forces a better pallete to all dinosaurs when
*               they are not angry.
*               It forces the dinosaur to go meek if they are too distant.
*----------------------------------------------------------------------------------------------

; ORG         $182100

                                        ; Block of code that forces a better pallete 2nd pallete.
  TST.B       ($DE, A6)                 ; Compares 0 and (DE + A6), custom pallete ID.
  BEQ         $182114                   ; If it is 0, ignore the 3 lines below.
  MOVE.B      ($DE, A6), ($DF, A6)      ; Stores (DE + A6) inside (DF + A6), moves it to the correct address.
  MOVE.B      #$88, ($DE, A6)           ; Stores 88 inside (DE + A6), a compatible pallete ID.
  BRA         $182134                   ; Jumps to RTS line.
  BSR         $181A30                   ; Calls a routine that saves some register values.
  CLR.W       D0                        ; Clears D0.
  MOVE.B      ($4D9, A5), D0            ; Stores (4D9 + A5) inside D0, the stage ID.
  MOVE.B      ($786, A5), D1            ; Stores (786 + A5) inside D1, the area ID.
  LSL.W       #$3, D0                   ; Shifts left D0 bits by 3, 0 to 0, 1 to 8, 2 to 10, etc.
  ADD.B       D1, D1                    ; Adds D1 to D1, it is 2 pallete IDs, so 2 bytes.
  ADD.B       D1, D0                    ; Adds D1 to D0, to have the final offset of the pallete IDs.
  MOVE.W      ($16, PC, D0.W), D1       ; Stores (16 + PC + D0.W) inside D1, best pallete IDs for the area.
  MOVE.W      D1, ($DE, A6)             ; Stores D1 inside (DE + A6), both custom pallete IDs.
  BSR         $181A60                   ; Calls a routine that restore some register values.
  RTS                                   ; Returns back to the routine that called this code.


; ORG         $182190

                                        ; Block of code that handles better the dinosaur becoming meek.
  MOVE.W      ($744, A5), D1            ; Stores ($744 + A5) inside D1, camera position.
  SUB.W       ($8, A6), D1              ; Subtracts ($8 + A6) from D1, dinosaur position.
  BPL         $18219C                   ; If D1 is positive, ignore the line below.
  NEG         D1                        ; Converts negative value to positive.
  CMP.W       #$480, D1                 ; Compares 480 to D1, distance tolerance.
  BHI         $1821A8                   ; If D1 is bigger than 480, go meek, ignore the 2 lines below.
  ADDQ.W      #$1, ($AA, A6)            ; Adds 1 to ($AA + A6), increases the angry timer.
  RTS                                   ; Returns back to the routine that called this code.
  MOVE.W      #$7FFF, ($AA, A6)         ; Stores 7FFF inside ($AA + A6), expires the angry timer.
  RTS                                   ; Returns back to the routine that called this code.


; This module has routines to help dinosaurs to work properly.
; It has a routine that ensures the dinosaurs will have a good
; pallete if no custom pallete is used, it also ensures an average
; meek pallete if a custom pallete is informed. It has a routine
; that better handles the dinosaur becoming meek if he is too
; far away.
; 
; 182100:   Sets Meek and Angry Palletes (Dinosaurs)
; 182190:   Handles Better Dinosaur Becoming Meek
;
; 182140:   Dinosaur Best Pallete IDs (All Areas)
;           9D 88 89 88 92 91 92 91 9F 9E 9F 9E 89 88 89 88
;           89 9D 89 9D 89 9D 89 9D 89 9D 89 88 89 88 89 88
;           9F 9E 89 88 89 88 89 88 89 88 89 88 9E 9F 9E 9F
;           9D 9F 89 88 89 88 89 88 9D 9E 89 88 9D 9E 9E 9D