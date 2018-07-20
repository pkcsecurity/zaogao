// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__7948 = arguments.length;
switch (G__7948) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async7949 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async7949 = (function (f,blockable,meta7950){
this.f = f;
this.blockable = blockable;
this.meta7950 = meta7950;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async7949.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7951,meta7950__$1){
var self__ = this;
var _7951__$1 = this;
return (new cljs.core.async.t_cljs$core$async7949(self__.f,self__.blockable,meta7950__$1));
});

cljs.core.async.t_cljs$core$async7949.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7951){
var self__ = this;
var _7951__$1 = this;
return self__.meta7950;
});

cljs.core.async.t_cljs$core$async7949.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async7949.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async7949.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async7949.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async7949.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta7950], null);
});

cljs.core.async.t_cljs$core$async7949.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async7949.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async7949";

cljs.core.async.t_cljs$core$async7949.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async7949");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async7949.
 */
cljs.core.async.__GT_t_cljs$core$async7949 = (function cljs$core$async$__GT_t_cljs$core$async7949(f__$1,blockable__$1,meta7950){
return (new cljs.core.async.t_cljs$core$async7949(f__$1,blockable__$1,meta7950));
});

}

return (new cljs.core.async.t_cljs$core$async7949(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__7955 = arguments.length;
switch (G__7955) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__7958 = arguments.length;
switch (G__7958) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__7961 = arguments.length;
switch (G__7961) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_7963 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_7963) : fn1.call(null,val_7963));
} else {
cljs.core.async.impl.dispatch.run(((function (val_7963,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_7963) : fn1.call(null,val_7963));
});})(val_7963,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__7965 = arguments.length;
switch (G__7965) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5535__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5535__auto__)){
var ret = temp__5535__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5535__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5535__auto__)){
var retb = temp__5535__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__5535__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__5535__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4408__auto___7967 = n;
var x_7968 = (0);
while(true){
if((x_7968 < n__4408__auto___7967)){
(a[x_7968] = (0));

var G__7969 = (x_7968 + (1));
x_7968 = G__7969;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__7970 = (i + (1));
i = G__7970;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async7971 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async7971 = (function (flag,meta7972){
this.flag = flag;
this.meta7972 = meta7972;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async7971.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_7973,meta7972__$1){
var self__ = this;
var _7973__$1 = this;
return (new cljs.core.async.t_cljs$core$async7971(self__.flag,meta7972__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async7971.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_7973){
var self__ = this;
var _7973__$1 = this;
return self__.meta7972;
});})(flag))
;

cljs.core.async.t_cljs$core$async7971.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async7971.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async7971.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async7971.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async7971.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$meta7972], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async7971.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async7971.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async7971";

cljs.core.async.t_cljs$core$async7971.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async7971");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async7971.
 */
cljs.core.async.__GT_t_cljs$core$async7971 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async7971(flag__$1,meta7972){
return (new cljs.core.async.t_cljs$core$async7971(flag__$1,meta7972));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async7971(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async7974 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async7974 = (function (flag,cb,meta7975){
this.flag = flag;
this.cb = cb;
this.meta7975 = meta7975;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async7974.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7976,meta7975__$1){
var self__ = this;
var _7976__$1 = this;
return (new cljs.core.async.t_cljs$core$async7974(self__.flag,self__.cb,meta7975__$1));
});

cljs.core.async.t_cljs$core$async7974.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7976){
var self__ = this;
var _7976__$1 = this;
return self__.meta7975;
});

cljs.core.async.t_cljs$core$async7974.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async7974.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async7974.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async7974.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async7974.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta7975], null);
});

cljs.core.async.t_cljs$core$async7974.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async7974.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async7974";

cljs.core.async.t_cljs$core$async7974.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async7974");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async7974.
 */
cljs.core.async.__GT_t_cljs$core$async7974 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async7974(flag__$1,cb__$1,meta7975){
return (new cljs.core.async.t_cljs$core$async7974(flag__$1,cb__$1,meta7975));
});

}

return (new cljs.core.async.t_cljs$core$async7974(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = cljs.core.cst$kw$priority.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__7977_SHARP_){
var G__7979 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__7977_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__7979) : fret.call(null,G__7979));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__7978_SHARP_){
var G__7980 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__7978_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__7980) : fret.call(null,G__7980));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__3949__auto__ = wport;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return port;
}
})()], null));
} else {
var G__7981 = (i + (1));
i = G__7981;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3949__auto__ = ret;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$default)){
var temp__5537__auto__ = (function (){var and__3938__auto__ = cljs.core.async.impl.protocols.active_QMARK_(flag);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.async.impl.protocols.commit(flag);
} else {
return and__3938__auto__;
}
})();
if(cljs.core.truth_(temp__5537__auto__)){
var got = temp__5537__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$default.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$default], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___7987 = arguments.length;
var i__4532__auto___7988 = (0);
while(true){
if((i__4532__auto___7988 < len__4531__auto___7987)){
args__4534__auto__.push((arguments[i__4532__auto___7988]));

var G__7989 = (i__4532__auto___7988 + (1));
i__4532__auto___7988 = G__7989;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__7984){
var map__7985 = p__7984;
var map__7985__$1 = ((((!((map__7985 == null)))?(((((map__7985.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7985.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7985):map__7985);
var opts = map__7985__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq7982){
var G__7983 = cljs.core.first(seq7982);
var seq7982__$1 = cljs.core.next(seq7982);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7983,seq7982__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__7991 = arguments.length;
switch (G__7991) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__7888__auto___8037 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7888__auto___8037){
return (function (){
var f__7889__auto__ = (function (){var switch__7785__auto__ = ((function (c__7888__auto___8037){
return (function (state_8015){
var state_val_8016 = (state_8015[(1)]);
if((state_val_8016 === (7))){
var inst_8011 = (state_8015[(2)]);
var state_8015__$1 = state_8015;
var statearr_8017_8038 = state_8015__$1;
(statearr_8017_8038[(2)] = inst_8011);

(statearr_8017_8038[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8016 === (1))){
var state_8015__$1 = state_8015;
var statearr_8018_8039 = state_8015__$1;
(statearr_8018_8039[(2)] = null);

(statearr_8018_8039[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8016 === (4))){
var inst_7994 = (state_8015[(7)]);
var inst_7994__$1 = (state_8015[(2)]);
var inst_7995 = (inst_7994__$1 == null);
var state_8015__$1 = (function (){var statearr_8019 = state_8015;
(statearr_8019[(7)] = inst_7994__$1);

return statearr_8019;
})();
if(cljs.core.truth_(inst_7995)){
var statearr_8020_8040 = state_8015__$1;
(statearr_8020_8040[(1)] = (5));

} else {
var statearr_8021_8041 = state_8015__$1;
(statearr_8021_8041[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8016 === (13))){
var state_8015__$1 = state_8015;
var statearr_8022_8042 = state_8015__$1;
(statearr_8022_8042[(2)] = null);

(statearr_8022_8042[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8016 === (6))){
var inst_7994 = (state_8015[(7)]);
var state_8015__$1 = state_8015;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_8015__$1,(11),to,inst_7994);
} else {
if((state_val_8016 === (3))){
var inst_8013 = (state_8015[(2)]);
var state_8015__$1 = state_8015;
return cljs.core.async.impl.ioc_helpers.return_chan(state_8015__$1,inst_8013);
} else {
if((state_val_8016 === (12))){
var state_8015__$1 = state_8015;
var statearr_8023_8043 = state_8015__$1;
(statearr_8023_8043[(2)] = null);

(statearr_8023_8043[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8016 === (2))){
var state_8015__$1 = state_8015;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_8015__$1,(4),from);
} else {
if((state_val_8016 === (11))){
var inst_8004 = (state_8015[(2)]);
var state_8015__$1 = state_8015;
if(cljs.core.truth_(inst_8004)){
var statearr_8024_8044 = state_8015__$1;
(statearr_8024_8044[(1)] = (12));

} else {
var statearr_8025_8045 = state_8015__$1;
(statearr_8025_8045[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8016 === (9))){
var state_8015__$1 = state_8015;
var statearr_8026_8046 = state_8015__$1;
(statearr_8026_8046[(2)] = null);

(statearr_8026_8046[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8016 === (5))){
var state_8015__$1 = state_8015;
if(cljs.core.truth_(close_QMARK_)){
var statearr_8027_8047 = state_8015__$1;
(statearr_8027_8047[(1)] = (8));

} else {
var statearr_8028_8048 = state_8015__$1;
(statearr_8028_8048[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8016 === (14))){
var inst_8009 = (state_8015[(2)]);
var state_8015__$1 = state_8015;
var statearr_8029_8049 = state_8015__$1;
(statearr_8029_8049[(2)] = inst_8009);

(statearr_8029_8049[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8016 === (10))){
var inst_8001 = (state_8015[(2)]);
var state_8015__$1 = state_8015;
var statearr_8030_8050 = state_8015__$1;
(statearr_8030_8050[(2)] = inst_8001);

(statearr_8030_8050[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8016 === (8))){
var inst_7998 = cljs.core.async.close_BANG_(to);
var state_8015__$1 = state_8015;
var statearr_8031_8051 = state_8015__$1;
(statearr_8031_8051[(2)] = inst_7998);

(statearr_8031_8051[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7888__auto___8037))
;
return ((function (switch__7785__auto__,c__7888__auto___8037){
return (function() {
var cljs$core$async$state_machine__7786__auto__ = null;
var cljs$core$async$state_machine__7786__auto____0 = (function (){
var statearr_8032 = [null,null,null,null,null,null,null,null];
(statearr_8032[(0)] = cljs$core$async$state_machine__7786__auto__);

(statearr_8032[(1)] = (1));

return statearr_8032;
});
var cljs$core$async$state_machine__7786__auto____1 = (function (state_8015){
while(true){
var ret_value__7787__auto__ = (function (){try{while(true){
var result__7788__auto__ = switch__7785__auto__(state_8015);
if(cljs.core.keyword_identical_QMARK_(result__7788__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7788__auto__;
}
break;
}
}catch (e8033){if((e8033 instanceof Object)){
var ex__7789__auto__ = e8033;
var statearr_8034_8052 = state_8015;
(statearr_8034_8052[(5)] = ex__7789__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_8015);

return cljs.core.cst$kw$recur;
} else {
throw e8033;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7787__auto__,cljs.core.cst$kw$recur)){
var G__8053 = state_8015;
state_8015 = G__8053;
continue;
} else {
return ret_value__7787__auto__;
}
break;
}
});
cljs$core$async$state_machine__7786__auto__ = function(state_8015){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7786__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7786__auto____1.call(this,state_8015);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7786__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7786__auto____0;
cljs$core$async$state_machine__7786__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7786__auto____1;
return cljs$core$async$state_machine__7786__auto__;
})()
;})(switch__7785__auto__,c__7888__auto___8037))
})();
var state__7890__auto__ = (function (){var statearr_8035 = (f__7889__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7889__auto__.cljs$core$IFn$_invoke$arity$0() : f__7889__auto__.call(null));
(statearr_8035[(6)] = c__7888__auto___8037);

return statearr_8035;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7890__auto__);
});})(c__7888__auto___8037))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__8054){
var vec__8055 = p__8054;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8055,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8055,(1),null);
var job = vec__8055;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__7888__auto___8226 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7888__auto___8226,res,vec__8055,v,p,job,jobs,results){
return (function (){
var f__7889__auto__ = (function (){var switch__7785__auto__ = ((function (c__7888__auto___8226,res,vec__8055,v,p,job,jobs,results){
return (function (state_8062){
var state_val_8063 = (state_8062[(1)]);
if((state_val_8063 === (1))){
var state_8062__$1 = state_8062;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_8062__$1,(2),res,v);
} else {
if((state_val_8063 === (2))){
var inst_8059 = (state_8062[(2)]);
var inst_8060 = cljs.core.async.close_BANG_(res);
var state_8062__$1 = (function (){var statearr_8064 = state_8062;
(statearr_8064[(7)] = inst_8059);

return statearr_8064;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_8062__$1,inst_8060);
} else {
return null;
}
}
});})(c__7888__auto___8226,res,vec__8055,v,p,job,jobs,results))
;
return ((function (switch__7785__auto__,c__7888__auto___8226,res,vec__8055,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7786__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7786__auto____0 = (function (){
var statearr_8065 = [null,null,null,null,null,null,null,null];
(statearr_8065[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7786__auto__);

(statearr_8065[(1)] = (1));

return statearr_8065;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7786__auto____1 = (function (state_8062){
while(true){
var ret_value__7787__auto__ = (function (){try{while(true){
var result__7788__auto__ = switch__7785__auto__(state_8062);
if(cljs.core.keyword_identical_QMARK_(result__7788__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7788__auto__;
}
break;
}
}catch (e8066){if((e8066 instanceof Object)){
var ex__7789__auto__ = e8066;
var statearr_8067_8227 = state_8062;
(statearr_8067_8227[(5)] = ex__7789__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_8062);

return cljs.core.cst$kw$recur;
} else {
throw e8066;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7787__auto__,cljs.core.cst$kw$recur)){
var G__8228 = state_8062;
state_8062 = G__8228;
continue;
} else {
return ret_value__7787__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7786__auto__ = function(state_8062){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7786__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7786__auto____1.call(this,state_8062);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7786__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7786__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7786__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7786__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7786__auto__;
})()
;})(switch__7785__auto__,c__7888__auto___8226,res,vec__8055,v,p,job,jobs,results))
})();
var state__7890__auto__ = (function (){var statearr_8068 = (f__7889__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7889__auto__.cljs$core$IFn$_invoke$arity$0() : f__7889__auto__.call(null));
(statearr_8068[(6)] = c__7888__auto___8226);

return statearr_8068;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7890__auto__);
});})(c__7888__auto___8226,res,vec__8055,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__8069){
var vec__8070 = p__8069;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8070,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8070,(1),null);
var job = vec__8070;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__4408__auto___8229 = n;
var __8230 = (0);
while(true){
if((__8230 < n__4408__auto___8229)){
var G__8073_8231 = type;
var G__8073_8232__$1 = (((G__8073_8231 instanceof cljs.core.Keyword))?G__8073_8231.fqn:null);
switch (G__8073_8232__$1) {
case "compute":
var c__7888__auto___8234 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__8230,c__7888__auto___8234,G__8073_8231,G__8073_8232__$1,n__4408__auto___8229,jobs,results,process,async){
return (function (){
var f__7889__auto__ = (function (){var switch__7785__auto__ = ((function (__8230,c__7888__auto___8234,G__8073_8231,G__8073_8232__$1,n__4408__auto___8229,jobs,results,process,async){
return (function (state_8086){
var state_val_8087 = (state_8086[(1)]);
if((state_val_8087 === (1))){
var state_8086__$1 = state_8086;
var statearr_8088_8235 = state_8086__$1;
(statearr_8088_8235[(2)] = null);

(statearr_8088_8235[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8087 === (2))){
var state_8086__$1 = state_8086;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_8086__$1,(4),jobs);
} else {
if((state_val_8087 === (3))){
var inst_8084 = (state_8086[(2)]);
var state_8086__$1 = state_8086;
return cljs.core.async.impl.ioc_helpers.return_chan(state_8086__$1,inst_8084);
} else {
if((state_val_8087 === (4))){
var inst_8076 = (state_8086[(2)]);
var inst_8077 = process(inst_8076);
var state_8086__$1 = state_8086;
if(cljs.core.truth_(inst_8077)){
var statearr_8089_8236 = state_8086__$1;
(statearr_8089_8236[(1)] = (5));

} else {
var statearr_8090_8237 = state_8086__$1;
(statearr_8090_8237[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8087 === (5))){
var state_8086__$1 = state_8086;
var statearr_8091_8238 = state_8086__$1;
(statearr_8091_8238[(2)] = null);

(statearr_8091_8238[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8087 === (6))){
var state_8086__$1 = state_8086;
var statearr_8092_8239 = state_8086__$1;
(statearr_8092_8239[(2)] = null);

(statearr_8092_8239[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8087 === (7))){
var inst_8082 = (state_8086[(2)]);
var state_8086__$1 = state_8086;
var statearr_8093_8240 = state_8086__$1;
(statearr_8093_8240[(2)] = inst_8082);

(statearr_8093_8240[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__8230,c__7888__auto___8234,G__8073_8231,G__8073_8232__$1,n__4408__auto___8229,jobs,results,process,async))
;
return ((function (__8230,switch__7785__auto__,c__7888__auto___8234,G__8073_8231,G__8073_8232__$1,n__4408__auto___8229,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7786__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7786__auto____0 = (function (){
var statearr_8094 = [null,null,null,null,null,null,null];
(statearr_8094[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7786__auto__);

(statearr_8094[(1)] = (1));

return statearr_8094;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7786__auto____1 = (function (state_8086){
while(true){
var ret_value__7787__auto__ = (function (){try{while(true){
var result__7788__auto__ = switch__7785__auto__(state_8086);
if(cljs.core.keyword_identical_QMARK_(result__7788__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7788__auto__;
}
break;
}
}catch (e8095){if((e8095 instanceof Object)){
var ex__7789__auto__ = e8095;
var statearr_8096_8241 = state_8086;
(statearr_8096_8241[(5)] = ex__7789__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_8086);

return cljs.core.cst$kw$recur;
} else {
throw e8095;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7787__auto__,cljs.core.cst$kw$recur)){
var G__8242 = state_8086;
state_8086 = G__8242;
continue;
} else {
return ret_value__7787__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7786__auto__ = function(state_8086){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7786__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7786__auto____1.call(this,state_8086);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7786__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7786__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7786__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7786__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7786__auto__;
})()
;})(__8230,switch__7785__auto__,c__7888__auto___8234,G__8073_8231,G__8073_8232__$1,n__4408__auto___8229,jobs,results,process,async))
})();
var state__7890__auto__ = (function (){var statearr_8097 = (f__7889__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7889__auto__.cljs$core$IFn$_invoke$arity$0() : f__7889__auto__.call(null));
(statearr_8097[(6)] = c__7888__auto___8234);

return statearr_8097;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7890__auto__);
});})(__8230,c__7888__auto___8234,G__8073_8231,G__8073_8232__$1,n__4408__auto___8229,jobs,results,process,async))
);


break;
case "async":
var c__7888__auto___8243 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__8230,c__7888__auto___8243,G__8073_8231,G__8073_8232__$1,n__4408__auto___8229,jobs,results,process,async){
return (function (){
var f__7889__auto__ = (function (){var switch__7785__auto__ = ((function (__8230,c__7888__auto___8243,G__8073_8231,G__8073_8232__$1,n__4408__auto___8229,jobs,results,process,async){
return (function (state_8110){
var state_val_8111 = (state_8110[(1)]);
if((state_val_8111 === (1))){
var state_8110__$1 = state_8110;
var statearr_8112_8244 = state_8110__$1;
(statearr_8112_8244[(2)] = null);

(statearr_8112_8244[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8111 === (2))){
var state_8110__$1 = state_8110;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_8110__$1,(4),jobs);
} else {
if((state_val_8111 === (3))){
var inst_8108 = (state_8110[(2)]);
var state_8110__$1 = state_8110;
return cljs.core.async.impl.ioc_helpers.return_chan(state_8110__$1,inst_8108);
} else {
if((state_val_8111 === (4))){
var inst_8100 = (state_8110[(2)]);
var inst_8101 = async(inst_8100);
var state_8110__$1 = state_8110;
if(cljs.core.truth_(inst_8101)){
var statearr_8113_8245 = state_8110__$1;
(statearr_8113_8245[(1)] = (5));

} else {
var statearr_8114_8246 = state_8110__$1;
(statearr_8114_8246[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8111 === (5))){
var state_8110__$1 = state_8110;
var statearr_8115_8247 = state_8110__$1;
(statearr_8115_8247[(2)] = null);

(statearr_8115_8247[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8111 === (6))){
var state_8110__$1 = state_8110;
var statearr_8116_8248 = state_8110__$1;
(statearr_8116_8248[(2)] = null);

(statearr_8116_8248[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8111 === (7))){
var inst_8106 = (state_8110[(2)]);
var state_8110__$1 = state_8110;
var statearr_8117_8249 = state_8110__$1;
(statearr_8117_8249[(2)] = inst_8106);

(statearr_8117_8249[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__8230,c__7888__auto___8243,G__8073_8231,G__8073_8232__$1,n__4408__auto___8229,jobs,results,process,async))
;
return ((function (__8230,switch__7785__auto__,c__7888__auto___8243,G__8073_8231,G__8073_8232__$1,n__4408__auto___8229,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7786__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7786__auto____0 = (function (){
var statearr_8118 = [null,null,null,null,null,null,null];
(statearr_8118[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7786__auto__);

(statearr_8118[(1)] = (1));

return statearr_8118;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7786__auto____1 = (function (state_8110){
while(true){
var ret_value__7787__auto__ = (function (){try{while(true){
var result__7788__auto__ = switch__7785__auto__(state_8110);
if(cljs.core.keyword_identical_QMARK_(result__7788__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7788__auto__;
}
break;
}
}catch (e8119){if((e8119 instanceof Object)){
var ex__7789__auto__ = e8119;
var statearr_8120_8250 = state_8110;
(statearr_8120_8250[(5)] = ex__7789__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_8110);

return cljs.core.cst$kw$recur;
} else {
throw e8119;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7787__auto__,cljs.core.cst$kw$recur)){
var G__8251 = state_8110;
state_8110 = G__8251;
continue;
} else {
return ret_value__7787__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7786__auto__ = function(state_8110){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7786__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7786__auto____1.call(this,state_8110);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7786__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7786__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7786__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7786__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7786__auto__;
})()
;})(__8230,switch__7785__auto__,c__7888__auto___8243,G__8073_8231,G__8073_8232__$1,n__4408__auto___8229,jobs,results,process,async))
})();
var state__7890__auto__ = (function (){var statearr_8121 = (f__7889__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7889__auto__.cljs$core$IFn$_invoke$arity$0() : f__7889__auto__.call(null));
(statearr_8121[(6)] = c__7888__auto___8243);

return statearr_8121;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7890__auto__);
});})(__8230,c__7888__auto___8243,G__8073_8231,G__8073_8232__$1,n__4408__auto___8229,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8073_8232__$1)].join('')));

}

var G__8252 = (__8230 + (1));
__8230 = G__8252;
continue;
} else {
}
break;
}

var c__7888__auto___8253 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7888__auto___8253,jobs,results,process,async){
return (function (){
var f__7889__auto__ = (function (){var switch__7785__auto__ = ((function (c__7888__auto___8253,jobs,results,process,async){
return (function (state_8143){
var state_val_8144 = (state_8143[(1)]);
if((state_val_8144 === (1))){
var state_8143__$1 = state_8143;
var statearr_8145_8254 = state_8143__$1;
(statearr_8145_8254[(2)] = null);

(statearr_8145_8254[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8144 === (2))){
var state_8143__$1 = state_8143;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_8143__$1,(4),from);
} else {
if((state_val_8144 === (3))){
var inst_8141 = (state_8143[(2)]);
var state_8143__$1 = state_8143;
return cljs.core.async.impl.ioc_helpers.return_chan(state_8143__$1,inst_8141);
} else {
if((state_val_8144 === (4))){
var inst_8124 = (state_8143[(7)]);
var inst_8124__$1 = (state_8143[(2)]);
var inst_8125 = (inst_8124__$1 == null);
var state_8143__$1 = (function (){var statearr_8146 = state_8143;
(statearr_8146[(7)] = inst_8124__$1);

return statearr_8146;
})();
if(cljs.core.truth_(inst_8125)){
var statearr_8147_8255 = state_8143__$1;
(statearr_8147_8255[(1)] = (5));

} else {
var statearr_8148_8256 = state_8143__$1;
(statearr_8148_8256[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8144 === (5))){
var inst_8127 = cljs.core.async.close_BANG_(jobs);
var state_8143__$1 = state_8143;
var statearr_8149_8257 = state_8143__$1;
(statearr_8149_8257[(2)] = inst_8127);

(statearr_8149_8257[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8144 === (6))){
var inst_8129 = (state_8143[(8)]);
var inst_8124 = (state_8143[(7)]);
var inst_8129__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_8130 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_8131 = [inst_8124,inst_8129__$1];
var inst_8132 = (new cljs.core.PersistentVector(null,2,(5),inst_8130,inst_8131,null));
var state_8143__$1 = (function (){var statearr_8150 = state_8143;
(statearr_8150[(8)] = inst_8129__$1);

return statearr_8150;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_8143__$1,(8),jobs,inst_8132);
} else {
if((state_val_8144 === (7))){
var inst_8139 = (state_8143[(2)]);
var state_8143__$1 = state_8143;
var statearr_8151_8258 = state_8143__$1;
(statearr_8151_8258[(2)] = inst_8139);

(statearr_8151_8258[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8144 === (8))){
var inst_8129 = (state_8143[(8)]);
var inst_8134 = (state_8143[(2)]);
var state_8143__$1 = (function (){var statearr_8152 = state_8143;
(statearr_8152[(9)] = inst_8134);

return statearr_8152;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_8143__$1,(9),results,inst_8129);
} else {
if((state_val_8144 === (9))){
var inst_8136 = (state_8143[(2)]);
var state_8143__$1 = (function (){var statearr_8153 = state_8143;
(statearr_8153[(10)] = inst_8136);

return statearr_8153;
})();
var statearr_8154_8259 = state_8143__$1;
(statearr_8154_8259[(2)] = null);

(statearr_8154_8259[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__7888__auto___8253,jobs,results,process,async))
;
return ((function (switch__7785__auto__,c__7888__auto___8253,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7786__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7786__auto____0 = (function (){
var statearr_8155 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_8155[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7786__auto__);

(statearr_8155[(1)] = (1));

return statearr_8155;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7786__auto____1 = (function (state_8143){
while(true){
var ret_value__7787__auto__ = (function (){try{while(true){
var result__7788__auto__ = switch__7785__auto__(state_8143);
if(cljs.core.keyword_identical_QMARK_(result__7788__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7788__auto__;
}
break;
}
}catch (e8156){if((e8156 instanceof Object)){
var ex__7789__auto__ = e8156;
var statearr_8157_8260 = state_8143;
(statearr_8157_8260[(5)] = ex__7789__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_8143);

return cljs.core.cst$kw$recur;
} else {
throw e8156;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7787__auto__,cljs.core.cst$kw$recur)){
var G__8261 = state_8143;
state_8143 = G__8261;
continue;
} else {
return ret_value__7787__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7786__auto__ = function(state_8143){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7786__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7786__auto____1.call(this,state_8143);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7786__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7786__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7786__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7786__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7786__auto__;
})()
;})(switch__7785__auto__,c__7888__auto___8253,jobs,results,process,async))
})();
var state__7890__auto__ = (function (){var statearr_8158 = (f__7889__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7889__auto__.cljs$core$IFn$_invoke$arity$0() : f__7889__auto__.call(null));
(statearr_8158[(6)] = c__7888__auto___8253);

return statearr_8158;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7890__auto__);
});})(c__7888__auto___8253,jobs,results,process,async))
);


var c__7888__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7888__auto__,jobs,results,process,async){
return (function (){
var f__7889__auto__ = (function (){var switch__7785__auto__ = ((function (c__7888__auto__,jobs,results,process,async){
return (function (state_8196){
var state_val_8197 = (state_8196[(1)]);
if((state_val_8197 === (7))){
var inst_8192 = (state_8196[(2)]);
var state_8196__$1 = state_8196;
var statearr_8198_8262 = state_8196__$1;
(statearr_8198_8262[(2)] = inst_8192);

(statearr_8198_8262[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8197 === (20))){
var state_8196__$1 = state_8196;
var statearr_8199_8263 = state_8196__$1;
(statearr_8199_8263[(2)] = null);

(statearr_8199_8263[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8197 === (1))){
var state_8196__$1 = state_8196;
var statearr_8200_8264 = state_8196__$1;
(statearr_8200_8264[(2)] = null);

(statearr_8200_8264[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8197 === (4))){
var inst_8161 = (state_8196[(7)]);
var inst_8161__$1 = (state_8196[(2)]);
var inst_8162 = (inst_8161__$1 == null);
var state_8196__$1 = (function (){var statearr_8201 = state_8196;
(statearr_8201[(7)] = inst_8161__$1);

return statearr_8201;
})();
if(cljs.core.truth_(inst_8162)){
var statearr_8202_8265 = state_8196__$1;
(statearr_8202_8265[(1)] = (5));

} else {
var statearr_8203_8266 = state_8196__$1;
(statearr_8203_8266[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8197 === (15))){
var inst_8174 = (state_8196[(8)]);
var state_8196__$1 = state_8196;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_8196__$1,(18),to,inst_8174);
} else {
if((state_val_8197 === (21))){
var inst_8187 = (state_8196[(2)]);
var state_8196__$1 = state_8196;
var statearr_8204_8267 = state_8196__$1;
(statearr_8204_8267[(2)] = inst_8187);

(statearr_8204_8267[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8197 === (13))){
var inst_8189 = (state_8196[(2)]);
var state_8196__$1 = (function (){var statearr_8205 = state_8196;
(statearr_8205[(9)] = inst_8189);

return statearr_8205;
})();
var statearr_8206_8268 = state_8196__$1;
(statearr_8206_8268[(2)] = null);

(statearr_8206_8268[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8197 === (6))){
var inst_8161 = (state_8196[(7)]);
var state_8196__$1 = state_8196;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_8196__$1,(11),inst_8161);
} else {
if((state_val_8197 === (17))){
var inst_8182 = (state_8196[(2)]);
var state_8196__$1 = state_8196;
if(cljs.core.truth_(inst_8182)){
var statearr_8207_8269 = state_8196__$1;
(statearr_8207_8269[(1)] = (19));

} else {
var statearr_8208_8270 = state_8196__$1;
(statearr_8208_8270[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8197 === (3))){
var inst_8194 = (state_8196[(2)]);
var state_8196__$1 = state_8196;
return cljs.core.async.impl.ioc_helpers.return_chan(state_8196__$1,inst_8194);
} else {
if((state_val_8197 === (12))){
var inst_8171 = (state_8196[(10)]);
var state_8196__$1 = state_8196;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_8196__$1,(14),inst_8171);
} else {
if((state_val_8197 === (2))){
var state_8196__$1 = state_8196;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_8196__$1,(4),results);
} else {
if((state_val_8197 === (19))){
var state_8196__$1 = state_8196;
var statearr_8209_8271 = state_8196__$1;
(statearr_8209_8271[(2)] = null);

(statearr_8209_8271[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8197 === (11))){
var inst_8171 = (state_8196[(2)]);
var state_8196__$1 = (function (){var statearr_8210 = state_8196;
(statearr_8210[(10)] = inst_8171);

return statearr_8210;
})();
var statearr_8211_8272 = state_8196__$1;
(statearr_8211_8272[(2)] = null);

(statearr_8211_8272[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8197 === (9))){
var state_8196__$1 = state_8196;
var statearr_8212_8273 = state_8196__$1;
(statearr_8212_8273[(2)] = null);

(statearr_8212_8273[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8197 === (5))){
var state_8196__$1 = state_8196;
if(cljs.core.truth_(close_QMARK_)){
var statearr_8213_8274 = state_8196__$1;
(statearr_8213_8274[(1)] = (8));

} else {
var statearr_8214_8275 = state_8196__$1;
(statearr_8214_8275[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8197 === (14))){
var inst_8176 = (state_8196[(11)]);
var inst_8174 = (state_8196[(8)]);
var inst_8174__$1 = (state_8196[(2)]);
var inst_8175 = (inst_8174__$1 == null);
var inst_8176__$1 = cljs.core.not(inst_8175);
var state_8196__$1 = (function (){var statearr_8215 = state_8196;
(statearr_8215[(11)] = inst_8176__$1);

(statearr_8215[(8)] = inst_8174__$1);

return statearr_8215;
})();
if(inst_8176__$1){
var statearr_8216_8276 = state_8196__$1;
(statearr_8216_8276[(1)] = (15));

} else {
var statearr_8217_8277 = state_8196__$1;
(statearr_8217_8277[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8197 === (16))){
var inst_8176 = (state_8196[(11)]);
var state_8196__$1 = state_8196;
var statearr_8218_8278 = state_8196__$1;
(statearr_8218_8278[(2)] = inst_8176);

(statearr_8218_8278[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8197 === (10))){
var inst_8168 = (state_8196[(2)]);
var state_8196__$1 = state_8196;
var statearr_8219_8279 = state_8196__$1;
(statearr_8219_8279[(2)] = inst_8168);

(statearr_8219_8279[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8197 === (18))){
var inst_8179 = (state_8196[(2)]);
var state_8196__$1 = state_8196;
var statearr_8220_8280 = state_8196__$1;
(statearr_8220_8280[(2)] = inst_8179);

(statearr_8220_8280[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8197 === (8))){
var inst_8165 = cljs.core.async.close_BANG_(to);
var state_8196__$1 = state_8196;
var statearr_8221_8281 = state_8196__$1;
(statearr_8221_8281[(2)] = inst_8165);

(statearr_8221_8281[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7888__auto__,jobs,results,process,async))
;
return ((function (switch__7785__auto__,c__7888__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7786__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7786__auto____0 = (function (){
var statearr_8222 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8222[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7786__auto__);

(statearr_8222[(1)] = (1));

return statearr_8222;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7786__auto____1 = (function (state_8196){
while(true){
var ret_value__7787__auto__ = (function (){try{while(true){
var result__7788__auto__ = switch__7785__auto__(state_8196);
if(cljs.core.keyword_identical_QMARK_(result__7788__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7788__auto__;
}
break;
}
}catch (e8223){if((e8223 instanceof Object)){
var ex__7789__auto__ = e8223;
var statearr_8224_8282 = state_8196;
(statearr_8224_8282[(5)] = ex__7789__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_8196);

return cljs.core.cst$kw$recur;
} else {
throw e8223;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7787__auto__,cljs.core.cst$kw$recur)){
var G__8283 = state_8196;
state_8196 = G__8283;
continue;
} else {
return ret_value__7787__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7786__auto__ = function(state_8196){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7786__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7786__auto____1.call(this,state_8196);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7786__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7786__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7786__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7786__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7786__auto__;
})()
;})(switch__7785__auto__,c__7888__auto__,jobs,results,process,async))
})();
var state__7890__auto__ = (function (){var statearr_8225 = (f__7889__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7889__auto__.cljs$core$IFn$_invoke$arity$0() : f__7889__auto__.call(null));
(statearr_8225[(6)] = c__7888__auto__);

return statearr_8225;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7890__auto__);
});})(c__7888__auto__,jobs,results,process,async))
);

return c__7888__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__8285 = arguments.length;
switch (G__8285) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.cst$kw$async);
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__8288 = arguments.length;
switch (G__8288) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.cst$kw$compute);
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__8291 = arguments.length;
switch (G__8291) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__7888__auto___8340 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7888__auto___8340,tc,fc){
return (function (){
var f__7889__auto__ = (function (){var switch__7785__auto__ = ((function (c__7888__auto___8340,tc,fc){
return (function (state_8317){
var state_val_8318 = (state_8317[(1)]);
if((state_val_8318 === (7))){
var inst_8313 = (state_8317[(2)]);
var state_8317__$1 = state_8317;
var statearr_8319_8341 = state_8317__$1;
(statearr_8319_8341[(2)] = inst_8313);

(statearr_8319_8341[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8318 === (1))){
var state_8317__$1 = state_8317;
var statearr_8320_8342 = state_8317__$1;
(statearr_8320_8342[(2)] = null);

(statearr_8320_8342[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8318 === (4))){
var inst_8294 = (state_8317[(7)]);
var inst_8294__$1 = (state_8317[(2)]);
var inst_8295 = (inst_8294__$1 == null);
var state_8317__$1 = (function (){var statearr_8321 = state_8317;
(statearr_8321[(7)] = inst_8294__$1);

return statearr_8321;
})();
if(cljs.core.truth_(inst_8295)){
var statearr_8322_8343 = state_8317__$1;
(statearr_8322_8343[(1)] = (5));

} else {
var statearr_8323_8344 = state_8317__$1;
(statearr_8323_8344[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8318 === (13))){
var state_8317__$1 = state_8317;
var statearr_8324_8345 = state_8317__$1;
(statearr_8324_8345[(2)] = null);

(statearr_8324_8345[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8318 === (6))){
var inst_8294 = (state_8317[(7)]);
var inst_8300 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_8294) : p.call(null,inst_8294));
var state_8317__$1 = state_8317;
if(cljs.core.truth_(inst_8300)){
var statearr_8325_8346 = state_8317__$1;
(statearr_8325_8346[(1)] = (9));

} else {
var statearr_8326_8347 = state_8317__$1;
(statearr_8326_8347[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8318 === (3))){
var inst_8315 = (state_8317[(2)]);
var state_8317__$1 = state_8317;
return cljs.core.async.impl.ioc_helpers.return_chan(state_8317__$1,inst_8315);
} else {
if((state_val_8318 === (12))){
var state_8317__$1 = state_8317;
var statearr_8327_8348 = state_8317__$1;
(statearr_8327_8348[(2)] = null);

(statearr_8327_8348[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8318 === (2))){
var state_8317__$1 = state_8317;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_8317__$1,(4),ch);
} else {
if((state_val_8318 === (11))){
var inst_8294 = (state_8317[(7)]);
var inst_8304 = (state_8317[(2)]);
var state_8317__$1 = state_8317;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_8317__$1,(8),inst_8304,inst_8294);
} else {
if((state_val_8318 === (9))){
var state_8317__$1 = state_8317;
var statearr_8328_8349 = state_8317__$1;
(statearr_8328_8349[(2)] = tc);

(statearr_8328_8349[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8318 === (5))){
var inst_8297 = cljs.core.async.close_BANG_(tc);
var inst_8298 = cljs.core.async.close_BANG_(fc);
var state_8317__$1 = (function (){var statearr_8329 = state_8317;
(statearr_8329[(8)] = inst_8297);

return statearr_8329;
})();
var statearr_8330_8350 = state_8317__$1;
(statearr_8330_8350[(2)] = inst_8298);

(statearr_8330_8350[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8318 === (14))){
var inst_8311 = (state_8317[(2)]);
var state_8317__$1 = state_8317;
var statearr_8331_8351 = state_8317__$1;
(statearr_8331_8351[(2)] = inst_8311);

(statearr_8331_8351[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8318 === (10))){
var state_8317__$1 = state_8317;
var statearr_8332_8352 = state_8317__$1;
(statearr_8332_8352[(2)] = fc);

(statearr_8332_8352[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8318 === (8))){
var inst_8306 = (state_8317[(2)]);
var state_8317__$1 = state_8317;
if(cljs.core.truth_(inst_8306)){
var statearr_8333_8353 = state_8317__$1;
(statearr_8333_8353[(1)] = (12));

} else {
var statearr_8334_8354 = state_8317__$1;
(statearr_8334_8354[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7888__auto___8340,tc,fc))
;
return ((function (switch__7785__auto__,c__7888__auto___8340,tc,fc){
return (function() {
var cljs$core$async$state_machine__7786__auto__ = null;
var cljs$core$async$state_machine__7786__auto____0 = (function (){
var statearr_8335 = [null,null,null,null,null,null,null,null,null];
(statearr_8335[(0)] = cljs$core$async$state_machine__7786__auto__);

(statearr_8335[(1)] = (1));

return statearr_8335;
});
var cljs$core$async$state_machine__7786__auto____1 = (function (state_8317){
while(true){
var ret_value__7787__auto__ = (function (){try{while(true){
var result__7788__auto__ = switch__7785__auto__(state_8317);
if(cljs.core.keyword_identical_QMARK_(result__7788__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7788__auto__;
}
break;
}
}catch (e8336){if((e8336 instanceof Object)){
var ex__7789__auto__ = e8336;
var statearr_8337_8355 = state_8317;
(statearr_8337_8355[(5)] = ex__7789__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_8317);

return cljs.core.cst$kw$recur;
} else {
throw e8336;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7787__auto__,cljs.core.cst$kw$recur)){
var G__8356 = state_8317;
state_8317 = G__8356;
continue;
} else {
return ret_value__7787__auto__;
}
break;
}
});
cljs$core$async$state_machine__7786__auto__ = function(state_8317){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7786__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7786__auto____1.call(this,state_8317);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7786__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7786__auto____0;
cljs$core$async$state_machine__7786__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7786__auto____1;
return cljs$core$async$state_machine__7786__auto__;
})()
;})(switch__7785__auto__,c__7888__auto___8340,tc,fc))
})();
var state__7890__auto__ = (function (){var statearr_8338 = (f__7889__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7889__auto__.cljs$core$IFn$_invoke$arity$0() : f__7889__auto__.call(null));
(statearr_8338[(6)] = c__7888__auto___8340);

return statearr_8338;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7890__auto__);
});})(c__7888__auto___8340,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__7888__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7888__auto__){
return (function (){
var f__7889__auto__ = (function (){var switch__7785__auto__ = ((function (c__7888__auto__){
return (function (state_8377){
var state_val_8378 = (state_8377[(1)]);
if((state_val_8378 === (7))){
var inst_8373 = (state_8377[(2)]);
var state_8377__$1 = state_8377;
var statearr_8379_8397 = state_8377__$1;
(statearr_8379_8397[(2)] = inst_8373);

(statearr_8379_8397[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8378 === (1))){
var inst_8357 = init;
var state_8377__$1 = (function (){var statearr_8380 = state_8377;
(statearr_8380[(7)] = inst_8357);

return statearr_8380;
})();
var statearr_8381_8398 = state_8377__$1;
(statearr_8381_8398[(2)] = null);

(statearr_8381_8398[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8378 === (4))){
var inst_8360 = (state_8377[(8)]);
var inst_8360__$1 = (state_8377[(2)]);
var inst_8361 = (inst_8360__$1 == null);
var state_8377__$1 = (function (){var statearr_8382 = state_8377;
(statearr_8382[(8)] = inst_8360__$1);

return statearr_8382;
})();
if(cljs.core.truth_(inst_8361)){
var statearr_8383_8399 = state_8377__$1;
(statearr_8383_8399[(1)] = (5));

} else {
var statearr_8384_8400 = state_8377__$1;
(statearr_8384_8400[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8378 === (6))){
var inst_8360 = (state_8377[(8)]);
var inst_8357 = (state_8377[(7)]);
var inst_8364 = (state_8377[(9)]);
var inst_8364__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_8357,inst_8360) : f.call(null,inst_8357,inst_8360));
var inst_8365 = cljs.core.reduced_QMARK_(inst_8364__$1);
var state_8377__$1 = (function (){var statearr_8385 = state_8377;
(statearr_8385[(9)] = inst_8364__$1);

return statearr_8385;
})();
if(inst_8365){
var statearr_8386_8401 = state_8377__$1;
(statearr_8386_8401[(1)] = (8));

} else {
var statearr_8387_8402 = state_8377__$1;
(statearr_8387_8402[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8378 === (3))){
var inst_8375 = (state_8377[(2)]);
var state_8377__$1 = state_8377;
return cljs.core.async.impl.ioc_helpers.return_chan(state_8377__$1,inst_8375);
} else {
if((state_val_8378 === (2))){
var state_8377__$1 = state_8377;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_8377__$1,(4),ch);
} else {
if((state_val_8378 === (9))){
var inst_8364 = (state_8377[(9)]);
var inst_8357 = inst_8364;
var state_8377__$1 = (function (){var statearr_8388 = state_8377;
(statearr_8388[(7)] = inst_8357);

return statearr_8388;
})();
var statearr_8389_8403 = state_8377__$1;
(statearr_8389_8403[(2)] = null);

(statearr_8389_8403[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8378 === (5))){
var inst_8357 = (state_8377[(7)]);
var state_8377__$1 = state_8377;
var statearr_8390_8404 = state_8377__$1;
(statearr_8390_8404[(2)] = inst_8357);

(statearr_8390_8404[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8378 === (10))){
var inst_8371 = (state_8377[(2)]);
var state_8377__$1 = state_8377;
var statearr_8391_8405 = state_8377__$1;
(statearr_8391_8405[(2)] = inst_8371);

(statearr_8391_8405[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8378 === (8))){
var inst_8364 = (state_8377[(9)]);
var inst_8367 = cljs.core.deref(inst_8364);
var state_8377__$1 = state_8377;
var statearr_8392_8406 = state_8377__$1;
(statearr_8392_8406[(2)] = inst_8367);

(statearr_8392_8406[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__7888__auto__))
;
return ((function (switch__7785__auto__,c__7888__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__7786__auto__ = null;
var cljs$core$async$reduce_$_state_machine__7786__auto____0 = (function (){
var statearr_8393 = [null,null,null,null,null,null,null,null,null,null];
(statearr_8393[(0)] = cljs$core$async$reduce_$_state_machine__7786__auto__);

(statearr_8393[(1)] = (1));

return statearr_8393;
});
var cljs$core$async$reduce_$_state_machine__7786__auto____1 = (function (state_8377){
while(true){
var ret_value__7787__auto__ = (function (){try{while(true){
var result__7788__auto__ = switch__7785__auto__(state_8377);
if(cljs.core.keyword_identical_QMARK_(result__7788__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7788__auto__;
}
break;
}
}catch (e8394){if((e8394 instanceof Object)){
var ex__7789__auto__ = e8394;
var statearr_8395_8407 = state_8377;
(statearr_8395_8407[(5)] = ex__7789__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_8377);

return cljs.core.cst$kw$recur;
} else {
throw e8394;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7787__auto__,cljs.core.cst$kw$recur)){
var G__8408 = state_8377;
state_8377 = G__8408;
continue;
} else {
return ret_value__7787__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__7786__auto__ = function(state_8377){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__7786__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__7786__auto____1.call(this,state_8377);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__7786__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__7786__auto____0;
cljs$core$async$reduce_$_state_machine__7786__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__7786__auto____1;
return cljs$core$async$reduce_$_state_machine__7786__auto__;
})()
;})(switch__7785__auto__,c__7888__auto__))
})();
var state__7890__auto__ = (function (){var statearr_8396 = (f__7889__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7889__auto__.cljs$core$IFn$_invoke$arity$0() : f__7889__auto__.call(null));
(statearr_8396[(6)] = c__7888__auto__);

return statearr_8396;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7890__auto__);
});})(c__7888__auto__))
);

return c__7888__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__7888__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7888__auto__,f__$1){
return (function (){
var f__7889__auto__ = (function (){var switch__7785__auto__ = ((function (c__7888__auto__,f__$1){
return (function (state_8414){
var state_val_8415 = (state_8414[(1)]);
if((state_val_8415 === (1))){
var inst_8409 = cljs.core.async.reduce(f__$1,init,ch);
var state_8414__$1 = state_8414;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_8414__$1,(2),inst_8409);
} else {
if((state_val_8415 === (2))){
var inst_8411 = (state_8414[(2)]);
var inst_8412 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_8411) : f__$1.call(null,inst_8411));
var state_8414__$1 = state_8414;
return cljs.core.async.impl.ioc_helpers.return_chan(state_8414__$1,inst_8412);
} else {
return null;
}
}
});})(c__7888__auto__,f__$1))
;
return ((function (switch__7785__auto__,c__7888__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__7786__auto__ = null;
var cljs$core$async$transduce_$_state_machine__7786__auto____0 = (function (){
var statearr_8416 = [null,null,null,null,null,null,null];
(statearr_8416[(0)] = cljs$core$async$transduce_$_state_machine__7786__auto__);

(statearr_8416[(1)] = (1));

return statearr_8416;
});
var cljs$core$async$transduce_$_state_machine__7786__auto____1 = (function (state_8414){
while(true){
var ret_value__7787__auto__ = (function (){try{while(true){
var result__7788__auto__ = switch__7785__auto__(state_8414);
if(cljs.core.keyword_identical_QMARK_(result__7788__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7788__auto__;
}
break;
}
}catch (e8417){if((e8417 instanceof Object)){
var ex__7789__auto__ = e8417;
var statearr_8418_8420 = state_8414;
(statearr_8418_8420[(5)] = ex__7789__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_8414);

return cljs.core.cst$kw$recur;
} else {
throw e8417;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7787__auto__,cljs.core.cst$kw$recur)){
var G__8421 = state_8414;
state_8414 = G__8421;
continue;
} else {
return ret_value__7787__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__7786__auto__ = function(state_8414){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__7786__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__7786__auto____1.call(this,state_8414);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__7786__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__7786__auto____0;
cljs$core$async$transduce_$_state_machine__7786__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__7786__auto____1;
return cljs$core$async$transduce_$_state_machine__7786__auto__;
})()
;})(switch__7785__auto__,c__7888__auto__,f__$1))
})();
var state__7890__auto__ = (function (){var statearr_8419 = (f__7889__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7889__auto__.cljs$core$IFn$_invoke$arity$0() : f__7889__auto__.call(null));
(statearr_8419[(6)] = c__7888__auto__);

return statearr_8419;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7890__auto__);
});})(c__7888__auto__,f__$1))
);

return c__7888__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__8423 = arguments.length;
switch (G__8423) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__7888__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7888__auto__){
return (function (){
var f__7889__auto__ = (function (){var switch__7785__auto__ = ((function (c__7888__auto__){
return (function (state_8448){
var state_val_8449 = (state_8448[(1)]);
if((state_val_8449 === (7))){
var inst_8430 = (state_8448[(2)]);
var state_8448__$1 = state_8448;
var statearr_8450_8471 = state_8448__$1;
(statearr_8450_8471[(2)] = inst_8430);

(statearr_8450_8471[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8449 === (1))){
var inst_8424 = cljs.core.seq(coll);
var inst_8425 = inst_8424;
var state_8448__$1 = (function (){var statearr_8451 = state_8448;
(statearr_8451[(7)] = inst_8425);

return statearr_8451;
})();
var statearr_8452_8472 = state_8448__$1;
(statearr_8452_8472[(2)] = null);

(statearr_8452_8472[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8449 === (4))){
var inst_8425 = (state_8448[(7)]);
var inst_8428 = cljs.core.first(inst_8425);
var state_8448__$1 = state_8448;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_8448__$1,(7),ch,inst_8428);
} else {
if((state_val_8449 === (13))){
var inst_8442 = (state_8448[(2)]);
var state_8448__$1 = state_8448;
var statearr_8453_8473 = state_8448__$1;
(statearr_8453_8473[(2)] = inst_8442);

(statearr_8453_8473[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8449 === (6))){
var inst_8433 = (state_8448[(2)]);
var state_8448__$1 = state_8448;
if(cljs.core.truth_(inst_8433)){
var statearr_8454_8474 = state_8448__$1;
(statearr_8454_8474[(1)] = (8));

} else {
var statearr_8455_8475 = state_8448__$1;
(statearr_8455_8475[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8449 === (3))){
var inst_8446 = (state_8448[(2)]);
var state_8448__$1 = state_8448;
return cljs.core.async.impl.ioc_helpers.return_chan(state_8448__$1,inst_8446);
} else {
if((state_val_8449 === (12))){
var state_8448__$1 = state_8448;
var statearr_8456_8476 = state_8448__$1;
(statearr_8456_8476[(2)] = null);

(statearr_8456_8476[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8449 === (2))){
var inst_8425 = (state_8448[(7)]);
var state_8448__$1 = state_8448;
if(cljs.core.truth_(inst_8425)){
var statearr_8457_8477 = state_8448__$1;
(statearr_8457_8477[(1)] = (4));

} else {
var statearr_8458_8478 = state_8448__$1;
(statearr_8458_8478[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8449 === (11))){
var inst_8439 = cljs.core.async.close_BANG_(ch);
var state_8448__$1 = state_8448;
var statearr_8459_8479 = state_8448__$1;
(statearr_8459_8479[(2)] = inst_8439);

(statearr_8459_8479[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8449 === (9))){
var state_8448__$1 = state_8448;
if(cljs.core.truth_(close_QMARK_)){
var statearr_8460_8480 = state_8448__$1;
(statearr_8460_8480[(1)] = (11));

} else {
var statearr_8461_8481 = state_8448__$1;
(statearr_8461_8481[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8449 === (5))){
var inst_8425 = (state_8448[(7)]);
var state_8448__$1 = state_8448;
var statearr_8462_8482 = state_8448__$1;
(statearr_8462_8482[(2)] = inst_8425);

(statearr_8462_8482[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8449 === (10))){
var inst_8444 = (state_8448[(2)]);
var state_8448__$1 = state_8448;
var statearr_8463_8483 = state_8448__$1;
(statearr_8463_8483[(2)] = inst_8444);

(statearr_8463_8483[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8449 === (8))){
var inst_8425 = (state_8448[(7)]);
var inst_8435 = cljs.core.next(inst_8425);
var inst_8425__$1 = inst_8435;
var state_8448__$1 = (function (){var statearr_8464 = state_8448;
(statearr_8464[(7)] = inst_8425__$1);

return statearr_8464;
})();
var statearr_8465_8484 = state_8448__$1;
(statearr_8465_8484[(2)] = null);

(statearr_8465_8484[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7888__auto__))
;
return ((function (switch__7785__auto__,c__7888__auto__){
return (function() {
var cljs$core$async$state_machine__7786__auto__ = null;
var cljs$core$async$state_machine__7786__auto____0 = (function (){
var statearr_8466 = [null,null,null,null,null,null,null,null];
(statearr_8466[(0)] = cljs$core$async$state_machine__7786__auto__);

(statearr_8466[(1)] = (1));

return statearr_8466;
});
var cljs$core$async$state_machine__7786__auto____1 = (function (state_8448){
while(true){
var ret_value__7787__auto__ = (function (){try{while(true){
var result__7788__auto__ = switch__7785__auto__(state_8448);
if(cljs.core.keyword_identical_QMARK_(result__7788__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7788__auto__;
}
break;
}
}catch (e8467){if((e8467 instanceof Object)){
var ex__7789__auto__ = e8467;
var statearr_8468_8485 = state_8448;
(statearr_8468_8485[(5)] = ex__7789__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_8448);

return cljs.core.cst$kw$recur;
} else {
throw e8467;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7787__auto__,cljs.core.cst$kw$recur)){
var G__8486 = state_8448;
state_8448 = G__8486;
continue;
} else {
return ret_value__7787__auto__;
}
break;
}
});
cljs$core$async$state_machine__7786__auto__ = function(state_8448){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7786__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7786__auto____1.call(this,state_8448);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7786__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7786__auto____0;
cljs$core$async$state_machine__7786__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7786__auto____1;
return cljs$core$async$state_machine__7786__auto__;
})()
;})(switch__7785__auto__,c__7888__auto__))
})();
var state__7890__auto__ = (function (){var statearr_8469 = (f__7889__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7889__auto__.cljs$core$IFn$_invoke$arity$0() : f__7889__auto__.call(null));
(statearr_8469[(6)] = c__7888__auto__);

return statearr_8469;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7890__auto__);
});})(c__7888__auto__))
);

return c__7888__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if(((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4243__auto__ = (((_ == null))?null:_);
var m__4244__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4244__auto__.call(null,_));
} else {
var m__4244__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__4244__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4244__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4244__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4244__auto____$1.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4244__auto__.call(null,m,ch));
} else {
var m__4244__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4244__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4244__auto__.call(null,m));
} else {
var m__4244__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__4244__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async8487 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8487 = (function (ch,cs,meta8488){
this.ch = ch;
this.cs = cs;
this.meta8488 = meta8488;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async8487.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_8489,meta8488__$1){
var self__ = this;
var _8489__$1 = this;
return (new cljs.core.async.t_cljs$core$async8487(self__.ch,self__.cs,meta8488__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async8487.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_8489){
var self__ = this;
var _8489__$1 = this;
return self__.meta8488;
});})(cs))
;

cljs.core.async.t_cljs$core$async8487.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8487.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async8487.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8487.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async8487.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async8487.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async8487.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta8488], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async8487.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async8487.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8487";

cljs.core.async.t_cljs$core$async8487.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async8487");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async8487.
 */
cljs.core.async.__GT_t_cljs$core$async8487 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async8487(ch__$1,cs__$1,meta8488){
return (new cljs.core.async.t_cljs$core$async8487(ch__$1,cs__$1,meta8488));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async8487(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__7888__auto___8709 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7888__auto___8709,cs,m,dchan,dctr,done){
return (function (){
var f__7889__auto__ = (function (){var switch__7785__auto__ = ((function (c__7888__auto___8709,cs,m,dchan,dctr,done){
return (function (state_8624){
var state_val_8625 = (state_8624[(1)]);
if((state_val_8625 === (7))){
var inst_8620 = (state_8624[(2)]);
var state_8624__$1 = state_8624;
var statearr_8626_8710 = state_8624__$1;
(statearr_8626_8710[(2)] = inst_8620);

(statearr_8626_8710[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8625 === (20))){
var inst_8523 = (state_8624[(7)]);
var inst_8535 = cljs.core.first(inst_8523);
var inst_8536 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_8535,(0),null);
var inst_8537 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_8535,(1),null);
var state_8624__$1 = (function (){var statearr_8627 = state_8624;
(statearr_8627[(8)] = inst_8536);

return statearr_8627;
})();
if(cljs.core.truth_(inst_8537)){
var statearr_8628_8711 = state_8624__$1;
(statearr_8628_8711[(1)] = (22));

} else {
var statearr_8629_8712 = state_8624__$1;
(statearr_8629_8712[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8625 === (27))){
var inst_8565 = (state_8624[(9)]);
var inst_8567 = (state_8624[(10)]);
var inst_8492 = (state_8624[(11)]);
var inst_8572 = (state_8624[(12)]);
var inst_8572__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_8565,inst_8567);
var inst_8573 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_8572__$1,inst_8492,done);
var state_8624__$1 = (function (){var statearr_8630 = state_8624;
(statearr_8630[(12)] = inst_8572__$1);

return statearr_8630;
})();
if(cljs.core.truth_(inst_8573)){
var statearr_8631_8713 = state_8624__$1;
(statearr_8631_8713[(1)] = (30));

} else {
var statearr_8632_8714 = state_8624__$1;
(statearr_8632_8714[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8625 === (1))){
var state_8624__$1 = state_8624;
var statearr_8633_8715 = state_8624__$1;
(statearr_8633_8715[(2)] = null);

(statearr_8633_8715[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8625 === (24))){
var inst_8523 = (state_8624[(7)]);
var inst_8542 = (state_8624[(2)]);
var inst_8543 = cljs.core.next(inst_8523);
var inst_8501 = inst_8543;
var inst_8502 = null;
var inst_8503 = (0);
var inst_8504 = (0);
var state_8624__$1 = (function (){var statearr_8634 = state_8624;
(statearr_8634[(13)] = inst_8501);

(statearr_8634[(14)] = inst_8503);

(statearr_8634[(15)] = inst_8504);

(statearr_8634[(16)] = inst_8502);

(statearr_8634[(17)] = inst_8542);

return statearr_8634;
})();
var statearr_8635_8716 = state_8624__$1;
(statearr_8635_8716[(2)] = null);

(statearr_8635_8716[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8625 === (39))){
var state_8624__$1 = state_8624;
var statearr_8639_8717 = state_8624__$1;
(statearr_8639_8717[(2)] = null);

(statearr_8639_8717[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8625 === (4))){
var inst_8492 = (state_8624[(11)]);
var inst_8492__$1 = (state_8624[(2)]);
var inst_8493 = (inst_8492__$1 == null);
var state_8624__$1 = (function (){var statearr_8640 = state_8624;
(statearr_8640[(11)] = inst_8492__$1);

return statearr_8640;
})();
if(cljs.core.truth_(inst_8493)){
var statearr_8641_8718 = state_8624__$1;
(statearr_8641_8718[(1)] = (5));

} else {
var statearr_8642_8719 = state_8624__$1;
(statearr_8642_8719[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8625 === (15))){
var inst_8501 = (state_8624[(13)]);
var inst_8503 = (state_8624[(14)]);
var inst_8504 = (state_8624[(15)]);
var inst_8502 = (state_8624[(16)]);
var inst_8519 = (state_8624[(2)]);
var inst_8520 = (inst_8504 + (1));
var tmp8636 = inst_8501;
var tmp8637 = inst_8503;
var tmp8638 = inst_8502;
var inst_8501__$1 = tmp8636;
var inst_8502__$1 = tmp8638;
var inst_8503__$1 = tmp8637;
var inst_8504__$1 = inst_8520;
var state_8624__$1 = (function (){var statearr_8643 = state_8624;
(statearr_8643[(13)] = inst_8501__$1);

(statearr_8643[(14)] = inst_8503__$1);

(statearr_8643[(15)] = inst_8504__$1);

(statearr_8643[(16)] = inst_8502__$1);

(statearr_8643[(18)] = inst_8519);

return statearr_8643;
})();
var statearr_8644_8720 = state_8624__$1;
(statearr_8644_8720[(2)] = null);

(statearr_8644_8720[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8625 === (21))){
var inst_8546 = (state_8624[(2)]);
var state_8624__$1 = state_8624;
var statearr_8648_8721 = state_8624__$1;
(statearr_8648_8721[(2)] = inst_8546);

(statearr_8648_8721[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8625 === (31))){
var inst_8572 = (state_8624[(12)]);
var inst_8576 = done(null);
var inst_8577 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_8572);
var state_8624__$1 = (function (){var statearr_8649 = state_8624;
(statearr_8649[(19)] = inst_8576);

return statearr_8649;
})();
var statearr_8650_8722 = state_8624__$1;
(statearr_8650_8722[(2)] = inst_8577);

(statearr_8650_8722[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8625 === (32))){
var inst_8565 = (state_8624[(9)]);
var inst_8564 = (state_8624[(20)]);
var inst_8567 = (state_8624[(10)]);
var inst_8566 = (state_8624[(21)]);
var inst_8579 = (state_8624[(2)]);
var inst_8580 = (inst_8567 + (1));
var tmp8645 = inst_8565;
var tmp8646 = inst_8564;
var tmp8647 = inst_8566;
var inst_8564__$1 = tmp8646;
var inst_8565__$1 = tmp8645;
var inst_8566__$1 = tmp8647;
var inst_8567__$1 = inst_8580;
var state_8624__$1 = (function (){var statearr_8651 = state_8624;
(statearr_8651[(9)] = inst_8565__$1);

(statearr_8651[(20)] = inst_8564__$1);

(statearr_8651[(10)] = inst_8567__$1);

(statearr_8651[(21)] = inst_8566__$1);

(statearr_8651[(22)] = inst_8579);

return statearr_8651;
})();
var statearr_8652_8723 = state_8624__$1;
(statearr_8652_8723[(2)] = null);

(statearr_8652_8723[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8625 === (40))){
var inst_8592 = (state_8624[(23)]);
var inst_8596 = done(null);
var inst_8597 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_8592);
var state_8624__$1 = (function (){var statearr_8653 = state_8624;
(statearr_8653[(24)] = inst_8596);

return statearr_8653;
})();
var statearr_8654_8724 = state_8624__$1;
(statearr_8654_8724[(2)] = inst_8597);

(statearr_8654_8724[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8625 === (33))){
var inst_8583 = (state_8624[(25)]);
var inst_8585 = cljs.core.chunked_seq_QMARK_(inst_8583);
var state_8624__$1 = state_8624;
if(inst_8585){
var statearr_8655_8725 = state_8624__$1;
(statearr_8655_8725[(1)] = (36));

} else {
var statearr_8656_8726 = state_8624__$1;
(statearr_8656_8726[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8625 === (13))){
var inst_8513 = (state_8624[(26)]);
var inst_8516 = cljs.core.async.close_BANG_(inst_8513);
var state_8624__$1 = state_8624;
var statearr_8657_8727 = state_8624__$1;
(statearr_8657_8727[(2)] = inst_8516);

(statearr_8657_8727[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8625 === (22))){
var inst_8536 = (state_8624[(8)]);
var inst_8539 = cljs.core.async.close_BANG_(inst_8536);
var state_8624__$1 = state_8624;
var statearr_8658_8728 = state_8624__$1;
(statearr_8658_8728[(2)] = inst_8539);

(statearr_8658_8728[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8625 === (36))){
var inst_8583 = (state_8624[(25)]);
var inst_8587 = cljs.core.chunk_first(inst_8583);
var inst_8588 = cljs.core.chunk_rest(inst_8583);
var inst_8589 = cljs.core.count(inst_8587);
var inst_8564 = inst_8588;
var inst_8565 = inst_8587;
var inst_8566 = inst_8589;
var inst_8567 = (0);
var state_8624__$1 = (function (){var statearr_8659 = state_8624;
(statearr_8659[(9)] = inst_8565);

(statearr_8659[(20)] = inst_8564);

(statearr_8659[(10)] = inst_8567);

(statearr_8659[(21)] = inst_8566);

return statearr_8659;
})();
var statearr_8660_8729 = state_8624__$1;
(statearr_8660_8729[(2)] = null);

(statearr_8660_8729[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8625 === (41))){
var inst_8583 = (state_8624[(25)]);
var inst_8599 = (state_8624[(2)]);
var inst_8600 = cljs.core.next(inst_8583);
var inst_8564 = inst_8600;
var inst_8565 = null;
var inst_8566 = (0);
var inst_8567 = (0);
var state_8624__$1 = (function (){var statearr_8661 = state_8624;
(statearr_8661[(9)] = inst_8565);

(statearr_8661[(20)] = inst_8564);

(statearr_8661[(10)] = inst_8567);

(statearr_8661[(27)] = inst_8599);

(statearr_8661[(21)] = inst_8566);

return statearr_8661;
})();
var statearr_8662_8730 = state_8624__$1;
(statearr_8662_8730[(2)] = null);

(statearr_8662_8730[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8625 === (43))){
var state_8624__$1 = state_8624;
var statearr_8663_8731 = state_8624__$1;
(statearr_8663_8731[(2)] = null);

(statearr_8663_8731[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8625 === (29))){
var inst_8608 = (state_8624[(2)]);
var state_8624__$1 = state_8624;
var statearr_8664_8732 = state_8624__$1;
(statearr_8664_8732[(2)] = inst_8608);

(statearr_8664_8732[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8625 === (44))){
var inst_8617 = (state_8624[(2)]);
var state_8624__$1 = (function (){var statearr_8665 = state_8624;
(statearr_8665[(28)] = inst_8617);

return statearr_8665;
})();
var statearr_8666_8733 = state_8624__$1;
(statearr_8666_8733[(2)] = null);

(statearr_8666_8733[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8625 === (6))){
var inst_8556 = (state_8624[(29)]);
var inst_8555 = cljs.core.deref(cs);
var inst_8556__$1 = cljs.core.keys(inst_8555);
var inst_8557 = cljs.core.count(inst_8556__$1);
var inst_8558 = cljs.core.reset_BANG_(dctr,inst_8557);
var inst_8563 = cljs.core.seq(inst_8556__$1);
var inst_8564 = inst_8563;
var inst_8565 = null;
var inst_8566 = (0);
var inst_8567 = (0);
var state_8624__$1 = (function (){var statearr_8667 = state_8624;
(statearr_8667[(9)] = inst_8565);

(statearr_8667[(29)] = inst_8556__$1);

(statearr_8667[(20)] = inst_8564);

(statearr_8667[(10)] = inst_8567);

(statearr_8667[(30)] = inst_8558);

(statearr_8667[(21)] = inst_8566);

return statearr_8667;
})();
var statearr_8668_8734 = state_8624__$1;
(statearr_8668_8734[(2)] = null);

(statearr_8668_8734[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8625 === (28))){
var inst_8564 = (state_8624[(20)]);
var inst_8583 = (state_8624[(25)]);
var inst_8583__$1 = cljs.core.seq(inst_8564);
var state_8624__$1 = (function (){var statearr_8669 = state_8624;
(statearr_8669[(25)] = inst_8583__$1);

return statearr_8669;
})();
if(inst_8583__$1){
var statearr_8670_8735 = state_8624__$1;
(statearr_8670_8735[(1)] = (33));

} else {
var statearr_8671_8736 = state_8624__$1;
(statearr_8671_8736[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8625 === (25))){
var inst_8567 = (state_8624[(10)]);
var inst_8566 = (state_8624[(21)]);
var inst_8569 = (inst_8567 < inst_8566);
var inst_8570 = inst_8569;
var state_8624__$1 = state_8624;
if(cljs.core.truth_(inst_8570)){
var statearr_8672_8737 = state_8624__$1;
(statearr_8672_8737[(1)] = (27));

} else {
var statearr_8673_8738 = state_8624__$1;
(statearr_8673_8738[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8625 === (34))){
var state_8624__$1 = state_8624;
var statearr_8674_8739 = state_8624__$1;
(statearr_8674_8739[(2)] = null);

(statearr_8674_8739[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8625 === (17))){
var state_8624__$1 = state_8624;
var statearr_8675_8740 = state_8624__$1;
(statearr_8675_8740[(2)] = null);

(statearr_8675_8740[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8625 === (3))){
var inst_8622 = (state_8624[(2)]);
var state_8624__$1 = state_8624;
return cljs.core.async.impl.ioc_helpers.return_chan(state_8624__$1,inst_8622);
} else {
if((state_val_8625 === (12))){
var inst_8551 = (state_8624[(2)]);
var state_8624__$1 = state_8624;
var statearr_8676_8741 = state_8624__$1;
(statearr_8676_8741[(2)] = inst_8551);

(statearr_8676_8741[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8625 === (2))){
var state_8624__$1 = state_8624;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_8624__$1,(4),ch);
} else {
if((state_val_8625 === (23))){
var state_8624__$1 = state_8624;
var statearr_8677_8742 = state_8624__$1;
(statearr_8677_8742[(2)] = null);

(statearr_8677_8742[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8625 === (35))){
var inst_8606 = (state_8624[(2)]);
var state_8624__$1 = state_8624;
var statearr_8678_8743 = state_8624__$1;
(statearr_8678_8743[(2)] = inst_8606);

(statearr_8678_8743[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8625 === (19))){
var inst_8523 = (state_8624[(7)]);
var inst_8527 = cljs.core.chunk_first(inst_8523);
var inst_8528 = cljs.core.chunk_rest(inst_8523);
var inst_8529 = cljs.core.count(inst_8527);
var inst_8501 = inst_8528;
var inst_8502 = inst_8527;
var inst_8503 = inst_8529;
var inst_8504 = (0);
var state_8624__$1 = (function (){var statearr_8679 = state_8624;
(statearr_8679[(13)] = inst_8501);

(statearr_8679[(14)] = inst_8503);

(statearr_8679[(15)] = inst_8504);

(statearr_8679[(16)] = inst_8502);

return statearr_8679;
})();
var statearr_8680_8744 = state_8624__$1;
(statearr_8680_8744[(2)] = null);

(statearr_8680_8744[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8625 === (11))){
var inst_8501 = (state_8624[(13)]);
var inst_8523 = (state_8624[(7)]);
var inst_8523__$1 = cljs.core.seq(inst_8501);
var state_8624__$1 = (function (){var statearr_8681 = state_8624;
(statearr_8681[(7)] = inst_8523__$1);

return statearr_8681;
})();
if(inst_8523__$1){
var statearr_8682_8745 = state_8624__$1;
(statearr_8682_8745[(1)] = (16));

} else {
var statearr_8683_8746 = state_8624__$1;
(statearr_8683_8746[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8625 === (9))){
var inst_8553 = (state_8624[(2)]);
var state_8624__$1 = state_8624;
var statearr_8684_8747 = state_8624__$1;
(statearr_8684_8747[(2)] = inst_8553);

(statearr_8684_8747[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8625 === (5))){
var inst_8499 = cljs.core.deref(cs);
var inst_8500 = cljs.core.seq(inst_8499);
var inst_8501 = inst_8500;
var inst_8502 = null;
var inst_8503 = (0);
var inst_8504 = (0);
var state_8624__$1 = (function (){var statearr_8685 = state_8624;
(statearr_8685[(13)] = inst_8501);

(statearr_8685[(14)] = inst_8503);

(statearr_8685[(15)] = inst_8504);

(statearr_8685[(16)] = inst_8502);

return statearr_8685;
})();
var statearr_8686_8748 = state_8624__$1;
(statearr_8686_8748[(2)] = null);

(statearr_8686_8748[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8625 === (14))){
var state_8624__$1 = state_8624;
var statearr_8687_8749 = state_8624__$1;
(statearr_8687_8749[(2)] = null);

(statearr_8687_8749[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8625 === (45))){
var inst_8614 = (state_8624[(2)]);
var state_8624__$1 = state_8624;
var statearr_8688_8750 = state_8624__$1;
(statearr_8688_8750[(2)] = inst_8614);

(statearr_8688_8750[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8625 === (26))){
var inst_8556 = (state_8624[(29)]);
var inst_8610 = (state_8624[(2)]);
var inst_8611 = cljs.core.seq(inst_8556);
var state_8624__$1 = (function (){var statearr_8689 = state_8624;
(statearr_8689[(31)] = inst_8610);

return statearr_8689;
})();
if(inst_8611){
var statearr_8690_8751 = state_8624__$1;
(statearr_8690_8751[(1)] = (42));

} else {
var statearr_8691_8752 = state_8624__$1;
(statearr_8691_8752[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8625 === (16))){
var inst_8523 = (state_8624[(7)]);
var inst_8525 = cljs.core.chunked_seq_QMARK_(inst_8523);
var state_8624__$1 = state_8624;
if(inst_8525){
var statearr_8692_8753 = state_8624__$1;
(statearr_8692_8753[(1)] = (19));

} else {
var statearr_8693_8754 = state_8624__$1;
(statearr_8693_8754[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8625 === (38))){
var inst_8603 = (state_8624[(2)]);
var state_8624__$1 = state_8624;
var statearr_8694_8755 = state_8624__$1;
(statearr_8694_8755[(2)] = inst_8603);

(statearr_8694_8755[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8625 === (30))){
var state_8624__$1 = state_8624;
var statearr_8695_8756 = state_8624__$1;
(statearr_8695_8756[(2)] = null);

(statearr_8695_8756[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8625 === (10))){
var inst_8504 = (state_8624[(15)]);
var inst_8502 = (state_8624[(16)]);
var inst_8512 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_8502,inst_8504);
var inst_8513 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_8512,(0),null);
var inst_8514 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_8512,(1),null);
var state_8624__$1 = (function (){var statearr_8696 = state_8624;
(statearr_8696[(26)] = inst_8513);

return statearr_8696;
})();
if(cljs.core.truth_(inst_8514)){
var statearr_8697_8757 = state_8624__$1;
(statearr_8697_8757[(1)] = (13));

} else {
var statearr_8698_8758 = state_8624__$1;
(statearr_8698_8758[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8625 === (18))){
var inst_8549 = (state_8624[(2)]);
var state_8624__$1 = state_8624;
var statearr_8699_8759 = state_8624__$1;
(statearr_8699_8759[(2)] = inst_8549);

(statearr_8699_8759[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8625 === (42))){
var state_8624__$1 = state_8624;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_8624__$1,(45),dchan);
} else {
if((state_val_8625 === (37))){
var inst_8492 = (state_8624[(11)]);
var inst_8592 = (state_8624[(23)]);
var inst_8583 = (state_8624[(25)]);
var inst_8592__$1 = cljs.core.first(inst_8583);
var inst_8593 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_8592__$1,inst_8492,done);
var state_8624__$1 = (function (){var statearr_8700 = state_8624;
(statearr_8700[(23)] = inst_8592__$1);

return statearr_8700;
})();
if(cljs.core.truth_(inst_8593)){
var statearr_8701_8760 = state_8624__$1;
(statearr_8701_8760[(1)] = (39));

} else {
var statearr_8702_8761 = state_8624__$1;
(statearr_8702_8761[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8625 === (8))){
var inst_8503 = (state_8624[(14)]);
var inst_8504 = (state_8624[(15)]);
var inst_8506 = (inst_8504 < inst_8503);
var inst_8507 = inst_8506;
var state_8624__$1 = state_8624;
if(cljs.core.truth_(inst_8507)){
var statearr_8703_8762 = state_8624__$1;
(statearr_8703_8762[(1)] = (10));

} else {
var statearr_8704_8763 = state_8624__$1;
(statearr_8704_8763[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7888__auto___8709,cs,m,dchan,dctr,done))
;
return ((function (switch__7785__auto__,c__7888__auto___8709,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__7786__auto__ = null;
var cljs$core$async$mult_$_state_machine__7786__auto____0 = (function (){
var statearr_8705 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8705[(0)] = cljs$core$async$mult_$_state_machine__7786__auto__);

(statearr_8705[(1)] = (1));

return statearr_8705;
});
var cljs$core$async$mult_$_state_machine__7786__auto____1 = (function (state_8624){
while(true){
var ret_value__7787__auto__ = (function (){try{while(true){
var result__7788__auto__ = switch__7785__auto__(state_8624);
if(cljs.core.keyword_identical_QMARK_(result__7788__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7788__auto__;
}
break;
}
}catch (e8706){if((e8706 instanceof Object)){
var ex__7789__auto__ = e8706;
var statearr_8707_8764 = state_8624;
(statearr_8707_8764[(5)] = ex__7789__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_8624);

return cljs.core.cst$kw$recur;
} else {
throw e8706;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7787__auto__,cljs.core.cst$kw$recur)){
var G__8765 = state_8624;
state_8624 = G__8765;
continue;
} else {
return ret_value__7787__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__7786__auto__ = function(state_8624){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__7786__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__7786__auto____1.call(this,state_8624);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__7786__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__7786__auto____0;
cljs$core$async$mult_$_state_machine__7786__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__7786__auto____1;
return cljs$core$async$mult_$_state_machine__7786__auto__;
})()
;})(switch__7785__auto__,c__7888__auto___8709,cs,m,dchan,dctr,done))
})();
var state__7890__auto__ = (function (){var statearr_8708 = (f__7889__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7889__auto__.cljs$core$IFn$_invoke$arity$0() : f__7889__auto__.call(null));
(statearr_8708[(6)] = c__7888__auto___8709);

return statearr_8708;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7890__auto__);
});})(c__7888__auto___8709,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__8767 = arguments.length;
switch (G__8767) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4244__auto__.call(null,m,ch));
} else {
var m__4244__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4244__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4244__auto__.call(null,m,ch));
} else {
var m__4244__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4244__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4244__auto__.call(null,m));
} else {
var m__4244__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__4244__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4244__auto__.call(null,m,state_map));
} else {
var m__4244__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4244__auto____$1.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4244__auto__.call(null,m,mode));
} else {
var m__4244__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4244__auto____$1.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8779 = arguments.length;
var i__4532__auto___8780 = (0);
while(true){
if((i__4532__auto___8780 < len__4531__auto___8779)){
args__4534__auto__.push((arguments[i__4532__auto___8780]));

var G__8781 = (i__4532__auto___8780 + (1));
i__4532__auto___8780 = G__8781;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__8773){
var map__8774 = p__8773;
var map__8774__$1 = ((((!((map__8774 == null)))?(((((map__8774.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8774.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8774):map__8774);
var opts = map__8774__$1;
var statearr_8776_8782 = state;
(statearr_8776_8782[(1)] = cont_block);


var temp__5537__auto__ = cljs.core.async.do_alts(((function (map__8774,map__8774__$1,opts){
return (function (val){
var statearr_8777_8783 = state;
(statearr_8777_8783[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__8774,map__8774__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5537__auto__)){
var cb = temp__5537__auto__;
var statearr_8778_8784 = state;
(statearr_8778_8784[(2)] = cljs.core.deref(cb));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq8769){
var G__8770 = cljs.core.first(seq8769);
var seq8769__$1 = cljs.core.next(seq8769);
var G__8771 = cljs.core.first(seq8769__$1);
var seq8769__$2 = cljs.core.next(seq8769__$1);
var G__8772 = cljs.core.first(seq8769__$2);
var seq8769__$3 = cljs.core.next(seq8769__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8770,G__8771,G__8772,seq8769__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pause,null,cljs.core.cst$kw$mute,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.cst$kw$solo);
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$mute);
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(cljs.core.cst$kw$solo,chs);
var pauses = pick(cljs.core.cst$kw$pause,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$solos,solos,cljs.core.cst$kw$mutes,pick(cljs.core.cst$kw$mute,chs),cljs.core.cst$kw$reads,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.cst$kw$pause)) && (!(cljs.core.empty_QMARK_(solos)))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async8785 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8785 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta8786){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta8786 = meta8786;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async8785.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_8787,meta8786__$1){
var self__ = this;
var _8787__$1 = this;
return (new cljs.core.async.t_cljs$core$async8785(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta8786__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async8785.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_8787){
var self__ = this;
var _8787__$1 = this;
return self__.meta8786;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async8785.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8785.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async8785.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8785.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async8785.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async8785.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async8785.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async8785.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async8785.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$out,cljs.core.cst$sym$cs,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$change,cljs.core.cst$sym$changed,cljs.core.cst$sym$pick,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$meta8786], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async8785.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async8785.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8785";

cljs.core.async.t_cljs$core$async8785.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async8785");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async8785.
 */
cljs.core.async.__GT_t_cljs$core$async8785 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async8785(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta8786){
return (new cljs.core.async.t_cljs$core$async8785(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta8786));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async8785(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__7888__auto___8949 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7888__auto___8949,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__7889__auto__ = (function (){var switch__7785__auto__ = ((function (c__7888__auto___8949,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_8889){
var state_val_8890 = (state_8889[(1)]);
if((state_val_8890 === (7))){
var inst_8804 = (state_8889[(2)]);
var state_8889__$1 = state_8889;
var statearr_8891_8950 = state_8889__$1;
(statearr_8891_8950[(2)] = inst_8804);

(statearr_8891_8950[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8890 === (20))){
var inst_8816 = (state_8889[(7)]);
var state_8889__$1 = state_8889;
var statearr_8892_8951 = state_8889__$1;
(statearr_8892_8951[(2)] = inst_8816);

(statearr_8892_8951[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8890 === (27))){
var state_8889__$1 = state_8889;
var statearr_8893_8952 = state_8889__$1;
(statearr_8893_8952[(2)] = null);

(statearr_8893_8952[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8890 === (1))){
var inst_8791 = (state_8889[(8)]);
var inst_8791__$1 = calc_state();
var inst_8793 = (inst_8791__$1 == null);
var inst_8794 = cljs.core.not(inst_8793);
var state_8889__$1 = (function (){var statearr_8894 = state_8889;
(statearr_8894[(8)] = inst_8791__$1);

return statearr_8894;
})();
if(inst_8794){
var statearr_8895_8953 = state_8889__$1;
(statearr_8895_8953[(1)] = (2));

} else {
var statearr_8896_8954 = state_8889__$1;
(statearr_8896_8954[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8890 === (24))){
var inst_8849 = (state_8889[(9)]);
var inst_8863 = (state_8889[(10)]);
var inst_8840 = (state_8889[(11)]);
var inst_8863__$1 = (inst_8840.cljs$core$IFn$_invoke$arity$1 ? inst_8840.cljs$core$IFn$_invoke$arity$1(inst_8849) : inst_8840.call(null,inst_8849));
var state_8889__$1 = (function (){var statearr_8897 = state_8889;
(statearr_8897[(10)] = inst_8863__$1);

return statearr_8897;
})();
if(cljs.core.truth_(inst_8863__$1)){
var statearr_8898_8955 = state_8889__$1;
(statearr_8898_8955[(1)] = (29));

} else {
var statearr_8899_8956 = state_8889__$1;
(statearr_8899_8956[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8890 === (4))){
var inst_8807 = (state_8889[(2)]);
var state_8889__$1 = state_8889;
if(cljs.core.truth_(inst_8807)){
var statearr_8900_8957 = state_8889__$1;
(statearr_8900_8957[(1)] = (8));

} else {
var statearr_8901_8958 = state_8889__$1;
(statearr_8901_8958[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8890 === (15))){
var inst_8834 = (state_8889[(2)]);
var state_8889__$1 = state_8889;
if(cljs.core.truth_(inst_8834)){
var statearr_8902_8959 = state_8889__$1;
(statearr_8902_8959[(1)] = (19));

} else {
var statearr_8903_8960 = state_8889__$1;
(statearr_8903_8960[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8890 === (21))){
var inst_8839 = (state_8889[(12)]);
var inst_8839__$1 = (state_8889[(2)]);
var inst_8840 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_8839__$1,cljs.core.cst$kw$solos);
var inst_8841 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_8839__$1,cljs.core.cst$kw$mutes);
var inst_8842 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_8839__$1,cljs.core.cst$kw$reads);
var state_8889__$1 = (function (){var statearr_8904 = state_8889;
(statearr_8904[(13)] = inst_8841);

(statearr_8904[(12)] = inst_8839__$1);

(statearr_8904[(11)] = inst_8840);

return statearr_8904;
})();
return cljs.core.async.ioc_alts_BANG_(state_8889__$1,(22),inst_8842);
} else {
if((state_val_8890 === (31))){
var inst_8871 = (state_8889[(2)]);
var state_8889__$1 = state_8889;
if(cljs.core.truth_(inst_8871)){
var statearr_8905_8961 = state_8889__$1;
(statearr_8905_8961[(1)] = (32));

} else {
var statearr_8906_8962 = state_8889__$1;
(statearr_8906_8962[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8890 === (32))){
var inst_8848 = (state_8889[(14)]);
var state_8889__$1 = state_8889;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_8889__$1,(35),out,inst_8848);
} else {
if((state_val_8890 === (33))){
var inst_8839 = (state_8889[(12)]);
var inst_8816 = inst_8839;
var state_8889__$1 = (function (){var statearr_8907 = state_8889;
(statearr_8907[(7)] = inst_8816);

return statearr_8907;
})();
var statearr_8908_8963 = state_8889__$1;
(statearr_8908_8963[(2)] = null);

(statearr_8908_8963[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8890 === (13))){
var inst_8816 = (state_8889[(7)]);
var inst_8823 = inst_8816.cljs$lang$protocol_mask$partition0$;
var inst_8824 = (inst_8823 & (64));
var inst_8825 = inst_8816.cljs$core$ISeq$;
var inst_8826 = (cljs.core.PROTOCOL_SENTINEL === inst_8825);
var inst_8827 = ((inst_8824) || (inst_8826));
var state_8889__$1 = state_8889;
if(cljs.core.truth_(inst_8827)){
var statearr_8909_8964 = state_8889__$1;
(statearr_8909_8964[(1)] = (16));

} else {
var statearr_8910_8965 = state_8889__$1;
(statearr_8910_8965[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8890 === (22))){
var inst_8849 = (state_8889[(9)]);
var inst_8848 = (state_8889[(14)]);
var inst_8847 = (state_8889[(2)]);
var inst_8848__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_8847,(0),null);
var inst_8849__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_8847,(1),null);
var inst_8850 = (inst_8848__$1 == null);
var inst_8851 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_8849__$1,change);
var inst_8852 = ((inst_8850) || (inst_8851));
var state_8889__$1 = (function (){var statearr_8911 = state_8889;
(statearr_8911[(9)] = inst_8849__$1);

(statearr_8911[(14)] = inst_8848__$1);

return statearr_8911;
})();
if(cljs.core.truth_(inst_8852)){
var statearr_8912_8966 = state_8889__$1;
(statearr_8912_8966[(1)] = (23));

} else {
var statearr_8913_8967 = state_8889__$1;
(statearr_8913_8967[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8890 === (36))){
var inst_8839 = (state_8889[(12)]);
var inst_8816 = inst_8839;
var state_8889__$1 = (function (){var statearr_8914 = state_8889;
(statearr_8914[(7)] = inst_8816);

return statearr_8914;
})();
var statearr_8915_8968 = state_8889__$1;
(statearr_8915_8968[(2)] = null);

(statearr_8915_8968[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8890 === (29))){
var inst_8863 = (state_8889[(10)]);
var state_8889__$1 = state_8889;
var statearr_8916_8969 = state_8889__$1;
(statearr_8916_8969[(2)] = inst_8863);

(statearr_8916_8969[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8890 === (6))){
var state_8889__$1 = state_8889;
var statearr_8917_8970 = state_8889__$1;
(statearr_8917_8970[(2)] = false);

(statearr_8917_8970[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8890 === (28))){
var inst_8859 = (state_8889[(2)]);
var inst_8860 = calc_state();
var inst_8816 = inst_8860;
var state_8889__$1 = (function (){var statearr_8918 = state_8889;
(statearr_8918[(15)] = inst_8859);

(statearr_8918[(7)] = inst_8816);

return statearr_8918;
})();
var statearr_8919_8971 = state_8889__$1;
(statearr_8919_8971[(2)] = null);

(statearr_8919_8971[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8890 === (25))){
var inst_8885 = (state_8889[(2)]);
var state_8889__$1 = state_8889;
var statearr_8920_8972 = state_8889__$1;
(statearr_8920_8972[(2)] = inst_8885);

(statearr_8920_8972[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8890 === (34))){
var inst_8883 = (state_8889[(2)]);
var state_8889__$1 = state_8889;
var statearr_8921_8973 = state_8889__$1;
(statearr_8921_8973[(2)] = inst_8883);

(statearr_8921_8973[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8890 === (17))){
var state_8889__$1 = state_8889;
var statearr_8922_8974 = state_8889__$1;
(statearr_8922_8974[(2)] = false);

(statearr_8922_8974[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8890 === (3))){
var state_8889__$1 = state_8889;
var statearr_8923_8975 = state_8889__$1;
(statearr_8923_8975[(2)] = false);

(statearr_8923_8975[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8890 === (12))){
var inst_8887 = (state_8889[(2)]);
var state_8889__$1 = state_8889;
return cljs.core.async.impl.ioc_helpers.return_chan(state_8889__$1,inst_8887);
} else {
if((state_val_8890 === (2))){
var inst_8791 = (state_8889[(8)]);
var inst_8796 = inst_8791.cljs$lang$protocol_mask$partition0$;
var inst_8797 = (inst_8796 & (64));
var inst_8798 = inst_8791.cljs$core$ISeq$;
var inst_8799 = (cljs.core.PROTOCOL_SENTINEL === inst_8798);
var inst_8800 = ((inst_8797) || (inst_8799));
var state_8889__$1 = state_8889;
if(cljs.core.truth_(inst_8800)){
var statearr_8924_8976 = state_8889__$1;
(statearr_8924_8976[(1)] = (5));

} else {
var statearr_8925_8977 = state_8889__$1;
(statearr_8925_8977[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8890 === (23))){
var inst_8848 = (state_8889[(14)]);
var inst_8854 = (inst_8848 == null);
var state_8889__$1 = state_8889;
if(cljs.core.truth_(inst_8854)){
var statearr_8926_8978 = state_8889__$1;
(statearr_8926_8978[(1)] = (26));

} else {
var statearr_8927_8979 = state_8889__$1;
(statearr_8927_8979[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8890 === (35))){
var inst_8874 = (state_8889[(2)]);
var state_8889__$1 = state_8889;
if(cljs.core.truth_(inst_8874)){
var statearr_8928_8980 = state_8889__$1;
(statearr_8928_8980[(1)] = (36));

} else {
var statearr_8929_8981 = state_8889__$1;
(statearr_8929_8981[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8890 === (19))){
var inst_8816 = (state_8889[(7)]);
var inst_8836 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_8816);
var state_8889__$1 = state_8889;
var statearr_8930_8982 = state_8889__$1;
(statearr_8930_8982[(2)] = inst_8836);

(statearr_8930_8982[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8890 === (11))){
var inst_8816 = (state_8889[(7)]);
var inst_8820 = (inst_8816 == null);
var inst_8821 = cljs.core.not(inst_8820);
var state_8889__$1 = state_8889;
if(inst_8821){
var statearr_8931_8983 = state_8889__$1;
(statearr_8931_8983[(1)] = (13));

} else {
var statearr_8932_8984 = state_8889__$1;
(statearr_8932_8984[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8890 === (9))){
var inst_8791 = (state_8889[(8)]);
var state_8889__$1 = state_8889;
var statearr_8933_8985 = state_8889__$1;
(statearr_8933_8985[(2)] = inst_8791);

(statearr_8933_8985[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8890 === (5))){
var state_8889__$1 = state_8889;
var statearr_8934_8986 = state_8889__$1;
(statearr_8934_8986[(2)] = true);

(statearr_8934_8986[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8890 === (14))){
var state_8889__$1 = state_8889;
var statearr_8935_8987 = state_8889__$1;
(statearr_8935_8987[(2)] = false);

(statearr_8935_8987[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8890 === (26))){
var inst_8849 = (state_8889[(9)]);
var inst_8856 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_8849);
var state_8889__$1 = state_8889;
var statearr_8936_8988 = state_8889__$1;
(statearr_8936_8988[(2)] = inst_8856);

(statearr_8936_8988[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8890 === (16))){
var state_8889__$1 = state_8889;
var statearr_8937_8989 = state_8889__$1;
(statearr_8937_8989[(2)] = true);

(statearr_8937_8989[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8890 === (38))){
var inst_8879 = (state_8889[(2)]);
var state_8889__$1 = state_8889;
var statearr_8938_8990 = state_8889__$1;
(statearr_8938_8990[(2)] = inst_8879);

(statearr_8938_8990[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8890 === (30))){
var inst_8849 = (state_8889[(9)]);
var inst_8841 = (state_8889[(13)]);
var inst_8840 = (state_8889[(11)]);
var inst_8866 = cljs.core.empty_QMARK_(inst_8840);
var inst_8867 = (inst_8841.cljs$core$IFn$_invoke$arity$1 ? inst_8841.cljs$core$IFn$_invoke$arity$1(inst_8849) : inst_8841.call(null,inst_8849));
var inst_8868 = cljs.core.not(inst_8867);
var inst_8869 = ((inst_8866) && (inst_8868));
var state_8889__$1 = state_8889;
var statearr_8939_8991 = state_8889__$1;
(statearr_8939_8991[(2)] = inst_8869);

(statearr_8939_8991[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8890 === (10))){
var inst_8791 = (state_8889[(8)]);
var inst_8812 = (state_8889[(2)]);
var inst_8813 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_8812,cljs.core.cst$kw$solos);
var inst_8814 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_8812,cljs.core.cst$kw$mutes);
var inst_8815 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_8812,cljs.core.cst$kw$reads);
var inst_8816 = inst_8791;
var state_8889__$1 = (function (){var statearr_8940 = state_8889;
(statearr_8940[(16)] = inst_8815);

(statearr_8940[(17)] = inst_8814);

(statearr_8940[(7)] = inst_8816);

(statearr_8940[(18)] = inst_8813);

return statearr_8940;
})();
var statearr_8941_8992 = state_8889__$1;
(statearr_8941_8992[(2)] = null);

(statearr_8941_8992[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8890 === (18))){
var inst_8831 = (state_8889[(2)]);
var state_8889__$1 = state_8889;
var statearr_8942_8993 = state_8889__$1;
(statearr_8942_8993[(2)] = inst_8831);

(statearr_8942_8993[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8890 === (37))){
var state_8889__$1 = state_8889;
var statearr_8943_8994 = state_8889__$1;
(statearr_8943_8994[(2)] = null);

(statearr_8943_8994[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8890 === (8))){
var inst_8791 = (state_8889[(8)]);
var inst_8809 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_8791);
var state_8889__$1 = state_8889;
var statearr_8944_8995 = state_8889__$1;
(statearr_8944_8995[(2)] = inst_8809);

(statearr_8944_8995[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7888__auto___8949,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__7785__auto__,c__7888__auto___8949,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__7786__auto__ = null;
var cljs$core$async$mix_$_state_machine__7786__auto____0 = (function (){
var statearr_8945 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8945[(0)] = cljs$core$async$mix_$_state_machine__7786__auto__);

(statearr_8945[(1)] = (1));

return statearr_8945;
});
var cljs$core$async$mix_$_state_machine__7786__auto____1 = (function (state_8889){
while(true){
var ret_value__7787__auto__ = (function (){try{while(true){
var result__7788__auto__ = switch__7785__auto__(state_8889);
if(cljs.core.keyword_identical_QMARK_(result__7788__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7788__auto__;
}
break;
}
}catch (e8946){if((e8946 instanceof Object)){
var ex__7789__auto__ = e8946;
var statearr_8947_8996 = state_8889;
(statearr_8947_8996[(5)] = ex__7789__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_8889);

return cljs.core.cst$kw$recur;
} else {
throw e8946;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7787__auto__,cljs.core.cst$kw$recur)){
var G__8997 = state_8889;
state_8889 = G__8997;
continue;
} else {
return ret_value__7787__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__7786__auto__ = function(state_8889){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__7786__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__7786__auto____1.call(this,state_8889);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__7786__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__7786__auto____0;
cljs$core$async$mix_$_state_machine__7786__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__7786__auto____1;
return cljs$core$async$mix_$_state_machine__7786__auto__;
})()
;})(switch__7785__auto__,c__7888__auto___8949,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__7890__auto__ = (function (){var statearr_8948 = (f__7889__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7889__auto__.cljs$core$IFn$_invoke$arity$0() : f__7889__auto__.call(null));
(statearr_8948[(6)] = c__7888__auto___8949);

return statearr_8948;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7890__auto__);
});})(c__7888__auto___8949,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4244__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4244__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4244__auto____$1.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4244__auto__.call(null,p,v,ch));
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4244__auto____$1.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__8999 = arguments.length;
switch (G__8999) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4244__auto__.call(null,p));
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(p) : m__4244__auto____$1.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4244__auto__.call(null,p,v));
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(p,v) : m__4244__auto____$1.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__9003 = arguments.length;
switch (G__9003) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3949__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__3949__auto__,mults){
return (function (p1__9001_SHARP_){
if(cljs.core.truth_((p1__9001_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__9001_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__9001_SHARP_.call(null,topic)))){
return p1__9001_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__9001_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__3949__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async9004 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9004 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta9005){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta9005 = meta9005;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async9004.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_9006,meta9005__$1){
var self__ = this;
var _9006__$1 = this;
return (new cljs.core.async.t_cljs$core$async9004(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta9005__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async9004.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_9006){
var self__ = this;
var _9006__$1 = this;
return self__.meta9005;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async9004.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async9004.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async9004.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async9004.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async9004.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5537__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5537__auto__)){
var m = temp__5537__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async9004.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async9004.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async9004.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta9005], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async9004.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9004.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9004";

cljs.core.async.t_cljs$core$async9004.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async9004");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async9004.
 */
cljs.core.async.__GT_t_cljs$core$async9004 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async9004(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta9005){
return (new cljs.core.async.t_cljs$core$async9004(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta9005));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async9004(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__7888__auto___9124 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7888__auto___9124,mults,ensure_mult,p){
return (function (){
var f__7889__auto__ = (function (){var switch__7785__auto__ = ((function (c__7888__auto___9124,mults,ensure_mult,p){
return (function (state_9078){
var state_val_9079 = (state_9078[(1)]);
if((state_val_9079 === (7))){
var inst_9074 = (state_9078[(2)]);
var state_9078__$1 = state_9078;
var statearr_9080_9125 = state_9078__$1;
(statearr_9080_9125[(2)] = inst_9074);

(statearr_9080_9125[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9079 === (20))){
var state_9078__$1 = state_9078;
var statearr_9081_9126 = state_9078__$1;
(statearr_9081_9126[(2)] = null);

(statearr_9081_9126[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9079 === (1))){
var state_9078__$1 = state_9078;
var statearr_9082_9127 = state_9078__$1;
(statearr_9082_9127[(2)] = null);

(statearr_9082_9127[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9079 === (24))){
var inst_9057 = (state_9078[(7)]);
var inst_9066 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_9057);
var state_9078__$1 = state_9078;
var statearr_9083_9128 = state_9078__$1;
(statearr_9083_9128[(2)] = inst_9066);

(statearr_9083_9128[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9079 === (4))){
var inst_9009 = (state_9078[(8)]);
var inst_9009__$1 = (state_9078[(2)]);
var inst_9010 = (inst_9009__$1 == null);
var state_9078__$1 = (function (){var statearr_9084 = state_9078;
(statearr_9084[(8)] = inst_9009__$1);

return statearr_9084;
})();
if(cljs.core.truth_(inst_9010)){
var statearr_9085_9129 = state_9078__$1;
(statearr_9085_9129[(1)] = (5));

} else {
var statearr_9086_9130 = state_9078__$1;
(statearr_9086_9130[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9079 === (15))){
var inst_9051 = (state_9078[(2)]);
var state_9078__$1 = state_9078;
var statearr_9087_9131 = state_9078__$1;
(statearr_9087_9131[(2)] = inst_9051);

(statearr_9087_9131[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9079 === (21))){
var inst_9071 = (state_9078[(2)]);
var state_9078__$1 = (function (){var statearr_9088 = state_9078;
(statearr_9088[(9)] = inst_9071);

return statearr_9088;
})();
var statearr_9089_9132 = state_9078__$1;
(statearr_9089_9132[(2)] = null);

(statearr_9089_9132[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9079 === (13))){
var inst_9033 = (state_9078[(10)]);
var inst_9035 = cljs.core.chunked_seq_QMARK_(inst_9033);
var state_9078__$1 = state_9078;
if(inst_9035){
var statearr_9090_9133 = state_9078__$1;
(statearr_9090_9133[(1)] = (16));

} else {
var statearr_9091_9134 = state_9078__$1;
(statearr_9091_9134[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9079 === (22))){
var inst_9063 = (state_9078[(2)]);
var state_9078__$1 = state_9078;
if(cljs.core.truth_(inst_9063)){
var statearr_9092_9135 = state_9078__$1;
(statearr_9092_9135[(1)] = (23));

} else {
var statearr_9093_9136 = state_9078__$1;
(statearr_9093_9136[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9079 === (6))){
var inst_9057 = (state_9078[(7)]);
var inst_9009 = (state_9078[(8)]);
var inst_9059 = (state_9078[(11)]);
var inst_9057__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_9009) : topic_fn.call(null,inst_9009));
var inst_9058 = cljs.core.deref(mults);
var inst_9059__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_9058,inst_9057__$1);
var state_9078__$1 = (function (){var statearr_9094 = state_9078;
(statearr_9094[(7)] = inst_9057__$1);

(statearr_9094[(11)] = inst_9059__$1);

return statearr_9094;
})();
if(cljs.core.truth_(inst_9059__$1)){
var statearr_9095_9137 = state_9078__$1;
(statearr_9095_9137[(1)] = (19));

} else {
var statearr_9096_9138 = state_9078__$1;
(statearr_9096_9138[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9079 === (25))){
var inst_9068 = (state_9078[(2)]);
var state_9078__$1 = state_9078;
var statearr_9097_9139 = state_9078__$1;
(statearr_9097_9139[(2)] = inst_9068);

(statearr_9097_9139[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9079 === (17))){
var inst_9033 = (state_9078[(10)]);
var inst_9042 = cljs.core.first(inst_9033);
var inst_9043 = cljs.core.async.muxch_STAR_(inst_9042);
var inst_9044 = cljs.core.async.close_BANG_(inst_9043);
var inst_9045 = cljs.core.next(inst_9033);
var inst_9019 = inst_9045;
var inst_9020 = null;
var inst_9021 = (0);
var inst_9022 = (0);
var state_9078__$1 = (function (){var statearr_9098 = state_9078;
(statearr_9098[(12)] = inst_9044);

(statearr_9098[(13)] = inst_9019);

(statearr_9098[(14)] = inst_9022);

(statearr_9098[(15)] = inst_9020);

(statearr_9098[(16)] = inst_9021);

return statearr_9098;
})();
var statearr_9099_9140 = state_9078__$1;
(statearr_9099_9140[(2)] = null);

(statearr_9099_9140[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9079 === (3))){
var inst_9076 = (state_9078[(2)]);
var state_9078__$1 = state_9078;
return cljs.core.async.impl.ioc_helpers.return_chan(state_9078__$1,inst_9076);
} else {
if((state_val_9079 === (12))){
var inst_9053 = (state_9078[(2)]);
var state_9078__$1 = state_9078;
var statearr_9100_9141 = state_9078__$1;
(statearr_9100_9141[(2)] = inst_9053);

(statearr_9100_9141[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9079 === (2))){
var state_9078__$1 = state_9078;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9078__$1,(4),ch);
} else {
if((state_val_9079 === (23))){
var state_9078__$1 = state_9078;
var statearr_9101_9142 = state_9078__$1;
(statearr_9101_9142[(2)] = null);

(statearr_9101_9142[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9079 === (19))){
var inst_9009 = (state_9078[(8)]);
var inst_9059 = (state_9078[(11)]);
var inst_9061 = cljs.core.async.muxch_STAR_(inst_9059);
var state_9078__$1 = state_9078;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_9078__$1,(22),inst_9061,inst_9009);
} else {
if((state_val_9079 === (11))){
var inst_9019 = (state_9078[(13)]);
var inst_9033 = (state_9078[(10)]);
var inst_9033__$1 = cljs.core.seq(inst_9019);
var state_9078__$1 = (function (){var statearr_9102 = state_9078;
(statearr_9102[(10)] = inst_9033__$1);

return statearr_9102;
})();
if(inst_9033__$1){
var statearr_9103_9143 = state_9078__$1;
(statearr_9103_9143[(1)] = (13));

} else {
var statearr_9104_9144 = state_9078__$1;
(statearr_9104_9144[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9079 === (9))){
var inst_9055 = (state_9078[(2)]);
var state_9078__$1 = state_9078;
var statearr_9105_9145 = state_9078__$1;
(statearr_9105_9145[(2)] = inst_9055);

(statearr_9105_9145[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9079 === (5))){
var inst_9016 = cljs.core.deref(mults);
var inst_9017 = cljs.core.vals(inst_9016);
var inst_9018 = cljs.core.seq(inst_9017);
var inst_9019 = inst_9018;
var inst_9020 = null;
var inst_9021 = (0);
var inst_9022 = (0);
var state_9078__$1 = (function (){var statearr_9106 = state_9078;
(statearr_9106[(13)] = inst_9019);

(statearr_9106[(14)] = inst_9022);

(statearr_9106[(15)] = inst_9020);

(statearr_9106[(16)] = inst_9021);

return statearr_9106;
})();
var statearr_9107_9146 = state_9078__$1;
(statearr_9107_9146[(2)] = null);

(statearr_9107_9146[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9079 === (14))){
var state_9078__$1 = state_9078;
var statearr_9111_9147 = state_9078__$1;
(statearr_9111_9147[(2)] = null);

(statearr_9111_9147[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9079 === (16))){
var inst_9033 = (state_9078[(10)]);
var inst_9037 = cljs.core.chunk_first(inst_9033);
var inst_9038 = cljs.core.chunk_rest(inst_9033);
var inst_9039 = cljs.core.count(inst_9037);
var inst_9019 = inst_9038;
var inst_9020 = inst_9037;
var inst_9021 = inst_9039;
var inst_9022 = (0);
var state_9078__$1 = (function (){var statearr_9112 = state_9078;
(statearr_9112[(13)] = inst_9019);

(statearr_9112[(14)] = inst_9022);

(statearr_9112[(15)] = inst_9020);

(statearr_9112[(16)] = inst_9021);

return statearr_9112;
})();
var statearr_9113_9148 = state_9078__$1;
(statearr_9113_9148[(2)] = null);

(statearr_9113_9148[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9079 === (10))){
var inst_9019 = (state_9078[(13)]);
var inst_9022 = (state_9078[(14)]);
var inst_9020 = (state_9078[(15)]);
var inst_9021 = (state_9078[(16)]);
var inst_9027 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_9020,inst_9022);
var inst_9028 = cljs.core.async.muxch_STAR_(inst_9027);
var inst_9029 = cljs.core.async.close_BANG_(inst_9028);
var inst_9030 = (inst_9022 + (1));
var tmp9108 = inst_9019;
var tmp9109 = inst_9020;
var tmp9110 = inst_9021;
var inst_9019__$1 = tmp9108;
var inst_9020__$1 = tmp9109;
var inst_9021__$1 = tmp9110;
var inst_9022__$1 = inst_9030;
var state_9078__$1 = (function (){var statearr_9114 = state_9078;
(statearr_9114[(17)] = inst_9029);

(statearr_9114[(13)] = inst_9019__$1);

(statearr_9114[(14)] = inst_9022__$1);

(statearr_9114[(15)] = inst_9020__$1);

(statearr_9114[(16)] = inst_9021__$1);

return statearr_9114;
})();
var statearr_9115_9149 = state_9078__$1;
(statearr_9115_9149[(2)] = null);

(statearr_9115_9149[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9079 === (18))){
var inst_9048 = (state_9078[(2)]);
var state_9078__$1 = state_9078;
var statearr_9116_9150 = state_9078__$1;
(statearr_9116_9150[(2)] = inst_9048);

(statearr_9116_9150[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9079 === (8))){
var inst_9022 = (state_9078[(14)]);
var inst_9021 = (state_9078[(16)]);
var inst_9024 = (inst_9022 < inst_9021);
var inst_9025 = inst_9024;
var state_9078__$1 = state_9078;
if(cljs.core.truth_(inst_9025)){
var statearr_9117_9151 = state_9078__$1;
(statearr_9117_9151[(1)] = (10));

} else {
var statearr_9118_9152 = state_9078__$1;
(statearr_9118_9152[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7888__auto___9124,mults,ensure_mult,p))
;
return ((function (switch__7785__auto__,c__7888__auto___9124,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__7786__auto__ = null;
var cljs$core$async$state_machine__7786__auto____0 = (function (){
var statearr_9119 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9119[(0)] = cljs$core$async$state_machine__7786__auto__);

(statearr_9119[(1)] = (1));

return statearr_9119;
});
var cljs$core$async$state_machine__7786__auto____1 = (function (state_9078){
while(true){
var ret_value__7787__auto__ = (function (){try{while(true){
var result__7788__auto__ = switch__7785__auto__(state_9078);
if(cljs.core.keyword_identical_QMARK_(result__7788__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7788__auto__;
}
break;
}
}catch (e9120){if((e9120 instanceof Object)){
var ex__7789__auto__ = e9120;
var statearr_9121_9153 = state_9078;
(statearr_9121_9153[(5)] = ex__7789__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_9078);

return cljs.core.cst$kw$recur;
} else {
throw e9120;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7787__auto__,cljs.core.cst$kw$recur)){
var G__9154 = state_9078;
state_9078 = G__9154;
continue;
} else {
return ret_value__7787__auto__;
}
break;
}
});
cljs$core$async$state_machine__7786__auto__ = function(state_9078){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7786__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7786__auto____1.call(this,state_9078);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7786__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7786__auto____0;
cljs$core$async$state_machine__7786__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7786__auto____1;
return cljs$core$async$state_machine__7786__auto__;
})()
;})(switch__7785__auto__,c__7888__auto___9124,mults,ensure_mult,p))
})();
var state__7890__auto__ = (function (){var statearr_9122 = (f__7889__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7889__auto__.cljs$core$IFn$_invoke$arity$0() : f__7889__auto__.call(null));
(statearr_9122[(6)] = c__7888__auto___9124);

return statearr_9122;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7890__auto__);
});})(c__7888__auto___9124,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__9156 = arguments.length;
switch (G__9156) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__9159 = arguments.length;
switch (G__9159) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__9162 = arguments.length;
switch (G__9162) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__7888__auto___9229 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7888__auto___9229,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__7889__auto__ = (function (){var switch__7785__auto__ = ((function (c__7888__auto___9229,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_9201){
var state_val_9202 = (state_9201[(1)]);
if((state_val_9202 === (7))){
var state_9201__$1 = state_9201;
var statearr_9203_9230 = state_9201__$1;
(statearr_9203_9230[(2)] = null);

(statearr_9203_9230[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9202 === (1))){
var state_9201__$1 = state_9201;
var statearr_9204_9231 = state_9201__$1;
(statearr_9204_9231[(2)] = null);

(statearr_9204_9231[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9202 === (4))){
var inst_9165 = (state_9201[(7)]);
var inst_9167 = (inst_9165 < cnt);
var state_9201__$1 = state_9201;
if(cljs.core.truth_(inst_9167)){
var statearr_9205_9232 = state_9201__$1;
(statearr_9205_9232[(1)] = (6));

} else {
var statearr_9206_9233 = state_9201__$1;
(statearr_9206_9233[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9202 === (15))){
var inst_9197 = (state_9201[(2)]);
var state_9201__$1 = state_9201;
var statearr_9207_9234 = state_9201__$1;
(statearr_9207_9234[(2)] = inst_9197);

(statearr_9207_9234[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9202 === (13))){
var inst_9190 = cljs.core.async.close_BANG_(out);
var state_9201__$1 = state_9201;
var statearr_9208_9235 = state_9201__$1;
(statearr_9208_9235[(2)] = inst_9190);

(statearr_9208_9235[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9202 === (6))){
var state_9201__$1 = state_9201;
var statearr_9209_9236 = state_9201__$1;
(statearr_9209_9236[(2)] = null);

(statearr_9209_9236[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9202 === (3))){
var inst_9199 = (state_9201[(2)]);
var state_9201__$1 = state_9201;
return cljs.core.async.impl.ioc_helpers.return_chan(state_9201__$1,inst_9199);
} else {
if((state_val_9202 === (12))){
var inst_9187 = (state_9201[(8)]);
var inst_9187__$1 = (state_9201[(2)]);
var inst_9188 = cljs.core.some(cljs.core.nil_QMARK_,inst_9187__$1);
var state_9201__$1 = (function (){var statearr_9210 = state_9201;
(statearr_9210[(8)] = inst_9187__$1);

return statearr_9210;
})();
if(cljs.core.truth_(inst_9188)){
var statearr_9211_9237 = state_9201__$1;
(statearr_9211_9237[(1)] = (13));

} else {
var statearr_9212_9238 = state_9201__$1;
(statearr_9212_9238[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9202 === (2))){
var inst_9164 = cljs.core.reset_BANG_(dctr,cnt);
var inst_9165 = (0);
var state_9201__$1 = (function (){var statearr_9213 = state_9201;
(statearr_9213[(9)] = inst_9164);

(statearr_9213[(7)] = inst_9165);

return statearr_9213;
})();
var statearr_9214_9239 = state_9201__$1;
(statearr_9214_9239[(2)] = null);

(statearr_9214_9239[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9202 === (11))){
var inst_9165 = (state_9201[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_9201,(10),Object,null,(9));
var inst_9174 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_9165) : chs__$1.call(null,inst_9165));
var inst_9175 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_9165) : done.call(null,inst_9165));
var inst_9176 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_9174,inst_9175);
var state_9201__$1 = state_9201;
var statearr_9215_9240 = state_9201__$1;
(statearr_9215_9240[(2)] = inst_9176);


cljs.core.async.impl.ioc_helpers.process_exception(state_9201__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_9202 === (9))){
var inst_9165 = (state_9201[(7)]);
var inst_9178 = (state_9201[(2)]);
var inst_9179 = (inst_9165 + (1));
var inst_9165__$1 = inst_9179;
var state_9201__$1 = (function (){var statearr_9216 = state_9201;
(statearr_9216[(7)] = inst_9165__$1);

(statearr_9216[(10)] = inst_9178);

return statearr_9216;
})();
var statearr_9217_9241 = state_9201__$1;
(statearr_9217_9241[(2)] = null);

(statearr_9217_9241[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9202 === (5))){
var inst_9185 = (state_9201[(2)]);
var state_9201__$1 = (function (){var statearr_9218 = state_9201;
(statearr_9218[(11)] = inst_9185);

return statearr_9218;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9201__$1,(12),dchan);
} else {
if((state_val_9202 === (14))){
var inst_9187 = (state_9201[(8)]);
var inst_9192 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_9187);
var state_9201__$1 = state_9201;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_9201__$1,(16),out,inst_9192);
} else {
if((state_val_9202 === (16))){
var inst_9194 = (state_9201[(2)]);
var state_9201__$1 = (function (){var statearr_9219 = state_9201;
(statearr_9219[(12)] = inst_9194);

return statearr_9219;
})();
var statearr_9220_9242 = state_9201__$1;
(statearr_9220_9242[(2)] = null);

(statearr_9220_9242[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9202 === (10))){
var inst_9169 = (state_9201[(2)]);
var inst_9170 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_9201__$1 = (function (){var statearr_9221 = state_9201;
(statearr_9221[(13)] = inst_9169);

return statearr_9221;
})();
var statearr_9222_9243 = state_9201__$1;
(statearr_9222_9243[(2)] = inst_9170);


cljs.core.async.impl.ioc_helpers.process_exception(state_9201__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_9202 === (8))){
var inst_9183 = (state_9201[(2)]);
var state_9201__$1 = state_9201;
var statearr_9223_9244 = state_9201__$1;
(statearr_9223_9244[(2)] = inst_9183);

(statearr_9223_9244[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7888__auto___9229,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__7785__auto__,c__7888__auto___9229,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__7786__auto__ = null;
var cljs$core$async$state_machine__7786__auto____0 = (function (){
var statearr_9224 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9224[(0)] = cljs$core$async$state_machine__7786__auto__);

(statearr_9224[(1)] = (1));

return statearr_9224;
});
var cljs$core$async$state_machine__7786__auto____1 = (function (state_9201){
while(true){
var ret_value__7787__auto__ = (function (){try{while(true){
var result__7788__auto__ = switch__7785__auto__(state_9201);
if(cljs.core.keyword_identical_QMARK_(result__7788__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7788__auto__;
}
break;
}
}catch (e9225){if((e9225 instanceof Object)){
var ex__7789__auto__ = e9225;
var statearr_9226_9245 = state_9201;
(statearr_9226_9245[(5)] = ex__7789__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_9201);

return cljs.core.cst$kw$recur;
} else {
throw e9225;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7787__auto__,cljs.core.cst$kw$recur)){
var G__9246 = state_9201;
state_9201 = G__9246;
continue;
} else {
return ret_value__7787__auto__;
}
break;
}
});
cljs$core$async$state_machine__7786__auto__ = function(state_9201){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7786__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7786__auto____1.call(this,state_9201);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7786__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7786__auto____0;
cljs$core$async$state_machine__7786__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7786__auto____1;
return cljs$core$async$state_machine__7786__auto__;
})()
;})(switch__7785__auto__,c__7888__auto___9229,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__7890__auto__ = (function (){var statearr_9227 = (f__7889__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7889__auto__.cljs$core$IFn$_invoke$arity$0() : f__7889__auto__.call(null));
(statearr_9227[(6)] = c__7888__auto___9229);

return statearr_9227;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7890__auto__);
});})(c__7888__auto___9229,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__9249 = arguments.length;
switch (G__9249) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__7888__auto___9303 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7888__auto___9303,out){
return (function (){
var f__7889__auto__ = (function (){var switch__7785__auto__ = ((function (c__7888__auto___9303,out){
return (function (state_9281){
var state_val_9282 = (state_9281[(1)]);
if((state_val_9282 === (7))){
var inst_9260 = (state_9281[(7)]);
var inst_9261 = (state_9281[(8)]);
var inst_9260__$1 = (state_9281[(2)]);
var inst_9261__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_9260__$1,(0),null);
var inst_9262 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_9260__$1,(1),null);
var inst_9263 = (inst_9261__$1 == null);
var state_9281__$1 = (function (){var statearr_9283 = state_9281;
(statearr_9283[(7)] = inst_9260__$1);

(statearr_9283[(9)] = inst_9262);

(statearr_9283[(8)] = inst_9261__$1);

return statearr_9283;
})();
if(cljs.core.truth_(inst_9263)){
var statearr_9284_9304 = state_9281__$1;
(statearr_9284_9304[(1)] = (8));

} else {
var statearr_9285_9305 = state_9281__$1;
(statearr_9285_9305[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9282 === (1))){
var inst_9250 = cljs.core.vec(chs);
var inst_9251 = inst_9250;
var state_9281__$1 = (function (){var statearr_9286 = state_9281;
(statearr_9286[(10)] = inst_9251);

return statearr_9286;
})();
var statearr_9287_9306 = state_9281__$1;
(statearr_9287_9306[(2)] = null);

(statearr_9287_9306[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9282 === (4))){
var inst_9251 = (state_9281[(10)]);
var state_9281__$1 = state_9281;
return cljs.core.async.ioc_alts_BANG_(state_9281__$1,(7),inst_9251);
} else {
if((state_val_9282 === (6))){
var inst_9277 = (state_9281[(2)]);
var state_9281__$1 = state_9281;
var statearr_9288_9307 = state_9281__$1;
(statearr_9288_9307[(2)] = inst_9277);

(statearr_9288_9307[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9282 === (3))){
var inst_9279 = (state_9281[(2)]);
var state_9281__$1 = state_9281;
return cljs.core.async.impl.ioc_helpers.return_chan(state_9281__$1,inst_9279);
} else {
if((state_val_9282 === (2))){
var inst_9251 = (state_9281[(10)]);
var inst_9253 = cljs.core.count(inst_9251);
var inst_9254 = (inst_9253 > (0));
var state_9281__$1 = state_9281;
if(cljs.core.truth_(inst_9254)){
var statearr_9290_9308 = state_9281__$1;
(statearr_9290_9308[(1)] = (4));

} else {
var statearr_9291_9309 = state_9281__$1;
(statearr_9291_9309[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9282 === (11))){
var inst_9251 = (state_9281[(10)]);
var inst_9270 = (state_9281[(2)]);
var tmp9289 = inst_9251;
var inst_9251__$1 = tmp9289;
var state_9281__$1 = (function (){var statearr_9292 = state_9281;
(statearr_9292[(10)] = inst_9251__$1);

(statearr_9292[(11)] = inst_9270);

return statearr_9292;
})();
var statearr_9293_9310 = state_9281__$1;
(statearr_9293_9310[(2)] = null);

(statearr_9293_9310[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9282 === (9))){
var inst_9261 = (state_9281[(8)]);
var state_9281__$1 = state_9281;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_9281__$1,(11),out,inst_9261);
} else {
if((state_val_9282 === (5))){
var inst_9275 = cljs.core.async.close_BANG_(out);
var state_9281__$1 = state_9281;
var statearr_9294_9311 = state_9281__$1;
(statearr_9294_9311[(2)] = inst_9275);

(statearr_9294_9311[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9282 === (10))){
var inst_9273 = (state_9281[(2)]);
var state_9281__$1 = state_9281;
var statearr_9295_9312 = state_9281__$1;
(statearr_9295_9312[(2)] = inst_9273);

(statearr_9295_9312[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9282 === (8))){
var inst_9251 = (state_9281[(10)]);
var inst_9260 = (state_9281[(7)]);
var inst_9262 = (state_9281[(9)]);
var inst_9261 = (state_9281[(8)]);
var inst_9265 = (function (){var cs = inst_9251;
var vec__9256 = inst_9260;
var v = inst_9261;
var c = inst_9262;
return ((function (cs,vec__9256,v,c,inst_9251,inst_9260,inst_9262,inst_9261,state_val_9282,c__7888__auto___9303,out){
return (function (p1__9247_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__9247_SHARP_);
});
;})(cs,vec__9256,v,c,inst_9251,inst_9260,inst_9262,inst_9261,state_val_9282,c__7888__auto___9303,out))
})();
var inst_9266 = cljs.core.filterv(inst_9265,inst_9251);
var inst_9251__$1 = inst_9266;
var state_9281__$1 = (function (){var statearr_9296 = state_9281;
(statearr_9296[(10)] = inst_9251__$1);

return statearr_9296;
})();
var statearr_9297_9313 = state_9281__$1;
(statearr_9297_9313[(2)] = null);

(statearr_9297_9313[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__7888__auto___9303,out))
;
return ((function (switch__7785__auto__,c__7888__auto___9303,out){
return (function() {
var cljs$core$async$state_machine__7786__auto__ = null;
var cljs$core$async$state_machine__7786__auto____0 = (function (){
var statearr_9298 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9298[(0)] = cljs$core$async$state_machine__7786__auto__);

(statearr_9298[(1)] = (1));

return statearr_9298;
});
var cljs$core$async$state_machine__7786__auto____1 = (function (state_9281){
while(true){
var ret_value__7787__auto__ = (function (){try{while(true){
var result__7788__auto__ = switch__7785__auto__(state_9281);
if(cljs.core.keyword_identical_QMARK_(result__7788__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7788__auto__;
}
break;
}
}catch (e9299){if((e9299 instanceof Object)){
var ex__7789__auto__ = e9299;
var statearr_9300_9314 = state_9281;
(statearr_9300_9314[(5)] = ex__7789__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_9281);

return cljs.core.cst$kw$recur;
} else {
throw e9299;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7787__auto__,cljs.core.cst$kw$recur)){
var G__9315 = state_9281;
state_9281 = G__9315;
continue;
} else {
return ret_value__7787__auto__;
}
break;
}
});
cljs$core$async$state_machine__7786__auto__ = function(state_9281){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7786__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7786__auto____1.call(this,state_9281);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7786__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7786__auto____0;
cljs$core$async$state_machine__7786__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7786__auto____1;
return cljs$core$async$state_machine__7786__auto__;
})()
;})(switch__7785__auto__,c__7888__auto___9303,out))
})();
var state__7890__auto__ = (function (){var statearr_9301 = (f__7889__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7889__auto__.cljs$core$IFn$_invoke$arity$0() : f__7889__auto__.call(null));
(statearr_9301[(6)] = c__7888__auto___9303);

return statearr_9301;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7890__auto__);
});})(c__7888__auto___9303,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__9317 = arguments.length;
switch (G__9317) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__7888__auto___9362 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7888__auto___9362,out){
return (function (){
var f__7889__auto__ = (function (){var switch__7785__auto__ = ((function (c__7888__auto___9362,out){
return (function (state_9341){
var state_val_9342 = (state_9341[(1)]);
if((state_val_9342 === (7))){
var inst_9323 = (state_9341[(7)]);
var inst_9323__$1 = (state_9341[(2)]);
var inst_9324 = (inst_9323__$1 == null);
var inst_9325 = cljs.core.not(inst_9324);
var state_9341__$1 = (function (){var statearr_9343 = state_9341;
(statearr_9343[(7)] = inst_9323__$1);

return statearr_9343;
})();
if(inst_9325){
var statearr_9344_9363 = state_9341__$1;
(statearr_9344_9363[(1)] = (8));

} else {
var statearr_9345_9364 = state_9341__$1;
(statearr_9345_9364[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9342 === (1))){
var inst_9318 = (0);
var state_9341__$1 = (function (){var statearr_9346 = state_9341;
(statearr_9346[(8)] = inst_9318);

return statearr_9346;
})();
var statearr_9347_9365 = state_9341__$1;
(statearr_9347_9365[(2)] = null);

(statearr_9347_9365[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9342 === (4))){
var state_9341__$1 = state_9341;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9341__$1,(7),ch);
} else {
if((state_val_9342 === (6))){
var inst_9336 = (state_9341[(2)]);
var state_9341__$1 = state_9341;
var statearr_9348_9366 = state_9341__$1;
(statearr_9348_9366[(2)] = inst_9336);

(statearr_9348_9366[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9342 === (3))){
var inst_9338 = (state_9341[(2)]);
var inst_9339 = cljs.core.async.close_BANG_(out);
var state_9341__$1 = (function (){var statearr_9349 = state_9341;
(statearr_9349[(9)] = inst_9338);

return statearr_9349;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_9341__$1,inst_9339);
} else {
if((state_val_9342 === (2))){
var inst_9318 = (state_9341[(8)]);
var inst_9320 = (inst_9318 < n);
var state_9341__$1 = state_9341;
if(cljs.core.truth_(inst_9320)){
var statearr_9350_9367 = state_9341__$1;
(statearr_9350_9367[(1)] = (4));

} else {
var statearr_9351_9368 = state_9341__$1;
(statearr_9351_9368[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9342 === (11))){
var inst_9318 = (state_9341[(8)]);
var inst_9328 = (state_9341[(2)]);
var inst_9329 = (inst_9318 + (1));
var inst_9318__$1 = inst_9329;
var state_9341__$1 = (function (){var statearr_9352 = state_9341;
(statearr_9352[(10)] = inst_9328);

(statearr_9352[(8)] = inst_9318__$1);

return statearr_9352;
})();
var statearr_9353_9369 = state_9341__$1;
(statearr_9353_9369[(2)] = null);

(statearr_9353_9369[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9342 === (9))){
var state_9341__$1 = state_9341;
var statearr_9354_9370 = state_9341__$1;
(statearr_9354_9370[(2)] = null);

(statearr_9354_9370[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9342 === (5))){
var state_9341__$1 = state_9341;
var statearr_9355_9371 = state_9341__$1;
(statearr_9355_9371[(2)] = null);

(statearr_9355_9371[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9342 === (10))){
var inst_9333 = (state_9341[(2)]);
var state_9341__$1 = state_9341;
var statearr_9356_9372 = state_9341__$1;
(statearr_9356_9372[(2)] = inst_9333);

(statearr_9356_9372[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9342 === (8))){
var inst_9323 = (state_9341[(7)]);
var state_9341__$1 = state_9341;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_9341__$1,(11),out,inst_9323);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__7888__auto___9362,out))
;
return ((function (switch__7785__auto__,c__7888__auto___9362,out){
return (function() {
var cljs$core$async$state_machine__7786__auto__ = null;
var cljs$core$async$state_machine__7786__auto____0 = (function (){
var statearr_9357 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_9357[(0)] = cljs$core$async$state_machine__7786__auto__);

(statearr_9357[(1)] = (1));

return statearr_9357;
});
var cljs$core$async$state_machine__7786__auto____1 = (function (state_9341){
while(true){
var ret_value__7787__auto__ = (function (){try{while(true){
var result__7788__auto__ = switch__7785__auto__(state_9341);
if(cljs.core.keyword_identical_QMARK_(result__7788__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7788__auto__;
}
break;
}
}catch (e9358){if((e9358 instanceof Object)){
var ex__7789__auto__ = e9358;
var statearr_9359_9373 = state_9341;
(statearr_9359_9373[(5)] = ex__7789__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_9341);

return cljs.core.cst$kw$recur;
} else {
throw e9358;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7787__auto__,cljs.core.cst$kw$recur)){
var G__9374 = state_9341;
state_9341 = G__9374;
continue;
} else {
return ret_value__7787__auto__;
}
break;
}
});
cljs$core$async$state_machine__7786__auto__ = function(state_9341){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7786__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7786__auto____1.call(this,state_9341);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7786__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7786__auto____0;
cljs$core$async$state_machine__7786__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7786__auto____1;
return cljs$core$async$state_machine__7786__auto__;
})()
;})(switch__7785__auto__,c__7888__auto___9362,out))
})();
var state__7890__auto__ = (function (){var statearr_9360 = (f__7889__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7889__auto__.cljs$core$IFn$_invoke$arity$0() : f__7889__auto__.call(null));
(statearr_9360[(6)] = c__7888__auto___9362);

return statearr_9360;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7890__auto__);
});})(c__7888__auto___9362,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async9376 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9376 = (function (f,ch,meta9377){
this.f = f;
this.ch = ch;
this.meta9377 = meta9377;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async9376.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9378,meta9377__$1){
var self__ = this;
var _9378__$1 = this;
return (new cljs.core.async.t_cljs$core$async9376(self__.f,self__.ch,meta9377__$1));
});

cljs.core.async.t_cljs$core$async9376.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9378){
var self__ = this;
var _9378__$1 = this;
return self__.meta9377;
});

cljs.core.async.t_cljs$core$async9376.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async9376.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async9376.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async9376.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async9376.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async9379 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9379 = (function (f,ch,meta9377,_,fn1,meta9380){
this.f = f;
this.ch = ch;
this.meta9377 = meta9377;
this._ = _;
this.fn1 = fn1;
this.meta9380 = meta9380;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async9379.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_9381,meta9380__$1){
var self__ = this;
var _9381__$1 = this;
return (new cljs.core.async.t_cljs$core$async9379(self__.f,self__.ch,self__.meta9377,self__._,self__.fn1,meta9380__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async9379.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_9381){
var self__ = this;
var _9381__$1 = this;
return self__.meta9380;
});})(___$1))
;

cljs.core.async.t_cljs$core$async9379.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async9379.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async9379.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async9379.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__9375_SHARP_){
var G__9382 = (((p1__9375_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__9375_SHARP_) : self__.f.call(null,p1__9375_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__9382) : f1.call(null,G__9382));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async9379.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta9377,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async9376], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta9380], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async9379.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9379.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9379";

cljs.core.async.t_cljs$core$async9379.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async9379");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async9379.
 */
cljs.core.async.__GT_t_cljs$core$async9379 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async9379(f__$1,ch__$1,meta9377__$1,___$2,fn1__$1,meta9380){
return (new cljs.core.async.t_cljs$core$async9379(f__$1,ch__$1,meta9377__$1,___$2,fn1__$1,meta9380));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async9379(self__.f,self__.ch,self__.meta9377,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3938__auto__ = ret;
if(cljs.core.truth_(and__3938__auto__)){
return !((cljs.core.deref(ret) == null));
} else {
return and__3938__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__9383 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__9383) : self__.f.call(null,G__9383));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async9376.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async9376.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async9376.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta9377], null);
});

cljs.core.async.t_cljs$core$async9376.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9376.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9376";

cljs.core.async.t_cljs$core$async9376.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async9376");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async9376.
 */
cljs.core.async.__GT_t_cljs$core$async9376 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async9376(f__$1,ch__$1,meta9377){
return (new cljs.core.async.t_cljs$core$async9376(f__$1,ch__$1,meta9377));
});

}

return (new cljs.core.async.t_cljs$core$async9376(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async9384 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9384 = (function (f,ch,meta9385){
this.f = f;
this.ch = ch;
this.meta9385 = meta9385;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async9384.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9386,meta9385__$1){
var self__ = this;
var _9386__$1 = this;
return (new cljs.core.async.t_cljs$core$async9384(self__.f,self__.ch,meta9385__$1));
});

cljs.core.async.t_cljs$core$async9384.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9386){
var self__ = this;
var _9386__$1 = this;
return self__.meta9385;
});

cljs.core.async.t_cljs$core$async9384.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async9384.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async9384.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async9384.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async9384.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async9384.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async9384.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta9385], null);
});

cljs.core.async.t_cljs$core$async9384.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9384.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9384";

cljs.core.async.t_cljs$core$async9384.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async9384");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async9384.
 */
cljs.core.async.__GT_t_cljs$core$async9384 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async9384(f__$1,ch__$1,meta9385){
return (new cljs.core.async.t_cljs$core$async9384(f__$1,ch__$1,meta9385));
});

}

return (new cljs.core.async.t_cljs$core$async9384(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async9387 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9387 = (function (p,ch,meta9388){
this.p = p;
this.ch = ch;
this.meta9388 = meta9388;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async9387.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9389,meta9388__$1){
var self__ = this;
var _9389__$1 = this;
return (new cljs.core.async.t_cljs$core$async9387(self__.p,self__.ch,meta9388__$1));
});

cljs.core.async.t_cljs$core$async9387.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9389){
var self__ = this;
var _9389__$1 = this;
return self__.meta9388;
});

cljs.core.async.t_cljs$core$async9387.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async9387.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async9387.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async9387.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async9387.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async9387.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async9387.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async9387.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta9388], null);
});

cljs.core.async.t_cljs$core$async9387.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9387.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9387";

cljs.core.async.t_cljs$core$async9387.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async9387");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async9387.
 */
cljs.core.async.__GT_t_cljs$core$async9387 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async9387(p__$1,ch__$1,meta9388){
return (new cljs.core.async.t_cljs$core$async9387(p__$1,ch__$1,meta9388));
});

}

return (new cljs.core.async.t_cljs$core$async9387(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__9391 = arguments.length;
switch (G__9391) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__7888__auto___9431 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7888__auto___9431,out){
return (function (){
var f__7889__auto__ = (function (){var switch__7785__auto__ = ((function (c__7888__auto___9431,out){
return (function (state_9412){
var state_val_9413 = (state_9412[(1)]);
if((state_val_9413 === (7))){
var inst_9408 = (state_9412[(2)]);
var state_9412__$1 = state_9412;
var statearr_9414_9432 = state_9412__$1;
(statearr_9414_9432[(2)] = inst_9408);

(statearr_9414_9432[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9413 === (1))){
var state_9412__$1 = state_9412;
var statearr_9415_9433 = state_9412__$1;
(statearr_9415_9433[(2)] = null);

(statearr_9415_9433[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9413 === (4))){
var inst_9394 = (state_9412[(7)]);
var inst_9394__$1 = (state_9412[(2)]);
var inst_9395 = (inst_9394__$1 == null);
var state_9412__$1 = (function (){var statearr_9416 = state_9412;
(statearr_9416[(7)] = inst_9394__$1);

return statearr_9416;
})();
if(cljs.core.truth_(inst_9395)){
var statearr_9417_9434 = state_9412__$1;
(statearr_9417_9434[(1)] = (5));

} else {
var statearr_9418_9435 = state_9412__$1;
(statearr_9418_9435[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9413 === (6))){
var inst_9394 = (state_9412[(7)]);
var inst_9399 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_9394) : p.call(null,inst_9394));
var state_9412__$1 = state_9412;
if(cljs.core.truth_(inst_9399)){
var statearr_9419_9436 = state_9412__$1;
(statearr_9419_9436[(1)] = (8));

} else {
var statearr_9420_9437 = state_9412__$1;
(statearr_9420_9437[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9413 === (3))){
var inst_9410 = (state_9412[(2)]);
var state_9412__$1 = state_9412;
return cljs.core.async.impl.ioc_helpers.return_chan(state_9412__$1,inst_9410);
} else {
if((state_val_9413 === (2))){
var state_9412__$1 = state_9412;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9412__$1,(4),ch);
} else {
if((state_val_9413 === (11))){
var inst_9402 = (state_9412[(2)]);
var state_9412__$1 = state_9412;
var statearr_9421_9438 = state_9412__$1;
(statearr_9421_9438[(2)] = inst_9402);

(statearr_9421_9438[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9413 === (9))){
var state_9412__$1 = state_9412;
var statearr_9422_9439 = state_9412__$1;
(statearr_9422_9439[(2)] = null);

(statearr_9422_9439[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9413 === (5))){
var inst_9397 = cljs.core.async.close_BANG_(out);
var state_9412__$1 = state_9412;
var statearr_9423_9440 = state_9412__$1;
(statearr_9423_9440[(2)] = inst_9397);

(statearr_9423_9440[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9413 === (10))){
var inst_9405 = (state_9412[(2)]);
var state_9412__$1 = (function (){var statearr_9424 = state_9412;
(statearr_9424[(8)] = inst_9405);

return statearr_9424;
})();
var statearr_9425_9441 = state_9412__$1;
(statearr_9425_9441[(2)] = null);

(statearr_9425_9441[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9413 === (8))){
var inst_9394 = (state_9412[(7)]);
var state_9412__$1 = state_9412;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_9412__$1,(11),out,inst_9394);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__7888__auto___9431,out))
;
return ((function (switch__7785__auto__,c__7888__auto___9431,out){
return (function() {
var cljs$core$async$state_machine__7786__auto__ = null;
var cljs$core$async$state_machine__7786__auto____0 = (function (){
var statearr_9426 = [null,null,null,null,null,null,null,null,null];
(statearr_9426[(0)] = cljs$core$async$state_machine__7786__auto__);

(statearr_9426[(1)] = (1));

return statearr_9426;
});
var cljs$core$async$state_machine__7786__auto____1 = (function (state_9412){
while(true){
var ret_value__7787__auto__ = (function (){try{while(true){
var result__7788__auto__ = switch__7785__auto__(state_9412);
if(cljs.core.keyword_identical_QMARK_(result__7788__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7788__auto__;
}
break;
}
}catch (e9427){if((e9427 instanceof Object)){
var ex__7789__auto__ = e9427;
var statearr_9428_9442 = state_9412;
(statearr_9428_9442[(5)] = ex__7789__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_9412);

return cljs.core.cst$kw$recur;
} else {
throw e9427;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7787__auto__,cljs.core.cst$kw$recur)){
var G__9443 = state_9412;
state_9412 = G__9443;
continue;
} else {
return ret_value__7787__auto__;
}
break;
}
});
cljs$core$async$state_machine__7786__auto__ = function(state_9412){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7786__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7786__auto____1.call(this,state_9412);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7786__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7786__auto____0;
cljs$core$async$state_machine__7786__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7786__auto____1;
return cljs$core$async$state_machine__7786__auto__;
})()
;})(switch__7785__auto__,c__7888__auto___9431,out))
})();
var state__7890__auto__ = (function (){var statearr_9429 = (f__7889__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7889__auto__.cljs$core$IFn$_invoke$arity$0() : f__7889__auto__.call(null));
(statearr_9429[(6)] = c__7888__auto___9431);

return statearr_9429;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7890__auto__);
});})(c__7888__auto___9431,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__9445 = arguments.length;
switch (G__9445) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__7888__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7888__auto__){
return (function (){
var f__7889__auto__ = (function (){var switch__7785__auto__ = ((function (c__7888__auto__){
return (function (state_9508){
var state_val_9509 = (state_9508[(1)]);
if((state_val_9509 === (7))){
var inst_9504 = (state_9508[(2)]);
var state_9508__$1 = state_9508;
var statearr_9510_9548 = state_9508__$1;
(statearr_9510_9548[(2)] = inst_9504);

(statearr_9510_9548[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9509 === (20))){
var inst_9474 = (state_9508[(7)]);
var inst_9485 = (state_9508[(2)]);
var inst_9486 = cljs.core.next(inst_9474);
var inst_9460 = inst_9486;
var inst_9461 = null;
var inst_9462 = (0);
var inst_9463 = (0);
var state_9508__$1 = (function (){var statearr_9511 = state_9508;
(statearr_9511[(8)] = inst_9463);

(statearr_9511[(9)] = inst_9485);

(statearr_9511[(10)] = inst_9462);

(statearr_9511[(11)] = inst_9460);

(statearr_9511[(12)] = inst_9461);

return statearr_9511;
})();
var statearr_9512_9549 = state_9508__$1;
(statearr_9512_9549[(2)] = null);

(statearr_9512_9549[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9509 === (1))){
var state_9508__$1 = state_9508;
var statearr_9513_9550 = state_9508__$1;
(statearr_9513_9550[(2)] = null);

(statearr_9513_9550[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9509 === (4))){
var inst_9449 = (state_9508[(13)]);
var inst_9449__$1 = (state_9508[(2)]);
var inst_9450 = (inst_9449__$1 == null);
var state_9508__$1 = (function (){var statearr_9514 = state_9508;
(statearr_9514[(13)] = inst_9449__$1);

return statearr_9514;
})();
if(cljs.core.truth_(inst_9450)){
var statearr_9515_9551 = state_9508__$1;
(statearr_9515_9551[(1)] = (5));

} else {
var statearr_9516_9552 = state_9508__$1;
(statearr_9516_9552[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9509 === (15))){
var state_9508__$1 = state_9508;
var statearr_9520_9553 = state_9508__$1;
(statearr_9520_9553[(2)] = null);

(statearr_9520_9553[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9509 === (21))){
var state_9508__$1 = state_9508;
var statearr_9521_9554 = state_9508__$1;
(statearr_9521_9554[(2)] = null);

(statearr_9521_9554[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9509 === (13))){
var inst_9463 = (state_9508[(8)]);
var inst_9462 = (state_9508[(10)]);
var inst_9460 = (state_9508[(11)]);
var inst_9461 = (state_9508[(12)]);
var inst_9470 = (state_9508[(2)]);
var inst_9471 = (inst_9463 + (1));
var tmp9517 = inst_9462;
var tmp9518 = inst_9460;
var tmp9519 = inst_9461;
var inst_9460__$1 = tmp9518;
var inst_9461__$1 = tmp9519;
var inst_9462__$1 = tmp9517;
var inst_9463__$1 = inst_9471;
var state_9508__$1 = (function (){var statearr_9522 = state_9508;
(statearr_9522[(8)] = inst_9463__$1);

(statearr_9522[(10)] = inst_9462__$1);

(statearr_9522[(11)] = inst_9460__$1);

(statearr_9522[(12)] = inst_9461__$1);

(statearr_9522[(14)] = inst_9470);

return statearr_9522;
})();
var statearr_9523_9555 = state_9508__$1;
(statearr_9523_9555[(2)] = null);

(statearr_9523_9555[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9509 === (22))){
var state_9508__$1 = state_9508;
var statearr_9524_9556 = state_9508__$1;
(statearr_9524_9556[(2)] = null);

(statearr_9524_9556[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9509 === (6))){
var inst_9449 = (state_9508[(13)]);
var inst_9458 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_9449) : f.call(null,inst_9449));
var inst_9459 = cljs.core.seq(inst_9458);
var inst_9460 = inst_9459;
var inst_9461 = null;
var inst_9462 = (0);
var inst_9463 = (0);
var state_9508__$1 = (function (){var statearr_9525 = state_9508;
(statearr_9525[(8)] = inst_9463);

(statearr_9525[(10)] = inst_9462);

(statearr_9525[(11)] = inst_9460);

(statearr_9525[(12)] = inst_9461);

return statearr_9525;
})();
var statearr_9526_9557 = state_9508__$1;
(statearr_9526_9557[(2)] = null);

(statearr_9526_9557[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9509 === (17))){
var inst_9474 = (state_9508[(7)]);
var inst_9478 = cljs.core.chunk_first(inst_9474);
var inst_9479 = cljs.core.chunk_rest(inst_9474);
var inst_9480 = cljs.core.count(inst_9478);
var inst_9460 = inst_9479;
var inst_9461 = inst_9478;
var inst_9462 = inst_9480;
var inst_9463 = (0);
var state_9508__$1 = (function (){var statearr_9527 = state_9508;
(statearr_9527[(8)] = inst_9463);

(statearr_9527[(10)] = inst_9462);

(statearr_9527[(11)] = inst_9460);

(statearr_9527[(12)] = inst_9461);

return statearr_9527;
})();
var statearr_9528_9558 = state_9508__$1;
(statearr_9528_9558[(2)] = null);

(statearr_9528_9558[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9509 === (3))){
var inst_9506 = (state_9508[(2)]);
var state_9508__$1 = state_9508;
return cljs.core.async.impl.ioc_helpers.return_chan(state_9508__$1,inst_9506);
} else {
if((state_val_9509 === (12))){
var inst_9494 = (state_9508[(2)]);
var state_9508__$1 = state_9508;
var statearr_9529_9559 = state_9508__$1;
(statearr_9529_9559[(2)] = inst_9494);

(statearr_9529_9559[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9509 === (2))){
var state_9508__$1 = state_9508;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9508__$1,(4),in$);
} else {
if((state_val_9509 === (23))){
var inst_9502 = (state_9508[(2)]);
var state_9508__$1 = state_9508;
var statearr_9530_9560 = state_9508__$1;
(statearr_9530_9560[(2)] = inst_9502);

(statearr_9530_9560[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9509 === (19))){
var inst_9489 = (state_9508[(2)]);
var state_9508__$1 = state_9508;
var statearr_9531_9561 = state_9508__$1;
(statearr_9531_9561[(2)] = inst_9489);

(statearr_9531_9561[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9509 === (11))){
var inst_9474 = (state_9508[(7)]);
var inst_9460 = (state_9508[(11)]);
var inst_9474__$1 = cljs.core.seq(inst_9460);
var state_9508__$1 = (function (){var statearr_9532 = state_9508;
(statearr_9532[(7)] = inst_9474__$1);

return statearr_9532;
})();
if(inst_9474__$1){
var statearr_9533_9562 = state_9508__$1;
(statearr_9533_9562[(1)] = (14));

} else {
var statearr_9534_9563 = state_9508__$1;
(statearr_9534_9563[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9509 === (9))){
var inst_9496 = (state_9508[(2)]);
var inst_9497 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_9508__$1 = (function (){var statearr_9535 = state_9508;
(statearr_9535[(15)] = inst_9496);

return statearr_9535;
})();
if(cljs.core.truth_(inst_9497)){
var statearr_9536_9564 = state_9508__$1;
(statearr_9536_9564[(1)] = (21));

} else {
var statearr_9537_9565 = state_9508__$1;
(statearr_9537_9565[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9509 === (5))){
var inst_9452 = cljs.core.async.close_BANG_(out);
var state_9508__$1 = state_9508;
var statearr_9538_9566 = state_9508__$1;
(statearr_9538_9566[(2)] = inst_9452);

(statearr_9538_9566[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9509 === (14))){
var inst_9474 = (state_9508[(7)]);
var inst_9476 = cljs.core.chunked_seq_QMARK_(inst_9474);
var state_9508__$1 = state_9508;
if(inst_9476){
var statearr_9539_9567 = state_9508__$1;
(statearr_9539_9567[(1)] = (17));

} else {
var statearr_9540_9568 = state_9508__$1;
(statearr_9540_9568[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9509 === (16))){
var inst_9492 = (state_9508[(2)]);
var state_9508__$1 = state_9508;
var statearr_9541_9569 = state_9508__$1;
(statearr_9541_9569[(2)] = inst_9492);

(statearr_9541_9569[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9509 === (10))){
var inst_9463 = (state_9508[(8)]);
var inst_9461 = (state_9508[(12)]);
var inst_9468 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_9461,inst_9463);
var state_9508__$1 = state_9508;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_9508__$1,(13),out,inst_9468);
} else {
if((state_val_9509 === (18))){
var inst_9474 = (state_9508[(7)]);
var inst_9483 = cljs.core.first(inst_9474);
var state_9508__$1 = state_9508;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_9508__$1,(20),out,inst_9483);
} else {
if((state_val_9509 === (8))){
var inst_9463 = (state_9508[(8)]);
var inst_9462 = (state_9508[(10)]);
var inst_9465 = (inst_9463 < inst_9462);
var inst_9466 = inst_9465;
var state_9508__$1 = state_9508;
if(cljs.core.truth_(inst_9466)){
var statearr_9542_9570 = state_9508__$1;
(statearr_9542_9570[(1)] = (10));

} else {
var statearr_9543_9571 = state_9508__$1;
(statearr_9543_9571[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7888__auto__))
;
return ((function (switch__7785__auto__,c__7888__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__7786__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__7786__auto____0 = (function (){
var statearr_9544 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9544[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__7786__auto__);

(statearr_9544[(1)] = (1));

return statearr_9544;
});
var cljs$core$async$mapcat_STAR__$_state_machine__7786__auto____1 = (function (state_9508){
while(true){
var ret_value__7787__auto__ = (function (){try{while(true){
var result__7788__auto__ = switch__7785__auto__(state_9508);
if(cljs.core.keyword_identical_QMARK_(result__7788__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7788__auto__;
}
break;
}
}catch (e9545){if((e9545 instanceof Object)){
var ex__7789__auto__ = e9545;
var statearr_9546_9572 = state_9508;
(statearr_9546_9572[(5)] = ex__7789__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_9508);

return cljs.core.cst$kw$recur;
} else {
throw e9545;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7787__auto__,cljs.core.cst$kw$recur)){
var G__9573 = state_9508;
state_9508 = G__9573;
continue;
} else {
return ret_value__7787__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__7786__auto__ = function(state_9508){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__7786__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__7786__auto____1.call(this,state_9508);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__7786__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__7786__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__7786__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__7786__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__7786__auto__;
})()
;})(switch__7785__auto__,c__7888__auto__))
})();
var state__7890__auto__ = (function (){var statearr_9547 = (f__7889__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7889__auto__.cljs$core$IFn$_invoke$arity$0() : f__7889__auto__.call(null));
(statearr_9547[(6)] = c__7888__auto__);

return statearr_9547;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7890__auto__);
});})(c__7888__auto__))
);

return c__7888__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__9575 = arguments.length;
switch (G__9575) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__9578 = arguments.length;
switch (G__9578) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__9581 = arguments.length;
switch (G__9581) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__7888__auto___9628 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7888__auto___9628,out){
return (function (){
var f__7889__auto__ = (function (){var switch__7785__auto__ = ((function (c__7888__auto___9628,out){
return (function (state_9605){
var state_val_9606 = (state_9605[(1)]);
if((state_val_9606 === (7))){
var inst_9600 = (state_9605[(2)]);
var state_9605__$1 = state_9605;
var statearr_9607_9629 = state_9605__$1;
(statearr_9607_9629[(2)] = inst_9600);

(statearr_9607_9629[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9606 === (1))){
var inst_9582 = null;
var state_9605__$1 = (function (){var statearr_9608 = state_9605;
(statearr_9608[(7)] = inst_9582);

return statearr_9608;
})();
var statearr_9609_9630 = state_9605__$1;
(statearr_9609_9630[(2)] = null);

(statearr_9609_9630[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9606 === (4))){
var inst_9585 = (state_9605[(8)]);
var inst_9585__$1 = (state_9605[(2)]);
var inst_9586 = (inst_9585__$1 == null);
var inst_9587 = cljs.core.not(inst_9586);
var state_9605__$1 = (function (){var statearr_9610 = state_9605;
(statearr_9610[(8)] = inst_9585__$1);

return statearr_9610;
})();
if(inst_9587){
var statearr_9611_9631 = state_9605__$1;
(statearr_9611_9631[(1)] = (5));

} else {
var statearr_9612_9632 = state_9605__$1;
(statearr_9612_9632[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9606 === (6))){
var state_9605__$1 = state_9605;
var statearr_9613_9633 = state_9605__$1;
(statearr_9613_9633[(2)] = null);

(statearr_9613_9633[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9606 === (3))){
var inst_9602 = (state_9605[(2)]);
var inst_9603 = cljs.core.async.close_BANG_(out);
var state_9605__$1 = (function (){var statearr_9614 = state_9605;
(statearr_9614[(9)] = inst_9602);

return statearr_9614;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_9605__$1,inst_9603);
} else {
if((state_val_9606 === (2))){
var state_9605__$1 = state_9605;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9605__$1,(4),ch);
} else {
if((state_val_9606 === (11))){
var inst_9585 = (state_9605[(8)]);
var inst_9594 = (state_9605[(2)]);
var inst_9582 = inst_9585;
var state_9605__$1 = (function (){var statearr_9615 = state_9605;
(statearr_9615[(10)] = inst_9594);

(statearr_9615[(7)] = inst_9582);

return statearr_9615;
})();
var statearr_9616_9634 = state_9605__$1;
(statearr_9616_9634[(2)] = null);

(statearr_9616_9634[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9606 === (9))){
var inst_9585 = (state_9605[(8)]);
var state_9605__$1 = state_9605;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_9605__$1,(11),out,inst_9585);
} else {
if((state_val_9606 === (5))){
var inst_9582 = (state_9605[(7)]);
var inst_9585 = (state_9605[(8)]);
var inst_9589 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_9585,inst_9582);
var state_9605__$1 = state_9605;
if(inst_9589){
var statearr_9618_9635 = state_9605__$1;
(statearr_9618_9635[(1)] = (8));

} else {
var statearr_9619_9636 = state_9605__$1;
(statearr_9619_9636[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9606 === (10))){
var inst_9597 = (state_9605[(2)]);
var state_9605__$1 = state_9605;
var statearr_9620_9637 = state_9605__$1;
(statearr_9620_9637[(2)] = inst_9597);

(statearr_9620_9637[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9606 === (8))){
var inst_9582 = (state_9605[(7)]);
var tmp9617 = inst_9582;
var inst_9582__$1 = tmp9617;
var state_9605__$1 = (function (){var statearr_9621 = state_9605;
(statearr_9621[(7)] = inst_9582__$1);

return statearr_9621;
})();
var statearr_9622_9638 = state_9605__$1;
(statearr_9622_9638[(2)] = null);

(statearr_9622_9638[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__7888__auto___9628,out))
;
return ((function (switch__7785__auto__,c__7888__auto___9628,out){
return (function() {
var cljs$core$async$state_machine__7786__auto__ = null;
var cljs$core$async$state_machine__7786__auto____0 = (function (){
var statearr_9623 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_9623[(0)] = cljs$core$async$state_machine__7786__auto__);

(statearr_9623[(1)] = (1));

return statearr_9623;
});
var cljs$core$async$state_machine__7786__auto____1 = (function (state_9605){
while(true){
var ret_value__7787__auto__ = (function (){try{while(true){
var result__7788__auto__ = switch__7785__auto__(state_9605);
if(cljs.core.keyword_identical_QMARK_(result__7788__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7788__auto__;
}
break;
}
}catch (e9624){if((e9624 instanceof Object)){
var ex__7789__auto__ = e9624;
var statearr_9625_9639 = state_9605;
(statearr_9625_9639[(5)] = ex__7789__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_9605);

return cljs.core.cst$kw$recur;
} else {
throw e9624;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7787__auto__,cljs.core.cst$kw$recur)){
var G__9640 = state_9605;
state_9605 = G__9640;
continue;
} else {
return ret_value__7787__auto__;
}
break;
}
});
cljs$core$async$state_machine__7786__auto__ = function(state_9605){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7786__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7786__auto____1.call(this,state_9605);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7786__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7786__auto____0;
cljs$core$async$state_machine__7786__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7786__auto____1;
return cljs$core$async$state_machine__7786__auto__;
})()
;})(switch__7785__auto__,c__7888__auto___9628,out))
})();
var state__7890__auto__ = (function (){var statearr_9626 = (f__7889__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7889__auto__.cljs$core$IFn$_invoke$arity$0() : f__7889__auto__.call(null));
(statearr_9626[(6)] = c__7888__auto___9628);

return statearr_9626;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7890__auto__);
});})(c__7888__auto___9628,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__9642 = arguments.length;
switch (G__9642) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__7888__auto___9708 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7888__auto___9708,out){
return (function (){
var f__7889__auto__ = (function (){var switch__7785__auto__ = ((function (c__7888__auto___9708,out){
return (function (state_9680){
var state_val_9681 = (state_9680[(1)]);
if((state_val_9681 === (7))){
var inst_9676 = (state_9680[(2)]);
var state_9680__$1 = state_9680;
var statearr_9682_9709 = state_9680__$1;
(statearr_9682_9709[(2)] = inst_9676);

(statearr_9682_9709[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9681 === (1))){
var inst_9643 = (new Array(n));
var inst_9644 = inst_9643;
var inst_9645 = (0);
var state_9680__$1 = (function (){var statearr_9683 = state_9680;
(statearr_9683[(7)] = inst_9644);

(statearr_9683[(8)] = inst_9645);

return statearr_9683;
})();
var statearr_9684_9710 = state_9680__$1;
(statearr_9684_9710[(2)] = null);

(statearr_9684_9710[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9681 === (4))){
var inst_9648 = (state_9680[(9)]);
var inst_9648__$1 = (state_9680[(2)]);
var inst_9649 = (inst_9648__$1 == null);
var inst_9650 = cljs.core.not(inst_9649);
var state_9680__$1 = (function (){var statearr_9685 = state_9680;
(statearr_9685[(9)] = inst_9648__$1);

return statearr_9685;
})();
if(inst_9650){
var statearr_9686_9711 = state_9680__$1;
(statearr_9686_9711[(1)] = (5));

} else {
var statearr_9687_9712 = state_9680__$1;
(statearr_9687_9712[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9681 === (15))){
var inst_9670 = (state_9680[(2)]);
var state_9680__$1 = state_9680;
var statearr_9688_9713 = state_9680__$1;
(statearr_9688_9713[(2)] = inst_9670);

(statearr_9688_9713[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9681 === (13))){
var state_9680__$1 = state_9680;
var statearr_9689_9714 = state_9680__$1;
(statearr_9689_9714[(2)] = null);

(statearr_9689_9714[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9681 === (6))){
var inst_9645 = (state_9680[(8)]);
var inst_9666 = (inst_9645 > (0));
var state_9680__$1 = state_9680;
if(cljs.core.truth_(inst_9666)){
var statearr_9690_9715 = state_9680__$1;
(statearr_9690_9715[(1)] = (12));

} else {
var statearr_9691_9716 = state_9680__$1;
(statearr_9691_9716[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9681 === (3))){
var inst_9678 = (state_9680[(2)]);
var state_9680__$1 = state_9680;
return cljs.core.async.impl.ioc_helpers.return_chan(state_9680__$1,inst_9678);
} else {
if((state_val_9681 === (12))){
var inst_9644 = (state_9680[(7)]);
var inst_9668 = cljs.core.vec(inst_9644);
var state_9680__$1 = state_9680;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_9680__$1,(15),out,inst_9668);
} else {
if((state_val_9681 === (2))){
var state_9680__$1 = state_9680;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9680__$1,(4),ch);
} else {
if((state_val_9681 === (11))){
var inst_9660 = (state_9680[(2)]);
var inst_9661 = (new Array(n));
var inst_9644 = inst_9661;
var inst_9645 = (0);
var state_9680__$1 = (function (){var statearr_9692 = state_9680;
(statearr_9692[(7)] = inst_9644);

(statearr_9692[(8)] = inst_9645);

(statearr_9692[(10)] = inst_9660);

return statearr_9692;
})();
var statearr_9693_9717 = state_9680__$1;
(statearr_9693_9717[(2)] = null);

(statearr_9693_9717[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9681 === (9))){
var inst_9644 = (state_9680[(7)]);
var inst_9658 = cljs.core.vec(inst_9644);
var state_9680__$1 = state_9680;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_9680__$1,(11),out,inst_9658);
} else {
if((state_val_9681 === (5))){
var inst_9648 = (state_9680[(9)]);
var inst_9644 = (state_9680[(7)]);
var inst_9653 = (state_9680[(11)]);
var inst_9645 = (state_9680[(8)]);
var inst_9652 = (inst_9644[inst_9645] = inst_9648);
var inst_9653__$1 = (inst_9645 + (1));
var inst_9654 = (inst_9653__$1 < n);
var state_9680__$1 = (function (){var statearr_9694 = state_9680;
(statearr_9694[(11)] = inst_9653__$1);

(statearr_9694[(12)] = inst_9652);

return statearr_9694;
})();
if(cljs.core.truth_(inst_9654)){
var statearr_9695_9718 = state_9680__$1;
(statearr_9695_9718[(1)] = (8));

} else {
var statearr_9696_9719 = state_9680__$1;
(statearr_9696_9719[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9681 === (14))){
var inst_9673 = (state_9680[(2)]);
var inst_9674 = cljs.core.async.close_BANG_(out);
var state_9680__$1 = (function (){var statearr_9698 = state_9680;
(statearr_9698[(13)] = inst_9673);

return statearr_9698;
})();
var statearr_9699_9720 = state_9680__$1;
(statearr_9699_9720[(2)] = inst_9674);

(statearr_9699_9720[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9681 === (10))){
var inst_9664 = (state_9680[(2)]);
var state_9680__$1 = state_9680;
var statearr_9700_9721 = state_9680__$1;
(statearr_9700_9721[(2)] = inst_9664);

(statearr_9700_9721[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9681 === (8))){
var inst_9644 = (state_9680[(7)]);
var inst_9653 = (state_9680[(11)]);
var tmp9697 = inst_9644;
var inst_9644__$1 = tmp9697;
var inst_9645 = inst_9653;
var state_9680__$1 = (function (){var statearr_9701 = state_9680;
(statearr_9701[(7)] = inst_9644__$1);

(statearr_9701[(8)] = inst_9645);

return statearr_9701;
})();
var statearr_9702_9722 = state_9680__$1;
(statearr_9702_9722[(2)] = null);

(statearr_9702_9722[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7888__auto___9708,out))
;
return ((function (switch__7785__auto__,c__7888__auto___9708,out){
return (function() {
var cljs$core$async$state_machine__7786__auto__ = null;
var cljs$core$async$state_machine__7786__auto____0 = (function (){
var statearr_9703 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9703[(0)] = cljs$core$async$state_machine__7786__auto__);

(statearr_9703[(1)] = (1));

return statearr_9703;
});
var cljs$core$async$state_machine__7786__auto____1 = (function (state_9680){
while(true){
var ret_value__7787__auto__ = (function (){try{while(true){
var result__7788__auto__ = switch__7785__auto__(state_9680);
if(cljs.core.keyword_identical_QMARK_(result__7788__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7788__auto__;
}
break;
}
}catch (e9704){if((e9704 instanceof Object)){
var ex__7789__auto__ = e9704;
var statearr_9705_9723 = state_9680;
(statearr_9705_9723[(5)] = ex__7789__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_9680);

return cljs.core.cst$kw$recur;
} else {
throw e9704;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7787__auto__,cljs.core.cst$kw$recur)){
var G__9724 = state_9680;
state_9680 = G__9724;
continue;
} else {
return ret_value__7787__auto__;
}
break;
}
});
cljs$core$async$state_machine__7786__auto__ = function(state_9680){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7786__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7786__auto____1.call(this,state_9680);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7786__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7786__auto____0;
cljs$core$async$state_machine__7786__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7786__auto____1;
return cljs$core$async$state_machine__7786__auto__;
})()
;})(switch__7785__auto__,c__7888__auto___9708,out))
})();
var state__7890__auto__ = (function (){var statearr_9706 = (f__7889__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7889__auto__.cljs$core$IFn$_invoke$arity$0() : f__7889__auto__.call(null));
(statearr_9706[(6)] = c__7888__auto___9708);

return statearr_9706;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7890__auto__);
});})(c__7888__auto___9708,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__9726 = arguments.length;
switch (G__9726) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__7888__auto___9796 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7888__auto___9796,out){
return (function (){
var f__7889__auto__ = (function (){var switch__7785__auto__ = ((function (c__7888__auto___9796,out){
return (function (state_9768){
var state_val_9769 = (state_9768[(1)]);
if((state_val_9769 === (7))){
var inst_9764 = (state_9768[(2)]);
var state_9768__$1 = state_9768;
var statearr_9770_9797 = state_9768__$1;
(statearr_9770_9797[(2)] = inst_9764);

(statearr_9770_9797[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9769 === (1))){
var inst_9727 = [];
var inst_9728 = inst_9727;
var inst_9729 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_9768__$1 = (function (){var statearr_9771 = state_9768;
(statearr_9771[(7)] = inst_9729);

(statearr_9771[(8)] = inst_9728);

return statearr_9771;
})();
var statearr_9772_9798 = state_9768__$1;
(statearr_9772_9798[(2)] = null);

(statearr_9772_9798[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9769 === (4))){
var inst_9732 = (state_9768[(9)]);
var inst_9732__$1 = (state_9768[(2)]);
var inst_9733 = (inst_9732__$1 == null);
var inst_9734 = cljs.core.not(inst_9733);
var state_9768__$1 = (function (){var statearr_9773 = state_9768;
(statearr_9773[(9)] = inst_9732__$1);

return statearr_9773;
})();
if(inst_9734){
var statearr_9774_9799 = state_9768__$1;
(statearr_9774_9799[(1)] = (5));

} else {
var statearr_9775_9800 = state_9768__$1;
(statearr_9775_9800[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9769 === (15))){
var inst_9758 = (state_9768[(2)]);
var state_9768__$1 = state_9768;
var statearr_9776_9801 = state_9768__$1;
(statearr_9776_9801[(2)] = inst_9758);

(statearr_9776_9801[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9769 === (13))){
var state_9768__$1 = state_9768;
var statearr_9777_9802 = state_9768__$1;
(statearr_9777_9802[(2)] = null);

(statearr_9777_9802[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9769 === (6))){
var inst_9728 = (state_9768[(8)]);
var inst_9753 = inst_9728.length;
var inst_9754 = (inst_9753 > (0));
var state_9768__$1 = state_9768;
if(cljs.core.truth_(inst_9754)){
var statearr_9778_9803 = state_9768__$1;
(statearr_9778_9803[(1)] = (12));

} else {
var statearr_9779_9804 = state_9768__$1;
(statearr_9779_9804[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9769 === (3))){
var inst_9766 = (state_9768[(2)]);
var state_9768__$1 = state_9768;
return cljs.core.async.impl.ioc_helpers.return_chan(state_9768__$1,inst_9766);
} else {
if((state_val_9769 === (12))){
var inst_9728 = (state_9768[(8)]);
var inst_9756 = cljs.core.vec(inst_9728);
var state_9768__$1 = state_9768;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_9768__$1,(15),out,inst_9756);
} else {
if((state_val_9769 === (2))){
var state_9768__$1 = state_9768;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9768__$1,(4),ch);
} else {
if((state_val_9769 === (11))){
var inst_9732 = (state_9768[(9)]);
var inst_9736 = (state_9768[(10)]);
var inst_9746 = (state_9768[(2)]);
var inst_9747 = [];
var inst_9748 = inst_9747.push(inst_9732);
var inst_9728 = inst_9747;
var inst_9729 = inst_9736;
var state_9768__$1 = (function (){var statearr_9780 = state_9768;
(statearr_9780[(11)] = inst_9746);

(statearr_9780[(7)] = inst_9729);

(statearr_9780[(8)] = inst_9728);

(statearr_9780[(12)] = inst_9748);

return statearr_9780;
})();
var statearr_9781_9805 = state_9768__$1;
(statearr_9781_9805[(2)] = null);

(statearr_9781_9805[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9769 === (9))){
var inst_9728 = (state_9768[(8)]);
var inst_9744 = cljs.core.vec(inst_9728);
var state_9768__$1 = state_9768;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_9768__$1,(11),out,inst_9744);
} else {
if((state_val_9769 === (5))){
var inst_9729 = (state_9768[(7)]);
var inst_9732 = (state_9768[(9)]);
var inst_9736 = (state_9768[(10)]);
var inst_9736__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_9732) : f.call(null,inst_9732));
var inst_9737 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_9736__$1,inst_9729);
var inst_9738 = cljs.core.keyword_identical_QMARK_(inst_9729,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_9739 = ((inst_9737) || (inst_9738));
var state_9768__$1 = (function (){var statearr_9782 = state_9768;
(statearr_9782[(10)] = inst_9736__$1);

return statearr_9782;
})();
if(cljs.core.truth_(inst_9739)){
var statearr_9783_9806 = state_9768__$1;
(statearr_9783_9806[(1)] = (8));

} else {
var statearr_9784_9807 = state_9768__$1;
(statearr_9784_9807[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9769 === (14))){
var inst_9761 = (state_9768[(2)]);
var inst_9762 = cljs.core.async.close_BANG_(out);
var state_9768__$1 = (function (){var statearr_9786 = state_9768;
(statearr_9786[(13)] = inst_9761);

return statearr_9786;
})();
var statearr_9787_9808 = state_9768__$1;
(statearr_9787_9808[(2)] = inst_9762);

(statearr_9787_9808[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9769 === (10))){
var inst_9751 = (state_9768[(2)]);
var state_9768__$1 = state_9768;
var statearr_9788_9809 = state_9768__$1;
(statearr_9788_9809[(2)] = inst_9751);

(statearr_9788_9809[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9769 === (8))){
var inst_9728 = (state_9768[(8)]);
var inst_9732 = (state_9768[(9)]);
var inst_9736 = (state_9768[(10)]);
var inst_9741 = inst_9728.push(inst_9732);
var tmp9785 = inst_9728;
var inst_9728__$1 = tmp9785;
var inst_9729 = inst_9736;
var state_9768__$1 = (function (){var statearr_9789 = state_9768;
(statearr_9789[(14)] = inst_9741);

(statearr_9789[(7)] = inst_9729);

(statearr_9789[(8)] = inst_9728__$1);

return statearr_9789;
})();
var statearr_9790_9810 = state_9768__$1;
(statearr_9790_9810[(2)] = null);

(statearr_9790_9810[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7888__auto___9796,out))
;
return ((function (switch__7785__auto__,c__7888__auto___9796,out){
return (function() {
var cljs$core$async$state_machine__7786__auto__ = null;
var cljs$core$async$state_machine__7786__auto____0 = (function (){
var statearr_9791 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9791[(0)] = cljs$core$async$state_machine__7786__auto__);

(statearr_9791[(1)] = (1));

return statearr_9791;
});
var cljs$core$async$state_machine__7786__auto____1 = (function (state_9768){
while(true){
var ret_value__7787__auto__ = (function (){try{while(true){
var result__7788__auto__ = switch__7785__auto__(state_9768);
if(cljs.core.keyword_identical_QMARK_(result__7788__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7788__auto__;
}
break;
}
}catch (e9792){if((e9792 instanceof Object)){
var ex__7789__auto__ = e9792;
var statearr_9793_9811 = state_9768;
(statearr_9793_9811[(5)] = ex__7789__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_9768);

return cljs.core.cst$kw$recur;
} else {
throw e9792;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7787__auto__,cljs.core.cst$kw$recur)){
var G__9812 = state_9768;
state_9768 = G__9812;
continue;
} else {
return ret_value__7787__auto__;
}
break;
}
});
cljs$core$async$state_machine__7786__auto__ = function(state_9768){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7786__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7786__auto____1.call(this,state_9768);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7786__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7786__auto____0;
cljs$core$async$state_machine__7786__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7786__auto____1;
return cljs$core$async$state_machine__7786__auto__;
})()
;})(switch__7785__auto__,c__7888__auto___9796,out))
})();
var state__7890__auto__ = (function (){var statearr_9794 = (f__7889__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7889__auto__.cljs$core$IFn$_invoke$arity$0() : f__7889__auto__.call(null));
(statearr_9794[(6)] = c__7888__auto___9796);

return statearr_9794;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7890__auto__);
});})(c__7888__auto___9796,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

