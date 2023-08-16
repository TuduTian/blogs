(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{436:function(t,s,a){"use strict";a.r(s);var n=a(2),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"ref-只处理了普通类型的情况-对象的情况还没有处理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ref-只处理了普通类型的情况-对象的情况还没有处理"}},[t._v("#")]),t._v(" ref 只处理了普通类型的情况，对象的情况还没有处理")]),t._v(" "),s("h2",{attrs:{id:"逻辑梳理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#逻辑梳理"}},[t._v("#")]),t._v(" 逻辑梳理")]),t._v(" "),s("ol",[s("li",[t._v("创建一个类")]),t._v(" "),s("li",[t._v("采用属性访问器进行访问，")]),t._v(" "),s("li",[t._v("get中手机依赖，set中触发依赖更新")])]),t._v(" "),s("h2",{attrs:{id:"伪代码实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#伪代码实现"}},[t._v("#")]),t._v(" 伪代码实现")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 类中还有其他的属性，具体可以看 Vue 源码 */")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("createRefImpl")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" _value \n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("constructor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("target")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("target "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" target \n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_value "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("target\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("value")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 收集依赖的代码")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_value\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("value")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("newValue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 判断老值和新值是否一样，一样的话就直接返回，这里写不一样的逻辑")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 触发依赖 的代理")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_value "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" newValue\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ref")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("target")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createRefImpl")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("target"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("strong",[t._v("比较重要的是依赖的收集以及依赖的触发")])])])}),[],!1,null,null,null);s.default=e.exports}}]);