// Compiled by ClojureScript 1.10.339 {}
goog.provide('zaogao.cljs.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('zaogao.cljs.controller');
goog.require('goog.dom');
zaogao.cljs.core.app_state = reagent.core.atom.call(null,new cljs.core.Keyword(null,"survey-intro","survey-intro",-1234020660));
cljs.core.enable_console_print_BANG_.call(null);
zaogao.cljs.core.landing_header = (function zaogao$cljs$core$landing_header(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.absolute.top-0.left-0.right-0.flex.justify-center.items-center.flex-column.bg-pri.white","div.absolute.top-0.left-0.right-0.flex.justify-center.items-center.flex-column.bg-pri.white",1616252634),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"150px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.mb2","h1.mb2",-1582718726),"\u5341\u4E8C"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.caps","h3.caps",1424740072),"Characteristics"], null)], null);
});
zaogao.cljs.core.landing_hero = (function zaogao$cljs$core$landing_hero(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.absolute.left-0.right-0.flex.justify-center.items-center","div.absolute.left-0.right-0.flex.justify-center.items-center",2000058257),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top","top",-1856271961),"150px",new cljs.core.Keyword(null,"bottom","bottom",-1550509018),"150px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.max-width-1.mx-auto.col-12.p3","div.max-width-1.mx-auto.col-12.p3",-1946226363),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.sec","h1.sec",-1475849475),"How is your church doing?"], null)], null)], null);
});
zaogao.cljs.core.landing_button = (function zaogao$cljs$core$landing_button(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.absolute.left-0.right-0.bottom-0.flex.justify-center.items-center","div.absolute.left-0.right-0.bottom-0.flex.justify-center.items-center",1465808168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"150px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bg-pri.m2.px2.py2.rounded","div.bg-pri.m2.px2.py2.rounded",-56374),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_.call(null,zaogao.cljs.core.app_state,new cljs.core.Keyword(null,"survey-intro","survey-intro",-1234020660));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.white","h3.white",66539079),"What are the 12?"], null)], null)], null);
});
zaogao.cljs.core.nav = (function zaogao$cljs$core$nav(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.absolute.top-0.left-0.right-0.flex.justify-between.items-center.p2.bg-pri.white","div.absolute.top-0.left-0.right-0.flex.justify-between.items-center.p2.bg-pri.white",-1540357961),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"75px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa.fa-bars","i.fa.fa-bars",-1114139547)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"\u5341\u4E00"], null)], null);
});
zaogao.cljs.core.body = (function zaogao$cljs$core$body(){
var G__3304 = cljs.core.deref.call(null,zaogao.cljs.core.app_state);
var G__3304__$1 = (((G__3304 instanceof cljs.core.Keyword))?G__3304.fqn:null);
switch (G__3304__$1) {
case "landing":
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.fixed.top-0.left-0.right-0.bottom-0","div.fixed.top-0.left-0.right-0.bottom-0",1987448297),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [zaogao.cljs.core.landing_header], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [zaogao.cljs.core.landing_hero], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [zaogao.cljs.core.landing_button], null)], null);

break;
case "survey-intro":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.fixed.top-0.left-0.right-0.bottom-0","div.fixed.top-0.left-0.right-0.bottom-0",1987448297),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [zaogao.cljs.core.nav], null)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__3304__$1)].join('')));

}
});
zaogao.cljs.core._main = (function zaogao$cljs$core$_main(){
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [zaogao.cljs.core.body], null),goog.dom.getElement("app"));
});
zaogao.cljs.core._main.call(null);

//# sourceMappingURL=core.js.map
