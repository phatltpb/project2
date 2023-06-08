var BackGroundSprite = cc.Sprite.extend({
    ctor:function(size,backgroundImages){
            this._super();
            this.initWithFile(backgroundImages);
            this.setAnchorPoint(cc.p(0.5,0.5))
            this.attr({
                x:size.With*0.5,
                y:size.Height*0.5,
            })
    }
})