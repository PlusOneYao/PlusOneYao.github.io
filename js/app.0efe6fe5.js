(function(){"use strict";var e={1653:function(e,t,a){var l=a(5130),o=a(6768);function n(e,t,a,l,n,r){const u=(0,o.g2)("PassPic"),c=(0,o.g2)("el-col"),s=(0,o.g2)("ButtonList"),i=(0,o.g2)("el-row");return(0,o.uX)(),(0,o.Wv)(i,{gutter:20},{default:(0,o.k6)((()=>[(0,o.bF)(c,{span:12},{default:(0,o.k6)((()=>[(0,o.bF)(u)])),_:1}),(0,o.bF)(c,{span:10},{default:(0,o.k6)((()=>[(0,o.bF)(s)])),_:1})])),_:1})}var r=a(4232),u=a.p+"img/nnu_pic.751f128e.png";const c=e=>((0,o.Qi)("data-v-3b57a991"),e=e(),(0,o.jt)(),e),s=c((()=>(0,o.Lk)("img",{class:"logo",src:u,alt:"NNU Pic"},null,-1))),i=["src"],d={class:"password"};function g(e,t,a,l,n,u){return(0,o.uX)(),(0,o.CE)("div",{class:"card",ref:"card",style:(0,r.Tr)({backgroundColor:l.bgcolor})},[s,(0,o.Lk)("img",{src:l.QRCurl,alt:"QR Code",class:"qrcode",onLoad:t[0]||(t[0]=(...e)=>l.LoadImg&&l.LoadImg(...e))},null,40,i),(0,o.Lk)("div",d,(0,r.v_)(l.code),1)],4)}var f=a(144),v=a(782),m=a(2125),p=a.n(m),h={name:"PassPic",setup(){const e=(0,v.Pj)(),t=(0,f.KR)(null),l=(0,f.lW)(e.state,"code"),n=(0,f.lW)(e.state,"QRCurl"),r=(0,f.lW)(e.state,"bgcolor"),u=()=>{p()(t.value).then((t=>{const a=t.toDataURL("image/png");e.dispatch("getImgUrl",a),console.log(l.value)}))};(0,o.wB)(r,((a,o)=>{p()(t.value).then((t=>{const a=t.toDataURL("image/png");e.dispatch("getImgUrl",a),console.log(l.value)}))}));const c=()=>{t.value?p()(t.value).then((t=>{const a=t.toDataURL("image/png");e.dispatch("getImgUrl",a)})):console.log("card is null")},s=()=>{t.value&&p()(t.value).then((e=>{let t=document.createElement("a");t.download="image.png",t.href=e.toDataURL("image/png"),t.click()}))},i=()=>{const e="ABCDEFGHIJKLMNOPQRSTUVWXYZ",t=(e[Math.floor(Math.random()*e.length)],e[Math.floor(Math.random()*e.length)],Math.floor(9e5*Math.random())+1e5);l.value="XS"+t,g(l.value)},d=a(8420),g=async e=>{try{const t={margin:1,scale:16};n.value=await d.toDataURL(e,t)}catch(t){console.error(t)}};return{card:t,code:l,QRCurl:n,bgcolor:r,convertToImage:c,download:s,generateCode:i,LoadImg:u}}},b=a(1241);const k=(0,b.A)(h,[["render",g],["__scopeId","data-v-3b57a991"]]);var C=k;const F={class:"flex items-center"};function _(e,t,a,l,n,u){const c=(0,o.g2)("el-button"),s=(0,o.g2)("el-col"),i=(0,o.g2)("el-row"),d=(0,o.g2)("el-input"),g=(0,o.g2)("el-tag"),f=(0,o.g2)("el-option"),v=(0,o.g2)("el-select");return(0,o.uX)(),(0,o.CE)(o.FK,null,[(0,o.bF)(i,{gutter:20,align:"middle",class:"row"},{default:(0,o.k6)((()=>[(0,o.bF)(s,{span:5},{default:(0,o.k6)((()=>[(0,o.bF)(c,{size:"large",class:"uniform-button",onClick:l.download},{default:(0,o.k6)((()=>[(0,o.eW)("下载")])),_:1},8,["onClick"])])),_:1})])),_:1}),(0,o.bF)(i,{gutter:20,align:"middle",class:"row"},{default:(0,o.k6)((()=>[(0,o.bF)(s,{span:5},{default:(0,o.k6)((()=>[(0,o.bF)(c,{size:"large",class:"uniform-button",onClick:l.generateCode},{default:(0,o.k6)((()=>[(0,o.eW)("随机生成")])),_:1},8,["onClick"])])),_:1})])),_:1}),(0,o.bF)(i,{gutter:20,align:"middle",class:"row"},{default:(0,o.k6)((()=>[(0,o.bF)(s,{span:5},{default:(0,o.k6)((()=>[(0,o.bF)(c,{size:"large",class:"uniform-button",onClick:l.generatePass},{default:(0,o.k6)((()=>[(0,o.eW)("生成通行证")])),_:1},8,["onClick"])])),_:1}),(0,o.bF)(s,{span:10},{default:(0,o.k6)((()=>[(0,o.bF)(d,{modelValue:l.input,"onUpdate:modelValue":t[0]||(t[0]=e=>l.input=e),placeholder:"输入通行证号码",onClick:e.creatPic},null,8,["modelValue","onClick"])])),_:1})])),_:1}),(0,o.bF)(i,{gutter:20,align:"middle",class:"row"},{default:(0,o.k6)((()=>[(0,o.bF)(s,{span:5},{default:(0,o.k6)((()=>[(0,o.bF)(v,{modelValue:l.value,"onUpdate:modelValue":t[1]||(t[1]=e=>l.value=e),placeholder:"选择颜色",style:{width:"240px"},onChange:l.changeColor},{tag:(0,o.k6)((()=>[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(l.value,(e=>((0,o.uX)(),(0,o.Wv)(g,{key:e.value,color:e},null,8,["color"])))),128))])),default:(0,o.k6)((()=>[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(l.colors,(e=>((0,o.uX)(),(0,o.Wv)(f,{key:e.value,label:e.label,value:e.value},{default:(0,o.k6)((()=>[(0,o.Lk)("div",F,[(0,o.bF)(g,{color:e.value,style:{"margin-right":"8px"},size:"small"},null,8,["color"]),(0,o.Lk)("span",{style:(0,r.Tr)({color:e.value})},(0,r.v_)(e.label),5)])])),_:2},1032,["label","value"])))),128))])),_:1},8,["modelValue","onChange"])])),_:1})])),_:1})],64)}a(4114);var w={name:"ButtonList",setup(){const e=(0,v.Pj)(),t=(0,f.KR)(""),l=(0,f.KR)(""),n=(0,o.EW)((()=>e.state.imgUrl)),r=()=>{const a="ABCDEFGHIJKLMNOPQRSTUVWXYZ",l=(a[Math.floor(Math.random()*a.length)],a[Math.floor(Math.random()*a.length)],Math.floor(9e5*Math.random())+1e5);t.value="XS"+l,g(t.value),e.dispatch("getCode",t.value)};(0,o.sV)(r);const u=()=>{let e=document.createElement("a");e.download="image.png",e.href=n.value,e.click()},c=()=>{g(l.value),e.dispatch("getCode",l.value)},s=()=>{const a="ABCDEFGHIJKLMNOPQRSTUVWXYZ",l=(a[Math.floor(Math.random()*a.length)],a[Math.floor(Math.random()*a.length)],Math.floor(9e5*Math.random())+1e5);t.value="XS"+l,g(t.value),e.dispatch("getCode",t.value)},i=a(8420),d=(0,f.KR)(""),g=async t=>{try{const a={margin:1,scale:16};d.value=await i.toDataURL(t,a),e.dispatch("getQRCurl",d.value)}catch(a){console.error(a)}},m=(0,f.KR)([]),p=[{value:"#892226",label:"红色"},{value:"#6b7127",label:"绿色"},{value:"#9077d2",label:"紫色"}];p.forEach((e=>{m.value.push(e.value)}));const h=()=>{e.dispatch("getBgcolor",m.value)};return{input:l,colors:p,value:m,download:u,generateCode:s,generatePass:c,changeColor:h}}};const R=(0,b.A)(w,[["render",_],["__scopeId","data-v-2d5d87e1"]]);var M=R,L={name:"App",components:{PassPic:C,ButtonList:M}};const U=(0,b.A)(L,[["render",n]]);var y=U,I=(0,v.y$)({state:{imgUrl:"",code:"",QRCurl:"",bgcolor:""},mutations:{setImgUrl(e,t){e.imgUrl=t},setCode(e,t){e.code=t},setQRCurl(e,t){e.QRCurl=t},setBgcolor(e,t){e.bgcolor=t}},actions:{getImgUrl({commit:e},t){e("setImgUrl",t)},getCode({commit:e},t){e("setCode",t)},getQRCurl({commit:e},t){e("setQRCurl",t)},getBgcolor({commit:e},t){e("setBgcolor",t)}}}),P=a(9536);a(1077);const O=(0,l.Ef)(y);O.use(P.A),O.use(I),O.mount("#app")}},t={};function a(l){var o=t[l];if(void 0!==o)return o.exports;var n=t[l]={exports:{}};return e[l].call(n.exports,n,n.exports,a),n.exports}a.m=e,function(){var e=[];a.O=function(t,l,o,n){if(!l){var r=1/0;for(i=0;i<e.length;i++){l=e[i][0],o=e[i][1],n=e[i][2];for(var u=!0,c=0;c<l.length;c++)(!1&n||r>=n)&&Object.keys(a.O).every((function(e){return a.O[e](l[c])}))?l.splice(c--,1):(u=!1,n<r&&(r=n));if(u){e.splice(i--,1);var s=o();void 0!==s&&(t=s)}}return t}n=n||0;for(var i=e.length;i>0&&e[i-1][2]>n;i--)e[i]=e[i-1];e[i]=[l,o,n]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var l in t)a.o(t,l)&&!a.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.p="/"}(),function(){var e={524:0};a.O.j=function(t){return 0===e[t]};var t=function(t,l){var o,n,r=l[0],u=l[1],c=l[2],s=0;if(r.some((function(t){return 0!==e[t]}))){for(o in u)a.o(u,o)&&(a.m[o]=u[o]);if(c)var i=c(a)}for(t&&t(l);s<r.length;s++)n=r[s],a.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return a.O(i)},l=self["webpackChunkpass"]=self["webpackChunkpass"]||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))}();var l=a.O(void 0,[504],(function(){return a(1653)}));l=a.O(l)})();
//# sourceMappingURL=app.0efe6fe5.js.map