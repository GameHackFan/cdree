*----------------------------------------------------------------------------------------------
* Title:        CDREE Car Improvement
* Written by:   GameHackFan
* Date:
* Description:  It has fixes necessary to ensure the car will work
*               properly.
*----------------------------------------------------------------------------------------------

  JMP         $183200                   ; Replace 8BD36.

; ORG         $183200

                                        ; Block of code that restricts the radio calling the car (Camera At 7D00+).
  CMP.W       #$7D00, ($744, A5)        ; Compares 7D00 and ($744 + A5), camera position.
  BHI         $183214                   ; If it is bigger than 7D00, don't call the car, go to the last line.
  JSR         $4860.L                   ; Code from the original game readjusted.
  JMP         $8BD3C                    ; Jumps to the code that handles calling the car.
  JMP         $8BDDA                    ; Jumps to the code that ignores calling the car.


  JMP         $183230                   ; Replace 8C1CC.
  NOP

; ORG         $183230

                                        ; Block of code that restricts leaving the car (Camera At 3000-).
  CMP.W       #$3000, ($744, A5)        ; Compares 3000 and ($744 + A5), camera position.
  BCS         $183244                   ; If it is less than 3000, can't leave the car, go to the last line.
  TST.W       ($6C, A6)                 ; Compares 0 and ($6C + A6), car HP.
  BGT         $183244                   ; If it is bigger than 0, car isn't broken, go to the last line.
  JMP         $8C1D4                    ; Jumps to the code that leaves the car.
  JMP         $8C1E8                    ; Jumps to the code that ignores leaving the car.


; This module has some fixes to ensure the car will work
; properly, not causing major bugs to the game. In the
; original, you couldn't break your car before reaching
; Hogg, but in this one it is possible and it causes a 
; softlock if that happens, so there is a routine to not
; allow that to happen, it also has a routine that doesn't 
; allow the radio to call the car after 7D00, values over
; 7FFF can be processed as negative value, and allowing 
; the player to reach values over 7FFF crashes the game
; if an enemy spawns.
; 
; 182200:   Restricts Radio Calling the Car (Camera At 7D00)
; 182250:   Restricts Players Leaving the Car (Camera At 3000-) 