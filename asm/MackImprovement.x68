*----------------------------------------------------------------------------------------------
* Title:        CDREE Mack Improvement
* Written by:   GameHackFan
* Date:
* Description:  Adds support for custom posture ID.
*               Fixes custom pallete ID support.
*----------------------------------------------------------------------------------------------

  JMP         $1821C0                   ; Replace 53510.

; ORG         $1821C0

                                        ; Block of code that adds support for custom posture ID.
  JSR         $120E.L                   ; Code from the original game that was replaced to jump to this code.
  BSR         $182100                   ; Calls the code that sets angry and meek palletes.
  MOVE.W      #$DE, D0                  ; Stores DE inside D0, the custom pallete ID offset.
  TST.B       ($27, A6)                 ; Compares 0 and ($27 + A6), mack posture ID.
  BNE         $1821D6                   ; If it is 0, ignore the line below.
  ADDQ.B      #$1, D0                   ; Adds 1 to D0, DE to DF, the angry pallete ID offset.
  MOVE.B      (A6, D0.W), ($23, A6)     ; Stores (A6 + D0.W) inside ($23 + A6), the pallete ID.
  JMP         $53516                    ; Jumps back to where it stopped in the original code.


; ORG         $53934                    ; Replace 53934 (There is enough space to add all the code).

                                        ; Block of code that fixes custom pallete ID support.
  LEA         ($DE, A6), A0             ; Stores ($DE + A6) inside A0, the 1st custom pallete address.
  NOP                                   ; No operation, does nothing.
  NOP                                   ; No operation, does nothing.
  NOP                                   ; No operation, does nothing.
  NOP                                   ; No operation, does nothing.
  NOP                                   ; No operation, does nothing.
  NOP                                   ; No operation, does nothing.


; This module adds supports to a custom posture that makes 
; mack use the correct pallete ID, it also adds a better 
; support for custom pallete IDs.
;
; 1821C0:   Custom Posture and Pallete ID Handler.
; 053934:   Custom Pallete ID Fix.