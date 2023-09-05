*----------------------------------------------------------------------------------------------
* Title:        CDREE R Hopper Improvement
* Written by:   GameHackFan
* Date:
* Description:  Adds support for custom posture ID.
*               Increases the angry timer.
*               Fixes custom pallete ID support.
*----------------------------------------------------------------------------------------------

; ORG         $4DDBA                    ; Replace 4DDBA (There is enough space to add all the code).

                                        ; Block of code that adds support for custom posture ID.
  JSR         $182100                   ; Calls the code that sets angry and meek palletes.
  TST.B       ($27, A6)                 ; Compares 0 and ($27 + A6), the posture ID.
  BEQ         $4DDE0                    ; If it is 0, ignore the 5 lines below.
  MOVE.W      #$6, ($A8, A6)            ; Code from the original game, makes him spawn angry.
  MOVE.B      #$1, ($A4, A6)            ; Code from the original game, makes him spawn angry.
  MOVE.B      ($DF, A6), ($23, A6)      ; Stores ($DF + A6) inside ($23 + A6), the angry pallete ID.
  MOVE.B      ($DF, A6), ($BB, A6)      ; Stores ($DF + A6) inside ($BB + A6), the angry pallete ID.
  BRA         $4DDF2                    ; Ignores the 5 lines below.
  MOVE.B      ($DE, A6), ($23, A6)      ; Stores ($DE + A6) inside ($23 + A6), the meek pallete ID.
  MOVE.B      ($DE, A6), ($BB, A6)      ; Stores ($DE + A6) inside ($BB + A6), the meek pallete ID.
  NOP                                   ; No operation, does nothing.
  NOP                                   ; No operation, does nothing.
  NOP                                   ; No operation, does nothing.


; ORG         $4E01E                    ; Replace 4E01E (There is enough space to add all the code).

                                        ; Block of code that disables always spawning angry at stage 8.
  NOP                                   ; No operation, does nothing.
  NOP                                   ; No operation, does nothing.
  NOP                                   ; No operation, does nothing.
  NOP                                   ; No operation, does nothing.
  NOP                                   ; No operation, does nothing.


; ORG         $4E5D0                    ; Replace 4E5D0 (There is enough space to add all the code).

                                        ; Block of code that better handles the angry timer.
  JSR         $182190                   ; Calls the code that handles better the dinosaur becoming meek.
  CMP.W       #$7FFF, ($AA, A6)         ; Compares 7FFF and ($AA, A6), if his angry timer expired.
  BCS         $4E600                    ; Code from the original game readjusted.


; ORG         $4F498                    ; Replace 4F498 (There is enough space to add all the code).

                                        ; Block of code that fixes custom pallete ID support.
  LEA         ($DE, A6), A0             ; Stores (DE + A6) inside A0, the 1st custom pallete address.
  NOP                                   ; No operation, does nothing.
  NOP                                   ; No operation, does nothing.
  NOP                                   ; No operation, does nothing.
  NOP                                   ; No operation, does nothing.
  NOP                                   ; No operation, does nothing.
  NOP                                   ; No operation, does nothing.
  NOP                                   ; No operation, does nothing.
  NOP                                   ; No operation, does nothing.
  NOP                                   ; No operation, does nothing.
  NOP                                   ; No operation, does nothing.


; This module adds supports for a custom posture that makes 
; R Hopper to spawn angry, increases his angry timer and a
; better support for custom pallete IDs.

; 04DDBA:   Custom Posture and Pallete ID Handler.
; 04E01E:   Disables R Hopper Always Spawning Angry at Stage 8
; 04E5D4:   Increase Angry Timer.
; 04F498:   Custom Pallete ID Fix.