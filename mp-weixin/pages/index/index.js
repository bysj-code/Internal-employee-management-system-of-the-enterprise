(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"0f53":function(n,t,e){"use strict";var i=e("223e"),c=e.n(i);c.a},"223e":function(n,t,e){},"51f2":function(n,t,e){"use strict";var i,c=function(){var n=this,t=n.$createElement,e=(n._self._c,n.__map(n.menuList,(function(t,e){var i=n.__map(t.frontMenu,(function(t,e){var i=n.__map(t.child,(function(t,e){var i=t.menu.split("列表");return{$orig:n.__get_orig(t),g0:i}}));return{$orig:n.__get_orig(t),l0:i}}));return{$orig:n.__get_orig(t),l1:i}})));n.$mp.data=Object.assign({},{$root:{l2:e}})},o=[];e.d(t,"b",(function(){return c})),e.d(t,"c",(function(){return o})),e.d(t,"a",(function(){return i}))},8069:function(n,t,e){"use strict";e.r(t);var i=e("da67"),c=e.n(i);for(var o in i)"default"!==o&&function(n){e.d(t,n,(function(){return i[n]}))}(o);t["default"]=c.a},d537:function(n,t,e){"use strict";(function(n){e("6cdc"),e("921b");i(e("66fd"));var t=i(e("f75a"));function i(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("543d")["createPage"])},da67:function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=o(e("a34a")),c=o(e("2971"));function o(n){return n&&n.__esModule?n:{default:n}}function u(n,t,e,i,c,o,u){try{var r=n[o](u),a=r.value}catch(s){return void e(s)}r.done?t(a):Promise.resolve(a).then(i,c)}function r(n){return function(){var t=this,e=arguments;return new Promise((function(i,c){var o=n.apply(t,e);function r(n){u(o,i,c,r,a,"next",n)}function a(n){u(o,i,c,r,a,"throw",n)}r(void 0)}))}}e("651d");var a=function(){return Promise.all([e.e("common/vendor"),e.e("components/uni-ui/lib/uni-icons/uni-icons")]).then(e.bind(null,"b704"))},s={components:{uniIcons:a},data:function(){return{options2:{effect:"flip",loop:!0},options3:{effect:"cube",loop:!0,cubeEffect:{shadow:!0,slideShadows:!0,shadowOffset:20,shadowScale:.94}},rows:2,column:4,iconArr:["cuIcon-same","cuIcon-deliver","cuIcon-evaluate","cuIcon-shop","cuIcon-ticket","cuIcon-cascades","cuIcon-discover","cuIcon-question","cuIcon-pic","cuIcon-filter","cuIcon-footprint","cuIcon-pulldown","cuIcon-pullup","cuIcon-moreandroid","cuIcon-refund","cuIcon-qrcode","cuIcon-remind","cuIcon-profile","cuIcon-home","cuIcon-message","cuIcon-link","cuIcon-lock","cuIcon-unlock","cuIcon-vip","cuIcon-weibo","cuIcon-activity","cuIcon-friendadd","cuIcon-friendfamous","cuIcon-friend","cuIcon-goods","cuIcon-selection"],role:"",aboutUsDetail:{},systemIntroductionDetail:{},menuList:[],swiperMenuList:[],user:{},tableName:"",swiperList:[],news:[]}},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var t=r(i.default.mark((function t(){var e,o,u,r=this;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.role=n.getStorageSync("role"),e=n.getStorageSync("nowTable"),t.next=4,this.$api.session(e);case 4:o=t.sent,this.user=o.data,this.tableName=e,u=c.default.list(),this.menuList=u,this.menuList.forEach((function(n,t){r.role==n.roleName&&n.frontMenu.forEach((function(n,t){n.child[0].buttons.indexOf("查看")>-1&&r.swiperMenuList.push(n)}))}));case 10:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),onShow:function(){var n=r(i.default.mark((function n(){var t,e,c,o,u,r,a,s;return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t=[],n.next=3,this.$api.page("config",{page:1,limit:5});case 3:for(e=n.sent,c=!0,o=!1,u=void 0,n.prev=7,r=e.data.list[Symbol.iterator]();!(c=(a=r.next()).done);c=!0)s=a.value,s.name.indexOf("picture")>=0&&s.value&&""!=s.value&&null!=s.value&&t.push({img:s.value,title:s.name});n.next=15;break;case 11:n.prev=11,n.t0=n["catch"](7),o=!0,u=n.t0;case 15:n.prev=15,n.prev=16,c||null==r.return||r.return();case 18:if(n.prev=18,!o){n.next=21;break}throw u;case 21:return n.finish(18);case 22:return n.finish(15);case 23:return t&&(this.swiperList=t),this.getAboutUs(),this.getSystemIntroduction(),n.next=28,this.$api.list("news",{page:1,limit:6});case 28:e=n.sent,this.news=e.data.list;case 30:case"end":return n.stop()}}),n,this,[[7,11,15,23],[16,,18,22]])})));function t(){return n.apply(this,arguments)}return t}(),methods:{onSwiperTap:function(n){},getAboutUs:function(){var n=r(i.default.mark((function n(){var t;return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,this.$api.info("aboutus",1);case 2:t=n.sent,this.aboutUsDetail=t.data;case 4:case"end":return n.stop()}}),n,this)})));function t(){return n.apply(this,arguments)}return t}(),getSystemIntroduction:function(){var n=r(i.default.mark((function n(){var t;return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,this.$api.info("systemintro",1);case 2:t=n.sent,this.systemIntroductionDetail=t.data;case 4:case"end":return n.stop()}}),n,this)})));function t(){return n.apply(this,arguments)}return t}(),onNewsDetailTap:function(n){this.$utils.jump("../news-detail/news-detail?id=".concat(n))},onDetailTap:function(n,t){this.$utils.jump("../".concat(n,"/detail?id=").concat(t))},onPageTap:function(t){n.navigateTo({url:"../".concat(t,"/list"),fail:function(){n.switchTab({url:"../".concat(t,"/list")})}})},onPageTap2:function(t){n.setStorageSync("useridTag",0),n.navigateTo({url:t,fail:function(){n.switchTab({url:t})}})}}};t.default=s}).call(this,e("543d")["default"])},f75a:function(n,t,e){"use strict";e.r(t);var i=e("51f2"),c=e("8069");for(var o in c)"default"!==o&&function(n){e.d(t,n,(function(){return c[n]}))}(o);e("0f53");var u,r=e("f0c5"),a=Object(r["a"])(c["default"],i["b"],i["c"],!1,null,"49acdae9",null,!1,i["a"],u);t["default"]=a.exports}},[["d537","common/runtime","common/vendor"]]]);