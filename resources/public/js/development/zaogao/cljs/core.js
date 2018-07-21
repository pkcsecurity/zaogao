// Compiled by ClojureScript 1.10.339 {}
goog.provide('zaogao.cljs.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('zaogao.cljs.controller');
goog.require('goog.dom');
zaogao.cljs.core.app_state = reagent.core.atom.call(null,new cljs.core.Keyword(null,"survey-question","survey-question",591118597));
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
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.justify-between.items-center.p2.bg-pri.white","div.flex.justify-between.items-center.p2.bg-pri.white",1153155433),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"75px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa.fa-bars","i.fa.fa-bars",-1114139547)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"\u5341\u4E8C"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa.fa-user-circle","i.fa.fa-user-circle",-213112418)], null)], null)], null);
});
zaogao.cljs.core.survey_intro_item = (function zaogao$cljs$core$survey_intro_item(i,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-12.flex.items-center.px2.pt1","div.col-12.flex.items-center.px2.pt1",675200582),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.justify-center.items-center.border-pri.pri.border.circle.border-wide","div.flex.justify-center.items-center.border-pri.pri.border.circle.border-wide",398912831),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),"35px",new cljs.core.Keyword(null,"width","width",-384071477),"35px"], null)], null),i], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.pri.ml2","h4.pri.ml2",-452125138),"Biblical ",text], null)], null);
});
zaogao.cljs.core.characteristics = cljs.core.take.call(null,(12),cljs.core.cycle.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Worship","Prayer","Fellowship","Giving","Mission"], null)));
zaogao.cljs.core.survey_start_button = (function zaogao$cljs$core$survey_start_button(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.justify-center.items-center.mt2","div.flex.justify-center.items-center.mt2",1554238411),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_.call(null,zaogao.cljs.core.app_state,new cljs.core.Keyword(null,"survey-question","survey-question",591118597));
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"150px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bg-pri.m2.p2.rounded","div.bg-pri.m2.p2.rounded",-1764811372),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_.call(null,zaogao.cljs.core.app_state,new cljs.core.Keyword(null,"survey-intro","survey-intro",-1234020660));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.white","h3.white",66539079),"Start Survey"], null)], null)], null);
});
zaogao.cljs.core.survey_intro_body = (function zaogao$cljs$core$survey_intro_body(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.sec.p2","h4.sec.p2",9431694),"The following are 12 Biblical Characteristics we'll be asking about:"], null),(function (){var iter__4324__auto__ = (function zaogao$cljs$core$survey_intro_body_$_iter__4292(s__4293){
return (new cljs.core.LazySeq(null,(function (){
var s__4293__$1 = s__4293;
while(true){
var temp__5537__auto__ = cljs.core.seq.call(null,s__4293__$1);
if(temp__5537__auto__){
var s__4293__$2 = temp__5537__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4293__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__4293__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__4295 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__4294 = (0);
while(true){
if((i__4294 < size__4323__auto__)){
var vec__4296 = cljs.core._nth.call(null,c__4322__auto__,i__4294);
var idx = cljs.core.nth.call(null,vec__4296,(0),null);
var c = cljs.core.nth.call(null,vec__4296,(1),null);
cljs.core.chunk_append.call(null,b__4295,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [zaogao.cljs.core.survey_intro_item,(idx + (1)),c], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),idx], null)));

var G__4302 = (i__4294 + (1));
i__4294 = G__4302;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4295),zaogao$cljs$core$survey_intro_body_$_iter__4292.call(null,cljs.core.chunk_rest.call(null,s__4293__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4295),null);
}
} else {
var vec__4299 = cljs.core.first.call(null,s__4293__$2);
var idx = cljs.core.nth.call(null,vec__4299,(0),null);
var c = cljs.core.nth.call(null,vec__4299,(1),null);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [zaogao.cljs.core.survey_intro_item,(idx + (1)),c], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),idx], null)),zaogao$cljs$core$survey_intro_body_$_iter__4292.call(null,cljs.core.rest.call(null,s__4293__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,zaogao.cljs.core.characteristics));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [zaogao.cljs.core.survey_start_button], null)], null);
});
zaogao.cljs.core.slider = (function zaogao$cljs$core$slider(){
var selected = reagent.core.atom.call(null,null);
return ((function (selected){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.justify-between.items-center.relative","div.flex.justify-between.items-center.relative",852160737),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"100px"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),"50px",new cljs.core.Keyword(null,"width","width",-384071477),"15px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.border.border-pri.border-wide.circle.bg-pri","div.border.border-pri.border-wide.circle.bg-pri",1377088473),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"10px",new cljs.core.Keyword(null,"height","height",1025178622),"30px",new cljs.core.Keyword(null,"width","width",-384071477),"30px"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"11px"], null)], null),(1)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),"50px",new cljs.core.Keyword(null,"width","width",-384071477),"15px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.border.border-pri.border-wide.circle.bg-pri","div.border.border-pri.border-wide.circle.bg-pri",1377088473),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"10px",new cljs.core.Keyword(null,"height","height",1025178622),"30px",new cljs.core.Keyword(null,"width","width",-384071477),"30px"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"11px"], null)], null),(2)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),"50px",new cljs.core.Keyword(null,"width","width",-384071477),"15px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.border.border-pri.border-wide.circle.bg-pri","div.border.border-pri.border-wide.circle.bg-pri",1377088473),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"10px",new cljs.core.Keyword(null,"height","height",1025178622),"30px",new cljs.core.Keyword(null,"width","width",-384071477),"30px"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"11px"], null)], null),(3)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),"50px",new cljs.core.Keyword(null,"width","width",-384071477),"15px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.border.border-pri.border-wide.circle.bg-pri","div.border.border-pri.border-wide.circle.bg-pri",1377088473),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"-5px",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"10px",new cljs.core.Keyword(null,"height","height",1025178622),"30px",new cljs.core.Keyword(null,"width","width",-384071477),"30px"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"4px"], null)], null),(4)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bg-pri.col-12.absolute","div.bg-pri.col-12.absolute",1932876887),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"top","top",-1856271961),"50%",new cljs.core.Keyword(null,"left","left",-399115937),(0),new cljs.core.Keyword(null,"right","right",-452581833),(0),new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"-2px",new cljs.core.Keyword(null,"height","height",1025178622),"4px"], null)], null)], null)], null);
});
;})(selected))
});
zaogao.cljs.core.survey_question = (function zaogao$cljs$core$survey_question(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Biblical Worship"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.p2","div.p2",1132346717),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [zaogao.cljs.core.slider], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"How would you rate the corporate whorship of your church defined by John 4:24, in \u201Cspirit and in truth\u201D"], null)], null);
});
zaogao.cljs.core.body = (function zaogao$cljs$core$body(){
var G__4303 = cljs.core.deref.call(null,zaogao.cljs.core.app_state);
var G__4303__$1 = (((G__4303 instanceof cljs.core.Keyword))?G__4303.fqn:null);
switch (G__4303__$1) {
case "landing":
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.fixed.top-0.left-0.right-0.bottom-0","div.fixed.top-0.left-0.right-0.bottom-0",1987448297),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [zaogao.cljs.core.landing_header], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [zaogao.cljs.core.landing_hero], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [zaogao.cljs.core.landing_button], null)], null);

break;
case "survey-intro":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [zaogao.cljs.core.nav], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [zaogao.cljs.core.survey_intro_body], null)], null);

break;
case "survey-question":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [zaogao.cljs.core.nav], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [zaogao.cljs.core.survey_question], null)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__4303__$1)].join('')));

}
});
zaogao.cljs.core._main = (function zaogao$cljs$core$_main(){
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [zaogao.cljs.core.body], null),goog.dom.getElement("app"));
});
zaogao.cljs.core._main.call(null);

//# sourceMappingURL=core.js.map
