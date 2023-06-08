
var AppLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {

        this._super();
        var size = cc.winSize;
        // title
        var title = new cc.LabelTTF("Cocos demo", "Arial", 38);
        title.x = size.width / 2;
        title.y = size.height / 2 + 200;
        this.addChild(title, 5);



        return true;
    }
});

var AppScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new AppLayer();
        this.addChild(layer,zIndexLayer);
        var background = new BackGroundLayer(res.background_img);
        this.addChild(background,zIndexLayer.Saver)
    }
});

