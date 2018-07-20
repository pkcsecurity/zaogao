// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('daomei.cljs.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('daomei.cljs.controller');
goog.require('goog.dom');
cljs.core.enable_console_print_BANG_();
daomei.cljs.core.body = (function daomei$cljs$core$body(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$fixed$top_DASH_0$left_DASH_0$right_DASH_0$bottom_DASH_0,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"React is running."], null)], null);
});
daomei.cljs.core._main = (function daomei$cljs$core$_main(){
var G__10772 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [daomei.cljs.core.body], null);
var G__10773 = goog.dom.getElement("app");
return (reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__10772,G__10773) : reagent.core.render_component.call(null,G__10772,G__10773));
});
daomei.cljs.core._main();
