import {f as fe$1,u as ue,s as sr,m as mL,w,c3 as Xn,E as En,U as Un,c as f,cM as tY,cN as lm,b4 as L3,F as Wl,an as SO,aH as Ka,b8 as Ume,b9 as $me,C as Sl,y as rN,J as og,a1 as ft,L as Lp,ar as Gx,au as dg,O as rw,bs as gN,aX as Q9,aF as Z9,aY as K9,aG as wk,aZ as _k,b0 as Qt,b1 as mv,c4 as b3,cp as Bhe,c8 as Tde,aJ as Whe,c9 as jhe,aB as Ix,aM as Cw,aN as n0,aO as ww,aP as i0,cQ as xk,cR as Rk,cz as Pz,cX as I3,b6 as Yo,av as ql,aw as lo,ax as uo,a3 as sNe,aD as Ky,aT as oN,aE as Xy,bd as kx}from'./main-TVDUJ47Y.js';var ce=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-input-basic"]],standalone:false,decls:1,vars:0,consts:[["name","input","p-label","PO Input"]],template:function(r,i){r&1&&Wl(0,"po-input",0);},dependencies:[L3],encapsulation:2,changeDetection:1})}return a})();var ye=a=>({"docs-sample-code-tabs":a}),Ee=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-input-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),rN(3,"PO Input Basic"),og(),Sl(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),rN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),rN(12,"sample-po-input-basic/sample-po-input-basic.component.html"),og(),Sl(13,"pre",7),rN(14,`<po-input name="input" p-label="PO Input"> </po-input>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),rN(18,"sample-po-input-basic/sample-po-input-basic.component.ts"),og(),Sl(19,"pre",9),rN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-input-basic',
  templateUrl: './sample-po-input-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoInputBasicComponent {}
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-input-basic"),og(),Wl(23,"hr")),r&2&&(Lp(5),Gx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),rw("ngClass",gN(4,ye,i.hideSampleCodeTabs)));},dependencies:[SO,Ka,Ume,$me,ce],encapsulation:2,changeDetection:1})}return a})();var ge=(()=>{class a{helperText;input;errorPattern;event;help;icon;label;mask;maxlength;minlength;pattern;placeholder;properties;size;iconOptions=[{value:"an an-newspaper",label:"an an-newspaper"},{value:"an an-magnifying-glass",label:"an an-magnifying-glass"},{value:"fa fa-calculator",label:"fa fa-calculator"}];propertiesOptions=[{value:"clean",label:"Clean"},{value:"disabled",label:"Disabled"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"},{value:"compactLabel",label:"Compact Label"},{value:"loading",label:"Loading"},{value:"maskFormatModel",label:"Formatted Model"},{value:"maskNoLengthValidation",label:"Mask No Length Validation"},{value:"noAutocomplete",label:"No Autocomplete"},{value:"optional",label:"Optional"},{value:"readonly",label:"Read Only"},{value:"required",label:"Required"},{value:"requiredFieldErrorMessage",label:"Required Field Error Message"},{value:"uppercase",label:"Upper Case"},{value:"showRequired",label:"Show Required"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore();}changeEvent(m){this.event=m;}restore(){this.helperText="",this.input=void 0,this.size="medium";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-input-labs"]],standalone:false,decls:22,vars:44,consts:[["f","ngForm"],["name","input",3,"ngModelChange","p-blur","p-change","p-change-model","p-enter","p-keydown","ngModel","p-helper","p-clean","p-disabled","p-error-pattern","p-help","p-icon","p-label","p-loading","p-mask","p-mask-format-model","p-maxlength","p-minlength","p-no-autocomplete","p-optional","p-pattern","p-placeholder","p-required","p-required-field-error-message","p-readonly","p-upper-case","p-show-required","p-mask-no-length-validation","p-size","p-error-limit","p-label-text-wrap","p-compact-label"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","errorPattern","p-clean","","p-label","Error Pattern",1,"po-md-6",3,"ngModelChange","ngModel"],["name","mask","p-clean","","p-help","Ex.: Zip code: '99999-999'; License plate: '@@@-9999'","p-label","Mask",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel"],["name","pattern","p-clean","","p-help","Ex.: '^(2[0-3]|[01][0-9]):?([0-5][0-9])$'","p-label","Pattern (Regex)",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel"],["name","minlength","p-clean","","p-label","Min Length",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","maxlength","p-clean","","p-label","Max Length",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","icon","p-clean","","p-label","Icon",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(r,i){if(r&1){let s=Ix();Sl(0,"po-input",1),Cw("ngModelChange",function(l){return Ky(s),oN(i.input,l)||(i.input=l),Xy(l)}),ft("p-blur",function(){return i.changeEvent("p-blur")})("p-change",function(){return i.changeEvent("p-change")})("p-change-model",function(){return i.changeEvent("p-change-model")})("p-enter",function(){return i.changeEvent("p-enter")})("p-keydown",function(){return i.changeEvent("p-keydown")}),og(),n0(),Wl(1,"po-divider"),Sl(2,"div",2),Wl(3,"po-info",3)(4,"po-info",4),og(),Wl(5,"po-divider"),Sl(6,"form",null,0)(8,"po-input",5),Cw("ngModelChange",function(l){return Ky(s),oN(i.label,l)||(i.label=l),Xy(l)}),og(),n0(),Sl(9,"po-input",6),Cw("ngModelChange",function(l){return Ky(s),oN(i.help,l)||(i.help=l),Xy(l)}),og(),n0(),Sl(10,"po-input",7),Cw("ngModelChange",function(l){return Ky(s),oN(i.helperText,l)||(i.helperText=l),Xy(l)}),og(),n0(),Sl(11,"po-input",8),Cw("ngModelChange",function(l){return Ky(s),oN(i.placeholder,l)||(i.placeholder=l),Xy(l)}),og(),n0(),Sl(12,"po-input",9),Cw("ngModelChange",function(l){return Ky(s),oN(i.errorPattern,l)||(i.errorPattern=l),Xy(l)}),og(),n0(),Sl(13,"po-input",10),Cw("ngModelChange",function(l){return Ky(s),oN(i.mask,l)||(i.mask=l),Xy(l)}),og(),n0(),Sl(14,"po-input",11),Cw("ngModelChange",function(l){return Ky(s),oN(i.pattern,l)||(i.pattern=l),Xy(l)}),og(),n0(),Sl(15,"po-number",12),Cw("ngModelChange",function(l){return Ky(s),oN(i.minlength,l)||(i.minlength=l),Xy(l)}),og(),n0(),Sl(16,"po-number",13),Cw("ngModelChange",function(l){return Ky(s),oN(i.maxlength,l)||(i.maxlength=l),Xy(l)}),og(),n0(),Sl(17,"po-select",14),Cw("ngModelChange",function(l){return Ky(s),oN(i.icon,l)||(i.icon=l),Xy(l)}),og(),n0(),Sl(18,"po-checkbox-group",15),Cw("ngModelChange",function(l){return Ky(s),oN(i.properties,l)||(i.properties=l),Xy(l)}),og(),n0(),Sl(19,"po-radio-group",16),Cw("ngModelChange",function(l){return Ky(s),oN(i.size,l)||(i.size=l),Xy(l)}),og(),n0(),Sl(20,"div",2)(21,"po-button",17),ft("p-click",function(){return Ky(s),kx(7).reset(),Xy(i.restore())}),og()()();}r&2&&(ww("ngModel",i.input),rw("p-helper",i.helperText)("p-clean",i.properties==null?null:i.properties.includes("clean"))("p-disabled",i.properties==null?null:i.properties.includes("disabled"))("p-error-pattern",i.errorPattern)("p-help",i.help)("p-icon",i.icon)("p-label",i.label)("p-loading",i.properties==null?null:i.properties.includes("loading"))("p-mask",i.mask)("p-mask-format-model",i.properties==null?null:i.properties.includes("maskFormatModel"))("p-maxlength",i.maxlength)("p-minlength",i.minlength)("p-no-autocomplete",i.properties==null?null:i.properties.includes("noAutocomplete"))("p-optional",i.properties==null?null:i.properties.includes("optional"))("p-pattern",i.pattern)("p-placeholder",i.placeholder)("p-required",i.properties==null?null:i.properties.includes("required"))("p-required-field-error-message",i.properties==null?null:i.properties.includes("requiredFieldErrorMessage"))("p-readonly",i.properties==null?null:i.properties.includes("readonly"))("p-upper-case",i.properties==null?null:i.properties.includes("uppercase"))("p-show-required",i.properties==null?null:i.properties.includes("showRequired"))("p-mask-no-length-validation",i.properties==null?null:i.properties.includes("maskNoLengthValidation"))("p-size",i.size)("p-error-limit",i.properties==null?null:i.properties.includes("errorLimit"))("p-label-text-wrap",i.properties==null?null:i.properties.includes("labelTextWrap"))("p-compact-label",i.properties==null?null:i.properties.includes("compactLabel")),i0(),Lp(3),rw("p-value",i.input),Lp(),rw("p-value",i.event),Lp(4),ww("ngModel",i.label),i0(),Lp(),ww("ngModel",i.help),i0(),Lp(),ww("ngModel",i.helperText),i0(),Lp(),ww("ngModel",i.placeholder),i0(),Lp(),ww("ngModel",i.errorPattern),i0(),Lp(),ww("ngModel",i.mask),i0(),Lp(),ww("ngModel",i.pattern),i0(),Lp(),ww("ngModel",i.minlength),i0(),Lp(),ww("ngModel",i.maxlength),i0(),Lp(),ww("ngModel",i.icon),rw("p-options",i.iconOptions),i0(),Lp(),ww("ngModel",i.properties),rw("p-options",i.propertiesOptions),i0(),Lp(),ww("ngModel",i.size),rw("p-options",i.sizeOptions),i0());},dependencies:[Q9,Z9,K9,wk,_k,Qt,mv,b3,L3,Bhe,Tde,Whe,jhe],encapsulation:2,changeDetection:1})}return a})();var _e=a=>({"docs-sample-code-tabs":a}),be=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-input-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),rN(3,"PO Input Labs"),og(),Sl(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),rN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),rN(12,"sample-po-input-labs/sample-po-input-labs.component.html"),og(),Sl(13,"pre",7),rN(14,`<po-input
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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),rN(18,"sample-po-input-labs/sample-po-input-labs.component.ts"),og(),Sl(19,"pre",9),rN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-input-labs"),og(),Wl(23,"hr")),r&2&&(Lp(5),Gx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),rw("ngClass",gN(4,_e,i.hideSampleCodeTabs)));},dependencies:[SO,Ka,Ume,$me,ge],encapsulation:2,changeDetection:1})}return a})();var De=["reactiveFormData"],Se=(()=>{class a{fb=f(tY);reactiveFormModal;reactiveForm;modalPrimaryAction={action:()=>this.reactiveFormModal.close(),label:"Close"};constructor(){this.createReactiveForm();}createReactiveForm(){this.reactiveForm=this.fb.group({name:["",lm.compose([lm.required,lm.minLength(5),lm.maxLength(30)])],address:["",lm.compose([lm.required,lm.minLength(5),lm.maxLength(50)])],number:["",lm.compose([lm.required,lm.min(1),lm.max(99999)])],email:["",lm.required],website:["",lm.required]});}saveForm(){this.reactiveFormModal.open();}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-input-reactive-form"]],viewQuery:function(r,i){if(r&1&&ql(De,7),r&2){let s;lo(s=uo())&&(i.reactiveFormModal=s.first);}},standalone:false,decls:23,vars:8,consts:[["reactiveFormData",""],[3,"formGroup"],[1,"po-row"],["formControlName","name","p-clean","","p-icon","an an-user","p-label","Customer name",1,"po-md-12"],["formControlName","address","p-clean","","p-icon","an an-map-pin","p-label","Address",1,"po-lg-9"],["formControlName","number","p-label","Number","p-clean","",1,"po-lg-3"],["formControlName","email","p-label","Email","p-clean","",1,"po-lg-6"],["formControlName","website","p-label","Website","p-clean","",1,"po-lg-6"],["p-label","Save",1,"po-md-3",3,"p-click","p-disabled"],["p-title","Save successful",3,"p-primary-action"],["p-label","Name",1,"po-md-12",3,"p-value"],["p-label","Address",1,"po-md-6",3,"p-value"],["p-label","Number",1,"po-md-6",3,"p-value"],["p-label","Email",1,"po-md-6",3,"p-value"],["p-label","Website",1,"po-md-6",3,"p-value"]],template:function(r,i){r&1&&(Sl(0,"form",1)(1,"div",2),Wl(2,"po-input",3),n0(),og(),Sl(3,"div",2),Wl(4,"po-input",4),n0(),Wl(5,"po-number",5),n0(),og(),Sl(6,"div",2),Wl(7,"po-email",6),n0(),Wl(8,"po-url",7),n0(),og(),Sl(9,"div",2)(10,"po-button",8),ft("p-click",function(){return i.saveForm()}),og()()(),Sl(11,"po-modal",9,0)(13,"div",2),Wl(14,"po-info",10),og(),Wl(15,"po-divider"),Sl(16,"div",2),Wl(17,"po-info",11)(18,"po-info",12),og(),Wl(19,"po-divider"),Sl(20,"div",2),Wl(21,"po-info",13)(22,"po-info",14),og()()),r&2&&(rw("formGroup",i.reactiveForm),Lp(2),i0(),Lp(2),i0(),Lp(),i0(),Lp(2),i0(),Lp(),i0(),Lp(2),rw("p-disabled",!i.reactiveForm.valid),Lp(),rw("p-primary-action",i.modalPrimaryAction),Lp(3),rw("p-value",i.reactiveForm.controls.name.value),Lp(3),rw("p-value",i.reactiveForm.controls.address.value),Lp(),rw("p-value",i.reactiveForm.controls.number.value),Lp(3),rw("p-value",i.reactiveForm.controls.email.value),Lp(),rw("p-value",i.reactiveForm.controls.website.value));},dependencies:[Q9,Z9,K9,xk,Rk,Qt,mv,Pz,L3,Bhe,I3,jhe,Yo],encapsulation:2,changeDetection:1})}return a})();var Fe=a=>({"docs-sample-code-tabs":a}),xe=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-input-reactive-form-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),rN(3,"PO Input - Reactive Form"),og(),Sl(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),rN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),rN(12,"sample-po-input-reactive-form/sample-po-input-reactive-form.component.html"),og(),Sl(13,"pre",7),rN(14,`<form [formGroup]="reactiveForm">
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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),rN(18,"sample-po-input-reactive-form/sample-po-input-reactive-form.component.ts"),og(),Sl(19,"pre",9),rN(20,`import { Component, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-input-reactive-form"),og(),Wl(23,"hr")),r&2&&(Lp(5),Gx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),rw("ngClass",gN(4,Fe,i.hideSampleCodeTabs)));},dependencies:[SO,Ka,Ume,$me,Se],encapsulation:2,changeDetection:1})}return a})();var he=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-input-doc"]],standalone:false,decls:1336,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/grid-system"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","ErrorAsyncProperties"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-helper"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","(value)","=>","Observable<boolean>"],["pan","",1,"docs-api-property-type","'change'"],["pan","",1,"docs-api-property-type","'changeModel'"]],template:function(r,i){r&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),rN(3,"import { PoFieldModule } from '@po-ui/ng-components';"),og()(),Sl(4,"div",2)(5,"p"),rN(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),og(),Sl(7,"blockquote")(8,"p"),rN(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),Sl(10,"code"),rN(11,"FormsModule"),og(),rN(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Sl(13,"code"),rN(14,"ReactiveFormsModule"),og(),rN(15,", ambos nativos do Angular."),og()()(),Sl(16,"h3",3),rN(17,"Componente"),og(),Sl(18,"h4",4)(19,"code",5),rN(20,"PoInputComponent"),og()(),Sl(21,"div",2)(22,"p"),rN(23,`Este \xE9 um componente baseado em input, com v\xE1rias propriedades do input nativo e outras
propriedades extras como: m\xE1scara, pattern, mensagem de erro e etc.
Voc\xEA deve informar a vari\xE1vel que cont\xE9m o valor como [(ngModel)]="variavel", para que o
input receba o valor da vari\xE1vel e para que ela receba as altera\xE7\xF5es do valor (two-way-databinding).
A propriedade name \xE9 obrigat\xF3ria para que o formul\xE1rio e o model funcionem corretamente.`),og(),Sl(24,"p"),rN(25,"Importante:"),og(),Sl(26,"ul")(27,"li"),rN(28,`Caso o input tenha um [(ngModel)] sem o atributo name, ocorrer\xE1 um erro de angular.
Ent\xE3o voc\xEA precisa informar o atributo name ou o atributo [ngModelOptions]="{standalone: true}".
Exemplo: [(ngModel)]="pessoa.nome" [ngModelOptions]="{standalone: true}".`),og()(),Sl(29,"h4"),rN(30,"Tokens customiz\xE1veis"),og(),Sl(31,"p"),rN(32,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS): "),Wl(33,"br"),rN(34,`
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),Sl(35,"code"),rN(36,".po-input"),og()(),Sl(37,"blockquote")(38,"p"),rN(39,"Para correto alinhamento \xE9 recomendado o uso das classes de espa\xE7amento do "),Sl(40,"a",6),rN(41,"Grid System"),og(),rN(42,"."),og()(),Sl(43,"blockquote")(44,"p"),rN(45,"Para maiores informa\xE7\xF5es, acesse o guia "),Sl(46,"a",7),rN(47,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),rN(48,"."),og()(),Sl(49,"table")(50,"thead")(51,"tr")(52,"th"),rN(53,"Propriedade"),og(),Sl(54,"th"),rN(55,"Descri\xE7\xE3o"),og(),Sl(56,"th"),rN(57,"Valor Padr\xE3o"),og()()(),Sl(58,"tbody")(59,"tr")(60,"td")(61,"strong"),rN(62,"Default Values"),og()(),Wl(63,"td")(64,"td"),og(),Sl(65,"tr")(66,"td")(67,"code"),rN(68,"--font-family"),og()(),Sl(69,"td"),rN(70,"Fam\xEDlia tipogr\xE1fica usada"),og(),Sl(71,"td")(72,"code"),rN(73,"var(--font-family-theme)"),og()()(),Sl(74,"tr")(75,"td")(76,"code"),rN(77,"--font-size"),og()(),Sl(78,"td"),rN(79,"Tamanho da fonte"),og(),Sl(80,"td")(81,"code"),rN(82,"var(--font-size-default)"),og()()(),Sl(83,"tr")(84,"td")(85,"code"),rN(86,"--text-color-placeholder"),og()(),Sl(87,"td"),rN(88,"Cor do texto placeholder"),og(),Sl(89,"td")(90,"code"),rN(91,"var(--color-neutral-light-30)"),og()()(),Sl(92,"tr")(93,"td")(94,"code"),rN(95,"--color"),og()(),Sl(96,"td"),rN(97,"Cor pincipal do input"),og(),Sl(98,"td")(99,"code"),rN(100,"var(--color-neutral-dark-70)"),og()()(),Sl(101,"tr")(102,"td")(103,"code"),rN(104,"--background"),og()(),Sl(105,"td"),rN(106,"Cor de background"),og(),Sl(107,"td")(108,"code"),rN(109,"var(--color-neutral-light-05)"),og()()(),Sl(110,"tr")(111,"td")(112,"code"),rN(113,"--padding"),og()(),Sl(114,"td"),rN(115,"Preenchimento"),og(),Sl(116,"td")(117,"code"),rN(118,"0 0.5rem"),og()()(),Sl(119,"tr")(120,"td")(121,"code"),rN(122,"--text-color"),og()(),Sl(123,"td"),rN(124,"Cor do texto"),og(),Sl(125,"td")(126,"code"),rN(127,"var(--color-neutral-dark-90)"),og()()(),Sl(128,"tr")(129,"td")(130,"code"),rN(131,"--field-container-title-justify"),og()(),Sl(132,"td"),rN(133,"Alinhamento horizontal do t\xEDtulo ("),Sl(134,"code"),rN(135,"justify-content"),og(),rN(136,")"),og(),Sl(137,"td")(138,"code"),rN(139,"space-between"),og()()(),Sl(140,"tr")(141,"td")(142,"code"),rN(143,"--field-container-title-flex"),og()(),Sl(144,"td"),rN(145,"Flex do t\xEDtulo ("),Sl(146,"code"),rN(147,"flex"),og(),rN(148,")"),og(),Sl(149,"td")(150,"code"),rN(151,"1 auto"),og()()(),Sl(152,"tr")(153,"td")(154,"strong"),rN(155,"Hover"),og()(),Wl(156,"td")(157,"td"),og(),Sl(158,"tr")(159,"td")(160,"code"),rN(161,"--color-hover"),og()(),Sl(162,"td"),rN(163,"Cor principal no estado hover"),og(),Sl(164,"td")(165,"code"),rN(166,"var(--color-brand-01-dark)"),og()()(),Sl(167,"tr")(168,"td")(169,"code"),rN(170,"--background-hover"),og()(),Sl(171,"td"),rN(172,"Cor de background no estado hover"),og(),Sl(173,"td")(174,"code"),rN(175,"var(--color-brand-01-lightest)"),og()()(),Sl(176,"tr")(177,"td")(178,"strong"),rN(179,"Focused"),og()(),Wl(180,"td")(181,"td"),og(),Sl(182,"tr")(183,"td")(184,"code"),rN(185,"--color-focused"),og()(),Sl(186,"td"),rN(187,"Cor principal no estado de focus"),og(),Sl(188,"td")(189,"code"),rN(190,"var(--color-action-default)"),og()()(),Sl(191,"tr")(192,"td")(193,"code"),rN(194,"--outline-color-focused"),og()(),Sl(195,"td"),rN(196,"Cor do outline do estado de focus"),og(),Sl(197,"td")(198,"code"),rN(199,"var(--color-action-focus)"),og()()(),Sl(200,"tr")(201,"td")(202,"strong"),rN(203,"Disabled"),og()(),Wl(204,"td")(205,"td"),og(),Sl(206,"tr")(207,"td")(208,"code"),rN(209,"--color-disabled"),og()(),Sl(210,"td"),rN(211,"Cor principal no estado disabled"),og(),Sl(212,"td")(213,"code"),rN(214,"var(--color-neutral-light-30)"),og()()(),Sl(215,"tr")(216,"td")(217,"code"),rN(218,"--background-disabled"),og()(),Sl(219,"td"),rN(220,"Cor de background no estado disabled"),og(),Sl(221,"td")(222,"code"),rN(223,"var(--color-neutral-light-20)"),og()()(),Sl(224,"tr")(225,"td")(226,"code"),rN(227,"--text-color-disabled"),og()(),Sl(228,"td"),rN(229,"Cor do texto no estado disabled"),og(),Sl(230,"td")(231,"code"),rN(232,"var(--color-neutral-dark-70)"),og()()()()(),Wl(233,"br"),og(),Sl(234,"div",8)(235,"h4",9),rN(236,"Seletor"),og(),Sl(237,"pre",10),rN(238,`<po-input
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
`),og()(),Sl(239,"h4",11),rN(240,"Propriedades"),og(),Sl(241,"table",12)(242,"tr",13)(243,"th",14),rN(244,"Nome"),og(),Sl(245,"th",14),rN(246,"Tipo"),og(),Sl(247,"th",14),rN(248,"Padr\xE3o"),og(),Sl(249,"th",14),rN(250,"Descri\xE7\xE3o"),og()(),Sl(251,"tr",15)(252,"td",16)(253,"div",17)(254,"span",18),rN(255," (p-additional-help)"),Wl(256,"br"),og()(),Sl(257,"div",19),rN(258,"Deprecated"),og()(),Sl(259,"td",20)(260,"code",21),rN(261,"EventEmitter"),og()(),Sl(262,"td",22),rN(263,"-"),og(),Sl(264,"td",23)(265,"em")(266,"strong"),rN(267,"(opcional)"),og()(),Sl(268,"p"),rN(269,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),og(),Sl(270,"blockquote")(271,"p"),rN(272,"Essa propriedade est\xE1 "),Sl(273,"strong"),rN(274,"depreciada"),og(),rN(275," e ser\xE1 removida na vers\xE3o "),Sl(276,"code"),rN(277,"23.x.x"),og(),rN(278,". Recomendamos utilizar a propriedade "),Sl(279,"code"),rN(280,"p-helper"),og(),rN(281," que oferece mais recursos e flexibilidade."),og()()()(),Sl(282,"tr",15)(283,"td",16)(284,"div",24)(285,"span",25),rN(286," p-additional-help-tooltip"),Wl(287,"br"),og()(),Sl(288,"div",19),rN(289,"Deprecated"),og()(),Sl(290,"td",20)(291,"code",26),rN(292,"string"),og()(),Sl(293,"td",22),rN(294,"-"),og(),Sl(295,"td",23)(296,"em")(297,"strong"),rN(298,"(opcional)"),og()(),Sl(299,"p"),rN(300,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),Sl(301,"code"),rN(302,"po-helper"),og(),rN(303,`.
`),Sl(304,"strong"),rN(305,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),og()(),Sl(306,"blockquote")(307,"p"),rN(308,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),og()(),Sl(309,"blockquote")(310,"p"),rN(311,"Essa propriedade est\xE1 "),Sl(312,"strong"),rN(313,"depreciada"),og(),rN(314," e ser\xE1 removida na vers\xE3o "),Sl(315,"code"),rN(316,"23.x.x"),og(),rN(317,". Recomendamos utilizar a propriedade "),Sl(318,"code"),rN(319,"p-helper"),og(),rN(320," que oferece mais recursos e flexibilidade."),og()()()(),Sl(321,"tr",15)(322,"td",16)(323,"div",24)(324,"span",25),rN(325," p-append-in-body"),Wl(326,"br"),og()()(),Sl(327,"td",20)(328,"code",27),rN(329,"boolean"),og()(),Sl(330,"td",22)(331,"p")(332,"code"),rN(333,"false"),og()()(),Sl(334,"td",23)(335,"em")(336,"strong"),rN(337,"(opcional)"),og()(),Sl(338,"p"),rN(339,"Define que o popover ("),Sl(340,"code"),rN(341,"p-helper"),og(),rN(342," e/ou "),Sl(343,"code"),rN(344,"p-error-limit"),og(),rN(345,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),og(),Sl(346,"blockquote")(347,"p"),rN(348,"Quando utilizado com "),Sl(349,"code"),rN(350,"p-helper"),og(),rN(351,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),og()()()(),Sl(352,"tr",15)(353,"td",16)(354,"div",24)(355,"span",25),rN(356," p-auto-focus"),Wl(357,"br"),og()()(),Sl(358,"td",20)(359,"code",27),rN(360,"boolean"),og()(),Sl(361,"td",22)(362,"p")(363,"code"),rN(364,"false"),og()()(),Sl(365,"td",23)(366,"em")(367,"strong"),rN(368,"(opcional)"),og()(),Sl(369,"p"),rN(370,"Aplica foco no elemento ao ser iniciado."),og(),Sl(371,"blockquote")(372,"p"),rN(373,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),og()()()(),Sl(374,"tr",15)(375,"td",16)(376,"div",17)(377,"span",18),rN(378," (p-blur)"),Wl(379,"br"),og()()(),Sl(380,"td",20)(381,"code",21),rN(382,"EventEmitter"),og()(),Sl(383,"td",22),rN(384,"-"),og(),Sl(385,"td",23)(386,"em")(387,"strong"),rN(388,"(opcional)"),og()(),Sl(389,"p"),rN(390,"Evento disparado ao sair do campo."),og()()(),Sl(391,"tr",15)(392,"td",16)(393,"div",17)(394,"span",18),rN(395," (p-change)"),Wl(396,"br"),og()()(),Sl(397,"td",20)(398,"code",21),rN(399,"EventEmitter"),og()(),Sl(400,"td",22),rN(401,"-"),og(),Sl(402,"td",23)(403,"em")(404,"strong"),rN(405,"(opcional)"),og()(),Sl(406,"p"),rN(407,"Evento disparado ao alterar valor e deixar o campo."),og()()(),Sl(408,"tr",15)(409,"td",16)(410,"div",17)(411,"span",18),rN(412," (p-change-model)"),Wl(413,"br"),og()()(),Sl(414,"td",20)(415,"code",21),rN(416,"EventEmitter"),og()(),Sl(417,"td",22),rN(418,"-"),og(),Sl(419,"td",23)(420,"em")(421,"strong"),rN(422,"(opcional)"),og()(),Sl(423,"p"),rN(424,"Evento disparado ao alterar valor do model."),og()()(),Sl(425,"tr",15)(426,"td",16)(427,"div",24)(428,"span",25),rN(429,"p-clean"),Wl(430,"br"),og()()(),Sl(431,"td",20)(432,"code",27),rN(433,"boolean"),og()(),Sl(434,"td",22),rN(435,"-"),og(),Sl(436,"td",23)(437,"em")(438,"strong"),rN(439,"(opcional)"),og()(),Sl(440,"p"),rN(441,"Se verdadeiro, o campo receber\xE1 um bot\xE3o para ser limpo."),og()()(),Sl(442,"tr",15)(443,"td",16)(444,"div",24)(445,"span",25),rN(446," p-compact-label"),Wl(447,"br"),og()()(),Sl(448,"td",20)(449,"code",27),rN(450,"boolean"),og()(),Sl(451,"td",22)(452,"p")(453,"code"),rN(454,"false"),og()()(),Sl(455,"td",23)(456,"em")(457,"strong"),rN(458,"(opcional)"),og()(),Sl(459,"p"),rN(460,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),og(),Sl(461,"p"),rN(462,"Quando habilitado ("),Sl(463,"code"),rN(464,"true"),og(),rN(465,"), o modo compacto afeta o conjunto composto por:"),og(),Sl(466,"ul")(467,"li")(468,"code"),rN(469,"po-label"),og()(),Sl(470,"li")(471,"code"),rN(472,"p-requirement (showRequired)"),og()(),Sl(473,"li")(474,"code"),rN(475,"po-helper"),og()()(),Sl(476,"p"),rN(477,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),og(),Sl(478,"p"),rN(479,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),og(),Sl(480,"ul")(481,"li")(482,"code"),rN(483,"--field-container-title-justify"),og()(),Sl(484,"li")(485,"code"),rN(486,"--field-container-title-flex"),og()()(),Sl(487,"p"),rN(488,"Exemplo:"),og(),Sl(489,"pre")(490,"code"),rN(491,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),og()(),Sl(492,"p"),rN(493,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),og()()(),Sl(494,"tr",15)(495,"td",16)(496,"div",24)(497,"span",25),rN(498,"p-disabled"),Wl(499,"br"),og()()(),Sl(500,"td",20)(501,"code",27),rN(502,"boolean"),og()(),Sl(503,"td",22)(504,"p")(505,"code"),rN(506,"false"),og()()(),Sl(507,"td",23)(508,"em")(509,"strong"),rN(510,"(opcional)"),og()(),Sl(511,"p"),rN(512,"Se verdadeiro, desabilita o campo."),og()()(),Sl(513,"tr",15)(514,"td",16)(515,"div",24)(516,"span",25),rN(517," p-emit-all-changes"),Wl(518,"br"),og()()(),Sl(519,"td",20)(520,"code",27),rN(521,"boolean"),og()(),Sl(522,"td",22)(523,"p")(524,"code"),rN(525,"false"),og()()(),Sl(526,"td",23)(527,"em")(528,"strong"),rN(529,"(opcional)"),og()(),Sl(530,"p"),rN(531,"Sempre emite as altera\xE7\xF5es do model mesmo quando o valor atual for igual ao valor anterior."),og()()(),Sl(532,"tr",15)(533,"td",16)(534,"div",17)(535,"span",18),rN(536," (p-enter)"),Wl(537,"br"),og()()(),Sl(538,"td",20)(539,"code",21),rN(540,"EventEmitter"),og()(),Sl(541,"td",22),rN(542,"-"),og(),Sl(543,"td",23)(544,"em")(545,"strong"),rN(546,"(opcional)"),og()(),Sl(547,"p"),rN(548,"Evento disparado ao entrar do campo."),og()()(),Sl(549,"tr",15)(550,"td",16)(551,"div",24)(552,"span",25),rN(553," p-error-async-properties"),Wl(554,"br"),og()()(),Sl(555,"td",20)(556,"code",28),rN(557,"ErrorAsyncProperties"),og()(),Sl(558,"td",22),rN(559,"-"),og(),Sl(560,"td",23)(561,"em")(562,"strong"),rN(563,"(opcional)"),og()(),Sl(564,"p"),rN(565,`Realiza alguma valida\xE7\xE3o customizada ass\xEDncrona no componente.
Aconselhamos a utiliza\xE7\xE3o dessa propriedade somente em componentes que n\xE3o estejam
utilizando `),Sl(566,"code"),rN(567,"Reactive Forms"),og(),rN(568,". Em formul\xE1rios reativos, pode-se utilizar o pr\xF3prio "),Sl(569,"code"),rN(570,"asyncValidators"),og(),rN(571,"."),og()()(),Sl(572,"tr",15)(573,"td",16)(574,"div",24)(575,"span",25),rN(576," p-error-limit"),Wl(577,"br"),og()()(),Sl(578,"td",20)(579,"code",27),rN(580,"boolean"),og()(),Sl(581,"td",22)(582,"p")(583,"code"),rN(584,"false"),og()()(),Sl(585,"td",23)(586,"em")(587,"strong"),rN(588,"(opcional)"),og()(),Sl(589,"p"),rN(590,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),og(),Sl(591,"blockquote")(592,"p"),rN(593,"Caso essa propriedade seja definida como "),Sl(594,"code"),rN(595,"true"),og(),rN(596,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),og()()()(),Sl(597,"tr",15)(598,"td",16)(599,"div",24)(600,"span",25),rN(601," p-error-pattern"),Wl(602,"br"),og()()(),Sl(603,"td",20)(604,"code",26),rN(605,"string"),og()(),Sl(606,"td",22),rN(607,"-"),og(),Sl(608,"td",23)(609,"em")(610,"strong"),rN(611,"(opcional)"),og()(),Sl(612,"p"),rN(613,"Mensagem que ser\xE1 apresentada quando o "),Sl(614,"code"),rN(615,"pattern"),og(),rN(616," ou a m\xE1scara n\xE3o for satisfeita."),og(),Sl(617,"blockquote")(618,"p"),rN(619,`Por padr\xE3o, esta mensagem n\xE3o \xE9 apresentada quando o campo estiver vazio, mesmo que ele seja requerido.
Para exibir a mensagem com o campo vazio, utilize a propriedade `),Sl(620,"code"),rN(621,"p-required-field-error-message"),og(),rN(622," em conjunto."),og()()()(),Sl(623,"tr",15)(624,"td",16)(625,"div",24)(626,"span",25),rN(627," p-help"),Wl(628,"br"),og()()(),Sl(629,"td",20)(630,"code",26),rN(631,"string"),og()(),Sl(632,"td",22),rN(633,"-"),og(),Sl(634,"td",23)(635,"em")(636,"strong"),rN(637,"(opcional)"),og()(),Sl(638,"p"),rN(639,"Texto de apoio do campo."),og()()(),Sl(640,"tr",15)(641,"td",16)(642,"div",24)(643,"span",25),rN(644," p-icon"),Wl(645,"br"),og()()(),Sl(646,"td",20)(647,"code",26),rN(648,"string "),og(),Sl(649,"code",29),rN(650," TemplateRef<void>"),og()(),Sl(651,"td",22),rN(652,"-"),og(),Sl(653,"td",23)(654,"em")(655,"strong"),rN(656,"(opcional)"),og()(),Sl(657,"p"),rN(658,"Define o \xEDcone que ser\xE1 exibido no in\xEDcio do campo."),og(),Sl(659,"p"),rN(660,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),Sl(661,"a",30),rN(662,"Biblioteca de \xEDcones"),og(),rN(663,". conforme exemplo abaixo:"),og(),Sl(664,"pre")(665,"code"),rN(666,`<po-input p-icon="an an-user" p-label="PO input"></po-input>
`),og()(),Sl(667,"p"),rN(668,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),Sl(669,"em"),rN(670,"Font Awesome"),og(),rN(671,", da seguinte forma:"),og(),Sl(672,"pre")(673,"code"),rN(674,`<po-input p-icon="fa fa-podcast" p-label="PO input"></po-input>
`),og()(),Sl(675,"p"),rN(676,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),Sl(677,"code"),rN(678,"TemplateRef"),og(),rN(679,", conforme exemplo abaixo:"),og(),Sl(680,"pre")(681,"code"),rN(682,`<po-input [p-icon]="template" p-label="input template ionic"></po-input>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),og()(),Sl(683,"blockquote")(684,"p"),rN(685,"Para o \xEDcone enquadrar corretamente, deve-se utilizar "),Sl(686,"code"),rN(687,"font-size: inherit"),og(),rN(688," caso o \xEDcone utilizado n\xE3o aplique-o."),og()()()(),Sl(689,"tr",15)(690,"td",16)(691,"div",17)(692,"span",18),rN(693," (p-keydown)"),Wl(694,"br"),og()()(),Sl(695,"td",20)(696,"code",21),rN(697,"EventEmitter"),og()(),Sl(698,"td",22),rN(699,"-"),og(),Sl(700,"td",23)(701,"em")(702,"strong"),rN(703,"(opcional)"),og()(),Sl(704,"p"),rN(705,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Sl(706,"code"),rN(707,"KeyboardEvent"),og(),rN(708," com informa\xE7\xF5es sobre a tecla."),og()()(),Sl(709,"tr",15)(710,"td",16)(711,"div",24)(712,"span",25),rN(713," p-label"),Wl(714,"br"),og()()(),Sl(715,"td",20)(716,"code",26),rN(717,"string"),og()(),Sl(718,"td",22),rN(719,"-"),og(),Sl(720,"td",23)(721,"em")(722,"strong"),rN(723,"(opcional)"),og()(),Sl(724,"p"),rN(725,"R\xF3tulo do campo."),og()()(),Sl(726,"tr",15)(727,"td",16)(728,"div",24)(729,"span",25),rN(730," p-label-text-wrap"),Wl(731,"br"),og()()(),Sl(732,"td",20)(733,"code",27),rN(734,"boolean"),og()(),Sl(735,"td",22)(736,"p")(737,"code"),rN(738,"false"),og()()(),Sl(739,"td",23)(740,"em")(741,"strong"),rN(742,"(opcional)"),og()(),Sl(743,"p"),rN(744,"Habilita a quebra autom\xE1tica do texto da propriedade "),Sl(745,"code"),rN(746,"p-label"),og(),rN(747,". Quando "),Sl(748,"code"),rN(749,"p-label-text-wrap"),og(),rN(750,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),og()()(),Sl(751,"tr",15)(752,"td",16)(753,"div",24)(754,"span",25),rN(755," p-loading"),Wl(756,"br"),og()()(),Sl(757,"td",20)(758,"code",27),rN(759,"boolean"),og()(),Sl(760,"td",22)(761,"p")(762,"code"),rN(763,"false"),og()()(),Sl(764,"td",23)(765,"em")(766,"strong"),rN(767,"(opcional)"),og()(),Sl(768,"p"),rN(769,"Exibe um \xEDcone de carregamento no lado direito do campo para sinalizar que uma opera\xE7\xE3o est\xE1 em andamento."),og()()(),Sl(770,"tr",15)(771,"td",16)(772,"div",24)(773,"span",25),rN(774,"p-mask"),Wl(775,"br"),og()()(),Sl(776,"td",20)(777,"code",26),rN(778,"string"),og()(),Sl(779,"td",22),rN(780,"-"),og(),Sl(781,"td",23)(782,"em")(783,"strong"),rN(784,"(opcional)"),og()(),Sl(785,"p"),rN(786,`Indica uma m\xE1scara para o campo. Exemplos: (+99) (99) 99999?-9999, 99999-999, 999.999.999-99.
A m\xE1scara gera uma valida\xE7\xE3o autom\xE1tica do campo, podendo esta ser substitu\xEDda por um REGEX espec\xEDfico
atrav\xE9s da propriedade p-pattern.
O campo ser\xE1 sinalizado e o formul\xE1rio ficar\xE1 inv\xE1lido quando o valor informado estiver fora do padr\xE3o definido,
mesmo quando desabilitado.`),og()()(),Sl(787,"tr",15)(788,"td",16)(789,"div",24)(790,"span",25),rN(791,"p-mask-format-model"),Wl(792,"br"),og()()(),Sl(793,"td",20)(794,"code",27),rN(795,"boolean"),og()(),Sl(796,"td",22)(797,"p")(798,"code"),rN(799,"false"),og()()(),Sl(800,"td",23)(801,"em")(802,"strong"),rN(803,"(opcional)"),og()(),Sl(804,"p"),rN(805,"Indica se o "),Sl(806,"code"),rN(807,"model"),og(),rN(808," receber\xE1 o valor formatado pela m\xE1scara ou apenas o valor puro (sem formata\xE7\xE3o)."),og()()(),Sl(809,"tr",15)(810,"td",16)(811,"div",24)(812,"span",25),rN(813," p-mask-no-length-validation"),Wl(814,"br"),og()()(),Sl(815,"td",20)(816,"code",27),rN(817,"boolean"),og()(),Sl(818,"td",22)(819,"p")(820,"code"),rN(821,"false"),og()()(),Sl(822,"td",23)(823,"p"),rN(824,"Controla como o componente aplica as valida\xE7\xF5es de comprimento m\xEDnimo ("),Sl(825,"code"),rN(826,"minLength"),og(),rN(827,") e m\xE1ximo ("),Sl(828,"code"),rN(829,"maxLength"),og(),rN(830,") quando h\xE1 uma m\xE1scara ("),Sl(831,"code"),rN(832,"p-mask"),og(),rN(833,") definida."),og(),Sl(834,"ul")(835,"li"),rN(836,"Quando "),Sl(837,"code"),rN(838,"true"),og(),rN(839,", apenas os caracteres alfanum\xE9ricos ser\xE3o contabilizados para a valida\xE7\xE3o dos comprimentos."),og(),Sl(840,"li"),rN(841,"Quando "),Sl(842,"code"),rN(843,"false"),og(),rN(844,", todos os caracteres, incluindo os especiais da m\xE1scara, ser\xE3o considerados na valida\xE7\xE3o."),og()(),Sl(845,"blockquote")(846,"p"),rN(847,"Esta propriedade \xE9 ignorada quando utilizada em conjunto com "),Sl(848,"code"),rN(849,"p-mask-format-model"),og(),rN(850,"."),og()(),Sl(851,"p"),rN(852,"Exemplo:"),og(),Sl(853,"pre")(854,"code"),rN(855,`<po-input
  p-mask="999-999"
  p-maxlength="6"
  p-minlength="4"
  p-mask-no-length-validation="true"
></po-input>
`),og()(),Sl(856,"ul")(857,"li"),rN(858,"Entrada: "),Sl(859,"code"),rN(860,"123-456"),og(),rN(861," \u2192 Valida\xE7\xE3o ser\xE1 aplicada somente aos n\xFAmeros, ignorando o caractere especial "),Sl(862,"code"),rN(863,"-"),og(),rN(864,"."),og()()()(),Sl(865,"tr",15)(866,"td",16)(867,"div",24)(868,"span",25),rN(869," p-maxlength"),Wl(870,"br"),og()()(),Sl(871,"td",20)(872,"code",31),rN(873,"number"),og()(),Sl(874,"td",22),rN(875,"-"),og(),Sl(876,"td",23)(877,"em")(878,"strong"),rN(879,"(opcional)"),og()(),Sl(880,"p"),rN(881,"Indica a quantidade m\xE1xima de caracteres que o campo aceita."),og()()(),Sl(882,"tr",15)(883,"td",16)(884,"div",24)(885,"span",25),rN(886," p-minlength"),Wl(887,"br"),og()()(),Sl(888,"td",20)(889,"code",31),rN(890,"number"),og()(),Sl(891,"td",22),rN(892,"-"),og(),Sl(893,"td",23)(894,"em")(895,"strong"),rN(896,"(opcional)"),og()(),Sl(897,"p"),rN(898,"Indica a quantidade m\xEDnima de caracteres que o campo aceita."),og()()(),Sl(899,"tr",15)(900,"td",16)(901,"div",24)(902,"span",25),rN(903," name"),Wl(904,"br"),og()()(),Sl(905,"td",20)(906,"code",26),rN(907,"string"),og()(),Sl(908,"td",22),rN(909,"-"),og(),Sl(910,"td",23)(911,"p"),rN(912,"Nome e identificador do campo."),og()()(),Sl(913,"tr",15)(914,"td",16)(915,"div",24)(916,"span",25),rN(917," p-no-autocomplete"),Wl(918,"br"),og()()(),Sl(919,"td",20)(920,"code",27),rN(921,"boolean"),og()(),Sl(922,"td",22)(923,"p")(924,"code"),rN(925,"false"),og()()(),Sl(926,"td",23)(927,"em")(928,"strong"),rN(929,"(opcional)"),og()(),Sl(930,"p"),rN(931,"Define a propriedade nativa "),Sl(932,"code"),rN(933,"autocomplete"),og(),rN(934," do campo como "),Sl(935,"code"),rN(936,"off"),og(),rN(937,"."),og(),Sl(938,"blockquote")(939,"p"),rN(940,"No componente "),Sl(941,"code"),rN(942,"po-password"),og(),rN(943," ser\xE1 definido como "),Sl(944,"code"),rN(945,"new-password"),og(),rN(946,"."),og()(),Sl(947,"p"),rN(948,"Nos componentes "),Sl(949,"code"),rN(950,"po-password"),og(),rN(951," e "),Sl(952,"code"),rN(953,"po-login"),og(),rN(954," o valor padr\xE3o ser\xE1 "),Sl(955,"code"),rN(956,"true"),og(),rN(957,"."),og()()(),Sl(958,"tr",15)(959,"td",16)(960,"div",24)(961,"span",25),rN(962," p-optional"),Wl(963,"br"),og()()(),Sl(964,"td",20)(965,"code",27),rN(966,"boolean"),og()(),Sl(967,"td",22)(968,"p")(969,"code"),rN(970,"false"),og()()(),Sl(971,"td",23)(972,"em")(973,"strong"),rN(974,"(opcional)"),og()(),Sl(975,"p"),rN(976,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),og(),Sl(977,"blockquote")(978,"p"),rN(979,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),og()(),Sl(980,"ul")(981,"li"),rN(982,"O campo conter "),Sl(983,"code"),rN(984,"p-required"),og(),rN(985,";"),og(),Sl(986,"li"),rN(987,"N\xE3o possuir "),Sl(988,"code"),rN(989,"p-help"),og(),rN(990," e/ou "),Sl(991,"code"),rN(992,"p-label"),og(),rN(993,"."),og()()()(),Sl(994,"tr",15)(995,"td",16)(996,"div",24)(997,"span",25),rN(998,"p-pattern"),Wl(999,"br"),og()()(),Sl(1e3,"td",20)(1001,"code",26),rN(1002,"string"),og()(),Sl(1003,"td",22),rN(1004,"-"),og(),Sl(1005,"td",23)(1006,"em")(1007,"strong"),rN(1008,"(opcional)"),og()(),Sl(1009,"p"),rN(1010,`Express\xE3o regular para validar o campo.
Quando o campo possuir uma m\xE1scara `),Sl(1011,"code"),rN(1012,"(p-mask)"),og(),rN(1013,` ser\xE1 automaticamente validado por ela, por\xE9m
\xE9 poss\xEDvel definir um p-pattern para substituir a valida\xE7\xE3o da m\xE1scara.`),og()()(),Sl(1014,"tr",15)(1015,"td",16)(1016,"div",24)(1017,"span",25),rN(1018," p-placeholder"),Wl(1019,"br"),og()()(),Sl(1020,"td",20)(1021,"code",26),rN(1022,"string"),og()(),Sl(1023,"td",22)(1024,"p"),rN(1025,"''"),og()(),Sl(1026,"td",23)(1027,"em")(1028,"strong"),rN(1029,"(opcional)"),og()(),Sl(1030,"p"),rN(1031,"Mensagem que aparecer\xE1 enquanto o campo n\xE3o estiver preenchido."),og()()(),Sl(1032,"tr",15)(1033,"td",16)(1034,"div",24)(1035,"span",25),rN(1036," p-helper"),Wl(1037,"br"),og()()(),Sl(1038,"td",20)(1039,"code",32),rN(1040,"PoHelperOptions "),og(),Sl(1041,"code",26),rN(1042," string"),og()(),Sl(1043,"td",22),rN(1044,"-"),og(),Sl(1045,"td",23)(1046,"em")(1047,"strong"),rN(1048,"(opcional)"),og()(),Sl(1049,"p"),rN(1050,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label quando a propriedade "),Sl(1051,"code"),rN(1052,"p-label"),og(),rN(1053," for definida, ou, ao lado do componente na aus\xEAncia da propriedade "),Sl(1054,"code"),rN(1055,"p-label"),og(),rN(1056,"."),og(),Sl(1057,"blockquote")(1058,"p"),rN(1059,"Para mais informa\xE7\xF5es acesse: "),Sl(1060,"a",33),rN(1061,"https://po-ui.io/documentation/po-helper"),og(),rN(1062,"."),og()(),Sl(1063,"blockquote")(1064,"p"),rN(1065,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),Sl(1066,"code"),rN(1067,"p-additional-help-tooltip"),og(),rN(1068," e "),Sl(1069,"code"),rN(1070,"p-additional-help"),og(),rN(1071,") ser\xE1 ignorado."),og()()()(),Sl(1072,"tr",15)(1073,"td",16)(1074,"div",24)(1075,"span",25),rN(1076,"p-readonly"),Wl(1077,"br"),og()()(),Sl(1078,"td",20)(1079,"code",27),rN(1080,"boolean"),og()(),Sl(1081,"td",22),rN(1082,"-"),og(),Sl(1083,"td",23)(1084,"em")(1085,"strong"),rN(1086,"(opcional)"),og()(),Sl(1087,"p"),rN(1088,"Indica que o campo ser\xE1 somente leitura."),og()()(),Sl(1089,"tr",15)(1090,"td",16)(1091,"div",24)(1092,"span",25),rN(1093,"p-required"),Wl(1094,"br"),og()()(),Sl(1095,"td",20)(1096,"code",27),rN(1097,"boolean"),og()(),Sl(1098,"td",22)(1099,"p")(1100,"code"),rN(1101,"false"),og()()(),Sl(1102,"td",23)(1103,"em")(1104,"strong"),rN(1105,"(opcional)"),og()(),Sl(1106,"p"),rN(1107,"Define que o campo ser\xE1 obrigat\xF3rio."),og(),Sl(1108,"blockquote")(1109,"p"),rN(1110,"Esta propriedade \xE9 desconsiderada quando o input est\xE1 desabilitado "),Sl(1111,"code"),rN(1112,"(p-disabled)"),og(),rN(1113,"."),og()()()(),Sl(1114,"tr",15)(1115,"td",16)(1116,"div",24)(1117,"span",25),rN(1118," p-required-field-error-message"),Wl(1119,"br"),og()()(),Sl(1120,"td",20)(1121,"code",27),rN(1122,"boolean"),og()(),Sl(1123,"td",22)(1124,"p")(1125,"code"),rN(1126,"false"),og()()(),Sl(1127,"td",23)(1128,"em")(1129,"strong"),rN(1130,"(opcional)"),og()(),Sl(1131,"p"),rN(1132,"Exibe a mensagem setada na propriedade "),Sl(1133,"code"),rN(1134,"p-error-pattern"),og(),rN(1135," se o campo estiver vazio e for requerido."),og(),Sl(1136,"blockquote")(1137,"p"),rN(1138,"Necess\xE1rio que a propriedade "),Sl(1139,"code"),rN(1140,"p-required"),og(),rN(1141," esteja habilitada."),og()()()(),Sl(1142,"tr",15)(1143,"td",16)(1144,"div",24)(1145,"span",25),rN(1146," p-show-required"),Wl(1147,"br"),og()()(),Sl(1148,"td",20)(1149,"code",27),rN(1150,"boolean"),og()(),Sl(1151,"td",22),rN(1152,"-"),og(),Sl(1153,"td",23)(1154,"p"),rN(1155,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),og(),Sl(1156,"blockquote")(1157,"p"),rN(1158,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),og()(),Sl(1159,"ul")(1160,"li"),rN(1161,"N\xE3o possuir "),Sl(1162,"code"),rN(1163,"p-help"),og(),rN(1164," e/ou "),Sl(1165,"code"),rN(1166,"p-label"),og(),rN(1167,"."),og()()()(),Sl(1168,"tr",15)(1169,"td",16)(1170,"div",24)(1171,"span",25),rN(1172," p-size"),Wl(1173,"br"),og()()(),Sl(1174,"td",20)(1175,"code",26),rN(1176,"string"),og()(),Sl(1177,"td",22)(1178,"p")(1179,"code"),rN(1180,"medium"),og()()(),Sl(1181,"td",23)(1182,"em")(1183,"strong"),rN(1184,"(opcional)"),og()(),Sl(1185,"p"),rN(1186,"Define o tamanho do componente:"),og(),Sl(1187,"ul")(1188,"li")(1189,"code"),rN(1190,"small"),og(),rN(1191,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),og(),Sl(1192,"li")(1193,"code"),rN(1194,"medium"),og(),rN(1195,": altura do input como 44px."),og()(),Sl(1196,"blockquote")(1197,"p"),rN(1198,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Sl(1199,"code"),rN(1200,"medium"),og(),rN(1201,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Sl(1202,"a",34),rN(1203,"po-theme"),og(),rN(1204,"."),og()()()(),Sl(1205,"tr",15)(1206,"td",16)(1207,"div",24)(1208,"span",25),rN(1209," p-upper-case"),Wl(1210,"br"),og()()(),Sl(1211,"td",20)(1212,"code",27),rN(1213,"boolean"),og()(),Sl(1214,"td",22),rN(1215,"-"),og(),Sl(1216,"td",23)(1217,"p"),rN(1218,"Converte o conte\xFAdo do campo em mai\xFAsulo automaticamente."),og()()()(),Sl(1219,"h3",11),rN(1220,"M\xE9todos"),og(),Sl(1221,"table",35)(1222,"tr",15)(1223,"th",36)(1224,"div",24)(1225,"h4")(1226,"span",25),rN(1227," showAdditionalHelp "),og()()()()(),Sl(1228,"tr",23)(1229,"td",23)(1230,"p"),rN(1231,"M\xE9todo que exibe "),Sl(1232,"code"),rN(1233,"p-helper"),og(),rN(1234," ou executa a a\xE7\xE3o definida em "),Sl(1235,"code"),rN(1236,"p-helper{eventOnClick}"),og(),rN(1237," ou em "),Sl(1238,"code"),rN(1239,"p-additionalHelp"),og(),rN(1240,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Sl(1241,"code"),rN(1242,"p-keydown"),og(),rN(1243,"."),og(),Sl(1244,"blockquote")(1245,"p"),rN(1246,"Exibe ou oculta o conte\xFAdo do componente "),Sl(1247,"code"),rN(1248,"po-helper"),og(),rN(1249," quando o componente estiver com foco."),og()(),Sl(1250,"pre")(1251,"code"),rN(1252,`// Exemplo com p-label e p-helper
<po-nome-component
 #component
 ...
 p-label="Label do componente"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, component)"
></po-nome-component>
`),og()(),Sl(1253,"pre")(1254,"code"),rN(1255,`...
onKeyDown(event: KeyboardEvent, inp: PoNomeDoComponente): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),og()()()()(),Wl(1256,"br"),Sl(1257,"table",35)(1258,"tr",15)(1259,"th",36)(1260,"div",24)(1261,"h4")(1262,"span",25),rN(1263," focus "),og()()()()(),Sl(1264,"tr",23)(1265,"td",23)(1266,"p"),rN(1267,"Fun\xE7\xE3o que atribui foco ao componente."),og(),Sl(1268,"p"),rN(1269,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),og(),Sl(1270,"pre")(1271,"code"),rN(1272,`import { PoNomeDoComponenteComponent } from '@po-ui/ng-components';

...

@ViewChild(PoNomeDoComponenteComponent, { static: true }) nomeDoComponente: PoNomeDoComponenteComponent;

focusComponent() {
  this.nomeDoComponente.focus();
}
`),og()()()()(),Wl(1273,"br"),Sl(1274,"h3"),rN(1275,"Interfaces"),og(),Sl(1276,"h4",37)(1277,"code",5),rN(1278,"ErrorAsyncProperties"),og()(),Sl(1279,"div",2)(1280,"p"),rN(1281,"Interface para realizar uma valida\xE7\xE3o ass\xEDncrona no componente."),og()(),Sl(1282,"h4",11),rN(1283,"Propriedades"),og(),Sl(1284,"table",12)(1285,"tr",13)(1286,"th",14),rN(1287,"Nome"),og(),Sl(1288,"th",14),rN(1289,"Tipo"),og(),Sl(1290,"th",14),rN(1291,"Descri\xE7\xE3o"),og()(),Sl(1292,"tr",15)(1293,"td",16)(1294,"div",24)(1295,"span",25),rN(1296," errorAsync"),Wl(1297,"br"),og()()(),Sl(1298,"td",20)(1299,"code",38),rN(1300,"(value) => Observable<boolean>"),og()(),Sl(1301,"td",23)(1302,"p"),rN(1303,`Fun\xE7\xE3o obrigat\xF3ria executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),Sl(1304,"code"),rN(1305,"change"),og(),rN(1306," ou "),Sl(1307,"code"),rN(1308,"change-model"),og(),rN(1309,", dependendo do valor da propriedade "),Sl(1310,"code"),rN(1311,"triggerMode"),og(),rN(1312,"."),og()()(),Sl(1313,"tr",15)(1314,"td",16)(1315,"div",24)(1316,"span",25),rN(1317," triggerMode"),Wl(1318,"br"),og()()(),Sl(1319,"td",20)(1320,"code",39),rN(1321,"'change' "),og(),Sl(1322,"code",40),rN(1323," 'changeModel'"),og()(),Sl(1324,"td",23)(1325,"em")(1326,"strong"),rN(1327,"(opcional)"),og()(),Sl(1328,"p"),rN(1329,"Controla se o m\xE9todo ser\xE1 executado no disparo do output "),Sl(1330,"code"),rN(1331,"change"),og(),rN(1332," ou "),Sl(1333,"code"),rN(1334,"change-model"),og(),rN(1335,"."),og()()()()());},dependencies:[Ka],encapsulation:2,changeDetection:1})}return a})();var ve=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,r){this.route=m,this.router=r;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let r=m.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:"merge"}),this.activeTab=m;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(r){return new(r||a)(w(Xn),w(En))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Input",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,i){r&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return i.changeTab("doc")}),Wl(3,"sample-po-input-doc"),og(),Sl(4,"po-tab",3),ft("p-click",function(){return i.changeTab("web")}),Wl(5,"sample-po-input-basic-view")(6,"sample-po-input-labs-view")(7,"sample-po-input-reactive-form-view"),og()()()),r&2&&(rw("p-actions",i.actions),Lp(2),rw("p-active",i.activeTab==="doc"),Lp(2),rw("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[sNe,Ume,$me,Ee,be,xe,he],encapsulation:2,changeDetection:1})}return a})();var Le=[{path:"",component:ve}],fe=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue({imports:[mL.forChild(Le),mL]})}return a})();var mt=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue({imports:[sr,fe]})}return a})();export{mt as DocPoInputModule};