// Compiled by ClojureScript 1.10.339 {}
goog.provide('zaogao.cljs.controller');
goog.require('cljs.core');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
zaogao.cljs.controller.valid_domain_QMARK_ = (function zaogao$cljs$controller$valid_domain_QMARK_(domain){
var c__4470__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__4470__auto__){
return (function (){
var f__4471__auto__ = (function (){var switch__4311__auto__ = ((function (c__4470__auto__){
return (function (state_9567){
var state_val_9568 = (state_9567[(1)]);
if((state_val_9568 === (1))){
var inst_9552 = [new cljs.core.Keyword(null,"transit-params","transit-params",357261095)];
var inst_9553 = [new cljs.core.Keyword(null,"domain","domain",1847214937)];
var inst_9554 = [domain];
var inst_9555 = cljs.core.PersistentHashMap.fromArrays(inst_9553,inst_9554);
var inst_9556 = [inst_9555];
var inst_9557 = cljs.core.PersistentHashMap.fromArrays(inst_9552,inst_9556);
var inst_9558 = cljs_http.client.post.call(null,"/domain/valid",inst_9557);
var state_9567__$1 = state_9567;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9567__$1,(2),inst_9558);
} else {
if((state_val_9568 === (2))){
var inst_9560 = (state_9567[(2)]);
var inst_9561 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_9562 = [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"valid?","valid?",-212412379)];
var inst_9563 = (new cljs.core.PersistentVector(null,2,(5),inst_9561,inst_9562,null));
var inst_9564 = cljs.core.get_in.call(null,inst_9560,inst_9563);
var inst_9565 = console.log(inst_9564);
var state_9567__$1 = state_9567;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9567__$1,inst_9565);
} else {
return null;
}
}
});})(c__4470__auto__))
;
return ((function (switch__4311__auto__,c__4470__auto__){
return (function() {
var zaogao$cljs$controller$valid_domain_QMARK__$_state_machine__4312__auto__ = null;
var zaogao$cljs$controller$valid_domain_QMARK__$_state_machine__4312__auto____0 = (function (){
var statearr_9569 = [null,null,null,null,null,null,null];
(statearr_9569[(0)] = zaogao$cljs$controller$valid_domain_QMARK__$_state_machine__4312__auto__);

(statearr_9569[(1)] = (1));

return statearr_9569;
});
var zaogao$cljs$controller$valid_domain_QMARK__$_state_machine__4312__auto____1 = (function (state_9567){
while(true){
var ret_value__4313__auto__ = (function (){try{while(true){
var result__4314__auto__ = switch__4311__auto__.call(null,state_9567);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4314__auto__;
}
break;
}
}catch (e9570){if((e9570 instanceof Object)){
var ex__4315__auto__ = e9570;
var statearr_9571_9573 = state_9567;
(statearr_9571_9573[(5)] = ex__4315__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9567);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9570;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9574 = state_9567;
state_9567 = G__9574;
continue;
} else {
return ret_value__4313__auto__;
}
break;
}
});
zaogao$cljs$controller$valid_domain_QMARK__$_state_machine__4312__auto__ = function(state_9567){
switch(arguments.length){
case 0:
return zaogao$cljs$controller$valid_domain_QMARK__$_state_machine__4312__auto____0.call(this);
case 1:
return zaogao$cljs$controller$valid_domain_QMARK__$_state_machine__4312__auto____1.call(this,state_9567);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
zaogao$cljs$controller$valid_domain_QMARK__$_state_machine__4312__auto__.cljs$core$IFn$_invoke$arity$0 = zaogao$cljs$controller$valid_domain_QMARK__$_state_machine__4312__auto____0;
zaogao$cljs$controller$valid_domain_QMARK__$_state_machine__4312__auto__.cljs$core$IFn$_invoke$arity$1 = zaogao$cljs$controller$valid_domain_QMARK__$_state_machine__4312__auto____1;
return zaogao$cljs$controller$valid_domain_QMARK__$_state_machine__4312__auto__;
})()
;})(switch__4311__auto__,c__4470__auto__))
})();
var state__4472__auto__ = (function (){var statearr_9572 = f__4471__auto__.call(null);
(statearr_9572[(6)] = c__4470__auto__);

return statearr_9572;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4472__auto__);
});})(c__4470__auto__))
);

return c__4470__auto__;
});

//# sourceMappingURL=controller.js.map
