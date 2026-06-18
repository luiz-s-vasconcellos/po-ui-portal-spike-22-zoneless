import {f as fe,u as ue$1,s as sr,a as uL,C,c3 as Xn,E as En,U as Un,b as f,c5 as Vde,cZ as Uhe,J as zl,an as DO,aH as Ka,b8 as qme,b9 as Yme,H as Il,q as Qx,R as og,a1 as ft,A as Lp,ar as Ux,au as dg,T as nw,bs as uN,aX as G9,aF as $9,aY as z9,aG as mk,aZ as hk,b0 as Qt,b1 as mv,c4 as C3,b4 as O3,cp as Hhe,c8 as Dde,c9 as Yhe,aB as Dx,aM as ww,aN as QA,aO as Ew,aP as e0,bd as Ax,X as we,a3 as cNe,aD as Xy,aT as eN,aE as Qy}from'./main-QSTLMRDK.js';var oe=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-password-basic"]],standalone:false,decls:1,vars:0,consts:[["name","password","p-label","PO Password"]],template:function(l,i){l&1&&zl(0,"po-password",0);},dependencies:[Uhe],encapsulation:2,changeDetection:1})}return a})();var Se=a=>({"docs-sample-code-tabs":a}),re=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-password-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Password Basic"),og(),Il(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-password-basic/sample-po-password-basic.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-password name="password" p-label="PO Password"> </po-password>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-password-basic/sample-po-password-basic.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-password-basic',
  templateUrl: './sample-po-password-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPasswordBasicComponent {}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-password-basic"),og(),zl(23,"hr")),l&2&&(Lp(5),Ux("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,Se,i.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,oe],encapsulation:2})}return a})();var le=(()=>{class a{helperText;errorPattern;event;help;label;mask;maxlength;minlength;password;pattern;placeholder;properties;size;propertiesOptions=[{value:"clean",label:"Clean"},{value:"disabled",label:"Disabled"},{value:"errorLimit",label:"Limit Error Message"},{value:"hidepasswordpeek",label:"Hide Password Peek"},{value:"labelTextWrap",label:"Label Text Wrap"},{value:"compactLabel",label:"Compact Label"},{value:"loading",label:"Loading"},{value:"noAutocomplete",label:"No Autocomplete"},{value:"optional",label:"Optional"},{value:"readonly",label:"Read Only"},{value:"required",label:"Required"},{value:"requiredFieldErrorMessage",label:"Required Field Error Message"},{value:"showRequired",label:"Show Required"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore();}changeEvent(p){this.event=p;}restore(){this.helperText="",this.errorPattern=void 0,this.event=void 0,this.help=void 0,this.label=void 0,this.maxlength=void 0,this.minlength=void 0,this.password=void 0,this.pattern="",this.placeholder="",this.properties=[],this.size="medium";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-password-labs"]],standalone:false,decls:20,vars:37,consts:[["f","ngForm"],["name","password",3,"ngModelChange","p-blur","p-change","p-change-model","p-enter","p-keydown","ngModel","p-helper","p-clean","p-disabled","p-error-pattern","p-help","p-hide-password-peek","p-label","p-loading","p-maxlength","p-minlength","p-no-autocomplete","p-optional","p-pattern","p-placeholder","p-readonly","p-required","p-required-field-error-message","p-show-required","p-size","p-error-limit","p-label-text-wrap","p-compact-label"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","errorPattern","p-clean","","p-label","Error Pattern",1,"po-md-6",3,"ngModelChange","ngModel"],["name","pattern","p-clean","","p-help","Ex.: '[a-zA]{5}[Z0-9]{3}'","p-label","Pattern (Regex)",1,"po-md-6",3,"ngModelChange","ngModel"],["name","minlength","p-clean","","p-label","Min Length",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","maxlength","p-clean","","p-label","Max Length",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(l,i){if(l&1){let m=Dx();Il(0,"po-password",1),ww("ngModelChange",function(r){return Xy(m),eN(i.password,r)||(i.password=r),Qy(r)}),ft("p-blur",function(){return i.changeEvent("p-blur")})("p-change",function(){return i.changeEvent("p-change")})("p-change-model",function(){return i.changeEvent("p-change-model")})("p-enter",function(){return i.changeEvent("p-enter")})("p-keydown",function(){return i.changeEvent("p-keydown")}),og(),QA(),zl(1,"po-divider"),Il(2,"div",2),zl(3,"po-info",3)(4,"po-info",4),og(),zl(5,"po-divider"),Il(6,"form",null,0)(8,"po-input",5),ww("ngModelChange",function(r){return Xy(m),eN(i.label,r)||(i.label=r),Qy(r)}),og(),QA(),Il(9,"po-input",6),ww("ngModelChange",function(r){return Xy(m),eN(i.help,r)||(i.help=r),Qy(r)}),og(),QA(),Il(10,"po-input",7),ww("ngModelChange",function(r){return Xy(m),eN(i.helperText,r)||(i.helperText=r),Qy(r)}),og(),QA(),Il(11,"po-input",8),ww("ngModelChange",function(r){return Xy(m),eN(i.placeholder,r)||(i.placeholder=r),Qy(r)}),og(),QA(),Il(12,"po-input",9),ww("ngModelChange",function(r){return Xy(m),eN(i.errorPattern,r)||(i.errorPattern=r),Qy(r)}),og(),QA(),Il(13,"po-input",10),ww("ngModelChange",function(r){return Xy(m),eN(i.pattern,r)||(i.pattern=r),Qy(r)}),og(),QA(),Il(14,"po-number",11),ww("ngModelChange",function(r){return Xy(m),eN(i.minlength,r)||(i.minlength=r),Qy(r)}),og(),QA(),Il(15,"po-number",12),ww("ngModelChange",function(r){return Xy(m),eN(i.maxlength,r)||(i.maxlength=r),Qy(r)}),og(),QA(),Il(16,"po-checkbox-group",13),ww("ngModelChange",function(r){return Xy(m),eN(i.properties,r)||(i.properties=r),Qy(r)}),og(),QA(),Il(17,"po-radio-group",14),ww("ngModelChange",function(r){return Xy(m),eN(i.size,r)||(i.size=r),Qy(r)}),og(),QA(),Il(18,"div",2)(19,"po-button",15),ft("p-click",function(){return i.restore()}),og()()();}l&2&&(Ew("ngModel",i.password),nw("p-helper",i.helperText)("p-clean",i.properties.includes("clean"))("p-disabled",i.properties.includes("disabled"))("p-error-pattern",i.errorPattern)("p-help",i.help)("p-hide-password-peek",i.properties.includes("hidepasswordpeek"))("p-label",i.label)("p-loading",i.properties==null?null:i.properties.includes("loading"))("p-maxlength",i.maxlength)("p-minlength",i.minlength)("p-no-autocomplete",i.properties==null?null:i.properties.includes("noAutocomplete"))("p-optional",i.properties.includes("optional"))("p-pattern",i.pattern)("p-placeholder",i.placeholder)("p-readonly",i.properties.includes("readonly"))("p-required",i.properties.includes("required"))("p-required-field-error-message",i.properties.includes("requiredFieldErrorMessage"))("p-show-required",i.properties.includes("showRequired"))("p-size",i.size)("p-error-limit",i.properties==null?null:i.properties.includes("errorLimit"))("p-label-text-wrap",i.properties==null?null:i.properties.includes("labelTextWrap"))("p-compact-label",i.properties==null?null:i.properties.includes("compactLabel")),e0(),Lp(3),nw("p-value",i.password),Lp(),nw("p-value",i.event),Lp(4),Ew("ngModel",i.label),e0(),Lp(),Ew("ngModel",i.help),e0(),Lp(),Ew("ngModel",i.helperText),e0(),Lp(),Ew("ngModel",i.placeholder),e0(),Lp(),Ew("ngModel",i.errorPattern),e0(),Lp(),Ew("ngModel",i.pattern),e0(),Lp(),Ew("ngModel",i.minlength),e0(),Lp(),Ew("ngModel",i.maxlength),e0(),Lp(),Ew("ngModel",i.properties),nw("p-options",i.propertiesOptions),e0(),Lp(),Ew("ngModel",i.size),nw("p-options",i.sizeOptions),e0());},dependencies:[G9,$9,z9,mk,hk,Qt,mv,C3,O3,Hhe,Uhe,Dde,Yhe],encapsulation:2,changeDetection:1})}return a})();var he=a=>({"docs-sample-code-tabs":a}),de=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-password-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Password Labs"),og(),Il(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-password-labs/sample-po-password-labs.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-password
  name="password"
  [(ngModel)]="password"
  [p-helper]="helperText"
  [p-clean]="properties.includes('clean')"
  [p-disabled]="properties.includes('disabled')"
  [p-error-pattern]="errorPattern"
  [p-help]="help"
  [p-hide-password-peek]="properties.includes('hidepasswordpeek')"
  [p-label]="label"
  [p-loading]="$safeNavigationMigration(properties?.includes('loading'))"
  [p-maxlength]="maxlength"
  [p-minlength]="minlength"
  [p-no-autocomplete]="$safeNavigationMigration(properties?.includes('noAutocomplete'))"
  [p-optional]="properties.includes('optional')"
  [p-pattern]="pattern"
  [p-placeholder]="placeholder"
  [p-readonly]="properties.includes('readonly')"
  [p-required]="properties.includes('required')"
  [p-required-field-error-message]="properties.includes('requiredFieldErrorMessage')"
  [p-show-required]="properties.includes('showRequired')"
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
</po-password>

<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="password"> </po-info>

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
    class="po-md-6"
    name="pattern"
    [(ngModel)]="pattern"
    p-clean
    p-help="Ex.: '[a-zA]{5}[Z0-9]{3}'"
    p-label="Pattern (Regex)"
  >
  </po-input>

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
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-password-labs/sample-po-password-labs.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { PoCheckboxGroupOption, PoRadioGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-password-labs',
  templateUrl: './sample-po-password-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPasswordLabsComponent implements OnInit {
  helperText: string;
  errorPattern: string;
  event: string;
  help: string;
  label: string;
  mask: string;
  maxlength: number;
  minlength: number;
  password: string;
  pattern: string;
  placeholder: string;
  properties: Array<string>;
  size: string;

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'clean', label: 'Clean' },
    { value: 'disabled', label: 'Disabled' },
    { value: 'errorLimit', label: 'Limit Error Message' },
    { value: 'hidepasswordpeek', label: 'Hide Password Peek' },
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
    this.errorPattern = undefined;
    this.event = undefined;
    this.help = undefined;
    this.label = undefined;
    this.maxlength = undefined;
    this.minlength = undefined;
    this.password = undefined;
    this.pattern = '';
    this.placeholder = '';
    this.properties = [];
    this.size = 'medium';
  }
}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-password-labs"),og(),zl(23,"hr")),l&2&&(Lp(5),Ux("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,he,i.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,le],encapsulation:2})}return a})();var pe=(()=>{class a{poAlert=f(Vde);confirmNewPassword;currentPassword;errorPattern;help="Initial password = 123456";newPassword;password="123456";setPassword(){this.confirmNewPassword===this.newPassword?(this.password=this.newPassword,this.help=`Actual password = ${this.password}`,this.currentPassword=void 0,this.newPassword=void 0,this.confirmNewPassword=void 0,this.poAlert.alert({title:"Password Reset",message:"Password saved successfully",ok:()=>this.reset()})):this.poAlert.alert({title:"Password Error",message:"Your (new passsword) is different of (confirm new password)",ok:()=>this.reset()});}reset(){this.newPassword=void 0,this.confirmNewPassword=void 0;}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-password-reset"]],standalone:false,features:[we([Vde])],decls:7,vars:7,consts:[["passwordForm","ngForm"],["name","currentPassword","p-clean","","p-error-pattern","invalid password","p-label","Current Password","p-mask","999999","p-required","",1,"po-sm-12",3,"ngModelChange","ngModel","p-help"],["name","newPassword","p-clean","","p-error-pattern","invalid password","p-label","New password","p-mask","999999","p-minlength","6","p-required","",1,"po-sm-12",3,"ngModelChange","ngModel","p-disabled"],["name","confirmNewPassword","p-clean","","p-error-pattern","invalid password","p-label","Confirm New Password","p-mask","999999","p-minlength","6","p-required","",1,"po-sm-12",3,"ngModelChange","ngModel","p-disabled"],[1,"po-row"],["p-label","Save",1,"po-md-4",3,"p-click","p-disabled"]],template:function(l,i){if(l&1){let m=Dx();Il(0,"form",null,0)(2,"po-password",1),ww("ngModelChange",function(r){return Xy(m),eN(i.currentPassword,r)||(i.currentPassword=r),Qy(r)}),og(),QA(),Il(3,"po-password",2),ww("ngModelChange",function(r){return Xy(m),eN(i.newPassword,r)||(i.newPassword=r),Qy(r)}),og(),QA(),Il(4,"po-password",3),ww("ngModelChange",function(r){return Xy(m),eN(i.confirmNewPassword,r)||(i.confirmNewPassword=r),Qy(r)}),og(),QA(),Il(5,"div",4)(6,"po-button",5),ft("p-click",function(){return i.setPassword()}),og()()();}if(l&2){let m=Ax(1);Lp(2),Ew("ngModel",i.currentPassword),nw("p-help",i.help),e0(),Lp(),Ew("ngModel",i.newPassword),nw("p-disabled",i.currentPassword!==i.password),e0(),Lp(),Ew("ngModel",i.confirmNewPassword),nw("p-disabled",i.currentPassword!==i.password),e0(),Lp(2),nw("p-disabled",m.invalid);}},dependencies:[G9,$9,z9,mk,hk,Qt,Uhe],encapsulation:2,changeDetection:1})}return a})();var ve=a=>({"docs-sample-code-tabs":a}),me=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-password-reset-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Password - Reset"),og(),Il(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-password-reset/sample-po-password-reset.component.html"),og(),Il(13,"pre",7),Qx(14,`<form #passwordForm="ngForm">
  <po-password
    class="po-sm-12"
    name="currentPassword"
    [(ngModel)]="currentPassword"
    p-clean
    p-error-pattern="invalid password"
    p-label="Current Password"
    p-mask="999999"
    p-required
    [p-help]="help"
  >
  </po-password>

  <po-password
    class="po-sm-12"
    name="newPassword"
    [(ngModel)]="newPassword"
    p-clean
    p-error-pattern="invalid password"
    p-label="New password"
    p-mask="999999"
    p-minlength="6"
    p-required
    [p-disabled]="currentPassword !== password"
  >
  </po-password>

  <po-password
    class="po-sm-12"
    name="confirmNewPassword"
    [(ngModel)]="confirmNewPassword"
    p-clean
    p-error-pattern="invalid password"
    p-label="Confirm New Password"
    p-mask="999999"
    p-minlength="6"
    p-required
    [p-disabled]="currentPassword !== password"
  >
  </po-password>

  <div class="po-row">
    <po-button class="po-md-4" p-label="Save" [p-disabled]="passwordForm.invalid" (p-click)="setPassword()">
    </po-button>
  </div>
</form>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-password-reset/sample-po-password-reset.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

import { PoDialogService } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-password-reset',
  templateUrl: './sample-po-password-reset.component.html',
  providers: [PoDialogService],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPasswordResetComponent {
  private poAlert = inject(PoDialogService);

  confirmNewPassword: string;
  currentPassword: string;
  errorPattern: string;
  help: string = 'Initial password = 123456';
  newPassword: string;
  password: string = '123456';

  setPassword() {
    if (this.confirmNewPassword === this.newPassword) {
      this.password = this.newPassword;
      this.help = \`Actual password = \${this.password}\`;
      this.currentPassword = undefined;
      this.newPassword = undefined;
      this.confirmNewPassword = undefined;

      this.poAlert.alert({
        title: 'Password Reset',
        message: 'Password saved successfully',
        ok: () => this.reset()
      });
    } else {
      this.poAlert.alert({
        title: 'Password Error',
        message: 'Your (new passsword) is different of (confirm new password)',
        ok: () => this.reset()
      });
    }
  }

  reset() {
    this.newPassword = undefined;
    this.confirmNewPassword = undefined;
  }
}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-password-reset"),og(),zl(23,"hr")),l&2&&(Lp(5),Ux("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,ve,i.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,pe],encapsulation:2})}return a})();var se=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-password-doc"]],standalone:false,decls:1360,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/grid-system"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","ErrorAsyncProperties"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-helper"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","(value)","=>","Observable<boolean>"],["pan","",1,"docs-api-property-type","'change'"],["pan","",1,"docs-api-property-type","'changeModel'"]],template:function(l,i){l&1&&(Il(0,"div",0)(1,"p",1)(2,"code"),Qx(3,"import { PoFieldModule } from '@po-ui/ng-components';"),og()(),Il(4,"div",2)(5,"p"),Qx(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),og(),Il(7,"blockquote")(8,"p"),Qx(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),Il(10,"code"),Qx(11,"FormsModule"),og(),Qx(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Il(13,"code"),Qx(14,"ReactiveFormsModule"),og(),Qx(15,", ambos nativos do Angular."),og()()(),Il(16,"h3",3),Qx(17,"Componente"),og(),Il(18,"h4",4)(19,"code",5),Qx(20,"PoPasswordComponent"),og()(),Il(21,"div",2)(22,"p"),Qx(23,`Este \xE9 um componente baseado em input, com v\xE1rias propriedades do input nativo e outras
propriedades extras como: m\xE1scara, pattern, mensagem de erro e etc.
Voc\xEA deve informar a vari\xE1vel que cont\xE9m o valor como [(ngModel)]="variavel", para que o
input receba o valor da vari\xE1vel e para que ela receba as altera\xE7\xF5es do valor (two-way-databinding).
A propriedade name \xE9 obrigat\xF3ria para que o formul\xE1rio e o model funcionem corretamente.`),og(),Il(24,"p"),Qx(25,"Importante:"),og(),Il(26,"ul")(27,"li"),Qx(28,`Caso o input tenha um [(ngModel)] sem o atributo name, ocorrer\xE1 um erro de angular.
Ent\xE3o voc\xEA precisa informar o atributo name ou o atributo [ngModelOptions]="{standalone: true}".
Exemplo: [(ngModel)]="pessoa.nome" [ngModelOptions]="{standalone: true}".`),og()(),Il(29,"h4"),Qx(30,"Tokens customiz\xE1veis"),og(),Il(31,"p"),Qx(32,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS): "),zl(33,"br"),Qx(34,`
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),Il(35,"code"),Qx(36,".po-input"),og()(),Il(37,"blockquote")(38,"p"),Qx(39,"Para correto alinhamento \xE9 recomendado o uso das classes de espa\xE7amento do "),Il(40,"a",6),Qx(41,"Grid System"),og(),Qx(42,"."),og()(),Il(43,"blockquote")(44,"p"),Qx(45,"Para maiores informa\xE7\xF5es, acesse o guia "),Il(46,"a",7),Qx(47,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),Qx(48,"."),og()(),Il(49,"table")(50,"thead")(51,"tr")(52,"th"),Qx(53,"Propriedade"),og(),Il(54,"th"),Qx(55,"Descri\xE7\xE3o"),og(),Il(56,"th"),Qx(57,"Valor Padr\xE3o"),og()()(),Il(58,"tbody")(59,"tr")(60,"td")(61,"strong"),Qx(62,"Default Values"),og()(),zl(63,"td")(64,"td"),og(),Il(65,"tr")(66,"td")(67,"code"),Qx(68,"--font-family"),og()(),Il(69,"td"),Qx(70,"Fam\xEDlia tipogr\xE1fica usada"),og(),Il(71,"td")(72,"code"),Qx(73,"var(--font-family-theme)"),og()()(),Il(74,"tr")(75,"td")(76,"code"),Qx(77,"--font-size"),og()(),Il(78,"td"),Qx(79,"Tamanho da fonte"),og(),Il(80,"td")(81,"code"),Qx(82,"var(--font-size-default)"),og()()(),Il(83,"tr")(84,"td")(85,"code"),Qx(86,"--text-color-placeholder"),og()(),Il(87,"td"),Qx(88,"Cor do texto placeholder"),og(),Il(89,"td")(90,"code"),Qx(91,"var(--color-neutral-light-30)"),og()()(),Il(92,"tr")(93,"td")(94,"code"),Qx(95,"--color"),og()(),Il(96,"td"),Qx(97,"Cor pincipal do input"),og(),Il(98,"td")(99,"code"),Qx(100,"var(--color-neutral-dark-70)"),og()()(),Il(101,"tr")(102,"td")(103,"code"),Qx(104,"--background"),og()(),Il(105,"td"),Qx(106,"Cor de background"),og(),Il(107,"td")(108,"code"),Qx(109,"var(--color-neutral-light-05)"),og()()(),Il(110,"tr")(111,"td")(112,"code"),Qx(113,"--padding"),og()(),Il(114,"td"),Qx(115,"Preenchimento"),og(),Il(116,"td")(117,"code"),Qx(118,"0 0.5rem"),og()()(),Il(119,"tr")(120,"td")(121,"code"),Qx(122,"--text-color"),og()(),Il(123,"td"),Qx(124,"Cor do texto"),og(),Il(125,"td")(126,"code"),Qx(127,"var(--color-neutral-dark-90)"),og()()(),Il(128,"tr")(129,"td")(130,"code"),Qx(131,"--field-container-title-justify"),og()(),Il(132,"td"),Qx(133,"Alinhamento horizontal do t\xEDtulo ("),Il(134,"code"),Qx(135,"justify-content"),og(),Qx(136,")"),og(),Il(137,"td")(138,"code"),Qx(139,"space-between"),og()()(),Il(140,"tr")(141,"td")(142,"code"),Qx(143,"--field-container-title-flex"),og()(),Il(144,"td"),Qx(145,"Flex do t\xEDtulo ("),Il(146,"code"),Qx(147,"flex"),og(),Qx(148,")"),og(),Il(149,"td")(150,"code"),Qx(151,"1 auto"),og()()(),Il(152,"tr")(153,"td")(154,"strong"),Qx(155,"Hover"),og()(),zl(156,"td")(157,"td"),og(),Il(158,"tr")(159,"td")(160,"code"),Qx(161,"--color-hover"),og()(),Il(162,"td"),Qx(163,"Cor principal no estado hover"),og(),Il(164,"td")(165,"code"),Qx(166,"var(--color-brand-01-dark)"),og()()(),Il(167,"tr")(168,"td")(169,"code"),Qx(170,"--background-hover"),og()(),Il(171,"td"),Qx(172,"Cor de background no estado hover"),og(),Il(173,"td")(174,"code"),Qx(175,"var(--color-brand-01-lightest)"),og()()(),Il(176,"tr")(177,"td")(178,"strong"),Qx(179,"Focused"),og()(),zl(180,"td")(181,"td"),og(),Il(182,"tr")(183,"td")(184,"code"),Qx(185,"--color-focused"),og()(),Il(186,"td"),Qx(187,"Cor principal no estado de focus"),og(),Il(188,"td")(189,"code"),Qx(190,"var(--color-action-default)"),og()()(),Il(191,"tr")(192,"td")(193,"code"),Qx(194,"--outline-color-focused"),og()(),Il(195,"td"),Qx(196,"Cor do outline do estado de focus"),og(),Il(197,"td")(198,"code"),Qx(199,"var(--color-action-focus)"),og()()(),Il(200,"tr")(201,"td")(202,"strong"),Qx(203,"Disabled"),og()(),zl(204,"td")(205,"td"),og(),Il(206,"tr")(207,"td")(208,"code"),Qx(209,"--color-disabled"),og()(),Il(210,"td"),Qx(211,"Cor principal no estado disabled"),og(),Il(212,"td")(213,"code"),Qx(214,"var(--color-neutral-light-30)"),og()()(),Il(215,"tr")(216,"td")(217,"code"),Qx(218,"--background-disabled"),og()(),Il(219,"td"),Qx(220,"Cor de background no estado disabled"),og(),Il(221,"td")(222,"code"),Qx(223,"var(--color-neutral-light-20)"),og()()(),Il(224,"tr")(225,"td")(226,"code"),Qx(227,"--text-color-disabled"),og()(),Il(228,"td"),Qx(229,"Cor do texto no estado disabled"),og(),Il(230,"td")(231,"code"),Qx(232,"var(--color-neutral-dark-70)"),og()()()()(),Il(233,"p"),zl(234,"br"),Qx(235," O "),Il(236,"code"),Qx(237,"po-password"),og(),Qx(238," \xE9 um input espec\xEDfico para senhas. J\xE1 possui tipo, estilo e \xEDcone predefinidos."),og()(),Il(239,"div",8)(240,"h4",9),Qx(241,"Seletor"),og(),Il(242,"pre",10),Qx(243,`<po-password
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
    p-hide-password-peek="boolean"
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
</po-password>
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
Para exibir a mensagem com o campo vazio, utilize a propriedade `),Il(625,"code"),Qx(626,"p-required-field-error-message"),og(),Qx(627," em conjunto."),og()()()(),Il(628,"tr",15)(629,"td",16)(630,"div",24)(631,"span",25),Qx(632," p-help"),zl(633,"br"),og()()(),Il(634,"td",20)(635,"code",26),Qx(636,"string"),og()(),Il(637,"td",22),Qx(638,"-"),og(),Il(639,"td",23)(640,"em")(641,"strong"),Qx(642,"(opcional)"),og()(),Il(643,"p"),Qx(644,"Texto de apoio do campo."),og()()(),Il(645,"tr",15)(646,"td",16)(647,"div",24)(648,"span",25),Qx(649," p-hide-password-peek"),zl(650,"br"),og()()(),Il(651,"td",20)(652,"code",27),Qx(653,"boolean"),og()(),Il(654,"td",22)(655,"p")(656,"code"),Qx(657,"false"),og()()(),Il(658,"td",23)(659,"em")(660,"strong"),Qx(661,"(opcional)"),og()(),Il(662,"p"),Qx(663,"Permite esconder a fun\xE7\xE3o de espiar a senha digitada."),og()()(),Il(664,"tr",15)(665,"td",16)(666,"div",24)(667,"span",25),Qx(668," p-icon"),zl(669,"br"),og()()(),Il(670,"td",20)(671,"code",26),Qx(672,"string "),og(),Il(673,"code",29),Qx(674," TemplateRef<void>"),og()(),Il(675,"td",22),Qx(676,"-"),og(),Il(677,"td",23)(678,"em")(679,"strong"),Qx(680,"(opcional)"),og()(),Il(681,"p"),Qx(682,"Define o \xEDcone que ser\xE1 exibido no in\xEDcio do campo."),og(),Il(683,"p"),Qx(684,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),Il(685,"a",30),Qx(686,"Biblioteca de \xEDcones"),og(),Qx(687,". conforme exemplo abaixo:"),og(),Il(688,"pre")(689,"code"),Qx(690,`<po-input p-icon="an an-user" p-label="PO input"></po-input>
`),og()(),Il(691,"p"),Qx(692,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),Il(693,"em"),Qx(694,"Font Awesome"),og(),Qx(695,", da seguinte forma:"),og(),Il(696,"pre")(697,"code"),Qx(698,`<po-input p-icon="fa fa-podcast" p-label="PO input"></po-input>
`),og()(),Il(699,"p"),Qx(700,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),Il(701,"code"),Qx(702,"TemplateRef"),og(),Qx(703,", conforme exemplo abaixo:"),og(),Il(704,"pre")(705,"code"),Qx(706,`<po-input [p-icon]="template" p-label="input template ionic"></po-input>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),og()(),Il(707,"blockquote")(708,"p"),Qx(709,"Para o \xEDcone enquadrar corretamente, deve-se utilizar "),Il(710,"code"),Qx(711,"font-size: inherit"),og(),Qx(712," caso o \xEDcone utilizado n\xE3o aplique-o."),og()()()(),Il(713,"tr",15)(714,"td",16)(715,"div",17)(716,"span",18),Qx(717," (p-keydown)"),zl(718,"br"),og()()(),Il(719,"td",20)(720,"code",21),Qx(721,"EventEmitter"),og()(),Il(722,"td",22),Qx(723,"-"),og(),Il(724,"td",23)(725,"em")(726,"strong"),Qx(727,"(opcional)"),og()(),Il(728,"p"),Qx(729,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Il(730,"code"),Qx(731,"KeyboardEvent"),og(),Qx(732," com informa\xE7\xF5es sobre a tecla."),og()()(),Il(733,"tr",15)(734,"td",16)(735,"div",24)(736,"span",25),Qx(737," p-label"),zl(738,"br"),og()()(),Il(739,"td",20)(740,"code",26),Qx(741,"string"),og()(),Il(742,"td",22),Qx(743,"-"),og(),Il(744,"td",23)(745,"em")(746,"strong"),Qx(747,"(opcional)"),og()(),Il(748,"p"),Qx(749,"R\xF3tulo do campo."),og()()(),Il(750,"tr",15)(751,"td",16)(752,"div",24)(753,"span",25),Qx(754," p-label-text-wrap"),zl(755,"br"),og()()(),Il(756,"td",20)(757,"code",27),Qx(758,"boolean"),og()(),Il(759,"td",22)(760,"p")(761,"code"),Qx(762,"false"),og()()(),Il(763,"td",23)(764,"em")(765,"strong"),Qx(766,"(opcional)"),og()(),Il(767,"p"),Qx(768,"Habilita a quebra autom\xE1tica do texto da propriedade "),Il(769,"code"),Qx(770,"p-label"),og(),Qx(771,". Quando "),Il(772,"code"),Qx(773,"p-label-text-wrap"),og(),Qx(774,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),og()()(),Il(775,"tr",15)(776,"td",16)(777,"div",24)(778,"span",25),Qx(779," p-loading"),zl(780,"br"),og()()(),Il(781,"td",20)(782,"code",27),Qx(783,"boolean"),og()(),Il(784,"td",22)(785,"p")(786,"code"),Qx(787,"false"),og()()(),Il(788,"td",23)(789,"em")(790,"strong"),Qx(791,"(opcional)"),og()(),Il(792,"p"),Qx(793,"Exibe um \xEDcone de carregamento no lado direito do campo para sinalizar que uma opera\xE7\xE3o est\xE1 em andamento."),og()()(),Il(794,"tr",15)(795,"td",16)(796,"div",24)(797,"span",25),Qx(798,"p-mask"),zl(799,"br"),og()()(),Il(800,"td",20)(801,"code",26),Qx(802,"string"),og()(),Il(803,"td",22),Qx(804,"-"),og(),Il(805,"td",23)(806,"em")(807,"strong"),Qx(808,"(opcional)"),og()(),Il(809,"p"),Qx(810,`Indica uma m\xE1scara para o campo. Exemplos: (+99) (99) 99999?-9999, 99999-999, 999.999.999-99.
A m\xE1scara gera uma valida\xE7\xE3o autom\xE1tica do campo, podendo esta ser substitu\xEDda por um REGEX espec\xEDfico
atrav\xE9s da propriedade p-pattern.
O campo ser\xE1 sinalizado e o formul\xE1rio ficar\xE1 inv\xE1lido quando o valor informado estiver fora do padr\xE3o definido,
mesmo quando desabilitado.`),og()()(),Il(811,"tr",15)(812,"td",16)(813,"div",24)(814,"span",25),Qx(815,"p-mask-format-model"),zl(816,"br"),og()()(),Il(817,"td",20)(818,"code",27),Qx(819,"boolean"),og()(),Il(820,"td",22)(821,"p")(822,"code"),Qx(823,"false"),og()()(),Il(824,"td",23)(825,"em")(826,"strong"),Qx(827,"(opcional)"),og()(),Il(828,"p"),Qx(829,"Indica se o "),Il(830,"code"),Qx(831,"model"),og(),Qx(832," receber\xE1 o valor formatado pela m\xE1scara ou apenas o valor puro (sem formata\xE7\xE3o)."),og()()(),Il(833,"tr",15)(834,"td",16)(835,"div",24)(836,"span",25),Qx(837," p-mask-no-length-validation"),zl(838,"br"),og()()(),Il(839,"td",20)(840,"code",27),Qx(841,"boolean"),og()(),Il(842,"td",22)(843,"p")(844,"code"),Qx(845,"false"),og()()(),Il(846,"td",23)(847,"p"),Qx(848,"Controla como o componente aplica as valida\xE7\xF5es de comprimento m\xEDnimo ("),Il(849,"code"),Qx(850,"minLength"),og(),Qx(851,") e m\xE1ximo ("),Il(852,"code"),Qx(853,"maxLength"),og(),Qx(854,") quando h\xE1 uma m\xE1scara ("),Il(855,"code"),Qx(856,"p-mask"),og(),Qx(857,") definida."),og(),Il(858,"ul")(859,"li"),Qx(860,"Quando "),Il(861,"code"),Qx(862,"true"),og(),Qx(863,", apenas os caracteres alfanum\xE9ricos ser\xE3o contabilizados para a valida\xE7\xE3o dos comprimentos."),og(),Il(864,"li"),Qx(865,"Quando "),Il(866,"code"),Qx(867,"false"),og(),Qx(868,", todos os caracteres, incluindo os especiais da m\xE1scara, ser\xE3o considerados na valida\xE7\xE3o."),og()(),Il(869,"blockquote")(870,"p"),Qx(871,"Esta propriedade \xE9 ignorada quando utilizada em conjunto com "),Il(872,"code"),Qx(873,"p-mask-format-model"),og(),Qx(874,"."),og()(),Il(875,"p"),Qx(876,"Exemplo:"),og(),Il(877,"pre")(878,"code"),Qx(879,`<po-input
  p-mask="999-999"
  p-maxlength="6"
  p-minlength="4"
  p-mask-no-length-validation="true"
></po-input>
`),og()(),Il(880,"ul")(881,"li"),Qx(882,"Entrada: "),Il(883,"code"),Qx(884,"123-456"),og(),Qx(885," \u2192 Valida\xE7\xE3o ser\xE1 aplicada somente aos n\xFAmeros, ignorando o caractere especial "),Il(886,"code"),Qx(887,"-"),og(),Qx(888,"."),og()()()(),Il(889,"tr",15)(890,"td",16)(891,"div",24)(892,"span",25),Qx(893," p-maxlength"),zl(894,"br"),og()()(),Il(895,"td",20)(896,"code",31),Qx(897,"number"),og()(),Il(898,"td",22),Qx(899,"-"),og(),Il(900,"td",23)(901,"em")(902,"strong"),Qx(903,"(opcional)"),og()(),Il(904,"p"),Qx(905,"Indica a quantidade m\xE1xima de caracteres que o campo aceita."),og()()(),Il(906,"tr",15)(907,"td",16)(908,"div",24)(909,"span",25),Qx(910," p-minlength"),zl(911,"br"),og()()(),Il(912,"td",20)(913,"code",31),Qx(914,"number"),og()(),Il(915,"td",22),Qx(916,"-"),og(),Il(917,"td",23)(918,"em")(919,"strong"),Qx(920,"(opcional)"),og()(),Il(921,"p"),Qx(922,"Indica a quantidade m\xEDnima de caracteres que o campo aceita."),og()()(),Il(923,"tr",15)(924,"td",16)(925,"div",24)(926,"span",25),Qx(927," name"),zl(928,"br"),og()()(),Il(929,"td",20)(930,"code",26),Qx(931,"string"),og()(),Il(932,"td",22),Qx(933,"-"),og(),Il(934,"td",23)(935,"p"),Qx(936,"Nome e identificador do campo."),og()()(),Il(937,"tr",15)(938,"td",16)(939,"div",24)(940,"span",25),Qx(941," p-no-autocomplete"),zl(942,"br"),og()()(),Il(943,"td",20)(944,"code",27),Qx(945,"boolean"),og()(),Il(946,"td",22)(947,"p")(948,"code"),Qx(949,"false"),og()()(),Il(950,"td",23)(951,"em")(952,"strong"),Qx(953,"(opcional)"),og()(),Il(954,"p"),Qx(955,"Define a propriedade nativa "),Il(956,"code"),Qx(957,"autocomplete"),og(),Qx(958," do campo como "),Il(959,"code"),Qx(960,"off"),og(),Qx(961,"."),og(),Il(962,"blockquote")(963,"p"),Qx(964,"No componente "),Il(965,"code"),Qx(966,"po-password"),og(),Qx(967," ser\xE1 definido como "),Il(968,"code"),Qx(969,"new-password"),og(),Qx(970,"."),og()(),Il(971,"p"),Qx(972,"Nos componentes "),Il(973,"code"),Qx(974,"po-password"),og(),Qx(975," e "),Il(976,"code"),Qx(977,"po-login"),og(),Qx(978," o valor padr\xE3o ser\xE1 "),Il(979,"code"),Qx(980,"true"),og(),Qx(981,"."),og()()(),Il(982,"tr",15)(983,"td",16)(984,"div",24)(985,"span",25),Qx(986," p-optional"),zl(987,"br"),og()()(),Il(988,"td",20)(989,"code",27),Qx(990,"boolean"),og()(),Il(991,"td",22)(992,"p")(993,"code"),Qx(994,"false"),og()()(),Il(995,"td",23)(996,"em")(997,"strong"),Qx(998,"(opcional)"),og()(),Il(999,"p"),Qx(1e3,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),og(),Il(1001,"blockquote")(1002,"p"),Qx(1003,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),og()(),Il(1004,"ul")(1005,"li"),Qx(1006,"O campo conter "),Il(1007,"code"),Qx(1008,"p-required"),og(),Qx(1009,";"),og(),Il(1010,"li"),Qx(1011,"N\xE3o possuir "),Il(1012,"code"),Qx(1013,"p-help"),og(),Qx(1014," e/ou "),Il(1015,"code"),Qx(1016,"p-label"),og(),Qx(1017,"."),og()()()(),Il(1018,"tr",15)(1019,"td",16)(1020,"div",24)(1021,"span",25),Qx(1022,"p-pattern"),zl(1023,"br"),og()()(),Il(1024,"td",20)(1025,"code",26),Qx(1026,"string"),og()(),Il(1027,"td",22),Qx(1028,"-"),og(),Il(1029,"td",23)(1030,"em")(1031,"strong"),Qx(1032,"(opcional)"),og()(),Il(1033,"p"),Qx(1034,`Express\xE3o regular para validar o campo.
Quando o campo possuir uma m\xE1scara `),Il(1035,"code"),Qx(1036,"(p-mask)"),og(),Qx(1037,` ser\xE1 automaticamente validado por ela, por\xE9m
\xE9 poss\xEDvel definir um p-pattern para substituir a valida\xE7\xE3o da m\xE1scara.`),og()()(),Il(1038,"tr",15)(1039,"td",16)(1040,"div",24)(1041,"span",25),Qx(1042," p-placeholder"),zl(1043,"br"),og()()(),Il(1044,"td",20)(1045,"code",26),Qx(1046,"string"),og()(),Il(1047,"td",22)(1048,"p"),Qx(1049,"''"),og()(),Il(1050,"td",23)(1051,"em")(1052,"strong"),Qx(1053,"(opcional)"),og()(),Il(1054,"p"),Qx(1055,"Mensagem que aparecer\xE1 enquanto o campo n\xE3o estiver preenchido."),og()()(),Il(1056,"tr",15)(1057,"td",16)(1058,"div",24)(1059,"span",25),Qx(1060," p-helper"),zl(1061,"br"),og()()(),Il(1062,"td",20)(1063,"code",32),Qx(1064,"PoHelperOptions "),og(),Il(1065,"code",26),Qx(1066," string"),og()(),Il(1067,"td",22),Qx(1068,"-"),og(),Il(1069,"td",23)(1070,"em")(1071,"strong"),Qx(1072,"(opcional)"),og()(),Il(1073,"p"),Qx(1074,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label quando a propriedade "),Il(1075,"code"),Qx(1076,"p-label"),og(),Qx(1077," for definida, ou, ao lado do componente na aus\xEAncia da propriedade "),Il(1078,"code"),Qx(1079,"p-label"),og(),Qx(1080,"."),og(),Il(1081,"blockquote")(1082,"p"),Qx(1083,"Para mais informa\xE7\xF5es acesse: "),Il(1084,"a",33),Qx(1085,"https://po-ui.io/documentation/po-helper"),og(),Qx(1086,"."),og()(),Il(1087,"blockquote")(1088,"p"),Qx(1089,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),Il(1090,"code"),Qx(1091,"p-additional-help-tooltip"),og(),Qx(1092," e "),Il(1093,"code"),Qx(1094,"p-additional-help"),og(),Qx(1095,") ser\xE1 ignorado."),og()()()(),Il(1096,"tr",15)(1097,"td",16)(1098,"div",24)(1099,"span",25),Qx(1100,"p-readonly"),zl(1101,"br"),og()()(),Il(1102,"td",20)(1103,"code",27),Qx(1104,"boolean"),og()(),Il(1105,"td",22),Qx(1106,"-"),og(),Il(1107,"td",23)(1108,"em")(1109,"strong"),Qx(1110,"(opcional)"),og()(),Il(1111,"p"),Qx(1112,"Indica que o campo ser\xE1 somente leitura."),og()()(),Il(1113,"tr",15)(1114,"td",16)(1115,"div",24)(1116,"span",25),Qx(1117,"p-required"),zl(1118,"br"),og()()(),Il(1119,"td",20)(1120,"code",27),Qx(1121,"boolean"),og()(),Il(1122,"td",22)(1123,"p")(1124,"code"),Qx(1125,"false"),og()()(),Il(1126,"td",23)(1127,"em")(1128,"strong"),Qx(1129,"(opcional)"),og()(),Il(1130,"p"),Qx(1131,"Define que o campo ser\xE1 obrigat\xF3rio."),og(),Il(1132,"blockquote")(1133,"p"),Qx(1134,"Esta propriedade \xE9 desconsiderada quando o input est\xE1 desabilitado "),Il(1135,"code"),Qx(1136,"(p-disabled)"),og(),Qx(1137,"."),og()()()(),Il(1138,"tr",15)(1139,"td",16)(1140,"div",24)(1141,"span",25),Qx(1142," p-required-field-error-message"),zl(1143,"br"),og()()(),Il(1144,"td",20)(1145,"code",27),Qx(1146,"boolean"),og()(),Il(1147,"td",22)(1148,"p")(1149,"code"),Qx(1150,"false"),og()()(),Il(1151,"td",23)(1152,"em")(1153,"strong"),Qx(1154,"(opcional)"),og()(),Il(1155,"p"),Qx(1156,"Exibe a mensagem setada na propriedade "),Il(1157,"code"),Qx(1158,"p-error-pattern"),og(),Qx(1159," se o campo estiver vazio e for requerido."),og(),Il(1160,"blockquote")(1161,"p"),Qx(1162,"Necess\xE1rio que a propriedade "),Il(1163,"code"),Qx(1164,"p-required"),og(),Qx(1165," esteja habilitada."),og()()()(),Il(1166,"tr",15)(1167,"td",16)(1168,"div",24)(1169,"span",25),Qx(1170," p-show-required"),zl(1171,"br"),og()()(),Il(1172,"td",20)(1173,"code",27),Qx(1174,"boolean"),og()(),Il(1175,"td",22),Qx(1176,"-"),og(),Il(1177,"td",23)(1178,"p"),Qx(1179,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),og(),Il(1180,"blockquote")(1181,"p"),Qx(1182,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),og()(),Il(1183,"ul")(1184,"li"),Qx(1185,"N\xE3o possuir "),Il(1186,"code"),Qx(1187,"p-help"),og(),Qx(1188," e/ou "),Il(1189,"code"),Qx(1190,"p-label"),og(),Qx(1191,"."),og()()()(),Il(1192,"tr",15)(1193,"td",16)(1194,"div",24)(1195,"span",25),Qx(1196," p-size"),zl(1197,"br"),og()()(),Il(1198,"td",20)(1199,"code",26),Qx(1200,"string"),og()(),Il(1201,"td",22)(1202,"p")(1203,"code"),Qx(1204,"medium"),og()()(),Il(1205,"td",23)(1206,"em")(1207,"strong"),Qx(1208,"(opcional)"),og()(),Il(1209,"p"),Qx(1210,"Define o tamanho do componente:"),og(),Il(1211,"ul")(1212,"li")(1213,"code"),Qx(1214,"small"),og(),Qx(1215,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),og(),Il(1216,"li")(1217,"code"),Qx(1218,"medium"),og(),Qx(1219,": altura do input como 44px."),og()(),Il(1220,"blockquote")(1221,"p"),Qx(1222,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Il(1223,"code"),Qx(1224,"medium"),og(),Qx(1225,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Il(1226,"a",34),Qx(1227,"po-theme"),og(),Qx(1228,"."),og()()()(),Il(1229,"tr",15)(1230,"td",16)(1231,"div",24)(1232,"span",25),Qx(1233," p-upper-case"),zl(1234,"br"),og()()(),Il(1235,"td",20)(1236,"code",27),Qx(1237,"boolean"),og()(),Il(1238,"td",22),Qx(1239,"-"),og(),Il(1240,"td",23)(1241,"p"),Qx(1242,"Converte o conte\xFAdo do campo em mai\xFAsulo automaticamente."),og()()()(),Il(1243,"h3",11),Qx(1244,"M\xE9todos"),og(),Il(1245,"table",35)(1246,"tr",15)(1247,"th",36)(1248,"div",24)(1249,"h4")(1250,"span",25),Qx(1251," showAdditionalHelp "),og()()()()(),Il(1252,"tr",23)(1253,"td",23)(1254,"p"),Qx(1255,"M\xE9todo que exibe "),Il(1256,"code"),Qx(1257,"p-helper"),og(),Qx(1258," ou executa a a\xE7\xE3o definida em "),Il(1259,"code"),Qx(1260,"p-helper{eventOnClick}"),og(),Qx(1261," ou em "),Il(1262,"code"),Qx(1263,"p-additionalHelp"),og(),Qx(1264,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Il(1265,"code"),Qx(1266,"p-keydown"),og(),Qx(1267,"."),og(),Il(1268,"blockquote")(1269,"p"),Qx(1270,"Exibe ou oculta o conte\xFAdo do componente "),Il(1271,"code"),Qx(1272,"po-helper"),og(),Qx(1273," quando o componente estiver com foco."),og()(),Il(1274,"pre")(1275,"code"),Qx(1276,`// Exemplo com p-label e p-helper
<po-nome-component
 #component
 ...
 p-label="Label do componente"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, component)"
></po-nome-component>
`),og()(),Il(1277,"pre")(1278,"code"),Qx(1279,`...
onKeyDown(event: KeyboardEvent, inp: PoNomeDoComponente): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),og()()()()(),zl(1280,"br"),Il(1281,"table",35)(1282,"tr",15)(1283,"th",36)(1284,"div",24)(1285,"h4")(1286,"span",25),Qx(1287," focus "),og()()()()(),Il(1288,"tr",23)(1289,"td",23)(1290,"p"),Qx(1291,"Fun\xE7\xE3o que atribui foco ao componente."),og(),Il(1292,"p"),Qx(1293,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),og(),Il(1294,"pre")(1295,"code"),Qx(1296,`import { PoNomeDoComponenteComponent } from '@po-ui/ng-components';

...

@ViewChild(PoNomeDoComponenteComponent, { static: true }) nomeDoComponente: PoNomeDoComponenteComponent;

focusComponent() {
  this.nomeDoComponente.focus();
}
`),og()()()()(),zl(1297,"br"),Il(1298,"h3"),Qx(1299,"Interfaces"),og(),Il(1300,"h4",37)(1301,"code",5),Qx(1302,"ErrorAsyncProperties"),og()(),Il(1303,"div",2)(1304,"p"),Qx(1305,"Interface para realizar uma valida\xE7\xE3o ass\xEDncrona no componente."),og()(),Il(1306,"h4",11),Qx(1307,"Propriedades"),og(),Il(1308,"table",12)(1309,"tr",13)(1310,"th",14),Qx(1311,"Nome"),og(),Il(1312,"th",14),Qx(1313,"Tipo"),og(),Il(1314,"th",14),Qx(1315,"Descri\xE7\xE3o"),og()(),Il(1316,"tr",15)(1317,"td",16)(1318,"div",24)(1319,"span",25),Qx(1320," errorAsync"),zl(1321,"br"),og()()(),Il(1322,"td",20)(1323,"code",38),Qx(1324,"(value) => Observable<boolean>"),og()(),Il(1325,"td",23)(1326,"p"),Qx(1327,`Fun\xE7\xE3o obrigat\xF3ria executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),Il(1328,"code"),Qx(1329,"change"),og(),Qx(1330," ou "),Il(1331,"code"),Qx(1332,"change-model"),og(),Qx(1333,", dependendo do valor da propriedade "),Il(1334,"code"),Qx(1335,"triggerMode"),og(),Qx(1336,"."),og()()(),Il(1337,"tr",15)(1338,"td",16)(1339,"div",24)(1340,"span",25),Qx(1341," triggerMode"),zl(1342,"br"),og()()(),Il(1343,"td",20)(1344,"code",39),Qx(1345,"'change' "),og(),Il(1346,"code",40),Qx(1347," 'changeModel'"),og()(),Il(1348,"td",23)(1349,"em")(1350,"strong"),Qx(1351,"(opcional)"),og()(),Il(1352,"p"),Qx(1353,"Controla se o m\xE9todo ser\xE1 executado no disparo do output "),Il(1354,"code"),Qx(1355,"change"),og(),Qx(1356," ou "),Il(1357,"code"),Qx(1358,"change-model"),og(),Qx(1359,"."),og()()()()());},dependencies:[Ka],encapsulation:2})}return a})();var ce=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(p,l){this.route=p,this.router=l;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let l=p.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:"merge"}),this.activeTab=p;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(l){return new(l||a)(C(Xn),C(En))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Password",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,i){l&1&&(Il(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return i.changeTab("doc")}),zl(3,"sample-po-password-doc"),og(),Il(4,"po-tab",3),ft("p-click",function(){return i.changeTab("web")}),zl(5,"sample-po-password-basic-view")(6,"sample-po-password-labs-view")(7,"sample-po-password-reset-view"),og()()()),l&2&&(nw("p-actions",i.actions),Lp(2),nw("p-active",i.activeTab==="doc"),Lp(2),nw("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[cNe,qme,Yme,re,de,me,se],encapsulation:2})}return a})();var ye=[{path:"",component:ce}],ue=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=fe({type:a});static \u0275inj=ue$1({imports:[uL.forChild(ye),uL]})}return a})();var $e=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=fe({type:a});static \u0275inj=ue$1({imports:[sr,ue]})}return a})();export{$e as DocPoPasswordModule};