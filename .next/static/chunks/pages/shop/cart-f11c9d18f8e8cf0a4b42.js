_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[21],{"2P/V":function(t,e,a){"use strict";a.r(e);var n=a("q1tI"),r=a.n(n),l=a("/MKj"),c=a("YFqc"),o=a.n(c),i=a("MHX4"),u=a("FGyW"),s=a("6QH/"),d=a("Pz/r"),m=a("6EID"),p=a("m9Y6"),h=a("kLkQ"),f=a("TVAx"),_=a("wQtD"),g=a("Npp4"),b=r.a.createElement;e.default=function(){var t=Object(l.b)(),e=Object(i.a)(),a=e.register,n=e.handleSubmit,c=(e.watch,e.errors),v=Object(l.c)((function(t){return t.cartReducer}));return b(s.a,{title:"Cart"},b(p.a,{title:"Shopping cart"},b(p.b,{name:"Home"}),b(p.b,{name:"Shop"}),b(p.b,{name:"Shopping cart",current:!0})),b("div",{className:"cart"},b("div",{className:"container"},v&&0!==v.length?b(r.a.Fragment,null,b("div",{className:"cart__table"},b("div",{className:"cart__table__wrapper"},b("table",null,b("colgroup",null,b("col",{style:{width:"40%"}}),b("col",{style:{width:"17%"}}),b("col",{style:{width:"17%"}}),b("col",{style:{width:"17%"}}),b("col",{style:{width:"9%"}})),b("thead",null,b("tr",null,b("th",null,"Product"),b("th",null,"Price"),b("th",null,"Quantity"),b("th",null,"Total"),b("th",null))),b("tbody",null,v.map((function(e,a){return b("tr",{key:a},b("td",null,b("div",{className:"cart-product"},b("div",{className:"cart-product__image"},b("img",{src:e.thumbImage[0],alt:e.name})),b("div",{className:"cart-product__content"},b("h5",null,e.category),b(o.a,{href:"/shop/product/[slug]",as:"/shop/product/"+e.slug},b("a",null,e.name))))),b("td",null,Object(h.a)(e.price)),b("td",null,b(d.a,{defaultQuantity:e.cartQuantity,onIncrease:function(){return t(Object(_.c)(e.cartId))},onDecrease:function(){return t(Object(_.b)(e.cartId))}})),b("td",null,Object(h.a)(e.price*e.cartQuantity)),b("td",null,b("a",{href:"#",onClick:function(a){return function(e,a){return e.preventDefault(),t(Object(_.e)(a)),u.b.error("Product removed from cart")}(a,e.cartId)}},b("i",{className:"fal fa-times"}))))}))))),b("div",{className:"cart__table__footer"},b(o.a,{href:"/shop/fullwidth-4col"},b("a",null,b("i",{className:"fal fa-long-arrow-left"}),"Continue Shopping")),b(o.a,{href:"#"},b("a",{onClick:function(e){return function(e){return e.preventDefault(),t(Object(_.d)()),u.b.error("All product removed from cart")}(e)}},b("i",{className:"fal fa-trash"}),"Clear Shopping Cart")))),b("div",{className:"cart__total"},b("div",{className:"row"},b("div",{className:"col-12 col-md-8"},b("div",{className:"cart__total__discount"},b("p",null,"Enter coupon code. It will be applied at checkout."),b("div",{className:"input-validator"},b("form",{onSubmit:n((function(t){return console.log(t)}))},b("input",{type:"text",name:"discountCode",placeholder:"Your code here",ref:a({required:!0})}),b("button",{className:"btn -dark"},"Apply")),c.discountCode&&b("span",{className:"input-error"},"Please provide a discount code")))),b("div",{className:"col-12 col-md-4"},b("div",{className:"cart__total__content"},b("h3",null,"Cart Total"),b("table",null,b("tbody",null,b("tr",null,b("th",null,"Subtotal"),b("td",null,Object(f.a)(v,!0))),b("tr",null,b("th",null,"Total"),b("td",{className:"final-price"},Object(f.a)(v,!0))))),b(m.a,{height:45/14+"em",width:"100%",action:"/shop/checkout",color:"dark",content:"Proceed to checkout"})))))):b("div",{className:"cart__empty"},b("h3",null,"No product in cart"),b(m.a,{color:"dark",action:"/shop/fullwidth-4col",content:"Shopping now"})))),b(g.a,null))}},"31yp":function(t,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/shop/cart",function(){return a("2P/V")}])},"6QH/":function(t,e,a){"use strict";a.d(e,"a",(function(){return v}));var n=a("q1tI"),r=a.n(n),l=a("8Kt/"),c=a.n(l),o=a("PmzM"),i=a("zlC1"),u=a("YFqc"),s=a.n(u),d=a("VOjt"),m=a("brf1"),p=a("kLkQ"),h=r.a.createElement;function f(t){var e=t.hide,a=t.container;return h("div",{className:"menu -style-3"},h("div",{className:Object(p.c)(a)},h("div",{className:"menu__wrapper"},h(s.a,{href:"/homepages/homepage1"},h("a",{className:"menu__wrapper__logo"},h("img",{src:"/assets/images/logo-white.png",alt:"Logo"}))),h(d.a,{className:"-white"}),h(m.a,{hide:e,white:!0,className:"-white"}))))}var _=r.a.createElement;var g=r.a.createElement,b=Object(o.a)((function(t){return _(r.a.Fragment,null,_(f,t))}));function v(t){return g(r.a.Fragment,null,g(c.a,null,g("title",null,t.title||"Eliah | React")),g(b,{container:t.container}),t.children,g(i.a,null))}},"J+Fc":function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"a",(function(){return r})),a.d(e,"c",(function(){return l}));var n={DEFAULT_QUANTITY:1},r={CATEGORIES:["Beauty tips","Make up","Skin care","Body care","Videos"]},l={CATEGORISE:["all","eyes","face","lips","set"],BRANDS:["gucci","dolce","h&m","kenzo","prada"],PRICE_POINTS:[0,25,50,75,100],SORT_TYPES:[{name:"Default",value:"default"},{name:"A to Z Sorting",value:"az"},{name:"Z to A Sorting",value:"za"},{name:"Low to High Price Sorting",value:"lowToHigh"},{name:"High to Low Price Sorting",value:"highToLow"}],DEFAULT_VIEW:"grid"}},Npp4:function(t,e,a){"use strict";a.d(e,"a",(function(){return i}));var n=a("q1tI"),r=a.n(n),l=a("OS56"),c=a.n(l),o=r.a.createElement;function i(){return o("div",{className:"instagram-two"},o(c.a,{dots:!1,arrows:!1,slidesToShow:6,slidesToScroll:1,autoplay:!0,autoplaySpeed:3e3,responsive:[{breakpoint:1400,settings:{slidesToShow:5}},{breakpoint:1200,settings:{slidesToShow:4}},{breakpoint:992,settings:{slidesToShow:3}},{breakpoint:576,settings:{slidesToShow:2}}]},Array.from(Array(6),(function(t,e){return o("a",{key:e,href:"https://www.instagram.com/",className:"slider-item"},o("img",{src:""+"/assets/images/instagram/InstagramTwo/".concat(e+1,".png"),alt:"Instagram image"}))}))))}},"Pz/r":function(t,e,a){"use strict";a.d(e,"a",(function(){return u}));var n=a("q1tI"),r=a.n(n),l=a("TSYQ"),c=a.n(l),o=a("J+Fc"),i=r.a.createElement;function u(t){var e=t.className,a=t.defaultQuantity,r=t.getQuantity,l=t.onDecrease,u=t.onIncrease,s=t.maxValue,d=Object(n.useState)(a||o.b.DEFAULT_QUANTITY),m=d[0],p=d[1];return Object(n.useEffect)((function(){r&&r(m)}),[m]),i("div",{className:"quantity-controller ".concat(c()(e))},i("div",{className:"quantity-controller__btn -descrease",onClick:function(){m<2||(p(m-1),l&&l())}},"-"),i("h5",{className:"quantity-controller__number"},m),i("div",{className:"quantity-controller__btn -increase",onClick:function(){m>=s||(p(m+1),u&&u())}},"+"))}},m9Y6:function(t,e,a){"use strict";a.d(e,"b",(function(){return l})),a.d(e,"a",(function(){return c}));var n=a("q1tI"),r=a.n(n).a.createElement,l=function(t){var e=t.name,a=t.current;return r("li",{className:a&&"active"},e)},c=function(t){var e=t.title,a=t.children;return r("div",{className:"breadcrumb"},r("div",{className:"container"},r("h2",null,e),r("ul",null,a)))}}},[["31yp",0,2,1,3,4,5,6]]]);