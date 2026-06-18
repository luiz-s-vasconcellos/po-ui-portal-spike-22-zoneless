import {f as fe$1,u as ue,s as sr,a as uL,C,c3 as Xn,E as En,U as Un,b as f,cM as Z9,cN as lm,b4 as O3,J as zl,an as DO,aH as Ka,b8 as qme,b9 as Yme,H as Il,q as Qx,R as og,a1 as ft,A as Lp,ar as Ux,au as dg,T as nw,bs as uN,aX as G9,aF as $9,aY as z9,aG as mk,aZ as hk,b0 as Qt,b1 as mv,c4 as C3,cp as Hhe,c8 as Dde,aJ as qhe,c9 as Yhe,aB as Dx,aM as ww,aN as QA,aO as Ew,aP as e0,cQ as Ik,cR as Ck,cz as kz,cX as L3,b6 as Yo,av as Gl,aw as co,ax as lo,a3 as cNe,aD as Xy,aT as eN,aE as Qy,bd as Ax}from'./main-QSTLMRDK.js';var ce=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-input-basic"]],standalone:false,decls:1,vars:0,consts:[["name","input","p-label","PO Input"]],template:function(r,i){r&1&&zl(0,"po-input",0);},dependencies:[O3],encapsulation:2,changeDetection:1})}return a})();var ye=a=>({"docs-sample-code-tabs":a}),Ee=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-input-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Input Basic"),og(),Il(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-input-basic/sample-po-input-basic.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-input name="input" p-label="PO Input"> </po-input>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-input-basic/sample-po-input-basic.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-input-basic',
  templateUrl: './sample-po-input-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoInputBasicComponent {}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-input-basic"),og(),zl(23,"hr")),r&2&&(Lp(5),Ux("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,ye,i.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,ce],encapsulation:2})}return a})();var ge=(()=>{class a{helperText;input;errorPattern;event;help;icon;label;mask;maxlength;minlength;pattern;placeholder;properties;size;iconOptions=[{value:"an an-newspaper",label:"an an-newspaper"},{value:"an an-magnifying-glass",label:"an an-magnifying-glass"},{value:"fa fa-calculator",label:"fa fa-calculator"}];propertiesOptions=[{value:"clean",label:"Clean"},{value:"disabled",label:"Disabled"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"},{value:"compactLabel",label:"Compact Label"},{value:"loading",label:"Loading"},{value:"maskFormatModel",label:"Formatted Model"},{value:"maskNoLengthValidation",label:"Mask No Length Validation"},{value:"noAutocomplete",label:"No Autocomplete"},{value:"optional",label:"Optional"},{value:"readonly",label:"Read Only"},{value:"required",label:"Required"},{value:"requiredFieldErrorMessage",label:"Required Field Error Message"},{value:"uppercase",label:"Upper Case"},{value:"showRequired",label:"Show Required"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore();}changeEvent(m){this.event=m;}restore(){this.helperText="",this.input=void 0,this.size="medium";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-input-labs"]],standalone:false,decls:22,vars:44,consts:[["f","ngForm"],["name","input",3,"ngModelChange","p-blur","p-change","p-change-model","p-enter","p-keydown","ngModel","p-helper","p-clean","p-disabled","p-error-pattern","p-help","p-icon","p-label","p-loading","p-mask","p-mask-format-model","p-maxlength","p-minlength","p-no-autocomplete","p-optional","p-pattern","p-placeholder","p-required","p-required-field-error-message","p-readonly","p-upper-case","p-show-required","p-mask-no-length-validation","p-size","p-error-limit","p-label-text-wrap","p-compact-label"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","errorPattern","p-clean","","p-label","Error Pattern",1,"po-md-6",3,"ngModelChange","ngModel"],["name","mask","p-clean","","p-help","Ex.: Zip code: '99999-999'; License plate: '@@@-9999'","p-label","Mask",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel"],["name","pattern","p-clean","","p-help","Ex.: '^(2[0-3]|[01][0-9]):?([0-5][0-9])$'","p-label","Pattern (Regex)",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel"],["name","minlength","p-clean","","p-label","Min Length",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","maxlength","p-clean","","p-label","Max Length",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","icon","p-clean","","p-label","Icon",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(r,i){if(r&1){let s=Dx();Il(0,"po-input",1),ww("ngModelChange",function(l){return Xy(s),eN(i.input,l)||(i.input=l),Qy(l)}),ft("p-blur",function(){return i.changeEvent("p-blur")})("p-change",function(){return i.changeEvent("p-change")})("p-change-model",function(){return i.changeEvent("p-change-model")})("p-enter",function(){return i.changeEvent("p-enter")})("p-keydown",function(){return i.changeEvent("p-keydown")}),og(),QA(),zl(1,"po-divider"),Il(2,"div",2),zl(3,"po-info",3)(4,"po-info",4),og(),zl(5,"po-divider"),Il(6,"form",null,0)(8,"po-input",5),ww("ngModelChange",function(l){return Xy(s),eN(i.label,l)||(i.label=l),Qy(l)}),og(),QA(),Il(9,"po-input",6),ww("ngModelChange",function(l){return Xy(s),eN(i.help,l)||(i.help=l),Qy(l)}),og(),QA(),Il(10,"po-input",7),ww("ngModelChange",function(l){return Xy(s),eN(i.helperText,l)||(i.helperText=l),Qy(l)}),og(),QA(),Il(11,"po-input",8),ww("ngModelChange",function(l){return Xy(s),eN(i.placeholder,l)||(i.placeholder=l),Qy(l)}),og(),QA(),Il(12,"po-input",9),ww("ngModelChange",function(l){return Xy(s),eN(i.errorPattern,l)||(i.errorPattern=l),Qy(l)}),og(),QA(),Il(13,"po-input",10),ww("ngModelChange",function(l){return Xy(s),eN(i.mask,l)||(i.mask=l),Qy(l)}),og(),QA(),Il(14,"po-input",11),ww("ngModelChange",function(l){return Xy(s),eN(i.pattern,l)||(i.pattern=l),Qy(l)}),og(),QA(),Il(15,"po-number",12),ww("ngModelChange",function(l){return Xy(s),eN(i.minlength,l)||(i.minlength=l),Qy(l)}),og(),QA(),Il(16,"po-number",13),ww("ngModelChange",function(l){return Xy(s),eN(i.maxlength,l)||(i.maxlength=l),Qy(l)}),og(),QA(),Il(17,"po-select",14),ww("ngModelChange",function(l){return Xy(s),eN(i.icon,l)||(i.icon=l),Qy(l)}),og(),QA(),Il(18,"po-checkbox-group",15),ww("ngModelChange",function(l){return Xy(s),eN(i.properties,l)||(i.properties=l),Qy(l)}),og(),QA(),Il(19,"po-radio-group",16),ww("ngModelChange",function(l){return Xy(s),eN(i.size,l)||(i.size=l),Qy(l)}),og(),QA(),Il(20,"div",2)(21,"po-button",17),ft("p-click",function(){return Xy(s),Ax(7).reset(),Qy(i.restore())}),og()()();}r&2&&(Ew("ngModel",i.input),nw("p-helper",i.helperText)("p-clean",i.properties==null?null:i.properties.includes("clean"))("p-disabled",i.properties==null?null:i.properties.includes("disabled"))("p-error-pattern",i.errorPattern)("p-help",i.help)("p-icon",i.icon)("p-label",i.label)("p-loading",i.properties==null?null:i.properties.includes("loading"))("p-mask",i.mask)("p-mask-format-model",i.properties==null?null:i.properties.includes("maskFormatModel"))("p-maxlength",i.maxlength)("p-minlength",i.minlength)("p-no-autocomplete",i.properties==null?null:i.properties.includes("noAutocomplete"))("p-optional",i.properties==null?null:i.properties.includes("optional"))("p-pattern",i.pattern)("p-placeholder",i.placeholder)("p-required",i.properties==null?null:i.properties.includes("required"))("p-required-field-error-message",i.properties==null?null:i.properties.includes("requiredFieldErrorMessage"))("p-readonly",i.properties==null?null:i.properties.includes("readonly"))("p-upper-case",i.properties==null?null:i.properties.includes("uppercase"))("p-show-required",i.properties==null?null:i.properties.includes("showRequired"))("p-mask-no-length-validation",i.properties==null?null:i.properties.includes("maskNoLengthValidation"))("p-size",i.size)("p-error-limit",i.properties==null?null:i.properties.includes("errorLimit"))("p-label-text-wrap",i.properties==null?null:i.properties.includes("labelTextWrap"))("p-compact-label",i.properties==null?null:i.properties.includes("compactLabel")),e0(),Lp(3),nw("p-value",i.input),Lp(),nw("p-value",i.event),Lp(4),Ew("ngModel",i.label),e0(),Lp(),Ew("ngModel",i.help),e0(),Lp(),Ew("ngModel",i.helperText),e0(),Lp(),Ew("ngModel",i.placeholder),e0(),Lp(),Ew("ngModel",i.errorPattern),e0(),Lp(),Ew("ngModel",i.mask),e0(),Lp(),Ew("ngModel",i.pattern),e0(),Lp(),Ew("ngModel",i.minlength),e0(),Lp(),Ew("ngModel",i.maxlength),e0(),Lp(),Ew("ngModel",i.icon),nw("p-options",i.iconOptions),e0(),Lp(),Ew("ngModel",i.properties),nw("p-options",i.propertiesOptions),e0(),Lp(),Ew("ngModel",i.size),nw("p-options",i.sizeOptions),e0());},dependencies:[G9,$9,z9,mk,hk,Qt,mv,C3,O3,Hhe,Dde,qhe,Yhe],encapsulation:2,changeDetection:1})}return a})();var _e=a=>({"docs-sample-code-tabs":a}),be=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-input-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Input Labs"),og(),Il(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-input-labs/sample-po-input-labs.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-input
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
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-input-labs/sample-po-input-labs.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-input-labs"),og(),zl(23,"hr")),r&2&&(Lp(5),Ux("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,_e,i.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,ge],encapsulation:2})}return a})();var qe=["reactiveFormData"],Se=(()=>{class a{fb=f(Z9);reactiveFormModal;reactiveForm;modalPrimaryAction={action:()=>this.reactiveFormModal.close(),label:"Close"};constructor(){this.createReactiveForm();}createReactiveForm(){this.reactiveForm=this.fb.group({name:["",lm.compose([lm.required,lm.minLength(5),lm.maxLength(30)])],address:["",lm.compose([lm.required,lm.minLength(5),lm.maxLength(50)])],number:["",lm.compose([lm.required,lm.min(1),lm.max(99999)])],email:["",lm.required],website:["",lm.required]});}saveForm(){this.reactiveFormModal.open();}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-input-reactive-form"]],viewQuery:function(r,i){if(r&1&&Gl(qe,7),r&2){let s;co(s=lo())&&(i.reactiveFormModal=s.first);}},standalone:false,decls:23,vars:8,consts:[["reactiveFormData",""],[3,"formGroup"],[1,"po-row"],["formControlName","name","p-clean","","p-icon","an an-user","p-label","Customer name",1,"po-md-12"],["formControlName","address","p-clean","","p-icon","an an-map-pin","p-label","Address",1,"po-lg-9"],["formControlName","number","p-label","Number","p-clean","",1,"po-lg-3"],["formControlName","email","p-label","Email","p-clean","",1,"po-lg-6"],["formControlName","website","p-label","Website","p-clean","",1,"po-lg-6"],["p-label","Save",1,"po-md-3",3,"p-click","p-disabled"],["p-title","Save successful",3,"p-primary-action"],["p-label","Name",1,"po-md-12",3,"p-value"],["p-label","Address",1,"po-md-6",3,"p-value"],["p-label","Number",1,"po-md-6",3,"p-value"],["p-label","Email",1,"po-md-6",3,"p-value"],["p-label","Website",1,"po-md-6",3,"p-value"]],template:function(r,i){r&1&&(Il(0,"form",1)(1,"div",2),zl(2,"po-input",3),QA(),og(),Il(3,"div",2),zl(4,"po-input",4),QA(),zl(5,"po-number",5),QA(),og(),Il(6,"div",2),zl(7,"po-email",6),QA(),zl(8,"po-url",7),QA(),og(),Il(9,"div",2)(10,"po-button",8),ft("p-click",function(){return i.saveForm()}),og()()(),Il(11,"po-modal",9,0)(13,"div",2),zl(14,"po-info",10),og(),zl(15,"po-divider"),Il(16,"div",2),zl(17,"po-info",11)(18,"po-info",12),og(),zl(19,"po-divider"),Il(20,"div",2),zl(21,"po-info",13)(22,"po-info",14),og()()),r&2&&(nw("formGroup",i.reactiveForm),Lp(2),e0(),Lp(2),e0(),Lp(),e0(),Lp(2),e0(),Lp(),e0(),Lp(2),nw("p-disabled",!i.reactiveForm.valid),Lp(),nw("p-primary-action",i.modalPrimaryAction),Lp(3),nw("p-value",i.reactiveForm.controls.name.value),Lp(3),nw("p-value",i.reactiveForm.controls.address.value),Lp(),nw("p-value",i.reactiveForm.controls.number.value),Lp(3),nw("p-value",i.reactiveForm.controls.email.value),Lp(),nw("p-value",i.reactiveForm.controls.website.value));},dependencies:[G9,$9,z9,Ik,Ck,Qt,mv,kz,O3,Hhe,L3,Yhe,Yo],encapsulation:2,changeDetection:1})}return a})();var Fe=a=>({"docs-sample-code-tabs":a}),xe=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-input-reactive-form-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Input - Reactive Form"),og(),Il(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-input-reactive-form/sample-po-input-reactive-form.component.html"),og(),Il(13,"pre",7),Qx(14,`<form [formGroup]="reactiveForm">
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
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-input-reactive-form/sample-po-input-reactive-form.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-input-reactive-form"),og(),zl(23,"hr")),r&2&&(Lp(5),Ux("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,Fe,i.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,Se],encapsulation:2})}return a})();var he=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-input-doc"]],standalone:false,decls:1336,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/grid-system"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","ErrorAsyncProperties"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-helper"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","(value)","=>","Observable<boolean>"],["pan","",1,"docs-api-property-type","'change'"],["pan","",1,"docs-api-property-type","'changeModel'"]],template:function(r,i){r&1&&(Il(0,"div",0)(1,"p",1)(2,"code"),Qx(3,"import { PoFieldModule } from '@po-ui/ng-components';"),og()(),Il(4,"div",2)(5,"p"),Qx(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),og(),Il(7,"blockquote")(8,"p"),Qx(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),Il(10,"code"),Qx(11,"FormsModule"),og(),Qx(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Il(13,"code"),Qx(14,"ReactiveFormsModule"),og(),Qx(15,", ambos nativos do Angular."),og()()(),Il(16,"h3",3),Qx(17,"Componente"),og(),Il(18,"h4",4)(19,"code",5),Qx(20,"PoInputComponent"),og()(),Il(21,"div",2)(22,"p"),Qx(23,`Este \xE9 um componente baseado em input, com v\xE1rias propriedades do input nativo e outras
propriedades extras como: m\xE1scara, pattern, mensagem de erro e etc.
Voc\xEA deve informar a vari\xE1vel que cont\xE9m o valor como [(ngModel)]="variavel", para que o
input receba o valor da vari\xE1vel e para que ela receba as altera\xE7\xF5es do valor (two-way-databinding).
A propriedade name \xE9 obrigat\xF3ria para que o formul\xE1rio e o model funcionem corretamente.`),og(),Il(24,"p"),Qx(25,"Importante:"),og(),Il(26,"ul")(27,"li"),Qx(28,`Caso o input tenha um [(ngModel)] sem o atributo name, ocorrer\xE1 um erro de angular.
Ent\xE3o voc\xEA precisa informar o atributo name ou o atributo [ngModelOptions]="{standalone: true}".
Exemplo: [(ngModel)]="pessoa.nome" [ngModelOptions]="{standalone: true}".`),og()(),Il(29,"h4"),Qx(30,"Tokens customiz\xE1veis"),og(),Il(31,"p"),Qx(32,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS): "),zl(33,"br"),Qx(34,`
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),Il(35,"code"),Qx(36,".po-input"),og()(),Il(37,"blockquote")(38,"p"),Qx(39,"Para correto alinhamento \xE9 recomendado o uso das classes de espa\xE7amento do "),Il(40,"a",6),Qx(41,"Grid System"),og(),Qx(42,"."),og()(),Il(43,"blockquote")(44,"p"),Qx(45,"Para maiores informa\xE7\xF5es, acesse o guia "),Il(46,"a",7),Qx(47,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),Qx(48,"."),og()(),Il(49,"table")(50,"thead")(51,"tr")(52,"th"),Qx(53,"Propriedade"),og(),Il(54,"th"),Qx(55,"Descri\xE7\xE3o"),og(),Il(56,"th"),Qx(57,"Valor Padr\xE3o"),og()()(),Il(58,"tbody")(59,"tr")(60,"td")(61,"strong"),Qx(62,"Default Values"),og()(),zl(63,"td")(64,"td"),og(),Il(65,"tr")(66,"td")(67,"code"),Qx(68,"--font-family"),og()(),Il(69,"td"),Qx(70,"Fam\xEDlia tipogr\xE1fica usada"),og(),Il(71,"td")(72,"code"),Qx(73,"var(--font-family-theme)"),og()()(),Il(74,"tr")(75,"td")(76,"code"),Qx(77,"--font-size"),og()(),Il(78,"td"),Qx(79,"Tamanho da fonte"),og(),Il(80,"td")(81,"code"),Qx(82,"var(--font-size-default)"),og()()(),Il(83,"tr")(84,"td")(85,"code"),Qx(86,"--text-color-placeholder"),og()(),Il(87,"td"),Qx(88,"Cor do texto placeholder"),og(),Il(89,"td")(90,"code"),Qx(91,"var(--color-neutral-light-30)"),og()()(),Il(92,"tr")(93,"td")(94,"code"),Qx(95,"--color"),og()(),Il(96,"td"),Qx(97,"Cor pincipal do input"),og(),Il(98,"td")(99,"code"),Qx(100,"var(--color-neutral-dark-70)"),og()()(),Il(101,"tr")(102,"td")(103,"code"),Qx(104,"--background"),og()(),Il(105,"td"),Qx(106,"Cor de background"),og(),Il(107,"td")(108,"code"),Qx(109,"var(--color-neutral-light-05)"),og()()(),Il(110,"tr")(111,"td")(112,"code"),Qx(113,"--padding"),og()(),Il(114,"td"),Qx(115,"Preenchimento"),og(),Il(116,"td")(117,"code"),Qx(118,"0 0.5rem"),og()()(),Il(119,"tr")(120,"td")(121,"code"),Qx(122,"--text-color"),og()(),Il(123,"td"),Qx(124,"Cor do texto"),og(),Il(125,"td")(126,"code"),Qx(127,"var(--color-neutral-dark-90)"),og()()(),Il(128,"tr")(129,"td")(130,"code"),Qx(131,"--field-container-title-justify"),og()(),Il(132,"td"),Qx(133,"Alinhamento horizontal do t\xEDtulo ("),Il(134,"code"),Qx(135,"justify-content"),og(),Qx(136,")"),og(),Il(137,"td")(138,"code"),Qx(139,"space-between"),og()()(),Il(140,"tr")(141,"td")(142,"code"),Qx(143,"--field-container-title-flex"),og()(),Il(144,"td"),Qx(145,"Flex do t\xEDtulo ("),Il(146,"code"),Qx(147,"flex"),og(),Qx(148,")"),og(),Il(149,"td")(150,"code"),Qx(151,"1 auto"),og()()(),Il(152,"tr")(153,"td")(154,"strong"),Qx(155,"Hover"),og()(),zl(156,"td")(157,"td"),og(),Il(158,"tr")(159,"td")(160,"code"),Qx(161,"--color-hover"),og()(),Il(162,"td"),Qx(163,"Cor principal no estado hover"),og(),Il(164,"td")(165,"code"),Qx(166,"var(--color-brand-01-dark)"),og()()(),Il(167,"tr")(168,"td")(169,"code"),Qx(170,"--background-hover"),og()(),Il(171,"td"),Qx(172,"Cor de background no estado hover"),og(),Il(173,"td")(174,"code"),Qx(175,"var(--color-brand-01-lightest)"),og()()(),Il(176,"tr")(177,"td")(178,"strong"),Qx(179,"Focused"),og()(),zl(180,"td")(181,"td"),og(),Il(182,"tr")(183,"td")(184,"code"),Qx(185,"--color-focused"),og()(),Il(186,"td"),Qx(187,"Cor principal no estado de focus"),og(),Il(188,"td")(189,"code"),Qx(190,"var(--color-action-default)"),og()()(),Il(191,"tr")(192,"td")(193,"code"),Qx(194,"--outline-color-focused"),og()(),Il(195,"td"),Qx(196,"Cor do outline do estado de focus"),og(),Il(197,"td")(198,"code"),Qx(199,"var(--color-action-focus)"),og()()(),Il(200,"tr")(201,"td")(202,"strong"),Qx(203,"Disabled"),og()(),zl(204,"td")(205,"td"),og(),Il(206,"tr")(207,"td")(208,"code"),Qx(209,"--color-disabled"),og()(),Il(210,"td"),Qx(211,"Cor principal no estado disabled"),og(),Il(212,"td")(213,"code"),Qx(214,"var(--color-neutral-light-30)"),og()()(),Il(215,"tr")(216,"td")(217,"code"),Qx(218,"--background-disabled"),og()(),Il(219,"td"),Qx(220,"Cor de background no estado disabled"),og(),Il(221,"td")(222,"code"),Qx(223,"var(--color-neutral-light-20)"),og()()(),Il(224,"tr")(225,"td")(226,"code"),Qx(227,"--text-color-disabled"),og()(),Il(228,"td"),Qx(229,"Cor do texto no estado disabled"),og(),Il(230,"td")(231,"code"),Qx(232,"var(--color-neutral-dark-70)"),og()()()()(),zl(233,"br"),og(),Il(234,"div",8)(235,"h4",9),Qx(236,"Seletor"),og(),Il(237,"pre",10),Qx(238,`<po-input
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
`),og()(),Il(239,"h4",11),Qx(240,"Propriedades"),og(),Il(241,"table",12)(242,"tr",13)(243,"th",14),Qx(244,"Nome"),og(),Il(245,"th",14),Qx(246,"Tipo"),og(),Il(247,"th",14),Qx(248,"Padr\xE3o"),og(),Il(249,"th",14),Qx(250,"Descri\xE7\xE3o"),og()(),Il(251,"tr",15)(252,"td",16)(253,"div",17)(254,"span",18),Qx(255," (p-additional-help)"),zl(256,"br"),og()(),Il(257,"div",19),Qx(258,"Deprecated"),og()(),Il(259,"td",20)(260,"code",21),Qx(261,"EventEmitter"),og()(),Il(262,"td",22),Qx(263,"-"),og(),Il(264,"td",23)(265,"em")(266,"strong"),Qx(267,"(opcional)"),og()(),Il(268,"p"),Qx(269,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),og(),Il(270,"blockquote")(271,"p"),Qx(272,"Essa propriedade est\xE1 "),Il(273,"strong"),Qx(274,"depreciada"),og(),Qx(275," e ser\xE1 removida na vers\xE3o "),Il(276,"code"),Qx(277,"23.x.x"),og(),Qx(278,". Recomendamos utilizar a propriedade "),Il(279,"code"),Qx(280,"p-helper"),og(),Qx(281," que oferece mais recursos e flexibilidade."),og()()()(),Il(282,"tr",15)(283,"td",16)(284,"div",24)(285,"span",25),Qx(286," p-additional-help-tooltip"),zl(287,"br"),og()(),Il(288,"div",19),Qx(289,"Deprecated"),og()(),Il(290,"td",20)(291,"code",26),Qx(292,"string"),og()(),Il(293,"td",22),Qx(294,"-"),og(),Il(295,"td",23)(296,"em")(297,"strong"),Qx(298,"(opcional)"),og()(),Il(299,"p"),Qx(300,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),Il(301,"code"),Qx(302,"po-helper"),og(),Qx(303,`.
`),Il(304,"strong"),Qx(305,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),og()(),Il(306,"blockquote")(307,"p"),Qx(308,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),og()(),Il(309,"blockquote")(310,"p"),Qx(311,"Essa propriedade est\xE1 "),Il(312,"strong"),Qx(313,"depreciada"),og(),Qx(314," e ser\xE1 removida na vers\xE3o "),Il(315,"code"),Qx(316,"23.x.x"),og(),Qx(317,". Recomendamos utilizar a propriedade "),Il(318,"code"),Qx(319,"p-helper"),og(),Qx(320," que oferece mais recursos e flexibilidade."),og()()()(),Il(321,"tr",15)(322,"td",16)(323,"div",24)(324,"span",25),Qx(325," p-append-in-body"),zl(326,"br"),og()()(),Il(327,"td",20)(328,"code",27),Qx(329,"boolean"),og()(),Il(330,"td",22)(331,"p")(332,"code"),Qx(333,"false"),og()()(),Il(334,"td",23)(335,"em")(336,"strong"),Qx(337,"(opcional)"),og()(),Il(338,"p"),Qx(339,"Define que o popover ("),Il(340,"code"),Qx(341,"p-helper"),og(),Qx(342," e/ou "),Il(343,"code"),Qx(344,"p-error-limit"),og(),Qx(345,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),og(),Il(346,"blockquote")(347,"p"),Qx(348,"Quando utilizado com "),Il(349,"code"),Qx(350,"p-helper"),og(),Qx(351,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),og()()()(),Il(352,"tr",15)(353,"td",16)(354,"div",24)(355,"span",25),Qx(356," p-auto-focus"),zl(357,"br"),og()()(),Il(358,"td",20)(359,"code",27),Qx(360,"boolean"),og()(),Il(361,"td",22)(362,"p")(363,"code"),Qx(364,"false"),og()()(),Il(365,"td",23)(366,"em")(367,"strong"),Qx(368,"(opcional)"),og()(),Il(369,"p"),Qx(370,"Aplica foco no elemento ao ser iniciado."),og(),Il(371,"blockquote")(372,"p"),Qx(373,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),og()()()(),Il(374,"tr",15)(375,"td",16)(376,"div",17)(377,"span",18),Qx(378," (p-blur)"),zl(379,"br"),og()()(),Il(380,"td",20)(381,"code",21),Qx(382,"EventEmitter"),og()(),Il(383,"td",22),Qx(384,"-"),og(),Il(385,"td",23)(386,"em")(387,"strong"),Qx(388,"(opcional)"),og()(),Il(389,"p"),Qx(390,"Evento disparado ao sair do campo."),og()()(),Il(391,"tr",15)(392,"td",16)(393,"div",17)(394,"span",18),Qx(395," (p-change)"),zl(396,"br"),og()()(),Il(397,"td",20)(398,"code",21),Qx(399,"EventEmitter"),og()(),Il(400,"td",22),Qx(401,"-"),og(),Il(402,"td",23)(403,"em")(404,"strong"),Qx(405,"(opcional)"),og()(),Il(406,"p"),Qx(407,"Evento disparado ao alterar valor e deixar o campo."),og()()(),Il(408,"tr",15)(409,"td",16)(410,"div",17)(411,"span",18),Qx(412," (p-change-model)"),zl(413,"br"),og()()(),Il(414,"td",20)(415,"code",21),Qx(416,"EventEmitter"),og()(),Il(417,"td",22),Qx(418,"-"),og(),Il(419,"td",23)(420,"em")(421,"strong"),Qx(422,"(opcional)"),og()(),Il(423,"p"),Qx(424,"Evento disparado ao alterar valor do model."),og()()(),Il(425,"tr",15)(426,"td",16)(427,"div",24)(428,"span",25),Qx(429,"p-clean"),zl(430,"br"),og()()(),Il(431,"td",20)(432,"code",27),Qx(433,"boolean"),og()(),Il(434,"td",22),Qx(435,"-"),og(),Il(436,"td",23)(437,"em")(438,"strong"),Qx(439,"(opcional)"),og()(),Il(440,"p"),Qx(441,"Se verdadeiro, o campo receber\xE1 um bot\xE3o para ser limpo."),og()()(),Il(442,"tr",15)(443,"td",16)(444,"div",24)(445,"span",25),Qx(446," p-compact-label"),zl(447,"br"),og()()(),Il(448,"td",20)(449,"code",27),Qx(450,"boolean"),og()(),Il(451,"td",22)(452,"p")(453,"code"),Qx(454,"false"),og()()(),Il(455,"td",23)(456,"em")(457,"strong"),Qx(458,"(opcional)"),og()(),Il(459,"p"),Qx(460,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),og(),Il(461,"p"),Qx(462,"Quando habilitado ("),Il(463,"code"),Qx(464,"true"),og(),Qx(465,"), o modo compacto afeta o conjunto composto por:"),og(),Il(466,"ul")(467,"li")(468,"code"),Qx(469,"po-label"),og()(),Il(470,"li")(471,"code"),Qx(472,"p-requirement (showRequired)"),og()(),Il(473,"li")(474,"code"),Qx(475,"po-helper"),og()()(),Il(476,"p"),Qx(477,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),og(),Il(478,"p"),Qx(479,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),og(),Il(480,"ul")(481,"li")(482,"code"),Qx(483,"--field-container-title-justify"),og()(),Il(484,"li")(485,"code"),Qx(486,"--field-container-title-flex"),og()()(),Il(487,"p"),Qx(488,"Exemplo:"),og(),Il(489,"pre")(490,"code"),Qx(491,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),og()(),Il(492,"p"),Qx(493,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),og()()(),Il(494,"tr",15)(495,"td",16)(496,"div",24)(497,"span",25),Qx(498,"p-disabled"),zl(499,"br"),og()()(),Il(500,"td",20)(501,"code",27),Qx(502,"boolean"),og()(),Il(503,"td",22)(504,"p")(505,"code"),Qx(506,"false"),og()()(),Il(507,"td",23)(508,"em")(509,"strong"),Qx(510,"(opcional)"),og()(),Il(511,"p"),Qx(512,"Se verdadeiro, desabilita o campo."),og()()(),Il(513,"tr",15)(514,"td",16)(515,"div",24)(516,"span",25),Qx(517," p-emit-all-changes"),zl(518,"br"),og()()(),Il(519,"td",20)(520,"code",27),Qx(521,"boolean"),og()(),Il(522,"td",22)(523,"p")(524,"code"),Qx(525,"false"),og()()(),Il(526,"td",23)(527,"em")(528,"strong"),Qx(529,"(opcional)"),og()(),Il(530,"p"),Qx(531,"Sempre emite as altera\xE7\xF5es do model mesmo quando o valor atual for igual ao valor anterior."),og()()(),Il(532,"tr",15)(533,"td",16)(534,"div",17)(535,"span",18),Qx(536," (p-enter)"),zl(537,"br"),og()()(),Il(538,"td",20)(539,"code",21),Qx(540,"EventEmitter"),og()(),Il(541,"td",22),Qx(542,"-"),og(),Il(543,"td",23)(544,"em")(545,"strong"),Qx(546,"(opcional)"),og()(),Il(547,"p"),Qx(548,"Evento disparado ao entrar do campo."),og()()(),Il(549,"tr",15)(550,"td",16)(551,"div",24)(552,"span",25),Qx(553," p-error-async-properties"),zl(554,"br"),og()()(),Il(555,"td",20)(556,"code",28),Qx(557,"ErrorAsyncProperties"),og()(),Il(558,"td",22),Qx(559,"-"),og(),Il(560,"td",23)(561,"em")(562,"strong"),Qx(563,"(opcional)"),og()(),Il(564,"p"),Qx(565,`Realiza alguma valida\xE7\xE3o customizada ass\xEDncrona no componente.
Aconselhamos a utiliza\xE7\xE3o dessa propriedade somente em componentes que n\xE3o estejam
utilizando `),Il(566,"code"),Qx(567,"Reactive Forms"),og(),Qx(568,". Em formul\xE1rios reativos, pode-se utilizar o pr\xF3prio "),Il(569,"code"),Qx(570,"asyncValidators"),og(),Qx(571,"."),og()()(),Il(572,"tr",15)(573,"td",16)(574,"div",24)(575,"span",25),Qx(576," p-error-limit"),zl(577,"br"),og()()(),Il(578,"td",20)(579,"code",27),Qx(580,"boolean"),og()(),Il(581,"td",22)(582,"p")(583,"code"),Qx(584,"false"),og()()(),Il(585,"td",23)(586,"em")(587,"strong"),Qx(588,"(opcional)"),og()(),Il(589,"p"),Qx(590,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),og(),Il(591,"blockquote")(592,"p"),Qx(593,"Caso essa propriedade seja definida como "),Il(594,"code"),Qx(595,"true"),og(),Qx(596,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),og()()()(),Il(597,"tr",15)(598,"td",16)(599,"div",24)(600,"span",25),Qx(601," p-error-pattern"),zl(602,"br"),og()()(),Il(603,"td",20)(604,"code",26),Qx(605,"string"),og()(),Il(606,"td",22),Qx(607,"-"),og(),Il(608,"td",23)(609,"em")(610,"strong"),Qx(611,"(opcional)"),og()(),Il(612,"p"),Qx(613,"Mensagem que ser\xE1 apresentada quando o "),Il(614,"code"),Qx(615,"pattern"),og(),Qx(616," ou a m\xE1scara n\xE3o for satisfeita."),og(),Il(617,"blockquote")(618,"p"),Qx(619,`Por padr\xE3o, esta mensagem n\xE3o \xE9 apresentada quando o campo estiver vazio, mesmo que ele seja requerido.
Para exibir a mensagem com o campo vazio, utilize a propriedade `),Il(620,"code"),Qx(621,"p-required-field-error-message"),og(),Qx(622," em conjunto."),og()()()(),Il(623,"tr",15)(624,"td",16)(625,"div",24)(626,"span",25),Qx(627," p-help"),zl(628,"br"),og()()(),Il(629,"td",20)(630,"code",26),Qx(631,"string"),og()(),Il(632,"td",22),Qx(633,"-"),og(),Il(634,"td",23)(635,"em")(636,"strong"),Qx(637,"(opcional)"),og()(),Il(638,"p"),Qx(639,"Texto de apoio do campo."),og()()(),Il(640,"tr",15)(641,"td",16)(642,"div",24)(643,"span",25),Qx(644," p-icon"),zl(645,"br"),og()()(),Il(646,"td",20)(647,"code",26),Qx(648,"string "),og(),Il(649,"code",29),Qx(650," TemplateRef<void>"),og()(),Il(651,"td",22),Qx(652,"-"),og(),Il(653,"td",23)(654,"em")(655,"strong"),Qx(656,"(opcional)"),og()(),Il(657,"p"),Qx(658,"Define o \xEDcone que ser\xE1 exibido no in\xEDcio do campo."),og(),Il(659,"p"),Qx(660,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),Il(661,"a",30),Qx(662,"Biblioteca de \xEDcones"),og(),Qx(663,". conforme exemplo abaixo:"),og(),Il(664,"pre")(665,"code"),Qx(666,`<po-input p-icon="an an-user" p-label="PO input"></po-input>
`),og()(),Il(667,"p"),Qx(668,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),Il(669,"em"),Qx(670,"Font Awesome"),og(),Qx(671,", da seguinte forma:"),og(),Il(672,"pre")(673,"code"),Qx(674,`<po-input p-icon="fa fa-podcast" p-label="PO input"></po-input>
`),og()(),Il(675,"p"),Qx(676,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),Il(677,"code"),Qx(678,"TemplateRef"),og(),Qx(679,", conforme exemplo abaixo:"),og(),Il(680,"pre")(681,"code"),Qx(682,`<po-input [p-icon]="template" p-label="input template ionic"></po-input>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),og()(),Il(683,"blockquote")(684,"p"),Qx(685,"Para o \xEDcone enquadrar corretamente, deve-se utilizar "),Il(686,"code"),Qx(687,"font-size: inherit"),og(),Qx(688," caso o \xEDcone utilizado n\xE3o aplique-o."),og()()()(),Il(689,"tr",15)(690,"td",16)(691,"div",17)(692,"span",18),Qx(693," (p-keydown)"),zl(694,"br"),og()()(),Il(695,"td",20)(696,"code",21),Qx(697,"EventEmitter"),og()(),Il(698,"td",22),Qx(699,"-"),og(),Il(700,"td",23)(701,"em")(702,"strong"),Qx(703,"(opcional)"),og()(),Il(704,"p"),Qx(705,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Il(706,"code"),Qx(707,"KeyboardEvent"),og(),Qx(708," com informa\xE7\xF5es sobre a tecla."),og()()(),Il(709,"tr",15)(710,"td",16)(711,"div",24)(712,"span",25),Qx(713," p-label"),zl(714,"br"),og()()(),Il(715,"td",20)(716,"code",26),Qx(717,"string"),og()(),Il(718,"td",22),Qx(719,"-"),og(),Il(720,"td",23)(721,"em")(722,"strong"),Qx(723,"(opcional)"),og()(),Il(724,"p"),Qx(725,"R\xF3tulo do campo."),og()()(),Il(726,"tr",15)(727,"td",16)(728,"div",24)(729,"span",25),Qx(730," p-label-text-wrap"),zl(731,"br"),og()()(),Il(732,"td",20)(733,"code",27),Qx(734,"boolean"),og()(),Il(735,"td",22)(736,"p")(737,"code"),Qx(738,"false"),og()()(),Il(739,"td",23)(740,"em")(741,"strong"),Qx(742,"(opcional)"),og()(),Il(743,"p"),Qx(744,"Habilita a quebra autom\xE1tica do texto da propriedade "),Il(745,"code"),Qx(746,"p-label"),og(),Qx(747,". Quando "),Il(748,"code"),Qx(749,"p-label-text-wrap"),og(),Qx(750,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),og()()(),Il(751,"tr",15)(752,"td",16)(753,"div",24)(754,"span",25),Qx(755," p-loading"),zl(756,"br"),og()()(),Il(757,"td",20)(758,"code",27),Qx(759,"boolean"),og()(),Il(760,"td",22)(761,"p")(762,"code"),Qx(763,"false"),og()()(),Il(764,"td",23)(765,"em")(766,"strong"),Qx(767,"(opcional)"),og()(),Il(768,"p"),Qx(769,"Exibe um \xEDcone de carregamento no lado direito do campo para sinalizar que uma opera\xE7\xE3o est\xE1 em andamento."),og()()(),Il(770,"tr",15)(771,"td",16)(772,"div",24)(773,"span",25),Qx(774,"p-mask"),zl(775,"br"),og()()(),Il(776,"td",20)(777,"code",26),Qx(778,"string"),og()(),Il(779,"td",22),Qx(780,"-"),og(),Il(781,"td",23)(782,"em")(783,"strong"),Qx(784,"(opcional)"),og()(),Il(785,"p"),Qx(786,`Indica uma m\xE1scara para o campo. Exemplos: (+99) (99) 99999?-9999, 99999-999, 999.999.999-99.
A m\xE1scara gera uma valida\xE7\xE3o autom\xE1tica do campo, podendo esta ser substitu\xEDda por um REGEX espec\xEDfico
atrav\xE9s da propriedade p-pattern.
O campo ser\xE1 sinalizado e o formul\xE1rio ficar\xE1 inv\xE1lido quando o valor informado estiver fora do padr\xE3o definido,
mesmo quando desabilitado.`),og()()(),Il(787,"tr",15)(788,"td",16)(789,"div",24)(790,"span",25),Qx(791,"p-mask-format-model"),zl(792,"br"),og()()(),Il(793,"td",20)(794,"code",27),Qx(795,"boolean"),og()(),Il(796,"td",22)(797,"p")(798,"code"),Qx(799,"false"),og()()(),Il(800,"td",23)(801,"em")(802,"strong"),Qx(803,"(opcional)"),og()(),Il(804,"p"),Qx(805,"Indica se o "),Il(806,"code"),Qx(807,"model"),og(),Qx(808," receber\xE1 o valor formatado pela m\xE1scara ou apenas o valor puro (sem formata\xE7\xE3o)."),og()()(),Il(809,"tr",15)(810,"td",16)(811,"div",24)(812,"span",25),Qx(813," p-mask-no-length-validation"),zl(814,"br"),og()()(),Il(815,"td",20)(816,"code",27),Qx(817,"boolean"),og()(),Il(818,"td",22)(819,"p")(820,"code"),Qx(821,"false"),og()()(),Il(822,"td",23)(823,"p"),Qx(824,"Controla como o componente aplica as valida\xE7\xF5es de comprimento m\xEDnimo ("),Il(825,"code"),Qx(826,"minLength"),og(),Qx(827,") e m\xE1ximo ("),Il(828,"code"),Qx(829,"maxLength"),og(),Qx(830,") quando h\xE1 uma m\xE1scara ("),Il(831,"code"),Qx(832,"p-mask"),og(),Qx(833,") definida."),og(),Il(834,"ul")(835,"li"),Qx(836,"Quando "),Il(837,"code"),Qx(838,"true"),og(),Qx(839,", apenas os caracteres alfanum\xE9ricos ser\xE3o contabilizados para a valida\xE7\xE3o dos comprimentos."),og(),Il(840,"li"),Qx(841,"Quando "),Il(842,"code"),Qx(843,"false"),og(),Qx(844,", todos os caracteres, incluindo os especiais da m\xE1scara, ser\xE3o considerados na valida\xE7\xE3o."),og()(),Il(845,"blockquote")(846,"p"),Qx(847,"Esta propriedade \xE9 ignorada quando utilizada em conjunto com "),Il(848,"code"),Qx(849,"p-mask-format-model"),og(),Qx(850,"."),og()(),Il(851,"p"),Qx(852,"Exemplo:"),og(),Il(853,"pre")(854,"code"),Qx(855,`<po-input
  p-mask="999-999"
  p-maxlength="6"
  p-minlength="4"
  p-mask-no-length-validation="true"
></po-input>
`),og()(),Il(856,"ul")(857,"li"),Qx(858,"Entrada: "),Il(859,"code"),Qx(860,"123-456"),og(),Qx(861," \u2192 Valida\xE7\xE3o ser\xE1 aplicada somente aos n\xFAmeros, ignorando o caractere especial "),Il(862,"code"),Qx(863,"-"),og(),Qx(864,"."),og()()()(),Il(865,"tr",15)(866,"td",16)(867,"div",24)(868,"span",25),Qx(869," p-maxlength"),zl(870,"br"),og()()(),Il(871,"td",20)(872,"code",31),Qx(873,"number"),og()(),Il(874,"td",22),Qx(875,"-"),og(),Il(876,"td",23)(877,"em")(878,"strong"),Qx(879,"(opcional)"),og()(),Il(880,"p"),Qx(881,"Indica a quantidade m\xE1xima de caracteres que o campo aceita."),og()()(),Il(882,"tr",15)(883,"td",16)(884,"div",24)(885,"span",25),Qx(886," p-minlength"),zl(887,"br"),og()()(),Il(888,"td",20)(889,"code",31),Qx(890,"number"),og()(),Il(891,"td",22),Qx(892,"-"),og(),Il(893,"td",23)(894,"em")(895,"strong"),Qx(896,"(opcional)"),og()(),Il(897,"p"),Qx(898,"Indica a quantidade m\xEDnima de caracteres que o campo aceita."),og()()(),Il(899,"tr",15)(900,"td",16)(901,"div",24)(902,"span",25),Qx(903," name"),zl(904,"br"),og()()(),Il(905,"td",20)(906,"code",26),Qx(907,"string"),og()(),Il(908,"td",22),Qx(909,"-"),og(),Il(910,"td",23)(911,"p"),Qx(912,"Nome e identificador do campo."),og()()(),Il(913,"tr",15)(914,"td",16)(915,"div",24)(916,"span",25),Qx(917," p-no-autocomplete"),zl(918,"br"),og()()(),Il(919,"td",20)(920,"code",27),Qx(921,"boolean"),og()(),Il(922,"td",22)(923,"p")(924,"code"),Qx(925,"false"),og()()(),Il(926,"td",23)(927,"em")(928,"strong"),Qx(929,"(opcional)"),og()(),Il(930,"p"),Qx(931,"Define a propriedade nativa "),Il(932,"code"),Qx(933,"autocomplete"),og(),Qx(934," do campo como "),Il(935,"code"),Qx(936,"off"),og(),Qx(937,"."),og(),Il(938,"blockquote")(939,"p"),Qx(940,"No componente "),Il(941,"code"),Qx(942,"po-password"),og(),Qx(943," ser\xE1 definido como "),Il(944,"code"),Qx(945,"new-password"),og(),Qx(946,"."),og()(),Il(947,"p"),Qx(948,"Nos componentes "),Il(949,"code"),Qx(950,"po-password"),og(),Qx(951," e "),Il(952,"code"),Qx(953,"po-login"),og(),Qx(954," o valor padr\xE3o ser\xE1 "),Il(955,"code"),Qx(956,"true"),og(),Qx(957,"."),og()()(),Il(958,"tr",15)(959,"td",16)(960,"div",24)(961,"span",25),Qx(962," p-optional"),zl(963,"br"),og()()(),Il(964,"td",20)(965,"code",27),Qx(966,"boolean"),og()(),Il(967,"td",22)(968,"p")(969,"code"),Qx(970,"false"),og()()(),Il(971,"td",23)(972,"em")(973,"strong"),Qx(974,"(opcional)"),og()(),Il(975,"p"),Qx(976,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),og(),Il(977,"blockquote")(978,"p"),Qx(979,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),og()(),Il(980,"ul")(981,"li"),Qx(982,"O campo conter "),Il(983,"code"),Qx(984,"p-required"),og(),Qx(985,";"),og(),Il(986,"li"),Qx(987,"N\xE3o possuir "),Il(988,"code"),Qx(989,"p-help"),og(),Qx(990," e/ou "),Il(991,"code"),Qx(992,"p-label"),og(),Qx(993,"."),og()()()(),Il(994,"tr",15)(995,"td",16)(996,"div",24)(997,"span",25),Qx(998,"p-pattern"),zl(999,"br"),og()()(),Il(1e3,"td",20)(1001,"code",26),Qx(1002,"string"),og()(),Il(1003,"td",22),Qx(1004,"-"),og(),Il(1005,"td",23)(1006,"em")(1007,"strong"),Qx(1008,"(opcional)"),og()(),Il(1009,"p"),Qx(1010,`Express\xE3o regular para validar o campo.
Quando o campo possuir uma m\xE1scara `),Il(1011,"code"),Qx(1012,"(p-mask)"),og(),Qx(1013,` ser\xE1 automaticamente validado por ela, por\xE9m
\xE9 poss\xEDvel definir um p-pattern para substituir a valida\xE7\xE3o da m\xE1scara.`),og()()(),Il(1014,"tr",15)(1015,"td",16)(1016,"div",24)(1017,"span",25),Qx(1018," p-placeholder"),zl(1019,"br"),og()()(),Il(1020,"td",20)(1021,"code",26),Qx(1022,"string"),og()(),Il(1023,"td",22)(1024,"p"),Qx(1025,"''"),og()(),Il(1026,"td",23)(1027,"em")(1028,"strong"),Qx(1029,"(opcional)"),og()(),Il(1030,"p"),Qx(1031,"Mensagem que aparecer\xE1 enquanto o campo n\xE3o estiver preenchido."),og()()(),Il(1032,"tr",15)(1033,"td",16)(1034,"div",24)(1035,"span",25),Qx(1036," p-helper"),zl(1037,"br"),og()()(),Il(1038,"td",20)(1039,"code",32),Qx(1040,"PoHelperOptions "),og(),Il(1041,"code",26),Qx(1042," string"),og()(),Il(1043,"td",22),Qx(1044,"-"),og(),Il(1045,"td",23)(1046,"em")(1047,"strong"),Qx(1048,"(opcional)"),og()(),Il(1049,"p"),Qx(1050,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label quando a propriedade "),Il(1051,"code"),Qx(1052,"p-label"),og(),Qx(1053," for definida, ou, ao lado do componente na aus\xEAncia da propriedade "),Il(1054,"code"),Qx(1055,"p-label"),og(),Qx(1056,"."),og(),Il(1057,"blockquote")(1058,"p"),Qx(1059,"Para mais informa\xE7\xF5es acesse: "),Il(1060,"a",33),Qx(1061,"https://po-ui.io/documentation/po-helper"),og(),Qx(1062,"."),og()(),Il(1063,"blockquote")(1064,"p"),Qx(1065,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),Il(1066,"code"),Qx(1067,"p-additional-help-tooltip"),og(),Qx(1068," e "),Il(1069,"code"),Qx(1070,"p-additional-help"),og(),Qx(1071,") ser\xE1 ignorado."),og()()()(),Il(1072,"tr",15)(1073,"td",16)(1074,"div",24)(1075,"span",25),Qx(1076,"p-readonly"),zl(1077,"br"),og()()(),Il(1078,"td",20)(1079,"code",27),Qx(1080,"boolean"),og()(),Il(1081,"td",22),Qx(1082,"-"),og(),Il(1083,"td",23)(1084,"em")(1085,"strong"),Qx(1086,"(opcional)"),og()(),Il(1087,"p"),Qx(1088,"Indica que o campo ser\xE1 somente leitura."),og()()(),Il(1089,"tr",15)(1090,"td",16)(1091,"div",24)(1092,"span",25),Qx(1093,"p-required"),zl(1094,"br"),og()()(),Il(1095,"td",20)(1096,"code",27),Qx(1097,"boolean"),og()(),Il(1098,"td",22)(1099,"p")(1100,"code"),Qx(1101,"false"),og()()(),Il(1102,"td",23)(1103,"em")(1104,"strong"),Qx(1105,"(opcional)"),og()(),Il(1106,"p"),Qx(1107,"Define que o campo ser\xE1 obrigat\xF3rio."),og(),Il(1108,"blockquote")(1109,"p"),Qx(1110,"Esta propriedade \xE9 desconsiderada quando o input est\xE1 desabilitado "),Il(1111,"code"),Qx(1112,"(p-disabled)"),og(),Qx(1113,"."),og()()()(),Il(1114,"tr",15)(1115,"td",16)(1116,"div",24)(1117,"span",25),Qx(1118," p-required-field-error-message"),zl(1119,"br"),og()()(),Il(1120,"td",20)(1121,"code",27),Qx(1122,"boolean"),og()(),Il(1123,"td",22)(1124,"p")(1125,"code"),Qx(1126,"false"),og()()(),Il(1127,"td",23)(1128,"em")(1129,"strong"),Qx(1130,"(opcional)"),og()(),Il(1131,"p"),Qx(1132,"Exibe a mensagem setada na propriedade "),Il(1133,"code"),Qx(1134,"p-error-pattern"),og(),Qx(1135," se o campo estiver vazio e for requerido."),og(),Il(1136,"blockquote")(1137,"p"),Qx(1138,"Necess\xE1rio que a propriedade "),Il(1139,"code"),Qx(1140,"p-required"),og(),Qx(1141," esteja habilitada."),og()()()(),Il(1142,"tr",15)(1143,"td",16)(1144,"div",24)(1145,"span",25),Qx(1146," p-show-required"),zl(1147,"br"),og()()(),Il(1148,"td",20)(1149,"code",27),Qx(1150,"boolean"),og()(),Il(1151,"td",22),Qx(1152,"-"),og(),Il(1153,"td",23)(1154,"p"),Qx(1155,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),og(),Il(1156,"blockquote")(1157,"p"),Qx(1158,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),og()(),Il(1159,"ul")(1160,"li"),Qx(1161,"N\xE3o possuir "),Il(1162,"code"),Qx(1163,"p-help"),og(),Qx(1164," e/ou "),Il(1165,"code"),Qx(1166,"p-label"),og(),Qx(1167,"."),og()()()(),Il(1168,"tr",15)(1169,"td",16)(1170,"div",24)(1171,"span",25),Qx(1172," p-size"),zl(1173,"br"),og()()(),Il(1174,"td",20)(1175,"code",26),Qx(1176,"string"),og()(),Il(1177,"td",22)(1178,"p")(1179,"code"),Qx(1180,"medium"),og()()(),Il(1181,"td",23)(1182,"em")(1183,"strong"),Qx(1184,"(opcional)"),og()(),Il(1185,"p"),Qx(1186,"Define o tamanho do componente:"),og(),Il(1187,"ul")(1188,"li")(1189,"code"),Qx(1190,"small"),og(),Qx(1191,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),og(),Il(1192,"li")(1193,"code"),Qx(1194,"medium"),og(),Qx(1195,": altura do input como 44px."),og()(),Il(1196,"blockquote")(1197,"p"),Qx(1198,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Il(1199,"code"),Qx(1200,"medium"),og(),Qx(1201,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Il(1202,"a",34),Qx(1203,"po-theme"),og(),Qx(1204,"."),og()()()(),Il(1205,"tr",15)(1206,"td",16)(1207,"div",24)(1208,"span",25),Qx(1209," p-upper-case"),zl(1210,"br"),og()()(),Il(1211,"td",20)(1212,"code",27),Qx(1213,"boolean"),og()(),Il(1214,"td",22),Qx(1215,"-"),og(),Il(1216,"td",23)(1217,"p"),Qx(1218,"Converte o conte\xFAdo do campo em mai\xFAsulo automaticamente."),og()()()(),Il(1219,"h3",11),Qx(1220,"M\xE9todos"),og(),Il(1221,"table",35)(1222,"tr",15)(1223,"th",36)(1224,"div",24)(1225,"h4")(1226,"span",25),Qx(1227," showAdditionalHelp "),og()()()()(),Il(1228,"tr",23)(1229,"td",23)(1230,"p"),Qx(1231,"M\xE9todo que exibe "),Il(1232,"code"),Qx(1233,"p-helper"),og(),Qx(1234," ou executa a a\xE7\xE3o definida em "),Il(1235,"code"),Qx(1236,"p-helper{eventOnClick}"),og(),Qx(1237," ou em "),Il(1238,"code"),Qx(1239,"p-additionalHelp"),og(),Qx(1240,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Il(1241,"code"),Qx(1242,"p-keydown"),og(),Qx(1243,"."),og(),Il(1244,"blockquote")(1245,"p"),Qx(1246,"Exibe ou oculta o conte\xFAdo do componente "),Il(1247,"code"),Qx(1248,"po-helper"),og(),Qx(1249," quando o componente estiver com foco."),og()(),Il(1250,"pre")(1251,"code"),Qx(1252,`// Exemplo com p-label e p-helper
<po-nome-component
 #component
 ...
 p-label="Label do componente"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, component)"
></po-nome-component>
`),og()(),Il(1253,"pre")(1254,"code"),Qx(1255,`...
onKeyDown(event: KeyboardEvent, inp: PoNomeDoComponente): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),og()()()()(),zl(1256,"br"),Il(1257,"table",35)(1258,"tr",15)(1259,"th",36)(1260,"div",24)(1261,"h4")(1262,"span",25),Qx(1263," focus "),og()()()()(),Il(1264,"tr",23)(1265,"td",23)(1266,"p"),Qx(1267,"Fun\xE7\xE3o que atribui foco ao componente."),og(),Il(1268,"p"),Qx(1269,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),og(),Il(1270,"pre")(1271,"code"),Qx(1272,`import { PoNomeDoComponenteComponent } from '@po-ui/ng-components';

...

@ViewChild(PoNomeDoComponenteComponent, { static: true }) nomeDoComponente: PoNomeDoComponenteComponent;

focusComponent() {
  this.nomeDoComponente.focus();
}
`),og()()()()(),zl(1273,"br"),Il(1274,"h3"),Qx(1275,"Interfaces"),og(),Il(1276,"h4",37)(1277,"code",5),Qx(1278,"ErrorAsyncProperties"),og()(),Il(1279,"div",2)(1280,"p"),Qx(1281,"Interface para realizar uma valida\xE7\xE3o ass\xEDncrona no componente."),og()(),Il(1282,"h4",11),Qx(1283,"Propriedades"),og(),Il(1284,"table",12)(1285,"tr",13)(1286,"th",14),Qx(1287,"Nome"),og(),Il(1288,"th",14),Qx(1289,"Tipo"),og(),Il(1290,"th",14),Qx(1291,"Descri\xE7\xE3o"),og()(),Il(1292,"tr",15)(1293,"td",16)(1294,"div",24)(1295,"span",25),Qx(1296," errorAsync"),zl(1297,"br"),og()()(),Il(1298,"td",20)(1299,"code",38),Qx(1300,"(value) => Observable<boolean>"),og()(),Il(1301,"td",23)(1302,"p"),Qx(1303,`Fun\xE7\xE3o obrigat\xF3ria executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),Il(1304,"code"),Qx(1305,"change"),og(),Qx(1306," ou "),Il(1307,"code"),Qx(1308,"change-model"),og(),Qx(1309,", dependendo do valor da propriedade "),Il(1310,"code"),Qx(1311,"triggerMode"),og(),Qx(1312,"."),og()()(),Il(1313,"tr",15)(1314,"td",16)(1315,"div",24)(1316,"span",25),Qx(1317," triggerMode"),zl(1318,"br"),og()()(),Il(1319,"td",20)(1320,"code",39),Qx(1321,"'change' "),og(),Il(1322,"code",40),Qx(1323," 'changeModel'"),og()(),Il(1324,"td",23)(1325,"em")(1326,"strong"),Qx(1327,"(opcional)"),og()(),Il(1328,"p"),Qx(1329,"Controla se o m\xE9todo ser\xE1 executado no disparo do output "),Il(1330,"code"),Qx(1331,"change"),og(),Qx(1332," ou "),Il(1333,"code"),Qx(1334,"change-model"),og(),Qx(1335,"."),og()()()()());},dependencies:[Ka],encapsulation:2})}return a})();var ve=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,r){this.route=m,this.router=r;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let r=m.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:"merge"}),this.activeTab=m;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(r){return new(r||a)(C(Xn),C(En))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Input",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,i){r&1&&(Il(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return i.changeTab("doc")}),zl(3,"sample-po-input-doc"),og(),Il(4,"po-tab",3),ft("p-click",function(){return i.changeTab("web")}),zl(5,"sample-po-input-basic-view")(6,"sample-po-input-labs-view")(7,"sample-po-input-reactive-form-view"),og()()()),r&2&&(nw("p-actions",i.actions),Lp(2),nw("p-active",i.activeTab==="doc"),Lp(2),nw("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[cNe,qme,Yme,Ee,be,xe,he],encapsulation:2})}return a})();var Le=[{path:"",component:ve}],fe=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue({imports:[uL.forChild(Le),uL]})}return a})();var mt=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue({imports:[sr,fe]})}return a})();export{mt as DocPoInputModule};