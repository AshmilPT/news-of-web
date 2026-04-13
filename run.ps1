$env:Path = "C:\Program Files\nodejs;C:\Program Files\Git\cmd;$env:Path"
cd d:\ASHMIL\client
npm install
Start-Process powershell -ArgumentList "-NoExit -Command `"cd d:\ASHMIL\client; npm run dev`"" -WindowStyle Hidden
cd d:\ASHMIL\server
npm install
Start-Process powershell -ArgumentList "-NoExit -Command `"cd d:\ASHMIL\server; npm run dev`"" -WindowStyle Hidden
