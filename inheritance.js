class Remote {
  powerOn() {
    console.log("Powering On...");
  }
  powerOff() {
    console.log("Powering Off...");
  }
}
class TVRemote extends Remote {
  powerOn() {
    console.log("Powering TV On...");
  }
  powerOff() {
    console.log("Powering TV Off...");
  }
}
class MP3Remote extends Remote {}

var Tv = new TVRemote();
Tv.powerOn();
var Mp3 = new MP3Remote();
Mp3.powerOn();
