(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-60a150e8"],{2532:function(t,e,s){"use strict";var i=s("23e7"),n=s("5a34"),l=s("1d80"),a=s("ab13");i({target:"String",proto:!0,forced:!a("includes")},{includes:function(t){return!!~String(l(this)).indexOf(n(t),arguments.length>1?arguments[1]:void 0)}})},"5a34":function(t,e,s){var i=s("44e7");t.exports=function(t){if(i(t))throw TypeError("The method doesn't accept regular expressions");return t}},6189:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{ref:"hContainer",staticClass:"horizontal-scroll__wrapper"},[s("div",{staticClass:"horizontal-scroll",class:[{"horizontal-scroll--item-fw":t.itemFullWidth},{row:t.row}],style:[{transform:"translate("+t.scrollVal+"px,0px)"}]},[t._t("default")],2)])},n=[],l=(s("7db0"),s("b64b"),s("caad"),s("2532"),s("d81d"),{name:"ScrollHorizontal",props:{selectedId:{type:String,default:""},itemFullWidth:{type:Boolean,default:!1},row:{type:Boolean,default:!1}},data:function(){return{scrollVal:0,ids:[]}},watch:{selectedId:function(t){t.length&&this.scroll()}},mounted:function(){this.getCords(),this.scroll(),window.addEventListener("resize",this.scroll)},updated:function(){this.getCords()},beforeDestroy:function(){window.removeEventListener("resize",this.scroll)},methods:{scroll:function(){var t,e=this,s=null===(t=this.ids.find((function(t){return t.id===e.selectedId})))||void 0===t?void 0:t.id,i=document.getElementById(s);if(Object.keys(this.$slots.default).length&&this.selectedId.length&&null!==i){var n=!(navigator.userAgent.includes("Chrome/")||navigator.userAgent.includes("Firefox/")),l=this.$refs.hContainer,a=i.offsetWidth*this.ids.length,r=n?i.offsetLeft-l.offsetLeft:i.offsetLeft,o=l.offsetWidth/i.offsetWidth;o>1&&a-r<l.offsetWidth&&(r=a-l.offsetWidth),this.scrollVal=1===this.ids.length?0:-r}},getCords:function(){this.$slots.default&&(this.ids=this.$slots.default.map((function(t){return{id:t.elm.id,key:t.key}})))}}}),a=l,r=(s("ac46"),s("2877")),o=Object(r["a"])(a,i,n,!1,null,"22adfd6b",null);e["a"]=o.exports},"818d":function(t,e,s){},8464:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"linea-tiempo-c"},[s("div",{staticClass:"row flex-nowrap mx-0 linea-tiempo-c__header mb-4"},[s("div",{staticClass:"col-2 col-sm-auto px-0 me-sm-3"},[s("div",{staticClass:"linea-tiempo-c__header__btn--left",on:{click:function(e){t.selected=t.leftBtnId}}},[s("i",{staticClass:"fas fa-angle-left"})])]),s("div",{staticClass:"col-8 col-sm px-0"},[s("div",{staticClass:"row mx-0 flex-nowrap linea-tiempo-c__header__items"},[t.elements.length?s("ScrollHorizontal",{attrs:{selectedId:"ltc-header-"+(t.selected-1)}},t._l(t.elements,(function(e,i){return s("div",{key:"ltc-header-key-"+e.id,staticClass:"col-6 col-sm-4 px-0 linea-tiempo-c__header__item",class:t.itemClasses(e.id),attrs:{id:"ltc-header-"+e.id},on:{click:function(s){t.selected=e.id},mouseover:function(e){t.mostrarIndicador=!(t.mostrarIndicador&&i>=1)&&t.mostrarIndicador}}},[t.mostrarIndicador&&1===i?s("div",{staticClass:"indicador__container"},[s("div",{staticClass:"indicador--click indicador--sm"})]):t._e(),s("span",{staticClass:"linea-tiempo-c__header__item__year",class:{"text-small":t.textSmall},domProps:{innerHTML:t._s(e.titulo)}}),s("div",{staticClass:"linea-tiempo-c__header__item__line-container"},[s("div",{staticClass:"linea-tiempo-c__header__item__dot"})])])})),0):t._e()],1)]),s("div",{staticClass:"col-2 col-sm-auto px-0 ms-sm-3 d-flex justify-content-end"},[s("div",{staticClass:"linea-tiempo-c__header__btn--right",on:{click:function(e){t.selected=t.rightBtnId}}},[s("i",{staticClass:"fas fa-angle-right"})])])]),s("div",{staticClass:"linea-tiempo-c__content"},[t.elements.length?s("ScrollHorizontal",{attrs:{selectedId:"ltc-content-"+t.selected,"item-full-width":""}},t._l(t.elements,(function(t){return s("div",{directives:[{name:"child",rawName:"v-child",value:t.elm,expression:"item.elm"}],key:"ltc-content-key-"+t.id,staticClass:"linea-tiempo-c__content__item",attrs:{id:"ltc-content-"+t.id}})})),0):t._e(),s("div",{staticClass:"hidden-slot"},[t._t("default")],2)],1)])},n=[],l=s("ab14"),a=s("6189"),r={name:"LineaTiempoC",components:{ScrollHorizontal:a["a"]},mixins:[l["a"]],props:{textSmall:{type:Boolean}},data:function(){return{headerSelected:0,mostrarIndicador:!0}},computed:{leftBtnId:function(){return this.selected-1===this.mainId?this.selected:this.selected-1},rightBtnId:function(){return this.selected+1===this.elements[this.elements.length-1].id+1?this.selected:this.selected+1}},watch:{elements:function(t,e){!e.length&&t.length&&(this.headerSelected=t[0].id)}},methods:{itemClasses:function(t){return[{"linea-tiempo-c__header__item--active":t===this.selected},{"linea-tiempo-c__header__item--before":t<this.selected},this.elements.length>6?"col-lg-2":"col-lg",this.elements.length>=4?"col-md-3":"col-md"]}}},o=r,d=s("2877"),c=Object(d["a"])(o,i,n,!1,null,null,null);e["default"]=c.exports},ab13:function(t,e,s){var i=s("b622"),n=i("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(s){try{return e[n]=!1,"/./"[t](e)}catch(i){}}return!1}},ab14:function(t,e,s){"use strict";e["a"]={data:()=>({mainId:Math.floor(Math.random()*10**10),selected:0,elements:[],stateStr:"",rendered:!1,firstSelection:!0}),watch:{menuState(){this.domUpdated()}},created(){window.addEventListener("resize",this.domUpdated)},mounted(){this.$nextTick(()=>{this.crearElementos()})},computed:{menuState(){return this.$store.getters.isMenuOpen},navObj(){if(!this.elements.length||!this.secuencial)return{};const t=this.elements.map(t=>t.id),e=t.indexOf(this.selected);if(e<0)return{};const s={};return 0===e?s.next=t[e+1]:(e+1===t.length||(s.next=t[e+1]),s.back=t[e-1]),s}},beforeDestroy(){window.removeEventListener("resize",this.domUpdated)},updated(){this.$nextTick(()=>{this.getStateStr()!=this.stateStr&&this.crearElementos()})},methods:{crearElementos(){return this.$slots.default&&this.$slots.default.length?(this.domUpdated(),this.elements=this.$slots.default.map((t,e)=>{const s=t.data&&t.data.attrs?t.data.attrs:[];return{id:this.mainId+e+1,elm:t.elm,...s}}),this.firstSelection&&(this.selected=this.selected>0?this.selected:this.elements[0].id),void(this.stateStr=this.getStateStr())):[]},getActiveHeight(t){return this.$refs[t][0].scrollHeight+"px"},getStateStr(){return this.$slots.default.map(t=>t.elm.outerHTML).join("")},domUpdated(){this.rendered=!1,setTimeout(()=>{this.rendered=!0},100)}}}},ac46:function(t,e,s){"use strict";s("818d")},b64b:function(t,e,s){var i=s("23e7"),n=s("7b0b"),l=s("df75"),a=s("d039"),r=a((function(){l(1)}));i({target:"Object",stat:!0,forced:r},{keys:function(t){return l(n(t))}})},caad:function(t,e,s){"use strict";var i=s("23e7"),n=s("4d64").includes,l=s("44d2");i({target:"Array",proto:!0},{includes:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),l("includes")}}]);
//# sourceMappingURL=chunk-60a150e8.9b49e29f.js.map