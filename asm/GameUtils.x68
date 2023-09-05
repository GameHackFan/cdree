*----------------------------------------------------------------------------------------------
* Title:        CDREE Game Utils
* Written by:   GameHackFan
* Date:         
* Description:  It has a routine that randomizes a value.
*               It has a routine that randomizes a value based
*               on current frame.
*----------------------------------------------------------------------------------------------

; ORG         $181AB0

                                        ; Block of code that randomizes a value inside D5 (1 to 8 iterations).
  MOVE.B      ($75C2, A5), D0           ; Stores ($75C2 + A5) inside D0, current frame, to make it dynamic.
  AND.W       #$7, D0                   ; D0 and 7, it will iterate 1 to 8 times the randomizer code.
  MOVE.W      D0, ($7EF6, A5)           ; Stores D0 inside ($7EF6, A5), the amount of iterations.
  BSR         $183300                   ; Calls the routine that randomizes a value inside D0.
  SUBQ.W      #$1, ($7EF6, A5)          ; Subtracts 1 from ($7EF6, A5), 1 less iteration.
  BGE         $181ABC                   ; If ($7EF6 + A5) is 0 or bigger, go to the BSR line.
  RTS                                   ; Returns back to the routine that called this code.


; ORG         $183300

                                        ; Block of code that randomizes a value inside D5.
  TST.W       ($7EFC, A5)               ; Compares 0 and ($7EFC + A5), amount of times randomized.
  BEQ         $18330C                   ; If it is 0, change the seed, ignore the 2 lines below.
  MOVE.W      ($7EFE, A5), D0           ; Stores ($7EFE + A5) inside D0, current seed.
  BNE         $183310                   ; If it is not 0, ignore the line below.
  MOVE.B      ($75C2, A5), D0           ; Stores ($75C2 + A5) inside D0, current frame, to make it dynamic.
  ADD.W       #$FC15, D0                ; Adds FC15 to D0, part of the randomizer calculation.
  MULU.W      #$2AB, D0                 ; Multiplies D0 by 2AB, part of the randomizer calculation.
  MOVE.L      D0, ($7EF8, A5)           ; Stores D0 inside ($7EF8 + A5), part of the randomizer calculation.
  LSR.L       #$8, D0                   ; Shifts right D0 bits by 8, part of the randomizer calculation.
  LSR.L       #$8, D0                   ; Shifts right D0 bits by 8, part of the randomizer calculation.
  EOR.L       D0, ($7EF8, A5)           ; D0 exclusive or ($7EF8 + A5), part of the randomizer calculation.
  MOVE.L      ($7EF8, A5), D0           ; Stores ($7EF8 + A5) inside D0, part of the randomizer calculation.
  MOVE.W      D0, ($7EFE, A5)           ; Stores D0 inside ($7EFE + A5), the new seed.
  ADDQ.W      #$1, ($7EFC, A5)          ; Adds 1 to ($7EFC + A5), the amount of times it randomized.
  SWAP        D0                        ; Inverts D0 higher and lower bits, to clean it.
  CLR.W       D0                        ; Clears D0.
  SWAP        D0                        ; Inverts D0 higher and lower bits, to restore it.
  RTS                                   ; Returns back to the routine that called this code.


; This module has routines that randomizes a number and 
; saves it in memory as seed for the next randomization.
;
; 181AB0:   Randomizes a Value Inside D0 (1 to 8 Iterations)
; 183300:   Randomizes a Value Inside D0