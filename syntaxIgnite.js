//"use strict";
var timerStart;
var timerStop;

window.onload = function(){
	timerStart = getDate();
	convert();
}
function getDate(){
		return Date.now();
	}
	

function convert(){
	var bar = document.getElementsByClassName('code');
	bar = bar.length;
	var foo;
	var str;
	var i = 0;
	for(i=0;i<bar;i++){
		str = document.getElementsByClassName('code')[i].innerHTML;
		foo = document.getElementsByClassName('code')[i].id;

		switch(foo){
			case "language-c":
				str = languageC(str);
				document.getElementsByClassName('code')[i].innerHTML = str;
				break;
			case "language-js":
				str = languageJs(str);
				document.getElementsByClassName('code')[i].innerHTML = str;
				break;
			case "language-css":
				str = languageCss(str);
				document.getElementsByClassName('code')[i].innerHTML = str;
				break;
			case "language-html":
				str = languageHTML(str);
				document.getElementsByClassName('code')[i].innerHTML = str;
				break;
			case "language-terminal":
				str = languageTerminal(str);
				document.getElementsByClassName('code')[i].innerHTML = str;
				break;
			case "language-bash":
				str = languageBash(str);
				document.getElementsByClassName('code')[i].innerHTML = str;
				break;
		}	
	}
	timerStop = getDate();
	console.log(timerStop-timerStart+"ms (syntaxignite render time)");
}

function languageBash(str){
	return(str)
}

function languageTerminal(str){
	return(str) .replace(/←/g,'&#8592;')
				.replace(/↑/g,'&#8593;')
				.replace(/→/g,'&#8594;')
				.replace(/↓/g,'&#8595;')
				.replace(/↔/g,'&#8596;')
				.replace(/↕/g,'&#8597;')
				.replace(/↖/g,'&#8598;')
				.replace(/↗/g,'&#8599;')
				.replace(/↘/g,'&#8600;')
				.replace(/↙/g,'&#8601;')
				.replace(/↳/g,'&#8627;')
				.replace(/⎜/g,'&#9116;')
				.replace(/⎡/g,'&#9121;')
				.replace(/⎣/g,'&#9123;')	
}

function languageHTML(str){
	return(str)	
				//angle brackets
				.replace(/</g, '&lt;')
				.replace(/>/g, '&gt;')
				//.replace(/&lt;h1&gt;/, '&lt;<span id="number">h1</span>&gt;')
				.replace(/&lt;(.*?)&gt;/g , '<span id="number">$&</span>')
}
function languageCss(str){
	return(str)	//comments
				.replace(/\/\/(.*?)\n/ , '<span id="comment">$&</span>')
				//class
				.replace(/\.(.*?)[a-z|A-Z|0-9]{0,}/g , '<span id="class">$&</span>')
				//id
				.replace(/#(.*?){/g , '<span id="id">#$1</span>{')
				//hex number
				.replace(/#(.*?);/g , '<span id="number">#$1</span>;')
				//number

				//px
				.replace(/px/,'<span id="px">$&</span>')
				//tags
				.replace(/\n(.*?){/g, '\n<span id="tags">$1</span>{')
}

function languageJs(str){

	return(str) //angle brackets
				.replace(/</g, '&lt;')
				.replace(/>/g, '&gt;')
				//strings
				.replace(/(["'])(?:(?=(\\?))\2.)*?\1/g, "<span id=\"string\"\>$&\</span>")
				//numbers
				//.replace(/[0-9]/g,'<span id="number">$&</span>')
				//comments
				.replace(/\/\*/g,'<span id="comment">/*')
				.replace(/\*\//g,'*/</span>')
				.replace(/\/\/(.*?)\n/g , '<span id="comment">$&</span>')
				//dataTypes
			//	.replace(/var |var/g , '<span id="dataType">$&</span>')	
				//conditional and control
				.replace(/for\(/g ,'<span id="conditional">for</span>&#40;')
				.replace(/for \(/g ,'<span id="conditional">for </span>&#40;')	
				.replace(/while\(/g ,'<span id="conditional">while</span>&#40;')
				.replace(/while \(/g ,'<span id="conditional">while</span> &#40;')
				.replace(/if\(/g ,'<span id="conditional">if</span>&#40;')
				.replace(/if \(/g ,'<span id="conditional">if</span> &#40;')
				.replace(/do\{/g ,'<span id="conditional">do</span>\{')
				.replace(/do \{/g ,'<span id="conditional">do</span> \{')
				.replace(/return/g ,'<span id="conditional">$&</span>')
				.replace(/break/g , '<span id="conditional">$&</span>')
				.replace(/continue/g , '<span id="conditional">$&</span>')
				//escape sequences
				.replace(/\\a|\\b|\\f|\\n|\\r|\\t|\\\//g,'<span id="escape">$&</span>')

}
			
function languageC(str){
		
	return (str)//angle brackets
				.replace(/<\/.*>/, '')
				.replace(/</g, '&lt;')
				.replace(/>/g, '&gt;')
				//#include part 1
				.replace(/#include"/,'#include&quot')
				.replace(/.h"/g,'.h&quot;</span>')
				//strings
				.replace(/(["'])(?:(?=(\\?))\2.)*?\1/g, "\<span id=\"string\"\>$&\<\/span\>")
				//#include part 2
				.replace(/#include/g,'<span id="include">#include')
				.replace(/.h&gt;/g,'.h&gt;</span>')
				//numbers
				.replace(/[0-9]/g,'<span id="number">$&</span>')
				//comments
				.replace(/\/\*/g,'<span id="comment">/*')
				.replace(/\*\//g,'*/</span>')
				.replace(/\/\/(.*?)\n/ , '<span id="comment">$&</span>')
				//place holders
				.replace(/%d|%s|%lf|%f|%c/g,'<span id="placeHolder">$&</span>')
				//dataTypes
				.replace(/int |char |long |float |double |short |unsigned |signed |void /g,'<span id="dataType">$&</span>')
				//conditional and control
				.replace(/for\(/g ,'<span id="conditional">for</span>&#40;')
				.replace(/for \(/g ,'<span id="conditional">for </span>&#40;')	
				.replace(/while\(/g ,'<span id="conditional">while</span>&#40;')
				.replace(/while \(/g ,'<span id="conditional">while</span> &#40;')
				.replace(/if\(/g ,'<span id="conditional">if</span>&#40;')
				.replace(/if \(/g ,'<span id="conditional">if</span> &#40;')
				.replace(/do\{/g ,'<span id="conditional">do</span>\{')
				.replace(/do \{/g ,'<span id="conditional">do</span> \{')
				.replace(/return/g ,'<span id="conditional">$&</span>')
				.replace(/break/g , '<span id="conditional">$&</span>')
				.replace(/continue/g , '<span id="conditional">$&</span>')
				//escape sequences
				.replace(/\\a|\\b|\\f|\\n|\\r|\\t|\\/,'<span id="escape">$&</span>')
				//functions	
				//.replace(/\t(.*?)\(/gm , '\t<span id="number">$1</span>(')
				//.replace(/void(.*?)\(/gm , 'void<span id="number">$1</span>(')
}

function consoleLog (argument) {
	var str = document.getElementById("language-c").innerHTML;
	console.log(str.split(/[""]/g));
}
