import {f as fe,u as ue,s as sr,a as uL,C,c3 as Xn,E as En,U as Un,w,b as f,aW as Yp,n as nb,cM as Z9,cN as lm,bC as v3,J as zl,T as nw,bM as dN,a7 as lN,an as DO,aH as Ka,b8 as qme,b9 as Yme,H as Il,q as Qx,R as og,a1 as ft,A as Lp,ar as Ux,au as dg,bs as uN,aX as G9,aF as $9,aY as z9,aG as mk,aZ as hk,b0 as Qt,b1 as mv,c4 as C3,b4 as O3,cp as Hhe,c8 as Dde,aJ as qhe,bH as k3,c9 as Yhe,aB as Dx,aM as ww,aN as QA,bd as Ax,aO as Ew,aP as e0,cn as a3,cO as ede,bD as Ede,cz as kz,b5 as $he,a2 as JE,X as we,av as Gl,aw as co,ax as lo,cP as uhe,b6 as Yo,cG as NO,a4 as mN,cH as rN,a5 as yN,ba as yNe,a0 as SO,aq as lx,at as ux,cQ as Ik,cR as Ck,a3 as cNe,B as yw,aA as Sx,aD as Xy,aT as eN,aE as Qy}from'./main-QSTLMRDK.js';var at=()=>({value:"Option 1"}),lt=()=>({value:"Option 2"}),rt=(a,q)=>[a,q],Ae=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-combo-basic"]],standalone:false,decls:1,vars:6,consts:[["name","combo","p-label","PO Combo",3,"p-options"]],template:function(p,n){p&1&&zl(0,"po-combo",0),p&2&&nw("p-options",dN(3,rt,lN(1,at),lN(2,lt)));},dependencies:[v3],encapsulation:2,changeDetection:1})}return a})();var mt=a=>({"docs-sample-code-tabs":a}),Ie=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-combo-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Combo Basic"),og(),Il(4,"a",2),ft("click",function(){return n.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-combo-basic/sample-po-combo-basic.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-combo name="combo" p-label="PO Combo" [p-options]="[{ value: 'Option 1' }, { value: 'Option 2' }]"> </po-combo>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-combo-basic/sample-po-combo-basic.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-combo-basic',
  templateUrl: './sample-po-combo-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoComboBasicComponent {}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-combo-basic"),og(),zl(23,"hr")),p&2&&(Lp(5),Ux("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,mt,n.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,Ae],encapsulation:2})}return a})();var Ge=(()=>{class a{helperText;combo;comboOptionGroupSwitch;customLiterals;debounceTime;event;fieldLabel;fieldValue;filterMinlength;filterMode;filterService;help;icon;label;literals;optionsGroup;optionsGroupList;placeholder;properties;fieldErrorMessage;option;options;selectedOptionsGroup;size;listboxPosition="bottom";filterModeOptions=[{label:"Starts With",value:"startsWith"},{label:"Contains",value:"contains"},{label:"Ends With",value:"endsWith"}];listboxPositionOptions=[{label:"top",value:"top"},{label:"bottom",value:"bottom"}];iconsOptions=[{label:"an an-building-apartment",value:"an an-building-apartment"},{label:"an an-gas-pump",value:"an an-gas-pump"},{label:"fa fa-calculator",value:"fa fa-calculator"}];propertiesOptions=[{value:"changeOnEnter",label:"Change On Enter"},{value:"disabled",label:"Disabled"},{value:"optional",label:"Optional"},{value:"disabledInitFilter",label:"Disabled Init Filter"},{value:"required",label:"Required"},{value:"showRequired",label:"Show Required"},{value:"sort",label:"Sort"},{value:"clean",label:"Clean"},{value:"disabledTabFilter",label:"Disabled Tab Filter"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"},{value:"loading",label:"Loading"},{value:"compactLabel",label:"Compact Label"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore();}addOption(){this.options=this.verifyOptionObject(this.options.concat(),this.option,this.optionsGroup),this.option={label:void 0,value:void 0};}changeEvent(m){this.event=m;}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals);}catch(m){this.customLiterals=void 0;}}optionsGroupSelection(){this.optionsGroup=this.selectedOptionsGroup;}restore(){this.helperText="",this.combo=void 0,this.comboOptionGroupSwitch=false,this.customLiterals=void 0,this.event="",this.debounceTime=void 0,this.fieldLabel="",this.fieldValue="",this.filterMinlength=void 0,this.filterService="",this.filterMode=void 0,this.help=void 0,this.label=void 0,this.literals="",this.icon=void 0,this.option={label:void 0,value:void 0},this.options=[],this.optionsGroup=void 0,this.optionsGroupList=[],this.placeholder="",this.properties=[],this.fieldErrorMessage="",this.selectedOptionsGroup=void 0,this.size="medium";}insertGroupIntoSelectInput(m){this.selectedOptionsGroup=m,this.optionsGroupList=[...this.optionsGroupList,{label:m,value:m}];}verifyOptionObject(m,p,n){let{label:d,value:c}=p;if(n){let i=m.findIndex(Ce=>Ce.label===n&&"options"in Ce);return i===-1?(this.insertGroupIntoSelectInput(n),[...m,{label:n,options:[{label:d,value:c}]}]):(m[i].options.push({label:d,value:c}),m)}return [...m,{label:d,value:c}]}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-combo-labs"]],standalone:false,decls:44,vars:62,consts:[["fOption","ngForm"],["f","ngForm"],["name","combo",1,"po-md-12",3,"ngModelChange","p-change","p-keydown","ngModel","p-helper","p-change-on-enter","p-clean","p-debounce-time","p-disabled","p-disabled-init-filter","p-disabled-tab-filter","p-field-label","p-field-value","p-filter-minlength","p-filter-mode","p-filter-service","p-help","p-icon","p-label","p-literals","p-loading","p-optional","p-options","p-placeholder","p-required","p-field-error-message","p-show-required","p-sort","p-size","p-error-limit","p-label-text-wrap","p-compact-label","p-listbox-control-position"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["p-label","Po combo options group"],["name","comboOptionGroupSwitch","p-label","Combo options group",1,"po-lg-4","po-md-12",3,"ngModelChange","ngModel"],["name","selectedsOptionsGroup","p-label","Options group list",1,"po-lg-4","po-md-6",3,"ngModelChange","p-change","ngModel","p-disabled","p-options"],["name","optionsGroup","p-label","New Options Group","p-required","",1,"po-lg-4","po-md-6",3,"ngModelChange","ngModel","p-disabled"],["p-label","Po combo options"],["name","optionLabel","p-label","Option Label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","optionValue","p-label","Option Value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add Option",1,"po-lg-2","po-md-4",3,"p-click","p-disabled"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","fieldErrorMessage","p-clean","","p-label","Field Error Message",1,"po-md-6",3,"ngModelChange","ngModel"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","icon","p-columns","4","p-label","Icon",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","filterMode","p-columns","4","p-label","Filter Mode",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","listboxPosition","p-label","Listbox Position",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","filterService","p-clean","","p-help","https://po-sample-api.onrender.com/v1/heroes","p-label","Filter Service",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel"],["name","literals","p-help",'Ex.: {"noData": "Sem dados a serem exibidos"}',"p-label","Literals",1,"po-md-12","po-lg-6",3,"ngModelChange","p-change","ngModel"],["name","fieldValue","p-clean","","p-label","Field Value",1,"po-md-6",3,"ngModelChange","ngModel"],["name","fieldLabel","p-clean","","p-label","Field Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","debounceTime","p-clean","","p-label","Debounce Time",1,"po-md-6",3,"ngModelChange","ngModel"],["name","filterMinlength","p-clean","","p-label","Filter Min Length",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(p,n){if(p&1){let d=Dx();Il(0,"po-combo",2),ww("ngModelChange",function(i){return Xy(d),eN(n.combo,i)||(n.combo=i),Qy(i)}),ft("p-change",function(){return n.changeEvent("p-change")})("p-keydown",function(){return n.changeEvent("p-keydown")}),og(),QA(),zl(1,"po-divider"),Il(2,"div",3),zl(3,"po-info",4)(4,"po-info",5),og(),zl(5,"po-divider"),Il(6,"form",null,0),zl(8,"po-divider",6),Il(9,"div",3)(10,"po-switch",7),ww("ngModelChange",function(i){return Xy(d),eN(n.comboOptionGroupSwitch,i)||(n.comboOptionGroupSwitch=i),Qy(i)}),og(),QA(),Il(11,"po-select",8),ww("ngModelChange",function(i){return Xy(d),eN(n.selectedOptionsGroup,i)||(n.selectedOptionsGroup=i),Qy(i)}),ft("p-change",function(){return n.optionsGroupSelection()}),og(),QA(),Il(12,"po-input",9),ww("ngModelChange",function(i){return Xy(d),eN(n.optionsGroup,i)||(n.optionsGroup=i),Qy(i)}),og(),QA(),og(),zl(13,"po-divider",10),Il(14,"div",3)(15,"po-input",11),ww("ngModelChange",function(i){return Xy(d),eN(n.option.label,i)||(n.option.label=i),Qy(i)}),og(),QA(),Il(16,"po-input",12),ww("ngModelChange",function(i){return Xy(d),eN(n.option.value,i)||(n.option.value=i),Qy(i)}),og(),QA(),og(),Il(17,"div",3)(18,"po-button",13),ft("p-click",function(){return n.addOption()}),og()()(),zl(19,"po-divider"),Il(20,"form",null,1)(22,"po-input",14),ww("ngModelChange",function(i){return Xy(d),eN(n.label,i)||(n.label=i),Qy(i)}),og(),QA(),Il(23,"po-input",15),ww("ngModelChange",function(i){return Xy(d),eN(n.help,i)||(n.help=i),Qy(i)}),og(),QA(),Il(24,"po-input",16),ww("ngModelChange",function(i){return Xy(d),eN(n.helperText,i)||(n.helperText=i),Qy(i)}),og(),QA(),Il(25,"po-input",17),ww("ngModelChange",function(i){return Xy(d),eN(n.placeholder,i)||(n.placeholder=i),Qy(i)}),og(),QA(),Il(26,"po-input",18),ww("ngModelChange",function(i){return Xy(d),eN(n.fieldErrorMessage,i)||(n.fieldErrorMessage=i),Qy(i)}),og(),QA(),Il(27,"div",3)(28,"po-checkbox-group",19),ww("ngModelChange",function(i){return Xy(d),eN(n.properties,i)||(n.properties=i),Qy(i)}),og(),QA(),Il(29,"po-radio-group",20),ww("ngModelChange",function(i){return Xy(d),eN(n.icon,i)||(n.icon=i),Qy(i)}),og(),QA(),Il(30,"po-radio-group",21),ww("ngModelChange",function(i){return Xy(d),eN(n.filterMode,i)||(n.filterMode=i),Qy(i)}),og(),QA(),Il(31,"po-radio-group",22),ww("ngModelChange",function(i){return Xy(d),eN(n.size,i)||(n.size=i),Qy(i)}),og(),QA(),Il(32,"po-radio-group",23),ww("ngModelChange",function(i){return Xy(d),eN(n.listboxPosition,i)||(n.listboxPosition=i),Qy(i)}),og(),QA(),og(),Il(33,"div",3)(34,"po-input",24),ww("ngModelChange",function(i){return Xy(d),eN(n.filterService,i)||(n.filterService=i),Qy(i)}),og(),QA(),Il(35,"po-input",25),ww("ngModelChange",function(i){return Xy(d),eN(n.literals,i)||(n.literals=i),Qy(i)}),ft("p-change",function(){return n.changeLiterals()}),og(),QA(),og(),Il(36,"div",3)(37,"po-input",26),ww("ngModelChange",function(i){return Xy(d),eN(n.fieldValue,i)||(n.fieldValue=i),Qy(i)}),og(),QA(),Il(38,"po-input",27),ww("ngModelChange",function(i){return Xy(d),eN(n.fieldLabel,i)||(n.fieldLabel=i),Qy(i)}),og(),QA(),og(),Il(39,"div",3)(40,"po-number",28),ww("ngModelChange",function(i){return Xy(d),eN(n.debounceTime,i)||(n.debounceTime=i),Qy(i)}),og(),QA(),Il(41,"po-number",29),ww("ngModelChange",function(i){return Xy(d),eN(n.filterMinlength,i)||(n.filterMinlength=i),Qy(i)}),og(),QA(),og(),Il(42,"div",3)(43,"po-button",30),ft("p-click",function(){return n.restore()}),og()()();}if(p&2){let d=Ax(7);Ew("ngModel",n.combo),nw("p-helper",n.helperText)("p-change-on-enter",n.properties.includes("changeOnEnter"))("p-clean",n.properties.includes("clean"))("p-debounce-time",n.debounceTime)("p-disabled",n.properties.includes("disabled"))("p-disabled-init-filter",n.properties.includes("disableInitFilter"))("p-disabled-tab-filter",n.properties.includes("disabledTabFilter"))("p-field-label",n.fieldLabel)("p-field-value",n.fieldValue)("p-filter-minlength",n.filterMinlength)("p-filter-mode",n.filterMode)("p-filter-service",n.filterService)("p-help",n.help)("p-icon",n.icon)("p-label",n.label)("p-literals",n.customLiterals)("p-loading",n.properties.includes("loading"))("p-optional",n.properties.includes("optional"))("p-options",n.options)("p-placeholder",n.placeholder)("p-required",n.properties.includes("required"))("p-field-error-message",n.fieldErrorMessage)("p-show-required",n.properties.includes("showRequired"))("p-sort",n.properties.includes("sort"))("p-size",n.size)("p-error-limit",n.properties==null?null:n.properties.includes("errorLimit"))("p-label-text-wrap",n.properties==null?null:n.properties.includes("labelTextWrap"))("p-compact-label",n.properties==null?null:n.properties.includes("compactLabel"))("p-listbox-control-position",n.listboxPosition),e0(),Lp(3),nw("p-value",n.combo),Lp(),nw("p-value",n.event),Lp(6),Ew("ngModel",n.comboOptionGroupSwitch),e0(),Lp(),Ew("ngModel",n.selectedOptionsGroup),nw("p-disabled",!n.comboOptionGroupSwitch)("p-options",n.optionsGroupList),e0(),Lp(),Ew("ngModel",n.optionsGroup),nw("p-disabled",!n.comboOptionGroupSwitch),e0(),Lp(3),Ew("ngModel",n.option.label),e0(),Lp(),Ew("ngModel",n.option.value),e0(),Lp(2),nw("p-disabled",d.form.invalid),Lp(4),Ew("ngModel",n.label),e0(),Lp(),Ew("ngModel",n.help),e0(),Lp(),Ew("ngModel",n.helperText),e0(),Lp(),Ew("ngModel",n.placeholder),e0(),Lp(),Ew("ngModel",n.fieldErrorMessage),e0(),Lp(2),Ew("ngModel",n.properties),nw("p-options",n.propertiesOptions),e0(),Lp(),Ew("ngModel",n.icon),nw("p-options",n.iconsOptions),e0(),Lp(),Ew("ngModel",n.filterMode),nw("p-options",n.filterModeOptions),e0(),Lp(),Ew("ngModel",n.size),nw("p-options",n.sizeOptions),e0(),Lp(),Ew("ngModel",n.listboxPosition),nw("p-options",n.listboxPositionOptions),e0(),Lp(2),Ew("ngModel",n.filterService),e0(),Lp(),Ew("ngModel",n.literals),e0(),Lp(2),Ew("ngModel",n.fieldValue),e0(),Lp(),Ew("ngModel",n.fieldLabel),e0(),Lp(2),Ew("ngModel",n.debounceTime),e0(),Lp(),Ew("ngModel",n.filterMinlength),e0();}},dependencies:[G9,$9,z9,mk,hk,Qt,mv,C3,v3,O3,Hhe,Dde,qhe,k3,Yhe],encapsulation:2,changeDetection:1})}return a})();var ct=a=>({"docs-sample-code-tabs":a}),je=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-combo-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Combo Labs"),og(),Il(4,"a",2),ft("click",function(){return n.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-combo-labs/sample-po-combo-labs.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-combo
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
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-combo-labs/sample-po-combo-labs.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-combo-labs"),og(),zl(23,"hr")),p&2&&(Lp(5),Ux("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,ct,n.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,Ge],encapsulation:2})}return a})();var Ee=(()=>{class a{getcities(){return [{label:"S\xE3o Paulo",options:[{label:"S\xE3o Paulo",value:"sao paulo"},{label:"Campinas",value:"campinas"}]},{label:"Paran\xE1",options:[{label:"S\xE3o Jos\xE9 dos Pinhais",value:"sao jose dos pinhais"},{label:"Londrina",value:"londrina"},{label:"Maring\xE1",value:"maringa"}]},{label:"Santa Catarina",options:[{label:"Joinville",value:"joinville"},{label:"Florian\xF3polis",value:"florianopolis"},{label:"Itaja\xED",value:"itajai"}]}]}getMedicalSpecialty(){return [{specialty:"Allergist",specialtyValue:"allergist"},{specialty:"Cardiologist",specialtyValue:"cardiologist"},{specialty:"General practitioner",specialtyValue:"generalPractitioner"},{specialty:"Dermatologist",specialtyValue:"dermatologist"},{specialty:"Gynecologist",specialtyValue:"gynecologist"},{specialty:"Nutritionist",specialtyValue:"nutritionist"},{specialty:"Pediatrist",specialtyValue:"pediatrist"},{specialty:"Psychiatrist",specialtyValue:"psychiatrist"},{specialty:"Orthopaedist",specialtyValue:"orthopaedist"}]}static \u0275fac=function(p){return new(p||a)};static \u0275prov=w({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();var bt=["schedulingForm"];function gt(a,q){if(a&1&&(Il(0,"div",3),zl(1,"po-avatar",15),Il(2,"p",14),Qx(3),og()()),a&2){let m=Sx().$implicit,p=Sx();Lp(),nw("p-src",p.getStateByLabel(m.label)),Lp(2),yw(m.label);}}function ht(a,q){if(a&1&&(Il(0,"div",14),Qx(1),og()),a&2){let m=Sx().$implicit;Lp(),yw(m.label);}}function St(a,q){if(a&1&&lx(0,gt,4,2,"div",3)(1,ht,2,1,"div",14),a&2){let m=q.$implicit;ux(m.options?0:1);}}var ze=(()=>{class a{poNotification=f(Yp);schedulingService=f(Ee);form;birthday;citiesOptions;city;email;informations;medicalSpecialty;medicalSpecialtyOptions;name;phone;typeScheduling;typeSchedulings=[{label:"Particular",value:"particular"},{label:"Health Insurance",value:"healthInsurance"}];ngOnInit(){this.citiesOptions=this.schedulingService.getcities(),this.medicalSpecialtyOptions=this.schedulingService.getMedicalSpecialty();}confirmPreAppointment(m=""){this.poNotification.success(`Great ${m}, your pre-appointment was successfully received!`),this.form.reset();}getStateByLabel(m){return `https://thf.totvs.com.br/sample/api/static/assets/${{"S\xE3o Paulo":"sp","Santa Catarina":"sc",Paran\u00E1:"pr"}[m]}.png`}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-combo-scheduling"]],viewQuery:function(p,n){if(p&1&&Gl(bt,7),p&2){let d;co(d=lo())&&(n.form=d.first);}},standalone:false,features:[we([Ee])],decls:20,vars:12,consts:[["schedulingForm","ngForm"],[1,"po-text-center"],[1,"po-font-title"],[1,"po-row"],["name","name","p-clean","","p-label","Name","p-required","",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","email","p-clean","","p-label","Email","p-placeholder","example@domain.com","p-required","",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","birthday","p-clean","","p-label","Birthday","p-placeholder","dd/mm/yyyy","p-required","",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","phone","p-clean","","p-label","Phone number","p-mask","(99) 99999-9999","p-placeholder","(99) 99999-9999","p-required","",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","city","p-icon","an an-map-trifold","p-label","Select a location","p-placeholder","Select a location","p-required","","p-sort","",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["p-combo-option-template",""],["name","typeScheduling","p-label","Type scheduling","p-required","","p-sort","",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","medicalSpecialty","p-icon","an an-flask","p-label","Medical Specialty/Exam","p-required","","p-sort","","p-field-label","specialty","p-field-value","specialtyValue",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","informations","p-help","Additional informations","p-label","Informations",1,"po-sm-12",3,"ngModelChange","ngModel"],["p-label","Schedule","p-kind","primary",1,"po-md-3",3,"p-click","p-disabled"],[1,"po-sm-10","po-md-9","po-lg-11"],["p-size","xs",1,"po-sm-2","po-md-3","po-lg-1","sample-combo-avatar-bg",3,"p-src"]],template:function(p,n){if(p&1){let d=Dx();Il(0,"div",1)(1,"div",2),Qx(2,"Pre-appointment scheduling"),og()(),Il(3,"form",null,0)(5,"div",3)(6,"po-input",4),ww("ngModelChange",function(i){return Xy(d),eN(n.name,i)||(n.name=i),Qy(i)}),og(),QA(),Il(7,"po-email",5),ww("ngModelChange",function(i){return Xy(d),eN(n.email,i)||(n.email=i),Qy(i)}),og(),QA(),og(),Il(8,"div",3)(9,"po-datepicker",6),ww("ngModelChange",function(i){return Xy(d),eN(n.birthday,i)||(n.birthday=i),Qy(i)}),og(),QA(),Il(10,"po-input",7),ww("ngModelChange",function(i){return Xy(d),eN(n.phone,i)||(n.phone=i),Qy(i)}),og(),QA(),og(),Il(11,"div",3)(12,"po-combo",8),ww("ngModelChange",function(i){return Xy(d),eN(n.city,i)||(n.city=i),Qy(i)}),JE(13,St,2,1,"ng-template",9),og(),QA(),Il(14,"po-select",10),ww("ngModelChange",function(i){return Xy(d),eN(n.typeScheduling,i)||(n.typeScheduling=i),Qy(i)}),og(),QA(),Il(15,"po-combo",11),ww("ngModelChange",function(i){return Xy(d),eN(n.medicalSpecialty,i)||(n.medicalSpecialty=i),Qy(i)}),og(),QA(),og(),Il(16,"div",3)(17,"po-textarea",12),ww("ngModelChange",function(i){return Xy(d),eN(n.informations,i)||(n.informations=i),Qy(i)}),og(),QA(),og(),Il(18,"div",3)(19,"po-button",13),ft("p-click",function(){return n.confirmPreAppointment(n.name)}),og()()();}if(p&2){let d=Ax(4);Lp(6),Ew("ngModel",n.name),e0(),Lp(),Ew("ngModel",n.email),e0(),Lp(2),Ew("ngModel",n.birthday),e0(),Lp(),Ew("ngModel",n.phone),e0(),Lp(2),Ew("ngModel",n.city),nw("p-options",n.citiesOptions),e0(),Lp(2),Ew("ngModel",n.typeScheduling),nw("p-options",n.typeSchedulings),e0(),Lp(),Ew("ngModel",n.medicalSpecialty),nw("p-options",n.medicalSpecialtyOptions),e0(),Lp(2),Ew("ngModel",n.informations),e0(),Lp(2),nw("p-disabled",d.invalid);}},dependencies:[G9,$9,z9,mk,hk,a3,Qt,v3,ede,Ede,kz,O3,qhe,$he],styles:[".sample-combo-avatar-bg[_ngcontent-%COMP%]{background-color:#fbfbfb}"],changeDetection:1})}return a})();var Et=a=>({"docs-sample-code-tabs":a}),Re=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-combo-scheduling-view"]],standalone:false,decls:34,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Combo - Scheduling"),og(),Il(4,"a",2),ft("click",function(){return n.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-combo-scheduling/sample-po-combo-scheduling.component.html"),og(),Il(13,"pre",7),Qx(14,`<div class="po-text-center">
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
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-combo-scheduling/sample-po-combo-scheduling.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),og(),Il(21,"label",6),Qx(22,"sample-po-combo-scheduling/sample-po-combo-scheduling.service.ts"),og(),Il(23,"pre",9),Qx(24,`import { Injectable } from '@angular/core';

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
`),og()()(),Il(25,"po-tab",10)(26,"div")(27,"label",6),Qx(28,"sample-po-combo-scheduling/sample-po-combo-scheduling.component.css"),og(),Il(29,"pre",11),Qx(30,`.sample-combo-avatar-bg {
  background-color: #fbfbfb;
}
`),og()()()()(),Il(31,"div",12),zl(32,"sample-po-combo-scheduling"),og(),zl(33,"hr")),p&2&&(Lp(5),Ux("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,Et,n.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,ze],encapsulation:2})}return a})();var vt=["transferForm"];function xt(a,q){if(a&1&&(Il(0,"div",3),zl(1,"po-avatar",15),Il(2,"div",16)(3,"div",17),Qx(4),og(),Il(5,"div",18),Qx(6),og()()()),a&2){let m=q.$implicit;Lp(4),yw(m.label),Lp(2),dg("Account: ",m.value);}}var Ue=(()=>{class a{poNotification=f(Yp);form;poModal;contact;dateTransfer=new Date;typeAccount="Checking Account";value;cancelAction={label:"Cancel",action:()=>this.poModal.close()};confirmAction={label:"Confirm",action:()=>this.confirmTransfer()};typeAccounts=[{label:"Checking Account",value:"Checking Account"},{label:"Savings Account",value:"Savings Account"}];confirmTransfer(){this.poModal.close(),this.poNotification.success("Successful Transfer"),this.formReset();}transfer(){this.poModal.open();}formReset(){this.form.reset({dateTransfer:new Date,typeAccount:"Checking Account"});}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-combo-transfer"]],viewQuery:function(p,n){if(p&1&&Gl(vt,7)(Yo,7),p&2){let d;co(d=lo())&&(n.form=d.first),co(d=lo())&&(n.poModal=d.first);}},standalone:false,decls:23,vars:15,consts:[["transferForm","ngForm"],[1,"po-text-center"],[1,"po-font-title"],[1,"po-row"],["name","typeAccount","p-label","From","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","contact","p-field-value","id","p-field-label","name","p-filter-service","https://po-sample-api.onrender.com/v1/people","p-icon","an an-user","p-label","To contact","p-placeholder","Select a contact","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-combo-option-template",""],["name","value","p-clean","","p-label","Value to transfer","p-placeholder","R$ 0,00","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","dateTransfer","p-label","Date to transfer","p-placeholder","dd/mm/yyyy","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Transfer","p-kind","primary",1,"po-md-3",3,"p-click","p-disabled"],["p-title","Do you confirm transfer?",3,"p-primary-action","p-secondary-action"],["p-label","From",1,"po-md-6",3,"p-value"],["p-label","To",1,"po-md-6",3,"p-value"],["p-label","Value",1,"po-md-6",3,"p-value"],["p-label","Date to transfer",1,"po-md-6",3,"p-value"],["p-size","sm",1,"po-sm-2","po-md-3","po-lg-1"],[1,"po-sm-10","po-md-9","po-lg-11"],[1,"po-font-text-large-bold"],[1,"po-font-text-smaller"]],template:function(p,n){if(p&1){let d=Dx();Il(0,"div",1)(1,"div",2),Qx(2,"Banking Transfer"),og()(),Il(3,"form",null,0)(5,"div",3)(6,"po-select",4),ww("ngModelChange",function(i){return Xy(d),eN(n.typeAccount,i)||(n.typeAccount=i),Qy(i)}),og(),QA(),Il(7,"po-combo",5),ww("ngModelChange",function(i){return Xy(d),eN(n.contact,i)||(n.contact=i),Qy(i)}),JE(8,xt,7,2,"ng-template",6),og(),QA(),og(),Il(9,"div",3)(10,"po-decimal",7),ww("ngModelChange",function(i){return Xy(d),eN(n.value,i)||(n.value=i),Qy(i)}),og(),QA(),Il(11,"po-datepicker",8),ww("ngModelChange",function(i){return Xy(d),eN(n.dateTransfer,i)||(n.dateTransfer=i),Qy(i)}),og(),QA(),og(),Il(12,"div",3)(13,"po-button",9),ft("p-click",function(){return n.transfer()}),og()()(),Il(14,"po-modal",10)(15,"div",3),zl(16,"po-info",11)(17,"po-info",12),og(),zl(18,"po-divider"),Il(19,"div",3),zl(20,"po-info",13)(21,"po-info",14),mN(22,"date"),og()();}if(p&2){let d=Ax(4);Lp(6),Ew("ngModel",n.typeAccount),nw("p-options",n.typeAccounts),e0(),Lp(),Ew("ngModel",n.contact),e0(),Lp(3),Ew("ngModel",n.value),e0(),Lp(),Ew("ngModel",n.dateTransfer),e0(),Lp(2),nw("p-disabled",d.invalid),Lp(),nw("p-primary-action",n.confirmAction)("p-secondary-action",n.cancelAction),Lp(2),nw("p-value",n.typeAccount),Lp(),nw("p-value",n.contact),Lp(3),nw("p-value",n.value),Lp(),nw("p-value",rN(yN(22,13,n.dateTransfer)));}},dependencies:[G9,$9,z9,mk,hk,a3,Qt,mv,v3,ede,Ede,uhe,qhe,Yhe,Yo,NO],encapsulation:2,changeDetection:1})}return a})();var wt=a=>({"docs-sample-code-tabs":a}),Qe=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-combo-transfer-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Combo - Banking Transfer"),og(),Il(4,"a",2),ft("click",function(){return n.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-combo-transfer/sample-po-combo-transfer.component.html"),og(),Il(13,"pre",7),Qx(14,`<div class="po-text-center">
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
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-combo-transfer/sample-po-combo-transfer.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-combo-transfer"),og(),zl(23,"hr")),p&2&&(Lp(5),Ux("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,wt,n.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,Ue],encapsulation:2})}return a})();function Pt(a,q){if(a&1&&(Il(0,"div",0),zl(1,"po-info",3)(2,"po-info",4)(3,"po-info",5),og()),a&2){let m=q;Lp(),nw("p-value",m.name),Lp(),nw("p-value",m.nickname),Lp(),nw("p-value",m.email);}}var Ke=(()=>{class a{http=f(nb);hero$;heroName;get knowMoreLabel(){return this.heroName?"Know more":void 0}knowMore(m){window.open(`http://google.com/search?q=${m}`,"_blank");}onChangeHero(m){this.hero$=this.getHero(m);}getHero(m){return this.http.get(`https://po-sample-api.onrender.com/v1/heroes/${m}`)}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-combo-heroes"]],standalone:false,decls:5,vars:5,consts:[[1,"po-row"],[1,"po-lg-6",3,"p-primary-action","p-primary-label"],["name","heroName","p-field-label","nickname","p-field-value","name","p-filter-service","https://po-sample-api.onrender.com/v1/heroes","p-label","Search a Hero","p-sort","",3,"ngModelChange","p-change","ngModel"],["p-label","Name",1,"po-md-4",3,"p-value"],["p-label","Nickname",1,"po-md-4",3,"p-value"],["p-label","Email",1,"po-md-4",3,"p-value"]],template:function(p,n){if(p&1&&(Il(0,"div",0)(1,"po-widget",1),ft("p-primary-action",function(){return n.knowMore(n.heroName)}),Il(2,"po-combo",2),ww("ngModelChange",function(c){return eN(n.heroName,c)||(n.heroName=c),c}),ft("p-change",function(c){return n.onChangeHero(c)}),og(),QA(),lx(3,Pt,4,3,"div",0),mN(4,"async"),og()()),p&2){let d;Lp(),nw("p-primary-label",n.knowMoreLabel),Lp(),Ew("ngModel",n.heroName),e0(),Lp(),ux((d=yN(4,3,n.hero$))?3:-1,d);}},dependencies:[$9,mk,v3,Yhe,yNe,SO],encapsulation:2,changeDetection:1})}return a})();var Tt=a=>({"docs-sample-code-tabs":a}),Je=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-combo-heroes-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Combo - Heroes"),og(),Il(4,"a",2),ft("click",function(){return n.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-combo-heroes/sample-po-combo-heroes.component.html"),og(),Il(13,"pre",7),Qx(14,`<div class="po-row">
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
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-combo-heroes/sample-po-combo-heroes.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { HttpClient } from '@angular/common/http';
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
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-combo-heroes"),og(),zl(23,"hr")),p&2&&(Lp(5),Ux("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,Tt,n.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,Ke],encapsulation:2})}return a})();function Lt(a,q){if(a&1&&(Il(0,"div",0),zl(1,"po-info",4)(2,"po-info",5)(3,"po-info",6),og()),a&2){let m=q;Lp(),nw("p-value",m.name),Lp(),nw("p-value",m.nickname),Lp(),nw("p-value",m.email);}}var Ye=(()=>{class a{http=f(nb);formBuilder=f(Z9);form;hero$;ngOnInit(){this.form=this.formBuilder.group({hero:[null,lm.required]});}get knowMoreLabel(){return this.form.valid?"Know more":void 0}knowMore(){let m=this.form.get("hero").value;window.open(`http://google.com/search?q=${m}`,"_blank");}onChangeHero(m){this.hero$=this.getHero(m);}getHero(m){return this.http.get(`https://po-sample-api.onrender.com/v1/heroes/${m}`)}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-combo-heroes-reactive-form"]],standalone:false,decls:6,vars:5,consts:[[1,"po-row"],[1,"po-lg-6",3,"p-primary-action","p-primary-label"],[3,"formGroup"],["name","heroName","formControlName","hero","p-field-label","nickname","p-field-value","name","p-filter-service","https://po-sample-api.onrender.com/v1/heroes","p-label","Search a Hero","p-sort","",3,"p-change"],["p-label","Name",1,"po-md-4",3,"p-value"],["p-label","Nickname",1,"po-md-4",3,"p-value"],["p-label","Email",1,"po-md-4",3,"p-value"]],template:function(p,n){if(p&1&&(Il(0,"div",0)(1,"po-widget",1),ft("p-primary-action",function(){return n.knowMore()}),Il(2,"div",2)(3,"po-combo",3),ft("p-change",function(c){return n.onChangeHero(c)}),og(),QA(),og(),lx(4,Lt,4,3,"div",0),mN(5,"async"),og()()),p&2){let d;Lp(),nw("p-primary-label",n.knowMoreLabel),Lp(),nw("formGroup",n.form),Lp(),e0(),Lp(),ux((d=yN(5,3,n.hero$))?4:-1,d);}},dependencies:[$9,z9,Ik,Ck,v3,Yhe,yNe,SO],encapsulation:2,changeDetection:1})}return a})();var Dt=a=>({"docs-sample-code-tabs":a}),Xe=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-combo-heroes-reactive-form-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Combo - Heroes Reactive Form"),og(),Il(4,"a",2),ft("click",function(){return n.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-combo-heroes-reactive-form/sample-po-combo-heroes-reactive-form.component.html"),og(),Il(13,"pre",7),Qx(14,`<div class="po-row">
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
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-combo-heroes-reactive-form/sample-po-combo-heroes-reactive-form.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { HttpClient } from '@angular/common/http';
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
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-combo-heroes-reactive-form"),og(),zl(23,"hr")),p&2&&(Lp(5),Ux("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,Dt,n.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,Ye],encapsulation:2})}return a})();function qt(a,q){if(a&1&&(Il(0,"div",0),zl(1,"po-info",3)(2,"po-info",4)(3,"po-info",5),og()),a&2){let m=q;Lp(),nw("p-value",m.name),Lp(),nw("p-value",m.nickname),Lp(),nw("p-value",m.email);}}var Ze=(()=>{class a{http=f(nb);peopleName;people$;onChangePeople(m){this.people$=this.getPeople(m);}getPeople(m){return this.http.get(`https://po-sample-api.onrender.com/v1/people/${m}`)}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-combo-infinity-scroll"]],standalone:false,decls:5,vars:5,consts:[[1,"po-row"],[1,"po-lg-6"],["p-filter-service","https://po-sample-api.onrender.com/v1/people","p-label","People","name","people","p-field-label","name","p-field-value","id",3,"ngModelChange","p-change","ngModel","p-infinite-scroll"],["p-label","Name",1,"po-md-4",3,"p-value"],["p-label","Nickname",1,"po-md-4",3,"p-value"],["p-label","Email",1,"po-md-4",3,"p-value"]],template:function(p,n){if(p&1&&(Il(0,"div",0)(1,"po-widget",1)(2,"po-combo",2),ww("ngModelChange",function(c){return eN(n.peopleName,c)||(n.peopleName=c),c}),ft("p-change",function(c){return n.onChangePeople(c)}),og(),QA(),lx(3,qt,4,3,"div",0),mN(4,"async"),og()()),p&2){let d;Lp(2),Ew("ngModel",n.peopleName),nw("p-infinite-scroll",true),e0(),Lp(),ux((d=yN(4,3,n.people$))?3:-1,d);}},dependencies:[$9,mk,v3,Yhe,yNe,SO],encapsulation:2,changeDetection:1})}return a})();var Nt=a=>({"docs-sample-code-tabs":a}),$e=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-combo-infinity-scroll-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Combo - Inifity Scroll"),og(),Il(4,"a",2),ft("click",function(){return n.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-combo-infinity-scroll/sample-po-combo-infinity-scroll.component.html"),og(),Il(13,"pre",7),Qx(14,`<div class="po-row">
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
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-combo-infinity-scroll/sample-po-combo-infinity-scroll.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { HttpClient } from '@angular/common/http';
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
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-combo-infinity-scroll"),og(),zl(23,"hr")),p&2&&(Lp(5),Ux("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,Nt,n.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,Ze],encapsulation:2})}return a})();var Bt=["bookingForm"],Ht=["datepicker"],et=(()=>{class a{poNotification=f(Yp);form;datepickerComponent;adults=1;category=false;checkin;checkout;children=0;hotel;rooms=1;filterParams={};adultsOptions=[{label:"1 Adult",value:1},{label:"2 Adults",value:2},{label:"3 Adults",value:3},{label:"4 Adults",value:4}];childrenOptions=[{label:"No Child",value:0},{label:"1 Child",value:1},{label:"2 Children",value:2}];roomsOptions=[{label:"1 Room",value:1},{label:"2 Rooms",value:2},{label:"3 Rooms",value:3}];booking(){this.poNotification.success("Hotel booked successfully"),this.formReset(),this.datepickerComponent.focus();}onChangeParams(m){this.filterParams=m?{category:"Luxo"}:{},this.hotel=void 0;}formReset(){this.form.reset({adults:1,category:false,children:0,rooms:1});}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-combo-hotels"]],viewQuery:function(p,n){if(p&1&&Gl(Bt,7)(Ht,7),p&2){let d;co(d=lo())&&(n.form=d.first),co(d=lo())&&(n.datepickerComponent=d.first);}},standalone:false,decls:18,vars:14,consts:[["bookingForm","ngForm"],["datepicker",""],[1,"po-text-center"],[1,"po-font-title"],[1,"po-row"],["name","checkin","p-label","Check In","p-placeholder","dd/mm/yyyy","p-required","",1,"po-md-4",3,"ngModelChange","ngModel","p-max-date"],["name","checkout","p-label","Check Out","p-placeholder","dd/mm/yyyy","p-required","",1,"po-md-4",3,"ngModelChange","ngModel","p-min-date"],["name","switch","p-label-off","No, thank you.","p-label-on","Yes, please.","p-label","Only Luxury Category",1,"po-md-4",3,"ngModelChange","p-change","ngModel"],["name","rooms","p-label","Rooms",1,"po-md-4",3,"ngModelChange","ngModel","p-options"],["name","children","p-label","Children",1,"po-md-4",3,"ngModelChange","ngModel","p-options"],["name","adults","p-label","Adults",1,"po-md-4",3,"ngModelChange","ngModel","p-options"],["name","hotel","p-debounce-time","500","p-disabled-init-filter","","p-filter-minlength","1","p-icon","an an-magnifying-glass","p-required","","p-field-label","name","p-field-value","value","p-label","Search a hotel","p-sort","","p-filter-service","https://po-sample-api.onrender.com/v1/hotels","p-listbox-control-position","top",1,"po-sm-12",3,"ngModelChange","ngModel","p-filter-params"],["p-label","Booking","p-kind","primary",1,"po-md-3",3,"p-click","p-disabled"]],template:function(p,n){if(p&1){let d=Dx();Il(0,"div",2)(1,"div",3),Qx(2,"Booking a Hotel"),og()(),Il(3,"form",null,0)(5,"div",4)(6,"po-datepicker",5,1),ww("ngModelChange",function(i){return Xy(d),eN(n.checkin,i)||(n.checkin=i),Qy(i)}),og(),QA(),Il(8,"po-datepicker",6),ww("ngModelChange",function(i){return Xy(d),eN(n.checkout,i)||(n.checkout=i),Qy(i)}),og(),QA(),Il(9,"po-switch",7),ww("ngModelChange",function(i){return Xy(d),eN(n.category,i)||(n.category=i),Qy(i)}),ft("p-change",function(i){return n.onChangeParams(i)}),og(),QA(),og(),Il(10,"div",4)(11,"po-select",8),ww("ngModelChange",function(i){return Xy(d),eN(n.rooms,i)||(n.rooms=i),Qy(i)}),og(),QA(),Il(12,"po-select",9),ww("ngModelChange",function(i){return Xy(d),eN(n.children,i)||(n.children=i),Qy(i)}),og(),QA(),Il(13,"po-select",10),ww("ngModelChange",function(i){return Xy(d),eN(n.adults,i)||(n.adults=i),Qy(i)}),og(),QA(),og(),Il(14,"div",4)(15,"po-combo",11),ww("ngModelChange",function(i){return Xy(d),eN(n.hotel,i)||(n.hotel=i),Qy(i)}),og(),QA(),og(),Il(16,"div",4)(17,"po-button",12),ft("p-click",function(){return n.booking()}),og()()();}if(p&2){let d=Ax(4);Lp(6),Ew("ngModel",n.checkin),nw("p-max-date",n.checkout),e0(),Lp(2),Ew("ngModel",n.checkout),nw("p-min-date",n.checkin),e0(),Lp(),Ew("ngModel",n.category),e0(),Lp(2),Ew("ngModel",n.rooms),nw("p-options",n.roomsOptions),e0(),Lp(),Ew("ngModel",n.children),nw("p-options",n.childrenOptions),e0(),Lp(),Ew("ngModel",n.adults),nw("p-options",n.adultsOptions),e0(),Lp(2),Ew("ngModel",n.hotel),nw("p-filter-params",n.filterParams),e0(),Lp(2),nw("p-disabled",d.invalid);}},dependencies:[G9,$9,z9,mk,hk,Qt,v3,Ede,qhe,k3],encapsulation:2,changeDetection:1})}return a})();var It=a=>({"docs-sample-code-tabs":a}),tt=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-combo-hotels-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Combo - Booking Hotel"),og(),Il(4,"a",2),ft("click",function(){return n.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-combo-hotels/sample-po-combo-hotels.component.html"),og(),Il(13,"pre",7),Qx(14,`<div class="po-text-center">
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
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-combo-hotels/sample-po-combo-hotels.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-combo-hotels"),og(),zl(23,"hr")),p&2&&(Lp(5),Ux("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,It,n.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,et],encapsulation:2})}return a})();var ot=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-combo-doc"]],standalone:false,decls:1854,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoComboFilterMode"],["pan","",1,"docs-api-property-type","any"],["pan","",1,"docs-api-property-type","PoComboFilter"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","'top'"],["pan","",1,"docs-api-property-type","'bottom'"],["pan","",1,"docs-api-property-type","PoComboLiterals"],["href","/documentation/po-i18n"],["pan","",1,"docs-api-property-type","Array<PoComboOption"],["pan","",1,"docs-api-property-type","PoComboOptionGroup"],["pan","",1,"docs-api-property-type","any>"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-helper"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type"],["pan","",1,"docs-api-property-type","Array<PoComboOption>"]],template:function(p,n){p&1&&(Il(0,"div",0)(1,"p",1)(2,"code"),Qx(3,"import { PoFieldModule } from '@po-ui/ng-components';"),og()(),Il(4,"div",2)(5,"p"),Qx(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),og(),Il(7,"blockquote")(8,"p"),Qx(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),Il(10,"code"),Qx(11,"FormsModule"),og(),Qx(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Il(13,"code"),Qx(14,"ReactiveFormsModule"),og(),Qx(15,", ambos nativos do Angular."),og()()(),Il(16,"h3",3),Qx(17,"Componente"),og(),Il(18,"h4",4)(19,"code",5),Qx(20,"PoComboComponent"),og()(),Il(21,"div",2)(22,"p"),Qx(23,"O "),Il(24,"code"),Qx(25,"po-combo"),og(),Qx(26," exibe uma lista de op\xE7\xF5es com f\xE1cil sele\xE7\xE3o e filtragem."),og(),Il(27,"p"),Qx(28,"Al\xE9m da exibi\xE7\xE3o padr\xE3o, nele \xE9 poss\xEDvel listar as op\xF5es em agrupamentos."),og(),Il(29,"p"),Qx(30,"\xC9 poss\xEDvel selecionar e navegar entre as op\xE7\xF5es da lista tanto atrav\xE9s do "),Il(31,"em"),Qx(32,"mouse"),og(),Qx(33,` quanto do teclado. No teclado navegue com
as setas e pressione `),Il(34,"em"),Qx(35,"Enter"),og(),Qx(36," na op\xE7\xE3o que desejar."),og(),Il(37,"p"),Qx(38,"Com ele tamb\xE9m \xE9 poss\xEDvel definir uma lista \xE0 partir da requisi\xE7\xE3o de um servi\xE7o definido em "),Il(39,"code"),Qx(40,"p-filter-service"),og(),Qx(41,"."),og(),Il(42,"p"),Qx(43,"Em "),Il(44,"code"),Qx(45,"p-filter-mode"),og(),Qx(46,", o filtro poder\xE1 ser configurado para buscar op\xF5es que correspondam ao in\xEDcio, fim ou que contenha o valor digitado."),og(),Il(47,"p"),Qx(48,"O "),Il(49,"code"),Qx(50,"po-combo"),og(),Qx(51," guarda o \xFAltimo valor caso o usu\xE1rio desista de uma busca, deixando o campo ou pressionando "),Il(52,"em"),Qx(53,"Esc"),og(),Qx(54,`. Caso seja digitado no
campo de busca a descri\xE7\xE3o completa de um item, ent\xE3o a sele\xE7\xE3o ser\xE1 automaticamente efetuada ao deixar o campo ou pressionando `),Il(55,"em"),Qx(56,"Enter"),og(),Qx(57,"."),og(),Il(58,"p"),Qx(59,`Utilizando po-combo com servi\xE7o, \xE9 possivel digitar um valor no campo de entrada e pressionar a tecla 'tab' para que o componente
fa\xE7a uma requisi\xE7\xE3o \xE0 URL informada passando o valor digitado no campo. Se encontrado o valor, ent\xE3o o mesmo ser\xE1 selecionado, caso
n\xE3o seja encontrado, ent\xE3o a lista de itens voltar\xE1 para o estado inicial.`),og(),Il(60,"h4"),Qx(61,"Tokens customiz\xE1veis"),og(),Il(62,"p"),Qx(63,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),og(),Il(64,"blockquote")(65,"p"),Qx(66,"Para maiores informa\xE7\xF5es, acesse o guia "),Il(67,"a",6),Qx(68,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),Qx(69,"."),og()(),Il(70,"table")(71,"thead")(72,"tr")(73,"th"),Qx(74,"Propriedade"),og(),Il(75,"th"),Qx(76,"Descri\xE7\xE3o"),og(),Il(77,"th"),Qx(78,"Valor Padr\xE3o"),og()()(),Il(79,"tbody")(80,"tr")(81,"td")(82,"strong"),Qx(83,"Default Values"),og()(),zl(84,"td")(85,"td"),og(),Il(86,"tr")(87,"td")(88,"code"),Qx(89,"--font-family"),og()(),Il(90,"td"),Qx(91,"Fam\xEDlia tipogr\xE1fica usada"),og(),Il(92,"td")(93,"code"),Qx(94,"var(--font-family-theme)"),og()()(),Il(95,"tr")(96,"td")(97,"code"),Qx(98,"--font-size"),og()(),Il(99,"td"),Qx(100,"Tamanho da fonte"),og(),Il(101,"td")(102,"code"),Qx(103,"var(--font-size-default)"),og()()(),Il(104,"tr")(105,"td")(106,"code"),Qx(107,"--text-color"),og()(),Il(108,"td"),Qx(109,"Cor do texto"),og(),Il(110,"td")(111,"code"),Qx(112,"var(--color-neutral-dark-90)"),og()()(),Il(113,"tr")(114,"td")(115,"code"),Qx(116,"--text-color-placeholder"),og()(),Il(117,"td"),Qx(118,"Cor do texto no placeholder"),og(),Il(119,"td")(120,"code"),Qx(121,"var(--color-neutral-light-30)"),og()()(),Il(122,"tr")(123,"td")(124,"code"),Qx(125,"--color"),og()(),Il(126,"td"),Qx(127,"Cor principal do Combo"),og(),Il(128,"td")(129,"code"),Qx(130,"var(--color-neutral-dark-70)"),og()()(),Il(131,"tr")(132,"td")(133,"code"),Qx(134,"--background"),og()(),Il(135,"td"),Qx(136,"Cor de background"),og(),Il(137,"td")(138,"code"),Qx(139,"var(--color-neutral-light-05)"),og()()(),Il(140,"tr")(141,"td")(142,"code"),Qx(143,"--border-radius"),og()(),Il(144,"td"),Qx(145,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),og(),Il(146,"td")(147,"code"),Qx(148,"var(--border-width-lg)"),og()()(),Il(149,"tr")(150,"td")(151,"code"),Qx(152,"--min-width"),og()(),Il(153,"td"),Qx(154,"Largura m\xEDnima do combo"),og(),Il(155,"td")(156,"code"),Qx(157,"150px"),og()()(),Il(158,"tr")(159,"td")(160,"code"),Qx(161,"--field-container-title-justify"),og()(),Il(162,"td"),Qx(163,"Alinhamento horizontal do t\xEDtulo ("),Il(164,"code"),Qx(165,"justify-content"),og(),Qx(166,")"),og(),Il(167,"td")(168,"code"),Qx(169,"space-between"),og()()(),Il(170,"tr")(171,"td")(172,"code"),Qx(173,"--field-container-title-flex"),og()(),Il(174,"td"),Qx(175,"Flex do t\xEDtulo ("),Il(176,"code"),Qx(177,"flex"),og(),Qx(178,")"),og(),Il(179,"td")(180,"code"),Qx(181,"1 auto"),og()()(),Il(182,"tr")(183,"td")(184,"strong"),Qx(185,"Hover"),og()(),zl(186,"td")(187,"td"),og(),Il(188,"tr")(189,"td")(190,"code"),Qx(191,"--color-hover"),og()(),Il(192,"td"),Qx(193,"Cor principal no estado hover"),og(),Il(194,"td")(195,"code"),Qx(196,"var(--color-action-hover)"),og()()(),Il(197,"tr")(198,"td")(199,"code"),Qx(200,"--background-hover"),og()(),Il(201,"td"),Qx(202,"Cor de background no estado hover"),og(),Il(203,"td")(204,"code"),Qx(205,"var(--color-brand-01-lightest)"),og()()(),Il(206,"tr")(207,"td")(208,"strong"),Qx(209,"Focused"),og()(),zl(210,"td")(211,"td"),og(),Il(212,"tr")(213,"td")(214,"code"),Qx(215,"--color-focused"),og()(),Il(216,"td"),Qx(217,"Cor principal no estado de focus"),og(),Il(218,"td")(219,"code"),Qx(220,"var(--color-action-default)"),og()()(),Il(221,"tr")(222,"td")(223,"code"),Qx(224,"--outline-color-focused"),og()(),Il(225,"td"),Qx(226,"Cor do outline do estado de focus"),og(),Il(227,"td")(228,"code"),Qx(229,"var(--color-action-focus)"),og()()(),Il(230,"tr")(231,"td")(232,"strong"),Qx(233,"Error"),og()(),zl(234,"td")(235,"td"),og(),Il(236,"tr")(237,"td")(238,"code"),Qx(239,"--color-error"),og()(),Il(240,"td"),Qx(241,"Cor principal no estado de erro"),og(),Il(242,"td")(243,"code"),Qx(244,"var(--color-feedback-negative-base)"),og()()(),Il(245,"tr")(246,"td")(247,"strong"),Qx(248,"Disabled"),og()(),zl(249,"td")(250,"td"),og(),Il(251,"tr")(252,"td")(253,"code"),Qx(254,"--color-disabled"),og()(),Il(255,"td"),Qx(256,"Cor principal no estado disabled"),og(),Il(257,"td")(258,"code"),Qx(259,"var(--color-neutral-light-30)"),og()()(),Il(260,"tr")(261,"td")(262,"code"),Qx(263,"--background-disabled"),og()(),Il(264,"td"),Qx(265,"Cor de background no estado disabled"),og(),Il(266,"td")(267,"code"),Qx(268,"var(--color-neutral-light-20)"),og()()(),Il(269,"tr")(270,"td")(271,"strong"),Qx(272,"Suggestion"),og()(),zl(273,"td")(274,"td"),og(),Il(275,"tr")(276,"td")(277,"code"),Qx(278,"--text-color-suggestion"),og()(),Il(279,"td"),Qx(280,"Cor do texto no estado suggestion"),og(),Il(281,"td")(282,"code"),Qx(283,"var(--color-neutral-mid-60)"),og()()(),Il(284,"tr")(285,"td")(286,"code"),Qx(287,"--background-suggestion"),og()(),Il(288,"td"),Qx(289,"Cor do background no estado suggestion"),og(),Il(290,"td")(291,"code"),Qx(292,"var(--color-brand-01-lightest)"),og()()()()()(),Il(293,"div",7)(294,"h4",8),Qx(295,"Seletor"),og(),Il(296,"pre",9),Qx(297,`<po-combo
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
`),og()(),Il(298,"h4",10),Qx(299,"Propriedades"),og(),Il(300,"table",11)(301,"tr",12)(302,"th",13),Qx(303,"Nome"),og(),Il(304,"th",13),Qx(305,"Tipo"),og(),Il(306,"th",13),Qx(307,"Padr\xE3o"),og(),Il(308,"th",13),Qx(309,"Descri\xE7\xE3o"),og()(),Il(310,"tr",14)(311,"td",15)(312,"div",16)(313,"span",17),Qx(314," (p-additional-help)"),zl(315,"br"),og()(),Il(316,"div",18),Qx(317,"Deprecated"),og()(),Il(318,"td",19)(319,"code",20),Qx(320,"EventEmitter"),og()(),Il(321,"td",21),Qx(322,"-"),og(),Il(323,"td",22)(324,"em")(325,"strong"),Qx(326,"(opcional)"),og()(),Il(327,"p"),Qx(328,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),og(),Il(329,"blockquote")(330,"p"),Qx(331,"Essa propriedade est\xE1 "),Il(332,"strong"),Qx(333,"depreciada"),og(),Qx(334," e ser\xE1 removida na vers\xE3o "),Il(335,"code"),Qx(336,"23.x.x"),og(),Qx(337,". Recomendamos utilizar a propriedade "),Il(338,"code"),Qx(339,"p-helper"),og(),Qx(340," que oferece mais recursos e flexibilidade."),og()()()(),Il(341,"tr",14)(342,"td",15)(343,"div",23)(344,"span",24),Qx(345," p-additional-help-tooltip"),zl(346,"br"),og()(),Il(347,"div",18),Qx(348,"Deprecated"),og()(),Il(349,"td",19)(350,"code",25),Qx(351,"string"),og()(),Il(352,"td",21),Qx(353,"-"),og(),Il(354,"td",22)(355,"em")(356,"strong"),Qx(357,"(opcional)"),og()(),Il(358,"p"),Qx(359,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),Il(360,"code"),Qx(361,"po-helper"),og(),Qx(362,`.
`),Il(363,"strong"),Qx(364,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),og()(),Il(365,"blockquote")(366,"p"),Qx(367,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),og()(),Il(368,"blockquote")(369,"p"),Qx(370,"Essa propriedade est\xE1 "),Il(371,"strong"),Qx(372,"depreciada"),og(),Qx(373," e ser\xE1 removida na vers\xE3o "),Il(374,"code"),Qx(375,"23.x.x"),og(),Qx(376,". Recomendamos utilizar a propriedade "),Il(377,"code"),Qx(378,"p-helper"),og(),Qx(379," que oferece mais recursos e flexibilidade."),og()()()(),Il(380,"tr",14)(381,"td",15)(382,"div",23)(383,"span",24),Qx(384," p-append-in-body"),zl(385,"br"),og()()(),Il(386,"td",19)(387,"code",26),Qx(388,"boolean"),og()(),Il(389,"td",21)(390,"p")(391,"code"),Qx(392,"false"),og()()(),Il(393,"td",22)(394,"em")(395,"strong"),Qx(396,"(opcional)"),og()(),Il(397,"p"),Qx(398,"Define que o "),Il(399,"code"),Qx(400,"listbox"),og(),Qx(401," e/ou popover ("),Il(402,"code"),Qx(403,"p-helper"),og(),Qx(404," e/ou "),Il(405,"code"),Qx(406,"p-error-limit"),og(),Qx(407,`) ser\xE3o inclu\xEDdos no body da
p\xE1gina e n\xE3o dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou
overflow escondido,garantindo o posicionamento correto de ambos pr\xF3ximo ao elemento.`),og(),Il(408,"blockquote")(409,"p"),Qx(410,"Quando utilizado com "),Il(411,"code"),Qx(412,"p-helper"),og(),Qx(413,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),og()()()(),Il(414,"tr",14)(415,"td",15)(416,"div",23)(417,"span",24),Qx(418," p-auto-focus"),zl(419,"br"),og()()(),Il(420,"td",19)(421,"code",26),Qx(422,"boolean"),og()(),Il(423,"td",21)(424,"p")(425,"code"),Qx(426,"false"),og()()(),Il(427,"td",22)(428,"em")(429,"strong"),Qx(430,"(opcional)"),og()(),Il(431,"p"),Qx(432,"Aplica foco no elemento ao ser iniciado."),og(),Il(433,"blockquote")(434,"p"),Qx(435,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),og()()()(),Il(436,"tr",14)(437,"td",15)(438,"div",16)(439,"span",17),Qx(440," (p-blur)"),zl(441,"br"),og()()(),Il(442,"td",19)(443,"code",20),Qx(444,"EventEmitter"),og()(),Il(445,"td",21),Qx(446,"-"),og(),Il(447,"td",22)(448,"em")(449,"strong"),Qx(450,"(opcional)"),og()(),Il(451,"p"),Qx(452,"Evento disparado ao sair do campo."),og()()(),Il(453,"tr",14)(454,"td",15)(455,"div",23)(456,"span",24),Qx(457," p-cache"),zl(458,"br"),og()()(),Il(459,"td",19)(460,"code",26),Qx(461,"boolean"),og()(),Il(462,"td",21)(463,"p")(464,"code"),Qx(465,"true"),og()()(),Il(466,"td",22)(467,"em")(468,"strong"),Qx(469,"(opcional)"),og()(),Il(470,"p"),Qx(471,"Define se o componente ir\xE1 guardar o valor do model para evitar requisi\xE7\xF5es repetidas."),og(),Il(472,"blockquote")(473,"p"),Qx(474,"Caso o valor seja "),Il(475,"code"),Qx(476,"false"),og(),Qx(477,", o componente far\xE1 uma nova requisi\xE7\xE3o mesmo que o valor procurado seja o mesmo do model."),og()()()(),Il(478,"tr",14)(479,"td",15)(480,"div",16)(481,"span",17),Qx(482," (p-change)"),zl(483,"br"),og()()(),Il(484,"td",19)(485,"code",20),Qx(486,"EventEmitter"),og()(),Il(487,"td",21),Qx(488,"-"),og(),Il(489,"td",22)(490,"em")(491,"strong"),Qx(492,"(opcional)"),og()(),Il(493,"p"),Qx(494,"Deve ser informada uma fun\xE7\xE3o que ser\xE1 disparada quando houver altera\xE7\xF5es no ngModel. A fun\xE7\xE3o receber\xE1 como argumento o model modificado."),og(),Il(495,"blockquote")(496,"p"),Qx(497,"Pode-se optar pelo recebimento do objeto selecionado ao inv\xE9s do model atrav\xE9s da propriedade "),Il(498,"code"),Qx(499,"p-emit-object-value"),og(),Qx(500,"."),og()()()(),Il(501,"tr",14)(502,"td",15)(503,"div",23)(504,"span",24),Qx(505," p-change-on-enter"),zl(506,"br"),og()()(),Il(507,"td",19)(508,"code",26),Qx(509,"boolean"),og()(),Il(510,"td",21)(511,"p")(512,"code"),Qx(513,"false"),og()()(),Il(514,"td",22)(515,"em")(516,"strong"),Qx(517,"(opcional)"),og()(),Il(518,"p"),Qx(519,"Indica que o evento "),Il(520,"code"),Qx(521,"p-change"),og(),Qx(522,' s\xF3 ser\xE1 disparado ao clicar ou pressionar a tecla "Enter" sobre uma op\xE7\xE3o selecionada.'),og()()(),Il(523,"tr",14)(524,"td",15)(525,"div",23)(526,"span",24),Qx(527," p-clean"),zl(528,"br"),og()()(),Il(529,"td",19)(530,"code",26),Qx(531,"boolean"),og()(),Il(532,"td",21),Qx(533,"-"),og(),Il(534,"td",22)(535,"em")(536,"strong"),Qx(537,"(opcional)"),og()(),Il(538,"p"),Qx(539,"Se verdadeiro, o campo receber\xE1 um bot\xE3o para ser limpo."),og()()(),Il(540,"tr",14)(541,"td",15)(542,"div",23)(543,"span",24),Qx(544," p-compact-label"),zl(545,"br"),og()()(),Il(546,"td",19)(547,"code",26),Qx(548,"boolean"),og()(),Il(549,"td",21)(550,"p")(551,"code"),Qx(552,"false"),og()()(),Il(553,"td",22)(554,"em")(555,"strong"),Qx(556,"(opcional)"),og()(),Il(557,"p"),Qx(558,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),og(),Il(559,"p"),Qx(560,"Quando habilitado ("),Il(561,"code"),Qx(562,"true"),og(),Qx(563,"), o modo compacto afeta o conjunto composto por:"),og(),Il(564,"ul")(565,"li")(566,"code"),Qx(567,"po-label"),og()(),Il(568,"li")(569,"code"),Qx(570,"p-requirement (showRequired)"),og()(),Il(571,"li")(572,"code"),Qx(573,"po-helper"),og()()(),Il(574,"p"),Qx(575,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),og(),Il(576,"p"),Qx(577,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),og(),Il(578,"ul")(579,"li")(580,"code"),Qx(581,"--field-container-title-justify"),og()(),Il(582,"li")(583,"code"),Qx(584,"--field-container-title-flex"),og()()(),Il(585,"p"),Qx(586,"Exemplo:"),og(),Il(587,"pre")(588,"code"),Qx(589,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),og()(),Il(590,"p"),Qx(591,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),og()()(),Il(592,"tr",14)(593,"td",15)(594,"div",23)(595,"span",24),Qx(596," p-debounce-time"),zl(597,"br"),og()()(),Il(598,"td",19)(599,"code",27),Qx(600,"number"),og()(),Il(601,"td",21)(602,"p")(603,"code"),Qx(604,"400"),og()()(),Il(605,"td",22)(606,"em")(607,"strong"),Qx(608,"(opcional)"),og()(),Il(609,"p"),Qx(610,`Esta propriedade define em quanto tempo (em milissegundos), aguarda para acionar o evento de filtro ap\xF3s cada pressionamento de tecla.
Ser\xE1 utilizada apenas quando houver servi\xE7o (`),Il(611,"code"),Qx(612,"p-filter-service"),og(),Qx(613,")."),og()()(),Il(614,"tr",14)(615,"td",15)(616,"div",23)(617,"span",24),Qx(618," p-disabled"),zl(619,"br"),og()()(),Il(620,"td",19)(621,"code",26),Qx(622,"boolean"),og()(),Il(623,"td",21)(624,"p")(625,"code"),Qx(626,"false"),og()()(),Il(627,"td",22)(628,"em")(629,"strong"),Qx(630,"(opcional)"),og()(),Il(631,"p"),Qx(632,"Indica que o campo ser\xE1 desabilitado."),og()()(),Il(633,"tr",14)(634,"td",15)(635,"div",23)(636,"span",24),Qx(637," p-disabled-init-filter"),zl(638,"br"),og()()(),Il(639,"td",19)(640,"code",26),Qx(641,"boolean"),og()(),Il(642,"td",21)(643,"p")(644,"code"),Qx(645,"false"),og()()(),Il(646,"td",22)(647,"em")(648,"strong"),Qx(649,"(opcional)"),og()(),Il(650,"p"),Qx(651,"Desabilita o filtro inicial no servi\xE7o, que \xE9 executado no primeiro clique no campo."),og()()(),Il(652,"tr",14)(653,"td",15)(654,"div",23)(655,"span",24),Qx(656," p-disabled-tab-filter"),zl(657,"br"),og()()(),Il(658,"td",19)(659,"code",26),Qx(660,"boolean"),og()(),Il(661,"td",21)(662,"p")(663,"code"),Qx(664,"false"),og()()(),Il(665,"td",22)(666,"em")(667,"strong"),Qx(668,"(opcional)"),og()(),Il(669,"p"),Qx(670,"Se verdadeiro, desabilitar\xE1 a busca de um item via TAB."),og()()(),Il(671,"tr",14)(672,"td",15)(673,"div",23)(674,"span",24),Qx(675," p-emit-object-value"),zl(676,"br"),og()()(),Il(677,"td",19)(678,"code",26),Qx(679,"boolean"),og()(),Il(680,"td",21)(681,"p")(682,"code"),Qx(683,"false"),og()()(),Il(684,"td",22)(685,"em")(686,"strong"),Qx(687,"(opcional)"),og()(),Il(688,"p"),Qx(689,"Se verdadeiro, o evento "),Il(690,"code"),Qx(691,"p-change"),og(),Qx(692," receber\xE1 como argumento o "),Il(693,"code"),Qx(694,"PoComboOption"),og(),Qx(695," referente \xE0 op\xE7\xE3o selecionada."),og()()(),Il(696,"tr",14)(697,"td",15)(698,"div",23)(699,"span",24),Qx(700," p-error-limit"),zl(701,"br"),og()()(),Il(702,"td",19)(703,"code",26),Qx(704,"boolean"),og()(),Il(705,"td",21)(706,"p")(707,"code"),Qx(708,"false"),og()()(),Il(709,"td",22)(710,"em")(711,"strong"),Qx(712,"(opcional)"),og()(),Il(713,"p"),Qx(714,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),og(),Il(715,"blockquote")(716,"p"),Qx(717,"Caso essa propriedade seja definida como "),Il(718,"code"),Qx(719,"true"),og(),Qx(720,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),og()()()(),Il(721,"tr",14)(722,"td",15)(723,"div",23)(724,"span",24),Qx(725," p-field-error-message"),zl(726,"br"),og()()(),Il(727,"td",19)(728,"code",25),Qx(729,"string"),og()(),Il(730,"td",21),Qx(731,"-"),og(),Il(732,"td",22)(733,"em")(734,"strong"),Qx(735,"(opcional)"),og()(),Il(736,"p"),Qx(737,"Exibe a mensagem setada se o campo estiver vazio e for requerido."),og(),Il(738,"blockquote")(739,"p"),Qx(740,"Necess\xE1rio que a propriedade "),Il(741,"code"),Qx(742,"p-required"),og(),Qx(743," esteja habilitada."),og()()()(),Il(744,"tr",14)(745,"td",15)(746,"div",23)(747,"span",24),Qx(748," p-field-label"),zl(749,"br"),og()()(),Il(750,"td",19)(751,"code",25),Qx(752,"string"),og()(),Il(753,"td",21)(754,"p")(755,"code"),Qx(756,"label"),og()()(),Il(757,"td",22)(758,"em")(759,"strong"),Qx(760,"(opcional)"),og()(),Il(761,"p"),Qx(762,`Deve ser informado o nome da propriedade do objeto que ser\xE1 utilizado para a convers\xE3o dos itens apresentados na lista do componente
(`),Il(763,"code"),Qx(764,"p-options"),og(),Qx(765,"), esta propriedade ser\xE1 respons\xE1vel pelo texto de apresenta\xE7\xE3o de cada item da lista."),og(),Il(766,"p"),Qx(767,`Necess\xE1rio quando informar o servi\xE7o como URL e o mesmo n\xE3o estiver retornando uma lista de objetos no padr\xE3o da interface
PoComboOption.`),og()()(),Il(768,"tr",14)(769,"td",15)(770,"div",23)(771,"span",24),Qx(772," p-field-value"),zl(773,"br"),og()()(),Il(774,"td",19)(775,"code",25),Qx(776,"string"),og()(),Il(777,"td",21)(778,"p")(779,"code"),Qx(780,"value"),og()()(),Il(781,"td",22)(782,"em")(783,"strong"),Qx(784,"(opcional)"),og()(),Il(785,"p"),Qx(786,`Deve ser informado o nome da propriedade do objeto que ser\xE1 utilizado para a convers\xE3o dos itens apresentados na lista do componente
(`),Il(787,"code"),Qx(788,"p-options"),og(),Qx(789,"), esta propriedade ser\xE1 respons\xE1vel pelo valor de cada item da lista."),og(),Il(790,"p"),Qx(791,`Necess\xE1rio quando informar o servi\xE7o como URL e o mesmo n\xE3o estiver retornando uma lista de objetos no padr\xE3o da interface
PoComboOption.`),og()()(),Il(792,"tr",14)(793,"td",15)(794,"div",23)(795,"span",24),Qx(796," p-filter-minlength"),zl(797,"br"),og()()(),Il(798,"td",19)(799,"code",27),Qx(800,"number"),og()(),Il(801,"td",21)(802,"p")(803,"code"),Qx(804,"0"),og()()(),Il(805,"td",22)(806,"em")(807,"strong"),Qx(808,"(opcional)"),og()(),Il(809,"p"),Qx(810,"Valor m\xEDnimo de caracteres para realizar o filtro no servi\xE7o."),og()()(),Il(811,"tr",14)(812,"td",15)(813,"div",23)(814,"span",24),Qx(815," p-filter-mode"),zl(816,"br"),og()()(),Il(817,"td",19)(818,"code",28),Qx(819,"PoComboFilterMode"),og()(),Il(820,"td",21)(821,"p")(822,"code"),Qx(823,"startsWith"),og()()(),Il(824,"td",22)(825,"em")(826,"strong"),Qx(827,"(opcional)"),og()(),Il(828,"p"),Qx(829,"Define o modo de pesquisa utilizado no filtro da lista de sele\xE7\xE3o: "),Il(830,"code"),Qx(831,"startsWith"),og(),Qx(832,", "),Il(833,"code"),Qx(834,"contains"),og(),Qx(835," ou "),Il(836,"code"),Qx(837,"endsWith"),og(),Qx(838,"."),og(),Il(839,"blockquote")(840,"p"),Qx(841,"Quando utilizar a propriedade "),Il(842,"code"),Qx(843,"p-filter-service"),og(),Qx(844," esta propriedade ser\xE1 ignorada."),og()()()(),Il(845,"tr",14)(846,"td",15)(847,"div",23)(848,"span",24),Qx(849," p-filter-params"),zl(850,"br"),og()()(),Il(851,"td",19)(852,"code",29),Qx(853,"any"),og()(),Il(854,"td",21),Qx(855,"-"),og(),Il(856,"td",22)(857,"em")(858,"strong"),Qx(859,"(opcional)"),og()(),Il(860,"p"),Qx(861,"Valor que ser\xE1 repassado como par\xE2metro para a URL ou aos m\xE9todos do servi\xE7o que implementam a interface "),Il(862,"em"),Qx(863,"PoComboFilter"),og(),Qx(864,"."),og(),Il(865,"blockquote")(866,"p"),Qx(867,"Caso a lista contenha agrupamentos, os mesmos s\xF3 ser\xE3o exibidos se houver no m\xEDnimo uma op\xE7\xE3o que corresponda \xE0 pesquisa."),og()()()(),Il(868,"tr",14)(869,"td",15)(870,"div",23)(871,"span",24),Qx(872," p-filter-service"),zl(873,"br"),og()()(),Il(874,"td",19)(875,"code",30),Qx(876,"PoComboFilter "),og(),Il(877,"code",25),Qx(878," string"),og()(),Il(879,"td",21),Qx(880,"-"),og(),Il(881,"td",22)(882,"em")(883,"strong"),Qx(884,"(opcional)"),og()(),Il(885,"p"),Qx(886,`Nesta propriedade deve ser informada a URL do servi\xE7o em que ser\xE1 realizado o filtro para carregamento da lista de
itens no componente.
Caso haja a necessidade de customiza\xE7\xE3o, ent\xE3o pode ser informado um servi\xE7o implementando a interface PoComboFilter.`),og(),Il(887,"p"),Qx(888,`Caso utilizado uma URL, o servi\xE7o deve ser retornado no padr\xE3o API TOTVS e utiliza as propriedades
`),Il(889,"code"),Qx(890,"p-field-label"),og(),Qx(891," e "),Il(892,"code"),Qx(893,"p-field-value"),og(),Qx(894," para a constru\xE7\xE3o da lista de itens."),og(),Il(895,"p"),Qx(896,"Quando utilizada uma URL de servi\xE7o, ent\xE3o ser\xE1 concatenada nesta URL o valor que deseja-se filtrar da seguinte forma:"),og(),Il(897,"pre")(898,"code"),Qx(899,`url + ?filter=Peter
`),og()(),Il(900,"p"),Qx(901,"Se for definida a propriedade "),Il(902,"code"),Qx(903,"p-filter-params"),og(),Qx(904,`, a mesma tamb\xE9m ser\xE1 concatenada. Por exemplo, para o
par\xE2metro `),Il(905,"code"),Qx(906,"{ age: 23 }"),og(),Qx(907," a URL ficaria:"),og(),Il(908,"pre")(909,"code"),Qx(910,`url + ?page=1&pageSize=20&age=23&filter=Peter
`),og()()()(),Il(911,"tr",14)(912,"td",15)(913,"div",23)(914,"span",24),Qx(915," p-help"),zl(916,"br"),og()()(),Il(917,"td",19)(918,"code",25),Qx(919,"string"),og()(),Il(920,"td",21),Qx(921,"-"),og(),Il(922,"td",22)(923,"em")(924,"strong"),Qx(925,"(opcional)"),og()(),Il(926,"p"),Qx(927,"Texto de apoio para o campo."),og()()(),Il(928,"tr",14)(929,"td",15)(930,"div",23)(931,"span",24),Qx(932," p-icon"),zl(933,"br"),og()()(),Il(934,"td",19)(935,"code",25),Qx(936,"string "),og(),Il(937,"code",31),Qx(938," TemplateRef<void>"),og()(),Il(939,"td",21),Qx(940,"-"),og(),Il(941,"td",22)(942,"em")(943,"strong"),Qx(944,"(opcional)"),og()(),Il(945,"p"),Qx(946,"Define o \xEDcone que ser\xE1 exibido no in\xEDcio do campo."),og(),Il(947,"p"),Qx(948,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),Il(949,"a",32),Qx(950,"Biblioteca de \xEDcones"),og(),Qx(951,". conforme exemplo abaixo:"),og(),Il(952,"pre")(953,"code"),Qx(954,`<po-combo p-icon="an an-user" p-label="PO combo"></po-combo>
`),og()(),Il(955,"p"),Qx(956,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),Il(957,"em"),Qx(958,"Font Awesome"),og(),Qx(959,", da seguinte forma:"),og(),Il(960,"pre")(961,"code"),Qx(962,`<po-combo p-icon="fa fa-podcast" p-label="PO combo"></po-combo>
`),og()(),Il(963,"p"),Qx(964,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),Il(965,"code"),Qx(966,"TemplateRef"),og(),Qx(967,", conforme exemplo abaixo:"),og(),Il(968,"pre")(969,"code"),Qx(970,`<po-combo [p-icon]="template" p-label="combo template ionic"></po-combo>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),og()(),Il(971,"blockquote")(972,"p"),Qx(973,"Para o \xEDcone enquadrar corretamente, deve-se utilizar "),Il(974,"code"),Qx(975,"font-size: inherit"),og(),Qx(976," caso o \xEDcone utilizado n\xE3o aplique-o."),og()()()(),Il(977,"tr",14)(978,"td",15)(979,"div",23)(980,"span",24),Qx(981," p-infinite-scroll"),zl(982,"br"),og()()(),Il(983,"td",19)(984,"code",26),Qx(985,"boolean"),og()(),Il(986,"td",21)(987,"p")(988,"code"),Qx(989,"false"),og()()(),Il(990,"td",22)(991,"em")(992,"strong"),Qx(993,"(opcional)"),og()(),Il(994,"p"),Qx(995,"Se verdadeiro ativa a funcionalidade de scroll infinito para o combo, Ao chegar ao fim da tabela executar\xE1 nova busca dos dados conforme pagina\xE7\xE3o."),og()()(),Il(996,"tr",14)(997,"td",15)(998,"div",23)(999,"span",24),Qx(1e3," p-infinite-scroll-distance"),zl(1001,"br"),og()()(),Il(1002,"td",19)(1003,"code",27),Qx(1004,"number"),og()(),Il(1005,"td",21),Qx(1006,"-"),og(),Il(1007,"td",22)(1008,"em")(1009,"strong"),Qx(1010,"(opcional)"),og()(),Il(1011,"p"),Qx(1012,"Define o percentual necess\xE1rio para disparar o evento "),Il(1013,"code"),Qx(1014,"show-more"),og(),Qx(1015,", que \xE9 respons\xE1vel por carregar mais dados no combo. Caso o valor seja maior que 100 ou menor que 0, o valor padr\xE3o ser\xE1 100%."),og(),Il(1016,"p")(1017,"strong"),Qx(1018,"Exemplos"),og()(),Il(1019,"ul")(1020,"li"),Qx(1021,"p-infinite-scroll-distance = 80: Quando atingir 80% do scroll do combo, o "),Il(1022,"code"),Qx(1023,"show-more"),og(),Qx(1024," ser\xE1 disparado."),og()()()(),Il(1025,"tr",14)(1026,"td",15)(1027,"div",16)(1028,"span",17),Qx(1029," (p-input-change)"),zl(1030,"br"),og()()(),Il(1031,"td",19)(1032,"code",20),Qx(1033,"EventEmitter"),og()(),Il(1034,"td",21),Qx(1035,"-"),og(),Il(1036,"td",22)(1037,"em")(1038,"strong"),Qx(1039,"(opcional)"),og()(),Il(1040,"p"),Qx(1041,"Deve ser informada uma fun\xE7\xE3o que ser\xE1 disparada quando houver altera\xE7\xF5es no Search input. A fun\xE7\xE3o receber\xE1 como argumento o input modificado."),og()()(),Il(1042,"tr",14)(1043,"td",15)(1044,"div",16)(1045,"span",17),Qx(1046," (p-keydown)"),zl(1047,"br"),og()()(),Il(1048,"td",19)(1049,"code",20),Qx(1050,"EventEmitter"),og()(),Il(1051,"td",21),Qx(1052,"-"),og(),Il(1053,"td",22)(1054,"em")(1055,"strong"),Qx(1056,"(opcional)"),og()(),Il(1057,"p"),Qx(1058,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Il(1059,"code"),Qx(1060,"KeyboardEvent"),og(),Qx(1061," com informa\xE7\xF5es sobre a tecla."),og()()(),Il(1062,"tr",14)(1063,"td",15)(1064,"div",23)(1065,"span",24),Qx(1066," p-label"),zl(1067,"br"),og()()(),Il(1068,"td",19)(1069,"code",25),Qx(1070,"string"),og()(),Il(1071,"td",21),Qx(1072,"-"),og(),Il(1073,"td",22)(1074,"em")(1075,"strong"),Qx(1076,"(opcional)"),og()(),Il(1077,"p"),Qx(1078,"Label no componente."),og()()(),Il(1079,"tr",14)(1080,"td",15)(1081,"div",23)(1082,"span",24),Qx(1083," p-label-text-wrap"),zl(1084,"br"),og()()(),Il(1085,"td",19)(1086,"code",26),Qx(1087,"boolean"),og()(),Il(1088,"td",21)(1089,"p")(1090,"code"),Qx(1091,"false"),og()()(),Il(1092,"td",22)(1093,"em")(1094,"strong"),Qx(1095,"(opcional)"),og()(),Il(1096,"p"),Qx(1097,"Habilita a quebra autom\xE1tica do texto da propriedade "),Il(1098,"code"),Qx(1099,"p-label"),og(),Qx(1100,". Quando "),Il(1101,"code"),Qx(1102,"p-label-text-wrap"),og(),Qx(1103,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),og()()(),Il(1104,"tr",14)(1105,"td",15)(1106,"div",23)(1107,"span",24),Qx(1108," p-listbox-control-position"),zl(1109,"br"),og()()(),Il(1110,"td",19)(1111,"code",33),Qx(1112,"'top' "),og(),Il(1113,"code",34),Qx(1114," 'bottom'"),og()(),Il(1115,"td",21)(1116,"p")(1117,"code"),Qx(1118,"bottom"),og()()(),Il(1119,"td",22)(1120,"em")(1121,"strong"),Qx(1122,"(opcional)"),og()(),Il(1123,"p"),Qx(1124,"Define a dire\xE7\xE3o preferida para exibi\xE7\xE3o do "),Il(1125,"code"),Qx(1126,"listbox"),og(),Qx(1127," em rela\xE7\xE3o ao campo ("),Il(1128,"code"),Qx(1129,"top"),og(),Qx(1130," ou "),Il(1131,"code"),Qx(1132,"bottom"),og(),Qx(1133,`).
\xDAtil em casos onde o posicionamento autom\xE1tico n\xE3o se comporta como esperado, como quando o componente est\xE1 pr\xF3ximo
ao final do formul\xE1rio ou do container vis\xEDvel. Na maioria dos casos, essa dire\xE7\xE3o ser\xE1 respeitada; no entanto,
pode ser ajustada automaticamente conforme o espa\xE7o dispon\xEDvel na tela.`),og()()(),Il(1134,"tr",14)(1135,"td",15)(1136,"div",23)(1137,"span",24),Qx(1138," p-literals"),zl(1139,"br"),og()()(),Il(1140,"td",19)(1141,"code",35),Qx(1142,"PoComboLiterals"),og()(),Il(1143,"td",21),Qx(1144,"-"),og(),Il(1145,"td",22)(1146,"em")(1147,"strong"),Qx(1148,"(opcional)"),og()(),Il(1149,"p"),Qx(1150,"Objeto com as literais usadas no "),Il(1151,"code"),Qx(1152,"po-combo"),og(),Qx(1153,"."),og(),Il(1154,"p"),Qx(1155,"Para utilizar basta passar a literal que deseja customizar:"),og(),Il(1156,"pre")(1157,"code"),Qx(1158,`const customLiterals: PoComboLiterals = {
  noData: 'Nenhum valor'
};
`),og()(),Il(1159,"p"),Qx(1160,"E para carregar a literal customizada, basta apenas passar o objeto para o componente."),og(),Il(1161,"pre")(1162,"code"),Qx(1163,`<po-combo
  [p-literals]="customLiterals">
</po-combo>
`),og()(),Il(1164,"blockquote")(1165,"p"),Qx(1166,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),Il(1167,"a",36)(1168,"code"),Qx(1169,"PoI18nService"),og()(),Qx(1170," ou do browser."),og()()()(),Il(1171,"tr",14)(1172,"td",15)(1173,"div",23)(1174,"span",24),Qx(1175," p-loading"),zl(1176,"br"),og()()(),Il(1177,"td",19)(1178,"code",26),Qx(1179,"boolean"),og()(),Il(1180,"td",21)(1181,"p")(1182,"code"),Qx(1183,"false"),og()()(),Il(1184,"td",22)(1185,"em")(1186,"strong"),Qx(1187,"(opcional)"),og()(),Il(1188,"p"),Qx(1189,"Exibe um \xEDcone de carregamento no lado direito do campo para sinalizar que uma opera\xE7\xE3o est\xE1 em andamento."),og()()(),Il(1190,"tr",14)(1191,"td",15)(1192,"div",23)(1193,"span",24),Qx(1194," name"),zl(1195,"br"),og()()(),Il(1196,"td",19)(1197,"code",25),Qx(1198,"string"),og()(),Il(1199,"td",21),Qx(1200,"-"),og(),Il(1201,"td",22)(1202,"p"),Qx(1203,"Nome do componente."),og()()(),Il(1204,"tr",14)(1205,"td",15)(1206,"div",16)(1207,"span",17),Qx(1208," (ngModelChange)"),zl(1209,"br"),og()()(),Il(1210,"td",19)(1211,"code",20),Qx(1212,"EventEmitter"),og()(),Il(1213,"td",21),Qx(1214,"-"),og(),Il(1215,"td",22)(1216,"em")(1217,"strong"),Qx(1218,"(opcional)"),og()(),Il(1219,"p"),Qx(1220,"Fun\xE7\xE3o para atualizar o ngModel do componente, necess\xE1rio quando n\xE3o for utilizado dentro da tag form."),og(),Il(1221,"p"),Qx(1222,"Na vers\xE3o 12.2.0 do Angular a verifica\xE7\xE3o "),Il(1223,"code"),Qx(1224,"strictTemplates"),og(),Qx(1225,` vem true como default. Portanto, para utilizar
two-way binding no componente deve se utilizar da seguinte forma:`),og(),Il(1226,"pre")(1227,"code"),Qx(1228,`<po-combo ... [ngModel]="comboModel" (ngModelChange)="comboModel = $event"> </po-combo>
`),og()()()(),Il(1229,"tr",14)(1230,"td",15)(1231,"div",23)(1232,"span",24),Qx(1233," p-optional"),zl(1234,"br"),og()()(),Il(1235,"td",19)(1236,"code",26),Qx(1237,"boolean"),og()(),Il(1238,"td",21)(1239,"p")(1240,"code"),Qx(1241,"false"),og()()(),Il(1242,"td",22)(1243,"em")(1244,"strong"),Qx(1245,"(opcional)"),og()(),Il(1246,"p"),Qx(1247,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),og(),Il(1248,"blockquote")(1249,"p"),Qx(1250,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),og()(),Il(1251,"ul")(1252,"li"),Qx(1253,"O campo conter "),Il(1254,"code"),Qx(1255,"p-required"),og(),Qx(1256,";"),og(),Il(1257,"li"),Qx(1258,"N\xE3o possuir "),Il(1259,"code"),Qx(1260,"p-help"),og(),Qx(1261," e/ou "),Il(1262,"code"),Qx(1263,"p-label"),og(),Qx(1264,"."),og()()()(),Il(1265,"tr",14)(1266,"td",15)(1267,"div",23)(1268,"span",24),Qx(1269," p-options"),zl(1270,"br"),og()()(),Il(1271,"td",19)(1272,"code",37),Qx(1273,"Array<PoComboOption "),og(),Il(1274,"code",38),Qx(1275," PoComboOptionGroup "),og(),Il(1276,"code",39),Qx(1277," any>"),og()(),Il(1278,"td",21),Qx(1279,"-"),og(),Il(1280,"td",22)(1281,"p"),Qx(1282,"Nesta propriedade define a lista de op\xE7\xF5es do "),Il(1283,"code"),Qx(1284,"po-combo"),og(),Qx(1285,"."),og(),Il(1286,"blockquote")(1287,"p"),Qx(1288,"A lista pode ser definida utilizando um array com o valor representando o "),Il(1289,"code"),Qx(1290,"value"),og(),Qx(1291," e o "),Il(1292,"code"),Qx(1293,"label"),og(),Qx(1294," das seguintes formas:"),og()(),Il(1295,"pre")(1296,"code"),Qx(1297,`<po-combo name="combo" p-label="PO Combo" [p-options]="[{value: 1, label: 'One'}, {value: 2, label: 'two'}]"> </po-combo>
`),og()(),Il(1298,"pre")(1299,"code"),Qx(1300,`<po-combo name="combo" p-label="PO Combo" [p-options]="[{name: 'Roger', age: 28}, {name: 'Anne', age: 35}]" p-field-label="name" p-field-value="age"> </po-combo>
`),og()(),Il(1301,"ul")(1302,"li"),Qx(1303,"Aconselha-se utilizar valores distintos no "),Il(1304,"code"),Qx(1305,"label"),og(),Qx(1306," e "),Il(1307,"code"),Qx(1308,"value"),og(),Qx(1309," dos itens."),og()()()(),Il(1310,"tr",14)(1311,"td",15)(1312,"div",23)(1313,"span",24),Qx(1314," p-placeholder"),zl(1315,"br"),og()()(),Il(1316,"td",19)(1317,"code",25),Qx(1318,"string"),og()(),Il(1319,"td",21),Qx(1320,"-"),og(),Il(1321,"td",22)(1322,"p"),Qx(1323,"Mensagem apresentada enquanto o campo estiver vazio."),og()()(),Il(1324,"tr",14)(1325,"td",15)(1326,"div",23)(1327,"span",24),Qx(1328," p-helper"),zl(1329,"br"),og()()(),Il(1330,"td",19)(1331,"code",40),Qx(1332,"PoHelperOptions "),og(),Il(1333,"code",25),Qx(1334," string"),og()(),Il(1335,"td",21),Qx(1336,"-"),og(),Il(1337,"td",22)(1338,"em")(1339,"strong"),Qx(1340,"(opcional)"),og()(),Il(1341,"p"),Qx(1342,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label quando a propriedade "),Il(1343,"code"),Qx(1344,"p-label"),og(),Qx(1345," for definida, ou, ao lado do componente na aus\xEAncia da propriedade "),Il(1346,"code"),Qx(1347,"p-label"),og(),Qx(1348,"."),og(),Il(1349,"blockquote")(1350,"p"),Qx(1351,"Para mais informa\xE7\xF5es acesse: "),Il(1352,"a",41),Qx(1353,"https://po-ui.io/documentation/po-helper"),og(),Qx(1354,"."),og()(),Il(1355,"blockquote")(1356,"p"),Qx(1357,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),Il(1358,"code"),Qx(1359,"p-additional-help-tooltip"),og(),Qx(1360," e "),Il(1361,"code"),Qx(1362,"p-additional-help"),og(),Qx(1363,") ser\xE1 ignorado."),og()()()(),Il(1364,"tr",14)(1365,"td",15)(1366,"div",23)(1367,"span",24),Qx(1368," p-remove-initial-filter"),zl(1369,"br"),og()()(),Il(1370,"td",19)(1371,"code",26),Qx(1372,"boolean"),og()(),Il(1373,"td",21)(1374,"p")(1375,"code"),Qx(1376,"false"),og()()(),Il(1377,"td",22)(1378,"em")(1379,"strong"),Qx(1380,"(opcional)"),og()(),Il(1381,"p"),Qx(1382,"Define se o filtro inicial ser\xE1 removido no primeiro clique do campo."),og(),Il(1383,"p"),Qx(1384,`Quando habilitado e o combo possui um valor padr\xE3o, o primeiro clique
exibir\xE1 todos os itens da lista ao inv\xE9s de apenas o item inicializado.`),og()()(),Il(1385,"tr",14)(1386,"td",15)(1387,"div",23)(1388,"span",24),Qx(1389," p-required"),zl(1390,"br"),og()()(),Il(1391,"td",19)(1392,"code",26),Qx(1393,"boolean"),og()(),Il(1394,"td",21)(1395,"p")(1396,"code"),Qx(1397,"false"),og()()(),Il(1398,"td",22)(1399,"em")(1400,"strong"),Qx(1401,"(opcional)"),og()(),Il(1402,"p"),Qx(1403,"Define que o campo ser\xE1 obrigat\xF3rio."),og()()(),Il(1404,"tr",14)(1405,"td",15)(1406,"div",23)(1407,"span",24),Qx(1408," p-show-required"),zl(1409,"br"),og()()(),Il(1410,"td",19)(1411,"code",26),Qx(1412,"boolean"),og()(),Il(1413,"td",21),Qx(1414,"-"),og(),Il(1415,"td",22)(1416,"p"),Qx(1417,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),og(),Il(1418,"blockquote")(1419,"p"),Qx(1420,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),og()(),Il(1421,"ul")(1422,"li"),Qx(1423,"N\xE3o possuir "),Il(1424,"code"),Qx(1425,"p-help"),og(),Qx(1426," e/ou "),Il(1427,"code"),Qx(1428,"p-label"),og(),Qx(1429,"."),og()()()(),Il(1430,"tr",14)(1431,"td",15)(1432,"div",23)(1433,"span",24),Qx(1434," p-size"),zl(1435,"br"),og()()(),Il(1436,"td",19)(1437,"code",25),Qx(1438,"string"),og()(),Il(1439,"td",21)(1440,"p")(1441,"code"),Qx(1442,"medium"),og()()(),Il(1443,"td",22)(1444,"em")(1445,"strong"),Qx(1446,"(opcional)"),og()(),Il(1447,"p"),Qx(1448,"Define o tamanho do componente:"),og(),Il(1449,"ul")(1450,"li")(1451,"code"),Qx(1452,"small"),og(),Qx(1453,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),og(),Il(1454,"li")(1455,"code"),Qx(1456,"medium"),og(),Qx(1457,": altura do input como 44px."),og()(),Il(1458,"blockquote")(1459,"p"),Qx(1460,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Il(1461,"code"),Qx(1462,"medium"),og(),Qx(1463,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Il(1464,"a",42),Qx(1465,"po-theme"),og(),Qx(1466,"."),og()()()(),Il(1467,"tr",14)(1468,"td",15)(1469,"div",23)(1470,"span",24),Qx(1471," p-sort"),zl(1472,"br"),og()()(),Il(1473,"td",19)(1474,"code",26),Qx(1475,"boolean"),og()(),Il(1476,"td",21),Qx(1477,"-"),og(),Il(1478,"td",22)(1479,"p"),Qx(1480,"Indica que a lista definida na propriedade p-options ser\xE1 ordenada pela descri\xE7\xE3o."),og()()()(),Il(1481,"h3",10),Qx(1482,"M\xE9todos"),og(),Il(1483,"table",43)(1484,"tr",14)(1485,"th",44)(1486,"div",23)(1487,"h4")(1488,"span",24),Qx(1489," focus "),og()()()()(),Il(1490,"tr",22)(1491,"td",22)(1492,"p"),Qx(1493,"Fun\xE7\xE3o que atribui foco ao componente."),og(),Il(1494,"p"),Qx(1495,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),og(),Il(1496,"pre")(1497,"code"),Qx(1498,`import { PoComboComponent } from '@po-ui/ng-components';

...

@ViewChild(PoComboComponent, { static: true }) combo: PoComboComponent;

focusCombo() {
  this.combo.focus();
}
`),og()()()()(),zl(1499,"br"),Il(1500,"table",43)(1501,"tr",14)(1502,"th",44)(1503,"div",23)(1504,"h4")(1505,"span",24),Qx(1506," showAdditionalHelp "),og()()()()(),Il(1507,"tr",22)(1508,"td",22)(1509,"p"),Qx(1510,"M\xE9todo que exibe "),Il(1511,"code"),Qx(1512,"p-helper"),og(),Qx(1513," ou executa a a\xE7\xE3o definida em "),Il(1514,"code"),Qx(1515,"p-helper{eventOnClick}"),og(),Qx(1516," ou em "),Il(1517,"code"),Qx(1518,"p-additionalHelp"),og(),Qx(1519,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Il(1520,"code"),Qx(1521,"p-keydown"),og(),Qx(1522,"."),og(),Il(1523,"blockquote")(1524,"p"),Qx(1525,"Exibe ou oculta o conte\xFAdo do componente "),Il(1526,"code"),Qx(1527,"po-helper"),og(),Qx(1528," quando o componente estiver com foco."),og()(),Il(1529,"pre")(1530,"code"),Qx(1531,`// Exemplo com p-label e p-helper
<po-combo
 #combo
 ...
 p-label="Label do combo"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, combo)"
></po-combo>
`),og()(),Il(1532,"pre")(1533,"code"),Qx(1534,`...
onKeyDown(event: KeyboardEvent, inp: PoComboComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),og()()()()(),zl(1535,"br"),Il(1536,"h3"),Qx(1537,"Interfaces"),og(),Il(1538,"h4",45)(1539,"code",5),Qx(1540,"PoComboFilter"),og()(),Il(1541,"div",2)(1542,"p"),Qx(1543,"Interface para os servi\xE7os que ser\xE3o utilizados no po-combo."),og()(),Il(1544,"h4",10),Qx(1545,"M\xE9todos"),og(),Il(1546,"table",43)(1547,"tr",14)(1548,"th",44)(1549,"div",23)(1550,"h4")(1551,"span",24),Qx(1552," getFilteredData "),og()()()()(),Il(1553,"tr",22)(1554,"td",22)(1555,"p"),Qx(1556,`M\xE9todo respons\xE1vel por retornar um Observable que cont\xE9m uma cole\xE7\xE3o de objetos que seguem a interface PoComboOption,
ser\xE1 informado por parametro o campo, de acordo com o fieldLabel, e o valor a ser pesquisado.`),og()()()(),Il(1557,"h5")(1558,"b"),Qx(1559,"Par\xE2metros"),og()(),Il(1560,"table",11)(1561,"tr",12)(1562,"th",13),Qx(1563,"Nome"),og(),Il(1564,"th",13),Qx(1565,"Tipo"),og(),Il(1566,"th",13),Qx(1567,"Descri\xE7\xE3o"),og()(),Il(1568,"tr",14)(1569,"td",15),Qx(1570," params"),og(),Il(1571,"td",19)(1572,"code",46),Qx(1573," any "),og()(),Il(1574,"td",22)(1575,"p"),Qx(1576,"Objeto contendo a propriedade e o valor respons\xE1vel por realizar o filtro."),og()()(),Il(1577,"tr",14)(1578,"td",15),Qx(1579," filterParams"),og(),Il(1580,"td",19)(1581,"code",46),Qx(1582," any "),og()(),Il(1583,"td",22)(1584,"p"),Qx(1585,"Valor informado atrav\xE9s da propriedade "),Il(1586,"code"),Qx(1587,"p-filter-params"),og(),Qx(1588,"."),og()()()(),zl(1589,"br"),Il(1590,"table",43)(1591,"tr",14)(1592,"th",44)(1593,"div",23)(1594,"h4")(1595,"span",24),Qx(1596," getObjectByValue "),og()()()()(),Il(1597,"tr",22)(1598,"td",22)(1599,"p"),Qx(1600,`M\xE9todo respons\xE1vel por retornar um Observable que cont\xE9m apenas o objeto filtrado que seguem a interface PoComboOption,
ser\xE1 informado por parametro valor a ser pesquisado.`),og()()()(),Il(1601,"h5")(1602,"b"),Qx(1603,"Par\xE2metros"),og()(),Il(1604,"table",11)(1605,"tr",12)(1606,"th",13),Qx(1607,"Nome"),og(),Il(1608,"th",13),Qx(1609,"Tipo"),og(),Il(1610,"th",13),Qx(1611,"Descri\xE7\xE3o"),og()(),Il(1612,"tr",14)(1613,"td",15),Qx(1614," value"),og(),Il(1615,"td",19)(1616,"code",25),Qx(1617," string "),og(),Il(1618,"code",27),Qx(1619," number "),og()(),Il(1620,"td",22)(1621,"p"),Qx(1622,"Valor respons\xE1vel por realizar a busca de um \xFAnico objeto."),og()()(),Il(1623,"tr",14)(1624,"td",15),Qx(1625," filterParams"),og(),Il(1626,"td",19)(1627,"code",46),Qx(1628," any "),og()(),Il(1629,"td",22)(1630,"p"),Qx(1631,"Valor informado atrav\xE9s da propriedade "),Il(1632,"code"),Qx(1633,"p-filter-params"),og(),Qx(1634,"."),og()()()(),zl(1635,"br"),Il(1636,"h4",45)(1637,"code",5),Qx(1638,"PoComboLiterals"),og()(),Il(1639,"div",2)(1640,"p"),Qx(1641,"Interface para defini\xE7\xE3o das literais usadas no "),Il(1642,"code"),Qx(1643,"po-combo"),og(),Qx(1644,"."),og()(),Il(1645,"h4",10),Qx(1646,"Propriedades"),og(),Il(1647,"table",11)(1648,"tr",12)(1649,"th",13),Qx(1650,"Nome"),og(),Il(1651,"th",13),Qx(1652,"Tipo"),og(),Il(1653,"th",13),Qx(1654,"Descri\xE7\xE3o"),og()(),Il(1655,"tr",14)(1656,"td",15)(1657,"div",23)(1658,"span",24),Qx(1659," chooseOption"),zl(1660,"br"),og()()(),Il(1661,"td",19)(1662,"code",25),Qx(1663,"string"),og()(),Il(1664,"td",22)(1665,"em")(1666,"strong"),Qx(1667,"(opcional)"),og()(),Il(1668,"p"),Qx(1669,"Texto exibido quando o combo estiver vazio."),og()()(),Il(1670,"tr",14)(1671,"td",15)(1672,"div",23)(1673,"span",24),Qx(1674," clean"),zl(1675,"br"),og()()(),Il(1676,"td",19)(1677,"code",25),Qx(1678,"string"),og()(),Il(1679,"td",22)(1680,"em")(1681,"strong"),Qx(1682,"(opcional)"),og()(),Il(1683,"p"),Qx(1684,"Texto do aria-label do bot\xE3o de limpar"),og()()(),Il(1685,"tr",14)(1686,"td",15)(1687,"div",23)(1688,"span",24),Qx(1689," noData"),zl(1690,"br"),og()()(),Il(1691,"td",19)(1692,"code",25),Qx(1693,"string"),og()(),Il(1694,"td",22)(1695,"em")(1696,"strong"),Qx(1697,"(opcional)"),og()(),Il(1698,"p"),Qx(1699,"Texto exibido quando n\xE3o houver itens na lista ou se, a pesquisa do filtro n\xE3o retornar nenhum item."),og()()()(),Il(1700,"h4",45)(1701,"code",5),Qx(1702,"PoComboOptionGroup"),og()(),Il(1703,"div",2)(1704,"p"),Qx(1705,"Interface dos agrupamentos da cole\xE7\xE3o que ser\xE1 exibida no dropdown do "),Il(1706,"code"),Qx(1707,"po-combo"),og(),Qx(1708,"."),og()(),Il(1709,"h4",10),Qx(1710,"Propriedades"),og(),Il(1711,"table",11)(1712,"tr",12)(1713,"th",13),Qx(1714,"Nome"),og(),Il(1715,"th",13),Qx(1716,"Tipo"),og(),Il(1717,"th",13),Qx(1718,"Descri\xE7\xE3o"),og()(),Il(1719,"tr",14)(1720,"td",15)(1721,"div",23)(1722,"span",24),Qx(1723," label"),zl(1724,"br"),og()()(),Il(1725,"td",19)(1726,"code",25),Qx(1727,"string"),og()(),Il(1728,"td",22)(1729,"p"),Qx(1730,"T\xEDtulo para cada grupo de op\xE7\xF5es."),og(),Il(1731,"p"),Qx(1732,`Recomenda\xE7\xE3o: evite usar labels id\xEAnticos em diferentes grupos. Labels iguais podem
causar ambiguidade para usu\xE1rios e dificultar a identifica\xE7\xE3o/sele\xE7\xE3o dos itens.`),og()()(),Il(1733,"tr",14)(1734,"td",15)(1735,"div",23)(1736,"span",24),Qx(1737," options"),zl(1738,"br"),og()()(),Il(1739,"td",19)(1740,"code",47),Qx(1741,"Array<PoComboOption>"),og()(),Il(1742,"td",22)(1743,"p"),Qx(1744,"Lista de itens a serem exibidos."),og()()()(),Il(1745,"h4",45)(1746,"code",5),Qx(1747,"PoComboOption"),og()(),Il(1748,"div",2)(1749,"p"),Qx(1750,"Interface que define as op\xE7\xF5es que ser\xE3o exibidas na lista do "),Il(1751,"code"),Qx(1752,"po-combo"),og(),Qx(1753,"."),og()(),Il(1754,"h4",10),Qx(1755,"Propriedades"),og(),Il(1756,"table",11)(1757,"tr",12)(1758,"th",13),Qx(1759,"Nome"),og(),Il(1760,"th",13),Qx(1761,"Tipo"),og(),Il(1762,"th",13),Qx(1763,"Descri\xE7\xE3o"),og()(),Il(1764,"tr",14)(1765,"td",15)(1766,"div",23)(1767,"span",24),Qx(1768," label"),zl(1769,"br"),og()()(),Il(1770,"td",19)(1771,"code",25),Qx(1772,"string"),og()(),Il(1773,"td",22)(1774,"em")(1775,"strong"),Qx(1776,"(opcional)"),og()(),Il(1777,"p"),Qx(1778,"Descri\xE7\xE3o exibida nas op\xE7\xF5es da lista."),og(),Il(1779,"blockquote")(1780,"p"),Qx(1781,"Caso n\xE3o seja definida ser\xE1 assumido o valor definido na propriedade "),Il(1782,"code"),Qx(1783,"value"),og(),Qx(1784,"."),og()()()(),Il(1785,"tr",14)(1786,"td",15)(1787,"div",23)(1788,"span",24),Qx(1789," value"),zl(1790,"br"),og()()(),Il(1791,"td",19)(1792,"code",25),Qx(1793,"string "),og(),Il(1794,"code",27),Qx(1795," number"),og()(),Il(1796,"td",22)(1797,"p"),Qx(1798,"Valor do objeto que ser\xE1 atribu\xEDdo ao "),Il(1799,"em"),Qx(1800,"model"),og(),Qx(1801,"."),og()()()(),Il(1802,"h3"),Qx(1803,"Enums"),og(),Il(1804,"h4",4)(1805,"code",5),Qx(1806,"PoComboFilterMode"),og()(),Il(1807,"div",2)(1808,"p"),Qx(1809,"Define o tipo de busca usado no po-combo."),og()(),Il(1810,"h4",10),Qx(1811,"Propriedades"),og(),Il(1812,"table",11)(1813,"tr",12)(1814,"th",13),Qx(1815,"Nome"),og(),Il(1816,"th",13),Qx(1817,"Descri\xE7\xE3o"),og()(),Il(1818,"tr",14)(1819,"td",15)(1820,"div",23)(1821,"span",24),Qx(1822," startsWith"),zl(1823,"br"),og()()(),Il(1824,"td",22)(1825,"p"),Qx(1826,"Verifica se o texto "),Il(1827,"em"),Qx(1828,"inicia"),og(),Qx(1829," com o valor pesquisado. Caso n\xE3o seja especificado um tipo, ser\xE1 esse o utilizado."),og()()(),Il(1830,"tr",14)(1831,"td",15)(1832,"div",23)(1833,"span",24),Qx(1834," contains"),zl(1835,"br"),og()()(),Il(1836,"td",22)(1837,"p"),Qx(1838,"Verifica se o texto "),Il(1839,"em"),Qx(1840,"cont\xE9m"),og(),Qx(1841," o valor pesquisado."),og()()(),Il(1842,"tr",14)(1843,"td",15)(1844,"div",23)(1845,"span",24),Qx(1846," endsWith"),zl(1847,"br"),og()()(),Il(1848,"td",22)(1849,"p"),Qx(1850,"Verifica se o texto "),Il(1851,"em"),Qx(1852,"finaliza"),og(),Qx(1853," com o valor pesquisado."),og()()()()());},dependencies:[Ka],encapsulation:2})}return a})();var nt=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=8;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,p){this.route=m,this.router=p;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let p=m.view;this.activeTab=p||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:"merge"}),this.activeTab=m;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(p){return new(p||a)(C(Xn),C(En))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:13,vars:4,consts:[["p-title","Combo",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(p,n){p&1&&(Il(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return n.changeTab("doc")}),zl(3,"sample-po-combo-doc"),og(),Il(4,"po-tab",3),ft("p-click",function(){return n.changeTab("web")}),zl(5,"sample-po-combo-basic-view")(6,"sample-po-combo-labs-view")(7,"sample-po-combo-scheduling-view")(8,"sample-po-combo-transfer-view")(9,"sample-po-combo-heroes-view")(10,"sample-po-combo-heroes-reactive-form-view")(11,"sample-po-combo-infinity-scroll-view")(12,"sample-po-combo-hotels-view"),og()()()),p&2&&(nw("p-actions",n.actions),Lp(2),nw("p-active",n.activeTab==="doc"),Lp(2),nw("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"));},dependencies:[cNe,qme,Yme,Ie,je,Re,Qe,Je,Xe,$e,tt,ot],encapsulation:2})}return a})();var zt=[{path:"",component:nt}],it=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275mod=fe({type:a});static \u0275inj=ue({imports:[uL.forChild(zt),uL]})}return a})();var cn=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275mod=fe({type:a});static \u0275inj=ue({imports:[sr,it]})}return a})();export{cn as DocPoComboModule};