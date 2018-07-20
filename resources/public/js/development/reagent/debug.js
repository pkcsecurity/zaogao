// Compiled by ClojureScript 1.10.339 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__1635__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__1635 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1636__i = 0, G__1636__a = new Array(arguments.length -  0);
while (G__1636__i < G__1636__a.length) {G__1636__a[G__1636__i] = arguments[G__1636__i + 0]; ++G__1636__i;}
  args = new cljs.core.IndexedSeq(G__1636__a,0,null);
} 
return G__1635__delegate.call(this,args);};
G__1635.cljs$lang$maxFixedArity = 0;
G__1635.cljs$lang$applyTo = (function (arglist__1637){
var args = cljs.core.seq(arglist__1637);
return G__1635__delegate(args);
});
G__1635.cljs$core$IFn$_invoke$arity$variadic = G__1635__delegate;
return G__1635;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__1638__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__1638 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1639__i = 0, G__1639__a = new Array(arguments.length -  0);
while (G__1639__i < G__1639__a.length) {G__1639__a[G__1639__i] = arguments[G__1639__i + 0]; ++G__1639__i;}
  args = new cljs.core.IndexedSeq(G__1639__a,0,null);
} 
return G__1638__delegate.call(this,args);};
G__1638.cljs$lang$maxFixedArity = 0;
G__1638.cljs$lang$applyTo = (function (arglist__1640){
var args = cljs.core.seq(arglist__1640);
return G__1638__delegate(args);
});
G__1638.cljs$core$IFn$_invoke$arity$variadic = G__1638__delegate;
return G__1638;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map
