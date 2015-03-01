/* TODO 
	cssInit 
*/


var LineNumbers = true;
var theme = "0";

function cssInit(){
	
}

/*********************************************************/
var timerStart;
var timerStop;

window.onload = function(){
	timerStart = getDate();
	convert();
}

/*********************************************************/



function getDate(){
		return Date.now();
	}

function convert(){
	var bar = document.getElementsByClassName('code');
	bar = bar.length;
	var foo;
	var str;
	var i = 0;
	var dat;
	for(i=0;i<bar;i++){
		str = document.getElementsByClassName('code')[i].innerHTML;
		foo = document.getElementsByClassName('code')[i].id;
		dat = document.getElementsByClassName('code')[i].getAttribute("data-options");
		console.log(dat);
		

		title = document.getElementsByClassName('code')[i].title;
		//console.log(title);
		switch(foo){ 
			case "language-c":
				str = languageC(str);
				str = addLineNums(str);
				str = addTitle(str,title);
				document.getElementsByClassName('code')[i].innerHTML = str;
				
				break;
			case "language-js":
				str = languageJs(str);
				str = addLineNums(str);
				str = addTitle(str,title);
				document.getElementsByClassName('code')[i].innerHTML = str;
				
				break;
			case "language-css":
				str = languageCss(str);
				str = addLineNums(str);
				str = addTitle(str,title);
				document.getElementsByClassName('code')[i].innerHTML = str;
				break;
			case "language-html":
				str = languageHTML(str);
				str = addLineNums(str);
				str = addTitle(str,title);
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
	cssInit();
	timerStop = getDate();
	console.log(timerStop-timerStart+"ms (syntaxignite render time)");
}

function addTitle(str,title,i){
	if(title){
		str = '<div class=\"codeTitle\"><h2 class=\"codeTitle\">' + '&nbsp;' + title + '</h2></div>' + '' + str;
		return(str);
	}
	else{
		return(str);
	}
}

function addLineNums(str){
	//var str = document.getElementById(str).innerHTML;
	var res = str.split('\n');
	var len = res.length-1;
	var i = 0;
	//console.log(res);
	var lineNum;
		for(i=0;i<len;i++){
			lineNum = res+1;
			if(i<=9){
				res[i] = '<span class=\"lineNums\">'+'   '+(i)+'</span>'+'<span class=\"lineNumDivs\"> </span> '+res[i]+'\n';
			}
			if(i>=10&&i<=99){
				res[i] = '<span class=\"lineNums\">'+'  '+(i)+'</span>'+'<span class=\"lineNumDivs\"> </span> '+res[i]+'\n';
			}
			if(i>=100&&i<=999){
				res[i] = '<span class=\"lineNums\">'+' '+(i)+'</span>'+'<span class=\"lineNumDivs\"> </span> '+res[i]+'\n';
			}
			if(i>=1000&&i<=9999){
				res[i] = '<span class=\"lineNums\">'+''+(i)+'</span>'+'<span class=\"lineNumDivs\"> </span> '+res[i]+'\n';
			}
		}
			res = res.join('');
			return res;
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
	//console.log(str.split(/[""]/g));
}
