import {f as fe,u as ue$1,s as sr,m as mL,w,c3 as Xn,E as En,U as Un,I,c$ as Xi,dv as Up,h as s,a as r$1,aW as Yp,c5 as Ode,dD as _h,b$ as bT,b,b7 as M3,F as Wl,O as rw,bs as gN,a7 as pN,an as SO,aH as Ka,b8 as Ume,b9 as $me,C as Sl,y as rN,J as og,a1 as ft,L as Lp,ar as Gx,au as dg,aX as Q9,aF as Z9,aY as K9,aG as wk,aZ as _k,b0 as Qt$1,b1 as mv,c4 as b3,b4 as L3,cp as Bhe,c8 as Tde,bH as k3,c9 as jhe,b6 as Yo,aB as Ix,aM as Cw,aN as n0,aO as ww,aP as i0,Q as we,av as ql,aw as lo,ax as uo,cI as y3,b5 as Ghe,aJ as Whe,dE as jue,ba as vNe,a2 as ew,dF as UO,a4 as EN,cH as cN,a6 as bN,as as uN,dh as $ue,dj as FO,aQ as yx,aR as vx,aS as _x,r as rb,a3 as sNe,aA as xx,br as lN,_ as _w,a5 as CN,aD as Ky,aT as oN,aE as Xy}from'./main-TVDUJ47Y.js';var ut=()=>({table:"PO Table",angular:"PO-UI"}),bt=r=>[r],Ge=(()=>{class r{static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-table-basic"]],standalone:false,decls:1,vars:4,consts:[[3,"p-items"]],template:function(l,a){l&1&&Wl(0,"po-table",0),l&2&&rw("p-items",gN(2,bt,pN(1,ut)));},dependencies:[M3],encapsulation:2,changeDetection:1})}return r})();var St=r=>({"docs-sample-code-tabs":r}),Je=(()=>{class r{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-table-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,a){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),rN(3,"PO Table Basic"),og(),Sl(4,"a",2),ft("click",function(){return a.toggleSampleCodeTabs()}),Wl(5,"span"),rN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),rN(12,"sample-po-table-basic/sample-po-table-basic.component.html"),og(),Sl(13,"pre",7),rN(14,`<po-table [p-items]="[{ table: 'PO Table', angular: 'PO-UI' }]"> </po-table>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),rN(18,"sample-po-table-basic/sample-po-table-basic.component.ts"),og(),Sl(19,"pre",9),rN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-table-basic',
  templateUrl: './sample-po-table-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTableBasicComponent {}
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-table-basic"),og(),Wl(23,"hr")),l&2&&(Lp(5),Gx("po-icon "+a.sampleCodeButtonIcon),Lp(),dg(" ",a.sampleCodeButtonLabel),Lp(),rw("ngClass",gN(4,St,a.hideSampleCodeTabs)));},dependencies:[SO,Ka,Ume,$me,Ge],encapsulation:2,changeDetection:1})}return r})();var se=(()=>{class r{colors=["color-01","color-02","color-03","color-04","color-05","color-06","color-07","color-08","color-09","color-10","color-11","color-12","caption-tag-01","caption-tag-03","caption-tag-06","caption-tag-08","caption-tag-11","caption-tag-13","caption-tag-16","caption-tag-18","caption-tag-21","caption-tag-23","caption-tag-26","caption-tag-28","caption-tag-31","caption-tag-33"];generateNewItem(o){return {text:`Text ${o}`,page:`Link ${o}`,link:"https://po-ui.io/",number:o,date:this.generateRandomDate(),time:this.generateRandomTime(),dateTime:this.generateRandomDate(),currency:this.generateRandomNumber(),subtitle:this.generateRandomColor(),detail:[{info:"Detail Information 1",date:new Date,time:this.generateRandomTime(),currency:1500.5},{info:"Detail Information 2",date:new Date,time:this.generateRandomTime(),currency:6511}],label:this.generateRandomColor(),color:`Text ${o}`,icon:this.generateRandomIcon(o),boolean:this.generateRandomBoolean()}}getColumns(){return {text:{property:"text",width:"30%"},number:{property:"number",type:"number"},date:{property:"date",type:"date"},time:{property:"time",type:"time"},dateTime:{property:"dateTime",label:"DateTime",type:"dateTime"},currency:{property:"currency",type:"currency",format:"USD"},link:{property:"page",label:"Link",type:"link"},icon:{property:"icon",type:"icon"},boolean:{property:"boolean",type:"boolean"},subtitle:{property:"subtitle",type:"subtitle",width:"10%",subtitles:[{value:"color-01",color:"color-01",label:"Color 1",content:"1"},{value:"color-02",color:"color-02",label:"Color 2",content:"2"},{value:"color-03",color:"color-03",label:"Color 3",content:"3"},{value:"color-04",color:"color-04",label:"Color 4",content:"4"},{value:"color-05",color:"color-05",label:"Color 5",content:"5"},{value:"color-06",color:"color-06",label:"Color 6",content:"6"},{value:"color-07",color:"color-07",label:"Color 7",content:"7"},{value:"color-08",color:"color-08",label:"Color 8",content:"8"},{value:"color-09",color:"color-09",label:"Color 9",content:"9"},{value:"color-10",color:"color-10",label:"Color 10",content:"10"},{value:"color-11",color:"color-11",label:"Color 11",content:"11"},{value:"color-12",color:"color-12",label:"Color 12",content:"12"}]},label:{property:"label",type:"label",width:"10%",labels:[{value:"color-01",color:"color-01",label:"Color 1"},{value:"color-02",color:"color-02",label:"Color 2"},{value:"color-03",color:"color-03",label:"Color 3"},{value:"color-04",color:"color-04",label:"Color 4"},{value:"color-05",color:"color-05",label:"Color 5"},{value:"color-06",color:"color-06",label:"Color 6"},{value:"color-07",color:"color-07",label:"Color 7"},{value:"color-08",color:"color-08",label:"Color 8"},{value:"color-09",color:"color-09",label:"Color 9"},{value:"color-10",color:"color-10",label:"Color 10"},{value:"color-11",color:"color-11",label:"Color 11"},{value:"color-12",color:"color-12",label:"Color 12"},{value:"caption-tag-01",color:"caption-tag-01",label:"Caption 01"},{value:"caption-tag-03",color:"caption-tag-03",label:"Caption 03"},{value:"caption-tag-06",color:"caption-tag-06",label:"Caption 06"},{value:"caption-tag-08",color:"caption-tag-08",label:"Caption 08"},{value:"caption-tag-11",color:"caption-tag-11",label:"Caption 11"},{value:"caption-tag-13",color:"caption-tag-13",label:"Caption 13"},{value:"caption-tag-16",color:"caption-tag-16",label:"Caption 16"},{value:"caption-tag-18",color:"caption-tag-18",label:"Caption 18"},{value:"caption-tag-21",color:"caption-tag-21",label:"Caption 21"},{value:"caption-tag-23",color:"caption-tag-23",label:"Caption 23"},{value:"caption-tag-26",color:"caption-tag-26",label:"Caption 26"},{value:"caption-tag-28",color:"caption-tag-28",label:"Caption 28"},{value:"caption-tag-31",color:"caption-tag-31",label:"Caption 31"},{value:"caption-tag-33",color:"caption-tag-33",label:"Caption 33"}]},color:{property:"color",width:"10%",color:this.changeColor},detail:{property:"detail",type:"detail",detail:{columns:[{property:"info",label:"Detail"},{property:"date",label:"Detail Date",type:"date",format:"dd-MM-yy"},{property:"time",label:"Detail Time",type:"time"},{property:"currency",label:"Detail Currency",type:"currency"}],typeHeader:"inline"}}}}changeColor(o,l){return o[l].slice(5,7).trim()%2===0?"caption-tag-08":"caption-tag-13"}generateRandomBoolean(){return Math.random()>=.5}generateRandomNumber(){return (Math.random()*200+1).toFixed(3)}generateRandomColor(){return this.colors[Math.floor(Math.random()*this.colors.length)]}generateRandomIcon(o){let l=["an an-copy","an an-check","an an-camera","an an-plant","an an-building-apartment"],a=["an an-trash","an an-newspaper","an an-gas-pump","an an-chats","an an-bluetooth"],m=Math.floor(Math.random()*5);return [{value:`${o}`,icon:l[m],tooltip:l[m]},{value:`${o}`,icon:a[m],tooltip:a[m]}]}generateRandomTime(){let o=Math.floor(Math.random()*23),l=Math.floor(Math.random()*59),a=Math.floor(Math.random()*59),m=o<10?"0"+o.toString():o.toString(),p=l<10?"0"+l.toString():l.toString(),d=a<10?"0"+a.toString():a.toString();return `${m}:${p}:${d}`}generateRandomDate(){let o=Math.floor(Math.random()*28),l=Math.floor(Math.random()*12),a=Math.floor(Math.random()*24)+2e3;return new Date(a,l,o)}static \u0275fac=function(l){return new(l||r)};static \u0275prov=I({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();var Xe=(()=>{class r{samplePoTableLabsService;poModal;actions;actionsDefinition;actionTableFirst={action:this.openModal.bind(this),disabled:this.disableAction.bind(this),label:"First Action"};actionTableSecond={action:this.openModal.bind(this),label:"Second Action"};columns;columnsDefinition;columnsName;componentsSize;container;currentItem;customLiterals;event;height;items;itemIndex=0;literals;maxColumns;properties=["hideBatchActions","hideTableSearch"];selection;spacing=Xi.Medium;filterType=Up.startsWith;filteredColumns=[];actionsDefinitionOptions=[{label:"Actions",value:"actions"},{label:"Disable first action",value:"disableAction",disabled:true},{label:"Single action",value:"singleAction"},{label:"First action visible",value:"visibleAction"}];selectionOptions=[{label:"Selectable",value:"selectable"},{label:"Hide select all",value:"hideSelectAll",disabled:true},{label:"Single select",value:"singleSelect",disabled:true}];componentsSizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];filterModeOptions=[{label:"Starts With",value:Up.startsWith},{label:"Contains",value:Up.contains},{label:"Ends With",value:Up.endsWith}];columnsOptions=[{value:"text",label:"Text"},{value:"link",label:"Link"},{value:"number",label:"Number"},{value:"currency",label:"Currency"},{value:"date",label:"Date"},{value:"time",label:"Time"},{value:"dateTime",label:"DateTime"},{value:"subtitle",label:"Subtitle"},{value:"detail",label:"Detail"},{value:"label",label:"Label"},{value:"color",label:"Color"},{value:"icon",label:"Icon"},{value:"boolean",label:"Boolean"}];propertiesOptions=[{label:"Sort",value:"sort"},{label:"Striped",value:"striped"},{label:"Show more disabled",value:"showMoreDisabled"},{label:"Loading show more",value:"loadingShowMore"},{label:"Hide detail",value:"hideDetail"},{label:"Loading",value:"loading"},{label:"Auto collapse",value:"autoCollapse"},{label:"Hide columns manager",value:"hideColumnsManager"},{label:"Hide batch actions",value:"hideBatchActions"},{label:"Actions Right",value:"actionsRight"},{label:"Draggable",value:"draggable"},{label:"Hide action fixed columns",value:"fixed"},{label:"Hide Table Search",value:"hideTableSearch"},{label:"Virtual Scroll",value:"virtualScroll"}];typeHeaderOptions=[{label:"Inline",value:"inline"},{label:"None",value:"none"},{label:"Top",value:"top"}];typeSpacing=[{label:"ExtraSmall",value:"extraSmall"},{label:"Small",value:"small"},{label:"Medium",value:"medium"},{label:"Large",value:"large"}];constructor(o){this.samplePoTableLabsService=o,this.columnsDefinition=this.samplePoTableLabsService?.getColumns();}ngOnInit(){this.restore();}addItem(){this.items=[...this.items,this.samplePoTableLabsService.generateNewItem(this.itemIndex)],this.itemIndex++;}changeActionOptions(){let o=this.actionsDefinition.actions;this.actionsDefinitionOptions[1].disabled=!o,this.actionsDefinitionOptions[2].disabled=!o,this.actionsDefinitionOptions[3].disabled=!o,this.actionsDefinitionOptions=[].concat(this.actionsDefinitionOptions),this.actions=o?this.actionsDefinition.singleAction?[this.actionTableFirst]:[this.actionTableFirst,this.actionTableSecond]:[],this.actionTableFirst.visible=this.actionsDefinition.visibleAction,this.spacingSelectOrAction();}changeEvent(o){this.event=o;}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals);}catch(o){this.customLiterals=void 0;}}changeFilteredColumns(){this.filteredColumns=this.filteredColumns.toString().split(/,\s*/);}changeSelectionOptions(){let o=this.selection.includes("singleSelect"),l=this.selection.includes("selectable");this.selectionOptions[1].disabled=o||!l,this.selectionOptions[2].disabled=!l,this.selectionOptions=[].concat(this.selectionOptions),this.spacingSelectOrAction();}deleteItems(o){this.height&&(this.items=o);}disableAction(){return this.actionsDefinition.disableAction}openModal(o){this.currentItem=o.text,this.poModal.open();}restore(){this.actionsDefinition={visibleAction:null},this.actions=[],this.columnsDefinition.detail.detail.typeHeader=void 0,this.columnsName=[],this.container="",this.customLiterals=void 0,this.height=void 0,this.componentsSize="medium",this.items=[],this.itemIndex=0,this.literals="",this.maxColumns=void 0,this.properties=["hideBatchActions","hideTableSearch"],this.selection=[],this.spacing=Xi.Medium,this.filteredColumns=[],this.updateColumns(),this.changeActionOptions();}showMore(){this.addItem();}updateColumns(){this.columns=[],this.columnsName.forEach(o=>{this.columns.push(this.columnsDefinition[o]);});}spacingSelectOrAction(){this.columnsName.length>0&&this.updateColumns();}static \u0275fac=function(l){return new(l||r)(w(se))};static \u0275cmp=Un({type:r,selectors:[["sample-po-table-labs"]],viewQuery:function(l,a){if(l&1&&ql(Yo,7),l&2){let m;lo(m=uo())&&(a.poModal=m.first);}},standalone:false,features:[we([se])],decls:34,vars:51,consts:[["f","ngForm"],[3,"p-all-selected","p-all-unselected","p-change-fixed-columns","p-collapsed","p-expanded","p-selected","p-show-more","p-unselected","p-delete-items","p-actions","p-actions-right","p-columns","p-container","p-height","p-filter-type","p-components-size","p-hide-detail","p-hide-columns-manager","p-hide-batch-actions","p-hide-table-search","p-hide-select-all","p-items","p-literals","p-filtered-columns","p-loading","p-max-columns","p-selectable","p-spacing","p-loading-show-more","p-show-more-disabled","p-single-select","p-sort","p-striped","p-virtual-scroll","p-auto-collapse","p-draggable","p-hide-action-fixed-columns"],[1,"po-row"],["p-label","Event",1,"po-md-12",3,"p-value"],["p-label","Add Item",1,"po-md-3",3,"p-click"],["name","columnsName","p-label","Columns","p-columns","4",1,"po-md-12",3,"ngModelChange","p-change","ngModel","p-options"],["p-columns","3","name","typeHeader","p-label","Column detail typeHeader",1,"po-lg-9",3,"ngModelChange","ngModel","p-options"],["name","hideSelect","p-label","Column detail hideSelect",1,"po-lg-3",3,"ngModelChange","ngModel"],["name","properties","p-label","Properties","p-columns","4",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","actionsDefinition","p-columns","4","p-indeterminate","","p-label","Actions",1,"po-lg-12",3,"ngModelChange","p-change","ngModel","p-options"],["name","spacing","p-columns","4","p-help","Para aplicar o tamanho extraSmall, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).","p-label","Spacing",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","selection","p-columns","4","p-help","To enable 'hide select all' and 'single select' check 'selectable'.","p-label","Selection",1,"po-lg-12",3,"ngModelChange","p-change","ngModel","p-options"],["name","filterMode","p-columns","4","p-label","Filter mode",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Components size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","literals","p-help",'Ex.: {"noData": "Sem dados a serem exibidos", "noColumns": "Colunas n\xE3o definidas"}',"p-label","Literals",1,"po-md-12","po-lg-6",3,"ngModelChange","p-change","ngModel"],["name","filteredColumns","p-help",'Ex.: "text, time"',"p-label","Filter Columns",1,"po-md-6",3,"ngModelChange","p-change","ngModel"],["name","height","p-clean","","p-help","Height of table","p-label","Height",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","maxColumns","p-clean","","p-help","Max columns to be visible","p-label","Max Columns",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"],["p-click-out","true","p-size","sm","p-title","PO Table"],["p-label","Chosen Item:",3,"p-value"]],template:function(l,a){if(l&1){let m=Ix();Sl(0,"po-table",1),ft("p-all-selected",function(){return a.changeEvent("p-all-selected")})("p-all-unselected",function(){return a.changeEvent("p-all-unselected")})("p-change-fixed-columns",function(){return a.changeEvent("p-change-fixed-columns")})("p-collapsed",function(){return a.changeEvent("p-collapsed")})("p-expanded",function(){return a.changeEvent("p-expanded")})("p-selected",function(){return a.changeEvent("p-selected")})("p-show-more",function(){return a.showMore()})("p-unselected",function(){return a.changeEvent("p-unselected")})("p-delete-items",function(d){return a.deleteItems(d)}),og(),Wl(1,"po-divider"),Sl(2,"div",2),Wl(3,"po-info",3),og(),Wl(4,"po-divider"),Sl(5,"div",2)(6,"po-button",4),ft("p-click",function(){return a.addItem()}),og()(),Wl(7,"po-divider"),Sl(8,"form",null,0)(10,"div",2)(11,"po-checkbox-group",5),Cw("ngModelChange",function(d){return Ky(m),oN(a.columnsName,d)||(a.columnsName=d),Xy(d)}),ft("p-change",function(){return a.updateColumns()}),og(),n0(),og(),Sl(12,"div",2)(13,"po-radio-group",6),Cw("ngModelChange",function(d){return Ky(m),oN(a.columnsDefinition.detail.detail.typeHeader,d)||(a.columnsDefinition.detail.detail.typeHeader=d),Xy(d)}),og(),n0(),Sl(14,"po-switch",7),Cw("ngModelChange",function(d){return Ky(m),oN(a.columnsDefinition.detail.detail.hideSelect,d)||(a.columnsDefinition.detail.detail.hideSelect=d),Xy(d)}),og(),n0(),og(),Sl(15,"div",2)(16,"po-checkbox-group",8),Cw("ngModelChange",function(d){return Ky(m),oN(a.properties,d)||(a.properties=d),Xy(d)}),og(),n0(),og(),Sl(17,"div",2)(18,"po-checkbox-group",9),Cw("ngModelChange",function(d){return Ky(m),oN(a.actionsDefinition,d)||(a.actionsDefinition=d),Xy(d)}),ft("p-change",function(){return a.changeActionOptions()}),og(),n0(),og(),Sl(19,"div",2)(20,"po-radio-group",10),Cw("ngModelChange",function(d){return Ky(m),oN(a.spacing,d)||(a.spacing=d),Xy(d)}),og(),n0(),og(),Sl(21,"div",2)(22,"po-checkbox-group",11),Cw("ngModelChange",function(d){return Ky(m),oN(a.selection,d)||(a.selection=d),Xy(d)}),ft("p-change",function(){return a.changeSelectionOptions()}),og(),n0(),Sl(23,"po-radio-group",12),Cw("ngModelChange",function(d){return Ky(m),oN(a.filterType,d)||(a.filterType=d),Xy(d)}),og(),n0(),Sl(24,"po-radio-group",13),Cw("ngModelChange",function(d){return Ky(m),oN(a.componentsSize,d)||(a.componentsSize=d),Xy(d)}),og(),n0(),og(),Sl(25,"div",2)(26,"po-input",14),Cw("ngModelChange",function(d){return Ky(m),oN(a.literals,d)||(a.literals=d),Xy(d)}),ft("p-change",function(){return a.changeLiterals()}),og(),n0(),Sl(27,"po-input",15),Cw("ngModelChange",function(d){return Ky(m),oN(a.filteredColumns,d)||(a.filteredColumns=d),Xy(d)}),ft("p-change",function(){return a.changeFilteredColumns()}),og(),n0(),Sl(28,"po-number",16),Cw("ngModelChange",function(d){return Ky(m),oN(a.height,d)||(a.height=d),Xy(d)}),og(),n0(),Sl(29,"po-number",17),Cw("ngModelChange",function(d){return Ky(m),oN(a.maxColumns,d)||(a.maxColumns=d),Xy(d)}),og(),n0(),og(),Sl(30,"div",2)(31,"po-button",18),ft("p-click",function(){return a.restore()}),og()()(),Sl(32,"po-modal",19),Wl(33,"po-info",20),og();}l&2&&(rw("p-actions",a.actions)("p-actions-right",a.properties.includes("actionsRight"))("p-columns",a.columns)("p-container",a.container)("p-height",a.height)("p-filter-type",a.filterType)("p-components-size",a.componentsSize)("p-hide-detail",a.properties.includes("hideDetail"))("p-hide-columns-manager",a.properties.includes("hideColumnsManager"))("p-hide-batch-actions",a.properties.includes("hideBatchActions"))("p-hide-table-search",a.properties.includes("hideTableSearch"))("p-hide-select-all",a.selection.includes("hideSelectAll"))("p-items",a.items)("p-literals",a.customLiterals)("p-filtered-columns",a.filteredColumns)("p-loading",a.properties.includes("loading"))("p-max-columns",a.maxColumns)("p-selectable",a.selection.includes("selectable"))("p-spacing",a.spacing)("p-loading-show-more",a.properties.includes("loadingShowMore"))("p-show-more-disabled",a.properties.includes("showMoreDisabled"))("p-single-select",a.selection.includes("singleSelect"))("p-sort",a.properties.includes("sort"))("p-striped",a.properties.includes("striped"))("p-virtual-scroll",a.properties.includes("virtualScroll"))("p-auto-collapse",a.properties.includes("autoCollapse"))("p-draggable",a.properties.includes("draggable"))("p-hide-action-fixed-columns",a.properties.includes("fixed")),Lp(3),rw("p-value",a.event),Lp(8),ww("ngModel",a.columnsName),rw("p-options",a.columnsOptions),i0(),Lp(2),ww("ngModel",a.columnsDefinition.detail.detail.typeHeader),rw("p-options",a.typeHeaderOptions),i0(),Lp(),ww("ngModel",a.columnsDefinition.detail.detail.hideSelect),i0(),Lp(2),ww("ngModel",a.properties),rw("p-options",a.propertiesOptions),i0(),Lp(2),ww("ngModel",a.actionsDefinition),rw("p-options",a.actionsDefinitionOptions),i0(),Lp(2),ww("ngModel",a.spacing),rw("p-options",a.typeSpacing),i0(),Lp(2),ww("ngModel",a.selection),rw("p-options",a.selectionOptions),i0(),Lp(),ww("ngModel",a.filterType),rw("p-options",a.filterModeOptions),i0(),Lp(),ww("ngModel",a.componentsSize),rw("p-options",a.componentsSizeOptions),i0(),Lp(2),ww("ngModel",a.literals),i0(),Lp(),ww("ngModel",a.filteredColumns),i0(),Lp(),ww("ngModel",a.height),i0(),Lp(),ww("ngModel",a.maxColumns),i0(),Lp(4),rw("p-value",a.currentItem));},dependencies:[Q9,Z9,K9,wk,_k,Qt$1,mv,b3,L3,Bhe,Tde,k3,jhe,Yo,M3],encapsulation:2,changeDetection:1})}return r})();var vt=r=>({"docs-sample-code-tabs":r}),Ke=(()=>{class r{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-table-labs-view"]],standalone:false,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,a){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),rN(3,"PO Table Labs"),og(),Sl(4,"a",2),ft("click",function(){return a.toggleSampleCodeTabs()}),Wl(5,"span"),rN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),rN(12,"sample-po-table-labs/sample-po-table-labs.component.html"),og(),Sl(13,"pre",7),rN(14,`<po-table
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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),rN(18,"sample-po-table-labs/sample-po-table-labs.component.ts"),og(),Sl(19,"pre",9),rN(20,`import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),og(),Sl(21,"label",6),rN(22,"sample-po-table-labs/sample-po-table-labs.service.ts"),og(),Sl(23,"pre",9),rN(24,`import { Injectable } from '@angular/core';

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
`),og()()()()(),Sl(25,"div",10),Wl(26,"sample-po-table-labs"),og(),Wl(27,"hr")),l&2&&(Lp(5),Gx("po-icon "+a.sampleCodeButtonIcon),Lp(),dg(" ",a.sampleCodeButtonLabel),Lp(),rw("ngClass",gN(4,vt,a.hideSampleCodeTabs)));},dependencies:[SO,Ka,Ume,$me,Xe],encapsulation:2,changeDetection:1})}return r})();var Ct=["table"],Ze=(()=>{class r{tableComponent;service="";key;value;sampleService="";params;filters=[];columns=[{property:"id"},{property:"name"}];stringColumns=JSON.stringify(this.columns);defaultColumns=[...this.columns];addFilter(o,l){this.params=s(r$1({},this.params),{[o]:l}),this.setFilters(o,l),this.tableComponent.applyFilters(this.params),this.resetInputs();}changeService(o){this.sampleService=o;}onChangeColumns(o){try{this.columns=JSON.parse(o);}catch(l){this.stringColumns=JSON.stringify(this.defaultColumns),this.columns=[...this.defaultColumns];}}removeAllItems(){this.tableComponent.applyFilters({});}removeItem(o){delete this.params[o.removedDisclaimer.property],this.tableComponent.applyFilters(this.params);}resetInputs(){this.key=void 0,this.value=void 0;}setFilters(o,l){let a=this.filters.find(m=>m.property===o);a?(this.filters.splice(this.filters.indexOf(a),1),a=Object.assign({},a)):a={property:o},a.value=l,a.label=`${o.charAt(0).toUpperCase()+o.slice(1)}: ${l}`,this.filters=[...this.filters,a];}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-table-with-api"]],viewQuery:function(l,a){if(l&1&&ql(Ct,5),l&2){let m;lo(m=uo())&&(a.tableComponent=m.first);}},standalone:false,decls:16,vars:12,consts:[["table",""],[1,"po-row"],["p-label","URL API service","p-help","https://po-sample-api.onrender.com/v1/heroes",1,"po-md-12",3,"ngModelChange","p-change","ngModel"],["p-label","Columns",1,"po-md-12"],["p-label","Columns","p-help","[{ property: 'name' }]",1,"po-md-12",3,"ngModelChange","p-change","ngModel","p-rows"],["p-label","Filters",1,"po-md-12"],["p-label","Key","p-help","Object key",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Value","p-help","Object value",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add Filter",1,"po-md-3",3,"p-click","p-disabled"],[1,"po-mt-1","po-md-12",3,"p-remove","p-remove-all","p-disclaimers"],[1,"po-mt-1","po-md-12",3,"p-columns","p-service-api","p-height","p-hide-table-search","p-infinite-scroll"]],template:function(l,a){if(l&1){let m=Ix();Sl(0,"div",1)(1,"po-input",2),Cw("ngModelChange",function(d){return Ky(m),oN(a.service,d)||(a.service=d),Xy(d)}),ft("p-change",function(){return a.changeService(a.service)}),og(),n0(),og(),Sl(2,"div",1),Wl(3,"po-divider",3),Sl(4,"po-textarea",4),Cw("ngModelChange",function(d){return Ky(m),oN(a.stringColumns,d)||(a.stringColumns=d),Xy(d)}),ft("p-change",function(d){return a.onChangeColumns(d)}),og(),n0(),og(),Sl(5,"div",1),Wl(6,"po-divider",5),Sl(7,"po-input",6),Cw("ngModelChange",function(d){return Ky(m),oN(a.key,d)||(a.key=d),Xy(d)}),og(),n0(),Sl(8,"po-input",7),Cw("ngModelChange",function(d){return Ky(m),oN(a.value,d)||(a.value=d),Xy(d)}),og(),n0(),og(),Sl(9,"div",1)(10,"po-button",8),ft("p-click",function(){return a.addFilter(a.key,a.value)}),og()(),Sl(11,"div",1)(12,"po-disclaimer-group",9),ft("p-remove",function(d){return a.removeItem(d)})("p-remove-all",function(){return a.removeAllItems()}),og()(),Sl(13,"div",1),Wl(14,"po-table",10,0),og();}l&2&&(Lp(),ww("ngModel",a.service),i0(),Lp(3),ww("ngModel",a.stringColumns),rw("p-rows",5),i0(),Lp(3),ww("ngModel",a.key),i0(),Lp(),ww("ngModel",a.value),i0(),Lp(2),rw("p-disabled",!a.key||!a.value),Lp(2),rw("p-disclaimers",a.filters),Lp(2),rw("p-columns",a.columns)("p-service-api",a.sampleService)("p-height",300)("p-hide-table-search",false)("p-infinite-scroll",true));},dependencies:[Z9,wk,Qt$1,y3,mv,L3,Ghe,M3],encapsulation:2,changeDetection:1})}return r})();var Tt=r=>({"docs-sample-code-tabs":r}),Ye=(()=>{class r{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-table-with-api-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,a){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),rN(3,"PO Table using API"),og(),Sl(4,"a",2),ft("click",function(){return a.toggleSampleCodeTabs()}),Wl(5,"span"),rN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),rN(12,"sample-po-table-with-api/sample-po-table-with-api.component.html"),og(),Sl(13,"pre",7),rN(14,`<div class="po-row">
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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),rN(18,"sample-po-table-with-api/sample-po-table-with-api.component.ts"),og(),Sl(19,"pre",9),rN(20,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';
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
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-table-with-api"),og(),Wl(23,"hr")),l&2&&(Lp(5),Gx("po-icon "+a.sampleCodeButtonIcon),Lp(),dg(" ",a.sampleCodeButtonLabel),Lp(),rw("ngClass",gN(4,Tt,a.hideSampleCodeTabs)));},dependencies:[SO,Ka,Ume,$me,Ze],encapsulation:2,changeDetection:1})}return r})();var de=(()=>{class r{getColumns(){return [{property:"code",type:"number",width:"8%"},{property:"product"},{property:"customer"},{property:"exit_forecast",label:"Exit forecast",type:"dateTime"},{property:"time_since_purchase",label:"Time since purchase",type:"time",visible:false},{property:"quantity",label:"Quantity (Tons)",type:"number",width:"15%",visible:false},{property:"icms",label:"ICMS",type:"number",format:"1.2-5",visible:false},{property:"status",type:"label",width:"8%",labels:[{value:"delivered",color:"caption-tag-23",label:"Delivered"},{value:"transport",color:"caption-tag-14",label:"Transport"},{value:"production",color:"caption-tag-03",label:"Production"},{value:"stock",color:"caption-tag-33",label:"Stock",icon:"an an-package"}]}]}getItems(){return [{code:1200,product:"Rice",customer:"Angeloni",quantity:3,icms:1500,exit_forecast:this.generateRandomDate(),time_since_purchase:this.generateRandomTime(),status:"delivered",license_plate:"MDJD9191",batch_product:18041822,driver:"Jos\xE9 Oliveira"},{code:1355,product:"Margarine",customer:"Giassi",quantity:1,icms:50,exit_forecast:this.generateRandomDate(),time_since_purchase:this.generateRandomTime(),status:"transport",license_plate:"XXA5454",batch_product:18041821,driver:"Francisco Pereira"},{code:1496,product:"Wheat flour",customer:"Walmart",quantity:5,icms:2045,exit_forecast:this.generateRandomDate(),time_since_purchase:this.generateRandomTime(),status:"transport",license_plate:"QEW5779",batch_product:18041820,driver:"Pedro da Costa"},{code:1712,product:"Milk",customer:"Carrefour",quantity:10,icms:15005,exit_forecast:this.generateRandomDate(),time_since_purchase:this.generateRandomTime(),status:"production",license_plate:"WWW1247",batch_product:18041819,driver:"Jo\xE3o da Silva"},{code:1881,product:"Oil",customer:"Carrefour",quantity:1,icms:1110,exit_forecast:this.generateRandomDate(),time_since_purchase:this.generateRandomTime(),status:"production",license_plate:"XXI2312",batch_product:18041825,driver:"Antonio Lima"},{code:1551,product:"Cream cheese",customer:"Barbosa",quantity:15,icms:1119,exit_forecast:this.generateRandomDate(),time_since_purchase:this.generateRandomTime(),status:"stock",license_plate:"XXI2359",batch_product:18041888,driver:"Vitoria Felix"}]}generateRandomDate(){let o=Math.floor(Math.random()*20),l=Math.floor(Math.random()*59),a=Math.floor(Math.random()*59);return new Date(2018,10,23,o,l,a)}generateRandomTime(){let o=Math.floor(Math.random()*59),l=Math.floor(Math.random()*59),a=o<10?"0"+o.toString():o.toString(),m=l<10?"0"+l.toString():l.toString();return `00:${a}:${m}`}static \u0275fac=function(l){return new(l||r)};static \u0275prov=I({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();function wt(r,J){if(r&1){let o=Ix();Sl(0,"po-widget",2)(1,"div",3)(2,"po-select",4),Cw("ngModelChange",function(a){let m=Ky(o).$implicit;return oN(m.status,a)||(m.status=a),Xy(a)}),og(),n0(),og(),Sl(3,"div",3),Wl(4,"po-info",5)(5,"po-info",6)(6,"po-info",7),og()();}if(r&2){let o=J.$implicit,l=xx();rw("p-title",lN("Transport detail ",o.code)),Lp(2),ww("ngModel",o.status),rw("p-options",l.statusOptions),i0(),Lp(2),rw("p-value",o.batch_product),Lp(),rw("p-value",o.driver),Lp(),rw("p-value",o.license_plate);}}var et=(()=>{class r{transportService;columns;items;statusOptions=[{label:"Delivered",value:"delivered"},{label:"Transport",value:"transport"},{label:"Production",value:"production"}];constructor(o){this.transportService=o;}ngOnInit(){this.columns=this.transportService.getColumns(),this.items=this.transportService.getItems();}isUndelivered(o,l){return o.status!=="delivered"}static \u0275fac=function(l){return new(l||r)(w(de))};static \u0275cmp=Un({type:r,selectors:[["sample-po-table-transport"]],standalone:false,features:[we([de])],decls:2,vars:9,consts:[["p-spacing","large",3,"p-auto-collapse","p-columns","p-hide-columns-manager","p-hide-table-search","p-items","p-sort","p-striped"],["p-table-row-template","",3,"p-table-row-template-arrow-direction","p-table-row-template-show"],[3,"p-title"],[1,"po-row"],["name","status","p-label","Transport status",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["p-label","Batch of product","p-orientation","horizontal",1,"po-md-4",3,"p-value"],["p-label","Driver","p-orientation","horizontal",1,"po-md-4",3,"p-value"],["p-label","License plate","p-orientation","horizontal",1,"po-md-4",3,"p-value"]],template:function(l,a){l&1&&(Sl(0,"po-table",0),ew(1,wt,7,7,"ng-template",1),og()),l&2&&(rw("p-auto-collapse",true)("p-columns",a.columns)("p-hide-columns-manager",true)("p-hide-table-search",false)("p-items",a.items)("p-sort",true)("p-striped",true),Lp(),rw("p-table-row-template-arrow-direction","right")("p-table-row-template-show",a.isUndelivered));},dependencies:[Z9,wk,Whe,jhe,M3,jue,vNe],encapsulation:2,changeDetection:1})}return r})();var At=r=>({"docs-sample-code-tabs":r}),tt=(()=>{class r{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-table-transport-view"]],standalone:false,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,a){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),rN(3,"PO Table - Transport"),og(),Sl(4,"a",2),ft("click",function(){return a.toggleSampleCodeTabs()}),Wl(5,"span"),rN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),rN(12,"sample-po-table-transport/sample-po-table-transport.component.html"),og(),Sl(13,"pre",7),rN(14,`<po-table
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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),rN(18,"sample-po-table-transport/sample-po-table-transport.component.ts"),og(),Sl(19,"pre",9),rN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),og(),Sl(21,"label",6),rN(22,"sample-po-table-transport/sample-po-table-transport.service.ts"),og(),Sl(23,"pre",9),rN(24,`import { Injectable } from '@angular/core';

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
`),og()()()()(),Sl(25,"div",10),Wl(26,"sample-po-table-transport"),og(),Wl(27,"hr")),l&2&&(Lp(5),Gx("po-icon "+a.sampleCodeButtonIcon),Lp(),dg(" ",a.sampleCodeButtonLabel),Lp(),rw("ngClass",gN(4,At,a.hideSampleCodeTabs)));},dependencies:[SO,Ka,Ume,$me,et],encapsulation:2,changeDetection:1})}return r})();var pe=(()=>{class r{getColumns(){return [{property:"status",type:"label",labels:[{value:"available",color:"caption-tag-13",label:"Available"},{value:"reserved",color:"caption-tag-08",label:"Reserved"},{value:"closed",color:"caption-tag-03",label:"Closed"}]},{property:"country"},{property:"destination"},{property:"region",type:"subtitle",width:"180px",subtitles:[{value:"Alps",color:"color-01",label:"Alps",content:"AL"},{value:"Australasia",color:"color-02",label:"Australasia",content:"AU"},{value:"British Isle",color:"color-03",label:"British Isle",content:"BI"},{value:"Caucasus",color:"color-04",label:"Caucasus",content:"CA"},{value:"Danube",color:"color-05",label:"Danube",content:"DA"},{value:"East Asia",color:"color-06",label:"East Asia",content:"EA"},{value:"Latin America",color:"color-07",label:"Latin America",content:"LA"},{value:"Mediterranean",color:"color-08",label:"Mediterranean",content:"ME"},{value:"Nordics",color:"color-09",label:"Nordics",content:"NO"},{value:"North America",color:"color-10",label:"North America",content:"NA"},{value:"Southern Africa",color:"color-11",label:"Southern Africa",content:"SA"},{value:"Western Africa",color:"color-12",label:"Western Africa",content:"WA"}]},{property:"date",type:"date"},{property:"returnDate",label:"Return Date",type:"date"},{property:"value",type:"currency",format:"USD"},{property:"id",label:"Flight Number",type:"number"},{property:"onBoardService",label:"On Board Service",type:"boolean",boolean:{trueLabel:"Yes",falseLabel:"No"}},{property:"detail",label:"Details",type:"detail",detail:{columns:[{property:"package"},{property:"tour"},{property:"time",label:"Departure time",type:"time",format:"HH:mm"},{property:"distance",label:"Distance (Miles)",type:"number",format:"1.0-5"}],typeHeader:"top"}}]}getItems(){return [{id:11234,initials:"BR",country:"Brazil",value:1e3,date:"2018-10-09",returnDate:"2018-11-01",class:"Economic",onBoardService:false,destination:"Rio de Janeiro",airline:"Azul",status:"available",region:"Latin America",detail:[{package:"Basic",tour:"City tour by public bus and visit to the main museums.",time:"20:10:10",distance:"1000"},{package:"Intermediary",tour:"City tour by van and guided visit to the main museums.",time:"09:15:19",distance:"2000"},{package:"Complete",tour:"VIP city tour, music show with dinner and guided tour to the main museums.",time:"07:10:20",distance:"3000"}]},{id:22467,initials:"FR",country:"France",value:5e3,date:"2019-12-13",returnDate:"2019-12-31",class:"Economic",onBoardService:false,destination:"Paris",airline:"British Airways",status:"closed",region:"Alps",detail:[{package:"Basic",tour:"City tour by public bus and visit to the main museums.",time:"10:15:10",distance:"4800"},{package:"Intermediary",tour:"City tour by van and guided visit to the main museums.",time:"22:15:10",distance:"11000"},{package:"Complete",tour:"VIP city tour, music show with dinner and guided tour to the main museums.",time:"10:15:10",distance:"1000"}]},{id:40670,initials:"SN",country:"Senegal",value:3200,date:"2017-11-22",returnDate:"2018-12-01",class:"Economic",onBoardService:false,destination:"Dakar",airline:"Iberia",status:"closed",region:"Western Africa"},{id:34679,initials:"PT",country:"Portugal",value:5500,date:"2017-10-10",returnDate:"2018-10-20",class:"Economic",onBoardService:false,destination:"Lisbon",airline:"Air Europa",status:"closed",region:"Mediterranean"},{id:48999,initials:"RU",country:"Russia",value:6700,date:"2019-01-17",returnDate:"2019-02-20",class:"First Class",onBoardService:true,destination:"Moscow",airline:"Lufthansa",status:"reserved",region:"Caucasus"},{id:48999,initials:"US",country:"United States",value:2700.49,date:"2018-10-17",returnDate:"2018-10-29",class:"Economic",onBoardService:false,destination:"Los Angeles",airline:"American Airlines",status:"reserved",region:"North America"},{id:54563,initials:"CL",country:"Chile",value:2e3,date:"2018-10-20",returnDate:"2018-11-01",destination:"Cusco",class:"Economic",onBoardService:false,airline:"LATAM",status:"available",region:"Latin America"},{id:64568,initials:"MX",country:"Mexico",value:2100,date:"2018-03-10",returnDate:"2018-05-09",destination:"Mexico City",class:"Economic",onBoardService:false,airline:"Aero M\xE9xico",status:"available",region:"Latin America",detail:[{package:"Basic",tour:"City tour by public bus and visit to the main museums.",time:"12:10:10",distance:"2200"},{package:"Intermediary",tour:"City tour by van and guided visit to the main museums.",time:"11:10:10",distance:"1500"},{package:"Complete",tour:"VIP city tour, music show with dinner and guided tour to the main museums.",time:"16:10:10",distance:"1800"}]},{id:75456,initials:"IE",country:"Ireland",value:6300,date:"2018-10-14",returnDate:"2018-10-30",destination:"Cork",class:"First Class",onBoardService:true,airline:"Lufthansa",status:"reserved",region:"British Isle"},{id:23445,initials:"ZA",country:"South Africa",value:1900,date:"2018-12-10",returnDate:"2018-12-25",destination:"Cape Town",class:"Economic",onBoardService:false,airline:"South African Airways",status:"available",region:"Southern Africa"},{id:19238,initials:"AU",country:"Australia",value:6300,date:"2018-10-14",returnDate:"2018-10-30",destination:"Sydney",class:"First Class",onBoardService:true,airline:"Jetstar Airways",status:"reserved",region:"Australasia"},{id:85456,initials:"JP",country:"Japan",value:5900,date:"2018-10-25",returnDate:"2018-11-10",destination:"Tokio",class:"Executive",onBoardService:true,airline:"Japan Airlines",status:"available",region:"East Asia"},{id:94565,initials:"CN",country:"China",value:2900,date:"2018-10-10",returnDate:"2018-10-25",destination:"Beijing",class:"Economic",onBoardService:false,airline:"Malaysia Airlines",status:"available",region:"East Asia"},{id:32330,initials:"UK",country:"England",value:2090.5,date:"2018-10-07",returnDate:"2018-11-15",destination:"London",class:"Executive",onBoardService:true,airline:"British Airways",status:"available",region:"British Isle"},{id:14560,initials:"CA",country:"Canada",value:2090.5,date:"2018-10-07",returnDate:"2018-10-20",destination:"Quebec",class:"Economic",onBoardService:false,airline:"American Airlines",status:"available",region:"North America"},{id:93800,initials:"IS",country:"Iceland",value:6300,date:"2018-10-12",returnDate:"2018-10-27",destination:"Reykjav\xEDk",class:"Economic",onBoardService:false,airline:"Star Alliance",status:"available",region:"Nordics"},{id:34239,initials:"DE",country:"Germany",value:3070.5,date:"2018-10-07",returnDate:"2018-10-20",destination:"Berlin",class:"Executive",onBoardService:true,airline:"LATAM",status:"available",region:"Danube"},{id:45611,initials:"AR",country:"Argentina",value:3500.5,date:"2018-12-07",returnDate:"2018-12-29",destination:"Ushuaia",class:"Economic",onBoardService:false,airline:"LATAM",status:"reserved",region:"Latin America"}]}static \u0275fac=function(l){return new(l||r)};static \u0275prov=I({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();var nt=(()=>{class r{sampleAirfare;poNotification;poDialog;poModal;poTable;actions=[{action:this.discount.bind(this),icon:"an an-currency-circle-dollar",label:"Apply Discount",disabled:this.validateDiscount.bind(this)},{action:this.details.bind(this),icon:"an an-info",label:"Details"},{action:this.remove.bind(this),icon:"po-icon an an-trash",label:"Remove"}];columns;columnsDefault;detail;items;total=0;totalExpanded=0;initialColumns;constructor(o,l,a){this.sampleAirfare=o,this.poNotification=l,this.poDialog=a;}ngOnInit(){this.columns=this.sampleAirfare.getColumns(),this.items=this.sampleAirfare.getItems();}ngAfterViewInit(){if(this.columnsDefault=this.columns,localStorage.getItem("initial-columns")){this.initialColumns=localStorage.getItem("initial-columns").split(",");let l=[...this.columns.map(a=>s(r$1({},a),{visible:this.initialColumns.includes(a.property)}))];l.sort(this.sortFunction),this.columns=l;}}sortFunction(o,l){let a=localStorage.getItem("initial-columns").split(","),m=a.indexOf(o.property),p=a.indexOf(l.property);if(m===-1)return 1;if(p===-1||m<p)return  -1;if(m>p)return 1}addToCart(){let o=this.poTable.getSelectedRows();o.length>0&&this.poDialog.confirm({title:"Add to cart",message:`Would you like to add ${o.length} items to cart?`,confirm:()=>this.confirmItems(o),cancel:()=>{}});}confirmItems(o){o.forEach(l=>{switch(l.status){case "available":this.poNotification.success(`${this.getDescription(l)} added succesfully`);break;case "reserved":this.poNotification.warning(`${this.getDescription(l)} added succesfully, verify your e-mail to complete reservation`);break;case "closed":this.poNotification.error(`${this.getDescription(l)} is closed and not available anymore`);break}}),this.poTable.unselectRows();}collapseAll(){this.items.forEach((o,l)=>{o.detail&&(this.onCollapseDetail(),this.poTable.collapse(l));});}decreaseTotal(o){o.value&&(this.total-=o.value);}deleteItems(o){this.items=o;}details(o){this.detail=o,this.poModal.open();}remove(o){this.poTable.removeItem(o);}discount(o){if(!o.disableDiscount){let l=s(r$1({},o),{value:o.value-o.value*.2,disableDiscount:true});this.poTable.updateItem(o,l);}}expandAll(){this.totalExpanded=0,this.items.forEach((o,l)=>{o.detail&&(this.onExpandDetail(),this.poTable.expand(l));});}onCollapseDetail(){this.totalExpanded-=1,this.totalExpanded=this.totalExpanded<0?0:this.totalExpanded;}onExpandDetail(){this.totalExpanded+=1;}sumTotal(o){o.value&&(this.total+=o.value);}restoreColumn(){this.columns=this.columnsDefault;}changeColumnVisible(o){localStorage.setItem("initial-columns",o);}getDescription(o){return `Airfare to ${o.destination} - ${o.initials}`}validateDiscount(o){return o.disableDiscount}static \u0275fac=function(l){return new(l||r)(w(pe),w(Yp),w(Ode))};static \u0275cmp=Un({type:r,selectors:[["sample-po-table-airfare"]],viewQuery:function(l,a){if(l&1&&ql(Yo,7)(M3,7),l&2){let m;lo(m=uo())&&(a.poModal=m.first),lo(m=uo())&&(a.poTable=m.first);}},standalone:false,features:[we([pe,Ode])],decls:16,vars:24,consts:[[1,"po-font-text-bold","po-text-color-neutral-dark-40"],[3,"p-collapsed","p-expanded","p-selected","p-unselected","p-change-visible-columns","p-restore-column-manager","p-delete-items","p-container","p-height","p-hide-batch-actions","p-hide-table-search","p-selectable","p-sort","p-striped","p-actions","p-columns","p-items","p-max-columns","p-virtual-scroll"],["p-label","Total Value","p-orientation","horizontal",1,"po-md-6","po-mb-sm-2","po-mb-md-2","po-lb-lg-2",3,"p-value"],["p-label","Expanded Itens","p-orientation","horizontal",1,"po-md-6","po-mb-sm-2","po-mb-md-2","po-lb-lg-2",3,"p-value"],[1,"po-row"],["p-icon","an an-shopping-cart-simple","p-label","Add items to cart",1,"po-md-3",3,"p-click"],["p-label","Expand all detail",1,"po-md-3",3,"p-click"],["p-label","Collapse all detail",1,"po-md-3",3,"p-click"],["p-click-out","true","p-size","sm",3,"p-title"],["p-label","Airline",1,"po-sm-6",3,"p-value"],["p-label","Initials",1,"po-sm-2",3,"p-value"],["p-label","Class",1,"po-sm-4",3,"p-value"]],template:function(l,a){l&1&&(Sl(0,"div",0),rN(1,"Choose one or more promotional airfares"),og(),Wl(2,"po-divider"),Sl(3,"po-table",1),ft("p-collapsed",function(){return a.onCollapseDetail()})("p-expanded",function(){return a.onExpandDetail()})("p-selected",function(p){return a.sumTotal(p)})("p-unselected",function(p){return a.decreaseTotal(p)})("p-change-visible-columns",function(p){return a.changeColumnVisible(p)})("p-restore-column-manager",function(){return a.restoreColumn()})("p-delete-items",function(p){return a.deleteItems(p)}),og(),Wl(4,"po-divider")(5,"po-info",2),EN(6,"currency"),Wl(7,"po-info",3),Sl(8,"div",4)(9,"po-button",5),ft("p-click",function(){return a.addToCart()}),og(),Sl(10,"po-button",6),ft("p-click",function(){return a.expandAll()}),og(),Sl(11,"po-button",7),ft("p-click",function(){return a.collapseAll()}),og()(),Sl(12,"po-modal",8),Wl(13,"po-info",9)(14,"po-info",10)(15,"po-info",11),og()),l&2&&(Lp(3),rw("p-container",true)("p-height",400)("p-hide-batch-actions",false)("p-hide-table-search",false)("p-selectable",true)("p-sort",true)("p-striped",true)("p-actions",a.actions)("p-columns",a.columns)("p-items",a.items)("p-max-columns",7)("p-virtual-scroll",false),Lp(2),rw("p-value",cN(bN(6,21,a.total,"USD"))),Lp(2),rw("p-value",a.totalExpanded),Lp(5),rw("p-title",uN("",a.detail?.destination," - ",a.detail?.country)),Lp(),rw("p-value",a.detail==null?null:a.detail.airline),Lp(),rw("p-value",a.detail==null?null:a.detail.initials),Lp(),rw("p-value",a.detail==null?null:a.detail.class));},dependencies:[Qt$1,mv,jhe,Yo,M3,UO],encapsulation:2,changeDetection:1})}return r})();var Ft=r=>({"docs-sample-code-tabs":r}),it=(()=>{class r{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-table-airfare-view"]],standalone:false,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,a){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),rN(3,"PO Table - Airfare"),og(),Sl(4,"a",2),ft("click",function(){return a.toggleSampleCodeTabs()}),Wl(5,"span"),rN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),rN(12,"sample-po-table-airfare/sample-po-table-airfare.component.html"),og(),Sl(13,"pre",7),rN(14,`<div class="po-font-text-bold po-text-color-neutral-dark-40">Choose one or more promotional airfares</div>

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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),rN(18,"sample-po-table-airfare/sample-po-table-airfare.component.ts"),og(),Sl(19,"pre",9),rN(20,`import { AfterViewInit, Component, ViewChild, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),og(),Sl(21,"label",6),rN(22,"sample-po-table-airfare/sample-po-table-airfare.service.ts"),og(),Sl(23,"pre",9),rN(24,`import { Injectable } from '@angular/core';

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
`),og()()()()(),Sl(25,"div",10),Wl(26,"sample-po-table-airfare"),og(),Wl(27,"hr")),l&2&&(Lp(5),Gx("po-icon "+a.sampleCodeButtonIcon),Lp(),dg(" ",a.sampleCodeButtonLabel),Lp(),rw("ngClass",gN(4,Ft,a.hideSampleCodeTabs)));},dependencies:[SO,Ka,Ume,$me,nt],encapsulation:2,changeDetection:1})}return r})();var z=(function(r){return r[r.Stable=0]="Stable",r[r.Experimental=1]="Experimental",r[r.RoadMap=2]="RoadMap",r})(z||{});var ce=(()=>{class r{items=[{component:{favorite:["favorite","documentation"],name:"PO Select",description:"Display a list of items and allows selection",link:"/documentation/po-select",extra:"Features",extras:["Filter options (starts, contains, ends)","Custom services","Navigation by keys"],status:0,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Checkbox",description:"Group of square buttons that allows multiple items to be selected",link:"/documentation/po-checkbox-group",extra:"Best Practices",extras:["Short and objective texts for items","Use with short lists","For big lists use PO Multiselect"],status:0,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Page Login",description:"Template for authentication",link:"/documentation/po-page-login",extra:"Features",extras:[],status:0,type:"template"}},{component:{favorite:["favorite","documentation"],name:"PO Number",description:"Input that allows only numbers",link:"/documentation/po-number",extra:"Features",extras:["Filter options (starts, contains, ends)","Custom services","Navigation by keys"],status:1,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Page Dynamic Table",description:"Template for list resources with a table",link:"/documentation/po-page-dynamic-table",extra:"Features",extras:["6 defaults actions","Use Metadata to build your page","No code","Customization"],status:0,type:"template"}},{component:{favorite:["favorite","documentation"],name:"PO Combo",description:"Display a list of items with filter and allows selection",link:"/documentation/po-combo",extra:"Features",extras:["Filter options (starts, contains, ends)","Custom services","Navigation by keys"],status:0,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Notification",description:"Show notification easily and quickly",link:"/documentation/po-notification",extra:"Features",extras:["4 types of notifications","Define time for your notifications","Use actions in your notification"],status:0,type:"service"}},{component:{favorite:["favorite","documentation"],name:"PO Multiselect",description:"Display a list of items and allows multiple selection",link:"/documentation/po-multiselect",extra:"Features",extras:["Filter options (starts, contains, ends)","Custom services","Navigation by keys"],status:1,type:"component"}},{component:{favorite:[],name:"PO Grid",description:"Create a grid for edition",link:"/documentation/po-grid",extra:"Features",extras:[],status:2,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Input",description:"Input for general texts",link:"/documentation/po-input",extra:"Features",extras:["Filter options (starts, contains, ends)","Custom services","Navigation by keys"],status:0,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Textarea",description:"Larger input for big texts",link:"/documentation/po-textarea",extra:"Best Practices",extras:["Recommended to large texts like observations and details","For short texts use po-input"],status:1,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Datepicker",description:"Input with calendar for dates",link:"/documentation/po-datepicker",extra:"Features",extras:["Multiple idioms ( pt, es , en)","Custom date formats","Period validation (start date and end date)"],status:1,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Email",description:"Input that allows valid email texts (username@email.com)",link:"/documentation/po-email",extra:"Features",extras:["Filter options (starts, contains, ends)","Custom services","Navigation by keys"],status:0,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Url",description:"Input that expects a valid url as text (http://www.url.com)",link:"/documentation/po-url",extra:"Features",extras:["Filter options (starts, contains, ends)","Custom services","Navigation by keys"],status:0,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Password",description:"Input with bullet text to type passwords",link:"/documentation/po-password",extra:"Features",extras:["Filter options (starts, contains, ends)","Custom services","Navigation by keys"],status:0,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Login",description:"Input with a user icon that represents a login field",link:"/documentation/po-login",extra:"Features",extras:["Filter options (starts, contains, ends)","Custom services","Navigation by keys"],status:0,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Upload",description:"Upload file(s) with a loading bar",link:"/documentation/po-upload",extra:"Features",extras:["Multiple file selection","Automatic upload after click","File format and size restriction"],status:1,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Avatar",description:"Creates a circle with a picture inside",link:"/documentation/po-avatar",extra:"Features",extras:["Multiple sizes","Default image"],status:0,type:"component"}}];getItems(o,l=false){let a=[...this.items];return o&&o.column&&a.sort((m,p)=>this.sort(m,p,o)),l||(a.length=10),a}sort(o,l,a){let m=a.column.property,p=a.type;if(m.split(".").length>1){let d=m.split(".")[0],xe=m.split(".")[1];return o[d][xe]<l[d][xe]?p===_h.Ascending?-1:1:p===_h.Ascending?1:-1}else return o[m]<l[m]?p===_h.Ascending?-1:1:p===_h.Ascending?1:-1}static \u0275fac=function(l){return new(l||r)};static \u0275prov=I({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();function Bt(r,J){if(r&1&&(Sl(0,"div"),rN(1),EN(2,"uppercase"),og()),r&2){let o=J.$implicit;Gx(lN("badge ",o)),Lp(),_w(CN(2,4,o));}}function Rt(r,J){if(r&1&&(Sl(0,"ul")(1,"li",4),rN(2),og(),Wl(3,"po-divider"),og()),r&2){let o=J.$implicit;Lp(2),_w(o);}}var at=(()=>{class r{sampleComponents;router;poModal;extraInformation;items;showMoreDisabled=false;title;isLoading=false;columns=[{property:"component.status",type:"label",label:"Status",width:"5%",labels:[{value:z.Stable,color:"caption-tag-13",label:"Stable",textColor:"white",tooltip:"Published component"},{value:z.Experimental,color:"caption-tag-08",label:"Experimental",textColor:"white",tooltip:"Component in homologation"},{value:z.RoadMap,color:"caption-tag-03",label:"Roadmap",textColor:"white",tooltip:"Component in roadmap"}]},{property:"component.name",label:"Name",type:"link"},{property:"component.type",label:"Type",type:"columnTemplate",width:"10%"},{property:"component.description",label:"Descri\xE7\xE3o",color:this.experimentalColor.bind(this)},{property:"component.extra",label:"Extras",width:"10%",type:"link",tooltip:"Additional details",action:(o,l)=>{this.extras(o,l);},disabled:this.canShowExtras.bind(this)},{property:"component.favorite",label:"Actions",type:"icon",sortable:false,icons:[{action:this.favorite.bind(this),color:this.isFavorite.bind(this),icon:"an an-star",tooltip:"Favorite",value:"favorite"},{action:this.goToDocumentation.bind(this),disabled:this.canGoToDocumentation.bind(this),icon:"an an-arrow-square-out",tooltip:"Click to go to documentation",value:"documentation"}]}];constructor(o,l){this.sampleComponents=o,this.router=l;}ngOnInit(){this.items=this.sampleComponents.getItems();}experimentalColor(o){return o?.component?.status===z.Experimental?"caption-tag-08":"caption-tag-13"}extras(o,l){this.title=o,this.extraInformation=l,this.poModal.open();}goToDocumentation(o){this.router.navigate([o?.component?.link]);}showMore(o){this.isLoading=true,this.showMoreDisabled=true,setTimeout(()=>{this.items=this.getItems(o),this.isLoading=false;},4e3);}sort(o){this.items=this.getItems(o);}showAlert(o){alert(o);}canGoToDocumentation(o){return o?.component?.status!==z.Stable}canShowExtras(o){return o?.component?.status!==z.Stable||o?.component?.extras.length===0}favorite(o){o.component.isFavorite=!o.component.isFavorite;}getItems(o){return this.sampleComponents.getItems(o,this.showMoreDisabled)}isFavorite(o){return o?.component?.isFavorite?"caption-tag-08":"caption-tag-13"}static \u0275fac=function(l){return new(l||r)(w(ce),w(En))};static \u0275cmp=Un({type:r,selectors:[["sample-po-table-components"]],viewQuery:function(l,a){if(l&1&&ql(Yo,7),l&2){let m;lo(m=uo())&&(a.poModal=m.first);}},standalone:false,features:[we([ce])],decls:8,vars:9,consts:[[1,"po-font-text-large","po-text-color-neutral-dark-40"],["p-container","shadow",3,"p-show-more","p-sort-by","p-loading-show-more","p-columns","p-items","p-show-more-disabled","p-sort"],["p-table-column-template","",3,"p-property"],["p-click-out","true","p-size","sm",3,"p-title"],[1,"po-font-text"]],template:function(l,a){l&1&&(Sl(0,"div",0),rN(1,"PO UI Library"),og(),Wl(2,"po-divider"),Sl(3,"po-table",1),ft("p-show-more",function(p){return a.showMore(p)})("p-sort-by",function(p){return a.sort(p)}),ew(4,Bt,3,6,"ng-template",2),og(),Sl(5,"po-modal",3),yx(6,Rt,4,1,"ul",null,vx),og()),l&2&&(Lp(3),rw("p-loading-show-more",a.isLoading)("p-columns",a.columns)("p-items",a.items)("p-show-more-disabled",a.showMoreDisabled)("p-sort",true),Lp(),rw("p-property","component.type"),Lp(),rw("p-title",uN("",a.title," - ",a.extraInformation?.component)),Lp(),_x(a.extraInformation?.extras));},dependencies:[mv,Yo,M3,$ue,FO],styles:[".badge[_ngcontent-%COMP%]{padding:3px 10px;border-radius:3px;color:#fff;width:100px;text-align:center;box-shadow:0 4px 8px #0003,0 6px 20px #00000030;font-size:10px}.badge.component[_ngcontent-%COMP%]{background-color:#82b1ff}.badge.service[_ngcontent-%COMP%]{background-color:#b39ddb}.badge.template[_ngcontent-%COMP%]{background-color:#ffb515}"],changeDetection:1})}return r})();var Nt=r=>({"docs-sample-code-tabs":r}),ot=(()=>{class r{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-table-components-view"]],standalone:false,decls:38,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(l,a){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),rN(3,"PO Table - Po Field Components"),og(),Sl(4,"a",2),ft("click",function(){return a.toggleSampleCodeTabs()}),Wl(5,"span"),rN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),rN(12,"sample-po-table-components/sample-po-table-components.component.html"),og(),Sl(13,"pre",7),rN(14,`<div class="po-font-text-large po-text-color-neutral-dark-40">PO UI Library</div>

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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),rN(18,"sample-po-table-components/sample-po-table-components.component.ts"),og(),Sl(19,"pre",9),rN(20,`import { Component, ViewChild, OnInit, ChangeDetectionStrategy } from '@angular/core';
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
`),og(),Sl(21,"label",6),rN(22,"sample-po-table-components/sample-po-table-components.enum.ts"),og(),Sl(23,"pre",9),rN(24,`export enum SamplePoTableComponentStatus {
  Stable,
  Experimental,
  RoadMap
}
`),og(),Sl(25,"label",6),rN(26,"sample-po-table-components/sample-po-table-components.service.ts"),og(),Sl(27,"pre",9),rN(28,`import { Injectable } from '@angular/core';

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
`),og()()(),Sl(29,"po-tab",10)(30,"div")(31,"label",6),rN(32,"sample-po-table-components/sample-po-table-components.component.css"),og(),Sl(33,"pre",11),rN(34,`.badge {
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
`),og()()()()(),Sl(35,"div",12),Wl(36,"sample-po-table-components"),og(),Wl(37,"hr")),l&2&&(Lp(5),Gx("po-icon "+a.sampleCodeButtonIcon),Lp(),dg(" ",a.sampleCodeButtonLabel),Lp(),rw("ngClass",gN(4,Nt,a.hideSampleCodeTabs)));},dependencies:[SO,Ka,Ume,$me,at],encapsulation:2,changeDetection:1})}return r})();var ue=(()=>{class r{http;constructor(o){this.http=o;}getColumns(){return [{property:"id",label:"Id",type:"string",width:"90px"},{property:"label",label:"Name",type:"string",width:"90px"},{property:"email",label:"E-mail",type:"string",width:"120px"}]}getItems(){return this.http.get("https://po-sample-api.onrender.com/v1/heroes").pipe(bT("items"))}static \u0275fac=function(l){return new(l||r)(b(rb))};static \u0275prov=I({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();var jt=["POItemsOri"],Wt=["POItemsSelected"],lt=(()=>{class r{service;poItemsOri;poItemsSelected;items=[];itemsSelected=[];columns;constructor(o){this.service=o;}ngOnInit(){this.getColumns(),this.getItems();}getColumns(){this.columns=this.service.getColumns();}getItems(){this.service.getItems().subscribe({next:o=>this.items=o,error:o=>console.error(o)});}changeOptions(o,l){if(l==="new")this.itemsSelected.push({id:o.id,label:o.label,email:o.email}),this.itemsSelected=[...this.itemsSelected];else {let a=this.itemsSelected.findIndex(m=>m.id===o.id);this.poItemsSelected.removeItem(a),this.itemsSelected=[...this.poItemsSelected.items];}}deleteItems(o){this.items=o,this.itemsSelected=[];}static \u0275fac=function(l){return new(l||r)(w(ue))};static \u0275cmp=Un({type:r,selectors:[["sample-po-table-heroes"]],viewQuery:function(l,a){if(l&1&&ql(jt,7)(Wt,7),l&2){let m;lo(m=uo())&&(a.poItemsOri=m.first),lo(m=uo())&&(a.poItemsSelected=m.first);}},standalone:false,features:[we([ue])],decls:11,vars:16,consts:[["POItemsOri",""],["POItemsSelected",""],[1,"po-row","po-pb-2"],[1,"po-md-6"],[1,"po-font-text-bold","po-text-color-neutral-dark-40"],["p-selectable","true","p-infinite-scroll-distance","80","p-height","300",3,"p-selected","p-unselected","p-delete-items","p-columns","p-infinite-scroll","p-hide-select-all","p-hide-table-search","p-items","p-hide-action-fixed-columns","p-text-wrap","p-virtual-scroll"],["p-height","300",3,"p-columns","p-hide-table-search","p-striped","p-infinite-scroll","p-items","p-hide-action-fixed-columns","p-text-wrap","p-virtual-scroll"]],template:function(l,a){l&1&&(Sl(0,"div",2)(1,"div",3)(2,"div",4),rN(3,"Choose one or more heroes for your team"),og(),Sl(4,"po-table",5,0),ft("p-selected",function(p){return a.changeOptions(p,"new")})("p-unselected",function(p){return a.changeOptions(p,"change")})("p-delete-items",function(p){return a.deleteItems(p)}),og()(),Sl(6,"div",3)(7,"div",4),rN(8,"Here your chosen heroes"),og(),Wl(9,"po-table",6,1),og()()),l&2&&(Lp(4),rw("p-columns",a.columns)("p-infinite-scroll",true)("p-hide-select-all",true)("p-hide-table-search",false)("p-items",a.items)("p-hide-action-fixed-columns",true)("p-text-wrap",true)("p-virtual-scroll",false),Lp(5),rw("p-columns",a.columns)("p-hide-table-search",false)("p-striped",true)("p-infinite-scroll",true)("p-items",a.itemsSelected)("p-hide-action-fixed-columns",true)("p-text-wrap",true)("p-virtual-scroll",false));},dependencies:[M3],encapsulation:2,changeDetection:1})}return r})();var Qt=r=>({"docs-sample-code-tabs":r}),rt=(()=>{class r{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-table-heroes-view"]],standalone:false,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,a){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),rN(3,"PO Table - Heroes"),og(),Sl(4,"a",2),ft("click",function(){return a.toggleSampleCodeTabs()}),Wl(5,"span"),rN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),rN(12,"sample-po-table-heroes/sample-po-table-heroes.component.html"),og(),Sl(13,"pre",7),rN(14,`<div class="po-row po-pb-2">
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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),rN(18,"sample-po-table-heroes/sample-po-table-heroes.component.ts"),og(),Sl(19,"pre",9),rN(20,`import { Component, ViewChild, OnInit, ChangeDetectionStrategy } from '@angular/core';
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
`),og(),Sl(21,"label",6),rN(22,"sample-po-table-heroes/sample-po-table-heroes.service.ts"),og(),Sl(23,"pre",9),rN(24,`import { HttpClient } from '@angular/common/http';
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
`),og()()()()(),Sl(25,"div",10),Wl(26,"sample-po-table-heroes"),og(),Wl(27,"hr")),l&2&&(Lp(5),Gx("po-icon "+a.sampleCodeButtonIcon),Lp(),dg(" ",a.sampleCodeButtonLabel),Lp(),rw("ngClass",gN(4,Qt,a.hideSampleCodeTabs)));},dependencies:[SO,Ka,Ume,$me,lt],encapsulation:2,changeDetection:1})}return r})();var Jt=()=>({code:"001",table:"PO Table",angular:"PO-UI"}),$t=r=>[r],mt=(()=>{class r{static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-table-draggable"]],standalone:false,decls:4,vars:7,consts:[[1,"po-font-text-bold","po-text-color-neutral-dark-40"],[3,"p-items","p-draggable","p-hide-columns-manager","p-hide-table-search"]],template:function(l,a){l&1&&(Sl(0,"div",0),rN(1,` Choose one column and drag to another horizontal position in the table and drop
`),og(),Wl(2,"po-divider")(3,"po-table",1)),l&2&&(Lp(3),rw("p-items",gN(5,$t,pN(4,Jt)))("p-draggable",true)("p-hide-columns-manager",true)("p-hide-table-search",false));},dependencies:[mv,M3],encapsulation:2,changeDetection:1})}return r})();var Kt=r=>({"docs-sample-code-tabs":r}),st=(()=>{class r{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-table-draggable-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,a){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),rN(3,"PO Table Drag and Drop"),og(),Sl(4,"a",2),ft("click",function(){return a.toggleSampleCodeTabs()}),Wl(5,"span"),rN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),rN(12,"sample-po-table-draggable/sample-po-table-draggable.component.html"),og(),Sl(13,"pre",7),rN(14,`<div class="po-font-text-bold po-text-color-neutral-dark-40">
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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),rN(18,"sample-po-table-draggable/sample-po-table-draggable.component.ts"),og(),Sl(19,"pre",9),rN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-table-draggable',
  templateUrl: './sample-po-table-draggable.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTableDraggableComponent {}
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-table-draggable"),og(),Wl(23,"hr")),l&2&&(Lp(5),Gx("po-icon "+a.sampleCodeButtonIcon),Lp(),dg(" ",a.sampleCodeButtonLabel),Lp(),rw("ngClass",gN(4,Kt,a.hideSampleCodeTabs)));},dependencies:[SO,Ka,Ume,$me,mt],encapsulation:2,changeDetection:1})}return r})();var dt=(()=>{class r{static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-table-doc"]],standalone:false,decls:4775,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-table-row-template"],["href","/documentation/po-table-column-template"],["href","/documentation/po-table-cell-template"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","PoTableAction[]"],["href","https://po-ui.io/icons"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","PoTableColumn[]"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","PoSearchFilterMode"],["pan","",1,"docs-api-property-type","Array<string>"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","any[]"],["pan","",1,"docs-api-property-type","PoTableLiterals"],["href","/documentation/po-i18n"],["href","https://po-ui.io/guides/api"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],["pan","",1,"docs-api-property-type","{","key:","value","}"],["pan","",1,"docs-api-property-type"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["pan","",1,"docs-api-property-type","Array<PoPopupAction>"],["pan","",1,"docs-api-property-type","PoTableColumn"],["pan","",1,"docs-api-property-type","PoTableColumnSortType"],["pan","",1,"docs-api-property-type","PoTableBoolean"],[1,"dot","po-color-01"],[1,"dot","po-color-02"],[1,"dot","po-color-03"],[1,"dot","po-color-04"],[1,"dot","po-color-05"],[1,"dot","po-color-06"],[1,"dot","po-color-07"],[1,"dot","po-color-08"],[1,"dot","po-color-09"],[1,"dot","po-color-10"],[1,"dot","po-color-11"],[1,"dot","po-color-12"],[1,"dot","po-caption-tag-01"],[1,"dot","po-caption-tag-02"],[1,"dot","po-caption-tag-03"],[1,"dot","po-caption-tag-04"],[1,"dot","po-caption-tag-05"],[1,"dot","po-caption-tag-06"],[1,"dot","po-caption-tag-07"],[1,"dot","po-caption-tag-08"],[1,"dot","po-caption-tag-09"],[1,"dot","po-caption-tag-10"],[1,"dot","po-caption-tag-11"],[1,"dot","po-caption-tag-12"],[1,"dot","po-caption-tag-13"],[1,"dot","po-caption-tag-14"],[1,"dot","po-caption-tag-15"],[1,"dot","po-caption-tag-16"],[1,"dot","po-caption-tag-17"],[1,"dot","po-caption-tag-18"],[1,"dot","po-caption-tag-19"],[1,"dot","po-caption-tag-20"],[1,"dot","po-caption-tag-21"],[1,"dot","po-caption-tag-22"],[1,"dot","po-caption-tag-23"],[1,"dot","po-caption-tag-24"],[1,"dot","po-caption-tag-25"],[1,"dot","po-caption-tag-26"],[1,"dot","po-caption-tag-27"],[1,"dot","po-caption-tag-28"],[1,"dot","po-caption-tag-29"],[1,"dot","po-caption-tag-30"],[1,"dot","po-caption-tag-31"],[1,"dot","po-caption-tag-32"],[1,"dot","po-caption-tag-33"],[1,"dot","po-caption-tag-34"],[1,"dot","po-caption-tag-35"],["pan","",1,"docs-api-property-type","PoTableDetail"],["href","https://angular.dev/api/common/DecimalPipe"],["pan","",1,"docs-api-property-type","Array<PoTableColumnIcon>"],["href","documentation/po-table#tableColumnIcon"],["pan","",1,"docs-api-property-type","Array<PoTableColumnLabel>"],["pan","",1,"docs-api-property-type","Array<PoTableSubtitleColumn>"],["id","tableColumnIcon"],[1,"an","an-check"],[1,"an","an-warning-circle"],[1,"an","an-x"],[1,"an","an-info"],["pan","",1,"docs-api-property-type","PoTagType"],["href","https://angular.io/api/common/DecimalPipe"],["pan","",1,"docs-api-property-type","Array<PoTableDetailColumn>"]],template:function(l,a){l&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),rN(3,"import { PoTableModule } from '@po-ui/ng-components';"),og()(),Sl(4,"div",2)(5,"p"),rN(6,"M\xF3dulo do componente po-table"),og()(),Sl(7,"h3",3),rN(8,"Componente"),og(),Sl(9,"h4",4)(10,"code",5),rN(11,"PoTableComponent"),og()(),Sl(12,"div",2)(13,"p"),rN(14,`Este componente de tabela \xE9 utilizado para exibi\xE7\xE3o de dados com diferentes tipos como por exemplo textos, data, horas e n\xFAmeros com
formato personalizado.`),og(),Sl(15,"p"),rN(16,`Tamb\xE9m \xE9 possivel criar tabelas com ordena\xE7\xE3o de dados, linhas com detalhes, coluna para sele\xE7\xE3o de linhas, coluna com a\xE7\xF5es e tamb\xE9m
carregamento por demanda atrav\xE9s do bot\xE3o `),Sl(17,"strong"),rN(18,"Carregar mais resultados"),og(),rN(19,"."),og(),Sl(20,"blockquote")(21,"p"),rN(22,"As linhas de detalhes podem tamb\xE9m ser customizadas atrav\xE9s do "),Sl(23,"a",6)(24,"code"),rN(25,"p-table-row-template"),og()(),rN(26,"."),og()(),Sl(27,"blockquote")(28,"p"),rN(29,"As colunas podem ser customizadas atrav\xE9s dos templates "),Sl(30,"a",7)(31,"code"),rN(32,"p-table-column-template"),og()(),rN(33,`
e `),Sl(34,"a",8)(35,"code"),rN(36,"p-table-cell-template"),og()(),rN(37,"."),og()(),Sl(38,"p"),rN(39,`O componente permite gerenciar a exibi\xE7\xE3o das colunas dinamicamente. Esta funcionalidade pode ser acessada atrav\xE9s do \xEDcone de engrenagem
no canto superior direito do cabe\xE7alho da tabela.`),og(),Sl(40,"p"),rN(41,"Caso a largura de todas as colunas forem definidas e o total ultrapassar o tamanho tabela, ser\xE1 exibido um "),Sl(42,"em"),rN(43,"scroll"),og(),rN(44,` na horizontal para a
completa visualiza\xE7\xE3o dos dados.`),og(),Sl(45,"h4"),rN(46,"Tokens customiz\xE1veis"),og(),Sl(47,"p"),rN(48,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),og(),Sl(49,"blockquote")(50,"p"),rN(51,"Para maiores informa\xE7\xF5es, acesse o guia "),Sl(52,"a",9),rN(53,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),rN(54,"."),og()(),Sl(55,"table")(56,"thead")(57,"tr")(58,"th"),rN(59,"Propriedade"),og(),Sl(60,"th"),rN(61,"Descri\xE7\xE3o"),og(),Sl(62,"th"),rN(63,"Valor Padr\xE3o"),og()()(),Sl(64,"tbody")(65,"tr")(66,"td")(67,"strong"),rN(68,"Default Values"),og()(),Wl(69,"td")(70,"td"),og(),Sl(71,"tr")(72,"td")(73,"code"),rN(74,"--font-family"),og()(),Sl(75,"td"),rN(76,"Fam\xEDlia tipogr\xE1fica usada"),og(),Sl(77,"td")(78,"code"),rN(79,"var(--font-family-theme)"),og()()(),Sl(80,"tr")(81,"td")(82,"code"),rN(83,"--background-color"),og()(),Sl(84,"td"),rN(85,"Cor de background"),og(),Sl(86,"td")(87,"code"),rN(88,"var(--color-neutral-light-00)"),og()()(),Sl(89,"tr")(90,"td")(91,"code"),rN(92,"--color"),og()(),Sl(93,"td"),rN(94,"Cor principal da table"),og(),Sl(95,"td")(96,"code"),rN(97,"var(--color-neutral-dark-95)"),og()()(),Sl(98,"tr")(99,"td")(100,"code"),rN(101,"--background-striped-color"),og()(),Sl(102,"td"),rN(103,"Cor do background quando striped"),og(),Sl(104,"td")(105,"code"),rN(106,"var(--color-neutral-light-05)"),og()()(),Sl(107,"tr")(108,"td")(109,"code"),rN(110,"--color-line"),og()(),Sl(111,"td"),rN(112,"Cor das linhas"),og(),Sl(113,"td")(114,"code"),rN(115,"var(--color-neutral-mid-40)"),og()()(),Sl(116,"tr")(117,"td")(118,"strong"),rN(119,"Hover"),og()(),Wl(120,"td")(121,"td"),og(),Sl(122,"tr")(123,"td")(124,"code"),rN(125,"--color-hover"),og()(),Sl(126,"td"),rN(127,"Cor principal no estado hover"),og(),Sl(128,"td")(129,"code"),rN(130,"var(--color-action-hover)"),og()()(),Sl(131,"tr")(132,"td")(133,"code"),rN(134,"--background-color-hover"),og()(),Sl(135,"td"),rN(136,"Cor de background no estado hover"),og(),Sl(137,"td")(138,"code"),rN(139,"var(--color-brand-01-lighter)"),og()()(),Sl(140,"tr")(141,"td")(142,"strong"),rN(143,"Focused"),og()(),Wl(144,"td")(145,"td"),og(),Sl(146,"tr")(147,"td")(148,"code"),rN(149,"--outline-color-focused"),og()(),Sl(150,"td"),rN(151,"Cor do outline do estado de focus"),og(),Sl(152,"td")(153,"code"),rN(154,"var(--color-action-focus)"),og()()(),Sl(155,"tr")(156,"td")(157,"strong"),rN(158,"Disabled"),og()(),Wl(159,"td")(160,"td"),og(),Sl(161,"tr")(162,"td")(163,"code"),rN(164,"--color-disabled"),og()(),Sl(165,"td"),rN(166,"Cor principal no estado disabled"),og(),Sl(167,"td")(168,"code"),rN(169,"var(--color-neutral-mid-40)"),og()()(),Sl(170,"tr")(171,"td")(172,"strong"),rN(173,"Headline"),og()(),Wl(174,"td")(175,"td"),og(),Sl(176,"tr")(177,"td")(178,"code"),rN(179,"--background-color-headline"),og(),rN(180," \xA0"),og(),Sl(181,"td"),rN(182,"Cor do cabe\xE7alho"),og(),Sl(183,"td")(184,"code"),rN(185,"var(--color-neutral-light-10)"),og()()(),Sl(186,"tr")(187,"td")(188,"code"),rN(189,"--font-weight-headline"),og()(),Sl(190,"td"),rN(191,"Peso da fonte do cabe\xE7alho"),og(),Sl(192,"td")(193,"code"),rN(194,"var(--font-weight-bold)"),og()()(),Sl(195,"tr")(196,"td")(197,"strong"),rN(198,"Selected"),og()(),Wl(199,"td")(200,"td"),og(),Sl(201,"tr")(202,"td")(203,"code"),rN(204,"--background-color-selected"),og(),rN(205,"\xA0"),og(),Sl(206,"td"),rN(207,"Cor de background no estado de selecionado"),og(),Sl(208,"td")(209,"code"),rN(210,"var(--color-brand-01-lightest)"),og()()(),Sl(211,"tr")(212,"td")(213,"strong"),rN(214,"Actived"),og()(),Wl(215,"td")(216,"td"),og(),Sl(217,"tr")(218,"td")(219,"code"),rN(220,"--color-actived"),og()(),Sl(221,"td"),rN(222,"Cor do texto no estado de selecionado"),og(),Sl(223,"td")(224,"code"),rN(225,"var(--color-neutral-dark-90)"),og()()(),Sl(226,"tr")(227,"td")(228,"code"),rN(229,"--background-color-actived"),og()(),Sl(230,"td"),rN(231,"Cor de background no estado de selecionado"),og(),Sl(232,"td")(233,"code"),rN(234,"var(--color-brand-01-light)"),og()()()()()(),Sl(235,"div",10)(236,"h4",11),rN(237,"Seletor"),og(),Sl(238,"pre",12),rN(239,`<po-table
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
`),og()(),Sl(240,"h4",13),rN(241,"Propriedades"),og(),Sl(242,"table",14)(243,"tr",15)(244,"th",16),rN(245,"Nome"),og(),Sl(246,"th",16),rN(247,"Tipo"),og(),Sl(248,"th",16),rN(249,"Padr\xE3o"),og(),Sl(250,"th",16),rN(251,"Descri\xE7\xE3o"),og()(),Sl(252,"tr",17)(253,"td",18)(254,"div",19)(255,"span",20),rN(256," p-actions-right"),Wl(257,"br"),og()()(),Sl(258,"td",21)(259,"code",22),rN(260,"boolean"),og()(),Sl(261,"td",23)(262,"p")(263,"code"),rN(264,"false"),og()()(),Sl(265,"td",24)(266,"em")(267,"strong"),rN(268,"(opcional)"),og()(),Sl(269,"p"),rN(270,"Define que a coluna de a\xE7\xF5es ficar\xE1 no lado direito da tabela."),og()()(),Sl(271,"tr",17)(272,"td",18)(273,"div",19)(274,"span",20),rN(275," p-actions"),Wl(276,"br"),og()()(),Sl(277,"td",21)(278,"code",25),rN(279,"PoTableAction[]"),og()(),Sl(280,"td",23),rN(281,"-"),og(),Sl(282,"td",24)(283,"em")(284,"strong"),rN(285,"(opcional)"),og()(),Sl(286,"p"),rN(287,"Define uma lista de a\xE7\xF5es."),og(),Sl(288,"p"),rN(289,`Quando houver apenas uma a\xE7\xE3o definida ela ser\xE1 exibida diretamente na coluna, caso contr\xE1rio, o componente
se encarrega de agrup\xE1-las exibindo o \xEDcone `),Sl(290,"a",26)(291,"strong"),rN(292,"an an-dots-three"),og()(),rN(293," que listar\xE1 as a\xE7\xF5es ao ser clicado."),og(),Sl(294,"p")(295,"strong"),rN(296,"A coluna de a\xE7\xF5es n\xE3o ser\xE1 exibida quando:"),og()(),Sl(297,"ul")(298,"li"),rN(299,"a lista conter valores inv\xE1lidos ou indefinidos."),og(),Sl(300,"li"),rN(301,"tenha uma \xFAnica a\xE7\xE3o e a mesma n\xE3o for vis\xEDvel."),og()()()(),Sl(302,"tr",17)(303,"td",18)(304,"div",27)(305,"span",28),rN(306," (p-all-selected)"),Wl(307,"br"),og()()(),Sl(308,"td",21)(309,"code",29),rN(310,"EventEmitter"),og()(),Sl(311,"td",23),rN(312,"-"),og(),Sl(313,"td",24)(314,"em")(315,"strong"),rN(316,"(opcional)"),og()(),Sl(317,"p"),rN(318,"Evento executado quando todas as linhas s\xE3o selecionadas por meio do "),Sl(319,"em"),rN(320,"checkbox"),og(),rN(321," que seleciona todas as linhas."),og()()(),Sl(322,"tr",17)(323,"td",18)(324,"div",27)(325,"span",28),rN(326," (p-all-unselected)"),Wl(327,"br"),og()()(),Sl(328,"td",21)(329,"code",29),rN(330,"EventEmitter"),og()(),Sl(331,"td",23),rN(332,"-"),og(),Sl(333,"td",24)(334,"em")(335,"strong"),rN(336,"(opcional)"),og()(),Sl(337,"p"),rN(338,"Evento executado quando a sele\xE7\xE3o das linhas \xE9 desmarcada por meio do "),Sl(339,"em"),rN(340,"checkbox"),og(),rN(341," que seleciona todas as linhas."),og()()(),Sl(342,"tr",17)(343,"td",18)(344,"div",19)(345,"span",20),rN(346," p-auto-collapse"),Wl(347,"br"),og()()(),Sl(348,"td",21)(349,"code",22),rN(350,"boolean"),og()(),Sl(351,"td",23)(352,"p")(353,"code"),rN(354,"false"),og()()(),Sl(355,"td",24)(356,"em")(357,"strong"),rN(358,"(opcional)"),og()(),Sl(359,"p"),rN(360,"Permite fechar um detalhe ou row template automaticamente, ao abrir outro item."),og()()(),Sl(361,"tr",17)(362,"td",18)(363,"div",27)(364,"span",28),rN(365," (p-change-fixed-columns)"),Wl(366,"br"),og()()(),Sl(367,"td",21)(368,"code",29),rN(369,"EventEmitter"),og()(),Sl(370,"td",23),rN(371,"-"),og(),Sl(372,"td",24)(373,"em")(374,"strong"),rN(375,"(opcional)"),og()(),Sl(376,"p"),rN(377,"Evento disparado ao alterar o estado de fixa\xE7\xE3o de uma coluna no gerenciador de colunas."),og(),Sl(378,"p"),rN(379,`O componente envia como par\xE2metro um array de string com as propriedades das colunas fixas.
Por exemplo: ["name", "age"].`),og(),Sl(380,"blockquote")(381,"p"),rN(382,"Incompat\xEDvel com "),Sl(383,"code"),rN(384,"p-hide-action-fixed-columns"),og(),rN(385,". Quando esta propriedade estiver ativa, o evento n\xE3o ser\xE1 disparado."),og()()()(),Sl(386,"tr",17)(387,"td",18)(388,"div",27)(389,"span",28),rN(390," (p-change-visible-columns)"),Wl(391,"br"),og()()(),Sl(392,"td",21)(393,"code",29),rN(394,"EventEmitter"),og()(),Sl(395,"td",23),rN(396,"-"),og(),Sl(397,"td",24)(398,"em")(399,"strong"),rN(400,"(opcional)"),og()(),Sl(401,"p"),rN(402,"Evento disparado ao fechar o page slide do gerenciador de colunas ap\xF3s alterar as colunas vis\xEDveis."),og(),Sl(403,"p"),rN(404,`O componente envia como par\xE2metro um array de string com as colunas vis\xEDveis atualizadas.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),og()()(),Sl(405,"tr",17)(406,"td",18)(407,"div",27)(408,"span",28),rN(409," (p-collapsed)"),Wl(410,"br"),og()()(),Sl(411,"td",21)(412,"code",29),rN(413,"EventEmitter"),og()(),Sl(414,"td",23),rN(415,"-"),og(),Sl(416,"td",24)(417,"em")(418,"strong"),rN(419,"(opcional)"),og()(),Sl(420,"p"),rN(421,"Evento executado ao colapsar uma linha do "),Sl(422,"code"),rN(423,"po-table"),og(),rN(424,"."),og(),Sl(425,"blockquote")(426,"p"),rN(427,"Como par\xE2metro o componente envia o item colapsado."),og()()()(),Sl(428,"tr",17)(429,"td",18)(430,"div",27)(431,"span",28),rN(432," (p-restore-column-manager)"),Wl(433,"br"),og()()(),Sl(434,"td",21)(435,"code",29),rN(436,"EventEmitter"),og()(),Sl(437,"td",23),rN(438,"-"),og(),Sl(439,"td",24)(440,"em")(441,"strong"),rN(442,"(opcional)"),og()(),Sl(443,"p"),rN(444,"Evento disparado ao clicar no bot\xE3o de restaurar padr\xE3o no gerenciador de colunas."),og(),Sl(445,"p"),rN(446,`O componente envia como par\xE2metro um array de string com as colunas configuradas inicialmente.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),og()()(),Sl(447,"tr",17)(448,"td",18)(449,"div",19)(450,"span",20),rN(451," p-columns"),Wl(452,"br"),og()()(),Sl(453,"td",21)(454,"code",30),rN(455,"PoTableColumn[]"),og()(),Sl(456,"td",23),rN(457,"-"),og(),Sl(458,"td",24)(459,"em")(460,"strong"),rN(461,"(opcional)"),og()(),Sl(462,"p"),rN(463,"Lista das colunas da tabela, deve receber um "),Sl(464,"em"),rN(465,"array"),og(),rN(466," de objetos que implementam a interface "),Sl(467,"code"),rN(468,"PoTableColumn"),og(),rN(469,`.
Por padr\xE3o receber\xE1 como valor a primeira coluna da lista de itens da tabela.`),og(),Sl(470,"blockquote")(471,"p"),rN(472,"Caso n\xE3o encontre valor, a mensagem 'Nenhuma defini\xE7\xE3o de colunas' ser\xE1 exibida."),og()()()(),Sl(473,"tr",17)(474,"td",18)(475,"div",19)(476,"span",20),rN(477," p-components-size"),Wl(478,"br"),og()()(),Sl(479,"td",21)(480,"code",31),rN(481,"string"),og()(),Sl(482,"td",23)(483,"p")(484,"code"),rN(485,"medium"),og()()(),Sl(486,"td",24)(487,"em")(488,"strong"),rN(489,"(opcional)"),og()(),Sl(490,"p"),rN(491,"Define o tamanho dos componentes de formul\xE1rio no table:"),og(),Sl(492,"ul")(493,"li")(494,"code"),rN(495,"small"),og(),rN(496,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),og(),Sl(497,"li")(498,"code"),rN(499,"medium"),og(),rN(500,": aplica a medida medium de cada componente."),og()(),Sl(501,"blockquote")(502,"p"),rN(503,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Sl(504,"code"),rN(505,"medium"),og(),rN(506,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Sl(507,"a",32),rN(508,"po-theme"),og(),rN(509,"."),og()()()(),Sl(510,"tr",17)(511,"td",18)(512,"div",19)(513,"span",20),rN(514," p-container"),Wl(515,"br"),og()()(),Sl(516,"td",21)(517,"code",31),rN(518,"string"),og()(),Sl(519,"td",23)(520,"p")(521,"code"),rN(522,"border"),og()()(),Sl(523,"td",24)(524,"em")(525,"strong"),rN(526,"(opcional)"),og()(),Sl(527,"p"),rN(528,"Adiciona um contorno arredondado ao "),Sl(529,"code"),rN(530,"po-table"),og(),rN(531,", as op\xE7\xF5es s\xE3o:"),og(),Sl(532,"ul")(533,"li")(534,"code"),rN(535,"border"),og(),rN(536,": com bordas/linhas."),og(),Sl(537,"li")(538,"code"),rN(539,"shadow"),og(),rN(540,": com sombras."),og()()()(),Sl(541,"tr",17)(542,"td",18)(543,"div",19)(544,"span",20),rN(545," p-draggable"),Wl(546,"br"),og()()(),Sl(547,"td",21)(548,"code",22),rN(549,"boolean"),og()(),Sl(550,"td",23)(551,"p")(552,"code"),rN(553,"false"),og()()(),Sl(554,"td",24)(555,"em")(556,"strong"),rN(557,"(opcional)"),og()(),Sl(558,"p"),rN(559,"Habilita o modo drag and drop para as colunas da tabela."),og()()(),Sl(560,"tr",17)(561,"td",18)(562,"div",27)(563,"span",28),rN(564," (p-delete-items)"),Wl(565,"br"),og()()(),Sl(566,"td",21)(567,"code",29),rN(568,"EventEmitter"),og()(),Sl(569,"td",23),rN(570,"-"),og(),Sl(571,"td",24)(572,"em")(573,"strong"),rN(574,"(opcional)"),og()(),Sl(575,"p"),rN(576,"Evento executado ap\xF3s o m\xE9todo de exclus\xE3o ser finalizado."),og(),Sl(577,"pre")(578,"code"),rN(579,`<po-table
 (p-delete-items)="items = $event"
>
</po-table>
`),og()(),Sl(580,"blockquote")(581,"p"),rN(582,"Como par\xE2metro o componente envia a lista atualizada, sem os itens exclu\xEDdos."),og()()()(),Sl(583,"tr",17)(584,"td",18)(585,"div",27)(586,"span",28),rN(587," (p-expanded)"),Wl(588,"br"),og()()(),Sl(589,"td",21)(590,"code",29),rN(591,"EventEmitter"),og()(),Sl(592,"td",23),rN(593,"-"),og(),Sl(594,"td",24)(595,"em")(596,"strong"),rN(597,"(opcional)"),og()(),Sl(598,"p"),rN(599,"Evento executado ao expandir uma linha do "),Sl(600,"code"),rN(601,"po-table"),og(),rN(602,"."),og(),Sl(603,"blockquote")(604,"p"),rN(605,"Como par\xE2metro o componente envia o item expandido."),og()()()(),Sl(606,"tr",17)(607,"td",18)(608,"div",19)(609,"span",20),rN(610," p-filter-type"),Wl(611,"br"),og()()(),Sl(612,"td",21)(613,"code",33),rN(614,"PoSearchFilterMode"),og()(),Sl(615,"td",23)(616,"p")(617,"code"),rN(618,"startsWith"),og()()(),Sl(619,"td",24)(620,"em")(621,"strong"),rN(622,"(opcional)"),og()(),Sl(623,"p"),rN(624,`Define o modo de pesquisa utilizado no campo de busca, quando habilitado.
Valores definidos no enum: PoSearchFilterMode`),og(),Sl(625,"blockquote")(626,"p"),rN(627,`Obs: A pesquisa \xE9 realizada exclusivamente nos dados locais, ou seja, aqueles que foram
renderizados na tabela.`),og()()()(),Sl(628,"tr",17)(629,"td",18)(630,"div",19)(631,"span",20),rN(632," p-filtered-columns"),Wl(633,"br"),og()()(),Sl(634,"td",21)(635,"code",34),rN(636,"Array<string>"),og()(),Sl(637,"td",23),rN(638,"-"),og(),Sl(639,"td",24)(640,"em")(641,"strong"),rN(642,"(opcional)"),og()(),Sl(643,"p"),rN(644,`Define as colunas que ser\xE3o filtradas no campo de pesquisa.
Aceita um array de strings, representando as colunas espec\xEDficas que ser\xE3o consideradas na filtragem.`),og()()(),Sl(645,"tr",17)(646,"td",18)(647,"div",19)(648,"span",20),rN(649," p-height"),Wl(650,"br"),og()()(),Sl(651,"td",21)(652,"code",35),rN(653,"number"),og()(),Sl(654,"td",23),rN(655,"-"),og(),Sl(656,"td",24)(657,"em")(658,"strong"),rN(659,"(opcional)"),og()(),Sl(660,"p"),rN(661,"Define a altura da tabela em "),Sl(662,"em"),rN(663,"pixels"),og(),rN(664," e fixa o cabe\xE7alho."),og(),Sl(665,"p"),rN(666,"Ao utilizar essa propriedade ser\xE1 inserido o "),Sl(667,"code"),rN(668,"virtual-scroll"),og(),rN(669," na tabela melhorando a performance."),og()()(),Sl(670,"tr",17)(671,"td",18)(672,"div",19)(673,"span",20),rN(674," p-hide-action-fixed-columns"),Wl(675,"br"),og()()(),Sl(676,"td",21)(677,"code",22),rN(678,"boolean"),og()(),Sl(679,"td",23)(680,"p")(681,"code"),rN(682,"false"),og()()(),Sl(683,"td",24)(684,"em")(685,"strong"),rN(686,"(opcional)"),og()(),Sl(687,"p"),rN(688,"Permite que as a\xE7\xF5es para fixar uma coluna da tabela sejam escondidas."),og()()(),Sl(689,"tr",17)(690,"td",18)(691,"div",19)(692,"span",20),rN(693," p-hide-batch-actions"),Wl(694,"br"),og()()(),Sl(695,"td",21)(696,"code",22),rN(697,"boolean"),og()(),Sl(698,"td",23)(699,"p")(700,"code"),rN(701,"true"),og()()(),Sl(702,"td",24)(703,"em")(704,"strong"),rN(705,"(opcional)"),og()(),Sl(706,"p"),rN(707,"Permite que as a\xE7\xF5es em lote, respons\xE1vel por excluir e exibir a quantidade de itens, sejam escondidas."),og()()(),Sl(708,"tr",17)(709,"td",18)(710,"div",19)(711,"span",20),rN(712," p-hide-columns-manager"),Wl(713,"br"),og()()(),Sl(714,"td",21)(715,"code",22),rN(716,"boolean"),og()(),Sl(717,"td",23)(718,"p")(719,"code"),rN(720,"false"),og()()(),Sl(721,"td",24)(722,"em")(723,"strong"),rN(724,"(opcional)"),og()(),Sl(725,"p"),rN(726,"Permite que o gerenciador de colunas, respons\xE1vel pela defini\xE7\xE3o de quais colunas ser\xE3o exibidas, seja escondido."),og()()(),Sl(727,"tr",17)(728,"td",18)(729,"div",19)(730,"span",20),rN(731," p-hide-detail"),Wl(732,"br"),og()()(),Sl(733,"td",21)(734,"code",22),rN(735,"boolean"),og()(),Sl(736,"td",23)(737,"p")(738,"code"),rN(739,"false"),og()()(),Sl(740,"td",24)(741,"em")(742,"strong"),rN(743,"(opcional)"),og()(),Sl(744,"p"),rN(745,"Habilita a visualiza\xE7\xE3o da lista de detalhes de cada linha da coluna."),og()()(),Sl(746,"tr",17)(747,"td",18)(748,"div",19)(749,"span",20),rN(750," p-hide-select-all"),Wl(751,"br"),og()()(),Sl(752,"td",21)(753,"code",22),rN(754,"boolean"),og()(),Sl(755,"td",23)(756,"p")(757,"code"),rN(758,"false"),og()()(),Sl(759,"td",24)(760,"p"),rN(761,"Esconde o "),Sl(762,"em"),rN(763,"checkbox"),og(),rN(764," para sele\xE7\xE3o de todas as linhas."),og(),Sl(765,"blockquote")(766,"p"),rN(767,"Sempre receber\xE1 "),Sl(768,"em"),rN(769,"true"),og(),rN(770," caso a sele\xE7\xE3o de apenas uma linha esteja ativa."),og()()()(),Sl(771,"tr",17)(772,"td",18)(773,"div",19)(774,"span",20),rN(775," p-hide-table-search"),Wl(776,"br"),og()()(),Sl(777,"td",21)(778,"code",22),rN(779,"boolean"),og()(),Sl(780,"td",23)(781,"p")(782,"code"),rN(783,"true"),og()()(),Sl(784,"td",24)(785,"em")(786,"strong"),rN(787,"(opcional)"),og()(),Sl(788,"p"),rN(789,"Permite que o campo de pesquisa seja escondido."),og()()(),Sl(790,"tr",17)(791,"td",18)(792,"div",19)(793,"span",20),rN(794," p-infinite-scroll"),Wl(795,"br"),og()()(),Sl(796,"td",21)(797,"code",22),rN(798,"boolean"),og()(),Sl(799,"td",23)(800,"p")(801,"code"),rN(802,"false"),og()()(),Sl(803,"td",24)(804,"em")(805,"strong"),rN(806,"(opcional)"),og()(),Sl(807,"p"),rN(808,`Se verdadeiro, ativa a funcionalidade de scroll infinito para a tabela e o bot\xE3o "Carregar Mais" deixar\xE1 de ser exibido. Ao chegar no fim da tabela
executar\xE1 a fun\xE7\xE3o `),Sl(809,"code"),rN(810,"p-show-more"),og(),rN(811,"."),og(),Sl(812,"p")(813,"strong"),rN(814,"Regras de utiliza\xE7\xE3o:"),og()(),Sl(815,"ul")(816,"li"),rN(817,"O scroll infinito s\xF3 funciona para tabelas que utilizam a propriedade "),Sl(818,"code"),rN(819,"p-height"),og(),rN(820," e que possuem o scroll j\xE1 na carga inicial dos dados."),og()()()(),Sl(821,"tr",17)(822,"td",18)(823,"div",19)(824,"span",20),rN(825," p-infinite-scroll-distance"),Wl(826,"br"),og()()(),Sl(827,"td",21)(828,"code",35),rN(829,"number"),og()(),Sl(830,"td",23),rN(831,"-"),og(),Sl(832,"td",24)(833,"em")(834,"strong"),rN(835,"(opcional)"),og()(),Sl(836,"p"),rN(837,"Define o percentual necess\xE1rio para disparar o evento "),Sl(838,"code"),rN(839,"p-show-more"),og(),rN(840,`, que \xE9 respons\xE1vel por carregar mais dados na tabela. Caso o valor informado seja maior que 100 ou menor
que 0, o valor padr\xE3o ser\xE1 100%`),og(),Sl(841,"p")(842,"strong"),rN(843,"Exemplos:"),og()(),Sl(844,"ul")(845,"li"),rN(846,"p-infinite-scroll-distance = 80: Quando atingir 80% do scroll da tabela, o "),Sl(847,"code"),rN(848,"p-show-more"),og(),rN(849," ser\xE1 disparado."),og()()()(),Sl(850,"tr",17)(851,"td",18)(852,"div",19)(853,"span",20),rN(854," p-items"),Wl(855,"br"),og()()(),Sl(856,"td",21)(857,"code",36),rN(858,"any[]"),og()(),Sl(859,"td",23),rN(860,"-"),og(),Sl(861,"td",24)(862,"p"),rN(863,"Lista de itens da tabela."),og(),Sl(864,"blockquote")(865,"p"),rN(866,"Se falso, ser\xE1 inicializado como um "),Sl(867,"em"),rN(868,"array"),og(),rN(869," vazio."),og()()()(),Sl(870,"tr",17)(871,"td",18)(872,"div",19)(873,"span",20),rN(874," p-literals"),Wl(875,"br"),og()()(),Sl(876,"td",21)(877,"code",37),rN(878,"PoTableLiterals"),og()(),Sl(879,"td",23),rN(880,"-"),og(),Sl(881,"td",24)(882,"em")(883,"strong"),rN(884,"(opcional)"),og()(),Sl(885,"p"),rN(886,"Objeto com as literais usadas no "),Sl(887,"code"),rN(888,"po-table"),og(),rN(889,"."),og(),Sl(890,"p"),rN(891,"Existem duas maneiras de customizar o componente, passando um objeto com todas as literais dispon\xEDveis:"),og(),Sl(892,"pre")(893,"code"),rN(894,`const customLiterals: PoTableLiterals = {
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
`),og()(),Sl(895,"p"),rN(896,"Ou passando apenas as literais que deseja customizar:"),og(),Sl(897,"pre")(898,"code"),rN(899,`const customLiterals: PoTableLiterals = {
  noData: 'Sem dados'
};
`),og()(),Sl(900,"p"),rN(901,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente."),og(),Sl(902,"pre")(903,"code"),rN(904,`<po-table
  [p-literals]="customLiterals">
</po-table>
`),og()(),Sl(905,"blockquote")(906,"p"),rN(907,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),Sl(908,"a",38)(909,"code"),rN(910,"PoI18nService"),og()(),rN(911," ou do browser."),og()()()(),Sl(912,"tr",17)(913,"td",18)(914,"div",19)(915,"span",20),rN(916," p-loading"),Wl(917,"br"),og()()(),Sl(918,"td",21)(919,"code",22),rN(920,"boolean"),og()(),Sl(921,"td",23)(922,"p")(923,"code"),rN(924,"false"),og()()(),Sl(925,"td",24)(926,"em")(927,"strong"),rN(928,"(opcional)"),og()(),Sl(929,"p"),rN(930,"Bloqueia a intera\xE7\xE3o do usu\xE1rio com os dados da "),Sl(931,"em"),rN(932,"table"),og(),rN(933,"."),og()()(),Sl(934,"tr",17)(935,"td",18)(936,"div",19)(937,"span",20),rN(938," p-loading-show-more"),Wl(939,"br"),og()()(),Sl(940,"td",21)(941,"code",22),rN(942,"boolean"),og()(),Sl(943,"td",23)(944,"p")(945,"code"),rN(946,"false"),og()()(),Sl(947,"td",24)(948,"em")(949,"strong"),rN(950,"(opcional)"),og()(),Sl(951,"p"),rN(952,'Permite que seja adicionado o estado de carregamento no bot\xE3o "Carregar mais resultados".'),og()()(),Sl(953,"tr",17)(954,"td",18)(955,"div",19)(956,"span",20),rN(957," p-max-columns"),Wl(958,"br"),og()()(),Sl(959,"td",21)(960,"code",35),rN(961,"number"),og()(),Sl(962,"td",23),rN(963,"-"),og(),Sl(964,"td",24)(965,"em")(966,"strong"),rN(967,"(opcional)"),og()(),Sl(968,"p"),rN(969,"Define uma quantidade m\xE1xima de colunas que ser\xE3o exibidas na tabela."),og(),Sl(970,"p"),rN(971,`Quando chegar no valor informado, as colunas que n\xE3o estiverem selecionadas ficar\xE3o
desabilitadas e caso houver mais colunas vis\xEDveis do que o permitido, as excedentes
ser\xE3o ignoradas por ordem de posi\xE7\xE3o.`),og()()(),Sl(972,"tr",17)(973,"td",18)(974,"div",19)(975,"span",20),rN(976," p-param-delete-api"),Wl(977,"br"),og()()(),Sl(978,"td",21)(979,"code",31),rN(980,"string"),og()(),Sl(981,"td",23)(982,"p")(983,"code"),rN(984,"id"),og()()(),Sl(985,"td",24)(986,"em")(987,"strong"),rN(988,"(opcional)"),og()(),Sl(989,"p"),rN(990,"Adiciona o par\xE2metro a ser enviado para a requisi\xE7\xE3o de DELETE."),og(),Sl(991,"p"),rN(992,"\xC9 necess\xE1rio a utiliza\xE7\xE3o da propriedade "),Sl(993,"code"),rN(994,"p-service-delete"),og(),rN(995," em conjunto."),og()()(),Sl(996,"tr",17)(997,"td",18)(998,"div",19)(999,"span",20),rN(1e3," p-selectable"),Wl(1001,"br"),og()()(),Sl(1002,"td",21)(1003,"code",22),rN(1004,"boolean"),og()(),Sl(1005,"td",23)(1006,"p")(1007,"code"),rN(1008,"false"),og()()(),Sl(1009,"td",24)(1010,"em")(1011,"strong"),rN(1012,"(opcional)"),og()(),Sl(1013,"p"),rN(1014,"Permite a sele\xE7\xE3o de linhas na tabela e, caso a propriedade "),Sl(1015,"code"),rN(1016,"p-single-select"),og(),rN(1017,` esteja definida ser\xE1 poss\xEDvel
selecionar apenas uma \xFAnica linha.`),og(),Sl(1018,"p")(1019,"strong"),rN(1020,"Importante:"),og()(),Sl(1021,"ul")(1022,"li"),rN(1023,"As linhas de detalhe definidas em "),Sl(1024,"code"),rN(1025,"PoTableDetail"),og(),rN(1026," possuem comportamento independente da linha mestre;"),og(),Sl(1027,"li"),rN(1028,"Cada linha possui por padr\xE3o a propriedade din\xE2mica "),Sl(1029,"code"),rN(1030,"$selected"),og(),rN(1031,`, na qual \xE9 poss\xEDvel validar se a linha
est\xE1 selecionada, por exemplo: `),Sl(1032,"code"),rN(1033,"item.$selected"),og(),rN(1034," ou "),Sl(1035,"code"),rN(1036,"item['$selected']"),og(),rN(1037,"."),og()()()(),Sl(1038,"tr",17)(1039,"td",18)(1040,"div",19)(1041,"span",20),rN(1042," p-selectable-entire-line"),Wl(1043,"br"),og()()(),Sl(1044,"td",21)(1045,"code",22),rN(1046,"boolean"),og()(),Sl(1047,"td",23)(1048,"p")(1049,"code"),rN(1050,"true"),og()()(),Sl(1051,"td",24)(1052,"p"),rN(1053,"Permite selecionar um item da tabela clicando na linha."),og(),Sl(1054,"blockquote")(1055,"p"),rN(1056,"Caso haja necessidade de selecionar o item apenas via radio ou checkbox, deve-se definir esta propriedade como "),Sl(1057,"code"),rN(1058,"false"),og(),rN(1059,"."),og()()()(),Sl(1060,"tr",17)(1061,"td",18)(1062,"div",27)(1063,"span",28),rN(1064," (p-selected)"),Wl(1065,"br"),og()()(),Sl(1066,"td",21)(1067,"code",29),rN(1068,"EventEmitter"),og()(),Sl(1069,"td",23),rN(1070,"-"),og(),Sl(1071,"td",24)(1072,"em")(1073,"strong"),rN(1074,"(opcional)"),og()(),Sl(1075,"p"),rN(1076,"Evento executado ao selecionar uma linha do "),Sl(1077,"code"),rN(1078,"po-table"),og(),rN(1079,"."),og()()(),Sl(1080,"tr",17)(1081,"td",18)(1082,"div",19)(1083,"span",20),rN(1084," p-service-api"),Wl(1085,"br"),og()()(),Sl(1086,"td",21)(1087,"code",31),rN(1088,"string"),og()(),Sl(1089,"td",23),rN(1090,"-"),og(),Sl(1091,"td",24)(1092,"em")(1093,"strong"),rN(1094,"(opcional)"),og()(),Sl(1095,"p"),rN(1096,"URL da API respons\xE1vel por retornar os registros."),og(),Sl(1097,"p"),rN(1098,"Ao realizar a busca de mais registros via pagina\xE7\xE3o (Carregar mais resultados), ser\xE1 enviado os par\xE2metros "),Sl(1099,"code"),rN(1100,"page"),og(),rN(1101," e "),Sl(1102,"code"),rN(1103,"pageSize"),og(),rN(1104,", conforme abaixo:"),og(),Sl(1105,"pre")(1106,"code"),rN(1107,`url + ?page=1&pageSize=10
`),og()(),Sl(1108,"p"),rN(1109,"Caso utilizar ordena\xE7\xE3o, a coluna ordenada ser\xE1 enviada atrav\xE9s do par\xE2metro "),Sl(1110,"code"),rN(1111,"order"),og(),rN(1112,", por exemplo:"),og(),Sl(1113,"ul")(1114,"li")(1115,"p"),rN(1116,"Coluna decrescente:"),og(),Sl(1117,"pre")(1118,"code"),rN(1119,`url + ?page=1&pageSize=10&order=-name
`),og()()(),Sl(1120,"li")(1121,"p"),rN(1122,"Coluna ascendente:"),og(),Sl(1123,"pre")(1124,"code"),rN(1125,`url + ?page=1&pageSize=10&order=name
`),og()()()(),Sl(1126,"blockquote")(1127,"p"),rN(1128,"Esta URL deve retornar e receber os dados no padr\xE3o de "),Sl(1129,"a",39),rN(1130,"API do PO UI"),og(),rN(1131,"."),og()()()(),Sl(1132,"tr",17)(1133,"td",18)(1134,"div",19)(1135,"span",20),rN(1136," p-service-delete"),Wl(1137,"br"),og()()(),Sl(1138,"td",21)(1139,"code",31),rN(1140,"string"),og()(),Sl(1141,"td",23),rN(1142,"-"),og(),Sl(1143,"td",24)(1144,"em")(1145,"strong"),rN(1146,"(opcional)"),og()(),Sl(1147,"p"),rN(1148,"URL da API respons\xE1vel por excluir os registros."),og(),Sl(1149,"p"),rN(1150,"Ao selecionar o bot\xE3o de excluir itens, essa url ser\xE1 executada utilizando o par\xE2metro enviado na propriedade "),Sl(1151,"code"),rN(1152,"p-param-delete-api"),og(),rN(1153,`.
Caso ela n\xE3o seja utilizada, o par\xE2metro padr\xE3o a ser enviado ser\xE1 `),Sl(1154,"code"),rN(1155,"id"),og(),rN(1156,"."),og(),Sl(1157,"blockquote")(1158,"p"),rN(1159,"Esta URL deve retornar e receber os dados no padr\xE3o de "),Sl(1160,"a",39),rN(1161,"API do PO UI"),og(),rN(1162,"."),og()()()(),Sl(1163,"tr",17)(1164,"td",18)(1165,"div",27)(1166,"span",28),rN(1167," (p-show-more)"),Wl(1168,"br"),og()()(),Sl(1169,"td",21)(1170,"code",29),rN(1171,"EventEmitter"),og()(),Sl(1172,"td",23),rN(1173,"-"),og(),Sl(1174,"td",24)(1175,"em")(1176,"strong"),rN(1177,"(opcional)"),og()(),Sl(1178,"p"),rN(1179,`Recebe uma a\xE7\xE3o de clique para o bot\xE3o "Carregar mais resultados", caso nenhuma a\xE7\xE3o for definida o mesmo
n\xE3o \xE9 vis\xEDvel.`),og(),Sl(1180,"p"),rN(1181,"Recebe um objeto "),Sl(1182,"code"),rN(1183,"{ column, type }"),og(),rN(1184," onde:"),og(),Sl(1185,"ul")(1186,"li"),rN(1187,"column ("),Sl(1188,"code"),rN(1189,"PoTableColumn"),og(),rN(1190,"): objeto da coluna que est\xE1 ordenada."),og(),Sl(1191,"li"),rN(1192,"type ("),Sl(1193,"code"),rN(1194,"PoTableColumnSortType"),og(),rN(1195,"): tipo da ordena\xE7\xE3o."),og()()()(),Sl(1196,"tr",17)(1197,"td",18)(1198,"div",19)(1199,"span",20),rN(1200," p-show-more-disabled"),Wl(1201,"br"),og()()(),Sl(1202,"td",21)(1203,"code",22),rN(1204,"boolean"),og()(),Sl(1205,"td",23)(1206,"p")(1207,"code"),rN(1208,"false"),og()()(),Sl(1209,"td",24)(1210,"p"),rN(1211,'Se verdadeiro, torna habilitado o bot\xE3o "Carregar mais resultados".'),og()()(),Sl(1212,"tr",17)(1213,"td",18)(1214,"div",19)(1215,"span",20),rN(1216," p-single-select"),Wl(1217,"br"),og()()(),Sl(1218,"td",21)(1219,"code",22),rN(1220,"boolean"),og()(),Sl(1221,"td",23),rN(1222,"-"),og(),Sl(1223,"td",24)(1224,"p"),rN(1225,"Define que somente uma linha da tabela pode ser selecionada."),og(),Sl(1226,"blockquote")(1227,"p"),rN(1228,"Esta defini\xE7\xE3o n\xE3o se aplica aos itens filhos, os mesmos possuem comportamento independente do item pai."),og()()()(),Sl(1229,"tr",17)(1230,"td",18)(1231,"div",19)(1232,"span",20),rN(1233," p-sort"),Wl(1234,"br"),og()()(),Sl(1235,"td",21)(1236,"code",22),rN(1237,"boolean"),og()(),Sl(1238,"td",23)(1239,"p")(1240,"code"),rN(1241,"false"),og()()(),Sl(1242,"td",24)(1243,"em")(1244,"strong"),rN(1245,"(opcional)"),og()(),Sl(1246,"p"),rN(1247,`Habilita em todas as colunas a op\xE7\xE3o de ordena\xE7\xE3o de dados. Caso a coluna seja do tipo 'data' ou 'dateTime' a
mesma deve respeitar os tipos de entrada definidos para que sejam ordenadas.`),og()()(),Sl(1248,"tr",17)(1249,"td",18)(1250,"div",27)(1251,"span",28),rN(1252," (p-sort-by)"),Wl(1253,"br"),og()()(),Sl(1254,"td",21)(1255,"code",29),rN(1256,"EventEmitter"),og()(),Sl(1257,"td",23),rN(1258,"-"),og(),Sl(1259,"td",24)(1260,"em")(1261,"strong"),rN(1262,"(opcional)"),og()(),Sl(1263,"p"),rN(1264,"Evento executado ao ordenar colunas da tabela."),og(),Sl(1265,"p"),rN(1266,"Recebe um objeto "),Sl(1267,"code"),rN(1268,"{ column, type }"),og(),rN(1269," onde:"),og(),Sl(1270,"ul")(1271,"li"),rN(1272,"column ("),Sl(1273,"code"),rN(1274,"PoTableColumn"),og(),rN(1275,"): objeto da coluna que foi clicada/ordenada."),og(),Sl(1276,"li"),rN(1277,"type ("),Sl(1278,"code"),rN(1279,"PoTableColumnSortType"),og(),rN(1280,"): tipo da ordena\xE7\xE3o."),og()()()(),Sl(1281,"tr",17)(1282,"td",18)(1283,"div",19)(1284,"span",20),rN(1285," p-spacing"),Wl(1286,"br"),og()()(),Sl(1287,"td",21)(1288,"code",31),rN(1289,"string"),og()(),Sl(1290,"td",23)(1291,"p")(1292,"code"),rN(1293,"medium"),og()()(),Sl(1294,"td",24)(1295,"em")(1296,"strong"),rN(1297,"(opcional)"),og()(),Sl(1298,"p"),rN(1299,`Define o espa\xE7amento interno das c\xE9lulas, impactando diretamente na altura das linhas do table. Os valores
permitidos s\xE3o definidos pelo enum `),Sl(1300,"strong"),rN(1301,"PoTableColumnSpacing"),og(),rN(1302,"."),og(),Sl(1303,"blockquote")(1304,"p"),rN(1305,"Em n\xEDvel de acessibilidade "),Sl(1306,"strong"),rN(1307,"AA"),og(),rN(1308,", caso o valor de "),Sl(1309,"code"),rN(1310,"p-spacing"),og(),rN(1311," n\xE3o seja definido, o valor padr\xE3o ser\xE1 "),Sl(1312,"code"),rN(1313,"extraSmall"),og(),rN(1314,`
nos seguintes cen\xE1rios:`),og(),Sl(1315,"ul")(1316,"li"),rN(1317,"Quando o valor de "),Sl(1318,"code"),rN(1319,"p-components-size"),og(),rN(1320," for "),Sl(1321,"code"),rN(1322,"small"),og(),rN(1323,";"),og(),Sl(1324,"li"),rN(1325,"Quando o valor padr\xE3o dos componentes for configurado como "),Sl(1326,"code"),rN(1327,"small"),og(),rN(1328,` no
`),Sl(1329,"a",32),rN(1330,"servi\xE7o de tema"),og(),rN(1331,"."),og()()()()(),Sl(1332,"tr",17)(1333,"td",18)(1334,"div",19)(1335,"span",20),rN(1336," p-striped"),Wl(1337,"br"),og()()(),Sl(1338,"td",21)(1339,"code",22),rN(1340,"boolean"),og()(),Sl(1341,"td",23)(1342,"p")(1343,"code"),rN(1344,"false"),og()()(),Sl(1345,"td",24)(1346,"p"),rN(1347,"Habilita ou desabilita o estilo listrado da tabela ("),Sl(1348,"code"),rN(1349,"striped"),og(),rN(1350,")."),og(),Sl(1351,"blockquote")(1352,"p"),rN(1353,"Recomendado para tabelas com maior n\xFAmero de dados, facilitando a sua visualiza\xE7\xE3o na tabela."),og()()()(),Sl(1354,"tr",17)(1355,"td",18)(1356,"div",19)(1357,"span",20),rN(1358," p-text-wrap"),Wl(1359,"br"),og()()(),Sl(1360,"td",21)(1361,"code",22),rN(1362,"boolean"),og()(),Sl(1363,"td",23)(1364,"p")(1365,"code"),rN(1366,"false"),og()()(),Sl(1367,"td",24)(1368,"em")(1369,"strong"),rN(1370,"(opcional)"),og()(),Sl(1371,"p"),rN(1372,`Habilita ou desabilita a quebra autom\xE1tica de texto. Quando ativada, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),og(),Sl(1373,"blockquote")(1374,"p"),rN(1375,"Incompat\xEDvel com "),Sl(1376,"code"),rN(1377,"virtual-scroll"),og(),rN(1378,", que requer altura fixa nas linhas."),og()()()(),Sl(1379,"tr",17)(1380,"td",18)(1381,"div",27)(1382,"span",28),rN(1383," (p-unselected)"),Wl(1384,"br"),og()()(),Sl(1385,"td",21)(1386,"code",29),rN(1387,"EventEmitter"),og()(),Sl(1388,"td",23),rN(1389,"-"),og(),Sl(1390,"td",24)(1391,"em")(1392,"strong"),rN(1393,"(opcional)"),og()(),Sl(1394,"p"),rN(1395,"Evento executado ao desmarcar a sele\xE7\xE3o de uma linha do "),Sl(1396,"code"),rN(1397,"po-table"),og(),rN(1398,"."),og()()(),Sl(1399,"tr",17)(1400,"td",18)(1401,"div",19)(1402,"span",20),rN(1403," p-virtual-scroll"),Wl(1404,"br"),og()()(),Sl(1405,"td",21)(1406,"code",22),rN(1407,"boolean"),og()(),Sl(1408,"td",23)(1409,"p")(1410,"code"),rN(1411,"true"),og()()(),Sl(1412,"td",24)(1413,"em")(1414,"strong"),rN(1415,"(opcional)"),og()(),Sl(1416,"p"),rN(1417,"Habilita o "),Sl(1418,"code"),rN(1419,"virtual-scroll"),og(),rN(1420,` na tabela para melhorar a performance com grandes volumes de dados.
Requer altura (`),Sl(1421,"code"),rN(1422,"p-height"),og(),rN(1423,") para funcionar corretamente."),og(),Sl(1424,"blockquote")(1425,"p"),rN(1426,"Incompat\xEDvel com "),Sl(1427,"code"),rN(1428,"p-text-wrap"),og(),rN(1429," e "),Sl(1430,"code"),rN(1431,"master-detail"),og(),rN(1432,", pois o "),Sl(1433,"code"),rN(1434,"virtual-scroll"),og(),rN(1435," exige altura fixa nas linhas."),og()()()()(),Sl(1436,"h3",13),rN(1437,"M\xE9todos"),og(),Sl(1438,"table",40)(1439,"tr",17)(1440,"th",41)(1441,"div",19)(1442,"h4")(1443,"span",20),rN(1444," applyFilters "),og()()()()(),Sl(1445,"tr",24)(1446,"td",24)(1447,"p"),rN(1448,"M\xE9todo respons\xE1vel por realizar busca no servi\xE7o de dados podendo informar filtros e com o retorno, atualiza a tabela."),og(),Sl(1449,"p"),rN(1450,"Caso n\xE3o seja informado par\xE2metro, nada ser\xE1 adicionado ao GET, conforme abaixo:"),og(),Sl(1451,"pre")(1452,"code"),rN(1453,`url + ?page=1&pageSize=10
`),og()(),Sl(1454,"blockquote")(1455,"p"),rN(1456,"Obs: os par\xE2metros "),Sl(1457,"code"),rN(1458,"page"),og(),rN(1459," e "),Sl(1460,"code"),rN(1461,"pageSize"),og(),rN(1462," sempre ser\xE3o chamados independente de ser enviados outros par\xE2metros."),og()(),Sl(1463,"p"),rN(1464,"Caso sejam informados os par\xE2metros "),Sl(1465,"code"),rN(1466,"{ name: 'JOHN', age: '23' }"),og(),rN(1467,", todos ser\xE3o adicionados ao GET, conforme abaixo:"),og(),Sl(1468,"pre")(1469,"code"),rN(1470,`url + ?page=1&pageSize=10&name=JOHN&age=23
`),og()()()()(),Sl(1471,"h5")(1472,"b"),rN(1473,"Par\xE2metros"),og()(),Sl(1474,"table",14)(1475,"tr",15)(1476,"th",16),rN(1477,"Nome"),og(),Sl(1478,"th",16),rN(1479,"Tipo"),og(),Sl(1480,"th",16),rN(1481,"Descri\xE7\xE3o"),og()(),Sl(1482,"tr",17)(1483,"td",18),rN(1484," queryParams"),og(),Sl(1485,"td",21)(1486,"code",42),rN(1487," { key: value } "),og()(),Sl(1488,"td",24)(1489,"p"),rN(1490,"Formato do objeto a ser enviado."),og(),Sl(1491,"blockquote")(1492,"p"),rN(1493,"Pode ser utilizada qualquer string como key, e qualquer string ou number como value."),og()()()()(),Wl(1494,"br"),Sl(1495,"table",40)(1496,"tr",17)(1497,"th",41)(1498,"div",19)(1499,"h4")(1500,"span",20),rN(1501," applyFixedColumns "),og()()()()(),Sl(1502,"tr",24)(1503,"td",24)(1504,"p"),rN(1505,"Verifica se columns possuem a propriedade width."),og()()()(),Wl(1506,"br"),Sl(1507,"table",40)(1508,"tr",17)(1509,"th",41)(1510,"div",19)(1511,"h4")(1512,"span",20),rN(1513," collapse "),og()()()()(),Sl(1514,"tr",24)(1515,"td",24)(1516,"p"),rN(1517,"M\xE9todo que colapsa uma linha com detalhe quando executada."),og()()()(),Sl(1518,"h5")(1519,"b"),rN(1520,"Par\xE2metros"),og()(),Sl(1521,"table",14)(1522,"tr",15)(1523,"th",16),rN(1524,"Nome"),og(),Sl(1525,"th",16),rN(1526,"Tipo"),og(),Sl(1527,"th",16),rN(1528,"Descri\xE7\xE3o"),og()(),Sl(1529,"tr",17)(1530,"td",18),rN(1531," rowIndex"),og(),Sl(1532,"td",21)(1533,"code",43),rN(1534," number "),og()(),Sl(1535,"td",24)(1536,"p"),rN(1537,"\xCDndice da linha que ser\xE1 colapsada."),og(),Sl(1538,"blockquote")(1539,"p"),rN(1540,"Ao reordenar os dados da tabela, o valor contido neste \xEDndice ser\xE1 alterado conforme a ordena\xE7\xE3o."),og()()()()(),Wl(1541,"br"),Sl(1542,"table",40)(1543,"tr",17)(1544,"th",41)(1545,"div",19)(1546,"h4")(1547,"span",20),rN(1548," expand "),og()()()()(),Sl(1549,"tr",24)(1550,"td",24)(1551,"p"),rN(1552,"M\xE9todo que expande uma linha com detalhe quando executada."),og()()()(),Sl(1553,"h5")(1554,"b"),rN(1555,"Par\xE2metros"),og()(),Sl(1556,"table",14)(1557,"tr",15)(1558,"th",16),rN(1559,"Nome"),og(),Sl(1560,"th",16),rN(1561,"Tipo"),og(),Sl(1562,"th",16),rN(1563,"Descri\xE7\xE3o"),og()(),Sl(1564,"tr",17)(1565,"td",18),rN(1566," rowIndex"),og(),Sl(1567,"td",21)(1568,"code",43),rN(1569," number "),og()(),Sl(1570,"td",24)(1571,"p"),rN(1572,"\xCDndice da linha que ser\xE1 expandida."),og(),Sl(1573,"blockquote")(1574,"p"),rN(1575,"Ao reordenar os dados da tabela, o valor contido neste \xEDndice ser\xE1 alterado conforme a ordena\xE7\xE3o."),og()()()()(),Wl(1576,"br"),Sl(1577,"table",40)(1578,"tr",17)(1579,"th",41)(1580,"div",19)(1581,"h4")(1582,"span",20),rN(1583," getSelectedRows "),og()()()()(),Sl(1584,"tr",24)(1585,"td",24)(1586,"p"),rN(1587,"Retorna as linhas do "),Sl(1588,"code"),rN(1589,"po-table"),og(),rN(1590," que est\xE3o selecionadas."),og()()()(),Wl(1591,"br"),Sl(1592,"table",40)(1593,"tr",17)(1594,"th",41)(1595,"div",19)(1596,"h4")(1597,"span",20),rN(1598," getUnselectedRows "),og()()()()(),Sl(1599,"tr",24)(1600,"td",24)(1601,"p"),rN(1602,"Retorna as linhas do "),Sl(1603,"code"),rN(1604,"po-table"),og(),rN(1605," que n\xE3o est\xE3o selecionadas."),og()()()(),Wl(1606,"br"),Sl(1607,"table",40)(1608,"tr",17)(1609,"th",41)(1610,"div",19)(1611,"h4")(1612,"span",20),rN(1613," unselectRows "),og()()()()(),Sl(1614,"tr",24)(1615,"td",24)(1616,"p"),rN(1617,"Desmarca as linhas que est\xE3o selecionadas."),og()()()(),Wl(1618,"br"),Sl(1619,"table",40)(1620,"tr",17)(1621,"th",41)(1622,"div",19)(1623,"h4")(1624,"span",20),rN(1625," unselectRowItem "),og()()()()(),Sl(1626,"tr",24)(1627,"td",24)(1628,"p"),rN(1629,"Desmarca uma linha que est\xE1 selecionada."),og()()()(),Wl(1630,"br"),Sl(1631,"table",40)(1632,"tr",17)(1633,"th",41)(1634,"div",19)(1635,"h4")(1636,"span",20),rN(1637," selectRowItem "),og()()()()(),Sl(1638,"tr",24)(1639,"td",24)(1640,"p"),rN(1641,"Seleciona uma linha do 'po-table'."),og()()()(),Wl(1642,"br"),Sl(1643,"table",40)(1644,"tr",17)(1645,"th",41)(1646,"div",19)(1647,"h4")(1648,"span",20),rN(1649," deleteItems "),og()()()()(),Sl(1650,"tr",24)(1651,"td",24)(1652,"p"),rN(1653,`M\xE9todo respons\xE1vel pela exclus\xE3o de itens em lote.
Caso a tabela esteja executando a propriedade `),Sl(1654,"code"),rN(1655,"p-service-delete"),og(),rN(1656,", ser\xE1 necess\xE1rio excluir 1 item por vez."),og(),Sl(1657,"p"),rN(1658,"Ao utilizar "),Sl(1659,"code"),rN(1660,"p-service-delete"),og(),rN(1661," mas sem a propriedade "),Sl(1662,"code"),rN(1663,"p-service-api"),og(),rN(1664,`, ser\xE1 responsabilidade do usu\xE1rio o tratamento
ap\xF3s a requisi\xE7\xE3o DELETE ser executada.`),og(),Sl(1665,"p"),rN(1666,"Caso a tabela utilize "),Sl(1667,"code"),rN(1668,"p-height"),og(),rN(1669," e esteja sem servi\xE7o, \xE9 necess\xE1rio a reatribui\xE7\xE3o dos itens utilizando o evento "),Sl(1670,"code"),rN(1671,"(p-delete-items)"),og(),rN(1672,", por exemplo:"),og(),Sl(1673,"pre")(1674,"code"),rN(1675,`<po-table
 (p-delete-items)="items = $event"
>
</po-table>
`),og()()()()(),Wl(1676,"br"),Sl(1677,"table",40)(1678,"tr",17)(1679,"th",41)(1680,"div",19)(1681,"h4")(1682,"span",20),rN(1683," removeItem "),og()()()()(),Sl(1684,"tr",24)(1685,"td",24)(1686,"p"),rN(1687,"M\xE9todo que remove um item da tabela."),og()()()(),Sl(1688,"h5")(1689,"b"),rN(1690,"Par\xE2metros"),og()(),Sl(1691,"table",14)(1692,"tr",15)(1693,"th",16),rN(1694,"Nome"),og(),Sl(1695,"th",16),rN(1696,"Tipo"),og(),Sl(1697,"th",16),rN(1698,"Descri\xE7\xE3o"),og()(),Sl(1699,"tr",17)(1700,"td",18),rN(1701," item"),og(),Sl(1702,"td",21)(1703,"code",35),rN(1704," number "),og(),Sl(1705,"code",42),rN(1706," { key: value } "),og()(),Sl(1707,"td",24)(1708,"p"),rN(1709,"\xCDndice da linha ou o item que ser\xE1 removido."),og(),Sl(1710,"blockquote")(1711,"p"),rN(1712,"Ao remover o item, a linha que o representa ser\xE1 exclu\xEDda da tabela."),og()()()()(),Wl(1713,"br"),Sl(1714,"table",40)(1715,"tr",17)(1716,"th",41)(1717,"div",19)(1718,"h4")(1719,"span",20),rN(1720," updateItem "),og()()()()(),Sl(1721,"tr",24)(1722,"td",24)(1723,"p"),rN(1724,"M\xE9todo que atualiza um item da tabela."),og()()()(),Sl(1725,"h5")(1726,"b"),rN(1727,"Par\xE2metros"),og()(),Sl(1728,"table",14)(1729,"tr",15)(1730,"th",16),rN(1731,"Nome"),og(),Sl(1732,"th",16),rN(1733,"Tipo"),og(),Sl(1734,"th",16),rN(1735,"Descri\xE7\xE3o"),og()(),Sl(1736,"tr",17)(1737,"td",18),rN(1738," item"),og(),Sl(1739,"td",21)(1740,"code",35),rN(1741," number "),og(),Sl(1742,"code",42),rN(1743," { key: value } "),og()(),Sl(1744,"td",24)(1745,"p"),rN(1746,"\xCDndice da linha ou o item que ser\xE1 atualizado."),og()()(),Sl(1747,"tr",17)(1748,"td",18),rN(1749," updatedItem"),og(),Sl(1750,"td",21)(1751,"code",42),rN(1752," { key: value } "),og()(),Sl(1753,"td",24)(1754,"p"),rN(1755,"Item que foi atualizado."),og(),Sl(1756,"blockquote")(1757,"p"),rN(1758,"Ao atualizar o item, a informa\xE7\xE3o ser\xE1 alterada na tabela."),og()()()()(),Wl(1759,"br"),Sl(1760,"h3"),rN(1761,"Interfaces"),og(),Sl(1762,"h4",44)(1763,"code",5),rN(1764,"PoTableAction"),og()(),Sl(1765,"div",2)(1766,"p"),rN(1767,"Interface para lista de a\xE7\xF5es do componente. "),og()(),Sl(1768,"h4",13),rN(1769,"Propriedades"),og(),Sl(1770,"table",14)(1771,"tr",15)(1772,"th",16),rN(1773,"Nome"),og(),Sl(1774,"th",16),rN(1775,"Tipo"),og(),Sl(1776,"th",16),rN(1777,"Descri\xE7\xE3o"),og()(),Sl(1778,"tr",17)(1779,"td",18)(1780,"div",19)(1781,"span",20),rN(1782," action"),Wl(1783,"br"),og()()(),Sl(1784,"td",21)(1785,"code",45),rN(1786,"Function"),og()(),Sl(1787,"td",24)(1788,"em")(1789,"strong"),rN(1790,"(opcional)"),og()(),Sl(1791,"p"),rN(1792,"A\xE7\xE3o que ser\xE1 executada, sendo poss\xEDvel passar o nome ou a refer\xEAncia da fun\xE7\xE3o."),og(),Sl(1793,"p"),rN(1794,"A action tamb\xE9m pode ser executada para o agrupador de subitens quando a a\xE7\xE3o possuir "),Sl(1795,"code"),rN(1796,"subItems"),og(),rN(1797,"."),og(),Sl(1798,"blockquote")(1799,"p"),rN(1800,"Para que a fun\xE7\xE3o seja executada no contexto do componente, utilize "),Sl(1801,"em"),rN(1802,"bind"),og(),rN(1803,`:
`),Sl(1804,"code"),rN(1805,"action: this.myFunction.bind(this)"),og()()()()(),Sl(1806,"tr",17)(1807,"td",18)(1808,"div",19)(1809,"span",20),rN(1810," disabled"),Wl(1811,"br"),og()()(),Sl(1812,"td",21)(1813,"code",22),rN(1814,"boolean "),og(),Sl(1815,"code",45),rN(1816," Function"),og()(),Sl(1817,"td",24)(1818,"em")(1819,"strong"),rN(1820,"(opcional)"),og()(),Sl(1821,"p"),rN(1822,"Desabilita a a\xE7\xE3o. Aceita um valor booleano ou uma fun\xE7\xE3o que retorna booleano."),og()()(),Sl(1823,"tr",17)(1824,"td",18)(1825,"div",19)(1826,"span",20),rN(1827," icon"),Wl(1828,"br"),og()()(),Sl(1829,"td",21)(1830,"code",31),rN(1831,"string "),og(),Sl(1832,"code",46),rN(1833," TemplateRef<void>"),og()(),Sl(1834,"td",24)(1835,"em")(1836,"strong"),rN(1837,"(opcional)"),og()(),Sl(1838,"p"),rN(1839,"\xCDcone exibido ao lado esquerdo do r\xF3tulo."),og(),Sl(1840,"p"),rN(1841,"Aceita \xEDcones da "),Sl(1842,"a",26),rN(1843,"Biblioteca de \xEDcones"),og(),rN(1844,`, fontes externas (ex: Font Awesome)
ou um `),Sl(1845,"code"),rN(1846,"TemplateRef"),og(),rN(1847," para \xEDcones customizados."),og(),Sl(1848,"pre")(1849,"code"),rN(1850,`{ label: 'A\xE7\xE3o', icon: 'an an-newspaper' }
`),og()()()(),Sl(1851,"tr",17)(1852,"td",18)(1853,"div",19)(1854,"span",20),rN(1855," label"),Wl(1856,"br"),og()()(),Sl(1857,"td",21)(1858,"code",31),rN(1859,"string"),og()(),Sl(1860,"td",24)(1861,"p"),rN(1862,"R\xF3tulo da a\xE7\xE3o."),og(),Sl(1863,"p"),rN(1864,"A label tamb\xE9m pode representar o agrupador de subitens quando a a\xE7\xE3o possuir "),Sl(1865,"code"),rN(1866,"subItems"),og(),rN(1867,"."),og()()(),Sl(1868,"tr",17)(1869,"td",18)(1870,"div",19)(1871,"span",20),rN(1872," selected"),Wl(1873,"br"),og()()(),Sl(1874,"td",21)(1875,"code",22),rN(1876,"boolean"),og()(),Sl(1877,"td",24)(1878,"em")(1879,"strong"),rN(1880,"(opcional)"),og()(),Sl(1881,"p"),rN(1882,"Define se a a\xE7\xE3o est\xE1 selecionada."),og()()(),Sl(1883,"tr",17)(1884,"td",18)(1885,"div",19)(1886,"span",20),rN(1887," separator"),Wl(1888,"br"),og()()(),Sl(1889,"td",21)(1890,"code",22),rN(1891,"boolean"),og()(),Sl(1892,"td",24)(1893,"em")(1894,"strong"),rN(1895,"(opcional)"),og()(),Sl(1896,"p"),rN(1897,"Atribui uma linha separadora acima do item."),og()()(),Sl(1898,"tr",17)(1899,"td",18)(1900,"div",19)(1901,"span",20),rN(1902," subItems"),Wl(1903,"br"),og()()(),Sl(1904,"td",21)(1905,"code",47),rN(1906,"Array<PoPopupAction>"),og()(),Sl(1907,"td",24)(1908,"em")(1909,"strong"),rN(1910,"(opcional)"),og()(),Sl(1911,"p"),rN(1912,"Define uma lista de subitens para cria\xE7\xE3o de menus aninhados."),og(),Sl(1913,"p"),rN(1914,`Ao definir esta propriedade, o item exibir\xE1 um \xEDcone indicador de subn\xEDvel.
Recomenda-se utilizar no m\xE1ximo tr\xEAs n\xEDveis hier\xE1rquicos para garantir a usabilidade.`),og(),Sl(1915,"blockquote")(1916,"p"),rN(1917,"As propriedades "),Sl(1918,"code"),rN(1919,"disabled"),og(),rN(1920,", "),Sl(1921,"code"),rN(1922,"type"),og(),rN(1923," e "),Sl(1924,"code"),rN(1925,"visible"),og(),rN(1926," n\xE3o s\xE3o aplicadas visualmente ao item agrupador."),og()(),Sl(1927,"blockquote")(1928,"p"),rN(1929,"Quando "),Sl(1930,"code"),rN(1931,"url"),og(),rN(1932," \xE9 informada em um agrupador, o redirecionamento ter\xE1 prioridade e os subitens n\xE3o ser\xE3o abertos."),og()(),Sl(1933,"blockquote")(1934,"p"),rN(1935,"Em subn\xEDveis aninhados, o "),Sl(1936,"code"),rN(1937,"icon"),og(),rN(1938," do agrupador \xE9 substitu\xEDdo pelo indicador de navega\xE7\xE3o (seta)."),og()()()(),Sl(1939,"tr",17)(1940,"td",18)(1941,"div",19)(1942,"span",20),rN(1943," type"),Wl(1944,"br"),og()()(),Sl(1945,"td",21)(1946,"code",31),rN(1947,"string"),og()(),Sl(1948,"td",24)(1949,"em")(1950,"strong"),rN(1951,"(opcional)"),og()(),Sl(1952,"p"),rN(1953,"Define a cor do item."),og(),Sl(1954,"p"),rN(1955,"Valores v\xE1lidos:"),og(),Sl(1956,"ul")(1957,"li")(1958,"code"),rN(1959,"default"),og()(),Sl(1960,"li")(1961,"code"),rN(1962,"danger"),og()()()()(),Sl(1963,"tr",17)(1964,"td",18)(1965,"div",19)(1966,"span",20),rN(1967," url"),Wl(1968,"br"),og()()(),Sl(1969,"td",21)(1970,"code",31),rN(1971,"string"),og()(),Sl(1972,"td",24)(1973,"em")(1974,"strong"),rN(1975,"(opcional)"),og()(),Sl(1976,"p"),rN(1977,"URL para redirecionamento. Aceita rotas internas e links externos."),og(),Sl(1978,"p"),rN(1979,`A url tamb\xE9m pode ser configurada para o agrupador de subitens.
Entretanto, quando a `),Sl(1980,"code"),rN(1981,"url"),og(),rN(1982," \xE9 informada em um agrupador, o clique "),Sl(1983,"strong"),rN(1984,"n\xE3o abrir\xE1 os subitens"),og(),rN(1985,`, pois o item ser\xE1
tratado como um link e o redirecionamento ter\xE1 prioridade sobre a exibi\xE7\xE3o da lista.`),og(),Sl(1986,"blockquote")(1987,"p"),rN(1988,"Quando informada, tem prioridade sobre a propriedade "),Sl(1989,"code"),rN(1990,"action"),og(),rN(1991,"."),og()()()(),Sl(1992,"tr",17)(1993,"td",18)(1994,"div",19)(1995,"span",20),rN(1996," visible"),Wl(1997,"br"),og()()(),Sl(1998,"td",21)(1999,"code",22),rN(2e3,"boolean "),og(),Sl(2001,"code",45),rN(2002," Function"),og()(),Sl(2003,"td",24)(2004,"em")(2005,"strong"),rN(2006,"(opcional)"),og()(),Sl(2007,"p"),rN(2008,"Define a visibilidade da a\xE7\xE3o. Aceita um valor booleano ou uma fun\xE7\xE3o que retorna booleano."),og()()()(),Sl(2009,"h4",44)(2010,"code",5),rN(2011,"PoTableBoolean"),og()(),Sl(2012,"div",2)(2013,"p"),rN(2014,"Interface que define as colunas booleanas do "),Sl(2015,"code"),rN(2016,"po-table"),og(),rN(2017,"."),og()(),Sl(2018,"h4",13),rN(2019,"Propriedades"),og(),Sl(2020,"table",14)(2021,"tr",15)(2022,"th",16),rN(2023,"Nome"),og(),Sl(2024,"th",16),rN(2025,"Tipo"),og(),Sl(2026,"th",16),rN(2027,"Descri\xE7\xE3o"),og()(),Sl(2028,"tr",17)(2029,"td",18)(2030,"div",19)(2031,"span",20),rN(2032," falseLabel"),Wl(2033,"br"),og()()(),Sl(2034,"td",21)(2035,"code",31),rN(2036,"string"),og()(),Sl(2037,"td",24)(2038,"em")(2039,"strong"),rN(2040,"(opcional)"),og()(),Sl(2041,"p"),rN(2042,"Define o r\xF3tulo para valores "),Sl(2043,"code"),rN(2044,"false"),og(),rN(2045,"."),og()()(),Sl(2046,"tr",17)(2047,"td",18)(2048,"div",19)(2049,"span",20),rN(2050," trueLabel"),Wl(2051,"br"),og()()(),Sl(2052,"td",21)(2053,"code",31),rN(2054,"string"),og()(),Sl(2055,"td",24)(2056,"em")(2057,"strong"),rN(2058,"(opcional)"),og()(),Sl(2059,"p"),rN(2060,"Define o r\xF3tulo para valores "),Sl(2061,"code"),rN(2062,"true"),og(),rN(2063,"."),og()()()(),Sl(2064,"h4",44)(2065,"code",5),rN(2066,"PoTableColumnSort"),og()(),Sl(2067,"div",2)(2068,"p"),rN(2069,"Interface para ordena\xE7\xE3o das colunas do componente table."),og()(),Sl(2070,"h4",13),rN(2071,"Propriedades"),og(),Sl(2072,"table",14)(2073,"tr",15)(2074,"th",16),rN(2075,"Nome"),og(),Sl(2076,"th",16),rN(2077,"Tipo"),og(),Sl(2078,"th",16),rN(2079,"Descri\xE7\xE3o"),og()(),Sl(2080,"tr",17)(2081,"td",18)(2082,"div",19)(2083,"span",20),rN(2084," column"),Wl(2085,"br"),og()()(),Sl(2086,"td",21)(2087,"code",48),rN(2088,"PoTableColumn"),og()(),Sl(2089,"td",24)(2090,"em")(2091,"strong"),rN(2092,"(opcional)"),og()(),Sl(2093,"p"),rN(2094,"Coluna pela qual a tabela est\xE1 ordenada."),og()()(),Sl(2095,"tr",17)(2096,"td",18)(2097,"div",19)(2098,"span",20),rN(2099," type"),Wl(2100,"br"),og()()(),Sl(2101,"td",21)(2102,"code",49),rN(2103,"PoTableColumnSortType"),og()(),Sl(2104,"td",24)(2105,"p"),rN(2106,"Tipo da ordena\xE7\xE3o."),og()()()(),Sl(2107,"h4",44)(2108,"code",5),rN(2109,"PoTableColumn"),og()(),Sl(2110,"div",2)(2111,"p"),rN(2112,"Interface para configura\xE7\xE3o das colunas do "),Sl(2113,"code"),rN(2114,"po-table"),og(),rN(2115,"."),og(),Sl(2116,"p"),rN(2117,"As defini\xE7\xF5es das colunas ser\xE3o aplicadas linha a linha."),og()(),Sl(2118,"h4",13),rN(2119,"Propriedades"),og(),Sl(2120,"table",14)(2121,"tr",15)(2122,"th",16),rN(2123,"Nome"),og(),Sl(2124,"th",16),rN(2125,"Tipo"),og(),Sl(2126,"th",16),rN(2127,"Descri\xE7\xE3o"),og()(),Sl(2128,"tr",17)(2129,"td",18)(2130,"div",19)(2131,"span",20),rN(2132," action"),Wl(2133,"br"),og()()(),Sl(2134,"td",21)(2135,"code",45),rN(2136,"Function"),og()(),Sl(2137,"td",24)(2138,"em")(2139,"strong"),rN(2140,"(opcional)"),og()(),Sl(2141,"p"),rN(2142,"Define uma a\xE7\xE3o na coluna quando o tipo da coluna for "),Sl(2143,"code"),rN(2144,"link"),og(),rN(2145," ou "),Sl(2146,"code"),rN(2147,"icon"),og(),rN(2148,"."),og(),Sl(2149,"blockquote")(2150,"p"),rN(2151,"Quando for do tipo "),Sl(2152,"code"),rN(2153,"link"),og(),rN(2154,` ser\xE1 enviado como primeiro par\xE2metro o valor da coluna
e no segundo par\xE2metro o objeto completo da linha. Caso tenha sido definido uma a\xE7\xE3o e um link na coluna, a a\xE7\xE3o
ser\xE1 executada ao inv\xE9s do link.`),og()(),Sl(2155,"blockquote")(2156,"p"),rN(2157,"Quando for do tipo "),Sl(2158,"code"),rN(2159,"icon"),og(),rN(2160," enviar\xE1 o objeto completo da linha e o segundo par\xE2metro ser\xE1 a defini\xE7\xE3o da coluna."),og()()()(),Sl(2161,"tr",17)(2162,"td",18)(2163,"div",19)(2164,"span",20),rN(2165," boolean"),Wl(2166,"br"),og()()(),Sl(2167,"td",21)(2168,"code",50),rN(2169,"PoTableBoolean"),og()(),Sl(2170,"td",24)(2171,"em")(2172,"strong"),rN(2173,"(opcional)"),og()(),Sl(2174,"p"),rN(2175,"Define um objeto do tipo "),Sl(2176,"code"),rN(2177,"PoTableBoolean"),og(),rN(2178," para as colunas do tipo "),Sl(2179,"em"),rN(2180,"boolean"),og(),rN(2181,". Por exemplo:"),og(),Sl(2182,"pre")(2183,"code"),rN(2184,`{ property: 'approbation', type: 'boolean', boolean: {
  trueLabel: 'Accepted', falseLabel: 'Rejected'
}}
`),og()(),Sl(2185,"blockquote")(2186,"p"),rN(2187,"Caso n\xE3o seja definido um objeto para colunas do tipo "),Sl(2188,"em"),rN(2189,"boolean"),og(),rN(2190,`,
esta exibir\xE1 por padr\xE3o `),Sl(2191,"code"),rN(2192,"Sim"),og(),rN(2193," e "),Sl(2194,"code"),rN(2195,"N\xE3o"),og(),rN(2196," de acordo com os valores "),Sl(2197,"em"),rN(2198,"booleanos"),og(),rN(2199,"."),og()()()(),Sl(2200,"tr",17)(2201,"td",18)(2202,"div",19)(2203,"span",20),rN(2204," color"),Wl(2205,"br"),og()()(),Sl(2206,"td",21)(2207,"code",31),rN(2208,"string "),og(),Sl(2209,"code",45),rN(2210," Function"),og()(),Sl(2211,"td",24)(2212,"em")(2213,"strong"),rN(2214,"(opcional)"),og()(),Sl(2215,"p"),rN(2216,"Define a cor que ser\xE1 aplicada no conte\xFAdo da coluna."),og(),Sl(2217,"p"),rN(2218,"Valores v\xE1lidos:"),og(),Sl(2219,"ul")(2220,"li"),Wl(2221,"span",51),Sl(2222,"code"),rN(2223,"color-01"),og()(),Sl(2224,"li"),Wl(2225,"span",52),Sl(2226,"code"),rN(2227,"color-02"),og()(),Sl(2228,"li"),Wl(2229,"span",53),Sl(2230,"code"),rN(2231,"color-03"),og()(),Sl(2232,"li"),Wl(2233,"span",54),Sl(2234,"code"),rN(2235,"color-04"),og()(),Sl(2236,"li"),Wl(2237,"span",55),Sl(2238,"code"),rN(2239,"color-05"),og()(),Sl(2240,"li"),Wl(2241,"span",56),Sl(2242,"code"),rN(2243,"color-06"),og()(),Sl(2244,"li"),Wl(2245,"span",57),Sl(2246,"code"),rN(2247,"color-07"),og()(),Sl(2248,"li"),Wl(2249,"span",58),Sl(2250,"code"),rN(2251,"color-08"),og()(),Sl(2252,"li"),Wl(2253,"span",59),Sl(2254,"code"),rN(2255,"color-09"),og()(),Sl(2256,"li"),Wl(2257,"span",60),Sl(2258,"code"),rN(2259,"color-10"),og()(),Sl(2260,"li"),Wl(2261,"span",61),Sl(2262,"code"),rN(2263,"color-11"),og()(),Sl(2264,"li"),Wl(2265,"span",62),Sl(2266,"code"),rN(2267,"color-12"),og()()(),Sl(2268,"blockquote")(2269,"p"),rN(2270,"Tamb\xE9m \xE9 poss\xEDvel utilizar as 35 cores da paleta "),Sl(2271,"strong"),rN(2272,"Caption Tag Colors"),og(),rN(2273,":"),og()(),Sl(2274,"ul")(2275,"li"),Wl(2276,"span",63),Sl(2277,"code"),rN(2278,"caption-tag-01"),og(),Wl(2279,"span",64),Sl(2280,"code"),rN(2281,"caption-tag-02"),og(),Wl(2282,"span",65),Sl(2283,"code"),rN(2284,"caption-tag-03"),og(),Wl(2285,"span",66),Sl(2286,"code"),rN(2287,"caption-tag-04"),og(),Wl(2288,"span",67),Sl(2289,"code"),rN(2290,"caption-tag-05"),og()(),Sl(2291,"li"),Wl(2292,"span",68),Sl(2293,"code"),rN(2294,"caption-tag-06"),og(),Wl(2295,"span",69),Sl(2296,"code"),rN(2297,"caption-tag-07"),og(),Wl(2298,"span",70),Sl(2299,"code"),rN(2300,"caption-tag-08"),og(),Wl(2301,"span",71),Sl(2302,"code"),rN(2303,"caption-tag-09"),og(),Wl(2304,"span",72),Sl(2305,"code"),rN(2306,"caption-tag-10"),og()(),Sl(2307,"li"),Wl(2308,"span",73),Sl(2309,"code"),rN(2310,"caption-tag-11"),og(),Wl(2311,"span",74),Sl(2312,"code"),rN(2313,"caption-tag-12"),og(),Wl(2314,"span",75),Sl(2315,"code"),rN(2316,"caption-tag-13"),og(),Wl(2317,"span",76),Sl(2318,"code"),rN(2319,"caption-tag-14"),og(),Wl(2320,"span",77),Sl(2321,"code"),rN(2322,"caption-tag-15"),og()(),Sl(2323,"li"),Wl(2324,"span",78),Sl(2325,"code"),rN(2326,"caption-tag-16"),og(),Wl(2327,"span",79),Sl(2328,"code"),rN(2329,"caption-tag-17"),og(),Wl(2330,"span",80),Sl(2331,"code"),rN(2332,"caption-tag-18"),og(),Wl(2333,"span",81),Sl(2334,"code"),rN(2335,"caption-tag-19"),og(),Wl(2336,"span",82),Sl(2337,"code"),rN(2338,"caption-tag-20"),og()(),Sl(2339,"li"),Wl(2340,"span",83),Sl(2341,"code"),rN(2342,"caption-tag-21"),og(),Wl(2343,"span",84),Sl(2344,"code"),rN(2345,"caption-tag-22"),og(),Wl(2346,"span",85),Sl(2347,"code"),rN(2348,"caption-tag-23"),og(),Wl(2349,"span",86),Sl(2350,"code"),rN(2351,"caption-tag-24"),og(),Wl(2352,"span",87),Sl(2353,"code"),rN(2354,"caption-tag-25"),og()(),Sl(2355,"li"),Wl(2356,"span",88),Sl(2357,"code"),rN(2358,"caption-tag-26"),og(),Wl(2359,"span",89),Sl(2360,"code"),rN(2361,"caption-tag-27"),og(),Wl(2362,"span",90),Sl(2363,"code"),rN(2364,"caption-tag-28"),og(),Wl(2365,"span",91),Sl(2366,"code"),rN(2367,"caption-tag-29"),og(),Wl(2368,"span",92),Sl(2369,"code"),rN(2370,"caption-tag-30"),og()(),Sl(2371,"li"),Wl(2372,"span",93),Sl(2373,"code"),rN(2374,"caption-tag-31"),og(),Wl(2375,"span",94),Sl(2376,"code"),rN(2377,"caption-tag-32"),og(),Wl(2378,"span",95),Sl(2379,"code"),rN(2380,"caption-tag-33"),og(),Wl(2381,"span",96),Sl(2382,"code"),rN(2383,"caption-tag-34"),og(),Wl(2384,"span",97),Sl(2385,"code"),rN(2386,"caption-tag-35"),og()()(),Sl(2387,"blockquote")(2388,"p"),rN(2389,`Existe a possibilidade de informar uma fun\xE7\xE3o que retorne um dos valores aceitos, ser\xE3o passados
por par\xE2metro a linha e a coluna atual, por exemplo:`),og()(),Sl(2390,"pre")(2391,"code"),rN(2392,`(row, column) => { row[column] == 'text' ? 'color-03' : 'color-09' }
`),og()(),Sl(2393,"blockquote")(2394,"p"),rN(2395,"\xC9 poss\xEDvel tamb\xE9m us\xE1-la na coluna do tipo "),Sl(2396,"code"),rN(2397,"icons"),og(),rN(2398,` para altera\xE7\xE3o das cores de seu conte\xFAdo conforme exemplo abaixo,
contudo, desta forma sobrep\xF5e a cor especificada em cada objeto caso haja:`),og()(),Sl(2399,"pre")(2400,"code"),rN(2401,`{ property: 'columnIcon', label: 'Like', type: 'icon', color: 'color-08', icons: [
  { value: 'an an-star', action: () => this.notification() }
]},
`),og()()()(),Sl(2402,"tr",17)(2403,"td",18)(2404,"div",19)(2405,"span",20),rN(2406," detail"),Wl(2407,"br"),og()()(),Sl(2408,"td",21)(2409,"code",98),rN(2410,"PoTableDetail"),og()(),Sl(2411,"td",24)(2412,"em")(2413,"strong"),rN(2414,"(opcional)"),og()(),Sl(2415,"p"),rN(2416,"Define um objeto que segue a interface "),Sl(2417,"code"),rN(2418,"PoTableDetail"),og(),rN(2419,", para as colunas de detalhes. Por exemplo:"),og(),Sl(2420,"pre")(2421,"code"),rN(2422,`{ columns: [{ property: 'package', label: 'Pacote' }], typeHeader: 'top' }
`),og()()()(),Sl(2423,"tr",17)(2424,"td",18)(2425,"div",19)(2426,"span",20),rN(2427," disabled"),Wl(2428,"br"),og()()(),Sl(2429,"td",21)(2430,"code",45),rN(2431,"Function"),og()(),Sl(2432,"td",24)(2433,"em")(2434,"strong"),rN(2435,"(opcional)"),og()(),Sl(2436,"p"),rN(2437,"Fun\xE7\xE3o que deve retornar um booleano para habilitar ou desabilitar o "),Sl(2438,"em"),rN(2439,"link"),og(),rN(2440," e sua a\xE7\xE3o."),og(),Sl(2441,"blockquote")(2442,"p"),rN(2443,"Propriedade dispon\xEDvel nas colunas do tipo "),Sl(2444,"code"),rN(2445,"link"),og(),rN(2446,"."),og()()()(),Sl(2447,"tr",17)(2448,"td",18)(2449,"div",19)(2450,"span",20),rN(2451," format"),Wl(2452,"br"),og()()(),Sl(2453,"td",21)(2454,"code",31),rN(2455,"string"),og()(),Sl(2456,"td",24)(2457,"em")(2458,"strong"),rN(2459,"(opcional)"),og()(),Sl(2460,"p"),rN(2461,"Formato de exibi\xE7\xE3o do valor da coluna."),og(),Sl(2462,"table")(2463,"thead")(2464,"tr")(2465,"th"),rN(2466,"Formata\xE7\xE3o"),og(),Sl(2467,"th"),rN(2468,"Type da Coluna"),og(),Sl(2469,"th"),rN(2470,"Descri\xE7\xE3o"),og(),Sl(2471,"th"),rN(2472,"Exemplos"),og()()(),Sl(2473,"tbody")(2474,"tr")(2475,"td"),rN(2476,"Monet\xE1rio"),og(),Sl(2477,"td")(2478,"code"),rN(2479,"currency"),og()(),Sl(2480,"td"),rN(2481,"Formato para valores monet\xE1rios. Informe o c\xF3digo da moeda (ISO 4217)."),og(),Sl(2482,"td")(2483,"code"),rN(2484,"'BRL'"),og(),rN(2485,", "),Sl(2486,"code"),rN(2487,"'USD'"),og(),rN(2488,", "),Sl(2489,"code"),rN(2490,"'EUR'"),og(),rN(2491,", "),Sl(2492,"code"),rN(2493,"'RUB'"),og()()(),Sl(2494,"tr")(2495,"td"),rN(2496,"Data"),og(),Sl(2497,"td")(2498,"code"),rN(2499,"date"),og()(),Sl(2500,"td"),rN(2501,"Aceita apenas os caracteres de dia(dd), m\xEAs(MM) e ano (yyyy ou yy), caso n\xE3o seja informado um formato o mesmo ser\xE1 'dd/MM/yyyy'"),og(),Sl(2502,"td")(2503,"code"),rN(2504,"'dd/MM/yyyy'"),og(),rN(2505,", "),Sl(2506,"code"),rN(2507,"'dd-MM-yy'"),og(),rN(2508,", "),Sl(2509,"code"),rN(2510,"'mm/dd/yyyy'"),og()()(),Sl(2511,"tr")(2512,"td"),rN(2513,"Data/Hora"),og(),Sl(2514,"td")(2515,"code"),rN(2516,"dateTime"),og()(),Sl(2517,"td"),rN(2518,"Aceita os caracteres de dia(dd), m\xEAs(MM), ano(yyyy), hora(HH para 24h ou hh para 12h), minutos(mm), segundos(ss), milissegundos(SSS) e per\xEDodo(a para AM/PM). Caso n\xE3o seja informado um formato o mesmo ser\xE1 'dd/MM/yyyy HH:mm:ss'"),og(),Sl(2519,"td")(2520,"code"),rN(2521,"'dd/MM/yyyy HH:mm'"),og(),rN(2522,", "),Sl(2523,"code"),rN(2524,"'dd/MM/yyyy HH:mm:ss'"),og(),rN(2525,", "),Sl(2526,"code"),rN(2527,"'dd/MM/yyyy HH:mm:ss.SSS'"),og(),rN(2528,", "),Sl(2529,"code"),rN(2530,"'MM/dd/yyyy hh:mm a'"),og(),rN(2531,", "),Sl(2532,"code"),rN(2533,"'yyyy-MM-dd HH:mm'"),og(),rN(2534,", "),Sl(2535,"code"),rN(2536,"'short'"),og(),rN(2537,", "),Sl(2538,"code"),rN(2539,"'medium'"),og()()(),Sl(2540,"tr")(2541,"td"),rN(2542,"Hora"),og(),Sl(2543,"td")(2544,"code"),rN(2545,"time"),og()(),Sl(2546,"td"),rN(2547,"Aceita apenas os caracteres de hora(HH), minutos(mm), segundos(ss) e milisegundos(f-ffffff), os milisegundos s\xE3o opcionais, caso n\xE3o seja informado um formato o mesmo ser\xE1 'HH:mm:ss'"),og(),Sl(2548,"td")(2549,"code"),rN(2550,"'HH:mm'"),og(),rN(2551,", "),Sl(2552,"code"),rN(2553,"'HH:mm:ss.ffffff'"),og(),rN(2554,", "),Sl(2555,"code"),rN(2556,"'HH:mm:ss.ff'"),og(),rN(2557,", "),Sl(2558,"code"),rN(2559,"'mm:ss.fff'"),og()()(),Sl(2560,"tr")(2561,"td"),rN(2562,"N\xFAmero"),og(),Sl(2563,"td")(2564,"code"),rN(2565,"number"),og()(),Sl(2566,"td"),rN(2567,"Aceita um valor seguindo o padr\xE3o "),Sl(2568,"a",99)(2569,"strong"),rN(2570,"DecimalPipe"),og()(),rN(2571," para formata\xE7\xE3o, e caso n\xE3o seja informado, o n\xFAmero ser\xE1 exibido na sua forma original."),og(),Sl(2572,"td")(2573,"code"),rN(2574,"'1.2-5'"),og(),rN(2575," (ex.: "),Sl(2576,"code"),rN(2577,"50"),og(),rN(2578," \u2192 "),Sl(2579,"code"),rN(2580,"50.00"),og(),rN(2581,")"),og()()()(),Sl(2582,"p"),rN(2583,"Observa\xE7\xE3o: caso n\xE3o seja informado um formato, o valor ser\xE1 exibido em sua forma original."),og()()(),Sl(2584,"tr",17)(2585,"td",18)(2586,"div",19)(2587,"span",20),rN(2588," icons"),Wl(2589,"br"),og()()(),Sl(2590,"td",21)(2591,"code",100),rN(2592,"Array<PoTableColumnIcon>"),og()(),Sl(2593,"td",24)(2594,"em")(2595,"strong"),rN(2596,"(opcional)"),og()(),Sl(2597,"p"),rN(2598,"Define um "),Sl(2599,"em"),rN(2600,"array"),og(),rN(2601," de objetos para colunas de \xEDcones que ir\xE1 sobrepor os valores como "),Sl(2602,"code"),rN(2603,"action"),og(),rN(2604," e "),Sl(2605,"code"),rN(2606,"color"),og(),rN(2607,`
definidos na coluna, \xE0 partir do `),Sl(2608,"em"),rN(2609,"value"),og(),rN(2610," da "),Sl(2611,"a",101)(2612,"code"),rN(2613,"PoTableColumnIcon"),og()(),rN(2614,", por exemplo:"),og(),Sl(2615,"pre")(2616,"code"),rN(2617,`{ property: 'columnIcon', label: 'Icons', type: 'icon', action: this.favorite.bind(this), icons: [
  { value: 'delete', icon: 'an an-plus', color: 'color-06', action: this.add.bind(this), tooltip: 'Adiciona um novo item' },
  { value: 'edit', icon: 'an an-pencil-simple', action: this.edit.bind(this) },
  { value: 'delete', icon: 'an an-trash', color: 'color-12', action: this.remove.bind(this) }
]},
`),og()(),Sl(2618,"pre")(2619,"code"),rN(2620,`...
{ id: 1, columnIcon: ['an an-pencil-simple', 'an an-trash', 'an an-star'] }
...
`),og()()()(),Sl(2621,"tr",17)(2622,"td",18)(2623,"div",19)(2624,"span",20),rN(2625," label"),Wl(2626,"br"),og()()(),Sl(2627,"td",21)(2628,"code",31),rN(2629,"string"),og()(),Sl(2630,"td",24)(2631,"em")(2632,"strong"),rN(2633,"(opcional)"),og()(),Sl(2634,"p"),rN(2635,"Texto para t\xEDtulo da coluna."),og(),Sl(2636,"p"),rN(2637,"Caso n\xE3o seja informado, ser\xE1 utilizado como "),Sl(2638,"em"),rN(2639,"label"),og(),rN(2640," o valor da propriedade "),Sl(2641,"em"),rN(2642,"property"),og(),rN(2643," com a primeira letra em mai\xFAsculo."),og()()(),Sl(2644,"tr",17)(2645,"td",18)(2646,"div",19)(2647,"span",20),rN(2648," labels"),Wl(2649,"br"),og()()(),Sl(2650,"td",21)(2651,"code",102),rN(2652,"Array<PoTableColumnLabel>"),og()(),Sl(2653,"td",24)(2654,"em")(2655,"strong"),rN(2656,"(opcional)"),og()(),Sl(2657,"p"),rN(2658,`Define um array de objetos para as colunas de label, onde 'labels' \xE9 uma lista de objetos
do tipo `),Sl(2659,"code"),rN(2660,"PoTableColumnLabel"),og(),rN(2661," na qual devem ser definidas os labels. Por exemplo:"),og(),Sl(2662,"pre")(2663,"code"),rN(2664,`{ property: 'flightStatus', label: 'Status', type: 'label', width:'100px', labels: [
 { value: 'confirmed', color: 'caption-tag-13', label: 'Confirmado', tooltip: 'Flight Status' },
 { value: 'delayed', color: 'caption-tag-08', label: 'Atrasado', tooltip: 'Flight Status' }
}
`),og()()()(),Sl(2665,"tr",17)(2666,"td",18)(2667,"div",19)(2668,"span",20),rN(2669," link"),Wl(2670,"br"),og()()(),Sl(2671,"td",21)(2672,"code",31),rN(2673,"string"),og()(),Sl(2674,"td",24)(2675,"em")(2676,"strong"),rN(2677,"(opcional)"),og()(),Sl(2678,"p"),rN(2679,"Define o nome da propriedade que conter\xE1 o "),Sl(2680,"code"),rN(2681,"link"),og(),rN(2682," a ser redirecionado."),og()()(),Sl(2683,"tr",17)(2684,"td",18)(2685,"div",19)(2686,"span",20),rN(2687," mask"),Wl(2688,"br"),og()()(),Sl(2689,"td",21)(2690,"code",31),rN(2691,"string"),og()(),Sl(2692,"td",24)(2693,"em")(2694,"strong"),rN(2695,"(opcional)"),og()(),Sl(2696,"p"),rN(2697,"Define uma m\xE1scara para formata\xE7\xE3o do valor exibido na coluna."),og(),Sl(2698,"p"),rN(2699,"A m\xE1scara \xE9 aplicada somente para "),Sl(2700,"strong"),rN(2701,"exibi\xE7\xE3o"),og(),rN(2702,` na tabela, formatando o valor bruto
armazenado no model antes de apresent\xE1-lo ao usu\xE1rio.`),og(),Sl(2703,"p"),rN(2704,"Caracteres v\xE1lidos para a m\xE1scara:"),og(),Sl(2705,"ul")(2706,"li")(2707,"code"),rN(2708,"9"),og(),rN(2709," : aceita um d\xEDgito num\xE9rico (0-9)."),og(),Sl(2710,"li")(2711,"code"),rN(2712,"@"),og(),rN(2713," : aceita um caractere alfab\xE9tico (a-z, A-Z)."),og(),Sl(2714,"li")(2715,"code"),rN(2716,"w"),og(),rN(2717," : aceita um caractere alfanum\xE9rico (a-z, A-Z, 0-9)."),og(),Sl(2718,"li"),rN(2719,`Demais caracteres s\xE3o considerados fixos e inseridos automaticamente na formata\xE7\xE3o
(por exemplo: `),Sl(2720,"code"),rN(2721,"."),og(),rN(2722,", "),Sl(2723,"code"),rN(2724,"-"),og(),rN(2725,", "),Sl(2726,"code"),rN(2727,"/"),og(),rN(2728,", "),Sl(2729,"code"),rN(2730,"("),og(),rN(2731,", "),Sl(2732,"code"),rN(2733,")"),og(),rN(2734,", "),Sl(2735,"code"),rN(2736,"+"),og(),rN(2737,", "),Wl(2738,"code"),rN(2739,")."),og()(),Sl(2740,"p"),rN(2741,"Exemplos de uso:"),og(),Sl(2742,"pre")(2743,"code"),rN(2744,`// CPF
{ property: 'cpf', label: 'CPF', mask: '999.999.999-99' }

// CNPJ
{ property: 'cnpj', label: 'CNPJ', mask: '99.999.999/9999-99' }

// Telefone
{ property: 'phone', label: 'Telefone', mask: '(99) 99999-9999' }

// CEP
{ property: 'zipCode', label: 'CEP', mask: '99999-999' }
`),og()(),Sl(2745,"blockquote")(2746,"p"),rN(2747,"Esta propriedade \xE9 utilizada apenas para colunas do tipo "),Sl(2748,"code"),rN(2749,"string"),og(),rN(2750,` (padr\xE3o).
Caso a coluna possua um `),Sl(2751,"code"),rN(2752,"type"),og(),rN(2753," diferente de "),Sl(2754,"code"),rN(2755,"string"),og(),rN(2756,", a m\xE1scara ser\xE1 ignorada."),og()()()(),Sl(2757,"tr",17)(2758,"td",18)(2759,"div",19)(2760,"span",20),rN(2761," property"),Wl(2762,"br"),og()()(),Sl(2763,"td",21)(2764,"code",31),rN(2765,"string"),og()(),Sl(2766,"td",24)(2767,"em")(2768,"strong"),rN(2769,"(opcional)"),og()(),Sl(2770,"p"),rN(2771,"Nome identificador da coluna. Tamb\xE9m permite objetos aninhados conforme exemplo abaixo."),og(),Sl(2772,"pre")(2773,"code"),rN(2774,`{ property: 'address.street', label: 'Rua' }
`),og()()()(),Sl(2775,"tr",17)(2776,"td",18)(2777,"div",19)(2778,"span",20),rN(2779," sortable"),Wl(2780,"br"),og()()(),Sl(2781,"td",21)(2782,"code",22),rN(2783,"boolean"),og()(),Sl(2784,"td",24)(2785,"em")(2786,"strong"),rN(2787,"(opcional)"),og()(),Sl(2788,"p"),rN(2789,`Controla se a coluna ser\xE1 considerada como "ordenavel". Caso seja definido um valor falso, a coluna n\xE3o ser\xE1 usada para
ordena\xE7\xE3o.`),og()()(),Sl(2790,"tr",17)(2791,"td",18)(2792,"div",19)(2793,"span",20),rN(2794," subtitles"),Wl(2795,"br"),og()()(),Sl(2796,"td",21)(2797,"code",103),rN(2798,"Array<PoTableSubtitleColumn>"),og()(),Sl(2799,"td",24)(2800,"em")(2801,"strong"),rN(2802,"(opcional)"),og()(),Sl(2803,"p"),rN(2804,"Define um array de objetos para as colunas de legenda. Onde, "),Sl(2805,"code"),rN(2806,"subtitles"),og(),rN(2807,` \xE9 uma lista de objetos do tipo PoTableSubtitle na qual
devem ser definidas as op\xE7\xF5es de legenda. Por exemplo:`),og(),Sl(2808,"pre")(2809,"code"),rN(2810,`{ property: 'flightStatus', label: 'Status', color: 'subtitle', width:'100px', subtitles: [
 { value: 'confirmed', color: 'caption-tag-13', label: 'Confirmado', content: '1' },
 { value: 'delayed', color: 'caption-tag-08', label: 'Atrasado', content: '2' }
}
`),og()(),Sl(2811,"p"),rN(2812,`Nesse exemplo a coluna escolhida para legenda \xE9 'flightStatus', se o valor dessa coluna for 'confirmed', o texto da legenda ser\xE1
'Confirmado'.`),og()()(),Sl(2813,"tr",17)(2814,"td",18)(2815,"div",19)(2816,"span",20),rN(2817," tooltip"),Wl(2818,"br"),og()()(),Sl(2819,"td",21)(2820,"code",31),rN(2821,"string"),og()(),Sl(2822,"td",24)(2823,"em")(2824,"strong"),rN(2825,"(opcional)"),og()(),Sl(2826,"p"),rN(2827,"Define um texto de ajuda que ser\xE1 exibido ao passar o "),Sl(2828,"em"),rN(2829,"mouse"),og(),rN(2830," sobre um texto."),og(),Sl(2831,"blockquote")(2832,"p"),rN(2833,"O tooltip s\xF3 ser\xE1 vis\xEDvel se for uma coluna do tipo "),Sl(2834,"em"),rN(2835,"link"),og(),rN(2836,"."),og()(),Sl(2837,"blockquote")(2838,"p"),rN(2839,`Caso o conte\xFAdo da c\xE9lula exceder a largura da coluna,
\xE9 ignorado o valor atribu\xEDdo ao `),Sl(2840,"em"),rN(2841,"tooltip"),og(),rN(2842," e ser\xE1 exibido justamente o conte\xFAdo da c\xE9lula."),og()()()(),Sl(2843,"tr",17)(2844,"td",18)(2845,"div",19)(2846,"span",20),rN(2847," type"),Wl(2848,"br"),og()()(),Sl(2849,"td",21)(2850,"code",31),rN(2851,"string"),og()(),Sl(2852,"td",24)(2853,"em")(2854,"strong"),rN(2855,"(opcional)"),og()(),Sl(2856,"p"),rN(2857,"Tipo da coluna."),og(),Sl(2858,"p"),rN(2859,"Valores v\xE1lidos:"),og(),Sl(2860,"ul")(2861,"li")(2862,"p")(2863,"code"),rN(2864,"boolean"),og(),rN(2865,": Exibir\xE1 por padr\xE3o "),Sl(2866,"code"),rN(2867,"Sim"),og(),rN(2868," e "),Sl(2869,"code"),rN(2870,"N\xE3o"),og(),rN(2871," de acordo com os valores "),Sl(2872,"em"),rN(2873,"booleanos"),og(),rN(2874,"."),og(),Sl(2875,"blockquote")(2876,"p"),rN(2877,"Caso necessite exibir valores diferentes do padr\xE3o, deve-se utilizar a propriedade "),Sl(2878,"code"),rN(2879,"boolean"),og(),rN(2880," desta interface."),og()()(),Sl(2881,"li")(2882,"p")(2883,"code"),rN(2884,"currency"),og(),rN(2885,": valores monet\xE1rios."),og()(),Sl(2886,"li")(2887,"p")(2888,"code"),rN(2889,"date"),og(),rN(2890,": valor de datas."),og(),Sl(2891,"ul")(2892,"li"),rN(2893,"Aceita os tipos "),Sl(2894,"em"),rN(2895,"string"),og(),rN(2896," e "),Sl(2897,"em"),rN(2898,"Date"),og(),rN(2899,` padr\xE3o do Javascript,
por exemplo: `),Sl(2900,"code"),rN(2901,"'2017-11-28'"),og(),rN(2902," ou "),Sl(2903,"code"),rN(2904,"new Date(2017, 10, 28)"),og(),rN(2905,"."),og()()(),Sl(2906,"li")(2907,"p")(2908,"code"),rN(2909,"dateTime"),og(),rN(2910,": valor de data com hor\xE1rio."),og(),Sl(2911,"ul")(2912,"li"),rN(2913,"Aceita o tipo "),Sl(2914,"em"),rN(2915,"string"),og(),rN(2916," no formato "),Sl(2917,"strong"),rN(2918,"ISO-8601"),og(),rN(2919," extendido "),Sl(2920,"strong"),rN(2921,"'yyyy-mm-ddTHH:mm:ss+|-hh:mm'"),og(),rN(2922,`
ou `),Sl(2923,"strong"),rN(2924,"'yyyy-mm-ddTHH:mm+|-hh:mm'"),og(),rN(2925,` (sem segundos),
e o tipo `),Sl(2926,"em"),rN(2927,"Date"),og(),rN(2928," padr\xE3o do Javascript, por exemplo: "),Sl(2929,"code"),rN(2930,"'2017-11-28T00:00:00-02:00'"),og(),rN(2931,", "),Sl(2932,"code"),rN(2933,"'2017-11-28T14:30-02:00'"),og(),rN(2934," ou "),Sl(2935,"code"),rN(2936,"new Date(2017, 10, 28)"),og(),rN(2937,"."),og(),Sl(2938,"li"),rN(2939,"A formata\xE7\xE3o de exibi\xE7\xE3o pode ser configurada pela propriedade "),Sl(2940,"code"),rN(2941,"format"),og(),rN(2942,"."),og()()(),Sl(2943,"li")(2944,"p")(2945,"code"),rN(2946,"detail"),og(),rN(2947,": array de objetos para o master-detail."),og(),Sl(2948,"ul")(2949,"li"),rN(2950,"Incompat\xEDvel com "),Sl(2951,"code"),rN(2952,"virtual-scroll"),og(),rN(2953,", que requer altura fixa nas linhas."),og()()(),Sl(2954,"li")(2955,"p")(2956,"code"),rN(2957,"icon"),og(),rN(2958,": "),Sl(2959,"em"),rN(2960,"array"),og(),rN(2961," de "),Sl(2962,"em"),rN(2963,"string"),og(),rN(2964," ou objetos para a coluna de \xEDcones."),og()(),Sl(2965,"li")(2966,"p")(2967,"code"),rN(2968,"label"),og(),rN(2969,": texto com destaque."),og()(),Sl(2970,"li")(2971,"p")(2972,"code"),rN(2973,"link"),og(),rN(2974,": habilita link na coluna para a\xE7\xE3o ou navega\xE7\xE3o."),og()(),Sl(2975,"li")(2976,"p")(2977,"code"),rN(2978,"number"),og(),rN(2979,": valores num\xE9ricos."),og()(),Sl(2980,"li")(2981,"p")(2982,"code"),rN(2983,"string"),og(),rN(2984,": textos."),og()(),Sl(2985,"li")(2986,"p")(2987,"code"),rN(2988,"subtitle"),og(),rN(2989,": array de objetos para a coluna de legenda."),og()(),Sl(2990,"li")(2991,"p")(2992,"code"),rN(2993,"time"),og(),rN(2994,": valor de hor\xE1rio."),og(),Sl(2995,"ul")(2996,"li"),rN(2997,"Aceita o tipo "),Sl(2998,"em"),rN(2999,"string"),og(),rN(3e3," nos formatos "),Sl(3001,"strong"),rN(3002,"'HH:mm:ss'"),og(),rN(3003," ou "),Sl(3004,"strong"),rN(3005,"'HH:mm:ss.ffffff'"),og(),rN(3006,", por exemplo: "),Sl(3007,"code"),rN(3008,"'23:12:45'"),og(),rN(3009,"."),og()()(),Sl(3010,"li")(3011,"p")(3012,"code"),rN(3013,"cellTemplate"),og(),rN(3014,`: Indica que a coluna ser\xE1 utilizada como template, em conjunto com o
`),Sl(3015,"a",8),rN(3016,"PoTableCellTemplate"),og(),rN(3017,"."),og()(),Sl(3018,"li")(3019,"p")(3020,"code"),rN(3021,"columnTemplate"),og(),rN(3022,`: Indica que a coluna ser\xE1 utilizada como template, em conjunto com o
`),Sl(3023,"a",7),rN(3024,"PoTableColumnTemplate"),og(),rN(3025,"."),og()()()()(),Sl(3026,"tr",17)(3027,"td",18)(3028,"div",19)(3029,"span",20),rN(3030," visible"),Wl(3031,"br"),og()()(),Sl(3032,"td",21)(3033,"code",22),rN(3034,"boolean"),og()(),Sl(3035,"td",24)(3036,"em")(3037,"strong"),rN(3038,"(opcional)"),og()(),Sl(3039,"p"),rN(3040,`Controla a exibi\xE7\xE3o da coluna. Caso seja definido um valor falso, a coluna n\xE3o ser\xE1 exibida mas mas ser\xE1 poss\xEDvel torn\xE1-la
vis\xEDvel atrav\xE9s do `),Sl(3041,"strong"),rN(3042,"gerenciador de colunas"),og(),rN(3043,"."),og(),Sl(3044,"blockquote")(3045,"p"),rN(3046,"A disponibilidade de visualiza\xE7\xE3o pode limitar-se de acordo com a defini\xE7\xE3o de "),Sl(3047,"code"),rN(3048,"p-max-columns"),og(),rN(3049,"."),og()()()(),Sl(3050,"tr",17)(3051,"td",18)(3052,"div",19)(3053,"span",20),rN(3054," width"),Wl(3055,"br"),og()()(),Sl(3056,"td",21)(3057,"code",31),rN(3058,"string"),og()(),Sl(3059,"td",24)(3060,"em")(3061,"strong"),rN(3062,"(opcional)"),og()(),Sl(3063,"p"),rN(3064,`hoje o tamanho m\xEDnimo das colunas \xE9 de 32px, respeitando o padding lateral.
Boas Pr\xE1ticas:
Indicamos:`),og(),Sl(3065,"ul")(3066,"li"),rN(3067,"para colunas com 2 das propriedades (property, [p-draggable] e [p-sort]) : 96px"),og(),Sl(3068,"li"),rN(3069,"para colunas com 3 propriedades (property, [p-draggable] e [p-sort]) : 144px"),og()()()()(),Sl(3070,"h4",44)(3071,"code",5),rN(3072,"PoTableLiterals"),og()(),Sl(3073,"div",2)(3074,"p"),rN(3075,"Interface para defini\xE7\xE3o das literais usadas no "),Sl(3076,"code"),rN(3077,"po-table"),og(),rN(3078,"."),og()(),Sl(3079,"h4",13),rN(3080,"Propriedades"),og(),Sl(3081,"table",14)(3082,"tr",15)(3083,"th",16),rN(3084,"Nome"),og(),Sl(3085,"th",16),rN(3086,"Tipo"),og(),Sl(3087,"th",16),rN(3088,"Descri\xE7\xE3o"),og()(),Sl(3089,"tr",17)(3090,"td",18)(3091,"div",19)(3092,"span",20),rN(3093," bodyDelete"),Wl(3094,"br"),og()()(),Sl(3095,"td",21)(3096,"code",31),rN(3097,"string"),og()(),Sl(3098,"td",24)(3099,"em")(3100,"strong"),rN(3101,"(opcional)"),og()(),Sl(3102,"p"),rN(3103,"Texto no corpo do Modal de exclus\xE3o"),og()()(),Sl(3104,"tr",17)(3105,"td",18)(3106,"div",19)(3107,"span",20),rN(3108," cancel"),Wl(3109,"br"),og()()(),Sl(3110,"td",21)(3111,"code",31),rN(3112,"string"),og()(),Sl(3113,"td",24)(3114,"em")(3115,"strong"),rN(3116,"(opcional)"),og()(),Sl(3117,"p"),rN(3118,"Texto no Modal para cancelar a exclus\xE3o"),og()()(),Sl(3119,"tr",17)(3120,"td",18)(3121,"div",19)(3122,"span",20),rN(3123," columnsManager"),Wl(3124,"br"),og()()(),Sl(3125,"td",21)(3126,"code",31),rN(3127,"string"),og()(),Sl(3128,"td",24)(3129,"em")(3130,"strong"),rN(3131,"(opcional)"),og()(),Sl(3132,"p"),rN(3133,"Texto do "),Sl(3134,"strong"),rN(3135,"Gerenciador de colunas"),og(),rN(3136," localizado no canto superior direito da tabela."),og()()(),Sl(3137,"tr",17)(3138,"td",18)(3139,"div",19)(3140,"span",20),rN(3141," completeSubtitle"),Wl(3142,"br"),og()()(),Sl(3143,"td",21)(3144,"code",31),rN(3145,"string"),og()(),Sl(3146,"td",24)(3147,"em")(3148,"strong"),rN(3149,"(opcional)"),og()(),Sl(3150,"p"),rN(3151,"T\xEDtulo da modal 'Legenda completa' que aparece ao clicar no bot\xE3o 'Ver legenda completa'."),og()()(),Sl(3152,"tr",17)(3153,"td",18)(3154,"div",19)(3155,"span",20),rN(3156," delete"),Wl(3157,"br"),og()()(),Sl(3158,"td",21)(3159,"code",31),rN(3160,"string"),og()(),Sl(3161,"td",24)(3162,"em")(3163,"strong"),rN(3164,"(opcional)"),og()(),Sl(3165,"p"),rN(3166,"Texto no Modal para confirmar a exclus\xE3o"),og()()(),Sl(3167,"tr",17)(3168,"td",18)(3169,"div",19)(3170,"span",20),rN(3171," deleteApiError"),Wl(3172,"br"),og()()(),Sl(3173,"td",21)(3174,"code",31),rN(3175,"string"),og()(),Sl(3176,"td",24)(3177,"em")(3178,"strong"),rN(3179,"(opcional)"),og()(),Sl(3180,"p"),rN(3181,"Texto de notifica\xE7\xE3o de erro na requisi\xE7\xE3o Delete"),og()()(),Sl(3182,"tr",17)(3183,"td",18)(3184,"div",19)(3185,"span",20),rN(3186," deleteSuccessful"),Wl(3187,"br"),og()()(),Sl(3188,"td",21)(3189,"code",31),rN(3190,"string"),og()(),Sl(3191,"td",24)(3192,"em")(3193,"strong"),rN(3194,"(opcional)"),og()(),Sl(3195,"p"),rN(3196,"Texto de notifica\xE7\xE3o de remo\xE7\xE3o com sucesso"),og()()(),Sl(3197,"tr",17)(3198,"td",18)(3199,"div",19)(3200,"span",20),rN(3201," loadMoreData"),Wl(3202,"br"),og()()(),Sl(3203,"td",21)(3204,"code",31),rN(3205,"string"),og()(),Sl(3206,"td",24)(3207,"em")(3208,"strong"),rN(3209,"(opcional)"),og()(),Sl(3210,"p"),rN(3211,"Texto do bot\xE3o de "),Sl(3212,"strong"),rN(3213,"Carregar mais resultados"),og(),rN(3214," localizado no rodap\xE9 da tabela."),og()()(),Sl(3215,"tr",17)(3216,"td",18)(3217,"div",19)(3218,"span",20),rN(3219," loadingData"),Wl(3220,"br"),og()()(),Sl(3221,"td",21)(3222,"code",31),rN(3223,"string"),og()(),Sl(3224,"td",24)(3225,"em")(3226,"strong"),rN(3227,"(opcional)"),og()(),Sl(3228,"p"),rN(3229,"Texto exibido enquanto uma requisi\xE7\xE3o est\xE1 sendo executada para carregar dados na tabela."),og()()(),Sl(3230,"tr",17)(3231,"td",18)(3232,"div",19)(3233,"span",20),rN(3234," multipleItems"),Wl(3235,"br"),og()()(),Sl(3236,"td",21)(3237,"code",31),rN(3238,"string"),og()(),Sl(3239,"td",24)(3240,"em")(3241,"strong"),rN(3242,"(opcional)"),og()(),Sl(3243,"p"),rN(3244,"Texto exibido quando apenas 1 item for selecionado no checkbox."),og()()(),Sl(3245,"tr",17)(3246,"td",18)(3247,"div",19)(3248,"span",20),rN(3249," noColumns"),Wl(3250,"br"),og()()(),Sl(3251,"td",21)(3252,"code",31),rN(3253,"string"),og()(),Sl(3254,"td",24)(3255,"em")(3256,"strong"),rN(3257,"(opcional)"),og()(),Sl(3258,"p"),rN(3259,"Texto exibido quando n\xE3o existem colunas definidas para a tabela."),og()()(),Sl(3260,"tr",17)(3261,"td",18)(3262,"div",19)(3263,"span",20),rN(3264," noData"),Wl(3265,"br"),og()()(),Sl(3266,"td",21)(3267,"code",31),rN(3268,"string"),og()(),Sl(3269,"td",24)(3270,"em")(3271,"strong"),rN(3272,"(opcional)"),og()(),Sl(3273,"p"),rN(3274,"Texto exibido quando n\xE3o existem itens para serem exibidos na tabela."),og()()(),Sl(3275,"tr",17)(3276,"td",18)(3277,"div",19)(3278,"span",20),rN(3279," noItem"),Wl(3280,"br"),og()()(),Sl(3281,"td",21)(3282,"code",31),rN(3283,"string"),og()(),Sl(3284,"td",24)(3285,"em")(3286,"strong"),rN(3287,"(opcional)"),og()(),Sl(3288,"p"),rN(3289,"Texto exibido quando nenhum item for selecionado no checkbox."),og()()(),Sl(3290,"tr",17)(3291,"td",18)(3292,"div",19)(3293,"span",20),rN(3294," noVisibleColumn"),Wl(3295,"br"),og()()(),Sl(3296,"td",21)(3297,"code",31),rN(3298,"string"),og()(),Sl(3299,"td",24)(3300,"em")(3301,"strong"),rN(3302,"(opcional)"),og()(),Sl(3303,"p"),rN(3304,"Texto exibido quando n\xE3o existem colunas vis\xEDveis para a tabela."),og()()(),Sl(3305,"tr",17)(3306,"td",18)(3307,"div",19)(3308,"span",20),rN(3309," oneItem"),Wl(3310,"br"),og()()(),Sl(3311,"td",21)(3312,"code",31),rN(3313,"string"),og()(),Sl(3314,"td",24)(3315,"em")(3316,"strong"),rN(3317,"(opcional)"),og()(),Sl(3318,"p"),rN(3319,"Texto exibido quando apenas 1 item for selecionado no checkbox."),og()()(),Sl(3320,"tr",17)(3321,"td",18)(3322,"div",19)(3323,"span",20),rN(3324," seeCompleteSubtitle"),Wl(3325,"br"),og()()(),Sl(3326,"td",21)(3327,"code",31),rN(3328,"string"),og()(),Sl(3329,"td",24)(3330,"em")(3331,"strong"),rN(3332,"(opcional)"),og()(),Sl(3333,"p"),rN(3334,"Texto do bot\xE3o "),Sl(3335,"strong"),rN(3336,"Ver legenda completa"),og(),rN(3337," que aparece quando o rodap\xE9 de legendas \xE9 maior que a tabela."),og()()()(),Sl(3338,"h4",44)(3339,"code",5),rN(3340,"PoTableColumnIcon"),og()(),Sl(3341,"div",2)(3342,"p"),Wl(3343,"a",104),og(),Sl(3344,"p"),rN(3345,"Interface que define a coluna com \xEDcone(s) do "),Sl(3346,"code"),rN(3347,"po-table"),og(),rN(3348,"."),og()(),Sl(3349,"h4",13),rN(3350,"Propriedades"),og(),Sl(3351,"table",14)(3352,"tr",15)(3353,"th",16),rN(3354,"Nome"),og(),Sl(3355,"th",16),rN(3356,"Tipo"),og(),Sl(3357,"th",16),rN(3358,"Descri\xE7\xE3o"),og()(),Sl(3359,"tr",17)(3360,"td",18)(3361,"div",19)(3362,"span",20),rN(3363," action"),Wl(3364,"br"),og()()(),Sl(3365,"td",21)(3366,"code",45),rN(3367,"Function"),og()(),Sl(3368,"td",24)(3369,"em")(3370,"strong"),rN(3371,"(opcional)"),og()(),Sl(3372,"p"),rN(3373,"Define a a\xE7\xE3o que ser\xE1 executada ao clicar no \xEDcone."),og()()(),Sl(3374,"tr",17)(3375,"td",18)(3376,"div",19)(3377,"span",20),rN(3378," color"),Wl(3379,"br"),og()()(),Sl(3380,"td",21)(3381,"code",31),rN(3382,"string "),og(),Sl(3383,"code",45),rN(3384," Function"),og()(),Sl(3385,"td",24)(3386,"em")(3387,"strong"),rN(3388,"(opcional)"),og()(),Sl(3389,"p"),rN(3390,"Define a cor do \xEDcone."),og(),Sl(3391,"p"),rN(3392,"Valores v\xE1lidos:"),og(),Sl(3393,"ul")(3394,"li"),Wl(3395,"span",51),Sl(3396,"code"),rN(3397,"color-01"),og()(),Sl(3398,"li"),Wl(3399,"span",52),Sl(3400,"code"),rN(3401,"color-02"),og()(),Sl(3402,"li"),Wl(3403,"span",53),Sl(3404,"code"),rN(3405,"color-03"),og()(),Sl(3406,"li"),Wl(3407,"span",54),Sl(3408,"code"),rN(3409,"color-04"),og()(),Sl(3410,"li"),Wl(3411,"span",55),Sl(3412,"code"),rN(3413,"color-05"),og()(),Sl(3414,"li"),Wl(3415,"span",56),Sl(3416,"code"),rN(3417,"color-06"),og()(),Sl(3418,"li"),Wl(3419,"span",57),Sl(3420,"code"),rN(3421,"color-07"),og()(),Sl(3422,"li"),Wl(3423,"span",58),Sl(3424,"code"),rN(3425,"color-08"),og()(),Sl(3426,"li"),Wl(3427,"span",59),Sl(3428,"code"),rN(3429,"color-09"),og()(),Sl(3430,"li"),Wl(3431,"span",60),Sl(3432,"code"),rN(3433,"color-10"),og()(),Sl(3434,"li"),Wl(3435,"span",61),Sl(3436,"code"),rN(3437,"color-11"),og()(),Sl(3438,"li"),Wl(3439,"span",62),Sl(3440,"code"),rN(3441,"color-12"),og()()(),Sl(3442,"blockquote")(3443,"p"),rN(3444,"Tamb\xE9m \xE9 poss\xEDvel utilizar as 35 cores da paleta "),Sl(3445,"strong"),rN(3446,"Caption Tag Colors"),og(),rN(3447,":"),og()(),Sl(3448,"ul")(3449,"li"),Wl(3450,"span",63),Sl(3451,"code"),rN(3452,"caption-tag-01"),og(),Wl(3453,"span",64),Sl(3454,"code"),rN(3455,"caption-tag-02"),og(),Wl(3456,"span",65),Sl(3457,"code"),rN(3458,"caption-tag-03"),og(),Wl(3459,"span",66),Sl(3460,"code"),rN(3461,"caption-tag-04"),og(),Wl(3462,"span",67),Sl(3463,"code"),rN(3464,"caption-tag-05"),og()(),Sl(3465,"li"),Wl(3466,"span",68),Sl(3467,"code"),rN(3468,"caption-tag-06"),og(),Wl(3469,"span",69),Sl(3470,"code"),rN(3471,"caption-tag-07"),og(),Wl(3472,"span",70),Sl(3473,"code"),rN(3474,"caption-tag-08"),og(),Wl(3475,"span",71),Sl(3476,"code"),rN(3477,"caption-tag-09"),og(),Wl(3478,"span",72),Sl(3479,"code"),rN(3480,"caption-tag-10"),og()(),Sl(3481,"li"),Wl(3482,"span",73),Sl(3483,"code"),rN(3484,"caption-tag-11"),og(),Wl(3485,"span",74),Sl(3486,"code"),rN(3487,"caption-tag-12"),og(),Wl(3488,"span",75),Sl(3489,"code"),rN(3490,"caption-tag-13"),og(),Wl(3491,"span",76),Sl(3492,"code"),rN(3493,"caption-tag-14"),og(),Wl(3494,"span",77),Sl(3495,"code"),rN(3496,"caption-tag-15"),og()(),Sl(3497,"li"),Wl(3498,"span",78),Sl(3499,"code"),rN(3500,"caption-tag-16"),og(),Wl(3501,"span",79),Sl(3502,"code"),rN(3503,"caption-tag-17"),og(),Wl(3504,"span",80),Sl(3505,"code"),rN(3506,"caption-tag-18"),og(),Wl(3507,"span",81),Sl(3508,"code"),rN(3509,"caption-tag-19"),og(),Wl(3510,"span",82),Sl(3511,"code"),rN(3512,"caption-tag-20"),og()(),Sl(3513,"li"),Wl(3514,"span",83),Sl(3515,"code"),rN(3516,"caption-tag-21"),og(),Wl(3517,"span",84),Sl(3518,"code"),rN(3519,"caption-tag-22"),og(),Wl(3520,"span",85),Sl(3521,"code"),rN(3522,"caption-tag-23"),og(),Wl(3523,"span",86),Sl(3524,"code"),rN(3525,"caption-tag-24"),og(),Wl(3526,"span",87),Sl(3527,"code"),rN(3528,"caption-tag-25"),og()(),Sl(3529,"li"),Wl(3530,"span",88),Sl(3531,"code"),rN(3532,"caption-tag-26"),og(),Wl(3533,"span",89),Sl(3534,"code"),rN(3535,"caption-tag-27"),og(),Wl(3536,"span",90),Sl(3537,"code"),rN(3538,"caption-tag-28"),og(),Wl(3539,"span",91),Sl(3540,"code"),rN(3541,"caption-tag-29"),og(),Wl(3542,"span",92),Sl(3543,"code"),rN(3544,"caption-tag-30"),og()(),Sl(3545,"li"),Wl(3546,"span",93),Sl(3547,"code"),rN(3548,"caption-tag-31"),og(),Wl(3549,"span",94),Sl(3550,"code"),rN(3551,"caption-tag-32"),og(),Wl(3552,"span",95),Sl(3553,"code"),rN(3554,"caption-tag-33"),og(),Wl(3555,"span",96),Sl(3556,"code"),rN(3557,"caption-tag-34"),og(),Wl(3558,"span",97),Sl(3559,"code"),rN(3560,"caption-tag-35"),og()()()()(),Sl(3561,"tr",17)(3562,"td",18)(3563,"div",19)(3564,"span",20),rN(3565," disabled"),Wl(3566,"br"),og()()(),Sl(3567,"td",21)(3568,"code",45),rN(3569,"Function"),og()(),Sl(3570,"td",24)(3571,"em")(3572,"strong"),rN(3573,"(opcional)"),og()(),Sl(3574,"p"),rN(3575,"Fun\xE7\xE3o que deve retornar um booleano para habilitar ou desabilitar o \xEDcone e sua a\xE7\xE3o."),og()()(),Sl(3576,"tr",17)(3577,"td",18)(3578,"div",19)(3579,"span",20),rN(3580," icon"),Wl(3581,"br"),og()()(),Sl(3582,"td",21)(3583,"code",31),rN(3584,"string "),og(),Sl(3585,"code",46),rN(3586," TemplateRef<void>"),og()(),Sl(3587,"td",24)(3588,"em")(3589,"strong"),rN(3590,"(opcional)"),og()(),Sl(3591,"p"),rN(3592,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),Sl(3593,"a",26),rN(3594,"Biblioteca de \xEDcones"),og(),rN(3595,". conforme exemplo abaixo:"),og(),Sl(3596,"pre")(3597,"code"),rN(3598,`[ { icon: 'an an-plus' } ]
`),og()(),Sl(3599,"p"),rN(3600,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca Font Awesome, da seguinte forma:"),og(),Sl(3601,"pre")(3602,"code"),rN(3603,`[ {  icon: 'fas fa-plus' } ]
`),og()(),Sl(3604,"p"),rN(3605,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),Sl(3606,"code"),rN(3607,"TemplateRef"),og(),rN(3608,`, conforme exemplo abaixo:
`),Sl(3609,"code"),rN(3610,"component.html"),og(),rN(3611,":"),og(),Sl(3612,"pre")(3613,"code"),rN(3614,`<ng-template #iconTemplateAdd>
 <span class="material-icons" style="font-size: inherit;">add</span>
</ng-template>

<po-table [p-column]="myProperty"></po-table>
`),og()(),Sl(3615,"p")(3616,"code"),rN(3617,"component.ts"),og(),rN(3618,":"),og(),Sl(3619,"pre")(3620,"code"),rN(3621,`@ViewChild('iconTemplateAdd', { static: true }) iconTemplateAdd: TemplateRef<void>;

myProperty = [
 { property: 'columnIcon', label: 'Icons', type: 'icon', icons: [
  { value: 'plus', icon: this.iconTemplateAdd },
 ]}
];
`),og()(),Sl(3622,"blockquote")(3623,"p"),rN(3624,"Caso esta propriedade n\xE3o seja definida, a mesma receber\xE1 o valor contido em "),Sl(3625,"code"),rN(3626,"value"),og(),rN(3627,"."),og()()()(),Sl(3628,"tr",17)(3629,"td",18)(3630,"div",19)(3631,"span",20),rN(3632," tooltip"),Wl(3633,"br"),og()()(),Sl(3634,"td",21)(3635,"code",31),rN(3636,"string"),og()(),Sl(3637,"td",24)(3638,"em")(3639,"strong"),rN(3640,"(opcional)"),og()(),Sl(3641,"p"),rN(3642,"Define um texto de ajuda que ser\xE1 exibido ao passar o "),Sl(3643,"em"),rN(3644,"mouse"),og(),rN(3645," em cima do \xEDcone."),og()()(),Sl(3646,"tr",17)(3647,"td",18)(3648,"div",19)(3649,"span",20),rN(3650," value"),Wl(3651,"br"),og()()(),Sl(3652,"td",21)(3653,"code",31),rN(3654,"string"),og()(),Sl(3655,"td",24)(3656,"p"),rN(3657,"Define o valor do \xEDcone que ser\xE1 exibido."),og()()()(),Sl(3658,"h4",44)(3659,"code",5),rN(3660,"PoTableColumnLabel"),og()(),Sl(3661,"div",2)(3662,"p"),rN(3663,"Interface para configura\xE7\xE3o das colunas de labels do "),Sl(3664,"code"),rN(3665,"po-table"),og(),rN(3666,"."),og()(),Sl(3667,"h4",13),rN(3668,"Propriedades"),og(),Sl(3669,"table",14)(3670,"tr",15)(3671,"th",16),rN(3672,"Nome"),og(),Sl(3673,"th",16),rN(3674,"Tipo"),og(),Sl(3675,"th",16),rN(3676,"Descri\xE7\xE3o"),og()(),Sl(3677,"tr",17)(3678,"td",18)(3679,"div",19)(3680,"span",20),rN(3681," color"),Wl(3682,"br"),og()()(),Sl(3683,"td",21)(3684,"code",31),rN(3685,"string"),og()(),Sl(3686,"td",24)(3687,"em")(3688,"strong"),rN(3689,"(opcional)"),og()(),Sl(3690,"p"),rN(3691,"Define a cor do label."),og(),Sl(3692,"p"),rN(3693,"Valores v\xE1lidos:"),og(),Sl(3694,"ul")(3695,"li"),Wl(3696,"span",51),Sl(3697,"code"),rN(3698,"color-01"),og()(),Sl(3699,"li"),Wl(3700,"span",52),Sl(3701,"code"),rN(3702,"color-02"),og()(),Sl(3703,"li"),Wl(3704,"span",53),Sl(3705,"code"),rN(3706,"color-03"),og()(),Sl(3707,"li"),Wl(3708,"span",54),Sl(3709,"code"),rN(3710,"color-04"),og()(),Sl(3711,"li"),Wl(3712,"span",55),Sl(3713,"code"),rN(3714,"color-05"),og()(),Sl(3715,"li"),Wl(3716,"span",56),Sl(3717,"code"),rN(3718,"color-06"),og()(),Sl(3719,"li"),Wl(3720,"span",57),Sl(3721,"code"),rN(3722,"color-07"),og()(),Sl(3723,"li"),Wl(3724,"span",58),Sl(3725,"code"),rN(3726,"color-08"),og()(),Sl(3727,"li"),Wl(3728,"span",59),Sl(3729,"code"),rN(3730,"color-09"),og()(),Sl(3731,"li"),Wl(3732,"span",60),Sl(3733,"code"),rN(3734,"color-10"),og()(),Sl(3735,"li"),Wl(3736,"span",61),Sl(3737,"code"),rN(3738,"color-11"),og()(),Sl(3739,"li"),Wl(3740,"span",62),Sl(3741,"code"),rN(3742,"color-12"),og()()(),Sl(3743,"blockquote")(3744,"p"),rN(3745,"Tamb\xE9m \xE9 poss\xEDvel utilizar as 35 cores da paleta "),Sl(3746,"strong"),rN(3747,"Caption Tag Colors"),og(),rN(3748,":"),og()(),Sl(3749,"ul")(3750,"li"),Wl(3751,"span",63),Sl(3752,"code"),rN(3753,"caption-tag-01"),og(),Wl(3754,"span",64),Sl(3755,"code"),rN(3756,"caption-tag-02"),og(),Wl(3757,"span",65),Sl(3758,"code"),rN(3759,"caption-tag-03"),og(),Wl(3760,"span",66),Sl(3761,"code"),rN(3762,"caption-tag-04"),og(),Wl(3763,"span",67),Sl(3764,"code"),rN(3765,"caption-tag-05"),og()(),Sl(3766,"li"),Wl(3767,"span",68),Sl(3768,"code"),rN(3769,"caption-tag-06"),og(),Wl(3770,"span",69),Sl(3771,"code"),rN(3772,"caption-tag-07"),og(),Wl(3773,"span",70),Sl(3774,"code"),rN(3775,"caption-tag-08"),og(),Wl(3776,"span",71),Sl(3777,"code"),rN(3778,"caption-tag-09"),og(),Wl(3779,"span",72),Sl(3780,"code"),rN(3781,"caption-tag-10"),og()(),Sl(3782,"li"),Wl(3783,"span",73),Sl(3784,"code"),rN(3785,"caption-tag-11"),og(),Wl(3786,"span",74),Sl(3787,"code"),rN(3788,"caption-tag-12"),og(),Wl(3789,"span",75),Sl(3790,"code"),rN(3791,"caption-tag-13"),og(),Wl(3792,"span",76),Sl(3793,"code"),rN(3794,"caption-tag-14"),og(),Wl(3795,"span",77),Sl(3796,"code"),rN(3797,"caption-tag-15"),og()(),Sl(3798,"li"),Wl(3799,"span",78),Sl(3800,"code"),rN(3801,"caption-tag-16"),og(),Wl(3802,"span",79),Sl(3803,"code"),rN(3804,"caption-tag-17"),og(),Wl(3805,"span",80),Sl(3806,"code"),rN(3807,"caption-tag-18"),og(),Wl(3808,"span",81),Sl(3809,"code"),rN(3810,"caption-tag-19"),og(),Wl(3811,"span",82),Sl(3812,"code"),rN(3813,"caption-tag-20"),og()(),Sl(3814,"li"),Wl(3815,"span",83),Sl(3816,"code"),rN(3817,"caption-tag-21"),og(),Wl(3818,"span",84),Sl(3819,"code"),rN(3820,"caption-tag-22"),og(),Wl(3821,"span",85),Sl(3822,"code"),rN(3823,"caption-tag-23"),og(),Wl(3824,"span",86),Sl(3825,"code"),rN(3826,"caption-tag-24"),og(),Wl(3827,"span",87),Sl(3828,"code"),rN(3829,"caption-tag-25"),og()(),Sl(3830,"li"),Wl(3831,"span",88),Sl(3832,"code"),rN(3833,"caption-tag-26"),og(),Wl(3834,"span",89),Sl(3835,"code"),rN(3836,"caption-tag-27"),og(),Wl(3837,"span",90),Sl(3838,"code"),rN(3839,"caption-tag-28"),og(),Wl(3840,"span",91),Sl(3841,"code"),rN(3842,"caption-tag-29"),og(),Wl(3843,"span",92),Sl(3844,"code"),rN(3845,"caption-tag-30"),og()(),Sl(3846,"li"),Wl(3847,"span",93),Sl(3848,"code"),rN(3849,"caption-tag-31"),og(),Wl(3850,"span",94),Sl(3851,"code"),rN(3852,"caption-tag-32"),og(),Wl(3853,"span",95),Sl(3854,"code"),rN(3855,"caption-tag-33"),og(),Wl(3856,"span",96),Sl(3857,"code"),rN(3858,"caption-tag-34"),og(),Wl(3859,"span",97),Sl(3860,"code"),rN(3861,"caption-tag-35"),og()()(),Sl(3862,"p"),rN(3863,"Exemplo de uso:"),og(),Sl(3864,"pre")(3865,"code"),rN(3866,`{ property: 'status', type: 'label', labels: [
  { value: 'ativo', color: 'caption-tag-13', label: 'Ativo' },
  { value: 'pendente', color: 'caption-tag-08', label: 'Pendente' }
]}
`),og()()()(),Sl(3867,"tr",17)(3868,"td",18)(3869,"div",19)(3870,"span",20),rN(3871," icon"),Wl(3872,"br"),og()()(),Sl(3873,"td",21)(3874,"code",22),rN(3875,"boolean "),og(),Sl(3876,"code",31),rN(3877," string "),og(),Sl(3878,"code",46),rN(3879," TemplateRef<void>"),og()(),Sl(3880,"td",24)(3881,"em")(3882,"strong"),rN(3883,"(opcional)"),og()(),Sl(3884,"p"),rN(3885,"Define ou ativa um \xEDcone que ser\xE1 exibido ao lado do valor da "),Sl(3886,"em"),rN(3887,"tag"),og(),rN(3888,"."),og(),Sl(3889,"p"),rN(3890,"Quando "),Sl(3891,"code"),rN(3892,"p-type"),og(),rN(3893," estiver definida, basta informar um valor igual a "),Sl(3894,"code"),rN(3895,"true"),og(),rN(3896," para que o \xEDcone seja exibido conforme descri\xE7\xF5es abaixo:"),og(),Sl(3897,"ul")(3898,"li"),Wl(3899,"span",105),rN(3900," - "),Sl(3901,"code"),rN(3902,"success"),og()(),Sl(3903,"li"),Wl(3904,"span",106),rN(3905," - "),Sl(3906,"code"),rN(3907,"warning"),og()(),Sl(3908,"li"),Wl(3909,"span",107),rN(3910," - "),Sl(3911,"code"),rN(3912,"danger"),og()(),Sl(3913,"li"),Wl(3914,"span",108),rN(3915," - "),Sl(3916,"code"),rN(3917,"info"),og()()(),Sl(3918,"p"),rN(3919,"Tamb\xE9m \xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),Sl(3920,"a",26),rN(3921,"Biblioteca de \xEDcones"),og(),rN(3922,". conforme exemplo abaixo:"),og(),Sl(3923,"pre")(3924,"code"),rN(3925,`<po-tag p-icon="an an-user" p-value="PO Tag"></po-tag>
`),og()(),Sl(3926,"p"),rN(3927,"como tamb\xE9m utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),Sl(3928,"em"),rN(3929,"Font Awesome"),og(),rN(3930,", da seguinte forma:"),og(),Sl(3931,"pre")(3932,"code"),rN(3933,`<po-tag p-icon="fa fa-podcast" p-value="PO Tag"></po-button>
`),og()(),Sl(3934,"p"),rN(3935,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),Sl(3936,"code"),rN(3937,"TemplateRef"),og(),rN(3938,", conforme exemplo abaixo:"),og(),Sl(3939,"pre")(3940,"code"),rN(3941,`<po-tag [p-icon]="template" p-value="Tag template ionic"></po-button>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),og()(),Sl(3942,"blockquote")(3943,"p"),rN(3944,"Para o \xEDcone enquadrar corretamente, deve-se utilizar "),Sl(3945,"code"),rN(3946,"font-size: inherit"),og(),rN(3947," caso o \xEDcone utilizado n\xE3o aplique-o."),og()()()(),Sl(3948,"tr",17)(3949,"td",18)(3950,"div",19)(3951,"span",20),rN(3952," label"),Wl(3953,"br"),og()()(),Sl(3954,"td",21)(3955,"code",31),rN(3956,"string"),og()(),Sl(3957,"td",24)(3958,"p"),rN(3959,"Texto que ser\xE1 exibido na coluna."),og()()(),Sl(3960,"tr",17)(3961,"td",18)(3962,"div",19)(3963,"span",20),rN(3964," textColor"),Wl(3965,"br"),og()()(),Sl(3966,"td",21)(3967,"code",31),rN(3968,"string"),og()(),Sl(3969,"td",24)(3970,"em")(3971,"strong"),rN(3972,"(opcional)"),og()(),Sl(3973,"p"),rN(3974,"Determina a cor do texto da tag. As maneiras de customizar as cores s\xE3o:"),og(),Sl(3975,"ul")(3976,"li")(3977,"p"),rN(3978,"Hexadeximal, por exemplo "),Sl(3979,"code"),rN(3980,"#c64840"),og(),rN(3981,";"),og()(),Sl(3982,"li")(3983,"p"),rN(3984,"RGB, como "),Sl(3985,"code"),rN(3986,"rgb(0, 0, 165)"),og(),rN(3987,";"),og()(),Sl(3988,"li")(3989,"p"),rN(3990,"O nome da cor, por exemplo "),Sl(3991,"code"),rN(3992,"blue"),og(),rN(3993,";"),og()(),Sl(3994,"li")(3995,"p"),rN(3996,`Usando uma das cores do tema do PO:
Valores v\xE1lidos:`),og(),Sl(3997,"ul")(3998,"li"),Wl(3999,"span",51),Sl(4e3,"code"),rN(4001,"color-01"),og()(),Sl(4002,"li"),Wl(4003,"span",52),Sl(4004,"code"),rN(4005,"color-02"),og()(),Sl(4006,"li"),Wl(4007,"span",53),Sl(4008,"code"),rN(4009,"color-03"),og()(),Sl(4010,"li"),Wl(4011,"span",54),Sl(4012,"code"),rN(4013,"color-04"),og()(),Sl(4014,"li"),Wl(4015,"span",55),Sl(4016,"code"),rN(4017,"color-05"),og()(),Sl(4018,"li"),Wl(4019,"span",56),Sl(4020,"code"),rN(4021,"color-06"),og()(),Sl(4022,"li"),Wl(4023,"span",57),Sl(4024,"code"),rN(4025,"color-07"),og()(),Sl(4026,"li"),Wl(4027,"span",58),Sl(4028,"code"),rN(4029,"color-08"),og()(),Sl(4030,"li"),Wl(4031,"span",59),Sl(4032,"code"),rN(4033,"color-09"),og()(),Sl(4034,"li"),Wl(4035,"span",60),Sl(4036,"code"),rN(4037,"color-10"),og()(),Sl(4038,"li"),Wl(4039,"span",61),Sl(4040,"code"),rN(4041,"color-11"),og()(),Sl(4042,"li"),Wl(4043,"span",62),Sl(4044,"code"),rN(4045,"color-12"),og()()()(),Sl(4046,"li")(4047,"p"),rN(4048,"Para uma melhor acessibilidade no uso do componente \xE9 recomend\xE1vel utilizar cores com um melhor contraste em rela\xE7\xE3o ao background."),og()()(),Sl(4049,"blockquote")(4050,"p")(4051,"strong"),rN(4052,"Aten\xE7\xE3o:"),og(),rN(4053," A propriedade "),Sl(4054,"code"),rN(4055,"p-type"),og(),rN(4056," sobrep\xF5e esta defini\xE7\xE3o."),og()(),Sl(4057,"blockquote")(4058,"p")(4059,"strong"),rN(4060,"Aten\xE7\xE3o:"),og(),rN(4061," As cores da paleta "),Sl(4062,"strong"),rN(4063,"Caption Tag Colors"),og(),rN(4064," ("),Sl(4065,"code"),rN(4066,"caption-tag-01"),og(),rN(4067," a "),Sl(4068,"code"),rN(4069,"caption-tag-35"),og(),rN(4070,`) n\xE3o s\xE3o aceitas nesta propriedade,
pois possuem cor de texto fixa definida via token CSS.`),og()()()(),Sl(4071,"tr",17)(4072,"td",18)(4073,"div",19)(4074,"span",20),rN(4075," tooltip"),Wl(4076,"br"),og()()(),Sl(4077,"td",21)(4078,"code",31),rN(4079,"string"),og()(),Sl(4080,"td",24)(4081,"em")(4082,"strong"),rN(4083,"(opcional)"),og()(),Sl(4084,"p"),rN(4085,"Define um texto de ajuda que ser\xE1 exibido ao passar o "),Sl(4086,"em"),rN(4087,"mouse"),og(),rN(4088," em cima do "),Sl(4089,"em"),rN(4090,"label"),og(),rN(4091,"."),og(),Sl(4092,"blockquote")(4093,"p"),rN(4094,`Caso o conte\xFAdo da c\xE9lula exceder a largura da coluna,
\xE9 ignorado o valor atribuido ao tooltip e ser\xE1 exibido justamente o conte\xFAdo da c\xE9lula.`),og()()()(),Sl(4095,"tr",17)(4096,"td",18)(4097,"div",19)(4098,"span",20),rN(4099," type"),Wl(4100,"br"),og()()(),Sl(4101,"td",21)(4102,"code",109),rN(4103,"PoTagType"),og()(),Sl(4104,"td",24)(4105,"em")(4106,"strong"),rN(4107,"(opcional)"),og()(),Sl(4108,"p"),rN(4109,"Define o tipo da "),Sl(4110,"em"),rN(4111,"tag"),og(),rN(4112,"."),og(),Sl(4113,"p"),rN(4114,"Valores v\xE1lidos:"),og(),Sl(4115,"ul")(4116,"li")(4117,"code"),rN(4118,"success"),og(),rN(4119,": cor verde utilizada para simbolizar sucesso ou \xEAxito."),og(),Sl(4120,"li")(4121,"code"),rN(4122,"warning"),og(),rN(4123,": cor amarela que representa aviso ou advert\xEAncia."),og(),Sl(4124,"li")(4125,"code"),rN(4126,"danger"),og(),rN(4127,": cor vermelha para erro ou aviso cr\xEDtico."),og(),Sl(4128,"li")(4129,"code"),rN(4130,"info"),og(),rN(4131,": cor cinza escuro que caracteriza conte\xFAdo informativo."),og()(),Sl(4132,"blockquote")(4133,"p"),rN(4134,"Quando esta propriedade for definida, ir\xE1 sobrepor a defini\xE7\xE3o de "),Sl(4135,"code"),rN(4136,"p-color"),og(),rN(4137," e "),Sl(4138,"code"),rN(4139,"p-icon"),og(),rN(4140," somente ser\xE1 exibido caso seja "),Sl(4141,"code"),rN(4142,"true"),og(),rN(4143,"."),og()()()(),Sl(4144,"tr",17)(4145,"td",18)(4146,"div",19)(4147,"span",20),rN(4148," value"),Wl(4149,"br"),og()()(),Sl(4150,"td",21)(4151,"code",31),rN(4152,"string "),og(),Sl(4153,"code",35),rN(4154," number"),og()(),Sl(4155,"td",24)(4156,"p"),rN(4157,"Valor que ser\xE1 usado como refer\xEAncia para exibi\xE7\xE3o do conte\xFAdo na coluna."),og()()()(),Sl(4158,"h4",44)(4159,"code",5),rN(4160,"PoTableDetailColumn"),og()(),Sl(4161,"div",2)(4162,"p"),rN(4163,"Interface para configura\xE7\xE3o das colunas do "),Sl(4164,"code"),rN(4165,"po-table-detail"),og(),rN(4166,"."),og()(),Sl(4167,"h4",13),rN(4168,"Propriedades"),og(),Sl(4169,"table",14)(4170,"tr",15)(4171,"th",16),rN(4172,"Nome"),og(),Sl(4173,"th",16),rN(4174,"Tipo"),og(),Sl(4175,"th",16),rN(4176,"Descri\xE7\xE3o"),og()(),Sl(4177,"tr",17)(4178,"td",18)(4179,"div",19)(4180,"span",20),rN(4181," format"),Wl(4182,"br"),og()()(),Sl(4183,"td",21)(4184,"code",31),rN(4185,"string"),og()(),Sl(4186,"td",24)(4187,"em")(4188,"strong"),rN(4189,"(opcional)"),og()(),Sl(4190,"p"),rN(4191,"Formato de exibi\xE7\xE3o do valor da coluna:"),og(),Sl(4192,"ul")(4193,"li")(4194,"p"),rN(4195,"Formato para moeda (currency). Exemplos: 'BRL', 'USD'."),og()(),Sl(4196,"li")(4197,"p"),rN(4198,`Formato para data (date): aceita apenas os caracteres de dia(dd), m\xEAs(MM) e ano (yyyy ou yy),
caso n\xE3o seja informado um formato o mesmo ser\xE1 'dd/MM/yyyy'. Exemplos: 'dd/MM/yyyy', 'dd-MM-yy', 'mm/dd/yyyy'.`),og()(),Sl(4199,"li")(4200,"p"),rN(4201,`Formato para hor\xE1rio (time): aceita apenas os caracteres de hora(HH), minutos(mm), segundos(ss) e milisegundos(f-ffffff), os milisegundos s\xE3o opcionais, caso n\xE3o seja informado um formato o mesmo ser\xE1
'HH:mm:ss'. Exemplos: 'HH:mm', 'HH:mm:ss.ffffff', 'HH:mm:ss.ff', 'mm:ss.fff'.`),og()(),Sl(4202,"li")(4203,"p"),rN(4204,"Formato para n\xFAmeros (number): aceita um valor seguindo o padr\xE3o "),Sl(4205,"a",110)(4206,"strong"),rN(4207,"DecimalPipe"),og()(),rN(4208," para formata\xE7\xE3o, e caso n\xE3o seja informado, o n\xFAmero ser\xE1 exibido na sua forma original. Exemplo:"),og(),Sl(4209,"ul")(4210,"li"),rN(4211,"Valor de entrada: "),Sl(4212,"code"),rN(4213,"50"),og(),rN(4214," e valor para formata\xE7\xE3o: "),Sl(4215,"code"),rN(4216,"'1.2-5'"),og(),rN(4217," o resultado ser\xE1: "),Sl(4218,"code"),rN(4219,"50.00"),og()()()()()()(),Sl(4220,"tr",17)(4221,"td",18)(4222,"div",19)(4223,"span",20),rN(4224," label"),Wl(4225,"br"),og()()(),Sl(4226,"td",21)(4227,"code",31),rN(4228,"string"),og()(),Sl(4229,"td",24)(4230,"em")(4231,"strong"),rN(4232,"(opcional)"),og()(),Sl(4233,"p"),rN(4234,"Texto para t\xEDtulo da coluna."),og()()(),Sl(4235,"tr",17)(4236,"td",18)(4237,"div",19)(4238,"span",20),rN(4239," property"),Wl(4240,"br"),og()()(),Sl(4241,"td",21)(4242,"code",31),rN(4243,"string"),og()(),Sl(4244,"td",24)(4245,"em")(4246,"strong"),rN(4247,"(opcional)"),og()(),Sl(4248,"p"),rN(4249,"Nome identificador da coluna."),og()()(),Sl(4250,"tr",17)(4251,"td",18)(4252,"div",19)(4253,"span",20),rN(4254," type"),Wl(4255,"br"),og()()(),Sl(4256,"td",21)(4257,"code",31),rN(4258,"string"),og()(),Sl(4259,"td",24)(4260,"em")(4261,"strong"),rN(4262,"(opcional)"),og()(),Sl(4263,"p"),rN(4264,"Tipo da coluna."),og(),Sl(4265,"p"),rN(4266,"Valores v\xE1lidos:"),og(),Sl(4267,"ul")(4268,"li")(4269,"p")(4270,"code"),rN(4271,"currency"),og(),rN(4272,": valores monet\xE1rios."),og()(),Sl(4273,"li")(4274,"p")(4275,"code"),rN(4276,"date"),og(),rN(4277,": valor de datas."),og(),Sl(4278,"ul")(4279,"li"),rN(4280,"Aceita os tipos "),Sl(4281,"em"),rN(4282,"string"),og(),rN(4283," e "),Sl(4284,"em"),rN(4285,"Date"),og(),rN(4286,` padr\xE3o do Javascript,
por exemplo: `),Sl(4287,"code"),rN(4288,"'2017-11-28'"),og(),rN(4289," ou "),Sl(4290,"code"),rN(4291,"new Date(2017, 10, 28)"),og(),rN(4292,"."),og()()(),Sl(4293,"li")(4294,"p")(4295,"code"),rN(4296,"time"),og(),rN(4297,": valor de hor\xE1rio."),og()(),Sl(4298,"li")(4299,"p")(4300,"code"),rN(4301,"number"),og(),rN(4302,": valores num\xE9ricos."),og()(),Sl(4303,"li")(4304,"p")(4305,"code"),rN(4306,"dateTime"),og(),rN(4307,": valor de data com hor\xE1rio."),og(),Sl(4308,"ul")(4309,"li"),rN(4310,"Aceita o tipo "),Sl(4311,"em"),rN(4312,"string"),og(),rN(4313," no formato "),Sl(4314,"strong"),rN(4315,"ISO-8601"),og(),rN(4316," extendido "),Sl(4317,"strong"),rN(4318,"'yyyy-mm-ddThh:mm:ss+|-hh:mm'"),og(),rN(4319,`
e o tipo `),Sl(4320,"em"),rN(4321,"Date"),og(),rN(4322," padr\xE3o do Javascript, por exemplo: "),Sl(4323,"code"),rN(4324,"'2017-11-28T00:00:00-02:00'"),og(),rN(4325," ou "),Sl(4326,"code"),rN(4327,"new Date(2017, 10, 28)"),og(),rN(4328,"."),og(),Sl(4329,"li"),rN(4330,"Aceita o tipo "),Sl(4331,"em"),rN(4332,"string"),og(),rN(4333," nos formatos "),Sl(4334,"strong"),rN(4335,"'HH:mm:ss'"),og(),rN(4336," ou "),Sl(4337,"strong"),rN(4338,"'HH:mm:ss.ffffff'"),og(),rN(4339,", por exemplo: "),Sl(4340,"code"),rN(4341,"'23:12:45'"),og(),rN(4342,"."),og()()()()()()(),Sl(4343,"h4",44)(4344,"code",5),rN(4345,"PoTableDetail"),og()(),Sl(4346,"div",2)(4347,"p"),rN(4348,"Interface para configura\xE7\xE3o do "),Sl(4349,"em"),rN(4350,"detail"),og(),rN(4351," do componente "),Sl(4352,"code"),rN(4353,"po-table"),og(),rN(4354,"."),og()(),Sl(4355,"h4",13),rN(4356,"Propriedades"),og(),Sl(4357,"table",14)(4358,"tr",15)(4359,"th",16),rN(4360,"Nome"),og(),Sl(4361,"th",16),rN(4362,"Tipo"),og(),Sl(4363,"th",16),rN(4364,"Descri\xE7\xE3o"),og()(),Sl(4365,"tr",17)(4366,"td",18)(4367,"div",19)(4368,"span",20),rN(4369," columns"),Wl(4370,"br"),og()()(),Sl(4371,"td",21)(4372,"code",111),rN(4373,"Array<PoTableDetailColumn>"),og()(),Sl(4374,"td",24)(4375,"p"),rN(4376,"Define uma lista do tipo "),Sl(4377,"code"),rN(4378,"PoTableDetailColumn"),og(),rN(4379," para as colunas do objet "),Sl(4380,"em"),rN(4381,"detail"),og(),rN(4382,". Por exemplo:"),og(),Sl(4383,"pre")(4384,"code"),rN(4385,`[
 { property: 'miles', label: 'Miles', type: 'number', format: '1.0-5' },
 { property: 'departure', label: 'Departure time', type: 'date', format: 'dd/MM/yyyy' }
]
`),og()()()(),Sl(4386,"tr",17)(4387,"td",18)(4388,"div",19)(4389,"span",20),rN(4390," hideSelect"),Wl(4391,"br"),og()()(),Sl(4392,"td",21)(4393,"code",22),rN(4394,"boolean"),og()(),Sl(4395,"td",24)(4396,"em")(4397,"strong"),rN(4398,"(opcional)"),og()(),Sl(4399,"p"),rN(4400,"Define se o checkbox de sele\xE7\xE3o do detail ser\xE1 exibido. Valor padr\xE3o 'false'."),og()()(),Sl(4401,"tr",17)(4402,"td",18)(4403,"div",19)(4404,"span",20),rN(4405," typeHeader"),Wl(4406,"br"),og()()(),Sl(4407,"td",21)(4408,"code",31),rN(4409,"string"),og()(),Sl(4410,"td",24)(4411,"em")(4412,"strong"),rN(4413,"(opcional)"),og()(),Sl(4414,"p"),rN(4415,"Define o tipo de cabe\xE7alho para o conte\xFAdo do "),Sl(4416,"em"),rN(4417,"detail"),og(),rN(4418," ."),og(),Sl(4419,"p"),rN(4420,"Valores v\xE1lidos:"),og(),Sl(4421,"ul")(4422,"li")(4423,"code"),rN(4424,"inline"),og(),rN(4425,": Atribui o cabe\xE7alho na mesma linha do "),Sl(4426,"em"),rN(4427,"detail"),og(),rN(4428,"."),og(),Sl(4429,"li")(4430,"code"),rN(4431,"top"),og(),rN(4432,": Atribui o cabe\xE7alho acima do "),Sl(4433,"em"),rN(4434,"detail"),og(),rN(4435,", id\xEAntico ao "),Sl(4436,"code"),rN(4437,"po-table"),og(),rN(4438,"."),og(),Sl(4439,"li")(4440,"code"),rN(4441,"none"),og(),rN(4442,": Remove o cabe\xE7alho do "),Sl(4443,"em"),rN(4444,"detail"),og(),rN(4445,"."),og()()()()(),Sl(4446,"h4",44)(4447,"code",5),rN(4448,"PoTableSubtitleColumn"),og()(),Sl(4449,"div",2)(4450,"p"),rN(4451,"Interface para configura\xE7\xE3o das colunas de legenda do Po-Table."),og()(),Sl(4452,"h4",13),rN(4453,"Propriedades"),og(),Sl(4454,"table",14)(4455,"tr",15)(4456,"th",16),rN(4457,"Nome"),og(),Sl(4458,"th",16),rN(4459,"Tipo"),og(),Sl(4460,"th",16),rN(4461,"Descri\xE7\xE3o"),og()(),Sl(4462,"tr",17)(4463,"td",18)(4464,"div",19)(4465,"span",20),rN(4466," color"),Wl(4467,"br"),og()()(),Sl(4468,"td",21)(4469,"code",31),rN(4470,"string"),og()(),Sl(4471,"td",24)(4472,"em")(4473,"strong"),rN(4474,"(opcional)"),og()(),Sl(4475,"p"),rN(4476,"Define a cor do "),Sl(4477,"em"),rN(4478,"status"),og(),rN(4479,"."),og(),Sl(4480,"p"),rN(4481,"Valores v\xE1lidos:"),og(),Sl(4482,"ul")(4483,"li"),Wl(4484,"span",51),Sl(4485,"code"),rN(4486,"color-01"),og()(),Sl(4487,"li"),Wl(4488,"span",52),Sl(4489,"code"),rN(4490,"color-02"),og()(),Sl(4491,"li"),Wl(4492,"span",53),Sl(4493,"code"),rN(4494,"color-03"),og()(),Sl(4495,"li"),Wl(4496,"span",54),Sl(4497,"code"),rN(4498,"color-04"),og()(),Sl(4499,"li"),Wl(4500,"span",55),Sl(4501,"code"),rN(4502,"color-05"),og()(),Sl(4503,"li"),Wl(4504,"span",56),Sl(4505,"code"),rN(4506,"color-06"),og()(),Sl(4507,"li"),Wl(4508,"span",57),Sl(4509,"code"),rN(4510,"color-07"),og()(),Sl(4511,"li"),Wl(4512,"span",58),Sl(4513,"code"),rN(4514,"color-08"),og()(),Sl(4515,"li"),Wl(4516,"span",59),Sl(4517,"code"),rN(4518,"color-09"),og()(),Sl(4519,"li"),Wl(4520,"span",60),Sl(4521,"code"),rN(4522,"color-10"),og()(),Sl(4523,"li"),Wl(4524,"span",61),Sl(4525,"code"),rN(4526,"color-11"),og()(),Sl(4527,"li"),Wl(4528,"span",62),Sl(4529,"code"),rN(4530,"color-12"),og()()(),Sl(4531,"blockquote")(4532,"p"),rN(4533,"Tamb\xE9m \xE9 poss\xEDvel utilizar as 35 cores da paleta "),Sl(4534,"strong"),rN(4535,"Caption Tag Colors"),og(),rN(4536,":"),og()(),Sl(4537,"ul")(4538,"li"),Wl(4539,"span",63),Sl(4540,"code"),rN(4541,"caption-tag-01"),og(),Wl(4542,"span",64),Sl(4543,"code"),rN(4544,"caption-tag-02"),og(),Wl(4545,"span",65),Sl(4546,"code"),rN(4547,"caption-tag-03"),og(),Wl(4548,"span",66),Sl(4549,"code"),rN(4550,"caption-tag-04"),og(),Wl(4551,"span",67),Sl(4552,"code"),rN(4553,"caption-tag-05"),og()(),Sl(4554,"li"),Wl(4555,"span",68),Sl(4556,"code"),rN(4557,"caption-tag-06"),og(),Wl(4558,"span",69),Sl(4559,"code"),rN(4560,"caption-tag-07"),og(),Wl(4561,"span",70),Sl(4562,"code"),rN(4563,"caption-tag-08"),og(),Wl(4564,"span",71),Sl(4565,"code"),rN(4566,"caption-tag-09"),og(),Wl(4567,"span",72),Sl(4568,"code"),rN(4569,"caption-tag-10"),og()(),Sl(4570,"li"),Wl(4571,"span",73),Sl(4572,"code"),rN(4573,"caption-tag-11"),og(),Wl(4574,"span",74),Sl(4575,"code"),rN(4576,"caption-tag-12"),og(),Wl(4577,"span",75),Sl(4578,"code"),rN(4579,"caption-tag-13"),og(),Wl(4580,"span",76),Sl(4581,"code"),rN(4582,"caption-tag-14"),og(),Wl(4583,"span",77),Sl(4584,"code"),rN(4585,"caption-tag-15"),og()(),Sl(4586,"li"),Wl(4587,"span",78),Sl(4588,"code"),rN(4589,"caption-tag-16"),og(),Wl(4590,"span",79),Sl(4591,"code"),rN(4592,"caption-tag-17"),og(),Wl(4593,"span",80),Sl(4594,"code"),rN(4595,"caption-tag-18"),og(),Wl(4596,"span",81),Sl(4597,"code"),rN(4598,"caption-tag-19"),og(),Wl(4599,"span",82),Sl(4600,"code"),rN(4601,"caption-tag-20"),og()(),Sl(4602,"li"),Wl(4603,"span",83),Sl(4604,"code"),rN(4605,"caption-tag-21"),og(),Wl(4606,"span",84),Sl(4607,"code"),rN(4608,"caption-tag-22"),og(),Wl(4609,"span",85),Sl(4610,"code"),rN(4611,"caption-tag-23"),og(),Wl(4612,"span",86),Sl(4613,"code"),rN(4614,"caption-tag-24"),og(),Wl(4615,"span",87),Sl(4616,"code"),rN(4617,"caption-tag-25"),og()(),Sl(4618,"li"),Wl(4619,"span",88),Sl(4620,"code"),rN(4621,"caption-tag-26"),og(),Wl(4622,"span",89),Sl(4623,"code"),rN(4624,"caption-tag-27"),og(),Wl(4625,"span",90),Sl(4626,"code"),rN(4627,"caption-tag-28"),og(),Wl(4628,"span",91),Sl(4629,"code"),rN(4630,"caption-tag-29"),og(),Wl(4631,"span",92),Sl(4632,"code"),rN(4633,"caption-tag-30"),og()(),Sl(4634,"li"),Wl(4635,"span",93),Sl(4636,"code"),rN(4637,"caption-tag-31"),og(),Wl(4638,"span",94),Sl(4639,"code"),rN(4640,"caption-tag-32"),og(),Wl(4641,"span",95),Sl(4642,"code"),rN(4643,"caption-tag-33"),og(),Wl(4644,"span",96),Sl(4645,"code"),rN(4646,"caption-tag-34"),og(),Wl(4647,"span",97),Sl(4648,"code"),rN(4649,"caption-tag-35"),og()()()()(),Sl(4650,"tr",17)(4651,"td",18)(4652,"div",19)(4653,"span",20),rN(4654," content"),Wl(4655,"br"),og()()(),Sl(4656,"td",21)(4657,"code",31),rN(4658,"string"),og()(),Sl(4659,"td",24)(4660,"p"),rN(4661,"Conte\xFAdo que ser\xE1 exibido na coluna da tabela."),og()()(),Sl(4662,"tr",17)(4663,"td",18)(4664,"div",19)(4665,"span",20),rN(4666," label"),Wl(4667,"br"),og()()(),Sl(4668,"td",21)(4669,"code",31),rN(4670,"string"),og()(),Sl(4671,"td",24)(4672,"p"),rN(4673,"Texto que ser\xE1 exibido no rodap\xE9 da tabela como legenda."),og()()(),Sl(4674,"tr",17)(4675,"td",18)(4676,"div",19)(4677,"span",20),rN(4678," value"),Wl(4679,"br"),og()()(),Sl(4680,"td",21)(4681,"code",31),rN(4682,"string "),og(),Sl(4683,"code",35),rN(4684," number"),og()(),Sl(4685,"td",24)(4686,"p"),rN(4687,"Valor que ser\xE1 usado como refer\xEAncia para exibi\xE7\xE3o do conte\xFAdo na coluna."),og()()()(),Sl(4688,"h3"),rN(4689,"Enums"),og(),Sl(4690,"h4",4)(4691,"code",5),rN(4692,"PoTableColumnSortType"),og()(),Sl(4693,"div",2)(4694,"p"),rN(4695,"Tipos de ordena\xE7\xE3o das colunas da tabela."),og()(),Sl(4696,"h4",13),rN(4697,"Propriedades"),og(),Sl(4698,"table",14)(4699,"tr",15)(4700,"th",16),rN(4701,"Nome"),og(),Sl(4702,"th",16),rN(4703,"Descri\xE7\xE3o"),og()(),Sl(4704,"tr",17)(4705,"td",18)(4706,"div",19)(4707,"span",20),rN(4708," Ascending"),Wl(4709,"br"),og()()(),Sl(4710,"td",24)(4711,"p"),rN(4712,"Ordena\xE7\xE3o ascendente"),og()()(),Sl(4713,"tr",17)(4714,"td",18)(4715,"div",19)(4716,"span",20),rN(4717," Descending"),Wl(4718,"br"),og()()(),Sl(4719,"td",24)(4720,"p"),rN(4721,"Ordena\xE7\xE3o descendente"),og()()()(),Sl(4722,"h4",4)(4723,"code",5),rN(4724,"PoTableColumnSpacing"),og()(),Sl(4725,"div",2)(4726,"p"),rN(4727,"Tipos de espa\xE7amento interno (padding) das c\xE9lulas ("),Sl(4728,"strong"),rN(4729,"p-spacing"),og(),rN(4730,") do po-table."),og()(),Sl(4731,"h4",13),rN(4732,"Propriedades"),og(),Sl(4733,"table",14)(4734,"tr",15)(4735,"th",16),rN(4736,"Nome"),og(),Sl(4737,"th",16),rN(4738,"Descri\xE7\xE3o"),og()(),Sl(4739,"tr",17)(4740,"td",18)(4741,"div",19)(4742,"span",20),rN(4743," ExtraSmall"),Wl(4744,"br"),og()()(),Sl(4745,"td",24)(4746,"p"),rN(4747,"Espa\xE7amento extra pequeno: 0.25rem (vertical) x 0.5rem (horizontal)."),og()()(),Sl(4748,"tr",17)(4749,"td",18)(4750,"div",19)(4751,"span",20),rN(4752," Small"),Wl(4753,"br"),og()()(),Sl(4754,"td",24)(4755,"p"),rN(4756,"Espa\xE7amento pequeno: 0.5rem (vertical) x 1rem (horizontal)."),og()()(),Sl(4757,"tr",17)(4758,"td",18)(4759,"div",19)(4760,"span",20),rN(4761," Medium"),Wl(4762,"br"),og()()(),Sl(4763,"td",24)(4764,"p"),rN(4765,"Espa\xE7amento m\xE9dio: 0.75rem (vertical) x 1rem (horizontal)."),og()()(),Sl(4766,"tr",17)(4767,"td",18)(4768,"div",19)(4769,"span",20),rN(4770," Large"),Wl(4771,"br"),og()()(),Sl(4772,"td",24)(4773,"p"),rN(4774,"Espa\xE7amento grande: 1rem (vertical) x 1rem (horizontal)."),og()()()()());},dependencies:[Ka],encapsulation:2,changeDetection:1})}return r})();var pt=(()=>{class r{route;router;sub;hidePoWebSample=true;samplesLength=8;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(o,l){this.route=o,this.router=l;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(o=>{let l=o.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(o){this.router.navigate([],{queryParams:{view:o},queryParamsHandling:"merge"}),this.activeTab=o;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(l){return new(l||r)(w(Xn),w(En))};static \u0275cmp=Un({type:r,selectors:[["ng-component"]],standalone:false,decls:13,vars:4,consts:[["p-title","Table",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,a){l&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return a.changeTab("doc")}),Wl(3,"sample-po-table-doc"),og(),Sl(4,"po-tab",3),ft("p-click",function(){return a.changeTab("web")}),Wl(5,"sample-po-table-basic-view")(6,"sample-po-table-labs-view")(7,"sample-po-table-with-api-view")(8,"sample-po-table-transport-view")(9,"sample-po-table-airfare-view")(10,"sample-po-table-components-view")(11,"sample-po-table-heroes-view")(12,"sample-po-table-draggable-view"),og()()()),l&2&&(rw("p-actions",a.actions),Lp(2),rw("p-active",a.activeTab==="doc"),Lp(2),rw("p-hide",a.hidePoWebSample)("p-active",a.activeTab==="web"));},dependencies:[sNe,Ume,$me,Je,Ke,Ye,tt,it,ot,rt,st,dt],encapsulation:2,changeDetection:1})}return r})();var en=[{path:"",component:pt}],ct=(()=>{class r{static \u0275fac=function(l){return new(l||r)};static \u0275mod=fe({type:r});static \u0275inj=ue$1({imports:[mL.forChild(en),mL]})}return r})();var oi=(()=>{class r{static \u0275fac=function(l){return new(l||r)};static \u0275mod=fe({type:r});static \u0275inj=ue$1({imports:[sr,ct]})}return r})();export{oi as DocPoTableModule};