// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('daomei.cljs.controller');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
daomei.cljs.controller.hit_ping = (function daomei$cljs$controller$hit_ping(){
var c__7888__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7888__auto__){
return (function (){
var f__7889__auto__ = (function (){var switch__7785__auto__ = ((function (c__7888__auto__){
return (function (state_10255){
var state_val_10256 = (state_10255[(1)]);
if((state_val_10256 === (1))){
var inst_10250 = cljs_http.client.get("/ping");
var state_10255__$1 = state_10255;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10255__$1,(2),inst_10250);
} else {
if((state_val_10256 === (2))){
var inst_10252 = (state_10255[(2)]);
var inst_10253 = console.log(inst_10252);
var state_10255__$1 = state_10255;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10255__$1,inst_10253);
} else {
return null;
}
}
});})(c__7888__auto__))
;
return ((function (switch__7785__auto__,c__7888__auto__){
return (function() {
var daomei$cljs$controller$hit_ping_$_state_machine__7786__auto__ = null;
var daomei$cljs$controller$hit_ping_$_state_machine__7786__auto____0 = (function (){
var statearr_10257 = [null,null,null,null,null,null,null];
(statearr_10257[(0)] = daomei$cljs$controller$hit_ping_$_state_machine__7786__auto__);

(statearr_10257[(1)] = (1));

return statearr_10257;
});
var daomei$cljs$controller$hit_ping_$_state_machine__7786__auto____1 = (function (state_10255){
while(true){
var ret_value__7787__auto__ = (function (){try{while(true){
var result__7788__auto__ = switch__7785__auto__(state_10255);
if(cljs.core.keyword_identical_QMARK_(result__7788__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7788__auto__;
}
break;
}
}catch (e10258){if((e10258 instanceof Object)){
var ex__7789__auto__ = e10258;
var statearr_10259_10261 = state_10255;
(statearr_10259_10261[(5)] = ex__7789__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_10255);

return cljs.core.cst$kw$recur;
} else {
throw e10258;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7787__auto__,cljs.core.cst$kw$recur)){
var G__10262 = state_10255;
state_10255 = G__10262;
continue;
} else {
return ret_value__7787__auto__;
}
break;
}
});
daomei$cljs$controller$hit_ping_$_state_machine__7786__auto__ = function(state_10255){
switch(arguments.length){
case 0:
return daomei$cljs$controller$hit_ping_$_state_machine__7786__auto____0.call(this);
case 1:
return daomei$cljs$controller$hit_ping_$_state_machine__7786__auto____1.call(this,state_10255);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
daomei$cljs$controller$hit_ping_$_state_machine__7786__auto__.cljs$core$IFn$_invoke$arity$0 = daomei$cljs$controller$hit_ping_$_state_machine__7786__auto____0;
daomei$cljs$controller$hit_ping_$_state_machine__7786__auto__.cljs$core$IFn$_invoke$arity$1 = daomei$cljs$controller$hit_ping_$_state_machine__7786__auto____1;
return daomei$cljs$controller$hit_ping_$_state_machine__7786__auto__;
})()
;})(switch__7785__auto__,c__7888__auto__))
})();
var state__7890__auto__ = (function (){var statearr_10260 = (f__7889__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7889__auto__.cljs$core$IFn$_invoke$arity$0() : f__7889__auto__.call(null));
(statearr_10260[(6)] = c__7888__auto__);

return statearr_10260;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7890__auto__);
});})(c__7888__auto__))
);

return c__7888__auto__;
});
daomei.cljs.controller.valid_domain_QMARK_ = (function daomei$cljs$controller$valid_domain_QMARK_(domain){
var c__7888__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7888__auto__){
return (function (){
var f__7889__auto__ = (function (){var switch__7785__auto__ = ((function (c__7888__auto__){
return (function (state_10278){
var state_val_10279 = (state_10278[(1)]);
if((state_val_10279 === (1))){
var inst_10263 = [cljs.core.cst$kw$transit_DASH_params];
var inst_10264 = [cljs.core.cst$kw$domain];
var inst_10265 = [domain];
var inst_10266 = cljs.core.PersistentHashMap.fromArrays(inst_10264,inst_10265);
var inst_10267 = [inst_10266];
var inst_10268 = cljs.core.PersistentHashMap.fromArrays(inst_10263,inst_10267);
var inst_10269 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic("/domain/valid",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_10268], 0));
var state_10278__$1 = state_10278;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10278__$1,(2),inst_10269);
} else {
if((state_val_10279 === (2))){
var inst_10271 = (state_10278[(2)]);
var inst_10272 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10273 = [cljs.core.cst$kw$body,cljs.core.cst$kw$valid_QMARK_];
var inst_10274 = (new cljs.core.PersistentVector(null,2,(5),inst_10272,inst_10273,null));
var inst_10275 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_10271,inst_10274);
var inst_10276 = console.log(inst_10275);
var state_10278__$1 = state_10278;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10278__$1,inst_10276);
} else {
return null;
}
}
});})(c__7888__auto__))
;
return ((function (switch__7785__auto__,c__7888__auto__){
return (function() {
var daomei$cljs$controller$valid_domain_QMARK__$_state_machine__7786__auto__ = null;
var daomei$cljs$controller$valid_domain_QMARK__$_state_machine__7786__auto____0 = (function (){
var statearr_10280 = [null,null,null,null,null,null,null];
(statearr_10280[(0)] = daomei$cljs$controller$valid_domain_QMARK__$_state_machine__7786__auto__);

(statearr_10280[(1)] = (1));

return statearr_10280;
});
var daomei$cljs$controller$valid_domain_QMARK__$_state_machine__7786__auto____1 = (function (state_10278){
while(true){
var ret_value__7787__auto__ = (function (){try{while(true){
var result__7788__auto__ = switch__7785__auto__(state_10278);
if(cljs.core.keyword_identical_QMARK_(result__7788__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7788__auto__;
}
break;
}
}catch (e10281){if((e10281 instanceof Object)){
var ex__7789__auto__ = e10281;
var statearr_10282_10284 = state_10278;
(statearr_10282_10284[(5)] = ex__7789__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_10278);

return cljs.core.cst$kw$recur;
} else {
throw e10281;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7787__auto__,cljs.core.cst$kw$recur)){
var G__10285 = state_10278;
state_10278 = G__10285;
continue;
} else {
return ret_value__7787__auto__;
}
break;
}
});
daomei$cljs$controller$valid_domain_QMARK__$_state_machine__7786__auto__ = function(state_10278){
switch(arguments.length){
case 0:
return daomei$cljs$controller$valid_domain_QMARK__$_state_machine__7786__auto____0.call(this);
case 1:
return daomei$cljs$controller$valid_domain_QMARK__$_state_machine__7786__auto____1.call(this,state_10278);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
daomei$cljs$controller$valid_domain_QMARK__$_state_machine__7786__auto__.cljs$core$IFn$_invoke$arity$0 = daomei$cljs$controller$valid_domain_QMARK__$_state_machine__7786__auto____0;
daomei$cljs$controller$valid_domain_QMARK__$_state_machine__7786__auto__.cljs$core$IFn$_invoke$arity$1 = daomei$cljs$controller$valid_domain_QMARK__$_state_machine__7786__auto____1;
return daomei$cljs$controller$valid_domain_QMARK__$_state_machine__7786__auto__;
})()
;})(switch__7785__auto__,c__7888__auto__))
})();
var state__7890__auto__ = (function (){var statearr_10283 = (f__7889__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7889__auto__.cljs$core$IFn$_invoke$arity$0() : f__7889__auto__.call(null));
(statearr_10283[(6)] = c__7888__auto__);

return statearr_10283;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7890__auto__);
});})(c__7888__auto__))
);

return c__7888__auto__;
});
