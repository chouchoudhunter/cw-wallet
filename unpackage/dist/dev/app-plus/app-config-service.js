
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/member/friend/friend","pages/center/center","pages/register/login/login","pages/register/reg/reg","pages/register/find/find","pages/member/nearby/nearby","pages/member/scan/scan","pages/member/add-friend/add-friend","pages/my/help-center/help-center","pages/my/information/information","pages/member/shop-for/shop-for","pages/my/bind-email/bind-email","pages/my/do-agent/do-agent","pages/my/recharge/recharge","pages/my/recharge-record/recharge-record","pages/my/change/change","pages/my/withdraw-record/withdraw-record","pages/my/withdraw/withdraw","pages/my/leave-message/leave-message","pages/my/history-message/history-message","pages/play/my-code/my-code","pages/my/article-details/article-details","pages/play/nearby-shops/nearby-shops","pages/my/add-bank-card/add-bank-card","pages/my/email-code/email-code","pages/my/change-login-password/change-login-password","pages/my/change-pay-password/change-pay-password","pages/play/shop-details/shop-details","pages/play/receive-code/receive-code","pages/play/pay-code/pay-code","pages/play/pay-record/pay-record","pages/play/receive-record/receive-record","pages/my/coupon/coupon","pages/my/article-list/article-list","pages/my/collected-list/collected-list","pages/my/do-shop/do-shop","pages/my/my-invite-code/my-invite-code","pages/my/change-information/change-information","pages/my/reply-message/reply-message","pages/my/my-agent-shop/my-agent-shop","pages/my/my-agent-invite/my-agent-invite","pages/play/transfer-phone-amount/transfer-phone-amount","pages/play/transfer-phone-number/transfer-phone-number","pages/play/transfer-friend/transfer-friend","pages/play/notice/notice","pages/play/set-amount/set-amount","pages/play/transfer-accounts/transfer-accounts","pages/play/message-notice/message-notice"],"window":{"navigationBarTextStyle":"white","navigationBarTitleText":"uni-app","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8","navigationStyle":"custom"},"tabBar":{"iconWidth":"21px","fontSize":"16px","list":[{"pagePath":"pages/index/index","text":"吃喝玩乐","iconPath":"static/icon/index.png","selectedIconPath":"static/icon/index_.png"},{"pagePath":"pages/member/friend/friend","text":"会员","iconPath":"static/icon/member.png","selectedIconPath":"static/icon/member_.png"},{"pagePath":"pages/center/center","text":"我的","iconPath":"static/icon/my.png","selectedIconPath":"static/icon/my_.png"}],"backgroundColor":"#ffffff","selectedColor":"#d81e06"},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"wallet","compilerVersion":"2.7.14","entryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{}},{"path":"/pages/member/friend/friend","meta":{"isQuit":true,"isTabBar":true},"window":{}},{"path":"/pages/center/center","meta":{"isQuit":true,"isTabBar":true},"window":{}},{"path":"/pages/register/login/login","meta":{},"window":{}},{"path":"/pages/register/reg/reg","meta":{},"window":{}},{"path":"/pages/register/find/find","meta":{},"window":{}},{"path":"/pages/member/nearby/nearby","meta":{},"window":{}},{"path":"/pages/member/scan/scan","meta":{},"window":{}},{"path":"/pages/member/add-friend/add-friend","meta":{},"window":{}},{"path":"/pages/my/help-center/help-center","meta":{},"window":{}},{"path":"/pages/my/information/information","meta":{},"window":{}},{"path":"/pages/member/shop-for/shop-for","meta":{},"window":{}},{"path":"/pages/my/bind-email/bind-email","meta":{},"window":{}},{"path":"/pages/my/do-agent/do-agent","meta":{},"window":{}},{"path":"/pages/my/recharge/recharge","meta":{},"window":{}},{"path":"/pages/my/recharge-record/recharge-record","meta":{},"window":{}},{"path":"/pages/my/change/change","meta":{},"window":{}},{"path":"/pages/my/withdraw-record/withdraw-record","meta":{},"window":{}},{"path":"/pages/my/withdraw/withdraw","meta":{},"window":{}},{"path":"/pages/my/leave-message/leave-message","meta":{},"window":{}},{"path":"/pages/my/history-message/history-message","meta":{},"window":{}},{"path":"/pages/play/my-code/my-code","meta":{},"window":{}},{"path":"/pages/my/article-details/article-details","meta":{},"window":{}},{"path":"/pages/play/nearby-shops/nearby-shops","meta":{},"window":{}},{"path":"/pages/my/add-bank-card/add-bank-card","meta":{},"window":{}},{"path":"/pages/my/email-code/email-code","meta":{},"window":{}},{"path":"/pages/my/change-login-password/change-login-password","meta":{},"window":{}},{"path":"/pages/my/change-pay-password/change-pay-password","meta":{},"window":{}},{"path":"/pages/play/shop-details/shop-details","meta":{},"window":{}},{"path":"/pages/play/receive-code/receive-code","meta":{},"window":{}},{"path":"/pages/play/pay-code/pay-code","meta":{},"window":{}},{"path":"/pages/play/pay-record/pay-record","meta":{},"window":{}},{"path":"/pages/play/receive-record/receive-record","meta":{},"window":{}},{"path":"/pages/my/coupon/coupon","meta":{},"window":{}},{"path":"/pages/my/article-list/article-list","meta":{},"window":{}},{"path":"/pages/my/collected-list/collected-list","meta":{},"window":{}},{"path":"/pages/my/do-shop/do-shop","meta":{},"window":{}},{"path":"/pages/my/my-invite-code/my-invite-code","meta":{},"window":{}},{"path":"/pages/my/change-information/change-information","meta":{},"window":{}},{"path":"/pages/my/reply-message/reply-message","meta":{},"window":{}},{"path":"/pages/my/my-agent-shop/my-agent-shop","meta":{},"window":{}},{"path":"/pages/my/my-agent-invite/my-agent-invite","meta":{},"window":{}},{"path":"/pages/play/transfer-phone-amount/transfer-phone-amount","meta":{},"window":{}},{"path":"/pages/play/transfer-phone-number/transfer-phone-number","meta":{},"window":{}},{"path":"/pages/play/transfer-friend/transfer-friend","meta":{},"window":{}},{"path":"/pages/play/notice/notice","meta":{},"window":{}},{"path":"/pages/play/set-amount/set-amount","meta":{},"window":{}},{"path":"/pages/play/transfer-accounts/transfer-accounts","meta":{},"window":{}},{"path":"/pages/play/message-notice/message-notice","meta":{},"window":{}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
