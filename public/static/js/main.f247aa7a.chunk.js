(window.webpackJsonpmoveo_task=window.webpackJsonpmoveo_task||[]).push([[0],{25:function(e,t,a){e.exports=a(48)},30:function(e,t,a){},31:function(e,t,a){},35:function(e,t,a){e.exports=a.p+"static/media/day.f3d628ff.jpg"},36:function(e,t,a){e.exports=a.p+"static/media/night.75d228bc.jpg"},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a.n(n),o=a(11),l=a.n(o),r=(a(30),a(10)),s=a(12),c=a(13),m=a(15),d=a(14),u=a(6),h=a(16),y=(a(31),a(49)),g=a(50),p=a(51),f=a(52),v=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).state={city:["new york","tel aviv","paris"],staticCities:[]},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.getCrawler()}},{key:"render",value:function(){return void 0===this.state.city?i.a.createElement("div",null,i.a.createElement("h1",null,"Loading..")):i.a.createElement("div",null,i.a.createElement("h1",null,"More Locations"),i.a.createElement("div",{class:"moreCities",style:{display:"flex"}},this.state.staticCities.map((function(e){return i.a.createElement(y.a,{className:"card firstRow",style:{width:"10rem",margin:"10px",backgroundColor:"rgba(255, 255, 255, 0.2)"}},i.a.createElement(g.a,null,i.a.createElement(p.a,null,i.a.createElement("h6",null,e.City)),i.a.createElement(p.a,null,e.Temp),i.a.createElement(f.a,null," ",i.a.createElement("img",{className:"img",src:e.Image})),i.a.createElement("h6",{class:"text-primary"},e.Discription," ")))}))))}},{key:"getCrawler",value:function(){for(var e=this,t=function(t){n=e.state.city[t],fetch("http://localhost:3000/getlink/".concat(n)).then((function(e){return e.json()})).then((function(a){var n=a;e.getData(n,e.state.city[t])}))},a=0;a<this.state.city.length;a++){var n;t(a)}}},{key:"getData",value:function(e,t){var a=this;return fetch("http://localhost:3000/getforecast?cityUni=".concat(e)).then((function(e){return e.json()})).then((function(e){e.City=t,a.state.staticCities.push(e)}))}}]),t}(i.a.Component),b=a(53),E=a(54),w=a(55),C=a(56),k=a(57),O=a(58),N=a(59),j=a(60),x=a(35),W=a(36),D=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={cityWeather:"",image:"",navbarColor:"",buttonColor:"",cityInfo:[]},a.onKeyPress=function(e){13===e.which&&a.getCrawler()},a.onKeyPress1=function(e){13===e.which&&(a.getCrawler(),a.setState({modalOpened:!1}))},a.state={modalOpened:!0,setmodalOpened:!0,visible:!1},a.onDismiss=a.onDismiss.bind(Object(u.a)(a)),a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"onDismiss",value:function(){this.setState({visible:!this.state.visible})}},{key:"componentDidMount",value:function(){var e=this,t=(new Date).getHours();t>4&&t<18?(document.body.style.backgroundImage="url("+x+")",this.state.navbarColor="transparent",this.state.buttonColor="warning"):(document.body.style.backgroundImage="url("+W+")",this.state.navbarColor="info",this.state.buttonColor="primary"),fetch("http://www.geoplugin.net/json.gp").then((function(e){return e.json()})).then((function(t){e.setState({city:t.geoplugin_city}),e.getCrawler()}))}},{key:"render",value:function(){var e=this;return i.a.createElement(i.a.Fragment,null,i.a.createElement(b.a,{color:this.state.navbarColor,expand:"md",style:{fontSize:"20px",color:"white"}},i.a.createElement(E.a,null,i.a.createElement(w.a,{style:{fontSize:"20px"}},"Weather"),i.a.createElement(C.a,{style:{display:"inline"},navbar:!0},i.a.createElement(k.a,{onKeyPress:this.onKeyPress.bind(this),style:{height:"2rem",width:"10rem",margin:"10px",backgroundColor:"rgba(255, 255, 255, 0.2)",display:"inline "},className:"myCity",onChange:this.handleText.bind(this),name:"city",type:"text",value:this.state.defaultCity}),i.a.createElement(O.a,{color:this.state.buttonColor,onClick:this.getCrawler.bind(this)},"Change Location")))),i.a.createElement(N.a,{color:"danger",isOpen:this.state.visible,toggle:this.onDismiss},i.a.createElement("b",null,"Oh oh...")," We are so SORRY! we don't have the trip tips for your location! the tips for now are in your area - Have fun!"),i.a.createElement(j.a,{isOpen:this.state.modalOpened},i.a.createElement("div",{className:"modal-header"},i.a.createElement("button",{"aria-label":"Close",className:"close","data-dismiss":"modal",type:"button",onClick:function(){return e.setState({modalOpened:!1})}},i.a.createElement("span",{"aria-hidden":!0},"\xd7")),i.a.createElement("h5",{className:"modal-title",id:"exampleModalLiveLabel"},"Welcome to Weather!         ")),i.a.createElement("div",{className:"modal-body"},i.a.createElement("p",null,"Which location would you like your forecast for?"),"City:",i.a.createElement(k.a,{onKeyPress:this.onKeyPress1.bind(this),style:{width:"10rem",margin:"10px",backgroundColor:"rgba(255, 255, 255, 0.2)",display:"inline "},className:"myCity",onChange:this.handleText.bind(this),name:"city",type:"text",value:this.state.defaultCity})),i.a.createElement("div",{className:"modal-footer"},i.a.createElement("div",{className:"left-side"},i.a.createElement(O.a,{className:"btn-link",color:"default","data-dismiss":"modal",type:"button",onClick:function(){e.getCrawler(),e.setState({modalOpened:!1})}},"Get Weather!")),i.a.createElement("div",{className:"divider"}),i.a.createElement("div",{className:"right-side"},i.a.createElement(O.a,{className:"btn-link",color:"success",type:"button",onClick:function(){return e.setState({modalOpened:!1})}},"Use My Location")))),i.a.createElement("div",{className:"App cardMainContainer"},i.a.createElement("div",{className:"mainDiv"},i.a.createElement(y.a,{style:{textAlign:"left",backgroundColor:"rgba(255, 255, 255, 0.2)"}},i.a.createElement(g.a,{className:"containerMain"},i.a.createElement("h2",{className:"today",id:"title"}),i.a.createElement("h3",Object(r.a)({className:"today",id:"weater"},"className","weather")),i.a.createElement("img",{id:"image"}),i.a.createElement("h5",Object(r.a)({className:"today",id:"wind"},"className","weather")),i.a.createElement("h5",Object(r.a)({className:"today",id:"humidity"},"className","weather")),i.a.createElement("h5",{id:"descriptionWeather",style:{color:"black",margin:"0px"}}))),i.a.createElement("div",{class:"moreCities",style:{display:"flex"}},i.a.createElement(v,null)))))}},{key:"handleText",value:function(e){this.setState(Object(r.a)({},e.target.name,e.target.value))}},{key:"getCrawler",value:function(){var e=this;return fetch("http://localhost:3000/getlink/".concat(this.state.city)).then((function(e){return e.json()})).then((function(t){var a=t;e.getData(a)}))}},{key:"getData",value:function(e){var t=this;return fetch("http://localhost:3000/getforecast?cityUni=".concat(e)).then((function(e){return e.json()})).then((function(e){t.state.cityWeather=e.Temp,console.log(e),t.setState({allWeather:e}),t.state.image=e.Image,document.getElementById("title").innerText=e.CityName,document.getElementById("wind").innerText="Wind "+e.Wind,document.getElementById("humidity").innerText=e.Humidity,document.getElementById("image").src=e.Image,document.getElementById("weater").innerHTML=t.state.cityWeather,document.getElementById("descriptionWeather").innerHTML=e.Discription}))}}]),t}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(44),a(45),a(46),a(47);l.a.render(i.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[25,1,2]]]);
//# sourceMappingURL=main.f247aa7a.chunk.js.map