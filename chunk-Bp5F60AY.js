import {f as fe,u as ue$1,s as sr,h as hL,w,c3 as Xn,E as En,U as Un,I,c$ as Xi,dv as Up,g as s,r as r$1,aW as Yp,c5 as Lde,dD as _h,b$ as CT,b,b7 as k3,H as Wl,Q as nw,bs as fN,a7 as dN,an as CO,aH as Ka,b8 as Bme,b9 as qme,F as Sl,z as eN,J as og,a1 as ft,L as Lp,ar as $x,au as dg,aX as Z9,aF as G9,aY as q9,aG as _k,aZ as mk,b0 as Qt$1,b1 as mv,c4 as b3,b4 as L3,cp as Rhe,c8 as wde,bH as M3,c9 as Ghe,b6 as Yo,aB as wx,aM as ww,aN as e0,aO as Ew,aP as n0,R as we,av as ql,aw as lo,ax as uo,cI as y3,b5 as Whe,aJ as Hhe,dE as Gue,ba as fNe,a2 as JE,dF as VO,a4 as yN,cH as oN,a6 as EN,as as aN,dh as que,dj as OO,aQ as gx,aR as px,aS as mx,n as nb,a3 as rNe,aA as Mx,br as sN,B as yw,a5 as DN,aD as Ky,aT as nN,aE as Xy}from'./main-WP3NAV7C.js';var ut=()=>({table:"PO Table",angular:"PO-UI"}),bt=r=>[r],Ge=(()=>{class r{static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-table-basic"]],standalone:false,decls:1,vars:4,consts:[[3,"p-items"]],template:function(l,o){l&1&&Wl(0,"po-table",0),l&2&&nw("p-items",fN(2,bt,dN(1,ut)));},dependencies:[k3],encapsulation:2,changeDetection:1})}return r})();var St=r=>({"docs-sample-code-tabs":r}),Je=(()=>{class r{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-table-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Table Basic"),og(),Sl(4,"a",2),ft("click",function(){return o.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-table-basic/sample-po-table-basic.component.html"),og(),Sl(13,"pre",7),eN(14,`<po-table [p-items]="[{ table: 'PO Table', angular: 'PO-UI' }]"> </po-table>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-table-basic/sample-po-table-basic.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-table-basic',
  templateUrl: './sample-po-table-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTableBasicComponent {}
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-table-basic"),og(),Wl(23,"hr")),l&2&&(Lp(5),$x("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,St,o.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,Ge],encapsulation:2})}return r})();var se=(()=>{class r{colors=["color-01","color-02","color-03","color-04","color-05","color-06","color-07","color-08","color-09","color-10","color-11","color-12","caption-tag-01","caption-tag-03","caption-tag-06","caption-tag-08","caption-tag-11","caption-tag-13","caption-tag-16","caption-tag-18","caption-tag-21","caption-tag-23","caption-tag-26","caption-tag-28","caption-tag-31","caption-tag-33"];generateNewItem(a){return {text:`Text ${a}`,page:`Link ${a}`,link:"https://po-ui.io/",number:a,date:this.generateRandomDate(),time:this.generateRandomTime(),dateTime:this.generateRandomDate(),currency:this.generateRandomNumber(),subtitle:this.generateRandomColor(),detail:[{info:"Detail Information 1",date:new Date,time:this.generateRandomTime(),currency:1500.5},{info:"Detail Information 2",date:new Date,time:this.generateRandomTime(),currency:6511}],label:this.generateRandomColor(),color:`Text ${a}`,icon:this.generateRandomIcon(a),boolean:this.generateRandomBoolean()}}getColumns(){return {text:{property:"text",width:"30%"},number:{property:"number",type:"number"},date:{property:"date",type:"date"},time:{property:"time",type:"time"},dateTime:{property:"dateTime",label:"DateTime",type:"dateTime"},currency:{property:"currency",type:"currency",format:"USD"},link:{property:"page",label:"Link",type:"link"},icon:{property:"icon",type:"icon"},boolean:{property:"boolean",type:"boolean"},subtitle:{property:"subtitle",type:"subtitle",width:"10%",subtitles:[{value:"color-01",color:"color-01",label:"Color 1",content:"1"},{value:"color-02",color:"color-02",label:"Color 2",content:"2"},{value:"color-03",color:"color-03",label:"Color 3",content:"3"},{value:"color-04",color:"color-04",label:"Color 4",content:"4"},{value:"color-05",color:"color-05",label:"Color 5",content:"5"},{value:"color-06",color:"color-06",label:"Color 6",content:"6"},{value:"color-07",color:"color-07",label:"Color 7",content:"7"},{value:"color-08",color:"color-08",label:"Color 8",content:"8"},{value:"color-09",color:"color-09",label:"Color 9",content:"9"},{value:"color-10",color:"color-10",label:"Color 10",content:"10"},{value:"color-11",color:"color-11",label:"Color 11",content:"11"},{value:"color-12",color:"color-12",label:"Color 12",content:"12"}]},label:{property:"label",type:"label",width:"10%",labels:[{value:"color-01",color:"color-01",label:"Color 1"},{value:"color-02",color:"color-02",label:"Color 2"},{value:"color-03",color:"color-03",label:"Color 3"},{value:"color-04",color:"color-04",label:"Color 4"},{value:"color-05",color:"color-05",label:"Color 5"},{value:"color-06",color:"color-06",label:"Color 6"},{value:"color-07",color:"color-07",label:"Color 7"},{value:"color-08",color:"color-08",label:"Color 8"},{value:"color-09",color:"color-09",label:"Color 9"},{value:"color-10",color:"color-10",label:"Color 10"},{value:"color-11",color:"color-11",label:"Color 11"},{value:"color-12",color:"color-12",label:"Color 12"},{value:"caption-tag-01",color:"caption-tag-01",label:"Caption 01"},{value:"caption-tag-03",color:"caption-tag-03",label:"Caption 03"},{value:"caption-tag-06",color:"caption-tag-06",label:"Caption 06"},{value:"caption-tag-08",color:"caption-tag-08",label:"Caption 08"},{value:"caption-tag-11",color:"caption-tag-11",label:"Caption 11"},{value:"caption-tag-13",color:"caption-tag-13",label:"Caption 13"},{value:"caption-tag-16",color:"caption-tag-16",label:"Caption 16"},{value:"caption-tag-18",color:"caption-tag-18",label:"Caption 18"},{value:"caption-tag-21",color:"caption-tag-21",label:"Caption 21"},{value:"caption-tag-23",color:"caption-tag-23",label:"Caption 23"},{value:"caption-tag-26",color:"caption-tag-26",label:"Caption 26"},{value:"caption-tag-28",color:"caption-tag-28",label:"Caption 28"},{value:"caption-tag-31",color:"caption-tag-31",label:"Caption 31"},{value:"caption-tag-33",color:"caption-tag-33",label:"Caption 33"}]},color:{property:"color",width:"10%",color:this.changeColor},detail:{property:"detail",type:"detail",detail:{columns:[{property:"info",label:"Detail"},{property:"date",label:"Detail Date",type:"date",format:"dd-MM-yy"},{property:"time",label:"Detail Time",type:"time"},{property:"currency",label:"Detail Currency",type:"currency"}],typeHeader:"inline"}}}}changeColor(a,l){return a[l].slice(5,7).trim()%2===0?"caption-tag-08":"caption-tag-13"}generateRandomBoolean(){return Math.random()>=.5}generateRandomNumber(){return (Math.random()*200+1).toFixed(3)}generateRandomColor(){return this.colors[Math.floor(Math.random()*this.colors.length)]}generateRandomIcon(a){let l=["an an-copy","an an-check","an an-camera","an an-plant","an an-building-apartment"],o=["an an-trash","an an-newspaper","an an-gas-pump","an an-chats","an an-bluetooth"],m=Math.floor(Math.random()*5);return [{value:`${a}`,icon:l[m],tooltip:l[m]},{value:`${a}`,icon:o[m],tooltip:o[m]}]}generateRandomTime(){let a=Math.floor(Math.random()*23),l=Math.floor(Math.random()*59),o=Math.floor(Math.random()*59),m=a<10?"0"+a.toString():a.toString(),p=l<10?"0"+l.toString():l.toString(),d=o<10?"0"+o.toString():o.toString();return `${m}:${p}:${d}`}generateRandomDate(){let a=Math.floor(Math.random()*28),l=Math.floor(Math.random()*12),o=Math.floor(Math.random()*24)+2e3;return new Date(o,l,a)}static \u0275fac=function(l){return new(l||r)};static \u0275prov=I({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();var Xe=(()=>{class r{samplePoTableLabsService;poModal;actions;actionsDefinition;actionTableFirst={action:this.openModal.bind(this),disabled:this.disableAction.bind(this),label:"First Action"};actionTableSecond={action:this.openModal.bind(this),label:"Second Action"};columns;columnsDefinition;columnsName;componentsSize;container;currentItem;customLiterals;event;height;items;itemIndex=0;literals;maxColumns;properties=["hideBatchActions","hideTableSearch"];selection;spacing=Xi.Medium;filterType=Up.startsWith;filteredColumns=[];actionsDefinitionOptions=[{label:"Actions",value:"actions"},{label:"Disable first action",value:"disableAction",disabled:true},{label:"Single action",value:"singleAction"},{label:"First action visible",value:"visibleAction"}];selectionOptions=[{label:"Selectable",value:"selectable"},{label:"Hide select all",value:"hideSelectAll",disabled:true},{label:"Single select",value:"singleSelect",disabled:true}];componentsSizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];filterModeOptions=[{label:"Starts With",value:Up.startsWith},{label:"Contains",value:Up.contains},{label:"Ends With",value:Up.endsWith}];columnsOptions=[{value:"text",label:"Text"},{value:"link",label:"Link"},{value:"number",label:"Number"},{value:"currency",label:"Currency"},{value:"date",label:"Date"},{value:"time",label:"Time"},{value:"dateTime",label:"DateTime"},{value:"subtitle",label:"Subtitle"},{value:"detail",label:"Detail"},{value:"label",label:"Label"},{value:"color",label:"Color"},{value:"icon",label:"Icon"},{value:"boolean",label:"Boolean"}];propertiesOptions=[{label:"Sort",value:"sort"},{label:"Striped",value:"striped"},{label:"Show more disabled",value:"showMoreDisabled"},{label:"Loading show more",value:"loadingShowMore"},{label:"Hide detail",value:"hideDetail"},{label:"Loading",value:"loading"},{label:"Auto collapse",value:"autoCollapse"},{label:"Hide columns manager",value:"hideColumnsManager"},{label:"Hide batch actions",value:"hideBatchActions"},{label:"Actions Right",value:"actionsRight"},{label:"Draggable",value:"draggable"},{label:"Hide action fixed columns",value:"fixed"},{label:"Hide Table Search",value:"hideTableSearch"},{label:"Virtual Scroll",value:"virtualScroll"}];typeHeaderOptions=[{label:"Inline",value:"inline"},{label:"None",value:"none"},{label:"Top",value:"top"}];typeSpacing=[{label:"ExtraSmall",value:"extraSmall"},{label:"Small",value:"small"},{label:"Medium",value:"medium"},{label:"Large",value:"large"}];constructor(a){this.samplePoTableLabsService=a,this.columnsDefinition=this.samplePoTableLabsService?.getColumns();}ngOnInit(){this.restore();}addItem(){this.items=[...this.items,this.samplePoTableLabsService.generateNewItem(this.itemIndex)],this.itemIndex++;}changeActionOptions(){let a=this.actionsDefinition.actions;this.actionsDefinitionOptions[1].disabled=!a,this.actionsDefinitionOptions[2].disabled=!a,this.actionsDefinitionOptions[3].disabled=!a,this.actionsDefinitionOptions=[].concat(this.actionsDefinitionOptions),this.actions=a?this.actionsDefinition.singleAction?[this.actionTableFirst]:[this.actionTableFirst,this.actionTableSecond]:[],this.actionTableFirst.visible=this.actionsDefinition.visibleAction,this.spacingSelectOrAction();}changeEvent(a){this.event=a;}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals);}catch(a){this.customLiterals=void 0;}}changeFilteredColumns(){this.filteredColumns=this.filteredColumns.toString().split(/,\s*/);}changeSelectionOptions(){let a=this.selection.includes("singleSelect"),l=this.selection.includes("selectable");this.selectionOptions[1].disabled=a||!l,this.selectionOptions[2].disabled=!l,this.selectionOptions=[].concat(this.selectionOptions),this.spacingSelectOrAction();}deleteItems(a){this.height&&(this.items=a);}disableAction(){return this.actionsDefinition.disableAction}openModal(a){this.currentItem=a.text,this.poModal.open();}restore(){this.actionsDefinition={visibleAction:null},this.actions=[],this.columnsDefinition.detail.detail.typeHeader=void 0,this.columnsName=[],this.container="",this.customLiterals=void 0,this.height=void 0,this.componentsSize="medium",this.items=[],this.itemIndex=0,this.literals="",this.maxColumns=void 0,this.properties=["hideBatchActions","hideTableSearch"],this.selection=[],this.spacing=Xi.Medium,this.filteredColumns=[],this.updateColumns(),this.changeActionOptions();}showMore(){this.addItem();}updateColumns(){this.columns=[],this.columnsName.forEach(a=>{this.columns.push(this.columnsDefinition[a]);});}spacingSelectOrAction(){this.columnsName.length>0&&this.updateColumns();}static \u0275fac=function(l){return new(l||r)(w(se))};static \u0275cmp=Un({type:r,selectors:[["sample-po-table-labs"]],viewQuery:function(l,o){if(l&1&&ql(Yo,7),l&2){let m;lo(m=uo())&&(o.poModal=m.first);}},standalone:false,features:[we([se])],decls:34,vars:51,consts:[["f","ngForm"],[3,"p-all-selected","p-all-unselected","p-change-fixed-columns","p-collapsed","p-expanded","p-selected","p-show-more","p-unselected","p-delete-items","p-actions","p-actions-right","p-columns","p-container","p-height","p-filter-type","p-components-size","p-hide-detail","p-hide-columns-manager","p-hide-batch-actions","p-hide-table-search","p-hide-select-all","p-items","p-literals","p-filtered-columns","p-loading","p-max-columns","p-selectable","p-spacing","p-loading-show-more","p-show-more-disabled","p-single-select","p-sort","p-striped","p-virtual-scroll","p-auto-collapse","p-draggable","p-hide-action-fixed-columns"],[1,"po-row"],["p-label","Event",1,"po-md-12",3,"p-value"],["p-label","Add Item",1,"po-md-3",3,"p-click"],["name","columnsName","p-label","Columns","p-columns","4",1,"po-md-12",3,"ngModelChange","p-change","ngModel","p-options"],["p-columns","3","name","typeHeader","p-label","Column detail typeHeader",1,"po-lg-9",3,"ngModelChange","ngModel","p-options"],["name","hideSelect","p-label","Column detail hideSelect",1,"po-lg-3",3,"ngModelChange","ngModel"],["name","properties","p-label","Properties","p-columns","4",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","actionsDefinition","p-columns","4","p-indeterminate","","p-label","Actions",1,"po-lg-12",3,"ngModelChange","p-change","ngModel","p-options"],["name","spacing","p-columns","4","p-help","Para aplicar o tamanho extraSmall, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).","p-label","Spacing",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","selection","p-columns","4","p-help","To enable 'hide select all' and 'single select' check 'selectable'.","p-label","Selection",1,"po-lg-12",3,"ngModelChange","p-change","ngModel","p-options"],["name","filterMode","p-columns","4","p-label","Filter mode",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Components size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","literals","p-help",'Ex.: {"noData": "Sem dados a serem exibidos", "noColumns": "Colunas n\xE3o definidas"}',"p-label","Literals",1,"po-md-12","po-lg-6",3,"ngModelChange","p-change","ngModel"],["name","filteredColumns","p-help",'Ex.: "text, time"',"p-label","Filter Columns",1,"po-md-6",3,"ngModelChange","p-change","ngModel"],["name","height","p-clean","","p-help","Height of table","p-label","Height",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","maxColumns","p-clean","","p-help","Max columns to be visible","p-label","Max Columns",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"],["p-click-out","true","p-size","sm","p-title","PO Table"],["p-label","Chosen Item:",3,"p-value"]],template:function(l,o){if(l&1){let m=wx();Sl(0,"po-table",1),ft("p-all-selected",function(){return o.changeEvent("p-all-selected")})("p-all-unselected",function(){return o.changeEvent("p-all-unselected")})("p-change-fixed-columns",function(){return o.changeEvent("p-change-fixed-columns")})("p-collapsed",function(){return o.changeEvent("p-collapsed")})("p-expanded",function(){return o.changeEvent("p-expanded")})("p-selected",function(){return o.changeEvent("p-selected")})("p-show-more",function(){return o.showMore()})("p-unselected",function(){return o.changeEvent("p-unselected")})("p-delete-items",function(d){return o.deleteItems(d)}),og(),Wl(1,"po-divider"),Sl(2,"div",2),Wl(3,"po-info",3),og(),Wl(4,"po-divider"),Sl(5,"div",2)(6,"po-button",4),ft("p-click",function(){return o.addItem()}),og()(),Wl(7,"po-divider"),Sl(8,"form",null,0)(10,"div",2)(11,"po-checkbox-group",5),ww("ngModelChange",function(d){return Ky(m),nN(o.columnsName,d)||(o.columnsName=d),Xy(d)}),ft("p-change",function(){return o.updateColumns()}),og(),e0(),og(),Sl(12,"div",2)(13,"po-radio-group",6),ww("ngModelChange",function(d){return Ky(m),nN(o.columnsDefinition.detail.detail.typeHeader,d)||(o.columnsDefinition.detail.detail.typeHeader=d),Xy(d)}),og(),e0(),Sl(14,"po-switch",7),ww("ngModelChange",function(d){return Ky(m),nN(o.columnsDefinition.detail.detail.hideSelect,d)||(o.columnsDefinition.detail.detail.hideSelect=d),Xy(d)}),og(),e0(),og(),Sl(15,"div",2)(16,"po-checkbox-group",8),ww("ngModelChange",function(d){return Ky(m),nN(o.properties,d)||(o.properties=d),Xy(d)}),og(),e0(),og(),Sl(17,"div",2)(18,"po-checkbox-group",9),ww("ngModelChange",function(d){return Ky(m),nN(o.actionsDefinition,d)||(o.actionsDefinition=d),Xy(d)}),ft("p-change",function(){return o.changeActionOptions()}),og(),e0(),og(),Sl(19,"div",2)(20,"po-radio-group",10),ww("ngModelChange",function(d){return Ky(m),nN(o.spacing,d)||(o.spacing=d),Xy(d)}),og(),e0(),og(),Sl(21,"div",2)(22,"po-checkbox-group",11),ww("ngModelChange",function(d){return Ky(m),nN(o.selection,d)||(o.selection=d),Xy(d)}),ft("p-change",function(){return o.changeSelectionOptions()}),og(),e0(),Sl(23,"po-radio-group",12),ww("ngModelChange",function(d){return Ky(m),nN(o.filterType,d)||(o.filterType=d),Xy(d)}),og(),e0(),Sl(24,"po-radio-group",13),ww("ngModelChange",function(d){return Ky(m),nN(o.componentsSize,d)||(o.componentsSize=d),Xy(d)}),og(),e0(),og(),Sl(25,"div",2)(26,"po-input",14),ww("ngModelChange",function(d){return Ky(m),nN(o.literals,d)||(o.literals=d),Xy(d)}),ft("p-change",function(){return o.changeLiterals()}),og(),e0(),Sl(27,"po-input",15),ww("ngModelChange",function(d){return Ky(m),nN(o.filteredColumns,d)||(o.filteredColumns=d),Xy(d)}),ft("p-change",function(){return o.changeFilteredColumns()}),og(),e0(),Sl(28,"po-number",16),ww("ngModelChange",function(d){return Ky(m),nN(o.height,d)||(o.height=d),Xy(d)}),og(),e0(),Sl(29,"po-number",17),ww("ngModelChange",function(d){return Ky(m),nN(o.maxColumns,d)||(o.maxColumns=d),Xy(d)}),og(),e0(),og(),Sl(30,"div",2)(31,"po-button",18),ft("p-click",function(){return o.restore()}),og()()(),Sl(32,"po-modal",19),Wl(33,"po-info",20),og();}l&2&&(nw("p-actions",o.actions)("p-actions-right",o.properties.includes("actionsRight"))("p-columns",o.columns)("p-container",o.container)("p-height",o.height)("p-filter-type",o.filterType)("p-components-size",o.componentsSize)("p-hide-detail",o.properties.includes("hideDetail"))("p-hide-columns-manager",o.properties.includes("hideColumnsManager"))("p-hide-batch-actions",o.properties.includes("hideBatchActions"))("p-hide-table-search",o.properties.includes("hideTableSearch"))("p-hide-select-all",o.selection.includes("hideSelectAll"))("p-items",o.items)("p-literals",o.customLiterals)("p-filtered-columns",o.filteredColumns)("p-loading",o.properties.includes("loading"))("p-max-columns",o.maxColumns)("p-selectable",o.selection.includes("selectable"))("p-spacing",o.spacing)("p-loading-show-more",o.properties.includes("loadingShowMore"))("p-show-more-disabled",o.properties.includes("showMoreDisabled"))("p-single-select",o.selection.includes("singleSelect"))("p-sort",o.properties.includes("sort"))("p-striped",o.properties.includes("striped"))("p-virtual-scroll",o.properties.includes("virtualScroll"))("p-auto-collapse",o.properties.includes("autoCollapse"))("p-draggable",o.properties.includes("draggable"))("p-hide-action-fixed-columns",o.properties.includes("fixed")),Lp(3),nw("p-value",o.event),Lp(8),Ew("ngModel",o.columnsName),nw("p-options",o.columnsOptions),n0(),Lp(2),Ew("ngModel",o.columnsDefinition.detail.detail.typeHeader),nw("p-options",o.typeHeaderOptions),n0(),Lp(),Ew("ngModel",o.columnsDefinition.detail.detail.hideSelect),n0(),Lp(2),Ew("ngModel",o.properties),nw("p-options",o.propertiesOptions),n0(),Lp(2),Ew("ngModel",o.actionsDefinition),nw("p-options",o.actionsDefinitionOptions),n0(),Lp(2),Ew("ngModel",o.spacing),nw("p-options",o.typeSpacing),n0(),Lp(2),Ew("ngModel",o.selection),nw("p-options",o.selectionOptions),n0(),Lp(),Ew("ngModel",o.filterType),nw("p-options",o.filterModeOptions),n0(),Lp(),Ew("ngModel",o.componentsSize),nw("p-options",o.componentsSizeOptions),n0(),Lp(2),Ew("ngModel",o.literals),n0(),Lp(),Ew("ngModel",o.filteredColumns),n0(),Lp(),Ew("ngModel",o.height),n0(),Lp(),Ew("ngModel",o.maxColumns),n0(),Lp(4),nw("p-value",o.currentItem));},dependencies:[Z9,G9,q9,_k,mk,Qt$1,mv,b3,L3,Rhe,wde,M3,Ghe,Yo,k3],encapsulation:2,changeDetection:1})}return r})();var vt=r=>({"docs-sample-code-tabs":r}),Ke=(()=>{class r{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-table-labs-view"]],standalone:false,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Table Labs"),og(),Sl(4,"a",2),ft("click",function(){return o.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-table-labs/sample-po-table-labs.component.html"),og(),Sl(13,"pre",7),eN(14,`<po-table
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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-table-labs/sample-po-table-labs.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),og(),Sl(21,"label",6),eN(22,"sample-po-table-labs/sample-po-table-labs.service.ts"),og(),Sl(23,"pre",9),eN(24,`import { Injectable } from '@angular/core';

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
`),og()()()()(),Sl(25,"div",10),Wl(26,"sample-po-table-labs"),og(),Wl(27,"hr")),l&2&&(Lp(5),$x("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,vt,o.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,Xe],encapsulation:2})}return r})();var Ct=["table"],Ye=(()=>{class r{tableComponent;service="";key;value;sampleService="";params;filters=[];columns=[{property:"id"},{property:"name"}];stringColumns=JSON.stringify(this.columns);defaultColumns=[...this.columns];addFilter(a,l){this.params=s(r$1({},this.params),{[a]:l}),this.setFilters(a,l),this.tableComponent.applyFilters(this.params),this.resetInputs();}changeService(a){this.sampleService=a;}onChangeColumns(a){try{this.columns=JSON.parse(a);}catch(l){this.stringColumns=JSON.stringify(this.defaultColumns),this.columns=[...this.defaultColumns];}}removeAllItems(){this.tableComponent.applyFilters({});}removeItem(a){delete this.params[a.removedDisclaimer.property],this.tableComponent.applyFilters(this.params);}resetInputs(){this.key=void 0,this.value=void 0;}setFilters(a,l){let o=this.filters.find(m=>m.property===a);o?(this.filters.splice(this.filters.indexOf(o),1),o=Object.assign({},o)):o={property:a},o.value=l,o.label=`${a.charAt(0).toUpperCase()+a.slice(1)}: ${l}`,this.filters=[...this.filters,o];}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-table-with-api"]],viewQuery:function(l,o){if(l&1&&ql(Ct,5),l&2){let m;lo(m=uo())&&(o.tableComponent=m.first);}},standalone:false,decls:16,vars:12,consts:[["table",""],[1,"po-row"],["p-label","URL API service","p-help","https://po-sample-api.onrender.com/v1/heroes",1,"po-md-12",3,"ngModelChange","p-change","ngModel"],["p-label","Columns",1,"po-md-12"],["p-label","Columns","p-help","[{ property: 'name' }]",1,"po-md-12",3,"ngModelChange","p-change","ngModel","p-rows"],["p-label","Filters",1,"po-md-12"],["p-label","Key","p-help","Object key",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Value","p-help","Object value",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add Filter",1,"po-md-3",3,"p-click","p-disabled"],[1,"po-mt-1","po-md-12",3,"p-remove","p-remove-all","p-disclaimers"],[1,"po-mt-1","po-md-12",3,"p-columns","p-service-api","p-height","p-hide-table-search","p-infinite-scroll"]],template:function(l,o){if(l&1){let m=wx();Sl(0,"div",1)(1,"po-input",2),ww("ngModelChange",function(d){return Ky(m),nN(o.service,d)||(o.service=d),Xy(d)}),ft("p-change",function(){return o.changeService(o.service)}),og(),e0(),og(),Sl(2,"div",1),Wl(3,"po-divider",3),Sl(4,"po-textarea",4),ww("ngModelChange",function(d){return Ky(m),nN(o.stringColumns,d)||(o.stringColumns=d),Xy(d)}),ft("p-change",function(d){return o.onChangeColumns(d)}),og(),e0(),og(),Sl(5,"div",1),Wl(6,"po-divider",5),Sl(7,"po-input",6),ww("ngModelChange",function(d){return Ky(m),nN(o.key,d)||(o.key=d),Xy(d)}),og(),e0(),Sl(8,"po-input",7),ww("ngModelChange",function(d){return Ky(m),nN(o.value,d)||(o.value=d),Xy(d)}),og(),e0(),og(),Sl(9,"div",1)(10,"po-button",8),ft("p-click",function(){return o.addFilter(o.key,o.value)}),og()(),Sl(11,"div",1)(12,"po-disclaimer-group",9),ft("p-remove",function(d){return o.removeItem(d)})("p-remove-all",function(){return o.removeAllItems()}),og()(),Sl(13,"div",1),Wl(14,"po-table",10,0),og();}l&2&&(Lp(),Ew("ngModel",o.service),n0(),Lp(3),Ew("ngModel",o.stringColumns),nw("p-rows",5),n0(),Lp(3),Ew("ngModel",o.key),n0(),Lp(),Ew("ngModel",o.value),n0(),Lp(2),nw("p-disabled",!o.key||!o.value),Lp(2),nw("p-disclaimers",o.filters),Lp(2),nw("p-columns",o.columns)("p-service-api",o.sampleService)("p-height",300)("p-hide-table-search",false)("p-infinite-scroll",true));},dependencies:[G9,_k,Qt$1,y3,mv,L3,Whe,k3],encapsulation:2,changeDetection:1})}return r})();var Tt=r=>({"docs-sample-code-tabs":r}),Ze=(()=>{class r{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-table-with-api-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Table using API"),og(),Sl(4,"a",2),ft("click",function(){return o.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-table-with-api/sample-po-table-with-api.component.html"),og(),Sl(13,"pre",7),eN(14,`<div class="po-row">
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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-table-with-api/sample-po-table-with-api.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';
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
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-table-with-api"),og(),Wl(23,"hr")),l&2&&(Lp(5),$x("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,Tt,o.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,Ye],encapsulation:2})}return r})();var de=(()=>{class r{getColumns(){return [{property:"code",type:"number",width:"8%"},{property:"product"},{property:"customer"},{property:"exit_forecast",label:"Exit forecast",type:"dateTime"},{property:"time_since_purchase",label:"Time since purchase",type:"time",visible:false},{property:"quantity",label:"Quantity (Tons)",type:"number",width:"15%",visible:false},{property:"icms",label:"ICMS",type:"number",format:"1.2-5",visible:false},{property:"status",type:"label",width:"8%",labels:[{value:"delivered",color:"caption-tag-23",label:"Delivered"},{value:"transport",color:"caption-tag-14",label:"Transport"},{value:"production",color:"caption-tag-03",label:"Production"},{value:"stock",color:"caption-tag-33",label:"Stock",icon:"an an-package"}]}]}getItems(){return [{code:1200,product:"Rice",customer:"Angeloni",quantity:3,icms:1500,exit_forecast:this.generateRandomDate(),time_since_purchase:this.generateRandomTime(),status:"delivered",license_plate:"MDJD9191",batch_product:18041822,driver:"Jos\xE9 Oliveira"},{code:1355,product:"Margarine",customer:"Giassi",quantity:1,icms:50,exit_forecast:this.generateRandomDate(),time_since_purchase:this.generateRandomTime(),status:"transport",license_plate:"XXA5454",batch_product:18041821,driver:"Francisco Pereira"},{code:1496,product:"Wheat flour",customer:"Walmart",quantity:5,icms:2045,exit_forecast:this.generateRandomDate(),time_since_purchase:this.generateRandomTime(),status:"transport",license_plate:"QEW5779",batch_product:18041820,driver:"Pedro da Costa"},{code:1712,product:"Milk",customer:"Carrefour",quantity:10,icms:15005,exit_forecast:this.generateRandomDate(),time_since_purchase:this.generateRandomTime(),status:"production",license_plate:"WWW1247",batch_product:18041819,driver:"Jo\xE3o da Silva"},{code:1881,product:"Oil",customer:"Carrefour",quantity:1,icms:1110,exit_forecast:this.generateRandomDate(),time_since_purchase:this.generateRandomTime(),status:"production",license_plate:"XXI2312",batch_product:18041825,driver:"Antonio Lima"},{code:1551,product:"Cream cheese",customer:"Barbosa",quantity:15,icms:1119,exit_forecast:this.generateRandomDate(),time_since_purchase:this.generateRandomTime(),status:"stock",license_plate:"XXI2359",batch_product:18041888,driver:"Vitoria Felix"}]}generateRandomDate(){let a=Math.floor(Math.random()*20),l=Math.floor(Math.random()*59),o=Math.floor(Math.random()*59);return new Date(2018,10,23,a,l,o)}generateRandomTime(){let a=Math.floor(Math.random()*59),l=Math.floor(Math.random()*59),o=a<10?"0"+a.toString():a.toString(),m=l<10?"0"+l.toString():l.toString();return `00:${o}:${m}`}static \u0275fac=function(l){return new(l||r)};static \u0275prov=I({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();function wt(r,J){if(r&1){let a=wx();Sl(0,"po-widget",2)(1,"div",3)(2,"po-select",4),ww("ngModelChange",function(o){let m=Ky(a).$implicit;return nN(m.status,o)||(m.status=o),Xy(o)}),og(),e0(),og(),Sl(3,"div",3),Wl(4,"po-info",5)(5,"po-info",6)(6,"po-info",7),og()();}if(r&2){let a=J.$implicit,l=Mx();nw("p-title",sN("Transport detail ",a.code)),Lp(2),Ew("ngModel",a.status),nw("p-options",l.statusOptions),n0(),Lp(2),nw("p-value",a.batch_product),Lp(),nw("p-value",a.driver),Lp(),nw("p-value",a.license_plate);}}var et=(()=>{class r{transportService;columns;items;statusOptions=[{label:"Delivered",value:"delivered"},{label:"Transport",value:"transport"},{label:"Production",value:"production"}];constructor(a){this.transportService=a;}ngOnInit(){this.columns=this.transportService.getColumns(),this.items=this.transportService.getItems();}isUndelivered(a,l){return a.status!=="delivered"}static \u0275fac=function(l){return new(l||r)(w(de))};static \u0275cmp=Un({type:r,selectors:[["sample-po-table-transport"]],standalone:false,features:[we([de])],decls:2,vars:9,consts:[["p-spacing","large",3,"p-auto-collapse","p-columns","p-hide-columns-manager","p-hide-table-search","p-items","p-sort","p-striped"],["p-table-row-template","",3,"p-table-row-template-arrow-direction","p-table-row-template-show"],[3,"p-title"],[1,"po-row"],["name","status","p-label","Transport status",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["p-label","Batch of product","p-orientation","horizontal",1,"po-md-4",3,"p-value"],["p-label","Driver","p-orientation","horizontal",1,"po-md-4",3,"p-value"],["p-label","License plate","p-orientation","horizontal",1,"po-md-4",3,"p-value"]],template:function(l,o){l&1&&(Sl(0,"po-table",0),JE(1,wt,7,7,"ng-template",1),og()),l&2&&(nw("p-auto-collapse",true)("p-columns",o.columns)("p-hide-columns-manager",true)("p-hide-table-search",false)("p-items",o.items)("p-sort",true)("p-striped",true),Lp(),nw("p-table-row-template-arrow-direction","right")("p-table-row-template-show",o.isUndelivered));},dependencies:[G9,_k,Hhe,Ghe,k3,Gue,fNe],encapsulation:2,changeDetection:1})}return r})();var At=r=>({"docs-sample-code-tabs":r}),tt=(()=>{class r{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-table-transport-view"]],standalone:false,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Table - Transport"),og(),Sl(4,"a",2),ft("click",function(){return o.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-table-transport/sample-po-table-transport.component.html"),og(),Sl(13,"pre",7),eN(14,`<po-table
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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-table-transport/sample-po-table-transport.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),og(),Sl(21,"label",6),eN(22,"sample-po-table-transport/sample-po-table-transport.service.ts"),og(),Sl(23,"pre",9),eN(24,`import { Injectable } from '@angular/core';

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
`),og()()()()(),Sl(25,"div",10),Wl(26,"sample-po-table-transport"),og(),Wl(27,"hr")),l&2&&(Lp(5),$x("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,At,o.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,et],encapsulation:2})}return r})();var pe=(()=>{class r{getColumns(){return [{property:"status",type:"label",labels:[{value:"available",color:"caption-tag-13",label:"Available"},{value:"reserved",color:"caption-tag-08",label:"Reserved"},{value:"closed",color:"caption-tag-03",label:"Closed"}]},{property:"country"},{property:"destination"},{property:"region",type:"subtitle",width:"180px",subtitles:[{value:"Alps",color:"color-01",label:"Alps",content:"AL"},{value:"Australasia",color:"color-02",label:"Australasia",content:"AU"},{value:"British Isle",color:"color-03",label:"British Isle",content:"BI"},{value:"Caucasus",color:"color-04",label:"Caucasus",content:"CA"},{value:"Danube",color:"color-05",label:"Danube",content:"DA"},{value:"East Asia",color:"color-06",label:"East Asia",content:"EA"},{value:"Latin America",color:"color-07",label:"Latin America",content:"LA"},{value:"Mediterranean",color:"color-08",label:"Mediterranean",content:"ME"},{value:"Nordics",color:"color-09",label:"Nordics",content:"NO"},{value:"North America",color:"color-10",label:"North America",content:"NA"},{value:"Southern Africa",color:"color-11",label:"Southern Africa",content:"SA"},{value:"Western Africa",color:"color-12",label:"Western Africa",content:"WA"}]},{property:"date",type:"date"},{property:"returnDate",label:"Return Date",type:"date"},{property:"value",type:"currency",format:"USD"},{property:"id",label:"Flight Number",type:"number"},{property:"onBoardService",label:"On Board Service",type:"boolean",boolean:{trueLabel:"Yes",falseLabel:"No"}},{property:"detail",label:"Details",type:"detail",detail:{columns:[{property:"package"},{property:"tour"},{property:"time",label:"Departure time",type:"time",format:"HH:mm"},{property:"distance",label:"Distance (Miles)",type:"number",format:"1.0-5"}],typeHeader:"top"}}]}getItems(){return [{id:11234,initials:"BR",country:"Brazil",value:1e3,date:"2018-10-09",returnDate:"2018-11-01",class:"Economic",onBoardService:false,destination:"Rio de Janeiro",airline:"Azul",status:"available",region:"Latin America",detail:[{package:"Basic",tour:"City tour by public bus and visit to the main museums.",time:"20:10:10",distance:"1000"},{package:"Intermediary",tour:"City tour by van and guided visit to the main museums.",time:"09:15:19",distance:"2000"},{package:"Complete",tour:"VIP city tour, music show with dinner and guided tour to the main museums.",time:"07:10:20",distance:"3000"}]},{id:22467,initials:"FR",country:"France",value:5e3,date:"2019-12-13",returnDate:"2019-12-31",class:"Economic",onBoardService:false,destination:"Paris",airline:"British Airways",status:"closed",region:"Alps",detail:[{package:"Basic",tour:"City tour by public bus and visit to the main museums.",time:"10:15:10",distance:"4800"},{package:"Intermediary",tour:"City tour by van and guided visit to the main museums.",time:"22:15:10",distance:"11000"},{package:"Complete",tour:"VIP city tour, music show with dinner and guided tour to the main museums.",time:"10:15:10",distance:"1000"}]},{id:40670,initials:"SN",country:"Senegal",value:3200,date:"2017-11-22",returnDate:"2018-12-01",class:"Economic",onBoardService:false,destination:"Dakar",airline:"Iberia",status:"closed",region:"Western Africa"},{id:34679,initials:"PT",country:"Portugal",value:5500,date:"2017-10-10",returnDate:"2018-10-20",class:"Economic",onBoardService:false,destination:"Lisbon",airline:"Air Europa",status:"closed",region:"Mediterranean"},{id:48999,initials:"RU",country:"Russia",value:6700,date:"2019-01-17",returnDate:"2019-02-20",class:"First Class",onBoardService:true,destination:"Moscow",airline:"Lufthansa",status:"reserved",region:"Caucasus"},{id:48999,initials:"US",country:"United States",value:2700.49,date:"2018-10-17",returnDate:"2018-10-29",class:"Economic",onBoardService:false,destination:"Los Angeles",airline:"American Airlines",status:"reserved",region:"North America"},{id:54563,initials:"CL",country:"Chile",value:2e3,date:"2018-10-20",returnDate:"2018-11-01",destination:"Cusco",class:"Economic",onBoardService:false,airline:"LATAM",status:"available",region:"Latin America"},{id:64568,initials:"MX",country:"Mexico",value:2100,date:"2018-03-10",returnDate:"2018-05-09",destination:"Mexico City",class:"Economic",onBoardService:false,airline:"Aero M\xE9xico",status:"available",region:"Latin America",detail:[{package:"Basic",tour:"City tour by public bus and visit to the main museums.",time:"12:10:10",distance:"2200"},{package:"Intermediary",tour:"City tour by van and guided visit to the main museums.",time:"11:10:10",distance:"1500"},{package:"Complete",tour:"VIP city tour, music show with dinner and guided tour to the main museums.",time:"16:10:10",distance:"1800"}]},{id:75456,initials:"IE",country:"Ireland",value:6300,date:"2018-10-14",returnDate:"2018-10-30",destination:"Cork",class:"First Class",onBoardService:true,airline:"Lufthansa",status:"reserved",region:"British Isle"},{id:23445,initials:"ZA",country:"South Africa",value:1900,date:"2018-12-10",returnDate:"2018-12-25",destination:"Cape Town",class:"Economic",onBoardService:false,airline:"South African Airways",status:"available",region:"Southern Africa"},{id:19238,initials:"AU",country:"Australia",value:6300,date:"2018-10-14",returnDate:"2018-10-30",destination:"Sydney",class:"First Class",onBoardService:true,airline:"Jetstar Airways",status:"reserved",region:"Australasia"},{id:85456,initials:"JP",country:"Japan",value:5900,date:"2018-10-25",returnDate:"2018-11-10",destination:"Tokio",class:"Executive",onBoardService:true,airline:"Japan Airlines",status:"available",region:"East Asia"},{id:94565,initials:"CN",country:"China",value:2900,date:"2018-10-10",returnDate:"2018-10-25",destination:"Beijing",class:"Economic",onBoardService:false,airline:"Malaysia Airlines",status:"available",region:"East Asia"},{id:32330,initials:"UK",country:"England",value:2090.5,date:"2018-10-07",returnDate:"2018-11-15",destination:"London",class:"Executive",onBoardService:true,airline:"British Airways",status:"available",region:"British Isle"},{id:14560,initials:"CA",country:"Canada",value:2090.5,date:"2018-10-07",returnDate:"2018-10-20",destination:"Quebec",class:"Economic",onBoardService:false,airline:"American Airlines",status:"available",region:"North America"},{id:93800,initials:"IS",country:"Iceland",value:6300,date:"2018-10-12",returnDate:"2018-10-27",destination:"Reykjav\xEDk",class:"Economic",onBoardService:false,airline:"Star Alliance",status:"available",region:"Nordics"},{id:34239,initials:"DE",country:"Germany",value:3070.5,date:"2018-10-07",returnDate:"2018-10-20",destination:"Berlin",class:"Executive",onBoardService:true,airline:"LATAM",status:"available",region:"Danube"},{id:45611,initials:"AR",country:"Argentina",value:3500.5,date:"2018-12-07",returnDate:"2018-12-29",destination:"Ushuaia",class:"Economic",onBoardService:false,airline:"LATAM",status:"reserved",region:"Latin America"}]}static \u0275fac=function(l){return new(l||r)};static \u0275prov=I({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();var nt=(()=>{class r{sampleAirfare;poNotification;poDialog;poModal;poTable;actions=[{action:this.discount.bind(this),icon:"an an-currency-circle-dollar",label:"Apply Discount",disabled:this.validateDiscount.bind(this)},{action:this.details.bind(this),icon:"an an-info",label:"Details"},{action:this.remove.bind(this),icon:"po-icon an an-trash",label:"Remove"}];columns;columnsDefault;detail;items;total=0;totalExpanded=0;initialColumns;constructor(a,l,o){this.sampleAirfare=a,this.poNotification=l,this.poDialog=o;}ngOnInit(){this.columns=this.sampleAirfare.getColumns(),this.items=this.sampleAirfare.getItems();}ngAfterViewInit(){if(this.columnsDefault=this.columns,localStorage.getItem("initial-columns")){this.initialColumns=localStorage.getItem("initial-columns").split(",");let l=[...this.columns.map(o=>s(r$1({},o),{visible:this.initialColumns.includes(o.property)}))];l.sort(this.sortFunction),this.columns=l;}}sortFunction(a,l){let o=localStorage.getItem("initial-columns").split(","),m=o.indexOf(a.property),p=o.indexOf(l.property);if(m===-1)return 1;if(p===-1||m<p)return  -1;if(m>p)return 1}addToCart(){let a=this.poTable.getSelectedRows();a.length>0&&this.poDialog.confirm({title:"Add to cart",message:`Would you like to add ${a.length} items to cart?`,confirm:()=>this.confirmItems(a),cancel:()=>{}});}confirmItems(a){a.forEach(l=>{switch(l.status){case "available":this.poNotification.success(`${this.getDescription(l)} added succesfully`);break;case "reserved":this.poNotification.warning(`${this.getDescription(l)} added succesfully, verify your e-mail to complete reservation`);break;case "closed":this.poNotification.error(`${this.getDescription(l)} is closed and not available anymore`);break}}),this.poTable.unselectRows();}collapseAll(){this.items.forEach((a,l)=>{a.detail&&(this.onCollapseDetail(),this.poTable.collapse(l));});}decreaseTotal(a){a.value&&(this.total-=a.value);}deleteItems(a){this.items=a;}details(a){this.detail=a,this.poModal.open();}remove(a){this.poTable.removeItem(a);}discount(a){if(!a.disableDiscount){let l=s(r$1({},a),{value:a.value-a.value*.2,disableDiscount:true});this.poTable.updateItem(a,l);}}expandAll(){this.totalExpanded=0,this.items.forEach((a,l)=>{a.detail&&(this.onExpandDetail(),this.poTable.expand(l));});}onCollapseDetail(){this.totalExpanded-=1,this.totalExpanded=this.totalExpanded<0?0:this.totalExpanded;}onExpandDetail(){this.totalExpanded+=1;}sumTotal(a){a.value&&(this.total+=a.value);}restoreColumn(){this.columns=this.columnsDefault;}changeColumnVisible(a){localStorage.setItem("initial-columns",a);}getDescription(a){return `Airfare to ${a.destination} - ${a.initials}`}validateDiscount(a){return a.disableDiscount}static \u0275fac=function(l){return new(l||r)(w(pe),w(Yp),w(Lde))};static \u0275cmp=Un({type:r,selectors:[["sample-po-table-airfare"]],viewQuery:function(l,o){if(l&1&&ql(Yo,7)(k3,7),l&2){let m;lo(m=uo())&&(o.poModal=m.first),lo(m=uo())&&(o.poTable=m.first);}},standalone:false,features:[we([pe,Lde])],decls:16,vars:24,consts:[[1,"po-font-text-bold","po-text-color-neutral-dark-40"],[3,"p-collapsed","p-expanded","p-selected","p-unselected","p-change-visible-columns","p-restore-column-manager","p-delete-items","p-container","p-height","p-hide-batch-actions","p-hide-table-search","p-selectable","p-sort","p-striped","p-actions","p-columns","p-items","p-max-columns","p-virtual-scroll"],["p-label","Total Value","p-orientation","horizontal",1,"po-md-6","po-mb-sm-2","po-mb-md-2","po-lb-lg-2",3,"p-value"],["p-label","Expanded Itens","p-orientation","horizontal",1,"po-md-6","po-mb-sm-2","po-mb-md-2","po-lb-lg-2",3,"p-value"],[1,"po-row"],["p-icon","an an-shopping-cart-simple","p-label","Add items to cart",1,"po-md-3",3,"p-click"],["p-label","Expand all detail",1,"po-md-3",3,"p-click"],["p-label","Collapse all detail",1,"po-md-3",3,"p-click"],["p-click-out","true","p-size","sm",3,"p-title"],["p-label","Airline",1,"po-sm-6",3,"p-value"],["p-label","Initials",1,"po-sm-2",3,"p-value"],["p-label","Class",1,"po-sm-4",3,"p-value"]],template:function(l,o){l&1&&(Sl(0,"div",0),eN(1,"Choose one or more promotional airfares"),og(),Wl(2,"po-divider"),Sl(3,"po-table",1),ft("p-collapsed",function(){return o.onCollapseDetail()})("p-expanded",function(){return o.onExpandDetail()})("p-selected",function(p){return o.sumTotal(p)})("p-unselected",function(p){return o.decreaseTotal(p)})("p-change-visible-columns",function(p){return o.changeColumnVisible(p)})("p-restore-column-manager",function(){return o.restoreColumn()})("p-delete-items",function(p){return o.deleteItems(p)}),og(),Wl(4,"po-divider")(5,"po-info",2),yN(6,"currency"),Wl(7,"po-info",3),Sl(8,"div",4)(9,"po-button",5),ft("p-click",function(){return o.addToCart()}),og(),Sl(10,"po-button",6),ft("p-click",function(){return o.expandAll()}),og(),Sl(11,"po-button",7),ft("p-click",function(){return o.collapseAll()}),og()(),Sl(12,"po-modal",8),Wl(13,"po-info",9)(14,"po-info",10)(15,"po-info",11),og()),l&2&&(Lp(3),nw("p-container",true)("p-height",400)("p-hide-batch-actions",false)("p-hide-table-search",false)("p-selectable",true)("p-sort",true)("p-striped",true)("p-actions",o.actions)("p-columns",o.columns)("p-items",o.items)("p-max-columns",7)("p-virtual-scroll",false),Lp(2),nw("p-value",oN(EN(6,21,o.total,"USD"))),Lp(2),nw("p-value",o.totalExpanded),Lp(5),nw("p-title",aN("",o.detail?.destination," - ",o.detail?.country)),Lp(),nw("p-value",o.detail==null?null:o.detail.airline),Lp(),nw("p-value",o.detail==null?null:o.detail.initials),Lp(),nw("p-value",o.detail==null?null:o.detail.class));},dependencies:[Qt$1,mv,Ghe,Yo,k3,VO],encapsulation:2,changeDetection:1})}return r})();var Ft=r=>({"docs-sample-code-tabs":r}),it=(()=>{class r{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-table-airfare-view"]],standalone:false,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Table - Airfare"),og(),Sl(4,"a",2),ft("click",function(){return o.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-table-airfare/sample-po-table-airfare.component.html"),og(),Sl(13,"pre",7),eN(14,`<div class="po-font-text-bold po-text-color-neutral-dark-40">Choose one or more promotional airfares</div>

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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-table-airfare/sample-po-table-airfare.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { AfterViewInit, Component, ViewChild, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),og(),Sl(21,"label",6),eN(22,"sample-po-table-airfare/sample-po-table-airfare.service.ts"),og(),Sl(23,"pre",9),eN(24,`import { Injectable } from '@angular/core';

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
`),og()()()()(),Sl(25,"div",10),Wl(26,"sample-po-table-airfare"),og(),Wl(27,"hr")),l&2&&(Lp(5),$x("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,Ft,o.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,nt],encapsulation:2})}return r})();var H=(function(r){return r[r.Stable=0]="Stable",r[r.Experimental=1]="Experimental",r[r.RoadMap=2]="RoadMap",r})(H||{});var ce=(()=>{class r{items=[{component:{favorite:["favorite","documentation"],name:"PO Select",description:"Display a list of items and allows selection",link:"/documentation/po-select",extra:"Features",extras:["Filter options (starts, contains, ends)","Custom services","Navigation by keys"],status:0,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Checkbox",description:"Group of square buttons that allows multiple items to be selected",link:"/documentation/po-checkbox-group",extra:"Best Practices",extras:["Short and objective texts for items","Use with short lists","For big lists use PO Multiselect"],status:0,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Page Login",description:"Template for authentication",link:"/documentation/po-page-login",extra:"Features",extras:[],status:0,type:"template"}},{component:{favorite:["favorite","documentation"],name:"PO Number",description:"Input that allows only numbers",link:"/documentation/po-number",extra:"Features",extras:["Filter options (starts, contains, ends)","Custom services","Navigation by keys"],status:1,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Page Dynamic Table",description:"Template for list resources with a table",link:"/documentation/po-page-dynamic-table",extra:"Features",extras:["6 defaults actions","Use Metadata to build your page","No code","Customization"],status:0,type:"template"}},{component:{favorite:["favorite","documentation"],name:"PO Combo",description:"Display a list of items with filter and allows selection",link:"/documentation/po-combo",extra:"Features",extras:["Filter options (starts, contains, ends)","Custom services","Navigation by keys"],status:0,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Notification",description:"Show notification easily and quickly",link:"/documentation/po-notification",extra:"Features",extras:["4 types of notifications","Define time for your notifications","Use actions in your notification"],status:0,type:"service"}},{component:{favorite:["favorite","documentation"],name:"PO Multiselect",description:"Display a list of items and allows multiple selection",link:"/documentation/po-multiselect",extra:"Features",extras:["Filter options (starts, contains, ends)","Custom services","Navigation by keys"],status:1,type:"component"}},{component:{favorite:[],name:"PO Grid",description:"Create a grid for edition",link:"/documentation/po-grid",extra:"Features",extras:[],status:2,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Input",description:"Input for general texts",link:"/documentation/po-input",extra:"Features",extras:["Filter options (starts, contains, ends)","Custom services","Navigation by keys"],status:0,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Textarea",description:"Larger input for big texts",link:"/documentation/po-textarea",extra:"Best Practices",extras:["Recommended to large texts like observations and details","For short texts use po-input"],status:1,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Datepicker",description:"Input with calendar for dates",link:"/documentation/po-datepicker",extra:"Features",extras:["Multiple idioms ( pt, es , en)","Custom date formats","Period validation (start date and end date)"],status:1,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Email",description:"Input that allows valid email texts (username@email.com)",link:"/documentation/po-email",extra:"Features",extras:["Filter options (starts, contains, ends)","Custom services","Navigation by keys"],status:0,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Url",description:"Input that expects a valid url as text (http://www.url.com)",link:"/documentation/po-url",extra:"Features",extras:["Filter options (starts, contains, ends)","Custom services","Navigation by keys"],status:0,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Password",description:"Input with bullet text to type passwords",link:"/documentation/po-password",extra:"Features",extras:["Filter options (starts, contains, ends)","Custom services","Navigation by keys"],status:0,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Login",description:"Input with a user icon that represents a login field",link:"/documentation/po-login",extra:"Features",extras:["Filter options (starts, contains, ends)","Custom services","Navigation by keys"],status:0,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Upload",description:"Upload file(s) with a loading bar",link:"/documentation/po-upload",extra:"Features",extras:["Multiple file selection","Automatic upload after click","File format and size restriction"],status:1,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Avatar",description:"Creates a circle with a picture inside",link:"/documentation/po-avatar",extra:"Features",extras:["Multiple sizes","Default image"],status:0,type:"component"}}];getItems(a,l=false){let o=[...this.items];return a&&a.column&&o.sort((m,p)=>this.sort(m,p,a)),l||(o.length=10),o}sort(a,l,o){let m=o.column.property,p=o.type;if(m.split(".").length>1){let d=m.split(".")[0],xe=m.split(".")[1];return a[d][xe]<l[d][xe]?p===_h.Ascending?-1:1:p===_h.Ascending?1:-1}else return a[m]<l[m]?p===_h.Ascending?-1:1:p===_h.Ascending?1:-1}static \u0275fac=function(l){return new(l||r)};static \u0275prov=I({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();function Bt(r,J){if(r&1&&(Sl(0,"div"),eN(1),yN(2,"uppercase"),og()),r&2){let a=J.$implicit;$x(sN("badge ",a)),Lp(),yw(DN(2,4,a));}}function Rt(r,J){if(r&1&&(Sl(0,"ul")(1,"li",4),eN(2),og(),Wl(3,"po-divider"),og()),r&2){let a=J.$implicit;Lp(2),yw(a);}}var ot=(()=>{class r{sampleComponents;router;poModal;extraInformation;items;showMoreDisabled=false;title;isLoading=false;columns=[{property:"component.status",type:"label",label:"Status",width:"5%",labels:[{value:H.Stable,color:"caption-tag-13",label:"Stable",textColor:"white",tooltip:"Published component"},{value:H.Experimental,color:"caption-tag-08",label:"Experimental",textColor:"white",tooltip:"Component in homologation"},{value:H.RoadMap,color:"caption-tag-03",label:"Roadmap",textColor:"white",tooltip:"Component in roadmap"}]},{property:"component.name",label:"Name",type:"link"},{property:"component.type",label:"Type",type:"columnTemplate",width:"10%"},{property:"component.description",label:"Descri\xE7\xE3o",color:this.experimentalColor.bind(this)},{property:"component.extra",label:"Extras",width:"10%",type:"link",tooltip:"Additional details",action:(a,l)=>{this.extras(a,l);},disabled:this.canShowExtras.bind(this)},{property:"component.favorite",label:"Actions",type:"icon",sortable:false,icons:[{action:this.favorite.bind(this),color:this.isFavorite.bind(this),icon:"an an-star",tooltip:"Favorite",value:"favorite"},{action:this.goToDocumentation.bind(this),disabled:this.canGoToDocumentation.bind(this),icon:"an an-arrow-square-out",tooltip:"Click to go to documentation",value:"documentation"}]}];constructor(a,l){this.sampleComponents=a,this.router=l;}ngOnInit(){this.items=this.sampleComponents.getItems();}experimentalColor(a){return a?.component?.status===H.Experimental?"caption-tag-08":"caption-tag-13"}extras(a,l){this.title=a,this.extraInformation=l,this.poModal.open();}goToDocumentation(a){this.router.navigate([a?.component?.link]);}showMore(a){this.isLoading=true,this.showMoreDisabled=true,setTimeout(()=>{this.items=this.getItems(a),this.isLoading=false;},4e3);}sort(a){this.items=this.getItems(a);}showAlert(a){alert(a);}canGoToDocumentation(a){return a?.component?.status!==H.Stable}canShowExtras(a){return a?.component?.status!==H.Stable||a?.component?.extras.length===0}favorite(a){a.component.isFavorite=!a.component.isFavorite;}getItems(a){return this.sampleComponents.getItems(a,this.showMoreDisabled)}isFavorite(a){return a?.component?.isFavorite?"caption-tag-08":"caption-tag-13"}static \u0275fac=function(l){return new(l||r)(w(ce),w(En))};static \u0275cmp=Un({type:r,selectors:[["sample-po-table-components"]],viewQuery:function(l,o){if(l&1&&ql(Yo,7),l&2){let m;lo(m=uo())&&(o.poModal=m.first);}},standalone:false,features:[we([ce])],decls:8,vars:9,consts:[[1,"po-font-text-large","po-text-color-neutral-dark-40"],["p-container","shadow",3,"p-show-more","p-sort-by","p-loading-show-more","p-columns","p-items","p-show-more-disabled","p-sort"],["p-table-column-template","",3,"p-property"],["p-click-out","true","p-size","sm",3,"p-title"],[1,"po-font-text"]],template:function(l,o){l&1&&(Sl(0,"div",0),eN(1,"PO UI Library"),og(),Wl(2,"po-divider"),Sl(3,"po-table",1),ft("p-show-more",function(p){return o.showMore(p)})("p-sort-by",function(p){return o.sort(p)}),JE(4,Bt,3,6,"ng-template",2),og(),Sl(5,"po-modal",3),gx(6,Rt,4,1,"ul",null,px),og()),l&2&&(Lp(3),nw("p-loading-show-more",o.isLoading)("p-columns",o.columns)("p-items",o.items)("p-show-more-disabled",o.showMoreDisabled)("p-sort",true),Lp(),nw("p-property","component.type"),Lp(),nw("p-title",aN("",o.title," - ",o.extraInformation?.component)),Lp(),mx(o.extraInformation?.extras));},dependencies:[mv,Yo,k3,que,OO],styles:[".badge[_ngcontent-%COMP%]{padding:3px 10px;border-radius:3px;color:#fff;width:100px;text-align:center;box-shadow:0 4px 8px #0003,0 6px 20px #00000030;font-size:10px}.badge.component[_ngcontent-%COMP%]{background-color:#82b1ff}.badge.service[_ngcontent-%COMP%]{background-color:#b39ddb}.badge.template[_ngcontent-%COMP%]{background-color:#ffb515}"],changeDetection:1})}return r})();var Nt=r=>({"docs-sample-code-tabs":r}),at=(()=>{class r{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-table-components-view"]],standalone:false,decls:38,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Table - Po Field Components"),og(),Sl(4,"a",2),ft("click",function(){return o.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-table-components/sample-po-table-components.component.html"),og(),Sl(13,"pre",7),eN(14,`<div class="po-font-text-large po-text-color-neutral-dark-40">PO UI Library</div>

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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-table-components/sample-po-table-components.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, ViewChild, OnInit, ChangeDetectionStrategy } from '@angular/core';
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
`),og(),Sl(21,"label",6),eN(22,"sample-po-table-components/sample-po-table-components.enum.ts"),og(),Sl(23,"pre",9),eN(24,`export enum SamplePoTableComponentStatus {
  Stable,
  Experimental,
  RoadMap
}
`),og(),Sl(25,"label",6),eN(26,"sample-po-table-components/sample-po-table-components.service.ts"),og(),Sl(27,"pre",9),eN(28,`import { Injectable } from '@angular/core';

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
`),og()()(),Sl(29,"po-tab",10)(30,"div")(31,"label",6),eN(32,"sample-po-table-components/sample-po-table-components.component.css"),og(),Sl(33,"pre",11),eN(34,`.badge {
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
`),og()()()()(),Sl(35,"div",12),Wl(36,"sample-po-table-components"),og(),Wl(37,"hr")),l&2&&(Lp(5),$x("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,Nt,o.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,ot],encapsulation:2})}return r})();var ue=(()=>{class r{http;constructor(a){this.http=a;}getColumns(){return [{property:"id",label:"Id",type:"string",width:"90px"},{property:"label",label:"Name",type:"string",width:"90px"},{property:"email",label:"E-mail",type:"string",width:"120px"}]}getItems(){return this.http.get("https://po-sample-api.onrender.com/v1/heroes").pipe(CT("items"))}static \u0275fac=function(l){return new(l||r)(b(nb))};static \u0275prov=I({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();var jt=["POItemsOri"],Wt=["POItemsSelected"],lt=(()=>{class r{service;poItemsOri;poItemsSelected;items=[];itemsSelected=[];columns;constructor(a){this.service=a;}ngOnInit(){this.getColumns(),this.getItems();}getColumns(){this.columns=this.service.getColumns();}getItems(){this.service.getItems().subscribe({next:a=>this.items=a,error:a=>console.error(a)});}changeOptions(a,l){if(l==="new")this.itemsSelected.push({id:a.id,label:a.label,email:a.email}),this.itemsSelected=[...this.itemsSelected];else {let o=this.itemsSelected.findIndex(m=>m.id===a.id);this.poItemsSelected.removeItem(o),this.itemsSelected=[...this.poItemsSelected.items];}}deleteItems(a){this.items=a,this.itemsSelected=[];}static \u0275fac=function(l){return new(l||r)(w(ue))};static \u0275cmp=Un({type:r,selectors:[["sample-po-table-heroes"]],viewQuery:function(l,o){if(l&1&&ql(jt,7)(Wt,7),l&2){let m;lo(m=uo())&&(o.poItemsOri=m.first),lo(m=uo())&&(o.poItemsSelected=m.first);}},standalone:false,features:[we([ue])],decls:11,vars:16,consts:[["POItemsOri",""],["POItemsSelected",""],[1,"po-row","po-pb-2"],[1,"po-md-6"],[1,"po-font-text-bold","po-text-color-neutral-dark-40"],["p-selectable","true","p-infinite-scroll-distance","80","p-height","300",3,"p-selected","p-unselected","p-delete-items","p-columns","p-infinite-scroll","p-hide-select-all","p-hide-table-search","p-items","p-hide-action-fixed-columns","p-text-wrap","p-virtual-scroll"],["p-height","300",3,"p-columns","p-hide-table-search","p-striped","p-infinite-scroll","p-items","p-hide-action-fixed-columns","p-text-wrap","p-virtual-scroll"]],template:function(l,o){l&1&&(Sl(0,"div",2)(1,"div",3)(2,"div",4),eN(3,"Choose one or more heroes for your team"),og(),Sl(4,"po-table",5,0),ft("p-selected",function(p){return o.changeOptions(p,"new")})("p-unselected",function(p){return o.changeOptions(p,"change")})("p-delete-items",function(p){return o.deleteItems(p)}),og()(),Sl(6,"div",3)(7,"div",4),eN(8,"Here your chosen heroes"),og(),Wl(9,"po-table",6,1),og()()),l&2&&(Lp(4),nw("p-columns",o.columns)("p-infinite-scroll",true)("p-hide-select-all",true)("p-hide-table-search",false)("p-items",o.items)("p-hide-action-fixed-columns",true)("p-text-wrap",true)("p-virtual-scroll",false),Lp(5),nw("p-columns",o.columns)("p-hide-table-search",false)("p-striped",true)("p-infinite-scroll",true)("p-items",o.itemsSelected)("p-hide-action-fixed-columns",true)("p-text-wrap",true)("p-virtual-scroll",false));},dependencies:[k3],encapsulation:2,changeDetection:1})}return r})();var Qt=r=>({"docs-sample-code-tabs":r}),rt=(()=>{class r{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-table-heroes-view"]],standalone:false,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Table - Heroes"),og(),Sl(4,"a",2),ft("click",function(){return o.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-table-heroes/sample-po-table-heroes.component.html"),og(),Sl(13,"pre",7),eN(14,`<div class="po-row po-pb-2">
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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-table-heroes/sample-po-table-heroes.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, ViewChild, OnInit, ChangeDetectionStrategy } from '@angular/core';
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
`),og(),Sl(21,"label",6),eN(22,"sample-po-table-heroes/sample-po-table-heroes.service.ts"),og(),Sl(23,"pre",9),eN(24,`import { HttpClient } from '@angular/common/http';
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
`),og()()()()(),Sl(25,"div",10),Wl(26,"sample-po-table-heroes"),og(),Wl(27,"hr")),l&2&&(Lp(5),$x("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,Qt,o.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,lt],encapsulation:2})}return r})();var Jt=()=>({code:"001",table:"PO Table",angular:"PO-UI"}),$t=r=>[r],mt=(()=>{class r{static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-table-draggable"]],standalone:false,decls:4,vars:7,consts:[[1,"po-font-text-bold","po-text-color-neutral-dark-40"],[3,"p-items","p-draggable","p-hide-columns-manager","p-hide-table-search"]],template:function(l,o){l&1&&(Sl(0,"div",0),eN(1,` Choose one column and drag to another horizontal position in the table and drop
`),og(),Wl(2,"po-divider")(3,"po-table",1)),l&2&&(Lp(3),nw("p-items",fN(5,$t,dN(4,Jt)))("p-draggable",true)("p-hide-columns-manager",true)("p-hide-table-search",false));},dependencies:[mv,k3],encapsulation:2,changeDetection:1})}return r})();var Kt=r=>({"docs-sample-code-tabs":r}),st=(()=>{class r{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-table-draggable-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Table Drag and Drop"),og(),Sl(4,"a",2),ft("click",function(){return o.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-table-draggable/sample-po-table-draggable.component.html"),og(),Sl(13,"pre",7),eN(14,`<div class="po-font-text-bold po-text-color-neutral-dark-40">
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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-table-draggable/sample-po-table-draggable.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-table-draggable',
  templateUrl: './sample-po-table-draggable.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTableDraggableComponent {}
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-table-draggable"),og(),Wl(23,"hr")),l&2&&(Lp(5),$x("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,Kt,o.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,mt],encapsulation:2})}return r})();var dt=(()=>{class r{static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-table-doc"]],standalone:false,decls:4661,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-table-row-template"],["href","/documentation/po-table-column-template"],["href","/documentation/po-table-cell-template"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","PoTableAction[]"],["href","https://po-ui.io/icons"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","PoTableColumn[]"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","PoSearchFilterMode"],["pan","",1,"docs-api-property-type","Array<string>"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","any[]"],["pan","",1,"docs-api-property-type","PoTableLiterals"],["href","/documentation/po-i18n"],["href","https://po-ui.io/guides/api"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],["pan","",1,"docs-api-property-type","{","key:","value","}"],["pan","",1,"docs-api-property-type"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["pan","",1,"docs-api-property-type","Array<PoPopupAction>"],["pan","",1,"docs-api-property-type","PoTableColumn"],["pan","",1,"docs-api-property-type","PoTableColumnSortType"],["pan","",1,"docs-api-property-type","PoTableBoolean"],[1,"dot","po-color-01"],[1,"dot","po-color-02"],[1,"dot","po-color-03"],[1,"dot","po-color-04"],[1,"dot","po-color-05"],[1,"dot","po-color-06"],[1,"dot","po-color-07"],[1,"dot","po-color-08"],[1,"dot","po-color-09"],[1,"dot","po-color-10"],[1,"dot","po-color-11"],[1,"dot","po-color-12"],[1,"dot","po-caption-tag-01"],[1,"dot","po-caption-tag-02"],[1,"dot","po-caption-tag-03"],[1,"dot","po-caption-tag-04"],[1,"dot","po-caption-tag-05"],[1,"dot","po-caption-tag-06"],[1,"dot","po-caption-tag-07"],[1,"dot","po-caption-tag-08"],[1,"dot","po-caption-tag-09"],[1,"dot","po-caption-tag-10"],[1,"dot","po-caption-tag-11"],[1,"dot","po-caption-tag-12"],[1,"dot","po-caption-tag-13"],[1,"dot","po-caption-tag-14"],[1,"dot","po-caption-tag-15"],[1,"dot","po-caption-tag-16"],[1,"dot","po-caption-tag-17"],[1,"dot","po-caption-tag-18"],[1,"dot","po-caption-tag-19"],[1,"dot","po-caption-tag-20"],[1,"dot","po-caption-tag-21"],[1,"dot","po-caption-tag-22"],[1,"dot","po-caption-tag-23"],[1,"dot","po-caption-tag-24"],[1,"dot","po-caption-tag-25"],[1,"dot","po-caption-tag-26"],[1,"dot","po-caption-tag-27"],[1,"dot","po-caption-tag-28"],[1,"dot","po-caption-tag-29"],[1,"dot","po-caption-tag-30"],[1,"dot","po-caption-tag-31"],[1,"dot","po-caption-tag-32"],[1,"dot","po-caption-tag-33"],[1,"dot","po-caption-tag-34"],[1,"dot","po-caption-tag-35"],["pan","",1,"docs-api-property-type","PoTableDetail"],["href","https://angular.dev/api/common/DecimalPipe"],["pan","",1,"docs-api-property-type","Array<PoTableColumnIcon>"],["href","documentation/po-table#tableColumnIcon"],["pan","",1,"docs-api-property-type","Array<PoTableColumnLabel>"],["pan","",1,"docs-api-property-type","Array<PoTableSubtitleColumn>"],["id","tableColumnIcon"],[1,"an","an-check"],[1,"an","an-warning-circle"],[1,"an","an-x"],[1,"an","an-info"],["pan","",1,"docs-api-property-type","PoTagType"],["href","https://angular.io/api/common/DecimalPipe"],["pan","",1,"docs-api-property-type","Array<PoTableDetailColumn>"]],template:function(l,o){l&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),eN(3,"import { PoTableModule } from '@po-ui/ng-components';"),og()(),Sl(4,"div",2)(5,"p"),eN(6,"M\xF3dulo do componente po-table"),og()(),Sl(7,"h3",3),eN(8,"Componente"),og(),Sl(9,"h4",4)(10,"code",5),eN(11,"PoTableComponent"),og()(),Sl(12,"div",2)(13,"p"),eN(14,`Este componente de tabela \xE9 utilizado para exibi\xE7\xE3o de dados com diferentes tipos como por exemplo textos, data, horas e n\xFAmeros com
formato personalizado.`),og(),Sl(15,"p"),eN(16,`Tamb\xE9m \xE9 possivel criar tabelas com ordena\xE7\xE3o de dados, linhas com detalhes, coluna para sele\xE7\xE3o de linhas, coluna com a\xE7\xF5es e tamb\xE9m
carregamento por demanda atrav\xE9s do bot\xE3o `),Sl(17,"strong"),eN(18,"Carregar mais resultados"),og(),eN(19,"."),og(),Sl(20,"blockquote")(21,"p"),eN(22,"As linhas de detalhes podem tamb\xE9m ser customizadas atrav\xE9s do "),Sl(23,"a",6)(24,"code"),eN(25,"p-table-row-template"),og()(),eN(26,"."),og()(),Sl(27,"blockquote")(28,"p"),eN(29,"As colunas podem ser customizadas atrav\xE9s dos templates "),Sl(30,"a",7)(31,"code"),eN(32,"p-table-column-template"),og()(),eN(33,`
e `),Sl(34,"a",8)(35,"code"),eN(36,"p-table-cell-template"),og()(),eN(37,"."),og()(),Sl(38,"p"),eN(39,`O componente permite gerenciar a exibi\xE7\xE3o das colunas dinamicamente. Esta funcionalidade pode ser acessada atrav\xE9s do \xEDcone de engrenagem
no canto superior direito do cabe\xE7alho da tabela.`),og(),Sl(40,"p"),eN(41,"Caso a largura de todas as colunas forem definidas e o total ultrapassar o tamanho tabela, ser\xE1 exibido um "),Sl(42,"em"),eN(43,"scroll"),og(),eN(44,` na horizontal para a
completa visualiza\xE7\xE3o dos dados.`),og(),Sl(45,"h4"),eN(46,"Tokens customiz\xE1veis"),og(),Sl(47,"p"),eN(48,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),og(),Sl(49,"blockquote")(50,"p"),eN(51,"Para maiores informa\xE7\xF5es, acesse o guia "),Sl(52,"a",9),eN(53,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),eN(54,"."),og()(),Sl(55,"table")(56,"thead")(57,"tr")(58,"th"),eN(59,"Propriedade"),og(),Sl(60,"th"),eN(61,"Descri\xE7\xE3o"),og(),Sl(62,"th"),eN(63,"Valor Padr\xE3o"),og()()(),Sl(64,"tbody")(65,"tr")(66,"td")(67,"strong"),eN(68,"Default Values"),og()(),Wl(69,"td")(70,"td"),og(),Sl(71,"tr")(72,"td")(73,"code"),eN(74,"--font-family"),og()(),Sl(75,"td"),eN(76,"Fam\xEDlia tipogr\xE1fica usada"),og(),Sl(77,"td")(78,"code"),eN(79,"var(--font-family-theme)"),og()()(),Sl(80,"tr")(81,"td")(82,"code"),eN(83,"--background-color"),og()(),Sl(84,"td"),eN(85,"Cor de background"),og(),Sl(86,"td")(87,"code"),eN(88,"var(--color-neutral-light-00)"),og()()(),Sl(89,"tr")(90,"td")(91,"code"),eN(92,"--color"),og()(),Sl(93,"td"),eN(94,"Cor principal da table"),og(),Sl(95,"td")(96,"code"),eN(97,"var(--color-neutral-dark-95)"),og()()(),Sl(98,"tr")(99,"td")(100,"code"),eN(101,"--background-striped-color"),og()(),Sl(102,"td"),eN(103,"Cor do background quando striped"),og(),Sl(104,"td")(105,"code"),eN(106,"var(--color-neutral-light-05)"),og()()(),Sl(107,"tr")(108,"td")(109,"code"),eN(110,"--color-line"),og()(),Sl(111,"td"),eN(112,"Cor das linhas"),og(),Sl(113,"td")(114,"code"),eN(115,"var(--color-neutral-mid-40)"),og()()(),Sl(116,"tr")(117,"td")(118,"strong"),eN(119,"Hover"),og()(),Wl(120,"td")(121,"td"),og(),Sl(122,"tr")(123,"td")(124,"code"),eN(125,"--color-hover"),og()(),Sl(126,"td"),eN(127,"Cor principal no estado hover"),og(),Sl(128,"td")(129,"code"),eN(130,"var(--color-action-hover)"),og()()(),Sl(131,"tr")(132,"td")(133,"code"),eN(134,"--background-color-hover"),og()(),Sl(135,"td"),eN(136,"Cor de background no estado hover"),og(),Sl(137,"td")(138,"code"),eN(139,"var(--color-brand-01-lighter)"),og()()(),Sl(140,"tr")(141,"td")(142,"strong"),eN(143,"Focused"),og()(),Wl(144,"td")(145,"td"),og(),Sl(146,"tr")(147,"td")(148,"code"),eN(149,"--outline-color-focused"),og()(),Sl(150,"td"),eN(151,"Cor do outline do estado de focus"),og(),Sl(152,"td")(153,"code"),eN(154,"var(--color-action-focus)"),og()()(),Sl(155,"tr")(156,"td")(157,"strong"),eN(158,"Disabled"),og()(),Wl(159,"td")(160,"td"),og(),Sl(161,"tr")(162,"td")(163,"code"),eN(164,"--color-disabled"),og()(),Sl(165,"td"),eN(166,"Cor principal no estado disabled"),og(),Sl(167,"td")(168,"code"),eN(169,"var(--color-neutral-mid-40)"),og()()(),Sl(170,"tr")(171,"td")(172,"strong"),eN(173,"Headline"),og()(),Wl(174,"td")(175,"td"),og(),Sl(176,"tr")(177,"td")(178,"code"),eN(179,"--background-color-headline"),og(),eN(180," \xA0"),og(),Sl(181,"td"),eN(182,"Cor do cabe\xE7alho"),og(),Sl(183,"td")(184,"code"),eN(185,"var(--color-neutral-light-10)"),og()()(),Sl(186,"tr")(187,"td")(188,"code"),eN(189,"--font-weight-headline"),og()(),Sl(190,"td"),eN(191,"Peso da fonte do cabe\xE7alho"),og(),Sl(192,"td")(193,"code"),eN(194,"var(--font-weight-bold)"),og()()(),Sl(195,"tr")(196,"td")(197,"strong"),eN(198,"Selected"),og()(),Wl(199,"td")(200,"td"),og(),Sl(201,"tr")(202,"td")(203,"code"),eN(204,"--background-color-selected"),og(),eN(205,"\xA0"),og(),Sl(206,"td"),eN(207,"Cor de background no estado de selecionado"),og(),Sl(208,"td")(209,"code"),eN(210,"var(--color-brand-01-lightest)"),og()()(),Sl(211,"tr")(212,"td")(213,"strong"),eN(214,"Actived"),og()(),Wl(215,"td")(216,"td"),og(),Sl(217,"tr")(218,"td")(219,"code"),eN(220,"--color-actived"),og()(),Sl(221,"td"),eN(222,"Cor do texto no estado de selecionado"),og(),Sl(223,"td")(224,"code"),eN(225,"var(--color-neutral-dark-90)"),og()()(),Sl(226,"tr")(227,"td")(228,"code"),eN(229,"--background-color-actived"),og()(),Sl(230,"td"),eN(231,"Cor de background no estado de selecionado"),og(),Sl(232,"td")(233,"code"),eN(234,"var(--color-brand-01-light)"),og()()()()()(),Sl(235,"div",10)(236,"h4",11),eN(237,"Seletor"),og(),Sl(238,"pre",12),eN(239,`<po-table
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
`),og()(),Sl(240,"h4",13),eN(241,"Propriedades"),og(),Sl(242,"table",14)(243,"tr",15)(244,"th",16),eN(245,"Nome"),og(),Sl(246,"th",16),eN(247,"Tipo"),og(),Sl(248,"th",16),eN(249,"Padr\xE3o"),og(),Sl(250,"th",16),eN(251,"Descri\xE7\xE3o"),og()(),Sl(252,"tr",17)(253,"td",18)(254,"div",19)(255,"span",20),eN(256," p-actions-right"),Wl(257,"br"),og()()(),Sl(258,"td",21)(259,"code",22),eN(260,"boolean"),og()(),Sl(261,"td",23)(262,"p")(263,"code"),eN(264,"false"),og()()(),Sl(265,"td",24)(266,"em")(267,"strong"),eN(268,"(opcional)"),og()(),Sl(269,"p"),eN(270,"Define que a coluna de a\xE7\xF5es ficar\xE1 no lado direito da tabela."),og()()(),Sl(271,"tr",17)(272,"td",18)(273,"div",19)(274,"span",20),eN(275," p-actions"),Wl(276,"br"),og()()(),Sl(277,"td",21)(278,"code",25),eN(279,"PoTableAction[]"),og()(),Sl(280,"td",23),eN(281,"-"),og(),Sl(282,"td",24)(283,"em")(284,"strong"),eN(285,"(opcional)"),og()(),Sl(286,"p"),eN(287,"Define uma lista de a\xE7\xF5es."),og(),Sl(288,"p"),eN(289,`Quando houver apenas uma a\xE7\xE3o definida ela ser\xE1 exibida diretamente na coluna, caso contr\xE1rio, o componente
se encarrega de agrup\xE1-las exibindo o \xEDcone `),Sl(290,"a",26)(291,"strong"),eN(292,"an an-dots-three"),og()(),eN(293," que listar\xE1 as a\xE7\xF5es ao ser clicado."),og(),Sl(294,"p")(295,"strong"),eN(296,"A coluna de a\xE7\xF5es n\xE3o ser\xE1 exibida quando:"),og()(),Sl(297,"ul")(298,"li"),eN(299,"a lista conter valores inv\xE1lidos ou indefinidos."),og(),Sl(300,"li"),eN(301,"tenha uma \xFAnica a\xE7\xE3o e a mesma n\xE3o for vis\xEDvel."),og()()()(),Sl(302,"tr",17)(303,"td",18)(304,"div",27)(305,"span",28),eN(306," (p-all-selected)"),Wl(307,"br"),og()()(),Sl(308,"td",21)(309,"code",29),eN(310,"EventEmitter"),og()(),Sl(311,"td",23),eN(312,"-"),og(),Sl(313,"td",24)(314,"em")(315,"strong"),eN(316,"(opcional)"),og()(),Sl(317,"p"),eN(318,"Evento executado quando todas as linhas s\xE3o selecionadas por meio do "),Sl(319,"em"),eN(320,"checkbox"),og(),eN(321," que seleciona todas as linhas."),og()()(),Sl(322,"tr",17)(323,"td",18)(324,"div",27)(325,"span",28),eN(326," (p-all-unselected)"),Wl(327,"br"),og()()(),Sl(328,"td",21)(329,"code",29),eN(330,"EventEmitter"),og()(),Sl(331,"td",23),eN(332,"-"),og(),Sl(333,"td",24)(334,"em")(335,"strong"),eN(336,"(opcional)"),og()(),Sl(337,"p"),eN(338,"Evento executado quando a sele\xE7\xE3o das linhas \xE9 desmarcada por meio do "),Sl(339,"em"),eN(340,"checkbox"),og(),eN(341," que seleciona todas as linhas."),og()()(),Sl(342,"tr",17)(343,"td",18)(344,"div",19)(345,"span",20),eN(346," p-auto-collapse"),Wl(347,"br"),og()()(),Sl(348,"td",21)(349,"code",22),eN(350,"boolean"),og()(),Sl(351,"td",23)(352,"p")(353,"code"),eN(354,"false"),og()()(),Sl(355,"td",24)(356,"em")(357,"strong"),eN(358,"(opcional)"),og()(),Sl(359,"p"),eN(360,"Permite fechar um detalhe ou row template automaticamente, ao abrir outro item."),og()()(),Sl(361,"tr",17)(362,"td",18)(363,"div",27)(364,"span",28),eN(365," (p-change-fixed-columns)"),Wl(366,"br"),og()()(),Sl(367,"td",21)(368,"code",29),eN(369,"EventEmitter"),og()(),Sl(370,"td",23),eN(371,"-"),og(),Sl(372,"td",24)(373,"em")(374,"strong"),eN(375,"(opcional)"),og()(),Sl(376,"p"),eN(377,"Evento disparado ao alterar o estado de fixa\xE7\xE3o de uma coluna no gerenciador de colunas."),og(),Sl(378,"p"),eN(379,`O componente envia como par\xE2metro um array de string com as propriedades das colunas fixas.
Por exemplo: ["name", "age"].`),og(),Sl(380,"blockquote")(381,"p"),eN(382,"Incompat\xEDvel com "),Sl(383,"code"),eN(384,"p-hide-action-fixed-columns"),og(),eN(385,". Quando esta propriedade estiver ativa, o evento n\xE3o ser\xE1 disparado."),og()()()(),Sl(386,"tr",17)(387,"td",18)(388,"div",27)(389,"span",28),eN(390," (p-change-visible-columns)"),Wl(391,"br"),og()()(),Sl(392,"td",21)(393,"code",29),eN(394,"EventEmitter"),og()(),Sl(395,"td",23),eN(396,"-"),og(),Sl(397,"td",24)(398,"em")(399,"strong"),eN(400,"(opcional)"),og()(),Sl(401,"p"),eN(402,"Evento disparado ao fechar o page slide do gerenciador de colunas ap\xF3s alterar as colunas vis\xEDveis."),og(),Sl(403,"p"),eN(404,`O componente envia como par\xE2metro um array de string com as colunas vis\xEDveis atualizadas.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),og()()(),Sl(405,"tr",17)(406,"td",18)(407,"div",27)(408,"span",28),eN(409," (p-collapsed)"),Wl(410,"br"),og()()(),Sl(411,"td",21)(412,"code",29),eN(413,"EventEmitter"),og()(),Sl(414,"td",23),eN(415,"-"),og(),Sl(416,"td",24)(417,"em")(418,"strong"),eN(419,"(opcional)"),og()(),Sl(420,"p"),eN(421,"Evento executado ao colapsar uma linha do "),Sl(422,"code"),eN(423,"po-table"),og(),eN(424,"."),og(),Sl(425,"blockquote")(426,"p"),eN(427,"Como par\xE2metro o componente envia o item colapsado."),og()()()(),Sl(428,"tr",17)(429,"td",18)(430,"div",27)(431,"span",28),eN(432," (p-restore-column-manager)"),Wl(433,"br"),og()()(),Sl(434,"td",21)(435,"code",29),eN(436,"EventEmitter"),og()(),Sl(437,"td",23),eN(438,"-"),og(),Sl(439,"td",24)(440,"em")(441,"strong"),eN(442,"(opcional)"),og()(),Sl(443,"p"),eN(444,"Evento disparado ao clicar no bot\xE3o de restaurar padr\xE3o no gerenciador de colunas."),og(),Sl(445,"p"),eN(446,`O componente envia como par\xE2metro um array de string com as colunas configuradas inicialmente.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),og()()(),Sl(447,"tr",17)(448,"td",18)(449,"div",19)(450,"span",20),eN(451," p-columns"),Wl(452,"br"),og()()(),Sl(453,"td",21)(454,"code",30),eN(455,"PoTableColumn[]"),og()(),Sl(456,"td",23),eN(457,"-"),og(),Sl(458,"td",24)(459,"em")(460,"strong"),eN(461,"(opcional)"),og()(),Sl(462,"p"),eN(463,"Lista das colunas da tabela, deve receber um "),Sl(464,"em"),eN(465,"array"),og(),eN(466," de objetos que implementam a interface "),Sl(467,"code"),eN(468,"PoTableColumn"),og(),eN(469,`.
Por padr\xE3o receber\xE1 como valor a primeira coluna da lista de itens da tabela.`),og(),Sl(470,"blockquote")(471,"p"),eN(472,"Caso n\xE3o encontre valor, a mensagem 'Nenhuma defini\xE7\xE3o de colunas' ser\xE1 exibida."),og()()()(),Sl(473,"tr",17)(474,"td",18)(475,"div",19)(476,"span",20),eN(477," p-components-size"),Wl(478,"br"),og()()(),Sl(479,"td",21)(480,"code",31),eN(481,"string"),og()(),Sl(482,"td",23)(483,"p")(484,"code"),eN(485,"medium"),og()()(),Sl(486,"td",24)(487,"em")(488,"strong"),eN(489,"(opcional)"),og()(),Sl(490,"p"),eN(491,"Define o tamanho dos componentes de formul\xE1rio no table:"),og(),Sl(492,"ul")(493,"li")(494,"code"),eN(495,"small"),og(),eN(496,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),og(),Sl(497,"li")(498,"code"),eN(499,"medium"),og(),eN(500,": aplica a medida medium de cada componente."),og()(),Sl(501,"blockquote")(502,"p"),eN(503,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Sl(504,"code"),eN(505,"medium"),og(),eN(506,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Sl(507,"a",32),eN(508,"po-theme"),og(),eN(509,"."),og()()()(),Sl(510,"tr",17)(511,"td",18)(512,"div",19)(513,"span",20),eN(514," p-container"),Wl(515,"br"),og()()(),Sl(516,"td",21)(517,"code",31),eN(518,"string"),og()(),Sl(519,"td",23)(520,"p")(521,"code"),eN(522,"border"),og()()(),Sl(523,"td",24)(524,"em")(525,"strong"),eN(526,"(opcional)"),og()(),Sl(527,"p"),eN(528,"Adiciona um contorno arredondado ao "),Sl(529,"code"),eN(530,"po-table"),og(),eN(531,", as op\xE7\xF5es s\xE3o:"),og(),Sl(532,"ul")(533,"li")(534,"code"),eN(535,"border"),og(),eN(536,": com bordas/linhas."),og(),Sl(537,"li")(538,"code"),eN(539,"shadow"),og(),eN(540,": com sombras."),og()()()(),Sl(541,"tr",17)(542,"td",18)(543,"div",19)(544,"span",20),eN(545," p-draggable"),Wl(546,"br"),og()()(),Sl(547,"td",21)(548,"code",22),eN(549,"boolean"),og()(),Sl(550,"td",23)(551,"p")(552,"code"),eN(553,"false"),og()()(),Sl(554,"td",24)(555,"em")(556,"strong"),eN(557,"(opcional)"),og()(),Sl(558,"p"),eN(559,"Habilita o modo drag and drop para as colunas da tabela."),og()()(),Sl(560,"tr",17)(561,"td",18)(562,"div",27)(563,"span",28),eN(564," (p-delete-items)"),Wl(565,"br"),og()()(),Sl(566,"td",21)(567,"code",29),eN(568,"EventEmitter"),og()(),Sl(569,"td",23),eN(570,"-"),og(),Sl(571,"td",24)(572,"em")(573,"strong"),eN(574,"(opcional)"),og()(),Sl(575,"p"),eN(576,"Evento executado ap\xF3s o m\xE9todo de exclus\xE3o ser finalizado."),og(),Sl(577,"pre")(578,"code"),eN(579,`<po-table
 (p-delete-items)="items = $event"
>
</po-table>
`),og()(),Sl(580,"blockquote")(581,"p"),eN(582,"Como par\xE2metro o componente envia a lista atualizada, sem os itens exclu\xEDdos."),og()()()(),Sl(583,"tr",17)(584,"td",18)(585,"div",27)(586,"span",28),eN(587," (p-expanded)"),Wl(588,"br"),og()()(),Sl(589,"td",21)(590,"code",29),eN(591,"EventEmitter"),og()(),Sl(592,"td",23),eN(593,"-"),og(),Sl(594,"td",24)(595,"em")(596,"strong"),eN(597,"(opcional)"),og()(),Sl(598,"p"),eN(599,"Evento executado ao expandir uma linha do "),Sl(600,"code"),eN(601,"po-table"),og(),eN(602,"."),og(),Sl(603,"blockquote")(604,"p"),eN(605,"Como par\xE2metro o componente envia o item expandido."),og()()()(),Sl(606,"tr",17)(607,"td",18)(608,"div",19)(609,"span",20),eN(610," p-filter-type"),Wl(611,"br"),og()()(),Sl(612,"td",21)(613,"code",33),eN(614,"PoSearchFilterMode"),og()(),Sl(615,"td",23)(616,"p")(617,"code"),eN(618,"startsWith"),og()()(),Sl(619,"td",24)(620,"em")(621,"strong"),eN(622,"(opcional)"),og()(),Sl(623,"p"),eN(624,`Define o modo de pesquisa utilizado no campo de busca, quando habilitado.
Valores definidos no enum: PoSearchFilterMode`),og(),Sl(625,"blockquote")(626,"p"),eN(627,`Obs: A pesquisa \xE9 realizada exclusivamente nos dados locais, ou seja, aqueles que foram
renderizados na tabela.`),og()()()(),Sl(628,"tr",17)(629,"td",18)(630,"div",19)(631,"span",20),eN(632," p-filtered-columns"),Wl(633,"br"),og()()(),Sl(634,"td",21)(635,"code",34),eN(636,"Array<string>"),og()(),Sl(637,"td",23),eN(638,"-"),og(),Sl(639,"td",24)(640,"em")(641,"strong"),eN(642,"(opcional)"),og()(),Sl(643,"p"),eN(644,`Define as colunas que ser\xE3o filtradas no campo de pesquisa.
Aceita um array de strings, representando as colunas espec\xEDficas que ser\xE3o consideradas na filtragem.`),og()()(),Sl(645,"tr",17)(646,"td",18)(647,"div",19)(648,"span",20),eN(649," p-height"),Wl(650,"br"),og()()(),Sl(651,"td",21)(652,"code",35),eN(653,"number"),og()(),Sl(654,"td",23),eN(655,"-"),og(),Sl(656,"td",24)(657,"em")(658,"strong"),eN(659,"(opcional)"),og()(),Sl(660,"p"),eN(661,"Define a altura da tabela em "),Sl(662,"em"),eN(663,"pixels"),og(),eN(664," e fixa o cabe\xE7alho."),og(),Sl(665,"p"),eN(666,"Ao utilizar essa propriedade ser\xE1 inserido o "),Sl(667,"code"),eN(668,"virtual-scroll"),og(),eN(669," na tabela melhorando a performance."),og()()(),Sl(670,"tr",17)(671,"td",18)(672,"div",19)(673,"span",20),eN(674," p-hide-action-fixed-columns"),Wl(675,"br"),og()()(),Sl(676,"td",21)(677,"code",22),eN(678,"boolean"),og()(),Sl(679,"td",23)(680,"p")(681,"code"),eN(682,"false"),og()()(),Sl(683,"td",24)(684,"em")(685,"strong"),eN(686,"(opcional)"),og()(),Sl(687,"p"),eN(688,"Permite que as a\xE7\xF5es para fixar uma coluna da tabela sejam escondidas."),og()()(),Sl(689,"tr",17)(690,"td",18)(691,"div",19)(692,"span",20),eN(693," p-hide-batch-actions"),Wl(694,"br"),og()()(),Sl(695,"td",21)(696,"code",22),eN(697,"boolean"),og()(),Sl(698,"td",23)(699,"p")(700,"code"),eN(701,"true"),og()()(),Sl(702,"td",24)(703,"em")(704,"strong"),eN(705,"(opcional)"),og()(),Sl(706,"p"),eN(707,"Permite que as a\xE7\xF5es em lote, respons\xE1vel por excluir e exibir a quantidade de itens, sejam escondidas."),og()()(),Sl(708,"tr",17)(709,"td",18)(710,"div",19)(711,"span",20),eN(712," p-hide-columns-manager"),Wl(713,"br"),og()()(),Sl(714,"td",21)(715,"code",22),eN(716,"boolean"),og()(),Sl(717,"td",23)(718,"p")(719,"code"),eN(720,"false"),og()()(),Sl(721,"td",24)(722,"em")(723,"strong"),eN(724,"(opcional)"),og()(),Sl(725,"p"),eN(726,"Permite que o gerenciador de colunas, respons\xE1vel pela defini\xE7\xE3o de quais colunas ser\xE3o exibidas, seja escondido."),og()()(),Sl(727,"tr",17)(728,"td",18)(729,"div",19)(730,"span",20),eN(731," p-hide-detail"),Wl(732,"br"),og()()(),Sl(733,"td",21)(734,"code",22),eN(735,"boolean"),og()(),Sl(736,"td",23)(737,"p")(738,"code"),eN(739,"false"),og()()(),Sl(740,"td",24)(741,"em")(742,"strong"),eN(743,"(opcional)"),og()(),Sl(744,"p"),eN(745,"Habilita a visualiza\xE7\xE3o da lista de detalhes de cada linha da coluna."),og()()(),Sl(746,"tr",17)(747,"td",18)(748,"div",19)(749,"span",20),eN(750," p-hide-select-all"),Wl(751,"br"),og()()(),Sl(752,"td",21)(753,"code",22),eN(754,"boolean"),og()(),Sl(755,"td",23)(756,"p")(757,"code"),eN(758,"false"),og()()(),Sl(759,"td",24)(760,"p"),eN(761,"Esconde o "),Sl(762,"em"),eN(763,"checkbox"),og(),eN(764," para sele\xE7\xE3o de todas as linhas."),og(),Sl(765,"blockquote")(766,"p"),eN(767,"Sempre receber\xE1 "),Sl(768,"em"),eN(769,"true"),og(),eN(770," caso a sele\xE7\xE3o de apenas uma linha esteja ativa."),og()()()(),Sl(771,"tr",17)(772,"td",18)(773,"div",19)(774,"span",20),eN(775," p-hide-table-search"),Wl(776,"br"),og()()(),Sl(777,"td",21)(778,"code",22),eN(779,"boolean"),og()(),Sl(780,"td",23)(781,"p")(782,"code"),eN(783,"true"),og()()(),Sl(784,"td",24)(785,"em")(786,"strong"),eN(787,"(opcional)"),og()(),Sl(788,"p"),eN(789,"Permite que o campo de pesquisa seja escondido."),og()()(),Sl(790,"tr",17)(791,"td",18)(792,"div",19)(793,"span",20),eN(794," p-infinite-scroll"),Wl(795,"br"),og()()(),Sl(796,"td",21)(797,"code",22),eN(798,"boolean"),og()(),Sl(799,"td",23)(800,"p")(801,"code"),eN(802,"false"),og()()(),Sl(803,"td",24)(804,"em")(805,"strong"),eN(806,"(opcional)"),og()(),Sl(807,"p"),eN(808,`Se verdadeiro, ativa a funcionalidade de scroll infinito para a tabela e o bot\xE3o "Carregar Mais" deixar\xE1 de ser exibido. Ao chegar no fim da tabela
executar\xE1 a fun\xE7\xE3o `),Sl(809,"code"),eN(810,"p-show-more"),og(),eN(811,"."),og(),Sl(812,"p")(813,"strong"),eN(814,"Regras de utiliza\xE7\xE3o:"),og()(),Sl(815,"ul")(816,"li"),eN(817,"O scroll infinito s\xF3 funciona para tabelas que utilizam a propriedade "),Sl(818,"code"),eN(819,"p-height"),og(),eN(820," e que possuem o scroll j\xE1 na carga inicial dos dados."),og()()()(),Sl(821,"tr",17)(822,"td",18)(823,"div",19)(824,"span",20),eN(825," p-infinite-scroll-distance"),Wl(826,"br"),og()()(),Sl(827,"td",21)(828,"code",35),eN(829,"number"),og()(),Sl(830,"td",23),eN(831,"-"),og(),Sl(832,"td",24)(833,"em")(834,"strong"),eN(835,"(opcional)"),og()(),Sl(836,"p"),eN(837,"Define o percentual necess\xE1rio para disparar o evento "),Sl(838,"code"),eN(839,"p-show-more"),og(),eN(840,`, que \xE9 respons\xE1vel por carregar mais dados na tabela. Caso o valor informado seja maior que 100 ou menor
que 0, o valor padr\xE3o ser\xE1 100%`),og(),Sl(841,"p")(842,"strong"),eN(843,"Exemplos:"),og()(),Sl(844,"ul")(845,"li"),eN(846,"p-infinite-scroll-distance = 80: Quando atingir 80% do scroll da tabela, o "),Sl(847,"code"),eN(848,"p-show-more"),og(),eN(849," ser\xE1 disparado."),og()()()(),Sl(850,"tr",17)(851,"td",18)(852,"div",19)(853,"span",20),eN(854," p-items"),Wl(855,"br"),og()()(),Sl(856,"td",21)(857,"code",36),eN(858,"any[]"),og()(),Sl(859,"td",23),eN(860,"-"),og(),Sl(861,"td",24)(862,"p"),eN(863,"Lista de itens da tabela."),og(),Sl(864,"blockquote")(865,"p"),eN(866,"Se falso, ser\xE1 inicializado como um "),Sl(867,"em"),eN(868,"array"),og(),eN(869," vazio."),og()()()(),Sl(870,"tr",17)(871,"td",18)(872,"div",19)(873,"span",20),eN(874," p-literals"),Wl(875,"br"),og()()(),Sl(876,"td",21)(877,"code",37),eN(878,"PoTableLiterals"),og()(),Sl(879,"td",23),eN(880,"-"),og(),Sl(881,"td",24)(882,"em")(883,"strong"),eN(884,"(opcional)"),og()(),Sl(885,"p"),eN(886,"Objeto com as literais usadas no "),Sl(887,"code"),eN(888,"po-table"),og(),eN(889,"."),og(),Sl(890,"p"),eN(891,"Existem duas maneiras de customizar o componente, passando um objeto com todas as literais dispon\xEDveis:"),og(),Sl(892,"pre")(893,"code"),eN(894,`const customLiterals: PoTableLiterals = {
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
`),og()(),Sl(895,"p"),eN(896,"Ou passando apenas as literais que deseja customizar:"),og(),Sl(897,"pre")(898,"code"),eN(899,`const customLiterals: PoTableLiterals = {
  noData: 'Sem dados'
};
`),og()(),Sl(900,"p"),eN(901,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente."),og(),Sl(902,"pre")(903,"code"),eN(904,`<po-table
  [p-literals]="customLiterals">
</po-table>
`),og()(),Sl(905,"blockquote")(906,"p"),eN(907,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),Sl(908,"a",38)(909,"code"),eN(910,"PoI18nService"),og()(),eN(911," ou do browser."),og()()()(),Sl(912,"tr",17)(913,"td",18)(914,"div",19)(915,"span",20),eN(916," p-loading"),Wl(917,"br"),og()()(),Sl(918,"td",21)(919,"code",22),eN(920,"boolean"),og()(),Sl(921,"td",23)(922,"p")(923,"code"),eN(924,"false"),og()()(),Sl(925,"td",24)(926,"em")(927,"strong"),eN(928,"(opcional)"),og()(),Sl(929,"p"),eN(930,"Bloqueia a intera\xE7\xE3o do usu\xE1rio com os dados da "),Sl(931,"em"),eN(932,"table"),og(),eN(933,"."),og()()(),Sl(934,"tr",17)(935,"td",18)(936,"div",19)(937,"span",20),eN(938," p-loading-show-more"),Wl(939,"br"),og()()(),Sl(940,"td",21)(941,"code",22),eN(942,"boolean"),og()(),Sl(943,"td",23)(944,"p")(945,"code"),eN(946,"false"),og()()(),Sl(947,"td",24)(948,"em")(949,"strong"),eN(950,"(opcional)"),og()(),Sl(951,"p"),eN(952,'Permite que seja adicionado o estado de carregamento no bot\xE3o "Carregar mais resultados".'),og()()(),Sl(953,"tr",17)(954,"td",18)(955,"div",19)(956,"span",20),eN(957," p-max-columns"),Wl(958,"br"),og()()(),Sl(959,"td",21)(960,"code",35),eN(961,"number"),og()(),Sl(962,"td",23),eN(963,"-"),og(),Sl(964,"td",24)(965,"em")(966,"strong"),eN(967,"(opcional)"),og()(),Sl(968,"p"),eN(969,"Define uma quantidade m\xE1xima de colunas que ser\xE3o exibidas na tabela."),og(),Sl(970,"p"),eN(971,`Quando chegar no valor informado, as colunas que n\xE3o estiverem selecionadas ficar\xE3o
desabilitadas e caso houver mais colunas vis\xEDveis do que o permitido, as excedentes
ser\xE3o ignoradas por ordem de posi\xE7\xE3o.`),og()()(),Sl(972,"tr",17)(973,"td",18)(974,"div",19)(975,"span",20),eN(976," p-param-delete-api"),Wl(977,"br"),og()()(),Sl(978,"td",21)(979,"code",31),eN(980,"string"),og()(),Sl(981,"td",23)(982,"p")(983,"code"),eN(984,"id"),og()()(),Sl(985,"td",24)(986,"em")(987,"strong"),eN(988,"(opcional)"),og()(),Sl(989,"p"),eN(990,"Adiciona o par\xE2metro a ser enviado para a requisi\xE7\xE3o de DELETE."),og(),Sl(991,"p"),eN(992,"\xC9 necess\xE1rio a utiliza\xE7\xE3o da propriedade "),Sl(993,"code"),eN(994,"p-service-delete"),og(),eN(995," em conjunto."),og()()(),Sl(996,"tr",17)(997,"td",18)(998,"div",19)(999,"span",20),eN(1e3," p-selectable"),Wl(1001,"br"),og()()(),Sl(1002,"td",21)(1003,"code",22),eN(1004,"boolean"),og()(),Sl(1005,"td",23)(1006,"p")(1007,"code"),eN(1008,"false"),og()()(),Sl(1009,"td",24)(1010,"em")(1011,"strong"),eN(1012,"(opcional)"),og()(),Sl(1013,"p"),eN(1014,"Permite a sele\xE7\xE3o de linhas na tabela e, caso a propriedade "),Sl(1015,"code"),eN(1016,"p-single-select"),og(),eN(1017,` esteja definida ser\xE1 poss\xEDvel
selecionar apenas uma \xFAnica linha.`),og(),Sl(1018,"p")(1019,"strong"),eN(1020,"Importante:"),og()(),Sl(1021,"ul")(1022,"li"),eN(1023,"As linhas de detalhe definidas em "),Sl(1024,"code"),eN(1025,"PoTableDetail"),og(),eN(1026," possuem comportamento independente da linha mestre;"),og(),Sl(1027,"li"),eN(1028,"Cada linha possui por padr\xE3o a propriedade din\xE2mica "),Sl(1029,"code"),eN(1030,"$selected"),og(),eN(1031,`, na qual \xE9 poss\xEDvel validar se a linha
est\xE1 selecionada, por exemplo: `),Sl(1032,"code"),eN(1033,"item.$selected"),og(),eN(1034," ou "),Sl(1035,"code"),eN(1036,"item['$selected']"),og(),eN(1037,"."),og()()()(),Sl(1038,"tr",17)(1039,"td",18)(1040,"div",19)(1041,"span",20),eN(1042," p-selectable-entire-line"),Wl(1043,"br"),og()()(),Sl(1044,"td",21)(1045,"code",22),eN(1046,"boolean"),og()(),Sl(1047,"td",23)(1048,"p")(1049,"code"),eN(1050,"true"),og()()(),Sl(1051,"td",24)(1052,"p"),eN(1053,"Permite selecionar um item da tabela clicando na linha."),og(),Sl(1054,"blockquote")(1055,"p"),eN(1056,"Caso haja necessidade de selecionar o item apenas via radio ou checkbox, deve-se definir esta propriedade como "),Sl(1057,"code"),eN(1058,"false"),og(),eN(1059,"."),og()()()(),Sl(1060,"tr",17)(1061,"td",18)(1062,"div",27)(1063,"span",28),eN(1064," (p-selected)"),Wl(1065,"br"),og()()(),Sl(1066,"td",21)(1067,"code",29),eN(1068,"EventEmitter"),og()(),Sl(1069,"td",23),eN(1070,"-"),og(),Sl(1071,"td",24)(1072,"em")(1073,"strong"),eN(1074,"(opcional)"),og()(),Sl(1075,"p"),eN(1076,"Evento executado ao selecionar uma linha do "),Sl(1077,"code"),eN(1078,"po-table"),og(),eN(1079,"."),og()()(),Sl(1080,"tr",17)(1081,"td",18)(1082,"div",19)(1083,"span",20),eN(1084," p-service-api"),Wl(1085,"br"),og()()(),Sl(1086,"td",21)(1087,"code",31),eN(1088,"string"),og()(),Sl(1089,"td",23),eN(1090,"-"),og(),Sl(1091,"td",24)(1092,"em")(1093,"strong"),eN(1094,"(opcional)"),og()(),Sl(1095,"p"),eN(1096,"URL da API respons\xE1vel por retornar os registros."),og(),Sl(1097,"p"),eN(1098,"Ao realizar a busca de mais registros via pagina\xE7\xE3o (Carregar mais resultados), ser\xE1 enviado os par\xE2metros "),Sl(1099,"code"),eN(1100,"page"),og(),eN(1101," e "),Sl(1102,"code"),eN(1103,"pageSize"),og(),eN(1104,", conforme abaixo:"),og(),Sl(1105,"pre")(1106,"code"),eN(1107,`url + ?page=1&pageSize=10
`),og()(),Sl(1108,"p"),eN(1109,"Caso utilizar ordena\xE7\xE3o, a coluna ordenada ser\xE1 enviada atrav\xE9s do par\xE2metro "),Sl(1110,"code"),eN(1111,"order"),og(),eN(1112,", por exemplo:"),og(),Sl(1113,"ul")(1114,"li")(1115,"p"),eN(1116,"Coluna decrescente:"),og(),Sl(1117,"pre")(1118,"code"),eN(1119,`url + ?page=1&pageSize=10&order=-name
`),og()()(),Sl(1120,"li")(1121,"p"),eN(1122,"Coluna ascendente:"),og(),Sl(1123,"pre")(1124,"code"),eN(1125,`url + ?page=1&pageSize=10&order=name
`),og()()()(),Sl(1126,"blockquote")(1127,"p"),eN(1128,"Esta URL deve retornar e receber os dados no padr\xE3o de "),Sl(1129,"a",39),eN(1130,"API do PO UI"),og(),eN(1131,"."),og()()()(),Sl(1132,"tr",17)(1133,"td",18)(1134,"div",19)(1135,"span",20),eN(1136," p-service-delete"),Wl(1137,"br"),og()()(),Sl(1138,"td",21)(1139,"code",31),eN(1140,"string"),og()(),Sl(1141,"td",23),eN(1142,"-"),og(),Sl(1143,"td",24)(1144,"em")(1145,"strong"),eN(1146,"(opcional)"),og()(),Sl(1147,"p"),eN(1148,"URL da API respons\xE1vel por excluir os registros."),og(),Sl(1149,"p"),eN(1150,"Ao selecionar o bot\xE3o de excluir itens, essa url ser\xE1 executada utilizando o par\xE2metro enviado na propriedade "),Sl(1151,"code"),eN(1152,"p-param-delete-api"),og(),eN(1153,`.
Caso ela n\xE3o seja utilizada, o par\xE2metro padr\xE3o a ser enviado ser\xE1 `),Sl(1154,"code"),eN(1155,"id"),og(),eN(1156,"."),og(),Sl(1157,"blockquote")(1158,"p"),eN(1159,"Esta URL deve retornar e receber os dados no padr\xE3o de "),Sl(1160,"a",39),eN(1161,"API do PO UI"),og(),eN(1162,"."),og()()()(),Sl(1163,"tr",17)(1164,"td",18)(1165,"div",27)(1166,"span",28),eN(1167," (p-show-more)"),Wl(1168,"br"),og()()(),Sl(1169,"td",21)(1170,"code",29),eN(1171,"EventEmitter"),og()(),Sl(1172,"td",23),eN(1173,"-"),og(),Sl(1174,"td",24)(1175,"em")(1176,"strong"),eN(1177,"(opcional)"),og()(),Sl(1178,"p"),eN(1179,`Recebe uma a\xE7\xE3o de clique para o bot\xE3o "Carregar mais resultados", caso nenhuma a\xE7\xE3o for definida o mesmo
n\xE3o \xE9 vis\xEDvel.`),og(),Sl(1180,"p"),eN(1181,"Recebe um objeto "),Sl(1182,"code"),eN(1183,"{ column, type }"),og(),eN(1184," onde:"),og(),Sl(1185,"ul")(1186,"li"),eN(1187,"column ("),Sl(1188,"code"),eN(1189,"PoTableColumn"),og(),eN(1190,"): objeto da coluna que est\xE1 ordenada."),og(),Sl(1191,"li"),eN(1192,"type ("),Sl(1193,"code"),eN(1194,"PoTableColumnSortType"),og(),eN(1195,"): tipo da ordena\xE7\xE3o."),og()()()(),Sl(1196,"tr",17)(1197,"td",18)(1198,"div",19)(1199,"span",20),eN(1200," p-show-more-disabled"),Wl(1201,"br"),og()()(),Sl(1202,"td",21)(1203,"code",22),eN(1204,"boolean"),og()(),Sl(1205,"td",23)(1206,"p")(1207,"code"),eN(1208,"false"),og()()(),Sl(1209,"td",24)(1210,"p"),eN(1211,'Se verdadeiro, torna habilitado o bot\xE3o "Carregar mais resultados".'),og()()(),Sl(1212,"tr",17)(1213,"td",18)(1214,"div",19)(1215,"span",20),eN(1216," p-single-select"),Wl(1217,"br"),og()()(),Sl(1218,"td",21)(1219,"code",22),eN(1220,"boolean"),og()(),Sl(1221,"td",23),eN(1222,"-"),og(),Sl(1223,"td",24)(1224,"p"),eN(1225,"Define que somente uma linha da tabela pode ser selecionada."),og(),Sl(1226,"blockquote")(1227,"p"),eN(1228,"Esta defini\xE7\xE3o n\xE3o se aplica aos itens filhos, os mesmos possuem comportamento independente do item pai."),og()()()(),Sl(1229,"tr",17)(1230,"td",18)(1231,"div",19)(1232,"span",20),eN(1233," p-sort"),Wl(1234,"br"),og()()(),Sl(1235,"td",21)(1236,"code",22),eN(1237,"boolean"),og()(),Sl(1238,"td",23)(1239,"p")(1240,"code"),eN(1241,"false"),og()()(),Sl(1242,"td",24)(1243,"em")(1244,"strong"),eN(1245,"(opcional)"),og()(),Sl(1246,"p"),eN(1247,`Habilita em todas as colunas a op\xE7\xE3o de ordena\xE7\xE3o de dados. Caso a coluna seja do tipo 'data' ou 'dateTime' a
mesma deve respeitar os tipos de entrada definidos para que sejam ordenadas.`),og()()(),Sl(1248,"tr",17)(1249,"td",18)(1250,"div",27)(1251,"span",28),eN(1252," (p-sort-by)"),Wl(1253,"br"),og()()(),Sl(1254,"td",21)(1255,"code",29),eN(1256,"EventEmitter"),og()(),Sl(1257,"td",23),eN(1258,"-"),og(),Sl(1259,"td",24)(1260,"em")(1261,"strong"),eN(1262,"(opcional)"),og()(),Sl(1263,"p"),eN(1264,"Evento executado ao ordenar colunas da tabela."),og(),Sl(1265,"p"),eN(1266,"Recebe um objeto "),Sl(1267,"code"),eN(1268,"{ column, type }"),og(),eN(1269," onde:"),og(),Sl(1270,"ul")(1271,"li"),eN(1272,"column ("),Sl(1273,"code"),eN(1274,"PoTableColumn"),og(),eN(1275,"): objeto da coluna que foi clicada/ordenada."),og(),Sl(1276,"li"),eN(1277,"type ("),Sl(1278,"code"),eN(1279,"PoTableColumnSortType"),og(),eN(1280,"): tipo da ordena\xE7\xE3o."),og()()()(),Sl(1281,"tr",17)(1282,"td",18)(1283,"div",19)(1284,"span",20),eN(1285," p-spacing"),Wl(1286,"br"),og()()(),Sl(1287,"td",21)(1288,"code",31),eN(1289,"string"),og()(),Sl(1290,"td",23)(1291,"p")(1292,"code"),eN(1293,"medium"),og()()(),Sl(1294,"td",24)(1295,"em")(1296,"strong"),eN(1297,"(opcional)"),og()(),Sl(1298,"p"),eN(1299,`Define o espa\xE7amento interno das c\xE9lulas, impactando diretamente na altura das linhas do table. Os valores
permitidos s\xE3o definidos pelo enum `),Sl(1300,"strong"),eN(1301,"PoTableColumnSpacing"),og(),eN(1302,"."),og(),Sl(1303,"blockquote")(1304,"p"),eN(1305,"Em n\xEDvel de acessibilidade "),Sl(1306,"strong"),eN(1307,"AA"),og(),eN(1308,", caso o valor de "),Sl(1309,"code"),eN(1310,"p-spacing"),og(),eN(1311," n\xE3o seja definido, o valor padr\xE3o ser\xE1 "),Sl(1312,"code"),eN(1313,"extraSmall"),og(),eN(1314,`
nos seguintes cen\xE1rios:`),og(),Sl(1315,"ul")(1316,"li"),eN(1317,"Quando o valor de "),Sl(1318,"code"),eN(1319,"p-components-size"),og(),eN(1320," for "),Sl(1321,"code"),eN(1322,"small"),og(),eN(1323,";"),og(),Sl(1324,"li"),eN(1325,"Quando o valor padr\xE3o dos componentes for configurado como "),Sl(1326,"code"),eN(1327,"small"),og(),eN(1328,` no
`),Sl(1329,"a",32),eN(1330,"servi\xE7o de tema"),og(),eN(1331,"."),og()()()()(),Sl(1332,"tr",17)(1333,"td",18)(1334,"div",19)(1335,"span",20),eN(1336," p-striped"),Wl(1337,"br"),og()()(),Sl(1338,"td",21)(1339,"code",22),eN(1340,"boolean"),og()(),Sl(1341,"td",23)(1342,"p")(1343,"code"),eN(1344,"false"),og()()(),Sl(1345,"td",24)(1346,"p"),eN(1347,"Habilita ou desabilita o estilo listrado da tabela ("),Sl(1348,"code"),eN(1349,"striped"),og(),eN(1350,")."),og(),Sl(1351,"blockquote")(1352,"p"),eN(1353,"Recomendado para tabelas com maior n\xFAmero de dados, facilitando a sua visualiza\xE7\xE3o na tabela."),og()()()(),Sl(1354,"tr",17)(1355,"td",18)(1356,"div",19)(1357,"span",20),eN(1358," p-text-wrap"),Wl(1359,"br"),og()()(),Sl(1360,"td",21)(1361,"code",22),eN(1362,"boolean"),og()(),Sl(1363,"td",23)(1364,"p")(1365,"code"),eN(1366,"false"),og()()(),Sl(1367,"td",24)(1368,"em")(1369,"strong"),eN(1370,"(opcional)"),og()(),Sl(1371,"p"),eN(1372,`Habilita ou desabilita a quebra autom\xE1tica de texto. Quando ativada, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),og(),Sl(1373,"blockquote")(1374,"p"),eN(1375,"Incompat\xEDvel com "),Sl(1376,"code"),eN(1377,"virtual-scroll"),og(),eN(1378,", que requer altura fixa nas linhas."),og()()()(),Sl(1379,"tr",17)(1380,"td",18)(1381,"div",27)(1382,"span",28),eN(1383," (p-unselected)"),Wl(1384,"br"),og()()(),Sl(1385,"td",21)(1386,"code",29),eN(1387,"EventEmitter"),og()(),Sl(1388,"td",23),eN(1389,"-"),og(),Sl(1390,"td",24)(1391,"em")(1392,"strong"),eN(1393,"(opcional)"),og()(),Sl(1394,"p"),eN(1395,"Evento executado ao desmarcar a sele\xE7\xE3o de uma linha do "),Sl(1396,"code"),eN(1397,"po-table"),og(),eN(1398,"."),og()()(),Sl(1399,"tr",17)(1400,"td",18)(1401,"div",19)(1402,"span",20),eN(1403," p-virtual-scroll"),Wl(1404,"br"),og()()(),Sl(1405,"td",21)(1406,"code",22),eN(1407,"boolean"),og()(),Sl(1408,"td",23)(1409,"p")(1410,"code"),eN(1411,"true"),og()()(),Sl(1412,"td",24)(1413,"em")(1414,"strong"),eN(1415,"(opcional)"),og()(),Sl(1416,"p"),eN(1417,"Habilita o "),Sl(1418,"code"),eN(1419,"virtual-scroll"),og(),eN(1420,` na tabela para melhorar a performance com grandes volumes de dados.
Requer altura (`),Sl(1421,"code"),eN(1422,"p-height"),og(),eN(1423,") para funcionar corretamente."),og(),Sl(1424,"blockquote")(1425,"p"),eN(1426,"Incompat\xEDvel com "),Sl(1427,"code"),eN(1428,"p-text-wrap"),og(),eN(1429," e "),Sl(1430,"code"),eN(1431,"master-detail"),og(),eN(1432,", pois o "),Sl(1433,"code"),eN(1434,"virtual-scroll"),og(),eN(1435," exige altura fixa nas linhas."),og()()()()(),Sl(1436,"h3",13),eN(1437,"M\xE9todos"),og(),Sl(1438,"table",40)(1439,"tr",17)(1440,"th",41)(1441,"div",19)(1442,"h4")(1443,"span",20),eN(1444," applyFilters "),og()()()()(),Sl(1445,"tr",24)(1446,"td",24)(1447,"p"),eN(1448,"M\xE9todo respons\xE1vel por realizar busca no servi\xE7o de dados podendo informar filtros e com o retorno, atualiza a tabela."),og(),Sl(1449,"p"),eN(1450,"Caso n\xE3o seja informado par\xE2metro, nada ser\xE1 adicionado ao GET, conforme abaixo:"),og(),Sl(1451,"pre")(1452,"code"),eN(1453,`url + ?page=1&pageSize=10
`),og()(),Sl(1454,"blockquote")(1455,"p"),eN(1456,"Obs: os par\xE2metros "),Sl(1457,"code"),eN(1458,"page"),og(),eN(1459," e "),Sl(1460,"code"),eN(1461,"pageSize"),og(),eN(1462," sempre ser\xE3o chamados independente de ser enviados outros par\xE2metros."),og()(),Sl(1463,"p"),eN(1464,"Caso sejam informados os par\xE2metros "),Sl(1465,"code"),eN(1466,"{ name: 'JOHN', age: '23' }"),og(),eN(1467,", todos ser\xE3o adicionados ao GET, conforme abaixo:"),og(),Sl(1468,"pre")(1469,"code"),eN(1470,`url + ?page=1&pageSize=10&name=JOHN&age=23
`),og()()()()(),Sl(1471,"h5")(1472,"b"),eN(1473,"Par\xE2metros"),og()(),Sl(1474,"table",14)(1475,"tr",15)(1476,"th",16),eN(1477,"Nome"),og(),Sl(1478,"th",16),eN(1479,"Tipo"),og(),Sl(1480,"th",16),eN(1481,"Descri\xE7\xE3o"),og()(),Sl(1482,"tr",17)(1483,"td",18),eN(1484," queryParams"),og(),Sl(1485,"td",21)(1486,"code",42),eN(1487," { key: value } "),og()(),Sl(1488,"td",24)(1489,"p"),eN(1490,"Formato do objeto a ser enviado."),og(),Sl(1491,"blockquote")(1492,"p"),eN(1493,"Pode ser utilizada qualquer string como key, e qualquer string ou number como value."),og()()()()(),Wl(1494,"br"),Sl(1495,"table",40)(1496,"tr",17)(1497,"th",41)(1498,"div",19)(1499,"h4")(1500,"span",20),eN(1501," applyFixedColumns "),og()()()()(),Sl(1502,"tr",24)(1503,"td",24)(1504,"p"),eN(1505,"Verifica se columns possuem a propriedade width."),og()()()(),Wl(1506,"br"),Sl(1507,"table",40)(1508,"tr",17)(1509,"th",41)(1510,"div",19)(1511,"h4")(1512,"span",20),eN(1513," collapse "),og()()()()(),Sl(1514,"tr",24)(1515,"td",24)(1516,"p"),eN(1517,"M\xE9todo que colapsa uma linha com detalhe quando executada."),og()()()(),Sl(1518,"h5")(1519,"b"),eN(1520,"Par\xE2metros"),og()(),Sl(1521,"table",14)(1522,"tr",15)(1523,"th",16),eN(1524,"Nome"),og(),Sl(1525,"th",16),eN(1526,"Tipo"),og(),Sl(1527,"th",16),eN(1528,"Descri\xE7\xE3o"),og()(),Sl(1529,"tr",17)(1530,"td",18),eN(1531," rowIndex"),og(),Sl(1532,"td",21)(1533,"code",43),eN(1534," number "),og()(),Sl(1535,"td",24)(1536,"p"),eN(1537,"\xCDndice da linha que ser\xE1 colapsada."),og(),Sl(1538,"blockquote")(1539,"p"),eN(1540,"Ao reordenar os dados da tabela, o valor contido neste \xEDndice ser\xE1 alterado conforme a ordena\xE7\xE3o."),og()()()()(),Wl(1541,"br"),Sl(1542,"table",40)(1543,"tr",17)(1544,"th",41)(1545,"div",19)(1546,"h4")(1547,"span",20),eN(1548," expand "),og()()()()(),Sl(1549,"tr",24)(1550,"td",24)(1551,"p"),eN(1552,"M\xE9todo que expande uma linha com detalhe quando executada."),og()()()(),Sl(1553,"h5")(1554,"b"),eN(1555,"Par\xE2metros"),og()(),Sl(1556,"table",14)(1557,"tr",15)(1558,"th",16),eN(1559,"Nome"),og(),Sl(1560,"th",16),eN(1561,"Tipo"),og(),Sl(1562,"th",16),eN(1563,"Descri\xE7\xE3o"),og()(),Sl(1564,"tr",17)(1565,"td",18),eN(1566," rowIndex"),og(),Sl(1567,"td",21)(1568,"code",43),eN(1569," number "),og()(),Sl(1570,"td",24)(1571,"p"),eN(1572,"\xCDndice da linha que ser\xE1 expandida."),og(),Sl(1573,"blockquote")(1574,"p"),eN(1575,"Ao reordenar os dados da tabela, o valor contido neste \xEDndice ser\xE1 alterado conforme a ordena\xE7\xE3o."),og()()()()(),Wl(1576,"br"),Sl(1577,"table",40)(1578,"tr",17)(1579,"th",41)(1580,"div",19)(1581,"h4")(1582,"span",20),eN(1583," getSelectedRows "),og()()()()(),Sl(1584,"tr",24)(1585,"td",24)(1586,"p"),eN(1587,"Retorna as linhas do "),Sl(1588,"code"),eN(1589,"po-table"),og(),eN(1590," que est\xE3o selecionadas."),og()()()(),Wl(1591,"br"),Sl(1592,"table",40)(1593,"tr",17)(1594,"th",41)(1595,"div",19)(1596,"h4")(1597,"span",20),eN(1598," getUnselectedRows "),og()()()()(),Sl(1599,"tr",24)(1600,"td",24)(1601,"p"),eN(1602,"Retorna as linhas do "),Sl(1603,"code"),eN(1604,"po-table"),og(),eN(1605," que n\xE3o est\xE3o selecionadas."),og()()()(),Wl(1606,"br"),Sl(1607,"table",40)(1608,"tr",17)(1609,"th",41)(1610,"div",19)(1611,"h4")(1612,"span",20),eN(1613," unselectRows "),og()()()()(),Sl(1614,"tr",24)(1615,"td",24)(1616,"p"),eN(1617,"Desmarca as linhas que est\xE3o selecionadas."),og()()()(),Wl(1618,"br"),Sl(1619,"table",40)(1620,"tr",17)(1621,"th",41)(1622,"div",19)(1623,"h4")(1624,"span",20),eN(1625," unselectRowItem "),og()()()()(),Sl(1626,"tr",24)(1627,"td",24)(1628,"p"),eN(1629,"Desmarca uma linha que est\xE1 selecionada."),og()()()(),Wl(1630,"br"),Sl(1631,"table",40)(1632,"tr",17)(1633,"th",41)(1634,"div",19)(1635,"h4")(1636,"span",20),eN(1637," selectRowItem "),og()()()()(),Sl(1638,"tr",24)(1639,"td",24)(1640,"p"),eN(1641,"Seleciona uma linha do 'po-table'."),og()()()(),Wl(1642,"br"),Sl(1643,"table",40)(1644,"tr",17)(1645,"th",41)(1646,"div",19)(1647,"h4")(1648,"span",20),eN(1649," deleteItems "),og()()()()(),Sl(1650,"tr",24)(1651,"td",24)(1652,"p"),eN(1653,`M\xE9todo respons\xE1vel pela exclus\xE3o de itens em lote.
Caso a tabela esteja executando a propriedade `),Sl(1654,"code"),eN(1655,"p-service-delete"),og(),eN(1656,", ser\xE1 necess\xE1rio excluir 1 item por vez."),og(),Sl(1657,"p"),eN(1658,"Ao utilizar "),Sl(1659,"code"),eN(1660,"p-service-delete"),og(),eN(1661," mas sem a propriedade "),Sl(1662,"code"),eN(1663,"p-service-api"),og(),eN(1664,`, ser\xE1 responsabilidade do usu\xE1rio o tratamento
ap\xF3s a requisi\xE7\xE3o DELETE ser executada.`),og(),Sl(1665,"p"),eN(1666,"Caso a tabela utilize "),Sl(1667,"code"),eN(1668,"p-height"),og(),eN(1669," e esteja sem servi\xE7o, \xE9 necess\xE1rio a reatribui\xE7\xE3o dos itens utilizando o evento "),Sl(1670,"code"),eN(1671,"(p-delete-items)"),og(),eN(1672,", por exemplo:"),og(),Sl(1673,"pre")(1674,"code"),eN(1675,`<po-table
 (p-delete-items)="items = $event"
>
</po-table>
`),og()()()()(),Wl(1676,"br"),Sl(1677,"table",40)(1678,"tr",17)(1679,"th",41)(1680,"div",19)(1681,"h4")(1682,"span",20),eN(1683," removeItem "),og()()()()(),Sl(1684,"tr",24)(1685,"td",24)(1686,"p"),eN(1687,"M\xE9todo que remove um item da tabela."),og()()()(),Sl(1688,"h5")(1689,"b"),eN(1690,"Par\xE2metros"),og()(),Sl(1691,"table",14)(1692,"tr",15)(1693,"th",16),eN(1694,"Nome"),og(),Sl(1695,"th",16),eN(1696,"Tipo"),og(),Sl(1697,"th",16),eN(1698,"Descri\xE7\xE3o"),og()(),Sl(1699,"tr",17)(1700,"td",18),eN(1701," item"),og(),Sl(1702,"td",21)(1703,"code",35),eN(1704," number "),og(),Sl(1705,"code",42),eN(1706," { key: value } "),og()(),Sl(1707,"td",24)(1708,"p"),eN(1709,"\xCDndice da linha ou o item que ser\xE1 removido."),og(),Sl(1710,"blockquote")(1711,"p"),eN(1712,"Ao remover o item, a linha que o representa ser\xE1 exclu\xEDda da tabela."),og()()()()(),Wl(1713,"br"),Sl(1714,"table",40)(1715,"tr",17)(1716,"th",41)(1717,"div",19)(1718,"h4")(1719,"span",20),eN(1720," updateItem "),og()()()()(),Sl(1721,"tr",24)(1722,"td",24)(1723,"p"),eN(1724,"M\xE9todo que atualiza um item da tabela."),og()()()(),Sl(1725,"h5")(1726,"b"),eN(1727,"Par\xE2metros"),og()(),Sl(1728,"table",14)(1729,"tr",15)(1730,"th",16),eN(1731,"Nome"),og(),Sl(1732,"th",16),eN(1733,"Tipo"),og(),Sl(1734,"th",16),eN(1735,"Descri\xE7\xE3o"),og()(),Sl(1736,"tr",17)(1737,"td",18),eN(1738," item"),og(),Sl(1739,"td",21)(1740,"code",35),eN(1741," number "),og(),Sl(1742,"code",42),eN(1743," { key: value } "),og()(),Sl(1744,"td",24)(1745,"p"),eN(1746,"\xCDndice da linha ou o item que ser\xE1 atualizado."),og()()(),Sl(1747,"tr",17)(1748,"td",18),eN(1749," updatedItem"),og(),Sl(1750,"td",21)(1751,"code",42),eN(1752," { key: value } "),og()(),Sl(1753,"td",24)(1754,"p"),eN(1755,"Item que foi atualizado."),og(),Sl(1756,"blockquote")(1757,"p"),eN(1758,"Ao atualizar o item, a informa\xE7\xE3o ser\xE1 alterada na tabela."),og()()()()(),Wl(1759,"br"),Sl(1760,"h3"),eN(1761,"Interfaces"),og(),Sl(1762,"h4",44)(1763,"code",5),eN(1764,"PoTableAction"),og()(),Sl(1765,"div",2)(1766,"p"),eN(1767,"Interface para lista de a\xE7\xF5es do componente. "),og()(),Sl(1768,"h4",13),eN(1769,"Propriedades"),og(),Sl(1770,"table",14)(1771,"tr",15)(1772,"th",16),eN(1773,"Nome"),og(),Sl(1774,"th",16),eN(1775,"Tipo"),og(),Sl(1776,"th",16),eN(1777,"Descri\xE7\xE3o"),og()(),Sl(1778,"tr",17)(1779,"td",18)(1780,"div",19)(1781,"span",20),eN(1782," action"),Wl(1783,"br"),og()()(),Sl(1784,"td",21)(1785,"code",45),eN(1786,"Function"),og()(),Sl(1787,"td",24)(1788,"em")(1789,"strong"),eN(1790,"(opcional)"),og()(),Sl(1791,"p"),eN(1792,"A\xE7\xE3o que ser\xE1 executada, sendo poss\xEDvel passar o nome ou a refer\xEAncia da fun\xE7\xE3o."),og(),Sl(1793,"p"),eN(1794,"A action tamb\xE9m pode ser executada para o agrupador de subitens quando a a\xE7\xE3o possuir "),Sl(1795,"code"),eN(1796,"subItems"),og(),eN(1797,"."),og(),Sl(1798,"blockquote")(1799,"p"),eN(1800,"Para que a fun\xE7\xE3o seja executada no contexto do componente, utilize "),Sl(1801,"em"),eN(1802,"bind"),og(),eN(1803,`:
`),Sl(1804,"code"),eN(1805,"action: this.myFunction.bind(this)"),og()()()()(),Sl(1806,"tr",17)(1807,"td",18)(1808,"div",19)(1809,"span",20),eN(1810," disabled"),Wl(1811,"br"),og()()(),Sl(1812,"td",21)(1813,"code",22),eN(1814,"boolean "),og(),Sl(1815,"code",45),eN(1816," Function"),og()(),Sl(1817,"td",24)(1818,"em")(1819,"strong"),eN(1820,"(opcional)"),og()(),Sl(1821,"p"),eN(1822,"Desabilita a a\xE7\xE3o. Aceita um valor booleano ou uma fun\xE7\xE3o que retorna booleano."),og()()(),Sl(1823,"tr",17)(1824,"td",18)(1825,"div",19)(1826,"span",20),eN(1827," icon"),Wl(1828,"br"),og()()(),Sl(1829,"td",21)(1830,"code",31),eN(1831,"string "),og(),Sl(1832,"code",46),eN(1833," TemplateRef<void>"),og()(),Sl(1834,"td",24)(1835,"em")(1836,"strong"),eN(1837,"(opcional)"),og()(),Sl(1838,"p"),eN(1839,"\xCDcone exibido ao lado esquerdo do r\xF3tulo."),og(),Sl(1840,"p"),eN(1841,"Aceita \xEDcones da "),Sl(1842,"a",26),eN(1843,"Biblioteca de \xEDcones"),og(),eN(1844,`, fontes externas (ex: Font Awesome)
ou um `),Sl(1845,"code"),eN(1846,"TemplateRef"),og(),eN(1847," para \xEDcones customizados."),og(),Sl(1848,"pre")(1849,"code"),eN(1850,`{ label: 'A\xE7\xE3o', icon: 'an an-newspaper' }
`),og()()()(),Sl(1851,"tr",17)(1852,"td",18)(1853,"div",19)(1854,"span",20),eN(1855," label"),Wl(1856,"br"),og()()(),Sl(1857,"td",21)(1858,"code",31),eN(1859,"string"),og()(),Sl(1860,"td",24)(1861,"p"),eN(1862,"R\xF3tulo da a\xE7\xE3o."),og(),Sl(1863,"p"),eN(1864,"A label tamb\xE9m pode representar o agrupador de subitens quando a a\xE7\xE3o possuir "),Sl(1865,"code"),eN(1866,"subItems"),og(),eN(1867,"."),og()()(),Sl(1868,"tr",17)(1869,"td",18)(1870,"div",19)(1871,"span",20),eN(1872," selected"),Wl(1873,"br"),og()()(),Sl(1874,"td",21)(1875,"code",22),eN(1876,"boolean"),og()(),Sl(1877,"td",24)(1878,"em")(1879,"strong"),eN(1880,"(opcional)"),og()(),Sl(1881,"p"),eN(1882,"Define se a a\xE7\xE3o est\xE1 selecionada."),og()()(),Sl(1883,"tr",17)(1884,"td",18)(1885,"div",19)(1886,"span",20),eN(1887," separator"),Wl(1888,"br"),og()()(),Sl(1889,"td",21)(1890,"code",22),eN(1891,"boolean"),og()(),Sl(1892,"td",24)(1893,"em")(1894,"strong"),eN(1895,"(opcional)"),og()(),Sl(1896,"p"),eN(1897,"Atribui uma linha separadora acima do item."),og()()(),Sl(1898,"tr",17)(1899,"td",18)(1900,"div",19)(1901,"span",20),eN(1902," subItems"),Wl(1903,"br"),og()()(),Sl(1904,"td",21)(1905,"code",47),eN(1906,"Array<PoPopupAction>"),og()(),Sl(1907,"td",24)(1908,"em")(1909,"strong"),eN(1910,"(opcional)"),og()(),Sl(1911,"p"),eN(1912,"Define uma lista de subitens para cria\xE7\xE3o de menus aninhados."),og(),Sl(1913,"p"),eN(1914,`Ao definir esta propriedade, o item exibir\xE1 um \xEDcone indicador de subn\xEDvel.
Recomenda-se utilizar no m\xE1ximo tr\xEAs n\xEDveis hier\xE1rquicos para garantir a usabilidade.`),og(),Sl(1915,"blockquote")(1916,"p"),eN(1917,"As propriedades "),Sl(1918,"code"),eN(1919,"disabled"),og(),eN(1920,", "),Sl(1921,"code"),eN(1922,"type"),og(),eN(1923," e "),Sl(1924,"code"),eN(1925,"visible"),og(),eN(1926," n\xE3o s\xE3o aplicadas visualmente ao item agrupador."),og()(),Sl(1927,"blockquote")(1928,"p"),eN(1929,"Quando "),Sl(1930,"code"),eN(1931,"url"),og(),eN(1932," \xE9 informada em um agrupador, o redirecionamento ter\xE1 prioridade e os subitens n\xE3o ser\xE3o abertos."),og()(),Sl(1933,"blockquote")(1934,"p"),eN(1935,"Em subn\xEDveis aninhados, o "),Sl(1936,"code"),eN(1937,"icon"),og(),eN(1938," do agrupador \xE9 substitu\xEDdo pelo indicador de navega\xE7\xE3o (seta)."),og()()()(),Sl(1939,"tr",17)(1940,"td",18)(1941,"div",19)(1942,"span",20),eN(1943," type"),Wl(1944,"br"),og()()(),Sl(1945,"td",21)(1946,"code",31),eN(1947,"string"),og()(),Sl(1948,"td",24)(1949,"em")(1950,"strong"),eN(1951,"(opcional)"),og()(),Sl(1952,"p"),eN(1953,"Define a cor do item."),og(),Sl(1954,"p"),eN(1955,"Valores v\xE1lidos:"),og(),Sl(1956,"ul")(1957,"li")(1958,"code"),eN(1959,"default"),og()(),Sl(1960,"li")(1961,"code"),eN(1962,"danger"),og()()()()(),Sl(1963,"tr",17)(1964,"td",18)(1965,"div",19)(1966,"span",20),eN(1967," url"),Wl(1968,"br"),og()()(),Sl(1969,"td",21)(1970,"code",31),eN(1971,"string"),og()(),Sl(1972,"td",24)(1973,"em")(1974,"strong"),eN(1975,"(opcional)"),og()(),Sl(1976,"p"),eN(1977,"URL para redirecionamento. Aceita rotas internas e links externos."),og(),Sl(1978,"p"),eN(1979,`A url tamb\xE9m pode ser configurada para o agrupador de subitens.
Entretanto, quando a `),Sl(1980,"code"),eN(1981,"url"),og(),eN(1982," \xE9 informada em um agrupador, o clique "),Sl(1983,"strong"),eN(1984,"n\xE3o abrir\xE1 os subitens"),og(),eN(1985,`, pois o item ser\xE1
tratado como um link e o redirecionamento ter\xE1 prioridade sobre a exibi\xE7\xE3o da lista.`),og(),Sl(1986,"blockquote")(1987,"p"),eN(1988,"Quando informada, tem prioridade sobre a propriedade "),Sl(1989,"code"),eN(1990,"action"),og(),eN(1991,"."),og()()()(),Sl(1992,"tr",17)(1993,"td",18)(1994,"div",19)(1995,"span",20),eN(1996," visible"),Wl(1997,"br"),og()()(),Sl(1998,"td",21)(1999,"code",22),eN(2e3,"boolean "),og(),Sl(2001,"code",45),eN(2002," Function"),og()(),Sl(2003,"td",24)(2004,"em")(2005,"strong"),eN(2006,"(opcional)"),og()(),Sl(2007,"p"),eN(2008,"Define a visibilidade da a\xE7\xE3o. Aceita um valor booleano ou uma fun\xE7\xE3o que retorna booleano."),og()()()(),Sl(2009,"h4",44)(2010,"code",5),eN(2011,"PoTableBoolean"),og()(),Sl(2012,"div",2)(2013,"p"),eN(2014,"Interface que define as colunas booleanas do "),Sl(2015,"code"),eN(2016,"po-table"),og(),eN(2017,"."),og()(),Sl(2018,"h4",13),eN(2019,"Propriedades"),og(),Sl(2020,"table",14)(2021,"tr",15)(2022,"th",16),eN(2023,"Nome"),og(),Sl(2024,"th",16),eN(2025,"Tipo"),og(),Sl(2026,"th",16),eN(2027,"Descri\xE7\xE3o"),og()(),Sl(2028,"tr",17)(2029,"td",18)(2030,"div",19)(2031,"span",20),eN(2032," falseLabel"),Wl(2033,"br"),og()()(),Sl(2034,"td",21)(2035,"code",31),eN(2036,"string"),og()(),Sl(2037,"td",24)(2038,"em")(2039,"strong"),eN(2040,"(opcional)"),og()(),Sl(2041,"p"),eN(2042,"Define o r\xF3tulo para valores "),Sl(2043,"code"),eN(2044,"false"),og(),eN(2045,"."),og()()(),Sl(2046,"tr",17)(2047,"td",18)(2048,"div",19)(2049,"span",20),eN(2050," trueLabel"),Wl(2051,"br"),og()()(),Sl(2052,"td",21)(2053,"code",31),eN(2054,"string"),og()(),Sl(2055,"td",24)(2056,"em")(2057,"strong"),eN(2058,"(opcional)"),og()(),Sl(2059,"p"),eN(2060,"Define o r\xF3tulo para valores "),Sl(2061,"code"),eN(2062,"true"),og(),eN(2063,"."),og()()()(),Sl(2064,"h4",44)(2065,"code",5),eN(2066,"PoTableColumnSort"),og()(),Sl(2067,"div",2)(2068,"p"),eN(2069,"Interface para ordena\xE7\xE3o das colunas do componente table."),og()(),Sl(2070,"h4",13),eN(2071,"Propriedades"),og(),Sl(2072,"table",14)(2073,"tr",15)(2074,"th",16),eN(2075,"Nome"),og(),Sl(2076,"th",16),eN(2077,"Tipo"),og(),Sl(2078,"th",16),eN(2079,"Descri\xE7\xE3o"),og()(),Sl(2080,"tr",17)(2081,"td",18)(2082,"div",19)(2083,"span",20),eN(2084," column"),Wl(2085,"br"),og()()(),Sl(2086,"td",21)(2087,"code",48),eN(2088,"PoTableColumn"),og()(),Sl(2089,"td",24)(2090,"em")(2091,"strong"),eN(2092,"(opcional)"),og()(),Sl(2093,"p"),eN(2094,"Coluna pela qual a tabela est\xE1 ordenada."),og()()(),Sl(2095,"tr",17)(2096,"td",18)(2097,"div",19)(2098,"span",20),eN(2099," type"),Wl(2100,"br"),og()()(),Sl(2101,"td",21)(2102,"code",49),eN(2103,"PoTableColumnSortType"),og()(),Sl(2104,"td",24)(2105,"p"),eN(2106,"Tipo da ordena\xE7\xE3o."),og()()()(),Sl(2107,"h4",44)(2108,"code",5),eN(2109,"PoTableColumn"),og()(),Sl(2110,"div",2)(2111,"p"),eN(2112,"Interface para configura\xE7\xE3o das colunas do "),Sl(2113,"code"),eN(2114,"po-table"),og(),eN(2115,"."),og(),Sl(2116,"p"),eN(2117,"As defini\xE7\xF5es das colunas ser\xE3o aplicadas linha a linha."),og()(),Sl(2118,"h4",13),eN(2119,"Propriedades"),og(),Sl(2120,"table",14)(2121,"tr",15)(2122,"th",16),eN(2123,"Nome"),og(),Sl(2124,"th",16),eN(2125,"Tipo"),og(),Sl(2126,"th",16),eN(2127,"Descri\xE7\xE3o"),og()(),Sl(2128,"tr",17)(2129,"td",18)(2130,"div",19)(2131,"span",20),eN(2132," action"),Wl(2133,"br"),og()()(),Sl(2134,"td",21)(2135,"code",45),eN(2136,"Function"),og()(),Sl(2137,"td",24)(2138,"em")(2139,"strong"),eN(2140,"(opcional)"),og()(),Sl(2141,"p"),eN(2142,"Define uma a\xE7\xE3o na coluna quando o tipo da coluna for "),Sl(2143,"code"),eN(2144,"link"),og(),eN(2145," ou "),Sl(2146,"code"),eN(2147,"icon"),og(),eN(2148,"."),og(),Sl(2149,"blockquote")(2150,"p"),eN(2151,"Quando for do tipo "),Sl(2152,"code"),eN(2153,"link"),og(),eN(2154,` ser\xE1 enviado como primeiro par\xE2metro o valor da coluna
e no segundo par\xE2metro o objeto completo da linha. Caso tenha sido definido uma a\xE7\xE3o e um link na coluna, a a\xE7\xE3o
ser\xE1 executada ao inv\xE9s do link.`),og()(),Sl(2155,"blockquote")(2156,"p"),eN(2157,"Quando for do tipo "),Sl(2158,"code"),eN(2159,"icon"),og(),eN(2160," enviar\xE1 o objeto completo da linha e o segundo par\xE2metro ser\xE1 a defini\xE7\xE3o da coluna."),og()()()(),Sl(2161,"tr",17)(2162,"td",18)(2163,"div",19)(2164,"span",20),eN(2165," boolean"),Wl(2166,"br"),og()()(),Sl(2167,"td",21)(2168,"code",50),eN(2169,"PoTableBoolean"),og()(),Sl(2170,"td",24)(2171,"em")(2172,"strong"),eN(2173,"(opcional)"),og()(),Sl(2174,"p"),eN(2175,"Define um objeto do tipo "),Sl(2176,"code"),eN(2177,"PoTableBoolean"),og(),eN(2178," para as colunas do tipo "),Sl(2179,"em"),eN(2180,"boolean"),og(),eN(2181,". Por exemplo:"),og(),Sl(2182,"pre")(2183,"code"),eN(2184,`{ property: 'approbation', type: 'boolean', boolean: {
  trueLabel: 'Accepted', falseLabel: 'Rejected'
}}
`),og()(),Sl(2185,"blockquote")(2186,"p"),eN(2187,"Caso n\xE3o seja definido um objeto para colunas do tipo "),Sl(2188,"em"),eN(2189,"boolean"),og(),eN(2190,`,
esta exibir\xE1 por padr\xE3o `),Sl(2191,"code"),eN(2192,"Sim"),og(),eN(2193," e "),Sl(2194,"code"),eN(2195,"N\xE3o"),og(),eN(2196," de acordo com os valores "),Sl(2197,"em"),eN(2198,"booleanos"),og(),eN(2199,"."),og()()()(),Sl(2200,"tr",17)(2201,"td",18)(2202,"div",19)(2203,"span",20),eN(2204," color"),Wl(2205,"br"),og()()(),Sl(2206,"td",21)(2207,"code",31),eN(2208,"string "),og(),Sl(2209,"code",45),eN(2210," Function"),og()(),Sl(2211,"td",24)(2212,"em")(2213,"strong"),eN(2214,"(opcional)"),og()(),Sl(2215,"p"),eN(2216,"Define a cor que ser\xE1 aplicada no conte\xFAdo da coluna."),og(),Sl(2217,"p"),eN(2218,"Valores v\xE1lidos:"),og(),Sl(2219,"ul")(2220,"li"),Wl(2221,"span",51),Sl(2222,"code"),eN(2223,"color-01"),og()(),Sl(2224,"li"),Wl(2225,"span",52),Sl(2226,"code"),eN(2227,"color-02"),og()(),Sl(2228,"li"),Wl(2229,"span",53),Sl(2230,"code"),eN(2231,"color-03"),og()(),Sl(2232,"li"),Wl(2233,"span",54),Sl(2234,"code"),eN(2235,"color-04"),og()(),Sl(2236,"li"),Wl(2237,"span",55),Sl(2238,"code"),eN(2239,"color-05"),og()(),Sl(2240,"li"),Wl(2241,"span",56),Sl(2242,"code"),eN(2243,"color-06"),og()(),Sl(2244,"li"),Wl(2245,"span",57),Sl(2246,"code"),eN(2247,"color-07"),og()(),Sl(2248,"li"),Wl(2249,"span",58),Sl(2250,"code"),eN(2251,"color-08"),og()(),Sl(2252,"li"),Wl(2253,"span",59),Sl(2254,"code"),eN(2255,"color-09"),og()(),Sl(2256,"li"),Wl(2257,"span",60),Sl(2258,"code"),eN(2259,"color-10"),og()(),Sl(2260,"li"),Wl(2261,"span",61),Sl(2262,"code"),eN(2263,"color-11"),og()(),Sl(2264,"li"),Wl(2265,"span",62),Sl(2266,"code"),eN(2267,"color-12"),og()()(),Sl(2268,"blockquote")(2269,"p"),eN(2270,"Tamb\xE9m \xE9 poss\xEDvel utilizar as 35 cores da paleta "),Sl(2271,"strong"),eN(2272,"Caption Tag Colors"),og(),eN(2273,":"),og()(),Sl(2274,"ul")(2275,"li"),Wl(2276,"span",63),Sl(2277,"code"),eN(2278,"caption-tag-01"),og(),Wl(2279,"span",64),Sl(2280,"code"),eN(2281,"caption-tag-02"),og(),Wl(2282,"span",65),Sl(2283,"code"),eN(2284,"caption-tag-03"),og(),Wl(2285,"span",66),Sl(2286,"code"),eN(2287,"caption-tag-04"),og(),Wl(2288,"span",67),Sl(2289,"code"),eN(2290,"caption-tag-05"),og()(),Sl(2291,"li"),Wl(2292,"span",68),Sl(2293,"code"),eN(2294,"caption-tag-06"),og(),Wl(2295,"span",69),Sl(2296,"code"),eN(2297,"caption-tag-07"),og(),Wl(2298,"span",70),Sl(2299,"code"),eN(2300,"caption-tag-08"),og(),Wl(2301,"span",71),Sl(2302,"code"),eN(2303,"caption-tag-09"),og(),Wl(2304,"span",72),Sl(2305,"code"),eN(2306,"caption-tag-10"),og()(),Sl(2307,"li"),Wl(2308,"span",73),Sl(2309,"code"),eN(2310,"caption-tag-11"),og(),Wl(2311,"span",74),Sl(2312,"code"),eN(2313,"caption-tag-12"),og(),Wl(2314,"span",75),Sl(2315,"code"),eN(2316,"caption-tag-13"),og(),Wl(2317,"span",76),Sl(2318,"code"),eN(2319,"caption-tag-14"),og(),Wl(2320,"span",77),Sl(2321,"code"),eN(2322,"caption-tag-15"),og()(),Sl(2323,"li"),Wl(2324,"span",78),Sl(2325,"code"),eN(2326,"caption-tag-16"),og(),Wl(2327,"span",79),Sl(2328,"code"),eN(2329,"caption-tag-17"),og(),Wl(2330,"span",80),Sl(2331,"code"),eN(2332,"caption-tag-18"),og(),Wl(2333,"span",81),Sl(2334,"code"),eN(2335,"caption-tag-19"),og(),Wl(2336,"span",82),Sl(2337,"code"),eN(2338,"caption-tag-20"),og()(),Sl(2339,"li"),Wl(2340,"span",83),Sl(2341,"code"),eN(2342,"caption-tag-21"),og(),Wl(2343,"span",84),Sl(2344,"code"),eN(2345,"caption-tag-22"),og(),Wl(2346,"span",85),Sl(2347,"code"),eN(2348,"caption-tag-23"),og(),Wl(2349,"span",86),Sl(2350,"code"),eN(2351,"caption-tag-24"),og(),Wl(2352,"span",87),Sl(2353,"code"),eN(2354,"caption-tag-25"),og()(),Sl(2355,"li"),Wl(2356,"span",88),Sl(2357,"code"),eN(2358,"caption-tag-26"),og(),Wl(2359,"span",89),Sl(2360,"code"),eN(2361,"caption-tag-27"),og(),Wl(2362,"span",90),Sl(2363,"code"),eN(2364,"caption-tag-28"),og(),Wl(2365,"span",91),Sl(2366,"code"),eN(2367,"caption-tag-29"),og(),Wl(2368,"span",92),Sl(2369,"code"),eN(2370,"caption-tag-30"),og()(),Sl(2371,"li"),Wl(2372,"span",93),Sl(2373,"code"),eN(2374,"caption-tag-31"),og(),Wl(2375,"span",94),Sl(2376,"code"),eN(2377,"caption-tag-32"),og(),Wl(2378,"span",95),Sl(2379,"code"),eN(2380,"caption-tag-33"),og(),Wl(2381,"span",96),Sl(2382,"code"),eN(2383,"caption-tag-34"),og(),Wl(2384,"span",97),Sl(2385,"code"),eN(2386,"caption-tag-35"),og()()(),Sl(2387,"blockquote")(2388,"p"),eN(2389,`Existe a possibilidade de informar uma fun\xE7\xE3o que retorne um dos valores aceitos, ser\xE3o passados
por par\xE2metro a linha e a coluna atual, por exemplo:`),og()(),Sl(2390,"pre")(2391,"code"),eN(2392,`(row, column) => { row[column] == 'text' ? 'color-03' : 'color-09' }
`),og()(),Sl(2393,"blockquote")(2394,"p"),eN(2395,"\xC9 poss\xEDvel tamb\xE9m us\xE1-la na coluna do tipo "),Sl(2396,"code"),eN(2397,"icons"),og(),eN(2398,` para altera\xE7\xE3o das cores de seu conte\xFAdo conforme exemplo abaixo,
contudo, desta forma sobrep\xF5e a cor especificada em cada objeto caso haja:`),og()(),Sl(2399,"pre")(2400,"code"),eN(2401,`{ property: 'columnIcon', label: 'Like', type: 'icon', color: 'color-08', icons: [
  { value: 'an an-star', action: () => this.notification() }
]},
`),og()()()(),Sl(2402,"tr",17)(2403,"td",18)(2404,"div",19)(2405,"span",20),eN(2406," detail"),Wl(2407,"br"),og()()(),Sl(2408,"td",21)(2409,"code",98),eN(2410,"PoTableDetail"),og()(),Sl(2411,"td",24)(2412,"em")(2413,"strong"),eN(2414,"(opcional)"),og()(),Sl(2415,"p"),eN(2416,"Define um objeto que segue a interface "),Sl(2417,"code"),eN(2418,"PoTableDetail"),og(),eN(2419,", para as colunas de detalhes. Por exemplo:"),og(),Sl(2420,"pre")(2421,"code"),eN(2422,`{ columns: [{ property: 'package', label: 'Pacote' }], typeHeader: 'top' }
`),og()()()(),Sl(2423,"tr",17)(2424,"td",18)(2425,"div",19)(2426,"span",20),eN(2427," disabled"),Wl(2428,"br"),og()()(),Sl(2429,"td",21)(2430,"code",45),eN(2431,"Function"),og()(),Sl(2432,"td",24)(2433,"em")(2434,"strong"),eN(2435,"(opcional)"),og()(),Sl(2436,"p"),eN(2437,"Fun\xE7\xE3o que deve retornar um booleano para habilitar ou desabilitar o "),Sl(2438,"em"),eN(2439,"link"),og(),eN(2440," e sua a\xE7\xE3o."),og(),Sl(2441,"blockquote")(2442,"p"),eN(2443,"Propriedade dispon\xEDvel nas colunas do tipo "),Sl(2444,"code"),eN(2445,"link"),og(),eN(2446,"."),og()()()(),Sl(2447,"tr",17)(2448,"td",18)(2449,"div",19)(2450,"span",20),eN(2451," format"),Wl(2452,"br"),og()()(),Sl(2453,"td",21)(2454,"code",31),eN(2455,"string"),og()(),Sl(2456,"td",24)(2457,"em")(2458,"strong"),eN(2459,"(opcional)"),og()(),Sl(2460,"p"),eN(2461,"Formato de exibi\xE7\xE3o do valor da coluna."),og(),Sl(2462,"table")(2463,"thead")(2464,"tr")(2465,"th"),eN(2466,"Formata\xE7\xE3o"),og(),Sl(2467,"th"),eN(2468,"Type da Coluna"),og(),Sl(2469,"th"),eN(2470,"Descri\xE7\xE3o"),og(),Sl(2471,"th"),eN(2472,"Exemplos"),og()()(),Sl(2473,"tbody")(2474,"tr")(2475,"td"),eN(2476,"Monet\xE1rio"),og(),Sl(2477,"td")(2478,"code"),eN(2479,"currency"),og()(),Sl(2480,"td"),eN(2481,"Formato para valores monet\xE1rios. Informe o c\xF3digo da moeda (ISO 4217)."),og(),Sl(2482,"td")(2483,"code"),eN(2484,"'BRL'"),og(),eN(2485,", "),Sl(2486,"code"),eN(2487,"'USD'"),og(),eN(2488,", "),Sl(2489,"code"),eN(2490,"'EUR'"),og(),eN(2491,", "),Sl(2492,"code"),eN(2493,"'RUB'"),og()()(),Sl(2494,"tr")(2495,"td"),eN(2496,"Data"),og(),Sl(2497,"td")(2498,"code"),eN(2499,"date"),og()(),Sl(2500,"td"),eN(2501,"Aceita apenas os caracteres de dia(dd), m\xEAs(MM) e ano (yyyy ou yy), caso n\xE3o seja informado um formato o mesmo ser\xE1 'dd/MM/yyyy'"),og(),Sl(2502,"td")(2503,"code"),eN(2504,"'dd/MM/yyyy'"),og(),eN(2505,", "),Sl(2506,"code"),eN(2507,"'dd-MM-yy'"),og(),eN(2508,", "),Sl(2509,"code"),eN(2510,"'mm/dd/yyyy'"),og()()(),Sl(2511,"tr")(2512,"td"),eN(2513,"Hora"),og(),Sl(2514,"td")(2515,"code"),eN(2516,"time"),og()(),Sl(2517,"td"),eN(2518,"Aceita apenas os caracteres de hora(HH), minutos(mm), segundos(ss) e milisegundos(f-ffffff), os milisegundos s\xE3o opcionais, caso n\xE3o seja informado um formato o mesmo ser\xE1 'HH:mm:ss'"),og(),Sl(2519,"td")(2520,"code"),eN(2521,"'HH:mm'"),og(),eN(2522,", "),Sl(2523,"code"),eN(2524,"'HH:mm:ss.ffffff'"),og(),eN(2525,", "),Sl(2526,"code"),eN(2527,"'HH:mm:ss.ff'"),og(),eN(2528,", "),Sl(2529,"code"),eN(2530,"'mm:ss.fff'"),og()()(),Sl(2531,"tr")(2532,"td"),eN(2533,"N\xFAmero"),og(),Sl(2534,"td")(2535,"code"),eN(2536,"number"),og()(),Sl(2537,"td"),eN(2538,"Aceita um valor seguindo o padr\xE3o "),Sl(2539,"a",99)(2540,"strong"),eN(2541,"DecimalPipe"),og()(),eN(2542," para formata\xE7\xE3o, e caso n\xE3o seja informado, o n\xFAmero ser\xE1 exibido na sua forma original."),og(),Sl(2543,"td")(2544,"code"),eN(2545,"'1.2-5'"),og(),eN(2546," (ex.: "),Sl(2547,"code"),eN(2548,"50"),og(),eN(2549," \u2192 "),Sl(2550,"code"),eN(2551,"50.00"),og(),eN(2552,")"),og()()()(),Sl(2553,"p"),eN(2554,"Observa\xE7\xE3o: caso n\xE3o seja informado um formato, o valor ser\xE1 exibido em sua forma original."),og()()(),Sl(2555,"tr",17)(2556,"td",18)(2557,"div",19)(2558,"span",20),eN(2559," icons"),Wl(2560,"br"),og()()(),Sl(2561,"td",21)(2562,"code",100),eN(2563,"Array<PoTableColumnIcon>"),og()(),Sl(2564,"td",24)(2565,"em")(2566,"strong"),eN(2567,"(opcional)"),og()(),Sl(2568,"p"),eN(2569,"Define um "),Sl(2570,"em"),eN(2571,"array"),og(),eN(2572," de objetos para colunas de \xEDcones que ir\xE1 sobrepor os valores como "),Sl(2573,"code"),eN(2574,"action"),og(),eN(2575," e "),Sl(2576,"code"),eN(2577,"color"),og(),eN(2578,`
definidos na coluna, \xE0 partir do `),Sl(2579,"em"),eN(2580,"value"),og(),eN(2581," da "),Sl(2582,"a",101)(2583,"code"),eN(2584,"PoTableColumnIcon"),og()(),eN(2585,", por exemplo:"),og(),Sl(2586,"pre")(2587,"code"),eN(2588,`{ property: 'columnIcon', label: 'Icons', type: 'icon', action: this.favorite.bind(this), icons: [
  { value: 'delete', icon: 'an an-plus', color: 'color-06', action: this.add.bind(this), tooltip: 'Adiciona um novo item' },
  { value: 'edit', icon: 'an an-pencil-simple', action: this.edit.bind(this) },
  { value: 'delete', icon: 'an an-trash', color: 'color-12', action: this.remove.bind(this) }
]},
`),og()(),Sl(2589,"pre")(2590,"code"),eN(2591,`...
{ id: 1, columnIcon: ['an an-pencil-simple', 'an an-trash', 'an an-star'] }
...
`),og()()()(),Sl(2592,"tr",17)(2593,"td",18)(2594,"div",19)(2595,"span",20),eN(2596," label"),Wl(2597,"br"),og()()(),Sl(2598,"td",21)(2599,"code",31),eN(2600,"string"),og()(),Sl(2601,"td",24)(2602,"em")(2603,"strong"),eN(2604,"(opcional)"),og()(),Sl(2605,"p"),eN(2606,"Texto para t\xEDtulo da coluna."),og(),Sl(2607,"p"),eN(2608,"Caso n\xE3o seja informado, ser\xE1 utilizado como "),Sl(2609,"em"),eN(2610,"label"),og(),eN(2611," o valor da propriedade "),Sl(2612,"em"),eN(2613,"property"),og(),eN(2614," com a primeira letra em mai\xFAsculo."),og()()(),Sl(2615,"tr",17)(2616,"td",18)(2617,"div",19)(2618,"span",20),eN(2619," labels"),Wl(2620,"br"),og()()(),Sl(2621,"td",21)(2622,"code",102),eN(2623,"Array<PoTableColumnLabel>"),og()(),Sl(2624,"td",24)(2625,"em")(2626,"strong"),eN(2627,"(opcional)"),og()(),Sl(2628,"p"),eN(2629,`Define um array de objetos para as colunas de label, onde 'labels' \xE9 uma lista de objetos
do tipo `),Sl(2630,"code"),eN(2631,"PoTableColumnLabel"),og(),eN(2632," na qual devem ser definidas os labels. Por exemplo:"),og(),Sl(2633,"pre")(2634,"code"),eN(2635,`{ property: 'flightStatus', label: 'Status', type: 'label', width:'100px', labels: [
 { value: 'confirmed', color: 'caption-tag-13', label: 'Confirmado', tooltip: 'Flight Status' },
 { value: 'delayed', color: 'caption-tag-08', label: 'Atrasado', tooltip: 'Flight Status' }
}
`),og()()()(),Sl(2636,"tr",17)(2637,"td",18)(2638,"div",19)(2639,"span",20),eN(2640," link"),Wl(2641,"br"),og()()(),Sl(2642,"td",21)(2643,"code",31),eN(2644,"string"),og()(),Sl(2645,"td",24)(2646,"em")(2647,"strong"),eN(2648,"(opcional)"),og()(),Sl(2649,"p"),eN(2650,"Define o nome da propriedade que conter\xE1 o "),Sl(2651,"code"),eN(2652,"link"),og(),eN(2653," a ser redirecionado."),og()()(),Sl(2654,"tr",17)(2655,"td",18)(2656,"div",19)(2657,"span",20),eN(2658," property"),Wl(2659,"br"),og()()(),Sl(2660,"td",21)(2661,"code",31),eN(2662,"string"),og()(),Sl(2663,"td",24)(2664,"em")(2665,"strong"),eN(2666,"(opcional)"),og()(),Sl(2667,"p"),eN(2668,"Nome identificador da coluna. Tamb\xE9m permite objetos aninhados conforme exemplo abaixo."),og(),Sl(2669,"pre")(2670,"code"),eN(2671,`{ property: 'address.street', label: 'Rua' }
`),og()()()(),Sl(2672,"tr",17)(2673,"td",18)(2674,"div",19)(2675,"span",20),eN(2676," sortable"),Wl(2677,"br"),og()()(),Sl(2678,"td",21)(2679,"code",22),eN(2680,"boolean"),og()(),Sl(2681,"td",24)(2682,"em")(2683,"strong"),eN(2684,"(opcional)"),og()(),Sl(2685,"p"),eN(2686,`Controla se a coluna ser\xE1 considerada como "ordenavel". Caso seja definido um valor falso, a coluna n\xE3o ser\xE1 usada para
ordena\xE7\xE3o.`),og()()(),Sl(2687,"tr",17)(2688,"td",18)(2689,"div",19)(2690,"span",20),eN(2691," subtitles"),Wl(2692,"br"),og()()(),Sl(2693,"td",21)(2694,"code",103),eN(2695,"Array<PoTableSubtitleColumn>"),og()(),Sl(2696,"td",24)(2697,"em")(2698,"strong"),eN(2699,"(opcional)"),og()(),Sl(2700,"p"),eN(2701,"Define um array de objetos para as colunas de legenda. Onde, "),Sl(2702,"code"),eN(2703,"subtitles"),og(),eN(2704,` \xE9 uma lista de objetos do tipo PoTableSubtitle na qual
devem ser definidas as op\xE7\xF5es de legenda. Por exemplo:`),og(),Sl(2705,"pre")(2706,"code"),eN(2707,`{ property: 'flightStatus', label: 'Status', color: 'subtitle', width:'100px', subtitles: [
 { value: 'confirmed', color: 'caption-tag-13', label: 'Confirmado', content: '1' },
 { value: 'delayed', color: 'caption-tag-08', label: 'Atrasado', content: '2' }
}
`),og()(),Sl(2708,"p"),eN(2709,`Nesse exemplo a coluna escolhida para legenda \xE9 'flightStatus', se o valor dessa coluna for 'confirmed', o texto da legenda ser\xE1
'Confirmado'.`),og()()(),Sl(2710,"tr",17)(2711,"td",18)(2712,"div",19)(2713,"span",20),eN(2714," tooltip"),Wl(2715,"br"),og()()(),Sl(2716,"td",21)(2717,"code",31),eN(2718,"string"),og()(),Sl(2719,"td",24)(2720,"em")(2721,"strong"),eN(2722,"(opcional)"),og()(),Sl(2723,"p"),eN(2724,"Define um texto de ajuda que ser\xE1 exibido ao passar o "),Sl(2725,"em"),eN(2726,"mouse"),og(),eN(2727," sobre um texto."),og(),Sl(2728,"blockquote")(2729,"p"),eN(2730,"O tooltip s\xF3 ser\xE1 vis\xEDvel se for uma coluna do tipo "),Sl(2731,"em"),eN(2732,"link"),og(),eN(2733,"."),og()(),Sl(2734,"blockquote")(2735,"p"),eN(2736,`Caso o conte\xFAdo da c\xE9lula exceder a largura da coluna,
\xE9 ignorado o valor atribu\xEDdo ao `),Sl(2737,"em"),eN(2738,"tooltip"),og(),eN(2739," e ser\xE1 exibido justamente o conte\xFAdo da c\xE9lula."),og()()()(),Sl(2740,"tr",17)(2741,"td",18)(2742,"div",19)(2743,"span",20),eN(2744," type"),Wl(2745,"br"),og()()(),Sl(2746,"td",21)(2747,"code",31),eN(2748,"string"),og()(),Sl(2749,"td",24)(2750,"em")(2751,"strong"),eN(2752,"(opcional)"),og()(),Sl(2753,"p"),eN(2754,"Tipo da coluna."),og(),Sl(2755,"p"),eN(2756,"Valores v\xE1lidos:"),og(),Sl(2757,"ul")(2758,"li")(2759,"p")(2760,"code"),eN(2761,"boolean"),og(),eN(2762,": Exibir\xE1 por padr\xE3o "),Sl(2763,"code"),eN(2764,"Sim"),og(),eN(2765," e "),Sl(2766,"code"),eN(2767,"N\xE3o"),og(),eN(2768," de acordo com os valores "),Sl(2769,"em"),eN(2770,"booleanos"),og(),eN(2771,"."),og(),Sl(2772,"blockquote")(2773,"p"),eN(2774,"Caso necessite exibir valores diferentes do padr\xE3o, deve-se utilizar a propriedade "),Sl(2775,"code"),eN(2776,"boolean"),og(),eN(2777," desta interface."),og()()(),Sl(2778,"li")(2779,"p")(2780,"code"),eN(2781,"currency"),og(),eN(2782,": valores monet\xE1rios."),og()(),Sl(2783,"li")(2784,"p")(2785,"code"),eN(2786,"date"),og(),eN(2787,": valor de datas."),og(),Sl(2788,"ul")(2789,"li"),eN(2790,"Aceita os tipos "),Sl(2791,"em"),eN(2792,"string"),og(),eN(2793," e "),Sl(2794,"em"),eN(2795,"Date"),og(),eN(2796,` padr\xE3o do Javascript,
por exemplo: `),Sl(2797,"code"),eN(2798,"'2017-11-28'"),og(),eN(2799," ou "),Sl(2800,"code"),eN(2801,"new Date(2017, 10, 28)"),og(),eN(2802,"."),og()()(),Sl(2803,"li")(2804,"p")(2805,"code"),eN(2806,"dateTime"),og(),eN(2807,": valor de data com hor\xE1rio."),og(),Sl(2808,"ul")(2809,"li"),eN(2810,"Aceita o tipo "),Sl(2811,"em"),eN(2812,"string"),og(),eN(2813," no formato "),Sl(2814,"strong"),eN(2815,"ISO-8601"),og(),eN(2816," extendido "),Sl(2817,"strong"),eN(2818,"'yyyy-mm-ddThh:mm:ss+|-hh:mm'"),og(),eN(2819,`
e o tipo `),Sl(2820,"em"),eN(2821,"Date"),og(),eN(2822," padr\xE3o do Javascript, por exemplo: "),Sl(2823,"code"),eN(2824,"'2017-11-28T00:00:00-02:00'"),og(),eN(2825," ou "),Sl(2826,"code"),eN(2827,"new Date(2017, 10, 28)"),og(),eN(2828,"."),og()()(),Sl(2829,"li")(2830,"p")(2831,"code"),eN(2832,"detail"),og(),eN(2833,": array de objetos para o master-detail."),og(),Sl(2834,"ul")(2835,"li"),eN(2836,"Incompat\xEDvel com "),Sl(2837,"code"),eN(2838,"virtual-scroll"),og(),eN(2839,", que requer altura fixa nas linhas."),og()()(),Sl(2840,"li")(2841,"p")(2842,"code"),eN(2843,"icon"),og(),eN(2844,": "),Sl(2845,"em"),eN(2846,"array"),og(),eN(2847," de "),Sl(2848,"em"),eN(2849,"string"),og(),eN(2850," ou objetos para a coluna de \xEDcones."),og()(),Sl(2851,"li")(2852,"p")(2853,"code"),eN(2854,"label"),og(),eN(2855,": texto com destaque."),og()(),Sl(2856,"li")(2857,"p")(2858,"code"),eN(2859,"link"),og(),eN(2860,": habilita link na coluna para a\xE7\xE3o ou navega\xE7\xE3o."),og()(),Sl(2861,"li")(2862,"p")(2863,"code"),eN(2864,"number"),og(),eN(2865,": valores num\xE9ricos."),og()(),Sl(2866,"li")(2867,"p")(2868,"code"),eN(2869,"string"),og(),eN(2870,": textos."),og()(),Sl(2871,"li")(2872,"p")(2873,"code"),eN(2874,"subtitle"),og(),eN(2875,": array de objetos para a coluna de legenda."),og()(),Sl(2876,"li")(2877,"p")(2878,"code"),eN(2879,"time"),og(),eN(2880,": valor de hor\xE1rio."),og(),Sl(2881,"ul")(2882,"li"),eN(2883,"Aceita o tipo "),Sl(2884,"em"),eN(2885,"string"),og(),eN(2886," nos formatos "),Sl(2887,"strong"),eN(2888,"'HH:mm:ss'"),og(),eN(2889," ou "),Sl(2890,"strong"),eN(2891,"'HH:mm:ss.ffffff'"),og(),eN(2892,", por exemplo: "),Sl(2893,"code"),eN(2894,"'23:12:45'"),og(),eN(2895,"."),og()()(),Sl(2896,"li")(2897,"p")(2898,"code"),eN(2899,"cellTemplate"),og(),eN(2900,`: Indica que a coluna ser\xE1 utilizada como template, em conjunto com o
`),Sl(2901,"a",8),eN(2902,"PoTableCellTemplate"),og(),eN(2903,"."),og()(),Sl(2904,"li")(2905,"p")(2906,"code"),eN(2907,"columnTemplate"),og(),eN(2908,`: Indica que a coluna ser\xE1 utilizada como template, em conjunto com o
`),Sl(2909,"a",7),eN(2910,"PoTableColumnTemplate"),og(),eN(2911,"."),og()()()()(),Sl(2912,"tr",17)(2913,"td",18)(2914,"div",19)(2915,"span",20),eN(2916," visible"),Wl(2917,"br"),og()()(),Sl(2918,"td",21)(2919,"code",22),eN(2920,"boolean"),og()(),Sl(2921,"td",24)(2922,"em")(2923,"strong"),eN(2924,"(opcional)"),og()(),Sl(2925,"p"),eN(2926,`Controla a exibi\xE7\xE3o da coluna. Caso seja definido um valor falso, a coluna n\xE3o ser\xE1 exibida mas mas ser\xE1 poss\xEDvel torn\xE1-la
vis\xEDvel atrav\xE9s do `),Sl(2927,"strong"),eN(2928,"gerenciador de colunas"),og(),eN(2929,"."),og(),Sl(2930,"blockquote")(2931,"p"),eN(2932,"A disponibilidade de visualiza\xE7\xE3o pode limitar-se de acordo com a defini\xE7\xE3o de "),Sl(2933,"code"),eN(2934,"p-max-columns"),og(),eN(2935,"."),og()()()(),Sl(2936,"tr",17)(2937,"td",18)(2938,"div",19)(2939,"span",20),eN(2940," width"),Wl(2941,"br"),og()()(),Sl(2942,"td",21)(2943,"code",31),eN(2944,"string"),og()(),Sl(2945,"td",24)(2946,"em")(2947,"strong"),eN(2948,"(opcional)"),og()(),Sl(2949,"p"),eN(2950,`hoje o tamanho m\xEDnimo das colunas \xE9 de 32px, respeitando o padding lateral.
Boas Pr\xE1ticas:
Indicamos:`),og(),Sl(2951,"ul")(2952,"li"),eN(2953,"para colunas com 2 das propriedades (property, [p-draggable] e [p-sort]) : 96px"),og(),Sl(2954,"li"),eN(2955,"para colunas com 3 propriedades (property, [p-draggable] e [p-sort]) : 144px"),og()()()()(),Sl(2956,"h4",44)(2957,"code",5),eN(2958,"PoTableLiterals"),og()(),Sl(2959,"div",2)(2960,"p"),eN(2961,"Interface para defini\xE7\xE3o das literais usadas no "),Sl(2962,"code"),eN(2963,"po-table"),og(),eN(2964,"."),og()(),Sl(2965,"h4",13),eN(2966,"Propriedades"),og(),Sl(2967,"table",14)(2968,"tr",15)(2969,"th",16),eN(2970,"Nome"),og(),Sl(2971,"th",16),eN(2972,"Tipo"),og(),Sl(2973,"th",16),eN(2974,"Descri\xE7\xE3o"),og()(),Sl(2975,"tr",17)(2976,"td",18)(2977,"div",19)(2978,"span",20),eN(2979," bodyDelete"),Wl(2980,"br"),og()()(),Sl(2981,"td",21)(2982,"code",31),eN(2983,"string"),og()(),Sl(2984,"td",24)(2985,"em")(2986,"strong"),eN(2987,"(opcional)"),og()(),Sl(2988,"p"),eN(2989,"Texto no corpo do Modal de exclus\xE3o"),og()()(),Sl(2990,"tr",17)(2991,"td",18)(2992,"div",19)(2993,"span",20),eN(2994," cancel"),Wl(2995,"br"),og()()(),Sl(2996,"td",21)(2997,"code",31),eN(2998,"string"),og()(),Sl(2999,"td",24)(3e3,"em")(3001,"strong"),eN(3002,"(opcional)"),og()(),Sl(3003,"p"),eN(3004,"Texto no Modal para cancelar a exclus\xE3o"),og()()(),Sl(3005,"tr",17)(3006,"td",18)(3007,"div",19)(3008,"span",20),eN(3009," columnsManager"),Wl(3010,"br"),og()()(),Sl(3011,"td",21)(3012,"code",31),eN(3013,"string"),og()(),Sl(3014,"td",24)(3015,"em")(3016,"strong"),eN(3017,"(opcional)"),og()(),Sl(3018,"p"),eN(3019,"Texto do "),Sl(3020,"strong"),eN(3021,"Gerenciador de colunas"),og(),eN(3022," localizado no canto superior direito da tabela."),og()()(),Sl(3023,"tr",17)(3024,"td",18)(3025,"div",19)(3026,"span",20),eN(3027," completeSubtitle"),Wl(3028,"br"),og()()(),Sl(3029,"td",21)(3030,"code",31),eN(3031,"string"),og()(),Sl(3032,"td",24)(3033,"em")(3034,"strong"),eN(3035,"(opcional)"),og()(),Sl(3036,"p"),eN(3037,"T\xEDtulo da modal 'Legenda completa' que aparece ao clicar no bot\xE3o 'Ver legenda completa'."),og()()(),Sl(3038,"tr",17)(3039,"td",18)(3040,"div",19)(3041,"span",20),eN(3042," delete"),Wl(3043,"br"),og()()(),Sl(3044,"td",21)(3045,"code",31),eN(3046,"string"),og()(),Sl(3047,"td",24)(3048,"em")(3049,"strong"),eN(3050,"(opcional)"),og()(),Sl(3051,"p"),eN(3052,"Texto no Modal para confirmar a exclus\xE3o"),og()()(),Sl(3053,"tr",17)(3054,"td",18)(3055,"div",19)(3056,"span",20),eN(3057," deleteApiError"),Wl(3058,"br"),og()()(),Sl(3059,"td",21)(3060,"code",31),eN(3061,"string"),og()(),Sl(3062,"td",24)(3063,"em")(3064,"strong"),eN(3065,"(opcional)"),og()(),Sl(3066,"p"),eN(3067,"Texto de notifica\xE7\xE3o de erro na requisi\xE7\xE3o Delete"),og()()(),Sl(3068,"tr",17)(3069,"td",18)(3070,"div",19)(3071,"span",20),eN(3072," deleteSuccessful"),Wl(3073,"br"),og()()(),Sl(3074,"td",21)(3075,"code",31),eN(3076,"string"),og()(),Sl(3077,"td",24)(3078,"em")(3079,"strong"),eN(3080,"(opcional)"),og()(),Sl(3081,"p"),eN(3082,"Texto de notifica\xE7\xE3o de remo\xE7\xE3o com sucesso"),og()()(),Sl(3083,"tr",17)(3084,"td",18)(3085,"div",19)(3086,"span",20),eN(3087," loadMoreData"),Wl(3088,"br"),og()()(),Sl(3089,"td",21)(3090,"code",31),eN(3091,"string"),og()(),Sl(3092,"td",24)(3093,"em")(3094,"strong"),eN(3095,"(opcional)"),og()(),Sl(3096,"p"),eN(3097,"Texto do bot\xE3o de "),Sl(3098,"strong"),eN(3099,"Carregar mais resultados"),og(),eN(3100," localizado no rodap\xE9 da tabela."),og()()(),Sl(3101,"tr",17)(3102,"td",18)(3103,"div",19)(3104,"span",20),eN(3105," loadingData"),Wl(3106,"br"),og()()(),Sl(3107,"td",21)(3108,"code",31),eN(3109,"string"),og()(),Sl(3110,"td",24)(3111,"em")(3112,"strong"),eN(3113,"(opcional)"),og()(),Sl(3114,"p"),eN(3115,"Texto exibido enquanto uma requisi\xE7\xE3o est\xE1 sendo executada para carregar dados na tabela."),og()()(),Sl(3116,"tr",17)(3117,"td",18)(3118,"div",19)(3119,"span",20),eN(3120," multipleItems"),Wl(3121,"br"),og()()(),Sl(3122,"td",21)(3123,"code",31),eN(3124,"string"),og()(),Sl(3125,"td",24)(3126,"em")(3127,"strong"),eN(3128,"(opcional)"),og()(),Sl(3129,"p"),eN(3130,"Texto exibido quando apenas 1 item for selecionado no checkbox."),og()()(),Sl(3131,"tr",17)(3132,"td",18)(3133,"div",19)(3134,"span",20),eN(3135," noColumns"),Wl(3136,"br"),og()()(),Sl(3137,"td",21)(3138,"code",31),eN(3139,"string"),og()(),Sl(3140,"td",24)(3141,"em")(3142,"strong"),eN(3143,"(opcional)"),og()(),Sl(3144,"p"),eN(3145,"Texto exibido quando n\xE3o existem colunas definidas para a tabela."),og()()(),Sl(3146,"tr",17)(3147,"td",18)(3148,"div",19)(3149,"span",20),eN(3150," noData"),Wl(3151,"br"),og()()(),Sl(3152,"td",21)(3153,"code",31),eN(3154,"string"),og()(),Sl(3155,"td",24)(3156,"em")(3157,"strong"),eN(3158,"(opcional)"),og()(),Sl(3159,"p"),eN(3160,"Texto exibido quando n\xE3o existem itens para serem exibidos na tabela."),og()()(),Sl(3161,"tr",17)(3162,"td",18)(3163,"div",19)(3164,"span",20),eN(3165," noItem"),Wl(3166,"br"),og()()(),Sl(3167,"td",21)(3168,"code",31),eN(3169,"string"),og()(),Sl(3170,"td",24)(3171,"em")(3172,"strong"),eN(3173,"(opcional)"),og()(),Sl(3174,"p"),eN(3175,"Texto exibido quando nenhum item for selecionado no checkbox."),og()()(),Sl(3176,"tr",17)(3177,"td",18)(3178,"div",19)(3179,"span",20),eN(3180," noVisibleColumn"),Wl(3181,"br"),og()()(),Sl(3182,"td",21)(3183,"code",31),eN(3184,"string"),og()(),Sl(3185,"td",24)(3186,"em")(3187,"strong"),eN(3188,"(opcional)"),og()(),Sl(3189,"p"),eN(3190,"Texto exibido quando n\xE3o existem colunas vis\xEDveis para a tabela."),og()()(),Sl(3191,"tr",17)(3192,"td",18)(3193,"div",19)(3194,"span",20),eN(3195," oneItem"),Wl(3196,"br"),og()()(),Sl(3197,"td",21)(3198,"code",31),eN(3199,"string"),og()(),Sl(3200,"td",24)(3201,"em")(3202,"strong"),eN(3203,"(opcional)"),og()(),Sl(3204,"p"),eN(3205,"Texto exibido quando apenas 1 item for selecionado no checkbox."),og()()(),Sl(3206,"tr",17)(3207,"td",18)(3208,"div",19)(3209,"span",20),eN(3210," seeCompleteSubtitle"),Wl(3211,"br"),og()()(),Sl(3212,"td",21)(3213,"code",31),eN(3214,"string"),og()(),Sl(3215,"td",24)(3216,"em")(3217,"strong"),eN(3218,"(opcional)"),og()(),Sl(3219,"p"),eN(3220,"Texto do bot\xE3o "),Sl(3221,"strong"),eN(3222,"Ver legenda completa"),og(),eN(3223," que aparece quando o rodap\xE9 de legendas \xE9 maior que a tabela."),og()()()(),Sl(3224,"h4",44)(3225,"code",5),eN(3226,"PoTableColumnIcon"),og()(),Sl(3227,"div",2)(3228,"p"),Wl(3229,"a",104),og(),Sl(3230,"p"),eN(3231,"Interface que define a coluna com \xEDcone(s) do "),Sl(3232,"code"),eN(3233,"po-table"),og(),eN(3234,"."),og()(),Sl(3235,"h4",13),eN(3236,"Propriedades"),og(),Sl(3237,"table",14)(3238,"tr",15)(3239,"th",16),eN(3240,"Nome"),og(),Sl(3241,"th",16),eN(3242,"Tipo"),og(),Sl(3243,"th",16),eN(3244,"Descri\xE7\xE3o"),og()(),Sl(3245,"tr",17)(3246,"td",18)(3247,"div",19)(3248,"span",20),eN(3249," action"),Wl(3250,"br"),og()()(),Sl(3251,"td",21)(3252,"code",45),eN(3253,"Function"),og()(),Sl(3254,"td",24)(3255,"em")(3256,"strong"),eN(3257,"(opcional)"),og()(),Sl(3258,"p"),eN(3259,"Define a a\xE7\xE3o que ser\xE1 executada ao clicar no \xEDcone."),og()()(),Sl(3260,"tr",17)(3261,"td",18)(3262,"div",19)(3263,"span",20),eN(3264," color"),Wl(3265,"br"),og()()(),Sl(3266,"td",21)(3267,"code",31),eN(3268,"string "),og(),Sl(3269,"code",45),eN(3270," Function"),og()(),Sl(3271,"td",24)(3272,"em")(3273,"strong"),eN(3274,"(opcional)"),og()(),Sl(3275,"p"),eN(3276,"Define a cor do \xEDcone."),og(),Sl(3277,"p"),eN(3278,"Valores v\xE1lidos:"),og(),Sl(3279,"ul")(3280,"li"),Wl(3281,"span",51),Sl(3282,"code"),eN(3283,"color-01"),og()(),Sl(3284,"li"),Wl(3285,"span",52),Sl(3286,"code"),eN(3287,"color-02"),og()(),Sl(3288,"li"),Wl(3289,"span",53),Sl(3290,"code"),eN(3291,"color-03"),og()(),Sl(3292,"li"),Wl(3293,"span",54),Sl(3294,"code"),eN(3295,"color-04"),og()(),Sl(3296,"li"),Wl(3297,"span",55),Sl(3298,"code"),eN(3299,"color-05"),og()(),Sl(3300,"li"),Wl(3301,"span",56),Sl(3302,"code"),eN(3303,"color-06"),og()(),Sl(3304,"li"),Wl(3305,"span",57),Sl(3306,"code"),eN(3307,"color-07"),og()(),Sl(3308,"li"),Wl(3309,"span",58),Sl(3310,"code"),eN(3311,"color-08"),og()(),Sl(3312,"li"),Wl(3313,"span",59),Sl(3314,"code"),eN(3315,"color-09"),og()(),Sl(3316,"li"),Wl(3317,"span",60),Sl(3318,"code"),eN(3319,"color-10"),og()(),Sl(3320,"li"),Wl(3321,"span",61),Sl(3322,"code"),eN(3323,"color-11"),og()(),Sl(3324,"li"),Wl(3325,"span",62),Sl(3326,"code"),eN(3327,"color-12"),og()()(),Sl(3328,"blockquote")(3329,"p"),eN(3330,"Tamb\xE9m \xE9 poss\xEDvel utilizar as 35 cores da paleta "),Sl(3331,"strong"),eN(3332,"Caption Tag Colors"),og(),eN(3333,":"),og()(),Sl(3334,"ul")(3335,"li"),Wl(3336,"span",63),Sl(3337,"code"),eN(3338,"caption-tag-01"),og(),Wl(3339,"span",64),Sl(3340,"code"),eN(3341,"caption-tag-02"),og(),Wl(3342,"span",65),Sl(3343,"code"),eN(3344,"caption-tag-03"),og(),Wl(3345,"span",66),Sl(3346,"code"),eN(3347,"caption-tag-04"),og(),Wl(3348,"span",67),Sl(3349,"code"),eN(3350,"caption-tag-05"),og()(),Sl(3351,"li"),Wl(3352,"span",68),Sl(3353,"code"),eN(3354,"caption-tag-06"),og(),Wl(3355,"span",69),Sl(3356,"code"),eN(3357,"caption-tag-07"),og(),Wl(3358,"span",70),Sl(3359,"code"),eN(3360,"caption-tag-08"),og(),Wl(3361,"span",71),Sl(3362,"code"),eN(3363,"caption-tag-09"),og(),Wl(3364,"span",72),Sl(3365,"code"),eN(3366,"caption-tag-10"),og()(),Sl(3367,"li"),Wl(3368,"span",73),Sl(3369,"code"),eN(3370,"caption-tag-11"),og(),Wl(3371,"span",74),Sl(3372,"code"),eN(3373,"caption-tag-12"),og(),Wl(3374,"span",75),Sl(3375,"code"),eN(3376,"caption-tag-13"),og(),Wl(3377,"span",76),Sl(3378,"code"),eN(3379,"caption-tag-14"),og(),Wl(3380,"span",77),Sl(3381,"code"),eN(3382,"caption-tag-15"),og()(),Sl(3383,"li"),Wl(3384,"span",78),Sl(3385,"code"),eN(3386,"caption-tag-16"),og(),Wl(3387,"span",79),Sl(3388,"code"),eN(3389,"caption-tag-17"),og(),Wl(3390,"span",80),Sl(3391,"code"),eN(3392,"caption-tag-18"),og(),Wl(3393,"span",81),Sl(3394,"code"),eN(3395,"caption-tag-19"),og(),Wl(3396,"span",82),Sl(3397,"code"),eN(3398,"caption-tag-20"),og()(),Sl(3399,"li"),Wl(3400,"span",83),Sl(3401,"code"),eN(3402,"caption-tag-21"),og(),Wl(3403,"span",84),Sl(3404,"code"),eN(3405,"caption-tag-22"),og(),Wl(3406,"span",85),Sl(3407,"code"),eN(3408,"caption-tag-23"),og(),Wl(3409,"span",86),Sl(3410,"code"),eN(3411,"caption-tag-24"),og(),Wl(3412,"span",87),Sl(3413,"code"),eN(3414,"caption-tag-25"),og()(),Sl(3415,"li"),Wl(3416,"span",88),Sl(3417,"code"),eN(3418,"caption-tag-26"),og(),Wl(3419,"span",89),Sl(3420,"code"),eN(3421,"caption-tag-27"),og(),Wl(3422,"span",90),Sl(3423,"code"),eN(3424,"caption-tag-28"),og(),Wl(3425,"span",91),Sl(3426,"code"),eN(3427,"caption-tag-29"),og(),Wl(3428,"span",92),Sl(3429,"code"),eN(3430,"caption-tag-30"),og()(),Sl(3431,"li"),Wl(3432,"span",93),Sl(3433,"code"),eN(3434,"caption-tag-31"),og(),Wl(3435,"span",94),Sl(3436,"code"),eN(3437,"caption-tag-32"),og(),Wl(3438,"span",95),Sl(3439,"code"),eN(3440,"caption-tag-33"),og(),Wl(3441,"span",96),Sl(3442,"code"),eN(3443,"caption-tag-34"),og(),Wl(3444,"span",97),Sl(3445,"code"),eN(3446,"caption-tag-35"),og()()()()(),Sl(3447,"tr",17)(3448,"td",18)(3449,"div",19)(3450,"span",20),eN(3451," disabled"),Wl(3452,"br"),og()()(),Sl(3453,"td",21)(3454,"code",45),eN(3455,"Function"),og()(),Sl(3456,"td",24)(3457,"em")(3458,"strong"),eN(3459,"(opcional)"),og()(),Sl(3460,"p"),eN(3461,"Fun\xE7\xE3o que deve retornar um booleano para habilitar ou desabilitar o \xEDcone e sua a\xE7\xE3o."),og()()(),Sl(3462,"tr",17)(3463,"td",18)(3464,"div",19)(3465,"span",20),eN(3466," icon"),Wl(3467,"br"),og()()(),Sl(3468,"td",21)(3469,"code",31),eN(3470,"string "),og(),Sl(3471,"code",46),eN(3472," TemplateRef<void>"),og()(),Sl(3473,"td",24)(3474,"em")(3475,"strong"),eN(3476,"(opcional)"),og()(),Sl(3477,"p"),eN(3478,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),Sl(3479,"a",26),eN(3480,"Biblioteca de \xEDcones"),og(),eN(3481,". conforme exemplo abaixo:"),og(),Sl(3482,"pre")(3483,"code"),eN(3484,`[ { icon: 'an an-plus' } ]
`),og()(),Sl(3485,"p"),eN(3486,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca Font Awesome, da seguinte forma:"),og(),Sl(3487,"pre")(3488,"code"),eN(3489,`[ {  icon: 'fas fa-plus' } ]
`),og()(),Sl(3490,"p"),eN(3491,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),Sl(3492,"code"),eN(3493,"TemplateRef"),og(),eN(3494,`, conforme exemplo abaixo:
`),Sl(3495,"code"),eN(3496,"component.html"),og(),eN(3497,":"),og(),Sl(3498,"pre")(3499,"code"),eN(3500,`<ng-template #iconTemplateAdd>
 <span class="material-icons" style="font-size: inherit;">add</span>
</ng-template>

<po-table [p-column]="myProperty"></po-table>
`),og()(),Sl(3501,"p")(3502,"code"),eN(3503,"component.ts"),og(),eN(3504,":"),og(),Sl(3505,"pre")(3506,"code"),eN(3507,`@ViewChild('iconTemplateAdd', { static: true }) iconTemplateAdd: TemplateRef<void>;

myProperty = [
 { property: 'columnIcon', label: 'Icons', type: 'icon', icons: [
  { value: 'plus', icon: this.iconTemplateAdd },
 ]}
];
`),og()(),Sl(3508,"blockquote")(3509,"p"),eN(3510,"Caso esta propriedade n\xE3o seja definida, a mesma receber\xE1 o valor contido em "),Sl(3511,"code"),eN(3512,"value"),og(),eN(3513,"."),og()()()(),Sl(3514,"tr",17)(3515,"td",18)(3516,"div",19)(3517,"span",20),eN(3518," tooltip"),Wl(3519,"br"),og()()(),Sl(3520,"td",21)(3521,"code",31),eN(3522,"string"),og()(),Sl(3523,"td",24)(3524,"em")(3525,"strong"),eN(3526,"(opcional)"),og()(),Sl(3527,"p"),eN(3528,"Define um texto de ajuda que ser\xE1 exibido ao passar o "),Sl(3529,"em"),eN(3530,"mouse"),og(),eN(3531," em cima do \xEDcone."),og()()(),Sl(3532,"tr",17)(3533,"td",18)(3534,"div",19)(3535,"span",20),eN(3536," value"),Wl(3537,"br"),og()()(),Sl(3538,"td",21)(3539,"code",31),eN(3540,"string"),og()(),Sl(3541,"td",24)(3542,"p"),eN(3543,"Define o valor do \xEDcone que ser\xE1 exibido."),og()()()(),Sl(3544,"h4",44)(3545,"code",5),eN(3546,"PoTableColumnLabel"),og()(),Sl(3547,"div",2)(3548,"p"),eN(3549,"Interface para configura\xE7\xE3o das colunas de labels do "),Sl(3550,"code"),eN(3551,"po-table"),og(),eN(3552,"."),og()(),Sl(3553,"h4",13),eN(3554,"Propriedades"),og(),Sl(3555,"table",14)(3556,"tr",15)(3557,"th",16),eN(3558,"Nome"),og(),Sl(3559,"th",16),eN(3560,"Tipo"),og(),Sl(3561,"th",16),eN(3562,"Descri\xE7\xE3o"),og()(),Sl(3563,"tr",17)(3564,"td",18)(3565,"div",19)(3566,"span",20),eN(3567," color"),Wl(3568,"br"),og()()(),Sl(3569,"td",21)(3570,"code",31),eN(3571,"string"),og()(),Sl(3572,"td",24)(3573,"em")(3574,"strong"),eN(3575,"(opcional)"),og()(),Sl(3576,"p"),eN(3577,"Define a cor do label."),og(),Sl(3578,"p"),eN(3579,"Valores v\xE1lidos:"),og(),Sl(3580,"ul")(3581,"li"),Wl(3582,"span",51),Sl(3583,"code"),eN(3584,"color-01"),og()(),Sl(3585,"li"),Wl(3586,"span",52),Sl(3587,"code"),eN(3588,"color-02"),og()(),Sl(3589,"li"),Wl(3590,"span",53),Sl(3591,"code"),eN(3592,"color-03"),og()(),Sl(3593,"li"),Wl(3594,"span",54),Sl(3595,"code"),eN(3596,"color-04"),og()(),Sl(3597,"li"),Wl(3598,"span",55),Sl(3599,"code"),eN(3600,"color-05"),og()(),Sl(3601,"li"),Wl(3602,"span",56),Sl(3603,"code"),eN(3604,"color-06"),og()(),Sl(3605,"li"),Wl(3606,"span",57),Sl(3607,"code"),eN(3608,"color-07"),og()(),Sl(3609,"li"),Wl(3610,"span",58),Sl(3611,"code"),eN(3612,"color-08"),og()(),Sl(3613,"li"),Wl(3614,"span",59),Sl(3615,"code"),eN(3616,"color-09"),og()(),Sl(3617,"li"),Wl(3618,"span",60),Sl(3619,"code"),eN(3620,"color-10"),og()(),Sl(3621,"li"),Wl(3622,"span",61),Sl(3623,"code"),eN(3624,"color-11"),og()(),Sl(3625,"li"),Wl(3626,"span",62),Sl(3627,"code"),eN(3628,"color-12"),og()()(),Sl(3629,"blockquote")(3630,"p"),eN(3631,"Tamb\xE9m \xE9 poss\xEDvel utilizar as 35 cores da paleta "),Sl(3632,"strong"),eN(3633,"Caption Tag Colors"),og(),eN(3634,":"),og()(),Sl(3635,"ul")(3636,"li"),Wl(3637,"span",63),Sl(3638,"code"),eN(3639,"caption-tag-01"),og(),Wl(3640,"span",64),Sl(3641,"code"),eN(3642,"caption-tag-02"),og(),Wl(3643,"span",65),Sl(3644,"code"),eN(3645,"caption-tag-03"),og(),Wl(3646,"span",66),Sl(3647,"code"),eN(3648,"caption-tag-04"),og(),Wl(3649,"span",67),Sl(3650,"code"),eN(3651,"caption-tag-05"),og()(),Sl(3652,"li"),Wl(3653,"span",68),Sl(3654,"code"),eN(3655,"caption-tag-06"),og(),Wl(3656,"span",69),Sl(3657,"code"),eN(3658,"caption-tag-07"),og(),Wl(3659,"span",70),Sl(3660,"code"),eN(3661,"caption-tag-08"),og(),Wl(3662,"span",71),Sl(3663,"code"),eN(3664,"caption-tag-09"),og(),Wl(3665,"span",72),Sl(3666,"code"),eN(3667,"caption-tag-10"),og()(),Sl(3668,"li"),Wl(3669,"span",73),Sl(3670,"code"),eN(3671,"caption-tag-11"),og(),Wl(3672,"span",74),Sl(3673,"code"),eN(3674,"caption-tag-12"),og(),Wl(3675,"span",75),Sl(3676,"code"),eN(3677,"caption-tag-13"),og(),Wl(3678,"span",76),Sl(3679,"code"),eN(3680,"caption-tag-14"),og(),Wl(3681,"span",77),Sl(3682,"code"),eN(3683,"caption-tag-15"),og()(),Sl(3684,"li"),Wl(3685,"span",78),Sl(3686,"code"),eN(3687,"caption-tag-16"),og(),Wl(3688,"span",79),Sl(3689,"code"),eN(3690,"caption-tag-17"),og(),Wl(3691,"span",80),Sl(3692,"code"),eN(3693,"caption-tag-18"),og(),Wl(3694,"span",81),Sl(3695,"code"),eN(3696,"caption-tag-19"),og(),Wl(3697,"span",82),Sl(3698,"code"),eN(3699,"caption-tag-20"),og()(),Sl(3700,"li"),Wl(3701,"span",83),Sl(3702,"code"),eN(3703,"caption-tag-21"),og(),Wl(3704,"span",84),Sl(3705,"code"),eN(3706,"caption-tag-22"),og(),Wl(3707,"span",85),Sl(3708,"code"),eN(3709,"caption-tag-23"),og(),Wl(3710,"span",86),Sl(3711,"code"),eN(3712,"caption-tag-24"),og(),Wl(3713,"span",87),Sl(3714,"code"),eN(3715,"caption-tag-25"),og()(),Sl(3716,"li"),Wl(3717,"span",88),Sl(3718,"code"),eN(3719,"caption-tag-26"),og(),Wl(3720,"span",89),Sl(3721,"code"),eN(3722,"caption-tag-27"),og(),Wl(3723,"span",90),Sl(3724,"code"),eN(3725,"caption-tag-28"),og(),Wl(3726,"span",91),Sl(3727,"code"),eN(3728,"caption-tag-29"),og(),Wl(3729,"span",92),Sl(3730,"code"),eN(3731,"caption-tag-30"),og()(),Sl(3732,"li"),Wl(3733,"span",93),Sl(3734,"code"),eN(3735,"caption-tag-31"),og(),Wl(3736,"span",94),Sl(3737,"code"),eN(3738,"caption-tag-32"),og(),Wl(3739,"span",95),Sl(3740,"code"),eN(3741,"caption-tag-33"),og(),Wl(3742,"span",96),Sl(3743,"code"),eN(3744,"caption-tag-34"),og(),Wl(3745,"span",97),Sl(3746,"code"),eN(3747,"caption-tag-35"),og()()(),Sl(3748,"p"),eN(3749,"Exemplo de uso:"),og(),Sl(3750,"pre")(3751,"code"),eN(3752,`{ property: 'status', type: 'label', labels: [
  { value: 'ativo', color: 'caption-tag-13', label: 'Ativo' },
  { value: 'pendente', color: 'caption-tag-08', label: 'Pendente' }
]}
`),og()()()(),Sl(3753,"tr",17)(3754,"td",18)(3755,"div",19)(3756,"span",20),eN(3757," icon"),Wl(3758,"br"),og()()(),Sl(3759,"td",21)(3760,"code",22),eN(3761,"boolean "),og(),Sl(3762,"code",31),eN(3763," string "),og(),Sl(3764,"code",46),eN(3765," TemplateRef<void>"),og()(),Sl(3766,"td",24)(3767,"em")(3768,"strong"),eN(3769,"(opcional)"),og()(),Sl(3770,"p"),eN(3771,"Define ou ativa um \xEDcone que ser\xE1 exibido ao lado do valor da "),Sl(3772,"em"),eN(3773,"tag"),og(),eN(3774,"."),og(),Sl(3775,"p"),eN(3776,"Quando "),Sl(3777,"code"),eN(3778,"p-type"),og(),eN(3779," estiver definida, basta informar um valor igual a "),Sl(3780,"code"),eN(3781,"true"),og(),eN(3782," para que o \xEDcone seja exibido conforme descri\xE7\xF5es abaixo:"),og(),Sl(3783,"ul")(3784,"li"),Wl(3785,"span",105),eN(3786," - "),Sl(3787,"code"),eN(3788,"success"),og()(),Sl(3789,"li"),Wl(3790,"span",106),eN(3791," - "),Sl(3792,"code"),eN(3793,"warning"),og()(),Sl(3794,"li"),Wl(3795,"span",107),eN(3796," - "),Sl(3797,"code"),eN(3798,"danger"),og()(),Sl(3799,"li"),Wl(3800,"span",108),eN(3801," - "),Sl(3802,"code"),eN(3803,"info"),og()()(),Sl(3804,"p"),eN(3805,"Tamb\xE9m \xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),Sl(3806,"a",26),eN(3807,"Biblioteca de \xEDcones"),og(),eN(3808,". conforme exemplo abaixo:"),og(),Sl(3809,"pre")(3810,"code"),eN(3811,`<po-tag p-icon="an an-user" p-value="PO Tag"></po-tag>
`),og()(),Sl(3812,"p"),eN(3813,"como tamb\xE9m utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),Sl(3814,"em"),eN(3815,"Font Awesome"),og(),eN(3816,", da seguinte forma:"),og(),Sl(3817,"pre")(3818,"code"),eN(3819,`<po-tag p-icon="fa fa-podcast" p-value="PO Tag"></po-button>
`),og()(),Sl(3820,"p"),eN(3821,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),Sl(3822,"code"),eN(3823,"TemplateRef"),og(),eN(3824,", conforme exemplo abaixo:"),og(),Sl(3825,"pre")(3826,"code"),eN(3827,`<po-tag [p-icon]="template" p-value="Tag template ionic"></po-button>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),og()(),Sl(3828,"blockquote")(3829,"p"),eN(3830,"Para o \xEDcone enquadrar corretamente, deve-se utilizar "),Sl(3831,"code"),eN(3832,"font-size: inherit"),og(),eN(3833," caso o \xEDcone utilizado n\xE3o aplique-o."),og()()()(),Sl(3834,"tr",17)(3835,"td",18)(3836,"div",19)(3837,"span",20),eN(3838," label"),Wl(3839,"br"),og()()(),Sl(3840,"td",21)(3841,"code",31),eN(3842,"string"),og()(),Sl(3843,"td",24)(3844,"p"),eN(3845,"Texto que ser\xE1 exibido na coluna."),og()()(),Sl(3846,"tr",17)(3847,"td",18)(3848,"div",19)(3849,"span",20),eN(3850," textColor"),Wl(3851,"br"),og()()(),Sl(3852,"td",21)(3853,"code",31),eN(3854,"string"),og()(),Sl(3855,"td",24)(3856,"em")(3857,"strong"),eN(3858,"(opcional)"),og()(),Sl(3859,"p"),eN(3860,"Determina a cor do texto da tag. As maneiras de customizar as cores s\xE3o:"),og(),Sl(3861,"ul")(3862,"li")(3863,"p"),eN(3864,"Hexadeximal, por exemplo "),Sl(3865,"code"),eN(3866,"#c64840"),og(),eN(3867,";"),og()(),Sl(3868,"li")(3869,"p"),eN(3870,"RGB, como "),Sl(3871,"code"),eN(3872,"rgb(0, 0, 165)"),og(),eN(3873,";"),og()(),Sl(3874,"li")(3875,"p"),eN(3876,"O nome da cor, por exemplo "),Sl(3877,"code"),eN(3878,"blue"),og(),eN(3879,";"),og()(),Sl(3880,"li")(3881,"p"),eN(3882,`Usando uma das cores do tema do PO:
Valores v\xE1lidos:`),og(),Sl(3883,"ul")(3884,"li"),Wl(3885,"span",51),Sl(3886,"code"),eN(3887,"color-01"),og()(),Sl(3888,"li"),Wl(3889,"span",52),Sl(3890,"code"),eN(3891,"color-02"),og()(),Sl(3892,"li"),Wl(3893,"span",53),Sl(3894,"code"),eN(3895,"color-03"),og()(),Sl(3896,"li"),Wl(3897,"span",54),Sl(3898,"code"),eN(3899,"color-04"),og()(),Sl(3900,"li"),Wl(3901,"span",55),Sl(3902,"code"),eN(3903,"color-05"),og()(),Sl(3904,"li"),Wl(3905,"span",56),Sl(3906,"code"),eN(3907,"color-06"),og()(),Sl(3908,"li"),Wl(3909,"span",57),Sl(3910,"code"),eN(3911,"color-07"),og()(),Sl(3912,"li"),Wl(3913,"span",58),Sl(3914,"code"),eN(3915,"color-08"),og()(),Sl(3916,"li"),Wl(3917,"span",59),Sl(3918,"code"),eN(3919,"color-09"),og()(),Sl(3920,"li"),Wl(3921,"span",60),Sl(3922,"code"),eN(3923,"color-10"),og()(),Sl(3924,"li"),Wl(3925,"span",61),Sl(3926,"code"),eN(3927,"color-11"),og()(),Sl(3928,"li"),Wl(3929,"span",62),Sl(3930,"code"),eN(3931,"color-12"),og()()()(),Sl(3932,"li")(3933,"p"),eN(3934,"Para uma melhor acessibilidade no uso do componente \xE9 recomend\xE1vel utilizar cores com um melhor contraste em rela\xE7\xE3o ao background."),og()()(),Sl(3935,"blockquote")(3936,"p")(3937,"strong"),eN(3938,"Aten\xE7\xE3o:"),og(),eN(3939," A propriedade "),Sl(3940,"code"),eN(3941,"p-type"),og(),eN(3942," sobrep\xF5e esta defini\xE7\xE3o."),og()(),Sl(3943,"blockquote")(3944,"p")(3945,"strong"),eN(3946,"Aten\xE7\xE3o:"),og(),eN(3947," As cores da paleta "),Sl(3948,"strong"),eN(3949,"Caption Tag Colors"),og(),eN(3950," ("),Sl(3951,"code"),eN(3952,"caption-tag-01"),og(),eN(3953," a "),Sl(3954,"code"),eN(3955,"caption-tag-35"),og(),eN(3956,`) n\xE3o s\xE3o aceitas nesta propriedade,
pois possuem cor de texto fixa definida via token CSS.`),og()()()(),Sl(3957,"tr",17)(3958,"td",18)(3959,"div",19)(3960,"span",20),eN(3961," tooltip"),Wl(3962,"br"),og()()(),Sl(3963,"td",21)(3964,"code",31),eN(3965,"string"),og()(),Sl(3966,"td",24)(3967,"em")(3968,"strong"),eN(3969,"(opcional)"),og()(),Sl(3970,"p"),eN(3971,"Define um texto de ajuda que ser\xE1 exibido ao passar o "),Sl(3972,"em"),eN(3973,"mouse"),og(),eN(3974," em cima do "),Sl(3975,"em"),eN(3976,"label"),og(),eN(3977,"."),og(),Sl(3978,"blockquote")(3979,"p"),eN(3980,`Caso o conte\xFAdo da c\xE9lula exceder a largura da coluna,
\xE9 ignorado o valor atribuido ao tooltip e ser\xE1 exibido justamente o conte\xFAdo da c\xE9lula.`),og()()()(),Sl(3981,"tr",17)(3982,"td",18)(3983,"div",19)(3984,"span",20),eN(3985," type"),Wl(3986,"br"),og()()(),Sl(3987,"td",21)(3988,"code",109),eN(3989,"PoTagType"),og()(),Sl(3990,"td",24)(3991,"em")(3992,"strong"),eN(3993,"(opcional)"),og()(),Sl(3994,"p"),eN(3995,"Define o tipo da "),Sl(3996,"em"),eN(3997,"tag"),og(),eN(3998,"."),og(),Sl(3999,"p"),eN(4e3,"Valores v\xE1lidos:"),og(),Sl(4001,"ul")(4002,"li")(4003,"code"),eN(4004,"success"),og(),eN(4005,": cor verde utilizada para simbolizar sucesso ou \xEAxito."),og(),Sl(4006,"li")(4007,"code"),eN(4008,"warning"),og(),eN(4009,": cor amarela que representa aviso ou advert\xEAncia."),og(),Sl(4010,"li")(4011,"code"),eN(4012,"danger"),og(),eN(4013,": cor vermelha para erro ou aviso cr\xEDtico."),og(),Sl(4014,"li")(4015,"code"),eN(4016,"info"),og(),eN(4017,": cor cinza escuro que caracteriza conte\xFAdo informativo."),og()(),Sl(4018,"blockquote")(4019,"p"),eN(4020,"Quando esta propriedade for definida, ir\xE1 sobrepor a defini\xE7\xE3o de "),Sl(4021,"code"),eN(4022,"p-color"),og(),eN(4023," e "),Sl(4024,"code"),eN(4025,"p-icon"),og(),eN(4026," somente ser\xE1 exibido caso seja "),Sl(4027,"code"),eN(4028,"true"),og(),eN(4029,"."),og()()()(),Sl(4030,"tr",17)(4031,"td",18)(4032,"div",19)(4033,"span",20),eN(4034," value"),Wl(4035,"br"),og()()(),Sl(4036,"td",21)(4037,"code",31),eN(4038,"string "),og(),Sl(4039,"code",35),eN(4040," number"),og()(),Sl(4041,"td",24)(4042,"p"),eN(4043,"Valor que ser\xE1 usado como refer\xEAncia para exibi\xE7\xE3o do conte\xFAdo na coluna."),og()()()(),Sl(4044,"h4",44)(4045,"code",5),eN(4046,"PoTableDetailColumn"),og()(),Sl(4047,"div",2)(4048,"p"),eN(4049,"Interface para configura\xE7\xE3o das colunas do "),Sl(4050,"code"),eN(4051,"po-table-detail"),og(),eN(4052,"."),og()(),Sl(4053,"h4",13),eN(4054,"Propriedades"),og(),Sl(4055,"table",14)(4056,"tr",15)(4057,"th",16),eN(4058,"Nome"),og(),Sl(4059,"th",16),eN(4060,"Tipo"),og(),Sl(4061,"th",16),eN(4062,"Descri\xE7\xE3o"),og()(),Sl(4063,"tr",17)(4064,"td",18)(4065,"div",19)(4066,"span",20),eN(4067," format"),Wl(4068,"br"),og()()(),Sl(4069,"td",21)(4070,"code",31),eN(4071,"string"),og()(),Sl(4072,"td",24)(4073,"em")(4074,"strong"),eN(4075,"(opcional)"),og()(),Sl(4076,"p"),eN(4077,"Formato de exibi\xE7\xE3o do valor da coluna:"),og(),Sl(4078,"ul")(4079,"li")(4080,"p"),eN(4081,"Formato para moeda (currency). Exemplos: 'BRL', 'USD'."),og()(),Sl(4082,"li")(4083,"p"),eN(4084,`Formato para data (date): aceita apenas os caracteres de dia(dd), m\xEAs(MM) e ano (yyyy ou yy),
caso n\xE3o seja informado um formato o mesmo ser\xE1 'dd/MM/yyyy'. Exemplos: 'dd/MM/yyyy', 'dd-MM-yy', 'mm/dd/yyyy'.`),og()(),Sl(4085,"li")(4086,"p"),eN(4087,`Formato para hor\xE1rio (time): aceita apenas os caracteres de hora(HH), minutos(mm), segundos(ss) e milisegundos(f-ffffff), os milisegundos s\xE3o opcionais, caso n\xE3o seja informado um formato o mesmo ser\xE1
'HH:mm:ss'. Exemplos: 'HH:mm', 'HH:mm:ss.ffffff', 'HH:mm:ss.ff', 'mm:ss.fff'.`),og()(),Sl(4088,"li")(4089,"p"),eN(4090,"Formato para n\xFAmeros (number): aceita um valor seguindo o padr\xE3o "),Sl(4091,"a",110)(4092,"strong"),eN(4093,"DecimalPipe"),og()(),eN(4094," para formata\xE7\xE3o, e caso n\xE3o seja informado, o n\xFAmero ser\xE1 exibido na sua forma original. Exemplo:"),og(),Sl(4095,"ul")(4096,"li"),eN(4097,"Valor de entrada: "),Sl(4098,"code"),eN(4099,"50"),og(),eN(4100," e valor para formata\xE7\xE3o: "),Sl(4101,"code"),eN(4102,"'1.2-5'"),og(),eN(4103," o resultado ser\xE1: "),Sl(4104,"code"),eN(4105,"50.00"),og()()()()()()(),Sl(4106,"tr",17)(4107,"td",18)(4108,"div",19)(4109,"span",20),eN(4110," label"),Wl(4111,"br"),og()()(),Sl(4112,"td",21)(4113,"code",31),eN(4114,"string"),og()(),Sl(4115,"td",24)(4116,"em")(4117,"strong"),eN(4118,"(opcional)"),og()(),Sl(4119,"p"),eN(4120,"Texto para t\xEDtulo da coluna."),og()()(),Sl(4121,"tr",17)(4122,"td",18)(4123,"div",19)(4124,"span",20),eN(4125," property"),Wl(4126,"br"),og()()(),Sl(4127,"td",21)(4128,"code",31),eN(4129,"string"),og()(),Sl(4130,"td",24)(4131,"em")(4132,"strong"),eN(4133,"(opcional)"),og()(),Sl(4134,"p"),eN(4135,"Nome identificador da coluna."),og()()(),Sl(4136,"tr",17)(4137,"td",18)(4138,"div",19)(4139,"span",20),eN(4140," type"),Wl(4141,"br"),og()()(),Sl(4142,"td",21)(4143,"code",31),eN(4144,"string"),og()(),Sl(4145,"td",24)(4146,"em")(4147,"strong"),eN(4148,"(opcional)"),og()(),Sl(4149,"p"),eN(4150,"Tipo da coluna."),og(),Sl(4151,"p"),eN(4152,"Valores v\xE1lidos:"),og(),Sl(4153,"ul")(4154,"li")(4155,"p")(4156,"code"),eN(4157,"currency"),og(),eN(4158,": valores monet\xE1rios."),og()(),Sl(4159,"li")(4160,"p")(4161,"code"),eN(4162,"date"),og(),eN(4163,": valor de datas."),og(),Sl(4164,"ul")(4165,"li"),eN(4166,"Aceita os tipos "),Sl(4167,"em"),eN(4168,"string"),og(),eN(4169," e "),Sl(4170,"em"),eN(4171,"Date"),og(),eN(4172,` padr\xE3o do Javascript,
por exemplo: `),Sl(4173,"code"),eN(4174,"'2017-11-28'"),og(),eN(4175," ou "),Sl(4176,"code"),eN(4177,"new Date(2017, 10, 28)"),og(),eN(4178,"."),og()()(),Sl(4179,"li")(4180,"p")(4181,"code"),eN(4182,"time"),og(),eN(4183,": valor de hor\xE1rio."),og()(),Sl(4184,"li")(4185,"p")(4186,"code"),eN(4187,"number"),og(),eN(4188,": valores num\xE9ricos."),og()(),Sl(4189,"li")(4190,"p")(4191,"code"),eN(4192,"dateTime"),og(),eN(4193,": valor de data com hor\xE1rio."),og(),Sl(4194,"ul")(4195,"li"),eN(4196,"Aceita o tipo "),Sl(4197,"em"),eN(4198,"string"),og(),eN(4199," no formato "),Sl(4200,"strong"),eN(4201,"ISO-8601"),og(),eN(4202," extendido "),Sl(4203,"strong"),eN(4204,"'yyyy-mm-ddThh:mm:ss+|-hh:mm'"),og(),eN(4205,`
e o tipo `),Sl(4206,"em"),eN(4207,"Date"),og(),eN(4208," padr\xE3o do Javascript, por exemplo: "),Sl(4209,"code"),eN(4210,"'2017-11-28T00:00:00-02:00'"),og(),eN(4211," ou "),Sl(4212,"code"),eN(4213,"new Date(2017, 10, 28)"),og(),eN(4214,"."),og(),Sl(4215,"li"),eN(4216,"Aceita o tipo "),Sl(4217,"em"),eN(4218,"string"),og(),eN(4219," nos formatos "),Sl(4220,"strong"),eN(4221,"'HH:mm:ss'"),og(),eN(4222," ou "),Sl(4223,"strong"),eN(4224,"'HH:mm:ss.ffffff'"),og(),eN(4225,", por exemplo: "),Sl(4226,"code"),eN(4227,"'23:12:45'"),og(),eN(4228,"."),og()()()()()()(),Sl(4229,"h4",44)(4230,"code",5),eN(4231,"PoTableDetail"),og()(),Sl(4232,"div",2)(4233,"p"),eN(4234,"Interface para configura\xE7\xE3o do "),Sl(4235,"em"),eN(4236,"detail"),og(),eN(4237," do componente "),Sl(4238,"code"),eN(4239,"po-table"),og(),eN(4240,"."),og()(),Sl(4241,"h4",13),eN(4242,"Propriedades"),og(),Sl(4243,"table",14)(4244,"tr",15)(4245,"th",16),eN(4246,"Nome"),og(),Sl(4247,"th",16),eN(4248,"Tipo"),og(),Sl(4249,"th",16),eN(4250,"Descri\xE7\xE3o"),og()(),Sl(4251,"tr",17)(4252,"td",18)(4253,"div",19)(4254,"span",20),eN(4255," columns"),Wl(4256,"br"),og()()(),Sl(4257,"td",21)(4258,"code",111),eN(4259,"Array<PoTableDetailColumn>"),og()(),Sl(4260,"td",24)(4261,"p"),eN(4262,"Define uma lista do tipo "),Sl(4263,"code"),eN(4264,"PoTableDetailColumn"),og(),eN(4265," para as colunas do objet "),Sl(4266,"em"),eN(4267,"detail"),og(),eN(4268,". Por exemplo:"),og(),Sl(4269,"pre")(4270,"code"),eN(4271,`[
 { property: 'miles', label: 'Miles', type: 'number', format: '1.0-5' },
 { property: 'departure', label: 'Departure time', type: 'date', format: 'dd/MM/yyyy' }
]
`),og()()()(),Sl(4272,"tr",17)(4273,"td",18)(4274,"div",19)(4275,"span",20),eN(4276," hideSelect"),Wl(4277,"br"),og()()(),Sl(4278,"td",21)(4279,"code",22),eN(4280,"boolean"),og()(),Sl(4281,"td",24)(4282,"em")(4283,"strong"),eN(4284,"(opcional)"),og()(),Sl(4285,"p"),eN(4286,"Define se o checkbox de sele\xE7\xE3o do detail ser\xE1 exibido. Valor padr\xE3o 'false'."),og()()(),Sl(4287,"tr",17)(4288,"td",18)(4289,"div",19)(4290,"span",20),eN(4291," typeHeader"),Wl(4292,"br"),og()()(),Sl(4293,"td",21)(4294,"code",31),eN(4295,"string"),og()(),Sl(4296,"td",24)(4297,"em")(4298,"strong"),eN(4299,"(opcional)"),og()(),Sl(4300,"p"),eN(4301,"Define o tipo de cabe\xE7alho para o conte\xFAdo do "),Sl(4302,"em"),eN(4303,"detail"),og(),eN(4304," ."),og(),Sl(4305,"p"),eN(4306,"Valores v\xE1lidos:"),og(),Sl(4307,"ul")(4308,"li")(4309,"code"),eN(4310,"inline"),og(),eN(4311,": Atribui o cabe\xE7alho na mesma linha do "),Sl(4312,"em"),eN(4313,"detail"),og(),eN(4314,"."),og(),Sl(4315,"li")(4316,"code"),eN(4317,"top"),og(),eN(4318,": Atribui o cabe\xE7alho acima do "),Sl(4319,"em"),eN(4320,"detail"),og(),eN(4321,", id\xEAntico ao "),Sl(4322,"code"),eN(4323,"po-table"),og(),eN(4324,"."),og(),Sl(4325,"li")(4326,"code"),eN(4327,"none"),og(),eN(4328,": Remove o cabe\xE7alho do "),Sl(4329,"em"),eN(4330,"detail"),og(),eN(4331,"."),og()()()()(),Sl(4332,"h4",44)(4333,"code",5),eN(4334,"PoTableSubtitleColumn"),og()(),Sl(4335,"div",2)(4336,"p"),eN(4337,"Interface para configura\xE7\xE3o das colunas de legenda do Po-Table."),og()(),Sl(4338,"h4",13),eN(4339,"Propriedades"),og(),Sl(4340,"table",14)(4341,"tr",15)(4342,"th",16),eN(4343,"Nome"),og(),Sl(4344,"th",16),eN(4345,"Tipo"),og(),Sl(4346,"th",16),eN(4347,"Descri\xE7\xE3o"),og()(),Sl(4348,"tr",17)(4349,"td",18)(4350,"div",19)(4351,"span",20),eN(4352," color"),Wl(4353,"br"),og()()(),Sl(4354,"td",21)(4355,"code",31),eN(4356,"string"),og()(),Sl(4357,"td",24)(4358,"em")(4359,"strong"),eN(4360,"(opcional)"),og()(),Sl(4361,"p"),eN(4362,"Define a cor do "),Sl(4363,"em"),eN(4364,"status"),og(),eN(4365,"."),og(),Sl(4366,"p"),eN(4367,"Valores v\xE1lidos:"),og(),Sl(4368,"ul")(4369,"li"),Wl(4370,"span",51),Sl(4371,"code"),eN(4372,"color-01"),og()(),Sl(4373,"li"),Wl(4374,"span",52),Sl(4375,"code"),eN(4376,"color-02"),og()(),Sl(4377,"li"),Wl(4378,"span",53),Sl(4379,"code"),eN(4380,"color-03"),og()(),Sl(4381,"li"),Wl(4382,"span",54),Sl(4383,"code"),eN(4384,"color-04"),og()(),Sl(4385,"li"),Wl(4386,"span",55),Sl(4387,"code"),eN(4388,"color-05"),og()(),Sl(4389,"li"),Wl(4390,"span",56),Sl(4391,"code"),eN(4392,"color-06"),og()(),Sl(4393,"li"),Wl(4394,"span",57),Sl(4395,"code"),eN(4396,"color-07"),og()(),Sl(4397,"li"),Wl(4398,"span",58),Sl(4399,"code"),eN(4400,"color-08"),og()(),Sl(4401,"li"),Wl(4402,"span",59),Sl(4403,"code"),eN(4404,"color-09"),og()(),Sl(4405,"li"),Wl(4406,"span",60),Sl(4407,"code"),eN(4408,"color-10"),og()(),Sl(4409,"li"),Wl(4410,"span",61),Sl(4411,"code"),eN(4412,"color-11"),og()(),Sl(4413,"li"),Wl(4414,"span",62),Sl(4415,"code"),eN(4416,"color-12"),og()()(),Sl(4417,"blockquote")(4418,"p"),eN(4419,"Tamb\xE9m \xE9 poss\xEDvel utilizar as 35 cores da paleta "),Sl(4420,"strong"),eN(4421,"Caption Tag Colors"),og(),eN(4422,":"),og()(),Sl(4423,"ul")(4424,"li"),Wl(4425,"span",63),Sl(4426,"code"),eN(4427,"caption-tag-01"),og(),Wl(4428,"span",64),Sl(4429,"code"),eN(4430,"caption-tag-02"),og(),Wl(4431,"span",65),Sl(4432,"code"),eN(4433,"caption-tag-03"),og(),Wl(4434,"span",66),Sl(4435,"code"),eN(4436,"caption-tag-04"),og(),Wl(4437,"span",67),Sl(4438,"code"),eN(4439,"caption-tag-05"),og()(),Sl(4440,"li"),Wl(4441,"span",68),Sl(4442,"code"),eN(4443,"caption-tag-06"),og(),Wl(4444,"span",69),Sl(4445,"code"),eN(4446,"caption-tag-07"),og(),Wl(4447,"span",70),Sl(4448,"code"),eN(4449,"caption-tag-08"),og(),Wl(4450,"span",71),Sl(4451,"code"),eN(4452,"caption-tag-09"),og(),Wl(4453,"span",72),Sl(4454,"code"),eN(4455,"caption-tag-10"),og()(),Sl(4456,"li"),Wl(4457,"span",73),Sl(4458,"code"),eN(4459,"caption-tag-11"),og(),Wl(4460,"span",74),Sl(4461,"code"),eN(4462,"caption-tag-12"),og(),Wl(4463,"span",75),Sl(4464,"code"),eN(4465,"caption-tag-13"),og(),Wl(4466,"span",76),Sl(4467,"code"),eN(4468,"caption-tag-14"),og(),Wl(4469,"span",77),Sl(4470,"code"),eN(4471,"caption-tag-15"),og()(),Sl(4472,"li"),Wl(4473,"span",78),Sl(4474,"code"),eN(4475,"caption-tag-16"),og(),Wl(4476,"span",79),Sl(4477,"code"),eN(4478,"caption-tag-17"),og(),Wl(4479,"span",80),Sl(4480,"code"),eN(4481,"caption-tag-18"),og(),Wl(4482,"span",81),Sl(4483,"code"),eN(4484,"caption-tag-19"),og(),Wl(4485,"span",82),Sl(4486,"code"),eN(4487,"caption-tag-20"),og()(),Sl(4488,"li"),Wl(4489,"span",83),Sl(4490,"code"),eN(4491,"caption-tag-21"),og(),Wl(4492,"span",84),Sl(4493,"code"),eN(4494,"caption-tag-22"),og(),Wl(4495,"span",85),Sl(4496,"code"),eN(4497,"caption-tag-23"),og(),Wl(4498,"span",86),Sl(4499,"code"),eN(4500,"caption-tag-24"),og(),Wl(4501,"span",87),Sl(4502,"code"),eN(4503,"caption-tag-25"),og()(),Sl(4504,"li"),Wl(4505,"span",88),Sl(4506,"code"),eN(4507,"caption-tag-26"),og(),Wl(4508,"span",89),Sl(4509,"code"),eN(4510,"caption-tag-27"),og(),Wl(4511,"span",90),Sl(4512,"code"),eN(4513,"caption-tag-28"),og(),Wl(4514,"span",91),Sl(4515,"code"),eN(4516,"caption-tag-29"),og(),Wl(4517,"span",92),Sl(4518,"code"),eN(4519,"caption-tag-30"),og()(),Sl(4520,"li"),Wl(4521,"span",93),Sl(4522,"code"),eN(4523,"caption-tag-31"),og(),Wl(4524,"span",94),Sl(4525,"code"),eN(4526,"caption-tag-32"),og(),Wl(4527,"span",95),Sl(4528,"code"),eN(4529,"caption-tag-33"),og(),Wl(4530,"span",96),Sl(4531,"code"),eN(4532,"caption-tag-34"),og(),Wl(4533,"span",97),Sl(4534,"code"),eN(4535,"caption-tag-35"),og()()()()(),Sl(4536,"tr",17)(4537,"td",18)(4538,"div",19)(4539,"span",20),eN(4540," content"),Wl(4541,"br"),og()()(),Sl(4542,"td",21)(4543,"code",31),eN(4544,"string"),og()(),Sl(4545,"td",24)(4546,"p"),eN(4547,"Conte\xFAdo que ser\xE1 exibido na coluna da tabela."),og()()(),Sl(4548,"tr",17)(4549,"td",18)(4550,"div",19)(4551,"span",20),eN(4552," label"),Wl(4553,"br"),og()()(),Sl(4554,"td",21)(4555,"code",31),eN(4556,"string"),og()(),Sl(4557,"td",24)(4558,"p"),eN(4559,"Texto que ser\xE1 exibido no rodap\xE9 da tabela como legenda."),og()()(),Sl(4560,"tr",17)(4561,"td",18)(4562,"div",19)(4563,"span",20),eN(4564," value"),Wl(4565,"br"),og()()(),Sl(4566,"td",21)(4567,"code",31),eN(4568,"string "),og(),Sl(4569,"code",35),eN(4570," number"),og()(),Sl(4571,"td",24)(4572,"p"),eN(4573,"Valor que ser\xE1 usado como refer\xEAncia para exibi\xE7\xE3o do conte\xFAdo na coluna."),og()()()(),Sl(4574,"h3"),eN(4575,"Enums"),og(),Sl(4576,"h4",4)(4577,"code",5),eN(4578,"PoTableColumnSortType"),og()(),Sl(4579,"div",2)(4580,"p"),eN(4581,"Tipos de ordena\xE7\xE3o das colunas da tabela."),og()(),Sl(4582,"h4",13),eN(4583,"Propriedades"),og(),Sl(4584,"table",14)(4585,"tr",15)(4586,"th",16),eN(4587,"Nome"),og(),Sl(4588,"th",16),eN(4589,"Descri\xE7\xE3o"),og()(),Sl(4590,"tr",17)(4591,"td",18)(4592,"div",19)(4593,"span",20),eN(4594," Ascending"),Wl(4595,"br"),og()()(),Sl(4596,"td",24)(4597,"p"),eN(4598,"Ordena\xE7\xE3o ascendente"),og()()(),Sl(4599,"tr",17)(4600,"td",18)(4601,"div",19)(4602,"span",20),eN(4603," Descending"),Wl(4604,"br"),og()()(),Sl(4605,"td",24)(4606,"p"),eN(4607,"Ordena\xE7\xE3o descendente"),og()()()(),Sl(4608,"h4",4)(4609,"code",5),eN(4610,"PoTableColumnSpacing"),og()(),Sl(4611,"div",2)(4612,"p"),eN(4613,"Tipos de espa\xE7amento interno (padding) das c\xE9lulas ("),Sl(4614,"strong"),eN(4615,"p-spacing"),og(),eN(4616,") do po-table."),og()(),Sl(4617,"h4",13),eN(4618,"Propriedades"),og(),Sl(4619,"table",14)(4620,"tr",15)(4621,"th",16),eN(4622,"Nome"),og(),Sl(4623,"th",16),eN(4624,"Descri\xE7\xE3o"),og()(),Sl(4625,"tr",17)(4626,"td",18)(4627,"div",19)(4628,"span",20),eN(4629," ExtraSmall"),Wl(4630,"br"),og()()(),Sl(4631,"td",24)(4632,"p"),eN(4633,"Espa\xE7amento extra pequeno: 0.25rem (vertical) x 0.5rem (horizontal)."),og()()(),Sl(4634,"tr",17)(4635,"td",18)(4636,"div",19)(4637,"span",20),eN(4638," Small"),Wl(4639,"br"),og()()(),Sl(4640,"td",24)(4641,"p"),eN(4642,"Espa\xE7amento pequeno: 0.5rem (vertical) x 1rem (horizontal)."),og()()(),Sl(4643,"tr",17)(4644,"td",18)(4645,"div",19)(4646,"span",20),eN(4647," Medium"),Wl(4648,"br"),og()()(),Sl(4649,"td",24)(4650,"p"),eN(4651,"Espa\xE7amento m\xE9dio: 0.75rem (vertical) x 1rem (horizontal)."),og()()(),Sl(4652,"tr",17)(4653,"td",18)(4654,"div",19)(4655,"span",20),eN(4656," Large"),Wl(4657,"br"),og()()(),Sl(4658,"td",24)(4659,"p"),eN(4660,"Espa\xE7amento grande: 1rem (vertical) x 1rem (horizontal)."),og()()()()());},dependencies:[Ka],encapsulation:2})}return r})();var pt=(()=>{class r{route;router;sub;hidePoWebSample=true;samplesLength=8;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(a,l){this.route=a,this.router=l;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let l=a.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:"merge"}),this.activeTab=a;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(l){return new(l||r)(w(Xn),w(En))};static \u0275cmp=Un({type:r,selectors:[["ng-component"]],standalone:false,decls:13,vars:4,consts:[["p-title","Table",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,o){l&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return o.changeTab("doc")}),Wl(3,"sample-po-table-doc"),og(),Sl(4,"po-tab",3),ft("p-click",function(){return o.changeTab("web")}),Wl(5,"sample-po-table-basic-view")(6,"sample-po-table-labs-view")(7,"sample-po-table-with-api-view")(8,"sample-po-table-transport-view")(9,"sample-po-table-airfare-view")(10,"sample-po-table-components-view")(11,"sample-po-table-heroes-view")(12,"sample-po-table-draggable-view"),og()()()),l&2&&(nw("p-actions",o.actions),Lp(2),nw("p-active",o.activeTab==="doc"),Lp(2),nw("p-hide",o.hidePoWebSample)("p-active",o.activeTab==="web"));},dependencies:[rNe,Bme,qme,Je,Ke,Ze,tt,it,at,rt,st,dt],encapsulation:2})}return r})();var en=[{path:"",component:pt}],ct=(()=>{class r{static \u0275fac=function(l){return new(l||r)};static \u0275mod=fe({type:r});static \u0275inj=ue$1({imports:[hL.forChild(en),hL]})}return r})();var ai=(()=>{class r{static \u0275fac=function(l){return new(l||r)};static \u0275mod=fe({type:r});static \u0275inj=ue$1({imports:[sr,ct]})}return r})();export{ai as DocPoTableModule};