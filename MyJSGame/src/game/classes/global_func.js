var GlobalFunc = cc.Class.extend({
  ctor: function () {},
  runScene: function (_duration, _scene) {
    cc.director.runScene(new cc.TransitionFade(_duration, _scene));
  },
  pushScene: function (_duration, _scene) {
    cc.director.pushScene(new cc.TransitionFade(_duration, _scene));
  },
  playAudio: function (audio) {
    cc.audioEngine.playMusic(audio, true);
  },
});

var globalFunc = new GlobalFunc();
