import {f as fe$1,u as ue,s as sr,a as uL,C,c3 as Xn,E as En,U as Un,b as f,c5 as Vde,aW as Yp,cV as Aw,J as zl,an as DO,aH as Ka,b8 as qme,b9 as Yme,H as Il,q as Qx,R as og,a1 as ft,A as Lp,ar as Ux,au as dg,T as nw,bs as uN,aX as G9,aF as $9,aY as z9,aG as mk,aZ as hk,b0 as Qt,b1 as mv,c4 as C3,bD as Ede,b4 as F3,cp as Hhe,c8 as Dde,cW as Cue,c9 as Yhe,aB as Dx,aM as ww,aN as QA,aO as Ew,aP as e0,aJ as qhe,bd as Ax,av as Gl,aw as co,ax as lo,a3 as cNe,aD as Xy,aT as eN,aE as Qy}from'./main-FCMDZGSJ.js';var se=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-datetimepicker-basic"]],standalone:false,decls:1,vars:0,consts:[["name","datetimepicker","p-label","PO Datetimepicker"]],template:function(r,i){r&1&&zl(0,"po-datetimepicker",0);},dependencies:[Aw],encapsulation:2,changeDetection:1})}return l})();var ke=l=>({"docs-sample-code-tabs":l}),ce=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-datetimepicker-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Datetimepicker Basic"),og(),Il(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-datetimepicker-basic/sample-po-datetimepicker-basic.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-datetimepicker name="datetimepicker" p-label="PO Datetimepicker"> </po-datetimepicker>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-datetimepicker-basic/sample-po-datetimepicker-basic.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-datetimepicker-basic',
  templateUrl: './sample-po-datetimepicker-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDatetimepickerBasicComponent {}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-datetimepicker-basic"),og(),zl(23,"hr")),r&2&&(Lp(5),Ux("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,ke,i.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,se],encapsulation:2})}return l})();var ge=(()=>{class l{datetimepicker;errorPattern;event;formatDate;formatTime;help;helperText;label;locale;maxDate;maxTime;minDate;minTime;minuteInterval;placeholder;properties;secondInterval;size;propertiesOptions=[{value:"clean",label:"Clean"},{value:"disabled",label:"Disabled"},{value:"noAutocomplete",label:"No Autocomplete"},{value:"optional",label:"Optional"},{value:"readonly",label:"Read Only"},{value:"required",label:"Required"},{value:"requiredFieldErrorMessage",label:"Required Field Error Message"},{value:"showRequired",label:"Show Required"},{value:"showSeconds",label:"Show Seconds"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"},{value:"loading",label:"Loading"},{value:"compactLabel",label:"Compact Label"}];formatDateOptions=[{label:"dd/mm/yyyy",value:"dd/mm/yyyy"},{label:"mm/dd/yyyy",value:"mm/dd/yyyy"},{label:"yyyy/mm/dd",value:"yyyy/mm/dd"}];formatTimeOptions=[{label:"24h",value:"24"},{label:"12h (AM/PM)",value:"12"}];localeOptions=[{label:"pt",value:"pt"},{label:"en",value:"en"},{label:"es",value:"es"},{label:"ru",value:"ru"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore();}changeEvent(p){this.event=p;}restore(){this.datetimepicker=void 0,this.errorPattern=void 0,this.event=void 0,this.formatDate=void 0,this.formatTime=void 0,this.help=void 0,this.helperText="",this.label=void 0,this.locale=void 0,this.maxDate=void 0,this.maxTime=void 0,this.minDate=void 0,this.minTime=void 0,this.minuteInterval=void 0,this.placeholder=void 0,this.properties=[],this.secondInterval=void 0,this.size="medium";}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-datetimepicker-labs"]],standalone:false,decls:26,vars:54,consts:[["f","ngForm"],["name","datetimepicker",1,"po-sm-12",3,"ngModelChange","p-blur","p-change","p-keydown","ngModel","p-clean","p-compact-label","p-disabled","p-error-limit","p-error-pattern","p-format-date","p-format-time","p-help","p-helper","p-label","p-label-text-wrap","p-loading","p-locale","p-max-date","p-max-time","p-min-date","p-min-time","p-minute-interval","p-no-autocomplete","p-optional","p-placeholder","p-readonly","p-required","p-required-field-error-message","p-second-interval","p-show-required","p-show-seconds","p-size"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","errorPattern","p-clean","","p-label","Error Pattern",1,"po-md-6",3,"ngModelChange","ngModel"],["name","minuteInterval","p-clean","","p-label","Minute Interval",1,"po-md-6",3,"ngModelChange","ngModel"],["name","secondInterval","p-clean","","p-label","Second Interval",1,"po-md-6",3,"ngModelChange","ngModel"],["name","minTime","p-clean","","p-label","Min Time",1,"po-md-6",3,"ngModelChange","ngModel"],["name","maxTime","p-clean","","p-label","Max Time",1,"po-md-6",3,"ngModelChange","ngModel"],["name","minDate","p-clean","","p-label","Min Date",1,"po-md-6",3,"ngModelChange","ngModel","p-max-date"],["name","maxDate","p-clean","","p-label","Max Date",1,"po-md-6",3,"ngModelChange","ngModel","p-min-date"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","locale","p-columns","4","p-label","Locale",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","formatDate","p-columns","4","p-label","Format Date",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","formatTime","p-columns","4","p-label","Format Time",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","restore","p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(r,i){if(r&1){let d=Dx();Il(0,"po-datetimepicker",1),ww("ngModelChange",function(o){return Xy(d),eN(i.datetimepicker,o)||(i.datetimepicker=o),Qy(o)}),ft("p-blur",function(){return i.changeEvent("p-blur")})("p-change",function(){return i.changeEvent("p-change")})("p-keydown",function(){return i.changeEvent("p-keydown")}),og(),QA(),zl(1,"po-divider"),Il(2,"div",2),zl(3,"po-info",3)(4,"po-info",4),og(),zl(5,"po-divider"),Il(6,"form",null,0)(8,"po-input",5),ww("ngModelChange",function(o){return Xy(d),eN(i.label,o)||(i.label=o),Qy(o)}),og(),QA(),Il(9,"po-input",6),ww("ngModelChange",function(o){return Xy(d),eN(i.help,o)||(i.help=o),Qy(o)}),og(),QA(),Il(10,"po-input",7),ww("ngModelChange",function(o){return Xy(d),eN(i.helperText,o)||(i.helperText=o),Qy(o)}),og(),QA(),Il(11,"po-input",8),ww("ngModelChange",function(o){return Xy(d),eN(i.placeholder,o)||(i.placeholder=o),Qy(o)}),og(),QA(),Il(12,"po-input",9),ww("ngModelChange",function(o){return Xy(d),eN(i.errorPattern,o)||(i.errorPattern=o),Qy(o)}),og(),QA(),Il(13,"po-number",10),ww("ngModelChange",function(o){return Xy(d),eN(i.minuteInterval,o)||(i.minuteInterval=o),Qy(o)}),og(),QA(),Il(14,"po-number",11),ww("ngModelChange",function(o){return Xy(d),eN(i.secondInterval,o)||(i.secondInterval=o),Qy(o)}),og(),QA(),Il(15,"po-timepicker",12),ww("ngModelChange",function(o){return Xy(d),eN(i.minTime,o)||(i.minTime=o),Qy(o)}),og(),QA(),Il(16,"po-timepicker",13),ww("ngModelChange",function(o){return Xy(d),eN(i.maxTime,o)||(i.maxTime=o),Qy(o)}),og(),QA(),Il(17,"po-datepicker",14),ww("ngModelChange",function(o){return Xy(d),eN(i.minDate,o)||(i.minDate=o),Qy(o)}),og(),QA(),Il(18,"po-datepicker",15),ww("ngModelChange",function(o){return Xy(d),eN(i.maxDate,o)||(i.maxDate=o),Qy(o)}),og(),QA(),Il(19,"po-checkbox-group",16),ww("ngModelChange",function(o){return Xy(d),eN(i.properties,o)||(i.properties=o),Qy(o)}),og(),QA(),Il(20,"po-radio-group",17),ww("ngModelChange",function(o){return Xy(d),eN(i.locale,o)||(i.locale=o),Qy(o)}),og(),QA(),Il(21,"po-radio-group",18),ww("ngModelChange",function(o){return Xy(d),eN(i.formatDate,o)||(i.formatDate=o),Qy(o)}),og(),QA(),Il(22,"po-radio-group",19),ww("ngModelChange",function(o){return Xy(d),eN(i.formatTime,o)||(i.formatTime=o),Qy(o)}),og(),QA(),Il(23,"po-radio-group",20),ww("ngModelChange",function(o){return Xy(d),eN(i.size,o)||(i.size=o),Qy(o)}),og(),QA(),Il(24,"div",2)(25,"po-button",21),ft("p-click",function(){return i.restore()}),og()()();}r&2&&(Ew("ngModel",i.datetimepicker),nw("p-clean",i.properties.includes("clean"))("p-compact-label",i.properties==null?null:i.properties.includes("compactLabel"))("p-disabled",i.properties.includes("disabled"))("p-error-limit",i.properties==null?null:i.properties.includes("errorLimit"))("p-error-pattern",i.errorPattern)("p-format-date",i.formatDate)("p-format-time",i.formatTime)("p-help",i.help)("p-helper",i.helperText)("p-label",i.label)("p-label-text-wrap",i.properties==null?null:i.properties.includes("labelTextWrap"))("p-loading",i.properties.includes("loading"))("p-locale",i.locale)("p-max-date",i.maxDate)("p-max-time",i.maxTime)("p-min-date",i.minDate)("p-min-time",i.minTime)("p-minute-interval",i.minuteInterval)("p-no-autocomplete",i.properties==null?null:i.properties.includes("noAutocomplete"))("p-optional",i.properties.includes("optional"))("p-placeholder",i.placeholder)("p-readonly",i.properties.includes("readonly"))("p-required",i.properties.includes("required"))("p-required-field-error-message",i.properties.includes("requiredFieldErrorMessage"))("p-second-interval",i.secondInterval)("p-show-required",i.properties.includes("showRequired"))("p-show-seconds",i.properties.includes("showSeconds"))("p-size",i.size),e0(),Lp(3),nw("p-value",i.datetimepicker),Lp(),nw("p-value",i.event),Lp(4),Ew("ngModel",i.label),e0(),Lp(),Ew("ngModel",i.help),e0(),Lp(),Ew("ngModel",i.helperText),e0(),Lp(),Ew("ngModel",i.placeholder),e0(),Lp(),Ew("ngModel",i.errorPattern),e0(),Lp(),Ew("ngModel",i.minuteInterval),e0(),Lp(),Ew("ngModel",i.secondInterval),e0(),Lp(),Ew("ngModel",i.minTime),e0(),Lp(),Ew("ngModel",i.maxTime),e0(),Lp(),Ew("ngModel",i.minDate),nw("p-max-date",i.maxDate),e0(),Lp(),Ew("ngModel",i.maxDate),nw("p-min-date",i.minDate),e0(),Lp(),Ew("ngModel",i.properties),nw("p-options",i.propertiesOptions),e0(),Lp(),Ew("ngModel",i.locale),nw("p-options",i.localeOptions),e0(),Lp(),Ew("ngModel",i.formatDate),nw("p-options",i.formatDateOptions),e0(),Lp(),Ew("ngModel",i.formatTime),nw("p-options",i.formatTimeOptions),e0(),Lp(),Ew("ngModel",i.size),nw("p-options",i.sizeOptions),e0());},dependencies:[G9,$9,z9,mk,hk,Qt,mv,C3,Ede,Aw,F3,Hhe,Dde,Cue,Yhe],encapsulation:2,changeDetection:1})}return l})();var Me=l=>({"docs-sample-code-tabs":l}),Se=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-datetimepicker-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Datetimepicker Labs"),og(),Il(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-datetimepicker-labs/sample-po-datetimepicker-labs.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-datetimepicker
  class="po-sm-12"
  name="datetimepicker"
  [(ngModel)]="datetimepicker"
  [p-clean]="properties.includes('clean')"
  [p-compact-label]="$safeNavigationMigration(properties?.includes('compactLabel'))"
  [p-disabled]="properties.includes('disabled')"
  [p-error-limit]="$safeNavigationMigration(properties?.includes('errorLimit'))"
  [p-error-pattern]="errorPattern"
  [p-format-date]="formatDate"
  [p-format-time]="formatTime"
  [p-help]="help"
  [p-helper]="helperText"
  [p-label]="label"
  [p-label-text-wrap]="$safeNavigationMigration(properties?.includes('labelTextWrap'))"
  [p-loading]="properties.includes('loading')"
  [p-locale]="locale"
  [p-max-date]="maxDate"
  [p-max-time]="maxTime"
  [p-min-date]="minDate"
  [p-min-time]="minTime"
  [p-minute-interval]="minuteInterval"
  [p-no-autocomplete]="$safeNavigationMigration(properties?.includes('noAutocomplete'))"
  [p-optional]="properties.includes('optional')"
  [p-placeholder]="placeholder"
  [p-readonly]="properties.includes('readonly')"
  [p-required]="properties.includes('required')"
  [p-required-field-error-message]="properties.includes('requiredFieldErrorMessage')"
  [p-second-interval]="secondInterval"
  [p-show-required]="properties.includes('showRequired')"
  [p-show-seconds]="properties.includes('showSeconds')"
  [p-size]="size"
  (p-blur)="changeEvent('p-blur')"
  (p-change)="changeEvent('p-change')"
  (p-keydown)="changeEvent('p-keydown')"
>
</po-datetimepicker>

<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="datetimepicker"> </po-info>

  <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
</div>

<po-divider />

<form #f="ngForm">
  <po-input class="po-md-6" name="label" [(ngModel)]="label" p-clean p-label="Label"> </po-input>

  <po-input class="po-md-6" name="help" [(ngModel)]="help" p-clean p-label="Help"> </po-input>

  <po-input class="po-md-6" name="helperText" [(ngModel)]="helperText" p-clean p-label="Additional Help"> </po-input>

  <po-input class="po-md-6" name="placeholder" [(ngModel)]="placeholder" p-clean p-label="Placeholder"> </po-input>

  <po-input class="po-md-6" name="errorPattern" [(ngModel)]="errorPattern" p-clean p-label="Error Pattern"> </po-input>

  <po-number class="po-md-6" name="minuteInterval" [(ngModel)]="minuteInterval" p-clean p-label="Minute Interval">
  </po-number>

  <po-number class="po-md-6" name="secondInterval" [(ngModel)]="secondInterval" p-clean p-label="Second Interval">
  </po-number>

  <po-timepicker class="po-md-6" name="minTime" [(ngModel)]="minTime" p-clean p-label="Min Time"> </po-timepicker>

  <po-timepicker class="po-md-6" name="maxTime" [(ngModel)]="maxTime" p-clean p-label="Max Time"> </po-timepicker>

  <po-datepicker class="po-md-6" name="minDate" [(ngModel)]="minDate" p-clean p-label="Min Date" [p-max-date]="maxDate">
  </po-datepicker>

  <po-datepicker class="po-md-6" name="maxDate" [(ngModel)]="maxDate" p-clean p-label="Max Date" [p-min-date]="minDate">
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
    name="formatDate"
    [(ngModel)]="formatDate"
    p-columns="4"
    p-label="Format Date"
    [p-options]="formatDateOptions"
  >
  </po-radio-group>

  <po-radio-group
    class="po-md-12"
    name="formatTime"
    [(ngModel)]="formatTime"
    p-columns="4"
    p-label="Format Time"
    [p-options]="formatTimeOptions"
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
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-datetimepicker-labs/sample-po-datetimepicker-labs.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { PoCheckboxGroupOption, PoRadioGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-datetimepicker-labs',
  templateUrl: './sample-po-datetimepicker-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDatetimepickerLabsComponent implements OnInit {
  datetimepicker: string;
  errorPattern: string;
  event: string;
  formatDate: string;
  formatTime: string;
  help: string;
  helperText: string;
  label: string;
  locale: string;
  maxDate: string | Date;
  maxTime: string;
  minDate: string | Date;
  minTime: string;
  minuteInterval: number;
  placeholder: string;
  properties: Array<string>;
  secondInterval: number;
  size: string;

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'clean', label: 'Clean' },
    { value: 'disabled', label: 'Disabled' },
    { value: 'noAutocomplete', label: 'No Autocomplete' },
    { value: 'optional', label: 'Optional' },
    { value: 'readonly', label: 'Read Only' },
    { value: 'required', label: 'Required' },
    { value: 'requiredFieldErrorMessage', label: 'Required Field Error Message' },
    { value: 'showRequired', label: 'Show Required' },
    { value: 'showSeconds', label: 'Show Seconds' },
    { value: 'errorLimit', label: 'Limit Error Message' },
    { value: 'labelTextWrap', label: 'Label Text Wrap' },
    { value: 'loading', label: 'Loading' },
    { value: 'compactLabel', label: 'Compact Label' }
  ];

  public readonly formatDateOptions: Array<PoRadioGroupOption> = [
    { label: 'dd/mm/yyyy', value: 'dd/mm/yyyy' },
    { label: 'mm/dd/yyyy', value: 'mm/dd/yyyy' },
    { label: 'yyyy/mm/dd', value: 'yyyy/mm/dd' }
  ];

  public readonly formatTimeOptions: Array<PoRadioGroupOption> = [
    { label: '24h', value: '24' },
    { label: '12h (AM/PM)', value: '12' }
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
    this.datetimepicker = undefined;
    this.errorPattern = undefined;
    this.event = undefined;
    this.formatDate = undefined;
    this.formatTime = undefined;
    this.help = undefined;
    this.helperText = '';
    this.label = undefined;
    this.locale = undefined;
    this.maxDate = undefined;
    this.maxTime = undefined;
    this.minDate = undefined;
    this.minTime = undefined;
    this.minuteInterval = undefined;
    this.placeholder = undefined;
    this.properties = [];
    this.secondInterval = undefined;
    this.size = 'medium';
  }
}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-datetimepicker-labs"),og(),zl(23,"hr")),r&2&&(Lp(5),Ux("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,Me,i.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,ge],encapsulation:2})}return l})();var Ee=(()=>{class l{datetime=new Date(2026,4,20,15,30,45);static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-datetimepicker-12h-seconds"]],standalone:false,decls:1,vars:1,consts:[["name","datetimepicker12h","p-label","PO Datetimepicker - 12h with Seconds","p-show-seconds","true","p-format-time","12","p-format-date","mm/dd/yyyy",3,"ngModelChange","ngModel"]],template:function(r,i){r&1&&(Il(0,"po-datetimepicker",0),ww("ngModelChange",function(s){return eN(i.datetime,s)||(i.datetime=s),s}),og(),QA()),r&2&&(Ew("ngModel",i.datetime),e0());},dependencies:[$9,mk,Aw],encapsulation:2,changeDetection:1})}return l})();var Te=l=>({"docs-sample-code-tabs":l}),he=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-datetimepicker-12h-seconds-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Datetimepicker - 12h with Seconds"),og(),Il(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-datetimepicker-12h-seconds/sample-po-datetimepicker-12h-seconds.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-datetimepicker
  name="datetimepicker12h"
  p-label="PO Datetimepicker - 12h with Seconds"
  [(ngModel)]="datetime"
  p-show-seconds="true"
  p-format-time="12"
  p-format-date="mm/dd/yyyy"
>
</po-datetimepicker>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-datetimepicker-12h-seconds/sample-po-datetimepicker-12h-seconds.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-datetimepicker-12h-seconds',
  templateUrl: './sample-po-datetimepicker-12h-seconds.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDatetimepicker12hSecondsComponent {
  datetime = new Date(2026, 4, 20, 15, 30, 45);
}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-datetimepicker-12h-seconds"),og(),zl(23,"hr")),r&2&&(Lp(5),Ux("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,Te,i.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,Ee],encapsulation:2})}return l})();var Oe=["formScheduling"],be=(()=>{class l{poDialog=f(Vde);poNotification=f(Yp);formScheduling;appointment;doctor;patient;specialty;specialtyOptions=[{value:"general",label:"Cl\xEDnico Geral"},{value:"cardiology",label:"Cardiologia"},{value:"dermatology",label:"Dermatologia"},{value:"orthopedics",label:"Ortopedia"},{value:"neurology",label:"Neurologia"}];confirm(){let p=this.appointment?this.appointment.slice(0,16):"",r=`Confirmar agendamento de consulta?

Paciente: ${this.patient}
M\xE9dico: ${this.doctor}
Especialidade: ${this.getSpecialtyLabel()}
Data/Hora: ${p}`;this.poDialog.confirm({title:"Confirmar Agendamento",message:r,confirm:()=>{this.poNotification.success("Consulta agendada com sucesso!"),this.formScheduling.reset();},cancel:()=>{this.poNotification.warning("Agendamento cancelado.");}});}getSpecialtyLabel(){let p=this.specialtyOptions.find(r=>r.value===this.specialty);return p?p.label:""}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-datetimepicker-scheduling"]],viewQuery:function(r,i){if(r&1&&Gl(Oe,7),r&2){let d;co(d=lo())&&(i.formScheduling=d.first);}},standalone:false,decls:10,vars:6,consts:[["formScheduling","ngForm"],[1,"po-row"],["name","patient","p-label","Paciente","p-placeholder","Nome do paciente","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","doctor","p-label","M\xE9dico","p-placeholder","Nome do m\xE9dico","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","specialty","p-label","Especialidade","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","appointment","p-clean","","p-label","Data e Hora da Consulta","p-min-time","08:00","p-max-time","18:00","p-minute-interval","15","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","confirmButton","p-label","Agendar Consulta",1,"po-md-3","po-offset-md-9","po-offset-lg-9",3,"p-click","p-disabled"]],template:function(r,i){if(r&1){let d=Dx();Il(0,"form",null,0)(2,"div",1)(3,"po-input",2),ww("ngModelChange",function(o){return Xy(d),eN(i.patient,o)||(i.patient=o),Qy(o)}),og(),QA(),Il(4,"po-input",3),ww("ngModelChange",function(o){return Xy(d),eN(i.doctor,o)||(i.doctor=o),Qy(o)}),og(),QA(),og(),Il(5,"div",1)(6,"po-select",4),ww("ngModelChange",function(o){return Xy(d),eN(i.specialty,o)||(i.specialty=o),Qy(o)}),og(),QA(),Il(7,"po-datetimepicker",5),ww("ngModelChange",function(o){return Xy(d),eN(i.appointment,o)||(i.appointment=o),Qy(o)}),og(),QA(),og(),Il(8,"div",1)(9,"po-button",6),ft("p-click",function(){return i.confirm()}),og()()();}if(r&2){let d=Ax(1);Lp(3),Ew("ngModel",i.patient),e0(),Lp(),Ew("ngModel",i.doctor),e0(),Lp(2),Ew("ngModel",i.specialty),nw("p-options",i.specialtyOptions),e0(),Lp(),Ew("ngModel",i.appointment),e0(),Lp(2),nw("p-disabled",d.invalid);}},dependencies:[G9,$9,z9,mk,hk,Qt,Aw,F3,qhe],encapsulation:2,changeDetection:1})}return l})();var We=l=>({"docs-sample-code-tabs":l}),fe=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-datetimepicker-scheduling-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Datetimepicker - Scheduling"),og(),Il(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-datetimepicker-scheduling/sample-po-datetimepicker-scheduling.component.html"),og(),Il(13,"pre",7),Qx(14,`<form #formScheduling="ngForm">
  <div class="po-row">
    <po-input
      class="po-md-6"
      name="patient"
      [(ngModel)]="patient"
      p-label="Paciente"
      p-placeholder="Nome do paciente"
      p-required
    >
    </po-input>

    <po-input
      class="po-md-6"
      name="doctor"
      [(ngModel)]="doctor"
      p-label="M\xE9dico"
      p-placeholder="Nome do m\xE9dico"
      p-required
    >
    </po-input>
  </div>

  <div class="po-row">
    <po-select
      class="po-md-6"
      name="specialty"
      [(ngModel)]="specialty"
      p-label="Especialidade"
      p-required
      [p-options]="specialtyOptions"
    >
    </po-select>

    <po-datetimepicker
      class="po-md-6"
      name="appointment"
      [(ngModel)]="appointment"
      p-clean
      p-label="Data e Hora da Consulta"
      p-min-time="08:00"
      p-max-time="18:00"
      p-minute-interval="15"
      p-required
    >
    </po-datetimepicker>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-3 po-offset-md-9 po-offset-lg-9"
      name="confirmButton"
      p-label="Agendar Consulta"
      [p-disabled]="formScheduling.invalid"
      (p-click)="confirm()"
    >
    </po-button>
  </div>
</form>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-datetimepicker-scheduling/sample-po-datetimepicker-scheduling.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { UntypedFormControl } from '@angular/forms';
import { Component, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';

import { PoDialogService, PoNotificationService, PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-datetimepicker-scheduling',
  templateUrl: './sample-po-datetimepicker-scheduling.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDatetimepickerSchedulingComponent {
  private poDialog = inject(PoDialogService);
  private poNotification = inject(PoNotificationService);

  @ViewChild('formScheduling', { static: true }) formScheduling: UntypedFormControl;

  appointment: string;
  doctor: string;
  patient: string;
  specialty: string;

  public readonly specialtyOptions: Array<PoSelectOption> = [
    { value: 'general', label: 'Cl\xEDnico Geral' },
    { value: 'cardiology', label: 'Cardiologia' },
    { value: 'dermatology', label: 'Dermatologia' },
    { value: 'orthopedics', label: 'Ortopedia' },
    { value: 'neurology', label: 'Neurologia' }
  ];

  confirm() {
    const dateFormatted = this.appointment ? this.appointment.slice(0, 16) : '';

    const message =
      \`Confirmar agendamento de consulta?\\n\\n\` +
      \`Paciente: \${this.patient}\\n\` +
      \`M\xE9dico: \${this.doctor}\\n\` +
      \`Especialidade: \${this.getSpecialtyLabel()}\\n\` +
      \`Data/Hora: \${dateFormatted}\`;

    this.poDialog.confirm({
      title: 'Confirmar Agendamento',
      message,
      confirm: () => {
        this.poNotification.success('Consulta agendada com sucesso!');
        this.formScheduling.reset();
      },
      cancel: () => {
        this.poNotification.warning('Agendamento cancelado.');
      }
    });
  }

  private getSpecialtyLabel(): string {
    const option = this.specialtyOptions.find(o => o.value === this.specialty);
    return option ? option.label : '';
  }
}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-datetimepicker-scheduling"),og(),zl(23,"hr")),r&2&&(Lp(5),Ux("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,We,i.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,be],encapsulation:2})}return l})();var xe=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-datetimepicker-doc"]],standalone:false,decls:1169,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["href","/documentation/po-i18n"],["pan","",1,"docs-api-property-type","Date"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-helper"],["pan","",1,"docs-api-property-type","PoTimerFormat"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"]],template:function(r,i){r&1&&(Il(0,"div",0)(1,"p",1)(2,"code"),Qx(3,"import { PoFieldModule } from '@po-ui/ng-components';"),og()(),Il(4,"div",2)(5,"p"),Qx(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),og(),Il(7,"blockquote")(8,"p"),Qx(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),Il(10,"code"),Qx(11,"FormsModule"),og(),Qx(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Il(13,"code"),Qx(14,"ReactiveFormsModule"),og(),Qx(15,", ambos nativos do Angular."),og()()(),Il(16,"h3",3),Qx(17,"Componente"),og(),Il(18,"h4",4)(19,"code",5),Qx(20,"PoDatetimepickerComponent"),og()(),Il(21,"div",2)(22,"p"),Qx(23,"O "),Il(24,"code"),Qx(25,"po-datetimepicker"),og(),Qx(26,` \xE9 um componente para manipula\xE7\xE3o de data e hora, permitindo a digita\xE7\xE3o e/ou sele\xE7\xE3o
por meio de um calend\xE1rio integrado com um painel de hor\xE1rios.`),og(),Il(27,"p"),Qx(28,`O formato de exibi\xE7\xE3o da data \xE9 determinado automaticamente pelo locale configurado, podendo ser alterado
pela propriedade `),Il(29,"code"),Qx(30,"p-format-date"),og(),Qx(31,". O formato de hora pode ser 24h ou 12h (AM/PM), configur\xE1vel via "),Il(32,"code"),Qx(33,"p-format-time"),og(),Qx(34,"."),og(),Il(35,"p"),Qx(36,`O idioma padr\xE3o do calend\xE1rio ser\xE1 exibido de acordo com o navegador, caso tenha necessidade de alterar
use a propriedade `),Il(37,"code"),Qx(38,"p-locale"),og(),Qx(39,"."),og(),Il(40,"p"),Qx(41,"O componente aceita os seguintes formatos de entrada:"),og(),Il(42,"ul")(43,"li"),Qx(44,"ISO 8601 com timezone: "),Il(45,"code"),Qx(46,"'2026-05-12T14:30:00-03:00'"),og()(),Il(47,"li"),Qx(48,"ISO 8601 UTC: "),Il(49,"code"),Qx(50,"'2026-05-12T14:30:00Z'"),og()(),Il(51,"li"),Qx(52,"ISO 8601 sem timezone: "),Il(53,"code"),Qx(54,"'2026-05-12T14:30:00'"),og()(),Il(55,"li"),Qx(56,"ISO 8601 apenas data: "),Il(57,"code"),Qx(58,"'2026-05-12'"),og()(),Il(59,"li"),Qx(60,"JavaScript Date Object: "),Il(61,"code"),Qx(62,"new Date(2026, 4, 12, 14, 30)"),og()()(),Il(63,"p"),Qx(64,"O formato de sa\xEDda do "),Il(65,"em"),Qx(66,"model"),og(),Qx(67," \xE9 sempre ISO 8601 com timezone local: "),Il(68,"code"),Qx(69,"'yyyy-mm-ddTHH:mm+/-HH:mm'"),og(),Qx(70,`
(ou `),Il(71,"code"),Qx(72,"'yyyy-mm-ddTHH:mm:ss+/-HH:mm'"),og(),Qx(73," quando "),Il(74,"code"),Qx(75,"p-show-seconds"),og(),Qx(76," est\xE1 ativo)."),og(),Il(77,"p")(78,"strong"),Qx(79,"Importante:"),og()(),Il(80,"ul")(81,"li"),Qx(82,"O valor emitido no model inclui o offset do timezone local do navegador."),og(),Il(83,"li"),Qx(84,"Ao receber um valor com timezone, o componente converte automaticamente para hor\xE1rio local."),og(),Il(85,"li"),Qx(86,"Caso a data/hora esteja inv\xE1lida, o "),Il(87,"code"),Qx(88,"model"),og(),Qx(89," receber\xE1 a mensagem de erro localizada."),og(),Il(90,"li"),Qx(91,"Caso o "),Il(92,"code"),Qx(93,"input"),og(),Qx(94," esteja passando um "),Il(95,"code"),Qx(96,"[(ngModel)]"),og(),Qx(97,", mas n\xE3o tenha um "),Il(98,"code"),Qx(99,"name"),og(),Qx(100,`, ent\xE3o ir\xE1 ocorrer um erro
do pr\xF3prio Angular (`),Il(101,"code"),Qx(102,'[ngModelOptions]="{standalone: true}"'),og(),Qx(103,")."),og()(),Il(104,"p"),Qx(105,"Exemplo:"),og(),Il(106,"pre")(107,"code"),Qx(108,`<po-datetimepicker
  [(ngModel)]="agendamento"
  [ngModelOptions]="{standalone: true}"
</po-datetimepicker>
`),og()(),Il(109,"blockquote")(110,"p"),Qx(111,"N\xE3o esque\xE7a de importar o "),Il(112,"code"),Qx(113,"FormsModule"),og(),Qx(114," em seu m\xF3dulo, tal como para utilizar o "),Il(115,"code"),Qx(116,"input default"),og(),Qx(117,"."),og()(),Il(118,"h4"),Qx(119,"Tokens customiz\xE1veis"),og(),Il(120,"p"),Qx(121,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS): "),zl(122,"br"),Qx(123,`
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),Il(124,"code"),Qx(125,".po-input"),og()(),Il(126,"blockquote")(127,"p"),Qx(128,"Para maiores informa\xE7\xF5es, acesse o guia "),Il(129,"a",6),Qx(130,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),Qx(131,"."),og()(),Il(132,"table")(133,"thead")(134,"tr")(135,"th"),Qx(136,"Propriedade"),og(),Il(137,"th"),Qx(138,"Descri\xE7\xE3o"),og(),Il(139,"th"),Qx(140,"Valor Padr\xE3o"),og()()(),Il(141,"tbody")(142,"tr")(143,"td")(144,"strong"),Qx(145,"Default Values"),og()(),zl(146,"td")(147,"td"),og(),Il(148,"tr")(149,"td")(150,"code"),Qx(151,"--font-family"),og()(),Il(152,"td"),Qx(153,"Fam\xEDlia tipogr\xE1fica usada"),og(),Il(154,"td")(155,"code"),Qx(156,"var(--font-family-theme)"),og()()(),Il(157,"tr")(158,"td")(159,"code"),Qx(160,"--font-size"),og()(),Il(161,"td"),Qx(162,"Tamanho da fonte"),og(),Il(163,"td")(164,"code"),Qx(165,"var(--font-size-default)"),og()()(),Il(166,"tr")(167,"td")(168,"code"),Qx(169,"--text-color-placeholder"),og(),Qx(170," \xA0"),og(),Il(171,"td"),Qx(172,"Cor principal do texto do placeholder"),og(),Il(173,"td")(174,"code"),Qx(175,"var(--color-neutral-light-30)"),og()()(),Il(176,"tr")(177,"td")(178,"code"),Qx(179,"--color"),og()(),Il(180,"td"),Qx(181,"Cor principal do datetimepicker"),og(),Il(182,"td")(183,"code"),Qx(184,"var(--color-neutral-dark-70)"),og()()(),Il(185,"tr")(186,"td")(187,"code"),Qx(188,"--background"),og()(),Il(189,"td"),Qx(190,"Cor de background"),og(),Il(191,"td")(192,"code"),Qx(193,"var(--color-neutral-light-05)"),og()()(),Il(194,"tr")(195,"td")(196,"code"),Qx(197,"--padding"),og()(),Il(198,"td"),Qx(199,"Preenchimento"),og(),Il(200,"td")(201,"code"),Qx(202,"0 0.5rem"),og()()(),Il(203,"tr")(204,"td")(205,"code"),Qx(206,"--text-color"),og()(),Il(207,"td"),Qx(208,"Cor do texto"),og(),Il(209,"td")(210,"code"),Qx(211,"var(--color-neutral-dark-90)"),og()()(),Il(212,"tr")(213,"td")(214,"code"),Qx(215,"--field-container-title-justify"),og()(),Il(216,"td"),Qx(217,"Alinhamento horizontal do t\xEDtulo ("),Il(218,"code"),Qx(219,"justify-content"),og(),Qx(220,")"),og(),Il(221,"td")(222,"code"),Qx(223,"space-between"),og()()(),Il(224,"tr")(225,"td")(226,"code"),Qx(227,"--field-container-title-flex"),og()(),Il(228,"td"),Qx(229,"Flex do t\xEDtulo ("),Il(230,"code"),Qx(231,"flex"),og(),Qx(232,")"),og(),Il(233,"td")(234,"code"),Qx(235,"1 auto"),og()()(),Il(236,"tr")(237,"td")(238,"strong"),Qx(239,"Hover"),og()(),zl(240,"td")(241,"td"),og(),Il(242,"tr")(243,"td")(244,"code"),Qx(245,"--color-hover"),og()(),Il(246,"td"),Qx(247,"Cor principal no estado hover"),og(),Il(248,"td")(249,"code"),Qx(250,"var(--color-brand-01-dark)"),og()()(),Il(251,"tr")(252,"td")(253,"code"),Qx(254,"--background-hover"),og()(),Il(255,"td"),Qx(256,"Cor de background no estado hover"),og(),Il(257,"td")(258,"code"),Qx(259,"var(--color-brand-01-lightest)"),og()()(),Il(260,"tr")(261,"td")(262,"strong"),Qx(263,"Focused"),og()(),zl(264,"td")(265,"td"),og(),Il(266,"tr")(267,"td")(268,"code"),Qx(269,"--color-focused"),og()(),Il(270,"td"),Qx(271,"Cor principal no estado de focus"),og(),Il(272,"td")(273,"code"),Qx(274,"var(--color-action-default)"),og()()(),Il(275,"tr")(276,"td")(277,"code"),Qx(278,"--outline-color-focused"),og()(),Il(279,"td"),Qx(280,"Cor do outline do estado de focus"),og(),Il(281,"td")(282,"code"),Qx(283,"var(--color-action-focus)"),og()()(),Il(284,"tr")(285,"td")(286,"strong"),Qx(287,"Disabled"),og()(),zl(288,"td")(289,"td"),og(),Il(290,"tr")(291,"td")(292,"code"),Qx(293,"--color-disabled"),og()(),Il(294,"td"),Qx(295,"Cor principal no estado disabled"),og(),Il(296,"td")(297,"code"),Qx(298,"var(--color-neutral-light-30)"),og()()(),Il(299,"tr")(300,"td")(301,"code"),Qx(302,"--background-disabled"),og()(),Il(303,"td"),Qx(304,"Cor de background no estado disabled \xA0"),og(),Il(305,"td")(306,"code"),Qx(307,"var(--color-neutral-light-20)"),og()()(),Il(308,"tr")(309,"td")(310,"code"),Qx(311,"--text-color-disabled"),og()(),Il(312,"td"),Qx(313,"Cor do texto no estado disabled"),og(),Il(314,"td")(315,"code"),Qx(316,"var(--color-neutral-dark-70)"),og()()()()()(),Il(317,"div",7)(318,"h4",8),Qx(319,"Seletor"),og(),Il(320,"pre",9),Qx(321,`<po-datetimepicker
    p-append-in-body="boolean"
    p-auto-focus="boolean"
    p-clean="boolean | string"
    p-compact-label="boolean"
    p-format-date="string"
    p-disabled="boolean | string"
    p-error-limit="boolean"
    p-error-pattern="string"
    p-help="string"
    (p-keydown)="EventEmitter"
    p-label="string"
    p-label-text-wrap="boolean"
    p-loading="boolean | string"
    p-locale="string"
    p-max-date="string | Date"
    p-max-time="string"
    p-min-date="string | Date"
    p-min-time="string"
    p-minute-interval="number"
    name="string"
    p-no-autocomplete="boolean | string"
    (p-blur)="EventEmitter"
    (p-change)="EventEmitter"
    p-optional="boolean"
    p-placeholder="string"
    p-helper="PoHelperOptions | string"
    p-readonly="boolean | string"
    p-required="boolean | string"
    p-second-interval="number"
    p-required-field-error-message="boolean"
    p-show-required="boolean"
    p-show-seconds="boolean"
    p-size="string"
    p-format-time="PoTimerFormat" >
</po-datetimepicker>
`),og()(),Il(322,"h4",10),Qx(323,"Propriedades"),og(),Il(324,"table",11)(325,"tr",12)(326,"th",13),Qx(327,"Nome"),og(),Il(328,"th",13),Qx(329,"Tipo"),og(),Il(330,"th",13),Qx(331,"Padr\xE3o"),og(),Il(332,"th",13),Qx(333,"Descri\xE7\xE3o"),og()(),Il(334,"tr",14)(335,"td",15)(336,"div",16)(337,"span",17),Qx(338," p-append-in-body"),zl(339,"br"),og()()(),Il(340,"td",18)(341,"code",19),Qx(342,"boolean"),og()(),Il(343,"td",20)(344,"p")(345,"code"),Qx(346,"false"),og()()(),Il(347,"td",21)(348,"em")(349,"strong"),Qx(350,"(opcional)"),og()(),Il(351,"p"),Qx(352,"Define que o "),Il(353,"code"),Qx(354,"calendar"),og(),Qx(355," e/ou tooltip ser\xE3o inclu\xEDdos no body da p\xE1gina e n\xE3o dentro do componente."),og()()(),Il(356,"tr",14)(357,"td",15)(358,"div",16)(359,"span",17),Qx(360," p-auto-focus"),zl(361,"br"),og()()(),Il(362,"td",18)(363,"code",19),Qx(364,"boolean"),og()(),Il(365,"td",20)(366,"p")(367,"code"),Qx(368,"false"),og()()(),Il(369,"td",21)(370,"em")(371,"strong"),Qx(372,"(opcional)"),og()(),Il(373,"p"),Qx(374,"Aplica foco no elemento ao ser iniciado."),og()()(),Il(375,"tr",14)(376,"td",15)(377,"div",16)(378,"span",17),Qx(379," p-clean"),zl(380,"br"),og()()(),Il(381,"td",18)(382,"code",19),Qx(383,"boolean "),og(),Il(384,"code",22),Qx(385," string"),og()(),Il(386,"td",20)(387,"p")(388,"code"),Qx(389,"false"),og()()(),Il(390,"td",21)(391,"em")(392,"strong"),Qx(393,"(opcional)"),og()(),Il(394,"p"),Qx(395,"Habilita a\xE7\xE3o para limpar o campo."),og()()(),Il(396,"tr",14)(397,"td",15)(398,"div",16)(399,"span",17),Qx(400," p-compact-label"),zl(401,"br"),og()()(),Il(402,"td",18)(403,"code",19),Qx(404,"boolean"),og()(),Il(405,"td",20)(406,"p")(407,"code"),Qx(408,"false"),og()()(),Il(409,"td",21)(410,"em")(411,"strong"),Qx(412,"(opcional)"),og()(),Il(413,"p"),Qx(414,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),og()()(),Il(415,"tr",14)(416,"td",15)(417,"div",16)(418,"span",17),Qx(419," p-format-date"),zl(420,"br"),og()()(),Il(421,"td",18)(422,"code",22),Qx(423,"string"),og()(),Il(424,"td",20)(425,"p"),Qx(426,"Determinado pelo locale"),og()(),Il(427,"td",21)(428,"em")(429,"strong"),Qx(430,"(opcional)"),og()(),Il(431,"p"),Qx(432,"Define o formato de exibi\xE7\xE3o da data."),og(),Il(433,"p"),Qx(434,"Valores v\xE1lidos:"),og(),Il(435,"ul")(436,"li")(437,"code"),Qx(438,"dd/mm/yyyy"),og()(),Il(439,"li")(440,"code"),Qx(441,"mm/dd/yyyy"),og()(),Il(442,"li")(443,"code"),Qx(444,"yyyy/mm/dd"),og()()(),Il(445,"p"),Qx(446,"Quando n\xE3o informado, o formato ser\xE1 determinado automaticamente pelo locale:"),og(),Il(447,"ul")(448,"li")(449,"code"),Qx(450,"en"),og(),Qx(451," \u2192 "),Il(452,"code"),Qx(453,"mm/dd/yyyy"),og()(),Il(454,"li")(455,"code"),Qx(456,"pt"),og(),Qx(457,", "),Il(458,"code"),Qx(459,"es"),og(),Qx(460,", "),Il(461,"code"),Qx(462,"ru"),og(),Qx(463," \u2192 "),Il(464,"code"),Qx(465,"dd/mm/yyyy"),og()()()()(),Il(466,"tr",14)(467,"td",15)(468,"div",16)(469,"span",17),Qx(470," p-disabled"),zl(471,"br"),og()()(),Il(472,"td",18)(473,"code",19),Qx(474,"boolean "),og(),Il(475,"code",22),Qx(476," string"),og()(),Il(477,"td",20)(478,"p")(479,"code"),Qx(480,"false"),og()()(),Il(481,"td",21)(482,"em")(483,"strong"),Qx(484,"(opcional)"),og()(),Il(485,"p"),Qx(486,"Desabilita o campo."),og()()(),Il(487,"tr",14)(488,"td",15)(489,"div",16)(490,"span",17),Qx(491," p-error-limit"),zl(492,"br"),og()()(),Il(493,"td",18)(494,"code",19),Qx(495,"boolean"),og()(),Il(496,"td",20)(497,"p")(498,"code"),Qx(499,"false"),og()()(),Il(500,"td",21)(501,"em")(502,"strong"),Qx(503,"(opcional)"),og()(),Il(504,"p"),Qx(505,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),og()()(),Il(506,"tr",14)(507,"td",15)(508,"div",16)(509,"span",17),Qx(510," p-error-pattern"),zl(511,"br"),og()()(),Il(512,"td",18)(513,"code",22),Qx(514,"string"),og()(),Il(515,"td",20),Qx(516,"-"),og(),Il(517,"td",21)(518,"em")(519,"strong"),Qx(520,"(opcional)"),og()(),Il(521,"p"),Qx(522,"Mensagem apresentada quando a data/hora for inv\xE1lida ou fora do per\xEDodo."),og()()(),Il(523,"tr",14)(524,"td",15)(525,"div",16)(526,"span",17),Qx(527," p-help"),zl(528,"br"),og()()(),Il(529,"td",18)(530,"code",22),Qx(531,"string"),og()(),Il(532,"td",20),Qx(533,"-"),og(),Il(534,"td",21)(535,"em")(536,"strong"),Qx(537,"(opcional)"),og()(),Il(538,"p"),Qx(539,"Texto de apoio do campo."),og()()(),Il(540,"tr",14)(541,"td",15)(542,"div",23)(543,"span",24),Qx(544," (p-keydown)"),zl(545,"br"),og()()(),Il(546,"td",18)(547,"code",25),Qx(548,"EventEmitter"),og()(),Il(549,"td",20),Qx(550,"-"),og(),Il(551,"td",21)(552,"em")(553,"strong"),Qx(554,"(opcional)"),og()(),Il(555,"p"),Qx(556,"Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente."),og()()(),Il(557,"tr",14)(558,"td",15)(559,"div",16)(560,"span",17),Qx(561," p-label"),zl(562,"br"),og()()(),Il(563,"td",18)(564,"code",22),Qx(565,"string"),og()(),Il(566,"td",20),Qx(567,"-"),og(),Il(568,"td",21)(569,"em")(570,"strong"),Qx(571,"(opcional)"),og()(),Il(572,"p"),Qx(573,"R\xF3tulo do campo."),og()()(),Il(574,"tr",14)(575,"td",15)(576,"div",16)(577,"span",17),Qx(578," p-label-text-wrap"),zl(579,"br"),og()()(),Il(580,"td",18)(581,"code",19),Qx(582,"boolean"),og()(),Il(583,"td",20)(584,"p")(585,"code"),Qx(586,"false"),og()()(),Il(587,"td",21)(588,"em")(589,"strong"),Qx(590,"(opcional)"),og()(),Il(591,"p"),Qx(592,"Habilita a quebra autom\xE1tica do texto da propriedade "),Il(593,"code"),Qx(594,"p-label"),og(),Qx(595,"."),og()()(),Il(596,"tr",14)(597,"td",15)(598,"div",16)(599,"span",17),Qx(600," p-loading"),zl(601,"br"),og()()(),Il(602,"td",18)(603,"code",19),Qx(604,"boolean "),og(),Il(605,"code",22),Qx(606," string"),og()(),Il(607,"td",20)(608,"p")(609,"code"),Qx(610,"false"),og()()(),Il(611,"td",21)(612,"em")(613,"strong"),Qx(614,"(opcional)"),og()(),Il(615,"p"),Qx(616,"Exibe um \xEDcone de carregamento no lado direito do campo."),og()()(),Il(617,"tr",14)(618,"td",15)(619,"div",16)(620,"span",17),Qx(621," p-locale"),zl(622,"br"),og()()(),Il(623,"td",18)(624,"code",22),Qx(625,"string"),og()(),Il(626,"td",20),Qx(627,"-"),og(),Il(628,"td",21)(629,"em")(630,"strong"),Qx(631,"(opcional)"),og()(),Il(632,"p"),Qx(633,"Idioma do componente."),og(),Il(634,"blockquote")(635,"p"),Qx(636,"O locale padr\xE3o ser\xE1 recuperado com base no "),Il(637,"a",26)(638,"code"),Qx(639,"PoI18nService"),og()(),Qx(640," ou "),Il(641,"em"),Qx(642,"browser"),og(),Qx(643,"."),og()()()(),Il(644,"tr",14)(645,"td",15)(646,"div",16)(647,"span",17),Qx(648," p-max-date"),zl(649,"br"),og()()(),Il(650,"td",18)(651,"code",22),Qx(652,"string "),og(),Il(653,"code",27),Qx(654," Date"),og()(),Il(655,"td",20),Qx(656,"-"),og(),Il(657,"td",21)(658,"em")(659,"strong"),Qx(660,"(opcional)"),og()(),Il(661,"p"),Qx(662,"Define uma data m\xE1xima para o "),Il(663,"code"),Qx(664,"po-datetimepicker"),og(),Qx(665,`.
Datas posteriores ao limite ficam desabilitadas no calend\xE1rio.`),og(),Il(666,"p"),Qx(667,"Aceita os formatos:"),og(),Il(668,"ul")(669,"li")(670,"code"),Qx(671,"Date"),og(),Qx(672," object: "),Il(673,"code"),Qx(674,"new Date(2026, 4, 31)"),og()(),Il(675,"li"),Qx(676,"ISO string: "),Il(677,"code"),Qx(678,"'2026-05-31'"),og()(),Il(679,"li"),Qx(680,"ISO com hora: "),Il(681,"code"),Qx(682,"'2026-05-31T23:59:59-03:00'"),og()()()()(),Il(683,"tr",14)(684,"td",15)(685,"div",16)(686,"span",17),Qx(687," p-max-time"),zl(688,"br"),og()()(),Il(689,"td",18)(690,"code",22),Qx(691,"string"),og()(),Il(692,"td",20),Qx(693,"-"),og(),Il(694,"td",21)(695,"em")(696,"strong"),Qx(697,"(opcional)"),og()(),Il(698,"p"),Qx(699,`Define o hor\xE1rio m\xE1ximo permitido para sele\xE7\xE3o no timer.
Hor\xE1rios posteriores ao limite ficam desabilitados.`),og(),Il(700,"p"),Qx(701,"Formato aceito: "),Il(702,"code"),Qx(703,"HH:mm"),og(),Qx(704," ou "),Il(705,"code"),Qx(706,"HH:mm:ss"),og(),Qx(707,"."),og()()(),Il(708,"tr",14)(709,"td",15)(710,"div",16)(711,"span",17),Qx(712," p-min-date"),zl(713,"br"),og()()(),Il(714,"td",18)(715,"code",22),Qx(716,"string "),og(),Il(717,"code",27),Qx(718," Date"),og()(),Il(719,"td",20),Qx(720,"-"),og(),Il(721,"td",21)(722,"em")(723,"strong"),Qx(724,"(opcional)"),og()(),Il(725,"p"),Qx(726,"Define uma data m\xEDnima para o "),Il(727,"code"),Qx(728,"po-datetimepicker"),og(),Qx(729,`.
Datas anteriores ao limite ficam desabilitadas no calend\xE1rio.`),og(),Il(730,"p"),Qx(731,"Aceita os formatos:"),og(),Il(732,"ul")(733,"li")(734,"code"),Qx(735,"Date"),og(),Qx(736," object: "),Il(737,"code"),Qx(738,"new Date(2026, 0, 1)"),og()(),Il(739,"li"),Qx(740,"ISO string: "),Il(741,"code"),Qx(742,"'2026-01-01'"),og()(),Il(743,"li"),Qx(744,"ISO com hora: "),Il(745,"code"),Qx(746,"'2026-01-01T00:00:00-03:00'"),og()()()()(),Il(747,"tr",14)(748,"td",15)(749,"div",16)(750,"span",17),Qx(751," p-min-time"),zl(752,"br"),og()()(),Il(753,"td",18)(754,"code",22),Qx(755,"string"),og()(),Il(756,"td",20),Qx(757,"-"),og(),Il(758,"td",21)(759,"em")(760,"strong"),Qx(761,"(opcional)"),og()(),Il(762,"p"),Qx(763,`Define o hor\xE1rio m\xEDnimo permitido para sele\xE7\xE3o no timer.
Hor\xE1rios anteriores ao limite ficam desabilitados.`),og(),Il(764,"p"),Qx(765,"Formato aceito: "),Il(766,"code"),Qx(767,"HH:mm"),og(),Qx(768," ou "),Il(769,"code"),Qx(770,"HH:mm:ss"),og(),Qx(771,"."),og()()(),Il(772,"tr",14)(773,"td",15)(774,"div",16)(775,"span",17),Qx(776," p-minute-interval"),zl(777,"br"),og()()(),Il(778,"td",18)(779,"code",28),Qx(780,"number"),og()(),Il(781,"td",20)(782,"p")(783,"code"),Qx(784,"5"),og()()(),Il(785,"td",21)(786,"em")(787,"strong"),Qx(788,"(opcional)"),og()(),Il(789,"p"),Qx(790,"Define o intervalo entre os minutos exibidos no painel do timer."),og()()(),Il(791,"tr",14)(792,"td",15)(793,"div",16)(794,"span",17),Qx(795," name"),zl(796,"br"),og()()(),Il(797,"td",18)(798,"code",22),Qx(799,"string"),og()(),Il(800,"td",20),Qx(801,"-"),og(),Il(802,"td",21)(803,"em")(804,"strong"),Qx(805,"(opcional)"),og()(),Il(806,"p"),Qx(807,"Nome do componente."),og()()(),Il(808,"tr",14)(809,"td",15)(810,"div",16)(811,"span",17),Qx(812," p-no-autocomplete"),zl(813,"br"),og()()(),Il(814,"td",18)(815,"code",19),Qx(816,"boolean "),og(),Il(817,"code",22),Qx(818," string"),og()(),Il(819,"td",20)(820,"p")(821,"code"),Qx(822,"false"),og()()(),Il(823,"td",21)(824,"em")(825,"strong"),Qx(826,"(opcional)"),og()(),Il(827,"p"),Qx(828,"Define a propriedade nativa "),Il(829,"code"),Qx(830,"autocomplete"),og(),Qx(831," do campo como "),Il(832,"code"),Qx(833,"off"),og(),Qx(834,"."),og()()(),Il(835,"tr",14)(836,"td",15)(837,"div",23)(838,"span",24),Qx(839," (p-blur)"),zl(840,"br"),og()()(),Il(841,"td",18)(842,"code",25),Qx(843,"EventEmitter"),og()(),Il(844,"td",20),Qx(845,"-"),og(),Il(846,"td",21)(847,"em")(848,"strong"),Qx(849,"(opcional)"),og()(),Il(850,"p"),Qx(851,"Evento disparado ao sair do campo (blur)."),og()()(),Il(852,"tr",14)(853,"td",15)(854,"div",23)(855,"span",24),Qx(856," (p-change)"),zl(857,"br"),og()()(),Il(858,"td",18)(859,"code",25),Qx(860,"EventEmitter"),og()(),Il(861,"td",20),Qx(862,"-"),og(),Il(863,"td",21)(864,"em")(865,"strong"),Qx(866,"(opcional)"),og()(),Il(867,"p"),Qx(868,"Evento disparado ao alterar valor do campo."),og()()(),Il(869,"tr",14)(870,"td",15)(871,"div",16)(872,"span",17),Qx(873," p-optional"),zl(874,"br"),og()()(),Il(875,"td",18)(876,"code",19),Qx(877,"boolean"),og()(),Il(878,"td",20)(879,"p")(880,"code"),Qx(881,"false"),og()()(),Il(882,"td",21)(883,"em")(884,"strong"),Qx(885,"(opcional)"),og()(),Il(886,"p"),Qx(887,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),og()()(),Il(888,"tr",14)(889,"td",15)(890,"div",16)(891,"span",17),Qx(892," p-placeholder"),zl(893,"br"),og()()(),Il(894,"td",18)(895,"code",22),Qx(896,"string"),og()(),Il(897,"td",20),Qx(898,"-"),og(),Il(899,"td",21)(900,"em")(901,"strong"),Qx(902,"(opcional)"),og()(),Il(903,"p"),Qx(904,"Mensagem que aparecer\xE1 enquanto o campo n\xE3o estiver preenchido."),og()()(),Il(905,"tr",14)(906,"td",15)(907,"div",16)(908,"span",17),Qx(909," p-helper"),zl(910,"br"),og()()(),Il(911,"td",18)(912,"code",29),Qx(913,"PoHelperOptions "),og(),Il(914,"code",22),Qx(915," string"),og()(),Il(916,"td",20),Qx(917,"-"),og(),Il(918,"td",21)(919,"em")(920,"strong"),Qx(921,"(opcional)"),og()(),Il(922,"p"),Qx(923,"Define as op\xE7\xF5es do componente de ajuda (po-helper)."),og(),Il(924,"blockquote")(925,"p"),Qx(926,"Para mais informa\xE7\xF5es acesse: "),Il(927,"a",30),Qx(928,"https://po-ui.io/documentation/po-helper"),og(),Qx(929,"."),og()()()(),Il(930,"tr",14)(931,"td",15)(932,"div",16)(933,"span",17),Qx(934," p-readonly"),zl(935,"br"),og()()(),Il(936,"td",18)(937,"code",19),Qx(938,"boolean "),og(),Il(939,"code",22),Qx(940," string"),og()(),Il(941,"td",20)(942,"p")(943,"code"),Qx(944,"false"),og()()(),Il(945,"td",21)(946,"em")(947,"strong"),Qx(948,"(opcional)"),og()(),Il(949,"p"),Qx(950,"Torna o componente somente leitura."),og()()(),Il(951,"tr",14)(952,"td",15)(953,"div",16)(954,"span",17),Qx(955," p-required"),zl(956,"br"),og()()(),Il(957,"td",18)(958,"code",19),Qx(959,"boolean "),og(),Il(960,"code",22),Qx(961," string"),og()(),Il(962,"td",20)(963,"p")(964,"code"),Qx(965,"false"),og()()(),Il(966,"td",21)(967,"em")(968,"strong"),Qx(969,"(opcional)"),og()(),Il(970,"p"),Qx(971,"Define que o campo ser\xE1 obrigat\xF3rio."),og()()(),Il(972,"tr",14)(973,"td",15)(974,"div",16)(975,"span",17),Qx(976," p-second-interval"),zl(977,"br"),og()()(),Il(978,"td",18)(979,"code",28),Qx(980,"number"),og()(),Il(981,"td",20)(982,"p")(983,"code"),Qx(984,"1"),og()()(),Il(985,"td",21)(986,"em")(987,"strong"),Qx(988,"(opcional)"),og()(),Il(989,"p"),Qx(990,`Define o intervalo entre os segundos exibidos no painel do timer.
Utilizado apenas quando `),Il(991,"code"),Qx(992,"p-show-seconds"),og(),Qx(993," est\xE1 ativo."),og()()(),Il(994,"tr",14)(995,"td",15)(996,"div",16)(997,"span",17),Qx(998," p-required-field-error-message"),zl(999,"br"),og()()(),Il(1e3,"td",18)(1001,"code",19),Qx(1002,"boolean"),og()(),Il(1003,"td",20)(1004,"p")(1005,"code"),Qx(1006,"false"),og()()(),Il(1007,"td",21)(1008,"em")(1009,"strong"),Qx(1010,"(opcional)"),og()(),Il(1011,"p"),Qx(1012,"Exibe a mensagem setada na propriedade "),Il(1013,"code"),Qx(1014,"p-error-pattern"),og(),Qx(1015," se o campo estiver vazio e for requerido."),og(),Il(1016,"blockquote")(1017,"p"),Qx(1018,"Necess\xE1rio que a propriedade "),Il(1019,"code"),Qx(1020,"p-required"),og(),Qx(1021," esteja habilitada."),og()()()(),Il(1022,"tr",14)(1023,"td",15)(1024,"div",16)(1025,"span",17),Qx(1026," p-show-required"),zl(1027,"br"),og()()(),Il(1028,"td",18)(1029,"code",19),Qx(1030,"boolean"),og()(),Il(1031,"td",20)(1032,"p")(1033,"code"),Qx(1034,"false"),og()()(),Il(1035,"td",21)(1036,"em")(1037,"strong"),Qx(1038,"(opcional)"),og()(),Il(1039,"p"),Qx(1040,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),og()()(),Il(1041,"tr",14)(1042,"td",15)(1043,"div",16)(1044,"span",17),Qx(1045," p-show-seconds"),zl(1046,"br"),og()()(),Il(1047,"td",18)(1048,"code",19),Qx(1049,"boolean"),og()(),Il(1050,"td",20)(1051,"p")(1052,"code"),Qx(1053,"false"),og()()(),Il(1054,"td",21)(1055,"em")(1056,"strong"),Qx(1057,"(opcional)"),og()(),Il(1058,"p"),Qx(1059,"Exibe a coluna de segundos no painel de sele\xE7\xE3o do timer."),og()()(),Il(1060,"tr",14)(1061,"td",15)(1062,"div",16)(1063,"span",17),Qx(1064," p-size"),zl(1065,"br"),og()()(),Il(1066,"td",18)(1067,"code",22),Qx(1068,"string"),og()(),Il(1069,"td",20)(1070,"p")(1071,"code"),Qx(1072,"medium"),og()()(),Il(1073,"td",21)(1074,"em")(1075,"strong"),Qx(1076,"(opcional)"),og()(),Il(1077,"p"),Qx(1078,"Define o tamanho do componente:"),og(),Il(1079,"ul")(1080,"li")(1081,"code"),Qx(1082,"small"),og(),Qx(1083,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),og(),Il(1084,"li")(1085,"code"),Qx(1086,"medium"),og(),Qx(1087,": altura do input como 44px."),og()()()(),Il(1088,"tr",14)(1089,"td",15)(1090,"div",16)(1091,"span",17),Qx(1092," p-format-time"),zl(1093,"br"),og()()(),Il(1094,"td",18)(1095,"code",31),Qx(1096,"PoTimerFormat"),og()(),Il(1097,"td",20)(1098,"p"),Qx(1099,"Determinado pelo locale"),og()(),Il(1100,"td",21)(1101,"em")(1102,"strong"),Qx(1103,"(opcional)"),og()(),Il(1104,"p"),Qx(1105,"Define o formato de exibi\xE7\xE3o do timer."),og(),Il(1106,"p"),Qx(1107,"Valores v\xE1lidos:"),og(),Il(1108,"ul")(1109,"li")(1110,"code"),Qx(1111,"24"),og(),Qx(1112,": formato de 24 horas (padr\xE3o para pt, es, ru)"),og(),Il(1113,"li")(1114,"code"),Qx(1115,"12"),og(),Qx(1116,": formato de 12 horas com indicador AM/PM (padr\xE3o para en)"),og()(),Il(1117,"p"),Qx(1118,"Quando n\xE3o informado, o formato ser\xE1 determinado automaticamente pelo locale:"),og(),Il(1119,"ul")(1120,"li")(1121,"code"),Qx(1122,"en"),og(),Qx(1123," \u2192 12h (AM/PM)"),og(),Il(1124,"li")(1125,"code"),Qx(1126,"pt"),og(),Qx(1127,", "),Il(1128,"code"),Qx(1129,"es"),og(),Qx(1130,", "),Il(1131,"code"),Qx(1132,"ru"),og(),Qx(1133," \u2192 24h"),og()()()()(),Il(1134,"h3",10),Qx(1135,"M\xE9todos"),og(),Il(1136,"table",32)(1137,"tr",14)(1138,"th",33)(1139,"div",16)(1140,"h4")(1141,"span",17),Qx(1142," showAdditionalHelp "),og()()()()(),Il(1143,"tr",21)(1144,"td",21)(1145,"p"),Qx(1146,"M\xE9todo que exibe "),Il(1147,"code"),Qx(1148,"p-helper"),og(),Qx(1149," ou executa a a\xE7\xE3o definida em "),Il(1150,"code"),Qx(1151,"p-helper{eventOnClick}"),og(),Qx(1152,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Il(1153,"code"),Qx(1154,"p-keydown"),og(),Qx(1155,"."),og(),Il(1156,"blockquote")(1157,"p"),Qx(1158,"Exibe ou oculta o conte\xFAdo do componente "),Il(1159,"code"),Qx(1160,"po-helper"),og(),Qx(1161," quando o componente estiver com foco."),og()(),Il(1162,"pre")(1163,"code"),Qx(1164,`// Exemplo com p-label e p-helper
<po-datetimepicker
 #datetimepicker
 ...
 p-label="Label"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, datetimepicker)"
></po-datetimepicker>
`),og()(),Il(1165,"pre")(1166,"code"),Qx(1167,`onKeyDown(event: KeyboardEvent, inp: PoDatetimepickerComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),og()()()()(),zl(1168,"br"),og());},dependencies:[Ka],encapsulation:2})}return l})();var Ce=(()=>{class l{route;router;sub;hidePoWebSample=true;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(p,r){this.route=p,this.router=r;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let r=p.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:"merge"}),this.activeTab=p;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(r){return new(r||l)(C(Xn),C(En))};static \u0275cmp=Un({type:l,selectors:[["ng-component"]],standalone:false,decls:9,vars:4,consts:[["p-title","Datetimepicker",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,i){r&1&&(Il(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return i.changeTab("doc")}),zl(3,"sample-po-datetimepicker-doc"),og(),Il(4,"po-tab",3),ft("p-click",function(){return i.changeTab("web")}),zl(5,"sample-po-datetimepicker-basic-view")(6,"sample-po-datetimepicker-labs-view")(7,"sample-po-datetimepicker-12h-seconds-view")(8,"sample-po-datetimepicker-scheduling-view"),og()()()),r&2&&(nw("p-actions",i.actions),Lp(2),nw("p-active",i.activeTab==="doc"),Lp(2),nw("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[cNe,qme,Yme,ce,Se,he,fe,xe],encapsulation:2})}return l})();var Fe=[{path:"",component:Ce}],ve=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275mod=fe$1({type:l});static \u0275inj=ue({imports:[uL.forChild(Fe),uL]})}return l})();var Et=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275mod=fe$1({type:l});static \u0275inj=ue({imports:[sr,ve]})}return l})();export{Et as DocPoDatetimepickerModule};