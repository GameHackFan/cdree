*----------------------------------------------------------------------------------------------
* Title:        CDREE Stage Script Improvement
* Written by:   GameHackFan
* Date:
* Description:  Adds an address jump feature to the Boss Helper Lock Group.
*               Add a feature that stop spawning enemies until a
*               certain amount of empy slots are available.
*               Revert changes made by DINORE.
*               Fixes some bugs;
*----------------------------------------------------------------------------------------------

  JMP         $182200                   ; Replace 7C084.
  NOP

; ORG         $182200

                                        ; Block of code that handles the address jump feature.
  CMP.W       #$7FFE, ($80, A6)         ; Compares 7FFE and (80, A6), 7FFF/7FFE are the address jump flag.
  BLT         $18222A                   ; If it is less than 7FFE, go to the 3rd block of code.

                                        ; Block of code that handles the object address jump.
  MOVE.L      ($A4, A6), A2             ; Stores (A4 + A6) inside A2, the current object address.
  MOVE.B      ($3358, A5), D0           ; Stores (3358 + A5) inside D0, current amount of enemies alive.
  CMP.B       ($E, A2), D0              ; Compares (E + A2) and D0, the amount of enemies to unlock.
  BHI         $182222                   ; If it is bigger than D0, go to the CLR line.
  MOVE.L      ($6, A2), A2              ; Stores (6 + A2) inside A2, the object address jump.
  MOVE.L      A2, ($A4, A6)             ; Stores A2 inside (A4 + A6), the current object to be spawned. 
  MOVE.W      (A2), ($80, A6)           ; Stores (A2) inside (80 + A6), the current object spawn delay.
  CLR.W       D0                        ; Clears D0.
  JMP         $7C08C                    ; Jumps to the line of code that handles spawning the object.

                                        ; Block of code that executes the replaced code.
  SUBQ.W      #1, ($80, A6)             ; Code from the original game that was replaced to jump to this code.
  BCS         $182236                   ; Code from the original game readjusted, go to the last line of code.
  JMP         $7C08C                    ; Jumps to the line of code that handles spawning the object.
  JMP         $7C08E                    ; Jumps to the line of code that handles spawning the object.


  JMP         $182250                   ; Replace FDBA.

; ORG         $182250

                                        ; Block of code that creates an object spawn barrier.
  MOVE.W      ($4, A2), D0              ; Stores (4 + A2) inside D0, the offset.
  BPL         $18226A                   ; If D0 is positive, go to the last 2 lines.
  MOVE.W      ($E, A2), D0              ; Stores (E + A2) inside D0, the empty slots required.
  CMP.W       ($65F8, A5), D0           ; Compares ($65F8 + A5) and D0, the empty slots available.            
  BLS         $182270                   ; If D0 is equal or lower, enough empty slots, go to the last line.
  LEA         (-$10, A2), A2            ; Stores (-10 + A2) inside A2, previous character, game will go to the next.
  JMP         $FE64                     ; Calls the routine that will ensure no more enemies will be read in this frame.
  JSR         $FD56                     ; Code from the original game readjusted.
  JMP         $FE60                     ; Code from the original game readjusted.


; ORG         $FE54                     ; Replace FE54, FF18 (There is enough space to add all the code).

                                        ; Block of code that restore back the dynamic rage to enemies.
  MOVE.B      ($E, A2), ($5B, A0)       ; Stores (E + A2) inside (5B + A0), sets the enemy rage.


; ORG         $181C40                   ; Replace 181C40 (There is enough space to add all the code).

                                        ; Block of code that fixes a teleportation/translation bug.
  CMP.B       #$4, ($82, A0)            ; Compares 4 and (82 + A0), enemy falling.
  BNE         $181C4C                   ; If it is not 4, not an enemy, ignore the line below.
  CLR.W       ($00C0, A0)               ; Clears (C0 + A0), memory region that causes the bug.
  RTS                                   ; Returns back to the routine that called this code.


; This module has a routine that adds an address jump feature
; to the Boss Helper Lock Group, which allow the possibility
; of looping if the jump is added at the end to the beginning 
; of the bytes of the Lock. It also allows stages like the last 
; one to have a Lock that behaves like multiple locks, similar
; to the other stages. Another great feature is the Object Spawn 
; Barrier, it doesn't allow the game to go to the next enemy
; unless a certain amount of empty enemy slots are available,
; which is necessary to ensure that a boss like Hogg will 
; always spawn.
; 
; 182200:   Handles Boss Helper Object Address Jump
; 182250:   Handles Object Spawn Barrier
;
; 00FE54:   Revert Back Dynamic Rage
; 00FF18:   Revert Back Dynamic Rage
; 181C40:   Fixes Teleportation Bug (Butcher, etc)