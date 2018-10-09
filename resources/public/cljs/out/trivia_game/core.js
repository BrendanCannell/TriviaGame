// Compiled by ClojureScript 1.10.339 {}
goog.provide('trivia_game.core');
goog.require('cljs.core');
goog.require('hipo.core');
goog.require('cljs.core.match');
goog.require('cljs.core.async');




cljs.core.enable_console_print_BANG_.call(null);
trivia_game.core.container = (function (){var v4628 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.game","div.game",1488032861)], null);
var el__1535__auto__ = hipo.interpreter.create.call(null,v4628,null);
hipo.core.set_hiccup_BANG_.call(null,el__1535__auto__,v4628);

return el__1535__auto__;
})();
document.body.appendChild(trivia_game.core.container);
trivia_game.core.trivia_puzzles = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"question","question",-1411720117),"What was the first full length CGI movie?",new cljs.core.Keyword(null,"answers","answers",-2066449770),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["A Bug's Life","Monsters Inc.","Toy Story","The Lion King"], null),new cljs.core.Keyword(null,"correct","correct",984806334),"Toy Story"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"question","question",-1411720117),"Which of these is NOT a name of one of the Spice Girls?",new cljs.core.Keyword(null,"answers","answers",-2066449770),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Sporty Spice","Scary Spice","Fred Spice","Posh Spice"], null),new cljs.core.Keyword(null,"correct","correct",984806334),"Fred Spice"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"question","question",-1411720117),"Which NBA team won the most titles in the 90s?",new cljs.core.Keyword(null,"answers","answers",-2066449770),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["New York Knicks","Portland Trailblazers","Los Angeles Lakers","Chicago Bulls"], null),new cljs.core.Keyword(null,"correct","correct",984806334),"Chicago Bulls"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"question","question",-1411720117),"Which group released the hit song, \"Smells Like Teen Spirit\"?",new cljs.core.Keyword(null,"answers","answers",-2066449770),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Nirvana","Backstreet Boys","The Offspring","No Doubt"], null),new cljs.core.Keyword(null,"correct","correct",984806334),"Nirvana"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"question","question",-1411720117),"Which popular Disney movie featured the song, \"Circle of Life\"?",new cljs.core.Keyword(null,"answers","answers",-2066449770),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Aladdin","Hercules","Mulan","The Lion King"], null),new cljs.core.Keyword(null,"correct","correct",984806334),"The Lion King"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"question","question",-1411720117),"Finish this line from the Fresh Prince of Bel-Air theme song: \"I whistled for a cab and when it came near, the license plate said...\"",new cljs.core.Keyword(null,"answers","answers",-2066449770),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Dice","Mirror","Fresh","Cab"], null),new cljs.core.Keyword(null,"correct","correct",984806334),"Fresh"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"question","question",-1411720117),"What was Doug's best friend's name",new cljs.core.Keyword(null,"answers","answers",-2066449770),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Skeeter","Mark","Zach","Cody"], null),new cljs.core.Keyword(null,"correct","correct",984806334),"Skeeter"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"question","question",-1411720117),"What was the name of the principal at Bayside High in Saved By the Bell?",new cljs.core.Keyword(null,"answers","answers",-2066449770),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Mr. Zhou","Mr. Driggers","Mr. Belding","Mr. Page"], null),new cljs.core.Keyword(null,"correct","correct",984806334),"Mr. Belding"], null)], null);
trivia_game.core.time_to_answer = (30);
trivia_game.core.time_to_view_result = (4);
var c__4569__auto___4647 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__4569__auto___4647){
return (function (){
var f__4570__auto__ = (function (){var switch__4546__auto__ = ((function (c__4569__auto___4647){
return (function (state_4638){
var state_val_4639 = (state_4638[(1)]);
if((state_val_4639 === (1))){
var state_4638__$1 = state_4638;
var statearr_4640_4648 = state_4638__$1;
(statearr_4640_4648[(2)] = null);

(statearr_4640_4648[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4639 === (2))){
var inst_4630 = cljs.core.async.timeout.call(null,(1000));
var state_4638__$1 = state_4638;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4638__$1,(4),inst_4630);
} else {
if((state_val_4639 === (3))){
var inst_4636 = (state_4638[(2)]);
var state_4638__$1 = state_4638;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4638__$1,inst_4636);
} else {
if((state_val_4639 === (4))){
var inst_4632 = (state_4638[(2)]);
var inst_4633 = trivia_game.core.dispatch.call(null,trivia_game.core.tick);
var state_4638__$1 = (function (){var statearr_4641 = state_4638;
(statearr_4641[(7)] = inst_4632);

(statearr_4641[(8)] = inst_4633);

return statearr_4641;
})();
var statearr_4642_4649 = state_4638__$1;
(statearr_4642_4649[(2)] = null);

(statearr_4642_4649[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__4569__auto___4647))
;
return ((function (switch__4546__auto__,c__4569__auto___4647){
return (function() {
var trivia_game$core$state_machine__4547__auto__ = null;
var trivia_game$core$state_machine__4547__auto____0 = (function (){
var statearr_4643 = [null,null,null,null,null,null,null,null,null];
(statearr_4643[(0)] = trivia_game$core$state_machine__4547__auto__);

(statearr_4643[(1)] = (1));

return statearr_4643;
});
var trivia_game$core$state_machine__4547__auto____1 = (function (state_4638){
while(true){
var ret_value__4548__auto__ = (function (){try{while(true){
var result__4549__auto__ = switch__4546__auto__.call(null,state_4638);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4549__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4549__auto__;
}
break;
}
}catch (e4644){if((e4644 instanceof Object)){
var ex__4550__auto__ = e4644;
var statearr_4645_4650 = state_4638;
(statearr_4645_4650[(5)] = ex__4550__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4638);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4644;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4548__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4651 = state_4638;
state_4638 = G__4651;
continue;
} else {
return ret_value__4548__auto__;
}
break;
}
});
trivia_game$core$state_machine__4547__auto__ = function(state_4638){
switch(arguments.length){
case 0:
return trivia_game$core$state_machine__4547__auto____0.call(this);
case 1:
return trivia_game$core$state_machine__4547__auto____1.call(this,state_4638);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
trivia_game$core$state_machine__4547__auto__.cljs$core$IFn$_invoke$arity$0 = trivia_game$core$state_machine__4547__auto____0;
trivia_game$core$state_machine__4547__auto__.cljs$core$IFn$_invoke$arity$1 = trivia_game$core$state_machine__4547__auto____1;
return trivia_game$core$state_machine__4547__auto__;
})()
;})(switch__4546__auto__,c__4569__auto___4647))
})();
var state__4571__auto__ = (function (){var statearr_4646 = f__4570__auto__.call(null);
(statearr_4646[(6)] = c__4569__auto___4647);

return statearr_4646;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4571__auto__);
});})(c__4569__auto___4647))
);

cljs.core.prn.call(null,"here");
trivia_game.core.waiting_state = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"wait-for-start","wait-for-start",-779888357)], null);
trivia_game.core.initial_state = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"show-question","show-question",-513068092),new cljs.core.Keyword(null,"time","time",1385887882),trivia_game.core.time_to_answer,new cljs.core.Keyword(null,"puzzle-id","puzzle-id",-636088993),(0),new cljs.core.Keyword(null,"total-correct","total-correct",-1575937669),(0),new cljs.core.Keyword(null,"total-incorrect","total-incorrect",1964739388),(0),new cljs.core.Keyword(null,"total-unanswered","total-unanswered",947218672),(0)], null);
trivia_game.core.store = cljs.core.atom.call(null,trivia_game.core.waiting_state);
trivia_game.core.dispatch = (function trivia_game$core$dispatch(action){
cljs.core.swap_BANG_.call(null,trivia_game.core.store,(function (p1__4652_SHARP_){
return trivia_game.core.next_state.call(null,action,p1__4652_SHARP_);
}));

return hipo.core.reconciliate_BANG_.call(null,trivia_game.core.container,trivia_game.core.render.call(null,cljs.core.deref.call(null,trivia_game.core.store)));
});
trivia_game.core.tick = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"tick","tick",-835886976)], null);
trivia_game.core.start = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"start","start",-355208981)], null);
trivia_game.core.response = (function trivia_game$core$response(ans){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"response","response",-1068424192),new cljs.core.Keyword(null,"val","val",128701612),ans], null);
});
trivia_game.core.decrement_time = (function trivia_game$core$decrement_time(state){
return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time","time",1385887882)], null),cljs.core.dec);
});
trivia_game.core.show_question_timed_out = (function trivia_game$core$show_question_timed_out(state){
return cljs.core.update_in.call(null,cljs.core.dissoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"show-answer","show-answer",876509201)),new cljs.core.Keyword(null,"time","time",1385887882),trivia_game.core.time_to_view_result),new cljs.core.Keyword(null,"last-response","last-response",-1850515372)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"total-unanswered","total-unanswered",947218672)], null),cljs.core.inc);
});
trivia_game.core.game_over = (function trivia_game$core$game_over(state){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"over","over",192553051)),new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"puzzle-id","puzzle-id",-636088993));
});
trivia_game.core.show_next_question = (function trivia_game$core$show_next_question(state){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"show-question","show-question",-513068092)),new cljs.core.Keyword(null,"time","time",1385887882),trivia_game.core.time_to_answer),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"puzzle-id","puzzle-id",-636088993)], null),cljs.core.inc);
});
trivia_game.core.show_answer_timed_out = (function trivia_game$core$show_answer_timed_out(state){
var id = new cljs.core.Keyword(null,"puzzle-id","puzzle-id",-636088993).cljs$core$IFn$_invoke$arity$1(state);
var max_puzzle_id = (cljs.core.count.call(null,trivia_game.core.trivia_puzzles) - (1));
var out_of_puzzles_QMARK_ = cljs.core._EQ_.call(null,id,max_puzzle_id);
if(out_of_puzzles_QMARK_){
return trivia_game.core.game_over.call(null,state);
} else {
return trivia_game.core.show_next_question.call(null,state);
}
});
trivia_game.core.next_state_COLON_tick = (function trivia_game$core$next_state_COLON_tick(_,state){
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(state))){
return state;
} else {
if((new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(state) > (1))){
return trivia_game.core.decrement_time.call(null,state);
} else {
var ocr_4653 = new cljs.core.Keyword(null,"phase","phase",575722892).cljs$core$IFn$_invoke$arity$1(state);
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_4653,new cljs.core.Keyword(null,"show-question","show-question",-513068092))){
return trivia_game.core.show_question_timed_out.call(null,state);
} else {
throw cljs.core.match.backtrack;

}
}catch (e4655){if((e4655 instanceof Error)){
var e__2061__auto__ = e4655;
if((e__2061__auto__ === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_4653,new cljs.core.Keyword(null,"show-answer","show-answer",876509201))){
return trivia_game.core.show_answer_timed_out.call(null,state);
} else {
throw cljs.core.match.backtrack;

}
}catch (e4656){if((e4656 instanceof Error)){
var e__2061__auto____$1 = e4656;
if((e__2061__auto____$1 === cljs.core.match.backtrack)){
return state;
} else {
throw e__2061__auto____$1;
}
} else {
throw e4656;

}
}} else {
throw e__2061__auto__;
}
} else {
throw e4655;

}
}
}
}
});
trivia_game.core.next_state_COLON_response = (function trivia_game$core$next_state_COLON_response(action,state){
var response = new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(action);
var puzzle = cljs.core.nth.call(null,trivia_game.core.trivia_puzzles,new cljs.core.Keyword(null,"puzzle-id","puzzle-id",-636088993).cljs$core$IFn$_invoke$arity$1(state));
var correct_QMARK_ = cljs.core._EQ_.call(null,response,new cljs.core.Keyword(null,"correct","correct",984806334).cljs$core$IFn$_invoke$arity$1(puzzle));
var total_to_inc = ((correct_QMARK_)?new cljs.core.Keyword(null,"total-correct","total-correct",-1575937669):new cljs.core.Keyword(null,"total-incorrect","total-incorrect",1964739388));
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"show-answer","show-answer",876509201)),new cljs.core.Keyword(null,"time","time",1385887882),trivia_game.core.time_to_view_result),new cljs.core.Keyword(null,"last-response","last-response",-1850515372),response),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [total_to_inc], null),cljs.core.inc);
});
trivia_game.core.next_state = (function trivia_game$core$next_state(action,state){
var type__GT_reducer = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tick","tick",-835886976),trivia_game.core.next_state_COLON_tick,new cljs.core.Keyword(null,"response","response",-1068424192),trivia_game.core.next_state_COLON_response,new cljs.core.Keyword(null,"start","start",-355208981),(function (){
return trivia_game.core.initial_state;
})], null);
var reducer = type__GT_reducer.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(action),((function (type__GT_reducer){
return (function (){
return state;
});})(type__GT_reducer))
);
return reducer.call(null,action,state);
});
trivia_game.core.render_COLON_show_question = (function trivia_game$core$render_COLON_show_question(state){
var map__4657 = cljs.core.get.call(null,trivia_game.core.trivia_puzzles,new cljs.core.Keyword(null,"puzzle-id","puzzle-id",-636088993).cljs$core$IFn$_invoke$arity$1(state));
var map__4657__$1 = ((((!((map__4657 == null)))?(((((map__4657.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4657.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4657):map__4657);
var question = cljs.core.get.call(null,map__4657__$1,new cljs.core.Keyword(null,"question","question",-1411720117));
var answers = cljs.core.get.call(null,map__4657__$1,new cljs.core.Keyword(null,"answers","answers",-2066449770));
var rendered_answers = (function (){var iter__4324__auto__ = ((function (map__4657,map__4657__$1,question,answers){
return (function trivia_game$core$render_COLON_show_question_$_iter__4659(s__4660){
return (new cljs.core.LazySeq(null,((function (map__4657,map__4657__$1,question,answers){
return (function (){
var s__4660__$1 = s__4660;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__4660__$1);
if(temp__5457__auto__){
var s__4660__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4660__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__4660__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__4662 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__4661 = (0);
while(true){
if((i__4661 < size__4323__auto__)){
var ans = cljs.core._nth.call(null,c__4322__auto__,i__4661);
cljs.core.chunk_append.call(null,b__4662,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.answer.btn","li.answer.btn",-2097799590),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__4661,ans,c__4322__auto__,size__4323__auto__,b__4662,s__4660__$2,temp__5457__auto__,map__4657,map__4657__$1,question,answers){
return (function (){
return trivia_game.core.dispatch.call(null,trivia_game.core.response.call(null,ans));
});})(i__4661,ans,c__4322__auto__,size__4323__auto__,b__4662,s__4660__$2,temp__5457__auto__,map__4657,map__4657__$1,question,answers))
], null),ans], null));

var G__4663 = (i__4661 + (1));
i__4661 = G__4663;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4662),trivia_game$core$render_COLON_show_question_$_iter__4659.call(null,cljs.core.chunk_rest.call(null,s__4660__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4662),null);
}
} else {
var ans = cljs.core.first.call(null,s__4660__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.answer.btn","li.answer.btn",-2097799590),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (ans,s__4660__$2,temp__5457__auto__,map__4657,map__4657__$1,question,answers){
return (function (){
return trivia_game.core.dispatch.call(null,trivia_game.core.response.call(null,ans));
});})(ans,s__4660__$2,temp__5457__auto__,map__4657,map__4657__$1,question,answers))
], null),ans], null),trivia_game$core$render_COLON_show_question_$_iter__4659.call(null,cljs.core.rest.call(null,s__4660__$2)));
}
} else {
return null;
}
break;
}
});})(map__4657,map__4657__$1,question,answers))
,null,null));
});})(map__4657,map__4657__$1,question,answers))
;
return iter__4324__auto__.call(null,answers);
})();
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.main","div.main",-117780813),question,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.answers","ul.answers",875064236),rendered_answers], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.time","div.time",261142004),["Time remaining: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(state))].join('')], null)], null);
});
trivia_game.core.render_COLON_show_answer = (function trivia_game$core$render_COLON_show_answer(state){
var map__4664 = state;
var map__4664__$1 = ((((!((map__4664 == null)))?(((((map__4664.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4664.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4664):map__4664);
var puzzle_id = cljs.core.get.call(null,map__4664__$1,new cljs.core.Keyword(null,"puzzle-id","puzzle-id",-636088993));
var last_response = cljs.core.get.call(null,map__4664__$1,new cljs.core.Keyword(null,"last-response","last-response",-1850515372));
var map__4665 = cljs.core.get.call(null,trivia_game.core.trivia_puzzles,puzzle_id);
var map__4665__$1 = ((((!((map__4665 == null)))?(((((map__4665.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4665.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4665):map__4665);
var answers = cljs.core.get.call(null,map__4665__$1,new cljs.core.Keyword(null,"answers","answers",-2066449770));
var correct = cljs.core.get.call(null,map__4665__$1,new cljs.core.Keyword(null,"correct","correct",984806334));
if(cljs.core.not.call(null,last_response)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.main","div.main",-117780813),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.result","div.result",285078839),"Out of Time!"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.last-correct","div.last-correct",873588343),["The Correct Answer was: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(correct)].join('')], null)], null);
} else {
if(cljs.core._EQ_.call(null,correct,last_response)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.result","div.result",285078839),"Correct!"], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.main","div.main",-117780813),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.result","div.result",285078839),"Nope!"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.correct","div.correct",1375041720),["The Correct Answer was: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(correct)].join('')], null)], null);

}
}
});
trivia_game.core.render_COLON_over = (function trivia_game$core$render_COLON_over(state){
var map__4668 = state;
var map__4668__$1 = ((((!((map__4668 == null)))?(((((map__4668.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4668.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4668):map__4668);
var total_correct = cljs.core.get.call(null,map__4668__$1,new cljs.core.Keyword(null,"total-correct","total-correct",-1575937669));
var total_incorrect = cljs.core.get.call(null,map__4668__$1,new cljs.core.Keyword(null,"total-incorrect","total-incorrect",1964739388));
var total_unanswered = cljs.core.get.call(null,map__4668__$1,new cljs.core.Keyword(null,"total-unanswered","total-unanswered",947218672));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.main","div.main",-117780813),"All done, heres how you did!",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.correct","div.correct",1375041720),["Correct Answers: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(total_correct)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.incorrect","div.incorrect",-540616247),["Incorrect Answers: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(total_incorrect)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.unanswered","div.unanswered",235766044),["Unanswered: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(total_unanswered)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.start.btn","div.start.btn",718299265),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__4668,map__4668__$1,total_correct,total_incorrect,total_unanswered){
return (function (){
return trivia_game.core.dispatch.call(null,trivia_game.core.start);
});})(map__4668,map__4668__$1,total_correct,total_incorrect,total_unanswered))
], null),"Start Over?"], null)], null);
});
trivia_game.core.render = (function trivia_game$core$render(state){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.game","div.game",1488032861),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.heading","div.heading",-1527964144),"Totally Trivial Trivia!"], null),(function (){var ocr_4670 = new cljs.core.Keyword(null,"phase","phase",575722892).cljs$core$IFn$_invoke$arity$1(state);
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_4670,new cljs.core.Keyword(null,"wait-for-start","wait-for-start",-779888357))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.start.btn","div.start.btn",718299265),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (ocr_4670){
return (function (){
return trivia_game.core.dispatch.call(null,trivia_game.core.start);
});})(ocr_4670))
], null),"Start"], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e4672){if((e4672 instanceof Error)){
var e__2061__auto__ = e4672;
if((e__2061__auto__ === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_4670,new cljs.core.Keyword(null,"show-question","show-question",-513068092))){
return trivia_game.core.render_COLON_show_question.call(null,state);
} else {
throw cljs.core.match.backtrack;

}
}catch (e4673){if((e4673 instanceof Error)){
var e__2061__auto____$1 = e4673;
if((e__2061__auto____$1 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_4670,new cljs.core.Keyword(null,"show-answer","show-answer",876509201))){
return trivia_game.core.render_COLON_show_answer.call(null,state);
} else {
throw cljs.core.match.backtrack;

}
}catch (e4674){if((e4674 instanceof Error)){
var e__2061__auto____$2 = e4674;
if((e__2061__auto____$2 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_4670,new cljs.core.Keyword(null,"over","over",192553051))){
return trivia_game.core.render_COLON_over.call(null,state);
} else {
throw cljs.core.match.backtrack;

}
}catch (e4675){if((e4675 instanceof Error)){
var e__2061__auto____$3 = e4675;
if((e__2061__auto____$3 === cljs.core.match.backtrack)){
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ocr_4670)].join('')));
} else {
throw e__2061__auto____$3;
}
} else {
throw e4675;

}
}} else {
throw e__2061__auto____$2;
}
} else {
throw e4674;

}
}} else {
throw e__2061__auto____$1;
}
} else {
throw e4673;

}
}} else {
throw e__2061__auto__;
}
} else {
throw e4672;

}
}})()], null);
});

//# sourceMappingURL=core.js.map?rel=1539124348633
