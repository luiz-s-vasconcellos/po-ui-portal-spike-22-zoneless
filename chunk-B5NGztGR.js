import {f as fe$1,u as ue,s as sr,h as hL,w,c3 as Xn,E as En,U as Un,a as f,c5 as Lde,aW as Yp,cV as Ew,H as Wl,an as CO,aH as Ka,b8 as Bme,b9 as qme,F as Sl,z as eN,J as og,a1 as ft,L as Lp,ar as $x,au as dg,Q as nw,bs as fN,aX as Z9,aF as G9,aY as q9,aG as _k,aZ as mk,b0 as Qt,b1 as mv,c4 as b3,bD as Pde,b4 as L3,cp as Rhe,c8 as wde,cW as _ue,c9 as Ghe,aB as wx,aM as ww,aN as e0,aO as Ew$1,aP as n0,aJ as Hhe,bd as Nx,av as ql,aw as lo,ax as uo,a3 as rNe,aD as Ky,aT as nN,aE as Xy}from'./main-WP3NAV7C.js';var se=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-datetimepicker-basic"]],standalone:false,decls:1,vars:0,consts:[["name","datetimepicker","p-label","PO Datetimepicker"]],template:function(r,i){r&1&&Wl(0,"po-datetimepicker",0);},dependencies:[Ew],encapsulation:2,changeDetection:1})}return l})();var ke=l=>({"docs-sample-code-tabs":l}),ce=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-datetimepicker-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Datetimepicker Basic"),og(),Sl(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-datetimepicker-basic/sample-po-datetimepicker-basic.component.html"),og(),Sl(13,"pre",7),eN(14,`<po-datetimepicker name="datetimepicker" p-label="PO Datetimepicker"> </po-datetimepicker>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-datetimepicker-basic/sample-po-datetimepicker-basic.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-datetimepicker-basic',
  templateUrl: './sample-po-datetimepicker-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDatetimepickerBasicComponent {}
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-datetimepicker-basic"),og(),Wl(23,"hr")),r&2&&(Lp(5),$x("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,ke,i.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,se],encapsulation:2})}return l})();var ge=(()=>{class l{datetimepicker;errorPattern;event;formatDate;formatTime;help;helperText;label;locale;maxDate;maxTime;minDate;minTime;minuteInterval;placeholder;properties;secondInterval;size;propertiesOptions=[{value:"clean",label:"Clean"},{value:"disabled",label:"Disabled"},{value:"noAutocomplete",label:"No Autocomplete"},{value:"optional",label:"Optional"},{value:"readonly",label:"Read Only"},{value:"required",label:"Required"},{value:"requiredFieldErrorMessage",label:"Required Field Error Message"},{value:"showRequired",label:"Show Required"},{value:"showSeconds",label:"Show Seconds"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"},{value:"loading",label:"Loading"},{value:"compactLabel",label:"Compact Label"}];formatDateOptions=[{label:"dd/mm/yyyy",value:"dd/mm/yyyy"},{label:"mm/dd/yyyy",value:"mm/dd/yyyy"},{label:"yyyy/mm/dd",value:"yyyy/mm/dd"}];formatTimeOptions=[{label:"24h",value:"24"},{label:"12h (AM/PM)",value:"12"}];localeOptions=[{label:"pt",value:"pt"},{label:"en",value:"en"},{label:"es",value:"es"},{label:"ru",value:"ru"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore();}changeEvent(p){this.event=p;}restore(){this.datetimepicker=void 0,this.errorPattern=void 0,this.event=void 0,this.formatDate=void 0,this.formatTime=void 0,this.help=void 0,this.helperText="",this.label=void 0,this.locale=void 0,this.maxDate=void 0,this.maxTime=void 0,this.minDate=void 0,this.minTime=void 0,this.minuteInterval=void 0,this.placeholder=void 0,this.properties=[],this.secondInterval=void 0,this.size="medium";}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-datetimepicker-labs"]],standalone:false,decls:26,vars:54,consts:[["f","ngForm"],["name","datetimepicker",1,"po-sm-12",3,"ngModelChange","p-blur","p-change","p-keydown","ngModel","p-clean","p-compact-label","p-disabled","p-error-limit","p-error-pattern","p-format-date","p-format-time","p-help","p-helper","p-label","p-label-text-wrap","p-loading","p-locale","p-max-date","p-max-time","p-min-date","p-min-time","p-minute-interval","p-no-autocomplete","p-optional","p-placeholder","p-readonly","p-required","p-required-field-error-message","p-second-interval","p-show-required","p-show-seconds","p-size"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","errorPattern","p-clean","","p-label","Error Pattern",1,"po-md-6",3,"ngModelChange","ngModel"],["name","minuteInterval","p-clean","","p-label","Minute Interval",1,"po-md-6",3,"ngModelChange","ngModel"],["name","secondInterval","p-clean","","p-label","Second Interval",1,"po-md-6",3,"ngModelChange","ngModel"],["name","minTime","p-clean","","p-label","Min Time",1,"po-md-6",3,"ngModelChange","ngModel"],["name","maxTime","p-clean","","p-label","Max Time",1,"po-md-6",3,"ngModelChange","ngModel"],["name","minDate","p-clean","","p-label","Min Date",1,"po-md-6",3,"ngModelChange","ngModel","p-max-date"],["name","maxDate","p-clean","","p-label","Max Date",1,"po-md-6",3,"ngModelChange","ngModel","p-min-date"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","locale","p-columns","4","p-label","Locale",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","formatDate","p-columns","4","p-label","Format Date",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","formatTime","p-columns","4","p-label","Format Time",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","restore","p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(r,i){if(r&1){let d=wx();Sl(0,"po-datetimepicker",1),ww("ngModelChange",function(o){return Ky(d),nN(i.datetimepicker,o)||(i.datetimepicker=o),Xy(o)}),ft("p-blur",function(){return i.changeEvent("p-blur")})("p-change",function(){return i.changeEvent("p-change")})("p-keydown",function(){return i.changeEvent("p-keydown")}),og(),e0(),Wl(1,"po-divider"),Sl(2,"div",2),Wl(3,"po-info",3)(4,"po-info",4),og(),Wl(5,"po-divider"),Sl(6,"form",null,0)(8,"po-input",5),ww("ngModelChange",function(o){return Ky(d),nN(i.label,o)||(i.label=o),Xy(o)}),og(),e0(),Sl(9,"po-input",6),ww("ngModelChange",function(o){return Ky(d),nN(i.help,o)||(i.help=o),Xy(o)}),og(),e0(),Sl(10,"po-input",7),ww("ngModelChange",function(o){return Ky(d),nN(i.helperText,o)||(i.helperText=o),Xy(o)}),og(),e0(),Sl(11,"po-input",8),ww("ngModelChange",function(o){return Ky(d),nN(i.placeholder,o)||(i.placeholder=o),Xy(o)}),og(),e0(),Sl(12,"po-input",9),ww("ngModelChange",function(o){return Ky(d),nN(i.errorPattern,o)||(i.errorPattern=o),Xy(o)}),og(),e0(),Sl(13,"po-number",10),ww("ngModelChange",function(o){return Ky(d),nN(i.minuteInterval,o)||(i.minuteInterval=o),Xy(o)}),og(),e0(),Sl(14,"po-number",11),ww("ngModelChange",function(o){return Ky(d),nN(i.secondInterval,o)||(i.secondInterval=o),Xy(o)}),og(),e0(),Sl(15,"po-timepicker",12),ww("ngModelChange",function(o){return Ky(d),nN(i.minTime,o)||(i.minTime=o),Xy(o)}),og(),e0(),Sl(16,"po-timepicker",13),ww("ngModelChange",function(o){return Ky(d),nN(i.maxTime,o)||(i.maxTime=o),Xy(o)}),og(),e0(),Sl(17,"po-datepicker",14),ww("ngModelChange",function(o){return Ky(d),nN(i.minDate,o)||(i.minDate=o),Xy(o)}),og(),e0(),Sl(18,"po-datepicker",15),ww("ngModelChange",function(o){return Ky(d),nN(i.maxDate,o)||(i.maxDate=o),Xy(o)}),og(),e0(),Sl(19,"po-checkbox-group",16),ww("ngModelChange",function(o){return Ky(d),nN(i.properties,o)||(i.properties=o),Xy(o)}),og(),e0(),Sl(20,"po-radio-group",17),ww("ngModelChange",function(o){return Ky(d),nN(i.locale,o)||(i.locale=o),Xy(o)}),og(),e0(),Sl(21,"po-radio-group",18),ww("ngModelChange",function(o){return Ky(d),nN(i.formatDate,o)||(i.formatDate=o),Xy(o)}),og(),e0(),Sl(22,"po-radio-group",19),ww("ngModelChange",function(o){return Ky(d),nN(i.formatTime,o)||(i.formatTime=o),Xy(o)}),og(),e0(),Sl(23,"po-radio-group",20),ww("ngModelChange",function(o){return Ky(d),nN(i.size,o)||(i.size=o),Xy(o)}),og(),e0(),Sl(24,"div",2)(25,"po-button",21),ft("p-click",function(){return i.restore()}),og()()();}r&2&&(Ew$1("ngModel",i.datetimepicker),nw("p-clean",i.properties.includes("clean"))("p-compact-label",i.properties==null?null:i.properties.includes("compactLabel"))("p-disabled",i.properties.includes("disabled"))("p-error-limit",i.properties==null?null:i.properties.includes("errorLimit"))("p-error-pattern",i.errorPattern)("p-format-date",i.formatDate)("p-format-time",i.formatTime)("p-help",i.help)("p-helper",i.helperText)("p-label",i.label)("p-label-text-wrap",i.properties==null?null:i.properties.includes("labelTextWrap"))("p-loading",i.properties.includes("loading"))("p-locale",i.locale)("p-max-date",i.maxDate)("p-max-time",i.maxTime)("p-min-date",i.minDate)("p-min-time",i.minTime)("p-minute-interval",i.minuteInterval)("p-no-autocomplete",i.properties==null?null:i.properties.includes("noAutocomplete"))("p-optional",i.properties.includes("optional"))("p-placeholder",i.placeholder)("p-readonly",i.properties.includes("readonly"))("p-required",i.properties.includes("required"))("p-required-field-error-message",i.properties.includes("requiredFieldErrorMessage"))("p-second-interval",i.secondInterval)("p-show-required",i.properties.includes("showRequired"))("p-show-seconds",i.properties.includes("showSeconds"))("p-size",i.size),n0(),Lp(3),nw("p-value",i.datetimepicker),Lp(),nw("p-value",i.event),Lp(4),Ew$1("ngModel",i.label),n0(),Lp(),Ew$1("ngModel",i.help),n0(),Lp(),Ew$1("ngModel",i.helperText),n0(),Lp(),Ew$1("ngModel",i.placeholder),n0(),Lp(),Ew$1("ngModel",i.errorPattern),n0(),Lp(),Ew$1("ngModel",i.minuteInterval),n0(),Lp(),Ew$1("ngModel",i.secondInterval),n0(),Lp(),Ew$1("ngModel",i.minTime),n0(),Lp(),Ew$1("ngModel",i.maxTime),n0(),Lp(),Ew$1("ngModel",i.minDate),nw("p-max-date",i.maxDate),n0(),Lp(),Ew$1("ngModel",i.maxDate),nw("p-min-date",i.minDate),n0(),Lp(),Ew$1("ngModel",i.properties),nw("p-options",i.propertiesOptions),n0(),Lp(),Ew$1("ngModel",i.locale),nw("p-options",i.localeOptions),n0(),Lp(),Ew$1("ngModel",i.formatDate),nw("p-options",i.formatDateOptions),n0(),Lp(),Ew$1("ngModel",i.formatTime),nw("p-options",i.formatTimeOptions),n0(),Lp(),Ew$1("ngModel",i.size),nw("p-options",i.sizeOptions),n0());},dependencies:[Z9,G9,q9,_k,mk,Qt,mv,b3,Pde,Ew,L3,Rhe,wde,_ue,Ghe],encapsulation:2,changeDetection:1})}return l})();var Me=l=>({"docs-sample-code-tabs":l}),Se=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-datetimepicker-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Datetimepicker Labs"),og(),Sl(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-datetimepicker-labs/sample-po-datetimepicker-labs.component.html"),og(),Sl(13,"pre",7),eN(14,`<po-datetimepicker
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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-datetimepicker-labs/sample-po-datetimepicker-labs.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-datetimepicker-labs"),og(),Wl(23,"hr")),r&2&&(Lp(5),$x("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,Me,i.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,ge],encapsulation:2})}return l})();var Ee=(()=>{class l{datetime=new Date(2026,4,20,15,30,45);static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-datetimepicker-12h-seconds"]],standalone:false,decls:1,vars:1,consts:[["name","datetimepicker12h","p-label","PO Datetimepicker - 12h with Seconds","p-show-seconds","true","p-format-time","12","p-format-date","mm/dd/yyyy",3,"ngModelChange","ngModel"]],template:function(r,i){r&1&&(Sl(0,"po-datetimepicker",0),ww("ngModelChange",function(s){return nN(i.datetime,s)||(i.datetime=s),s}),og(),e0()),r&2&&(Ew$1("ngModel",i.datetime),n0());},dependencies:[G9,_k,Ew],encapsulation:2,changeDetection:1})}return l})();var Te=l=>({"docs-sample-code-tabs":l}),he=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-datetimepicker-12h-seconds-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Datetimepicker - 12h with Seconds"),og(),Sl(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-datetimepicker-12h-seconds/sample-po-datetimepicker-12h-seconds.component.html"),og(),Sl(13,"pre",7),eN(14,`<po-datetimepicker
  name="datetimepicker12h"
  p-label="PO Datetimepicker - 12h with Seconds"
  [(ngModel)]="datetime"
  p-show-seconds="true"
  p-format-time="12"
  p-format-date="mm/dd/yyyy"
>
</po-datetimepicker>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-datetimepicker-12h-seconds/sample-po-datetimepicker-12h-seconds.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-datetimepicker-12h-seconds',
  templateUrl: './sample-po-datetimepicker-12h-seconds.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDatetimepicker12hSecondsComponent {
  datetime = new Date(2026, 4, 20, 15, 30, 45);
}
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-datetimepicker-12h-seconds"),og(),Wl(23,"hr")),r&2&&(Lp(5),$x("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,Te,i.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,Ee],encapsulation:2})}return l})();var Oe=["formScheduling"],be=(()=>{class l{poDialog=f(Lde);poNotification=f(Yp);formScheduling;appointment;doctor;patient;specialty;specialtyOptions=[{value:"general",label:"Cl\xEDnico Geral"},{value:"cardiology",label:"Cardiologia"},{value:"dermatology",label:"Dermatologia"},{value:"orthopedics",label:"Ortopedia"},{value:"neurology",label:"Neurologia"}];confirm(){let p=this.appointment?this.appointment.slice(0,16):"",r=`Confirmar agendamento de consulta?

Paciente: ${this.patient}
M\xE9dico: ${this.doctor}
Especialidade: ${this.getSpecialtyLabel()}
Data/Hora: ${p}`;this.poDialog.confirm({title:"Confirmar Agendamento",message:r,confirm:()=>{this.poNotification.success("Consulta agendada com sucesso!"),this.formScheduling.reset();},cancel:()=>{this.poNotification.warning("Agendamento cancelado.");}});}getSpecialtyLabel(){let p=this.specialtyOptions.find(r=>r.value===this.specialty);return p?p.label:""}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-datetimepicker-scheduling"]],viewQuery:function(r,i){if(r&1&&ql(Oe,7),r&2){let d;lo(d=uo())&&(i.formScheduling=d.first);}},standalone:false,decls:10,vars:6,consts:[["formScheduling","ngForm"],[1,"po-row"],["name","patient","p-label","Paciente","p-placeholder","Nome do paciente","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","doctor","p-label","M\xE9dico","p-placeholder","Nome do m\xE9dico","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","specialty","p-label","Especialidade","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","appointment","p-clean","","p-label","Data e Hora da Consulta","p-min-time","08:00","p-max-time","18:00","p-minute-interval","15","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","confirmButton","p-label","Agendar Consulta",1,"po-md-3","po-offset-md-9","po-offset-lg-9",3,"p-click","p-disabled"]],template:function(r,i){if(r&1){let d=wx();Sl(0,"form",null,0)(2,"div",1)(3,"po-input",2),ww("ngModelChange",function(o){return Ky(d),nN(i.patient,o)||(i.patient=o),Xy(o)}),og(),e0(),Sl(4,"po-input",3),ww("ngModelChange",function(o){return Ky(d),nN(i.doctor,o)||(i.doctor=o),Xy(o)}),og(),e0(),og(),Sl(5,"div",1)(6,"po-select",4),ww("ngModelChange",function(o){return Ky(d),nN(i.specialty,o)||(i.specialty=o),Xy(o)}),og(),e0(),Sl(7,"po-datetimepicker",5),ww("ngModelChange",function(o){return Ky(d),nN(i.appointment,o)||(i.appointment=o),Xy(o)}),og(),e0(),og(),Sl(8,"div",1)(9,"po-button",6),ft("p-click",function(){return i.confirm()}),og()()();}if(r&2){let d=Nx(1);Lp(3),Ew$1("ngModel",i.patient),n0(),Lp(),Ew$1("ngModel",i.doctor),n0(),Lp(2),Ew$1("ngModel",i.specialty),nw("p-options",i.specialtyOptions),n0(),Lp(),Ew$1("ngModel",i.appointment),n0(),Lp(2),nw("p-disabled",d.invalid);}},dependencies:[Z9,G9,q9,_k,mk,Qt,Ew,L3,Hhe],encapsulation:2,changeDetection:1})}return l})();var We=l=>({"docs-sample-code-tabs":l}),fe=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-datetimepicker-scheduling-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Datetimepicker - Scheduling"),og(),Sl(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-datetimepicker-scheduling/sample-po-datetimepicker-scheduling.component.html"),og(),Sl(13,"pre",7),eN(14,`<form #formScheduling="ngForm">
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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-datetimepicker-scheduling/sample-po-datetimepicker-scheduling.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { UntypedFormControl } from '@angular/forms';
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
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-datetimepicker-scheduling"),og(),Wl(23,"hr")),r&2&&(Lp(5),$x("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,We,i.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,be],encapsulation:2})}return l})();var xe=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-datetimepicker-doc"]],standalone:false,decls:1169,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["href","/documentation/po-i18n"],["pan","",1,"docs-api-property-type","Date"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-helper"],["pan","",1,"docs-api-property-type","PoTimerFormat"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"]],template:function(r,i){r&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),eN(3,"import { PoFieldModule } from '@po-ui/ng-components';"),og()(),Sl(4,"div",2)(5,"p"),eN(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),og(),Sl(7,"blockquote")(8,"p"),eN(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),Sl(10,"code"),eN(11,"FormsModule"),og(),eN(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Sl(13,"code"),eN(14,"ReactiveFormsModule"),og(),eN(15,", ambos nativos do Angular."),og()()(),Sl(16,"h3",3),eN(17,"Componente"),og(),Sl(18,"h4",4)(19,"code",5),eN(20,"PoDatetimepickerComponent"),og()(),Sl(21,"div",2)(22,"p"),eN(23,"O "),Sl(24,"code"),eN(25,"po-datetimepicker"),og(),eN(26,` \xE9 um componente para manipula\xE7\xE3o de data e hora, permitindo a digita\xE7\xE3o e/ou sele\xE7\xE3o
por meio de um calend\xE1rio integrado com um painel de hor\xE1rios.`),og(),Sl(27,"p"),eN(28,`O formato de exibi\xE7\xE3o da data \xE9 determinado automaticamente pelo locale configurado, podendo ser alterado
pela propriedade `),Sl(29,"code"),eN(30,"p-format-date"),og(),eN(31,". O formato de hora pode ser 24h ou 12h (AM/PM), configur\xE1vel via "),Sl(32,"code"),eN(33,"p-format-time"),og(),eN(34,"."),og(),Sl(35,"p"),eN(36,`O idioma padr\xE3o do calend\xE1rio ser\xE1 exibido de acordo com o navegador, caso tenha necessidade de alterar
use a propriedade `),Sl(37,"code"),eN(38,"p-locale"),og(),eN(39,"."),og(),Sl(40,"p"),eN(41,"O componente aceita os seguintes formatos de entrada:"),og(),Sl(42,"ul")(43,"li"),eN(44,"ISO 8601 com timezone: "),Sl(45,"code"),eN(46,"'2026-05-12T14:30:00-03:00'"),og()(),Sl(47,"li"),eN(48,"ISO 8601 UTC: "),Sl(49,"code"),eN(50,"'2026-05-12T14:30:00Z'"),og()(),Sl(51,"li"),eN(52,"ISO 8601 sem timezone: "),Sl(53,"code"),eN(54,"'2026-05-12T14:30:00'"),og()(),Sl(55,"li"),eN(56,"ISO 8601 apenas data: "),Sl(57,"code"),eN(58,"'2026-05-12'"),og()(),Sl(59,"li"),eN(60,"JavaScript Date Object: "),Sl(61,"code"),eN(62,"new Date(2026, 4, 12, 14, 30)"),og()()(),Sl(63,"p"),eN(64,"O formato de sa\xEDda do "),Sl(65,"em"),eN(66,"model"),og(),eN(67," \xE9 sempre ISO 8601 com timezone local: "),Sl(68,"code"),eN(69,"'yyyy-mm-ddTHH:mm+/-HH:mm'"),og(),eN(70,`
(ou `),Sl(71,"code"),eN(72,"'yyyy-mm-ddTHH:mm:ss+/-HH:mm'"),og(),eN(73," quando "),Sl(74,"code"),eN(75,"p-show-seconds"),og(),eN(76," est\xE1 ativo)."),og(),Sl(77,"p")(78,"strong"),eN(79,"Importante:"),og()(),Sl(80,"ul")(81,"li"),eN(82,"O valor emitido no model inclui o offset do timezone local do navegador."),og(),Sl(83,"li"),eN(84,"Ao receber um valor com timezone, o componente converte automaticamente para hor\xE1rio local."),og(),Sl(85,"li"),eN(86,"Caso a data/hora esteja inv\xE1lida, o "),Sl(87,"code"),eN(88,"model"),og(),eN(89," receber\xE1 a mensagem de erro localizada."),og(),Sl(90,"li"),eN(91,"Caso o "),Sl(92,"code"),eN(93,"input"),og(),eN(94," esteja passando um "),Sl(95,"code"),eN(96,"[(ngModel)]"),og(),eN(97,", mas n\xE3o tenha um "),Sl(98,"code"),eN(99,"name"),og(),eN(100,`, ent\xE3o ir\xE1 ocorrer um erro
do pr\xF3prio Angular (`),Sl(101,"code"),eN(102,'[ngModelOptions]="{standalone: true}"'),og(),eN(103,")."),og()(),Sl(104,"p"),eN(105,"Exemplo:"),og(),Sl(106,"pre")(107,"code"),eN(108,`<po-datetimepicker
  [(ngModel)]="agendamento"
  [ngModelOptions]="{standalone: true}"
</po-datetimepicker>
`),og()(),Sl(109,"blockquote")(110,"p"),eN(111,"N\xE3o esque\xE7a de importar o "),Sl(112,"code"),eN(113,"FormsModule"),og(),eN(114," em seu m\xF3dulo, tal como para utilizar o "),Sl(115,"code"),eN(116,"input default"),og(),eN(117,"."),og()(),Sl(118,"h4"),eN(119,"Tokens customiz\xE1veis"),og(),Sl(120,"p"),eN(121,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS): "),Wl(122,"br"),eN(123,`
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),Sl(124,"code"),eN(125,".po-input"),og()(),Sl(126,"blockquote")(127,"p"),eN(128,"Para maiores informa\xE7\xF5es, acesse o guia "),Sl(129,"a",6),eN(130,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),eN(131,"."),og()(),Sl(132,"table")(133,"thead")(134,"tr")(135,"th"),eN(136,"Propriedade"),og(),Sl(137,"th"),eN(138,"Descri\xE7\xE3o"),og(),Sl(139,"th"),eN(140,"Valor Padr\xE3o"),og()()(),Sl(141,"tbody")(142,"tr")(143,"td")(144,"strong"),eN(145,"Default Values"),og()(),Wl(146,"td")(147,"td"),og(),Sl(148,"tr")(149,"td")(150,"code"),eN(151,"--font-family"),og()(),Sl(152,"td"),eN(153,"Fam\xEDlia tipogr\xE1fica usada"),og(),Sl(154,"td")(155,"code"),eN(156,"var(--font-family-theme)"),og()()(),Sl(157,"tr")(158,"td")(159,"code"),eN(160,"--font-size"),og()(),Sl(161,"td"),eN(162,"Tamanho da fonte"),og(),Sl(163,"td")(164,"code"),eN(165,"var(--font-size-default)"),og()()(),Sl(166,"tr")(167,"td")(168,"code"),eN(169,"--text-color-placeholder"),og(),eN(170," \xA0"),og(),Sl(171,"td"),eN(172,"Cor principal do texto do placeholder"),og(),Sl(173,"td")(174,"code"),eN(175,"var(--color-neutral-light-30)"),og()()(),Sl(176,"tr")(177,"td")(178,"code"),eN(179,"--color"),og()(),Sl(180,"td"),eN(181,"Cor principal do datetimepicker"),og(),Sl(182,"td")(183,"code"),eN(184,"var(--color-neutral-dark-70)"),og()()(),Sl(185,"tr")(186,"td")(187,"code"),eN(188,"--background"),og()(),Sl(189,"td"),eN(190,"Cor de background"),og(),Sl(191,"td")(192,"code"),eN(193,"var(--color-neutral-light-05)"),og()()(),Sl(194,"tr")(195,"td")(196,"code"),eN(197,"--padding"),og()(),Sl(198,"td"),eN(199,"Preenchimento"),og(),Sl(200,"td")(201,"code"),eN(202,"0 0.5rem"),og()()(),Sl(203,"tr")(204,"td")(205,"code"),eN(206,"--text-color"),og()(),Sl(207,"td"),eN(208,"Cor do texto"),og(),Sl(209,"td")(210,"code"),eN(211,"var(--color-neutral-dark-90)"),og()()(),Sl(212,"tr")(213,"td")(214,"code"),eN(215,"--field-container-title-justify"),og()(),Sl(216,"td"),eN(217,"Alinhamento horizontal do t\xEDtulo ("),Sl(218,"code"),eN(219,"justify-content"),og(),eN(220,")"),og(),Sl(221,"td")(222,"code"),eN(223,"space-between"),og()()(),Sl(224,"tr")(225,"td")(226,"code"),eN(227,"--field-container-title-flex"),og()(),Sl(228,"td"),eN(229,"Flex do t\xEDtulo ("),Sl(230,"code"),eN(231,"flex"),og(),eN(232,")"),og(),Sl(233,"td")(234,"code"),eN(235,"1 auto"),og()()(),Sl(236,"tr")(237,"td")(238,"strong"),eN(239,"Hover"),og()(),Wl(240,"td")(241,"td"),og(),Sl(242,"tr")(243,"td")(244,"code"),eN(245,"--color-hover"),og()(),Sl(246,"td"),eN(247,"Cor principal no estado hover"),og(),Sl(248,"td")(249,"code"),eN(250,"var(--color-brand-01-dark)"),og()()(),Sl(251,"tr")(252,"td")(253,"code"),eN(254,"--background-hover"),og()(),Sl(255,"td"),eN(256,"Cor de background no estado hover"),og(),Sl(257,"td")(258,"code"),eN(259,"var(--color-brand-01-lightest)"),og()()(),Sl(260,"tr")(261,"td")(262,"strong"),eN(263,"Focused"),og()(),Wl(264,"td")(265,"td"),og(),Sl(266,"tr")(267,"td")(268,"code"),eN(269,"--color-focused"),og()(),Sl(270,"td"),eN(271,"Cor principal no estado de focus"),og(),Sl(272,"td")(273,"code"),eN(274,"var(--color-action-default)"),og()()(),Sl(275,"tr")(276,"td")(277,"code"),eN(278,"--outline-color-focused"),og()(),Sl(279,"td"),eN(280,"Cor do outline do estado de focus"),og(),Sl(281,"td")(282,"code"),eN(283,"var(--color-action-focus)"),og()()(),Sl(284,"tr")(285,"td")(286,"strong"),eN(287,"Disabled"),og()(),Wl(288,"td")(289,"td"),og(),Sl(290,"tr")(291,"td")(292,"code"),eN(293,"--color-disabled"),og()(),Sl(294,"td"),eN(295,"Cor principal no estado disabled"),og(),Sl(296,"td")(297,"code"),eN(298,"var(--color-neutral-light-30)"),og()()(),Sl(299,"tr")(300,"td")(301,"code"),eN(302,"--background-disabled"),og()(),Sl(303,"td"),eN(304,"Cor de background no estado disabled \xA0"),og(),Sl(305,"td")(306,"code"),eN(307,"var(--color-neutral-light-20)"),og()()(),Sl(308,"tr")(309,"td")(310,"code"),eN(311,"--text-color-disabled"),og()(),Sl(312,"td"),eN(313,"Cor do texto no estado disabled"),og(),Sl(314,"td")(315,"code"),eN(316,"var(--color-neutral-dark-70)"),og()()()()()(),Sl(317,"div",7)(318,"h4",8),eN(319,"Seletor"),og(),Sl(320,"pre",9),eN(321,`<po-datetimepicker
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
`),og()(),Sl(322,"h4",10),eN(323,"Propriedades"),og(),Sl(324,"table",11)(325,"tr",12)(326,"th",13),eN(327,"Nome"),og(),Sl(328,"th",13),eN(329,"Tipo"),og(),Sl(330,"th",13),eN(331,"Padr\xE3o"),og(),Sl(332,"th",13),eN(333,"Descri\xE7\xE3o"),og()(),Sl(334,"tr",14)(335,"td",15)(336,"div",16)(337,"span",17),eN(338," p-append-in-body"),Wl(339,"br"),og()()(),Sl(340,"td",18)(341,"code",19),eN(342,"boolean"),og()(),Sl(343,"td",20)(344,"p")(345,"code"),eN(346,"false"),og()()(),Sl(347,"td",21)(348,"em")(349,"strong"),eN(350,"(opcional)"),og()(),Sl(351,"p"),eN(352,"Define que o "),Sl(353,"code"),eN(354,"calendar"),og(),eN(355," e/ou tooltip ser\xE3o inclu\xEDdos no body da p\xE1gina e n\xE3o dentro do componente."),og()()(),Sl(356,"tr",14)(357,"td",15)(358,"div",16)(359,"span",17),eN(360," p-auto-focus"),Wl(361,"br"),og()()(),Sl(362,"td",18)(363,"code",19),eN(364,"boolean"),og()(),Sl(365,"td",20)(366,"p")(367,"code"),eN(368,"false"),og()()(),Sl(369,"td",21)(370,"em")(371,"strong"),eN(372,"(opcional)"),og()(),Sl(373,"p"),eN(374,"Aplica foco no elemento ao ser iniciado."),og()()(),Sl(375,"tr",14)(376,"td",15)(377,"div",16)(378,"span",17),eN(379," p-clean"),Wl(380,"br"),og()()(),Sl(381,"td",18)(382,"code",19),eN(383,"boolean "),og(),Sl(384,"code",22),eN(385," string"),og()(),Sl(386,"td",20)(387,"p")(388,"code"),eN(389,"false"),og()()(),Sl(390,"td",21)(391,"em")(392,"strong"),eN(393,"(opcional)"),og()(),Sl(394,"p"),eN(395,"Habilita a\xE7\xE3o para limpar o campo."),og()()(),Sl(396,"tr",14)(397,"td",15)(398,"div",16)(399,"span",17),eN(400," p-compact-label"),Wl(401,"br"),og()()(),Sl(402,"td",18)(403,"code",19),eN(404,"boolean"),og()(),Sl(405,"td",20)(406,"p")(407,"code"),eN(408,"false"),og()()(),Sl(409,"td",21)(410,"em")(411,"strong"),eN(412,"(opcional)"),og()(),Sl(413,"p"),eN(414,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),og()()(),Sl(415,"tr",14)(416,"td",15)(417,"div",16)(418,"span",17),eN(419," p-format-date"),Wl(420,"br"),og()()(),Sl(421,"td",18)(422,"code",22),eN(423,"string"),og()(),Sl(424,"td",20)(425,"p"),eN(426,"Determinado pelo locale"),og()(),Sl(427,"td",21)(428,"em")(429,"strong"),eN(430,"(opcional)"),og()(),Sl(431,"p"),eN(432,"Define o formato de exibi\xE7\xE3o da data."),og(),Sl(433,"p"),eN(434,"Valores v\xE1lidos:"),og(),Sl(435,"ul")(436,"li")(437,"code"),eN(438,"dd/mm/yyyy"),og()(),Sl(439,"li")(440,"code"),eN(441,"mm/dd/yyyy"),og()(),Sl(442,"li")(443,"code"),eN(444,"yyyy/mm/dd"),og()()(),Sl(445,"p"),eN(446,"Quando n\xE3o informado, o formato ser\xE1 determinado automaticamente pelo locale:"),og(),Sl(447,"ul")(448,"li")(449,"code"),eN(450,"en"),og(),eN(451," \u2192 "),Sl(452,"code"),eN(453,"mm/dd/yyyy"),og()(),Sl(454,"li")(455,"code"),eN(456,"pt"),og(),eN(457,", "),Sl(458,"code"),eN(459,"es"),og(),eN(460,", "),Sl(461,"code"),eN(462,"ru"),og(),eN(463," \u2192 "),Sl(464,"code"),eN(465,"dd/mm/yyyy"),og()()()()(),Sl(466,"tr",14)(467,"td",15)(468,"div",16)(469,"span",17),eN(470," p-disabled"),Wl(471,"br"),og()()(),Sl(472,"td",18)(473,"code",19),eN(474,"boolean "),og(),Sl(475,"code",22),eN(476," string"),og()(),Sl(477,"td",20)(478,"p")(479,"code"),eN(480,"false"),og()()(),Sl(481,"td",21)(482,"em")(483,"strong"),eN(484,"(opcional)"),og()(),Sl(485,"p"),eN(486,"Desabilita o campo."),og()()(),Sl(487,"tr",14)(488,"td",15)(489,"div",16)(490,"span",17),eN(491," p-error-limit"),Wl(492,"br"),og()()(),Sl(493,"td",18)(494,"code",19),eN(495,"boolean"),og()(),Sl(496,"td",20)(497,"p")(498,"code"),eN(499,"false"),og()()(),Sl(500,"td",21)(501,"em")(502,"strong"),eN(503,"(opcional)"),og()(),Sl(504,"p"),eN(505,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),og()()(),Sl(506,"tr",14)(507,"td",15)(508,"div",16)(509,"span",17),eN(510," p-error-pattern"),Wl(511,"br"),og()()(),Sl(512,"td",18)(513,"code",22),eN(514,"string"),og()(),Sl(515,"td",20),eN(516,"-"),og(),Sl(517,"td",21)(518,"em")(519,"strong"),eN(520,"(opcional)"),og()(),Sl(521,"p"),eN(522,"Mensagem apresentada quando a data/hora for inv\xE1lida ou fora do per\xEDodo."),og()()(),Sl(523,"tr",14)(524,"td",15)(525,"div",16)(526,"span",17),eN(527," p-help"),Wl(528,"br"),og()()(),Sl(529,"td",18)(530,"code",22),eN(531,"string"),og()(),Sl(532,"td",20),eN(533,"-"),og(),Sl(534,"td",21)(535,"em")(536,"strong"),eN(537,"(opcional)"),og()(),Sl(538,"p"),eN(539,"Texto de apoio do campo."),og()()(),Sl(540,"tr",14)(541,"td",15)(542,"div",23)(543,"span",24),eN(544," (p-keydown)"),Wl(545,"br"),og()()(),Sl(546,"td",18)(547,"code",25),eN(548,"EventEmitter"),og()(),Sl(549,"td",20),eN(550,"-"),og(),Sl(551,"td",21)(552,"em")(553,"strong"),eN(554,"(opcional)"),og()(),Sl(555,"p"),eN(556,"Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente."),og()()(),Sl(557,"tr",14)(558,"td",15)(559,"div",16)(560,"span",17),eN(561," p-label"),Wl(562,"br"),og()()(),Sl(563,"td",18)(564,"code",22),eN(565,"string"),og()(),Sl(566,"td",20),eN(567,"-"),og(),Sl(568,"td",21)(569,"em")(570,"strong"),eN(571,"(opcional)"),og()(),Sl(572,"p"),eN(573,"R\xF3tulo do campo."),og()()(),Sl(574,"tr",14)(575,"td",15)(576,"div",16)(577,"span",17),eN(578," p-label-text-wrap"),Wl(579,"br"),og()()(),Sl(580,"td",18)(581,"code",19),eN(582,"boolean"),og()(),Sl(583,"td",20)(584,"p")(585,"code"),eN(586,"false"),og()()(),Sl(587,"td",21)(588,"em")(589,"strong"),eN(590,"(opcional)"),og()(),Sl(591,"p"),eN(592,"Habilita a quebra autom\xE1tica do texto da propriedade "),Sl(593,"code"),eN(594,"p-label"),og(),eN(595,"."),og()()(),Sl(596,"tr",14)(597,"td",15)(598,"div",16)(599,"span",17),eN(600," p-loading"),Wl(601,"br"),og()()(),Sl(602,"td",18)(603,"code",19),eN(604,"boolean "),og(),Sl(605,"code",22),eN(606," string"),og()(),Sl(607,"td",20)(608,"p")(609,"code"),eN(610,"false"),og()()(),Sl(611,"td",21)(612,"em")(613,"strong"),eN(614,"(opcional)"),og()(),Sl(615,"p"),eN(616,"Exibe um \xEDcone de carregamento no lado direito do campo."),og()()(),Sl(617,"tr",14)(618,"td",15)(619,"div",16)(620,"span",17),eN(621," p-locale"),Wl(622,"br"),og()()(),Sl(623,"td",18)(624,"code",22),eN(625,"string"),og()(),Sl(626,"td",20),eN(627,"-"),og(),Sl(628,"td",21)(629,"em")(630,"strong"),eN(631,"(opcional)"),og()(),Sl(632,"p"),eN(633,"Idioma do componente."),og(),Sl(634,"blockquote")(635,"p"),eN(636,"O locale padr\xE3o ser\xE1 recuperado com base no "),Sl(637,"a",26)(638,"code"),eN(639,"PoI18nService"),og()(),eN(640," ou "),Sl(641,"em"),eN(642,"browser"),og(),eN(643,"."),og()()()(),Sl(644,"tr",14)(645,"td",15)(646,"div",16)(647,"span",17),eN(648," p-max-date"),Wl(649,"br"),og()()(),Sl(650,"td",18)(651,"code",22),eN(652,"string "),og(),Sl(653,"code",27),eN(654," Date"),og()(),Sl(655,"td",20),eN(656,"-"),og(),Sl(657,"td",21)(658,"em")(659,"strong"),eN(660,"(opcional)"),og()(),Sl(661,"p"),eN(662,"Define uma data m\xE1xima para o "),Sl(663,"code"),eN(664,"po-datetimepicker"),og(),eN(665,`.
Datas posteriores ao limite ficam desabilitadas no calend\xE1rio.`),og(),Sl(666,"p"),eN(667,"Aceita os formatos:"),og(),Sl(668,"ul")(669,"li")(670,"code"),eN(671,"Date"),og(),eN(672," object: "),Sl(673,"code"),eN(674,"new Date(2026, 4, 31)"),og()(),Sl(675,"li"),eN(676,"ISO string: "),Sl(677,"code"),eN(678,"'2026-05-31'"),og()(),Sl(679,"li"),eN(680,"ISO com hora: "),Sl(681,"code"),eN(682,"'2026-05-31T23:59:59-03:00'"),og()()()()(),Sl(683,"tr",14)(684,"td",15)(685,"div",16)(686,"span",17),eN(687," p-max-time"),Wl(688,"br"),og()()(),Sl(689,"td",18)(690,"code",22),eN(691,"string"),og()(),Sl(692,"td",20),eN(693,"-"),og(),Sl(694,"td",21)(695,"em")(696,"strong"),eN(697,"(opcional)"),og()(),Sl(698,"p"),eN(699,`Define o hor\xE1rio m\xE1ximo permitido para sele\xE7\xE3o no timer.
Hor\xE1rios posteriores ao limite ficam desabilitados.`),og(),Sl(700,"p"),eN(701,"Formato aceito: "),Sl(702,"code"),eN(703,"HH:mm"),og(),eN(704," ou "),Sl(705,"code"),eN(706,"HH:mm:ss"),og(),eN(707,"."),og()()(),Sl(708,"tr",14)(709,"td",15)(710,"div",16)(711,"span",17),eN(712," p-min-date"),Wl(713,"br"),og()()(),Sl(714,"td",18)(715,"code",22),eN(716,"string "),og(),Sl(717,"code",27),eN(718," Date"),og()(),Sl(719,"td",20),eN(720,"-"),og(),Sl(721,"td",21)(722,"em")(723,"strong"),eN(724,"(opcional)"),og()(),Sl(725,"p"),eN(726,"Define uma data m\xEDnima para o "),Sl(727,"code"),eN(728,"po-datetimepicker"),og(),eN(729,`.
Datas anteriores ao limite ficam desabilitadas no calend\xE1rio.`),og(),Sl(730,"p"),eN(731,"Aceita os formatos:"),og(),Sl(732,"ul")(733,"li")(734,"code"),eN(735,"Date"),og(),eN(736," object: "),Sl(737,"code"),eN(738,"new Date(2026, 0, 1)"),og()(),Sl(739,"li"),eN(740,"ISO string: "),Sl(741,"code"),eN(742,"'2026-01-01'"),og()(),Sl(743,"li"),eN(744,"ISO com hora: "),Sl(745,"code"),eN(746,"'2026-01-01T00:00:00-03:00'"),og()()()()(),Sl(747,"tr",14)(748,"td",15)(749,"div",16)(750,"span",17),eN(751," p-min-time"),Wl(752,"br"),og()()(),Sl(753,"td",18)(754,"code",22),eN(755,"string"),og()(),Sl(756,"td",20),eN(757,"-"),og(),Sl(758,"td",21)(759,"em")(760,"strong"),eN(761,"(opcional)"),og()(),Sl(762,"p"),eN(763,`Define o hor\xE1rio m\xEDnimo permitido para sele\xE7\xE3o no timer.
Hor\xE1rios anteriores ao limite ficam desabilitados.`),og(),Sl(764,"p"),eN(765,"Formato aceito: "),Sl(766,"code"),eN(767,"HH:mm"),og(),eN(768," ou "),Sl(769,"code"),eN(770,"HH:mm:ss"),og(),eN(771,"."),og()()(),Sl(772,"tr",14)(773,"td",15)(774,"div",16)(775,"span",17),eN(776," p-minute-interval"),Wl(777,"br"),og()()(),Sl(778,"td",18)(779,"code",28),eN(780,"number"),og()(),Sl(781,"td",20)(782,"p")(783,"code"),eN(784,"5"),og()()(),Sl(785,"td",21)(786,"em")(787,"strong"),eN(788,"(opcional)"),og()(),Sl(789,"p"),eN(790,"Define o intervalo entre os minutos exibidos no painel do timer."),og()()(),Sl(791,"tr",14)(792,"td",15)(793,"div",16)(794,"span",17),eN(795," name"),Wl(796,"br"),og()()(),Sl(797,"td",18)(798,"code",22),eN(799,"string"),og()(),Sl(800,"td",20),eN(801,"-"),og(),Sl(802,"td",21)(803,"em")(804,"strong"),eN(805,"(opcional)"),og()(),Sl(806,"p"),eN(807,"Nome do componente."),og()()(),Sl(808,"tr",14)(809,"td",15)(810,"div",16)(811,"span",17),eN(812," p-no-autocomplete"),Wl(813,"br"),og()()(),Sl(814,"td",18)(815,"code",19),eN(816,"boolean "),og(),Sl(817,"code",22),eN(818," string"),og()(),Sl(819,"td",20)(820,"p")(821,"code"),eN(822,"false"),og()()(),Sl(823,"td",21)(824,"em")(825,"strong"),eN(826,"(opcional)"),og()(),Sl(827,"p"),eN(828,"Define a propriedade nativa "),Sl(829,"code"),eN(830,"autocomplete"),og(),eN(831," do campo como "),Sl(832,"code"),eN(833,"off"),og(),eN(834,"."),og()()(),Sl(835,"tr",14)(836,"td",15)(837,"div",23)(838,"span",24),eN(839," (p-blur)"),Wl(840,"br"),og()()(),Sl(841,"td",18)(842,"code",25),eN(843,"EventEmitter"),og()(),Sl(844,"td",20),eN(845,"-"),og(),Sl(846,"td",21)(847,"em")(848,"strong"),eN(849,"(opcional)"),og()(),Sl(850,"p"),eN(851,"Evento disparado ao sair do campo (blur)."),og()()(),Sl(852,"tr",14)(853,"td",15)(854,"div",23)(855,"span",24),eN(856," (p-change)"),Wl(857,"br"),og()()(),Sl(858,"td",18)(859,"code",25),eN(860,"EventEmitter"),og()(),Sl(861,"td",20),eN(862,"-"),og(),Sl(863,"td",21)(864,"em")(865,"strong"),eN(866,"(opcional)"),og()(),Sl(867,"p"),eN(868,"Evento disparado ao alterar valor do campo."),og()()(),Sl(869,"tr",14)(870,"td",15)(871,"div",16)(872,"span",17),eN(873," p-optional"),Wl(874,"br"),og()()(),Sl(875,"td",18)(876,"code",19),eN(877,"boolean"),og()(),Sl(878,"td",20)(879,"p")(880,"code"),eN(881,"false"),og()()(),Sl(882,"td",21)(883,"em")(884,"strong"),eN(885,"(opcional)"),og()(),Sl(886,"p"),eN(887,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),og()()(),Sl(888,"tr",14)(889,"td",15)(890,"div",16)(891,"span",17),eN(892," p-placeholder"),Wl(893,"br"),og()()(),Sl(894,"td",18)(895,"code",22),eN(896,"string"),og()(),Sl(897,"td",20),eN(898,"-"),og(),Sl(899,"td",21)(900,"em")(901,"strong"),eN(902,"(opcional)"),og()(),Sl(903,"p"),eN(904,"Mensagem que aparecer\xE1 enquanto o campo n\xE3o estiver preenchido."),og()()(),Sl(905,"tr",14)(906,"td",15)(907,"div",16)(908,"span",17),eN(909," p-helper"),Wl(910,"br"),og()()(),Sl(911,"td",18)(912,"code",29),eN(913,"PoHelperOptions "),og(),Sl(914,"code",22),eN(915," string"),og()(),Sl(916,"td",20),eN(917,"-"),og(),Sl(918,"td",21)(919,"em")(920,"strong"),eN(921,"(opcional)"),og()(),Sl(922,"p"),eN(923,"Define as op\xE7\xF5es do componente de ajuda (po-helper)."),og(),Sl(924,"blockquote")(925,"p"),eN(926,"Para mais informa\xE7\xF5es acesse: "),Sl(927,"a",30),eN(928,"https://po-ui.io/documentation/po-helper"),og(),eN(929,"."),og()()()(),Sl(930,"tr",14)(931,"td",15)(932,"div",16)(933,"span",17),eN(934," p-readonly"),Wl(935,"br"),og()()(),Sl(936,"td",18)(937,"code",19),eN(938,"boolean "),og(),Sl(939,"code",22),eN(940," string"),og()(),Sl(941,"td",20)(942,"p")(943,"code"),eN(944,"false"),og()()(),Sl(945,"td",21)(946,"em")(947,"strong"),eN(948,"(opcional)"),og()(),Sl(949,"p"),eN(950,"Torna o componente somente leitura."),og()()(),Sl(951,"tr",14)(952,"td",15)(953,"div",16)(954,"span",17),eN(955," p-required"),Wl(956,"br"),og()()(),Sl(957,"td",18)(958,"code",19),eN(959,"boolean "),og(),Sl(960,"code",22),eN(961," string"),og()(),Sl(962,"td",20)(963,"p")(964,"code"),eN(965,"false"),og()()(),Sl(966,"td",21)(967,"em")(968,"strong"),eN(969,"(opcional)"),og()(),Sl(970,"p"),eN(971,"Define que o campo ser\xE1 obrigat\xF3rio."),og()()(),Sl(972,"tr",14)(973,"td",15)(974,"div",16)(975,"span",17),eN(976," p-second-interval"),Wl(977,"br"),og()()(),Sl(978,"td",18)(979,"code",28),eN(980,"number"),og()(),Sl(981,"td",20)(982,"p")(983,"code"),eN(984,"1"),og()()(),Sl(985,"td",21)(986,"em")(987,"strong"),eN(988,"(opcional)"),og()(),Sl(989,"p"),eN(990,`Define o intervalo entre os segundos exibidos no painel do timer.
Utilizado apenas quando `),Sl(991,"code"),eN(992,"p-show-seconds"),og(),eN(993," est\xE1 ativo."),og()()(),Sl(994,"tr",14)(995,"td",15)(996,"div",16)(997,"span",17),eN(998," p-required-field-error-message"),Wl(999,"br"),og()()(),Sl(1e3,"td",18)(1001,"code",19),eN(1002,"boolean"),og()(),Sl(1003,"td",20)(1004,"p")(1005,"code"),eN(1006,"false"),og()()(),Sl(1007,"td",21)(1008,"em")(1009,"strong"),eN(1010,"(opcional)"),og()(),Sl(1011,"p"),eN(1012,"Exibe a mensagem setada na propriedade "),Sl(1013,"code"),eN(1014,"p-error-pattern"),og(),eN(1015," se o campo estiver vazio e for requerido."),og(),Sl(1016,"blockquote")(1017,"p"),eN(1018,"Necess\xE1rio que a propriedade "),Sl(1019,"code"),eN(1020,"p-required"),og(),eN(1021," esteja habilitada."),og()()()(),Sl(1022,"tr",14)(1023,"td",15)(1024,"div",16)(1025,"span",17),eN(1026," p-show-required"),Wl(1027,"br"),og()()(),Sl(1028,"td",18)(1029,"code",19),eN(1030,"boolean"),og()(),Sl(1031,"td",20)(1032,"p")(1033,"code"),eN(1034,"false"),og()()(),Sl(1035,"td",21)(1036,"em")(1037,"strong"),eN(1038,"(opcional)"),og()(),Sl(1039,"p"),eN(1040,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),og()()(),Sl(1041,"tr",14)(1042,"td",15)(1043,"div",16)(1044,"span",17),eN(1045," p-show-seconds"),Wl(1046,"br"),og()()(),Sl(1047,"td",18)(1048,"code",19),eN(1049,"boolean"),og()(),Sl(1050,"td",20)(1051,"p")(1052,"code"),eN(1053,"false"),og()()(),Sl(1054,"td",21)(1055,"em")(1056,"strong"),eN(1057,"(opcional)"),og()(),Sl(1058,"p"),eN(1059,"Exibe a coluna de segundos no painel de sele\xE7\xE3o do timer."),og()()(),Sl(1060,"tr",14)(1061,"td",15)(1062,"div",16)(1063,"span",17),eN(1064," p-size"),Wl(1065,"br"),og()()(),Sl(1066,"td",18)(1067,"code",22),eN(1068,"string"),og()(),Sl(1069,"td",20)(1070,"p")(1071,"code"),eN(1072,"medium"),og()()(),Sl(1073,"td",21)(1074,"em")(1075,"strong"),eN(1076,"(opcional)"),og()(),Sl(1077,"p"),eN(1078,"Define o tamanho do componente:"),og(),Sl(1079,"ul")(1080,"li")(1081,"code"),eN(1082,"small"),og(),eN(1083,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),og(),Sl(1084,"li")(1085,"code"),eN(1086,"medium"),og(),eN(1087,": altura do input como 44px."),og()()()(),Sl(1088,"tr",14)(1089,"td",15)(1090,"div",16)(1091,"span",17),eN(1092," p-format-time"),Wl(1093,"br"),og()()(),Sl(1094,"td",18)(1095,"code",31),eN(1096,"PoTimerFormat"),og()(),Sl(1097,"td",20)(1098,"p"),eN(1099,"Determinado pelo locale"),og()(),Sl(1100,"td",21)(1101,"em")(1102,"strong"),eN(1103,"(opcional)"),og()(),Sl(1104,"p"),eN(1105,"Define o formato de exibi\xE7\xE3o do timer."),og(),Sl(1106,"p"),eN(1107,"Valores v\xE1lidos:"),og(),Sl(1108,"ul")(1109,"li")(1110,"code"),eN(1111,"24"),og(),eN(1112,": formato de 24 horas (padr\xE3o para pt, es, ru)"),og(),Sl(1113,"li")(1114,"code"),eN(1115,"12"),og(),eN(1116,": formato de 12 horas com indicador AM/PM (padr\xE3o para en)"),og()(),Sl(1117,"p"),eN(1118,"Quando n\xE3o informado, o formato ser\xE1 determinado automaticamente pelo locale:"),og(),Sl(1119,"ul")(1120,"li")(1121,"code"),eN(1122,"en"),og(),eN(1123," \u2192 12h (AM/PM)"),og(),Sl(1124,"li")(1125,"code"),eN(1126,"pt"),og(),eN(1127,", "),Sl(1128,"code"),eN(1129,"es"),og(),eN(1130,", "),Sl(1131,"code"),eN(1132,"ru"),og(),eN(1133," \u2192 24h"),og()()()()(),Sl(1134,"h3",10),eN(1135,"M\xE9todos"),og(),Sl(1136,"table",32)(1137,"tr",14)(1138,"th",33)(1139,"div",16)(1140,"h4")(1141,"span",17),eN(1142," showAdditionalHelp "),og()()()()(),Sl(1143,"tr",21)(1144,"td",21)(1145,"p"),eN(1146,"M\xE9todo que exibe "),Sl(1147,"code"),eN(1148,"p-helper"),og(),eN(1149," ou executa a a\xE7\xE3o definida em "),Sl(1150,"code"),eN(1151,"p-helper{eventOnClick}"),og(),eN(1152,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Sl(1153,"code"),eN(1154,"p-keydown"),og(),eN(1155,"."),og(),Sl(1156,"blockquote")(1157,"p"),eN(1158,"Exibe ou oculta o conte\xFAdo do componente "),Sl(1159,"code"),eN(1160,"po-helper"),og(),eN(1161," quando o componente estiver com foco."),og()(),Sl(1162,"pre")(1163,"code"),eN(1164,`// Exemplo com p-label e p-helper
<po-datetimepicker
 #datetimepicker
 ...
 p-label="Label"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, datetimepicker)"
></po-datetimepicker>
`),og()(),Sl(1165,"pre")(1166,"code"),eN(1167,`onKeyDown(event: KeyboardEvent, inp: PoDatetimepickerComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),og()()()()(),Wl(1168,"br"),og());},dependencies:[Ka],encapsulation:2})}return l})();var Ce=(()=>{class l{route;router;sub;hidePoWebSample=true;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(p,r){this.route=p,this.router=r;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let r=p.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:"merge"}),this.activeTab=p;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(r){return new(r||l)(w(Xn),w(En))};static \u0275cmp=Un({type:l,selectors:[["ng-component"]],standalone:false,decls:9,vars:4,consts:[["p-title","Datetimepicker",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,i){r&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return i.changeTab("doc")}),Wl(3,"sample-po-datetimepicker-doc"),og(),Sl(4,"po-tab",3),ft("p-click",function(){return i.changeTab("web")}),Wl(5,"sample-po-datetimepicker-basic-view")(6,"sample-po-datetimepicker-labs-view")(7,"sample-po-datetimepicker-12h-seconds-view")(8,"sample-po-datetimepicker-scheduling-view"),og()()()),r&2&&(nw("p-actions",i.actions),Lp(2),nw("p-active",i.activeTab==="doc"),Lp(2),nw("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[rNe,Bme,qme,ce,Se,he,fe,xe],encapsulation:2})}return l})();var Fe=[{path:"",component:Ce}],ve=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275mod=fe$1({type:l});static \u0275inj=ue({imports:[hL.forChild(Fe),hL]})}return l})();var Et=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275mod=fe$1({type:l});static \u0275inj=ue({imports:[sr,ve]})}return l})();export{Et as DocPoDatetimepickerModule};