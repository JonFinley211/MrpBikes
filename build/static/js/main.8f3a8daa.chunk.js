(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{18:function(e,t,a){},35:function(e,t,a){e.exports=a.p+"static/media/logo.285fc40e.png"},36:function(e,t,a){e.exports=a(63)},41:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){e.exports=a.p+"static/media/1.3fcaca95.jpg"},58:function(e,t,a){e.exports=a.p+"static/media/2.14b5a260.jpg"},59:function(e,t,a){e.exports=a.p+"static/media/3.8dfce1a3.jpg"},60:function(e,t,a){e.exports=a.p+"static/media/4.dda696d8.jpg"},61:function(e,t,a){e.exports=a.p+"static/media/5.17a0c5af.jpg"},63:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(19),c=a.n(l),i=a(22),s=(a(41),a(10));a(47);var m=[{title:"add Item",path:"/item_master",cName:"dropdown-link"}];a(48);var o=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],l=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",{onClick:function(){return l(!a)},className:a?"dropdown-menu clicked":"dropdown-menu"},m.map((function(e,t){return r.a.createElement("li",{key:t},r.a.createElement(s.b,{className:e.cName,to:e.path,onClick:function(){return l(!1)}},e.title))}))))},u=a(35),d=a.n(u);var p=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(!1),m=Object(i.a)(c,2),u=m[0],p=(m[1],function(){return l(!1)});return r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{className:"navbar"},r.a.createElement(s.b,{to:"/",className:"navbar-logo",onClick:p},r.a.createElement("img",{src:d.a,width:"400",height:"120",className:"pr-2",alt:""})),r.a.createElement("div",{className:"menu-icon",onClick:function(){return l(!a)}},r.a.createElement("i",{className:a?"fas fa-times":"fas fa-bars"})),r.a.createElement("ul",{className:a?"nav-menu active":"nav-menu"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(s.b,{to:"/item_master",className:"nav-links",onClick:p},"Item Master"),u&&r.a.createElement(o,null)),r.a.createElement("li",{className:"nav-item"},r.a.createElement(s.b,{to:"/bomx",className:"nav-links",onClick:p},"Bill of Materials")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(s.b,{to:"/mrfg",className:"nav-links",onClick:p},"Material Requirements")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(s.b,{to:"/product_structure",className:"nav-links",onClick:p},"Product Structure")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(s.b,{to:"/sign-up",className:"nav-links",onClick:p},"Login")))))};a(18);function E(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("div",{fluid:!0,className:"home"},r.a.createElement("h1",{align:"center",className:"display-3"},"Material",r.a.createElement("br",null),"Requirements"))))}var h=a(6),f=a(8),g=a(13),b=a(14),k=a(16),v=a(15),y=a(64),x=a(65),N=a(77),_=a(66),j=a(67),O=a(68),B=a(69),C=a(70),S=a(71),w=a(72),I=a(73),P=a(74),D=function(e){Object(k.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(g.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(e=t.call.apply(t,[this].concat(l))).state={bikes:[],bike:{id:"",desc:"",uofm:"",oh:"",type:""},showModal:!1},e.getBikes=function(t){fetch("http://localhost:4000/items").then((function(e){return e.json()})).then((function(t){return e.setState({bikes:t.data})})).catch((function(e){return console.error(e)}))},e.addBike=function(t){var a=e.state.bike;fetch("http://localhost:4000/items/add?im_item_no=".concat(a.id,"&im_desc=").concat(a.desc,"&im_uofm=").concat(a.uofm,"&im_oh=").concat(a.oh,"&im_itemtype=").concat(a.type)).then(e.getBikes).catch((function(e){return console.error(e)}))},e.renderBikes=function(e){var t=e.im_item_no,a=e.im_itemtype,n=e.im_desc,l=e.im_uofm,c=e.im_oh;return r.a.createElement("tr",{key:t},r.a.createElement("td",null,t),r.a.createElement("td",null,n),r.a.createElement("td",{align:"center"},a),r.a.createElement("td",{align:"center"},l),r.a.createElement("td",{align:"right"},c))},e}return Object(b.a)(a,[{key:"componentDidMount",value:function(){this.getBikes()}},{key:"toggleModal",value:function(){this.state={showLogOut:!1}}},{key:"render",value:function(){var e=this,t=this.state,a=t.bikes,n=t.bike;return r.a.createElement("div",{className:"services"},r.a.createElement("div",{align:"center"},r.a.createElement("h1",{align:"center",className:"display-3 p-3"},"Item Master")),r.a.createElement("div",null),r.a.createElement("div",{align:"center",className:"container"},r.a.createElement(y.a,null,r.a.createElement("header",{align:"center"},r.a.createElement(x.a,{onClick:function(){return e.setState({showLogOut:!0})}},"Add an Item(Bike)"),r.a.createElement(N.a,{size:"xl",align:"center",isOpen:this.state.showLogOut,fade:"false",toggle:function(){return e.setState({showLogOut:!1})}},r.a.createElement(_.a,{align:"center",toggle:function(){return e.setState({showLogOut:!1})}},"Input an Item"),r.a.createElement(j.a,null,r.a.createElement(O.a,null,r.a.createElement(B.a,null,r.a.createElement(C.a,{form:!0,xs:"1",sm:"2",md:"5"},r.a.createElement(S.a,{sm:!0},r.a.createElement(w.a,null,r.a.createElement("label",{id:"it"},"ItemNumber:"),r.a.createElement("input",{id:"it",type:"text",value:n.id,placeholder:"Item Number",onChange:function(t){return e.setState({bike:Object(f.a)(Object(f.a)({},n),{},{id:t.target.value})})}}))),r.a.createElement(S.a,{sm:!0,align:"left"},r.a.createElement("label",{id:"de"},"Description:"),r.a.createElement("input",{id:"de",type:"text",value:n.desc,placeholder:"Description",onChange:function(t){return e.setState({bike:Object(f.a)(Object(f.a)({},n),{},{desc:t.target.value})})}})),r.a.createElement(w.a,null,r.a.createElement(S.a,{sm:!0,align:"left"},r.a.createElement("label",{id:"type"},"Type:"),r.a.createElement("br",null),r.a.createElement("select",{id:"type",value:n.type,onChange:function(t){return e.setState({bike:Object(f.a)(Object(f.a)({},n),{},{type:t.target.value})})}},r.a.createElement("option",{value:"fg",selected:!0},"fg"),r.a.createElement("option",{value:"assy"},"assy")))),r.a.createElement(S.a,{sm:!0,align:"left"},r.a.createElement("label",null,"Measure :"),r.a.createElement("input",{type:"text",value:n.uofm,placeholder:"Item Unit of Measure",onChange:function(t){return e.setState({bike:Object(f.a)(Object(f.a)({},n),{},{uofm:t.target.value})})}})),r.a.createElement(S.a,{sm:!0,align:"left"},r.a.createElement("label",null,"on hand :"),"  ",r.a.createElement("input",{type:"text",value:this.state.bike.oh,placeholder:"item on hand",onChange:function(t){return e.setState({bike:Object(f.a)(Object(f.a)({},n),{},{oh:t.target.value})})}})))))),r.a.createElement(I.a,null,r.a.createElement(x.a,{align:"center",className:"adimbtn btn",onClick:this.addBike},"Add an Item"),r.a.createElement(x.a,{color:"info"},"Cancel")))),r.a.createElement(P.a,{size:"sm",responsive:!0,className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Item Number"),r.a.createElement("th",null,"Description"),r.a.createElement("th",null,"Item Type"),r.a.createElement("th",null,"Unit of Measure"),r.a.createElement("th",null,"On-Hand"))),a.map(this.renderBikes)))),r.a.createElement("div",null))}}]),a}(n.Component),M=function(e){Object(k.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(g.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(e=t.call.apply(t,[this].concat(l))).state={bikeparts:[],bikepart:{psid:"",pscompin:"",qtyper:"",uofm:""}},e.getBikeParts=function(t){fetch("http://localhost:4000/psitems").then((function(e){return e.json()})).then((function(t){return e.setState({bikeparts:t.data})})).catch((function(e){return console.error(e)}))},e.addBikePart=function(t){var a=e.state.bikepart;fetch("http://localhost:4000/psitems/add?ps_parent_item=".concat(a.psid,"&ps_component_item=").concat(a.pscompin,"&ps_qtyper=").concat(a.qtyper,"&ps_uofm=").concat(a.uofm)).then(e.getBikeParts).catch((function(e){return console.error(e)}))},e.renderBikeParts=function(e){var t=e.ps_parent_item,a=e.ps_component_item,n=e.ps_qtyper,l=e.ps_uofm;return r.a.createElement("tr",{key:t},r.a.createElement("td",null,t),r.a.createElement("td",null,a),r.a.createElement("td",{align:"center"},n),r.a.createElement("td",{align:"center"},l))},e}return Object(b.a)(a,[{key:"componentDidMount",value:function(){this.getBikeParts()}},{key:"render",value:function(){var e=this.state,t=e.bikeparts;e.bikepart;return r.a.createElement("div",{className:"services"},r.a.createElement("div",{align:"center"},r.a.createElement("h1",{class:!0,className:"display-3"},"Product Structure")),r.a.createElement("div",{class:"container"},r.a.createElement(y.a,null,r.a.createElement("header",null),r.a.createElement(P.a,{size:"small",responsive:!0,classNamer:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null," Parent Item"),r.a.createElement("th",null," Component Item"),r.a.createElement("th",null,"Quantity Per"),r.a.createElement("th",null,"Unit of Measure"))),t.map(this.renderBikeParts),r.a.createElement(x.a,{className:"adimbtn",onClick:this.addBikePart},"Add Component")))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",null))}}]),a}(n.Component);function q(){return r.a.createElement("h1",{className:"sign-up"},"LIKE & SUBSCRIBE")}var z=a(21),A=a(23),L=a(75),T=a(76),Q=(a(56),function(e){Object(k.a)(n,e);var t=Object(v.a)(n);function n(e){var r;return Object(g.a)(this,n),(r=t.call(this,e)).state={tableStyles:[{id:1,picture:a(57),description:"Palo Alto",info:{type:"JPEG",dimensions:"200x150"},date:new Date("September 14, 2012"),size:"45.6 KB",progress:{percent:29,colorClass:"success"}},{id:2,picture:a(58),description:"The Sky",info:{type:"PSD",dimensions:"2400x1455"},date:new Date("November 14, 2012"),size:"15.3 MB",progress:{percent:33,colorClass:"warning"}},{id:3,picture:a(59),description:"Down the road",label:{colorClass:"success",text:"INFO!"},info:{type:"JPEG",dimensions:"200x150"},date:new Date("September 14, 2012"),size:"49.0 KB",progress:{percent:38,colorClass:"inverse"}},{id:4,picture:a(60),description:"The Edge",info:{type:"PNG",dimensions:"210x160"},date:new Date("September 15, 2012"),size:"69.1 KB",progress:{percent:17,colorClass:"danger"}},{id:5,picture:a(61),description:"Fortress",info:{type:"JPEG",dimensions:"1452x1320"},date:new Date("October 1, 2012"),size:"2.3 MB",progress:{percent:41,colorClass:"primary"}}],checkboxes1:[!1,!0,!1,!1],checkboxes2:[!1,!1,!1,!1,!1,!1],checkboxes3:[!1,!1,!1,!1,!1,!1]},r.checkAll=r.checkAll.bind(Object(A.a)(r)),r}return Object(b.a)(n,[{key:"parseDate",value:function(e){return this.dateSet=e.toDateString().split(" "),"".concat(e.toLocaleString("en-us",{month:"long"})," ").concat(this.dateSet[2],", ").concat(this.dateSet[3])}},{key:"checkAll",value:function(e,t){var a=new Array(this.state[t].length).fill(e.target.checked);this.setState(Object(z.a)({},t,a))}},{key:"changeCheck",value:function(e,t,a){var n=this.state,r=n.checkboxes1,l=n.checkboxes2,c=n.checkboxes3;if("checkboxes1"===t){var i=r[a]=e.target.checked;this.setState({checkedBox1:i})}else if("checkboxes2"===t){var s=l[a]=e.target.checked;this.setState({checkedBox2:s})}else{var m=c[a]=e.target.checked;this.setState({checkedBox3:m})}this.setState(Object(z.a)({},t,this.state[t]))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{class:"container"},r.a.createElement("h1",{className:"page-title mb-lg"},"Tables - ",r.a.createElement("span",{className:"fw-semi-bold"},"Basic")),r.a.createElement(C.a,null,r.a.createElement(S.a,{sm:12},r.a.createElement(P.a,{borderless:!0,className:"mainTable"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{className:"hidden-sm-down"},"#"),r.a.createElement("th",null,"Picture"),r.a.createElement("th",null,"Description"),r.a.createElement("th",{className:"hidden-sm-down"},"Info"),r.a.createElement("th",{className:"hidden-sm-down"},"Date"),r.a.createElement("th",{className:"hidden-sm-down"},"Size"),r.a.createElement("th",null))),r.a.createElement("tbody",null,this.state.tableStyles.map((function(t){return r.a.createElement("tr",{key:t.id},r.a.createElement("td",null,t.id),r.a.createElement("td",null,r.a.createElement("img",{className:"img-rounded",src:t.picture,alt:"",height:"60"})),r.a.createElement("td",null,t.description,t.label&&r.a.createElement("div",null,r.a.createElement(L.a,{color:t.label.colorClass},t.label.text))),r.a.createElement("td",null,r.a.createElement("p",{className:"mb-0"},r.a.createElement("small",null,r.a.createElement("span",{className:"fw-semi-bold"},"Type:"),r.a.createElement("span",{className:"text-muted"},"\xa0 ",t.info.type))),r.a.createElement("p",null,r.a.createElement("small",null,r.a.createElement("span",{className:"fw-semi-bold"},"Dimensions:"),r.a.createElement("span",{className:"text-muted"},"\xa0 ",t.info.dimensions)))),r.a.createElement("td",{className:"text-semi-muted"},e.parseDate(t.date)),r.a.createElement("td",{className:"text-semi-muted"},t.size),r.a.createElement("td",{className:"width-150"},r.a.createElement(T.a,{style:{height:"7px"},color:"success",value:t.progress.percent,className:"progress-sm mb-xs rounded mt-xs"})))})))))),r.a.createElement(C.a,null,r.a.createElement(S.a,{lg:6}),r.a.createElement(S.a,{lg:6})))}}]),n}(n.Component)),U=function(e){Object(k.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(g.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(e=t.call.apply(t,[this].concat(l))).state={mrfgbikes:[],mrfgbike:{mrfgid:"",mrfgdesc:"",mrfgtype:"",mrfgqty:"",mrfggross:""},boxes:["","","","","","","",""],box:{boxid:"",boxdesc:"",boxtype:"",boxqty:"",boxgross:""}},e.getmrfgBikes=function(t){fetch("http://localhost:4000/mrfg").then((function(e){return e.json()})).then((function(t){return e.setState({mrfgbikes:t.data})})).catch((function(e){return console.error(e)}))},e.addmrfgBike=function(t){var a=e.state.mrfgbike;console.log(a.mrfgqty),console.log("mrfg clicked"),fetch("http://localhost:4000/bomx?im_item_no=".concat(a.mrfgid,"&grossqty=").concat(a.mrfgqty)).then((function(e){return e.json()})).then((function(t){return e.setState({boxes:t.data[0]})})).catch((function(e){return console.error(e)}))},e.rendermrfgBikes=function(e){var t=e.im_item_no,a=e.im_desc,n=e.im_itemtype;return r.a.createElement("tr",{key:t},r.a.createElement("td",null,t),r.a.createElement("td",null,a),r.a.createElement("td",null,n))},e.aarendermrfgBikes=function(e){var t=e.im_item_no,a=e.im_itemtype;return r.a.createElement("ul",{key:t},r.a.createElement("li",null,t),r.a.createElement("li",null,a))},e.ddrendermrfgBikes=function(e){var t=e.im_item_no,a=e.im_desc;return r.a.createElement("option",{key:t,value:t},t," ",a)},e.xxrendermrfgBikes=function(e){var t=e.ps_component_item,a=e.im_desc,n=e.ps_qtyper,l=e.ps_uofm,c=e.grossqty,i=e.im_oh,s=e.netqty;return r.a.createElement("tr",{key:t},r.a.createElement("td",null,t),r.a.createElement("td",null,a),r.a.createElement("td",{align:"right"},n),r.a.createElement("td",{align:"center"},l),r.a.createElement("td",{align:"right"},c),r.a.createElement("td",{align:"right"},i),r.a.createElement("td",{align:"right"},s))},e}return Object(b.a)(a,[{key:"componentDidMount",value:function(){this.getmrfgBikes()}},{key:"render",value:function(){var e=this,t=this.state,a=t.mrfgbikes,n=t.mrfgbike,l=t.boxes;return r.a.createElement("div",{className:"services"},r.a.createElement("div",{align:"center"},r.a.createElement("h1",{className:"display-3"},"Material Requirements")),r.a.createElement("div",{className:"container"},r.a.createElement(y.a,null,r.a.createElement("header",{align:"center"},r.a.createElement("select",{onChange:function(t){return e.setState({mrfgbike:Object(f.a)(Object(f.a)({},n),{},{mrfgid:t.target.value})})}},a.map(this.ddrendermrfgBikes)),r.a.createElement("input",{type:"text",value:n.mrfgqty,placeholder:"Quantity to Make",onChange:function(t){return e.setState({mrfgbike:Object(f.a)(Object(f.a)({},n),{},{mrfgqty:t.target.value})})}}),r.a.createElement(x.a,{className:"adimbtn btn",onClick:this.addmrfgBike},"Calculate")),r.a.createElement(P.a,{size:"sm",responsive:!0,className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Component Item"),r.a.createElement("th",null," Description "),r.a.createElement("th",null," Qty Per "),r.a.createElement("th",null,"PS UofM "),r.a.createElement("th",null,"GrossQty "),r.a.createElement("th",null," OH "),r.a.createElement("th",null," Net Qty Needed"))),l.map(this.xxrendermrfgBikes)))))}}]),a}(n.Component),F=function(e){Object(k.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(g.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(e=t.call.apply(t,[this].concat(l))).state={mrfgbikes:[],mrfgbike:{mrfgid:"",mrfgdesc:"",mrfgtype:"",mrfgqty:"",mrfggross:""},lboxes:["","","","","","","",""],lbox:{lboxid:"",lboxdesc:"",lboxtype:"",lboxqty:"",lboxgross:""}},e.getmrfgBikes=function(t){fetch("http://localhost:4000/mrfg").then((function(e){return e.json()})).then((function(t){return e.setState({mrfgbikes:t.data})})).catch((function(e){return console.error(e)}))},e.lladdmrfgBike=function(t){var a=e.state.mrfgbike;e.setstate={lboxes:["","","","","","","",""]},console.log("hi"),console.log(a.mrfgid),console.log("llmrfg clicked"),fetch("http://localhost:4000/boml?im_item_no=".concat(a.mrfgid)).then((function(e){return e.json()})).then((function(t){return e.setState({lboxes:t.data[0]})})).catch((function(e){return console.error(e)}))},e.rendermrfgBikes=function(e){var t=e.im_item_no,a=e.im_desc,n=e.im_itemtype;return r.a.createElement("tr",{key:t},r.a.createElement("td",null,t),r.a.createElement("td",null,a),r.a.createElement("td",null,n))},e.ddrendermrfgBikes=function(e){var t=e.im_item_no,a=(e.im_itemtype,e.im_desc);return r.a.createElement("option",{key:t,value:t},t," ",a)},e.llrendermrfgBikes=function(e){var t=e.ps_parent_item,a=e.ps_component_item,n=e.im_desc,l=e.im_itemtype,c=e.ps_qtyper,i=e.ps_uofm;return r.a.createElement("tr",{key:t},r.a.createElement("td",null,t),r.a.createElement("td",null,a),r.a.createElement("td",null,n),r.a.createElement("td",{align:"center"},l),r.a.createElement("td",{align:"right"},c),r.a.createElement("td",{align:"center"},i))},e}return Object(b.a)(a,[{key:"componentDidMount",value:function(){this.getmrfgBikes()}},{key:"render",value:function(){var e=this,t=this.state,a=t.mrfgbikes,n=t.mrfgbike,l=t.lboxes;return r.a.createElement("div",{className:"services"},r.a.createElement("div",null,r.a.createElement("h1",{align:"center",className:"display-3"},"Bill of Materials"),r.a.createElement("div",{class:"container"},r.a.createElement(y.a,null,r.a.createElement("header",{align:"center"},r.a.createElement("label",{for:"parts"},"Choose an Item: "),r.a.createElement("br",null),r.a.createElement("select",{onChange:function(t){return e.setState({mrfgbike:Object(f.a)(Object(f.a)({},n),{},{mrfgid:t.target.value})})}},a.map(this.ddrendermrfgBikes)),r.a.createElement("br",null),r.a.createElement(x.a,{className:"llbtn btn",onClick:this.lladdmrfgBike},"View Components")),r.a.createElement(P.a,{size:"sm",responsive:!0,className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Parent Item"),r.a.createElement("th",null,"Component Item"),r.a.createElement("th",null," Description "),r.a.createElement("th",null," Item Type"),r.a.createElement("th",null,"Qty Per"),r.a.createElement("th",null,"PS Unit of Measure "))),l.map(this.llrendermrfgBikes)))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",null)))}}]),a}(n.Component);var G=function(){return r.a.createElement(s.a,null,r.a.createElement(p,{fixed:"top"}),r.a.createElement(h.c,null,r.a.createElement(h.a,{path:"/",exact:!0,component:E}),r.a.createElement(h.a,{path:"/item_master",component:D}),r.a.createElement(h.a,{path:"/product_structure",component:M}),r.a.createElement(h.a,{path:"/sign-up",component:q}),r.a.createElement(h.a,{path:"/tables",component:Q}),r.a.createElement(h.a,{path:"/mrfg",component:U}),r.a.createElement(h.a,{path:"/bomx",component:F})))};a(62);c.a.render(r.a.createElement(G,null),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.8f3a8daa.chunk.js.map