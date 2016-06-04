/*! modernizr 3.3.1 (Custom Build) | MIT *
 * https://modernizr.com/download/?-formvalidation-inputtypes-setclasses !*/
!function(e,t,n){function i(e,t){return typeof e===t}function a(){var e,t,n,a,o,s,r;for(var l in f)if(f.hasOwnProperty(l)){if(e=[],t=f[l],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(a=i(t.fn,"function")?t.fn():t.fn,o=0;o<e.length;o++)s=e[o],r=s.split("."),1===r.length?Modernizr[r[0]]=a:(!Modernizr[r[0]]||Modernizr[r[0]]instanceof Boolean||(Modernizr[r[0]]=new Boolean(Modernizr[r[0]])),Modernizr[r[0]][r[1]]=a),d.push((a?"":"no-")+r.join("-"))}}function o(e){var t=u.className,n=Modernizr._config.classPrefix||"";if(c&&(t=t.baseVal),Modernizr._config.enableJSClass){var i=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(i,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),c?u.className.baseVal=t:u.className=t)}function s(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):c?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function r(){var e=t.body;return e||(e=s(c?"svg":"body"),e.fake=!0),e}function l(e,n,i,a){var o,l,d,f,p="modernizr",c=s("div"),m=r();if(parseInt(i,10))for(;i--;)d=s("div"),d.id=a?a[i]:p+(i+1),c.appendChild(d);return o=s("style"),o.type="text/css",o.id="s"+p,(m.fake?m:c).appendChild(o),m.appendChild(c),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(t.createTextNode(e)),c.id=p,m.fake&&(m.style.background="",m.style.overflow="hidden",f=u.style.overflow,u.style.overflow="hidden",u.appendChild(m)),l=n(c,e),m.fake?(m.parentNode.removeChild(m),u.style.overflow=f,u.offsetHeight):c.parentNode.removeChild(c),!!l}var d=[],f=[],p={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){f.push({name:e,fn:t,options:n})},addAsyncTest:function(e){f.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=p,Modernizr=new Modernizr;var u=t.documentElement,c="svg"===u.nodeName.toLowerCase(),m=s("input"),v="search tel url email datetime date month week time datetime-local number range color".split(" "),h={};Modernizr.inputtypes=function(e){for(var i,a,o,s=e.length,r="1)",l=0;s>l;l++)m.setAttribute("type",i=e[l]),o="text"!==m.type&&"style"in m,o&&(m.value=r,m.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(i)&&m.style.WebkitAppearance!==n?(u.appendChild(m),a=t.defaultView,o=a.getComputedStyle&&"textfield"!==a.getComputedStyle(m,null).WebkitAppearance&&0!==m.offsetHeight,u.removeChild(m)):/^(search|tel)$/.test(i)||(o=/^(url|email)$/.test(i)?m.checkValidity&&m.checkValidity()===!1:m.value!=r)),h[e[l]]=!!o;return h}(v);var y=p.testStyles=l;Modernizr.addTest("formvalidation",function(){var t=s("form");if(!("checkValidity"in t&&"addEventListener"in t))return!1;if("reportValidity"in t)return!0;var n,i=!1;return Modernizr.formvalidationapi=!0,t.addEventListener("submit",function(t){(!e.opera||e.operamini)&&t.preventDefault(),t.stopPropagation()},!1),t.innerHTML='<input name="modTest" required="required" /><button></button>',y("#modernizr form{position:absolute;top:-99999em}",function(e){e.appendChild(t),n=t.getElementsByTagName("input")[0],n.addEventListener("invalid",function(e){i=!0,e.preventDefault(),e.stopPropagation()},!1),Modernizr.formvalidationmessage=!!n.validationMessage,t.getElementsByTagName("button")[0].click()}),i}),a(),o(d),delete p.addTest,delete p.addAsyncTest;for(var g=0;g<Modernizr._q.length;g++)Modernizr._q[g]();e.Modernizr=Modernizr}(window,document);