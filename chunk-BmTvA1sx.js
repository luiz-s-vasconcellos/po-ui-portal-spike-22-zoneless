import {f as fe$1,u as ue,s as sr,h as hL,w,c3 as Xn,E as En,U as Un,cS as Cw,a as f,c5 as Lde,aW as Yp,cM as Q9,cN as lm,bD as Pde,H as Wl,an as CO,aH as Ka,b8 as Bme,b9 as qme,F as Sl,z as eN,J as og,a1 as ft,L as Lp,ar as $x,au as dg,Q as nw,bs as fN,aX as Z9,aF as G9,aY as q9,aG as _k,aZ as mk,b0 as Qt,b1 as mv,c4 as b3,b4 as L3,c8 as wde,c9 as Ghe,aB as wx,aM as ww,aN as e0,aO as Ew,aP as n0,aJ as Hhe,bd as Nx,av as ql,aw as lo,ax as uo,cQ as Mk,cR as Sk,a3 as rNe,aD as Ky,aT as nN,aE as Xy}from'./main-WP3NAV7C.js';var Ee=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-datepicker-basic"]],standalone:false,decls:1,vars:0,consts:[["name","datepicker","p-label","PO Datepicker"]],template:function(l,i){l&1&&Wl(0,"po-datepicker",0);},dependencies:[Pde],encapsulation:2,changeDetection:1})}return a})();var qe=a=>({"docs-sample-code-tabs":a}),ge=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-datepicker-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Datepicker Basic"),og(),Sl(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-datepicker-basic/sample-po-datepicker-basic.component.html"),og(),Sl(13,"pre",7),eN(14,`<po-datepicker name="datepicker" p-label="PO Datepicker"> </po-datepicker>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-datepicker-basic/sample-po-datepicker-basic.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-datepicker-basic',
  templateUrl: './sample-po-datepicker-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDatepickerBasicComponent {}
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-datepicker-basic"),og(),Wl(23,"hr")),l&2&&(Lp(5),$x("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,qe,i.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,Ee],encapsulation:2})}return a})();var fe=(()=>{class a{helperText;datepicker;maxDate;errorPattern;event;format;help;isoFormat;label;locale;placeholder;properties;minDate;size;isoFormatOptions=[{label:"Basic",value:Cw.Basic},{label:"Extended",value:Cw.Extended}];propertiesOptions=[{value:"clean",label:"Clean"},{value:"disabled",label:"Disabled"},{value:"noAutocomplete",label:"No Autocomplete"},{value:"optional",label:"Optional"},{value:"readonly",label:"Read Only"},{value:"required",label:"Required"},{value:"requiredFieldErrorMessage",label:"Required Field Error Message"},{value:"showRequired",label:"Show Required"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"},{value:"loading",label:"Loading"},{value:"compactLabel",label:"Compact Label"}];formatOptions=[{label:"dd/mm/yyyy",value:"dd/mm/yyyy"},{label:"mm/dd/yyyy",value:"mm/dd/yyyy"},{label:"yyyy/mm/dd",value:"yyyy/mm/dd"}];localeOptions=[{label:"pt",value:"pt"},{label:"en",value:"en"},{label:"es",value:"es"},{label:"ru",value:"ru"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore();}changeEvent(m){this.event=m;}restore(){this.helperText="",this.datepicker=void 0,this.maxDate=void 0,this.event=void 0,this.errorPattern=void 0,this.format=void 0,this.help=void 0,this.isoFormat=void 0,this.label=void 0,this.locale=void 0,this.placeholder=void 0,this.properties=[],this.minDate=void 0,this.size="medium";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-datepicker-labs"]],standalone:false,decls:22,vars:47,consts:[["f","ngForm"],["name","datepicker",1,"po-sm-12",3,"ngModelChange","p-blur","p-change","p-keydown","ngModel","p-helper","p-clean","p-disabled","p-max-date","p-error-pattern","p-format","p-help","p-iso-format","p-label","p-locale","p-min-date","p-no-autocomplete","p-optional","p-placeholder","p-readonly","p-required","p-required-field-error-message","p-show-required","p-label-text-wrap","p-loading","p-compact-label","p-size","p-error-limit"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","errorPattern","p-clean","","p-label","Error Pattern",1,"po-md-6",3,"ngModelChange","ngModel"],["name","minDate","p-clean","","p-label","Min date",1,"po-md-6",3,"ngModelChange","ngModel","p-max-date","p-format"],["name","maxDate","p-clean","","p-label","Max date",1,"po-md-6",3,"ngModelChange","ngModel","p-format","p-min-date"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","locale","p-columns","4","p-label","Locale",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","format","p-columns","4","p-label","Format",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","isoFormat","p-columns","4","p-label","Iso Format",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","restore","p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(l,i){if(l&1){let s=wx();Sl(0,"po-datepicker",1),ww("ngModelChange",function(r){return Ky(s),nN(i.datepicker,r)||(i.datepicker=r),Xy(r)}),ft("p-blur",function(){return i.changeEvent("p-blur")})("p-change",function(){return i.changeEvent("p-change")})("p-keydown",function(){return i.changeEvent("p-keydown")}),og(),e0(),Wl(1,"po-divider"),Sl(2,"div",2),Wl(3,"po-info",3)(4,"po-info",4),og(),Wl(5,"po-divider"),Sl(6,"form",null,0)(8,"po-input",5),ww("ngModelChange",function(r){return Ky(s),nN(i.label,r)||(i.label=r),Xy(r)}),og(),e0(),Sl(9,"po-input",6),ww("ngModelChange",function(r){return Ky(s),nN(i.help,r)||(i.help=r),Xy(r)}),og(),e0(),Sl(10,"po-input",7),ww("ngModelChange",function(r){return Ky(s),nN(i.helperText,r)||(i.helperText=r),Xy(r)}),og(),e0(),Sl(11,"po-input",8),ww("ngModelChange",function(r){return Ky(s),nN(i.placeholder,r)||(i.placeholder=r),Xy(r)}),og(),e0(),Sl(12,"po-input",9),ww("ngModelChange",function(r){return Ky(s),nN(i.errorPattern,r)||(i.errorPattern=r),Xy(r)}),og(),e0(),Sl(13,"po-datepicker",10),ww("ngModelChange",function(r){return Ky(s),nN(i.minDate,r)||(i.minDate=r),Xy(r)}),og(),e0(),Sl(14,"po-datepicker",11),ww("ngModelChange",function(r){return Ky(s),nN(i.maxDate,r)||(i.maxDate=r),Xy(r)}),og(),e0(),Sl(15,"po-checkbox-group",12),ww("ngModelChange",function(r){return Ky(s),nN(i.properties,r)||(i.properties=r),Xy(r)}),og(),e0(),Sl(16,"po-radio-group",13),ww("ngModelChange",function(r){return Ky(s),nN(i.locale,r)||(i.locale=r),Xy(r)}),og(),e0(),Sl(17,"po-radio-group",14),ww("ngModelChange",function(r){return Ky(s),nN(i.format,r)||(i.format=r),Xy(r)}),og(),e0(),Sl(18,"po-radio-group",15),ww("ngModelChange",function(r){return Ky(s),nN(i.isoFormat,r)||(i.isoFormat=r),Xy(r)}),og(),e0(),Sl(19,"po-radio-group",16),ww("ngModelChange",function(r){return Ky(s),nN(i.size,r)||(i.size=r),Xy(r)}),og(),e0(),Sl(20,"div",2)(21,"po-button",17),ft("p-click",function(){return i.restore()}),og()()();}l&2&&(Ew("ngModel",i.datepicker),nw("p-helper",i.helperText)("p-clean",i.properties.includes("clean"))("p-disabled",i.properties.includes("disabled"))("p-max-date",i.maxDate)("p-error-pattern",i.errorPattern)("p-format",i.format)("p-help",i.help)("p-iso-format",i.isoFormat)("p-label",i.label)("p-locale",i.locale)("p-min-date",i.minDate)("p-no-autocomplete",i.properties==null?null:i.properties.includes("noAutocomplete"))("p-optional",i.properties.includes("optional"))("p-placeholder",i.placeholder)("p-readonly",i.properties.includes("readonly"))("p-required",i.properties.includes("required"))("p-required-field-error-message",i.properties.includes("requiredFieldErrorMessage"))("p-show-required",i.properties.includes("showRequired"))("p-label-text-wrap",i.properties==null?null:i.properties.includes("labelTextWrap"))("p-loading",i.properties.includes("loading"))("p-compact-label",i.properties==null?null:i.properties.includes("compactLabel"))("p-size",i.size)("p-error-limit",i.properties==null?null:i.properties.includes("errorLimit")),n0(),Lp(3),nw("p-value",i.datepicker),Lp(),nw("p-value",i.event),Lp(4),Ew("ngModel",i.label),n0(),Lp(),Ew("ngModel",i.help),n0(),Lp(),Ew("ngModel",i.helperText),n0(),Lp(),Ew("ngModel",i.placeholder),n0(),Lp(),Ew("ngModel",i.errorPattern),n0(),Lp(),Ew("ngModel",i.minDate),nw("p-max-date",i.maxDate)("p-format",i.format),n0(),Lp(),Ew("ngModel",i.maxDate),nw("p-format",i.format)("p-min-date",i.minDate),n0(),Lp(),Ew("ngModel",i.properties),nw("p-options",i.propertiesOptions),n0(),Lp(),Ew("ngModel",i.locale),nw("p-options",i.localeOptions),n0(),Lp(),Ew("ngModel",i.format),nw("p-options",i.formatOptions),n0(),Lp(),Ew("ngModel",i.isoFormat),nw("p-options",i.isoFormatOptions),n0(),Lp(),Ew("ngModel",i.size),nw("p-options",i.sizeOptions),n0());},dependencies:[Z9,G9,q9,_k,mk,Qt,mv,b3,Pde,L3,wde,Ghe],encapsulation:2,changeDetection:1})}return a})();var Le=a=>({"docs-sample-code-tabs":a}),be=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-datepicker-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Datepicker Labs"),og(),Sl(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-datepicker-labs/sample-po-datepicker-labs.component.html"),og(),Sl(13,"pre",7),eN(14,`<po-datepicker
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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-datepicker-labs/sample-po-datepicker-labs.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-datepicker-labs"),og(),Wl(23,"hr")),l&2&&(Lp(5),$x("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,Le,i.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,fe],encapsulation:2})}return a})();var he=(()=>{class a{selectedYear=new Date("2026-04-30").getFullYear();event;changeEvent(m){this.event=m;}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-datepicker-year"]],standalone:false,decls:5,vars:3,consts:[["name","yearPicker","p-label","Year Picker","p-placeholder","Select a year","p-mode","year",3,"ngModelChange","p-change","ngModel"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"]],template:function(l,i){l&1&&(Sl(0,"po-datepicker",0),ww("ngModelChange",function(c){return nN(i.selectedYear,c)||(i.selectedYear=c),c}),ft("p-change",function(c){return i.changeEvent(c)}),og(),e0(),Wl(1,"po-divider"),Sl(2,"div",1),Wl(3,"po-info",2)(4,"po-info",3),og()),l&2&&(Ew("ngModel",i.selectedYear),n0(),Lp(3),nw("p-value",i.selectedYear),Lp(),nw("p-value",i.event));},dependencies:[G9,_k,mv,Pde,Ghe],encapsulation:2,changeDetection:1})}return a})();var Ne=a=>({"docs-sample-code-tabs":a}),Se=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-datepicker-year-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Datepicker Year"),og(),Sl(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-datepicker-year/sample-po-datepicker-year.component.html"),og(),Sl(13,"pre",7),eN(14,`<po-datepicker
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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-datepicker-year/sample-po-datepicker-year.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-datepicker-year"),og(),Wl(23,"hr")),l&2&&(Lp(5),$x("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,Ne,i.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,he],encapsulation:2})}return a})();var ve=(()=>{class a{selectedMonthYear=new Date("2026-12-02");event;changeEvent(m){this.event=m;}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-datepicker-month-year"]],standalone:false,decls:5,vars:3,consts:[["name","monthYearPicker","p-label","Month/Year Picker","p-placeholder","Select month and year","p-mode","month-year",3,"ngModelChange","p-change","ngModel"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"]],template:function(l,i){l&1&&(Sl(0,"po-datepicker",0),ww("ngModelChange",function(c){return nN(i.selectedMonthYear,c)||(i.selectedMonthYear=c),c}),ft("p-change",function(c){return i.changeEvent(c)}),og(),e0(),Wl(1,"po-divider"),Sl(2,"div",1),Wl(3,"po-info",2)(4,"po-info",3),og()),l&2&&(Ew("ngModel",i.selectedMonthYear),n0(),Lp(3),nw("p-value",i.selectedMonthYear),Lp(),nw("p-value",i.event));},dependencies:[G9,_k,mv,Pde,Ghe],encapsulation:2,changeDetection:1})}return a})();var ze=a=>({"docs-sample-code-tabs":a}),xe=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-datepicker-month-year-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Datepicker MonthYear"),og(),Sl(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-datepicker-month-year/sample-po-datepicker-month-year.component.html"),og(),Sl(13,"pre",7),eN(14,`<po-datepicker
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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-datepicker-month-year/sample-po-datepicker-month-year.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-datepicker-month-year"),og(),Wl(23,"hr")),l&2&&(Lp(5),$x("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,ze,i.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,ve],encapsulation:2})}return a})();var je=["formAirfare"],ye=(()=>{class a{poDialog=f(Lde);poNotification=f(Yp);formAirfare;accompany=0;destination;endDate=new Date;origin;startDate=new Date;ticketClass="Economy";accompanyNumber=[{value:0,label:"0"},{value:1,label:"1"},{value:2,label:"2"},{value:3,label:"3"},{value:4,label:"4"},{value:5,label:"5"},{value:6,label:"6"},{value:7,label:"7"},{value:8,label:"8"}];ticketClassOptions=[{value:"Economy",label:"Economy"},{value:"Premium",label:"Premium"},{value:"Business",label:"Business"},{value:"First",label:"First"}];apply(){let m=`Would you like to confirm the ticket from ${this.origin} to ${this.destination} with departure date at
    ${this.getFormatedDate(this.startDate)} and return at ${this.getFormatedDate(this.endDate)} with ${this.accompany} companions in
    ${this.ticketClass} class?`;this.poDialog.confirm({title:"Confirm",message:m,confirm:()=>{this.poNotification.success("Booking Confirmed"),this.formAirfare.reset({accompany:0,endDate:new Date,startDate:new Date,ticketClass:"Economy"});},cancel:()=>{this.poNotification.warning("Booking Canceled");}});}getFormatedDate(m){return m&&m.slice(0,10)}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-datepicker-airfare"]],viewQuery:function(l,i){if(l&1&&ql(je,7),l&2){let s;lo(s=uo())&&(i.formAirfare=s.first);}},standalone:false,decls:13,vars:11,consts:[["formAirfare","ngForm"],[1,"po-row"],["name","startDate","p-clean","","p-format","dd/mm/yyyy","p-label","Date start","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-max-date"],["name","endDate","p-clean","","p-format","dd/mm/yyyy","p-label","Date end","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-min-date"],["name","origin","p-placeholder","Flight origin","p-label","Origin","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","destination","p-label","Destination","p-placeholder","Flight destination","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["clas","po-row"],["name","ticketClass","p-label","Class","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","accompany","p-label","Accompany","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","applyButton","p-label","Apply",1,"po-md-3","po-offset-md-9","po-offset-lg-9",3,"p-click","p-disabled"]],template:function(l,i){if(l&1){let s=wx();Sl(0,"form",null,0)(2,"div",1)(3,"po-datepicker",2),ww("ngModelChange",function(r){return Ky(s),nN(i.startDate,r)||(i.startDate=r),Xy(r)}),og(),e0(),Sl(4,"po-datepicker",3),ww("ngModelChange",function(r){return Ky(s),nN(i.endDate,r)||(i.endDate=r),Xy(r)}),og(),e0(),og(),Sl(5,"div",1)(6,"po-input",4),ww("ngModelChange",function(r){return Ky(s),nN(i.origin,r)||(i.origin=r),Xy(r)}),og(),e0(),Sl(7,"po-input",5),ww("ngModelChange",function(r){return Ky(s),nN(i.destination,r)||(i.destination=r),Xy(r)}),og(),e0(),og(),Sl(8,"div",6)(9,"po-select",7),ww("ngModelChange",function(r){return Ky(s),nN(i.ticketClass,r)||(i.ticketClass=r),Xy(r)}),og(),e0(),Sl(10,"po-select",8),ww("ngModelChange",function(r){return Ky(s),nN(i.accompany,r)||(i.accompany=r),Xy(r)}),og(),e0(),og(),Sl(11,"div",1)(12,"po-button",9),ft("p-click",function(){return i.apply()}),og()()();}if(l&2){let s=Nx(1);Lp(3),Ew("ngModel",i.startDate),nw("p-max-date",i.endDate),n0(),Lp(),Ew("ngModel",i.endDate),nw("p-min-date",i.startDate),n0(),Lp(2),Ew("ngModel",i.origin),n0(),Lp(),Ew("ngModel",i.destination),n0(),Lp(2),Ew("ngModel",i.ticketClass),nw("p-options",i.ticketClassOptions),n0(),Lp(),Ew("ngModel",i.accompany),nw("p-options",i.accompanyNumber),n0(),Lp(2),nw("p-disabled",s.invalid);}},dependencies:[Z9,G9,q9,_k,mk,Qt,Pde,L3,Hhe],encapsulation:2,changeDetection:1})}return a})();var He=a=>({"docs-sample-code-tabs":a}),Ce=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-datepicker-airfare-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Datepicker - Airfare"),og(),Sl(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-datepicker-airfare/sample-po-datepicker-airfare.component.html"),og(),Sl(13,"pre",7),eN(14,`<form #formAirfare="ngForm">
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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-datepicker-airfare/sample-po-datepicker-airfare.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-datepicker-airfare"),og(),Wl(23,"hr")),l&2&&(Lp(5),$x("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,He,i.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,ye],encapsulation:2})}return a})();var ke=(()=>{class a{formBuilder=f(Q9);poDialog=f(Lde);poNotification=f(Yp);formAirfare;accompanyNumber=[{value:0,label:"0"},{value:1,label:"1"},{value:2,label:"2"},{value:3,label:"3"},{value:4,label:"4"},{value:5,label:"5"},{value:6,label:"6"},{value:7,label:"7"},{value:8,label:"8"}];ticketClassOptions=[{value:"Economy",label:"Economy"},{value:"Premium",label:"Premium"},{value:"Business",label:"Business"},{value:"First",label:"First"}];ngOnInit(){this.formAirfare=this.formBuilder.group({accompany:[0,lm.required],destination:["",lm.required],endDate:[new Date,lm.required],origin:["",lm.required],startDate:[new Date,lm.required],ticketClass:["Economy",lm.required]});}apply(m){let{accompany:l,destination:i,endDate:s,origin:c,ticketClass:r,startDate:Me}=m.value,Te=`Would you like to confirm the ticket from ${c} to ${i} with departure date at
    ${this.getFormatedDate(Me)} and return at ${this.getFormatedDate(s)} with ${l} companions in
    ${r} class?`;this.poDialog.confirm({title:"Confirm",message:Te,confirm:()=>{this.poNotification.success("Booking Confirmed"),this.formAirfare.reset({accompany:0,endDate:new Date,startDate:new Date,ticketClass:"Economy"});},cancel:()=>{this.poNotification.warning("Booking Canceled");}});}getFormatedDate(m){return m&&m.slice(0,10)}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-datepicker-airfare-reactive-form"]],standalone:false,decls:12,vars:6,consts:[[3,"formGroup"],[1,"po-row"],["formControlName","startDate","p-clean","","p-format","dd/mm/yyyy","p-label","Date start",1,"po-md-6",3,"p-max-date"],["formControlName","endDate","p-clean","","p-format","dd/mm/yyyy","p-label","Date end",1,"po-md-6",3,"p-min-date"],["formControlName","origin","p-placeholder","Flight origin","p-label","Origin",1,"po-md-6"],["formControlName","destination","p-label","Destination","p-placeholder","Flight destination",1,"po-md-6"],["clas","po-row"],["formControlName","ticketClass","p-label","Class",1,"po-md-6",3,"p-options"],["formControlName","accompany","p-label","Accompany",1,"po-md-6",3,"p-options"],["name","applyButton","p-label","Apply",1,"po-md-3","po-offset-md-9","po-offset-lg-9",3,"p-click","p-disabled"]],template:function(l,i){l&1&&(Sl(0,"form",0)(1,"div",1),Wl(2,"po-datepicker",2),e0(),Wl(3,"po-datepicker",3),e0(),og(),Sl(4,"div",1),Wl(5,"po-input",4),e0(),Wl(6,"po-input",5),e0(),og(),Sl(7,"div",6),Wl(8,"po-select",7),e0(),Wl(9,"po-select",8),e0(),og(),Sl(10,"div",1)(11,"po-button",9),ft("p-click",function(){return i.apply(i.formAirfare)}),og()()()),l&2&&(nw("formGroup",i.formAirfare),Lp(2),nw("p-max-date",i.formAirfare.get("endDate").value),n0(),Lp(),nw("p-min-date",i.formAirfare.get("startDate").value),n0(),Lp(2),n0(),Lp(),n0(),Lp(2),nw("p-options",i.ticketClassOptions),n0(),Lp(),nw("p-options",i.accompanyNumber),n0(),Lp(2),nw("p-disabled",i.formAirfare.invalid));},dependencies:[Z9,G9,q9,Mk,Sk,Qt,Pde,L3,Hhe],encapsulation:2,changeDetection:1})}return a})();var Qe=a=>({"docs-sample-code-tabs":a}),De=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-datepicker-airfare-reactive-form-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Datepicker - Airfare Reactive Form"),og(),Sl(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-datepicker-airfare-reactive-form/sample-po-datepicker-airfare-reactive-form.component.html"),og(),Sl(13,"pre",7),eN(14,`<form [formGroup]="formAirfare">
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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-datepicker-airfare-reactive-form/sample-po-datepicker-airfare-reactive-form.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-datepicker-airfare-reactive-form"),og(),Wl(23,"hr")),l&2&&(Lp(5),$x("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,Qe,i.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,ke],encapsulation:2})}return a})();var we=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-datepicker-doc"]],standalone:false,decls:1291,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://www.w3schools.com/js/js_dates.asp"],["href","https://www.w3schools.com/jsref/jsref_setfullyear.asp"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["href","/documentation/po-i18n"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","(value)","=>","Observable<boolean>"],["pan","",1,"docs-api-property-type","PoDatepickerIsoFormat"],["pan","",1,"docs-api-property-type","Date"],["pan","",1,"docs-api-property-type","'month-year'"],["pan","",1,"docs-api-property-type","'year'"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-helper"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","number"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"]],template:function(l,i){l&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),eN(3,"import { PoFieldModule } from '@po-ui/ng-components';"),og()(),Sl(4,"div",2)(5,"p"),eN(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),og(),Sl(7,"blockquote")(8,"p"),eN(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),Sl(10,"code"),eN(11,"FormsModule"),og(),eN(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Sl(13,"code"),eN(14,"ReactiveFormsModule"),og(),eN(15,", ambos nativos do Angular."),og()()(),Sl(16,"h3",3),eN(17,"Componente"),og(),Sl(18,"h4",4)(19,"code",5),eN(20,"PoDatepickerComponent"),og()(),Sl(21,"div",2)(22,"p"),eN(23,"O "),Sl(24,"code"),eN(25,"po-datepicker"),og(),eN(26," \xE9 um componente espec\xEDfico para manipula\xE7\xE3o de datas permitindo a digita\xE7\xE3o e / ou sele\xE7\xE3o."),og(),Sl(27,"p"),eN(28,`O formato de exibi\xE7\xE3o da data, ou seja, o formato que \xE9 apresentado ao usu\xE1rio \xE9 o dd/mm/yyyy,
mas podem ser definidos outros padr\xF5es (veja mais na propriedade `),Sl(29,"code"),eN(30,"p-format"),og(),eN(31,")."),og(),Sl(32,"p"),eN(33,`O idioma padr\xE3o do calend\xE1rio ser\xE1 exibido de acordo com o navegador, caso tenha necessidade de alterar
use a propriedade `),Sl(34,"code"),eN(35,"p-locale"),og(),eN(36,"."),og(),Sl(37,"p"),eN(38,`O datepicker aceita tr\xEAs formatos de data: o E8601DZw (yyyy-mm-ddThh:mm:ss+|-hh:mm), o E8601DAw (yyyy-mm-dd) e o
Date padr\xE3o do Javascript.`),og(),Sl(39,"blockquote")(40,"p"),eN(41,"Por padr\xE3o, o formato de sa\xEDda do "),Sl(42,"em"),eN(43,"model"),og(),eN(44,` se ajustar\xE1 conforme o formato de entrada. Se por acaso precisar controlar o valor de sa\xEDda,
a propriedade `),Sl(45,"code"),eN(46,"p-iso-format"),og(),eN(47," prov\xEA esse controle independentemente do formato de entrada. Veja abaixo os formatos dispon\xEDveis:"),og()(),Sl(48,"ul")(49,"li")(50,"p"),eN(51,"Formato de entrada e sa\xEDda (E8601DZw) - "),Sl(52,"code"),eN(53,"'2017-11-28T00:00:00-02:00'"),og(),eN(54,";"),og()(),Sl(55,"li")(56,"p"),eN(57,"Formato de entrada e sa\xEDda (E8601DAw) - "),Sl(58,"code"),eN(59,"'2017-11-28'"),og(),eN(60,";"),og()(),Sl(61,"li")(62,"p"),eN(63,"Formato de entrada (Date) - "),Sl(64,"code"),eN(65,"new Date(2017, 10, 28)"),og(),eN(66," e sa\xEDda (E8601DAw) - "),Sl(67,"code"),eN(68,"'2017-11-28'"),og(),eN(69,";"),og()()(),Sl(70,"p")(71,"strong"),eN(72,"Importante:"),og()(),Sl(73,"ul")(74,"li"),eN(75,"Para utilizar datas com ano inferior a 100, verificar o comportamento do "),Sl(76,"a",6)(77,"code"),eN(78,"new Date"),og()(),eN(79,`
e utilizar o m\xE9todo `),Sl(80,"a",7)(81,"code"),eN(82,"setFullYear"),og()(),eN(83,"."),og(),Sl(84,"li"),eN(85,"Caso a data esteja inv\xE1lida, o "),Sl(86,"code"),eN(87,"model"),og(),eN(88," receber\xE1 "),Sl(89,"strong"),eN(90,"'Data inv\xE1lida'"),og(),eN(91,"."),og(),Sl(92,"li"),eN(93,"Caso o "),Sl(94,"code"),eN(95,"input"),og(),eN(96," esteja passando um "),Sl(97,"code"),eN(98,"[(ngModel)]"),og(),eN(99,", mas n\xE3o tenha um "),Sl(100,"code"),eN(101,"name"),og(),eN(102,`, ent\xE3o ir\xE1 ocorrer um erro
do pr\xF3prio Angular (`),Sl(103,"code"),eN(104,'[ngModelOptions]="{standalone: true}"'),og(),eN(105,")."),og()(),Sl(106,"p"),eN(107,"Exemplo:"),og(),Sl(108,"pre")(109,"code"),eN(110,`<po-datepicker
  [(ngModel)]="pessoa.nome"
  [ngModelOptions]="{standalone: true}"
</po-datepicker>
`),og()(),Sl(111,"blockquote")(112,"p"),eN(113,"N\xE3o esque\xE7a de importar o "),Sl(114,"code"),eN(115,"FormsModule"),og(),eN(116," em seu m\xF3dulo, tal como para utilizar o "),Sl(117,"code"),eN(118,"input default"),og(),eN(119,"."),og()(),Sl(120,"h4"),eN(121,"Tokens customiz\xE1veis"),og(),Sl(122,"p"),eN(123,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS): "),Wl(124,"br"),eN(125,`
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),Sl(126,"code"),eN(127,".po-input"),og()(),Sl(128,"blockquote")(129,"p"),eN(130,"Para maiores informa\xE7\xF5es, acesse o guia "),Sl(131,"a",8),eN(132,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),eN(133,"."),og()(),Sl(134,"table")(135,"thead")(136,"tr")(137,"th"),eN(138,"Propriedade"),og(),Sl(139,"th"),eN(140,"Descri\xE7\xE3o"),og(),Sl(141,"th"),eN(142,"Valor Padr\xE3o"),og()()(),Sl(143,"tbody")(144,"tr")(145,"td")(146,"strong"),eN(147,"Default Values"),og()(),Wl(148,"td")(149,"td"),og(),Sl(150,"tr")(151,"td")(152,"code"),eN(153,"--font-family"),og()(),Sl(154,"td"),eN(155,"Fam\xEDlia tipogr\xE1fica usada"),og(),Sl(156,"td")(157,"code"),eN(158,"var(--font-family-theme)"),og()()(),Sl(159,"tr")(160,"td")(161,"code"),eN(162,"--font-size"),og()(),Sl(163,"td"),eN(164,"Tamanho da fonte"),og(),Sl(165,"td")(166,"code"),eN(167,"var(--font-size-default)"),og()()(),Sl(168,"tr")(169,"td")(170,"code"),eN(171,"--text-color-placeholder"),og(),eN(172," \xA0"),og(),Sl(173,"td"),eN(174,"Cor principal do texto do placeholder"),og(),Sl(175,"td")(176,"code"),eN(177,"var(--color-neutral-light-30)"),og()()(),Sl(178,"tr")(179,"td")(180,"code"),eN(181,"--color"),og()(),Sl(182,"td"),eN(183,"Cor principal do datepicker"),og(),Sl(184,"td")(185,"code"),eN(186,"var(--color-neutral-dark-70)"),og()()(),Sl(187,"tr")(188,"td")(189,"code"),eN(190,"--background"),og()(),Sl(191,"td"),eN(192,"Cor de background"),og(),Sl(193,"td")(194,"code"),eN(195,"var(--color-neutral-light-05)"),og()()(),Sl(196,"tr")(197,"td")(198,"code"),eN(199,"--padding"),og()(),Sl(200,"td"),eN(201,"Preenchimento"),og(),Sl(202,"td")(203,"code"),eN(204,"0 0.5rem"),og()()(),Sl(205,"tr")(206,"td")(207,"code"),eN(208,"--text-color"),og()(),Sl(209,"td"),eN(210,"Cor do texto"),og(),Sl(211,"td")(212,"code"),eN(213,"var(--color-neutral-dark-90)"),og()()(),Sl(214,"tr")(215,"td")(216,"code"),eN(217,"--field-container-title-justify"),og()(),Sl(218,"td"),eN(219,"Alinhamento horizontal do t\xEDtulo ("),Sl(220,"code"),eN(221,"justify-content"),og(),eN(222,")"),og(),Sl(223,"td")(224,"code"),eN(225,"space-between"),og()()(),Sl(226,"tr")(227,"td")(228,"code"),eN(229,"--field-container-title-flex"),og()(),Sl(230,"td"),eN(231,"Flex do t\xEDtulo ("),Sl(232,"code"),eN(233,"flex"),og(),eN(234,")"),og(),Sl(235,"td")(236,"code"),eN(237,"1 auto"),og()()(),Sl(238,"tr")(239,"td")(240,"strong"),eN(241,"Hover"),og()(),Wl(242,"td")(243,"td"),og(),Sl(244,"tr")(245,"td")(246,"code"),eN(247,"--color-hover"),og()(),Sl(248,"td"),eN(249,"Cor principal no estado hover"),og(),Sl(250,"td")(251,"code"),eN(252,"var(--color-brand-01-dark)"),og()()(),Sl(253,"tr")(254,"td")(255,"code"),eN(256,"--background-hover"),og()(),Sl(257,"td"),eN(258,"Cor de background no estado hover"),og(),Sl(259,"td")(260,"code"),eN(261,"var(--color-brand-01-lightest)"),og()()(),Sl(262,"tr")(263,"td")(264,"strong"),eN(265,"Focused"),og()(),Wl(266,"td")(267,"td"),og(),Sl(268,"tr")(269,"td")(270,"code"),eN(271,"--color-focused"),og()(),Sl(272,"td"),eN(273,"Cor principal no estado de focus"),og(),Sl(274,"td")(275,"code"),eN(276,"var(--color-action-default)"),og()()(),Sl(277,"tr")(278,"td")(279,"code"),eN(280,"--outline-color-focused"),og()(),Sl(281,"td"),eN(282,"Cor do outline do estado de focus"),og(),Sl(283,"td")(284,"code"),eN(285,"var(--color-action-focus)"),og()()(),Sl(286,"tr")(287,"td")(288,"strong"),eN(289,"Disabled"),og()(),Wl(290,"td")(291,"td"),og(),Sl(292,"tr")(293,"td")(294,"code"),eN(295,"--color-disabled"),og()(),Sl(296,"td"),eN(297,"Cor principal no estado disabled"),og(),Sl(298,"td")(299,"code"),eN(300,"var(--color-neutral-light-30)"),og()()(),Sl(301,"tr")(302,"td")(303,"code"),eN(304,"--background-disabled"),og()(),Sl(305,"td"),eN(306,"Cor de background no estado disabled \xA0"),og(),Sl(307,"td")(308,"code"),eN(309,"var(--color-neutral-light-20)"),og()()(),Sl(310,"tr")(311,"td")(312,"code"),eN(313,"--text-color-disabled"),og()(),Sl(314,"td"),eN(315,"Cor do texto no estado disabled"),og(),Sl(316,"td")(317,"code"),eN(318,"var(--color-neutral-dark-70)"),og()()()()()(),Sl(319,"div",9)(320,"h4",10),eN(321,"Seletor"),og(),Sl(322,"pre",11),eN(323,`<po-datepicker
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
`),og()(),Sl(324,"h4",12),eN(325,"Propriedades"),og(),Sl(326,"table",13)(327,"tr",14)(328,"th",15),eN(329,"Nome"),og(),Sl(330,"th",15),eN(331,"Tipo"),og(),Sl(332,"th",15),eN(333,"Padr\xE3o"),og(),Sl(334,"th",15),eN(335,"Descri\xE7\xE3o"),og()(),Sl(336,"tr",16)(337,"td",17)(338,"div",18)(339,"span",19),eN(340,"p-locale"),Wl(341,"br"),og()()(),Sl(342,"td",20)(343,"code",21),eN(344,"string"),og()(),Sl(345,"td",22),eN(346,"-"),og(),Sl(347,"td",23)(348,"em")(349,"strong"),eN(350,"(opcional)"),og()(),Sl(351,"p"),eN(352,"Idioma do Datepicker."),og(),Sl(353,"blockquote")(354,"p"),eN(355,"O locale padr\xE3o sera recuperado com base no "),Sl(356,"a",24)(357,"code"),eN(358,"PoI18nService"),og()(),eN(359," ou "),Sl(360,"em"),eN(361,"browser"),og(),eN(362,"."),og()()()(),Sl(363,"tr",16)(364,"td",17)(365,"div",25)(366,"span",26),eN(367," (p-additional-help)"),Wl(368,"br"),og()(),Sl(369,"div",27),eN(370,"Deprecated"),og()(),Sl(371,"td",20)(372,"code",28),eN(373,"EventEmitter"),og()(),Sl(374,"td",22),eN(375,"-"),og(),Sl(376,"td",23)(377,"em")(378,"strong"),eN(379,"(opcional)"),og()(),Sl(380,"p"),eN(381,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),og(),Sl(382,"blockquote")(383,"p"),eN(384,"Essa propriedade est\xE1 "),Sl(385,"strong"),eN(386,"depreciada"),og(),eN(387," e ser\xE1 removida na vers\xE3o "),Sl(388,"code"),eN(389,"23.x.x"),og(),eN(390,". Recomendamos utilizar a propriedade "),Sl(391,"code"),eN(392,"p-helper"),og(),eN(393," que oferece mais recursos e flexibilidade."),og()()()(),Sl(394,"tr",16)(395,"td",17)(396,"div",18)(397,"span",19),eN(398," p-additional-help-tooltip"),Wl(399,"br"),og()(),Sl(400,"div",27),eN(401,"Deprecated"),og()(),Sl(402,"td",20)(403,"code",21),eN(404,"string"),og()(),Sl(405,"td",22),eN(406,"-"),og(),Sl(407,"td",23)(408,"em")(409,"strong"),eN(410,"(opcional)"),og()(),Sl(411,"p"),eN(412,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),Sl(413,"code"),eN(414,"po-helper"),og(),eN(415,`.
`),Sl(416,"strong"),eN(417,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),og()(),Sl(418,"blockquote")(419,"p"),eN(420,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),og()(),Sl(421,"blockquote")(422,"p"),eN(423,"Essa propriedade est\xE1 "),Sl(424,"strong"),eN(425,"depreciada"),og(),eN(426," e ser\xE1 removida na vers\xE3o "),Sl(427,"code"),eN(428,"23.x.x"),og(),eN(429,". Recomendamos utilizar a propriedade "),Sl(430,"code"),eN(431,"p-helper"),og(),eN(432," que oferece mais recursos e flexibilidade."),og()()()(),Sl(433,"tr",16)(434,"td",17)(435,"div",18)(436,"span",19),eN(437," p-append-in-body"),Wl(438,"br"),og()()(),Sl(439,"td",20)(440,"code",29),eN(441,"boolean"),og()(),Sl(442,"td",22)(443,"p")(444,"code"),eN(445,"false"),og()()(),Sl(446,"td",23)(447,"em")(448,"strong"),eN(449,"(opcional)"),og()(),Sl(450,"p"),eN(451,"Define que o "),Sl(452,"code"),eN(453,"calendar"),og(),eN(454," e/ou tooltip ("),Sl(455,"code"),eN(456,"p-additional-help-tooltip"),og(),eN(457," e/ou "),Sl(458,"code"),eN(459,"p-error-limit"),og(),eN(460,`) ser\xE3o inclu\xEDdos no body da
p\xE1gina e n\xE3o dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou
overflow escondido, garantindo o posicionamento correto de ambos pr\xF3ximo ao elemento.`),og(),Sl(461,"blockquote")(462,"p"),eN(463,"Quando utilizado com "),Sl(464,"code"),eN(465,"p-helper"),og(),eN(466,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),og()()()(),Sl(467,"tr",16)(468,"td",17)(469,"div",18)(470,"span",19),eN(471," p-auto-focus"),Wl(472,"br"),og()()(),Sl(473,"td",20)(474,"code",29),eN(475,"boolean"),og()(),Sl(476,"td",22)(477,"p")(478,"code"),eN(479,"false"),og()()(),Sl(480,"td",23)(481,"em")(482,"strong"),eN(483,"(opcional)"),og()(),Sl(484,"p"),eN(485,"Aplica foco no elemento ao ser iniciado."),og(),Sl(486,"blockquote")(487,"p"),eN(488,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),og()()()(),Sl(489,"tr",16)(490,"td",17)(491,"div",18)(492,"span",19),eN(493,"p-clean"),Wl(494,"br"),og()()(),Sl(495,"td",20)(496,"code",29),eN(497,"boolean"),og()(),Sl(498,"td",22),eN(499,"-"),og(),Sl(500,"td",23)(501,"em")(502,"strong"),eN(503,"(opcional)"),og()(),Sl(504,"p"),eN(505,"Habilita a\xE7\xE3o para limpar o campo."),og()()(),Sl(506,"tr",16)(507,"td",17)(508,"div",18)(509,"span",19),eN(510," p-compact-label"),Wl(511,"br"),og()()(),Sl(512,"td",20)(513,"code",29),eN(514,"boolean"),og()(),Sl(515,"td",22)(516,"p")(517,"code"),eN(518,"false"),og()()(),Sl(519,"td",23)(520,"em")(521,"strong"),eN(522,"(opcional)"),og()(),Sl(523,"p"),eN(524,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),og(),Sl(525,"p"),eN(526,"Quando habilitado ("),Sl(527,"code"),eN(528,"true"),og(),eN(529,"), o modo compacto afeta o conjunto composto por:"),og(),Sl(530,"ul")(531,"li")(532,"code"),eN(533,"po-label"),og()(),Sl(534,"li")(535,"code"),eN(536,"p-requirement (showRequired)"),og()(),Sl(537,"li")(538,"code"),eN(539,"po-helper"),og()()(),Sl(540,"p"),eN(541,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),og(),Sl(542,"p"),eN(543,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),og(),Sl(544,"ul")(545,"li")(546,"code"),eN(547,"--field-container-title-justify"),og()(),Sl(548,"li")(549,"code"),eN(550,"--field-container-title-flex"),og()()(),Sl(551,"p"),eN(552,"Exemplo:"),og(),Sl(553,"pre")(554,"code"),eN(555,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),og()(),Sl(556,"p"),eN(557,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),og()()(),Sl(558,"tr",16)(559,"td",17)(560,"div",18)(561,"span",19),eN(562,"p-disabled"),Wl(563,"br"),og()()(),Sl(564,"td",20)(565,"code",29),eN(566,"boolean"),og()(),Sl(567,"td",22),eN(568,"-"),og(),Sl(569,"td",23)(570,"em")(571,"strong"),eN(572,"(opcional)"),og()(),Sl(573,"p"),eN(574,"Desabilita o campo."),og()()(),Sl(575,"tr",16)(576,"td",17)(577,"div",18)(578,"span",19),eN(579," p-error-async"),Wl(580,"br"),og()()(),Sl(581,"td",20)(582,"code",30),eN(583,"(value) => Observable<boolean>"),og()(),Sl(584,"td",22),eN(585,"-"),og(),Sl(586,"td",23)(587,"em")(588,"strong"),eN(589,"(opcional)"),og()(),Sl(590,"p"),eN(591,`Fun\xE7\xE3o executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),Sl(592,"code"),eN(593,"change"),og(),eN(594,"."),og()()(),Sl(595,"tr",16)(596,"td",17)(597,"div",18)(598,"span",19),eN(599," p-error-limit"),Wl(600,"br"),og()()(),Sl(601,"td",20)(602,"code",29),eN(603,"boolean"),og()(),Sl(604,"td",22)(605,"p")(606,"code"),eN(607,"false"),og()()(),Sl(608,"td",23)(609,"em")(610,"strong"),eN(611,"(opcional)"),og()(),Sl(612,"p"),eN(613,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),og(),Sl(614,"blockquote")(615,"p"),eN(616,"Caso essa propriedade seja definida como "),Sl(617,"code"),eN(618,"true"),og(),eN(619,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),og()()()(),Sl(620,"tr",16)(621,"td",17)(622,"div",18)(623,"span",19),eN(624," p-error-pattern"),Wl(625,"br"),og()()(),Sl(626,"td",20)(627,"code",21),eN(628,"string"),og()(),Sl(629,"td",22),eN(630,"-"),og(),Sl(631,"td",23)(632,"em")(633,"strong"),eN(634,"(opcional)"),og()(),Sl(635,"p"),eN(636,"Mensagem apresentada quando a data for inv\xE1lida ou fora do per\xEDodo."),og(),Sl(637,"blockquote")(638,"p"),eN(639,`Por padr\xE3o, esta mensagem n\xE3o \xE9 apresentada quando o campo estiver vazio, mesmo que ele seja requerido.
Para exibir a mensagem com o campo vazio, utilize a propriedade `),Sl(640,"code"),eN(641,"p-required-field-error-message"),og(),eN(642," em conjunto."),og()()()(),Sl(643,"tr",16)(644,"td",17)(645,"div",18)(646,"span",19),eN(647," p-format"),Wl(648,"br"),og()()(),Sl(649,"td",20)(650,"code",21),eN(651,"string"),og()(),Sl(652,"td",22)(653,"p")(654,"code"),eN(655,"dd/mm/yyyy"),og()()(),Sl(656,"td",23)(657,"em")(658,"strong"),eN(659,"(opcional)"),og()(),Sl(660,"p"),eN(661,"Formato de exibi\xE7\xE3o da data."),og(),Sl(662,"p"),eN(663,"Valores v\xE1lidos:"),og(),Sl(664,"ul")(665,"li")(666,"code"),eN(667,"dd/mm/yyyy"),og()(),Sl(668,"li")(669,"code"),eN(670,"mm/dd/yyyy"),og()(),Sl(671,"li")(672,"code"),eN(673,"yyyy/mm/dd"),og()()(),Sl(674,"p"),eN(675,"Propriedade incompat\xEDvel com as varia\xE7\xF5es month-year e year."),og()()(),Sl(676,"tr",16)(677,"td",17)(678,"div",18)(679,"span",19),eN(680," p-help"),Wl(681,"br"),og()()(),Sl(682,"td",20)(683,"code",21),eN(684,"string"),og()(),Sl(685,"td",22),eN(686,"-"),og(),Sl(687,"td",23)(688,"em")(689,"strong"),eN(690,"(opcional)"),og()(),Sl(691,"p"),eN(692,"Texto de apoio do campo."),og()()(),Sl(693,"tr",16)(694,"td",17)(695,"div",18)(696,"span",19),eN(697," p-iso-format"),Wl(698,"br"),og()()(),Sl(699,"td",20)(700,"code",31),eN(701,"PoDatepickerIsoFormat"),og()(),Sl(702,"td",22),eN(703,"-"),og(),Sl(704,"td",23)(705,"em")(706,"strong"),eN(707,"(opcional)"),og()(),Sl(708,"p"),eN(709,"Padr\xE3o de formata\xE7\xE3o para sa\xEDda do "),Sl(710,"em"),eN(711,"model"),og(),eN(712,", independentemente do formato de entrada."),og(),Sl(713,"blockquote")(714,"p"),eN(715,"Veja os valores v\xE1lidos no "),Sl(716,"em"),eN(717,"enum"),og(),Sl(718,"code"),eN(719,"PoDatepickerIsoFormat"),og(),eN(720,"."),og()(),Sl(721,"p"),eN(722,"Propriedade incompat\xEDvel com as varia\xE7\xF5es month-year e year."),og()()(),Sl(723,"tr",16)(724,"td",17)(725,"div",25)(726,"span",26),eN(727," (p-keydown)"),Wl(728,"br"),og()()(),Sl(729,"td",20)(730,"code",28),eN(731,"EventEmitter"),og()(),Sl(732,"td",22),eN(733,"-"),og(),Sl(734,"td",23)(735,"em")(736,"strong"),eN(737,"(opcional)"),og()(),Sl(738,"p"),eN(739,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Sl(740,"code"),eN(741,"KeyboardEvent"),og(),eN(742," com informa\xE7\xF5es sobre a tecla."),og()()(),Sl(743,"tr",16)(744,"td",17)(745,"div",18)(746,"span",19),eN(747," p-label"),Wl(748,"br"),og()()(),Sl(749,"td",20)(750,"code",21),eN(751,"string"),og()(),Sl(752,"td",22),eN(753,"-"),og(),Sl(754,"td",23)(755,"em")(756,"strong"),eN(757,"(opcional)"),og()(),Sl(758,"p"),eN(759,"R\xF3tulo do campo."),og()()(),Sl(760,"tr",16)(761,"td",17)(762,"div",18)(763,"span",19),eN(764," p-label-text-wrap"),Wl(765,"br"),og()()(),Sl(766,"td",20)(767,"code",29),eN(768,"boolean"),og()(),Sl(769,"td",22)(770,"p")(771,"code"),eN(772,"false"),og()()(),Sl(773,"td",23)(774,"em")(775,"strong"),eN(776,"(opcional)"),og()(),Sl(777,"p"),eN(778,"Habilita a quebra autom\xE1tica do texto da propriedade "),Sl(779,"code"),eN(780,"p-label"),og(),eN(781,". Quando "),Sl(782,"code"),eN(783,"p-label-text-wrap"),og(),eN(784,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),og()()(),Sl(785,"tr",16)(786,"td",17)(787,"div",18)(788,"span",19),eN(789," p-loading"),Wl(790,"br"),og()()(),Sl(791,"td",20)(792,"code",29),eN(793,"boolean"),og()(),Sl(794,"td",22)(795,"p")(796,"code"),eN(797,"false"),og()()(),Sl(798,"td",23)(799,"em")(800,"strong"),eN(801,"(opcional)"),og()(),Sl(802,"p"),eN(803,"Exibe um \xEDcone de carregamento no lado direito do campo para sinalizar que uma opera\xE7\xE3o est\xE1 em andamento."),og()()(),Sl(804,"tr",16)(805,"td",17)(806,"div",18)(807,"span",19),eN(808," p-max-date"),Wl(809,"br"),og()()(),Sl(810,"td",20)(811,"code",21),eN(812,"string "),og(),Sl(813,"code",32),eN(814," Date"),og()(),Sl(815,"td",22),eN(816,"-"),og(),Sl(817,"td",23)(818,"em")(819,"strong"),eN(820,"(opcional)"),og()(),Sl(821,"p"),eN(822,"Define uma data m\xE1xima para o "),Sl(823,"code"),eN(824,"po-datepicker"),og(),eN(825,"."),og()()(),Sl(826,"tr",16)(827,"td",17)(828,"div",18)(829,"span",19),eN(830," p-min-date"),Wl(831,"br"),og()()(),Sl(832,"td",20)(833,"code",21),eN(834,"string "),og(),Sl(835,"code",32),eN(836," Date"),og()(),Sl(837,"td",22),eN(838,"-"),og(),Sl(839,"td",23)(840,"em")(841,"strong"),eN(842,"(opcional)"),og()(),Sl(843,"p"),eN(844,"Define uma data m\xEDnima para o "),Sl(845,"code"),eN(846,"po-datepicker"),og(),eN(847,"."),og()()(),Sl(848,"tr",16)(849,"td",17)(850,"div",18)(851,"span",19),eN(852," p-mode"),Wl(853,"br"),og()()(),Sl(854,"td",20)(855,"code",33),eN(856,"'month-year' "),og(),Sl(857,"code",34),eN(858," 'year'"),og()(),Sl(859,"td",22),eN(860,"-"),og(),Sl(861,"td",23)(862,"em")(863,"strong"),eN(864,"(opcional)"),og()(),Sl(865,"p"),eN(866,"Define o modo de opera\xE7\xE3o do datepicker."),og(),Sl(867,"p"),eN(868,"Permite configurar o componente para sele\xE7\xE3o de:"),og(),Sl(869,"ul")(870,"li"),eN(871,"M\xEAs e ano ("),Sl(872,"code"),eN(873,"month-year"),og(),eN(874,");"),og(),Sl(875,"li"),eN(876,"Apenas ano ("),Sl(877,"code"),eN(878,"year"),og(),eN(879,")."),og()()()(),Sl(880,"tr",16)(881,"td",17)(882,"div",18)(883,"span",19),eN(884," p-no-autocomplete"),Wl(885,"br"),og()()(),Sl(886,"td",20)(887,"code",29),eN(888,"boolean"),og()(),Sl(889,"td",22)(890,"p")(891,"code"),eN(892,"false"),og()()(),Sl(893,"td",23)(894,"em")(895,"strong"),eN(896,"(opcional)"),og()(),Sl(897,"p"),eN(898,"Define a propriedade nativa "),Sl(899,"code"),eN(900,"autocomplete"),og(),eN(901," do campo como "),Sl(902,"code"),eN(903,"off"),og(),eN(904,"."),og()()(),Sl(905,"tr",16)(906,"td",17)(907,"div",25)(908,"span",26),eN(909," (p-blur)"),Wl(910,"br"),og()()(),Sl(911,"td",20)(912,"code",28),eN(913,"EventEmitter"),og()(),Sl(914,"td",22),eN(915,"-"),og(),Sl(916,"td",23)(917,"em")(918,"strong"),eN(919,"(opcional)"),og()(),Sl(920,"p"),eN(921,"Evento disparado ao sair do campo."),og()()(),Sl(922,"tr",16)(923,"td",17)(924,"div",25)(925,"span",26),eN(926," (p-change)"),Wl(927,"br"),og()()(),Sl(928,"td",20)(929,"code",28),eN(930,"EventEmitter"),og()(),Sl(931,"td",22),eN(932,"-"),og(),Sl(933,"td",23)(934,"em")(935,"strong"),eN(936,"(opcional)"),og()(),Sl(937,"p"),eN(938,"Evento disparado ao alterar valor do campo."),og()()(),Sl(939,"tr",16)(940,"td",17)(941,"div",18)(942,"span",19),eN(943," p-optional"),Wl(944,"br"),og()()(),Sl(945,"td",20)(946,"code",29),eN(947,"boolean"),og()(),Sl(948,"td",22)(949,"p")(950,"code"),eN(951,"false"),og()()(),Sl(952,"td",23)(953,"em")(954,"strong"),eN(955,"(opcional)"),og()(),Sl(956,"p"),eN(957,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),og(),Sl(958,"blockquote")(959,"p"),eN(960,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),og()(),Sl(961,"ul")(962,"li"),eN(963,"O campo conter "),Sl(964,"code"),eN(965,"p-required"),og(),eN(966,";"),og(),Sl(967,"li"),eN(968,"N\xE3o possuir "),Sl(969,"code"),eN(970,"p-help"),og(),eN(971," e/ou "),Sl(972,"code"),eN(973,"p-label"),og(),eN(974,"."),og()()()(),Sl(975,"tr",16)(976,"td",17)(977,"div",18)(978,"span",19),eN(979," p-placeholder"),Wl(980,"br"),og()()(),Sl(981,"td",20)(982,"code",21),eN(983,"string"),og()(),Sl(984,"td",22),eN(985,"-"),og(),Sl(986,"td",23)(987,"em")(988,"strong"),eN(989,"(opcional)"),og()(),Sl(990,"p"),eN(991,"Mensagem que aparecer\xE1 enquanto o campo n\xE3o estiver preenchido."),og()()(),Sl(992,"tr",16)(993,"td",17)(994,"div",18)(995,"span",19),eN(996," p-helper"),Wl(997,"br"),og()()(),Sl(998,"td",20)(999,"code",35),eN(1e3,"PoHelperOptions "),og(),Sl(1001,"code",21),eN(1002," string"),og()(),Sl(1003,"td",22),eN(1004,"-"),og(),Sl(1005,"td",23)(1006,"em")(1007,"strong"),eN(1008,"(opcional)"),og()(),Sl(1009,"p"),eN(1010,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label quando a propriedade "),Sl(1011,"code"),eN(1012,"p-label"),og(),eN(1013," for definida, ou, ao lado do componente na aus\xEAncia da propriedade "),Sl(1014,"code"),eN(1015,"p-label"),og(),eN(1016,"."),og(),Sl(1017,"blockquote")(1018,"p"),eN(1019,"Para mais informa\xE7\xF5es acesse: "),Sl(1020,"a",36),eN(1021,"https://po-ui.io/documentation/po-helper"),og(),eN(1022,"."),og()(),Sl(1023,"blockquote")(1024,"p"),eN(1025,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),Sl(1026,"code"),eN(1027,"p-additional-help-tooltip"),og(),eN(1028," e "),Sl(1029,"code"),eN(1030,"p-additional-help"),og(),eN(1031,") ser\xE1 ignorado."),og()()()(),Sl(1032,"tr",16)(1033,"td",17)(1034,"div",18)(1035,"span",19),eN(1036,"p-readonly"),Wl(1037,"br"),og()()(),Sl(1038,"td",20)(1039,"code",29),eN(1040,"boolean"),og()(),Sl(1041,"td",22),eN(1042,"-"),og(),Sl(1043,"td",23)(1044,"em")(1045,"strong"),eN(1046,"(opcional)"),og()(),Sl(1047,"p"),eN(1048,"Torna o elemento somente leitura."),og()()(),Sl(1049,"tr",16)(1050,"td",17)(1051,"div",18)(1052,"span",19),eN(1053,"p-required"),Wl(1054,"br"),og()()(),Sl(1055,"td",20)(1056,"code",29),eN(1057,"boolean"),og()(),Sl(1058,"td",22)(1059,"p")(1060,"code"),eN(1061,"false"),og()()(),Sl(1062,"td",23)(1063,"em")(1064,"strong"),eN(1065,"(opcional)"),og()(),Sl(1066,"p"),eN(1067,"Define que o campo ser\xE1 obrigat\xF3rio."),og()()(),Sl(1068,"tr",16)(1069,"td",17)(1070,"div",18)(1071,"span",19),eN(1072," p-required-field-error-message"),Wl(1073,"br"),og()()(),Sl(1074,"td",20)(1075,"code",29),eN(1076,"boolean"),og()(),Sl(1077,"td",22)(1078,"p")(1079,"code"),eN(1080,"false"),og()()(),Sl(1081,"td",23)(1082,"em")(1083,"strong"),eN(1084,"(opcional)"),og()(),Sl(1085,"p"),eN(1086,"Exibe a mensagem setada na propriedade "),Sl(1087,"code"),eN(1088,"p-error-pattern"),og(),eN(1089," se o campo estiver vazio e for requerido."),og(),Sl(1090,"blockquote")(1091,"p"),eN(1092,"Necess\xE1rio que a propriedade "),Sl(1093,"code"),eN(1094,"p-required"),og(),eN(1095," esteja habilitada."),og()()()(),Sl(1096,"tr",16)(1097,"td",17)(1098,"div",18)(1099,"span",19),eN(1100," p-show-required"),Wl(1101,"br"),og()()(),Sl(1102,"td",20)(1103,"code",29),eN(1104,"boolean"),og()(),Sl(1105,"td",22),eN(1106,"-"),og(),Sl(1107,"td",23)(1108,"p"),eN(1109,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),og(),Sl(1110,"blockquote")(1111,"p"),eN(1112,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),og()(),Sl(1113,"ul")(1114,"li"),eN(1115,"N\xE3o possuir "),Sl(1116,"code"),eN(1117,"p-help"),og(),eN(1118," e/ou "),Sl(1119,"code"),eN(1120,"p-label"),og(),eN(1121,"."),og()()()(),Sl(1122,"tr",16)(1123,"td",17)(1124,"div",18)(1125,"span",19),eN(1126," p-size"),Wl(1127,"br"),og()()(),Sl(1128,"td",20)(1129,"code",21),eN(1130,"string"),og()(),Sl(1131,"td",22)(1132,"p")(1133,"code"),eN(1134,"medium"),og()()(),Sl(1135,"td",23)(1136,"em")(1137,"strong"),eN(1138,"(opcional)"),og()(),Sl(1139,"p"),eN(1140,"Define o tamanho do componente:"),og(),Sl(1141,"ul")(1142,"li")(1143,"code"),eN(1144,"small"),og(),eN(1145,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),og(),Sl(1146,"li")(1147,"code"),eN(1148,"medium"),og(),eN(1149,": altura do input como 44px."),og()(),Sl(1150,"blockquote")(1151,"p"),eN(1152,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Sl(1153,"code"),eN(1154,"medium"),og(),eN(1155,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Sl(1156,"a",37),eN(1157,"po-theme"),og(),eN(1158,"."),og()()()(),Sl(1159,"tr",16)(1160,"td",17)(1161,"div",18)(1162,"span",19),eN(1163," p-year-range-limit"),Wl(1164,"br"),og()()(),Sl(1165,"td",20)(1166,"code",38),eN(1167,"number"),og()(),Sl(1168,"td",22)(1169,"p"),eN(1170,"150"),og()(),Sl(1171,"td",23)(1172,"em")(1173,"strong"),eN(1174,"(opcional)"),og()(),Sl(1175,"p"),eN(1176,"Define o limite de anos exibidos nas varia\xE7\xF5es "),Sl(1177,"code"),eN(1178,"month-year"),og(),eN(1179," e "),Sl(1180,"code"),eN(1181,"year"),og(),eN(1182,`,
considerando a data atual como refer\xEAncia.`),og(),Sl(1183,"p"),eN(1184,`O valor informado determina o intervalo de anos anterior e posterior
\xE0 data corrente que ser\xE1 disponibilizado para sele\xE7\xE3o.`),og()()()(),Sl(1185,"h3",12),eN(1186,"M\xE9todos"),og(),Sl(1187,"table",39)(1188,"tr",16)(1189,"th",40)(1190,"div",18)(1191,"h4")(1192,"span",19),eN(1193," focus "),og()()()()(),Sl(1194,"tr",23)(1195,"td",23)(1196,"p"),eN(1197,"Fun\xE7\xE3o que atribui foco ao componente."),og(),Sl(1198,"p"),eN(1199,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),og(),Sl(1200,"pre")(1201,"code"),eN(1202,`import { PoDatepickerComponent } from '@po-ui/ng-components';

...

@ViewChild(PoDatepickerComponent, { static: true }) datepicker: PoDatepickerComponent;

focusDatepicker() {
  this.datepicker.focus();
}
`),og()()()()(),Wl(1203,"br"),Sl(1204,"table",39)(1205,"tr",16)(1206,"th",40)(1207,"div",18)(1208,"h4")(1209,"span",19),eN(1210," showAdditionalHelp "),og()()()()(),Sl(1211,"tr",23)(1212,"td",23)(1213,"p"),eN(1214,"M\xE9todo que exibe "),Sl(1215,"code"),eN(1216,"p-helper"),og(),eN(1217," ou executa a a\xE7\xE3o definida em "),Sl(1218,"code"),eN(1219,"p-helper{eventOnClick}"),og(),eN(1220," ou em "),Sl(1221,"code"),eN(1222,"p-additionalHelp"),og(),eN(1223,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Sl(1224,"code"),eN(1225,"p-keydown"),og(),eN(1226,"."),og(),Sl(1227,"blockquote")(1228,"p"),eN(1229,"Exibe ou oculta o conte\xFAdo do componente "),Sl(1230,"code"),eN(1231,"po-helper"),og(),eN(1232," quando o componente estiver com foco."),og()(),Sl(1233,"pre")(1234,"code"),eN(1235,`// Exemplo com p-label e p-helper
<po-datepicker
 #datepicker
 ...
 p-label="Label do datepicker"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, datepicker)"
></po-datepicker>
`),og()(),Sl(1236,"pre")(1237,"code"),eN(1238,`...
onKeyDown(event: KeyboardEvent, inp: PoDatepickerComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),og()()()()(),Wl(1239,"br"),Sl(1240,"h3"),eN(1241,"Enums"),og(),Sl(1242,"h4",4)(1243,"code",5),eN(1244,"PoDatepickerIsoFormat"),og()(),Sl(1245,"div",2)(1246,"p")(1247,"em"),eN(1248,"Enum"),og(),eN(1249," que define o padr\xE3o de formata\xE7\xE3o das datas."),og(),Sl(1250,"blockquote")(1251,"p"),eN(1252,"Caso um formato padr\xE3o seja definido, o mesmo n\xE3o ser\xE1 mais alterado de acordo com o formato de entrada."),og()()(),Sl(1253,"h4",12),eN(1254,"Propriedades"),og(),Sl(1255,"table",13)(1256,"tr",14)(1257,"th",15),eN(1258,"Nome"),og(),Sl(1259,"th",15),eN(1260,"Descri\xE7\xE3o"),og()(),Sl(1261,"tr",16)(1262,"td",17)(1263,"div",18)(1264,"span",19),eN(1265," Basic"),Wl(1266,"br"),og()()(),Sl(1267,"td",23)(1268,"p"),eN(1269,"Padr\xE3o "),Sl(1270,"strong"),eN(1271,"E8601DAw"),og(),eN(1272," ("),Sl(1273,"em"),eN(1274,"yyyy-mm-dd"),og(),eN(1275,")."),og()()(),Sl(1276,"tr",16)(1277,"td",17)(1278,"div",18)(1279,"span",19),eN(1280," Extended"),Wl(1281,"br"),og()()(),Sl(1282,"td",23)(1283,"p"),eN(1284,"Padr\xE3o "),Sl(1285,"strong"),eN(1286,"E8601DZw"),og(),eN(1287," ("),Sl(1288,"em"),eN(1289,"yyyy-mm-ddThh:mm:ss+|-hh:mm"),og(),eN(1290,")."),og()()()()());},dependencies:[Ka],encapsulation:2})}return a})();var Pe=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=6;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,l){this.route=m,this.router=l;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let l=m.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:"merge"}),this.activeTab=m;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(l){return new(l||a)(w(Xn),w(En))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:11,vars:4,consts:[["p-title","Datepicker",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,i){l&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return i.changeTab("doc")}),Wl(3,"sample-po-datepicker-doc"),og(),Sl(4,"po-tab",3),ft("p-click",function(){return i.changeTab("web")}),Wl(5,"sample-po-datepicker-basic-view")(6,"sample-po-datepicker-labs-view")(7,"sample-po-datepicker-year-view")(8,"sample-po-datepicker-month-year-view")(9,"sample-po-datepicker-airfare-view")(10,"sample-po-datepicker-airfare-reactive-form-view"),og()()()),l&2&&(nw("p-actions",i.actions),Lp(2),nw("p-active",i.activeTab==="doc"),Lp(2),nw("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[rNe,Bme,qme,ge,be,Se,xe,Ce,De,we],encapsulation:2})}return a})();var Je=[{path:"",component:Pe}],_e=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue({imports:[hL.forChild(Je),hL]})}return a})();var Rt=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue({imports:[sr,_e]})}return a})();export{Rt as DocPoDatepickerModule};