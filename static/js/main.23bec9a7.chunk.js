(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{27:function(e,t,a){e.exports=a(67)},32:function(e,t,a){},33:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(3),i=a.n(s),l=(a(32),a(33),a(34),a(35),a(4)),c=a(5),o=a(7),m=a(6),u=a(8),h=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={item:0},a.imageRef=r.a.createRef(),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"card",onMouseOver:function(t){return t.currentTarget.children[1].children[0].src=e.props.gif},onMouseOut:function(t){return t.currentTarget.children[1].children[0].src=e.props.image}},r.a.createElement("div",{className:"card-icon"},r.a.createElement("div",{className:"card-icon-wrapper"},r.a.createElement("i",{className:"fa fa-search-plus"}))),r.a.createElement("div",{className:"card-image"},r.a.createElement("img",{src:this.props.image,alt:"",ref:this.imageRef})),r.a.createElement("div",{className:"card-description"},r.a.createElement("div",{className:"card-description__inner"},r.a.createElement("h2",null,this.props.title),r.a.createElement("p",null,this.props.description),r.a.createElement("div",{className:"card-hashtags"},this.props.hashtags.map((function(e,t){return r.a.createElement("span",{key:t},e)})))),r.a.createElement("a",{href:this.props.link,target:"_blank",className:"card-button main-button"},"Learn more")))}}]),t}(n.Component),d=a(24),p=a.n(d),f=(a(55),a(25)),g=a(26),E=a.n(g),v=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).setValue=function(e){var t=a.state.originalItems.slice(),n=e.target.getAttribute("dataname"),r=e.target.getAttribute("datavalue"),s=[];s="#all"!==r?t.filter((function(e){return e.hashtags.includes(r)})):t,a.setState({items:s,active:n})},a.menuItem=r.a.createRef(),a.state={items:[],originalItems:[],active:"all",menuItems:["all","react.js","jquery","javascript","html","css"]},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;p.a.get("./port.json").then((function(t){return e.setState({items:t.data,originalItems:t.data})}))}},{key:"render",value:function(){var e=this;return r.a.createElement(n.Fragment,null,r.a.createElement("header",null),r.a.createElement("div",{className:"section-intro"},this.state.originalItems.length?r.a.createElement(f.Carousel,{autoPlay:!0,transitionTime:1e3,interval:5e3,swipeable:!0,emulateTouch:!0,stopOnHover:!0,showArrows:!1,showThumbs:!1,showIndicators:!1,showStatus:!1,infiniteLoop:!0},this.state.originalItems.slice(0,3).map((function(e,t){return r.a.createElement("div",{className:"carousel-item",key:t},r.a.createElement("img",{src:e.image}),r.a.createElement("div",{className:"carousel-overlay"},r.a.createElement("div",{className:"carousel-description"},r.a.createElement("h2",null,e.name),r.a.createElement("p",null,e.description),r.a.createElement("a",{href:e.link,target:"_blank",className:"main-button"},"Learn more"))))}))):r.a.createElement("div",{className:"section-loading"},"Loading")),r.a.createElement("div",{className:"section-header"},r.a.createElement("ul",{className:"portfolio-menu"},this.state.menuItems.map((function(t,a){return r.a.createElement("li",{key:a,className:e.state.active===t?"portfolio-menu__link_active":"",onClick:e.setValue,datavalue:"#"+t,dataname:t},t)}))),this.state.items.length?r.a.createElement("p",{className:"portfolio-selected"},this.state.items.length," out of ",this.state.originalItems.length," items selected"):null),r.a.createElement("div",{className:"card-section"},this.state.items.map((function(e,t){return r.a.createElement(E.a,{once:!0,height:200,key:t,offset:-100},r.a.createElement(h,{once:!0,link:e.link,image:e.image,gif:e.gif,title:e.name,description:e.description,hashtags:e.hashtags}))}))),r.a.createElement("footer",null,r.a.createElement("p",null,"+375 44 7396417"),r.a.createElement("p",null,"aleksandr_kalinin_1995@mail.ru")))}}]),t}(n.Component);i.a.render(r.a.createElement(v,null),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.23bec9a7.chunk.js.map