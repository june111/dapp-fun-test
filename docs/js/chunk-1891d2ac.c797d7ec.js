(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1891d2ac"],{"0ad7":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-card",[n("v-card-title",{attrs:{"primary-title":""}},[n("div",{staticClass:"center"},[n("h3",{staticClass:"headline mb-0"},[t._v("Ropsten Only")])])])],1),n("v-card",[n("v-card-title",{attrs:{"primary-title":""}},[n("div",{staticClass:"center"},[n("h3",{staticClass:"mb-0"},[t._v("Get random number between 1 and 6 from API")]),t.getApiRadNumPending?n("img",{staticClass:"loader",attrs:{src:"https://loading.io/spinners/double-ring/lg.double-ring-spinner.gif"}}):n("v-btn",{attrs:{color:"blue",dark:""},on:{click:t.getApiRadNum}},[t._v("Generate")]),t.luckyNum?n("p",[t._v("Random Number: "+t._s(t.luckyNum))]):t._e(),n("p",[t._v(t._s(t.luckyNumTime))])],1)])],1),n("v-card",[n("v-card-title",{attrs:{"primary-title":""}},[n("div",{staticClass:"center"},[n("h3",{staticClass:"mb-0"},[t._v("Get random number between 0 and 100 from Oraclize's random")]),t.getOraRadNumPending?n("img",{staticClass:"loader",attrs:{src:"https://loading.io/spinners/double-ring/lg.double-ring-spinner.gif"}}):n("v-btn",{attrs:{color:"blue",dark:""},on:{click:t.getOraRadNum}},[t._v("Generate")]),t.oraRadNum?n("p",[t._v("Random Number: "+t._s(t.oraRadNum))]):t._e(),n("p",[t._v(t._s(t.oraRadNumTime))])],1)])],1),n("v-card",[n("v-card-title",{attrs:{"primary-title":""}},[n("div",{staticClass:"center"},[n("h3",{staticClass:"mb-0"},[t._v("Get random number between 0 and 100 from Oraclize's WolframAlpha")]),t.getWolNumPending?n("img",{staticClass:"loader",attrs:{src:"https://loading.io/spinners/double-ring/lg.double-ring-spinner.gif"}}):n("v-btn",{attrs:{color:"blue",dark:""},on:{click:t.getWolNum}},[t._v("Generate")]),t.wolNum?n("p",[t._v("Random Number: "+t._s(t.wolNum))]):t._e(),n("p",[t._v(t._s(t.wolNumTime))])],1)])],1)],1)},i=[],o=(n("96cf"),n("3b8d")),s=(n("cadf"),n("551c"),n("097d"),n("bac7")),r=n.n(s),u=n("ed08"),c=[{constant:!1,inputs:[{name:"myid",type:"bytes32"},{name:"result",type:"string"}],name:"__callback",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"myid",type:"bytes32"},{name:"result",type:"string"},{name:"proof",type:"bytes"}],name:"__callback",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[],name:"getNumber",outputs:[],payable:!0,stateMutability:"payable",type:"function"},{inputs:[],payable:!0,stateMutability:"payable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!1,name:"nextStep",type:"string"}],name:"LogConstructorInitiated",type:"event"},{anonymous:!1,inputs:[{indexed:!1,name:"dice",type:"string"}],name:"LogNumberUpdated",type:"event"},{anonymous:!1,inputs:[{indexed:!1,name:"description",type:"string"}],name:"LogNewOraclizeQuery",type:"event"},{constant:!0,inputs:[],name:"randomNum",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"}],m="0xdf4f9631d93acc8254ddeeef58c9721c20159b61",d=[{constant:!1,inputs:[{name:"myid",type:"bytes32"},{name:"result",type:"string"}],name:"__callback",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"_queryId",type:"bytes32"},{name:"_result",type:"string"},{name:"_proof",type:"bytes"}],name:"__callback",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[],name:"update",outputs:[],payable:!0,stateMutability:"payable",type:"function"},{inputs:[],payable:!1,stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!1,name:"",type:"bytes"}],name:"newRandomNumber_bytes",type:"event"},{anonymous:!1,inputs:[{indexed:!1,name:"",type:"uint256"}],name:"newRandomNumber_uint",type:"event"},{anonymous:!1,inputs:[{indexed:!1,name:"dice",type:"string"}],name:"logRandom",type:"event"}],l="0xa72edf71a80c0429eaa7c9747d1689ff9da84c51",p=[{constant:!1,inputs:[{name:"myid",type:"bytes32"},{name:"result",type:"string"}],name:"__callback",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"myid",type:"bytes32"},{name:"result",type:"string"},{name:"proof",type:"bytes"}],name:"__callback",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[],name:"update",outputs:[],payable:!0,stateMutability:"payable",type:"function"},{inputs:[],payable:!1,stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!1,name:"description",type:"string"}],name:"newOraclizeQuery",type:"event"},{anonymous:!1,inputs:[{indexed:!1,name:"randomNum",type:"string"}],name:"logRrandomNum",type:"event"},{constant:!0,inputs:[],name:"randomNum",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"}],y="0xfbacf70f785b8945d77dc480cd1c2db3b58d4d2c",b={created:function(){this.getWeb3(),this.setContract()},data:function(){return{web3:void 0,isMetamask:!1,RNGContract:void 0,RNG:void 0,luckyNum:"",luckyNumTime:"",getApiRadNumPending:!1,randomContract:void 0,oraRandom:void 0,oraRadNum:"",oraRadNumTime:"",getOraRadNumPending:!1,wolContract:void 0,wolRandom:void 0,wolNum:"",wolNumTime:"",getWolNumPending:!1,myAddress:""}},methods:{getWeb3:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(!window.ethereum){t.next=13;break}return window.web3=new r.a(ethereum),t.prev=2,t.next=5,ethereum.enable();case 5:this.isMetamask=!0,t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](2),this.isMetamask=!1;case 11:t.next=14;break;case 13:window.web3?(window.web3=new r.a(web3.currentProvider),this.isMetamask=!0):(console.log("Non-Ethereum browser detected. You should consider trying MetaMask!"),this.isMetamask=!1);case 14:console.log("Get Web3!");case 15:case"end":return t.stop()}},t,this,[[2,8]])}));function e(){return t.apply(this,arguments)}return e}(),setContract:function(){this.RNGContract=window.web3.eth.contract(c),this.RNG=this.RNGContract.at(m),this.oraRadNumContract=window.web3.eth.contract(d),this.oraRandom=this.oraRadNumContract.at(l),this.wolContract=window.web3.eth.contract(p),this.wolRandom=this.wolContract.at(y),console.log("Set Contract!")},getAccount:function(){this.isMetamask?window.web3.eth.accounts[0]?this.myAddress=window.web3.eth.accounts[0]:alert("Please log in to Metamask"):window.web3.eth.accounts[0]=this.myAddress},getApiRadNum:function(){var t=this;this.luckyNum="",this.getApiRadNumPending=!0,this.isMetamask&&this.RNG.getNumber({value:window.web3.toWei("0.01","ether"),from:window.web3.eth.accounts[0]},function(e,n){if(e)console.log(e);else{console.log("tx",n);var a=(new Date).getTime(),i=t.RNG.LogNewOraclizeQuery();i.watch(function(t,e){t||console.log(e.args.description)});var o=t.RNG.LogNumberUpdated();o.watch(function(e,n){if(e)console.error(e);else{t.getApiRadNumPending=!1,t.luckyNum=n.args.dice,o.stopWatching(),i.stopWatching();var s=(new Date).getTime();t.luckyNumTime="Cost: "+Object(u["b"])(s-a,"{i}:{s}")}})}})},getOraRadNum:function(){var t=this;this.oraRadNum="",this.getOraRadNumPending=!0,this.isMetamask&&this.oraRandom.update({value:window.web3.toWei("0.01","ether"),from:window.web3.eth.accounts[0]},function(e,n){if(e)console.log(e);else{console.log("tx",n);var a=(new Date).getTime(),i=t.oraRandom.logRandom();i.watch(function(e,n){if(e)console.error(e);else{t.getOraRadNumPending=!1,t.oraRadNum=n.args.dice,i.stopWatching();var o=(new Date).getTime();t.oraRadNumTime="Cost: "+Object(u["b"])(o-a,"{i}:{s}")}})}})},getWolNum:function(){var t=this;this.wolNum="",this.getWolNumPending=!0,this.isMetamask&&this.wolRandom.update({value:window.web3.toWei("0.01","ether"),from:window.web3.eth.accounts[0]},function(e,n){if(e)console.log(e);else{console.log("tx",n);var a=(new Date).getTime(),i=t.wolRandom.newOraclizeQuery();i.watch(function(t,e){t||console.log(e.args.description)});var o=t.wolRandom.logRrandomNum();o.watch(function(e,n){if(e)console.error(e);else{t.getWolNumPending=!1,t.wolNum=n.args.randomNum,o.stopWatching();var i=(new Date).getTime();t.wolNumTime="Cost: "+Object(u["b"])(i-a,"{i}:{s}")}})}})}}},g=b,w=(n("8941"),n("2877")),h=Object(w["a"])(g,a,i,!1,null,"4dea16cd",null);e["default"]=h.exports},8941:function(t,e,n){"use strict";var a=n("b609"),i=n.n(a);i.a},b609:function(t,e,n){}}]);