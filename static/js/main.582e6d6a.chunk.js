/*! For license information please see main.582e6d6a.chunk.js.LICENSE.txt */
(this.webpackJsonpprojetoreact=this.webpackJsonpprojetoreact||[]).push([[0],{25:function(e,a,t){e.exports=t(55)},30:function(e,a,t){},31:function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},54:function(e,a,t){},55:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(9),o=t.n(l),s=(t(30),t(31),t(2)),i=t(3),c=t(5),m=t(4),u=(r.a.Component,t(57)),d=function(){function e(){Object(s.a)(this,e)}return Object(i.a)(e,[{key:"render",value:function(){return r.a.createElement("div",null,"return()",r.a.createElement(u.a,null,"state.history.pushState('./DownloadCassandra')"),",2000);")}}]),e}(),h=t(7),p=t(8),v=t.n(p),E=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).state={email:"",password:""},n}return Object(i.a)(t,[{key:"submmit",value:function(){var e=this.state.email,a=this.state.password;v.a.post("https://reqres.in/api/login",{email:e,password:a}).then((function(e){e&&(localStorage.setItem("token",e.data.token),window.location.reload(!1))}))}},{key:"onChange",value:function(e){this.setState(Object(h.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){return r.a.createElement("div",{className:"Log"},r.a.createElement("h1",null," Login "),r.a.createElement("h2",null,"E-mail:"),r.a.createElement("input",{className:"e-mail",type:"text",name:"email",onChange:this.onChange.bind(this)}),r.a.createElement("h2",{className:"passh2"}," Senha:"),r.a.createElement("input",{className:"pass",type:"password",name:"password",onChange:this.onChange.bind(this)}),r.a.createElement("button",{onClick:this.submmit.bind(this)},"Login"))}}]),t}(r.a.Component);function g(){return!!localStorage.getItem("token")}var f=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).state={name:"",data:""},n}return Object(i.a)(t,[{key:"onChange",value:function(e){this.setState(Object(h.a)({},e.target.name,e.target.value))}},{key:"submit",value:function(){var e=this;v.a.get("https://api.agify.io?name="+this.state.name).then((function(a){a&&e.setState({data:a.data.age})}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("input",{type:"text",name:"name",onChange:this.onChange.bind(this)}),r.a.createElement("button",{onClick:this.submit.bind(this)},"Enviar"),r.a.createElement("h1",null,this.state.data))}}]),t}(r.a.Component),b=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).state={email:"",password:"",password_save:""},n}return Object(i.a)(t,[{key:"submmit",value:function(){var e=this.state.email,a=this.state.password,t=this.state.password_save,n=this.validate(e,a,t);n.length>0?alert(n):v.a.post("https://reqres.in/api/register",{email:e,password:a}).then((function(e){e&&(localStorage.setItem("token",e.data.token),window.location.reload(!1))}))}},{key:"validate",value:function(e,a,t){var n="";return a!=t&&(n+="A senha deve ser igual a senha salva\n"),a.length<3&&(n+="A quantidade de caracteres da senha deve ser maior que 3\n"),""==e&&(n+="O email n\xe3o deve possuir 0 caracteres\n"),""==a&&(n+="A senha n\xe3o deve possuir 0 caracteres\n"),e.length<3&&(n+="A quantidade de caracteres do email deve ser maior que 3\n"),this.validarEmail(e)||(n+="O email n\xe3o \xe9 valido\n"),n}},{key:"validarEmail",value:function(e){return/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e)}},{key:"onChange",value:function(e){this.setState(Object(h.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("h1",{className:"logh1"}," Login "),r.a.createElement("h2",null,"E-mail:"),r.a.createElement("input",{type:"text",name:"email",onChange:this.onChange.bind(this)}),r.a.createElement("h2",null,"Senha:"),r.a.createElement("input",{type:"password",name:"password",onChange:this.onChange.bind(this)}),r.a.createElement("h2",null,"Confirma\xe7\xe3o de senha:"),r.a.createElement("input",{type:"password",name:"password_save",onChange:this.onChange.bind(this)}),r.a.createElement("button",{onClick:this.submmit.bind(this)},"Login")))}}]),t}(r.a.Component),w=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).state={click:!1},n}return Object(i.a)(t,[{key:"tituloOnClicked",value:function(){this.setState({click:!0})}},{key:"botaoDownload",value:function(){if(1==this.state.click)return r.a.createElement(d,null)}},{key:"deslogar",value:function(){localStorage.removeItem("token"),window.location.reload(!1)}},{key:"render",value:function(){return console.log(this.props),r.a.createElement("div",{className:"Componente"},r.a.createElement("body",null,this.botaoDownload(),r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"topo",role:"menu"},r.a.createElement("p",null,r.a.createElement("img",{src:"img/asf_feather.png"}),r.a.createElement("div",{className:"dropdown"},r.a.createElement("button",{className:"dropbtn"},"Apache Software Foundation"),r.a.createElement("div",{className:"dropdown-content"},r.a.createElement("a",{href:"#"},"Apache Homepage"),r.a.createElement("a",{href:"#"},"License"),r.a.createElement("a",{href:"#"},"Sponsorship"),r.a.createElement("a",{href:"#"},"Thanks"),r.a.createElement("a",{href:"#"},"Sercurity")),r.a.createElement("div",null)),"/Apache Cassandra"),r.a.createElement("div",{className:"imgtopo"}),r.a.createElement("img",{src:"img/cassandra_logo.png"})),r.a.createElement("nav",null,r.a.createElement("div",{className:"botaomediaquery"},r.a.createElement("button",{type:"button"})),r.a.createElement("ul",{className:"login"},g()?r.a.createElement("button",{onClick:this.deslogar.bind(this)},"Deslogar"):r.a.createElement(E,null)),r.a.createElement("div",{className:"texto1"},g()?r.a.createElement(f,null):r.a.createElement("div",null,"  ",r.a.createElement("h1",{className:"texto1h1"},"Necess\xe1rio Logar para ter acesso a pesquisa de idade")," ",r.a.createElement(b,null)," ")),r.a.createElement("div",{className:"botao"},r.a.createElement("button",{onClick:this.tituloOnClicked.bind(this)},"Download Cassandra")),r.a.createElement("div",{className:"CassadraDown"},r.a.createElement("p",null,r.a.createElement("a",{href:"#"},"Cassandra 4.0-beta1 Changelog"))))),r.a.createElement("article",null,r.a.createElement("div",{className:"CassandraText"},r.a.createElement("h3",null,this.state.titulo,"What is Cassandra?")),r.a.createElement("div",{className:"resumo"},r.a.createElement("p",null,"The Apache Cassandra database is the right choice when you need scalability and high availability without compromising performance. Linear scalability and proven fault-tolerance on commodity hardware or cloud infrastructure make it the perfect platform for mission-critical data. Cassandra's support for replicating across multiple datacenters is best-in-class, providing lower latency for your users and the peace of mind of knowing that you can survive regional outages."))),r.a.createElement("div",{className:"footer"},r.a.createElement("footer",null,r.a.createElement("blockquote",null,r.a.createElement("p",null,"Universidade Tecnol\xf3gica Federal do Paran\xe1 -2020."))))))}}]),t}(r.a.Component);t(54);var k=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(w,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[25,1,2]]]);
//# sourceMappingURL=main.582e6d6a.chunk.js.map