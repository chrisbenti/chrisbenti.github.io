(window.webpackJsonpiadice=window.webpackJsonpiadice||[]).push([[0],{33:function(e,t,a){},54:function(e,t,a){e.exports=a(76)},76:function(e,t,a){"use strict";a.r(t);var r,n,c=a(0),l=a.n(c),u=a(7),s=a.n(u),i=a(15),o=a(80),m=a(81),g=a(82),E=a(83),d=a(14);function f(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}!function(e){e.RED="RED",e.BLUE="BLUE",e.GREEN="GREEN",e.YELLOW="YELLOW",e.BLACK="BLACK",e.WHITE="WHITE",e.NONE="NONE"}(n||(n={}));var O=[n.RED,n.BLUE,n.GREEN,n.YELLOW,n.BLACK,n.WHITE,n.NONE];function p(e){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?f(a,!0).forEach((function(t){Object(d.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):f(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({damage:0,surge:0,accuracy:0,damageResist:0,surgeResist:0,evade:0},e)}var b={color:n.RED,rolls:[p({damage:1}),p({damage:2}),p({damage:2}),p({damage:2,surge:1}),p({damage:3}),p({damage:3})]},R={color:n.BLUE,rolls:[p({accuracy:2,surge:1}),p({accuracy:2,damage:1}),p({accuracy:3,damage:2}),p({accuracy:3,damage:1,surge:1}),p({accuracy:4,damage:2}),p({accuracy:5,damage:1})]},y={color:n.GREEN,rolls:[p({accuracy:1,surge:1}),p({accuracy:1,damage:1,surge:1}),p({accuracy:1,damage:2}),p({accuracy:2,damage:1,surge:1}),p({accuracy:2,damage:2}),p({accuracy:3,damage:2})]},N={color:n.GREEN,rolls:[p({surge:1}),p({surge:2,damage:1}),p({damage:2,accuracy:1}),p({surge:1,damage:1,accuracy:1}),p({surge:1,accuracy:2}),p({damage:1,accuracy:2})]},h={color:n.BLACK,rolls:[p({damageResist:1}),p({damageResist:1}),p({damageResist:2}),p({damageResist:2}),p({damageResist:3}),p({surgeResist:1})]},v={color:n.WHITE,rolls:[p({}),p({damageResist:1}),p({surgeResist:1}),p({damageResist:1,surgeResist:1}),p({damageResist:1,surgeResist:1}),p({evade:1})]},j={color:n.NONE,rolls:[]},w=(r={},Object(d.a)(r,n.RED,b),Object(d.a)(r,n.BLUE,R),Object(d.a)(r,n.GREEN,y),Object(d.a)(r,n.YELLOW,N),Object(d.a)(r,n.BLACK,h),Object(d.a)(r,n.WHITE,v),Object(d.a)(r,n.NONE,j),r),x=(a(33),a(44)),I=a(78),D=a(27),L=a.n(D),S=L()((function(e,t){return{damage:e.damage+t.damage,surge:e.surge+t.surge,accuracy:e.accuracy+t.accuracy,damageResist:e.damageResist+t.damageResist,surgeResist:e.surgeResist+t.surgeResist,evade:e.evade+t.evade}})),B=L()((function(e,t){for(var a=Array(e.length*t.length),r=0,n=0;n<e.length;n++)for(var c=0;c<t.length;c++)a[r]=S(e[n],t[c]),r++;return a})),A=L()((function(e){return{colors:e.map((function(e){return e.color})),rolls:e.map((function(e){return e.rolls})).reduce((function(e,t){return B(e,t)}))}})),C=function(e){var t=e.colors,a=t.filter((function(e){return e!==n.NONE}));if(0===a.length)return l.a.createElement("i",null,"Select some dice first, fam");var r=a.map((function(e){return w[e]})),c=t.filter((function(e){return e===n.RED||e===n.GREEN||e===n.BLUE||e===n.YELLOW})).length>0,u=t.filter((function(e){return e===n.BLACK||e===n.WHITE})).length>0,s=A(r),i=0;s.rolls.forEach((function(e){i=Math.max(i,e.accuracy,e.damage,e.damageResist,e.evade,e.surge,e.surgeResist)}));var o=Array.from(new Array(i),(function(e,t){return t+1}));return l.a.createElement(l.a.Fragment,null,l.a.createElement(I.a,{bordered:!0,condensed:!0,striped:!0},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null),o.map((function(e){return l.a.createElement("th",{key:e},e,"+")})))),l.a.createElement("tbody",null,l.a.createElement(T,{permuteDice:s,feature:"damage",possibleValues:o}),l.a.createElement(T,{permuteDice:s,feature:"surge",possibleValues:o}),l.a.createElement(T,{permuteDice:s,feature:"accuracy",possibleValues:o}),l.a.createElement(T,{permuteDice:s,feature:"damageResist",possibleValues:o}),l.a.createElement(T,{permuteDice:s,feature:"surgeResist",possibleValues:o}),l.a.createElement(T,{permuteDice:s,feature:"evade",possibleValues:o}),c&&u&&l.a.createElement(l.a.Fragment,null,l.a.createElement(G,{permutedDice:s,possibleValues:o}),l.a.createElement(V,{permutedDice:s,possibleValues:o})))))};function W(e){return"hsl("+240*(1-e)+", 100%, 50%)"}var k=function(e){var t=e.extractedRolls,a=e.values,r=e.title;return l.a.createElement("tr",null,l.a.createElement("td",{style:{textAlign:"right"}},r),a.map((function(e){for(var a=0,r=0;r<t.length;r++)t[r]>=e&&(a+=1);return a/t.length})).map((function(e,t){return l.a.createElement("td",{key:t,style:{backgroundColor:W(e),textAlign:"right"}},Math.round(100*e),"%")})))},V=function(e){var t=e.permutedDice,a=e.possibleValues,r=t.rolls.map((function(e){return e.evade?0:Math.max(e.surge-e.surgeResist,0)}));return l.a.createElement(k,{extractedRolls:r,values:a,title:"surge - sr"})},G=function(e){var t=e.permutedDice,a=e.possibleValues,r=t.rolls.map((function(e){return e.evade?0:Math.max(e.damage-e.damageResist,0)}));return l.a.createElement(k,{extractedRolls:r,values:a,title:"damage - dr"})},T=function(e){var t=e.permuteDice,a=e.feature,r=e.possibleValues,n=t.rolls.map((function(e){return e[a]})),c=Array.from(new Set(n));return 0===Math.max.apply(Math,Object(x.a)(c))?null:l.a.createElement(k,{extractedRolls:n,values:r,title:a})};function P(e,t){return l.a.createElement(m.a,{text:e,onClick:t.handleClick,key:t.index})}var H=function(){var e=Object(c.useState)(n.NONE),t=Object(i.a)(e,2),a=t[0],r=t[1],u=Object(c.useState)(n.NONE),s=Object(i.a)(u,2),m=s[0],d=s[1],f=Object(c.useState)(n.NONE),p=Object(i.a)(f,2),b=p[0],R=p[1],y=Object(c.useState)(n.NONE),N=Object(i.a)(y,2),h=N[0],v=N[1],j=Object(c.useState)(n.NONE),w=Object(i.a)(j,2),x=w[0],I=w[1],D=Object(c.useState)(n.NONE),L=Object(i.a)(D,2),S=L[0],B=L[1],A=Object(c.useState)(n.NONE),W=Object(i.a)(A,2),k=W[0],V=W[1],G=Object(c.useState)(n.NONE),T=Object(i.a)(G,2),H=T[0],K=T[1];return l.a.createElement("div",{style:{maxWidth:"100vw",width:"100vw"}},l.a.createElement(g.a,{fixedToTop:!0,className:"bp3-dark"},l.a.createElement(g.a.Group,{align:"left"},l.a.createElement(g.a.Heading,null,"I.A. Dice Rolls")),l.a.createElement(g.a.Group,{align:"right"},l.a.createElement(E.a,{text:"Clear",onClick:Object(c.useCallback)((function(){r(n.NONE),d(n.NONE),R(n.NONE),v(n.NONE),I(n.NONE),B(n.NONE),V(n.NONE),K(n.NONE)}),[r,d,R,v,I,B,V,K])}))),l.a.createElement("div",{style:{padding:"1em",width:"100vw",marginTop:"50px"}},l.a.createElement("h5",{style:{margin:0,marginBottom:".5em"}},"Dice"),l.a.createElement("div",{style:{display:"flex",justifyContent:"center",flexWrap:"wrap",marginBottom:"1em"}},l.a.createElement(o.a,{itemRenderer:P,onItemSelect:function(e){return r(e)},items:O},l.a.createElement(E.a,{rightIcon:"caret-down",text:a})),l.a.createElement(o.a,{itemRenderer:P,onItemSelect:function(e){return d(e)},items:O},l.a.createElement(E.a,{rightIcon:"caret-down",text:m})),l.a.createElement(o.a,{itemRenderer:P,onItemSelect:function(e){return R(e)},items:O},l.a.createElement(E.a,{rightIcon:"caret-down",text:b})),l.a.createElement(o.a,{itemRenderer:P,onItemSelect:function(e){return v(e)},items:O},l.a.createElement(E.a,{rightIcon:"caret-down",text:h})),l.a.createElement(o.a,{itemRenderer:P,onItemSelect:function(e){return I(e)},items:O},l.a.createElement(E.a,{rightIcon:"caret-down",text:x})),l.a.createElement(o.a,{itemRenderer:P,onItemSelect:function(e){return B(e)},items:O},l.a.createElement(E.a,{rightIcon:"caret-down",text:S})),l.a.createElement(o.a,{itemRenderer:P,onItemSelect:function(e){return V(e)},items:O},l.a.createElement(E.a,{rightIcon:"caret-down",text:k})),l.a.createElement(o.a,{itemRenderer:P,onItemSelect:function(e){return K(e)},items:O},l.a.createElement(E.a,{rightIcon:"caret-down",text:H}))),l.a.createElement("h5",{style:{margin:0,marginBottom:".5em"}},"Results"),l.a.createElement(C,{colors:[a,m,b,h,x,S,k,H]})))};s.a.render(l.a.createElement(H,null),document.getElementById("root"))}},[[54,1,2]]]);
//# sourceMappingURL=main.82fe49de.chunk.js.map