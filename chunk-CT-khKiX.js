import {f as fe$1,u as ue,s as sr,m as mL,w,c3 as Xn,E as En,U as Un,d6 as Z0,c as f,c5 as Ode,aW as Yp,cW as bue,F as Wl,an as SO,aH as Ka,b8 as Ume,b9 as $me,C as Sl,y as rN,J as og,a1 as ft,L as Lp,ar as Gx,au as dg,O as rw,bs as gN,aX as Q9,aF as Z9,aY as K9,aG as wk,aZ as _k,b0 as Qt,b1 as mv,c4 as b3,b4 as L3,cp as Bhe,c8 as Tde,c9 as jhe,aB as Ix,aM as Cw,aN as n0,aO as ww,aP as i0,bD as Mde,aJ as Whe,bd as kx,av as ql,aw as lo,ax as uo,a3 as sNe,aD as Ky,aT as oN,aE as Xy}from'./main-TVDUJ47Y.js';var se=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-timepicker-basic"]],standalone:false,decls:1,vars:0,consts:[["name","timepicker","p-label","PO Timepicker"]],template:function(r,i){r&1&&Wl(0,"po-timepicker",0);},dependencies:[bue],encapsulation:2,changeDetection:1})}return l})();var Te=l=>({"docs-sample-code-tabs":l}),ce=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-timepicker-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),rN(3,"PO Timepicker Basic"),og(),Sl(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),rN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),rN(12,"sample-po-timepicker-basic/sample-po-timepicker-basic.component.html"),og(),Sl(13,"pre",7),rN(14,`<po-timepicker name="timepicker" p-label="PO Timepicker"> </po-timepicker>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),rN(18,"sample-po-timepicker-basic/sample-po-timepicker-basic.component.ts"),og(),Sl(19,"pre",9),rN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-timepicker-basic',
  templateUrl: './sample-po-timepicker-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTimepickerBasicComponent {}
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-timepicker-basic"),og(),Wl(23,"hr")),r&2&&(Lp(5),Gx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),rw("ngClass",gN(4,Te,i.hideSampleCodeTabs)));},dependencies:[SO,Ka,Ume,$me,se],encapsulation:2,changeDetection:1})}return l})();var ge=(()=>{class l{timepicker;event;errorPattern;format;help;helper;modelFormat;label;locale;maxTime;minTime;minuteInterval;secondInterval;placeholder;properties;size;modelFormatOptions=[{label:"HourMinute",value:Z0.HourMinute},{label:"HourMinuteSecond",value:Z0.HourMinuteSecond}];propertiesOptions=[{value:"clean",label:"Clean"},{value:"disabled",label:"Disabled"},{value:"noAutocomplete",label:"No Autocomplete"},{value:"optional",label:"Optional"},{value:"readonly",label:"Read Only"},{value:"required",label:"Required"},{value:"requiredFieldErrorMessage",label:"Required Field Error Message"},{value:"showRequired",label:"Show Required"},{value:"showSeconds",label:"Show Seconds"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"},{value:"loading",label:"Loading"},{value:"compactLabel",label:"Compact Label"},{value:"appendInBody",label:"Append In Body"}];formatOptions=[{label:"24",value:"24"},{label:"12",value:"12"}];localeOptions=[{label:"pt",value:"pt"},{label:"en",value:"en"},{label:"es",value:"es"},{label:"ru",value:"ru"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore();}changeEvent(d){this.event=d;}restore(){this.timepicker=void 0,this.event=void 0,this.errorPattern=void 0,this.format=void 0,this.help=void 0,this.helper=void 0,this.modelFormat=void 0,this.label=void 0,this.locale=void 0,this.maxTime=void 0,this.minTime=void 0,this.minuteInterval=void 0,this.secondInterval=void 0,this.placeholder=void 0,this.properties=[],this.size="medium";}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-timepicker-labs"]],standalone:false,decls:24,vars:49,consts:[["f","ngForm"],["name","timepicker",1,"po-sm-12",3,"ngModelChange","p-blur","p-change","p-keydown","ngModel","p-clean","p-disabled","p-error-pattern","p-format","p-helper","p-help","p-model-format","p-label","p-locale","p-max-time","p-min-time","p-minute-interval","p-second-interval","p-no-autocomplete","p-optional","p-placeholder","p-readonly","p-required","p-required-field-error-message","p-show-required","p-show-seconds","p-label-text-wrap","p-loading","p-compact-label","p-append-in-body","p-error-limit","p-size"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helper","p-clean","","p-label","Helper",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","errorPattern","p-clean","","p-label","Error Pattern",1,"po-md-6",3,"ngModelChange","ngModel"],["name","minTime","p-clean","","p-label","Min Time",1,"po-md-6",3,"ngModelChange","ngModel"],["name","maxTime","p-clean","","p-label","Max Time",1,"po-md-6",3,"ngModelChange","ngModel"],["name","minuteInterval","p-clean","","p-label","Minute Interval",1,"po-md-6",3,"ngModelChange","ngModel"],["name","secondInterval","p-clean","","p-label","Second Interval",1,"po-md-6",3,"ngModelChange","ngModel"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","locale","p-columns","4","p-label","Locale",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","format","p-columns","4","p-label","Format",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","modelFormat","p-columns","4","p-label","Model Format",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","restore","p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(r,i){if(r&1){let s=Ix();Sl(0,"po-timepicker",1),Cw("ngModelChange",function(o){return Ky(s),oN(i.timepicker,o)||(i.timepicker=o),Xy(o)}),ft("p-blur",function(){return i.changeEvent("p-blur")})("p-change",function(){return i.changeEvent("p-change")})("p-keydown",function(){return i.changeEvent("p-keydown")}),og(),n0(),Wl(1,"po-divider"),Sl(2,"div",2),Wl(3,"po-info",3)(4,"po-info",4),og(),Wl(5,"po-divider"),Sl(6,"form",null,0)(8,"po-input",5),Cw("ngModelChange",function(o){return Ky(s),oN(i.label,o)||(i.label=o),Xy(o)}),og(),n0(),Sl(9,"po-input",6),Cw("ngModelChange",function(o){return Ky(s),oN(i.help,o)||(i.help=o),Xy(o)}),og(),n0(),Sl(10,"po-input",7),Cw("ngModelChange",function(o){return Ky(s),oN(i.helper,o)||(i.helper=o),Xy(o)}),og(),n0(),Sl(11,"po-input",8),Cw("ngModelChange",function(o){return Ky(s),oN(i.placeholder,o)||(i.placeholder=o),Xy(o)}),og(),n0(),Sl(12,"po-input",9),Cw("ngModelChange",function(o){return Ky(s),oN(i.errorPattern,o)||(i.errorPattern=o),Xy(o)}),og(),n0(),Sl(13,"po-timepicker",10),Cw("ngModelChange",function(o){return Ky(s),oN(i.minTime,o)||(i.minTime=o),Xy(o)}),og(),n0(),Sl(14,"po-timepicker",11),Cw("ngModelChange",function(o){return Ky(s),oN(i.maxTime,o)||(i.maxTime=o),Xy(o)}),og(),n0(),Sl(15,"po-number",12),Cw("ngModelChange",function(o){return Ky(s),oN(i.minuteInterval,o)||(i.minuteInterval=o),Xy(o)}),og(),n0(),Sl(16,"po-number",13),Cw("ngModelChange",function(o){return Ky(s),oN(i.secondInterval,o)||(i.secondInterval=o),Xy(o)}),og(),n0(),Sl(17,"po-checkbox-group",14),Cw("ngModelChange",function(o){return Ky(s),oN(i.properties,o)||(i.properties=o),Xy(o)}),og(),n0(),Sl(18,"po-radio-group",15),Cw("ngModelChange",function(o){return Ky(s),oN(i.locale,o)||(i.locale=o),Xy(o)}),og(),n0(),Sl(19,"po-radio-group",16),Cw("ngModelChange",function(o){return Ky(s),oN(i.format,o)||(i.format=o),Xy(o)}),og(),n0(),Sl(20,"po-radio-group",17),Cw("ngModelChange",function(o){return Ky(s),oN(i.modelFormat,o)||(i.modelFormat=o),Xy(o)}),og(),n0(),Sl(21,"po-radio-group",18),Cw("ngModelChange",function(o){return Ky(s),oN(i.size,o)||(i.size=o),Xy(o)}),og(),n0(),Sl(22,"div",2)(23,"po-button",19),ft("p-click",function(){return i.restore()}),og()()();}r&2&&(ww("ngModel",i.timepicker),rw("p-clean",i.properties.includes("clean"))("p-disabled",i.properties.includes("disabled"))("p-error-pattern",i.errorPattern)("p-format",i.format)("p-helper",i.helper)("p-help",i.help)("p-model-format",i.modelFormat)("p-label",i.label)("p-locale",i.locale)("p-max-time",i.maxTime)("p-min-time",i.minTime)("p-minute-interval",i.minuteInterval)("p-second-interval",i.secondInterval)("p-no-autocomplete",i.properties==null?null:i.properties.includes("noAutocomplete"))("p-optional",i.properties.includes("optional"))("p-placeholder",i.placeholder)("p-readonly",i.properties.includes("readonly"))("p-required",i.properties.includes("required"))("p-required-field-error-message",i.properties.includes("requiredFieldErrorMessage"))("p-show-required",i.properties.includes("showRequired"))("p-show-seconds",i.properties.includes("showSeconds"))("p-label-text-wrap",i.properties==null?null:i.properties.includes("labelTextWrap"))("p-loading",i.properties.includes("loading"))("p-compact-label",i.properties==null?null:i.properties.includes("compactLabel"))("p-append-in-body",i.properties==null?null:i.properties.includes("appendInBody"))("p-error-limit",i.properties==null?null:i.properties.includes("errorLimit"))("p-size",i.size),i0(),Lp(3),rw("p-value",i.timepicker),Lp(),rw("p-value",i.event),Lp(4),ww("ngModel",i.label),i0(),Lp(),ww("ngModel",i.help),i0(),Lp(),ww("ngModel",i.helper),i0(),Lp(),ww("ngModel",i.placeholder),i0(),Lp(),ww("ngModel",i.errorPattern),i0(),Lp(),ww("ngModel",i.minTime),i0(),Lp(),ww("ngModel",i.maxTime),i0(),Lp(),ww("ngModel",i.minuteInterval),i0(),Lp(),ww("ngModel",i.secondInterval),i0(),Lp(),ww("ngModel",i.properties),rw("p-options",i.propertiesOptions),i0(),Lp(),ww("ngModel",i.locale),rw("p-options",i.localeOptions),i0(),Lp(),ww("ngModel",i.format),rw("p-options",i.formatOptions),i0(),Lp(),ww("ngModel",i.modelFormat),rw("p-options",i.modelFormatOptions),i0(),Lp(),ww("ngModel",i.size),rw("p-options",i.sizeOptions),i0());},dependencies:[Q9,Z9,K9,wk,_k,Qt,mv,b3,L3,Bhe,Tde,bue,jhe],encapsulation:2,changeDetection:1})}return l})();var we=l=>({"docs-sample-code-tabs":l}),he=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-timepicker-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),rN(3,"PO Timepicker Labs"),og(),Sl(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),rN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),rN(12,"sample-po-timepicker-labs/sample-po-timepicker-labs.component.html"),og(),Sl(13,"pre",7),rN(14,`<po-timepicker
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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),rN(18,"sample-po-timepicker-labs/sample-po-timepicker-labs.component.ts"),og(),Sl(19,"pre",9),rN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-timepicker-labs"),og(),Wl(23,"hr")),r&2&&(Lp(5),Gx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),rw("ngClass",gN(4,we,i.hideSampleCodeTabs)));},dependencies:[SO,Ka,Ume,$me,ge],encapsulation:2,changeDetection:1})}return l})();var Pe=["formScheduling"],Se=(()=>{class l{poDialog=f(Ode);poNotification=f(Yp);formScheduling;title="";date=new Date;startTime="";endTime="";room="";roomOptions=[{value:"sala-a",label:"Sala A"},{value:"sala-b",label:"Sala B"},{value:"sala-c",label:"Sala C"},{value:"auditorio",label:"Audit\xF3rio"}];schedule(){let d=`Deseja confirmar o agendamento "${this.title}" no dia ${this.getFormatedDate(this.date)} das ${this.startTime} \xE0s ${this.endTime} na ${this.getRoomLabel()}?`;this.poDialog.confirm({title:"Confirmar Agendamento",message:d,confirm:()=>{this.poNotification.success("Agendamento confirmado com sucesso!"),this.formScheduling.reset({date:"",room:""});},cancel:()=>{this.poNotification.warning("Agendamento cancelado.");}});}getFormatedDate(d){return d&&d.slice(0,10)}getRoomLabel(){let d=this.roomOptions.find(r=>r.value===this.room);return d?d.label:this.room}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-timepicker-scheduling"]],viewQuery:function(r,i){if(r&1&&ql(Pe,7),r&2){let s;lo(s=uo())&&(i.formScheduling=s.first);}},standalone:false,decls:11,vars:9,consts:[["formScheduling","ngForm"],[1,"po-row"],["name","title","p-label","T\xEDtulo do agendamento","p-placeholder","Ex: Reuni\xE3o de planejamento","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","date","p-clean","","p-format","dd/mm/yyyy","p-label","Data","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","startTime","p-label","Hor\xE1rio de in\xEDcio","p-placeholder","HH:mm","p-clean","","p-required","","p-min-time","08:00","p-max-time","18:00","p-error-pattern","Hor\xE1rio fora do expediente (08:00 - 18:00)",1,"po-md-4",3,"ngModelChange","ngModel","p-show-required"],["name","endTime","p-label","Hor\xE1rio de t\xE9rmino","p-placeholder","HH:mm","p-clean","","p-required","","p-min-time","08:00","p-max-time","18:00","p-error-pattern","Hor\xE1rio fora do expediente (08:00 - 18:00)",1,"po-md-4",3,"ngModelChange","ngModel","p-show-required"],["name","room","p-label","Sala","p-required","",1,"po-md-4",3,"ngModelChange","ngModel","p-options"],["name","scheduleButton","p-label","Agendar",1,"po-md-3","po-offset-md-9","po-offset-lg-9",3,"p-click","p-disabled"]],template:function(r,i){if(r&1){let s=Ix();Sl(0,"form",null,0)(2,"div",1)(3,"po-input",2),Cw("ngModelChange",function(o){return Ky(s),oN(i.title,o)||(i.title=o),Xy(o)}),og(),n0(),Sl(4,"po-datepicker",3),Cw("ngModelChange",function(o){return Ky(s),oN(i.date,o)||(i.date=o),Xy(o)}),og(),n0(),og(),Sl(5,"div",1)(6,"po-timepicker",4),Cw("ngModelChange",function(o){return Ky(s),oN(i.startTime,o)||(i.startTime=o),Xy(o)}),og(),n0(),Sl(7,"po-timepicker",5),Cw("ngModelChange",function(o){return Ky(s),oN(i.endTime,o)||(i.endTime=o),Xy(o)}),og(),n0(),Sl(8,"po-select",6),Cw("ngModelChange",function(o){return Ky(s),oN(i.room,o)||(i.room=o),Xy(o)}),og(),n0(),og(),Sl(9,"div",1)(10,"po-button",7),ft("p-click",function(){return i.schedule()}),og()()();}if(r&2){let s=kx(1);Lp(3),ww("ngModel",i.title),i0(),Lp(),ww("ngModel",i.date),i0(),Lp(2),ww("ngModel",i.startTime),rw("p-show-required",true),i0(),Lp(),ww("ngModel",i.endTime),rw("p-show-required",true),i0(),Lp(),ww("ngModel",i.room),rw("p-options",i.roomOptions),i0(),Lp(2),rw("p-disabled",s.invalid);}},dependencies:[Q9,Z9,K9,wk,_k,Qt,Mde,L3,Whe,bue],encapsulation:2,changeDetection:1})}return l})();var He=l=>({"docs-sample-code-tabs":l}),be=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-timepicker-scheduling-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),rN(3,"PO Timepicker - Scheduling"),og(),Sl(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),rN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),rN(12,"sample-po-timepicker-scheduling/sample-po-timepicker-scheduling.component.html"),og(),Sl(13,"pre",7),rN(14,`<form #formScheduling="ngForm">
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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),rN(18,"sample-po-timepicker-scheduling/sample-po-timepicker-scheduling.component.ts"),og(),Sl(19,"pre",9),rN(20,`import { Component, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-timepicker-scheduling"),og(),Wl(23,"hr")),r&2&&(Lp(5),Gx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),rw("ngClass",gN(4,He,i.hideSampleCodeTabs)));},dependencies:[SO,Ka,Ume,$me,Se],encapsulation:2,changeDetection:1})}return l})();var Ee=(()=>{class l{poNotification=f(Yp);openTime="08:00";closeTime="18:00";lunchStart="12:00";lunchEnd="13:00";save(){this.poNotification.success(`Hor\xE1rio comercial salvo: ${this.openTime} - ${this.closeTime} (Almo\xE7o: ${this.lunchStart} - ${this.lunchEnd})`);}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-timepicker-business-hours"]],standalone:false,decls:8,vars:14,consts:[[1,"po-row"],["name","openTime","p-label","Abertura","p-clean","","p-min-time","06:00",1,"po-md-6",3,"ngModelChange","ngModel","p-max-time","p-minute-interval"],["name","closeTime","p-label","Fechamento","p-clean","","p-max-time","23:00",1,"po-md-6",3,"ngModelChange","ngModel","p-min-time","p-minute-interval"],["name","lunchStart","p-label","In\xEDcio do almo\xE7o","p-clean","",1,"po-md-6",3,"ngModelChange","ngModel","p-min-time","p-max-time","p-minute-interval"],["name","lunchEnd","p-label","Fim do almo\xE7o","p-clean","",1,"po-md-6",3,"ngModelChange","ngModel","p-min-time","p-max-time","p-minute-interval"],["p-label","Salvar","p-kind","primary",1,"po-md-3","po-offset-md-9",3,"p-click"]],template:function(r,i){r&1&&(Sl(0,"div",0)(1,"po-timepicker",1),Cw("ngModelChange",function(p){return oN(i.openTime,p)||(i.openTime=p),p}),og(),n0(),Sl(2,"po-timepicker",2),Cw("ngModelChange",function(p){return oN(i.closeTime,p)||(i.closeTime=p),p}),og(),n0(),og(),Sl(3,"div",0)(4,"po-timepicker",3),Cw("ngModelChange",function(p){return oN(i.lunchStart,p)||(i.lunchStart=p),p}),og(),n0(),Sl(5,"po-timepicker",4),Cw("ngModelChange",function(p){return oN(i.lunchEnd,p)||(i.lunchEnd=p),p}),og(),n0(),og(),Sl(6,"div",0)(7,"po-button",5),ft("p-click",function(){return i.save()}),og()()),r&2&&(Lp(),ww("ngModel",i.openTime),rw("p-max-time",i.lunchStart)("p-minute-interval",30),i0(),Lp(),ww("ngModel",i.closeTime),rw("p-min-time",i.lunchEnd)("p-minute-interval",30),i0(),Lp(2),ww("ngModel",i.lunchStart),rw("p-min-time",i.openTime)("p-max-time",i.lunchEnd)("p-minute-interval",15),i0(),Lp(),ww("ngModel",i.lunchEnd),rw("p-min-time",i.lunchStart)("p-max-time",i.closeTime)("p-minute-interval",15),i0());},dependencies:[Z9,wk,Qt,bue],encapsulation:2,changeDetection:1})}return l})();var Be=l=>({"docs-sample-code-tabs":l}),fe=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-timepicker-business-hours-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),rN(3,"PO Timepicker - Business Hours"),og(),Sl(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),rN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),rN(12,"sample-po-timepicker-business-hours/sample-po-timepicker-business-hours.component.html"),og(),Sl(13,"pre",7),rN(14,`<div class="po-row">
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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),rN(18,"sample-po-timepicker-business-hours/sample-po-timepicker-business-hours.component.ts"),og(),Sl(19,"pre",9),rN(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-timepicker-business-hours"),og(),Wl(23,"hr")),r&2&&(Lp(5),Gx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),rw("ngClass",gN(4,Be,i.hideSampleCodeTabs)));},dependencies:[SO,Ka,Ume,$me,Ee],encapsulation:2,changeDetection:1})}return l})();var ve=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-timepicker-doc"]],standalone:false,decls:1006,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","PoTimerFormat"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoTimepickerModelFormat"],["pan","",1,"docs-api-property-type","PoHelperOptions"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"]],template:function(r,i){r&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),rN(3,"import { PoFieldModule } from '@po-ui/ng-components';"),og()(),Sl(4,"div",2)(5,"p"),rN(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),og(),Sl(7,"blockquote")(8,"p"),rN(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),Sl(10,"code"),rN(11,"FormsModule"),og(),rN(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Sl(13,"code"),rN(14,"ReactiveFormsModule"),og(),rN(15,", ambos nativos do Angular."),og()()(),Sl(16,"h3",3),rN(17,"Componente"),og(),Sl(18,"h4",4)(19,"code",5),rN(20,"PoTimepickerComponent"),og()(),Sl(21,"div",2)(22,"p"),rN(23,"O "),Sl(24,"code"),rN(25,"po-timepicker"),og(),rN(26," \xE9 um componente para sele\xE7\xE3o de hor\xE1rio que permite a digita\xE7\xE3o e/ou sele\xE7\xE3o via painel flutuante."),og(),Sl(27,"p"),rN(28,"O formato de exibi\xE7\xE3o do hor\xE1rio pode ser de 24 horas ("),Sl(29,"code"),rN(30,"HH:mm"),og(),rN(31,") ou 12 horas ("),Sl(32,"code"),rN(33,"hh:mm AM/PM"),og(),rN(34,`),
e opcionalmente incluir segundos (`),Sl(35,"code"),rN(36,"HH:mm:ss"),og(),rN(37,")."),og(),Sl(38,"p"),rN(39,"O valor de sa\xEDda segue o formato ISO 8601 para hor\xE1rios ("),Sl(40,"code"),rN(41,"HH:mm"),og(),rN(42," ou "),Sl(43,"code"),rN(44,"HH:mm:ss"),og(),rN(45,")."),og(),Sl(46,"p")(47,"strong"),rN(48,"Importante:"),og()(),Sl(49,"ul")(50,"li"),rN(51,"Caso o valor digitado seja inv\xE1lido, o "),Sl(52,"code"),rN(53,"model"),og(),rN(54," receber\xE1 uma string vazia."),og(),Sl(55,"li"),rN(56,"Caso o "),Sl(57,"code"),rN(58,"input"),og(),rN(59," esteja passando um "),Sl(60,"code"),rN(61,"[(ngModel)]"),og(),rN(62,", mas n\xE3o tenha um "),Sl(63,"code"),rN(64,"name"),og(),rN(65,`, ent\xE3o ir\xE1 ocorrer um erro
do pr\xF3prio Angular (`),Sl(66,"code"),rN(67,'[ngModelOptions]="{standalone: true}"'),og(),rN(68,")."),og()(),Sl(69,"blockquote")(70,"p"),rN(71,"N\xE3o esque\xE7a de importar o "),Sl(72,"code"),rN(73,"FormsModule"),og(),rN(74," em seu m\xF3dulo, tal como para utilizar o "),Sl(75,"code"),rN(76,"input default"),og(),rN(77,"."),og()(),Sl(78,"h4"),rN(79,"Tokens customiz\xE1veis"),og(),Sl(80,"p"),rN(81,`\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),Sl(82,"code"),rN(83,".po-input"),og()(),Sl(84,"blockquote")(85,"p"),rN(86,"Para maiores informa\xE7\xF5es, acesse o guia "),Sl(87,"a",6),rN(88,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),rN(89,"."),og()(),Sl(90,"table")(91,"thead")(92,"tr")(93,"th"),rN(94,"Propriedade"),og(),Sl(95,"th"),rN(96,"Descri\xE7\xE3o"),og(),Sl(97,"th"),rN(98,"Valor Padr\xE3o"),og()()(),Sl(99,"tbody")(100,"tr")(101,"td")(102,"strong"),rN(103,"Default Values"),og()(),Wl(104,"td")(105,"td"),og(),Sl(106,"tr")(107,"td")(108,"code"),rN(109,"--font-family"),og()(),Sl(110,"td"),rN(111,"Fam\xEDlia tipogr\xE1fica usada"),og(),Sl(112,"td")(113,"code"),rN(114,"var(--font-family-theme)"),og()()(),Sl(115,"tr")(116,"td")(117,"code"),rN(118,"--font-size"),og()(),Sl(119,"td"),rN(120,"Tamanho da fonte"),og(),Sl(121,"td")(122,"code"),rN(123,"var(--font-size-default)"),og()()(),Sl(124,"tr")(125,"td")(126,"code"),rN(127,"--text-color-placeholder"),og()(),Sl(128,"td"),rN(129,"Cor do texto placeholder"),og(),Sl(130,"td")(131,"code"),rN(132,"var(--color-neutral-light-30)"),og()()(),Sl(133,"tr")(134,"td")(135,"code"),rN(136,"--color"),og()(),Sl(137,"td"),rN(138,"Cor principal do timepicker"),og(),Sl(139,"td")(140,"code"),rN(141,"var(--color-neutral-dark-70)"),og()()(),Sl(142,"tr")(143,"td")(144,"code"),rN(145,"--background"),og()(),Sl(146,"td"),rN(147,"Cor de background"),og(),Sl(148,"td")(149,"code"),rN(150,"var(--color-neutral-light-05)"),og()()(),Sl(151,"tr")(152,"td")(153,"code"),rN(154,"--padding"),og()(),Sl(155,"td"),rN(156,"Preenchimento"),og(),Sl(157,"td")(158,"code"),rN(159,"0 0.5rem"),og()()(),Sl(160,"tr")(161,"td")(162,"code"),rN(163,"--text-color"),og()(),Sl(164,"td"),rN(165,"Cor do texto"),og(),Sl(166,"td")(167,"code"),rN(168,"var(--color-neutral-dark-90)"),og()()(),Sl(169,"tr")(170,"td")(171,"code"),rN(172,"--field-container-title-justify"),og()(),Sl(173,"td"),rN(174,"Alinhamento horizontal do t\xEDtulo ("),Sl(175,"code"),rN(176,"justify-content"),og(),rN(177,")"),og(),Sl(178,"td")(179,"code"),rN(180,"space-between"),og()()(),Sl(181,"tr")(182,"td")(183,"code"),rN(184,"--field-container-title-flex"),og()(),Sl(185,"td"),rN(186,"Flex do t\xEDtulo ("),Sl(187,"code"),rN(188,"flex"),og(),rN(189,")"),og(),Sl(190,"td")(191,"code"),rN(192,"1 auto"),og()()(),Sl(193,"tr")(194,"td")(195,"strong"),rN(196,"Hover"),og()(),Wl(197,"td")(198,"td"),og(),Sl(199,"tr")(200,"td")(201,"code"),rN(202,"--color-hover"),og()(),Sl(203,"td"),rN(204,"Cor principal no estado hover"),og(),Sl(205,"td")(206,"code"),rN(207,"var(--color-brand-01-dark)"),og()()(),Sl(208,"tr")(209,"td")(210,"code"),rN(211,"--background-hover"),og()(),Sl(212,"td"),rN(213,"Cor de background no estado hover"),og(),Sl(214,"td")(215,"code"),rN(216,"var(--color-brand-01-lightest)"),og()()(),Sl(217,"tr")(218,"td")(219,"strong"),rN(220,"Focused"),og()(),Wl(221,"td")(222,"td"),og(),Sl(223,"tr")(224,"td")(225,"code"),rN(226,"--color-focused"),og()(),Sl(227,"td"),rN(228,"Cor principal no estado de focus"),og(),Sl(229,"td")(230,"code"),rN(231,"var(--color-action-default)"),og()()(),Sl(232,"tr")(233,"td")(234,"code"),rN(235,"--outline-color-focused"),og()(),Sl(236,"td"),rN(237,"Cor do outline do estado de focus"),og(),Sl(238,"td")(239,"code"),rN(240,"var(--color-action-focus)"),og()()(),Sl(241,"tr")(242,"td")(243,"strong"),rN(244,"Disabled"),og()(),Wl(245,"td")(246,"td"),og(),Sl(247,"tr")(248,"td")(249,"code"),rN(250,"--color-disabled"),og()(),Sl(251,"td"),rN(252,"Cor principal no estado disabled"),og(),Sl(253,"td")(254,"code"),rN(255,"var(--color-neutral-light-30)"),og()()(),Sl(256,"tr")(257,"td")(258,"code"),rN(259,"--background-disabled"),og()(),Sl(260,"td"),rN(261,"Cor de background no estado disabled"),og(),Sl(262,"td")(263,"code"),rN(264,"var(--color-neutral-light-20)"),og()()(),Sl(265,"tr")(266,"td")(267,"code"),rN(268,"--text-color-disabled"),og()(),Sl(269,"td"),rN(270,"Cor do texto no estado disabled"),og(),Sl(271,"td")(272,"code"),rN(273,"var(--color-neutral-dark-70)"),og()()()()()(),Sl(274,"div",7)(275,"h4",8),rN(276,"Seletor"),og(),Sl(277,"pre",9),rN(278,`<po-timepicker
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
`),og()(),Sl(279,"h4",10),rN(280,"Propriedades"),og(),Sl(281,"table",11)(282,"tr",12)(283,"th",13),rN(284,"Nome"),og(),Sl(285,"th",13),rN(286,"Tipo"),og(),Sl(287,"th",13),rN(288,"Padr\xE3o"),og(),Sl(289,"th",13),rN(290,"Descri\xE7\xE3o"),og()(),Sl(291,"tr",14)(292,"td",15)(293,"div",16)(294,"span",17),rN(295," p-append-in-body"),Wl(296,"br"),og()()(),Sl(297,"td",18)(298,"code",19),rN(299,"boolean"),og()(),Sl(300,"td",20)(301,"p")(302,"code"),rN(303,"false"),og()()(),Sl(304,"td",21)(305,"em")(306,"strong"),rN(307,"(opcional)"),og()(),Sl(308,"p"),rN(309,"Define que o painel do timer ser\xE1 inclu\xEDdo no body da p\xE1gina."),og()()(),Sl(310,"tr",14)(311,"td",15)(312,"div",16)(313,"span",17),rN(314," p-auto-focus"),Wl(315,"br"),og()()(),Sl(316,"td",18)(317,"code",19),rN(318,"boolean"),og()(),Sl(319,"td",20)(320,"p")(321,"code"),rN(322,"false"),og()()(),Sl(323,"td",21)(324,"em")(325,"strong"),rN(326,"(opcional)"),og()(),Sl(327,"p"),rN(328,"Aplica foco no elemento ao ser iniciado."),og()()(),Sl(329,"tr",14)(330,"td",15)(331,"div",16)(332,"span",17),rN(333,"p-clean"),Wl(334,"br"),og()()(),Sl(335,"td",18)(336,"code",19),rN(337,"boolean"),og()(),Sl(338,"td",20),rN(339,"-"),og(),Sl(340,"td",21)(341,"em")(342,"strong"),rN(343,"(opcional)"),og()(),Sl(344,"p"),rN(345,"Habilita a\xE7\xE3o para limpar o campo."),og()()(),Sl(346,"tr",14)(347,"td",15)(348,"div",16)(349,"span",17),rN(350," p-compact-label"),Wl(351,"br"),og()()(),Sl(352,"td",18)(353,"code",19),rN(354,"boolean"),og()(),Sl(355,"td",20)(356,"p")(357,"code"),rN(358,"false"),og()()(),Sl(359,"td",21)(360,"em")(361,"strong"),rN(362,"(opcional)"),og()(),Sl(363,"p"),rN(364,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),og()()(),Sl(365,"tr",14)(366,"td",15)(367,"div",16)(368,"span",17),rN(369,"p-disabled"),Wl(370,"br"),og()()(),Sl(371,"td",18)(372,"code",19),rN(373,"boolean"),og()(),Sl(374,"td",20),rN(375,"-"),og(),Sl(376,"td",21)(377,"em")(378,"strong"),rN(379,"(opcional)"),og()(),Sl(380,"p"),rN(381,"Desabilita o campo."),og()()(),Sl(382,"tr",14)(383,"td",15)(384,"div",16)(385,"span",17),rN(386," p-error-limit"),Wl(387,"br"),og()()(),Sl(388,"td",18)(389,"code",19),rN(390,"boolean"),og()(),Sl(391,"td",20)(392,"p")(393,"code"),rN(394,"false"),og()()(),Sl(395,"td",21)(396,"em")(397,"strong"),rN(398,"(opcional)"),og()(),Sl(399,"p"),rN(400,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),og()()(),Sl(401,"tr",14)(402,"td",15)(403,"div",16)(404,"span",17),rN(405," p-error-pattern"),Wl(406,"br"),og()()(),Sl(407,"td",18)(408,"code",22),rN(409,"string"),og()(),Sl(410,"td",20),rN(411,"-"),og(),Sl(412,"td",21)(413,"em")(414,"strong"),rN(415,"(opcional)"),og()(),Sl(416,"p"),rN(417,"Mensagem apresentada quando o hor\xE1rio for inv\xE1lido ou fora do per\xEDodo."),og(),Sl(418,"blockquote")(419,"p"),rN(420,"Por padr\xE3o, esta mensagem n\xE3o \xE9 apresentada quando o campo estiver vazio, mesmo que ele seja requerido."),og()()()(),Sl(421,"tr",14)(422,"td",15)(423,"div",16)(424,"span",17),rN(425," p-format"),Wl(426,"br"),og()()(),Sl(427,"td",18)(428,"code",23),rN(429,"PoTimerFormat"),og()(),Sl(430,"td",20)(431,"p")(432,"code"),rN(433,"24"),og()()(),Sl(434,"td",21)(435,"em")(436,"strong"),rN(437,"(opcional)"),og()(),Sl(438,"p"),rN(439,"Define o formato de exibi\xE7\xE3o do timer."),og(),Sl(440,"p"),rN(441,"Valores v\xE1lidos:"),og(),Sl(442,"ul")(443,"li")(444,"code"),rN(445,"24"),og(),rN(446,": formato de 24 horas (padr\xE3o)"),og(),Sl(447,"li")(448,"code"),rN(449,"12"),og(),rN(450,": formato de 12 horas com indicador AM/PM"),og()()()(),Sl(451,"tr",14)(452,"td",15)(453,"div",16)(454,"span",17),rN(455," p-help"),Wl(456,"br"),og()()(),Sl(457,"td",18)(458,"code",22),rN(459,"string"),og()(),Sl(460,"td",20),rN(461,"-"),og(),Sl(462,"td",21)(463,"em")(464,"strong"),rN(465,"(opcional)"),og()(),Sl(466,"p"),rN(467,"Texto de apoio do campo."),og()()(),Sl(468,"tr",14)(469,"td",15)(470,"div",24)(471,"span",25),rN(472," (p-keydown)"),Wl(473,"br"),og()()(),Sl(474,"td",18)(475,"code",26),rN(476,"EventEmitter"),og()(),Sl(477,"td",20),rN(478,"-"),og(),Sl(479,"td",21)(480,"p"),rN(481,"Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente."),og()()(),Sl(482,"tr",14)(483,"td",15)(484,"div",16)(485,"span",17),rN(486," p-label"),Wl(487,"br"),og()()(),Sl(488,"td",18)(489,"code",22),rN(490,"string"),og()(),Sl(491,"td",20),rN(492,"-"),og(),Sl(493,"td",21)(494,"em")(495,"strong"),rN(496,"(opcional)"),og()(),Sl(497,"p"),rN(498,"R\xF3tulo do campo."),og()()(),Sl(499,"tr",14)(500,"td",15)(501,"div",16)(502,"span",17),rN(503," p-label-text-wrap"),Wl(504,"br"),og()()(),Sl(505,"td",18)(506,"code",19),rN(507,"boolean"),og()(),Sl(508,"td",20)(509,"p")(510,"code"),rN(511,"false"),og()()(),Sl(512,"td",21)(513,"em")(514,"strong"),rN(515,"(opcional)"),og()(),Sl(516,"p"),rN(517,"Habilita a quebra autom\xE1tica do texto da propriedade "),Sl(518,"code"),rN(519,"p-label"),og(),rN(520,"."),og()()(),Sl(521,"tr",14)(522,"td",15)(523,"div",16)(524,"span",17),rN(525," p-loading"),Wl(526,"br"),og()()(),Sl(527,"td",18)(528,"code",19),rN(529,"boolean"),og()(),Sl(530,"td",20)(531,"p")(532,"code"),rN(533,"false"),og()()(),Sl(534,"td",21)(535,"em")(536,"strong"),rN(537,"(opcional)"),og()(),Sl(538,"p"),rN(539,"Exibe um \xEDcone de carregamento no lado direito do campo para sinalizar que uma opera\xE7\xE3o est\xE1 em andamento."),og()()(),Sl(540,"tr",14)(541,"td",15)(542,"div",16)(543,"span",17),rN(544," p-locale"),Wl(545,"br"),og()()(),Sl(546,"td",18)(547,"code",22),rN(548,"string"),og()(),Sl(549,"td",20),rN(550,"-"),og(),Sl(551,"td",21)(552,"em")(553,"strong"),rN(554,"(opcional)"),og()(),Sl(555,"p"),rN(556,"Idioma do componente."),og()()(),Sl(557,"tr",14)(558,"td",15)(559,"div",16)(560,"span",17),rN(561," p-max-time"),Wl(562,"br"),og()()(),Sl(563,"td",18)(564,"code",22),rN(565,"string"),og()(),Sl(566,"td",20),rN(567,"-"),og(),Sl(568,"td",21)(569,"em")(570,"strong"),rN(571,"(opcional)"),og()(),Sl(572,"p"),rN(573,"Define o hor\xE1rio m\xE1ximo permitido. Formato: "),Sl(574,"code"),rN(575,"HH:mm"),og(),rN(576," ou "),Sl(577,"code"),rN(578,"HH:mm:ss"),og(),rN(579,"."),og()()(),Sl(580,"tr",14)(581,"td",15)(582,"div",16)(583,"span",17),rN(584," p-min-time"),Wl(585,"br"),og()()(),Sl(586,"td",18)(587,"code",22),rN(588,"string"),og()(),Sl(589,"td",20),rN(590,"-"),og(),Sl(591,"td",21)(592,"em")(593,"strong"),rN(594,"(opcional)"),og()(),Sl(595,"p"),rN(596,"Define o hor\xE1rio m\xEDnimo permitido. Formato: "),Sl(597,"code"),rN(598,"HH:mm"),og(),rN(599," ou "),Sl(600,"code"),rN(601,"HH:mm:ss"),og(),rN(602,"."),og()()(),Sl(603,"tr",14)(604,"td",15)(605,"div",16)(606,"span",17),rN(607," p-minute-interval"),Wl(608,"br"),og()()(),Sl(609,"td",18)(610,"code",27),rN(611,"number"),og()(),Sl(612,"td",20)(613,"p")(614,"code"),rN(615,"5"),og()()(),Sl(616,"td",21)(617,"em")(618,"strong"),rN(619,"(opcional)"),og()(),Sl(620,"p"),rN(621,"Define o intervalo entre os minutos exibidos no painel."),og()()(),Sl(622,"tr",14)(623,"td",15)(624,"div",16)(625,"span",17),rN(626," p-model-format"),Wl(627,"br"),og()()(),Sl(628,"td",18)(629,"code",28),rN(630,"PoTimepickerModelFormat"),og()(),Sl(631,"td",20),rN(632,"-"),og(),Sl(633,"td",21)(634,"em")(635,"strong"),rN(636,"(opcional)"),og()(),Sl(637,"p"),rN(638,"Padr\xE3o de formata\xE7\xE3o para sa\xEDda do "),Sl(639,"em"),rN(640,"model"),og(),rN(641,"."),og(),Sl(642,"blockquote")(643,"p"),rN(644,"Veja os valores v\xE1lidos no "),Sl(645,"em"),rN(646,"enum"),og(),Sl(647,"code"),rN(648,"PoTimepickerModelFormat"),og(),rN(649,"."),og()()()(),Sl(650,"tr",14)(651,"td",15)(652,"div",16)(653,"span",17),rN(654," name"),Wl(655,"br"),og()()(),Sl(656,"td",18)(657,"code",22),rN(658,"string"),og()(),Sl(659,"td",20),rN(660,"-"),og(),Sl(661,"td",21)(662,"p"),rN(663,"Nome do componente."),og()()(),Sl(664,"tr",14)(665,"td",15)(666,"div",16)(667,"span",17),rN(668," p-no-autocomplete"),Wl(669,"br"),og()()(),Sl(670,"td",18)(671,"code",19),rN(672,"boolean"),og()(),Sl(673,"td",20)(674,"p")(675,"code"),rN(676,"false"),og()()(),Sl(677,"td",21)(678,"em")(679,"strong"),rN(680,"(opcional)"),og()(),Sl(681,"p"),rN(682,"Define a propriedade nativa "),Sl(683,"code"),rN(684,"autocomplete"),og(),rN(685," do campo como "),Sl(686,"code"),rN(687,"off"),og(),rN(688,"."),og()()(),Sl(689,"tr",14)(690,"td",15)(691,"div",24)(692,"span",25),rN(693," (p-blur)"),Wl(694,"br"),og()()(),Sl(695,"td",18)(696,"code",26),rN(697,"EventEmitter"),og()(),Sl(698,"td",20),rN(699,"-"),og(),Sl(700,"td",21)(701,"p"),rN(702,"Evento disparado ao sair do campo."),og()()(),Sl(703,"tr",14)(704,"td",15)(705,"div",24)(706,"span",25),rN(707," (p-change)"),Wl(708,"br"),og()()(),Sl(709,"td",18)(710,"code",26),rN(711,"EventEmitter"),og()(),Sl(712,"td",20),rN(713,"-"),og(),Sl(714,"td",21)(715,"p"),rN(716,"Evento disparado ao alterar valor do campo."),og()()(),Sl(717,"tr",14)(718,"td",15)(719,"div",16)(720,"span",17),rN(721," p-optional"),Wl(722,"br"),og()()(),Sl(723,"td",18)(724,"code",19),rN(725,"boolean"),og()(),Sl(726,"td",20)(727,"p")(728,"code"),rN(729,"false"),og()()(),Sl(730,"td",21)(731,"em")(732,"strong"),rN(733,"(opcional)"),og()(),Sl(734,"p"),rN(735,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),og()()(),Sl(736,"tr",14)(737,"td",15)(738,"div",16)(739,"span",17),rN(740," p-placeholder"),Wl(741,"br"),og()()(),Sl(742,"td",18)(743,"code",22),rN(744,"string"),og()(),Sl(745,"td",20),rN(746,"-"),og(),Sl(747,"td",21)(748,"em")(749,"strong"),rN(750,"(opcional)"),og()(),Sl(751,"p"),rN(752,"Mensagem que aparecer\xE1 enquanto o campo n\xE3o estiver preenchido."),og(),Sl(753,"p"),rN(754,"Para personalizar os segmentos, informe o valor no formato "),Sl(755,"code"),rN(756,"HH:mm"),og(),rN(757," ou "),Sl(758,"code"),rN(759,"HH:mm:ss"),og(),rN(760,"."),og()()(),Sl(761,"tr",14)(762,"td",15)(763,"div",16)(764,"span",17),rN(765," p-helper"),Wl(766,"br"),og()()(),Sl(767,"td",18)(768,"code",29),rN(769,"PoHelperOptions "),og(),Sl(770,"code",22),rN(771," string"),og()(),Sl(772,"td",20),rN(773,"-"),og(),Sl(774,"td",21)(775,"em")(776,"strong"),rN(777,"(opcional)"),og()(),Sl(778,"p"),rN(779,"Define as op\xE7\xF5es do componente de ajuda (po-helper)."),og()()(),Sl(780,"tr",14)(781,"td",15)(782,"div",16)(783,"span",17),rN(784,"p-readonly"),Wl(785,"br"),og()()(),Sl(786,"td",18)(787,"code",19),rN(788,"boolean"),og()(),Sl(789,"td",20),rN(790,"-"),og(),Sl(791,"td",21)(792,"em")(793,"strong"),rN(794,"(opcional)"),og()(),Sl(795,"p"),rN(796,"Torna o elemento somente leitura."),og()()(),Sl(797,"tr",14)(798,"td",15)(799,"div",16)(800,"span",17),rN(801,"p-required"),Wl(802,"br"),og()()(),Sl(803,"td",18)(804,"code",19),rN(805,"boolean"),og()(),Sl(806,"td",20)(807,"p")(808,"code"),rN(809,"false"),og()()(),Sl(810,"td",21)(811,"em")(812,"strong"),rN(813,"(opcional)"),og()(),Sl(814,"p"),rN(815,"Define que o campo ser\xE1 obrigat\xF3rio."),og()()(),Sl(816,"tr",14)(817,"td",15)(818,"div",16)(819,"span",17),rN(820," p-second-interval"),Wl(821,"br"),og()()(),Sl(822,"td",18)(823,"code",27),rN(824,"number"),og()(),Sl(825,"td",20)(826,"p")(827,"code"),rN(828,"1"),og()()(),Sl(829,"td",21)(830,"em")(831,"strong"),rN(832,"(opcional)"),og()(),Sl(833,"p"),rN(834,"Define o intervalo entre os segundos exibidos no painel."),og()()(),Sl(835,"tr",14)(836,"td",15)(837,"div",16)(838,"span",17),rN(839," p-required-field-error-message"),Wl(840,"br"),og()()(),Sl(841,"td",18)(842,"code",19),rN(843,"boolean"),og()(),Sl(844,"td",20)(845,"p")(846,"code"),rN(847,"false"),og()()(),Sl(848,"td",21)(849,"em")(850,"strong"),rN(851,"(opcional)"),og()(),Sl(852,"p"),rN(853,"Exibe a mensagem setada na propriedade "),Sl(854,"code"),rN(855,"p-error-pattern"),og(),rN(856," se o campo estiver vazio e for requerido."),og()()(),Sl(857,"tr",14)(858,"td",15)(859,"div",16)(860,"span",17),rN(861," p-show-required"),Wl(862,"br"),og()()(),Sl(863,"td",18)(864,"code",19),rN(865,"boolean"),og()(),Sl(866,"td",20),rN(867,"-"),og(),Sl(868,"td",21)(869,"p"),rN(870,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),og()()(),Sl(871,"tr",14)(872,"td",15)(873,"div",16)(874,"span",17),rN(875," p-show-seconds"),Wl(876,"br"),og()()(),Sl(877,"td",18)(878,"code",19),rN(879,"boolean"),og()(),Sl(880,"td",20)(881,"p")(882,"code"),rN(883,"false"),og()()(),Sl(884,"td",21)(885,"em")(886,"strong"),rN(887,"(opcional)"),og()(),Sl(888,"p"),rN(889,"Exibe a coluna de segundos no painel."),og()()(),Sl(890,"tr",14)(891,"td",15)(892,"div",16)(893,"span",17),rN(894," p-size"),Wl(895,"br"),og()()(),Sl(896,"td",18)(897,"code",22),rN(898,"string"),og()(),Sl(899,"td",20)(900,"p")(901,"code"),rN(902,"medium"),og()()(),Sl(903,"td",21)(904,"em")(905,"strong"),rN(906,"(opcional)"),og()(),Sl(907,"p"),rN(908,"Define o tamanho do componente:"),og(),Sl(909,"ul")(910,"li")(911,"code"),rN(912,"small"),og(),rN(913,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),og(),Sl(914,"li")(915,"code"),rN(916,"medium"),og(),rN(917,": altura do input como 44px."),og()()()()(),Sl(918,"h3",10),rN(919,"M\xE9todos"),og(),Sl(920,"table",30)(921,"tr",14)(922,"th",31)(923,"div",16)(924,"h4")(925,"span",17),rN(926," focus "),og()()()()(),Sl(927,"tr",21)(928,"td",21)(929,"p"),rN(930,"Fun\xE7\xE3o que atribui foco ao componente."),og(),Sl(931,"p"),rN(932,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),og(),Sl(933,"pre")(934,"code"),rN(935,`import { PoTimepickerComponent } from '@po-ui/ng-components';

...

@ViewChild(PoTimepickerComponent, { static: true }) timepicker: PoTimepickerComponent;

focusTimepicker() {
  this.timepicker.focus();
}
`),og()()()()(),Wl(936,"br"),Sl(937,"table",30)(938,"tr",14)(939,"th",31)(940,"div",16)(941,"h4")(942,"span",17),rN(943," showAdditionalHelp "),og()()()()(),Sl(944,"tr",21)(945,"td",21)(946,"p"),rN(947,"M\xE9todo que exibe "),Sl(948,"code"),rN(949,"p-helper"),og(),rN(950," ou executa a a\xE7\xE3o definida em "),Sl(951,"code"),rN(952,"p-helper{eventOnClick}"),og(),rN(953," ou em "),Sl(954,"code"),rN(955,"p-additionalHelp"),og(),rN(956,"."),og()()()(),Wl(957,"br"),Sl(958,"h3"),rN(959,"Enums"),og(),Sl(960,"h4",4)(961,"code",5),rN(962,"PoTimepickerModelFormat"),og()(),Sl(963,"div",2)(964,"p")(965,"em"),rN(966,"Enum"),og(),rN(967," que define o padr\xE3o de formata\xE7\xE3o do model de sa\xEDda do timepicker."),og()(),Sl(968,"h4",10),rN(969,"Propriedades"),og(),Sl(970,"table",11)(971,"tr",12)(972,"th",13),rN(973,"Nome"),og(),Sl(974,"th",13),rN(975,"Descri\xE7\xE3o"),og()(),Sl(976,"tr",14)(977,"td",15)(978,"div",16)(979,"span",17),rN(980," HourMinute"),Wl(981,"br"),og()()(),Sl(982,"td",21)(983,"p"),rN(984,"Formato b\xE1sico "),Sl(985,"code"),rN(986,"HH:mm"),og(),rN(987," (ex: "),Sl(988,"code"),rN(989,"14:30"),og(),rN(990,")."),og()()(),Sl(991,"tr",14)(992,"td",15)(993,"div",16)(994,"span",17),rN(995," HourMinuteSecond"),Wl(996,"br"),og()()(),Sl(997,"td",21)(998,"p"),rN(999,"Formato com segundos "),Sl(1e3,"code"),rN(1001,"HH:mm:ss"),og(),rN(1002," (ex: "),Sl(1003,"code"),rN(1004,"14:30:00"),og(),rN(1005,")."),og()()()()());},dependencies:[Ka],encapsulation:2,changeDetection:1})}return l})();var Ce=(()=>{class l{route;router;sub;hidePoWebSample=true;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(d,r){this.route=d,this.router=r;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let r=d.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:"merge"}),this.activeTab=d;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(r){return new(r||l)(w(Xn),w(En))};static \u0275cmp=Un({type:l,selectors:[["ng-component"]],standalone:false,decls:9,vars:4,consts:[["p-title","Timepicker",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,i){r&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return i.changeTab("doc")}),Wl(3,"sample-po-timepicker-doc"),og(),Sl(4,"po-tab",3),ft("p-click",function(){return i.changeTab("web")}),Wl(5,"sample-po-timepicker-basic-view")(6,"sample-po-timepicker-labs-view")(7,"sample-po-timepicker-scheduling-view")(8,"sample-po-timepicker-business-hours-view"),og()()()),r&2&&(rw("p-actions",i.actions),Lp(2),rw("p-active",i.activeTab==="doc"),Lp(2),rw("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[sNe,Ume,$me,ce,he,be,fe,ve],encapsulation:2,changeDetection:1})}return l})();var Ve=[{path:"",component:Ce}],xe=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275mod=fe$1({type:l});static \u0275inj=ue({imports:[mL.forChild(Ve),mL]})}return l})();var Ct=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275mod=fe$1({type:l});static \u0275inj=ue({imports:[sr,xe]})}return l})();export{Ct as DocPoTimepickerModule};