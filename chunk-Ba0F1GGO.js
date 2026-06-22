import {f as fe,u as ue,s as sr,h as hL,w,c3 as Xn,E as En,U as Un,cp as Rhe,H as Wl,an as CO,aH as Ka,b8 as Bme,b9 as qme,F as Sl,z as eN,J as og,a1 as ft,L as Lp,ar as $x,au as dg,Q as nw,bs as fN,aX as Z9,aF as G9,aY as q9,aG as _k,aZ as mk,b0 as Qt,b1 as mv,c4 as b3,b4 as L3,c8 as wde,aJ as Hhe,c9 as Ghe,aB as wx,aM as ww,aN as e0,aO as Ew,aP as n0,bd as Nx,a3 as rNe,aD as Ky,aT as nN,aE as Xy}from'./main-WP3NAV7C.js';var te=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-number-basic"]],standalone:false,decls:1,vars:0,consts:[["name","number","p-label","PO Number"]],template:function(r,i){r&1&&Wl(0,"po-number",0);},dependencies:[Rhe],encapsulation:2,changeDetection:1})}return l})();var ce=l=>({"docs-sample-code-tabs":l}),ie=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-number-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Number Basic"),og(),Sl(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-number-basic/sample-po-number-basic.component.html"),og(),Sl(13,"pre",7),eN(14,`<po-number name="number" p-label="PO Number"> </po-number>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-number-basic/sample-po-number-basic.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-number-basic',
  templateUrl: './sample-po-number-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoNumberBasicComponent {}
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-number-basic"),og(),Wl(23,"hr")),r&2&&(Lp(5),$x("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,ce,i.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,te],encapsulation:2})}return l})();var oe=(()=>{class l{helperText;event;messageErrorPattern;help;icon;label;max;maxlength;min;minlength;number;placeholder;properties;size;step;iconOptions=[{value:"an an-currency-circle-dollar",label:"an an-currency-circle-dollar"},{value:"an an-currency-btc",label:"an an-currency-btc"},{value:"fa fa-calculator",label:"fa fa-calculator"}];propertiesOptions=[{value:"clean",label:"Clean"},{value:"disabled",label:"Disabled"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"},{value:"compactLabel",label:"Compact Label"},{value:"loading",label:"Loading"},{value:"noAutocomplete",label:"No Autocomplete"},{value:"optional",label:"Optional"},{value:"readonly",label:"Read Only"},{value:"required",label:"Required"},{value:"requiredFieldErrorMessage",label:"Required Field Error Message"},{value:"showRequired",label:"Show Required"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore();}changeEvent(d){this.event=d;}restore(){this.helperText="",this.number=void 0,this.max=void 0,this.maxlength=void 0,this.min=void 0,this.minlength=void 0,this.event="",this.messageErrorPattern="",this.label=void 0,this.placeholder="",this.help="",this.icon="",this.size="medium",this.step=void 0,this.properties=[];}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-number-labs"]],standalone:false,decls:23,vars:43,consts:[["f","ngForm"],["name","PO number",1,"po-md-12",3,"ngModelChange","p-blur","p-change","p-change-model","p-keydown","ngModel","p-helper","p-clean","p-disabled","p-error-pattern","p-help","p-icon","p-label","p-loading","p-max","p-maxlength","p-min","p-minlength","p-no-autocomplete","p-optional","p-placeholder","p-readonly","p-required","p-required-field-error-message","p-show-required","p-size","p-step","p-error-limit","p-label-text-wrap","p-compact-label"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","messageErrorPattern","p-clean","","p-label","Message error pattern",1,"po-md-6",3,"ngModelChange","ngModel"],["name","min","p-clean","","p-label","Min",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","minlength","p-clean","","p-label","Minlength",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","max","p-clean","","p-label","Max",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","maxlength","p-clean","","p-label","Maxlength",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","step","p-clean","","p-label","Step",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","icon","p-clean","","p-label","Icon",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel","p-options"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(r,i){if(r&1){let p=wx();Sl(0,"po-number",1),ww("ngModelChange",function(o){return Ky(p),nN(i.number,o)||(i.number=o),Xy(o)}),ft("p-blur",function(){return i.changeEvent("p-blur")})("p-change",function(){return i.changeEvent("p-change")})("p-change-model",function(){return i.changeEvent("p-change-model")})("p-keydown",function(){return i.changeEvent("p-keydown")}),og(),e0(),Wl(1,"po-divider"),Sl(2,"div",2),Wl(3,"po-info",3)(4,"po-info",4),og(),Wl(5,"po-divider"),Sl(6,"form",null,0)(8,"po-input",5),ww("ngModelChange",function(o){return Ky(p),nN(i.label,o)||(i.label=o),Xy(o)}),og(),e0(),Sl(9,"po-input",6),ww("ngModelChange",function(o){return Ky(p),nN(i.help,o)||(i.help=o),Xy(o)}),og(),e0(),Sl(10,"po-input",7),ww("ngModelChange",function(o){return Ky(p),nN(i.helperText,o)||(i.helperText=o),Xy(o)}),og(),e0(),Sl(11,"po-input",8),ww("ngModelChange",function(o){return Ky(p),nN(i.placeholder,o)||(i.placeholder=o),Xy(o)}),og(),e0(),Sl(12,"po-input",9),ww("ngModelChange",function(o){return Ky(p),nN(i.messageErrorPattern,o)||(i.messageErrorPattern=o),Xy(o)}),og(),e0(),Sl(13,"po-number",10),ww("ngModelChange",function(o){return Ky(p),nN(i.min,o)||(i.min=o),Xy(o)}),og(),e0(),Sl(14,"po-number",11),ww("ngModelChange",function(o){return Ky(p),nN(i.minlength,o)||(i.minlength=o),Xy(o)}),og(),e0(),Sl(15,"po-number",12),ww("ngModelChange",function(o){return Ky(p),nN(i.max,o)||(i.max=o),Xy(o)}),og(),e0(),Sl(16,"po-number",13),ww("ngModelChange",function(o){return Ky(p),nN(i.maxlength,o)||(i.maxlength=o),Xy(o)}),og(),e0(),Sl(17,"po-number",14),ww("ngModelChange",function(o){return Ky(p),nN(i.step,o)||(i.step=o),Xy(o)}),og(),e0(),Sl(18,"po-select",15),ww("ngModelChange",function(o){return Ky(p),nN(i.icon,o)||(i.icon=o),Xy(o)}),og(),e0(),Sl(19,"po-checkbox-group",16),ww("ngModelChange",function(o){return Ky(p),nN(i.properties,o)||(i.properties=o),Xy(o)}),og(),e0(),Sl(20,"po-radio-group",17),ww("ngModelChange",function(o){return Ky(p),nN(i.size,o)||(i.size=o),Xy(o)}),og(),e0(),Sl(21,"div",2)(22,"po-button",18),ft("p-click",function(){return i.restore()}),og()()();}r&2&&(Ew("ngModel",i.number),nw("p-helper",i.helperText)("p-clean",i.properties.includes("clean"))("p-disabled",i.properties.includes("disabled"))("p-error-pattern",i.messageErrorPattern)("p-help",i.help)("p-icon",i.icon)("p-label",i.label)("p-loading",i.properties==null?null:i.properties.includes("loading"))("p-max",i.max)("p-maxlength",i.maxlength)("p-min",i.min)("p-minlength",i.minlength)("p-no-autocomplete",i.properties==null?null:i.properties.includes("noAutocomplete"))("p-optional",i.properties.includes("optional"))("p-placeholder",i.placeholder)("p-readonly",i.properties.includes("readonly"))("p-required",i.properties.includes("required"))("p-required-field-error-message",i.properties.includes("requiredFieldErrorMessage"))("p-show-required",i.properties.includes("showRequired"))("p-size",i.size)("p-step",i.step)("p-error-limit",i.properties==null?null:i.properties.includes("errorLimit"))("p-label-text-wrap",i.properties==null?null:i.properties.includes("labelTextWrap"))("p-compact-label",i.properties==null?null:i.properties.includes("compactLabel")),n0(),Lp(3),nw("p-value",i.number),Lp(),nw("p-value",i.event),Lp(4),Ew("ngModel",i.label),n0(),Lp(),Ew("ngModel",i.help),n0(),Lp(),Ew("ngModel",i.helperText),n0(),Lp(),Ew("ngModel",i.placeholder),n0(),Lp(),Ew("ngModel",i.messageErrorPattern),n0(),Lp(),Ew("ngModel",i.min),n0(),Lp(),Ew("ngModel",i.minlength),n0(),Lp(),Ew("ngModel",i.max),n0(),Lp(),Ew("ngModel",i.maxlength),n0(),Lp(),Ew("ngModel",i.step),n0(),Lp(),Ew("ngModel",i.icon),nw("p-options",i.iconOptions),n0(),Lp(),Ew("ngModel",i.properties),nw("p-options",i.propertiesOptions),n0(),Lp(),Ew("ngModel",i.size),nw("p-options",i.sizeOptions),n0());},dependencies:[Z9,G9,q9,_k,mk,Qt,mv,b3,L3,Rhe,wde,Hhe,Ghe],encapsulation:2,changeDetection:1})}return l})();var ge=l=>({"docs-sample-code-tabs":l}),ae=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-number-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Number Labs"),og(),Sl(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-number-labs/sample-po-number-labs.component.html"),og(),Sl(13,"pre",7),eN(14,`<po-number
  class="po-md-12"
  name="PO number"
  [(ngModel)]="number"
  [p-helper]="helperText"
  [p-clean]="properties.includes('clean')"
  [p-disabled]="properties.includes('disabled')"
  [p-error-pattern]="messageErrorPattern"
  [p-help]="help"
  [p-icon]="icon"
  [p-label]="label"
  [p-loading]="$safeNavigationMigration(properties?.includes('loading'))"
  [p-max]="max"
  [p-maxlength]="maxlength"
  [p-min]="min"
  [p-minlength]="minlength"
  [p-no-autocomplete]="$safeNavigationMigration(properties?.includes('noAutocomplete'))"
  [p-optional]="properties.includes('optional')"
  [p-placeholder]="placeholder"
  [p-readonly]="properties.includes('readonly')"
  [p-required]="properties.includes('required')"
  [p-required-field-error-message]="properties.includes('requiredFieldErrorMessage')"
  [p-show-required]="properties.includes('showRequired')"
  [p-size]="size"
  [p-step]="step"
  (p-blur)="changeEvent('p-blur')"
  (p-change)="changeEvent('p-change')"
  (p-change-model)="changeEvent('p-change-model')"
  (p-keydown)="changeEvent('p-keydown')"
  [p-error-limit]="$safeNavigationMigration(properties?.includes('errorLimit'))"
  [p-label-text-wrap]="$safeNavigationMigration(properties?.includes('labelTextWrap'))"
  [p-compact-label]="$safeNavigationMigration(properties?.includes('compactLabel'))"
>
</po-number>

<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="number"> </po-info>
  <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
</div>

<po-divider />

<form #f="ngForm">
  <po-input class="po-md-6" name="label" [(ngModel)]="label" p-clean p-label="Label"> </po-input>

  <po-input class="po-md-6" name="help" [(ngModel)]="help" p-clean p-label="Help"> </po-input>

  <po-input class="po-md-6" name="helperText" [(ngModel)]="helperText" p-clean p-label="Additional Help"> </po-input>

  <po-input class="po-md-6" name="placeholder" [(ngModel)]="placeholder" p-clean p-label="Placeholder"> </po-input>

  <po-input
    class="po-md-6"
    name="messageErrorPattern"
    [(ngModel)]="messageErrorPattern"
    p-clean
    p-label="Message error pattern"
  >
  </po-input>

  <po-number class="po-md-6 po-lg-3" name="min" [(ngModel)]="min" p-clean p-label="Min"> </po-number>

  <po-number class="po-md-6 po-lg-3" name="minlength" [(ngModel)]="minlength" p-clean p-label="Minlength"> </po-number>

  <po-number class="po-md-6 po-lg-3" name="max" [(ngModel)]="max" p-clean p-label="Max"> </po-number>

  <po-number class="po-md-6 po-lg-3" name="maxlength" [(ngModel)]="maxlength" p-clean p-label="Maxlength"> </po-number>

  <po-number class="po-md-6 po-lg-3" name="step" [(ngModel)]="step" p-clean p-label="Step"> </po-number>

  <po-select class="po-md-6 po-lg-3" name="icon" [(ngModel)]="icon" p-clean p-label="Icon" [p-options]="iconOptions">
  </po-select>

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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-number-labs/sample-po-number-labs.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { PoCheckboxGroupOption, PoRadioGroupOption, PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-number-labs',
  templateUrl: './sample-po-number-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoNumberLabsComponent implements OnInit {
  helperText: string;
  event: string;
  messageErrorPattern: string;
  help: string;
  icon: string;
  label: string;
  max: number;
  maxlength: number;
  min: number;
  minlength: number;
  number: number;
  placeholder: string;
  properties: Array<string>;
  size: string;
  step: string;

  public readonly iconOptions: Array<PoSelectOption> = [
    { value: 'an an-currency-circle-dollar', label: 'an an-currency-circle-dollar' },
    { value: 'an an-currency-btc', label: 'an an-currency-btc' },
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

  ngOnInit() {
    this.restore();
  }

  changeEvent(event: string) {
    this.event = event;
  }

  restore() {
    this.helperText = '';
    this.number = undefined;
    this.max = undefined;
    this.maxlength = undefined;
    this.min = undefined;
    this.minlength = undefined;
    this.event = '';
    this.messageErrorPattern = '';
    this.label = undefined;
    this.placeholder = '';
    this.help = '';
    this.icon = '';
    this.size = 'medium';
    this.step = undefined;
    this.properties = [];
  }
}
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-number-labs"),og(),Wl(23,"hr")),r&2&&(Lp(5),$x("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,ge,i.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,oe],encapsulation:2})}return l})();var le=(()=>{class l{icms;liquid;price;quantity;state;total;statesOptions=[{value:18,label:"S\xE3o Paulo"},{value:17,label:"Alagoas"},{value:15,label:"Cear\xE1"}];calculate(){let d=this.price*this.quantity;this.liquid=d,this.total=d+d*(this.state/100);}loadICMS(){this.icms=this.state;}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-number-calculate"]],standalone:false,decls:16,vars:9,consts:[["f","ngForm"],[1,"po-row"],["name","price","p-label","Price","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","quantity","p-label","Quantity","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","state","p-label","State","p-required","","p-sort","",1,"po-md-6","po-lg-3",3,"ngModelChange","p-change","ngModel","p-options"],["name","icms","p-label","ICMS %","p-disabled","",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","liquid","p-label","Liquid","p-disabled","",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","total","p-label","Total","p-disabled","",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["p-label","Calculate",1,"po-md-3",3,"p-click","p-disabled"],["p-label","Clean",1,"po-md-3",3,"p-click","p-disabled"]],template:function(r,i){if(r&1){let p=wx();Sl(0,"h3"),eN(1,"Calculate Tax"),og(),Wl(2,"po-divider"),Sl(3,"form",null,0)(5,"div",1)(6,"po-number",2),ww("ngModelChange",function(o){return Ky(p),nN(i.price,o)||(i.price=o),Xy(o)}),og(),e0(),Sl(7,"po-number",3),ww("ngModelChange",function(o){return Ky(p),nN(i.quantity,o)||(i.quantity=o),Xy(o)}),og(),e0(),og(),Sl(8,"div")(9,"po-select",4),ww("ngModelChange",function(o){return Ky(p),nN(i.state,o)||(i.state=o),Xy(o)}),ft("p-change",function(){return i.loadICMS()}),og(),e0(),Sl(10,"po-number",5),ww("ngModelChange",function(o){return Ky(p),nN(i.icms,o)||(i.icms=o),Xy(o)}),og(),e0(),Sl(11,"po-number",6),ww("ngModelChange",function(o){return Ky(p),nN(i.liquid,o)||(i.liquid=o),Xy(o)}),og(),e0(),Sl(12,"po-number",7),ww("ngModelChange",function(o){return Ky(p),nN(i.total,o)||(i.total=o),Xy(o)}),og(),e0(),og(),Sl(13,"div",1)(14,"po-button",8),ft("p-click",function(){return i.calculate()}),og(),Sl(15,"po-button",9),ft("p-click",function(){Ky(p);let o=Nx(4);return Xy(o.reset())}),og()()();}if(r&2){let p=Nx(4);Lp(6),Ew("ngModel",i.price),n0(),Lp(),Ew("ngModel",i.quantity),n0(),Lp(2),Ew("ngModel",i.state),nw("p-options",i.statesOptions),n0(),Lp(),Ew("ngModel",i.icms),n0(),Lp(),Ew("ngModel",i.liquid),n0(),Lp(),Ew("ngModel",i.total),n0(),Lp(2),nw("p-disabled",p.invalid),Lp(),nw("p-disabled",p.invalid);}},dependencies:[Z9,G9,q9,_k,mk,Qt,mv,Rhe,Hhe],encapsulation:2,changeDetection:1})}return l})();var he=l=>({"docs-sample-code-tabs":l}),re=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-number-calculate-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Number - Calculate"),og(),Sl(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-number-calculate/sample-po-number-calculate.component.html"),og(),Sl(13,"pre",7),eN(14,`<h3>Calculate Tax</h3>

<po-divider />

<form #f="ngForm">
  <div class="po-row">
    <po-number class="po-md-6" name="price" [(ngModel)]="price" p-label="Price" p-required> </po-number>

    <po-number class="po-md-6" name="quantity" [(ngModel)]="quantity" p-label="Quantity" p-required> </po-number>
  </div>

  <div>
    <po-select
      class="po-md-6 po-lg-3"
      name="state"
      [(ngModel)]="state"
      p-label="State"
      p-required
      p-sort
      [p-options]="statesOptions"
      (p-change)="loadICMS()"
    >
    </po-select>

    <po-number class="po-md-6 po-lg-3" name="icms" [(ngModel)]="icms" p-label="ICMS %" p-disabled> </po-number>

    <po-number class="po-md-6 po-lg-3" name="liquid" [(ngModel)]="liquid" p-label="Liquid" p-disabled> </po-number>

    <po-number class="po-md-6 po-lg-3" name="total" [(ngModel)]="total" p-label="Total" p-disabled> </po-number>
  </div>

  <div class="po-row">
    <po-button class="po-md-3" p-label="Calculate" [p-disabled]="f.invalid" (p-click)="calculate()"> </po-button>

    <po-button class="po-md-3" p-label="Clean" [p-disabled]="f.invalid" (p-click)="f.reset()"> </po-button>
  </div>
</form>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-number-calculate/sample-po-number-calculate.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

import { PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-number-calculate',
  templateUrl: './sample-po-number-calculate.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoNumberCalculateComponent {
  icms: number;
  liquid: number;
  price: number;
  quantity: number;
  state: number;
  total: number;

  public readonly statesOptions: Array<PoSelectOption> = [
    { value: 18, label: 'S\xE3o Paulo' },
    { value: 17, label: 'Alagoas' },
    { value: 15, label: 'Cear\xE1' }
  ];

  calculate() {
    const realPrice = this.price * this.quantity;
    this.liquid = realPrice;
    this.total = realPrice + realPrice * (this.state / 100);
  }

  loadICMS() {
    this.icms = this.state;
  }
}
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-number-calculate"),og(),Wl(23,"hr")),r&2&&(Lp(5),$x("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,he,i.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,le],encapsulation:2})}return l})();var me=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-number-doc"]],standalone:false,decls:1418,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/grid-system"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","ErrorAsyncProperties"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-helper"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","(value)","=>","Observable<boolean>"],["pan","",1,"docs-api-property-type","'change'"],["pan","",1,"docs-api-property-type","'changeModel'"]],template:function(r,i){r&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),eN(3,"import { PoFieldModule } from '@po-ui/ng-components';"),og()(),Sl(4,"div",2)(5,"p"),eN(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),og(),Sl(7,"blockquote")(8,"p"),eN(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),Sl(10,"code"),eN(11,"FormsModule"),og(),eN(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Sl(13,"code"),eN(14,"ReactiveFormsModule"),og(),eN(15,", ambos nativos do Angular."),og()()(),Sl(16,"h3",3),eN(17,"Componente"),og(),Sl(18,"h4",4)(19,"code",5),eN(20,"PoNumberComponent"),og()(),Sl(21,"div",2)(22,"p"),eN(23,`Este \xE9 um componente baseado em input, com v\xE1rias propriedades do input nativo e outras
propriedades extras como: m\xE1scara, pattern, mensagem de erro e etc.
Voc\xEA deve informar a vari\xE1vel que cont\xE9m o valor como [(ngModel)]="variavel", para que o
input receba o valor da vari\xE1vel e para que ela receba as altera\xE7\xF5es do valor (two-way-databinding).
A propriedade name \xE9 obrigat\xF3ria para que o formul\xE1rio e o model funcionem corretamente.`),og(),Sl(24,"p"),eN(25,"Importante:"),og(),Sl(26,"ul")(27,"li"),eN(28,`Caso o input tenha um [(ngModel)] sem o atributo name, ocorrer\xE1 um erro de angular.
Ent\xE3o voc\xEA precisa informar o atributo name ou o atributo [ngModelOptions]="{standalone: true}".
Exemplo: [(ngModel)]="pessoa.nome" [ngModelOptions]="{standalone: true}".`),og()(),Sl(29,"h4"),eN(30,"Tokens customiz\xE1veis"),og(),Sl(31,"p"),eN(32,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS): "),Wl(33,"br"),eN(34,`
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),Sl(35,"code"),eN(36,".po-input"),og()(),Sl(37,"blockquote")(38,"p"),eN(39,"Para correto alinhamento \xE9 recomendado o uso das classes de espa\xE7amento do "),Sl(40,"a",6),eN(41,"Grid System"),og(),eN(42,"."),og()(),Sl(43,"blockquote")(44,"p"),eN(45,"Para maiores informa\xE7\xF5es, acesse o guia "),Sl(46,"a",7),eN(47,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),eN(48,"."),og()(),Sl(49,"table")(50,"thead")(51,"tr")(52,"th"),eN(53,"Propriedade"),og(),Sl(54,"th"),eN(55,"Descri\xE7\xE3o"),og(),Sl(56,"th"),eN(57,"Valor Padr\xE3o"),og()()(),Sl(58,"tbody")(59,"tr")(60,"td")(61,"strong"),eN(62,"Default Values"),og()(),Wl(63,"td")(64,"td"),og(),Sl(65,"tr")(66,"td")(67,"code"),eN(68,"--font-family"),og()(),Sl(69,"td"),eN(70,"Fam\xEDlia tipogr\xE1fica usada"),og(),Sl(71,"td")(72,"code"),eN(73,"var(--font-family-theme)"),og()()(),Sl(74,"tr")(75,"td")(76,"code"),eN(77,"--font-size"),og()(),Sl(78,"td"),eN(79,"Tamanho da fonte"),og(),Sl(80,"td")(81,"code"),eN(82,"var(--font-size-default)"),og()()(),Sl(83,"tr")(84,"td")(85,"code"),eN(86,"--text-color-placeholder"),og()(),Sl(87,"td"),eN(88,"Cor do texto placeholder"),og(),Sl(89,"td")(90,"code"),eN(91,"var(--color-neutral-light-30)"),og()()(),Sl(92,"tr")(93,"td")(94,"code"),eN(95,"--color"),og()(),Sl(96,"td"),eN(97,"Cor pincipal do input"),og(),Sl(98,"td")(99,"code"),eN(100,"var(--color-neutral-dark-70)"),og()()(),Sl(101,"tr")(102,"td")(103,"code"),eN(104,"--background"),og()(),Sl(105,"td"),eN(106,"Cor de background"),og(),Sl(107,"td")(108,"code"),eN(109,"var(--color-neutral-light-05)"),og()()(),Sl(110,"tr")(111,"td")(112,"code"),eN(113,"--padding"),og()(),Sl(114,"td"),eN(115,"Preenchimento"),og(),Sl(116,"td")(117,"code"),eN(118,"0 0.5rem"),og()()(),Sl(119,"tr")(120,"td")(121,"code"),eN(122,"--text-color"),og()(),Sl(123,"td"),eN(124,"Cor do texto"),og(),Sl(125,"td")(126,"code"),eN(127,"var(--color-neutral-dark-90)"),og()()(),Sl(128,"tr")(129,"td")(130,"code"),eN(131,"--field-container-title-justify"),og()(),Sl(132,"td"),eN(133,"Alinhamento horizontal do t\xEDtulo ("),Sl(134,"code"),eN(135,"justify-content"),og(),eN(136,")"),og(),Sl(137,"td")(138,"code"),eN(139,"space-between"),og()()(),Sl(140,"tr")(141,"td")(142,"code"),eN(143,"--field-container-title-flex"),og()(),Sl(144,"td"),eN(145,"Flex do t\xEDtulo ("),Sl(146,"code"),eN(147,"flex"),og(),eN(148,")"),og(),Sl(149,"td")(150,"code"),eN(151,"1 auto"),og()()(),Sl(152,"tr")(153,"td")(154,"strong"),eN(155,"Hover"),og()(),Wl(156,"td")(157,"td"),og(),Sl(158,"tr")(159,"td")(160,"code"),eN(161,"--color-hover"),og()(),Sl(162,"td"),eN(163,"Cor principal no estado hover"),og(),Sl(164,"td")(165,"code"),eN(166,"var(--color-brand-01-dark)"),og()()(),Sl(167,"tr")(168,"td")(169,"code"),eN(170,"--background-hover"),og()(),Sl(171,"td"),eN(172,"Cor de background no estado hover"),og(),Sl(173,"td")(174,"code"),eN(175,"var(--color-brand-01-lightest)"),og()()(),Sl(176,"tr")(177,"td")(178,"strong"),eN(179,"Focused"),og()(),Wl(180,"td")(181,"td"),og(),Sl(182,"tr")(183,"td")(184,"code"),eN(185,"--color-focused"),og()(),Sl(186,"td"),eN(187,"Cor principal no estado de focus"),og(),Sl(188,"td")(189,"code"),eN(190,"var(--color-action-default)"),og()()(),Sl(191,"tr")(192,"td")(193,"code"),eN(194,"--outline-color-focused"),og()(),Sl(195,"td"),eN(196,"Cor do outline do estado de focus"),og(),Sl(197,"td")(198,"code"),eN(199,"var(--color-action-focus)"),og()()(),Sl(200,"tr")(201,"td")(202,"strong"),eN(203,"Disabled"),og()(),Wl(204,"td")(205,"td"),og(),Sl(206,"tr")(207,"td")(208,"code"),eN(209,"--color-disabled"),og()(),Sl(210,"td"),eN(211,"Cor principal no estado disabled"),og(),Sl(212,"td")(213,"code"),eN(214,"var(--color-neutral-light-30)"),og()()(),Sl(215,"tr")(216,"td")(217,"code"),eN(218,"--background-disabled"),og()(),Sl(219,"td"),eN(220,"Cor de background no estado disabled"),og(),Sl(221,"td")(222,"code"),eN(223,"var(--color-neutral-light-20)"),og()()(),Sl(224,"tr")(225,"td")(226,"code"),eN(227,"--text-color-disabled"),og()(),Sl(228,"td"),eN(229,"Cor do texto no estado disabled"),og(),Sl(230,"td")(231,"code"),eN(232,"var(--color-neutral-dark-70)"),og()()()()(),Sl(233,"p"),Wl(234,"br"),eN(235," O "),Sl(236,"code"),eN(237,"po-number"),og(),eN(238,` \xE9 um input espec\xEDfico para receber apenas n\xFAmeros.
\xC9 poss\xEDvel configurar um valor m\xEDnimo, m\xE1ximo e um step com p-min, p-max e p-step,
respectivamente.`),og()(),Sl(239,"div",8)(240,"h4",9),eN(241,"Seletor"),og(),Sl(242,"pre",10),eN(243,`<po-number
    (p-additional-help)="EventEmitter"
    p-additional-help-tooltip="string"
    p-append-in-body="boolean"
    p-auto-focus="boolean"
    (p-blur)="EventEmitter"
    (p-change)="EventEmitter"
    (p-change-model)="EventEmitter"
    p-clean="boolean"
    p-compact-label="boolean"
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
    p-step="string"
    p-upper-case="boolean" >
</po-number>
`),og()(),Sl(244,"h4",11),eN(245,"Propriedades"),og(),Sl(246,"table",12)(247,"tr",13)(248,"th",14),eN(249,"Nome"),og(),Sl(250,"th",14),eN(251,"Tipo"),og(),Sl(252,"th",14),eN(253,"Padr\xE3o"),og(),Sl(254,"th",14),eN(255,"Descri\xE7\xE3o"),og()(),Sl(256,"tr",15)(257,"td",16)(258,"div",17)(259,"span",18),eN(260," (p-additional-help)"),Wl(261,"br"),og()(),Sl(262,"div",19),eN(263,"Deprecated"),og()(),Sl(264,"td",20)(265,"code",21),eN(266,"EventEmitter"),og()(),Sl(267,"td",22),eN(268,"-"),og(),Sl(269,"td",23)(270,"em")(271,"strong"),eN(272,"(opcional)"),og()(),Sl(273,"p"),eN(274,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),og(),Sl(275,"blockquote")(276,"p"),eN(277,"Essa propriedade est\xE1 "),Sl(278,"strong"),eN(279,"depreciada"),og(),eN(280," e ser\xE1 removida na vers\xE3o "),Sl(281,"code"),eN(282,"23.x.x"),og(),eN(283,". Recomendamos utilizar a propriedade "),Sl(284,"code"),eN(285,"p-helper"),og(),eN(286," que oferece mais recursos e flexibilidade."),og()()()(),Sl(287,"tr",15)(288,"td",16)(289,"div",24)(290,"span",25),eN(291," p-additional-help-tooltip"),Wl(292,"br"),og()(),Sl(293,"div",19),eN(294,"Deprecated"),og()(),Sl(295,"td",20)(296,"code",26),eN(297,"string"),og()(),Sl(298,"td",22),eN(299,"-"),og(),Sl(300,"td",23)(301,"em")(302,"strong"),eN(303,"(opcional)"),og()(),Sl(304,"p"),eN(305,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),Sl(306,"code"),eN(307,"po-helper"),og(),eN(308,`.
`),Sl(309,"strong"),eN(310,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),og()(),Sl(311,"blockquote")(312,"p"),eN(313,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),og()(),Sl(314,"blockquote")(315,"p"),eN(316,"Essa propriedade est\xE1 "),Sl(317,"strong"),eN(318,"depreciada"),og(),eN(319," e ser\xE1 removida na vers\xE3o "),Sl(320,"code"),eN(321,"23.x.x"),og(),eN(322,". Recomendamos utilizar a propriedade "),Sl(323,"code"),eN(324,"p-helper"),og(),eN(325," que oferece mais recursos e flexibilidade."),og()()()(),Sl(326,"tr",15)(327,"td",16)(328,"div",24)(329,"span",25),eN(330," p-append-in-body"),Wl(331,"br"),og()()(),Sl(332,"td",20)(333,"code",27),eN(334,"boolean"),og()(),Sl(335,"td",22)(336,"p")(337,"code"),eN(338,"false"),og()()(),Sl(339,"td",23)(340,"em")(341,"strong"),eN(342,"(opcional)"),og()(),Sl(343,"p"),eN(344,"Define que o popover ("),Sl(345,"code"),eN(346,"p-helper"),og(),eN(347," e/ou "),Sl(348,"code"),eN(349,"p-error-limit"),og(),eN(350,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),og(),Sl(351,"blockquote")(352,"p"),eN(353,"Quando utilizado com "),Sl(354,"code"),eN(355,"p-helper"),og(),eN(356,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),og()()()(),Sl(357,"tr",15)(358,"td",16)(359,"div",24)(360,"span",25),eN(361," p-auto-focus"),Wl(362,"br"),og()()(),Sl(363,"td",20)(364,"code",27),eN(365,"boolean"),og()(),Sl(366,"td",22)(367,"p")(368,"code"),eN(369,"false"),og()()(),Sl(370,"td",23)(371,"em")(372,"strong"),eN(373,"(opcional)"),og()(),Sl(374,"p"),eN(375,"Aplica foco no elemento ao ser iniciado."),og(),Sl(376,"blockquote")(377,"p"),eN(378,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),og()()()(),Sl(379,"tr",15)(380,"td",16)(381,"div",17)(382,"span",18),eN(383," (p-blur)"),Wl(384,"br"),og()()(),Sl(385,"td",20)(386,"code",21),eN(387,"EventEmitter"),og()(),Sl(388,"td",22),eN(389,"-"),og(),Sl(390,"td",23)(391,"em")(392,"strong"),eN(393,"(opcional)"),og()(),Sl(394,"p"),eN(395,"Evento disparado ao sair do campo."),og()()(),Sl(396,"tr",15)(397,"td",16)(398,"div",17)(399,"span",18),eN(400," (p-change)"),Wl(401,"br"),og()()(),Sl(402,"td",20)(403,"code",21),eN(404,"EventEmitter"),og()(),Sl(405,"td",22),eN(406,"-"),og(),Sl(407,"td",23)(408,"em")(409,"strong"),eN(410,"(opcional)"),og()(),Sl(411,"p"),eN(412,"Evento disparado ao alterar valor e deixar o campo."),og()()(),Sl(413,"tr",15)(414,"td",16)(415,"div",17)(416,"span",18),eN(417," (p-change-model)"),Wl(418,"br"),og()()(),Sl(419,"td",20)(420,"code",21),eN(421,"EventEmitter"),og()(),Sl(422,"td",22),eN(423,"-"),og(),Sl(424,"td",23)(425,"em")(426,"strong"),eN(427,"(opcional)"),og()(),Sl(428,"p"),eN(429,"Evento disparado ao alterar valor do model."),og()()(),Sl(430,"tr",15)(431,"td",16)(432,"div",24)(433,"span",25),eN(434,"p-clean"),Wl(435,"br"),og()()(),Sl(436,"td",20)(437,"code",27),eN(438,"boolean"),og()(),Sl(439,"td",22),eN(440,"-"),og(),Sl(441,"td",23)(442,"em")(443,"strong"),eN(444,"(opcional)"),og()(),Sl(445,"p"),eN(446,"Se verdadeiro, o campo receber\xE1 um bot\xE3o para ser limpo."),og()()(),Sl(447,"tr",15)(448,"td",16)(449,"div",24)(450,"span",25),eN(451," p-compact-label"),Wl(452,"br"),og()()(),Sl(453,"td",20)(454,"code",27),eN(455,"boolean"),og()(),Sl(456,"td",22)(457,"p")(458,"code"),eN(459,"false"),og()()(),Sl(460,"td",23)(461,"em")(462,"strong"),eN(463,"(opcional)"),og()(),Sl(464,"p"),eN(465,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),og(),Sl(466,"p"),eN(467,"Quando habilitado ("),Sl(468,"code"),eN(469,"true"),og(),eN(470,"), o modo compacto afeta o conjunto composto por:"),og(),Sl(471,"ul")(472,"li")(473,"code"),eN(474,"po-label"),og()(),Sl(475,"li")(476,"code"),eN(477,"p-requirement (showRequired)"),og()(),Sl(478,"li")(479,"code"),eN(480,"po-helper"),og()()(),Sl(481,"p"),eN(482,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),og(),Sl(483,"p"),eN(484,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),og(),Sl(485,"ul")(486,"li")(487,"code"),eN(488,"--field-container-title-justify"),og()(),Sl(489,"li")(490,"code"),eN(491,"--field-container-title-flex"),og()()(),Sl(492,"p"),eN(493,"Exemplo:"),og(),Sl(494,"pre")(495,"code"),eN(496,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),og()(),Sl(497,"p"),eN(498,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),og()()(),Sl(499,"tr",15)(500,"td",16)(501,"div",24)(502,"span",25),eN(503,"p-disabled"),Wl(504,"br"),og()()(),Sl(505,"td",20)(506,"code",27),eN(507,"boolean"),og()(),Sl(508,"td",22)(509,"p")(510,"code"),eN(511,"false"),og()()(),Sl(512,"td",23)(513,"em")(514,"strong"),eN(515,"(opcional)"),og()(),Sl(516,"p"),eN(517,"Se verdadeiro, desabilita o campo."),og()()(),Sl(518,"tr",15)(519,"td",16)(520,"div",24)(521,"span",25),eN(522," p-emit-all-changes"),Wl(523,"br"),og()()(),Sl(524,"td",20)(525,"code",27),eN(526,"boolean"),og()(),Sl(527,"td",22)(528,"p")(529,"code"),eN(530,"false"),og()()(),Sl(531,"td",23)(532,"em")(533,"strong"),eN(534,"(opcional)"),og()(),Sl(535,"p"),eN(536,"Sempre emite as altera\xE7\xF5es do model mesmo quando o valor atual for igual ao valor anterior."),og()()(),Sl(537,"tr",15)(538,"td",16)(539,"div",17)(540,"span",18),eN(541," (p-enter)"),Wl(542,"br"),og()()(),Sl(543,"td",20)(544,"code",21),eN(545,"EventEmitter"),og()(),Sl(546,"td",22),eN(547,"-"),og(),Sl(548,"td",23)(549,"em")(550,"strong"),eN(551,"(opcional)"),og()(),Sl(552,"p"),eN(553,"Evento disparado ao entrar do campo."),og()()(),Sl(554,"tr",15)(555,"td",16)(556,"div",24)(557,"span",25),eN(558," p-error-async-properties"),Wl(559,"br"),og()()(),Sl(560,"td",20)(561,"code",28),eN(562,"ErrorAsyncProperties"),og()(),Sl(563,"td",22),eN(564,"-"),og(),Sl(565,"td",23)(566,"em")(567,"strong"),eN(568,"(opcional)"),og()(),Sl(569,"p"),eN(570,`Realiza alguma valida\xE7\xE3o customizada ass\xEDncrona no componente.
Aconselhamos a utiliza\xE7\xE3o dessa propriedade somente em componentes que n\xE3o estejam
utilizando `),Sl(571,"code"),eN(572,"Reactive Forms"),og(),eN(573,". Em formul\xE1rios reativos, pode-se utilizar o pr\xF3prio "),Sl(574,"code"),eN(575,"asyncValidators"),og(),eN(576,"."),og()()(),Sl(577,"tr",15)(578,"td",16)(579,"div",24)(580,"span",25),eN(581," p-error-limit"),Wl(582,"br"),og()()(),Sl(583,"td",20)(584,"code",27),eN(585,"boolean"),og()(),Sl(586,"td",22)(587,"p")(588,"code"),eN(589,"false"),og()()(),Sl(590,"td",23)(591,"em")(592,"strong"),eN(593,"(opcional)"),og()(),Sl(594,"p"),eN(595,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),og(),Sl(596,"blockquote")(597,"p"),eN(598,"Caso essa propriedade seja definida como "),Sl(599,"code"),eN(600,"true"),og(),eN(601,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),og()()()(),Sl(602,"tr",15)(603,"td",16)(604,"div",24)(605,"span",25),eN(606," p-error-pattern"),Wl(607,"br"),og()()(),Sl(608,"td",20)(609,"code",26),eN(610,"string"),og()(),Sl(611,"td",22),eN(612,"-"),og(),Sl(613,"td",23)(614,"em")(615,"strong"),eN(616,"(opcional)"),og()(),Sl(617,"p"),eN(618,"Mensagem que ser\xE1 apresentada quando o "),Sl(619,"code"),eN(620,"pattern"),og(),eN(621," ou a m\xE1scara n\xE3o for satisfeita."),og(),Sl(622,"blockquote")(623,"p"),eN(624,`Por padr\xE3o, esta mensagem n\xE3o \xE9 apresentada quando o campo estiver vazio, mesmo que ele seja requerido.
Para exibir a mensagem com o campo vazio, utilize a propriedade `),Sl(625,"code"),eN(626,"p-required-field-error-message"),og(),eN(627," em conjunto."),og()()()(),Sl(628,"tr",15)(629,"td",16)(630,"div",24)(631,"span",25),eN(632," p-help"),Wl(633,"br"),og()()(),Sl(634,"td",20)(635,"code",26),eN(636,"string"),og()(),Sl(637,"td",22),eN(638,"-"),og(),Sl(639,"td",23)(640,"em")(641,"strong"),eN(642,"(opcional)"),og()(),Sl(643,"p"),eN(644,"Texto de apoio do campo."),og()()(),Sl(645,"tr",15)(646,"td",16)(647,"div",24)(648,"span",25),eN(649," p-icon"),Wl(650,"br"),og()()(),Sl(651,"td",20)(652,"code",26),eN(653,"string "),og(),Sl(654,"code",29),eN(655," TemplateRef<void>"),og()(),Sl(656,"td",22),eN(657,"-"),og(),Sl(658,"td",23)(659,"em")(660,"strong"),eN(661,"(opcional)"),og()(),Sl(662,"p"),eN(663,"Define o \xEDcone que ser\xE1 exibido no in\xEDcio do campo."),og(),Sl(664,"p"),eN(665,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),Sl(666,"a",30),eN(667,"Biblioteca de \xEDcones"),og(),eN(668,". conforme exemplo abaixo:"),og(),Sl(669,"pre")(670,"code"),eN(671,`<po-input p-icon="an an-user" p-label="PO input"></po-input>
`),og()(),Sl(672,"p"),eN(673,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),Sl(674,"em"),eN(675,"Font Awesome"),og(),eN(676,", da seguinte forma:"),og(),Sl(677,"pre")(678,"code"),eN(679,`<po-input p-icon="fa fa-podcast" p-label="PO input"></po-input>
`),og()(),Sl(680,"p"),eN(681,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),Sl(682,"code"),eN(683,"TemplateRef"),og(),eN(684,", conforme exemplo abaixo:"),og(),Sl(685,"pre")(686,"code"),eN(687,`<po-input [p-icon]="template" p-label="input template ionic"></po-input>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),og()(),Sl(688,"blockquote")(689,"p"),eN(690,"Para o \xEDcone enquadrar corretamente, deve-se utilizar "),Sl(691,"code"),eN(692,"font-size: inherit"),og(),eN(693," caso o \xEDcone utilizado n\xE3o aplique-o."),og()()()(),Sl(694,"tr",15)(695,"td",16)(696,"div",17)(697,"span",18),eN(698," (p-keydown)"),Wl(699,"br"),og()()(),Sl(700,"td",20)(701,"code",21),eN(702,"EventEmitter"),og()(),Sl(703,"td",22),eN(704,"-"),og(),Sl(705,"td",23)(706,"em")(707,"strong"),eN(708,"(opcional)"),og()(),Sl(709,"p"),eN(710,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Sl(711,"code"),eN(712,"KeyboardEvent"),og(),eN(713," com informa\xE7\xF5es sobre a tecla."),og()()(),Sl(714,"tr",15)(715,"td",16)(716,"div",24)(717,"span",25),eN(718," p-label"),Wl(719,"br"),og()()(),Sl(720,"td",20)(721,"code",26),eN(722,"string"),og()(),Sl(723,"td",22),eN(724,"-"),og(),Sl(725,"td",23)(726,"em")(727,"strong"),eN(728,"(opcional)"),og()(),Sl(729,"p"),eN(730,"R\xF3tulo do campo."),og()()(),Sl(731,"tr",15)(732,"td",16)(733,"div",24)(734,"span",25),eN(735," p-label-text-wrap"),Wl(736,"br"),og()()(),Sl(737,"td",20)(738,"code",27),eN(739,"boolean"),og()(),Sl(740,"td",22)(741,"p")(742,"code"),eN(743,"false"),og()()(),Sl(744,"td",23)(745,"em")(746,"strong"),eN(747,"(opcional)"),og()(),Sl(748,"p"),eN(749,"Habilita a quebra autom\xE1tica do texto da propriedade "),Sl(750,"code"),eN(751,"p-label"),og(),eN(752,". Quando "),Sl(753,"code"),eN(754,"p-label-text-wrap"),og(),eN(755,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),og()()(),Sl(756,"tr",15)(757,"td",16)(758,"div",24)(759,"span",25),eN(760," p-loading"),Wl(761,"br"),og()()(),Sl(762,"td",20)(763,"code",27),eN(764,"boolean"),og()(),Sl(765,"td",22)(766,"p")(767,"code"),eN(768,"false"),og()()(),Sl(769,"td",23)(770,"em")(771,"strong"),eN(772,"(opcional)"),og()(),Sl(773,"p"),eN(774,"Exibe um \xEDcone de carregamento no lado direito do campo para sinalizar que uma opera\xE7\xE3o est\xE1 em andamento."),og()()(),Sl(775,"tr",15)(776,"td",16)(777,"div",24)(778,"span",25),eN(779,"p-mask"),Wl(780,"br"),og()()(),Sl(781,"td",20)(782,"code",26),eN(783,"string"),og()(),Sl(784,"td",22),eN(785,"-"),og(),Sl(786,"td",23)(787,"em")(788,"strong"),eN(789,"(opcional)"),og()(),Sl(790,"p"),eN(791,"Indica uma m\xE1scara para o campo, por\xE9m \xE9 incompat\xEDvel com o "),Sl(792,"code"),eN(793,"po-number"),og(),eN(794,"."),og(),Sl(795,"blockquote")(796,"p")(797,"strong"),eN(798,"Componentes compat\xEDveis:"),og(),Sl(799,"code"),eN(800,"po-input"),og(),eN(801,","),Sl(802,"code"),eN(803,"po-decimal"),og(),eN(804,"."),og()()()(),Sl(805,"tr",15)(806,"td",16)(807,"div",24)(808,"span",25),eN(809,"p-mask-format-model"),Wl(810,"br"),og()()(),Sl(811,"td",20)(812,"code",27),eN(813,"boolean"),og()(),Sl(814,"td",22)(815,"p")(816,"code"),eN(817,"false"),og()()(),Sl(818,"td",23)(819,"em")(820,"strong"),eN(821,"(opcional)"),og()(),Sl(822,"p"),eN(823,"Indica se o "),Sl(824,"code"),eN(825,"model"),og(),eN(826," receber\xE1 o valor formatado pela m\xE1scara ou apenas o valor puro (sem formata\xE7\xE3o)."),og()()(),Sl(827,"tr",15)(828,"td",16)(829,"div",24)(830,"span",25),eN(831," p-mask-no-length-validation"),Wl(832,"br"),og()()(),Sl(833,"td",20)(834,"code",27),eN(835,"boolean"),og()(),Sl(836,"td",22)(837,"p")(838,"code"),eN(839,"false"),og()()(),Sl(840,"td",23)(841,"p"),eN(842,"Controla como o componente aplica as valida\xE7\xF5es de comprimento m\xEDnimo ("),Sl(843,"code"),eN(844,"minLength"),og(),eN(845,") e m\xE1ximo ("),Sl(846,"code"),eN(847,"maxLength"),og(),eN(848,") quando h\xE1 uma m\xE1scara ("),Sl(849,"code"),eN(850,"p-mask"),og(),eN(851,") definida."),og(),Sl(852,"ul")(853,"li"),eN(854,"Quando "),Sl(855,"code"),eN(856,"true"),og(),eN(857,", apenas os caracteres alfanum\xE9ricos ser\xE3o contabilizados para a valida\xE7\xE3o dos comprimentos."),og(),Sl(858,"li"),eN(859,"Quando "),Sl(860,"code"),eN(861,"false"),og(),eN(862,", todos os caracteres, incluindo os especiais da m\xE1scara, ser\xE3o considerados na valida\xE7\xE3o."),og()(),Sl(863,"blockquote")(864,"p"),eN(865,"Esta propriedade \xE9 ignorada quando utilizada em conjunto com "),Sl(866,"code"),eN(867,"p-mask-format-model"),og(),eN(868,"."),og()(),Sl(869,"p"),eN(870,"Exemplo:"),og(),Sl(871,"pre")(872,"code"),eN(873,`<po-input
  p-mask="999-999"
  p-maxlength="6"
  p-minlength="4"
  p-mask-no-length-validation="true"
></po-input>
`),og()(),Sl(874,"ul")(875,"li"),eN(876,"Entrada: "),Sl(877,"code"),eN(878,"123-456"),og(),eN(879," \u2192 Valida\xE7\xE3o ser\xE1 aplicada somente aos n\xFAmeros, ignorando o caractere especial "),Sl(880,"code"),eN(881,"-"),og(),eN(882,"."),og()()()(),Sl(883,"tr",15)(884,"td",16)(885,"div",24)(886,"span",25),eN(887,"p-max"),Wl(888,"br"),og()()(),Sl(889,"td",20)(890,"code",31),eN(891,"number"),og()(),Sl(892,"td",22),eN(893,"-"),og(),Sl(894,"td",23)(895,"em")(896,"strong"),eN(897,"(opcional)"),og()(),Sl(898,"p"),eN(899,"Valor m\xE1ximo."),og(),Sl(900,"blockquote")(901,"p"),eN(902,"Quando o valor m\xE1ximo for um n\xFAmero com decimais aconselha-se utilizar junto da propriedade "),Sl(903,"code"),eN(904,"p-step"),og(),eN(905," tamb\xE9m passando a ela um valor decimal."),og()()()(),Sl(906,"tr",15)(907,"td",16)(908,"div",24)(909,"span",25),eN(910," p-maxlength"),Wl(911,"br"),og()()(),Sl(912,"td",20)(913,"code",31),eN(914,"number"),og()(),Sl(915,"td",22),eN(916,"-"),og(),Sl(917,"td",23)(918,"em")(919,"strong"),eN(920,"(opcional)"),og()(),Sl(921,"p"),eN(922,"Indica a quantidade m\xE1xima de caracteres que o campo aceita."),og()()(),Sl(923,"tr",15)(924,"td",16)(925,"div",24)(926,"span",25),eN(927,"p-min"),Wl(928,"br"),og()()(),Sl(929,"td",20)(930,"code",31),eN(931,"number"),og()(),Sl(932,"td",22),eN(933,"-"),og(),Sl(934,"td",23)(935,"em")(936,"strong"),eN(937,"(opcional)"),og()(),Sl(938,"p"),eN(939,"Valor m\xEDnimo."),og(),Sl(940,"blockquote")(941,"p"),eN(942,"Quando o valor m\xEDnimo for um n\xFAmero com decimais aconselha-se utilizar junto da propriedade "),Sl(943,"code"),eN(944,"p-step"),og(),eN(945," tamb\xE9m passando a ela um valor decimal."),og()()()(),Sl(946,"tr",15)(947,"td",16)(948,"div",24)(949,"span",25),eN(950," p-minlength"),Wl(951,"br"),og()()(),Sl(952,"td",20)(953,"code",31),eN(954,"number"),og()(),Sl(955,"td",22),eN(956,"-"),og(),Sl(957,"td",23)(958,"em")(959,"strong"),eN(960,"(opcional)"),og()(),Sl(961,"p"),eN(962,"Indica a quantidade m\xEDnima de caracteres que o campo aceita."),og()()(),Sl(963,"tr",15)(964,"td",16)(965,"div",24)(966,"span",25),eN(967," name"),Wl(968,"br"),og()()(),Sl(969,"td",20)(970,"code",26),eN(971,"string"),og()(),Sl(972,"td",22),eN(973,"-"),og(),Sl(974,"td",23)(975,"p"),eN(976,"Nome e identificador do campo."),og()()(),Sl(977,"tr",15)(978,"td",16)(979,"div",24)(980,"span",25),eN(981," p-no-autocomplete"),Wl(982,"br"),og()()(),Sl(983,"td",20)(984,"code",27),eN(985,"boolean"),og()(),Sl(986,"td",22)(987,"p")(988,"code"),eN(989,"false"),og()()(),Sl(990,"td",23)(991,"em")(992,"strong"),eN(993,"(opcional)"),og()(),Sl(994,"p"),eN(995,"Define a propriedade nativa "),Sl(996,"code"),eN(997,"autocomplete"),og(),eN(998," do campo como "),Sl(999,"code"),eN(1e3,"off"),og(),eN(1001,"."),og(),Sl(1002,"blockquote")(1003,"p"),eN(1004,"No componente "),Sl(1005,"code"),eN(1006,"po-password"),og(),eN(1007," ser\xE1 definido como "),Sl(1008,"code"),eN(1009,"new-password"),og(),eN(1010,"."),og()(),Sl(1011,"p"),eN(1012,"Nos componentes "),Sl(1013,"code"),eN(1014,"po-password"),og(),eN(1015," e "),Sl(1016,"code"),eN(1017,"po-login"),og(),eN(1018," o valor padr\xE3o ser\xE1 "),Sl(1019,"code"),eN(1020,"true"),og(),eN(1021,"."),og()()(),Sl(1022,"tr",15)(1023,"td",16)(1024,"div",24)(1025,"span",25),eN(1026," p-optional"),Wl(1027,"br"),og()()(),Sl(1028,"td",20)(1029,"code",27),eN(1030,"boolean"),og()(),Sl(1031,"td",22)(1032,"p")(1033,"code"),eN(1034,"false"),og()()(),Sl(1035,"td",23)(1036,"em")(1037,"strong"),eN(1038,"(opcional)"),og()(),Sl(1039,"p"),eN(1040,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),og(),Sl(1041,"blockquote")(1042,"p"),eN(1043,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),og()(),Sl(1044,"ul")(1045,"li"),eN(1046,"O campo conter "),Sl(1047,"code"),eN(1048,"p-required"),og(),eN(1049,";"),og(),Sl(1050,"li"),eN(1051,"N\xE3o possuir "),Sl(1052,"code"),eN(1053,"p-help"),og(),eN(1054," e/ou "),Sl(1055,"code"),eN(1056,"p-label"),og(),eN(1057,"."),og()()()(),Sl(1058,"tr",15)(1059,"td",16)(1060,"div",24)(1061,"span",25),eN(1062,"p-pattern"),Wl(1063,"br"),og()()(),Sl(1064,"td",20)(1065,"code",26),eN(1066,"string"),og()(),Sl(1067,"td",22),eN(1068,"-"),og(),Sl(1069,"td",23)(1070,"em")(1071,"strong"),eN(1072,"(opcional)"),og()(),Sl(1073,"p"),eN(1074,`Express\xE3o regular para validar o campo.
Quando o campo possuir uma m\xE1scara `),Sl(1075,"code"),eN(1076,"(p-mask)"),og(),eN(1077,` ser\xE1 automaticamente validado por ela, por\xE9m
\xE9 poss\xEDvel definir um p-pattern para substituir a valida\xE7\xE3o da m\xE1scara.`),og()()(),Sl(1078,"tr",15)(1079,"td",16)(1080,"div",24)(1081,"span",25),eN(1082," p-placeholder"),Wl(1083,"br"),og()()(),Sl(1084,"td",20)(1085,"code",26),eN(1086,"string"),og()(),Sl(1087,"td",22)(1088,"p"),eN(1089,"''"),og()(),Sl(1090,"td",23)(1091,"em")(1092,"strong"),eN(1093,"(opcional)"),og()(),Sl(1094,"p"),eN(1095,"Mensagem que aparecer\xE1 enquanto o campo n\xE3o estiver preenchido."),og()()(),Sl(1096,"tr",15)(1097,"td",16)(1098,"div",24)(1099,"span",25),eN(1100," p-helper"),Wl(1101,"br"),og()()(),Sl(1102,"td",20)(1103,"code",32),eN(1104,"PoHelperOptions "),og(),Sl(1105,"code",26),eN(1106," string"),og()(),Sl(1107,"td",22),eN(1108,"-"),og(),Sl(1109,"td",23)(1110,"em")(1111,"strong"),eN(1112,"(opcional)"),og()(),Sl(1113,"p"),eN(1114,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label quando a propriedade "),Sl(1115,"code"),eN(1116,"p-label"),og(),eN(1117," for definida, ou, ao lado do componente na aus\xEAncia da propriedade "),Sl(1118,"code"),eN(1119,"p-label"),og(),eN(1120,"."),og(),Sl(1121,"blockquote")(1122,"p"),eN(1123,"Para mais informa\xE7\xF5es acesse: "),Sl(1124,"a",33),eN(1125,"https://po-ui.io/documentation/po-helper"),og(),eN(1126,"."),og()(),Sl(1127,"blockquote")(1128,"p"),eN(1129,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),Sl(1130,"code"),eN(1131,"p-additional-help-tooltip"),og(),eN(1132," e "),Sl(1133,"code"),eN(1134,"p-additional-help"),og(),eN(1135,") ser\xE1 ignorado."),og()()()(),Sl(1136,"tr",15)(1137,"td",16)(1138,"div",24)(1139,"span",25),eN(1140,"p-readonly"),Wl(1141,"br"),og()()(),Sl(1142,"td",20)(1143,"code",27),eN(1144,"boolean"),og()(),Sl(1145,"td",22),eN(1146,"-"),og(),Sl(1147,"td",23)(1148,"em")(1149,"strong"),eN(1150,"(opcional)"),og()(),Sl(1151,"p"),eN(1152,"Indica que o campo ser\xE1 somente leitura."),og()()(),Sl(1153,"tr",15)(1154,"td",16)(1155,"div",24)(1156,"span",25),eN(1157,"p-required"),Wl(1158,"br"),og()()(),Sl(1159,"td",20)(1160,"code",27),eN(1161,"boolean"),og()(),Sl(1162,"td",22)(1163,"p")(1164,"code"),eN(1165,"false"),og()()(),Sl(1166,"td",23)(1167,"em")(1168,"strong"),eN(1169,"(opcional)"),og()(),Sl(1170,"p"),eN(1171,"Define que o campo ser\xE1 obrigat\xF3rio."),og(),Sl(1172,"blockquote")(1173,"p"),eN(1174,"Esta propriedade \xE9 desconsiderada quando o input est\xE1 desabilitado "),Sl(1175,"code"),eN(1176,"(p-disabled)"),og(),eN(1177,"."),og()()()(),Sl(1178,"tr",15)(1179,"td",16)(1180,"div",24)(1181,"span",25),eN(1182," p-required-field-error-message"),Wl(1183,"br"),og()()(),Sl(1184,"td",20)(1185,"code",27),eN(1186,"boolean"),og()(),Sl(1187,"td",22)(1188,"p")(1189,"code"),eN(1190,"false"),og()()(),Sl(1191,"td",23)(1192,"em")(1193,"strong"),eN(1194,"(opcional)"),og()(),Sl(1195,"p"),eN(1196,"Exibe a mensagem setada na propriedade "),Sl(1197,"code"),eN(1198,"p-error-pattern"),og(),eN(1199," se o campo estiver vazio e for requerido."),og(),Sl(1200,"blockquote")(1201,"p"),eN(1202,"Necess\xE1rio que a propriedade "),Sl(1203,"code"),eN(1204,"p-required"),og(),eN(1205," esteja habilitada."),og()()()(),Sl(1206,"tr",15)(1207,"td",16)(1208,"div",24)(1209,"span",25),eN(1210," p-show-required"),Wl(1211,"br"),og()()(),Sl(1212,"td",20)(1213,"code",27),eN(1214,"boolean"),og()(),Sl(1215,"td",22),eN(1216,"-"),og(),Sl(1217,"td",23)(1218,"p"),eN(1219,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),og(),Sl(1220,"blockquote")(1221,"p"),eN(1222,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),og()(),Sl(1223,"ul")(1224,"li"),eN(1225,"N\xE3o possuir "),Sl(1226,"code"),eN(1227,"p-help"),og(),eN(1228," e/ou "),Sl(1229,"code"),eN(1230,"p-label"),og(),eN(1231,"."),og()()()(),Sl(1232,"tr",15)(1233,"td",16)(1234,"div",24)(1235,"span",25),eN(1236," p-size"),Wl(1237,"br"),og()()(),Sl(1238,"td",20)(1239,"code",26),eN(1240,"string"),og()(),Sl(1241,"td",22)(1242,"p")(1243,"code"),eN(1244,"medium"),og()()(),Sl(1245,"td",23)(1246,"em")(1247,"strong"),eN(1248,"(opcional)"),og()(),Sl(1249,"p"),eN(1250,"Define o tamanho do componente:"),og(),Sl(1251,"ul")(1252,"li")(1253,"code"),eN(1254,"small"),og(),eN(1255,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),og(),Sl(1256,"li")(1257,"code"),eN(1258,"medium"),og(),eN(1259,": altura do input como 44px."),og()(),Sl(1260,"blockquote")(1261,"p"),eN(1262,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Sl(1263,"code"),eN(1264,"medium"),og(),eN(1265,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Sl(1266,"a",34),eN(1267,"po-theme"),og(),eN(1268,"."),og()()()(),Sl(1269,"tr",15)(1270,"td",16)(1271,"div",24)(1272,"span",25),eN(1273," p-step"),Wl(1274,"br"),og()()(),Sl(1275,"td",20)(1276,"code",26),eN(1277,"string"),og()(),Sl(1278,"td",22)(1279,"p"),eN(1280,"1"),og()(),Sl(1281,"td",23)(1282,"em")(1283,"strong"),eN(1284,"(opcional)"),og()(),Sl(1285,"p"),eN(1286,"Intervalo."),og()()(),Sl(1287,"tr",15)(1288,"td",16)(1289,"div",24)(1290,"span",25),eN(1291," p-upper-case"),Wl(1292,"br"),og()()(),Sl(1293,"td",20)(1294,"code",27),eN(1295,"boolean"),og()(),Sl(1296,"td",22),eN(1297,"-"),og(),Sl(1298,"td",23)(1299,"p"),eN(1300,"Converte o conte\xFAdo do campo em mai\xFAsulo automaticamente."),og()()()(),Sl(1301,"h3",11),eN(1302,"M\xE9todos"),og(),Sl(1303,"table",35)(1304,"tr",15)(1305,"th",36)(1306,"div",24)(1307,"h4")(1308,"span",25),eN(1309," showAdditionalHelp "),og()()()()(),Sl(1310,"tr",23)(1311,"td",23)(1312,"p"),eN(1313,"M\xE9todo que exibe "),Sl(1314,"code"),eN(1315,"p-helper"),og(),eN(1316," ou executa a a\xE7\xE3o definida em "),Sl(1317,"code"),eN(1318,"p-helper{eventOnClick}"),og(),eN(1319," ou em "),Sl(1320,"code"),eN(1321,"p-additionalHelp"),og(),eN(1322,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Sl(1323,"code"),eN(1324,"p-keydown"),og(),eN(1325,"."),og(),Sl(1326,"blockquote")(1327,"p"),eN(1328,"Exibe ou oculta o conte\xFAdo do componente "),Sl(1329,"code"),eN(1330,"po-helper"),og(),eN(1331," quando o componente estiver com foco."),og()(),Sl(1332,"pre")(1333,"code"),eN(1334,`// Exemplo com p-label e p-helper
<po-nome-component
 #component
 ...
 p-label="Label do componente"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, component)"
></po-nome-component>
`),og()(),Sl(1335,"pre")(1336,"code"),eN(1337,`...
onKeyDown(event: KeyboardEvent, inp: PoNomeDoComponente): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),og()()()()(),Wl(1338,"br"),Sl(1339,"table",35)(1340,"tr",15)(1341,"th",36)(1342,"div",24)(1343,"h4")(1344,"span",25),eN(1345," focus "),og()()()()(),Sl(1346,"tr",23)(1347,"td",23)(1348,"p"),eN(1349,"Fun\xE7\xE3o que atribui foco ao componente."),og(),Sl(1350,"p"),eN(1351,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),og(),Sl(1352,"pre")(1353,"code"),eN(1354,`import { PoNomeDoComponenteComponent } from '@po-ui/ng-components';

...

@ViewChild(PoNomeDoComponenteComponent, { static: true }) nomeDoComponente: PoNomeDoComponenteComponent;

focusComponent() {
  this.nomeDoComponente.focus();
}
`),og()()()()(),Wl(1355,"br"),Sl(1356,"h3"),eN(1357,"Interfaces"),og(),Sl(1358,"h4",37)(1359,"code",5),eN(1360,"ErrorAsyncProperties"),og()(),Sl(1361,"div",2)(1362,"p"),eN(1363,"Interface para realizar uma valida\xE7\xE3o ass\xEDncrona no componente."),og()(),Sl(1364,"h4",11),eN(1365,"Propriedades"),og(),Sl(1366,"table",12)(1367,"tr",13)(1368,"th",14),eN(1369,"Nome"),og(),Sl(1370,"th",14),eN(1371,"Tipo"),og(),Sl(1372,"th",14),eN(1373,"Descri\xE7\xE3o"),og()(),Sl(1374,"tr",15)(1375,"td",16)(1376,"div",24)(1377,"span",25),eN(1378," errorAsync"),Wl(1379,"br"),og()()(),Sl(1380,"td",20)(1381,"code",38),eN(1382,"(value) => Observable<boolean>"),og()(),Sl(1383,"td",23)(1384,"p"),eN(1385,`Fun\xE7\xE3o obrigat\xF3ria executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),Sl(1386,"code"),eN(1387,"change"),og(),eN(1388," ou "),Sl(1389,"code"),eN(1390,"change-model"),og(),eN(1391,", dependendo do valor da propriedade "),Sl(1392,"code"),eN(1393,"triggerMode"),og(),eN(1394,"."),og()()(),Sl(1395,"tr",15)(1396,"td",16)(1397,"div",24)(1398,"span",25),eN(1399," triggerMode"),Wl(1400,"br"),og()()(),Sl(1401,"td",20)(1402,"code",39),eN(1403,"'change' "),og(),Sl(1404,"code",40),eN(1405," 'changeModel'"),og()(),Sl(1406,"td",23)(1407,"em")(1408,"strong"),eN(1409,"(opcional)"),og()(),Sl(1410,"p"),eN(1411,"Controla se o m\xE9todo ser\xE1 executado no disparo do output "),Sl(1412,"code"),eN(1413,"change"),og(),eN(1414," ou "),Sl(1415,"code"),eN(1416,"change-model"),og(),eN(1417,"."),og()()()()());},dependencies:[Ka],encapsulation:2})}return l})();var de=(()=>{class l{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(d,r){this.route=d,this.router=r;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let r=d.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:"merge"}),this.activeTab=d;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(r){return new(r||l)(w(Xn),w(En))};static \u0275cmp=Un({type:l,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Number",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,i){r&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return i.changeTab("doc")}),Wl(3,"sample-po-number-doc"),og(),Sl(4,"po-tab",3),ft("p-click",function(){return i.changeTab("web")}),Wl(5,"sample-po-number-basic-view")(6,"sample-po-number-labs-view")(7,"sample-po-number-calculate-view"),og()()()),r&2&&(nw("p-actions",i.actions),Lp(2),nw("p-active",i.activeTab==="doc"),Lp(2),nw("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[rNe,Bme,qme,ie,ae,re,me],encapsulation:2})}return l})();var Ce=[{path:"",component:de}],pe=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275mod=fe({type:l});static \u0275inj=ue({imports:[hL.forChild(Ce),hL]})}return l})();var Ge=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275mod=fe({type:l});static \u0275inj=ue({imports:[sr,pe]})}return l})();export{Ge as DocPoNumberModule};