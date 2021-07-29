(function(t){function e(e){for(var i,n,r=e[0],d=e[1],c=e[2],u=0,f=[];u<r.length;u++)n=r[u],Object.prototype.hasOwnProperty.call(l,n)&&l[n]&&f.push(l[n][0]),l[n]=0;for(i in d)Object.prototype.hasOwnProperty.call(d,i)&&(t[i]=d[i]);a&&a(e);while(f.length)f.shift()();return s.push.apply(s,c||[]),o()}function o(){for(var t,e=0;e<s.length;e++){for(var o=s[e],i=!0,r=1;r<o.length;r++){var d=o[r];0!==l[d]&&(i=!1)}i&&(s.splice(e--,1),t=n(n.s=o[0]))}return t}var i={},l={app:0},s=[];function n(e){if(i[e])return i[e].exports;var o=i[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=i,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],d=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var a=d;s.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"0141":function(t,e,o){"use strict";o("9c95")},"034f":function(t,e,o){"use strict";o("85ec")},2030:function(t,e,o){"use strict";o("b259")},"28c9":function(t,e,o){},"3c82":function(t,e,o){"use strict";o("d13e")},"4ed4":function(t,e,o){},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var i=o("2b0e"),l=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("main",[o("div",{staticClass:"title"},[t._v(" ✎ "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{type:"text"},domProps:{value:t.title},on:{input:[function(e){e.target.composing||(t.title=e.target.value)},function(e){return t.titleName(e)}]}})]),o("div",[o("AddTodo",{on:{addTodo:t.addTodo}})],1),o("FilterTodo",{attrs:{selectFilter:t.selectFilter},on:{filterTodos:t.filterTodos}}),o("SearchTodo",{on:{searchTodo:t.searchTodo}}),o("TodoList",{attrs:{todos:t.todos,deleteTodo:t.deleteTodo,modalOpen:t.modalOpen},on:{completeTodo:t.completeTodo}}),t.modal?o("EditModal",{attrs:{todoTitle:t.editTodoTitle},on:{modalClose:t.modalClose,setProductTitle:t.setProductTitle}}):t._e()],1)},s=[],n=(o("498a"),o("d81d"),o("4de4"),o("caad"),o("2532"),function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"search-box"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{type:"text"},domProps:{value:t.title},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.clickHandler.apply(null,arguments)},input:function(e){e.target.composing||(t.title=e.target.value)}}}),o("button",{on:{click:t.clickHandler}},[t._v("Создать")])])}),r=[],d={data:function(){return{title:""}},methods:{clickHandler:function(){this.title.trim()&&this.$emit("addTodo",this.title),this.title=""}}},c=d,a=(o("3c82"),o("2877")),u=Object(a["a"])(c,n,r,!1,null,"11187668",null),f=u.exports,m=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ul",t._l(t.todos,(function(e,i){return o("TodoItem",{key:e.id,attrs:{todo:e,index:i,deleteTodo:t.deleteTodo,modalOpen:t.modalOpen},on:{completeTodo:function(o){return t.$emit("completeTodo",e.id)},modalIsOpen:function(e){return t.$emit("modalIsOpen",!0)}}})})),1)},p=[],h=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("li",{ref:"todo",staticClass:"todo-item todo-anim"},[o("div",{on:{click:function(e){return t.$emit("completeTodo",t.todo.id)}}},[t._v(" "+t._s(t.index+1+". "+t.todo.title)+" ")]),o("div",{staticClass:"icons"},[t.todo.completed?o("span",{staticClass:"icon-completed"},[t._v("☑")]):t._e(),o("span",{staticClass:"icon-completed",on:{click:function(e){return t.modalOpen(t.todo.id,t.todo.title)}}},[t._v("✎")]),o("span",{staticClass:"icon-delete",on:{click:function(e){return t.deleteTodo(t.todo.id,t.$refs.todo)}}},[t._v("🗑")])])])])},v=[],g=(o("a9e3"),{props:{index:{required:!0,type:Number},todo:{required:!0,type:Object},deleteTodo:{required:!0,type:Function},modalOpen:{required:!0}},mounted:function(){var t=this;setTimeout((function(){return t.$refs.todo.classList.remove("todo-anim")}),300)}}),T=g,y=(o("ca75"),Object(a["a"])(T,h,v,!1,null,"33dfbfd5",null)),O=y.exports,S={props:{todos:{required:!0,type:Array},deleteTodo:{required:!0,type:Function},modalOpen:{required:!0}},components:{TodoItem:O}},_=S,b=(o("2030"),Object(a["a"])(_,m,p,!1,null,"e6036342",null)),k=b.exports,I=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"filter-buttons"},[o("select",{directives:[{name:"model",rawName:"v-model",value:t.selected,expression:"selected"}],attrs:{id:"select"},on:{change:[function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.selected=e.target.multiple?o:o[0]},function(e){return t.$emit("filterTodos",t.selected)}]}},t._l(t.selectFilter,(function(e){return o("option",{key:e.value,domProps:{value:e.value}},[t._v(t._s(e.title))])})),0)])},x=[],N={props:{selectFilter:{required:!0,type:Array}},data:function(){return{selected:localStorage.getItem("seleсted")||"all"}},created:function(){this.seleсted=localStorage.getItem("seleсted")||"all",console.log(this.selected)}},F=N,C=(o("b9f7"),Object(a["a"])(F,I,x,!1,null,null,null)),$=C.exports,P=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"search-todo",attrs:{type:"text"},domProps:{value:t.search},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.clickHandler.apply(null,arguments)},input:function(e){e.target.composing||(t.search=e.target.value)}}}),o("button",{on:{click:t.clickHandler}},[t._v("Поиск")])])},J=[],j=(o("ac1f"),o("841c"),{name:"searchTodo",data:function(){return{search:""}},methods:{clickHandler:function(){this.$emit("searchTodo",this.search),this.search=""}}}),w=j,E=(o("0141"),Object(a["a"])(w,P,J,!1,null,"85534f7a",null)),q=E.exports,M=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{ref:"modal",staticClass:"modal"},[o("div",{staticClass:"container"},[o("button",{staticClass:"close",on:{click:function(e){return t.$emit("modalClose",t.$refs.modal)}}},[t._v(" × ")]),o("div",{staticClass:"form"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.title},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.setTitle.apply(null,arguments)},input:function(e){e.target.composing||(t.title=e.target.value)}}}),o("button",{on:{click:t.setTitle}},[t._v("Изменить")])])])])},H=[],L={name:"EditModal",data:function(){return{title:""}},props:{todoTitle:{type:String,required:!0}},methods:{setTitle:function(){this.title.trim()&&(this.$emit("setProductTitle",this.title),this.$emit("modalClose",this.$refs.modal))}},mounted:function(){var t=this;setTimeout((function(){return t.$refs.modal.classList.add("active")}),100),this.title=this.todoTitle}},A=L,B=(o("f993"),Object(a["a"])(A,M,H,!1,null,null,null)),R=B.exports,D={components:{TodoList:k,SearchTodo:q,AddTodo:f,FilterTodo:$,EditModal:R},data:function(){return{modal:!1,title:localStorage.getItem("title")||"Todo",todos:JSON.parse(localStorage.getItem("todos"))||[{id:1,title:"Buy products",completed:!1},{id:2,title:"Feed the pet",completed:!0},{id:3,title:"Repair site",completed:!1}],allTodos:JSON.parse(localStorage.getItem("allTodos"))||[{id:1,title:"Buy products",completed:!1},{id:2,title:"Feed the pet",completed:!0},{id:3,title:"Repair site",completed:!1}],selectFilter:JSON.parse(localStorage.getItem("selectFilter"))||[{title:"Все",value:"all",selected:!0},{title:"Выполнено",value:"completed",selected:!1},{title:"Невыполнено",value:"uncompleted",selected:!1}],editProductId:"",editTodoTitle:""}},methods:{titleName:function(t){this.title=t.target.value,localStorage.setItem("title",this.title)},addTodo:function(t){if(t.trim()){var e=this.allTodos;this.todos=e,this.todos.push({id:Date.now(),title:t,completed:!1}),this.allTodos=this.todos,localStorage.setItem("allTodos",JSON.stringify(this.todos)),localStorage.setItem("todos",JSON.stringify(this.todos));var o=localStorage.getItem("seleсted");this.filterTodos(o)}},completeTodo:function(t){var e=this.allTodos;this.todos=e,this.todos=this.todos.map((function(e){return e.id===t&&(e.completed=!e.completed),e}));var o=localStorage.getItem("seleсted");this.filterTodos(o),localStorage.setItem("todos",JSON.stringify(this.todos))},filterTodos:function(t){localStorage.setItem("seleсted",t);var e=this.allTodos;"all"===t&&(this.todos=e,this.selectFilter[0].selected=!0,this.selectFilter[1].selected=!1,this.selectFilter[2].selected=!1,localStorage.setItem("todos",JSON.stringify(this.todos))),"completed"===t&&(this.todos=e,this.todos=this.todos.filter((function(t){return!0===t.completed})),this.selectFilter[0].selected=!1,this.selectFilter[1].selected=!0,this.selectFilter[2].selected=!1,localStorage.setItem("todos",JSON.stringify(this.todos))),"uncompleted"===t&&(this.todos=e,this.todos=this.todos.filter((function(t){return!1===t.completed})),this.selectFilter[0].selected=!1,this.selectFilter[1].selected=!1,this.selectFilter[2].selected=!0,localStorage.setItem("todos",JSON.stringify(this.todos))),localStorage.setItem("selectFilter",JSON.stringify(this.selectFilter))},deleteTodo:function(t,e){var o=this;e.classList.add("todo-anim"),setTimeout((function(){o.allTodos=o.allTodos.filter((function(e){return e.id!==t})),o.todos=o.allTodos;var e=localStorage.getItem("seleсted");o.filterTodos(e),localStorage.setItem("todos",JSON.stringify(o.todos)),localStorage.setItem("allTodos",JSON.stringify(o.todos))}),300)},searchTodo:function(t){t.trim()&&(this.todos=JSON.parse(localStorage.getItem("todos")),this.todos=this.todos.filter((function(e){return!!e.title.includes(t.trim())}))),t.trim()||(this.todos=JSON.parse(localStorage.getItem("todos")))},modalOpen:function(t,e){this.modal=!0,this.editProductId=t,this.editTodoTitle=e,console.log(this.editProductId)},modalClose:function(t){var e=this;t.classList.remove("active"),setTimeout((function(){e.modal=!1}),300)},setProductTitle:function(t){var e=this;this.todos=this.todos.map((function(o){return o.id===e.editProductId&&(o.title=t),o})),localStorage.setItem("todos",JSON.stringify(this.todos)),localStorage.setItem("allTodos",JSON.stringify(this.todos))}}},z=D,G=(o("034f"),Object(a["a"])(z,l,s,!1,null,null,null)),K=G.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(K)}}).$mount("#app")},"605c":function(t,e,o){},"85ec":function(t,e,o){},"9c95":function(t,e,o){},b259:function(t,e,o){},b9f7:function(t,e,o){"use strict";o("4ed4")},ca75:function(t,e,o){"use strict";o("605c")},d13e:function(t,e,o){},f993:function(t,e,o){"use strict";o("28c9")}});
//# sourceMappingURL=app.f6a9674c.js.map