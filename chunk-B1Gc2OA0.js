import {f as fe,u as ue,s as sr,a as uL,C,c3 as Xn,E as En,U as Un,cp as Hhe,J as zl,an as DO,aH as Ka,b8 as qme,b9 as Yme,H as Il,q as Qx,R as og,a1 as ft,A as Lp,ar as Ux,au as dg,T as nw,bs as uN,aX as G9,aF as $9,aY as z9,aG as mk,aZ as hk,b0 as Qt,b1 as mv,c4 as C3,b4 as F3,c8 as Dde,aJ as qhe,c9 as Yhe,aB as Dx,aM as ww,aN as QA,aO as Ew,aP as e0,bd as Ax,a3 as cNe,aD as Xy,aT as eN,aE as Qy}from'./main-FCMDZGSJ.js';var te=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-number-basic"]],standalone:false,decls:1,vars:0,consts:[["name","number","p-label","PO Number"]],template:function(r,i){r&1&&zl(0,"po-number",0);},dependencies:[Hhe],encapsulation:2,changeDetection:1})}return l})();var ce=l=>({"docs-sample-code-tabs":l}),ie=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-number-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Number Basic"),og(),Il(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-number-basic/sample-po-number-basic.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-number name="number" p-label="PO Number"> </po-number>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-number-basic/sample-po-number-basic.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-number-basic',
  templateUrl: './sample-po-number-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoNumberBasicComponent {}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-number-basic"),og(),zl(23,"hr")),r&2&&(Lp(5),Ux("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,ce,i.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,te],encapsulation:2})}return l})();var oe=(()=>{class l{helperText;event;messageErrorPattern;help;icon;label;max;maxlength;min;minlength;number;placeholder;properties;size;step;iconOptions=[{value:"an an-currency-circle-dollar",label:"an an-currency-circle-dollar"},{value:"an an-currency-btc",label:"an an-currency-btc"},{value:"fa fa-calculator",label:"fa fa-calculator"}];propertiesOptions=[{value:"clean",label:"Clean"},{value:"disabled",label:"Disabled"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"},{value:"compactLabel",label:"Compact Label"},{value:"loading",label:"Loading"},{value:"noAutocomplete",label:"No Autocomplete"},{value:"optional",label:"Optional"},{value:"readonly",label:"Read Only"},{value:"required",label:"Required"},{value:"requiredFieldErrorMessage",label:"Required Field Error Message"},{value:"showRequired",label:"Show Required"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore();}changeEvent(d){this.event=d;}restore(){this.helperText="",this.number=void 0,this.max=void 0,this.maxlength=void 0,this.min=void 0,this.minlength=void 0,this.event="",this.messageErrorPattern="",this.label=void 0,this.placeholder="",this.help="",this.icon="",this.size="medium",this.step=void 0,this.properties=[];}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-number-labs"]],standalone:false,decls:23,vars:43,consts:[["f","ngForm"],["name","PO number",1,"po-md-12",3,"ngModelChange","p-blur","p-change","p-change-model","p-keydown","ngModel","p-helper","p-clean","p-disabled","p-error-pattern","p-help","p-icon","p-label","p-loading","p-max","p-maxlength","p-min","p-minlength","p-no-autocomplete","p-optional","p-placeholder","p-readonly","p-required","p-required-field-error-message","p-show-required","p-size","p-step","p-error-limit","p-label-text-wrap","p-compact-label"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","messageErrorPattern","p-clean","","p-label","Message error pattern",1,"po-md-6",3,"ngModelChange","ngModel"],["name","min","p-clean","","p-label","Min",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","minlength","p-clean","","p-label","Minlength",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","max","p-clean","","p-label","Max",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","maxlength","p-clean","","p-label","Maxlength",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","step","p-clean","","p-label","Step",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","icon","p-clean","","p-label","Icon",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel","p-options"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(r,i){if(r&1){let p=Dx();Il(0,"po-number",1),ww("ngModelChange",function(o){return Xy(p),eN(i.number,o)||(i.number=o),Qy(o)}),ft("p-blur",function(){return i.changeEvent("p-blur")})("p-change",function(){return i.changeEvent("p-change")})("p-change-model",function(){return i.changeEvent("p-change-model")})("p-keydown",function(){return i.changeEvent("p-keydown")}),og(),QA(),zl(1,"po-divider"),Il(2,"div",2),zl(3,"po-info",3)(4,"po-info",4),og(),zl(5,"po-divider"),Il(6,"form",null,0)(8,"po-input",5),ww("ngModelChange",function(o){return Xy(p),eN(i.label,o)||(i.label=o),Qy(o)}),og(),QA(),Il(9,"po-input",6),ww("ngModelChange",function(o){return Xy(p),eN(i.help,o)||(i.help=o),Qy(o)}),og(),QA(),Il(10,"po-input",7),ww("ngModelChange",function(o){return Xy(p),eN(i.helperText,o)||(i.helperText=o),Qy(o)}),og(),QA(),Il(11,"po-input",8),ww("ngModelChange",function(o){return Xy(p),eN(i.placeholder,o)||(i.placeholder=o),Qy(o)}),og(),QA(),Il(12,"po-input",9),ww("ngModelChange",function(o){return Xy(p),eN(i.messageErrorPattern,o)||(i.messageErrorPattern=o),Qy(o)}),og(),QA(),Il(13,"po-number",10),ww("ngModelChange",function(o){return Xy(p),eN(i.min,o)||(i.min=o),Qy(o)}),og(),QA(),Il(14,"po-number",11),ww("ngModelChange",function(o){return Xy(p),eN(i.minlength,o)||(i.minlength=o),Qy(o)}),og(),QA(),Il(15,"po-number",12),ww("ngModelChange",function(o){return Xy(p),eN(i.max,o)||(i.max=o),Qy(o)}),og(),QA(),Il(16,"po-number",13),ww("ngModelChange",function(o){return Xy(p),eN(i.maxlength,o)||(i.maxlength=o),Qy(o)}),og(),QA(),Il(17,"po-number",14),ww("ngModelChange",function(o){return Xy(p),eN(i.step,o)||(i.step=o),Qy(o)}),og(),QA(),Il(18,"po-select",15),ww("ngModelChange",function(o){return Xy(p),eN(i.icon,o)||(i.icon=o),Qy(o)}),og(),QA(),Il(19,"po-checkbox-group",16),ww("ngModelChange",function(o){return Xy(p),eN(i.properties,o)||(i.properties=o),Qy(o)}),og(),QA(),Il(20,"po-radio-group",17),ww("ngModelChange",function(o){return Xy(p),eN(i.size,o)||(i.size=o),Qy(o)}),og(),QA(),Il(21,"div",2)(22,"po-button",18),ft("p-click",function(){return i.restore()}),og()()();}r&2&&(Ew("ngModel",i.number),nw("p-helper",i.helperText)("p-clean",i.properties.includes("clean"))("p-disabled",i.properties.includes("disabled"))("p-error-pattern",i.messageErrorPattern)("p-help",i.help)("p-icon",i.icon)("p-label",i.label)("p-loading",i.properties==null?null:i.properties.includes("loading"))("p-max",i.max)("p-maxlength",i.maxlength)("p-min",i.min)("p-minlength",i.minlength)("p-no-autocomplete",i.properties==null?null:i.properties.includes("noAutocomplete"))("p-optional",i.properties.includes("optional"))("p-placeholder",i.placeholder)("p-readonly",i.properties.includes("readonly"))("p-required",i.properties.includes("required"))("p-required-field-error-message",i.properties.includes("requiredFieldErrorMessage"))("p-show-required",i.properties.includes("showRequired"))("p-size",i.size)("p-step",i.step)("p-error-limit",i.properties==null?null:i.properties.includes("errorLimit"))("p-label-text-wrap",i.properties==null?null:i.properties.includes("labelTextWrap"))("p-compact-label",i.properties==null?null:i.properties.includes("compactLabel")),e0(),Lp(3),nw("p-value",i.number),Lp(),nw("p-value",i.event),Lp(4),Ew("ngModel",i.label),e0(),Lp(),Ew("ngModel",i.help),e0(),Lp(),Ew("ngModel",i.helperText),e0(),Lp(),Ew("ngModel",i.placeholder),e0(),Lp(),Ew("ngModel",i.messageErrorPattern),e0(),Lp(),Ew("ngModel",i.min),e0(),Lp(),Ew("ngModel",i.minlength),e0(),Lp(),Ew("ngModel",i.max),e0(),Lp(),Ew("ngModel",i.maxlength),e0(),Lp(),Ew("ngModel",i.step),e0(),Lp(),Ew("ngModel",i.icon),nw("p-options",i.iconOptions),e0(),Lp(),Ew("ngModel",i.properties),nw("p-options",i.propertiesOptions),e0(),Lp(),Ew("ngModel",i.size),nw("p-options",i.sizeOptions),e0());},dependencies:[G9,$9,z9,mk,hk,Qt,mv,C3,F3,Hhe,Dde,qhe,Yhe],encapsulation:2,changeDetection:1})}return l})();var ge=l=>({"docs-sample-code-tabs":l}),ae=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-number-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Number Labs"),og(),Il(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-number-labs/sample-po-number-labs.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-number
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
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-number-labs/sample-po-number-labs.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-number-labs"),og(),zl(23,"hr")),r&2&&(Lp(5),Ux("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,ge,i.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,oe],encapsulation:2})}return l})();var le=(()=>{class l{icms;liquid;price;quantity;state;total;statesOptions=[{value:18,label:"S\xE3o Paulo"},{value:17,label:"Alagoas"},{value:15,label:"Cear\xE1"}];calculate(){let d=this.price*this.quantity;this.liquid=d,this.total=d+d*(this.state/100);}loadICMS(){this.icms=this.state;}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-number-calculate"]],standalone:false,decls:16,vars:9,consts:[["f","ngForm"],[1,"po-row"],["name","price","p-label","Price","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","quantity","p-label","Quantity","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","state","p-label","State","p-required","","p-sort","",1,"po-md-6","po-lg-3",3,"ngModelChange","p-change","ngModel","p-options"],["name","icms","p-label","ICMS %","p-disabled","",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","liquid","p-label","Liquid","p-disabled","",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","total","p-label","Total","p-disabled","",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["p-label","Calculate",1,"po-md-3",3,"p-click","p-disabled"],["p-label","Clean",1,"po-md-3",3,"p-click","p-disabled"]],template:function(r,i){if(r&1){let p=Dx();Il(0,"h3"),Qx(1,"Calculate Tax"),og(),zl(2,"po-divider"),Il(3,"form",null,0)(5,"div",1)(6,"po-number",2),ww("ngModelChange",function(o){return Xy(p),eN(i.price,o)||(i.price=o),Qy(o)}),og(),QA(),Il(7,"po-number",3),ww("ngModelChange",function(o){return Xy(p),eN(i.quantity,o)||(i.quantity=o),Qy(o)}),og(),QA(),og(),Il(8,"div")(9,"po-select",4),ww("ngModelChange",function(o){return Xy(p),eN(i.state,o)||(i.state=o),Qy(o)}),ft("p-change",function(){return i.loadICMS()}),og(),QA(),Il(10,"po-number",5),ww("ngModelChange",function(o){return Xy(p),eN(i.icms,o)||(i.icms=o),Qy(o)}),og(),QA(),Il(11,"po-number",6),ww("ngModelChange",function(o){return Xy(p),eN(i.liquid,o)||(i.liquid=o),Qy(o)}),og(),QA(),Il(12,"po-number",7),ww("ngModelChange",function(o){return Xy(p),eN(i.total,o)||(i.total=o),Qy(o)}),og(),QA(),og(),Il(13,"div",1)(14,"po-button",8),ft("p-click",function(){return i.calculate()}),og(),Il(15,"po-button",9),ft("p-click",function(){Xy(p);let o=Ax(4);return Qy(o.reset())}),og()()();}if(r&2){let p=Ax(4);Lp(6),Ew("ngModel",i.price),e0(),Lp(),Ew("ngModel",i.quantity),e0(),Lp(2),Ew("ngModel",i.state),nw("p-options",i.statesOptions),e0(),Lp(),Ew("ngModel",i.icms),e0(),Lp(),Ew("ngModel",i.liquid),e0(),Lp(),Ew("ngModel",i.total),e0(),Lp(2),nw("p-disabled",p.invalid),Lp(),nw("p-disabled",p.invalid);}},dependencies:[G9,$9,z9,mk,hk,Qt,mv,Hhe,qhe],encapsulation:2,changeDetection:1})}return l})();var he=l=>({"docs-sample-code-tabs":l}),re=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-number-calculate-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Number - Calculate"),og(),Il(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-number-calculate/sample-po-number-calculate.component.html"),og(),Il(13,"pre",7),Qx(14,`<h3>Calculate Tax</h3>

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
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-number-calculate/sample-po-number-calculate.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-number-calculate"),og(),zl(23,"hr")),r&2&&(Lp(5),Ux("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,he,i.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,le],encapsulation:2})}return l})();var me=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-number-doc"]],standalone:false,decls:1418,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/grid-system"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","ErrorAsyncProperties"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-helper"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","(value)","=>","Observable<boolean>"],["pan","",1,"docs-api-property-type","'change'"],["pan","",1,"docs-api-property-type","'changeModel'"]],template:function(r,i){r&1&&(Il(0,"div",0)(1,"p",1)(2,"code"),Qx(3,"import { PoFieldModule } from '@po-ui/ng-components';"),og()(),Il(4,"div",2)(5,"p"),Qx(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),og(),Il(7,"blockquote")(8,"p"),Qx(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),Il(10,"code"),Qx(11,"FormsModule"),og(),Qx(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Il(13,"code"),Qx(14,"ReactiveFormsModule"),og(),Qx(15,", ambos nativos do Angular."),og()()(),Il(16,"h3",3),Qx(17,"Componente"),og(),Il(18,"h4",4)(19,"code",5),Qx(20,"PoNumberComponent"),og()(),Il(21,"div",2)(22,"p"),Qx(23,`Este \xE9 um componente baseado em input, com v\xE1rias propriedades do input nativo e outras
propriedades extras como: m\xE1scara, pattern, mensagem de erro e etc.
Voc\xEA deve informar a vari\xE1vel que cont\xE9m o valor como [(ngModel)]="variavel", para que o
input receba o valor da vari\xE1vel e para que ela receba as altera\xE7\xF5es do valor (two-way-databinding).
A propriedade name \xE9 obrigat\xF3ria para que o formul\xE1rio e o model funcionem corretamente.`),og(),Il(24,"p"),Qx(25,"Importante:"),og(),Il(26,"ul")(27,"li"),Qx(28,`Caso o input tenha um [(ngModel)] sem o atributo name, ocorrer\xE1 um erro de angular.
Ent\xE3o voc\xEA precisa informar o atributo name ou o atributo [ngModelOptions]="{standalone: true}".
Exemplo: [(ngModel)]="pessoa.nome" [ngModelOptions]="{standalone: true}".`),og()(),Il(29,"h4"),Qx(30,"Tokens customiz\xE1veis"),og(),Il(31,"p"),Qx(32,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS): "),zl(33,"br"),Qx(34,`
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),Il(35,"code"),Qx(36,".po-input"),og()(),Il(37,"blockquote")(38,"p"),Qx(39,"Para correto alinhamento \xE9 recomendado o uso das classes de espa\xE7amento do "),Il(40,"a",6),Qx(41,"Grid System"),og(),Qx(42,"."),og()(),Il(43,"blockquote")(44,"p"),Qx(45,"Para maiores informa\xE7\xF5es, acesse o guia "),Il(46,"a",7),Qx(47,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),Qx(48,"."),og()(),Il(49,"table")(50,"thead")(51,"tr")(52,"th"),Qx(53,"Propriedade"),og(),Il(54,"th"),Qx(55,"Descri\xE7\xE3o"),og(),Il(56,"th"),Qx(57,"Valor Padr\xE3o"),og()()(),Il(58,"tbody")(59,"tr")(60,"td")(61,"strong"),Qx(62,"Default Values"),og()(),zl(63,"td")(64,"td"),og(),Il(65,"tr")(66,"td")(67,"code"),Qx(68,"--font-family"),og()(),Il(69,"td"),Qx(70,"Fam\xEDlia tipogr\xE1fica usada"),og(),Il(71,"td")(72,"code"),Qx(73,"var(--font-family-theme)"),og()()(),Il(74,"tr")(75,"td")(76,"code"),Qx(77,"--font-size"),og()(),Il(78,"td"),Qx(79,"Tamanho da fonte"),og(),Il(80,"td")(81,"code"),Qx(82,"var(--font-size-default)"),og()()(),Il(83,"tr")(84,"td")(85,"code"),Qx(86,"--text-color-placeholder"),og()(),Il(87,"td"),Qx(88,"Cor do texto placeholder"),og(),Il(89,"td")(90,"code"),Qx(91,"var(--color-neutral-light-30)"),og()()(),Il(92,"tr")(93,"td")(94,"code"),Qx(95,"--color"),og()(),Il(96,"td"),Qx(97,"Cor pincipal do input"),og(),Il(98,"td")(99,"code"),Qx(100,"var(--color-neutral-dark-70)"),og()()(),Il(101,"tr")(102,"td")(103,"code"),Qx(104,"--background"),og()(),Il(105,"td"),Qx(106,"Cor de background"),og(),Il(107,"td")(108,"code"),Qx(109,"var(--color-neutral-light-05)"),og()()(),Il(110,"tr")(111,"td")(112,"code"),Qx(113,"--padding"),og()(),Il(114,"td"),Qx(115,"Preenchimento"),og(),Il(116,"td")(117,"code"),Qx(118,"0 0.5rem"),og()()(),Il(119,"tr")(120,"td")(121,"code"),Qx(122,"--text-color"),og()(),Il(123,"td"),Qx(124,"Cor do texto"),og(),Il(125,"td")(126,"code"),Qx(127,"var(--color-neutral-dark-90)"),og()()(),Il(128,"tr")(129,"td")(130,"code"),Qx(131,"--field-container-title-justify"),og()(),Il(132,"td"),Qx(133,"Alinhamento horizontal do t\xEDtulo ("),Il(134,"code"),Qx(135,"justify-content"),og(),Qx(136,")"),og(),Il(137,"td")(138,"code"),Qx(139,"space-between"),og()()(),Il(140,"tr")(141,"td")(142,"code"),Qx(143,"--field-container-title-flex"),og()(),Il(144,"td"),Qx(145,"Flex do t\xEDtulo ("),Il(146,"code"),Qx(147,"flex"),og(),Qx(148,")"),og(),Il(149,"td")(150,"code"),Qx(151,"1 auto"),og()()(),Il(152,"tr")(153,"td")(154,"strong"),Qx(155,"Hover"),og()(),zl(156,"td")(157,"td"),og(),Il(158,"tr")(159,"td")(160,"code"),Qx(161,"--color-hover"),og()(),Il(162,"td"),Qx(163,"Cor principal no estado hover"),og(),Il(164,"td")(165,"code"),Qx(166,"var(--color-brand-01-dark)"),og()()(),Il(167,"tr")(168,"td")(169,"code"),Qx(170,"--background-hover"),og()(),Il(171,"td"),Qx(172,"Cor de background no estado hover"),og(),Il(173,"td")(174,"code"),Qx(175,"var(--color-brand-01-lightest)"),og()()(),Il(176,"tr")(177,"td")(178,"strong"),Qx(179,"Focused"),og()(),zl(180,"td")(181,"td"),og(),Il(182,"tr")(183,"td")(184,"code"),Qx(185,"--color-focused"),og()(),Il(186,"td"),Qx(187,"Cor principal no estado de focus"),og(),Il(188,"td")(189,"code"),Qx(190,"var(--color-action-default)"),og()()(),Il(191,"tr")(192,"td")(193,"code"),Qx(194,"--outline-color-focused"),og()(),Il(195,"td"),Qx(196,"Cor do outline do estado de focus"),og(),Il(197,"td")(198,"code"),Qx(199,"var(--color-action-focus)"),og()()(),Il(200,"tr")(201,"td")(202,"strong"),Qx(203,"Disabled"),og()(),zl(204,"td")(205,"td"),og(),Il(206,"tr")(207,"td")(208,"code"),Qx(209,"--color-disabled"),og()(),Il(210,"td"),Qx(211,"Cor principal no estado disabled"),og(),Il(212,"td")(213,"code"),Qx(214,"var(--color-neutral-light-30)"),og()()(),Il(215,"tr")(216,"td")(217,"code"),Qx(218,"--background-disabled"),og()(),Il(219,"td"),Qx(220,"Cor de background no estado disabled"),og(),Il(221,"td")(222,"code"),Qx(223,"var(--color-neutral-light-20)"),og()()(),Il(224,"tr")(225,"td")(226,"code"),Qx(227,"--text-color-disabled"),og()(),Il(228,"td"),Qx(229,"Cor do texto no estado disabled"),og(),Il(230,"td")(231,"code"),Qx(232,"var(--color-neutral-dark-70)"),og()()()()(),Il(233,"p"),zl(234,"br"),Qx(235," O "),Il(236,"code"),Qx(237,"po-number"),og(),Qx(238,` \xE9 um input espec\xEDfico para receber apenas n\xFAmeros.
\xC9 poss\xEDvel configurar um valor m\xEDnimo, m\xE1ximo e um step com p-min, p-max e p-step,
respectivamente.`),og()(),Il(239,"div",8)(240,"h4",9),Qx(241,"Seletor"),og(),Il(242,"pre",10),Qx(243,`<po-number
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
`),og()(),Il(244,"h4",11),Qx(245,"Propriedades"),og(),Il(246,"table",12)(247,"tr",13)(248,"th",14),Qx(249,"Nome"),og(),Il(250,"th",14),Qx(251,"Tipo"),og(),Il(252,"th",14),Qx(253,"Padr\xE3o"),og(),Il(254,"th",14),Qx(255,"Descri\xE7\xE3o"),og()(),Il(256,"tr",15)(257,"td",16)(258,"div",17)(259,"span",18),Qx(260," (p-additional-help)"),zl(261,"br"),og()(),Il(262,"div",19),Qx(263,"Deprecated"),og()(),Il(264,"td",20)(265,"code",21),Qx(266,"EventEmitter"),og()(),Il(267,"td",22),Qx(268,"-"),og(),Il(269,"td",23)(270,"em")(271,"strong"),Qx(272,"(opcional)"),og()(),Il(273,"p"),Qx(274,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),og(),Il(275,"blockquote")(276,"p"),Qx(277,"Essa propriedade est\xE1 "),Il(278,"strong"),Qx(279,"depreciada"),og(),Qx(280," e ser\xE1 removida na vers\xE3o "),Il(281,"code"),Qx(282,"23.x.x"),og(),Qx(283,". Recomendamos utilizar a propriedade "),Il(284,"code"),Qx(285,"p-helper"),og(),Qx(286," que oferece mais recursos e flexibilidade."),og()()()(),Il(287,"tr",15)(288,"td",16)(289,"div",24)(290,"span",25),Qx(291," p-additional-help-tooltip"),zl(292,"br"),og()(),Il(293,"div",19),Qx(294,"Deprecated"),og()(),Il(295,"td",20)(296,"code",26),Qx(297,"string"),og()(),Il(298,"td",22),Qx(299,"-"),og(),Il(300,"td",23)(301,"em")(302,"strong"),Qx(303,"(opcional)"),og()(),Il(304,"p"),Qx(305,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),Il(306,"code"),Qx(307,"po-helper"),og(),Qx(308,`.
`),Il(309,"strong"),Qx(310,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),og()(),Il(311,"blockquote")(312,"p"),Qx(313,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),og()(),Il(314,"blockquote")(315,"p"),Qx(316,"Essa propriedade est\xE1 "),Il(317,"strong"),Qx(318,"depreciada"),og(),Qx(319," e ser\xE1 removida na vers\xE3o "),Il(320,"code"),Qx(321,"23.x.x"),og(),Qx(322,". Recomendamos utilizar a propriedade "),Il(323,"code"),Qx(324,"p-helper"),og(),Qx(325," que oferece mais recursos e flexibilidade."),og()()()(),Il(326,"tr",15)(327,"td",16)(328,"div",24)(329,"span",25),Qx(330," p-append-in-body"),zl(331,"br"),og()()(),Il(332,"td",20)(333,"code",27),Qx(334,"boolean"),og()(),Il(335,"td",22)(336,"p")(337,"code"),Qx(338,"false"),og()()(),Il(339,"td",23)(340,"em")(341,"strong"),Qx(342,"(opcional)"),og()(),Il(343,"p"),Qx(344,"Define que o popover ("),Il(345,"code"),Qx(346,"p-helper"),og(),Qx(347," e/ou "),Il(348,"code"),Qx(349,"p-error-limit"),og(),Qx(350,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),og(),Il(351,"blockquote")(352,"p"),Qx(353,"Quando utilizado com "),Il(354,"code"),Qx(355,"p-helper"),og(),Qx(356,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),og()()()(),Il(357,"tr",15)(358,"td",16)(359,"div",24)(360,"span",25),Qx(361," p-auto-focus"),zl(362,"br"),og()()(),Il(363,"td",20)(364,"code",27),Qx(365,"boolean"),og()(),Il(366,"td",22)(367,"p")(368,"code"),Qx(369,"false"),og()()(),Il(370,"td",23)(371,"em")(372,"strong"),Qx(373,"(opcional)"),og()(),Il(374,"p"),Qx(375,"Aplica foco no elemento ao ser iniciado."),og(),Il(376,"blockquote")(377,"p"),Qx(378,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),og()()()(),Il(379,"tr",15)(380,"td",16)(381,"div",17)(382,"span",18),Qx(383," (p-blur)"),zl(384,"br"),og()()(),Il(385,"td",20)(386,"code",21),Qx(387,"EventEmitter"),og()(),Il(388,"td",22),Qx(389,"-"),og(),Il(390,"td",23)(391,"em")(392,"strong"),Qx(393,"(opcional)"),og()(),Il(394,"p"),Qx(395,"Evento disparado ao sair do campo."),og()()(),Il(396,"tr",15)(397,"td",16)(398,"div",17)(399,"span",18),Qx(400," (p-change)"),zl(401,"br"),og()()(),Il(402,"td",20)(403,"code",21),Qx(404,"EventEmitter"),og()(),Il(405,"td",22),Qx(406,"-"),og(),Il(407,"td",23)(408,"em")(409,"strong"),Qx(410,"(opcional)"),og()(),Il(411,"p"),Qx(412,"Evento disparado ao alterar valor e deixar o campo."),og()()(),Il(413,"tr",15)(414,"td",16)(415,"div",17)(416,"span",18),Qx(417," (p-change-model)"),zl(418,"br"),og()()(),Il(419,"td",20)(420,"code",21),Qx(421,"EventEmitter"),og()(),Il(422,"td",22),Qx(423,"-"),og(),Il(424,"td",23)(425,"em")(426,"strong"),Qx(427,"(opcional)"),og()(),Il(428,"p"),Qx(429,"Evento disparado ao alterar valor do model."),og()()(),Il(430,"tr",15)(431,"td",16)(432,"div",24)(433,"span",25),Qx(434,"p-clean"),zl(435,"br"),og()()(),Il(436,"td",20)(437,"code",27),Qx(438,"boolean"),og()(),Il(439,"td",22),Qx(440,"-"),og(),Il(441,"td",23)(442,"em")(443,"strong"),Qx(444,"(opcional)"),og()(),Il(445,"p"),Qx(446,"Se verdadeiro, o campo receber\xE1 um bot\xE3o para ser limpo."),og()()(),Il(447,"tr",15)(448,"td",16)(449,"div",24)(450,"span",25),Qx(451," p-compact-label"),zl(452,"br"),og()()(),Il(453,"td",20)(454,"code",27),Qx(455,"boolean"),og()(),Il(456,"td",22)(457,"p")(458,"code"),Qx(459,"false"),og()()(),Il(460,"td",23)(461,"em")(462,"strong"),Qx(463,"(opcional)"),og()(),Il(464,"p"),Qx(465,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),og(),Il(466,"p"),Qx(467,"Quando habilitado ("),Il(468,"code"),Qx(469,"true"),og(),Qx(470,"), o modo compacto afeta o conjunto composto por:"),og(),Il(471,"ul")(472,"li")(473,"code"),Qx(474,"po-label"),og()(),Il(475,"li")(476,"code"),Qx(477,"p-requirement (showRequired)"),og()(),Il(478,"li")(479,"code"),Qx(480,"po-helper"),og()()(),Il(481,"p"),Qx(482,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),og(),Il(483,"p"),Qx(484,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),og(),Il(485,"ul")(486,"li")(487,"code"),Qx(488,"--field-container-title-justify"),og()(),Il(489,"li")(490,"code"),Qx(491,"--field-container-title-flex"),og()()(),Il(492,"p"),Qx(493,"Exemplo:"),og(),Il(494,"pre")(495,"code"),Qx(496,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),og()(),Il(497,"p"),Qx(498,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),og()()(),Il(499,"tr",15)(500,"td",16)(501,"div",24)(502,"span",25),Qx(503,"p-disabled"),zl(504,"br"),og()()(),Il(505,"td",20)(506,"code",27),Qx(507,"boolean"),og()(),Il(508,"td",22)(509,"p")(510,"code"),Qx(511,"false"),og()()(),Il(512,"td",23)(513,"em")(514,"strong"),Qx(515,"(opcional)"),og()(),Il(516,"p"),Qx(517,"Se verdadeiro, desabilita o campo."),og()()(),Il(518,"tr",15)(519,"td",16)(520,"div",24)(521,"span",25),Qx(522," p-emit-all-changes"),zl(523,"br"),og()()(),Il(524,"td",20)(525,"code",27),Qx(526,"boolean"),og()(),Il(527,"td",22)(528,"p")(529,"code"),Qx(530,"false"),og()()(),Il(531,"td",23)(532,"em")(533,"strong"),Qx(534,"(opcional)"),og()(),Il(535,"p"),Qx(536,"Sempre emite as altera\xE7\xF5es do model mesmo quando o valor atual for igual ao valor anterior."),og()()(),Il(537,"tr",15)(538,"td",16)(539,"div",17)(540,"span",18),Qx(541," (p-enter)"),zl(542,"br"),og()()(),Il(543,"td",20)(544,"code",21),Qx(545,"EventEmitter"),og()(),Il(546,"td",22),Qx(547,"-"),og(),Il(548,"td",23)(549,"em")(550,"strong"),Qx(551,"(opcional)"),og()(),Il(552,"p"),Qx(553,"Evento disparado ao entrar do campo."),og()()(),Il(554,"tr",15)(555,"td",16)(556,"div",24)(557,"span",25),Qx(558," p-error-async-properties"),zl(559,"br"),og()()(),Il(560,"td",20)(561,"code",28),Qx(562,"ErrorAsyncProperties"),og()(),Il(563,"td",22),Qx(564,"-"),og(),Il(565,"td",23)(566,"em")(567,"strong"),Qx(568,"(opcional)"),og()(),Il(569,"p"),Qx(570,`Realiza alguma valida\xE7\xE3o customizada ass\xEDncrona no componente.
Aconselhamos a utiliza\xE7\xE3o dessa propriedade somente em componentes que n\xE3o estejam
utilizando `),Il(571,"code"),Qx(572,"Reactive Forms"),og(),Qx(573,". Em formul\xE1rios reativos, pode-se utilizar o pr\xF3prio "),Il(574,"code"),Qx(575,"asyncValidators"),og(),Qx(576,"."),og()()(),Il(577,"tr",15)(578,"td",16)(579,"div",24)(580,"span",25),Qx(581," p-error-limit"),zl(582,"br"),og()()(),Il(583,"td",20)(584,"code",27),Qx(585,"boolean"),og()(),Il(586,"td",22)(587,"p")(588,"code"),Qx(589,"false"),og()()(),Il(590,"td",23)(591,"em")(592,"strong"),Qx(593,"(opcional)"),og()(),Il(594,"p"),Qx(595,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),og(),Il(596,"blockquote")(597,"p"),Qx(598,"Caso essa propriedade seja definida como "),Il(599,"code"),Qx(600,"true"),og(),Qx(601,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),og()()()(),Il(602,"tr",15)(603,"td",16)(604,"div",24)(605,"span",25),Qx(606," p-error-pattern"),zl(607,"br"),og()()(),Il(608,"td",20)(609,"code",26),Qx(610,"string"),og()(),Il(611,"td",22),Qx(612,"-"),og(),Il(613,"td",23)(614,"em")(615,"strong"),Qx(616,"(opcional)"),og()(),Il(617,"p"),Qx(618,"Mensagem que ser\xE1 apresentada quando o "),Il(619,"code"),Qx(620,"pattern"),og(),Qx(621," ou a m\xE1scara n\xE3o for satisfeita."),og(),Il(622,"blockquote")(623,"p"),Qx(624,`Por padr\xE3o, esta mensagem n\xE3o \xE9 apresentada quando o campo estiver vazio, mesmo que ele seja requerido.
Para exibir a mensagem com o campo vazio, utilize a propriedade `),Il(625,"code"),Qx(626,"p-required-field-error-message"),og(),Qx(627," em conjunto."),og()()()(),Il(628,"tr",15)(629,"td",16)(630,"div",24)(631,"span",25),Qx(632," p-help"),zl(633,"br"),og()()(),Il(634,"td",20)(635,"code",26),Qx(636,"string"),og()(),Il(637,"td",22),Qx(638,"-"),og(),Il(639,"td",23)(640,"em")(641,"strong"),Qx(642,"(opcional)"),og()(),Il(643,"p"),Qx(644,"Texto de apoio do campo."),og()()(),Il(645,"tr",15)(646,"td",16)(647,"div",24)(648,"span",25),Qx(649," p-icon"),zl(650,"br"),og()()(),Il(651,"td",20)(652,"code",26),Qx(653,"string "),og(),Il(654,"code",29),Qx(655," TemplateRef<void>"),og()(),Il(656,"td",22),Qx(657,"-"),og(),Il(658,"td",23)(659,"em")(660,"strong"),Qx(661,"(opcional)"),og()(),Il(662,"p"),Qx(663,"Define o \xEDcone que ser\xE1 exibido no in\xEDcio do campo."),og(),Il(664,"p"),Qx(665,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),Il(666,"a",30),Qx(667,"Biblioteca de \xEDcones"),og(),Qx(668,". conforme exemplo abaixo:"),og(),Il(669,"pre")(670,"code"),Qx(671,`<po-input p-icon="an an-user" p-label="PO input"></po-input>
`),og()(),Il(672,"p"),Qx(673,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),Il(674,"em"),Qx(675,"Font Awesome"),og(),Qx(676,", da seguinte forma:"),og(),Il(677,"pre")(678,"code"),Qx(679,`<po-input p-icon="fa fa-podcast" p-label="PO input"></po-input>
`),og()(),Il(680,"p"),Qx(681,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),Il(682,"code"),Qx(683,"TemplateRef"),og(),Qx(684,", conforme exemplo abaixo:"),og(),Il(685,"pre")(686,"code"),Qx(687,`<po-input [p-icon]="template" p-label="input template ionic"></po-input>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),og()(),Il(688,"blockquote")(689,"p"),Qx(690,"Para o \xEDcone enquadrar corretamente, deve-se utilizar "),Il(691,"code"),Qx(692,"font-size: inherit"),og(),Qx(693," caso o \xEDcone utilizado n\xE3o aplique-o."),og()()()(),Il(694,"tr",15)(695,"td",16)(696,"div",17)(697,"span",18),Qx(698," (p-keydown)"),zl(699,"br"),og()()(),Il(700,"td",20)(701,"code",21),Qx(702,"EventEmitter"),og()(),Il(703,"td",22),Qx(704,"-"),og(),Il(705,"td",23)(706,"em")(707,"strong"),Qx(708,"(opcional)"),og()(),Il(709,"p"),Qx(710,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Il(711,"code"),Qx(712,"KeyboardEvent"),og(),Qx(713," com informa\xE7\xF5es sobre a tecla."),og()()(),Il(714,"tr",15)(715,"td",16)(716,"div",24)(717,"span",25),Qx(718," p-label"),zl(719,"br"),og()()(),Il(720,"td",20)(721,"code",26),Qx(722,"string"),og()(),Il(723,"td",22),Qx(724,"-"),og(),Il(725,"td",23)(726,"em")(727,"strong"),Qx(728,"(opcional)"),og()(),Il(729,"p"),Qx(730,"R\xF3tulo do campo."),og()()(),Il(731,"tr",15)(732,"td",16)(733,"div",24)(734,"span",25),Qx(735," p-label-text-wrap"),zl(736,"br"),og()()(),Il(737,"td",20)(738,"code",27),Qx(739,"boolean"),og()(),Il(740,"td",22)(741,"p")(742,"code"),Qx(743,"false"),og()()(),Il(744,"td",23)(745,"em")(746,"strong"),Qx(747,"(opcional)"),og()(),Il(748,"p"),Qx(749,"Habilita a quebra autom\xE1tica do texto da propriedade "),Il(750,"code"),Qx(751,"p-label"),og(),Qx(752,". Quando "),Il(753,"code"),Qx(754,"p-label-text-wrap"),og(),Qx(755,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),og()()(),Il(756,"tr",15)(757,"td",16)(758,"div",24)(759,"span",25),Qx(760," p-loading"),zl(761,"br"),og()()(),Il(762,"td",20)(763,"code",27),Qx(764,"boolean"),og()(),Il(765,"td",22)(766,"p")(767,"code"),Qx(768,"false"),og()()(),Il(769,"td",23)(770,"em")(771,"strong"),Qx(772,"(opcional)"),og()(),Il(773,"p"),Qx(774,"Exibe um \xEDcone de carregamento no lado direito do campo para sinalizar que uma opera\xE7\xE3o est\xE1 em andamento."),og()()(),Il(775,"tr",15)(776,"td",16)(777,"div",24)(778,"span",25),Qx(779,"p-mask"),zl(780,"br"),og()()(),Il(781,"td",20)(782,"code",26),Qx(783,"string"),og()(),Il(784,"td",22),Qx(785,"-"),og(),Il(786,"td",23)(787,"em")(788,"strong"),Qx(789,"(opcional)"),og()(),Il(790,"p"),Qx(791,"Indica uma m\xE1scara para o campo, por\xE9m \xE9 incompat\xEDvel com o "),Il(792,"code"),Qx(793,"po-number"),og(),Qx(794,"."),og(),Il(795,"blockquote")(796,"p")(797,"strong"),Qx(798,"Componentes compat\xEDveis:"),og(),Il(799,"code"),Qx(800,"po-input"),og(),Qx(801,","),Il(802,"code"),Qx(803,"po-decimal"),og(),Qx(804,"."),og()()()(),Il(805,"tr",15)(806,"td",16)(807,"div",24)(808,"span",25),Qx(809,"p-mask-format-model"),zl(810,"br"),og()()(),Il(811,"td",20)(812,"code",27),Qx(813,"boolean"),og()(),Il(814,"td",22)(815,"p")(816,"code"),Qx(817,"false"),og()()(),Il(818,"td",23)(819,"em")(820,"strong"),Qx(821,"(opcional)"),og()(),Il(822,"p"),Qx(823,"Indica se o "),Il(824,"code"),Qx(825,"model"),og(),Qx(826," receber\xE1 o valor formatado pela m\xE1scara ou apenas o valor puro (sem formata\xE7\xE3o)."),og()()(),Il(827,"tr",15)(828,"td",16)(829,"div",24)(830,"span",25),Qx(831," p-mask-no-length-validation"),zl(832,"br"),og()()(),Il(833,"td",20)(834,"code",27),Qx(835,"boolean"),og()(),Il(836,"td",22)(837,"p")(838,"code"),Qx(839,"false"),og()()(),Il(840,"td",23)(841,"p"),Qx(842,"Controla como o componente aplica as valida\xE7\xF5es de comprimento m\xEDnimo ("),Il(843,"code"),Qx(844,"minLength"),og(),Qx(845,") e m\xE1ximo ("),Il(846,"code"),Qx(847,"maxLength"),og(),Qx(848,") quando h\xE1 uma m\xE1scara ("),Il(849,"code"),Qx(850,"p-mask"),og(),Qx(851,") definida."),og(),Il(852,"ul")(853,"li"),Qx(854,"Quando "),Il(855,"code"),Qx(856,"true"),og(),Qx(857,", apenas os caracteres alfanum\xE9ricos ser\xE3o contabilizados para a valida\xE7\xE3o dos comprimentos."),og(),Il(858,"li"),Qx(859,"Quando "),Il(860,"code"),Qx(861,"false"),og(),Qx(862,", todos os caracteres, incluindo os especiais da m\xE1scara, ser\xE3o considerados na valida\xE7\xE3o."),og()(),Il(863,"blockquote")(864,"p"),Qx(865,"Esta propriedade \xE9 ignorada quando utilizada em conjunto com "),Il(866,"code"),Qx(867,"p-mask-format-model"),og(),Qx(868,"."),og()(),Il(869,"p"),Qx(870,"Exemplo:"),og(),Il(871,"pre")(872,"code"),Qx(873,`<po-input
  p-mask="999-999"
  p-maxlength="6"
  p-minlength="4"
  p-mask-no-length-validation="true"
></po-input>
`),og()(),Il(874,"ul")(875,"li"),Qx(876,"Entrada: "),Il(877,"code"),Qx(878,"123-456"),og(),Qx(879," \u2192 Valida\xE7\xE3o ser\xE1 aplicada somente aos n\xFAmeros, ignorando o caractere especial "),Il(880,"code"),Qx(881,"-"),og(),Qx(882,"."),og()()()(),Il(883,"tr",15)(884,"td",16)(885,"div",24)(886,"span",25),Qx(887,"p-max"),zl(888,"br"),og()()(),Il(889,"td",20)(890,"code",31),Qx(891,"number"),og()(),Il(892,"td",22),Qx(893,"-"),og(),Il(894,"td",23)(895,"em")(896,"strong"),Qx(897,"(opcional)"),og()(),Il(898,"p"),Qx(899,"Valor m\xE1ximo."),og(),Il(900,"blockquote")(901,"p"),Qx(902,"Quando o valor m\xE1ximo for um n\xFAmero com decimais aconselha-se utilizar junto da propriedade "),Il(903,"code"),Qx(904,"p-step"),og(),Qx(905," tamb\xE9m passando a ela um valor decimal."),og()()()(),Il(906,"tr",15)(907,"td",16)(908,"div",24)(909,"span",25),Qx(910," p-maxlength"),zl(911,"br"),og()()(),Il(912,"td",20)(913,"code",31),Qx(914,"number"),og()(),Il(915,"td",22),Qx(916,"-"),og(),Il(917,"td",23)(918,"em")(919,"strong"),Qx(920,"(opcional)"),og()(),Il(921,"p"),Qx(922,"Indica a quantidade m\xE1xima de caracteres que o campo aceita."),og()()(),Il(923,"tr",15)(924,"td",16)(925,"div",24)(926,"span",25),Qx(927,"p-min"),zl(928,"br"),og()()(),Il(929,"td",20)(930,"code",31),Qx(931,"number"),og()(),Il(932,"td",22),Qx(933,"-"),og(),Il(934,"td",23)(935,"em")(936,"strong"),Qx(937,"(opcional)"),og()(),Il(938,"p"),Qx(939,"Valor m\xEDnimo."),og(),Il(940,"blockquote")(941,"p"),Qx(942,"Quando o valor m\xEDnimo for um n\xFAmero com decimais aconselha-se utilizar junto da propriedade "),Il(943,"code"),Qx(944,"p-step"),og(),Qx(945," tamb\xE9m passando a ela um valor decimal."),og()()()(),Il(946,"tr",15)(947,"td",16)(948,"div",24)(949,"span",25),Qx(950," p-minlength"),zl(951,"br"),og()()(),Il(952,"td",20)(953,"code",31),Qx(954,"number"),og()(),Il(955,"td",22),Qx(956,"-"),og(),Il(957,"td",23)(958,"em")(959,"strong"),Qx(960,"(opcional)"),og()(),Il(961,"p"),Qx(962,"Indica a quantidade m\xEDnima de caracteres que o campo aceita."),og()()(),Il(963,"tr",15)(964,"td",16)(965,"div",24)(966,"span",25),Qx(967," name"),zl(968,"br"),og()()(),Il(969,"td",20)(970,"code",26),Qx(971,"string"),og()(),Il(972,"td",22),Qx(973,"-"),og(),Il(974,"td",23)(975,"p"),Qx(976,"Nome e identificador do campo."),og()()(),Il(977,"tr",15)(978,"td",16)(979,"div",24)(980,"span",25),Qx(981," p-no-autocomplete"),zl(982,"br"),og()()(),Il(983,"td",20)(984,"code",27),Qx(985,"boolean"),og()(),Il(986,"td",22)(987,"p")(988,"code"),Qx(989,"false"),og()()(),Il(990,"td",23)(991,"em")(992,"strong"),Qx(993,"(opcional)"),og()(),Il(994,"p"),Qx(995,"Define a propriedade nativa "),Il(996,"code"),Qx(997,"autocomplete"),og(),Qx(998," do campo como "),Il(999,"code"),Qx(1e3,"off"),og(),Qx(1001,"."),og(),Il(1002,"blockquote")(1003,"p"),Qx(1004,"No componente "),Il(1005,"code"),Qx(1006,"po-password"),og(),Qx(1007," ser\xE1 definido como "),Il(1008,"code"),Qx(1009,"new-password"),og(),Qx(1010,"."),og()(),Il(1011,"p"),Qx(1012,"Nos componentes "),Il(1013,"code"),Qx(1014,"po-password"),og(),Qx(1015," e "),Il(1016,"code"),Qx(1017,"po-login"),og(),Qx(1018," o valor padr\xE3o ser\xE1 "),Il(1019,"code"),Qx(1020,"true"),og(),Qx(1021,"."),og()()(),Il(1022,"tr",15)(1023,"td",16)(1024,"div",24)(1025,"span",25),Qx(1026," p-optional"),zl(1027,"br"),og()()(),Il(1028,"td",20)(1029,"code",27),Qx(1030,"boolean"),og()(),Il(1031,"td",22)(1032,"p")(1033,"code"),Qx(1034,"false"),og()()(),Il(1035,"td",23)(1036,"em")(1037,"strong"),Qx(1038,"(opcional)"),og()(),Il(1039,"p"),Qx(1040,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),og(),Il(1041,"blockquote")(1042,"p"),Qx(1043,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),og()(),Il(1044,"ul")(1045,"li"),Qx(1046,"O campo conter "),Il(1047,"code"),Qx(1048,"p-required"),og(),Qx(1049,";"),og(),Il(1050,"li"),Qx(1051,"N\xE3o possuir "),Il(1052,"code"),Qx(1053,"p-help"),og(),Qx(1054," e/ou "),Il(1055,"code"),Qx(1056,"p-label"),og(),Qx(1057,"."),og()()()(),Il(1058,"tr",15)(1059,"td",16)(1060,"div",24)(1061,"span",25),Qx(1062,"p-pattern"),zl(1063,"br"),og()()(),Il(1064,"td",20)(1065,"code",26),Qx(1066,"string"),og()(),Il(1067,"td",22),Qx(1068,"-"),og(),Il(1069,"td",23)(1070,"em")(1071,"strong"),Qx(1072,"(opcional)"),og()(),Il(1073,"p"),Qx(1074,`Express\xE3o regular para validar o campo.
Quando o campo possuir uma m\xE1scara `),Il(1075,"code"),Qx(1076,"(p-mask)"),og(),Qx(1077,` ser\xE1 automaticamente validado por ela, por\xE9m
\xE9 poss\xEDvel definir um p-pattern para substituir a valida\xE7\xE3o da m\xE1scara.`),og()()(),Il(1078,"tr",15)(1079,"td",16)(1080,"div",24)(1081,"span",25),Qx(1082," p-placeholder"),zl(1083,"br"),og()()(),Il(1084,"td",20)(1085,"code",26),Qx(1086,"string"),og()(),Il(1087,"td",22)(1088,"p"),Qx(1089,"''"),og()(),Il(1090,"td",23)(1091,"em")(1092,"strong"),Qx(1093,"(opcional)"),og()(),Il(1094,"p"),Qx(1095,"Mensagem que aparecer\xE1 enquanto o campo n\xE3o estiver preenchido."),og()()(),Il(1096,"tr",15)(1097,"td",16)(1098,"div",24)(1099,"span",25),Qx(1100," p-helper"),zl(1101,"br"),og()()(),Il(1102,"td",20)(1103,"code",32),Qx(1104,"PoHelperOptions "),og(),Il(1105,"code",26),Qx(1106," string"),og()(),Il(1107,"td",22),Qx(1108,"-"),og(),Il(1109,"td",23)(1110,"em")(1111,"strong"),Qx(1112,"(opcional)"),og()(),Il(1113,"p"),Qx(1114,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label quando a propriedade "),Il(1115,"code"),Qx(1116,"p-label"),og(),Qx(1117," for definida, ou, ao lado do componente na aus\xEAncia da propriedade "),Il(1118,"code"),Qx(1119,"p-label"),og(),Qx(1120,"."),og(),Il(1121,"blockquote")(1122,"p"),Qx(1123,"Para mais informa\xE7\xF5es acesse: "),Il(1124,"a",33),Qx(1125,"https://po-ui.io/documentation/po-helper"),og(),Qx(1126,"."),og()(),Il(1127,"blockquote")(1128,"p"),Qx(1129,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),Il(1130,"code"),Qx(1131,"p-additional-help-tooltip"),og(),Qx(1132," e "),Il(1133,"code"),Qx(1134,"p-additional-help"),og(),Qx(1135,") ser\xE1 ignorado."),og()()()(),Il(1136,"tr",15)(1137,"td",16)(1138,"div",24)(1139,"span",25),Qx(1140,"p-readonly"),zl(1141,"br"),og()()(),Il(1142,"td",20)(1143,"code",27),Qx(1144,"boolean"),og()(),Il(1145,"td",22),Qx(1146,"-"),og(),Il(1147,"td",23)(1148,"em")(1149,"strong"),Qx(1150,"(opcional)"),og()(),Il(1151,"p"),Qx(1152,"Indica que o campo ser\xE1 somente leitura."),og()()(),Il(1153,"tr",15)(1154,"td",16)(1155,"div",24)(1156,"span",25),Qx(1157,"p-required"),zl(1158,"br"),og()()(),Il(1159,"td",20)(1160,"code",27),Qx(1161,"boolean"),og()(),Il(1162,"td",22)(1163,"p")(1164,"code"),Qx(1165,"false"),og()()(),Il(1166,"td",23)(1167,"em")(1168,"strong"),Qx(1169,"(opcional)"),og()(),Il(1170,"p"),Qx(1171,"Define que o campo ser\xE1 obrigat\xF3rio."),og(),Il(1172,"blockquote")(1173,"p"),Qx(1174,"Esta propriedade \xE9 desconsiderada quando o input est\xE1 desabilitado "),Il(1175,"code"),Qx(1176,"(p-disabled)"),og(),Qx(1177,"."),og()()()(),Il(1178,"tr",15)(1179,"td",16)(1180,"div",24)(1181,"span",25),Qx(1182," p-required-field-error-message"),zl(1183,"br"),og()()(),Il(1184,"td",20)(1185,"code",27),Qx(1186,"boolean"),og()(),Il(1187,"td",22)(1188,"p")(1189,"code"),Qx(1190,"false"),og()()(),Il(1191,"td",23)(1192,"em")(1193,"strong"),Qx(1194,"(opcional)"),og()(),Il(1195,"p"),Qx(1196,"Exibe a mensagem setada na propriedade "),Il(1197,"code"),Qx(1198,"p-error-pattern"),og(),Qx(1199," se o campo estiver vazio e for requerido."),og(),Il(1200,"blockquote")(1201,"p"),Qx(1202,"Necess\xE1rio que a propriedade "),Il(1203,"code"),Qx(1204,"p-required"),og(),Qx(1205," esteja habilitada."),og()()()(),Il(1206,"tr",15)(1207,"td",16)(1208,"div",24)(1209,"span",25),Qx(1210," p-show-required"),zl(1211,"br"),og()()(),Il(1212,"td",20)(1213,"code",27),Qx(1214,"boolean"),og()(),Il(1215,"td",22),Qx(1216,"-"),og(),Il(1217,"td",23)(1218,"p"),Qx(1219,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),og(),Il(1220,"blockquote")(1221,"p"),Qx(1222,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),og()(),Il(1223,"ul")(1224,"li"),Qx(1225,"N\xE3o possuir "),Il(1226,"code"),Qx(1227,"p-help"),og(),Qx(1228," e/ou "),Il(1229,"code"),Qx(1230,"p-label"),og(),Qx(1231,"."),og()()()(),Il(1232,"tr",15)(1233,"td",16)(1234,"div",24)(1235,"span",25),Qx(1236," p-size"),zl(1237,"br"),og()()(),Il(1238,"td",20)(1239,"code",26),Qx(1240,"string"),og()(),Il(1241,"td",22)(1242,"p")(1243,"code"),Qx(1244,"medium"),og()()(),Il(1245,"td",23)(1246,"em")(1247,"strong"),Qx(1248,"(opcional)"),og()(),Il(1249,"p"),Qx(1250,"Define o tamanho do componente:"),og(),Il(1251,"ul")(1252,"li")(1253,"code"),Qx(1254,"small"),og(),Qx(1255,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),og(),Il(1256,"li")(1257,"code"),Qx(1258,"medium"),og(),Qx(1259,": altura do input como 44px."),og()(),Il(1260,"blockquote")(1261,"p"),Qx(1262,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Il(1263,"code"),Qx(1264,"medium"),og(),Qx(1265,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Il(1266,"a",34),Qx(1267,"po-theme"),og(),Qx(1268,"."),og()()()(),Il(1269,"tr",15)(1270,"td",16)(1271,"div",24)(1272,"span",25),Qx(1273," p-step"),zl(1274,"br"),og()()(),Il(1275,"td",20)(1276,"code",26),Qx(1277,"string"),og()(),Il(1278,"td",22)(1279,"p"),Qx(1280,"1"),og()(),Il(1281,"td",23)(1282,"em")(1283,"strong"),Qx(1284,"(opcional)"),og()(),Il(1285,"p"),Qx(1286,"Intervalo."),og()()(),Il(1287,"tr",15)(1288,"td",16)(1289,"div",24)(1290,"span",25),Qx(1291," p-upper-case"),zl(1292,"br"),og()()(),Il(1293,"td",20)(1294,"code",27),Qx(1295,"boolean"),og()(),Il(1296,"td",22),Qx(1297,"-"),og(),Il(1298,"td",23)(1299,"p"),Qx(1300,"Converte o conte\xFAdo do campo em mai\xFAsulo automaticamente."),og()()()(),Il(1301,"h3",11),Qx(1302,"M\xE9todos"),og(),Il(1303,"table",35)(1304,"tr",15)(1305,"th",36)(1306,"div",24)(1307,"h4")(1308,"span",25),Qx(1309," showAdditionalHelp "),og()()()()(),Il(1310,"tr",23)(1311,"td",23)(1312,"p"),Qx(1313,"M\xE9todo que exibe "),Il(1314,"code"),Qx(1315,"p-helper"),og(),Qx(1316," ou executa a a\xE7\xE3o definida em "),Il(1317,"code"),Qx(1318,"p-helper{eventOnClick}"),og(),Qx(1319," ou em "),Il(1320,"code"),Qx(1321,"p-additionalHelp"),og(),Qx(1322,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Il(1323,"code"),Qx(1324,"p-keydown"),og(),Qx(1325,"."),og(),Il(1326,"blockquote")(1327,"p"),Qx(1328,"Exibe ou oculta o conte\xFAdo do componente "),Il(1329,"code"),Qx(1330,"po-helper"),og(),Qx(1331," quando o componente estiver com foco."),og()(),Il(1332,"pre")(1333,"code"),Qx(1334,`// Exemplo com p-label e p-helper
<po-nome-component
 #component
 ...
 p-label="Label do componente"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, component)"
></po-nome-component>
`),og()(),Il(1335,"pre")(1336,"code"),Qx(1337,`...
onKeyDown(event: KeyboardEvent, inp: PoNomeDoComponente): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),og()()()()(),zl(1338,"br"),Il(1339,"table",35)(1340,"tr",15)(1341,"th",36)(1342,"div",24)(1343,"h4")(1344,"span",25),Qx(1345," focus "),og()()()()(),Il(1346,"tr",23)(1347,"td",23)(1348,"p"),Qx(1349,"Fun\xE7\xE3o que atribui foco ao componente."),og(),Il(1350,"p"),Qx(1351,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),og(),Il(1352,"pre")(1353,"code"),Qx(1354,`import { PoNomeDoComponenteComponent } from '@po-ui/ng-components';

...

@ViewChild(PoNomeDoComponenteComponent, { static: true }) nomeDoComponente: PoNomeDoComponenteComponent;

focusComponent() {
  this.nomeDoComponente.focus();
}
`),og()()()()(),zl(1355,"br"),Il(1356,"h3"),Qx(1357,"Interfaces"),og(),Il(1358,"h4",37)(1359,"code",5),Qx(1360,"ErrorAsyncProperties"),og()(),Il(1361,"div",2)(1362,"p"),Qx(1363,"Interface para realizar uma valida\xE7\xE3o ass\xEDncrona no componente."),og()(),Il(1364,"h4",11),Qx(1365,"Propriedades"),og(),Il(1366,"table",12)(1367,"tr",13)(1368,"th",14),Qx(1369,"Nome"),og(),Il(1370,"th",14),Qx(1371,"Tipo"),og(),Il(1372,"th",14),Qx(1373,"Descri\xE7\xE3o"),og()(),Il(1374,"tr",15)(1375,"td",16)(1376,"div",24)(1377,"span",25),Qx(1378," errorAsync"),zl(1379,"br"),og()()(),Il(1380,"td",20)(1381,"code",38),Qx(1382,"(value) => Observable<boolean>"),og()(),Il(1383,"td",23)(1384,"p"),Qx(1385,`Fun\xE7\xE3o obrigat\xF3ria executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),Il(1386,"code"),Qx(1387,"change"),og(),Qx(1388," ou "),Il(1389,"code"),Qx(1390,"change-model"),og(),Qx(1391,", dependendo do valor da propriedade "),Il(1392,"code"),Qx(1393,"triggerMode"),og(),Qx(1394,"."),og()()(),Il(1395,"tr",15)(1396,"td",16)(1397,"div",24)(1398,"span",25),Qx(1399," triggerMode"),zl(1400,"br"),og()()(),Il(1401,"td",20)(1402,"code",39),Qx(1403,"'change' "),og(),Il(1404,"code",40),Qx(1405," 'changeModel'"),og()(),Il(1406,"td",23)(1407,"em")(1408,"strong"),Qx(1409,"(opcional)"),og()(),Il(1410,"p"),Qx(1411,"Controla se o m\xE9todo ser\xE1 executado no disparo do output "),Il(1412,"code"),Qx(1413,"change"),og(),Qx(1414," ou "),Il(1415,"code"),Qx(1416,"change-model"),og(),Qx(1417,"."),og()()()()());},dependencies:[Ka],encapsulation:2})}return l})();var de=(()=>{class l{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(d,r){this.route=d,this.router=r;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let r=d.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:"merge"}),this.activeTab=d;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(r){return new(r||l)(C(Xn),C(En))};static \u0275cmp=Un({type:l,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Number",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,i){r&1&&(Il(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return i.changeTab("doc")}),zl(3,"sample-po-number-doc"),og(),Il(4,"po-tab",3),ft("p-click",function(){return i.changeTab("web")}),zl(5,"sample-po-number-basic-view")(6,"sample-po-number-labs-view")(7,"sample-po-number-calculate-view"),og()()()),r&2&&(nw("p-actions",i.actions),Lp(2),nw("p-active",i.activeTab==="doc"),Lp(2),nw("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[cNe,qme,Yme,ie,ae,re,me],encapsulation:2})}return l})();var Ce=[{path:"",component:de}],pe=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275mod=fe({type:l});static \u0275inj=ue({imports:[uL.forChild(Ce),uL]})}return l})();var Ge=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275mod=fe({type:l});static \u0275inj=ue({imports:[sr,pe]})}return l})();export{Ge as DocPoNumberModule};