(this.webpackJsonpierologin=this.webpackJsonpierologin||[]).push([[0],{146:function(e,t,n){"use strict";n.r(t);var a,r,c,i,s=n(0),l=n.n(s),o=n(45),j=n.n(o),x=n(20),u=n(57),d=n(100),b=n(212),m=n(60),h=n(61),p=n(42),O=n(36),f=n(216),g=n(196),v=n(221),y=n(32),S=n(220),k=n(2),w=s.memo((function(e){return Object(k.jsx)(S.a,{sx:Object(y.a)({p:2,border:1,borderColor:"divider",borderRadius:2,display:"flex",flexDirection:"column"},e.sx),children:e.children})})),I=n(1),D=n.n(I),C=n(5),P=n(12),N=n(113),A=n(121),E=n(73),U=Object(N.a)({apiKey:"AIzaSyDZBgbq_B5hGsLYlS0mgnkE-tPpNlh9yGQ",authDomain:"humor-37624.firebaseapp.com",projectId:"humor-37624",storageBucket:"humor-37624.appspot.com",messagingSenderId:"309938964995",appId:"1:309938964995:web:81bba8de7ce2f866261c36",measurementId:"G-99XT1M7PR7"}),z=(Object(A.a)(U),Object(E.b)(U)),B=function(){var e=Object(C.a)(D.a.mark((function e(t,n){var a;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(E.d)(z,t,n);case 3:return a=e.sent,e.abrupt("return",a.user);case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}(),L=s.createContext({authData:{userUid:null,userName:null,token:null,email:null,logged:!1},setUser:function(e){return console.log(e)},removeUser:function(){return console.log("removed")}}),M=function(e){var t=e.children,n=s.useState(!0),a=Object(P.a)(n,2),r=(a[0],a[1]),c=s.useState(),i=Object(P.a)(c,2),l=i[0],o=i[1],j=function(){var e=Object(C.a)(D.a.mark((function e(t){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return localStorage.setItem("userId",t.uid),e.t0=localStorage,e.next=4,t.getIdToken();case 4:e.t1=e.sent,e.t0.setItem.call(e.t0,"token",e.t1),localStorage.setItem("userEmail",t.email||""),localStorage.setItem("userName",t.displayName||"");case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=s.useCallback((function(){var e=localStorage.getItem("userId"),t=localStorage.getItem("token");return{userUid:e,token:t,email:localStorage.getItem("userEmail"),userName:localStorage.getItem("userName"),logged:!!e&&!!t}}),[]);return s.useEffect((function(){var e=function(){var e=null,t=Object(E.c)(z,function(){var t=Object(C.a)(D.a.mark((function t(n){return D.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n){t.next=7;break}return t.next=3,n.getIdToken(!0);case 3:return e=t.sent,t.abrupt("return",e);case 7:localStorage.clear();case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());return t(),e}();console.log(l),e&&e!==(null===l||void 0===l?void 0:l.token)&&localStorage.setItem("token",e),r(!1)}),[x]),s.useEffect((function(){o(x())}),[x]),Object(k.jsx)(L.Provider,{value:{authData:l,setUser:j,removeUser:function(){localStorage.clear()}},children:t})},R=function(){return s.useContext(L)},T=l.a.memo((function(){var e=Object(O.a)().palette,t=R().authData;return Object(k.jsxs)(w,{sx:{gap:2},children:[Object(k.jsxs)(g.a,{sx:{display:"flex",alignItems:"center",gap:1},children:[Object(k.jsx)(f.a,{sx:{height:32,width:32,background:e.primary.main},children:Object(k.jsx)(v.a,{variant:"caption",children:"PS"})}),Object(k.jsx)(v.a,{variant:"h5",sx:{textTransform:(null===t||void 0===t?void 0:t.userName)?"capitalize":"none"},children:(null===t||void 0===t?void 0:t.userName)||(null===t||void 0===t?void 0:t.email)})]}),Object(k.jsx)(v.a,{variant:"subtitle1",children:"Il tuo umore : \ud83d\ude01 "}),Object(k.jsxs)(g.a,{children:[Object(k.jsx)(v.a,{children:"Di cosa hai bisogno: "}),Object(k.jsx)(v.a,{variant:"caption",children:"Droghe pesanti"})]})]})})),q=[{usersName:"Massi Milardi",humor:"\ud83d\ude01"},{usersName:"Paolo Penna",humor:"\ud83d\ude01"},{usersName:"Giancardo Torollo",humor:"\ud83d\ude01"}],F=s.memo((function(){var e=new Date;return Object(k.jsx)(w,{children:Object(k.jsx)(g.a,{sx:{display:"flex",flexDirection:"column",gap:2},children:q.map((function(t){return Object(k.jsxs)(w,{children:[Object(k.jsxs)(g.a,{sx:{display:"flex",justifyContent:"space-between",gap:2},children:[Object(k.jsx)(v.a,{children:t.usersName}),Object(k.jsx)(v.a,{children:t.humor})]}),Object(k.jsxs)(v.a,{variant:"caption",children:[" ","Si \xe8 iscritto il ",e.getDate(),"/",e.getMonth(),"/",e.getFullYear()]})]})}))})})})),G=s.memo((function(){Object(O.a)().palette;return Object(k.jsxs)(g.a,{sx:{display:"flex",flexDirection:"column",gap:2,justifyContent:"center"},children:[Object(k.jsx)(T,{}),Object(k.jsx)(F,{})]})})),H=n(218),Y=n(214),J=n(55),K=n(200),Q=n(208),V=n(210),W=l.a.memo((function(e){var t=e.authData,n=Object(O.a)().palette;return Object(k.jsx)(g.a,{children:Object(k.jsx)(Q.a,{componentsProps:{tooltip:{sx:{display:{xs:"none",sm:"block"},borderRadius:2,bgcolor:n.background.default,color:n.primary.main,boxShadow:"1px 1px 4px rgba(0,0,0,0.2)"}}},title:Object(k.jsxs)(g.a,{sx:{display:"flex",flexDirection:"column",gap:2,p:2},children:[Object(k.jsxs)(g.a,{sx:{display:"flex",alignItems:"center",gap:1},children:[Object(k.jsx)(f.a,{sx:{backgroundColor:n.primary.main},children:"PS"})," ",Object(k.jsx)(v.a,{children:"Area Personale"})]}),Object(k.jsxs)(g.a,{sx:{display:"flex",flexDirection:"column",gap:2,alignItems:"center "},children:[Object(k.jsx)(v.a,{children:""!==(null===t||void 0===t?void 0:t.userName)?null===t||void 0===t?void 0:t.userName:null===t||void 0===t?void 0:t.email}),Object(k.jsx)(V.a,{children:" Profilo "}),Object(k.jsx)(V.a,{children:" Logout "})]})]}),children:Object(k.jsx)(K.a,{sx:{display:{xs:"none",sm:"block"},color:n.background.paper,fontSize:32}})})})})),X=n(222),Z=[{name:"feed",link:"/feed"},{name:"explore",link:"/explore"}],_=n(217),$=n(203),ee=n(201),te=s.memo((function(){var e=s.useState(!1),t=Object(P.a)(e,2),n=t[0],a=t[1],r=(R().authData,Object(O.a)().palette),c=function(){a((function(e){return!e}))};return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(ee.a,{children:Object(k.jsx)(V.a,{onClick:function(){return c()},children:Object(k.jsx)(K.a,{sx:{color:"white"}})})}),Object(k.jsx)(_.a,{variant:"persistent",open:n,anchor:"right",children:Object(k.jsxs)(ee.a,{sx:{display:"flex",flexDirection:"column",p:2,justifyContent:"space-evenly",height:"100%"},children:[Object(k.jsxs)(ee.a,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between",mb:2},children:[Object(k.jsx)($.a,{onClick:function(){return c()}}),Object(k.jsx)(v.a,{variant:"h4",color:r.primary.main,children:"Menu"})]}),Object(k.jsx)(ee.a,{sx:{flex:1},children:Object(k.jsx)(T,{})}),Object(k.jsxs)(ee.a,{sx:{display:"flex",flexDirection:"column",alignSelf:"center",gap:2,mt:2,alignItems:"center "},children:[Object(k.jsx)(V.a,{children:" Profilo "}),Object(k.jsx)(V.a,{children:" Logout "})]})]})})]})})),ne=function(){var e=Object(x.g)(),t=R().authData,n=Object(O.a)().palette;return Object(k.jsx)(X.a,{sx:{height:80},elevation:1,children:Object(k.jsxs)(H.a,{sx:{display:"flex",alignItems:"center",height:"100%"},children:[Object(k.jsx)(v.a,{variant:"h3",fontFamily:"montserrat",sx:{fontSize:{xs:24,sm:"inherit"},flex:{xs:1,sm:.4}},children:"\ud83d\ude01 HUMOR"}),Object(k.jsx)(g.a,{sx:{flexGrow:1,display:{xs:"none",sm:"block"}},children:Object(k.jsx)(g.a,{id:"menu-appbar",sx:{display:"block"},children:Z.map((function(t,a){return Object(k.jsx)(V.a,{onClick:function(){return n=t.link,void e(n);var n},children:Object(k.jsx)(v.a,{color:n.background.paper,textAlign:"center",children:t.name})},t.name+t.link)}))})}),Object(k.jsx)(W,{authData:t}),Object(k.jsx)(te,{})]})})},ae=n(219),re=n(209),ce=["\ud83d\ude01","\ud83d\ude0d","\ud83d\ude34","\ud83d\ude22","\ud83d\ude2d","\ud83d\ude21"],ie=function(){return Object(k.jsxs)(w,{sx:{gap:2},children:[Object(k.jsx)(ae.a,{children:Object(k.jsx)(re.a,{multiline:!0,placeholder:"Come stai?",maxRows:6,sx:{width:"100%"}})}),Object(k.jsxs)(g.a,{children:[Object(k.jsx)(v.a,{children:"Scegli il tuo umore oggi: "}),ce.map((function(e){return Object(k.jsx)(V.a,{children:e})}))]}),Object(k.jsx)(V.a,{variant:"contained",sx:{alignSelf:"end"},children:"Posta!"})]})},se=n(205),le=n(206),oe=n(207),je=s.memo((function(){var e=Object(O.a)().palette;return Object(k.jsx)(w,{children:Object(k.jsxs)(g.a,{sx:{display:"flex",flexDirection:"column",width:"100%",gap:1},children:[Object(k.jsxs)(g.a,{sx:{display:"flex",alignItems:"center",gap:1},children:[Object(k.jsx)(f.a,{sx:{height:34,width:34,background:e.primary.main},children:Object(k.jsx)(v.a,{variant:"caption",children:"PS"})}),Object(k.jsxs)(g.a,{sx:{flex:1},children:[Object(k.jsx)(v.a,{variant:"body1",sx:{lineHeight:"1rem"},children:"Massimo Penna"}),Object(k.jsxs)(v.a,{variant:"caption",sx:{display:"flex",gap:1,alignItems:"center"},children:["1g ",Object(k.jsx)(se.a,{sx:{fontSize:12,color:e.primary.main}})]})]}),Object(k.jsx)(g.a,{sx:{alignSelf:"start"},children:Object(k.jsx)($.a,{})})]}),Object(k.jsxs)(g.a,{sx:{borderBottom:1,pb:2,borderColor:"divider"},children:[Object(k.jsx)(v.a,{variant:"body1",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"}),Object(k.jsxs)(g.a,{sx:{display:"flex",mt:2,gap:2},children:[Object(k.jsxs)(v.a,{variant:"body2",sx:{display:"flex",alignItems:"end"},children:[Object(k.jsx)(le.a,{sx:{mr:.5,color:e.primary.main}}),"15 like"]}),Object(k.jsxs)(v.a,{variant:"body2",sx:{display:"flex",alignItems:"end"},children:[Object(k.jsx)(oe.a,{sx:{mr:.5,color:e.primary.main}}),"3 Commenti"]})]})]}),Object(k.jsxs)(g.a,{sx:{display:"flex"},children:[Object(k.jsxs)(V.a,{sx:{flex:.5},children:[Object(k.jsx)(le.a,{sx:{mr:2}})," Mi piace"]}),Object(k.jsxs)(V.a,{sx:{flex:.5},children:[Object(k.jsx)(oe.a,{sx:{mr:2}})," Commenta"]})]})]})})})),xe=Array.from({length:20}),ue=s.memo((function(){var e=Object(O.a)().palette;return Object(k.jsxs)(g.a,{sx:{display:"flex",flexDirection:"column",gap:2},children:[xe.map((function(e){return Object(k.jsx)(je,{})})),Object(k.jsxs)(g.a,{sx:{display:"flex",flexDirection:"column",pb:2},children:[Object(k.jsx)(v.a,{textAlign:"center",children:"Sembra tu abbia finito i post!"}),Object(k.jsx)(v.a,{textAlign:"center",variant:"caption",color:e.primary.main,children:"Vuoi aggiungere altri amici?"})]})]})})),de=Array.from({length:7}),be=s.memo((function(){var e=new Date;return Object(k.jsxs)(w,{sx:{gap:1},children:[Object(k.jsxs)(g.a,{children:[Object(k.jsx)(v.a,{variant:"subtitle1",sx:{fontWeight:700,textAlign:"center"},children:"Il tuo umore negli ultimi"}),Object(k.jsx)(v.a,{sx:{textAlign:"center"},children:"7 giorni"})]}),de.map((function(t,n){return Object(k.jsxs)(w,{sx:{p:1,flexDirection:"row",gap:.5,justifyContent:"space-between"},children:[Object(k.jsxs)(v.a,{variant:"body1",children:[e.getDate(),"/",e.getMonth(),"/",e.getFullYear()]}),Object(k.jsx)(v.a,{variant:"body1",children:" \ud83d\ude0d"})]})}))]})})),me=Array.from({length:3}),he=s.memo((function(){return Object(k.jsxs)(w,{children:[Object(k.jsx)(v.a,{sx:{textAlign:"center"},children:"Bisogni in Trend"}),me.map((function(e,t){return Object(k.jsxs)(v.a,{sx:{textAlign:"center"},variant:"caption",children:[t+1,': "Bonifici!"']})}))]})})),pe=J.b.section(a||(a=Object(p.a)(["\n    height: 100vh;\n    width: 100vw;\n    position: fixed;\n    align-items: center;\n    justify-content: center;\n"]))),Oe=function(){return Object(k.jsxs)(pe,{children:[Object(k.jsx)(ne,{}),Object(k.jsx)(H.a,{children:Object(k.jsxs)(Y.a,{container:!0,columnSpacing:2,children:[Object(k.jsx)(Y.a,{sx:{mt:"".concat(96,"px"),display:{xs:"none",sm:"block"}},item:!0,xs:0,sm:3,children:Object(k.jsx)(G,{})}),Object(k.jsx)(Y.a,{item:!0,xs:12,sm:6,sx:{height:"90vh",overflow:"auto",mt:"".concat(80,"px")},children:Object(k.jsxs)(g.a,{sx:{display:"flex",flexDirection:"column",gap:2,pb:2,pt:2},children:[Object(k.jsx)(ie,{}),Object(k.jsx)(ue,{})]})}),Object(k.jsx)(Y.a,{sx:{mt:"".concat(96,"px")},item:!0,xs:0,sm:3,children:Object(k.jsxs)(g.a,{sx:{display:"flex",flexDirection:"column",gap:2},children:[Object(k.jsx)(be,{}),Object(k.jsx)(he,{})]})})]})})]})},fe=Object(J.a)(r||(r=Object(p.a)(["body{\n  background:inherit;\n  display:flex;\n  margin:0;\n}\n#root{\n\nflex:1;\n\n\n}"]))),ge=J.b.section(c||(c=Object(p.a)(["\n    flex: 1;\n    display: flex;\n    height: 100vh;\n    align-items: center;\n    justify-content: center;\n"]))),ve=function(){var e=Object(O.a)(),t=l.a.useState(),n=Object(P.a)(t,2),a=n[0],r=n[1],c=l.a.useState(),i=Object(P.a)(c,2),s=i[0],o=i[1],j=Object(x.g)(),d=R(),b=d.setUser,m=d.authData,h=function(){var e=Object(C.a)(D.a.mark((function e(){var t;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!a||!s){e.next=7;break}return e.next=4,B(a,s);case 4:(t=e.sent)&&b(t),j("/");case 7:e.next=12;break;case 9:throw e.prev=9,e.t0=e.catch(0),e.t0;case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();return l.a.useEffect((function(){(null===m||void 0===m?void 0:m.userUid)&&j("/")}),[]),Object(k.jsx)(ge,{children:Object(k.jsx)(H.a,{sx:{width:{xs:"xs",sm:"sm"}},children:Object(k.jsxs)(S.a,{sx:{background:"#ededed",p:2,m:2,boxShadow:"1px 8px 12px rgba(0,0,0,0.3)"},children:[Object(k.jsxs)(v.a,{variant:"h4",sx:{fontSize:{xs:24,sm:32},textAlign:{xs:"center",sm:"start"}},fontFamily:"poppins",children:["Benvenuto"," ",Object(k.jsx)(v.a,{variant:"h2",sx:{fontSize:{xs:32,sm:48},color:e.palette.primary.main},children:"in Humor! \ud83e\udd73"})]}),Object(k.jsx)(v.a,{variant:"subtitle1",sx:{my:1},children:"Logga e fai sapere ai tuoi amici di che umore sei!"}),Object(k.jsxs)(g.a,{sx:{display:"flex",flexDirection:"column",gap:2,py:2},children:[Object(k.jsx)(re.a,{placeholder:"Email",onChange:function(e){return r(e.currentTarget.value)}}),Object(k.jsx)(re.a,{placeholder:"Password",type:"password",onChange:function(e){return o(e.currentTarget.value)}}),Object(k.jsx)(V.a,{variant:"contained",onClick:function(){return h()},children:"Logga!"})]}),Object(k.jsxs)(g.a,{sx:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:[Object(k.jsxs)(v.a,{variant:"caption",sx:{color:e.palette.primary.main},children:["Non sei registrato?"," "]}),Object(k.jsx)(u.b,{to:"/Signup",children:Object(k.jsx)(V.a,{children:"Registrati"})})]})]})})})},ye=J.b.section(i||(i=Object(p.a)(["\n    flex: 1;\n    display: flex;\n    height: 100vh;\n    align-items: center;\n    justify-content: center;\n"]))),Se=function(){var e=Object(O.a)(),t=Object(x.g)();l.a.useEffect((function(){localStorage.getItem("user")&&t("/")}),[]);var n=l.a.useState(""),a=Object(P.a)(n,2),r=a[0],c=a[1],i=l.a.useState(""),s=Object(P.a)(i,2),o=s[0],j=s[1],d=l.a.useState(""),b=Object(P.a)(d,2),m=b[0],h=b[1],p=l.a.useState(),f=Object(P.a)(p,2),y=f[0],w=f[1];return Object(k.jsx)(ye,{children:Object(k.jsx)(H.a,{sx:{width:{xs:"xs",sm:"sm"}},children:Object(k.jsxs)(S.a,{sx:{background:"#ededed",p:2,boxShadow:"1px 8px 12px rgba(0,0,0,0.3)"},children:[Object(k.jsxs)(v.a,{variant:"h4",sx:{fontSize:{xs:24,sm:32},textAlign:{xs:"center",sm:"start"}},fontFamily:"poppins",children:["Benvenuto"," ",Object(k.jsx)(v.a,{variant:"h2",sx:{fontSize:{xs:32,sm:48},color:e.palette.primary.main},children:"in Humor! \ud83e\udd73"})]}),Object(k.jsx)(v.a,{variant:"subtitle1",sx:{my:1},children:"Registrati e fai sapere ai tuoi amici di che umore sei!"}),Object(k.jsxs)(g.a,{sx:{display:"flex",flexDirection:"column",gap:{xs:1,sm:2},py:{xs:1,sm:2}},children:[Object(k.jsx)(re.a,{type:"email",placeholder:"Email",onChange:function(e){return c(e.target.value)}}),Object(k.jsx)(re.a,{type:"password",placeholder:"Password",onChange:function(e){return j(e.target.value)}}),Object(k.jsx)(re.a,{type:"password",placeholder:"Confirm Password",onChange:function(e){return h(e.target.value)}}),Object(k.jsx)(V.a,{variant:"contained",onClick:function(){w(""),o===m&&function(e,t){Object(E.a)(z,e,t).then((function(e){e.user})).catch((function(e){e.code,e.message}))}(r,o),w("password non combaciano")},children:"Registrati!"}),Object(k.jsxs)(v.a,{children:[" ",y]})]}),Object(k.jsxs)(g.a,{sx:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:[Object(k.jsxs)(v.a,{variant:"caption",sx:{color:e.palette.primary.main},children:["Sei registrato?"," "]}),Object(k.jsxs)(u.b,{to:"/Login",children:[" ",Object(k.jsx)(V.a,{children:"Logga!"})," "]})]})]})})})},ke=Object(d.a)({palette:{primary:{main:m.a[500]},secondary:{main:h.a[500]}}}),we=function(e){var t=e.user,n=e.children;return t?n:Object(k.jsx)(x.a,{to:"/login",replace:!0})};var Ie=function(){return Object(k.jsx)(b.a,{theme:ke,children:Object(k.jsxs)(M,{children:[Object(k.jsx)(fe,{}),Object(k.jsx)(u.a,{children:Object(k.jsxs)(x.d,{children:[Object(k.jsx)(x.b,{path:"/",element:Object(k.jsx)(we,{user:localStorage.getItem("userId"),children:Object(k.jsx)(Oe,{})})}),Object(k.jsx)(x.b,{path:"/Login",element:Object(k.jsx)(ve,{})}),Object(k.jsx)(x.b,{path:"/Signup",element:Object(k.jsx)(Se,{})})]})})]})})};j.a.render(Object(k.jsx)(Ie,{}),document.getElementById("root"))}},[[146,1,2]]]);
//# sourceMappingURL=main.57f1bfb2.chunk.js.map