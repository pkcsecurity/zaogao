// Compiled by ClojureScript 1.10.339 {}
goog.provide('daomei.cljs.controller');
goog.require('cljs.core');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
daomei.cljs.controller.valid_domain_QMARK_ = (function daomei$cljs$controller$valid_domain_QMARK_(domain){
var c__2924__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2924__auto__){
return (function (){
var f__2925__auto__ = (function (){var switch__2901__auto__ = ((function (c__2924__auto__){
return (function (state_3379){
var state_val_3380 = (state_3379[(1)]);
if((state_val_3380 === (1))){
var inst_3364 = [new cljs.core.Keyword(null,"transit-params","transit-params",357261095)];
var inst_3365 = [new cljs.core.Keyword(null,"domain","domain",1847214937)];
var inst_3366 = [domain];
var inst_3367 = cljs.core.PersistentHashMap.fromArrays(inst_3365,inst_3366);
var inst_3368 = [inst_3367];
var inst_3369 = cljs.core.PersistentHashMap.fromArrays(inst_3364,inst_3368);
var inst_3370 = cljs_http.client.post.call(null,"/domain/valid",inst_3369);
var state_3379__$1 = state_3379;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3379__$1,(2),inst_3370);
} else {
if((state_val_3380 === (2))){
var inst_3372 = (state_3379[(2)]);
var inst_3373 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_3374 = [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"valid?","valid?",-212412379)];
var inst_3375 = (new cljs.core.PersistentVector(null,2,(5),inst_3373,inst_3374,null));
var inst_3376 = cljs.core.get_in.call(null,inst_3372,inst_3375);
var inst_3377 = console.log(inst_3376);
var state_3379__$1 = state_3379;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3379__$1,inst_3377);
} else {
return null;
}
}
});})(c__2924__auto__))
;
return ((function (switch__2901__auto__,c__2924__auto__){
return (function() {
var daomei$cljs$controller$valid_domain_QMARK__$_state_machine__2902__auto__ = null;
var daomei$cljs$controller$valid_domain_QMARK__$_state_machine__2902__auto____0 = (function (){
var statearr_3381 = [null,null,null,null,null,null,null];
(statearr_3381[(0)] = daomei$cljs$controller$valid_domain_QMARK__$_state_machine__2902__auto__);

(statearr_3381[(1)] = (1));

return statearr_3381;
});
var daomei$cljs$controller$valid_domain_QMARK__$_state_machine__2902__auto____1 = (function (state_3379){
while(true){
var ret_value__2903__auto__ = (function (){try{while(true){
var result__2904__auto__ = switch__2901__auto__.call(null,state_3379);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2904__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2904__auto__;
}
break;
}
}catch (e3382){if((e3382 instanceof Object)){
var ex__2905__auto__ = e3382;
var statearr_3383_3385 = state_3379;
(statearr_3383_3385[(5)] = ex__2905__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3379);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3382;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2903__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3386 = state_3379;
state_3379 = G__3386;
continue;
} else {
return ret_value__2903__auto__;
}
break;
}
});
daomei$cljs$controller$valid_domain_QMARK__$_state_machine__2902__auto__ = function(state_3379){
switch(arguments.length){
case 0:
return daomei$cljs$controller$valid_domain_QMARK__$_state_machine__2902__auto____0.call(this);
case 1:
return daomei$cljs$controller$valid_domain_QMARK__$_state_machine__2902__auto____1.call(this,state_3379);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
daomei$cljs$controller$valid_domain_QMARK__$_state_machine__2902__auto__.cljs$core$IFn$_invoke$arity$0 = daomei$cljs$controller$valid_domain_QMARK__$_state_machine__2902__auto____0;
daomei$cljs$controller$valid_domain_QMARK__$_state_machine__2902__auto__.cljs$core$IFn$_invoke$arity$1 = daomei$cljs$controller$valid_domain_QMARK__$_state_machine__2902__auto____1;
return daomei$cljs$controller$valid_domain_QMARK__$_state_machine__2902__auto__;
})()
;})(switch__2901__auto__,c__2924__auto__))
})();
var state__2926__auto__ = (function (){var statearr_3384 = f__2925__auto__.call(null);
(statearr_3384[(6)] = c__2924__auto__);

return statearr_3384;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2926__auto__);
});})(c__2924__auto__))
);

return c__2924__auto__;
});

//# sourceMappingURL=controller.js.map
