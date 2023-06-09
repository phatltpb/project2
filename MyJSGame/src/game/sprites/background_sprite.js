/** @format */

var BackgroundSprite = cc.Sprite.extend({
  ctor: function (size, resBackGround) {
    this._super();
    this.initWithFile(resBackGround);

    this.setPosition(
      cc.p(size.width * 0.5, size.height * 0.5)
    );
    // this.attr({
    //   x: _sizeScene.width / 2,
    //   y: _sizeScene.height / 2,
    // });
  },
});
