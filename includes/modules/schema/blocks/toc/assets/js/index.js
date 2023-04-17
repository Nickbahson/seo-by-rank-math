!function(){var e={184:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function l(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)){if(n.length){var i=l.apply(null,n);i&&e.push(i)}}else if("object"===a){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var o in n)r.call(n,o)&&n[o]&&e.push(o)}}}return e.join(" ")}e.exports?(l.default=l,e.exports=l):void 0===(n=function(){return l}.apply(t,[]))||(e.exports=n)}()}},t={};function n(r){var l=t[r];if(void 0!==l)return l.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){"use strict";var e={};n.r(e),n.d(e,{__experimentalConvertBlockToStatic:function(){return d},__experimentalConvertBlocksToReusable:function(){return p},__experimentalDeleteReusableBlock:function(){return m},__experimentalSetEditingReusableBlock:function(){return h}});var t={};n.r(t),n.d(t,{__experimentalIsEditingReusableBlock:function(){return v}});var r=wp.blocks,l=lodash,a=wp.i18n,i=wp.blockEditor,o=wp.data,c=wp.components,s=wp.element,u=wp.dom;const d=e=>t=>{let{registry:n}=t;const l=n.select(i.store).getBlock(e),a=n.select("core").getEditedEntityRecord("postType","wp_block",l.attributes.ref),o=(0,r.parse)("function"==typeof a.content?a.content(a):a.content);n.dispatch(i.store).replaceBlocks(l.clientId,o)},p=(e,t)=>async n=>{let{registry:l,dispatch:o}=n;const c={title:t||(0,a.__)("Untitled Reusable block"),content:(0,r.serialize)(l.select(i.store).getBlocksByClientId(e)),status:"publish"},s=await l.dispatch("core").saveEntityRecord("postType","wp_block",c),u=(0,r.createBlock)("core/block",{ref:s.id});l.dispatch(i.store).replaceBlocks(e,u),o.__experimentalSetEditingReusableBlock(u.clientId,!0)},m=e=>async t=>{let{registry:n}=t;if(!n.select("core").getEditedEntityRecord("postType","wp_block",e))return;const l=n.select(i.store).getBlocks().filter((t=>(0,r.isReusableBlock)(t)&&t.attributes.ref===e)).map((e=>e.clientId));l.length&&n.dispatch(i.store).removeBlocks(l),await n.dispatch("core").deleteEntityRecord("postType","wp_block",e)};function h(e,t){return{type:"SET_EDITING_REUSABLE_BLOCK",clientId:e,isEditing:t}}var f=(0,o.combineReducers)({isEditingReusableBlock:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return"SET_EDITING_REUSABLE_BLOCK"===(null==t?void 0:t.type)?{...e,[t.clientId]:t.isEditing}:e}});function v(e,t){return e.isEditingReusableBlock[t]}const g=(0,o.createReduxStore)("core/reusable-blocks",{actions:e,reducer:f,selectors:t});function b(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return k(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return k(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,l=function(){};return{s:l,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:l}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,o=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return i=e.done,e},e:function(e){o=!0,a=e},f:function(){try{i||null==n.return||n.return()}finally{if(o)throw a}}}}function k(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function y(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=[];return(0,l.forEach)(e,(function(n,r){var a;if(!(0,l.isEmpty)(n.content)&&n.level===e[0].level)if((null===(a=e[r+1])||void 0===a?void 0:a.level)>n.level){for(var i=e.length,o=r+1;o<e.length;o++)if(e[o].level===n.level){i=o;break}t.push({heading:n,children:y(e.slice(r+1,i))})}else t.push({heading:n,children:null})})),t}function E(e){var t=e.headings,n=void 0===t?{}:t,r=e.onHeadingUpdate,o=void 0===r?{}:r,s=e.edit,u=void 0===s?{}:s,d=e.toggleEdit,p=void 0===d?{}:d,m=e.hideHeading,h=void 0===m?{}:m,f=e.ListStyle,v=void 0===f?"ul":f,g=e.isSave,b=void 0!==g&&g;return(0,l.isEmpty)(n)?null:wp.element.createElement(React.Fragment,null,n.map((function(e){if(b&&e.heading.disable)return!1;var t=e.heading,n=t.content,r=t.link,l=t.disable,s=t.key,d="div"===v?"div":"li";return wp.element.createElement(d,{key:s,className:l?"disabled":""},b&&wp.element.createElement("a",{href:r},n),!b&&wp.element.createElement(i.RichText,{tagName:"a",value:n,allowedFormats:[],onChange:function(e){return o(e,s,!0)},placeholder:(0,a.__)("Heading text","rank-math")}),e.children&&wp.element.createElement(v,null,wp.element.createElement(E,{headings:e.children,onHeadingUpdate:o,edit:u,toggleEdit:p,hideHeading:h,ListStyle:v,isSave:b})),s===u&&wp.element.createElement(c.TextControl,{placeholder:(0,a.__)("Heading Link","rank-math"),value:r,onChange:function(e){return o(e,s)}}),!b&&wp.element.createElement("span",{className:"rank-math-block-actions"},wp.element.createElement(c.Button,{icon:u===s?"saved":"admin-links",className:"rank-math-item-visbility",onClick:function(){return p(u!==s&&s)},title:(0,a.__)("Edit Link","rank-math")}),wp.element.createElement(c.Button,{className:"rank-math-item-delete",icon:l?"hidden":"visibility",onClick:function(){return h(!l,s)},title:(0,a.__)("Hide","rank-math")})))})))}(0,o.register)(g);var w=function(e){var t=e.attributes,n=e.setAttributes,r=e.excludeHeadings,o=e.setExcludeHeadings;return wp.element.createElement(i.InspectorControls,null,wp.element.createElement(c.PanelBody,{title:(0,a.__)("Settings","rank-math")},wp.element.createElement(c.SelectControl,{label:(0,a.__)("Title Wrapper","rank-math"),value:t.titleWrapper,options:[{value:"h2",label:(0,a.__)("H2","rank-math")},{value:"h3",label:(0,a.__)("H3","rank-math")},{value:"h4",label:(0,a.__)("H4","rank-math")},{value:"h5",label:(0,a.__)("H5","rank-math")},{value:"h6",label:(0,a.__)("H6","rank-math")},{value:"p",label:(0,a.__)("P","rank-math")},{value:"div",label:(0,a.__)("DIV","rank-math")}],onChange:function(e){n({titleWrapper:e})}}),wp.element.createElement("br",null),wp.element.createElement("h3",null,(0,a.__)("Exclude Headings","rank-math")),wp.element.createElement("div",{className:"rank-math-toc-exclude-headings"},(0,l.map)(["h1","h2","h3","h4","h5","h6"],(function(e){return wp.element.createElement(c.CheckboxControl,{key:e,label:(0,a.__)("Heading ","rank-math")+(0,l.toUpper)(e),checked:(0,l.includes)(r,e),onChange:function(t){return o(e,t)}})})))))},_=n(184),S=n.n(_);const x=e=>(0,s.createElement)("path",e),B=e=>{let{className:t,isPressed:n,...r}=e;const l={...r,className:S()(t,{"is-pressed":n})||void 0,"aria-hidden":!0,focusable:!1};return(0,s.createElement)("svg",l)};var H=(0,s.createElement)(B,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,s.createElement)(x,{d:"M11.1 15.8H20v-1.5h-8.9v1.5zm0-8.6v1.5H20V7.2h-8.9zM6 13c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-7c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}));var U=(0,s.createElement)(B,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,s.createElement)(x,{d:"M11.1 15.8H20v-1.5h-8.9v1.5zm0-8.6v1.5H20V7.2h-8.9zM5 6.7V10h1V5.3L3.8 6l.4 1 .8-.3zm-.4 5.7c-.3.1-.5.2-.7.3l.1 1.1c.2-.2.5-.4.8-.5.3-.1.6 0 .7.1.2.3 0 .8-.2 1.1-.5.8-.9 1.6-1.4 2.5h2.7v-1h-1c.3-.6.8-1.4.9-2.1.1-.3 0-.8-.2-1.1-.5-.6-1.3-.5-1.7-.4z"}));var T=(0,s.createElement)(B,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,s.createElement)(x,{d:"M4 19.8h8.9v-1.5H4v1.5zm8.9-15.6H4v1.5h8.9V4.2zm-8.9 7v1.5h16v-1.5H4z"})),C=function(e){var t=e.setAttributes;return wp.element.createElement(i.BlockControls,null,wp.element.createElement(c.Toolbar,{label:(0,a.__)("Table of Content Options","rank-math")},wp.element.createElement(c.ToolbarButton,{icon:H,label:(0,a.__)("Unordered List","rank-math"),onClick:function(){return t({listStyle:"ul"})}}),wp.element.createElement(c.ToolbarButton,{icon:U,label:(0,a.__)("Ordered List","rank-math"),onClick:function(){return t({listStyle:"ol"})}}),wp.element.createElement(c.ToolbarButton,{icon:T,label:(0,a.__)("None","rank-math"),onClick:function(){return t({listStyle:"div"})}})))};function A(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,l,a,i,o=[],c=!0,s=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(o.push(r.value),o.length!==t);c=!0);}catch(e){s=!0,l=e}finally{try{if(!c&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(s)throw l}}return o}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return L(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return L(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function L(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function I(){return I=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},I.apply(this,arguments)}(0,r.registerBlockType)("rank-math/toc-block",{edit:function(e){var t,n=e.attributes,r=e.setAttributes,d=(0,i.useBlockProps)(),p=A((0,s.useState)(!1),2),m=p[0],h=p[1],f=A((0,s.useState)({}),2),v=f[0],k=f[1];n.listStyle||r({listStyle:rankMath.listStyle});var _=n.listStyle,S=null!==(t=n.title)&&void 0!==t?t:rankMath.tocTitle,x=(0,l.isUndefined)(n.excludeHeadings)?rankMath.tocExcludeHeadings:n.excludeHeadings,B=function(e){(0,l.includes)(x,e)?(0,l.remove)(x,(function(t){return t===e})):x.push(e),r({excludeHeadings:x}),k(!v)},H=(0,o.useDispatch)(i.store).__unstableMarkNextChangeAsNotPersistent,U=function(e,t){var n=(0,o.useDispatch)(g).__experimentalConvertBlockToStatic;return(0,o.useSelect)((function(r){var a,o=r(i.store),c=o.getBlockAttributes,s=o.getBlockName,d=(0,o.getClientIdsWithDescendants)(),p=[],m=0,h=[],f=b(d);try{var v=function(){var r=a.value,i=s(r);if("core/block"===i){var o=c(r);return(0,l.isNull)(o.ref)||setImmediate((function(){var e=wp.data.select("core").getEditedEntityRecord("postType","wp_block",o.ref),t=(0,l.map)(e.blocks,(function(e){return e.name}));(0,l.includes)(t,"rank-math/toc-block")&&!(0,l.isNull)(c(r))&&n(r)})),"continue"}if(!(0,l.includes)(["rank-math/faq-block","rank-math/howto-block","core/heading"],i))return"continue";var d=c(r);if("rank-math/faq-block"===i||"rank-math/howto-block"===i){var f=d.titleWrapper;if((0,l.includes)(t,f)||(0,l.includes)(["div","p"],f))return"continue";var v="rank-math/howto-block"===i?d.steps:d.questions;return(0,l.isEmpty)(v)||(0,l.forEach)(v,(function(t){var n=(0,l.isUndefined)(e)||(0,l.isEmpty)(e[p.length])?{content:"",level:"",disable:!1,isUpdated:!1,isGeneratedLink:!0}:e[p.length],r=!(0,l.isUndefined)(n.isGeneratedLink)&&n.isGeneratedLink;p.push({key:t.id,content:!(0,l.isUndefined)(n.isUpdated)&&n.isUpdated?n.content:t.title,level:parseInt(d.titleWrapper.replace("h","")),link:r?"#".concat(t.id):n.link,disable:!!n.disable&&n.disable,isUpdated:!(0,l.isUndefined)(n.isUpdated)&&n.isUpdated,isGeneratedLink:r})})),"continue"}if("core/heading"===i){if((0,l.includes)(t,"h"+d.level))return"continue";var g=(0,l.isUndefined)(e)||(0,l.isEmpty)(e[p.length])?{content:"",level:"",disable:!1,isUpdated:!1,isGeneratedLink:!0}:e[p.length],b=!(0,l.isUndefined)(g.isGeneratedLink)&&g.isGeneratedLink,k=d.anchor;((0,l.isEmpty)(d.anchor)||b)&&(k=(0,l.kebabCase)(d.content)),(0,l.includes)(h,k)&&(k=k+"-"+(m+=1)),h.push(k),d.anchor=k;var y=(0,u.__unstableStripHTML)(d.content.replace(/(<br *\/?>)+/g," "));p.push({key:r,content:!(0,l.isUndefined)(g.isUpdated)&&g.isUpdated?g.content:y,level:d.level,link:b?"#".concat(d.anchor):g.link,disable:!!g.disable&&g.disable,isUpdated:!(0,l.isUndefined)(g.isUpdated)&&g.isUpdated,isGeneratedLink:b})}};for(f.s();!(a=f.n()).done;)v()}catch(e){f.e(e)}finally{f.f()}return(0,l.isEqual)(e,p)?null:p}))}(n.headings,x);(0,s.useEffect)((function(){null!==U&&(H(),r({headings:U}))}),[U]);var T=y(n.headings);return(0,l.isUndefined)(n.headings)||0===n.headings.length?wp.element.createElement("div",d,wp.element.createElement(c.Placeholder,{label:(0,a.__)("Table of Contents","rank-math"),instructions:(0,a.__)("Add Heading blocks to this page to generate the Table of Contents.","rank-math")}),wp.element.createElement(w,{attributes:n,setAttributes:r,excludeHeadings:x,setExcludeHeadings:B})):wp.element.createElement("div",d,wp.element.createElement(i.RichText,{tagName:n.titleWrapper,value:S,onChange:function(e){r({title:e})},placeholder:(0,a.__)("Enter a title","rank-math")}),wp.element.createElement("nav",null,wp.element.createElement(_,null,wp.element.createElement(E,{headings:T,onHeadingUpdate:function(e,t){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=(0,l.map)(n.headings,(function(n){return n.key===t&&(a?(n.content=e,n.isUpdated=!0):(n.isGeneratedLink=!1,n.link=e)),n}));r({headings:i})},edit:m,toggleEdit:h,hideHeading:function(e,t){var a=(0,l.map)(n.headings,(function(n){return n.key===t&&(n.disable=e),n}));r({headings:a})},ListStyle:_}))),wp.element.createElement(C,{setAttributes:r}),wp.element.createElement(w,{attributes:n,setAttributes:r,excludeHeadings:x,setExcludeHeadings:B}))},save:function(e){var t=e.attributes;if(0===t.headings.length)return null;var n=t.titleWrapper,r=y(t.headings),l=t.listStyle;return wp.element.createElement("div",I({},i.useBlockProps.save(),{id:"rank-math-toc"}),t.title&&wp.element.createElement(n,{dangerouslySetInnerHTML:{__html:t.title}}),wp.element.createElement("nav",null,wp.element.createElement(l,null,wp.element.createElement(E,{headings:r,ListStyle:l,isSave:!0}))))}})}()}();