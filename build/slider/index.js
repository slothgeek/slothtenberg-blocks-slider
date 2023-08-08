(()=>{"use strict";var e,l={654:()=>{const e=window.wp.blocks,l=window.wp.element,t=window.wp.i18n,a=window.wp.blockEditor,n=window.wp.components,r=window.wp.primitives,o=(0,l.createElement)(r.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,l.createElement)(r.Path,{d:"M18 4H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm.5 14c0 .3-.2.5-.5.5H6c-.3 0-.5-.2-.5-.5V6c0-.3.2-.5.5-.5h12c.3 0 .5.2.5.5v12zM7 16.5h6V15H7v1.5zm4-4h6V11h-6v1.5zM9 11H7v1.5h2V11zm6 5.5h2V15h-2v1.5z"})),i=(0,l.createElement)(r.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,l.createElement)(r.Path,{d:"M18 11.2h-5.2V6h-1.6v5.2H6v1.6h5.2V18h1.6v-5.2H18z"}));function s(){return s=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var t=arguments[l];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},s.apply(this,arguments)}const c=JSON.parse('{"u2":"sg-block/slider"}');(0,e.registerBlockType)(c.u2,{attributes:{type:{type:"string",default:"loop"},perPage:{type:"number",default:1},rewind:{type:"boolean",default:!1},speed:{type:"number",default:400},rewindSpeed:{type:"number",default:500},rewindByDrag:{type:"boolean",default:!0},width:{type:"string",default:"100%"},height:{type:"string",default:"420px"},start:{type:"number",default:0},perMove:{type:"number",default:1},padding:{type:"string",default:"0"},gap:{type:"string",default:"1em"},arrows:{type:"boolean",default:!0},pagination:{type:"boolean",default:!0},paginationDirection:{type:"string",default:"ltr"},drag:{type:"string",default:"true"},autoplay:{type:"boolean",default:!0},interval:{type:"number",default:5e3},pauseOnHover:{type:"boolean",default:!0},lazyLoad:{type:"string",default:!1},direction:{type:"string",default:"ltr"},perPageMedium:{type:"number",default:3},perPageSmall:{type:"number",default:1},autoScroll:{type:"boolean",default:!1},autoScrollSpeed:{type:"number",default:2}},edit:function(r){let{clientId:s,attributes:c,setAttributes:d}=r;const{dispatch:p,select:g}=wp.data,b=g("core/block-editor").getBlocksByClientId(s)[0].innerBlocks,m=(0,a.useBlockProps)({className:"splide__track"}),{children:u,...h}=(0,a.useInnerBlocksProps)(m,{template:[["sg-block/slide",{}]],allowedBlocks:["sg-block/slide"]});return(0,l.createElement)("div",(0,a.useBlockProps)(),(0,l.createElement)(a.BlockControls,null,(0,l.createElement)(n.ToolbarGroup,null,(0,l.createElement)(n.ToolbarButton,{icon:i,label:(0,t.__)("Add slide","slothtenberg-block-slider"),onClick:()=>(()=>{const l=g("core/editor").getBlocksByClientId(s)[0].innerBlocks.length;let t=(0,e.createBlock)("sg-block/slide");p("core/block-editor").insertBlock(t,l,s)})()}))),(0,l.createElement)(a.InspectorControls,null,(0,l.createElement)(n.Panel,null,(0,l.createElement)(n.PanelBody,{title:(0,t.__)("Basic","slothtenberg-block-slider"),initialOpen:!0},(0,l.createElement)(n.PanelRow,{className:"select-full-width"},(0,l.createElement)(n.SelectControl,{label:(0,t.__)("Type","slothtenberg-block-slider"),value:c.type,options:[{value:"slide",label:(0,t.__)("Slide","slothtenberg-block-slider")},{value:"loop",label:(0,t.__)("Loop","slothtenberg-block-slider")},{value:"fade",label:(0,t.__)("fade","slothtenberg-block-slider")}],onChange:e=>d({type:e}),__nextHasNoMarginBottom:!0})),(0,l.createElement)(n.PanelRow,null,(0,l.createElement)(n.__experimentalNumberControl,{label:(0,t.__)("Slides per Page","slothtenberg-slider"),labelPosition:"side",min:1,max:6,isShiftStepEnabled:!0,onChange:e=>d({perPage:parseInt(e)}),value:parseInt(c.perPage),className:"justify-space-between"})),(0,l.createElement)(n.PanelRow,null,(0,l.createElement)(n.__experimentalNumberControl,{label:(0,t.__)("Slides per Move","slothtenberg-slider"),labelPosition:"side",min:1,max:6,isShiftStepEnabled:!0,onChange:e=>d({perMove:parseInt(e)}),value:parseInt(c.perMove),className:"justify-space-between"})),(0,l.createElement)(n.PanelRow,null,(0,l.createElement)(n.__experimentalNumberControl,{label:(0,t.__)("Speed","slothtenberg-slider"),labelPosition:"side",onChange:e=>d({speed:parseInt(e)}),value:parseInt(c.speed),className:"justify-space-between"})),(0,l.createElement)(n.PanelRow,{className:"unit-full-width"},(0,l.createElement)(n.__experimentalUnitControl,{label:(0,t.__)("Gap","slothtenberg-block-slider"),labelPosition:"side",value:c.gap,onChange:e=>d({gap:e})})),(0,l.createElement)(n.PanelRow,{className:"toggle-full-name"},(0,l.createElement)(n.ToggleControl,{label:(0,t.__)("Arrows","slothtenberg-slider"),checked:c.arrows,onChange:e=>d({arrows:e})})),(0,l.createElement)(n.PanelRow,{className:"toggle-full-name"},(0,l.createElement)(n.ToggleControl,{label:(0,t.__)("Pagination","slothtenberg-slider"),checked:c.pagination,onChange:e=>d({pagination:e})})),(0,l.createElement)(n.PanelRow,{className:"align-controls"},(0,l.createElement)(n.__experimentalUnitControl,{label:(0,t.__)("Width","slothtenberg-block-slider"),value:c.width,onChange:e=>d({width:e})}),(0,l.createElement)(n.__experimentalUnitControl,{label:(0,t.__)("Height","slothtenberg-block-slider"),value:c.height,onChange:e=>d({height:e})}))),(0,l.createElement)(n.PanelBody,{title:(0,t.__)("Auto Play","slothtenberg-block-slider"),initialOpen:!1},(0,l.createElement)(n.PanelRow,{className:"toggle-full-name"},(0,l.createElement)(n.ToggleControl,{label:(0,t.__)("Autoplay","slothtenberg-slider"),checked:c.autoplay,onChange:e=>d({autoplay:e})})),(0,l.createElement)(n.PanelRow,{className:"toggle-full-name"},(0,l.createElement)(n.ToggleControl,{label:(0,t.__)("Pause on Hover","slothtenberg-slider"),checked:c.pauseOnHover,onChange:e=>d({pauseOnHover:e})})),(0,l.createElement)(n.PanelRow,null,(0,l.createElement)(n.__experimentalNumberControl,{label:(0,t.__)("Autoplay Interval","slothtenberg-slider"),labelPosition:"side",onChange:e=>d({interval:parseInt(e)}),value:parseInt(c.interval),className:"justify-space-between"}))),(0,l.createElement)(n.PanelBody,{title:(0,t.__)("More options","slothtenberg-block-slider"),initialOpen:!1},(0,l.createElement)(n.PanelRow,{className:"unit-full-width"},(0,l.createElement)(n.__experimentalUnitControl,{label:(0,t.__)("Padding","slothtenberg-block-slider"),labelPosition:"side",value:c.padding,onChange:e=>d({Padding:e})})),(0,l.createElement)(n.PanelRow,null,(0,l.createElement)(n.__experimentalNumberControl,{label:(0,t.__)("Start","slothtenberg-slider"),labelPosition:"side",min:1,max:b.length,isShiftStepEnabled:!0,onChange:e=>d({start:parseInt(e)}),value:parseInt(c.start),className:"justify-space-between"})),(0,l.createElement)(n.PanelRow,{className:"toggle-full-name"},(0,l.createElement)(n.ToggleControl,{label:(0,t.__)("Rewind","slothtenberg-slider"),checked:c.rewind,onChange:e=>d({rewind:e})})),(0,l.createElement)(n.PanelRow,null,(0,l.createElement)(n.__experimentalNumberControl,{label:(0,t.__)("Rewind Speed","slothtenberg-slider"),labelPosition:"side",onChange:e=>d({rewindSpeed:parseInt(e)}),value:parseInt(c.rewindSpeed),className:"justify-space-between"})),(0,l.createElement)(n.PanelRow,{className:"toggle-full-name"},(0,l.createElement)(n.ToggleControl,{label:(0,t.__)("Rewind by drag","slothtenberg-slider"),checked:c.rewindByDrag,onChange:e=>d({rewindByDrag:e})})),(0,l.createElement)(n.PanelRow,{className:"select-full-width"},(0,l.createElement)(n.SelectControl,{label:(0,t.__)("Pagination Direction","slothtenberg-block-slider"),value:c.paginationDirection,options:[{value:"ltr",label:(0,t.__)("Left to right","slothtenberg-block-slider")},{value:"rtl",label:(0,t.__)("Right to left","slothtenberg-block-slider")},{value:"ttb",label:(0,t.__)("Top to bottom","slothtenberg-block-slider")}],onChange:e=>d({paginationDirection:e}),__nextHasNoMarginBottom:!0})),(0,l.createElement)(n.PanelRow,{className:"select-full-width"},(0,l.createElement)(n.SelectControl,{label:(0,t.__)("Direction","slothtenberg-block-slider"),value:c.direction,options:[{value:"ltr",label:(0,t.__)("Left to right","slothtenberg-block-slider")},{value:"rtl",label:(0,t.__)("Right to left","slothtenberg-block-slider")},{value:"ttb",label:(0,t.__)("Top to bottom","slothtenberg-block-slider")}],onChange:e=>d({direction:e}),__nextHasNoMarginBottom:!0})),(0,l.createElement)(n.PanelRow,{className:"select-full-width"},(0,l.createElement)(n.SelectControl,{label:(0,t.__)("Drag","slothtenberg-block-slider"),value:c.drag,options:[{value:"true",label:(0,t.__)("Enabled","slothtenberg-block-slider")},{value:"false",label:(0,t.__)("Disabled","slothtenberg-block-slider")},{value:"free",label:(0,t.__)("Free","slothtenberg-block-slider")}],onChange:e=>d({drag:e}),__nextHasNoMarginBottom:!0})),(0,l.createElement)(n.PanelRow,{className:"toggle-full-name"},(0,l.createElement)(n.ToggleControl,{label:(0,t.__)("Lazy load","slothtenberg-slider"),checked:c.lazyLoad,onChange:e=>d({lazyLoad:e})}))),(0,l.createElement)(n.PanelBody,{title:(0,t.__)("Auto Scroll","slothtenberg-block-slider"),initialOpen:!1},(0,l.createElement)(n.PanelRow,{className:"toggle-full-name"},(0,l.createElement)(n.ToggleControl,{label:(0,t.__)("Auto Scroll","slothtenberg-slider"),checked:c.autoScroll,onChange:e=>d({autoScroll:e})})),(0,l.createElement)(n.PanelRow,null,(0,l.createElement)(n.__experimentalNumberControl,{label:(0,t.__)("Auto Scroll Speed","slothtenberg-slider"),labelPosition:"side",isShiftStepEnabled:!0,onChange:e=>d({autoScrollSpeed:parseInt(e)}),value:parseInt(c.autoScrollSpeed),className:"justify-space-between"}))),(0,l.createElement)(n.PanelBody,{title:(0,t.__)("Responsive","slothtenberg-block-slider"),initialOpen:!1},(0,l.createElement)(n.PanelRow,null,(0,l.createElement)(n.__experimentalNumberControl,{label:(0,t.__)("Slides per Page Medium","slothtenberg-slider"),labelPosition:"side",min:1,max:6,isShiftStepEnabled:!0,onChange:e=>d({perPageMedium:parseInt(e)}),value:parseInt(c.perPageMedium),className:"justify-space-between"})),(0,l.createElement)(n.PanelRow,null,(0,l.createElement)(n.__experimentalNumberControl,{label:(0,t.__)("Slides per Page Small","slothtenberg-slider"),labelPosition:"side",min:1,max:6,isShiftStepEnabled:!0,onChange:e=>d({perPageSmall:parseInt(e)}),value:parseInt(c.perPageSmall),className:"justify-space-between"}))))),(()=>{if(0==b.length)return(0,l.createElement)("div",{className:"empty"},(0,l.createElement)("div",{className:"header"},(0,l.createElement)(n.Icon,{icon:o}),"Block Slider"),(0,l.createElement)("p",null,(0,t.__)("Add slides and design inside the content you want","slothtenberg-block-slider")))})(),(0,l.createElement)("div",h,(0,l.createElement)("ul",{className:`c${c.perPage}`,style:{gap:c.gap}},u)))},save:function(e){let{attributes:t}=e,n={type:t.type,perPage:t.perPage,rewind:t.rewind,speed:t.speed,rewindSpeed:t.rewindSpeed,rewindByDrag:t.rewindByDrag,width:t.width,height:t.height,start:t.start,perMove:t.perMove,gap:t.gap,arrows:t.arrows,pagination:t.pagination,paginationDirection:t.paginationDirection,drag:"free"!=t.drag?"true"==t.drag:t.drag,autoplay:t.autoplay,interval:t.interval,pauseOnHover:t.pauseOnHover,lazyLoad:t.lazyLoad,direction:t.direction,breakpoints:{900:{perPage:t.perPageMedium},600:{perPage:t.perPageSmall}}};t.autoScroll&&(n={...n,autoScroll:{speed:t.autoScrollSpeed}});const r=a.useBlockProps.save({className:"splide"});return(0,l.createElement)("div",s({},r,{"data-splide":JSON.stringify(n)}),(0,l.createElement)("div",{className:"splide__track"},(0,l.createElement)("ul",{className:"splide__list"},(0,l.createElement)(a.InnerBlocks.Content,null))))}})}},t={};function a(e){var n=t[e];if(void 0!==n)return n.exports;var r=t[e]={exports:{}};return l[e](r,r.exports,a),r.exports}a.m=l,e=[],a.O=(l,t,n,r)=>{if(!t){var o=1/0;for(d=0;d<e.length;d++){for(var[t,n,r]=e[d],i=!0,s=0;s<t.length;s++)(!1&r||o>=r)&&Object.keys(a.O).every((e=>a.O[e](t[s])))?t.splice(s--,1):(i=!1,r<o&&(o=r));if(i){e.splice(d--,1);var c=n();void 0!==c&&(l=c)}}return l}r=r||0;for(var d=e.length;d>0&&e[d-1][2]>r;d--)e[d]=e[d-1];e[d]=[t,n,r]},a.o=(e,l)=>Object.prototype.hasOwnProperty.call(e,l),(()=>{var e={747:0,209:0};a.O.j=l=>0===e[l];var l=(l,t)=>{var n,r,[o,i,s]=t,c=0;if(o.some((l=>0!==e[l]))){for(n in i)a.o(i,n)&&(a.m[n]=i[n]);if(s)var d=s(a)}for(l&&l(t);c<o.length;c++)r=o[c],a.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return a.O(d)},t=globalThis.webpackChunkslothtenberg_block_slider=globalThis.webpackChunkslothtenberg_block_slider||[];t.forEach(l.bind(null,0)),t.push=l.bind(null,t.push.bind(t))})();var n=a.O(void 0,[209],(()=>a(654)));n=a.O(n)})();