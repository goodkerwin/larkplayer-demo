webpackJsonp([1],{0:function(e,t){},Anio:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("7+uW"),a={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var r=n("VU/8")({name:"App"},a,!1,function(e){n("TbHr")},null,null).exports,o=n("/ocq"),l=n("75+t"),c=n.n(l),s=(n("pGvX"),n("eM6B"),{data:function(){return{player:null,naoTime:"",lastTime:300,playTime:0,playLastTime:""}},mounted:function(){this.player||this.init()},methods:{init:function(){var e=this,t=Math.min(document.body.clientWidth,640);e.$nextTick(function(){e.player=c()("container",{width:t,height:9*t/16,controls:!0,autoplay:!0,playsinline:!0,preload:!0,source:[{src:"https://baikebcs.bdimg.com/baike-other/big-buck-bunny.mp4",type:"video/mp4"}]},function(){var e=document.getElementById("container-video-larkplayer"),t=document.getElementsByTagName("video")[0];t.setAttribute("x5-playsinline",""),t.setAttribute("webkit-playsinline","true");var n=document.createElement("div");n.id="AD-video",n.style.display="none",n.innerHTML='<span class="ad-text ad-span">广告</span><span class="ad-close ad-span" onclick="var AD = document.getElementById(\'AD-video\');AD.style.display = \'none\'">x</span><img src="https://img.alicdn.com/tfs/TB1byi8afDH8KJjy1XcXXcpdXXa-1920-514.jpg" width="100%" height="100%" onclick="window.open(\'https://baidu.com\')">',e.appendChild(n)});var n=0,i=!1,a=0;e.player.on("timeupdate",function(t){i||(n=e.player.currentTime(),e.playTime=n)}),e.player.on("seeking",function(t){i=!0,a=n,console.log(33,e.player.currentTime(),a)}),e.player.on("seeked",function(t){i=!1,e.player.currentTime()-n>2&&(e.naoTime="当前时间："+n,e.player.currentTime(n)),console.log(55,e.player.currentTime())}),e.player.on("pause",function(e){document.getElementById("AD-video").style.display="block"}),e.player.on("play",function(e){document.getElementById("AD-video").style.display="none"})})},btnclick:function(){this.player.src("https://look.chinahrt.com.cn/courseyun/rx/transcode/20206/317690bd-f600-43a0-87a7-6c6182da4607/283003-m3u8.m3u8"),this.player.currentTime(this.playTime),this.playLastTime="上次播放时间："+this.playTime,this.player.play()},btnclick1:function(){this.player.src("https://look.chinahrt.com.cn/u/courseyun/7d1e9d587bc648cbbdb869c1300967f8/transcode/20216/5cf04cc0-2d74-4ae2-ab10-3ee59d4388a5/283006-mp4.mp4"),this.player.currentTime(this.playTime),this.playLastTime="上次播放时间："+this.playTime,this.player.play()}}}),d={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"larkPlayer"},[n("div",{attrs:{id:"container"}}),e._v(" "),n("button",{on:{click:function(t){return e.btnclick()}}},[e._v("切换标清m3u8")]),e._v(" "),n("button",{on:{click:function(t){return e.btnclick1()}}},[e._v("切换map4")]),e._v(" "),n("div",{domProps:{textContent:e._s(e.naoTime)}}),e._v(" "),n("div",{domProps:{textContent:e._s(e.playLastTime)}})])},staticRenderFns:[]};var p=n("VU/8")(s,d,!1,function(e){n("Anio")},null,null).exports;i.default.use(o.a);var u=new o.a({routes:[{path:"/",name:"Player",component:p}]}),m=n("iqGf"),y=n.n(m),f=n("V4g8"),h=n.n(f);function v(e){if(window.WebViewJavascriptBridge)return e(window.WebViewJavascriptBridge);if(window.WVJBCallbacks)return window.WVJBCallbacks.push(e);window.WVJBCallbacks=[e];let t=document.createElement("iframe");t.style.display="none",t.src="https://__bridge_loaded__",document.documentElement.appendChild(t),setTimeout(()=>{document.documentElement.removeChild(t)},0)}var b={callhandler(e,t,n){v(function(i){i.callHandler(e,t,n)})},registerhandler(e,t){v(function(n){n.registerHandler(e,function(e,n){t(e,n)})})}};i.default.prototype.$bridge=b,i.default.use(h.a),i.default.config.productionTip=!1,i.default.use(y.a);var T=window.TcPlayer;i.default.prototype.TcPlayer=T,new i.default({el:"#app",router:u,components:{App:r},template:"<App/>"})},TbHr:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.d9773d45725fc80d43a5.js.map