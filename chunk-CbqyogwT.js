import {f as fe$1,u as ue,s as sr,h as hL,w,c3 as Xn,E as En,U as Un,a as f,cM as Q9,cN as lm,b4 as L3,H as Wl,an as CO,aH as Ka,b8 as Bme,b9 as qme,F as Sl,z as eN,J as og,a1 as ft,L as Lp,ar as $x,au as dg,Q as nw,bs as fN,aX as Z9,aF as G9,aY as q9,aG as _k,aZ as mk,b0 as Qt,b1 as mv,c4 as b3,cp as Rhe,c8 as wde,aJ as Hhe,c9 as Ghe,aB as wx,aM as ww,aN as e0,aO as Ew,aP as n0,cQ as Mk,cR as Sk,cz as Pz,cX as I3,b6 as Yo,av as ql,aw as lo,ax as uo,a3 as rNe,aD as Ky,aT as nN,aE as Xy,bd as Nx}from'./main-WP3NAV7C.js';var ce=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-input-basic"]],standalone:false,decls:1,vars:0,consts:[["name","input","p-label","PO Input"]],template:function(r,i){r&1&&Wl(0,"po-input",0);},dependencies:[L3],encapsulation:2,changeDetection:1})}return a})();var ye=a=>({"docs-sample-code-tabs":a}),Ee=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-input-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Input Basic"),og(),Sl(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-input-basic/sample-po-input-basic.component.html"),og(),Sl(13,"pre",7),eN(14,`<po-input name="input" p-label="PO Input"> </po-input>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-input-basic/sample-po-input-basic.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-input-basic',
  templateUrl: './sample-po-input-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoInputBasicComponent {}
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-input-basic"),og(),Wl(23,"hr")),r&2&&(Lp(5),$x("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,ye,i.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,ce],encapsulation:2})}return a})();var ge=(()=>{class a{helperText;input;errorPattern;event;help;icon;label;mask;maxlength;minlength;pattern;placeholder;properties;size;iconOptions=[{value:"an an-newspaper",label:"an an-newspaper"},{value:"an an-magnifying-glass",label:"an an-magnifying-glass"},{value:"fa fa-calculator",label:"fa fa-calculator"}];propertiesOptions=[{value:"clean",label:"Clean"},{value:"disabled",label:"Disabled"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"},{value:"compactLabel",label:"Compact Label"},{value:"loading",label:"Loading"},{value:"maskFormatModel",label:"Formatted Model"},{value:"maskNoLengthValidation",label:"Mask No Length Validation"},{value:"noAutocomplete",label:"No Autocomplete"},{value:"optional",label:"Optional"},{value:"readonly",label:"Read Only"},{value:"required",label:"Required"},{value:"requiredFieldErrorMessage",label:"Required Field Error Message"},{value:"uppercase",label:"Upper Case"},{value:"showRequired",label:"Show Required"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore();}changeEvent(m){this.event=m;}restore(){this.helperText="",this.input=void 0,this.size="medium";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-input-labs"]],standalone:false,decls:22,vars:44,consts:[["f","ngForm"],["name","input",3,"ngModelChange","p-blur","p-change","p-change-model","p-enter","p-keydown","ngModel","p-helper","p-clean","p-disabled","p-error-pattern","p-help","p-icon","p-label","p-loading","p-mask","p-mask-format-model","p-maxlength","p-minlength","p-no-autocomplete","p-optional","p-pattern","p-placeholder","p-required","p-required-field-error-message","p-readonly","p-upper-case","p-show-required","p-mask-no-length-validation","p-size","p-error-limit","p-label-text-wrap","p-compact-label"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","errorPattern","p-clean","","p-label","Error Pattern",1,"po-md-6",3,"ngModelChange","ngModel"],["name","mask","p-clean","","p-help","Ex.: Zip code: '99999-999'; License plate: '@@@-9999'","p-label","Mask",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel"],["name","pattern","p-clean","","p-help","Ex.: '^(2[0-3]|[01][0-9]):?([0-5][0-9])$'","p-label","Pattern (Regex)",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel"],["name","minlength","p-clean","","p-label","Min Length",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","maxlength","p-clean","","p-label","Max Length",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","icon","p-clean","","p-label","Icon",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(r,i){if(r&1){let s=wx();Sl(0,"po-input",1),ww("ngModelChange",function(l){return Ky(s),nN(i.input,l)||(i.input=l),Xy(l)}),ft("p-blur",function(){return i.changeEvent("p-blur")})("p-change",function(){return i.changeEvent("p-change")})("p-change-model",function(){return i.changeEvent("p-change-model")})("p-enter",function(){return i.changeEvent("p-enter")})("p-keydown",function(){return i.changeEvent("p-keydown")}),og(),e0(),Wl(1,"po-divider"),Sl(2,"div",2),Wl(3,"po-info",3)(4,"po-info",4),og(),Wl(5,"po-divider"),Sl(6,"form",null,0)(8,"po-input",5),ww("ngModelChange",function(l){return Ky(s),nN(i.label,l)||(i.label=l),Xy(l)}),og(),e0(),Sl(9,"po-input",6),ww("ngModelChange",function(l){return Ky(s),nN(i.help,l)||(i.help=l),Xy(l)}),og(),e0(),Sl(10,"po-input",7),ww("ngModelChange",function(l){return Ky(s),nN(i.helperText,l)||(i.helperText=l),Xy(l)}),og(),e0(),Sl(11,"po-input",8),ww("ngModelChange",function(l){return Ky(s),nN(i.placeholder,l)||(i.placeholder=l),Xy(l)}),og(),e0(),Sl(12,"po-input",9),ww("ngModelChange",function(l){return Ky(s),nN(i.errorPattern,l)||(i.errorPattern=l),Xy(l)}),og(),e0(),Sl(13,"po-input",10),ww("ngModelChange",function(l){return Ky(s),nN(i.mask,l)||(i.mask=l),Xy(l)}),og(),e0(),Sl(14,"po-input",11),ww("ngModelChange",function(l){return Ky(s),nN(i.pattern,l)||(i.pattern=l),Xy(l)}),og(),e0(),Sl(15,"po-number",12),ww("ngModelChange",function(l){return Ky(s),nN(i.minlength,l)||(i.minlength=l),Xy(l)}),og(),e0(),Sl(16,"po-number",13),ww("ngModelChange",function(l){return Ky(s),nN(i.maxlength,l)||(i.maxlength=l),Xy(l)}),og(),e0(),Sl(17,"po-select",14),ww("ngModelChange",function(l){return Ky(s),nN(i.icon,l)||(i.icon=l),Xy(l)}),og(),e0(),Sl(18,"po-checkbox-group",15),ww("ngModelChange",function(l){return Ky(s),nN(i.properties,l)||(i.properties=l),Xy(l)}),og(),e0(),Sl(19,"po-radio-group",16),ww("ngModelChange",function(l){return Ky(s),nN(i.size,l)||(i.size=l),Xy(l)}),og(),e0(),Sl(20,"div",2)(21,"po-button",17),ft("p-click",function(){return Ky(s),Nx(7).reset(),Xy(i.restore())}),og()()();}r&2&&(Ew("ngModel",i.input),nw("p-helper",i.helperText)("p-clean",i.properties==null?null:i.properties.includes("clean"))("p-disabled",i.properties==null?null:i.properties.includes("disabled"))("p-error-pattern",i.errorPattern)("p-help",i.help)("p-icon",i.icon)("p-label",i.label)("p-loading",i.properties==null?null:i.properties.includes("loading"))("p-mask",i.mask)("p-mask-format-model",i.properties==null?null:i.properties.includes("maskFormatModel"))("p-maxlength",i.maxlength)("p-minlength",i.minlength)("p-no-autocomplete",i.properties==null?null:i.properties.includes("noAutocomplete"))("p-optional",i.properties==null?null:i.properties.includes("optional"))("p-pattern",i.pattern)("p-placeholder",i.placeholder)("p-required",i.properties==null?null:i.properties.includes("required"))("p-required-field-error-message",i.properties==null?null:i.properties.includes("requiredFieldErrorMessage"))("p-readonly",i.properties==null?null:i.properties.includes("readonly"))("p-upper-case",i.properties==null?null:i.properties.includes("uppercase"))("p-show-required",i.properties==null?null:i.properties.includes("showRequired"))("p-mask-no-length-validation",i.properties==null?null:i.properties.includes("maskNoLengthValidation"))("p-size",i.size)("p-error-limit",i.properties==null?null:i.properties.includes("errorLimit"))("p-label-text-wrap",i.properties==null?null:i.properties.includes("labelTextWrap"))("p-compact-label",i.properties==null?null:i.properties.includes("compactLabel")),n0(),Lp(3),nw("p-value",i.input),Lp(),nw("p-value",i.event),Lp(4),Ew("ngModel",i.label),n0(),Lp(),Ew("ngModel",i.help),n0(),Lp(),Ew("ngModel",i.helperText),n0(),Lp(),Ew("ngModel",i.placeholder),n0(),Lp(),Ew("ngModel",i.errorPattern),n0(),Lp(),Ew("ngModel",i.mask),n0(),Lp(),Ew("ngModel",i.pattern),n0(),Lp(),Ew("ngModel",i.minlength),n0(),Lp(),Ew("ngModel",i.maxlength),n0(),Lp(),Ew("ngModel",i.icon),nw("p-options",i.iconOptions),n0(),Lp(),Ew("ngModel",i.properties),nw("p-options",i.propertiesOptions),n0(),Lp(),Ew("ngModel",i.size),nw("p-options",i.sizeOptions),n0());},dependencies:[Z9,G9,q9,_k,mk,Qt,mv,b3,L3,Rhe,wde,Hhe,Ghe],encapsulation:2,changeDetection:1})}return a})();var _e=a=>({"docs-sample-code-tabs":a}),be=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-input-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Input Labs"),og(),Sl(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-input-labs/sample-po-input-labs.component.html"),og(),Sl(13,"pre",7),eN(14,`<po-input
  name="input"
  [(ngModel)]="input"
  [p-helper]="helperText"
  [p-clean]="$safeNavigationMigration(properties?.includes('clean'))"
  [p-disabled]="$safeNavigationMigration(properties?.includes('disabled'))"
  [p-error-pattern]="errorPattern"
  [p-help]="help"
  [p-icon]="icon"
  [p-label]="label"
  [p-loading]="$safeNavigationMigration(properties?.includes('loading'))"
  [p-mask]="mask"
  [p-mask-format-model]="$safeNavigationMigration(properties?.includes('maskFormatModel'))"
  [p-maxlength]="maxlength"
  [p-minlength]="minlength"
  [p-no-autocomplete]="$safeNavigationMigration(properties?.includes('noAutocomplete'))"
  [p-optional]="$safeNavigationMigration(properties?.includes('optional'))"
  [p-pattern]="pattern"
  [p-placeholder]="placeholder"
  [p-required]="$safeNavigationMigration(properties?.includes('required'))"
  [p-required-field-error-message]="$safeNavigationMigration(properties?.includes('requiredFieldErrorMessage'))"
  [p-readonly]="$safeNavigationMigration(properties?.includes('readonly'))"
  [p-upper-case]="$safeNavigationMigration(properties?.includes('uppercase'))"
  [p-show-required]="$safeNavigationMigration(properties?.includes('showRequired'))"
  [p-mask-no-length-validation]="$safeNavigationMigration(properties?.includes('maskNoLengthValidation'))"
  [p-size]="size"
  (p-blur)="changeEvent('p-blur')"
  (p-change)="changeEvent('p-change')"
  (p-change-model)="changeEvent('p-change-model')"
  (p-enter)="changeEvent('p-enter')"
  (p-keydown)="changeEvent('p-keydown')"
  [p-error-limit]="$safeNavigationMigration(properties?.includes('errorLimit'))"
  [p-label-text-wrap]="$safeNavigationMigration(properties?.includes('labelTextWrap'))"
  [p-compact-label]="$safeNavigationMigration(properties?.includes('compactLabel'))"
>
</po-input>

<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="input"> </po-info>

  <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
</div>

<po-divider />

<form #f="ngForm">
  <po-input class="po-md-6" name="label" [(ngModel)]="label" p-clean p-label="Label"> </po-input>

  <po-input class="po-md-6" name="help" [(ngModel)]="help" p-clean p-label="Help"> </po-input>

  <po-input class="po-md-6" name="helperText" [(ngModel)]="helperText" p-clean p-label="Additional Help"> </po-input>

  <po-input class="po-md-6" name="placeholder" [(ngModel)]="placeholder" p-clean p-label="Placeholder"> </po-input>

  <po-input class="po-md-6" name="errorPattern" [(ngModel)]="errorPattern" p-clean p-label="Error Pattern"> </po-input>

  <po-input
    class="po-md-12 po-lg-6"
    name="mask"
    [(ngModel)]="mask"
    p-clean
    p-help="Ex.: Zip code: '99999-999'; License plate: '@@@-9999'"
    p-label="Mask"
  >
  </po-input>

  <po-input
    class="po-md-12 po-lg-6"
    name="pattern"
    [(ngModel)]="pattern"
    p-clean
    p-help="Ex.: '^(2[0-3]|[01][0-9]):?([0-5][0-9])$'"
    p-label="Pattern (Regex)"
  >
  </po-input>

  <po-number class="po-md-6 po-lg-3" name="minlength" [(ngModel)]="minlength" p-clean p-label="Min Length"> </po-number>

  <po-number class="po-md-6 po-lg-3" name="maxlength" [(ngModel)]="maxlength" p-clean p-label="Max Length"> </po-number>

  <po-select class="po-md-6" name="icon" [(ngModel)]="icon" p-clean p-label="Icon" [p-options]="iconOptions">
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
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="f.reset(); this.restore()"> </po-button>
  </div>
</form>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-input-labs/sample-po-input-labs.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { PoCheckboxGroupOption, PoRadioGroupOption, PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-input-labs',
  templateUrl: './sample-po-input-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoInputLabsComponent implements OnInit {
  helperText: string;
  input: string;
  errorPattern: string;
  event: string;
  help: string;
  icon: string;
  label: string;
  mask: string;
  maxlength: number;
  minlength: number;
  pattern: string;
  placeholder: string;
  properties: Array<string>;
  size: string;

  public readonly iconOptions: Array<PoSelectOption> = [
    { value: 'an an-newspaper', label: 'an an-newspaper' },
    { value: 'an an-magnifying-glass', label: 'an an-magnifying-glass' },
    { value: 'fa fa-calculator', label: 'fa fa-calculator' }
  ];

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'clean', label: 'Clean' },
    { value: 'disabled', label: 'Disabled' },
    { value: 'errorLimit', label: 'Limit Error Message' },
    { value: 'labelTextWrap', label: 'Label Text Wrap' },
    { value: 'compactLabel', label: 'Compact Label' },
    { value: 'loading', label: 'Loading' },
    { value: 'maskFormatModel', label: 'Formatted Model' },
    { value: 'maskNoLengthValidation', label: 'Mask No Length Validation' },
    { value: 'noAutocomplete', label: 'No Autocomplete' },
    { value: 'optional', label: 'Optional' },
    { value: 'readonly', label: 'Read Only' },
    { value: 'required', label: 'Required' },
    { value: 'requiredFieldErrorMessage', label: 'Required Field Error Message' },
    { value: 'uppercase', label: 'Upper Case' },
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
    this.input = undefined;
    this.size = 'medium';
  }
}
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-input-labs"),og(),Wl(23,"hr")),r&2&&(Lp(5),$x("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,_e,i.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,ge],encapsulation:2})}return a})();var qe=["reactiveFormData"],Se=(()=>{class a{fb=f(Q9);reactiveFormModal;reactiveForm;modalPrimaryAction={action:()=>this.reactiveFormModal.close(),label:"Close"};constructor(){this.createReactiveForm();}createReactiveForm(){this.reactiveForm=this.fb.group({name:["",lm.compose([lm.required,lm.minLength(5),lm.maxLength(30)])],address:["",lm.compose([lm.required,lm.minLength(5),lm.maxLength(50)])],number:["",lm.compose([lm.required,lm.min(1),lm.max(99999)])],email:["",lm.required],website:["",lm.required]});}saveForm(){this.reactiveFormModal.open();}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-input-reactive-form"]],viewQuery:function(r,i){if(r&1&&ql(qe,7),r&2){let s;lo(s=uo())&&(i.reactiveFormModal=s.first);}},standalone:false,decls:23,vars:8,consts:[["reactiveFormData",""],[3,"formGroup"],[1,"po-row"],["formControlName","name","p-clean","","p-icon","an an-user","p-label","Customer name",1,"po-md-12"],["formControlName","address","p-clean","","p-icon","an an-map-pin","p-label","Address",1,"po-lg-9"],["formControlName","number","p-label","Number","p-clean","",1,"po-lg-3"],["formControlName","email","p-label","Email","p-clean","",1,"po-lg-6"],["formControlName","website","p-label","Website","p-clean","",1,"po-lg-6"],["p-label","Save",1,"po-md-3",3,"p-click","p-disabled"],["p-title","Save successful",3,"p-primary-action"],["p-label","Name",1,"po-md-12",3,"p-value"],["p-label","Address",1,"po-md-6",3,"p-value"],["p-label","Number",1,"po-md-6",3,"p-value"],["p-label","Email",1,"po-md-6",3,"p-value"],["p-label","Website",1,"po-md-6",3,"p-value"]],template:function(r,i){r&1&&(Sl(0,"form",1)(1,"div",2),Wl(2,"po-input",3),e0(),og(),Sl(3,"div",2),Wl(4,"po-input",4),e0(),Wl(5,"po-number",5),e0(),og(),Sl(6,"div",2),Wl(7,"po-email",6),e0(),Wl(8,"po-url",7),e0(),og(),Sl(9,"div",2)(10,"po-button",8),ft("p-click",function(){return i.saveForm()}),og()()(),Sl(11,"po-modal",9,0)(13,"div",2),Wl(14,"po-info",10),og(),Wl(15,"po-divider"),Sl(16,"div",2),Wl(17,"po-info",11)(18,"po-info",12),og(),Wl(19,"po-divider"),Sl(20,"div",2),Wl(21,"po-info",13)(22,"po-info",14),og()()),r&2&&(nw("formGroup",i.reactiveForm),Lp(2),n0(),Lp(2),n0(),Lp(),n0(),Lp(2),n0(),Lp(),n0(),Lp(2),nw("p-disabled",!i.reactiveForm.valid),Lp(),nw("p-primary-action",i.modalPrimaryAction),Lp(3),nw("p-value",i.reactiveForm.controls.name.value),Lp(3),nw("p-value",i.reactiveForm.controls.address.value),Lp(),nw("p-value",i.reactiveForm.controls.number.value),Lp(3),nw("p-value",i.reactiveForm.controls.email.value),Lp(),nw("p-value",i.reactiveForm.controls.website.value));},dependencies:[Z9,G9,q9,Mk,Sk,Qt,mv,Pz,L3,Rhe,I3,Ghe,Yo],encapsulation:2,changeDetection:1})}return a})();var Fe=a=>({"docs-sample-code-tabs":a}),xe=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-input-reactive-form-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Input - Reactive Form"),og(),Sl(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-input-reactive-form/sample-po-input-reactive-form.component.html"),og(),Sl(13,"pre",7),eN(14,`<form [formGroup]="reactiveForm">
  <div class="po-row">
    <po-input class="po-md-12" formControlName="name" p-clean p-icon="an an-user" p-label="Customer name"> </po-input>
  </div>

  <div class="po-row">
    <po-input class="po-lg-9" formControlName="address" p-clean p-icon="an an-map-pin" p-label="Address"> </po-input>

    <po-number class="po-lg-3" formControlName="number" p-label="Number" p-clean> </po-number>
  </div>

  <div class="po-row">
    <po-email class="po-lg-6" formControlName="email" p-label="Email" p-clean> </po-email>

    <po-url class="po-lg-6" formControlName="website" p-label="Website" p-clean> </po-url>
  </div>

  <div class="po-row">
    <po-button class="po-md-3" p-label="Save" [p-disabled]="!reactiveForm.valid" (p-click)="saveForm()"> </po-button>
  </div>
</form>

<po-modal #reactiveFormData p-title="Save successful" [p-primary-action]="modalPrimaryAction">
  <div class="po-row">
    <po-info class="po-md-12" p-label="Name" [p-value]="reactiveForm.controls.name.value"> </po-info>
  </div>

  <po-divider />

  <div class="po-row">
    <po-info class="po-md-6" p-label="Address" [p-value]="reactiveForm.controls.address.value"> </po-info>

    <po-info class="po-md-6" p-label="Number" [p-value]="reactiveForm.controls.number.value"> </po-info>
  </div>

  <po-divider />

  <div class="po-row">
    <po-info class="po-md-6" p-label="Email" [p-value]="reactiveForm.controls.email.value"> </po-info>

    <po-info class="po-md-6" p-label="Website" [p-value]="reactiveForm.controls.website.value"> </po-info>
  </div>
</po-modal>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-input-reactive-form/sample-po-input-reactive-form.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

import { PoModalAction, PoModalComponent } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-input-reactive-form',
  templateUrl: './sample-po-input-reactive-form.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoInputReactiveFormComponent {
  private fb = inject(UntypedFormBuilder);

  @ViewChild('reactiveFormData', { static: true }) reactiveFormModal: PoModalComponent;

  reactiveForm: UntypedFormGroup;

  public readonly modalPrimaryAction: PoModalAction = {
    action: () => this.reactiveFormModal.close(),
    label: 'Close'
  };

  constructor() {
    this.createReactiveForm();
  }

  createReactiveForm() {
    this.reactiveForm = this.fb.group({
      name: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(30)])],
      address: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(50)])],
      number: ['', Validators.compose([Validators.required, Validators.min(1), Validators.max(99999)])],
      email: ['', Validators.required],
      website: ['', Validators.required]
    });
  }

  saveForm() {
    this.reactiveFormModal.open();
  }
}
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-input-reactive-form"),og(),Wl(23,"hr")),r&2&&(Lp(5),$x("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,Fe,i.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,Se],encapsulation:2})}return a})();var he=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-input-doc"]],standalone:false,decls:1336,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/grid-system"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","ErrorAsyncProperties"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-helper"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","(value)","=>","Observable<boolean>"],["pan","",1,"docs-api-property-type","'change'"],["pan","",1,"docs-api-property-type","'changeModel'"]],template:function(r,i){r&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),eN(3,"import { PoFieldModule } from '@po-ui/ng-components';"),og()(),Sl(4,"div",2)(5,"p"),eN(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),og(),Sl(7,"blockquote")(8,"p"),eN(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),Sl(10,"code"),eN(11,"FormsModule"),og(),eN(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Sl(13,"code"),eN(14,"ReactiveFormsModule"),og(),eN(15,", ambos nativos do Angular."),og()()(),Sl(16,"h3",3),eN(17,"Componente"),og(),Sl(18,"h4",4)(19,"code",5),eN(20,"PoInputComponent"),og()(),Sl(21,"div",2)(22,"p"),eN(23,`Este \xE9 um componente baseado em input, com v\xE1rias propriedades do input nativo e outras
propriedades extras como: m\xE1scara, pattern, mensagem de erro e etc.
Voc\xEA deve informar a vari\xE1vel que cont\xE9m o valor como [(ngModel)]="variavel", para que o
input receba o valor da vari\xE1vel e para que ela receba as altera\xE7\xF5es do valor (two-way-databinding).
A propriedade name \xE9 obrigat\xF3ria para que o formul\xE1rio e o model funcionem corretamente.`),og(),Sl(24,"p"),eN(25,"Importante:"),og(),Sl(26,"ul")(27,"li"),eN(28,`Caso o input tenha um [(ngModel)] sem o atributo name, ocorrer\xE1 um erro de angular.
Ent\xE3o voc\xEA precisa informar o atributo name ou o atributo [ngModelOptions]="{standalone: true}".
Exemplo: [(ngModel)]="pessoa.nome" [ngModelOptions]="{standalone: true}".`),og()(),Sl(29,"h4"),eN(30,"Tokens customiz\xE1veis"),og(),Sl(31,"p"),eN(32,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS): "),Wl(33,"br"),eN(34,`
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),Sl(35,"code"),eN(36,".po-input"),og()(),Sl(37,"blockquote")(38,"p"),eN(39,"Para correto alinhamento \xE9 recomendado o uso das classes de espa\xE7amento do "),Sl(40,"a",6),eN(41,"Grid System"),og(),eN(42,"."),og()(),Sl(43,"blockquote")(44,"p"),eN(45,"Para maiores informa\xE7\xF5es, acesse o guia "),Sl(46,"a",7),eN(47,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),eN(48,"."),og()(),Sl(49,"table")(50,"thead")(51,"tr")(52,"th"),eN(53,"Propriedade"),og(),Sl(54,"th"),eN(55,"Descri\xE7\xE3o"),og(),Sl(56,"th"),eN(57,"Valor Padr\xE3o"),og()()(),Sl(58,"tbody")(59,"tr")(60,"td")(61,"strong"),eN(62,"Default Values"),og()(),Wl(63,"td")(64,"td"),og(),Sl(65,"tr")(66,"td")(67,"code"),eN(68,"--font-family"),og()(),Sl(69,"td"),eN(70,"Fam\xEDlia tipogr\xE1fica usada"),og(),Sl(71,"td")(72,"code"),eN(73,"var(--font-family-theme)"),og()()(),Sl(74,"tr")(75,"td")(76,"code"),eN(77,"--font-size"),og()(),Sl(78,"td"),eN(79,"Tamanho da fonte"),og(),Sl(80,"td")(81,"code"),eN(82,"var(--font-size-default)"),og()()(),Sl(83,"tr")(84,"td")(85,"code"),eN(86,"--text-color-placeholder"),og()(),Sl(87,"td"),eN(88,"Cor do texto placeholder"),og(),Sl(89,"td")(90,"code"),eN(91,"var(--color-neutral-light-30)"),og()()(),Sl(92,"tr")(93,"td")(94,"code"),eN(95,"--color"),og()(),Sl(96,"td"),eN(97,"Cor pincipal do input"),og(),Sl(98,"td")(99,"code"),eN(100,"var(--color-neutral-dark-70)"),og()()(),Sl(101,"tr")(102,"td")(103,"code"),eN(104,"--background"),og()(),Sl(105,"td"),eN(106,"Cor de background"),og(),Sl(107,"td")(108,"code"),eN(109,"var(--color-neutral-light-05)"),og()()(),Sl(110,"tr")(111,"td")(112,"code"),eN(113,"--padding"),og()(),Sl(114,"td"),eN(115,"Preenchimento"),og(),Sl(116,"td")(117,"code"),eN(118,"0 0.5rem"),og()()(),Sl(119,"tr")(120,"td")(121,"code"),eN(122,"--text-color"),og()(),Sl(123,"td"),eN(124,"Cor do texto"),og(),Sl(125,"td")(126,"code"),eN(127,"var(--color-neutral-dark-90)"),og()()(),Sl(128,"tr")(129,"td")(130,"code"),eN(131,"--field-container-title-justify"),og()(),Sl(132,"td"),eN(133,"Alinhamento horizontal do t\xEDtulo ("),Sl(134,"code"),eN(135,"justify-content"),og(),eN(136,")"),og(),Sl(137,"td")(138,"code"),eN(139,"space-between"),og()()(),Sl(140,"tr")(141,"td")(142,"code"),eN(143,"--field-container-title-flex"),og()(),Sl(144,"td"),eN(145,"Flex do t\xEDtulo ("),Sl(146,"code"),eN(147,"flex"),og(),eN(148,")"),og(),Sl(149,"td")(150,"code"),eN(151,"1 auto"),og()()(),Sl(152,"tr")(153,"td")(154,"strong"),eN(155,"Hover"),og()(),Wl(156,"td")(157,"td"),og(),Sl(158,"tr")(159,"td")(160,"code"),eN(161,"--color-hover"),og()(),Sl(162,"td"),eN(163,"Cor principal no estado hover"),og(),Sl(164,"td")(165,"code"),eN(166,"var(--color-brand-01-dark)"),og()()(),Sl(167,"tr")(168,"td")(169,"code"),eN(170,"--background-hover"),og()(),Sl(171,"td"),eN(172,"Cor de background no estado hover"),og(),Sl(173,"td")(174,"code"),eN(175,"var(--color-brand-01-lightest)"),og()()(),Sl(176,"tr")(177,"td")(178,"strong"),eN(179,"Focused"),og()(),Wl(180,"td")(181,"td"),og(),Sl(182,"tr")(183,"td")(184,"code"),eN(185,"--color-focused"),og()(),Sl(186,"td"),eN(187,"Cor principal no estado de focus"),og(),Sl(188,"td")(189,"code"),eN(190,"var(--color-action-default)"),og()()(),Sl(191,"tr")(192,"td")(193,"code"),eN(194,"--outline-color-focused"),og()(),Sl(195,"td"),eN(196,"Cor do outline do estado de focus"),og(),Sl(197,"td")(198,"code"),eN(199,"var(--color-action-focus)"),og()()(),Sl(200,"tr")(201,"td")(202,"strong"),eN(203,"Disabled"),og()(),Wl(204,"td")(205,"td"),og(),Sl(206,"tr")(207,"td")(208,"code"),eN(209,"--color-disabled"),og()(),Sl(210,"td"),eN(211,"Cor principal no estado disabled"),og(),Sl(212,"td")(213,"code"),eN(214,"var(--color-neutral-light-30)"),og()()(),Sl(215,"tr")(216,"td")(217,"code"),eN(218,"--background-disabled"),og()(),Sl(219,"td"),eN(220,"Cor de background no estado disabled"),og(),Sl(221,"td")(222,"code"),eN(223,"var(--color-neutral-light-20)"),og()()(),Sl(224,"tr")(225,"td")(226,"code"),eN(227,"--text-color-disabled"),og()(),Sl(228,"td"),eN(229,"Cor do texto no estado disabled"),og(),Sl(230,"td")(231,"code"),eN(232,"var(--color-neutral-dark-70)"),og()()()()(),Wl(233,"br"),og(),Sl(234,"div",8)(235,"h4",9),eN(236,"Seletor"),og(),Sl(237,"pre",10),eN(238,`<po-input
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
    p-maxlength="number"
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
    p-upper-case="boolean" >
</po-input>
`),og()(),Sl(239,"h4",11),eN(240,"Propriedades"),og(),Sl(241,"table",12)(242,"tr",13)(243,"th",14),eN(244,"Nome"),og(),Sl(245,"th",14),eN(246,"Tipo"),og(),Sl(247,"th",14),eN(248,"Padr\xE3o"),og(),Sl(249,"th",14),eN(250,"Descri\xE7\xE3o"),og()(),Sl(251,"tr",15)(252,"td",16)(253,"div",17)(254,"span",18),eN(255," (p-additional-help)"),Wl(256,"br"),og()(),Sl(257,"div",19),eN(258,"Deprecated"),og()(),Sl(259,"td",20)(260,"code",21),eN(261,"EventEmitter"),og()(),Sl(262,"td",22),eN(263,"-"),og(),Sl(264,"td",23)(265,"em")(266,"strong"),eN(267,"(opcional)"),og()(),Sl(268,"p"),eN(269,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),og(),Sl(270,"blockquote")(271,"p"),eN(272,"Essa propriedade est\xE1 "),Sl(273,"strong"),eN(274,"depreciada"),og(),eN(275," e ser\xE1 removida na vers\xE3o "),Sl(276,"code"),eN(277,"23.x.x"),og(),eN(278,". Recomendamos utilizar a propriedade "),Sl(279,"code"),eN(280,"p-helper"),og(),eN(281," que oferece mais recursos e flexibilidade."),og()()()(),Sl(282,"tr",15)(283,"td",16)(284,"div",24)(285,"span",25),eN(286," p-additional-help-tooltip"),Wl(287,"br"),og()(),Sl(288,"div",19),eN(289,"Deprecated"),og()(),Sl(290,"td",20)(291,"code",26),eN(292,"string"),og()(),Sl(293,"td",22),eN(294,"-"),og(),Sl(295,"td",23)(296,"em")(297,"strong"),eN(298,"(opcional)"),og()(),Sl(299,"p"),eN(300,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),Sl(301,"code"),eN(302,"po-helper"),og(),eN(303,`.
`),Sl(304,"strong"),eN(305,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),og()(),Sl(306,"blockquote")(307,"p"),eN(308,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),og()(),Sl(309,"blockquote")(310,"p"),eN(311,"Essa propriedade est\xE1 "),Sl(312,"strong"),eN(313,"depreciada"),og(),eN(314," e ser\xE1 removida na vers\xE3o "),Sl(315,"code"),eN(316,"23.x.x"),og(),eN(317,". Recomendamos utilizar a propriedade "),Sl(318,"code"),eN(319,"p-helper"),og(),eN(320," que oferece mais recursos e flexibilidade."),og()()()(),Sl(321,"tr",15)(322,"td",16)(323,"div",24)(324,"span",25),eN(325," p-append-in-body"),Wl(326,"br"),og()()(),Sl(327,"td",20)(328,"code",27),eN(329,"boolean"),og()(),Sl(330,"td",22)(331,"p")(332,"code"),eN(333,"false"),og()()(),Sl(334,"td",23)(335,"em")(336,"strong"),eN(337,"(opcional)"),og()(),Sl(338,"p"),eN(339,"Define que o popover ("),Sl(340,"code"),eN(341,"p-helper"),og(),eN(342," e/ou "),Sl(343,"code"),eN(344,"p-error-limit"),og(),eN(345,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),og(),Sl(346,"blockquote")(347,"p"),eN(348,"Quando utilizado com "),Sl(349,"code"),eN(350,"p-helper"),og(),eN(351,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),og()()()(),Sl(352,"tr",15)(353,"td",16)(354,"div",24)(355,"span",25),eN(356," p-auto-focus"),Wl(357,"br"),og()()(),Sl(358,"td",20)(359,"code",27),eN(360,"boolean"),og()(),Sl(361,"td",22)(362,"p")(363,"code"),eN(364,"false"),og()()(),Sl(365,"td",23)(366,"em")(367,"strong"),eN(368,"(opcional)"),og()(),Sl(369,"p"),eN(370,"Aplica foco no elemento ao ser iniciado."),og(),Sl(371,"blockquote")(372,"p"),eN(373,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),og()()()(),Sl(374,"tr",15)(375,"td",16)(376,"div",17)(377,"span",18),eN(378," (p-blur)"),Wl(379,"br"),og()()(),Sl(380,"td",20)(381,"code",21),eN(382,"EventEmitter"),og()(),Sl(383,"td",22),eN(384,"-"),og(),Sl(385,"td",23)(386,"em")(387,"strong"),eN(388,"(opcional)"),og()(),Sl(389,"p"),eN(390,"Evento disparado ao sair do campo."),og()()(),Sl(391,"tr",15)(392,"td",16)(393,"div",17)(394,"span",18),eN(395," (p-change)"),Wl(396,"br"),og()()(),Sl(397,"td",20)(398,"code",21),eN(399,"EventEmitter"),og()(),Sl(400,"td",22),eN(401,"-"),og(),Sl(402,"td",23)(403,"em")(404,"strong"),eN(405,"(opcional)"),og()(),Sl(406,"p"),eN(407,"Evento disparado ao alterar valor e deixar o campo."),og()()(),Sl(408,"tr",15)(409,"td",16)(410,"div",17)(411,"span",18),eN(412," (p-change-model)"),Wl(413,"br"),og()()(),Sl(414,"td",20)(415,"code",21),eN(416,"EventEmitter"),og()(),Sl(417,"td",22),eN(418,"-"),og(),Sl(419,"td",23)(420,"em")(421,"strong"),eN(422,"(opcional)"),og()(),Sl(423,"p"),eN(424,"Evento disparado ao alterar valor do model."),og()()(),Sl(425,"tr",15)(426,"td",16)(427,"div",24)(428,"span",25),eN(429,"p-clean"),Wl(430,"br"),og()()(),Sl(431,"td",20)(432,"code",27),eN(433,"boolean"),og()(),Sl(434,"td",22),eN(435,"-"),og(),Sl(436,"td",23)(437,"em")(438,"strong"),eN(439,"(opcional)"),og()(),Sl(440,"p"),eN(441,"Se verdadeiro, o campo receber\xE1 um bot\xE3o para ser limpo."),og()()(),Sl(442,"tr",15)(443,"td",16)(444,"div",24)(445,"span",25),eN(446," p-compact-label"),Wl(447,"br"),og()()(),Sl(448,"td",20)(449,"code",27),eN(450,"boolean"),og()(),Sl(451,"td",22)(452,"p")(453,"code"),eN(454,"false"),og()()(),Sl(455,"td",23)(456,"em")(457,"strong"),eN(458,"(opcional)"),og()(),Sl(459,"p"),eN(460,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),og(),Sl(461,"p"),eN(462,"Quando habilitado ("),Sl(463,"code"),eN(464,"true"),og(),eN(465,"), o modo compacto afeta o conjunto composto por:"),og(),Sl(466,"ul")(467,"li")(468,"code"),eN(469,"po-label"),og()(),Sl(470,"li")(471,"code"),eN(472,"p-requirement (showRequired)"),og()(),Sl(473,"li")(474,"code"),eN(475,"po-helper"),og()()(),Sl(476,"p"),eN(477,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),og(),Sl(478,"p"),eN(479,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),og(),Sl(480,"ul")(481,"li")(482,"code"),eN(483,"--field-container-title-justify"),og()(),Sl(484,"li")(485,"code"),eN(486,"--field-container-title-flex"),og()()(),Sl(487,"p"),eN(488,"Exemplo:"),og(),Sl(489,"pre")(490,"code"),eN(491,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),og()(),Sl(492,"p"),eN(493,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),og()()(),Sl(494,"tr",15)(495,"td",16)(496,"div",24)(497,"span",25),eN(498,"p-disabled"),Wl(499,"br"),og()()(),Sl(500,"td",20)(501,"code",27),eN(502,"boolean"),og()(),Sl(503,"td",22)(504,"p")(505,"code"),eN(506,"false"),og()()(),Sl(507,"td",23)(508,"em")(509,"strong"),eN(510,"(opcional)"),og()(),Sl(511,"p"),eN(512,"Se verdadeiro, desabilita o campo."),og()()(),Sl(513,"tr",15)(514,"td",16)(515,"div",24)(516,"span",25),eN(517," p-emit-all-changes"),Wl(518,"br"),og()()(),Sl(519,"td",20)(520,"code",27),eN(521,"boolean"),og()(),Sl(522,"td",22)(523,"p")(524,"code"),eN(525,"false"),og()()(),Sl(526,"td",23)(527,"em")(528,"strong"),eN(529,"(opcional)"),og()(),Sl(530,"p"),eN(531,"Sempre emite as altera\xE7\xF5es do model mesmo quando o valor atual for igual ao valor anterior."),og()()(),Sl(532,"tr",15)(533,"td",16)(534,"div",17)(535,"span",18),eN(536," (p-enter)"),Wl(537,"br"),og()()(),Sl(538,"td",20)(539,"code",21),eN(540,"EventEmitter"),og()(),Sl(541,"td",22),eN(542,"-"),og(),Sl(543,"td",23)(544,"em")(545,"strong"),eN(546,"(opcional)"),og()(),Sl(547,"p"),eN(548,"Evento disparado ao entrar do campo."),og()()(),Sl(549,"tr",15)(550,"td",16)(551,"div",24)(552,"span",25),eN(553," p-error-async-properties"),Wl(554,"br"),og()()(),Sl(555,"td",20)(556,"code",28),eN(557,"ErrorAsyncProperties"),og()(),Sl(558,"td",22),eN(559,"-"),og(),Sl(560,"td",23)(561,"em")(562,"strong"),eN(563,"(opcional)"),og()(),Sl(564,"p"),eN(565,`Realiza alguma valida\xE7\xE3o customizada ass\xEDncrona no componente.
Aconselhamos a utiliza\xE7\xE3o dessa propriedade somente em componentes que n\xE3o estejam
utilizando `),Sl(566,"code"),eN(567,"Reactive Forms"),og(),eN(568,". Em formul\xE1rios reativos, pode-se utilizar o pr\xF3prio "),Sl(569,"code"),eN(570,"asyncValidators"),og(),eN(571,"."),og()()(),Sl(572,"tr",15)(573,"td",16)(574,"div",24)(575,"span",25),eN(576," p-error-limit"),Wl(577,"br"),og()()(),Sl(578,"td",20)(579,"code",27),eN(580,"boolean"),og()(),Sl(581,"td",22)(582,"p")(583,"code"),eN(584,"false"),og()()(),Sl(585,"td",23)(586,"em")(587,"strong"),eN(588,"(opcional)"),og()(),Sl(589,"p"),eN(590,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),og(),Sl(591,"blockquote")(592,"p"),eN(593,"Caso essa propriedade seja definida como "),Sl(594,"code"),eN(595,"true"),og(),eN(596,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),og()()()(),Sl(597,"tr",15)(598,"td",16)(599,"div",24)(600,"span",25),eN(601," p-error-pattern"),Wl(602,"br"),og()()(),Sl(603,"td",20)(604,"code",26),eN(605,"string"),og()(),Sl(606,"td",22),eN(607,"-"),og(),Sl(608,"td",23)(609,"em")(610,"strong"),eN(611,"(opcional)"),og()(),Sl(612,"p"),eN(613,"Mensagem que ser\xE1 apresentada quando o "),Sl(614,"code"),eN(615,"pattern"),og(),eN(616," ou a m\xE1scara n\xE3o for satisfeita."),og(),Sl(617,"blockquote")(618,"p"),eN(619,`Por padr\xE3o, esta mensagem n\xE3o \xE9 apresentada quando o campo estiver vazio, mesmo que ele seja requerido.
Para exibir a mensagem com o campo vazio, utilize a propriedade `),Sl(620,"code"),eN(621,"p-required-field-error-message"),og(),eN(622," em conjunto."),og()()()(),Sl(623,"tr",15)(624,"td",16)(625,"div",24)(626,"span",25),eN(627," p-help"),Wl(628,"br"),og()()(),Sl(629,"td",20)(630,"code",26),eN(631,"string"),og()(),Sl(632,"td",22),eN(633,"-"),og(),Sl(634,"td",23)(635,"em")(636,"strong"),eN(637,"(opcional)"),og()(),Sl(638,"p"),eN(639,"Texto de apoio do campo."),og()()(),Sl(640,"tr",15)(641,"td",16)(642,"div",24)(643,"span",25),eN(644," p-icon"),Wl(645,"br"),og()()(),Sl(646,"td",20)(647,"code",26),eN(648,"string "),og(),Sl(649,"code",29),eN(650," TemplateRef<void>"),og()(),Sl(651,"td",22),eN(652,"-"),og(),Sl(653,"td",23)(654,"em")(655,"strong"),eN(656,"(opcional)"),og()(),Sl(657,"p"),eN(658,"Define o \xEDcone que ser\xE1 exibido no in\xEDcio do campo."),og(),Sl(659,"p"),eN(660,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),Sl(661,"a",30),eN(662,"Biblioteca de \xEDcones"),og(),eN(663,". conforme exemplo abaixo:"),og(),Sl(664,"pre")(665,"code"),eN(666,`<po-input p-icon="an an-user" p-label="PO input"></po-input>
`),og()(),Sl(667,"p"),eN(668,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),Sl(669,"em"),eN(670,"Font Awesome"),og(),eN(671,", da seguinte forma:"),og(),Sl(672,"pre")(673,"code"),eN(674,`<po-input p-icon="fa fa-podcast" p-label="PO input"></po-input>
`),og()(),Sl(675,"p"),eN(676,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),Sl(677,"code"),eN(678,"TemplateRef"),og(),eN(679,", conforme exemplo abaixo:"),og(),Sl(680,"pre")(681,"code"),eN(682,`<po-input [p-icon]="template" p-label="input template ionic"></po-input>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),og()(),Sl(683,"blockquote")(684,"p"),eN(685,"Para o \xEDcone enquadrar corretamente, deve-se utilizar "),Sl(686,"code"),eN(687,"font-size: inherit"),og(),eN(688," caso o \xEDcone utilizado n\xE3o aplique-o."),og()()()(),Sl(689,"tr",15)(690,"td",16)(691,"div",17)(692,"span",18),eN(693," (p-keydown)"),Wl(694,"br"),og()()(),Sl(695,"td",20)(696,"code",21),eN(697,"EventEmitter"),og()(),Sl(698,"td",22),eN(699,"-"),og(),Sl(700,"td",23)(701,"em")(702,"strong"),eN(703,"(opcional)"),og()(),Sl(704,"p"),eN(705,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Sl(706,"code"),eN(707,"KeyboardEvent"),og(),eN(708," com informa\xE7\xF5es sobre a tecla."),og()()(),Sl(709,"tr",15)(710,"td",16)(711,"div",24)(712,"span",25),eN(713," p-label"),Wl(714,"br"),og()()(),Sl(715,"td",20)(716,"code",26),eN(717,"string"),og()(),Sl(718,"td",22),eN(719,"-"),og(),Sl(720,"td",23)(721,"em")(722,"strong"),eN(723,"(opcional)"),og()(),Sl(724,"p"),eN(725,"R\xF3tulo do campo."),og()()(),Sl(726,"tr",15)(727,"td",16)(728,"div",24)(729,"span",25),eN(730," p-label-text-wrap"),Wl(731,"br"),og()()(),Sl(732,"td",20)(733,"code",27),eN(734,"boolean"),og()(),Sl(735,"td",22)(736,"p")(737,"code"),eN(738,"false"),og()()(),Sl(739,"td",23)(740,"em")(741,"strong"),eN(742,"(opcional)"),og()(),Sl(743,"p"),eN(744,"Habilita a quebra autom\xE1tica do texto da propriedade "),Sl(745,"code"),eN(746,"p-label"),og(),eN(747,". Quando "),Sl(748,"code"),eN(749,"p-label-text-wrap"),og(),eN(750,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),og()()(),Sl(751,"tr",15)(752,"td",16)(753,"div",24)(754,"span",25),eN(755," p-loading"),Wl(756,"br"),og()()(),Sl(757,"td",20)(758,"code",27),eN(759,"boolean"),og()(),Sl(760,"td",22)(761,"p")(762,"code"),eN(763,"false"),og()()(),Sl(764,"td",23)(765,"em")(766,"strong"),eN(767,"(opcional)"),og()(),Sl(768,"p"),eN(769,"Exibe um \xEDcone de carregamento no lado direito do campo para sinalizar que uma opera\xE7\xE3o est\xE1 em andamento."),og()()(),Sl(770,"tr",15)(771,"td",16)(772,"div",24)(773,"span",25),eN(774,"p-mask"),Wl(775,"br"),og()()(),Sl(776,"td",20)(777,"code",26),eN(778,"string"),og()(),Sl(779,"td",22),eN(780,"-"),og(),Sl(781,"td",23)(782,"em")(783,"strong"),eN(784,"(opcional)"),og()(),Sl(785,"p"),eN(786,`Indica uma m\xE1scara para o campo. Exemplos: (+99) (99) 99999?-9999, 99999-999, 999.999.999-99.
A m\xE1scara gera uma valida\xE7\xE3o autom\xE1tica do campo, podendo esta ser substitu\xEDda por um REGEX espec\xEDfico
atrav\xE9s da propriedade p-pattern.
O campo ser\xE1 sinalizado e o formul\xE1rio ficar\xE1 inv\xE1lido quando o valor informado estiver fora do padr\xE3o definido,
mesmo quando desabilitado.`),og()()(),Sl(787,"tr",15)(788,"td",16)(789,"div",24)(790,"span",25),eN(791,"p-mask-format-model"),Wl(792,"br"),og()()(),Sl(793,"td",20)(794,"code",27),eN(795,"boolean"),og()(),Sl(796,"td",22)(797,"p")(798,"code"),eN(799,"false"),og()()(),Sl(800,"td",23)(801,"em")(802,"strong"),eN(803,"(opcional)"),og()(),Sl(804,"p"),eN(805,"Indica se o "),Sl(806,"code"),eN(807,"model"),og(),eN(808," receber\xE1 o valor formatado pela m\xE1scara ou apenas o valor puro (sem formata\xE7\xE3o)."),og()()(),Sl(809,"tr",15)(810,"td",16)(811,"div",24)(812,"span",25),eN(813," p-mask-no-length-validation"),Wl(814,"br"),og()()(),Sl(815,"td",20)(816,"code",27),eN(817,"boolean"),og()(),Sl(818,"td",22)(819,"p")(820,"code"),eN(821,"false"),og()()(),Sl(822,"td",23)(823,"p"),eN(824,"Controla como o componente aplica as valida\xE7\xF5es de comprimento m\xEDnimo ("),Sl(825,"code"),eN(826,"minLength"),og(),eN(827,") e m\xE1ximo ("),Sl(828,"code"),eN(829,"maxLength"),og(),eN(830,") quando h\xE1 uma m\xE1scara ("),Sl(831,"code"),eN(832,"p-mask"),og(),eN(833,") definida."),og(),Sl(834,"ul")(835,"li"),eN(836,"Quando "),Sl(837,"code"),eN(838,"true"),og(),eN(839,", apenas os caracteres alfanum\xE9ricos ser\xE3o contabilizados para a valida\xE7\xE3o dos comprimentos."),og(),Sl(840,"li"),eN(841,"Quando "),Sl(842,"code"),eN(843,"false"),og(),eN(844,", todos os caracteres, incluindo os especiais da m\xE1scara, ser\xE3o considerados na valida\xE7\xE3o."),og()(),Sl(845,"blockquote")(846,"p"),eN(847,"Esta propriedade \xE9 ignorada quando utilizada em conjunto com "),Sl(848,"code"),eN(849,"p-mask-format-model"),og(),eN(850,"."),og()(),Sl(851,"p"),eN(852,"Exemplo:"),og(),Sl(853,"pre")(854,"code"),eN(855,`<po-input
  p-mask="999-999"
  p-maxlength="6"
  p-minlength="4"
  p-mask-no-length-validation="true"
></po-input>
`),og()(),Sl(856,"ul")(857,"li"),eN(858,"Entrada: "),Sl(859,"code"),eN(860,"123-456"),og(),eN(861," \u2192 Valida\xE7\xE3o ser\xE1 aplicada somente aos n\xFAmeros, ignorando o caractere especial "),Sl(862,"code"),eN(863,"-"),og(),eN(864,"."),og()()()(),Sl(865,"tr",15)(866,"td",16)(867,"div",24)(868,"span",25),eN(869," p-maxlength"),Wl(870,"br"),og()()(),Sl(871,"td",20)(872,"code",31),eN(873,"number"),og()(),Sl(874,"td",22),eN(875,"-"),og(),Sl(876,"td",23)(877,"em")(878,"strong"),eN(879,"(opcional)"),og()(),Sl(880,"p"),eN(881,"Indica a quantidade m\xE1xima de caracteres que o campo aceita."),og()()(),Sl(882,"tr",15)(883,"td",16)(884,"div",24)(885,"span",25),eN(886," p-minlength"),Wl(887,"br"),og()()(),Sl(888,"td",20)(889,"code",31),eN(890,"number"),og()(),Sl(891,"td",22),eN(892,"-"),og(),Sl(893,"td",23)(894,"em")(895,"strong"),eN(896,"(opcional)"),og()(),Sl(897,"p"),eN(898,"Indica a quantidade m\xEDnima de caracteres que o campo aceita."),og()()(),Sl(899,"tr",15)(900,"td",16)(901,"div",24)(902,"span",25),eN(903," name"),Wl(904,"br"),og()()(),Sl(905,"td",20)(906,"code",26),eN(907,"string"),og()(),Sl(908,"td",22),eN(909,"-"),og(),Sl(910,"td",23)(911,"p"),eN(912,"Nome e identificador do campo."),og()()(),Sl(913,"tr",15)(914,"td",16)(915,"div",24)(916,"span",25),eN(917," p-no-autocomplete"),Wl(918,"br"),og()()(),Sl(919,"td",20)(920,"code",27),eN(921,"boolean"),og()(),Sl(922,"td",22)(923,"p")(924,"code"),eN(925,"false"),og()()(),Sl(926,"td",23)(927,"em")(928,"strong"),eN(929,"(opcional)"),og()(),Sl(930,"p"),eN(931,"Define a propriedade nativa "),Sl(932,"code"),eN(933,"autocomplete"),og(),eN(934," do campo como "),Sl(935,"code"),eN(936,"off"),og(),eN(937,"."),og(),Sl(938,"blockquote")(939,"p"),eN(940,"No componente "),Sl(941,"code"),eN(942,"po-password"),og(),eN(943," ser\xE1 definido como "),Sl(944,"code"),eN(945,"new-password"),og(),eN(946,"."),og()(),Sl(947,"p"),eN(948,"Nos componentes "),Sl(949,"code"),eN(950,"po-password"),og(),eN(951," e "),Sl(952,"code"),eN(953,"po-login"),og(),eN(954," o valor padr\xE3o ser\xE1 "),Sl(955,"code"),eN(956,"true"),og(),eN(957,"."),og()()(),Sl(958,"tr",15)(959,"td",16)(960,"div",24)(961,"span",25),eN(962," p-optional"),Wl(963,"br"),og()()(),Sl(964,"td",20)(965,"code",27),eN(966,"boolean"),og()(),Sl(967,"td",22)(968,"p")(969,"code"),eN(970,"false"),og()()(),Sl(971,"td",23)(972,"em")(973,"strong"),eN(974,"(opcional)"),og()(),Sl(975,"p"),eN(976,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),og(),Sl(977,"blockquote")(978,"p"),eN(979,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),og()(),Sl(980,"ul")(981,"li"),eN(982,"O campo conter "),Sl(983,"code"),eN(984,"p-required"),og(),eN(985,";"),og(),Sl(986,"li"),eN(987,"N\xE3o possuir "),Sl(988,"code"),eN(989,"p-help"),og(),eN(990," e/ou "),Sl(991,"code"),eN(992,"p-label"),og(),eN(993,"."),og()()()(),Sl(994,"tr",15)(995,"td",16)(996,"div",24)(997,"span",25),eN(998,"p-pattern"),Wl(999,"br"),og()()(),Sl(1e3,"td",20)(1001,"code",26),eN(1002,"string"),og()(),Sl(1003,"td",22),eN(1004,"-"),og(),Sl(1005,"td",23)(1006,"em")(1007,"strong"),eN(1008,"(opcional)"),og()(),Sl(1009,"p"),eN(1010,`Express\xE3o regular para validar o campo.
Quando o campo possuir uma m\xE1scara `),Sl(1011,"code"),eN(1012,"(p-mask)"),og(),eN(1013,` ser\xE1 automaticamente validado por ela, por\xE9m
\xE9 poss\xEDvel definir um p-pattern para substituir a valida\xE7\xE3o da m\xE1scara.`),og()()(),Sl(1014,"tr",15)(1015,"td",16)(1016,"div",24)(1017,"span",25),eN(1018," p-placeholder"),Wl(1019,"br"),og()()(),Sl(1020,"td",20)(1021,"code",26),eN(1022,"string"),og()(),Sl(1023,"td",22)(1024,"p"),eN(1025,"''"),og()(),Sl(1026,"td",23)(1027,"em")(1028,"strong"),eN(1029,"(opcional)"),og()(),Sl(1030,"p"),eN(1031,"Mensagem que aparecer\xE1 enquanto o campo n\xE3o estiver preenchido."),og()()(),Sl(1032,"tr",15)(1033,"td",16)(1034,"div",24)(1035,"span",25),eN(1036," p-helper"),Wl(1037,"br"),og()()(),Sl(1038,"td",20)(1039,"code",32),eN(1040,"PoHelperOptions "),og(),Sl(1041,"code",26),eN(1042," string"),og()(),Sl(1043,"td",22),eN(1044,"-"),og(),Sl(1045,"td",23)(1046,"em")(1047,"strong"),eN(1048,"(opcional)"),og()(),Sl(1049,"p"),eN(1050,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label quando a propriedade "),Sl(1051,"code"),eN(1052,"p-label"),og(),eN(1053," for definida, ou, ao lado do componente na aus\xEAncia da propriedade "),Sl(1054,"code"),eN(1055,"p-label"),og(),eN(1056,"."),og(),Sl(1057,"blockquote")(1058,"p"),eN(1059,"Para mais informa\xE7\xF5es acesse: "),Sl(1060,"a",33),eN(1061,"https://po-ui.io/documentation/po-helper"),og(),eN(1062,"."),og()(),Sl(1063,"blockquote")(1064,"p"),eN(1065,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),Sl(1066,"code"),eN(1067,"p-additional-help-tooltip"),og(),eN(1068," e "),Sl(1069,"code"),eN(1070,"p-additional-help"),og(),eN(1071,") ser\xE1 ignorado."),og()()()(),Sl(1072,"tr",15)(1073,"td",16)(1074,"div",24)(1075,"span",25),eN(1076,"p-readonly"),Wl(1077,"br"),og()()(),Sl(1078,"td",20)(1079,"code",27),eN(1080,"boolean"),og()(),Sl(1081,"td",22),eN(1082,"-"),og(),Sl(1083,"td",23)(1084,"em")(1085,"strong"),eN(1086,"(opcional)"),og()(),Sl(1087,"p"),eN(1088,"Indica que o campo ser\xE1 somente leitura."),og()()(),Sl(1089,"tr",15)(1090,"td",16)(1091,"div",24)(1092,"span",25),eN(1093,"p-required"),Wl(1094,"br"),og()()(),Sl(1095,"td",20)(1096,"code",27),eN(1097,"boolean"),og()(),Sl(1098,"td",22)(1099,"p")(1100,"code"),eN(1101,"false"),og()()(),Sl(1102,"td",23)(1103,"em")(1104,"strong"),eN(1105,"(opcional)"),og()(),Sl(1106,"p"),eN(1107,"Define que o campo ser\xE1 obrigat\xF3rio."),og(),Sl(1108,"blockquote")(1109,"p"),eN(1110,"Esta propriedade \xE9 desconsiderada quando o input est\xE1 desabilitado "),Sl(1111,"code"),eN(1112,"(p-disabled)"),og(),eN(1113,"."),og()()()(),Sl(1114,"tr",15)(1115,"td",16)(1116,"div",24)(1117,"span",25),eN(1118," p-required-field-error-message"),Wl(1119,"br"),og()()(),Sl(1120,"td",20)(1121,"code",27),eN(1122,"boolean"),og()(),Sl(1123,"td",22)(1124,"p")(1125,"code"),eN(1126,"false"),og()()(),Sl(1127,"td",23)(1128,"em")(1129,"strong"),eN(1130,"(opcional)"),og()(),Sl(1131,"p"),eN(1132,"Exibe a mensagem setada na propriedade "),Sl(1133,"code"),eN(1134,"p-error-pattern"),og(),eN(1135," se o campo estiver vazio e for requerido."),og(),Sl(1136,"blockquote")(1137,"p"),eN(1138,"Necess\xE1rio que a propriedade "),Sl(1139,"code"),eN(1140,"p-required"),og(),eN(1141," esteja habilitada."),og()()()(),Sl(1142,"tr",15)(1143,"td",16)(1144,"div",24)(1145,"span",25),eN(1146," p-show-required"),Wl(1147,"br"),og()()(),Sl(1148,"td",20)(1149,"code",27),eN(1150,"boolean"),og()(),Sl(1151,"td",22),eN(1152,"-"),og(),Sl(1153,"td",23)(1154,"p"),eN(1155,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),og(),Sl(1156,"blockquote")(1157,"p"),eN(1158,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),og()(),Sl(1159,"ul")(1160,"li"),eN(1161,"N\xE3o possuir "),Sl(1162,"code"),eN(1163,"p-help"),og(),eN(1164," e/ou "),Sl(1165,"code"),eN(1166,"p-label"),og(),eN(1167,"."),og()()()(),Sl(1168,"tr",15)(1169,"td",16)(1170,"div",24)(1171,"span",25),eN(1172," p-size"),Wl(1173,"br"),og()()(),Sl(1174,"td",20)(1175,"code",26),eN(1176,"string"),og()(),Sl(1177,"td",22)(1178,"p")(1179,"code"),eN(1180,"medium"),og()()(),Sl(1181,"td",23)(1182,"em")(1183,"strong"),eN(1184,"(opcional)"),og()(),Sl(1185,"p"),eN(1186,"Define o tamanho do componente:"),og(),Sl(1187,"ul")(1188,"li")(1189,"code"),eN(1190,"small"),og(),eN(1191,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),og(),Sl(1192,"li")(1193,"code"),eN(1194,"medium"),og(),eN(1195,": altura do input como 44px."),og()(),Sl(1196,"blockquote")(1197,"p"),eN(1198,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Sl(1199,"code"),eN(1200,"medium"),og(),eN(1201,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Sl(1202,"a",34),eN(1203,"po-theme"),og(),eN(1204,"."),og()()()(),Sl(1205,"tr",15)(1206,"td",16)(1207,"div",24)(1208,"span",25),eN(1209," p-upper-case"),Wl(1210,"br"),og()()(),Sl(1211,"td",20)(1212,"code",27),eN(1213,"boolean"),og()(),Sl(1214,"td",22),eN(1215,"-"),og(),Sl(1216,"td",23)(1217,"p"),eN(1218,"Converte o conte\xFAdo do campo em mai\xFAsulo automaticamente."),og()()()(),Sl(1219,"h3",11),eN(1220,"M\xE9todos"),og(),Sl(1221,"table",35)(1222,"tr",15)(1223,"th",36)(1224,"div",24)(1225,"h4")(1226,"span",25),eN(1227," showAdditionalHelp "),og()()()()(),Sl(1228,"tr",23)(1229,"td",23)(1230,"p"),eN(1231,"M\xE9todo que exibe "),Sl(1232,"code"),eN(1233,"p-helper"),og(),eN(1234," ou executa a a\xE7\xE3o definida em "),Sl(1235,"code"),eN(1236,"p-helper{eventOnClick}"),og(),eN(1237," ou em "),Sl(1238,"code"),eN(1239,"p-additionalHelp"),og(),eN(1240,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Sl(1241,"code"),eN(1242,"p-keydown"),og(),eN(1243,"."),og(),Sl(1244,"blockquote")(1245,"p"),eN(1246,"Exibe ou oculta o conte\xFAdo do componente "),Sl(1247,"code"),eN(1248,"po-helper"),og(),eN(1249," quando o componente estiver com foco."),og()(),Sl(1250,"pre")(1251,"code"),eN(1252,`// Exemplo com p-label e p-helper
<po-nome-component
 #component
 ...
 p-label="Label do componente"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, component)"
></po-nome-component>
`),og()(),Sl(1253,"pre")(1254,"code"),eN(1255,`...
onKeyDown(event: KeyboardEvent, inp: PoNomeDoComponente): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),og()()()()(),Wl(1256,"br"),Sl(1257,"table",35)(1258,"tr",15)(1259,"th",36)(1260,"div",24)(1261,"h4")(1262,"span",25),eN(1263," focus "),og()()()()(),Sl(1264,"tr",23)(1265,"td",23)(1266,"p"),eN(1267,"Fun\xE7\xE3o que atribui foco ao componente."),og(),Sl(1268,"p"),eN(1269,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),og(),Sl(1270,"pre")(1271,"code"),eN(1272,`import { PoNomeDoComponenteComponent } from '@po-ui/ng-components';

...

@ViewChild(PoNomeDoComponenteComponent, { static: true }) nomeDoComponente: PoNomeDoComponenteComponent;

focusComponent() {
  this.nomeDoComponente.focus();
}
`),og()()()()(),Wl(1273,"br"),Sl(1274,"h3"),eN(1275,"Interfaces"),og(),Sl(1276,"h4",37)(1277,"code",5),eN(1278,"ErrorAsyncProperties"),og()(),Sl(1279,"div",2)(1280,"p"),eN(1281,"Interface para realizar uma valida\xE7\xE3o ass\xEDncrona no componente."),og()(),Sl(1282,"h4",11),eN(1283,"Propriedades"),og(),Sl(1284,"table",12)(1285,"tr",13)(1286,"th",14),eN(1287,"Nome"),og(),Sl(1288,"th",14),eN(1289,"Tipo"),og(),Sl(1290,"th",14),eN(1291,"Descri\xE7\xE3o"),og()(),Sl(1292,"tr",15)(1293,"td",16)(1294,"div",24)(1295,"span",25),eN(1296," errorAsync"),Wl(1297,"br"),og()()(),Sl(1298,"td",20)(1299,"code",38),eN(1300,"(value) => Observable<boolean>"),og()(),Sl(1301,"td",23)(1302,"p"),eN(1303,`Fun\xE7\xE3o obrigat\xF3ria executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),Sl(1304,"code"),eN(1305,"change"),og(),eN(1306," ou "),Sl(1307,"code"),eN(1308,"change-model"),og(),eN(1309,", dependendo do valor da propriedade "),Sl(1310,"code"),eN(1311,"triggerMode"),og(),eN(1312,"."),og()()(),Sl(1313,"tr",15)(1314,"td",16)(1315,"div",24)(1316,"span",25),eN(1317," triggerMode"),Wl(1318,"br"),og()()(),Sl(1319,"td",20)(1320,"code",39),eN(1321,"'change' "),og(),Sl(1322,"code",40),eN(1323," 'changeModel'"),og()(),Sl(1324,"td",23)(1325,"em")(1326,"strong"),eN(1327,"(opcional)"),og()(),Sl(1328,"p"),eN(1329,"Controla se o m\xE9todo ser\xE1 executado no disparo do output "),Sl(1330,"code"),eN(1331,"change"),og(),eN(1332," ou "),Sl(1333,"code"),eN(1334,"change-model"),og(),eN(1335,"."),og()()()()());},dependencies:[Ka],encapsulation:2})}return a})();var ve=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,r){this.route=m,this.router=r;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let r=m.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:"merge"}),this.activeTab=m;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(r){return new(r||a)(w(Xn),w(En))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Input",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,i){r&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return i.changeTab("doc")}),Wl(3,"sample-po-input-doc"),og(),Sl(4,"po-tab",3),ft("p-click",function(){return i.changeTab("web")}),Wl(5,"sample-po-input-basic-view")(6,"sample-po-input-labs-view")(7,"sample-po-input-reactive-form-view"),og()()()),r&2&&(nw("p-actions",i.actions),Lp(2),nw("p-active",i.activeTab==="doc"),Lp(2),nw("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[rNe,Bme,qme,Ee,be,xe,he],encapsulation:2})}return a})();var Le=[{path:"",component:ve}],fe=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue({imports:[hL.forChild(Le),hL]})}return a})();var mt=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue({imports:[sr,fe]})}return a})();export{mt as DocPoInputModule};