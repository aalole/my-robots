(this.webpackJsonprobots=this.webpackJsonprobots||[]).push([[0],{1:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(3),c=a.n(o),l=(a(1),a(13),a(4)),s=a(5),i=a(7),h=a(6),u=function(e){var t=e.id,a=e.name,n=e.email;return r.a.createElement("div",{className:" tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 wrapper"},r.a.createElement("img",{className:"img",src:"https://robohash.org/".concat(t,"?150X150"),alt:"robots"}),r.a.createElement("div",null,r.a.createElement("h2",null,a),r.a.createElement("p",null,n)))},m=function(e){var t=e.robots;return r.a.createElement("div",null,t.map((function(e,a){return r.a.createElement(u,{className:"wrapper",key:a,id:t[a].id,name:t[a].name,email:t[a].email})})))},d=function(e){e.searchfield;var t=e.searchChange;return r.a.createElement("input",{className:"pa2 bg-lightest-blue w-40 ma2",type:"search",name:"search",id:"",placeholder:"search your favorite robot",onChange:t})},f=function(e){return r.a.createElement("div",{style:{overflowY:"scroll",border:"2px solid #000",height:"900px"}},e.children)},p=function(e){Object(i.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,a=e.searchfield,n=t.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())}));return t.length?r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"pa2 f1"},"My Robots"),r.a.createElement(d,{searchChange:this.onSearchChange}),r.a.createElement(f,null,r.a.createElement(m,{robots:n}))):r.a.createElement("h1",{className:"tc"},"Loading")}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports=a(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.bcd10be5.chunk.js.map