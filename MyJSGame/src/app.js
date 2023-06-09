/** @format */

var AppLayer = cc.Layer.extend({
  // sprite: null,s
  component: null,
  ctor: function () {
    this._super();
    let size = cc.winSize;
    // title
    let title = new cc.LabelTTF("Cocos demo", "Arial", 38);
    title.x = size.width / 2;
    title.y = size.height / 2 + 270;

    // title.setFontFillColor =

    // menu

    var button = new MenuItemFont(
        "BUTTON",
        20,
        () => {
          let bt = this.ButtonCreate();
          this.addChild(bt);
        }
        // this.AddUi.bind(Components.button,this)
      ),
      text = new MenuItemFont("TEXT", 20, () => {
        let text = this.TextCreate();
        this.addChild(text);
      }),
      imageView = new MenuItemFont("IMAGE VIEW", 20, () => {
        let img = this.ImageCreate();
        this.addChild(img);
      }),
      checkBox = new MenuItemFont("CHECKBOX", 20, () => {
        let check = this.CheckBoxCreate();
        this.addChild(check);

        cc.log("ádasd");
      }),
      layout = new MenuItemFont("LAYOUT", 20, () => {
        let layout = this.LayoutCreate();
        this.addChild(layout);
      }),
      scrollView = new MenuItemFont(
        "SCROLL VIEW",
        20,
        () => {
          cc.log("SCROLL VIEW");
        }
      ),
      pageView = new MenuItemFont("PAGE VIEW", 20, () => {
        let pageView = this.PageCreate();
        this.addChild(pageView);
      }),
      listView = new MenuItemFont("LIST VIEW", 20, () => {
        let listView = this.ListView();
        this.addChild(listView);
      });
    let menu = new cc.Menu(
      button,
      text,
      imageView,
      checkBox,
      layout,
      scrollView,
      pageView,
      listView
    );
    let menuPostionY = size.height - 100;
    menu.setPositionY(menuPostionY);
    menu.alignItemsHorizontallyWithPadding(20);
    let _pageView = new ccui.PageView();
    _pageView.setTouchEnabled(true);
    _pageView.addPage(new ccui.Layout());

    //add child
    // this.addChild(_pageView);
    this.addChild(title);
    this.addChild(menu);
    return true;
  },
  ButtonCreate: () => {
    var button = new ccui.Button();
    button.loadTextures(res.click_img);
    button.attr({
      x: cc.winSize.width / 2,
      y: 100,
    });
    return button;
  },
  CheckBoxCreate: () => {
    var check = new ccui.CheckBox();
    check.loadTextures(res.play, res.pause, res.quit);
    check.attr({
      x: cc.winSize.width / 2,
      y: 100,
    });
    return check;
  },
  ImageCreate: () => {
    var img = new ccui.ImageView.create(res.image_view);
    // img.loadTextures(res.image_view);
    img.attr({
      x: cc.winSize.width / 2,
      y: cc.winSize.width / 2,
    });
    return img;
  },
  LayoutCreate: () => {
    var layout = new ccui.Layout();
    layout.setLayoutType(ccui.Layout.LINEAR_HORIZONTAL);
    layout.sizeType = ccui.Widget.SIZE_PERCENT;
    layout.setSizePercent(cc.p(0.25, 0.25));
    layout.setPositionType(ccui.Widget.POSITION_PERCENT);
    layout.setPositionPercent(cc.p(0.25, 0.25));
    layout.setBackGroundColorType(
      ccui.Layout.BG_COLOR_SOLID
    );
    layout.setBackGroundColor(cc.color.BLUE);

    return _layout;
  },
  TextCreate: () => {
    var text = ccui.Text.create(
      "check text ui",
      "Arial",
      45
    );
    text.setPosition(cc.p(cc.winSize.width * 0.5, 100));
    return text;
  },
  PageCreate: () => {
    var pageview = new ccui.PageView();
    pageview.setTouchEnabled(true);
    pageview.setContentSize(cc.size(240, 900));
    pageview.setAnchorPoint(cc.p(0.5, 0.5));
    pageview.attr({
      x: cc.winSize.width / 2,
      y: cc.winSize.height / 2,
    });
    var list = ["dau_la", "nnvh", "op", "tavt"];

    for (var i = 0; i < list.length; i++) {
      var layout = new ccui.Layout();
      var imageview = new ccui.ImageView();
      let image_Show =
        "res/images/listpage/" + list[i] + ".png";
      imageview.loadTexture(image_Show);
      imageview.attr({
        x: pageview.width / 2,
        y: pageview.height / 2,
      });
      layout.addChild(imageview);
      var text = new ccui.Text();
      text.string = "Trang" + i;
      text.font = "30px 'Marker Felt'";
      text.color = cc.color(192, 192, 192);
      text.x = pageview.width / 2;
      text.y = pageview.height / 2 - 200;
      layout.addChild(text);

      pageview.addPage(layout);
      var layoutPosition = layout.getPosition();

      console.log(layoutPosition);
    }
    console.log(pageview);
    return pageview;
  },
  ListView: () => {
    var listView = new ccui.ListView();
    // set list view ex direction
    listView.setDirection(ccui.ScrollView.DIR_VERTICAL);
    listView.setTouchEnabled(true);
    listView.setBounceEnabled(true);
    // listView.setBackGroundImage("res/HelloWorld.png"); 
    listView.setBackGroundImageScale9Enabled(true);
    listView.setContentSize(cc.size(400, 1280));
    listView.setAnchorPoint(cc.p(0.5, 0.5));
    listView.setPosition(
      cc.winSize.width / 2,
      cc.winSize.height / 2
    );
    var list = ["dau_la", "nnvh", "op", "tavt"];

    for (var i = 0; i < list.length; i++) {
      var layout = new ccui.Layout();
      var imageview = new ccui.ImageView();
      let image_Show =
        "res/images/listpage/" + list[i] + ".png";
      imageview.loadTexture(image_Show);
      imageview.attr({
        x: listView.width / 2,
        y: listView.height / 2,
      });
      listView.addPage(layout);
      var layoutPosition = layout.getPosition();
      listView.addPage(layout);
    }
    return listView;
  },
  AddUi: (Components) => {
    var cp;
    switch (Components) {
      case Components.button:
        cp = this.ButtonCreate();
    }
    this.addChild(cp);
  },
});
var AppScene = cc.Scene.extend({
  onEnter: function () {
    this._super();
    let layer = new AppLayer();
    this.addChild(layer, zIndexLayer.Main);
    let background = new BackGroundLayer(
      res.background_img
    );
    this.addChild(background, zIndexLayer.Saver);
  },
});
