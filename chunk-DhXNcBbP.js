import {f as fe$1,u as ue,s as sr,a as uL,C,c3 as Xn,E as En,U as Un,cS as xw,b as f,c5 as Vde,aW as Yp,cM as Z9,cN as lm,bD as Ede,J as zl,an as DO,aH as Ka,b8 as qme,b9 as Yme,H as Il,q as Qx,R as og,a1 as ft,A as Lp,ar as Ux,au as dg,T as nw,bs as uN,aX as G9,aF as $9,aY as z9,aG as mk,aZ as hk,b0 as Qt,b1 as mv,c4 as C3,b4 as F3,c8 as Dde,c9 as Yhe,aB as Dx,aM as ww,aN as QA,aO as Ew,aP as e0,aJ as qhe,bd as Ax,av as Gl,aw as co,ax as lo,cQ as Ik,cR as Ck,a3 as cNe,aD as Xy,aT as eN,aE as Qy}from'./main-FCMDZGSJ.js';var Ee=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-datepicker-basic"]],standalone:false,decls:1,vars:0,consts:[["name","datepicker","p-label","PO Datepicker"]],template:function(l,i){l&1&&zl(0,"po-datepicker",0);},dependencies:[Ede],encapsulation:2,changeDetection:1})}return a})();var qe=a=>({"docs-sample-code-tabs":a}),ge=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-datepicker-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Datepicker Basic"),og(),Il(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-datepicker-basic/sample-po-datepicker-basic.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-datepicker name="datepicker" p-label="PO Datepicker"> </po-datepicker>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-datepicker-basic/sample-po-datepicker-basic.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-datepicker-basic',
  templateUrl: './sample-po-datepicker-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDatepickerBasicComponent {}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-datepicker-basic"),og(),zl(23,"hr")),l&2&&(Lp(5),Ux("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,qe,i.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,Ee],encapsulation:2})}return a})();var fe=(()=>{class a{helperText;datepicker;maxDate;errorPattern;event;format;help;isoFormat;label;locale;placeholder;properties;minDate;size;isoFormatOptions=[{label:"Basic",value:xw.Basic},{label:"Extended",value:xw.Extended}];propertiesOptions=[{value:"clean",label:"Clean"},{value:"disabled",label:"Disabled"},{value:"noAutocomplete",label:"No Autocomplete"},{value:"optional",label:"Optional"},{value:"readonly",label:"Read Only"},{value:"required",label:"Required"},{value:"requiredFieldErrorMessage",label:"Required Field Error Message"},{value:"showRequired",label:"Show Required"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"},{value:"loading",label:"Loading"},{value:"compactLabel",label:"Compact Label"}];formatOptions=[{label:"dd/mm/yyyy",value:"dd/mm/yyyy"},{label:"mm/dd/yyyy",value:"mm/dd/yyyy"},{label:"yyyy/mm/dd",value:"yyyy/mm/dd"}];localeOptions=[{label:"pt",value:"pt"},{label:"en",value:"en"},{label:"es",value:"es"},{label:"ru",value:"ru"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore();}changeEvent(m){this.event=m;}restore(){this.helperText="",this.datepicker=void 0,this.maxDate=void 0,this.event=void 0,this.errorPattern=void 0,this.format=void 0,this.help=void 0,this.isoFormat=void 0,this.label=void 0,this.locale=void 0,this.placeholder=void 0,this.properties=[],this.minDate=void 0,this.size="medium";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-datepicker-labs"]],standalone:false,decls:22,vars:47,consts:[["f","ngForm"],["name","datepicker",1,"po-sm-12",3,"ngModelChange","p-blur","p-change","p-keydown","ngModel","p-helper","p-clean","p-disabled","p-max-date","p-error-pattern","p-format","p-help","p-iso-format","p-label","p-locale","p-min-date","p-no-autocomplete","p-optional","p-placeholder","p-readonly","p-required","p-required-field-error-message","p-show-required","p-label-text-wrap","p-loading","p-compact-label","p-size","p-error-limit"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","errorPattern","p-clean","","p-label","Error Pattern",1,"po-md-6",3,"ngModelChange","ngModel"],["name","minDate","p-clean","","p-label","Min date",1,"po-md-6",3,"ngModelChange","ngModel","p-max-date","p-format"],["name","maxDate","p-clean","","p-label","Max date",1,"po-md-6",3,"ngModelChange","ngModel","p-format","p-min-date"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","locale","p-columns","4","p-label","Locale",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","format","p-columns","4","p-label","Format",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","isoFormat","p-columns","4","p-label","Iso Format",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","restore","p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(l,i){if(l&1){let s=Dx();Il(0,"po-datepicker",1),ww("ngModelChange",function(r){return Xy(s),eN(i.datepicker,r)||(i.datepicker=r),Qy(r)}),ft("p-blur",function(){return i.changeEvent("p-blur")})("p-change",function(){return i.changeEvent("p-change")})("p-keydown",function(){return i.changeEvent("p-keydown")}),og(),QA(),zl(1,"po-divider"),Il(2,"div",2),zl(3,"po-info",3)(4,"po-info",4),og(),zl(5,"po-divider"),Il(6,"form",null,0)(8,"po-input",5),ww("ngModelChange",function(r){return Xy(s),eN(i.label,r)||(i.label=r),Qy(r)}),og(),QA(),Il(9,"po-input",6),ww("ngModelChange",function(r){return Xy(s),eN(i.help,r)||(i.help=r),Qy(r)}),og(),QA(),Il(10,"po-input",7),ww("ngModelChange",function(r){return Xy(s),eN(i.helperText,r)||(i.helperText=r),Qy(r)}),og(),QA(),Il(11,"po-input",8),ww("ngModelChange",function(r){return Xy(s),eN(i.placeholder,r)||(i.placeholder=r),Qy(r)}),og(),QA(),Il(12,"po-input",9),ww("ngModelChange",function(r){return Xy(s),eN(i.errorPattern,r)||(i.errorPattern=r),Qy(r)}),og(),QA(),Il(13,"po-datepicker",10),ww("ngModelChange",function(r){return Xy(s),eN(i.minDate,r)||(i.minDate=r),Qy(r)}),og(),QA(),Il(14,"po-datepicker",11),ww("ngModelChange",function(r){return Xy(s),eN(i.maxDate,r)||(i.maxDate=r),Qy(r)}),og(),QA(),Il(15,"po-checkbox-group",12),ww("ngModelChange",function(r){return Xy(s),eN(i.properties,r)||(i.properties=r),Qy(r)}),og(),QA(),Il(16,"po-radio-group",13),ww("ngModelChange",function(r){return Xy(s),eN(i.locale,r)||(i.locale=r),Qy(r)}),og(),QA(),Il(17,"po-radio-group",14),ww("ngModelChange",function(r){return Xy(s),eN(i.format,r)||(i.format=r),Qy(r)}),og(),QA(),Il(18,"po-radio-group",15),ww("ngModelChange",function(r){return Xy(s),eN(i.isoFormat,r)||(i.isoFormat=r),Qy(r)}),og(),QA(),Il(19,"po-radio-group",16),ww("ngModelChange",function(r){return Xy(s),eN(i.size,r)||(i.size=r),Qy(r)}),og(),QA(),Il(20,"div",2)(21,"po-button",17),ft("p-click",function(){return i.restore()}),og()()();}l&2&&(Ew("ngModel",i.datepicker),nw("p-helper",i.helperText)("p-clean",i.properties.includes("clean"))("p-disabled",i.properties.includes("disabled"))("p-max-date",i.maxDate)("p-error-pattern",i.errorPattern)("p-format",i.format)("p-help",i.help)("p-iso-format",i.isoFormat)("p-label",i.label)("p-locale",i.locale)("p-min-date",i.minDate)("p-no-autocomplete",i.properties==null?null:i.properties.includes("noAutocomplete"))("p-optional",i.properties.includes("optional"))("p-placeholder",i.placeholder)("p-readonly",i.properties.includes("readonly"))("p-required",i.properties.includes("required"))("p-required-field-error-message",i.properties.includes("requiredFieldErrorMessage"))("p-show-required",i.properties.includes("showRequired"))("p-label-text-wrap",i.properties==null?null:i.properties.includes("labelTextWrap"))("p-loading",i.properties.includes("loading"))("p-compact-label",i.properties==null?null:i.properties.includes("compactLabel"))("p-size",i.size)("p-error-limit",i.properties==null?null:i.properties.includes("errorLimit")),e0(),Lp(3),nw("p-value",i.datepicker),Lp(),nw("p-value",i.event),Lp(4),Ew("ngModel",i.label),e0(),Lp(),Ew("ngModel",i.help),e0(),Lp(),Ew("ngModel",i.helperText),e0(),Lp(),Ew("ngModel",i.placeholder),e0(),Lp(),Ew("ngModel",i.errorPattern),e0(),Lp(),Ew("ngModel",i.minDate),nw("p-max-date",i.maxDate)("p-format",i.format),e0(),Lp(),Ew("ngModel",i.maxDate),nw("p-format",i.format)("p-min-date",i.minDate),e0(),Lp(),Ew("ngModel",i.properties),nw("p-options",i.propertiesOptions),e0(),Lp(),Ew("ngModel",i.locale),nw("p-options",i.localeOptions),e0(),Lp(),Ew("ngModel",i.format),nw("p-options",i.formatOptions),e0(),Lp(),Ew("ngModel",i.isoFormat),nw("p-options",i.isoFormatOptions),e0(),Lp(),Ew("ngModel",i.size),nw("p-options",i.sizeOptions),e0());},dependencies:[G9,$9,z9,mk,hk,Qt,mv,C3,Ede,F3,Dde,Yhe],encapsulation:2,changeDetection:1})}return a})();var Le=a=>({"docs-sample-code-tabs":a}),be=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-datepicker-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Datepicker Labs"),og(),Il(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-datepicker-labs/sample-po-datepicker-labs.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-datepicker
  class="po-sm-12"
  name="datepicker"
  [(ngModel)]="datepicker"
  [p-helper]="helperText"
  [p-clean]="properties.includes('clean')"
  [p-disabled]="properties.includes('disabled')"
  [p-max-date]="maxDate"
  [p-error-pattern]="errorPattern"
  [p-format]="format"
  [p-help]="help"
  [p-iso-format]="isoFormat"
  [p-label]="label"
  [p-locale]="locale"
  [p-min-date]="minDate"
  [p-no-autocomplete]="$safeNavigationMigration(properties?.includes('noAutocomplete'))"
  [p-optional]="properties.includes('optional')"
  [p-placeholder]="placeholder"
  [p-readonly]="properties.includes('readonly')"
  [p-required]="properties.includes('required')"
  [p-required-field-error-message]="properties.includes('requiredFieldErrorMessage')"
  [p-show-required]="properties.includes('showRequired')"
  [p-label-text-wrap]="$safeNavigationMigration(properties?.includes('labelTextWrap'))"
  [p-loading]="properties.includes('loading')"
  [p-compact-label]="$safeNavigationMigration(properties?.includes('compactLabel'))"
  [p-size]="size"
  (p-blur)="changeEvent('p-blur')"
  (p-change)="changeEvent('p-change')"
  (p-keydown)="changeEvent('p-keydown')"
  [p-error-limit]="$safeNavigationMigration(properties?.includes('errorLimit'))"
>
</po-datepicker>

<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="datepicker"> </po-info>

  <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
</div>

<po-divider />

<form #f="ngForm">
  <po-input class="po-md-6" name="label" [(ngModel)]="label" p-clean p-label="Label"> </po-input>

  <po-input class="po-md-6" name="help" [(ngModel)]="help" p-clean p-label="Help"> </po-input>

  <po-input class="po-md-6" name="helperText" [(ngModel)]="helperText" p-clean p-label="Additional Help"> </po-input>

  <po-input class="po-md-6" name="placeholder" [(ngModel)]="placeholder" p-clean p-label="Placeholder"> </po-input>

  <po-input class="po-md-6" name="errorPattern" [(ngModel)]="errorPattern" p-clean p-label="Error Pattern"> </po-input>

  <po-datepicker
    class="po-md-6"
    name="minDate"
    [(ngModel)]="minDate"
    p-clean
    p-label="Min date"
    [p-max-date]="maxDate"
    [p-format]="format"
  >
  </po-datepicker>

  <po-datepicker
    class="po-md-6"
    name="maxDate"
    [(ngModel)]="maxDate"
    p-clean
    p-label="Max date"
    [p-format]="format"
    [p-min-date]="minDate"
  >
  </po-datepicker>

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
    name="locale"
    [(ngModel)]="locale"
    p-columns="4"
    p-label="Locale"
    [p-options]="localeOptions"
  >
  </po-radio-group>

  <po-radio-group
    class="po-md-12"
    name="format"
    [(ngModel)]="format"
    p-columns="4"
    p-label="Format"
    [p-options]="formatOptions"
  >
  </po-radio-group>

  <po-radio-group
    class="po-md-12"
    name="isoFormat"
    [(ngModel)]="isoFormat"
    p-columns="4"
    p-label="Iso Format"
    [p-options]="isoFormatOptions"
  >
  </po-radio-group>

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
    <po-button class="po-lg-3 po-md-6" name="restore" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-datepicker-labs/sample-po-datepicker-labs.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { PoCheckboxGroupOption, PoDatepickerIsoFormat, PoRadioGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-datepicker-labs',
  templateUrl: './sample-po-datepicker-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDatepickerLabsComponent implements OnInit {
  helperText: string;
  datepicker: string | Date;
  maxDate: string | Date;
  errorPattern: string;
  event: string;
  format: string;
  help: string;
  isoFormat: PoDatepickerIsoFormat;
  label: string;
  locale: string;
  placeholder: string;
  properties: Array<string>;
  minDate: string | Date;
  size: string;

  public readonly isoFormatOptions: Array<PoRadioGroupOption> = [
    { label: 'Basic', value: PoDatepickerIsoFormat.Basic },
    { label: 'Extended', value: PoDatepickerIsoFormat.Extended }
  ];

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'clean', label: 'Clean' },
    { value: 'disabled', label: 'Disabled' },
    { value: 'noAutocomplete', label: 'No Autocomplete' },
    { value: 'optional', label: 'Optional' },
    { value: 'readonly', label: 'Read Only' },
    { value: 'required', label: 'Required' },
    { value: 'requiredFieldErrorMessage', label: 'Required Field Error Message' },
    { value: 'showRequired', label: 'Show Required' },
    { value: 'errorLimit', label: 'Limit Error Message' },
    { value: 'labelTextWrap', label: 'Label Text Wrap' },
    { value: 'loading', label: 'Loading' },
    { value: 'compactLabel', label: 'Compact Label' }
  ];

  public readonly formatOptions: Array<PoRadioGroupOption> = [
    { label: 'dd/mm/yyyy', value: 'dd/mm/yyyy' },
    { label: 'mm/dd/yyyy', value: 'mm/dd/yyyy' },
    { label: 'yyyy/mm/dd', value: 'yyyy/mm/dd' }
  ];

  public readonly localeOptions: Array<PoRadioGroupOption> = [
    { label: 'pt', value: 'pt' },
    { label: 'en', value: 'en' },
    { label: 'es', value: 'es' },
    { label: 'ru', value: 'ru' }
  ];

  public readonly sizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  ngOnInit() {
    this.restore();
  }

  changeEvent(event: string) {
    this.event = event;
  }

  restore() {
    this.helperText = '';
    this.datepicker = undefined;
    this.maxDate = undefined;
    this.event = undefined;
    this.errorPattern = undefined;
    this.format = undefined;
    this.help = undefined;
    this.isoFormat = undefined;
    this.label = undefined;
    this.locale = undefined;
    this.placeholder = undefined;
    this.properties = [];
    this.minDate = undefined;
    this.size = 'medium';
  }
}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-datepicker-labs"),og(),zl(23,"hr")),l&2&&(Lp(5),Ux("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,Le,i.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,fe],encapsulation:2})}return a})();var he=(()=>{class a{selectedYear=new Date("2026-04-30").getFullYear();event;changeEvent(m){this.event=m;}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-datepicker-year"]],standalone:false,decls:5,vars:3,consts:[["name","yearPicker","p-label","Year Picker","p-placeholder","Select a year","p-mode","year",3,"ngModelChange","p-change","ngModel"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"]],template:function(l,i){l&1&&(Il(0,"po-datepicker",0),ww("ngModelChange",function(c){return eN(i.selectedYear,c)||(i.selectedYear=c),c}),ft("p-change",function(c){return i.changeEvent(c)}),og(),QA(),zl(1,"po-divider"),Il(2,"div",1),zl(3,"po-info",2)(4,"po-info",3),og()),l&2&&(Ew("ngModel",i.selectedYear),e0(),Lp(3),nw("p-value",i.selectedYear),Lp(),nw("p-value",i.event));},dependencies:[$9,mk,mv,Ede,Yhe],encapsulation:2,changeDetection:1})}return a})();var Ne=a=>({"docs-sample-code-tabs":a}),Se=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-datepicker-year-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Datepicker Year"),og(),Il(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-datepicker-year/sample-po-datepicker-year.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-datepicker
  name="yearPicker"
  [(ngModel)]="selectedYear"
  p-label="Year Picker"
  p-placeholder="Select a year"
  p-mode="year"
  (p-change)="changeEvent($event)"
>
</po-datepicker>

<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="selectedYear"> </po-info>

  <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
</div>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-datepicker-year/sample-po-datepicker-year.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-datepicker-year',
  templateUrl: './sample-po-datepicker-year.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDatepickerYearComponent {
  selectedYear = new Date('2026-04-30').getFullYear();
  event: string;

  changeEvent(event: string) {
    this.event = event;
  }
}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-datepicker-year"),og(),zl(23,"hr")),l&2&&(Lp(5),Ux("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,Ne,i.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,he],encapsulation:2})}return a})();var ve=(()=>{class a{selectedMonthYear=new Date("2026-12-02");event;changeEvent(m){this.event=m;}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-datepicker-month-year"]],standalone:false,decls:5,vars:3,consts:[["name","monthYearPicker","p-label","Month/Year Picker","p-placeholder","Select month and year","p-mode","month-year",3,"ngModelChange","p-change","ngModel"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"]],template:function(l,i){l&1&&(Il(0,"po-datepicker",0),ww("ngModelChange",function(c){return eN(i.selectedMonthYear,c)||(i.selectedMonthYear=c),c}),ft("p-change",function(c){return i.changeEvent(c)}),og(),QA(),zl(1,"po-divider"),Il(2,"div",1),zl(3,"po-info",2)(4,"po-info",3),og()),l&2&&(Ew("ngModel",i.selectedMonthYear),e0(),Lp(3),nw("p-value",i.selectedMonthYear),Lp(),nw("p-value",i.event));},dependencies:[$9,mk,mv,Ede,Yhe],encapsulation:2,changeDetection:1})}return a})();var ze=a=>({"docs-sample-code-tabs":a}),xe=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-datepicker-month-year-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Datepicker MonthYear"),og(),Il(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-datepicker-month-year/sample-po-datepicker-month-year.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-datepicker
  name="monthYearPicker"
  [(ngModel)]="selectedMonthYear"
  p-label="Month/Year Picker"
  p-placeholder="Select month and year"
  p-mode="month-year"
  (p-change)="changeEvent($event)"
>
</po-datepicker>

<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="selectedMonthYear"> </po-info>

  <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
</div>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-datepicker-month-year/sample-po-datepicker-month-year.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-datepicker-month-year',
  templateUrl: './sample-po-datepicker-month-year.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDatepickerMonthYearComponent {
  selectedMonthYear = new Date('2026-12-02');
  event: string;

  changeEvent(event: string) {
    this.event = event;
  }
}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-datepicker-month-year"),og(),zl(23,"hr")),l&2&&(Lp(5),Ux("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,ze,i.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,ve],encapsulation:2})}return a})();var je=["formAirfare"],ye=(()=>{class a{poDialog=f(Vde);poNotification=f(Yp);formAirfare;accompany=0;destination;endDate=new Date;origin;startDate=new Date;ticketClass="Economy";accompanyNumber=[{value:0,label:"0"},{value:1,label:"1"},{value:2,label:"2"},{value:3,label:"3"},{value:4,label:"4"},{value:5,label:"5"},{value:6,label:"6"},{value:7,label:"7"},{value:8,label:"8"}];ticketClassOptions=[{value:"Economy",label:"Economy"},{value:"Premium",label:"Premium"},{value:"Business",label:"Business"},{value:"First",label:"First"}];apply(){let m=`Would you like to confirm the ticket from ${this.origin} to ${this.destination} with departure date at
    ${this.getFormatedDate(this.startDate)} and return at ${this.getFormatedDate(this.endDate)} with ${this.accompany} companions in
    ${this.ticketClass} class?`;this.poDialog.confirm({title:"Confirm",message:m,confirm:()=>{this.poNotification.success("Booking Confirmed"),this.formAirfare.reset({accompany:0,endDate:new Date,startDate:new Date,ticketClass:"Economy"});},cancel:()=>{this.poNotification.warning("Booking Canceled");}});}getFormatedDate(m){return m&&m.slice(0,10)}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-datepicker-airfare"]],viewQuery:function(l,i){if(l&1&&Gl(je,7),l&2){let s;co(s=lo())&&(i.formAirfare=s.first);}},standalone:false,decls:13,vars:11,consts:[["formAirfare","ngForm"],[1,"po-row"],["name","startDate","p-clean","","p-format","dd/mm/yyyy","p-label","Date start","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-max-date"],["name","endDate","p-clean","","p-format","dd/mm/yyyy","p-label","Date end","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-min-date"],["name","origin","p-placeholder","Flight origin","p-label","Origin","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","destination","p-label","Destination","p-placeholder","Flight destination","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["clas","po-row"],["name","ticketClass","p-label","Class","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","accompany","p-label","Accompany","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","applyButton","p-label","Apply",1,"po-md-3","po-offset-md-9","po-offset-lg-9",3,"p-click","p-disabled"]],template:function(l,i){if(l&1){let s=Dx();Il(0,"form",null,0)(2,"div",1)(3,"po-datepicker",2),ww("ngModelChange",function(r){return Xy(s),eN(i.startDate,r)||(i.startDate=r),Qy(r)}),og(),QA(),Il(4,"po-datepicker",3),ww("ngModelChange",function(r){return Xy(s),eN(i.endDate,r)||(i.endDate=r),Qy(r)}),og(),QA(),og(),Il(5,"div",1)(6,"po-input",4),ww("ngModelChange",function(r){return Xy(s),eN(i.origin,r)||(i.origin=r),Qy(r)}),og(),QA(),Il(7,"po-input",5),ww("ngModelChange",function(r){return Xy(s),eN(i.destination,r)||(i.destination=r),Qy(r)}),og(),QA(),og(),Il(8,"div",6)(9,"po-select",7),ww("ngModelChange",function(r){return Xy(s),eN(i.ticketClass,r)||(i.ticketClass=r),Qy(r)}),og(),QA(),Il(10,"po-select",8),ww("ngModelChange",function(r){return Xy(s),eN(i.accompany,r)||(i.accompany=r),Qy(r)}),og(),QA(),og(),Il(11,"div",1)(12,"po-button",9),ft("p-click",function(){return i.apply()}),og()()();}if(l&2){let s=Ax(1);Lp(3),Ew("ngModel",i.startDate),nw("p-max-date",i.endDate),e0(),Lp(),Ew("ngModel",i.endDate),nw("p-min-date",i.startDate),e0(),Lp(2),Ew("ngModel",i.origin),e0(),Lp(),Ew("ngModel",i.destination),e0(),Lp(2),Ew("ngModel",i.ticketClass),nw("p-options",i.ticketClassOptions),e0(),Lp(),Ew("ngModel",i.accompany),nw("p-options",i.accompanyNumber),e0(),Lp(2),nw("p-disabled",s.invalid);}},dependencies:[G9,$9,z9,mk,hk,Qt,Ede,F3,qhe],encapsulation:2,changeDetection:1})}return a})();var He=a=>({"docs-sample-code-tabs":a}),Ce=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-datepicker-airfare-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Datepicker - Airfare"),og(),Il(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-datepicker-airfare/sample-po-datepicker-airfare.component.html"),og(),Il(13,"pre",7),Qx(14,`<form #formAirfare="ngForm">
  <div class="po-row">
    <po-datepicker
      class="po-md-6"
      name="startDate"
      [(ngModel)]="startDate"
      p-clean
      p-format="dd/mm/yyyy"
      p-label="Date start"
      p-required
      [p-max-date]="endDate"
    >
    </po-datepicker>

    <po-datepicker
      class="po-md-6"
      name="endDate"
      [(ngModel)]="endDate"
      p-clean
      p-format="dd/mm/yyyy"
      p-label="Date end"
      p-required
      [p-min-date]="startDate"
    >
    </po-datepicker>
  </div>

  <div class="po-row">
    <po-input
      class="po-md-6"
      name="origin"
      [(ngModel)]="origin"
      p-placeholder="Flight origin"
      p-label="Origin"
      p-required
    >
    </po-input>

    <po-input
      class="po-md-6"
      name="destination"
      [(ngModel)]="destination"
      p-label="Destination"
      p-placeholder="Flight destination"
      p-required
    >
    </po-input>
  </div>

  <div clas="po-row">
    <po-select
      class="po-md-6"
      name="ticketClass"
      [(ngModel)]="ticketClass"
      p-label="Class"
      p-required
      [p-options]="ticketClassOptions"
    >
    </po-select>

    <po-select
      class="po-md-6"
      name="accompany"
      [(ngModel)]="accompany"
      p-label="Accompany"
      p-required
      [p-options]="accompanyNumber"
    >
    </po-select>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-3 po-offset-md-9 po-offset-lg-9"
      name="applyButton"
      p-label="Apply"
      [p-disabled]="formAirfare.invalid"
      (p-click)="apply()"
    >
    </po-button>
  </div>
</form>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-datepicker-airfare/sample-po-datepicker-airfare.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

import { PoDialogService, PoNotificationService, PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-datepicker-airfare',
  templateUrl: './sample-po-datepicker-airfare.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDatepickerAirfareComponent {
  private poDialog = inject(PoDialogService);
  private poNotification = inject(PoNotificationService);

  @ViewChild('formAirfare', { static: true }) formAirfare: UntypedFormControl;

  accompany: number = 0;
  destination: string;
  endDate: string = <any>new Date();
  origin: string;
  startDate: string = <any>new Date();
  ticketClass: string = 'Economy';

  public readonly accompanyNumber: Array<PoSelectOption> = [
    { value: 0, label: '0' },
    { value: 1, label: '1' },
    { value: 2, label: '2' },
    { value: 3, label: '3' },
    { value: 4, label: '4' },
    { value: 5, label: '5' },
    { value: 6, label: '6' },
    { value: 7, label: '7' },
    { value: 8, label: '8' }
  ];

  public readonly ticketClassOptions: Array<PoSelectOption> = [
    { value: 'Economy', label: 'Economy' },
    { value: 'Premium', label: 'Premium' },
    { value: 'Business', label: 'Business' },
    { value: 'First', label: 'First' }
  ];

  apply() {
    const message = \`Would you like to confirm the ticket from \${this.origin} to \${
      this.destination
    } with departure date at
    \${this.getFormatedDate(this.startDate)} and return at \${this.getFormatedDate(this.endDate)} with \${
      this.accompany
    } companions in
    \${this.ticketClass} class?\`;

    this.poDialog.confirm({
      title: 'Confirm',
      message,
      confirm: () => {
        this.poNotification.success('Booking Confirmed');

        this.formAirfare.reset({
          accompany: 0,
          endDate: new Date(),
          startDate: new Date(),
          ticketClass: 'Economy'
        });
      },
      cancel: () => {
        this.poNotification.warning('Booking Canceled');
      }
    });
  }

  private getFormatedDate(date: string) {
    return date && date.slice(0, 10);
  }
}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-datepicker-airfare"),og(),zl(23,"hr")),l&2&&(Lp(5),Ux("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,He,i.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,ye],encapsulation:2})}return a})();var ke=(()=>{class a{formBuilder=f(Z9);poDialog=f(Vde);poNotification=f(Yp);formAirfare;accompanyNumber=[{value:0,label:"0"},{value:1,label:"1"},{value:2,label:"2"},{value:3,label:"3"},{value:4,label:"4"},{value:5,label:"5"},{value:6,label:"6"},{value:7,label:"7"},{value:8,label:"8"}];ticketClassOptions=[{value:"Economy",label:"Economy"},{value:"Premium",label:"Premium"},{value:"Business",label:"Business"},{value:"First",label:"First"}];ngOnInit(){this.formAirfare=this.formBuilder.group({accompany:[0,lm.required],destination:["",lm.required],endDate:[new Date,lm.required],origin:["",lm.required],startDate:[new Date,lm.required],ticketClass:["Economy",lm.required]});}apply(m){let{accompany:l,destination:i,endDate:s,origin:c,ticketClass:r,startDate:Me}=m.value,Te=`Would you like to confirm the ticket from ${c} to ${i} with departure date at
    ${this.getFormatedDate(Me)} and return at ${this.getFormatedDate(s)} with ${l} companions in
    ${r} class?`;this.poDialog.confirm({title:"Confirm",message:Te,confirm:()=>{this.poNotification.success("Booking Confirmed"),this.formAirfare.reset({accompany:0,endDate:new Date,startDate:new Date,ticketClass:"Economy"});},cancel:()=>{this.poNotification.warning("Booking Canceled");}});}getFormatedDate(m){return m&&m.slice(0,10)}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-datepicker-airfare-reactive-form"]],standalone:false,decls:12,vars:6,consts:[[3,"formGroup"],[1,"po-row"],["formControlName","startDate","p-clean","","p-format","dd/mm/yyyy","p-label","Date start",1,"po-md-6",3,"p-max-date"],["formControlName","endDate","p-clean","","p-format","dd/mm/yyyy","p-label","Date end",1,"po-md-6",3,"p-min-date"],["formControlName","origin","p-placeholder","Flight origin","p-label","Origin",1,"po-md-6"],["formControlName","destination","p-label","Destination","p-placeholder","Flight destination",1,"po-md-6"],["clas","po-row"],["formControlName","ticketClass","p-label","Class",1,"po-md-6",3,"p-options"],["formControlName","accompany","p-label","Accompany",1,"po-md-6",3,"p-options"],["name","applyButton","p-label","Apply",1,"po-md-3","po-offset-md-9","po-offset-lg-9",3,"p-click","p-disabled"]],template:function(l,i){l&1&&(Il(0,"form",0)(1,"div",1),zl(2,"po-datepicker",2),QA(),zl(3,"po-datepicker",3),QA(),og(),Il(4,"div",1),zl(5,"po-input",4),QA(),zl(6,"po-input",5),QA(),og(),Il(7,"div",6),zl(8,"po-select",7),QA(),zl(9,"po-select",8),QA(),og(),Il(10,"div",1)(11,"po-button",9),ft("p-click",function(){return i.apply(i.formAirfare)}),og()()()),l&2&&(nw("formGroup",i.formAirfare),Lp(2),nw("p-max-date",i.formAirfare.get("endDate").value),e0(),Lp(),nw("p-min-date",i.formAirfare.get("startDate").value),e0(),Lp(2),e0(),Lp(),e0(),Lp(2),nw("p-options",i.ticketClassOptions),e0(),Lp(),nw("p-options",i.accompanyNumber),e0(),Lp(2),nw("p-disabled",i.formAirfare.invalid));},dependencies:[G9,$9,z9,Ik,Ck,Qt,Ede,F3,qhe],encapsulation:2,changeDetection:1})}return a})();var Qe=a=>({"docs-sample-code-tabs":a}),De=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-datepicker-airfare-reactive-form-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Datepicker - Airfare Reactive Form"),og(),Il(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-datepicker-airfare-reactive-form/sample-po-datepicker-airfare-reactive-form.component.html"),og(),Il(13,"pre",7),Qx(14,`<form [formGroup]="formAirfare">
  <div class="po-row">
    <po-datepicker
      class="po-md-6"
      formControlName="startDate"
      p-clean
      p-format="dd/mm/yyyy"
      p-label="Date start"
      [p-max-date]="formAirfare.get('endDate').value"
    >
    </po-datepicker>

    <po-datepicker
      class="po-md-6"
      formControlName="endDate"
      p-clean
      p-format="dd/mm/yyyy"
      p-label="Date end"
      [p-min-date]="formAirfare.get('startDate').value"
    >
    </po-datepicker>
  </div>

  <div class="po-row">
    <po-input class="po-md-6" formControlName="origin" p-placeholder="Flight origin" p-label="Origin"> </po-input>

    <po-input class="po-md-6" formControlName="destination" p-label="Destination" p-placeholder="Flight destination">
    </po-input>
  </div>

  <div clas="po-row">
    <po-select class="po-md-6" formControlName="ticketClass" p-label="Class" [p-options]="ticketClassOptions">
    </po-select>

    <po-select class="po-md-6" formControlName="accompany" p-label="Accompany" [p-options]="accompanyNumber">
    </po-select>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-3 po-offset-md-9 po-offset-lg-9"
      name="applyButton"
      p-label="Apply"
      [p-disabled]="formAirfare.invalid"
      (p-click)="apply(formAirfare)"
    >
    </po-button>
  </div>
</form>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-datepicker-airfare-reactive-form/sample-po-datepicker-airfare-reactive-form.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

import { PoDialogService, PoNotificationService, PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-datepicker-airfare-reactive-form',
  templateUrl: './sample-po-datepicker-airfare-reactive-form.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDatepickerAirfareReactiveFormComponent implements OnInit {
  private formBuilder = inject(UntypedFormBuilder);
  private poDialog = inject(PoDialogService);
  private poNotification = inject(PoNotificationService);

  formAirfare: UntypedFormGroup;

  readonly accompanyNumber: Array<PoSelectOption> = [
    { value: 0, label: '0' },
    { value: 1, label: '1' },
    { value: 2, label: '2' },
    { value: 3, label: '3' },
    { value: 4, label: '4' },
    { value: 5, label: '5' },
    { value: 6, label: '6' },
    { value: 7, label: '7' },
    { value: 8, label: '8' }
  ];

  readonly ticketClassOptions: Array<PoSelectOption> = [
    { value: 'Economy', label: 'Economy' },
    { value: 'Premium', label: 'Premium' },
    { value: 'Business', label: 'Business' },
    { value: 'First', label: 'First' }
  ];

  ngOnInit() {
    this.formAirfare = this.formBuilder.group({
      accompany: [0, Validators.required],
      destination: ['', Validators.required],
      endDate: [new Date(), Validators.required],
      origin: ['', Validators.required],
      startDate: [new Date(), Validators.required],
      ticketClass: ['Economy', Validators.required]
    });
  }

  apply(formAirfare: UntypedFormGroup) {
    const { accompany, destination, endDate, origin, ticketClass, startDate } = formAirfare.value;

    const message = \`Would you like to confirm the ticket from \${origin} to \${destination} with departure date at
    \${this.getFormatedDate(startDate)} and return at \${this.getFormatedDate(endDate)} with \${accompany} companions in
    \${ticketClass} class?\`;

    this.poDialog.confirm({
      title: 'Confirm',
      message,
      confirm: () => {
        this.poNotification.success('Booking Confirmed');

        this.formAirfare.reset({
          accompany: 0,
          endDate: new Date(),
          startDate: new Date(),
          ticketClass: 'Economy'
        });
      },
      cancel: () => {
        this.poNotification.warning('Booking Canceled');
      }
    });
  }

  private getFormatedDate(date: string) {
    return date && date.slice(0, 10);
  }
}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-datepicker-airfare-reactive-form"),og(),zl(23,"hr")),l&2&&(Lp(5),Ux("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,Qe,i.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,ke],encapsulation:2})}return a})();var we=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-datepicker-doc"]],standalone:false,decls:1291,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://www.w3schools.com/js/js_dates.asp"],["href","https://www.w3schools.com/jsref/jsref_setfullyear.asp"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["href","/documentation/po-i18n"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","(value)","=>","Observable<boolean>"],["pan","",1,"docs-api-property-type","PoDatepickerIsoFormat"],["pan","",1,"docs-api-property-type","Date"],["pan","",1,"docs-api-property-type","'month-year'"],["pan","",1,"docs-api-property-type","'year'"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-helper"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","number"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"]],template:function(l,i){l&1&&(Il(0,"div",0)(1,"p",1)(2,"code"),Qx(3,"import { PoFieldModule } from '@po-ui/ng-components';"),og()(),Il(4,"div",2)(5,"p"),Qx(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),og(),Il(7,"blockquote")(8,"p"),Qx(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),Il(10,"code"),Qx(11,"FormsModule"),og(),Qx(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Il(13,"code"),Qx(14,"ReactiveFormsModule"),og(),Qx(15,", ambos nativos do Angular."),og()()(),Il(16,"h3",3),Qx(17,"Componente"),og(),Il(18,"h4",4)(19,"code",5),Qx(20,"PoDatepickerComponent"),og()(),Il(21,"div",2)(22,"p"),Qx(23,"O "),Il(24,"code"),Qx(25,"po-datepicker"),og(),Qx(26," \xE9 um componente espec\xEDfico para manipula\xE7\xE3o de datas permitindo a digita\xE7\xE3o e / ou sele\xE7\xE3o."),og(),Il(27,"p"),Qx(28,`O formato de exibi\xE7\xE3o da data, ou seja, o formato que \xE9 apresentado ao usu\xE1rio \xE9 o dd/mm/yyyy,
mas podem ser definidos outros padr\xF5es (veja mais na propriedade `),Il(29,"code"),Qx(30,"p-format"),og(),Qx(31,")."),og(),Il(32,"p"),Qx(33,`O idioma padr\xE3o do calend\xE1rio ser\xE1 exibido de acordo com o navegador, caso tenha necessidade de alterar
use a propriedade `),Il(34,"code"),Qx(35,"p-locale"),og(),Qx(36,"."),og(),Il(37,"p"),Qx(38,`O datepicker aceita tr\xEAs formatos de data: o E8601DZw (yyyy-mm-ddThh:mm:ss+|-hh:mm), o E8601DAw (yyyy-mm-dd) e o
Date padr\xE3o do Javascript.`),og(),Il(39,"blockquote")(40,"p"),Qx(41,"Por padr\xE3o, o formato de sa\xEDda do "),Il(42,"em"),Qx(43,"model"),og(),Qx(44,` se ajustar\xE1 conforme o formato de entrada. Se por acaso precisar controlar o valor de sa\xEDda,
a propriedade `),Il(45,"code"),Qx(46,"p-iso-format"),og(),Qx(47," prov\xEA esse controle independentemente do formato de entrada. Veja abaixo os formatos dispon\xEDveis:"),og()(),Il(48,"ul")(49,"li")(50,"p"),Qx(51,"Formato de entrada e sa\xEDda (E8601DZw) - "),Il(52,"code"),Qx(53,"'2017-11-28T00:00:00-02:00'"),og(),Qx(54,";"),og()(),Il(55,"li")(56,"p"),Qx(57,"Formato de entrada e sa\xEDda (E8601DAw) - "),Il(58,"code"),Qx(59,"'2017-11-28'"),og(),Qx(60,";"),og()(),Il(61,"li")(62,"p"),Qx(63,"Formato de entrada (Date) - "),Il(64,"code"),Qx(65,"new Date(2017, 10, 28)"),og(),Qx(66," e sa\xEDda (E8601DAw) - "),Il(67,"code"),Qx(68,"'2017-11-28'"),og(),Qx(69,";"),og()()(),Il(70,"p")(71,"strong"),Qx(72,"Importante:"),og()(),Il(73,"ul")(74,"li"),Qx(75,"Para utilizar datas com ano inferior a 100, verificar o comportamento do "),Il(76,"a",6)(77,"code"),Qx(78,"new Date"),og()(),Qx(79,`
e utilizar o m\xE9todo `),Il(80,"a",7)(81,"code"),Qx(82,"setFullYear"),og()(),Qx(83,"."),og(),Il(84,"li"),Qx(85,"Caso a data esteja inv\xE1lida, o "),Il(86,"code"),Qx(87,"model"),og(),Qx(88," receber\xE1 "),Il(89,"strong"),Qx(90,"'Data inv\xE1lida'"),og(),Qx(91,"."),og(),Il(92,"li"),Qx(93,"Caso o "),Il(94,"code"),Qx(95,"input"),og(),Qx(96," esteja passando um "),Il(97,"code"),Qx(98,"[(ngModel)]"),og(),Qx(99,", mas n\xE3o tenha um "),Il(100,"code"),Qx(101,"name"),og(),Qx(102,`, ent\xE3o ir\xE1 ocorrer um erro
do pr\xF3prio Angular (`),Il(103,"code"),Qx(104,'[ngModelOptions]="{standalone: true}"'),og(),Qx(105,")."),og()(),Il(106,"p"),Qx(107,"Exemplo:"),og(),Il(108,"pre")(109,"code"),Qx(110,`<po-datepicker
  [(ngModel)]="pessoa.nome"
  [ngModelOptions]="{standalone: true}"
</po-datepicker>
`),og()(),Il(111,"blockquote")(112,"p"),Qx(113,"N\xE3o esque\xE7a de importar o "),Il(114,"code"),Qx(115,"FormsModule"),og(),Qx(116," em seu m\xF3dulo, tal como para utilizar o "),Il(117,"code"),Qx(118,"input default"),og(),Qx(119,"."),og()(),Il(120,"h4"),Qx(121,"Tokens customiz\xE1veis"),og(),Il(122,"p"),Qx(123,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS): "),zl(124,"br"),Qx(125,`
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),Il(126,"code"),Qx(127,".po-input"),og()(),Il(128,"blockquote")(129,"p"),Qx(130,"Para maiores informa\xE7\xF5es, acesse o guia "),Il(131,"a",8),Qx(132,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),Qx(133,"."),og()(),Il(134,"table")(135,"thead")(136,"tr")(137,"th"),Qx(138,"Propriedade"),og(),Il(139,"th"),Qx(140,"Descri\xE7\xE3o"),og(),Il(141,"th"),Qx(142,"Valor Padr\xE3o"),og()()(),Il(143,"tbody")(144,"tr")(145,"td")(146,"strong"),Qx(147,"Default Values"),og()(),zl(148,"td")(149,"td"),og(),Il(150,"tr")(151,"td")(152,"code"),Qx(153,"--font-family"),og()(),Il(154,"td"),Qx(155,"Fam\xEDlia tipogr\xE1fica usada"),og(),Il(156,"td")(157,"code"),Qx(158,"var(--font-family-theme)"),og()()(),Il(159,"tr")(160,"td")(161,"code"),Qx(162,"--font-size"),og()(),Il(163,"td"),Qx(164,"Tamanho da fonte"),og(),Il(165,"td")(166,"code"),Qx(167,"var(--font-size-default)"),og()()(),Il(168,"tr")(169,"td")(170,"code"),Qx(171,"--text-color-placeholder"),og(),Qx(172," \xA0"),og(),Il(173,"td"),Qx(174,"Cor principal do texto do placeholder"),og(),Il(175,"td")(176,"code"),Qx(177,"var(--color-neutral-light-30)"),og()()(),Il(178,"tr")(179,"td")(180,"code"),Qx(181,"--color"),og()(),Il(182,"td"),Qx(183,"Cor principal do datepicker"),og(),Il(184,"td")(185,"code"),Qx(186,"var(--color-neutral-dark-70)"),og()()(),Il(187,"tr")(188,"td")(189,"code"),Qx(190,"--background"),og()(),Il(191,"td"),Qx(192,"Cor de background"),og(),Il(193,"td")(194,"code"),Qx(195,"var(--color-neutral-light-05)"),og()()(),Il(196,"tr")(197,"td")(198,"code"),Qx(199,"--padding"),og()(),Il(200,"td"),Qx(201,"Preenchimento"),og(),Il(202,"td")(203,"code"),Qx(204,"0 0.5rem"),og()()(),Il(205,"tr")(206,"td")(207,"code"),Qx(208,"--text-color"),og()(),Il(209,"td"),Qx(210,"Cor do texto"),og(),Il(211,"td")(212,"code"),Qx(213,"var(--color-neutral-dark-90)"),og()()(),Il(214,"tr")(215,"td")(216,"code"),Qx(217,"--field-container-title-justify"),og()(),Il(218,"td"),Qx(219,"Alinhamento horizontal do t\xEDtulo ("),Il(220,"code"),Qx(221,"justify-content"),og(),Qx(222,")"),og(),Il(223,"td")(224,"code"),Qx(225,"space-between"),og()()(),Il(226,"tr")(227,"td")(228,"code"),Qx(229,"--field-container-title-flex"),og()(),Il(230,"td"),Qx(231,"Flex do t\xEDtulo ("),Il(232,"code"),Qx(233,"flex"),og(),Qx(234,")"),og(),Il(235,"td")(236,"code"),Qx(237,"1 auto"),og()()(),Il(238,"tr")(239,"td")(240,"strong"),Qx(241,"Hover"),og()(),zl(242,"td")(243,"td"),og(),Il(244,"tr")(245,"td")(246,"code"),Qx(247,"--color-hover"),og()(),Il(248,"td"),Qx(249,"Cor principal no estado hover"),og(),Il(250,"td")(251,"code"),Qx(252,"var(--color-brand-01-dark)"),og()()(),Il(253,"tr")(254,"td")(255,"code"),Qx(256,"--background-hover"),og()(),Il(257,"td"),Qx(258,"Cor de background no estado hover"),og(),Il(259,"td")(260,"code"),Qx(261,"var(--color-brand-01-lightest)"),og()()(),Il(262,"tr")(263,"td")(264,"strong"),Qx(265,"Focused"),og()(),zl(266,"td")(267,"td"),og(),Il(268,"tr")(269,"td")(270,"code"),Qx(271,"--color-focused"),og()(),Il(272,"td"),Qx(273,"Cor principal no estado de focus"),og(),Il(274,"td")(275,"code"),Qx(276,"var(--color-action-default)"),og()()(),Il(277,"tr")(278,"td")(279,"code"),Qx(280,"--outline-color-focused"),og()(),Il(281,"td"),Qx(282,"Cor do outline do estado de focus"),og(),Il(283,"td")(284,"code"),Qx(285,"var(--color-action-focus)"),og()()(),Il(286,"tr")(287,"td")(288,"strong"),Qx(289,"Disabled"),og()(),zl(290,"td")(291,"td"),og(),Il(292,"tr")(293,"td")(294,"code"),Qx(295,"--color-disabled"),og()(),Il(296,"td"),Qx(297,"Cor principal no estado disabled"),og(),Il(298,"td")(299,"code"),Qx(300,"var(--color-neutral-light-30)"),og()()(),Il(301,"tr")(302,"td")(303,"code"),Qx(304,"--background-disabled"),og()(),Il(305,"td"),Qx(306,"Cor de background no estado disabled \xA0"),og(),Il(307,"td")(308,"code"),Qx(309,"var(--color-neutral-light-20)"),og()()(),Il(310,"tr")(311,"td")(312,"code"),Qx(313,"--text-color-disabled"),og()(),Il(314,"td"),Qx(315,"Cor do texto no estado disabled"),og(),Il(316,"td")(317,"code"),Qx(318,"var(--color-neutral-dark-70)"),og()()()()()(),Il(319,"div",9)(320,"h4",10),Qx(321,"Seletor"),og(),Il(322,"pre",11),Qx(323,`<po-datepicker
    p-locale="string"
    (p-additional-help)="EventEmitter"
    p-additional-help-tooltip="string"
    p-append-in-body="boolean"
    p-auto-focus="boolean"
    p-clean="boolean"
    p-compact-label="boolean"
    p-disabled="boolean"
    p-error-async="(value) => Observable<boolean>"
    p-error-limit="boolean"
    p-error-pattern="string"
    p-format="string"
    p-help="string"
    p-iso-format="PoDatepickerIsoFormat"
    (p-keydown)="EventEmitter"
    p-label="string"
    p-label-text-wrap="boolean"
    p-loading="boolean"
    p-max-date="string | Date"
    p-min-date="string | Date"
    p-mode="'month-year' | 'year'"
    p-no-autocomplete="boolean"
    (p-blur)="EventEmitter"
    (p-change)="EventEmitter"
    p-optional="boolean"
    p-placeholder="string"
    p-helper="PoHelperOptions | string"
    p-readonly="boolean"
    p-required="boolean"
    p-required-field-error-message="boolean"
    p-show-required="boolean"
    p-size="string"
    p-year-range-limit="number" >
</po-datepicker>
`),og()(),Il(324,"h4",12),Qx(325,"Propriedades"),og(),Il(326,"table",13)(327,"tr",14)(328,"th",15),Qx(329,"Nome"),og(),Il(330,"th",15),Qx(331,"Tipo"),og(),Il(332,"th",15),Qx(333,"Padr\xE3o"),og(),Il(334,"th",15),Qx(335,"Descri\xE7\xE3o"),og()(),Il(336,"tr",16)(337,"td",17)(338,"div",18)(339,"span",19),Qx(340,"p-locale"),zl(341,"br"),og()()(),Il(342,"td",20)(343,"code",21),Qx(344,"string"),og()(),Il(345,"td",22),Qx(346,"-"),og(),Il(347,"td",23)(348,"em")(349,"strong"),Qx(350,"(opcional)"),og()(),Il(351,"p"),Qx(352,"Idioma do Datepicker."),og(),Il(353,"blockquote")(354,"p"),Qx(355,"O locale padr\xE3o sera recuperado com base no "),Il(356,"a",24)(357,"code"),Qx(358,"PoI18nService"),og()(),Qx(359," ou "),Il(360,"em"),Qx(361,"browser"),og(),Qx(362,"."),og()()()(),Il(363,"tr",16)(364,"td",17)(365,"div",25)(366,"span",26),Qx(367," (p-additional-help)"),zl(368,"br"),og()(),Il(369,"div",27),Qx(370,"Deprecated"),og()(),Il(371,"td",20)(372,"code",28),Qx(373,"EventEmitter"),og()(),Il(374,"td",22),Qx(375,"-"),og(),Il(376,"td",23)(377,"em")(378,"strong"),Qx(379,"(opcional)"),og()(),Il(380,"p"),Qx(381,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),og(),Il(382,"blockquote")(383,"p"),Qx(384,"Essa propriedade est\xE1 "),Il(385,"strong"),Qx(386,"depreciada"),og(),Qx(387," e ser\xE1 removida na vers\xE3o "),Il(388,"code"),Qx(389,"23.x.x"),og(),Qx(390,". Recomendamos utilizar a propriedade "),Il(391,"code"),Qx(392,"p-helper"),og(),Qx(393," que oferece mais recursos e flexibilidade."),og()()()(),Il(394,"tr",16)(395,"td",17)(396,"div",18)(397,"span",19),Qx(398," p-additional-help-tooltip"),zl(399,"br"),og()(),Il(400,"div",27),Qx(401,"Deprecated"),og()(),Il(402,"td",20)(403,"code",21),Qx(404,"string"),og()(),Il(405,"td",22),Qx(406,"-"),og(),Il(407,"td",23)(408,"em")(409,"strong"),Qx(410,"(opcional)"),og()(),Il(411,"p"),Qx(412,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),Il(413,"code"),Qx(414,"po-helper"),og(),Qx(415,`.
`),Il(416,"strong"),Qx(417,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),og()(),Il(418,"blockquote")(419,"p"),Qx(420,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),og()(),Il(421,"blockquote")(422,"p"),Qx(423,"Essa propriedade est\xE1 "),Il(424,"strong"),Qx(425,"depreciada"),og(),Qx(426," e ser\xE1 removida na vers\xE3o "),Il(427,"code"),Qx(428,"23.x.x"),og(),Qx(429,". Recomendamos utilizar a propriedade "),Il(430,"code"),Qx(431,"p-helper"),og(),Qx(432," que oferece mais recursos e flexibilidade."),og()()()(),Il(433,"tr",16)(434,"td",17)(435,"div",18)(436,"span",19),Qx(437," p-append-in-body"),zl(438,"br"),og()()(),Il(439,"td",20)(440,"code",29),Qx(441,"boolean"),og()(),Il(442,"td",22)(443,"p")(444,"code"),Qx(445,"false"),og()()(),Il(446,"td",23)(447,"em")(448,"strong"),Qx(449,"(opcional)"),og()(),Il(450,"p"),Qx(451,"Define que o "),Il(452,"code"),Qx(453,"calendar"),og(),Qx(454," e/ou tooltip ("),Il(455,"code"),Qx(456,"p-additional-help-tooltip"),og(),Qx(457," e/ou "),Il(458,"code"),Qx(459,"p-error-limit"),og(),Qx(460,`) ser\xE3o inclu\xEDdos no body da
p\xE1gina e n\xE3o dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou
overflow escondido, garantindo o posicionamento correto de ambos pr\xF3ximo ao elemento.`),og(),Il(461,"blockquote")(462,"p"),Qx(463,"Quando utilizado com "),Il(464,"code"),Qx(465,"p-helper"),og(),Qx(466,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),og()()()(),Il(467,"tr",16)(468,"td",17)(469,"div",18)(470,"span",19),Qx(471," p-auto-focus"),zl(472,"br"),og()()(),Il(473,"td",20)(474,"code",29),Qx(475,"boolean"),og()(),Il(476,"td",22)(477,"p")(478,"code"),Qx(479,"false"),og()()(),Il(480,"td",23)(481,"em")(482,"strong"),Qx(483,"(opcional)"),og()(),Il(484,"p"),Qx(485,"Aplica foco no elemento ao ser iniciado."),og(),Il(486,"blockquote")(487,"p"),Qx(488,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),og()()()(),Il(489,"tr",16)(490,"td",17)(491,"div",18)(492,"span",19),Qx(493,"p-clean"),zl(494,"br"),og()()(),Il(495,"td",20)(496,"code",29),Qx(497,"boolean"),og()(),Il(498,"td",22),Qx(499,"-"),og(),Il(500,"td",23)(501,"em")(502,"strong"),Qx(503,"(opcional)"),og()(),Il(504,"p"),Qx(505,"Habilita a\xE7\xE3o para limpar o campo."),og()()(),Il(506,"tr",16)(507,"td",17)(508,"div",18)(509,"span",19),Qx(510," p-compact-label"),zl(511,"br"),og()()(),Il(512,"td",20)(513,"code",29),Qx(514,"boolean"),og()(),Il(515,"td",22)(516,"p")(517,"code"),Qx(518,"false"),og()()(),Il(519,"td",23)(520,"em")(521,"strong"),Qx(522,"(opcional)"),og()(),Il(523,"p"),Qx(524,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),og(),Il(525,"p"),Qx(526,"Quando habilitado ("),Il(527,"code"),Qx(528,"true"),og(),Qx(529,"), o modo compacto afeta o conjunto composto por:"),og(),Il(530,"ul")(531,"li")(532,"code"),Qx(533,"po-label"),og()(),Il(534,"li")(535,"code"),Qx(536,"p-requirement (showRequired)"),og()(),Il(537,"li")(538,"code"),Qx(539,"po-helper"),og()()(),Il(540,"p"),Qx(541,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),og(),Il(542,"p"),Qx(543,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),og(),Il(544,"ul")(545,"li")(546,"code"),Qx(547,"--field-container-title-justify"),og()(),Il(548,"li")(549,"code"),Qx(550,"--field-container-title-flex"),og()()(),Il(551,"p"),Qx(552,"Exemplo:"),og(),Il(553,"pre")(554,"code"),Qx(555,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),og()(),Il(556,"p"),Qx(557,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),og()()(),Il(558,"tr",16)(559,"td",17)(560,"div",18)(561,"span",19),Qx(562,"p-disabled"),zl(563,"br"),og()()(),Il(564,"td",20)(565,"code",29),Qx(566,"boolean"),og()(),Il(567,"td",22),Qx(568,"-"),og(),Il(569,"td",23)(570,"em")(571,"strong"),Qx(572,"(opcional)"),og()(),Il(573,"p"),Qx(574,"Desabilita o campo."),og()()(),Il(575,"tr",16)(576,"td",17)(577,"div",18)(578,"span",19),Qx(579," p-error-async"),zl(580,"br"),og()()(),Il(581,"td",20)(582,"code",30),Qx(583,"(value) => Observable<boolean>"),og()(),Il(584,"td",22),Qx(585,"-"),og(),Il(586,"td",23)(587,"em")(588,"strong"),Qx(589,"(opcional)"),og()(),Il(590,"p"),Qx(591,`Fun\xE7\xE3o executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),Il(592,"code"),Qx(593,"change"),og(),Qx(594,"."),og()()(),Il(595,"tr",16)(596,"td",17)(597,"div",18)(598,"span",19),Qx(599," p-error-limit"),zl(600,"br"),og()()(),Il(601,"td",20)(602,"code",29),Qx(603,"boolean"),og()(),Il(604,"td",22)(605,"p")(606,"code"),Qx(607,"false"),og()()(),Il(608,"td",23)(609,"em")(610,"strong"),Qx(611,"(opcional)"),og()(),Il(612,"p"),Qx(613,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),og(),Il(614,"blockquote")(615,"p"),Qx(616,"Caso essa propriedade seja definida como "),Il(617,"code"),Qx(618,"true"),og(),Qx(619,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),og()()()(),Il(620,"tr",16)(621,"td",17)(622,"div",18)(623,"span",19),Qx(624," p-error-pattern"),zl(625,"br"),og()()(),Il(626,"td",20)(627,"code",21),Qx(628,"string"),og()(),Il(629,"td",22),Qx(630,"-"),og(),Il(631,"td",23)(632,"em")(633,"strong"),Qx(634,"(opcional)"),og()(),Il(635,"p"),Qx(636,"Mensagem apresentada quando a data for inv\xE1lida ou fora do per\xEDodo."),og(),Il(637,"blockquote")(638,"p"),Qx(639,`Por padr\xE3o, esta mensagem n\xE3o \xE9 apresentada quando o campo estiver vazio, mesmo que ele seja requerido.
Para exibir a mensagem com o campo vazio, utilize a propriedade `),Il(640,"code"),Qx(641,"p-required-field-error-message"),og(),Qx(642," em conjunto."),og()()()(),Il(643,"tr",16)(644,"td",17)(645,"div",18)(646,"span",19),Qx(647," p-format"),zl(648,"br"),og()()(),Il(649,"td",20)(650,"code",21),Qx(651,"string"),og()(),Il(652,"td",22)(653,"p")(654,"code"),Qx(655,"dd/mm/yyyy"),og()()(),Il(656,"td",23)(657,"em")(658,"strong"),Qx(659,"(opcional)"),og()(),Il(660,"p"),Qx(661,"Formato de exibi\xE7\xE3o da data."),og(),Il(662,"p"),Qx(663,"Valores v\xE1lidos:"),og(),Il(664,"ul")(665,"li")(666,"code"),Qx(667,"dd/mm/yyyy"),og()(),Il(668,"li")(669,"code"),Qx(670,"mm/dd/yyyy"),og()(),Il(671,"li")(672,"code"),Qx(673,"yyyy/mm/dd"),og()()(),Il(674,"p"),Qx(675,"Propriedade incompat\xEDvel com as varia\xE7\xF5es month-year e year."),og()()(),Il(676,"tr",16)(677,"td",17)(678,"div",18)(679,"span",19),Qx(680," p-help"),zl(681,"br"),og()()(),Il(682,"td",20)(683,"code",21),Qx(684,"string"),og()(),Il(685,"td",22),Qx(686,"-"),og(),Il(687,"td",23)(688,"em")(689,"strong"),Qx(690,"(opcional)"),og()(),Il(691,"p"),Qx(692,"Texto de apoio do campo."),og()()(),Il(693,"tr",16)(694,"td",17)(695,"div",18)(696,"span",19),Qx(697," p-iso-format"),zl(698,"br"),og()()(),Il(699,"td",20)(700,"code",31),Qx(701,"PoDatepickerIsoFormat"),og()(),Il(702,"td",22),Qx(703,"-"),og(),Il(704,"td",23)(705,"em")(706,"strong"),Qx(707,"(opcional)"),og()(),Il(708,"p"),Qx(709,"Padr\xE3o de formata\xE7\xE3o para sa\xEDda do "),Il(710,"em"),Qx(711,"model"),og(),Qx(712,", independentemente do formato de entrada."),og(),Il(713,"blockquote")(714,"p"),Qx(715,"Veja os valores v\xE1lidos no "),Il(716,"em"),Qx(717,"enum"),og(),Il(718,"code"),Qx(719,"PoDatepickerIsoFormat"),og(),Qx(720,"."),og()(),Il(721,"p"),Qx(722,"Propriedade incompat\xEDvel com as varia\xE7\xF5es month-year e year."),og()()(),Il(723,"tr",16)(724,"td",17)(725,"div",25)(726,"span",26),Qx(727," (p-keydown)"),zl(728,"br"),og()()(),Il(729,"td",20)(730,"code",28),Qx(731,"EventEmitter"),og()(),Il(732,"td",22),Qx(733,"-"),og(),Il(734,"td",23)(735,"em")(736,"strong"),Qx(737,"(opcional)"),og()(),Il(738,"p"),Qx(739,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Il(740,"code"),Qx(741,"KeyboardEvent"),og(),Qx(742," com informa\xE7\xF5es sobre a tecla."),og()()(),Il(743,"tr",16)(744,"td",17)(745,"div",18)(746,"span",19),Qx(747," p-label"),zl(748,"br"),og()()(),Il(749,"td",20)(750,"code",21),Qx(751,"string"),og()(),Il(752,"td",22),Qx(753,"-"),og(),Il(754,"td",23)(755,"em")(756,"strong"),Qx(757,"(opcional)"),og()(),Il(758,"p"),Qx(759,"R\xF3tulo do campo."),og()()(),Il(760,"tr",16)(761,"td",17)(762,"div",18)(763,"span",19),Qx(764," p-label-text-wrap"),zl(765,"br"),og()()(),Il(766,"td",20)(767,"code",29),Qx(768,"boolean"),og()(),Il(769,"td",22)(770,"p")(771,"code"),Qx(772,"false"),og()()(),Il(773,"td",23)(774,"em")(775,"strong"),Qx(776,"(opcional)"),og()(),Il(777,"p"),Qx(778,"Habilita a quebra autom\xE1tica do texto da propriedade "),Il(779,"code"),Qx(780,"p-label"),og(),Qx(781,". Quando "),Il(782,"code"),Qx(783,"p-label-text-wrap"),og(),Qx(784,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),og()()(),Il(785,"tr",16)(786,"td",17)(787,"div",18)(788,"span",19),Qx(789," p-loading"),zl(790,"br"),og()()(),Il(791,"td",20)(792,"code",29),Qx(793,"boolean"),og()(),Il(794,"td",22)(795,"p")(796,"code"),Qx(797,"false"),og()()(),Il(798,"td",23)(799,"em")(800,"strong"),Qx(801,"(opcional)"),og()(),Il(802,"p"),Qx(803,"Exibe um \xEDcone de carregamento no lado direito do campo para sinalizar que uma opera\xE7\xE3o est\xE1 em andamento."),og()()(),Il(804,"tr",16)(805,"td",17)(806,"div",18)(807,"span",19),Qx(808," p-max-date"),zl(809,"br"),og()()(),Il(810,"td",20)(811,"code",21),Qx(812,"string "),og(),Il(813,"code",32),Qx(814," Date"),og()(),Il(815,"td",22),Qx(816,"-"),og(),Il(817,"td",23)(818,"em")(819,"strong"),Qx(820,"(opcional)"),og()(),Il(821,"p"),Qx(822,"Define uma data m\xE1xima para o "),Il(823,"code"),Qx(824,"po-datepicker"),og(),Qx(825,"."),og()()(),Il(826,"tr",16)(827,"td",17)(828,"div",18)(829,"span",19),Qx(830," p-min-date"),zl(831,"br"),og()()(),Il(832,"td",20)(833,"code",21),Qx(834,"string "),og(),Il(835,"code",32),Qx(836," Date"),og()(),Il(837,"td",22),Qx(838,"-"),og(),Il(839,"td",23)(840,"em")(841,"strong"),Qx(842,"(opcional)"),og()(),Il(843,"p"),Qx(844,"Define uma data m\xEDnima para o "),Il(845,"code"),Qx(846,"po-datepicker"),og(),Qx(847,"."),og()()(),Il(848,"tr",16)(849,"td",17)(850,"div",18)(851,"span",19),Qx(852," p-mode"),zl(853,"br"),og()()(),Il(854,"td",20)(855,"code",33),Qx(856,"'month-year' "),og(),Il(857,"code",34),Qx(858," 'year'"),og()(),Il(859,"td",22),Qx(860,"-"),og(),Il(861,"td",23)(862,"em")(863,"strong"),Qx(864,"(opcional)"),og()(),Il(865,"p"),Qx(866,"Define o modo de opera\xE7\xE3o do datepicker."),og(),Il(867,"p"),Qx(868,"Permite configurar o componente para sele\xE7\xE3o de:"),og(),Il(869,"ul")(870,"li"),Qx(871,"M\xEAs e ano ("),Il(872,"code"),Qx(873,"month-year"),og(),Qx(874,");"),og(),Il(875,"li"),Qx(876,"Apenas ano ("),Il(877,"code"),Qx(878,"year"),og(),Qx(879,")."),og()()()(),Il(880,"tr",16)(881,"td",17)(882,"div",18)(883,"span",19),Qx(884," p-no-autocomplete"),zl(885,"br"),og()()(),Il(886,"td",20)(887,"code",29),Qx(888,"boolean"),og()(),Il(889,"td",22)(890,"p")(891,"code"),Qx(892,"false"),og()()(),Il(893,"td",23)(894,"em")(895,"strong"),Qx(896,"(opcional)"),og()(),Il(897,"p"),Qx(898,"Define a propriedade nativa "),Il(899,"code"),Qx(900,"autocomplete"),og(),Qx(901," do campo como "),Il(902,"code"),Qx(903,"off"),og(),Qx(904,"."),og()()(),Il(905,"tr",16)(906,"td",17)(907,"div",25)(908,"span",26),Qx(909," (p-blur)"),zl(910,"br"),og()()(),Il(911,"td",20)(912,"code",28),Qx(913,"EventEmitter"),og()(),Il(914,"td",22),Qx(915,"-"),og(),Il(916,"td",23)(917,"em")(918,"strong"),Qx(919,"(opcional)"),og()(),Il(920,"p"),Qx(921,"Evento disparado ao sair do campo."),og()()(),Il(922,"tr",16)(923,"td",17)(924,"div",25)(925,"span",26),Qx(926," (p-change)"),zl(927,"br"),og()()(),Il(928,"td",20)(929,"code",28),Qx(930,"EventEmitter"),og()(),Il(931,"td",22),Qx(932,"-"),og(),Il(933,"td",23)(934,"em")(935,"strong"),Qx(936,"(opcional)"),og()(),Il(937,"p"),Qx(938,"Evento disparado ao alterar valor do campo."),og()()(),Il(939,"tr",16)(940,"td",17)(941,"div",18)(942,"span",19),Qx(943," p-optional"),zl(944,"br"),og()()(),Il(945,"td",20)(946,"code",29),Qx(947,"boolean"),og()(),Il(948,"td",22)(949,"p")(950,"code"),Qx(951,"false"),og()()(),Il(952,"td",23)(953,"em")(954,"strong"),Qx(955,"(opcional)"),og()(),Il(956,"p"),Qx(957,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),og(),Il(958,"blockquote")(959,"p"),Qx(960,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),og()(),Il(961,"ul")(962,"li"),Qx(963,"O campo conter "),Il(964,"code"),Qx(965,"p-required"),og(),Qx(966,";"),og(),Il(967,"li"),Qx(968,"N\xE3o possuir "),Il(969,"code"),Qx(970,"p-help"),og(),Qx(971," e/ou "),Il(972,"code"),Qx(973,"p-label"),og(),Qx(974,"."),og()()()(),Il(975,"tr",16)(976,"td",17)(977,"div",18)(978,"span",19),Qx(979," p-placeholder"),zl(980,"br"),og()()(),Il(981,"td",20)(982,"code",21),Qx(983,"string"),og()(),Il(984,"td",22),Qx(985,"-"),og(),Il(986,"td",23)(987,"em")(988,"strong"),Qx(989,"(opcional)"),og()(),Il(990,"p"),Qx(991,"Mensagem que aparecer\xE1 enquanto o campo n\xE3o estiver preenchido."),og()()(),Il(992,"tr",16)(993,"td",17)(994,"div",18)(995,"span",19),Qx(996," p-helper"),zl(997,"br"),og()()(),Il(998,"td",20)(999,"code",35),Qx(1e3,"PoHelperOptions "),og(),Il(1001,"code",21),Qx(1002," string"),og()(),Il(1003,"td",22),Qx(1004,"-"),og(),Il(1005,"td",23)(1006,"em")(1007,"strong"),Qx(1008,"(opcional)"),og()(),Il(1009,"p"),Qx(1010,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label quando a propriedade "),Il(1011,"code"),Qx(1012,"p-label"),og(),Qx(1013," for definida, ou, ao lado do componente na aus\xEAncia da propriedade "),Il(1014,"code"),Qx(1015,"p-label"),og(),Qx(1016,"."),og(),Il(1017,"blockquote")(1018,"p"),Qx(1019,"Para mais informa\xE7\xF5es acesse: "),Il(1020,"a",36),Qx(1021,"https://po-ui.io/documentation/po-helper"),og(),Qx(1022,"."),og()(),Il(1023,"blockquote")(1024,"p"),Qx(1025,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),Il(1026,"code"),Qx(1027,"p-additional-help-tooltip"),og(),Qx(1028," e "),Il(1029,"code"),Qx(1030,"p-additional-help"),og(),Qx(1031,") ser\xE1 ignorado."),og()()()(),Il(1032,"tr",16)(1033,"td",17)(1034,"div",18)(1035,"span",19),Qx(1036,"p-readonly"),zl(1037,"br"),og()()(),Il(1038,"td",20)(1039,"code",29),Qx(1040,"boolean"),og()(),Il(1041,"td",22),Qx(1042,"-"),og(),Il(1043,"td",23)(1044,"em")(1045,"strong"),Qx(1046,"(opcional)"),og()(),Il(1047,"p"),Qx(1048,"Torna o elemento somente leitura."),og()()(),Il(1049,"tr",16)(1050,"td",17)(1051,"div",18)(1052,"span",19),Qx(1053,"p-required"),zl(1054,"br"),og()()(),Il(1055,"td",20)(1056,"code",29),Qx(1057,"boolean"),og()(),Il(1058,"td",22)(1059,"p")(1060,"code"),Qx(1061,"false"),og()()(),Il(1062,"td",23)(1063,"em")(1064,"strong"),Qx(1065,"(opcional)"),og()(),Il(1066,"p"),Qx(1067,"Define que o campo ser\xE1 obrigat\xF3rio."),og()()(),Il(1068,"tr",16)(1069,"td",17)(1070,"div",18)(1071,"span",19),Qx(1072," p-required-field-error-message"),zl(1073,"br"),og()()(),Il(1074,"td",20)(1075,"code",29),Qx(1076,"boolean"),og()(),Il(1077,"td",22)(1078,"p")(1079,"code"),Qx(1080,"false"),og()()(),Il(1081,"td",23)(1082,"em")(1083,"strong"),Qx(1084,"(opcional)"),og()(),Il(1085,"p"),Qx(1086,"Exibe a mensagem setada na propriedade "),Il(1087,"code"),Qx(1088,"p-error-pattern"),og(),Qx(1089," se o campo estiver vazio e for requerido."),og(),Il(1090,"blockquote")(1091,"p"),Qx(1092,"Necess\xE1rio que a propriedade "),Il(1093,"code"),Qx(1094,"p-required"),og(),Qx(1095," esteja habilitada."),og()()()(),Il(1096,"tr",16)(1097,"td",17)(1098,"div",18)(1099,"span",19),Qx(1100," p-show-required"),zl(1101,"br"),og()()(),Il(1102,"td",20)(1103,"code",29),Qx(1104,"boolean"),og()(),Il(1105,"td",22),Qx(1106,"-"),og(),Il(1107,"td",23)(1108,"p"),Qx(1109,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),og(),Il(1110,"blockquote")(1111,"p"),Qx(1112,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),og()(),Il(1113,"ul")(1114,"li"),Qx(1115,"N\xE3o possuir "),Il(1116,"code"),Qx(1117,"p-help"),og(),Qx(1118," e/ou "),Il(1119,"code"),Qx(1120,"p-label"),og(),Qx(1121,"."),og()()()(),Il(1122,"tr",16)(1123,"td",17)(1124,"div",18)(1125,"span",19),Qx(1126," p-size"),zl(1127,"br"),og()()(),Il(1128,"td",20)(1129,"code",21),Qx(1130,"string"),og()(),Il(1131,"td",22)(1132,"p")(1133,"code"),Qx(1134,"medium"),og()()(),Il(1135,"td",23)(1136,"em")(1137,"strong"),Qx(1138,"(opcional)"),og()(),Il(1139,"p"),Qx(1140,"Define o tamanho do componente:"),og(),Il(1141,"ul")(1142,"li")(1143,"code"),Qx(1144,"small"),og(),Qx(1145,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),og(),Il(1146,"li")(1147,"code"),Qx(1148,"medium"),og(),Qx(1149,": altura do input como 44px."),og()(),Il(1150,"blockquote")(1151,"p"),Qx(1152,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Il(1153,"code"),Qx(1154,"medium"),og(),Qx(1155,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Il(1156,"a",37),Qx(1157,"po-theme"),og(),Qx(1158,"."),og()()()(),Il(1159,"tr",16)(1160,"td",17)(1161,"div",18)(1162,"span",19),Qx(1163," p-year-range-limit"),zl(1164,"br"),og()()(),Il(1165,"td",20)(1166,"code",38),Qx(1167,"number"),og()(),Il(1168,"td",22)(1169,"p"),Qx(1170,"150"),og()(),Il(1171,"td",23)(1172,"em")(1173,"strong"),Qx(1174,"(opcional)"),og()(),Il(1175,"p"),Qx(1176,"Define o limite de anos exibidos nas varia\xE7\xF5es "),Il(1177,"code"),Qx(1178,"month-year"),og(),Qx(1179," e "),Il(1180,"code"),Qx(1181,"year"),og(),Qx(1182,`,
considerando a data atual como refer\xEAncia.`),og(),Il(1183,"p"),Qx(1184,`O valor informado determina o intervalo de anos anterior e posterior
\xE0 data corrente que ser\xE1 disponibilizado para sele\xE7\xE3o.`),og()()()(),Il(1185,"h3",12),Qx(1186,"M\xE9todos"),og(),Il(1187,"table",39)(1188,"tr",16)(1189,"th",40)(1190,"div",18)(1191,"h4")(1192,"span",19),Qx(1193," focus "),og()()()()(),Il(1194,"tr",23)(1195,"td",23)(1196,"p"),Qx(1197,"Fun\xE7\xE3o que atribui foco ao componente."),og(),Il(1198,"p"),Qx(1199,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),og(),Il(1200,"pre")(1201,"code"),Qx(1202,`import { PoDatepickerComponent } from '@po-ui/ng-components';

...

@ViewChild(PoDatepickerComponent, { static: true }) datepicker: PoDatepickerComponent;

focusDatepicker() {
  this.datepicker.focus();
}
`),og()()()()(),zl(1203,"br"),Il(1204,"table",39)(1205,"tr",16)(1206,"th",40)(1207,"div",18)(1208,"h4")(1209,"span",19),Qx(1210," showAdditionalHelp "),og()()()()(),Il(1211,"tr",23)(1212,"td",23)(1213,"p"),Qx(1214,"M\xE9todo que exibe "),Il(1215,"code"),Qx(1216,"p-helper"),og(),Qx(1217," ou executa a a\xE7\xE3o definida em "),Il(1218,"code"),Qx(1219,"p-helper{eventOnClick}"),og(),Qx(1220," ou em "),Il(1221,"code"),Qx(1222,"p-additionalHelp"),og(),Qx(1223,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Il(1224,"code"),Qx(1225,"p-keydown"),og(),Qx(1226,"."),og(),Il(1227,"blockquote")(1228,"p"),Qx(1229,"Exibe ou oculta o conte\xFAdo do componente "),Il(1230,"code"),Qx(1231,"po-helper"),og(),Qx(1232," quando o componente estiver com foco."),og()(),Il(1233,"pre")(1234,"code"),Qx(1235,`// Exemplo com p-label e p-helper
<po-datepicker
 #datepicker
 ...
 p-label="Label do datepicker"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, datepicker)"
></po-datepicker>
`),og()(),Il(1236,"pre")(1237,"code"),Qx(1238,`...
onKeyDown(event: KeyboardEvent, inp: PoDatepickerComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),og()()()()(),zl(1239,"br"),Il(1240,"h3"),Qx(1241,"Enums"),og(),Il(1242,"h4",4)(1243,"code",5),Qx(1244,"PoDatepickerIsoFormat"),og()(),Il(1245,"div",2)(1246,"p")(1247,"em"),Qx(1248,"Enum"),og(),Qx(1249," que define o padr\xE3o de formata\xE7\xE3o das datas."),og(),Il(1250,"blockquote")(1251,"p"),Qx(1252,"Caso um formato padr\xE3o seja definido, o mesmo n\xE3o ser\xE1 mais alterado de acordo com o formato de entrada."),og()()(),Il(1253,"h4",12),Qx(1254,"Propriedades"),og(),Il(1255,"table",13)(1256,"tr",14)(1257,"th",15),Qx(1258,"Nome"),og(),Il(1259,"th",15),Qx(1260,"Descri\xE7\xE3o"),og()(),Il(1261,"tr",16)(1262,"td",17)(1263,"div",18)(1264,"span",19),Qx(1265," Basic"),zl(1266,"br"),og()()(),Il(1267,"td",23)(1268,"p"),Qx(1269,"Padr\xE3o "),Il(1270,"strong"),Qx(1271,"E8601DAw"),og(),Qx(1272," ("),Il(1273,"em"),Qx(1274,"yyyy-mm-dd"),og(),Qx(1275,")."),og()()(),Il(1276,"tr",16)(1277,"td",17)(1278,"div",18)(1279,"span",19),Qx(1280," Extended"),zl(1281,"br"),og()()(),Il(1282,"td",23)(1283,"p"),Qx(1284,"Padr\xE3o "),Il(1285,"strong"),Qx(1286,"E8601DZw"),og(),Qx(1287," ("),Il(1288,"em"),Qx(1289,"yyyy-mm-ddThh:mm:ss+|-hh:mm"),og(),Qx(1290,")."),og()()()()());},dependencies:[Ka],encapsulation:2})}return a})();var Pe=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=6;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,l){this.route=m,this.router=l;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let l=m.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:"merge"}),this.activeTab=m;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(l){return new(l||a)(C(Xn),C(En))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:11,vars:4,consts:[["p-title","Datepicker",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,i){l&1&&(Il(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return i.changeTab("doc")}),zl(3,"sample-po-datepicker-doc"),og(),Il(4,"po-tab",3),ft("p-click",function(){return i.changeTab("web")}),zl(5,"sample-po-datepicker-basic-view")(6,"sample-po-datepicker-labs-view")(7,"sample-po-datepicker-year-view")(8,"sample-po-datepicker-month-year-view")(9,"sample-po-datepicker-airfare-view")(10,"sample-po-datepicker-airfare-reactive-form-view"),og()()()),l&2&&(nw("p-actions",i.actions),Lp(2),nw("p-active",i.activeTab==="doc"),Lp(2),nw("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[cNe,qme,Yme,ge,be,Se,xe,Ce,De,we],encapsulation:2})}return a})();var Je=[{path:"",component:Pe}],_e=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue({imports:[uL.forChild(Je),uL]})}return a})();var Rt=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue({imports:[sr,_e]})}return a})();export{Rt as DocPoDatepickerModule};