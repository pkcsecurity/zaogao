// Compiled by ClojureScript 1.10.339 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__6394 = arguments.length;
switch (G__6394) {
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
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async6395 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async6395 = (function (f,blockable,meta6396){
this.f = f;
this.blockable = blockable;
this.meta6396 = meta6396;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async6395.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6397,meta6396__$1){
var self__ = this;
var _6397__$1 = this;
return (new cljs.core.async.t_cljs$core$async6395(self__.f,self__.blockable,meta6396__$1));
});

cljs.core.async.t_cljs$core$async6395.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6397){
var self__ = this;
var _6397__$1 = this;
return self__.meta6396;
});

cljs.core.async.t_cljs$core$async6395.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async6395.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async6395.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async6395.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async6395.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta6396","meta6396",-184487405,null)], null);
});

cljs.core.async.t_cljs$core$async6395.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async6395.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async6395";

cljs.core.async.t_cljs$core$async6395.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async6395");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async6395.
 */
cljs.core.async.__GT_t_cljs$core$async6395 = (function cljs$core$async$__GT_t_cljs$core$async6395(f__$1,blockable__$1,meta6396){
return (new cljs.core.async.t_cljs$core$async6395(f__$1,blockable__$1,meta6396));
});

}

return (new cljs.core.async.t_cljs$core$async6395(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
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
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var G__6401 = arguments.length;
switch (G__6401) {
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
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
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
var G__6404 = arguments.length;
switch (G__6404) {
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
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
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
var G__6407 = arguments.length;
switch (G__6407) {
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
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_6409 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_6409);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_6409,ret){
return (function (){
return fn1.call(null,val_6409);
});})(val_6409,ret))
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
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
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
var G__6411 = arguments.length;
switch (G__6411) {
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
var temp__5535__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5535__auto__)){
var ret = temp__5535__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5535__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5535__auto__)){
var retb = temp__5535__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5535__auto__){
return (function (){
return fn1.call(null,ret);
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
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4408__auto___6413 = n;
var x_6414 = (0);
while(true){
if((x_6414 < n__4408__auto___6413)){
(a[x_6414] = (0));

var G__6415 = (x_6414 + (1));
x_6414 = G__6415;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__6416 = (i + (1));
i = G__6416;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async6417 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async6417 = (function (flag,meta6418){
this.flag = flag;
this.meta6418 = meta6418;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async6417.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_6419,meta6418__$1){
var self__ = this;
var _6419__$1 = this;
return (new cljs.core.async.t_cljs$core$async6417(self__.flag,meta6418__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async6417.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_6419){
var self__ = this;
var _6419__$1 = this;
return self__.meta6418;
});})(flag))
;

cljs.core.async.t_cljs$core$async6417.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async6417.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async6417.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async6417.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async6417.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta6418","meta6418",-1542754207,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async6417.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async6417.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async6417";

cljs.core.async.t_cljs$core$async6417.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async6417");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async6417.
 */
cljs.core.async.__GT_t_cljs$core$async6417 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async6417(flag__$1,meta6418){
return (new cljs.core.async.t_cljs$core$async6417(flag__$1,meta6418));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async6417(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async6420 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async6420 = (function (flag,cb,meta6421){
this.flag = flag;
this.cb = cb;
this.meta6421 = meta6421;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async6420.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6422,meta6421__$1){
var self__ = this;
var _6422__$1 = this;
return (new cljs.core.async.t_cljs$core$async6420(self__.flag,self__.cb,meta6421__$1));
});

cljs.core.async.t_cljs$core$async6420.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6422){
var self__ = this;
var _6422__$1 = this;
return self__.meta6421;
});

cljs.core.async.t_cljs$core$async6420.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async6420.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async6420.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async6420.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async6420.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta6421","meta6421",-910697461,null)], null);
});

cljs.core.async.t_cljs$core$async6420.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async6420.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async6420";

cljs.core.async.t_cljs$core$async6420.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async6420");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async6420.
 */
cljs.core.async.__GT_t_cljs$core$async6420 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async6420(flag__$1,cb__$1,meta6421){
return (new cljs.core.async.t_cljs$core$async6420(flag__$1,cb__$1,meta6421));
});

}

return (new cljs.core.async.t_cljs$core$async6420(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__6423_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__6423_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__6424_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__6424_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3949__auto__ = wport;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return port;
}
})()], null));
} else {
var G__6425 = (i + (1));
i = G__6425;
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
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5537__auto__ = (function (){var and__3938__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3938__auto__;
}
})();
if(cljs.core.truth_(temp__5537__auto__)){
var got = temp__5537__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var len__4531__auto___6431 = arguments.length;
var i__4532__auto___6432 = (0);
while(true){
if((i__4532__auto___6432 < len__4531__auto___6431)){
args__4534__auto__.push((arguments[i__4532__auto___6432]));

var G__6433 = (i__4532__auto___6432 + (1));
i__4532__auto___6432 = G__6433;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__6428){
var map__6429 = p__6428;
var map__6429__$1 = ((((!((map__6429 == null)))?(((((map__6429.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6429.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6429):map__6429);
var opts = map__6429__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq6426){
var G__6427 = cljs.core.first.call(null,seq6426);
var seq6426__$1 = cljs.core.next.call(null,seq6426);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6427,seq6426__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
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
var G__6435 = arguments.length;
switch (G__6435) {
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
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__4470__auto___6481 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__4470__auto___6481){
return (function (){
var f__4471__auto__ = (function (){var switch__4311__auto__ = ((function (c__4470__auto___6481){
return (function (state_6459){
var state_val_6460 = (state_6459[(1)]);
if((state_val_6460 === (7))){
var inst_6455 = (state_6459[(2)]);
var state_6459__$1 = state_6459;
var statearr_6461_6482 = state_6459__$1;
(statearr_6461_6482[(2)] = inst_6455);

(statearr_6461_6482[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6460 === (1))){
var state_6459__$1 = state_6459;
var statearr_6462_6483 = state_6459__$1;
(statearr_6462_6483[(2)] = null);

(statearr_6462_6483[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6460 === (4))){
var inst_6438 = (state_6459[(7)]);
var inst_6438__$1 = (state_6459[(2)]);
var inst_6439 = (inst_6438__$1 == null);
var state_6459__$1 = (function (){var statearr_6463 = state_6459;
(statearr_6463[(7)] = inst_6438__$1);

return statearr_6463;
})();
if(cljs.core.truth_(inst_6439)){
var statearr_6464_6484 = state_6459__$1;
(statearr_6464_6484[(1)] = (5));

} else {
var statearr_6465_6485 = state_6459__$1;
(statearr_6465_6485[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6460 === (13))){
var state_6459__$1 = state_6459;
var statearr_6466_6486 = state_6459__$1;
(statearr_6466_6486[(2)] = null);

(statearr_6466_6486[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6460 === (6))){
var inst_6438 = (state_6459[(7)]);
var state_6459__$1 = state_6459;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6459__$1,(11),to,inst_6438);
} else {
if((state_val_6460 === (3))){
var inst_6457 = (state_6459[(2)]);
var state_6459__$1 = state_6459;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6459__$1,inst_6457);
} else {
if((state_val_6460 === (12))){
var state_6459__$1 = state_6459;
var statearr_6467_6487 = state_6459__$1;
(statearr_6467_6487[(2)] = null);

(statearr_6467_6487[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6460 === (2))){
var state_6459__$1 = state_6459;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6459__$1,(4),from);
} else {
if((state_val_6460 === (11))){
var inst_6448 = (state_6459[(2)]);
var state_6459__$1 = state_6459;
if(cljs.core.truth_(inst_6448)){
var statearr_6468_6488 = state_6459__$1;
(statearr_6468_6488[(1)] = (12));

} else {
var statearr_6469_6489 = state_6459__$1;
(statearr_6469_6489[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6460 === (9))){
var state_6459__$1 = state_6459;
var statearr_6470_6490 = state_6459__$1;
(statearr_6470_6490[(2)] = null);

(statearr_6470_6490[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6460 === (5))){
var state_6459__$1 = state_6459;
if(cljs.core.truth_(close_QMARK_)){
var statearr_6471_6491 = state_6459__$1;
(statearr_6471_6491[(1)] = (8));

} else {
var statearr_6472_6492 = state_6459__$1;
(statearr_6472_6492[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6460 === (14))){
var inst_6453 = (state_6459[(2)]);
var state_6459__$1 = state_6459;
var statearr_6473_6493 = state_6459__$1;
(statearr_6473_6493[(2)] = inst_6453);

(statearr_6473_6493[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6460 === (10))){
var inst_6445 = (state_6459[(2)]);
var state_6459__$1 = state_6459;
var statearr_6474_6494 = state_6459__$1;
(statearr_6474_6494[(2)] = inst_6445);

(statearr_6474_6494[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6460 === (8))){
var inst_6442 = cljs.core.async.close_BANG_.call(null,to);
var state_6459__$1 = state_6459;
var statearr_6475_6495 = state_6459__$1;
(statearr_6475_6495[(2)] = inst_6442);

(statearr_6475_6495[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__4470__auto___6481))
;
return ((function (switch__4311__auto__,c__4470__auto___6481){
return (function() {
var cljs$core$async$state_machine__4312__auto__ = null;
var cljs$core$async$state_machine__4312__auto____0 = (function (){
var statearr_6476 = [null,null,null,null,null,null,null,null];
(statearr_6476[(0)] = cljs$core$async$state_machine__4312__auto__);

(statearr_6476[(1)] = (1));

return statearr_6476;
});
var cljs$core$async$state_machine__4312__auto____1 = (function (state_6459){
while(true){
var ret_value__4313__auto__ = (function (){try{while(true){
var result__4314__auto__ = switch__4311__auto__.call(null,state_6459);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4314__auto__;
}
break;
}
}catch (e6477){if((e6477 instanceof Object)){
var ex__4315__auto__ = e6477;
var statearr_6478_6496 = state_6459;
(statearr_6478_6496[(5)] = ex__4315__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6459);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6477;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6497 = state_6459;
state_6459 = G__6497;
continue;
} else {
return ret_value__4313__auto__;
}
break;
}
});
cljs$core$async$state_machine__4312__auto__ = function(state_6459){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__4312__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__4312__auto____1.call(this,state_6459);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__4312__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__4312__auto____0;
cljs$core$async$state_machine__4312__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__4312__auto____1;
return cljs$core$async$state_machine__4312__auto__;
})()
;})(switch__4311__auto__,c__4470__auto___6481))
})();
var state__4472__auto__ = (function (){var statearr_6479 = f__4471__auto__.call(null);
(statearr_6479[(6)] = c__4470__auto___6481);

return statearr_6479;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4472__auto__);
});})(c__4470__auto___6481))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__6498){
var vec__6499 = p__6498;
var v = cljs.core.nth.call(null,vec__6499,(0),null);
var p = cljs.core.nth.call(null,vec__6499,(1),null);
var job = vec__6499;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__4470__auto___6670 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__4470__auto___6670,res,vec__6499,v,p,job,jobs,results){
return (function (){
var f__4471__auto__ = (function (){var switch__4311__auto__ = ((function (c__4470__auto___6670,res,vec__6499,v,p,job,jobs,results){
return (function (state_6506){
var state_val_6507 = (state_6506[(1)]);
if((state_val_6507 === (1))){
var state_6506__$1 = state_6506;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6506__$1,(2),res,v);
} else {
if((state_val_6507 === (2))){
var inst_6503 = (state_6506[(2)]);
var inst_6504 = cljs.core.async.close_BANG_.call(null,res);
var state_6506__$1 = (function (){var statearr_6508 = state_6506;
(statearr_6508[(7)] = inst_6503);

return statearr_6508;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6506__$1,inst_6504);
} else {
return null;
}
}
});})(c__4470__auto___6670,res,vec__6499,v,p,job,jobs,results))
;
return ((function (switch__4311__auto__,c__4470__auto___6670,res,vec__6499,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__4312__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__4312__auto____0 = (function (){
var statearr_6509 = [null,null,null,null,null,null,null,null];
(statearr_6509[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__4312__auto__);

(statearr_6509[(1)] = (1));

return statearr_6509;
});
var cljs$core$async$pipeline_STAR__$_state_machine__4312__auto____1 = (function (state_6506){
while(true){
var ret_value__4313__auto__ = (function (){try{while(true){
var result__4314__auto__ = switch__4311__auto__.call(null,state_6506);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4314__auto__;
}
break;
}
}catch (e6510){if((e6510 instanceof Object)){
var ex__4315__auto__ = e6510;
var statearr_6511_6671 = state_6506;
(statearr_6511_6671[(5)] = ex__4315__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6506);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6510;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6672 = state_6506;
state_6506 = G__6672;
continue;
} else {
return ret_value__4313__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__4312__auto__ = function(state_6506){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__4312__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__4312__auto____1.call(this,state_6506);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__4312__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__4312__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__4312__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__4312__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__4312__auto__;
})()
;})(switch__4311__auto__,c__4470__auto___6670,res,vec__6499,v,p,job,jobs,results))
})();
var state__4472__auto__ = (function (){var statearr_6512 = f__4471__auto__.call(null);
(statearr_6512[(6)] = c__4470__auto___6670);

return statearr_6512;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4472__auto__);
});})(c__4470__auto___6670,res,vec__6499,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__6513){
var vec__6514 = p__6513;
var v = cljs.core.nth.call(null,vec__6514,(0),null);
var p = cljs.core.nth.call(null,vec__6514,(1),null);
var job = vec__6514;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4408__auto___6673 = n;
var __6674 = (0);
while(true){
if((__6674 < n__4408__auto___6673)){
var G__6517_6675 = type;
var G__6517_6676__$1 = (((G__6517_6675 instanceof cljs.core.Keyword))?G__6517_6675.fqn:null);
switch (G__6517_6676__$1) {
case "compute":
var c__4470__auto___6678 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__6674,c__4470__auto___6678,G__6517_6675,G__6517_6676__$1,n__4408__auto___6673,jobs,results,process,async){
return (function (){
var f__4471__auto__ = (function (){var switch__4311__auto__ = ((function (__6674,c__4470__auto___6678,G__6517_6675,G__6517_6676__$1,n__4408__auto___6673,jobs,results,process,async){
return (function (state_6530){
var state_val_6531 = (state_6530[(1)]);
if((state_val_6531 === (1))){
var state_6530__$1 = state_6530;
var statearr_6532_6679 = state_6530__$1;
(statearr_6532_6679[(2)] = null);

(statearr_6532_6679[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6531 === (2))){
var state_6530__$1 = state_6530;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6530__$1,(4),jobs);
} else {
if((state_val_6531 === (3))){
var inst_6528 = (state_6530[(2)]);
var state_6530__$1 = state_6530;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6530__$1,inst_6528);
} else {
if((state_val_6531 === (4))){
var inst_6520 = (state_6530[(2)]);
var inst_6521 = process.call(null,inst_6520);
var state_6530__$1 = state_6530;
if(cljs.core.truth_(inst_6521)){
var statearr_6533_6680 = state_6530__$1;
(statearr_6533_6680[(1)] = (5));

} else {
var statearr_6534_6681 = state_6530__$1;
(statearr_6534_6681[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6531 === (5))){
var state_6530__$1 = state_6530;
var statearr_6535_6682 = state_6530__$1;
(statearr_6535_6682[(2)] = null);

(statearr_6535_6682[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6531 === (6))){
var state_6530__$1 = state_6530;
var statearr_6536_6683 = state_6530__$1;
(statearr_6536_6683[(2)] = null);

(statearr_6536_6683[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6531 === (7))){
var inst_6526 = (state_6530[(2)]);
var state_6530__$1 = state_6530;
var statearr_6537_6684 = state_6530__$1;
(statearr_6537_6684[(2)] = inst_6526);

(statearr_6537_6684[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__6674,c__4470__auto___6678,G__6517_6675,G__6517_6676__$1,n__4408__auto___6673,jobs,results,process,async))
;
return ((function (__6674,switch__4311__auto__,c__4470__auto___6678,G__6517_6675,G__6517_6676__$1,n__4408__auto___6673,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__4312__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__4312__auto____0 = (function (){
var statearr_6538 = [null,null,null,null,null,null,null];
(statearr_6538[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__4312__auto__);

(statearr_6538[(1)] = (1));

return statearr_6538;
});
var cljs$core$async$pipeline_STAR__$_state_machine__4312__auto____1 = (function (state_6530){
while(true){
var ret_value__4313__auto__ = (function (){try{while(true){
var result__4314__auto__ = switch__4311__auto__.call(null,state_6530);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4314__auto__;
}
break;
}
}catch (e6539){if((e6539 instanceof Object)){
var ex__4315__auto__ = e6539;
var statearr_6540_6685 = state_6530;
(statearr_6540_6685[(5)] = ex__4315__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6530);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6539;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6686 = state_6530;
state_6530 = G__6686;
continue;
} else {
return ret_value__4313__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__4312__auto__ = function(state_6530){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__4312__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__4312__auto____1.call(this,state_6530);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__4312__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__4312__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__4312__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__4312__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__4312__auto__;
})()
;})(__6674,switch__4311__auto__,c__4470__auto___6678,G__6517_6675,G__6517_6676__$1,n__4408__auto___6673,jobs,results,process,async))
})();
var state__4472__auto__ = (function (){var statearr_6541 = f__4471__auto__.call(null);
(statearr_6541[(6)] = c__4470__auto___6678);

return statearr_6541;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4472__auto__);
});})(__6674,c__4470__auto___6678,G__6517_6675,G__6517_6676__$1,n__4408__auto___6673,jobs,results,process,async))
);


break;
case "async":
var c__4470__auto___6687 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__6674,c__4470__auto___6687,G__6517_6675,G__6517_6676__$1,n__4408__auto___6673,jobs,results,process,async){
return (function (){
var f__4471__auto__ = (function (){var switch__4311__auto__ = ((function (__6674,c__4470__auto___6687,G__6517_6675,G__6517_6676__$1,n__4408__auto___6673,jobs,results,process,async){
return (function (state_6554){
var state_val_6555 = (state_6554[(1)]);
if((state_val_6555 === (1))){
var state_6554__$1 = state_6554;
var statearr_6556_6688 = state_6554__$1;
(statearr_6556_6688[(2)] = null);

(statearr_6556_6688[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6555 === (2))){
var state_6554__$1 = state_6554;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6554__$1,(4),jobs);
} else {
if((state_val_6555 === (3))){
var inst_6552 = (state_6554[(2)]);
var state_6554__$1 = state_6554;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6554__$1,inst_6552);
} else {
if((state_val_6555 === (4))){
var inst_6544 = (state_6554[(2)]);
var inst_6545 = async.call(null,inst_6544);
var state_6554__$1 = state_6554;
if(cljs.core.truth_(inst_6545)){
var statearr_6557_6689 = state_6554__$1;
(statearr_6557_6689[(1)] = (5));

} else {
var statearr_6558_6690 = state_6554__$1;
(statearr_6558_6690[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6555 === (5))){
var state_6554__$1 = state_6554;
var statearr_6559_6691 = state_6554__$1;
(statearr_6559_6691[(2)] = null);

(statearr_6559_6691[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6555 === (6))){
var state_6554__$1 = state_6554;
var statearr_6560_6692 = state_6554__$1;
(statearr_6560_6692[(2)] = null);

(statearr_6560_6692[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6555 === (7))){
var inst_6550 = (state_6554[(2)]);
var state_6554__$1 = state_6554;
var statearr_6561_6693 = state_6554__$1;
(statearr_6561_6693[(2)] = inst_6550);

(statearr_6561_6693[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__6674,c__4470__auto___6687,G__6517_6675,G__6517_6676__$1,n__4408__auto___6673,jobs,results,process,async))
;
return ((function (__6674,switch__4311__auto__,c__4470__auto___6687,G__6517_6675,G__6517_6676__$1,n__4408__auto___6673,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__4312__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__4312__auto____0 = (function (){
var statearr_6562 = [null,null,null,null,null,null,null];
(statearr_6562[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__4312__auto__);

(statearr_6562[(1)] = (1));

return statearr_6562;
});
var cljs$core$async$pipeline_STAR__$_state_machine__4312__auto____1 = (function (state_6554){
while(true){
var ret_value__4313__auto__ = (function (){try{while(true){
var result__4314__auto__ = switch__4311__auto__.call(null,state_6554);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4314__auto__;
}
break;
}
}catch (e6563){if((e6563 instanceof Object)){
var ex__4315__auto__ = e6563;
var statearr_6564_6694 = state_6554;
(statearr_6564_6694[(5)] = ex__4315__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6554);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6563;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6695 = state_6554;
state_6554 = G__6695;
continue;
} else {
return ret_value__4313__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__4312__auto__ = function(state_6554){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__4312__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__4312__auto____1.call(this,state_6554);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__4312__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__4312__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__4312__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__4312__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__4312__auto__;
})()
;})(__6674,switch__4311__auto__,c__4470__auto___6687,G__6517_6675,G__6517_6676__$1,n__4408__auto___6673,jobs,results,process,async))
})();
var state__4472__auto__ = (function (){var statearr_6565 = f__4471__auto__.call(null);
(statearr_6565[(6)] = c__4470__auto___6687);

return statearr_6565;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4472__auto__);
});})(__6674,c__4470__auto___6687,G__6517_6675,G__6517_6676__$1,n__4408__auto___6673,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__6517_6676__$1)].join('')));

}

var G__6696 = (__6674 + (1));
__6674 = G__6696;
continue;
} else {
}
break;
}

var c__4470__auto___6697 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__4470__auto___6697,jobs,results,process,async){
return (function (){
var f__4471__auto__ = (function (){var switch__4311__auto__ = ((function (c__4470__auto___6697,jobs,results,process,async){
return (function (state_6587){
var state_val_6588 = (state_6587[(1)]);
if((state_val_6588 === (1))){
var state_6587__$1 = state_6587;
var statearr_6589_6698 = state_6587__$1;
(statearr_6589_6698[(2)] = null);

(statearr_6589_6698[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6588 === (2))){
var state_6587__$1 = state_6587;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6587__$1,(4),from);
} else {
if((state_val_6588 === (3))){
var inst_6585 = (state_6587[(2)]);
var state_6587__$1 = state_6587;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6587__$1,inst_6585);
} else {
if((state_val_6588 === (4))){
var inst_6568 = (state_6587[(7)]);
var inst_6568__$1 = (state_6587[(2)]);
var inst_6569 = (inst_6568__$1 == null);
var state_6587__$1 = (function (){var statearr_6590 = state_6587;
(statearr_6590[(7)] = inst_6568__$1);

return statearr_6590;
})();
if(cljs.core.truth_(inst_6569)){
var statearr_6591_6699 = state_6587__$1;
(statearr_6591_6699[(1)] = (5));

} else {
var statearr_6592_6700 = state_6587__$1;
(statearr_6592_6700[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6588 === (5))){
var inst_6571 = cljs.core.async.close_BANG_.call(null,jobs);
var state_6587__$1 = state_6587;
var statearr_6593_6701 = state_6587__$1;
(statearr_6593_6701[(2)] = inst_6571);

(statearr_6593_6701[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6588 === (6))){
var inst_6573 = (state_6587[(8)]);
var inst_6568 = (state_6587[(7)]);
var inst_6573__$1 = cljs.core.async.chan.call(null,(1));
var inst_6574 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_6575 = [inst_6568,inst_6573__$1];
var inst_6576 = (new cljs.core.PersistentVector(null,2,(5),inst_6574,inst_6575,null));
var state_6587__$1 = (function (){var statearr_6594 = state_6587;
(statearr_6594[(8)] = inst_6573__$1);

return statearr_6594;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6587__$1,(8),jobs,inst_6576);
} else {
if((state_val_6588 === (7))){
var inst_6583 = (state_6587[(2)]);
var state_6587__$1 = state_6587;
var statearr_6595_6702 = state_6587__$1;
(statearr_6595_6702[(2)] = inst_6583);

(statearr_6595_6702[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6588 === (8))){
var inst_6573 = (state_6587[(8)]);
var inst_6578 = (state_6587[(2)]);
var state_6587__$1 = (function (){var statearr_6596 = state_6587;
(statearr_6596[(9)] = inst_6578);

return statearr_6596;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6587__$1,(9),results,inst_6573);
} else {
if((state_val_6588 === (9))){
var inst_6580 = (state_6587[(2)]);
var state_6587__$1 = (function (){var statearr_6597 = state_6587;
(statearr_6597[(10)] = inst_6580);

return statearr_6597;
})();
var statearr_6598_6703 = state_6587__$1;
(statearr_6598_6703[(2)] = null);

(statearr_6598_6703[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__4470__auto___6697,jobs,results,process,async))
;
return ((function (switch__4311__auto__,c__4470__auto___6697,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__4312__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__4312__auto____0 = (function (){
var statearr_6599 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_6599[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__4312__auto__);

(statearr_6599[(1)] = (1));

return statearr_6599;
});
var cljs$core$async$pipeline_STAR__$_state_machine__4312__auto____1 = (function (state_6587){
while(true){
var ret_value__4313__auto__ = (function (){try{while(true){
var result__4314__auto__ = switch__4311__auto__.call(null,state_6587);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4314__auto__;
}
break;
}
}catch (e6600){if((e6600 instanceof Object)){
var ex__4315__auto__ = e6600;
var statearr_6601_6704 = state_6587;
(statearr_6601_6704[(5)] = ex__4315__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6587);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6600;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6705 = state_6587;
state_6587 = G__6705;
continue;
} else {
return ret_value__4313__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__4312__auto__ = function(state_6587){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__4312__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__4312__auto____1.call(this,state_6587);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__4312__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__4312__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__4312__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__4312__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__4312__auto__;
})()
;})(switch__4311__auto__,c__4470__auto___6697,jobs,results,process,async))
})();
var state__4472__auto__ = (function (){var statearr_6602 = f__4471__auto__.call(null);
(statearr_6602[(6)] = c__4470__auto___6697);

return statearr_6602;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4472__auto__);
});})(c__4470__auto___6697,jobs,results,process,async))
);


var c__4470__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__4470__auto__,jobs,results,process,async){
return (function (){
var f__4471__auto__ = (function (){var switch__4311__auto__ = ((function (c__4470__auto__,jobs,results,process,async){
return (function (state_6640){
var state_val_6641 = (state_6640[(1)]);
if((state_val_6641 === (7))){
var inst_6636 = (state_6640[(2)]);
var state_6640__$1 = state_6640;
var statearr_6642_6706 = state_6640__$1;
(statearr_6642_6706[(2)] = inst_6636);

(statearr_6642_6706[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6641 === (20))){
var state_6640__$1 = state_6640;
var statearr_6643_6707 = state_6640__$1;
(statearr_6643_6707[(2)] = null);

(statearr_6643_6707[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6641 === (1))){
var state_6640__$1 = state_6640;
var statearr_6644_6708 = state_6640__$1;
(statearr_6644_6708[(2)] = null);

(statearr_6644_6708[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6641 === (4))){
var inst_6605 = (state_6640[(7)]);
var inst_6605__$1 = (state_6640[(2)]);
var inst_6606 = (inst_6605__$1 == null);
var state_6640__$1 = (function (){var statearr_6645 = state_6640;
(statearr_6645[(7)] = inst_6605__$1);

return statearr_6645;
})();
if(cljs.core.truth_(inst_6606)){
var statearr_6646_6709 = state_6640__$1;
(statearr_6646_6709[(1)] = (5));

} else {
var statearr_6647_6710 = state_6640__$1;
(statearr_6647_6710[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6641 === (15))){
var inst_6618 = (state_6640[(8)]);
var state_6640__$1 = state_6640;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6640__$1,(18),to,inst_6618);
} else {
if((state_val_6641 === (21))){
var inst_6631 = (state_6640[(2)]);
var state_6640__$1 = state_6640;
var statearr_6648_6711 = state_6640__$1;
(statearr_6648_6711[(2)] = inst_6631);

(statearr_6648_6711[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6641 === (13))){
var inst_6633 = (state_6640[(2)]);
var state_6640__$1 = (function (){var statearr_6649 = state_6640;
(statearr_6649[(9)] = inst_6633);

return statearr_6649;
})();
var statearr_6650_6712 = state_6640__$1;
(statearr_6650_6712[(2)] = null);

(statearr_6650_6712[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6641 === (6))){
var inst_6605 = (state_6640[(7)]);
var state_6640__$1 = state_6640;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6640__$1,(11),inst_6605);
} else {
if((state_val_6641 === (17))){
var inst_6626 = (state_6640[(2)]);
var state_6640__$1 = state_6640;
if(cljs.core.truth_(inst_6626)){
var statearr_6651_6713 = state_6640__$1;
(statearr_6651_6713[(1)] = (19));

} else {
var statearr_6652_6714 = state_6640__$1;
(statearr_6652_6714[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6641 === (3))){
var inst_6638 = (state_6640[(2)]);
var state_6640__$1 = state_6640;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6640__$1,inst_6638);
} else {
if((state_val_6641 === (12))){
var inst_6615 = (state_6640[(10)]);
var state_6640__$1 = state_6640;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6640__$1,(14),inst_6615);
} else {
if((state_val_6641 === (2))){
var state_6640__$1 = state_6640;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6640__$1,(4),results);
} else {
if((state_val_6641 === (19))){
var state_6640__$1 = state_6640;
var statearr_6653_6715 = state_6640__$1;
(statearr_6653_6715[(2)] = null);

(statearr_6653_6715[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6641 === (11))){
var inst_6615 = (state_6640[(2)]);
var state_6640__$1 = (function (){var statearr_6654 = state_6640;
(statearr_6654[(10)] = inst_6615);

return statearr_6654;
})();
var statearr_6655_6716 = state_6640__$1;
(statearr_6655_6716[(2)] = null);

(statearr_6655_6716[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6641 === (9))){
var state_6640__$1 = state_6640;
var statearr_6656_6717 = state_6640__$1;
(statearr_6656_6717[(2)] = null);

(statearr_6656_6717[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6641 === (5))){
var state_6640__$1 = state_6640;
if(cljs.core.truth_(close_QMARK_)){
var statearr_6657_6718 = state_6640__$1;
(statearr_6657_6718[(1)] = (8));

} else {
var statearr_6658_6719 = state_6640__$1;
(statearr_6658_6719[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6641 === (14))){
var inst_6618 = (state_6640[(8)]);
var inst_6620 = (state_6640[(11)]);
var inst_6618__$1 = (state_6640[(2)]);
var inst_6619 = (inst_6618__$1 == null);
var inst_6620__$1 = cljs.core.not.call(null,inst_6619);
var state_6640__$1 = (function (){var statearr_6659 = state_6640;
(statearr_6659[(8)] = inst_6618__$1);

(statearr_6659[(11)] = inst_6620__$1);

return statearr_6659;
})();
if(inst_6620__$1){
var statearr_6660_6720 = state_6640__$1;
(statearr_6660_6720[(1)] = (15));

} else {
var statearr_6661_6721 = state_6640__$1;
(statearr_6661_6721[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6641 === (16))){
var inst_6620 = (state_6640[(11)]);
var state_6640__$1 = state_6640;
var statearr_6662_6722 = state_6640__$1;
(statearr_6662_6722[(2)] = inst_6620);

(statearr_6662_6722[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6641 === (10))){
var inst_6612 = (state_6640[(2)]);
var state_6640__$1 = state_6640;
var statearr_6663_6723 = state_6640__$1;
(statearr_6663_6723[(2)] = inst_6612);

(statearr_6663_6723[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6641 === (18))){
var inst_6623 = (state_6640[(2)]);
var state_6640__$1 = state_6640;
var statearr_6664_6724 = state_6640__$1;
(statearr_6664_6724[(2)] = inst_6623);

(statearr_6664_6724[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6641 === (8))){
var inst_6609 = cljs.core.async.close_BANG_.call(null,to);
var state_6640__$1 = state_6640;
var statearr_6665_6725 = state_6640__$1;
(statearr_6665_6725[(2)] = inst_6609);

(statearr_6665_6725[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__4470__auto__,jobs,results,process,async))
;
return ((function (switch__4311__auto__,c__4470__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__4312__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__4312__auto____0 = (function (){
var statearr_6666 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_6666[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__4312__auto__);

(statearr_6666[(1)] = (1));

return statearr_6666;
});
var cljs$core$async$pipeline_STAR__$_state_machine__4312__auto____1 = (function (state_6640){
while(true){
var ret_value__4313__auto__ = (function (){try{while(true){
var result__4314__auto__ = switch__4311__auto__.call(null,state_6640);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4314__auto__;
}
break;
}
}catch (e6667){if((e6667 instanceof Object)){
var ex__4315__auto__ = e6667;
var statearr_6668_6726 = state_6640;
(statearr_6668_6726[(5)] = ex__4315__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6640);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6667;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6727 = state_6640;
state_6640 = G__6727;
continue;
} else {
return ret_value__4313__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__4312__auto__ = function(state_6640){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__4312__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__4312__auto____1.call(this,state_6640);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__4312__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__4312__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__4312__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__4312__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__4312__auto__;
})()
;})(switch__4311__auto__,c__4470__auto__,jobs,results,process,async))
})();
var state__4472__auto__ = (function (){var statearr_6669 = f__4471__auto__.call(null);
(statearr_6669[(6)] = c__4470__auto__);

return statearr_6669;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4472__auto__);
});})(c__4470__auto__,jobs,results,process,async))
);

return c__4470__auto__;
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
var G__6729 = arguments.length;
switch (G__6729) {
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
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
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
var G__6732 = arguments.length;
switch (G__6732) {
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
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
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
var G__6735 = arguments.length;
switch (G__6735) {
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
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__4470__auto___6784 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__4470__auto___6784,tc,fc){
return (function (){
var f__4471__auto__ = (function (){var switch__4311__auto__ = ((function (c__4470__auto___6784,tc,fc){
return (function (state_6761){
var state_val_6762 = (state_6761[(1)]);
if((state_val_6762 === (7))){
var inst_6757 = (state_6761[(2)]);
var state_6761__$1 = state_6761;
var statearr_6763_6785 = state_6761__$1;
(statearr_6763_6785[(2)] = inst_6757);

(statearr_6763_6785[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6762 === (1))){
var state_6761__$1 = state_6761;
var statearr_6764_6786 = state_6761__$1;
(statearr_6764_6786[(2)] = null);

(statearr_6764_6786[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6762 === (4))){
var inst_6738 = (state_6761[(7)]);
var inst_6738__$1 = (state_6761[(2)]);
var inst_6739 = (inst_6738__$1 == null);
var state_6761__$1 = (function (){var statearr_6765 = state_6761;
(statearr_6765[(7)] = inst_6738__$1);

return statearr_6765;
})();
if(cljs.core.truth_(inst_6739)){
var statearr_6766_6787 = state_6761__$1;
(statearr_6766_6787[(1)] = (5));

} else {
var statearr_6767_6788 = state_6761__$1;
(statearr_6767_6788[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6762 === (13))){
var state_6761__$1 = state_6761;
var statearr_6768_6789 = state_6761__$1;
(statearr_6768_6789[(2)] = null);

(statearr_6768_6789[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6762 === (6))){
var inst_6738 = (state_6761[(7)]);
var inst_6744 = p.call(null,inst_6738);
var state_6761__$1 = state_6761;
if(cljs.core.truth_(inst_6744)){
var statearr_6769_6790 = state_6761__$1;
(statearr_6769_6790[(1)] = (9));

} else {
var statearr_6770_6791 = state_6761__$1;
(statearr_6770_6791[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6762 === (3))){
var inst_6759 = (state_6761[(2)]);
var state_6761__$1 = state_6761;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6761__$1,inst_6759);
} else {
if((state_val_6762 === (12))){
var state_6761__$1 = state_6761;
var statearr_6771_6792 = state_6761__$1;
(statearr_6771_6792[(2)] = null);

(statearr_6771_6792[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6762 === (2))){
var state_6761__$1 = state_6761;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6761__$1,(4),ch);
} else {
if((state_val_6762 === (11))){
var inst_6738 = (state_6761[(7)]);
var inst_6748 = (state_6761[(2)]);
var state_6761__$1 = state_6761;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6761__$1,(8),inst_6748,inst_6738);
} else {
if((state_val_6762 === (9))){
var state_6761__$1 = state_6761;
var statearr_6772_6793 = state_6761__$1;
(statearr_6772_6793[(2)] = tc);

(statearr_6772_6793[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6762 === (5))){
var inst_6741 = cljs.core.async.close_BANG_.call(null,tc);
var inst_6742 = cljs.core.async.close_BANG_.call(null,fc);
var state_6761__$1 = (function (){var statearr_6773 = state_6761;
(statearr_6773[(8)] = inst_6741);

return statearr_6773;
})();
var statearr_6774_6794 = state_6761__$1;
(statearr_6774_6794[(2)] = inst_6742);

(statearr_6774_6794[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6762 === (14))){
var inst_6755 = (state_6761[(2)]);
var state_6761__$1 = state_6761;
var statearr_6775_6795 = state_6761__$1;
(statearr_6775_6795[(2)] = inst_6755);

(statearr_6775_6795[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6762 === (10))){
var state_6761__$1 = state_6761;
var statearr_6776_6796 = state_6761__$1;
(statearr_6776_6796[(2)] = fc);

(statearr_6776_6796[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6762 === (8))){
var inst_6750 = (state_6761[(2)]);
var state_6761__$1 = state_6761;
if(cljs.core.truth_(inst_6750)){
var statearr_6777_6797 = state_6761__$1;
(statearr_6777_6797[(1)] = (12));

} else {
var statearr_6778_6798 = state_6761__$1;
(statearr_6778_6798[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__4470__auto___6784,tc,fc))
;
return ((function (switch__4311__auto__,c__4470__auto___6784,tc,fc){
return (function() {
var cljs$core$async$state_machine__4312__auto__ = null;
var cljs$core$async$state_machine__4312__auto____0 = (function (){
var statearr_6779 = [null,null,null,null,null,null,null,null,null];
(statearr_6779[(0)] = cljs$core$async$state_machine__4312__auto__);

(statearr_6779[(1)] = (1));

return statearr_6779;
});
var cljs$core$async$state_machine__4312__auto____1 = (function (state_6761){
while(true){
var ret_value__4313__auto__ = (function (){try{while(true){
var result__4314__auto__ = switch__4311__auto__.call(null,state_6761);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4314__auto__;
}
break;
}
}catch (e6780){if((e6780 instanceof Object)){
var ex__4315__auto__ = e6780;
var statearr_6781_6799 = state_6761;
(statearr_6781_6799[(5)] = ex__4315__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6761);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6780;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6800 = state_6761;
state_6761 = G__6800;
continue;
} else {
return ret_value__4313__auto__;
}
break;
}
});
cljs$core$async$state_machine__4312__auto__ = function(state_6761){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__4312__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__4312__auto____1.call(this,state_6761);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__4312__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__4312__auto____0;
cljs$core$async$state_machine__4312__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__4312__auto____1;
return cljs$core$async$state_machine__4312__auto__;
})()
;})(switch__4311__auto__,c__4470__auto___6784,tc,fc))
})();
var state__4472__auto__ = (function (){var statearr_6782 = f__4471__auto__.call(null);
(statearr_6782[(6)] = c__4470__auto___6784);

return statearr_6782;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4472__auto__);
});})(c__4470__auto___6784,tc,fc))
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
var c__4470__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__4470__auto__){
return (function (){
var f__4471__auto__ = (function (){var switch__4311__auto__ = ((function (c__4470__auto__){
return (function (state_6821){
var state_val_6822 = (state_6821[(1)]);
if((state_val_6822 === (7))){
var inst_6817 = (state_6821[(2)]);
var state_6821__$1 = state_6821;
var statearr_6823_6841 = state_6821__$1;
(statearr_6823_6841[(2)] = inst_6817);

(statearr_6823_6841[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6822 === (1))){
var inst_6801 = init;
var state_6821__$1 = (function (){var statearr_6824 = state_6821;
(statearr_6824[(7)] = inst_6801);

return statearr_6824;
})();
var statearr_6825_6842 = state_6821__$1;
(statearr_6825_6842[(2)] = null);

(statearr_6825_6842[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6822 === (4))){
var inst_6804 = (state_6821[(8)]);
var inst_6804__$1 = (state_6821[(2)]);
var inst_6805 = (inst_6804__$1 == null);
var state_6821__$1 = (function (){var statearr_6826 = state_6821;
(statearr_6826[(8)] = inst_6804__$1);

return statearr_6826;
})();
if(cljs.core.truth_(inst_6805)){
var statearr_6827_6843 = state_6821__$1;
(statearr_6827_6843[(1)] = (5));

} else {
var statearr_6828_6844 = state_6821__$1;
(statearr_6828_6844[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6822 === (6))){
var inst_6801 = (state_6821[(7)]);
var inst_6808 = (state_6821[(9)]);
var inst_6804 = (state_6821[(8)]);
var inst_6808__$1 = f.call(null,inst_6801,inst_6804);
var inst_6809 = cljs.core.reduced_QMARK_.call(null,inst_6808__$1);
var state_6821__$1 = (function (){var statearr_6829 = state_6821;
(statearr_6829[(9)] = inst_6808__$1);

return statearr_6829;
})();
if(inst_6809){
var statearr_6830_6845 = state_6821__$1;
(statearr_6830_6845[(1)] = (8));

} else {
var statearr_6831_6846 = state_6821__$1;
(statearr_6831_6846[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6822 === (3))){
var inst_6819 = (state_6821[(2)]);
var state_6821__$1 = state_6821;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6821__$1,inst_6819);
} else {
if((state_val_6822 === (2))){
var state_6821__$1 = state_6821;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6821__$1,(4),ch);
} else {
if((state_val_6822 === (9))){
var inst_6808 = (state_6821[(9)]);
var inst_6801 = inst_6808;
var state_6821__$1 = (function (){var statearr_6832 = state_6821;
(statearr_6832[(7)] = inst_6801);

return statearr_6832;
})();
var statearr_6833_6847 = state_6821__$1;
(statearr_6833_6847[(2)] = null);

(statearr_6833_6847[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6822 === (5))){
var inst_6801 = (state_6821[(7)]);
var state_6821__$1 = state_6821;
var statearr_6834_6848 = state_6821__$1;
(statearr_6834_6848[(2)] = inst_6801);

(statearr_6834_6848[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6822 === (10))){
var inst_6815 = (state_6821[(2)]);
var state_6821__$1 = state_6821;
var statearr_6835_6849 = state_6821__$1;
(statearr_6835_6849[(2)] = inst_6815);

(statearr_6835_6849[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6822 === (8))){
var inst_6808 = (state_6821[(9)]);
var inst_6811 = cljs.core.deref.call(null,inst_6808);
var state_6821__$1 = state_6821;
var statearr_6836_6850 = state_6821__$1;
(statearr_6836_6850[(2)] = inst_6811);

(statearr_6836_6850[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__4470__auto__))
;
return ((function (switch__4311__auto__,c__4470__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__4312__auto__ = null;
var cljs$core$async$reduce_$_state_machine__4312__auto____0 = (function (){
var statearr_6837 = [null,null,null,null,null,null,null,null,null,null];
(statearr_6837[(0)] = cljs$core$async$reduce_$_state_machine__4312__auto__);

(statearr_6837[(1)] = (1));

return statearr_6837;
});
var cljs$core$async$reduce_$_state_machine__4312__auto____1 = (function (state_6821){
while(true){
var ret_value__4313__auto__ = (function (){try{while(true){
var result__4314__auto__ = switch__4311__auto__.call(null,state_6821);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4314__auto__;
}
break;
}
}catch (e6838){if((e6838 instanceof Object)){
var ex__4315__auto__ = e6838;
var statearr_6839_6851 = state_6821;
(statearr_6839_6851[(5)] = ex__4315__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6821);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6838;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6852 = state_6821;
state_6821 = G__6852;
continue;
} else {
return ret_value__4313__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__4312__auto__ = function(state_6821){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__4312__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__4312__auto____1.call(this,state_6821);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__4312__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__4312__auto____0;
cljs$core$async$reduce_$_state_machine__4312__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__4312__auto____1;
return cljs$core$async$reduce_$_state_machine__4312__auto__;
})()
;})(switch__4311__auto__,c__4470__auto__))
})();
var state__4472__auto__ = (function (){var statearr_6840 = f__4471__auto__.call(null);
(statearr_6840[(6)] = c__4470__auto__);

return statearr_6840;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4472__auto__);
});})(c__4470__auto__))
);

return c__4470__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__4470__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__4470__auto__,f__$1){
return (function (){
var f__4471__auto__ = (function (){var switch__4311__auto__ = ((function (c__4470__auto__,f__$1){
return (function (state_6858){
var state_val_6859 = (state_6858[(1)]);
if((state_val_6859 === (1))){
var inst_6853 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_6858__$1 = state_6858;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6858__$1,(2),inst_6853);
} else {
if((state_val_6859 === (2))){
var inst_6855 = (state_6858[(2)]);
var inst_6856 = f__$1.call(null,inst_6855);
var state_6858__$1 = state_6858;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6858__$1,inst_6856);
} else {
return null;
}
}
});})(c__4470__auto__,f__$1))
;
return ((function (switch__4311__auto__,c__4470__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__4312__auto__ = null;
var cljs$core$async$transduce_$_state_machine__4312__auto____0 = (function (){
var statearr_6860 = [null,null,null,null,null,null,null];
(statearr_6860[(0)] = cljs$core$async$transduce_$_state_machine__4312__auto__);

(statearr_6860[(1)] = (1));

return statearr_6860;
});
var cljs$core$async$transduce_$_state_machine__4312__auto____1 = (function (state_6858){
while(true){
var ret_value__4313__auto__ = (function (){try{while(true){
var result__4314__auto__ = switch__4311__auto__.call(null,state_6858);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4314__auto__;
}
break;
}
}catch (e6861){if((e6861 instanceof Object)){
var ex__4315__auto__ = e6861;
var statearr_6862_6864 = state_6858;
(statearr_6862_6864[(5)] = ex__4315__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6858);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6861;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6865 = state_6858;
state_6858 = G__6865;
continue;
} else {
return ret_value__4313__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__4312__auto__ = function(state_6858){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__4312__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__4312__auto____1.call(this,state_6858);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__4312__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__4312__auto____0;
cljs$core$async$transduce_$_state_machine__4312__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__4312__auto____1;
return cljs$core$async$transduce_$_state_machine__4312__auto__;
})()
;})(switch__4311__auto__,c__4470__auto__,f__$1))
})();
var state__4472__auto__ = (function (){var statearr_6863 = f__4471__auto__.call(null);
(statearr_6863[(6)] = c__4470__auto__);

return statearr_6863;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4472__auto__);
});})(c__4470__auto__,f__$1))
);

return c__4470__auto__;
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
var G__6867 = arguments.length;
switch (G__6867) {
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
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__4470__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__4470__auto__){
return (function (){
var f__4471__auto__ = (function (){var switch__4311__auto__ = ((function (c__4470__auto__){
return (function (state_6892){
var state_val_6893 = (state_6892[(1)]);
if((state_val_6893 === (7))){
var inst_6874 = (state_6892[(2)]);
var state_6892__$1 = state_6892;
var statearr_6894_6915 = state_6892__$1;
(statearr_6894_6915[(2)] = inst_6874);

(statearr_6894_6915[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6893 === (1))){
var inst_6868 = cljs.core.seq.call(null,coll);
var inst_6869 = inst_6868;
var state_6892__$1 = (function (){var statearr_6895 = state_6892;
(statearr_6895[(7)] = inst_6869);

return statearr_6895;
})();
var statearr_6896_6916 = state_6892__$1;
(statearr_6896_6916[(2)] = null);

(statearr_6896_6916[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6893 === (4))){
var inst_6869 = (state_6892[(7)]);
var inst_6872 = cljs.core.first.call(null,inst_6869);
var state_6892__$1 = state_6892;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6892__$1,(7),ch,inst_6872);
} else {
if((state_val_6893 === (13))){
var inst_6886 = (state_6892[(2)]);
var state_6892__$1 = state_6892;
var statearr_6897_6917 = state_6892__$1;
(statearr_6897_6917[(2)] = inst_6886);

(statearr_6897_6917[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6893 === (6))){
var inst_6877 = (state_6892[(2)]);
var state_6892__$1 = state_6892;
if(cljs.core.truth_(inst_6877)){
var statearr_6898_6918 = state_6892__$1;
(statearr_6898_6918[(1)] = (8));

} else {
var statearr_6899_6919 = state_6892__$1;
(statearr_6899_6919[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6893 === (3))){
var inst_6890 = (state_6892[(2)]);
var state_6892__$1 = state_6892;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6892__$1,inst_6890);
} else {
if((state_val_6893 === (12))){
var state_6892__$1 = state_6892;
var statearr_6900_6920 = state_6892__$1;
(statearr_6900_6920[(2)] = null);

(statearr_6900_6920[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6893 === (2))){
var inst_6869 = (state_6892[(7)]);
var state_6892__$1 = state_6892;
if(cljs.core.truth_(inst_6869)){
var statearr_6901_6921 = state_6892__$1;
(statearr_6901_6921[(1)] = (4));

} else {
var statearr_6902_6922 = state_6892__$1;
(statearr_6902_6922[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6893 === (11))){
var inst_6883 = cljs.core.async.close_BANG_.call(null,ch);
var state_6892__$1 = state_6892;
var statearr_6903_6923 = state_6892__$1;
(statearr_6903_6923[(2)] = inst_6883);

(statearr_6903_6923[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6893 === (9))){
var state_6892__$1 = state_6892;
if(cljs.core.truth_(close_QMARK_)){
var statearr_6904_6924 = state_6892__$1;
(statearr_6904_6924[(1)] = (11));

} else {
var statearr_6905_6925 = state_6892__$1;
(statearr_6905_6925[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6893 === (5))){
var inst_6869 = (state_6892[(7)]);
var state_6892__$1 = state_6892;
var statearr_6906_6926 = state_6892__$1;
(statearr_6906_6926[(2)] = inst_6869);

(statearr_6906_6926[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6893 === (10))){
var inst_6888 = (state_6892[(2)]);
var state_6892__$1 = state_6892;
var statearr_6907_6927 = state_6892__$1;
(statearr_6907_6927[(2)] = inst_6888);

(statearr_6907_6927[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6893 === (8))){
var inst_6869 = (state_6892[(7)]);
var inst_6879 = cljs.core.next.call(null,inst_6869);
var inst_6869__$1 = inst_6879;
var state_6892__$1 = (function (){var statearr_6908 = state_6892;
(statearr_6908[(7)] = inst_6869__$1);

return statearr_6908;
})();
var statearr_6909_6928 = state_6892__$1;
(statearr_6909_6928[(2)] = null);

(statearr_6909_6928[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__4470__auto__))
;
return ((function (switch__4311__auto__,c__4470__auto__){
return (function() {
var cljs$core$async$state_machine__4312__auto__ = null;
var cljs$core$async$state_machine__4312__auto____0 = (function (){
var statearr_6910 = [null,null,null,null,null,null,null,null];
(statearr_6910[(0)] = cljs$core$async$state_machine__4312__auto__);

(statearr_6910[(1)] = (1));

return statearr_6910;
});
var cljs$core$async$state_machine__4312__auto____1 = (function (state_6892){
while(true){
var ret_value__4313__auto__ = (function (){try{while(true){
var result__4314__auto__ = switch__4311__auto__.call(null,state_6892);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4314__auto__;
}
break;
}
}catch (e6911){if((e6911 instanceof Object)){
var ex__4315__auto__ = e6911;
var statearr_6912_6929 = state_6892;
(statearr_6912_6929[(5)] = ex__4315__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6892);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6911;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6930 = state_6892;
state_6892 = G__6930;
continue;
} else {
return ret_value__4313__auto__;
}
break;
}
});
cljs$core$async$state_machine__4312__auto__ = function(state_6892){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__4312__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__4312__auto____1.call(this,state_6892);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__4312__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__4312__auto____0;
cljs$core$async$state_machine__4312__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__4312__auto____1;
return cljs$core$async$state_machine__4312__auto__;
})()
;})(switch__4311__auto__,c__4470__auto__))
})();
var state__4472__auto__ = (function (){var statearr_6913 = f__4471__auto__.call(null);
(statearr_6913[(6)] = c__4470__auto__);

return statearr_6913;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4472__auto__);
});})(c__4470__auto__))
);

return c__4470__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

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
return m__4244__auto__.call(null,_);
} else {
var m__4244__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
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
return m__4244__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4244__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
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
return m__4244__auto__.call(null,m,ch);
} else {
var m__4244__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
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
return m__4244__auto__.call(null,m);
} else {
var m__4244__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async6931 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async6931 = (function (ch,cs,meta6932){
this.ch = ch;
this.cs = cs;
this.meta6932 = meta6932;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async6931.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_6933,meta6932__$1){
var self__ = this;
var _6933__$1 = this;
return (new cljs.core.async.t_cljs$core$async6931(self__.ch,self__.cs,meta6932__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async6931.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_6933){
var self__ = this;
var _6933__$1 = this;
return self__.meta6932;
});})(cs))
;

cljs.core.async.t_cljs$core$async6931.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async6931.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async6931.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async6931.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async6931.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async6931.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async6931.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta6932","meta6932",-106222734,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async6931.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async6931.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async6931";

cljs.core.async.t_cljs$core$async6931.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async6931");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async6931.
 */
cljs.core.async.__GT_t_cljs$core$async6931 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async6931(ch__$1,cs__$1,meta6932){
return (new cljs.core.async.t_cljs$core$async6931(ch__$1,cs__$1,meta6932));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async6931(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__4470__auto___7153 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__4470__auto___7153,cs,m,dchan,dctr,done){
return (function (){
var f__4471__auto__ = (function (){var switch__4311__auto__ = ((function (c__4470__auto___7153,cs,m,dchan,dctr,done){
return (function (state_7068){
var state_val_7069 = (state_7068[(1)]);
if((state_val_7069 === (7))){
var inst_7064 = (state_7068[(2)]);
var state_7068__$1 = state_7068;
var statearr_7070_7154 = state_7068__$1;
(statearr_7070_7154[(2)] = inst_7064);

(statearr_7070_7154[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7069 === (20))){
var inst_6967 = (state_7068[(7)]);
var inst_6979 = cljs.core.first.call(null,inst_6967);
var inst_6980 = cljs.core.nth.call(null,inst_6979,(0),null);
var inst_6981 = cljs.core.nth.call(null,inst_6979,(1),null);
var state_7068__$1 = (function (){var statearr_7071 = state_7068;
(statearr_7071[(8)] = inst_6980);

return statearr_7071;
})();
if(cljs.core.truth_(inst_6981)){
var statearr_7072_7155 = state_7068__$1;
(statearr_7072_7155[(1)] = (22));

} else {
var statearr_7073_7156 = state_7068__$1;
(statearr_7073_7156[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7069 === (27))){
var inst_7009 = (state_7068[(9)]);
var inst_7016 = (state_7068[(10)]);
var inst_6936 = (state_7068[(11)]);
var inst_7011 = (state_7068[(12)]);
var inst_7016__$1 = cljs.core._nth.call(null,inst_7009,inst_7011);
var inst_7017 = cljs.core.async.put_BANG_.call(null,inst_7016__$1,inst_6936,done);
var state_7068__$1 = (function (){var statearr_7074 = state_7068;
(statearr_7074[(10)] = inst_7016__$1);

return statearr_7074;
})();
if(cljs.core.truth_(inst_7017)){
var statearr_7075_7157 = state_7068__$1;
(statearr_7075_7157[(1)] = (30));

} else {
var statearr_7076_7158 = state_7068__$1;
(statearr_7076_7158[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7069 === (1))){
var state_7068__$1 = state_7068;
var statearr_7077_7159 = state_7068__$1;
(statearr_7077_7159[(2)] = null);

(statearr_7077_7159[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7069 === (24))){
var inst_6967 = (state_7068[(7)]);
var inst_6986 = (state_7068[(2)]);
var inst_6987 = cljs.core.next.call(null,inst_6967);
var inst_6945 = inst_6987;
var inst_6946 = null;
var inst_6947 = (0);
var inst_6948 = (0);
var state_7068__$1 = (function (){var statearr_7078 = state_7068;
(statearr_7078[(13)] = inst_6947);

(statearr_7078[(14)] = inst_6948);

(statearr_7078[(15)] = inst_6986);

(statearr_7078[(16)] = inst_6945);

(statearr_7078[(17)] = inst_6946);

return statearr_7078;
})();
var statearr_7079_7160 = state_7068__$1;
(statearr_7079_7160[(2)] = null);

(statearr_7079_7160[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7069 === (39))){
var state_7068__$1 = state_7068;
var statearr_7083_7161 = state_7068__$1;
(statearr_7083_7161[(2)] = null);

(statearr_7083_7161[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7069 === (4))){
var inst_6936 = (state_7068[(11)]);
var inst_6936__$1 = (state_7068[(2)]);
var inst_6937 = (inst_6936__$1 == null);
var state_7068__$1 = (function (){var statearr_7084 = state_7068;
(statearr_7084[(11)] = inst_6936__$1);

return statearr_7084;
})();
if(cljs.core.truth_(inst_6937)){
var statearr_7085_7162 = state_7068__$1;
(statearr_7085_7162[(1)] = (5));

} else {
var statearr_7086_7163 = state_7068__$1;
(statearr_7086_7163[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7069 === (15))){
var inst_6947 = (state_7068[(13)]);
var inst_6948 = (state_7068[(14)]);
var inst_6945 = (state_7068[(16)]);
var inst_6946 = (state_7068[(17)]);
var inst_6963 = (state_7068[(2)]);
var inst_6964 = (inst_6948 + (1));
var tmp7080 = inst_6947;
var tmp7081 = inst_6945;
var tmp7082 = inst_6946;
var inst_6945__$1 = tmp7081;
var inst_6946__$1 = tmp7082;
var inst_6947__$1 = tmp7080;
var inst_6948__$1 = inst_6964;
var state_7068__$1 = (function (){var statearr_7087 = state_7068;
(statearr_7087[(13)] = inst_6947__$1);

(statearr_7087[(14)] = inst_6948__$1);

(statearr_7087[(16)] = inst_6945__$1);

(statearr_7087[(18)] = inst_6963);

(statearr_7087[(17)] = inst_6946__$1);

return statearr_7087;
})();
var statearr_7088_7164 = state_7068__$1;
(statearr_7088_7164[(2)] = null);

(statearr_7088_7164[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7069 === (21))){
var inst_6990 = (state_7068[(2)]);
var state_7068__$1 = state_7068;
var statearr_7092_7165 = state_7068__$1;
(statearr_7092_7165[(2)] = inst_6990);

(statearr_7092_7165[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7069 === (31))){
var inst_7016 = (state_7068[(10)]);
var inst_7020 = done.call(null,null);
var inst_7021 = cljs.core.async.untap_STAR_.call(null,m,inst_7016);
var state_7068__$1 = (function (){var statearr_7093 = state_7068;
(statearr_7093[(19)] = inst_7020);

return statearr_7093;
})();
var statearr_7094_7166 = state_7068__$1;
(statearr_7094_7166[(2)] = inst_7021);

(statearr_7094_7166[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7069 === (32))){
var inst_7010 = (state_7068[(20)]);
var inst_7009 = (state_7068[(9)]);
var inst_7011 = (state_7068[(12)]);
var inst_7008 = (state_7068[(21)]);
var inst_7023 = (state_7068[(2)]);
var inst_7024 = (inst_7011 + (1));
var tmp7089 = inst_7010;
var tmp7090 = inst_7009;
var tmp7091 = inst_7008;
var inst_7008__$1 = tmp7091;
var inst_7009__$1 = tmp7090;
var inst_7010__$1 = tmp7089;
var inst_7011__$1 = inst_7024;
var state_7068__$1 = (function (){var statearr_7095 = state_7068;
(statearr_7095[(20)] = inst_7010__$1);

(statearr_7095[(9)] = inst_7009__$1);

(statearr_7095[(12)] = inst_7011__$1);

(statearr_7095[(21)] = inst_7008__$1);

(statearr_7095[(22)] = inst_7023);

return statearr_7095;
})();
var statearr_7096_7167 = state_7068__$1;
(statearr_7096_7167[(2)] = null);

(statearr_7096_7167[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7069 === (40))){
var inst_7036 = (state_7068[(23)]);
var inst_7040 = done.call(null,null);
var inst_7041 = cljs.core.async.untap_STAR_.call(null,m,inst_7036);
var state_7068__$1 = (function (){var statearr_7097 = state_7068;
(statearr_7097[(24)] = inst_7040);

return statearr_7097;
})();
var statearr_7098_7168 = state_7068__$1;
(statearr_7098_7168[(2)] = inst_7041);

(statearr_7098_7168[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7069 === (33))){
var inst_7027 = (state_7068[(25)]);
var inst_7029 = cljs.core.chunked_seq_QMARK_.call(null,inst_7027);
var state_7068__$1 = state_7068;
if(inst_7029){
var statearr_7099_7169 = state_7068__$1;
(statearr_7099_7169[(1)] = (36));

} else {
var statearr_7100_7170 = state_7068__$1;
(statearr_7100_7170[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7069 === (13))){
var inst_6957 = (state_7068[(26)]);
var inst_6960 = cljs.core.async.close_BANG_.call(null,inst_6957);
var state_7068__$1 = state_7068;
var statearr_7101_7171 = state_7068__$1;
(statearr_7101_7171[(2)] = inst_6960);

(statearr_7101_7171[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7069 === (22))){
var inst_6980 = (state_7068[(8)]);
var inst_6983 = cljs.core.async.close_BANG_.call(null,inst_6980);
var state_7068__$1 = state_7068;
var statearr_7102_7172 = state_7068__$1;
(statearr_7102_7172[(2)] = inst_6983);

(statearr_7102_7172[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7069 === (36))){
var inst_7027 = (state_7068[(25)]);
var inst_7031 = cljs.core.chunk_first.call(null,inst_7027);
var inst_7032 = cljs.core.chunk_rest.call(null,inst_7027);
var inst_7033 = cljs.core.count.call(null,inst_7031);
var inst_7008 = inst_7032;
var inst_7009 = inst_7031;
var inst_7010 = inst_7033;
var inst_7011 = (0);
var state_7068__$1 = (function (){var statearr_7103 = state_7068;
(statearr_7103[(20)] = inst_7010);

(statearr_7103[(9)] = inst_7009);

(statearr_7103[(12)] = inst_7011);

(statearr_7103[(21)] = inst_7008);

return statearr_7103;
})();
var statearr_7104_7173 = state_7068__$1;
(statearr_7104_7173[(2)] = null);

(statearr_7104_7173[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7069 === (41))){
var inst_7027 = (state_7068[(25)]);
var inst_7043 = (state_7068[(2)]);
var inst_7044 = cljs.core.next.call(null,inst_7027);
var inst_7008 = inst_7044;
var inst_7009 = null;
var inst_7010 = (0);
var inst_7011 = (0);
var state_7068__$1 = (function (){var statearr_7105 = state_7068;
(statearr_7105[(20)] = inst_7010);

(statearr_7105[(9)] = inst_7009);

(statearr_7105[(12)] = inst_7011);

(statearr_7105[(27)] = inst_7043);

(statearr_7105[(21)] = inst_7008);

return statearr_7105;
})();
var statearr_7106_7174 = state_7068__$1;
(statearr_7106_7174[(2)] = null);

(statearr_7106_7174[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7069 === (43))){
var state_7068__$1 = state_7068;
var statearr_7107_7175 = state_7068__$1;
(statearr_7107_7175[(2)] = null);

(statearr_7107_7175[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7069 === (29))){
var inst_7052 = (state_7068[(2)]);
var state_7068__$1 = state_7068;
var statearr_7108_7176 = state_7068__$1;
(statearr_7108_7176[(2)] = inst_7052);

(statearr_7108_7176[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7069 === (44))){
var inst_7061 = (state_7068[(2)]);
var state_7068__$1 = (function (){var statearr_7109 = state_7068;
(statearr_7109[(28)] = inst_7061);

return statearr_7109;
})();
var statearr_7110_7177 = state_7068__$1;
(statearr_7110_7177[(2)] = null);

(statearr_7110_7177[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7069 === (6))){
var inst_7000 = (state_7068[(29)]);
var inst_6999 = cljs.core.deref.call(null,cs);
var inst_7000__$1 = cljs.core.keys.call(null,inst_6999);
var inst_7001 = cljs.core.count.call(null,inst_7000__$1);
var inst_7002 = cljs.core.reset_BANG_.call(null,dctr,inst_7001);
var inst_7007 = cljs.core.seq.call(null,inst_7000__$1);
var inst_7008 = inst_7007;
var inst_7009 = null;
var inst_7010 = (0);
var inst_7011 = (0);
var state_7068__$1 = (function (){var statearr_7111 = state_7068;
(statearr_7111[(29)] = inst_7000__$1);

(statearr_7111[(20)] = inst_7010);

(statearr_7111[(9)] = inst_7009);

(statearr_7111[(30)] = inst_7002);

(statearr_7111[(12)] = inst_7011);

(statearr_7111[(21)] = inst_7008);

return statearr_7111;
})();
var statearr_7112_7178 = state_7068__$1;
(statearr_7112_7178[(2)] = null);

(statearr_7112_7178[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7069 === (28))){
var inst_7027 = (state_7068[(25)]);
var inst_7008 = (state_7068[(21)]);
var inst_7027__$1 = cljs.core.seq.call(null,inst_7008);
var state_7068__$1 = (function (){var statearr_7113 = state_7068;
(statearr_7113[(25)] = inst_7027__$1);

return statearr_7113;
})();
if(inst_7027__$1){
var statearr_7114_7179 = state_7068__$1;
(statearr_7114_7179[(1)] = (33));

} else {
var statearr_7115_7180 = state_7068__$1;
(statearr_7115_7180[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7069 === (25))){
var inst_7010 = (state_7068[(20)]);
var inst_7011 = (state_7068[(12)]);
var inst_7013 = (inst_7011 < inst_7010);
var inst_7014 = inst_7013;
var state_7068__$1 = state_7068;
if(cljs.core.truth_(inst_7014)){
var statearr_7116_7181 = state_7068__$1;
(statearr_7116_7181[(1)] = (27));

} else {
var statearr_7117_7182 = state_7068__$1;
(statearr_7117_7182[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7069 === (34))){
var state_7068__$1 = state_7068;
var statearr_7118_7183 = state_7068__$1;
(statearr_7118_7183[(2)] = null);

(statearr_7118_7183[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7069 === (17))){
var state_7068__$1 = state_7068;
var statearr_7119_7184 = state_7068__$1;
(statearr_7119_7184[(2)] = null);

(statearr_7119_7184[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7069 === (3))){
var inst_7066 = (state_7068[(2)]);
var state_7068__$1 = state_7068;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7068__$1,inst_7066);
} else {
if((state_val_7069 === (12))){
var inst_6995 = (state_7068[(2)]);
var state_7068__$1 = state_7068;
var statearr_7120_7185 = state_7068__$1;
(statearr_7120_7185[(2)] = inst_6995);

(statearr_7120_7185[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7069 === (2))){
var state_7068__$1 = state_7068;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7068__$1,(4),ch);
} else {
if((state_val_7069 === (23))){
var state_7068__$1 = state_7068;
var statearr_7121_7186 = state_7068__$1;
(statearr_7121_7186[(2)] = null);

(statearr_7121_7186[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7069 === (35))){
var inst_7050 = (state_7068[(2)]);
var state_7068__$1 = state_7068;
var statearr_7122_7187 = state_7068__$1;
(statearr_7122_7187[(2)] = inst_7050);

(statearr_7122_7187[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7069 === (19))){
var inst_6967 = (state_7068[(7)]);
var inst_6971 = cljs.core.chunk_first.call(null,inst_6967);
var inst_6972 = cljs.core.chunk_rest.call(null,inst_6967);
var inst_6973 = cljs.core.count.call(null,inst_6971);
var inst_6945 = inst_6972;
var inst_6946 = inst_6971;
var inst_6947 = inst_6973;
var inst_6948 = (0);
var state_7068__$1 = (function (){var statearr_7123 = state_7068;
(statearr_7123[(13)] = inst_6947);

(statearr_7123[(14)] = inst_6948);

(statearr_7123[(16)] = inst_6945);

(statearr_7123[(17)] = inst_6946);

return statearr_7123;
})();
var statearr_7124_7188 = state_7068__$1;
(statearr_7124_7188[(2)] = null);

(statearr_7124_7188[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7069 === (11))){
var inst_6945 = (state_7068[(16)]);
var inst_6967 = (state_7068[(7)]);
var inst_6967__$1 = cljs.core.seq.call(null,inst_6945);
var state_7068__$1 = (function (){var statearr_7125 = state_7068;
(statearr_7125[(7)] = inst_6967__$1);

return statearr_7125;
})();
if(inst_6967__$1){
var statearr_7126_7189 = state_7068__$1;
(statearr_7126_7189[(1)] = (16));

} else {
var statearr_7127_7190 = state_7068__$1;
(statearr_7127_7190[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7069 === (9))){
var inst_6997 = (state_7068[(2)]);
var state_7068__$1 = state_7068;
var statearr_7128_7191 = state_7068__$1;
(statearr_7128_7191[(2)] = inst_6997);

(statearr_7128_7191[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7069 === (5))){
var inst_6943 = cljs.core.deref.call(null,cs);
var inst_6944 = cljs.core.seq.call(null,inst_6943);
var inst_6945 = inst_6944;
var inst_6946 = null;
var inst_6947 = (0);
var inst_6948 = (0);
var state_7068__$1 = (function (){var statearr_7129 = state_7068;
(statearr_7129[(13)] = inst_6947);

(statearr_7129[(14)] = inst_6948);

(statearr_7129[(16)] = inst_6945);

(statearr_7129[(17)] = inst_6946);

return statearr_7129;
})();
var statearr_7130_7192 = state_7068__$1;
(statearr_7130_7192[(2)] = null);

(statearr_7130_7192[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7069 === (14))){
var state_7068__$1 = state_7068;
var statearr_7131_7193 = state_7068__$1;
(statearr_7131_7193[(2)] = null);

(statearr_7131_7193[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7069 === (45))){
var inst_7058 = (state_7068[(2)]);
var state_7068__$1 = state_7068;
var statearr_7132_7194 = state_7068__$1;
(statearr_7132_7194[(2)] = inst_7058);

(statearr_7132_7194[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7069 === (26))){
var inst_7000 = (state_7068[(29)]);
var inst_7054 = (state_7068[(2)]);
var inst_7055 = cljs.core.seq.call(null,inst_7000);
var state_7068__$1 = (function (){var statearr_7133 = state_7068;
(statearr_7133[(31)] = inst_7054);

return statearr_7133;
})();
if(inst_7055){
var statearr_7134_7195 = state_7068__$1;
(statearr_7134_7195[(1)] = (42));

} else {
var statearr_7135_7196 = state_7068__$1;
(statearr_7135_7196[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7069 === (16))){
var inst_6967 = (state_7068[(7)]);
var inst_6969 = cljs.core.chunked_seq_QMARK_.call(null,inst_6967);
var state_7068__$1 = state_7068;
if(inst_6969){
var statearr_7136_7197 = state_7068__$1;
(statearr_7136_7197[(1)] = (19));

} else {
var statearr_7137_7198 = state_7068__$1;
(statearr_7137_7198[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7069 === (38))){
var inst_7047 = (state_7068[(2)]);
var state_7068__$1 = state_7068;
var statearr_7138_7199 = state_7068__$1;
(statearr_7138_7199[(2)] = inst_7047);

(statearr_7138_7199[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7069 === (30))){
var state_7068__$1 = state_7068;
var statearr_7139_7200 = state_7068__$1;
(statearr_7139_7200[(2)] = null);

(statearr_7139_7200[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7069 === (10))){
var inst_6948 = (state_7068[(14)]);
var inst_6946 = (state_7068[(17)]);
var inst_6956 = cljs.core._nth.call(null,inst_6946,inst_6948);
var inst_6957 = cljs.core.nth.call(null,inst_6956,(0),null);
var inst_6958 = cljs.core.nth.call(null,inst_6956,(1),null);
var state_7068__$1 = (function (){var statearr_7140 = state_7068;
(statearr_7140[(26)] = inst_6957);

return statearr_7140;
})();
if(cljs.core.truth_(inst_6958)){
var statearr_7141_7201 = state_7068__$1;
(statearr_7141_7201[(1)] = (13));

} else {
var statearr_7142_7202 = state_7068__$1;
(statearr_7142_7202[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7069 === (18))){
var inst_6993 = (state_7068[(2)]);
var state_7068__$1 = state_7068;
var statearr_7143_7203 = state_7068__$1;
(statearr_7143_7203[(2)] = inst_6993);

(statearr_7143_7203[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7069 === (42))){
var state_7068__$1 = state_7068;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7068__$1,(45),dchan);
} else {
if((state_val_7069 === (37))){
var inst_7027 = (state_7068[(25)]);
var inst_6936 = (state_7068[(11)]);
var inst_7036 = (state_7068[(23)]);
var inst_7036__$1 = cljs.core.first.call(null,inst_7027);
var inst_7037 = cljs.core.async.put_BANG_.call(null,inst_7036__$1,inst_6936,done);
var state_7068__$1 = (function (){var statearr_7144 = state_7068;
(statearr_7144[(23)] = inst_7036__$1);

return statearr_7144;
})();
if(cljs.core.truth_(inst_7037)){
var statearr_7145_7204 = state_7068__$1;
(statearr_7145_7204[(1)] = (39));

} else {
var statearr_7146_7205 = state_7068__$1;
(statearr_7146_7205[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7069 === (8))){
var inst_6947 = (state_7068[(13)]);
var inst_6948 = (state_7068[(14)]);
var inst_6950 = (inst_6948 < inst_6947);
var inst_6951 = inst_6950;
var state_7068__$1 = state_7068;
if(cljs.core.truth_(inst_6951)){
var statearr_7147_7206 = state_7068__$1;
(statearr_7147_7206[(1)] = (10));

} else {
var statearr_7148_7207 = state_7068__$1;
(statearr_7148_7207[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__4470__auto___7153,cs,m,dchan,dctr,done))
;
return ((function (switch__4311__auto__,c__4470__auto___7153,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__4312__auto__ = null;
var cljs$core$async$mult_$_state_machine__4312__auto____0 = (function (){
var statearr_7149 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_7149[(0)] = cljs$core$async$mult_$_state_machine__4312__auto__);

(statearr_7149[(1)] = (1));

return statearr_7149;
});
var cljs$core$async$mult_$_state_machine__4312__auto____1 = (function (state_7068){
while(true){
var ret_value__4313__auto__ = (function (){try{while(true){
var result__4314__auto__ = switch__4311__auto__.call(null,state_7068);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4314__auto__;
}
break;
}
}catch (e7150){if((e7150 instanceof Object)){
var ex__4315__auto__ = e7150;
var statearr_7151_7208 = state_7068;
(statearr_7151_7208[(5)] = ex__4315__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7068);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7150;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7209 = state_7068;
state_7068 = G__7209;
continue;
} else {
return ret_value__4313__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__4312__auto__ = function(state_7068){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__4312__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__4312__auto____1.call(this,state_7068);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__4312__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__4312__auto____0;
cljs$core$async$mult_$_state_machine__4312__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__4312__auto____1;
return cljs$core$async$mult_$_state_machine__4312__auto__;
})()
;})(switch__4311__auto__,c__4470__auto___7153,cs,m,dchan,dctr,done))
})();
var state__4472__auto__ = (function (){var statearr_7152 = f__4471__auto__.call(null);
(statearr_7152[(6)] = c__4470__auto___7153);

return statearr_7152;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4472__auto__);
});})(c__4470__auto___7153,cs,m,dchan,dctr,done))
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
var G__7211 = arguments.length;
switch (G__7211) {
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
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
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
return m__4244__auto__.call(null,m,ch);
} else {
var m__4244__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
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
return m__4244__auto__.call(null,m,ch);
} else {
var m__4244__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
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
return m__4244__auto__.call(null,m);
} else {
var m__4244__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
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
return m__4244__auto__.call(null,m,state_map);
} else {
var m__4244__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
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
return m__4244__auto__.call(null,m,mode);
} else {
var m__4244__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___7223 = arguments.length;
var i__4532__auto___7224 = (0);
while(true){
if((i__4532__auto___7224 < len__4531__auto___7223)){
args__4534__auto__.push((arguments[i__4532__auto___7224]));

var G__7225 = (i__4532__auto___7224 + (1));
i__4532__auto___7224 = G__7225;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__7217){
var map__7218 = p__7217;
var map__7218__$1 = ((((!((map__7218 == null)))?(((((map__7218.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7218.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7218):map__7218);
var opts = map__7218__$1;
var statearr_7220_7226 = state;
(statearr_7220_7226[(1)] = cont_block);


var temp__5537__auto__ = cljs.core.async.do_alts.call(null,((function (map__7218,map__7218__$1,opts){
return (function (val){
var statearr_7221_7227 = state;
(statearr_7221_7227[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__7218,map__7218__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5537__auto__)){
var cb = temp__5537__auto__;
var statearr_7222_7228 = state;
(statearr_7222_7228[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq7213){
var G__7214 = cljs.core.first.call(null,seq7213);
var seq7213__$1 = cljs.core.next.call(null,seq7213);
var G__7215 = cljs.core.first.call(null,seq7213__$1);
var seq7213__$2 = cljs.core.next.call(null,seq7213__$1);
var G__7216 = cljs.core.first.call(null,seq7213__$2);
var seq7213__$3 = cljs.core.next.call(null,seq7213__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7214,G__7215,G__7216,seq7213__$3);
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos)))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async7229 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async7229 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta7230){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta7230 = meta7230;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async7229.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_7231,meta7230__$1){
var self__ = this;
var _7231__$1 = this;
return (new cljs.core.async.t_cljs$core$async7229(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta7230__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async7229.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_7231){
var self__ = this;
var _7231__$1 = this;
return self__.meta7230;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async7229.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async7229.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async7229.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async7229.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async7229.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async7229.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async7229.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async7229.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async7229.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta7230","meta7230",1129732092,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async7229.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async7229.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async7229";

cljs.core.async.t_cljs$core$async7229.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async7229");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async7229.
 */
cljs.core.async.__GT_t_cljs$core$async7229 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async7229(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta7230){
return (new cljs.core.async.t_cljs$core$async7229(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta7230));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async7229(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__4470__auto___7393 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__4470__auto___7393,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__4471__auto__ = (function (){var switch__4311__auto__ = ((function (c__4470__auto___7393,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_7333){
var state_val_7334 = (state_7333[(1)]);
if((state_val_7334 === (7))){
var inst_7248 = (state_7333[(2)]);
var state_7333__$1 = state_7333;
var statearr_7335_7394 = state_7333__$1;
(statearr_7335_7394[(2)] = inst_7248);

(statearr_7335_7394[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7334 === (20))){
var inst_7260 = (state_7333[(7)]);
var state_7333__$1 = state_7333;
var statearr_7336_7395 = state_7333__$1;
(statearr_7336_7395[(2)] = inst_7260);

(statearr_7336_7395[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7334 === (27))){
var state_7333__$1 = state_7333;
var statearr_7337_7396 = state_7333__$1;
(statearr_7337_7396[(2)] = null);

(statearr_7337_7396[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7334 === (1))){
var inst_7235 = (state_7333[(8)]);
var inst_7235__$1 = calc_state.call(null);
var inst_7237 = (inst_7235__$1 == null);
var inst_7238 = cljs.core.not.call(null,inst_7237);
var state_7333__$1 = (function (){var statearr_7338 = state_7333;
(statearr_7338[(8)] = inst_7235__$1);

return statearr_7338;
})();
if(inst_7238){
var statearr_7339_7397 = state_7333__$1;
(statearr_7339_7397[(1)] = (2));

} else {
var statearr_7340_7398 = state_7333__$1;
(statearr_7340_7398[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7334 === (24))){
var inst_7284 = (state_7333[(9)]);
var inst_7307 = (state_7333[(10)]);
var inst_7293 = (state_7333[(11)]);
var inst_7307__$1 = inst_7284.call(null,inst_7293);
var state_7333__$1 = (function (){var statearr_7341 = state_7333;
(statearr_7341[(10)] = inst_7307__$1);

return statearr_7341;
})();
if(cljs.core.truth_(inst_7307__$1)){
var statearr_7342_7399 = state_7333__$1;
(statearr_7342_7399[(1)] = (29));

} else {
var statearr_7343_7400 = state_7333__$1;
(statearr_7343_7400[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7334 === (4))){
var inst_7251 = (state_7333[(2)]);
var state_7333__$1 = state_7333;
if(cljs.core.truth_(inst_7251)){
var statearr_7344_7401 = state_7333__$1;
(statearr_7344_7401[(1)] = (8));

} else {
var statearr_7345_7402 = state_7333__$1;
(statearr_7345_7402[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7334 === (15))){
var inst_7278 = (state_7333[(2)]);
var state_7333__$1 = state_7333;
if(cljs.core.truth_(inst_7278)){
var statearr_7346_7403 = state_7333__$1;
(statearr_7346_7403[(1)] = (19));

} else {
var statearr_7347_7404 = state_7333__$1;
(statearr_7347_7404[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7334 === (21))){
var inst_7283 = (state_7333[(12)]);
var inst_7283__$1 = (state_7333[(2)]);
var inst_7284 = cljs.core.get.call(null,inst_7283__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_7285 = cljs.core.get.call(null,inst_7283__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_7286 = cljs.core.get.call(null,inst_7283__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_7333__$1 = (function (){var statearr_7348 = state_7333;
(statearr_7348[(9)] = inst_7284);

(statearr_7348[(12)] = inst_7283__$1);

(statearr_7348[(13)] = inst_7285);

return statearr_7348;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_7333__$1,(22),inst_7286);
} else {
if((state_val_7334 === (31))){
var inst_7315 = (state_7333[(2)]);
var state_7333__$1 = state_7333;
if(cljs.core.truth_(inst_7315)){
var statearr_7349_7405 = state_7333__$1;
(statearr_7349_7405[(1)] = (32));

} else {
var statearr_7350_7406 = state_7333__$1;
(statearr_7350_7406[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7334 === (32))){
var inst_7292 = (state_7333[(14)]);
var state_7333__$1 = state_7333;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7333__$1,(35),out,inst_7292);
} else {
if((state_val_7334 === (33))){
var inst_7283 = (state_7333[(12)]);
var inst_7260 = inst_7283;
var state_7333__$1 = (function (){var statearr_7351 = state_7333;
(statearr_7351[(7)] = inst_7260);

return statearr_7351;
})();
var statearr_7352_7407 = state_7333__$1;
(statearr_7352_7407[(2)] = null);

(statearr_7352_7407[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7334 === (13))){
var inst_7260 = (state_7333[(7)]);
var inst_7267 = inst_7260.cljs$lang$protocol_mask$partition0$;
var inst_7268 = (inst_7267 & (64));
var inst_7269 = inst_7260.cljs$core$ISeq$;
var inst_7270 = (cljs.core.PROTOCOL_SENTINEL === inst_7269);
var inst_7271 = ((inst_7268) || (inst_7270));
var state_7333__$1 = state_7333;
if(cljs.core.truth_(inst_7271)){
var statearr_7353_7408 = state_7333__$1;
(statearr_7353_7408[(1)] = (16));

} else {
var statearr_7354_7409 = state_7333__$1;
(statearr_7354_7409[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7334 === (22))){
var inst_7292 = (state_7333[(14)]);
var inst_7293 = (state_7333[(11)]);
var inst_7291 = (state_7333[(2)]);
var inst_7292__$1 = cljs.core.nth.call(null,inst_7291,(0),null);
var inst_7293__$1 = cljs.core.nth.call(null,inst_7291,(1),null);
var inst_7294 = (inst_7292__$1 == null);
var inst_7295 = cljs.core._EQ_.call(null,inst_7293__$1,change);
var inst_7296 = ((inst_7294) || (inst_7295));
var state_7333__$1 = (function (){var statearr_7355 = state_7333;
(statearr_7355[(14)] = inst_7292__$1);

(statearr_7355[(11)] = inst_7293__$1);

return statearr_7355;
})();
if(cljs.core.truth_(inst_7296)){
var statearr_7356_7410 = state_7333__$1;
(statearr_7356_7410[(1)] = (23));

} else {
var statearr_7357_7411 = state_7333__$1;
(statearr_7357_7411[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7334 === (36))){
var inst_7283 = (state_7333[(12)]);
var inst_7260 = inst_7283;
var state_7333__$1 = (function (){var statearr_7358 = state_7333;
(statearr_7358[(7)] = inst_7260);

return statearr_7358;
})();
var statearr_7359_7412 = state_7333__$1;
(statearr_7359_7412[(2)] = null);

(statearr_7359_7412[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7334 === (29))){
var inst_7307 = (state_7333[(10)]);
var state_7333__$1 = state_7333;
var statearr_7360_7413 = state_7333__$1;
(statearr_7360_7413[(2)] = inst_7307);

(statearr_7360_7413[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7334 === (6))){
var state_7333__$1 = state_7333;
var statearr_7361_7414 = state_7333__$1;
(statearr_7361_7414[(2)] = false);

(statearr_7361_7414[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7334 === (28))){
var inst_7303 = (state_7333[(2)]);
var inst_7304 = calc_state.call(null);
var inst_7260 = inst_7304;
var state_7333__$1 = (function (){var statearr_7362 = state_7333;
(statearr_7362[(7)] = inst_7260);

(statearr_7362[(15)] = inst_7303);

return statearr_7362;
})();
var statearr_7363_7415 = state_7333__$1;
(statearr_7363_7415[(2)] = null);

(statearr_7363_7415[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7334 === (25))){
var inst_7329 = (state_7333[(2)]);
var state_7333__$1 = state_7333;
var statearr_7364_7416 = state_7333__$1;
(statearr_7364_7416[(2)] = inst_7329);

(statearr_7364_7416[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7334 === (34))){
var inst_7327 = (state_7333[(2)]);
var state_7333__$1 = state_7333;
var statearr_7365_7417 = state_7333__$1;
(statearr_7365_7417[(2)] = inst_7327);

(statearr_7365_7417[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7334 === (17))){
var state_7333__$1 = state_7333;
var statearr_7366_7418 = state_7333__$1;
(statearr_7366_7418[(2)] = false);

(statearr_7366_7418[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7334 === (3))){
var state_7333__$1 = state_7333;
var statearr_7367_7419 = state_7333__$1;
(statearr_7367_7419[(2)] = false);

(statearr_7367_7419[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7334 === (12))){
var inst_7331 = (state_7333[(2)]);
var state_7333__$1 = state_7333;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7333__$1,inst_7331);
} else {
if((state_val_7334 === (2))){
var inst_7235 = (state_7333[(8)]);
var inst_7240 = inst_7235.cljs$lang$protocol_mask$partition0$;
var inst_7241 = (inst_7240 & (64));
var inst_7242 = inst_7235.cljs$core$ISeq$;
var inst_7243 = (cljs.core.PROTOCOL_SENTINEL === inst_7242);
var inst_7244 = ((inst_7241) || (inst_7243));
var state_7333__$1 = state_7333;
if(cljs.core.truth_(inst_7244)){
var statearr_7368_7420 = state_7333__$1;
(statearr_7368_7420[(1)] = (5));

} else {
var statearr_7369_7421 = state_7333__$1;
(statearr_7369_7421[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7334 === (23))){
var inst_7292 = (state_7333[(14)]);
var inst_7298 = (inst_7292 == null);
var state_7333__$1 = state_7333;
if(cljs.core.truth_(inst_7298)){
var statearr_7370_7422 = state_7333__$1;
(statearr_7370_7422[(1)] = (26));

} else {
var statearr_7371_7423 = state_7333__$1;
(statearr_7371_7423[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7334 === (35))){
var inst_7318 = (state_7333[(2)]);
var state_7333__$1 = state_7333;
if(cljs.core.truth_(inst_7318)){
var statearr_7372_7424 = state_7333__$1;
(statearr_7372_7424[(1)] = (36));

} else {
var statearr_7373_7425 = state_7333__$1;
(statearr_7373_7425[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7334 === (19))){
var inst_7260 = (state_7333[(7)]);
var inst_7280 = cljs.core.apply.call(null,cljs.core.hash_map,inst_7260);
var state_7333__$1 = state_7333;
var statearr_7374_7426 = state_7333__$1;
(statearr_7374_7426[(2)] = inst_7280);

(statearr_7374_7426[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7334 === (11))){
var inst_7260 = (state_7333[(7)]);
var inst_7264 = (inst_7260 == null);
var inst_7265 = cljs.core.not.call(null,inst_7264);
var state_7333__$1 = state_7333;
if(inst_7265){
var statearr_7375_7427 = state_7333__$1;
(statearr_7375_7427[(1)] = (13));

} else {
var statearr_7376_7428 = state_7333__$1;
(statearr_7376_7428[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7334 === (9))){
var inst_7235 = (state_7333[(8)]);
var state_7333__$1 = state_7333;
var statearr_7377_7429 = state_7333__$1;
(statearr_7377_7429[(2)] = inst_7235);

(statearr_7377_7429[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7334 === (5))){
var state_7333__$1 = state_7333;
var statearr_7378_7430 = state_7333__$1;
(statearr_7378_7430[(2)] = true);

(statearr_7378_7430[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7334 === (14))){
var state_7333__$1 = state_7333;
var statearr_7379_7431 = state_7333__$1;
(statearr_7379_7431[(2)] = false);

(statearr_7379_7431[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7334 === (26))){
var inst_7293 = (state_7333[(11)]);
var inst_7300 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_7293);
var state_7333__$1 = state_7333;
var statearr_7380_7432 = state_7333__$1;
(statearr_7380_7432[(2)] = inst_7300);

(statearr_7380_7432[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7334 === (16))){
var state_7333__$1 = state_7333;
var statearr_7381_7433 = state_7333__$1;
(statearr_7381_7433[(2)] = true);

(statearr_7381_7433[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7334 === (38))){
var inst_7323 = (state_7333[(2)]);
var state_7333__$1 = state_7333;
var statearr_7382_7434 = state_7333__$1;
(statearr_7382_7434[(2)] = inst_7323);

(statearr_7382_7434[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7334 === (30))){
var inst_7284 = (state_7333[(9)]);
var inst_7293 = (state_7333[(11)]);
var inst_7285 = (state_7333[(13)]);
var inst_7310 = cljs.core.empty_QMARK_.call(null,inst_7284);
var inst_7311 = inst_7285.call(null,inst_7293);
var inst_7312 = cljs.core.not.call(null,inst_7311);
var inst_7313 = ((inst_7310) && (inst_7312));
var state_7333__$1 = state_7333;
var statearr_7383_7435 = state_7333__$1;
(statearr_7383_7435[(2)] = inst_7313);

(statearr_7383_7435[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7334 === (10))){
var inst_7235 = (state_7333[(8)]);
var inst_7256 = (state_7333[(2)]);
var inst_7257 = cljs.core.get.call(null,inst_7256,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_7258 = cljs.core.get.call(null,inst_7256,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_7259 = cljs.core.get.call(null,inst_7256,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_7260 = inst_7235;
var state_7333__$1 = (function (){var statearr_7384 = state_7333;
(statearr_7384[(7)] = inst_7260);

(statearr_7384[(16)] = inst_7258);

(statearr_7384[(17)] = inst_7259);

(statearr_7384[(18)] = inst_7257);

return statearr_7384;
})();
var statearr_7385_7436 = state_7333__$1;
(statearr_7385_7436[(2)] = null);

(statearr_7385_7436[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7334 === (18))){
var inst_7275 = (state_7333[(2)]);
var state_7333__$1 = state_7333;
var statearr_7386_7437 = state_7333__$1;
(statearr_7386_7437[(2)] = inst_7275);

(statearr_7386_7437[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7334 === (37))){
var state_7333__$1 = state_7333;
var statearr_7387_7438 = state_7333__$1;
(statearr_7387_7438[(2)] = null);

(statearr_7387_7438[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7334 === (8))){
var inst_7235 = (state_7333[(8)]);
var inst_7253 = cljs.core.apply.call(null,cljs.core.hash_map,inst_7235);
var state_7333__$1 = state_7333;
var statearr_7388_7439 = state_7333__$1;
(statearr_7388_7439[(2)] = inst_7253);

(statearr_7388_7439[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__4470__auto___7393,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__4311__auto__,c__4470__auto___7393,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__4312__auto__ = null;
var cljs$core$async$mix_$_state_machine__4312__auto____0 = (function (){
var statearr_7389 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_7389[(0)] = cljs$core$async$mix_$_state_machine__4312__auto__);

(statearr_7389[(1)] = (1));

return statearr_7389;
});
var cljs$core$async$mix_$_state_machine__4312__auto____1 = (function (state_7333){
while(true){
var ret_value__4313__auto__ = (function (){try{while(true){
var result__4314__auto__ = switch__4311__auto__.call(null,state_7333);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4314__auto__;
}
break;
}
}catch (e7390){if((e7390 instanceof Object)){
var ex__4315__auto__ = e7390;
var statearr_7391_7440 = state_7333;
(statearr_7391_7440[(5)] = ex__4315__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7333);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7390;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7441 = state_7333;
state_7333 = G__7441;
continue;
} else {
return ret_value__4313__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__4312__auto__ = function(state_7333){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__4312__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__4312__auto____1.call(this,state_7333);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__4312__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__4312__auto____0;
cljs$core$async$mix_$_state_machine__4312__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__4312__auto____1;
return cljs$core$async$mix_$_state_machine__4312__auto__;
})()
;})(switch__4311__auto__,c__4470__auto___7393,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__4472__auto__ = (function (){var statearr_7392 = f__4471__auto__.call(null);
(statearr_7392[(6)] = c__4470__auto___7393);

return statearr_7392;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4472__auto__);
});})(c__4470__auto___7393,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
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
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
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
return m__4244__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4244__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
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
return m__4244__auto__.call(null,p,v,ch);
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__7443 = arguments.length;
switch (G__7443) {
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
return m__4244__auto__.call(null,p);
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
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
return m__4244__auto__.call(null,p,v);
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
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
var G__7447 = arguments.length;
switch (G__7447) {
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
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3949__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3949__auto__,mults){
return (function (p1__7445_SHARP_){
if(cljs.core.truth_(p1__7445_SHARP_.call(null,topic))){
return p1__7445_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__7445_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3949__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async7448 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async7448 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta7449){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta7449 = meta7449;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async7448.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_7450,meta7449__$1){
var self__ = this;
var _7450__$1 = this;
return (new cljs.core.async.t_cljs$core$async7448(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta7449__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async7448.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_7450){
var self__ = this;
var _7450__$1 = this;
return self__.meta7449;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async7448.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async7448.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async7448.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async7448.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async7448.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5537__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5537__auto__)){
var m = temp__5537__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async7448.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async7448.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async7448.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta7449","meta7449",1365035027,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async7448.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async7448.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async7448";

cljs.core.async.t_cljs$core$async7448.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async7448");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async7448.
 */
cljs.core.async.__GT_t_cljs$core$async7448 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async7448(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta7449){
return (new cljs.core.async.t_cljs$core$async7448(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta7449));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async7448(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__4470__auto___7568 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__4470__auto___7568,mults,ensure_mult,p){
return (function (){
var f__4471__auto__ = (function (){var switch__4311__auto__ = ((function (c__4470__auto___7568,mults,ensure_mult,p){
return (function (state_7522){
var state_val_7523 = (state_7522[(1)]);
if((state_val_7523 === (7))){
var inst_7518 = (state_7522[(2)]);
var state_7522__$1 = state_7522;
var statearr_7524_7569 = state_7522__$1;
(statearr_7524_7569[(2)] = inst_7518);

(statearr_7524_7569[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7523 === (20))){
var state_7522__$1 = state_7522;
var statearr_7525_7570 = state_7522__$1;
(statearr_7525_7570[(2)] = null);

(statearr_7525_7570[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7523 === (1))){
var state_7522__$1 = state_7522;
var statearr_7526_7571 = state_7522__$1;
(statearr_7526_7571[(2)] = null);

(statearr_7526_7571[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7523 === (24))){
var inst_7501 = (state_7522[(7)]);
var inst_7510 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_7501);
var state_7522__$1 = state_7522;
var statearr_7527_7572 = state_7522__$1;
(statearr_7527_7572[(2)] = inst_7510);

(statearr_7527_7572[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7523 === (4))){
var inst_7453 = (state_7522[(8)]);
var inst_7453__$1 = (state_7522[(2)]);
var inst_7454 = (inst_7453__$1 == null);
var state_7522__$1 = (function (){var statearr_7528 = state_7522;
(statearr_7528[(8)] = inst_7453__$1);

return statearr_7528;
})();
if(cljs.core.truth_(inst_7454)){
var statearr_7529_7573 = state_7522__$1;
(statearr_7529_7573[(1)] = (5));

} else {
var statearr_7530_7574 = state_7522__$1;
(statearr_7530_7574[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7523 === (15))){
var inst_7495 = (state_7522[(2)]);
var state_7522__$1 = state_7522;
var statearr_7531_7575 = state_7522__$1;
(statearr_7531_7575[(2)] = inst_7495);

(statearr_7531_7575[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7523 === (21))){
var inst_7515 = (state_7522[(2)]);
var state_7522__$1 = (function (){var statearr_7532 = state_7522;
(statearr_7532[(9)] = inst_7515);

return statearr_7532;
})();
var statearr_7533_7576 = state_7522__$1;
(statearr_7533_7576[(2)] = null);

(statearr_7533_7576[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7523 === (13))){
var inst_7477 = (state_7522[(10)]);
var inst_7479 = cljs.core.chunked_seq_QMARK_.call(null,inst_7477);
var state_7522__$1 = state_7522;
if(inst_7479){
var statearr_7534_7577 = state_7522__$1;
(statearr_7534_7577[(1)] = (16));

} else {
var statearr_7535_7578 = state_7522__$1;
(statearr_7535_7578[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7523 === (22))){
var inst_7507 = (state_7522[(2)]);
var state_7522__$1 = state_7522;
if(cljs.core.truth_(inst_7507)){
var statearr_7536_7579 = state_7522__$1;
(statearr_7536_7579[(1)] = (23));

} else {
var statearr_7537_7580 = state_7522__$1;
(statearr_7537_7580[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7523 === (6))){
var inst_7501 = (state_7522[(7)]);
var inst_7453 = (state_7522[(8)]);
var inst_7503 = (state_7522[(11)]);
var inst_7501__$1 = topic_fn.call(null,inst_7453);
var inst_7502 = cljs.core.deref.call(null,mults);
var inst_7503__$1 = cljs.core.get.call(null,inst_7502,inst_7501__$1);
var state_7522__$1 = (function (){var statearr_7538 = state_7522;
(statearr_7538[(7)] = inst_7501__$1);

(statearr_7538[(11)] = inst_7503__$1);

return statearr_7538;
})();
if(cljs.core.truth_(inst_7503__$1)){
var statearr_7539_7581 = state_7522__$1;
(statearr_7539_7581[(1)] = (19));

} else {
var statearr_7540_7582 = state_7522__$1;
(statearr_7540_7582[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7523 === (25))){
var inst_7512 = (state_7522[(2)]);
var state_7522__$1 = state_7522;
var statearr_7541_7583 = state_7522__$1;
(statearr_7541_7583[(2)] = inst_7512);

(statearr_7541_7583[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7523 === (17))){
var inst_7477 = (state_7522[(10)]);
var inst_7486 = cljs.core.first.call(null,inst_7477);
var inst_7487 = cljs.core.async.muxch_STAR_.call(null,inst_7486);
var inst_7488 = cljs.core.async.close_BANG_.call(null,inst_7487);
var inst_7489 = cljs.core.next.call(null,inst_7477);
var inst_7463 = inst_7489;
var inst_7464 = null;
var inst_7465 = (0);
var inst_7466 = (0);
var state_7522__$1 = (function (){var statearr_7542 = state_7522;
(statearr_7542[(12)] = inst_7465);

(statearr_7542[(13)] = inst_7488);

(statearr_7542[(14)] = inst_7463);

(statearr_7542[(15)] = inst_7466);

(statearr_7542[(16)] = inst_7464);

return statearr_7542;
})();
var statearr_7543_7584 = state_7522__$1;
(statearr_7543_7584[(2)] = null);

(statearr_7543_7584[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7523 === (3))){
var inst_7520 = (state_7522[(2)]);
var state_7522__$1 = state_7522;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7522__$1,inst_7520);
} else {
if((state_val_7523 === (12))){
var inst_7497 = (state_7522[(2)]);
var state_7522__$1 = state_7522;
var statearr_7544_7585 = state_7522__$1;
(statearr_7544_7585[(2)] = inst_7497);

(statearr_7544_7585[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7523 === (2))){
var state_7522__$1 = state_7522;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7522__$1,(4),ch);
} else {
if((state_val_7523 === (23))){
var state_7522__$1 = state_7522;
var statearr_7545_7586 = state_7522__$1;
(statearr_7545_7586[(2)] = null);

(statearr_7545_7586[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7523 === (19))){
var inst_7453 = (state_7522[(8)]);
var inst_7503 = (state_7522[(11)]);
var inst_7505 = cljs.core.async.muxch_STAR_.call(null,inst_7503);
var state_7522__$1 = state_7522;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7522__$1,(22),inst_7505,inst_7453);
} else {
if((state_val_7523 === (11))){
var inst_7477 = (state_7522[(10)]);
var inst_7463 = (state_7522[(14)]);
var inst_7477__$1 = cljs.core.seq.call(null,inst_7463);
var state_7522__$1 = (function (){var statearr_7546 = state_7522;
(statearr_7546[(10)] = inst_7477__$1);

return statearr_7546;
})();
if(inst_7477__$1){
var statearr_7547_7587 = state_7522__$1;
(statearr_7547_7587[(1)] = (13));

} else {
var statearr_7548_7588 = state_7522__$1;
(statearr_7548_7588[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7523 === (9))){
var inst_7499 = (state_7522[(2)]);
var state_7522__$1 = state_7522;
var statearr_7549_7589 = state_7522__$1;
(statearr_7549_7589[(2)] = inst_7499);

(statearr_7549_7589[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7523 === (5))){
var inst_7460 = cljs.core.deref.call(null,mults);
var inst_7461 = cljs.core.vals.call(null,inst_7460);
var inst_7462 = cljs.core.seq.call(null,inst_7461);
var inst_7463 = inst_7462;
var inst_7464 = null;
var inst_7465 = (0);
var inst_7466 = (0);
var state_7522__$1 = (function (){var statearr_7550 = state_7522;
(statearr_7550[(12)] = inst_7465);

(statearr_7550[(14)] = inst_7463);

(statearr_7550[(15)] = inst_7466);

(statearr_7550[(16)] = inst_7464);

return statearr_7550;
})();
var statearr_7551_7590 = state_7522__$1;
(statearr_7551_7590[(2)] = null);

(statearr_7551_7590[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7523 === (14))){
var state_7522__$1 = state_7522;
var statearr_7555_7591 = state_7522__$1;
(statearr_7555_7591[(2)] = null);

(statearr_7555_7591[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7523 === (16))){
var inst_7477 = (state_7522[(10)]);
var inst_7481 = cljs.core.chunk_first.call(null,inst_7477);
var inst_7482 = cljs.core.chunk_rest.call(null,inst_7477);
var inst_7483 = cljs.core.count.call(null,inst_7481);
var inst_7463 = inst_7482;
var inst_7464 = inst_7481;
var inst_7465 = inst_7483;
var inst_7466 = (0);
var state_7522__$1 = (function (){var statearr_7556 = state_7522;
(statearr_7556[(12)] = inst_7465);

(statearr_7556[(14)] = inst_7463);

(statearr_7556[(15)] = inst_7466);

(statearr_7556[(16)] = inst_7464);

return statearr_7556;
})();
var statearr_7557_7592 = state_7522__$1;
(statearr_7557_7592[(2)] = null);

(statearr_7557_7592[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7523 === (10))){
var inst_7465 = (state_7522[(12)]);
var inst_7463 = (state_7522[(14)]);
var inst_7466 = (state_7522[(15)]);
var inst_7464 = (state_7522[(16)]);
var inst_7471 = cljs.core._nth.call(null,inst_7464,inst_7466);
var inst_7472 = cljs.core.async.muxch_STAR_.call(null,inst_7471);
var inst_7473 = cljs.core.async.close_BANG_.call(null,inst_7472);
var inst_7474 = (inst_7466 + (1));
var tmp7552 = inst_7465;
var tmp7553 = inst_7463;
var tmp7554 = inst_7464;
var inst_7463__$1 = tmp7553;
var inst_7464__$1 = tmp7554;
var inst_7465__$1 = tmp7552;
var inst_7466__$1 = inst_7474;
var state_7522__$1 = (function (){var statearr_7558 = state_7522;
(statearr_7558[(12)] = inst_7465__$1);

(statearr_7558[(14)] = inst_7463__$1);

(statearr_7558[(15)] = inst_7466__$1);

(statearr_7558[(16)] = inst_7464__$1);

(statearr_7558[(17)] = inst_7473);

return statearr_7558;
})();
var statearr_7559_7593 = state_7522__$1;
(statearr_7559_7593[(2)] = null);

(statearr_7559_7593[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7523 === (18))){
var inst_7492 = (state_7522[(2)]);
var state_7522__$1 = state_7522;
var statearr_7560_7594 = state_7522__$1;
(statearr_7560_7594[(2)] = inst_7492);

(statearr_7560_7594[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7523 === (8))){
var inst_7465 = (state_7522[(12)]);
var inst_7466 = (state_7522[(15)]);
var inst_7468 = (inst_7466 < inst_7465);
var inst_7469 = inst_7468;
var state_7522__$1 = state_7522;
if(cljs.core.truth_(inst_7469)){
var statearr_7561_7595 = state_7522__$1;
(statearr_7561_7595[(1)] = (10));

} else {
var statearr_7562_7596 = state_7522__$1;
(statearr_7562_7596[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__4470__auto___7568,mults,ensure_mult,p))
;
return ((function (switch__4311__auto__,c__4470__auto___7568,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__4312__auto__ = null;
var cljs$core$async$state_machine__4312__auto____0 = (function (){
var statearr_7563 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_7563[(0)] = cljs$core$async$state_machine__4312__auto__);

(statearr_7563[(1)] = (1));

return statearr_7563;
});
var cljs$core$async$state_machine__4312__auto____1 = (function (state_7522){
while(true){
var ret_value__4313__auto__ = (function (){try{while(true){
var result__4314__auto__ = switch__4311__auto__.call(null,state_7522);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4314__auto__;
}
break;
}
}catch (e7564){if((e7564 instanceof Object)){
var ex__4315__auto__ = e7564;
var statearr_7565_7597 = state_7522;
(statearr_7565_7597[(5)] = ex__4315__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7522);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7564;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7598 = state_7522;
state_7522 = G__7598;
continue;
} else {
return ret_value__4313__auto__;
}
break;
}
});
cljs$core$async$state_machine__4312__auto__ = function(state_7522){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__4312__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__4312__auto____1.call(this,state_7522);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__4312__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__4312__auto____0;
cljs$core$async$state_machine__4312__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__4312__auto____1;
return cljs$core$async$state_machine__4312__auto__;
})()
;})(switch__4311__auto__,c__4470__auto___7568,mults,ensure_mult,p))
})();
var state__4472__auto__ = (function (){var statearr_7566 = f__4471__auto__.call(null);
(statearr_7566[(6)] = c__4470__auto___7568);

return statearr_7566;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4472__auto__);
});})(c__4470__auto___7568,mults,ensure_mult,p))
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
var G__7600 = arguments.length;
switch (G__7600) {
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
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__7603 = arguments.length;
switch (G__7603) {
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
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
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
var G__7606 = arguments.length;
switch (G__7606) {
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
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__4470__auto___7673 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__4470__auto___7673,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__4471__auto__ = (function (){var switch__4311__auto__ = ((function (c__4470__auto___7673,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_7645){
var state_val_7646 = (state_7645[(1)]);
if((state_val_7646 === (7))){
var state_7645__$1 = state_7645;
var statearr_7647_7674 = state_7645__$1;
(statearr_7647_7674[(2)] = null);

(statearr_7647_7674[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7646 === (1))){
var state_7645__$1 = state_7645;
var statearr_7648_7675 = state_7645__$1;
(statearr_7648_7675[(2)] = null);

(statearr_7648_7675[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7646 === (4))){
var inst_7609 = (state_7645[(7)]);
var inst_7611 = (inst_7609 < cnt);
var state_7645__$1 = state_7645;
if(cljs.core.truth_(inst_7611)){
var statearr_7649_7676 = state_7645__$1;
(statearr_7649_7676[(1)] = (6));

} else {
var statearr_7650_7677 = state_7645__$1;
(statearr_7650_7677[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7646 === (15))){
var inst_7641 = (state_7645[(2)]);
var state_7645__$1 = state_7645;
var statearr_7651_7678 = state_7645__$1;
(statearr_7651_7678[(2)] = inst_7641);

(statearr_7651_7678[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7646 === (13))){
var inst_7634 = cljs.core.async.close_BANG_.call(null,out);
var state_7645__$1 = state_7645;
var statearr_7652_7679 = state_7645__$1;
(statearr_7652_7679[(2)] = inst_7634);

(statearr_7652_7679[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7646 === (6))){
var state_7645__$1 = state_7645;
var statearr_7653_7680 = state_7645__$1;
(statearr_7653_7680[(2)] = null);

(statearr_7653_7680[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7646 === (3))){
var inst_7643 = (state_7645[(2)]);
var state_7645__$1 = state_7645;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7645__$1,inst_7643);
} else {
if((state_val_7646 === (12))){
var inst_7631 = (state_7645[(8)]);
var inst_7631__$1 = (state_7645[(2)]);
var inst_7632 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_7631__$1);
var state_7645__$1 = (function (){var statearr_7654 = state_7645;
(statearr_7654[(8)] = inst_7631__$1);

return statearr_7654;
})();
if(cljs.core.truth_(inst_7632)){
var statearr_7655_7681 = state_7645__$1;
(statearr_7655_7681[(1)] = (13));

} else {
var statearr_7656_7682 = state_7645__$1;
(statearr_7656_7682[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7646 === (2))){
var inst_7608 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_7609 = (0);
var state_7645__$1 = (function (){var statearr_7657 = state_7645;
(statearr_7657[(9)] = inst_7608);

(statearr_7657[(7)] = inst_7609);

return statearr_7657;
})();
var statearr_7658_7683 = state_7645__$1;
(statearr_7658_7683[(2)] = null);

(statearr_7658_7683[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7646 === (11))){
var inst_7609 = (state_7645[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_7645,(10),Object,null,(9));
var inst_7618 = chs__$1.call(null,inst_7609);
var inst_7619 = done.call(null,inst_7609);
var inst_7620 = cljs.core.async.take_BANG_.call(null,inst_7618,inst_7619);
var state_7645__$1 = state_7645;
var statearr_7659_7684 = state_7645__$1;
(statearr_7659_7684[(2)] = inst_7620);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7645__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7646 === (9))){
var inst_7609 = (state_7645[(7)]);
var inst_7622 = (state_7645[(2)]);
var inst_7623 = (inst_7609 + (1));
var inst_7609__$1 = inst_7623;
var state_7645__$1 = (function (){var statearr_7660 = state_7645;
(statearr_7660[(7)] = inst_7609__$1);

(statearr_7660[(10)] = inst_7622);

return statearr_7660;
})();
var statearr_7661_7685 = state_7645__$1;
(statearr_7661_7685[(2)] = null);

(statearr_7661_7685[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7646 === (5))){
var inst_7629 = (state_7645[(2)]);
var state_7645__$1 = (function (){var statearr_7662 = state_7645;
(statearr_7662[(11)] = inst_7629);

return statearr_7662;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7645__$1,(12),dchan);
} else {
if((state_val_7646 === (14))){
var inst_7631 = (state_7645[(8)]);
var inst_7636 = cljs.core.apply.call(null,f,inst_7631);
var state_7645__$1 = state_7645;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7645__$1,(16),out,inst_7636);
} else {
if((state_val_7646 === (16))){
var inst_7638 = (state_7645[(2)]);
var state_7645__$1 = (function (){var statearr_7663 = state_7645;
(statearr_7663[(12)] = inst_7638);

return statearr_7663;
})();
var statearr_7664_7686 = state_7645__$1;
(statearr_7664_7686[(2)] = null);

(statearr_7664_7686[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7646 === (10))){
var inst_7613 = (state_7645[(2)]);
var inst_7614 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_7645__$1 = (function (){var statearr_7665 = state_7645;
(statearr_7665[(13)] = inst_7613);

return statearr_7665;
})();
var statearr_7666_7687 = state_7645__$1;
(statearr_7666_7687[(2)] = inst_7614);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7645__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7646 === (8))){
var inst_7627 = (state_7645[(2)]);
var state_7645__$1 = state_7645;
var statearr_7667_7688 = state_7645__$1;
(statearr_7667_7688[(2)] = inst_7627);

(statearr_7667_7688[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__4470__auto___7673,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__4311__auto__,c__4470__auto___7673,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__4312__auto__ = null;
var cljs$core$async$state_machine__4312__auto____0 = (function (){
var statearr_7668 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_7668[(0)] = cljs$core$async$state_machine__4312__auto__);

(statearr_7668[(1)] = (1));

return statearr_7668;
});
var cljs$core$async$state_machine__4312__auto____1 = (function (state_7645){
while(true){
var ret_value__4313__auto__ = (function (){try{while(true){
var result__4314__auto__ = switch__4311__auto__.call(null,state_7645);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4314__auto__;
}
break;
}
}catch (e7669){if((e7669 instanceof Object)){
var ex__4315__auto__ = e7669;
var statearr_7670_7689 = state_7645;
(statearr_7670_7689[(5)] = ex__4315__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7645);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7669;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7690 = state_7645;
state_7645 = G__7690;
continue;
} else {
return ret_value__4313__auto__;
}
break;
}
});
cljs$core$async$state_machine__4312__auto__ = function(state_7645){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__4312__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__4312__auto____1.call(this,state_7645);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__4312__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__4312__auto____0;
cljs$core$async$state_machine__4312__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__4312__auto____1;
return cljs$core$async$state_machine__4312__auto__;
})()
;})(switch__4311__auto__,c__4470__auto___7673,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__4472__auto__ = (function (){var statearr_7671 = f__4471__auto__.call(null);
(statearr_7671[(6)] = c__4470__auto___7673);

return statearr_7671;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4472__auto__);
});})(c__4470__auto___7673,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__7693 = arguments.length;
switch (G__7693) {
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
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__4470__auto___7747 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__4470__auto___7747,out){
return (function (){
var f__4471__auto__ = (function (){var switch__4311__auto__ = ((function (c__4470__auto___7747,out){
return (function (state_7725){
var state_val_7726 = (state_7725[(1)]);
if((state_val_7726 === (7))){
var inst_7704 = (state_7725[(7)]);
var inst_7705 = (state_7725[(8)]);
var inst_7704__$1 = (state_7725[(2)]);
var inst_7705__$1 = cljs.core.nth.call(null,inst_7704__$1,(0),null);
var inst_7706 = cljs.core.nth.call(null,inst_7704__$1,(1),null);
var inst_7707 = (inst_7705__$1 == null);
var state_7725__$1 = (function (){var statearr_7727 = state_7725;
(statearr_7727[(9)] = inst_7706);

(statearr_7727[(7)] = inst_7704__$1);

(statearr_7727[(8)] = inst_7705__$1);

return statearr_7727;
})();
if(cljs.core.truth_(inst_7707)){
var statearr_7728_7748 = state_7725__$1;
(statearr_7728_7748[(1)] = (8));

} else {
var statearr_7729_7749 = state_7725__$1;
(statearr_7729_7749[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7726 === (1))){
var inst_7694 = cljs.core.vec.call(null,chs);
var inst_7695 = inst_7694;
var state_7725__$1 = (function (){var statearr_7730 = state_7725;
(statearr_7730[(10)] = inst_7695);

return statearr_7730;
})();
var statearr_7731_7750 = state_7725__$1;
(statearr_7731_7750[(2)] = null);

(statearr_7731_7750[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7726 === (4))){
var inst_7695 = (state_7725[(10)]);
var state_7725__$1 = state_7725;
return cljs.core.async.ioc_alts_BANG_.call(null,state_7725__$1,(7),inst_7695);
} else {
if((state_val_7726 === (6))){
var inst_7721 = (state_7725[(2)]);
var state_7725__$1 = state_7725;
var statearr_7732_7751 = state_7725__$1;
(statearr_7732_7751[(2)] = inst_7721);

(statearr_7732_7751[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7726 === (3))){
var inst_7723 = (state_7725[(2)]);
var state_7725__$1 = state_7725;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7725__$1,inst_7723);
} else {
if((state_val_7726 === (2))){
var inst_7695 = (state_7725[(10)]);
var inst_7697 = cljs.core.count.call(null,inst_7695);
var inst_7698 = (inst_7697 > (0));
var state_7725__$1 = state_7725;
if(cljs.core.truth_(inst_7698)){
var statearr_7734_7752 = state_7725__$1;
(statearr_7734_7752[(1)] = (4));

} else {
var statearr_7735_7753 = state_7725__$1;
(statearr_7735_7753[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7726 === (11))){
var inst_7695 = (state_7725[(10)]);
var inst_7714 = (state_7725[(2)]);
var tmp7733 = inst_7695;
var inst_7695__$1 = tmp7733;
var state_7725__$1 = (function (){var statearr_7736 = state_7725;
(statearr_7736[(11)] = inst_7714);

(statearr_7736[(10)] = inst_7695__$1);

return statearr_7736;
})();
var statearr_7737_7754 = state_7725__$1;
(statearr_7737_7754[(2)] = null);

(statearr_7737_7754[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7726 === (9))){
var inst_7705 = (state_7725[(8)]);
var state_7725__$1 = state_7725;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7725__$1,(11),out,inst_7705);
} else {
if((state_val_7726 === (5))){
var inst_7719 = cljs.core.async.close_BANG_.call(null,out);
var state_7725__$1 = state_7725;
var statearr_7738_7755 = state_7725__$1;
(statearr_7738_7755[(2)] = inst_7719);

(statearr_7738_7755[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7726 === (10))){
var inst_7717 = (state_7725[(2)]);
var state_7725__$1 = state_7725;
var statearr_7739_7756 = state_7725__$1;
(statearr_7739_7756[(2)] = inst_7717);

(statearr_7739_7756[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7726 === (8))){
var inst_7695 = (state_7725[(10)]);
var inst_7706 = (state_7725[(9)]);
var inst_7704 = (state_7725[(7)]);
var inst_7705 = (state_7725[(8)]);
var inst_7709 = (function (){var cs = inst_7695;
var vec__7700 = inst_7704;
var v = inst_7705;
var c = inst_7706;
return ((function (cs,vec__7700,v,c,inst_7695,inst_7706,inst_7704,inst_7705,state_val_7726,c__4470__auto___7747,out){
return (function (p1__7691_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__7691_SHARP_);
});
;})(cs,vec__7700,v,c,inst_7695,inst_7706,inst_7704,inst_7705,state_val_7726,c__4470__auto___7747,out))
})();
var inst_7710 = cljs.core.filterv.call(null,inst_7709,inst_7695);
var inst_7695__$1 = inst_7710;
var state_7725__$1 = (function (){var statearr_7740 = state_7725;
(statearr_7740[(10)] = inst_7695__$1);

return statearr_7740;
})();
var statearr_7741_7757 = state_7725__$1;
(statearr_7741_7757[(2)] = null);

(statearr_7741_7757[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__4470__auto___7747,out))
;
return ((function (switch__4311__auto__,c__4470__auto___7747,out){
return (function() {
var cljs$core$async$state_machine__4312__auto__ = null;
var cljs$core$async$state_machine__4312__auto____0 = (function (){
var statearr_7742 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_7742[(0)] = cljs$core$async$state_machine__4312__auto__);

(statearr_7742[(1)] = (1));

return statearr_7742;
});
var cljs$core$async$state_machine__4312__auto____1 = (function (state_7725){
while(true){
var ret_value__4313__auto__ = (function (){try{while(true){
var result__4314__auto__ = switch__4311__auto__.call(null,state_7725);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4314__auto__;
}
break;
}
}catch (e7743){if((e7743 instanceof Object)){
var ex__4315__auto__ = e7743;
var statearr_7744_7758 = state_7725;
(statearr_7744_7758[(5)] = ex__4315__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7725);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7743;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7759 = state_7725;
state_7725 = G__7759;
continue;
} else {
return ret_value__4313__auto__;
}
break;
}
});
cljs$core$async$state_machine__4312__auto__ = function(state_7725){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__4312__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__4312__auto____1.call(this,state_7725);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__4312__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__4312__auto____0;
cljs$core$async$state_machine__4312__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__4312__auto____1;
return cljs$core$async$state_machine__4312__auto__;
})()
;})(switch__4311__auto__,c__4470__auto___7747,out))
})();
var state__4472__auto__ = (function (){var statearr_7745 = f__4471__auto__.call(null);
(statearr_7745[(6)] = c__4470__auto___7747);

return statearr_7745;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4472__auto__);
});})(c__4470__auto___7747,out))
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
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__7761 = arguments.length;
switch (G__7761) {
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
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__4470__auto___7806 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__4470__auto___7806,out){
return (function (){
var f__4471__auto__ = (function (){var switch__4311__auto__ = ((function (c__4470__auto___7806,out){
return (function (state_7785){
var state_val_7786 = (state_7785[(1)]);
if((state_val_7786 === (7))){
var inst_7767 = (state_7785[(7)]);
var inst_7767__$1 = (state_7785[(2)]);
var inst_7768 = (inst_7767__$1 == null);
var inst_7769 = cljs.core.not.call(null,inst_7768);
var state_7785__$1 = (function (){var statearr_7787 = state_7785;
(statearr_7787[(7)] = inst_7767__$1);

return statearr_7787;
})();
if(inst_7769){
var statearr_7788_7807 = state_7785__$1;
(statearr_7788_7807[(1)] = (8));

} else {
var statearr_7789_7808 = state_7785__$1;
(statearr_7789_7808[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7786 === (1))){
var inst_7762 = (0);
var state_7785__$1 = (function (){var statearr_7790 = state_7785;
(statearr_7790[(8)] = inst_7762);

return statearr_7790;
})();
var statearr_7791_7809 = state_7785__$1;
(statearr_7791_7809[(2)] = null);

(statearr_7791_7809[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7786 === (4))){
var state_7785__$1 = state_7785;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7785__$1,(7),ch);
} else {
if((state_val_7786 === (6))){
var inst_7780 = (state_7785[(2)]);
var state_7785__$1 = state_7785;
var statearr_7792_7810 = state_7785__$1;
(statearr_7792_7810[(2)] = inst_7780);

(statearr_7792_7810[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7786 === (3))){
var inst_7782 = (state_7785[(2)]);
var inst_7783 = cljs.core.async.close_BANG_.call(null,out);
var state_7785__$1 = (function (){var statearr_7793 = state_7785;
(statearr_7793[(9)] = inst_7782);

return statearr_7793;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7785__$1,inst_7783);
} else {
if((state_val_7786 === (2))){
var inst_7762 = (state_7785[(8)]);
var inst_7764 = (inst_7762 < n);
var state_7785__$1 = state_7785;
if(cljs.core.truth_(inst_7764)){
var statearr_7794_7811 = state_7785__$1;
(statearr_7794_7811[(1)] = (4));

} else {
var statearr_7795_7812 = state_7785__$1;
(statearr_7795_7812[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7786 === (11))){
var inst_7762 = (state_7785[(8)]);
var inst_7772 = (state_7785[(2)]);
var inst_7773 = (inst_7762 + (1));
var inst_7762__$1 = inst_7773;
var state_7785__$1 = (function (){var statearr_7796 = state_7785;
(statearr_7796[(8)] = inst_7762__$1);

(statearr_7796[(10)] = inst_7772);

return statearr_7796;
})();
var statearr_7797_7813 = state_7785__$1;
(statearr_7797_7813[(2)] = null);

(statearr_7797_7813[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7786 === (9))){
var state_7785__$1 = state_7785;
var statearr_7798_7814 = state_7785__$1;
(statearr_7798_7814[(2)] = null);

(statearr_7798_7814[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7786 === (5))){
var state_7785__$1 = state_7785;
var statearr_7799_7815 = state_7785__$1;
(statearr_7799_7815[(2)] = null);

(statearr_7799_7815[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7786 === (10))){
var inst_7777 = (state_7785[(2)]);
var state_7785__$1 = state_7785;
var statearr_7800_7816 = state_7785__$1;
(statearr_7800_7816[(2)] = inst_7777);

(statearr_7800_7816[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7786 === (8))){
var inst_7767 = (state_7785[(7)]);
var state_7785__$1 = state_7785;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7785__$1,(11),out,inst_7767);
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
});})(c__4470__auto___7806,out))
;
return ((function (switch__4311__auto__,c__4470__auto___7806,out){
return (function() {
var cljs$core$async$state_machine__4312__auto__ = null;
var cljs$core$async$state_machine__4312__auto____0 = (function (){
var statearr_7801 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_7801[(0)] = cljs$core$async$state_machine__4312__auto__);

(statearr_7801[(1)] = (1));

return statearr_7801;
});
var cljs$core$async$state_machine__4312__auto____1 = (function (state_7785){
while(true){
var ret_value__4313__auto__ = (function (){try{while(true){
var result__4314__auto__ = switch__4311__auto__.call(null,state_7785);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4314__auto__;
}
break;
}
}catch (e7802){if((e7802 instanceof Object)){
var ex__4315__auto__ = e7802;
var statearr_7803_7817 = state_7785;
(statearr_7803_7817[(5)] = ex__4315__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7785);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7802;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7818 = state_7785;
state_7785 = G__7818;
continue;
} else {
return ret_value__4313__auto__;
}
break;
}
});
cljs$core$async$state_machine__4312__auto__ = function(state_7785){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__4312__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__4312__auto____1.call(this,state_7785);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__4312__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__4312__auto____0;
cljs$core$async$state_machine__4312__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__4312__auto____1;
return cljs$core$async$state_machine__4312__auto__;
})()
;})(switch__4311__auto__,c__4470__auto___7806,out))
})();
var state__4472__auto__ = (function (){var statearr_7804 = f__4471__auto__.call(null);
(statearr_7804[(6)] = c__4470__auto___7806);

return statearr_7804;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4472__auto__);
});})(c__4470__auto___7806,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async7820 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async7820 = (function (f,ch,meta7821){
this.f = f;
this.ch = ch;
this.meta7821 = meta7821;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async7820.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7822,meta7821__$1){
var self__ = this;
var _7822__$1 = this;
return (new cljs.core.async.t_cljs$core$async7820(self__.f,self__.ch,meta7821__$1));
});

cljs.core.async.t_cljs$core$async7820.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7822){
var self__ = this;
var _7822__$1 = this;
return self__.meta7821;
});

cljs.core.async.t_cljs$core$async7820.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async7820.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async7820.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async7820.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async7820.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async7823 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async7823 = (function (f,ch,meta7821,_,fn1,meta7824){
this.f = f;
this.ch = ch;
this.meta7821 = meta7821;
this._ = _;
this.fn1 = fn1;
this.meta7824 = meta7824;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async7823.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_7825,meta7824__$1){
var self__ = this;
var _7825__$1 = this;
return (new cljs.core.async.t_cljs$core$async7823(self__.f,self__.ch,self__.meta7821,self__._,self__.fn1,meta7824__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async7823.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_7825){
var self__ = this;
var _7825__$1 = this;
return self__.meta7824;
});})(___$1))
;

cljs.core.async.t_cljs$core$async7823.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async7823.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async7823.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async7823.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__7819_SHARP_){
return f1.call(null,(((p1__7819_SHARP_ == null))?null:self__.f.call(null,p1__7819_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async7823.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta7821","meta7821",-1837758505,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async7820","cljs.core.async/t_cljs$core$async7820",1388352003,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta7824","meta7824",133253608,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async7823.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async7823.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async7823";

cljs.core.async.t_cljs$core$async7823.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async7823");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async7823.
 */
cljs.core.async.__GT_t_cljs$core$async7823 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async7823(f__$1,ch__$1,meta7821__$1,___$2,fn1__$1,meta7824){
return (new cljs.core.async.t_cljs$core$async7823(f__$1,ch__$1,meta7821__$1,___$2,fn1__$1,meta7824));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async7823(self__.f,self__.ch,self__.meta7821,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3938__auto__ = ret;
if(cljs.core.truth_(and__3938__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3938__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async7820.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async7820.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async7820.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta7821","meta7821",-1837758505,null)], null);
});

cljs.core.async.t_cljs$core$async7820.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async7820.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async7820";

cljs.core.async.t_cljs$core$async7820.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async7820");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async7820.
 */
cljs.core.async.__GT_t_cljs$core$async7820 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async7820(f__$1,ch__$1,meta7821){
return (new cljs.core.async.t_cljs$core$async7820(f__$1,ch__$1,meta7821));
});

}

return (new cljs.core.async.t_cljs$core$async7820(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async7826 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async7826 = (function (f,ch,meta7827){
this.f = f;
this.ch = ch;
this.meta7827 = meta7827;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async7826.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7828,meta7827__$1){
var self__ = this;
var _7828__$1 = this;
return (new cljs.core.async.t_cljs$core$async7826(self__.f,self__.ch,meta7827__$1));
});

cljs.core.async.t_cljs$core$async7826.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7828){
var self__ = this;
var _7828__$1 = this;
return self__.meta7827;
});

cljs.core.async.t_cljs$core$async7826.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async7826.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async7826.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async7826.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async7826.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async7826.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async7826.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta7827","meta7827",-631827462,null)], null);
});

cljs.core.async.t_cljs$core$async7826.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async7826.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async7826";

cljs.core.async.t_cljs$core$async7826.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async7826");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async7826.
 */
cljs.core.async.__GT_t_cljs$core$async7826 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async7826(f__$1,ch__$1,meta7827){
return (new cljs.core.async.t_cljs$core$async7826(f__$1,ch__$1,meta7827));
});

}

return (new cljs.core.async.t_cljs$core$async7826(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async7829 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async7829 = (function (p,ch,meta7830){
this.p = p;
this.ch = ch;
this.meta7830 = meta7830;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async7829.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7831,meta7830__$1){
var self__ = this;
var _7831__$1 = this;
return (new cljs.core.async.t_cljs$core$async7829(self__.p,self__.ch,meta7830__$1));
});

cljs.core.async.t_cljs$core$async7829.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7831){
var self__ = this;
var _7831__$1 = this;
return self__.meta7830;
});

cljs.core.async.t_cljs$core$async7829.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async7829.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async7829.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async7829.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async7829.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async7829.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async7829.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async7829.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta7830","meta7830",1406036900,null)], null);
});

cljs.core.async.t_cljs$core$async7829.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async7829.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async7829";

cljs.core.async.t_cljs$core$async7829.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async7829");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async7829.
 */
cljs.core.async.__GT_t_cljs$core$async7829 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async7829(p__$1,ch__$1,meta7830){
return (new cljs.core.async.t_cljs$core$async7829(p__$1,ch__$1,meta7830));
});

}

return (new cljs.core.async.t_cljs$core$async7829(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__7833 = arguments.length;
switch (G__7833) {
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
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__4470__auto___7873 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__4470__auto___7873,out){
return (function (){
var f__4471__auto__ = (function (){var switch__4311__auto__ = ((function (c__4470__auto___7873,out){
return (function (state_7854){
var state_val_7855 = (state_7854[(1)]);
if((state_val_7855 === (7))){
var inst_7850 = (state_7854[(2)]);
var state_7854__$1 = state_7854;
var statearr_7856_7874 = state_7854__$1;
(statearr_7856_7874[(2)] = inst_7850);

(statearr_7856_7874[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7855 === (1))){
var state_7854__$1 = state_7854;
var statearr_7857_7875 = state_7854__$1;
(statearr_7857_7875[(2)] = null);

(statearr_7857_7875[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7855 === (4))){
var inst_7836 = (state_7854[(7)]);
var inst_7836__$1 = (state_7854[(2)]);
var inst_7837 = (inst_7836__$1 == null);
var state_7854__$1 = (function (){var statearr_7858 = state_7854;
(statearr_7858[(7)] = inst_7836__$1);

return statearr_7858;
})();
if(cljs.core.truth_(inst_7837)){
var statearr_7859_7876 = state_7854__$1;
(statearr_7859_7876[(1)] = (5));

} else {
var statearr_7860_7877 = state_7854__$1;
(statearr_7860_7877[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7855 === (6))){
var inst_7836 = (state_7854[(7)]);
var inst_7841 = p.call(null,inst_7836);
var state_7854__$1 = state_7854;
if(cljs.core.truth_(inst_7841)){
var statearr_7861_7878 = state_7854__$1;
(statearr_7861_7878[(1)] = (8));

} else {
var statearr_7862_7879 = state_7854__$1;
(statearr_7862_7879[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7855 === (3))){
var inst_7852 = (state_7854[(2)]);
var state_7854__$1 = state_7854;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7854__$1,inst_7852);
} else {
if((state_val_7855 === (2))){
var state_7854__$1 = state_7854;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7854__$1,(4),ch);
} else {
if((state_val_7855 === (11))){
var inst_7844 = (state_7854[(2)]);
var state_7854__$1 = state_7854;
var statearr_7863_7880 = state_7854__$1;
(statearr_7863_7880[(2)] = inst_7844);

(statearr_7863_7880[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7855 === (9))){
var state_7854__$1 = state_7854;
var statearr_7864_7881 = state_7854__$1;
(statearr_7864_7881[(2)] = null);

(statearr_7864_7881[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7855 === (5))){
var inst_7839 = cljs.core.async.close_BANG_.call(null,out);
var state_7854__$1 = state_7854;
var statearr_7865_7882 = state_7854__$1;
(statearr_7865_7882[(2)] = inst_7839);

(statearr_7865_7882[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7855 === (10))){
var inst_7847 = (state_7854[(2)]);
var state_7854__$1 = (function (){var statearr_7866 = state_7854;
(statearr_7866[(8)] = inst_7847);

return statearr_7866;
})();
var statearr_7867_7883 = state_7854__$1;
(statearr_7867_7883[(2)] = null);

(statearr_7867_7883[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7855 === (8))){
var inst_7836 = (state_7854[(7)]);
var state_7854__$1 = state_7854;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7854__$1,(11),out,inst_7836);
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
});})(c__4470__auto___7873,out))
;
return ((function (switch__4311__auto__,c__4470__auto___7873,out){
return (function() {
var cljs$core$async$state_machine__4312__auto__ = null;
var cljs$core$async$state_machine__4312__auto____0 = (function (){
var statearr_7868 = [null,null,null,null,null,null,null,null,null];
(statearr_7868[(0)] = cljs$core$async$state_machine__4312__auto__);

(statearr_7868[(1)] = (1));

return statearr_7868;
});
var cljs$core$async$state_machine__4312__auto____1 = (function (state_7854){
while(true){
var ret_value__4313__auto__ = (function (){try{while(true){
var result__4314__auto__ = switch__4311__auto__.call(null,state_7854);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4314__auto__;
}
break;
}
}catch (e7869){if((e7869 instanceof Object)){
var ex__4315__auto__ = e7869;
var statearr_7870_7884 = state_7854;
(statearr_7870_7884[(5)] = ex__4315__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7854);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7869;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7885 = state_7854;
state_7854 = G__7885;
continue;
} else {
return ret_value__4313__auto__;
}
break;
}
});
cljs$core$async$state_machine__4312__auto__ = function(state_7854){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__4312__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__4312__auto____1.call(this,state_7854);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__4312__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__4312__auto____0;
cljs$core$async$state_machine__4312__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__4312__auto____1;
return cljs$core$async$state_machine__4312__auto__;
})()
;})(switch__4311__auto__,c__4470__auto___7873,out))
})();
var state__4472__auto__ = (function (){var statearr_7871 = f__4471__auto__.call(null);
(statearr_7871[(6)] = c__4470__auto___7873);

return statearr_7871;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4472__auto__);
});})(c__4470__auto___7873,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__7887 = arguments.length;
switch (G__7887) {
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
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__4470__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__4470__auto__){
return (function (){
var f__4471__auto__ = (function (){var switch__4311__auto__ = ((function (c__4470__auto__){
return (function (state_7950){
var state_val_7951 = (state_7950[(1)]);
if((state_val_7951 === (7))){
var inst_7946 = (state_7950[(2)]);
var state_7950__$1 = state_7950;
var statearr_7952_7990 = state_7950__$1;
(statearr_7952_7990[(2)] = inst_7946);

(statearr_7952_7990[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7951 === (20))){
var inst_7916 = (state_7950[(7)]);
var inst_7927 = (state_7950[(2)]);
var inst_7928 = cljs.core.next.call(null,inst_7916);
var inst_7902 = inst_7928;
var inst_7903 = null;
var inst_7904 = (0);
var inst_7905 = (0);
var state_7950__$1 = (function (){var statearr_7953 = state_7950;
(statearr_7953[(8)] = inst_7902);

(statearr_7953[(9)] = inst_7903);

(statearr_7953[(10)] = inst_7904);

(statearr_7953[(11)] = inst_7905);

(statearr_7953[(12)] = inst_7927);

return statearr_7953;
})();
var statearr_7954_7991 = state_7950__$1;
(statearr_7954_7991[(2)] = null);

(statearr_7954_7991[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7951 === (1))){
var state_7950__$1 = state_7950;
var statearr_7955_7992 = state_7950__$1;
(statearr_7955_7992[(2)] = null);

(statearr_7955_7992[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7951 === (4))){
var inst_7891 = (state_7950[(13)]);
var inst_7891__$1 = (state_7950[(2)]);
var inst_7892 = (inst_7891__$1 == null);
var state_7950__$1 = (function (){var statearr_7956 = state_7950;
(statearr_7956[(13)] = inst_7891__$1);

return statearr_7956;
})();
if(cljs.core.truth_(inst_7892)){
var statearr_7957_7993 = state_7950__$1;
(statearr_7957_7993[(1)] = (5));

} else {
var statearr_7958_7994 = state_7950__$1;
(statearr_7958_7994[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7951 === (15))){
var state_7950__$1 = state_7950;
var statearr_7962_7995 = state_7950__$1;
(statearr_7962_7995[(2)] = null);

(statearr_7962_7995[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7951 === (21))){
var state_7950__$1 = state_7950;
var statearr_7963_7996 = state_7950__$1;
(statearr_7963_7996[(2)] = null);

(statearr_7963_7996[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7951 === (13))){
var inst_7902 = (state_7950[(8)]);
var inst_7903 = (state_7950[(9)]);
var inst_7904 = (state_7950[(10)]);
var inst_7905 = (state_7950[(11)]);
var inst_7912 = (state_7950[(2)]);
var inst_7913 = (inst_7905 + (1));
var tmp7959 = inst_7902;
var tmp7960 = inst_7903;
var tmp7961 = inst_7904;
var inst_7902__$1 = tmp7959;
var inst_7903__$1 = tmp7960;
var inst_7904__$1 = tmp7961;
var inst_7905__$1 = inst_7913;
var state_7950__$1 = (function (){var statearr_7964 = state_7950;
(statearr_7964[(14)] = inst_7912);

(statearr_7964[(8)] = inst_7902__$1);

(statearr_7964[(9)] = inst_7903__$1);

(statearr_7964[(10)] = inst_7904__$1);

(statearr_7964[(11)] = inst_7905__$1);

return statearr_7964;
})();
var statearr_7965_7997 = state_7950__$1;
(statearr_7965_7997[(2)] = null);

(statearr_7965_7997[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7951 === (22))){
var state_7950__$1 = state_7950;
var statearr_7966_7998 = state_7950__$1;
(statearr_7966_7998[(2)] = null);

(statearr_7966_7998[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7951 === (6))){
var inst_7891 = (state_7950[(13)]);
var inst_7900 = f.call(null,inst_7891);
var inst_7901 = cljs.core.seq.call(null,inst_7900);
var inst_7902 = inst_7901;
var inst_7903 = null;
var inst_7904 = (0);
var inst_7905 = (0);
var state_7950__$1 = (function (){var statearr_7967 = state_7950;
(statearr_7967[(8)] = inst_7902);

(statearr_7967[(9)] = inst_7903);

(statearr_7967[(10)] = inst_7904);

(statearr_7967[(11)] = inst_7905);

return statearr_7967;
})();
var statearr_7968_7999 = state_7950__$1;
(statearr_7968_7999[(2)] = null);

(statearr_7968_7999[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7951 === (17))){
var inst_7916 = (state_7950[(7)]);
var inst_7920 = cljs.core.chunk_first.call(null,inst_7916);
var inst_7921 = cljs.core.chunk_rest.call(null,inst_7916);
var inst_7922 = cljs.core.count.call(null,inst_7920);
var inst_7902 = inst_7921;
var inst_7903 = inst_7920;
var inst_7904 = inst_7922;
var inst_7905 = (0);
var state_7950__$1 = (function (){var statearr_7969 = state_7950;
(statearr_7969[(8)] = inst_7902);

(statearr_7969[(9)] = inst_7903);

(statearr_7969[(10)] = inst_7904);

(statearr_7969[(11)] = inst_7905);

return statearr_7969;
})();
var statearr_7970_8000 = state_7950__$1;
(statearr_7970_8000[(2)] = null);

(statearr_7970_8000[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7951 === (3))){
var inst_7948 = (state_7950[(2)]);
var state_7950__$1 = state_7950;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7950__$1,inst_7948);
} else {
if((state_val_7951 === (12))){
var inst_7936 = (state_7950[(2)]);
var state_7950__$1 = state_7950;
var statearr_7971_8001 = state_7950__$1;
(statearr_7971_8001[(2)] = inst_7936);

(statearr_7971_8001[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7951 === (2))){
var state_7950__$1 = state_7950;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7950__$1,(4),in$);
} else {
if((state_val_7951 === (23))){
var inst_7944 = (state_7950[(2)]);
var state_7950__$1 = state_7950;
var statearr_7972_8002 = state_7950__$1;
(statearr_7972_8002[(2)] = inst_7944);

(statearr_7972_8002[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7951 === (19))){
var inst_7931 = (state_7950[(2)]);
var state_7950__$1 = state_7950;
var statearr_7973_8003 = state_7950__$1;
(statearr_7973_8003[(2)] = inst_7931);

(statearr_7973_8003[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7951 === (11))){
var inst_7902 = (state_7950[(8)]);
var inst_7916 = (state_7950[(7)]);
var inst_7916__$1 = cljs.core.seq.call(null,inst_7902);
var state_7950__$1 = (function (){var statearr_7974 = state_7950;
(statearr_7974[(7)] = inst_7916__$1);

return statearr_7974;
})();
if(inst_7916__$1){
var statearr_7975_8004 = state_7950__$1;
(statearr_7975_8004[(1)] = (14));

} else {
var statearr_7976_8005 = state_7950__$1;
(statearr_7976_8005[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7951 === (9))){
var inst_7938 = (state_7950[(2)]);
var inst_7939 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_7950__$1 = (function (){var statearr_7977 = state_7950;
(statearr_7977[(15)] = inst_7938);

return statearr_7977;
})();
if(cljs.core.truth_(inst_7939)){
var statearr_7978_8006 = state_7950__$1;
(statearr_7978_8006[(1)] = (21));

} else {
var statearr_7979_8007 = state_7950__$1;
(statearr_7979_8007[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7951 === (5))){
var inst_7894 = cljs.core.async.close_BANG_.call(null,out);
var state_7950__$1 = state_7950;
var statearr_7980_8008 = state_7950__$1;
(statearr_7980_8008[(2)] = inst_7894);

(statearr_7980_8008[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7951 === (14))){
var inst_7916 = (state_7950[(7)]);
var inst_7918 = cljs.core.chunked_seq_QMARK_.call(null,inst_7916);
var state_7950__$1 = state_7950;
if(inst_7918){
var statearr_7981_8009 = state_7950__$1;
(statearr_7981_8009[(1)] = (17));

} else {
var statearr_7982_8010 = state_7950__$1;
(statearr_7982_8010[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7951 === (16))){
var inst_7934 = (state_7950[(2)]);
var state_7950__$1 = state_7950;
var statearr_7983_8011 = state_7950__$1;
(statearr_7983_8011[(2)] = inst_7934);

(statearr_7983_8011[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7951 === (10))){
var inst_7903 = (state_7950[(9)]);
var inst_7905 = (state_7950[(11)]);
var inst_7910 = cljs.core._nth.call(null,inst_7903,inst_7905);
var state_7950__$1 = state_7950;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7950__$1,(13),out,inst_7910);
} else {
if((state_val_7951 === (18))){
var inst_7916 = (state_7950[(7)]);
var inst_7925 = cljs.core.first.call(null,inst_7916);
var state_7950__$1 = state_7950;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7950__$1,(20),out,inst_7925);
} else {
if((state_val_7951 === (8))){
var inst_7904 = (state_7950[(10)]);
var inst_7905 = (state_7950[(11)]);
var inst_7907 = (inst_7905 < inst_7904);
var inst_7908 = inst_7907;
var state_7950__$1 = state_7950;
if(cljs.core.truth_(inst_7908)){
var statearr_7984_8012 = state_7950__$1;
(statearr_7984_8012[(1)] = (10));

} else {
var statearr_7985_8013 = state_7950__$1;
(statearr_7985_8013[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__4470__auto__))
;
return ((function (switch__4311__auto__,c__4470__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__4312__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__4312__auto____0 = (function (){
var statearr_7986 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_7986[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__4312__auto__);

(statearr_7986[(1)] = (1));

return statearr_7986;
});
var cljs$core$async$mapcat_STAR__$_state_machine__4312__auto____1 = (function (state_7950){
while(true){
var ret_value__4313__auto__ = (function (){try{while(true){
var result__4314__auto__ = switch__4311__auto__.call(null,state_7950);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4314__auto__;
}
break;
}
}catch (e7987){if((e7987 instanceof Object)){
var ex__4315__auto__ = e7987;
var statearr_7988_8014 = state_7950;
(statearr_7988_8014[(5)] = ex__4315__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7950);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7987;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8015 = state_7950;
state_7950 = G__8015;
continue;
} else {
return ret_value__4313__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__4312__auto__ = function(state_7950){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__4312__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__4312__auto____1.call(this,state_7950);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__4312__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__4312__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__4312__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__4312__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__4312__auto__;
})()
;})(switch__4311__auto__,c__4470__auto__))
})();
var state__4472__auto__ = (function (){var statearr_7989 = f__4471__auto__.call(null);
(statearr_7989[(6)] = c__4470__auto__);

return statearr_7989;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4472__auto__);
});})(c__4470__auto__))
);

return c__4470__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__8017 = arguments.length;
switch (G__8017) {
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
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__8020 = arguments.length;
switch (G__8020) {
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
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__8023 = arguments.length;
switch (G__8023) {
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
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__4470__auto___8070 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__4470__auto___8070,out){
return (function (){
var f__4471__auto__ = (function (){var switch__4311__auto__ = ((function (c__4470__auto___8070,out){
return (function (state_8047){
var state_val_8048 = (state_8047[(1)]);
if((state_val_8048 === (7))){
var inst_8042 = (state_8047[(2)]);
var state_8047__$1 = state_8047;
var statearr_8049_8071 = state_8047__$1;
(statearr_8049_8071[(2)] = inst_8042);

(statearr_8049_8071[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8048 === (1))){
var inst_8024 = null;
var state_8047__$1 = (function (){var statearr_8050 = state_8047;
(statearr_8050[(7)] = inst_8024);

return statearr_8050;
})();
var statearr_8051_8072 = state_8047__$1;
(statearr_8051_8072[(2)] = null);

(statearr_8051_8072[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8048 === (4))){
var inst_8027 = (state_8047[(8)]);
var inst_8027__$1 = (state_8047[(2)]);
var inst_8028 = (inst_8027__$1 == null);
var inst_8029 = cljs.core.not.call(null,inst_8028);
var state_8047__$1 = (function (){var statearr_8052 = state_8047;
(statearr_8052[(8)] = inst_8027__$1);

return statearr_8052;
})();
if(inst_8029){
var statearr_8053_8073 = state_8047__$1;
(statearr_8053_8073[(1)] = (5));

} else {
var statearr_8054_8074 = state_8047__$1;
(statearr_8054_8074[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8048 === (6))){
var state_8047__$1 = state_8047;
var statearr_8055_8075 = state_8047__$1;
(statearr_8055_8075[(2)] = null);

(statearr_8055_8075[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8048 === (3))){
var inst_8044 = (state_8047[(2)]);
var inst_8045 = cljs.core.async.close_BANG_.call(null,out);
var state_8047__$1 = (function (){var statearr_8056 = state_8047;
(statearr_8056[(9)] = inst_8044);

return statearr_8056;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8047__$1,inst_8045);
} else {
if((state_val_8048 === (2))){
var state_8047__$1 = state_8047;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8047__$1,(4),ch);
} else {
if((state_val_8048 === (11))){
var inst_8027 = (state_8047[(8)]);
var inst_8036 = (state_8047[(2)]);
var inst_8024 = inst_8027;
var state_8047__$1 = (function (){var statearr_8057 = state_8047;
(statearr_8057[(10)] = inst_8036);

(statearr_8057[(7)] = inst_8024);

return statearr_8057;
})();
var statearr_8058_8076 = state_8047__$1;
(statearr_8058_8076[(2)] = null);

(statearr_8058_8076[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8048 === (9))){
var inst_8027 = (state_8047[(8)]);
var state_8047__$1 = state_8047;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8047__$1,(11),out,inst_8027);
} else {
if((state_val_8048 === (5))){
var inst_8024 = (state_8047[(7)]);
var inst_8027 = (state_8047[(8)]);
var inst_8031 = cljs.core._EQ_.call(null,inst_8027,inst_8024);
var state_8047__$1 = state_8047;
if(inst_8031){
var statearr_8060_8077 = state_8047__$1;
(statearr_8060_8077[(1)] = (8));

} else {
var statearr_8061_8078 = state_8047__$1;
(statearr_8061_8078[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8048 === (10))){
var inst_8039 = (state_8047[(2)]);
var state_8047__$1 = state_8047;
var statearr_8062_8079 = state_8047__$1;
(statearr_8062_8079[(2)] = inst_8039);

(statearr_8062_8079[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8048 === (8))){
var inst_8024 = (state_8047[(7)]);
var tmp8059 = inst_8024;
var inst_8024__$1 = tmp8059;
var state_8047__$1 = (function (){var statearr_8063 = state_8047;
(statearr_8063[(7)] = inst_8024__$1);

return statearr_8063;
})();
var statearr_8064_8080 = state_8047__$1;
(statearr_8064_8080[(2)] = null);

(statearr_8064_8080[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__4470__auto___8070,out))
;
return ((function (switch__4311__auto__,c__4470__auto___8070,out){
return (function() {
var cljs$core$async$state_machine__4312__auto__ = null;
var cljs$core$async$state_machine__4312__auto____0 = (function (){
var statearr_8065 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_8065[(0)] = cljs$core$async$state_machine__4312__auto__);

(statearr_8065[(1)] = (1));

return statearr_8065;
});
var cljs$core$async$state_machine__4312__auto____1 = (function (state_8047){
while(true){
var ret_value__4313__auto__ = (function (){try{while(true){
var result__4314__auto__ = switch__4311__auto__.call(null,state_8047);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4314__auto__;
}
break;
}
}catch (e8066){if((e8066 instanceof Object)){
var ex__4315__auto__ = e8066;
var statearr_8067_8081 = state_8047;
(statearr_8067_8081[(5)] = ex__4315__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8047);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8066;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8082 = state_8047;
state_8047 = G__8082;
continue;
} else {
return ret_value__4313__auto__;
}
break;
}
});
cljs$core$async$state_machine__4312__auto__ = function(state_8047){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__4312__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__4312__auto____1.call(this,state_8047);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__4312__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__4312__auto____0;
cljs$core$async$state_machine__4312__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__4312__auto____1;
return cljs$core$async$state_machine__4312__auto__;
})()
;})(switch__4311__auto__,c__4470__auto___8070,out))
})();
var state__4472__auto__ = (function (){var statearr_8068 = f__4471__auto__.call(null);
(statearr_8068[(6)] = c__4470__auto___8070);

return statearr_8068;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4472__auto__);
});})(c__4470__auto___8070,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__8084 = arguments.length;
switch (G__8084) {
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
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__4470__auto___8150 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__4470__auto___8150,out){
return (function (){
var f__4471__auto__ = (function (){var switch__4311__auto__ = ((function (c__4470__auto___8150,out){
return (function (state_8122){
var state_val_8123 = (state_8122[(1)]);
if((state_val_8123 === (7))){
var inst_8118 = (state_8122[(2)]);
var state_8122__$1 = state_8122;
var statearr_8124_8151 = state_8122__$1;
(statearr_8124_8151[(2)] = inst_8118);

(statearr_8124_8151[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8123 === (1))){
var inst_8085 = (new Array(n));
var inst_8086 = inst_8085;
var inst_8087 = (0);
var state_8122__$1 = (function (){var statearr_8125 = state_8122;
(statearr_8125[(7)] = inst_8086);

(statearr_8125[(8)] = inst_8087);

return statearr_8125;
})();
var statearr_8126_8152 = state_8122__$1;
(statearr_8126_8152[(2)] = null);

(statearr_8126_8152[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8123 === (4))){
var inst_8090 = (state_8122[(9)]);
var inst_8090__$1 = (state_8122[(2)]);
var inst_8091 = (inst_8090__$1 == null);
var inst_8092 = cljs.core.not.call(null,inst_8091);
var state_8122__$1 = (function (){var statearr_8127 = state_8122;
(statearr_8127[(9)] = inst_8090__$1);

return statearr_8127;
})();
if(inst_8092){
var statearr_8128_8153 = state_8122__$1;
(statearr_8128_8153[(1)] = (5));

} else {
var statearr_8129_8154 = state_8122__$1;
(statearr_8129_8154[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8123 === (15))){
var inst_8112 = (state_8122[(2)]);
var state_8122__$1 = state_8122;
var statearr_8130_8155 = state_8122__$1;
(statearr_8130_8155[(2)] = inst_8112);

(statearr_8130_8155[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8123 === (13))){
var state_8122__$1 = state_8122;
var statearr_8131_8156 = state_8122__$1;
(statearr_8131_8156[(2)] = null);

(statearr_8131_8156[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8123 === (6))){
var inst_8087 = (state_8122[(8)]);
var inst_8108 = (inst_8087 > (0));
var state_8122__$1 = state_8122;
if(cljs.core.truth_(inst_8108)){
var statearr_8132_8157 = state_8122__$1;
(statearr_8132_8157[(1)] = (12));

} else {
var statearr_8133_8158 = state_8122__$1;
(statearr_8133_8158[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8123 === (3))){
var inst_8120 = (state_8122[(2)]);
var state_8122__$1 = state_8122;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8122__$1,inst_8120);
} else {
if((state_val_8123 === (12))){
var inst_8086 = (state_8122[(7)]);
var inst_8110 = cljs.core.vec.call(null,inst_8086);
var state_8122__$1 = state_8122;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8122__$1,(15),out,inst_8110);
} else {
if((state_val_8123 === (2))){
var state_8122__$1 = state_8122;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8122__$1,(4),ch);
} else {
if((state_val_8123 === (11))){
var inst_8102 = (state_8122[(2)]);
var inst_8103 = (new Array(n));
var inst_8086 = inst_8103;
var inst_8087 = (0);
var state_8122__$1 = (function (){var statearr_8134 = state_8122;
(statearr_8134[(10)] = inst_8102);

(statearr_8134[(7)] = inst_8086);

(statearr_8134[(8)] = inst_8087);

return statearr_8134;
})();
var statearr_8135_8159 = state_8122__$1;
(statearr_8135_8159[(2)] = null);

(statearr_8135_8159[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8123 === (9))){
var inst_8086 = (state_8122[(7)]);
var inst_8100 = cljs.core.vec.call(null,inst_8086);
var state_8122__$1 = state_8122;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8122__$1,(11),out,inst_8100);
} else {
if((state_val_8123 === (5))){
var inst_8095 = (state_8122[(11)]);
var inst_8086 = (state_8122[(7)]);
var inst_8090 = (state_8122[(9)]);
var inst_8087 = (state_8122[(8)]);
var inst_8094 = (inst_8086[inst_8087] = inst_8090);
var inst_8095__$1 = (inst_8087 + (1));
var inst_8096 = (inst_8095__$1 < n);
var state_8122__$1 = (function (){var statearr_8136 = state_8122;
(statearr_8136[(11)] = inst_8095__$1);

(statearr_8136[(12)] = inst_8094);

return statearr_8136;
})();
if(cljs.core.truth_(inst_8096)){
var statearr_8137_8160 = state_8122__$1;
(statearr_8137_8160[(1)] = (8));

} else {
var statearr_8138_8161 = state_8122__$1;
(statearr_8138_8161[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8123 === (14))){
var inst_8115 = (state_8122[(2)]);
var inst_8116 = cljs.core.async.close_BANG_.call(null,out);
var state_8122__$1 = (function (){var statearr_8140 = state_8122;
(statearr_8140[(13)] = inst_8115);

return statearr_8140;
})();
var statearr_8141_8162 = state_8122__$1;
(statearr_8141_8162[(2)] = inst_8116);

(statearr_8141_8162[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8123 === (10))){
var inst_8106 = (state_8122[(2)]);
var state_8122__$1 = state_8122;
var statearr_8142_8163 = state_8122__$1;
(statearr_8142_8163[(2)] = inst_8106);

(statearr_8142_8163[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8123 === (8))){
var inst_8095 = (state_8122[(11)]);
var inst_8086 = (state_8122[(7)]);
var tmp8139 = inst_8086;
var inst_8086__$1 = tmp8139;
var inst_8087 = inst_8095;
var state_8122__$1 = (function (){var statearr_8143 = state_8122;
(statearr_8143[(7)] = inst_8086__$1);

(statearr_8143[(8)] = inst_8087);

return statearr_8143;
})();
var statearr_8144_8164 = state_8122__$1;
(statearr_8144_8164[(2)] = null);

(statearr_8144_8164[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__4470__auto___8150,out))
;
return ((function (switch__4311__auto__,c__4470__auto___8150,out){
return (function() {
var cljs$core$async$state_machine__4312__auto__ = null;
var cljs$core$async$state_machine__4312__auto____0 = (function (){
var statearr_8145 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8145[(0)] = cljs$core$async$state_machine__4312__auto__);

(statearr_8145[(1)] = (1));

return statearr_8145;
});
var cljs$core$async$state_machine__4312__auto____1 = (function (state_8122){
while(true){
var ret_value__4313__auto__ = (function (){try{while(true){
var result__4314__auto__ = switch__4311__auto__.call(null,state_8122);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4314__auto__;
}
break;
}
}catch (e8146){if((e8146 instanceof Object)){
var ex__4315__auto__ = e8146;
var statearr_8147_8165 = state_8122;
(statearr_8147_8165[(5)] = ex__4315__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8122);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8146;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8166 = state_8122;
state_8122 = G__8166;
continue;
} else {
return ret_value__4313__auto__;
}
break;
}
});
cljs$core$async$state_machine__4312__auto__ = function(state_8122){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__4312__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__4312__auto____1.call(this,state_8122);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__4312__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__4312__auto____0;
cljs$core$async$state_machine__4312__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__4312__auto____1;
return cljs$core$async$state_machine__4312__auto__;
})()
;})(switch__4311__auto__,c__4470__auto___8150,out))
})();
var state__4472__auto__ = (function (){var statearr_8148 = f__4471__auto__.call(null);
(statearr_8148[(6)] = c__4470__auto___8150);

return statearr_8148;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4472__auto__);
});})(c__4470__auto___8150,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__8168 = arguments.length;
switch (G__8168) {
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
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__4470__auto___8238 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__4470__auto___8238,out){
return (function (){
var f__4471__auto__ = (function (){var switch__4311__auto__ = ((function (c__4470__auto___8238,out){
return (function (state_8210){
var state_val_8211 = (state_8210[(1)]);
if((state_val_8211 === (7))){
var inst_8206 = (state_8210[(2)]);
var state_8210__$1 = state_8210;
var statearr_8212_8239 = state_8210__$1;
(statearr_8212_8239[(2)] = inst_8206);

(statearr_8212_8239[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8211 === (1))){
var inst_8169 = [];
var inst_8170 = inst_8169;
var inst_8171 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_8210__$1 = (function (){var statearr_8213 = state_8210;
(statearr_8213[(7)] = inst_8170);

(statearr_8213[(8)] = inst_8171);

return statearr_8213;
})();
var statearr_8214_8240 = state_8210__$1;
(statearr_8214_8240[(2)] = null);

(statearr_8214_8240[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8211 === (4))){
var inst_8174 = (state_8210[(9)]);
var inst_8174__$1 = (state_8210[(2)]);
var inst_8175 = (inst_8174__$1 == null);
var inst_8176 = cljs.core.not.call(null,inst_8175);
var state_8210__$1 = (function (){var statearr_8215 = state_8210;
(statearr_8215[(9)] = inst_8174__$1);

return statearr_8215;
})();
if(inst_8176){
var statearr_8216_8241 = state_8210__$1;
(statearr_8216_8241[(1)] = (5));

} else {
var statearr_8217_8242 = state_8210__$1;
(statearr_8217_8242[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8211 === (15))){
var inst_8200 = (state_8210[(2)]);
var state_8210__$1 = state_8210;
var statearr_8218_8243 = state_8210__$1;
(statearr_8218_8243[(2)] = inst_8200);

(statearr_8218_8243[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8211 === (13))){
var state_8210__$1 = state_8210;
var statearr_8219_8244 = state_8210__$1;
(statearr_8219_8244[(2)] = null);

(statearr_8219_8244[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8211 === (6))){
var inst_8170 = (state_8210[(7)]);
var inst_8195 = inst_8170.length;
var inst_8196 = (inst_8195 > (0));
var state_8210__$1 = state_8210;
if(cljs.core.truth_(inst_8196)){
var statearr_8220_8245 = state_8210__$1;
(statearr_8220_8245[(1)] = (12));

} else {
var statearr_8221_8246 = state_8210__$1;
(statearr_8221_8246[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8211 === (3))){
var inst_8208 = (state_8210[(2)]);
var state_8210__$1 = state_8210;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8210__$1,inst_8208);
} else {
if((state_val_8211 === (12))){
var inst_8170 = (state_8210[(7)]);
var inst_8198 = cljs.core.vec.call(null,inst_8170);
var state_8210__$1 = state_8210;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8210__$1,(15),out,inst_8198);
} else {
if((state_val_8211 === (2))){
var state_8210__$1 = state_8210;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8210__$1,(4),ch);
} else {
if((state_val_8211 === (11))){
var inst_8178 = (state_8210[(10)]);
var inst_8174 = (state_8210[(9)]);
var inst_8188 = (state_8210[(2)]);
var inst_8189 = [];
var inst_8190 = inst_8189.push(inst_8174);
var inst_8170 = inst_8189;
var inst_8171 = inst_8178;
var state_8210__$1 = (function (){var statearr_8222 = state_8210;
(statearr_8222[(11)] = inst_8188);

(statearr_8222[(7)] = inst_8170);

(statearr_8222[(8)] = inst_8171);

(statearr_8222[(12)] = inst_8190);

return statearr_8222;
})();
var statearr_8223_8247 = state_8210__$1;
(statearr_8223_8247[(2)] = null);

(statearr_8223_8247[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8211 === (9))){
var inst_8170 = (state_8210[(7)]);
var inst_8186 = cljs.core.vec.call(null,inst_8170);
var state_8210__$1 = state_8210;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8210__$1,(11),out,inst_8186);
} else {
if((state_val_8211 === (5))){
var inst_8178 = (state_8210[(10)]);
var inst_8174 = (state_8210[(9)]);
var inst_8171 = (state_8210[(8)]);
var inst_8178__$1 = f.call(null,inst_8174);
var inst_8179 = cljs.core._EQ_.call(null,inst_8178__$1,inst_8171);
var inst_8180 = cljs.core.keyword_identical_QMARK_.call(null,inst_8171,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_8181 = ((inst_8179) || (inst_8180));
var state_8210__$1 = (function (){var statearr_8224 = state_8210;
(statearr_8224[(10)] = inst_8178__$1);

return statearr_8224;
})();
if(cljs.core.truth_(inst_8181)){
var statearr_8225_8248 = state_8210__$1;
(statearr_8225_8248[(1)] = (8));

} else {
var statearr_8226_8249 = state_8210__$1;
(statearr_8226_8249[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8211 === (14))){
var inst_8203 = (state_8210[(2)]);
var inst_8204 = cljs.core.async.close_BANG_.call(null,out);
var state_8210__$1 = (function (){var statearr_8228 = state_8210;
(statearr_8228[(13)] = inst_8203);

return statearr_8228;
})();
var statearr_8229_8250 = state_8210__$1;
(statearr_8229_8250[(2)] = inst_8204);

(statearr_8229_8250[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8211 === (10))){
var inst_8193 = (state_8210[(2)]);
var state_8210__$1 = state_8210;
var statearr_8230_8251 = state_8210__$1;
(statearr_8230_8251[(2)] = inst_8193);

(statearr_8230_8251[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8211 === (8))){
var inst_8170 = (state_8210[(7)]);
var inst_8178 = (state_8210[(10)]);
var inst_8174 = (state_8210[(9)]);
var inst_8183 = inst_8170.push(inst_8174);
var tmp8227 = inst_8170;
var inst_8170__$1 = tmp8227;
var inst_8171 = inst_8178;
var state_8210__$1 = (function (){var statearr_8231 = state_8210;
(statearr_8231[(7)] = inst_8170__$1);

(statearr_8231[(8)] = inst_8171);

(statearr_8231[(14)] = inst_8183);

return statearr_8231;
})();
var statearr_8232_8252 = state_8210__$1;
(statearr_8232_8252[(2)] = null);

(statearr_8232_8252[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__4470__auto___8238,out))
;
return ((function (switch__4311__auto__,c__4470__auto___8238,out){
return (function() {
var cljs$core$async$state_machine__4312__auto__ = null;
var cljs$core$async$state_machine__4312__auto____0 = (function (){
var statearr_8233 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8233[(0)] = cljs$core$async$state_machine__4312__auto__);

(statearr_8233[(1)] = (1));

return statearr_8233;
});
var cljs$core$async$state_machine__4312__auto____1 = (function (state_8210){
while(true){
var ret_value__4313__auto__ = (function (){try{while(true){
var result__4314__auto__ = switch__4311__auto__.call(null,state_8210);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4314__auto__;
}
break;
}
}catch (e8234){if((e8234 instanceof Object)){
var ex__4315__auto__ = e8234;
var statearr_8235_8253 = state_8210;
(statearr_8235_8253[(5)] = ex__4315__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8210);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8234;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8254 = state_8210;
state_8210 = G__8254;
continue;
} else {
return ret_value__4313__auto__;
}
break;
}
});
cljs$core$async$state_machine__4312__auto__ = function(state_8210){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__4312__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__4312__auto____1.call(this,state_8210);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__4312__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__4312__auto____0;
cljs$core$async$state_machine__4312__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__4312__auto____1;
return cljs$core$async$state_machine__4312__auto__;
})()
;})(switch__4311__auto__,c__4470__auto___8238,out))
})();
var state__4472__auto__ = (function (){var statearr_8236 = f__4471__auto__.call(null);
(statearr_8236[(6)] = c__4470__auto___8238);

return statearr_8236;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4472__auto__);
});})(c__4470__auto___8238,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map
