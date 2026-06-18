import {f as fe,u as ue$1,s as sr,a as uL,C,c3 as Xn,E as En,U as Un,w,c$ as Xi,dw as Up,e as s,r as r$1,aW as Yp,c5 as Vde,dE as _h,b$ as DT,I,b7 as E3,J as zl,T as nw,bs as uN,a7 as lN,an as DO,aH as Ka,b8 as qme,b9 as Yme,H as Il,q as Qx,R as og,a1 as ft,A as Lp,ar as Ux,au as dg,aX as G9,aF as $9,aY as z9,aG as mk,aZ as hk,b0 as Qt$1,b1 as mv,c4 as C3,b4 as O3,cp as Hhe,c8 as Dde,bH as k3,c9 as Yhe,b6 as Yo,aB as Dx,aM as ww,aN as QA,aO as Ew,aP as e0,X as we,av as Gl,aw as co,ax as lo,cI as b3,b5 as $he,aJ as qhe,dF as Yue,ba as yNe,a2 as JE,dG as kO,a4 as mN,cH as rN,a6 as _N,as as oN,di as jue,dk as AO,aQ as hx,aR as fx,aS as px,n as nb,a3 as cNe,aA as Sx,br as iN,B as yw,a5 as yN,aD as Xy,aT as eN,aE as Qy}from'./main-QSTLMRDK.js';var ut=()=>({table:"PO Table",angular:"PO-UI"}),bt=r=>[r],Ge=(()=>{class r{static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-table-basic"]],standalone:false,decls:1,vars:4,consts:[[3,"p-items"]],template:function(l,o){l&1&&zl(0,"po-table",0),l&2&&nw("p-items",uN(2,bt,lN(1,ut)));},dependencies:[E3],encapsulation:2,changeDetection:1})}return r})();var St=r=>({"docs-sample-code-tabs":r}),Je=(()=>{class r{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-table-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Table Basic"),og(),Il(4,"a",2),ft("click",function(){return o.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-table-basic/sample-po-table-basic.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-table [p-items]="[{ table: 'PO Table', angular: 'PO-UI' }]"> </po-table>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-table-basic/sample-po-table-basic.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-table-basic',
  templateUrl: './sample-po-table-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTableBasicComponent {}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-table-basic"),og(),zl(23,"hr")),l&2&&(Lp(5),Ux("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,St,o.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,Ge],encapsulation:2})}return r})();var se=(()=>{class r{colors=["color-01","color-02","color-03","color-04","color-05","color-06","color-07","color-08","color-09","color-10","color-11","color-12","caption-tag-01","caption-tag-03","caption-tag-06","caption-tag-08","caption-tag-11","caption-tag-13","caption-tag-16","caption-tag-18","caption-tag-21","caption-tag-23","caption-tag-26","caption-tag-28","caption-tag-31","caption-tag-33"];generateNewItem(a){return {text:`Text ${a}`,page:`Link ${a}`,link:"https://po-ui.io/",number:a,date:this.generateRandomDate(),time:this.generateRandomTime(),dateTime:this.generateRandomDate(),currency:this.generateRandomNumber(),subtitle:this.generateRandomColor(),detail:[{info:"Detail Information 1",date:new Date,time:this.generateRandomTime(),currency:1500.5},{info:"Detail Information 2",date:new Date,time:this.generateRandomTime(),currency:6511}],label:this.generateRandomColor(),color:`Text ${a}`,icon:this.generateRandomIcon(a),boolean:this.generateRandomBoolean()}}getColumns(){return {text:{property:"text",width:"30%"},number:{property:"number",type:"number"},date:{property:"date",type:"date"},time:{property:"time",type:"time"},dateTime:{property:"dateTime",label:"DateTime",type:"dateTime"},currency:{property:"currency",type:"currency",format:"USD"},link:{property:"page",label:"Link",type:"link"},icon:{property:"icon",type:"icon"},boolean:{property:"boolean",type:"boolean"},subtitle:{property:"subtitle",type:"subtitle",width:"10%",subtitles:[{value:"color-01",color:"color-01",label:"Color 1",content:"1"},{value:"color-02",color:"color-02",label:"Color 2",content:"2"},{value:"color-03",color:"color-03",label:"Color 3",content:"3"},{value:"color-04",color:"color-04",label:"Color 4",content:"4"},{value:"color-05",color:"color-05",label:"Color 5",content:"5"},{value:"color-06",color:"color-06",label:"Color 6",content:"6"},{value:"color-07",color:"color-07",label:"Color 7",content:"7"},{value:"color-08",color:"color-08",label:"Color 8",content:"8"},{value:"color-09",color:"color-09",label:"Color 9",content:"9"},{value:"color-10",color:"color-10",label:"Color 10",content:"10"},{value:"color-11",color:"color-11",label:"Color 11",content:"11"},{value:"color-12",color:"color-12",label:"Color 12",content:"12"}]},label:{property:"label",type:"label",width:"10%",labels:[{value:"color-01",color:"color-01",label:"Color 1"},{value:"color-02",color:"color-02",label:"Color 2"},{value:"color-03",color:"color-03",label:"Color 3"},{value:"color-04",color:"color-04",label:"Color 4"},{value:"color-05",color:"color-05",label:"Color 5"},{value:"color-06",color:"color-06",label:"Color 6"},{value:"color-07",color:"color-07",label:"Color 7"},{value:"color-08",color:"color-08",label:"Color 8"},{value:"color-09",color:"color-09",label:"Color 9"},{value:"color-10",color:"color-10",label:"Color 10"},{value:"color-11",color:"color-11",label:"Color 11"},{value:"color-12",color:"color-12",label:"Color 12"},{value:"caption-tag-01",color:"caption-tag-01",label:"Caption 01"},{value:"caption-tag-03",color:"caption-tag-03",label:"Caption 03"},{value:"caption-tag-06",color:"caption-tag-06",label:"Caption 06"},{value:"caption-tag-08",color:"caption-tag-08",label:"Caption 08"},{value:"caption-tag-11",color:"caption-tag-11",label:"Caption 11"},{value:"caption-tag-13",color:"caption-tag-13",label:"Caption 13"},{value:"caption-tag-16",color:"caption-tag-16",label:"Caption 16"},{value:"caption-tag-18",color:"caption-tag-18",label:"Caption 18"},{value:"caption-tag-21",color:"caption-tag-21",label:"Caption 21"},{value:"caption-tag-23",color:"caption-tag-23",label:"Caption 23"},{value:"caption-tag-26",color:"caption-tag-26",label:"Caption 26"},{value:"caption-tag-28",color:"caption-tag-28",label:"Caption 28"},{value:"caption-tag-31",color:"caption-tag-31",label:"Caption 31"},{value:"caption-tag-33",color:"caption-tag-33",label:"Caption 33"}]},color:{property:"color",width:"10%",color:this.changeColor},detail:{property:"detail",type:"detail",detail:{columns:[{property:"info",label:"Detail"},{property:"date",label:"Detail Date",type:"date",format:"dd-MM-yy"},{property:"time",label:"Detail Time",type:"time"},{property:"currency",label:"Detail Currency",type:"currency"}],typeHeader:"inline"}}}}changeColor(a,l){return a[l].slice(5,7).trim()%2===0?"caption-tag-08":"caption-tag-13"}generateRandomBoolean(){return Math.random()>=.5}generateRandomNumber(){return (Math.random()*200+1).toFixed(3)}generateRandomColor(){return this.colors[Math.floor(Math.random()*this.colors.length)]}generateRandomIcon(a){let l=["an an-copy","an an-check","an an-camera","an an-plant","an an-building-apartment"],o=["an an-trash","an an-newspaper","an an-gas-pump","an an-chats","an an-bluetooth"],m=Math.floor(Math.random()*5);return [{value:`${a}`,icon:l[m],tooltip:l[m]},{value:`${a}`,icon:o[m],tooltip:o[m]}]}generateRandomTime(){let a=Math.floor(Math.random()*23),l=Math.floor(Math.random()*59),o=Math.floor(Math.random()*59),m=a<10?"0"+a.toString():a.toString(),p=l<10?"0"+l.toString():l.toString(),d=o<10?"0"+o.toString():o.toString();return `${m}:${p}:${d}`}generateRandomDate(){let a=Math.floor(Math.random()*28),l=Math.floor(Math.random()*12),o=Math.floor(Math.random()*24)+2e3;return new Date(o,l,a)}static \u0275fac=function(l){return new(l||r)};static \u0275prov=w({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();var Xe=(()=>{class r{samplePoTableLabsService;poModal;actions;actionsDefinition;actionTableFirst={action:this.openModal.bind(this),disabled:this.disableAction.bind(this),label:"First Action"};actionTableSecond={action:this.openModal.bind(this),label:"Second Action"};columns;columnsDefinition;columnsName;componentsSize;container;currentItem;customLiterals;event;height;items;itemIndex=0;literals;maxColumns;properties=["hideBatchActions","hideTableSearch"];selection;spacing=Xi.Medium;filterType=Up.startsWith;filteredColumns=[];actionsDefinitionOptions=[{label:"Actions",value:"actions"},{label:"Disable first action",value:"disableAction",disabled:true},{label:"Single action",value:"singleAction"},{label:"First action visible",value:"visibleAction"}];selectionOptions=[{label:"Selectable",value:"selectable"},{label:"Hide select all",value:"hideSelectAll",disabled:true},{label:"Single select",value:"singleSelect",disabled:true}];componentsSizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];filterModeOptions=[{label:"Starts With",value:Up.startsWith},{label:"Contains",value:Up.contains},{label:"Ends With",value:Up.endsWith}];columnsOptions=[{value:"text",label:"Text"},{value:"link",label:"Link"},{value:"number",label:"Number"},{value:"currency",label:"Currency"},{value:"date",label:"Date"},{value:"time",label:"Time"},{value:"dateTime",label:"DateTime"},{value:"subtitle",label:"Subtitle"},{value:"detail",label:"Detail"},{value:"label",label:"Label"},{value:"color",label:"Color"},{value:"icon",label:"Icon"},{value:"boolean",label:"Boolean"}];propertiesOptions=[{label:"Sort",value:"sort"},{label:"Striped",value:"striped"},{label:"Show more disabled",value:"showMoreDisabled"},{label:"Loading show more",value:"loadingShowMore"},{label:"Hide detail",value:"hideDetail"},{label:"Loading",value:"loading"},{label:"Auto collapse",value:"autoCollapse"},{label:"Hide columns manager",value:"hideColumnsManager"},{label:"Hide batch actions",value:"hideBatchActions"},{label:"Actions Right",value:"actionsRight"},{label:"Draggable",value:"draggable"},{label:"Hide action fixed columns",value:"fixed"},{label:"Hide Table Search",value:"hideTableSearch"},{label:"Virtual Scroll",value:"virtualScroll"}];typeHeaderOptions=[{label:"Inline",value:"inline"},{label:"None",value:"none"},{label:"Top",value:"top"}];typeSpacing=[{label:"ExtraSmall",value:"extraSmall"},{label:"Small",value:"small"},{label:"Medium",value:"medium"},{label:"Large",value:"large"}];constructor(a){this.samplePoTableLabsService=a,this.columnsDefinition=this.samplePoTableLabsService?.getColumns();}ngOnInit(){this.restore();}addItem(){this.items=[...this.items,this.samplePoTableLabsService.generateNewItem(this.itemIndex)],this.itemIndex++;}changeActionOptions(){let a=this.actionsDefinition.actions;this.actionsDefinitionOptions[1].disabled=!a,this.actionsDefinitionOptions[2].disabled=!a,this.actionsDefinitionOptions[3].disabled=!a,this.actionsDefinitionOptions=[].concat(this.actionsDefinitionOptions),this.actions=a?this.actionsDefinition.singleAction?[this.actionTableFirst]:[this.actionTableFirst,this.actionTableSecond]:[],this.actionTableFirst.visible=this.actionsDefinition.visibleAction,this.spacingSelectOrAction();}changeEvent(a){this.event=a;}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals);}catch(a){this.customLiterals=void 0;}}changeFilteredColumns(){this.filteredColumns=this.filteredColumns.toString().split(/,\s*/);}changeSelectionOptions(){let a=this.selection.includes("singleSelect"),l=this.selection.includes("selectable");this.selectionOptions[1].disabled=a||!l,this.selectionOptions[2].disabled=!l,this.selectionOptions=[].concat(this.selectionOptions),this.spacingSelectOrAction();}deleteItems(a){this.height&&(this.items=a);}disableAction(){return this.actionsDefinition.disableAction}openModal(a){this.currentItem=a.text,this.poModal.open();}restore(){this.actionsDefinition={visibleAction:null},this.actions=[],this.columnsDefinition.detail.detail.typeHeader=void 0,this.columnsName=[],this.container="",this.customLiterals=void 0,this.height=void 0,this.componentsSize="medium",this.items=[],this.itemIndex=0,this.literals="",this.maxColumns=void 0,this.properties=["hideBatchActions","hideTableSearch"],this.selection=[],this.spacing=Xi.Medium,this.filteredColumns=[],this.updateColumns(),this.changeActionOptions();}showMore(){this.addItem();}updateColumns(){this.columns=[],this.columnsName.forEach(a=>{this.columns.push(this.columnsDefinition[a]);});}spacingSelectOrAction(){this.columnsName.length>0&&this.updateColumns();}static \u0275fac=function(l){return new(l||r)(C(se))};static \u0275cmp=Un({type:r,selectors:[["sample-po-table-labs"]],viewQuery:function(l,o){if(l&1&&Gl(Yo,7),l&2){let m;co(m=lo())&&(o.poModal=m.first);}},standalone:false,features:[we([se])],decls:34,vars:51,consts:[["f","ngForm"],[3,"p-all-selected","p-all-unselected","p-change-fixed-columns","p-collapsed","p-expanded","p-selected","p-show-more","p-unselected","p-delete-items","p-actions","p-actions-right","p-columns","p-container","p-height","p-filter-type","p-components-size","p-hide-detail","p-hide-columns-manager","p-hide-batch-actions","p-hide-table-search","p-hide-select-all","p-items","p-literals","p-filtered-columns","p-loading","p-max-columns","p-selectable","p-spacing","p-loading-show-more","p-show-more-disabled","p-single-select","p-sort","p-striped","p-virtual-scroll","p-auto-collapse","p-draggable","p-hide-action-fixed-columns"],[1,"po-row"],["p-label","Event",1,"po-md-12",3,"p-value"],["p-label","Add Item",1,"po-md-3",3,"p-click"],["name","columnsName","p-label","Columns","p-columns","4",1,"po-md-12",3,"ngModelChange","p-change","ngModel","p-options"],["p-columns","3","name","typeHeader","p-label","Column detail typeHeader",1,"po-lg-9",3,"ngModelChange","ngModel","p-options"],["name","hideSelect","p-label","Column detail hideSelect",1,"po-lg-3",3,"ngModelChange","ngModel"],["name","properties","p-label","Properties","p-columns","4",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","actionsDefinition","p-columns","4","p-indeterminate","","p-label","Actions",1,"po-lg-12",3,"ngModelChange","p-change","ngModel","p-options"],["name","spacing","p-columns","4","p-help","Para aplicar o tamanho extraSmall, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).","p-label","Spacing",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","selection","p-columns","4","p-help","To enable 'hide select all' and 'single select' check 'selectable'.","p-label","Selection",1,"po-lg-12",3,"ngModelChange","p-change","ngModel","p-options"],["name","filterMode","p-columns","4","p-label","Filter mode",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Components size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","literals","p-help",'Ex.: {"noData": "Sem dados a serem exibidos", "noColumns": "Colunas n\xE3o definidas"}',"p-label","Literals",1,"po-md-12","po-lg-6",3,"ngModelChange","p-change","ngModel"],["name","filteredColumns","p-help",'Ex.: "text, time"',"p-label","Filter Columns",1,"po-md-6",3,"ngModelChange","p-change","ngModel"],["name","height","p-clean","","p-help","Height of table","p-label","Height",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","maxColumns","p-clean","","p-help","Max columns to be visible","p-label","Max Columns",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"],["p-click-out","true","p-size","sm","p-title","PO Table"],["p-label","Chosen Item:",3,"p-value"]],template:function(l,o){if(l&1){let m=Dx();Il(0,"po-table",1),ft("p-all-selected",function(){return o.changeEvent("p-all-selected")})("p-all-unselected",function(){return o.changeEvent("p-all-unselected")})("p-change-fixed-columns",function(){return o.changeEvent("p-change-fixed-columns")})("p-collapsed",function(){return o.changeEvent("p-collapsed")})("p-expanded",function(){return o.changeEvent("p-expanded")})("p-selected",function(){return o.changeEvent("p-selected")})("p-show-more",function(){return o.showMore()})("p-unselected",function(){return o.changeEvent("p-unselected")})("p-delete-items",function(d){return o.deleteItems(d)}),og(),zl(1,"po-divider"),Il(2,"div",2),zl(3,"po-info",3),og(),zl(4,"po-divider"),Il(5,"div",2)(6,"po-button",4),ft("p-click",function(){return o.addItem()}),og()(),zl(7,"po-divider"),Il(8,"form",null,0)(10,"div",2)(11,"po-checkbox-group",5),ww("ngModelChange",function(d){return Xy(m),eN(o.columnsName,d)||(o.columnsName=d),Qy(d)}),ft("p-change",function(){return o.updateColumns()}),og(),QA(),og(),Il(12,"div",2)(13,"po-radio-group",6),ww("ngModelChange",function(d){return Xy(m),eN(o.columnsDefinition.detail.detail.typeHeader,d)||(o.columnsDefinition.detail.detail.typeHeader=d),Qy(d)}),og(),QA(),Il(14,"po-switch",7),ww("ngModelChange",function(d){return Xy(m),eN(o.columnsDefinition.detail.detail.hideSelect,d)||(o.columnsDefinition.detail.detail.hideSelect=d),Qy(d)}),og(),QA(),og(),Il(15,"div",2)(16,"po-checkbox-group",8),ww("ngModelChange",function(d){return Xy(m),eN(o.properties,d)||(o.properties=d),Qy(d)}),og(),QA(),og(),Il(17,"div",2)(18,"po-checkbox-group",9),ww("ngModelChange",function(d){return Xy(m),eN(o.actionsDefinition,d)||(o.actionsDefinition=d),Qy(d)}),ft("p-change",function(){return o.changeActionOptions()}),og(),QA(),og(),Il(19,"div",2)(20,"po-radio-group",10),ww("ngModelChange",function(d){return Xy(m),eN(o.spacing,d)||(o.spacing=d),Qy(d)}),og(),QA(),og(),Il(21,"div",2)(22,"po-checkbox-group",11),ww("ngModelChange",function(d){return Xy(m),eN(o.selection,d)||(o.selection=d),Qy(d)}),ft("p-change",function(){return o.changeSelectionOptions()}),og(),QA(),Il(23,"po-radio-group",12),ww("ngModelChange",function(d){return Xy(m),eN(o.filterType,d)||(o.filterType=d),Qy(d)}),og(),QA(),Il(24,"po-radio-group",13),ww("ngModelChange",function(d){return Xy(m),eN(o.componentsSize,d)||(o.componentsSize=d),Qy(d)}),og(),QA(),og(),Il(25,"div",2)(26,"po-input",14),ww("ngModelChange",function(d){return Xy(m),eN(o.literals,d)||(o.literals=d),Qy(d)}),ft("p-change",function(){return o.changeLiterals()}),og(),QA(),Il(27,"po-input",15),ww("ngModelChange",function(d){return Xy(m),eN(o.filteredColumns,d)||(o.filteredColumns=d),Qy(d)}),ft("p-change",function(){return o.changeFilteredColumns()}),og(),QA(),Il(28,"po-number",16),ww("ngModelChange",function(d){return Xy(m),eN(o.height,d)||(o.height=d),Qy(d)}),og(),QA(),Il(29,"po-number",17),ww("ngModelChange",function(d){return Xy(m),eN(o.maxColumns,d)||(o.maxColumns=d),Qy(d)}),og(),QA(),og(),Il(30,"div",2)(31,"po-button",18),ft("p-click",function(){return o.restore()}),og()()(),Il(32,"po-modal",19),zl(33,"po-info",20),og();}l&2&&(nw("p-actions",o.actions)("p-actions-right",o.properties.includes("actionsRight"))("p-columns",o.columns)("p-container",o.container)("p-height",o.height)("p-filter-type",o.filterType)("p-components-size",o.componentsSize)("p-hide-detail",o.properties.includes("hideDetail"))("p-hide-columns-manager",o.properties.includes("hideColumnsManager"))("p-hide-batch-actions",o.properties.includes("hideBatchActions"))("p-hide-table-search",o.properties.includes("hideTableSearch"))("p-hide-select-all",o.selection.includes("hideSelectAll"))("p-items",o.items)("p-literals",o.customLiterals)("p-filtered-columns",o.filteredColumns)("p-loading",o.properties.includes("loading"))("p-max-columns",o.maxColumns)("p-selectable",o.selection.includes("selectable"))("p-spacing",o.spacing)("p-loading-show-more",o.properties.includes("loadingShowMore"))("p-show-more-disabled",o.properties.includes("showMoreDisabled"))("p-single-select",o.selection.includes("singleSelect"))("p-sort",o.properties.includes("sort"))("p-striped",o.properties.includes("striped"))("p-virtual-scroll",o.properties.includes("virtualScroll"))("p-auto-collapse",o.properties.includes("autoCollapse"))("p-draggable",o.properties.includes("draggable"))("p-hide-action-fixed-columns",o.properties.includes("fixed")),Lp(3),nw("p-value",o.event),Lp(8),Ew("ngModel",o.columnsName),nw("p-options",o.columnsOptions),e0(),Lp(2),Ew("ngModel",o.columnsDefinition.detail.detail.typeHeader),nw("p-options",o.typeHeaderOptions),e0(),Lp(),Ew("ngModel",o.columnsDefinition.detail.detail.hideSelect),e0(),Lp(2),Ew("ngModel",o.properties),nw("p-options",o.propertiesOptions),e0(),Lp(2),Ew("ngModel",o.actionsDefinition),nw("p-options",o.actionsDefinitionOptions),e0(),Lp(2),Ew("ngModel",o.spacing),nw("p-options",o.typeSpacing),e0(),Lp(2),Ew("ngModel",o.selection),nw("p-options",o.selectionOptions),e0(),Lp(),Ew("ngModel",o.filterType),nw("p-options",o.filterModeOptions),e0(),Lp(),Ew("ngModel",o.componentsSize),nw("p-options",o.componentsSizeOptions),e0(),Lp(2),Ew("ngModel",o.literals),e0(),Lp(),Ew("ngModel",o.filteredColumns),e0(),Lp(),Ew("ngModel",o.height),e0(),Lp(),Ew("ngModel",o.maxColumns),e0(),Lp(4),nw("p-value",o.currentItem));},dependencies:[G9,$9,z9,mk,hk,Qt$1,mv,C3,O3,Hhe,Dde,k3,Yhe,Yo,E3],encapsulation:2,changeDetection:1})}return r})();var vt=r=>({"docs-sample-code-tabs":r}),Ke=(()=>{class r{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-table-labs-view"]],standalone:false,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Table Labs"),og(),Il(4,"a",2),ft("click",function(){return o.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-table-labs/sample-po-table-labs.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-table
  [p-actions]="actions"
  [p-actions-right]="properties.includes('actionsRight')"
  [p-columns]="columns"
  [p-container]="container"
  [p-height]="height"
  [p-filter-type]="filterType"
  [p-components-size]="componentsSize"
  [p-hide-detail]="properties.includes('hideDetail')"
  [p-hide-columns-manager]="properties.includes('hideColumnsManager')"
  [p-hide-batch-actions]="properties.includes('hideBatchActions')"
  [p-hide-table-search]="properties.includes('hideTableSearch')"
  [p-hide-select-all]="selection.includes('hideSelectAll')"
  [p-items]="items"
  [p-literals]="customLiterals"
  [p-filtered-columns]="filteredColumns"
  [p-loading]="properties.includes('loading')"
  [p-max-columns]="maxColumns"
  [p-selectable]="selection.includes('selectable')"
  [p-spacing]="spacing"
  [p-loading-show-more]="properties.includes('loadingShowMore')"
  [p-show-more-disabled]="properties.includes('showMoreDisabled')"
  [p-single-select]="selection.includes('singleSelect')"
  [p-sort]="properties.includes('sort')"
  [p-striped]="properties.includes('striped')"
  [p-virtual-scroll]="properties.includes('virtualScroll')"
  (p-all-selected)="changeEvent('p-all-selected')"
  (p-all-unselected)="changeEvent('p-all-unselected')"
  (p-change-fixed-columns)="changeEvent('p-change-fixed-columns')"
  (p-collapsed)="changeEvent('p-collapsed')"
  (p-expanded)="changeEvent('p-expanded')"
  (p-selected)="changeEvent('p-selected')"
  (p-show-more)="showMore()"
  (p-unselected)="changeEvent('p-unselected')"
  [p-auto-collapse]="properties.includes('autoCollapse')"
  (p-delete-items)="deleteItems($event)"
  [p-draggable]="properties.includes('draggable')"
  [p-hide-action-fixed-columns]="properties.includes('fixed')"
>
</po-table>

<po-divider></po-divider>

<div class="po-row">
  <po-info class="po-md-12" p-label="Event" [p-value]="event"> </po-info>
</div>

<po-divider></po-divider>

<div class="po-row">
  <po-button class="po-md-3" p-label="Add Item" (p-click)="addItem()"> </po-button>
</div>

<po-divider></po-divider>

<form #f="ngForm">
  <div class="po-row">
    <po-checkbox-group
      class="po-md-12"
      name="columnsName"
      [(ngModel)]="columnsName"
      p-label="Columns"
      p-columns="4"
      [p-options]="columnsOptions"
      (p-change)="updateColumns()"
    >
    </po-checkbox-group>
  </div>

  <div class="po-row">
    <po-radio-group
      class="po-lg-9"
      p-columns="3"
      name="typeHeader"
      [(ngModel)]="columnsDefinition.detail.detail.typeHeader"
      p-label="Column detail typeHeader"
      [p-options]="typeHeaderOptions"
    >
    </po-radio-group>

    <po-switch
      class="po-lg-3"
      name="hideSelect"
      [(ngModel)]="columnsDefinition.detail.detail.hideSelect"
      p-label="Column detail hideSelect"
    >
    </po-switch>
  </div>

  <div class="po-row">
    <po-checkbox-group
      class="po-lg-12"
      name="properties"
      [(ngModel)]="properties"
      p-label="Properties"
      p-columns="4"
      [p-options]="propertiesOptions"
    >
    </po-checkbox-group>
  </div>

  <div class="po-row">
    <po-checkbox-group
      class="po-lg-12"
      name="actionsDefinition"
      [(ngModel)]="actionsDefinition"
      p-columns="4"
      p-indeterminate
      p-label="Actions"
      [p-options]="actionsDefinitionOptions"
      (p-change)="changeActionOptions()"
    >
    </po-checkbox-group>
  </div>

  <div class="po-row">
    <po-radio-group
      class="po-lg-12"
      name="spacing"
      [(ngModel)]="spacing"
      p-columns="4"
      p-help="Para aplicar o tamanho extraSmall, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
      p-label="Spacing"
      [p-options]="typeSpacing"
    >
    </po-radio-group>
  </div>

  <div class="po-row">
    <po-checkbox-group
      class="po-lg-12"
      name="selection"
      [(ngModel)]="selection"
      p-columns="4"
      p-help="To enable 'hide select all' and 'single select' check 'selectable'."
      p-label="Selection"
      [p-options]="selectionOptions"
      (p-change)="changeSelectionOptions()"
    >
    </po-checkbox-group>

    <po-radio-group
      class="po-md-12"
      name="filterMode"
      [(ngModel)]="filterType"
      p-columns="4"
      p-label="Filter mode"
      [p-options]="filterModeOptions"
    >
    </po-radio-group>

    <po-radio-group
      class="po-md-12"
      name="size"
      [(ngModel)]="componentsSize"
      p-columns="4"
      p-label="Components size"
      p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
      [p-options]="componentsSizeOptions"
    >
    </po-radio-group>
  </div>

  <div class="po-row">
    <po-input
      class="po-md-12 po-lg-6"
      name="literals"
      [(ngModel)]="literals"
      p-help='Ex.: {"noData": "Sem dados a serem exibidos", "noColumns": "Colunas n\xE3o definidas"}'
      p-label="Literals"
      (p-change)="changeLiterals()"
    >
    </po-input>

    <po-input
      class="po-md-6"
      name="filteredColumns"
      [(ngModel)]="filteredColumns"
      p-help='Ex.: "text, time"'
      p-label="Filter Columns"
      (p-change)="changeFilteredColumns()"
    >
    </po-input>

    <po-number
      class="po-md-6 po-lg-3"
      name="height"
      [(ngModel)]="height"
      p-clean
      p-help="Height of table"
      p-label="Height"
    >
    </po-number>

    <po-number
      class="po-md-6 po-lg-3"
      name="maxColumns"
      [(ngModel)]="maxColumns"
      p-clean
      p-help="Max columns to be visible"
      p-label="Max Columns"
    >
    </po-number>
  </div>

  <div class="po-row">
    <po-button class="po-md-3" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>

<po-modal p-click-out="true" p-size="sm" p-title="PO Table">
  <po-info p-label="Chosen Item:" [p-value]="currentItem"> </po-info>
</po-modal>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-table-labs/sample-po-table-labs.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';

import {
  PoCheckboxGroupOption,
  PoModalComponent,
  PoRadioGroupOption,
  PoSearchFilterMode,
  PoTableAction,
  PoTableColumn,
  PoTableColumnSpacing,
  PoTableLiterals
} from '@po-ui/ng-components';

import { SamplePoTableLabsService } from './sample-po-table-labs.service';

@Component({
  selector: 'sample-po-table-labs',
  templateUrl: './sample-po-table-labs.component.html',
  providers: [SamplePoTableLabsService],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTableLabsComponent implements OnInit {
  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;

  actions: Array<PoTableAction>;
  actionsDefinition: any;
  actionTableFirst: PoTableAction = {
    action: this.openModal.bind(this),
    disabled: this.disableAction.bind(this),
    label: 'First Action'
  };
  actionTableSecond: PoTableAction = { action: this.openModal.bind(this), label: 'Second Action' };

  columns: Array<PoTableColumn>;
  columnsDefinition: any;
  columnsName: Array<string>;
  componentsSize: string;
  container: string;
  currentItem: string;
  customLiterals: PoTableLiterals;
  event: string;
  height: number;
  items: Array<any>;
  itemIndex = 0;
  literals: string;
  maxColumns: number;
  properties: Array<string> = ['hideBatchActions', 'hideTableSearch'];
  selection: Array<string>;
  spacing: PoTableColumnSpacing = PoTableColumnSpacing.Medium;
  filterType: PoSearchFilterMode = PoSearchFilterMode.startsWith;
  filteredColumns: Array<string> = [];

  actionsDefinitionOptions: Array<PoCheckboxGroupOption> = [
    { label: 'Actions', value: 'actions' },
    { label: 'Disable first action', value: 'disableAction', disabled: true },
    { label: 'Single action', value: 'singleAction' },
    { label: 'First action visible', value: 'visibleAction' }
  ];

  selectionOptions: Array<PoCheckboxGroupOption> = [
    { label: 'Selectable', value: 'selectable' },
    { label: 'Hide select all', value: 'hideSelectAll', disabled: true },
    { label: 'Single select', value: 'singleSelect', disabled: true }
  ];

  public readonly componentsSizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  public readonly filterModeOptions: Array<PoRadioGroupOption> = [
    { label: 'Starts With', value: PoSearchFilterMode.startsWith },
    { label: 'Contains', value: PoSearchFilterMode.contains },
    { label: 'Ends With', value: PoSearchFilterMode.endsWith }
  ];

  public readonly columnsOptions: Array<PoCheckboxGroupOption> = [
    { value: 'text', label: 'Text' },
    { value: 'link', label: 'Link' },
    { value: 'number', label: 'Number' },
    { value: 'currency', label: 'Currency' },
    { value: 'date', label: 'Date' },
    { value: 'time', label: 'Time' },
    { value: 'dateTime', label: 'DateTime' },
    { value: 'subtitle', label: 'Subtitle' },
    { value: 'detail', label: 'Detail' },
    { value: 'label', label: 'Label' },
    { value: 'color', label: 'Color' },
    { value: 'icon', label: 'Icon' },
    { value: 'boolean', label: 'Boolean' }
  ];

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { label: 'Sort', value: 'sort' },
    { label: 'Striped', value: 'striped' },
    { label: 'Show more disabled', value: 'showMoreDisabled' },
    { label: 'Loading show more', value: 'loadingShowMore' },
    { label: 'Hide detail', value: 'hideDetail' },
    { label: 'Loading', value: 'loading' },
    { label: 'Auto collapse', value: 'autoCollapse' },
    { label: 'Hide columns manager', value: 'hideColumnsManager' },
    { label: 'Hide batch actions', value: 'hideBatchActions' },
    { label: 'Actions Right', value: 'actionsRight' },
    { label: 'Draggable', value: 'draggable' },
    { label: 'Hide action fixed columns', value: 'fixed' },
    { label: 'Hide Table Search', value: 'hideTableSearch' },
    { label: 'Virtual Scroll', value: 'virtualScroll' }
  ];

  public readonly typeHeaderOptions: Array<PoRadioGroupOption> = [
    { label: 'Inline', value: 'inline' },
    { label: 'None', value: 'none' },
    { label: 'Top', value: 'top' }
  ];

  public readonly typeSpacing: Array<PoRadioGroupOption> = [
    { label: 'ExtraSmall', value: 'extraSmall' },
    { label: 'Small', value: 'small' },
    { label: 'Medium', value: 'medium' },
    { label: 'Large', value: 'large' }
  ];

  constructor(private samplePoTableLabsService: SamplePoTableLabsService) {
    this.columnsDefinition = this.samplePoTableLabsService?.getColumns();
  }

  ngOnInit() {
    this.restore();
  }

  addItem() {
    this.items = [...this.items, this.samplePoTableLabsService.generateNewItem(this.itemIndex)];
    this.itemIndex++;
  }

  changeActionOptions() {
    const actions = this.actionsDefinition.actions;

    this.actionsDefinitionOptions[1].disabled = !actions;
    this.actionsDefinitionOptions[2].disabled = !actions;
    this.actionsDefinitionOptions[3].disabled = !actions;

    this.actionsDefinitionOptions = [].concat(this.actionsDefinitionOptions);

    this.actions = actions
      ? this.actionsDefinition.singleAction
        ? [this.actionTableFirst]
        : [this.actionTableFirst, this.actionTableSecond]
      : [];
    this.actionTableFirst.visible = this.actionsDefinition.visibleAction;
    this.spacingSelectOrAction();
  }

  changeEvent(event: string) {
    this.event = event;
  }

  changeLiterals() {
    try {
      this.customLiterals = JSON.parse(this.literals);
    } catch {
      this.customLiterals = undefined;
    }
  }

  changeFilteredColumns() {
    this.filteredColumns = this.filteredColumns.toString().split(/,\\s*/);
  }

  changeSelectionOptions() {
    const singleSelect = this.selection.includes('singleSelect');
    const selectable = this.selection.includes('selectable');

    this.selectionOptions[1].disabled = singleSelect || !selectable;
    this.selectionOptions[2].disabled = !selectable;

    this.selectionOptions = [].concat(this.selectionOptions);
    this.spacingSelectOrAction();
  }

  deleteItems(items: Array<any>) {
    if (this.height) {
      this.items = items;
    }
  }

  disableAction() {
    return this.actionsDefinition.disableAction;
  }

  openModal(row) {
    this.currentItem = row.text;
    this.poModal.open();
  }

  restore() {
    this.actionsDefinition = { visibleAction: null };
    this.actions = [];
    //this.columnsDefinition = this.samplePoTableLabsService.getColumns();
    this.columnsDefinition.detail.detail.typeHeader = undefined;
    this.columnsName = [];
    this.container = '';
    this.customLiterals = undefined;
    this.height = undefined;
    this.componentsSize = 'medium';
    this.items = [];
    this.itemIndex = 0;
    this.literals = '';
    this.maxColumns = undefined;
    this.properties = ['hideBatchActions', 'hideTableSearch'];
    this.selection = [];
    this.spacing = PoTableColumnSpacing.Medium;
    this.filteredColumns = [];

    this.updateColumns();
    this.changeActionOptions();
  }

  showMore() {
    this.addItem();
  }

  updateColumns() {
    this.columns = [];
    this.columnsName.forEach(column => {
      this.columns.push(this.columnsDefinition[column]);
    });
  }

  private spacingSelectOrAction() {
    if (this.columnsName.length > 0) {
      this.updateColumns();
    }
  }
}
`),og(),Il(21,"label",6),Qx(22,"sample-po-table-labs/sample-po-table-labs.service.ts"),og(),Il(23,"pre",9),Qx(24,`import { Injectable } from '@angular/core';

import { PoTableColumn } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class SamplePoTableLabsService {
  private readonly colors = [
    'color-01',
    'color-02',
    'color-03',
    'color-04',
    'color-05',
    'color-06',
    'color-07',
    'color-08',
    'color-09',
    'color-10',
    'color-11',
    'color-12',
    'caption-tag-01',
    'caption-tag-03',
    'caption-tag-06',
    'caption-tag-08',
    'caption-tag-11',
    'caption-tag-13',
    'caption-tag-16',
    'caption-tag-18',
    'caption-tag-21',
    'caption-tag-23',
    'caption-tag-26',
    'caption-tag-28',
    'caption-tag-31',
    'caption-tag-33'
  ];

  generateNewItem(index: number) {
    return {
      text: \`Text \${index}\`,
      page: \`Link \${index}\`,
      link: 'https://po-ui.io/',
      number: index,
      date: this.generateRandomDate(),
      time: this.generateRandomTime(),
      dateTime: this.generateRandomDate(),
      currency: this.generateRandomNumber(),
      subtitle: this.generateRandomColor(),
      detail: [
        { info: \`Detail Information 1\`, date: new Date(), time: this.generateRandomTime(), currency: 1500.5 },
        { info: \`Detail Information 2\`, date: new Date(), time: this.generateRandomTime(), currency: 6511 }
      ],
      label: this.generateRandomColor(),
      color: \`Text \${index}\`,
      icon: this.generateRandomIcon(index),
      boolean: this.generateRandomBoolean()
    };
  }

  getColumns() {
    return {
      text: <PoTableColumn>{ property: 'text', width: '30%' },
      number: <PoTableColumn>{ property: 'number', type: 'number' },
      date: <PoTableColumn>{ property: 'date', type: 'date' },
      time: <PoTableColumn>{ property: 'time', type: 'time' },
      dateTime: <PoTableColumn>{ property: 'dateTime', label: 'DateTime', type: 'dateTime' },
      currency: <PoTableColumn>{ property: 'currency', type: 'currency', format: 'USD' },
      link: <PoTableColumn>{ property: 'page', label: 'Link', type: 'link' },
      icon: <PoTableColumn>{ property: 'icon', type: 'icon' },
      boolean: <PoTableColumn>{ property: 'boolean', type: 'boolean' },
      subtitle: <PoTableColumn>{
        property: 'subtitle',
        type: 'subtitle',
        width: '10%',
        subtitles: [
          { value: 'color-01', color: 'color-01', label: 'Color 1', content: '1' },
          { value: 'color-02', color: 'color-02', label: 'Color 2', content: '2' },
          { value: 'color-03', color: 'color-03', label: 'Color 3', content: '3' },
          { value: 'color-04', color: 'color-04', label: 'Color 4', content: '4' },
          { value: 'color-05', color: 'color-05', label: 'Color 5', content: '5' },
          { value: 'color-06', color: 'color-06', label: 'Color 6', content: '6' },
          { value: 'color-07', color: 'color-07', label: 'Color 7', content: '7' },
          { value: 'color-08', color: 'color-08', label: 'Color 8', content: '8' },
          { value: 'color-09', color: 'color-09', label: 'Color 9', content: '9' },
          { value: 'color-10', color: 'color-10', label: 'Color 10', content: '10' },
          { value: 'color-11', color: 'color-11', label: 'Color 11', content: '11' },
          { value: 'color-12', color: 'color-12', label: 'Color 12', content: '12' }
        ]
      },

      label: <PoTableColumn>{
        property: 'label',
        type: 'label',
        width: '10%',
        labels: [
          { value: 'color-01', color: 'color-01', label: 'Color 1' },
          { value: 'color-02', color: 'color-02', label: 'Color 2' },
          { value: 'color-03', color: 'color-03', label: 'Color 3' },
          { value: 'color-04', color: 'color-04', label: 'Color 4' },
          { value: 'color-05', color: 'color-05', label: 'Color 5' },
          { value: 'color-06', color: 'color-06', label: 'Color 6' },
          { value: 'color-07', color: 'color-07', label: 'Color 7' },
          { value: 'color-08', color: 'color-08', label: 'Color 8' },
          { value: 'color-09', color: 'color-09', label: 'Color 9' },
          { value: 'color-10', color: 'color-10', label: 'Color 10' },
          { value: 'color-11', color: 'color-11', label: 'Color 11' },
          { value: 'color-12', color: 'color-12', label: 'Color 12' },
          { value: 'caption-tag-01', color: 'caption-tag-01', label: 'Caption 01' },
          { value: 'caption-tag-03', color: 'caption-tag-03', label: 'Caption 03' },
          { value: 'caption-tag-06', color: 'caption-tag-06', label: 'Caption 06' },
          { value: 'caption-tag-08', color: 'caption-tag-08', label: 'Caption 08' },
          { value: 'caption-tag-11', color: 'caption-tag-11', label: 'Caption 11' },
          { value: 'caption-tag-13', color: 'caption-tag-13', label: 'Caption 13' },
          { value: 'caption-tag-16', color: 'caption-tag-16', label: 'Caption 16' },
          { value: 'caption-tag-18', color: 'caption-tag-18', label: 'Caption 18' },
          { value: 'caption-tag-21', color: 'caption-tag-21', label: 'Caption 21' },
          { value: 'caption-tag-23', color: 'caption-tag-23', label: 'Caption 23' },
          { value: 'caption-tag-26', color: 'caption-tag-26', label: 'Caption 26' },
          { value: 'caption-tag-28', color: 'caption-tag-28', label: 'Caption 28' },
          { value: 'caption-tag-31', color: 'caption-tag-31', label: 'Caption 31' },
          { value: 'caption-tag-33', color: 'caption-tag-33', label: 'Caption 33' }
        ]
      },

      color: <PoTableColumn>{ property: 'color', width: '10%', color: this.changeColor },

      detail: <PoTableColumn>{
        property: 'detail',
        type: 'detail',
        detail: {
          columns: [
            { property: 'info', label: 'Detail' },
            { property: 'date', label: 'Detail Date', type: 'date', format: 'dd-MM-yy' },
            { property: 'time', label: 'Detail Time', type: 'time' },
            { property: 'currency', label: 'Detail Currency', type: 'currency' }
          ],
          typeHeader: 'inline'
        }
      }
    };
  }

  private changeColor(row, column) {
    const number = row[column].slice(5, 7).trim();

    return number % 2 === 0 ? 'caption-tag-08' : 'caption-tag-13';
  }

  private generateRandomBoolean(): boolean {
    return Math.random() >= 0.5;
  }

  private generateRandomNumber() {
    return (Math.random() * 200 + 1).toFixed(3);
  }

  private generateRandomColor() {
    return this.colors[Math.floor(Math.random() * this.colors.length)];
  }

  private generateRandomIcon(index: number) {
    const iconsOne = ['an an-copy', 'an an-check', 'an an-camera', 'an an-plant', 'an an-building-apartment'];
    const iconsTwo = ['an an-trash', 'an an-newspaper', 'an an-gas-pump', 'an an-chats', 'an an-bluetooth'];

    const randomIcon = Math.floor(Math.random() * 5);

    return [
      { value: \`\${index}\`, icon: iconsOne[randomIcon], tooltip: iconsOne[randomIcon] },
      { value: \`\${index}\`, icon: iconsTwo[randomIcon], tooltip: iconsTwo[randomIcon] }
    ];
  }

  private generateRandomTime() {
    const hour = Math.floor(Math.random() * 23);
    const minutes = Math.floor(Math.random() * 59);
    const seconds = Math.floor(Math.random() * 59);

    const hourValid = hour < 10 ? '0' + hour.toString() : hour.toString();
    const minutesValid = minutes < 10 ? '0' + minutes.toString() : minutes.toString();
    const secondsValid = seconds < 10 ? '0' + seconds.toString() : seconds.toString();

    return \`\${hourValid}:\${minutesValid}:\${secondsValid}\`;
  }

  private generateRandomDate() {
    const day = Math.floor(Math.random() * 28);
    const month = Math.floor(Math.random() * 12);
    const year = Math.floor(Math.random() * 24) + 2000;

    return new Date(year, month, day);
  }
}
`),og()()()()(),Il(25,"div",10),zl(26,"sample-po-table-labs"),og(),zl(27,"hr")),l&2&&(Lp(5),Ux("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,vt,o.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,Xe],encapsulation:2})}return r})();var Ct=["table"],Ye=(()=>{class r{tableComponent;service="";key;value;sampleService="";params;filters=[];columns=[{property:"id"},{property:"name"}];stringColumns=JSON.stringify(this.columns);defaultColumns=[...this.columns];addFilter(a,l){this.params=s(r$1({},this.params),{[a]:l}),this.setFilters(a,l),this.tableComponent.applyFilters(this.params),this.resetInputs();}changeService(a){this.sampleService=a;}onChangeColumns(a){try{this.columns=JSON.parse(a);}catch(l){this.stringColumns=JSON.stringify(this.defaultColumns),this.columns=[...this.defaultColumns];}}removeAllItems(){this.tableComponent.applyFilters({});}removeItem(a){delete this.params[a.removedDisclaimer.property],this.tableComponent.applyFilters(this.params);}resetInputs(){this.key=void 0,this.value=void 0;}setFilters(a,l){let o=this.filters.find(m=>m.property===a);o?(this.filters.splice(this.filters.indexOf(o),1),o=Object.assign({},o)):o={property:a},o.value=l,o.label=`${a.charAt(0).toUpperCase()+a.slice(1)}: ${l}`,this.filters=[...this.filters,o];}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-table-with-api"]],viewQuery:function(l,o){if(l&1&&Gl(Ct,5),l&2){let m;co(m=lo())&&(o.tableComponent=m.first);}},standalone:false,decls:16,vars:12,consts:[["table",""],[1,"po-row"],["p-label","URL API service","p-help","https://po-sample-api.onrender.com/v1/heroes",1,"po-md-12",3,"ngModelChange","p-change","ngModel"],["p-label","Columns",1,"po-md-12"],["p-label","Columns","p-help","[{ property: 'name' }]",1,"po-md-12",3,"ngModelChange","p-change","ngModel","p-rows"],["p-label","Filters",1,"po-md-12"],["p-label","Key","p-help","Object key",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Value","p-help","Object value",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add Filter",1,"po-md-3",3,"p-click","p-disabled"],[1,"po-mt-1","po-md-12",3,"p-remove","p-remove-all","p-disclaimers"],[1,"po-mt-1","po-md-12",3,"p-columns","p-service-api","p-height","p-hide-table-search","p-infinite-scroll"]],template:function(l,o){if(l&1){let m=Dx();Il(0,"div",1)(1,"po-input",2),ww("ngModelChange",function(d){return Xy(m),eN(o.service,d)||(o.service=d),Qy(d)}),ft("p-change",function(){return o.changeService(o.service)}),og(),QA(),og(),Il(2,"div",1),zl(3,"po-divider",3),Il(4,"po-textarea",4),ww("ngModelChange",function(d){return Xy(m),eN(o.stringColumns,d)||(o.stringColumns=d),Qy(d)}),ft("p-change",function(d){return o.onChangeColumns(d)}),og(),QA(),og(),Il(5,"div",1),zl(6,"po-divider",5),Il(7,"po-input",6),ww("ngModelChange",function(d){return Xy(m),eN(o.key,d)||(o.key=d),Qy(d)}),og(),QA(),Il(8,"po-input",7),ww("ngModelChange",function(d){return Xy(m),eN(o.value,d)||(o.value=d),Qy(d)}),og(),QA(),og(),Il(9,"div",1)(10,"po-button",8),ft("p-click",function(){return o.addFilter(o.key,o.value)}),og()(),Il(11,"div",1)(12,"po-disclaimer-group",9),ft("p-remove",function(d){return o.removeItem(d)})("p-remove-all",function(){return o.removeAllItems()}),og()(),Il(13,"div",1),zl(14,"po-table",10,0),og();}l&2&&(Lp(),Ew("ngModel",o.service),e0(),Lp(3),Ew("ngModel",o.stringColumns),nw("p-rows",5),e0(),Lp(3),Ew("ngModel",o.key),e0(),Lp(),Ew("ngModel",o.value),e0(),Lp(2),nw("p-disabled",!o.key||!o.value),Lp(2),nw("p-disclaimers",o.filters),Lp(2),nw("p-columns",o.columns)("p-service-api",o.sampleService)("p-height",300)("p-hide-table-search",false)("p-infinite-scroll",true));},dependencies:[$9,mk,Qt$1,b3,mv,O3,$he,E3],encapsulation:2,changeDetection:1})}return r})();var Tt=r=>({"docs-sample-code-tabs":r}),Ze=(()=>{class r{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-table-with-api-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Table using API"),og(),Il(4,"a",2),ft("click",function(){return o.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-table-with-api/sample-po-table-with-api.component.html"),og(),Il(13,"pre",7),Qx(14,`<div class="po-row">
  <po-input
    class="po-md-12"
    p-label="URL API service"
    p-help="https://po-sample-api.onrender.com/v1/heroes"
    [(ngModel)]="service"
    (p-change)="changeService(service)"
  >
  </po-input>
</div>
<div class="po-row">
  <po-divider class="po-md-12" p-label="Columns"></po-divider>
  <po-textarea
    class="po-md-12"
    p-label="Columns"
    p-help="[{ property: 'name' }]"
    [(ngModel)]="stringColumns"
    [p-rows]="5"
    (p-change)="onChangeColumns($event)"
  >
  </po-textarea>
</div>
<div class="po-row">
  <po-divider class="po-md-12" p-label="Filters"></po-divider>
  <po-input class="po-md-6" p-label="Key" p-help="Object key" [(ngModel)]="key"></po-input>
  <po-input class="po-md-6" p-label="Value" p-help="Object value" [(ngModel)]="value"></po-input>
</div>
<div class="po-row">
  <po-button
    class="po-md-3"
    p-label="Add Filter"
    (p-click)="addFilter(key, value)"
    [p-disabled]="!key || !value"
  ></po-button>
</div>
<div class="po-row">
  <po-disclaimer-group
    class="po-mt-1 po-md-12"
    [p-disclaimers]="filters"
    (p-remove)="removeItem($event)"
    (p-remove-all)="removeAllItems()"
  >
  </po-disclaimer-group>
</div>
<div class="po-row">
  <po-table
    class="po-mt-1 po-md-12"
    #table
    [p-columns]="columns"
    [p-service-api]="sampleService"
    [p-height]="300"
    [p-hide-table-search]="false"
    [p-infinite-scroll]="true"
  >
  </po-table>
</div>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-table-with-api/sample-po-table-with-api.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { PoDisclaimerGroupRemoveAction, PoDisclaimer, PoTableComponent, PoTableColumn } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-table-with-api',
  templateUrl: './sample-po-table-with-api.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTableWithApiComponent {
  @ViewChild('table') tableComponent: PoTableComponent;

  service = '';
  key: string;
  value: string;
  sampleService = '';
  params: {};
  filters: Array<PoDisclaimer> = [];
  columns: Array<PoTableColumn> = [{ property: 'id' }, { property: 'name' }];
  stringColumns: string = JSON.stringify(this.columns);

  private defaultColumns: Array<PoTableColumn> = [...this.columns];

  addFilter(property: string, value: any) {
    this.params = { ...this.params, [property]: value };

    this.setFilters(property, value);

    this.tableComponent.applyFilters(this.params);

    this.resetInputs();
  }

  changeService(service) {
    this.sampleService = service;
  }

  onChangeColumns(columns) {
    try {
      this.columns = JSON.parse(columns);
    } catch (e) {
      this.stringColumns = JSON.stringify(this.defaultColumns);
      this.columns = [...this.defaultColumns];
    }
  }

  removeAllItems() {
    this.tableComponent.applyFilters({});
  }

  removeItem(item: PoDisclaimerGroupRemoveAction) {
    delete this.params[item.removedDisclaimer.property];
    this.tableComponent.applyFilters(this.params);
  }

  private resetInputs() {
    this.key = undefined;
    this.value = undefined;
  }

  private setFilters(property: string, value: string) {
    let filter = this.filters.find(item => item.property === property);
    if (!filter) {
      filter = <any>{ property: property };
    } else {
      this.filters.splice(this.filters.indexOf(filter), 1);
      filter = Object.assign({}, filter);
    }

    filter.value = value;
    filter.label = \`\${property.charAt(0).toUpperCase() + property.slice(1)}: \${value}\`;

    this.filters = [...this.filters, filter];
  }
}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-table-with-api"),og(),zl(23,"hr")),l&2&&(Lp(5),Ux("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,Tt,o.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,Ye],encapsulation:2})}return r})();var de=(()=>{class r{getColumns(){return [{property:"code",type:"number",width:"8%"},{property:"product"},{property:"customer"},{property:"exit_forecast",label:"Exit forecast",type:"dateTime"},{property:"time_since_purchase",label:"Time since purchase",type:"time",visible:false},{property:"quantity",label:"Quantity (Tons)",type:"number",width:"15%",visible:false},{property:"icms",label:"ICMS",type:"number",format:"1.2-5",visible:false},{property:"status",type:"label",width:"8%",labels:[{value:"delivered",color:"caption-tag-23",label:"Delivered"},{value:"transport",color:"caption-tag-14",label:"Transport"},{value:"production",color:"caption-tag-03",label:"Production"},{value:"stock",color:"caption-tag-33",label:"Stock",icon:"an an-package"}]}]}getItems(){return [{code:1200,product:"Rice",customer:"Angeloni",quantity:3,icms:1500,exit_forecast:this.generateRandomDate(),time_since_purchase:this.generateRandomTime(),status:"delivered",license_plate:"MDJD9191",batch_product:18041822,driver:"Jos\xE9 Oliveira"},{code:1355,product:"Margarine",customer:"Giassi",quantity:1,icms:50,exit_forecast:this.generateRandomDate(),time_since_purchase:this.generateRandomTime(),status:"transport",license_plate:"XXA5454",batch_product:18041821,driver:"Francisco Pereira"},{code:1496,product:"Wheat flour",customer:"Walmart",quantity:5,icms:2045,exit_forecast:this.generateRandomDate(),time_since_purchase:this.generateRandomTime(),status:"transport",license_plate:"QEW5779",batch_product:18041820,driver:"Pedro da Costa"},{code:1712,product:"Milk",customer:"Carrefour",quantity:10,icms:15005,exit_forecast:this.generateRandomDate(),time_since_purchase:this.generateRandomTime(),status:"production",license_plate:"WWW1247",batch_product:18041819,driver:"Jo\xE3o da Silva"},{code:1881,product:"Oil",customer:"Carrefour",quantity:1,icms:1110,exit_forecast:this.generateRandomDate(),time_since_purchase:this.generateRandomTime(),status:"production",license_plate:"XXI2312",batch_product:18041825,driver:"Antonio Lima"},{code:1551,product:"Cream cheese",customer:"Barbosa",quantity:15,icms:1119,exit_forecast:this.generateRandomDate(),time_since_purchase:this.generateRandomTime(),status:"stock",license_plate:"XXI2359",batch_product:18041888,driver:"Vitoria Felix"}]}generateRandomDate(){let a=Math.floor(Math.random()*20),l=Math.floor(Math.random()*59),o=Math.floor(Math.random()*59);return new Date(2018,10,23,a,l,o)}generateRandomTime(){let a=Math.floor(Math.random()*59),l=Math.floor(Math.random()*59),o=a<10?"0"+a.toString():a.toString(),m=l<10?"0"+l.toString():l.toString();return `00:${o}:${m}`}static \u0275fac=function(l){return new(l||r)};static \u0275prov=w({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();function wt(r,J){if(r&1){let a=Dx();Il(0,"po-widget",2)(1,"div",3)(2,"po-select",4),ww("ngModelChange",function(o){let m=Xy(a).$implicit;return eN(m.status,o)||(m.status=o),Qy(o)}),og(),QA(),og(),Il(3,"div",3),zl(4,"po-info",5)(5,"po-info",6)(6,"po-info",7),og()();}if(r&2){let a=J.$implicit,l=Sx();nw("p-title",iN("Transport detail ",a.code)),Lp(2),Ew("ngModel",a.status),nw("p-options",l.statusOptions),e0(),Lp(2),nw("p-value",a.batch_product),Lp(),nw("p-value",a.driver),Lp(),nw("p-value",a.license_plate);}}var et=(()=>{class r{transportService;columns;items;statusOptions=[{label:"Delivered",value:"delivered"},{label:"Transport",value:"transport"},{label:"Production",value:"production"}];constructor(a){this.transportService=a;}ngOnInit(){this.columns=this.transportService.getColumns(),this.items=this.transportService.getItems();}isUndelivered(a,l){return a.status!=="delivered"}static \u0275fac=function(l){return new(l||r)(C(de))};static \u0275cmp=Un({type:r,selectors:[["sample-po-table-transport"]],standalone:false,features:[we([de])],decls:2,vars:9,consts:[["p-spacing","large",3,"p-auto-collapse","p-columns","p-hide-columns-manager","p-hide-table-search","p-items","p-sort","p-striped"],["p-table-row-template","",3,"p-table-row-template-arrow-direction","p-table-row-template-show"],[3,"p-title"],[1,"po-row"],["name","status","p-label","Transport status",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["p-label","Batch of product","p-orientation","horizontal",1,"po-md-4",3,"p-value"],["p-label","Driver","p-orientation","horizontal",1,"po-md-4",3,"p-value"],["p-label","License plate","p-orientation","horizontal",1,"po-md-4",3,"p-value"]],template:function(l,o){l&1&&(Il(0,"po-table",0),JE(1,wt,7,7,"ng-template",1),og()),l&2&&(nw("p-auto-collapse",true)("p-columns",o.columns)("p-hide-columns-manager",true)("p-hide-table-search",false)("p-items",o.items)("p-sort",true)("p-striped",true),Lp(),nw("p-table-row-template-arrow-direction","right")("p-table-row-template-show",o.isUndelivered));},dependencies:[$9,mk,qhe,Yhe,E3,Yue,yNe],encapsulation:2,changeDetection:1})}return r})();var At=r=>({"docs-sample-code-tabs":r}),tt=(()=>{class r{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-table-transport-view"]],standalone:false,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Table - Transport"),og(),Il(4,"a",2),ft("click",function(){return o.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-table-transport/sample-po-table-transport.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-table
  [p-auto-collapse]="true"
  [p-columns]="columns"
  [p-hide-columns-manager]="true"
  [p-hide-table-search]="false"
  [p-items]="items"
  [p-sort]="true"
  [p-striped]="true"
  p-spacing="large"
>
  <ng-template
    p-table-row-template
    let-rowItem
    let-i="rowIndex"
    [p-table-row-template-arrow-direction]="'right'"
    [p-table-row-template-show]="isUndelivered"
  >
    <po-widget p-title="Transport detail { { rowItem.code }}">
      <div class="po-row">
        <po-select
          class="po-md-6"
          name="status"
          [(ngModel)]="rowItem.status"
          p-label="Transport status"
          [p-options]="statusOptions"
        >
        </po-select>
      </div>

      <div class="po-row">
        <po-info
          class="po-md-4"
          p-label="Batch of product"
          p-orientation="horizontal"
          [p-value]="rowItem.batch_product"
        >
        </po-info>

        <po-info class="po-md-4" p-label="Driver" p-orientation="horizontal" [p-value]="rowItem.driver"> </po-info>

        <po-info class="po-md-4" p-label="License plate" p-orientation="horizontal" [p-value]="rowItem.license_plate">
        </po-info>
      </div>
    </po-widget>
  </ng-template>
</po-table>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-table-transport/sample-po-table-transport.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { PoSelectOption } from '@po-ui/ng-components';

import { PoTableColumn } from '@po-ui/ng-components';

import { SamplePoTableTransportService } from './sample-po-table-transport.service';

@Component({
  selector: 'sample-po-table-transport',
  templateUrl: 'sample-po-table-transport.component.html',
  providers: [SamplePoTableTransportService],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTableTransportComponent implements OnInit {
  columns: Array<PoTableColumn>;
  items: Array<any>;

  readonly statusOptions: Array<PoSelectOption> = [
    { label: 'Delivered', value: 'delivered' },
    { label: 'Transport', value: 'transport' },
    { label: 'Production', value: 'production' }
  ];

  constructor(private transportService: SamplePoTableTransportService) {}

  ngOnInit() {
    this.columns = this.transportService.getColumns();
    this.items = this.transportService.getItems();
  }

  isUndelivered(row, index: number) {
    return row.status !== 'delivered';
  }
}
`),og(),Il(21,"label",6),Qx(22,"sample-po-table-transport/sample-po-table-transport.service.ts"),og(),Il(23,"pre",9),Qx(24,`import { Injectable } from '@angular/core';

import { PoTableColumn, PoTagType } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class SamplePoTableTransportService {
  getColumns(): Array<PoTableColumn> {
    return [
      { property: 'code', type: 'number', width: '8%' },
      { property: 'product' },
      { property: 'customer' },
      { property: 'exit_forecast', label: 'Exit forecast', type: 'dateTime' },
      { property: 'time_since_purchase', label: 'Time since purchase', type: 'time', visible: false },
      { property: 'quantity', label: 'Quantity (Tons)', type: 'number', width: '15%', visible: false },
      { property: 'icms', label: 'ICMS', type: 'number', format: '1.2-5', visible: false },
      {
        property: 'status',
        type: 'label',
        width: '8%',
        labels: [
          { value: 'delivered', color: 'caption-tag-23', label: 'Delivered' },
          { value: 'transport', color: 'caption-tag-14', label: 'Transport' },
          { value: 'production', color: 'caption-tag-03', label: 'Production' },
          { value: 'stock', color: 'caption-tag-33', label: 'Stock', icon: 'an an-package' }
        ]
      }
    ];
  }

  getItems(): Array<any> {
    return [
      {
        code: 1200,
        product: 'Rice',
        customer: 'Angeloni',
        quantity: 3,
        icms: 1500,
        exit_forecast: this.generateRandomDate(),
        time_since_purchase: this.generateRandomTime(),
        status: 'delivered',
        license_plate: 'MDJD9191',
        batch_product: 18041822,
        driver: 'Jos\xE9 Oliveira'
      },
      {
        code: 1355,
        product: 'Margarine',
        customer: 'Giassi',
        quantity: 1,
        icms: 50,
        exit_forecast: this.generateRandomDate(),
        time_since_purchase: this.generateRandomTime(),
        status: 'transport',
        license_plate: 'XXA5454',
        batch_product: 18041821,
        driver: 'Francisco Pereira'
      },
      {
        code: 1496,
        product: 'Wheat flour',
        customer: 'Walmart',
        quantity: 5,
        icms: 2045,
        exit_forecast: this.generateRandomDate(),
        time_since_purchase: this.generateRandomTime(),
        status: 'transport',
        license_plate: 'QEW5779',
        batch_product: 18041820,
        driver: 'Pedro da Costa'
      },
      {
        code: 1712,
        product: 'Milk',
        customer: 'Carrefour',
        quantity: 10,
        icms: 15005,
        exit_forecast: this.generateRandomDate(),
        time_since_purchase: this.generateRandomTime(),
        status: 'production',
        license_plate: 'WWW1247',
        batch_product: 18041819,
        driver: 'Jo\xE3o da Silva'
      },
      {
        code: 1881,
        product: 'Oil',
        customer: 'Carrefour',
        quantity: 1,
        icms: 1110,
        exit_forecast: this.generateRandomDate(),
        time_since_purchase: this.generateRandomTime(),
        status: 'production',
        license_plate: 'XXI2312',
        batch_product: 18041825,
        driver: 'Antonio Lima'
      },
      {
        code: 1551,
        product: 'Cream cheese',
        customer: 'Barbosa',
        quantity: 15,
        icms: 1119,
        exit_forecast: this.generateRandomDate(),
        time_since_purchase: this.generateRandomTime(),
        status: 'stock',
        license_plate: 'XXI2359',
        batch_product: 18041888,
        driver: 'Vitoria Felix'
      }
    ];
  }

  private generateRandomDate() {
    const hour = Math.floor(Math.random() * 20);
    const minutes = Math.floor(Math.random() * 59);
    const seconds = Math.floor(Math.random() * 59);

    return new Date(2018, 10, 23, hour, minutes, seconds);
  }

  private generateRandomTime() {
    const minutes = Math.floor(Math.random() * 59);
    const seconds = Math.floor(Math.random() * 59);

    const minutesValid = minutes < 10 ? '0' + minutes.toString() : minutes.toString();
    const secondsValid = seconds < 10 ? '0' + seconds.toString() : seconds.toString();

    return \`00:\${minutesValid}:\${secondsValid}\`;
  }
}
`),og()()()()(),Il(25,"div",10),zl(26,"sample-po-table-transport"),og(),zl(27,"hr")),l&2&&(Lp(5),Ux("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,At,o.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,et],encapsulation:2})}return r})();var pe=(()=>{class r{getColumns(){return [{property:"status",type:"label",labels:[{value:"available",color:"caption-tag-13",label:"Available"},{value:"reserved",color:"caption-tag-08",label:"Reserved"},{value:"closed",color:"caption-tag-03",label:"Closed"}]},{property:"country"},{property:"destination"},{property:"region",type:"subtitle",width:"180px",subtitles:[{value:"Alps",color:"color-01",label:"Alps",content:"AL"},{value:"Australasia",color:"color-02",label:"Australasia",content:"AU"},{value:"British Isle",color:"color-03",label:"British Isle",content:"BI"},{value:"Caucasus",color:"color-04",label:"Caucasus",content:"CA"},{value:"Danube",color:"color-05",label:"Danube",content:"DA"},{value:"East Asia",color:"color-06",label:"East Asia",content:"EA"},{value:"Latin America",color:"color-07",label:"Latin America",content:"LA"},{value:"Mediterranean",color:"color-08",label:"Mediterranean",content:"ME"},{value:"Nordics",color:"color-09",label:"Nordics",content:"NO"},{value:"North America",color:"color-10",label:"North America",content:"NA"},{value:"Southern Africa",color:"color-11",label:"Southern Africa",content:"SA"},{value:"Western Africa",color:"color-12",label:"Western Africa",content:"WA"}]},{property:"date",type:"date"},{property:"returnDate",label:"Return Date",type:"date"},{property:"value",type:"currency",format:"USD"},{property:"id",label:"Flight Number",type:"number"},{property:"onBoardService",label:"On Board Service",type:"boolean",boolean:{trueLabel:"Yes",falseLabel:"No"}},{property:"detail",label:"Details",type:"detail",detail:{columns:[{property:"package"},{property:"tour"},{property:"time",label:"Departure time",type:"time",format:"HH:mm"},{property:"distance",label:"Distance (Miles)",type:"number",format:"1.0-5"}],typeHeader:"top"}}]}getItems(){return [{id:11234,initials:"BR",country:"Brazil",value:1e3,date:"2018-10-09",returnDate:"2018-11-01",class:"Economic",onBoardService:false,destination:"Rio de Janeiro",airline:"Azul",status:"available",region:"Latin America",detail:[{package:"Basic",tour:"City tour by public bus and visit to the main museums.",time:"20:10:10",distance:"1000"},{package:"Intermediary",tour:"City tour by van and guided visit to the main museums.",time:"09:15:19",distance:"2000"},{package:"Complete",tour:"VIP city tour, music show with dinner and guided tour to the main museums.",time:"07:10:20",distance:"3000"}]},{id:22467,initials:"FR",country:"France",value:5e3,date:"2019-12-13",returnDate:"2019-12-31",class:"Economic",onBoardService:false,destination:"Paris",airline:"British Airways",status:"closed",region:"Alps",detail:[{package:"Basic",tour:"City tour by public bus and visit to the main museums.",time:"10:15:10",distance:"4800"},{package:"Intermediary",tour:"City tour by van and guided visit to the main museums.",time:"22:15:10",distance:"11000"},{package:"Complete",tour:"VIP city tour, music show with dinner and guided tour to the main museums.",time:"10:15:10",distance:"1000"}]},{id:40670,initials:"SN",country:"Senegal",value:3200,date:"2017-11-22",returnDate:"2018-12-01",class:"Economic",onBoardService:false,destination:"Dakar",airline:"Iberia",status:"closed",region:"Western Africa"},{id:34679,initials:"PT",country:"Portugal",value:5500,date:"2017-10-10",returnDate:"2018-10-20",class:"Economic",onBoardService:false,destination:"Lisbon",airline:"Air Europa",status:"closed",region:"Mediterranean"},{id:48999,initials:"RU",country:"Russia",value:6700,date:"2019-01-17",returnDate:"2019-02-20",class:"First Class",onBoardService:true,destination:"Moscow",airline:"Lufthansa",status:"reserved",region:"Caucasus"},{id:48999,initials:"US",country:"United States",value:2700.49,date:"2018-10-17",returnDate:"2018-10-29",class:"Economic",onBoardService:false,destination:"Los Angeles",airline:"American Airlines",status:"reserved",region:"North America"},{id:54563,initials:"CL",country:"Chile",value:2e3,date:"2018-10-20",returnDate:"2018-11-01",destination:"Cusco",class:"Economic",onBoardService:false,airline:"LATAM",status:"available",region:"Latin America"},{id:64568,initials:"MX",country:"Mexico",value:2100,date:"2018-03-10",returnDate:"2018-05-09",destination:"Mexico City",class:"Economic",onBoardService:false,airline:"Aero M\xE9xico",status:"available",region:"Latin America",detail:[{package:"Basic",tour:"City tour by public bus and visit to the main museums.",time:"12:10:10",distance:"2200"},{package:"Intermediary",tour:"City tour by van and guided visit to the main museums.",time:"11:10:10",distance:"1500"},{package:"Complete",tour:"VIP city tour, music show with dinner and guided tour to the main museums.",time:"16:10:10",distance:"1800"}]},{id:75456,initials:"IE",country:"Ireland",value:6300,date:"2018-10-14",returnDate:"2018-10-30",destination:"Cork",class:"First Class",onBoardService:true,airline:"Lufthansa",status:"reserved",region:"British Isle"},{id:23445,initials:"ZA",country:"South Africa",value:1900,date:"2018-12-10",returnDate:"2018-12-25",destination:"Cape Town",class:"Economic",onBoardService:false,airline:"South African Airways",status:"available",region:"Southern Africa"},{id:19238,initials:"AU",country:"Australia",value:6300,date:"2018-10-14",returnDate:"2018-10-30",destination:"Sydney",class:"First Class",onBoardService:true,airline:"Jetstar Airways",status:"reserved",region:"Australasia"},{id:85456,initials:"JP",country:"Japan",value:5900,date:"2018-10-25",returnDate:"2018-11-10",destination:"Tokio",class:"Executive",onBoardService:true,airline:"Japan Airlines",status:"available",region:"East Asia"},{id:94565,initials:"CN",country:"China",value:2900,date:"2018-10-10",returnDate:"2018-10-25",destination:"Beijing",class:"Economic",onBoardService:false,airline:"Malaysia Airlines",status:"available",region:"East Asia"},{id:32330,initials:"UK",country:"England",value:2090.5,date:"2018-10-07",returnDate:"2018-11-15",destination:"London",class:"Executive",onBoardService:true,airline:"British Airways",status:"available",region:"British Isle"},{id:14560,initials:"CA",country:"Canada",value:2090.5,date:"2018-10-07",returnDate:"2018-10-20",destination:"Quebec",class:"Economic",onBoardService:false,airline:"American Airlines",status:"available",region:"North America"},{id:93800,initials:"IS",country:"Iceland",value:6300,date:"2018-10-12",returnDate:"2018-10-27",destination:"Reykjav\xEDk",class:"Economic",onBoardService:false,airline:"Star Alliance",status:"available",region:"Nordics"},{id:34239,initials:"DE",country:"Germany",value:3070.5,date:"2018-10-07",returnDate:"2018-10-20",destination:"Berlin",class:"Executive",onBoardService:true,airline:"LATAM",status:"available",region:"Danube"},{id:45611,initials:"AR",country:"Argentina",value:3500.5,date:"2018-12-07",returnDate:"2018-12-29",destination:"Ushuaia",class:"Economic",onBoardService:false,airline:"LATAM",status:"reserved",region:"Latin America"}]}static \u0275fac=function(l){return new(l||r)};static \u0275prov=w({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();var nt=(()=>{class r{sampleAirfare;poNotification;poDialog;poModal;poTable;actions=[{action:this.discount.bind(this),icon:"an an-currency-circle-dollar",label:"Apply Discount",disabled:this.validateDiscount.bind(this)},{action:this.details.bind(this),icon:"an an-info",label:"Details"},{action:this.remove.bind(this),icon:"po-icon an an-trash",label:"Remove"}];columns;columnsDefault;detail;items;total=0;totalExpanded=0;initialColumns;constructor(a,l,o){this.sampleAirfare=a,this.poNotification=l,this.poDialog=o;}ngOnInit(){this.columns=this.sampleAirfare.getColumns(),this.items=this.sampleAirfare.getItems();}ngAfterViewInit(){if(this.columnsDefault=this.columns,localStorage.getItem("initial-columns")){this.initialColumns=localStorage.getItem("initial-columns").split(",");let l=[...this.columns.map(o=>s(r$1({},o),{visible:this.initialColumns.includes(o.property)}))];l.sort(this.sortFunction),this.columns=l;}}sortFunction(a,l){let o=localStorage.getItem("initial-columns").split(","),m=o.indexOf(a.property),p=o.indexOf(l.property);if(m===-1)return 1;if(p===-1||m<p)return  -1;if(m>p)return 1}addToCart(){let a=this.poTable.getSelectedRows();a.length>0&&this.poDialog.confirm({title:"Add to cart",message:`Would you like to add ${a.length} items to cart?`,confirm:()=>this.confirmItems(a),cancel:()=>{}});}confirmItems(a){a.forEach(l=>{switch(l.status){case "available":this.poNotification.success(`${this.getDescription(l)} added succesfully`);break;case "reserved":this.poNotification.warning(`${this.getDescription(l)} added succesfully, verify your e-mail to complete reservation`);break;case "closed":this.poNotification.error(`${this.getDescription(l)} is closed and not available anymore`);break}}),this.poTable.unselectRows();}collapseAll(){this.items.forEach((a,l)=>{a.detail&&(this.onCollapseDetail(),this.poTable.collapse(l));});}decreaseTotal(a){a.value&&(this.total-=a.value);}deleteItems(a){this.items=a;}details(a){this.detail=a,this.poModal.open();}remove(a){this.poTable.removeItem(a);}discount(a){if(!a.disableDiscount){let l=s(r$1({},a),{value:a.value-a.value*.2,disableDiscount:true});this.poTable.updateItem(a,l);}}expandAll(){this.totalExpanded=0,this.items.forEach((a,l)=>{a.detail&&(this.onExpandDetail(),this.poTable.expand(l));});}onCollapseDetail(){this.totalExpanded-=1,this.totalExpanded=this.totalExpanded<0?0:this.totalExpanded;}onExpandDetail(){this.totalExpanded+=1;}sumTotal(a){a.value&&(this.total+=a.value);}restoreColumn(){this.columns=this.columnsDefault;}changeColumnVisible(a){localStorage.setItem("initial-columns",a);}getDescription(a){return `Airfare to ${a.destination} - ${a.initials}`}validateDiscount(a){return a.disableDiscount}static \u0275fac=function(l){return new(l||r)(C(pe),C(Yp),C(Vde))};static \u0275cmp=Un({type:r,selectors:[["sample-po-table-airfare"]],viewQuery:function(l,o){if(l&1&&Gl(Yo,7)(E3,7),l&2){let m;co(m=lo())&&(o.poModal=m.first),co(m=lo())&&(o.poTable=m.first);}},standalone:false,features:[we([pe,Vde])],decls:16,vars:24,consts:[[1,"po-font-text-bold","po-text-color-neutral-dark-40"],[3,"p-collapsed","p-expanded","p-selected","p-unselected","p-change-visible-columns","p-restore-column-manager","p-delete-items","p-container","p-height","p-hide-batch-actions","p-hide-table-search","p-selectable","p-sort","p-striped","p-actions","p-columns","p-items","p-max-columns","p-virtual-scroll"],["p-label","Total Value","p-orientation","horizontal",1,"po-md-6","po-mb-sm-2","po-mb-md-2","po-lb-lg-2",3,"p-value"],["p-label","Expanded Itens","p-orientation","horizontal",1,"po-md-6","po-mb-sm-2","po-mb-md-2","po-lb-lg-2",3,"p-value"],[1,"po-row"],["p-icon","an an-shopping-cart-simple","p-label","Add items to cart",1,"po-md-3",3,"p-click"],["p-label","Expand all detail",1,"po-md-3",3,"p-click"],["p-label","Collapse all detail",1,"po-md-3",3,"p-click"],["p-click-out","true","p-size","sm",3,"p-title"],["p-label","Airline",1,"po-sm-6",3,"p-value"],["p-label","Initials",1,"po-sm-2",3,"p-value"],["p-label","Class",1,"po-sm-4",3,"p-value"]],template:function(l,o){l&1&&(Il(0,"div",0),Qx(1,"Choose one or more promotional airfares"),og(),zl(2,"po-divider"),Il(3,"po-table",1),ft("p-collapsed",function(){return o.onCollapseDetail()})("p-expanded",function(){return o.onExpandDetail()})("p-selected",function(p){return o.sumTotal(p)})("p-unselected",function(p){return o.decreaseTotal(p)})("p-change-visible-columns",function(p){return o.changeColumnVisible(p)})("p-restore-column-manager",function(){return o.restoreColumn()})("p-delete-items",function(p){return o.deleteItems(p)}),og(),zl(4,"po-divider")(5,"po-info",2),mN(6,"currency"),zl(7,"po-info",3),Il(8,"div",4)(9,"po-button",5),ft("p-click",function(){return o.addToCart()}),og(),Il(10,"po-button",6),ft("p-click",function(){return o.expandAll()}),og(),Il(11,"po-button",7),ft("p-click",function(){return o.collapseAll()}),og()(),Il(12,"po-modal",8),zl(13,"po-info",9)(14,"po-info",10)(15,"po-info",11),og()),l&2&&(Lp(3),nw("p-container",true)("p-height",400)("p-hide-batch-actions",false)("p-hide-table-search",false)("p-selectable",true)("p-sort",true)("p-striped",true)("p-actions",o.actions)("p-columns",o.columns)("p-items",o.items)("p-max-columns",7)("p-virtual-scroll",false),Lp(2),nw("p-value",rN(_N(6,21,o.total,"USD"))),Lp(2),nw("p-value",o.totalExpanded),Lp(5),nw("p-title",oN("",o.detail?.destination," - ",o.detail?.country)),Lp(),nw("p-value",o.detail==null?null:o.detail.airline),Lp(),nw("p-value",o.detail==null?null:o.detail.initials),Lp(),nw("p-value",o.detail==null?null:o.detail.class));},dependencies:[Qt$1,mv,Yhe,Yo,E3,kO],encapsulation:2,changeDetection:1})}return r})();var Ft=r=>({"docs-sample-code-tabs":r}),it=(()=>{class r{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-table-airfare-view"]],standalone:false,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Table - Airfare"),og(),Il(4,"a",2),ft("click",function(){return o.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-table-airfare/sample-po-table-airfare.component.html"),og(),Il(13,"pre",7),Qx(14,`<div class="po-font-text-bold po-text-color-neutral-dark-40">Choose one or more promotional airfares</div>

<po-divider></po-divider>

<po-table
  [p-container]="true"
  [p-height]="400"
  [p-hide-batch-actions]="false"
  [p-hide-table-search]="false"
  [p-selectable]="true"
  [p-sort]="true"
  [p-striped]="true"
  [p-actions]="actions"
  [p-columns]="columns"
  [p-items]="items"
  [p-max-columns]="7"
  [p-virtual-scroll]="false"
  (p-collapsed)="onCollapseDetail()"
  (p-expanded)="onExpandDetail()"
  (p-selected)="sumTotal($event)"
  (p-unselected)="decreaseTotal($event)"
  (p-change-visible-columns)="changeColumnVisible($event)"
  (p-restore-column-manager)="restoreColumn()"
  (p-delete-items)="deleteItems($event)"
>
</po-table>

<po-divider></po-divider>

<po-info
  class="po-md-6 po-mb-sm-2 po-mb-md-2 po-lb-lg-2"
  p-label="Total Value"
  p-orientation="horizontal"
  p-value="{ { total | currency: 'USD' }}"
>
</po-info>

<po-info
  class="po-md-6 po-mb-sm-2 po-mb-md-2 po-lb-lg-2"
  p-label="Expanded Itens"
  p-orientation="horizontal"
  [p-value]="totalExpanded"
>
</po-info>

<div class="po-row">
  <po-button class="po-md-3" p-icon="an an-shopping-cart-simple" p-label="Add items to cart" (p-click)="addToCart()">
  </po-button>
  <po-button class="po-md-3" p-label="Expand all detail" (p-click)="expandAll()"> </po-button>
  <po-button class="po-md-3" p-label="Collapse all detail" (p-click)="collapseAll()"> </po-button>
</div>

<po-modal p-click-out="true" p-size="sm" p-title="{ { detail?.destination }} - { { detail?.country }}">
  <po-info class="po-sm-6" p-label="Airline" [p-value]="$safeNavigationMigration(detail?.airline)"> </po-info>

  <po-info class="po-sm-2" p-label="Initials" [p-value]="$safeNavigationMigration(detail?.initials)"> </po-info>

  <po-info class="po-sm-4" p-label="Class" [p-value]="$safeNavigationMigration(detail?.class)"> </po-info>
</po-modal>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-table-airfare/sample-po-table-airfare.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { AfterViewInit, Component, ViewChild, OnInit, ChangeDetectionStrategy } from '@angular/core';

import {
  PoDialogService,
  PoModalComponent,
  PoTableAction,
  PoTableColumn,
  PoTableComponent,
  PoNotificationService
} from '@po-ui/ng-components';

import { SamplePoTableAirfareService } from './sample-po-table-airfare.service';

@Component({
  selector: 'sample-po-table-airfare',
  templateUrl: './sample-po-table-airfare.component.html',
  providers: [SamplePoTableAirfareService, PoDialogService],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTableAirfareComponent implements AfterViewInit, OnInit {
  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;
  @ViewChild(PoTableComponent, { static: true }) poTable: PoTableComponent;

  actions: Array<PoTableAction> = [
    {
      action: this.discount.bind(this),
      icon: 'an an-currency-circle-dollar',
      label: 'Apply Discount',
      disabled: this.validateDiscount.bind(this)
    },
    { action: this.details.bind(this), icon: 'an an-info', label: 'Details' },
    { action: this.remove.bind(this), icon: 'po-icon an an-trash', label: 'Remove' }
  ];
  columns: Array<PoTableColumn>;
  columnsDefault: Array<PoTableColumn>;
  detail: any;
  items: Array<any>;
  total: number = 0;
  totalExpanded = 0;
  initialColumns: Array<any>;

  constructor(
    private sampleAirfare: SamplePoTableAirfareService,
    private poNotification: PoNotificationService,
    private poDialog: PoDialogService
  ) {}

  ngOnInit(): void {
    this.columns = this.sampleAirfare.getColumns();
    this.items = this.sampleAirfare.getItems();
  }

  ngAfterViewInit(): void {
    this.columnsDefault = this.columns;
    if (localStorage.getItem('initial-columns')) {
      this.initialColumns = localStorage.getItem('initial-columns').split(',');

      const result = this.columns.map(el => ({
        ...el,
        visible: this.initialColumns.includes(el.property)
      }));

      const newColumn = [...result];
      newColumn.sort(this.sortFunction);
      this.columns = newColumn;
    }
  }

  sortFunction(a, b) {
    const teste = localStorage.getItem('initial-columns').split(',');
    const indexA = teste.indexOf(a['property']);
    const indexB = teste.indexOf(b['property']);
    if (indexA === -1) {
      return 1;
    }
    if (indexB === -1) {
      return -1;
    }
    if (indexA < indexB) {
      return -1;
    } else if (indexA > indexB) {
      return 1;
    }
  }

  addToCart() {
    const selectedItems = this.poTable.getSelectedRows();

    if (selectedItems.length > 0) {
      this.poDialog.confirm({
        title: 'Add to cart',
        message: \`Would you like to add \${selectedItems.length} items to cart?\`,
        confirm: () => this.confirmItems(selectedItems),
        cancel: () => {}
      });
    }
  }

  confirmItems(selectedItems: Array<any>) {
    selectedItems.forEach(item => {
      switch (item.status) {
        case 'available':
          this.poNotification.success(\`\${this.getDescription(item)} added succesfully\`);
          break;
        case 'reserved':
          this.poNotification.warning(
            \`\${this.getDescription(item)} added succesfully, verify your e-mail to complete reservation\`
          );
          break;
        case 'closed':
          this.poNotification.error(\`\${this.getDescription(item)} is closed and not available anymore\`);
          break;
      }
    });

    this.poTable.unselectRows();
  }

  collapseAll() {
    this.items.forEach((item, index) => {
      if (item.detail) {
        this.onCollapseDetail();
        this.poTable.collapse(index);
      }
    });
  }

  decreaseTotal(row: any) {
    if (row.value) {
      this.total -= row.value;
    }
  }

  deleteItems(items: Array<any>) {
    this.items = items;
  }

  details(item) {
    this.detail = item;
    this.poModal.open();
  }

  remove(item: { [key: string]: any }) {
    this.poTable.removeItem(item);
  }

  discount(item) {
    if (!item.disableDiscount) {
      const updatedItem = { ...item, value: item.value - item.value * 0.2, disableDiscount: true };
      this.poTable.updateItem(item, updatedItem);
    }
  }

  expandAll() {
    this.totalExpanded = 0;
    this.items.forEach((item, index) => {
      if (item.detail) {
        this.onExpandDetail();
        this.poTable.expand(index);
      }
    });
  }

  onCollapseDetail() {
    this.totalExpanded -= 1;
    this.totalExpanded = this.totalExpanded < 0 ? 0 : this.totalExpanded;
  }

  onExpandDetail() {
    this.totalExpanded += 1;
  }

  sumTotal(row: any) {
    if (row.value) {
      this.total += row.value;
    }
  }

  restoreColumn() {
    this.columns = this.columnsDefault;
  }

  changeColumnVisible(event) {
    localStorage.setItem('initial-columns', event);
  }

  private getDescription(item: any) {
    return \`Airfare to \${item.destination} - \${item.initials}\`;
  }

  private validateDiscount(item) {
    return item.disableDiscount;
  }
}
`),og(),Il(21,"label",6),Qx(22,"sample-po-table-airfare/sample-po-table-airfare.service.ts"),og(),Il(23,"pre",9),Qx(24,`import { Injectable } from '@angular/core';

import { PoTableColumn, PoTableDetail } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class SamplePoTableAirfareService {
  getColumns(): Array<PoTableColumn> {
    const airfareDetail: PoTableDetail = {
      columns: [
        { property: 'package' },
        { property: 'tour' },
        { property: 'time', label: 'Departure time', type: 'time', format: 'HH:mm' },
        { property: 'distance', label: 'Distance (Miles)', type: 'number', format: '1.0-5' }
      ],
      typeHeader: 'top'
    };

    return [
      {
        property: 'status',
        type: 'label',
        labels: [
          { value: 'available', color: 'caption-tag-13', label: 'Available' },
          { value: 'reserved', color: 'caption-tag-08', label: 'Reserved' },
          { value: 'closed', color: 'caption-tag-03', label: 'Closed' }
        ]
      },
      { property: 'country' },
      { property: 'destination' },
      {
        property: 'region',
        type: 'subtitle',
        width: '180px',
        subtitles: [
          { value: 'Alps', color: 'color-01', label: 'Alps', content: 'AL' },
          { value: 'Australasia', color: 'color-02', label: 'Australasia', content: 'AU' },
          { value: 'British Isle', color: 'color-03', label: 'British Isle', content: 'BI' },
          { value: 'Caucasus', color: 'color-04', label: 'Caucasus', content: 'CA' },
          { value: 'Danube', color: 'color-05', label: 'Danube', content: 'DA' },
          { value: 'East Asia', color: 'color-06', label: 'East Asia', content: 'EA' },
          { value: 'Latin America', color: 'color-07', label: 'Latin America', content: 'LA' },
          { value: 'Mediterranean', color: 'color-08', label: 'Mediterranean', content: 'ME' },
          { value: 'Nordics', color: 'color-09', label: 'Nordics', content: 'NO' },
          { value: 'North America', color: 'color-10', label: 'North America', content: 'NA' },
          { value: 'Southern Africa', color: 'color-11', label: 'Southern Africa', content: 'SA' },
          { value: 'Western Africa', color: 'color-12', label: 'Western Africa', content: 'WA' }
        ]
      },
      { property: 'date', type: 'date' },
      { property: 'returnDate', label: 'Return Date', type: 'date' },
      { property: 'value', type: 'currency', format: 'USD' },
      { property: 'id', label: 'Flight Number', type: 'number' },
      {
        property: 'onBoardService',
        label: 'On Board Service',
        type: 'boolean',
        boolean: {
          trueLabel: 'Yes',
          falseLabel: 'No'
        }
      },
      { property: 'detail', label: 'Details', type: 'detail', detail: airfareDetail }
    ];
  }

  getItems() {
    return [
      {
        id: 11234,
        initials: 'BR',
        country: 'Brazil',
        value: 1000.0,
        date: '2018-10-09',
        returnDate: '2018-11-01',
        class: 'Economic',
        onBoardService: false,
        destination: 'Rio de Janeiro',
        airline: 'Azul',
        status: 'available',
        region: 'Latin America',
        detail: [
          {
            package: 'Basic',
            tour: 'City tour by public bus and visit to the main museums.',
            time: '20:10:10',
            distance: '1000'
          },
          {
            package: 'Intermediary',
            tour: 'City tour by van and guided visit to the main museums.',
            time: '09:15:19',
            distance: '2000'
          },
          {
            package: 'Complete',
            tour: 'VIP city tour, music show with dinner and guided tour to the main museums.',
            time: '07:10:20',
            distance: '3000'
          }
        ]
      },
      {
        id: 22467,
        initials: 'FR',
        country: 'France',
        value: 5000.0,
        date: '2019-12-13',
        returnDate: '2019-12-31',
        class: 'Economic',
        onBoardService: false,
        destination: 'Paris',
        airline: 'British Airways',
        status: 'closed',
        region: 'Alps',
        detail: [
          {
            package: 'Basic',
            tour: 'City tour by public bus and visit to the main museums.',
            time: '10:15:10',
            distance: '4800'
          },
          {
            package: 'Intermediary',
            tour: 'City tour by van and guided visit to the main museums.',
            time: '22:15:10',
            distance: '11000'
          },
          {
            package: 'Complete',
            tour: 'VIP city tour, music show with dinner and guided tour to the main museums.',
            time: '10:15:10',
            distance: '1000'
          }
        ]
      },
      {
        id: 40670,
        initials: 'SN',
        country: 'Senegal',
        value: 3200.0,
        date: '2017-11-22',
        returnDate: '2018-12-01',
        class: 'Economic',
        onBoardService: false,
        destination: 'Dakar',
        airline: 'Iberia',
        status: 'closed',
        region: 'Western Africa'
      },
      {
        id: 34679,
        initials: 'PT',
        country: 'Portugal',
        value: 5500.0,
        date: '2017-10-10',
        returnDate: '2018-10-20',
        class: 'Economic',
        onBoardService: false,
        destination: 'Lisbon',
        airline: 'Air Europa',
        status: 'closed',
        region: 'Mediterranean'
      },
      {
        id: 48999,
        initials: 'RU',
        country: 'Russia',
        value: 6700.0,
        date: '2019-01-17',
        returnDate: '2019-02-20',
        class: 'First Class',
        onBoardService: true,
        destination: 'Moscow',
        airline: 'Lufthansa',
        status: 'reserved',
        region: 'Caucasus'
      },
      {
        id: 48999,
        initials: 'US',
        country: 'United States',
        value: 2700.49,
        date: '2018-10-17',
        returnDate: '2018-10-29',
        class: 'Economic',
        onBoardService: false,
        destination: 'Los Angeles',
        airline: 'American Airlines',
        status: 'reserved',
        region: 'North America'
      },
      {
        id: 54563,
        initials: 'CL',
        country: 'Chile',
        value: 2000.0,
        date: '2018-10-20',
        returnDate: '2018-11-01',
        destination: 'Cusco',
        class: 'Economic',
        onBoardService: false,
        airline: 'LATAM',
        status: 'available',
        region: 'Latin America'
      },
      {
        id: 64568,
        initials: 'MX',
        country: 'Mexico',
        value: 2100.0,
        date: '2018-03-10',
        returnDate: '2018-05-09',
        destination: 'Mexico City',
        class: 'Economic',
        onBoardService: false,
        airline: 'Aero M\xE9xico',
        status: 'available',
        region: 'Latin America',
        detail: [
          {
            package: 'Basic',
            tour: 'City tour by public bus and visit to the main museums.',
            time: '12:10:10',
            distance: '2200'
          },
          {
            package: 'Intermediary',
            tour: 'City tour by van and guided visit to the main museums.',
            time: '11:10:10',
            distance: '1500'
          },
          {
            package: 'Complete',
            tour: 'VIP city tour, music show with dinner and guided tour to the main museums.',
            time: '16:10:10',
            distance: '1800'
          }
        ]
      },
      {
        id: 75456,
        initials: 'IE',
        country: 'Ireland',
        value: 6300.0,
        date: '2018-10-14',
        returnDate: '2018-10-30',
        destination: 'Cork',
        class: 'First Class',
        onBoardService: true,
        airline: 'Lufthansa',
        status: 'reserved',
        region: 'British Isle'
      },
      {
        id: 23445,
        initials: 'ZA',
        country: 'South Africa',
        value: 1900.0,
        date: '2018-12-10',
        returnDate: '2018-12-25',
        destination: 'Cape Town',
        class: 'Economic',
        onBoardService: false,
        airline: 'South African Airways',
        status: 'available',
        region: 'Southern Africa'
      },
      {
        id: 19238,
        initials: 'AU',
        country: 'Australia',
        value: 6300.0,
        date: '2018-10-14',
        returnDate: '2018-10-30',
        destination: 'Sydney',
        class: 'First Class',
        onBoardService: true,
        airline: 'Jetstar Airways',
        status: 'reserved',
        region: 'Australasia'
      },
      {
        id: 85456,
        initials: 'JP',
        country: 'Japan',
        value: 5900.0,
        date: '2018-10-25',
        returnDate: '2018-11-10',
        destination: 'Tokio',
        class: 'Executive',
        onBoardService: true,
        airline: 'Japan Airlines',
        status: 'available',
        region: 'East Asia'
      },
      {
        id: 94565,
        initials: 'CN',
        country: 'China',
        value: 2900.0,
        date: '2018-10-10',
        returnDate: '2018-10-25',
        destination: 'Beijing',
        class: 'Economic',
        onBoardService: false,
        airline: 'Malaysia Airlines',
        status: 'available',
        region: 'East Asia'
      },
      {
        id: 32330,
        initials: 'UK',
        country: 'England',
        value: 2090.5,
        date: '2018-10-07',
        returnDate: '2018-11-15',
        destination: 'London',
        class: 'Executive',
        onBoardService: true,
        airline: 'British Airways',
        status: 'available',
        region: 'British Isle'
      },
      {
        id: 14560,
        initials: 'CA',
        country: 'Canada',
        value: 2090.5,
        date: '2018-10-07',
        returnDate: '2018-10-20',
        destination: 'Quebec',
        class: 'Economic',
        onBoardService: false,
        airline: 'American Airlines',
        status: 'available',
        region: 'North America'
      },
      {
        id: 93800,
        initials: 'IS',
        country: 'Iceland',
        value: 6300.0,
        date: '2018-10-12',
        returnDate: '2018-10-27',
        destination: 'Reykjav\xEDk',
        class: 'Economic',
        onBoardService: false,
        airline: 'Star Alliance',
        status: 'available',
        region: 'Nordics'
      },
      {
        id: 34239,
        initials: 'DE',
        country: 'Germany',
        value: 3070.5,
        date: '2018-10-07',
        returnDate: '2018-10-20',
        destination: 'Berlin',
        class: 'Executive',
        onBoardService: true,
        airline: 'LATAM',
        status: 'available',
        region: 'Danube'
      },
      {
        id: 45611,
        initials: 'AR',
        country: 'Argentina',
        value: 3500.5,
        date: '2018-12-07',
        returnDate: '2018-12-29',
        destination: 'Ushuaia',
        class: 'Economic',
        onBoardService: false,
        airline: 'LATAM',
        status: 'reserved',
        region: 'Latin America'
      }
    ];
  }
}
`),og()()()()(),Il(25,"div",10),zl(26,"sample-po-table-airfare"),og(),zl(27,"hr")),l&2&&(Lp(5),Ux("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,Ft,o.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,nt],encapsulation:2})}return r})();var H=(function(r){return r[r.Stable=0]="Stable",r[r.Experimental=1]="Experimental",r[r.RoadMap=2]="RoadMap",r})(H||{});var ce=(()=>{class r{items=[{component:{favorite:["favorite","documentation"],name:"PO Select",description:"Display a list of items and allows selection",link:"/documentation/po-select",extra:"Features",extras:["Filter options (starts, contains, ends)","Custom services","Navigation by keys"],status:0,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Checkbox",description:"Group of square buttons that allows multiple items to be selected",link:"/documentation/po-checkbox-group",extra:"Best Practices",extras:["Short and objective texts for items","Use with short lists","For big lists use PO Multiselect"],status:0,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Page Login",description:"Template for authentication",link:"/documentation/po-page-login",extra:"Features",extras:[],status:0,type:"template"}},{component:{favorite:["favorite","documentation"],name:"PO Number",description:"Input that allows only numbers",link:"/documentation/po-number",extra:"Features",extras:["Filter options (starts, contains, ends)","Custom services","Navigation by keys"],status:1,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Page Dynamic Table",description:"Template for list resources with a table",link:"/documentation/po-page-dynamic-table",extra:"Features",extras:["6 defaults actions","Use Metadata to build your page","No code","Customization"],status:0,type:"template"}},{component:{favorite:["favorite","documentation"],name:"PO Combo",description:"Display a list of items with filter and allows selection",link:"/documentation/po-combo",extra:"Features",extras:["Filter options (starts, contains, ends)","Custom services","Navigation by keys"],status:0,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Notification",description:"Show notification easily and quickly",link:"/documentation/po-notification",extra:"Features",extras:["4 types of notifications","Define time for your notifications","Use actions in your notification"],status:0,type:"service"}},{component:{favorite:["favorite","documentation"],name:"PO Multiselect",description:"Display a list of items and allows multiple selection",link:"/documentation/po-multiselect",extra:"Features",extras:["Filter options (starts, contains, ends)","Custom services","Navigation by keys"],status:1,type:"component"}},{component:{favorite:[],name:"PO Grid",description:"Create a grid for edition",link:"/documentation/po-grid",extra:"Features",extras:[],status:2,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Input",description:"Input for general texts",link:"/documentation/po-input",extra:"Features",extras:["Filter options (starts, contains, ends)","Custom services","Navigation by keys"],status:0,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Textarea",description:"Larger input for big texts",link:"/documentation/po-textarea",extra:"Best Practices",extras:["Recommended to large texts like observations and details","For short texts use po-input"],status:1,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Datepicker",description:"Input with calendar for dates",link:"/documentation/po-datepicker",extra:"Features",extras:["Multiple idioms ( pt, es , en)","Custom date formats","Period validation (start date and end date)"],status:1,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Email",description:"Input that allows valid email texts (username@email.com)",link:"/documentation/po-email",extra:"Features",extras:["Filter options (starts, contains, ends)","Custom services","Navigation by keys"],status:0,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Url",description:"Input that expects a valid url as text (http://www.url.com)",link:"/documentation/po-url",extra:"Features",extras:["Filter options (starts, contains, ends)","Custom services","Navigation by keys"],status:0,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Password",description:"Input with bullet text to type passwords",link:"/documentation/po-password",extra:"Features",extras:["Filter options (starts, contains, ends)","Custom services","Navigation by keys"],status:0,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Login",description:"Input with a user icon that represents a login field",link:"/documentation/po-login",extra:"Features",extras:["Filter options (starts, contains, ends)","Custom services","Navigation by keys"],status:0,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Upload",description:"Upload file(s) with a loading bar",link:"/documentation/po-upload",extra:"Features",extras:["Multiple file selection","Automatic upload after click","File format and size restriction"],status:1,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Avatar",description:"Creates a circle with a picture inside",link:"/documentation/po-avatar",extra:"Features",extras:["Multiple sizes","Default image"],status:0,type:"component"}}];getItems(a,l=false){let o=[...this.items];return a&&a.column&&o.sort((m,p)=>this.sort(m,p,a)),l||(o.length=10),o}sort(a,l,o){let m=o.column.property,p=o.type;if(m.split(".").length>1){let d=m.split(".")[0],xe=m.split(".")[1];return a[d][xe]<l[d][xe]?p===_h.Ascending?-1:1:p===_h.Ascending?1:-1}else return a[m]<l[m]?p===_h.Ascending?-1:1:p===_h.Ascending?1:-1}static \u0275fac=function(l){return new(l||r)};static \u0275prov=w({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();function Bt(r,J){if(r&1&&(Il(0,"div"),Qx(1),mN(2,"uppercase"),og()),r&2){let a=J.$implicit;Ux(iN("badge ",a)),Lp(),yw(yN(2,4,a));}}function Rt(r,J){if(r&1&&(Il(0,"ul")(1,"li",4),Qx(2),og(),zl(3,"po-divider"),og()),r&2){let a=J.$implicit;Lp(2),yw(a);}}var ot=(()=>{class r{sampleComponents;router;poModal;extraInformation;items;showMoreDisabled=false;title;isLoading=false;columns=[{property:"component.status",type:"label",label:"Status",width:"5%",labels:[{value:H.Stable,color:"caption-tag-13",label:"Stable",textColor:"white",tooltip:"Published component"},{value:H.Experimental,color:"caption-tag-08",label:"Experimental",textColor:"white",tooltip:"Component in homologation"},{value:H.RoadMap,color:"caption-tag-03",label:"Roadmap",textColor:"white",tooltip:"Component in roadmap"}]},{property:"component.name",label:"Name",type:"link"},{property:"component.type",label:"Type",type:"columnTemplate",width:"10%"},{property:"component.description",label:"Descri\xE7\xE3o",color:this.experimentalColor.bind(this)},{property:"component.extra",label:"Extras",width:"10%",type:"link",tooltip:"Additional details",action:(a,l)=>{this.extras(a,l);},disabled:this.canShowExtras.bind(this)},{property:"component.favorite",label:"Actions",type:"icon",sortable:false,icons:[{action:this.favorite.bind(this),color:this.isFavorite.bind(this),icon:"an an-star",tooltip:"Favorite",value:"favorite"},{action:this.goToDocumentation.bind(this),disabled:this.canGoToDocumentation.bind(this),icon:"an an-arrow-square-out",tooltip:"Click to go to documentation",value:"documentation"}]}];constructor(a,l){this.sampleComponents=a,this.router=l;}ngOnInit(){this.items=this.sampleComponents.getItems();}experimentalColor(a){return a?.component?.status===H.Experimental?"caption-tag-08":"caption-tag-13"}extras(a,l){this.title=a,this.extraInformation=l,this.poModal.open();}goToDocumentation(a){this.router.navigate([a?.component?.link]);}showMore(a){this.isLoading=true,this.showMoreDisabled=true,setTimeout(()=>{this.items=this.getItems(a),this.isLoading=false;},4e3);}sort(a){this.items=this.getItems(a);}showAlert(a){alert(a);}canGoToDocumentation(a){return a?.component?.status!==H.Stable}canShowExtras(a){return a?.component?.status!==H.Stable||a?.component?.extras.length===0}favorite(a){a.component.isFavorite=!a.component.isFavorite;}getItems(a){return this.sampleComponents.getItems(a,this.showMoreDisabled)}isFavorite(a){return a?.component?.isFavorite?"caption-tag-08":"caption-tag-13"}static \u0275fac=function(l){return new(l||r)(C(ce),C(En))};static \u0275cmp=Un({type:r,selectors:[["sample-po-table-components"]],viewQuery:function(l,o){if(l&1&&Gl(Yo,7),l&2){let m;co(m=lo())&&(o.poModal=m.first);}},standalone:false,features:[we([ce])],decls:8,vars:9,consts:[[1,"po-font-text-large","po-text-color-neutral-dark-40"],["p-container","shadow",3,"p-show-more","p-sort-by","p-loading-show-more","p-columns","p-items","p-show-more-disabled","p-sort"],["p-table-column-template","",3,"p-property"],["p-click-out","true","p-size","sm",3,"p-title"],[1,"po-font-text"]],template:function(l,o){l&1&&(Il(0,"div",0),Qx(1,"PO UI Library"),og(),zl(2,"po-divider"),Il(3,"po-table",1),ft("p-show-more",function(p){return o.showMore(p)})("p-sort-by",function(p){return o.sort(p)}),JE(4,Bt,3,6,"ng-template",2),og(),Il(5,"po-modal",3),hx(6,Rt,4,1,"ul",null,fx),og()),l&2&&(Lp(3),nw("p-loading-show-more",o.isLoading)("p-columns",o.columns)("p-items",o.items)("p-show-more-disabled",o.showMoreDisabled)("p-sort",true),Lp(),nw("p-property","component.type"),Lp(),nw("p-title",oN("",o.title," - ",o.extraInformation?.component)),Lp(),px(o.extraInformation?.extras));},dependencies:[mv,Yo,E3,jue,AO],styles:[".badge[_ngcontent-%COMP%]{padding:3px 10px;border-radius:3px;color:#fff;width:100px;text-align:center;box-shadow:0 4px 8px #0003,0 6px 20px #00000030;font-size:10px}.badge.component[_ngcontent-%COMP%]{background-color:#82b1ff}.badge.service[_ngcontent-%COMP%]{background-color:#b39ddb}.badge.template[_ngcontent-%COMP%]{background-color:#ffb515}"],changeDetection:1})}return r})();var Nt=r=>({"docs-sample-code-tabs":r}),at=(()=>{class r{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-table-components-view"]],standalone:false,decls:38,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Table - Po Field Components"),og(),Il(4,"a",2),ft("click",function(){return o.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-table-components/sample-po-table-components.component.html"),og(),Il(13,"pre",7),Qx(14,`<div class="po-font-text-large po-text-color-neutral-dark-40">PO UI Library</div>

<po-divider />

<po-table
  p-container="shadow"
  [p-loading-show-more]="isLoading"
  [p-columns]="columns"
  [p-items]="items"
  [p-show-more-disabled]="showMoreDisabled"
  [p-sort]="true"
  (p-show-more)="showMore($event)"
  (p-sort-by)="sort($event)"
>
  <ng-template p-table-column-template [p-property]="'component.type'" let-value>
    <div class="badge { { value }}">{ { value | uppercase }}</div>
  </ng-template>
</po-table>

<po-modal p-click-out="true" p-size="sm" p-title="{ { title }} - { { extraInformation?.component }}">
  @for (extra of extraInformation?.extras; track extra) {
    <ul>
      <li class="po-font-text">{ { extra }}</li>
      <po-divider />
    </ul>
  }
</po-modal>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-table-components/sample-po-table-components.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, ViewChild, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

import { PoModalComponent, PoTableColumn, PoTableColumnLabel, PoTableColumnSort } from '@po-ui/ng-components';

import { SamplePoTableComponentStatus } from './sample-po-table-components.enum';
import { SamplePoTableComponentsService } from './sample-po-table-components.service';

@Component({
  selector: 'sample-po-table-components',
  templateUrl: './sample-po-table-components.component.html',
  styleUrls: ['./sample-po-table-components.component.css'],
  providers: [SamplePoTableComponentsService],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTableComponentsComponent implements OnInit {
  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;

  extraInformation: any;
  items: Array<any>;
  showMoreDisabled: boolean = false;
  title: any;
  isLoading: boolean = false;

  public readonly columns: Array<PoTableColumn> = [
    {
      property: 'component.status',
      type: 'label',
      label: 'Status',
      width: '5%',
      labels: <Array<PoTableColumnLabel>>[
        {
          value: SamplePoTableComponentStatus.Stable,
          color: 'caption-tag-13',
          label: 'Stable',
          textColor: 'white',
          tooltip: 'Published component'
        },
        {
          value: SamplePoTableComponentStatus.Experimental,
          color: 'caption-tag-08',
          label: 'Experimental',
          textColor: 'white',
          tooltip: 'Component in homologation'
        },
        {
          value: SamplePoTableComponentStatus.RoadMap,
          color: 'caption-tag-03',
          label: 'Roadmap',
          textColor: 'white',
          tooltip: 'Component in roadmap'
        }
      ]
    },
    {
      property: 'component.name',
      label: 'Name',
      type: 'link'
    },
    { property: 'component.type', label: 'Type', type: 'columnTemplate', width: '10%' },
    { property: 'component.description', label: 'Descri\xE7\xE3o', color: this.experimentalColor.bind(this) },
    {
      property: 'component.extra',
      label: 'Extras',
      width: '10%',
      type: 'link',
      tooltip: 'Additional details',
      action: (value, row) => {
        this.extras(value, row);
      },
      disabled: this.canShowExtras.bind(this)
    },
    {
      property: 'component.favorite',
      label: 'Actions',
      type: 'icon',
      sortable: false,
      icons: [
        {
          action: this.favorite.bind(this),
          color: this.isFavorite.bind(this),
          icon: 'an an-star',
          tooltip: 'Favorite',
          value: 'favorite'
        },
        {
          action: this.goToDocumentation.bind(this),
          disabled: this.canGoToDocumentation.bind(this),
          icon: 'an an-arrow-square-out',
          tooltip: 'Click to go to documentation',
          value: 'documentation'
        }
      ]
    }
  ];

  constructor(
    public sampleComponents: SamplePoTableComponentsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.items = this.sampleComponents.getItems();
  }

  experimentalColor(row) {
    return row?.component?.status === SamplePoTableComponentStatus.Experimental ? 'caption-tag-08' : 'caption-tag-13';
  }

  extras(value, row) {
    this.title = value;
    this.extraInformation = row;

    this.poModal.open();
  }

  goToDocumentation(row) {
    this.router.navigate([row?.component?.link]);
  }

  showMore(sort: PoTableColumnSort) {
    this.isLoading = true;
    this.showMoreDisabled = true;
    setTimeout(() => {
      this.items = this.getItems(sort);
      this.isLoading = false;
    }, 4000);
  }

  sort(sort: PoTableColumnSort) {
    this.items = this.getItems(sort);
  }

  public showAlert(msg): void {
    alert(msg);
  }

  private canGoToDocumentation(row) {
    return row?.component?.status !== SamplePoTableComponentStatus.Stable;
  }

  private canShowExtras(row: any) {
    return row?.component?.status !== SamplePoTableComponentStatus.Stable || row?.component?.extras.length === 0;
  }

  private favorite(row) {
    row.component.isFavorite = !row.component.isFavorite;
  }

  private getItems(sort: PoTableColumnSort) {
    return this.sampleComponents.getItems(sort, this.showMoreDisabled);
  }

  private isFavorite(row) {
    return row?.component?.isFavorite ? 'caption-tag-08' : 'caption-tag-13';
  }
}
`),og(),Il(21,"label",6),Qx(22,"sample-po-table-components/sample-po-table-components.enum.ts"),og(),Il(23,"pre",9),Qx(24,`export enum SamplePoTableComponentStatus {
  Stable,
  Experimental,
  RoadMap
}
`),og(),Il(25,"label",6),Qx(26,"sample-po-table-components/sample-po-table-components.service.ts"),og(),Il(27,"pre",9),Qx(28,`import { Injectable } from '@angular/core';

import { PoTableColumnSort, PoTableColumnSortType } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class SamplePoTableComponentsService {
  readonly items = [
    {
      component: {
        favorite: ['favorite', 'documentation'],
        name: 'PO Select',
        description: 'Display a list of items and allows selection',
        link: '/documentation/po-select',
        extra: 'Features',
        extras: ['Filter options (starts, contains, ends)', 'Custom services', 'Navigation by keys'],
        status: 0,
        type: 'component'
      }
    },
    {
      component: {
        favorite: ['favorite', 'documentation'],
        name: 'PO Checkbox',
        description: 'Group of square buttons that allows multiple items to be selected',
        link: '/documentation/po-checkbox-group',
        extra: 'Best Practices',
        extras: ['Short and objective texts for items', 'Use with short lists', 'For big lists use PO Multiselect'],
        status: 0,
        type: 'component'
      }
    },
    {
      component: {
        favorite: ['favorite', 'documentation'],
        name: 'PO Page Login',
        description: 'Template for authentication',
        link: '/documentation/po-page-login',
        extra: 'Features',
        extras: [],
        status: 0,
        type: 'template'
      }
    },
    {
      component: {
        favorite: ['favorite', 'documentation'],
        name: 'PO Number',
        description: 'Input that allows only numbers',
        link: '/documentation/po-number',
        extra: 'Features',
        extras: ['Filter options (starts, contains, ends)', 'Custom services', 'Navigation by keys'],
        status: 1,
        type: 'component'
      }
    },
    {
      component: {
        favorite: ['favorite', 'documentation'],
        name: 'PO Page Dynamic Table',
        description: 'Template for list resources with a table',
        link: '/documentation/po-page-dynamic-table',
        extra: 'Features',
        extras: ['6 defaults actions', 'Use Metadata to build your page', 'No code', 'Customization'],
        status: 0,
        type: 'template'
      }
    },
    {
      component: {
        favorite: ['favorite', 'documentation'],
        name: 'PO Combo',
        description: 'Display a list of items with filter and allows selection',
        link: '/documentation/po-combo',
        extra: 'Features',
        extras: ['Filter options (starts, contains, ends)', 'Custom services', 'Navigation by keys'],
        status: 0,
        type: 'component'
      }
    },
    {
      component: {
        favorite: ['favorite', 'documentation'],
        name: 'PO Notification',
        description: 'Show notification easily and quickly',
        link: '/documentation/po-notification',
        extra: 'Features',
        extras: ['4 types of notifications', 'Define time for your notifications', 'Use actions in your notification'],
        status: 0,
        type: 'service'
      }
    },
    {
      component: {
        favorite: ['favorite', 'documentation'],
        name: 'PO Multiselect',
        description: 'Display a list of items and allows multiple selection',
        link: '/documentation/po-multiselect',
        extra: 'Features',
        extras: ['Filter options (starts, contains, ends)', 'Custom services', 'Navigation by keys'],
        status: 1,
        type: 'component'
      }
    },
    {
      component: {
        favorite: [],
        name: 'PO Grid',
        description: 'Create a grid for edition',
        link: '/documentation/po-grid',
        extra: 'Features',
        extras: [],
        status: 2,
        type: 'component'
      }
    },
    {
      component: {
        favorite: ['favorite', 'documentation'],
        name: 'PO Input',
        description: 'Input for general texts',
        link: '/documentation/po-input',
        extra: 'Features',
        extras: ['Filter options (starts, contains, ends)', 'Custom services', 'Navigation by keys'],
        status: 0,
        type: 'component'
      }
    },
    {
      component: {
        favorite: ['favorite', 'documentation'],
        name: 'PO Textarea',
        description: 'Larger input for big texts',
        link: '/documentation/po-textarea',
        extra: 'Best Practices',
        extras: ['Recommended to large texts like observations and details', 'For short texts use po-input'],
        status: 1,
        type: 'component'
      }
    },
    {
      component: {
        favorite: ['favorite', 'documentation'],
        name: 'PO Datepicker',
        description: 'Input with calendar for dates',
        link: '/documentation/po-datepicker',
        extra: 'Features',
        extras: [
          'Multiple idioms ( pt, es , en)',
          'Custom date formats',
          'Period validation (start date and end date)'
        ],
        status: 1,
        type: 'component'
      }
    },
    {
      component: {
        favorite: ['favorite', 'documentation'],
        name: 'PO Email',
        description: 'Input that allows valid email texts (username@email.com)',
        link: '/documentation/po-email',
        extra: 'Features',
        extras: ['Filter options (starts, contains, ends)', 'Custom services', 'Navigation by keys'],
        status: 0,
        type: 'component'
      }
    },
    {
      component: {
        favorite: ['favorite', 'documentation'],
        name: 'PO Url',
        description: 'Input that expects a valid url as text (http://www.url.com)',
        link: '/documentation/po-url',
        extra: 'Features',
        extras: ['Filter options (starts, contains, ends)', 'Custom services', 'Navigation by keys'],
        status: 0,
        type: 'component'
      }
    },
    {
      component: {
        favorite: ['favorite', 'documentation'],
        name: 'PO Password',
        description: 'Input with bullet text to type passwords',
        link: '/documentation/po-password',
        extra: 'Features',
        extras: ['Filter options (starts, contains, ends)', 'Custom services', 'Navigation by keys'],
        status: 0,
        type: 'component'
      }
    },
    {
      component: {
        favorite: ['favorite', 'documentation'],
        name: 'PO Login',
        description: 'Input with a user icon that represents a login field',
        link: '/documentation/po-login',
        extra: 'Features',
        extras: ['Filter options (starts, contains, ends)', 'Custom services', 'Navigation by keys'],
        status: 0,
        type: 'component'
      }
    },
    {
      component: {
        favorite: ['favorite', 'documentation'],
        name: 'PO Upload',
        description: 'Upload file(s) with a loading bar',
        link: '/documentation/po-upload',
        extra: 'Features',
        extras: ['Multiple file selection', 'Automatic upload after click', 'File format and size restriction'],
        status: 1,
        type: 'component'
      }
    },
    {
      component: {
        favorite: ['favorite', 'documentation'],
        name: 'PO Avatar',
        description: 'Creates a circle with a picture inside',
        link: '/documentation/po-avatar',
        extra: 'Features',
        extras: ['Multiple sizes', 'Default image'],
        status: 0,
        type: 'component'
      }
    }
  ];

  getItems(sort?: PoTableColumnSort, loadAll: boolean = false): Array<any> {
    const result = [...this.items];

    if (sort && sort.column) {
      result.sort((value, valueToCompare) => this.sort(value, valueToCompare, sort));
    }

    if (!loadAll) {
      result.length = 10;
    }

    return result;
  }

  private sort(value: any, valueToCompare: any, sort: PoTableColumnSort) {
    const property = sort.column.property;
    const type = sort.type;

    if (property.split('.').length > 1) {
      const propertySplitedFirst = property.split('.')[0];
      const propertySplitedLast = property.split('.')[1];
      if (
        value[propertySplitedFirst][propertySplitedLast] < valueToCompare[propertySplitedFirst][propertySplitedLast]
      ) {
        return type === PoTableColumnSortType.Ascending ? -1 : 1;
      }
      return type === PoTableColumnSortType.Ascending ? 1 : -1;
    } else {
      if (value[property] < valueToCompare[property]) {
        return type === PoTableColumnSortType.Ascending ? -1 : 1;
      }
      return type === PoTableColumnSortType.Ascending ? 1 : -1;
    }
  }
}
`),og()()(),Il(29,"po-tab",10)(30,"div")(31,"label",6),Qx(32,"sample-po-table-components/sample-po-table-components.component.css"),og(),Il(33,"pre",11),Qx(34,`.badge {
  padding: 3px 10px;
  border-radius: 3px;
  color: #fff;
  width: 100px;
  text-align: center;
  box-shadow:
    0 4px 8px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
  font-size: 10px;
}

.badge.component {
  background-color: #82b1ff;
}

.badge.service {
  background-color: #b39ddb;
}

.badge.template {
  background-color: #ffb515;
}
`),og()()()()(),Il(35,"div",12),zl(36,"sample-po-table-components"),og(),zl(37,"hr")),l&2&&(Lp(5),Ux("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,Nt,o.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,ot],encapsulation:2})}return r})();var ue=(()=>{class r{http;constructor(a){this.http=a;}getColumns(){return [{property:"id",label:"Id",type:"string",width:"90px"},{property:"label",label:"Name",type:"string",width:"90px"},{property:"email",label:"E-mail",type:"string",width:"120px"}]}getItems(){return this.http.get("https://po-sample-api.onrender.com/v1/heroes").pipe(DT("items"))}static \u0275fac=function(l){return new(l||r)(I(nb))};static \u0275prov=w({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();var jt=["POItemsOri"],Wt=["POItemsSelected"],lt=(()=>{class r{service;poItemsOri;poItemsSelected;items=[];itemsSelected=[];columns;constructor(a){this.service=a;}ngOnInit(){this.getColumns(),this.getItems();}getColumns(){this.columns=this.service.getColumns();}getItems(){this.service.getItems().subscribe({next:a=>this.items=a,error:a=>console.error(a)});}changeOptions(a,l){if(l==="new")this.itemsSelected.push({id:a.id,label:a.label,email:a.email}),this.itemsSelected=[...this.itemsSelected];else {let o=this.itemsSelected.findIndex(m=>m.id===a.id);this.poItemsSelected.removeItem(o),this.itemsSelected=[...this.poItemsSelected.items];}}deleteItems(a){this.items=a,this.itemsSelected=[];}static \u0275fac=function(l){return new(l||r)(C(ue))};static \u0275cmp=Un({type:r,selectors:[["sample-po-table-heroes"]],viewQuery:function(l,o){if(l&1&&Gl(jt,7)(Wt,7),l&2){let m;co(m=lo())&&(o.poItemsOri=m.first),co(m=lo())&&(o.poItemsSelected=m.first);}},standalone:false,features:[we([ue])],decls:11,vars:16,consts:[["POItemsOri",""],["POItemsSelected",""],[1,"po-row","po-pb-2"],[1,"po-md-6"],[1,"po-font-text-bold","po-text-color-neutral-dark-40"],["p-selectable","true","p-infinite-scroll-distance","80","p-height","300",3,"p-selected","p-unselected","p-delete-items","p-columns","p-infinite-scroll","p-hide-select-all","p-hide-table-search","p-items","p-hide-action-fixed-columns","p-text-wrap","p-virtual-scroll"],["p-height","300",3,"p-columns","p-hide-table-search","p-striped","p-infinite-scroll","p-items","p-hide-action-fixed-columns","p-text-wrap","p-virtual-scroll"]],template:function(l,o){l&1&&(Il(0,"div",2)(1,"div",3)(2,"div",4),Qx(3,"Choose one or more heroes for your team"),og(),Il(4,"po-table",5,0),ft("p-selected",function(p){return o.changeOptions(p,"new")})("p-unselected",function(p){return o.changeOptions(p,"change")})("p-delete-items",function(p){return o.deleteItems(p)}),og()(),Il(6,"div",3)(7,"div",4),Qx(8,"Here your chosen heroes"),og(),zl(9,"po-table",6,1),og()()),l&2&&(Lp(4),nw("p-columns",o.columns)("p-infinite-scroll",true)("p-hide-select-all",true)("p-hide-table-search",false)("p-items",o.items)("p-hide-action-fixed-columns",true)("p-text-wrap",true)("p-virtual-scroll",false),Lp(5),nw("p-columns",o.columns)("p-hide-table-search",false)("p-striped",true)("p-infinite-scroll",true)("p-items",o.itemsSelected)("p-hide-action-fixed-columns",true)("p-text-wrap",true)("p-virtual-scroll",false));},dependencies:[E3],encapsulation:2,changeDetection:1})}return r})();var Qt=r=>({"docs-sample-code-tabs":r}),rt=(()=>{class r{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-table-heroes-view"]],standalone:false,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Table - Heroes"),og(),Il(4,"a",2),ft("click",function(){return o.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-table-heroes/sample-po-table-heroes.component.html"),og(),Il(13,"pre",7),Qx(14,`<div class="po-row po-pb-2">
  <div class="po-md-6">
    <div class="po-font-text-bold po-text-color-neutral-dark-40">Choose one or more heroes for your team</div>
    <po-table
      #POItemsOri
      [p-columns]="columns"
      [p-infinite-scroll]="true"
      p-selectable="true"
      [p-hide-select-all]="true"
      [p-hide-table-search]="false"
      p-infinite-scroll-distance="80"
      (p-selected)="changeOptions($event, 'new')"
      (p-unselected)="changeOptions($event, 'change')"
      p-height="300"
      [p-items]="items"
      (p-delete-items)="deleteItems($event)"
      [p-hide-action-fixed-columns]="true"
      [p-text-wrap]="true"
      [p-virtual-scroll]="false"
    >
    </po-table>
  </div>
  <div class="po-md-6">
    <div class="po-font-text-bold po-text-color-neutral-dark-40">Here your chosen heroes</div>
    <po-table
      #POItemsSelected
      [p-columns]="columns"
      [p-hide-table-search]="false"
      [p-striped]="true"
      [p-infinite-scroll]="true"
      p-height="300"
      [p-items]="itemsSelected"
      [p-hide-action-fixed-columns]="true"
      [p-text-wrap]="true"
      [p-virtual-scroll]="false"
    >
    </po-table>
  </div>
</div>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-table-heroes/sample-po-table-heroes.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, ViewChild, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { PoTableColumn, PoTableComponent } from '@po-ui/ng-components';

import { SamplePoTableHeroesService } from './sample-po-table-heroes.service';

@Component({
  selector: 'sample-po-table-heroes',
  templateUrl: './sample-po-table-heroes.component.html',
  providers: [SamplePoTableHeroesService],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTableHeroesComponent implements OnInit {
  @ViewChild('POItemsOri', { static: true }) poItemsOri: PoTableComponent;
  @ViewChild('POItemsSelected', { static: true }) poItemsSelected: PoTableComponent;

  items: Array<any> = [];
  itemsSelected: Array<any> = [];
  columns: Array<PoTableColumn>;

  constructor(private service: SamplePoTableHeroesService) {}

  ngOnInit(): void {
    this.getColumns();
    this.getItems();
  }

  getColumns(): void {
    this.columns = this.service.getColumns();
  }

  getItems(): void {
    this.service.getItems().subscribe({
      next: res => (this.items = res),
      error: err => console.error(err)
    });
  }

  changeOptions(event, type): void {
    if (type === 'new') {
      this.itemsSelected.push({
        id: event.id,
        label: event.label,
        email: event.email
      });
      this.itemsSelected = [...this.itemsSelected];
    } else {
      const index = this.itemsSelected.findIndex(el => el.id === event.id);
      this.poItemsSelected.removeItem(index);
      this.itemsSelected = [...this.poItemsSelected.items];
    }
  }

  deleteItems(items: Array<any>) {
    this.items = items;
    this.itemsSelected = [];
  }
}
`),og(),Il(21,"label",6),Qx(22,"sample-po-table-heroes/sample-po-table-heroes.service.ts"),og(),Il(23,"pre",9),Qx(24,`import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PoTableColumn } from '@po-ui/ng-components';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SamplePoTableHeroesService {
  constructor(private http: HttpClient) {}
  getColumns(): Array<PoTableColumn> {
    return [
      { property: 'id', label: 'Id', type: 'string', width: '90px' },
      { property: 'label', label: 'Name', type: 'string', width: '90px' },
      { property: 'email', label: 'E-mail', type: 'string', width: '120px' }
    ];
  }

  getItems(): Observable<any> {
    return this.http.get('https://po-sample-api.onrender.com/v1/heroes').pipe(pluck('items'));
  }
}
`),og()()()()(),Il(25,"div",10),zl(26,"sample-po-table-heroes"),og(),zl(27,"hr")),l&2&&(Lp(5),Ux("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,Qt,o.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,lt],encapsulation:2})}return r})();var Jt=()=>({code:"001",table:"PO Table",angular:"PO-UI"}),$t=r=>[r],mt=(()=>{class r{static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-table-draggable"]],standalone:false,decls:4,vars:7,consts:[[1,"po-font-text-bold","po-text-color-neutral-dark-40"],[3,"p-items","p-draggable","p-hide-columns-manager","p-hide-table-search"]],template:function(l,o){l&1&&(Il(0,"div",0),Qx(1,` Choose one column and drag to another horizontal position in the table and drop
`),og(),zl(2,"po-divider")(3,"po-table",1)),l&2&&(Lp(3),nw("p-items",uN(5,$t,lN(4,Jt)))("p-draggable",true)("p-hide-columns-manager",true)("p-hide-table-search",false));},dependencies:[mv,E3],encapsulation:2,changeDetection:1})}return r})();var Kt=r=>({"docs-sample-code-tabs":r}),st=(()=>{class r{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-table-draggable-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Table Drag and Drop"),og(),Il(4,"a",2),ft("click",function(){return o.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-table-draggable/sample-po-table-draggable.component.html"),og(),Il(13,"pre",7),Qx(14,`<div class="po-font-text-bold po-text-color-neutral-dark-40">
  Choose one column and drag to another horizontal position in the table and drop
</div>

<po-divider></po-divider>

<po-table
  [p-items]="[{ code: '001', table: 'PO Table', angular: 'PO-UI' }]"
  [p-draggable]="true"
  [p-hide-columns-manager]="true"
  [p-hide-table-search]="false"
>
</po-table>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-table-draggable/sample-po-table-draggable.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-table-draggable',
  templateUrl: './sample-po-table-draggable.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTableDraggableComponent {}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-table-draggable"),og(),zl(23,"hr")),l&2&&(Lp(5),Ux("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,Kt,o.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,mt],encapsulation:2})}return r})();var dt=(()=>{class r{static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-table-doc"]],standalone:false,decls:4661,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-table-row-template"],["href","/documentation/po-table-column-template"],["href","/documentation/po-table-cell-template"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","PoTableAction[]"],["href","https://po-ui.io/icons"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","PoTableColumn[]"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","PoSearchFilterMode"],["pan","",1,"docs-api-property-type","Array<string>"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","any[]"],["pan","",1,"docs-api-property-type","PoTableLiterals"],["href","/documentation/po-i18n"],["href","https://po-ui.io/guides/api"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],["pan","",1,"docs-api-property-type","{","key:","value","}"],["pan","",1,"docs-api-property-type"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["pan","",1,"docs-api-property-type","Array<PoPopupAction>"],["pan","",1,"docs-api-property-type","PoTableColumn"],["pan","",1,"docs-api-property-type","PoTableColumnSortType"],["pan","",1,"docs-api-property-type","PoTableBoolean"],[1,"dot","po-color-01"],[1,"dot","po-color-02"],[1,"dot","po-color-03"],[1,"dot","po-color-04"],[1,"dot","po-color-05"],[1,"dot","po-color-06"],[1,"dot","po-color-07"],[1,"dot","po-color-08"],[1,"dot","po-color-09"],[1,"dot","po-color-10"],[1,"dot","po-color-11"],[1,"dot","po-color-12"],[1,"dot","po-caption-tag-01"],[1,"dot","po-caption-tag-02"],[1,"dot","po-caption-tag-03"],[1,"dot","po-caption-tag-04"],[1,"dot","po-caption-tag-05"],[1,"dot","po-caption-tag-06"],[1,"dot","po-caption-tag-07"],[1,"dot","po-caption-tag-08"],[1,"dot","po-caption-tag-09"],[1,"dot","po-caption-tag-10"],[1,"dot","po-caption-tag-11"],[1,"dot","po-caption-tag-12"],[1,"dot","po-caption-tag-13"],[1,"dot","po-caption-tag-14"],[1,"dot","po-caption-tag-15"],[1,"dot","po-caption-tag-16"],[1,"dot","po-caption-tag-17"],[1,"dot","po-caption-tag-18"],[1,"dot","po-caption-tag-19"],[1,"dot","po-caption-tag-20"],[1,"dot","po-caption-tag-21"],[1,"dot","po-caption-tag-22"],[1,"dot","po-caption-tag-23"],[1,"dot","po-caption-tag-24"],[1,"dot","po-caption-tag-25"],[1,"dot","po-caption-tag-26"],[1,"dot","po-caption-tag-27"],[1,"dot","po-caption-tag-28"],[1,"dot","po-caption-tag-29"],[1,"dot","po-caption-tag-30"],[1,"dot","po-caption-tag-31"],[1,"dot","po-caption-tag-32"],[1,"dot","po-caption-tag-33"],[1,"dot","po-caption-tag-34"],[1,"dot","po-caption-tag-35"],["pan","",1,"docs-api-property-type","PoTableDetail"],["href","https://angular.dev/api/common/DecimalPipe"],["pan","",1,"docs-api-property-type","Array<PoTableColumnIcon>"],["href","documentation/po-table#tableColumnIcon"],["pan","",1,"docs-api-property-type","Array<PoTableColumnLabel>"],["pan","",1,"docs-api-property-type","Array<PoTableSubtitleColumn>"],["id","tableColumnIcon"],[1,"an","an-check"],[1,"an","an-warning-circle"],[1,"an","an-x"],[1,"an","an-info"],["pan","",1,"docs-api-property-type","PoTagType"],["href","https://angular.io/api/common/DecimalPipe"],["pan","",1,"docs-api-property-type","Array<PoTableDetailColumn>"]],template:function(l,o){l&1&&(Il(0,"div",0)(1,"p",1)(2,"code"),Qx(3,"import { PoTableModule } from '@po-ui/ng-components';"),og()(),Il(4,"div",2)(5,"p"),Qx(6,"M\xF3dulo do componente po-table"),og()(),Il(7,"h3",3),Qx(8,"Componente"),og(),Il(9,"h4",4)(10,"code",5),Qx(11,"PoTableComponent"),og()(),Il(12,"div",2)(13,"p"),Qx(14,`Este componente de tabela \xE9 utilizado para exibi\xE7\xE3o de dados com diferentes tipos como por exemplo textos, data, horas e n\xFAmeros com
formato personalizado.`),og(),Il(15,"p"),Qx(16,`Tamb\xE9m \xE9 possivel criar tabelas com ordena\xE7\xE3o de dados, linhas com detalhes, coluna para sele\xE7\xE3o de linhas, coluna com a\xE7\xF5es e tamb\xE9m
carregamento por demanda atrav\xE9s do bot\xE3o `),Il(17,"strong"),Qx(18,"Carregar mais resultados"),og(),Qx(19,"."),og(),Il(20,"blockquote")(21,"p"),Qx(22,"As linhas de detalhes podem tamb\xE9m ser customizadas atrav\xE9s do "),Il(23,"a",6)(24,"code"),Qx(25,"p-table-row-template"),og()(),Qx(26,"."),og()(),Il(27,"blockquote")(28,"p"),Qx(29,"As colunas podem ser customizadas atrav\xE9s dos templates "),Il(30,"a",7)(31,"code"),Qx(32,"p-table-column-template"),og()(),Qx(33,`
e `),Il(34,"a",8)(35,"code"),Qx(36,"p-table-cell-template"),og()(),Qx(37,"."),og()(),Il(38,"p"),Qx(39,`O componente permite gerenciar a exibi\xE7\xE3o das colunas dinamicamente. Esta funcionalidade pode ser acessada atrav\xE9s do \xEDcone de engrenagem
no canto superior direito do cabe\xE7alho da tabela.`),og(),Il(40,"p"),Qx(41,"Caso a largura de todas as colunas forem definidas e o total ultrapassar o tamanho tabela, ser\xE1 exibido um "),Il(42,"em"),Qx(43,"scroll"),og(),Qx(44,` na horizontal para a
completa visualiza\xE7\xE3o dos dados.`),og(),Il(45,"h4"),Qx(46,"Tokens customiz\xE1veis"),og(),Il(47,"p"),Qx(48,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),og(),Il(49,"blockquote")(50,"p"),Qx(51,"Para maiores informa\xE7\xF5es, acesse o guia "),Il(52,"a",9),Qx(53,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),Qx(54,"."),og()(),Il(55,"table")(56,"thead")(57,"tr")(58,"th"),Qx(59,"Propriedade"),og(),Il(60,"th"),Qx(61,"Descri\xE7\xE3o"),og(),Il(62,"th"),Qx(63,"Valor Padr\xE3o"),og()()(),Il(64,"tbody")(65,"tr")(66,"td")(67,"strong"),Qx(68,"Default Values"),og()(),zl(69,"td")(70,"td"),og(),Il(71,"tr")(72,"td")(73,"code"),Qx(74,"--font-family"),og()(),Il(75,"td"),Qx(76,"Fam\xEDlia tipogr\xE1fica usada"),og(),Il(77,"td")(78,"code"),Qx(79,"var(--font-family-theme)"),og()()(),Il(80,"tr")(81,"td")(82,"code"),Qx(83,"--background-color"),og()(),Il(84,"td"),Qx(85,"Cor de background"),og(),Il(86,"td")(87,"code"),Qx(88,"var(--color-neutral-light-00)"),og()()(),Il(89,"tr")(90,"td")(91,"code"),Qx(92,"--color"),og()(),Il(93,"td"),Qx(94,"Cor principal da table"),og(),Il(95,"td")(96,"code"),Qx(97,"var(--color-neutral-dark-95)"),og()()(),Il(98,"tr")(99,"td")(100,"code"),Qx(101,"--background-striped-color"),og()(),Il(102,"td"),Qx(103,"Cor do background quando striped"),og(),Il(104,"td")(105,"code"),Qx(106,"var(--color-neutral-light-05)"),og()()(),Il(107,"tr")(108,"td")(109,"code"),Qx(110,"--color-line"),og()(),Il(111,"td"),Qx(112,"Cor das linhas"),og(),Il(113,"td")(114,"code"),Qx(115,"var(--color-neutral-mid-40)"),og()()(),Il(116,"tr")(117,"td")(118,"strong"),Qx(119,"Hover"),og()(),zl(120,"td")(121,"td"),og(),Il(122,"tr")(123,"td")(124,"code"),Qx(125,"--color-hover"),og()(),Il(126,"td"),Qx(127,"Cor principal no estado hover"),og(),Il(128,"td")(129,"code"),Qx(130,"var(--color-action-hover)"),og()()(),Il(131,"tr")(132,"td")(133,"code"),Qx(134,"--background-color-hover"),og()(),Il(135,"td"),Qx(136,"Cor de background no estado hover"),og(),Il(137,"td")(138,"code"),Qx(139,"var(--color-brand-01-lighter)"),og()()(),Il(140,"tr")(141,"td")(142,"strong"),Qx(143,"Focused"),og()(),zl(144,"td")(145,"td"),og(),Il(146,"tr")(147,"td")(148,"code"),Qx(149,"--outline-color-focused"),og()(),Il(150,"td"),Qx(151,"Cor do outline do estado de focus"),og(),Il(152,"td")(153,"code"),Qx(154,"var(--color-action-focus)"),og()()(),Il(155,"tr")(156,"td")(157,"strong"),Qx(158,"Disabled"),og()(),zl(159,"td")(160,"td"),og(),Il(161,"tr")(162,"td")(163,"code"),Qx(164,"--color-disabled"),og()(),Il(165,"td"),Qx(166,"Cor principal no estado disabled"),og(),Il(167,"td")(168,"code"),Qx(169,"var(--color-neutral-mid-40)"),og()()(),Il(170,"tr")(171,"td")(172,"strong"),Qx(173,"Headline"),og()(),zl(174,"td")(175,"td"),og(),Il(176,"tr")(177,"td")(178,"code"),Qx(179,"--background-color-headline"),og(),Qx(180," \xA0"),og(),Il(181,"td"),Qx(182,"Cor do cabe\xE7alho"),og(),Il(183,"td")(184,"code"),Qx(185,"var(--color-neutral-light-10)"),og()()(),Il(186,"tr")(187,"td")(188,"code"),Qx(189,"--font-weight-headline"),og()(),Il(190,"td"),Qx(191,"Peso da fonte do cabe\xE7alho"),og(),Il(192,"td")(193,"code"),Qx(194,"var(--font-weight-bold)"),og()()(),Il(195,"tr")(196,"td")(197,"strong"),Qx(198,"Selected"),og()(),zl(199,"td")(200,"td"),og(),Il(201,"tr")(202,"td")(203,"code"),Qx(204,"--background-color-selected"),og(),Qx(205,"\xA0"),og(),Il(206,"td"),Qx(207,"Cor de background no estado de selecionado"),og(),Il(208,"td")(209,"code"),Qx(210,"var(--color-brand-01-lightest)"),og()()(),Il(211,"tr")(212,"td")(213,"strong"),Qx(214,"Actived"),og()(),zl(215,"td")(216,"td"),og(),Il(217,"tr")(218,"td")(219,"code"),Qx(220,"--color-actived"),og()(),Il(221,"td"),Qx(222,"Cor do texto no estado de selecionado"),og(),Il(223,"td")(224,"code"),Qx(225,"var(--color-neutral-dark-90)"),og()()(),Il(226,"tr")(227,"td")(228,"code"),Qx(229,"--background-color-actived"),og()(),Il(230,"td"),Qx(231,"Cor de background no estado de selecionado"),og(),Il(232,"td")(233,"code"),Qx(234,"var(--color-brand-01-light)"),og()()()()()(),Il(235,"div",10)(236,"h4",11),Qx(237,"Seletor"),og(),Il(238,"pre",12),Qx(239,`<po-table
    p-actions-right="boolean"
    p-actions="PoTableAction[]"
    (p-all-selected)="EventEmitter"
    (p-all-unselected)="EventEmitter"
    p-auto-collapse="boolean"
    (p-change-fixed-columns)="EventEmitter"
    (p-change-visible-columns)="EventEmitter"
    (p-collapsed)="EventEmitter"
    (p-restore-column-manager)="EventEmitter"
    p-columns="PoTableColumn[]"
    p-components-size="string"
    p-container="string"
    p-draggable="boolean"
    (p-delete-items)="EventEmitter"
    (p-expanded)="EventEmitter"
    p-filter-type="PoSearchFilterMode"
    p-filtered-columns="Array<string>"
    p-height="number"
    p-hide-action-fixed-columns="boolean"
    p-hide-batch-actions="boolean"
    p-hide-columns-manager="boolean"
    p-hide-detail="boolean"
    p-hide-select-all="boolean"
    p-hide-table-search="boolean"
    p-infinite-scroll="boolean"
    p-infinite-scroll-distance="number"
    p-items="any[]"
    p-literals="PoTableLiterals"
    p-loading="boolean"
    p-loading-show-more="boolean"
    p-max-columns="number"
    p-param-delete-api="string"
    p-selectable="boolean"
    p-selectable-entire-line="boolean"
    (p-selected)="EventEmitter"
    p-service-api="string"
    p-service-delete="string"
    (p-show-more)="EventEmitter"
    p-show-more-disabled="boolean"
    p-single-select="boolean"
    p-sort="boolean"
    (p-sort-by)="EventEmitter"
    p-spacing="string"
    p-striped="boolean"
    p-text-wrap="boolean"
    (p-unselected)="EventEmitter"
    p-virtual-scroll="boolean" >
</po-table>
`),og()(),Il(240,"h4",13),Qx(241,"Propriedades"),og(),Il(242,"table",14)(243,"tr",15)(244,"th",16),Qx(245,"Nome"),og(),Il(246,"th",16),Qx(247,"Tipo"),og(),Il(248,"th",16),Qx(249,"Padr\xE3o"),og(),Il(250,"th",16),Qx(251,"Descri\xE7\xE3o"),og()(),Il(252,"tr",17)(253,"td",18)(254,"div",19)(255,"span",20),Qx(256," p-actions-right"),zl(257,"br"),og()()(),Il(258,"td",21)(259,"code",22),Qx(260,"boolean"),og()(),Il(261,"td",23)(262,"p")(263,"code"),Qx(264,"false"),og()()(),Il(265,"td",24)(266,"em")(267,"strong"),Qx(268,"(opcional)"),og()(),Il(269,"p"),Qx(270,"Define que a coluna de a\xE7\xF5es ficar\xE1 no lado direito da tabela."),og()()(),Il(271,"tr",17)(272,"td",18)(273,"div",19)(274,"span",20),Qx(275," p-actions"),zl(276,"br"),og()()(),Il(277,"td",21)(278,"code",25),Qx(279,"PoTableAction[]"),og()(),Il(280,"td",23),Qx(281,"-"),og(),Il(282,"td",24)(283,"em")(284,"strong"),Qx(285,"(opcional)"),og()(),Il(286,"p"),Qx(287,"Define uma lista de a\xE7\xF5es."),og(),Il(288,"p"),Qx(289,`Quando houver apenas uma a\xE7\xE3o definida ela ser\xE1 exibida diretamente na coluna, caso contr\xE1rio, o componente
se encarrega de agrup\xE1-las exibindo o \xEDcone `),Il(290,"a",26)(291,"strong"),Qx(292,"an an-dots-three"),og()(),Qx(293," que listar\xE1 as a\xE7\xF5es ao ser clicado."),og(),Il(294,"p")(295,"strong"),Qx(296,"A coluna de a\xE7\xF5es n\xE3o ser\xE1 exibida quando:"),og()(),Il(297,"ul")(298,"li"),Qx(299,"a lista conter valores inv\xE1lidos ou indefinidos."),og(),Il(300,"li"),Qx(301,"tenha uma \xFAnica a\xE7\xE3o e a mesma n\xE3o for vis\xEDvel."),og()()()(),Il(302,"tr",17)(303,"td",18)(304,"div",27)(305,"span",28),Qx(306," (p-all-selected)"),zl(307,"br"),og()()(),Il(308,"td",21)(309,"code",29),Qx(310,"EventEmitter"),og()(),Il(311,"td",23),Qx(312,"-"),og(),Il(313,"td",24)(314,"em")(315,"strong"),Qx(316,"(opcional)"),og()(),Il(317,"p"),Qx(318,"Evento executado quando todas as linhas s\xE3o selecionadas por meio do "),Il(319,"em"),Qx(320,"checkbox"),og(),Qx(321," que seleciona todas as linhas."),og()()(),Il(322,"tr",17)(323,"td",18)(324,"div",27)(325,"span",28),Qx(326," (p-all-unselected)"),zl(327,"br"),og()()(),Il(328,"td",21)(329,"code",29),Qx(330,"EventEmitter"),og()(),Il(331,"td",23),Qx(332,"-"),og(),Il(333,"td",24)(334,"em")(335,"strong"),Qx(336,"(opcional)"),og()(),Il(337,"p"),Qx(338,"Evento executado quando a sele\xE7\xE3o das linhas \xE9 desmarcada por meio do "),Il(339,"em"),Qx(340,"checkbox"),og(),Qx(341," que seleciona todas as linhas."),og()()(),Il(342,"tr",17)(343,"td",18)(344,"div",19)(345,"span",20),Qx(346," p-auto-collapse"),zl(347,"br"),og()()(),Il(348,"td",21)(349,"code",22),Qx(350,"boolean"),og()(),Il(351,"td",23)(352,"p")(353,"code"),Qx(354,"false"),og()()(),Il(355,"td",24)(356,"em")(357,"strong"),Qx(358,"(opcional)"),og()(),Il(359,"p"),Qx(360,"Permite fechar um detalhe ou row template automaticamente, ao abrir outro item."),og()()(),Il(361,"tr",17)(362,"td",18)(363,"div",27)(364,"span",28),Qx(365," (p-change-fixed-columns)"),zl(366,"br"),og()()(),Il(367,"td",21)(368,"code",29),Qx(369,"EventEmitter"),og()(),Il(370,"td",23),Qx(371,"-"),og(),Il(372,"td",24)(373,"em")(374,"strong"),Qx(375,"(opcional)"),og()(),Il(376,"p"),Qx(377,"Evento disparado ao alterar o estado de fixa\xE7\xE3o de uma coluna no gerenciador de colunas."),og(),Il(378,"p"),Qx(379,`O componente envia como par\xE2metro um array de string com as propriedades das colunas fixas.
Por exemplo: ["name", "age"].`),og(),Il(380,"blockquote")(381,"p"),Qx(382,"Incompat\xEDvel com "),Il(383,"code"),Qx(384,"p-hide-action-fixed-columns"),og(),Qx(385,". Quando esta propriedade estiver ativa, o evento n\xE3o ser\xE1 disparado."),og()()()(),Il(386,"tr",17)(387,"td",18)(388,"div",27)(389,"span",28),Qx(390," (p-change-visible-columns)"),zl(391,"br"),og()()(),Il(392,"td",21)(393,"code",29),Qx(394,"EventEmitter"),og()(),Il(395,"td",23),Qx(396,"-"),og(),Il(397,"td",24)(398,"em")(399,"strong"),Qx(400,"(opcional)"),og()(),Il(401,"p"),Qx(402,"Evento disparado ao fechar o page slide do gerenciador de colunas ap\xF3s alterar as colunas vis\xEDveis."),og(),Il(403,"p"),Qx(404,`O componente envia como par\xE2metro um array de string com as colunas vis\xEDveis atualizadas.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),og()()(),Il(405,"tr",17)(406,"td",18)(407,"div",27)(408,"span",28),Qx(409," (p-collapsed)"),zl(410,"br"),og()()(),Il(411,"td",21)(412,"code",29),Qx(413,"EventEmitter"),og()(),Il(414,"td",23),Qx(415,"-"),og(),Il(416,"td",24)(417,"em")(418,"strong"),Qx(419,"(opcional)"),og()(),Il(420,"p"),Qx(421,"Evento executado ao colapsar uma linha do "),Il(422,"code"),Qx(423,"po-table"),og(),Qx(424,"."),og(),Il(425,"blockquote")(426,"p"),Qx(427,"Como par\xE2metro o componente envia o item colapsado."),og()()()(),Il(428,"tr",17)(429,"td",18)(430,"div",27)(431,"span",28),Qx(432," (p-restore-column-manager)"),zl(433,"br"),og()()(),Il(434,"td",21)(435,"code",29),Qx(436,"EventEmitter"),og()(),Il(437,"td",23),Qx(438,"-"),og(),Il(439,"td",24)(440,"em")(441,"strong"),Qx(442,"(opcional)"),og()(),Il(443,"p"),Qx(444,"Evento disparado ao clicar no bot\xE3o de restaurar padr\xE3o no gerenciador de colunas."),og(),Il(445,"p"),Qx(446,`O componente envia como par\xE2metro um array de string com as colunas configuradas inicialmente.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),og()()(),Il(447,"tr",17)(448,"td",18)(449,"div",19)(450,"span",20),Qx(451," p-columns"),zl(452,"br"),og()()(),Il(453,"td",21)(454,"code",30),Qx(455,"PoTableColumn[]"),og()(),Il(456,"td",23),Qx(457,"-"),og(),Il(458,"td",24)(459,"em")(460,"strong"),Qx(461,"(opcional)"),og()(),Il(462,"p"),Qx(463,"Lista das colunas da tabela, deve receber um "),Il(464,"em"),Qx(465,"array"),og(),Qx(466," de objetos que implementam a interface "),Il(467,"code"),Qx(468,"PoTableColumn"),og(),Qx(469,`.
Por padr\xE3o receber\xE1 como valor a primeira coluna da lista de itens da tabela.`),og(),Il(470,"blockquote")(471,"p"),Qx(472,"Caso n\xE3o encontre valor, a mensagem 'Nenhuma defini\xE7\xE3o de colunas' ser\xE1 exibida."),og()()()(),Il(473,"tr",17)(474,"td",18)(475,"div",19)(476,"span",20),Qx(477," p-components-size"),zl(478,"br"),og()()(),Il(479,"td",21)(480,"code",31),Qx(481,"string"),og()(),Il(482,"td",23)(483,"p")(484,"code"),Qx(485,"medium"),og()()(),Il(486,"td",24)(487,"em")(488,"strong"),Qx(489,"(opcional)"),og()(),Il(490,"p"),Qx(491,"Define o tamanho dos componentes de formul\xE1rio no table:"),og(),Il(492,"ul")(493,"li")(494,"code"),Qx(495,"small"),og(),Qx(496,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),og(),Il(497,"li")(498,"code"),Qx(499,"medium"),og(),Qx(500,": aplica a medida medium de cada componente."),og()(),Il(501,"blockquote")(502,"p"),Qx(503,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Il(504,"code"),Qx(505,"medium"),og(),Qx(506,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Il(507,"a",32),Qx(508,"po-theme"),og(),Qx(509,"."),og()()()(),Il(510,"tr",17)(511,"td",18)(512,"div",19)(513,"span",20),Qx(514," p-container"),zl(515,"br"),og()()(),Il(516,"td",21)(517,"code",31),Qx(518,"string"),og()(),Il(519,"td",23)(520,"p")(521,"code"),Qx(522,"border"),og()()(),Il(523,"td",24)(524,"em")(525,"strong"),Qx(526,"(opcional)"),og()(),Il(527,"p"),Qx(528,"Adiciona um contorno arredondado ao "),Il(529,"code"),Qx(530,"po-table"),og(),Qx(531,", as op\xE7\xF5es s\xE3o:"),og(),Il(532,"ul")(533,"li")(534,"code"),Qx(535,"border"),og(),Qx(536,": com bordas/linhas."),og(),Il(537,"li")(538,"code"),Qx(539,"shadow"),og(),Qx(540,": com sombras."),og()()()(),Il(541,"tr",17)(542,"td",18)(543,"div",19)(544,"span",20),Qx(545," p-draggable"),zl(546,"br"),og()()(),Il(547,"td",21)(548,"code",22),Qx(549,"boolean"),og()(),Il(550,"td",23)(551,"p")(552,"code"),Qx(553,"false"),og()()(),Il(554,"td",24)(555,"em")(556,"strong"),Qx(557,"(opcional)"),og()(),Il(558,"p"),Qx(559,"Habilita o modo drag and drop para as colunas da tabela."),og()()(),Il(560,"tr",17)(561,"td",18)(562,"div",27)(563,"span",28),Qx(564," (p-delete-items)"),zl(565,"br"),og()()(),Il(566,"td",21)(567,"code",29),Qx(568,"EventEmitter"),og()(),Il(569,"td",23),Qx(570,"-"),og(),Il(571,"td",24)(572,"em")(573,"strong"),Qx(574,"(opcional)"),og()(),Il(575,"p"),Qx(576,"Evento executado ap\xF3s o m\xE9todo de exclus\xE3o ser finalizado."),og(),Il(577,"pre")(578,"code"),Qx(579,`<po-table
 (p-delete-items)="items = $event"
>
</po-table>
`),og()(),Il(580,"blockquote")(581,"p"),Qx(582,"Como par\xE2metro o componente envia a lista atualizada, sem os itens exclu\xEDdos."),og()()()(),Il(583,"tr",17)(584,"td",18)(585,"div",27)(586,"span",28),Qx(587," (p-expanded)"),zl(588,"br"),og()()(),Il(589,"td",21)(590,"code",29),Qx(591,"EventEmitter"),og()(),Il(592,"td",23),Qx(593,"-"),og(),Il(594,"td",24)(595,"em")(596,"strong"),Qx(597,"(opcional)"),og()(),Il(598,"p"),Qx(599,"Evento executado ao expandir uma linha do "),Il(600,"code"),Qx(601,"po-table"),og(),Qx(602,"."),og(),Il(603,"blockquote")(604,"p"),Qx(605,"Como par\xE2metro o componente envia o item expandido."),og()()()(),Il(606,"tr",17)(607,"td",18)(608,"div",19)(609,"span",20),Qx(610," p-filter-type"),zl(611,"br"),og()()(),Il(612,"td",21)(613,"code",33),Qx(614,"PoSearchFilterMode"),og()(),Il(615,"td",23)(616,"p")(617,"code"),Qx(618,"startsWith"),og()()(),Il(619,"td",24)(620,"em")(621,"strong"),Qx(622,"(opcional)"),og()(),Il(623,"p"),Qx(624,`Define o modo de pesquisa utilizado no campo de busca, quando habilitado.
Valores definidos no enum: PoSearchFilterMode`),og(),Il(625,"blockquote")(626,"p"),Qx(627,`Obs: A pesquisa \xE9 realizada exclusivamente nos dados locais, ou seja, aqueles que foram
renderizados na tabela.`),og()()()(),Il(628,"tr",17)(629,"td",18)(630,"div",19)(631,"span",20),Qx(632," p-filtered-columns"),zl(633,"br"),og()()(),Il(634,"td",21)(635,"code",34),Qx(636,"Array<string>"),og()(),Il(637,"td",23),Qx(638,"-"),og(),Il(639,"td",24)(640,"em")(641,"strong"),Qx(642,"(opcional)"),og()(),Il(643,"p"),Qx(644,`Define as colunas que ser\xE3o filtradas no campo de pesquisa.
Aceita um array de strings, representando as colunas espec\xEDficas que ser\xE3o consideradas na filtragem.`),og()()(),Il(645,"tr",17)(646,"td",18)(647,"div",19)(648,"span",20),Qx(649," p-height"),zl(650,"br"),og()()(),Il(651,"td",21)(652,"code",35),Qx(653,"number"),og()(),Il(654,"td",23),Qx(655,"-"),og(),Il(656,"td",24)(657,"em")(658,"strong"),Qx(659,"(opcional)"),og()(),Il(660,"p"),Qx(661,"Define a altura da tabela em "),Il(662,"em"),Qx(663,"pixels"),og(),Qx(664," e fixa o cabe\xE7alho."),og(),Il(665,"p"),Qx(666,"Ao utilizar essa propriedade ser\xE1 inserido o "),Il(667,"code"),Qx(668,"virtual-scroll"),og(),Qx(669," na tabela melhorando a performance."),og()()(),Il(670,"tr",17)(671,"td",18)(672,"div",19)(673,"span",20),Qx(674," p-hide-action-fixed-columns"),zl(675,"br"),og()()(),Il(676,"td",21)(677,"code",22),Qx(678,"boolean"),og()(),Il(679,"td",23)(680,"p")(681,"code"),Qx(682,"false"),og()()(),Il(683,"td",24)(684,"em")(685,"strong"),Qx(686,"(opcional)"),og()(),Il(687,"p"),Qx(688,"Permite que as a\xE7\xF5es para fixar uma coluna da tabela sejam escondidas."),og()()(),Il(689,"tr",17)(690,"td",18)(691,"div",19)(692,"span",20),Qx(693," p-hide-batch-actions"),zl(694,"br"),og()()(),Il(695,"td",21)(696,"code",22),Qx(697,"boolean"),og()(),Il(698,"td",23)(699,"p")(700,"code"),Qx(701,"true"),og()()(),Il(702,"td",24)(703,"em")(704,"strong"),Qx(705,"(opcional)"),og()(),Il(706,"p"),Qx(707,"Permite que as a\xE7\xF5es em lote, respons\xE1vel por excluir e exibir a quantidade de itens, sejam escondidas."),og()()(),Il(708,"tr",17)(709,"td",18)(710,"div",19)(711,"span",20),Qx(712," p-hide-columns-manager"),zl(713,"br"),og()()(),Il(714,"td",21)(715,"code",22),Qx(716,"boolean"),og()(),Il(717,"td",23)(718,"p")(719,"code"),Qx(720,"false"),og()()(),Il(721,"td",24)(722,"em")(723,"strong"),Qx(724,"(opcional)"),og()(),Il(725,"p"),Qx(726,"Permite que o gerenciador de colunas, respons\xE1vel pela defini\xE7\xE3o de quais colunas ser\xE3o exibidas, seja escondido."),og()()(),Il(727,"tr",17)(728,"td",18)(729,"div",19)(730,"span",20),Qx(731," p-hide-detail"),zl(732,"br"),og()()(),Il(733,"td",21)(734,"code",22),Qx(735,"boolean"),og()(),Il(736,"td",23)(737,"p")(738,"code"),Qx(739,"false"),og()()(),Il(740,"td",24)(741,"em")(742,"strong"),Qx(743,"(opcional)"),og()(),Il(744,"p"),Qx(745,"Habilita a visualiza\xE7\xE3o da lista de detalhes de cada linha da coluna."),og()()(),Il(746,"tr",17)(747,"td",18)(748,"div",19)(749,"span",20),Qx(750," p-hide-select-all"),zl(751,"br"),og()()(),Il(752,"td",21)(753,"code",22),Qx(754,"boolean"),og()(),Il(755,"td",23)(756,"p")(757,"code"),Qx(758,"false"),og()()(),Il(759,"td",24)(760,"p"),Qx(761,"Esconde o "),Il(762,"em"),Qx(763,"checkbox"),og(),Qx(764," para sele\xE7\xE3o de todas as linhas."),og(),Il(765,"blockquote")(766,"p"),Qx(767,"Sempre receber\xE1 "),Il(768,"em"),Qx(769,"true"),og(),Qx(770," caso a sele\xE7\xE3o de apenas uma linha esteja ativa."),og()()()(),Il(771,"tr",17)(772,"td",18)(773,"div",19)(774,"span",20),Qx(775," p-hide-table-search"),zl(776,"br"),og()()(),Il(777,"td",21)(778,"code",22),Qx(779,"boolean"),og()(),Il(780,"td",23)(781,"p")(782,"code"),Qx(783,"true"),og()()(),Il(784,"td",24)(785,"em")(786,"strong"),Qx(787,"(opcional)"),og()(),Il(788,"p"),Qx(789,"Permite que o campo de pesquisa seja escondido."),og()()(),Il(790,"tr",17)(791,"td",18)(792,"div",19)(793,"span",20),Qx(794," p-infinite-scroll"),zl(795,"br"),og()()(),Il(796,"td",21)(797,"code",22),Qx(798,"boolean"),og()(),Il(799,"td",23)(800,"p")(801,"code"),Qx(802,"false"),og()()(),Il(803,"td",24)(804,"em")(805,"strong"),Qx(806,"(opcional)"),og()(),Il(807,"p"),Qx(808,`Se verdadeiro, ativa a funcionalidade de scroll infinito para a tabela e o bot\xE3o "Carregar Mais" deixar\xE1 de ser exibido. Ao chegar no fim da tabela
executar\xE1 a fun\xE7\xE3o `),Il(809,"code"),Qx(810,"p-show-more"),og(),Qx(811,"."),og(),Il(812,"p")(813,"strong"),Qx(814,"Regras de utiliza\xE7\xE3o:"),og()(),Il(815,"ul")(816,"li"),Qx(817,"O scroll infinito s\xF3 funciona para tabelas que utilizam a propriedade "),Il(818,"code"),Qx(819,"p-height"),og(),Qx(820," e que possuem o scroll j\xE1 na carga inicial dos dados."),og()()()(),Il(821,"tr",17)(822,"td",18)(823,"div",19)(824,"span",20),Qx(825," p-infinite-scroll-distance"),zl(826,"br"),og()()(),Il(827,"td",21)(828,"code",35),Qx(829,"number"),og()(),Il(830,"td",23),Qx(831,"-"),og(),Il(832,"td",24)(833,"em")(834,"strong"),Qx(835,"(opcional)"),og()(),Il(836,"p"),Qx(837,"Define o percentual necess\xE1rio para disparar o evento "),Il(838,"code"),Qx(839,"p-show-more"),og(),Qx(840,`, que \xE9 respons\xE1vel por carregar mais dados na tabela. Caso o valor informado seja maior que 100 ou menor
que 0, o valor padr\xE3o ser\xE1 100%`),og(),Il(841,"p")(842,"strong"),Qx(843,"Exemplos:"),og()(),Il(844,"ul")(845,"li"),Qx(846,"p-infinite-scroll-distance = 80: Quando atingir 80% do scroll da tabela, o "),Il(847,"code"),Qx(848,"p-show-more"),og(),Qx(849," ser\xE1 disparado."),og()()()(),Il(850,"tr",17)(851,"td",18)(852,"div",19)(853,"span",20),Qx(854," p-items"),zl(855,"br"),og()()(),Il(856,"td",21)(857,"code",36),Qx(858,"any[]"),og()(),Il(859,"td",23),Qx(860,"-"),og(),Il(861,"td",24)(862,"p"),Qx(863,"Lista de itens da tabela."),og(),Il(864,"blockquote")(865,"p"),Qx(866,"Se falso, ser\xE1 inicializado como um "),Il(867,"em"),Qx(868,"array"),og(),Qx(869," vazio."),og()()()(),Il(870,"tr",17)(871,"td",18)(872,"div",19)(873,"span",20),Qx(874," p-literals"),zl(875,"br"),og()()(),Il(876,"td",21)(877,"code",37),Qx(878,"PoTableLiterals"),og()(),Il(879,"td",23),Qx(880,"-"),og(),Il(881,"td",24)(882,"em")(883,"strong"),Qx(884,"(opcional)"),og()(),Il(885,"p"),Qx(886,"Objeto com as literais usadas no "),Il(887,"code"),Qx(888,"po-table"),og(),Qx(889,"."),og(),Il(890,"p"),Qx(891,"Existem duas maneiras de customizar o componente, passando um objeto com todas as literais dispon\xEDveis:"),og(),Il(892,"pre")(893,"code"),Qx(894,`const customLiterals: PoTableLiterals = {
  noColumns: 'Nenhuma defini\xE7\xE3o de colunas',
  noData: 'Nenhum dado encontrado',
  noVisibleColumn: 'Nenhuma coluna vis\xEDvel',
  noItem: 'Nenhum item selecionado',
  oneItem: '1 item selecionado',
  multipleItems: 'itens selecionados',
  loadingData: 'Carregando',
  loadMoreData: 'Carregar mais resultados',
  seeCompleteSubtitle: 'Ver legenda completa',
  completeSubtitle: 'Legenda completa',
  columnsManager: 'Gerenciador de colunas',
  bodyDelete: 'Deseja realmente excluir esse item?',
  cancel: 'Cancelar',
  delete: 'Excluir',
  deleteSuccessful: 'Itens removidos com sucesso',
  deleteApiError: 'Ocorreu um erro inesperado, tente novamente mais tarde!',
};
`),og()(),Il(895,"p"),Qx(896,"Ou passando apenas as literais que deseja customizar:"),og(),Il(897,"pre")(898,"code"),Qx(899,`const customLiterals: PoTableLiterals = {
  noData: 'Sem dados'
};
`),og()(),Il(900,"p"),Qx(901,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente."),og(),Il(902,"pre")(903,"code"),Qx(904,`<po-table
  [p-literals]="customLiterals">
</po-table>
`),og()(),Il(905,"blockquote")(906,"p"),Qx(907,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),Il(908,"a",38)(909,"code"),Qx(910,"PoI18nService"),og()(),Qx(911," ou do browser."),og()()()(),Il(912,"tr",17)(913,"td",18)(914,"div",19)(915,"span",20),Qx(916," p-loading"),zl(917,"br"),og()()(),Il(918,"td",21)(919,"code",22),Qx(920,"boolean"),og()(),Il(921,"td",23)(922,"p")(923,"code"),Qx(924,"false"),og()()(),Il(925,"td",24)(926,"em")(927,"strong"),Qx(928,"(opcional)"),og()(),Il(929,"p"),Qx(930,"Bloqueia a intera\xE7\xE3o do usu\xE1rio com os dados da "),Il(931,"em"),Qx(932,"table"),og(),Qx(933,"."),og()()(),Il(934,"tr",17)(935,"td",18)(936,"div",19)(937,"span",20),Qx(938," p-loading-show-more"),zl(939,"br"),og()()(),Il(940,"td",21)(941,"code",22),Qx(942,"boolean"),og()(),Il(943,"td",23)(944,"p")(945,"code"),Qx(946,"false"),og()()(),Il(947,"td",24)(948,"em")(949,"strong"),Qx(950,"(opcional)"),og()(),Il(951,"p"),Qx(952,'Permite que seja adicionado o estado de carregamento no bot\xE3o "Carregar mais resultados".'),og()()(),Il(953,"tr",17)(954,"td",18)(955,"div",19)(956,"span",20),Qx(957," p-max-columns"),zl(958,"br"),og()()(),Il(959,"td",21)(960,"code",35),Qx(961,"number"),og()(),Il(962,"td",23),Qx(963,"-"),og(),Il(964,"td",24)(965,"em")(966,"strong"),Qx(967,"(opcional)"),og()(),Il(968,"p"),Qx(969,"Define uma quantidade m\xE1xima de colunas que ser\xE3o exibidas na tabela."),og(),Il(970,"p"),Qx(971,`Quando chegar no valor informado, as colunas que n\xE3o estiverem selecionadas ficar\xE3o
desabilitadas e caso houver mais colunas vis\xEDveis do que o permitido, as excedentes
ser\xE3o ignoradas por ordem de posi\xE7\xE3o.`),og()()(),Il(972,"tr",17)(973,"td",18)(974,"div",19)(975,"span",20),Qx(976," p-param-delete-api"),zl(977,"br"),og()()(),Il(978,"td",21)(979,"code",31),Qx(980,"string"),og()(),Il(981,"td",23)(982,"p")(983,"code"),Qx(984,"id"),og()()(),Il(985,"td",24)(986,"em")(987,"strong"),Qx(988,"(opcional)"),og()(),Il(989,"p"),Qx(990,"Adiciona o par\xE2metro a ser enviado para a requisi\xE7\xE3o de DELETE."),og(),Il(991,"p"),Qx(992,"\xC9 necess\xE1rio a utiliza\xE7\xE3o da propriedade "),Il(993,"code"),Qx(994,"p-service-delete"),og(),Qx(995," em conjunto."),og()()(),Il(996,"tr",17)(997,"td",18)(998,"div",19)(999,"span",20),Qx(1e3," p-selectable"),zl(1001,"br"),og()()(),Il(1002,"td",21)(1003,"code",22),Qx(1004,"boolean"),og()(),Il(1005,"td",23)(1006,"p")(1007,"code"),Qx(1008,"false"),og()()(),Il(1009,"td",24)(1010,"em")(1011,"strong"),Qx(1012,"(opcional)"),og()(),Il(1013,"p"),Qx(1014,"Permite a sele\xE7\xE3o de linhas na tabela e, caso a propriedade "),Il(1015,"code"),Qx(1016,"p-single-select"),og(),Qx(1017,` esteja definida ser\xE1 poss\xEDvel
selecionar apenas uma \xFAnica linha.`),og(),Il(1018,"p")(1019,"strong"),Qx(1020,"Importante:"),og()(),Il(1021,"ul")(1022,"li"),Qx(1023,"As linhas de detalhe definidas em "),Il(1024,"code"),Qx(1025,"PoTableDetail"),og(),Qx(1026," possuem comportamento independente da linha mestre;"),og(),Il(1027,"li"),Qx(1028,"Cada linha possui por padr\xE3o a propriedade din\xE2mica "),Il(1029,"code"),Qx(1030,"$selected"),og(),Qx(1031,`, na qual \xE9 poss\xEDvel validar se a linha
est\xE1 selecionada, por exemplo: `),Il(1032,"code"),Qx(1033,"item.$selected"),og(),Qx(1034," ou "),Il(1035,"code"),Qx(1036,"item['$selected']"),og(),Qx(1037,"."),og()()()(),Il(1038,"tr",17)(1039,"td",18)(1040,"div",19)(1041,"span",20),Qx(1042," p-selectable-entire-line"),zl(1043,"br"),og()()(),Il(1044,"td",21)(1045,"code",22),Qx(1046,"boolean"),og()(),Il(1047,"td",23)(1048,"p")(1049,"code"),Qx(1050,"true"),og()()(),Il(1051,"td",24)(1052,"p"),Qx(1053,"Permite selecionar um item da tabela clicando na linha."),og(),Il(1054,"blockquote")(1055,"p"),Qx(1056,"Caso haja necessidade de selecionar o item apenas via radio ou checkbox, deve-se definir esta propriedade como "),Il(1057,"code"),Qx(1058,"false"),og(),Qx(1059,"."),og()()()(),Il(1060,"tr",17)(1061,"td",18)(1062,"div",27)(1063,"span",28),Qx(1064," (p-selected)"),zl(1065,"br"),og()()(),Il(1066,"td",21)(1067,"code",29),Qx(1068,"EventEmitter"),og()(),Il(1069,"td",23),Qx(1070,"-"),og(),Il(1071,"td",24)(1072,"em")(1073,"strong"),Qx(1074,"(opcional)"),og()(),Il(1075,"p"),Qx(1076,"Evento executado ao selecionar uma linha do "),Il(1077,"code"),Qx(1078,"po-table"),og(),Qx(1079,"."),og()()(),Il(1080,"tr",17)(1081,"td",18)(1082,"div",19)(1083,"span",20),Qx(1084," p-service-api"),zl(1085,"br"),og()()(),Il(1086,"td",21)(1087,"code",31),Qx(1088,"string"),og()(),Il(1089,"td",23),Qx(1090,"-"),og(),Il(1091,"td",24)(1092,"em")(1093,"strong"),Qx(1094,"(opcional)"),og()(),Il(1095,"p"),Qx(1096,"URL da API respons\xE1vel por retornar os registros."),og(),Il(1097,"p"),Qx(1098,"Ao realizar a busca de mais registros via pagina\xE7\xE3o (Carregar mais resultados), ser\xE1 enviado os par\xE2metros "),Il(1099,"code"),Qx(1100,"page"),og(),Qx(1101," e "),Il(1102,"code"),Qx(1103,"pageSize"),og(),Qx(1104,", conforme abaixo:"),og(),Il(1105,"pre")(1106,"code"),Qx(1107,`url + ?page=1&pageSize=10
`),og()(),Il(1108,"p"),Qx(1109,"Caso utilizar ordena\xE7\xE3o, a coluna ordenada ser\xE1 enviada atrav\xE9s do par\xE2metro "),Il(1110,"code"),Qx(1111,"order"),og(),Qx(1112,", por exemplo:"),og(),Il(1113,"ul")(1114,"li")(1115,"p"),Qx(1116,"Coluna decrescente:"),og(),Il(1117,"pre")(1118,"code"),Qx(1119,`url + ?page=1&pageSize=10&order=-name
`),og()()(),Il(1120,"li")(1121,"p"),Qx(1122,"Coluna ascendente:"),og(),Il(1123,"pre")(1124,"code"),Qx(1125,`url + ?page=1&pageSize=10&order=name
`),og()()()(),Il(1126,"blockquote")(1127,"p"),Qx(1128,"Esta URL deve retornar e receber os dados no padr\xE3o de "),Il(1129,"a",39),Qx(1130,"API do PO UI"),og(),Qx(1131,"."),og()()()(),Il(1132,"tr",17)(1133,"td",18)(1134,"div",19)(1135,"span",20),Qx(1136," p-service-delete"),zl(1137,"br"),og()()(),Il(1138,"td",21)(1139,"code",31),Qx(1140,"string"),og()(),Il(1141,"td",23),Qx(1142,"-"),og(),Il(1143,"td",24)(1144,"em")(1145,"strong"),Qx(1146,"(opcional)"),og()(),Il(1147,"p"),Qx(1148,"URL da API respons\xE1vel por excluir os registros."),og(),Il(1149,"p"),Qx(1150,"Ao selecionar o bot\xE3o de excluir itens, essa url ser\xE1 executada utilizando o par\xE2metro enviado na propriedade "),Il(1151,"code"),Qx(1152,"p-param-delete-api"),og(),Qx(1153,`.
Caso ela n\xE3o seja utilizada, o par\xE2metro padr\xE3o a ser enviado ser\xE1 `),Il(1154,"code"),Qx(1155,"id"),og(),Qx(1156,"."),og(),Il(1157,"blockquote")(1158,"p"),Qx(1159,"Esta URL deve retornar e receber os dados no padr\xE3o de "),Il(1160,"a",39),Qx(1161,"API do PO UI"),og(),Qx(1162,"."),og()()()(),Il(1163,"tr",17)(1164,"td",18)(1165,"div",27)(1166,"span",28),Qx(1167," (p-show-more)"),zl(1168,"br"),og()()(),Il(1169,"td",21)(1170,"code",29),Qx(1171,"EventEmitter"),og()(),Il(1172,"td",23),Qx(1173,"-"),og(),Il(1174,"td",24)(1175,"em")(1176,"strong"),Qx(1177,"(opcional)"),og()(),Il(1178,"p"),Qx(1179,`Recebe uma a\xE7\xE3o de clique para o bot\xE3o "Carregar mais resultados", caso nenhuma a\xE7\xE3o for definida o mesmo
n\xE3o \xE9 vis\xEDvel.`),og(),Il(1180,"p"),Qx(1181,"Recebe um objeto "),Il(1182,"code"),Qx(1183,"{ column, type }"),og(),Qx(1184," onde:"),og(),Il(1185,"ul")(1186,"li"),Qx(1187,"column ("),Il(1188,"code"),Qx(1189,"PoTableColumn"),og(),Qx(1190,"): objeto da coluna que est\xE1 ordenada."),og(),Il(1191,"li"),Qx(1192,"type ("),Il(1193,"code"),Qx(1194,"PoTableColumnSortType"),og(),Qx(1195,"): tipo da ordena\xE7\xE3o."),og()()()(),Il(1196,"tr",17)(1197,"td",18)(1198,"div",19)(1199,"span",20),Qx(1200," p-show-more-disabled"),zl(1201,"br"),og()()(),Il(1202,"td",21)(1203,"code",22),Qx(1204,"boolean"),og()(),Il(1205,"td",23)(1206,"p")(1207,"code"),Qx(1208,"false"),og()()(),Il(1209,"td",24)(1210,"p"),Qx(1211,'Se verdadeiro, torna habilitado o bot\xE3o "Carregar mais resultados".'),og()()(),Il(1212,"tr",17)(1213,"td",18)(1214,"div",19)(1215,"span",20),Qx(1216," p-single-select"),zl(1217,"br"),og()()(),Il(1218,"td",21)(1219,"code",22),Qx(1220,"boolean"),og()(),Il(1221,"td",23),Qx(1222,"-"),og(),Il(1223,"td",24)(1224,"p"),Qx(1225,"Define que somente uma linha da tabela pode ser selecionada."),og(),Il(1226,"blockquote")(1227,"p"),Qx(1228,"Esta defini\xE7\xE3o n\xE3o se aplica aos itens filhos, os mesmos possuem comportamento independente do item pai."),og()()()(),Il(1229,"tr",17)(1230,"td",18)(1231,"div",19)(1232,"span",20),Qx(1233," p-sort"),zl(1234,"br"),og()()(),Il(1235,"td",21)(1236,"code",22),Qx(1237,"boolean"),og()(),Il(1238,"td",23)(1239,"p")(1240,"code"),Qx(1241,"false"),og()()(),Il(1242,"td",24)(1243,"em")(1244,"strong"),Qx(1245,"(opcional)"),og()(),Il(1246,"p"),Qx(1247,`Habilita em todas as colunas a op\xE7\xE3o de ordena\xE7\xE3o de dados. Caso a coluna seja do tipo 'data' ou 'dateTime' a
mesma deve respeitar os tipos de entrada definidos para que sejam ordenadas.`),og()()(),Il(1248,"tr",17)(1249,"td",18)(1250,"div",27)(1251,"span",28),Qx(1252," (p-sort-by)"),zl(1253,"br"),og()()(),Il(1254,"td",21)(1255,"code",29),Qx(1256,"EventEmitter"),og()(),Il(1257,"td",23),Qx(1258,"-"),og(),Il(1259,"td",24)(1260,"em")(1261,"strong"),Qx(1262,"(opcional)"),og()(),Il(1263,"p"),Qx(1264,"Evento executado ao ordenar colunas da tabela."),og(),Il(1265,"p"),Qx(1266,"Recebe um objeto "),Il(1267,"code"),Qx(1268,"{ column, type }"),og(),Qx(1269," onde:"),og(),Il(1270,"ul")(1271,"li"),Qx(1272,"column ("),Il(1273,"code"),Qx(1274,"PoTableColumn"),og(),Qx(1275,"): objeto da coluna que foi clicada/ordenada."),og(),Il(1276,"li"),Qx(1277,"type ("),Il(1278,"code"),Qx(1279,"PoTableColumnSortType"),og(),Qx(1280,"): tipo da ordena\xE7\xE3o."),og()()()(),Il(1281,"tr",17)(1282,"td",18)(1283,"div",19)(1284,"span",20),Qx(1285," p-spacing"),zl(1286,"br"),og()()(),Il(1287,"td",21)(1288,"code",31),Qx(1289,"string"),og()(),Il(1290,"td",23)(1291,"p")(1292,"code"),Qx(1293,"medium"),og()()(),Il(1294,"td",24)(1295,"em")(1296,"strong"),Qx(1297,"(opcional)"),og()(),Il(1298,"p"),Qx(1299,`Define o espa\xE7amento interno das c\xE9lulas, impactando diretamente na altura das linhas do table. Os valores
permitidos s\xE3o definidos pelo enum `),Il(1300,"strong"),Qx(1301,"PoTableColumnSpacing"),og(),Qx(1302,"."),og(),Il(1303,"blockquote")(1304,"p"),Qx(1305,"Em n\xEDvel de acessibilidade "),Il(1306,"strong"),Qx(1307,"AA"),og(),Qx(1308,", caso o valor de "),Il(1309,"code"),Qx(1310,"p-spacing"),og(),Qx(1311," n\xE3o seja definido, o valor padr\xE3o ser\xE1 "),Il(1312,"code"),Qx(1313,"extraSmall"),og(),Qx(1314,`
nos seguintes cen\xE1rios:`),og(),Il(1315,"ul")(1316,"li"),Qx(1317,"Quando o valor de "),Il(1318,"code"),Qx(1319,"p-components-size"),og(),Qx(1320," for "),Il(1321,"code"),Qx(1322,"small"),og(),Qx(1323,";"),og(),Il(1324,"li"),Qx(1325,"Quando o valor padr\xE3o dos componentes for configurado como "),Il(1326,"code"),Qx(1327,"small"),og(),Qx(1328,` no
`),Il(1329,"a",32),Qx(1330,"servi\xE7o de tema"),og(),Qx(1331,"."),og()()()()(),Il(1332,"tr",17)(1333,"td",18)(1334,"div",19)(1335,"span",20),Qx(1336," p-striped"),zl(1337,"br"),og()()(),Il(1338,"td",21)(1339,"code",22),Qx(1340,"boolean"),og()(),Il(1341,"td",23)(1342,"p")(1343,"code"),Qx(1344,"false"),og()()(),Il(1345,"td",24)(1346,"p"),Qx(1347,"Habilita ou desabilita o estilo listrado da tabela ("),Il(1348,"code"),Qx(1349,"striped"),og(),Qx(1350,")."),og(),Il(1351,"blockquote")(1352,"p"),Qx(1353,"Recomendado para tabelas com maior n\xFAmero de dados, facilitando a sua visualiza\xE7\xE3o na tabela."),og()()()(),Il(1354,"tr",17)(1355,"td",18)(1356,"div",19)(1357,"span",20),Qx(1358," p-text-wrap"),zl(1359,"br"),og()()(),Il(1360,"td",21)(1361,"code",22),Qx(1362,"boolean"),og()(),Il(1363,"td",23)(1364,"p")(1365,"code"),Qx(1366,"false"),og()()(),Il(1367,"td",24)(1368,"em")(1369,"strong"),Qx(1370,"(opcional)"),og()(),Il(1371,"p"),Qx(1372,`Habilita ou desabilita a quebra autom\xE1tica de texto. Quando ativada, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),og(),Il(1373,"blockquote")(1374,"p"),Qx(1375,"Incompat\xEDvel com "),Il(1376,"code"),Qx(1377,"virtual-scroll"),og(),Qx(1378,", que requer altura fixa nas linhas."),og()()()(),Il(1379,"tr",17)(1380,"td",18)(1381,"div",27)(1382,"span",28),Qx(1383," (p-unselected)"),zl(1384,"br"),og()()(),Il(1385,"td",21)(1386,"code",29),Qx(1387,"EventEmitter"),og()(),Il(1388,"td",23),Qx(1389,"-"),og(),Il(1390,"td",24)(1391,"em")(1392,"strong"),Qx(1393,"(opcional)"),og()(),Il(1394,"p"),Qx(1395,"Evento executado ao desmarcar a sele\xE7\xE3o de uma linha do "),Il(1396,"code"),Qx(1397,"po-table"),og(),Qx(1398,"."),og()()(),Il(1399,"tr",17)(1400,"td",18)(1401,"div",19)(1402,"span",20),Qx(1403," p-virtual-scroll"),zl(1404,"br"),og()()(),Il(1405,"td",21)(1406,"code",22),Qx(1407,"boolean"),og()(),Il(1408,"td",23)(1409,"p")(1410,"code"),Qx(1411,"true"),og()()(),Il(1412,"td",24)(1413,"em")(1414,"strong"),Qx(1415,"(opcional)"),og()(),Il(1416,"p"),Qx(1417,"Habilita o "),Il(1418,"code"),Qx(1419,"virtual-scroll"),og(),Qx(1420,` na tabela para melhorar a performance com grandes volumes de dados.
Requer altura (`),Il(1421,"code"),Qx(1422,"p-height"),og(),Qx(1423,") para funcionar corretamente."),og(),Il(1424,"blockquote")(1425,"p"),Qx(1426,"Incompat\xEDvel com "),Il(1427,"code"),Qx(1428,"p-text-wrap"),og(),Qx(1429," e "),Il(1430,"code"),Qx(1431,"master-detail"),og(),Qx(1432,", pois o "),Il(1433,"code"),Qx(1434,"virtual-scroll"),og(),Qx(1435," exige altura fixa nas linhas."),og()()()()(),Il(1436,"h3",13),Qx(1437,"M\xE9todos"),og(),Il(1438,"table",40)(1439,"tr",17)(1440,"th",41)(1441,"div",19)(1442,"h4")(1443,"span",20),Qx(1444," applyFilters "),og()()()()(),Il(1445,"tr",24)(1446,"td",24)(1447,"p"),Qx(1448,"M\xE9todo respons\xE1vel por realizar busca no servi\xE7o de dados podendo informar filtros e com o retorno, atualiza a tabela."),og(),Il(1449,"p"),Qx(1450,"Caso n\xE3o seja informado par\xE2metro, nada ser\xE1 adicionado ao GET, conforme abaixo:"),og(),Il(1451,"pre")(1452,"code"),Qx(1453,`url + ?page=1&pageSize=10
`),og()(),Il(1454,"blockquote")(1455,"p"),Qx(1456,"Obs: os par\xE2metros "),Il(1457,"code"),Qx(1458,"page"),og(),Qx(1459," e "),Il(1460,"code"),Qx(1461,"pageSize"),og(),Qx(1462," sempre ser\xE3o chamados independente de ser enviados outros par\xE2metros."),og()(),Il(1463,"p"),Qx(1464,"Caso sejam informados os par\xE2metros "),Il(1465,"code"),Qx(1466,"{ name: 'JOHN', age: '23' }"),og(),Qx(1467,", todos ser\xE3o adicionados ao GET, conforme abaixo:"),og(),Il(1468,"pre")(1469,"code"),Qx(1470,`url + ?page=1&pageSize=10&name=JOHN&age=23
`),og()()()()(),Il(1471,"h5")(1472,"b"),Qx(1473,"Par\xE2metros"),og()(),Il(1474,"table",14)(1475,"tr",15)(1476,"th",16),Qx(1477,"Nome"),og(),Il(1478,"th",16),Qx(1479,"Tipo"),og(),Il(1480,"th",16),Qx(1481,"Descri\xE7\xE3o"),og()(),Il(1482,"tr",17)(1483,"td",18),Qx(1484," queryParams"),og(),Il(1485,"td",21)(1486,"code",42),Qx(1487," { key: value } "),og()(),Il(1488,"td",24)(1489,"p"),Qx(1490,"Formato do objeto a ser enviado."),og(),Il(1491,"blockquote")(1492,"p"),Qx(1493,"Pode ser utilizada qualquer string como key, e qualquer string ou number como value."),og()()()()(),zl(1494,"br"),Il(1495,"table",40)(1496,"tr",17)(1497,"th",41)(1498,"div",19)(1499,"h4")(1500,"span",20),Qx(1501," applyFixedColumns "),og()()()()(),Il(1502,"tr",24)(1503,"td",24)(1504,"p"),Qx(1505,"Verifica se columns possuem a propriedade width."),og()()()(),zl(1506,"br"),Il(1507,"table",40)(1508,"tr",17)(1509,"th",41)(1510,"div",19)(1511,"h4")(1512,"span",20),Qx(1513," collapse "),og()()()()(),Il(1514,"tr",24)(1515,"td",24)(1516,"p"),Qx(1517,"M\xE9todo que colapsa uma linha com detalhe quando executada."),og()()()(),Il(1518,"h5")(1519,"b"),Qx(1520,"Par\xE2metros"),og()(),Il(1521,"table",14)(1522,"tr",15)(1523,"th",16),Qx(1524,"Nome"),og(),Il(1525,"th",16),Qx(1526,"Tipo"),og(),Il(1527,"th",16),Qx(1528,"Descri\xE7\xE3o"),og()(),Il(1529,"tr",17)(1530,"td",18),Qx(1531," rowIndex"),og(),Il(1532,"td",21)(1533,"code",43),Qx(1534," number "),og()(),Il(1535,"td",24)(1536,"p"),Qx(1537,"\xCDndice da linha que ser\xE1 colapsada."),og(),Il(1538,"blockquote")(1539,"p"),Qx(1540,"Ao reordenar os dados da tabela, o valor contido neste \xEDndice ser\xE1 alterado conforme a ordena\xE7\xE3o."),og()()()()(),zl(1541,"br"),Il(1542,"table",40)(1543,"tr",17)(1544,"th",41)(1545,"div",19)(1546,"h4")(1547,"span",20),Qx(1548," expand "),og()()()()(),Il(1549,"tr",24)(1550,"td",24)(1551,"p"),Qx(1552,"M\xE9todo que expande uma linha com detalhe quando executada."),og()()()(),Il(1553,"h5")(1554,"b"),Qx(1555,"Par\xE2metros"),og()(),Il(1556,"table",14)(1557,"tr",15)(1558,"th",16),Qx(1559,"Nome"),og(),Il(1560,"th",16),Qx(1561,"Tipo"),og(),Il(1562,"th",16),Qx(1563,"Descri\xE7\xE3o"),og()(),Il(1564,"tr",17)(1565,"td",18),Qx(1566," rowIndex"),og(),Il(1567,"td",21)(1568,"code",43),Qx(1569," number "),og()(),Il(1570,"td",24)(1571,"p"),Qx(1572,"\xCDndice da linha que ser\xE1 expandida."),og(),Il(1573,"blockquote")(1574,"p"),Qx(1575,"Ao reordenar os dados da tabela, o valor contido neste \xEDndice ser\xE1 alterado conforme a ordena\xE7\xE3o."),og()()()()(),zl(1576,"br"),Il(1577,"table",40)(1578,"tr",17)(1579,"th",41)(1580,"div",19)(1581,"h4")(1582,"span",20),Qx(1583," getSelectedRows "),og()()()()(),Il(1584,"tr",24)(1585,"td",24)(1586,"p"),Qx(1587,"Retorna as linhas do "),Il(1588,"code"),Qx(1589,"po-table"),og(),Qx(1590," que est\xE3o selecionadas."),og()()()(),zl(1591,"br"),Il(1592,"table",40)(1593,"tr",17)(1594,"th",41)(1595,"div",19)(1596,"h4")(1597,"span",20),Qx(1598," getUnselectedRows "),og()()()()(),Il(1599,"tr",24)(1600,"td",24)(1601,"p"),Qx(1602,"Retorna as linhas do "),Il(1603,"code"),Qx(1604,"po-table"),og(),Qx(1605," que n\xE3o est\xE3o selecionadas."),og()()()(),zl(1606,"br"),Il(1607,"table",40)(1608,"tr",17)(1609,"th",41)(1610,"div",19)(1611,"h4")(1612,"span",20),Qx(1613," unselectRows "),og()()()()(),Il(1614,"tr",24)(1615,"td",24)(1616,"p"),Qx(1617,"Desmarca as linhas que est\xE3o selecionadas."),og()()()(),zl(1618,"br"),Il(1619,"table",40)(1620,"tr",17)(1621,"th",41)(1622,"div",19)(1623,"h4")(1624,"span",20),Qx(1625," unselectRowItem "),og()()()()(),Il(1626,"tr",24)(1627,"td",24)(1628,"p"),Qx(1629,"Desmarca uma linha que est\xE1 selecionada."),og()()()(),zl(1630,"br"),Il(1631,"table",40)(1632,"tr",17)(1633,"th",41)(1634,"div",19)(1635,"h4")(1636,"span",20),Qx(1637," selectRowItem "),og()()()()(),Il(1638,"tr",24)(1639,"td",24)(1640,"p"),Qx(1641,"Seleciona uma linha do 'po-table'."),og()()()(),zl(1642,"br"),Il(1643,"table",40)(1644,"tr",17)(1645,"th",41)(1646,"div",19)(1647,"h4")(1648,"span",20),Qx(1649," deleteItems "),og()()()()(),Il(1650,"tr",24)(1651,"td",24)(1652,"p"),Qx(1653,`M\xE9todo respons\xE1vel pela exclus\xE3o de itens em lote.
Caso a tabela esteja executando a propriedade `),Il(1654,"code"),Qx(1655,"p-service-delete"),og(),Qx(1656,", ser\xE1 necess\xE1rio excluir 1 item por vez."),og(),Il(1657,"p"),Qx(1658,"Ao utilizar "),Il(1659,"code"),Qx(1660,"p-service-delete"),og(),Qx(1661," mas sem a propriedade "),Il(1662,"code"),Qx(1663,"p-service-api"),og(),Qx(1664,`, ser\xE1 responsabilidade do usu\xE1rio o tratamento
ap\xF3s a requisi\xE7\xE3o DELETE ser executada.`),og(),Il(1665,"p"),Qx(1666,"Caso a tabela utilize "),Il(1667,"code"),Qx(1668,"p-height"),og(),Qx(1669," e esteja sem servi\xE7o, \xE9 necess\xE1rio a reatribui\xE7\xE3o dos itens utilizando o evento "),Il(1670,"code"),Qx(1671,"(p-delete-items)"),og(),Qx(1672,", por exemplo:"),og(),Il(1673,"pre")(1674,"code"),Qx(1675,`<po-table
 (p-delete-items)="items = $event"
>
</po-table>
`),og()()()()(),zl(1676,"br"),Il(1677,"table",40)(1678,"tr",17)(1679,"th",41)(1680,"div",19)(1681,"h4")(1682,"span",20),Qx(1683," removeItem "),og()()()()(),Il(1684,"tr",24)(1685,"td",24)(1686,"p"),Qx(1687,"M\xE9todo que remove um item da tabela."),og()()()(),Il(1688,"h5")(1689,"b"),Qx(1690,"Par\xE2metros"),og()(),Il(1691,"table",14)(1692,"tr",15)(1693,"th",16),Qx(1694,"Nome"),og(),Il(1695,"th",16),Qx(1696,"Tipo"),og(),Il(1697,"th",16),Qx(1698,"Descri\xE7\xE3o"),og()(),Il(1699,"tr",17)(1700,"td",18),Qx(1701," item"),og(),Il(1702,"td",21)(1703,"code",35),Qx(1704," number "),og(),Il(1705,"code",42),Qx(1706," { key: value } "),og()(),Il(1707,"td",24)(1708,"p"),Qx(1709,"\xCDndice da linha ou o item que ser\xE1 removido."),og(),Il(1710,"blockquote")(1711,"p"),Qx(1712,"Ao remover o item, a linha que o representa ser\xE1 exclu\xEDda da tabela."),og()()()()(),zl(1713,"br"),Il(1714,"table",40)(1715,"tr",17)(1716,"th",41)(1717,"div",19)(1718,"h4")(1719,"span",20),Qx(1720," updateItem "),og()()()()(),Il(1721,"tr",24)(1722,"td",24)(1723,"p"),Qx(1724,"M\xE9todo que atualiza um item da tabela."),og()()()(),Il(1725,"h5")(1726,"b"),Qx(1727,"Par\xE2metros"),og()(),Il(1728,"table",14)(1729,"tr",15)(1730,"th",16),Qx(1731,"Nome"),og(),Il(1732,"th",16),Qx(1733,"Tipo"),og(),Il(1734,"th",16),Qx(1735,"Descri\xE7\xE3o"),og()(),Il(1736,"tr",17)(1737,"td",18),Qx(1738," item"),og(),Il(1739,"td",21)(1740,"code",35),Qx(1741," number "),og(),Il(1742,"code",42),Qx(1743," { key: value } "),og()(),Il(1744,"td",24)(1745,"p"),Qx(1746,"\xCDndice da linha ou o item que ser\xE1 atualizado."),og()()(),Il(1747,"tr",17)(1748,"td",18),Qx(1749," updatedItem"),og(),Il(1750,"td",21)(1751,"code",42),Qx(1752," { key: value } "),og()(),Il(1753,"td",24)(1754,"p"),Qx(1755,"Item que foi atualizado."),og(),Il(1756,"blockquote")(1757,"p"),Qx(1758,"Ao atualizar o item, a informa\xE7\xE3o ser\xE1 alterada na tabela."),og()()()()(),zl(1759,"br"),Il(1760,"h3"),Qx(1761,"Interfaces"),og(),Il(1762,"h4",44)(1763,"code",5),Qx(1764,"PoTableAction"),og()(),Il(1765,"div",2)(1766,"p"),Qx(1767,"Interface para lista de a\xE7\xF5es do componente. "),og()(),Il(1768,"h4",13),Qx(1769,"Propriedades"),og(),Il(1770,"table",14)(1771,"tr",15)(1772,"th",16),Qx(1773,"Nome"),og(),Il(1774,"th",16),Qx(1775,"Tipo"),og(),Il(1776,"th",16),Qx(1777,"Descri\xE7\xE3o"),og()(),Il(1778,"tr",17)(1779,"td",18)(1780,"div",19)(1781,"span",20),Qx(1782," action"),zl(1783,"br"),og()()(),Il(1784,"td",21)(1785,"code",45),Qx(1786,"Function"),og()(),Il(1787,"td",24)(1788,"em")(1789,"strong"),Qx(1790,"(opcional)"),og()(),Il(1791,"p"),Qx(1792,"A\xE7\xE3o que ser\xE1 executada, sendo poss\xEDvel passar o nome ou a refer\xEAncia da fun\xE7\xE3o."),og(),Il(1793,"p"),Qx(1794,"A action tamb\xE9m pode ser executada para o agrupador de subitens quando a a\xE7\xE3o possuir "),Il(1795,"code"),Qx(1796,"subItems"),og(),Qx(1797,"."),og(),Il(1798,"blockquote")(1799,"p"),Qx(1800,"Para que a fun\xE7\xE3o seja executada no contexto do componente, utilize "),Il(1801,"em"),Qx(1802,"bind"),og(),Qx(1803,`:
`),Il(1804,"code"),Qx(1805,"action: this.myFunction.bind(this)"),og()()()()(),Il(1806,"tr",17)(1807,"td",18)(1808,"div",19)(1809,"span",20),Qx(1810," disabled"),zl(1811,"br"),og()()(),Il(1812,"td",21)(1813,"code",22),Qx(1814,"boolean "),og(),Il(1815,"code",45),Qx(1816," Function"),og()(),Il(1817,"td",24)(1818,"em")(1819,"strong"),Qx(1820,"(opcional)"),og()(),Il(1821,"p"),Qx(1822,"Desabilita a a\xE7\xE3o. Aceita um valor booleano ou uma fun\xE7\xE3o que retorna booleano."),og()()(),Il(1823,"tr",17)(1824,"td",18)(1825,"div",19)(1826,"span",20),Qx(1827," icon"),zl(1828,"br"),og()()(),Il(1829,"td",21)(1830,"code",31),Qx(1831,"string "),og(),Il(1832,"code",46),Qx(1833," TemplateRef<void>"),og()(),Il(1834,"td",24)(1835,"em")(1836,"strong"),Qx(1837,"(opcional)"),og()(),Il(1838,"p"),Qx(1839,"\xCDcone exibido ao lado esquerdo do r\xF3tulo."),og(),Il(1840,"p"),Qx(1841,"Aceita \xEDcones da "),Il(1842,"a",26),Qx(1843,"Biblioteca de \xEDcones"),og(),Qx(1844,`, fontes externas (ex: Font Awesome)
ou um `),Il(1845,"code"),Qx(1846,"TemplateRef"),og(),Qx(1847," para \xEDcones customizados."),og(),Il(1848,"pre")(1849,"code"),Qx(1850,`{ label: 'A\xE7\xE3o', icon: 'an an-newspaper' }
`),og()()()(),Il(1851,"tr",17)(1852,"td",18)(1853,"div",19)(1854,"span",20),Qx(1855," label"),zl(1856,"br"),og()()(),Il(1857,"td",21)(1858,"code",31),Qx(1859,"string"),og()(),Il(1860,"td",24)(1861,"p"),Qx(1862,"R\xF3tulo da a\xE7\xE3o."),og(),Il(1863,"p"),Qx(1864,"A label tamb\xE9m pode representar o agrupador de subitens quando a a\xE7\xE3o possuir "),Il(1865,"code"),Qx(1866,"subItems"),og(),Qx(1867,"."),og()()(),Il(1868,"tr",17)(1869,"td",18)(1870,"div",19)(1871,"span",20),Qx(1872," selected"),zl(1873,"br"),og()()(),Il(1874,"td",21)(1875,"code",22),Qx(1876,"boolean"),og()(),Il(1877,"td",24)(1878,"em")(1879,"strong"),Qx(1880,"(opcional)"),og()(),Il(1881,"p"),Qx(1882,"Define se a a\xE7\xE3o est\xE1 selecionada."),og()()(),Il(1883,"tr",17)(1884,"td",18)(1885,"div",19)(1886,"span",20),Qx(1887," separator"),zl(1888,"br"),og()()(),Il(1889,"td",21)(1890,"code",22),Qx(1891,"boolean"),og()(),Il(1892,"td",24)(1893,"em")(1894,"strong"),Qx(1895,"(opcional)"),og()(),Il(1896,"p"),Qx(1897,"Atribui uma linha separadora acima do item."),og()()(),Il(1898,"tr",17)(1899,"td",18)(1900,"div",19)(1901,"span",20),Qx(1902," subItems"),zl(1903,"br"),og()()(),Il(1904,"td",21)(1905,"code",47),Qx(1906,"Array<PoPopupAction>"),og()(),Il(1907,"td",24)(1908,"em")(1909,"strong"),Qx(1910,"(opcional)"),og()(),Il(1911,"p"),Qx(1912,"Define uma lista de subitens para cria\xE7\xE3o de menus aninhados."),og(),Il(1913,"p"),Qx(1914,`Ao definir esta propriedade, o item exibir\xE1 um \xEDcone indicador de subn\xEDvel.
Recomenda-se utilizar no m\xE1ximo tr\xEAs n\xEDveis hier\xE1rquicos para garantir a usabilidade.`),og(),Il(1915,"blockquote")(1916,"p"),Qx(1917,"As propriedades "),Il(1918,"code"),Qx(1919,"disabled"),og(),Qx(1920,", "),Il(1921,"code"),Qx(1922,"type"),og(),Qx(1923," e "),Il(1924,"code"),Qx(1925,"visible"),og(),Qx(1926," n\xE3o s\xE3o aplicadas visualmente ao item agrupador."),og()(),Il(1927,"blockquote")(1928,"p"),Qx(1929,"Quando "),Il(1930,"code"),Qx(1931,"url"),og(),Qx(1932," \xE9 informada em um agrupador, o redirecionamento ter\xE1 prioridade e os subitens n\xE3o ser\xE3o abertos."),og()(),Il(1933,"blockquote")(1934,"p"),Qx(1935,"Em subn\xEDveis aninhados, o "),Il(1936,"code"),Qx(1937,"icon"),og(),Qx(1938," do agrupador \xE9 substitu\xEDdo pelo indicador de navega\xE7\xE3o (seta)."),og()()()(),Il(1939,"tr",17)(1940,"td",18)(1941,"div",19)(1942,"span",20),Qx(1943," type"),zl(1944,"br"),og()()(),Il(1945,"td",21)(1946,"code",31),Qx(1947,"string"),og()(),Il(1948,"td",24)(1949,"em")(1950,"strong"),Qx(1951,"(opcional)"),og()(),Il(1952,"p"),Qx(1953,"Define a cor do item."),og(),Il(1954,"p"),Qx(1955,"Valores v\xE1lidos:"),og(),Il(1956,"ul")(1957,"li")(1958,"code"),Qx(1959,"default"),og()(),Il(1960,"li")(1961,"code"),Qx(1962,"danger"),og()()()()(),Il(1963,"tr",17)(1964,"td",18)(1965,"div",19)(1966,"span",20),Qx(1967," url"),zl(1968,"br"),og()()(),Il(1969,"td",21)(1970,"code",31),Qx(1971,"string"),og()(),Il(1972,"td",24)(1973,"em")(1974,"strong"),Qx(1975,"(opcional)"),og()(),Il(1976,"p"),Qx(1977,"URL para redirecionamento. Aceita rotas internas e links externos."),og(),Il(1978,"p"),Qx(1979,`A url tamb\xE9m pode ser configurada para o agrupador de subitens.
Entretanto, quando a `),Il(1980,"code"),Qx(1981,"url"),og(),Qx(1982," \xE9 informada em um agrupador, o clique "),Il(1983,"strong"),Qx(1984,"n\xE3o abrir\xE1 os subitens"),og(),Qx(1985,`, pois o item ser\xE1
tratado como um link e o redirecionamento ter\xE1 prioridade sobre a exibi\xE7\xE3o da lista.`),og(),Il(1986,"blockquote")(1987,"p"),Qx(1988,"Quando informada, tem prioridade sobre a propriedade "),Il(1989,"code"),Qx(1990,"action"),og(),Qx(1991,"."),og()()()(),Il(1992,"tr",17)(1993,"td",18)(1994,"div",19)(1995,"span",20),Qx(1996," visible"),zl(1997,"br"),og()()(),Il(1998,"td",21)(1999,"code",22),Qx(2e3,"boolean "),og(),Il(2001,"code",45),Qx(2002," Function"),og()(),Il(2003,"td",24)(2004,"em")(2005,"strong"),Qx(2006,"(opcional)"),og()(),Il(2007,"p"),Qx(2008,"Define a visibilidade da a\xE7\xE3o. Aceita um valor booleano ou uma fun\xE7\xE3o que retorna booleano."),og()()()(),Il(2009,"h4",44)(2010,"code",5),Qx(2011,"PoTableBoolean"),og()(),Il(2012,"div",2)(2013,"p"),Qx(2014,"Interface que define as colunas booleanas do "),Il(2015,"code"),Qx(2016,"po-table"),og(),Qx(2017,"."),og()(),Il(2018,"h4",13),Qx(2019,"Propriedades"),og(),Il(2020,"table",14)(2021,"tr",15)(2022,"th",16),Qx(2023,"Nome"),og(),Il(2024,"th",16),Qx(2025,"Tipo"),og(),Il(2026,"th",16),Qx(2027,"Descri\xE7\xE3o"),og()(),Il(2028,"tr",17)(2029,"td",18)(2030,"div",19)(2031,"span",20),Qx(2032," falseLabel"),zl(2033,"br"),og()()(),Il(2034,"td",21)(2035,"code",31),Qx(2036,"string"),og()(),Il(2037,"td",24)(2038,"em")(2039,"strong"),Qx(2040,"(opcional)"),og()(),Il(2041,"p"),Qx(2042,"Define o r\xF3tulo para valores "),Il(2043,"code"),Qx(2044,"false"),og(),Qx(2045,"."),og()()(),Il(2046,"tr",17)(2047,"td",18)(2048,"div",19)(2049,"span",20),Qx(2050," trueLabel"),zl(2051,"br"),og()()(),Il(2052,"td",21)(2053,"code",31),Qx(2054,"string"),og()(),Il(2055,"td",24)(2056,"em")(2057,"strong"),Qx(2058,"(opcional)"),og()(),Il(2059,"p"),Qx(2060,"Define o r\xF3tulo para valores "),Il(2061,"code"),Qx(2062,"true"),og(),Qx(2063,"."),og()()()(),Il(2064,"h4",44)(2065,"code",5),Qx(2066,"PoTableColumnSort"),og()(),Il(2067,"div",2)(2068,"p"),Qx(2069,"Interface para ordena\xE7\xE3o das colunas do componente table."),og()(),Il(2070,"h4",13),Qx(2071,"Propriedades"),og(),Il(2072,"table",14)(2073,"tr",15)(2074,"th",16),Qx(2075,"Nome"),og(),Il(2076,"th",16),Qx(2077,"Tipo"),og(),Il(2078,"th",16),Qx(2079,"Descri\xE7\xE3o"),og()(),Il(2080,"tr",17)(2081,"td",18)(2082,"div",19)(2083,"span",20),Qx(2084," column"),zl(2085,"br"),og()()(),Il(2086,"td",21)(2087,"code",48),Qx(2088,"PoTableColumn"),og()(),Il(2089,"td",24)(2090,"em")(2091,"strong"),Qx(2092,"(opcional)"),og()(),Il(2093,"p"),Qx(2094,"Coluna pela qual a tabela est\xE1 ordenada."),og()()(),Il(2095,"tr",17)(2096,"td",18)(2097,"div",19)(2098,"span",20),Qx(2099," type"),zl(2100,"br"),og()()(),Il(2101,"td",21)(2102,"code",49),Qx(2103,"PoTableColumnSortType"),og()(),Il(2104,"td",24)(2105,"p"),Qx(2106,"Tipo da ordena\xE7\xE3o."),og()()()(),Il(2107,"h4",44)(2108,"code",5),Qx(2109,"PoTableColumn"),og()(),Il(2110,"div",2)(2111,"p"),Qx(2112,"Interface para configura\xE7\xE3o das colunas do "),Il(2113,"code"),Qx(2114,"po-table"),og(),Qx(2115,"."),og(),Il(2116,"p"),Qx(2117,"As defini\xE7\xF5es das colunas ser\xE3o aplicadas linha a linha."),og()(),Il(2118,"h4",13),Qx(2119,"Propriedades"),og(),Il(2120,"table",14)(2121,"tr",15)(2122,"th",16),Qx(2123,"Nome"),og(),Il(2124,"th",16),Qx(2125,"Tipo"),og(),Il(2126,"th",16),Qx(2127,"Descri\xE7\xE3o"),og()(),Il(2128,"tr",17)(2129,"td",18)(2130,"div",19)(2131,"span",20),Qx(2132," action"),zl(2133,"br"),og()()(),Il(2134,"td",21)(2135,"code",45),Qx(2136,"Function"),og()(),Il(2137,"td",24)(2138,"em")(2139,"strong"),Qx(2140,"(opcional)"),og()(),Il(2141,"p"),Qx(2142,"Define uma a\xE7\xE3o na coluna quando o tipo da coluna for "),Il(2143,"code"),Qx(2144,"link"),og(),Qx(2145," ou "),Il(2146,"code"),Qx(2147,"icon"),og(),Qx(2148,"."),og(),Il(2149,"blockquote")(2150,"p"),Qx(2151,"Quando for do tipo "),Il(2152,"code"),Qx(2153,"link"),og(),Qx(2154,` ser\xE1 enviado como primeiro par\xE2metro o valor da coluna
e no segundo par\xE2metro o objeto completo da linha. Caso tenha sido definido uma a\xE7\xE3o e um link na coluna, a a\xE7\xE3o
ser\xE1 executada ao inv\xE9s do link.`),og()(),Il(2155,"blockquote")(2156,"p"),Qx(2157,"Quando for do tipo "),Il(2158,"code"),Qx(2159,"icon"),og(),Qx(2160," enviar\xE1 o objeto completo da linha e o segundo par\xE2metro ser\xE1 a defini\xE7\xE3o da coluna."),og()()()(),Il(2161,"tr",17)(2162,"td",18)(2163,"div",19)(2164,"span",20),Qx(2165," boolean"),zl(2166,"br"),og()()(),Il(2167,"td",21)(2168,"code",50),Qx(2169,"PoTableBoolean"),og()(),Il(2170,"td",24)(2171,"em")(2172,"strong"),Qx(2173,"(opcional)"),og()(),Il(2174,"p"),Qx(2175,"Define um objeto do tipo "),Il(2176,"code"),Qx(2177,"PoTableBoolean"),og(),Qx(2178," para as colunas do tipo "),Il(2179,"em"),Qx(2180,"boolean"),og(),Qx(2181,". Por exemplo:"),og(),Il(2182,"pre")(2183,"code"),Qx(2184,`{ property: 'approbation', type: 'boolean', boolean: {
  trueLabel: 'Accepted', falseLabel: 'Rejected'
}}
`),og()(),Il(2185,"blockquote")(2186,"p"),Qx(2187,"Caso n\xE3o seja definido um objeto para colunas do tipo "),Il(2188,"em"),Qx(2189,"boolean"),og(),Qx(2190,`,
esta exibir\xE1 por padr\xE3o `),Il(2191,"code"),Qx(2192,"Sim"),og(),Qx(2193," e "),Il(2194,"code"),Qx(2195,"N\xE3o"),og(),Qx(2196," de acordo com os valores "),Il(2197,"em"),Qx(2198,"booleanos"),og(),Qx(2199,"."),og()()()(),Il(2200,"tr",17)(2201,"td",18)(2202,"div",19)(2203,"span",20),Qx(2204," color"),zl(2205,"br"),og()()(),Il(2206,"td",21)(2207,"code",31),Qx(2208,"string "),og(),Il(2209,"code",45),Qx(2210," Function"),og()(),Il(2211,"td",24)(2212,"em")(2213,"strong"),Qx(2214,"(opcional)"),og()(),Il(2215,"p"),Qx(2216,"Define a cor que ser\xE1 aplicada no conte\xFAdo da coluna."),og(),Il(2217,"p"),Qx(2218,"Valores v\xE1lidos:"),og(),Il(2219,"ul")(2220,"li"),zl(2221,"span",51),Il(2222,"code"),Qx(2223,"color-01"),og()(),Il(2224,"li"),zl(2225,"span",52),Il(2226,"code"),Qx(2227,"color-02"),og()(),Il(2228,"li"),zl(2229,"span",53),Il(2230,"code"),Qx(2231,"color-03"),og()(),Il(2232,"li"),zl(2233,"span",54),Il(2234,"code"),Qx(2235,"color-04"),og()(),Il(2236,"li"),zl(2237,"span",55),Il(2238,"code"),Qx(2239,"color-05"),og()(),Il(2240,"li"),zl(2241,"span",56),Il(2242,"code"),Qx(2243,"color-06"),og()(),Il(2244,"li"),zl(2245,"span",57),Il(2246,"code"),Qx(2247,"color-07"),og()(),Il(2248,"li"),zl(2249,"span",58),Il(2250,"code"),Qx(2251,"color-08"),og()(),Il(2252,"li"),zl(2253,"span",59),Il(2254,"code"),Qx(2255,"color-09"),og()(),Il(2256,"li"),zl(2257,"span",60),Il(2258,"code"),Qx(2259,"color-10"),og()(),Il(2260,"li"),zl(2261,"span",61),Il(2262,"code"),Qx(2263,"color-11"),og()(),Il(2264,"li"),zl(2265,"span",62),Il(2266,"code"),Qx(2267,"color-12"),og()()(),Il(2268,"blockquote")(2269,"p"),Qx(2270,"Tamb\xE9m \xE9 poss\xEDvel utilizar as 35 cores da paleta "),Il(2271,"strong"),Qx(2272,"Caption Tag Colors"),og(),Qx(2273,":"),og()(),Il(2274,"ul")(2275,"li"),zl(2276,"span",63),Il(2277,"code"),Qx(2278,"caption-tag-01"),og(),zl(2279,"span",64),Il(2280,"code"),Qx(2281,"caption-tag-02"),og(),zl(2282,"span",65),Il(2283,"code"),Qx(2284,"caption-tag-03"),og(),zl(2285,"span",66),Il(2286,"code"),Qx(2287,"caption-tag-04"),og(),zl(2288,"span",67),Il(2289,"code"),Qx(2290,"caption-tag-05"),og()(),Il(2291,"li"),zl(2292,"span",68),Il(2293,"code"),Qx(2294,"caption-tag-06"),og(),zl(2295,"span",69),Il(2296,"code"),Qx(2297,"caption-tag-07"),og(),zl(2298,"span",70),Il(2299,"code"),Qx(2300,"caption-tag-08"),og(),zl(2301,"span",71),Il(2302,"code"),Qx(2303,"caption-tag-09"),og(),zl(2304,"span",72),Il(2305,"code"),Qx(2306,"caption-tag-10"),og()(),Il(2307,"li"),zl(2308,"span",73),Il(2309,"code"),Qx(2310,"caption-tag-11"),og(),zl(2311,"span",74),Il(2312,"code"),Qx(2313,"caption-tag-12"),og(),zl(2314,"span",75),Il(2315,"code"),Qx(2316,"caption-tag-13"),og(),zl(2317,"span",76),Il(2318,"code"),Qx(2319,"caption-tag-14"),og(),zl(2320,"span",77),Il(2321,"code"),Qx(2322,"caption-tag-15"),og()(),Il(2323,"li"),zl(2324,"span",78),Il(2325,"code"),Qx(2326,"caption-tag-16"),og(),zl(2327,"span",79),Il(2328,"code"),Qx(2329,"caption-tag-17"),og(),zl(2330,"span",80),Il(2331,"code"),Qx(2332,"caption-tag-18"),og(),zl(2333,"span",81),Il(2334,"code"),Qx(2335,"caption-tag-19"),og(),zl(2336,"span",82),Il(2337,"code"),Qx(2338,"caption-tag-20"),og()(),Il(2339,"li"),zl(2340,"span",83),Il(2341,"code"),Qx(2342,"caption-tag-21"),og(),zl(2343,"span",84),Il(2344,"code"),Qx(2345,"caption-tag-22"),og(),zl(2346,"span",85),Il(2347,"code"),Qx(2348,"caption-tag-23"),og(),zl(2349,"span",86),Il(2350,"code"),Qx(2351,"caption-tag-24"),og(),zl(2352,"span",87),Il(2353,"code"),Qx(2354,"caption-tag-25"),og()(),Il(2355,"li"),zl(2356,"span",88),Il(2357,"code"),Qx(2358,"caption-tag-26"),og(),zl(2359,"span",89),Il(2360,"code"),Qx(2361,"caption-tag-27"),og(),zl(2362,"span",90),Il(2363,"code"),Qx(2364,"caption-tag-28"),og(),zl(2365,"span",91),Il(2366,"code"),Qx(2367,"caption-tag-29"),og(),zl(2368,"span",92),Il(2369,"code"),Qx(2370,"caption-tag-30"),og()(),Il(2371,"li"),zl(2372,"span",93),Il(2373,"code"),Qx(2374,"caption-tag-31"),og(),zl(2375,"span",94),Il(2376,"code"),Qx(2377,"caption-tag-32"),og(),zl(2378,"span",95),Il(2379,"code"),Qx(2380,"caption-tag-33"),og(),zl(2381,"span",96),Il(2382,"code"),Qx(2383,"caption-tag-34"),og(),zl(2384,"span",97),Il(2385,"code"),Qx(2386,"caption-tag-35"),og()()(),Il(2387,"blockquote")(2388,"p"),Qx(2389,`Existe a possibilidade de informar uma fun\xE7\xE3o que retorne um dos valores aceitos, ser\xE3o passados
por par\xE2metro a linha e a coluna atual, por exemplo:`),og()(),Il(2390,"pre")(2391,"code"),Qx(2392,`(row, column) => { row[column] == 'text' ? 'color-03' : 'color-09' }
`),og()(),Il(2393,"blockquote")(2394,"p"),Qx(2395,"\xC9 poss\xEDvel tamb\xE9m us\xE1-la na coluna do tipo "),Il(2396,"code"),Qx(2397,"icons"),og(),Qx(2398,` para altera\xE7\xE3o das cores de seu conte\xFAdo conforme exemplo abaixo,
contudo, desta forma sobrep\xF5e a cor especificada em cada objeto caso haja:`),og()(),Il(2399,"pre")(2400,"code"),Qx(2401,`{ property: 'columnIcon', label: 'Like', type: 'icon', color: 'color-08', icons: [
  { value: 'an an-star', action: () => this.notification() }
]},
`),og()()()(),Il(2402,"tr",17)(2403,"td",18)(2404,"div",19)(2405,"span",20),Qx(2406," detail"),zl(2407,"br"),og()()(),Il(2408,"td",21)(2409,"code",98),Qx(2410,"PoTableDetail"),og()(),Il(2411,"td",24)(2412,"em")(2413,"strong"),Qx(2414,"(opcional)"),og()(),Il(2415,"p"),Qx(2416,"Define um objeto que segue a interface "),Il(2417,"code"),Qx(2418,"PoTableDetail"),og(),Qx(2419,", para as colunas de detalhes. Por exemplo:"),og(),Il(2420,"pre")(2421,"code"),Qx(2422,`{ columns: [{ property: 'package', label: 'Pacote' }], typeHeader: 'top' }
`),og()()()(),Il(2423,"tr",17)(2424,"td",18)(2425,"div",19)(2426,"span",20),Qx(2427," disabled"),zl(2428,"br"),og()()(),Il(2429,"td",21)(2430,"code",45),Qx(2431,"Function"),og()(),Il(2432,"td",24)(2433,"em")(2434,"strong"),Qx(2435,"(opcional)"),og()(),Il(2436,"p"),Qx(2437,"Fun\xE7\xE3o que deve retornar um booleano para habilitar ou desabilitar o "),Il(2438,"em"),Qx(2439,"link"),og(),Qx(2440," e sua a\xE7\xE3o."),og(),Il(2441,"blockquote")(2442,"p"),Qx(2443,"Propriedade dispon\xEDvel nas colunas do tipo "),Il(2444,"code"),Qx(2445,"link"),og(),Qx(2446,"."),og()()()(),Il(2447,"tr",17)(2448,"td",18)(2449,"div",19)(2450,"span",20),Qx(2451," format"),zl(2452,"br"),og()()(),Il(2453,"td",21)(2454,"code",31),Qx(2455,"string"),og()(),Il(2456,"td",24)(2457,"em")(2458,"strong"),Qx(2459,"(opcional)"),og()(),Il(2460,"p"),Qx(2461,"Formato de exibi\xE7\xE3o do valor da coluna."),og(),Il(2462,"table")(2463,"thead")(2464,"tr")(2465,"th"),Qx(2466,"Formata\xE7\xE3o"),og(),Il(2467,"th"),Qx(2468,"Type da Coluna"),og(),Il(2469,"th"),Qx(2470,"Descri\xE7\xE3o"),og(),Il(2471,"th"),Qx(2472,"Exemplos"),og()()(),Il(2473,"tbody")(2474,"tr")(2475,"td"),Qx(2476,"Monet\xE1rio"),og(),Il(2477,"td")(2478,"code"),Qx(2479,"currency"),og()(),Il(2480,"td"),Qx(2481,"Formato para valores monet\xE1rios. Informe o c\xF3digo da moeda (ISO 4217)."),og(),Il(2482,"td")(2483,"code"),Qx(2484,"'BRL'"),og(),Qx(2485,", "),Il(2486,"code"),Qx(2487,"'USD'"),og(),Qx(2488,", "),Il(2489,"code"),Qx(2490,"'EUR'"),og(),Qx(2491,", "),Il(2492,"code"),Qx(2493,"'RUB'"),og()()(),Il(2494,"tr")(2495,"td"),Qx(2496,"Data"),og(),Il(2497,"td")(2498,"code"),Qx(2499,"date"),og()(),Il(2500,"td"),Qx(2501,"Aceita apenas os caracteres de dia(dd), m\xEAs(MM) e ano (yyyy ou yy), caso n\xE3o seja informado um formato o mesmo ser\xE1 'dd/MM/yyyy'"),og(),Il(2502,"td")(2503,"code"),Qx(2504,"'dd/MM/yyyy'"),og(),Qx(2505,", "),Il(2506,"code"),Qx(2507,"'dd-MM-yy'"),og(),Qx(2508,", "),Il(2509,"code"),Qx(2510,"'mm/dd/yyyy'"),og()()(),Il(2511,"tr")(2512,"td"),Qx(2513,"Hora"),og(),Il(2514,"td")(2515,"code"),Qx(2516,"time"),og()(),Il(2517,"td"),Qx(2518,"Aceita apenas os caracteres de hora(HH), minutos(mm), segundos(ss) e milisegundos(f-ffffff), os milisegundos s\xE3o opcionais, caso n\xE3o seja informado um formato o mesmo ser\xE1 'HH:mm:ss'"),og(),Il(2519,"td")(2520,"code"),Qx(2521,"'HH:mm'"),og(),Qx(2522,", "),Il(2523,"code"),Qx(2524,"'HH:mm:ss.ffffff'"),og(),Qx(2525,", "),Il(2526,"code"),Qx(2527,"'HH:mm:ss.ff'"),og(),Qx(2528,", "),Il(2529,"code"),Qx(2530,"'mm:ss.fff'"),og()()(),Il(2531,"tr")(2532,"td"),Qx(2533,"N\xFAmero"),og(),Il(2534,"td")(2535,"code"),Qx(2536,"number"),og()(),Il(2537,"td"),Qx(2538,"Aceita um valor seguindo o padr\xE3o "),Il(2539,"a",99)(2540,"strong"),Qx(2541,"DecimalPipe"),og()(),Qx(2542," para formata\xE7\xE3o, e caso n\xE3o seja informado, o n\xFAmero ser\xE1 exibido na sua forma original."),og(),Il(2543,"td")(2544,"code"),Qx(2545,"'1.2-5'"),og(),Qx(2546," (ex.: "),Il(2547,"code"),Qx(2548,"50"),og(),Qx(2549," \u2192 "),Il(2550,"code"),Qx(2551,"50.00"),og(),Qx(2552,")"),og()()()(),Il(2553,"p"),Qx(2554,"Observa\xE7\xE3o: caso n\xE3o seja informado um formato, o valor ser\xE1 exibido em sua forma original."),og()()(),Il(2555,"tr",17)(2556,"td",18)(2557,"div",19)(2558,"span",20),Qx(2559," icons"),zl(2560,"br"),og()()(),Il(2561,"td",21)(2562,"code",100),Qx(2563,"Array<PoTableColumnIcon>"),og()(),Il(2564,"td",24)(2565,"em")(2566,"strong"),Qx(2567,"(opcional)"),og()(),Il(2568,"p"),Qx(2569,"Define um "),Il(2570,"em"),Qx(2571,"array"),og(),Qx(2572," de objetos para colunas de \xEDcones que ir\xE1 sobrepor os valores como "),Il(2573,"code"),Qx(2574,"action"),og(),Qx(2575," e "),Il(2576,"code"),Qx(2577,"color"),og(),Qx(2578,`
definidos na coluna, \xE0 partir do `),Il(2579,"em"),Qx(2580,"value"),og(),Qx(2581," da "),Il(2582,"a",101)(2583,"code"),Qx(2584,"PoTableColumnIcon"),og()(),Qx(2585,", por exemplo:"),og(),Il(2586,"pre")(2587,"code"),Qx(2588,`{ property: 'columnIcon', label: 'Icons', type: 'icon', action: this.favorite.bind(this), icons: [
  { value: 'delete', icon: 'an an-plus', color: 'color-06', action: this.add.bind(this), tooltip: 'Adiciona um novo item' },
  { value: 'edit', icon: 'an an-pencil-simple', action: this.edit.bind(this) },
  { value: 'delete', icon: 'an an-trash', color: 'color-12', action: this.remove.bind(this) }
]},
`),og()(),Il(2589,"pre")(2590,"code"),Qx(2591,`...
{ id: 1, columnIcon: ['an an-pencil-simple', 'an an-trash', 'an an-star'] }
...
`),og()()()(),Il(2592,"tr",17)(2593,"td",18)(2594,"div",19)(2595,"span",20),Qx(2596," label"),zl(2597,"br"),og()()(),Il(2598,"td",21)(2599,"code",31),Qx(2600,"string"),og()(),Il(2601,"td",24)(2602,"em")(2603,"strong"),Qx(2604,"(opcional)"),og()(),Il(2605,"p"),Qx(2606,"Texto para t\xEDtulo da coluna."),og(),Il(2607,"p"),Qx(2608,"Caso n\xE3o seja informado, ser\xE1 utilizado como "),Il(2609,"em"),Qx(2610,"label"),og(),Qx(2611," o valor da propriedade "),Il(2612,"em"),Qx(2613,"property"),og(),Qx(2614," com a primeira letra em mai\xFAsculo."),og()()(),Il(2615,"tr",17)(2616,"td",18)(2617,"div",19)(2618,"span",20),Qx(2619," labels"),zl(2620,"br"),og()()(),Il(2621,"td",21)(2622,"code",102),Qx(2623,"Array<PoTableColumnLabel>"),og()(),Il(2624,"td",24)(2625,"em")(2626,"strong"),Qx(2627,"(opcional)"),og()(),Il(2628,"p"),Qx(2629,`Define um array de objetos para as colunas de label, onde 'labels' \xE9 uma lista de objetos
do tipo `),Il(2630,"code"),Qx(2631,"PoTableColumnLabel"),og(),Qx(2632," na qual devem ser definidas os labels. Por exemplo:"),og(),Il(2633,"pre")(2634,"code"),Qx(2635,`{ property: 'flightStatus', label: 'Status', type: 'label', width:'100px', labels: [
 { value: 'confirmed', color: 'caption-tag-13', label: 'Confirmado', tooltip: 'Flight Status' },
 { value: 'delayed', color: 'caption-tag-08', label: 'Atrasado', tooltip: 'Flight Status' }
}
`),og()()()(),Il(2636,"tr",17)(2637,"td",18)(2638,"div",19)(2639,"span",20),Qx(2640," link"),zl(2641,"br"),og()()(),Il(2642,"td",21)(2643,"code",31),Qx(2644,"string"),og()(),Il(2645,"td",24)(2646,"em")(2647,"strong"),Qx(2648,"(opcional)"),og()(),Il(2649,"p"),Qx(2650,"Define o nome da propriedade que conter\xE1 o "),Il(2651,"code"),Qx(2652,"link"),og(),Qx(2653," a ser redirecionado."),og()()(),Il(2654,"tr",17)(2655,"td",18)(2656,"div",19)(2657,"span",20),Qx(2658," property"),zl(2659,"br"),og()()(),Il(2660,"td",21)(2661,"code",31),Qx(2662,"string"),og()(),Il(2663,"td",24)(2664,"em")(2665,"strong"),Qx(2666,"(opcional)"),og()(),Il(2667,"p"),Qx(2668,"Nome identificador da coluna. Tamb\xE9m permite objetos aninhados conforme exemplo abaixo."),og(),Il(2669,"pre")(2670,"code"),Qx(2671,`{ property: 'address.street', label: 'Rua' }
`),og()()()(),Il(2672,"tr",17)(2673,"td",18)(2674,"div",19)(2675,"span",20),Qx(2676," sortable"),zl(2677,"br"),og()()(),Il(2678,"td",21)(2679,"code",22),Qx(2680,"boolean"),og()(),Il(2681,"td",24)(2682,"em")(2683,"strong"),Qx(2684,"(opcional)"),og()(),Il(2685,"p"),Qx(2686,`Controla se a coluna ser\xE1 considerada como "ordenavel". Caso seja definido um valor falso, a coluna n\xE3o ser\xE1 usada para
ordena\xE7\xE3o.`),og()()(),Il(2687,"tr",17)(2688,"td",18)(2689,"div",19)(2690,"span",20),Qx(2691," subtitles"),zl(2692,"br"),og()()(),Il(2693,"td",21)(2694,"code",103),Qx(2695,"Array<PoTableSubtitleColumn>"),og()(),Il(2696,"td",24)(2697,"em")(2698,"strong"),Qx(2699,"(opcional)"),og()(),Il(2700,"p"),Qx(2701,"Define um array de objetos para as colunas de legenda. Onde, "),Il(2702,"code"),Qx(2703,"subtitles"),og(),Qx(2704,` \xE9 uma lista de objetos do tipo PoTableSubtitle na qual
devem ser definidas as op\xE7\xF5es de legenda. Por exemplo:`),og(),Il(2705,"pre")(2706,"code"),Qx(2707,`{ property: 'flightStatus', label: 'Status', color: 'subtitle', width:'100px', subtitles: [
 { value: 'confirmed', color: 'caption-tag-13', label: 'Confirmado', content: '1' },
 { value: 'delayed', color: 'caption-tag-08', label: 'Atrasado', content: '2' }
}
`),og()(),Il(2708,"p"),Qx(2709,`Nesse exemplo a coluna escolhida para legenda \xE9 'flightStatus', se o valor dessa coluna for 'confirmed', o texto da legenda ser\xE1
'Confirmado'.`),og()()(),Il(2710,"tr",17)(2711,"td",18)(2712,"div",19)(2713,"span",20),Qx(2714," tooltip"),zl(2715,"br"),og()()(),Il(2716,"td",21)(2717,"code",31),Qx(2718,"string"),og()(),Il(2719,"td",24)(2720,"em")(2721,"strong"),Qx(2722,"(opcional)"),og()(),Il(2723,"p"),Qx(2724,"Define um texto de ajuda que ser\xE1 exibido ao passar o "),Il(2725,"em"),Qx(2726,"mouse"),og(),Qx(2727," sobre um texto."),og(),Il(2728,"blockquote")(2729,"p"),Qx(2730,"O tooltip s\xF3 ser\xE1 vis\xEDvel se for uma coluna do tipo "),Il(2731,"em"),Qx(2732,"link"),og(),Qx(2733,"."),og()(),Il(2734,"blockquote")(2735,"p"),Qx(2736,`Caso o conte\xFAdo da c\xE9lula exceder a largura da coluna,
\xE9 ignorado o valor atribu\xEDdo ao `),Il(2737,"em"),Qx(2738,"tooltip"),og(),Qx(2739," e ser\xE1 exibido justamente o conte\xFAdo da c\xE9lula."),og()()()(),Il(2740,"tr",17)(2741,"td",18)(2742,"div",19)(2743,"span",20),Qx(2744," type"),zl(2745,"br"),og()()(),Il(2746,"td",21)(2747,"code",31),Qx(2748,"string"),og()(),Il(2749,"td",24)(2750,"em")(2751,"strong"),Qx(2752,"(opcional)"),og()(),Il(2753,"p"),Qx(2754,"Tipo da coluna."),og(),Il(2755,"p"),Qx(2756,"Valores v\xE1lidos:"),og(),Il(2757,"ul")(2758,"li")(2759,"p")(2760,"code"),Qx(2761,"boolean"),og(),Qx(2762,": Exibir\xE1 por padr\xE3o "),Il(2763,"code"),Qx(2764,"Sim"),og(),Qx(2765," e "),Il(2766,"code"),Qx(2767,"N\xE3o"),og(),Qx(2768," de acordo com os valores "),Il(2769,"em"),Qx(2770,"booleanos"),og(),Qx(2771,"."),og(),Il(2772,"blockquote")(2773,"p"),Qx(2774,"Caso necessite exibir valores diferentes do padr\xE3o, deve-se utilizar a propriedade "),Il(2775,"code"),Qx(2776,"boolean"),og(),Qx(2777," desta interface."),og()()(),Il(2778,"li")(2779,"p")(2780,"code"),Qx(2781,"currency"),og(),Qx(2782,": valores monet\xE1rios."),og()(),Il(2783,"li")(2784,"p")(2785,"code"),Qx(2786,"date"),og(),Qx(2787,": valor de datas."),og(),Il(2788,"ul")(2789,"li"),Qx(2790,"Aceita os tipos "),Il(2791,"em"),Qx(2792,"string"),og(),Qx(2793," e "),Il(2794,"em"),Qx(2795,"Date"),og(),Qx(2796,` padr\xE3o do Javascript,
por exemplo: `),Il(2797,"code"),Qx(2798,"'2017-11-28'"),og(),Qx(2799," ou "),Il(2800,"code"),Qx(2801,"new Date(2017, 10, 28)"),og(),Qx(2802,"."),og()()(),Il(2803,"li")(2804,"p")(2805,"code"),Qx(2806,"dateTime"),og(),Qx(2807,": valor de data com hor\xE1rio."),og(),Il(2808,"ul")(2809,"li"),Qx(2810,"Aceita o tipo "),Il(2811,"em"),Qx(2812,"string"),og(),Qx(2813," no formato "),Il(2814,"strong"),Qx(2815,"ISO-8601"),og(),Qx(2816," extendido "),Il(2817,"strong"),Qx(2818,"'yyyy-mm-ddThh:mm:ss+|-hh:mm'"),og(),Qx(2819,`
e o tipo `),Il(2820,"em"),Qx(2821,"Date"),og(),Qx(2822," padr\xE3o do Javascript, por exemplo: "),Il(2823,"code"),Qx(2824,"'2017-11-28T00:00:00-02:00'"),og(),Qx(2825," ou "),Il(2826,"code"),Qx(2827,"new Date(2017, 10, 28)"),og(),Qx(2828,"."),og()()(),Il(2829,"li")(2830,"p")(2831,"code"),Qx(2832,"detail"),og(),Qx(2833,": array de objetos para o master-detail."),og(),Il(2834,"ul")(2835,"li"),Qx(2836,"Incompat\xEDvel com "),Il(2837,"code"),Qx(2838,"virtual-scroll"),og(),Qx(2839,", que requer altura fixa nas linhas."),og()()(),Il(2840,"li")(2841,"p")(2842,"code"),Qx(2843,"icon"),og(),Qx(2844,": "),Il(2845,"em"),Qx(2846,"array"),og(),Qx(2847," de "),Il(2848,"em"),Qx(2849,"string"),og(),Qx(2850," ou objetos para a coluna de \xEDcones."),og()(),Il(2851,"li")(2852,"p")(2853,"code"),Qx(2854,"label"),og(),Qx(2855,": texto com destaque."),og()(),Il(2856,"li")(2857,"p")(2858,"code"),Qx(2859,"link"),og(),Qx(2860,": habilita link na coluna para a\xE7\xE3o ou navega\xE7\xE3o."),og()(),Il(2861,"li")(2862,"p")(2863,"code"),Qx(2864,"number"),og(),Qx(2865,": valores num\xE9ricos."),og()(),Il(2866,"li")(2867,"p")(2868,"code"),Qx(2869,"string"),og(),Qx(2870,": textos."),og()(),Il(2871,"li")(2872,"p")(2873,"code"),Qx(2874,"subtitle"),og(),Qx(2875,": array de objetos para a coluna de legenda."),og()(),Il(2876,"li")(2877,"p")(2878,"code"),Qx(2879,"time"),og(),Qx(2880,": valor de hor\xE1rio."),og(),Il(2881,"ul")(2882,"li"),Qx(2883,"Aceita o tipo "),Il(2884,"em"),Qx(2885,"string"),og(),Qx(2886," nos formatos "),Il(2887,"strong"),Qx(2888,"'HH:mm:ss'"),og(),Qx(2889," ou "),Il(2890,"strong"),Qx(2891,"'HH:mm:ss.ffffff'"),og(),Qx(2892,", por exemplo: "),Il(2893,"code"),Qx(2894,"'23:12:45'"),og(),Qx(2895,"."),og()()(),Il(2896,"li")(2897,"p")(2898,"code"),Qx(2899,"cellTemplate"),og(),Qx(2900,`: Indica que a coluna ser\xE1 utilizada como template, em conjunto com o
`),Il(2901,"a",8),Qx(2902,"PoTableCellTemplate"),og(),Qx(2903,"."),og()(),Il(2904,"li")(2905,"p")(2906,"code"),Qx(2907,"columnTemplate"),og(),Qx(2908,`: Indica que a coluna ser\xE1 utilizada como template, em conjunto com o
`),Il(2909,"a",7),Qx(2910,"PoTableColumnTemplate"),og(),Qx(2911,"."),og()()()()(),Il(2912,"tr",17)(2913,"td",18)(2914,"div",19)(2915,"span",20),Qx(2916," visible"),zl(2917,"br"),og()()(),Il(2918,"td",21)(2919,"code",22),Qx(2920,"boolean"),og()(),Il(2921,"td",24)(2922,"em")(2923,"strong"),Qx(2924,"(opcional)"),og()(),Il(2925,"p"),Qx(2926,`Controla a exibi\xE7\xE3o da coluna. Caso seja definido um valor falso, a coluna n\xE3o ser\xE1 exibida mas mas ser\xE1 poss\xEDvel torn\xE1-la
vis\xEDvel atrav\xE9s do `),Il(2927,"strong"),Qx(2928,"gerenciador de colunas"),og(),Qx(2929,"."),og(),Il(2930,"blockquote")(2931,"p"),Qx(2932,"A disponibilidade de visualiza\xE7\xE3o pode limitar-se de acordo com a defini\xE7\xE3o de "),Il(2933,"code"),Qx(2934,"p-max-columns"),og(),Qx(2935,"."),og()()()(),Il(2936,"tr",17)(2937,"td",18)(2938,"div",19)(2939,"span",20),Qx(2940," width"),zl(2941,"br"),og()()(),Il(2942,"td",21)(2943,"code",31),Qx(2944,"string"),og()(),Il(2945,"td",24)(2946,"em")(2947,"strong"),Qx(2948,"(opcional)"),og()(),Il(2949,"p"),Qx(2950,`hoje o tamanho m\xEDnimo das colunas \xE9 de 32px, respeitando o padding lateral.
Boas Pr\xE1ticas:
Indicamos:`),og(),Il(2951,"ul")(2952,"li"),Qx(2953,"para colunas com 2 das propriedades (property, [p-draggable] e [p-sort]) : 96px"),og(),Il(2954,"li"),Qx(2955,"para colunas com 3 propriedades (property, [p-draggable] e [p-sort]) : 144px"),og()()()()(),Il(2956,"h4",44)(2957,"code",5),Qx(2958,"PoTableLiterals"),og()(),Il(2959,"div",2)(2960,"p"),Qx(2961,"Interface para defini\xE7\xE3o das literais usadas no "),Il(2962,"code"),Qx(2963,"po-table"),og(),Qx(2964,"."),og()(),Il(2965,"h4",13),Qx(2966,"Propriedades"),og(),Il(2967,"table",14)(2968,"tr",15)(2969,"th",16),Qx(2970,"Nome"),og(),Il(2971,"th",16),Qx(2972,"Tipo"),og(),Il(2973,"th",16),Qx(2974,"Descri\xE7\xE3o"),og()(),Il(2975,"tr",17)(2976,"td",18)(2977,"div",19)(2978,"span",20),Qx(2979," bodyDelete"),zl(2980,"br"),og()()(),Il(2981,"td",21)(2982,"code",31),Qx(2983,"string"),og()(),Il(2984,"td",24)(2985,"em")(2986,"strong"),Qx(2987,"(opcional)"),og()(),Il(2988,"p"),Qx(2989,"Texto no corpo do Modal de exclus\xE3o"),og()()(),Il(2990,"tr",17)(2991,"td",18)(2992,"div",19)(2993,"span",20),Qx(2994," cancel"),zl(2995,"br"),og()()(),Il(2996,"td",21)(2997,"code",31),Qx(2998,"string"),og()(),Il(2999,"td",24)(3e3,"em")(3001,"strong"),Qx(3002,"(opcional)"),og()(),Il(3003,"p"),Qx(3004,"Texto no Modal para cancelar a exclus\xE3o"),og()()(),Il(3005,"tr",17)(3006,"td",18)(3007,"div",19)(3008,"span",20),Qx(3009," columnsManager"),zl(3010,"br"),og()()(),Il(3011,"td",21)(3012,"code",31),Qx(3013,"string"),og()(),Il(3014,"td",24)(3015,"em")(3016,"strong"),Qx(3017,"(opcional)"),og()(),Il(3018,"p"),Qx(3019,"Texto do "),Il(3020,"strong"),Qx(3021,"Gerenciador de colunas"),og(),Qx(3022," localizado no canto superior direito da tabela."),og()()(),Il(3023,"tr",17)(3024,"td",18)(3025,"div",19)(3026,"span",20),Qx(3027," completeSubtitle"),zl(3028,"br"),og()()(),Il(3029,"td",21)(3030,"code",31),Qx(3031,"string"),og()(),Il(3032,"td",24)(3033,"em")(3034,"strong"),Qx(3035,"(opcional)"),og()(),Il(3036,"p"),Qx(3037,"T\xEDtulo da modal 'Legenda completa' que aparece ao clicar no bot\xE3o 'Ver legenda completa'."),og()()(),Il(3038,"tr",17)(3039,"td",18)(3040,"div",19)(3041,"span",20),Qx(3042," delete"),zl(3043,"br"),og()()(),Il(3044,"td",21)(3045,"code",31),Qx(3046,"string"),og()(),Il(3047,"td",24)(3048,"em")(3049,"strong"),Qx(3050,"(opcional)"),og()(),Il(3051,"p"),Qx(3052,"Texto no Modal para confirmar a exclus\xE3o"),og()()(),Il(3053,"tr",17)(3054,"td",18)(3055,"div",19)(3056,"span",20),Qx(3057," deleteApiError"),zl(3058,"br"),og()()(),Il(3059,"td",21)(3060,"code",31),Qx(3061,"string"),og()(),Il(3062,"td",24)(3063,"em")(3064,"strong"),Qx(3065,"(opcional)"),og()(),Il(3066,"p"),Qx(3067,"Texto de notifica\xE7\xE3o de erro na requisi\xE7\xE3o Delete"),og()()(),Il(3068,"tr",17)(3069,"td",18)(3070,"div",19)(3071,"span",20),Qx(3072," deleteSuccessful"),zl(3073,"br"),og()()(),Il(3074,"td",21)(3075,"code",31),Qx(3076,"string"),og()(),Il(3077,"td",24)(3078,"em")(3079,"strong"),Qx(3080,"(opcional)"),og()(),Il(3081,"p"),Qx(3082,"Texto de notifica\xE7\xE3o de remo\xE7\xE3o com sucesso"),og()()(),Il(3083,"tr",17)(3084,"td",18)(3085,"div",19)(3086,"span",20),Qx(3087," loadMoreData"),zl(3088,"br"),og()()(),Il(3089,"td",21)(3090,"code",31),Qx(3091,"string"),og()(),Il(3092,"td",24)(3093,"em")(3094,"strong"),Qx(3095,"(opcional)"),og()(),Il(3096,"p"),Qx(3097,"Texto do bot\xE3o de "),Il(3098,"strong"),Qx(3099,"Carregar mais resultados"),og(),Qx(3100," localizado no rodap\xE9 da tabela."),og()()(),Il(3101,"tr",17)(3102,"td",18)(3103,"div",19)(3104,"span",20),Qx(3105," loadingData"),zl(3106,"br"),og()()(),Il(3107,"td",21)(3108,"code",31),Qx(3109,"string"),og()(),Il(3110,"td",24)(3111,"em")(3112,"strong"),Qx(3113,"(opcional)"),og()(),Il(3114,"p"),Qx(3115,"Texto exibido enquanto uma requisi\xE7\xE3o est\xE1 sendo executada para carregar dados na tabela."),og()()(),Il(3116,"tr",17)(3117,"td",18)(3118,"div",19)(3119,"span",20),Qx(3120," multipleItems"),zl(3121,"br"),og()()(),Il(3122,"td",21)(3123,"code",31),Qx(3124,"string"),og()(),Il(3125,"td",24)(3126,"em")(3127,"strong"),Qx(3128,"(opcional)"),og()(),Il(3129,"p"),Qx(3130,"Texto exibido quando apenas 1 item for selecionado no checkbox."),og()()(),Il(3131,"tr",17)(3132,"td",18)(3133,"div",19)(3134,"span",20),Qx(3135," noColumns"),zl(3136,"br"),og()()(),Il(3137,"td",21)(3138,"code",31),Qx(3139,"string"),og()(),Il(3140,"td",24)(3141,"em")(3142,"strong"),Qx(3143,"(opcional)"),og()(),Il(3144,"p"),Qx(3145,"Texto exibido quando n\xE3o existem colunas definidas para a tabela."),og()()(),Il(3146,"tr",17)(3147,"td",18)(3148,"div",19)(3149,"span",20),Qx(3150," noData"),zl(3151,"br"),og()()(),Il(3152,"td",21)(3153,"code",31),Qx(3154,"string"),og()(),Il(3155,"td",24)(3156,"em")(3157,"strong"),Qx(3158,"(opcional)"),og()(),Il(3159,"p"),Qx(3160,"Texto exibido quando n\xE3o existem itens para serem exibidos na tabela."),og()()(),Il(3161,"tr",17)(3162,"td",18)(3163,"div",19)(3164,"span",20),Qx(3165," noItem"),zl(3166,"br"),og()()(),Il(3167,"td",21)(3168,"code",31),Qx(3169,"string"),og()(),Il(3170,"td",24)(3171,"em")(3172,"strong"),Qx(3173,"(opcional)"),og()(),Il(3174,"p"),Qx(3175,"Texto exibido quando nenhum item for selecionado no checkbox."),og()()(),Il(3176,"tr",17)(3177,"td",18)(3178,"div",19)(3179,"span",20),Qx(3180," noVisibleColumn"),zl(3181,"br"),og()()(),Il(3182,"td",21)(3183,"code",31),Qx(3184,"string"),og()(),Il(3185,"td",24)(3186,"em")(3187,"strong"),Qx(3188,"(opcional)"),og()(),Il(3189,"p"),Qx(3190,"Texto exibido quando n\xE3o existem colunas vis\xEDveis para a tabela."),og()()(),Il(3191,"tr",17)(3192,"td",18)(3193,"div",19)(3194,"span",20),Qx(3195," oneItem"),zl(3196,"br"),og()()(),Il(3197,"td",21)(3198,"code",31),Qx(3199,"string"),og()(),Il(3200,"td",24)(3201,"em")(3202,"strong"),Qx(3203,"(opcional)"),og()(),Il(3204,"p"),Qx(3205,"Texto exibido quando apenas 1 item for selecionado no checkbox."),og()()(),Il(3206,"tr",17)(3207,"td",18)(3208,"div",19)(3209,"span",20),Qx(3210," seeCompleteSubtitle"),zl(3211,"br"),og()()(),Il(3212,"td",21)(3213,"code",31),Qx(3214,"string"),og()(),Il(3215,"td",24)(3216,"em")(3217,"strong"),Qx(3218,"(opcional)"),og()(),Il(3219,"p"),Qx(3220,"Texto do bot\xE3o "),Il(3221,"strong"),Qx(3222,"Ver legenda completa"),og(),Qx(3223," que aparece quando o rodap\xE9 de legendas \xE9 maior que a tabela."),og()()()(),Il(3224,"h4",44)(3225,"code",5),Qx(3226,"PoTableColumnIcon"),og()(),Il(3227,"div",2)(3228,"p"),zl(3229,"a",104),og(),Il(3230,"p"),Qx(3231,"Interface que define a coluna com \xEDcone(s) do "),Il(3232,"code"),Qx(3233,"po-table"),og(),Qx(3234,"."),og()(),Il(3235,"h4",13),Qx(3236,"Propriedades"),og(),Il(3237,"table",14)(3238,"tr",15)(3239,"th",16),Qx(3240,"Nome"),og(),Il(3241,"th",16),Qx(3242,"Tipo"),og(),Il(3243,"th",16),Qx(3244,"Descri\xE7\xE3o"),og()(),Il(3245,"tr",17)(3246,"td",18)(3247,"div",19)(3248,"span",20),Qx(3249," action"),zl(3250,"br"),og()()(),Il(3251,"td",21)(3252,"code",45),Qx(3253,"Function"),og()(),Il(3254,"td",24)(3255,"em")(3256,"strong"),Qx(3257,"(opcional)"),og()(),Il(3258,"p"),Qx(3259,"Define a a\xE7\xE3o que ser\xE1 executada ao clicar no \xEDcone."),og()()(),Il(3260,"tr",17)(3261,"td",18)(3262,"div",19)(3263,"span",20),Qx(3264," color"),zl(3265,"br"),og()()(),Il(3266,"td",21)(3267,"code",31),Qx(3268,"string "),og(),Il(3269,"code",45),Qx(3270," Function"),og()(),Il(3271,"td",24)(3272,"em")(3273,"strong"),Qx(3274,"(opcional)"),og()(),Il(3275,"p"),Qx(3276,"Define a cor do \xEDcone."),og(),Il(3277,"p"),Qx(3278,"Valores v\xE1lidos:"),og(),Il(3279,"ul")(3280,"li"),zl(3281,"span",51),Il(3282,"code"),Qx(3283,"color-01"),og()(),Il(3284,"li"),zl(3285,"span",52),Il(3286,"code"),Qx(3287,"color-02"),og()(),Il(3288,"li"),zl(3289,"span",53),Il(3290,"code"),Qx(3291,"color-03"),og()(),Il(3292,"li"),zl(3293,"span",54),Il(3294,"code"),Qx(3295,"color-04"),og()(),Il(3296,"li"),zl(3297,"span",55),Il(3298,"code"),Qx(3299,"color-05"),og()(),Il(3300,"li"),zl(3301,"span",56),Il(3302,"code"),Qx(3303,"color-06"),og()(),Il(3304,"li"),zl(3305,"span",57),Il(3306,"code"),Qx(3307,"color-07"),og()(),Il(3308,"li"),zl(3309,"span",58),Il(3310,"code"),Qx(3311,"color-08"),og()(),Il(3312,"li"),zl(3313,"span",59),Il(3314,"code"),Qx(3315,"color-09"),og()(),Il(3316,"li"),zl(3317,"span",60),Il(3318,"code"),Qx(3319,"color-10"),og()(),Il(3320,"li"),zl(3321,"span",61),Il(3322,"code"),Qx(3323,"color-11"),og()(),Il(3324,"li"),zl(3325,"span",62),Il(3326,"code"),Qx(3327,"color-12"),og()()(),Il(3328,"blockquote")(3329,"p"),Qx(3330,"Tamb\xE9m \xE9 poss\xEDvel utilizar as 35 cores da paleta "),Il(3331,"strong"),Qx(3332,"Caption Tag Colors"),og(),Qx(3333,":"),og()(),Il(3334,"ul")(3335,"li"),zl(3336,"span",63),Il(3337,"code"),Qx(3338,"caption-tag-01"),og(),zl(3339,"span",64),Il(3340,"code"),Qx(3341,"caption-tag-02"),og(),zl(3342,"span",65),Il(3343,"code"),Qx(3344,"caption-tag-03"),og(),zl(3345,"span",66),Il(3346,"code"),Qx(3347,"caption-tag-04"),og(),zl(3348,"span",67),Il(3349,"code"),Qx(3350,"caption-tag-05"),og()(),Il(3351,"li"),zl(3352,"span",68),Il(3353,"code"),Qx(3354,"caption-tag-06"),og(),zl(3355,"span",69),Il(3356,"code"),Qx(3357,"caption-tag-07"),og(),zl(3358,"span",70),Il(3359,"code"),Qx(3360,"caption-tag-08"),og(),zl(3361,"span",71),Il(3362,"code"),Qx(3363,"caption-tag-09"),og(),zl(3364,"span",72),Il(3365,"code"),Qx(3366,"caption-tag-10"),og()(),Il(3367,"li"),zl(3368,"span",73),Il(3369,"code"),Qx(3370,"caption-tag-11"),og(),zl(3371,"span",74),Il(3372,"code"),Qx(3373,"caption-tag-12"),og(),zl(3374,"span",75),Il(3375,"code"),Qx(3376,"caption-tag-13"),og(),zl(3377,"span",76),Il(3378,"code"),Qx(3379,"caption-tag-14"),og(),zl(3380,"span",77),Il(3381,"code"),Qx(3382,"caption-tag-15"),og()(),Il(3383,"li"),zl(3384,"span",78),Il(3385,"code"),Qx(3386,"caption-tag-16"),og(),zl(3387,"span",79),Il(3388,"code"),Qx(3389,"caption-tag-17"),og(),zl(3390,"span",80),Il(3391,"code"),Qx(3392,"caption-tag-18"),og(),zl(3393,"span",81),Il(3394,"code"),Qx(3395,"caption-tag-19"),og(),zl(3396,"span",82),Il(3397,"code"),Qx(3398,"caption-tag-20"),og()(),Il(3399,"li"),zl(3400,"span",83),Il(3401,"code"),Qx(3402,"caption-tag-21"),og(),zl(3403,"span",84),Il(3404,"code"),Qx(3405,"caption-tag-22"),og(),zl(3406,"span",85),Il(3407,"code"),Qx(3408,"caption-tag-23"),og(),zl(3409,"span",86),Il(3410,"code"),Qx(3411,"caption-tag-24"),og(),zl(3412,"span",87),Il(3413,"code"),Qx(3414,"caption-tag-25"),og()(),Il(3415,"li"),zl(3416,"span",88),Il(3417,"code"),Qx(3418,"caption-tag-26"),og(),zl(3419,"span",89),Il(3420,"code"),Qx(3421,"caption-tag-27"),og(),zl(3422,"span",90),Il(3423,"code"),Qx(3424,"caption-tag-28"),og(),zl(3425,"span",91),Il(3426,"code"),Qx(3427,"caption-tag-29"),og(),zl(3428,"span",92),Il(3429,"code"),Qx(3430,"caption-tag-30"),og()(),Il(3431,"li"),zl(3432,"span",93),Il(3433,"code"),Qx(3434,"caption-tag-31"),og(),zl(3435,"span",94),Il(3436,"code"),Qx(3437,"caption-tag-32"),og(),zl(3438,"span",95),Il(3439,"code"),Qx(3440,"caption-tag-33"),og(),zl(3441,"span",96),Il(3442,"code"),Qx(3443,"caption-tag-34"),og(),zl(3444,"span",97),Il(3445,"code"),Qx(3446,"caption-tag-35"),og()()()()(),Il(3447,"tr",17)(3448,"td",18)(3449,"div",19)(3450,"span",20),Qx(3451," disabled"),zl(3452,"br"),og()()(),Il(3453,"td",21)(3454,"code",45),Qx(3455,"Function"),og()(),Il(3456,"td",24)(3457,"em")(3458,"strong"),Qx(3459,"(opcional)"),og()(),Il(3460,"p"),Qx(3461,"Fun\xE7\xE3o que deve retornar um booleano para habilitar ou desabilitar o \xEDcone e sua a\xE7\xE3o."),og()()(),Il(3462,"tr",17)(3463,"td",18)(3464,"div",19)(3465,"span",20),Qx(3466," icon"),zl(3467,"br"),og()()(),Il(3468,"td",21)(3469,"code",31),Qx(3470,"string "),og(),Il(3471,"code",46),Qx(3472," TemplateRef<void>"),og()(),Il(3473,"td",24)(3474,"em")(3475,"strong"),Qx(3476,"(opcional)"),og()(),Il(3477,"p"),Qx(3478,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),Il(3479,"a",26),Qx(3480,"Biblioteca de \xEDcones"),og(),Qx(3481,". conforme exemplo abaixo:"),og(),Il(3482,"pre")(3483,"code"),Qx(3484,`[ { icon: 'an an-plus' } ]
`),og()(),Il(3485,"p"),Qx(3486,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca Font Awesome, da seguinte forma:"),og(),Il(3487,"pre")(3488,"code"),Qx(3489,`[ {  icon: 'fas fa-plus' } ]
`),og()(),Il(3490,"p"),Qx(3491,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),Il(3492,"code"),Qx(3493,"TemplateRef"),og(),Qx(3494,`, conforme exemplo abaixo:
`),Il(3495,"code"),Qx(3496,"component.html"),og(),Qx(3497,":"),og(),Il(3498,"pre")(3499,"code"),Qx(3500,`<ng-template #iconTemplateAdd>
 <span class="material-icons" style="font-size: inherit;">add</span>
</ng-template>

<po-table [p-column]="myProperty"></po-table>
`),og()(),Il(3501,"p")(3502,"code"),Qx(3503,"component.ts"),og(),Qx(3504,":"),og(),Il(3505,"pre")(3506,"code"),Qx(3507,`@ViewChild('iconTemplateAdd', { static: true }) iconTemplateAdd: TemplateRef<void>;

myProperty = [
 { property: 'columnIcon', label: 'Icons', type: 'icon', icons: [
  { value: 'plus', icon: this.iconTemplateAdd },
 ]}
];
`),og()(),Il(3508,"blockquote")(3509,"p"),Qx(3510,"Caso esta propriedade n\xE3o seja definida, a mesma receber\xE1 o valor contido em "),Il(3511,"code"),Qx(3512,"value"),og(),Qx(3513,"."),og()()()(),Il(3514,"tr",17)(3515,"td",18)(3516,"div",19)(3517,"span",20),Qx(3518," tooltip"),zl(3519,"br"),og()()(),Il(3520,"td",21)(3521,"code",31),Qx(3522,"string"),og()(),Il(3523,"td",24)(3524,"em")(3525,"strong"),Qx(3526,"(opcional)"),og()(),Il(3527,"p"),Qx(3528,"Define um texto de ajuda que ser\xE1 exibido ao passar o "),Il(3529,"em"),Qx(3530,"mouse"),og(),Qx(3531," em cima do \xEDcone."),og()()(),Il(3532,"tr",17)(3533,"td",18)(3534,"div",19)(3535,"span",20),Qx(3536," value"),zl(3537,"br"),og()()(),Il(3538,"td",21)(3539,"code",31),Qx(3540,"string"),og()(),Il(3541,"td",24)(3542,"p"),Qx(3543,"Define o valor do \xEDcone que ser\xE1 exibido."),og()()()(),Il(3544,"h4",44)(3545,"code",5),Qx(3546,"PoTableColumnLabel"),og()(),Il(3547,"div",2)(3548,"p"),Qx(3549,"Interface para configura\xE7\xE3o das colunas de labels do "),Il(3550,"code"),Qx(3551,"po-table"),og(),Qx(3552,"."),og()(),Il(3553,"h4",13),Qx(3554,"Propriedades"),og(),Il(3555,"table",14)(3556,"tr",15)(3557,"th",16),Qx(3558,"Nome"),og(),Il(3559,"th",16),Qx(3560,"Tipo"),og(),Il(3561,"th",16),Qx(3562,"Descri\xE7\xE3o"),og()(),Il(3563,"tr",17)(3564,"td",18)(3565,"div",19)(3566,"span",20),Qx(3567," color"),zl(3568,"br"),og()()(),Il(3569,"td",21)(3570,"code",31),Qx(3571,"string"),og()(),Il(3572,"td",24)(3573,"em")(3574,"strong"),Qx(3575,"(opcional)"),og()(),Il(3576,"p"),Qx(3577,"Define a cor do label."),og(),Il(3578,"p"),Qx(3579,"Valores v\xE1lidos:"),og(),Il(3580,"ul")(3581,"li"),zl(3582,"span",51),Il(3583,"code"),Qx(3584,"color-01"),og()(),Il(3585,"li"),zl(3586,"span",52),Il(3587,"code"),Qx(3588,"color-02"),og()(),Il(3589,"li"),zl(3590,"span",53),Il(3591,"code"),Qx(3592,"color-03"),og()(),Il(3593,"li"),zl(3594,"span",54),Il(3595,"code"),Qx(3596,"color-04"),og()(),Il(3597,"li"),zl(3598,"span",55),Il(3599,"code"),Qx(3600,"color-05"),og()(),Il(3601,"li"),zl(3602,"span",56),Il(3603,"code"),Qx(3604,"color-06"),og()(),Il(3605,"li"),zl(3606,"span",57),Il(3607,"code"),Qx(3608,"color-07"),og()(),Il(3609,"li"),zl(3610,"span",58),Il(3611,"code"),Qx(3612,"color-08"),og()(),Il(3613,"li"),zl(3614,"span",59),Il(3615,"code"),Qx(3616,"color-09"),og()(),Il(3617,"li"),zl(3618,"span",60),Il(3619,"code"),Qx(3620,"color-10"),og()(),Il(3621,"li"),zl(3622,"span",61),Il(3623,"code"),Qx(3624,"color-11"),og()(),Il(3625,"li"),zl(3626,"span",62),Il(3627,"code"),Qx(3628,"color-12"),og()()(),Il(3629,"blockquote")(3630,"p"),Qx(3631,"Tamb\xE9m \xE9 poss\xEDvel utilizar as 35 cores da paleta "),Il(3632,"strong"),Qx(3633,"Caption Tag Colors"),og(),Qx(3634,":"),og()(),Il(3635,"ul")(3636,"li"),zl(3637,"span",63),Il(3638,"code"),Qx(3639,"caption-tag-01"),og(),zl(3640,"span",64),Il(3641,"code"),Qx(3642,"caption-tag-02"),og(),zl(3643,"span",65),Il(3644,"code"),Qx(3645,"caption-tag-03"),og(),zl(3646,"span",66),Il(3647,"code"),Qx(3648,"caption-tag-04"),og(),zl(3649,"span",67),Il(3650,"code"),Qx(3651,"caption-tag-05"),og()(),Il(3652,"li"),zl(3653,"span",68),Il(3654,"code"),Qx(3655,"caption-tag-06"),og(),zl(3656,"span",69),Il(3657,"code"),Qx(3658,"caption-tag-07"),og(),zl(3659,"span",70),Il(3660,"code"),Qx(3661,"caption-tag-08"),og(),zl(3662,"span",71),Il(3663,"code"),Qx(3664,"caption-tag-09"),og(),zl(3665,"span",72),Il(3666,"code"),Qx(3667,"caption-tag-10"),og()(),Il(3668,"li"),zl(3669,"span",73),Il(3670,"code"),Qx(3671,"caption-tag-11"),og(),zl(3672,"span",74),Il(3673,"code"),Qx(3674,"caption-tag-12"),og(),zl(3675,"span",75),Il(3676,"code"),Qx(3677,"caption-tag-13"),og(),zl(3678,"span",76),Il(3679,"code"),Qx(3680,"caption-tag-14"),og(),zl(3681,"span",77),Il(3682,"code"),Qx(3683,"caption-tag-15"),og()(),Il(3684,"li"),zl(3685,"span",78),Il(3686,"code"),Qx(3687,"caption-tag-16"),og(),zl(3688,"span",79),Il(3689,"code"),Qx(3690,"caption-tag-17"),og(),zl(3691,"span",80),Il(3692,"code"),Qx(3693,"caption-tag-18"),og(),zl(3694,"span",81),Il(3695,"code"),Qx(3696,"caption-tag-19"),og(),zl(3697,"span",82),Il(3698,"code"),Qx(3699,"caption-tag-20"),og()(),Il(3700,"li"),zl(3701,"span",83),Il(3702,"code"),Qx(3703,"caption-tag-21"),og(),zl(3704,"span",84),Il(3705,"code"),Qx(3706,"caption-tag-22"),og(),zl(3707,"span",85),Il(3708,"code"),Qx(3709,"caption-tag-23"),og(),zl(3710,"span",86),Il(3711,"code"),Qx(3712,"caption-tag-24"),og(),zl(3713,"span",87),Il(3714,"code"),Qx(3715,"caption-tag-25"),og()(),Il(3716,"li"),zl(3717,"span",88),Il(3718,"code"),Qx(3719,"caption-tag-26"),og(),zl(3720,"span",89),Il(3721,"code"),Qx(3722,"caption-tag-27"),og(),zl(3723,"span",90),Il(3724,"code"),Qx(3725,"caption-tag-28"),og(),zl(3726,"span",91),Il(3727,"code"),Qx(3728,"caption-tag-29"),og(),zl(3729,"span",92),Il(3730,"code"),Qx(3731,"caption-tag-30"),og()(),Il(3732,"li"),zl(3733,"span",93),Il(3734,"code"),Qx(3735,"caption-tag-31"),og(),zl(3736,"span",94),Il(3737,"code"),Qx(3738,"caption-tag-32"),og(),zl(3739,"span",95),Il(3740,"code"),Qx(3741,"caption-tag-33"),og(),zl(3742,"span",96),Il(3743,"code"),Qx(3744,"caption-tag-34"),og(),zl(3745,"span",97),Il(3746,"code"),Qx(3747,"caption-tag-35"),og()()(),Il(3748,"p"),Qx(3749,"Exemplo de uso:"),og(),Il(3750,"pre")(3751,"code"),Qx(3752,`{ property: 'status', type: 'label', labels: [
  { value: 'ativo', color: 'caption-tag-13', label: 'Ativo' },
  { value: 'pendente', color: 'caption-tag-08', label: 'Pendente' }
]}
`),og()()()(),Il(3753,"tr",17)(3754,"td",18)(3755,"div",19)(3756,"span",20),Qx(3757," icon"),zl(3758,"br"),og()()(),Il(3759,"td",21)(3760,"code",22),Qx(3761,"boolean "),og(),Il(3762,"code",31),Qx(3763," string "),og(),Il(3764,"code",46),Qx(3765," TemplateRef<void>"),og()(),Il(3766,"td",24)(3767,"em")(3768,"strong"),Qx(3769,"(opcional)"),og()(),Il(3770,"p"),Qx(3771,"Define ou ativa um \xEDcone que ser\xE1 exibido ao lado do valor da "),Il(3772,"em"),Qx(3773,"tag"),og(),Qx(3774,"."),og(),Il(3775,"p"),Qx(3776,"Quando "),Il(3777,"code"),Qx(3778,"p-type"),og(),Qx(3779," estiver definida, basta informar um valor igual a "),Il(3780,"code"),Qx(3781,"true"),og(),Qx(3782," para que o \xEDcone seja exibido conforme descri\xE7\xF5es abaixo:"),og(),Il(3783,"ul")(3784,"li"),zl(3785,"span",105),Qx(3786," - "),Il(3787,"code"),Qx(3788,"success"),og()(),Il(3789,"li"),zl(3790,"span",106),Qx(3791," - "),Il(3792,"code"),Qx(3793,"warning"),og()(),Il(3794,"li"),zl(3795,"span",107),Qx(3796," - "),Il(3797,"code"),Qx(3798,"danger"),og()(),Il(3799,"li"),zl(3800,"span",108),Qx(3801," - "),Il(3802,"code"),Qx(3803,"info"),og()()(),Il(3804,"p"),Qx(3805,"Tamb\xE9m \xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),Il(3806,"a",26),Qx(3807,"Biblioteca de \xEDcones"),og(),Qx(3808,". conforme exemplo abaixo:"),og(),Il(3809,"pre")(3810,"code"),Qx(3811,`<po-tag p-icon="an an-user" p-value="PO Tag"></po-tag>
`),og()(),Il(3812,"p"),Qx(3813,"como tamb\xE9m utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),Il(3814,"em"),Qx(3815,"Font Awesome"),og(),Qx(3816,", da seguinte forma:"),og(),Il(3817,"pre")(3818,"code"),Qx(3819,`<po-tag p-icon="fa fa-podcast" p-value="PO Tag"></po-button>
`),og()(),Il(3820,"p"),Qx(3821,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),Il(3822,"code"),Qx(3823,"TemplateRef"),og(),Qx(3824,", conforme exemplo abaixo:"),og(),Il(3825,"pre")(3826,"code"),Qx(3827,`<po-tag [p-icon]="template" p-value="Tag template ionic"></po-button>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),og()(),Il(3828,"blockquote")(3829,"p"),Qx(3830,"Para o \xEDcone enquadrar corretamente, deve-se utilizar "),Il(3831,"code"),Qx(3832,"font-size: inherit"),og(),Qx(3833," caso o \xEDcone utilizado n\xE3o aplique-o."),og()()()(),Il(3834,"tr",17)(3835,"td",18)(3836,"div",19)(3837,"span",20),Qx(3838," label"),zl(3839,"br"),og()()(),Il(3840,"td",21)(3841,"code",31),Qx(3842,"string"),og()(),Il(3843,"td",24)(3844,"p"),Qx(3845,"Texto que ser\xE1 exibido na coluna."),og()()(),Il(3846,"tr",17)(3847,"td",18)(3848,"div",19)(3849,"span",20),Qx(3850," textColor"),zl(3851,"br"),og()()(),Il(3852,"td",21)(3853,"code",31),Qx(3854,"string"),og()(),Il(3855,"td",24)(3856,"em")(3857,"strong"),Qx(3858,"(opcional)"),og()(),Il(3859,"p"),Qx(3860,"Determina a cor do texto da tag. As maneiras de customizar as cores s\xE3o:"),og(),Il(3861,"ul")(3862,"li")(3863,"p"),Qx(3864,"Hexadeximal, por exemplo "),Il(3865,"code"),Qx(3866,"#c64840"),og(),Qx(3867,";"),og()(),Il(3868,"li")(3869,"p"),Qx(3870,"RGB, como "),Il(3871,"code"),Qx(3872,"rgb(0, 0, 165)"),og(),Qx(3873,";"),og()(),Il(3874,"li")(3875,"p"),Qx(3876,"O nome da cor, por exemplo "),Il(3877,"code"),Qx(3878,"blue"),og(),Qx(3879,";"),og()(),Il(3880,"li")(3881,"p"),Qx(3882,`Usando uma das cores do tema do PO:
Valores v\xE1lidos:`),og(),Il(3883,"ul")(3884,"li"),zl(3885,"span",51),Il(3886,"code"),Qx(3887,"color-01"),og()(),Il(3888,"li"),zl(3889,"span",52),Il(3890,"code"),Qx(3891,"color-02"),og()(),Il(3892,"li"),zl(3893,"span",53),Il(3894,"code"),Qx(3895,"color-03"),og()(),Il(3896,"li"),zl(3897,"span",54),Il(3898,"code"),Qx(3899,"color-04"),og()(),Il(3900,"li"),zl(3901,"span",55),Il(3902,"code"),Qx(3903,"color-05"),og()(),Il(3904,"li"),zl(3905,"span",56),Il(3906,"code"),Qx(3907,"color-06"),og()(),Il(3908,"li"),zl(3909,"span",57),Il(3910,"code"),Qx(3911,"color-07"),og()(),Il(3912,"li"),zl(3913,"span",58),Il(3914,"code"),Qx(3915,"color-08"),og()(),Il(3916,"li"),zl(3917,"span",59),Il(3918,"code"),Qx(3919,"color-09"),og()(),Il(3920,"li"),zl(3921,"span",60),Il(3922,"code"),Qx(3923,"color-10"),og()(),Il(3924,"li"),zl(3925,"span",61),Il(3926,"code"),Qx(3927,"color-11"),og()(),Il(3928,"li"),zl(3929,"span",62),Il(3930,"code"),Qx(3931,"color-12"),og()()()(),Il(3932,"li")(3933,"p"),Qx(3934,"Para uma melhor acessibilidade no uso do componente \xE9 recomend\xE1vel utilizar cores com um melhor contraste em rela\xE7\xE3o ao background."),og()()(),Il(3935,"blockquote")(3936,"p")(3937,"strong"),Qx(3938,"Aten\xE7\xE3o:"),og(),Qx(3939," A propriedade "),Il(3940,"code"),Qx(3941,"p-type"),og(),Qx(3942," sobrep\xF5e esta defini\xE7\xE3o."),og()(),Il(3943,"blockquote")(3944,"p")(3945,"strong"),Qx(3946,"Aten\xE7\xE3o:"),og(),Qx(3947," As cores da paleta "),Il(3948,"strong"),Qx(3949,"Caption Tag Colors"),og(),Qx(3950," ("),Il(3951,"code"),Qx(3952,"caption-tag-01"),og(),Qx(3953," a "),Il(3954,"code"),Qx(3955,"caption-tag-35"),og(),Qx(3956,`) n\xE3o s\xE3o aceitas nesta propriedade,
pois possuem cor de texto fixa definida via token CSS.`),og()()()(),Il(3957,"tr",17)(3958,"td",18)(3959,"div",19)(3960,"span",20),Qx(3961," tooltip"),zl(3962,"br"),og()()(),Il(3963,"td",21)(3964,"code",31),Qx(3965,"string"),og()(),Il(3966,"td",24)(3967,"em")(3968,"strong"),Qx(3969,"(opcional)"),og()(),Il(3970,"p"),Qx(3971,"Define um texto de ajuda que ser\xE1 exibido ao passar o "),Il(3972,"em"),Qx(3973,"mouse"),og(),Qx(3974," em cima do "),Il(3975,"em"),Qx(3976,"label"),og(),Qx(3977,"."),og(),Il(3978,"blockquote")(3979,"p"),Qx(3980,`Caso o conte\xFAdo da c\xE9lula exceder a largura da coluna,
\xE9 ignorado o valor atribuido ao tooltip e ser\xE1 exibido justamente o conte\xFAdo da c\xE9lula.`),og()()()(),Il(3981,"tr",17)(3982,"td",18)(3983,"div",19)(3984,"span",20),Qx(3985," type"),zl(3986,"br"),og()()(),Il(3987,"td",21)(3988,"code",109),Qx(3989,"PoTagType"),og()(),Il(3990,"td",24)(3991,"em")(3992,"strong"),Qx(3993,"(opcional)"),og()(),Il(3994,"p"),Qx(3995,"Define o tipo da "),Il(3996,"em"),Qx(3997,"tag"),og(),Qx(3998,"."),og(),Il(3999,"p"),Qx(4e3,"Valores v\xE1lidos:"),og(),Il(4001,"ul")(4002,"li")(4003,"code"),Qx(4004,"success"),og(),Qx(4005,": cor verde utilizada para simbolizar sucesso ou \xEAxito."),og(),Il(4006,"li")(4007,"code"),Qx(4008,"warning"),og(),Qx(4009,": cor amarela que representa aviso ou advert\xEAncia."),og(),Il(4010,"li")(4011,"code"),Qx(4012,"danger"),og(),Qx(4013,": cor vermelha para erro ou aviso cr\xEDtico."),og(),Il(4014,"li")(4015,"code"),Qx(4016,"info"),og(),Qx(4017,": cor cinza escuro que caracteriza conte\xFAdo informativo."),og()(),Il(4018,"blockquote")(4019,"p"),Qx(4020,"Quando esta propriedade for definida, ir\xE1 sobrepor a defini\xE7\xE3o de "),Il(4021,"code"),Qx(4022,"p-color"),og(),Qx(4023," e "),Il(4024,"code"),Qx(4025,"p-icon"),og(),Qx(4026," somente ser\xE1 exibido caso seja "),Il(4027,"code"),Qx(4028,"true"),og(),Qx(4029,"."),og()()()(),Il(4030,"tr",17)(4031,"td",18)(4032,"div",19)(4033,"span",20),Qx(4034," value"),zl(4035,"br"),og()()(),Il(4036,"td",21)(4037,"code",31),Qx(4038,"string "),og(),Il(4039,"code",35),Qx(4040," number"),og()(),Il(4041,"td",24)(4042,"p"),Qx(4043,"Valor que ser\xE1 usado como refer\xEAncia para exibi\xE7\xE3o do conte\xFAdo na coluna."),og()()()(),Il(4044,"h4",44)(4045,"code",5),Qx(4046,"PoTableDetailColumn"),og()(),Il(4047,"div",2)(4048,"p"),Qx(4049,"Interface para configura\xE7\xE3o das colunas do "),Il(4050,"code"),Qx(4051,"po-table-detail"),og(),Qx(4052,"."),og()(),Il(4053,"h4",13),Qx(4054,"Propriedades"),og(),Il(4055,"table",14)(4056,"tr",15)(4057,"th",16),Qx(4058,"Nome"),og(),Il(4059,"th",16),Qx(4060,"Tipo"),og(),Il(4061,"th",16),Qx(4062,"Descri\xE7\xE3o"),og()(),Il(4063,"tr",17)(4064,"td",18)(4065,"div",19)(4066,"span",20),Qx(4067," format"),zl(4068,"br"),og()()(),Il(4069,"td",21)(4070,"code",31),Qx(4071,"string"),og()(),Il(4072,"td",24)(4073,"em")(4074,"strong"),Qx(4075,"(opcional)"),og()(),Il(4076,"p"),Qx(4077,"Formato de exibi\xE7\xE3o do valor da coluna:"),og(),Il(4078,"ul")(4079,"li")(4080,"p"),Qx(4081,"Formato para moeda (currency). Exemplos: 'BRL', 'USD'."),og()(),Il(4082,"li")(4083,"p"),Qx(4084,`Formato para data (date): aceita apenas os caracteres de dia(dd), m\xEAs(MM) e ano (yyyy ou yy),
caso n\xE3o seja informado um formato o mesmo ser\xE1 'dd/MM/yyyy'. Exemplos: 'dd/MM/yyyy', 'dd-MM-yy', 'mm/dd/yyyy'.`),og()(),Il(4085,"li")(4086,"p"),Qx(4087,`Formato para hor\xE1rio (time): aceita apenas os caracteres de hora(HH), minutos(mm), segundos(ss) e milisegundos(f-ffffff), os milisegundos s\xE3o opcionais, caso n\xE3o seja informado um formato o mesmo ser\xE1
'HH:mm:ss'. Exemplos: 'HH:mm', 'HH:mm:ss.ffffff', 'HH:mm:ss.ff', 'mm:ss.fff'.`),og()(),Il(4088,"li")(4089,"p"),Qx(4090,"Formato para n\xFAmeros (number): aceita um valor seguindo o padr\xE3o "),Il(4091,"a",110)(4092,"strong"),Qx(4093,"DecimalPipe"),og()(),Qx(4094," para formata\xE7\xE3o, e caso n\xE3o seja informado, o n\xFAmero ser\xE1 exibido na sua forma original. Exemplo:"),og(),Il(4095,"ul")(4096,"li"),Qx(4097,"Valor de entrada: "),Il(4098,"code"),Qx(4099,"50"),og(),Qx(4100," e valor para formata\xE7\xE3o: "),Il(4101,"code"),Qx(4102,"'1.2-5'"),og(),Qx(4103," o resultado ser\xE1: "),Il(4104,"code"),Qx(4105,"50.00"),og()()()()()()(),Il(4106,"tr",17)(4107,"td",18)(4108,"div",19)(4109,"span",20),Qx(4110," label"),zl(4111,"br"),og()()(),Il(4112,"td",21)(4113,"code",31),Qx(4114,"string"),og()(),Il(4115,"td",24)(4116,"em")(4117,"strong"),Qx(4118,"(opcional)"),og()(),Il(4119,"p"),Qx(4120,"Texto para t\xEDtulo da coluna."),og()()(),Il(4121,"tr",17)(4122,"td",18)(4123,"div",19)(4124,"span",20),Qx(4125," property"),zl(4126,"br"),og()()(),Il(4127,"td",21)(4128,"code",31),Qx(4129,"string"),og()(),Il(4130,"td",24)(4131,"em")(4132,"strong"),Qx(4133,"(opcional)"),og()(),Il(4134,"p"),Qx(4135,"Nome identificador da coluna."),og()()(),Il(4136,"tr",17)(4137,"td",18)(4138,"div",19)(4139,"span",20),Qx(4140," type"),zl(4141,"br"),og()()(),Il(4142,"td",21)(4143,"code",31),Qx(4144,"string"),og()(),Il(4145,"td",24)(4146,"em")(4147,"strong"),Qx(4148,"(opcional)"),og()(),Il(4149,"p"),Qx(4150,"Tipo da coluna."),og(),Il(4151,"p"),Qx(4152,"Valores v\xE1lidos:"),og(),Il(4153,"ul")(4154,"li")(4155,"p")(4156,"code"),Qx(4157,"currency"),og(),Qx(4158,": valores monet\xE1rios."),og()(),Il(4159,"li")(4160,"p")(4161,"code"),Qx(4162,"date"),og(),Qx(4163,": valor de datas."),og(),Il(4164,"ul")(4165,"li"),Qx(4166,"Aceita os tipos "),Il(4167,"em"),Qx(4168,"string"),og(),Qx(4169," e "),Il(4170,"em"),Qx(4171,"Date"),og(),Qx(4172,` padr\xE3o do Javascript,
por exemplo: `),Il(4173,"code"),Qx(4174,"'2017-11-28'"),og(),Qx(4175," ou "),Il(4176,"code"),Qx(4177,"new Date(2017, 10, 28)"),og(),Qx(4178,"."),og()()(),Il(4179,"li")(4180,"p")(4181,"code"),Qx(4182,"time"),og(),Qx(4183,": valor de hor\xE1rio."),og()(),Il(4184,"li")(4185,"p")(4186,"code"),Qx(4187,"number"),og(),Qx(4188,": valores num\xE9ricos."),og()(),Il(4189,"li")(4190,"p")(4191,"code"),Qx(4192,"dateTime"),og(),Qx(4193,": valor de data com hor\xE1rio."),og(),Il(4194,"ul")(4195,"li"),Qx(4196,"Aceita o tipo "),Il(4197,"em"),Qx(4198,"string"),og(),Qx(4199," no formato "),Il(4200,"strong"),Qx(4201,"ISO-8601"),og(),Qx(4202," extendido "),Il(4203,"strong"),Qx(4204,"'yyyy-mm-ddThh:mm:ss+|-hh:mm'"),og(),Qx(4205,`
e o tipo `),Il(4206,"em"),Qx(4207,"Date"),og(),Qx(4208," padr\xE3o do Javascript, por exemplo: "),Il(4209,"code"),Qx(4210,"'2017-11-28T00:00:00-02:00'"),og(),Qx(4211," ou "),Il(4212,"code"),Qx(4213,"new Date(2017, 10, 28)"),og(),Qx(4214,"."),og(),Il(4215,"li"),Qx(4216,"Aceita o tipo "),Il(4217,"em"),Qx(4218,"string"),og(),Qx(4219," nos formatos "),Il(4220,"strong"),Qx(4221,"'HH:mm:ss'"),og(),Qx(4222," ou "),Il(4223,"strong"),Qx(4224,"'HH:mm:ss.ffffff'"),og(),Qx(4225,", por exemplo: "),Il(4226,"code"),Qx(4227,"'23:12:45'"),og(),Qx(4228,"."),og()()()()()()(),Il(4229,"h4",44)(4230,"code",5),Qx(4231,"PoTableDetail"),og()(),Il(4232,"div",2)(4233,"p"),Qx(4234,"Interface para configura\xE7\xE3o do "),Il(4235,"em"),Qx(4236,"detail"),og(),Qx(4237," do componente "),Il(4238,"code"),Qx(4239,"po-table"),og(),Qx(4240,"."),og()(),Il(4241,"h4",13),Qx(4242,"Propriedades"),og(),Il(4243,"table",14)(4244,"tr",15)(4245,"th",16),Qx(4246,"Nome"),og(),Il(4247,"th",16),Qx(4248,"Tipo"),og(),Il(4249,"th",16),Qx(4250,"Descri\xE7\xE3o"),og()(),Il(4251,"tr",17)(4252,"td",18)(4253,"div",19)(4254,"span",20),Qx(4255," columns"),zl(4256,"br"),og()()(),Il(4257,"td",21)(4258,"code",111),Qx(4259,"Array<PoTableDetailColumn>"),og()(),Il(4260,"td",24)(4261,"p"),Qx(4262,"Define uma lista do tipo "),Il(4263,"code"),Qx(4264,"PoTableDetailColumn"),og(),Qx(4265," para as colunas do objet "),Il(4266,"em"),Qx(4267,"detail"),og(),Qx(4268,". Por exemplo:"),og(),Il(4269,"pre")(4270,"code"),Qx(4271,`[
 { property: 'miles', label: 'Miles', type: 'number', format: '1.0-5' },
 { property: 'departure', label: 'Departure time', type: 'date', format: 'dd/MM/yyyy' }
]
`),og()()()(),Il(4272,"tr",17)(4273,"td",18)(4274,"div",19)(4275,"span",20),Qx(4276," hideSelect"),zl(4277,"br"),og()()(),Il(4278,"td",21)(4279,"code",22),Qx(4280,"boolean"),og()(),Il(4281,"td",24)(4282,"em")(4283,"strong"),Qx(4284,"(opcional)"),og()(),Il(4285,"p"),Qx(4286,"Define se o checkbox de sele\xE7\xE3o do detail ser\xE1 exibido. Valor padr\xE3o 'false'."),og()()(),Il(4287,"tr",17)(4288,"td",18)(4289,"div",19)(4290,"span",20),Qx(4291," typeHeader"),zl(4292,"br"),og()()(),Il(4293,"td",21)(4294,"code",31),Qx(4295,"string"),og()(),Il(4296,"td",24)(4297,"em")(4298,"strong"),Qx(4299,"(opcional)"),og()(),Il(4300,"p"),Qx(4301,"Define o tipo de cabe\xE7alho para o conte\xFAdo do "),Il(4302,"em"),Qx(4303,"detail"),og(),Qx(4304," ."),og(),Il(4305,"p"),Qx(4306,"Valores v\xE1lidos:"),og(),Il(4307,"ul")(4308,"li")(4309,"code"),Qx(4310,"inline"),og(),Qx(4311,": Atribui o cabe\xE7alho na mesma linha do "),Il(4312,"em"),Qx(4313,"detail"),og(),Qx(4314,"."),og(),Il(4315,"li")(4316,"code"),Qx(4317,"top"),og(),Qx(4318,": Atribui o cabe\xE7alho acima do "),Il(4319,"em"),Qx(4320,"detail"),og(),Qx(4321,", id\xEAntico ao "),Il(4322,"code"),Qx(4323,"po-table"),og(),Qx(4324,"."),og(),Il(4325,"li")(4326,"code"),Qx(4327,"none"),og(),Qx(4328,": Remove o cabe\xE7alho do "),Il(4329,"em"),Qx(4330,"detail"),og(),Qx(4331,"."),og()()()()(),Il(4332,"h4",44)(4333,"code",5),Qx(4334,"PoTableSubtitleColumn"),og()(),Il(4335,"div",2)(4336,"p"),Qx(4337,"Interface para configura\xE7\xE3o das colunas de legenda do Po-Table."),og()(),Il(4338,"h4",13),Qx(4339,"Propriedades"),og(),Il(4340,"table",14)(4341,"tr",15)(4342,"th",16),Qx(4343,"Nome"),og(),Il(4344,"th",16),Qx(4345,"Tipo"),og(),Il(4346,"th",16),Qx(4347,"Descri\xE7\xE3o"),og()(),Il(4348,"tr",17)(4349,"td",18)(4350,"div",19)(4351,"span",20),Qx(4352," color"),zl(4353,"br"),og()()(),Il(4354,"td",21)(4355,"code",31),Qx(4356,"string"),og()(),Il(4357,"td",24)(4358,"em")(4359,"strong"),Qx(4360,"(opcional)"),og()(),Il(4361,"p"),Qx(4362,"Define a cor do "),Il(4363,"em"),Qx(4364,"status"),og(),Qx(4365,"."),og(),Il(4366,"p"),Qx(4367,"Valores v\xE1lidos:"),og(),Il(4368,"ul")(4369,"li"),zl(4370,"span",51),Il(4371,"code"),Qx(4372,"color-01"),og()(),Il(4373,"li"),zl(4374,"span",52),Il(4375,"code"),Qx(4376,"color-02"),og()(),Il(4377,"li"),zl(4378,"span",53),Il(4379,"code"),Qx(4380,"color-03"),og()(),Il(4381,"li"),zl(4382,"span",54),Il(4383,"code"),Qx(4384,"color-04"),og()(),Il(4385,"li"),zl(4386,"span",55),Il(4387,"code"),Qx(4388,"color-05"),og()(),Il(4389,"li"),zl(4390,"span",56),Il(4391,"code"),Qx(4392,"color-06"),og()(),Il(4393,"li"),zl(4394,"span",57),Il(4395,"code"),Qx(4396,"color-07"),og()(),Il(4397,"li"),zl(4398,"span",58),Il(4399,"code"),Qx(4400,"color-08"),og()(),Il(4401,"li"),zl(4402,"span",59),Il(4403,"code"),Qx(4404,"color-09"),og()(),Il(4405,"li"),zl(4406,"span",60),Il(4407,"code"),Qx(4408,"color-10"),og()(),Il(4409,"li"),zl(4410,"span",61),Il(4411,"code"),Qx(4412,"color-11"),og()(),Il(4413,"li"),zl(4414,"span",62),Il(4415,"code"),Qx(4416,"color-12"),og()()(),Il(4417,"blockquote")(4418,"p"),Qx(4419,"Tamb\xE9m \xE9 poss\xEDvel utilizar as 35 cores da paleta "),Il(4420,"strong"),Qx(4421,"Caption Tag Colors"),og(),Qx(4422,":"),og()(),Il(4423,"ul")(4424,"li"),zl(4425,"span",63),Il(4426,"code"),Qx(4427,"caption-tag-01"),og(),zl(4428,"span",64),Il(4429,"code"),Qx(4430,"caption-tag-02"),og(),zl(4431,"span",65),Il(4432,"code"),Qx(4433,"caption-tag-03"),og(),zl(4434,"span",66),Il(4435,"code"),Qx(4436,"caption-tag-04"),og(),zl(4437,"span",67),Il(4438,"code"),Qx(4439,"caption-tag-05"),og()(),Il(4440,"li"),zl(4441,"span",68),Il(4442,"code"),Qx(4443,"caption-tag-06"),og(),zl(4444,"span",69),Il(4445,"code"),Qx(4446,"caption-tag-07"),og(),zl(4447,"span",70),Il(4448,"code"),Qx(4449,"caption-tag-08"),og(),zl(4450,"span",71),Il(4451,"code"),Qx(4452,"caption-tag-09"),og(),zl(4453,"span",72),Il(4454,"code"),Qx(4455,"caption-tag-10"),og()(),Il(4456,"li"),zl(4457,"span",73),Il(4458,"code"),Qx(4459,"caption-tag-11"),og(),zl(4460,"span",74),Il(4461,"code"),Qx(4462,"caption-tag-12"),og(),zl(4463,"span",75),Il(4464,"code"),Qx(4465,"caption-tag-13"),og(),zl(4466,"span",76),Il(4467,"code"),Qx(4468,"caption-tag-14"),og(),zl(4469,"span",77),Il(4470,"code"),Qx(4471,"caption-tag-15"),og()(),Il(4472,"li"),zl(4473,"span",78),Il(4474,"code"),Qx(4475,"caption-tag-16"),og(),zl(4476,"span",79),Il(4477,"code"),Qx(4478,"caption-tag-17"),og(),zl(4479,"span",80),Il(4480,"code"),Qx(4481,"caption-tag-18"),og(),zl(4482,"span",81),Il(4483,"code"),Qx(4484,"caption-tag-19"),og(),zl(4485,"span",82),Il(4486,"code"),Qx(4487,"caption-tag-20"),og()(),Il(4488,"li"),zl(4489,"span",83),Il(4490,"code"),Qx(4491,"caption-tag-21"),og(),zl(4492,"span",84),Il(4493,"code"),Qx(4494,"caption-tag-22"),og(),zl(4495,"span",85),Il(4496,"code"),Qx(4497,"caption-tag-23"),og(),zl(4498,"span",86),Il(4499,"code"),Qx(4500,"caption-tag-24"),og(),zl(4501,"span",87),Il(4502,"code"),Qx(4503,"caption-tag-25"),og()(),Il(4504,"li"),zl(4505,"span",88),Il(4506,"code"),Qx(4507,"caption-tag-26"),og(),zl(4508,"span",89),Il(4509,"code"),Qx(4510,"caption-tag-27"),og(),zl(4511,"span",90),Il(4512,"code"),Qx(4513,"caption-tag-28"),og(),zl(4514,"span",91),Il(4515,"code"),Qx(4516,"caption-tag-29"),og(),zl(4517,"span",92),Il(4518,"code"),Qx(4519,"caption-tag-30"),og()(),Il(4520,"li"),zl(4521,"span",93),Il(4522,"code"),Qx(4523,"caption-tag-31"),og(),zl(4524,"span",94),Il(4525,"code"),Qx(4526,"caption-tag-32"),og(),zl(4527,"span",95),Il(4528,"code"),Qx(4529,"caption-tag-33"),og(),zl(4530,"span",96),Il(4531,"code"),Qx(4532,"caption-tag-34"),og(),zl(4533,"span",97),Il(4534,"code"),Qx(4535,"caption-tag-35"),og()()()()(),Il(4536,"tr",17)(4537,"td",18)(4538,"div",19)(4539,"span",20),Qx(4540," content"),zl(4541,"br"),og()()(),Il(4542,"td",21)(4543,"code",31),Qx(4544,"string"),og()(),Il(4545,"td",24)(4546,"p"),Qx(4547,"Conte\xFAdo que ser\xE1 exibido na coluna da tabela."),og()()(),Il(4548,"tr",17)(4549,"td",18)(4550,"div",19)(4551,"span",20),Qx(4552," label"),zl(4553,"br"),og()()(),Il(4554,"td",21)(4555,"code",31),Qx(4556,"string"),og()(),Il(4557,"td",24)(4558,"p"),Qx(4559,"Texto que ser\xE1 exibido no rodap\xE9 da tabela como legenda."),og()()(),Il(4560,"tr",17)(4561,"td",18)(4562,"div",19)(4563,"span",20),Qx(4564," value"),zl(4565,"br"),og()()(),Il(4566,"td",21)(4567,"code",31),Qx(4568,"string "),og(),Il(4569,"code",35),Qx(4570," number"),og()(),Il(4571,"td",24)(4572,"p"),Qx(4573,"Valor que ser\xE1 usado como refer\xEAncia para exibi\xE7\xE3o do conte\xFAdo na coluna."),og()()()(),Il(4574,"h3"),Qx(4575,"Enums"),og(),Il(4576,"h4",4)(4577,"code",5),Qx(4578,"PoTableColumnSortType"),og()(),Il(4579,"div",2)(4580,"p"),Qx(4581,"Tipos de ordena\xE7\xE3o das colunas da tabela."),og()(),Il(4582,"h4",13),Qx(4583,"Propriedades"),og(),Il(4584,"table",14)(4585,"tr",15)(4586,"th",16),Qx(4587,"Nome"),og(),Il(4588,"th",16),Qx(4589,"Descri\xE7\xE3o"),og()(),Il(4590,"tr",17)(4591,"td",18)(4592,"div",19)(4593,"span",20),Qx(4594," Ascending"),zl(4595,"br"),og()()(),Il(4596,"td",24)(4597,"p"),Qx(4598,"Ordena\xE7\xE3o ascendente"),og()()(),Il(4599,"tr",17)(4600,"td",18)(4601,"div",19)(4602,"span",20),Qx(4603," Descending"),zl(4604,"br"),og()()(),Il(4605,"td",24)(4606,"p"),Qx(4607,"Ordena\xE7\xE3o descendente"),og()()()(),Il(4608,"h4",4)(4609,"code",5),Qx(4610,"PoTableColumnSpacing"),og()(),Il(4611,"div",2)(4612,"p"),Qx(4613,"Tipos de espa\xE7amento interno (padding) das c\xE9lulas ("),Il(4614,"strong"),Qx(4615,"p-spacing"),og(),Qx(4616,") do po-table."),og()(),Il(4617,"h4",13),Qx(4618,"Propriedades"),og(),Il(4619,"table",14)(4620,"tr",15)(4621,"th",16),Qx(4622,"Nome"),og(),Il(4623,"th",16),Qx(4624,"Descri\xE7\xE3o"),og()(),Il(4625,"tr",17)(4626,"td",18)(4627,"div",19)(4628,"span",20),Qx(4629," ExtraSmall"),zl(4630,"br"),og()()(),Il(4631,"td",24)(4632,"p"),Qx(4633,"Espa\xE7amento extra pequeno: 0.25rem (vertical) x 0.5rem (horizontal)."),og()()(),Il(4634,"tr",17)(4635,"td",18)(4636,"div",19)(4637,"span",20),Qx(4638," Small"),zl(4639,"br"),og()()(),Il(4640,"td",24)(4641,"p"),Qx(4642,"Espa\xE7amento pequeno: 0.5rem (vertical) x 1rem (horizontal)."),og()()(),Il(4643,"tr",17)(4644,"td",18)(4645,"div",19)(4646,"span",20),Qx(4647," Medium"),zl(4648,"br"),og()()(),Il(4649,"td",24)(4650,"p"),Qx(4651,"Espa\xE7amento m\xE9dio: 0.75rem (vertical) x 1rem (horizontal)."),og()()(),Il(4652,"tr",17)(4653,"td",18)(4654,"div",19)(4655,"span",20),Qx(4656," Large"),zl(4657,"br"),og()()(),Il(4658,"td",24)(4659,"p"),Qx(4660,"Espa\xE7amento grande: 1rem (vertical) x 1rem (horizontal)."),og()()()()());},dependencies:[Ka],encapsulation:2})}return r})();var pt=(()=>{class r{route;router;sub;hidePoWebSample=true;samplesLength=8;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(a,l){this.route=a,this.router=l;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let l=a.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:"merge"}),this.activeTab=a;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(l){return new(l||r)(C(Xn),C(En))};static \u0275cmp=Un({type:r,selectors:[["ng-component"]],standalone:false,decls:13,vars:4,consts:[["p-title","Table",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,o){l&1&&(Il(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return o.changeTab("doc")}),zl(3,"sample-po-table-doc"),og(),Il(4,"po-tab",3),ft("p-click",function(){return o.changeTab("web")}),zl(5,"sample-po-table-basic-view")(6,"sample-po-table-labs-view")(7,"sample-po-table-with-api-view")(8,"sample-po-table-transport-view")(9,"sample-po-table-airfare-view")(10,"sample-po-table-components-view")(11,"sample-po-table-heroes-view")(12,"sample-po-table-draggable-view"),og()()()),l&2&&(nw("p-actions",o.actions),Lp(2),nw("p-active",o.activeTab==="doc"),Lp(2),nw("p-hide",o.hidePoWebSample)("p-active",o.activeTab==="web"));},dependencies:[cNe,qme,Yme,Je,Ke,Ze,tt,it,at,rt,st,dt],encapsulation:2})}return r})();var en=[{path:"",component:pt}],ct=(()=>{class r{static \u0275fac=function(l){return new(l||r)};static \u0275mod=fe({type:r});static \u0275inj=ue$1({imports:[uL.forChild(en),uL]})}return r})();var ai=(()=>{class r{static \u0275fac=function(l){return new(l||r)};static \u0275mod=fe({type:r});static \u0275inj=ue$1({imports:[sr,ct]})}return r})();export{ai as DocPoTableModule};