# shoppingmall

Backend serves Nexacro static files from `nexacro.front.path` first, then falls back to bundled classpath resources.

For immediate frontend reflection during development:
Set the Nexacro Studio generate/deploy output folder to `C:/nexacroTest/shoppingmall/frontend/shoppingmallFront/`.
The Spring app already reads that path from `backend/src/main/resources/application.properties`.
