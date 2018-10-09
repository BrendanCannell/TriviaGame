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
var G__23829 = arguments.length;
switch (G__23829) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23830 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23830 = (function (f,blockable,meta23831){
this.f = f;
this.blockable = blockable;
this.meta23831 = meta23831;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23830.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23832,meta23831__$1){
var self__ = this;
var _23832__$1 = this;
return (new cljs.core.async.t_cljs$core$async23830(self__.f,self__.blockable,meta23831__$1));
});

cljs.core.async.t_cljs$core$async23830.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23832){
var self__ = this;
var _23832__$1 = this;
return self__.meta23831;
});

cljs.core.async.t_cljs$core$async23830.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23830.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async23830.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async23830.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async23830.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta23831","meta23831",-1729753265,null)], null);
});

cljs.core.async.t_cljs$core$async23830.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23830.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23830";

cljs.core.async.t_cljs$core$async23830.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async23830");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23830.
 */
cljs.core.async.__GT_t_cljs$core$async23830 = (function cljs$core$async$__GT_t_cljs$core$async23830(f__$1,blockable__$1,meta23831){
return (new cljs.core.async.t_cljs$core$async23830(f__$1,blockable__$1,meta23831));
});

}

return (new cljs.core.async.t_cljs$core$async23830(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__23836 = arguments.length;
switch (G__23836) {
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
var G__23839 = arguments.length;
switch (G__23839) {
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
var G__23842 = arguments.length;
switch (G__23842) {
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
var val_23844 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_23844);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_23844,ret){
return (function (){
return fn1.call(null,val_23844);
});})(val_23844,ret))
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
var G__23846 = arguments.length;
switch (G__23846) {
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
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5455__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5455__auto__))
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
var n__4408__auto___23848 = n;
var x_23849 = (0);
while(true){
if((x_23849 < n__4408__auto___23848)){
(a[x_23849] = (0));

var G__23850 = (x_23849 + (1));
x_23849 = G__23850;
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

var G__23851 = (i + (1));
i = G__23851;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23852 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23852 = (function (flag,meta23853){
this.flag = flag;
this.meta23853 = meta23853;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23852.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_23854,meta23853__$1){
var self__ = this;
var _23854__$1 = this;
return (new cljs.core.async.t_cljs$core$async23852(self__.flag,meta23853__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async23852.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_23854){
var self__ = this;
var _23854__$1 = this;
return self__.meta23853;
});})(flag))
;

cljs.core.async.t_cljs$core$async23852.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23852.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async23852.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async23852.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async23852.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta23853","meta23853",-1164088319,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async23852.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23852.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23852";

cljs.core.async.t_cljs$core$async23852.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async23852");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23852.
 */
cljs.core.async.__GT_t_cljs$core$async23852 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async23852(flag__$1,meta23853){
return (new cljs.core.async.t_cljs$core$async23852(flag__$1,meta23853));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async23852(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23855 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23855 = (function (flag,cb,meta23856){
this.flag = flag;
this.cb = cb;
this.meta23856 = meta23856;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23855.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23857,meta23856__$1){
var self__ = this;
var _23857__$1 = this;
return (new cljs.core.async.t_cljs$core$async23855(self__.flag,self__.cb,meta23856__$1));
});

cljs.core.async.t_cljs$core$async23855.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23857){
var self__ = this;
var _23857__$1 = this;
return self__.meta23856;
});

cljs.core.async.t_cljs$core$async23855.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23855.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async23855.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async23855.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async23855.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta23856","meta23856",1325670082,null)], null);
});

cljs.core.async.t_cljs$core$async23855.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23855.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23855";

cljs.core.async.t_cljs$core$async23855.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async23855");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23855.
 */
cljs.core.async.__GT_t_cljs$core$async23855 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async23855(flag__$1,cb__$1,meta23856){
return (new cljs.core.async.t_cljs$core$async23855(flag__$1,cb__$1,meta23856));
});

}

return (new cljs.core.async.t_cljs$core$async23855(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__23858_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23858_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23859_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23859_SHARP_,port], null));
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
var G__23860 = (i + (1));
i = G__23860;
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
var temp__5457__auto__ = (function (){var and__3938__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3938__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
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
var len__4531__auto___23866 = arguments.length;
var i__4532__auto___23867 = (0);
while(true){
if((i__4532__auto___23867 < len__4531__auto___23866)){
args__4534__auto__.push((arguments[i__4532__auto___23867]));

var G__23868 = (i__4532__auto___23867 + (1));
i__4532__auto___23867 = G__23868;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__23863){
var map__23864 = p__23863;
var map__23864__$1 = ((((!((map__23864 == null)))?(((((map__23864.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23864.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23864):map__23864);
var opts = map__23864__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq23861){
var G__23862 = cljs.core.first.call(null,seq23861);
var seq23861__$1 = cljs.core.next.call(null,seq23861);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23862,seq23861__$1);
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
var G__23870 = arguments.length;
switch (G__23870) {
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
var c__23769__auto___23916 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23769__auto___23916){
return (function (){
var f__23770__auto__ = (function (){var switch__23678__auto__ = ((function (c__23769__auto___23916){
return (function (state_23894){
var state_val_23895 = (state_23894[(1)]);
if((state_val_23895 === (7))){
var inst_23890 = (state_23894[(2)]);
var state_23894__$1 = state_23894;
var statearr_23896_23917 = state_23894__$1;
(statearr_23896_23917[(2)] = inst_23890);

(statearr_23896_23917[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23895 === (1))){
var state_23894__$1 = state_23894;
var statearr_23897_23918 = state_23894__$1;
(statearr_23897_23918[(2)] = null);

(statearr_23897_23918[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23895 === (4))){
var inst_23873 = (state_23894[(7)]);
var inst_23873__$1 = (state_23894[(2)]);
var inst_23874 = (inst_23873__$1 == null);
var state_23894__$1 = (function (){var statearr_23898 = state_23894;
(statearr_23898[(7)] = inst_23873__$1);

return statearr_23898;
})();
if(cljs.core.truth_(inst_23874)){
var statearr_23899_23919 = state_23894__$1;
(statearr_23899_23919[(1)] = (5));

} else {
var statearr_23900_23920 = state_23894__$1;
(statearr_23900_23920[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23895 === (13))){
var state_23894__$1 = state_23894;
var statearr_23901_23921 = state_23894__$1;
(statearr_23901_23921[(2)] = null);

(statearr_23901_23921[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23895 === (6))){
var inst_23873 = (state_23894[(7)]);
var state_23894__$1 = state_23894;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23894__$1,(11),to,inst_23873);
} else {
if((state_val_23895 === (3))){
var inst_23892 = (state_23894[(2)]);
var state_23894__$1 = state_23894;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23894__$1,inst_23892);
} else {
if((state_val_23895 === (12))){
var state_23894__$1 = state_23894;
var statearr_23902_23922 = state_23894__$1;
(statearr_23902_23922[(2)] = null);

(statearr_23902_23922[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23895 === (2))){
var state_23894__$1 = state_23894;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23894__$1,(4),from);
} else {
if((state_val_23895 === (11))){
var inst_23883 = (state_23894[(2)]);
var state_23894__$1 = state_23894;
if(cljs.core.truth_(inst_23883)){
var statearr_23903_23923 = state_23894__$1;
(statearr_23903_23923[(1)] = (12));

} else {
var statearr_23904_23924 = state_23894__$1;
(statearr_23904_23924[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23895 === (9))){
var state_23894__$1 = state_23894;
var statearr_23905_23925 = state_23894__$1;
(statearr_23905_23925[(2)] = null);

(statearr_23905_23925[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23895 === (5))){
var state_23894__$1 = state_23894;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23906_23926 = state_23894__$1;
(statearr_23906_23926[(1)] = (8));

} else {
var statearr_23907_23927 = state_23894__$1;
(statearr_23907_23927[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23895 === (14))){
var inst_23888 = (state_23894[(2)]);
var state_23894__$1 = state_23894;
var statearr_23908_23928 = state_23894__$1;
(statearr_23908_23928[(2)] = inst_23888);

(statearr_23908_23928[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23895 === (10))){
var inst_23880 = (state_23894[(2)]);
var state_23894__$1 = state_23894;
var statearr_23909_23929 = state_23894__$1;
(statearr_23909_23929[(2)] = inst_23880);

(statearr_23909_23929[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23895 === (8))){
var inst_23877 = cljs.core.async.close_BANG_.call(null,to);
var state_23894__$1 = state_23894;
var statearr_23910_23930 = state_23894__$1;
(statearr_23910_23930[(2)] = inst_23877);

(statearr_23910_23930[(1)] = (10));


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
});})(c__23769__auto___23916))
;
return ((function (switch__23678__auto__,c__23769__auto___23916){
return (function() {
var cljs$core$async$state_machine__23679__auto__ = null;
var cljs$core$async$state_machine__23679__auto____0 = (function (){
var statearr_23911 = [null,null,null,null,null,null,null,null];
(statearr_23911[(0)] = cljs$core$async$state_machine__23679__auto__);

(statearr_23911[(1)] = (1));

return statearr_23911;
});
var cljs$core$async$state_machine__23679__auto____1 = (function (state_23894){
while(true){
var ret_value__23680__auto__ = (function (){try{while(true){
var result__23681__auto__ = switch__23678__auto__.call(null,state_23894);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23681__auto__;
}
break;
}
}catch (e23912){if((e23912 instanceof Object)){
var ex__23682__auto__ = e23912;
var statearr_23913_23931 = state_23894;
(statearr_23913_23931[(5)] = ex__23682__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23894);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23912;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23932 = state_23894;
state_23894 = G__23932;
continue;
} else {
return ret_value__23680__auto__;
}
break;
}
});
cljs$core$async$state_machine__23679__auto__ = function(state_23894){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23679__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23679__auto____1.call(this,state_23894);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23679__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23679__auto____0;
cljs$core$async$state_machine__23679__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23679__auto____1;
return cljs$core$async$state_machine__23679__auto__;
})()
;})(switch__23678__auto__,c__23769__auto___23916))
})();
var state__23771__auto__ = (function (){var statearr_23914 = f__23770__auto__.call(null);
(statearr_23914[(6)] = c__23769__auto___23916);

return statearr_23914;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23771__auto__);
});})(c__23769__auto___23916))
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
return (function (p__23933){
var vec__23934 = p__23933;
var v = cljs.core.nth.call(null,vec__23934,(0),null);
var p = cljs.core.nth.call(null,vec__23934,(1),null);
var job = vec__23934;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__23769__auto___24105 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23769__auto___24105,res,vec__23934,v,p,job,jobs,results){
return (function (){
var f__23770__auto__ = (function (){var switch__23678__auto__ = ((function (c__23769__auto___24105,res,vec__23934,v,p,job,jobs,results){
return (function (state_23941){
var state_val_23942 = (state_23941[(1)]);
if((state_val_23942 === (1))){
var state_23941__$1 = state_23941;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23941__$1,(2),res,v);
} else {
if((state_val_23942 === (2))){
var inst_23938 = (state_23941[(2)]);
var inst_23939 = cljs.core.async.close_BANG_.call(null,res);
var state_23941__$1 = (function (){var statearr_23943 = state_23941;
(statearr_23943[(7)] = inst_23938);

return statearr_23943;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23941__$1,inst_23939);
} else {
return null;
}
}
});})(c__23769__auto___24105,res,vec__23934,v,p,job,jobs,results))
;
return ((function (switch__23678__auto__,c__23769__auto___24105,res,vec__23934,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23679__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23679__auto____0 = (function (){
var statearr_23944 = [null,null,null,null,null,null,null,null];
(statearr_23944[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23679__auto__);

(statearr_23944[(1)] = (1));

return statearr_23944;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23679__auto____1 = (function (state_23941){
while(true){
var ret_value__23680__auto__ = (function (){try{while(true){
var result__23681__auto__ = switch__23678__auto__.call(null,state_23941);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23681__auto__;
}
break;
}
}catch (e23945){if((e23945 instanceof Object)){
var ex__23682__auto__ = e23945;
var statearr_23946_24106 = state_23941;
(statearr_23946_24106[(5)] = ex__23682__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23941);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23945;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24107 = state_23941;
state_23941 = G__24107;
continue;
} else {
return ret_value__23680__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23679__auto__ = function(state_23941){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23679__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23679__auto____1.call(this,state_23941);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23679__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23679__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23679__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23679__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23679__auto__;
})()
;})(switch__23678__auto__,c__23769__auto___24105,res,vec__23934,v,p,job,jobs,results))
})();
var state__23771__auto__ = (function (){var statearr_23947 = f__23770__auto__.call(null);
(statearr_23947[(6)] = c__23769__auto___24105);

return statearr_23947;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23771__auto__);
});})(c__23769__auto___24105,res,vec__23934,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__23948){
var vec__23949 = p__23948;
var v = cljs.core.nth.call(null,vec__23949,(0),null);
var p = cljs.core.nth.call(null,vec__23949,(1),null);
var job = vec__23949;
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
var n__4408__auto___24108 = n;
var __24109 = (0);
while(true){
if((__24109 < n__4408__auto___24108)){
var G__23952_24110 = type;
var G__23952_24111__$1 = (((G__23952_24110 instanceof cljs.core.Keyword))?G__23952_24110.fqn:null);
switch (G__23952_24111__$1) {
case "compute":
var c__23769__auto___24113 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24109,c__23769__auto___24113,G__23952_24110,G__23952_24111__$1,n__4408__auto___24108,jobs,results,process,async){
return (function (){
var f__23770__auto__ = (function (){var switch__23678__auto__ = ((function (__24109,c__23769__auto___24113,G__23952_24110,G__23952_24111__$1,n__4408__auto___24108,jobs,results,process,async){
return (function (state_23965){
var state_val_23966 = (state_23965[(1)]);
if((state_val_23966 === (1))){
var state_23965__$1 = state_23965;
var statearr_23967_24114 = state_23965__$1;
(statearr_23967_24114[(2)] = null);

(statearr_23967_24114[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23966 === (2))){
var state_23965__$1 = state_23965;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23965__$1,(4),jobs);
} else {
if((state_val_23966 === (3))){
var inst_23963 = (state_23965[(2)]);
var state_23965__$1 = state_23965;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23965__$1,inst_23963);
} else {
if((state_val_23966 === (4))){
var inst_23955 = (state_23965[(2)]);
var inst_23956 = process.call(null,inst_23955);
var state_23965__$1 = state_23965;
if(cljs.core.truth_(inst_23956)){
var statearr_23968_24115 = state_23965__$1;
(statearr_23968_24115[(1)] = (5));

} else {
var statearr_23969_24116 = state_23965__$1;
(statearr_23969_24116[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23966 === (5))){
var state_23965__$1 = state_23965;
var statearr_23970_24117 = state_23965__$1;
(statearr_23970_24117[(2)] = null);

(statearr_23970_24117[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23966 === (6))){
var state_23965__$1 = state_23965;
var statearr_23971_24118 = state_23965__$1;
(statearr_23971_24118[(2)] = null);

(statearr_23971_24118[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23966 === (7))){
var inst_23961 = (state_23965[(2)]);
var state_23965__$1 = state_23965;
var statearr_23972_24119 = state_23965__$1;
(statearr_23972_24119[(2)] = inst_23961);

(statearr_23972_24119[(1)] = (3));


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
});})(__24109,c__23769__auto___24113,G__23952_24110,G__23952_24111__$1,n__4408__auto___24108,jobs,results,process,async))
;
return ((function (__24109,switch__23678__auto__,c__23769__auto___24113,G__23952_24110,G__23952_24111__$1,n__4408__auto___24108,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23679__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23679__auto____0 = (function (){
var statearr_23973 = [null,null,null,null,null,null,null];
(statearr_23973[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23679__auto__);

(statearr_23973[(1)] = (1));

return statearr_23973;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23679__auto____1 = (function (state_23965){
while(true){
var ret_value__23680__auto__ = (function (){try{while(true){
var result__23681__auto__ = switch__23678__auto__.call(null,state_23965);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23681__auto__;
}
break;
}
}catch (e23974){if((e23974 instanceof Object)){
var ex__23682__auto__ = e23974;
var statearr_23975_24120 = state_23965;
(statearr_23975_24120[(5)] = ex__23682__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23965);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23974;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24121 = state_23965;
state_23965 = G__24121;
continue;
} else {
return ret_value__23680__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23679__auto__ = function(state_23965){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23679__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23679__auto____1.call(this,state_23965);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23679__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23679__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23679__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23679__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23679__auto__;
})()
;})(__24109,switch__23678__auto__,c__23769__auto___24113,G__23952_24110,G__23952_24111__$1,n__4408__auto___24108,jobs,results,process,async))
})();
var state__23771__auto__ = (function (){var statearr_23976 = f__23770__auto__.call(null);
(statearr_23976[(6)] = c__23769__auto___24113);

return statearr_23976;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23771__auto__);
});})(__24109,c__23769__auto___24113,G__23952_24110,G__23952_24111__$1,n__4408__auto___24108,jobs,results,process,async))
);


break;
case "async":
var c__23769__auto___24122 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24109,c__23769__auto___24122,G__23952_24110,G__23952_24111__$1,n__4408__auto___24108,jobs,results,process,async){
return (function (){
var f__23770__auto__ = (function (){var switch__23678__auto__ = ((function (__24109,c__23769__auto___24122,G__23952_24110,G__23952_24111__$1,n__4408__auto___24108,jobs,results,process,async){
return (function (state_23989){
var state_val_23990 = (state_23989[(1)]);
if((state_val_23990 === (1))){
var state_23989__$1 = state_23989;
var statearr_23991_24123 = state_23989__$1;
(statearr_23991_24123[(2)] = null);

(statearr_23991_24123[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23990 === (2))){
var state_23989__$1 = state_23989;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23989__$1,(4),jobs);
} else {
if((state_val_23990 === (3))){
var inst_23987 = (state_23989[(2)]);
var state_23989__$1 = state_23989;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23989__$1,inst_23987);
} else {
if((state_val_23990 === (4))){
var inst_23979 = (state_23989[(2)]);
var inst_23980 = async.call(null,inst_23979);
var state_23989__$1 = state_23989;
if(cljs.core.truth_(inst_23980)){
var statearr_23992_24124 = state_23989__$1;
(statearr_23992_24124[(1)] = (5));

} else {
var statearr_23993_24125 = state_23989__$1;
(statearr_23993_24125[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23990 === (5))){
var state_23989__$1 = state_23989;
var statearr_23994_24126 = state_23989__$1;
(statearr_23994_24126[(2)] = null);

(statearr_23994_24126[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23990 === (6))){
var state_23989__$1 = state_23989;
var statearr_23995_24127 = state_23989__$1;
(statearr_23995_24127[(2)] = null);

(statearr_23995_24127[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23990 === (7))){
var inst_23985 = (state_23989[(2)]);
var state_23989__$1 = state_23989;
var statearr_23996_24128 = state_23989__$1;
(statearr_23996_24128[(2)] = inst_23985);

(statearr_23996_24128[(1)] = (3));


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
});})(__24109,c__23769__auto___24122,G__23952_24110,G__23952_24111__$1,n__4408__auto___24108,jobs,results,process,async))
;
return ((function (__24109,switch__23678__auto__,c__23769__auto___24122,G__23952_24110,G__23952_24111__$1,n__4408__auto___24108,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23679__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23679__auto____0 = (function (){
var statearr_23997 = [null,null,null,null,null,null,null];
(statearr_23997[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23679__auto__);

(statearr_23997[(1)] = (1));

return statearr_23997;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23679__auto____1 = (function (state_23989){
while(true){
var ret_value__23680__auto__ = (function (){try{while(true){
var result__23681__auto__ = switch__23678__auto__.call(null,state_23989);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23681__auto__;
}
break;
}
}catch (e23998){if((e23998 instanceof Object)){
var ex__23682__auto__ = e23998;
var statearr_23999_24130 = state_23989;
(statearr_23999_24130[(5)] = ex__23682__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23989);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23998;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24131 = state_23989;
state_23989 = G__24131;
continue;
} else {
return ret_value__23680__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23679__auto__ = function(state_23989){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23679__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23679__auto____1.call(this,state_23989);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23679__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23679__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23679__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23679__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23679__auto__;
})()
;})(__24109,switch__23678__auto__,c__23769__auto___24122,G__23952_24110,G__23952_24111__$1,n__4408__auto___24108,jobs,results,process,async))
})();
var state__23771__auto__ = (function (){var statearr_24000 = f__23770__auto__.call(null);
(statearr_24000[(6)] = c__23769__auto___24122);

return statearr_24000;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23771__auto__);
});})(__24109,c__23769__auto___24122,G__23952_24110,G__23952_24111__$1,n__4408__auto___24108,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23952_24111__$1)].join('')));

}

var G__24132 = (__24109 + (1));
__24109 = G__24132;
continue;
} else {
}
break;
}

var c__23769__auto___24133 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23769__auto___24133,jobs,results,process,async){
return (function (){
var f__23770__auto__ = (function (){var switch__23678__auto__ = ((function (c__23769__auto___24133,jobs,results,process,async){
return (function (state_24022){
var state_val_24023 = (state_24022[(1)]);
if((state_val_24023 === (1))){
var state_24022__$1 = state_24022;
var statearr_24024_24134 = state_24022__$1;
(statearr_24024_24134[(2)] = null);

(statearr_24024_24134[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24023 === (2))){
var state_24022__$1 = state_24022;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24022__$1,(4),from);
} else {
if((state_val_24023 === (3))){
var inst_24020 = (state_24022[(2)]);
var state_24022__$1 = state_24022;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24022__$1,inst_24020);
} else {
if((state_val_24023 === (4))){
var inst_24003 = (state_24022[(7)]);
var inst_24003__$1 = (state_24022[(2)]);
var inst_24004 = (inst_24003__$1 == null);
var state_24022__$1 = (function (){var statearr_24025 = state_24022;
(statearr_24025[(7)] = inst_24003__$1);

return statearr_24025;
})();
if(cljs.core.truth_(inst_24004)){
var statearr_24026_24135 = state_24022__$1;
(statearr_24026_24135[(1)] = (5));

} else {
var statearr_24027_24136 = state_24022__$1;
(statearr_24027_24136[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24023 === (5))){
var inst_24006 = cljs.core.async.close_BANG_.call(null,jobs);
var state_24022__$1 = state_24022;
var statearr_24028_24137 = state_24022__$1;
(statearr_24028_24137[(2)] = inst_24006);

(statearr_24028_24137[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24023 === (6))){
var inst_24008 = (state_24022[(8)]);
var inst_24003 = (state_24022[(7)]);
var inst_24008__$1 = cljs.core.async.chan.call(null,(1));
var inst_24009 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24010 = [inst_24003,inst_24008__$1];
var inst_24011 = (new cljs.core.PersistentVector(null,2,(5),inst_24009,inst_24010,null));
var state_24022__$1 = (function (){var statearr_24029 = state_24022;
(statearr_24029[(8)] = inst_24008__$1);

return statearr_24029;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24022__$1,(8),jobs,inst_24011);
} else {
if((state_val_24023 === (7))){
var inst_24018 = (state_24022[(2)]);
var state_24022__$1 = state_24022;
var statearr_24030_24138 = state_24022__$1;
(statearr_24030_24138[(2)] = inst_24018);

(statearr_24030_24138[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24023 === (8))){
var inst_24008 = (state_24022[(8)]);
var inst_24013 = (state_24022[(2)]);
var state_24022__$1 = (function (){var statearr_24031 = state_24022;
(statearr_24031[(9)] = inst_24013);

return statearr_24031;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24022__$1,(9),results,inst_24008);
} else {
if((state_val_24023 === (9))){
var inst_24015 = (state_24022[(2)]);
var state_24022__$1 = (function (){var statearr_24032 = state_24022;
(statearr_24032[(10)] = inst_24015);

return statearr_24032;
})();
var statearr_24033_24139 = state_24022__$1;
(statearr_24033_24139[(2)] = null);

(statearr_24033_24139[(1)] = (2));


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
});})(c__23769__auto___24133,jobs,results,process,async))
;
return ((function (switch__23678__auto__,c__23769__auto___24133,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23679__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23679__auto____0 = (function (){
var statearr_24034 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24034[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23679__auto__);

(statearr_24034[(1)] = (1));

return statearr_24034;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23679__auto____1 = (function (state_24022){
while(true){
var ret_value__23680__auto__ = (function (){try{while(true){
var result__23681__auto__ = switch__23678__auto__.call(null,state_24022);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23681__auto__;
}
break;
}
}catch (e24035){if((e24035 instanceof Object)){
var ex__23682__auto__ = e24035;
var statearr_24036_24140 = state_24022;
(statearr_24036_24140[(5)] = ex__23682__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24022);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24035;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24141 = state_24022;
state_24022 = G__24141;
continue;
} else {
return ret_value__23680__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23679__auto__ = function(state_24022){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23679__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23679__auto____1.call(this,state_24022);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23679__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23679__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23679__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23679__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23679__auto__;
})()
;})(switch__23678__auto__,c__23769__auto___24133,jobs,results,process,async))
})();
var state__23771__auto__ = (function (){var statearr_24037 = f__23770__auto__.call(null);
(statearr_24037[(6)] = c__23769__auto___24133);

return statearr_24037;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23771__auto__);
});})(c__23769__auto___24133,jobs,results,process,async))
);


var c__23769__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23769__auto__,jobs,results,process,async){
return (function (){
var f__23770__auto__ = (function (){var switch__23678__auto__ = ((function (c__23769__auto__,jobs,results,process,async){
return (function (state_24075){
var state_val_24076 = (state_24075[(1)]);
if((state_val_24076 === (7))){
var inst_24071 = (state_24075[(2)]);
var state_24075__$1 = state_24075;
var statearr_24077_24142 = state_24075__$1;
(statearr_24077_24142[(2)] = inst_24071);

(statearr_24077_24142[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24076 === (20))){
var state_24075__$1 = state_24075;
var statearr_24078_24143 = state_24075__$1;
(statearr_24078_24143[(2)] = null);

(statearr_24078_24143[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24076 === (1))){
var state_24075__$1 = state_24075;
var statearr_24079_24144 = state_24075__$1;
(statearr_24079_24144[(2)] = null);

(statearr_24079_24144[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24076 === (4))){
var inst_24040 = (state_24075[(7)]);
var inst_24040__$1 = (state_24075[(2)]);
var inst_24041 = (inst_24040__$1 == null);
var state_24075__$1 = (function (){var statearr_24080 = state_24075;
(statearr_24080[(7)] = inst_24040__$1);

return statearr_24080;
})();
if(cljs.core.truth_(inst_24041)){
var statearr_24081_24145 = state_24075__$1;
(statearr_24081_24145[(1)] = (5));

} else {
var statearr_24082_24146 = state_24075__$1;
(statearr_24082_24146[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24076 === (15))){
var inst_24053 = (state_24075[(8)]);
var state_24075__$1 = state_24075;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24075__$1,(18),to,inst_24053);
} else {
if((state_val_24076 === (21))){
var inst_24066 = (state_24075[(2)]);
var state_24075__$1 = state_24075;
var statearr_24083_24147 = state_24075__$1;
(statearr_24083_24147[(2)] = inst_24066);

(statearr_24083_24147[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24076 === (13))){
var inst_24068 = (state_24075[(2)]);
var state_24075__$1 = (function (){var statearr_24084 = state_24075;
(statearr_24084[(9)] = inst_24068);

return statearr_24084;
})();
var statearr_24085_24148 = state_24075__$1;
(statearr_24085_24148[(2)] = null);

(statearr_24085_24148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24076 === (6))){
var inst_24040 = (state_24075[(7)]);
var state_24075__$1 = state_24075;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24075__$1,(11),inst_24040);
} else {
if((state_val_24076 === (17))){
var inst_24061 = (state_24075[(2)]);
var state_24075__$1 = state_24075;
if(cljs.core.truth_(inst_24061)){
var statearr_24086_24149 = state_24075__$1;
(statearr_24086_24149[(1)] = (19));

} else {
var statearr_24087_24150 = state_24075__$1;
(statearr_24087_24150[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24076 === (3))){
var inst_24073 = (state_24075[(2)]);
var state_24075__$1 = state_24075;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24075__$1,inst_24073);
} else {
if((state_val_24076 === (12))){
var inst_24050 = (state_24075[(10)]);
var state_24075__$1 = state_24075;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24075__$1,(14),inst_24050);
} else {
if((state_val_24076 === (2))){
var state_24075__$1 = state_24075;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24075__$1,(4),results);
} else {
if((state_val_24076 === (19))){
var state_24075__$1 = state_24075;
var statearr_24088_24151 = state_24075__$1;
(statearr_24088_24151[(2)] = null);

(statearr_24088_24151[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24076 === (11))){
var inst_24050 = (state_24075[(2)]);
var state_24075__$1 = (function (){var statearr_24089 = state_24075;
(statearr_24089[(10)] = inst_24050);

return statearr_24089;
})();
var statearr_24090_24152 = state_24075__$1;
(statearr_24090_24152[(2)] = null);

(statearr_24090_24152[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24076 === (9))){
var state_24075__$1 = state_24075;
var statearr_24091_24153 = state_24075__$1;
(statearr_24091_24153[(2)] = null);

(statearr_24091_24153[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24076 === (5))){
var state_24075__$1 = state_24075;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24092_24154 = state_24075__$1;
(statearr_24092_24154[(1)] = (8));

} else {
var statearr_24093_24155 = state_24075__$1;
(statearr_24093_24155[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24076 === (14))){
var inst_24055 = (state_24075[(11)]);
var inst_24053 = (state_24075[(8)]);
var inst_24053__$1 = (state_24075[(2)]);
var inst_24054 = (inst_24053__$1 == null);
var inst_24055__$1 = cljs.core.not.call(null,inst_24054);
var state_24075__$1 = (function (){var statearr_24094 = state_24075;
(statearr_24094[(11)] = inst_24055__$1);

(statearr_24094[(8)] = inst_24053__$1);

return statearr_24094;
})();
if(inst_24055__$1){
var statearr_24095_24156 = state_24075__$1;
(statearr_24095_24156[(1)] = (15));

} else {
var statearr_24096_24157 = state_24075__$1;
(statearr_24096_24157[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24076 === (16))){
var inst_24055 = (state_24075[(11)]);
var state_24075__$1 = state_24075;
var statearr_24097_24158 = state_24075__$1;
(statearr_24097_24158[(2)] = inst_24055);

(statearr_24097_24158[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24076 === (10))){
var inst_24047 = (state_24075[(2)]);
var state_24075__$1 = state_24075;
var statearr_24098_24159 = state_24075__$1;
(statearr_24098_24159[(2)] = inst_24047);

(statearr_24098_24159[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24076 === (18))){
var inst_24058 = (state_24075[(2)]);
var state_24075__$1 = state_24075;
var statearr_24099_24160 = state_24075__$1;
(statearr_24099_24160[(2)] = inst_24058);

(statearr_24099_24160[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24076 === (8))){
var inst_24044 = cljs.core.async.close_BANG_.call(null,to);
var state_24075__$1 = state_24075;
var statearr_24100_24161 = state_24075__$1;
(statearr_24100_24161[(2)] = inst_24044);

(statearr_24100_24161[(1)] = (10));


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
});})(c__23769__auto__,jobs,results,process,async))
;
return ((function (switch__23678__auto__,c__23769__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23679__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23679__auto____0 = (function (){
var statearr_24101 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24101[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23679__auto__);

(statearr_24101[(1)] = (1));

return statearr_24101;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23679__auto____1 = (function (state_24075){
while(true){
var ret_value__23680__auto__ = (function (){try{while(true){
var result__23681__auto__ = switch__23678__auto__.call(null,state_24075);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23681__auto__;
}
break;
}
}catch (e24102){if((e24102 instanceof Object)){
var ex__23682__auto__ = e24102;
var statearr_24103_24162 = state_24075;
(statearr_24103_24162[(5)] = ex__23682__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24075);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24102;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24163 = state_24075;
state_24075 = G__24163;
continue;
} else {
return ret_value__23680__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23679__auto__ = function(state_24075){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23679__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23679__auto____1.call(this,state_24075);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23679__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23679__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23679__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23679__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23679__auto__;
})()
;})(switch__23678__auto__,c__23769__auto__,jobs,results,process,async))
})();
var state__23771__auto__ = (function (){var statearr_24104 = f__23770__auto__.call(null);
(statearr_24104[(6)] = c__23769__auto__);

return statearr_24104;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23771__auto__);
});})(c__23769__auto__,jobs,results,process,async))
);

return c__23769__auto__;
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
var G__24165 = arguments.length;
switch (G__24165) {
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
var G__24168 = arguments.length;
switch (G__24168) {
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
var G__24171 = arguments.length;
switch (G__24171) {
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
var c__23769__auto___24220 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23769__auto___24220,tc,fc){
return (function (){
var f__23770__auto__ = (function (){var switch__23678__auto__ = ((function (c__23769__auto___24220,tc,fc){
return (function (state_24197){
var state_val_24198 = (state_24197[(1)]);
if((state_val_24198 === (7))){
var inst_24193 = (state_24197[(2)]);
var state_24197__$1 = state_24197;
var statearr_24199_24221 = state_24197__$1;
(statearr_24199_24221[(2)] = inst_24193);

(statearr_24199_24221[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24198 === (1))){
var state_24197__$1 = state_24197;
var statearr_24200_24222 = state_24197__$1;
(statearr_24200_24222[(2)] = null);

(statearr_24200_24222[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24198 === (4))){
var inst_24174 = (state_24197[(7)]);
var inst_24174__$1 = (state_24197[(2)]);
var inst_24175 = (inst_24174__$1 == null);
var state_24197__$1 = (function (){var statearr_24201 = state_24197;
(statearr_24201[(7)] = inst_24174__$1);

return statearr_24201;
})();
if(cljs.core.truth_(inst_24175)){
var statearr_24202_24223 = state_24197__$1;
(statearr_24202_24223[(1)] = (5));

} else {
var statearr_24203_24224 = state_24197__$1;
(statearr_24203_24224[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24198 === (13))){
var state_24197__$1 = state_24197;
var statearr_24204_24225 = state_24197__$1;
(statearr_24204_24225[(2)] = null);

(statearr_24204_24225[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24198 === (6))){
var inst_24174 = (state_24197[(7)]);
var inst_24180 = p.call(null,inst_24174);
var state_24197__$1 = state_24197;
if(cljs.core.truth_(inst_24180)){
var statearr_24205_24226 = state_24197__$1;
(statearr_24205_24226[(1)] = (9));

} else {
var statearr_24206_24227 = state_24197__$1;
(statearr_24206_24227[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24198 === (3))){
var inst_24195 = (state_24197[(2)]);
var state_24197__$1 = state_24197;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24197__$1,inst_24195);
} else {
if((state_val_24198 === (12))){
var state_24197__$1 = state_24197;
var statearr_24207_24228 = state_24197__$1;
(statearr_24207_24228[(2)] = null);

(statearr_24207_24228[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24198 === (2))){
var state_24197__$1 = state_24197;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24197__$1,(4),ch);
} else {
if((state_val_24198 === (11))){
var inst_24174 = (state_24197[(7)]);
var inst_24184 = (state_24197[(2)]);
var state_24197__$1 = state_24197;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24197__$1,(8),inst_24184,inst_24174);
} else {
if((state_val_24198 === (9))){
var state_24197__$1 = state_24197;
var statearr_24208_24229 = state_24197__$1;
(statearr_24208_24229[(2)] = tc);

(statearr_24208_24229[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24198 === (5))){
var inst_24177 = cljs.core.async.close_BANG_.call(null,tc);
var inst_24178 = cljs.core.async.close_BANG_.call(null,fc);
var state_24197__$1 = (function (){var statearr_24209 = state_24197;
(statearr_24209[(8)] = inst_24177);

return statearr_24209;
})();
var statearr_24210_24230 = state_24197__$1;
(statearr_24210_24230[(2)] = inst_24178);

(statearr_24210_24230[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24198 === (14))){
var inst_24191 = (state_24197[(2)]);
var state_24197__$1 = state_24197;
var statearr_24211_24231 = state_24197__$1;
(statearr_24211_24231[(2)] = inst_24191);

(statearr_24211_24231[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24198 === (10))){
var state_24197__$1 = state_24197;
var statearr_24212_24232 = state_24197__$1;
(statearr_24212_24232[(2)] = fc);

(statearr_24212_24232[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24198 === (8))){
var inst_24186 = (state_24197[(2)]);
var state_24197__$1 = state_24197;
if(cljs.core.truth_(inst_24186)){
var statearr_24213_24233 = state_24197__$1;
(statearr_24213_24233[(1)] = (12));

} else {
var statearr_24214_24234 = state_24197__$1;
(statearr_24214_24234[(1)] = (13));

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
});})(c__23769__auto___24220,tc,fc))
;
return ((function (switch__23678__auto__,c__23769__auto___24220,tc,fc){
return (function() {
var cljs$core$async$state_machine__23679__auto__ = null;
var cljs$core$async$state_machine__23679__auto____0 = (function (){
var statearr_24215 = [null,null,null,null,null,null,null,null,null];
(statearr_24215[(0)] = cljs$core$async$state_machine__23679__auto__);

(statearr_24215[(1)] = (1));

return statearr_24215;
});
var cljs$core$async$state_machine__23679__auto____1 = (function (state_24197){
while(true){
var ret_value__23680__auto__ = (function (){try{while(true){
var result__23681__auto__ = switch__23678__auto__.call(null,state_24197);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23681__auto__;
}
break;
}
}catch (e24216){if((e24216 instanceof Object)){
var ex__23682__auto__ = e24216;
var statearr_24217_24235 = state_24197;
(statearr_24217_24235[(5)] = ex__23682__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24197);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24216;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24236 = state_24197;
state_24197 = G__24236;
continue;
} else {
return ret_value__23680__auto__;
}
break;
}
});
cljs$core$async$state_machine__23679__auto__ = function(state_24197){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23679__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23679__auto____1.call(this,state_24197);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23679__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23679__auto____0;
cljs$core$async$state_machine__23679__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23679__auto____1;
return cljs$core$async$state_machine__23679__auto__;
})()
;})(switch__23678__auto__,c__23769__auto___24220,tc,fc))
})();
var state__23771__auto__ = (function (){var statearr_24218 = f__23770__auto__.call(null);
(statearr_24218[(6)] = c__23769__auto___24220);

return statearr_24218;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23771__auto__);
});})(c__23769__auto___24220,tc,fc))
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
var c__23769__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23769__auto__){
return (function (){
var f__23770__auto__ = (function (){var switch__23678__auto__ = ((function (c__23769__auto__){
return (function (state_24257){
var state_val_24258 = (state_24257[(1)]);
if((state_val_24258 === (7))){
var inst_24253 = (state_24257[(2)]);
var state_24257__$1 = state_24257;
var statearr_24259_24277 = state_24257__$1;
(statearr_24259_24277[(2)] = inst_24253);

(statearr_24259_24277[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24258 === (1))){
var inst_24237 = init;
var state_24257__$1 = (function (){var statearr_24260 = state_24257;
(statearr_24260[(7)] = inst_24237);

return statearr_24260;
})();
var statearr_24261_24278 = state_24257__$1;
(statearr_24261_24278[(2)] = null);

(statearr_24261_24278[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24258 === (4))){
var inst_24240 = (state_24257[(8)]);
var inst_24240__$1 = (state_24257[(2)]);
var inst_24241 = (inst_24240__$1 == null);
var state_24257__$1 = (function (){var statearr_24262 = state_24257;
(statearr_24262[(8)] = inst_24240__$1);

return statearr_24262;
})();
if(cljs.core.truth_(inst_24241)){
var statearr_24263_24279 = state_24257__$1;
(statearr_24263_24279[(1)] = (5));

} else {
var statearr_24264_24280 = state_24257__$1;
(statearr_24264_24280[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24258 === (6))){
var inst_24240 = (state_24257[(8)]);
var inst_24244 = (state_24257[(9)]);
var inst_24237 = (state_24257[(7)]);
var inst_24244__$1 = f.call(null,inst_24237,inst_24240);
var inst_24245 = cljs.core.reduced_QMARK_.call(null,inst_24244__$1);
var state_24257__$1 = (function (){var statearr_24265 = state_24257;
(statearr_24265[(9)] = inst_24244__$1);

return statearr_24265;
})();
if(inst_24245){
var statearr_24266_24281 = state_24257__$1;
(statearr_24266_24281[(1)] = (8));

} else {
var statearr_24267_24282 = state_24257__$1;
(statearr_24267_24282[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24258 === (3))){
var inst_24255 = (state_24257[(2)]);
var state_24257__$1 = state_24257;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24257__$1,inst_24255);
} else {
if((state_val_24258 === (2))){
var state_24257__$1 = state_24257;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24257__$1,(4),ch);
} else {
if((state_val_24258 === (9))){
var inst_24244 = (state_24257[(9)]);
var inst_24237 = inst_24244;
var state_24257__$1 = (function (){var statearr_24268 = state_24257;
(statearr_24268[(7)] = inst_24237);

return statearr_24268;
})();
var statearr_24269_24283 = state_24257__$1;
(statearr_24269_24283[(2)] = null);

(statearr_24269_24283[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24258 === (5))){
var inst_24237 = (state_24257[(7)]);
var state_24257__$1 = state_24257;
var statearr_24270_24284 = state_24257__$1;
(statearr_24270_24284[(2)] = inst_24237);

(statearr_24270_24284[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24258 === (10))){
var inst_24251 = (state_24257[(2)]);
var state_24257__$1 = state_24257;
var statearr_24271_24285 = state_24257__$1;
(statearr_24271_24285[(2)] = inst_24251);

(statearr_24271_24285[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24258 === (8))){
var inst_24244 = (state_24257[(9)]);
var inst_24247 = cljs.core.deref.call(null,inst_24244);
var state_24257__$1 = state_24257;
var statearr_24272_24286 = state_24257__$1;
(statearr_24272_24286[(2)] = inst_24247);

(statearr_24272_24286[(1)] = (10));


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
});})(c__23769__auto__))
;
return ((function (switch__23678__auto__,c__23769__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__23679__auto__ = null;
var cljs$core$async$reduce_$_state_machine__23679__auto____0 = (function (){
var statearr_24273 = [null,null,null,null,null,null,null,null,null,null];
(statearr_24273[(0)] = cljs$core$async$reduce_$_state_machine__23679__auto__);

(statearr_24273[(1)] = (1));

return statearr_24273;
});
var cljs$core$async$reduce_$_state_machine__23679__auto____1 = (function (state_24257){
while(true){
var ret_value__23680__auto__ = (function (){try{while(true){
var result__23681__auto__ = switch__23678__auto__.call(null,state_24257);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23681__auto__;
}
break;
}
}catch (e24274){if((e24274 instanceof Object)){
var ex__23682__auto__ = e24274;
var statearr_24275_24287 = state_24257;
(statearr_24275_24287[(5)] = ex__23682__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24257);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24274;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24288 = state_24257;
state_24257 = G__24288;
continue;
} else {
return ret_value__23680__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__23679__auto__ = function(state_24257){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__23679__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__23679__auto____1.call(this,state_24257);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__23679__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__23679__auto____0;
cljs$core$async$reduce_$_state_machine__23679__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__23679__auto____1;
return cljs$core$async$reduce_$_state_machine__23679__auto__;
})()
;})(switch__23678__auto__,c__23769__auto__))
})();
var state__23771__auto__ = (function (){var statearr_24276 = f__23770__auto__.call(null);
(statearr_24276[(6)] = c__23769__auto__);

return statearr_24276;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23771__auto__);
});})(c__23769__auto__))
);

return c__23769__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__23769__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23769__auto__,f__$1){
return (function (){
var f__23770__auto__ = (function (){var switch__23678__auto__ = ((function (c__23769__auto__,f__$1){
return (function (state_24294){
var state_val_24295 = (state_24294[(1)]);
if((state_val_24295 === (1))){
var inst_24289 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_24294__$1 = state_24294;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24294__$1,(2),inst_24289);
} else {
if((state_val_24295 === (2))){
var inst_24291 = (state_24294[(2)]);
var inst_24292 = f__$1.call(null,inst_24291);
var state_24294__$1 = state_24294;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24294__$1,inst_24292);
} else {
return null;
}
}
});})(c__23769__auto__,f__$1))
;
return ((function (switch__23678__auto__,c__23769__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__23679__auto__ = null;
var cljs$core$async$transduce_$_state_machine__23679__auto____0 = (function (){
var statearr_24296 = [null,null,null,null,null,null,null];
(statearr_24296[(0)] = cljs$core$async$transduce_$_state_machine__23679__auto__);

(statearr_24296[(1)] = (1));

return statearr_24296;
});
var cljs$core$async$transduce_$_state_machine__23679__auto____1 = (function (state_24294){
while(true){
var ret_value__23680__auto__ = (function (){try{while(true){
var result__23681__auto__ = switch__23678__auto__.call(null,state_24294);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23681__auto__;
}
break;
}
}catch (e24297){if((e24297 instanceof Object)){
var ex__23682__auto__ = e24297;
var statearr_24298_24300 = state_24294;
(statearr_24298_24300[(5)] = ex__23682__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24294);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24297;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24301 = state_24294;
state_24294 = G__24301;
continue;
} else {
return ret_value__23680__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__23679__auto__ = function(state_24294){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__23679__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__23679__auto____1.call(this,state_24294);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__23679__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__23679__auto____0;
cljs$core$async$transduce_$_state_machine__23679__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__23679__auto____1;
return cljs$core$async$transduce_$_state_machine__23679__auto__;
})()
;})(switch__23678__auto__,c__23769__auto__,f__$1))
})();
var state__23771__auto__ = (function (){var statearr_24299 = f__23770__auto__.call(null);
(statearr_24299[(6)] = c__23769__auto__);

return statearr_24299;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23771__auto__);
});})(c__23769__auto__,f__$1))
);

return c__23769__auto__;
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
var G__24303 = arguments.length;
switch (G__24303) {
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
var c__23769__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23769__auto__){
return (function (){
var f__23770__auto__ = (function (){var switch__23678__auto__ = ((function (c__23769__auto__){
return (function (state_24328){
var state_val_24329 = (state_24328[(1)]);
if((state_val_24329 === (7))){
var inst_24310 = (state_24328[(2)]);
var state_24328__$1 = state_24328;
var statearr_24330_24351 = state_24328__$1;
(statearr_24330_24351[(2)] = inst_24310);

(statearr_24330_24351[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24329 === (1))){
var inst_24304 = cljs.core.seq.call(null,coll);
var inst_24305 = inst_24304;
var state_24328__$1 = (function (){var statearr_24331 = state_24328;
(statearr_24331[(7)] = inst_24305);

return statearr_24331;
})();
var statearr_24332_24352 = state_24328__$1;
(statearr_24332_24352[(2)] = null);

(statearr_24332_24352[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24329 === (4))){
var inst_24305 = (state_24328[(7)]);
var inst_24308 = cljs.core.first.call(null,inst_24305);
var state_24328__$1 = state_24328;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24328__$1,(7),ch,inst_24308);
} else {
if((state_val_24329 === (13))){
var inst_24322 = (state_24328[(2)]);
var state_24328__$1 = state_24328;
var statearr_24333_24353 = state_24328__$1;
(statearr_24333_24353[(2)] = inst_24322);

(statearr_24333_24353[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24329 === (6))){
var inst_24313 = (state_24328[(2)]);
var state_24328__$1 = state_24328;
if(cljs.core.truth_(inst_24313)){
var statearr_24334_24354 = state_24328__$1;
(statearr_24334_24354[(1)] = (8));

} else {
var statearr_24335_24355 = state_24328__$1;
(statearr_24335_24355[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24329 === (3))){
var inst_24326 = (state_24328[(2)]);
var state_24328__$1 = state_24328;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24328__$1,inst_24326);
} else {
if((state_val_24329 === (12))){
var state_24328__$1 = state_24328;
var statearr_24336_24356 = state_24328__$1;
(statearr_24336_24356[(2)] = null);

(statearr_24336_24356[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24329 === (2))){
var inst_24305 = (state_24328[(7)]);
var state_24328__$1 = state_24328;
if(cljs.core.truth_(inst_24305)){
var statearr_24337_24357 = state_24328__$1;
(statearr_24337_24357[(1)] = (4));

} else {
var statearr_24338_24358 = state_24328__$1;
(statearr_24338_24358[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24329 === (11))){
var inst_24319 = cljs.core.async.close_BANG_.call(null,ch);
var state_24328__$1 = state_24328;
var statearr_24339_24359 = state_24328__$1;
(statearr_24339_24359[(2)] = inst_24319);

(statearr_24339_24359[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24329 === (9))){
var state_24328__$1 = state_24328;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24340_24360 = state_24328__$1;
(statearr_24340_24360[(1)] = (11));

} else {
var statearr_24341_24361 = state_24328__$1;
(statearr_24341_24361[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24329 === (5))){
var inst_24305 = (state_24328[(7)]);
var state_24328__$1 = state_24328;
var statearr_24342_24362 = state_24328__$1;
(statearr_24342_24362[(2)] = inst_24305);

(statearr_24342_24362[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24329 === (10))){
var inst_24324 = (state_24328[(2)]);
var state_24328__$1 = state_24328;
var statearr_24343_24363 = state_24328__$1;
(statearr_24343_24363[(2)] = inst_24324);

(statearr_24343_24363[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24329 === (8))){
var inst_24305 = (state_24328[(7)]);
var inst_24315 = cljs.core.next.call(null,inst_24305);
var inst_24305__$1 = inst_24315;
var state_24328__$1 = (function (){var statearr_24344 = state_24328;
(statearr_24344[(7)] = inst_24305__$1);

return statearr_24344;
})();
var statearr_24345_24364 = state_24328__$1;
(statearr_24345_24364[(2)] = null);

(statearr_24345_24364[(1)] = (2));


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
});})(c__23769__auto__))
;
return ((function (switch__23678__auto__,c__23769__auto__){
return (function() {
var cljs$core$async$state_machine__23679__auto__ = null;
var cljs$core$async$state_machine__23679__auto____0 = (function (){
var statearr_24346 = [null,null,null,null,null,null,null,null];
(statearr_24346[(0)] = cljs$core$async$state_machine__23679__auto__);

(statearr_24346[(1)] = (1));

return statearr_24346;
});
var cljs$core$async$state_machine__23679__auto____1 = (function (state_24328){
while(true){
var ret_value__23680__auto__ = (function (){try{while(true){
var result__23681__auto__ = switch__23678__auto__.call(null,state_24328);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23681__auto__;
}
break;
}
}catch (e24347){if((e24347 instanceof Object)){
var ex__23682__auto__ = e24347;
var statearr_24348_24365 = state_24328;
(statearr_24348_24365[(5)] = ex__23682__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24328);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24347;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24366 = state_24328;
state_24328 = G__24366;
continue;
} else {
return ret_value__23680__auto__;
}
break;
}
});
cljs$core$async$state_machine__23679__auto__ = function(state_24328){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23679__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23679__auto____1.call(this,state_24328);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23679__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23679__auto____0;
cljs$core$async$state_machine__23679__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23679__auto____1;
return cljs$core$async$state_machine__23679__auto__;
})()
;})(switch__23678__auto__,c__23769__auto__))
})();
var state__23771__auto__ = (function (){var statearr_24349 = f__23770__auto__.call(null);
(statearr_24349[(6)] = c__23769__auto__);

return statearr_24349;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23771__auto__);
});})(c__23769__auto__))
);

return c__23769__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24367 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24367 = (function (ch,cs,meta24368){
this.ch = ch;
this.cs = cs;
this.meta24368 = meta24368;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24367.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_24369,meta24368__$1){
var self__ = this;
var _24369__$1 = this;
return (new cljs.core.async.t_cljs$core$async24367(self__.ch,self__.cs,meta24368__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async24367.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_24369){
var self__ = this;
var _24369__$1 = this;
return self__.meta24368;
});})(cs))
;

cljs.core.async.t_cljs$core$async24367.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24367.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async24367.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24367.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24367.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24367.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24367.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta24368","meta24368",2128045415,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async24367.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24367.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24367";

cljs.core.async.t_cljs$core$async24367.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async24367");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24367.
 */
cljs.core.async.__GT_t_cljs$core$async24367 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async24367(ch__$1,cs__$1,meta24368){
return (new cljs.core.async.t_cljs$core$async24367(ch__$1,cs__$1,meta24368));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async24367(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__23769__auto___24589 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23769__auto___24589,cs,m,dchan,dctr,done){
return (function (){
var f__23770__auto__ = (function (){var switch__23678__auto__ = ((function (c__23769__auto___24589,cs,m,dchan,dctr,done){
return (function (state_24504){
var state_val_24505 = (state_24504[(1)]);
if((state_val_24505 === (7))){
var inst_24500 = (state_24504[(2)]);
var state_24504__$1 = state_24504;
var statearr_24506_24590 = state_24504__$1;
(statearr_24506_24590[(2)] = inst_24500);

(statearr_24506_24590[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24505 === (20))){
var inst_24403 = (state_24504[(7)]);
var inst_24415 = cljs.core.first.call(null,inst_24403);
var inst_24416 = cljs.core.nth.call(null,inst_24415,(0),null);
var inst_24417 = cljs.core.nth.call(null,inst_24415,(1),null);
var state_24504__$1 = (function (){var statearr_24507 = state_24504;
(statearr_24507[(8)] = inst_24416);

return statearr_24507;
})();
if(cljs.core.truth_(inst_24417)){
var statearr_24508_24591 = state_24504__$1;
(statearr_24508_24591[(1)] = (22));

} else {
var statearr_24509_24592 = state_24504__$1;
(statearr_24509_24592[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24505 === (27))){
var inst_24445 = (state_24504[(9)]);
var inst_24372 = (state_24504[(10)]);
var inst_24452 = (state_24504[(11)]);
var inst_24447 = (state_24504[(12)]);
var inst_24452__$1 = cljs.core._nth.call(null,inst_24445,inst_24447);
var inst_24453 = cljs.core.async.put_BANG_.call(null,inst_24452__$1,inst_24372,done);
var state_24504__$1 = (function (){var statearr_24510 = state_24504;
(statearr_24510[(11)] = inst_24452__$1);

return statearr_24510;
})();
if(cljs.core.truth_(inst_24453)){
var statearr_24511_24593 = state_24504__$1;
(statearr_24511_24593[(1)] = (30));

} else {
var statearr_24512_24594 = state_24504__$1;
(statearr_24512_24594[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24505 === (1))){
var state_24504__$1 = state_24504;
var statearr_24513_24595 = state_24504__$1;
(statearr_24513_24595[(2)] = null);

(statearr_24513_24595[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24505 === (24))){
var inst_24403 = (state_24504[(7)]);
var inst_24422 = (state_24504[(2)]);
var inst_24423 = cljs.core.next.call(null,inst_24403);
var inst_24381 = inst_24423;
var inst_24382 = null;
var inst_24383 = (0);
var inst_24384 = (0);
var state_24504__$1 = (function (){var statearr_24514 = state_24504;
(statearr_24514[(13)] = inst_24384);

(statearr_24514[(14)] = inst_24382);

(statearr_24514[(15)] = inst_24383);

(statearr_24514[(16)] = inst_24381);

(statearr_24514[(17)] = inst_24422);

return statearr_24514;
})();
var statearr_24515_24596 = state_24504__$1;
(statearr_24515_24596[(2)] = null);

(statearr_24515_24596[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24505 === (39))){
var state_24504__$1 = state_24504;
var statearr_24519_24597 = state_24504__$1;
(statearr_24519_24597[(2)] = null);

(statearr_24519_24597[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24505 === (4))){
var inst_24372 = (state_24504[(10)]);
var inst_24372__$1 = (state_24504[(2)]);
var inst_24373 = (inst_24372__$1 == null);
var state_24504__$1 = (function (){var statearr_24520 = state_24504;
(statearr_24520[(10)] = inst_24372__$1);

return statearr_24520;
})();
if(cljs.core.truth_(inst_24373)){
var statearr_24521_24598 = state_24504__$1;
(statearr_24521_24598[(1)] = (5));

} else {
var statearr_24522_24599 = state_24504__$1;
(statearr_24522_24599[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24505 === (15))){
var inst_24384 = (state_24504[(13)]);
var inst_24382 = (state_24504[(14)]);
var inst_24383 = (state_24504[(15)]);
var inst_24381 = (state_24504[(16)]);
var inst_24399 = (state_24504[(2)]);
var inst_24400 = (inst_24384 + (1));
var tmp24516 = inst_24382;
var tmp24517 = inst_24383;
var tmp24518 = inst_24381;
var inst_24381__$1 = tmp24518;
var inst_24382__$1 = tmp24516;
var inst_24383__$1 = tmp24517;
var inst_24384__$1 = inst_24400;
var state_24504__$1 = (function (){var statearr_24523 = state_24504;
(statearr_24523[(13)] = inst_24384__$1);

(statearr_24523[(14)] = inst_24382__$1);

(statearr_24523[(15)] = inst_24383__$1);

(statearr_24523[(16)] = inst_24381__$1);

(statearr_24523[(18)] = inst_24399);

return statearr_24523;
})();
var statearr_24524_24600 = state_24504__$1;
(statearr_24524_24600[(2)] = null);

(statearr_24524_24600[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24505 === (21))){
var inst_24426 = (state_24504[(2)]);
var state_24504__$1 = state_24504;
var statearr_24528_24601 = state_24504__$1;
(statearr_24528_24601[(2)] = inst_24426);

(statearr_24528_24601[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24505 === (31))){
var inst_24452 = (state_24504[(11)]);
var inst_24456 = done.call(null,null);
var inst_24457 = cljs.core.async.untap_STAR_.call(null,m,inst_24452);
var state_24504__$1 = (function (){var statearr_24529 = state_24504;
(statearr_24529[(19)] = inst_24456);

return statearr_24529;
})();
var statearr_24530_24602 = state_24504__$1;
(statearr_24530_24602[(2)] = inst_24457);

(statearr_24530_24602[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24505 === (32))){
var inst_24445 = (state_24504[(9)]);
var inst_24444 = (state_24504[(20)]);
var inst_24447 = (state_24504[(12)]);
var inst_24446 = (state_24504[(21)]);
var inst_24459 = (state_24504[(2)]);
var inst_24460 = (inst_24447 + (1));
var tmp24525 = inst_24445;
var tmp24526 = inst_24444;
var tmp24527 = inst_24446;
var inst_24444__$1 = tmp24526;
var inst_24445__$1 = tmp24525;
var inst_24446__$1 = tmp24527;
var inst_24447__$1 = inst_24460;
var state_24504__$1 = (function (){var statearr_24531 = state_24504;
(statearr_24531[(9)] = inst_24445__$1);

(statearr_24531[(20)] = inst_24444__$1);

(statearr_24531[(22)] = inst_24459);

(statearr_24531[(12)] = inst_24447__$1);

(statearr_24531[(21)] = inst_24446__$1);

return statearr_24531;
})();
var statearr_24532_24603 = state_24504__$1;
(statearr_24532_24603[(2)] = null);

(statearr_24532_24603[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24505 === (40))){
var inst_24472 = (state_24504[(23)]);
var inst_24476 = done.call(null,null);
var inst_24477 = cljs.core.async.untap_STAR_.call(null,m,inst_24472);
var state_24504__$1 = (function (){var statearr_24533 = state_24504;
(statearr_24533[(24)] = inst_24476);

return statearr_24533;
})();
var statearr_24534_24604 = state_24504__$1;
(statearr_24534_24604[(2)] = inst_24477);

(statearr_24534_24604[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24505 === (33))){
var inst_24463 = (state_24504[(25)]);
var inst_24465 = cljs.core.chunked_seq_QMARK_.call(null,inst_24463);
var state_24504__$1 = state_24504;
if(inst_24465){
var statearr_24535_24605 = state_24504__$1;
(statearr_24535_24605[(1)] = (36));

} else {
var statearr_24536_24606 = state_24504__$1;
(statearr_24536_24606[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24505 === (13))){
var inst_24393 = (state_24504[(26)]);
var inst_24396 = cljs.core.async.close_BANG_.call(null,inst_24393);
var state_24504__$1 = state_24504;
var statearr_24537_24607 = state_24504__$1;
(statearr_24537_24607[(2)] = inst_24396);

(statearr_24537_24607[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24505 === (22))){
var inst_24416 = (state_24504[(8)]);
var inst_24419 = cljs.core.async.close_BANG_.call(null,inst_24416);
var state_24504__$1 = state_24504;
var statearr_24538_24608 = state_24504__$1;
(statearr_24538_24608[(2)] = inst_24419);

(statearr_24538_24608[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24505 === (36))){
var inst_24463 = (state_24504[(25)]);
var inst_24467 = cljs.core.chunk_first.call(null,inst_24463);
var inst_24468 = cljs.core.chunk_rest.call(null,inst_24463);
var inst_24469 = cljs.core.count.call(null,inst_24467);
var inst_24444 = inst_24468;
var inst_24445 = inst_24467;
var inst_24446 = inst_24469;
var inst_24447 = (0);
var state_24504__$1 = (function (){var statearr_24539 = state_24504;
(statearr_24539[(9)] = inst_24445);

(statearr_24539[(20)] = inst_24444);

(statearr_24539[(12)] = inst_24447);

(statearr_24539[(21)] = inst_24446);

return statearr_24539;
})();
var statearr_24540_24609 = state_24504__$1;
(statearr_24540_24609[(2)] = null);

(statearr_24540_24609[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24505 === (41))){
var inst_24463 = (state_24504[(25)]);
var inst_24479 = (state_24504[(2)]);
var inst_24480 = cljs.core.next.call(null,inst_24463);
var inst_24444 = inst_24480;
var inst_24445 = null;
var inst_24446 = (0);
var inst_24447 = (0);
var state_24504__$1 = (function (){var statearr_24541 = state_24504;
(statearr_24541[(9)] = inst_24445);

(statearr_24541[(20)] = inst_24444);

(statearr_24541[(12)] = inst_24447);

(statearr_24541[(21)] = inst_24446);

(statearr_24541[(27)] = inst_24479);

return statearr_24541;
})();
var statearr_24542_24610 = state_24504__$1;
(statearr_24542_24610[(2)] = null);

(statearr_24542_24610[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24505 === (43))){
var state_24504__$1 = state_24504;
var statearr_24543_24611 = state_24504__$1;
(statearr_24543_24611[(2)] = null);

(statearr_24543_24611[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24505 === (29))){
var inst_24488 = (state_24504[(2)]);
var state_24504__$1 = state_24504;
var statearr_24544_24612 = state_24504__$1;
(statearr_24544_24612[(2)] = inst_24488);

(statearr_24544_24612[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24505 === (44))){
var inst_24497 = (state_24504[(2)]);
var state_24504__$1 = (function (){var statearr_24545 = state_24504;
(statearr_24545[(28)] = inst_24497);

return statearr_24545;
})();
var statearr_24546_24613 = state_24504__$1;
(statearr_24546_24613[(2)] = null);

(statearr_24546_24613[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24505 === (6))){
var inst_24436 = (state_24504[(29)]);
var inst_24435 = cljs.core.deref.call(null,cs);
var inst_24436__$1 = cljs.core.keys.call(null,inst_24435);
var inst_24437 = cljs.core.count.call(null,inst_24436__$1);
var inst_24438 = cljs.core.reset_BANG_.call(null,dctr,inst_24437);
var inst_24443 = cljs.core.seq.call(null,inst_24436__$1);
var inst_24444 = inst_24443;
var inst_24445 = null;
var inst_24446 = (0);
var inst_24447 = (0);
var state_24504__$1 = (function (){var statearr_24547 = state_24504;
(statearr_24547[(9)] = inst_24445);

(statearr_24547[(20)] = inst_24444);

(statearr_24547[(29)] = inst_24436__$1);

(statearr_24547[(12)] = inst_24447);

(statearr_24547[(30)] = inst_24438);

(statearr_24547[(21)] = inst_24446);

return statearr_24547;
})();
var statearr_24548_24614 = state_24504__$1;
(statearr_24548_24614[(2)] = null);

(statearr_24548_24614[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24505 === (28))){
var inst_24444 = (state_24504[(20)]);
var inst_24463 = (state_24504[(25)]);
var inst_24463__$1 = cljs.core.seq.call(null,inst_24444);
var state_24504__$1 = (function (){var statearr_24549 = state_24504;
(statearr_24549[(25)] = inst_24463__$1);

return statearr_24549;
})();
if(inst_24463__$1){
var statearr_24550_24615 = state_24504__$1;
(statearr_24550_24615[(1)] = (33));

} else {
var statearr_24551_24616 = state_24504__$1;
(statearr_24551_24616[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24505 === (25))){
var inst_24447 = (state_24504[(12)]);
var inst_24446 = (state_24504[(21)]);
var inst_24449 = (inst_24447 < inst_24446);
var inst_24450 = inst_24449;
var state_24504__$1 = state_24504;
if(cljs.core.truth_(inst_24450)){
var statearr_24552_24617 = state_24504__$1;
(statearr_24552_24617[(1)] = (27));

} else {
var statearr_24553_24618 = state_24504__$1;
(statearr_24553_24618[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24505 === (34))){
var state_24504__$1 = state_24504;
var statearr_24554_24619 = state_24504__$1;
(statearr_24554_24619[(2)] = null);

(statearr_24554_24619[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24505 === (17))){
var state_24504__$1 = state_24504;
var statearr_24555_24620 = state_24504__$1;
(statearr_24555_24620[(2)] = null);

(statearr_24555_24620[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24505 === (3))){
var inst_24502 = (state_24504[(2)]);
var state_24504__$1 = state_24504;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24504__$1,inst_24502);
} else {
if((state_val_24505 === (12))){
var inst_24431 = (state_24504[(2)]);
var state_24504__$1 = state_24504;
var statearr_24556_24621 = state_24504__$1;
(statearr_24556_24621[(2)] = inst_24431);

(statearr_24556_24621[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24505 === (2))){
var state_24504__$1 = state_24504;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24504__$1,(4),ch);
} else {
if((state_val_24505 === (23))){
var state_24504__$1 = state_24504;
var statearr_24557_24622 = state_24504__$1;
(statearr_24557_24622[(2)] = null);

(statearr_24557_24622[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24505 === (35))){
var inst_24486 = (state_24504[(2)]);
var state_24504__$1 = state_24504;
var statearr_24558_24623 = state_24504__$1;
(statearr_24558_24623[(2)] = inst_24486);

(statearr_24558_24623[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24505 === (19))){
var inst_24403 = (state_24504[(7)]);
var inst_24407 = cljs.core.chunk_first.call(null,inst_24403);
var inst_24408 = cljs.core.chunk_rest.call(null,inst_24403);
var inst_24409 = cljs.core.count.call(null,inst_24407);
var inst_24381 = inst_24408;
var inst_24382 = inst_24407;
var inst_24383 = inst_24409;
var inst_24384 = (0);
var state_24504__$1 = (function (){var statearr_24559 = state_24504;
(statearr_24559[(13)] = inst_24384);

(statearr_24559[(14)] = inst_24382);

(statearr_24559[(15)] = inst_24383);

(statearr_24559[(16)] = inst_24381);

return statearr_24559;
})();
var statearr_24560_24624 = state_24504__$1;
(statearr_24560_24624[(2)] = null);

(statearr_24560_24624[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24505 === (11))){
var inst_24403 = (state_24504[(7)]);
var inst_24381 = (state_24504[(16)]);
var inst_24403__$1 = cljs.core.seq.call(null,inst_24381);
var state_24504__$1 = (function (){var statearr_24561 = state_24504;
(statearr_24561[(7)] = inst_24403__$1);

return statearr_24561;
})();
if(inst_24403__$1){
var statearr_24562_24625 = state_24504__$1;
(statearr_24562_24625[(1)] = (16));

} else {
var statearr_24563_24626 = state_24504__$1;
(statearr_24563_24626[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24505 === (9))){
var inst_24433 = (state_24504[(2)]);
var state_24504__$1 = state_24504;
var statearr_24564_24627 = state_24504__$1;
(statearr_24564_24627[(2)] = inst_24433);

(statearr_24564_24627[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24505 === (5))){
var inst_24379 = cljs.core.deref.call(null,cs);
var inst_24380 = cljs.core.seq.call(null,inst_24379);
var inst_24381 = inst_24380;
var inst_24382 = null;
var inst_24383 = (0);
var inst_24384 = (0);
var state_24504__$1 = (function (){var statearr_24565 = state_24504;
(statearr_24565[(13)] = inst_24384);

(statearr_24565[(14)] = inst_24382);

(statearr_24565[(15)] = inst_24383);

(statearr_24565[(16)] = inst_24381);

return statearr_24565;
})();
var statearr_24566_24628 = state_24504__$1;
(statearr_24566_24628[(2)] = null);

(statearr_24566_24628[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24505 === (14))){
var state_24504__$1 = state_24504;
var statearr_24567_24629 = state_24504__$1;
(statearr_24567_24629[(2)] = null);

(statearr_24567_24629[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24505 === (45))){
var inst_24494 = (state_24504[(2)]);
var state_24504__$1 = state_24504;
var statearr_24568_24630 = state_24504__$1;
(statearr_24568_24630[(2)] = inst_24494);

(statearr_24568_24630[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24505 === (26))){
var inst_24436 = (state_24504[(29)]);
var inst_24490 = (state_24504[(2)]);
var inst_24491 = cljs.core.seq.call(null,inst_24436);
var state_24504__$1 = (function (){var statearr_24569 = state_24504;
(statearr_24569[(31)] = inst_24490);

return statearr_24569;
})();
if(inst_24491){
var statearr_24570_24631 = state_24504__$1;
(statearr_24570_24631[(1)] = (42));

} else {
var statearr_24571_24632 = state_24504__$1;
(statearr_24571_24632[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24505 === (16))){
var inst_24403 = (state_24504[(7)]);
var inst_24405 = cljs.core.chunked_seq_QMARK_.call(null,inst_24403);
var state_24504__$1 = state_24504;
if(inst_24405){
var statearr_24572_24633 = state_24504__$1;
(statearr_24572_24633[(1)] = (19));

} else {
var statearr_24573_24634 = state_24504__$1;
(statearr_24573_24634[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24505 === (38))){
var inst_24483 = (state_24504[(2)]);
var state_24504__$1 = state_24504;
var statearr_24574_24635 = state_24504__$1;
(statearr_24574_24635[(2)] = inst_24483);

(statearr_24574_24635[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24505 === (30))){
var state_24504__$1 = state_24504;
var statearr_24575_24636 = state_24504__$1;
(statearr_24575_24636[(2)] = null);

(statearr_24575_24636[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24505 === (10))){
var inst_24384 = (state_24504[(13)]);
var inst_24382 = (state_24504[(14)]);
var inst_24392 = cljs.core._nth.call(null,inst_24382,inst_24384);
var inst_24393 = cljs.core.nth.call(null,inst_24392,(0),null);
var inst_24394 = cljs.core.nth.call(null,inst_24392,(1),null);
var state_24504__$1 = (function (){var statearr_24576 = state_24504;
(statearr_24576[(26)] = inst_24393);

return statearr_24576;
})();
if(cljs.core.truth_(inst_24394)){
var statearr_24577_24637 = state_24504__$1;
(statearr_24577_24637[(1)] = (13));

} else {
var statearr_24578_24638 = state_24504__$1;
(statearr_24578_24638[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24505 === (18))){
var inst_24429 = (state_24504[(2)]);
var state_24504__$1 = state_24504;
var statearr_24579_24639 = state_24504__$1;
(statearr_24579_24639[(2)] = inst_24429);

(statearr_24579_24639[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24505 === (42))){
var state_24504__$1 = state_24504;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24504__$1,(45),dchan);
} else {
if((state_val_24505 === (37))){
var inst_24372 = (state_24504[(10)]);
var inst_24472 = (state_24504[(23)]);
var inst_24463 = (state_24504[(25)]);
var inst_24472__$1 = cljs.core.first.call(null,inst_24463);
var inst_24473 = cljs.core.async.put_BANG_.call(null,inst_24472__$1,inst_24372,done);
var state_24504__$1 = (function (){var statearr_24580 = state_24504;
(statearr_24580[(23)] = inst_24472__$1);

return statearr_24580;
})();
if(cljs.core.truth_(inst_24473)){
var statearr_24581_24640 = state_24504__$1;
(statearr_24581_24640[(1)] = (39));

} else {
var statearr_24582_24641 = state_24504__$1;
(statearr_24582_24641[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24505 === (8))){
var inst_24384 = (state_24504[(13)]);
var inst_24383 = (state_24504[(15)]);
var inst_24386 = (inst_24384 < inst_24383);
var inst_24387 = inst_24386;
var state_24504__$1 = state_24504;
if(cljs.core.truth_(inst_24387)){
var statearr_24583_24642 = state_24504__$1;
(statearr_24583_24642[(1)] = (10));

} else {
var statearr_24584_24643 = state_24504__$1;
(statearr_24584_24643[(1)] = (11));

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
});})(c__23769__auto___24589,cs,m,dchan,dctr,done))
;
return ((function (switch__23678__auto__,c__23769__auto___24589,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__23679__auto__ = null;
var cljs$core$async$mult_$_state_machine__23679__auto____0 = (function (){
var statearr_24585 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24585[(0)] = cljs$core$async$mult_$_state_machine__23679__auto__);

(statearr_24585[(1)] = (1));

return statearr_24585;
});
var cljs$core$async$mult_$_state_machine__23679__auto____1 = (function (state_24504){
while(true){
var ret_value__23680__auto__ = (function (){try{while(true){
var result__23681__auto__ = switch__23678__auto__.call(null,state_24504);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23681__auto__;
}
break;
}
}catch (e24586){if((e24586 instanceof Object)){
var ex__23682__auto__ = e24586;
var statearr_24587_24644 = state_24504;
(statearr_24587_24644[(5)] = ex__23682__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24504);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24586;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24645 = state_24504;
state_24504 = G__24645;
continue;
} else {
return ret_value__23680__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__23679__auto__ = function(state_24504){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__23679__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__23679__auto____1.call(this,state_24504);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__23679__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__23679__auto____0;
cljs$core$async$mult_$_state_machine__23679__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__23679__auto____1;
return cljs$core$async$mult_$_state_machine__23679__auto__;
})()
;})(switch__23678__auto__,c__23769__auto___24589,cs,m,dchan,dctr,done))
})();
var state__23771__auto__ = (function (){var statearr_24588 = f__23770__auto__.call(null);
(statearr_24588[(6)] = c__23769__auto___24589);

return statearr_24588;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23771__auto__);
});})(c__23769__auto___24589,cs,m,dchan,dctr,done))
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
var G__24647 = arguments.length;
switch (G__24647) {
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
var len__4531__auto___24659 = arguments.length;
var i__4532__auto___24660 = (0);
while(true){
if((i__4532__auto___24660 < len__4531__auto___24659)){
args__4534__auto__.push((arguments[i__4532__auto___24660]));

var G__24661 = (i__4532__auto___24660 + (1));
i__4532__auto___24660 = G__24661;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__24653){
var map__24654 = p__24653;
var map__24654__$1 = ((((!((map__24654 == null)))?(((((map__24654.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24654.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24654):map__24654);
var opts = map__24654__$1;
var statearr_24656_24662 = state;
(statearr_24656_24662[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__24654,map__24654__$1,opts){
return (function (val){
var statearr_24657_24663 = state;
(statearr_24657_24663[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__24654,map__24654__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_24658_24664 = state;
(statearr_24658_24664[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq24649){
var G__24650 = cljs.core.first.call(null,seq24649);
var seq24649__$1 = cljs.core.next.call(null,seq24649);
var G__24651 = cljs.core.first.call(null,seq24649__$1);
var seq24649__$2 = cljs.core.next.call(null,seq24649__$1);
var G__24652 = cljs.core.first.call(null,seq24649__$2);
var seq24649__$3 = cljs.core.next.call(null,seq24649__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24650,G__24651,G__24652,seq24649__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24665 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24665 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta24666){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta24666 = meta24666;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24665.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24667,meta24666__$1){
var self__ = this;
var _24667__$1 = this;
return (new cljs.core.async.t_cljs$core$async24665(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta24666__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24665.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24667){
var self__ = this;
var _24667__$1 = this;
return self__.meta24666;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24665.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24665.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24665.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24665.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24665.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24665.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24665.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24665.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async24665.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta24666","meta24666",-475080589,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24665.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24665.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24665";

cljs.core.async.t_cljs$core$async24665.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async24665");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24665.
 */
cljs.core.async.__GT_t_cljs$core$async24665 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async24665(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta24666){
return (new cljs.core.async.t_cljs$core$async24665(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta24666));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async24665(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23769__auto___24829 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23769__auto___24829,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__23770__auto__ = (function (){var switch__23678__auto__ = ((function (c__23769__auto___24829,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_24769){
var state_val_24770 = (state_24769[(1)]);
if((state_val_24770 === (7))){
var inst_24684 = (state_24769[(2)]);
var state_24769__$1 = state_24769;
var statearr_24771_24830 = state_24769__$1;
(statearr_24771_24830[(2)] = inst_24684);

(statearr_24771_24830[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24770 === (20))){
var inst_24696 = (state_24769[(7)]);
var state_24769__$1 = state_24769;
var statearr_24772_24831 = state_24769__$1;
(statearr_24772_24831[(2)] = inst_24696);

(statearr_24772_24831[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24770 === (27))){
var state_24769__$1 = state_24769;
var statearr_24773_24832 = state_24769__$1;
(statearr_24773_24832[(2)] = null);

(statearr_24773_24832[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24770 === (1))){
var inst_24671 = (state_24769[(8)]);
var inst_24671__$1 = calc_state.call(null);
var inst_24673 = (inst_24671__$1 == null);
var inst_24674 = cljs.core.not.call(null,inst_24673);
var state_24769__$1 = (function (){var statearr_24774 = state_24769;
(statearr_24774[(8)] = inst_24671__$1);

return statearr_24774;
})();
if(inst_24674){
var statearr_24775_24833 = state_24769__$1;
(statearr_24775_24833[(1)] = (2));

} else {
var statearr_24776_24834 = state_24769__$1;
(statearr_24776_24834[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24770 === (24))){
var inst_24720 = (state_24769[(9)]);
var inst_24743 = (state_24769[(10)]);
var inst_24729 = (state_24769[(11)]);
var inst_24743__$1 = inst_24720.call(null,inst_24729);
var state_24769__$1 = (function (){var statearr_24777 = state_24769;
(statearr_24777[(10)] = inst_24743__$1);

return statearr_24777;
})();
if(cljs.core.truth_(inst_24743__$1)){
var statearr_24778_24835 = state_24769__$1;
(statearr_24778_24835[(1)] = (29));

} else {
var statearr_24779_24836 = state_24769__$1;
(statearr_24779_24836[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24770 === (4))){
var inst_24687 = (state_24769[(2)]);
var state_24769__$1 = state_24769;
if(cljs.core.truth_(inst_24687)){
var statearr_24780_24837 = state_24769__$1;
(statearr_24780_24837[(1)] = (8));

} else {
var statearr_24781_24838 = state_24769__$1;
(statearr_24781_24838[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24770 === (15))){
var inst_24714 = (state_24769[(2)]);
var state_24769__$1 = state_24769;
if(cljs.core.truth_(inst_24714)){
var statearr_24782_24839 = state_24769__$1;
(statearr_24782_24839[(1)] = (19));

} else {
var statearr_24783_24840 = state_24769__$1;
(statearr_24783_24840[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24770 === (21))){
var inst_24719 = (state_24769[(12)]);
var inst_24719__$1 = (state_24769[(2)]);
var inst_24720 = cljs.core.get.call(null,inst_24719__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24721 = cljs.core.get.call(null,inst_24719__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24722 = cljs.core.get.call(null,inst_24719__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_24769__$1 = (function (){var statearr_24784 = state_24769;
(statearr_24784[(9)] = inst_24720);

(statearr_24784[(13)] = inst_24721);

(statearr_24784[(12)] = inst_24719__$1);

return statearr_24784;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_24769__$1,(22),inst_24722);
} else {
if((state_val_24770 === (31))){
var inst_24751 = (state_24769[(2)]);
var state_24769__$1 = state_24769;
if(cljs.core.truth_(inst_24751)){
var statearr_24785_24841 = state_24769__$1;
(statearr_24785_24841[(1)] = (32));

} else {
var statearr_24786_24842 = state_24769__$1;
(statearr_24786_24842[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24770 === (32))){
var inst_24728 = (state_24769[(14)]);
var state_24769__$1 = state_24769;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24769__$1,(35),out,inst_24728);
} else {
if((state_val_24770 === (33))){
var inst_24719 = (state_24769[(12)]);
var inst_24696 = inst_24719;
var state_24769__$1 = (function (){var statearr_24787 = state_24769;
(statearr_24787[(7)] = inst_24696);

return statearr_24787;
})();
var statearr_24788_24843 = state_24769__$1;
(statearr_24788_24843[(2)] = null);

(statearr_24788_24843[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24770 === (13))){
var inst_24696 = (state_24769[(7)]);
var inst_24703 = inst_24696.cljs$lang$protocol_mask$partition0$;
var inst_24704 = (inst_24703 & (64));
var inst_24705 = inst_24696.cljs$core$ISeq$;
var inst_24706 = (cljs.core.PROTOCOL_SENTINEL === inst_24705);
var inst_24707 = ((inst_24704) || (inst_24706));
var state_24769__$1 = state_24769;
if(cljs.core.truth_(inst_24707)){
var statearr_24789_24844 = state_24769__$1;
(statearr_24789_24844[(1)] = (16));

} else {
var statearr_24790_24845 = state_24769__$1;
(statearr_24790_24845[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24770 === (22))){
var inst_24728 = (state_24769[(14)]);
var inst_24729 = (state_24769[(11)]);
var inst_24727 = (state_24769[(2)]);
var inst_24728__$1 = cljs.core.nth.call(null,inst_24727,(0),null);
var inst_24729__$1 = cljs.core.nth.call(null,inst_24727,(1),null);
var inst_24730 = (inst_24728__$1 == null);
var inst_24731 = cljs.core._EQ_.call(null,inst_24729__$1,change);
var inst_24732 = ((inst_24730) || (inst_24731));
var state_24769__$1 = (function (){var statearr_24791 = state_24769;
(statearr_24791[(14)] = inst_24728__$1);

(statearr_24791[(11)] = inst_24729__$1);

return statearr_24791;
})();
if(cljs.core.truth_(inst_24732)){
var statearr_24792_24846 = state_24769__$1;
(statearr_24792_24846[(1)] = (23));

} else {
var statearr_24793_24847 = state_24769__$1;
(statearr_24793_24847[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24770 === (36))){
var inst_24719 = (state_24769[(12)]);
var inst_24696 = inst_24719;
var state_24769__$1 = (function (){var statearr_24794 = state_24769;
(statearr_24794[(7)] = inst_24696);

return statearr_24794;
})();
var statearr_24795_24848 = state_24769__$1;
(statearr_24795_24848[(2)] = null);

(statearr_24795_24848[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24770 === (29))){
var inst_24743 = (state_24769[(10)]);
var state_24769__$1 = state_24769;
var statearr_24796_24849 = state_24769__$1;
(statearr_24796_24849[(2)] = inst_24743);

(statearr_24796_24849[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24770 === (6))){
var state_24769__$1 = state_24769;
var statearr_24797_24850 = state_24769__$1;
(statearr_24797_24850[(2)] = false);

(statearr_24797_24850[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24770 === (28))){
var inst_24739 = (state_24769[(2)]);
var inst_24740 = calc_state.call(null);
var inst_24696 = inst_24740;
var state_24769__$1 = (function (){var statearr_24798 = state_24769;
(statearr_24798[(7)] = inst_24696);

(statearr_24798[(15)] = inst_24739);

return statearr_24798;
})();
var statearr_24799_24851 = state_24769__$1;
(statearr_24799_24851[(2)] = null);

(statearr_24799_24851[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24770 === (25))){
var inst_24765 = (state_24769[(2)]);
var state_24769__$1 = state_24769;
var statearr_24800_24852 = state_24769__$1;
(statearr_24800_24852[(2)] = inst_24765);

(statearr_24800_24852[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24770 === (34))){
var inst_24763 = (state_24769[(2)]);
var state_24769__$1 = state_24769;
var statearr_24801_24853 = state_24769__$1;
(statearr_24801_24853[(2)] = inst_24763);

(statearr_24801_24853[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24770 === (17))){
var state_24769__$1 = state_24769;
var statearr_24802_24854 = state_24769__$1;
(statearr_24802_24854[(2)] = false);

(statearr_24802_24854[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24770 === (3))){
var state_24769__$1 = state_24769;
var statearr_24803_24855 = state_24769__$1;
(statearr_24803_24855[(2)] = false);

(statearr_24803_24855[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24770 === (12))){
var inst_24767 = (state_24769[(2)]);
var state_24769__$1 = state_24769;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24769__$1,inst_24767);
} else {
if((state_val_24770 === (2))){
var inst_24671 = (state_24769[(8)]);
var inst_24676 = inst_24671.cljs$lang$protocol_mask$partition0$;
var inst_24677 = (inst_24676 & (64));
var inst_24678 = inst_24671.cljs$core$ISeq$;
var inst_24679 = (cljs.core.PROTOCOL_SENTINEL === inst_24678);
var inst_24680 = ((inst_24677) || (inst_24679));
var state_24769__$1 = state_24769;
if(cljs.core.truth_(inst_24680)){
var statearr_24804_24856 = state_24769__$1;
(statearr_24804_24856[(1)] = (5));

} else {
var statearr_24805_24857 = state_24769__$1;
(statearr_24805_24857[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24770 === (23))){
var inst_24728 = (state_24769[(14)]);
var inst_24734 = (inst_24728 == null);
var state_24769__$1 = state_24769;
if(cljs.core.truth_(inst_24734)){
var statearr_24806_24858 = state_24769__$1;
(statearr_24806_24858[(1)] = (26));

} else {
var statearr_24807_24859 = state_24769__$1;
(statearr_24807_24859[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24770 === (35))){
var inst_24754 = (state_24769[(2)]);
var state_24769__$1 = state_24769;
if(cljs.core.truth_(inst_24754)){
var statearr_24808_24860 = state_24769__$1;
(statearr_24808_24860[(1)] = (36));

} else {
var statearr_24809_24861 = state_24769__$1;
(statearr_24809_24861[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24770 === (19))){
var inst_24696 = (state_24769[(7)]);
var inst_24716 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24696);
var state_24769__$1 = state_24769;
var statearr_24810_24862 = state_24769__$1;
(statearr_24810_24862[(2)] = inst_24716);

(statearr_24810_24862[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24770 === (11))){
var inst_24696 = (state_24769[(7)]);
var inst_24700 = (inst_24696 == null);
var inst_24701 = cljs.core.not.call(null,inst_24700);
var state_24769__$1 = state_24769;
if(inst_24701){
var statearr_24811_24863 = state_24769__$1;
(statearr_24811_24863[(1)] = (13));

} else {
var statearr_24812_24864 = state_24769__$1;
(statearr_24812_24864[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24770 === (9))){
var inst_24671 = (state_24769[(8)]);
var state_24769__$1 = state_24769;
var statearr_24813_24865 = state_24769__$1;
(statearr_24813_24865[(2)] = inst_24671);

(statearr_24813_24865[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24770 === (5))){
var state_24769__$1 = state_24769;
var statearr_24814_24866 = state_24769__$1;
(statearr_24814_24866[(2)] = true);

(statearr_24814_24866[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24770 === (14))){
var state_24769__$1 = state_24769;
var statearr_24815_24867 = state_24769__$1;
(statearr_24815_24867[(2)] = false);

(statearr_24815_24867[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24770 === (26))){
var inst_24729 = (state_24769[(11)]);
var inst_24736 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_24729);
var state_24769__$1 = state_24769;
var statearr_24816_24868 = state_24769__$1;
(statearr_24816_24868[(2)] = inst_24736);

(statearr_24816_24868[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24770 === (16))){
var state_24769__$1 = state_24769;
var statearr_24817_24869 = state_24769__$1;
(statearr_24817_24869[(2)] = true);

(statearr_24817_24869[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24770 === (38))){
var inst_24759 = (state_24769[(2)]);
var state_24769__$1 = state_24769;
var statearr_24818_24870 = state_24769__$1;
(statearr_24818_24870[(2)] = inst_24759);

(statearr_24818_24870[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24770 === (30))){
var inst_24720 = (state_24769[(9)]);
var inst_24721 = (state_24769[(13)]);
var inst_24729 = (state_24769[(11)]);
var inst_24746 = cljs.core.empty_QMARK_.call(null,inst_24720);
var inst_24747 = inst_24721.call(null,inst_24729);
var inst_24748 = cljs.core.not.call(null,inst_24747);
var inst_24749 = ((inst_24746) && (inst_24748));
var state_24769__$1 = state_24769;
var statearr_24819_24871 = state_24769__$1;
(statearr_24819_24871[(2)] = inst_24749);

(statearr_24819_24871[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24770 === (10))){
var inst_24671 = (state_24769[(8)]);
var inst_24692 = (state_24769[(2)]);
var inst_24693 = cljs.core.get.call(null,inst_24692,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24694 = cljs.core.get.call(null,inst_24692,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24695 = cljs.core.get.call(null,inst_24692,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_24696 = inst_24671;
var state_24769__$1 = (function (){var statearr_24820 = state_24769;
(statearr_24820[(16)] = inst_24693);

(statearr_24820[(7)] = inst_24696);

(statearr_24820[(17)] = inst_24695);

(statearr_24820[(18)] = inst_24694);

return statearr_24820;
})();
var statearr_24821_24872 = state_24769__$1;
(statearr_24821_24872[(2)] = null);

(statearr_24821_24872[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24770 === (18))){
var inst_24711 = (state_24769[(2)]);
var state_24769__$1 = state_24769;
var statearr_24822_24873 = state_24769__$1;
(statearr_24822_24873[(2)] = inst_24711);

(statearr_24822_24873[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24770 === (37))){
var state_24769__$1 = state_24769;
var statearr_24823_24874 = state_24769__$1;
(statearr_24823_24874[(2)] = null);

(statearr_24823_24874[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24770 === (8))){
var inst_24671 = (state_24769[(8)]);
var inst_24689 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24671);
var state_24769__$1 = state_24769;
var statearr_24824_24875 = state_24769__$1;
(statearr_24824_24875[(2)] = inst_24689);

(statearr_24824_24875[(1)] = (10));


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
});})(c__23769__auto___24829,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__23678__auto__,c__23769__auto___24829,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__23679__auto__ = null;
var cljs$core$async$mix_$_state_machine__23679__auto____0 = (function (){
var statearr_24825 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24825[(0)] = cljs$core$async$mix_$_state_machine__23679__auto__);

(statearr_24825[(1)] = (1));

return statearr_24825;
});
var cljs$core$async$mix_$_state_machine__23679__auto____1 = (function (state_24769){
while(true){
var ret_value__23680__auto__ = (function (){try{while(true){
var result__23681__auto__ = switch__23678__auto__.call(null,state_24769);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23681__auto__;
}
break;
}
}catch (e24826){if((e24826 instanceof Object)){
var ex__23682__auto__ = e24826;
var statearr_24827_24876 = state_24769;
(statearr_24827_24876[(5)] = ex__23682__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24769);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24826;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24877 = state_24769;
state_24769 = G__24877;
continue;
} else {
return ret_value__23680__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__23679__auto__ = function(state_24769){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__23679__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__23679__auto____1.call(this,state_24769);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__23679__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__23679__auto____0;
cljs$core$async$mix_$_state_machine__23679__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__23679__auto____1;
return cljs$core$async$mix_$_state_machine__23679__auto__;
})()
;})(switch__23678__auto__,c__23769__auto___24829,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__23771__auto__ = (function (){var statearr_24828 = f__23770__auto__.call(null);
(statearr_24828[(6)] = c__23769__auto___24829);

return statearr_24828;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23771__auto__);
});})(c__23769__auto___24829,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__24879 = arguments.length;
switch (G__24879) {
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
var G__24883 = arguments.length;
switch (G__24883) {
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
return (function (p1__24881_SHARP_){
if(cljs.core.truth_(p1__24881_SHARP_.call(null,topic))){
return p1__24881_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__24881_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3949__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24884 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24884 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta24885){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta24885 = meta24885;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24884.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_24886,meta24885__$1){
var self__ = this;
var _24886__$1 = this;
return (new cljs.core.async.t_cljs$core$async24884(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta24885__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24884.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_24886){
var self__ = this;
var _24886__$1 = this;
return self__.meta24885;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24884.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24884.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24884.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24884.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24884.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24884.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24884.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24884.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta24885","meta24885",-748485570,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24884.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24884.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24884";

cljs.core.async.t_cljs$core$async24884.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async24884");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24884.
 */
cljs.core.async.__GT_t_cljs$core$async24884 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async24884(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24885){
return (new cljs.core.async.t_cljs$core$async24884(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24885));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async24884(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23769__auto___25004 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23769__auto___25004,mults,ensure_mult,p){
return (function (){
var f__23770__auto__ = (function (){var switch__23678__auto__ = ((function (c__23769__auto___25004,mults,ensure_mult,p){
return (function (state_24958){
var state_val_24959 = (state_24958[(1)]);
if((state_val_24959 === (7))){
var inst_24954 = (state_24958[(2)]);
var state_24958__$1 = state_24958;
var statearr_24960_25005 = state_24958__$1;
(statearr_24960_25005[(2)] = inst_24954);

(statearr_24960_25005[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24959 === (20))){
var state_24958__$1 = state_24958;
var statearr_24961_25006 = state_24958__$1;
(statearr_24961_25006[(2)] = null);

(statearr_24961_25006[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24959 === (1))){
var state_24958__$1 = state_24958;
var statearr_24962_25007 = state_24958__$1;
(statearr_24962_25007[(2)] = null);

(statearr_24962_25007[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24959 === (24))){
var inst_24937 = (state_24958[(7)]);
var inst_24946 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_24937);
var state_24958__$1 = state_24958;
var statearr_24963_25008 = state_24958__$1;
(statearr_24963_25008[(2)] = inst_24946);

(statearr_24963_25008[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24959 === (4))){
var inst_24889 = (state_24958[(8)]);
var inst_24889__$1 = (state_24958[(2)]);
var inst_24890 = (inst_24889__$1 == null);
var state_24958__$1 = (function (){var statearr_24964 = state_24958;
(statearr_24964[(8)] = inst_24889__$1);

return statearr_24964;
})();
if(cljs.core.truth_(inst_24890)){
var statearr_24965_25009 = state_24958__$1;
(statearr_24965_25009[(1)] = (5));

} else {
var statearr_24966_25010 = state_24958__$1;
(statearr_24966_25010[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24959 === (15))){
var inst_24931 = (state_24958[(2)]);
var state_24958__$1 = state_24958;
var statearr_24967_25011 = state_24958__$1;
(statearr_24967_25011[(2)] = inst_24931);

(statearr_24967_25011[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24959 === (21))){
var inst_24951 = (state_24958[(2)]);
var state_24958__$1 = (function (){var statearr_24968 = state_24958;
(statearr_24968[(9)] = inst_24951);

return statearr_24968;
})();
var statearr_24969_25012 = state_24958__$1;
(statearr_24969_25012[(2)] = null);

(statearr_24969_25012[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24959 === (13))){
var inst_24913 = (state_24958[(10)]);
var inst_24915 = cljs.core.chunked_seq_QMARK_.call(null,inst_24913);
var state_24958__$1 = state_24958;
if(inst_24915){
var statearr_24970_25013 = state_24958__$1;
(statearr_24970_25013[(1)] = (16));

} else {
var statearr_24971_25014 = state_24958__$1;
(statearr_24971_25014[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24959 === (22))){
var inst_24943 = (state_24958[(2)]);
var state_24958__$1 = state_24958;
if(cljs.core.truth_(inst_24943)){
var statearr_24972_25015 = state_24958__$1;
(statearr_24972_25015[(1)] = (23));

} else {
var statearr_24973_25016 = state_24958__$1;
(statearr_24973_25016[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24959 === (6))){
var inst_24889 = (state_24958[(8)]);
var inst_24939 = (state_24958[(11)]);
var inst_24937 = (state_24958[(7)]);
var inst_24937__$1 = topic_fn.call(null,inst_24889);
var inst_24938 = cljs.core.deref.call(null,mults);
var inst_24939__$1 = cljs.core.get.call(null,inst_24938,inst_24937__$1);
var state_24958__$1 = (function (){var statearr_24974 = state_24958;
(statearr_24974[(11)] = inst_24939__$1);

(statearr_24974[(7)] = inst_24937__$1);

return statearr_24974;
})();
if(cljs.core.truth_(inst_24939__$1)){
var statearr_24975_25017 = state_24958__$1;
(statearr_24975_25017[(1)] = (19));

} else {
var statearr_24976_25018 = state_24958__$1;
(statearr_24976_25018[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24959 === (25))){
var inst_24948 = (state_24958[(2)]);
var state_24958__$1 = state_24958;
var statearr_24977_25019 = state_24958__$1;
(statearr_24977_25019[(2)] = inst_24948);

(statearr_24977_25019[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24959 === (17))){
var inst_24913 = (state_24958[(10)]);
var inst_24922 = cljs.core.first.call(null,inst_24913);
var inst_24923 = cljs.core.async.muxch_STAR_.call(null,inst_24922);
var inst_24924 = cljs.core.async.close_BANG_.call(null,inst_24923);
var inst_24925 = cljs.core.next.call(null,inst_24913);
var inst_24899 = inst_24925;
var inst_24900 = null;
var inst_24901 = (0);
var inst_24902 = (0);
var state_24958__$1 = (function (){var statearr_24978 = state_24958;
(statearr_24978[(12)] = inst_24901);

(statearr_24978[(13)] = inst_24900);

(statearr_24978[(14)] = inst_24902);

(statearr_24978[(15)] = inst_24899);

(statearr_24978[(16)] = inst_24924);

return statearr_24978;
})();
var statearr_24979_25020 = state_24958__$1;
(statearr_24979_25020[(2)] = null);

(statearr_24979_25020[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24959 === (3))){
var inst_24956 = (state_24958[(2)]);
var state_24958__$1 = state_24958;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24958__$1,inst_24956);
} else {
if((state_val_24959 === (12))){
var inst_24933 = (state_24958[(2)]);
var state_24958__$1 = state_24958;
var statearr_24980_25021 = state_24958__$1;
(statearr_24980_25021[(2)] = inst_24933);

(statearr_24980_25021[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24959 === (2))){
var state_24958__$1 = state_24958;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24958__$1,(4),ch);
} else {
if((state_val_24959 === (23))){
var state_24958__$1 = state_24958;
var statearr_24981_25022 = state_24958__$1;
(statearr_24981_25022[(2)] = null);

(statearr_24981_25022[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24959 === (19))){
var inst_24889 = (state_24958[(8)]);
var inst_24939 = (state_24958[(11)]);
var inst_24941 = cljs.core.async.muxch_STAR_.call(null,inst_24939);
var state_24958__$1 = state_24958;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24958__$1,(22),inst_24941,inst_24889);
} else {
if((state_val_24959 === (11))){
var inst_24913 = (state_24958[(10)]);
var inst_24899 = (state_24958[(15)]);
var inst_24913__$1 = cljs.core.seq.call(null,inst_24899);
var state_24958__$1 = (function (){var statearr_24982 = state_24958;
(statearr_24982[(10)] = inst_24913__$1);

return statearr_24982;
})();
if(inst_24913__$1){
var statearr_24983_25023 = state_24958__$1;
(statearr_24983_25023[(1)] = (13));

} else {
var statearr_24984_25024 = state_24958__$1;
(statearr_24984_25024[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24959 === (9))){
var inst_24935 = (state_24958[(2)]);
var state_24958__$1 = state_24958;
var statearr_24985_25025 = state_24958__$1;
(statearr_24985_25025[(2)] = inst_24935);

(statearr_24985_25025[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24959 === (5))){
var inst_24896 = cljs.core.deref.call(null,mults);
var inst_24897 = cljs.core.vals.call(null,inst_24896);
var inst_24898 = cljs.core.seq.call(null,inst_24897);
var inst_24899 = inst_24898;
var inst_24900 = null;
var inst_24901 = (0);
var inst_24902 = (0);
var state_24958__$1 = (function (){var statearr_24986 = state_24958;
(statearr_24986[(12)] = inst_24901);

(statearr_24986[(13)] = inst_24900);

(statearr_24986[(14)] = inst_24902);

(statearr_24986[(15)] = inst_24899);

return statearr_24986;
})();
var statearr_24987_25026 = state_24958__$1;
(statearr_24987_25026[(2)] = null);

(statearr_24987_25026[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24959 === (14))){
var state_24958__$1 = state_24958;
var statearr_24991_25027 = state_24958__$1;
(statearr_24991_25027[(2)] = null);

(statearr_24991_25027[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24959 === (16))){
var inst_24913 = (state_24958[(10)]);
var inst_24917 = cljs.core.chunk_first.call(null,inst_24913);
var inst_24918 = cljs.core.chunk_rest.call(null,inst_24913);
var inst_24919 = cljs.core.count.call(null,inst_24917);
var inst_24899 = inst_24918;
var inst_24900 = inst_24917;
var inst_24901 = inst_24919;
var inst_24902 = (0);
var state_24958__$1 = (function (){var statearr_24992 = state_24958;
(statearr_24992[(12)] = inst_24901);

(statearr_24992[(13)] = inst_24900);

(statearr_24992[(14)] = inst_24902);

(statearr_24992[(15)] = inst_24899);

return statearr_24992;
})();
var statearr_24993_25028 = state_24958__$1;
(statearr_24993_25028[(2)] = null);

(statearr_24993_25028[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24959 === (10))){
var inst_24901 = (state_24958[(12)]);
var inst_24900 = (state_24958[(13)]);
var inst_24902 = (state_24958[(14)]);
var inst_24899 = (state_24958[(15)]);
var inst_24907 = cljs.core._nth.call(null,inst_24900,inst_24902);
var inst_24908 = cljs.core.async.muxch_STAR_.call(null,inst_24907);
var inst_24909 = cljs.core.async.close_BANG_.call(null,inst_24908);
var inst_24910 = (inst_24902 + (1));
var tmp24988 = inst_24901;
var tmp24989 = inst_24900;
var tmp24990 = inst_24899;
var inst_24899__$1 = tmp24990;
var inst_24900__$1 = tmp24989;
var inst_24901__$1 = tmp24988;
var inst_24902__$1 = inst_24910;
var state_24958__$1 = (function (){var statearr_24994 = state_24958;
(statearr_24994[(17)] = inst_24909);

(statearr_24994[(12)] = inst_24901__$1);

(statearr_24994[(13)] = inst_24900__$1);

(statearr_24994[(14)] = inst_24902__$1);

(statearr_24994[(15)] = inst_24899__$1);

return statearr_24994;
})();
var statearr_24995_25029 = state_24958__$1;
(statearr_24995_25029[(2)] = null);

(statearr_24995_25029[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24959 === (18))){
var inst_24928 = (state_24958[(2)]);
var state_24958__$1 = state_24958;
var statearr_24996_25030 = state_24958__$1;
(statearr_24996_25030[(2)] = inst_24928);

(statearr_24996_25030[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24959 === (8))){
var inst_24901 = (state_24958[(12)]);
var inst_24902 = (state_24958[(14)]);
var inst_24904 = (inst_24902 < inst_24901);
var inst_24905 = inst_24904;
var state_24958__$1 = state_24958;
if(cljs.core.truth_(inst_24905)){
var statearr_24997_25031 = state_24958__$1;
(statearr_24997_25031[(1)] = (10));

} else {
var statearr_24998_25032 = state_24958__$1;
(statearr_24998_25032[(1)] = (11));

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
});})(c__23769__auto___25004,mults,ensure_mult,p))
;
return ((function (switch__23678__auto__,c__23769__auto___25004,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__23679__auto__ = null;
var cljs$core$async$state_machine__23679__auto____0 = (function (){
var statearr_24999 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24999[(0)] = cljs$core$async$state_machine__23679__auto__);

(statearr_24999[(1)] = (1));

return statearr_24999;
});
var cljs$core$async$state_machine__23679__auto____1 = (function (state_24958){
while(true){
var ret_value__23680__auto__ = (function (){try{while(true){
var result__23681__auto__ = switch__23678__auto__.call(null,state_24958);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23681__auto__;
}
break;
}
}catch (e25000){if((e25000 instanceof Object)){
var ex__23682__auto__ = e25000;
var statearr_25001_25033 = state_24958;
(statearr_25001_25033[(5)] = ex__23682__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24958);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25000;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25034 = state_24958;
state_24958 = G__25034;
continue;
} else {
return ret_value__23680__auto__;
}
break;
}
});
cljs$core$async$state_machine__23679__auto__ = function(state_24958){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23679__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23679__auto____1.call(this,state_24958);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23679__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23679__auto____0;
cljs$core$async$state_machine__23679__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23679__auto____1;
return cljs$core$async$state_machine__23679__auto__;
})()
;})(switch__23678__auto__,c__23769__auto___25004,mults,ensure_mult,p))
})();
var state__23771__auto__ = (function (){var statearr_25002 = f__23770__auto__.call(null);
(statearr_25002[(6)] = c__23769__auto___25004);

return statearr_25002;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23771__auto__);
});})(c__23769__auto___25004,mults,ensure_mult,p))
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
var G__25036 = arguments.length;
switch (G__25036) {
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
var G__25039 = arguments.length;
switch (G__25039) {
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
var G__25042 = arguments.length;
switch (G__25042) {
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
var c__23769__auto___25109 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23769__auto___25109,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__23770__auto__ = (function (){var switch__23678__auto__ = ((function (c__23769__auto___25109,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_25081){
var state_val_25082 = (state_25081[(1)]);
if((state_val_25082 === (7))){
var state_25081__$1 = state_25081;
var statearr_25083_25110 = state_25081__$1;
(statearr_25083_25110[(2)] = null);

(statearr_25083_25110[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25082 === (1))){
var state_25081__$1 = state_25081;
var statearr_25084_25111 = state_25081__$1;
(statearr_25084_25111[(2)] = null);

(statearr_25084_25111[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25082 === (4))){
var inst_25045 = (state_25081[(7)]);
var inst_25047 = (inst_25045 < cnt);
var state_25081__$1 = state_25081;
if(cljs.core.truth_(inst_25047)){
var statearr_25085_25112 = state_25081__$1;
(statearr_25085_25112[(1)] = (6));

} else {
var statearr_25086_25113 = state_25081__$1;
(statearr_25086_25113[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25082 === (15))){
var inst_25077 = (state_25081[(2)]);
var state_25081__$1 = state_25081;
var statearr_25087_25114 = state_25081__$1;
(statearr_25087_25114[(2)] = inst_25077);

(statearr_25087_25114[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25082 === (13))){
var inst_25070 = cljs.core.async.close_BANG_.call(null,out);
var state_25081__$1 = state_25081;
var statearr_25088_25115 = state_25081__$1;
(statearr_25088_25115[(2)] = inst_25070);

(statearr_25088_25115[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25082 === (6))){
var state_25081__$1 = state_25081;
var statearr_25089_25116 = state_25081__$1;
(statearr_25089_25116[(2)] = null);

(statearr_25089_25116[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25082 === (3))){
var inst_25079 = (state_25081[(2)]);
var state_25081__$1 = state_25081;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25081__$1,inst_25079);
} else {
if((state_val_25082 === (12))){
var inst_25067 = (state_25081[(8)]);
var inst_25067__$1 = (state_25081[(2)]);
var inst_25068 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_25067__$1);
var state_25081__$1 = (function (){var statearr_25090 = state_25081;
(statearr_25090[(8)] = inst_25067__$1);

return statearr_25090;
})();
if(cljs.core.truth_(inst_25068)){
var statearr_25091_25117 = state_25081__$1;
(statearr_25091_25117[(1)] = (13));

} else {
var statearr_25092_25118 = state_25081__$1;
(statearr_25092_25118[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25082 === (2))){
var inst_25044 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_25045 = (0);
var state_25081__$1 = (function (){var statearr_25093 = state_25081;
(statearr_25093[(9)] = inst_25044);

(statearr_25093[(7)] = inst_25045);

return statearr_25093;
})();
var statearr_25094_25119 = state_25081__$1;
(statearr_25094_25119[(2)] = null);

(statearr_25094_25119[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25082 === (11))){
var inst_25045 = (state_25081[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_25081,(10),Object,null,(9));
var inst_25054 = chs__$1.call(null,inst_25045);
var inst_25055 = done.call(null,inst_25045);
var inst_25056 = cljs.core.async.take_BANG_.call(null,inst_25054,inst_25055);
var state_25081__$1 = state_25081;
var statearr_25095_25120 = state_25081__$1;
(statearr_25095_25120[(2)] = inst_25056);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25081__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25082 === (9))){
var inst_25045 = (state_25081[(7)]);
var inst_25058 = (state_25081[(2)]);
var inst_25059 = (inst_25045 + (1));
var inst_25045__$1 = inst_25059;
var state_25081__$1 = (function (){var statearr_25096 = state_25081;
(statearr_25096[(10)] = inst_25058);

(statearr_25096[(7)] = inst_25045__$1);

return statearr_25096;
})();
var statearr_25097_25121 = state_25081__$1;
(statearr_25097_25121[(2)] = null);

(statearr_25097_25121[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25082 === (5))){
var inst_25065 = (state_25081[(2)]);
var state_25081__$1 = (function (){var statearr_25098 = state_25081;
(statearr_25098[(11)] = inst_25065);

return statearr_25098;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25081__$1,(12),dchan);
} else {
if((state_val_25082 === (14))){
var inst_25067 = (state_25081[(8)]);
var inst_25072 = cljs.core.apply.call(null,f,inst_25067);
var state_25081__$1 = state_25081;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25081__$1,(16),out,inst_25072);
} else {
if((state_val_25082 === (16))){
var inst_25074 = (state_25081[(2)]);
var state_25081__$1 = (function (){var statearr_25099 = state_25081;
(statearr_25099[(12)] = inst_25074);

return statearr_25099;
})();
var statearr_25100_25122 = state_25081__$1;
(statearr_25100_25122[(2)] = null);

(statearr_25100_25122[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25082 === (10))){
var inst_25049 = (state_25081[(2)]);
var inst_25050 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_25081__$1 = (function (){var statearr_25101 = state_25081;
(statearr_25101[(13)] = inst_25049);

return statearr_25101;
})();
var statearr_25102_25123 = state_25081__$1;
(statearr_25102_25123[(2)] = inst_25050);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25081__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25082 === (8))){
var inst_25063 = (state_25081[(2)]);
var state_25081__$1 = state_25081;
var statearr_25103_25124 = state_25081__$1;
(statearr_25103_25124[(2)] = inst_25063);

(statearr_25103_25124[(1)] = (5));


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
});})(c__23769__auto___25109,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__23678__auto__,c__23769__auto___25109,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__23679__auto__ = null;
var cljs$core$async$state_machine__23679__auto____0 = (function (){
var statearr_25104 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25104[(0)] = cljs$core$async$state_machine__23679__auto__);

(statearr_25104[(1)] = (1));

return statearr_25104;
});
var cljs$core$async$state_machine__23679__auto____1 = (function (state_25081){
while(true){
var ret_value__23680__auto__ = (function (){try{while(true){
var result__23681__auto__ = switch__23678__auto__.call(null,state_25081);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23681__auto__;
}
break;
}
}catch (e25105){if((e25105 instanceof Object)){
var ex__23682__auto__ = e25105;
var statearr_25106_25125 = state_25081;
(statearr_25106_25125[(5)] = ex__23682__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25081);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25105;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25126 = state_25081;
state_25081 = G__25126;
continue;
} else {
return ret_value__23680__auto__;
}
break;
}
});
cljs$core$async$state_machine__23679__auto__ = function(state_25081){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23679__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23679__auto____1.call(this,state_25081);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23679__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23679__auto____0;
cljs$core$async$state_machine__23679__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23679__auto____1;
return cljs$core$async$state_machine__23679__auto__;
})()
;})(switch__23678__auto__,c__23769__auto___25109,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__23771__auto__ = (function (){var statearr_25107 = f__23770__auto__.call(null);
(statearr_25107[(6)] = c__23769__auto___25109);

return statearr_25107;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23771__auto__);
});})(c__23769__auto___25109,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__25129 = arguments.length;
switch (G__25129) {
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
var c__23769__auto___25183 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23769__auto___25183,out){
return (function (){
var f__23770__auto__ = (function (){var switch__23678__auto__ = ((function (c__23769__auto___25183,out){
return (function (state_25161){
var state_val_25162 = (state_25161[(1)]);
if((state_val_25162 === (7))){
var inst_25140 = (state_25161[(7)]);
var inst_25141 = (state_25161[(8)]);
var inst_25140__$1 = (state_25161[(2)]);
var inst_25141__$1 = cljs.core.nth.call(null,inst_25140__$1,(0),null);
var inst_25142 = cljs.core.nth.call(null,inst_25140__$1,(1),null);
var inst_25143 = (inst_25141__$1 == null);
var state_25161__$1 = (function (){var statearr_25163 = state_25161;
(statearr_25163[(7)] = inst_25140__$1);

(statearr_25163[(8)] = inst_25141__$1);

(statearr_25163[(9)] = inst_25142);

return statearr_25163;
})();
if(cljs.core.truth_(inst_25143)){
var statearr_25164_25184 = state_25161__$1;
(statearr_25164_25184[(1)] = (8));

} else {
var statearr_25165_25185 = state_25161__$1;
(statearr_25165_25185[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25162 === (1))){
var inst_25130 = cljs.core.vec.call(null,chs);
var inst_25131 = inst_25130;
var state_25161__$1 = (function (){var statearr_25166 = state_25161;
(statearr_25166[(10)] = inst_25131);

return statearr_25166;
})();
var statearr_25167_25186 = state_25161__$1;
(statearr_25167_25186[(2)] = null);

(statearr_25167_25186[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25162 === (4))){
var inst_25131 = (state_25161[(10)]);
var state_25161__$1 = state_25161;
return cljs.core.async.ioc_alts_BANG_.call(null,state_25161__$1,(7),inst_25131);
} else {
if((state_val_25162 === (6))){
var inst_25157 = (state_25161[(2)]);
var state_25161__$1 = state_25161;
var statearr_25168_25187 = state_25161__$1;
(statearr_25168_25187[(2)] = inst_25157);

(statearr_25168_25187[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25162 === (3))){
var inst_25159 = (state_25161[(2)]);
var state_25161__$1 = state_25161;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25161__$1,inst_25159);
} else {
if((state_val_25162 === (2))){
var inst_25131 = (state_25161[(10)]);
var inst_25133 = cljs.core.count.call(null,inst_25131);
var inst_25134 = (inst_25133 > (0));
var state_25161__$1 = state_25161;
if(cljs.core.truth_(inst_25134)){
var statearr_25170_25188 = state_25161__$1;
(statearr_25170_25188[(1)] = (4));

} else {
var statearr_25171_25189 = state_25161__$1;
(statearr_25171_25189[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25162 === (11))){
var inst_25131 = (state_25161[(10)]);
var inst_25150 = (state_25161[(2)]);
var tmp25169 = inst_25131;
var inst_25131__$1 = tmp25169;
var state_25161__$1 = (function (){var statearr_25172 = state_25161;
(statearr_25172[(10)] = inst_25131__$1);

(statearr_25172[(11)] = inst_25150);

return statearr_25172;
})();
var statearr_25173_25190 = state_25161__$1;
(statearr_25173_25190[(2)] = null);

(statearr_25173_25190[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25162 === (9))){
var inst_25141 = (state_25161[(8)]);
var state_25161__$1 = state_25161;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25161__$1,(11),out,inst_25141);
} else {
if((state_val_25162 === (5))){
var inst_25155 = cljs.core.async.close_BANG_.call(null,out);
var state_25161__$1 = state_25161;
var statearr_25174_25191 = state_25161__$1;
(statearr_25174_25191[(2)] = inst_25155);

(statearr_25174_25191[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25162 === (10))){
var inst_25153 = (state_25161[(2)]);
var state_25161__$1 = state_25161;
var statearr_25175_25192 = state_25161__$1;
(statearr_25175_25192[(2)] = inst_25153);

(statearr_25175_25192[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25162 === (8))){
var inst_25131 = (state_25161[(10)]);
var inst_25140 = (state_25161[(7)]);
var inst_25141 = (state_25161[(8)]);
var inst_25142 = (state_25161[(9)]);
var inst_25145 = (function (){var cs = inst_25131;
var vec__25136 = inst_25140;
var v = inst_25141;
var c = inst_25142;
return ((function (cs,vec__25136,v,c,inst_25131,inst_25140,inst_25141,inst_25142,state_val_25162,c__23769__auto___25183,out){
return (function (p1__25127_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__25127_SHARP_);
});
;})(cs,vec__25136,v,c,inst_25131,inst_25140,inst_25141,inst_25142,state_val_25162,c__23769__auto___25183,out))
})();
var inst_25146 = cljs.core.filterv.call(null,inst_25145,inst_25131);
var inst_25131__$1 = inst_25146;
var state_25161__$1 = (function (){var statearr_25176 = state_25161;
(statearr_25176[(10)] = inst_25131__$1);

return statearr_25176;
})();
var statearr_25177_25193 = state_25161__$1;
(statearr_25177_25193[(2)] = null);

(statearr_25177_25193[(1)] = (2));


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
});})(c__23769__auto___25183,out))
;
return ((function (switch__23678__auto__,c__23769__auto___25183,out){
return (function() {
var cljs$core$async$state_machine__23679__auto__ = null;
var cljs$core$async$state_machine__23679__auto____0 = (function (){
var statearr_25178 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25178[(0)] = cljs$core$async$state_machine__23679__auto__);

(statearr_25178[(1)] = (1));

return statearr_25178;
});
var cljs$core$async$state_machine__23679__auto____1 = (function (state_25161){
while(true){
var ret_value__23680__auto__ = (function (){try{while(true){
var result__23681__auto__ = switch__23678__auto__.call(null,state_25161);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23681__auto__;
}
break;
}
}catch (e25179){if((e25179 instanceof Object)){
var ex__23682__auto__ = e25179;
var statearr_25180_25194 = state_25161;
(statearr_25180_25194[(5)] = ex__23682__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25161);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25179;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25195 = state_25161;
state_25161 = G__25195;
continue;
} else {
return ret_value__23680__auto__;
}
break;
}
});
cljs$core$async$state_machine__23679__auto__ = function(state_25161){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23679__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23679__auto____1.call(this,state_25161);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23679__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23679__auto____0;
cljs$core$async$state_machine__23679__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23679__auto____1;
return cljs$core$async$state_machine__23679__auto__;
})()
;})(switch__23678__auto__,c__23769__auto___25183,out))
})();
var state__23771__auto__ = (function (){var statearr_25181 = f__23770__auto__.call(null);
(statearr_25181[(6)] = c__23769__auto___25183);

return statearr_25181;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23771__auto__);
});})(c__23769__auto___25183,out))
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
var G__25197 = arguments.length;
switch (G__25197) {
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
var c__23769__auto___25242 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23769__auto___25242,out){
return (function (){
var f__23770__auto__ = (function (){var switch__23678__auto__ = ((function (c__23769__auto___25242,out){
return (function (state_25221){
var state_val_25222 = (state_25221[(1)]);
if((state_val_25222 === (7))){
var inst_25203 = (state_25221[(7)]);
var inst_25203__$1 = (state_25221[(2)]);
var inst_25204 = (inst_25203__$1 == null);
var inst_25205 = cljs.core.not.call(null,inst_25204);
var state_25221__$1 = (function (){var statearr_25223 = state_25221;
(statearr_25223[(7)] = inst_25203__$1);

return statearr_25223;
})();
if(inst_25205){
var statearr_25224_25243 = state_25221__$1;
(statearr_25224_25243[(1)] = (8));

} else {
var statearr_25225_25244 = state_25221__$1;
(statearr_25225_25244[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25222 === (1))){
var inst_25198 = (0);
var state_25221__$1 = (function (){var statearr_25226 = state_25221;
(statearr_25226[(8)] = inst_25198);

return statearr_25226;
})();
var statearr_25227_25245 = state_25221__$1;
(statearr_25227_25245[(2)] = null);

(statearr_25227_25245[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25222 === (4))){
var state_25221__$1 = state_25221;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25221__$1,(7),ch);
} else {
if((state_val_25222 === (6))){
var inst_25216 = (state_25221[(2)]);
var state_25221__$1 = state_25221;
var statearr_25228_25246 = state_25221__$1;
(statearr_25228_25246[(2)] = inst_25216);

(statearr_25228_25246[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25222 === (3))){
var inst_25218 = (state_25221[(2)]);
var inst_25219 = cljs.core.async.close_BANG_.call(null,out);
var state_25221__$1 = (function (){var statearr_25229 = state_25221;
(statearr_25229[(9)] = inst_25218);

return statearr_25229;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25221__$1,inst_25219);
} else {
if((state_val_25222 === (2))){
var inst_25198 = (state_25221[(8)]);
var inst_25200 = (inst_25198 < n);
var state_25221__$1 = state_25221;
if(cljs.core.truth_(inst_25200)){
var statearr_25230_25247 = state_25221__$1;
(statearr_25230_25247[(1)] = (4));

} else {
var statearr_25231_25248 = state_25221__$1;
(statearr_25231_25248[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25222 === (11))){
var inst_25198 = (state_25221[(8)]);
var inst_25208 = (state_25221[(2)]);
var inst_25209 = (inst_25198 + (1));
var inst_25198__$1 = inst_25209;
var state_25221__$1 = (function (){var statearr_25232 = state_25221;
(statearr_25232[(8)] = inst_25198__$1);

(statearr_25232[(10)] = inst_25208);

return statearr_25232;
})();
var statearr_25233_25249 = state_25221__$1;
(statearr_25233_25249[(2)] = null);

(statearr_25233_25249[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25222 === (9))){
var state_25221__$1 = state_25221;
var statearr_25234_25250 = state_25221__$1;
(statearr_25234_25250[(2)] = null);

(statearr_25234_25250[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25222 === (5))){
var state_25221__$1 = state_25221;
var statearr_25235_25251 = state_25221__$1;
(statearr_25235_25251[(2)] = null);

(statearr_25235_25251[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25222 === (10))){
var inst_25213 = (state_25221[(2)]);
var state_25221__$1 = state_25221;
var statearr_25236_25252 = state_25221__$1;
(statearr_25236_25252[(2)] = inst_25213);

(statearr_25236_25252[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25222 === (8))){
var inst_25203 = (state_25221[(7)]);
var state_25221__$1 = state_25221;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25221__$1,(11),out,inst_25203);
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
});})(c__23769__auto___25242,out))
;
return ((function (switch__23678__auto__,c__23769__auto___25242,out){
return (function() {
var cljs$core$async$state_machine__23679__auto__ = null;
var cljs$core$async$state_machine__23679__auto____0 = (function (){
var statearr_25237 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25237[(0)] = cljs$core$async$state_machine__23679__auto__);

(statearr_25237[(1)] = (1));

return statearr_25237;
});
var cljs$core$async$state_machine__23679__auto____1 = (function (state_25221){
while(true){
var ret_value__23680__auto__ = (function (){try{while(true){
var result__23681__auto__ = switch__23678__auto__.call(null,state_25221);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23681__auto__;
}
break;
}
}catch (e25238){if((e25238 instanceof Object)){
var ex__23682__auto__ = e25238;
var statearr_25239_25253 = state_25221;
(statearr_25239_25253[(5)] = ex__23682__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25221);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25238;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25254 = state_25221;
state_25221 = G__25254;
continue;
} else {
return ret_value__23680__auto__;
}
break;
}
});
cljs$core$async$state_machine__23679__auto__ = function(state_25221){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23679__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23679__auto____1.call(this,state_25221);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23679__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23679__auto____0;
cljs$core$async$state_machine__23679__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23679__auto____1;
return cljs$core$async$state_machine__23679__auto__;
})()
;})(switch__23678__auto__,c__23769__auto___25242,out))
})();
var state__23771__auto__ = (function (){var statearr_25240 = f__23770__auto__.call(null);
(statearr_25240[(6)] = c__23769__auto___25242);

return statearr_25240;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23771__auto__);
});})(c__23769__auto___25242,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25256 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25256 = (function (f,ch,meta25257){
this.f = f;
this.ch = ch;
this.meta25257 = meta25257;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25256.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25258,meta25257__$1){
var self__ = this;
var _25258__$1 = this;
return (new cljs.core.async.t_cljs$core$async25256(self__.f,self__.ch,meta25257__$1));
});

cljs.core.async.t_cljs$core$async25256.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25258){
var self__ = this;
var _25258__$1 = this;
return self__.meta25257;
});

cljs.core.async.t_cljs$core$async25256.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25256.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25256.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25256.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25256.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25259 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25259 = (function (f,ch,meta25257,_,fn1,meta25260){
this.f = f;
this.ch = ch;
this.meta25257 = meta25257;
this._ = _;
this.fn1 = fn1;
this.meta25260 = meta25260;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25259.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_25261,meta25260__$1){
var self__ = this;
var _25261__$1 = this;
return (new cljs.core.async.t_cljs$core$async25259(self__.f,self__.ch,self__.meta25257,self__._,self__.fn1,meta25260__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async25259.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_25261){
var self__ = this;
var _25261__$1 = this;
return self__.meta25260;
});})(___$1))
;

cljs.core.async.t_cljs$core$async25259.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25259.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async25259.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async25259.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__25255_SHARP_){
return f1.call(null,(((p1__25255_SHARP_ == null))?null:self__.f.call(null,p1__25255_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async25259.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25257","meta25257",563548239,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async25256","cljs.core.async/t_cljs$core$async25256",1987000612,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta25260","meta25260",-1984793855,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async25259.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25259.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25259";

cljs.core.async.t_cljs$core$async25259.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async25259");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25259.
 */
cljs.core.async.__GT_t_cljs$core$async25259 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25259(f__$1,ch__$1,meta25257__$1,___$2,fn1__$1,meta25260){
return (new cljs.core.async.t_cljs$core$async25259(f__$1,ch__$1,meta25257__$1,___$2,fn1__$1,meta25260));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async25259(self__.f,self__.ch,self__.meta25257,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async25256.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25256.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async25256.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25257","meta25257",563548239,null)], null);
});

cljs.core.async.t_cljs$core$async25256.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25256.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25256";

cljs.core.async.t_cljs$core$async25256.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async25256");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25256.
 */
cljs.core.async.__GT_t_cljs$core$async25256 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25256(f__$1,ch__$1,meta25257){
return (new cljs.core.async.t_cljs$core$async25256(f__$1,ch__$1,meta25257));
});

}

return (new cljs.core.async.t_cljs$core$async25256(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25262 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25262 = (function (f,ch,meta25263){
this.f = f;
this.ch = ch;
this.meta25263 = meta25263;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25262.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25264,meta25263__$1){
var self__ = this;
var _25264__$1 = this;
return (new cljs.core.async.t_cljs$core$async25262(self__.f,self__.ch,meta25263__$1));
});

cljs.core.async.t_cljs$core$async25262.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25264){
var self__ = this;
var _25264__$1 = this;
return self__.meta25263;
});

cljs.core.async.t_cljs$core$async25262.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25262.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25262.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25262.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async25262.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25262.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async25262.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25263","meta25263",-1333288640,null)], null);
});

cljs.core.async.t_cljs$core$async25262.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25262.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25262";

cljs.core.async.t_cljs$core$async25262.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async25262");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25262.
 */
cljs.core.async.__GT_t_cljs$core$async25262 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async25262(f__$1,ch__$1,meta25263){
return (new cljs.core.async.t_cljs$core$async25262(f__$1,ch__$1,meta25263));
});

}

return (new cljs.core.async.t_cljs$core$async25262(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25265 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25265 = (function (p,ch,meta25266){
this.p = p;
this.ch = ch;
this.meta25266 = meta25266;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25265.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25267,meta25266__$1){
var self__ = this;
var _25267__$1 = this;
return (new cljs.core.async.t_cljs$core$async25265(self__.p,self__.ch,meta25266__$1));
});

cljs.core.async.t_cljs$core$async25265.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25267){
var self__ = this;
var _25267__$1 = this;
return self__.meta25266;
});

cljs.core.async.t_cljs$core$async25265.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25265.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25265.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25265.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25265.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async25265.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25265.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async25265.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25266","meta25266",838178914,null)], null);
});

cljs.core.async.t_cljs$core$async25265.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25265.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25265";

cljs.core.async.t_cljs$core$async25265.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async25265");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25265.
 */
cljs.core.async.__GT_t_cljs$core$async25265 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async25265(p__$1,ch__$1,meta25266){
return (new cljs.core.async.t_cljs$core$async25265(p__$1,ch__$1,meta25266));
});

}

return (new cljs.core.async.t_cljs$core$async25265(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__25269 = arguments.length;
switch (G__25269) {
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
var c__23769__auto___25309 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23769__auto___25309,out){
return (function (){
var f__23770__auto__ = (function (){var switch__23678__auto__ = ((function (c__23769__auto___25309,out){
return (function (state_25290){
var state_val_25291 = (state_25290[(1)]);
if((state_val_25291 === (7))){
var inst_25286 = (state_25290[(2)]);
var state_25290__$1 = state_25290;
var statearr_25292_25310 = state_25290__$1;
(statearr_25292_25310[(2)] = inst_25286);

(statearr_25292_25310[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25291 === (1))){
var state_25290__$1 = state_25290;
var statearr_25293_25311 = state_25290__$1;
(statearr_25293_25311[(2)] = null);

(statearr_25293_25311[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25291 === (4))){
var inst_25272 = (state_25290[(7)]);
var inst_25272__$1 = (state_25290[(2)]);
var inst_25273 = (inst_25272__$1 == null);
var state_25290__$1 = (function (){var statearr_25294 = state_25290;
(statearr_25294[(7)] = inst_25272__$1);

return statearr_25294;
})();
if(cljs.core.truth_(inst_25273)){
var statearr_25295_25312 = state_25290__$1;
(statearr_25295_25312[(1)] = (5));

} else {
var statearr_25296_25313 = state_25290__$1;
(statearr_25296_25313[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25291 === (6))){
var inst_25272 = (state_25290[(7)]);
var inst_25277 = p.call(null,inst_25272);
var state_25290__$1 = state_25290;
if(cljs.core.truth_(inst_25277)){
var statearr_25297_25314 = state_25290__$1;
(statearr_25297_25314[(1)] = (8));

} else {
var statearr_25298_25315 = state_25290__$1;
(statearr_25298_25315[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25291 === (3))){
var inst_25288 = (state_25290[(2)]);
var state_25290__$1 = state_25290;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25290__$1,inst_25288);
} else {
if((state_val_25291 === (2))){
var state_25290__$1 = state_25290;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25290__$1,(4),ch);
} else {
if((state_val_25291 === (11))){
var inst_25280 = (state_25290[(2)]);
var state_25290__$1 = state_25290;
var statearr_25299_25316 = state_25290__$1;
(statearr_25299_25316[(2)] = inst_25280);

(statearr_25299_25316[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25291 === (9))){
var state_25290__$1 = state_25290;
var statearr_25300_25317 = state_25290__$1;
(statearr_25300_25317[(2)] = null);

(statearr_25300_25317[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25291 === (5))){
var inst_25275 = cljs.core.async.close_BANG_.call(null,out);
var state_25290__$1 = state_25290;
var statearr_25301_25318 = state_25290__$1;
(statearr_25301_25318[(2)] = inst_25275);

(statearr_25301_25318[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25291 === (10))){
var inst_25283 = (state_25290[(2)]);
var state_25290__$1 = (function (){var statearr_25302 = state_25290;
(statearr_25302[(8)] = inst_25283);

return statearr_25302;
})();
var statearr_25303_25319 = state_25290__$1;
(statearr_25303_25319[(2)] = null);

(statearr_25303_25319[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25291 === (8))){
var inst_25272 = (state_25290[(7)]);
var state_25290__$1 = state_25290;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25290__$1,(11),out,inst_25272);
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
});})(c__23769__auto___25309,out))
;
return ((function (switch__23678__auto__,c__23769__auto___25309,out){
return (function() {
var cljs$core$async$state_machine__23679__auto__ = null;
var cljs$core$async$state_machine__23679__auto____0 = (function (){
var statearr_25304 = [null,null,null,null,null,null,null,null,null];
(statearr_25304[(0)] = cljs$core$async$state_machine__23679__auto__);

(statearr_25304[(1)] = (1));

return statearr_25304;
});
var cljs$core$async$state_machine__23679__auto____1 = (function (state_25290){
while(true){
var ret_value__23680__auto__ = (function (){try{while(true){
var result__23681__auto__ = switch__23678__auto__.call(null,state_25290);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23681__auto__;
}
break;
}
}catch (e25305){if((e25305 instanceof Object)){
var ex__23682__auto__ = e25305;
var statearr_25306_25320 = state_25290;
(statearr_25306_25320[(5)] = ex__23682__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25290);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25305;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25321 = state_25290;
state_25290 = G__25321;
continue;
} else {
return ret_value__23680__auto__;
}
break;
}
});
cljs$core$async$state_machine__23679__auto__ = function(state_25290){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23679__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23679__auto____1.call(this,state_25290);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23679__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23679__auto____0;
cljs$core$async$state_machine__23679__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23679__auto____1;
return cljs$core$async$state_machine__23679__auto__;
})()
;})(switch__23678__auto__,c__23769__auto___25309,out))
})();
var state__23771__auto__ = (function (){var statearr_25307 = f__23770__auto__.call(null);
(statearr_25307[(6)] = c__23769__auto___25309);

return statearr_25307;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23771__auto__);
});})(c__23769__auto___25309,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__25323 = arguments.length;
switch (G__25323) {
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
var c__23769__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23769__auto__){
return (function (){
var f__23770__auto__ = (function (){var switch__23678__auto__ = ((function (c__23769__auto__){
return (function (state_25386){
var state_val_25387 = (state_25386[(1)]);
if((state_val_25387 === (7))){
var inst_25382 = (state_25386[(2)]);
var state_25386__$1 = state_25386;
var statearr_25388_25426 = state_25386__$1;
(statearr_25388_25426[(2)] = inst_25382);

(statearr_25388_25426[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25387 === (20))){
var inst_25352 = (state_25386[(7)]);
var inst_25363 = (state_25386[(2)]);
var inst_25364 = cljs.core.next.call(null,inst_25352);
var inst_25338 = inst_25364;
var inst_25339 = null;
var inst_25340 = (0);
var inst_25341 = (0);
var state_25386__$1 = (function (){var statearr_25389 = state_25386;
(statearr_25389[(8)] = inst_25339);

(statearr_25389[(9)] = inst_25338);

(statearr_25389[(10)] = inst_25341);

(statearr_25389[(11)] = inst_25363);

(statearr_25389[(12)] = inst_25340);

return statearr_25389;
})();
var statearr_25390_25427 = state_25386__$1;
(statearr_25390_25427[(2)] = null);

(statearr_25390_25427[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25387 === (1))){
var state_25386__$1 = state_25386;
var statearr_25391_25428 = state_25386__$1;
(statearr_25391_25428[(2)] = null);

(statearr_25391_25428[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25387 === (4))){
var inst_25327 = (state_25386[(13)]);
var inst_25327__$1 = (state_25386[(2)]);
var inst_25328 = (inst_25327__$1 == null);
var state_25386__$1 = (function (){var statearr_25392 = state_25386;
(statearr_25392[(13)] = inst_25327__$1);

return statearr_25392;
})();
if(cljs.core.truth_(inst_25328)){
var statearr_25393_25429 = state_25386__$1;
(statearr_25393_25429[(1)] = (5));

} else {
var statearr_25394_25430 = state_25386__$1;
(statearr_25394_25430[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25387 === (15))){
var state_25386__$1 = state_25386;
var statearr_25398_25431 = state_25386__$1;
(statearr_25398_25431[(2)] = null);

(statearr_25398_25431[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25387 === (21))){
var state_25386__$1 = state_25386;
var statearr_25399_25432 = state_25386__$1;
(statearr_25399_25432[(2)] = null);

(statearr_25399_25432[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25387 === (13))){
var inst_25339 = (state_25386[(8)]);
var inst_25338 = (state_25386[(9)]);
var inst_25341 = (state_25386[(10)]);
var inst_25340 = (state_25386[(12)]);
var inst_25348 = (state_25386[(2)]);
var inst_25349 = (inst_25341 + (1));
var tmp25395 = inst_25339;
var tmp25396 = inst_25338;
var tmp25397 = inst_25340;
var inst_25338__$1 = tmp25396;
var inst_25339__$1 = tmp25395;
var inst_25340__$1 = tmp25397;
var inst_25341__$1 = inst_25349;
var state_25386__$1 = (function (){var statearr_25400 = state_25386;
(statearr_25400[(8)] = inst_25339__$1);

(statearr_25400[(9)] = inst_25338__$1);

(statearr_25400[(10)] = inst_25341__$1);

(statearr_25400[(14)] = inst_25348);

(statearr_25400[(12)] = inst_25340__$1);

return statearr_25400;
})();
var statearr_25401_25433 = state_25386__$1;
(statearr_25401_25433[(2)] = null);

(statearr_25401_25433[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25387 === (22))){
var state_25386__$1 = state_25386;
var statearr_25402_25434 = state_25386__$1;
(statearr_25402_25434[(2)] = null);

(statearr_25402_25434[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25387 === (6))){
var inst_25327 = (state_25386[(13)]);
var inst_25336 = f.call(null,inst_25327);
var inst_25337 = cljs.core.seq.call(null,inst_25336);
var inst_25338 = inst_25337;
var inst_25339 = null;
var inst_25340 = (0);
var inst_25341 = (0);
var state_25386__$1 = (function (){var statearr_25403 = state_25386;
(statearr_25403[(8)] = inst_25339);

(statearr_25403[(9)] = inst_25338);

(statearr_25403[(10)] = inst_25341);

(statearr_25403[(12)] = inst_25340);

return statearr_25403;
})();
var statearr_25404_25435 = state_25386__$1;
(statearr_25404_25435[(2)] = null);

(statearr_25404_25435[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25387 === (17))){
var inst_25352 = (state_25386[(7)]);
var inst_25356 = cljs.core.chunk_first.call(null,inst_25352);
var inst_25357 = cljs.core.chunk_rest.call(null,inst_25352);
var inst_25358 = cljs.core.count.call(null,inst_25356);
var inst_25338 = inst_25357;
var inst_25339 = inst_25356;
var inst_25340 = inst_25358;
var inst_25341 = (0);
var state_25386__$1 = (function (){var statearr_25405 = state_25386;
(statearr_25405[(8)] = inst_25339);

(statearr_25405[(9)] = inst_25338);

(statearr_25405[(10)] = inst_25341);

(statearr_25405[(12)] = inst_25340);

return statearr_25405;
})();
var statearr_25406_25436 = state_25386__$1;
(statearr_25406_25436[(2)] = null);

(statearr_25406_25436[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25387 === (3))){
var inst_25384 = (state_25386[(2)]);
var state_25386__$1 = state_25386;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25386__$1,inst_25384);
} else {
if((state_val_25387 === (12))){
var inst_25372 = (state_25386[(2)]);
var state_25386__$1 = state_25386;
var statearr_25407_25437 = state_25386__$1;
(statearr_25407_25437[(2)] = inst_25372);

(statearr_25407_25437[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25387 === (2))){
var state_25386__$1 = state_25386;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25386__$1,(4),in$);
} else {
if((state_val_25387 === (23))){
var inst_25380 = (state_25386[(2)]);
var state_25386__$1 = state_25386;
var statearr_25408_25438 = state_25386__$1;
(statearr_25408_25438[(2)] = inst_25380);

(statearr_25408_25438[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25387 === (19))){
var inst_25367 = (state_25386[(2)]);
var state_25386__$1 = state_25386;
var statearr_25409_25439 = state_25386__$1;
(statearr_25409_25439[(2)] = inst_25367);

(statearr_25409_25439[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25387 === (11))){
var inst_25338 = (state_25386[(9)]);
var inst_25352 = (state_25386[(7)]);
var inst_25352__$1 = cljs.core.seq.call(null,inst_25338);
var state_25386__$1 = (function (){var statearr_25410 = state_25386;
(statearr_25410[(7)] = inst_25352__$1);

return statearr_25410;
})();
if(inst_25352__$1){
var statearr_25411_25440 = state_25386__$1;
(statearr_25411_25440[(1)] = (14));

} else {
var statearr_25412_25441 = state_25386__$1;
(statearr_25412_25441[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25387 === (9))){
var inst_25374 = (state_25386[(2)]);
var inst_25375 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_25386__$1 = (function (){var statearr_25413 = state_25386;
(statearr_25413[(15)] = inst_25374);

return statearr_25413;
})();
if(cljs.core.truth_(inst_25375)){
var statearr_25414_25442 = state_25386__$1;
(statearr_25414_25442[(1)] = (21));

} else {
var statearr_25415_25443 = state_25386__$1;
(statearr_25415_25443[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25387 === (5))){
var inst_25330 = cljs.core.async.close_BANG_.call(null,out);
var state_25386__$1 = state_25386;
var statearr_25416_25444 = state_25386__$1;
(statearr_25416_25444[(2)] = inst_25330);

(statearr_25416_25444[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25387 === (14))){
var inst_25352 = (state_25386[(7)]);
var inst_25354 = cljs.core.chunked_seq_QMARK_.call(null,inst_25352);
var state_25386__$1 = state_25386;
if(inst_25354){
var statearr_25417_25445 = state_25386__$1;
(statearr_25417_25445[(1)] = (17));

} else {
var statearr_25418_25446 = state_25386__$1;
(statearr_25418_25446[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25387 === (16))){
var inst_25370 = (state_25386[(2)]);
var state_25386__$1 = state_25386;
var statearr_25419_25447 = state_25386__$1;
(statearr_25419_25447[(2)] = inst_25370);

(statearr_25419_25447[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25387 === (10))){
var inst_25339 = (state_25386[(8)]);
var inst_25341 = (state_25386[(10)]);
var inst_25346 = cljs.core._nth.call(null,inst_25339,inst_25341);
var state_25386__$1 = state_25386;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25386__$1,(13),out,inst_25346);
} else {
if((state_val_25387 === (18))){
var inst_25352 = (state_25386[(7)]);
var inst_25361 = cljs.core.first.call(null,inst_25352);
var state_25386__$1 = state_25386;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25386__$1,(20),out,inst_25361);
} else {
if((state_val_25387 === (8))){
var inst_25341 = (state_25386[(10)]);
var inst_25340 = (state_25386[(12)]);
var inst_25343 = (inst_25341 < inst_25340);
var inst_25344 = inst_25343;
var state_25386__$1 = state_25386;
if(cljs.core.truth_(inst_25344)){
var statearr_25420_25448 = state_25386__$1;
(statearr_25420_25448[(1)] = (10));

} else {
var statearr_25421_25449 = state_25386__$1;
(statearr_25421_25449[(1)] = (11));

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
});})(c__23769__auto__))
;
return ((function (switch__23678__auto__,c__23769__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__23679__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__23679__auto____0 = (function (){
var statearr_25422 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25422[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__23679__auto__);

(statearr_25422[(1)] = (1));

return statearr_25422;
});
var cljs$core$async$mapcat_STAR__$_state_machine__23679__auto____1 = (function (state_25386){
while(true){
var ret_value__23680__auto__ = (function (){try{while(true){
var result__23681__auto__ = switch__23678__auto__.call(null,state_25386);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23681__auto__;
}
break;
}
}catch (e25423){if((e25423 instanceof Object)){
var ex__23682__auto__ = e25423;
var statearr_25424_25450 = state_25386;
(statearr_25424_25450[(5)] = ex__23682__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25386);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25423;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25451 = state_25386;
state_25386 = G__25451;
continue;
} else {
return ret_value__23680__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__23679__auto__ = function(state_25386){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__23679__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__23679__auto____1.call(this,state_25386);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__23679__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__23679__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__23679__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__23679__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__23679__auto__;
})()
;})(switch__23678__auto__,c__23769__auto__))
})();
var state__23771__auto__ = (function (){var statearr_25425 = f__23770__auto__.call(null);
(statearr_25425[(6)] = c__23769__auto__);

return statearr_25425;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23771__auto__);
});})(c__23769__auto__))
);

return c__23769__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__25453 = arguments.length;
switch (G__25453) {
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
var G__25456 = arguments.length;
switch (G__25456) {
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
var G__25459 = arguments.length;
switch (G__25459) {
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
var c__23769__auto___25506 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23769__auto___25506,out){
return (function (){
var f__23770__auto__ = (function (){var switch__23678__auto__ = ((function (c__23769__auto___25506,out){
return (function (state_25483){
var state_val_25484 = (state_25483[(1)]);
if((state_val_25484 === (7))){
var inst_25478 = (state_25483[(2)]);
var state_25483__$1 = state_25483;
var statearr_25485_25507 = state_25483__$1;
(statearr_25485_25507[(2)] = inst_25478);

(statearr_25485_25507[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25484 === (1))){
var inst_25460 = null;
var state_25483__$1 = (function (){var statearr_25486 = state_25483;
(statearr_25486[(7)] = inst_25460);

return statearr_25486;
})();
var statearr_25487_25508 = state_25483__$1;
(statearr_25487_25508[(2)] = null);

(statearr_25487_25508[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25484 === (4))){
var inst_25463 = (state_25483[(8)]);
var inst_25463__$1 = (state_25483[(2)]);
var inst_25464 = (inst_25463__$1 == null);
var inst_25465 = cljs.core.not.call(null,inst_25464);
var state_25483__$1 = (function (){var statearr_25488 = state_25483;
(statearr_25488[(8)] = inst_25463__$1);

return statearr_25488;
})();
if(inst_25465){
var statearr_25489_25509 = state_25483__$1;
(statearr_25489_25509[(1)] = (5));

} else {
var statearr_25490_25510 = state_25483__$1;
(statearr_25490_25510[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25484 === (6))){
var state_25483__$1 = state_25483;
var statearr_25491_25511 = state_25483__$1;
(statearr_25491_25511[(2)] = null);

(statearr_25491_25511[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25484 === (3))){
var inst_25480 = (state_25483[(2)]);
var inst_25481 = cljs.core.async.close_BANG_.call(null,out);
var state_25483__$1 = (function (){var statearr_25492 = state_25483;
(statearr_25492[(9)] = inst_25480);

return statearr_25492;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25483__$1,inst_25481);
} else {
if((state_val_25484 === (2))){
var state_25483__$1 = state_25483;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25483__$1,(4),ch);
} else {
if((state_val_25484 === (11))){
var inst_25463 = (state_25483[(8)]);
var inst_25472 = (state_25483[(2)]);
var inst_25460 = inst_25463;
var state_25483__$1 = (function (){var statearr_25493 = state_25483;
(statearr_25493[(7)] = inst_25460);

(statearr_25493[(10)] = inst_25472);

return statearr_25493;
})();
var statearr_25494_25512 = state_25483__$1;
(statearr_25494_25512[(2)] = null);

(statearr_25494_25512[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25484 === (9))){
var inst_25463 = (state_25483[(8)]);
var state_25483__$1 = state_25483;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25483__$1,(11),out,inst_25463);
} else {
if((state_val_25484 === (5))){
var inst_25463 = (state_25483[(8)]);
var inst_25460 = (state_25483[(7)]);
var inst_25467 = cljs.core._EQ_.call(null,inst_25463,inst_25460);
var state_25483__$1 = state_25483;
if(inst_25467){
var statearr_25496_25513 = state_25483__$1;
(statearr_25496_25513[(1)] = (8));

} else {
var statearr_25497_25514 = state_25483__$1;
(statearr_25497_25514[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25484 === (10))){
var inst_25475 = (state_25483[(2)]);
var state_25483__$1 = state_25483;
var statearr_25498_25515 = state_25483__$1;
(statearr_25498_25515[(2)] = inst_25475);

(statearr_25498_25515[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25484 === (8))){
var inst_25460 = (state_25483[(7)]);
var tmp25495 = inst_25460;
var inst_25460__$1 = tmp25495;
var state_25483__$1 = (function (){var statearr_25499 = state_25483;
(statearr_25499[(7)] = inst_25460__$1);

return statearr_25499;
})();
var statearr_25500_25516 = state_25483__$1;
(statearr_25500_25516[(2)] = null);

(statearr_25500_25516[(1)] = (2));


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
});})(c__23769__auto___25506,out))
;
return ((function (switch__23678__auto__,c__23769__auto___25506,out){
return (function() {
var cljs$core$async$state_machine__23679__auto__ = null;
var cljs$core$async$state_machine__23679__auto____0 = (function (){
var statearr_25501 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25501[(0)] = cljs$core$async$state_machine__23679__auto__);

(statearr_25501[(1)] = (1));

return statearr_25501;
});
var cljs$core$async$state_machine__23679__auto____1 = (function (state_25483){
while(true){
var ret_value__23680__auto__ = (function (){try{while(true){
var result__23681__auto__ = switch__23678__auto__.call(null,state_25483);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23681__auto__;
}
break;
}
}catch (e25502){if((e25502 instanceof Object)){
var ex__23682__auto__ = e25502;
var statearr_25503_25517 = state_25483;
(statearr_25503_25517[(5)] = ex__23682__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25483);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25502;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25518 = state_25483;
state_25483 = G__25518;
continue;
} else {
return ret_value__23680__auto__;
}
break;
}
});
cljs$core$async$state_machine__23679__auto__ = function(state_25483){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23679__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23679__auto____1.call(this,state_25483);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23679__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23679__auto____0;
cljs$core$async$state_machine__23679__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23679__auto____1;
return cljs$core$async$state_machine__23679__auto__;
})()
;})(switch__23678__auto__,c__23769__auto___25506,out))
})();
var state__23771__auto__ = (function (){var statearr_25504 = f__23770__auto__.call(null);
(statearr_25504[(6)] = c__23769__auto___25506);

return statearr_25504;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23771__auto__);
});})(c__23769__auto___25506,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__25520 = arguments.length;
switch (G__25520) {
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
var c__23769__auto___25586 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23769__auto___25586,out){
return (function (){
var f__23770__auto__ = (function (){var switch__23678__auto__ = ((function (c__23769__auto___25586,out){
return (function (state_25558){
var state_val_25559 = (state_25558[(1)]);
if((state_val_25559 === (7))){
var inst_25554 = (state_25558[(2)]);
var state_25558__$1 = state_25558;
var statearr_25560_25587 = state_25558__$1;
(statearr_25560_25587[(2)] = inst_25554);

(statearr_25560_25587[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25559 === (1))){
var inst_25521 = (new Array(n));
var inst_25522 = inst_25521;
var inst_25523 = (0);
var state_25558__$1 = (function (){var statearr_25561 = state_25558;
(statearr_25561[(7)] = inst_25523);

(statearr_25561[(8)] = inst_25522);

return statearr_25561;
})();
var statearr_25562_25588 = state_25558__$1;
(statearr_25562_25588[(2)] = null);

(statearr_25562_25588[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25559 === (4))){
var inst_25526 = (state_25558[(9)]);
var inst_25526__$1 = (state_25558[(2)]);
var inst_25527 = (inst_25526__$1 == null);
var inst_25528 = cljs.core.not.call(null,inst_25527);
var state_25558__$1 = (function (){var statearr_25563 = state_25558;
(statearr_25563[(9)] = inst_25526__$1);

return statearr_25563;
})();
if(inst_25528){
var statearr_25564_25589 = state_25558__$1;
(statearr_25564_25589[(1)] = (5));

} else {
var statearr_25565_25590 = state_25558__$1;
(statearr_25565_25590[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25559 === (15))){
var inst_25548 = (state_25558[(2)]);
var state_25558__$1 = state_25558;
var statearr_25566_25591 = state_25558__$1;
(statearr_25566_25591[(2)] = inst_25548);

(statearr_25566_25591[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25559 === (13))){
var state_25558__$1 = state_25558;
var statearr_25567_25592 = state_25558__$1;
(statearr_25567_25592[(2)] = null);

(statearr_25567_25592[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25559 === (6))){
var inst_25523 = (state_25558[(7)]);
var inst_25544 = (inst_25523 > (0));
var state_25558__$1 = state_25558;
if(cljs.core.truth_(inst_25544)){
var statearr_25568_25593 = state_25558__$1;
(statearr_25568_25593[(1)] = (12));

} else {
var statearr_25569_25594 = state_25558__$1;
(statearr_25569_25594[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25559 === (3))){
var inst_25556 = (state_25558[(2)]);
var state_25558__$1 = state_25558;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25558__$1,inst_25556);
} else {
if((state_val_25559 === (12))){
var inst_25522 = (state_25558[(8)]);
var inst_25546 = cljs.core.vec.call(null,inst_25522);
var state_25558__$1 = state_25558;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25558__$1,(15),out,inst_25546);
} else {
if((state_val_25559 === (2))){
var state_25558__$1 = state_25558;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25558__$1,(4),ch);
} else {
if((state_val_25559 === (11))){
var inst_25538 = (state_25558[(2)]);
var inst_25539 = (new Array(n));
var inst_25522 = inst_25539;
var inst_25523 = (0);
var state_25558__$1 = (function (){var statearr_25570 = state_25558;
(statearr_25570[(10)] = inst_25538);

(statearr_25570[(7)] = inst_25523);

(statearr_25570[(8)] = inst_25522);

return statearr_25570;
})();
var statearr_25571_25595 = state_25558__$1;
(statearr_25571_25595[(2)] = null);

(statearr_25571_25595[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25559 === (9))){
var inst_25522 = (state_25558[(8)]);
var inst_25536 = cljs.core.vec.call(null,inst_25522);
var state_25558__$1 = state_25558;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25558__$1,(11),out,inst_25536);
} else {
if((state_val_25559 === (5))){
var inst_25531 = (state_25558[(11)]);
var inst_25523 = (state_25558[(7)]);
var inst_25526 = (state_25558[(9)]);
var inst_25522 = (state_25558[(8)]);
var inst_25530 = (inst_25522[inst_25523] = inst_25526);
var inst_25531__$1 = (inst_25523 + (1));
var inst_25532 = (inst_25531__$1 < n);
var state_25558__$1 = (function (){var statearr_25572 = state_25558;
(statearr_25572[(12)] = inst_25530);

(statearr_25572[(11)] = inst_25531__$1);

return statearr_25572;
})();
if(cljs.core.truth_(inst_25532)){
var statearr_25573_25596 = state_25558__$1;
(statearr_25573_25596[(1)] = (8));

} else {
var statearr_25574_25597 = state_25558__$1;
(statearr_25574_25597[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25559 === (14))){
var inst_25551 = (state_25558[(2)]);
var inst_25552 = cljs.core.async.close_BANG_.call(null,out);
var state_25558__$1 = (function (){var statearr_25576 = state_25558;
(statearr_25576[(13)] = inst_25551);

return statearr_25576;
})();
var statearr_25577_25598 = state_25558__$1;
(statearr_25577_25598[(2)] = inst_25552);

(statearr_25577_25598[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25559 === (10))){
var inst_25542 = (state_25558[(2)]);
var state_25558__$1 = state_25558;
var statearr_25578_25599 = state_25558__$1;
(statearr_25578_25599[(2)] = inst_25542);

(statearr_25578_25599[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25559 === (8))){
var inst_25531 = (state_25558[(11)]);
var inst_25522 = (state_25558[(8)]);
var tmp25575 = inst_25522;
var inst_25522__$1 = tmp25575;
var inst_25523 = inst_25531;
var state_25558__$1 = (function (){var statearr_25579 = state_25558;
(statearr_25579[(7)] = inst_25523);

(statearr_25579[(8)] = inst_25522__$1);

return statearr_25579;
})();
var statearr_25580_25600 = state_25558__$1;
(statearr_25580_25600[(2)] = null);

(statearr_25580_25600[(1)] = (2));


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
});})(c__23769__auto___25586,out))
;
return ((function (switch__23678__auto__,c__23769__auto___25586,out){
return (function() {
var cljs$core$async$state_machine__23679__auto__ = null;
var cljs$core$async$state_machine__23679__auto____0 = (function (){
var statearr_25581 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25581[(0)] = cljs$core$async$state_machine__23679__auto__);

(statearr_25581[(1)] = (1));

return statearr_25581;
});
var cljs$core$async$state_machine__23679__auto____1 = (function (state_25558){
while(true){
var ret_value__23680__auto__ = (function (){try{while(true){
var result__23681__auto__ = switch__23678__auto__.call(null,state_25558);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23681__auto__;
}
break;
}
}catch (e25582){if((e25582 instanceof Object)){
var ex__23682__auto__ = e25582;
var statearr_25583_25601 = state_25558;
(statearr_25583_25601[(5)] = ex__23682__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25558);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25582;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25602 = state_25558;
state_25558 = G__25602;
continue;
} else {
return ret_value__23680__auto__;
}
break;
}
});
cljs$core$async$state_machine__23679__auto__ = function(state_25558){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23679__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23679__auto____1.call(this,state_25558);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23679__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23679__auto____0;
cljs$core$async$state_machine__23679__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23679__auto____1;
return cljs$core$async$state_machine__23679__auto__;
})()
;})(switch__23678__auto__,c__23769__auto___25586,out))
})();
var state__23771__auto__ = (function (){var statearr_25584 = f__23770__auto__.call(null);
(statearr_25584[(6)] = c__23769__auto___25586);

return statearr_25584;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23771__auto__);
});})(c__23769__auto___25586,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__25604 = arguments.length;
switch (G__25604) {
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
var c__23769__auto___25674 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23769__auto___25674,out){
return (function (){
var f__23770__auto__ = (function (){var switch__23678__auto__ = ((function (c__23769__auto___25674,out){
return (function (state_25646){
var state_val_25647 = (state_25646[(1)]);
if((state_val_25647 === (7))){
var inst_25642 = (state_25646[(2)]);
var state_25646__$1 = state_25646;
var statearr_25648_25675 = state_25646__$1;
(statearr_25648_25675[(2)] = inst_25642);

(statearr_25648_25675[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25647 === (1))){
var inst_25605 = [];
var inst_25606 = inst_25605;
var inst_25607 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_25646__$1 = (function (){var statearr_25649 = state_25646;
(statearr_25649[(7)] = inst_25607);

(statearr_25649[(8)] = inst_25606);

return statearr_25649;
})();
var statearr_25650_25676 = state_25646__$1;
(statearr_25650_25676[(2)] = null);

(statearr_25650_25676[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25647 === (4))){
var inst_25610 = (state_25646[(9)]);
var inst_25610__$1 = (state_25646[(2)]);
var inst_25611 = (inst_25610__$1 == null);
var inst_25612 = cljs.core.not.call(null,inst_25611);
var state_25646__$1 = (function (){var statearr_25651 = state_25646;
(statearr_25651[(9)] = inst_25610__$1);

return statearr_25651;
})();
if(inst_25612){
var statearr_25652_25677 = state_25646__$1;
(statearr_25652_25677[(1)] = (5));

} else {
var statearr_25653_25678 = state_25646__$1;
(statearr_25653_25678[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25647 === (15))){
var inst_25636 = (state_25646[(2)]);
var state_25646__$1 = state_25646;
var statearr_25654_25679 = state_25646__$1;
(statearr_25654_25679[(2)] = inst_25636);

(statearr_25654_25679[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25647 === (13))){
var state_25646__$1 = state_25646;
var statearr_25655_25680 = state_25646__$1;
(statearr_25655_25680[(2)] = null);

(statearr_25655_25680[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25647 === (6))){
var inst_25606 = (state_25646[(8)]);
var inst_25631 = inst_25606.length;
var inst_25632 = (inst_25631 > (0));
var state_25646__$1 = state_25646;
if(cljs.core.truth_(inst_25632)){
var statearr_25656_25681 = state_25646__$1;
(statearr_25656_25681[(1)] = (12));

} else {
var statearr_25657_25682 = state_25646__$1;
(statearr_25657_25682[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25647 === (3))){
var inst_25644 = (state_25646[(2)]);
var state_25646__$1 = state_25646;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25646__$1,inst_25644);
} else {
if((state_val_25647 === (12))){
var inst_25606 = (state_25646[(8)]);
var inst_25634 = cljs.core.vec.call(null,inst_25606);
var state_25646__$1 = state_25646;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25646__$1,(15),out,inst_25634);
} else {
if((state_val_25647 === (2))){
var state_25646__$1 = state_25646;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25646__$1,(4),ch);
} else {
if((state_val_25647 === (11))){
var inst_25610 = (state_25646[(9)]);
var inst_25614 = (state_25646[(10)]);
var inst_25624 = (state_25646[(2)]);
var inst_25625 = [];
var inst_25626 = inst_25625.push(inst_25610);
var inst_25606 = inst_25625;
var inst_25607 = inst_25614;
var state_25646__$1 = (function (){var statearr_25658 = state_25646;
(statearr_25658[(11)] = inst_25624);

(statearr_25658[(12)] = inst_25626);

(statearr_25658[(7)] = inst_25607);

(statearr_25658[(8)] = inst_25606);

return statearr_25658;
})();
var statearr_25659_25683 = state_25646__$1;
(statearr_25659_25683[(2)] = null);

(statearr_25659_25683[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25647 === (9))){
var inst_25606 = (state_25646[(8)]);
var inst_25622 = cljs.core.vec.call(null,inst_25606);
var state_25646__$1 = state_25646;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25646__$1,(11),out,inst_25622);
} else {
if((state_val_25647 === (5))){
var inst_25607 = (state_25646[(7)]);
var inst_25610 = (state_25646[(9)]);
var inst_25614 = (state_25646[(10)]);
var inst_25614__$1 = f.call(null,inst_25610);
var inst_25615 = cljs.core._EQ_.call(null,inst_25614__$1,inst_25607);
var inst_25616 = cljs.core.keyword_identical_QMARK_.call(null,inst_25607,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_25617 = ((inst_25615) || (inst_25616));
var state_25646__$1 = (function (){var statearr_25660 = state_25646;
(statearr_25660[(10)] = inst_25614__$1);

return statearr_25660;
})();
if(cljs.core.truth_(inst_25617)){
var statearr_25661_25684 = state_25646__$1;
(statearr_25661_25684[(1)] = (8));

} else {
var statearr_25662_25685 = state_25646__$1;
(statearr_25662_25685[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25647 === (14))){
var inst_25639 = (state_25646[(2)]);
var inst_25640 = cljs.core.async.close_BANG_.call(null,out);
var state_25646__$1 = (function (){var statearr_25664 = state_25646;
(statearr_25664[(13)] = inst_25639);

return statearr_25664;
})();
var statearr_25665_25686 = state_25646__$1;
(statearr_25665_25686[(2)] = inst_25640);

(statearr_25665_25686[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25647 === (10))){
var inst_25629 = (state_25646[(2)]);
var state_25646__$1 = state_25646;
var statearr_25666_25687 = state_25646__$1;
(statearr_25666_25687[(2)] = inst_25629);

(statearr_25666_25687[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25647 === (8))){
var inst_25606 = (state_25646[(8)]);
var inst_25610 = (state_25646[(9)]);
var inst_25614 = (state_25646[(10)]);
var inst_25619 = inst_25606.push(inst_25610);
var tmp25663 = inst_25606;
var inst_25606__$1 = tmp25663;
var inst_25607 = inst_25614;
var state_25646__$1 = (function (){var statearr_25667 = state_25646;
(statearr_25667[(14)] = inst_25619);

(statearr_25667[(7)] = inst_25607);

(statearr_25667[(8)] = inst_25606__$1);

return statearr_25667;
})();
var statearr_25668_25688 = state_25646__$1;
(statearr_25668_25688[(2)] = null);

(statearr_25668_25688[(1)] = (2));


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
});})(c__23769__auto___25674,out))
;
return ((function (switch__23678__auto__,c__23769__auto___25674,out){
return (function() {
var cljs$core$async$state_machine__23679__auto__ = null;
var cljs$core$async$state_machine__23679__auto____0 = (function (){
var statearr_25669 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25669[(0)] = cljs$core$async$state_machine__23679__auto__);

(statearr_25669[(1)] = (1));

return statearr_25669;
});
var cljs$core$async$state_machine__23679__auto____1 = (function (state_25646){
while(true){
var ret_value__23680__auto__ = (function (){try{while(true){
var result__23681__auto__ = switch__23678__auto__.call(null,state_25646);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23681__auto__;
}
break;
}
}catch (e25670){if((e25670 instanceof Object)){
var ex__23682__auto__ = e25670;
var statearr_25671_25689 = state_25646;
(statearr_25671_25689[(5)] = ex__23682__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25646);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25670;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25690 = state_25646;
state_25646 = G__25690;
continue;
} else {
return ret_value__23680__auto__;
}
break;
}
});
cljs$core$async$state_machine__23679__auto__ = function(state_25646){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23679__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23679__auto____1.call(this,state_25646);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23679__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23679__auto____0;
cljs$core$async$state_machine__23679__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23679__auto____1;
return cljs$core$async$state_machine__23679__auto__;
})()
;})(switch__23678__auto__,c__23769__auto___25674,out))
})();
var state__23771__auto__ = (function (){var statearr_25672 = f__23770__auto__.call(null);
(statearr_25672[(6)] = c__23769__auto___25674);

return statearr_25672;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23771__auto__);
});})(c__23769__auto___25674,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1538856222806
