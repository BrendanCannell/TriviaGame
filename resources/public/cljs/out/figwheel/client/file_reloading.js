// Compiled by ClojureScript 1.10.339 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__3949__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__3949__auto__){
return or__3949__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__3949__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__3949__auto____$1)){
return or__3949__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__28738_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__28738_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__28739 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__28740 = null;
var count__28741 = (0);
var i__28742 = (0);
while(true){
if((i__28742 < count__28741)){
var n = cljs.core._nth.call(null,chunk__28740,i__28742);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__28743 = seq__28739;
var G__28744 = chunk__28740;
var G__28745 = count__28741;
var G__28746 = (i__28742 + (1));
seq__28739 = G__28743;
chunk__28740 = G__28744;
count__28741 = G__28745;
i__28742 = G__28746;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__28739);
if(temp__5457__auto__){
var seq__28739__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28739__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__28739__$1);
var G__28747 = cljs.core.chunk_rest.call(null,seq__28739__$1);
var G__28748 = c__4351__auto__;
var G__28749 = cljs.core.count.call(null,c__4351__auto__);
var G__28750 = (0);
seq__28739 = G__28747;
chunk__28740 = G__28748;
count__28741 = G__28749;
i__28742 = G__28750;
continue;
} else {
var n = cljs.core.first.call(null,seq__28739__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__28751 = cljs.core.next.call(null,seq__28739__$1);
var G__28752 = null;
var G__28753 = (0);
var G__28754 = (0);
seq__28739 = G__28751;
chunk__28740 = G__28752;
count__28741 = G__28753;
i__28742 = G__28754;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__28755){
var vec__28756 = p__28755;
var _ = cljs.core.nth.call(null,vec__28756,(0),null);
var v = cljs.core.nth.call(null,vec__28756,(1),null);
var and__3938__auto__ = v;
if(cljs.core.truth_(and__3938__auto__)){
return v.call(null,dep);
} else {
return and__3938__auto__;
}
}),cljs.core.filter.call(null,(function (p__28759){
var vec__28760 = p__28759;
var k = cljs.core.nth.call(null,vec__28760,(0),null);
var v = cljs.core.nth.call(null,vec__28760,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__28772_28780 = cljs.core.seq.call(null,deps);
var chunk__28773_28781 = null;
var count__28774_28782 = (0);
var i__28775_28783 = (0);
while(true){
if((i__28775_28783 < count__28774_28782)){
var dep_28784 = cljs.core._nth.call(null,chunk__28773_28781,i__28775_28783);
if(cljs.core.truth_((function (){var and__3938__auto__ = dep_28784;
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_28784));
} else {
return and__3938__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_28784,(depth + (1)),state);
} else {
}


var G__28785 = seq__28772_28780;
var G__28786 = chunk__28773_28781;
var G__28787 = count__28774_28782;
var G__28788 = (i__28775_28783 + (1));
seq__28772_28780 = G__28785;
chunk__28773_28781 = G__28786;
count__28774_28782 = G__28787;
i__28775_28783 = G__28788;
continue;
} else {
var temp__5457__auto___28789 = cljs.core.seq.call(null,seq__28772_28780);
if(temp__5457__auto___28789){
var seq__28772_28790__$1 = temp__5457__auto___28789;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28772_28790__$1)){
var c__4351__auto___28791 = cljs.core.chunk_first.call(null,seq__28772_28790__$1);
var G__28792 = cljs.core.chunk_rest.call(null,seq__28772_28790__$1);
var G__28793 = c__4351__auto___28791;
var G__28794 = cljs.core.count.call(null,c__4351__auto___28791);
var G__28795 = (0);
seq__28772_28780 = G__28792;
chunk__28773_28781 = G__28793;
count__28774_28782 = G__28794;
i__28775_28783 = G__28795;
continue;
} else {
var dep_28796 = cljs.core.first.call(null,seq__28772_28790__$1);
if(cljs.core.truth_((function (){var and__3938__auto__ = dep_28796;
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_28796));
} else {
return and__3938__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_28796,(depth + (1)),state);
} else {
}


var G__28797 = cljs.core.next.call(null,seq__28772_28790__$1);
var G__28798 = null;
var G__28799 = (0);
var G__28800 = (0);
seq__28772_28780 = G__28797;
chunk__28773_28781 = G__28798;
count__28774_28782 = G__28799;
i__28775_28783 = G__28800;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__28776){
var vec__28777 = p__28776;
var seq__28778 = cljs.core.seq.call(null,vec__28777);
var first__28779 = cljs.core.first.call(null,seq__28778);
var seq__28778__$1 = cljs.core.next.call(null,seq__28778);
var x = first__28779;
var xs = seq__28778__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__28777,seq__28778,first__28779,seq__28778__$1,x,xs,get_deps__$1){
return (function (p1__28763_SHARP_){
return clojure.set.difference.call(null,p1__28763_SHARP_,x);
});})(vec__28777,seq__28778,first__28779,seq__28778__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__28801 = cljs.core.seq.call(null,provides);
var chunk__28802 = null;
var count__28803 = (0);
var i__28804 = (0);
while(true){
if((i__28804 < count__28803)){
var prov = cljs.core._nth.call(null,chunk__28802,i__28804);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__28805_28813 = cljs.core.seq.call(null,requires);
var chunk__28806_28814 = null;
var count__28807_28815 = (0);
var i__28808_28816 = (0);
while(true){
if((i__28808_28816 < count__28807_28815)){
var req_28817 = cljs.core._nth.call(null,chunk__28806_28814,i__28808_28816);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28817,prov);


var G__28818 = seq__28805_28813;
var G__28819 = chunk__28806_28814;
var G__28820 = count__28807_28815;
var G__28821 = (i__28808_28816 + (1));
seq__28805_28813 = G__28818;
chunk__28806_28814 = G__28819;
count__28807_28815 = G__28820;
i__28808_28816 = G__28821;
continue;
} else {
var temp__5457__auto___28822 = cljs.core.seq.call(null,seq__28805_28813);
if(temp__5457__auto___28822){
var seq__28805_28823__$1 = temp__5457__auto___28822;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28805_28823__$1)){
var c__4351__auto___28824 = cljs.core.chunk_first.call(null,seq__28805_28823__$1);
var G__28825 = cljs.core.chunk_rest.call(null,seq__28805_28823__$1);
var G__28826 = c__4351__auto___28824;
var G__28827 = cljs.core.count.call(null,c__4351__auto___28824);
var G__28828 = (0);
seq__28805_28813 = G__28825;
chunk__28806_28814 = G__28826;
count__28807_28815 = G__28827;
i__28808_28816 = G__28828;
continue;
} else {
var req_28829 = cljs.core.first.call(null,seq__28805_28823__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28829,prov);


var G__28830 = cljs.core.next.call(null,seq__28805_28823__$1);
var G__28831 = null;
var G__28832 = (0);
var G__28833 = (0);
seq__28805_28813 = G__28830;
chunk__28806_28814 = G__28831;
count__28807_28815 = G__28832;
i__28808_28816 = G__28833;
continue;
}
} else {
}
}
break;
}


var G__28834 = seq__28801;
var G__28835 = chunk__28802;
var G__28836 = count__28803;
var G__28837 = (i__28804 + (1));
seq__28801 = G__28834;
chunk__28802 = G__28835;
count__28803 = G__28836;
i__28804 = G__28837;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__28801);
if(temp__5457__auto__){
var seq__28801__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28801__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__28801__$1);
var G__28838 = cljs.core.chunk_rest.call(null,seq__28801__$1);
var G__28839 = c__4351__auto__;
var G__28840 = cljs.core.count.call(null,c__4351__auto__);
var G__28841 = (0);
seq__28801 = G__28838;
chunk__28802 = G__28839;
count__28803 = G__28840;
i__28804 = G__28841;
continue;
} else {
var prov = cljs.core.first.call(null,seq__28801__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__28809_28842 = cljs.core.seq.call(null,requires);
var chunk__28810_28843 = null;
var count__28811_28844 = (0);
var i__28812_28845 = (0);
while(true){
if((i__28812_28845 < count__28811_28844)){
var req_28846 = cljs.core._nth.call(null,chunk__28810_28843,i__28812_28845);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28846,prov);


var G__28847 = seq__28809_28842;
var G__28848 = chunk__28810_28843;
var G__28849 = count__28811_28844;
var G__28850 = (i__28812_28845 + (1));
seq__28809_28842 = G__28847;
chunk__28810_28843 = G__28848;
count__28811_28844 = G__28849;
i__28812_28845 = G__28850;
continue;
} else {
var temp__5457__auto___28851__$1 = cljs.core.seq.call(null,seq__28809_28842);
if(temp__5457__auto___28851__$1){
var seq__28809_28852__$1 = temp__5457__auto___28851__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28809_28852__$1)){
var c__4351__auto___28853 = cljs.core.chunk_first.call(null,seq__28809_28852__$1);
var G__28854 = cljs.core.chunk_rest.call(null,seq__28809_28852__$1);
var G__28855 = c__4351__auto___28853;
var G__28856 = cljs.core.count.call(null,c__4351__auto___28853);
var G__28857 = (0);
seq__28809_28842 = G__28854;
chunk__28810_28843 = G__28855;
count__28811_28844 = G__28856;
i__28812_28845 = G__28857;
continue;
} else {
var req_28858 = cljs.core.first.call(null,seq__28809_28852__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28858,prov);


var G__28859 = cljs.core.next.call(null,seq__28809_28852__$1);
var G__28860 = null;
var G__28861 = (0);
var G__28862 = (0);
seq__28809_28842 = G__28859;
chunk__28810_28843 = G__28860;
count__28811_28844 = G__28861;
i__28812_28845 = G__28862;
continue;
}
} else {
}
}
break;
}


var G__28863 = cljs.core.next.call(null,seq__28801__$1);
var G__28864 = null;
var G__28865 = (0);
var G__28866 = (0);
seq__28801 = G__28863;
chunk__28802 = G__28864;
count__28803 = G__28865;
i__28804 = G__28866;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__28867_28871 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__28868_28872 = null;
var count__28869_28873 = (0);
var i__28870_28874 = (0);
while(true){
if((i__28870_28874 < count__28869_28873)){
var ns_28875 = cljs.core._nth.call(null,chunk__28868_28872,i__28870_28874);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28875);


var G__28876 = seq__28867_28871;
var G__28877 = chunk__28868_28872;
var G__28878 = count__28869_28873;
var G__28879 = (i__28870_28874 + (1));
seq__28867_28871 = G__28876;
chunk__28868_28872 = G__28877;
count__28869_28873 = G__28878;
i__28870_28874 = G__28879;
continue;
} else {
var temp__5457__auto___28880 = cljs.core.seq.call(null,seq__28867_28871);
if(temp__5457__auto___28880){
var seq__28867_28881__$1 = temp__5457__auto___28880;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28867_28881__$1)){
var c__4351__auto___28882 = cljs.core.chunk_first.call(null,seq__28867_28881__$1);
var G__28883 = cljs.core.chunk_rest.call(null,seq__28867_28881__$1);
var G__28884 = c__4351__auto___28882;
var G__28885 = cljs.core.count.call(null,c__4351__auto___28882);
var G__28886 = (0);
seq__28867_28871 = G__28883;
chunk__28868_28872 = G__28884;
count__28869_28873 = G__28885;
i__28870_28874 = G__28886;
continue;
} else {
var ns_28887 = cljs.core.first.call(null,seq__28867_28881__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28887);


var G__28888 = cljs.core.next.call(null,seq__28867_28881__$1);
var G__28889 = null;
var G__28890 = (0);
var G__28891 = (0);
seq__28867_28871 = G__28888;
chunk__28868_28872 = G__28889;
count__28869_28873 = G__28890;
i__28870_28874 = G__28891;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__3949__auto__ = goog.require__;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__28892__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__28892 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28893__i = 0, G__28893__a = new Array(arguments.length -  0);
while (G__28893__i < G__28893__a.length) {G__28893__a[G__28893__i] = arguments[G__28893__i + 0]; ++G__28893__i;}
  args = new cljs.core.IndexedSeq(G__28893__a,0,null);
} 
return G__28892__delegate.call(this,args);};
G__28892.cljs$lang$maxFixedArity = 0;
G__28892.cljs$lang$applyTo = (function (arglist__28894){
var args = cljs.core.seq(arglist__28894);
return G__28892__delegate(args);
});
G__28892.cljs$core$IFn$_invoke$arity$variadic = G__28892__delegate;
return G__28892;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__28895_SHARP_,p2__28896_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__28895_SHARP_)].join('')),p2__28896_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__28897_SHARP_,p2__28898_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__28897_SHARP_)].join(''),p2__28898_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__28899 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__28899.addCallback(((function (G__28899){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__28899))
);

G__28899.addErrback(((function (G__28899){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__28899))
);

return G__28899;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e28900){if((e28900 instanceof Error)){
var e = e28900;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e28900;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e28901){if((e28901 instanceof Error)){
var e = e28901;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e28901;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__28902 = cljs.core._EQ_;
var expr__28903 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__28902.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__28903))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__28902.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__28903))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__28902.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__28903))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__28902,expr__28903){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__28902,expr__28903))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__28905,callback){
var map__28906 = p__28905;
var map__28906__$1 = ((((!((map__28906 == null)))?(((((map__28906.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28906.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28906):map__28906);
var file_msg = map__28906__$1;
var request_url = cljs.core.get.call(null,map__28906__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__3949__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__28906,map__28906__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__28906,map__28906__$1,file_msg,request_url))
);
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_chan !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined')){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined')){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__23769__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23769__auto__){
return (function (){
var f__23770__auto__ = (function (){var switch__23678__auto__ = ((function (c__23769__auto__){
return (function (state_28944){
var state_val_28945 = (state_28944[(1)]);
if((state_val_28945 === (7))){
var inst_28940 = (state_28944[(2)]);
var state_28944__$1 = state_28944;
var statearr_28946_28972 = state_28944__$1;
(statearr_28946_28972[(2)] = inst_28940);

(statearr_28946_28972[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28945 === (1))){
var state_28944__$1 = state_28944;
var statearr_28947_28973 = state_28944__$1;
(statearr_28947_28973[(2)] = null);

(statearr_28947_28973[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28945 === (4))){
var inst_28910 = (state_28944[(7)]);
var inst_28910__$1 = (state_28944[(2)]);
var state_28944__$1 = (function (){var statearr_28948 = state_28944;
(statearr_28948[(7)] = inst_28910__$1);

return statearr_28948;
})();
if(cljs.core.truth_(inst_28910__$1)){
var statearr_28949_28974 = state_28944__$1;
(statearr_28949_28974[(1)] = (5));

} else {
var statearr_28950_28975 = state_28944__$1;
(statearr_28950_28975[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28945 === (15))){
var inst_28923 = (state_28944[(8)]);
var inst_28925 = (state_28944[(9)]);
var inst_28927 = inst_28925.call(null,inst_28923);
var state_28944__$1 = state_28944;
var statearr_28951_28976 = state_28944__$1;
(statearr_28951_28976[(2)] = inst_28927);

(statearr_28951_28976[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28945 === (13))){
var inst_28934 = (state_28944[(2)]);
var state_28944__$1 = state_28944;
var statearr_28952_28977 = state_28944__$1;
(statearr_28952_28977[(2)] = inst_28934);

(statearr_28952_28977[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28945 === (6))){
var state_28944__$1 = state_28944;
var statearr_28953_28978 = state_28944__$1;
(statearr_28953_28978[(2)] = null);

(statearr_28953_28978[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28945 === (17))){
var inst_28931 = (state_28944[(2)]);
var state_28944__$1 = state_28944;
var statearr_28954_28979 = state_28944__$1;
(statearr_28954_28979[(2)] = inst_28931);

(statearr_28954_28979[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28945 === (3))){
var inst_28942 = (state_28944[(2)]);
var state_28944__$1 = state_28944;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28944__$1,inst_28942);
} else {
if((state_val_28945 === (12))){
var state_28944__$1 = state_28944;
var statearr_28955_28980 = state_28944__$1;
(statearr_28955_28980[(2)] = null);

(statearr_28955_28980[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28945 === (2))){
var state_28944__$1 = state_28944;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28944__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_28945 === (11))){
var inst_28915 = (state_28944[(10)]);
var inst_28921 = figwheel.client.file_reloading.blocking_load.call(null,inst_28915);
var state_28944__$1 = state_28944;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28944__$1,(14),inst_28921);
} else {
if((state_val_28945 === (9))){
var inst_28915 = (state_28944[(10)]);
var state_28944__$1 = state_28944;
if(cljs.core.truth_(inst_28915)){
var statearr_28956_28981 = state_28944__$1;
(statearr_28956_28981[(1)] = (11));

} else {
var statearr_28957_28982 = state_28944__$1;
(statearr_28957_28982[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28945 === (5))){
var inst_28916 = (state_28944[(11)]);
var inst_28910 = (state_28944[(7)]);
var inst_28915 = cljs.core.nth.call(null,inst_28910,(0),null);
var inst_28916__$1 = cljs.core.nth.call(null,inst_28910,(1),null);
var state_28944__$1 = (function (){var statearr_28958 = state_28944;
(statearr_28958[(10)] = inst_28915);

(statearr_28958[(11)] = inst_28916__$1);

return statearr_28958;
})();
if(cljs.core.truth_(inst_28916__$1)){
var statearr_28959_28983 = state_28944__$1;
(statearr_28959_28983[(1)] = (8));

} else {
var statearr_28960_28984 = state_28944__$1;
(statearr_28960_28984[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28945 === (14))){
var inst_28925 = (state_28944[(9)]);
var inst_28915 = (state_28944[(10)]);
var inst_28923 = (state_28944[(2)]);
var inst_28924 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_28925__$1 = cljs.core.get.call(null,inst_28924,inst_28915);
var state_28944__$1 = (function (){var statearr_28961 = state_28944;
(statearr_28961[(8)] = inst_28923);

(statearr_28961[(9)] = inst_28925__$1);

return statearr_28961;
})();
if(cljs.core.truth_(inst_28925__$1)){
var statearr_28962_28985 = state_28944__$1;
(statearr_28962_28985[(1)] = (15));

} else {
var statearr_28963_28986 = state_28944__$1;
(statearr_28963_28986[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28945 === (16))){
var inst_28923 = (state_28944[(8)]);
var inst_28929 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_28923);
var state_28944__$1 = state_28944;
var statearr_28964_28987 = state_28944__$1;
(statearr_28964_28987[(2)] = inst_28929);

(statearr_28964_28987[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28945 === (10))){
var inst_28936 = (state_28944[(2)]);
var state_28944__$1 = (function (){var statearr_28965 = state_28944;
(statearr_28965[(12)] = inst_28936);

return statearr_28965;
})();
var statearr_28966_28988 = state_28944__$1;
(statearr_28966_28988[(2)] = null);

(statearr_28966_28988[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28945 === (8))){
var inst_28916 = (state_28944[(11)]);
var inst_28918 = eval(inst_28916);
var state_28944__$1 = state_28944;
var statearr_28967_28989 = state_28944__$1;
(statearr_28967_28989[(2)] = inst_28918);

(statearr_28967_28989[(1)] = (10));


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
});})(c__23769__auto__))
;
return ((function (switch__23678__auto__,c__23769__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__23679__auto__ = null;
var figwheel$client$file_reloading$state_machine__23679__auto____0 = (function (){
var statearr_28968 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28968[(0)] = figwheel$client$file_reloading$state_machine__23679__auto__);

(statearr_28968[(1)] = (1));

return statearr_28968;
});
var figwheel$client$file_reloading$state_machine__23679__auto____1 = (function (state_28944){
while(true){
var ret_value__23680__auto__ = (function (){try{while(true){
var result__23681__auto__ = switch__23678__auto__.call(null,state_28944);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23681__auto__;
}
break;
}
}catch (e28969){if((e28969 instanceof Object)){
var ex__23682__auto__ = e28969;
var statearr_28970_28990 = state_28944;
(statearr_28970_28990[(5)] = ex__23682__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28944);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28969;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28991 = state_28944;
state_28944 = G__28991;
continue;
} else {
return ret_value__23680__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__23679__auto__ = function(state_28944){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__23679__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__23679__auto____1.call(this,state_28944);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__23679__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__23679__auto____0;
figwheel$client$file_reloading$state_machine__23679__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__23679__auto____1;
return figwheel$client$file_reloading$state_machine__23679__auto__;
})()
;})(switch__23678__auto__,c__23769__auto__))
})();
var state__23771__auto__ = (function (){var statearr_28971 = f__23770__auto__.call(null);
(statearr_28971[(6)] = c__23769__auto__);

return statearr_28971;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23771__auto__);
});})(c__23769__auto__))
);

return c__23769__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__28993 = arguments.length;
switch (G__28993) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__28995,callback){
var map__28996 = p__28995;
var map__28996__$1 = ((((!((map__28996 == null)))?(((((map__28996.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28996.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28996):map__28996);
var file_msg = map__28996__$1;
var namespace = cljs.core.get.call(null,map__28996__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__28996,map__28996__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__28996,map__28996__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__28998){
var map__28999 = p__28998;
var map__28999__$1 = ((((!((map__28999 == null)))?(((((map__28999.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28999.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28999):map__28999);
var file_msg = map__28999__$1;
var namespace = cljs.core.get.call(null,map__28999__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return !((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__29001){
var map__29002 = p__29001;
var map__29002__$1 = ((((!((map__29002 == null)))?(((((map__29002.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29002.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29002):map__29002);
var file_msg = map__29002__$1;
var namespace = cljs.core.get.call(null,map__29002__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__3938__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__3938__auto__){
var or__3949__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3949__auto____$1)){
return or__3949__auto____$1;
} else {
var or__3949__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__3949__auto____$2)){
return or__3949__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__3938__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__29004,callback){
var map__29005 = p__29004;
var map__29005__$1 = ((((!((map__29005 == null)))?(((((map__29005.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29005.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29005):map__29005);
var file_msg = map__29005__$1;
var request_url = cljs.core.get.call(null,map__29005__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__29005__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__23769__auto___29055 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23769__auto___29055,out){
return (function (){
var f__23770__auto__ = (function (){var switch__23678__auto__ = ((function (c__23769__auto___29055,out){
return (function (state_29040){
var state_val_29041 = (state_29040[(1)]);
if((state_val_29041 === (1))){
var inst_29014 = cljs.core.seq.call(null,files);
var inst_29015 = cljs.core.first.call(null,inst_29014);
var inst_29016 = cljs.core.next.call(null,inst_29014);
var inst_29017 = files;
var state_29040__$1 = (function (){var statearr_29042 = state_29040;
(statearr_29042[(7)] = inst_29015);

(statearr_29042[(8)] = inst_29016);

(statearr_29042[(9)] = inst_29017);

return statearr_29042;
})();
var statearr_29043_29056 = state_29040__$1;
(statearr_29043_29056[(2)] = null);

(statearr_29043_29056[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29041 === (2))){
var inst_29023 = (state_29040[(10)]);
var inst_29017 = (state_29040[(9)]);
var inst_29022 = cljs.core.seq.call(null,inst_29017);
var inst_29023__$1 = cljs.core.first.call(null,inst_29022);
var inst_29024 = cljs.core.next.call(null,inst_29022);
var inst_29025 = (inst_29023__$1 == null);
var inst_29026 = cljs.core.not.call(null,inst_29025);
var state_29040__$1 = (function (){var statearr_29044 = state_29040;
(statearr_29044[(11)] = inst_29024);

(statearr_29044[(10)] = inst_29023__$1);

return statearr_29044;
})();
if(inst_29026){
var statearr_29045_29057 = state_29040__$1;
(statearr_29045_29057[(1)] = (4));

} else {
var statearr_29046_29058 = state_29040__$1;
(statearr_29046_29058[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29041 === (3))){
var inst_29038 = (state_29040[(2)]);
var state_29040__$1 = state_29040;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29040__$1,inst_29038);
} else {
if((state_val_29041 === (4))){
var inst_29023 = (state_29040[(10)]);
var inst_29028 = figwheel.client.file_reloading.reload_js_file.call(null,inst_29023);
var state_29040__$1 = state_29040;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29040__$1,(7),inst_29028);
} else {
if((state_val_29041 === (5))){
var inst_29034 = cljs.core.async.close_BANG_.call(null,out);
var state_29040__$1 = state_29040;
var statearr_29047_29059 = state_29040__$1;
(statearr_29047_29059[(2)] = inst_29034);

(statearr_29047_29059[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29041 === (6))){
var inst_29036 = (state_29040[(2)]);
var state_29040__$1 = state_29040;
var statearr_29048_29060 = state_29040__$1;
(statearr_29048_29060[(2)] = inst_29036);

(statearr_29048_29060[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29041 === (7))){
var inst_29024 = (state_29040[(11)]);
var inst_29030 = (state_29040[(2)]);
var inst_29031 = cljs.core.async.put_BANG_.call(null,out,inst_29030);
var inst_29017 = inst_29024;
var state_29040__$1 = (function (){var statearr_29049 = state_29040;
(statearr_29049[(12)] = inst_29031);

(statearr_29049[(9)] = inst_29017);

return statearr_29049;
})();
var statearr_29050_29061 = state_29040__$1;
(statearr_29050_29061[(2)] = null);

(statearr_29050_29061[(1)] = (2));


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
});})(c__23769__auto___29055,out))
;
return ((function (switch__23678__auto__,c__23769__auto___29055,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23679__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23679__auto____0 = (function (){
var statearr_29051 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29051[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23679__auto__);

(statearr_29051[(1)] = (1));

return statearr_29051;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23679__auto____1 = (function (state_29040){
while(true){
var ret_value__23680__auto__ = (function (){try{while(true){
var result__23681__auto__ = switch__23678__auto__.call(null,state_29040);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23681__auto__;
}
break;
}
}catch (e29052){if((e29052 instanceof Object)){
var ex__23682__auto__ = e29052;
var statearr_29053_29062 = state_29040;
(statearr_29053_29062[(5)] = ex__23682__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29040);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29052;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29063 = state_29040;
state_29040 = G__29063;
continue;
} else {
return ret_value__23680__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23679__auto__ = function(state_29040){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23679__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23679__auto____1.call(this,state_29040);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23679__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23679__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23679__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23679__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23679__auto__;
})()
;})(switch__23678__auto__,c__23769__auto___29055,out))
})();
var state__23771__auto__ = (function (){var statearr_29054 = f__23770__auto__.call(null);
(statearr_29054[(6)] = c__23769__auto___29055);

return statearr_29054;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23771__auto__);
});})(c__23769__auto___29055,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__29064,opts){
var map__29065 = p__29064;
var map__29065__$1 = ((((!((map__29065 == null)))?(((((map__29065.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29065.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29065):map__29065);
var eval_body = cljs.core.get.call(null,map__29065__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__29065__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__3938__auto__ = eval_body;
if(cljs.core.truth_(and__3938__auto__)){
return typeof eval_body === 'string';
} else {
return and__3938__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e29067){var e = e29067;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5455__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__29068_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__29068_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5455__auto__)){
var file_msg = temp__5455__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__29069){
var vec__29070 = p__29069;
var k = cljs.core.nth.call(null,vec__29070,(0),null);
var v = cljs.core.nth.call(null,vec__29070,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__29073){
var vec__29074 = p__29073;
var k = cljs.core.nth.call(null,vec__29074,(0),null);
var v = cljs.core.nth.call(null,vec__29074,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__29080,p__29081){
var map__29082 = p__29080;
var map__29082__$1 = ((((!((map__29082 == null)))?(((((map__29082.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29082.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29082):map__29082);
var opts = map__29082__$1;
var before_jsload = cljs.core.get.call(null,map__29082__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__29082__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__29082__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__29083 = p__29081;
var map__29083__$1 = ((((!((map__29083 == null)))?(((((map__29083.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29083.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29083):map__29083);
var msg = map__29083__$1;
var files = cljs.core.get.call(null,map__29083__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__29083__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__29083__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__23769__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23769__auto__,map__29082,map__29082__$1,opts,before_jsload,on_jsload,reload_dependents,map__29083,map__29083__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__23770__auto__ = (function (){var switch__23678__auto__ = ((function (c__23769__auto__,map__29082,map__29082__$1,opts,before_jsload,on_jsload,reload_dependents,map__29083,map__29083__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_29237){
var state_val_29238 = (state_29237[(1)]);
if((state_val_29238 === (7))){
var inst_29100 = (state_29237[(7)]);
var inst_29098 = (state_29237[(8)]);
var inst_29099 = (state_29237[(9)]);
var inst_29097 = (state_29237[(10)]);
var inst_29105 = cljs.core._nth.call(null,inst_29098,inst_29100);
var inst_29106 = figwheel.client.file_reloading.eval_body.call(null,inst_29105,opts);
var inst_29107 = (inst_29100 + (1));
var tmp29239 = inst_29098;
var tmp29240 = inst_29099;
var tmp29241 = inst_29097;
var inst_29097__$1 = tmp29241;
var inst_29098__$1 = tmp29239;
var inst_29099__$1 = tmp29240;
var inst_29100__$1 = inst_29107;
var state_29237__$1 = (function (){var statearr_29242 = state_29237;
(statearr_29242[(7)] = inst_29100__$1);

(statearr_29242[(8)] = inst_29098__$1);

(statearr_29242[(9)] = inst_29099__$1);

(statearr_29242[(11)] = inst_29106);

(statearr_29242[(10)] = inst_29097__$1);

return statearr_29242;
})();
var statearr_29243_29326 = state_29237__$1;
(statearr_29243_29326[(2)] = null);

(statearr_29243_29326[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29238 === (20))){
var inst_29140 = (state_29237[(12)]);
var inst_29148 = figwheel.client.file_reloading.sort_files.call(null,inst_29140);
var state_29237__$1 = state_29237;
var statearr_29244_29327 = state_29237__$1;
(statearr_29244_29327[(2)] = inst_29148);

(statearr_29244_29327[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29238 === (27))){
var state_29237__$1 = state_29237;
var statearr_29245_29328 = state_29237__$1;
(statearr_29245_29328[(2)] = null);

(statearr_29245_29328[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29238 === (1))){
var inst_29089 = (state_29237[(13)]);
var inst_29086 = before_jsload.call(null,files);
var inst_29087 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_29088 = (function (){return ((function (inst_29089,inst_29086,inst_29087,state_val_29238,c__23769__auto__,map__29082,map__29082__$1,opts,before_jsload,on_jsload,reload_dependents,map__29083,map__29083__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__29077_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29077_SHARP_);
});
;})(inst_29089,inst_29086,inst_29087,state_val_29238,c__23769__auto__,map__29082,map__29082__$1,opts,before_jsload,on_jsload,reload_dependents,map__29083,map__29083__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29089__$1 = cljs.core.filter.call(null,inst_29088,files);
var inst_29090 = cljs.core.not_empty.call(null,inst_29089__$1);
var state_29237__$1 = (function (){var statearr_29246 = state_29237;
(statearr_29246[(14)] = inst_29086);

(statearr_29246[(15)] = inst_29087);

(statearr_29246[(13)] = inst_29089__$1);

return statearr_29246;
})();
if(cljs.core.truth_(inst_29090)){
var statearr_29247_29329 = state_29237__$1;
(statearr_29247_29329[(1)] = (2));

} else {
var statearr_29248_29330 = state_29237__$1;
(statearr_29248_29330[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29238 === (24))){
var state_29237__$1 = state_29237;
var statearr_29249_29331 = state_29237__$1;
(statearr_29249_29331[(2)] = null);

(statearr_29249_29331[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29238 === (39))){
var inst_29190 = (state_29237[(16)]);
var state_29237__$1 = state_29237;
var statearr_29250_29332 = state_29237__$1;
(statearr_29250_29332[(2)] = inst_29190);

(statearr_29250_29332[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29238 === (46))){
var inst_29232 = (state_29237[(2)]);
var state_29237__$1 = state_29237;
var statearr_29251_29333 = state_29237__$1;
(statearr_29251_29333[(2)] = inst_29232);

(statearr_29251_29333[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29238 === (4))){
var inst_29134 = (state_29237[(2)]);
var inst_29135 = cljs.core.List.EMPTY;
var inst_29136 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_29135);
var inst_29137 = (function (){return ((function (inst_29134,inst_29135,inst_29136,state_val_29238,c__23769__auto__,map__29082,map__29082__$1,opts,before_jsload,on_jsload,reload_dependents,map__29083,map__29083__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__29078_SHARP_){
var and__3938__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__29078_SHARP_);
if(cljs.core.truth_(and__3938__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29078_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__29078_SHARP_))));
} else {
return and__3938__auto__;
}
});
;})(inst_29134,inst_29135,inst_29136,state_val_29238,c__23769__auto__,map__29082,map__29082__$1,opts,before_jsload,on_jsload,reload_dependents,map__29083,map__29083__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29138 = cljs.core.filter.call(null,inst_29137,files);
var inst_29139 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_29140 = cljs.core.concat.call(null,inst_29138,inst_29139);
var state_29237__$1 = (function (){var statearr_29252 = state_29237;
(statearr_29252[(12)] = inst_29140);

(statearr_29252[(17)] = inst_29134);

(statearr_29252[(18)] = inst_29136);

return statearr_29252;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_29253_29334 = state_29237__$1;
(statearr_29253_29334[(1)] = (16));

} else {
var statearr_29254_29335 = state_29237__$1;
(statearr_29254_29335[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29238 === (15))){
var inst_29124 = (state_29237[(2)]);
var state_29237__$1 = state_29237;
var statearr_29255_29336 = state_29237__$1;
(statearr_29255_29336[(2)] = inst_29124);

(statearr_29255_29336[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29238 === (21))){
var inst_29150 = (state_29237[(19)]);
var inst_29150__$1 = (state_29237[(2)]);
var inst_29151 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_29150__$1);
var state_29237__$1 = (function (){var statearr_29256 = state_29237;
(statearr_29256[(19)] = inst_29150__$1);

return statearr_29256;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29237__$1,(22),inst_29151);
} else {
if((state_val_29238 === (31))){
var inst_29235 = (state_29237[(2)]);
var state_29237__$1 = state_29237;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29237__$1,inst_29235);
} else {
if((state_val_29238 === (32))){
var inst_29190 = (state_29237[(16)]);
var inst_29195 = inst_29190.cljs$lang$protocol_mask$partition0$;
var inst_29196 = (inst_29195 & (64));
var inst_29197 = inst_29190.cljs$core$ISeq$;
var inst_29198 = (cljs.core.PROTOCOL_SENTINEL === inst_29197);
var inst_29199 = ((inst_29196) || (inst_29198));
var state_29237__$1 = state_29237;
if(cljs.core.truth_(inst_29199)){
var statearr_29257_29337 = state_29237__$1;
(statearr_29257_29337[(1)] = (35));

} else {
var statearr_29258_29338 = state_29237__$1;
(statearr_29258_29338[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29238 === (40))){
var inst_29212 = (state_29237[(20)]);
var inst_29211 = (state_29237[(2)]);
var inst_29212__$1 = cljs.core.get.call(null,inst_29211,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_29213 = cljs.core.get.call(null,inst_29211,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_29214 = cljs.core.not_empty.call(null,inst_29212__$1);
var state_29237__$1 = (function (){var statearr_29259 = state_29237;
(statearr_29259[(21)] = inst_29213);

(statearr_29259[(20)] = inst_29212__$1);

return statearr_29259;
})();
if(cljs.core.truth_(inst_29214)){
var statearr_29260_29339 = state_29237__$1;
(statearr_29260_29339[(1)] = (41));

} else {
var statearr_29261_29340 = state_29237__$1;
(statearr_29261_29340[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29238 === (33))){
var state_29237__$1 = state_29237;
var statearr_29262_29341 = state_29237__$1;
(statearr_29262_29341[(2)] = false);

(statearr_29262_29341[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29238 === (13))){
var inst_29110 = (state_29237[(22)]);
var inst_29114 = cljs.core.chunk_first.call(null,inst_29110);
var inst_29115 = cljs.core.chunk_rest.call(null,inst_29110);
var inst_29116 = cljs.core.count.call(null,inst_29114);
var inst_29097 = inst_29115;
var inst_29098 = inst_29114;
var inst_29099 = inst_29116;
var inst_29100 = (0);
var state_29237__$1 = (function (){var statearr_29263 = state_29237;
(statearr_29263[(7)] = inst_29100);

(statearr_29263[(8)] = inst_29098);

(statearr_29263[(9)] = inst_29099);

(statearr_29263[(10)] = inst_29097);

return statearr_29263;
})();
var statearr_29264_29342 = state_29237__$1;
(statearr_29264_29342[(2)] = null);

(statearr_29264_29342[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29238 === (22))){
var inst_29158 = (state_29237[(23)]);
var inst_29153 = (state_29237[(24)]);
var inst_29154 = (state_29237[(25)]);
var inst_29150 = (state_29237[(19)]);
var inst_29153__$1 = (state_29237[(2)]);
var inst_29154__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29153__$1);
var inst_29155 = (function (){var all_files = inst_29150;
var res_SINGLEQUOTE_ = inst_29153__$1;
var res = inst_29154__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_29158,inst_29153,inst_29154,inst_29150,inst_29153__$1,inst_29154__$1,state_val_29238,c__23769__auto__,map__29082,map__29082__$1,opts,before_jsload,on_jsload,reload_dependents,map__29083,map__29083__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__29079_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__29079_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_29158,inst_29153,inst_29154,inst_29150,inst_29153__$1,inst_29154__$1,state_val_29238,c__23769__auto__,map__29082,map__29082__$1,opts,before_jsload,on_jsload,reload_dependents,map__29083,map__29083__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29156 = cljs.core.filter.call(null,inst_29155,inst_29153__$1);
var inst_29157 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_29158__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29157);
var inst_29159 = cljs.core.not_empty.call(null,inst_29158__$1);
var state_29237__$1 = (function (){var statearr_29265 = state_29237;
(statearr_29265[(23)] = inst_29158__$1);

(statearr_29265[(24)] = inst_29153__$1);

(statearr_29265[(26)] = inst_29156);

(statearr_29265[(25)] = inst_29154__$1);

return statearr_29265;
})();
if(cljs.core.truth_(inst_29159)){
var statearr_29266_29343 = state_29237__$1;
(statearr_29266_29343[(1)] = (23));

} else {
var statearr_29267_29344 = state_29237__$1;
(statearr_29267_29344[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29238 === (36))){
var state_29237__$1 = state_29237;
var statearr_29268_29345 = state_29237__$1;
(statearr_29268_29345[(2)] = false);

(statearr_29268_29345[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29238 === (41))){
var inst_29212 = (state_29237[(20)]);
var inst_29216 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_29217 = cljs.core.map.call(null,inst_29216,inst_29212);
var inst_29218 = cljs.core.pr_str.call(null,inst_29217);
var inst_29219 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29218)].join('');
var inst_29220 = figwheel.client.utils.log.call(null,inst_29219);
var state_29237__$1 = state_29237;
var statearr_29269_29346 = state_29237__$1;
(statearr_29269_29346[(2)] = inst_29220);

(statearr_29269_29346[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29238 === (43))){
var inst_29213 = (state_29237[(21)]);
var inst_29223 = (state_29237[(2)]);
var inst_29224 = cljs.core.not_empty.call(null,inst_29213);
var state_29237__$1 = (function (){var statearr_29270 = state_29237;
(statearr_29270[(27)] = inst_29223);

return statearr_29270;
})();
if(cljs.core.truth_(inst_29224)){
var statearr_29271_29347 = state_29237__$1;
(statearr_29271_29347[(1)] = (44));

} else {
var statearr_29272_29348 = state_29237__$1;
(statearr_29272_29348[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29238 === (29))){
var inst_29158 = (state_29237[(23)]);
var inst_29153 = (state_29237[(24)]);
var inst_29156 = (state_29237[(26)]);
var inst_29190 = (state_29237[(16)]);
var inst_29154 = (state_29237[(25)]);
var inst_29150 = (state_29237[(19)]);
var inst_29186 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_29189 = (function (){var all_files = inst_29150;
var res_SINGLEQUOTE_ = inst_29153;
var res = inst_29154;
var files_not_loaded = inst_29156;
var dependencies_that_loaded = inst_29158;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29158,inst_29153,inst_29156,inst_29190,inst_29154,inst_29150,inst_29186,state_val_29238,c__23769__auto__,map__29082,map__29082__$1,opts,before_jsload,on_jsload,reload_dependents,map__29083,map__29083__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29188){
var map__29273 = p__29188;
var map__29273__$1 = ((((!((map__29273 == null)))?(((((map__29273.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29273.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29273):map__29273);
var namespace = cljs.core.get.call(null,map__29273__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29158,inst_29153,inst_29156,inst_29190,inst_29154,inst_29150,inst_29186,state_val_29238,c__23769__auto__,map__29082,map__29082__$1,opts,before_jsload,on_jsload,reload_dependents,map__29083,map__29083__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29190__$1 = cljs.core.group_by.call(null,inst_29189,inst_29156);
var inst_29192 = (inst_29190__$1 == null);
var inst_29193 = cljs.core.not.call(null,inst_29192);
var state_29237__$1 = (function (){var statearr_29275 = state_29237;
(statearr_29275[(28)] = inst_29186);

(statearr_29275[(16)] = inst_29190__$1);

return statearr_29275;
})();
if(inst_29193){
var statearr_29276_29349 = state_29237__$1;
(statearr_29276_29349[(1)] = (32));

} else {
var statearr_29277_29350 = state_29237__$1;
(statearr_29277_29350[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29238 === (44))){
var inst_29213 = (state_29237[(21)]);
var inst_29226 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29213);
var inst_29227 = cljs.core.pr_str.call(null,inst_29226);
var inst_29228 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29227)].join('');
var inst_29229 = figwheel.client.utils.log.call(null,inst_29228);
var state_29237__$1 = state_29237;
var statearr_29278_29351 = state_29237__$1;
(statearr_29278_29351[(2)] = inst_29229);

(statearr_29278_29351[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29238 === (6))){
var inst_29131 = (state_29237[(2)]);
var state_29237__$1 = state_29237;
var statearr_29279_29352 = state_29237__$1;
(statearr_29279_29352[(2)] = inst_29131);

(statearr_29279_29352[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29238 === (28))){
var inst_29156 = (state_29237[(26)]);
var inst_29183 = (state_29237[(2)]);
var inst_29184 = cljs.core.not_empty.call(null,inst_29156);
var state_29237__$1 = (function (){var statearr_29280 = state_29237;
(statearr_29280[(29)] = inst_29183);

return statearr_29280;
})();
if(cljs.core.truth_(inst_29184)){
var statearr_29281_29353 = state_29237__$1;
(statearr_29281_29353[(1)] = (29));

} else {
var statearr_29282_29354 = state_29237__$1;
(statearr_29282_29354[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29238 === (25))){
var inst_29154 = (state_29237[(25)]);
var inst_29170 = (state_29237[(2)]);
var inst_29171 = cljs.core.not_empty.call(null,inst_29154);
var state_29237__$1 = (function (){var statearr_29283 = state_29237;
(statearr_29283[(30)] = inst_29170);

return statearr_29283;
})();
if(cljs.core.truth_(inst_29171)){
var statearr_29284_29355 = state_29237__$1;
(statearr_29284_29355[(1)] = (26));

} else {
var statearr_29285_29356 = state_29237__$1;
(statearr_29285_29356[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29238 === (34))){
var inst_29206 = (state_29237[(2)]);
var state_29237__$1 = state_29237;
if(cljs.core.truth_(inst_29206)){
var statearr_29286_29357 = state_29237__$1;
(statearr_29286_29357[(1)] = (38));

} else {
var statearr_29287_29358 = state_29237__$1;
(statearr_29287_29358[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29238 === (17))){
var state_29237__$1 = state_29237;
var statearr_29288_29359 = state_29237__$1;
(statearr_29288_29359[(2)] = recompile_dependents);

(statearr_29288_29359[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29238 === (3))){
var state_29237__$1 = state_29237;
var statearr_29289_29360 = state_29237__$1;
(statearr_29289_29360[(2)] = null);

(statearr_29289_29360[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29238 === (12))){
var inst_29127 = (state_29237[(2)]);
var state_29237__$1 = state_29237;
var statearr_29290_29361 = state_29237__$1;
(statearr_29290_29361[(2)] = inst_29127);

(statearr_29290_29361[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29238 === (2))){
var inst_29089 = (state_29237[(13)]);
var inst_29096 = cljs.core.seq.call(null,inst_29089);
var inst_29097 = inst_29096;
var inst_29098 = null;
var inst_29099 = (0);
var inst_29100 = (0);
var state_29237__$1 = (function (){var statearr_29291 = state_29237;
(statearr_29291[(7)] = inst_29100);

(statearr_29291[(8)] = inst_29098);

(statearr_29291[(9)] = inst_29099);

(statearr_29291[(10)] = inst_29097);

return statearr_29291;
})();
var statearr_29292_29362 = state_29237__$1;
(statearr_29292_29362[(2)] = null);

(statearr_29292_29362[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29238 === (23))){
var inst_29158 = (state_29237[(23)]);
var inst_29153 = (state_29237[(24)]);
var inst_29156 = (state_29237[(26)]);
var inst_29154 = (state_29237[(25)]);
var inst_29150 = (state_29237[(19)]);
var inst_29161 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_29163 = (function (){var all_files = inst_29150;
var res_SINGLEQUOTE_ = inst_29153;
var res = inst_29154;
var files_not_loaded = inst_29156;
var dependencies_that_loaded = inst_29158;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29158,inst_29153,inst_29156,inst_29154,inst_29150,inst_29161,state_val_29238,c__23769__auto__,map__29082,map__29082__$1,opts,before_jsload,on_jsload,reload_dependents,map__29083,map__29083__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29162){
var map__29293 = p__29162;
var map__29293__$1 = ((((!((map__29293 == null)))?(((((map__29293.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29293.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29293):map__29293);
var request_url = cljs.core.get.call(null,map__29293__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29158,inst_29153,inst_29156,inst_29154,inst_29150,inst_29161,state_val_29238,c__23769__auto__,map__29082,map__29082__$1,opts,before_jsload,on_jsload,reload_dependents,map__29083,map__29083__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29164 = cljs.core.reverse.call(null,inst_29158);
var inst_29165 = cljs.core.map.call(null,inst_29163,inst_29164);
var inst_29166 = cljs.core.pr_str.call(null,inst_29165);
var inst_29167 = figwheel.client.utils.log.call(null,inst_29166);
var state_29237__$1 = (function (){var statearr_29295 = state_29237;
(statearr_29295[(31)] = inst_29161);

return statearr_29295;
})();
var statearr_29296_29363 = state_29237__$1;
(statearr_29296_29363[(2)] = inst_29167);

(statearr_29296_29363[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29238 === (35))){
var state_29237__$1 = state_29237;
var statearr_29297_29364 = state_29237__$1;
(statearr_29297_29364[(2)] = true);

(statearr_29297_29364[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29238 === (19))){
var inst_29140 = (state_29237[(12)]);
var inst_29146 = figwheel.client.file_reloading.expand_files.call(null,inst_29140);
var state_29237__$1 = state_29237;
var statearr_29298_29365 = state_29237__$1;
(statearr_29298_29365[(2)] = inst_29146);

(statearr_29298_29365[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29238 === (11))){
var state_29237__$1 = state_29237;
var statearr_29299_29366 = state_29237__$1;
(statearr_29299_29366[(2)] = null);

(statearr_29299_29366[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29238 === (9))){
var inst_29129 = (state_29237[(2)]);
var state_29237__$1 = state_29237;
var statearr_29300_29367 = state_29237__$1;
(statearr_29300_29367[(2)] = inst_29129);

(statearr_29300_29367[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29238 === (5))){
var inst_29100 = (state_29237[(7)]);
var inst_29099 = (state_29237[(9)]);
var inst_29102 = (inst_29100 < inst_29099);
var inst_29103 = inst_29102;
var state_29237__$1 = state_29237;
if(cljs.core.truth_(inst_29103)){
var statearr_29301_29368 = state_29237__$1;
(statearr_29301_29368[(1)] = (7));

} else {
var statearr_29302_29369 = state_29237__$1;
(statearr_29302_29369[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29238 === (14))){
var inst_29110 = (state_29237[(22)]);
var inst_29119 = cljs.core.first.call(null,inst_29110);
var inst_29120 = figwheel.client.file_reloading.eval_body.call(null,inst_29119,opts);
var inst_29121 = cljs.core.next.call(null,inst_29110);
var inst_29097 = inst_29121;
var inst_29098 = null;
var inst_29099 = (0);
var inst_29100 = (0);
var state_29237__$1 = (function (){var statearr_29303 = state_29237;
(statearr_29303[(7)] = inst_29100);

(statearr_29303[(8)] = inst_29098);

(statearr_29303[(32)] = inst_29120);

(statearr_29303[(9)] = inst_29099);

(statearr_29303[(10)] = inst_29097);

return statearr_29303;
})();
var statearr_29304_29370 = state_29237__$1;
(statearr_29304_29370[(2)] = null);

(statearr_29304_29370[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29238 === (45))){
var state_29237__$1 = state_29237;
var statearr_29305_29371 = state_29237__$1;
(statearr_29305_29371[(2)] = null);

(statearr_29305_29371[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29238 === (26))){
var inst_29158 = (state_29237[(23)]);
var inst_29153 = (state_29237[(24)]);
var inst_29156 = (state_29237[(26)]);
var inst_29154 = (state_29237[(25)]);
var inst_29150 = (state_29237[(19)]);
var inst_29173 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_29175 = (function (){var all_files = inst_29150;
var res_SINGLEQUOTE_ = inst_29153;
var res = inst_29154;
var files_not_loaded = inst_29156;
var dependencies_that_loaded = inst_29158;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29158,inst_29153,inst_29156,inst_29154,inst_29150,inst_29173,state_val_29238,c__23769__auto__,map__29082,map__29082__$1,opts,before_jsload,on_jsload,reload_dependents,map__29083,map__29083__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29174){
var map__29306 = p__29174;
var map__29306__$1 = ((((!((map__29306 == null)))?(((((map__29306.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29306.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29306):map__29306);
var namespace = cljs.core.get.call(null,map__29306__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__29306__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29158,inst_29153,inst_29156,inst_29154,inst_29150,inst_29173,state_val_29238,c__23769__auto__,map__29082,map__29082__$1,opts,before_jsload,on_jsload,reload_dependents,map__29083,map__29083__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29176 = cljs.core.map.call(null,inst_29175,inst_29154);
var inst_29177 = cljs.core.pr_str.call(null,inst_29176);
var inst_29178 = figwheel.client.utils.log.call(null,inst_29177);
var inst_29179 = (function (){var all_files = inst_29150;
var res_SINGLEQUOTE_ = inst_29153;
var res = inst_29154;
var files_not_loaded = inst_29156;
var dependencies_that_loaded = inst_29158;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29158,inst_29153,inst_29156,inst_29154,inst_29150,inst_29173,inst_29175,inst_29176,inst_29177,inst_29178,state_val_29238,c__23769__auto__,map__29082,map__29082__$1,opts,before_jsload,on_jsload,reload_dependents,map__29083,map__29083__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29158,inst_29153,inst_29156,inst_29154,inst_29150,inst_29173,inst_29175,inst_29176,inst_29177,inst_29178,state_val_29238,c__23769__auto__,map__29082,map__29082__$1,opts,before_jsload,on_jsload,reload_dependents,map__29083,map__29083__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29180 = setTimeout(inst_29179,(10));
var state_29237__$1 = (function (){var statearr_29308 = state_29237;
(statearr_29308[(33)] = inst_29178);

(statearr_29308[(34)] = inst_29173);

return statearr_29308;
})();
var statearr_29309_29372 = state_29237__$1;
(statearr_29309_29372[(2)] = inst_29180);

(statearr_29309_29372[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29238 === (16))){
var state_29237__$1 = state_29237;
var statearr_29310_29373 = state_29237__$1;
(statearr_29310_29373[(2)] = reload_dependents);

(statearr_29310_29373[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29238 === (38))){
var inst_29190 = (state_29237[(16)]);
var inst_29208 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29190);
var state_29237__$1 = state_29237;
var statearr_29311_29374 = state_29237__$1;
(statearr_29311_29374[(2)] = inst_29208);

(statearr_29311_29374[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29238 === (30))){
var state_29237__$1 = state_29237;
var statearr_29312_29375 = state_29237__$1;
(statearr_29312_29375[(2)] = null);

(statearr_29312_29375[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29238 === (10))){
var inst_29110 = (state_29237[(22)]);
var inst_29112 = cljs.core.chunked_seq_QMARK_.call(null,inst_29110);
var state_29237__$1 = state_29237;
if(inst_29112){
var statearr_29313_29376 = state_29237__$1;
(statearr_29313_29376[(1)] = (13));

} else {
var statearr_29314_29377 = state_29237__$1;
(statearr_29314_29377[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29238 === (18))){
var inst_29144 = (state_29237[(2)]);
var state_29237__$1 = state_29237;
if(cljs.core.truth_(inst_29144)){
var statearr_29315_29378 = state_29237__$1;
(statearr_29315_29378[(1)] = (19));

} else {
var statearr_29316_29379 = state_29237__$1;
(statearr_29316_29379[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29238 === (42))){
var state_29237__$1 = state_29237;
var statearr_29317_29380 = state_29237__$1;
(statearr_29317_29380[(2)] = null);

(statearr_29317_29380[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29238 === (37))){
var inst_29203 = (state_29237[(2)]);
var state_29237__$1 = state_29237;
var statearr_29318_29381 = state_29237__$1;
(statearr_29318_29381[(2)] = inst_29203);

(statearr_29318_29381[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29238 === (8))){
var inst_29110 = (state_29237[(22)]);
var inst_29097 = (state_29237[(10)]);
var inst_29110__$1 = cljs.core.seq.call(null,inst_29097);
var state_29237__$1 = (function (){var statearr_29319 = state_29237;
(statearr_29319[(22)] = inst_29110__$1);

return statearr_29319;
})();
if(inst_29110__$1){
var statearr_29320_29382 = state_29237__$1;
(statearr_29320_29382[(1)] = (10));

} else {
var statearr_29321_29383 = state_29237__$1;
(statearr_29321_29383[(1)] = (11));

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
}
});})(c__23769__auto__,map__29082,map__29082__$1,opts,before_jsload,on_jsload,reload_dependents,map__29083,map__29083__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__23678__auto__,c__23769__auto__,map__29082,map__29082__$1,opts,before_jsload,on_jsload,reload_dependents,map__29083,map__29083__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23679__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23679__auto____0 = (function (){
var statearr_29322 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29322[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__23679__auto__);

(statearr_29322[(1)] = (1));

return statearr_29322;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23679__auto____1 = (function (state_29237){
while(true){
var ret_value__23680__auto__ = (function (){try{while(true){
var result__23681__auto__ = switch__23678__auto__.call(null,state_29237);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23681__auto__;
}
break;
}
}catch (e29323){if((e29323 instanceof Object)){
var ex__23682__auto__ = e29323;
var statearr_29324_29384 = state_29237;
(statearr_29324_29384[(5)] = ex__23682__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29237);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29323;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29385 = state_29237;
state_29237 = G__29385;
continue;
} else {
return ret_value__23680__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__23679__auto__ = function(state_29237){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23679__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23679__auto____1.call(this,state_29237);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__23679__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23679__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__23679__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23679__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23679__auto__;
})()
;})(switch__23678__auto__,c__23769__auto__,map__29082,map__29082__$1,opts,before_jsload,on_jsload,reload_dependents,map__29083,map__29083__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__23771__auto__ = (function (){var statearr_29325 = f__23770__auto__.call(null);
(statearr_29325[(6)] = c__23769__auto__);

return statearr_29325;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23771__auto__);
});})(c__23769__auto__,map__29082,map__29082__$1,opts,before_jsload,on_jsload,reload_dependents,map__29083,map__29083__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__23769__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__29388,link){
var map__29389 = p__29388;
var map__29389__$1 = ((((!((map__29389 == null)))?(((((map__29389.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29389.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29389):map__29389);
var file = cljs.core.get.call(null,map__29389__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__29389,map__29389__$1,file){
return (function (p1__29386_SHARP_,p2__29387_SHARP_){
if(cljs.core._EQ_.call(null,p1__29386_SHARP_,p2__29387_SHARP_)){
return p1__29386_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__29389,map__29389__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__29392){
var map__29393 = p__29392;
var map__29393__$1 = ((((!((map__29393 == null)))?(((((map__29393.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29393.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29393):map__29393);
var match_length = cljs.core.get.call(null,map__29393__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__29393__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__29391_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__29391_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5457__auto__)){
var res = temp__5457__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__29395_SHARP_,p2__29396_SHARP_){
return cljs.core.assoc.call(null,p1__29395_SHARP_,cljs.core.get.call(null,p2__29396_SHARP_,key),p2__29396_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5455__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5455__auto__)){
var link = temp__5455__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5455__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5455__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_29397 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_29397);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_29397);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__29398,p__29399){
var map__29400 = p__29398;
var map__29400__$1 = ((((!((map__29400 == null)))?(((((map__29400.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29400.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29400):map__29400);
var on_cssload = cljs.core.get.call(null,map__29400__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__29401 = p__29399;
var map__29401__$1 = ((((!((map__29401 == null)))?(((((map__29401.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29401.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29401):map__29401);
var files_msg = map__29401__$1;
var files = cljs.core.get.call(null,map__29401__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__5457__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5457__auto__)){
var f_datas = temp__5457__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1538856227623
