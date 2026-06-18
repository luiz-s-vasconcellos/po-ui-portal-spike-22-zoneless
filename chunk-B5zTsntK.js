import {f as fe$1,u as ue,s as sr,a as uL,C,c3 as Xn,E as En,U as Un,d6 as Z0,b as f,c5 as Vde,aW as Yp,cW as Cue,J as zl,an as DO,aH as Ka,b8 as qme,b9 as Yme,H as Il,q as Qx,R as og,a1 as ft,A as Lp,ar as Ux,au as dg,T as nw,bs as uN,aX as G9,aF as $9,aY as z9,aG as mk,aZ as hk,b0 as Qt,b1 as mv,c4 as C3,b4 as F3,cp as Hhe,c8 as Dde,c9 as Yhe,aB as Dx,aM as ww,aN as QA,aO as Ew,aP as e0,bD as Ede,aJ as qhe,bd as Ax,av as Gl,aw as co,ax as lo,a3 as cNe,aD as Xy,aT as eN,aE as Qy}from'./main-FCMDZGSJ.js';var se=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-timepicker-basic"]],standalone:false,decls:1,vars:0,consts:[["name","timepicker","p-label","PO Timepicker"]],template:function(r,i){r&1&&zl(0,"po-timepicker",0);},dependencies:[Cue],encapsulation:2,changeDetection:1})}return l})();var Te=l=>({"docs-sample-code-tabs":l}),ce=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-timepicker-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Timepicker Basic"),og(),Il(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-timepicker-basic/sample-po-timepicker-basic.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-timepicker name="timepicker" p-label="PO Timepicker"> </po-timepicker>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-timepicker-basic/sample-po-timepicker-basic.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-timepicker-basic',
  templateUrl: './sample-po-timepicker-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTimepickerBasicComponent {}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-timepicker-basic"),og(),zl(23,"hr")),r&2&&(Lp(5),Ux("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,Te,i.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,se],encapsulation:2})}return l})();var ge=(()=>{class l{timepicker;event;errorPattern;format;help;helper;modelFormat;label;locale;maxTime;minTime;minuteInterval;secondInterval;placeholder;properties;size;modelFormatOptions=[{label:"HourMinute",value:Z0.HourMinute},{label:"HourMinuteSecond",value:Z0.HourMinuteSecond}];propertiesOptions=[{value:"clean",label:"Clean"},{value:"disabled",label:"Disabled"},{value:"noAutocomplete",label:"No Autocomplete"},{value:"optional",label:"Optional"},{value:"readonly",label:"Read Only"},{value:"required",label:"Required"},{value:"requiredFieldErrorMessage",label:"Required Field Error Message"},{value:"showRequired",label:"Show Required"},{value:"showSeconds",label:"Show Seconds"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"},{value:"loading",label:"Loading"},{value:"compactLabel",label:"Compact Label"},{value:"appendInBody",label:"Append In Body"}];formatOptions=[{label:"24",value:"24"},{label:"12",value:"12"}];localeOptions=[{label:"pt",value:"pt"},{label:"en",value:"en"},{label:"es",value:"es"},{label:"ru",value:"ru"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore();}changeEvent(d){this.event=d;}restore(){this.timepicker=void 0,this.event=void 0,this.errorPattern=void 0,this.format=void 0,this.help=void 0,this.helper=void 0,this.modelFormat=void 0,this.label=void 0,this.locale=void 0,this.maxTime=void 0,this.minTime=void 0,this.minuteInterval=void 0,this.secondInterval=void 0,this.placeholder=void 0,this.properties=[],this.size="medium";}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-timepicker-labs"]],standalone:false,decls:24,vars:49,consts:[["f","ngForm"],["name","timepicker",1,"po-sm-12",3,"ngModelChange","p-blur","p-change","p-keydown","ngModel","p-clean","p-disabled","p-error-pattern","p-format","p-helper","p-help","p-model-format","p-label","p-locale","p-max-time","p-min-time","p-minute-interval","p-second-interval","p-no-autocomplete","p-optional","p-placeholder","p-readonly","p-required","p-required-field-error-message","p-show-required","p-show-seconds","p-label-text-wrap","p-loading","p-compact-label","p-append-in-body","p-error-limit","p-size"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helper","p-clean","","p-label","Helper",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","errorPattern","p-clean","","p-label","Error Pattern",1,"po-md-6",3,"ngModelChange","ngModel"],["name","minTime","p-clean","","p-label","Min Time",1,"po-md-6",3,"ngModelChange","ngModel"],["name","maxTime","p-clean","","p-label","Max Time",1,"po-md-6",3,"ngModelChange","ngModel"],["name","minuteInterval","p-clean","","p-label","Minute Interval",1,"po-md-6",3,"ngModelChange","ngModel"],["name","secondInterval","p-clean","","p-label","Second Interval",1,"po-md-6",3,"ngModelChange","ngModel"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","locale","p-columns","4","p-label","Locale",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","format","p-columns","4","p-label","Format",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","modelFormat","p-columns","4","p-label","Model Format",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","restore","p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(r,i){if(r&1){let s=Dx();Il(0,"po-timepicker",1),ww("ngModelChange",function(o){return Xy(s),eN(i.timepicker,o)||(i.timepicker=o),Qy(o)}),ft("p-blur",function(){return i.changeEvent("p-blur")})("p-change",function(){return i.changeEvent("p-change")})("p-keydown",function(){return i.changeEvent("p-keydown")}),og(),QA(),zl(1,"po-divider"),Il(2,"div",2),zl(3,"po-info",3)(4,"po-info",4),og(),zl(5,"po-divider"),Il(6,"form",null,0)(8,"po-input",5),ww("ngModelChange",function(o){return Xy(s),eN(i.label,o)||(i.label=o),Qy(o)}),og(),QA(),Il(9,"po-input",6),ww("ngModelChange",function(o){return Xy(s),eN(i.help,o)||(i.help=o),Qy(o)}),og(),QA(),Il(10,"po-input",7),ww("ngModelChange",function(o){return Xy(s),eN(i.helper,o)||(i.helper=o),Qy(o)}),og(),QA(),Il(11,"po-input",8),ww("ngModelChange",function(o){return Xy(s),eN(i.placeholder,o)||(i.placeholder=o),Qy(o)}),og(),QA(),Il(12,"po-input",9),ww("ngModelChange",function(o){return Xy(s),eN(i.errorPattern,o)||(i.errorPattern=o),Qy(o)}),og(),QA(),Il(13,"po-timepicker",10),ww("ngModelChange",function(o){return Xy(s),eN(i.minTime,o)||(i.minTime=o),Qy(o)}),og(),QA(),Il(14,"po-timepicker",11),ww("ngModelChange",function(o){return Xy(s),eN(i.maxTime,o)||(i.maxTime=o),Qy(o)}),og(),QA(),Il(15,"po-number",12),ww("ngModelChange",function(o){return Xy(s),eN(i.minuteInterval,o)||(i.minuteInterval=o),Qy(o)}),og(),QA(),Il(16,"po-number",13),ww("ngModelChange",function(o){return Xy(s),eN(i.secondInterval,o)||(i.secondInterval=o),Qy(o)}),og(),QA(),Il(17,"po-checkbox-group",14),ww("ngModelChange",function(o){return Xy(s),eN(i.properties,o)||(i.properties=o),Qy(o)}),og(),QA(),Il(18,"po-radio-group",15),ww("ngModelChange",function(o){return Xy(s),eN(i.locale,o)||(i.locale=o),Qy(o)}),og(),QA(),Il(19,"po-radio-group",16),ww("ngModelChange",function(o){return Xy(s),eN(i.format,o)||(i.format=o),Qy(o)}),og(),QA(),Il(20,"po-radio-group",17),ww("ngModelChange",function(o){return Xy(s),eN(i.modelFormat,o)||(i.modelFormat=o),Qy(o)}),og(),QA(),Il(21,"po-radio-group",18),ww("ngModelChange",function(o){return Xy(s),eN(i.size,o)||(i.size=o),Qy(o)}),og(),QA(),Il(22,"div",2)(23,"po-button",19),ft("p-click",function(){return i.restore()}),og()()();}r&2&&(Ew("ngModel",i.timepicker),nw("p-clean",i.properties.includes("clean"))("p-disabled",i.properties.includes("disabled"))("p-error-pattern",i.errorPattern)("p-format",i.format)("p-helper",i.helper)("p-help",i.help)("p-model-format",i.modelFormat)("p-label",i.label)("p-locale",i.locale)("p-max-time",i.maxTime)("p-min-time",i.minTime)("p-minute-interval",i.minuteInterval)("p-second-interval",i.secondInterval)("p-no-autocomplete",i.properties==null?null:i.properties.includes("noAutocomplete"))("p-optional",i.properties.includes("optional"))("p-placeholder",i.placeholder)("p-readonly",i.properties.includes("readonly"))("p-required",i.properties.includes("required"))("p-required-field-error-message",i.properties.includes("requiredFieldErrorMessage"))("p-show-required",i.properties.includes("showRequired"))("p-show-seconds",i.properties.includes("showSeconds"))("p-label-text-wrap",i.properties==null?null:i.properties.includes("labelTextWrap"))("p-loading",i.properties.includes("loading"))("p-compact-label",i.properties==null?null:i.properties.includes("compactLabel"))("p-append-in-body",i.properties==null?null:i.properties.includes("appendInBody"))("p-error-limit",i.properties==null?null:i.properties.includes("errorLimit"))("p-size",i.size),e0(),Lp(3),nw("p-value",i.timepicker),Lp(),nw("p-value",i.event),Lp(4),Ew("ngModel",i.label),e0(),Lp(),Ew("ngModel",i.help),e0(),Lp(),Ew("ngModel",i.helper),e0(),Lp(),Ew("ngModel",i.placeholder),e0(),Lp(),Ew("ngModel",i.errorPattern),e0(),Lp(),Ew("ngModel",i.minTime),e0(),Lp(),Ew("ngModel",i.maxTime),e0(),Lp(),Ew("ngModel",i.minuteInterval),e0(),Lp(),Ew("ngModel",i.secondInterval),e0(),Lp(),Ew("ngModel",i.properties),nw("p-options",i.propertiesOptions),e0(),Lp(),Ew("ngModel",i.locale),nw("p-options",i.localeOptions),e0(),Lp(),Ew("ngModel",i.format),nw("p-options",i.formatOptions),e0(),Lp(),Ew("ngModel",i.modelFormat),nw("p-options",i.modelFormatOptions),e0(),Lp(),Ew("ngModel",i.size),nw("p-options",i.sizeOptions),e0());},dependencies:[G9,$9,z9,mk,hk,Qt,mv,C3,F3,Hhe,Dde,Cue,Yhe],encapsulation:2,changeDetection:1})}return l})();var we=l=>({"docs-sample-code-tabs":l}),he=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-timepicker-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Timepicker Labs"),og(),Il(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-timepicker-labs/sample-po-timepicker-labs.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-timepicker
  class="po-sm-12"
  name="timepicker"
  [(ngModel)]="timepicker"
  [p-clean]="properties.includes('clean')"
  [p-disabled]="properties.includes('disabled')"
  [p-error-pattern]="errorPattern"
  [p-format]="format"
  [p-helper]="helper"
  [p-help]="help"
  [p-model-format]="modelFormat"
  [p-label]="label"
  [p-locale]="locale"
  [p-max-time]="maxTime"
  [p-min-time]="minTime"
  [p-minute-interval]="minuteInterval"
  [p-second-interval]="secondInterval"
  [p-no-autocomplete]="$safeNavigationMigration(properties?.includes('noAutocomplete'))"
  [p-optional]="properties.includes('optional')"
  [p-placeholder]="placeholder"
  [p-readonly]="properties.includes('readonly')"
  [p-required]="properties.includes('required')"
  [p-required-field-error-message]="properties.includes('requiredFieldErrorMessage')"
  [p-show-required]="properties.includes('showRequired')"
  [p-show-seconds]="properties.includes('showSeconds')"
  [p-label-text-wrap]="$safeNavigationMigration(properties?.includes('labelTextWrap'))"
  [p-loading]="properties.includes('loading')"
  [p-compact-label]="$safeNavigationMigration(properties?.includes('compactLabel'))"
  [p-append-in-body]="$safeNavigationMigration(properties?.includes('appendInBody'))"
  [p-error-limit]="$safeNavigationMigration(properties?.includes('errorLimit'))"
  [p-size]="size"
  (p-blur)="changeEvent('p-blur')"
  (p-change)="changeEvent('p-change')"
  (p-keydown)="changeEvent('p-keydown')"
>
</po-timepicker>

<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="timepicker"> </po-info>

  <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
</div>

<po-divider />

<form #f="ngForm">
  <po-input class="po-md-6" name="label" [(ngModel)]="label" p-clean p-label="Label"> </po-input>

  <po-input class="po-md-6" name="help" [(ngModel)]="help" p-clean p-label="Help"> </po-input>

  <po-input class="po-md-6" name="helper" [(ngModel)]="helper" p-clean p-label="Helper"> </po-input>

  <po-input class="po-md-6" name="placeholder" [(ngModel)]="placeholder" p-clean p-label="Placeholder"> </po-input>

  <po-input class="po-md-6" name="errorPattern" [(ngModel)]="errorPattern" p-clean p-label="Error Pattern"> </po-input>

  <po-timepicker class="po-md-6" name="minTime" [(ngModel)]="minTime" p-clean p-label="Min Time"> </po-timepicker>

  <po-timepicker class="po-md-6" name="maxTime" [(ngModel)]="maxTime" p-clean p-label="Max Time"> </po-timepicker>

  <po-number class="po-md-6" name="minuteInterval" [(ngModel)]="minuteInterval" p-clean p-label="Minute Interval">
  </po-number>

  <po-number class="po-md-6" name="secondInterval" [(ngModel)]="secondInterval" p-clean p-label="Second Interval">
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
    name="modelFormat"
    [(ngModel)]="modelFormat"
    p-columns="4"
    p-label="Model Format"
    [p-options]="modelFormatOptions"
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
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-timepicker-labs/sample-po-timepicker-labs.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { PoCheckboxGroupOption, PoRadioGroupOption, PoTimepickerModelFormat } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-timepicker-labs',
  templateUrl: './sample-po-timepicker-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTimepickerLabsComponent implements OnInit {
  timepicker: string;
  event: string;
  errorPattern: string;
  format: string;
  help: string;
  helper: string;
  modelFormat: string;
  label: string;
  locale: string;
  maxTime: string;
  minTime: string;
  minuteInterval: number;
  secondInterval: number;
  placeholder: string;
  properties: Array<string>;
  size: string;

  public readonly modelFormatOptions: Array<PoRadioGroupOption> = [
    { label: 'HourMinute', value: PoTimepickerModelFormat.HourMinute },
    { label: 'HourMinuteSecond', value: PoTimepickerModelFormat.HourMinuteSecond }
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
    { value: 'showSeconds', label: 'Show Seconds' },
    { value: 'errorLimit', label: 'Limit Error Message' },
    { value: 'labelTextWrap', label: 'Label Text Wrap' },
    { value: 'loading', label: 'Loading' },
    { value: 'compactLabel', label: 'Compact Label' },
    { value: 'appendInBody', label: 'Append In Body' }
  ];

  public readonly formatOptions: Array<PoRadioGroupOption> = [
    { label: '24', value: '24' },
    { label: '12', value: '12' }
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
    this.timepicker = undefined;
    this.event = undefined;
    this.errorPattern = undefined;
    this.format = undefined;
    this.help = undefined;
    this.helper = undefined;
    this.modelFormat = undefined;
    this.label = undefined;
    this.locale = undefined;
    this.maxTime = undefined;
    this.minTime = undefined;
    this.minuteInterval = undefined;
    this.secondInterval = undefined;
    this.placeholder = undefined;
    this.properties = [];
    this.size = 'medium';
  }
}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-timepicker-labs"),og(),zl(23,"hr")),r&2&&(Lp(5),Ux("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,we,i.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,ge],encapsulation:2})}return l})();var Pe=["formScheduling"],Se=(()=>{class l{poDialog=f(Vde);poNotification=f(Yp);formScheduling;title="";date=new Date;startTime="";endTime="";room="";roomOptions=[{value:"sala-a",label:"Sala A"},{value:"sala-b",label:"Sala B"},{value:"sala-c",label:"Sala C"},{value:"auditorio",label:"Audit\xF3rio"}];schedule(){let d=`Deseja confirmar o agendamento "${this.title}" no dia ${this.getFormatedDate(this.date)} das ${this.startTime} \xE0s ${this.endTime} na ${this.getRoomLabel()}?`;this.poDialog.confirm({title:"Confirmar Agendamento",message:d,confirm:()=>{this.poNotification.success("Agendamento confirmado com sucesso!"),this.formScheduling.reset({date:"",room:""});},cancel:()=>{this.poNotification.warning("Agendamento cancelado.");}});}getFormatedDate(d){return d&&d.slice(0,10)}getRoomLabel(){let d=this.roomOptions.find(r=>r.value===this.room);return d?d.label:this.room}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-timepicker-scheduling"]],viewQuery:function(r,i){if(r&1&&Gl(Pe,7),r&2){let s;co(s=lo())&&(i.formScheduling=s.first);}},standalone:false,decls:11,vars:9,consts:[["formScheduling","ngForm"],[1,"po-row"],["name","title","p-label","T\xEDtulo do agendamento","p-placeholder","Ex: Reuni\xE3o de planejamento","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","date","p-clean","","p-format","dd/mm/yyyy","p-label","Data","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","startTime","p-label","Hor\xE1rio de in\xEDcio","p-placeholder","HH:mm","p-clean","","p-required","","p-min-time","08:00","p-max-time","18:00","p-error-pattern","Hor\xE1rio fora do expediente (08:00 - 18:00)",1,"po-md-4",3,"ngModelChange","ngModel","p-show-required"],["name","endTime","p-label","Hor\xE1rio de t\xE9rmino","p-placeholder","HH:mm","p-clean","","p-required","","p-min-time","08:00","p-max-time","18:00","p-error-pattern","Hor\xE1rio fora do expediente (08:00 - 18:00)",1,"po-md-4",3,"ngModelChange","ngModel","p-show-required"],["name","room","p-label","Sala","p-required","",1,"po-md-4",3,"ngModelChange","ngModel","p-options"],["name","scheduleButton","p-label","Agendar",1,"po-md-3","po-offset-md-9","po-offset-lg-9",3,"p-click","p-disabled"]],template:function(r,i){if(r&1){let s=Dx();Il(0,"form",null,0)(2,"div",1)(3,"po-input",2),ww("ngModelChange",function(o){return Xy(s),eN(i.title,o)||(i.title=o),Qy(o)}),og(),QA(),Il(4,"po-datepicker",3),ww("ngModelChange",function(o){return Xy(s),eN(i.date,o)||(i.date=o),Qy(o)}),og(),QA(),og(),Il(5,"div",1)(6,"po-timepicker",4),ww("ngModelChange",function(o){return Xy(s),eN(i.startTime,o)||(i.startTime=o),Qy(o)}),og(),QA(),Il(7,"po-timepicker",5),ww("ngModelChange",function(o){return Xy(s),eN(i.endTime,o)||(i.endTime=o),Qy(o)}),og(),QA(),Il(8,"po-select",6),ww("ngModelChange",function(o){return Xy(s),eN(i.room,o)||(i.room=o),Qy(o)}),og(),QA(),og(),Il(9,"div",1)(10,"po-button",7),ft("p-click",function(){return i.schedule()}),og()()();}if(r&2){let s=Ax(1);Lp(3),Ew("ngModel",i.title),e0(),Lp(),Ew("ngModel",i.date),e0(),Lp(2),Ew("ngModel",i.startTime),nw("p-show-required",true),e0(),Lp(),Ew("ngModel",i.endTime),nw("p-show-required",true),e0(),Lp(),Ew("ngModel",i.room),nw("p-options",i.roomOptions),e0(),Lp(2),nw("p-disabled",s.invalid);}},dependencies:[G9,$9,z9,mk,hk,Qt,Ede,F3,qhe,Cue],encapsulation:2,changeDetection:1})}return l})();var He=l=>({"docs-sample-code-tabs":l}),be=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-timepicker-scheduling-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Timepicker - Scheduling"),og(),Il(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-timepicker-scheduling/sample-po-timepicker-scheduling.component.html"),og(),Il(13,"pre",7),Qx(14,`<form #formScheduling="ngForm">
  <div class="po-row">
    <po-input
      class="po-md-6"
      name="title"
      [(ngModel)]="title"
      p-label="T\xEDtulo do agendamento"
      p-placeholder="Ex: Reuni\xE3o de planejamento"
      p-required
    >
    </po-input>

    <po-datepicker
      class="po-md-6"
      name="date"
      [(ngModel)]="date"
      p-clean
      p-format="dd/mm/yyyy"
      p-label="Data"
      p-required
    >
    </po-datepicker>
  </div>

  <div class="po-row">
    <po-timepicker
      class="po-md-4"
      name="startTime"
      [(ngModel)]="startTime"
      p-label="Hor\xE1rio de in\xEDcio"
      p-placeholder="HH:mm"
      p-clean
      p-required
      p-min-time="08:00"
      p-max-time="18:00"
      p-error-pattern="Hor\xE1rio fora do expediente (08:00 - 18:00)"
      [p-show-required]="true"
    >
    </po-timepicker>

    <po-timepicker
      class="po-md-4"
      name="endTime"
      [(ngModel)]="endTime"
      p-label="Hor\xE1rio de t\xE9rmino"
      p-placeholder="HH:mm"
      p-clean
      p-required
      p-min-time="08:00"
      p-max-time="18:00"
      p-error-pattern="Hor\xE1rio fora do expediente (08:00 - 18:00)"
      [p-show-required]="true"
    >
    </po-timepicker>

    <po-select class="po-md-4" name="room" [(ngModel)]="room" p-label="Sala" p-required [p-options]="roomOptions">
    </po-select>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-3 po-offset-md-9 po-offset-lg-9"
      name="scheduleButton"
      p-label="Agendar"
      [p-disabled]="formScheduling.invalid"
      (p-click)="schedule()"
    >
    </po-button>
  </div>
</form>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-timepicker-scheduling/sample-po-timepicker-scheduling.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

import { PoDialogService, PoNotificationService, PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-timepicker-scheduling',
  templateUrl: './sample-po-timepicker-scheduling.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTimepickerSchedulingComponent {
  private poDialog = inject(PoDialogService);
  private poNotification = inject(PoNotificationService);

  @ViewChild('formScheduling', { static: true }) formScheduling: UntypedFormControl;

  title: string = '';
  date: string = <any>new Date();
  startTime: string = '';
  endTime: string = '';
  room: string = '';

  public readonly roomOptions: Array<PoSelectOption> = [
    { value: 'sala-a', label: 'Sala A' },
    { value: 'sala-b', label: 'Sala B' },
    { value: 'sala-c', label: 'Sala C' },
    { value: 'auditorio', label: 'Audit\xF3rio' }
  ];

  schedule() {
    const message = \`Deseja confirmar o agendamento "\${this.title}" no dia \${this.getFormatedDate(this.date)} das \${this.startTime} \xE0s \${this.endTime} na \${this.getRoomLabel()}?\`;

    this.poDialog.confirm({
      title: 'Confirmar Agendamento',
      message,
      confirm: () => {
        this.poNotification.success('Agendamento confirmado com sucesso!');

        this.formScheduling.reset({
          date: '',
          room: ''
        });
      },
      cancel: () => {
        this.poNotification.warning('Agendamento cancelado.');
      }
    });
  }

  private getFormatedDate(date: string) {
    return date && date.slice(0, 10);
  }

  private getRoomLabel(): string {
    const option = this.roomOptions.find(o => o.value === this.room);
    return option ? option.label : this.room;
  }
}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-timepicker-scheduling"),og(),zl(23,"hr")),r&2&&(Lp(5),Ux("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,He,i.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,Se],encapsulation:2})}return l})();var Ee=(()=>{class l{poNotification=f(Yp);openTime="08:00";closeTime="18:00";lunchStart="12:00";lunchEnd="13:00";save(){this.poNotification.success(`Hor\xE1rio comercial salvo: ${this.openTime} - ${this.closeTime} (Almo\xE7o: ${this.lunchStart} - ${this.lunchEnd})`);}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-timepicker-business-hours"]],standalone:false,decls:8,vars:14,consts:[[1,"po-row"],["name","openTime","p-label","Abertura","p-clean","","p-min-time","06:00",1,"po-md-6",3,"ngModelChange","ngModel","p-max-time","p-minute-interval"],["name","closeTime","p-label","Fechamento","p-clean","","p-max-time","23:00",1,"po-md-6",3,"ngModelChange","ngModel","p-min-time","p-minute-interval"],["name","lunchStart","p-label","In\xEDcio do almo\xE7o","p-clean","",1,"po-md-6",3,"ngModelChange","ngModel","p-min-time","p-max-time","p-minute-interval"],["name","lunchEnd","p-label","Fim do almo\xE7o","p-clean","",1,"po-md-6",3,"ngModelChange","ngModel","p-min-time","p-max-time","p-minute-interval"],["p-label","Salvar","p-kind","primary",1,"po-md-3","po-offset-md-9",3,"p-click"]],template:function(r,i){r&1&&(Il(0,"div",0)(1,"po-timepicker",1),ww("ngModelChange",function(p){return eN(i.openTime,p)||(i.openTime=p),p}),og(),QA(),Il(2,"po-timepicker",2),ww("ngModelChange",function(p){return eN(i.closeTime,p)||(i.closeTime=p),p}),og(),QA(),og(),Il(3,"div",0)(4,"po-timepicker",3),ww("ngModelChange",function(p){return eN(i.lunchStart,p)||(i.lunchStart=p),p}),og(),QA(),Il(5,"po-timepicker",4),ww("ngModelChange",function(p){return eN(i.lunchEnd,p)||(i.lunchEnd=p),p}),og(),QA(),og(),Il(6,"div",0)(7,"po-button",5),ft("p-click",function(){return i.save()}),og()()),r&2&&(Lp(),Ew("ngModel",i.openTime),nw("p-max-time",i.lunchStart)("p-minute-interval",30),e0(),Lp(),Ew("ngModel",i.closeTime),nw("p-min-time",i.lunchEnd)("p-minute-interval",30),e0(),Lp(2),Ew("ngModel",i.lunchStart),nw("p-min-time",i.openTime)("p-max-time",i.lunchEnd)("p-minute-interval",15),e0(),Lp(),Ew("ngModel",i.lunchEnd),nw("p-min-time",i.lunchStart)("p-max-time",i.closeTime)("p-minute-interval",15),e0());},dependencies:[$9,mk,Qt,Cue],encapsulation:2,changeDetection:1})}return l})();var Be=l=>({"docs-sample-code-tabs":l}),fe=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-timepicker-business-hours-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Timepicker - Business Hours"),og(),Il(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-timepicker-business-hours/sample-po-timepicker-business-hours.component.html"),og(),Il(13,"pre",7),Qx(14,`<div class="po-row">
  <po-timepicker
    class="po-md-6"
    name="openTime"
    [(ngModel)]="openTime"
    p-label="Abertura"
    p-clean
    p-min-time="06:00"
    [p-max-time]="lunchStart"
    [p-minute-interval]="30"
  >
  </po-timepicker>

  <po-timepicker
    class="po-md-6"
    name="closeTime"
    [(ngModel)]="closeTime"
    p-label="Fechamento"
    p-clean
    [p-min-time]="lunchEnd"
    p-max-time="23:00"
    [p-minute-interval]="30"
  >
  </po-timepicker>
</div>

<div class="po-row">
  <po-timepicker
    class="po-md-6"
    name="lunchStart"
    [(ngModel)]="lunchStart"
    p-label="In\xEDcio do almo\xE7o"
    p-clean
    [p-min-time]="openTime"
    [p-max-time]="lunchEnd"
    [p-minute-interval]="15"
  >
  </po-timepicker>

  <po-timepicker
    class="po-md-6"
    name="lunchEnd"
    [(ngModel)]="lunchEnd"
    p-label="Fim do almo\xE7o"
    p-clean
    [p-min-time]="lunchStart"
    [p-max-time]="closeTime"
    [p-minute-interval]="15"
  >
  </po-timepicker>
</div>

<div class="po-row">
  <po-button class="po-md-3 po-offset-md-9" p-label="Salvar" p-kind="primary" (p-click)="save()"> </po-button>
</div>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-timepicker-business-hours/sample-po-timepicker-business-hours.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

import { PoNotificationService } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-timepicker-business-hours',
  templateUrl: './sample-po-timepicker-business-hours.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTimepickerBusinessHoursComponent {
  private poNotification = inject(PoNotificationService);

  openTime: string = '08:00';
  closeTime: string = '18:00';
  lunchStart: string = '12:00';
  lunchEnd: string = '13:00';

  save() {
    this.poNotification.success(
      \`Hor\xE1rio comercial salvo: \${this.openTime} - \${this.closeTime} (Almo\xE7o: \${this.lunchStart} - \${this.lunchEnd})\`
    );
  }
}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-timepicker-business-hours"),og(),zl(23,"hr")),r&2&&(Lp(5),Ux("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,Be,i.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,Ee],encapsulation:2})}return l})();var ve=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-timepicker-doc"]],standalone:false,decls:1006,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","PoTimerFormat"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoTimepickerModelFormat"],["pan","",1,"docs-api-property-type","PoHelperOptions"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"]],template:function(r,i){r&1&&(Il(0,"div",0)(1,"p",1)(2,"code"),Qx(3,"import { PoFieldModule } from '@po-ui/ng-components';"),og()(),Il(4,"div",2)(5,"p"),Qx(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),og(),Il(7,"blockquote")(8,"p"),Qx(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),Il(10,"code"),Qx(11,"FormsModule"),og(),Qx(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Il(13,"code"),Qx(14,"ReactiveFormsModule"),og(),Qx(15,", ambos nativos do Angular."),og()()(),Il(16,"h3",3),Qx(17,"Componente"),og(),Il(18,"h4",4)(19,"code",5),Qx(20,"PoTimepickerComponent"),og()(),Il(21,"div",2)(22,"p"),Qx(23,"O "),Il(24,"code"),Qx(25,"po-timepicker"),og(),Qx(26," \xE9 um componente para sele\xE7\xE3o de hor\xE1rio que permite a digita\xE7\xE3o e/ou sele\xE7\xE3o via painel flutuante."),og(),Il(27,"p"),Qx(28,"O formato de exibi\xE7\xE3o do hor\xE1rio pode ser de 24 horas ("),Il(29,"code"),Qx(30,"HH:mm"),og(),Qx(31,") ou 12 horas ("),Il(32,"code"),Qx(33,"hh:mm AM/PM"),og(),Qx(34,`),
e opcionalmente incluir segundos (`),Il(35,"code"),Qx(36,"HH:mm:ss"),og(),Qx(37,")."),og(),Il(38,"p"),Qx(39,"O valor de sa\xEDda segue o formato ISO 8601 para hor\xE1rios ("),Il(40,"code"),Qx(41,"HH:mm"),og(),Qx(42," ou "),Il(43,"code"),Qx(44,"HH:mm:ss"),og(),Qx(45,")."),og(),Il(46,"p")(47,"strong"),Qx(48,"Importante:"),og()(),Il(49,"ul")(50,"li"),Qx(51,"Caso o valor digitado seja inv\xE1lido, o "),Il(52,"code"),Qx(53,"model"),og(),Qx(54," receber\xE1 uma string vazia."),og(),Il(55,"li"),Qx(56,"Caso o "),Il(57,"code"),Qx(58,"input"),og(),Qx(59," esteja passando um "),Il(60,"code"),Qx(61,"[(ngModel)]"),og(),Qx(62,", mas n\xE3o tenha um "),Il(63,"code"),Qx(64,"name"),og(),Qx(65,`, ent\xE3o ir\xE1 ocorrer um erro
do pr\xF3prio Angular (`),Il(66,"code"),Qx(67,'[ngModelOptions]="{standalone: true}"'),og(),Qx(68,")."),og()(),Il(69,"blockquote")(70,"p"),Qx(71,"N\xE3o esque\xE7a de importar o "),Il(72,"code"),Qx(73,"FormsModule"),og(),Qx(74," em seu m\xF3dulo, tal como para utilizar o "),Il(75,"code"),Qx(76,"input default"),og(),Qx(77,"."),og()(),Il(78,"h4"),Qx(79,"Tokens customiz\xE1veis"),og(),Il(80,"p"),Qx(81,`\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),Il(82,"code"),Qx(83,".po-input"),og()(),Il(84,"blockquote")(85,"p"),Qx(86,"Para maiores informa\xE7\xF5es, acesse o guia "),Il(87,"a",6),Qx(88,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),Qx(89,"."),og()(),Il(90,"table")(91,"thead")(92,"tr")(93,"th"),Qx(94,"Propriedade"),og(),Il(95,"th"),Qx(96,"Descri\xE7\xE3o"),og(),Il(97,"th"),Qx(98,"Valor Padr\xE3o"),og()()(),Il(99,"tbody")(100,"tr")(101,"td")(102,"strong"),Qx(103,"Default Values"),og()(),zl(104,"td")(105,"td"),og(),Il(106,"tr")(107,"td")(108,"code"),Qx(109,"--font-family"),og()(),Il(110,"td"),Qx(111,"Fam\xEDlia tipogr\xE1fica usada"),og(),Il(112,"td")(113,"code"),Qx(114,"var(--font-family-theme)"),og()()(),Il(115,"tr")(116,"td")(117,"code"),Qx(118,"--font-size"),og()(),Il(119,"td"),Qx(120,"Tamanho da fonte"),og(),Il(121,"td")(122,"code"),Qx(123,"var(--font-size-default)"),og()()(),Il(124,"tr")(125,"td")(126,"code"),Qx(127,"--text-color-placeholder"),og()(),Il(128,"td"),Qx(129,"Cor do texto placeholder"),og(),Il(130,"td")(131,"code"),Qx(132,"var(--color-neutral-light-30)"),og()()(),Il(133,"tr")(134,"td")(135,"code"),Qx(136,"--color"),og()(),Il(137,"td"),Qx(138,"Cor principal do timepicker"),og(),Il(139,"td")(140,"code"),Qx(141,"var(--color-neutral-dark-70)"),og()()(),Il(142,"tr")(143,"td")(144,"code"),Qx(145,"--background"),og()(),Il(146,"td"),Qx(147,"Cor de background"),og(),Il(148,"td")(149,"code"),Qx(150,"var(--color-neutral-light-05)"),og()()(),Il(151,"tr")(152,"td")(153,"code"),Qx(154,"--padding"),og()(),Il(155,"td"),Qx(156,"Preenchimento"),og(),Il(157,"td")(158,"code"),Qx(159,"0 0.5rem"),og()()(),Il(160,"tr")(161,"td")(162,"code"),Qx(163,"--text-color"),og()(),Il(164,"td"),Qx(165,"Cor do texto"),og(),Il(166,"td")(167,"code"),Qx(168,"var(--color-neutral-dark-90)"),og()()(),Il(169,"tr")(170,"td")(171,"code"),Qx(172,"--field-container-title-justify"),og()(),Il(173,"td"),Qx(174,"Alinhamento horizontal do t\xEDtulo ("),Il(175,"code"),Qx(176,"justify-content"),og(),Qx(177,")"),og(),Il(178,"td")(179,"code"),Qx(180,"space-between"),og()()(),Il(181,"tr")(182,"td")(183,"code"),Qx(184,"--field-container-title-flex"),og()(),Il(185,"td"),Qx(186,"Flex do t\xEDtulo ("),Il(187,"code"),Qx(188,"flex"),og(),Qx(189,")"),og(),Il(190,"td")(191,"code"),Qx(192,"1 auto"),og()()(),Il(193,"tr")(194,"td")(195,"strong"),Qx(196,"Hover"),og()(),zl(197,"td")(198,"td"),og(),Il(199,"tr")(200,"td")(201,"code"),Qx(202,"--color-hover"),og()(),Il(203,"td"),Qx(204,"Cor principal no estado hover"),og(),Il(205,"td")(206,"code"),Qx(207,"var(--color-brand-01-dark)"),og()()(),Il(208,"tr")(209,"td")(210,"code"),Qx(211,"--background-hover"),og()(),Il(212,"td"),Qx(213,"Cor de background no estado hover"),og(),Il(214,"td")(215,"code"),Qx(216,"var(--color-brand-01-lightest)"),og()()(),Il(217,"tr")(218,"td")(219,"strong"),Qx(220,"Focused"),og()(),zl(221,"td")(222,"td"),og(),Il(223,"tr")(224,"td")(225,"code"),Qx(226,"--color-focused"),og()(),Il(227,"td"),Qx(228,"Cor principal no estado de focus"),og(),Il(229,"td")(230,"code"),Qx(231,"var(--color-action-default)"),og()()(),Il(232,"tr")(233,"td")(234,"code"),Qx(235,"--outline-color-focused"),og()(),Il(236,"td"),Qx(237,"Cor do outline do estado de focus"),og(),Il(238,"td")(239,"code"),Qx(240,"var(--color-action-focus)"),og()()(),Il(241,"tr")(242,"td")(243,"strong"),Qx(244,"Disabled"),og()(),zl(245,"td")(246,"td"),og(),Il(247,"tr")(248,"td")(249,"code"),Qx(250,"--color-disabled"),og()(),Il(251,"td"),Qx(252,"Cor principal no estado disabled"),og(),Il(253,"td")(254,"code"),Qx(255,"var(--color-neutral-light-30)"),og()()(),Il(256,"tr")(257,"td")(258,"code"),Qx(259,"--background-disabled"),og()(),Il(260,"td"),Qx(261,"Cor de background no estado disabled"),og(),Il(262,"td")(263,"code"),Qx(264,"var(--color-neutral-light-20)"),og()()(),Il(265,"tr")(266,"td")(267,"code"),Qx(268,"--text-color-disabled"),og()(),Il(269,"td"),Qx(270,"Cor do texto no estado disabled"),og(),Il(271,"td")(272,"code"),Qx(273,"var(--color-neutral-dark-70)"),og()()()()()(),Il(274,"div",7)(275,"h4",8),Qx(276,"Seletor"),og(),Il(277,"pre",9),Qx(278,`<po-timepicker
    p-append-in-body="boolean"
    p-auto-focus="boolean"
    p-clean="boolean"
    p-compact-label="boolean"
    p-disabled="boolean"
    p-error-limit="boolean"
    p-error-pattern="string"
    p-format="PoTimerFormat"
    p-help="string"
    (p-keydown)="EventEmitter"
    p-label="string"
    p-label-text-wrap="boolean"
    p-loading="boolean"
    p-locale="string"
    p-max-time="string"
    p-min-time="string"
    p-minute-interval="number"
    p-model-format="PoTimepickerModelFormat"
    name="string"
    p-no-autocomplete="boolean"
    (p-blur)="EventEmitter"
    (p-change)="EventEmitter"
    p-optional="boolean"
    p-placeholder="string"
    p-helper="PoHelperOptions | string"
    p-readonly="boolean"
    p-required="boolean"
    p-second-interval="number"
    p-required-field-error-message="boolean"
    p-show-required="boolean"
    p-show-seconds="boolean"
    p-size="string" >
</po-timepicker>
`),og()(),Il(279,"h4",10),Qx(280,"Propriedades"),og(),Il(281,"table",11)(282,"tr",12)(283,"th",13),Qx(284,"Nome"),og(),Il(285,"th",13),Qx(286,"Tipo"),og(),Il(287,"th",13),Qx(288,"Padr\xE3o"),og(),Il(289,"th",13),Qx(290,"Descri\xE7\xE3o"),og()(),Il(291,"tr",14)(292,"td",15)(293,"div",16)(294,"span",17),Qx(295," p-append-in-body"),zl(296,"br"),og()()(),Il(297,"td",18)(298,"code",19),Qx(299,"boolean"),og()(),Il(300,"td",20)(301,"p")(302,"code"),Qx(303,"false"),og()()(),Il(304,"td",21)(305,"em")(306,"strong"),Qx(307,"(opcional)"),og()(),Il(308,"p"),Qx(309,"Define que o painel do timer ser\xE1 inclu\xEDdo no body da p\xE1gina."),og()()(),Il(310,"tr",14)(311,"td",15)(312,"div",16)(313,"span",17),Qx(314," p-auto-focus"),zl(315,"br"),og()()(),Il(316,"td",18)(317,"code",19),Qx(318,"boolean"),og()(),Il(319,"td",20)(320,"p")(321,"code"),Qx(322,"false"),og()()(),Il(323,"td",21)(324,"em")(325,"strong"),Qx(326,"(opcional)"),og()(),Il(327,"p"),Qx(328,"Aplica foco no elemento ao ser iniciado."),og()()(),Il(329,"tr",14)(330,"td",15)(331,"div",16)(332,"span",17),Qx(333,"p-clean"),zl(334,"br"),og()()(),Il(335,"td",18)(336,"code",19),Qx(337,"boolean"),og()(),Il(338,"td",20),Qx(339,"-"),og(),Il(340,"td",21)(341,"em")(342,"strong"),Qx(343,"(opcional)"),og()(),Il(344,"p"),Qx(345,"Habilita a\xE7\xE3o para limpar o campo."),og()()(),Il(346,"tr",14)(347,"td",15)(348,"div",16)(349,"span",17),Qx(350," p-compact-label"),zl(351,"br"),og()()(),Il(352,"td",18)(353,"code",19),Qx(354,"boolean"),og()(),Il(355,"td",20)(356,"p")(357,"code"),Qx(358,"false"),og()()(),Il(359,"td",21)(360,"em")(361,"strong"),Qx(362,"(opcional)"),og()(),Il(363,"p"),Qx(364,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),og()()(),Il(365,"tr",14)(366,"td",15)(367,"div",16)(368,"span",17),Qx(369,"p-disabled"),zl(370,"br"),og()()(),Il(371,"td",18)(372,"code",19),Qx(373,"boolean"),og()(),Il(374,"td",20),Qx(375,"-"),og(),Il(376,"td",21)(377,"em")(378,"strong"),Qx(379,"(opcional)"),og()(),Il(380,"p"),Qx(381,"Desabilita o campo."),og()()(),Il(382,"tr",14)(383,"td",15)(384,"div",16)(385,"span",17),Qx(386," p-error-limit"),zl(387,"br"),og()()(),Il(388,"td",18)(389,"code",19),Qx(390,"boolean"),og()(),Il(391,"td",20)(392,"p")(393,"code"),Qx(394,"false"),og()()(),Il(395,"td",21)(396,"em")(397,"strong"),Qx(398,"(opcional)"),og()(),Il(399,"p"),Qx(400,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),og()()(),Il(401,"tr",14)(402,"td",15)(403,"div",16)(404,"span",17),Qx(405," p-error-pattern"),zl(406,"br"),og()()(),Il(407,"td",18)(408,"code",22),Qx(409,"string"),og()(),Il(410,"td",20),Qx(411,"-"),og(),Il(412,"td",21)(413,"em")(414,"strong"),Qx(415,"(opcional)"),og()(),Il(416,"p"),Qx(417,"Mensagem apresentada quando o hor\xE1rio for inv\xE1lido ou fora do per\xEDodo."),og(),Il(418,"blockquote")(419,"p"),Qx(420,"Por padr\xE3o, esta mensagem n\xE3o \xE9 apresentada quando o campo estiver vazio, mesmo que ele seja requerido."),og()()()(),Il(421,"tr",14)(422,"td",15)(423,"div",16)(424,"span",17),Qx(425," p-format"),zl(426,"br"),og()()(),Il(427,"td",18)(428,"code",23),Qx(429,"PoTimerFormat"),og()(),Il(430,"td",20)(431,"p")(432,"code"),Qx(433,"24"),og()()(),Il(434,"td",21)(435,"em")(436,"strong"),Qx(437,"(opcional)"),og()(),Il(438,"p"),Qx(439,"Define o formato de exibi\xE7\xE3o do timer."),og(),Il(440,"p"),Qx(441,"Valores v\xE1lidos:"),og(),Il(442,"ul")(443,"li")(444,"code"),Qx(445,"24"),og(),Qx(446,": formato de 24 horas (padr\xE3o)"),og(),Il(447,"li")(448,"code"),Qx(449,"12"),og(),Qx(450,": formato de 12 horas com indicador AM/PM"),og()()()(),Il(451,"tr",14)(452,"td",15)(453,"div",16)(454,"span",17),Qx(455," p-help"),zl(456,"br"),og()()(),Il(457,"td",18)(458,"code",22),Qx(459,"string"),og()(),Il(460,"td",20),Qx(461,"-"),og(),Il(462,"td",21)(463,"em")(464,"strong"),Qx(465,"(opcional)"),og()(),Il(466,"p"),Qx(467,"Texto de apoio do campo."),og()()(),Il(468,"tr",14)(469,"td",15)(470,"div",24)(471,"span",25),Qx(472," (p-keydown)"),zl(473,"br"),og()()(),Il(474,"td",18)(475,"code",26),Qx(476,"EventEmitter"),og()(),Il(477,"td",20),Qx(478,"-"),og(),Il(479,"td",21)(480,"p"),Qx(481,"Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente."),og()()(),Il(482,"tr",14)(483,"td",15)(484,"div",16)(485,"span",17),Qx(486," p-label"),zl(487,"br"),og()()(),Il(488,"td",18)(489,"code",22),Qx(490,"string"),og()(),Il(491,"td",20),Qx(492,"-"),og(),Il(493,"td",21)(494,"em")(495,"strong"),Qx(496,"(opcional)"),og()(),Il(497,"p"),Qx(498,"R\xF3tulo do campo."),og()()(),Il(499,"tr",14)(500,"td",15)(501,"div",16)(502,"span",17),Qx(503," p-label-text-wrap"),zl(504,"br"),og()()(),Il(505,"td",18)(506,"code",19),Qx(507,"boolean"),og()(),Il(508,"td",20)(509,"p")(510,"code"),Qx(511,"false"),og()()(),Il(512,"td",21)(513,"em")(514,"strong"),Qx(515,"(opcional)"),og()(),Il(516,"p"),Qx(517,"Habilita a quebra autom\xE1tica do texto da propriedade "),Il(518,"code"),Qx(519,"p-label"),og(),Qx(520,"."),og()()(),Il(521,"tr",14)(522,"td",15)(523,"div",16)(524,"span",17),Qx(525," p-loading"),zl(526,"br"),og()()(),Il(527,"td",18)(528,"code",19),Qx(529,"boolean"),og()(),Il(530,"td",20)(531,"p")(532,"code"),Qx(533,"false"),og()()(),Il(534,"td",21)(535,"em")(536,"strong"),Qx(537,"(opcional)"),og()(),Il(538,"p"),Qx(539,"Exibe um \xEDcone de carregamento no lado direito do campo para sinalizar que uma opera\xE7\xE3o est\xE1 em andamento."),og()()(),Il(540,"tr",14)(541,"td",15)(542,"div",16)(543,"span",17),Qx(544," p-locale"),zl(545,"br"),og()()(),Il(546,"td",18)(547,"code",22),Qx(548,"string"),og()(),Il(549,"td",20),Qx(550,"-"),og(),Il(551,"td",21)(552,"em")(553,"strong"),Qx(554,"(opcional)"),og()(),Il(555,"p"),Qx(556,"Idioma do componente."),og()()(),Il(557,"tr",14)(558,"td",15)(559,"div",16)(560,"span",17),Qx(561," p-max-time"),zl(562,"br"),og()()(),Il(563,"td",18)(564,"code",22),Qx(565,"string"),og()(),Il(566,"td",20),Qx(567,"-"),og(),Il(568,"td",21)(569,"em")(570,"strong"),Qx(571,"(opcional)"),og()(),Il(572,"p"),Qx(573,"Define o hor\xE1rio m\xE1ximo permitido. Formato: "),Il(574,"code"),Qx(575,"HH:mm"),og(),Qx(576," ou "),Il(577,"code"),Qx(578,"HH:mm:ss"),og(),Qx(579,"."),og()()(),Il(580,"tr",14)(581,"td",15)(582,"div",16)(583,"span",17),Qx(584," p-min-time"),zl(585,"br"),og()()(),Il(586,"td",18)(587,"code",22),Qx(588,"string"),og()(),Il(589,"td",20),Qx(590,"-"),og(),Il(591,"td",21)(592,"em")(593,"strong"),Qx(594,"(opcional)"),og()(),Il(595,"p"),Qx(596,"Define o hor\xE1rio m\xEDnimo permitido. Formato: "),Il(597,"code"),Qx(598,"HH:mm"),og(),Qx(599," ou "),Il(600,"code"),Qx(601,"HH:mm:ss"),og(),Qx(602,"."),og()()(),Il(603,"tr",14)(604,"td",15)(605,"div",16)(606,"span",17),Qx(607," p-minute-interval"),zl(608,"br"),og()()(),Il(609,"td",18)(610,"code",27),Qx(611,"number"),og()(),Il(612,"td",20)(613,"p")(614,"code"),Qx(615,"5"),og()()(),Il(616,"td",21)(617,"em")(618,"strong"),Qx(619,"(opcional)"),og()(),Il(620,"p"),Qx(621,"Define o intervalo entre os minutos exibidos no painel."),og()()(),Il(622,"tr",14)(623,"td",15)(624,"div",16)(625,"span",17),Qx(626," p-model-format"),zl(627,"br"),og()()(),Il(628,"td",18)(629,"code",28),Qx(630,"PoTimepickerModelFormat"),og()(),Il(631,"td",20),Qx(632,"-"),og(),Il(633,"td",21)(634,"em")(635,"strong"),Qx(636,"(opcional)"),og()(),Il(637,"p"),Qx(638,"Padr\xE3o de formata\xE7\xE3o para sa\xEDda do "),Il(639,"em"),Qx(640,"model"),og(),Qx(641,"."),og(),Il(642,"blockquote")(643,"p"),Qx(644,"Veja os valores v\xE1lidos no "),Il(645,"em"),Qx(646,"enum"),og(),Il(647,"code"),Qx(648,"PoTimepickerModelFormat"),og(),Qx(649,"."),og()()()(),Il(650,"tr",14)(651,"td",15)(652,"div",16)(653,"span",17),Qx(654," name"),zl(655,"br"),og()()(),Il(656,"td",18)(657,"code",22),Qx(658,"string"),og()(),Il(659,"td",20),Qx(660,"-"),og(),Il(661,"td",21)(662,"p"),Qx(663,"Nome do componente."),og()()(),Il(664,"tr",14)(665,"td",15)(666,"div",16)(667,"span",17),Qx(668," p-no-autocomplete"),zl(669,"br"),og()()(),Il(670,"td",18)(671,"code",19),Qx(672,"boolean"),og()(),Il(673,"td",20)(674,"p")(675,"code"),Qx(676,"false"),og()()(),Il(677,"td",21)(678,"em")(679,"strong"),Qx(680,"(opcional)"),og()(),Il(681,"p"),Qx(682,"Define a propriedade nativa "),Il(683,"code"),Qx(684,"autocomplete"),og(),Qx(685," do campo como "),Il(686,"code"),Qx(687,"off"),og(),Qx(688,"."),og()()(),Il(689,"tr",14)(690,"td",15)(691,"div",24)(692,"span",25),Qx(693," (p-blur)"),zl(694,"br"),og()()(),Il(695,"td",18)(696,"code",26),Qx(697,"EventEmitter"),og()(),Il(698,"td",20),Qx(699,"-"),og(),Il(700,"td",21)(701,"p"),Qx(702,"Evento disparado ao sair do campo."),og()()(),Il(703,"tr",14)(704,"td",15)(705,"div",24)(706,"span",25),Qx(707," (p-change)"),zl(708,"br"),og()()(),Il(709,"td",18)(710,"code",26),Qx(711,"EventEmitter"),og()(),Il(712,"td",20),Qx(713,"-"),og(),Il(714,"td",21)(715,"p"),Qx(716,"Evento disparado ao alterar valor do campo."),og()()(),Il(717,"tr",14)(718,"td",15)(719,"div",16)(720,"span",17),Qx(721," p-optional"),zl(722,"br"),og()()(),Il(723,"td",18)(724,"code",19),Qx(725,"boolean"),og()(),Il(726,"td",20)(727,"p")(728,"code"),Qx(729,"false"),og()()(),Il(730,"td",21)(731,"em")(732,"strong"),Qx(733,"(opcional)"),og()(),Il(734,"p"),Qx(735,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),og()()(),Il(736,"tr",14)(737,"td",15)(738,"div",16)(739,"span",17),Qx(740," p-placeholder"),zl(741,"br"),og()()(),Il(742,"td",18)(743,"code",22),Qx(744,"string"),og()(),Il(745,"td",20),Qx(746,"-"),og(),Il(747,"td",21)(748,"em")(749,"strong"),Qx(750,"(opcional)"),og()(),Il(751,"p"),Qx(752,"Mensagem que aparecer\xE1 enquanto o campo n\xE3o estiver preenchido."),og(),Il(753,"p"),Qx(754,"Para personalizar os segmentos, informe o valor no formato "),Il(755,"code"),Qx(756,"HH:mm"),og(),Qx(757," ou "),Il(758,"code"),Qx(759,"HH:mm:ss"),og(),Qx(760,"."),og()()(),Il(761,"tr",14)(762,"td",15)(763,"div",16)(764,"span",17),Qx(765," p-helper"),zl(766,"br"),og()()(),Il(767,"td",18)(768,"code",29),Qx(769,"PoHelperOptions "),og(),Il(770,"code",22),Qx(771," string"),og()(),Il(772,"td",20),Qx(773,"-"),og(),Il(774,"td",21)(775,"em")(776,"strong"),Qx(777,"(opcional)"),og()(),Il(778,"p"),Qx(779,"Define as op\xE7\xF5es do componente de ajuda (po-helper)."),og()()(),Il(780,"tr",14)(781,"td",15)(782,"div",16)(783,"span",17),Qx(784,"p-readonly"),zl(785,"br"),og()()(),Il(786,"td",18)(787,"code",19),Qx(788,"boolean"),og()(),Il(789,"td",20),Qx(790,"-"),og(),Il(791,"td",21)(792,"em")(793,"strong"),Qx(794,"(opcional)"),og()(),Il(795,"p"),Qx(796,"Torna o elemento somente leitura."),og()()(),Il(797,"tr",14)(798,"td",15)(799,"div",16)(800,"span",17),Qx(801,"p-required"),zl(802,"br"),og()()(),Il(803,"td",18)(804,"code",19),Qx(805,"boolean"),og()(),Il(806,"td",20)(807,"p")(808,"code"),Qx(809,"false"),og()()(),Il(810,"td",21)(811,"em")(812,"strong"),Qx(813,"(opcional)"),og()(),Il(814,"p"),Qx(815,"Define que o campo ser\xE1 obrigat\xF3rio."),og()()(),Il(816,"tr",14)(817,"td",15)(818,"div",16)(819,"span",17),Qx(820," p-second-interval"),zl(821,"br"),og()()(),Il(822,"td",18)(823,"code",27),Qx(824,"number"),og()(),Il(825,"td",20)(826,"p")(827,"code"),Qx(828,"1"),og()()(),Il(829,"td",21)(830,"em")(831,"strong"),Qx(832,"(opcional)"),og()(),Il(833,"p"),Qx(834,"Define o intervalo entre os segundos exibidos no painel."),og()()(),Il(835,"tr",14)(836,"td",15)(837,"div",16)(838,"span",17),Qx(839," p-required-field-error-message"),zl(840,"br"),og()()(),Il(841,"td",18)(842,"code",19),Qx(843,"boolean"),og()(),Il(844,"td",20)(845,"p")(846,"code"),Qx(847,"false"),og()()(),Il(848,"td",21)(849,"em")(850,"strong"),Qx(851,"(opcional)"),og()(),Il(852,"p"),Qx(853,"Exibe a mensagem setada na propriedade "),Il(854,"code"),Qx(855,"p-error-pattern"),og(),Qx(856," se o campo estiver vazio e for requerido."),og()()(),Il(857,"tr",14)(858,"td",15)(859,"div",16)(860,"span",17),Qx(861," p-show-required"),zl(862,"br"),og()()(),Il(863,"td",18)(864,"code",19),Qx(865,"boolean"),og()(),Il(866,"td",20),Qx(867,"-"),og(),Il(868,"td",21)(869,"p"),Qx(870,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),og()()(),Il(871,"tr",14)(872,"td",15)(873,"div",16)(874,"span",17),Qx(875," p-show-seconds"),zl(876,"br"),og()()(),Il(877,"td",18)(878,"code",19),Qx(879,"boolean"),og()(),Il(880,"td",20)(881,"p")(882,"code"),Qx(883,"false"),og()()(),Il(884,"td",21)(885,"em")(886,"strong"),Qx(887,"(opcional)"),og()(),Il(888,"p"),Qx(889,"Exibe a coluna de segundos no painel."),og()()(),Il(890,"tr",14)(891,"td",15)(892,"div",16)(893,"span",17),Qx(894," p-size"),zl(895,"br"),og()()(),Il(896,"td",18)(897,"code",22),Qx(898,"string"),og()(),Il(899,"td",20)(900,"p")(901,"code"),Qx(902,"medium"),og()()(),Il(903,"td",21)(904,"em")(905,"strong"),Qx(906,"(opcional)"),og()(),Il(907,"p"),Qx(908,"Define o tamanho do componente:"),og(),Il(909,"ul")(910,"li")(911,"code"),Qx(912,"small"),og(),Qx(913,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),og(),Il(914,"li")(915,"code"),Qx(916,"medium"),og(),Qx(917,": altura do input como 44px."),og()()()()(),Il(918,"h3",10),Qx(919,"M\xE9todos"),og(),Il(920,"table",30)(921,"tr",14)(922,"th",31)(923,"div",16)(924,"h4")(925,"span",17),Qx(926," focus "),og()()()()(),Il(927,"tr",21)(928,"td",21)(929,"p"),Qx(930,"Fun\xE7\xE3o que atribui foco ao componente."),og(),Il(931,"p"),Qx(932,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),og(),Il(933,"pre")(934,"code"),Qx(935,`import { PoTimepickerComponent } from '@po-ui/ng-components';

...

@ViewChild(PoTimepickerComponent, { static: true }) timepicker: PoTimepickerComponent;

focusTimepicker() {
  this.timepicker.focus();
}
`),og()()()()(),zl(936,"br"),Il(937,"table",30)(938,"tr",14)(939,"th",31)(940,"div",16)(941,"h4")(942,"span",17),Qx(943," showAdditionalHelp "),og()()()()(),Il(944,"tr",21)(945,"td",21)(946,"p"),Qx(947,"M\xE9todo que exibe "),Il(948,"code"),Qx(949,"p-helper"),og(),Qx(950," ou executa a a\xE7\xE3o definida em "),Il(951,"code"),Qx(952,"p-helper{eventOnClick}"),og(),Qx(953," ou em "),Il(954,"code"),Qx(955,"p-additionalHelp"),og(),Qx(956,"."),og()()()(),zl(957,"br"),Il(958,"h3"),Qx(959,"Enums"),og(),Il(960,"h4",4)(961,"code",5),Qx(962,"PoTimepickerModelFormat"),og()(),Il(963,"div",2)(964,"p")(965,"em"),Qx(966,"Enum"),og(),Qx(967," que define o padr\xE3o de formata\xE7\xE3o do model de sa\xEDda do timepicker."),og()(),Il(968,"h4",10),Qx(969,"Propriedades"),og(),Il(970,"table",11)(971,"tr",12)(972,"th",13),Qx(973,"Nome"),og(),Il(974,"th",13),Qx(975,"Descri\xE7\xE3o"),og()(),Il(976,"tr",14)(977,"td",15)(978,"div",16)(979,"span",17),Qx(980," HourMinute"),zl(981,"br"),og()()(),Il(982,"td",21)(983,"p"),Qx(984,"Formato b\xE1sico "),Il(985,"code"),Qx(986,"HH:mm"),og(),Qx(987," (ex: "),Il(988,"code"),Qx(989,"14:30"),og(),Qx(990,")."),og()()(),Il(991,"tr",14)(992,"td",15)(993,"div",16)(994,"span",17),Qx(995," HourMinuteSecond"),zl(996,"br"),og()()(),Il(997,"td",21)(998,"p"),Qx(999,"Formato com segundos "),Il(1e3,"code"),Qx(1001,"HH:mm:ss"),og(),Qx(1002," (ex: "),Il(1003,"code"),Qx(1004,"14:30:00"),og(),Qx(1005,")."),og()()()()());},dependencies:[Ka],encapsulation:2})}return l})();var Ce=(()=>{class l{route;router;sub;hidePoWebSample=true;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(d,r){this.route=d,this.router=r;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let r=d.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:"merge"}),this.activeTab=d;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(r){return new(r||l)(C(Xn),C(En))};static \u0275cmp=Un({type:l,selectors:[["ng-component"]],standalone:false,decls:9,vars:4,consts:[["p-title","Timepicker",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,i){r&1&&(Il(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return i.changeTab("doc")}),zl(3,"sample-po-timepicker-doc"),og(),Il(4,"po-tab",3),ft("p-click",function(){return i.changeTab("web")}),zl(5,"sample-po-timepicker-basic-view")(6,"sample-po-timepicker-labs-view")(7,"sample-po-timepicker-scheduling-view")(8,"sample-po-timepicker-business-hours-view"),og()()()),r&2&&(nw("p-actions",i.actions),Lp(2),nw("p-active",i.activeTab==="doc"),Lp(2),nw("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[cNe,qme,Yme,ce,he,be,fe,ve],encapsulation:2})}return l})();var Ve=[{path:"",component:Ce}],xe=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275mod=fe$1({type:l});static \u0275inj=ue({imports:[uL.forChild(Ve),uL]})}return l})();var Ct=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275mod=fe$1({type:l});static \u0275inj=ue({imports:[sr,xe]})}return l})();export{Ct as DocPoTimepickerModule};