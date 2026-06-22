import {f as fe,u as ue,s as sr,h as hL,w,c3 as Xn,E as En,U as Un,I,a as f,aW as Yp,n as nb,cM as Q9,cN as lm,bC as f3,H as Wl,Q as nw,bM as hN,a7 as dN,an as CO,aH as Ka,b8 as Bme,b9 as qme,F as Sl,z as eN,J as og,a1 as ft,L as Lp,ar as $x,au as dg,bs as fN,aX as Z9,aF as G9,aY as q9,aG as _k,aZ as mk,b0 as Qt,b1 as mv,c4 as b3,b4 as L3,cp as Rhe,c8 as wde,aJ as Hhe,bH as M3,c9 as Ghe,aB as wx,aM as ww,aN as e0,bd as Nx,aO as Ew,aP as n0,cn as o3,cO as Xpe,bD as Pde,cz as Pz,b5 as Whe,a2 as JE,R as we,av as ql,aw as lo,ax as uo,cP as che,b6 as Yo,cG as kO,a4 as yN,cH as oN,a5 as DN,ba as fNe,a0 as RO,aq as dx,at as fx,cQ as Mk,cR as Sk,a3 as rNe,B as yw,aA as Mx,aD as Ky,aT as nN,aE as Xy}from'./main-WP3NAV7C.js';var at=()=>({value:"Option 1"}),lt=()=>({value:"Option 2"}),rt=(a,q)=>[a,q],Ae=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-combo-basic"]],standalone:false,decls:1,vars:6,consts:[["name","combo","p-label","PO Combo",3,"p-options"]],template:function(p,n){p&1&&Wl(0,"po-combo",0),p&2&&nw("p-options",hN(3,rt,dN(1,at),dN(2,lt)));},dependencies:[f3],encapsulation:2,changeDetection:1})}return a})();var mt=a=>({"docs-sample-code-tabs":a}),Ie=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-combo-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Combo Basic"),og(),Sl(4,"a",2),ft("click",function(){return n.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-combo-basic/sample-po-combo-basic.component.html"),og(),Sl(13,"pre",7),eN(14,`<po-combo name="combo" p-label="PO Combo" [p-options]="[{ value: 'Option 1' }, { value: 'Option 2' }]"> </po-combo>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-combo-basic/sample-po-combo-basic.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-combo-basic',
  templateUrl: './sample-po-combo-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoComboBasicComponent {}
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-combo-basic"),og(),Wl(23,"hr")),p&2&&(Lp(5),$x("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,mt,n.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,Ae],encapsulation:2})}return a})();var Ge=(()=>{class a{helperText;combo;comboOptionGroupSwitch;customLiterals;debounceTime;event;fieldLabel;fieldValue;filterMinlength;filterMode;filterService;help;icon;label;literals;optionsGroup;optionsGroupList;placeholder;properties;fieldErrorMessage;option;options;selectedOptionsGroup;size;listboxPosition="bottom";filterModeOptions=[{label:"Starts With",value:"startsWith"},{label:"Contains",value:"contains"},{label:"Ends With",value:"endsWith"}];listboxPositionOptions=[{label:"top",value:"top"},{label:"bottom",value:"bottom"}];iconsOptions=[{label:"an an-building-apartment",value:"an an-building-apartment"},{label:"an an-gas-pump",value:"an an-gas-pump"},{label:"fa fa-calculator",value:"fa fa-calculator"}];propertiesOptions=[{value:"changeOnEnter",label:"Change On Enter"},{value:"disabled",label:"Disabled"},{value:"optional",label:"Optional"},{value:"disabledInitFilter",label:"Disabled Init Filter"},{value:"required",label:"Required"},{value:"showRequired",label:"Show Required"},{value:"sort",label:"Sort"},{value:"clean",label:"Clean"},{value:"disabledTabFilter",label:"Disabled Tab Filter"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"},{value:"loading",label:"Loading"},{value:"compactLabel",label:"Compact Label"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore();}addOption(){this.options=this.verifyOptionObject(this.options.concat(),this.option,this.optionsGroup),this.option={label:void 0,value:void 0};}changeEvent(m){this.event=m;}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals);}catch(m){this.customLiterals=void 0;}}optionsGroupSelection(){this.optionsGroup=this.selectedOptionsGroup;}restore(){this.helperText="",this.combo=void 0,this.comboOptionGroupSwitch=false,this.customLiterals=void 0,this.event="",this.debounceTime=void 0,this.fieldLabel="",this.fieldValue="",this.filterMinlength=void 0,this.filterService="",this.filterMode=void 0,this.help=void 0,this.label=void 0,this.literals="",this.icon=void 0,this.option={label:void 0,value:void 0},this.options=[],this.optionsGroup=void 0,this.optionsGroupList=[],this.placeholder="",this.properties=[],this.fieldErrorMessage="",this.selectedOptionsGroup=void 0,this.size="medium";}insertGroupIntoSelectInput(m){this.selectedOptionsGroup=m,this.optionsGroupList=[...this.optionsGroupList,{label:m,value:m}];}verifyOptionObject(m,p,n){let{label:d,value:c}=p;if(n){let i=m.findIndex(Ce=>Ce.label===n&&"options"in Ce);return i===-1?(this.insertGroupIntoSelectInput(n),[...m,{label:n,options:[{label:d,value:c}]}]):(m[i].options.push({label:d,value:c}),m)}return [...m,{label:d,value:c}]}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-combo-labs"]],standalone:false,decls:44,vars:62,consts:[["fOption","ngForm"],["f","ngForm"],["name","combo",1,"po-md-12",3,"ngModelChange","p-change","p-keydown","ngModel","p-helper","p-change-on-enter","p-clean","p-debounce-time","p-disabled","p-disabled-init-filter","p-disabled-tab-filter","p-field-label","p-field-value","p-filter-minlength","p-filter-mode","p-filter-service","p-help","p-icon","p-label","p-literals","p-loading","p-optional","p-options","p-placeholder","p-required","p-field-error-message","p-show-required","p-sort","p-size","p-error-limit","p-label-text-wrap","p-compact-label","p-listbox-control-position"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["p-label","Po combo options group"],["name","comboOptionGroupSwitch","p-label","Combo options group",1,"po-lg-4","po-md-12",3,"ngModelChange","ngModel"],["name","selectedsOptionsGroup","p-label","Options group list",1,"po-lg-4","po-md-6",3,"ngModelChange","p-change","ngModel","p-disabled","p-options"],["name","optionsGroup","p-label","New Options Group","p-required","",1,"po-lg-4","po-md-6",3,"ngModelChange","ngModel","p-disabled"],["p-label","Po combo options"],["name","optionLabel","p-label","Option Label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","optionValue","p-label","Option Value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add Option",1,"po-lg-2","po-md-4",3,"p-click","p-disabled"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","fieldErrorMessage","p-clean","","p-label","Field Error Message",1,"po-md-6",3,"ngModelChange","ngModel"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","icon","p-columns","4","p-label","Icon",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","filterMode","p-columns","4","p-label","Filter Mode",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","listboxPosition","p-label","Listbox Position",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","filterService","p-clean","","p-help","https://po-sample-api.onrender.com/v1/heroes","p-label","Filter Service",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel"],["name","literals","p-help",'Ex.: {"noData": "Sem dados a serem exibidos"}',"p-label","Literals",1,"po-md-12","po-lg-6",3,"ngModelChange","p-change","ngModel"],["name","fieldValue","p-clean","","p-label","Field Value",1,"po-md-6",3,"ngModelChange","ngModel"],["name","fieldLabel","p-clean","","p-label","Field Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","debounceTime","p-clean","","p-label","Debounce Time",1,"po-md-6",3,"ngModelChange","ngModel"],["name","filterMinlength","p-clean","","p-label","Filter Min Length",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(p,n){if(p&1){let d=wx();Sl(0,"po-combo",2),ww("ngModelChange",function(i){return Ky(d),nN(n.combo,i)||(n.combo=i),Xy(i)}),ft("p-change",function(){return n.changeEvent("p-change")})("p-keydown",function(){return n.changeEvent("p-keydown")}),og(),e0(),Wl(1,"po-divider"),Sl(2,"div",3),Wl(3,"po-info",4)(4,"po-info",5),og(),Wl(5,"po-divider"),Sl(6,"form",null,0),Wl(8,"po-divider",6),Sl(9,"div",3)(10,"po-switch",7),ww("ngModelChange",function(i){return Ky(d),nN(n.comboOptionGroupSwitch,i)||(n.comboOptionGroupSwitch=i),Xy(i)}),og(),e0(),Sl(11,"po-select",8),ww("ngModelChange",function(i){return Ky(d),nN(n.selectedOptionsGroup,i)||(n.selectedOptionsGroup=i),Xy(i)}),ft("p-change",function(){return n.optionsGroupSelection()}),og(),e0(),Sl(12,"po-input",9),ww("ngModelChange",function(i){return Ky(d),nN(n.optionsGroup,i)||(n.optionsGroup=i),Xy(i)}),og(),e0(),og(),Wl(13,"po-divider",10),Sl(14,"div",3)(15,"po-input",11),ww("ngModelChange",function(i){return Ky(d),nN(n.option.label,i)||(n.option.label=i),Xy(i)}),og(),e0(),Sl(16,"po-input",12),ww("ngModelChange",function(i){return Ky(d),nN(n.option.value,i)||(n.option.value=i),Xy(i)}),og(),e0(),og(),Sl(17,"div",3)(18,"po-button",13),ft("p-click",function(){return n.addOption()}),og()()(),Wl(19,"po-divider"),Sl(20,"form",null,1)(22,"po-input",14),ww("ngModelChange",function(i){return Ky(d),nN(n.label,i)||(n.label=i),Xy(i)}),og(),e0(),Sl(23,"po-input",15),ww("ngModelChange",function(i){return Ky(d),nN(n.help,i)||(n.help=i),Xy(i)}),og(),e0(),Sl(24,"po-input",16),ww("ngModelChange",function(i){return Ky(d),nN(n.helperText,i)||(n.helperText=i),Xy(i)}),og(),e0(),Sl(25,"po-input",17),ww("ngModelChange",function(i){return Ky(d),nN(n.placeholder,i)||(n.placeholder=i),Xy(i)}),og(),e0(),Sl(26,"po-input",18),ww("ngModelChange",function(i){return Ky(d),nN(n.fieldErrorMessage,i)||(n.fieldErrorMessage=i),Xy(i)}),og(),e0(),Sl(27,"div",3)(28,"po-checkbox-group",19),ww("ngModelChange",function(i){return Ky(d),nN(n.properties,i)||(n.properties=i),Xy(i)}),og(),e0(),Sl(29,"po-radio-group",20),ww("ngModelChange",function(i){return Ky(d),nN(n.icon,i)||(n.icon=i),Xy(i)}),og(),e0(),Sl(30,"po-radio-group",21),ww("ngModelChange",function(i){return Ky(d),nN(n.filterMode,i)||(n.filterMode=i),Xy(i)}),og(),e0(),Sl(31,"po-radio-group",22),ww("ngModelChange",function(i){return Ky(d),nN(n.size,i)||(n.size=i),Xy(i)}),og(),e0(),Sl(32,"po-radio-group",23),ww("ngModelChange",function(i){return Ky(d),nN(n.listboxPosition,i)||(n.listboxPosition=i),Xy(i)}),og(),e0(),og(),Sl(33,"div",3)(34,"po-input",24),ww("ngModelChange",function(i){return Ky(d),nN(n.filterService,i)||(n.filterService=i),Xy(i)}),og(),e0(),Sl(35,"po-input",25),ww("ngModelChange",function(i){return Ky(d),nN(n.literals,i)||(n.literals=i),Xy(i)}),ft("p-change",function(){return n.changeLiterals()}),og(),e0(),og(),Sl(36,"div",3)(37,"po-input",26),ww("ngModelChange",function(i){return Ky(d),nN(n.fieldValue,i)||(n.fieldValue=i),Xy(i)}),og(),e0(),Sl(38,"po-input",27),ww("ngModelChange",function(i){return Ky(d),nN(n.fieldLabel,i)||(n.fieldLabel=i),Xy(i)}),og(),e0(),og(),Sl(39,"div",3)(40,"po-number",28),ww("ngModelChange",function(i){return Ky(d),nN(n.debounceTime,i)||(n.debounceTime=i),Xy(i)}),og(),e0(),Sl(41,"po-number",29),ww("ngModelChange",function(i){return Ky(d),nN(n.filterMinlength,i)||(n.filterMinlength=i),Xy(i)}),og(),e0(),og(),Sl(42,"div",3)(43,"po-button",30),ft("p-click",function(){return n.restore()}),og()()();}if(p&2){let d=Nx(7);Ew("ngModel",n.combo),nw("p-helper",n.helperText)("p-change-on-enter",n.properties.includes("changeOnEnter"))("p-clean",n.properties.includes("clean"))("p-debounce-time",n.debounceTime)("p-disabled",n.properties.includes("disabled"))("p-disabled-init-filter",n.properties.includes("disableInitFilter"))("p-disabled-tab-filter",n.properties.includes("disabledTabFilter"))("p-field-label",n.fieldLabel)("p-field-value",n.fieldValue)("p-filter-minlength",n.filterMinlength)("p-filter-mode",n.filterMode)("p-filter-service",n.filterService)("p-help",n.help)("p-icon",n.icon)("p-label",n.label)("p-literals",n.customLiterals)("p-loading",n.properties.includes("loading"))("p-optional",n.properties.includes("optional"))("p-options",n.options)("p-placeholder",n.placeholder)("p-required",n.properties.includes("required"))("p-field-error-message",n.fieldErrorMessage)("p-show-required",n.properties.includes("showRequired"))("p-sort",n.properties.includes("sort"))("p-size",n.size)("p-error-limit",n.properties==null?null:n.properties.includes("errorLimit"))("p-label-text-wrap",n.properties==null?null:n.properties.includes("labelTextWrap"))("p-compact-label",n.properties==null?null:n.properties.includes("compactLabel"))("p-listbox-control-position",n.listboxPosition),n0(),Lp(3),nw("p-value",n.combo),Lp(),nw("p-value",n.event),Lp(6),Ew("ngModel",n.comboOptionGroupSwitch),n0(),Lp(),Ew("ngModel",n.selectedOptionsGroup),nw("p-disabled",!n.comboOptionGroupSwitch)("p-options",n.optionsGroupList),n0(),Lp(),Ew("ngModel",n.optionsGroup),nw("p-disabled",!n.comboOptionGroupSwitch),n0(),Lp(3),Ew("ngModel",n.option.label),n0(),Lp(),Ew("ngModel",n.option.value),n0(),Lp(2),nw("p-disabled",d.form.invalid),Lp(4),Ew("ngModel",n.label),n0(),Lp(),Ew("ngModel",n.help),n0(),Lp(),Ew("ngModel",n.helperText),n0(),Lp(),Ew("ngModel",n.placeholder),n0(),Lp(),Ew("ngModel",n.fieldErrorMessage),n0(),Lp(2),Ew("ngModel",n.properties),nw("p-options",n.propertiesOptions),n0(),Lp(),Ew("ngModel",n.icon),nw("p-options",n.iconsOptions),n0(),Lp(),Ew("ngModel",n.filterMode),nw("p-options",n.filterModeOptions),n0(),Lp(),Ew("ngModel",n.size),nw("p-options",n.sizeOptions),n0(),Lp(),Ew("ngModel",n.listboxPosition),nw("p-options",n.listboxPositionOptions),n0(),Lp(2),Ew("ngModel",n.filterService),n0(),Lp(),Ew("ngModel",n.literals),n0(),Lp(2),Ew("ngModel",n.fieldValue),n0(),Lp(),Ew("ngModel",n.fieldLabel),n0(),Lp(2),Ew("ngModel",n.debounceTime),n0(),Lp(),Ew("ngModel",n.filterMinlength),n0();}},dependencies:[Z9,G9,q9,_k,mk,Qt,mv,b3,f3,L3,Rhe,wde,Hhe,M3,Ghe],encapsulation:2,changeDetection:1})}return a})();var ct=a=>({"docs-sample-code-tabs":a}),je=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-combo-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Combo Labs"),og(),Sl(4,"a",2),ft("click",function(){return n.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-combo-labs/sample-po-combo-labs.component.html"),og(),Sl(13,"pre",7),eN(14,`<po-combo
  class="po-md-12"
  name="combo"
  [(ngModel)]="combo"
  [p-helper]="helperText"
  [p-change-on-enter]="properties.includes('changeOnEnter')"
  [p-clean]="properties.includes('clean')"
  [p-debounce-time]="debounceTime"
  [p-disabled]="properties.includes('disabled')"
  [p-disabled-init-filter]="properties.includes('disableInitFilter')"
  [p-disabled-tab-filter]="properties.includes('disabledTabFilter')"
  [p-field-label]="fieldLabel"
  [p-field-value]="fieldValue"
  [p-filter-minlength]="filterMinlength"
  [p-filter-mode]="filterMode"
  [p-filter-service]="filterService"
  [p-help]="help"
  [p-icon]="icon"
  [p-label]="label"
  [p-literals]="customLiterals"
  [p-loading]="properties.includes('loading')"
  [p-optional]="properties.includes('optional')"
  [p-options]="options"
  [p-placeholder]="placeholder"
  [p-required]="properties.includes('required')"
  [p-field-error-message]="fieldErrorMessage"
  [p-show-required]="properties.includes('showRequired')"
  [p-sort]="properties.includes('sort')"
  [p-size]="size"
  [p-error-limit]="$safeNavigationMigration(properties?.includes('errorLimit'))"
  [p-label-text-wrap]="$safeNavigationMigration(properties?.includes('labelTextWrap'))"
  [p-compact-label]="$safeNavigationMigration(properties?.includes('compactLabel'))"
  [p-listbox-control-position]="listboxPosition"
  (p-change)="changeEvent('p-change')"
  (p-keydown)="changeEvent('p-keydown')"
>
</po-combo>

<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="combo"> </po-info>

  <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
</div>

<po-divider />

<form #fOption="ngForm">
  <po-divider p-label="Po combo options group"></po-divider>

  <div class="po-row">
    <po-switch
      class="po-lg-4 po-md-12"
      name="comboOptionGroupSwitch"
      [(ngModel)]="comboOptionGroupSwitch"
      p-label="Combo options group"
    >
    </po-switch>

    <po-select
      class="po-lg-4 po-md-6"
      name="selectedsOptionsGroup"
      [(ngModel)]="selectedOptionsGroup"
      p-label="Options group list"
      [p-disabled]="!comboOptionGroupSwitch"
      [p-options]="optionsGroupList"
      (p-change)="optionsGroupSelection()"
    >
    </po-select>

    <po-input
      class="po-lg-4 po-md-6"
      name="optionsGroup"
      [(ngModel)]="optionsGroup"
      p-label="New Options Group"
      [p-disabled]="!comboOptionGroupSwitch"
      p-required
    >
    </po-input>
  </div>

  <po-divider p-label="Po combo options"></po-divider>

  <div class="po-row">
    <po-input class="po-md-6" name="optionLabel" [(ngModel)]="option.label" p-label="Option Label" p-required>
    </po-input>

    <po-input class="po-md-6" name="optionValue" [(ngModel)]="option.value" p-label="Option Value" p-required>
    </po-input>
  </div>

  <div class="po-row">
    <po-button class="po-lg-2 po-md-4" p-label="Add Option" [p-disabled]="fOption.form.invalid" (p-click)="addOption()">
    </po-button>
  </div>
</form>

<po-divider />

<form #f="ngForm">
  <po-input class="po-md-6" name="label" [(ngModel)]="label" p-clean p-label="Label"> </po-input>

  <po-input class="po-md-6" name="help" [(ngModel)]="help" p-clean p-label="Help"> </po-input>

  <po-input class="po-md-6" name="helperText" [(ngModel)]="helperText" p-clean p-label="Additional Help"> </po-input>

  <po-input class="po-md-6" name="placeholder" [(ngModel)]="placeholder" p-clean p-label="Placeholder"> </po-input>

  <po-input
    class="po-md-6"
    name="fieldErrorMessage"
    [(ngModel)]="fieldErrorMessage"
    p-clean
    p-label="Field Error Message"
  >
  </po-input>

  <div class="po-row">
    <po-checkbox-group
      class="po-md-12"
      name="properties"
      [(ngModel)]="properties"
      p-columns="4"
      p-label="Properties"
      [p-options]="propertiesOptions"
    >
    </po-checkbox-group>

    <po-radio-group
      class="po-md-12"
      name="icon"
      [(ngModel)]="icon"
      p-columns="4"
      p-label="Icon"
      [p-options]="iconsOptions"
    >
    </po-radio-group>

    <po-radio-group
      class="po-md-12"
      name="filterMode"
      [(ngModel)]="filterMode"
      p-columns="4"
      p-label="Filter Mode"
      [p-options]="filterModeOptions"
    >
    </po-radio-group>

    <po-radio-group
      class="po-lg-6"
      name="size"
      [(ngModel)]="size"
      p-columns="4"
      p-label="Size"
      p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
      [p-options]="sizeOptions"
    >
    </po-radio-group>

    <po-radio-group
      class="po-lg-6"
      name="listboxPosition"
      [(ngModel)]="listboxPosition"
      p-label="Listbox Position"
      [p-options]="listboxPositionOptions"
    ></po-radio-group>
  </div>

  <div class="po-row">
    <po-input
      class="po-md-12 po-lg-6"
      name="filterService"
      [(ngModel)]="filterService"
      p-clean
      p-help="https://po-sample-api.onrender.com/v1/heroes"
      p-label="Filter Service"
    >
    </po-input>

    <po-input
      class="po-md-12 po-lg-6"
      name="literals"
      [(ngModel)]="literals"
      p-help='Ex.: {"noData": "Sem dados a serem exibidos"}'
      p-label="Literals"
      (p-change)="changeLiterals()"
    >
    </po-input>
  </div>

  <div class="po-row">
    <po-input class="po-md-6" name="fieldValue" [(ngModel)]="fieldValue" p-clean p-label="Field Value"> </po-input>

    <po-input class="po-md-6" name="fieldLabel" [(ngModel)]="fieldLabel" p-clean p-label="Field Label"> </po-input>
  </div>

  <div class="po-row">
    <po-number class="po-md-6" name="debounceTime" [(ngModel)]="debounceTime" p-clean p-label="Debounce Time">
    </po-number>

    <po-number class="po-md-6" name="filterMinlength" [(ngModel)]="filterMinlength" p-clean p-label="Filter Min Length">
    </po-number>
  </div>

  <div class="po-row">
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-combo-labs/sample-po-combo-labs.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import {
  PoCheckboxGroupOption,
  PoComboLiterals,
  PoComboOption,
  PoComboOptionGroup,
  PoRadioGroupOption,
  PoSelectOption
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-combo-labs',
  templateUrl: './sample-po-combo-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoComboLabsComponent implements OnInit {
  helperText: string;
  combo: string;
  comboOptionGroupSwitch: boolean;
  customLiterals: PoComboLiterals;
  debounceTime: number;
  event: string;

  fieldLabel: string;
  fieldValue: string;
  filterMinlength: number;
  filterMode: string;
  filterService: string;

  help: string;
  icon: string;
  label: string;
  literals: string;
  optionsGroup: string;
  optionsGroupList: Array<PoSelectOption>;
  placeholder: string;
  properties: Array<string>;
  fieldErrorMessage: string;

  option: PoComboOption;
  options: Array<PoComboOption | PoComboOptionGroup>;
  selectedOptionsGroup: string;
  size: string;

  listboxPosition: string = 'bottom';

  public readonly filterModeOptions: Array<PoRadioGroupOption> = [
    { label: 'Starts With', value: 'startsWith' },
    { label: 'Contains', value: 'contains' },
    { label: 'Ends With', value: 'endsWith' }
  ];

  public readonly listboxPositionOptions: Array<any> = [
    { label: 'top', value: 'top' },
    { label: 'bottom', value: 'bottom' }
  ];

  public readonly iconsOptions: Array<PoRadioGroupOption> = [
    { label: 'an an-building-apartment', value: 'an an-building-apartment' },
    { label: 'an an-gas-pump', value: 'an an-gas-pump' },
    { label: 'fa fa-calculator', value: 'fa fa-calculator' }
  ];

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'changeOnEnter', label: 'Change On Enter' },
    { value: 'disabled', label: 'Disabled' },
    { value: 'optional', label: 'Optional' },
    { value: 'disabledInitFilter', label: 'Disabled Init Filter' },
    { value: 'required', label: 'Required' },
    { value: 'showRequired', label: 'Show Required' },
    { value: 'sort', label: 'Sort' },
    { value: 'clean', label: 'Clean' },
    { value: 'disabledTabFilter', label: 'Disabled Tab Filter' },
    { value: 'errorLimit', label: 'Limit Error Message' },
    { value: 'labelTextWrap', label: 'Label Text Wrap' },
    { value: 'loading', label: 'Loading' },
    { value: 'compactLabel', label: 'Compact Label' }
  ];

  public readonly sizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  ngOnInit() {
    this.restore();
  }

  addOption() {
    this.options = this.verifyOptionObject(this.options.concat(), this.option, this.optionsGroup);
    this.option = { label: undefined, value: undefined };
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

  optionsGroupSelection() {
    this.optionsGroup = this.selectedOptionsGroup;
  }

  restore() {
    this.helperText = '';
    this.combo = undefined;
    this.comboOptionGroupSwitch = false;
    this.customLiterals = undefined;
    this.event = '';

    this.debounceTime = undefined;
    this.fieldLabel = '';
    this.fieldValue = '';
    this.filterMinlength = undefined;
    this.filterService = '';
    this.filterMode = undefined;

    this.help = undefined;
    this.label = undefined;
    this.literals = '';
    this.icon = undefined;

    this.option = { label: undefined, value: undefined };
    this.options = [];
    this.optionsGroup = undefined;
    this.optionsGroupList = [];
    this.placeholder = '';
    this.properties = [];
    this.fieldErrorMessage = '';
    this.selectedOptionsGroup = undefined;
    this.size = 'medium';
  }

  private insertGroupIntoSelectInput(value: string) {
    this.selectedOptionsGroup = value;
    this.optionsGroupList = [...this.optionsGroupList, { label: value, value }];
  }

  private verifyOptionObject(
    options: Array<PoComboOption | PoComboOptionGroup>,
    option: PoComboOption,
    optionsGroup?: string
  ) {
    const { label, value } = option;

    if (optionsGroup) {
      const indexItem = options.findIndex(
        (optionItem: PoComboOptionGroup) => optionItem.label === optionsGroup && 'options' in optionItem
      );

      if (indexItem === -1) {
        this.insertGroupIntoSelectInput(optionsGroup);
        return [...options, { label: optionsGroup, options: [{ label, value }] }];
      }

      (options as Array<PoComboOptionGroup>)[indexItem].options.push({ label, value });
      return options;
    }

    return [...options, { label, value }];
  }
}
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-combo-labs"),og(),Wl(23,"hr")),p&2&&(Lp(5),$x("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,ct,n.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,Ge],encapsulation:2})}return a})();var Ee=(()=>{class a{getcities(){return [{label:"S\xE3o Paulo",options:[{label:"S\xE3o Paulo",value:"sao paulo"},{label:"Campinas",value:"campinas"}]},{label:"Paran\xE1",options:[{label:"S\xE3o Jos\xE9 dos Pinhais",value:"sao jose dos pinhais"},{label:"Londrina",value:"londrina"},{label:"Maring\xE1",value:"maringa"}]},{label:"Santa Catarina",options:[{label:"Joinville",value:"joinville"},{label:"Florian\xF3polis",value:"florianopolis"},{label:"Itaja\xED",value:"itajai"}]}]}getMedicalSpecialty(){return [{specialty:"Allergist",specialtyValue:"allergist"},{specialty:"Cardiologist",specialtyValue:"cardiologist"},{specialty:"General practitioner",specialtyValue:"generalPractitioner"},{specialty:"Dermatologist",specialtyValue:"dermatologist"},{specialty:"Gynecologist",specialtyValue:"gynecologist"},{specialty:"Nutritionist",specialtyValue:"nutritionist"},{specialty:"Pediatrist",specialtyValue:"pediatrist"},{specialty:"Psychiatrist",specialtyValue:"psychiatrist"},{specialty:"Orthopaedist",specialtyValue:"orthopaedist"}]}static \u0275fac=function(p){return new(p||a)};static \u0275prov=I({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();var bt=["schedulingForm"];function gt(a,q){if(a&1&&(Sl(0,"div",3),Wl(1,"po-avatar",15),Sl(2,"p",14),eN(3),og()()),a&2){let m=Mx().$implicit,p=Mx();Lp(),nw("p-src",p.getStateByLabel(m.label)),Lp(2),yw(m.label);}}function ht(a,q){if(a&1&&(Sl(0,"div",14),eN(1),og()),a&2){let m=Mx().$implicit;Lp(),yw(m.label);}}function St(a,q){if(a&1&&dx(0,gt,4,2,"div",3)(1,ht,2,1,"div",14),a&2){let m=q.$implicit;fx(m.options?0:1);}}var ze=(()=>{class a{poNotification=f(Yp);schedulingService=f(Ee);form;birthday;citiesOptions;city;email;informations;medicalSpecialty;medicalSpecialtyOptions;name;phone;typeScheduling;typeSchedulings=[{label:"Particular",value:"particular"},{label:"Health Insurance",value:"healthInsurance"}];ngOnInit(){this.citiesOptions=this.schedulingService.getcities(),this.medicalSpecialtyOptions=this.schedulingService.getMedicalSpecialty();}confirmPreAppointment(m=""){this.poNotification.success(`Great ${m}, your pre-appointment was successfully received!`),this.form.reset();}getStateByLabel(m){return `https://thf.totvs.com.br/sample/api/static/assets/${{"S\xE3o Paulo":"sp","Santa Catarina":"sc",Paran\u00E1:"pr"}[m]}.png`}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-combo-scheduling"]],viewQuery:function(p,n){if(p&1&&ql(bt,7),p&2){let d;lo(d=uo())&&(n.form=d.first);}},standalone:false,features:[we([Ee])],decls:20,vars:12,consts:[["schedulingForm","ngForm"],[1,"po-text-center"],[1,"po-font-title"],[1,"po-row"],["name","name","p-clean","","p-label","Name","p-required","",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","email","p-clean","","p-label","Email","p-placeholder","example@domain.com","p-required","",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","birthday","p-clean","","p-label","Birthday","p-placeholder","dd/mm/yyyy","p-required","",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","phone","p-clean","","p-label","Phone number","p-mask","(99) 99999-9999","p-placeholder","(99) 99999-9999","p-required","",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","city","p-icon","an an-map-trifold","p-label","Select a location","p-placeholder","Select a location","p-required","","p-sort","",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["p-combo-option-template",""],["name","typeScheduling","p-label","Type scheduling","p-required","","p-sort","",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","medicalSpecialty","p-icon","an an-flask","p-label","Medical Specialty/Exam","p-required","","p-sort","","p-field-label","specialty","p-field-value","specialtyValue",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","informations","p-help","Additional informations","p-label","Informations",1,"po-sm-12",3,"ngModelChange","ngModel"],["p-label","Schedule","p-kind","primary",1,"po-md-3",3,"p-click","p-disabled"],[1,"po-sm-10","po-md-9","po-lg-11"],["p-size","xs",1,"po-sm-2","po-md-3","po-lg-1","sample-combo-avatar-bg",3,"p-src"]],template:function(p,n){if(p&1){let d=wx();Sl(0,"div",1)(1,"div",2),eN(2,"Pre-appointment scheduling"),og()(),Sl(3,"form",null,0)(5,"div",3)(6,"po-input",4),ww("ngModelChange",function(i){return Ky(d),nN(n.name,i)||(n.name=i),Xy(i)}),og(),e0(),Sl(7,"po-email",5),ww("ngModelChange",function(i){return Ky(d),nN(n.email,i)||(n.email=i),Xy(i)}),og(),e0(),og(),Sl(8,"div",3)(9,"po-datepicker",6),ww("ngModelChange",function(i){return Ky(d),nN(n.birthday,i)||(n.birthday=i),Xy(i)}),og(),e0(),Sl(10,"po-input",7),ww("ngModelChange",function(i){return Ky(d),nN(n.phone,i)||(n.phone=i),Xy(i)}),og(),e0(),og(),Sl(11,"div",3)(12,"po-combo",8),ww("ngModelChange",function(i){return Ky(d),nN(n.city,i)||(n.city=i),Xy(i)}),JE(13,St,2,1,"ng-template",9),og(),e0(),Sl(14,"po-select",10),ww("ngModelChange",function(i){return Ky(d),nN(n.typeScheduling,i)||(n.typeScheduling=i),Xy(i)}),og(),e0(),Sl(15,"po-combo",11),ww("ngModelChange",function(i){return Ky(d),nN(n.medicalSpecialty,i)||(n.medicalSpecialty=i),Xy(i)}),og(),e0(),og(),Sl(16,"div",3)(17,"po-textarea",12),ww("ngModelChange",function(i){return Ky(d),nN(n.informations,i)||(n.informations=i),Xy(i)}),og(),e0(),og(),Sl(18,"div",3)(19,"po-button",13),ft("p-click",function(){return n.confirmPreAppointment(n.name)}),og()()();}if(p&2){let d=Nx(4);Lp(6),Ew("ngModel",n.name),n0(),Lp(),Ew("ngModel",n.email),n0(),Lp(2),Ew("ngModel",n.birthday),n0(),Lp(),Ew("ngModel",n.phone),n0(),Lp(2),Ew("ngModel",n.city),nw("p-options",n.citiesOptions),n0(),Lp(2),Ew("ngModel",n.typeScheduling),nw("p-options",n.typeSchedulings),n0(),Lp(),Ew("ngModel",n.medicalSpecialty),nw("p-options",n.medicalSpecialtyOptions),n0(),Lp(2),Ew("ngModel",n.informations),n0(),Lp(2),nw("p-disabled",d.invalid);}},dependencies:[Z9,G9,q9,_k,mk,o3,Qt,f3,Xpe,Pde,Pz,L3,Hhe,Whe],styles:[".sample-combo-avatar-bg[_ngcontent-%COMP%]{background-color:#fbfbfb}"],changeDetection:1})}return a})();var Et=a=>({"docs-sample-code-tabs":a}),Re=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-combo-scheduling-view"]],standalone:false,decls:34,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Combo - Scheduling"),og(),Sl(4,"a",2),ft("click",function(){return n.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-combo-scheduling/sample-po-combo-scheduling.component.html"),og(),Sl(13,"pre",7),eN(14,`<div class="po-text-center">
  <div class="po-font-title">Pre-appointment scheduling</div>
</div>

<form #schedulingForm="ngForm">
  <div class="po-row">
    <po-input class="po-lg-6" name="name" [(ngModel)]="name" p-clean p-label="Name" p-required> </po-input>

    <po-email
      class="po-lg-6"
      name="email"
      [(ngModel)]="email"
      p-clean
      p-label="Email"
      p-placeholder="example@domain.com"
      p-required
    >
    </po-email>
  </div>

  <div class="po-row">
    <po-datepicker
      class="po-lg-6"
      name="birthday"
      [(ngModel)]="birthday"
      p-clean
      p-label="Birthday"
      p-placeholder="dd/mm/yyyy"
      p-required
    >
    </po-datepicker>

    <po-input
      class="po-lg-6"
      name="phone"
      [(ngModel)]="phone"
      p-clean
      p-label="Phone number"
      p-mask="(99) 99999-9999"
      p-placeholder="(99) 99999-9999"
      p-required
    >
    </po-input>
  </div>

  <div class="po-row">
    <po-combo
      class="po-lg-6"
      name="city"
      [(ngModel)]="city"
      p-icon="an an-map-trifold"
      p-label="Select a location"
      p-placeholder="Select a location"
      p-required
      p-sort
      [p-options]="citiesOptions"
    >
      <ng-template p-combo-option-template let-option>
        @if (option.options) {
          <div class="po-row">
            <po-avatar
              class="po-sm-2 po-md-3 po-lg-1 sample-combo-avatar-bg"
              p-size="xs"
              [p-src]="getStateByLabel(option.label)"
            >
            </po-avatar>
            <p class="po-sm-10 po-md-9 po-lg-11">{ { option.label }}</p>
          </div>
        } @else {
          <div class="po-sm-10 po-md-9 po-lg-11">{ { option.label }}</div>
        }
      </ng-template>
    </po-combo>

    <po-select
      class="po-lg-6"
      name="typeScheduling"
      [(ngModel)]="typeScheduling"
      p-label="Type scheduling"
      p-required
      p-sort
      [p-options]="typeSchedulings"
    >
    </po-select>

    <po-combo
      class="po-lg-6"
      name="medicalSpecialty"
      [(ngModel)]="medicalSpecialty"
      p-icon="an an-flask"
      p-label="Medical Specialty/Exam"
      p-required
      p-sort
      [p-options]="medicalSpecialtyOptions"
      p-field-label="specialty"
      p-field-value="specialtyValue"
    >
    </po-combo>
  </div>

  <div class="po-row">
    <po-textarea
      class="po-sm-12"
      name="informations"
      [(ngModel)]="informations"
      p-help="Additional informations"
      p-label="Informations"
    >
    </po-textarea>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-3"
      p-label="Schedule"
      p-kind="primary"
      [p-disabled]="schedulingForm.invalid"
      (p-click)="confirmPreAppointment(name)"
    >
    </po-button>
  </div>
</form>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-combo-scheduling/sample-po-combo-scheduling.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
import { NgForm } from '@angular/forms';

import { PoComboOption, PoComboOptionGroup, PoNotificationService, PoSelectOption } from '@po-ui/ng-components';
import { SamplePoComboSchedulingService } from './sample-po-combo-scheduling.service';

@Component({
  selector: 'sample-po-combo-scheduling',
  templateUrl: './sample-po-combo-scheduling.component.html',
  styleUrls: ['./sample-po-combo-scheduling.component.css'],
  providers: [SamplePoComboSchedulingService],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoComboSchedulingComponent implements OnInit {
  private poNotification = inject(PoNotificationService);
  private schedulingService = inject(SamplePoComboSchedulingService);

  @ViewChild('schedulingForm', { static: true }) form: NgForm;

  birthday: string;
  citiesOptions: Array<PoComboOptionGroup>;
  city: string;
  email: string;
  informations: string;
  medicalSpecialty: string;
  medicalSpecialtyOptions: Array<any>;
  name: string;
  phone: string;
  typeScheduling: string;

  readonly typeSchedulings: Array<PoSelectOption> = [
    { label: 'Particular', value: 'particular' },
    { label: 'Health Insurance', value: 'healthInsurance' }
  ];

  ngOnInit() {
    this.citiesOptions = this.schedulingService.getcities();
    this.medicalSpecialtyOptions = this.schedulingService.getMedicalSpecialty();
  }

  confirmPreAppointment(name: string = '') {
    this.poNotification.success(\`Great \${name}, your pre-appointment was successfully received!\`);

    this.form.reset();
  }

  getStateByLabel(state: string) {
    const stateByLabel = {
      ['S\xE3o Paulo']: 'sp',
      ['Santa Catarina']: 'sc',
      ['Paran\xE1']: 'pr'
    };

    return \`https://thf.totvs.com.br/sample/api/static/assets/\${stateByLabel[state]}.png\`;
  }
}
`),og(),Sl(21,"label",6),eN(22,"sample-po-combo-scheduling/sample-po-combo-scheduling.service.ts"),og(),Sl(23,"pre",9),eN(24,`import { Injectable } from '@angular/core';

import { PoComboOptionGroup } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class SamplePoComboSchedulingService {
  getcities(): Array<PoComboOptionGroup> {
    return [
      {
        label: 'S\xE3o Paulo',
        options: [
          { label: 'S\xE3o Paulo', value: 'sao paulo' },
          { label: 'Campinas', value: 'campinas' }
        ]
      },
      {
        label: 'Paran\xE1',
        options: [
          { label: 'S\xE3o Jos\xE9 dos Pinhais', value: 'sao jose dos pinhais' },
          { label: 'Londrina', value: 'londrina' },
          { label: 'Maring\xE1', value: 'maringa' }
        ]
      },
      {
        label: 'Santa Catarina',
        options: [
          { label: 'Joinville', value: 'joinville' },
          { label: 'Florian\xF3polis', value: 'florianopolis' },
          { label: 'Itaja\xED', value: 'itajai' }
        ]
      }
    ];
  }

  getMedicalSpecialty() {
    return [
      { specialty: 'Allergist', specialtyValue: 'allergist' },
      { specialty: 'Cardiologist', specialtyValue: 'cardiologist' },
      { specialty: 'General practitioner', specialtyValue: 'generalPractitioner' },
      { specialty: 'Dermatologist', specialtyValue: 'dermatologist' },
      { specialty: 'Gynecologist', specialtyValue: 'gynecologist' },
      { specialty: 'Nutritionist', specialtyValue: 'nutritionist' },
      { specialty: 'Pediatrist', specialtyValue: 'pediatrist' },
      { specialty: 'Psychiatrist', specialtyValue: 'psychiatrist' },
      { specialty: 'Orthopaedist', specialtyValue: 'orthopaedist' }
    ];
  }
}
`),og()()(),Sl(25,"po-tab",10)(26,"div")(27,"label",6),eN(28,"sample-po-combo-scheduling/sample-po-combo-scheduling.component.css"),og(),Sl(29,"pre",11),eN(30,`.sample-combo-avatar-bg {
  background-color: #fbfbfb;
}
`),og()()()()(),Sl(31,"div",12),Wl(32,"sample-po-combo-scheduling"),og(),Wl(33,"hr")),p&2&&(Lp(5),$x("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,Et,n.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,ze],encapsulation:2})}return a})();var vt=["transferForm"];function xt(a,q){if(a&1&&(Sl(0,"div",3),Wl(1,"po-avatar",15),Sl(2,"div",16)(3,"div",17),eN(4),og(),Sl(5,"div",18),eN(6),og()()()),a&2){let m=q.$implicit;Lp(4),yw(m.label),Lp(2),dg("Account: ",m.value);}}var Ue=(()=>{class a{poNotification=f(Yp);form;poModal;contact;dateTransfer=new Date;typeAccount="Checking Account";value;cancelAction={label:"Cancel",action:()=>this.poModal.close()};confirmAction={label:"Confirm",action:()=>this.confirmTransfer()};typeAccounts=[{label:"Checking Account",value:"Checking Account"},{label:"Savings Account",value:"Savings Account"}];confirmTransfer(){this.poModal.close(),this.poNotification.success("Successful Transfer"),this.formReset();}transfer(){this.poModal.open();}formReset(){this.form.reset({dateTransfer:new Date,typeAccount:"Checking Account"});}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-combo-transfer"]],viewQuery:function(p,n){if(p&1&&ql(vt,7)(Yo,7),p&2){let d;lo(d=uo())&&(n.form=d.first),lo(d=uo())&&(n.poModal=d.first);}},standalone:false,decls:23,vars:15,consts:[["transferForm","ngForm"],[1,"po-text-center"],[1,"po-font-title"],[1,"po-row"],["name","typeAccount","p-label","From","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","contact","p-field-value","id","p-field-label","name","p-filter-service","https://po-sample-api.onrender.com/v1/people","p-icon","an an-user","p-label","To contact","p-placeholder","Select a contact","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-combo-option-template",""],["name","value","p-clean","","p-label","Value to transfer","p-placeholder","R$ 0,00","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","dateTransfer","p-label","Date to transfer","p-placeholder","dd/mm/yyyy","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Transfer","p-kind","primary",1,"po-md-3",3,"p-click","p-disabled"],["p-title","Do you confirm transfer?",3,"p-primary-action","p-secondary-action"],["p-label","From",1,"po-md-6",3,"p-value"],["p-label","To",1,"po-md-6",3,"p-value"],["p-label","Value",1,"po-md-6",3,"p-value"],["p-label","Date to transfer",1,"po-md-6",3,"p-value"],["p-size","sm",1,"po-sm-2","po-md-3","po-lg-1"],[1,"po-sm-10","po-md-9","po-lg-11"],[1,"po-font-text-large-bold"],[1,"po-font-text-smaller"]],template:function(p,n){if(p&1){let d=wx();Sl(0,"div",1)(1,"div",2),eN(2,"Banking Transfer"),og()(),Sl(3,"form",null,0)(5,"div",3)(6,"po-select",4),ww("ngModelChange",function(i){return Ky(d),nN(n.typeAccount,i)||(n.typeAccount=i),Xy(i)}),og(),e0(),Sl(7,"po-combo",5),ww("ngModelChange",function(i){return Ky(d),nN(n.contact,i)||(n.contact=i),Xy(i)}),JE(8,xt,7,2,"ng-template",6),og(),e0(),og(),Sl(9,"div",3)(10,"po-decimal",7),ww("ngModelChange",function(i){return Ky(d),nN(n.value,i)||(n.value=i),Xy(i)}),og(),e0(),Sl(11,"po-datepicker",8),ww("ngModelChange",function(i){return Ky(d),nN(n.dateTransfer,i)||(n.dateTransfer=i),Xy(i)}),og(),e0(),og(),Sl(12,"div",3)(13,"po-button",9),ft("p-click",function(){return n.transfer()}),og()()(),Sl(14,"po-modal",10)(15,"div",3),Wl(16,"po-info",11)(17,"po-info",12),og(),Wl(18,"po-divider"),Sl(19,"div",3),Wl(20,"po-info",13)(21,"po-info",14),yN(22,"date"),og()();}if(p&2){let d=Nx(4);Lp(6),Ew("ngModel",n.typeAccount),nw("p-options",n.typeAccounts),n0(),Lp(),Ew("ngModel",n.contact),n0(),Lp(3),Ew("ngModel",n.value),n0(),Lp(),Ew("ngModel",n.dateTransfer),n0(),Lp(2),nw("p-disabled",d.invalid),Lp(),nw("p-primary-action",n.confirmAction)("p-secondary-action",n.cancelAction),Lp(2),nw("p-value",n.typeAccount),Lp(),nw("p-value",n.contact),Lp(3),nw("p-value",n.value),Lp(),nw("p-value",oN(DN(22,13,n.dateTransfer)));}},dependencies:[Z9,G9,q9,_k,mk,o3,Qt,mv,f3,Xpe,Pde,che,Hhe,Ghe,Yo,kO],encapsulation:2,changeDetection:1})}return a})();var wt=a=>({"docs-sample-code-tabs":a}),Qe=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-combo-transfer-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Combo - Banking Transfer"),og(),Sl(4,"a",2),ft("click",function(){return n.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-combo-transfer/sample-po-combo-transfer.component.html"),og(),Sl(13,"pre",7),eN(14,`<div class="po-text-center">
  <div class="po-font-title">Banking Transfer</div>
</div>

<form #transferForm="ngForm">
  <div class="po-row">
    <po-select
      class="po-md-6"
      name="typeAccount"
      [(ngModel)]="typeAccount"
      p-label="From"
      p-required
      [p-options]="typeAccounts"
    >
    </po-select>

    <po-combo
      class="po-md-6"
      name="contact"
      [(ngModel)]="contact"
      p-field-value="id"
      p-field-label="name"
      p-filter-service="https://po-sample-api.onrender.com/v1/people"
      p-icon="an an-user"
      p-label="To contact"
      p-placeholder="Select a contact"
      p-required
    >
      <ng-template p-combo-option-template let-option>
        <div class="po-row">
          <po-avatar class="po-sm-2 po-md-3 po-lg-1" p-size="sm"></po-avatar>

          <div class="po-sm-10 po-md-9 po-lg-11">
            <div class="po-font-text-large-bold">{ { option.label }}</div>
            <div class="po-font-text-smaller">Account: { { option.value }}</div>
          </div>
        </div>
      </ng-template>
    </po-combo>
  </div>

  <div class="po-row">
    <po-decimal
      class="po-md-6"
      name="value"
      [(ngModel)]="value"
      p-clean
      p-label="Value to transfer"
      p-placeholder="R$ 0,00"
      p-required
    >
    </po-decimal>

    <po-datepicker
      class="po-md-6"
      name="dateTransfer"
      [(ngModel)]="dateTransfer"
      p-label="Date to transfer"
      p-placeholder="dd/mm/yyyy"
      p-required
    >
    </po-datepicker>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-3"
      p-label="Transfer"
      p-kind="primary"
      [p-disabled]="transferForm.invalid"
      (p-click)="transfer()"
    >
    </po-button>
  </div>
</form>

<po-modal p-title="Do you confirm transfer?" [p-primary-action]="confirmAction" [p-secondary-action]="cancelAction">
  <div class="po-row">
    <po-info class="po-md-6" p-label="From" [p-value]="typeAccount"> </po-info>

    <po-info class="po-md-6" p-label="To" [p-value]="contact"> </po-info>
  </div>

  <po-divider></po-divider>

  <div class="po-row">
    <po-info class="po-md-6" p-label="Value" [p-value]="value"> </po-info>

    <po-info class="po-md-6" p-label="Date to transfer" p-value="{ { dateTransfer | date }}"> </po-info>
  </div>
</po-modal>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-combo-transfer/sample-po-combo-transfer.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
import { NgForm } from '@angular/forms';

import { PoModalAction, PoModalComponent, PoNotificationService, PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-combo-transfer',
  templateUrl: './sample-po-combo-transfer.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoComboTransferComponent {
  private poNotification = inject(PoNotificationService);

  @ViewChild('transferForm', { static: true }) form: NgForm;
  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;

  contact: any;
  dateTransfer: Date = new Date();
  typeAccount: string = 'Checking Account';
  value: number;

  cancelAction: PoModalAction = {
    label: 'Cancel',
    action: () => this.poModal.close()
  };

  confirmAction: PoModalAction = {
    label: 'Confirm',
    action: () => this.confirmTransfer()
  };

  readonly typeAccounts: Array<PoSelectOption> = [
    { label: 'Checking Account', value: 'Checking Account' },
    { label: 'Savings Account', value: 'Savings Account' }
  ];

  confirmTransfer() {
    this.poModal.close();

    this.poNotification.success('Successful Transfer');

    this.formReset();
  }

  transfer() {
    this.poModal.open();
  }

  private formReset() {
    this.form.reset({
      dateTransfer: new Date(),
      typeAccount: 'Checking Account'
    });
  }
}
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-combo-transfer"),og(),Wl(23,"hr")),p&2&&(Lp(5),$x("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,wt,n.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,Ue],encapsulation:2})}return a})();function Pt(a,q){if(a&1&&(Sl(0,"div",0),Wl(1,"po-info",3)(2,"po-info",4)(3,"po-info",5),og()),a&2){let m=q;Lp(),nw("p-value",m.name),Lp(),nw("p-value",m.nickname),Lp(),nw("p-value",m.email);}}var Ke=(()=>{class a{http=f(nb);hero$;heroName;get knowMoreLabel(){return this.heroName?"Know more":void 0}knowMore(m){window.open(`http://google.com/search?q=${m}`,"_blank");}onChangeHero(m){this.hero$=this.getHero(m);}getHero(m){return this.http.get(`https://po-sample-api.onrender.com/v1/heroes/${m}`)}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-combo-heroes"]],standalone:false,decls:5,vars:5,consts:[[1,"po-row"],[1,"po-lg-6",3,"p-primary-action","p-primary-label"],["name","heroName","p-field-label","nickname","p-field-value","name","p-filter-service","https://po-sample-api.onrender.com/v1/heroes","p-label","Search a Hero","p-sort","",3,"ngModelChange","p-change","ngModel"],["p-label","Name",1,"po-md-4",3,"p-value"],["p-label","Nickname",1,"po-md-4",3,"p-value"],["p-label","Email",1,"po-md-4",3,"p-value"]],template:function(p,n){if(p&1&&(Sl(0,"div",0)(1,"po-widget",1),ft("p-primary-action",function(){return n.knowMore(n.heroName)}),Sl(2,"po-combo",2),ww("ngModelChange",function(c){return nN(n.heroName,c)||(n.heroName=c),c}),ft("p-change",function(c){return n.onChangeHero(c)}),og(),e0(),dx(3,Pt,4,3,"div",0),yN(4,"async"),og()()),p&2){let d;Lp(),nw("p-primary-label",n.knowMoreLabel),Lp(),Ew("ngModel",n.heroName),n0(),Lp(),fx((d=DN(4,3,n.hero$))?3:-1,d);}},dependencies:[G9,_k,f3,Ghe,fNe,RO],encapsulation:2,changeDetection:1})}return a})();var Tt=a=>({"docs-sample-code-tabs":a}),Je=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-combo-heroes-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Combo - Heroes"),og(),Sl(4,"a",2),ft("click",function(){return n.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-combo-heroes/sample-po-combo-heroes.component.html"),og(),Sl(13,"pre",7),eN(14,`<div class="po-row">
  <po-widget class="po-lg-6" [p-primary-label]="knowMoreLabel" (p-primary-action)="knowMore(heroName)">
    <po-combo
      name="heroName"
      [(ngModel)]="heroName"
      p-field-label="nickname"
      p-field-value="name"
      p-filter-service="https://po-sample-api.onrender.com/v1/heroes"
      p-label="Search a Hero"
      p-sort
      (p-change)="onChangeHero($event)"
    >
    </po-combo>

    @if (hero$ | async; as hero) {
      <div class="po-row">
        <po-info class="po-md-4" p-label="Name" [p-value]="hero.name"> </po-info>
        <po-info class="po-md-4" p-label="Nickname" [p-value]="hero.nickname"> </po-info>
        <po-info class="po-md-4" p-label="Email" [p-value]="hero.email"> </po-info>
      </div>
    }
  </po-widget>
</div>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-combo-heroes/sample-po-combo-heroes.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { HttpClient } from '@angular/common/http';
import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

import { Observable } from 'rxjs';

@Component({
  selector: 'sample-po-combo-heroes',
  templateUrl: './sample-po-combo-heroes.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoComboHeroesComponent {
  private http = inject(HttpClient);

  hero$: Observable<any>;
  heroName: string;

  get knowMoreLabel() {
    return this.heroName ? 'Know more' : undefined;
  }

  knowMore(heroName: string) {
    window.open(\`http://google.com/search?q=\${heroName}\`, '_blank');
  }

  onChangeHero(heroName: string) {
    this.hero$ = this.getHero(heroName);
  }

  private getHero(heroName: string) {
    return this.http.get(\`https://po-sample-api.onrender.com/v1/heroes/\${heroName}\`);
  }
}
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-combo-heroes"),og(),Wl(23,"hr")),p&2&&(Lp(5),$x("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,Tt,n.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,Ke],encapsulation:2})}return a})();function Lt(a,q){if(a&1&&(Sl(0,"div",0),Wl(1,"po-info",4)(2,"po-info",5)(3,"po-info",6),og()),a&2){let m=q;Lp(),nw("p-value",m.name),Lp(),nw("p-value",m.nickname),Lp(),nw("p-value",m.email);}}var Ye=(()=>{class a{http=f(nb);formBuilder=f(Q9);form;hero$;ngOnInit(){this.form=this.formBuilder.group({hero:[null,lm.required]});}get knowMoreLabel(){return this.form.valid?"Know more":void 0}knowMore(){let m=this.form.get("hero").value;window.open(`http://google.com/search?q=${m}`,"_blank");}onChangeHero(m){this.hero$=this.getHero(m);}getHero(m){return this.http.get(`https://po-sample-api.onrender.com/v1/heroes/${m}`)}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-combo-heroes-reactive-form"]],standalone:false,decls:6,vars:5,consts:[[1,"po-row"],[1,"po-lg-6",3,"p-primary-action","p-primary-label"],[3,"formGroup"],["name","heroName","formControlName","hero","p-field-label","nickname","p-field-value","name","p-filter-service","https://po-sample-api.onrender.com/v1/heroes","p-label","Search a Hero","p-sort","",3,"p-change"],["p-label","Name",1,"po-md-4",3,"p-value"],["p-label","Nickname",1,"po-md-4",3,"p-value"],["p-label","Email",1,"po-md-4",3,"p-value"]],template:function(p,n){if(p&1&&(Sl(0,"div",0)(1,"po-widget",1),ft("p-primary-action",function(){return n.knowMore()}),Sl(2,"div",2)(3,"po-combo",3),ft("p-change",function(c){return n.onChangeHero(c)}),og(),e0(),og(),dx(4,Lt,4,3,"div",0),yN(5,"async"),og()()),p&2){let d;Lp(),nw("p-primary-label",n.knowMoreLabel),Lp(),nw("formGroup",n.form),Lp(),n0(),Lp(),fx((d=DN(5,3,n.hero$))?4:-1,d);}},dependencies:[G9,q9,Mk,Sk,f3,Ghe,fNe,RO],encapsulation:2,changeDetection:1})}return a})();var Dt=a=>({"docs-sample-code-tabs":a}),Xe=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-combo-heroes-reactive-form-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Combo - Heroes Reactive Form"),og(),Sl(4,"a",2),ft("click",function(){return n.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-combo-heroes-reactive-form/sample-po-combo-heroes-reactive-form.component.html"),og(),Sl(13,"pre",7),eN(14,`<div class="po-row">
  <po-widget class="po-lg-6" [p-primary-label]="knowMoreLabel" (p-primary-action)="knowMore()">
    <div [formGroup]="form">
      <po-combo
        name="heroName"
        formControlName="hero"
        p-field-label="nickname"
        p-field-value="name"
        p-filter-service="https://po-sample-api.onrender.com/v1/heroes"
        p-label="Search a Hero"
        p-sort
        (p-change)="onChangeHero($event)"
      >
      </po-combo>
    </div>

    @if (hero$ | async; as hero) {
      <div class="po-row">
        <po-info class="po-md-4" p-label="Name" [p-value]="hero.name"> </po-info>
        <po-info class="po-md-4" p-label="Nickname" [p-value]="hero.nickname"> </po-info>
        <po-info class="po-md-4" p-label="Email" [p-value]="hero.email"> </po-info>
      </div>
    }
  </po-widget>
</div>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-combo-heroes-reactive-form/sample-po-combo-heroes-reactive-form.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

import { Observable } from 'rxjs';

@Component({
  selector: 'sample-po-combo-heroes-reactive-form',
  templateUrl: './sample-po-combo-heroes-reactive-form.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoComboHeroesReactiveFormComponent implements OnInit {
  private http = inject(HttpClient);
  private formBuilder = inject(UntypedFormBuilder);

  form: UntypedFormGroup;
  hero$: Observable<any>;

  ngOnInit() {
    this.form = this.formBuilder.group({
      hero: [null, Validators.required]
    });
  }

  get knowMoreLabel() {
    return this.form.valid ? 'Know more' : undefined;
  }

  knowMore() {
    const heroName = this.form.get('hero').value;

    window.open(\`http://google.com/search?q=\${heroName}\`, '_blank');
  }

  onChangeHero(heroName: string) {
    this.hero$ = this.getHero(heroName);
  }

  private getHero(heroName: string) {
    return this.http.get(\`https://po-sample-api.onrender.com/v1/heroes/\${heroName}\`);
  }
}
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-combo-heroes-reactive-form"),og(),Wl(23,"hr")),p&2&&(Lp(5),$x("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,Dt,n.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,Ye],encapsulation:2})}return a})();function qt(a,q){if(a&1&&(Sl(0,"div",0),Wl(1,"po-info",3)(2,"po-info",4)(3,"po-info",5),og()),a&2){let m=q;Lp(),nw("p-value",m.name),Lp(),nw("p-value",m.nickname),Lp(),nw("p-value",m.email);}}var Ze=(()=>{class a{http=f(nb);peopleName;people$;onChangePeople(m){this.people$=this.getPeople(m);}getPeople(m){return this.http.get(`https://po-sample-api.onrender.com/v1/people/${m}`)}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-combo-infinity-scroll"]],standalone:false,decls:5,vars:5,consts:[[1,"po-row"],[1,"po-lg-6"],["p-filter-service","https://po-sample-api.onrender.com/v1/people","p-label","People","name","people","p-field-label","name","p-field-value","id",3,"ngModelChange","p-change","ngModel","p-infinite-scroll"],["p-label","Name",1,"po-md-4",3,"p-value"],["p-label","Nickname",1,"po-md-4",3,"p-value"],["p-label","Email",1,"po-md-4",3,"p-value"]],template:function(p,n){if(p&1&&(Sl(0,"div",0)(1,"po-widget",1)(2,"po-combo",2),ww("ngModelChange",function(c){return nN(n.peopleName,c)||(n.peopleName=c),c}),ft("p-change",function(c){return n.onChangePeople(c)}),og(),e0(),dx(3,qt,4,3,"div",0),yN(4,"async"),og()()),p&2){let d;Lp(2),Ew("ngModel",n.peopleName),nw("p-infinite-scroll",true),n0(),Lp(),fx((d=DN(4,3,n.people$))?3:-1,d);}},dependencies:[G9,_k,f3,Ghe,fNe,RO],encapsulation:2,changeDetection:1})}return a})();var Nt=a=>({"docs-sample-code-tabs":a}),$e=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-combo-infinity-scroll-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Combo - Inifity Scroll"),og(),Sl(4,"a",2),ft("click",function(){return n.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-combo-infinity-scroll/sample-po-combo-infinity-scroll.component.html"),og(),Sl(13,"pre",7),eN(14,`<div class="po-row">
  <po-widget class="po-lg-6">
    <po-combo
      p-filter-service="https://po-sample-api.onrender.com/v1/people"
      p-label="People"
      name="people"
      [(ngModel)]="peopleName"
      (p-change)="onChangePeople($event)"
      [p-infinite-scroll]="true"
      p-field-label="name"
      p-field-value="id"
    ></po-combo>

    @if (people$ | async; as people) {
      <div class="po-row">
        <po-info class="po-md-4" p-label="Name" [p-value]="people.name"> </po-info>
        <po-info class="po-md-4" p-label="Nickname" [p-value]="people.nickname"> </po-info>
        <po-info class="po-md-4" p-label="Email" [p-value]="people.email"> </po-info>
      </div>
    }
  </po-widget>
</div>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-combo-infinity-scroll/sample-po-combo-infinity-scroll.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { HttpClient } from '@angular/common/http';
import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'sample-po-combo-infinity-scroll',
  templateUrl: './sample-po-combo-infinity-scroll.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoComboInfinityScrollComponent {
  private http = inject(HttpClient);

  peopleName: string;
  people$: Observable<any>;

  onChangePeople(peopleId: string) {
    this.people$ = this.getPeople(peopleId);
  }

  private getPeople(peopleId: string) {
    return this.http.get(\`https://po-sample-api.onrender.com/v1/people/\${peopleId}\`);
  }
}
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-combo-infinity-scroll"),og(),Wl(23,"hr")),p&2&&(Lp(5),$x("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,Nt,n.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,Ze],encapsulation:2})}return a})();var Bt=["bookingForm"],Ht=["datepicker"],et=(()=>{class a{poNotification=f(Yp);form;datepickerComponent;adults=1;category=false;checkin;checkout;children=0;hotel;rooms=1;filterParams={};adultsOptions=[{label:"1 Adult",value:1},{label:"2 Adults",value:2},{label:"3 Adults",value:3},{label:"4 Adults",value:4}];childrenOptions=[{label:"No Child",value:0},{label:"1 Child",value:1},{label:"2 Children",value:2}];roomsOptions=[{label:"1 Room",value:1},{label:"2 Rooms",value:2},{label:"3 Rooms",value:3}];booking(){this.poNotification.success("Hotel booked successfully"),this.formReset(),this.datepickerComponent.focus();}onChangeParams(m){this.filterParams=m?{category:"Luxo"}:{},this.hotel=void 0;}formReset(){this.form.reset({adults:1,category:false,children:0,rooms:1});}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-combo-hotels"]],viewQuery:function(p,n){if(p&1&&ql(Bt,7)(Ht,7),p&2){let d;lo(d=uo())&&(n.form=d.first),lo(d=uo())&&(n.datepickerComponent=d.first);}},standalone:false,decls:18,vars:14,consts:[["bookingForm","ngForm"],["datepicker",""],[1,"po-text-center"],[1,"po-font-title"],[1,"po-row"],["name","checkin","p-label","Check In","p-placeholder","dd/mm/yyyy","p-required","",1,"po-md-4",3,"ngModelChange","ngModel","p-max-date"],["name","checkout","p-label","Check Out","p-placeholder","dd/mm/yyyy","p-required","",1,"po-md-4",3,"ngModelChange","ngModel","p-min-date"],["name","switch","p-label-off","No, thank you.","p-label-on","Yes, please.","p-label","Only Luxury Category",1,"po-md-4",3,"ngModelChange","p-change","ngModel"],["name","rooms","p-label","Rooms",1,"po-md-4",3,"ngModelChange","ngModel","p-options"],["name","children","p-label","Children",1,"po-md-4",3,"ngModelChange","ngModel","p-options"],["name","adults","p-label","Adults",1,"po-md-4",3,"ngModelChange","ngModel","p-options"],["name","hotel","p-debounce-time","500","p-disabled-init-filter","","p-filter-minlength","1","p-icon","an an-magnifying-glass","p-required","","p-field-label","name","p-field-value","value","p-label","Search a hotel","p-sort","","p-filter-service","https://po-sample-api.onrender.com/v1/hotels","p-listbox-control-position","top",1,"po-sm-12",3,"ngModelChange","ngModel","p-filter-params"],["p-label","Booking","p-kind","primary",1,"po-md-3",3,"p-click","p-disabled"]],template:function(p,n){if(p&1){let d=wx();Sl(0,"div",2)(1,"div",3),eN(2,"Booking a Hotel"),og()(),Sl(3,"form",null,0)(5,"div",4)(6,"po-datepicker",5,1),ww("ngModelChange",function(i){return Ky(d),nN(n.checkin,i)||(n.checkin=i),Xy(i)}),og(),e0(),Sl(8,"po-datepicker",6),ww("ngModelChange",function(i){return Ky(d),nN(n.checkout,i)||(n.checkout=i),Xy(i)}),og(),e0(),Sl(9,"po-switch",7),ww("ngModelChange",function(i){return Ky(d),nN(n.category,i)||(n.category=i),Xy(i)}),ft("p-change",function(i){return n.onChangeParams(i)}),og(),e0(),og(),Sl(10,"div",4)(11,"po-select",8),ww("ngModelChange",function(i){return Ky(d),nN(n.rooms,i)||(n.rooms=i),Xy(i)}),og(),e0(),Sl(12,"po-select",9),ww("ngModelChange",function(i){return Ky(d),nN(n.children,i)||(n.children=i),Xy(i)}),og(),e0(),Sl(13,"po-select",10),ww("ngModelChange",function(i){return Ky(d),nN(n.adults,i)||(n.adults=i),Xy(i)}),og(),e0(),og(),Sl(14,"div",4)(15,"po-combo",11),ww("ngModelChange",function(i){return Ky(d),nN(n.hotel,i)||(n.hotel=i),Xy(i)}),og(),e0(),og(),Sl(16,"div",4)(17,"po-button",12),ft("p-click",function(){return n.booking()}),og()()();}if(p&2){let d=Nx(4);Lp(6),Ew("ngModel",n.checkin),nw("p-max-date",n.checkout),n0(),Lp(2),Ew("ngModel",n.checkout),nw("p-min-date",n.checkin),n0(),Lp(),Ew("ngModel",n.category),n0(),Lp(2),Ew("ngModel",n.rooms),nw("p-options",n.roomsOptions),n0(),Lp(),Ew("ngModel",n.children),nw("p-options",n.childrenOptions),n0(),Lp(),Ew("ngModel",n.adults),nw("p-options",n.adultsOptions),n0(),Lp(2),Ew("ngModel",n.hotel),nw("p-filter-params",n.filterParams),n0(),Lp(2),nw("p-disabled",d.invalid);}},dependencies:[Z9,G9,q9,_k,mk,Qt,f3,Pde,Hhe,M3],encapsulation:2,changeDetection:1})}return a})();var It=a=>({"docs-sample-code-tabs":a}),tt=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-combo-hotels-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Combo - Booking Hotel"),og(),Sl(4,"a",2),ft("click",function(){return n.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-combo-hotels/sample-po-combo-hotels.component.html"),og(),Sl(13,"pre",7),eN(14,`<div class="po-text-center">
  <div class="po-font-title">Booking a Hotel</div>
</div>

<form #bookingForm="ngForm">
  <div class="po-row">
    <po-datepicker
      #datepicker
      class="po-md-4"
      name="checkin"
      [(ngModel)]="checkin"
      p-label="Check In"
      p-placeholder="dd/mm/yyyy"
      p-required
      [p-max-date]="checkout"
    >
    </po-datepicker>

    <po-datepicker
      class="po-md-4"
      name="checkout"
      [(ngModel)]="checkout"
      p-label="Check Out"
      p-placeholder="dd/mm/yyyy"
      p-required
      [p-min-date]="checkin"
    >
    </po-datepicker>

    <po-switch
      class="po-md-4"
      name="switch"
      [(ngModel)]="category"
      p-label-off="No, thank you."
      p-label-on="Yes, please."
      p-label="Only Luxury Category"
      (p-change)="onChangeParams($event)"
    >
    </po-switch>
  </div>

  <div class="po-row">
    <po-select class="po-md-4" name="rooms" [(ngModel)]="rooms" p-label="Rooms" [p-options]="roomsOptions"> </po-select>

    <po-select class="po-md-4" name="children" [(ngModel)]="children" p-label="Children" [p-options]="childrenOptions">
    </po-select>

    <po-select class="po-md-4" name="adults" [(ngModel)]="adults" p-label="Adults" [p-options]="adultsOptions">
    </po-select>
  </div>

  <div class="po-row">
    <po-combo
      class="po-sm-12"
      name="hotel"
      [(ngModel)]="hotel"
      p-debounce-time="500"
      p-disabled-init-filter
      p-filter-minlength="1"
      p-icon="an an-magnifying-glass"
      p-required
      p-field-label="name"
      p-field-value="value"
      p-label="Search a hotel"
      p-sort
      p-filter-service="https://po-sample-api.onrender.com/v1/hotels"
      p-listbox-control-position="top"
      [p-filter-params]="filterParams"
    >
    </po-combo>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-3"
      p-label="Booking"
      p-kind="primary"
      [p-disabled]="bookingForm.invalid"
      (p-click)="booking()"
    >
    </po-button>
  </div>
</form>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-combo-hotels/sample-po-combo-hotels.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
import { NgForm } from '@angular/forms';

import { PoDatepickerComponent, PoNotificationService, PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-combo-hotels',
  templateUrl: './sample-po-combo-hotels.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoComboHotelsComponent {
  private poNotification = inject(PoNotificationService);

  @ViewChild('bookingForm', { static: true }) form: NgForm;
  @ViewChild('datepicker', { static: true }) datepickerComponent: PoDatepickerComponent;

  adults: number = 1;
  category: boolean = false;
  checkin: Date;
  checkout: Date;
  children: number = 0;
  hotel: string;
  rooms: number = 1;
  filterParams = {};

  readonly adultsOptions: Array<PoSelectOption> = [
    { label: '1 Adult', value: 1 },
    { label: '2 Adults', value: 2 },
    { label: '3 Adults', value: 3 },
    { label: '4 Adults', value: 4 }
  ];

  readonly childrenOptions: Array<PoSelectOption> = [
    { label: 'No Child', value: 0 },
    { label: '1 Child', value: 1 },
    { label: '2 Children', value: 2 }
  ];

  readonly roomsOptions: Array<PoSelectOption> = [
    { label: '1 Room', value: 1 },
    { label: '2 Rooms', value: 2 },
    { label: '3 Rooms', value: 3 }
  ];

  booking() {
    this.poNotification.success('Hotel booked successfully');

    this.formReset();

    this.datepickerComponent.focus();
  }

  onChangeParams(isLuxury: boolean) {
    this.filterParams = isLuxury ? { category: 'Luxo' } : {};
    this.hotel = undefined;
  }

  private formReset() {
    this.form.reset({
      adults: 1,
      category: false,
      children: 0,
      rooms: 1
    });
  }
}
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-combo-hotels"),og(),Wl(23,"hr")),p&2&&(Lp(5),$x("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,It,n.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,et],encapsulation:2})}return a})();var ot=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-combo-doc"]],standalone:false,decls:1854,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoComboFilterMode"],["pan","",1,"docs-api-property-type","any"],["pan","",1,"docs-api-property-type","PoComboFilter"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","'top'"],["pan","",1,"docs-api-property-type","'bottom'"],["pan","",1,"docs-api-property-type","PoComboLiterals"],["href","/documentation/po-i18n"],["pan","",1,"docs-api-property-type","Array<PoComboOption"],["pan","",1,"docs-api-property-type","PoComboOptionGroup"],["pan","",1,"docs-api-property-type","any>"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-helper"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type"],["pan","",1,"docs-api-property-type","Array<PoComboOption>"]],template:function(p,n){p&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),eN(3,"import { PoFieldModule } from '@po-ui/ng-components';"),og()(),Sl(4,"div",2)(5,"p"),eN(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),og(),Sl(7,"blockquote")(8,"p"),eN(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),Sl(10,"code"),eN(11,"FormsModule"),og(),eN(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Sl(13,"code"),eN(14,"ReactiveFormsModule"),og(),eN(15,", ambos nativos do Angular."),og()()(),Sl(16,"h3",3),eN(17,"Componente"),og(),Sl(18,"h4",4)(19,"code",5),eN(20,"PoComboComponent"),og()(),Sl(21,"div",2)(22,"p"),eN(23,"O "),Sl(24,"code"),eN(25,"po-combo"),og(),eN(26," exibe uma lista de op\xE7\xF5es com f\xE1cil sele\xE7\xE3o e filtragem."),og(),Sl(27,"p"),eN(28,"Al\xE9m da exibi\xE7\xE3o padr\xE3o, nele \xE9 poss\xEDvel listar as op\xF5es em agrupamentos."),og(),Sl(29,"p"),eN(30,"\xC9 poss\xEDvel selecionar e navegar entre as op\xE7\xF5es da lista tanto atrav\xE9s do "),Sl(31,"em"),eN(32,"mouse"),og(),eN(33,` quanto do teclado. No teclado navegue com
as setas e pressione `),Sl(34,"em"),eN(35,"Enter"),og(),eN(36," na op\xE7\xE3o que desejar."),og(),Sl(37,"p"),eN(38,"Com ele tamb\xE9m \xE9 poss\xEDvel definir uma lista \xE0 partir da requisi\xE7\xE3o de um servi\xE7o definido em "),Sl(39,"code"),eN(40,"p-filter-service"),og(),eN(41,"."),og(),Sl(42,"p"),eN(43,"Em "),Sl(44,"code"),eN(45,"p-filter-mode"),og(),eN(46,", o filtro poder\xE1 ser configurado para buscar op\xF5es que correspondam ao in\xEDcio, fim ou que contenha o valor digitado."),og(),Sl(47,"p"),eN(48,"O "),Sl(49,"code"),eN(50,"po-combo"),og(),eN(51," guarda o \xFAltimo valor caso o usu\xE1rio desista de uma busca, deixando o campo ou pressionando "),Sl(52,"em"),eN(53,"Esc"),og(),eN(54,`. Caso seja digitado no
campo de busca a descri\xE7\xE3o completa de um item, ent\xE3o a sele\xE7\xE3o ser\xE1 automaticamente efetuada ao deixar o campo ou pressionando `),Sl(55,"em"),eN(56,"Enter"),og(),eN(57,"."),og(),Sl(58,"p"),eN(59,`Utilizando po-combo com servi\xE7o, \xE9 possivel digitar um valor no campo de entrada e pressionar a tecla 'tab' para que o componente
fa\xE7a uma requisi\xE7\xE3o \xE0 URL informada passando o valor digitado no campo. Se encontrado o valor, ent\xE3o o mesmo ser\xE1 selecionado, caso
n\xE3o seja encontrado, ent\xE3o a lista de itens voltar\xE1 para o estado inicial.`),og(),Sl(60,"h4"),eN(61,"Tokens customiz\xE1veis"),og(),Sl(62,"p"),eN(63,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),og(),Sl(64,"blockquote")(65,"p"),eN(66,"Para maiores informa\xE7\xF5es, acesse o guia "),Sl(67,"a",6),eN(68,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),eN(69,"."),og()(),Sl(70,"table")(71,"thead")(72,"tr")(73,"th"),eN(74,"Propriedade"),og(),Sl(75,"th"),eN(76,"Descri\xE7\xE3o"),og(),Sl(77,"th"),eN(78,"Valor Padr\xE3o"),og()()(),Sl(79,"tbody")(80,"tr")(81,"td")(82,"strong"),eN(83,"Default Values"),og()(),Wl(84,"td")(85,"td"),og(),Sl(86,"tr")(87,"td")(88,"code"),eN(89,"--font-family"),og()(),Sl(90,"td"),eN(91,"Fam\xEDlia tipogr\xE1fica usada"),og(),Sl(92,"td")(93,"code"),eN(94,"var(--font-family-theme)"),og()()(),Sl(95,"tr")(96,"td")(97,"code"),eN(98,"--font-size"),og()(),Sl(99,"td"),eN(100,"Tamanho da fonte"),og(),Sl(101,"td")(102,"code"),eN(103,"var(--font-size-default)"),og()()(),Sl(104,"tr")(105,"td")(106,"code"),eN(107,"--text-color"),og()(),Sl(108,"td"),eN(109,"Cor do texto"),og(),Sl(110,"td")(111,"code"),eN(112,"var(--color-neutral-dark-90)"),og()()(),Sl(113,"tr")(114,"td")(115,"code"),eN(116,"--text-color-placeholder"),og()(),Sl(117,"td"),eN(118,"Cor do texto no placeholder"),og(),Sl(119,"td")(120,"code"),eN(121,"var(--color-neutral-light-30)"),og()()(),Sl(122,"tr")(123,"td")(124,"code"),eN(125,"--color"),og()(),Sl(126,"td"),eN(127,"Cor principal do Combo"),og(),Sl(128,"td")(129,"code"),eN(130,"var(--color-neutral-dark-70)"),og()()(),Sl(131,"tr")(132,"td")(133,"code"),eN(134,"--background"),og()(),Sl(135,"td"),eN(136,"Cor de background"),og(),Sl(137,"td")(138,"code"),eN(139,"var(--color-neutral-light-05)"),og()()(),Sl(140,"tr")(141,"td")(142,"code"),eN(143,"--border-radius"),og()(),Sl(144,"td"),eN(145,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),og(),Sl(146,"td")(147,"code"),eN(148,"var(--border-width-lg)"),og()()(),Sl(149,"tr")(150,"td")(151,"code"),eN(152,"--min-width"),og()(),Sl(153,"td"),eN(154,"Largura m\xEDnima do combo"),og(),Sl(155,"td")(156,"code"),eN(157,"150px"),og()()(),Sl(158,"tr")(159,"td")(160,"code"),eN(161,"--field-container-title-justify"),og()(),Sl(162,"td"),eN(163,"Alinhamento horizontal do t\xEDtulo ("),Sl(164,"code"),eN(165,"justify-content"),og(),eN(166,")"),og(),Sl(167,"td")(168,"code"),eN(169,"space-between"),og()()(),Sl(170,"tr")(171,"td")(172,"code"),eN(173,"--field-container-title-flex"),og()(),Sl(174,"td"),eN(175,"Flex do t\xEDtulo ("),Sl(176,"code"),eN(177,"flex"),og(),eN(178,")"),og(),Sl(179,"td")(180,"code"),eN(181,"1 auto"),og()()(),Sl(182,"tr")(183,"td")(184,"strong"),eN(185,"Hover"),og()(),Wl(186,"td")(187,"td"),og(),Sl(188,"tr")(189,"td")(190,"code"),eN(191,"--color-hover"),og()(),Sl(192,"td"),eN(193,"Cor principal no estado hover"),og(),Sl(194,"td")(195,"code"),eN(196,"var(--color-action-hover)"),og()()(),Sl(197,"tr")(198,"td")(199,"code"),eN(200,"--background-hover"),og()(),Sl(201,"td"),eN(202,"Cor de background no estado hover"),og(),Sl(203,"td")(204,"code"),eN(205,"var(--color-brand-01-lightest)"),og()()(),Sl(206,"tr")(207,"td")(208,"strong"),eN(209,"Focused"),og()(),Wl(210,"td")(211,"td"),og(),Sl(212,"tr")(213,"td")(214,"code"),eN(215,"--color-focused"),og()(),Sl(216,"td"),eN(217,"Cor principal no estado de focus"),og(),Sl(218,"td")(219,"code"),eN(220,"var(--color-action-default)"),og()()(),Sl(221,"tr")(222,"td")(223,"code"),eN(224,"--outline-color-focused"),og()(),Sl(225,"td"),eN(226,"Cor do outline do estado de focus"),og(),Sl(227,"td")(228,"code"),eN(229,"var(--color-action-focus)"),og()()(),Sl(230,"tr")(231,"td")(232,"strong"),eN(233,"Error"),og()(),Wl(234,"td")(235,"td"),og(),Sl(236,"tr")(237,"td")(238,"code"),eN(239,"--color-error"),og()(),Sl(240,"td"),eN(241,"Cor principal no estado de erro"),og(),Sl(242,"td")(243,"code"),eN(244,"var(--color-feedback-negative-base)"),og()()(),Sl(245,"tr")(246,"td")(247,"strong"),eN(248,"Disabled"),og()(),Wl(249,"td")(250,"td"),og(),Sl(251,"tr")(252,"td")(253,"code"),eN(254,"--color-disabled"),og()(),Sl(255,"td"),eN(256,"Cor principal no estado disabled"),og(),Sl(257,"td")(258,"code"),eN(259,"var(--color-neutral-light-30)"),og()()(),Sl(260,"tr")(261,"td")(262,"code"),eN(263,"--background-disabled"),og()(),Sl(264,"td"),eN(265,"Cor de background no estado disabled"),og(),Sl(266,"td")(267,"code"),eN(268,"var(--color-neutral-light-20)"),og()()(),Sl(269,"tr")(270,"td")(271,"strong"),eN(272,"Suggestion"),og()(),Wl(273,"td")(274,"td"),og(),Sl(275,"tr")(276,"td")(277,"code"),eN(278,"--text-color-suggestion"),og()(),Sl(279,"td"),eN(280,"Cor do texto no estado suggestion"),og(),Sl(281,"td")(282,"code"),eN(283,"var(--color-neutral-mid-60)"),og()()(),Sl(284,"tr")(285,"td")(286,"code"),eN(287,"--background-suggestion"),og()(),Sl(288,"td"),eN(289,"Cor do background no estado suggestion"),og(),Sl(290,"td")(291,"code"),eN(292,"var(--color-brand-01-lightest)"),og()()()()()(),Sl(293,"div",7)(294,"h4",8),eN(295,"Seletor"),og(),Sl(296,"pre",9),eN(297,`<po-combo
    (p-additional-help)="EventEmitter"
    p-additional-help-tooltip="string"
    p-append-in-body="boolean"
    p-auto-focus="boolean"
    (p-blur)="EventEmitter"
    p-cache="boolean"
    (p-change)="EventEmitter"
    p-change-on-enter="boolean"
    p-clean="boolean"
    p-compact-label="boolean"
    p-debounce-time="number"
    p-disabled="boolean"
    p-disabled-init-filter="boolean"
    p-disabled-tab-filter="boolean"
    p-emit-object-value="boolean"
    p-error-limit="boolean"
    p-field-error-message="string"
    p-field-label="string"
    p-field-value="string"
    p-filter-minlength="number"
    p-filter-mode="PoComboFilterMode"
    p-filter-params="any"
    p-filter-service="PoComboFilter | string"
    p-help="string"
    p-icon="string | TemplateRef<void>"
    p-infinite-scroll="boolean"
    p-infinite-scroll-distance="number"
    (p-input-change)="EventEmitter"
    (p-keydown)="EventEmitter"
    p-label="string"
    p-label-text-wrap="boolean"
    p-listbox-control-position="'top' | 'bottom'"
    p-literals="PoComboLiterals"
    p-loading="boolean"
    name="string"
    (ng-model-change)="EventEmitter"
    p-optional="boolean"
    p-options="Array<PoComboOption | PoComboOptionGroup | any>"
    p-placeholder="string"
    p-helper="PoHelperOptions | string"
    p-remove-initial-filter="boolean"
    p-required="boolean"
    p-show-required="boolean"
    p-size="string"
    p-sort="boolean" >
</po-combo>
`),og()(),Sl(298,"h4",10),eN(299,"Propriedades"),og(),Sl(300,"table",11)(301,"tr",12)(302,"th",13),eN(303,"Nome"),og(),Sl(304,"th",13),eN(305,"Tipo"),og(),Sl(306,"th",13),eN(307,"Padr\xE3o"),og(),Sl(308,"th",13),eN(309,"Descri\xE7\xE3o"),og()(),Sl(310,"tr",14)(311,"td",15)(312,"div",16)(313,"span",17),eN(314," (p-additional-help)"),Wl(315,"br"),og()(),Sl(316,"div",18),eN(317,"Deprecated"),og()(),Sl(318,"td",19)(319,"code",20),eN(320,"EventEmitter"),og()(),Sl(321,"td",21),eN(322,"-"),og(),Sl(323,"td",22)(324,"em")(325,"strong"),eN(326,"(opcional)"),og()(),Sl(327,"p"),eN(328,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),og(),Sl(329,"blockquote")(330,"p"),eN(331,"Essa propriedade est\xE1 "),Sl(332,"strong"),eN(333,"depreciada"),og(),eN(334," e ser\xE1 removida na vers\xE3o "),Sl(335,"code"),eN(336,"23.x.x"),og(),eN(337,". Recomendamos utilizar a propriedade "),Sl(338,"code"),eN(339,"p-helper"),og(),eN(340," que oferece mais recursos e flexibilidade."),og()()()(),Sl(341,"tr",14)(342,"td",15)(343,"div",23)(344,"span",24),eN(345," p-additional-help-tooltip"),Wl(346,"br"),og()(),Sl(347,"div",18),eN(348,"Deprecated"),og()(),Sl(349,"td",19)(350,"code",25),eN(351,"string"),og()(),Sl(352,"td",21),eN(353,"-"),og(),Sl(354,"td",22)(355,"em")(356,"strong"),eN(357,"(opcional)"),og()(),Sl(358,"p"),eN(359,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),Sl(360,"code"),eN(361,"po-helper"),og(),eN(362,`.
`),Sl(363,"strong"),eN(364,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),og()(),Sl(365,"blockquote")(366,"p"),eN(367,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),og()(),Sl(368,"blockquote")(369,"p"),eN(370,"Essa propriedade est\xE1 "),Sl(371,"strong"),eN(372,"depreciada"),og(),eN(373," e ser\xE1 removida na vers\xE3o "),Sl(374,"code"),eN(375,"23.x.x"),og(),eN(376,". Recomendamos utilizar a propriedade "),Sl(377,"code"),eN(378,"p-helper"),og(),eN(379," que oferece mais recursos e flexibilidade."),og()()()(),Sl(380,"tr",14)(381,"td",15)(382,"div",23)(383,"span",24),eN(384," p-append-in-body"),Wl(385,"br"),og()()(),Sl(386,"td",19)(387,"code",26),eN(388,"boolean"),og()(),Sl(389,"td",21)(390,"p")(391,"code"),eN(392,"false"),og()()(),Sl(393,"td",22)(394,"em")(395,"strong"),eN(396,"(opcional)"),og()(),Sl(397,"p"),eN(398,"Define que o "),Sl(399,"code"),eN(400,"listbox"),og(),eN(401," e/ou popover ("),Sl(402,"code"),eN(403,"p-helper"),og(),eN(404," e/ou "),Sl(405,"code"),eN(406,"p-error-limit"),og(),eN(407,`) ser\xE3o inclu\xEDdos no body da
p\xE1gina e n\xE3o dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou
overflow escondido,garantindo o posicionamento correto de ambos pr\xF3ximo ao elemento.`),og(),Sl(408,"blockquote")(409,"p"),eN(410,"Quando utilizado com "),Sl(411,"code"),eN(412,"p-helper"),og(),eN(413,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),og()()()(),Sl(414,"tr",14)(415,"td",15)(416,"div",23)(417,"span",24),eN(418," p-auto-focus"),Wl(419,"br"),og()()(),Sl(420,"td",19)(421,"code",26),eN(422,"boolean"),og()(),Sl(423,"td",21)(424,"p")(425,"code"),eN(426,"false"),og()()(),Sl(427,"td",22)(428,"em")(429,"strong"),eN(430,"(opcional)"),og()(),Sl(431,"p"),eN(432,"Aplica foco no elemento ao ser iniciado."),og(),Sl(433,"blockquote")(434,"p"),eN(435,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),og()()()(),Sl(436,"tr",14)(437,"td",15)(438,"div",16)(439,"span",17),eN(440," (p-blur)"),Wl(441,"br"),og()()(),Sl(442,"td",19)(443,"code",20),eN(444,"EventEmitter"),og()(),Sl(445,"td",21),eN(446,"-"),og(),Sl(447,"td",22)(448,"em")(449,"strong"),eN(450,"(opcional)"),og()(),Sl(451,"p"),eN(452,"Evento disparado ao sair do campo."),og()()(),Sl(453,"tr",14)(454,"td",15)(455,"div",23)(456,"span",24),eN(457," p-cache"),Wl(458,"br"),og()()(),Sl(459,"td",19)(460,"code",26),eN(461,"boolean"),og()(),Sl(462,"td",21)(463,"p")(464,"code"),eN(465,"true"),og()()(),Sl(466,"td",22)(467,"em")(468,"strong"),eN(469,"(opcional)"),og()(),Sl(470,"p"),eN(471,"Define se o componente ir\xE1 guardar o valor do model para evitar requisi\xE7\xF5es repetidas."),og(),Sl(472,"blockquote")(473,"p"),eN(474,"Caso o valor seja "),Sl(475,"code"),eN(476,"false"),og(),eN(477,", o componente far\xE1 uma nova requisi\xE7\xE3o mesmo que o valor procurado seja o mesmo do model."),og()()()(),Sl(478,"tr",14)(479,"td",15)(480,"div",16)(481,"span",17),eN(482," (p-change)"),Wl(483,"br"),og()()(),Sl(484,"td",19)(485,"code",20),eN(486,"EventEmitter"),og()(),Sl(487,"td",21),eN(488,"-"),og(),Sl(489,"td",22)(490,"em")(491,"strong"),eN(492,"(opcional)"),og()(),Sl(493,"p"),eN(494,"Deve ser informada uma fun\xE7\xE3o que ser\xE1 disparada quando houver altera\xE7\xF5es no ngModel. A fun\xE7\xE3o receber\xE1 como argumento o model modificado."),og(),Sl(495,"blockquote")(496,"p"),eN(497,"Pode-se optar pelo recebimento do objeto selecionado ao inv\xE9s do model atrav\xE9s da propriedade "),Sl(498,"code"),eN(499,"p-emit-object-value"),og(),eN(500,"."),og()()()(),Sl(501,"tr",14)(502,"td",15)(503,"div",23)(504,"span",24),eN(505," p-change-on-enter"),Wl(506,"br"),og()()(),Sl(507,"td",19)(508,"code",26),eN(509,"boolean"),og()(),Sl(510,"td",21)(511,"p")(512,"code"),eN(513,"false"),og()()(),Sl(514,"td",22)(515,"em")(516,"strong"),eN(517,"(opcional)"),og()(),Sl(518,"p"),eN(519,"Indica que o evento "),Sl(520,"code"),eN(521,"p-change"),og(),eN(522,' s\xF3 ser\xE1 disparado ao clicar ou pressionar a tecla "Enter" sobre uma op\xE7\xE3o selecionada.'),og()()(),Sl(523,"tr",14)(524,"td",15)(525,"div",23)(526,"span",24),eN(527," p-clean"),Wl(528,"br"),og()()(),Sl(529,"td",19)(530,"code",26),eN(531,"boolean"),og()(),Sl(532,"td",21),eN(533,"-"),og(),Sl(534,"td",22)(535,"em")(536,"strong"),eN(537,"(opcional)"),og()(),Sl(538,"p"),eN(539,"Se verdadeiro, o campo receber\xE1 um bot\xE3o para ser limpo."),og()()(),Sl(540,"tr",14)(541,"td",15)(542,"div",23)(543,"span",24),eN(544," p-compact-label"),Wl(545,"br"),og()()(),Sl(546,"td",19)(547,"code",26),eN(548,"boolean"),og()(),Sl(549,"td",21)(550,"p")(551,"code"),eN(552,"false"),og()()(),Sl(553,"td",22)(554,"em")(555,"strong"),eN(556,"(opcional)"),og()(),Sl(557,"p"),eN(558,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),og(),Sl(559,"p"),eN(560,"Quando habilitado ("),Sl(561,"code"),eN(562,"true"),og(),eN(563,"), o modo compacto afeta o conjunto composto por:"),og(),Sl(564,"ul")(565,"li")(566,"code"),eN(567,"po-label"),og()(),Sl(568,"li")(569,"code"),eN(570,"p-requirement (showRequired)"),og()(),Sl(571,"li")(572,"code"),eN(573,"po-helper"),og()()(),Sl(574,"p"),eN(575,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),og(),Sl(576,"p"),eN(577,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),og(),Sl(578,"ul")(579,"li")(580,"code"),eN(581,"--field-container-title-justify"),og()(),Sl(582,"li")(583,"code"),eN(584,"--field-container-title-flex"),og()()(),Sl(585,"p"),eN(586,"Exemplo:"),og(),Sl(587,"pre")(588,"code"),eN(589,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),og()(),Sl(590,"p"),eN(591,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),og()()(),Sl(592,"tr",14)(593,"td",15)(594,"div",23)(595,"span",24),eN(596," p-debounce-time"),Wl(597,"br"),og()()(),Sl(598,"td",19)(599,"code",27),eN(600,"number"),og()(),Sl(601,"td",21)(602,"p")(603,"code"),eN(604,"400"),og()()(),Sl(605,"td",22)(606,"em")(607,"strong"),eN(608,"(opcional)"),og()(),Sl(609,"p"),eN(610,`Esta propriedade define em quanto tempo (em milissegundos), aguarda para acionar o evento de filtro ap\xF3s cada pressionamento de tecla.
Ser\xE1 utilizada apenas quando houver servi\xE7o (`),Sl(611,"code"),eN(612,"p-filter-service"),og(),eN(613,")."),og()()(),Sl(614,"tr",14)(615,"td",15)(616,"div",23)(617,"span",24),eN(618," p-disabled"),Wl(619,"br"),og()()(),Sl(620,"td",19)(621,"code",26),eN(622,"boolean"),og()(),Sl(623,"td",21)(624,"p")(625,"code"),eN(626,"false"),og()()(),Sl(627,"td",22)(628,"em")(629,"strong"),eN(630,"(opcional)"),og()(),Sl(631,"p"),eN(632,"Indica que o campo ser\xE1 desabilitado."),og()()(),Sl(633,"tr",14)(634,"td",15)(635,"div",23)(636,"span",24),eN(637," p-disabled-init-filter"),Wl(638,"br"),og()()(),Sl(639,"td",19)(640,"code",26),eN(641,"boolean"),og()(),Sl(642,"td",21)(643,"p")(644,"code"),eN(645,"false"),og()()(),Sl(646,"td",22)(647,"em")(648,"strong"),eN(649,"(opcional)"),og()(),Sl(650,"p"),eN(651,"Desabilita o filtro inicial no servi\xE7o, que \xE9 executado no primeiro clique no campo."),og()()(),Sl(652,"tr",14)(653,"td",15)(654,"div",23)(655,"span",24),eN(656," p-disabled-tab-filter"),Wl(657,"br"),og()()(),Sl(658,"td",19)(659,"code",26),eN(660,"boolean"),og()(),Sl(661,"td",21)(662,"p")(663,"code"),eN(664,"false"),og()()(),Sl(665,"td",22)(666,"em")(667,"strong"),eN(668,"(opcional)"),og()(),Sl(669,"p"),eN(670,"Se verdadeiro, desabilitar\xE1 a busca de um item via TAB."),og()()(),Sl(671,"tr",14)(672,"td",15)(673,"div",23)(674,"span",24),eN(675," p-emit-object-value"),Wl(676,"br"),og()()(),Sl(677,"td",19)(678,"code",26),eN(679,"boolean"),og()(),Sl(680,"td",21)(681,"p")(682,"code"),eN(683,"false"),og()()(),Sl(684,"td",22)(685,"em")(686,"strong"),eN(687,"(opcional)"),og()(),Sl(688,"p"),eN(689,"Se verdadeiro, o evento "),Sl(690,"code"),eN(691,"p-change"),og(),eN(692," receber\xE1 como argumento o "),Sl(693,"code"),eN(694,"PoComboOption"),og(),eN(695," referente \xE0 op\xE7\xE3o selecionada."),og()()(),Sl(696,"tr",14)(697,"td",15)(698,"div",23)(699,"span",24),eN(700," p-error-limit"),Wl(701,"br"),og()()(),Sl(702,"td",19)(703,"code",26),eN(704,"boolean"),og()(),Sl(705,"td",21)(706,"p")(707,"code"),eN(708,"false"),og()()(),Sl(709,"td",22)(710,"em")(711,"strong"),eN(712,"(opcional)"),og()(),Sl(713,"p"),eN(714,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),og(),Sl(715,"blockquote")(716,"p"),eN(717,"Caso essa propriedade seja definida como "),Sl(718,"code"),eN(719,"true"),og(),eN(720,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),og()()()(),Sl(721,"tr",14)(722,"td",15)(723,"div",23)(724,"span",24),eN(725," p-field-error-message"),Wl(726,"br"),og()()(),Sl(727,"td",19)(728,"code",25),eN(729,"string"),og()(),Sl(730,"td",21),eN(731,"-"),og(),Sl(732,"td",22)(733,"em")(734,"strong"),eN(735,"(opcional)"),og()(),Sl(736,"p"),eN(737,"Exibe a mensagem setada se o campo estiver vazio e for requerido."),og(),Sl(738,"blockquote")(739,"p"),eN(740,"Necess\xE1rio que a propriedade "),Sl(741,"code"),eN(742,"p-required"),og(),eN(743," esteja habilitada."),og()()()(),Sl(744,"tr",14)(745,"td",15)(746,"div",23)(747,"span",24),eN(748," p-field-label"),Wl(749,"br"),og()()(),Sl(750,"td",19)(751,"code",25),eN(752,"string"),og()(),Sl(753,"td",21)(754,"p")(755,"code"),eN(756,"label"),og()()(),Sl(757,"td",22)(758,"em")(759,"strong"),eN(760,"(opcional)"),og()(),Sl(761,"p"),eN(762,`Deve ser informado o nome da propriedade do objeto que ser\xE1 utilizado para a convers\xE3o dos itens apresentados na lista do componente
(`),Sl(763,"code"),eN(764,"p-options"),og(),eN(765,"), esta propriedade ser\xE1 respons\xE1vel pelo texto de apresenta\xE7\xE3o de cada item da lista."),og(),Sl(766,"p"),eN(767,`Necess\xE1rio quando informar o servi\xE7o como URL e o mesmo n\xE3o estiver retornando uma lista de objetos no padr\xE3o da interface
PoComboOption.`),og()()(),Sl(768,"tr",14)(769,"td",15)(770,"div",23)(771,"span",24),eN(772," p-field-value"),Wl(773,"br"),og()()(),Sl(774,"td",19)(775,"code",25),eN(776,"string"),og()(),Sl(777,"td",21)(778,"p")(779,"code"),eN(780,"value"),og()()(),Sl(781,"td",22)(782,"em")(783,"strong"),eN(784,"(opcional)"),og()(),Sl(785,"p"),eN(786,`Deve ser informado o nome da propriedade do objeto que ser\xE1 utilizado para a convers\xE3o dos itens apresentados na lista do componente
(`),Sl(787,"code"),eN(788,"p-options"),og(),eN(789,"), esta propriedade ser\xE1 respons\xE1vel pelo valor de cada item da lista."),og(),Sl(790,"p"),eN(791,`Necess\xE1rio quando informar o servi\xE7o como URL e o mesmo n\xE3o estiver retornando uma lista de objetos no padr\xE3o da interface
PoComboOption.`),og()()(),Sl(792,"tr",14)(793,"td",15)(794,"div",23)(795,"span",24),eN(796," p-filter-minlength"),Wl(797,"br"),og()()(),Sl(798,"td",19)(799,"code",27),eN(800,"number"),og()(),Sl(801,"td",21)(802,"p")(803,"code"),eN(804,"0"),og()()(),Sl(805,"td",22)(806,"em")(807,"strong"),eN(808,"(opcional)"),og()(),Sl(809,"p"),eN(810,"Valor m\xEDnimo de caracteres para realizar o filtro no servi\xE7o."),og()()(),Sl(811,"tr",14)(812,"td",15)(813,"div",23)(814,"span",24),eN(815," p-filter-mode"),Wl(816,"br"),og()()(),Sl(817,"td",19)(818,"code",28),eN(819,"PoComboFilterMode"),og()(),Sl(820,"td",21)(821,"p")(822,"code"),eN(823,"startsWith"),og()()(),Sl(824,"td",22)(825,"em")(826,"strong"),eN(827,"(opcional)"),og()(),Sl(828,"p"),eN(829,"Define o modo de pesquisa utilizado no filtro da lista de sele\xE7\xE3o: "),Sl(830,"code"),eN(831,"startsWith"),og(),eN(832,", "),Sl(833,"code"),eN(834,"contains"),og(),eN(835," ou "),Sl(836,"code"),eN(837,"endsWith"),og(),eN(838,"."),og(),Sl(839,"blockquote")(840,"p"),eN(841,"Quando utilizar a propriedade "),Sl(842,"code"),eN(843,"p-filter-service"),og(),eN(844," esta propriedade ser\xE1 ignorada."),og()()()(),Sl(845,"tr",14)(846,"td",15)(847,"div",23)(848,"span",24),eN(849," p-filter-params"),Wl(850,"br"),og()()(),Sl(851,"td",19)(852,"code",29),eN(853,"any"),og()(),Sl(854,"td",21),eN(855,"-"),og(),Sl(856,"td",22)(857,"em")(858,"strong"),eN(859,"(opcional)"),og()(),Sl(860,"p"),eN(861,"Valor que ser\xE1 repassado como par\xE2metro para a URL ou aos m\xE9todos do servi\xE7o que implementam a interface "),Sl(862,"em"),eN(863,"PoComboFilter"),og(),eN(864,"."),og(),Sl(865,"blockquote")(866,"p"),eN(867,"Caso a lista contenha agrupamentos, os mesmos s\xF3 ser\xE3o exibidos se houver no m\xEDnimo uma op\xE7\xE3o que corresponda \xE0 pesquisa."),og()()()(),Sl(868,"tr",14)(869,"td",15)(870,"div",23)(871,"span",24),eN(872," p-filter-service"),Wl(873,"br"),og()()(),Sl(874,"td",19)(875,"code",30),eN(876,"PoComboFilter "),og(),Sl(877,"code",25),eN(878," string"),og()(),Sl(879,"td",21),eN(880,"-"),og(),Sl(881,"td",22)(882,"em")(883,"strong"),eN(884,"(opcional)"),og()(),Sl(885,"p"),eN(886,`Nesta propriedade deve ser informada a URL do servi\xE7o em que ser\xE1 realizado o filtro para carregamento da lista de
itens no componente.
Caso haja a necessidade de customiza\xE7\xE3o, ent\xE3o pode ser informado um servi\xE7o implementando a interface PoComboFilter.`),og(),Sl(887,"p"),eN(888,`Caso utilizado uma URL, o servi\xE7o deve ser retornado no padr\xE3o API TOTVS e utiliza as propriedades
`),Sl(889,"code"),eN(890,"p-field-label"),og(),eN(891," e "),Sl(892,"code"),eN(893,"p-field-value"),og(),eN(894," para a constru\xE7\xE3o da lista de itens."),og(),Sl(895,"p"),eN(896,"Quando utilizada uma URL de servi\xE7o, ent\xE3o ser\xE1 concatenada nesta URL o valor que deseja-se filtrar da seguinte forma:"),og(),Sl(897,"pre")(898,"code"),eN(899,`url + ?filter=Peter
`),og()(),Sl(900,"p"),eN(901,"Se for definida a propriedade "),Sl(902,"code"),eN(903,"p-filter-params"),og(),eN(904,`, a mesma tamb\xE9m ser\xE1 concatenada. Por exemplo, para o
par\xE2metro `),Sl(905,"code"),eN(906,"{ age: 23 }"),og(),eN(907," a URL ficaria:"),og(),Sl(908,"pre")(909,"code"),eN(910,`url + ?page=1&pageSize=20&age=23&filter=Peter
`),og()()()(),Sl(911,"tr",14)(912,"td",15)(913,"div",23)(914,"span",24),eN(915," p-help"),Wl(916,"br"),og()()(),Sl(917,"td",19)(918,"code",25),eN(919,"string"),og()(),Sl(920,"td",21),eN(921,"-"),og(),Sl(922,"td",22)(923,"em")(924,"strong"),eN(925,"(opcional)"),og()(),Sl(926,"p"),eN(927,"Texto de apoio para o campo."),og()()(),Sl(928,"tr",14)(929,"td",15)(930,"div",23)(931,"span",24),eN(932," p-icon"),Wl(933,"br"),og()()(),Sl(934,"td",19)(935,"code",25),eN(936,"string "),og(),Sl(937,"code",31),eN(938," TemplateRef<void>"),og()(),Sl(939,"td",21),eN(940,"-"),og(),Sl(941,"td",22)(942,"em")(943,"strong"),eN(944,"(opcional)"),og()(),Sl(945,"p"),eN(946,"Define o \xEDcone que ser\xE1 exibido no in\xEDcio do campo."),og(),Sl(947,"p"),eN(948,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),Sl(949,"a",32),eN(950,"Biblioteca de \xEDcones"),og(),eN(951,". conforme exemplo abaixo:"),og(),Sl(952,"pre")(953,"code"),eN(954,`<po-combo p-icon="an an-user" p-label="PO combo"></po-combo>
`),og()(),Sl(955,"p"),eN(956,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),Sl(957,"em"),eN(958,"Font Awesome"),og(),eN(959,", da seguinte forma:"),og(),Sl(960,"pre")(961,"code"),eN(962,`<po-combo p-icon="fa fa-podcast" p-label="PO combo"></po-combo>
`),og()(),Sl(963,"p"),eN(964,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),Sl(965,"code"),eN(966,"TemplateRef"),og(),eN(967,", conforme exemplo abaixo:"),og(),Sl(968,"pre")(969,"code"),eN(970,`<po-combo [p-icon]="template" p-label="combo template ionic"></po-combo>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),og()(),Sl(971,"blockquote")(972,"p"),eN(973,"Para o \xEDcone enquadrar corretamente, deve-se utilizar "),Sl(974,"code"),eN(975,"font-size: inherit"),og(),eN(976," caso o \xEDcone utilizado n\xE3o aplique-o."),og()()()(),Sl(977,"tr",14)(978,"td",15)(979,"div",23)(980,"span",24),eN(981," p-infinite-scroll"),Wl(982,"br"),og()()(),Sl(983,"td",19)(984,"code",26),eN(985,"boolean"),og()(),Sl(986,"td",21)(987,"p")(988,"code"),eN(989,"false"),og()()(),Sl(990,"td",22)(991,"em")(992,"strong"),eN(993,"(opcional)"),og()(),Sl(994,"p"),eN(995,"Se verdadeiro ativa a funcionalidade de scroll infinito para o combo, Ao chegar ao fim da tabela executar\xE1 nova busca dos dados conforme pagina\xE7\xE3o."),og()()(),Sl(996,"tr",14)(997,"td",15)(998,"div",23)(999,"span",24),eN(1e3," p-infinite-scroll-distance"),Wl(1001,"br"),og()()(),Sl(1002,"td",19)(1003,"code",27),eN(1004,"number"),og()(),Sl(1005,"td",21),eN(1006,"-"),og(),Sl(1007,"td",22)(1008,"em")(1009,"strong"),eN(1010,"(opcional)"),og()(),Sl(1011,"p"),eN(1012,"Define o percentual necess\xE1rio para disparar o evento "),Sl(1013,"code"),eN(1014,"show-more"),og(),eN(1015,", que \xE9 respons\xE1vel por carregar mais dados no combo. Caso o valor seja maior que 100 ou menor que 0, o valor padr\xE3o ser\xE1 100%."),og(),Sl(1016,"p")(1017,"strong"),eN(1018,"Exemplos"),og()(),Sl(1019,"ul")(1020,"li"),eN(1021,"p-infinite-scroll-distance = 80: Quando atingir 80% do scroll do combo, o "),Sl(1022,"code"),eN(1023,"show-more"),og(),eN(1024," ser\xE1 disparado."),og()()()(),Sl(1025,"tr",14)(1026,"td",15)(1027,"div",16)(1028,"span",17),eN(1029," (p-input-change)"),Wl(1030,"br"),og()()(),Sl(1031,"td",19)(1032,"code",20),eN(1033,"EventEmitter"),og()(),Sl(1034,"td",21),eN(1035,"-"),og(),Sl(1036,"td",22)(1037,"em")(1038,"strong"),eN(1039,"(opcional)"),og()(),Sl(1040,"p"),eN(1041,"Deve ser informada uma fun\xE7\xE3o que ser\xE1 disparada quando houver altera\xE7\xF5es no Search input. A fun\xE7\xE3o receber\xE1 como argumento o input modificado."),og()()(),Sl(1042,"tr",14)(1043,"td",15)(1044,"div",16)(1045,"span",17),eN(1046," (p-keydown)"),Wl(1047,"br"),og()()(),Sl(1048,"td",19)(1049,"code",20),eN(1050,"EventEmitter"),og()(),Sl(1051,"td",21),eN(1052,"-"),og(),Sl(1053,"td",22)(1054,"em")(1055,"strong"),eN(1056,"(opcional)"),og()(),Sl(1057,"p"),eN(1058,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Sl(1059,"code"),eN(1060,"KeyboardEvent"),og(),eN(1061," com informa\xE7\xF5es sobre a tecla."),og()()(),Sl(1062,"tr",14)(1063,"td",15)(1064,"div",23)(1065,"span",24),eN(1066," p-label"),Wl(1067,"br"),og()()(),Sl(1068,"td",19)(1069,"code",25),eN(1070,"string"),og()(),Sl(1071,"td",21),eN(1072,"-"),og(),Sl(1073,"td",22)(1074,"em")(1075,"strong"),eN(1076,"(opcional)"),og()(),Sl(1077,"p"),eN(1078,"Label no componente."),og()()(),Sl(1079,"tr",14)(1080,"td",15)(1081,"div",23)(1082,"span",24),eN(1083," p-label-text-wrap"),Wl(1084,"br"),og()()(),Sl(1085,"td",19)(1086,"code",26),eN(1087,"boolean"),og()(),Sl(1088,"td",21)(1089,"p")(1090,"code"),eN(1091,"false"),og()()(),Sl(1092,"td",22)(1093,"em")(1094,"strong"),eN(1095,"(opcional)"),og()(),Sl(1096,"p"),eN(1097,"Habilita a quebra autom\xE1tica do texto da propriedade "),Sl(1098,"code"),eN(1099,"p-label"),og(),eN(1100,". Quando "),Sl(1101,"code"),eN(1102,"p-label-text-wrap"),og(),eN(1103,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),og()()(),Sl(1104,"tr",14)(1105,"td",15)(1106,"div",23)(1107,"span",24),eN(1108," p-listbox-control-position"),Wl(1109,"br"),og()()(),Sl(1110,"td",19)(1111,"code",33),eN(1112,"'top' "),og(),Sl(1113,"code",34),eN(1114," 'bottom'"),og()(),Sl(1115,"td",21)(1116,"p")(1117,"code"),eN(1118,"bottom"),og()()(),Sl(1119,"td",22)(1120,"em")(1121,"strong"),eN(1122,"(opcional)"),og()(),Sl(1123,"p"),eN(1124,"Define a dire\xE7\xE3o preferida para exibi\xE7\xE3o do "),Sl(1125,"code"),eN(1126,"listbox"),og(),eN(1127," em rela\xE7\xE3o ao campo ("),Sl(1128,"code"),eN(1129,"top"),og(),eN(1130," ou "),Sl(1131,"code"),eN(1132,"bottom"),og(),eN(1133,`).
\xDAtil em casos onde o posicionamento autom\xE1tico n\xE3o se comporta como esperado, como quando o componente est\xE1 pr\xF3ximo
ao final do formul\xE1rio ou do container vis\xEDvel. Na maioria dos casos, essa dire\xE7\xE3o ser\xE1 respeitada; no entanto,
pode ser ajustada automaticamente conforme o espa\xE7o dispon\xEDvel na tela.`),og()()(),Sl(1134,"tr",14)(1135,"td",15)(1136,"div",23)(1137,"span",24),eN(1138," p-literals"),Wl(1139,"br"),og()()(),Sl(1140,"td",19)(1141,"code",35),eN(1142,"PoComboLiterals"),og()(),Sl(1143,"td",21),eN(1144,"-"),og(),Sl(1145,"td",22)(1146,"em")(1147,"strong"),eN(1148,"(opcional)"),og()(),Sl(1149,"p"),eN(1150,"Objeto com as literais usadas no "),Sl(1151,"code"),eN(1152,"po-combo"),og(),eN(1153,"."),og(),Sl(1154,"p"),eN(1155,"Para utilizar basta passar a literal que deseja customizar:"),og(),Sl(1156,"pre")(1157,"code"),eN(1158,`const customLiterals: PoComboLiterals = {
  noData: 'Nenhum valor'
};
`),og()(),Sl(1159,"p"),eN(1160,"E para carregar a literal customizada, basta apenas passar o objeto para o componente."),og(),Sl(1161,"pre")(1162,"code"),eN(1163,`<po-combo
  [p-literals]="customLiterals">
</po-combo>
`),og()(),Sl(1164,"blockquote")(1165,"p"),eN(1166,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),Sl(1167,"a",36)(1168,"code"),eN(1169,"PoI18nService"),og()(),eN(1170," ou do browser."),og()()()(),Sl(1171,"tr",14)(1172,"td",15)(1173,"div",23)(1174,"span",24),eN(1175," p-loading"),Wl(1176,"br"),og()()(),Sl(1177,"td",19)(1178,"code",26),eN(1179,"boolean"),og()(),Sl(1180,"td",21)(1181,"p")(1182,"code"),eN(1183,"false"),og()()(),Sl(1184,"td",22)(1185,"em")(1186,"strong"),eN(1187,"(opcional)"),og()(),Sl(1188,"p"),eN(1189,"Exibe um \xEDcone de carregamento no lado direito do campo para sinalizar que uma opera\xE7\xE3o est\xE1 em andamento."),og()()(),Sl(1190,"tr",14)(1191,"td",15)(1192,"div",23)(1193,"span",24),eN(1194," name"),Wl(1195,"br"),og()()(),Sl(1196,"td",19)(1197,"code",25),eN(1198,"string"),og()(),Sl(1199,"td",21),eN(1200,"-"),og(),Sl(1201,"td",22)(1202,"p"),eN(1203,"Nome do componente."),og()()(),Sl(1204,"tr",14)(1205,"td",15)(1206,"div",16)(1207,"span",17),eN(1208," (ngModelChange)"),Wl(1209,"br"),og()()(),Sl(1210,"td",19)(1211,"code",20),eN(1212,"EventEmitter"),og()(),Sl(1213,"td",21),eN(1214,"-"),og(),Sl(1215,"td",22)(1216,"em")(1217,"strong"),eN(1218,"(opcional)"),og()(),Sl(1219,"p"),eN(1220,"Fun\xE7\xE3o para atualizar o ngModel do componente, necess\xE1rio quando n\xE3o for utilizado dentro da tag form."),og(),Sl(1221,"p"),eN(1222,"Na vers\xE3o 12.2.0 do Angular a verifica\xE7\xE3o "),Sl(1223,"code"),eN(1224,"strictTemplates"),og(),eN(1225,` vem true como default. Portanto, para utilizar
two-way binding no componente deve se utilizar da seguinte forma:`),og(),Sl(1226,"pre")(1227,"code"),eN(1228,`<po-combo ... [ngModel]="comboModel" (ngModelChange)="comboModel = $event"> </po-combo>
`),og()()()(),Sl(1229,"tr",14)(1230,"td",15)(1231,"div",23)(1232,"span",24),eN(1233," p-optional"),Wl(1234,"br"),og()()(),Sl(1235,"td",19)(1236,"code",26),eN(1237,"boolean"),og()(),Sl(1238,"td",21)(1239,"p")(1240,"code"),eN(1241,"false"),og()()(),Sl(1242,"td",22)(1243,"em")(1244,"strong"),eN(1245,"(opcional)"),og()(),Sl(1246,"p"),eN(1247,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),og(),Sl(1248,"blockquote")(1249,"p"),eN(1250,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),og()(),Sl(1251,"ul")(1252,"li"),eN(1253,"O campo conter "),Sl(1254,"code"),eN(1255,"p-required"),og(),eN(1256,";"),og(),Sl(1257,"li"),eN(1258,"N\xE3o possuir "),Sl(1259,"code"),eN(1260,"p-help"),og(),eN(1261," e/ou "),Sl(1262,"code"),eN(1263,"p-label"),og(),eN(1264,"."),og()()()(),Sl(1265,"tr",14)(1266,"td",15)(1267,"div",23)(1268,"span",24),eN(1269," p-options"),Wl(1270,"br"),og()()(),Sl(1271,"td",19)(1272,"code",37),eN(1273,"Array<PoComboOption "),og(),Sl(1274,"code",38),eN(1275," PoComboOptionGroup "),og(),Sl(1276,"code",39),eN(1277," any>"),og()(),Sl(1278,"td",21),eN(1279,"-"),og(),Sl(1280,"td",22)(1281,"p"),eN(1282,"Nesta propriedade define a lista de op\xE7\xF5es do "),Sl(1283,"code"),eN(1284,"po-combo"),og(),eN(1285,"."),og(),Sl(1286,"blockquote")(1287,"p"),eN(1288,"A lista pode ser definida utilizando um array com o valor representando o "),Sl(1289,"code"),eN(1290,"value"),og(),eN(1291," e o "),Sl(1292,"code"),eN(1293,"label"),og(),eN(1294," das seguintes formas:"),og()(),Sl(1295,"pre")(1296,"code"),eN(1297,`<po-combo name="combo" p-label="PO Combo" [p-options]="[{value: 1, label: 'One'}, {value: 2, label: 'two'}]"> </po-combo>
`),og()(),Sl(1298,"pre")(1299,"code"),eN(1300,`<po-combo name="combo" p-label="PO Combo" [p-options]="[{name: 'Roger', age: 28}, {name: 'Anne', age: 35}]" p-field-label="name" p-field-value="age"> </po-combo>
`),og()(),Sl(1301,"ul")(1302,"li"),eN(1303,"Aconselha-se utilizar valores distintos no "),Sl(1304,"code"),eN(1305,"label"),og(),eN(1306," e "),Sl(1307,"code"),eN(1308,"value"),og(),eN(1309," dos itens."),og()()()(),Sl(1310,"tr",14)(1311,"td",15)(1312,"div",23)(1313,"span",24),eN(1314," p-placeholder"),Wl(1315,"br"),og()()(),Sl(1316,"td",19)(1317,"code",25),eN(1318,"string"),og()(),Sl(1319,"td",21),eN(1320,"-"),og(),Sl(1321,"td",22)(1322,"p"),eN(1323,"Mensagem apresentada enquanto o campo estiver vazio."),og()()(),Sl(1324,"tr",14)(1325,"td",15)(1326,"div",23)(1327,"span",24),eN(1328," p-helper"),Wl(1329,"br"),og()()(),Sl(1330,"td",19)(1331,"code",40),eN(1332,"PoHelperOptions "),og(),Sl(1333,"code",25),eN(1334," string"),og()(),Sl(1335,"td",21),eN(1336,"-"),og(),Sl(1337,"td",22)(1338,"em")(1339,"strong"),eN(1340,"(opcional)"),og()(),Sl(1341,"p"),eN(1342,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label quando a propriedade "),Sl(1343,"code"),eN(1344,"p-label"),og(),eN(1345," for definida, ou, ao lado do componente na aus\xEAncia da propriedade "),Sl(1346,"code"),eN(1347,"p-label"),og(),eN(1348,"."),og(),Sl(1349,"blockquote")(1350,"p"),eN(1351,"Para mais informa\xE7\xF5es acesse: "),Sl(1352,"a",41),eN(1353,"https://po-ui.io/documentation/po-helper"),og(),eN(1354,"."),og()(),Sl(1355,"blockquote")(1356,"p"),eN(1357,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),Sl(1358,"code"),eN(1359,"p-additional-help-tooltip"),og(),eN(1360," e "),Sl(1361,"code"),eN(1362,"p-additional-help"),og(),eN(1363,") ser\xE1 ignorado."),og()()()(),Sl(1364,"tr",14)(1365,"td",15)(1366,"div",23)(1367,"span",24),eN(1368," p-remove-initial-filter"),Wl(1369,"br"),og()()(),Sl(1370,"td",19)(1371,"code",26),eN(1372,"boolean"),og()(),Sl(1373,"td",21)(1374,"p")(1375,"code"),eN(1376,"false"),og()()(),Sl(1377,"td",22)(1378,"em")(1379,"strong"),eN(1380,"(opcional)"),og()(),Sl(1381,"p"),eN(1382,"Define se o filtro inicial ser\xE1 removido no primeiro clique do campo."),og(),Sl(1383,"p"),eN(1384,`Quando habilitado e o combo possui um valor padr\xE3o, o primeiro clique
exibir\xE1 todos os itens da lista ao inv\xE9s de apenas o item inicializado.`),og()()(),Sl(1385,"tr",14)(1386,"td",15)(1387,"div",23)(1388,"span",24),eN(1389," p-required"),Wl(1390,"br"),og()()(),Sl(1391,"td",19)(1392,"code",26),eN(1393,"boolean"),og()(),Sl(1394,"td",21)(1395,"p")(1396,"code"),eN(1397,"false"),og()()(),Sl(1398,"td",22)(1399,"em")(1400,"strong"),eN(1401,"(opcional)"),og()(),Sl(1402,"p"),eN(1403,"Define que o campo ser\xE1 obrigat\xF3rio."),og()()(),Sl(1404,"tr",14)(1405,"td",15)(1406,"div",23)(1407,"span",24),eN(1408," p-show-required"),Wl(1409,"br"),og()()(),Sl(1410,"td",19)(1411,"code",26),eN(1412,"boolean"),og()(),Sl(1413,"td",21),eN(1414,"-"),og(),Sl(1415,"td",22)(1416,"p"),eN(1417,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),og(),Sl(1418,"blockquote")(1419,"p"),eN(1420,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),og()(),Sl(1421,"ul")(1422,"li"),eN(1423,"N\xE3o possuir "),Sl(1424,"code"),eN(1425,"p-help"),og(),eN(1426," e/ou "),Sl(1427,"code"),eN(1428,"p-label"),og(),eN(1429,"."),og()()()(),Sl(1430,"tr",14)(1431,"td",15)(1432,"div",23)(1433,"span",24),eN(1434," p-size"),Wl(1435,"br"),og()()(),Sl(1436,"td",19)(1437,"code",25),eN(1438,"string"),og()(),Sl(1439,"td",21)(1440,"p")(1441,"code"),eN(1442,"medium"),og()()(),Sl(1443,"td",22)(1444,"em")(1445,"strong"),eN(1446,"(opcional)"),og()(),Sl(1447,"p"),eN(1448,"Define o tamanho do componente:"),og(),Sl(1449,"ul")(1450,"li")(1451,"code"),eN(1452,"small"),og(),eN(1453,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),og(),Sl(1454,"li")(1455,"code"),eN(1456,"medium"),og(),eN(1457,": altura do input como 44px."),og()(),Sl(1458,"blockquote")(1459,"p"),eN(1460,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Sl(1461,"code"),eN(1462,"medium"),og(),eN(1463,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Sl(1464,"a",42),eN(1465,"po-theme"),og(),eN(1466,"."),og()()()(),Sl(1467,"tr",14)(1468,"td",15)(1469,"div",23)(1470,"span",24),eN(1471," p-sort"),Wl(1472,"br"),og()()(),Sl(1473,"td",19)(1474,"code",26),eN(1475,"boolean"),og()(),Sl(1476,"td",21),eN(1477,"-"),og(),Sl(1478,"td",22)(1479,"p"),eN(1480,"Indica que a lista definida na propriedade p-options ser\xE1 ordenada pela descri\xE7\xE3o."),og()()()(),Sl(1481,"h3",10),eN(1482,"M\xE9todos"),og(),Sl(1483,"table",43)(1484,"tr",14)(1485,"th",44)(1486,"div",23)(1487,"h4")(1488,"span",24),eN(1489," focus "),og()()()()(),Sl(1490,"tr",22)(1491,"td",22)(1492,"p"),eN(1493,"Fun\xE7\xE3o que atribui foco ao componente."),og(),Sl(1494,"p"),eN(1495,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),og(),Sl(1496,"pre")(1497,"code"),eN(1498,`import { PoComboComponent } from '@po-ui/ng-components';

...

@ViewChild(PoComboComponent, { static: true }) combo: PoComboComponent;

focusCombo() {
  this.combo.focus();
}
`),og()()()()(),Wl(1499,"br"),Sl(1500,"table",43)(1501,"tr",14)(1502,"th",44)(1503,"div",23)(1504,"h4")(1505,"span",24),eN(1506," showAdditionalHelp "),og()()()()(),Sl(1507,"tr",22)(1508,"td",22)(1509,"p"),eN(1510,"M\xE9todo que exibe "),Sl(1511,"code"),eN(1512,"p-helper"),og(),eN(1513," ou executa a a\xE7\xE3o definida em "),Sl(1514,"code"),eN(1515,"p-helper{eventOnClick}"),og(),eN(1516," ou em "),Sl(1517,"code"),eN(1518,"p-additionalHelp"),og(),eN(1519,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Sl(1520,"code"),eN(1521,"p-keydown"),og(),eN(1522,"."),og(),Sl(1523,"blockquote")(1524,"p"),eN(1525,"Exibe ou oculta o conte\xFAdo do componente "),Sl(1526,"code"),eN(1527,"po-helper"),og(),eN(1528," quando o componente estiver com foco."),og()(),Sl(1529,"pre")(1530,"code"),eN(1531,`// Exemplo com p-label e p-helper
<po-combo
 #combo
 ...
 p-label="Label do combo"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, combo)"
></po-combo>
`),og()(),Sl(1532,"pre")(1533,"code"),eN(1534,`...
onKeyDown(event: KeyboardEvent, inp: PoComboComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),og()()()()(),Wl(1535,"br"),Sl(1536,"h3"),eN(1537,"Interfaces"),og(),Sl(1538,"h4",45)(1539,"code",5),eN(1540,"PoComboFilter"),og()(),Sl(1541,"div",2)(1542,"p"),eN(1543,"Interface para os servi\xE7os que ser\xE3o utilizados no po-combo."),og()(),Sl(1544,"h4",10),eN(1545,"M\xE9todos"),og(),Sl(1546,"table",43)(1547,"tr",14)(1548,"th",44)(1549,"div",23)(1550,"h4")(1551,"span",24),eN(1552," getFilteredData "),og()()()()(),Sl(1553,"tr",22)(1554,"td",22)(1555,"p"),eN(1556,`M\xE9todo respons\xE1vel por retornar um Observable que cont\xE9m uma cole\xE7\xE3o de objetos que seguem a interface PoComboOption,
ser\xE1 informado por parametro o campo, de acordo com o fieldLabel, e o valor a ser pesquisado.`),og()()()(),Sl(1557,"h5")(1558,"b"),eN(1559,"Par\xE2metros"),og()(),Sl(1560,"table",11)(1561,"tr",12)(1562,"th",13),eN(1563,"Nome"),og(),Sl(1564,"th",13),eN(1565,"Tipo"),og(),Sl(1566,"th",13),eN(1567,"Descri\xE7\xE3o"),og()(),Sl(1568,"tr",14)(1569,"td",15),eN(1570," params"),og(),Sl(1571,"td",19)(1572,"code",46),eN(1573," any "),og()(),Sl(1574,"td",22)(1575,"p"),eN(1576,"Objeto contendo a propriedade e o valor respons\xE1vel por realizar o filtro."),og()()(),Sl(1577,"tr",14)(1578,"td",15),eN(1579," filterParams"),og(),Sl(1580,"td",19)(1581,"code",46),eN(1582," any "),og()(),Sl(1583,"td",22)(1584,"p"),eN(1585,"Valor informado atrav\xE9s da propriedade "),Sl(1586,"code"),eN(1587,"p-filter-params"),og(),eN(1588,"."),og()()()(),Wl(1589,"br"),Sl(1590,"table",43)(1591,"tr",14)(1592,"th",44)(1593,"div",23)(1594,"h4")(1595,"span",24),eN(1596," getObjectByValue "),og()()()()(),Sl(1597,"tr",22)(1598,"td",22)(1599,"p"),eN(1600,`M\xE9todo respons\xE1vel por retornar um Observable que cont\xE9m apenas o objeto filtrado que seguem a interface PoComboOption,
ser\xE1 informado por parametro valor a ser pesquisado.`),og()()()(),Sl(1601,"h5")(1602,"b"),eN(1603,"Par\xE2metros"),og()(),Sl(1604,"table",11)(1605,"tr",12)(1606,"th",13),eN(1607,"Nome"),og(),Sl(1608,"th",13),eN(1609,"Tipo"),og(),Sl(1610,"th",13),eN(1611,"Descri\xE7\xE3o"),og()(),Sl(1612,"tr",14)(1613,"td",15),eN(1614," value"),og(),Sl(1615,"td",19)(1616,"code",25),eN(1617," string "),og(),Sl(1618,"code",27),eN(1619," number "),og()(),Sl(1620,"td",22)(1621,"p"),eN(1622,"Valor respons\xE1vel por realizar a busca de um \xFAnico objeto."),og()()(),Sl(1623,"tr",14)(1624,"td",15),eN(1625," filterParams"),og(),Sl(1626,"td",19)(1627,"code",46),eN(1628," any "),og()(),Sl(1629,"td",22)(1630,"p"),eN(1631,"Valor informado atrav\xE9s da propriedade "),Sl(1632,"code"),eN(1633,"p-filter-params"),og(),eN(1634,"."),og()()()(),Wl(1635,"br"),Sl(1636,"h4",45)(1637,"code",5),eN(1638,"PoComboLiterals"),og()(),Sl(1639,"div",2)(1640,"p"),eN(1641,"Interface para defini\xE7\xE3o das literais usadas no "),Sl(1642,"code"),eN(1643,"po-combo"),og(),eN(1644,"."),og()(),Sl(1645,"h4",10),eN(1646,"Propriedades"),og(),Sl(1647,"table",11)(1648,"tr",12)(1649,"th",13),eN(1650,"Nome"),og(),Sl(1651,"th",13),eN(1652,"Tipo"),og(),Sl(1653,"th",13),eN(1654,"Descri\xE7\xE3o"),og()(),Sl(1655,"tr",14)(1656,"td",15)(1657,"div",23)(1658,"span",24),eN(1659," chooseOption"),Wl(1660,"br"),og()()(),Sl(1661,"td",19)(1662,"code",25),eN(1663,"string"),og()(),Sl(1664,"td",22)(1665,"em")(1666,"strong"),eN(1667,"(opcional)"),og()(),Sl(1668,"p"),eN(1669,"Texto exibido quando o combo estiver vazio."),og()()(),Sl(1670,"tr",14)(1671,"td",15)(1672,"div",23)(1673,"span",24),eN(1674," clean"),Wl(1675,"br"),og()()(),Sl(1676,"td",19)(1677,"code",25),eN(1678,"string"),og()(),Sl(1679,"td",22)(1680,"em")(1681,"strong"),eN(1682,"(opcional)"),og()(),Sl(1683,"p"),eN(1684,"Texto do aria-label do bot\xE3o de limpar"),og()()(),Sl(1685,"tr",14)(1686,"td",15)(1687,"div",23)(1688,"span",24),eN(1689," noData"),Wl(1690,"br"),og()()(),Sl(1691,"td",19)(1692,"code",25),eN(1693,"string"),og()(),Sl(1694,"td",22)(1695,"em")(1696,"strong"),eN(1697,"(opcional)"),og()(),Sl(1698,"p"),eN(1699,"Texto exibido quando n\xE3o houver itens na lista ou se, a pesquisa do filtro n\xE3o retornar nenhum item."),og()()()(),Sl(1700,"h4",45)(1701,"code",5),eN(1702,"PoComboOptionGroup"),og()(),Sl(1703,"div",2)(1704,"p"),eN(1705,"Interface dos agrupamentos da cole\xE7\xE3o que ser\xE1 exibida no dropdown do "),Sl(1706,"code"),eN(1707,"po-combo"),og(),eN(1708,"."),og()(),Sl(1709,"h4",10),eN(1710,"Propriedades"),og(),Sl(1711,"table",11)(1712,"tr",12)(1713,"th",13),eN(1714,"Nome"),og(),Sl(1715,"th",13),eN(1716,"Tipo"),og(),Sl(1717,"th",13),eN(1718,"Descri\xE7\xE3o"),og()(),Sl(1719,"tr",14)(1720,"td",15)(1721,"div",23)(1722,"span",24),eN(1723," label"),Wl(1724,"br"),og()()(),Sl(1725,"td",19)(1726,"code",25),eN(1727,"string"),og()(),Sl(1728,"td",22)(1729,"p"),eN(1730,"T\xEDtulo para cada grupo de op\xE7\xF5es."),og(),Sl(1731,"p"),eN(1732,`Recomenda\xE7\xE3o: evite usar labels id\xEAnticos em diferentes grupos. Labels iguais podem
causar ambiguidade para usu\xE1rios e dificultar a identifica\xE7\xE3o/sele\xE7\xE3o dos itens.`),og()()(),Sl(1733,"tr",14)(1734,"td",15)(1735,"div",23)(1736,"span",24),eN(1737," options"),Wl(1738,"br"),og()()(),Sl(1739,"td",19)(1740,"code",47),eN(1741,"Array<PoComboOption>"),og()(),Sl(1742,"td",22)(1743,"p"),eN(1744,"Lista de itens a serem exibidos."),og()()()(),Sl(1745,"h4",45)(1746,"code",5),eN(1747,"PoComboOption"),og()(),Sl(1748,"div",2)(1749,"p"),eN(1750,"Interface que define as op\xE7\xF5es que ser\xE3o exibidas na lista do "),Sl(1751,"code"),eN(1752,"po-combo"),og(),eN(1753,"."),og()(),Sl(1754,"h4",10),eN(1755,"Propriedades"),og(),Sl(1756,"table",11)(1757,"tr",12)(1758,"th",13),eN(1759,"Nome"),og(),Sl(1760,"th",13),eN(1761,"Tipo"),og(),Sl(1762,"th",13),eN(1763,"Descri\xE7\xE3o"),og()(),Sl(1764,"tr",14)(1765,"td",15)(1766,"div",23)(1767,"span",24),eN(1768," label"),Wl(1769,"br"),og()()(),Sl(1770,"td",19)(1771,"code",25),eN(1772,"string"),og()(),Sl(1773,"td",22)(1774,"em")(1775,"strong"),eN(1776,"(opcional)"),og()(),Sl(1777,"p"),eN(1778,"Descri\xE7\xE3o exibida nas op\xE7\xF5es da lista."),og(),Sl(1779,"blockquote")(1780,"p"),eN(1781,"Caso n\xE3o seja definida ser\xE1 assumido o valor definido na propriedade "),Sl(1782,"code"),eN(1783,"value"),og(),eN(1784,"."),og()()()(),Sl(1785,"tr",14)(1786,"td",15)(1787,"div",23)(1788,"span",24),eN(1789," value"),Wl(1790,"br"),og()()(),Sl(1791,"td",19)(1792,"code",25),eN(1793,"string "),og(),Sl(1794,"code",27),eN(1795," number"),og()(),Sl(1796,"td",22)(1797,"p"),eN(1798,"Valor do objeto que ser\xE1 atribu\xEDdo ao "),Sl(1799,"em"),eN(1800,"model"),og(),eN(1801,"."),og()()()(),Sl(1802,"h3"),eN(1803,"Enums"),og(),Sl(1804,"h4",4)(1805,"code",5),eN(1806,"PoComboFilterMode"),og()(),Sl(1807,"div",2)(1808,"p"),eN(1809,"Define o tipo de busca usado no po-combo."),og()(),Sl(1810,"h4",10),eN(1811,"Propriedades"),og(),Sl(1812,"table",11)(1813,"tr",12)(1814,"th",13),eN(1815,"Nome"),og(),Sl(1816,"th",13),eN(1817,"Descri\xE7\xE3o"),og()(),Sl(1818,"tr",14)(1819,"td",15)(1820,"div",23)(1821,"span",24),eN(1822," startsWith"),Wl(1823,"br"),og()()(),Sl(1824,"td",22)(1825,"p"),eN(1826,"Verifica se o texto "),Sl(1827,"em"),eN(1828,"inicia"),og(),eN(1829," com o valor pesquisado. Caso n\xE3o seja especificado um tipo, ser\xE1 esse o utilizado."),og()()(),Sl(1830,"tr",14)(1831,"td",15)(1832,"div",23)(1833,"span",24),eN(1834," contains"),Wl(1835,"br"),og()()(),Sl(1836,"td",22)(1837,"p"),eN(1838,"Verifica se o texto "),Sl(1839,"em"),eN(1840,"cont\xE9m"),og(),eN(1841," o valor pesquisado."),og()()(),Sl(1842,"tr",14)(1843,"td",15)(1844,"div",23)(1845,"span",24),eN(1846," endsWith"),Wl(1847,"br"),og()()(),Sl(1848,"td",22)(1849,"p"),eN(1850,"Verifica se o texto "),Sl(1851,"em"),eN(1852,"finaliza"),og(),eN(1853," com o valor pesquisado."),og()()()()());},dependencies:[Ka],encapsulation:2})}return a})();var nt=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=8;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,p){this.route=m,this.router=p;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let p=m.view;this.activeTab=p||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:"merge"}),this.activeTab=m;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(p){return new(p||a)(w(Xn),w(En))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:13,vars:4,consts:[["p-title","Combo",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(p,n){p&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return n.changeTab("doc")}),Wl(3,"sample-po-combo-doc"),og(),Sl(4,"po-tab",3),ft("p-click",function(){return n.changeTab("web")}),Wl(5,"sample-po-combo-basic-view")(6,"sample-po-combo-labs-view")(7,"sample-po-combo-scheduling-view")(8,"sample-po-combo-transfer-view")(9,"sample-po-combo-heroes-view")(10,"sample-po-combo-heroes-reactive-form-view")(11,"sample-po-combo-infinity-scroll-view")(12,"sample-po-combo-hotels-view"),og()()()),p&2&&(nw("p-actions",n.actions),Lp(2),nw("p-active",n.activeTab==="doc"),Lp(2),nw("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"));},dependencies:[rNe,Bme,qme,Ie,je,Re,Qe,Je,Xe,$e,tt,ot],encapsulation:2})}return a})();var zt=[{path:"",component:nt}],it=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275mod=fe({type:a});static \u0275inj=ue({imports:[hL.forChild(zt),hL]})}return a})();var cn=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275mod=fe({type:a});static \u0275inj=ue({imports:[sr,it]})}return a})();export{cn as DocPoComboModule};