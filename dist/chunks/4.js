(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{10:function(t,i,s){"use strict";s.r(i);var n=s(11),a=s.n(n);for(var e in n)"default"!==e&&function(t){s.d(i,t,function(){return n[t]})}(e);i.default=a.a},11:function(t,i){Object.defineProperty(i,"__esModule",{value:!0}),i.default={data:function(){return{img:"",id:"",name:"",songs_list:[],item_icon:0}},methods:{playTo:function(t,i,s,n){this.$emit("play",t,i,s,n)}},created:function(){this.$emit("hideHeader",0),console.log(this.$route.query),this.img=this.$route.query.img,this.id=this.$route.query.id,this.name=this.$route.query.name,this.$http.get("http://129.204.193.180:8080/getSomeSongs?id="+this.id).then(function(t){this.songs_list=JSON.parse(t.body.resBody.data),console.log(this.songs_list)})},props:["item_icon"]}},12:function(t,i){},18:function(t,i,s){"use strict";var n=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"someone"},[s("div",{staticClass:"top"},[s("router-link",{staticClass:"fa fa-arrow-left",attrs:{"aria-hidden":"true",to:"/singers",tag:"i"}}),t._v(" "),s("img",{attrs:{src:t.img}}),t._v(" "),s("p",{staticClass:"name"},[t._v(t._s(t.name))]),t._v(" "),s("p",{staticClass:"fans"},[t._v("1343万粉丝")]),t._v(" "),s("div",{staticClass:"button"},[s("mt-button",{attrs:{plain:""}},[t._v("关注")]),t._v(" "),s("mt-button",{attrs:{plain:""}},[t._v("勋章")])],1)],1),t._v(" "),s("div",{staticClass:"music"},t._l(t.songs_list,function(i){return s("div",{staticClass:"music_item"},[s("p",{staticClass:"name"},[t._v(t._s(i.name))]),s("br"),t._v(" "),s("p",{staticClass:"singer"},[t._v(t._s(t.name))]),t._v(" "),0==t.item_icon?s("i",{staticClass:"fa fa-play",on:{click:function(s){t.playTo(i.url,i.name,i.singer,t.img)}}}):t._e(),t._v(" "),1==t.item_icon?s("div",{staticClass:"playing",on:{click:function(s){t.playTo(i.url,i.name,i.singer,t.img)}}},[s("mt-spinner",{attrs:{type:"double-bounce",color:"#2ab071"}})],1):t._e()])}),0)])},a=[];s.d(i,"a",function(){return n}),s.d(i,"b",function(){return a})},28:function(t,i,s){"use strict";var n=s(12);s.n(n).a},32:function(t,i,s){"use strict";s.r(i);var n=s(18),a=s(10);for(var e in a)"default"!==e&&function(t){s.d(i,t,function(){return a[t]})}(e);s(28);var o=s(0),r=Object(o.a)(a.default,n.a,n.b,!1,null,"148a0c62",null);i.default=r.exports}}]);