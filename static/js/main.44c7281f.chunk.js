(this["webpackJsonpairbnb-clone"]=this["webpackJsonpairbnb-clone"]||[]).push([[0],{64:function(e,t,s){},65:function(e,t,s){},66:function(e,t,s){},74:function(e,t,s){},75:function(e,t,s){},76:function(e,t,s){},85:function(e,t,s){},86:function(e,t,s){},87:function(e,t,s){},88:function(e,t,s){},90:function(e,t,s){"use strict";s.r(t);var i=s(0),n=s.n(i),c=s(23),a=s.n(c),r=(s(64),s(65),s(66),s(48)),o=s.n(r),d=s(52),j=s.n(d),l=s(53),h=s.n(l),b=s(105),p=s(26),m=s(1);var u=function(){return Object(m.jsxs)("div",{className:"header",children:[Object(m.jsx)(p.b,{to:"/",children:Object(m.jsx)("img",{className:"header__icon",src:"https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png",alt:"logo airbnb"})}),Object(m.jsxs)("div",{className:"header__center",children:[Object(m.jsx)("input",{type:"text"}),Object(m.jsx)(o.a,{})]}),Object(m.jsxs)("div",{className:"header__right",children:[Object(m.jsx)("p",{children:"Become a Host"}),Object(m.jsx)(j.a,{}),Object(m.jsx)(h.a,{}),Object(m.jsx)(b.a,{})]})]})};s(74);var x=function(){return Object(m.jsxs)("div",{className:"footer",children:[Object(m.jsx)("p",{children:"\xa9 2021 Airbnb clone! No rights reserved - this is my demo!"}),Object(m.jsx)("p",{children:"Privacy \xb7 Terms \xb7 Sitemap \xb7 Company Details"})]})},O=s(30),g=(s(75),s(104)),f=(s(76),s(77),s(78),s(54)),v=s(55),_=s.n(v),y=s(5);var w=function(){var e=Object(y.f)(),t=Object(i.useState)(new Date),s=Object(O.a)(t,2),n=s[0],c=s[1],a=Object(i.useState)(new Date),r=Object(O.a)(a,2),o=r[0],d=r[1],j={startDate:n,endDate:o,key:"selection"};return Object(m.jsxs)("div",{className:"search",children:[Object(m.jsx)(f.DateRangePicker,{ranges:[j],onChange:function(e){c(e.selection.startDate),d(e.selection.endDate)}}),Object(m.jsxs)("h2",{children:["Number of guests ",Object(m.jsx)(_.a,{})]}),Object(m.jsx)("input",{min:0,defaultValue:2,type:"number"}),Object(m.jsx)(g.a,{onClick:function(){return e.push("/search")},children:"Search Airbnb"})]})};var N=function(){var e=Object(y.f)(),t=Object(i.useState)(!1),s=Object(O.a)(t,2),n=s[0],c=s[1];return Object(m.jsxs)("div",{className:"banner",children:[Object(m.jsxs)("div",{className:"banner__search",children:[n&&Object(m.jsx)(w,{}),Object(m.jsx)(g.a,{onClick:function(){return c(!n)},variant:"outline",className:"banner__searchButton",children:n?"Hide":"Search dates"})]}),Object(m.jsxs)("div",{className:"banner__info",children:[Object(m.jsx)("h1",{children:"The Greatest Outdoors"}),Object(m.jsx)("h5",{children:"Wishlists curated by Airbnb."}),Object(m.jsx)(g.a,{onClick:function(){return e.push("/search")},variant:"outlined",children:"Explore Nearby"})]})]})};s(85);var P=function(e){var t=e.src,s=e.title,i=e.description,n=e.price;return Object(m.jsxs)("div",{className:"card",children:[Object(m.jsx)("img",{src:t,alt:"image"}),Object(m.jsxs)("div",{className:"card__info",children:[Object(m.jsx)("h2",{children:s}),Object(m.jsx)("h4",{children:i}),Object(m.jsx)("h3",{children:n})]})]})};s(86);var S=function(){return Object(m.jsxs)("div",{className:"home",children:[Object(m.jsx)(N,{}),Object(m.jsxs)("div",{className:"home__section",children:[Object(m.jsx)(P,{src:"https://images.pexels.com/photos/853151/pexels-photo-853151.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",title:"Online Experiences",description:"Unique activities we can do together, led by a world of hosts."}),Object(m.jsx)(P,{src:"https://cdn.pixabay.com/photo/2016/08/11/23/48/mountains-1587287__340.jpg",title:"Unique stays",description:"Spaces that are more than just a place to sleep."}),Object(m.jsx)(P,{src:"https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",title:"Entire homes",description:"Comfortable private places, with room for friends or family."})]}),Object(m.jsxs)("div",{className:"home__section",children:[Object(m.jsx)(P,{src:"https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg",title:"3 Bedroom Flat in Bournemouth",description:"Superhost with a stunning view of the beachside in Sunny Bournemouth",price:"$130/night"}),Object(m.jsx)(P,{src:"https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg",title:"Penthouse in London",description:"Enjoy the amazing sights of London with this stunning penthouse",price:"$350/night"}),Object(m.jsx)(P,{src:"https://media.nomadicmatt.com/2018/apartment.jpg",title:"1 Bedroom apartment",description:"Superhost with great amenities and a fabolous shopping complex nearby",price:"$70/night"})]})]})},F=(s(87),s(88),s(56)),$=s.n(F),k=s(57),L=s.n(k);var A=function(e){var t=e.img,s=e.location,i=e.title,n=e.description,c=e.star,a=e.price,r=e.total;return Object(m.jsxs)("div",{className:"searchResult",children:[Object(m.jsx)("img",{src:t,alt:""}),Object(m.jsx)($.a,{className:"searchResult__heart"}),Object(m.jsxs)("div",{className:"searchResult__info",children:[Object(m.jsxs)("div",{className:"searchResult__infoTop",children:[Object(m.jsx)("p",{children:s}),Object(m.jsx)("h3",{children:i}),Object(m.jsx)("p",{children:"____"}),Object(m.jsx)("p",{children:n})]}),Object(m.jsxs)("div",{className:"searchResult__infoBottom",children:[Object(m.jsxs)("div",{className:"searchResult__stars",children:[Object(m.jsx)(L.a,{className:"searchResult__star"}),Object(m.jsx)("p",{children:Object(m.jsx)("strong",{children:c})})]}),Object(m.jsxs)("div",{className:"searchResults__price",children:[Object(m.jsx)("h2",{children:a}),Object(m.jsx)("p",{children:r})]})]})]})]})};var W=function(){return Object(m.jsxs)("div",{className:"searchPage",children:[Object(m.jsxs)("div",{className:"searchPage__info",children:[Object(m.jsx)("p",{children:"62 Stays - 26 july to 30 july - 2 guest"}),Object(m.jsx)("h1",{children:"Stays nearby"}),Object(m.jsx)(g.a,{variant:"outlined",children:"Cancellation Flexibility"}),Object(m.jsx)(g.a,{variant:"outlined",children:"Type of place"}),Object(m.jsx)(g.a,{variant:"outlined",children:"Price"}),Object(m.jsx)(g.a,{variant:"outlined",children:"Rooms and beds"}),Object(m.jsx)(g.a,{variant:"outlined",children:"More filters"})]}),Object(m.jsx)(A,{img:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU",location:"Private room in center of London",title:"Stay at this spacious Edwardian House",description:"1 guest \xb7 1 bedroom \xb7 1 bed \xb7 1.5 shared bthrooms \xb7 Wifi \xb7 Kitchen \xb7 Free parking \xb7 Washing Machine",star:4.73,price:"$30 / night",total:"$117 total"}),Object(m.jsx)(A,{img:"https://www.expatkings.com/wp-content/uploads/2018/10/Airbnb-rental-tips.-Hostmaker-1-620x349.jpg",location:"Private room in center of London",title:"Independant luxury studio apartment",description:"2 guest \xb7 3 bedroom \xb7 1 bed \xb7 1.5 shared bthrooms \xb7 Wifi \xb7 Kitchen",star:4.3,price:"$40 / night",total:"$157 total"}),Object(m.jsx)(A,{img:"https://www.smartertravel.com/uploads/2017/07/Untitled-design-8.jpg",location:"Private room in center of London",title:"London Studio Apartments",description:"4 guest \xb7 4 bedroom \xb7 4 bed \xb7 2 bathrooms \xb7 Free parking \xb7 Washing Machine",star:3.8,price:"$35 / night",total:"$207 total"}),Object(m.jsx)(A,{img:"https://cdn.bisnow.net/fit?height=489&type=jpeg&url=https%3A%2F%2Fs3.amazonaws.com%2Fcdn.bisnow.net%2Fcontent%2Fimages%2F2017%2F05%2F59151d0978bbf_https_press_atairbnb_com_app_uploads_2016_12_midtown_4.jpeg&width=717&sign=FeltIPi9cOWA36nVIeDvZxwgtiCZrpUyMRdvyZviTUI",location:"Private room in center of London",title:"30 mins to Oxford Street, Excel London",description:"1 guest \xb7 1 bedroom \xb7 1 bed \xb7 1.5 shared bthrooms \xb7 Wifi \xb7 Kitchen \xb7 Free parking \xb7 Washing Machine",star:4.1,price:"$55 / night",total:"$320 total"}),Object(m.jsx)(A,{img:"https://media.cntraveler.com/photos/5a8f258bd363c34048b35aac/master/w_2250,h_1500,c_limit/airbnb-plus-london.jpg",location:"Private room in center of London",title:"Spacious Peaceful Modern Bedroom",description:"3 guest \xb7 1 bedroom \xb7 1 bed \xb7 1.5 shared bthrooms \xb7 Wifi \xb7 Free parking \xb7 Dry Cleaning",star:5,price:"$60 / night",total:"$450 total"}),Object(m.jsx)(A,{img:"https://static.trip101.com/paragraph_media/pictures/001/676/061/large/969ae4bb-efd1-4fb9-a4e3-5cb3316dd3c9.jpg?1562227937",location:"Private room in center of London",title:"The Blue Room In London",description:"2 guest \xb7 1 bedroom \xb7 1 bed \xb7 1.5 shared bthrooms \xb7 Wifi \xb7 Washing Machine",star:4.23,price:"$65 / night",total:"$480 total"}),Object(m.jsx)(A,{img:"https://image.insider.com/585029a0dd0895bc548b4b8b?width=750&format=jpeg&auto=webp",location:"Private room in center of London",title:"5 Star Luxury Apartment",description:"3 guest \xb7 1 bedroom \xb7 1 bed \xb7 1.5 shared bthrooms \xb7 Wifi \xb7 Kitchen \xb7 Free parking \xb7 Washing Machine",star:3.85,price:"$90 / night",total:"$650 total"})]})};var R=function(){return Object(m.jsx)("div",{children:Object(m.jsxs)(p.a,{children:[Object(m.jsx)(u,{}),Object(m.jsxs)(y.c,{children:[Object(m.jsx)(y.a,{path:"/search",children:Object(m.jsx)(W,{})}),Object(m.jsx)(y.a,{path:"/",children:Object(m.jsx)(S,{})})]}),Object(m.jsx)(x,{})]})})};a.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(R,{})}),document.getElementById("root"))}},[[90,1,2]]]);
//# sourceMappingURL=main.44c7281f.chunk.js.map