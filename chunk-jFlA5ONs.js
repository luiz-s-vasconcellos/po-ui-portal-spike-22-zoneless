import {f as fe,u as ue$1,s as sr,a as uL,C,c3 as Xn,E as En,U as Un,b as f,cM as Z9,cN as lm,cP as uhe,J as zl,an as DO,aH as Ka,b8 as qme,b9 as Yme,H as Il,q as Qx,R as og,a1 as ft,A as Lp,ar as Ux,au as dg,T as nw,bs as uN,aX as G9,aF as $9,aY as z9,aG as mk,aZ as hk,b0 as Qt,b1 as mv,c4 as C3,b4 as F3,cp as Hhe,c8 as Dde,aJ as qhe,c9 as Yhe,aB as Dx,aM as ww,aN as QA,aO as Ew,aP as e0,cQ as Ik,cR as Ck,a3 as cNe,aD as Xy,aT as eN,aE as Qy,bd as Ax}from'./main-FCMDZGSJ.js';var me=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-decimal-basic"]],standalone:false,decls:1,vars:0,consts:[["name","decimal","p-label","PO Decimal"]],template:function(r,i){r&1&&zl(0,"po-decimal",0);},dependencies:[uhe],encapsulation:2,changeDetection:1})}return l})();var ve=l=>({"docs-sample-code-tabs":l}),de=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-decimal-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Decimal Basic"),og(),Il(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-decimal-basic/sample-po-decimal-basic.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-decimal name="decimal" p-label="PO Decimal"> </po-decimal>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-decimal-basic/sample-po-decimal-basic.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-decimal-basic',
  templateUrl: './sample-po-decimal-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDecimalBasicComponent {}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-decimal-basic"),og(),zl(23,"hr")),r&2&&(Lp(5),Ux("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,ve,i.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,me],encapsulation:2})}return l})();var se=(()=>{class l{helperText;decimal;decimalsLength;event;help;icon;label;locale;placeholder;properties;thousandMaxlength;errorPattern;max;min;size;localeOptions=[{value:"pt",label:"Portuguese"},{value:"en",label:"English"},{value:"ru",label:"Russian"},{value:"es",label:"Spanish"}];iconOptions=[{value:"an an-shopping-cart-simple",label:"an an-shopping-cart-simple"},{value:"an an-currency-dollar-simple",label:"an an-currency-dollar-simple"},{value:"fa fa-calculator",label:"fa fa-calculator"}];propertiesOptions=[{value:"clean",label:"Clean"},{value:"disabled",label:"Disabled"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"},{value:"compactLabel",label:"Compact Label"},{value:"loading",label:"Loading"},{value:"noAutocomplete",label:"No Autocomplete"},{value:"optional",label:"Optional"},{value:"readonly",label:"Read Only"},{value:"required",label:"Required"},{value:"requiredFieldErrorMessage",label:"Required Field Error Message"},{value:"showRequired",label:"Show Required"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];get maxDecimalsLength(){return 16-this.thousandMaxlength||15}get maxThousandMaxlength(){return 16-this.decimalsLength||13}ngOnInit(){this.restore();}changeEvent(d){this.event=d;}restore(){this.helperText="",this.decimal=void 0,this.decimalsLength=void 0,this.event="",this.help=void 0,this.icon=void 0,this.label=void 0,this.locale=void 0,this.placeholder="",this.thousandMaxlength=void 0,this.errorPattern=void 0,this.max=void 0,this.min=void 0,this.size="medium",this.properties=[];}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-decimal-labs"]],standalone:false,decls:23,vars:46,consts:[["f","ngForm"],["name","decimal",1,"po-md-12",3,"ngModelChange","p-blur","p-change","p-change-model","p-keydown","ngModel","p-helper","p-clean","p-decimals-length","p-disabled","p-help","p-icon","p-label","p-loading","p-locale","p-error-pattern","p-max","p-min","p-no-autocomplete","p-optional","p-placeholder","p-readonly","p-required","p-required-field-error-message","p-show-required","p-size","p-thousand-maxlength","p-label-text-wrap","p-compact-label","p-error-limit"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","errorPattern","p-clean","","p-label","Error Pattern",1,"po-md-6",3,"ngModelChange","ngModel"],["name","icon","p-clean","","p-label","Icon",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel","p-options"],["name","min","p-clean","","p-label","Min",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","max","p-clean","","p-label","Max",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","locale","p-clean","","p-label","Locale",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel","p-options"],["name","decimalsLength","p-clean","","p-help","M\xE1ximo 15","p-label","Decimals max length","p-min","0",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel","p-max"],["name","thousandMaxlength","p-clean","","p-help","M\xE1ximo 13","p-label","Thousand max length","p-min","0",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel","p-max"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(r,i){if(r&1){let p=Dx();Il(0,"po-decimal",1),ww("ngModelChange",function(a){return Xy(p),eN(i.decimal,a)||(i.decimal=a),Qy(a)}),ft("p-blur",function(){return i.changeEvent("p-blur")})("p-change",function(){return i.changeEvent("p-change")})("p-change-model",function(){return i.changeEvent("p-change-model")})("p-keydown",function(){return i.changeEvent("p-keydown")}),og(),QA(),zl(1,"po-divider"),Il(2,"div",2),zl(3,"po-info",3)(4,"po-info",4),og(),zl(5,"po-divider"),Il(6,"form",null,0)(8,"po-input",5),ww("ngModelChange",function(a){return Xy(p),eN(i.label,a)||(i.label=a),Qy(a)}),og(),QA(),Il(9,"po-input",6),ww("ngModelChange",function(a){return Xy(p),eN(i.help,a)||(i.help=a),Qy(a)}),og(),QA(),Il(10,"po-input",7),ww("ngModelChange",function(a){return Xy(p),eN(i.helperText,a)||(i.helperText=a),Qy(a)}),og(),QA(),Il(11,"po-input",8),ww("ngModelChange",function(a){return Xy(p),eN(i.placeholder,a)||(i.placeholder=a),Qy(a)}),og(),QA(),Il(12,"po-input",9),ww("ngModelChange",function(a){return Xy(p),eN(i.errorPattern,a)||(i.errorPattern=a),Qy(a)}),og(),QA(),Il(13,"po-select",10),ww("ngModelChange",function(a){return Xy(p),eN(i.icon,a)||(i.icon=a),Qy(a)}),og(),QA(),Il(14,"po-number",11),ww("ngModelChange",function(a){return Xy(p),eN(i.min,a)||(i.min=a),Qy(a)}),og(),QA(),Il(15,"po-number",12),ww("ngModelChange",function(a){return Xy(p),eN(i.max,a)||(i.max=a),Qy(a)}),og(),QA(),Il(16,"po-select",13),ww("ngModelChange",function(a){return Xy(p),eN(i.locale,a)||(i.locale=a),Qy(a)}),og(),QA(),Il(17,"po-number",14),ww("ngModelChange",function(a){return Xy(p),eN(i.decimalsLength,a)||(i.decimalsLength=a),Qy(a)}),og(),QA(),Il(18,"po-number",15),ww("ngModelChange",function(a){return Xy(p),eN(i.thousandMaxlength,a)||(i.thousandMaxlength=a),Qy(a)}),og(),QA(),Il(19,"po-checkbox-group",16),ww("ngModelChange",function(a){return Xy(p),eN(i.properties,a)||(i.properties=a),Qy(a)}),og(),QA(),Il(20,"po-radio-group",17),ww("ngModelChange",function(a){return Xy(p),eN(i.size,a)||(i.size=a),Qy(a)}),og(),QA(),Il(21,"div",2)(22,"po-button",18),ft("p-click",function(){return i.restore()}),og()()();}r&2&&(Ew("ngModel",i.decimal),nw("p-helper",i.helperText)("p-clean",i.properties.includes("clean"))("p-decimals-length",i.decimalsLength)("p-disabled",i.properties.includes("disabled"))("p-help",i.help)("p-icon",i.icon)("p-label",i.label)("p-loading",i.properties.includes("loading"))("p-locale",i.locale)("p-error-pattern",i.errorPattern)("p-max",i.max)("p-min",i.min)("p-no-autocomplete",i.properties==null?null:i.properties.includes("noAutocomplete"))("p-optional",i.properties.includes("optional"))("p-placeholder",i.placeholder)("p-readonly",i.properties.includes("readonly"))("p-required",i.properties.includes("required"))("p-required-field-error-message",i.properties.includes("requiredFieldErrorMessage"))("p-show-required",i.properties.includes("showRequired"))("p-size",i.size)("p-thousand-maxlength",i.thousandMaxlength)("p-label-text-wrap",i.properties==null?null:i.properties.includes("labelTextWrap"))("p-compact-label",i.properties==null?null:i.properties.includes("compactLabel"))("p-error-limit",i.properties==null?null:i.properties.includes("errorLimit")),e0(),Lp(3),nw("p-value",i.decimal),Lp(),nw("p-value",i.event),Lp(4),Ew("ngModel",i.label),e0(),Lp(),Ew("ngModel",i.help),e0(),Lp(),Ew("ngModel",i.helperText),e0(),Lp(),Ew("ngModel",i.placeholder),e0(),Lp(),Ew("ngModel",i.errorPattern),e0(),Lp(),Ew("ngModel",i.icon),nw("p-options",i.iconOptions),e0(),Lp(),Ew("ngModel",i.min),e0(),Lp(),Ew("ngModel",i.max),e0(),Lp(),Ew("ngModel",i.locale),nw("p-options",i.localeOptions),e0(),Lp(),Ew("ngModel",i.decimalsLength),nw("p-max",i.maxDecimalsLength),e0(),Lp(),Ew("ngModel",i.thousandMaxlength),nw("p-max",i.maxThousandMaxlength),e0(),Lp(),Ew("ngModel",i.properties),nw("p-options",i.propertiesOptions),e0(),Lp(),Ew("ngModel",i.size),nw("p-options",i.sizeOptions),e0());},dependencies:[G9,$9,z9,mk,hk,Qt,mv,C3,uhe,F3,Hhe,Dde,qhe,Yhe],encapsulation:2,changeDetection:1})}return l})();var we=l=>({"docs-sample-code-tabs":l}),ce=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-decimal-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Decimal Labs"),og(),Il(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-decimal-labs/sample-po-decimal-labs.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-decimal
  class="po-md-12"
  name="decimal"
  [(ngModel)]="decimal"
  [p-helper]="helperText"
  [p-clean]="properties.includes('clean')"
  [p-decimals-length]="decimalsLength"
  [p-disabled]="properties.includes('disabled')"
  [p-help]="help"
  [p-icon]="icon"
  [p-label]="label"
  [p-loading]="properties.includes('loading')"
  [p-locale]="locale"
  [p-error-pattern]="errorPattern"
  [p-max]="max"
  [p-min]="min"
  [p-no-autocomplete]="$safeNavigationMigration(properties?.includes('noAutocomplete'))"
  [p-optional]="properties.includes('optional')"
  [p-placeholder]="placeholder"
  [p-readonly]="properties.includes('readonly')"
  [p-required]="properties.includes('required')"
  [p-required-field-error-message]="properties.includes('requiredFieldErrorMessage')"
  [p-show-required]="properties.includes('showRequired')"
  [p-size]="size"
  [p-thousand-maxlength]="thousandMaxlength"
  [p-label-text-wrap]="$safeNavigationMigration(properties?.includes('labelTextWrap'))"
  [p-compact-label]="$safeNavigationMigration(properties?.includes('compactLabel'))"
  (p-blur)="changeEvent('p-blur')"
  (p-change)="changeEvent('p-change')"
  (p-change-model)="changeEvent('p-change-model')"
  (p-keydown)="changeEvent('p-keydown')"
  [p-error-limit]="$safeNavigationMigration(properties?.includes('errorLimit'))"
>
</po-decimal>

<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="decimal"> </po-info>
  <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
</div>

<po-divider />

<form #f="ngForm">
  <po-input class="po-md-6" name="label" [(ngModel)]="label" p-clean p-label="Label"> </po-input>

  <po-input class="po-md-6" name="help" [(ngModel)]="help" p-clean p-label="Help"> </po-input>

  <po-input class="po-md-6" name="helperText" [(ngModel)]="helperText" p-clean p-label="Additional Help"> </po-input>

  <po-input class="po-md-6" name="placeholder" [(ngModel)]="placeholder" p-clean p-label="Placeholder"> </po-input>

  <po-input class="po-md-6" name="errorPattern" [(ngModel)]="errorPattern" p-clean p-label="Error Pattern"> </po-input>

  <po-select class="po-md-6 po-lg-3" name="icon" [(ngModel)]="icon" p-clean p-label="Icon" [p-options]="iconOptions">
  </po-select>

  <po-number class="po-md-6 po-lg-3" name="min" [(ngModel)]="min" p-clean p-label="Min"> </po-number>

  <po-number class="po-md-6 po-lg-3" name="max" [(ngModel)]="max" p-clean p-label="Max"> </po-number>

  <po-select
    class="po-md-6 po-lg-3"
    name="locale"
    [(ngModel)]="locale"
    p-clean
    p-label="Locale"
    [p-options]="localeOptions"
  ></po-select>

  <po-number
    class="po-md-6 po-lg-3"
    name="decimalsLength"
    [(ngModel)]="decimalsLength"
    p-clean
    p-help="M\xE1ximo 15"
    p-label="Decimals max length"
    p-min="0"
    [p-max]="maxDecimalsLength"
  >
  </po-number>

  <po-number
    class="po-md-6 po-lg-3"
    name="thousandMaxlength"
    [(ngModel)]="thousandMaxlength"
    p-clean
    p-help="M\xE1ximo 13"
    p-label="Thousand max length"
    p-min="0"
    [p-max]="maxThousandMaxlength"
  >
  </po-number>

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
    name="size"
    [(ngModel)]="size"
    p-columns="4"
    p-label="Size"
    p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
    [p-options]="sizeOptions"
  >
  </po-radio-group>

  <div class="po-row">
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-decimal-labs/sample-po-decimal-labs.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { PoCheckboxGroupOption, PoRadioGroupOption, PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-decimal-labs',
  templateUrl: './sample-po-decimal-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDecimalLabsComponent implements OnInit {
  helperText: string;
  decimal: number;
  decimalsLength: number;
  event: string;
  help: string;
  icon: string;
  label: string;
  locale: string;
  placeholder: string;
  properties: Array<string>;
  thousandMaxlength: number;
  errorPattern: string;
  max: number;
  min: number;
  size: string;

  public readonly localeOptions: Array<PoSelectOption> = [
    { value: 'pt', label: 'Portuguese' },
    { value: 'en', label: 'English' },
    { value: 'ru', label: 'Russian' },
    { value: 'es', label: 'Spanish' }
  ];

  public readonly iconOptions: Array<PoSelectOption> = [
    { value: 'an an-shopping-cart-simple', label: 'an an-shopping-cart-simple' },
    { value: 'an an-currency-dollar-simple', label: 'an an-currency-dollar-simple' },
    { value: 'fa fa-calculator', label: 'fa fa-calculator' }
  ];

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'clean', label: 'Clean' },
    { value: 'disabled', label: 'Disabled' },
    { value: 'errorLimit', label: 'Limit Error Message' },
    { value: 'labelTextWrap', label: 'Label Text Wrap' },
    { value: 'compactLabel', label: 'Compact Label' },
    { value: 'loading', label: 'Loading' },
    { value: 'noAutocomplete', label: 'No Autocomplete' },
    { value: 'optional', label: 'Optional' },
    { value: 'readonly', label: 'Read Only' },
    { value: 'required', label: 'Required' },
    { value: 'requiredFieldErrorMessage', label: 'Required Field Error Message' },
    { value: 'showRequired', label: 'Show Required' }
  ];

  public readonly sizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  get maxDecimalsLength() {
    return 16 - this.thousandMaxlength || 15;
  }

  get maxThousandMaxlength() {
    return 16 - this.decimalsLength || 13;
  }

  ngOnInit() {
    this.restore();
  }

  changeEvent(event: string) {
    this.event = event;
  }

  restore() {
    this.helperText = '';
    this.decimal = undefined;
    this.decimalsLength = undefined;
    this.event = '';
    this.help = undefined;
    this.icon = undefined;
    this.label = undefined;
    this.locale = undefined;
    this.placeholder = '';
    this.thousandMaxlength = undefined;
    this.errorPattern = undefined;
    this.max = undefined;
    this.min = undefined;
    this.size = 'medium';

    this.properties = [];
  }
}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-decimal-labs"),og(),zl(23,"hr")),r&2&&(Lp(5),Ux("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,we,i.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,se],encapsulation:2})}return l})();var ue=(()=>{class l{hourlyWage;quantityDaysPerMonth;salary;weekHours;workingDaysPerWeek;calculate(){let d=this.weekHours/this.workingDaysPerWeek*this.quantityDaysPerMonth,r=this.salary/d;this.hourlyWage=r;}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-decimal-hourly-wage"]],standalone:false,decls:16,vars:6,consts:[["f","ngForm"],[1,"po-font-title"],[1,"po-row"],["name","weekHours","p-label","Week Hours","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","workingDaysPerWeek","p-label","Working days per week","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","quantityDaysPerMonth","p-label","Quantity days per month","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","salary","p-decimals-length","2","p-icon","an an-currency-circle-dollar","p-label","Salary","p-required","","p-thousand-maxlength","13",1,"po-md-6",3,"ngModelChange","p-change","ngModel"],["name","hourlyWage","p-decimals-length","2","p-disabled","","p-icon","an an-currency-dollar-simple","p-label","Hourly Wage","p-required","","p-thousand-maxlength","13",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Clean",1,"po-md-3",3,"p-click"],["p-label","Recalculate","p-kind","primary",1,"po-md-3",3,"p-click","p-disabled"]],template:function(r,i){if(r&1){let p=Dx();Il(0,"form",null,0)(2,"div",1),Qx(3,"Calculate hourly wage"),og(),zl(4,"po-divider"),Il(5,"div",2)(6,"po-number",3),ww("ngModelChange",function(a){return Xy(p),eN(i.weekHours,a)||(i.weekHours=a),Qy(a)}),og(),QA(),Il(7,"po-number",4),ww("ngModelChange",function(a){return Xy(p),eN(i.workingDaysPerWeek,a)||(i.workingDaysPerWeek=a),Qy(a)}),og(),QA(),og(),Il(8,"div",2)(9,"po-number",5),ww("ngModelChange",function(a){return Xy(p),eN(i.quantityDaysPerMonth,a)||(i.quantityDaysPerMonth=a),Qy(a)}),og(),QA(),Il(10,"po-decimal",6),ww("ngModelChange",function(a){return Xy(p),eN(i.salary,a)||(i.salary=a),Qy(a)}),ft("p-change",function(){return i.calculate()}),og(),QA(),og(),Il(11,"div",2)(12,"po-decimal",7),ww("ngModelChange",function(a){return Xy(p),eN(i.hourlyWage,a)||(i.hourlyWage=a),Qy(a)}),og(),QA(),og(),Il(13,"div",2)(14,"po-button",8),ft("p-click",function(){Xy(p);let a=Ax(1);return Qy(a.reset())}),og(),Il(15,"po-button",9),ft("p-click",function(){return i.calculate()}),og()()();}r&2&&(Lp(6),Ew("ngModel",i.weekHours),e0(),Lp(),Ew("ngModel",i.workingDaysPerWeek),e0(),Lp(2),Ew("ngModel",i.quantityDaysPerMonth),e0(),Lp(),Ew("ngModel",i.salary),e0(),Lp(2),Ew("ngModel",i.hourlyWage),e0(),Lp(3),nw("p-disabled",!i.hourlyWage));},dependencies:[G9,$9,z9,mk,hk,Qt,mv,uhe,Hhe],encapsulation:2,changeDetection:1})}return l})();var _e=l=>({"docs-sample-code-tabs":l}),Ee=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-decimal-hourly-wage-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Decimal - Hourly Wage"),og(),Il(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-decimal-hourly-wage/sample-po-decimal-hourly-wage.component.html"),og(),Il(13,"pre",7),Qx(14,`<form #f="ngForm">
  <div class="po-font-title">Calculate hourly wage</div>

  <po-divider />

  <div class="po-row">
    <po-number class="po-md-6" name="weekHours" [(ngModel)]="weekHours" p-label="Week Hours" p-required> </po-number>

    <po-number
      class="po-md-6"
      name="workingDaysPerWeek"
      [(ngModel)]="workingDaysPerWeek"
      p-label="Working days per week"
      p-required
    >
    </po-number>
  </div>

  <div class="po-row">
    <po-number
      class="po-md-6"
      name="quantityDaysPerMonth"
      [(ngModel)]="quantityDaysPerMonth"
      p-label="Quantity days per month"
      p-required
    >
    </po-number>

    <po-decimal
      class="po-md-6"
      name="salary"
      [(ngModel)]="salary"
      p-decimals-length="2"
      p-icon="an an-currency-circle-dollar"
      p-label="Salary"
      p-required
      p-thousand-maxlength="13"
      (p-change)="calculate()"
    >
    </po-decimal>
  </div>

  <div class="po-row">
    <po-decimal
      class="po-md-6"
      name="hourlyWage"
      [(ngModel)]="hourlyWage"
      p-decimals-length="2"
      p-disabled
      p-icon="an an-currency-dollar-simple"
      p-label="Hourly Wage"
      p-required
      p-thousand-maxlength="13"
    >
    </po-decimal>
  </div>

  <div class="po-row">
    <po-button class="po-md-3" p-label="Clean" (p-click)="f.reset()"> </po-button>

    <po-button
      class="po-md-3"
      p-label="Recalculate"
      p-kind="primary"
      [p-disabled]="!hourlyWage"
      (p-click)="calculate()"
    >
    </po-button>
  </div>
</form>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-decimal-hourly-wage/sample-po-decimal-hourly-wage.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-decimal-hourly-wage',
  templateUrl: './sample-po-decimal-hourly-wage.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDecimalHourlyWageComponent {
  hourlyWage: number;
  quantityDaysPerMonth: number;
  salary: number;
  weekHours: number;
  workingDaysPerWeek: number;

  calculate() {
    const hours = (this.weekHours / this.workingDaysPerWeek) * this.quantityDaysPerMonth;
    const salary = this.salary / hours;
    this.hourlyWage = salary;
  }
}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-decimal-hourly-wage"),og(),zl(23,"hr")),r&2&&(Lp(5),Ux("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,_e,i.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,ue],encapsulation:2})}return l})();var ge=(()=>{class l{formBuilder=f(Z9);formCalculateHourlyWage;ngOnInit(){this.formCalculateHourlyWage=this.formBuilder.group({hourlyWage:[null],quantityDaysPerMonth:[null,lm.required],salary:[null,lm.required],weekHours:[null,lm.required],workingDaysPerWeek:[null,lm.required]});}calculate(){let{weekHours:d,workingDaysPerWeek:r,quantityDaysPerMonth:i,salary:p}=this.formCalculateHourlyWage.value,s=d/r*i,a=p/s;this.formCalculateHourlyWage.patchValue({hourlyWage:a});}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-decimal-hourly-wage-reactive-form"]],standalone:false,decls:15,vars:2,consts:[[3,"formGroup"],[1,"po-font-title"],[1,"po-row"],["formControlName","weekHours","p-label","Week Hours",1,"po-md-6"],["formControlName","workingDaysPerWeek","p-label","Working days per week",1,"po-md-6"],["formControlName","quantityDaysPerMonth","p-label","Quantity days per month",1,"po-md-6"],["formControlName","salary","p-decimals-length","2","p-icon","an an-currency-circle-dollar","p-label","Salary","p-thousand-maxlength","13",1,"po-md-6",3,"p-change"],["formControlName","hourlyWage","p-decimals-length","2","p-disabled","","p-icon","an an-currency-dollar-simple","p-label","Hourly Wage","p-thousand-maxlength","13",1,"po-md-6"],["p-label","Clean",1,"po-md-3",3,"p-click"],["p-label","Recalculate","p-kind","primary",1,"po-md-3",3,"p-click","p-disabled"]],template:function(r,i){r&1&&(Il(0,"form",0)(1,"div",1),Qx(2,"Calculate hourly wage"),og(),zl(3,"po-divider"),Il(4,"div",2),zl(5,"po-number",3),QA(),zl(6,"po-number",4),QA(),og(),Il(7,"div",2),zl(8,"po-number",5),QA(),Il(9,"po-decimal",6),ft("p-change",function(){return i.calculate()}),og(),QA(),og(),Il(10,"div",2),zl(11,"po-decimal",7),QA(),og(),Il(12,"div",2)(13,"po-button",8),ft("p-click",function(){return i.formCalculateHourlyWage.reset()}),og(),Il(14,"po-button",9),ft("p-click",function(){return i.calculate()}),og()()()),r&2&&(nw("formGroup",i.formCalculateHourlyWage),Lp(5),e0(),Lp(),e0(),Lp(2),e0(),Lp(),e0(),Lp(2),e0(),Lp(3),nw("p-disabled",i.formCalculateHourlyWage.invalid));},dependencies:[G9,$9,z9,Ik,Ck,Qt,mv,uhe,Hhe],encapsulation:2,changeDetection:1})}return l})();var qe=l=>({"docs-sample-code-tabs":l}),he=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-decimal-hourly-wage-reactive-form-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Decimal - Hourly Wage Reactive Form"),og(),Il(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-decimal-hourly-wage-reactive-form/sample-po-decimal-hourly-wage-reactive-form.component.html"),og(),Il(13,"pre",7),Qx(14,`<form [formGroup]="formCalculateHourlyWage">
  <div class="po-font-title">Calculate hourly wage</div>

  <po-divider />

  <div class="po-row">
    <po-number class="po-md-6" formControlName="weekHours" p-label="Week Hours"> </po-number>

    <po-number class="po-md-6" formControlName="workingDaysPerWeek" p-label="Working days per week"> </po-number>
  </div>

  <div class="po-row">
    <po-number class="po-md-6" formControlName="quantityDaysPerMonth" p-label="Quantity days per month"> </po-number>

    <po-decimal
      class="po-md-6"
      formControlName="salary"
      p-decimals-length="2"
      p-icon="an an-currency-circle-dollar"
      p-label="Salary"
      p-thousand-maxlength="13"
      (p-change)="calculate()"
    >
    </po-decimal>
  </div>

  <div class="po-row">
    <po-decimal
      class="po-md-6"
      formControlName="hourlyWage"
      p-decimals-length="2"
      p-disabled
      p-icon="an an-currency-dollar-simple"
      p-label="Hourly Wage"
      p-thousand-maxlength="13"
    >
    </po-decimal>
  </div>

  <div class="po-row">
    <po-button class="po-md-3" p-label="Clean" (p-click)="formCalculateHourlyWage.reset()"> </po-button>

    <po-button
      class="po-md-3"
      p-label="Recalculate"
      p-kind="primary"
      [p-disabled]="formCalculateHourlyWage.invalid"
      (p-click)="calculate()"
    >
    </po-button>
  </div>
</form>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-decimal-hourly-wage-reactive-form/sample-po-decimal-hourly-wage-reactive-form.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'sample-po-decimal-hourly-wage-reactive-form',
  templateUrl: './sample-po-decimal-hourly-wage-reactive-form.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDecimalHourlyWageReactiveFormComponent implements OnInit {
  private formBuilder = inject(UntypedFormBuilder);

  formCalculateHourlyWage: UntypedFormGroup;

  ngOnInit() {
    this.formCalculateHourlyWage = this.formBuilder.group({
      hourlyWage: [null],
      quantityDaysPerMonth: [null, Validators.required],
      salary: [null, Validators.required],
      weekHours: [null, Validators.required],
      workingDaysPerWeek: [null, Validators.required]
    });
  }

  calculate() {
    const { weekHours, workingDaysPerWeek, quantityDaysPerMonth, salary } = this.formCalculateHourlyWage.value;

    const hours = (weekHours / workingDaysPerWeek) * quantityDaysPerMonth;
    const hourlyWage = salary / hours;

    this.formCalculateHourlyWage.patchValue({ hourlyWage });
  }
}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-decimal-hourly-wage-reactive-form"),og(),zl(23,"hr")),r&2&&(Lp(5),Ux("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,qe,i.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,ge],encapsulation:2})}return l})();var Se=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-decimal-doc"]],standalone:false,decls:1516,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/grid-system"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","ErrorAsyncProperties"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["href","documentation/po-i18n"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-helper"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","(value)","=>","Observable<boolean>"],["pan","",1,"docs-api-property-type","'change'"],["pan","",1,"docs-api-property-type","'changeModel'"]],template:function(r,i){r&1&&(Il(0,"div",0)(1,"p",1)(2,"code"),Qx(3,"import { PoFieldModule } from '@po-ui/ng-components';"),og()(),Il(4,"div",2)(5,"p"),Qx(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),og(),Il(7,"blockquote")(8,"p"),Qx(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),Il(10,"code"),Qx(11,"FormsModule"),og(),Qx(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Il(13,"code"),Qx(14,"ReactiveFormsModule"),og(),Qx(15,", ambos nativos do Angular."),og()()(),Il(16,"h3",3),Qx(17,"Componente"),og(),Il(18,"h4",4)(19,"code",5),Qx(20,"PoDecimalComponent"),og()(),Il(21,"div",2)(22,"p"),Qx(23,`Este \xE9 um componente baseado em input, com v\xE1rias propriedades do input nativo e outras
propriedades extras como: m\xE1scara, pattern, mensagem de erro e etc.
Voc\xEA deve informar a vari\xE1vel que cont\xE9m o valor como [(ngModel)]="variavel", para que o
input receba o valor da vari\xE1vel e para que ela receba as altera\xE7\xF5es do valor (two-way-databinding).
A propriedade name \xE9 obrigat\xF3ria para que o formul\xE1rio e o model funcionem corretamente.`),og(),Il(24,"p"),Qx(25,"Importante:"),og(),Il(26,"ul")(27,"li"),Qx(28,`Caso o input tenha um [(ngModel)] sem o atributo name, ocorrer\xE1 um erro de angular.
Ent\xE3o voc\xEA precisa informar o atributo name ou o atributo [ngModelOptions]="{standalone: true}".
Exemplo: [(ngModel)]="pessoa.nome" [ngModelOptions]="{standalone: true}".`),og()(),Il(29,"h4"),Qx(30,"Tokens customiz\xE1veis"),og(),Il(31,"p"),Qx(32,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS): "),zl(33,"br"),Qx(34,`
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),Il(35,"code"),Qx(36,".po-input"),og()(),Il(37,"blockquote")(38,"p"),Qx(39,"Para correto alinhamento \xE9 recomendado o uso das classes de espa\xE7amento do "),Il(40,"a",6),Qx(41,"Grid System"),og(),Qx(42,"."),og()(),Il(43,"blockquote")(44,"p"),Qx(45,"Para maiores informa\xE7\xF5es, acesse o guia "),Il(46,"a",7),Qx(47,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),Qx(48,"."),og()(),Il(49,"table")(50,"thead")(51,"tr")(52,"th"),Qx(53,"Propriedade"),og(),Il(54,"th"),Qx(55,"Descri\xE7\xE3o"),og(),Il(56,"th"),Qx(57,"Valor Padr\xE3o"),og()()(),Il(58,"tbody")(59,"tr")(60,"td")(61,"strong"),Qx(62,"Default Values"),og()(),zl(63,"td")(64,"td"),og(),Il(65,"tr")(66,"td")(67,"code"),Qx(68,"--font-family"),og()(),Il(69,"td"),Qx(70,"Fam\xEDlia tipogr\xE1fica usada"),og(),Il(71,"td")(72,"code"),Qx(73,"var(--font-family-theme)"),og()()(),Il(74,"tr")(75,"td")(76,"code"),Qx(77,"--font-size"),og()(),Il(78,"td"),Qx(79,"Tamanho da fonte"),og(),Il(80,"td")(81,"code"),Qx(82,"var(--font-size-default)"),og()()(),Il(83,"tr")(84,"td")(85,"code"),Qx(86,"--text-color-placeholder"),og()(),Il(87,"td"),Qx(88,"Cor do texto placeholder"),og(),Il(89,"td")(90,"code"),Qx(91,"var(--color-neutral-light-30)"),og()()(),Il(92,"tr")(93,"td")(94,"code"),Qx(95,"--color"),og()(),Il(96,"td"),Qx(97,"Cor pincipal do input"),og(),Il(98,"td")(99,"code"),Qx(100,"var(--color-neutral-dark-70)"),og()()(),Il(101,"tr")(102,"td")(103,"code"),Qx(104,"--background"),og()(),Il(105,"td"),Qx(106,"Cor de background"),og(),Il(107,"td")(108,"code"),Qx(109,"var(--color-neutral-light-05)"),og()()(),Il(110,"tr")(111,"td")(112,"code"),Qx(113,"--padding"),og()(),Il(114,"td"),Qx(115,"Preenchimento"),og(),Il(116,"td")(117,"code"),Qx(118,"0 0.5rem"),og()()(),Il(119,"tr")(120,"td")(121,"code"),Qx(122,"--text-color"),og()(),Il(123,"td"),Qx(124,"Cor do texto"),og(),Il(125,"td")(126,"code"),Qx(127,"var(--color-neutral-dark-90)"),og()()(),Il(128,"tr")(129,"td")(130,"code"),Qx(131,"--field-container-title-justify"),og()(),Il(132,"td"),Qx(133,"Alinhamento horizontal do t\xEDtulo ("),Il(134,"code"),Qx(135,"justify-content"),og(),Qx(136,")"),og(),Il(137,"td")(138,"code"),Qx(139,"space-between"),og()()(),Il(140,"tr")(141,"td")(142,"code"),Qx(143,"--field-container-title-flex"),og()(),Il(144,"td"),Qx(145,"Flex do t\xEDtulo ("),Il(146,"code"),Qx(147,"flex"),og(),Qx(148,")"),og(),Il(149,"td")(150,"code"),Qx(151,"1 auto"),og()()(),Il(152,"tr")(153,"td")(154,"strong"),Qx(155,"Hover"),og()(),zl(156,"td")(157,"td"),og(),Il(158,"tr")(159,"td")(160,"code"),Qx(161,"--color-hover"),og()(),Il(162,"td"),Qx(163,"Cor principal no estado hover"),og(),Il(164,"td")(165,"code"),Qx(166,"var(--color-brand-01-dark)"),og()()(),Il(167,"tr")(168,"td")(169,"code"),Qx(170,"--background-hover"),og()(),Il(171,"td"),Qx(172,"Cor de background no estado hover"),og(),Il(173,"td")(174,"code"),Qx(175,"var(--color-brand-01-lightest)"),og()()(),Il(176,"tr")(177,"td")(178,"strong"),Qx(179,"Focused"),og()(),zl(180,"td")(181,"td"),og(),Il(182,"tr")(183,"td")(184,"code"),Qx(185,"--color-focused"),og()(),Il(186,"td"),Qx(187,"Cor principal no estado de focus"),og(),Il(188,"td")(189,"code"),Qx(190,"var(--color-action-default)"),og()()(),Il(191,"tr")(192,"td")(193,"code"),Qx(194,"--outline-color-focused"),og()(),Il(195,"td"),Qx(196,"Cor do outline do estado de focus"),og(),Il(197,"td")(198,"code"),Qx(199,"var(--color-action-focus)"),og()()(),Il(200,"tr")(201,"td")(202,"strong"),Qx(203,"Disabled"),og()(),zl(204,"td")(205,"td"),og(),Il(206,"tr")(207,"td")(208,"code"),Qx(209,"--color-disabled"),og()(),Il(210,"td"),Qx(211,"Cor principal no estado disabled"),og(),Il(212,"td")(213,"code"),Qx(214,"var(--color-neutral-light-30)"),og()()(),Il(215,"tr")(216,"td")(217,"code"),Qx(218,"--background-disabled"),og()(),Il(219,"td"),Qx(220,"Cor de background no estado disabled"),og(),Il(221,"td")(222,"code"),Qx(223,"var(--color-neutral-light-20)"),og()()(),Il(224,"tr")(225,"td")(226,"code"),Qx(227,"--text-color-disabled"),og()(),Il(228,"td"),Qx(229,"Cor do texto no estado disabled"),og(),Il(230,"td")(231,"code"),Qx(232,"var(--color-neutral-dark-70)"),og()()()()(),Il(233,"p"),zl(234,"br"),Qx(235," - O "),Il(236,"code"),Qx(237,"po-decimal"),og(),Qx(238," \xE9 um "),Il(239,"em"),Qx(240,"input"),og(),Qx(241," espec\xEDfico para receber apenas n\xFAmeros decimais, por isso recebe as seguintes caracter\xEDsticas:"),og(),Il(242,"ul")(243,"li"),Qx(244,"Aceita apenas n\xFAmeros;"),og(),Il(245,"li"),Qx(246,"Utiliza ',' como separador de decimal;"),og(),Il(247,"li"),Qx(248,"Utiliza '.' para separa\xE7\xE3o de milhar;"),og(),Il(249,"li"),Qx(250,"\xC9 poss\xEDvel configurar a quantidade de casas decimais e a quantidade de digitos do campo."),og()(),Il(251,"blockquote")(252,"p")(253,"strong"),Qx(254,"Importante:"),og(),Qx(255,`
Atualmente o JavaScript limita-se a um conjunto de dados de `),Il(256,"code"),Qx(257,"32 bits"),og(),Qx(258,`, e para que os valores comportem-se devidamente,
o `),Il(259,"code"),Qx(260,"po-decimal"),og(),Qx(261,` cont\xE9m um tratamento que limita em 16 o n\xFAmero total de casas antes e ap\xF3s a v\xEDrgula.
Veja abaixo as demais regras nas documenta\xE7\xF5es de `),Il(262,"code"),Qx(263,"p-decimals-length"),og(),Qx(264," e "),Il(265,"code"),Qx(266,"p-thousand-maxlength"),og(),Qx(267,"."),og()()(),Il(268,"div",8)(269,"h4",9),Qx(270,"Seletor"),og(),Il(271,"pre",10),Qx(272,`<po-decimal
    (p-additional-help)="EventEmitter"
    p-additional-help-tooltip="string"
    p-append-in-body="boolean"
    p-auto-focus="boolean"
    (p-blur)="EventEmitter"
    (p-change)="EventEmitter"
    (p-change-model)="EventEmitter"
    p-clean="boolean"
    p-compact-label="boolean"
    p-decimals-length="number"
    p-disabled="boolean"
    p-emit-all-changes="boolean"
    (p-enter)="EventEmitter"
    p-error-async-properties="ErrorAsyncProperties"
    p-error-limit="boolean"
    p-error-pattern="string"
    p-help="string"
    p-icon="string | TemplateRef<void>"
    (p-keydown)="EventEmitter"
    p-label="string"
    p-label-text-wrap="boolean"
    p-loading="boolean"
    p-locale="string"
    p-mask="string"
    p-mask-format-model="boolean"
    p-mask-no-length-validation="boolean"
    p-max="number"
    p-maxlength="number"
    p-min="number"
    p-minlength="number"
    name="string"
    p-no-autocomplete="boolean"
    p-optional="boolean"
    p-pattern="string"
    p-placeholder="string"
    p-helper="PoHelperOptions | string"
    p-readonly="boolean"
    p-required="boolean"
    p-required-field-error-message="boolean"
    p-show-required="boolean"
    p-size="string"
    p-thousand-maxlength="number"
    p-upper-case="boolean" >
</po-decimal>
`),og()(),Il(273,"h4",11),Qx(274,"Propriedades"),og(),Il(275,"table",12)(276,"tr",13)(277,"th",14),Qx(278,"Nome"),og(),Il(279,"th",14),Qx(280,"Tipo"),og(),Il(281,"th",14),Qx(282,"Padr\xE3o"),og(),Il(283,"th",14),Qx(284,"Descri\xE7\xE3o"),og()(),Il(285,"tr",15)(286,"td",16)(287,"div",17)(288,"span",18),Qx(289," (p-additional-help)"),zl(290,"br"),og()(),Il(291,"div",19),Qx(292,"Deprecated"),og()(),Il(293,"td",20)(294,"code",21),Qx(295,"EventEmitter"),og()(),Il(296,"td",22),Qx(297,"-"),og(),Il(298,"td",23)(299,"em")(300,"strong"),Qx(301,"(opcional)"),og()(),Il(302,"p"),Qx(303,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),og(),Il(304,"blockquote")(305,"p"),Qx(306,"Essa propriedade est\xE1 "),Il(307,"strong"),Qx(308,"depreciada"),og(),Qx(309," e ser\xE1 removida na vers\xE3o "),Il(310,"code"),Qx(311,"23.x.x"),og(),Qx(312,". Recomendamos utilizar a propriedade "),Il(313,"code"),Qx(314,"p-helper"),og(),Qx(315," que oferece mais recursos e flexibilidade."),og()()()(),Il(316,"tr",15)(317,"td",16)(318,"div",24)(319,"span",25),Qx(320," p-additional-help-tooltip"),zl(321,"br"),og()(),Il(322,"div",19),Qx(323,"Deprecated"),og()(),Il(324,"td",20)(325,"code",26),Qx(326,"string"),og()(),Il(327,"td",22),Qx(328,"-"),og(),Il(329,"td",23)(330,"em")(331,"strong"),Qx(332,"(opcional)"),og()(),Il(333,"p"),Qx(334,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),Il(335,"code"),Qx(336,"po-helper"),og(),Qx(337,`.
`),Il(338,"strong"),Qx(339,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),og()(),Il(340,"blockquote")(341,"p"),Qx(342,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),og()(),Il(343,"blockquote")(344,"p"),Qx(345,"Essa propriedade est\xE1 "),Il(346,"strong"),Qx(347,"depreciada"),og(),Qx(348," e ser\xE1 removida na vers\xE3o "),Il(349,"code"),Qx(350,"23.x.x"),og(),Qx(351,". Recomendamos utilizar a propriedade "),Il(352,"code"),Qx(353,"p-helper"),og(),Qx(354," que oferece mais recursos e flexibilidade."),og()()()(),Il(355,"tr",15)(356,"td",16)(357,"div",24)(358,"span",25),Qx(359," p-append-in-body"),zl(360,"br"),og()()(),Il(361,"td",20)(362,"code",27),Qx(363,"boolean"),og()(),Il(364,"td",22)(365,"p")(366,"code"),Qx(367,"false"),og()()(),Il(368,"td",23)(369,"em")(370,"strong"),Qx(371,"(opcional)"),og()(),Il(372,"p"),Qx(373,"Define que o popover ("),Il(374,"code"),Qx(375,"p-helper"),og(),Qx(376," e/ou "),Il(377,"code"),Qx(378,"p-error-limit"),og(),Qx(379,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),og(),Il(380,"blockquote")(381,"p"),Qx(382,"Quando utilizado com "),Il(383,"code"),Qx(384,"p-helper"),og(),Qx(385,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),og()()()(),Il(386,"tr",15)(387,"td",16)(388,"div",24)(389,"span",25),Qx(390," p-auto-focus"),zl(391,"br"),og()()(),Il(392,"td",20)(393,"code",27),Qx(394,"boolean"),og()(),Il(395,"td",22)(396,"p")(397,"code"),Qx(398,"false"),og()()(),Il(399,"td",23)(400,"em")(401,"strong"),Qx(402,"(opcional)"),og()(),Il(403,"p"),Qx(404,"Aplica foco no elemento ao ser iniciado."),og(),Il(405,"blockquote")(406,"p"),Qx(407,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),og()()()(),Il(408,"tr",15)(409,"td",16)(410,"div",17)(411,"span",18),Qx(412," (p-blur)"),zl(413,"br"),og()()(),Il(414,"td",20)(415,"code",21),Qx(416,"EventEmitter"),og()(),Il(417,"td",22),Qx(418,"-"),og(),Il(419,"td",23)(420,"em")(421,"strong"),Qx(422,"(opcional)"),og()(),Il(423,"p"),Qx(424,"Evento disparado ao sair do campo."),og()()(),Il(425,"tr",15)(426,"td",16)(427,"div",17)(428,"span",18),Qx(429," (p-change)"),zl(430,"br"),og()()(),Il(431,"td",20)(432,"code",21),Qx(433,"EventEmitter"),og()(),Il(434,"td",22),Qx(435,"-"),og(),Il(436,"td",23)(437,"em")(438,"strong"),Qx(439,"(opcional)"),og()(),Il(440,"p"),Qx(441,"Evento disparado ao alterar valor e deixar o campo."),og()()(),Il(442,"tr",15)(443,"td",16)(444,"div",17)(445,"span",18),Qx(446," (p-change-model)"),zl(447,"br"),og()()(),Il(448,"td",20)(449,"code",21),Qx(450,"EventEmitter"),og()(),Il(451,"td",22),Qx(452,"-"),og(),Il(453,"td",23)(454,"em")(455,"strong"),Qx(456,"(opcional)"),og()(),Il(457,"p"),Qx(458,"Evento disparado ao alterar valor do model."),og()()(),Il(459,"tr",15)(460,"td",16)(461,"div",24)(462,"span",25),Qx(463,"p-clean"),zl(464,"br"),og()()(),Il(465,"td",20)(466,"code",27),Qx(467,"boolean"),og()(),Il(468,"td",22),Qx(469,"-"),og(),Il(470,"td",23)(471,"em")(472,"strong"),Qx(473,"(opcional)"),og()(),Il(474,"p"),Qx(475,"Se verdadeiro, o campo receber\xE1 um bot\xE3o para ser limpo."),og()()(),Il(476,"tr",15)(477,"td",16)(478,"div",24)(479,"span",25),Qx(480," p-compact-label"),zl(481,"br"),og()()(),Il(482,"td",20)(483,"code",27),Qx(484,"boolean"),og()(),Il(485,"td",22)(486,"p")(487,"code"),Qx(488,"false"),og()()(),Il(489,"td",23)(490,"em")(491,"strong"),Qx(492,"(opcional)"),og()(),Il(493,"p"),Qx(494,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),og(),Il(495,"p"),Qx(496,"Quando habilitado ("),Il(497,"code"),Qx(498,"true"),og(),Qx(499,"), o modo compacto afeta o conjunto composto por:"),og(),Il(500,"ul")(501,"li")(502,"code"),Qx(503,"po-label"),og()(),Il(504,"li")(505,"code"),Qx(506,"p-requirement (showRequired)"),og()(),Il(507,"li")(508,"code"),Qx(509,"po-helper"),og()()(),Il(510,"p"),Qx(511,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),og(),Il(512,"p"),Qx(513,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),og(),Il(514,"ul")(515,"li")(516,"code"),Qx(517,"--field-container-title-justify"),og()(),Il(518,"li")(519,"code"),Qx(520,"--field-container-title-flex"),og()()(),Il(521,"p"),Qx(522,"Exemplo:"),og(),Il(523,"pre")(524,"code"),Qx(525,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),og()(),Il(526,"p"),Qx(527,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),og()()(),Il(528,"tr",15)(529,"td",16)(530,"div",24)(531,"span",25),Qx(532," p-decimals-length"),zl(533,"br"),og()()(),Il(534,"td",20)(535,"code",28),Qx(536,"number"),og()(),Il(537,"td",22)(538,"p")(539,"code"),Qx(540,"2"),og()()(),Il(541,"td",23)(542,"em")(543,"strong"),Qx(544,"(opcional)"),og()(),Il(545,"p"),Qx(546,"Quantidade m\xE1xima de casas decimais."),og(),Il(547,"blockquote")(548,"p")(549,"strong"),Qx(550,"Importante:"),og()()(),Il(551,"ul")(552,"li"),Qx(553,"O valor m\xE1ximo permitido \xE9 15;"),og(),Il(554,"li"),Qx(555,"A soma total de "),Il(556,"code"),Qx(557,"p-decimals-length"),og(),Qx(558," com "),Il(559,"code"),Qx(560,"p-thousand-maxlength"),og(),Qx(561," limita-se \xE0 16;"),og(),Il(562,"li"),Qx(563,"Esta propriedade sobrep\xF5e apenas o valor "),Il(564,"strong"),Qx(565,"padr\xE3o"),og(),Qx(566," de "),Il(567,"code"),Qx(568,"p-thousand-maxlength"),og(),Qx(569,";"),og(),Il(570,"li"),Qx(571,"Caso "),Il(572,"code"),Qx(573,"p-thousand-maxlength"),og(),Qx(574," tenha um valor definido, esta propriedade poder\xE1 receber apenas o valor restante do limite total (16)."),og()()()(),Il(575,"tr",15)(576,"td",16)(577,"div",24)(578,"span",25),Qx(579,"p-disabled"),zl(580,"br"),og()()(),Il(581,"td",20)(582,"code",27),Qx(583,"boolean"),og()(),Il(584,"td",22)(585,"p")(586,"code"),Qx(587,"false"),og()()(),Il(588,"td",23)(589,"em")(590,"strong"),Qx(591,"(opcional)"),og()(),Il(592,"p"),Qx(593,"Se verdadeiro, desabilita o campo."),og()()(),Il(594,"tr",15)(595,"td",16)(596,"div",24)(597,"span",25),Qx(598," p-emit-all-changes"),zl(599,"br"),og()()(),Il(600,"td",20)(601,"code",27),Qx(602,"boolean"),og()(),Il(603,"td",22)(604,"p")(605,"code"),Qx(606,"false"),og()()(),Il(607,"td",23)(608,"em")(609,"strong"),Qx(610,"(opcional)"),og()(),Il(611,"p"),Qx(612,"Sempre emite as altera\xE7\xF5es do model mesmo quando o valor atual for igual ao valor anterior."),og()()(),Il(613,"tr",15)(614,"td",16)(615,"div",17)(616,"span",18),Qx(617," (p-enter)"),zl(618,"br"),og()()(),Il(619,"td",20)(620,"code",21),Qx(621,"EventEmitter"),og()(),Il(622,"td",22),Qx(623,"-"),og(),Il(624,"td",23)(625,"em")(626,"strong"),Qx(627,"(opcional)"),og()(),Il(628,"p"),Qx(629,"Evento disparado ao entrar do campo."),og()()(),Il(630,"tr",15)(631,"td",16)(632,"div",24)(633,"span",25),Qx(634," p-error-async-properties"),zl(635,"br"),og()()(),Il(636,"td",20)(637,"code",29),Qx(638,"ErrorAsyncProperties"),og()(),Il(639,"td",22),Qx(640,"-"),og(),Il(641,"td",23)(642,"em")(643,"strong"),Qx(644,"(opcional)"),og()(),Il(645,"p"),Qx(646,`Realiza alguma valida\xE7\xE3o customizada ass\xEDncrona no componente.
Aconselhamos a utiliza\xE7\xE3o dessa propriedade somente em componentes que n\xE3o estejam
utilizando `),Il(647,"code"),Qx(648,"Reactive Forms"),og(),Qx(649,". Em formul\xE1rios reativos, pode-se utilizar o pr\xF3prio "),Il(650,"code"),Qx(651,"asyncValidators"),og(),Qx(652,"."),og()()(),Il(653,"tr",15)(654,"td",16)(655,"div",24)(656,"span",25),Qx(657," p-error-limit"),zl(658,"br"),og()()(),Il(659,"td",20)(660,"code",27),Qx(661,"boolean"),og()(),Il(662,"td",22)(663,"p")(664,"code"),Qx(665,"false"),og()()(),Il(666,"td",23)(667,"em")(668,"strong"),Qx(669,"(opcional)"),og()(),Il(670,"p"),Qx(671,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),og(),Il(672,"blockquote")(673,"p"),Qx(674,"Caso essa propriedade seja definida como "),Il(675,"code"),Qx(676,"true"),og(),Qx(677,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),og()()()(),Il(678,"tr",15)(679,"td",16)(680,"div",24)(681,"span",25),Qx(682," p-error-pattern"),zl(683,"br"),og()()(),Il(684,"td",20)(685,"code",26),Qx(686,"string"),og()(),Il(687,"td",22),Qx(688,"-"),og(),Il(689,"td",23)(690,"em")(691,"strong"),Qx(692,"(opcional)"),og()(),Il(693,"p"),Qx(694,"Mensagem que ser\xE1 apresentada quando o "),Il(695,"code"),Qx(696,"pattern"),og(),Qx(697," ou a m\xE1scara n\xE3o for satisfeita."),og(),Il(698,"blockquote")(699,"p"),Qx(700,`Por padr\xE3o, esta mensagem n\xE3o \xE9 apresentada quando o campo estiver vazio, mesmo que ele seja requerido.
Para exibir a mensagem com o campo vazio, utilize a propriedade `),Il(701,"code"),Qx(702,"p-required-field-error-message"),og(),Qx(703," em conjunto."),og()()()(),Il(704,"tr",15)(705,"td",16)(706,"div",24)(707,"span",25),Qx(708," p-help"),zl(709,"br"),og()()(),Il(710,"td",20)(711,"code",26),Qx(712,"string"),og()(),Il(713,"td",22),Qx(714,"-"),og(),Il(715,"td",23)(716,"em")(717,"strong"),Qx(718,"(opcional)"),og()(),Il(719,"p"),Qx(720,"Texto de apoio do campo."),og()()(),Il(721,"tr",15)(722,"td",16)(723,"div",24)(724,"span",25),Qx(725," p-icon"),zl(726,"br"),og()()(),Il(727,"td",20)(728,"code",26),Qx(729,"string "),og(),Il(730,"code",30),Qx(731," TemplateRef<void>"),og()(),Il(732,"td",22),Qx(733,"-"),og(),Il(734,"td",23)(735,"em")(736,"strong"),Qx(737,"(opcional)"),og()(),Il(738,"p"),Qx(739,"Define o \xEDcone que ser\xE1 exibido no in\xEDcio do campo."),og(),Il(740,"p"),Qx(741,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),Il(742,"a",31),Qx(743,"Biblioteca de \xEDcones"),og(),Qx(744,". conforme exemplo abaixo:"),og(),Il(745,"pre")(746,"code"),Qx(747,`<po-input p-icon="an an-user" p-label="PO input"></po-input>
`),og()(),Il(748,"p"),Qx(749,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),Il(750,"em"),Qx(751,"Font Awesome"),og(),Qx(752,", da seguinte forma:"),og(),Il(753,"pre")(754,"code"),Qx(755,`<po-input p-icon="fa fa-podcast" p-label="PO input"></po-input>
`),og()(),Il(756,"p"),Qx(757,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),Il(758,"code"),Qx(759,"TemplateRef"),og(),Qx(760,", conforme exemplo abaixo:"),og(),Il(761,"pre")(762,"code"),Qx(763,`<po-input [p-icon]="template" p-label="input template ionic"></po-input>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),og()(),Il(764,"blockquote")(765,"p"),Qx(766,"Para o \xEDcone enquadrar corretamente, deve-se utilizar "),Il(767,"code"),Qx(768,"font-size: inherit"),og(),Qx(769," caso o \xEDcone utilizado n\xE3o aplique-o."),og()()()(),Il(770,"tr",15)(771,"td",16)(772,"div",17)(773,"span",18),Qx(774," (p-keydown)"),zl(775,"br"),og()()(),Il(776,"td",20)(777,"code",21),Qx(778,"EventEmitter"),og()(),Il(779,"td",22),Qx(780,"-"),og(),Il(781,"td",23)(782,"em")(783,"strong"),Qx(784,"(opcional)"),og()(),Il(785,"p"),Qx(786,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Il(787,"code"),Qx(788,"KeyboardEvent"),og(),Qx(789," com informa\xE7\xF5es sobre a tecla."),og()()(),Il(790,"tr",15)(791,"td",16)(792,"div",24)(793,"span",25),Qx(794," p-label"),zl(795,"br"),og()()(),Il(796,"td",20)(797,"code",26),Qx(798,"string"),og()(),Il(799,"td",22),Qx(800,"-"),og(),Il(801,"td",23)(802,"em")(803,"strong"),Qx(804,"(opcional)"),og()(),Il(805,"p"),Qx(806,"R\xF3tulo do campo."),og()()(),Il(807,"tr",15)(808,"td",16)(809,"div",24)(810,"span",25),Qx(811," p-label-text-wrap"),zl(812,"br"),og()()(),Il(813,"td",20)(814,"code",27),Qx(815,"boolean"),og()(),Il(816,"td",22)(817,"p")(818,"code"),Qx(819,"false"),og()()(),Il(820,"td",23)(821,"em")(822,"strong"),Qx(823,"(opcional)"),og()(),Il(824,"p"),Qx(825,"Habilita a quebra autom\xE1tica do texto da propriedade "),Il(826,"code"),Qx(827,"p-label"),og(),Qx(828,". Quando "),Il(829,"code"),Qx(830,"p-label-text-wrap"),og(),Qx(831,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),og()()(),Il(832,"tr",15)(833,"td",16)(834,"div",24)(835,"span",25),Qx(836," p-loading"),zl(837,"br"),og()()(),Il(838,"td",20)(839,"code",27),Qx(840,"boolean"),og()(),Il(841,"td",22)(842,"p")(843,"code"),Qx(844,"false"),og()()(),Il(845,"td",23)(846,"em")(847,"strong"),Qx(848,"(opcional)"),og()(),Il(849,"p"),Qx(850,"Exibe um \xEDcone de carregamento no lado direito do campo para sinalizar que uma opera\xE7\xE3o est\xE1 em andamento."),og()()(),Il(851,"tr",15)(852,"td",16)(853,"div",24)(854,"span",25),Qx(855," p-locale"),zl(856,"br"),og()()(),Il(857,"td",20)(858,"code",26),Qx(859,"string"),og()(),Il(860,"td",22),Qx(861,"-"),og(),Il(862,"td",23)(863,"em")(864,"strong"),Qx(865,"(opcional)"),og()(),Il(866,"p"),Qx(867,`Informa o locale(pa\xEDs) para a formata\xE7\xE3o do valor.
Por padr\xE3o o valor ser\xE1 configurado segundo a o m\xF3dulo `),Il(868,"a",32)(869,"code"),Qx(870,"I18n"),og()()(),Il(871,"blockquote")(872,"p"),Qx(873,"Para ver quais linguagens suportadas acesse "),Il(874,"a",32)(875,"code"),Qx(876,"I18n"),og()()()()()(),Il(877,"tr",15)(878,"td",16)(879,"div",24)(880,"span",25),Qx(881,"p-mask"),zl(882,"br"),og()()(),Il(883,"td",20)(884,"code",26),Qx(885,"string"),og()(),Il(886,"td",22),Qx(887,"-"),og(),Il(888,"td",23)(889,"em")(890,"strong"),Qx(891,"(opcional)"),og()(),Il(892,"p"),Qx(893,`Indica uma m\xE1scara para o campo. Exemplos: (+99) (99) 99999?-9999, 99999-999, 999.999.999-99.
A m\xE1scara gera uma valida\xE7\xE3o autom\xE1tica do campo, podendo esta ser substitu\xEDda por um REGEX espec\xEDfico
atrav\xE9s da propriedade p-pattern.
O campo ser\xE1 sinalizado e o formul\xE1rio ficar\xE1 inv\xE1lido quando o valor informado estiver fora do padr\xE3o definido,
mesmo quando desabilitado.`),og()()(),Il(894,"tr",15)(895,"td",16)(896,"div",24)(897,"span",25),Qx(898,"p-mask-format-model"),zl(899,"br"),og()()(),Il(900,"td",20)(901,"code",27),Qx(902,"boolean"),og()(),Il(903,"td",22)(904,"p")(905,"code"),Qx(906,"false"),og()()(),Il(907,"td",23)(908,"em")(909,"strong"),Qx(910,"(opcional)"),og()(),Il(911,"p"),Qx(912,"Indica se o "),Il(913,"code"),Qx(914,"model"),og(),Qx(915," receber\xE1 o valor formatado pela m\xE1scara ou apenas o valor puro (sem formata\xE7\xE3o)."),og()()(),Il(916,"tr",15)(917,"td",16)(918,"div",24)(919,"span",25),Qx(920," p-mask-no-length-validation"),zl(921,"br"),og()()(),Il(922,"td",20)(923,"code",27),Qx(924,"boolean"),og()(),Il(925,"td",22)(926,"p")(927,"code"),Qx(928,"false"),og()()(),Il(929,"td",23)(930,"p"),Qx(931,"Controla como o componente aplica as valida\xE7\xF5es de comprimento m\xEDnimo ("),Il(932,"code"),Qx(933,"minLength"),og(),Qx(934,") e m\xE1ximo ("),Il(935,"code"),Qx(936,"maxLength"),og(),Qx(937,") quando h\xE1 uma m\xE1scara ("),Il(938,"code"),Qx(939,"p-mask"),og(),Qx(940,") definida."),og(),Il(941,"ul")(942,"li"),Qx(943,"Quando "),Il(944,"code"),Qx(945,"true"),og(),Qx(946,", apenas os caracteres alfanum\xE9ricos ser\xE3o contabilizados para a valida\xE7\xE3o dos comprimentos."),og(),Il(947,"li"),Qx(948,"Quando "),Il(949,"code"),Qx(950,"false"),og(),Qx(951,", todos os caracteres, incluindo os especiais da m\xE1scara, ser\xE3o considerados na valida\xE7\xE3o."),og()(),Il(952,"blockquote")(953,"p"),Qx(954,"Esta propriedade \xE9 ignorada quando utilizada em conjunto com "),Il(955,"code"),Qx(956,"p-mask-format-model"),og(),Qx(957,"."),og()(),Il(958,"p"),Qx(959,"Exemplo:"),og(),Il(960,"pre")(961,"code"),Qx(962,`<po-input
  p-mask="999-999"
  p-maxlength="6"
  p-minlength="4"
  p-mask-no-length-validation="true"
></po-input>
`),og()(),Il(963,"ul")(964,"li"),Qx(965,"Entrada: "),Il(966,"code"),Qx(967,"123-456"),og(),Qx(968," \u2192 Valida\xE7\xE3o ser\xE1 aplicada somente aos n\xFAmeros, ignorando o caractere especial "),Il(969,"code"),Qx(970,"-"),og(),Qx(971,"."),og()()()(),Il(972,"tr",15)(973,"td",16)(974,"div",24)(975,"span",25),Qx(976," p-max"),zl(977,"br"),og()()(),Il(978,"td",20)(979,"code",28),Qx(980,"number"),og()(),Il(981,"td",22),Qx(982,"-"),og(),Il(983,"td",23)(984,"em")(985,"strong"),Qx(986,"(opcional)"),og()(),Il(987,"p"),Qx(988,"Valor m\xE1ximo."),og()()(),Il(989,"tr",15)(990,"td",16)(991,"div",24)(992,"span",25),Qx(993," p-maxlength"),zl(994,"br"),og()()(),Il(995,"td",20)(996,"code",28),Qx(997,"number"),og()(),Il(998,"td",22),Qx(999,"-"),og(),Il(1e3,"td",23)(1001,"em")(1002,"strong"),Qx(1003,"(opcional)"),og()(),Il(1004,"p"),Qx(1005,"Indica a quantidade m\xE1xima de caracteres que o campo aceita."),og()()(),Il(1006,"tr",15)(1007,"td",16)(1008,"div",24)(1009,"span",25),Qx(1010," p-min"),zl(1011,"br"),og()()(),Il(1012,"td",20)(1013,"code",28),Qx(1014,"number"),og()(),Il(1015,"td",22),Qx(1016,"-"),og(),Il(1017,"td",23)(1018,"em")(1019,"strong"),Qx(1020,"(opcional)"),og()(),Il(1021,"p"),Qx(1022,"Valor m\xEDnimo."),og()()(),Il(1023,"tr",15)(1024,"td",16)(1025,"div",24)(1026,"span",25),Qx(1027," p-minlength"),zl(1028,"br"),og()()(),Il(1029,"td",20)(1030,"code",28),Qx(1031,"number"),og()(),Il(1032,"td",22),Qx(1033,"-"),og(),Il(1034,"td",23)(1035,"em")(1036,"strong"),Qx(1037,"(opcional)"),og()(),Il(1038,"p"),Qx(1039,"Indica a quantidade m\xEDnima de caracteres que o campo aceita."),og()()(),Il(1040,"tr",15)(1041,"td",16)(1042,"div",24)(1043,"span",25),Qx(1044," name"),zl(1045,"br"),og()()(),Il(1046,"td",20)(1047,"code",26),Qx(1048,"string"),og()(),Il(1049,"td",22),Qx(1050,"-"),og(),Il(1051,"td",23)(1052,"p"),Qx(1053,"Nome e identificador do campo."),og()()(),Il(1054,"tr",15)(1055,"td",16)(1056,"div",24)(1057,"span",25),Qx(1058," p-no-autocomplete"),zl(1059,"br"),og()()(),Il(1060,"td",20)(1061,"code",27),Qx(1062,"boolean"),og()(),Il(1063,"td",22)(1064,"p")(1065,"code"),Qx(1066,"false"),og()()(),Il(1067,"td",23)(1068,"em")(1069,"strong"),Qx(1070,"(opcional)"),og()(),Il(1071,"p"),Qx(1072,"Define a propriedade nativa "),Il(1073,"code"),Qx(1074,"autocomplete"),og(),Qx(1075," do campo como "),Il(1076,"code"),Qx(1077,"off"),og(),Qx(1078,"."),og(),Il(1079,"blockquote")(1080,"p"),Qx(1081,"No componente "),Il(1082,"code"),Qx(1083,"po-password"),og(),Qx(1084," ser\xE1 definido como "),Il(1085,"code"),Qx(1086,"new-password"),og(),Qx(1087,"."),og()(),Il(1088,"p"),Qx(1089,"Nos componentes "),Il(1090,"code"),Qx(1091,"po-password"),og(),Qx(1092," e "),Il(1093,"code"),Qx(1094,"po-login"),og(),Qx(1095," o valor padr\xE3o ser\xE1 "),Il(1096,"code"),Qx(1097,"true"),og(),Qx(1098,"."),og()()(),Il(1099,"tr",15)(1100,"td",16)(1101,"div",24)(1102,"span",25),Qx(1103," p-optional"),zl(1104,"br"),og()()(),Il(1105,"td",20)(1106,"code",27),Qx(1107,"boolean"),og()(),Il(1108,"td",22)(1109,"p")(1110,"code"),Qx(1111,"false"),og()()(),Il(1112,"td",23)(1113,"em")(1114,"strong"),Qx(1115,"(opcional)"),og()(),Il(1116,"p"),Qx(1117,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),og(),Il(1118,"blockquote")(1119,"p"),Qx(1120,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),og()(),Il(1121,"ul")(1122,"li"),Qx(1123,"O campo conter "),Il(1124,"code"),Qx(1125,"p-required"),og(),Qx(1126,";"),og(),Il(1127,"li"),Qx(1128,"N\xE3o possuir "),Il(1129,"code"),Qx(1130,"p-help"),og(),Qx(1131," e/ou "),Il(1132,"code"),Qx(1133,"p-label"),og(),Qx(1134,"."),og()()()(),Il(1135,"tr",15)(1136,"td",16)(1137,"div",24)(1138,"span",25),Qx(1139,"p-pattern"),zl(1140,"br"),og()()(),Il(1141,"td",20)(1142,"code",26),Qx(1143,"string"),og()(),Il(1144,"td",22),Qx(1145,"-"),og(),Il(1146,"td",23)(1147,"em")(1148,"strong"),Qx(1149,"(opcional)"),og()(),Il(1150,"p"),Qx(1151,`Express\xE3o regular para validar o campo.
Quando o campo possuir uma m\xE1scara `),Il(1152,"code"),Qx(1153,"(p-mask)"),og(),Qx(1154,` ser\xE1 automaticamente validado por ela, por\xE9m
\xE9 poss\xEDvel definir um p-pattern para substituir a valida\xE7\xE3o da m\xE1scara.`),og()()(),Il(1155,"tr",15)(1156,"td",16)(1157,"div",24)(1158,"span",25),Qx(1159," p-placeholder"),zl(1160,"br"),og()()(),Il(1161,"td",20)(1162,"code",26),Qx(1163,"string"),og()(),Il(1164,"td",22)(1165,"p"),Qx(1166,"''"),og()(),Il(1167,"td",23)(1168,"em")(1169,"strong"),Qx(1170,"(opcional)"),og()(),Il(1171,"p"),Qx(1172,"Mensagem que aparecer\xE1 enquanto o campo n\xE3o estiver preenchido."),og()()(),Il(1173,"tr",15)(1174,"td",16)(1175,"div",24)(1176,"span",25),Qx(1177," p-helper"),zl(1178,"br"),og()()(),Il(1179,"td",20)(1180,"code",33),Qx(1181,"PoHelperOptions "),og(),Il(1182,"code",26),Qx(1183," string"),og()(),Il(1184,"td",22),Qx(1185,"-"),og(),Il(1186,"td",23)(1187,"em")(1188,"strong"),Qx(1189,"(opcional)"),og()(),Il(1190,"p"),Qx(1191,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label quando a propriedade "),Il(1192,"code"),Qx(1193,"p-label"),og(),Qx(1194," for definida, ou, ao lado do componente na aus\xEAncia da propriedade "),Il(1195,"code"),Qx(1196,"p-label"),og(),Qx(1197,"."),og(),Il(1198,"blockquote")(1199,"p"),Qx(1200,"Para mais informa\xE7\xF5es acesse: "),Il(1201,"a",34),Qx(1202,"https://po-ui.io/documentation/po-helper"),og(),Qx(1203,"."),og()(),Il(1204,"blockquote")(1205,"p"),Qx(1206,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),Il(1207,"code"),Qx(1208,"p-additional-help-tooltip"),og(),Qx(1209," e "),Il(1210,"code"),Qx(1211,"p-additional-help"),og(),Qx(1212,") ser\xE1 ignorado."),og()()()(),Il(1213,"tr",15)(1214,"td",16)(1215,"div",24)(1216,"span",25),Qx(1217,"p-readonly"),zl(1218,"br"),og()()(),Il(1219,"td",20)(1220,"code",27),Qx(1221,"boolean"),og()(),Il(1222,"td",22),Qx(1223,"-"),og(),Il(1224,"td",23)(1225,"em")(1226,"strong"),Qx(1227,"(opcional)"),og()(),Il(1228,"p"),Qx(1229,"Indica que o campo ser\xE1 somente leitura."),og()()(),Il(1230,"tr",15)(1231,"td",16)(1232,"div",24)(1233,"span",25),Qx(1234,"p-required"),zl(1235,"br"),og()()(),Il(1236,"td",20)(1237,"code",27),Qx(1238,"boolean"),og()(),Il(1239,"td",22)(1240,"p")(1241,"code"),Qx(1242,"false"),og()()(),Il(1243,"td",23)(1244,"em")(1245,"strong"),Qx(1246,"(opcional)"),og()(),Il(1247,"p"),Qx(1248,"Define que o campo ser\xE1 obrigat\xF3rio."),og(),Il(1249,"blockquote")(1250,"p"),Qx(1251,"Esta propriedade \xE9 desconsiderada quando o input est\xE1 desabilitado "),Il(1252,"code"),Qx(1253,"(p-disabled)"),og(),Qx(1254,"."),og()()()(),Il(1255,"tr",15)(1256,"td",16)(1257,"div",24)(1258,"span",25),Qx(1259," p-required-field-error-message"),zl(1260,"br"),og()()(),Il(1261,"td",20)(1262,"code",27),Qx(1263,"boolean"),og()(),Il(1264,"td",22)(1265,"p")(1266,"code"),Qx(1267,"false"),og()()(),Il(1268,"td",23)(1269,"em")(1270,"strong"),Qx(1271,"(opcional)"),og()(),Il(1272,"p"),Qx(1273,"Exibe a mensagem setada na propriedade "),Il(1274,"code"),Qx(1275,"p-error-pattern"),og(),Qx(1276," se o campo estiver vazio e for requerido."),og(),Il(1277,"blockquote")(1278,"p"),Qx(1279,"Necess\xE1rio que a propriedade "),Il(1280,"code"),Qx(1281,"p-required"),og(),Qx(1282," esteja habilitada."),og()()()(),Il(1283,"tr",15)(1284,"td",16)(1285,"div",24)(1286,"span",25),Qx(1287," p-show-required"),zl(1288,"br"),og()()(),Il(1289,"td",20)(1290,"code",27),Qx(1291,"boolean"),og()(),Il(1292,"td",22),Qx(1293,"-"),og(),Il(1294,"td",23)(1295,"p"),Qx(1296,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),og(),Il(1297,"blockquote")(1298,"p"),Qx(1299,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),og()(),Il(1300,"ul")(1301,"li"),Qx(1302,"N\xE3o possuir "),Il(1303,"code"),Qx(1304,"p-help"),og(),Qx(1305," e/ou "),Il(1306,"code"),Qx(1307,"p-label"),og(),Qx(1308,"."),og()()()(),Il(1309,"tr",15)(1310,"td",16)(1311,"div",24)(1312,"span",25),Qx(1313," p-size"),zl(1314,"br"),og()()(),Il(1315,"td",20)(1316,"code",26),Qx(1317,"string"),og()(),Il(1318,"td",22)(1319,"p")(1320,"code"),Qx(1321,"medium"),og()()(),Il(1322,"td",23)(1323,"em")(1324,"strong"),Qx(1325,"(opcional)"),og()(),Il(1326,"p"),Qx(1327,"Define o tamanho do componente:"),og(),Il(1328,"ul")(1329,"li")(1330,"code"),Qx(1331,"small"),og(),Qx(1332,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),og(),Il(1333,"li")(1334,"code"),Qx(1335,"medium"),og(),Qx(1336,": altura do input como 44px."),og()(),Il(1337,"blockquote")(1338,"p"),Qx(1339,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Il(1340,"code"),Qx(1341,"medium"),og(),Qx(1342,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Il(1343,"a",35),Qx(1344,"po-theme"),og(),Qx(1345,"."),og()()()(),Il(1346,"tr",15)(1347,"td",16)(1348,"div",24)(1349,"span",25),Qx(1350," p-thousand-maxlength"),zl(1351,"br"),og()()(),Il(1352,"td",20)(1353,"code",28),Qx(1354,"number"),og()(),Il(1355,"td",22)(1356,"p")(1357,"code"),Qx(1358,"13"),og()()(),Il(1359,"td",23)(1360,"em")(1361,"strong"),Qx(1362,"(opcional)"),og()(),Il(1363,"p"),Qx(1364,"Quantidade m\xE1xima de d\xEDgitos antes do separador decimal."),og(),Il(1365,"blockquote")(1366,"p")(1367,"strong"),Qx(1368,"Importante:"),og()()(),Il(1369,"ul")(1370,"li"),Qx(1371,"O valor m\xE1ximo permitido \xE9 13;"),og(),Il(1372,"li"),Qx(1373,"A soma total de "),Il(1374,"code"),Qx(1375,"p-decimals-length"),og(),Qx(1376," com "),Il(1377,"code"),Qx(1378,"p-thousand-maxlength"),og(),Qx(1379," limita-se \xE0 16;"),og(),Il(1380,"li"),Qx(1381,"Esta propriedade sobrep\xF5e o valor definido em "),Il(1382,"code"),Qx(1383,"p-decimals-length"),og(),Qx(1384,"."),og()()()(),Il(1385,"tr",15)(1386,"td",16)(1387,"div",24)(1388,"span",25),Qx(1389," p-upper-case"),zl(1390,"br"),og()()(),Il(1391,"td",20)(1392,"code",27),Qx(1393,"boolean"),og()(),Il(1394,"td",22),Qx(1395,"-"),og(),Il(1396,"td",23)(1397,"p"),Qx(1398,"Converte o conte\xFAdo do campo em mai\xFAsulo automaticamente."),og()()()(),Il(1399,"h3",11),Qx(1400,"M\xE9todos"),og(),Il(1401,"table",36)(1402,"tr",15)(1403,"th",37)(1404,"div",24)(1405,"h4")(1406,"span",25),Qx(1407," showAdditionalHelp "),og()()()()(),Il(1408,"tr",23)(1409,"td",23)(1410,"p"),Qx(1411,"M\xE9todo que exibe "),Il(1412,"code"),Qx(1413,"p-helper"),og(),Qx(1414," ou executa a a\xE7\xE3o definida em "),Il(1415,"code"),Qx(1416,"p-helper{eventOnClick}"),og(),Qx(1417," ou em "),Il(1418,"code"),Qx(1419,"p-additionalHelp"),og(),Qx(1420,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Il(1421,"code"),Qx(1422,"p-keydown"),og(),Qx(1423,"."),og(),Il(1424,"blockquote")(1425,"p"),Qx(1426,"Exibe ou oculta o conte\xFAdo do componente "),Il(1427,"code"),Qx(1428,"po-helper"),og(),Qx(1429," quando o componente estiver com foco."),og()(),Il(1430,"pre")(1431,"code"),Qx(1432,`// Exemplo com p-label e p-helper
<po-nome-component
 #component
 ...
 p-label="Label do componente"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, component)"
></po-nome-component>
`),og()(),Il(1433,"pre")(1434,"code"),Qx(1435,`...
onKeyDown(event: KeyboardEvent, inp: PoNomeDoComponente): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),og()()()()(),zl(1436,"br"),Il(1437,"table",36)(1438,"tr",15)(1439,"th",37)(1440,"div",24)(1441,"h4")(1442,"span",25),Qx(1443," focus "),og()()()()(),Il(1444,"tr",23)(1445,"td",23)(1446,"p"),Qx(1447,"Fun\xE7\xE3o que atribui foco ao componente."),og(),Il(1448,"p"),Qx(1449,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),og(),Il(1450,"pre")(1451,"code"),Qx(1452,`import { PoNomeDoComponenteComponent } from '@po-ui/ng-components';

...

@ViewChild(PoNomeDoComponenteComponent, { static: true }) nomeDoComponente: PoNomeDoComponenteComponent;

focusComponent() {
  this.nomeDoComponente.focus();
}
`),og()()()()(),zl(1453,"br"),Il(1454,"h3"),Qx(1455,"Interfaces"),og(),Il(1456,"h4",38)(1457,"code",5),Qx(1458,"ErrorAsyncProperties"),og()(),Il(1459,"div",2)(1460,"p"),Qx(1461,"Interface para realizar uma valida\xE7\xE3o ass\xEDncrona no componente."),og()(),Il(1462,"h4",11),Qx(1463,"Propriedades"),og(),Il(1464,"table",12)(1465,"tr",13)(1466,"th",14),Qx(1467,"Nome"),og(),Il(1468,"th",14),Qx(1469,"Tipo"),og(),Il(1470,"th",14),Qx(1471,"Descri\xE7\xE3o"),og()(),Il(1472,"tr",15)(1473,"td",16)(1474,"div",24)(1475,"span",25),Qx(1476," errorAsync"),zl(1477,"br"),og()()(),Il(1478,"td",20)(1479,"code",39),Qx(1480,"(value) => Observable<boolean>"),og()(),Il(1481,"td",23)(1482,"p"),Qx(1483,`Fun\xE7\xE3o obrigat\xF3ria executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),Il(1484,"code"),Qx(1485,"change"),og(),Qx(1486," ou "),Il(1487,"code"),Qx(1488,"change-model"),og(),Qx(1489,", dependendo do valor da propriedade "),Il(1490,"code"),Qx(1491,"triggerMode"),og(),Qx(1492,"."),og()()(),Il(1493,"tr",15)(1494,"td",16)(1495,"div",24)(1496,"span",25),Qx(1497," triggerMode"),zl(1498,"br"),og()()(),Il(1499,"td",20)(1500,"code",40),Qx(1501,"'change' "),og(),Il(1502,"code",41),Qx(1503," 'changeModel'"),og()(),Il(1504,"td",23)(1505,"em")(1506,"strong"),Qx(1507,"(opcional)"),og()(),Il(1508,"p"),Qx(1509,"Controla se o m\xE9todo ser\xE1 executado no disparo do output "),Il(1510,"code"),Qx(1511,"change"),og(),Qx(1512," ou "),Il(1513,"code"),Qx(1514,"change-model"),og(),Qx(1515,"."),og()()()()());},dependencies:[Ka],encapsulation:2})}return l})();var be=(()=>{class l{route;router;sub;hidePoWebSample=true;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(d,r){this.route=d,this.router=r;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let r=d.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:"merge"}),this.activeTab=d;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(r){return new(r||l)(C(Xn),C(En))};static \u0275cmp=Un({type:l,selectors:[["ng-component"]],standalone:false,decls:9,vars:4,consts:[["p-title","Decimal",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,i){r&1&&(Il(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return i.changeTab("doc")}),zl(3,"sample-po-decimal-doc"),og(),Il(4,"po-tab",3),ft("p-click",function(){return i.changeTab("web")}),zl(5,"sample-po-decimal-basic-view")(6,"sample-po-decimal-labs-view")(7,"sample-po-decimal-hourly-wage-view")(8,"sample-po-decimal-hourly-wage-reactive-form-view"),og()()()),r&2&&(nw("p-actions",i.actions),Lp(2),nw("p-active",i.activeTab==="doc"),Lp(2),nw("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[cNe,qme,Yme,de,ce,Ee,he,Se],encapsulation:2})}return l})();var Le=[{path:"",component:be}],xe=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275mod=fe({type:l});static \u0275inj=ue$1({imports:[uL.forChild(Le),uL]})}return l})();var st=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275mod=fe({type:l});static \u0275inj=ue$1({imports:[sr,xe]})}return l})();export{st as DocPoDecimalModule};