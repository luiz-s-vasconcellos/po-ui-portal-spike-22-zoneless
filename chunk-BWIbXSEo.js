import {f as fe,u as ue$1,s as sr,h as hL,w,c3 as Xn,E as En,U as Un,a as f,cM as Q9,cN as lm,cP as che,H as Wl,an as CO,aH as Ka,b8 as Bme,b9 as qme,F as Sl,z as eN,J as og,a1 as ft,L as Lp,ar as $x,au as dg,Q as nw,bs as fN,aX as Z9,aF as G9,aY as q9,aG as _k,aZ as mk,b0 as Qt,b1 as mv,c4 as b3,b4 as L3,cp as Rhe,c8 as wde,aJ as Hhe,c9 as Ghe,aB as wx,aM as ww,aN as e0,aO as Ew,aP as n0,cQ as Mk,cR as Sk,a3 as rNe,aD as Ky,aT as nN,aE as Xy,bd as Nx}from'./main-WP3NAV7C.js';var me=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-decimal-basic"]],standalone:false,decls:1,vars:0,consts:[["name","decimal","p-label","PO Decimal"]],template:function(r,i){r&1&&Wl(0,"po-decimal",0);},dependencies:[che],encapsulation:2,changeDetection:1})}return l})();var ve=l=>({"docs-sample-code-tabs":l}),de=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-decimal-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Decimal Basic"),og(),Sl(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-decimal-basic/sample-po-decimal-basic.component.html"),og(),Sl(13,"pre",7),eN(14,`<po-decimal name="decimal" p-label="PO Decimal"> </po-decimal>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-decimal-basic/sample-po-decimal-basic.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-decimal-basic',
  templateUrl: './sample-po-decimal-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDecimalBasicComponent {}
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-decimal-basic"),og(),Wl(23,"hr")),r&2&&(Lp(5),$x("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,ve,i.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,me],encapsulation:2})}return l})();var se=(()=>{class l{helperText;decimal;decimalsLength;event;help;icon;label;locale;placeholder;properties;thousandMaxlength;errorPattern;max;min;size;localeOptions=[{value:"pt",label:"Portuguese"},{value:"en",label:"English"},{value:"ru",label:"Russian"},{value:"es",label:"Spanish"}];iconOptions=[{value:"an an-shopping-cart-simple",label:"an an-shopping-cart-simple"},{value:"an an-currency-dollar-simple",label:"an an-currency-dollar-simple"},{value:"fa fa-calculator",label:"fa fa-calculator"}];propertiesOptions=[{value:"clean",label:"Clean"},{value:"disabled",label:"Disabled"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"},{value:"compactLabel",label:"Compact Label"},{value:"loading",label:"Loading"},{value:"noAutocomplete",label:"No Autocomplete"},{value:"optional",label:"Optional"},{value:"readonly",label:"Read Only"},{value:"required",label:"Required"},{value:"requiredFieldErrorMessage",label:"Required Field Error Message"},{value:"showRequired",label:"Show Required"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];get maxDecimalsLength(){return 16-this.thousandMaxlength||15}get maxThousandMaxlength(){return 16-this.decimalsLength||13}ngOnInit(){this.restore();}changeEvent(d){this.event=d;}restore(){this.helperText="",this.decimal=void 0,this.decimalsLength=void 0,this.event="",this.help=void 0,this.icon=void 0,this.label=void 0,this.locale=void 0,this.placeholder="",this.thousandMaxlength=void 0,this.errorPattern=void 0,this.max=void 0,this.min=void 0,this.size="medium",this.properties=[];}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-decimal-labs"]],standalone:false,decls:23,vars:46,consts:[["f","ngForm"],["name","decimal",1,"po-md-12",3,"ngModelChange","p-blur","p-change","p-change-model","p-keydown","ngModel","p-helper","p-clean","p-decimals-length","p-disabled","p-help","p-icon","p-label","p-loading","p-locale","p-error-pattern","p-max","p-min","p-no-autocomplete","p-optional","p-placeholder","p-readonly","p-required","p-required-field-error-message","p-show-required","p-size","p-thousand-maxlength","p-label-text-wrap","p-compact-label","p-error-limit"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","errorPattern","p-clean","","p-label","Error Pattern",1,"po-md-6",3,"ngModelChange","ngModel"],["name","icon","p-clean","","p-label","Icon",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel","p-options"],["name","min","p-clean","","p-label","Min",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","max","p-clean","","p-label","Max",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","locale","p-clean","","p-label","Locale",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel","p-options"],["name","decimalsLength","p-clean","","p-help","M\xE1ximo 15","p-label","Decimals max length","p-min","0",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel","p-max"],["name","thousandMaxlength","p-clean","","p-help","M\xE1ximo 13","p-label","Thousand max length","p-min","0",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel","p-max"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(r,i){if(r&1){let p=wx();Sl(0,"po-decimal",1),ww("ngModelChange",function(a){return Ky(p),nN(i.decimal,a)||(i.decimal=a),Xy(a)}),ft("p-blur",function(){return i.changeEvent("p-blur")})("p-change",function(){return i.changeEvent("p-change")})("p-change-model",function(){return i.changeEvent("p-change-model")})("p-keydown",function(){return i.changeEvent("p-keydown")}),og(),e0(),Wl(1,"po-divider"),Sl(2,"div",2),Wl(3,"po-info",3)(4,"po-info",4),og(),Wl(5,"po-divider"),Sl(6,"form",null,0)(8,"po-input",5),ww("ngModelChange",function(a){return Ky(p),nN(i.label,a)||(i.label=a),Xy(a)}),og(),e0(),Sl(9,"po-input",6),ww("ngModelChange",function(a){return Ky(p),nN(i.help,a)||(i.help=a),Xy(a)}),og(),e0(),Sl(10,"po-input",7),ww("ngModelChange",function(a){return Ky(p),nN(i.helperText,a)||(i.helperText=a),Xy(a)}),og(),e0(),Sl(11,"po-input",8),ww("ngModelChange",function(a){return Ky(p),nN(i.placeholder,a)||(i.placeholder=a),Xy(a)}),og(),e0(),Sl(12,"po-input",9),ww("ngModelChange",function(a){return Ky(p),nN(i.errorPattern,a)||(i.errorPattern=a),Xy(a)}),og(),e0(),Sl(13,"po-select",10),ww("ngModelChange",function(a){return Ky(p),nN(i.icon,a)||(i.icon=a),Xy(a)}),og(),e0(),Sl(14,"po-number",11),ww("ngModelChange",function(a){return Ky(p),nN(i.min,a)||(i.min=a),Xy(a)}),og(),e0(),Sl(15,"po-number",12),ww("ngModelChange",function(a){return Ky(p),nN(i.max,a)||(i.max=a),Xy(a)}),og(),e0(),Sl(16,"po-select",13),ww("ngModelChange",function(a){return Ky(p),nN(i.locale,a)||(i.locale=a),Xy(a)}),og(),e0(),Sl(17,"po-number",14),ww("ngModelChange",function(a){return Ky(p),nN(i.decimalsLength,a)||(i.decimalsLength=a),Xy(a)}),og(),e0(),Sl(18,"po-number",15),ww("ngModelChange",function(a){return Ky(p),nN(i.thousandMaxlength,a)||(i.thousandMaxlength=a),Xy(a)}),og(),e0(),Sl(19,"po-checkbox-group",16),ww("ngModelChange",function(a){return Ky(p),nN(i.properties,a)||(i.properties=a),Xy(a)}),og(),e0(),Sl(20,"po-radio-group",17),ww("ngModelChange",function(a){return Ky(p),nN(i.size,a)||(i.size=a),Xy(a)}),og(),e0(),Sl(21,"div",2)(22,"po-button",18),ft("p-click",function(){return i.restore()}),og()()();}r&2&&(Ew("ngModel",i.decimal),nw("p-helper",i.helperText)("p-clean",i.properties.includes("clean"))("p-decimals-length",i.decimalsLength)("p-disabled",i.properties.includes("disabled"))("p-help",i.help)("p-icon",i.icon)("p-label",i.label)("p-loading",i.properties.includes("loading"))("p-locale",i.locale)("p-error-pattern",i.errorPattern)("p-max",i.max)("p-min",i.min)("p-no-autocomplete",i.properties==null?null:i.properties.includes("noAutocomplete"))("p-optional",i.properties.includes("optional"))("p-placeholder",i.placeholder)("p-readonly",i.properties.includes("readonly"))("p-required",i.properties.includes("required"))("p-required-field-error-message",i.properties.includes("requiredFieldErrorMessage"))("p-show-required",i.properties.includes("showRequired"))("p-size",i.size)("p-thousand-maxlength",i.thousandMaxlength)("p-label-text-wrap",i.properties==null?null:i.properties.includes("labelTextWrap"))("p-compact-label",i.properties==null?null:i.properties.includes("compactLabel"))("p-error-limit",i.properties==null?null:i.properties.includes("errorLimit")),n0(),Lp(3),nw("p-value",i.decimal),Lp(),nw("p-value",i.event),Lp(4),Ew("ngModel",i.label),n0(),Lp(),Ew("ngModel",i.help),n0(),Lp(),Ew("ngModel",i.helperText),n0(),Lp(),Ew("ngModel",i.placeholder),n0(),Lp(),Ew("ngModel",i.errorPattern),n0(),Lp(),Ew("ngModel",i.icon),nw("p-options",i.iconOptions),n0(),Lp(),Ew("ngModel",i.min),n0(),Lp(),Ew("ngModel",i.max),n0(),Lp(),Ew("ngModel",i.locale),nw("p-options",i.localeOptions),n0(),Lp(),Ew("ngModel",i.decimalsLength),nw("p-max",i.maxDecimalsLength),n0(),Lp(),Ew("ngModel",i.thousandMaxlength),nw("p-max",i.maxThousandMaxlength),n0(),Lp(),Ew("ngModel",i.properties),nw("p-options",i.propertiesOptions),n0(),Lp(),Ew("ngModel",i.size),nw("p-options",i.sizeOptions),n0());},dependencies:[Z9,G9,q9,_k,mk,Qt,mv,b3,che,L3,Rhe,wde,Hhe,Ghe],encapsulation:2,changeDetection:1})}return l})();var we=l=>({"docs-sample-code-tabs":l}),ce=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-decimal-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Decimal Labs"),og(),Sl(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-decimal-labs/sample-po-decimal-labs.component.html"),og(),Sl(13,"pre",7),eN(14,`<po-decimal
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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-decimal-labs/sample-po-decimal-labs.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-decimal-labs"),og(),Wl(23,"hr")),r&2&&(Lp(5),$x("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,we,i.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,se],encapsulation:2})}return l})();var ue=(()=>{class l{hourlyWage;quantityDaysPerMonth;salary;weekHours;workingDaysPerWeek;calculate(){let d=this.weekHours/this.workingDaysPerWeek*this.quantityDaysPerMonth,r=this.salary/d;this.hourlyWage=r;}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-decimal-hourly-wage"]],standalone:false,decls:16,vars:6,consts:[["f","ngForm"],[1,"po-font-title"],[1,"po-row"],["name","weekHours","p-label","Week Hours","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","workingDaysPerWeek","p-label","Working days per week","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","quantityDaysPerMonth","p-label","Quantity days per month","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","salary","p-decimals-length","2","p-icon","an an-currency-circle-dollar","p-label","Salary","p-required","","p-thousand-maxlength","13",1,"po-md-6",3,"ngModelChange","p-change","ngModel"],["name","hourlyWage","p-decimals-length","2","p-disabled","","p-icon","an an-currency-dollar-simple","p-label","Hourly Wage","p-required","","p-thousand-maxlength","13",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Clean",1,"po-md-3",3,"p-click"],["p-label","Recalculate","p-kind","primary",1,"po-md-3",3,"p-click","p-disabled"]],template:function(r,i){if(r&1){let p=wx();Sl(0,"form",null,0)(2,"div",1),eN(3,"Calculate hourly wage"),og(),Wl(4,"po-divider"),Sl(5,"div",2)(6,"po-number",3),ww("ngModelChange",function(a){return Ky(p),nN(i.weekHours,a)||(i.weekHours=a),Xy(a)}),og(),e0(),Sl(7,"po-number",4),ww("ngModelChange",function(a){return Ky(p),nN(i.workingDaysPerWeek,a)||(i.workingDaysPerWeek=a),Xy(a)}),og(),e0(),og(),Sl(8,"div",2)(9,"po-number",5),ww("ngModelChange",function(a){return Ky(p),nN(i.quantityDaysPerMonth,a)||(i.quantityDaysPerMonth=a),Xy(a)}),og(),e0(),Sl(10,"po-decimal",6),ww("ngModelChange",function(a){return Ky(p),nN(i.salary,a)||(i.salary=a),Xy(a)}),ft("p-change",function(){return i.calculate()}),og(),e0(),og(),Sl(11,"div",2)(12,"po-decimal",7),ww("ngModelChange",function(a){return Ky(p),nN(i.hourlyWage,a)||(i.hourlyWage=a),Xy(a)}),og(),e0(),og(),Sl(13,"div",2)(14,"po-button",8),ft("p-click",function(){Ky(p);let a=Nx(1);return Xy(a.reset())}),og(),Sl(15,"po-button",9),ft("p-click",function(){return i.calculate()}),og()()();}r&2&&(Lp(6),Ew("ngModel",i.weekHours),n0(),Lp(),Ew("ngModel",i.workingDaysPerWeek),n0(),Lp(2),Ew("ngModel",i.quantityDaysPerMonth),n0(),Lp(),Ew("ngModel",i.salary),n0(),Lp(2),Ew("ngModel",i.hourlyWage),n0(),Lp(3),nw("p-disabled",!i.hourlyWage));},dependencies:[Z9,G9,q9,_k,mk,Qt,mv,che,Rhe],encapsulation:2,changeDetection:1})}return l})();var _e=l=>({"docs-sample-code-tabs":l}),Ee=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-decimal-hourly-wage-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Decimal - Hourly Wage"),og(),Sl(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-decimal-hourly-wage/sample-po-decimal-hourly-wage.component.html"),og(),Sl(13,"pre",7),eN(14,`<form #f="ngForm">
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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-decimal-hourly-wage/sample-po-decimal-hourly-wage.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-decimal-hourly-wage"),og(),Wl(23,"hr")),r&2&&(Lp(5),$x("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,_e,i.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,ue],encapsulation:2})}return l})();var ge=(()=>{class l{formBuilder=f(Q9);formCalculateHourlyWage;ngOnInit(){this.formCalculateHourlyWage=this.formBuilder.group({hourlyWage:[null],quantityDaysPerMonth:[null,lm.required],salary:[null,lm.required],weekHours:[null,lm.required],workingDaysPerWeek:[null,lm.required]});}calculate(){let{weekHours:d,workingDaysPerWeek:r,quantityDaysPerMonth:i,salary:p}=this.formCalculateHourlyWage.value,s=d/r*i,a=p/s;this.formCalculateHourlyWage.patchValue({hourlyWage:a});}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-decimal-hourly-wage-reactive-form"]],standalone:false,decls:15,vars:2,consts:[[3,"formGroup"],[1,"po-font-title"],[1,"po-row"],["formControlName","weekHours","p-label","Week Hours",1,"po-md-6"],["formControlName","workingDaysPerWeek","p-label","Working days per week",1,"po-md-6"],["formControlName","quantityDaysPerMonth","p-label","Quantity days per month",1,"po-md-6"],["formControlName","salary","p-decimals-length","2","p-icon","an an-currency-circle-dollar","p-label","Salary","p-thousand-maxlength","13",1,"po-md-6",3,"p-change"],["formControlName","hourlyWage","p-decimals-length","2","p-disabled","","p-icon","an an-currency-dollar-simple","p-label","Hourly Wage","p-thousand-maxlength","13",1,"po-md-6"],["p-label","Clean",1,"po-md-3",3,"p-click"],["p-label","Recalculate","p-kind","primary",1,"po-md-3",3,"p-click","p-disabled"]],template:function(r,i){r&1&&(Sl(0,"form",0)(1,"div",1),eN(2,"Calculate hourly wage"),og(),Wl(3,"po-divider"),Sl(4,"div",2),Wl(5,"po-number",3),e0(),Wl(6,"po-number",4),e0(),og(),Sl(7,"div",2),Wl(8,"po-number",5),e0(),Sl(9,"po-decimal",6),ft("p-change",function(){return i.calculate()}),og(),e0(),og(),Sl(10,"div",2),Wl(11,"po-decimal",7),e0(),og(),Sl(12,"div",2)(13,"po-button",8),ft("p-click",function(){return i.formCalculateHourlyWage.reset()}),og(),Sl(14,"po-button",9),ft("p-click",function(){return i.calculate()}),og()()()),r&2&&(nw("formGroup",i.formCalculateHourlyWage),Lp(5),n0(),Lp(),n0(),Lp(2),n0(),Lp(),n0(),Lp(2),n0(),Lp(3),nw("p-disabled",i.formCalculateHourlyWage.invalid));},dependencies:[Z9,G9,q9,Mk,Sk,Qt,mv,che,Rhe],encapsulation:2,changeDetection:1})}return l})();var qe=l=>({"docs-sample-code-tabs":l}),he=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-decimal-hourly-wage-reactive-form-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Decimal - Hourly Wage Reactive Form"),og(),Sl(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-decimal-hourly-wage-reactive-form/sample-po-decimal-hourly-wage-reactive-form.component.html"),og(),Sl(13,"pre",7),eN(14,`<form [formGroup]="formCalculateHourlyWage">
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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-decimal-hourly-wage-reactive-form/sample-po-decimal-hourly-wage-reactive-form.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-decimal-hourly-wage-reactive-form"),og(),Wl(23,"hr")),r&2&&(Lp(5),$x("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,qe,i.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,ge],encapsulation:2})}return l})();var Se=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-decimal-doc"]],standalone:false,decls:1516,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/grid-system"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","ErrorAsyncProperties"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["href","documentation/po-i18n"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-helper"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","(value)","=>","Observable<boolean>"],["pan","",1,"docs-api-property-type","'change'"],["pan","",1,"docs-api-property-type","'changeModel'"]],template:function(r,i){r&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),eN(3,"import { PoFieldModule } from '@po-ui/ng-components';"),og()(),Sl(4,"div",2)(5,"p"),eN(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),og(),Sl(7,"blockquote")(8,"p"),eN(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),Sl(10,"code"),eN(11,"FormsModule"),og(),eN(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Sl(13,"code"),eN(14,"ReactiveFormsModule"),og(),eN(15,", ambos nativos do Angular."),og()()(),Sl(16,"h3",3),eN(17,"Componente"),og(),Sl(18,"h4",4)(19,"code",5),eN(20,"PoDecimalComponent"),og()(),Sl(21,"div",2)(22,"p"),eN(23,`Este \xE9 um componente baseado em input, com v\xE1rias propriedades do input nativo e outras
propriedades extras como: m\xE1scara, pattern, mensagem de erro e etc.
Voc\xEA deve informar a vari\xE1vel que cont\xE9m o valor como [(ngModel)]="variavel", para que o
input receba o valor da vari\xE1vel e para que ela receba as altera\xE7\xF5es do valor (two-way-databinding).
A propriedade name \xE9 obrigat\xF3ria para que o formul\xE1rio e o model funcionem corretamente.`),og(),Sl(24,"p"),eN(25,"Importante:"),og(),Sl(26,"ul")(27,"li"),eN(28,`Caso o input tenha um [(ngModel)] sem o atributo name, ocorrer\xE1 um erro de angular.
Ent\xE3o voc\xEA precisa informar o atributo name ou o atributo [ngModelOptions]="{standalone: true}".
Exemplo: [(ngModel)]="pessoa.nome" [ngModelOptions]="{standalone: true}".`),og()(),Sl(29,"h4"),eN(30,"Tokens customiz\xE1veis"),og(),Sl(31,"p"),eN(32,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS): "),Wl(33,"br"),eN(34,`
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),Sl(35,"code"),eN(36,".po-input"),og()(),Sl(37,"blockquote")(38,"p"),eN(39,"Para correto alinhamento \xE9 recomendado o uso das classes de espa\xE7amento do "),Sl(40,"a",6),eN(41,"Grid System"),og(),eN(42,"."),og()(),Sl(43,"blockquote")(44,"p"),eN(45,"Para maiores informa\xE7\xF5es, acesse o guia "),Sl(46,"a",7),eN(47,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),eN(48,"."),og()(),Sl(49,"table")(50,"thead")(51,"tr")(52,"th"),eN(53,"Propriedade"),og(),Sl(54,"th"),eN(55,"Descri\xE7\xE3o"),og(),Sl(56,"th"),eN(57,"Valor Padr\xE3o"),og()()(),Sl(58,"tbody")(59,"tr")(60,"td")(61,"strong"),eN(62,"Default Values"),og()(),Wl(63,"td")(64,"td"),og(),Sl(65,"tr")(66,"td")(67,"code"),eN(68,"--font-family"),og()(),Sl(69,"td"),eN(70,"Fam\xEDlia tipogr\xE1fica usada"),og(),Sl(71,"td")(72,"code"),eN(73,"var(--font-family-theme)"),og()()(),Sl(74,"tr")(75,"td")(76,"code"),eN(77,"--font-size"),og()(),Sl(78,"td"),eN(79,"Tamanho da fonte"),og(),Sl(80,"td")(81,"code"),eN(82,"var(--font-size-default)"),og()()(),Sl(83,"tr")(84,"td")(85,"code"),eN(86,"--text-color-placeholder"),og()(),Sl(87,"td"),eN(88,"Cor do texto placeholder"),og(),Sl(89,"td")(90,"code"),eN(91,"var(--color-neutral-light-30)"),og()()(),Sl(92,"tr")(93,"td")(94,"code"),eN(95,"--color"),og()(),Sl(96,"td"),eN(97,"Cor pincipal do input"),og(),Sl(98,"td")(99,"code"),eN(100,"var(--color-neutral-dark-70)"),og()()(),Sl(101,"tr")(102,"td")(103,"code"),eN(104,"--background"),og()(),Sl(105,"td"),eN(106,"Cor de background"),og(),Sl(107,"td")(108,"code"),eN(109,"var(--color-neutral-light-05)"),og()()(),Sl(110,"tr")(111,"td")(112,"code"),eN(113,"--padding"),og()(),Sl(114,"td"),eN(115,"Preenchimento"),og(),Sl(116,"td")(117,"code"),eN(118,"0 0.5rem"),og()()(),Sl(119,"tr")(120,"td")(121,"code"),eN(122,"--text-color"),og()(),Sl(123,"td"),eN(124,"Cor do texto"),og(),Sl(125,"td")(126,"code"),eN(127,"var(--color-neutral-dark-90)"),og()()(),Sl(128,"tr")(129,"td")(130,"code"),eN(131,"--field-container-title-justify"),og()(),Sl(132,"td"),eN(133,"Alinhamento horizontal do t\xEDtulo ("),Sl(134,"code"),eN(135,"justify-content"),og(),eN(136,")"),og(),Sl(137,"td")(138,"code"),eN(139,"space-between"),og()()(),Sl(140,"tr")(141,"td")(142,"code"),eN(143,"--field-container-title-flex"),og()(),Sl(144,"td"),eN(145,"Flex do t\xEDtulo ("),Sl(146,"code"),eN(147,"flex"),og(),eN(148,")"),og(),Sl(149,"td")(150,"code"),eN(151,"1 auto"),og()()(),Sl(152,"tr")(153,"td")(154,"strong"),eN(155,"Hover"),og()(),Wl(156,"td")(157,"td"),og(),Sl(158,"tr")(159,"td")(160,"code"),eN(161,"--color-hover"),og()(),Sl(162,"td"),eN(163,"Cor principal no estado hover"),og(),Sl(164,"td")(165,"code"),eN(166,"var(--color-brand-01-dark)"),og()()(),Sl(167,"tr")(168,"td")(169,"code"),eN(170,"--background-hover"),og()(),Sl(171,"td"),eN(172,"Cor de background no estado hover"),og(),Sl(173,"td")(174,"code"),eN(175,"var(--color-brand-01-lightest)"),og()()(),Sl(176,"tr")(177,"td")(178,"strong"),eN(179,"Focused"),og()(),Wl(180,"td")(181,"td"),og(),Sl(182,"tr")(183,"td")(184,"code"),eN(185,"--color-focused"),og()(),Sl(186,"td"),eN(187,"Cor principal no estado de focus"),og(),Sl(188,"td")(189,"code"),eN(190,"var(--color-action-default)"),og()()(),Sl(191,"tr")(192,"td")(193,"code"),eN(194,"--outline-color-focused"),og()(),Sl(195,"td"),eN(196,"Cor do outline do estado de focus"),og(),Sl(197,"td")(198,"code"),eN(199,"var(--color-action-focus)"),og()()(),Sl(200,"tr")(201,"td")(202,"strong"),eN(203,"Disabled"),og()(),Wl(204,"td")(205,"td"),og(),Sl(206,"tr")(207,"td")(208,"code"),eN(209,"--color-disabled"),og()(),Sl(210,"td"),eN(211,"Cor principal no estado disabled"),og(),Sl(212,"td")(213,"code"),eN(214,"var(--color-neutral-light-30)"),og()()(),Sl(215,"tr")(216,"td")(217,"code"),eN(218,"--background-disabled"),og()(),Sl(219,"td"),eN(220,"Cor de background no estado disabled"),og(),Sl(221,"td")(222,"code"),eN(223,"var(--color-neutral-light-20)"),og()()(),Sl(224,"tr")(225,"td")(226,"code"),eN(227,"--text-color-disabled"),og()(),Sl(228,"td"),eN(229,"Cor do texto no estado disabled"),og(),Sl(230,"td")(231,"code"),eN(232,"var(--color-neutral-dark-70)"),og()()()()(),Sl(233,"p"),Wl(234,"br"),eN(235," - O "),Sl(236,"code"),eN(237,"po-decimal"),og(),eN(238," \xE9 um "),Sl(239,"em"),eN(240,"input"),og(),eN(241," espec\xEDfico para receber apenas n\xFAmeros decimais, por isso recebe as seguintes caracter\xEDsticas:"),og(),Sl(242,"ul")(243,"li"),eN(244,"Aceita apenas n\xFAmeros;"),og(),Sl(245,"li"),eN(246,"Utiliza ',' como separador de decimal;"),og(),Sl(247,"li"),eN(248,"Utiliza '.' para separa\xE7\xE3o de milhar;"),og(),Sl(249,"li"),eN(250,"\xC9 poss\xEDvel configurar a quantidade de casas decimais e a quantidade de digitos do campo."),og()(),Sl(251,"blockquote")(252,"p")(253,"strong"),eN(254,"Importante:"),og(),eN(255,`
Atualmente o JavaScript limita-se a um conjunto de dados de `),Sl(256,"code"),eN(257,"32 bits"),og(),eN(258,`, e para que os valores comportem-se devidamente,
o `),Sl(259,"code"),eN(260,"po-decimal"),og(),eN(261,` cont\xE9m um tratamento que limita em 16 o n\xFAmero total de casas antes e ap\xF3s a v\xEDrgula.
Veja abaixo as demais regras nas documenta\xE7\xF5es de `),Sl(262,"code"),eN(263,"p-decimals-length"),og(),eN(264," e "),Sl(265,"code"),eN(266,"p-thousand-maxlength"),og(),eN(267,"."),og()()(),Sl(268,"div",8)(269,"h4",9),eN(270,"Seletor"),og(),Sl(271,"pre",10),eN(272,`<po-decimal
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
`),og()(),Sl(273,"h4",11),eN(274,"Propriedades"),og(),Sl(275,"table",12)(276,"tr",13)(277,"th",14),eN(278,"Nome"),og(),Sl(279,"th",14),eN(280,"Tipo"),og(),Sl(281,"th",14),eN(282,"Padr\xE3o"),og(),Sl(283,"th",14),eN(284,"Descri\xE7\xE3o"),og()(),Sl(285,"tr",15)(286,"td",16)(287,"div",17)(288,"span",18),eN(289," (p-additional-help)"),Wl(290,"br"),og()(),Sl(291,"div",19),eN(292,"Deprecated"),og()(),Sl(293,"td",20)(294,"code",21),eN(295,"EventEmitter"),og()(),Sl(296,"td",22),eN(297,"-"),og(),Sl(298,"td",23)(299,"em")(300,"strong"),eN(301,"(opcional)"),og()(),Sl(302,"p"),eN(303,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),og(),Sl(304,"blockquote")(305,"p"),eN(306,"Essa propriedade est\xE1 "),Sl(307,"strong"),eN(308,"depreciada"),og(),eN(309," e ser\xE1 removida na vers\xE3o "),Sl(310,"code"),eN(311,"23.x.x"),og(),eN(312,". Recomendamos utilizar a propriedade "),Sl(313,"code"),eN(314,"p-helper"),og(),eN(315," que oferece mais recursos e flexibilidade."),og()()()(),Sl(316,"tr",15)(317,"td",16)(318,"div",24)(319,"span",25),eN(320," p-additional-help-tooltip"),Wl(321,"br"),og()(),Sl(322,"div",19),eN(323,"Deprecated"),og()(),Sl(324,"td",20)(325,"code",26),eN(326,"string"),og()(),Sl(327,"td",22),eN(328,"-"),og(),Sl(329,"td",23)(330,"em")(331,"strong"),eN(332,"(opcional)"),og()(),Sl(333,"p"),eN(334,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),Sl(335,"code"),eN(336,"po-helper"),og(),eN(337,`.
`),Sl(338,"strong"),eN(339,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),og()(),Sl(340,"blockquote")(341,"p"),eN(342,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),og()(),Sl(343,"blockquote")(344,"p"),eN(345,"Essa propriedade est\xE1 "),Sl(346,"strong"),eN(347,"depreciada"),og(),eN(348," e ser\xE1 removida na vers\xE3o "),Sl(349,"code"),eN(350,"23.x.x"),og(),eN(351,". Recomendamos utilizar a propriedade "),Sl(352,"code"),eN(353,"p-helper"),og(),eN(354," que oferece mais recursos e flexibilidade."),og()()()(),Sl(355,"tr",15)(356,"td",16)(357,"div",24)(358,"span",25),eN(359," p-append-in-body"),Wl(360,"br"),og()()(),Sl(361,"td",20)(362,"code",27),eN(363,"boolean"),og()(),Sl(364,"td",22)(365,"p")(366,"code"),eN(367,"false"),og()()(),Sl(368,"td",23)(369,"em")(370,"strong"),eN(371,"(opcional)"),og()(),Sl(372,"p"),eN(373,"Define que o popover ("),Sl(374,"code"),eN(375,"p-helper"),og(),eN(376," e/ou "),Sl(377,"code"),eN(378,"p-error-limit"),og(),eN(379,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),og(),Sl(380,"blockquote")(381,"p"),eN(382,"Quando utilizado com "),Sl(383,"code"),eN(384,"p-helper"),og(),eN(385,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),og()()()(),Sl(386,"tr",15)(387,"td",16)(388,"div",24)(389,"span",25),eN(390," p-auto-focus"),Wl(391,"br"),og()()(),Sl(392,"td",20)(393,"code",27),eN(394,"boolean"),og()(),Sl(395,"td",22)(396,"p")(397,"code"),eN(398,"false"),og()()(),Sl(399,"td",23)(400,"em")(401,"strong"),eN(402,"(opcional)"),og()(),Sl(403,"p"),eN(404,"Aplica foco no elemento ao ser iniciado."),og(),Sl(405,"blockquote")(406,"p"),eN(407,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),og()()()(),Sl(408,"tr",15)(409,"td",16)(410,"div",17)(411,"span",18),eN(412," (p-blur)"),Wl(413,"br"),og()()(),Sl(414,"td",20)(415,"code",21),eN(416,"EventEmitter"),og()(),Sl(417,"td",22),eN(418,"-"),og(),Sl(419,"td",23)(420,"em")(421,"strong"),eN(422,"(opcional)"),og()(),Sl(423,"p"),eN(424,"Evento disparado ao sair do campo."),og()()(),Sl(425,"tr",15)(426,"td",16)(427,"div",17)(428,"span",18),eN(429," (p-change)"),Wl(430,"br"),og()()(),Sl(431,"td",20)(432,"code",21),eN(433,"EventEmitter"),og()(),Sl(434,"td",22),eN(435,"-"),og(),Sl(436,"td",23)(437,"em")(438,"strong"),eN(439,"(opcional)"),og()(),Sl(440,"p"),eN(441,"Evento disparado ao alterar valor e deixar o campo."),og()()(),Sl(442,"tr",15)(443,"td",16)(444,"div",17)(445,"span",18),eN(446," (p-change-model)"),Wl(447,"br"),og()()(),Sl(448,"td",20)(449,"code",21),eN(450,"EventEmitter"),og()(),Sl(451,"td",22),eN(452,"-"),og(),Sl(453,"td",23)(454,"em")(455,"strong"),eN(456,"(opcional)"),og()(),Sl(457,"p"),eN(458,"Evento disparado ao alterar valor do model."),og()()(),Sl(459,"tr",15)(460,"td",16)(461,"div",24)(462,"span",25),eN(463,"p-clean"),Wl(464,"br"),og()()(),Sl(465,"td",20)(466,"code",27),eN(467,"boolean"),og()(),Sl(468,"td",22),eN(469,"-"),og(),Sl(470,"td",23)(471,"em")(472,"strong"),eN(473,"(opcional)"),og()(),Sl(474,"p"),eN(475,"Se verdadeiro, o campo receber\xE1 um bot\xE3o para ser limpo."),og()()(),Sl(476,"tr",15)(477,"td",16)(478,"div",24)(479,"span",25),eN(480," p-compact-label"),Wl(481,"br"),og()()(),Sl(482,"td",20)(483,"code",27),eN(484,"boolean"),og()(),Sl(485,"td",22)(486,"p")(487,"code"),eN(488,"false"),og()()(),Sl(489,"td",23)(490,"em")(491,"strong"),eN(492,"(opcional)"),og()(),Sl(493,"p"),eN(494,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),og(),Sl(495,"p"),eN(496,"Quando habilitado ("),Sl(497,"code"),eN(498,"true"),og(),eN(499,"), o modo compacto afeta o conjunto composto por:"),og(),Sl(500,"ul")(501,"li")(502,"code"),eN(503,"po-label"),og()(),Sl(504,"li")(505,"code"),eN(506,"p-requirement (showRequired)"),og()(),Sl(507,"li")(508,"code"),eN(509,"po-helper"),og()()(),Sl(510,"p"),eN(511,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),og(),Sl(512,"p"),eN(513,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),og(),Sl(514,"ul")(515,"li")(516,"code"),eN(517,"--field-container-title-justify"),og()(),Sl(518,"li")(519,"code"),eN(520,"--field-container-title-flex"),og()()(),Sl(521,"p"),eN(522,"Exemplo:"),og(),Sl(523,"pre")(524,"code"),eN(525,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),og()(),Sl(526,"p"),eN(527,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),og()()(),Sl(528,"tr",15)(529,"td",16)(530,"div",24)(531,"span",25),eN(532," p-decimals-length"),Wl(533,"br"),og()()(),Sl(534,"td",20)(535,"code",28),eN(536,"number"),og()(),Sl(537,"td",22)(538,"p")(539,"code"),eN(540,"2"),og()()(),Sl(541,"td",23)(542,"em")(543,"strong"),eN(544,"(opcional)"),og()(),Sl(545,"p"),eN(546,"Quantidade m\xE1xima de casas decimais."),og(),Sl(547,"blockquote")(548,"p")(549,"strong"),eN(550,"Importante:"),og()()(),Sl(551,"ul")(552,"li"),eN(553,"O valor m\xE1ximo permitido \xE9 15;"),og(),Sl(554,"li"),eN(555,"A soma total de "),Sl(556,"code"),eN(557,"p-decimals-length"),og(),eN(558," com "),Sl(559,"code"),eN(560,"p-thousand-maxlength"),og(),eN(561," limita-se \xE0 16;"),og(),Sl(562,"li"),eN(563,"Esta propriedade sobrep\xF5e apenas o valor "),Sl(564,"strong"),eN(565,"padr\xE3o"),og(),eN(566," de "),Sl(567,"code"),eN(568,"p-thousand-maxlength"),og(),eN(569,";"),og(),Sl(570,"li"),eN(571,"Caso "),Sl(572,"code"),eN(573,"p-thousand-maxlength"),og(),eN(574," tenha um valor definido, esta propriedade poder\xE1 receber apenas o valor restante do limite total (16)."),og()()()(),Sl(575,"tr",15)(576,"td",16)(577,"div",24)(578,"span",25),eN(579,"p-disabled"),Wl(580,"br"),og()()(),Sl(581,"td",20)(582,"code",27),eN(583,"boolean"),og()(),Sl(584,"td",22)(585,"p")(586,"code"),eN(587,"false"),og()()(),Sl(588,"td",23)(589,"em")(590,"strong"),eN(591,"(opcional)"),og()(),Sl(592,"p"),eN(593,"Se verdadeiro, desabilita o campo."),og()()(),Sl(594,"tr",15)(595,"td",16)(596,"div",24)(597,"span",25),eN(598," p-emit-all-changes"),Wl(599,"br"),og()()(),Sl(600,"td",20)(601,"code",27),eN(602,"boolean"),og()(),Sl(603,"td",22)(604,"p")(605,"code"),eN(606,"false"),og()()(),Sl(607,"td",23)(608,"em")(609,"strong"),eN(610,"(opcional)"),og()(),Sl(611,"p"),eN(612,"Sempre emite as altera\xE7\xF5es do model mesmo quando o valor atual for igual ao valor anterior."),og()()(),Sl(613,"tr",15)(614,"td",16)(615,"div",17)(616,"span",18),eN(617," (p-enter)"),Wl(618,"br"),og()()(),Sl(619,"td",20)(620,"code",21),eN(621,"EventEmitter"),og()(),Sl(622,"td",22),eN(623,"-"),og(),Sl(624,"td",23)(625,"em")(626,"strong"),eN(627,"(opcional)"),og()(),Sl(628,"p"),eN(629,"Evento disparado ao entrar do campo."),og()()(),Sl(630,"tr",15)(631,"td",16)(632,"div",24)(633,"span",25),eN(634," p-error-async-properties"),Wl(635,"br"),og()()(),Sl(636,"td",20)(637,"code",29),eN(638,"ErrorAsyncProperties"),og()(),Sl(639,"td",22),eN(640,"-"),og(),Sl(641,"td",23)(642,"em")(643,"strong"),eN(644,"(opcional)"),og()(),Sl(645,"p"),eN(646,`Realiza alguma valida\xE7\xE3o customizada ass\xEDncrona no componente.
Aconselhamos a utiliza\xE7\xE3o dessa propriedade somente em componentes que n\xE3o estejam
utilizando `),Sl(647,"code"),eN(648,"Reactive Forms"),og(),eN(649,". Em formul\xE1rios reativos, pode-se utilizar o pr\xF3prio "),Sl(650,"code"),eN(651,"asyncValidators"),og(),eN(652,"."),og()()(),Sl(653,"tr",15)(654,"td",16)(655,"div",24)(656,"span",25),eN(657," p-error-limit"),Wl(658,"br"),og()()(),Sl(659,"td",20)(660,"code",27),eN(661,"boolean"),og()(),Sl(662,"td",22)(663,"p")(664,"code"),eN(665,"false"),og()()(),Sl(666,"td",23)(667,"em")(668,"strong"),eN(669,"(opcional)"),og()(),Sl(670,"p"),eN(671,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),og(),Sl(672,"blockquote")(673,"p"),eN(674,"Caso essa propriedade seja definida como "),Sl(675,"code"),eN(676,"true"),og(),eN(677,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),og()()()(),Sl(678,"tr",15)(679,"td",16)(680,"div",24)(681,"span",25),eN(682," p-error-pattern"),Wl(683,"br"),og()()(),Sl(684,"td",20)(685,"code",26),eN(686,"string"),og()(),Sl(687,"td",22),eN(688,"-"),og(),Sl(689,"td",23)(690,"em")(691,"strong"),eN(692,"(opcional)"),og()(),Sl(693,"p"),eN(694,"Mensagem que ser\xE1 apresentada quando o "),Sl(695,"code"),eN(696,"pattern"),og(),eN(697," ou a m\xE1scara n\xE3o for satisfeita."),og(),Sl(698,"blockquote")(699,"p"),eN(700,`Por padr\xE3o, esta mensagem n\xE3o \xE9 apresentada quando o campo estiver vazio, mesmo que ele seja requerido.
Para exibir a mensagem com o campo vazio, utilize a propriedade `),Sl(701,"code"),eN(702,"p-required-field-error-message"),og(),eN(703," em conjunto."),og()()()(),Sl(704,"tr",15)(705,"td",16)(706,"div",24)(707,"span",25),eN(708," p-help"),Wl(709,"br"),og()()(),Sl(710,"td",20)(711,"code",26),eN(712,"string"),og()(),Sl(713,"td",22),eN(714,"-"),og(),Sl(715,"td",23)(716,"em")(717,"strong"),eN(718,"(opcional)"),og()(),Sl(719,"p"),eN(720,"Texto de apoio do campo."),og()()(),Sl(721,"tr",15)(722,"td",16)(723,"div",24)(724,"span",25),eN(725," p-icon"),Wl(726,"br"),og()()(),Sl(727,"td",20)(728,"code",26),eN(729,"string "),og(),Sl(730,"code",30),eN(731," TemplateRef<void>"),og()(),Sl(732,"td",22),eN(733,"-"),og(),Sl(734,"td",23)(735,"em")(736,"strong"),eN(737,"(opcional)"),og()(),Sl(738,"p"),eN(739,"Define o \xEDcone que ser\xE1 exibido no in\xEDcio do campo."),og(),Sl(740,"p"),eN(741,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),Sl(742,"a",31),eN(743,"Biblioteca de \xEDcones"),og(),eN(744,". conforme exemplo abaixo:"),og(),Sl(745,"pre")(746,"code"),eN(747,`<po-input p-icon="an an-user" p-label="PO input"></po-input>
`),og()(),Sl(748,"p"),eN(749,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),Sl(750,"em"),eN(751,"Font Awesome"),og(),eN(752,", da seguinte forma:"),og(),Sl(753,"pre")(754,"code"),eN(755,`<po-input p-icon="fa fa-podcast" p-label="PO input"></po-input>
`),og()(),Sl(756,"p"),eN(757,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),Sl(758,"code"),eN(759,"TemplateRef"),og(),eN(760,", conforme exemplo abaixo:"),og(),Sl(761,"pre")(762,"code"),eN(763,`<po-input [p-icon]="template" p-label="input template ionic"></po-input>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),og()(),Sl(764,"blockquote")(765,"p"),eN(766,"Para o \xEDcone enquadrar corretamente, deve-se utilizar "),Sl(767,"code"),eN(768,"font-size: inherit"),og(),eN(769," caso o \xEDcone utilizado n\xE3o aplique-o."),og()()()(),Sl(770,"tr",15)(771,"td",16)(772,"div",17)(773,"span",18),eN(774," (p-keydown)"),Wl(775,"br"),og()()(),Sl(776,"td",20)(777,"code",21),eN(778,"EventEmitter"),og()(),Sl(779,"td",22),eN(780,"-"),og(),Sl(781,"td",23)(782,"em")(783,"strong"),eN(784,"(opcional)"),og()(),Sl(785,"p"),eN(786,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Sl(787,"code"),eN(788,"KeyboardEvent"),og(),eN(789," com informa\xE7\xF5es sobre a tecla."),og()()(),Sl(790,"tr",15)(791,"td",16)(792,"div",24)(793,"span",25),eN(794," p-label"),Wl(795,"br"),og()()(),Sl(796,"td",20)(797,"code",26),eN(798,"string"),og()(),Sl(799,"td",22),eN(800,"-"),og(),Sl(801,"td",23)(802,"em")(803,"strong"),eN(804,"(opcional)"),og()(),Sl(805,"p"),eN(806,"R\xF3tulo do campo."),og()()(),Sl(807,"tr",15)(808,"td",16)(809,"div",24)(810,"span",25),eN(811," p-label-text-wrap"),Wl(812,"br"),og()()(),Sl(813,"td",20)(814,"code",27),eN(815,"boolean"),og()(),Sl(816,"td",22)(817,"p")(818,"code"),eN(819,"false"),og()()(),Sl(820,"td",23)(821,"em")(822,"strong"),eN(823,"(opcional)"),og()(),Sl(824,"p"),eN(825,"Habilita a quebra autom\xE1tica do texto da propriedade "),Sl(826,"code"),eN(827,"p-label"),og(),eN(828,". Quando "),Sl(829,"code"),eN(830,"p-label-text-wrap"),og(),eN(831,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),og()()(),Sl(832,"tr",15)(833,"td",16)(834,"div",24)(835,"span",25),eN(836," p-loading"),Wl(837,"br"),og()()(),Sl(838,"td",20)(839,"code",27),eN(840,"boolean"),og()(),Sl(841,"td",22)(842,"p")(843,"code"),eN(844,"false"),og()()(),Sl(845,"td",23)(846,"em")(847,"strong"),eN(848,"(opcional)"),og()(),Sl(849,"p"),eN(850,"Exibe um \xEDcone de carregamento no lado direito do campo para sinalizar que uma opera\xE7\xE3o est\xE1 em andamento."),og()()(),Sl(851,"tr",15)(852,"td",16)(853,"div",24)(854,"span",25),eN(855," p-locale"),Wl(856,"br"),og()()(),Sl(857,"td",20)(858,"code",26),eN(859,"string"),og()(),Sl(860,"td",22),eN(861,"-"),og(),Sl(862,"td",23)(863,"em")(864,"strong"),eN(865,"(opcional)"),og()(),Sl(866,"p"),eN(867,`Informa o locale(pa\xEDs) para a formata\xE7\xE3o do valor.
Por padr\xE3o o valor ser\xE1 configurado segundo a o m\xF3dulo `),Sl(868,"a",32)(869,"code"),eN(870,"I18n"),og()()(),Sl(871,"blockquote")(872,"p"),eN(873,"Para ver quais linguagens suportadas acesse "),Sl(874,"a",32)(875,"code"),eN(876,"I18n"),og()()()()()(),Sl(877,"tr",15)(878,"td",16)(879,"div",24)(880,"span",25),eN(881,"p-mask"),Wl(882,"br"),og()()(),Sl(883,"td",20)(884,"code",26),eN(885,"string"),og()(),Sl(886,"td",22),eN(887,"-"),og(),Sl(888,"td",23)(889,"em")(890,"strong"),eN(891,"(opcional)"),og()(),Sl(892,"p"),eN(893,`Indica uma m\xE1scara para o campo. Exemplos: (+99) (99) 99999?-9999, 99999-999, 999.999.999-99.
A m\xE1scara gera uma valida\xE7\xE3o autom\xE1tica do campo, podendo esta ser substitu\xEDda por um REGEX espec\xEDfico
atrav\xE9s da propriedade p-pattern.
O campo ser\xE1 sinalizado e o formul\xE1rio ficar\xE1 inv\xE1lido quando o valor informado estiver fora do padr\xE3o definido,
mesmo quando desabilitado.`),og()()(),Sl(894,"tr",15)(895,"td",16)(896,"div",24)(897,"span",25),eN(898,"p-mask-format-model"),Wl(899,"br"),og()()(),Sl(900,"td",20)(901,"code",27),eN(902,"boolean"),og()(),Sl(903,"td",22)(904,"p")(905,"code"),eN(906,"false"),og()()(),Sl(907,"td",23)(908,"em")(909,"strong"),eN(910,"(opcional)"),og()(),Sl(911,"p"),eN(912,"Indica se o "),Sl(913,"code"),eN(914,"model"),og(),eN(915," receber\xE1 o valor formatado pela m\xE1scara ou apenas o valor puro (sem formata\xE7\xE3o)."),og()()(),Sl(916,"tr",15)(917,"td",16)(918,"div",24)(919,"span",25),eN(920," p-mask-no-length-validation"),Wl(921,"br"),og()()(),Sl(922,"td",20)(923,"code",27),eN(924,"boolean"),og()(),Sl(925,"td",22)(926,"p")(927,"code"),eN(928,"false"),og()()(),Sl(929,"td",23)(930,"p"),eN(931,"Controla como o componente aplica as valida\xE7\xF5es de comprimento m\xEDnimo ("),Sl(932,"code"),eN(933,"minLength"),og(),eN(934,") e m\xE1ximo ("),Sl(935,"code"),eN(936,"maxLength"),og(),eN(937,") quando h\xE1 uma m\xE1scara ("),Sl(938,"code"),eN(939,"p-mask"),og(),eN(940,") definida."),og(),Sl(941,"ul")(942,"li"),eN(943,"Quando "),Sl(944,"code"),eN(945,"true"),og(),eN(946,", apenas os caracteres alfanum\xE9ricos ser\xE3o contabilizados para a valida\xE7\xE3o dos comprimentos."),og(),Sl(947,"li"),eN(948,"Quando "),Sl(949,"code"),eN(950,"false"),og(),eN(951,", todos os caracteres, incluindo os especiais da m\xE1scara, ser\xE3o considerados na valida\xE7\xE3o."),og()(),Sl(952,"blockquote")(953,"p"),eN(954,"Esta propriedade \xE9 ignorada quando utilizada em conjunto com "),Sl(955,"code"),eN(956,"p-mask-format-model"),og(),eN(957,"."),og()(),Sl(958,"p"),eN(959,"Exemplo:"),og(),Sl(960,"pre")(961,"code"),eN(962,`<po-input
  p-mask="999-999"
  p-maxlength="6"
  p-minlength="4"
  p-mask-no-length-validation="true"
></po-input>
`),og()(),Sl(963,"ul")(964,"li"),eN(965,"Entrada: "),Sl(966,"code"),eN(967,"123-456"),og(),eN(968," \u2192 Valida\xE7\xE3o ser\xE1 aplicada somente aos n\xFAmeros, ignorando o caractere especial "),Sl(969,"code"),eN(970,"-"),og(),eN(971,"."),og()()()(),Sl(972,"tr",15)(973,"td",16)(974,"div",24)(975,"span",25),eN(976," p-max"),Wl(977,"br"),og()()(),Sl(978,"td",20)(979,"code",28),eN(980,"number"),og()(),Sl(981,"td",22),eN(982,"-"),og(),Sl(983,"td",23)(984,"em")(985,"strong"),eN(986,"(opcional)"),og()(),Sl(987,"p"),eN(988,"Valor m\xE1ximo."),og()()(),Sl(989,"tr",15)(990,"td",16)(991,"div",24)(992,"span",25),eN(993," p-maxlength"),Wl(994,"br"),og()()(),Sl(995,"td",20)(996,"code",28),eN(997,"number"),og()(),Sl(998,"td",22),eN(999,"-"),og(),Sl(1e3,"td",23)(1001,"em")(1002,"strong"),eN(1003,"(opcional)"),og()(),Sl(1004,"p"),eN(1005,"Indica a quantidade m\xE1xima de caracteres que o campo aceita."),og()()(),Sl(1006,"tr",15)(1007,"td",16)(1008,"div",24)(1009,"span",25),eN(1010," p-min"),Wl(1011,"br"),og()()(),Sl(1012,"td",20)(1013,"code",28),eN(1014,"number"),og()(),Sl(1015,"td",22),eN(1016,"-"),og(),Sl(1017,"td",23)(1018,"em")(1019,"strong"),eN(1020,"(opcional)"),og()(),Sl(1021,"p"),eN(1022,"Valor m\xEDnimo."),og()()(),Sl(1023,"tr",15)(1024,"td",16)(1025,"div",24)(1026,"span",25),eN(1027," p-minlength"),Wl(1028,"br"),og()()(),Sl(1029,"td",20)(1030,"code",28),eN(1031,"number"),og()(),Sl(1032,"td",22),eN(1033,"-"),og(),Sl(1034,"td",23)(1035,"em")(1036,"strong"),eN(1037,"(opcional)"),og()(),Sl(1038,"p"),eN(1039,"Indica a quantidade m\xEDnima de caracteres que o campo aceita."),og()()(),Sl(1040,"tr",15)(1041,"td",16)(1042,"div",24)(1043,"span",25),eN(1044," name"),Wl(1045,"br"),og()()(),Sl(1046,"td",20)(1047,"code",26),eN(1048,"string"),og()(),Sl(1049,"td",22),eN(1050,"-"),og(),Sl(1051,"td",23)(1052,"p"),eN(1053,"Nome e identificador do campo."),og()()(),Sl(1054,"tr",15)(1055,"td",16)(1056,"div",24)(1057,"span",25),eN(1058," p-no-autocomplete"),Wl(1059,"br"),og()()(),Sl(1060,"td",20)(1061,"code",27),eN(1062,"boolean"),og()(),Sl(1063,"td",22)(1064,"p")(1065,"code"),eN(1066,"false"),og()()(),Sl(1067,"td",23)(1068,"em")(1069,"strong"),eN(1070,"(opcional)"),og()(),Sl(1071,"p"),eN(1072,"Define a propriedade nativa "),Sl(1073,"code"),eN(1074,"autocomplete"),og(),eN(1075," do campo como "),Sl(1076,"code"),eN(1077,"off"),og(),eN(1078,"."),og(),Sl(1079,"blockquote")(1080,"p"),eN(1081,"No componente "),Sl(1082,"code"),eN(1083,"po-password"),og(),eN(1084," ser\xE1 definido como "),Sl(1085,"code"),eN(1086,"new-password"),og(),eN(1087,"."),og()(),Sl(1088,"p"),eN(1089,"Nos componentes "),Sl(1090,"code"),eN(1091,"po-password"),og(),eN(1092," e "),Sl(1093,"code"),eN(1094,"po-login"),og(),eN(1095," o valor padr\xE3o ser\xE1 "),Sl(1096,"code"),eN(1097,"true"),og(),eN(1098,"."),og()()(),Sl(1099,"tr",15)(1100,"td",16)(1101,"div",24)(1102,"span",25),eN(1103," p-optional"),Wl(1104,"br"),og()()(),Sl(1105,"td",20)(1106,"code",27),eN(1107,"boolean"),og()(),Sl(1108,"td",22)(1109,"p")(1110,"code"),eN(1111,"false"),og()()(),Sl(1112,"td",23)(1113,"em")(1114,"strong"),eN(1115,"(opcional)"),og()(),Sl(1116,"p"),eN(1117,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),og(),Sl(1118,"blockquote")(1119,"p"),eN(1120,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),og()(),Sl(1121,"ul")(1122,"li"),eN(1123,"O campo conter "),Sl(1124,"code"),eN(1125,"p-required"),og(),eN(1126,";"),og(),Sl(1127,"li"),eN(1128,"N\xE3o possuir "),Sl(1129,"code"),eN(1130,"p-help"),og(),eN(1131," e/ou "),Sl(1132,"code"),eN(1133,"p-label"),og(),eN(1134,"."),og()()()(),Sl(1135,"tr",15)(1136,"td",16)(1137,"div",24)(1138,"span",25),eN(1139,"p-pattern"),Wl(1140,"br"),og()()(),Sl(1141,"td",20)(1142,"code",26),eN(1143,"string"),og()(),Sl(1144,"td",22),eN(1145,"-"),og(),Sl(1146,"td",23)(1147,"em")(1148,"strong"),eN(1149,"(opcional)"),og()(),Sl(1150,"p"),eN(1151,`Express\xE3o regular para validar o campo.
Quando o campo possuir uma m\xE1scara `),Sl(1152,"code"),eN(1153,"(p-mask)"),og(),eN(1154,` ser\xE1 automaticamente validado por ela, por\xE9m
\xE9 poss\xEDvel definir um p-pattern para substituir a valida\xE7\xE3o da m\xE1scara.`),og()()(),Sl(1155,"tr",15)(1156,"td",16)(1157,"div",24)(1158,"span",25),eN(1159," p-placeholder"),Wl(1160,"br"),og()()(),Sl(1161,"td",20)(1162,"code",26),eN(1163,"string"),og()(),Sl(1164,"td",22)(1165,"p"),eN(1166,"''"),og()(),Sl(1167,"td",23)(1168,"em")(1169,"strong"),eN(1170,"(opcional)"),og()(),Sl(1171,"p"),eN(1172,"Mensagem que aparecer\xE1 enquanto o campo n\xE3o estiver preenchido."),og()()(),Sl(1173,"tr",15)(1174,"td",16)(1175,"div",24)(1176,"span",25),eN(1177," p-helper"),Wl(1178,"br"),og()()(),Sl(1179,"td",20)(1180,"code",33),eN(1181,"PoHelperOptions "),og(),Sl(1182,"code",26),eN(1183," string"),og()(),Sl(1184,"td",22),eN(1185,"-"),og(),Sl(1186,"td",23)(1187,"em")(1188,"strong"),eN(1189,"(opcional)"),og()(),Sl(1190,"p"),eN(1191,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label quando a propriedade "),Sl(1192,"code"),eN(1193,"p-label"),og(),eN(1194," for definida, ou, ao lado do componente na aus\xEAncia da propriedade "),Sl(1195,"code"),eN(1196,"p-label"),og(),eN(1197,"."),og(),Sl(1198,"blockquote")(1199,"p"),eN(1200,"Para mais informa\xE7\xF5es acesse: "),Sl(1201,"a",34),eN(1202,"https://po-ui.io/documentation/po-helper"),og(),eN(1203,"."),og()(),Sl(1204,"blockquote")(1205,"p"),eN(1206,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),Sl(1207,"code"),eN(1208,"p-additional-help-tooltip"),og(),eN(1209," e "),Sl(1210,"code"),eN(1211,"p-additional-help"),og(),eN(1212,") ser\xE1 ignorado."),og()()()(),Sl(1213,"tr",15)(1214,"td",16)(1215,"div",24)(1216,"span",25),eN(1217,"p-readonly"),Wl(1218,"br"),og()()(),Sl(1219,"td",20)(1220,"code",27),eN(1221,"boolean"),og()(),Sl(1222,"td",22),eN(1223,"-"),og(),Sl(1224,"td",23)(1225,"em")(1226,"strong"),eN(1227,"(opcional)"),og()(),Sl(1228,"p"),eN(1229,"Indica que o campo ser\xE1 somente leitura."),og()()(),Sl(1230,"tr",15)(1231,"td",16)(1232,"div",24)(1233,"span",25),eN(1234,"p-required"),Wl(1235,"br"),og()()(),Sl(1236,"td",20)(1237,"code",27),eN(1238,"boolean"),og()(),Sl(1239,"td",22)(1240,"p")(1241,"code"),eN(1242,"false"),og()()(),Sl(1243,"td",23)(1244,"em")(1245,"strong"),eN(1246,"(opcional)"),og()(),Sl(1247,"p"),eN(1248,"Define que o campo ser\xE1 obrigat\xF3rio."),og(),Sl(1249,"blockquote")(1250,"p"),eN(1251,"Esta propriedade \xE9 desconsiderada quando o input est\xE1 desabilitado "),Sl(1252,"code"),eN(1253,"(p-disabled)"),og(),eN(1254,"."),og()()()(),Sl(1255,"tr",15)(1256,"td",16)(1257,"div",24)(1258,"span",25),eN(1259," p-required-field-error-message"),Wl(1260,"br"),og()()(),Sl(1261,"td",20)(1262,"code",27),eN(1263,"boolean"),og()(),Sl(1264,"td",22)(1265,"p")(1266,"code"),eN(1267,"false"),og()()(),Sl(1268,"td",23)(1269,"em")(1270,"strong"),eN(1271,"(opcional)"),og()(),Sl(1272,"p"),eN(1273,"Exibe a mensagem setada na propriedade "),Sl(1274,"code"),eN(1275,"p-error-pattern"),og(),eN(1276," se o campo estiver vazio e for requerido."),og(),Sl(1277,"blockquote")(1278,"p"),eN(1279,"Necess\xE1rio que a propriedade "),Sl(1280,"code"),eN(1281,"p-required"),og(),eN(1282," esteja habilitada."),og()()()(),Sl(1283,"tr",15)(1284,"td",16)(1285,"div",24)(1286,"span",25),eN(1287," p-show-required"),Wl(1288,"br"),og()()(),Sl(1289,"td",20)(1290,"code",27),eN(1291,"boolean"),og()(),Sl(1292,"td",22),eN(1293,"-"),og(),Sl(1294,"td",23)(1295,"p"),eN(1296,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),og(),Sl(1297,"blockquote")(1298,"p"),eN(1299,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),og()(),Sl(1300,"ul")(1301,"li"),eN(1302,"N\xE3o possuir "),Sl(1303,"code"),eN(1304,"p-help"),og(),eN(1305," e/ou "),Sl(1306,"code"),eN(1307,"p-label"),og(),eN(1308,"."),og()()()(),Sl(1309,"tr",15)(1310,"td",16)(1311,"div",24)(1312,"span",25),eN(1313," p-size"),Wl(1314,"br"),og()()(),Sl(1315,"td",20)(1316,"code",26),eN(1317,"string"),og()(),Sl(1318,"td",22)(1319,"p")(1320,"code"),eN(1321,"medium"),og()()(),Sl(1322,"td",23)(1323,"em")(1324,"strong"),eN(1325,"(opcional)"),og()(),Sl(1326,"p"),eN(1327,"Define o tamanho do componente:"),og(),Sl(1328,"ul")(1329,"li")(1330,"code"),eN(1331,"small"),og(),eN(1332,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),og(),Sl(1333,"li")(1334,"code"),eN(1335,"medium"),og(),eN(1336,": altura do input como 44px."),og()(),Sl(1337,"blockquote")(1338,"p"),eN(1339,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Sl(1340,"code"),eN(1341,"medium"),og(),eN(1342,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Sl(1343,"a",35),eN(1344,"po-theme"),og(),eN(1345,"."),og()()()(),Sl(1346,"tr",15)(1347,"td",16)(1348,"div",24)(1349,"span",25),eN(1350," p-thousand-maxlength"),Wl(1351,"br"),og()()(),Sl(1352,"td",20)(1353,"code",28),eN(1354,"number"),og()(),Sl(1355,"td",22)(1356,"p")(1357,"code"),eN(1358,"13"),og()()(),Sl(1359,"td",23)(1360,"em")(1361,"strong"),eN(1362,"(opcional)"),og()(),Sl(1363,"p"),eN(1364,"Quantidade m\xE1xima de d\xEDgitos antes do separador decimal."),og(),Sl(1365,"blockquote")(1366,"p")(1367,"strong"),eN(1368,"Importante:"),og()()(),Sl(1369,"ul")(1370,"li"),eN(1371,"O valor m\xE1ximo permitido \xE9 13;"),og(),Sl(1372,"li"),eN(1373,"A soma total de "),Sl(1374,"code"),eN(1375,"p-decimals-length"),og(),eN(1376," com "),Sl(1377,"code"),eN(1378,"p-thousand-maxlength"),og(),eN(1379," limita-se \xE0 16;"),og(),Sl(1380,"li"),eN(1381,"Esta propriedade sobrep\xF5e o valor definido em "),Sl(1382,"code"),eN(1383,"p-decimals-length"),og(),eN(1384,"."),og()()()(),Sl(1385,"tr",15)(1386,"td",16)(1387,"div",24)(1388,"span",25),eN(1389," p-upper-case"),Wl(1390,"br"),og()()(),Sl(1391,"td",20)(1392,"code",27),eN(1393,"boolean"),og()(),Sl(1394,"td",22),eN(1395,"-"),og(),Sl(1396,"td",23)(1397,"p"),eN(1398,"Converte o conte\xFAdo do campo em mai\xFAsulo automaticamente."),og()()()(),Sl(1399,"h3",11),eN(1400,"M\xE9todos"),og(),Sl(1401,"table",36)(1402,"tr",15)(1403,"th",37)(1404,"div",24)(1405,"h4")(1406,"span",25),eN(1407," showAdditionalHelp "),og()()()()(),Sl(1408,"tr",23)(1409,"td",23)(1410,"p"),eN(1411,"M\xE9todo que exibe "),Sl(1412,"code"),eN(1413,"p-helper"),og(),eN(1414," ou executa a a\xE7\xE3o definida em "),Sl(1415,"code"),eN(1416,"p-helper{eventOnClick}"),og(),eN(1417," ou em "),Sl(1418,"code"),eN(1419,"p-additionalHelp"),og(),eN(1420,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Sl(1421,"code"),eN(1422,"p-keydown"),og(),eN(1423,"."),og(),Sl(1424,"blockquote")(1425,"p"),eN(1426,"Exibe ou oculta o conte\xFAdo do componente "),Sl(1427,"code"),eN(1428,"po-helper"),og(),eN(1429," quando o componente estiver com foco."),og()(),Sl(1430,"pre")(1431,"code"),eN(1432,`// Exemplo com p-label e p-helper
<po-nome-component
 #component
 ...
 p-label="Label do componente"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, component)"
></po-nome-component>
`),og()(),Sl(1433,"pre")(1434,"code"),eN(1435,`...
onKeyDown(event: KeyboardEvent, inp: PoNomeDoComponente): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),og()()()()(),Wl(1436,"br"),Sl(1437,"table",36)(1438,"tr",15)(1439,"th",37)(1440,"div",24)(1441,"h4")(1442,"span",25),eN(1443," focus "),og()()()()(),Sl(1444,"tr",23)(1445,"td",23)(1446,"p"),eN(1447,"Fun\xE7\xE3o que atribui foco ao componente."),og(),Sl(1448,"p"),eN(1449,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),og(),Sl(1450,"pre")(1451,"code"),eN(1452,`import { PoNomeDoComponenteComponent } from '@po-ui/ng-components';

...

@ViewChild(PoNomeDoComponenteComponent, { static: true }) nomeDoComponente: PoNomeDoComponenteComponent;

focusComponent() {
  this.nomeDoComponente.focus();
}
`),og()()()()(),Wl(1453,"br"),Sl(1454,"h3"),eN(1455,"Interfaces"),og(),Sl(1456,"h4",38)(1457,"code",5),eN(1458,"ErrorAsyncProperties"),og()(),Sl(1459,"div",2)(1460,"p"),eN(1461,"Interface para realizar uma valida\xE7\xE3o ass\xEDncrona no componente."),og()(),Sl(1462,"h4",11),eN(1463,"Propriedades"),og(),Sl(1464,"table",12)(1465,"tr",13)(1466,"th",14),eN(1467,"Nome"),og(),Sl(1468,"th",14),eN(1469,"Tipo"),og(),Sl(1470,"th",14),eN(1471,"Descri\xE7\xE3o"),og()(),Sl(1472,"tr",15)(1473,"td",16)(1474,"div",24)(1475,"span",25),eN(1476," errorAsync"),Wl(1477,"br"),og()()(),Sl(1478,"td",20)(1479,"code",39),eN(1480,"(value) => Observable<boolean>"),og()(),Sl(1481,"td",23)(1482,"p"),eN(1483,`Fun\xE7\xE3o obrigat\xF3ria executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),Sl(1484,"code"),eN(1485,"change"),og(),eN(1486," ou "),Sl(1487,"code"),eN(1488,"change-model"),og(),eN(1489,", dependendo do valor da propriedade "),Sl(1490,"code"),eN(1491,"triggerMode"),og(),eN(1492,"."),og()()(),Sl(1493,"tr",15)(1494,"td",16)(1495,"div",24)(1496,"span",25),eN(1497," triggerMode"),Wl(1498,"br"),og()()(),Sl(1499,"td",20)(1500,"code",40),eN(1501,"'change' "),og(),Sl(1502,"code",41),eN(1503," 'changeModel'"),og()(),Sl(1504,"td",23)(1505,"em")(1506,"strong"),eN(1507,"(opcional)"),og()(),Sl(1508,"p"),eN(1509,"Controla se o m\xE9todo ser\xE1 executado no disparo do output "),Sl(1510,"code"),eN(1511,"change"),og(),eN(1512," ou "),Sl(1513,"code"),eN(1514,"change-model"),og(),eN(1515,"."),og()()()()());},dependencies:[Ka],encapsulation:2})}return l})();var be=(()=>{class l{route;router;sub;hidePoWebSample=true;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(d,r){this.route=d,this.router=r;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let r=d.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:"merge"}),this.activeTab=d;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(r){return new(r||l)(w(Xn),w(En))};static \u0275cmp=Un({type:l,selectors:[["ng-component"]],standalone:false,decls:9,vars:4,consts:[["p-title","Decimal",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,i){r&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return i.changeTab("doc")}),Wl(3,"sample-po-decimal-doc"),og(),Sl(4,"po-tab",3),ft("p-click",function(){return i.changeTab("web")}),Wl(5,"sample-po-decimal-basic-view")(6,"sample-po-decimal-labs-view")(7,"sample-po-decimal-hourly-wage-view")(8,"sample-po-decimal-hourly-wage-reactive-form-view"),og()()()),r&2&&(nw("p-actions",i.actions),Lp(2),nw("p-active",i.activeTab==="doc"),Lp(2),nw("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[rNe,Bme,qme,de,ce,Ee,he,Se],encapsulation:2})}return l})();var Le=[{path:"",component:be}],xe=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275mod=fe({type:l});static \u0275inj=ue$1({imports:[hL.forChild(Le),hL]})}return l})();var st=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275mod=fe({type:l});static \u0275inj=ue$1({imports:[sr,xe]})}return l})();export{st as DocPoDecimalModule};