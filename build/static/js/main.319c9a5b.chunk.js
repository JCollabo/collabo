(this["webpackJsonpreact-chat"]=this["webpackJsonpreact-chat"]||[]).push([[0],{20:function(e,t,a){e.exports=a(34)},25:function(e,t,a){},27:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(11),o=a.n(c),l=(a(25),a(9)),i=a.n(l),u=a(12),s=a(6),m=(a(27),a(5)),p=a.n(m),d=(a(28),a(32),a(35),a(14)),h=a(15),b=a(16),f=a(17),g=a(19),v=a(18),E=function(e){Object(g.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(b.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={lumens:0},e}return Object(f.a)(a,[{key:"render",value:function(){return r.a.createElement("button",null," Lumens: ",this.state.lumens," ")}}]),a}(r.a.Component);p.a.initializeApp({apiKey:"AIzaSyCt0AapeDmduiTedkzN7DFrkKWL6yUTBdg",authDomain:"collabo-chat.firebaseapp.com",databaseURL:"https://collabo-chat-default-rtdb.firebaseio.com",projectId:"collabo-chat",storageBucket:"collabo-chat.appspot.com",messagingSenderId:"255596477659",appId:"1:255596477659:web:a2d7cc19aacfef45f220fe",measurementId:"G-11Y85DFBQ2"});var O=p.a.auth(),j=p.a.firestore();p.a.analytics();function w(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{className:"sign-in",onClick:function(){var e=new p.a.auth.GoogleAuthProvider;O.signInWithPopup(e)}},"Sign in with Google"),r.a.createElement("p",null,"Chat built for busy people"))}function y(){return O.currentUser&&r.a.createElement("button",{className:"sign-out",onClick:function(){return O.signOut()}},"Sign Out")}function k(){var e=Object(n.useRef)(),t=j.collection("messages"),a=t.orderBy("createdAt").limit(5e3),c=Object(h.a)(a,{idField:"id"}),o=Object(s.a)(c,1)[0],l=Object(n.useState)(""),m=Object(s.a)(l,2),d=m[0],b=m[1],f=Object(n.useState)(""),g=Object(s.a)(f,2),v=g[0],E=(g[1],function(){var a=Object(u.a)(i.a.mark((function a(n){var r,c,o;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n.preventDefault(),r=O.currentUser,c=r.uid,o=r.photoURL,a.next=4,t.add({text:d,createdAt:p.a.firestore.FieldValue.serverTimestamp(),uid:c,photoURL:o,lumens:v});case 4:b(""),e.current.scrollIntoView({behavior:"smooth"});case 6:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}());return r.a.createElement(r.a.Fragment,null,r.a.createElement("main",null,o&&o.map((function(e){return r.a.createElement(A,{key:e.id,message:e})})),r.a.createElement("span",{ref:e})),r.a.createElement("form",{onSubmit:E},r.a.createElement("input",{value:d,onChange:function(e){return b(e.target.value)},placeholder:"say something nice"}),r.a.createElement("button",{type:"submit",disabled:!d},"C")))}function A(e){var t=e.message,a=t.text,n=t.uid,c=t.photoURL,o=(t.lumens,n===O.currentUser.uid?"sent":"received");return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"message ".concat(o)},r.a.createElement("img",{src:c||"https://api.adorable.io/avatars/23/abott@adorable.png"}),r.a.createElement("p",null,E),r.a.createElement("p",null,a)))}var C=function(){var e=Object(d.a)(O),t=Object(s.a)(e,1)[0];return r.a.createElement("div",{className:"App"},r.a.createElement("header",null,r.a.createElement("h1",null,"Collabo+"),r.a.createElement(y,null)),r.a.createElement("section",null,t?r.a.createElement(k,null):r.a.createElement(w,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.319c9a5b.chunk.js.map