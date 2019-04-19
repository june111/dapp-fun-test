(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bd11e304"],{"0cc2":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",[n("v-card-title",{attrs:{"primary-title":""}},[n("div",[n("h3",{staticClass:"headline mb-0"},[t._v("合约信息")]),n("p",[t._v("分别从第三方接口和合约获得指定 token 合约的信息，包括 token 的名字，符号，精度，总量等")])])]),n("v-divider"),n("v-card-title",{attrs:{"primary-title":""}},[n("div",[n("h3",{staticClass:"mb-0"},[t._v("使用 Ethplorer API")])])]),n("v-container",{attrs:{"grid-list-md":"","text-xs-center":""}},[n("v-layout",{attrs:{row:""}},[n("v-flex",{attrs:{xs6:"",sm10:""}},[n("v-text-field",{attrs:{label:"address"},model:{value:t.address,callback:function(e){t.address=e},expression:"address"}})],1),n("v-flex",{attrs:{xs6:"",sm2:""}},[n("v-btn",{attrs:{color:"blue",dark:""},on:{click:t.checkAPI}},[t._v("查询合约信息")])],1)],1)],1),t.logEthplorerRes?n("v-card-text",[n("div",{domProps:{innerHTML:t._s(t.logEthplorerRes)}})]):t._e(),n("v-divider"),n("v-card-title",{attrs:{"primary-title":""}},[n("div",[n("h3",{staticClass:"mb-0"},[t._v("使用合约")])])]),n("v-container",{attrs:{"grid-list-md":"","text-xs-center":""}},[n("v-layout",{attrs:{row:""}},[n("v-flex",{attrs:{xs6:"",sm10:""}},[n("v-text-field",{attrs:{label:"address"},model:{value:t.contractAddr,callback:function(e){t.contractAddr=e},expression:"contractAddr"}})],1),n("v-flex",{attrs:{xs6:"",sm2:""}},[n("v-btn",{attrs:{color:"blue",dark:""},on:{click:t.checkContract}},[t._v("查询合约信息")])],1)],1)],1),t.logContractRes?n("v-card-text",[n("div",{domProps:{innerHTML:t._s(t.logContractRes)}})]):t._e()],1)},i=[],s=(n("ac6a"),n("5df3"),n("7f7f"),n("795b")),r=n.n(s),o=(n("96cf"),n("3b8d")),c=(n("cadf"),n("551c"),n("097d"),n("bac7")),l=n.n(c),u=n("ed08"),d={data:function(){return{myContract:null,contractIns:null,address:"0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2",contractAddr:"0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2",logEthplorerRes:"",logContractRes:"",selected:[2],items:[{action:"15 min",headline:"Brunch this weekend?",title:"Ali Connors",subtitle:"I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"}]}},mounted:function(){this.$nextTick(function(){this.getWeb3()})},methods:{getWeb3:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(!window.ethereum){t.next=14;break}return window.web3=new l.a(ethereum),t.prev=2,t.next=5,ethereum.enable();case 5:this.isMetamask=!0,t.next=12;break;case 8:t.prev=8,t.t0=t["catch"](2),console.log(t.t0),this.isMetamask=!1;case 12:t.next=15;break;case 14:if(window.web3)try{window.web3=new l.a(web3.currentProvider),this.isMetamask=!0}catch(e){alert(e),this.isMetamask=!1}else console.log("Non-Ethereum browser detected. You should consider trying MetaMask!"),this.isMetamask=!1;case 15:case"end":return t.stop()}},t,this,[[2,8]])}));function e(){return t.apply(this,arguments)}return e}(),checkContract:function(){var t=this,e=[{constant:!0,inputs:[],name:"name",outputs:[{name:"",type:"bytes32"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"totalSupply",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"decimals",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"owner",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"symbol",outputs:[{name:"",type:"bytes32"}],payable:!1,stateMutability:"view",type:"function"}];this.myContract=window.web3.eth.contract(e),this.contractIns=this.myContract.at(this.contractAddr);var n=new r.a(function(e,n){t.contractIns.decimals(function(t,n){e(Object(u["d"])(n))})}),a=new r.a(function(e,n){t.contractIns.symbol(function(t,n){e(n)})}),i=new r.a(function(e,n){t.contractIns.name(function(t,n){e(n)})}),s=new r.a(function(e,n){t.contractIns.totalSupply(function(t,n){e(Object(u["d"])(n))})}),o=new r.a(function(e,n){t.contractIns.owner(function(t,n){e(n)})});r.a.all([n,a,i,s,o]).then(function(e){var n={address:t.contractAddr,name:Object(u["a"])(e[2]),decimals:e[0],symbol:Object(u["a"])(e[1]),totalSupply:e[3],owner:e[4]};t.logContractRes=Object(u["c"])(n)})},checkAPI:function(){var t=this,e=new r.a(function(e,n){var a=new XMLHttpRequest;a.open("post","https://api.ethplorer.io/getTokenInfo/"+t.address+"?apiKey=freekey"),a.onload=function(){var t=JSON.parse(a.response);e(t)},a.send()});e.then(function(e){t.logEthplorerRes=Object(u["c"])(e)})}}},f=d,p=(n("11bb"),n("2877")),h=Object(p["a"])(f,a,i,!1,null,null,null);e["default"]=h.exports},"11bb":function(t,e,n){"use strict";var a=n("9142"),i=n.n(a);i.a},"5df3":function(t,e,n){"use strict";var a=n("02f4")(!0);n("01f9")(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=a(e,n),this._i+=t.length,{value:t,done:!1})})},9142:function(t,e,n){},ac6a:function(t,e,n){for(var a=n("cadf"),i=n("0d58"),s=n("2aba"),r=n("7726"),o=n("32e9"),c=n("84f2"),l=n("2b4c"),u=l("iterator"),d=l("toStringTag"),f=c.Array,p={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},h=i(p),b=0;b<h.length;b++){var m,v=h[b],y=p[v],w=r[v],g=w&&w.prototype;if(g&&(g[u]||o(g,u,f),g[d]||o(g,d,v),c[v]=f,y))for(m in a)g[m]||s(g,m,a[m],!0)}}}]);