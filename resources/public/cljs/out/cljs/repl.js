// Compiled by ClojureScript 1.10.339 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__30212){
var map__30213 = p__30212;
var map__30213__$1 = ((((!((map__30213 == null)))?(((((map__30213.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30213.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30213):map__30213);
var m = map__30213__$1;
var n = cljs.core.get.call(null,map__30213__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__30213__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__30215_30237 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30216_30238 = null;
var count__30217_30239 = (0);
var i__30218_30240 = (0);
while(true){
if((i__30218_30240 < count__30217_30239)){
var f_30241 = cljs.core._nth.call(null,chunk__30216_30238,i__30218_30240);
cljs.core.println.call(null,"  ",f_30241);


var G__30242 = seq__30215_30237;
var G__30243 = chunk__30216_30238;
var G__30244 = count__30217_30239;
var G__30245 = (i__30218_30240 + (1));
seq__30215_30237 = G__30242;
chunk__30216_30238 = G__30243;
count__30217_30239 = G__30244;
i__30218_30240 = G__30245;
continue;
} else {
var temp__5457__auto___30246 = cljs.core.seq.call(null,seq__30215_30237);
if(temp__5457__auto___30246){
var seq__30215_30247__$1 = temp__5457__auto___30246;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30215_30247__$1)){
var c__4351__auto___30248 = cljs.core.chunk_first.call(null,seq__30215_30247__$1);
var G__30249 = cljs.core.chunk_rest.call(null,seq__30215_30247__$1);
var G__30250 = c__4351__auto___30248;
var G__30251 = cljs.core.count.call(null,c__4351__auto___30248);
var G__30252 = (0);
seq__30215_30237 = G__30249;
chunk__30216_30238 = G__30250;
count__30217_30239 = G__30251;
i__30218_30240 = G__30252;
continue;
} else {
var f_30253 = cljs.core.first.call(null,seq__30215_30247__$1);
cljs.core.println.call(null,"  ",f_30253);


var G__30254 = cljs.core.next.call(null,seq__30215_30247__$1);
var G__30255 = null;
var G__30256 = (0);
var G__30257 = (0);
seq__30215_30237 = G__30254;
chunk__30216_30238 = G__30255;
count__30217_30239 = G__30256;
i__30218_30240 = G__30257;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_30258 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3949__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_30258);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_30258)))?cljs.core.second.call(null,arglists_30258):arglists_30258));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__30219_30259 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30220_30260 = null;
var count__30221_30261 = (0);
var i__30222_30262 = (0);
while(true){
if((i__30222_30262 < count__30221_30261)){
var vec__30223_30263 = cljs.core._nth.call(null,chunk__30220_30260,i__30222_30262);
var name_30264 = cljs.core.nth.call(null,vec__30223_30263,(0),null);
var map__30226_30265 = cljs.core.nth.call(null,vec__30223_30263,(1),null);
var map__30226_30266__$1 = ((((!((map__30226_30265 == null)))?(((((map__30226_30265.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30226_30265.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30226_30265):map__30226_30265);
var doc_30267 = cljs.core.get.call(null,map__30226_30266__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_30268 = cljs.core.get.call(null,map__30226_30266__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_30264);

cljs.core.println.call(null," ",arglists_30268);

if(cljs.core.truth_(doc_30267)){
cljs.core.println.call(null," ",doc_30267);
} else {
}


var G__30269 = seq__30219_30259;
var G__30270 = chunk__30220_30260;
var G__30271 = count__30221_30261;
var G__30272 = (i__30222_30262 + (1));
seq__30219_30259 = G__30269;
chunk__30220_30260 = G__30270;
count__30221_30261 = G__30271;
i__30222_30262 = G__30272;
continue;
} else {
var temp__5457__auto___30273 = cljs.core.seq.call(null,seq__30219_30259);
if(temp__5457__auto___30273){
var seq__30219_30274__$1 = temp__5457__auto___30273;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30219_30274__$1)){
var c__4351__auto___30275 = cljs.core.chunk_first.call(null,seq__30219_30274__$1);
var G__30276 = cljs.core.chunk_rest.call(null,seq__30219_30274__$1);
var G__30277 = c__4351__auto___30275;
var G__30278 = cljs.core.count.call(null,c__4351__auto___30275);
var G__30279 = (0);
seq__30219_30259 = G__30276;
chunk__30220_30260 = G__30277;
count__30221_30261 = G__30278;
i__30222_30262 = G__30279;
continue;
} else {
var vec__30228_30280 = cljs.core.first.call(null,seq__30219_30274__$1);
var name_30281 = cljs.core.nth.call(null,vec__30228_30280,(0),null);
var map__30231_30282 = cljs.core.nth.call(null,vec__30228_30280,(1),null);
var map__30231_30283__$1 = ((((!((map__30231_30282 == null)))?(((((map__30231_30282.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30231_30282.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30231_30282):map__30231_30282);
var doc_30284 = cljs.core.get.call(null,map__30231_30283__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_30285 = cljs.core.get.call(null,map__30231_30283__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_30281);

cljs.core.println.call(null," ",arglists_30285);

if(cljs.core.truth_(doc_30284)){
cljs.core.println.call(null," ",doc_30284);
} else {
}


var G__30286 = cljs.core.next.call(null,seq__30219_30274__$1);
var G__30287 = null;
var G__30288 = (0);
var G__30289 = (0);
seq__30219_30259 = G__30286;
chunk__30220_30260 = G__30287;
count__30221_30261 = G__30288;
i__30222_30262 = G__30289;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__30233 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__30234 = null;
var count__30235 = (0);
var i__30236 = (0);
while(true){
if((i__30236 < count__30235)){
var role = cljs.core._nth.call(null,chunk__30234,i__30236);
var temp__5457__auto___30290__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___30290__$1)){
var spec_30291 = temp__5457__auto___30290__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_30291));
} else {
}


var G__30292 = seq__30233;
var G__30293 = chunk__30234;
var G__30294 = count__30235;
var G__30295 = (i__30236 + (1));
seq__30233 = G__30292;
chunk__30234 = G__30293;
count__30235 = G__30294;
i__30236 = G__30295;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__30233);
if(temp__5457__auto____$1){
var seq__30233__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30233__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__30233__$1);
var G__30296 = cljs.core.chunk_rest.call(null,seq__30233__$1);
var G__30297 = c__4351__auto__;
var G__30298 = cljs.core.count.call(null,c__4351__auto__);
var G__30299 = (0);
seq__30233 = G__30296;
chunk__30234 = G__30297;
count__30235 = G__30298;
i__30236 = G__30299;
continue;
} else {
var role = cljs.core.first.call(null,seq__30233__$1);
var temp__5457__auto___30300__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___30300__$2)){
var spec_30301 = temp__5457__auto___30300__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_30301));
} else {
}


var G__30302 = cljs.core.next.call(null,seq__30233__$1);
var G__30303 = null;
var G__30304 = (0);
var G__30305 = (0);
seq__30233 = G__30302;
chunk__30234 = G__30303;
count__30235 = G__30304;
i__30236 = G__30305;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1538856228956
