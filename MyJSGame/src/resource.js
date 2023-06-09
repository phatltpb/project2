/****************************************************************************
 Copyright (c) 2017-2018 Xiamen Yaji Software Co., Ltd.
 
 http://www.cocos2d-x.org
 
 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:
 
 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.
 
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/

var res = {
  HelloWorld_png: "res/HelloWorld.png",
  background_img: "res/background/bg.png",
  click_img: "res/images/click.png",
  pause: "res/images/pausebut.png",
  play: "res/images/playBut.png",
  quit: "res/images/quitBut.png",
  image_view: "res/images/hao-nguyet.jpg",
  dl_png: "res/images/listpage/dau_la.png",
  nnvh_png: "res/images/listpage/nnvh.png",
  op_png: "res/images/listpage/op.png",
  tavt_png: "res/images/listpage/tavt.png",
};
var resAudio = {
  resGame: "res/audio/phaken.mp3",
};
var g_resources = [];
for (var i in res) {
  g_resources.push(res[i]);
}
for (var i in resAudio) {
  g_resources.push(resAudio[i]);
}
