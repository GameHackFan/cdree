*----------------------------------------------------------------------------------------------
* Title:        CDREE Shivat Improvement
* Written by:   GameHackFan
* Date:
* Description:  Adds support for custom posture ID.
*               Increases the angry timer.
*               Fixes custom pallete ID support.
*----------------------------------------------------------------------------------------------

; ORG         $48462                    ; Replace 48462 (There is enough space to add all the code).

                                        ; Block of code that adds support for custom posture ID.
  ADDQ.B      #2, ($4, A6)              ; Code from the original game, very important.
  TST.B       ($27, A6)                 ; Compares 0 and ($27 + A6), the posture ID.
  BEQ         $48478                    ; If it is 0, ignore the 2 lines below.
  MOVE.B      #$1, ($59, A6)            ; Stores 1 inside ($59 + A6), It must be 1 to spawn angry properly.
  MOVE.B      #$2, ($5, A6)             ; Stores 2 inside ($5, A6), to spawn angry.
  JSR         $182100                   ; Calls the code that sets angry and meek palletes.
  MOVE.B      ($DE, A6), D0             ; Stores ($DE + A6) inside D0, the meek pallete ID.
  MOVE.B      D0, ($23, A6)             ; Code from the original game readjusted.
  MOVE.B      D0, ($BD, A6)             ; Code from the original game readjusted.
  BRA         $4851A                    ; Code from the original game, necessary.
  NOP                                   ; No operation, does nothing.
  NOP                                   ; No operation, does nothing.


; ORG         $48784                    ; Replace 48784 (There is enough space to add all the code).

                                        ; Block of code that increases the angry timer.
  MOVE.B      #$7F, ($BB, A6)           ; Stores 7F inside ($BB, A6), angry timer.


; ORG         $48794                    ; Replace 48794 (There is enough space to add all the code).

                                        ; Block of code that better handles the angry timer.
  JSR         $182190                   ; Calls the code that handles better the dinosaur becoming meek.
  CMP.W       #$7FFF, ($AA, A6)         ; Compares 7FFF and ($AA, A6), if his angry timer expired.
  BCS         $487BE                    ; Code from the original game readjusted.


; ORG         $49424                    ; Replace 49424 (There is enough space to add all the code).

                                        ; Block of code that fixes custom pallete ID support.
  LEA         ($DE, A6), A0             ; Stores (DE + A6) inside A0, the 1st custom pallete address.
  NOP                                   ; No operation, does nothing.
  NOP                                   ; No operation, does nothing.
  NOP                                   ; No operation, does nothing.
  NOP                                   ; No operation, does nothing.


; This module adds supports to a custom posture that makes 
; Shivat to spawn angry, increases his angry timer and a
; better support for custom pallete IDs.

; 048462:   Custom Posture and Pallete ID Handler.
; 048784:   Increase Angry Timer.
; 048794:   Handles Better Angry Timer.
; 049424:   Custom Pallete ID Fix.