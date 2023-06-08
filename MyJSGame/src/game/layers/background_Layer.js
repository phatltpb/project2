var BackGroundLayer  = cc.Layer.extend({
    ctor: function(backGroundImages){
       this._super();
        let size = cc.size
        let bg = new BackGroundSprite(size,backGroundImages);
        this.addChild(bg)
    }
})