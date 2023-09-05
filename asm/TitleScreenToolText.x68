*----------------------------------------------------------------------------------------------
* Title:        CDREE Title Screen Tool Text
* Written by:   GameHackFan
* Date:
* Description:  Adds extra texts to the title screen.
*----------------------------------------------------------------------------------------------

; ORG         $181030                   ; Replace 181030 (There is enough space to add all the code).

                                        ; Block of code that prints the hack name and version in the screen.
  BSR         $181A30                   ; Calls the routine that saves some registers values.
  MOVE.W      #$1E, D1                  ; Stores 1E inside D1, the pallete id of the text.
  LEA         $1811C0, A1               ; Stores $1811C0 inside A1, The text address.
  LEA         $90ABAC, A0               ; Stores $90ABAC inside A0, The screen region of the text.
  BSR         $181000                   ; Calls the routine that prints stuff in the screen.
  LEA         $181100, A1               ; Stores $181100 inside A1, The text address.
  LEA         $90A340, A0               ; Stores $90A340 inside A0, The screen region of the text.
  BSR         $181000                   ; Calls the routine that prints stuff in the screen.
  LEA         $181140, A1               ; Stores $181140 inside A1, The text address.
  LEA         $90A4C4, A0               ; Stores $90A4C4 inside A0, The screen region of the text.
  BSR         $181000                   ; Calls the routine that prints stuff in the screen.
  LEA         $181180, A1               ; Stores $181180 inside A1, The text address.
  LEA         $90A348, A0               ; Stores $90A348 inside A0, The screen region of the text.
  BSR         $181000                   ; Calls the routine that prints stuff in the screen.
  BSR         $181A60                   ; Calls the routine that restore some registers values.
  RTS                                   ; Returns back to the routine that called this code.


; Code that adds all tool texts in the title screen.
;
; In LEA $90A4C4, A0, replace 90A4C4 with the values:
; 90A4C4 for the Default Text.
; 90A2C4 for the Level Editor Text.
; 90A544 for the Seed Randomizer Text.
;
; In LEA $90A348, A0, replace 90A348 with the values:
; 90A348 for the Hack Author Text
; 90A5C8 for Seed Text
;
; Add the extra texts at:
;
; 181100 for the Tool Link Text
; 181140 for the Tool Info Text
; 181180 for the Hack Author Text or Seed
; 1811C0 for the Readjusted Text