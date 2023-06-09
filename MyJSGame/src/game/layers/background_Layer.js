var BackGroundLayer  = cc.Layer.extend({
    ctor: function(backGroundImages){
       this._super();
        let size = cc.winSize
        let bg = new BackgroundSprite(size,backGroundImages);
        var scaleAction = cc.ScaleBy.create(0,1/2,1/2)
        bg.runAction(scaleAction)
        
        this.addChild(bg)
    }
})