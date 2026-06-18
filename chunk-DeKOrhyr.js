import {f as fe,u as ue,s as sr,a as uL,C,c3 as Xn,E as En,U as Un,r as r$1,b as f,cM as Z9,cN as lm,n as nb,W,w,bF as Fw,J as zl,T as nw,an as DO,aH as Ka,b8 as qme,b9 as Yme,H as Il,q as Qx,R as og,a1 as ft,A as Lp,ar as Ux,au as dg,bs as uN,aX as G9,aF as $9,aY as z9,aG as mk,aZ as hk,b0 as Qt,b1 as mv,c4 as C3,b4 as F3,c8 as Dde,c9 as Yhe,aB as Dx,aM as ww,aN as QA,bd as Ax,aO as Ew,aP as e0,bD as Ede,b6 as Yo,cG as NO,a4 as mN,cU as DN,cQ as Ik,cR as Ck,d2 as ohe,aJ as qhe,bI as Sa,a2 as JE,aI as dc,b7 as E3,X as we,a3 as cNe,aq as lx,B as yw,at as ux,aD as Xy,aT as eN,aE as Qy}from'./main-FCMDZGSJ.js';var Te=(()=>{class l{options=[{value:"poMultiselect1",label:"PO Multiselect 1"},{value:"poMultiselect2",label:"PO Multiselect 2"}];static \u0275fac=function(a){return new(a||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-multiselect-basic"]],standalone:false,decls:1,vars:1,consts:[["name","multiselect","p-label","PO Multiselect",3,"p-options"]],template:function(a,i){a&1&&zl(0,"po-multiselect",0),a&2&&nw("p-options",i.options);},dependencies:[Fw],encapsulation:2,changeDetection:1})}return l})();var Ue=l=>({"docs-sample-code-tabs":l}),Ve=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-multiselect-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Multiselect Basic"),og(),Il(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-multiselect-basic/sample-po-multiselect-basic.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-multiselect name="multiselect" p-label="PO Multiselect" [p-options]="options"> </po-multiselect>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-multiselect-basic/sample-po-multiselect-basic.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

import { PoMultiselectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-multiselect-basic',
  templateUrl: './sample-po-multiselect-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoMultiselectBasicComponent {
  options: Array<PoMultiselectOption> = [
    { value: 'poMultiselect1', label: 'PO Multiselect 1' },
    { value: 'poMultiselect2', label: 'PO Multiselect 2' }
  ];
}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-multiselect-basic"),og(),zl(23,"hr")),a&2&&(Lp(5),Ux("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,Ue,i.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,Te],encapsulation:2})}return l})();var Ae=(()=>{class l{helperText;customLiterals;event;filterMode;help;label;literals;multiselect;option;options;placeholder;placeholderSearch;properties;fieldErrorMessage;filterService;fieldLabel;fieldValue;size;listboxPosition="bottom";filterModeOptions=[{label:"Starts With",value:"startsWith"},{label:"Contains",value:"contains"},{label:"Ends With",value:"endsWith"}];listboxPositionOptions=[{label:"top",value:"top"},{label:"bottom",value:"bottom"}];propertiesOptions=[{value:"required",label:"Required"},{value:"showRequired",label:"Show Required"},{value:"disabled",label:"Disabled"},{value:"optional",label:"Optional"},{value:"hideSearch",label:"Hide Search"},{value:"autoHeight",label:"Auto Height"},{value:"sort",label:"Sort"},{value:"hideSelectAll",label:"Hide Select All"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"},{value:"loading",label:"Loading"},{value:"compactLabel",label:"Compact Label"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore();}addOption(){this.options=[...this.options,r$1({},this.option)],this.option={label:void 0,value:void 0};}changeEvent(s){this.event=s;}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals);}catch(s){this.customLiterals=void 0;}}restore(){this.helperText="",this.customLiterals=void 0,this.help="",this.filterMode=void 0,this.label=void 0,this.literals="",this.placeholder="",this.placeholderSearch=void 0,this.properties=[],this.fieldErrorMessage="",this.filterService="",this.fieldLabel="",this.fieldValue="",this.option={label:void 0,value:void 0},this.options=[],this.event="",this.multiselect=[],this.size="medium";}static \u0275fac=function(a){return new(a||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-multiselect-labs"]],standalone:false,decls:33,vars:51,consts:[["fOption","ngForm"],["f","ngForm"],[1,"po-row"],["name","PO Multiselect",1,"po-md-12",3,"ngModelChange","p-change","p-keydown","ngModel","p-helper","p-auto-height","p-disabled","p-field-label","p-field-value","p-filter-service","p-filter-mode","p-help","p-hide-search","p-hide-select-all","p-label","p-literals","p-loading","p-optional","p-options","p-placeholder","p-placeholder-search","p-required","p-field-error-message","p-show-required","p-size","p-sort","p-listbox-control-position","p-error-limit","p-label-text-wrap","p-compact-label"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Events",1,"po-md-6",3,"p-value"],["name","optionLabel","p-label","Option Label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","optionValue","p-label","Option Value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add Option",1,"po-md-4","po-lg-2",3,"p-click","p-disabled"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholderSearch","p-clean","","p-label","Placeholder Search",1,"po-md-6",3,"ngModelChange","ngModel"],["name","fieldErrorMessage","p-clean","","p-label","Field Error Message",1,"po-md-6",3,"ngModelChange","ngModel"],["name","literals","p-help",'Ex.: {"noData": "Sem dados a serem exibidos", "placeholderSearch": "Buscar"}',"p-label","Literals",1,"po-md-12","po-lg-6",3,"ngModelChange","p-change","ngModel"],["name","filterService","p-clean","","p-help","https://po-sample-api.onrender.com/v1/heroes","p-label","Filter Service",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel"],["name","fieldValue","p-clean","","p-label","Field Value",1,"po-md-6",3,"ngModelChange","ngModel"],["name","fieldLabel","p-clean","","p-label","Field Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","filterMode","p-columns","4","p-label","Filter mode",1,"po-md-12",3,"ngModelChange","ngModel","p-disabled","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","listboxPosition","p-label","Listbox Position",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(a,i){if(a&1){let c=Dx();Il(0,"div",2)(1,"po-multiselect",3),ww("ngModelChange",function(r){return Xy(c),eN(i.multiselect,r)||(i.multiselect=r),Qy(r)}),ft("p-change",function(){return i.changeEvent("p-change")})("p-keydown",function(){return i.changeEvent("p-keydown")}),og(),QA(),og(),zl(2,"po-divider"),Il(3,"div",2),zl(4,"po-info",4)(5,"po-info",5),og(),zl(6,"po-divider"),Il(7,"form",null,0)(9,"div",2)(10,"po-input",6),ww("ngModelChange",function(r){return Xy(c),eN(i.option.label,r)||(i.option.label=r),Qy(r)}),og(),QA(),Il(11,"po-input",7),ww("ngModelChange",function(r){return Xy(c),eN(i.option.value,r)||(i.option.value=r),Qy(r)}),og(),QA(),og(),Il(12,"div",2)(13,"po-button",8),ft("p-click",function(){return i.addOption()}),og()()(),zl(14,"po-divider"),Il(15,"form",null,1)(17,"po-input",9),ww("ngModelChange",function(r){return Xy(c),eN(i.label,r)||(i.label=r),Qy(r)}),og(),QA(),Il(18,"po-input",10),ww("ngModelChange",function(r){return Xy(c),eN(i.help,r)||(i.help=r),Qy(r)}),og(),QA(),Il(19,"po-input",11),ww("ngModelChange",function(r){return Xy(c),eN(i.helperText,r)||(i.helperText=r),Qy(r)}),og(),QA(),Il(20,"po-input",12),ww("ngModelChange",function(r){return Xy(c),eN(i.placeholder,r)||(i.placeholder=r),Qy(r)}),og(),QA(),Il(21,"po-input",13),ww("ngModelChange",function(r){return Xy(c),eN(i.placeholderSearch,r)||(i.placeholderSearch=r),Qy(r)}),og(),QA(),Il(22,"po-input",14),ww("ngModelChange",function(r){return Xy(c),eN(i.fieldErrorMessage,r)||(i.fieldErrorMessage=r),Qy(r)}),og(),QA(),Il(23,"po-input",15),ww("ngModelChange",function(r){return Xy(c),eN(i.literals,r)||(i.literals=r),Qy(r)}),ft("p-change",function(){return i.changeLiterals()}),og(),QA(),Il(24,"po-input",16),ww("ngModelChange",function(r){return Xy(c),eN(i.filterService,r)||(i.filterService=r),Qy(r)}),og(),QA(),Il(25,"po-input",17),ww("ngModelChange",function(r){return Xy(c),eN(i.fieldValue,r)||(i.fieldValue=r),Qy(r)}),og(),QA(),Il(26,"po-input",18),ww("ngModelChange",function(r){return Xy(c),eN(i.fieldLabel,r)||(i.fieldLabel=r),Qy(r)}),og(),QA(),Il(27,"po-checkbox-group",19),ww("ngModelChange",function(r){return Xy(c),eN(i.properties,r)||(i.properties=r),Qy(r)}),og(),QA(),Il(28,"po-radio-group",20),ww("ngModelChange",function(r){return Xy(c),eN(i.filterMode,r)||(i.filterMode=r),Qy(r)}),og(),QA(),Il(29,"po-radio-group",21),ww("ngModelChange",function(r){return Xy(c),eN(i.size,r)||(i.size=r),Qy(r)}),og(),QA(),Il(30,"po-radio-group",22),ww("ngModelChange",function(r){return Xy(c),eN(i.listboxPosition,r)||(i.listboxPosition=r),Qy(r)}),og(),QA(),Il(31,"div",2)(32,"po-button",23),ft("p-click",function(){return i.restore()}),og()()();}if(a&2){let c=Ax(8);Lp(),Ew("ngModel",i.multiselect),nw("p-helper",i.helperText)("p-auto-height",i.properties.includes("autoHeight"))("p-disabled",i.properties.includes("disabled"))("p-field-label",i.fieldLabel)("p-field-value",i.fieldValue)("p-filter-service",i.filterService)("p-filter-mode",i.filterMode)("p-help",i.help)("p-hide-search",i.properties.includes("hideSearch"))("p-hide-select-all",i.properties.includes("hideSelectAll"))("p-label",i.label)("p-literals",i.customLiterals)("p-loading",i.properties.includes("loading"))("p-optional",i.properties.includes("optional"))("p-options",i.options)("p-placeholder",i.placeholder)("p-placeholder-search",i.placeholderSearch)("p-required",i.properties.includes("required"))("p-field-error-message",i.fieldErrorMessage)("p-show-required",i.properties.includes("showRequired"))("p-size",i.size)("p-sort",i.properties.includes("sort"))("p-listbox-control-position",i.listboxPosition)("p-error-limit",i.properties==null?null:i.properties.includes("errorLimit"))("p-label-text-wrap",i.properties==null?null:i.properties.includes("labelTextWrap"))("p-compact-label",i.properties==null?null:i.properties.includes("compactLabel")),e0(),Lp(3),nw("p-value",i.multiselect),Lp(),nw("p-value",i.event),Lp(5),Ew("ngModel",i.option.label),e0(),Lp(),Ew("ngModel",i.option.value),e0(),Lp(2),nw("p-disabled",c.form.invalid),Lp(4),Ew("ngModel",i.label),e0(),Lp(),Ew("ngModel",i.help),e0(),Lp(),Ew("ngModel",i.helperText),e0(),Lp(),Ew("ngModel",i.placeholder),e0(),Lp(),Ew("ngModel",i.placeholderSearch),e0(),Lp(),Ew("ngModel",i.fieldErrorMessage),e0(),Lp(),Ew("ngModel",i.literals),e0(),Lp(),Ew("ngModel",i.filterService),e0(),Lp(),Ew("ngModel",i.fieldValue),e0(),Lp(),Ew("ngModel",i.fieldLabel),e0(),Lp(),Ew("ngModel",i.properties),nw("p-options",i.propertiesOptions),e0(),Lp(),Ew("ngModel",i.filterMode),nw("p-disabled",i.properties.includes("hideSearch"))("p-options",i.filterModeOptions),e0(),Lp(),Ew("ngModel",i.size),nw("p-options",i.sizeOptions),e0(),Lp(),Ew("ngModel",i.listboxPosition),nw("p-options",i.listboxPositionOptions),e0();}},dependencies:[G9,$9,z9,mk,hk,Qt,mv,C3,F3,Fw,Dde,Yhe],encapsulation:2,changeDetection:1})}return l})();var Ke=l=>({"docs-sample-code-tabs":l}),De=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-multiselect-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Multiselect Labs"),og(),Il(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-multiselect-labs/sample-po-multiselect-labs.component.html"),og(),Il(13,"pre",7),Qx(14,`<div class="po-row">
  <po-multiselect
    class="po-md-12"
    name="PO Multiselect"
    [(ngModel)]="multiselect"
    [p-helper]="helperText"
    [p-auto-height]="properties.includes('autoHeight')"
    [p-disabled]="properties.includes('disabled')"
    [p-field-label]="fieldLabel"
    [p-field-value]="fieldValue"
    [p-filter-service]="filterService"
    [p-filter-mode]="filterMode"
    [p-help]="help"
    [p-hide-search]="properties.includes('hideSearch')"
    [p-hide-select-all]="properties.includes('hideSelectAll')"
    [p-label]="label"
    [p-literals]="customLiterals"
    [p-loading]="properties.includes('loading')"
    [p-optional]="properties.includes('optional')"
    [p-options]="options"
    [p-placeholder]="placeholder"
    [p-placeholder-search]="placeholderSearch"
    [p-required]="properties.includes('required')"
    [p-field-error-message]="fieldErrorMessage"
    [p-show-required]="properties.includes('showRequired')"
    [p-size]="size"
    [p-sort]="properties.includes('sort')"
    [p-listbox-control-position]="listboxPosition"
    (p-change)="changeEvent('p-change')"
    (p-keydown)="changeEvent('p-keydown')"
    [p-error-limit]="$safeNavigationMigration(properties?.includes('errorLimit'))"
    [p-label-text-wrap]="$safeNavigationMigration(properties?.includes('labelTextWrap'))"
    [p-compact-label]="$safeNavigationMigration(properties?.includes('compactLabel'))"
  >
  </po-multiselect>
</div>

<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="multiselect"> </po-info>

  <po-info class="po-md-6" p-label="Events" [p-value]="event"> </po-info>
</div>

<po-divider />

<form #fOption="ngForm">
  <div class="po-row">
    <po-input class="po-md-6" name="optionLabel" [(ngModel)]="option.label" p-label="Option Label" p-required>
    </po-input>

    <po-input class="po-md-6" name="optionValue" [(ngModel)]="option.value" p-label="Option Value" p-required>
    </po-input>
  </div>

  <div class="po-row">
    <po-button class="po-md-4 po-lg-2" p-label="Add Option" [p-disabled]="fOption.form.invalid" (p-click)="addOption()">
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
    name="placeholderSearch"
    [(ngModel)]="placeholderSearch"
    p-clean
    p-label="Placeholder Search"
  >
  </po-input>

  <po-input
    class="po-md-6"
    name="fieldErrorMessage"
    [(ngModel)]="fieldErrorMessage"
    p-clean
    p-label="Field Error Message"
  >
  </po-input>

  <po-input
    class="po-md-12 po-lg-6"
    name="literals"
    [(ngModel)]="literals"
    p-help='Ex.: {"noData": "Sem dados a serem exibidos", "placeholderSearch": "Buscar"}'
    p-label="Literals"
    (p-change)="changeLiterals()"
  >
  </po-input>

  <po-input
    class="po-md-12 po-lg-6"
    name="filterService"
    [(ngModel)]="filterService"
    p-clean
    p-help="https://po-sample-api.onrender.com/v1/heroes"
    p-label="Filter Service"
  >
  </po-input>

  <po-input class="po-md-6" name="fieldValue" [(ngModel)]="fieldValue" p-clean p-label="Field Value"> </po-input>

  <po-input class="po-md-6" name="fieldLabel" [(ngModel)]="fieldLabel" p-clean p-label="Field Label"> </po-input>

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
    name="filterMode"
    [(ngModel)]="filterMode"
    p-columns="4"
    p-label="Filter mode"
    [p-disabled]="properties.includes('hideSearch')"
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

  <div class="po-row">
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-multiselect-labs/sample-po-multiselect-labs.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import {
  PoCheckboxGroupOption,
  PoMultiselectLiterals,
  PoMultiselectOption,
  PoRadioGroupOption
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-multiselect-labs',
  templateUrl: './sample-po-multiselect-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoMultiselectLabsComponent implements OnInit {
  helperText: string;
  customLiterals: PoMultiselectLiterals;
  event: string;
  filterMode: string;
  help: string;
  label: string;
  literals: string;
  multiselect: Array<string>;
  option: PoMultiselectOption;
  options: Array<PoMultiselectOption>;
  placeholder: string;
  placeholderSearch: string;
  properties: Array<string>;
  fieldErrorMessage: string;
  filterService: string;
  fieldLabel: string;
  fieldValue: string;
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

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'required', label: 'Required' },
    { value: 'showRequired', label: 'Show Required' },
    { value: 'disabled', label: 'Disabled' },
    { value: 'optional', label: 'Optional' },
    { value: 'hideSearch', label: 'Hide Search' },
    { value: 'autoHeight', label: 'Auto Height' },
    { value: 'sort', label: 'Sort' },
    { value: 'hideSelectAll', label: 'Hide Select All' },
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
    this.options = [...this.options, { ...this.option }];
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

  restore() {
    this.helperText = '';
    this.customLiterals = undefined;
    this.help = '';
    this.filterMode = undefined;
    this.label = undefined;
    this.literals = '';
    this.placeholder = '';
    this.placeholderSearch = undefined;
    this.properties = [];
    this.fieldErrorMessage = '';
    this.filterService = '';
    this.fieldLabel = '';
    this.fieldValue = '';

    this.option = { label: undefined, value: undefined };
    this.options = [];

    this.event = '';
    this.multiselect = [];
    this.size = 'medium';
  }
}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-multiselect-labs"),og(),zl(23,"hr")),a&2&&(Lp(5),Ux("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,Ke,i.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,Ae],encapsulation:2})}return l})();var Oe=(()=>{class l{days;employeesVacations=[];finalPeriod;initialPeriod;nameEmployeesVacations;employees=[{value:"412341",label:"Alfred"},{value:"518734",label:"Alice"},{value:"986237",label:"Bradley"},{value:"941278",label:"Jackie"},{value:"897643",label:"Phillip"},{value:"423767",label:"Reynold"},{value:"423837",label:"Robert"}];daysOptions=[{value:10,label:"10"},{value:20,label:"20"},{value:30,label:"30"}];ngOnInit(){this.clean();}clean(){this.days=20,this.initialPeriod=void 0,this.finalPeriod=void 0,this.employeesVacations=[];}updateNameEmployeesVacations(){this.nameEmployeesVacations=this.employees.filter(s=>this.employeesVacations.includes(s.value)).map(s=>s.label).join(", ");}static \u0275fac=function(a){return new(a||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-multiselect-vacation"]],standalone:false,decls:26,vars:20,consts:[["f","ngForm"],["modalEmployeesVacation",""],[1,"po-row"],["name","initialPeriod","p-label","Initial period","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","finalPeriod","p-label","Final period","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-min-date"],["name","days","p-help","Maximum of days that employs can choose","p-label","How many days of vacation the employees will be able to have?","p-required","",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","employeesVacations","p-label","Select your employees for collective vacations","p-required","",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","Approve Vacations","p-label","Approve Vacations",1,"po-md-4","po-offset-md-5","po-offset-lg-5","po-offset-xl-5",3,"p-click","p-disabled"],["p-label","Clean",1,"po-md-3",3,"p-click"],["p-title","Collective Vacation"],["p-label","Initial period",1,"po-md-5",3,"p-value"],["p-label","Final period",1,"po-md-5",3,"p-value"],["p-label","Days",1,"po-md-2",3,"p-value"],["p-label","Employees",1,"po-lg-12",3,"p-value"]],template:function(a,i){if(a&1){let c=Dx();Il(0,"form",null,0)(2,"h3"),Qx(3,"Collective vacations"),og(),zl(4,"po-divider"),Il(5,"div",2)(6,"po-datepicker",3),ww("ngModelChange",function(r){return Xy(c),eN(i.initialPeriod,r)||(i.initialPeriod=r),Qy(r)}),og(),QA(),Il(7,"po-datepicker",4),ww("ngModelChange",function(r){return Xy(c),eN(i.finalPeriod,r)||(i.finalPeriod=r),Qy(r)}),og(),QA(),og(),Il(8,"div",2)(9,"po-radio-group",5),ww("ngModelChange",function(r){return Xy(c),eN(i.days,r)||(i.days=r),Qy(r)}),og(),QA(),og(),Il(10,"div",2)(11,"po-multiselect",6),ww("ngModelChange",function(r){return Xy(c),eN(i.employeesVacations,r)||(i.employeesVacations=r),Qy(r)}),og(),QA(),og(),Il(12,"div",2)(13,"po-button",7),ft("p-click",function(){Xy(c);let r=Ax(16);return i.updateNameEmployeesVacations(),Qy(r.open())}),og(),Il(14,"po-button",8),ft("p-click",function(){return i.clean()}),og()()(),Il(15,"po-modal",9,1)(17,"div",2),zl(18,"po-info",10),mN(19,"date"),zl(20,"po-info",11),mN(21,"date"),zl(22,"po-info",12),og(),zl(23,"po-divider"),Il(24,"div",2),zl(25,"po-info",13),og()();}if(a&2){let c=Ax(1);Lp(6),Ew("ngModel",i.initialPeriod),e0(),Lp(),Ew("ngModel",i.finalPeriod),nw("p-min-date",i.initialPeriod),e0(),Lp(2),Ew("ngModel",i.days),nw("p-options",i.daysOptions),e0(),Lp(2),Ew("ngModel",i.employeesVacations),nw("p-options",i.employees),e0(),Lp(2),nw("p-disabled",c.form.invalid),Lp(5),nw("p-value",DN(19,12,i.initialPeriod,"longDate","+0000")),Lp(2),nw("p-value",DN(21,16,i.finalPeriod,"longDate","+0000")),Lp(2),nw("p-value",i.days),Lp(3),nw("p-value",i.nameEmployeesVacations);}},dependencies:[G9,$9,z9,mk,hk,Qt,mv,Ede,Fw,Dde,Yhe,Yo,NO],encapsulation:2,changeDetection:1})}return l})();var Ze=l=>({"docs-sample-code-tabs":l}),Le=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-multiselect-vacation-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Multiselect - Vacation"),og(),Il(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-multiselect-vacation/sample-po-multiselect-vacation.component.html"),og(),Il(13,"pre",7),Qx(14,`<form #f="ngForm">
  <h3>Collective vacations</h3>

  <po-divider />

  <div class="po-row">
    <po-datepicker class="po-md-6" name="initialPeriod" [(ngModel)]="initialPeriod" p-label="Initial period" p-required>
    </po-datepicker>

    <po-datepicker
      class="po-md-6"
      name="finalPeriod"
      [(ngModel)]="finalPeriod"
      p-label="Final period"
      p-required
      [p-min-date]="initialPeriod"
    >
    </po-datepicker>
  </div>

  <div class="po-row">
    <po-radio-group
      class="po-lg-12"
      name="days"
      [(ngModel)]="days"
      p-help="Maximum of days that employs can choose"
      p-label="How many days of vacation the employees will be able to have?"
      p-required
      [p-options]="daysOptions"
    >
    </po-radio-group>
  </div>

  <div class="po-row">
    <po-multiselect
      class="po-md-12"
      name="employeesVacations"
      [(ngModel)]="employeesVacations"
      p-label="Select your employees for collective vacations"
      [p-options]="employees"
      p-required
    >
    </po-multiselect>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-4 po-offset-md-5 po-offset-lg-5 po-offset-xl-5"
      name="Approve Vacations"
      p-label="Approve Vacations"
      [p-disabled]="f.form.invalid"
      (p-click)="updateNameEmployeesVacations(); modalEmployeesVacation.open()"
    >
    </po-button>

    <po-button class="po-md-3" p-label="Clean" (p-click)="clean()"> </po-button>
  </div>
</form>

<po-modal #modalEmployeesVacation p-title="Collective Vacation">
  <div class="po-row">
    <po-info class="po-md-5" p-label="Initial period" [p-value]="initialPeriod | date: 'longDate' : '+0000'"> </po-info>

    <po-info class="po-md-5" p-label="Final period" [p-value]="finalPeriod | date: 'longDate' : '+0000'"> </po-info>

    <po-info class="po-md-2" p-label="Days" [p-value]="days"> </po-info>
  </div>

  <po-divider />

  <div class="po-row">
    <po-info class="po-lg-12" p-label="Employees" [p-value]="nameEmployeesVacations"> </po-info>
  </div>
</po-modal>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-multiselect-vacation/sample-po-multiselect-vacation.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { PoMultiselectOption, PoRadioGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-multiselect-vacation',
  templateUrl: './sample-po-multiselect-vacation.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoMultiselectVacationComponent implements OnInit {
  days: number;
  employeesVacations: Array<string> = [];
  finalPeriod: Date;
  initialPeriod: Date;
  nameEmployeesVacations: string;

  public readonly employees: Array<PoMultiselectOption> = [
    { value: '412341', label: 'Alfred' },
    { value: '518734', label: 'Alice' },
    { value: '986237', label: 'Bradley' },
    { value: '941278', label: 'Jackie' },
    { value: '897643', label: 'Phillip' },
    { value: '423767', label: 'Reynold' },
    { value: '423837', label: 'Robert' }
  ];

  public daysOptions: Array<PoRadioGroupOption> = [
    { value: 10, label: '10' },
    { value: 20, label: '20' },
    { value: 30, label: '30' }
  ];

  ngOnInit() {
    this.clean();
  }

  clean() {
    this.days = 20;
    this.initialPeriod = undefined;
    this.finalPeriod = undefined;
    this.employeesVacations = [];
  }

  updateNameEmployeesVacations() {
    this.nameEmployeesVacations = this.employees
      .filter((employee: PoMultiselectOption) => this.employeesVacations.includes(<string>employee.value))
      .map((employee: PoMultiselectOption) => employee.label)
      .join(', ');
  }
}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-multiselect-vacation"),og(),zl(23,"hr")),a&2&&(Lp(5),Ux("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,Ze,i.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,Oe],encapsulation:2})}return l})();var ke=(()=>{class l{formBuilder=f(Z9);days;employeesVacations=[];finalPeriod;formCollectiveVacations;initialPeriod;nameEmployeesVacations;employees=[{value:"412341",label:"Alfred"},{value:"518734",label:"Alice"},{value:"986237",label:"Bradley"},{value:"941278",label:"Jackie"},{value:"112333",label:"Jane"},{value:"989898",label:"John"},{value:"897643",label:"Phillip"},{value:"423767",label:"Reynold"},{value:"423837",label:"Robert"}];daysOptions=[{value:10,label:"10"},{value:20,label:"20"},{value:30,label:"30"}];ngOnInit(){this.formCollectiveVacations=this.formBuilder.group({initialPeriod:[null,lm.required],finalPeriod:[null,lm.required],days:[null,lm.required],employeesVacations:[null,lm.required]}),this.clean();}clean(){this.formCollectiveVacations.patchValue({days:20,initialPeriod:void 0,finalPeriod:void 0,employeesVacations:void 0});}getRangeFinalPeriod(){return this.formCollectiveVacations.get("initialPeriod").value}updateEmployeesVacations(){this.nameEmployeesVacations=this.employees.filter(s=>this.formCollectiveVacations.get("employeesVacations").value.includes(s.value)).map(s=>s.label).join(", "),this.initialPeriod=this.formCollectiveVacations.get("initialPeriod").value,this.finalPeriod=this.formCollectiveVacations.get("finalPeriod").value,this.days=this.formCollectiveVacations.get("days").value;}static \u0275fac=function(a){return new(a||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-multiselect-vacation-reactive-form"]],standalone:false,decls:24,vars:20,consts:[["modalEmployeesVacation",""],[3,"formGroup"],[1,"po-row"],["name","initialPeriod","formControlName","initialPeriod","p-label","Initial period","p-required","",1,"po-md-6"],["name","finalPeriod","formControlName","finalPeriod","p-label","Final period","p-required","",1,"po-md-6",3,"p-min-date"],["name","employeesVacations","formControlName","employeesVacations","p-label","Select your employees for collective vacations",1,"po-md-4",3,"p-auto-height","p-options","p-required"],["name","days","formControlName","days","p-label","How many days of vacation the employees will be able to have?","p-required","",1,"po-lg-8",3,"p-options","p-columns"],["name","Approve Vacations","p-label","Approve Vacations",1,"po-md-4","po-offset-md-5","po-offset-lg-5","po-offset-xl-5",3,"p-click","p-disabled"],["p-label","Clean",1,"po-md-3",3,"p-click"],["p-title","Collective Vacation"],["p-label","Initial period",1,"po-md-5",3,"p-value"],["p-label","Final period",1,"po-md-5",3,"p-value"],["p-label","Days",1,"po-md-2",3,"p-value"],["p-label","Employees",1,"po-lg-12",3,"p-value"]],template:function(a,i){if(a&1){let c=Dx();Il(0,"form",1)(1,"h3"),Qx(2,"Collective vacations"),og(),zl(3,"po-divider"),Il(4,"div",2),zl(5,"po-datepicker",3),QA(),zl(6,"po-datepicker",4),QA(),og(),Il(7,"div",2),zl(8,"po-multiselect",5),QA(),zl(9,"po-radio-group",6),QA(),og(),Il(10,"div",2)(11,"po-button",7),ft("p-click",function(){Xy(c);let r=Ax(14);return i.updateEmployeesVacations(),Qy(r.open())}),og(),Il(12,"po-button",8),ft("p-click",function(){return i.clean()}),og()()(),Il(13,"po-modal",9,0)(15,"div",2),zl(16,"po-info",10),mN(17,"date"),zl(18,"po-info",11),mN(19,"date"),zl(20,"po-info",12),og(),zl(21,"po-divider"),Il(22,"div",2),zl(23,"po-info",13),og()();}a&2&&(nw("formGroup",i.formCollectiveVacations),Lp(5),e0(),Lp(),nw("p-min-date",i.getRangeFinalPeriod()),e0(),Lp(2),nw("p-auto-height",true)("p-options",i.employees)("p-required",true),e0(),Lp(),nw("p-options",i.daysOptions)("p-columns",3),e0(),Lp(2),nw("p-disabled",i.formCollectiveVacations.invalid),Lp(5),nw("p-value",DN(17,12,i.initialPeriod,"longDate","+0000")),Lp(2),nw("p-value",DN(19,16,i.finalPeriod,"longDate","+0000")),Lp(2),nw("p-value",i.days),Lp(3),nw("p-value",i.nameEmployeesVacations));},dependencies:[G9,$9,z9,Ik,Ck,Qt,mv,Ede,Fw,Dde,Yhe,Yo,NO],encapsulation:2,changeDetection:1})}return l})();var tt=l=>({"docs-sample-code-tabs":l}),qe=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-multiselect-vacation-reactive-form-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Multiselect - Vacation Reactive Form"),og(),Il(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-multiselect-vacation-reactive-form/sample-po-multiselect-vacation-reactive-form.component.html"),og(),Il(13,"pre",7),Qx(14,`<form [formGroup]="formCollectiveVacations">
  <h3>Collective vacations</h3>

  <po-divider />

  <div class="po-row">
    <po-datepicker
      class="po-md-6"
      name="initialPeriod"
      formControlName="initialPeriod"
      p-label="Initial period"
      p-required
    >
    </po-datepicker>

    <po-datepicker
      class="po-md-6"
      name="finalPeriod"
      formControlName="finalPeriod"
      p-label="Final period"
      p-required
      [p-min-date]="getRangeFinalPeriod()"
    >
    </po-datepicker>
  </div>

  <div class="po-row">
    <po-multiselect
      class="po-md-4"
      name="employeesVacations"
      formControlName="employeesVacations"
      p-label="Select your employees for collective vacations"
      [p-auto-height]="true"
      [p-options]="employees"
      [p-required]="true"
    >
    </po-multiselect>

    <po-radio-group
      class="po-lg-8"
      name="days"
      formControlName="days"
      p-label="How many days of vacation the employees will be able to have?"
      p-required
      [p-options]="daysOptions"
      [p-columns]="3"
    >
    </po-radio-group>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-4 po-offset-md-5 po-offset-lg-5 po-offset-xl-5"
      name="Approve Vacations"
      p-label="Approve Vacations"
      [p-disabled]="formCollectiveVacations.invalid"
      (p-click)="updateEmployeesVacations(); modalEmployeesVacation.open()"
    >
    </po-button>

    <po-button class="po-md-3" p-label="Clean" (p-click)="clean()"> </po-button>
  </div>
</form>

<po-modal #modalEmployeesVacation p-title="Collective Vacation">
  <div class="po-row">
    <po-info class="po-md-5" p-label="Initial period" [p-value]="initialPeriod | date: 'longDate' : '+0000'"> </po-info>

    <po-info class="po-md-5" p-label="Final period" [p-value]="finalPeriod | date: 'longDate' : '+0000'"> </po-info>

    <po-info class="po-md-2" p-label="Days" [p-value]="days"> </po-info>
  </div>

  <po-divider />

  <div class="po-row">
    <po-info class="po-lg-12" p-label="Employees" [p-value]="nameEmployeesVacations"> </po-info>
  </div>
</po-modal>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-multiselect-vacation-reactive-form/sample-po-multiselect-vacation-reactive-form.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

import { PoMultiselectOption, PoRadioGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-multiselect-vacation-reactive-form',
  templateUrl: './sample-po-multiselect-vacation-reactive-form.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoMultiselectVacationReactiveFormComponent implements OnInit {
  private formBuilder = inject(UntypedFormBuilder);

  days: number;
  employeesVacations: Array<string> = [];
  finalPeriod: Date;
  formCollectiveVacations: UntypedFormGroup;
  initialPeriod: Date;
  nameEmployeesVacations: string;

  public readonly employees: Array<PoMultiselectOption> = [
    { value: '412341', label: 'Alfred' },
    { value: '518734', label: 'Alice' },
    { value: '986237', label: 'Bradley' },
    { value: '941278', label: 'Jackie' },
    { value: '112333', label: 'Jane' },
    { value: '989898', label: 'John' },
    { value: '897643', label: 'Phillip' },
    { value: '423767', label: 'Reynold' },
    { value: '423837', label: 'Robert' }
  ];

  public daysOptions: Array<PoRadioGroupOption> = [
    { value: 10, label: '10' },
    { value: 20, label: '20' },
    { value: 30, label: '30' }
  ];

  ngOnInit() {
    this.formCollectiveVacations = this.formBuilder.group({
      initialPeriod: [null, Validators.required],
      finalPeriod: [null, Validators.required],
      days: [null, Validators.required],
      employeesVacations: [null, Validators.required]
    });

    this.clean();
  }

  clean() {
    this.formCollectiveVacations.patchValue({
      days: 20,
      initialPeriod: undefined,
      finalPeriod: undefined,
      employeesVacations: undefined
    });
  }

  getRangeFinalPeriod() {
    return this.formCollectiveVacations.get('initialPeriod').value;
  }

  updateEmployeesVacations() {
    this.nameEmployeesVacations = this.employees
      .filter((employee: PoMultiselectOption) =>
        this.formCollectiveVacations.get('employeesVacations').value.includes(<string>employee.value)
      )
      .map((employee: PoMultiselectOption) => employee.label)
      .join(', ');
    this.initialPeriod = this.formCollectiveVacations.get('initialPeriod').value;
    this.finalPeriod = this.formCollectiveVacations.get('finalPeriod').value;
    this.days = this.formCollectiveVacations.get('days').value;
  }
}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-multiselect-vacation-reactive-form"),og(),zl(23,"hr")),a&2&&(Lp(5),Ux("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,tt,i.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,ke],encapsulation:2})}return l})();function it(l,K){l&1&&zl(0,"po-tag",11),l&2&&nw("p-icon",true);}function ot(l,K){l&1&&zl(0,"po-tag",12),l&2&&nw("p-icon",true);}function lt(l,K){l&1&&zl(0,"po-tag",13),l&2&&nw("p-icon",true);}function at(l,K){if(l&1&&(Il(0,"div",0)(1,"div",7)(2,"div",8),Qx(3),og()(),Il(4,"div",9)(5,"div",10),lx(6,it,1,1,"po-tag",11),lx(7,ot,1,1,"po-tag",12),lx(8,lt,1,1,"po-tag",13),og()()()),l&2){let s=K.$implicit;Lp(3),yw(s.label),Lp(3),ux(s.admin?6:-1),Lp(),ux(s.access?7:-1),Lp(),ux(!s.admin&&!s.access?8:-1);}}var Fe=(()=>{class l{employee;typeAccess;typeAccessMap={admin:{admin:true,access:true},access:{admin:false,access:true},noAccess:{admin:false,access:false}};options=[{value:"Anna M.",label:"Anna M.",admin:false,access:true},{value:"Jhon T.",label:"Jhon T.",admin:true,access:true},{value:"Marie J.",label:"Marie J.",admin:false,access:false}];employees=[{label:"Anna M.",value:"Anna M."},{label:"Jhon T.",value:"Jhon T."},{label:"Marie J.",value:"Marie J."}];typeAccessValue=[{label:"Admin e acesso padr\xE3o",value:"admin"},{label:"Acesso padr\xE3o",value:"access"},{label:"Sem acesso",value:"noAccess"}];changeAccess(){let s=[...this.options].map(a=>a.value===this.employee?r$1({value:a.value,label:a.label},this.typeAccessMap[this.typeAccess]):a);this.options=s,this.employee=void 0,this.typeAccess=void 0;}static \u0275fac=function(a){return new(a||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-multiselect-template"]],standalone:false,decls:7,vars:7,consts:[[1,"po-row"],["name","employee","p-label","Employee",1,"po-md-5",3,"ngModelChange","p-options","ngModel"],["name","typeOfAccess","p-label","Type of access",1,"po-md-6",3,"ngModelChange","p-options","ngModel"],[1,"po-md-1","containerButton"],["p-label","Alterar acesso",3,"p-click","p-disabled"],["name","multiselect","p-label","PO Multiselect",1,"po-md-12",3,"p-options","p-hide-select-all"],["p-multiselect-option-template",""],[1,"po-md-2","containerFlex"],[1,"po-font-text-large-bold"],[1,"po-md-10"],[1,"containerFlexTag"],["p-value","Admin","p-type","success",3,"p-icon"],["p-value","Normal","p-type","info",3,"p-icon"],["p-value","Sem acesso","p-type","danger",3,"p-icon"]],template:function(a,i){a&1&&(Il(0,"div",0)(1,"po-select",1),ww("ngModelChange",function(d){return eN(i.employee,d)||(i.employee=d),d}),og(),QA(),Il(2,"po-select",2),ww("ngModelChange",function(d){return eN(i.typeAccess,d)||(i.typeAccess=d),d}),og(),QA(),Il(3,"div",3)(4,"po-button",4),ft("p-click",function(){return i.changeAccess()}),og()(),Il(5,"po-multiselect",5),JE(6,at,9,4,"ng-template",6),og()()),a&2&&(Lp(),nw("p-options",i.employees),Ew("ngModel",i.employee),e0(),Lp(),nw("p-options",i.typeAccessValue),Ew("ngModel",i.typeAccess),e0(),Lp(2),nw("p-disabled",!i.employee||!i.typeAccess),Lp(),nw("p-options",i.options)("p-hide-select-all",true));},dependencies:[$9,mk,Qt,Fw,ohe,qhe,Sa],styles:[".containerFlex[_ngcontent-%COMP%]{display:flex;align-items:center}.containerFlexTag[_ngcontent-%COMP%]{display:flex;gap:2px;flex-direction:column}.containerButton[_ngcontent-%COMP%]{display:flex;align-items:flex-end;padding:8px}"],changeDetection:1})}return l})();var rt=l=>({"docs-sample-code-tabs":l}),Be=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-multiselect-template-view"]],standalone:false,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Multiselect - Template"),og(),Il(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-multiselect-template/sample-po-multiselect-template.component.html"),og(),Il(13,"pre",7),Qx(14,`<div class="po-row">
  <po-select class="po-md-5" name="employee" p-label="Employee" [p-options]="employees" [(ngModel)]="employee">
  </po-select>

  <po-select
    class="po-md-6"
    name="typeOfAccess"
    p-label="Type of access"
    [p-options]="typeAccessValue"
    [(ngModel)]="typeAccess"
  >
  </po-select>

  <div class="po-md-1 containerButton">
    <po-button p-label="Alterar acesso" [p-disabled]="!employee || !typeAccess" (p-click)="changeAccess()"> </po-button>
  </div>

  <po-multiselect
    class="po-md-12"
    name="multiselect"
    p-label="PO Multiselect"
    [p-options]="options"
    [p-hide-select-all]="true"
  >
    <ng-template p-multiselect-option-template let-option>
      <div class="po-row">
        <div class="po-md-2 containerFlex">
          <div class="po-font-text-large-bold">{ { option.label }}</div>
        </div>

        <div class="po-md-10">
          <div class="containerFlexTag">
            @if (option.admin) {
              <po-tag p-value="Admin" p-type="success" [p-icon]="true"> </po-tag>
            }
            @if (option.access) {
              <po-tag p-value="Normal" p-type="info" [p-icon]="true"> </po-tag>
            }
            @if (!option.admin && !option.access) {
              <po-tag p-value="Sem acesso" p-type="danger" [p-icon]="true"> </po-tag>
            }
          </div>
        </div>
      </div>
    </ng-template>
  </po-multiselect>
</div>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-multiselect-template/sample-po-multiselect-template.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-multiselect-template',
  templateUrl: './sample-po-multiselect-template.component.html',
  styleUrls: ['./sample-po-multiselect-template.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoMultiselectTemplateComponent {
  employee;
  typeAccess;
  typeAccessMap = {
    admin: { admin: true, access: true },
    access: { admin: false, access: true },
    noAccess: { admin: false, access: false }
  };

  options = [
    { value: 'Anna M.', label: 'Anna M.', admin: false, access: true },
    { value: 'Jhon T.', label: 'Jhon T.', admin: true, access: true },
    { value: 'Marie J.', label: 'Marie J.', admin: false, access: false }
  ];

  readonly employees: Array<PoSelectOption> = [
    { label: 'Anna M.', value: 'Anna M.' },
    { label: 'Jhon T.', value: 'Jhon T.' },
    { label: 'Marie J.', value: 'Marie J.' }
  ];

  readonly typeAccessValue: Array<PoSelectOption> = [
    { label: 'Admin e acesso padr\xE3o', value: 'admin' },
    { label: 'Acesso padr\xE3o', value: 'access' },
    { label: 'Sem acesso', value: 'noAccess' }
  ];

  changeAccess() {
    const newOptions = [...this.options].map(opt => {
      if (opt.value === this.employee) {
        return {
          value: opt.value,
          label: opt.label,
          ...this.typeAccessMap[this.typeAccess]
        };
      }
      return opt;
    });

    this.options = newOptions;
    this.employee = undefined;
    this.typeAccess = undefined;
  }
}
`),og()()(),Il(21,"po-tab",10)(22,"div")(23,"label",6),Qx(24,"sample-po-multiselect-template/sample-po-multiselect-template.component.css"),og(),Il(25,"pre",11),Qx(26,`.containerFlex {
  display: flex;
  align-items: center;
}

.containerFlexTag {
  display: flex;
  gap: 2px;
  flex-direction: column;
}

.containerButton {
  display: flex;
  align-items: flex-end;
  padding: 8px;
}
`),og()()()()(),Il(27,"div",12),zl(28,"sample-po-multiselect-template"),og(),zl(29,"hr")),a&2&&(Lp(5),Ux("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,rt,i.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,Fe],encapsulation:2})}return l})();var se=(()=>{class l{http=f(nb);getFilteredData({value:s}){let a={filter:s};return this.http.get("https://po-sample-api.onrender.com/v1/heroes?page=1&pageSize=10",{params:a}).pipe(W(i=>i.items))}getObjectsByValues(s){return this.http.get(`https://po-sample-api.onrender.com/v1/heroes/?value=${s.toString()}`).pipe(W(a=>a.items))}static \u0275fac=function(a){return new(a||l)};static \u0275prov=w({token:l,factory:l.\u0275fac,providedIn:"root"})}return l})();var Ne=(()=>{class l{samplePoMultiselectHeroesService=f(se);debounce=500;filterService;heroes;multiselect=["1495831666871","1405833068599"];columns=[{property:"value",label:"id"},{property:"label",label:"Name",type:"link",action:s=>{this.openLink(s);}}];constructor(){let s=this.samplePoMultiselectHeroesService;this.filterService=s;}changeOptions(s){this.heroes=[...s];}openLink(s){window.open(`http://google.com/search?q=${s}`,"_blank");}static \u0275fac=function(a){return new(a||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-multiselect-heroes"]],standalone:false,features:[we([se])],decls:4,vars:9,consts:[[1,"po-row"],["name","multiselect","p-label","Search a Hero",1,"po-md-6",3,"ngModelChange","p-change","ngModel","p-filter-service","p-debounce-time"],[1,"po-md-6"],[3,"p-columns","p-items","p-height","p-striped","p-hide-columns-manager","p-hide-table-search"]],template:function(a,i){a&1&&(Il(0,"div",0)(1,"po-multiselect",1),ww("ngModelChange",function(d){return eN(i.multiselect,d)||(i.multiselect=d),d}),ft("p-change",function(d){return i.changeOptions(d)}),og(),QA(),Il(2,"po-container",2),zl(3,"po-table",3),og()()),a&2&&(Lp(),Ew("ngModel",i.multiselect),nw("p-filter-service",i.filterService)("p-debounce-time",i.debounce),e0(),Lp(2),nw("p-columns",i.columns)("p-items",i.heroes)("p-height",220)("p-striped",true)("p-hide-columns-manager",true)("p-hide-table-search",false));},dependencies:[$9,mk,dc,Fw,E3],encapsulation:2,changeDetection:1})}return l})();var dt=l=>({"docs-sample-code-tabs":l}),We=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-multiselect-heroes-view"]],standalone:false,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Multiselect - Heroes - using API"),og(),Il(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-multiselect-heroes/sample-po-multiselect-heroes.component.html"),og(),Il(13,"pre",7),Qx(14,`<div class="po-row">
  <po-multiselect
    class="po-md-6"
    name="multiselect"
    [(ngModel)]="multiselect"
    p-label="Search a Hero"
    [p-filter-service]="filterService"
    [p-debounce-time]="debounce"
    (p-change)="changeOptions($event)"
  >
  </po-multiselect>

  <po-container class="po-md-6">
    <po-table
      [p-columns]="columns"
      [p-items]="heroes"
      [p-height]="220"
      [p-striped]="true"
      [p-hide-columns-manager]="true"
      [p-hide-table-search]="false"
    >
    </po-table>
  </po-container>
</div>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-multiselect-heroes/sample-po-multiselect-heroes.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { PoTableColumn, PoMultiselectFilter } from '@po-ui/ng-components';

import { SamplePoMultiselectHeroesService } from './sample-po-multiselect-heroes.service';

@Component({
  selector: 'sample-po-multiselect-heroes',
  templateUrl: './sample-po-multiselect-heroes.component.html',
  providers: [SamplePoMultiselectHeroesService],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoMultiselectHeroesComponent {
  samplePoMultiselectHeroesService = inject(SamplePoMultiselectHeroesService);

  debounce = 500;
  filterService: PoMultiselectFilter;
  heroes: Array<any>;
  multiselect: Array<string> = ['1495831666871', '1405833068599'];
  columns: Array<PoTableColumn> = [
    { property: 'value', label: 'id' },
    {
      property: 'label',
      label: 'Name',
      type: 'link',
      action: value => {
        this.openLink(value);
      }
    }
  ];

  constructor() {
    const samplePoMultiselectHeroesService = this.samplePoMultiselectHeroesService;

    this.filterService = samplePoMultiselectHeroesService;
  }

  changeOptions(event): void {
    this.heroes = [...event];
  }

  openLink(value) {
    window.open(\`http://google.com/search?q=\${value}\`, '_blank');
  }
}
`),og(),Il(21,"label",6),Qx(22,"sample-po-multiselect-heroes/sample-po-multiselect-heroes.service.ts"),og(),Il(23,"pre",9),Qx(24,`import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { PoMultiselectFilter, PoMultiselectOption } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class SamplePoMultiselectHeroesService implements PoMultiselectFilter {
  private http = inject(HttpClient);

  getFilteredData({ value }): Observable<Array<PoMultiselectOption>> {
    const params = { filter: value };

    return this.http
      .get(\`https://po-sample-api.onrender.com/v1/heroes?page=1&pageSize=10\`, { params })
      .pipe(map((response: { items: Array<PoMultiselectOption> }) => response.items));
  }

  getObjectsByValues(value: Array<string | number>): Observable<Array<PoMultiselectOption>> {
    return this.http
      .get(\`https://po-sample-api.onrender.com/v1/heroes/?value=\${value.toString()}\`)
      .pipe(map((response: { items: Array<PoMultiselectOption> }) => response.items));
  }
}
`),og()()()()(),Il(25,"div",10),zl(26,"sample-po-multiselect-heroes"),og(),zl(27,"hr")),a&2&&(Lp(5),Ux("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,dt,i.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,Ne],encapsulation:2})}return l})();var ze=(()=>{class l{company;fieldLabel="razaoSocial";fieldValue="cnpj";options=[{codigo:"1",nomeFantasia:"TOTVS SA",razaoSocial:"TOTVS LTDA",label:"TOTVS COMPANY",cnpj:"01.234.567/0000-01",value:"100",id:"10",email:"totvscompany@sample.com",data:"10/03/2015",origem:"S\xE3o Paulo"},{codigo:"2",nomeFantasia:"INSTITUTO TOTVS DE ENSINO SA",razaoSocial:"INST TOTVS DE ENSINO LTDA",label:"INST TOTVS",cnpj:"02.345.678/0000-02",value:"200",id:"20",email:"insttotvs@sample.com",data:"10/10/2020",origem:"Joinville"},{codigo:"3",nomeFantasia:"TOTVS ENTERPRISE SA",razaoSocial:"TOTVS ENTERPRISE LTDA ",label:"ENT TOTVS",cnpj:"03.456.789/0000-03",value:"300",id:"30",email:"enttotvs@sample.com",data:"10/01/2022",origem:"Curitiba"}];optionsSelect=[{label:"codigo",value:"codigo"},{label:"nomeFantasia",value:"nomeFantasia"},{label:"razaoSocial",value:"razaoSocial"},{label:"label",value:"label"},{label:"cnpj",value:"cnpj"},{label:"value",value:"value"},{label:"id",value:"id"},{label:"email",value:"email"},{label:"data",value:"data"},{label:"origem",value:"origem"}];onChange(s){this.company=void 0;}static \u0275fac=function(a){return new(a||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-multiselect-any-array"]],standalone:false,decls:9,vars:9,consts:[[1,"po-row"],[1,"po-md-6"],["name","label","p-label","Select Field Label",3,"ngModelChange","p-change","p-options","ngModel"],["name","label","p-label","Select Field Value",3,"ngModelChange","p-change","p-options","ngModel"],["name","multiselect","p-label","Select your Company","p-listbox-control-position","top",1,"po-md-12",3,"ngModelChange","p-options","p-field-value","p-field-label","ngModel"],["p-label","Model",1,"po-md-12",3,"p-value"]],template:function(a,i){a&1&&(Il(0,"div",0)(1,"div",1)(2,"po-select",2),ww("ngModelChange",function(d){return eN(i.fieldLabel,d)||(i.fieldLabel=d),d}),ft("p-change",function(d){return i.onChange(d)}),og(),QA(),Il(3,"po-select",3),ww("ngModelChange",function(d){return eN(i.fieldValue,d)||(i.fieldValue=d),d}),ft("p-change",function(d){return i.onChange(d)}),og(),QA(),og(),Il(4,"div",1)(5,"div",0)(6,"po-multiselect",4),ww("ngModelChange",function(d){return eN(i.company,d)||(i.company=d),d}),og(),QA(),og(),Il(7,"div",0),zl(8,"po-info",5),og()()()),a&2&&(Lp(2),nw("p-options",i.optionsSelect),Ew("ngModel",i.fieldLabel),e0(),Lp(),nw("p-options",i.optionsSelect),Ew("ngModel",i.fieldValue),e0(),Lp(3),nw("p-options",i.options)("p-field-value",i.fieldValue)("p-field-label",i.fieldLabel),Ew("ngModel",i.company),e0(),Lp(2),nw("p-value",i.company));},dependencies:[$9,mk,Fw,qhe,Yhe],encapsulation:2,changeDetection:1})}return l})();var bt=l=>({"docs-sample-code-tabs":l}),Ie=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-multiselect-any-array-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Multiselect - Array Any"),og(),Il(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-multiselect-any-array/sample-po-multiselect-any-array.component.html"),og(),Il(13,"pre",7),Qx(14,`<div class="po-row">
  <div class="po-md-6">
    <po-select
      name="label"
      p-label="Select Field Label"
      [p-options]="optionsSelect"
      [(ngModel)]="fieldLabel"
      (p-change)="onChange($event)"
    >
    </po-select>
    <po-select
      name="label"
      p-label="Select Field Value"
      [p-options]="optionsSelect"
      [(ngModel)]="fieldValue"
      (p-change)="onChange($event)"
    >
    </po-select>
  </div>
  <div class="po-md-6">
    <div class="po-row">
      <po-multiselect
        class="po-md-12"
        name="multiselect"
        p-label="Select your Company"
        p-listbox-control-position="top"
        [p-options]="options"
        [p-field-value]="fieldValue"
        [p-field-label]="fieldLabel"
        [(ngModel)]="company"
      >
      </po-multiselect>
    </div>
    <div class="po-row">
      <po-info class="po-md-12" p-label="Model" [p-value]="company"> </po-info>
    </div>
  </div>
</div>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-multiselect-any-array/sample-po-multiselect-any-array.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-multiselect-any-array',
  templateUrl: './sample-po-multiselect-any-array.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoMultiselectAnyArrayComponent {
  company;
  fieldLabel = 'razaoSocial';
  fieldValue = 'cnpj';

  public readonly options: Array<any> = [
    {
      codigo: '1',
      nomeFantasia: 'TOTVS SA',
      razaoSocial: 'TOTVS LTDA',
      label: 'TOTVS COMPANY',
      cnpj: '01.234.567/0000-01',
      value: '100',
      id: '10',
      email: 'totvscompany@sample.com',
      data: '10/03/2015',
      origem: 'S\xE3o Paulo'
    },
    {
      codigo: '2',
      nomeFantasia: 'INSTITUTO TOTVS DE ENSINO SA',
      razaoSocial: 'INST TOTVS DE ENSINO LTDA',
      label: 'INST TOTVS',
      cnpj: '02.345.678/0000-02',
      value: '200',
      id: '20',
      email: 'insttotvs@sample.com',
      data: '10/10/2020',
      origem: 'Joinville'
    },
    {
      codigo: '3',
      nomeFantasia: 'TOTVS ENTERPRISE SA',
      razaoSocial: 'TOTVS ENTERPRISE LTDA ',
      label: 'ENT TOTVS',
      cnpj: '03.456.789/0000-03',
      value: '300',
      id: '30',
      email: 'enttotvs@sample.com',
      data: '10/01/2022',
      origem: 'Curitiba'
    }
  ];

  public readonly optionsSelect: Array<PoSelectOption> = [
    { label: 'codigo', value: 'codigo' },
    { label: 'nomeFantasia', value: 'nomeFantasia' },
    { label: 'razaoSocial', value: 'razaoSocial' },
    { label: 'label', value: 'label' },
    { label: 'cnpj', value: 'cnpj' },
    { label: 'value', value: 'value' },
    { label: 'id', value: 'id' },
    { label: 'email', value: 'email' },
    { label: 'data', value: 'data' },
    { label: 'origem', value: 'origem' }
  ];

  onChange(event) {
    this.company = undefined;
  }
}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-multiselect-any-array"),og(),zl(23,"hr")),a&2&&(Lp(5),Ux("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,bt,i.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,ze],encapsulation:2})}return l})();var He=(()=>{class l{static \u0275fac=function(a){return new(a||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-multiselect-doc"]],standalone:false,decls:1513,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoMultiselectFilterMode"],["pan","",1,"docs-api-property-type","PoMultiselectFilter"],["href","https://po-ui.io/guides/api"],["pan","",1,"docs-api-property-type","'top'"],["pan","",1,"docs-api-property-type","'bottom'"],["pan","",1,"docs-api-property-type","PoMultiselectLiterals"],["href","/documentation/po-i18n"],["pan","",1,"docs-api-property-type","Array<PoMultiselectOption"],["pan","",1,"docs-api-property-type","any>"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-helper"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","{","property:","string,","value:","string","}"],["pan","",1,"docs-api-property-type","Array<string"],["pan","",1,"docs-api-property-type","number>"]],template:function(a,i){a&1&&(Il(0,"div",0)(1,"p",1)(2,"code"),Qx(3,"import { PoFieldModule } from '@po-ui/ng-components';"),og()(),Il(4,"div",2)(5,"p"),Qx(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),og(),Il(7,"blockquote")(8,"p"),Qx(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),Il(10,"code"),Qx(11,"FormsModule"),og(),Qx(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Il(13,"code"),Qx(14,"ReactiveFormsModule"),og(),Qx(15,", ambos nativos do Angular."),og()()(),Il(16,"h3",3),Qx(17,"Componente"),og(),Il(18,"h4",4)(19,"code",5),Qx(20,"PoMultiselectComponent"),og()(),Il(21,"div",2)(22,"p"),Qx(23,`O po-multiselect \xE9 um componente de m\xFAltipla sele\xE7\xE3o.
Este componente \xE9 recomendado para dar ao usu\xE1rio a op\xE7\xE3o de selecionar v\xE1rios itens em uma lista.`),og(),Il(24,"p"),Qx(25,`Quando a lista possuir poucos itens, deve-se dar prefer\xEAncia para o uso do po-checkbox-group, por ser mais simples
e mais r\xE1pido para a sele\xE7\xE3o do usu\xE1rio.`),og(),Il(26,"p"),Qx(27,`Este componente tamb\xE9m n\xE3o deve ser utilizado em casos onde a sele\xE7\xE3o seja \xFAnica. Nesses casos, deve-se utilizar o
po-select, po-combo ou po-radio-group.`),og(),Il(28,"p"),Qx(29,"Com ele tamb\xE9m \xE9 poss\xEDvel definir uma lista \xE0 partir da requisi\xE7\xE3o de um servi\xE7o definido em "),Il(30,"code"),Qx(31,"p-filter-service"),og(),Qx(32,"."),og(),Il(33,"h4"),Qx(34,"Boas pr\xE1ticas"),og(),Il(35,"ul")(36,"li"),Qx(37,"Caso a lista apresente menos de 5 itens, considere utilizar outro componente;"),og(),Il(38,"li"),Qx(39,"N\xE3o utilize o multiselect caso o usu\xE1rio possa selecionar apenas uma op\xE7\xE3o. Para esse caso, opte por utilizar po-radio ou po-select;"),og()(),Il(40,"h4"),Qx(41,"Acessibilidade tratada no componente"),og(),Il(42,"p"),Qx(43,"Algumas diretrizes de acessibilidade j\xE1 s\xE3o tratadas no componente internamente, e n\xE3o podem ser alteradas pelo propriet\xE1rio do conte\xFAdo. S\xE3o elas:"),og(),Il(44,"ul")(45,"li"),Qx(46,"Quando em foco, o multiselect abre o listbox usando as teclas de Espa\xE7o ou Enter do teclado."),og(),Il(47,"li"),Qx(48,"Utilize as teclas Arrow Up [seta para cima] ou Arrow Down [seta para baixo] do teclado para navegar entre os itens do listbox."),og(),Il(49,"li"),Qx(50,"Utilize a tecla Esc do teclado para fechar o listbox."),og(),Il(51,"li"),Qx(52,"Quando um item estiver em foco, utilize as teclas Arrow Right [seta para direita] ou Arrow Left [seta para esquerda] do teclado para navegar entre eles."),og(),Il(53,"li"),Qx(54,"Quando em foco e havendo um item ou mais j\xE1 selecionado, utilize a tecla Arrow Down [seta para baixo] do teclado para abrir o listbox."),og()(),Il(55,"h4"),Qx(56,"Tokens customiz\xE1veis"),og(),Il(57,"p"),Qx(58,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),og(),Il(59,"blockquote")(60,"p"),Qx(61,"Para maiores informa\xE7\xF5es, acesse o guia "),Il(62,"a",6),Qx(63,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),Qx(64,"."),og()(),Il(65,"table")(66,"thead")(67,"tr")(68,"th"),Qx(69,"Propriedade"),og(),Il(70,"th"),Qx(71,"Descri\xE7\xE3o"),og(),Il(72,"th"),Qx(73,"Valor Padr\xE3o"),og()()(),Il(74,"tbody")(75,"tr")(76,"td")(77,"strong"),Qx(78,"Default Values"),og()(),zl(79,"td")(80,"td"),og(),Il(81,"tr")(82,"td")(83,"code"),Qx(84,"--font-family"),og()(),Il(85,"td"),Qx(86,"Fam\xEDlia tipogr\xE1fica usada"),og(),Il(87,"td")(88,"code"),Qx(89,"var(--font-family-theme)"),og()()(),Il(90,"tr")(91,"td")(92,"code"),Qx(93,"--font-size"),og()(),Il(94,"td"),Qx(95,"Tamanho da fonte"),og(),Il(96,"td")(97,"code"),Qx(98,"var(--font-size-default)"),og()()(),Il(99,"tr")(100,"td")(101,"code"),Qx(102,"--text-color-placeholder"),og(),Qx(103," \xA0"),og(),Il(104,"td"),Qx(105,"Cor do texto do placeholder"),og(),Il(106,"td")(107,"code"),Qx(108,"var(--color-action-disabled)"),og()()(),Il(109,"tr")(110,"td")(111,"code"),Qx(112,"--color"),og()(),Il(113,"td"),Qx(114,"Cor principal do multiselect"),og(),Il(115,"td")(116,"code"),Qx(117,"var(--color-neutral-dark-70)"),og()()(),Il(118,"tr")(119,"td")(120,"code"),Qx(121,"--background"),og()(),Il(122,"td"),Qx(123,"Cor de background"),og(),Il(124,"td")(125,"code"),Qx(126,"var(--color-neutral-light-05)"),og()()(),Il(127,"tr")(128,"td")(129,"code"),Qx(130,"--field-container-title-justify"),og()(),Il(131,"td"),Qx(132,"Alinhamento horizontal do t\xEDtulo ("),Il(133,"code"),Qx(134,"justify-content"),og(),Qx(135,")"),og(),Il(136,"td")(137,"code"),Qx(138,"space-between"),og()()(),Il(139,"tr")(140,"td")(141,"code"),Qx(142,"--field-container-title-flex"),og()(),Il(143,"td"),Qx(144,"Flex do t\xEDtulo ("),Il(145,"code"),Qx(146,"flex"),og(),Qx(147,")"),og(),Il(148,"td")(149,"code"),Qx(150,"1 auto"),og()()(),Il(151,"tr")(152,"td")(153,"strong"),Qx(154,"Hover"),og()(),zl(155,"td")(156,"td"),og(),Il(157,"tr")(158,"td")(159,"code"),Qx(160,"--color-hover"),og()(),Il(161,"td"),Qx(162,"Cor principal no estado hover"),og(),Il(163,"td")(164,"code"),Qx(165,"var(--color-action-hover)"),og()()(),Il(166,"tr")(167,"td")(168,"code"),Qx(169,"--background-hover"),og()(),Il(170,"td"),Qx(171,"Cor de background no estado hover"),og(),Il(172,"td")(173,"code"),Qx(174,"var(--color-brand-01-lighter)"),og()()(),Il(175,"tr")(176,"td")(177,"strong"),Qx(178,"Focused"),og()(),zl(179,"td")(180,"td"),og(),Il(181,"tr")(182,"td")(183,"code"),Qx(184,"--color-focused"),og()(),Il(185,"td"),Qx(186,"Cor principal no estado de focus"),og(),Il(187,"td")(188,"code"),Qx(189,"var(--color-action-default)"),og()()(),Il(190,"tr")(191,"td")(192,"code"),Qx(193,"--outline-color-focused"),og(),Qx(194," \xA0"),og(),Il(195,"td"),Qx(196,"Cor do outline do estado de focus"),og(),Il(197,"td")(198,"code"),Qx(199,"var(--color-action-focus)"),og()()(),Il(200,"tr")(201,"td")(202,"strong"),Qx(203,"Disabled"),og()(),zl(204,"td")(205,"td"),og(),Il(206,"tr")(207,"td")(208,"code"),Qx(209,"--color-disabled"),og()(),Il(210,"td"),Qx(211,"Cor principal no estado disabled"),og(),Il(212,"td")(213,"code"),Qx(214,"var(--color-action-disabled)"),og()()(),Il(215,"tr")(216,"td")(217,"code"),Qx(218,"--background-disabled"),og(),Qx(219," \xA0"),og(),Il(220,"td"),Qx(221,"Cor de background no estado disabled \xA0"),og(),Il(222,"td")(223,"code"),Qx(224,"var(--color-neutral-light-20)"),og()()(),Il(225,"tr")(226,"td")(227,"strong"),Qx(228,"Error"),og()(),zl(229,"td")(230,"td"),og(),Il(231,"tr")(232,"td")(233,"code"),Qx(234,"--color-error"),og()(),Il(235,"td"),Qx(236,"Cor principal no estado error"),og(),Il(237,"td")(238,"code"),Qx(239,"var(--color-feedback-negative-base)"),og()()()()()(),Il(240,"div",7)(241,"h4",8),Qx(242,"Seletor"),og(),Il(243,"pre",9),Qx(244,`<po-multiselect
    (p-additional-help)="EventEmitter"
    p-additional-help-tooltip="string"
    p-append-in-body="boolean"
    p-auto-focus="boolean"
    p-auto-height="boolean"
    (p-blur)="EventEmitter"
    (p-change)="EventEmitter"
    p-compact-label="boolean"
    p-debounce-time="number"
    p-disabled="boolean"
    p-error-limit="boolean"
    p-field-error-message="string"
    p-field-label="string"
    p-field-value="string"
    p-filter-mode="PoMultiselectFilterMode"
    p-filter-service="string | PoMultiselectFilter"
    p-help="string"
    p-hide-search="boolean"
    p-hide-select-all="boolean"
    (p-keydown)="EventEmitter"
    p-label="string"
    p-label-text-wrap="boolean"
    p-listbox-control-position="'top' | 'bottom'"
    p-literals="PoMultiselectLiterals"
    p-loading="boolean"
    name="string"
    p-optional="boolean"
    p-options="Array<PoMultiselectOption | any>"
    p-placeholder="string"
    p-placeholder-search="string"
    p-helper="PoHelperOptions | string"
    p-required="boolean"
    p-show-required="boolean"
    p-size="string"
    p-sort="boolean" >
</po-multiselect>
`),og()(),Il(245,"h4",10),Qx(246,"Propriedades"),og(),Il(247,"table",11)(248,"tr",12)(249,"th",13),Qx(250,"Nome"),og(),Il(251,"th",13),Qx(252,"Tipo"),og(),Il(253,"th",13),Qx(254,"Padr\xE3o"),og(),Il(255,"th",13),Qx(256,"Descri\xE7\xE3o"),og()(),Il(257,"tr",14)(258,"td",15)(259,"div",16)(260,"span",17),Qx(261," (p-additional-help)"),zl(262,"br"),og()(),Il(263,"div",18),Qx(264,"Deprecated"),og()(),Il(265,"td",19)(266,"code",20),Qx(267,"EventEmitter"),og()(),Il(268,"td",21),Qx(269,"-"),og(),Il(270,"td",22)(271,"em")(272,"strong"),Qx(273,"(opcional)"),og()(),Il(274,"p"),Qx(275,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),og(),Il(276,"blockquote")(277,"p"),Qx(278,"Essa propriedade est\xE1 "),Il(279,"strong"),Qx(280,"depreciada"),og(),Qx(281," e ser\xE1 removida na vers\xE3o "),Il(282,"code"),Qx(283,"23.x.x"),og(),Qx(284,". Recomendamos utilizar a propriedade "),Il(285,"code"),Qx(286,"p-helper"),og(),Qx(287," que oferece mais recursos e flexibilidade."),og()()()(),Il(288,"tr",14)(289,"td",15)(290,"div",23)(291,"span",24),Qx(292," p-additional-help-tooltip"),zl(293,"br"),og()(),Il(294,"div",18),Qx(295,"Deprecated"),og()(),Il(296,"td",19)(297,"code",25),Qx(298,"string"),og()(),Il(299,"td",21),Qx(300,"-"),og(),Il(301,"td",22)(302,"em")(303,"strong"),Qx(304,"(opcional)"),og()(),Il(305,"p"),Qx(306,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),Il(307,"code"),Qx(308,"po-helper"),og(),Qx(309,`.
`),Il(310,"strong"),Qx(311,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),og()(),Il(312,"blockquote")(313,"p"),Qx(314,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),og()(),Il(315,"blockquote")(316,"p"),Qx(317,"Essa propriedade est\xE1 "),Il(318,"strong"),Qx(319,"depreciada"),og(),Qx(320," e ser\xE1 removida na vers\xE3o "),Il(321,"code"),Qx(322,"23.x.x"),og(),Qx(323,". Recomendamos utilizar a propriedade "),Il(324,"code"),Qx(325,"p-helper"),og(),Qx(326," que oferece mais recursos e flexibilidade."),og()()()(),Il(327,"tr",14)(328,"td",15)(329,"div",23)(330,"span",24),Qx(331," p-append-in-body"),zl(332,"br"),og()()(),Il(333,"td",19)(334,"code",26),Qx(335,"boolean"),og()(),Il(336,"td",21)(337,"p")(338,"code"),Qx(339,"false"),og()()(),Il(340,"td",22)(341,"em")(342,"strong"),Qx(343,"(opcional)"),og()(),Il(344,"p"),Qx(345,"Define que o "),Il(346,"code"),Qx(347,"listbox"),og(),Qx(348," e/ou popover ("),Il(349,"code"),Qx(350,"p-helper"),og(),Qx(351," e/ou "),Il(352,"code"),Qx(353,"p-error-limit"),og(),Qx(354,`) ser\xE3o inclu\xEDdos no body da
p\xE1gina e n\xE3o dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou
overflow escondido, garantindo o posicionamento correto de ambos pr\xF3ximo ao elemento.`),og(),Il(355,"blockquote")(356,"p"),Qx(357,"Quando utilizado com "),Il(358,"code"),Qx(359,"p-helper"),og(),Qx(360,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),og()()()(),Il(361,"tr",14)(362,"td",15)(363,"div",23)(364,"span",24),Qx(365," p-auto-focus"),zl(366,"br"),og()()(),Il(367,"td",19)(368,"code",26),Qx(369,"boolean"),og()(),Il(370,"td",21)(371,"p")(372,"code"),Qx(373,"false"),og()()(),Il(374,"td",22)(375,"em")(376,"strong"),Qx(377,"(opcional)"),og()(),Il(378,"p"),Qx(379,"Aplica foco no elemento ao ser iniciado."),og(),Il(380,"blockquote")(381,"p"),Qx(382,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),og()()()(),Il(383,"tr",14)(384,"td",15)(385,"div",23)(386,"span",24),Qx(387," p-auto-height"),zl(388,"br"),og()()(),Il(389,"td",19)(390,"code",26),Qx(391,"boolean"),og()(),Il(392,"td",21)(393,"p")(394,"code"),Qx(395,"false"),og()()(),Il(396,"td",22)(397,"em")(398,"strong"),Qx(399,"(opcional)"),og()(),Il(400,"p"),Qx(401,`Define que a altura do componente ser\xE1 auto ajust\xE1vel, possuindo uma altura minima por\xE9m a altura m\xE1xima ser\xE1 de acordo
com o n\xFAmero de itens selecionados e a extens\xE3o dos mesmos, mantendo-os sempre vis\xEDveis.`),og(),Il(402,"blockquote")(403,"p"),Qx(404,"O valor padr\xE3o ser\xE1 "),Il(405,"code"),Qx(406,"true"),og(),Qx(407," quando houver servi\xE7o ("),Il(408,"code"),Qx(409,"p-filter-service"),og(),Qx(410,")."),og()()()(),Il(411,"tr",14)(412,"td",15)(413,"div",16)(414,"span",17),Qx(415," (p-blur)"),zl(416,"br"),og()()(),Il(417,"td",19)(418,"code",20),Qx(419,"EventEmitter"),og()(),Il(420,"td",21),Qx(421,"-"),og(),Il(422,"td",22)(423,"em")(424,"strong"),Qx(425,"(opcional)"),og()(),Il(426,"p"),Qx(427,"Evento disparado ao sair do campo."),og()()(),Il(428,"tr",14)(429,"td",15)(430,"div",16)(431,"span",17),Qx(432," (p-change)"),zl(433,"br"),og()()(),Il(434,"td",19)(435,"code",20),Qx(436,"EventEmitter"),og()(),Il(437,"td",21),Qx(438,"-"),og(),Il(439,"td",22)(440,"em")(441,"strong"),Qx(442,"(opcional)"),og()(),Il(443,"p"),Qx(444,"Pode ser informada uma fun\xE7\xE3o que ser\xE1 disparada quando houver altera\xE7\xF5es no ngModel."),og()()(),Il(445,"tr",14)(446,"td",15)(447,"div",23)(448,"span",24),Qx(449," p-compact-label"),zl(450,"br"),og()()(),Il(451,"td",19)(452,"code",26),Qx(453,"boolean"),og()(),Il(454,"td",21)(455,"p")(456,"code"),Qx(457,"false"),og()()(),Il(458,"td",22)(459,"em")(460,"strong"),Qx(461,"(opcional)"),og()(),Il(462,"p"),Qx(463,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),og(),Il(464,"p"),Qx(465,"Quando habilitado ("),Il(466,"code"),Qx(467,"true"),og(),Qx(468,"), o modo compacto afeta o conjunto composto por:"),og(),Il(469,"ul")(470,"li")(471,"code"),Qx(472,"po-label"),og()(),Il(473,"li")(474,"code"),Qx(475,"p-requirement (showRequired)"),og()(),Il(476,"li")(477,"code"),Qx(478,"po-helper"),og()()(),Il(479,"p"),Qx(480,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),og(),Il(481,"p"),Qx(482,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),og(),Il(483,"ul")(484,"li")(485,"code"),Qx(486,"--field-container-title-justify"),og()(),Il(487,"li")(488,"code"),Qx(489,"--field-container-title-flex"),og()()(),Il(490,"p"),Qx(491,"Exemplo:"),og(),Il(492,"pre")(493,"code"),Qx(494,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),og()(),Il(495,"p"),Qx(496,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),og()()(),Il(497,"tr",14)(498,"td",15)(499,"div",23)(500,"span",24),Qx(501," p-debounce-time"),zl(502,"br"),og()()(),Il(503,"td",19)(504,"code",27),Qx(505,"number"),og()(),Il(506,"td",21)(507,"p")(508,"code"),Qx(509,"400"),og()()(),Il(510,"td",22)(511,"em")(512,"strong"),Qx(513,"(opcional)"),og()(),Il(514,"p"),Qx(515,"Esta propriedade define em quanto tempo (em milissegundos), aguarda para acionar o evento de filtro ap\xF3s cada pressionamento de tecla."),og(),Il(516,"blockquote")(517,"p"),Qx(518,"Ser\xE1 utilizada apenas quando houver servi\xE7o ("),Il(519,"code"),Qx(520,"p-filter-service"),og(),Qx(521,") e somente ser\xE1 aceito valor maior do que "),Il(522,"em"),Qx(523,"zero"),og(),Qx(524,"."),og()()()(),Il(525,"tr",14)(526,"td",15)(527,"div",23)(528,"span",24),Qx(529," p-disabled"),zl(530,"br"),og()()(),Il(531,"td",19)(532,"code",26),Qx(533,"boolean"),og()(),Il(534,"td",21)(535,"p")(536,"code"),Qx(537,"false"),og()()(),Il(538,"td",22)(539,"em")(540,"strong"),Qx(541,"(opcional)"),og()(),Il(542,"p"),Qx(543,"Indica que o campo ser\xE1 desabilitado."),og()()(),Il(544,"tr",14)(545,"td",15)(546,"div",23)(547,"span",24),Qx(548," p-error-limit"),zl(549,"br"),og()()(),Il(550,"td",19)(551,"code",26),Qx(552,"boolean"),og()(),Il(553,"td",21)(554,"p")(555,"code"),Qx(556,"false"),og()()(),Il(557,"td",22)(558,"em")(559,"strong"),Qx(560,"(opcional)"),og()(),Il(561,"p"),Qx(562,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),og(),Il(563,"blockquote")(564,"p"),Qx(565,"Caso essa propriedade seja definida como "),Il(566,"code"),Qx(567,"true"),og(),Qx(568,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),og()()()(),Il(569,"tr",14)(570,"td",15)(571,"div",23)(572,"span",24),Qx(573," p-field-error-message"),zl(574,"br"),og()()(),Il(575,"td",19)(576,"code",25),Qx(577,"string"),og()(),Il(578,"td",21),Qx(579,"-"),og(),Il(580,"td",22)(581,"em")(582,"strong"),Qx(583,"(opcional)"),og()(),Il(584,"p"),Qx(585,"Exibe a mensagem setada se o campo estiver vazio e for requerido."),og(),Il(586,"blockquote")(587,"p"),Qx(588,"Necess\xE1rio que a propriedade "),Il(589,"code"),Qx(590,"p-required"),og(),Qx(591," esteja habilitada."),og()()()(),Il(592,"tr",14)(593,"td",15)(594,"div",23)(595,"span",24),Qx(596," p-field-label"),zl(597,"br"),og()()(),Il(598,"td",19)(599,"code",25),Qx(600,"string"),og()(),Il(601,"td",21)(602,"p")(603,"code"),Qx(604,"label"),og()()(),Il(605,"td",22)(606,"em")(607,"strong"),Qx(608,"(opcional)"),og()(),Il(609,"p"),Qx(610,`Deve ser informado o nome da propriedade do objeto que ser\xE1 utilizado para a convers\xE3o dos itens apresentados na lista do componente
(`),Il(611,"code"),Qx(612,"p-options"),og(),Qx(613,"), esta propriedade ser\xE1 respons\xE1vel pelo texto de apresenta\xE7\xE3o de cada item da lista."),og(),Il(614,"p"),Qx(615,`Necess\xE1rio quando informar o servi\xE7o como URL e o mesmo n\xE3o estiver retornando uma lista de objetos no padr\xE3o da interface
`),Il(616,"code"),Qx(617,"PoMultiSelectOption"),og(),Qx(618,"."),og()()(),Il(619,"tr",14)(620,"td",15)(621,"div",23)(622,"span",24),Qx(623," p-field-value"),zl(624,"br"),og()()(),Il(625,"td",19)(626,"code",25),Qx(627,"string"),og()(),Il(628,"td",21)(629,"p")(630,"code"),Qx(631,"value"),og()()(),Il(632,"td",22)(633,"em")(634,"strong"),Qx(635,"(opcional)"),og()(),Il(636,"p"),Qx(637,`Deve ser informado o nome da propriedade do objeto que ser\xE1 utilizado para a convers\xE3o dos itens apresentados na lista do componente
(`),Il(638,"code"),Qx(639,"p-options"),og(),Qx(640,"), esta propriedade ser\xE1 respons\xE1vel pelo valor de cada item da lista."),og(),Il(641,"p"),Qx(642,`Necess\xE1rio quando informar o servi\xE7o como URL e o mesmo n\xE3o estiver retornando uma lista de objetos no padr\xE3o da interface
`),Il(643,"code"),Qx(644,"PoMultiSelectOption"),og(),Qx(645,"."),og()()(),Il(646,"tr",14)(647,"td",15)(648,"div",23)(649,"span",24),Qx(650," p-filter-mode"),zl(651,"br"),og()()(),Il(652,"td",19)(653,"code",28),Qx(654,"PoMultiselectFilterMode"),og()(),Il(655,"td",21)(656,"p")(657,"code"),Qx(658,"startsWith"),og()()(),Il(659,"td",22)(660,"em")(661,"strong"),Qx(662,"(opcional)"),og()(),Il(663,"p"),Qx(664,`Define o modo de pesquisa utilizado no campo de busca, quando habilitado.
Valores definidos no enum: PoMultiselectFilterMode`),og()()(),Il(665,"tr",14)(666,"td",15)(667,"div",23)(668,"span",24),Qx(669," p-filter-service"),zl(670,"br"),og()()(),Il(671,"td",19)(672,"code",25),Qx(673,"string "),og(),Il(674,"code",29),Qx(675," PoMultiselectFilter"),og()(),Il(676,"td",21),Qx(677,"-"),og(),Il(678,"td",22)(679,"em")(680,"strong"),Qx(681,"(opcional)"),og()(),Il(682,"p"),Qx(683,"Nesta propriedade pode ser informada a URL do servi\xE7o em que ser\xE1 realizado o filtro para carregamento da lista de itens no componente."),og(),Il(684,"p"),Qx(685,"Tamb\xE9m existe a possibilidade de informar um servi\xE7o implementando a interface "),Il(686,"code"),Qx(687,"PoMultiselectFilter"),og(),Qx(688,"."),og(),Il(689,"p"),Qx(690,"Caso utilizado uma URL, o servi\xE7o deve ser retornado no padr\xE3o "),Il(691,"a",30),Qx(692,"API PO UI"),og(),Qx(693," e utilizar as propriedades "),Il(694,"code"),Qx(695,"p-field-label"),og(),Qx(696," e "),Il(697,"code"),Qx(698,"p-field-value"),og(),Qx(699," para a constru\xE7\xE3o da lista de itens."),og(),Il(700,"p"),Qx(701,"Quando utilizada uma URL de servi\xE7o, ent\xE3o ser\xE1 concatenada nesta URL o valor que deseja-se filtrar da seguinte forma:"),og(),Il(702,"pre")(703,"code"),Qx(704,`// caso filtrar por "Peter"
https://localhost:8080/api/heroes?filter=Peter
`),og()(),Il(705,"p"),Qx(706,"E caso iniciar o campo com valor, os itens ser\xE3o buscados da seguinte forma:"),og(),Il(707,"pre")(708,"code"),Qx(709,`// caso o valor do campo for [1234, 5678];
 https://localhost:8080/api/heroes?value=1234,5678

//O *value* \xE9 referente ao \`fieldValue\`.
`),og()()()(),Il(710,"tr",14)(711,"td",15)(712,"div",23)(713,"span",24),Qx(714," p-help"),zl(715,"br"),og()()(),Il(716,"td",19)(717,"code",25),Qx(718,"string"),og()(),Il(719,"td",21),Qx(720,"-"),og(),Il(721,"td",22)(722,"em")(723,"strong"),Qx(724,"(opcional)"),og()(),Il(725,"p"),Qx(726,"Texto de apoio para o campo."),og()()(),Il(727,"tr",14)(728,"td",15)(729,"div",23)(730,"span",24),Qx(731," p-hide-search"),zl(732,"br"),og()()(),Il(733,"td",19)(734,"code",26),Qx(735,"boolean"),og()(),Il(736,"td",21)(737,"p")(738,"code"),Qx(739,"false"),og()()(),Il(740,"td",22)(741,"em")(742,"strong"),Qx(743,"(opcional)"),og()(),Il(744,"p"),Qx(745,"Esconde o campo de pesquisa existente dentro do dropdown do po-multiselect."),og()()(),Il(746,"tr",14)(747,"td",15)(748,"div",23)(749,"span",24),Qx(750," p-hide-select-all"),zl(751,"br"),og()()(),Il(752,"td",19)(753,"code",26),Qx(754,"boolean"),og()(),Il(755,"td",21)(756,"p")(757,"code"),Qx(758,"false"),og()()(),Il(759,"td",22)(760,"em")(761,"strong"),Qx(762,"(opcional)"),og()(),Il(763,"p"),Qx(764,'Indica se o campo "Selecionar todos" ser\xE1 escondido.'),og()()(),Il(765,"tr",14)(766,"td",15)(767,"div",16)(768,"span",17),Qx(769," (p-keydown)"),zl(770,"br"),og()()(),Il(771,"td",19)(772,"code",20),Qx(773,"EventEmitter"),og()(),Il(774,"td",21),Qx(775,"-"),og(),Il(776,"td",22)(777,"em")(778,"strong"),Qx(779,"(opcional)"),og()(),Il(780,"p"),Qx(781,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Il(782,"code"),Qx(783,"KeyboardEvent"),og(),Qx(784," com informa\xE7\xF5es sobre a tecla."),og()()(),Il(785,"tr",14)(786,"td",15)(787,"div",23)(788,"span",24),Qx(789," p-label"),zl(790,"br"),og()()(),Il(791,"td",19)(792,"code",25),Qx(793,"string"),og()(),Il(794,"td",21),Qx(795,"-"),og(),Il(796,"td",22)(797,"em")(798,"strong"),Qx(799,"(opcional)"),og()(),Il(800,"p"),Qx(801,"Label no componente."),og()()(),Il(802,"tr",14)(803,"td",15)(804,"div",23)(805,"span",24),Qx(806," p-label-text-wrap"),zl(807,"br"),og()()(),Il(808,"td",19)(809,"code",26),Qx(810,"boolean"),og()(),Il(811,"td",21)(812,"p")(813,"code"),Qx(814,"false"),og()()(),Il(815,"td",22)(816,"em")(817,"strong"),Qx(818,"(opcional)"),og()(),Il(819,"p"),Qx(820,"Habilita a quebra autom\xE1tica do texto da propriedade "),Il(821,"code"),Qx(822,"p-label"),og(),Qx(823,". Quando "),Il(824,"code"),Qx(825,"p-label-text-wrap"),og(),Qx(826,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),og()()(),Il(827,"tr",14)(828,"td",15)(829,"div",23)(830,"span",24),Qx(831," p-listbox-control-position"),zl(832,"br"),og()()(),Il(833,"td",19)(834,"code",31),Qx(835,"'top' "),og(),Il(836,"code",32),Qx(837," 'bottom'"),og()(),Il(838,"td",21)(839,"p")(840,"code"),Qx(841,"bottom"),og()()(),Il(842,"td",22)(843,"em")(844,"strong"),Qx(845,"(opcional)"),og()(),Il(846,"p"),Qx(847,"Define a dire\xE7\xE3o preferida para exibi\xE7\xE3o do "),Il(848,"code"),Qx(849,"listbox"),og(),Qx(850," em rela\xE7\xE3o ao campo ("),Il(851,"code"),Qx(852,"top"),og(),Qx(853," ou "),Il(854,"code"),Qx(855,"bottom"),og(),Qx(856,`).
\xDAtil em casos onde o posicionamento autom\xE1tico n\xE3o se comporta como esperado, como quando o componente est\xE1 pr\xF3ximo
ao final do formul\xE1rio ou do container vis\xEDvel. Na maioria dos casos, essa dire\xE7\xE3o ser\xE1 respeitada; no entanto,
pode ser ajustada automaticamente conforme o espa\xE7o dispon\xEDvel na tela.`),og()()(),Il(857,"tr",14)(858,"td",15)(859,"div",23)(860,"span",24),Qx(861," p-literals"),zl(862,"br"),og()()(),Il(863,"td",19)(864,"code",33),Qx(865,"PoMultiselectLiterals"),og()(),Il(866,"td",21),Qx(867,"-"),og(),Il(868,"td",22)(869,"em")(870,"strong"),Qx(871,"(opcional)"),og()(),Il(872,"p"),Qx(873,"Objeto com as literais usadas no "),Il(874,"code"),Qx(875,"po-multiselect"),og(),Qx(876,"."),og(),Il(877,"p"),Qx(878,"Existem duas maneiras de customizar o componente, passando um objeto com todas as literais dispon\xEDveis:"),og(),Il(879,"pre")(880,"code"),Qx(881,`const customLiterals: PoMultiselectLiterals = {
  noData: 'Nenhum dado encontrado',
  placeholderSearch: 'Buscar',
  selectAll: 'Select all',
  selectItem: 'Select items'
};
`),og()(),Il(882,"p"),Qx(883,"Ou passando apenas as literais que deseja customizar:"),og(),Il(884,"pre")(885,"code"),Qx(886,`const customLiterals: PoMultiselectLiterals = {
  noData: 'Sem dados'
};
`),og()(),Il(887,"p"),Qx(888,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente:"),og(),Il(889,"pre")(890,"code"),Qx(891,`<po-multiselect
  [p-literals]="customLiterals">
</po-po-multiselect>
`),og()(),Il(892,"blockquote")(893,"p"),Qx(894,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),Il(895,"a",34)(896,"code"),Qx(897,"PoI18nService"),og()(),Qx(898," ou do browser."),og()()()(),Il(899,"tr",14)(900,"td",15)(901,"div",23)(902,"span",24),Qx(903," p-loading"),zl(904,"br"),og()()(),Il(905,"td",19)(906,"code",26),Qx(907,"boolean"),og()(),Il(908,"td",21)(909,"p")(910,"code"),Qx(911,"false"),og()()(),Il(912,"td",22)(913,"em")(914,"strong"),Qx(915,"(opcional)"),og()(),Il(916,"p"),Qx(917,"Exibe um \xEDcone de carregamento no lado direito do campo para sinalizar que uma opera\xE7\xE3o est\xE1 em andamento."),og()()(),Il(918,"tr",14)(919,"td",15)(920,"div",23)(921,"span",24),Qx(922," name"),zl(923,"br"),og()()(),Il(924,"td",19)(925,"code",25),Qx(926,"string"),og()(),Il(927,"td",21),Qx(928,"-"),og(),Il(929,"td",22)(930,"p"),Qx(931,"Nome do componente."),og()()(),Il(932,"tr",14)(933,"td",15)(934,"div",23)(935,"span",24),Qx(936," p-optional"),zl(937,"br"),og()()(),Il(938,"td",19)(939,"code",26),Qx(940,"boolean"),og()(),Il(941,"td",21)(942,"p")(943,"code"),Qx(944,"false"),og()()(),Il(945,"td",22)(946,"em")(947,"strong"),Qx(948,"(opcional)"),og()(),Il(949,"p"),Qx(950,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),og(),Il(951,"blockquote")(952,"p"),Qx(953,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),og()(),Il(954,"ul")(955,"li"),Qx(956,"O campo conter "),Il(957,"code"),Qx(958,"p-required"),og(),Qx(959,";"),og(),Il(960,"li"),Qx(961,"N\xE3o possuir "),Il(962,"code"),Qx(963,"p-help"),og(),Qx(964," e/ou "),Il(965,"code"),Qx(966,"p-label"),og(),Qx(967,"."),og()()()(),Il(968,"tr",14)(969,"td",15)(970,"div",23)(971,"span",24),Qx(972," p-options"),zl(973,"br"),og()()(),Il(974,"td",19)(975,"code",35),Qx(976,"Array<PoMultiselectOption "),og(),Il(977,"code",36),Qx(978," any>"),og()(),Il(979,"td",21),Qx(980,"-"),og(),Il(981,"td",22)(982,"p"),Qx(983,`Nesta propriedade deve ser definida uma lista de objetos que ser\xE1 exibida no multiselect.
Esta lista deve conter os valores e os labels que ser\xE3o apresentados na tela.`),og(),Il(984,"blockquote")(985,"p"),Qx(986,`Essa propriedade \xE9 imut\xE1vel, ou seja, sempre que quiser atualizar a lista de op\xE7\xF5es dispon\xEDveis
atualize a refer\xEAncia do objeto:`),og()(),Il(987,"pre")(988,"code"),Qx(989,`// atualiza a refer\xEAncia do objeto garantindo a atualiza\xE7\xE3o do template
this.options = [...this.options, { value: 'x', label: 'Nova op\xE7\xE3o' }];

// evite, pois n\xE3o atualiza a refer\xEAncia do objeto podendo gerar atrasos na atualiza\xE7\xE3o do template
this.options.push({ value: 'x', label: 'Nova op\xE7\xE3o' });
`),og()(),Il(990,"blockquote")(991,"p"),Qx(992,"A lista pode ser definida utilizando um array com o valor representando "),Il(993,"code"),Qx(994,"value"),og(),Qx(995," e "),Il(996,"code"),Qx(997,"label"),og(),Qx(998," das seguintes formas:"),og()(),Il(999,"pre")(1e3,"code"),Qx(1001,`<po-multiselect name="multiselect" p-label="PO Multiselect" [p-options]="[{value: 1, label: 'One'}, {value: 2, label: 'two'}]"> </po-multiselect>
`),og()(),Il(1002,"pre")(1003,"code"),Qx(1004,`<po-multiselect name="multiselect" p-label="PO Multiselect" [p-options]="[{name: 'Roger', age: 28}, {name: 'Anne', age: 35}]" p-field-label="name" p-field-value="age"> </po-multiselect>
`),og()(),Il(1005,"ul")(1006,"li"),Qx(1007,"Aconselha-se utilizar valores distintos no "),Il(1008,"code"),Qx(1009,"label"),og(),Qx(1010," e "),Il(1011,"code"),Qx(1012,"value"),og(),Qx(1013," dos itens."),og()()()(),Il(1014,"tr",14)(1015,"td",15)(1016,"div",23)(1017,"span",24),Qx(1018," p-placeholder"),zl(1019,"br"),og()()(),Il(1020,"td",19)(1021,"code",25),Qx(1022,"string"),og()(),Il(1023,"td",21),Qx(1024,"-"),og(),Il(1025,"td",22)(1026,"em")(1027,"strong"),Qx(1028,"(opcional)"),og()(),Il(1029,"p"),Qx(1030,"Mensagem apresentada enquanto o campo estiver vazio."),og()()(),Il(1031,"tr",14)(1032,"td",15)(1033,"div",23)(1034,"span",24),Qx(1035," p-placeholder-search"),zl(1036,"br"),og()()(),Il(1037,"td",19)(1038,"code",25),Qx(1039,"string"),og()(),Il(1040,"td",21)(1041,"p")(1042,"code"),Qx(1043,"Buscar"),og()()(),Il(1044,"td",22)(1045,"em")(1046,"strong"),Qx(1047,"(opcional)"),og()(),Il(1048,"p"),Qx(1049,"Placeholder do campo de pesquisa."),og(),Il(1050,"blockquote")(1051,"p"),Qx(1052,"Caso o mesmo n\xE3o seja informado, o valor padr\xE3o ser\xE1 traduzido com base no idioma do navegador (pt, es e en)."),og()()()(),Il(1053,"tr",14)(1054,"td",15)(1055,"div",23)(1056,"span",24),Qx(1057," p-helper"),zl(1058,"br"),og()()(),Il(1059,"td",19)(1060,"code",37),Qx(1061,"PoHelperOptions "),og(),Il(1062,"code",25),Qx(1063," string"),og()(),Il(1064,"td",21),Qx(1065,"-"),og(),Il(1066,"td",22)(1067,"em")(1068,"strong"),Qx(1069,"(opcional)"),og()(),Il(1070,"p"),Qx(1071,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label quando a propriedade "),Il(1072,"code"),Qx(1073,"p-label"),og(),Qx(1074," for definida, ou, ao lado do componente na aus\xEAncia da propriedade "),Il(1075,"code"),Qx(1076,"p-label"),og(),Qx(1077,"."),og(),Il(1078,"blockquote")(1079,"p"),Qx(1080,"Para mais informa\xE7\xF5es acesse: "),Il(1081,"a",38),Qx(1082,"https://po-ui.io/documentation/po-helper"),og(),Qx(1083,"."),og()(),Il(1084,"blockquote")(1085,"p"),Qx(1086,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),Il(1087,"code"),Qx(1088,"p-additional-help-tooltip"),og(),Qx(1089," e "),Il(1090,"code"),Qx(1091,"p-additional-help"),og(),Qx(1092,") ser\xE1 ignorado."),og()()()(),Il(1093,"tr",14)(1094,"td",15)(1095,"div",23)(1096,"span",24),Qx(1097," p-required"),zl(1098,"br"),og()()(),Il(1099,"td",19)(1100,"code",26),Qx(1101,"boolean"),og()(),Il(1102,"td",21)(1103,"p")(1104,"code"),Qx(1105,"false"),og()()(),Il(1106,"td",22)(1107,"em")(1108,"strong"),Qx(1109,"(opcional)"),og()(),Il(1110,"p"),Qx(1111,"Define que o campo ser\xE1 obrigat\xF3rio."),og(),Il(1112,"blockquote")(1113,"p"),Qx(1114,"Esta propriedade \xE9 desconsiderada quando o input est\xE1 desabilitado "),Il(1115,"code"),Qx(1116,"(p-disabled)"),og(),Qx(1117,"."),og()()()(),Il(1118,"tr",14)(1119,"td",15)(1120,"div",23)(1121,"span",24),Qx(1122," p-show-required"),zl(1123,"br"),og()()(),Il(1124,"td",19)(1125,"code",26),Qx(1126,"boolean"),og()(),Il(1127,"td",21),Qx(1128,"-"),og(),Il(1129,"td",22)(1130,"p"),Qx(1131,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),og(),Il(1132,"blockquote")(1133,"p"),Qx(1134,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),og()(),Il(1135,"ul")(1136,"li"),Qx(1137,"N\xE3o possuir "),Il(1138,"code"),Qx(1139,"p-help"),og(),Qx(1140," e/ou "),Il(1141,"code"),Qx(1142,"p-label"),og(),Qx(1143,"."),og()()()(),Il(1144,"tr",14)(1145,"td",15)(1146,"div",23)(1147,"span",24),Qx(1148," p-size"),zl(1149,"br"),og()()(),Il(1150,"td",19)(1151,"code",25),Qx(1152,"string"),og()(),Il(1153,"td",21)(1154,"p")(1155,"code"),Qx(1156,"medium"),og()()(),Il(1157,"td",22)(1158,"em")(1159,"strong"),Qx(1160,"(opcional)"),og()(),Il(1161,"p"),Qx(1162,"Define o tamanho do componente:"),og(),Il(1163,"ul")(1164,"li")(1165,"code"),Qx(1166,"small"),og(),Qx(1167,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),og(),Il(1168,"li")(1169,"code"),Qx(1170,"medium"),og(),Qx(1171,": altura do input como 44px."),og()(),Il(1172,"blockquote")(1173,"p"),Qx(1174,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Il(1175,"code"),Qx(1176,"medium"),og(),Qx(1177,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Il(1178,"a",39),Qx(1179,"po-theme"),og(),Qx(1180,"."),og()()()(),Il(1181,"tr",14)(1182,"td",15)(1183,"div",23)(1184,"span",24),Qx(1185," p-sort"),zl(1186,"br"),og()()(),Il(1187,"td",19)(1188,"code",26),Qx(1189,"boolean"),og()(),Il(1190,"td",21)(1191,"p")(1192,"code"),Qx(1193,"false"),og()()(),Il(1194,"td",22)(1195,"em")(1196,"strong"),Qx(1197,"(opcional)"),og()(),Il(1198,"p"),Qx(1199,`Indica que a lista definida na propriedade p-options ser\xE1 ordenada pelo label antes de ser apresentada no
dropdown.`),og()()()(),Il(1200,"h3",10),Qx(1201,"M\xE9todos"),og(),Il(1202,"table",40)(1203,"tr",14)(1204,"th",41)(1205,"div",23)(1206,"h4")(1207,"span",24),Qx(1208," focus "),og()()()()(),Il(1209,"tr",22)(1210,"td",22)(1211,"p"),Qx(1212,"Fun\xE7\xE3o que atribui foco ao componente."),og(),Il(1213,"p"),Qx(1214,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),og(),Il(1215,"pre")(1216,"code"),Qx(1217,`import { PoMultiselectComponent } from '@po-ui/ng-components';

...

@ViewChild(PoMultiselectComponent, { static: true }) multiselect: PoMultiselectComponent;

focusMultiselect() {
  this.multiselect.focus();
}
`),og()()()()(),zl(1218,"br"),Il(1219,"table",40)(1220,"tr",14)(1221,"th",41)(1222,"div",23)(1223,"h4")(1224,"span",24),Qx(1225," showAdditionalHelp "),og()()()()(),Il(1226,"tr",22)(1227,"td",22)(1228,"p"),Qx(1229,"M\xE9todo que exibe "),Il(1230,"code"),Qx(1231,"p-helper"),og(),Qx(1232," ou executa a a\xE7\xE3o definida em "),Il(1233,"code"),Qx(1234,"p-helper{eventOnClick}"),og(),Qx(1235," ou em "),Il(1236,"code"),Qx(1237,"p-additionalHelp"),og(),Qx(1238,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Il(1239,"code"),Qx(1240,"p-keydown"),og(),Qx(1241,"."),og(),Il(1242,"blockquote")(1243,"p"),Qx(1244,"Exibe ou oculta o conte\xFAdo do componente "),Il(1245,"code"),Qx(1246,"po-helper"),og(),Qx(1247," quando o componente estiver com foco."),og()(),Il(1248,"pre")(1249,"code"),Qx(1250,`// Exemplo com p-label e p-helper
<po-multiselect
 #multiselect
 ...
 p-label="Label do multiselect"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, multiselect)"
></po-multiselect>
`),og()(),Il(1251,"pre")(1252,"code"),Qx(1253,`...
onKeyDown(event: KeyboardEvent, inp: PoMultiselectComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),og()()()()(),zl(1254,"br"),Il(1255,"h3"),Qx(1256,"Interfaces"),og(),Il(1257,"h4",42)(1258,"code",5),Qx(1259,"PoMultiselectFilter"),og()(),Il(1260,"div",2)(1261,"p"),Qx(1262,"Interface para os servi\xE7os que ser\xE3o utilizados no po-multiselect."),og()(),Il(1263,"h4",10),Qx(1264,"M\xE9todos"),og(),Il(1265,"table",40)(1266,"tr",14)(1267,"th",41)(1268,"div",23)(1269,"h4")(1270,"span",24),Qx(1271," getFilteredData "),og()()()()(),Il(1272,"tr",22)(1273,"td",22)(1274,"p"),Qx(1275,`M\xE9todo que ser\xE1 chamado ao realizar uma busca no componente, deve retornar um Observable que cont\xE9m uma cole\xE7\xE3o de objetos que seguem
a interface `),Il(1276,"code"),Qx(1277,"PoMultiselectOption"),og(),Qx(1278,", ser\xE1 informado por parametro o campo e o valor a ser pesquisado."),og()()()(),Il(1279,"h5")(1280,"b"),Qx(1281,"Par\xE2metros"),og()(),Il(1282,"table",11)(1283,"tr",12)(1284,"th",13),Qx(1285,"Nome"),og(),Il(1286,"th",13),Qx(1287,"Tipo"),og(),Il(1288,"th",13),Qx(1289,"Descri\xE7\xE3o"),og()(),Il(1290,"tr",14)(1291,"td",15),Qx(1292," params"),og(),Il(1293,"td",19)(1294,"code",43),Qx(1295," { property: string, value: string } "),og()(),Il(1296,"td",22)(1297,"p"),Qx(1298,"Objeto contendo a propriedade e o valor respons\xE1vel por realizar o filtro."),og()()()(),zl(1299,"br"),Il(1300,"table",40)(1301,"tr",14)(1302,"th",41)(1303,"div",23)(1304,"h4")(1305,"span",24),Qx(1306," getObjectsByValues "),og()()()()(),Il(1307,"tr",22)(1308,"td",22)(1309,"p"),Qx(1310,`M\xE9todo que ser\xE1 chamado ao iniciar o componente com valor, deve retornar um Observable que cont\xE9m apenas os objetos filtrados que
seguem a interface `),Il(1311,"code"),Qx(1312,"PoMultiselectOption"),og(),Qx(1313,", ser\xE1 informado por par\xE2metro valor a ser pesquisado."),og()()()(),Il(1314,"h5")(1315,"b"),Qx(1316,"Par\xE2metros"),og()(),Il(1317,"table",11)(1318,"tr",12)(1319,"th",13),Qx(1320,"Nome"),og(),Il(1321,"th",13),Qx(1322,"Tipo"),og(),Il(1323,"th",13),Qx(1324,"Descri\xE7\xE3o"),og()(),Il(1325,"tr",14)(1326,"td",15),Qx(1327," values"),og(),Il(1328,"td",19)(1329,"code",44),Qx(1330," Array<string "),og(),Il(1331,"code",45),Qx(1332," number> "),og()(),Il(1333,"td",22)(1334,"p"),Qx(1335,"Array com os valores a serem buscados."),og()()()(),zl(1336,"br"),Il(1337,"h4",42)(1338,"code",5),Qx(1339,"PoMultiselectLiterals"),og()(),Il(1340,"div",2)(1341,"p"),Qx(1342,"Interface para defini\xE7\xE3o das literais usadas no "),Il(1343,"code"),Qx(1344,"po-multiselect"),og(),Qx(1345,"."),og()(),Il(1346,"h4",10),Qx(1347,"Propriedades"),og(),Il(1348,"table",11)(1349,"tr",12)(1350,"th",13),Qx(1351,"Nome"),og(),Il(1352,"th",13),Qx(1353,"Tipo"),og(),Il(1354,"th",13),Qx(1355,"Descri\xE7\xE3o"),og()(),Il(1356,"tr",14)(1357,"td",15)(1358,"div",23)(1359,"span",24),Qx(1360," noData"),zl(1361,"br"),og()()(),Il(1362,"td",19)(1363,"code",25),Qx(1364,"string"),og()(),Il(1365,"td",22)(1366,"em")(1367,"strong"),Qx(1368,"(opcional)"),og()(),Il(1369,"p"),Qx(1370,"Texto exibido quando n\xE3o houver dados encontrados na busca."),og()()(),Il(1371,"tr",14)(1372,"td",15)(1373,"div",23)(1374,"span",24),Qx(1375," placeholderSearch"),zl(1376,"br"),og()()(),Il(1377,"td",19)(1378,"code",25),Qx(1379,"string"),og()(),Il(1380,"td",22)(1381,"em")(1382,"strong"),Qx(1383,"(opcional)"),og()(),Il(1384,"p"),Qx(1385,"Texto do "),Il(1386,"em"),Qx(1387,"placeholder"),og(),Qx(1388," do campo de busca."),og()()(),Il(1389,"tr",14)(1390,"td",15)(1391,"div",23)(1392,"span",24),Qx(1393," selectAll"),zl(1394,"br"),og()()(),Il(1395,"td",19)(1396,"code",25),Qx(1397,"string"),og()(),Il(1398,"td",22)(1399,"em")(1400,"strong"),Qx(1401,"(opcional)"),og()(),Il(1402,"p"),Qx(1403,"Texto exibido no bot\xE3o de selecionar todos."),og()()(),Il(1404,"tr",14)(1405,"td",15)(1406,"div",23)(1407,"span",24),Qx(1408," selectItem"),zl(1409,"br"),og()()(),Il(1410,"td",19)(1411,"code",25),Qx(1412,"string"),og()(),Il(1413,"td",22)(1414,"em")(1415,"strong"),Qx(1416,"(opcional)"),og()(),Il(1417,"p"),Qx(1418,"Texto exibido na propriedade placeholder."),og()()()(),Il(1419,"h4",42)(1420,"code",5),Qx(1421,"PoMultiselectOption"),og()(),Il(1422,"div",2)(1423,"p"),Qx(1424,"Interface dos itens da cole\xE7\xE3o que ser\xE1 exibida no dropdown do po-multiselect."),og()(),Il(1425,"h4",10),Qx(1426,"Propriedades"),og(),Il(1427,"table",11)(1428,"tr",12)(1429,"th",13),Qx(1430,"Nome"),og(),Il(1431,"th",13),Qx(1432,"Tipo"),og(),Il(1433,"th",13),Qx(1434,"Descri\xE7\xE3o"),og()(),Il(1435,"tr",14)(1436,"td",15)(1437,"div",23)(1438,"span",24),Qx(1439," label"),zl(1440,"br"),og()()(),Il(1441,"td",19)(1442,"code",25),Qx(1443,"string"),og()(),Il(1444,"td",22)(1445,"p"),Qx(1446,"Label exibido nos itens da lista."),og()()(),Il(1447,"tr",14)(1448,"td",15)(1449,"div",23)(1450,"span",24),Qx(1451," value"),zl(1452,"br"),og()()(),Il(1453,"td",19)(1454,"code",25),Qx(1455,"string "),og(),Il(1456,"code",27),Qx(1457," number"),og()(),Il(1458,"td",22)(1459,"p"),Qx(1460,"Valor do objeto que ser\xE1 atribu\xEDdo ao model."),og()()()(),Il(1461,"h3"),Qx(1462,"Enums"),og(),Il(1463,"h4",4)(1464,"code",5),Qx(1465,"PoMultiselectFilterMode"),og()(),Il(1466,"div",2)(1467,"p"),Qx(1468,"Define o tipo de busca usado no po-multiselect."),og()(),Il(1469,"h4",10),Qx(1470,"Propriedades"),og(),Il(1471,"table",11)(1472,"tr",12)(1473,"th",13),Qx(1474,"Nome"),og(),Il(1475,"th",13),Qx(1476,"Descri\xE7\xE3o"),og()(),Il(1477,"tr",14)(1478,"td",15)(1479,"div",23)(1480,"span",24),Qx(1481," startsWith"),zl(1482,"br"),og()()(),Il(1483,"td",22)(1484,"p"),Qx(1485,"Verifica se o texto "),Il(1486,"em"),Qx(1487,"inicia"),og(),Qx(1488," com o valor pesquisado."),og()()(),Il(1489,"tr",14)(1490,"td",15)(1491,"div",23)(1492,"span",24),Qx(1493," contains"),zl(1494,"br"),og()()(),Il(1495,"td",22)(1496,"p"),Qx(1497,"Verifica se o texto "),Il(1498,"em"),Qx(1499,"cont\xE9m"),og(),Qx(1500," o valor pesquisado."),og()()(),Il(1501,"tr",14)(1502,"td",15)(1503,"div",23)(1504,"span",24),Qx(1505," endsWith"),zl(1506,"br"),og()()(),Il(1507,"td",22)(1508,"p"),Qx(1509,"Verifica se o texto "),Il(1510,"em"),Qx(1511,"finaliza"),og(),Qx(1512," com o valor pesquisado."),og()()()()());},dependencies:[Ka],encapsulation:2})}return l})();var je=(()=>{class l{route;router;sub;hidePoWebSample=true;samplesLength=7;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(s,a){this.route=s,this.router=a;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(s=>{let a=s.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(s){this.router.navigate([],{queryParams:{view:s},queryParamsHandling:"merge"}),this.activeTab=s;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(a){return new(a||l)(C(Xn),C(En))};static \u0275cmp=Un({type:l,selectors:[["ng-component"]],standalone:false,decls:12,vars:4,consts:[["p-title","Multiselect",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,i){a&1&&(Il(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return i.changeTab("doc")}),zl(3,"sample-po-multiselect-doc"),og(),Il(4,"po-tab",3),ft("p-click",function(){return i.changeTab("web")}),zl(5,"sample-po-multiselect-basic-view")(6,"sample-po-multiselect-labs-view")(7,"sample-po-multiselect-vacation-view")(8,"sample-po-multiselect-vacation-reactive-form-view")(9,"sample-po-multiselect-template-view")(10,"sample-po-multiselect-heroes-view")(11,"sample-po-multiselect-any-array-view"),og()()()),a&2&&(nw("p-actions",i.actions),Lp(2),nw("p-active",i.activeTab==="doc"),Lp(2),nw("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[cNe,qme,Yme,Ve,De,Le,qe,Be,We,Ie,He],encapsulation:2})}return l})();var St=[{path:"",component:je}],Re=(()=>{class l{static \u0275fac=function(a){return new(a||l)};static \u0275mod=fe({type:l});static \u0275inj=ue({imports:[uL.forChild(St),uL]})}return l})();var vn=(()=>{class l{static \u0275fac=function(a){return new(a||l)};static \u0275mod=fe({type:l});static \u0275inj=ue({imports:[sr,Re]})}return l})();export{vn as DocPoMultiselectModule};