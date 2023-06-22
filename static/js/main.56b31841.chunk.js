(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(8),c=n.n(a),l=(n(14),n(4)),s=n(2),i=n(1),r=(n(15),n(16),n(0)),u=function(e){var t="card-class "+e.className;return Object(r.jsx)("div",{className:t,children:e.children})},o=(n(18),function(e){return Object(r.jsx)("div",{className:"expenses-filter",children:Object(r.jsxs)("div",{className:"expenses-filter__control",children:[Object(r.jsx)("label",{children:"Filter by year"}),Object(r.jsxs)("select",{onChange:function(t){var n=t.target.value.toString();e.onSelectOption(n)},value:e.selected,children:[Object(r.jsx)("option",{value:"none",children:"All"}),Object(r.jsx)("option",{value:"2019",children:"2019"}),Object(r.jsx)("option",{value:"2020",children:"2020"}),Object(r.jsx)("option",{value:"2021",children:"2021"}),Object(r.jsx)("option",{value:"2022",children:"2022"})]})]})})}),j=(n(19),n(20),n(21),function(e){var t=e.date.toLocaleString("en-US",{month:"long"}),n=e.date.toLocaleString("en-US",{day:"2-digit"}),a=e.date.getFullYear();return Object(r.jsxs)("div",{className:"expense-date",children:[Object(r.jsx)("div",{className:"expense-date__month",children:t}),Object(r.jsx)("div",{className:"expense-date__year",children:a}),Object(r.jsx)("div",{className:"expense-date__day",children:n})]})});var d=function(e){return Object(r.jsx)("div",{children:Object(r.jsx)("li",{children:Object(r.jsxs)(u,{className:"expense-item",children:[Object(r.jsx)(j,{date:e.date}),Object(r.jsxs)("div",{className:"expense-item__description",children:[Object(r.jsx)("h2",{children:e.title}),Object(r.jsxs)("div",{className:"expense-item__price",children:["$",e.amount]})]})]})})})},b=function(e){return 0===e.expenses.length&&"none"!==e.optionChosen?Object(r.jsx)("h2",{className:"expenses-list__fallback",children:"No expenses found."}):"none"===e.optionChosen?e.noFilter.map((function(e){return Object(r.jsx)("ul",{className:"expenses-list",children:Object(r.jsx)(d,{title:e.title,amount:e.amount,date:e.date},e.id)})})):Object(r.jsx)("div",{children:Object(r.jsx)("ul",{className:"expenses-list",children:e.expenses.map((function(e){return Object(r.jsx)(d,{title:e.title,amount:e.amount,date:e.date},e.id)}))})})},x=n(6),v=(n(22),function(e){var t="0";return e.maxValue>0&&(t="".concat(Math.round(e.value/e.maxValue*100),"%")),Object(r.jsxs)("div",{className:"chart-bar",children:[Object(r.jsx)("div",{className:"chart-bar__inner",children:Object(r.jsx)("div",{className:"chart-bar__fill",style:{height:t}})}),Object(r.jsx)("div",{className:"chart-bar__label",children:e.label})]})}),O=(n(23),function(e){var t=e.dataPoints.map((function(e){return e.value})),n=Math.max.apply(Math,Object(l.a)(t));return Object(r.jsx)("div",{className:"chart",children:e.dataPoints.map((function(e){return Object(r.jsx)(v,{value:e.value,maxValue:n,label:e.label},e.label)}))})}),h=function(e){var t,n=[{label:"2019",value:0},{label:"2020",value:0},{label:"2021",value:0},{label:"2022",value:0}],a=Object(x.a)(e.expenses);try{for(a.s();!(t=a.n()).done;){var c=t.value,l=c.date.getYear();119===l?n[0].value+=c.amount:120===l?n[1].value+=c.amount:121===l?n[2].value+=c.amount:n[3].value+=c.amount}}catch(s){a.e(s)}finally{a.f()}return Object(r.jsx)(O,{dataPoints:n})},p=function(e){var t,n=[{label:"Jan",value:0},{label:"Feb",value:0},{label:"Mar",value:0},{label:"Apr",value:0},{label:"May",value:0},{label:"Jun",value:0},{label:"Jul",value:0},{label:"Aug",value:0},{label:"Sep",value:0},{label:"Oct",value:0},{label:"Nov",value:0},{label:"Dec",value:0}],a=Object(x.a)(e.expenses);try{for(a.s();!(t=a.n()).done;){var c=t.value;n[c.date.getMonth()].value+=c.amount}}catch(l){a.e(l)}finally{a.f()}return Object(r.jsx)(O,{dataPoints:n})},m=function(e){return"none"===e.filterValue?Object(r.jsx)(h,{expenses:e.allExpenses}):Object(r.jsx)(p,{expenses:e.expenses})},f=function(e){var t=Object(i.useState)("none"),n=Object(s.a)(t,2),a=n[0],c=n[1],j=e.items.filter((function(e){return e.date.getFullYear().toString()===a})),d=Object(l.a)(e.items);return Object(r.jsx)("div",{children:Object(r.jsxs)(u,{className:"expenses",children:[Object(r.jsx)(o,{selected:a,onSelectOption:function(e){c(e)}}),Object(r.jsx)(m,{filterValue:a,expenses:j,allExpenses:d}),Object(r.jsx)(b,{expenses:j,optionChosen:a,noFilter:d})]})})},N=n(9),_=(n(24),function(e){var t=Object(i.useState)(""),n=Object(s.a)(t,2),a=n[0],c=n[1],l=Object(i.useState)(""),u=Object(s.a)(l,2),o=u[0],j=u[1],d=Object(i.useState)(""),b=Object(s.a)(d,2),x=b[0],v=b[1];return Object(r.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n={title:a,amount:+o,date:new Date(x)};e.onSaveExpenseData(n),c(""),j(""),v("")},children:[Object(r.jsxs)("div",{className:"new-expense__controls",children:[Object(r.jsxs)("div",{className:"new-expense__control",children:[Object(r.jsx)("label",{children:"title"}),Object(r.jsx)("input",{type:"text",onChange:function(e){c(e.target.value)},value:a})]}),Object(r.jsxs)("div",{className:"new-expense__control",children:[Object(r.jsx)("label",{children:"amount"}),Object(r.jsx)("input",{type:"number",min:"0",step:"0.01",onChange:function(e){j(e.target.value)},value:o})]}),Object(r.jsxs)("div",{className:"new-expense__control",children:[Object(r.jsx)("label",{children:"date"}),Object(r.jsx)("input",{type:"date",min:"2019-01-01",max:"2022-12-30",value:x,onChange:function(e){v(e.target.value)}})]})]}),Object(r.jsxs)("div",{className:"new-expense__actions",children:[Object(r.jsx)("button",{onClick:function(){e.cancelFalse(!1)},children:"Cancel"}),Object(r.jsx)("button",{type:"submit",children:"Add Expense"})]})]})}),g=(n(25),n(26),function(e){return Object(r.jsx)("div",{children:Object(r.jsx)("button",{onClick:function(){e.onAddExpense(!0)},children:"Add New Expense"})})}),S=function(e){var t=Object(i.useState)(!1),n=Object(s.a)(t,2),a=n[0],c=n[1],l=function(e){c(e)};return!0===a?Object(r.jsx)("div",{className:"new-expense",children:Object(r.jsx)(_,{onSaveExpenseData:function(t){var n=Object(N.a)({id:"e".concat(Math.round(999*Math.random()).toString())},t);e.onAddExpense(n)},cancelFalse:l})}):Object(r.jsx)("div",{className:"new-expense",children:Object(r.jsx)(g,{onAddExpense:l})})},w=[{id:"e1",title:"Toilet Paper",amount:94.12,date:new Date(2020,7,14)},{id:"e2",title:"New TV",amount:799.49,date:new Date(2021,2,12)},{id:"e3",title:"Car Insurance",amount:294.67,date:new Date(2021,2,28)},{id:"e4",title:"New Desk (Wooden)",amount:450,date:new Date(2021,5,12)}],y=function(){var e=Object(i.useState)(w),t=Object(s.a)(e,2),n=t[0],a=t[1];return Object(r.jsx)("div",{children:Object(r.jsxs)("div",{children:[Object(r.jsx)(S,{onAddExpense:function(e){a((function(t){return[e].concat(Object(l.a)(t))}))}}),Object(r.jsx)(f,{items:n})]})})};c.a.render(Object(r.jsx)(y,{}),document.getElementById("root"))}],[[27,1,2]]]);
//# sourceMappingURL=main.56b31841.chunk.js.map