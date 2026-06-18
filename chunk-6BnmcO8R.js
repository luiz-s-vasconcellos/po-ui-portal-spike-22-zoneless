import {f as fe,u as ue,s as sr,a as uL,C,c3 as Xn,E as En,U as Un,b as f,c5 as Vde,cz as kz,J as zl,an as DO,aH as Ka,b8 as qme,b9 as Yme,H as Il,q as Qx,R as og,a1 as ft,A as Lp,ar as Ux,au as dg,T as nw,bs as uN,aX as G9,aF as $9,aY as z9,aG as mk,aZ as hk,b0 as Qt,b1 as mv,c4 as C3,b4 as F3,cp as Hhe,c8 as Dde,c9 as Yhe,aB as Dx,aM as ww,aN as QA,aO as Ew,aP as e0,bd as Ax,a3 as cNe,aD as Xy,aT as eN,aE as Qy}from'./main-FCMDZGSJ.js';var ie=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-email-basic"]],standalone:false,decls:1,vars:0,consts:[["name","email","p-label","PO Email"]],template:function(l,i){l&1&&zl(0,"po-email",0);},dependencies:[kz],encapsulation:2,changeDetection:1})}return a})();var Ee=a=>({"docs-sample-code-tabs":a}),ae=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-email-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Email Basic"),og(),Il(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-email-basic/sample-po-email-basic.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-email name="email" p-label="PO Email"> </po-email>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-email-basic/sample-po-email-basic.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-email-basic',
  templateUrl: './sample-po-email-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoEmailBasicComponent {}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-email-basic"),og(),zl(23,"hr")),l&2&&(Lp(5),Ux("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,Ee,i.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,ie],encapsulation:2})}return a})();var le=(()=>{class a{helperText;email;errorPattern;event;help;label;maxlength;minlength;placeholder;properties;size;propertiesOptions=[{value:"clean",label:"Clean"},{value:"disabled",label:"Disabled"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"},{value:"compactLabel",label:"Compact Label"},{value:"loading",label:"Loading"},{value:"noAutocomplete",label:"No Autocomplete"},{value:"optional",label:"Optional"},{value:"readonly",label:"Read Only"},{value:"required",label:"Required"},{value:"requiredFieldErrorMessage",label:"Required Field Error Message"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore();}restore(){this.helperText="",this.properties=[],this.label=void 0,this.help=void 0,this.errorPattern="",this.placeholder="",this.minlength=void 0,this.maxlength=void 0,this.email="",this.event="",this.size="medium";}changeEvent(d){this.event=d;}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-email-labs"]],standalone:false,decls:19,vars:34,consts:[["f","ngForm"],["name","email",3,"ngModelChange","p-blur","p-change","p-change-model","p-enter","p-keydown","ngModel","p-helper","p-clean","p-disabled","p-error-pattern","p-help","p-label","p-loading","p-maxlength","p-minlength","p-no-autocomplete","p-optional","p-placeholder","p-readonly","p-required","p-required-field-error-message","p-show-required","p-size","p-label-text-wrap","p-compact-label","p-error-limit"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","errorPattern","p-clean","","p-label","Error Pattern",1,"po-md-6",3,"ngModelChange","ngModel"],["name","minlength","p-clean","","p-label","Min Length",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","maxlength","p-clean","","p-label","Max Length",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(l,i){if(l&1){let p=Dx();Il(0,"po-email",1),ww("ngModelChange",function(r){return Xy(p),eN(i.email,r)||(i.email=r),Qy(r)}),ft("p-blur",function(){return i.changeEvent("p-blur")})("p-change",function(){return i.changeEvent("p-change")})("p-change-model",function(){return i.changeEvent("p-change-model")})("p-enter",function(){return i.changeEvent("p-enter")})("p-keydown",function(){return i.changeEvent("p-keydown")}),og(),QA(),zl(1,"po-divider"),Il(2,"div",2),zl(3,"po-info",3)(4,"po-info",4),og(),zl(5,"po-divider"),Il(6,"form",null,0)(8,"po-input",5),ww("ngModelChange",function(r){return Xy(p),eN(i.label,r)||(i.label=r),Qy(r)}),og(),QA(),Il(9,"po-input",6),ww("ngModelChange",function(r){return Xy(p),eN(i.help,r)||(i.help=r),Qy(r)}),og(),QA(),Il(10,"po-input",7),ww("ngModelChange",function(r){return Xy(p),eN(i.helperText,r)||(i.helperText=r),Qy(r)}),og(),QA(),Il(11,"po-input",8),ww("ngModelChange",function(r){return Xy(p),eN(i.placeholder,r)||(i.placeholder=r),Qy(r)}),og(),QA(),Il(12,"po-input",9),ww("ngModelChange",function(r){return Xy(p),eN(i.errorPattern,r)||(i.errorPattern=r),Qy(r)}),og(),QA(),Il(13,"po-number",10),ww("ngModelChange",function(r){return Xy(p),eN(i.minlength,r)||(i.minlength=r),Qy(r)}),og(),QA(),Il(14,"po-number",11),ww("ngModelChange",function(r){return Xy(p),eN(i.maxlength,r)||(i.maxlength=r),Qy(r)}),og(),QA(),Il(15,"po-checkbox-group",12),ww("ngModelChange",function(r){return Xy(p),eN(i.properties,r)||(i.properties=r),Qy(r)}),og(),QA(),Il(16,"po-radio-group",13),ww("ngModelChange",function(r){return Xy(p),eN(i.size,r)||(i.size=r),Qy(r)}),og(),QA(),Il(17,"div",2)(18,"po-button",14),ft("p-click",function(){return i.restore()}),og()()();}l&2&&(Ew("ngModel",i.email),nw("p-helper",i.helperText)("p-clean",i.properties.includes("clean"))("p-disabled",i.properties.includes("disabled"))("p-error-pattern",i.errorPattern)("p-help",i.help)("p-label",i.label)("p-loading",i.properties==null?null:i.properties.includes("loading"))("p-maxlength",i.maxlength)("p-minlength",i.minlength)("p-no-autocomplete",i.properties==null?null:i.properties.includes("noAutocomplete"))("p-optional",i.properties.includes("optional"))("p-placeholder",i.placeholder)("p-readonly",i.properties.includes("readonly"))("p-required",i.properties.includes("required"))("p-required-field-error-message",i.properties.includes("requiredFieldErrorMessage"))("p-show-required",i.properties.includes("showRequired"))("p-size",i.size)("p-label-text-wrap",i.properties==null?null:i.properties.includes("labelTextWrap"))("p-compact-label",i.properties==null?null:i.properties.includes("compactLabel"))("p-error-limit",i.properties==null?null:i.properties.includes("errorLimit")),e0(),Lp(3),nw("p-value",i.email),Lp(),nw("p-value",i.event),Lp(4),Ew("ngModel",i.label),e0(),Lp(),Ew("ngModel",i.help),e0(),Lp(),Ew("ngModel",i.helperText),e0(),Lp(),Ew("ngModel",i.placeholder),e0(),Lp(),Ew("ngModel",i.errorPattern),e0(),Lp(),Ew("ngModel",i.minlength),e0(),Lp(),Ew("ngModel",i.maxlength),e0(),Lp(),Ew("ngModel",i.properties),nw("p-options",i.propertiesOptions),e0(),Lp(),Ew("ngModel",i.size),nw("p-options",i.sizeOptions),e0());},dependencies:[G9,$9,z9,mk,hk,Qt,mv,C3,kz,F3,Hhe,Dde,Yhe],encapsulation:2,changeDetection:1})}return a})();var be=a=>({"docs-sample-code-tabs":a}),re=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-email-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Email Labs"),og(),Il(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-email-labs/sample-po-email-labs.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-email
  name="email"
  [(ngModel)]="email"
  [p-helper]="helperText"
  [p-clean]="properties.includes('clean')"
  [p-disabled]="properties.includes('disabled')"
  [p-error-pattern]="errorPattern"
  [p-help]="help"
  [p-label]="label"
  [p-loading]="$safeNavigationMigration(properties?.includes('loading'))"
  [p-maxlength]="maxlength"
  [p-minlength]="minlength"
  [p-no-autocomplete]="$safeNavigationMigration(properties?.includes('noAutocomplete'))"
  [p-optional]="properties.includes('optional')"
  [p-placeholder]="placeholder"
  [p-readonly]="properties.includes('readonly')"
  [p-required]="properties.includes('required')"
  [p-required-field-error-message]="properties.includes('requiredFieldErrorMessage')"
  [p-show-required]="properties.includes('showRequired')"
  [p-size]="size"
  [p-label-text-wrap]="$safeNavigationMigration(properties?.includes('labelTextWrap'))"
  [p-compact-label]="$safeNavigationMigration(properties?.includes('compactLabel'))"
  (p-blur)="changeEvent('p-blur')"
  (p-change)="changeEvent('p-change')"
  (p-change-model)="changeEvent('p-change-model')"
  (p-enter)="changeEvent('p-enter')"
  (p-keydown)="changeEvent('p-keydown')"
  [p-error-limit]="$safeNavigationMigration(properties?.includes('errorLimit'))"
>
</po-email>

<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="email"> </po-info>

  <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
</div>

<po-divider />

<form #f="ngForm">
  <po-input class="po-md-6" name="label" [(ngModel)]="label" p-clean p-label="Label"> </po-input>

  <po-input class="po-md-6" name="help" [(ngModel)]="help" p-clean p-label="Help"> </po-input>

  <po-input class="po-md-6" name="helperText" [(ngModel)]="helperText" p-clean p-label="Additional Help"> </po-input>

  <po-input class="po-md-6" name="placeholder" [(ngModel)]="placeholder" p-clean p-label="Placeholder"> </po-input>

  <po-input class="po-md-6" name="errorPattern" [(ngModel)]="errorPattern" p-clean p-label="Error Pattern"> </po-input>

  <po-number class="po-md-6 po-lg-3" name="minlength" [(ngModel)]="minlength" p-clean p-label="Min Length"> </po-number>

  <po-number class="po-md-6 po-lg-3" name="maxlength" [(ngModel)]="maxlength" p-clean p-label="Max Length"> </po-number>

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
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-email-labs/sample-po-email-labs.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { PoCheckboxGroupOption, PoRadioGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-email-labs',
  templateUrl: './sample-po-email-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoEmailLabsComponent implements OnInit {
  helperText: string;
  email: string;
  errorPattern: string;
  event: string;
  help: string;
  label: string;
  maxlength: number;
  minlength: number;
  placeholder: string;
  properties: Array<string>;
  size: string;

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
    { value: 'requiredFieldErrorMessage', label: 'Required Field Error Message' }
  ];

  public readonly sizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  ngOnInit() {
    this.restore();
  }

  restore() {
    this.helperText = '';
    this.properties = [];

    this.label = undefined;
    this.help = undefined;
    this.errorPattern = '';
    this.placeholder = '';

    this.minlength = undefined;
    this.maxlength = undefined;

    this.email = '';
    this.event = '';

    this.size = 'medium';
  }

  changeEvent(event: string) {
    this.event = event;
  }
}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-email-labs"),og(),zl(23,"hr")),l&2&&(Lp(5),Ux("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,be,i.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,le],encapsulation:2})}return a})();var me=(()=>{class a{poAlert=f(Vde);email="";openDialog(){this.poAlert.alert({title:"Sent with success!",message:`Ready Mr(s). ${this.getNameEmail()}, now you will get all the news from PO!`});}getNameEmail(){let d=this.email.indexOf("@");return this.email.substr(0,d).toLocaleUpperCase()}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-email-newsletter"]],standalone:false,decls:8,vars:2,consts:[["f","ngForm"],[1,"po-lg-12","po-text-center","po-font-subtitle"],[1,"po-row"],["name","email","p-clean","","p-error-pattern","Invalid e-mail","p-label","Email","p-placeholder","Enter your e-mail","p-required","",1,"po-lg-12",3,"ngModelChange","ngModel"],["p-label","Send","p-kind","primary",1,"po-md-4",3,"p-click","p-disabled"]],template:function(l,i){if(l&1){let p=Dx();Il(0,"div",1),Qx(1,"Enter your email to receive PO news, be sure to participate."),og(),Il(2,"form",null,0)(4,"div",2)(5,"po-email",3),ww("ngModelChange",function(r){return Xy(p),eN(i.email,r)||(i.email=r),Qy(r)}),og(),QA(),og(),Il(6,"div",2)(7,"po-button",4),ft("p-click",function(){return i.openDialog()}),og()()();}if(l&2){let p=Ax(3);Lp(5),Ew("ngModel",i.email),e0(),Lp(2),nw("p-disabled",p.form.invalid);}},dependencies:[G9,$9,z9,mk,hk,Qt,kz],encapsulation:2,changeDetection:1})}return a})();var ve=a=>({"docs-sample-code-tabs":a}),de=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-email-newsletter-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Email - Newsletter"),og(),Il(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-email-newsletter/sample-po-email-newsletter.component.html"),og(),Il(13,"pre",7),Qx(14,`<div class="po-lg-12 po-text-center po-font-subtitle">Enter your email to receive PO news, be sure to participate.</div>

<form #f="ngForm">
  <div class="po-row">
    <po-email
      class="po-lg-12"
      name="email"
      [(ngModel)]="email"
      p-clean
      p-error-pattern="Invalid e-mail"
      p-label="Email"
      p-placeholder="Enter your e-mail"
      p-required
    >
    </po-email>
  </div>

  <div class="po-row">
    <po-button class="po-md-4" p-label="Send" p-kind="primary" [p-disabled]="f.form.invalid" (p-click)="openDialog()">
    </po-button>
  </div>
</form>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-email-newsletter/sample-po-email-newsletter.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

import { PoDialogService } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-email-newsletter',
  templateUrl: './sample-po-email-newsletter.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoEmailNewsletterComponent {
  private poAlert = inject(PoDialogService);

  email: string = '';

  openDialog() {
    this.poAlert.alert({
      title: 'Sent with success!',
      message: \`Ready Mr(s). \${this.getNameEmail()}, now you will get all the news from PO!\`
    });
  }

  private getNameEmail() {
    const index = this.email.indexOf('@');

    return this.email.substr(0, index).toLocaleUpperCase();
  }
}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-email-newsletter"),og(),zl(23,"hr")),l&2&&(Lp(5),Ux("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,ve,i.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,me],encapsulation:2})}return a})();var pe=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-email-doc"]],standalone:false,decls:1341,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/grid-system"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","ErrorAsyncProperties"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-helper"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","(value)","=>","Observable<boolean>"],["pan","",1,"docs-api-property-type","'change'"],["pan","",1,"docs-api-property-type","'changeModel'"]],template:function(l,i){l&1&&(Il(0,"div",0)(1,"p",1)(2,"code"),Qx(3,"import { PoFieldModule } from '@po-ui/ng-components';"),og()(),Il(4,"div",2)(5,"p"),Qx(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),og(),Il(7,"blockquote")(8,"p"),Qx(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),Il(10,"code"),Qx(11,"FormsModule"),og(),Qx(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Il(13,"code"),Qx(14,"ReactiveFormsModule"),og(),Qx(15,", ambos nativos do Angular."),og()()(),Il(16,"h3",3),Qx(17,"Componente"),og(),Il(18,"h4",4)(19,"code",5),Qx(20,"PoEmailComponent"),og()(),Il(21,"div",2)(22,"p"),Qx(23,`Este \xE9 um componente baseado em input, com v\xE1rias propriedades do input nativo e outras
propriedades extras como: m\xE1scara, pattern, mensagem de erro e etc.
Voc\xEA deve informar a vari\xE1vel que cont\xE9m o valor como [(ngModel)]="variavel", para que o
input receba o valor da vari\xE1vel e para que ela receba as altera\xE7\xF5es do valor (two-way-databinding).
A propriedade name \xE9 obrigat\xF3ria para que o formul\xE1rio e o model funcionem corretamente.`),og(),Il(24,"p"),Qx(25,"Importante:"),og(),Il(26,"ul")(27,"li"),Qx(28,`Caso o input tenha um [(ngModel)] sem o atributo name, ocorrer\xE1 um erro de angular.
Ent\xE3o voc\xEA precisa informar o atributo name ou o atributo [ngModelOptions]="{standalone: true}".
Exemplo: [(ngModel)]="pessoa.nome" [ngModelOptions]="{standalone: true}".`),og()(),Il(29,"h4"),Qx(30,"Tokens customiz\xE1veis"),og(),Il(31,"p"),Qx(32,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS): "),zl(33,"br"),Qx(34,`
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),Il(35,"code"),Qx(36,".po-input"),og()(),Il(37,"blockquote")(38,"p"),Qx(39,"Para correto alinhamento \xE9 recomendado o uso das classes de espa\xE7amento do "),Il(40,"a",6),Qx(41,"Grid System"),og(),Qx(42,"."),og()(),Il(43,"blockquote")(44,"p"),Qx(45,"Para maiores informa\xE7\xF5es, acesse o guia "),Il(46,"a",7),Qx(47,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),Qx(48,"."),og()(),Il(49,"table")(50,"thead")(51,"tr")(52,"th"),Qx(53,"Propriedade"),og(),Il(54,"th"),Qx(55,"Descri\xE7\xE3o"),og(),Il(56,"th"),Qx(57,"Valor Padr\xE3o"),og()()(),Il(58,"tbody")(59,"tr")(60,"td")(61,"strong"),Qx(62,"Default Values"),og()(),zl(63,"td")(64,"td"),og(),Il(65,"tr")(66,"td")(67,"code"),Qx(68,"--font-family"),og()(),Il(69,"td"),Qx(70,"Fam\xEDlia tipogr\xE1fica usada"),og(),Il(71,"td")(72,"code"),Qx(73,"var(--font-family-theme)"),og()()(),Il(74,"tr")(75,"td")(76,"code"),Qx(77,"--font-size"),og()(),Il(78,"td"),Qx(79,"Tamanho da fonte"),og(),Il(80,"td")(81,"code"),Qx(82,"var(--font-size-default)"),og()()(),Il(83,"tr")(84,"td")(85,"code"),Qx(86,"--text-color-placeholder"),og()(),Il(87,"td"),Qx(88,"Cor do texto placeholder"),og(),Il(89,"td")(90,"code"),Qx(91,"var(--color-neutral-light-30)"),og()()(),Il(92,"tr")(93,"td")(94,"code"),Qx(95,"--color"),og()(),Il(96,"td"),Qx(97,"Cor pincipal do input"),og(),Il(98,"td")(99,"code"),Qx(100,"var(--color-neutral-dark-70)"),og()()(),Il(101,"tr")(102,"td")(103,"code"),Qx(104,"--background"),og()(),Il(105,"td"),Qx(106,"Cor de background"),og(),Il(107,"td")(108,"code"),Qx(109,"var(--color-neutral-light-05)"),og()()(),Il(110,"tr")(111,"td")(112,"code"),Qx(113,"--padding"),og()(),Il(114,"td"),Qx(115,"Preenchimento"),og(),Il(116,"td")(117,"code"),Qx(118,"0 0.5rem"),og()()(),Il(119,"tr")(120,"td")(121,"code"),Qx(122,"--text-color"),og()(),Il(123,"td"),Qx(124,"Cor do texto"),og(),Il(125,"td")(126,"code"),Qx(127,"var(--color-neutral-dark-90)"),og()()(),Il(128,"tr")(129,"td")(130,"code"),Qx(131,"--field-container-title-justify"),og()(),Il(132,"td"),Qx(133,"Alinhamento horizontal do t\xEDtulo ("),Il(134,"code"),Qx(135,"justify-content"),og(),Qx(136,")"),og(),Il(137,"td")(138,"code"),Qx(139,"space-between"),og()()(),Il(140,"tr")(141,"td")(142,"code"),Qx(143,"--field-container-title-flex"),og()(),Il(144,"td"),Qx(145,"Flex do t\xEDtulo ("),Il(146,"code"),Qx(147,"flex"),og(),Qx(148,")"),og(),Il(149,"td")(150,"code"),Qx(151,"1 auto"),og()()(),Il(152,"tr")(153,"td")(154,"strong"),Qx(155,"Hover"),og()(),zl(156,"td")(157,"td"),og(),Il(158,"tr")(159,"td")(160,"code"),Qx(161,"--color-hover"),og()(),Il(162,"td"),Qx(163,"Cor principal no estado hover"),og(),Il(164,"td")(165,"code"),Qx(166,"var(--color-brand-01-dark)"),og()()(),Il(167,"tr")(168,"td")(169,"code"),Qx(170,"--background-hover"),og()(),Il(171,"td"),Qx(172,"Cor de background no estado hover"),og(),Il(173,"td")(174,"code"),Qx(175,"var(--color-brand-01-lightest)"),og()()(),Il(176,"tr")(177,"td")(178,"strong"),Qx(179,"Focused"),og()(),zl(180,"td")(181,"td"),og(),Il(182,"tr")(183,"td")(184,"code"),Qx(185,"--color-focused"),og()(),Il(186,"td"),Qx(187,"Cor principal no estado de focus"),og(),Il(188,"td")(189,"code"),Qx(190,"var(--color-action-default)"),og()()(),Il(191,"tr")(192,"td")(193,"code"),Qx(194,"--outline-color-focused"),og()(),Il(195,"td"),Qx(196,"Cor do outline do estado de focus"),og(),Il(197,"td")(198,"code"),Qx(199,"var(--color-action-focus)"),og()()(),Il(200,"tr")(201,"td")(202,"strong"),Qx(203,"Disabled"),og()(),zl(204,"td")(205,"td"),og(),Il(206,"tr")(207,"td")(208,"code"),Qx(209,"--color-disabled"),og()(),Il(210,"td"),Qx(211,"Cor principal no estado disabled"),og(),Il(212,"td")(213,"code"),Qx(214,"var(--color-neutral-light-30)"),og()()(),Il(215,"tr")(216,"td")(217,"code"),Qx(218,"--background-disabled"),og()(),Il(219,"td"),Qx(220,"Cor de background no estado disabled"),og(),Il(221,"td")(222,"code"),Qx(223,"var(--color-neutral-light-20)"),og()()(),Il(224,"tr")(225,"td")(226,"code"),Qx(227,"--text-color-disabled"),og()(),Il(228,"td"),Qx(229,"Cor do texto no estado disabled"),og(),Il(230,"td")(231,"code"),Qx(232,"var(--color-neutral-dark-70)"),og()()()()(),Il(233,"p"),zl(234,"br"),Qx(235," O "),Il(236,"code"),Qx(237,"po-email"),og(),Qx(238," \xE9 um input espec\xEDfico para receber E-mail, com o pattern j\xE1 configurado."),og()(),Il(239,"div",8)(240,"h4",9),Qx(241,"Seletor"),og(),Il(242,"pre",10),Qx(243,`<po-email
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
</po-email>
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
leitura clara.`),og()()(),Il(756,"tr",15)(757,"td",16)(758,"div",24)(759,"span",25),Qx(760," p-loading"),zl(761,"br"),og()()(),Il(762,"td",20)(763,"code",27),Qx(764,"boolean"),og()(),Il(765,"td",22)(766,"p")(767,"code"),Qx(768,"false"),og()()(),Il(769,"td",23)(770,"em")(771,"strong"),Qx(772,"(opcional)"),og()(),Il(773,"p"),Qx(774,"Exibe um \xEDcone de carregamento no lado direito do campo para sinalizar que uma opera\xE7\xE3o est\xE1 em andamento."),og()()(),Il(775,"tr",15)(776,"td",16)(777,"div",24)(778,"span",25),Qx(779,"p-mask"),zl(780,"br"),og()()(),Il(781,"td",20)(782,"code",26),Qx(783,"string"),og()(),Il(784,"td",22),Qx(785,"-"),og(),Il(786,"td",23)(787,"em")(788,"strong"),Qx(789,"(opcional)"),og()(),Il(790,"p"),Qx(791,`Indica uma m\xE1scara para o campo. Exemplos: (+99) (99) 99999?-9999, 99999-999, 999.999.999-99.
A m\xE1scara gera uma valida\xE7\xE3o autom\xE1tica do campo, podendo esta ser substitu\xEDda por um REGEX espec\xEDfico
atrav\xE9s da propriedade p-pattern.
O campo ser\xE1 sinalizado e o formul\xE1rio ficar\xE1 inv\xE1lido quando o valor informado estiver fora do padr\xE3o definido,
mesmo quando desabilitado.`),og()()(),Il(792,"tr",15)(793,"td",16)(794,"div",24)(795,"span",25),Qx(796,"p-mask-format-model"),zl(797,"br"),og()()(),Il(798,"td",20)(799,"code",27),Qx(800,"boolean"),og()(),Il(801,"td",22)(802,"p")(803,"code"),Qx(804,"false"),og()()(),Il(805,"td",23)(806,"em")(807,"strong"),Qx(808,"(opcional)"),og()(),Il(809,"p"),Qx(810,"Indica se o "),Il(811,"code"),Qx(812,"model"),og(),Qx(813," receber\xE1 o valor formatado pela m\xE1scara ou apenas o valor puro (sem formata\xE7\xE3o)."),og()()(),Il(814,"tr",15)(815,"td",16)(816,"div",24)(817,"span",25),Qx(818," p-mask-no-length-validation"),zl(819,"br"),og()()(),Il(820,"td",20)(821,"code",27),Qx(822,"boolean"),og()(),Il(823,"td",22)(824,"p")(825,"code"),Qx(826,"false"),og()()(),Il(827,"td",23)(828,"p"),Qx(829,"Controla como o componente aplica as valida\xE7\xF5es de comprimento m\xEDnimo ("),Il(830,"code"),Qx(831,"minLength"),og(),Qx(832,") e m\xE1ximo ("),Il(833,"code"),Qx(834,"maxLength"),og(),Qx(835,") quando h\xE1 uma m\xE1scara ("),Il(836,"code"),Qx(837,"p-mask"),og(),Qx(838,") definida."),og(),Il(839,"ul")(840,"li"),Qx(841,"Quando "),Il(842,"code"),Qx(843,"true"),og(),Qx(844,", apenas os caracteres alfanum\xE9ricos ser\xE3o contabilizados para a valida\xE7\xE3o dos comprimentos."),og(),Il(845,"li"),Qx(846,"Quando "),Il(847,"code"),Qx(848,"false"),og(),Qx(849,", todos os caracteres, incluindo os especiais da m\xE1scara, ser\xE3o considerados na valida\xE7\xE3o."),og()(),Il(850,"blockquote")(851,"p"),Qx(852,"Esta propriedade \xE9 ignorada quando utilizada em conjunto com "),Il(853,"code"),Qx(854,"p-mask-format-model"),og(),Qx(855,"."),og()(),Il(856,"p"),Qx(857,"Exemplo:"),og(),Il(858,"pre")(859,"code"),Qx(860,`<po-input
  p-mask="999-999"
  p-maxlength="6"
  p-minlength="4"
  p-mask-no-length-validation="true"
></po-input>
`),og()(),Il(861,"ul")(862,"li"),Qx(863,"Entrada: "),Il(864,"code"),Qx(865,"123-456"),og(),Qx(866," \u2192 Valida\xE7\xE3o ser\xE1 aplicada somente aos n\xFAmeros, ignorando o caractere especial "),Il(867,"code"),Qx(868,"-"),og(),Qx(869,"."),og()()()(),Il(870,"tr",15)(871,"td",16)(872,"div",24)(873,"span",25),Qx(874," p-maxlength"),zl(875,"br"),og()()(),Il(876,"td",20)(877,"code",31),Qx(878,"number"),og()(),Il(879,"td",22),Qx(880,"-"),og(),Il(881,"td",23)(882,"em")(883,"strong"),Qx(884,"(opcional)"),og()(),Il(885,"p"),Qx(886,"Indica a quantidade m\xE1xima de caracteres que o campo aceita."),og()()(),Il(887,"tr",15)(888,"td",16)(889,"div",24)(890,"span",25),Qx(891," p-minlength"),zl(892,"br"),og()()(),Il(893,"td",20)(894,"code",31),Qx(895,"number"),og()(),Il(896,"td",22),Qx(897,"-"),og(),Il(898,"td",23)(899,"em")(900,"strong"),Qx(901,"(opcional)"),og()(),Il(902,"p"),Qx(903,"Indica a quantidade m\xEDnima de caracteres que o campo aceita."),og()()(),Il(904,"tr",15)(905,"td",16)(906,"div",24)(907,"span",25),Qx(908," name"),zl(909,"br"),og()()(),Il(910,"td",20)(911,"code",26),Qx(912,"string"),og()(),Il(913,"td",22),Qx(914,"-"),og(),Il(915,"td",23)(916,"p"),Qx(917,"Nome e identificador do campo."),og()()(),Il(918,"tr",15)(919,"td",16)(920,"div",24)(921,"span",25),Qx(922," p-no-autocomplete"),zl(923,"br"),og()()(),Il(924,"td",20)(925,"code",27),Qx(926,"boolean"),og()(),Il(927,"td",22)(928,"p")(929,"code"),Qx(930,"false"),og()()(),Il(931,"td",23)(932,"em")(933,"strong"),Qx(934,"(opcional)"),og()(),Il(935,"p"),Qx(936,"Define a propriedade nativa "),Il(937,"code"),Qx(938,"autocomplete"),og(),Qx(939," do campo como "),Il(940,"code"),Qx(941,"off"),og(),Qx(942,"."),og(),Il(943,"blockquote")(944,"p"),Qx(945,"No componente "),Il(946,"code"),Qx(947,"po-password"),og(),Qx(948," ser\xE1 definido como "),Il(949,"code"),Qx(950,"new-password"),og(),Qx(951,"."),og()(),Il(952,"p"),Qx(953,"Nos componentes "),Il(954,"code"),Qx(955,"po-password"),og(),Qx(956," e "),Il(957,"code"),Qx(958,"po-login"),og(),Qx(959," o valor padr\xE3o ser\xE1 "),Il(960,"code"),Qx(961,"true"),og(),Qx(962,"."),og()()(),Il(963,"tr",15)(964,"td",16)(965,"div",24)(966,"span",25),Qx(967," p-optional"),zl(968,"br"),og()()(),Il(969,"td",20)(970,"code",27),Qx(971,"boolean"),og()(),Il(972,"td",22)(973,"p")(974,"code"),Qx(975,"false"),og()()(),Il(976,"td",23)(977,"em")(978,"strong"),Qx(979,"(opcional)"),og()(),Il(980,"p"),Qx(981,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),og(),Il(982,"blockquote")(983,"p"),Qx(984,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),og()(),Il(985,"ul")(986,"li"),Qx(987,"O campo conter "),Il(988,"code"),Qx(989,"p-required"),og(),Qx(990,";"),og(),Il(991,"li"),Qx(992,"N\xE3o possuir "),Il(993,"code"),Qx(994,"p-help"),og(),Qx(995," e/ou "),Il(996,"code"),Qx(997,"p-label"),og(),Qx(998,"."),og()()()(),Il(999,"tr",15)(1e3,"td",16)(1001,"div",24)(1002,"span",25),Qx(1003,"p-pattern"),zl(1004,"br"),og()()(),Il(1005,"td",20)(1006,"code",26),Qx(1007,"string"),og()(),Il(1008,"td",22),Qx(1009,"-"),og(),Il(1010,"td",23)(1011,"em")(1012,"strong"),Qx(1013,"(opcional)"),og()(),Il(1014,"p"),Qx(1015,`Express\xE3o regular para validar o campo.
Quando o campo possuir uma m\xE1scara `),Il(1016,"code"),Qx(1017,"(p-mask)"),og(),Qx(1018,` ser\xE1 automaticamente validado por ela, por\xE9m
\xE9 poss\xEDvel definir um p-pattern para substituir a valida\xE7\xE3o da m\xE1scara.`),og()()(),Il(1019,"tr",15)(1020,"td",16)(1021,"div",24)(1022,"span",25),Qx(1023," p-placeholder"),zl(1024,"br"),og()()(),Il(1025,"td",20)(1026,"code",26),Qx(1027,"string"),og()(),Il(1028,"td",22)(1029,"p"),Qx(1030,"''"),og()(),Il(1031,"td",23)(1032,"em")(1033,"strong"),Qx(1034,"(opcional)"),og()(),Il(1035,"p"),Qx(1036,"Mensagem que aparecer\xE1 enquanto o campo n\xE3o estiver preenchido."),og()()(),Il(1037,"tr",15)(1038,"td",16)(1039,"div",24)(1040,"span",25),Qx(1041," p-helper"),zl(1042,"br"),og()()(),Il(1043,"td",20)(1044,"code",32),Qx(1045,"PoHelperOptions "),og(),Il(1046,"code",26),Qx(1047," string"),og()(),Il(1048,"td",22),Qx(1049,"-"),og(),Il(1050,"td",23)(1051,"em")(1052,"strong"),Qx(1053,"(opcional)"),og()(),Il(1054,"p"),Qx(1055,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label quando a propriedade "),Il(1056,"code"),Qx(1057,"p-label"),og(),Qx(1058," for definida, ou, ao lado do componente na aus\xEAncia da propriedade "),Il(1059,"code"),Qx(1060,"p-label"),og(),Qx(1061,"."),og(),Il(1062,"blockquote")(1063,"p"),Qx(1064,"Para mais informa\xE7\xF5es acesse: "),Il(1065,"a",33),Qx(1066,"https://po-ui.io/documentation/po-helper"),og(),Qx(1067,"."),og()(),Il(1068,"blockquote")(1069,"p"),Qx(1070,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),Il(1071,"code"),Qx(1072,"p-additional-help-tooltip"),og(),Qx(1073," e "),Il(1074,"code"),Qx(1075,"p-additional-help"),og(),Qx(1076,") ser\xE1 ignorado."),og()()()(),Il(1077,"tr",15)(1078,"td",16)(1079,"div",24)(1080,"span",25),Qx(1081,"p-readonly"),zl(1082,"br"),og()()(),Il(1083,"td",20)(1084,"code",27),Qx(1085,"boolean"),og()(),Il(1086,"td",22),Qx(1087,"-"),og(),Il(1088,"td",23)(1089,"em")(1090,"strong"),Qx(1091,"(opcional)"),og()(),Il(1092,"p"),Qx(1093,"Indica que o campo ser\xE1 somente leitura."),og()()(),Il(1094,"tr",15)(1095,"td",16)(1096,"div",24)(1097,"span",25),Qx(1098,"p-required"),zl(1099,"br"),og()()(),Il(1100,"td",20)(1101,"code",27),Qx(1102,"boolean"),og()(),Il(1103,"td",22)(1104,"p")(1105,"code"),Qx(1106,"false"),og()()(),Il(1107,"td",23)(1108,"em")(1109,"strong"),Qx(1110,"(opcional)"),og()(),Il(1111,"p"),Qx(1112,"Define que o campo ser\xE1 obrigat\xF3rio."),og(),Il(1113,"blockquote")(1114,"p"),Qx(1115,"Esta propriedade \xE9 desconsiderada quando o input est\xE1 desabilitado "),Il(1116,"code"),Qx(1117,"(p-disabled)"),og(),Qx(1118,"."),og()()()(),Il(1119,"tr",15)(1120,"td",16)(1121,"div",24)(1122,"span",25),Qx(1123," p-required-field-error-message"),zl(1124,"br"),og()()(),Il(1125,"td",20)(1126,"code",27),Qx(1127,"boolean"),og()(),Il(1128,"td",22)(1129,"p")(1130,"code"),Qx(1131,"false"),og()()(),Il(1132,"td",23)(1133,"em")(1134,"strong"),Qx(1135,"(opcional)"),og()(),Il(1136,"p"),Qx(1137,"Exibe a mensagem setada na propriedade "),Il(1138,"code"),Qx(1139,"p-error-pattern"),og(),Qx(1140," se o campo estiver vazio e for requerido."),og(),Il(1141,"blockquote")(1142,"p"),Qx(1143,"Necess\xE1rio que a propriedade "),Il(1144,"code"),Qx(1145,"p-required"),og(),Qx(1146," esteja habilitada."),og()()()(),Il(1147,"tr",15)(1148,"td",16)(1149,"div",24)(1150,"span",25),Qx(1151," p-show-required"),zl(1152,"br"),og()()(),Il(1153,"td",20)(1154,"code",27),Qx(1155,"boolean"),og()(),Il(1156,"td",22),Qx(1157,"-"),og(),Il(1158,"td",23)(1159,"p"),Qx(1160,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),og(),Il(1161,"blockquote")(1162,"p"),Qx(1163,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),og()(),Il(1164,"ul")(1165,"li"),Qx(1166,"N\xE3o possuir "),Il(1167,"code"),Qx(1168,"p-help"),og(),Qx(1169," e/ou "),Il(1170,"code"),Qx(1171,"p-label"),og(),Qx(1172,"."),og()()()(),Il(1173,"tr",15)(1174,"td",16)(1175,"div",24)(1176,"span",25),Qx(1177," p-size"),zl(1178,"br"),og()()(),Il(1179,"td",20)(1180,"code",26),Qx(1181,"string"),og()(),Il(1182,"td",22)(1183,"p")(1184,"code"),Qx(1185,"medium"),og()()(),Il(1186,"td",23)(1187,"em")(1188,"strong"),Qx(1189,"(opcional)"),og()(),Il(1190,"p"),Qx(1191,"Define o tamanho do componente:"),og(),Il(1192,"ul")(1193,"li")(1194,"code"),Qx(1195,"small"),og(),Qx(1196,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),og(),Il(1197,"li")(1198,"code"),Qx(1199,"medium"),og(),Qx(1200,": altura do input como 44px."),og()(),Il(1201,"blockquote")(1202,"p"),Qx(1203,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Il(1204,"code"),Qx(1205,"medium"),og(),Qx(1206,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Il(1207,"a",34),Qx(1208,"po-theme"),og(),Qx(1209,"."),og()()()(),Il(1210,"tr",15)(1211,"td",16)(1212,"div",24)(1213,"span",25),Qx(1214," p-upper-case"),zl(1215,"br"),og()()(),Il(1216,"td",20)(1217,"code",27),Qx(1218,"boolean"),og()(),Il(1219,"td",22),Qx(1220,"-"),og(),Il(1221,"td",23)(1222,"p"),Qx(1223,"Converte o conte\xFAdo do campo em mai\xFAsulo automaticamente."),og()()()(),Il(1224,"h3",11),Qx(1225,"M\xE9todos"),og(),Il(1226,"table",35)(1227,"tr",15)(1228,"th",36)(1229,"div",24)(1230,"h4")(1231,"span",25),Qx(1232," showAdditionalHelp "),og()()()()(),Il(1233,"tr",23)(1234,"td",23)(1235,"p"),Qx(1236,"M\xE9todo que exibe "),Il(1237,"code"),Qx(1238,"p-helper"),og(),Qx(1239," ou executa a a\xE7\xE3o definida em "),Il(1240,"code"),Qx(1241,"p-helper{eventOnClick}"),og(),Qx(1242," ou em "),Il(1243,"code"),Qx(1244,"p-additionalHelp"),og(),Qx(1245,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Il(1246,"code"),Qx(1247,"p-keydown"),og(),Qx(1248,"."),og(),Il(1249,"blockquote")(1250,"p"),Qx(1251,"Exibe ou oculta o conte\xFAdo do componente "),Il(1252,"code"),Qx(1253,"po-helper"),og(),Qx(1254," quando o componente estiver com foco."),og()(),Il(1255,"pre")(1256,"code"),Qx(1257,`// Exemplo com p-label e p-helper
<po-nome-component
 #component
 ...
 p-label="Label do componente"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, component)"
></po-nome-component>
`),og()(),Il(1258,"pre")(1259,"code"),Qx(1260,`...
onKeyDown(event: KeyboardEvent, inp: PoNomeDoComponente): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),og()()()()(),zl(1261,"br"),Il(1262,"table",35)(1263,"tr",15)(1264,"th",36)(1265,"div",24)(1266,"h4")(1267,"span",25),Qx(1268," focus "),og()()()()(),Il(1269,"tr",23)(1270,"td",23)(1271,"p"),Qx(1272,"Fun\xE7\xE3o que atribui foco ao componente."),og(),Il(1273,"p"),Qx(1274,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),og(),Il(1275,"pre")(1276,"code"),Qx(1277,`import { PoNomeDoComponenteComponent } from '@po-ui/ng-components';

...

@ViewChild(PoNomeDoComponenteComponent, { static: true }) nomeDoComponente: PoNomeDoComponenteComponent;

focusComponent() {
  this.nomeDoComponente.focus();
}
`),og()()()()(),zl(1278,"br"),Il(1279,"h3"),Qx(1280,"Interfaces"),og(),Il(1281,"h4",37)(1282,"code",5),Qx(1283,"ErrorAsyncProperties"),og()(),Il(1284,"div",2)(1285,"p"),Qx(1286,"Interface para realizar uma valida\xE7\xE3o ass\xEDncrona no componente."),og()(),Il(1287,"h4",11),Qx(1288,"Propriedades"),og(),Il(1289,"table",12)(1290,"tr",13)(1291,"th",14),Qx(1292,"Nome"),og(),Il(1293,"th",14),Qx(1294,"Tipo"),og(),Il(1295,"th",14),Qx(1296,"Descri\xE7\xE3o"),og()(),Il(1297,"tr",15)(1298,"td",16)(1299,"div",24)(1300,"span",25),Qx(1301," errorAsync"),zl(1302,"br"),og()()(),Il(1303,"td",20)(1304,"code",38),Qx(1305,"(value) => Observable<boolean>"),og()(),Il(1306,"td",23)(1307,"p"),Qx(1308,`Fun\xE7\xE3o obrigat\xF3ria executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),Il(1309,"code"),Qx(1310,"change"),og(),Qx(1311," ou "),Il(1312,"code"),Qx(1313,"change-model"),og(),Qx(1314,", dependendo do valor da propriedade "),Il(1315,"code"),Qx(1316,"triggerMode"),og(),Qx(1317,"."),og()()(),Il(1318,"tr",15)(1319,"td",16)(1320,"div",24)(1321,"span",25),Qx(1322," triggerMode"),zl(1323,"br"),og()()(),Il(1324,"td",20)(1325,"code",39),Qx(1326,"'change' "),og(),Il(1327,"code",40),Qx(1328," 'changeModel'"),og()(),Il(1329,"td",23)(1330,"em")(1331,"strong"),Qx(1332,"(opcional)"),og()(),Il(1333,"p"),Qx(1334,"Controla se o m\xE9todo ser\xE1 executado no disparo do output "),Il(1335,"code"),Qx(1336,"change"),og(),Qx(1337," ou "),Il(1338,"code"),Qx(1339,"change-model"),og(),Qx(1340,"."),og()()()()());},dependencies:[Ka],encapsulation:2})}return a})();var se=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(d,l){this.route=d,this.router=l;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let l=d.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:"merge"}),this.activeTab=d;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(l){return new(l||a)(C(Xn),C(En))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Email",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,i){l&1&&(Il(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return i.changeTab("doc")}),zl(3,"sample-po-email-doc"),og(),Il(4,"po-tab",3),ft("p-click",function(){return i.changeTab("web")}),zl(5,"sample-po-email-basic-view")(6,"sample-po-email-labs-view")(7,"sample-po-email-newsletter-view"),og()()()),l&2&&(nw("p-actions",i.actions),Lp(2),nw("p-active",i.activeTab==="doc"),Lp(2),nw("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[cNe,qme,Yme,ae,re,de,pe],encapsulation:2})}return a})();var we=[{path:"",component:se}],ce=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=fe({type:a});static \u0275inj=ue({imports:[uL.forChild(we),uL]})}return a})();var Ze=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=fe({type:a});static \u0275inj=ue({imports:[sr,ce]})}return a})();export{Ze as DocPoEmailModule};