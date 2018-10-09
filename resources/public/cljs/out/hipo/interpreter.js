// Compiled by ClojureScript 1.10.339 {}
goog.provide('hipo.interpreter');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('hipo.attribute');
goog.require('hipo.dom');
goog.require('hipo.hiccup');
goog.require('hipo.interceptor');
hipo.interpreter.set_attribute_BANG_ = (function hipo$interpreter$set_attribute_BANG_(el,ns,tag,sok,ov,nv,p__21990){
var map__21991 = p__21990;
var map__21991__$1 = ((((!((map__21991 == null)))?(((((map__21991.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21991.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21991):map__21991);
var m = map__21991__$1;
var interceptors = cljs.core.get.call(null,map__21991__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
if(!((ov === nv))){
var temp__5455__auto__ = hipo.hiccup.listener_name__GT_event_name.call(null,cljs.core.name.call(null,sok));
if(cljs.core.truth_(temp__5455__auto__)){
var en = temp__5455__auto__;
if(!(((cljs.core.map_QMARK_.call(null,ov)) && (cljs.core.map_QMARK_.call(null,nv)) && ((new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ov) === new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(nv)))))){
var b__21869__auto__ = ((function (en,temp__5455__auto__,map__21991,map__21991__$1,m,interceptors){
return (function (){
var hn = ["hipo_listener_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(en)].join('');
var temp__5455__auto___21993__$1 = (el[hn]);
if(cljs.core.truth_(temp__5455__auto___21993__$1)){
var l_21994 = temp__5455__auto___21993__$1;
el.removeEventListener(en,l_21994);
} else {
}

var temp__5457__auto__ = (function (){var or__3949__auto__ = new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(nv);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return nv;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var nv__$1 = temp__5457__auto__;
el.addEventListener(en,nv__$1);

return (el[hn] = nv__$1);
} else {
return null;
}
});})(en,temp__5455__auto__,map__21991,map__21991__$1,m,interceptors))
;
var v__21870__auto__ = interceptors;
if(((cljs.core.not.call(null,v__21870__auto__)) || (cljs.core.empty_QMARK_.call(null,v__21870__auto__)))){
return b__21869__auto__.call(null);
} else {
return hipo.interceptor.call.call(null,b__21869__auto__,v__21870__auto__,(cljs.core.truth_(nv)?new cljs.core.Keyword(null,"update-handler","update-handler",1389859106):new cljs.core.Keyword(null,"remove-handler","remove-handler",389960218)),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"name","name",1843675177),sok,new cljs.core.Keyword(null,"old-value","old-value",862546795),ov], null),(cljs.core.truth_(nv)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"new-value","new-value",1087038368),nv], null):null)));
}
} else {
return null;
}
} else {
var b__21869__auto__ = ((function (temp__5455__auto__,map__21991,map__21991__$1,m,interceptors){
return (function (){
return hipo.attribute.set_value_BANG_.call(null,el,m,ns,tag,sok,ov,nv);
});})(temp__5455__auto__,map__21991,map__21991__$1,m,interceptors))
;
var v__21870__auto__ = interceptors;
if(((cljs.core.not.call(null,v__21870__auto__)) || (cljs.core.empty_QMARK_.call(null,v__21870__auto__)))){
return b__21869__auto__.call(null);
} else {
return hipo.interceptor.call.call(null,b__21869__auto__,v__21870__auto__,(cljs.core.truth_(nv)?new cljs.core.Keyword(null,"update-attribute","update-attribute",102770530):new cljs.core.Keyword(null,"remove-attribute","remove-attribute",552745626)),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"name","name",1843675177),sok,new cljs.core.Keyword(null,"old-value","old-value",862546795),ov], null),(cljs.core.truth_(nv)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"new-value","new-value",1087038368),nv], null):null)));
}
}
} else {
return null;
}
});
hipo.interpreter.append_children_BANG_ = (function hipo$interpreter$append_children_BANG_(el,v,m){
if(cljs.core.vector_QMARK_.call(null,v)){
} else {
throw (new Error("Assert failed: (vector? v)"));
}

var v__$1 = hipo.hiccup.flatten_children.call(null,v);
while(true){
if(cljs.core.empty_QMARK_.call(null,v__$1)){
return null;
} else {
var temp__5455__auto___21995 = cljs.core.nth.call(null,v__$1,(0));
if(cljs.core.truth_(temp__5455__auto___21995)){
var h_21996 = temp__5455__auto___21995;
el.appendChild(hipo.interpreter.create_child.call(null,h_21996,m));
} else {
}

var G__21997 = cljs.core.rest.call(null,v__$1);
v__$1 = G__21997;
continue;
}
break;
}
});
hipo.interpreter.default_create_element = (function hipo$interpreter$default_create_element(ns,tag,attrs,m){
var el = hipo.dom.create_element.call(null,ns,tag);
var seq__21998_22008 = cljs.core.seq.call(null,attrs);
var chunk__21999_22009 = null;
var count__22000_22010 = (0);
var i__22001_22011 = (0);
while(true){
if((i__22001_22011 < count__22000_22010)){
var vec__22002_22012 = cljs.core._nth.call(null,chunk__21999_22009,i__22001_22011);
var sok_22013 = cljs.core.nth.call(null,vec__22002_22012,(0),null);
var v_22014 = cljs.core.nth.call(null,vec__22002_22012,(1),null);
if(cljs.core.truth_(v_22014)){
hipo.interpreter.set_attribute_BANG_.call(null,el,ns,tag,sok_22013,null,v_22014,m);
} else {
}


var G__22015 = seq__21998_22008;
var G__22016 = chunk__21999_22009;
var G__22017 = count__22000_22010;
var G__22018 = (i__22001_22011 + (1));
seq__21998_22008 = G__22015;
chunk__21999_22009 = G__22016;
count__22000_22010 = G__22017;
i__22001_22011 = G__22018;
continue;
} else {
var temp__5457__auto___22019 = cljs.core.seq.call(null,seq__21998_22008);
if(temp__5457__auto___22019){
var seq__21998_22020__$1 = temp__5457__auto___22019;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21998_22020__$1)){
var c__4351__auto___22021 = cljs.core.chunk_first.call(null,seq__21998_22020__$1);
var G__22022 = cljs.core.chunk_rest.call(null,seq__21998_22020__$1);
var G__22023 = c__4351__auto___22021;
var G__22024 = cljs.core.count.call(null,c__4351__auto___22021);
var G__22025 = (0);
seq__21998_22008 = G__22022;
chunk__21999_22009 = G__22023;
count__22000_22010 = G__22024;
i__22001_22011 = G__22025;
continue;
} else {
var vec__22005_22026 = cljs.core.first.call(null,seq__21998_22020__$1);
var sok_22027 = cljs.core.nth.call(null,vec__22005_22026,(0),null);
var v_22028 = cljs.core.nth.call(null,vec__22005_22026,(1),null);
if(cljs.core.truth_(v_22028)){
hipo.interpreter.set_attribute_BANG_.call(null,el,ns,tag,sok_22027,null,v_22028,m);
} else {
}


var G__22029 = cljs.core.next.call(null,seq__21998_22020__$1);
var G__22030 = null;
var G__22031 = (0);
var G__22032 = (0);
seq__21998_22008 = G__22029;
chunk__21999_22009 = G__22030;
count__22000_22010 = G__22031;
i__22001_22011 = G__22032;
continue;
}
} else {
}
}
break;
}

return el;
});
hipo.interpreter.create_element = (function hipo$interpreter$create_element(ns,tag,attrs,m){
var temp__5455__auto__ = new cljs.core.Keyword(null,"create-element-fn","create-element-fn",827380427).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5455__auto__)){
var f = temp__5455__auto__;
return f.call(null,ns,tag,attrs,m);
} else {
return hipo.interpreter.default_create_element.call(null,ns,tag,attrs,m);
}
});
hipo.interpreter.create_vector = (function hipo$interpreter$create_vector(h,m){
if(cljs.core.vector_QMARK_.call(null,h)){
} else {
throw (new Error("Assert failed: (vector? h)"));
}

var key = hipo.hiccup.keyns.call(null,h);
var tag = hipo.hiccup.tag.call(null,h);
var attrs = hipo.hiccup.attributes.call(null,h);
var children = hipo.hiccup.children.call(null,h);
var el = hipo.interpreter.create_element.call(null,hipo.hiccup.key__GT_namespace.call(null,key,m),tag,attrs,m);
if(cljs.core.truth_(children)){
hipo.interpreter.append_children_BANG_.call(null,el,children,m);
} else {
}

return el;
});
hipo.interpreter.create_child = (function hipo$interpreter$create_child(o,m){
if(cljs.core.truth_((function (){var or__3949__auto__ = hipo.hiccup.literal_QMARK_.call(null,o);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.vector_QMARK_.call(null,o);
}
})())){
} else {
throw (new Error("Assert failed: (or (hic/literal? o) (vector? o))"));
}

if(cljs.core.truth_(hipo.hiccup.literal_QMARK_.call(null,o))){
return document.createTextNode(o);
} else {
return hipo.interpreter.create_vector.call(null,o,m);
}
});
hipo.interpreter.append_to_parent = (function hipo$interpreter$append_to_parent(el,o,m){
if(cljs.core.seq_QMARK_.call(null,o)){
return hipo.interpreter.append_children_BANG_.call(null,el,cljs.core.vec.call(null,o),m);
} else {
if(!((o == null))){
return el.appendChild(hipo.interpreter.create_child.call(null,o,m));
} else {
return null;
}
}
});
hipo.interpreter.create = (function hipo$interpreter$create(o,m){
if(cljs.core.seq_QMARK_.call(null,o)){
var f = document.createDocumentFragment();
hipo.interpreter.append_children_BANG_.call(null,f,cljs.core.vec.call(null,o),m);

return f;
} else {
if(!((o == null))){
return hipo.interpreter.create_child.call(null,o,m);
} else {
return null;
}
}
});
hipo.interpreter.reconciliate_attributes_BANG_ = (function hipo$interpreter$reconciliate_attributes_BANG_(el,ns,tag,om,nm,m){
var seq__22033_22049 = cljs.core.seq.call(null,nm);
var chunk__22035_22050 = null;
var count__22036_22051 = (0);
var i__22037_22052 = (0);
while(true){
if((i__22037_22052 < count__22036_22051)){
var vec__22039_22053 = cljs.core._nth.call(null,chunk__22035_22050,i__22037_22052);
var sok_22054 = cljs.core.nth.call(null,vec__22039_22053,(0),null);
var nv_22055 = cljs.core.nth.call(null,vec__22039_22053,(1),null);
var ov_22056 = cljs.core.get.call(null,om,sok_22054);
hipo.interpreter.set_attribute_BANG_.call(null,el,ns,tag,sok_22054,ov_22056,nv_22055,m);


var G__22057 = seq__22033_22049;
var G__22058 = chunk__22035_22050;
var G__22059 = count__22036_22051;
var G__22060 = (i__22037_22052 + (1));
seq__22033_22049 = G__22057;
chunk__22035_22050 = G__22058;
count__22036_22051 = G__22059;
i__22037_22052 = G__22060;
continue;
} else {
var temp__5457__auto___22061 = cljs.core.seq.call(null,seq__22033_22049);
if(temp__5457__auto___22061){
var seq__22033_22062__$1 = temp__5457__auto___22061;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22033_22062__$1)){
var c__4351__auto___22063 = cljs.core.chunk_first.call(null,seq__22033_22062__$1);
var G__22064 = cljs.core.chunk_rest.call(null,seq__22033_22062__$1);
var G__22065 = c__4351__auto___22063;
var G__22066 = cljs.core.count.call(null,c__4351__auto___22063);
var G__22067 = (0);
seq__22033_22049 = G__22064;
chunk__22035_22050 = G__22065;
count__22036_22051 = G__22066;
i__22037_22052 = G__22067;
continue;
} else {
var vec__22042_22068 = cljs.core.first.call(null,seq__22033_22062__$1);
var sok_22069 = cljs.core.nth.call(null,vec__22042_22068,(0),null);
var nv_22070 = cljs.core.nth.call(null,vec__22042_22068,(1),null);
var ov_22071 = cljs.core.get.call(null,om,sok_22069);
hipo.interpreter.set_attribute_BANG_.call(null,el,ns,tag,sok_22069,ov_22071,nv_22070,m);


var G__22072 = cljs.core.next.call(null,seq__22033_22062__$1);
var G__22073 = null;
var G__22074 = (0);
var G__22075 = (0);
seq__22033_22049 = G__22072;
chunk__22035_22050 = G__22073;
count__22036_22051 = G__22074;
i__22037_22052 = G__22075;
continue;
}
} else {
}
}
break;
}

var seq__22045 = cljs.core.seq.call(null,clojure.set.difference.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,om)),cljs.core.set.call(null,cljs.core.keys.call(null,nm))));
var chunk__22046 = null;
var count__22047 = (0);
var i__22048 = (0);
while(true){
if((i__22048 < count__22047)){
var sok = cljs.core._nth.call(null,chunk__22046,i__22048);
hipo.interpreter.set_attribute_BANG_.call(null,el,ns,tag,sok,cljs.core.get.call(null,om,sok),null,m);


var G__22076 = seq__22045;
var G__22077 = chunk__22046;
var G__22078 = count__22047;
var G__22079 = (i__22048 + (1));
seq__22045 = G__22076;
chunk__22046 = G__22077;
count__22047 = G__22078;
i__22048 = G__22079;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__22045);
if(temp__5457__auto__){
var seq__22045__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22045__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__22045__$1);
var G__22080 = cljs.core.chunk_rest.call(null,seq__22045__$1);
var G__22081 = c__4351__auto__;
var G__22082 = cljs.core.count.call(null,c__4351__auto__);
var G__22083 = (0);
seq__22045 = G__22080;
chunk__22046 = G__22081;
count__22047 = G__22082;
i__22048 = G__22083;
continue;
} else {
var sok = cljs.core.first.call(null,seq__22045__$1);
hipo.interpreter.set_attribute_BANG_.call(null,el,ns,tag,sok,cljs.core.get.call(null,om,sok),null,m);


var G__22084 = cljs.core.next.call(null,seq__22045__$1);
var G__22085 = null;
var G__22086 = (0);
var G__22087 = (0);
seq__22045 = G__22084;
chunk__22046 = G__22085;
count__22047 = G__22086;
i__22048 = G__22087;
continue;
}
} else {
return null;
}
}
break;
}
});
hipo.interpreter.child_key = (function hipo$interpreter$child_key(h){
return new cljs.core.Keyword("hipo","key","hipo/key",-1519246363).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,h));
});
hipo.interpreter.keyed_children__GT_indexed_map = (function hipo$interpreter$keyed_children__GT_indexed_map(v){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4324__auto__ = (function hipo$interpreter$keyed_children__GT_indexed_map_$_iter__22088(s__22089){
return (new cljs.core.LazySeq(null,(function (){
var s__22089__$1 = s__22089;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__22089__$1);
if(temp__5457__auto__){
var s__22089__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22089__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__22089__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__22091 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__22090 = (0);
while(true){
if((i__22090 < size__4323__auto__)){
var ih = cljs.core._nth.call(null,c__4322__auto__,i__22090);
cljs.core.chunk_append.call(null,b__22091,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hipo.interpreter.child_key.call(null,cljs.core.nth.call(null,ih,(1))),ih], null));

var G__22092 = (i__22090 + (1));
i__22090 = G__22092;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22091),hipo$interpreter$keyed_children__GT_indexed_map_$_iter__22088.call(null,cljs.core.chunk_rest.call(null,s__22089__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22091),null);
}
} else {
var ih = cljs.core.first.call(null,s__22089__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hipo.interpreter.child_key.call(null,cljs.core.nth.call(null,ih,(1))),ih], null),hipo$interpreter$keyed_children__GT_indexed_map_$_iter__22088.call(null,cljs.core.rest.call(null,s__22089__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,cljs.core.map_indexed.call(null,((function (iter__4324__auto__){
return (function (idx,itm){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,itm], null);
});})(iter__4324__auto__))
,v));
})());
});
/**
 * Reconciliate a vector of children based on their associated key.
 */
hipo.interpreter.reconciliate_keyed_children_BANG_ = (function hipo$interpreter$reconciliate_keyed_children_BANG_(el,och,nch,p__22093){
var map__22094 = p__22093;
var map__22094__$1 = ((((!((map__22094 == null)))?(((((map__22094.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22094.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22094):map__22094);
var m = map__22094__$1;
var interceptors = cljs.core.get.call(null,map__22094__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
var om = hipo.interpreter.keyed_children__GT_indexed_map.call(null,och);
var nm = hipo.interpreter.keyed_children__GT_indexed_map.call(null,nch);
var cs = hipo.dom.children.call(null,el,cljs.core.apply.call(null,cljs.core.max,clojure.set.intersection.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,nm)),cljs.core.set.call(null,cljs.core.keys.call(null,om)))));
var seq__22096_22118 = cljs.core.seq.call(null,nm);
var chunk__22097_22119 = null;
var count__22098_22120 = (0);
var i__22099_22121 = (0);
while(true){
if((i__22099_22121 < count__22098_22120)){
var vec__22100_22122 = cljs.core._nth.call(null,chunk__22097_22119,i__22099_22121);
var i_22123 = cljs.core.nth.call(null,vec__22100_22122,(0),null);
var vec__22103_22124 = cljs.core.nth.call(null,vec__22100_22122,(1),null);
var ii_22125 = cljs.core.nth.call(null,vec__22103_22124,(0),null);
var h_22126 = cljs.core.nth.call(null,vec__22103_22124,(1),null);
var temp__5455__auto___22127 = cljs.core.get.call(null,om,i_22123);
if(cljs.core.truth_(temp__5455__auto___22127)){
var vec__22106_22128 = temp__5455__auto___22127;
var iii_22129 = cljs.core.nth.call(null,vec__22106_22128,(0),null);
var oh_22130 = cljs.core.nth.call(null,vec__22106_22128,(1),null);
var cel_22131 = cljs.core.nth.call(null,cs,iii_22129);
if((ii_22125 === iii_22129)){
hipo.interpreter.reconciliate_BANG_.call(null,cel_22131,oh_22130,h_22126,m);
} else {
var b__21869__auto___22132 = ((function (seq__22096_22118,chunk__22097_22119,count__22098_22120,i__22099_22121,cel_22131,vec__22106_22128,iii_22129,oh_22130,temp__5455__auto___22127,vec__22100_22122,i_22123,vec__22103_22124,ii_22125,h_22126,om,nm,cs,map__22094,map__22094__$1,m,interceptors){
return (function (){
var ncel = el.removeChild(cel_22131);
hipo.interpreter.reconciliate_BANG_.call(null,ncel,oh_22130,h_22126,m);

return hipo.dom.insert_child_BANG_.call(null,el,ii_22125,ncel);
});})(seq__22096_22118,chunk__22097_22119,count__22098_22120,i__22099_22121,cel_22131,vec__22106_22128,iii_22129,oh_22130,temp__5455__auto___22127,vec__22100_22122,i_22123,vec__22103_22124,ii_22125,h_22126,om,nm,cs,map__22094,map__22094__$1,m,interceptors))
;
var v__21870__auto___22133 = interceptors;
if(((cljs.core.not.call(null,v__21870__auto___22133)) || (cljs.core.empty_QMARK_.call(null,v__21870__auto___22133)))){
b__21869__auto___22132.call(null);
} else {
hipo.interceptor.call.call(null,b__21869__auto___22132,v__21870__auto___22133,new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),h_22126,new cljs.core.Keyword(null,"index","index",-1531685915),ii_22125], null));
}
}
} else {
var b__21869__auto___22134 = ((function (seq__22096_22118,chunk__22097_22119,count__22098_22120,i__22099_22121,temp__5455__auto___22127,vec__22100_22122,i_22123,vec__22103_22124,ii_22125,h_22126,om,nm,cs,map__22094,map__22094__$1,m,interceptors){
return (function (){
return hipo.dom.insert_child_BANG_.call(null,el,ii_22125,hipo.interpreter.create_child.call(null,h_22126,m));
});})(seq__22096_22118,chunk__22097_22119,count__22098_22120,i__22099_22121,temp__5455__auto___22127,vec__22100_22122,i_22123,vec__22103_22124,ii_22125,h_22126,om,nm,cs,map__22094,map__22094__$1,m,interceptors))
;
var v__21870__auto___22135 = interceptors;
if(((cljs.core.not.call(null,v__21870__auto___22135)) || (cljs.core.empty_QMARK_.call(null,v__21870__auto___22135)))){
b__21869__auto___22134.call(null);
} else {
hipo.interceptor.call.call(null,b__21869__auto___22134,v__21870__auto___22135,new cljs.core.Keyword(null,"insert","insert",1286475395),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),h_22126,new cljs.core.Keyword(null,"index","index",-1531685915),ii_22125], null));
}
}


var G__22136 = seq__22096_22118;
var G__22137 = chunk__22097_22119;
var G__22138 = count__22098_22120;
var G__22139 = (i__22099_22121 + (1));
seq__22096_22118 = G__22136;
chunk__22097_22119 = G__22137;
count__22098_22120 = G__22138;
i__22099_22121 = G__22139;
continue;
} else {
var temp__5457__auto___22140 = cljs.core.seq.call(null,seq__22096_22118);
if(temp__5457__auto___22140){
var seq__22096_22141__$1 = temp__5457__auto___22140;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22096_22141__$1)){
var c__4351__auto___22142 = cljs.core.chunk_first.call(null,seq__22096_22141__$1);
var G__22143 = cljs.core.chunk_rest.call(null,seq__22096_22141__$1);
var G__22144 = c__4351__auto___22142;
var G__22145 = cljs.core.count.call(null,c__4351__auto___22142);
var G__22146 = (0);
seq__22096_22118 = G__22143;
chunk__22097_22119 = G__22144;
count__22098_22120 = G__22145;
i__22099_22121 = G__22146;
continue;
} else {
var vec__22109_22147 = cljs.core.first.call(null,seq__22096_22141__$1);
var i_22148 = cljs.core.nth.call(null,vec__22109_22147,(0),null);
var vec__22112_22149 = cljs.core.nth.call(null,vec__22109_22147,(1),null);
var ii_22150 = cljs.core.nth.call(null,vec__22112_22149,(0),null);
var h_22151 = cljs.core.nth.call(null,vec__22112_22149,(1),null);
var temp__5455__auto___22152 = cljs.core.get.call(null,om,i_22148);
if(cljs.core.truth_(temp__5455__auto___22152)){
var vec__22115_22153 = temp__5455__auto___22152;
var iii_22154 = cljs.core.nth.call(null,vec__22115_22153,(0),null);
var oh_22155 = cljs.core.nth.call(null,vec__22115_22153,(1),null);
var cel_22156 = cljs.core.nth.call(null,cs,iii_22154);
if((ii_22150 === iii_22154)){
hipo.interpreter.reconciliate_BANG_.call(null,cel_22156,oh_22155,h_22151,m);
} else {
var b__21869__auto___22157 = ((function (seq__22096_22118,chunk__22097_22119,count__22098_22120,i__22099_22121,cel_22156,vec__22115_22153,iii_22154,oh_22155,temp__5455__auto___22152,vec__22109_22147,i_22148,vec__22112_22149,ii_22150,h_22151,seq__22096_22141__$1,temp__5457__auto___22140,om,nm,cs,map__22094,map__22094__$1,m,interceptors){
return (function (){
var ncel = el.removeChild(cel_22156);
hipo.interpreter.reconciliate_BANG_.call(null,ncel,oh_22155,h_22151,m);

return hipo.dom.insert_child_BANG_.call(null,el,ii_22150,ncel);
});})(seq__22096_22118,chunk__22097_22119,count__22098_22120,i__22099_22121,cel_22156,vec__22115_22153,iii_22154,oh_22155,temp__5455__auto___22152,vec__22109_22147,i_22148,vec__22112_22149,ii_22150,h_22151,seq__22096_22141__$1,temp__5457__auto___22140,om,nm,cs,map__22094,map__22094__$1,m,interceptors))
;
var v__21870__auto___22158 = interceptors;
if(((cljs.core.not.call(null,v__21870__auto___22158)) || (cljs.core.empty_QMARK_.call(null,v__21870__auto___22158)))){
b__21869__auto___22157.call(null);
} else {
hipo.interceptor.call.call(null,b__21869__auto___22157,v__21870__auto___22158,new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),h_22151,new cljs.core.Keyword(null,"index","index",-1531685915),ii_22150], null));
}
}
} else {
var b__21869__auto___22159 = ((function (seq__22096_22118,chunk__22097_22119,count__22098_22120,i__22099_22121,temp__5455__auto___22152,vec__22109_22147,i_22148,vec__22112_22149,ii_22150,h_22151,seq__22096_22141__$1,temp__5457__auto___22140,om,nm,cs,map__22094,map__22094__$1,m,interceptors){
return (function (){
return hipo.dom.insert_child_BANG_.call(null,el,ii_22150,hipo.interpreter.create_child.call(null,h_22151,m));
});})(seq__22096_22118,chunk__22097_22119,count__22098_22120,i__22099_22121,temp__5455__auto___22152,vec__22109_22147,i_22148,vec__22112_22149,ii_22150,h_22151,seq__22096_22141__$1,temp__5457__auto___22140,om,nm,cs,map__22094,map__22094__$1,m,interceptors))
;
var v__21870__auto___22160 = interceptors;
if(((cljs.core.not.call(null,v__21870__auto___22160)) || (cljs.core.empty_QMARK_.call(null,v__21870__auto___22160)))){
b__21869__auto___22159.call(null);
} else {
hipo.interceptor.call.call(null,b__21869__auto___22159,v__21870__auto___22160,new cljs.core.Keyword(null,"insert","insert",1286475395),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),h_22151,new cljs.core.Keyword(null,"index","index",-1531685915),ii_22150], null));
}
}


var G__22161 = cljs.core.next.call(null,seq__22096_22141__$1);
var G__22162 = null;
var G__22163 = (0);
var G__22164 = (0);
seq__22096_22118 = G__22161;
chunk__22097_22119 = G__22162;
count__22098_22120 = G__22163;
i__22099_22121 = G__22164;
continue;
}
} else {
}
}
break;
}

var d = cljs.core.count.call(null,clojure.set.difference.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,om)),cljs.core.set.call(null,cljs.core.keys.call(null,nm))));
if((d > (0))){
var b__21869__auto__ = ((function (d,om,nm,cs,map__22094,map__22094__$1,m,interceptors){
return (function (){
return hipo.dom.remove_trailing_children_BANG_.call(null,el,d);
});})(d,om,nm,cs,map__22094,map__22094__$1,m,interceptors))
;
var v__21870__auto__ = interceptors;
if(((cljs.core.not.call(null,v__21870__auto__)) || (cljs.core.empty_QMARK_.call(null,v__21870__auto__)))){
return b__21869__auto__.call(null);
} else {
return hipo.interceptor.call.call(null,b__21869__auto__,v__21870__auto__,new cljs.core.Keyword(null,"remove-trailing","remove-trailing",-1590009193),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"count","count",2139924085),d], null));
}
} else {
return null;
}
});
hipo.interpreter.reconciliate_non_keyed_children_BANG_ = (function hipo$interpreter$reconciliate_non_keyed_children_BANG_(el,och,nch,p__22165){
var map__22166 = p__22165;
var map__22166__$1 = ((((!((map__22166 == null)))?(((((map__22166.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22166.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22166):map__22166);
var m = map__22166__$1;
var interceptors = cljs.core.get.call(null,map__22166__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
var oc = cljs.core.count.call(null,och);
var nc = cljs.core.count.call(null,nch);
var d = (oc - nc);
if((d > (0))){
var b__21869__auto___22168 = ((function (oc,nc,d,map__22166,map__22166__$1,m,interceptors){
return (function (){
return hipo.dom.remove_trailing_children_BANG_.call(null,el,d);
});})(oc,nc,d,map__22166,map__22166__$1,m,interceptors))
;
var v__21870__auto___22169 = interceptors;
if(((cljs.core.not.call(null,v__21870__auto___22169)) || (cljs.core.empty_QMARK_.call(null,v__21870__auto___22169)))){
b__21869__auto___22168.call(null);
} else {
hipo.interceptor.call.call(null,b__21869__auto___22168,v__21870__auto___22169,new cljs.core.Keyword(null,"remove-trailing","remove-trailing",-1590009193),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"count","count",2139924085),d], null));
}
} else {
}

var n__4408__auto___22170 = (function (){var x__4040__auto__ = oc;
var y__4041__auto__ = nc;
return ((x__4040__auto__ < y__4041__auto__) ? x__4040__auto__ : y__4041__auto__);
})();
var i_22171 = (0);
while(true){
if((i_22171 < n__4408__auto___22170)){
var ov_22172 = cljs.core.nth.call(null,och,i_22171);
var nv_22173 = cljs.core.nth.call(null,nch,i_22171);
if(!((((ov_22172 == null)) && ((nv_22173 == null))))){
if((ov_22172 == null)){
var b__21869__auto___22174 = ((function (i_22171,ov_22172,nv_22173,n__4408__auto___22170,oc,nc,d,map__22166,map__22166__$1,m,interceptors){
return (function (){
return hipo.dom.insert_child_BANG_.call(null,el,i_22171,hipo.interpreter.create_child.call(null,nv_22173,m));
});})(i_22171,ov_22172,nv_22173,n__4408__auto___22170,oc,nc,d,map__22166,map__22166__$1,m,interceptors))
;
var v__21870__auto___22175 = interceptors;
if(((cljs.core.not.call(null,v__21870__auto___22175)) || (cljs.core.empty_QMARK_.call(null,v__21870__auto___22175)))){
b__21869__auto___22174.call(null);
} else {
hipo.interceptor.call.call(null,b__21869__auto___22174,v__21870__auto___22175,new cljs.core.Keyword(null,"insert","insert",1286475395),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),nv_22173,new cljs.core.Keyword(null,"index","index",-1531685915),i_22171], null));
}
} else {
if((nv_22173 == null)){
var b__21869__auto___22176 = ((function (i_22171,ov_22172,nv_22173,n__4408__auto___22170,oc,nc,d,map__22166,map__22166__$1,m,interceptors){
return (function (){
return hipo.dom.remove_child_BANG_.call(null,el,i_22171);
});})(i_22171,ov_22172,nv_22173,n__4408__auto___22170,oc,nc,d,map__22166,map__22166__$1,m,interceptors))
;
var v__21870__auto___22177 = interceptors;
if(((cljs.core.not.call(null,v__21870__auto___22177)) || (cljs.core.empty_QMARK_.call(null,v__21870__auto___22177)))){
b__21869__auto___22176.call(null);
} else {
hipo.interceptor.call.call(null,b__21869__auto___22176,v__21870__auto___22177,new cljs.core.Keyword(null,"remove","remove",-131428414),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"index","index",-1531685915),i_22171], null));
}
} else {
var temp__5455__auto___22178 = hipo.dom.child.call(null,el,i_22171);
if(cljs.core.truth_(temp__5455__auto___22178)){
var cel_22179 = temp__5455__auto___22178;
hipo.interpreter.reconciliate_BANG_.call(null,cel_22179,ov_22172,nv_22173,m);
} else {
}

}
}
} else {
}

var G__22180 = (i_22171 + (1));
i_22171 = G__22180;
continue;
} else {
}
break;
}

if((d < (0))){
if(((-1) === d)){
var temp__5455__auto__ = cljs.core.nth.call(null,nch,oc);
if(cljs.core.truth_(temp__5455__auto__)){
var h = temp__5455__auto__;
var b__21869__auto__ = ((function (h,temp__5455__auto__,oc,nc,d,map__22166,map__22166__$1,m,interceptors){
return (function (){
return el.appendChild(hipo.interpreter.create_child.call(null,h,m));
});})(h,temp__5455__auto__,oc,nc,d,map__22166,map__22166__$1,m,interceptors))
;
var v__21870__auto__ = interceptors;
if(((cljs.core.not.call(null,v__21870__auto__)) || (cljs.core.empty_QMARK_.call(null,v__21870__auto__)))){
return b__21869__auto__.call(null);
} else {
return hipo.interceptor.call.call(null,b__21869__auto__,v__21870__auto__,new cljs.core.Keyword(null,"append","append",-291298229),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),h], null));
}
} else {
return null;
}
} else {
var f = document.createDocumentFragment();
var cs = ((((0) === oc))?nch:cljs.core.subvec.call(null,nch,oc));
var b__21869__auto___22181 = ((function (f,cs,oc,nc,d,map__22166,map__22166__$1,m,interceptors){
return (function (){
return hipo.interpreter.append_children_BANG_.call(null,f,cs,m);
});})(f,cs,oc,nc,d,map__22166,map__22166__$1,m,interceptors))
;
var v__21870__auto___22182 = interceptors;
if(((cljs.core.not.call(null,v__21870__auto___22182)) || (cljs.core.empty_QMARK_.call(null,v__21870__auto___22182)))){
b__21869__auto___22181.call(null);
} else {
hipo.interceptor.call.call(null,b__21869__auto___22181,v__21870__auto___22182,new cljs.core.Keyword(null,"append","append",-291298229),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),cs], null));
}

return el.appendChild(f);
}
} else {
return null;
}
});
hipo.interpreter.keyed_children_QMARK_ = (function hipo$interpreter$keyed_children_QMARK_(v){
return !((hipo.interpreter.child_key.call(null,cljs.core.nth.call(null,v,(0))) == null));
});
hipo.interpreter.reconciliate_children_BANG_ = (function hipo$interpreter$reconciliate_children_BANG_(el,och,nch,p__22183){
var map__22184 = p__22183;
var map__22184__$1 = ((((!((map__22184 == null)))?(((((map__22184.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22184.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22184):map__22184);
var m = map__22184__$1;
var interceptors = cljs.core.get.call(null,map__22184__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
if(cljs.core.empty_QMARK_.call(null,nch)){
if(!(cljs.core.empty_QMARK_.call(null,och))){
var b__21869__auto__ = ((function (map__22184,map__22184__$1,m,interceptors){
return (function (){
return hipo.dom.clear_BANG_.call(null,el);
});})(map__22184,map__22184__$1,m,interceptors))
;
var v__21870__auto__ = interceptors;
if(((cljs.core.not.call(null,v__21870__auto__)) || (cljs.core.empty_QMARK_.call(null,v__21870__auto__)))){
return b__21869__auto__.call(null);
} else {
return hipo.interceptor.call.call(null,b__21869__auto__,v__21870__auto__,new cljs.core.Keyword(null,"clear","clear",1877104959),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),el], null));
}
} else {
return null;
}
} else {
if(cljs.core.truth_(hipo.interpreter.keyed_children_QMARK_.call(null,nch))){
return hipo.interpreter.reconciliate_keyed_children_BANG_.call(null,el,och,nch,m);
} else {
return hipo.interpreter.reconciliate_non_keyed_children_BANG_.call(null,el,och,nch,m);
}
}
});
hipo.interpreter.reconciliate_vector_BANG_ = (function hipo$interpreter$reconciliate_vector_BANG_(el,oh,nh,p__22186){
var map__22187 = p__22186;
var map__22187__$1 = ((((!((map__22187 == null)))?(((((map__22187.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22187.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22187):map__22187);
var m = map__22187__$1;
var interceptors = cljs.core.get.call(null,map__22187__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
if(cljs.core.vector_QMARK_.call(null,nh)){
} else {
throw (new Error("Assert failed: (vector? nh)"));
}

if(cljs.core.truth_((function (){var or__3949__auto__ = hipo.hiccup.literal_QMARK_.call(null,oh);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return !((hipo.hiccup.tag.call(null,nh) === hipo.hiccup.tag.call(null,oh)));
}
})())){
var nel = hipo.interpreter.create_child.call(null,nh,m);
var b__21869__auto__ = ((function (nel,map__22187,map__22187__$1,m,interceptors){
return (function (){
if(cljs.core.truth_(el.parentElement)){
} else {
throw (new Error(["Assert failed: ","Can't replace root element. If you want to change root element's type it must be encapsulated in a static element.","\n","(.-parentElement el)"].join('')));
}

return hipo.dom.replace_BANG_.call(null,el,nel);
});})(nel,map__22187,map__22187__$1,m,interceptors))
;
var v__21870__auto__ = interceptors;
if(((cljs.core.not.call(null,v__21870__auto__)) || (cljs.core.empty_QMARK_.call(null,v__21870__auto__)))){
return b__21869__auto__.call(null);
} else {
return hipo.interceptor.call.call(null,b__21869__auto__,v__21870__auto__,new cljs.core.Keyword(null,"replace","replace",-786587770),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),nh], null));
}
} else {
var om = hipo.hiccup.attributes.call(null,oh);
var nm = hipo.hiccup.attributes.call(null,nh);
var och = hipo.hiccup.children.call(null,oh);
var nch = hipo.hiccup.children.call(null,nh);
var b__21869__auto___22189 = ((function (om,nm,och,nch,map__22187,map__22187__$1,m,interceptors){
return (function (){
return hipo.interpreter.reconciliate_children_BANG_.call(null,el,hipo.hiccup.flatten_children.call(null,och),hipo.hiccup.flatten_children.call(null,nch),m);
});})(om,nm,och,nch,map__22187,map__22187__$1,m,interceptors))
;
var v__21870__auto___22190 = interceptors;
if(((cljs.core.not.call(null,v__21870__auto___22190)) || (cljs.core.empty_QMARK_.call(null,v__21870__auto___22190)))){
b__21869__auto___22189.call(null);
} else {
hipo.interceptor.call.call(null,b__21869__auto___22189,v__21870__auto___22190,new cljs.core.Keyword(null,"reconciliate","reconciliate",-527400739),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"old-value","old-value",862546795),och,new cljs.core.Keyword(null,"new-value","new-value",1087038368),nch], null));
}

return hipo.interpreter.reconciliate_attributes_BANG_.call(null,el,hipo.hiccup.keyns.call(null,nh),hipo.hiccup.tag.call(null,nh),om,nm,m);
}
});
hipo.interpreter.reconciliate_BANG_ = (function hipo$interpreter$reconciliate_BANG_(el,oh,nh,p__22191){
var map__22192 = p__22191;
var map__22192__$1 = ((((!((map__22192 == null)))?(((((map__22192.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22192.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22192):map__22192);
var m = map__22192__$1;
var interceptors = cljs.core.get.call(null,map__22192__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
if(cljs.core.truth_((function (){var or__3949__auto__ = cljs.core.vector_QMARK_.call(null,nh);
if(or__3949__auto__){
return or__3949__auto__;
} else {
return hipo.hiccup.literal_QMARK_.call(null,nh);
}
})())){
} else {
throw (new Error("Assert failed: (or (vector? nh) (hic/literal? nh))"));
}

if((((m == null)) || (cljs.core.map_QMARK_.call(null,m)))){
} else {
throw (new Error("Assert failed: (or (nil? m) (map? m))"));
}

var b__21869__auto__ = ((function (map__22192,map__22192__$1,m,interceptors){
return (function (){
if(cljs.core.truth_(hipo.hiccup.literal_QMARK_.call(null,nh))){
if(!((oh === nh))){
var b__21869__auto__ = ((function (map__22192,map__22192__$1,m,interceptors){
return (function (){
if(cljs.core.truth_(el.parentElement)){
} else {
throw (new Error(["Assert failed: ","Can't replace root element. If you want to change root element's type it must be encapsulated in a static element.","\n","(.-parentElement el)"].join('')));
}

return hipo.dom.replace_text_BANG_.call(null,el,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(nh)].join(''));
});})(map__22192,map__22192__$1,m,interceptors))
;
var v__21870__auto__ = interceptors;
if(((cljs.core.not.call(null,v__21870__auto__)) || (cljs.core.empty_QMARK_.call(null,v__21870__auto__)))){
return b__21869__auto__.call(null);
} else {
return hipo.interceptor.call.call(null,b__21869__auto__,v__21870__auto__,new cljs.core.Keyword(null,"replace","replace",-786587770),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),nh], null));
}
} else {
return null;
}
} else {
return hipo.interpreter.reconciliate_vector_BANG_.call(null,el,oh,nh,m);
}
});})(map__22192,map__22192__$1,m,interceptors))
;
var v__21870__auto__ = interceptors;
if(((cljs.core.not.call(null,v__21870__auto__)) || (cljs.core.empty_QMARK_.call(null,v__21870__auto__)))){
return b__21869__auto__.call(null);
} else {
return hipo.interceptor.call.call(null,b__21869__auto__,v__21870__auto__,new cljs.core.Keyword(null,"reconciliate","reconciliate",-527400739),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"old-value","old-value",862546795),oh,new cljs.core.Keyword(null,"new-value","new-value",1087038368),nh], null));
}
});

//# sourceMappingURL=interpreter.js.map?rel=1538856220055
