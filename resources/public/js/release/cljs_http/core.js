// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('cljs_http.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.net.EventType');
goog.require('goog.net.ErrorCode');
goog.require('goog.net.XhrIo');
goog.require('goog.net.Jsonp');
goog.require('cljs_http.util');
goog.require('cljs.core.async');
goog.require('clojure.string');
cljs_http.core.pending_requests = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
/**
 * Attempt to close the given channel and abort the pending HTTP request
 *   with which it is associated.
 */
cljs_http.core.abort_BANG_ = (function cljs_http$core$abort_BANG_(channel){
var temp__5537__auto__ = (function (){var fexpr__9834 = cljs.core.deref(cljs_http.core.pending_requests);
return (fexpr__9834.cljs$core$IFn$_invoke$arity$1 ? fexpr__9834.cljs$core$IFn$_invoke$arity$1(channel) : fexpr__9834.call(null,channel));
})();
if(cljs.core.truth_(temp__5537__auto__)){
var req = temp__5537__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

cljs.core.async.close_BANG_(channel);

if(cljs.core.truth_(req.hasOwnProperty("abort"))){
return req.abort();
} else {
return cljs.core.cst$kw$jsonp.cljs$core$IFn$_invoke$arity$1(req).cancel(cljs.core.cst$kw$request.cljs$core$IFn$_invoke$arity$1(req));
}
} else {
return null;
}
});
cljs_http.core.aborted_QMARK_ = (function cljs_http$core$aborted_QMARK_(xhr){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(xhr.getLastErrorCode(),goog.net.ErrorCode.ABORT);
});
/**
 * Takes an XhrIo object and applies the default-headers to it.
 */
cljs_http.core.apply_default_headers_BANG_ = (function cljs_http$core$apply_default_headers_BANG_(xhr,headers){
var formatted_h = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs_http.util.camelize,cljs.core.keys(headers)),cljs.core.vals(headers));
return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (formatted_h){
return (function (p__9835){
var vec__9836 = p__9835;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9836,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9836,(1),null);
return xhr.headers.set(k,v);
});})(formatted_h))
,formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__9839 = response_type;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$array_DASH_buffer,G__9839)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$blob,G__9839)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$document,G__9839)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$text,G__9839)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$default,G__9839)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__9839)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9839)].join('')));

}
}
}
}
}
}
})());
});
/**
 * Builds an XhrIo object from the request parameters.
 */
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__9840){
var map__9841 = p__9840;
var map__9841__$1 = ((((!((map__9841 == null)))?(((((map__9841.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9841.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9841):map__9841);
var request = map__9841__$1;
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9841__$1,cljs.core.cst$kw$with_DASH_credentials_QMARK_);
var default_headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9841__$1,cljs.core.cst$kw$default_DASH_headers);
var response_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9841__$1,cljs.core.cst$kw$response_DASH_type);
var timeout = (function (){var or__3949__auto__ = cljs.core.cst$kw$timeout.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__9843 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_(G__9843,default_headers);

cljs_http.core.apply_response_type_BANG_(G__9843,response_type);

G__9843.setTimeoutInterval(timeout);

G__9843.setWithCredentials(send_credentials);

return G__9843;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[cljs.core.cst$kw$no_DASH_error,cljs.core.cst$kw$abort,cljs.core.cst$kw$access_DASH_denied,cljs.core.cst$kw$custom_DASH_error,cljs.core.cst$kw$http_DASH_error,cljs.core.cst$kw$ff_DASH_silent_DASH_error,cljs.core.cst$kw$file_DASH_not_DASH_found,cljs.core.cst$kw$offline,cljs.core.cst$kw$exception,cljs.core.cst$kw$timeout]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__9844){
var map__9845 = p__9844;
var map__9845__$1 = ((((!((map__9845 == null)))?(((((map__9845.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9845.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9845):map__9845);
var request = map__9845__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9845__$1,cljs.core.cst$kw$request_DASH_method);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9845__$1,cljs.core.cst$kw$headers);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9845__$1,cljs.core.cst$kw$body);
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9845__$1,cljs.core.cst$kw$with_DASH_credentials_QMARK_);
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9845__$1,cljs.core.cst$kw$cancel);
var progress = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9845__$1,cljs.core.cst$kw$progress);
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var request_url = cljs_http.util.build_url(request);
var method = cljs.core.name((function (){var or__3949__auto__ = request_method;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.cst$kw$get;
}
})());
var headers__$1 = cljs_http.util.build_headers(headers);
var xhr = cljs_http.core.build_xhr(request);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr);

xhr.listen(goog.net.EventType.COMPLETE,((function (channel,request_url,method,headers__$1,xhr,map__9845,map__9845__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (evt){
var target = evt.target;
var response = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$status,target.getStatus(),cljs.core.cst$kw$success,target.isSuccess(),cljs.core.cst$kw$body,target.getResponse(),cljs.core.cst$kw$headers,cljs_http.util.parse_headers(target.getAllResponseHeaders()),cljs.core.cst$kw$trace_DASH_redirects,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),cljs.core.cst$kw$error_DASH_code,(function (){var G__9847 = target.getLastErrorCode();
return (cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1 ? cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1(G__9847) : cljs_http.core.error_kw.call(null,G__9847));
})(),cljs.core.cst$kw$error_DASH_text,target.getLastError()], null);
if(cljs.core.not(cljs_http.core.aborted_QMARK_(xhr))){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
});})(channel,request_url,method,headers__$1,xhr,map__9845,map__9845__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
);

if(cljs.core.truth_(progress)){
var listener_9870 = ((function (channel,request_url,method,headers__$1,xhr,map__9845,map__9845__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (direction,evt){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(progress,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$direction,direction,cljs.core.cst$kw$loaded,evt.loaded], null),(cljs.core.truth_(evt.lengthComputable)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$total,evt.total], null):null)], 0)));
});})(channel,request_url,method,headers__$1,xhr,map__9845,map__9845__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
;
var G__9848_9871 = xhr;
G__9848_9871.setProgressEventsEnabled(true);

G__9848_9871.listen(goog.net.EventType.UPLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_9870,cljs.core.cst$kw$upload));

G__9848_9871.listen(goog.net.EventType.DOWNLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_9870,cljs.core.cst$kw$download));

} else {
}

xhr.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__7888__auto___9872 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7888__auto___9872,channel,request_url,method,headers__$1,xhr,map__9845,map__9845__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (){
var f__7889__auto__ = (function (){var switch__7785__auto__ = ((function (c__7888__auto___9872,channel,request_url,method,headers__$1,xhr,map__9845,map__9845__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (state_9859){
var state_val_9860 = (state_9859[(1)]);
if((state_val_9860 === (1))){
var state_9859__$1 = state_9859;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9859__$1,(2),cancel);
} else {
if((state_val_9860 === (2))){
var inst_9850 = (state_9859[(2)]);
var inst_9851 = xhr.isComplete();
var inst_9852 = cljs.core.not(inst_9851);
var state_9859__$1 = (function (){var statearr_9861 = state_9859;
(statearr_9861[(7)] = inst_9850);

return statearr_9861;
})();
if(inst_9852){
var statearr_9862_9873 = state_9859__$1;
(statearr_9862_9873[(1)] = (3));

} else {
var statearr_9863_9874 = state_9859__$1;
(statearr_9863_9874[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9860 === (3))){
var inst_9854 = xhr.abort();
var state_9859__$1 = state_9859;
var statearr_9864_9875 = state_9859__$1;
(statearr_9864_9875[(2)] = inst_9854);

(statearr_9864_9875[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9860 === (4))){
var state_9859__$1 = state_9859;
var statearr_9865_9876 = state_9859__$1;
(statearr_9865_9876[(2)] = null);

(statearr_9865_9876[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9860 === (5))){
var inst_9857 = (state_9859[(2)]);
var state_9859__$1 = state_9859;
return cljs.core.async.impl.ioc_helpers.return_chan(state_9859__$1,inst_9857);
} else {
return null;
}
}
}
}
}
});})(c__7888__auto___9872,channel,request_url,method,headers__$1,xhr,map__9845,map__9845__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
;
return ((function (switch__7785__auto__,c__7888__auto___9872,channel,request_url,method,headers__$1,xhr,map__9845,map__9845__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function() {
var cljs_http$core$xhr_$_state_machine__7786__auto__ = null;
var cljs_http$core$xhr_$_state_machine__7786__auto____0 = (function (){
var statearr_9866 = [null,null,null,null,null,null,null,null];
(statearr_9866[(0)] = cljs_http$core$xhr_$_state_machine__7786__auto__);

(statearr_9866[(1)] = (1));

return statearr_9866;
});
var cljs_http$core$xhr_$_state_machine__7786__auto____1 = (function (state_9859){
while(true){
var ret_value__7787__auto__ = (function (){try{while(true){
var result__7788__auto__ = switch__7785__auto__(state_9859);
if(cljs.core.keyword_identical_QMARK_(result__7788__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7788__auto__;
}
break;
}
}catch (e9867){if((e9867 instanceof Object)){
var ex__7789__auto__ = e9867;
var statearr_9868_9877 = state_9859;
(statearr_9868_9877[(5)] = ex__7789__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_9859);

return cljs.core.cst$kw$recur;
} else {
throw e9867;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7787__auto__,cljs.core.cst$kw$recur)){
var G__9878 = state_9859;
state_9859 = G__9878;
continue;
} else {
return ret_value__7787__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__7786__auto__ = function(state_9859){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__7786__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__7786__auto____1.call(this,state_9859);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$xhr_$_state_machine__7786__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__7786__auto____0;
cljs_http$core$xhr_$_state_machine__7786__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__7786__auto____1;
return cljs_http$core$xhr_$_state_machine__7786__auto__;
})()
;})(switch__7785__auto__,c__7888__auto___9872,channel,request_url,method,headers__$1,xhr,map__9845,map__9845__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
})();
var state__7890__auto__ = (function (){var statearr_9869 = (f__7889__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7889__auto__.cljs$core$IFn$_invoke$arity$0() : f__7889__auto__.call(null));
(statearr_9869[(6)] = c__7888__auto___9872);

return statearr_9869;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7890__auto__);
});})(c__7888__auto___9872,channel,request_url,method,headers__$1,xhr,map__9845,map__9845__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
);

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__9879){
var map__9880 = p__9879;
var map__9880__$1 = ((((!((map__9880 == null)))?(((((map__9880.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9880.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9880):map__9880);
var request = map__9880__$1;
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9880__$1,cljs.core.cst$kw$timeout);
var callback_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9880__$1,cljs.core.cst$kw$callback_DASH_name);
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9880__$1,cljs.core.cst$kw$cancel);
var keywordize_keys_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__9880__$1,cljs.core.cst$kw$keywordize_DASH_keys_QMARK_,true);
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var jsonp = (new goog.net.Jsonp(cljs_http.util.build_url(request),callback_name));
jsonp.setRequestTimeout(timeout);

var req_9893 = jsonp.send(null,((function (channel,jsonp,map__9880,map__9880__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function cljs_http$core$jsonp_$_success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$status,(200),cljs.core.cst$kw$success,true,cljs.core.cst$kw$body,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$keywordize_DASH_keys,keywordize_keys_QMARK_], 0))], null);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
});})(channel,jsonp,map__9880,map__9880__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
,((function (channel,jsonp,map__9880,map__9880__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function cljs_http$core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
});})(channel,jsonp,map__9880,map__9880__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$jsonp,jsonp,cljs.core.cst$kw$request,req_9893], null));

if(cljs.core.truth_(cancel)){
var c__7888__auto___9894 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7888__auto___9894,req_9893,channel,jsonp,map__9880,map__9880__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function (){
var f__7889__auto__ = (function (){var switch__7785__auto__ = ((function (c__7888__auto___9894,req_9893,channel,jsonp,map__9880,map__9880__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function (state_9886){
var state_val_9887 = (state_9886[(1)]);
if((state_val_9887 === (1))){
var state_9886__$1 = state_9886;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9886__$1,(2),cancel);
} else {
if((state_val_9887 === (2))){
var inst_9883 = (state_9886[(2)]);
var inst_9884 = jsonp.cancel(req_9893);
var state_9886__$1 = (function (){var statearr_9888 = state_9886;
(statearr_9888[(7)] = inst_9883);

return statearr_9888;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_9886__$1,inst_9884);
} else {
return null;
}
}
});})(c__7888__auto___9894,req_9893,channel,jsonp,map__9880,map__9880__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
;
return ((function (switch__7785__auto__,c__7888__auto___9894,req_9893,channel,jsonp,map__9880,map__9880__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function() {
var cljs_http$core$jsonp_$_state_machine__7786__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__7786__auto____0 = (function (){
var statearr_9889 = [null,null,null,null,null,null,null,null];
(statearr_9889[(0)] = cljs_http$core$jsonp_$_state_machine__7786__auto__);

(statearr_9889[(1)] = (1));

return statearr_9889;
});
var cljs_http$core$jsonp_$_state_machine__7786__auto____1 = (function (state_9886){
while(true){
var ret_value__7787__auto__ = (function (){try{while(true){
var result__7788__auto__ = switch__7785__auto__(state_9886);
if(cljs.core.keyword_identical_QMARK_(result__7788__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7788__auto__;
}
break;
}
}catch (e9890){if((e9890 instanceof Object)){
var ex__7789__auto__ = e9890;
var statearr_9891_9895 = state_9886;
(statearr_9891_9895[(5)] = ex__7789__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_9886);

return cljs.core.cst$kw$recur;
} else {
throw e9890;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7787__auto__,cljs.core.cst$kw$recur)){
var G__9896 = state_9886;
state_9886 = G__9896;
continue;
} else {
return ret_value__7787__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__7786__auto__ = function(state_9886){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__7786__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__7786__auto____1.call(this,state_9886);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$jsonp_$_state_machine__7786__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__7786__auto____0;
cljs_http$core$jsonp_$_state_machine__7786__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__7786__auto____1;
return cljs_http$core$jsonp_$_state_machine__7786__auto__;
})()
;})(switch__7785__auto__,c__7888__auto___9894,req_9893,channel,jsonp,map__9880,map__9880__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
})();
var state__7890__auto__ = (function (){var statearr_9892 = (f__7889__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7889__auto__.cljs$core$IFn$_invoke$arity$0() : f__7889__auto__.call(null));
(statearr_9892[(6)] = c__7888__auto___9894);

return statearr_9892;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7890__auto__);
});})(c__7888__auto___9894,req_9893,channel,jsonp,map__9880,map__9880__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
);

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__9897){
var map__9898 = p__9897;
var map__9898__$1 = ((((!((map__9898 == null)))?(((((map__9898.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9898.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9898):map__9898);
var request = map__9898__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9898__$1,cljs.core.cst$kw$request_DASH_method);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(request_method,cljs.core.cst$kw$jsonp)){
return cljs_http.core.jsonp(request);
} else {
return cljs_http.core.xhr(request);
}
});
