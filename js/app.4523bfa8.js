(function(t){function e(e){for(var r,o,i=e[0],c=e[1],u=e[2],d=0,m=[];d<i.length;d++)o=i[d],s[o]&&m.push(s[o][0]),s[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);l&&l(e);while(m.length)m.shift()();return n.push.apply(n,u||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],r=!0,i=1;i<a.length;i++){var c=a[i];0!==s[c]&&(r=!1)}r&&(n.splice(e--,1),t=o(o.s=a[0]))}return t}var r={},s={app:0},n=[];function o(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=r,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(a,r,function(e){return t[e]}.bind(null,r));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/menswear/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=c;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0237":function(t,e,a){t.exports=a.p+"img/unique.86dc0a0a.png"},"050e":function(t,e,a){t.exports=a.p+"img/insta-feeds.b1df0898.jpg"},"09ad":function(t,e,a){},1:function(t,e){},"1a41":function(t,e,a){"use strict";var r=a("b12d"),s=a.n(r);s.a},2:function(t,e){},"206d":function(t,e,a){"use strict";var r=a("9cbb"),s=a.n(r);s.a},"21bb":function(t,e,a){"use strict";var r=a("bcc9"),s=a.n(r);s.a},"2dc7":function(t,e,a){t.exports=a.p+"img/header.6b8bccad.png"},3:function(t,e){},4:function(t,e){},"422a":function(t,e,a){"use strict";var r=a("e9c2"),s=a.n(r);s.a},"45fa":function(t,e,a){},"4c48":function(t,e,a){},5407:function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("8e6e"),a("456d"),a("ac6a"),a("20d6");var r=a("bd86"),s=(a("7f7f"),a("cadf"),a("551c"),a("f751"),a("097d"),a("2b0e")),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Navbar"),a("router-view")],1)},o=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"main-nav"},[a("div",{staticClass:"logo"},[a("router-link",{attrs:{to:{name:"home"}}},[a("h1",[t._v("MENS")])])],1),a("div",{staticClass:"right-side"},[a("div",{staticClass:"menu-button",on:{click:function(e){return t.toggleNav()}}},[a("div",{staticClass:"box"}),a("div",{staticClass:"box"})]),a("ul",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.onClickOutside,expression:"onClickOutside"}],class:{toggleHeight:t.toggleNavStatus}},[a("li",[a("router-link",{attrs:{to:"/shop"}},[t._v("SHOP")])],1),t._m(0),t._m(1),a("li",{staticClass:"cart"},[a("router-link",{attrs:{to:"/cart"}},[t._v("CART ( "+t._s(t.$root.cart.length)+" )")])],1),a("li",[t.$root.isUserLoggedIn?a("router-link",{attrs:{to:t.redirectLink}},[t._v(t._s(t.$root.user.name))]):a("router-link",{attrs:{to:"/login"}},[t._v("LOGIN")])],1)])])])},c=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("a",{attrs:{href:"#"}},[t._v("ABOUT")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("a",{attrs:{href:"#"}},[t._v("BLOG")])])}],u={name:"Navbar",data:function(){return{toggleNavStatus:!1,length:0,loggedIn:!1,userName:""}},methods:{toggleNav:function(){this.toggleNavStatus=!this.toggleNavStatus},onClickOutside:function(t){"box"==t.target.className||"menu-button"==t.target.className?this.toggleNavStatus=this.toggleNavStatus:this.toggleNavStatus=!1}},beforeCreate:function(){this.toggleNavStatus=!1},computed:{redirectLink:function(){return this.$root.user.isAdmin?"/admin/home":"/user/home"}},watch:{$route:function(){this.toggleNavStatus=!1}}},l=u,d=(a("e8b1"),a("2877")),m=Object(d["a"])(l,i,c,!1,null,null,null),p=m.exports,h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bread-crumb"},t._l(t.$route.path.split("/"),function(t,e){return a("bread-crumb-item",{key:e,attrs:{breadItem:t}})}),1)},f=[],g=(a("28a5"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bread-crumb-item"},[a("router-link",{attrs:{to:"/"}},[t._v(t._s(t.capitalize))])],1)}),v=[],b={name:"BreadCrumbItem",props:["breadItem"],mounted:function(){},computed:{capitalize:function(){var t=this.breadItem[0].toUpperCase()+this.breadItem.slice(1);return t}}},C=b,_=(a("422a"),Object(d["a"])(C,g,v,!1,null,null,null)),y=_.exports,w={name:"BreadCrumb",components:{"bread-crumb-item":y},mounted:function(){console.log(this.$route.path.split("/"))}},k=w,S=Object(d["a"])(k,h,f,!1,null,null,null),O=S.exports,x={components:{Navbar:p,"bread-crumb":O},mounted:function(){console.log("/menswear/")}},$=x,E=(a("5c0b"),Object(d["a"])($,n,o,!1,null,null,null)),I=E.exports,N=a("8c4f"),P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("header",{staticClass:"header full-height"},[a("div",{staticClass:"circle"}),a("div",{staticClass:"left-text"},[a("div",{staticClass:"content"},[a("h1",[t._v("BEST SUIT FOR YOU")]),a("router-link",{attrs:{to:"/shop"}},[t._v("SHOP NOW")])],1)]),t._m(0)]),a("hr",{staticClass:"sepertaor-line"}),t._m(1),t._m(2),a("section",{staticClass:"catalogue"},[t._m(3),a("div",{staticClass:"catalogue-item"},t._l(t.categories,function(e){return a("div",{key:e._id},[a("router-link",{attrs:{to:{name:"category",params:{categorySlug:e.slug}}}},[a("h1",[t._v(t._s(e.name))])])],1)}),0)]),t._m(4)])},j=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"image-tall"},[r("img",{attrs:{src:a("2dc7"),alt:"Header image"}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"clean"},[r("div",{staticClass:"content"},[r("img",{attrs:{src:a("cb32"),alt:"Clean section"}}),r("div",{staticClass:"right-text"},[r("h1",[t._v("CLEAN")]),r("p",[t._v("Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi dolor nulla repellat architecto recusandae\n                  nobis reiciendis voluptates expedita ad. Illo, porro accusamus. Et atque qui distinctio ipsam aspernatur\n                  sequi illo!")])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"unique"},[r("div",{staticClass:"left-side-box"},[r("h1",[t._v("UNIQUE")]),r("p",[t._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus vitae, quibusdam nemo nostrum, aperiam\n              illo ex harum, fugiat minus ullam inventore sed? Nostrum sapiente accusamus consectetur minima odit quis\n              aspernatur?\n          ")])]),r("div",{staticClass:"right-side-image"},[r("img",{attrs:{src:a("0237"),alt:"Unique Image"}})])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"catalogue-image"},[r("img",{attrs:{src:a("7678"),alt:"Top picks"}}),r("h1",[t._v("TOP PICKS")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"instagram-feeds"},[r("h1",[t._v("Instagram Feeds")]),r("div",{staticClass:"images"},[r("img",{attrs:{src:a("050e"),alt:""}}),r("img",{attrs:{src:a("050e"),alt:""}}),r("img",{attrs:{src:a("050e"),alt:""}}),r("img",{attrs:{src:a("050e"),alt:""}})])])}],T=(a("a481"),a("75fc")),q=a("bc3a"),L=a.n(q),U={name:"Home",data:function(){return{categories:[]}},methods:{getCategories:function(){var t=this;L.a.get("".concat("https://menswear.herokuapp.com","/api/categories")).then(function(e){var a;(a=t.categories).push.apply(a,Object(T["a"])(e.data))}).catch(function(t){console.log(t)})},convertToSlug:function(t){return t.toLowerCase().replace(/ /g,"-").replace(/[^\w-]+/g,"")}},mounted:function(){this.getCategories(),console.log("/menswear/")}},z=U,A=(a("21bb"),Object(d["a"])(z,P,j,!1,null,null,null)),R=A.exports,B=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"category-show"},[a("div",{staticClass:"side-bar"},[a("CategorySidebar",{attrs:{categories:t.categories}})],1),a("div",{staticClass:"category-product-show"},[a("div",{staticClass:"category-name"},[a("h2",[t._v(t._s(t.categoryName))])]),a("div",{staticClass:"content grid"},t._l(t.products,function(t,e){return a("ProductCard",{key:e,attrs:{product:t}})}),1)])])},H=[],D=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"product-card"},[r("router-link",{attrs:{to:{name:"productShow",params:{categorySlug:t.product.category.slug,productId:t.product._id}}}},[r("img",{attrs:{src:a("99df")}}),r("div",{staticClass:"content"},[r("h5",{staticClass:"product-name"},[t._v(t._s(t.product.name))]),r("h5",[t._v("$. "+t._s(t.product.price))])])])],1)},G=[],M={name:"ProductCard",props:["product"]},F=M,J=(a("fd2d"),Object(d["a"])(F,D,G,!1,null,null,null)),Q=J.exports,K=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"category-sidebar"},[a("ul",[a("h4",[t._v("CATEGORIES")]),t._l(t.categories,function(e,r){return a("li",{key:r},[a("router-link",{attrs:{to:{name:"category",params:{categorySlug:e.slug}}}},[t._v("\n              "+t._s(e.name)+"\n          ")])],1)})],2)])},Y=[],W={name:"CategorySideBar",props:["categories"]},X=W,V=(a("1a41"),Object(d["a"])(X,K,Y,!1,null,null,null)),Z=V.exports,tt={name:"CategoryShow",components:{ProductCard:Q,CategorySidebar:Z},data:function(){return{products:[],categoryName:"",categories:[]}},mounted:function(){this.getCategories(),this.getCategoriesProduct()},watch:{$route:function(){this.products=[],this.getCategoriesProduct()}},methods:{getCategories:function(){var t=this;L.a.get("".concat("https://menswear.herokuapp.com","/api/categories")).then(function(e){var a;(a=t.categories).push.apply(a,Object(T["a"])(e.data))}).catch(function(t){return console.log(t)})},getCategoriesProduct:function(){var t=this;L.a.get("".concat("https://menswear.herokuapp.com","/api/categories/").concat(this.$route.params.categorySlug,"/products")).then(function(e){var a;console.log(e.data),(a=t.products).push.apply(a,Object(T["a"])(e.data)),t.categoryName=t.products[0].category.name}).catch(function(t){return console.log(t)})}}},et=tt,at=(a("686c"),Object(d["a"])(et,B,H,!1,null,null,null)),rt=at.exports,st=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"shop-index"},[a("div",{staticClass:"side-bar"},[a("CategorySidebar",{attrs:{categories:t.categories}})],1),a("section",{staticClass:"products"},[a("h1",[t._v("FEATURED PRODUCTS")]),a("div",{staticClass:"product-item"},t._l(t.products.slice(0,3),function(t,e){return a("ProductCard",{key:e,attrs:{product:t}})}),1)])])},nt=[],ot={name:"ShopIndex",components:{CategorySidebar:Z,ProductCard:Q},data:function(){return{categories:[],products:[]}},methods:{getCategories:function(){var t=this;L.a.get("".concat("https://menswear.herokuapp.com","/api/categories")).then(function(e){var a;(a=t.categories).push.apply(a,Object(T["a"])(e.data))}).catch(function(t){return console.log(t)})},getProducts:function(){var t=this;L.a.get("".concat("https://menswear.herokuapp.com","/api/products")).then(function(e){var a;(a=t.products).push.apply(a,Object(T["a"])(e.data))}).catch(function(t){console.log(t)})}},mounted:function(){this.getCategories(),this.getProducts()}},it=ot,ct=(a("64d5"),Object(d["a"])(it,st,nt,!1,null,null,null)),ut=ct.exports,lt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"product-show"},[a("message-box",{ref:"messageBox"}),a("div",{staticClass:"product-name"},[a("h1",[t._v(t._s(t.product.name))])]),a("div",{staticClass:"product"},[t._m(0),a("div",{staticClass:"product-detail"},[a("div",{staticClass:"product-description"},[a("h3",[t._v("Description")]),a("p",{staticClass:"desc"},[t._v(t._s(t.product.description))])]),a("div",{staticClass:"product-size"},[t.product.stock?a("h3",[t._v(t._s(t.product.stock.name))]):t._e(),t.product.stock?a("select",{directives:[{name:"model",rawName:"v-model",value:t.stockSelected,expression:"stockSelected"}],attrs:{name:"size",id:"size"},on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.stockSelected=e.target.multiple?a:a[0]},t.stockChanged]}},[a("option",{attrs:{value:"0"}},[t._v("Select Size")]),t._l(t.product.stock.value,function(e,r){return parseInt(e)>0?a("option",{key:r,domProps:{value:r}},[t._v(" "+t._s(r))]):t._e()})],2):t._e()]),a("button",{attrs:{disabled:t.sizeSelected},on:{click:function(e){return t.addItemToCart(t.product,t.stockSelected)}}},[t._v("Add to cart")])])])],1)},dt=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"product-image"},[r("img",{attrs:{src:a("99df"),alt:"Product images"}})])}],mt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"slideDownUp"}},[t.show?a("div",{staticClass:"message-box",class:t.type},[a("div",{staticClass:"box-header"},[a("h3",[t._v(t._s(t.message))])])]):t._e()])},pt=[],ht={name:"MessageBox",data:function(){return{type:"success",message:"",show:!1}},methods:{toggleShow:function(t,e){var a=this;this.type=t,this.message=e,setTimeout(function(){a.show=!1},1e3),this.show=!this.show}}},ft=ht,gt=(a("a757"),Object(d["a"])(ft,mt,pt,!1,null,null,null)),vt=gt.exports,bt={name:"ProductShow",components:{"message-box":vt},data:function(){return{product:{},stockSelected:"0",sizeSelected:!0,itemToAdd:{}}},methods:{addItemToCart:function(t,e){var a=this;this.$root.addToCart(t,e),this.$refs.messageBox.toggleShow("success","Item added to cart"),this.sizeSelected=!0,setTimeout(function(){a.sizeSelected=!1},750)},stockChanged:function(){0==this.stockSelected?this.sizeSelected=!0:this.sizeSelected=!1}},mounted:function(){var t=this;L.a.get("".concat("https://menswear.herokuapp.com","/api/products/").concat(this.$route.params.productId)).then(function(e){t.product=e.data}).catch(function(t){return console.log(t)})}},Ct=bt,_t=(a("fa2e"),Object(d["a"])(Ct,lt,dt,!1,null,null,null)),yt=_t.exports,wt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"cart-index"},[a("h4",{staticClass:"cart-index-title"},[t._v("YOUR SHOPPING CART ")]),0===t.$root.cart.length?a("h4",{staticClass:"cart-empty"},[t._v("Cart is empty")]):t._l(t.$root.cart,function(t,e){return a("cart-item-card",{key:e,attrs:{item:t}})}),a("div",{staticClass:"cart-footer"},[a("h4",{staticClass:"checkout box"},[t._v("CHECKOUT")]),a("h4",{staticClass:"clear box",on:{click:function(e){return t.$root.clearCart()}}},[t._v("CLEAR")]),a("h4",{staticClass:"cart-total"},[t._v("TOTAL : $ "+t._s(t.$root.cartTotal())+", 00")])])],2)},kt=[],St=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"cart-item-card"},[r("div",{staticClass:"delete-item",on:{click:function(e){return t.$root.deleteItem(t.item)}}},[t._v("X")]),t.item?r("div",{staticClass:"content grid"},[r("img",{attrs:{src:a("99df"),alt:"images"}}),r("div",{staticClass:"product-detail"},[r("h3",[t._v(t._s(t.item.name))]),r("h3",{staticClass:"size"},[t._v("Size : "+t._s(t.item.size))])]),r("div",{staticClass:"product-qty"},[r("h3",{staticClass:"circle-button decrease",on:{click:function(e){return t.$root.changeQty("decrease",t.item)}}},[t._v("-")]),r("h3",[t._v("Quantity: "+t._s(t.item.qty))]),r("h3",{staticClass:"circle-button increase",on:{click:function(e){return t.$root.changeQty("increase",t.item)}}},[t._v("+")])]),r("div",{staticClass:"product-total"},[r("h3",[t._v("$. "+t._s(t.item.price*t.item.qty)+", 00")])])]):t._e()])},Ot=[],xt={name:"CartItemCard",data:function(){return{deletePrompt:!1}},props:["item"],mounted:function(){}},$t=xt,Et=(a("768e"),Object(d["a"])($t,St,Ot,!1,null,null,null)),It=Et.exports,Nt={name:"CartIndex",components:{"cart-item-card":It}},Pt=Nt,jt=(a("d056"),Object(d["a"])(Pt,wt,kt,!1,null,null,null)),Tt=jt.exports,qt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"login"},[a("message-box",{ref:"messageBox"}),a("h2",[t._v("LOGIN")]),a("hr"),a("div",{staticClass:"form"},[a("form",{attrs:{action:""},on:{submit:function(e){return e.preventDefault(),t.submitForm()}}},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"email"}},[t._v("Email")]),a("br"),a("input",{directives:[{name:"model",rawName:"v-model",value:t.loginCred.email,expression:"loginCred.email"}],staticClass:"form-control",attrs:{type:"email",id:"email",required:""},domProps:{value:t.loginCred.email},on:{input:function(e){e.target.composing||t.$set(t.loginCred,"email",e.target.value)}}}),a("br")]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"password"}},[t._v("Password")]),a("br"),a("input",{directives:[{name:"model",rawName:"v-model",value:t.loginCred.password,expression:"loginCred.password"}],staticClass:"form-control",attrs:{type:"password",id:"password",required:""},domProps:{value:t.loginCred.password},on:{input:function(e){e.target.composing||t.$set(t.loginCred,"password",e.target.value)}}})]),a("button",[t._v("LOGIN")]),a("router-link",{attrs:{to:"/register"}},[a("h5",[t._v("Register Here")])])],1)])],1)},Lt=[],Ut=a("a78e"),zt=a.n(Ut),At={name:"Login",data:function(){return{loginCred:{email:"",password:""}}},beforeCreate:function(){zt.a.get("utn")&&this.$router.push("/")},methods:{submitForm:function(){var t=this;""==this.loginCred.email&&""==this.loginCred.password||L.a.post("https://menswear.herokuapp.com/api/user/signin",{email:this.loginCred.email,password:this.loginCred.password}).then(function(e){zt.a.set("utn",e.data.token,{expires:7}),t.$refs.messageBox.toggleShow("success",e.data.message),L.a.get("https://menswear.herokuapp.com/api/me",{headers:{Authorization:zt.a.get("utn")}}).then(function(e){t.$root.user=e.data,t.$root.isUserLoggedIn=!0}).catch(function(e){t.$root.isUserLoggedIn&&(t.$root.ifUserLoggedIn=!1)}),setTimeout(function(){t.$router.push("/admin/home")},500)}).catch(function(e){return t.$refs.messageBox.toggleShow("failed",e.response.data.message)})}}},Rt=At,Bt=(a("206d"),Object(d["a"])(Rt,qt,Lt,!1,null,null,null)),Ht=Bt.exports,Dt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"register"},[a("h2",[t._v("REGISTER")]),a("hr"),a("div",{staticClass:"form"},[a("form",{attrs:{action:""},on:{submit:function(e){return e.preventDefault(),t.submitForm()}}},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"name"}},[t._v("Name")]),a("br"),a("input",{directives:[{name:"model",rawName:"v-model",value:t.user.name,expression:"user.name"}],staticClass:"form-control",attrs:{type:"text",id:"name"},domProps:{value:t.user.name},on:{input:function(e){e.target.composing||t.$set(t.user,"name",e.target.value)}}}),a("br")]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"email"}},[t._v("Email")]),a("br"),a("input",{directives:[{name:"model",rawName:"v-model",value:t.user.email,expression:"user.email"}],staticClass:"form-control",attrs:{type:"email",id:"email"},domProps:{value:t.user.email},on:{input:function(e){e.target.composing||t.$set(t.user,"email",e.target.value)}}}),a("br")]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"password"}},[t._v("Password")]),a("br"),a("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"}],staticClass:"form-control",attrs:{type:"password",id:"password"},domProps:{value:t.user.password},on:{input:function(e){e.target.composing||t.$set(t.user,"password",e.target.value)}}})]),a("button",[t._v("REGISTER")])])])])},Gt=[],Mt={name:"register",data:function(){return{user:{email:"",name:"",password:""}}},methods:{submitForm:function(){L.a.post("".concat("https://menswear.herokuapp.com","/api/user/signup"),this.user,{headers:{"Access-Control-Allow-Origin":"*"}}).then(function(t){return console.log(t)}).catch(function(t){return console.log(t.response)})}}},Ft=Mt,Jt=(a("a894"),Object(d["a"])(Ft,Dt,Gt,!1,null,null,null)),Qt=Jt.exports,Kt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Yt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"user-home"},[a("h1",[t._v("USER HOME")])])}],Wt={},Xt=Wt,Vt=Object(d["a"])(Xt,Kt,Yt,!1,null,null,null),Zt=Vt.exports;s["a"].use(N["a"]);var te=new N["a"]({base:"/menswear/",linkExactActiveClass:"active",mode:"history",routes:[{path:"/",name:"home",component:R},{path:"/login",name:"login",component:Ht},{path:"/register",name:"register",component:Qt},{path:"/category/:categorySlug",name:"category",component:rt},{path:"/shop",name:"shop",component:ut},{path:"/shop/:categorySlug/:productId",name:"productShow",component:yt},{path:"/cart",name:"cartInddex",component:Tt},{path:"/user/home",name:"userHome",component:Zt}]}),ee=a("1c46"),ae=a.n(ee),re=a("2ef0"),se=a.n(re),ne=a("81a8"),oe=a.n(ne);function ie(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),a.push.apply(a,r)}return a}function ce(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?ie(a,!0).forEach(function(e){Object(r["a"])(t,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):ie(a).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))})}return t}s["a"].config.productionTip=!1,s["a"].use(oe.a),s["a"].component("message-box",vt),new s["a"]({router:te,data:function(){return{cart:[]}},beforeMount:function(){null===localStorage.getItem("cart")&&localStorage.setItem("cart",JSON.stringify(this.cart)),this.cart=JSON.parse(localStorage.getItem("cart"))},methods:{addToCart:function(t,e){var a=ae.a.createHash("md5").update(t.name+e).digest("hex");if(this.cart.length<1)return this.cart.push(ce({},t,{size:e,hash:a,qty:1})),void this.writeToCookie();var r=this.cart.some(function(t){return t.hash===a});if(r){var s=this.cart.findIndex(function(t){return t.hash===a});return this.cart[s].qty++,void this.writeToCookie()}this.cart.push(ce({},t,{size:e,hash:a,qty:1})),this.writeToCookie()},changeQty:function(t,e){var a=this.cart.some(function(t){return t.hash===e.hash});if(a){var r=this.cart.findIndex(function(t){return t.hash===e.hash});switch(t){case"increase":this.cart[r].qty++;break;case"decrease":this.cart[r].qty--,this.cart[r].qty<1&&this.deleteItem(e);break}this.writeToCookie()}else;},deleteItem:function(t){se.a.remove(this.cart,function(e){return e.hash===t.hash}),this.writeToCookie()},clearCart:function(){this.cart=[],this.writeToCookie()},itemTotal:function(t){var e=0;return se.a.forEach(this.cart,function(a){a.hash===t.hash&&(e+=a.price*a.qty)}),e},cartTotal:function(){var t=this,e=0;return this.cart.forEach(function(a){e+=t.itemTotal(a)}),e},writeToCookie:function(){localStorage.setItem("cart",JSON.stringify(this.cart)),this.cart=JSON.parse(localStorage.getItem("cart"))}},mounted:function(){var t=this;cookie.get("utn")&&axios.get("https://menswear.herokuapp.com/api/user/me",{headers:{Authorization:cookie.get("utn")}}).then(function(e){t.user=e.data,t.isUserLoggedIn=!0}).catch(function(){t.isUserLoggedIn&&(t.ifUserLoggedIn=!1)})},render:function(t){return t(I)}}).$mount("#app")},"574e":function(t,e,a){},"5c0b":function(t,e,a){"use strict";var r=a("5e27"),s=a.n(r);s.a},"5e27":function(t,e,a){},"64d5":function(t,e,a){"use strict";var r=a("9d9d"),s=a.n(r);s.a},"686c":function(t,e,a){"use strict";var r=a("5407"),s=a.n(r);s.a},7678:function(t,e,a){t.exports=a.p+"img/top-picks.bc683f87.png"},"768e":function(t,e,a){"use strict";var r=a("574e"),s=a.n(r);s.a},"7e0d":function(t,e,a){},"99df":function(t,e,a){t.exports=a.p+"img/exs.5992d4ef.jpg"},"9cbb":function(t,e,a){},"9d9d":function(t,e,a){},a757:function(t,e,a){"use strict";var r=a("b07f"),s=a.n(r);s.a},a894:function(t,e,a){"use strict";var r=a("4c48"),s=a.n(r);s.a},b07f:function(t,e,a){},b12d:function(t,e,a){},bcc9:function(t,e,a){},c3b8:function(t,e,a){},cb32:function(t,e,a){t.exports=a.p+"img/clean.89eb1b9e.png"},d056:function(t,e,a){"use strict";var r=a("09ad"),s=a.n(r);s.a},e8b1:function(t,e,a){"use strict";var r=a("45fa"),s=a.n(r);s.a},e9c2:function(t,e,a){},fa2e:function(t,e,a){"use strict";var r=a("c3b8"),s=a.n(r);s.a},fd2d:function(t,e,a){"use strict";var r=a("7e0d"),s=a.n(r);s.a}});
//# sourceMappingURL=app.4523bfa8.js.map