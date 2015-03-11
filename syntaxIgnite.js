/* TODO 
	cssInit 
*/


//var LineNumbers = true;
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
	var copy = false;
	var num = false;
	var hide = false;
	
	for(i=0;i<bar;i++){
		copy = false;
		num = false;
		hide = false;

		str = document.getElementsByClassName('code')[i].innerHTML;
		foo = document.getElementsByClassName('code')[i].id;
		dat = document.getElementsByClassName('code')[i].getAttribute("data-options");
		
		if(dat!==null){
			if(dat.search("copy")>=0){
				copy = true;
			}
			if(dat.search("num")>=0){
				num = true;
			}
			if(dat.search("hide")>=0){
				hide = true;
			}	
		}
		if(dat==null){
			copy = false;
			num = false;
			hide = false;
		}
		title = document.getElementsByClassName('code')[i].title;
		//console.log(title);
		switch(foo){ 
			case "language-c":
				str = languageC(str);
				doTheBiz(str,num,title,copy,hide,i);
				break;
			case "language-js":
				str = languageJs(str);
				doTheBiz(str,num,title,copy,hide,i);
				break;
			case "language-css":
				str = languageCss(str);
				doTheBiz(str,num,title,copy,hide,i);break;
			case "language-html":
				str = languageHTML(str);
				doTheBiz(str,num,title,copy,hide,i);break;
			case "language-terminal":
				str = languageTerminal(str);
				if(num == true){
					str = addLineNums(str);
				}
				str = addTitle(str,title);
				document.getElementsByClassName('code')[i].innerHTML = str;
				break;
			case "language-bash":
				str = languageBash(str);
				doTheBiz(str,num,title,copy,hide,i);
				break;
		}	
	}
	cssInit();
	timerStop = getDate();
	console.log(timerStop-timerStart+"ms (syntaxignite render time)");
}
function doTheBiz(str,num,title,copy,hide,i){
	if(num){
		str = addLineNums(str);
	}
	str = addCodeWrap(str,num);
	str = addTitle(str,title,copy,hide,i);
	document.getElementsByClassName('code')[i].innerHTML = str;
	return;
}
function copyCode(i){
	alert(i);
}
function hideCode(i){
	var targetElement = document.getElementsByClassName('code')[i];
	var state = targetElement.querySelector(".hide").innerHTML;
	switch(state){
		case "hide":
			targetElement.style.height = 6+'px';
			targetElement.style.overflow = 'hidden';
			targetElement.querySelector(".codeWrap").style.display = 'none';
			targetElement.querySelector(".hide").innerHTML = 'view';
			break;
		case "view":
			targetElement.style.height = 'initial';
			targetElement.style.overflow = 'auto';
			targetElement.querySelector(".codeWrap").style.display = 'inherit';
			targetElement.querySelector(".hide").innerHTML = 'hide';
			break;
	}
}
function addTitle(str,title,copy,hide,i){
	var openTitleHTML = '<div class=\"codeTitle\"><h2 class=\"codeTitle\">' + '&nbsp;' + title;
	var closeTitleHTML ='</h2></div>' + '';
	var openButtsHTML = '<span class="butts">';
	var closeButtsHTML = '</span>';
	var copyButtHTML = '<span class="copy" onclick="copyCode(' + i + ')">copy</span>';
	var hideButtHTML = '<span class="hide" onclick="hideCode(' + i + ')">hide</span>';
	var space = ' ';
	if(title){

			if((!copy)&&(!hide)){
				str = openTitleHTML + closeTitleHTML + str;
				return(str);
			}
			if((copy)&&(!hide)){
				str = openTitleHTML + openButtsHTML + copyButtHTML + closeButtsHTML+ closeTitleHTML + str;
				return(str);
			}
			if((!copy)&&(hide)){
				str = openTitleHTML + openButtsHTML + hideButtHTML + closeButtsHTML + closeTitleHTML + str;
				return(str);
			}
			if((copy)&&(hide)){
				str = openTitleHTML + openButtsHTML + copyButtHTML + space + hideButtHTML + closeButtsHTML + closeTitleHTML + str;
				return(str);
			}
	}
	if(!title){
		if((!copy)&&(!hide)){
				return(str);
		}
		if((copy)&&(!hide)){
			str = openTitleHTML + openButtsHTML + copyButtHTML + closeButtsHTML + closeTitleHTML + str;
			return(str);
		}
		if((!copy)&&(hide)){
			str = openTitleHTML + openButtsHTML + hideButtHTML + closeButtsHTML + closeTitleHTML + str;
			return(str);
		}
		if((copy)&&(hide)){
			str = openTitleHTML + openButtsHTML + copyButtHTML + space + hideButtHTML + closeButtsHTML + closeTitleHTML + str;
			return(str);
		}
	}
	else{
		return(str);
	}
}
function addCodeWrap(str,num){
	str ='<div class=\"codeWrap\">'+ str + '</div>';
	if(num==false){
			str ='<div class=\"codeWrapNoLineNum\">'+ str + '</div>';
		}
	if(num==true){
			str ='<div class=\"codeWrapLineNum\">'+ str + '</div>';
		}
	return(str);
}

function addLineNums(str){
	var res = str.split('\n');
	var len = res.length-1;
	var i = 0;
	var lineNum;
		for(i=0;i<len;i++){
			lineNum = res+1;
			if(i+1<=9){
				res[i] = '<span class=\"lineNums\">'+'   '+(i+1)+'</span>'+'<span class=\"lineNumDivs\"> </span> '+res[i]+'\n';
			}
			if(i+1>=10&&i<=99){
				res[i] = '<span class=\"lineNums\">'+'  '+(i+1)+'</span>'+'<span class=\"lineNumDivs\"> </span> '+res[i]+'\n';
			}
			if(i+1>=100&&i<=999){
				res[i] = '<span class=\"lineNums\">'+' '+(i+1)+'</span>'+'<span class=\"lineNumDivs\"> </span> '+res[i]+'\n';
			}
			if(i+1>=1000&&i<=9999){
				res[i] = '<span class=\"lineNums\">'+''+(i+1)+'</span>'+'<span class=\"lineNumDivs\"> </span> '+res[i]+'\n';
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
				.replace(/\.(.*?)\w+/g , '<span id="class">$&</span>')
				//id
				.replace(/#(\w*?)+/gm , '<span id="id">$&</span>')
				//hex number
				.replace(/(#[\da-f]{6})|(#[\da-f]{3})/gi , '<span id="number">$&</span>')
				//number

				//px
				.replace(/px/,'<span id="px">$&</span>')
				//elements
				//attributes
				.replace(/([\n\t\s\-\{}])(\w*(?=:|\-))/g,'<span id="attributes">$&</span>')
				//.replace(/\n(.*?){/g, '\n<span id="tags">$1</span>{')
}

function languageJs(str){

	return(str) //angle brackets
				.replace(/</g, '&lt;')
				.replace(/>/g, '&gt;')
				//strings
				.replace(/(["'])(?:(?=(\\?))\2.)*?\1/g, "<span id=\"string\"\>$&\</span>")
				//numbers
				//.replace(/[0-9]/g,'<span id="number">$&</span>')
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
