*----------------------------------------------------------------------------------------------
* Title:        CDREE Mack Improvement
* Written by:   GameHackFan
* Date:
* Description:  Fixes custom pallete ID support.
*----------------------------------------------------------------------------------------------

; ORG         $6073E                    ; Replace 6073E (There is enough space to add all the code).

                                        ; Block of code that adds support for custom posture ID.
  JSR         $182100                   ; Calls the code that sets angry and meek palletes.
  MOVE.B      ($DF, A6), ($23, A6)      ; Stores (DF + A6) inside (23 + A6), the pallete ID.
  NOP                                   ; No operation, does nothing.
  NOP                                   ; No operation, does nothing.


; ORG         $6116C                    ; Replace 6116C (There is enough space to add all the code).

                                        ; Block of code that fixes custom pallete ID support.
  MOVE.B      ($DE, A6), ($23, A6)      ; Stores (DE + A6) inside (23 + A6), the pallete ID.
  NOP                                   ; No operation, does nothing.
  NOP                                   ; No operation, does nothing.
  NOP                                   ; No operation, does nothing.
  NOP                                   ; No operation, does nothing.
  NOP                                   ; No operation, does nothing.
  NOP                                   ; No operation, does nothing.
  NOP                                   ; No operation, does nothing.
  NOP                                   ; No operation, does nothing.



; This module adds supports for custom pallete ID to Zeke.
;
; 06073E:   Custom Pallete ID Handler.
; 06116C:   Custom Pallete ID Fix.