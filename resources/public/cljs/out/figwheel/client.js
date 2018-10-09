// Compiled by ClojureScript 1.10.339 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.16";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && (!((JSON.stringify == null)))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e30500){if((e30500 instanceof Error)){
var e = e30500;
return "Error: Unable to stringify";
} else {
throw e30500;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__30503 = arguments.length;
switch (G__30503) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__30501_SHARP_){
if(typeof p1__30501_SHARP_ === 'string'){
return p1__30501_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__30501_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4534__auto__ = [];
var len__4531__auto___30506 = arguments.length;
var i__4532__auto___30507 = (0);
while(true){
if((i__4532__auto___30507 < len__4531__auto___30506)){
args__4534__auto__.push((arguments[i__4532__auto___30507]));

var G__30508 = (i__4532__auto___30507 + (1));
i__4532__auto___30507 = G__30508;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq30505){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30505));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4534__auto__ = [];
var len__4531__auto___30510 = arguments.length;
var i__4532__auto___30511 = (0);
while(true){
if((i__4532__auto___30511 < len__4531__auto___30510)){
args__4534__auto__.push((arguments[i__4532__auto___30511]));

var G__30512 = (i__4532__auto___30511 + (1));
i__4532__auto___30511 = G__30512;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq30509){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30509));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__30513){
var map__30514 = p__30513;
var map__30514__$1 = ((((!((map__30514 == null)))?(((((map__30514.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30514.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30514):map__30514);
var message = cljs.core.get.call(null,map__30514__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__30514__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__3949__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__3938__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__3938__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__3938__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__23769__auto___30593 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23769__auto___30593,ch){
return (function (){
var f__23770__auto__ = (function (){var switch__23678__auto__ = ((function (c__23769__auto___30593,ch){
return (function (state_30565){
var state_val_30566 = (state_30565[(1)]);
if((state_val_30566 === (7))){
var inst_30561 = (state_30565[(2)]);
var state_30565__$1 = state_30565;
var statearr_30567_30594 = state_30565__$1;
(statearr_30567_30594[(2)] = inst_30561);

(statearr_30567_30594[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30566 === (1))){
var state_30565__$1 = state_30565;
var statearr_30568_30595 = state_30565__$1;
(statearr_30568_30595[(2)] = null);

(statearr_30568_30595[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30566 === (4))){
var inst_30518 = (state_30565[(7)]);
var inst_30518__$1 = (state_30565[(2)]);
var state_30565__$1 = (function (){var statearr_30569 = state_30565;
(statearr_30569[(7)] = inst_30518__$1);

return statearr_30569;
})();
if(cljs.core.truth_(inst_30518__$1)){
var statearr_30570_30596 = state_30565__$1;
(statearr_30570_30596[(1)] = (5));

} else {
var statearr_30571_30597 = state_30565__$1;
(statearr_30571_30597[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30566 === (15))){
var inst_30525 = (state_30565[(8)]);
var inst_30540 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_30525);
var inst_30541 = cljs.core.first.call(null,inst_30540);
var inst_30542 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_30541);
var inst_30543 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30542)].join('');
var inst_30544 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_30543);
var state_30565__$1 = state_30565;
var statearr_30572_30598 = state_30565__$1;
(statearr_30572_30598[(2)] = inst_30544);

(statearr_30572_30598[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30566 === (13))){
var inst_30549 = (state_30565[(2)]);
var state_30565__$1 = state_30565;
var statearr_30573_30599 = state_30565__$1;
(statearr_30573_30599[(2)] = inst_30549);

(statearr_30573_30599[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30566 === (6))){
var state_30565__$1 = state_30565;
var statearr_30574_30600 = state_30565__$1;
(statearr_30574_30600[(2)] = null);

(statearr_30574_30600[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30566 === (17))){
var inst_30547 = (state_30565[(2)]);
var state_30565__$1 = state_30565;
var statearr_30575_30601 = state_30565__$1;
(statearr_30575_30601[(2)] = inst_30547);

(statearr_30575_30601[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30566 === (3))){
var inst_30563 = (state_30565[(2)]);
var state_30565__$1 = state_30565;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30565__$1,inst_30563);
} else {
if((state_val_30566 === (12))){
var inst_30524 = (state_30565[(9)]);
var inst_30538 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_30524,opts);
var state_30565__$1 = state_30565;
if(cljs.core.truth_(inst_30538)){
var statearr_30576_30602 = state_30565__$1;
(statearr_30576_30602[(1)] = (15));

} else {
var statearr_30577_30603 = state_30565__$1;
(statearr_30577_30603[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30566 === (2))){
var state_30565__$1 = state_30565;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30565__$1,(4),ch);
} else {
if((state_val_30566 === (11))){
var inst_30525 = (state_30565[(8)]);
var inst_30530 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30531 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_30525);
var inst_30532 = cljs.core.async.timeout.call(null,(1000));
var inst_30533 = [inst_30531,inst_30532];
var inst_30534 = (new cljs.core.PersistentVector(null,2,(5),inst_30530,inst_30533,null));
var state_30565__$1 = state_30565;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30565__$1,(14),inst_30534);
} else {
if((state_val_30566 === (9))){
var inst_30525 = (state_30565[(8)]);
var inst_30551 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_30552 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_30525);
var inst_30553 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30552);
var inst_30554 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30553)].join('');
var inst_30555 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_30554);
var state_30565__$1 = (function (){var statearr_30578 = state_30565;
(statearr_30578[(10)] = inst_30551);

return statearr_30578;
})();
var statearr_30579_30604 = state_30565__$1;
(statearr_30579_30604[(2)] = inst_30555);

(statearr_30579_30604[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30566 === (5))){
var inst_30518 = (state_30565[(7)]);
var inst_30520 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_30521 = (new cljs.core.PersistentArrayMap(null,2,inst_30520,null));
var inst_30522 = (new cljs.core.PersistentHashSet(null,inst_30521,null));
var inst_30523 = figwheel.client.focus_msgs.call(null,inst_30522,inst_30518);
var inst_30524 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_30523);
var inst_30525 = cljs.core.first.call(null,inst_30523);
var inst_30526 = figwheel.client.autoload_QMARK_.call(null);
var state_30565__$1 = (function (){var statearr_30580 = state_30565;
(statearr_30580[(9)] = inst_30524);

(statearr_30580[(8)] = inst_30525);

return statearr_30580;
})();
if(cljs.core.truth_(inst_30526)){
var statearr_30581_30605 = state_30565__$1;
(statearr_30581_30605[(1)] = (8));

} else {
var statearr_30582_30606 = state_30565__$1;
(statearr_30582_30606[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30566 === (14))){
var inst_30536 = (state_30565[(2)]);
var state_30565__$1 = state_30565;
var statearr_30583_30607 = state_30565__$1;
(statearr_30583_30607[(2)] = inst_30536);

(statearr_30583_30607[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30566 === (16))){
var state_30565__$1 = state_30565;
var statearr_30584_30608 = state_30565__$1;
(statearr_30584_30608[(2)] = null);

(statearr_30584_30608[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30566 === (10))){
var inst_30557 = (state_30565[(2)]);
var state_30565__$1 = (function (){var statearr_30585 = state_30565;
(statearr_30585[(11)] = inst_30557);

return statearr_30585;
})();
var statearr_30586_30609 = state_30565__$1;
(statearr_30586_30609[(2)] = null);

(statearr_30586_30609[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30566 === (8))){
var inst_30524 = (state_30565[(9)]);
var inst_30528 = figwheel.client.reload_file_state_QMARK_.call(null,inst_30524,opts);
var state_30565__$1 = state_30565;
if(cljs.core.truth_(inst_30528)){
var statearr_30587_30610 = state_30565__$1;
(statearr_30587_30610[(1)] = (11));

} else {
var statearr_30588_30611 = state_30565__$1;
(statearr_30588_30611[(1)] = (12));

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
});})(c__23769__auto___30593,ch))
;
return ((function (switch__23678__auto__,c__23769__auto___30593,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__23679__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__23679__auto____0 = (function (){
var statearr_30589 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30589[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__23679__auto__);

(statearr_30589[(1)] = (1));

return statearr_30589;
});
var figwheel$client$file_reloader_plugin_$_state_machine__23679__auto____1 = (function (state_30565){
while(true){
var ret_value__23680__auto__ = (function (){try{while(true){
var result__23681__auto__ = switch__23678__auto__.call(null,state_30565);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23681__auto__;
}
break;
}
}catch (e30590){if((e30590 instanceof Object)){
var ex__23682__auto__ = e30590;
var statearr_30591_30612 = state_30565;
(statearr_30591_30612[(5)] = ex__23682__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30565);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30590;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30613 = state_30565;
state_30565 = G__30613;
continue;
} else {
return ret_value__23680__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__23679__auto__ = function(state_30565){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__23679__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__23679__auto____1.call(this,state_30565);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__23679__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__23679__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__23679__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__23679__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__23679__auto__;
})()
;})(switch__23678__auto__,c__23769__auto___30593,ch))
})();
var state__23771__auto__ = (function (){var statearr_30592 = f__23770__auto__.call(null);
(statearr_30592[(6)] = c__23769__auto___30593);

return statearr_30592;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23771__auto__);
});})(c__23769__auto___30593,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__30614_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__30614_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_30618 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_30618){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_30616 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_30617 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_30616,_STAR_print_fn_STAR_30617,sb,base_path_30618){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR_30616,_STAR_print_fn_STAR_30617,sb,base_path_30618))
;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_30617;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_30616;
}}catch (e30615){if((e30615 instanceof Error)){
var e = e30615;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_30618], null));
} else {
var e = e30615;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_30618))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__30619){
var map__30620 = p__30619;
var map__30620__$1 = ((((!((map__30620 == null)))?(((((map__30620.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30620.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30620):map__30620);
var opts = map__30620__$1;
var build_id = cljs.core.get.call(null,map__30620__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__30620,map__30620__$1,opts,build_id){
return (function (p__30622){
var vec__30623 = p__30622;
var seq__30624 = cljs.core.seq.call(null,vec__30623);
var first__30625 = cljs.core.first.call(null,seq__30624);
var seq__30624__$1 = cljs.core.next.call(null,seq__30624);
var map__30626 = first__30625;
var map__30626__$1 = ((((!((map__30626 == null)))?(((((map__30626.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30626.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30626):map__30626);
var msg = map__30626__$1;
var msg_name = cljs.core.get.call(null,map__30626__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30624__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__30623,seq__30624,first__30625,seq__30624__$1,map__30626,map__30626__$1,msg,msg_name,_,map__30620,map__30620__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__30623,seq__30624,first__30625,seq__30624__$1,map__30626,map__30626__$1,msg,msg_name,_,map__30620,map__30620__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__30620,map__30620__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__30628){
var vec__30629 = p__30628;
var seq__30630 = cljs.core.seq.call(null,vec__30629);
var first__30631 = cljs.core.first.call(null,seq__30630);
var seq__30630__$1 = cljs.core.next.call(null,seq__30630);
var map__30632 = first__30631;
var map__30632__$1 = ((((!((map__30632 == null)))?(((((map__30632.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30632.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30632):map__30632);
var msg = map__30632__$1;
var msg_name = cljs.core.get.call(null,map__30632__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30630__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__30634){
var map__30635 = p__30634;
var map__30635__$1 = ((((!((map__30635 == null)))?(((((map__30635.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30635.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30635):map__30635);
var on_compile_warning = cljs.core.get.call(null,map__30635__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__30635__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__30635,map__30635__$1,on_compile_warning,on_compile_fail){
return (function (p__30637){
var vec__30638 = p__30637;
var seq__30639 = cljs.core.seq.call(null,vec__30638);
var first__30640 = cljs.core.first.call(null,seq__30639);
var seq__30639__$1 = cljs.core.next.call(null,seq__30639);
var map__30641 = first__30640;
var map__30641__$1 = ((((!((map__30641 == null)))?(((((map__30641.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30641.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30641):map__30641);
var msg = map__30641__$1;
var msg_name = cljs.core.get.call(null,map__30641__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30639__$1;
var pred__30643 = cljs.core._EQ_;
var expr__30644 = msg_name;
if(cljs.core.truth_(pred__30643.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__30644))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__30643.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__30644))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__30635,map__30635__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__23769__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23769__auto__,msg_hist,msg_names,msg){
return (function (){
var f__23770__auto__ = (function (){var switch__23678__auto__ = ((function (c__23769__auto__,msg_hist,msg_names,msg){
return (function (state_30733){
var state_val_30734 = (state_30733[(1)]);
if((state_val_30734 === (7))){
var inst_30653 = (state_30733[(2)]);
var state_30733__$1 = state_30733;
if(cljs.core.truth_(inst_30653)){
var statearr_30735_30782 = state_30733__$1;
(statearr_30735_30782[(1)] = (8));

} else {
var statearr_30736_30783 = state_30733__$1;
(statearr_30736_30783[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30734 === (20))){
var inst_30727 = (state_30733[(2)]);
var state_30733__$1 = state_30733;
var statearr_30737_30784 = state_30733__$1;
(statearr_30737_30784[(2)] = inst_30727);

(statearr_30737_30784[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30734 === (27))){
var inst_30723 = (state_30733[(2)]);
var state_30733__$1 = state_30733;
var statearr_30738_30785 = state_30733__$1;
(statearr_30738_30785[(2)] = inst_30723);

(statearr_30738_30785[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30734 === (1))){
var inst_30646 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_30733__$1 = state_30733;
if(cljs.core.truth_(inst_30646)){
var statearr_30739_30786 = state_30733__$1;
(statearr_30739_30786[(1)] = (2));

} else {
var statearr_30740_30787 = state_30733__$1;
(statearr_30740_30787[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30734 === (24))){
var inst_30725 = (state_30733[(2)]);
var state_30733__$1 = state_30733;
var statearr_30741_30788 = state_30733__$1;
(statearr_30741_30788[(2)] = inst_30725);

(statearr_30741_30788[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30734 === (4))){
var inst_30731 = (state_30733[(2)]);
var state_30733__$1 = state_30733;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30733__$1,inst_30731);
} else {
if((state_val_30734 === (15))){
var inst_30729 = (state_30733[(2)]);
var state_30733__$1 = state_30733;
var statearr_30742_30789 = state_30733__$1;
(statearr_30742_30789[(2)] = inst_30729);

(statearr_30742_30789[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30734 === (21))){
var inst_30682 = (state_30733[(2)]);
var inst_30683 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30684 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30683);
var state_30733__$1 = (function (){var statearr_30743 = state_30733;
(statearr_30743[(7)] = inst_30682);

return statearr_30743;
})();
var statearr_30744_30790 = state_30733__$1;
(statearr_30744_30790[(2)] = inst_30684);

(statearr_30744_30790[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30734 === (31))){
var inst_30712 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_30733__$1 = state_30733;
if(cljs.core.truth_(inst_30712)){
var statearr_30745_30791 = state_30733__$1;
(statearr_30745_30791[(1)] = (34));

} else {
var statearr_30746_30792 = state_30733__$1;
(statearr_30746_30792[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30734 === (32))){
var inst_30721 = (state_30733[(2)]);
var state_30733__$1 = state_30733;
var statearr_30747_30793 = state_30733__$1;
(statearr_30747_30793[(2)] = inst_30721);

(statearr_30747_30793[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30734 === (33))){
var inst_30708 = (state_30733[(2)]);
var inst_30709 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30710 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30709);
var state_30733__$1 = (function (){var statearr_30748 = state_30733;
(statearr_30748[(8)] = inst_30708);

return statearr_30748;
})();
var statearr_30749_30794 = state_30733__$1;
(statearr_30749_30794[(2)] = inst_30710);

(statearr_30749_30794[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30734 === (13))){
var inst_30667 = figwheel.client.heads_up.clear.call(null);
var state_30733__$1 = state_30733;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30733__$1,(16),inst_30667);
} else {
if((state_val_30734 === (22))){
var inst_30688 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30689 = figwheel.client.heads_up.append_warning_message.call(null,inst_30688);
var state_30733__$1 = state_30733;
var statearr_30750_30795 = state_30733__$1;
(statearr_30750_30795[(2)] = inst_30689);

(statearr_30750_30795[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30734 === (36))){
var inst_30719 = (state_30733[(2)]);
var state_30733__$1 = state_30733;
var statearr_30751_30796 = state_30733__$1;
(statearr_30751_30796[(2)] = inst_30719);

(statearr_30751_30796[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30734 === (29))){
var inst_30699 = (state_30733[(2)]);
var inst_30700 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30701 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30700);
var state_30733__$1 = (function (){var statearr_30752 = state_30733;
(statearr_30752[(9)] = inst_30699);

return statearr_30752;
})();
var statearr_30753_30797 = state_30733__$1;
(statearr_30753_30797[(2)] = inst_30701);

(statearr_30753_30797[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30734 === (6))){
var inst_30648 = (state_30733[(10)]);
var state_30733__$1 = state_30733;
var statearr_30754_30798 = state_30733__$1;
(statearr_30754_30798[(2)] = inst_30648);

(statearr_30754_30798[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30734 === (28))){
var inst_30695 = (state_30733[(2)]);
var inst_30696 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30697 = figwheel.client.heads_up.display_warning.call(null,inst_30696);
var state_30733__$1 = (function (){var statearr_30755 = state_30733;
(statearr_30755[(11)] = inst_30695);

return statearr_30755;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30733__$1,(29),inst_30697);
} else {
if((state_val_30734 === (25))){
var inst_30693 = figwheel.client.heads_up.clear.call(null);
var state_30733__$1 = state_30733;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30733__$1,(28),inst_30693);
} else {
if((state_val_30734 === (34))){
var inst_30714 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30733__$1 = state_30733;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30733__$1,(37),inst_30714);
} else {
if((state_val_30734 === (17))){
var inst_30673 = (state_30733[(2)]);
var inst_30674 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30675 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30674);
var state_30733__$1 = (function (){var statearr_30756 = state_30733;
(statearr_30756[(12)] = inst_30673);

return statearr_30756;
})();
var statearr_30757_30799 = state_30733__$1;
(statearr_30757_30799[(2)] = inst_30675);

(statearr_30757_30799[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30734 === (3))){
var inst_30665 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_30733__$1 = state_30733;
if(cljs.core.truth_(inst_30665)){
var statearr_30758_30800 = state_30733__$1;
(statearr_30758_30800[(1)] = (13));

} else {
var statearr_30759_30801 = state_30733__$1;
(statearr_30759_30801[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30734 === (12))){
var inst_30661 = (state_30733[(2)]);
var state_30733__$1 = state_30733;
var statearr_30760_30802 = state_30733__$1;
(statearr_30760_30802[(2)] = inst_30661);

(statearr_30760_30802[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30734 === (2))){
var inst_30648 = (state_30733[(10)]);
var inst_30648__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_30733__$1 = (function (){var statearr_30761 = state_30733;
(statearr_30761[(10)] = inst_30648__$1);

return statearr_30761;
})();
if(cljs.core.truth_(inst_30648__$1)){
var statearr_30762_30803 = state_30733__$1;
(statearr_30762_30803[(1)] = (5));

} else {
var statearr_30763_30804 = state_30733__$1;
(statearr_30763_30804[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30734 === (23))){
var inst_30691 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_30733__$1 = state_30733;
if(cljs.core.truth_(inst_30691)){
var statearr_30764_30805 = state_30733__$1;
(statearr_30764_30805[(1)] = (25));

} else {
var statearr_30765_30806 = state_30733__$1;
(statearr_30765_30806[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30734 === (35))){
var state_30733__$1 = state_30733;
var statearr_30766_30807 = state_30733__$1;
(statearr_30766_30807[(2)] = null);

(statearr_30766_30807[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30734 === (19))){
var inst_30686 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_30733__$1 = state_30733;
if(cljs.core.truth_(inst_30686)){
var statearr_30767_30808 = state_30733__$1;
(statearr_30767_30808[(1)] = (22));

} else {
var statearr_30768_30809 = state_30733__$1;
(statearr_30768_30809[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30734 === (11))){
var inst_30657 = (state_30733[(2)]);
var state_30733__$1 = state_30733;
var statearr_30769_30810 = state_30733__$1;
(statearr_30769_30810[(2)] = inst_30657);

(statearr_30769_30810[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30734 === (9))){
var inst_30659 = figwheel.client.heads_up.clear.call(null);
var state_30733__$1 = state_30733;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30733__$1,(12),inst_30659);
} else {
if((state_val_30734 === (5))){
var inst_30650 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_30733__$1 = state_30733;
var statearr_30770_30811 = state_30733__$1;
(statearr_30770_30811[(2)] = inst_30650);

(statearr_30770_30811[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30734 === (14))){
var inst_30677 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_30733__$1 = state_30733;
if(cljs.core.truth_(inst_30677)){
var statearr_30771_30812 = state_30733__$1;
(statearr_30771_30812[(1)] = (18));

} else {
var statearr_30772_30813 = state_30733__$1;
(statearr_30772_30813[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30734 === (26))){
var inst_30703 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_30733__$1 = state_30733;
if(cljs.core.truth_(inst_30703)){
var statearr_30773_30814 = state_30733__$1;
(statearr_30773_30814[(1)] = (30));

} else {
var statearr_30774_30815 = state_30733__$1;
(statearr_30774_30815[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30734 === (16))){
var inst_30669 = (state_30733[(2)]);
var inst_30670 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30671 = figwheel.client.heads_up.display_exception.call(null,inst_30670);
var state_30733__$1 = (function (){var statearr_30775 = state_30733;
(statearr_30775[(13)] = inst_30669);

return statearr_30775;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30733__$1,(17),inst_30671);
} else {
if((state_val_30734 === (30))){
var inst_30705 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30706 = figwheel.client.heads_up.display_warning.call(null,inst_30705);
var state_30733__$1 = state_30733;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30733__$1,(33),inst_30706);
} else {
if((state_val_30734 === (10))){
var inst_30663 = (state_30733[(2)]);
var state_30733__$1 = state_30733;
var statearr_30776_30816 = state_30733__$1;
(statearr_30776_30816[(2)] = inst_30663);

(statearr_30776_30816[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30734 === (18))){
var inst_30679 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30680 = figwheel.client.heads_up.display_exception.call(null,inst_30679);
var state_30733__$1 = state_30733;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30733__$1,(21),inst_30680);
} else {
if((state_val_30734 === (37))){
var inst_30716 = (state_30733[(2)]);
var state_30733__$1 = state_30733;
var statearr_30777_30817 = state_30733__$1;
(statearr_30777_30817[(2)] = inst_30716);

(statearr_30777_30817[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30734 === (8))){
var inst_30655 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30733__$1 = state_30733;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30733__$1,(11),inst_30655);
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
});})(c__23769__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__23678__auto__,c__23769__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23679__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23679__auto____0 = (function (){
var statearr_30778 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30778[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23679__auto__);

(statearr_30778[(1)] = (1));

return statearr_30778;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23679__auto____1 = (function (state_30733){
while(true){
var ret_value__23680__auto__ = (function (){try{while(true){
var result__23681__auto__ = switch__23678__auto__.call(null,state_30733);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23681__auto__;
}
break;
}
}catch (e30779){if((e30779 instanceof Object)){
var ex__23682__auto__ = e30779;
var statearr_30780_30818 = state_30733;
(statearr_30780_30818[(5)] = ex__23682__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30733);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30779;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30819 = state_30733;
state_30733 = G__30819;
continue;
} else {
return ret_value__23680__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23679__auto__ = function(state_30733){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23679__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23679__auto____1.call(this,state_30733);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23679__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23679__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23679__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23679__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23679__auto__;
})()
;})(switch__23678__auto__,c__23769__auto__,msg_hist,msg_names,msg))
})();
var state__23771__auto__ = (function (){var statearr_30781 = f__23770__auto__.call(null);
(statearr_30781[(6)] = c__23769__auto__);

return statearr_30781;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23771__auto__);
});})(c__23769__auto__,msg_hist,msg_names,msg))
);

return c__23769__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__23769__auto___30848 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23769__auto___30848,ch){
return (function (){
var f__23770__auto__ = (function (){var switch__23678__auto__ = ((function (c__23769__auto___30848,ch){
return (function (state_30834){
var state_val_30835 = (state_30834[(1)]);
if((state_val_30835 === (1))){
var state_30834__$1 = state_30834;
var statearr_30836_30849 = state_30834__$1;
(statearr_30836_30849[(2)] = null);

(statearr_30836_30849[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30835 === (2))){
var state_30834__$1 = state_30834;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30834__$1,(4),ch);
} else {
if((state_val_30835 === (3))){
var inst_30832 = (state_30834[(2)]);
var state_30834__$1 = state_30834;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30834__$1,inst_30832);
} else {
if((state_val_30835 === (4))){
var inst_30822 = (state_30834[(7)]);
var inst_30822__$1 = (state_30834[(2)]);
var state_30834__$1 = (function (){var statearr_30837 = state_30834;
(statearr_30837[(7)] = inst_30822__$1);

return statearr_30837;
})();
if(cljs.core.truth_(inst_30822__$1)){
var statearr_30838_30850 = state_30834__$1;
(statearr_30838_30850[(1)] = (5));

} else {
var statearr_30839_30851 = state_30834__$1;
(statearr_30839_30851[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30835 === (5))){
var inst_30822 = (state_30834[(7)]);
var inst_30824 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_30822);
var state_30834__$1 = state_30834;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30834__$1,(8),inst_30824);
} else {
if((state_val_30835 === (6))){
var state_30834__$1 = state_30834;
var statearr_30840_30852 = state_30834__$1;
(statearr_30840_30852[(2)] = null);

(statearr_30840_30852[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30835 === (7))){
var inst_30830 = (state_30834[(2)]);
var state_30834__$1 = state_30834;
var statearr_30841_30853 = state_30834__$1;
(statearr_30841_30853[(2)] = inst_30830);

(statearr_30841_30853[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30835 === (8))){
var inst_30826 = (state_30834[(2)]);
var state_30834__$1 = (function (){var statearr_30842 = state_30834;
(statearr_30842[(8)] = inst_30826);

return statearr_30842;
})();
var statearr_30843_30854 = state_30834__$1;
(statearr_30843_30854[(2)] = null);

(statearr_30843_30854[(1)] = (2));


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
});})(c__23769__auto___30848,ch))
;
return ((function (switch__23678__auto__,c__23769__auto___30848,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__23679__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__23679__auto____0 = (function (){
var statearr_30844 = [null,null,null,null,null,null,null,null,null];
(statearr_30844[(0)] = figwheel$client$heads_up_plugin_$_state_machine__23679__auto__);

(statearr_30844[(1)] = (1));

return statearr_30844;
});
var figwheel$client$heads_up_plugin_$_state_machine__23679__auto____1 = (function (state_30834){
while(true){
var ret_value__23680__auto__ = (function (){try{while(true){
var result__23681__auto__ = switch__23678__auto__.call(null,state_30834);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23681__auto__;
}
break;
}
}catch (e30845){if((e30845 instanceof Object)){
var ex__23682__auto__ = e30845;
var statearr_30846_30855 = state_30834;
(statearr_30846_30855[(5)] = ex__23682__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30834);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30845;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30856 = state_30834;
state_30834 = G__30856;
continue;
} else {
return ret_value__23680__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__23679__auto__ = function(state_30834){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__23679__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__23679__auto____1.call(this,state_30834);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__23679__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__23679__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__23679__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__23679__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__23679__auto__;
})()
;})(switch__23678__auto__,c__23769__auto___30848,ch))
})();
var state__23771__auto__ = (function (){var statearr_30847 = f__23770__auto__.call(null);
(statearr_30847[(6)] = c__23769__auto___30848);

return statearr_30847;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23771__auto__);
});})(c__23769__auto___30848,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__23769__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23769__auto__){
return (function (){
var f__23770__auto__ = (function (){var switch__23678__auto__ = ((function (c__23769__auto__){
return (function (state_30862){
var state_val_30863 = (state_30862[(1)]);
if((state_val_30863 === (1))){
var inst_30857 = cljs.core.async.timeout.call(null,(3000));
var state_30862__$1 = state_30862;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30862__$1,(2),inst_30857);
} else {
if((state_val_30863 === (2))){
var inst_30859 = (state_30862[(2)]);
var inst_30860 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_30862__$1 = (function (){var statearr_30864 = state_30862;
(statearr_30864[(7)] = inst_30859);

return statearr_30864;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30862__$1,inst_30860);
} else {
return null;
}
}
});})(c__23769__auto__))
;
return ((function (switch__23678__auto__,c__23769__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__23679__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__23679__auto____0 = (function (){
var statearr_30865 = [null,null,null,null,null,null,null,null];
(statearr_30865[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__23679__auto__);

(statearr_30865[(1)] = (1));

return statearr_30865;
});
var figwheel$client$enforce_project_plugin_$_state_machine__23679__auto____1 = (function (state_30862){
while(true){
var ret_value__23680__auto__ = (function (){try{while(true){
var result__23681__auto__ = switch__23678__auto__.call(null,state_30862);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23681__auto__;
}
break;
}
}catch (e30866){if((e30866 instanceof Object)){
var ex__23682__auto__ = e30866;
var statearr_30867_30869 = state_30862;
(statearr_30867_30869[(5)] = ex__23682__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30862);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30866;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30870 = state_30862;
state_30862 = G__30870;
continue;
} else {
return ret_value__23680__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__23679__auto__ = function(state_30862){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__23679__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__23679__auto____1.call(this,state_30862);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__23679__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__23679__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__23679__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__23679__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__23679__auto__;
})()
;})(switch__23678__auto__,c__23769__auto__))
})();
var state__23771__auto__ = (function (){var statearr_30868 = f__23770__auto__.call(null);
(statearr_30868[(6)] = c__23769__auto__);

return statearr_30868;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23771__auto__);
});})(c__23769__auto__))
);

return c__23769__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5457__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5457__auto__)){
var figwheel_version = temp__5457__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__23769__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23769__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__23770__auto__ = (function (){var switch__23678__auto__ = ((function (c__23769__auto__,figwheel_version,temp__5457__auto__){
return (function (state_30877){
var state_val_30878 = (state_30877[(1)]);
if((state_val_30878 === (1))){
var inst_30871 = cljs.core.async.timeout.call(null,(2000));
var state_30877__$1 = state_30877;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30877__$1,(2),inst_30871);
} else {
if((state_val_30878 === (2))){
var inst_30873 = (state_30877[(2)]);
var inst_30874 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_30875 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_30874);
var state_30877__$1 = (function (){var statearr_30879 = state_30877;
(statearr_30879[(7)] = inst_30873);

return statearr_30879;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30877__$1,inst_30875);
} else {
return null;
}
}
});})(c__23769__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__23678__auto__,c__23769__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23679__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23679__auto____0 = (function (){
var statearr_30880 = [null,null,null,null,null,null,null,null];
(statearr_30880[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23679__auto__);

(statearr_30880[(1)] = (1));

return statearr_30880;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23679__auto____1 = (function (state_30877){
while(true){
var ret_value__23680__auto__ = (function (){try{while(true){
var result__23681__auto__ = switch__23678__auto__.call(null,state_30877);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23681__auto__;
}
break;
}
}catch (e30881){if((e30881 instanceof Object)){
var ex__23682__auto__ = e30881;
var statearr_30882_30884 = state_30877;
(statearr_30882_30884[(5)] = ex__23682__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30877);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30881;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30885 = state_30877;
state_30877 = G__30885;
continue;
} else {
return ret_value__23680__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23679__auto__ = function(state_30877){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23679__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23679__auto____1.call(this,state_30877);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23679__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23679__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23679__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23679__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23679__auto__;
})()
;})(switch__23678__auto__,c__23769__auto__,figwheel_version,temp__5457__auto__))
})();
var state__23771__auto__ = (function (){var statearr_30883 = f__23770__auto__.call(null);
(statearr_30883[(6)] = c__23769__auto__);

return statearr_30883;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23771__auto__);
});})(c__23769__auto__,figwheel_version,temp__5457__auto__))
);

return c__23769__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__30886){
var map__30887 = p__30886;
var map__30887__$1 = ((((!((map__30887 == null)))?(((((map__30887.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30887.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30887):map__30887);
var file = cljs.core.get.call(null,map__30887__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__30887__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__30887__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__30889 = "";
var G__30889__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30889),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__30889);
var G__30889__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30889__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__30889__$1);
if(cljs.core.truth_((function (){var and__3938__auto__ = line;
if(cljs.core.truth_(and__3938__auto__)){
return column;
} else {
return and__3938__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30889__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__30889__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__30890){
var map__30891 = p__30890;
var map__30891__$1 = ((((!((map__30891 == null)))?(((((map__30891.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30891.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30891):map__30891);
var ed = map__30891__$1;
var formatted_exception = cljs.core.get.call(null,map__30891__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__30891__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__30891__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__30893_30897 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__30894_30898 = null;
var count__30895_30899 = (0);
var i__30896_30900 = (0);
while(true){
if((i__30896_30900 < count__30895_30899)){
var msg_30901 = cljs.core._nth.call(null,chunk__30894_30898,i__30896_30900);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_30901);


var G__30902 = seq__30893_30897;
var G__30903 = chunk__30894_30898;
var G__30904 = count__30895_30899;
var G__30905 = (i__30896_30900 + (1));
seq__30893_30897 = G__30902;
chunk__30894_30898 = G__30903;
count__30895_30899 = G__30904;
i__30896_30900 = G__30905;
continue;
} else {
var temp__5457__auto___30906 = cljs.core.seq.call(null,seq__30893_30897);
if(temp__5457__auto___30906){
var seq__30893_30907__$1 = temp__5457__auto___30906;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30893_30907__$1)){
var c__4351__auto___30908 = cljs.core.chunk_first.call(null,seq__30893_30907__$1);
var G__30909 = cljs.core.chunk_rest.call(null,seq__30893_30907__$1);
var G__30910 = c__4351__auto___30908;
var G__30911 = cljs.core.count.call(null,c__4351__auto___30908);
var G__30912 = (0);
seq__30893_30897 = G__30909;
chunk__30894_30898 = G__30910;
count__30895_30899 = G__30911;
i__30896_30900 = G__30912;
continue;
} else {
var msg_30913 = cljs.core.first.call(null,seq__30893_30907__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_30913);


var G__30914 = cljs.core.next.call(null,seq__30893_30907__$1);
var G__30915 = null;
var G__30916 = (0);
var G__30917 = (0);
seq__30893_30897 = G__30914;
chunk__30894_30898 = G__30915;
count__30895_30899 = G__30916;
i__30896_30900 = G__30917;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__30918){
var map__30919 = p__30918;
var map__30919__$1 = ((((!((map__30919 == null)))?(((((map__30919.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30919.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30919):map__30919);
var w = map__30919__$1;
var message = cljs.core.get.call(null,map__30919__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.config_defaults !== 'undefined')){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/cljs/out/figwheel/client.cljs",33,1,361,361,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/cljs/out/figwheel/client.cljs",30,1,353,353,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__3938__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__3938__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__3938__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__30921 = cljs.core.seq.call(null,plugins);
var chunk__30922 = null;
var count__30923 = (0);
var i__30924 = (0);
while(true){
if((i__30924 < count__30923)){
var vec__30925 = cljs.core._nth.call(null,chunk__30922,i__30924);
var k = cljs.core.nth.call(null,vec__30925,(0),null);
var plugin = cljs.core.nth.call(null,vec__30925,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30931 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30921,chunk__30922,count__30923,i__30924,pl_30931,vec__30925,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_30931.call(null,msg_hist);
});})(seq__30921,chunk__30922,count__30923,i__30924,pl_30931,vec__30925,k,plugin))
);
} else {
}


var G__30932 = seq__30921;
var G__30933 = chunk__30922;
var G__30934 = count__30923;
var G__30935 = (i__30924 + (1));
seq__30921 = G__30932;
chunk__30922 = G__30933;
count__30923 = G__30934;
i__30924 = G__30935;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__30921);
if(temp__5457__auto__){
var seq__30921__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30921__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__30921__$1);
var G__30936 = cljs.core.chunk_rest.call(null,seq__30921__$1);
var G__30937 = c__4351__auto__;
var G__30938 = cljs.core.count.call(null,c__4351__auto__);
var G__30939 = (0);
seq__30921 = G__30936;
chunk__30922 = G__30937;
count__30923 = G__30938;
i__30924 = G__30939;
continue;
} else {
var vec__30928 = cljs.core.first.call(null,seq__30921__$1);
var k = cljs.core.nth.call(null,vec__30928,(0),null);
var plugin = cljs.core.nth.call(null,vec__30928,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30940 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30921,chunk__30922,count__30923,i__30924,pl_30940,vec__30928,k,plugin,seq__30921__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_30940.call(null,msg_hist);
});})(seq__30921,chunk__30922,count__30923,i__30924,pl_30940,vec__30928,k,plugin,seq__30921__$1,temp__5457__auto__))
);
} else {
}


var G__30941 = cljs.core.next.call(null,seq__30921__$1);
var G__30942 = null;
var G__30943 = (0);
var G__30944 = (0);
seq__30921 = G__30941;
chunk__30922 = G__30942;
count__30923 = G__30943;
i__30924 = G__30944;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__30946 = arguments.length;
switch (G__30946) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__30947_30952 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__30948_30953 = null;
var count__30949_30954 = (0);
var i__30950_30955 = (0);
while(true){
if((i__30950_30955 < count__30949_30954)){
var msg_30956 = cljs.core._nth.call(null,chunk__30948_30953,i__30950_30955);
figwheel.client.socket.handle_incoming_message.call(null,msg_30956);


var G__30957 = seq__30947_30952;
var G__30958 = chunk__30948_30953;
var G__30959 = count__30949_30954;
var G__30960 = (i__30950_30955 + (1));
seq__30947_30952 = G__30957;
chunk__30948_30953 = G__30958;
count__30949_30954 = G__30959;
i__30950_30955 = G__30960;
continue;
} else {
var temp__5457__auto___30961 = cljs.core.seq.call(null,seq__30947_30952);
if(temp__5457__auto___30961){
var seq__30947_30962__$1 = temp__5457__auto___30961;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30947_30962__$1)){
var c__4351__auto___30963 = cljs.core.chunk_first.call(null,seq__30947_30962__$1);
var G__30964 = cljs.core.chunk_rest.call(null,seq__30947_30962__$1);
var G__30965 = c__4351__auto___30963;
var G__30966 = cljs.core.count.call(null,c__4351__auto___30963);
var G__30967 = (0);
seq__30947_30952 = G__30964;
chunk__30948_30953 = G__30965;
count__30949_30954 = G__30966;
i__30950_30955 = G__30967;
continue;
} else {
var msg_30968 = cljs.core.first.call(null,seq__30947_30962__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_30968);


var G__30969 = cljs.core.next.call(null,seq__30947_30962__$1);
var G__30970 = null;
var G__30971 = (0);
var G__30972 = (0);
seq__30947_30952 = G__30969;
chunk__30948_30953 = G__30970;
count__30949_30954 = G__30971;
i__30950_30955 = G__30972;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4534__auto__ = [];
var len__4531__auto___30977 = arguments.length;
var i__4532__auto___30978 = (0);
while(true){
if((i__4532__auto___30978 < len__4531__auto___30977)){
args__4534__auto__.push((arguments[i__4532__auto___30978]));

var G__30979 = (i__4532__auto___30978 + (1));
i__4532__auto___30978 = G__30979;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__30974){
var map__30975 = p__30974;
var map__30975__$1 = ((((!((map__30975 == null)))?(((((map__30975.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30975.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30975):map__30975);
var opts = map__30975__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq30973){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30973));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e30980){if((e30980 instanceof Error)){
var e = e30980;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e30980;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__30981){
var map__30982 = p__30981;
var map__30982__$1 = ((((!((map__30982 == null)))?(((((map__30982.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30982.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30982):map__30982);
var msg_name = cljs.core.get.call(null,map__30982__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1538856229460
