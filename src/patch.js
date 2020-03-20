/**
 * Created by coolbf on 2017/3/9.
 */

if (!Array.prototype.indexOf){
	Array.prototype.indexOf = function(elt /*, from*/){
		var len = this.length >>> 0;
		var from = Number(arguments[1]) || 0;
		from = (from < 0)
			? Math.ceil(from)
			: Math.floor(from);
		if (from < 0)
			from += len;
		for (; from < len; from++)
		{
			if (from in this &&
				this[from] === elt)
				return from;
		}
		return -1;
	};
}

window._console = window.console;//将原始console对象缓存
window.console = (function (orgConsole) {
	return {//构造的新console对象
		log: getConsoleFn("log"),
		debug: getConsoleFn("debug"),
		info: getConsoleFn("info"),
		warn: getConsoleFn("warn"),
		exception: getConsoleFn("exception"),
		assert: getConsoleFn("assert"),
		dir: getConsoleFn("dir"),
		dirxml: getConsoleFn("dirxml"),
		trace: getConsoleFn("trace"),
		group: getConsoleFn("group"),
		groupCollapsed: getConsoleFn("groupCollapsed"),
		groupEnd: getConsoleFn("groupEnd"),
		profile: getConsoleFn("profile"),
		profileEnd: getConsoleFn("profileEnd"),
		count: getConsoleFn("count"),
		clear: getConsoleFn("clear"),
		time: getConsoleFn("time"),
		timeEnd: getConsoleFn("timeEnd"),
		timeStamp: getConsoleFn("timeStamp"),
		table: getConsoleFn("table"),
		error: getConsoleFn("error"),
		memory: getConsoleFn("memory"),
		markTimeline: getConsoleFn("markTimeline"),
		timeline: getConsoleFn("timeline"),
		timelineEnd: getConsoleFn("timelineEnd")
	};
	function getConsoleFn(name) {
		return function actionConsole() {
			if (typeof (orgConsole) !== "object") return;
			if (typeof (orgConsole[name]) !== "function") return;//判断原始console对象中是否含有此方法，若没有则直接返回
			return orgConsole[name].apply(orgConsole, Array.prototype.slice.call(arguments));//调用原始函数
		};
	}
}(window._console));

Date.prototype.format = function(fmt) {
	var o = {
		"M+" : this.getMonth()+1,                 //月份
		"d+" : this.getDate(),                    //日
		"h+" : this.getHours(),                   //小时
		"m+" : this.getMinutes(),                 //分
		"s+" : this.getSeconds(),                 //秒
		"q+" : Math.floor((this.getMonth()+3)/3), //季度
		"S"  : this.getMilliseconds()             //毫秒
	};
	if(/(y+)/.test(fmt)) {
		fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
	}
	for(var k in o) {
		if(new RegExp("("+ k +")").test(fmt)){
			fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
		}
	}
	return fmt;
}

if(!String.prototype.trim){
    String.prototype.trim = function ()
    {
        return this.replace(/(^\s*)|(\s*$)/g, "");
    }
    String.prototype.ltrim = function ()
    {
        return this.replace(/(^\s*)/g, "");
    }
    String.prototype.rtrim = function ()
    {
        return this.replace(/(\s*$)/g, "");
    }
}



