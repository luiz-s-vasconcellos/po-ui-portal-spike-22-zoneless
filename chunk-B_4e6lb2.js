import {f as fe,u as ue$1,s as sr,m as mL,w,c3 as Xn,E as En,U as Un,c as f,c5 as Ode,cZ as Hhe,F as Wl,an as SO,aH as Ka,b8 as Ume,b9 as $me,C as Sl,y as rN,J as og,a1 as ft,L as Lp,ar as Gx,au as dg,O as rw,bs as gN,aX as Q9,aF as Z9,aY as K9,aG as wk,aZ as _k,b0 as Qt,b1 as mv,c4 as b3,b4 as L3,cp as Bhe,c8 as Tde,c9 as jhe,aB as Ix,aM as Cw,aN as n0,aO as ww,aP as i0,bd as kx,Q as we,a3 as sNe,aD as Ky,aT as oN,aE as Xy}from'./main-TVDUJ47Y.js';var oe=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-password-basic"]],standalone:false,decls:1,vars:0,consts:[["name","password","p-label","PO Password"]],template:function(l,i){l&1&&Wl(0,"po-password",0);},dependencies:[Hhe],encapsulation:2,changeDetection:1})}return a})();var ge=a=>({"docs-sample-code-tabs":a}),re=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-password-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),rN(3,"PO Password Basic"),og(),Sl(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),rN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),rN(12,"sample-po-password-basic/sample-po-password-basic.component.html"),og(),Sl(13,"pre",7),rN(14,`<po-password name="password" p-label="PO Password"> </po-password>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),rN(18,"sample-po-password-basic/sample-po-password-basic.component.ts"),og(),Sl(19,"pre",9),rN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-password-basic',
  templateUrl: './sample-po-password-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPasswordBasicComponent {}
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-password-basic"),og(),Wl(23,"hr")),l&2&&(Lp(5),Gx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),rw("ngClass",gN(4,ge,i.hideSampleCodeTabs)));},dependencies:[SO,Ka,Ume,$me,oe],encapsulation:2,changeDetection:1})}return a})();var le=(()=>{class a{helperText;errorPattern;event;help;label;mask;maxlength;minlength;password;pattern;placeholder;properties;size;propertiesOptions=[{value:"clean",label:"Clean"},{value:"disabled",label:"Disabled"},{value:"errorLimit",label:"Limit Error Message"},{value:"hidepasswordpeek",label:"Hide Password Peek"},{value:"labelTextWrap",label:"Label Text Wrap"},{value:"compactLabel",label:"Compact Label"},{value:"loading",label:"Loading"},{value:"noAutocomplete",label:"No Autocomplete"},{value:"optional",label:"Optional"},{value:"readonly",label:"Read Only"},{value:"required",label:"Required"},{value:"requiredFieldErrorMessage",label:"Required Field Error Message"},{value:"showRequired",label:"Show Required"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore();}changeEvent(p){this.event=p;}restore(){this.helperText="",this.errorPattern=void 0,this.event=void 0,this.help=void 0,this.label=void 0,this.maxlength=void 0,this.minlength=void 0,this.password=void 0,this.pattern="",this.placeholder="",this.properties=[],this.size="medium";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-password-labs"]],standalone:false,decls:20,vars:37,consts:[["f","ngForm"],["name","password",3,"ngModelChange","p-blur","p-change","p-change-model","p-enter","p-keydown","ngModel","p-helper","p-clean","p-disabled","p-error-pattern","p-help","p-hide-password-peek","p-label","p-loading","p-maxlength","p-minlength","p-no-autocomplete","p-optional","p-pattern","p-placeholder","p-readonly","p-required","p-required-field-error-message","p-show-required","p-size","p-error-limit","p-label-text-wrap","p-compact-label"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","errorPattern","p-clean","","p-label","Error Pattern",1,"po-md-6",3,"ngModelChange","ngModel"],["name","pattern","p-clean","","p-help","Ex.: '[a-zA]{5}[Z0-9]{3}'","p-label","Pattern (Regex)",1,"po-md-6",3,"ngModelChange","ngModel"],["name","minlength","p-clean","","p-label","Min Length",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","maxlength","p-clean","","p-label","Max Length",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(l,i){if(l&1){let m=Ix();Sl(0,"po-password",1),Cw("ngModelChange",function(r){return Ky(m),oN(i.password,r)||(i.password=r),Xy(r)}),ft("p-blur",function(){return i.changeEvent("p-blur")})("p-change",function(){return i.changeEvent("p-change")})("p-change-model",function(){return i.changeEvent("p-change-model")})("p-enter",function(){return i.changeEvent("p-enter")})("p-keydown",function(){return i.changeEvent("p-keydown")}),og(),n0(),Wl(1,"po-divider"),Sl(2,"div",2),Wl(3,"po-info",3)(4,"po-info",4),og(),Wl(5,"po-divider"),Sl(6,"form",null,0)(8,"po-input",5),Cw("ngModelChange",function(r){return Ky(m),oN(i.label,r)||(i.label=r),Xy(r)}),og(),n0(),Sl(9,"po-input",6),Cw("ngModelChange",function(r){return Ky(m),oN(i.help,r)||(i.help=r),Xy(r)}),og(),n0(),Sl(10,"po-input",7),Cw("ngModelChange",function(r){return Ky(m),oN(i.helperText,r)||(i.helperText=r),Xy(r)}),og(),n0(),Sl(11,"po-input",8),Cw("ngModelChange",function(r){return Ky(m),oN(i.placeholder,r)||(i.placeholder=r),Xy(r)}),og(),n0(),Sl(12,"po-input",9),Cw("ngModelChange",function(r){return Ky(m),oN(i.errorPattern,r)||(i.errorPattern=r),Xy(r)}),og(),n0(),Sl(13,"po-input",10),Cw("ngModelChange",function(r){return Ky(m),oN(i.pattern,r)||(i.pattern=r),Xy(r)}),og(),n0(),Sl(14,"po-number",11),Cw("ngModelChange",function(r){return Ky(m),oN(i.minlength,r)||(i.minlength=r),Xy(r)}),og(),n0(),Sl(15,"po-number",12),Cw("ngModelChange",function(r){return Ky(m),oN(i.maxlength,r)||(i.maxlength=r),Xy(r)}),og(),n0(),Sl(16,"po-checkbox-group",13),Cw("ngModelChange",function(r){return Ky(m),oN(i.properties,r)||(i.properties=r),Xy(r)}),og(),n0(),Sl(17,"po-radio-group",14),Cw("ngModelChange",function(r){return Ky(m),oN(i.size,r)||(i.size=r),Xy(r)}),og(),n0(),Sl(18,"div",2)(19,"po-button",15),ft("p-click",function(){return i.restore()}),og()()();}l&2&&(ww("ngModel",i.password),rw("p-helper",i.helperText)("p-clean",i.properties.includes("clean"))("p-disabled",i.properties.includes("disabled"))("p-error-pattern",i.errorPattern)("p-help",i.help)("p-hide-password-peek",i.properties.includes("hidepasswordpeek"))("p-label",i.label)("p-loading",i.properties==null?null:i.properties.includes("loading"))("p-maxlength",i.maxlength)("p-minlength",i.minlength)("p-no-autocomplete",i.properties==null?null:i.properties.includes("noAutocomplete"))("p-optional",i.properties.includes("optional"))("p-pattern",i.pattern)("p-placeholder",i.placeholder)("p-readonly",i.properties.includes("readonly"))("p-required",i.properties.includes("required"))("p-required-field-error-message",i.properties.includes("requiredFieldErrorMessage"))("p-show-required",i.properties.includes("showRequired"))("p-size",i.size)("p-error-limit",i.properties==null?null:i.properties.includes("errorLimit"))("p-label-text-wrap",i.properties==null?null:i.properties.includes("labelTextWrap"))("p-compact-label",i.properties==null?null:i.properties.includes("compactLabel")),i0(),Lp(3),rw("p-value",i.password),Lp(),rw("p-value",i.event),Lp(4),ww("ngModel",i.label),i0(),Lp(),ww("ngModel",i.help),i0(),Lp(),ww("ngModel",i.helperText),i0(),Lp(),ww("ngModel",i.placeholder),i0(),Lp(),ww("ngModel",i.errorPattern),i0(),Lp(),ww("ngModel",i.pattern),i0(),Lp(),ww("ngModel",i.minlength),i0(),Lp(),ww("ngModel",i.maxlength),i0(),Lp(),ww("ngModel",i.properties),rw("p-options",i.propertiesOptions),i0(),Lp(),ww("ngModel",i.size),rw("p-options",i.sizeOptions),i0());},dependencies:[Q9,Z9,K9,wk,_k,Qt,mv,b3,L3,Bhe,Hhe,Tde,jhe],encapsulation:2,changeDetection:1})}return a})();var be=a=>({"docs-sample-code-tabs":a}),de=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-password-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),rN(3,"PO Password Labs"),og(),Sl(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),rN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),rN(12,"sample-po-password-labs/sample-po-password-labs.component.html"),og(),Sl(13,"pre",7),rN(14,`<po-password
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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),rN(18,"sample-po-password-labs/sample-po-password-labs.component.ts"),og(),Sl(19,"pre",9),rN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-password-labs"),og(),Wl(23,"hr")),l&2&&(Lp(5),Gx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),rw("ngClass",gN(4,be,i.hideSampleCodeTabs)));},dependencies:[SO,Ka,Ume,$me,le],encapsulation:2,changeDetection:1})}return a})();var pe=(()=>{class a{poAlert=f(Ode);confirmNewPassword;currentPassword;errorPattern;help="Initial password = 123456";newPassword;password="123456";setPassword(){this.confirmNewPassword===this.newPassword?(this.password=this.newPassword,this.help=`Actual password = ${this.password}`,this.currentPassword=void 0,this.newPassword=void 0,this.confirmNewPassword=void 0,this.poAlert.alert({title:"Password Reset",message:"Password saved successfully",ok:()=>this.reset()})):this.poAlert.alert({title:"Password Error",message:"Your (new passsword) is different of (confirm new password)",ok:()=>this.reset()});}reset(){this.newPassword=void 0,this.confirmNewPassword=void 0;}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-password-reset"]],standalone:false,features:[we([Ode])],decls:7,vars:7,consts:[["passwordForm","ngForm"],["name","currentPassword","p-clean","","p-error-pattern","invalid password","p-label","Current Password","p-mask","999999","p-required","",1,"po-sm-12",3,"ngModelChange","ngModel","p-help"],["name","newPassword","p-clean","","p-error-pattern","invalid password","p-label","New password","p-mask","999999","p-minlength","6","p-required","",1,"po-sm-12",3,"ngModelChange","ngModel","p-disabled"],["name","confirmNewPassword","p-clean","","p-error-pattern","invalid password","p-label","Confirm New Password","p-mask","999999","p-minlength","6","p-required","",1,"po-sm-12",3,"ngModelChange","ngModel","p-disabled"],[1,"po-row"],["p-label","Save",1,"po-md-4",3,"p-click","p-disabled"]],template:function(l,i){if(l&1){let m=Ix();Sl(0,"form",null,0)(2,"po-password",1),Cw("ngModelChange",function(r){return Ky(m),oN(i.currentPassword,r)||(i.currentPassword=r),Xy(r)}),og(),n0(),Sl(3,"po-password",2),Cw("ngModelChange",function(r){return Ky(m),oN(i.newPassword,r)||(i.newPassword=r),Xy(r)}),og(),n0(),Sl(4,"po-password",3),Cw("ngModelChange",function(r){return Ky(m),oN(i.confirmNewPassword,r)||(i.confirmNewPassword=r),Xy(r)}),og(),n0(),Sl(5,"div",4)(6,"po-button",5),ft("p-click",function(){return i.setPassword()}),og()()();}if(l&2){let m=kx(1);Lp(2),ww("ngModel",i.currentPassword),rw("p-help",i.help),i0(),Lp(),ww("ngModel",i.newPassword),rw("p-disabled",i.currentPassword!==i.password),i0(),Lp(),ww("ngModel",i.confirmNewPassword),rw("p-disabled",i.currentPassword!==i.password),i0(),Lp(2),rw("p-disabled",m.invalid);}},dependencies:[Q9,Z9,K9,wk,_k,Qt,Hhe],encapsulation:2,changeDetection:1})}return a})();var ve=a=>({"docs-sample-code-tabs":a}),me=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-password-reset-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),rN(3,"PO Password - Reset"),og(),Sl(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),rN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),rN(12,"sample-po-password-reset/sample-po-password-reset.component.html"),og(),Sl(13,"pre",7),rN(14,`<form #passwordForm="ngForm">
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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),rN(18,"sample-po-password-reset/sample-po-password-reset.component.ts"),og(),Sl(19,"pre",9),rN(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-password-reset"),og(),Wl(23,"hr")),l&2&&(Lp(5),Gx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),rw("ngClass",gN(4,ve,i.hideSampleCodeTabs)));},dependencies:[SO,Ka,Ume,$me,pe],encapsulation:2,changeDetection:1})}return a})();var se=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-password-doc"]],standalone:false,decls:1360,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/grid-system"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","ErrorAsyncProperties"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-helper"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","(value)","=>","Observable<boolean>"],["pan","",1,"docs-api-property-type","'change'"],["pan","",1,"docs-api-property-type","'changeModel'"]],template:function(l,i){l&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),rN(3,"import { PoFieldModule } from '@po-ui/ng-components';"),og()(),Sl(4,"div",2)(5,"p"),rN(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),og(),Sl(7,"blockquote")(8,"p"),rN(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),Sl(10,"code"),rN(11,"FormsModule"),og(),rN(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Sl(13,"code"),rN(14,"ReactiveFormsModule"),og(),rN(15,", ambos nativos do Angular."),og()()(),Sl(16,"h3",3),rN(17,"Componente"),og(),Sl(18,"h4",4)(19,"code",5),rN(20,"PoPasswordComponent"),og()(),Sl(21,"div",2)(22,"p"),rN(23,`Este \xE9 um componente baseado em input, com v\xE1rias propriedades do input nativo e outras
propriedades extras como: m\xE1scara, pattern, mensagem de erro e etc.
Voc\xEA deve informar a vari\xE1vel que cont\xE9m o valor como [(ngModel)]="variavel", para que o
input receba o valor da vari\xE1vel e para que ela receba as altera\xE7\xF5es do valor (two-way-databinding).
A propriedade name \xE9 obrigat\xF3ria para que o formul\xE1rio e o model funcionem corretamente.`),og(),Sl(24,"p"),rN(25,"Importante:"),og(),Sl(26,"ul")(27,"li"),rN(28,`Caso o input tenha um [(ngModel)] sem o atributo name, ocorrer\xE1 um erro de angular.
Ent\xE3o voc\xEA precisa informar o atributo name ou o atributo [ngModelOptions]="{standalone: true}".
Exemplo: [(ngModel)]="pessoa.nome" [ngModelOptions]="{standalone: true}".`),og()(),Sl(29,"h4"),rN(30,"Tokens customiz\xE1veis"),og(),Sl(31,"p"),rN(32,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS): "),Wl(33,"br"),rN(34,`
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),Sl(35,"code"),rN(36,".po-input"),og()(),Sl(37,"blockquote")(38,"p"),rN(39,"Para correto alinhamento \xE9 recomendado o uso das classes de espa\xE7amento do "),Sl(40,"a",6),rN(41,"Grid System"),og(),rN(42,"."),og()(),Sl(43,"blockquote")(44,"p"),rN(45,"Para maiores informa\xE7\xF5es, acesse o guia "),Sl(46,"a",7),rN(47,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),rN(48,"."),og()(),Sl(49,"table")(50,"thead")(51,"tr")(52,"th"),rN(53,"Propriedade"),og(),Sl(54,"th"),rN(55,"Descri\xE7\xE3o"),og(),Sl(56,"th"),rN(57,"Valor Padr\xE3o"),og()()(),Sl(58,"tbody")(59,"tr")(60,"td")(61,"strong"),rN(62,"Default Values"),og()(),Wl(63,"td")(64,"td"),og(),Sl(65,"tr")(66,"td")(67,"code"),rN(68,"--font-family"),og()(),Sl(69,"td"),rN(70,"Fam\xEDlia tipogr\xE1fica usada"),og(),Sl(71,"td")(72,"code"),rN(73,"var(--font-family-theme)"),og()()(),Sl(74,"tr")(75,"td")(76,"code"),rN(77,"--font-size"),og()(),Sl(78,"td"),rN(79,"Tamanho da fonte"),og(),Sl(80,"td")(81,"code"),rN(82,"var(--font-size-default)"),og()()(),Sl(83,"tr")(84,"td")(85,"code"),rN(86,"--text-color-placeholder"),og()(),Sl(87,"td"),rN(88,"Cor do texto placeholder"),og(),Sl(89,"td")(90,"code"),rN(91,"var(--color-neutral-light-30)"),og()()(),Sl(92,"tr")(93,"td")(94,"code"),rN(95,"--color"),og()(),Sl(96,"td"),rN(97,"Cor pincipal do input"),og(),Sl(98,"td")(99,"code"),rN(100,"var(--color-neutral-dark-70)"),og()()(),Sl(101,"tr")(102,"td")(103,"code"),rN(104,"--background"),og()(),Sl(105,"td"),rN(106,"Cor de background"),og(),Sl(107,"td")(108,"code"),rN(109,"var(--color-neutral-light-05)"),og()()(),Sl(110,"tr")(111,"td")(112,"code"),rN(113,"--padding"),og()(),Sl(114,"td"),rN(115,"Preenchimento"),og(),Sl(116,"td")(117,"code"),rN(118,"0 0.5rem"),og()()(),Sl(119,"tr")(120,"td")(121,"code"),rN(122,"--text-color"),og()(),Sl(123,"td"),rN(124,"Cor do texto"),og(),Sl(125,"td")(126,"code"),rN(127,"var(--color-neutral-dark-90)"),og()()(),Sl(128,"tr")(129,"td")(130,"code"),rN(131,"--field-container-title-justify"),og()(),Sl(132,"td"),rN(133,"Alinhamento horizontal do t\xEDtulo ("),Sl(134,"code"),rN(135,"justify-content"),og(),rN(136,")"),og(),Sl(137,"td")(138,"code"),rN(139,"space-between"),og()()(),Sl(140,"tr")(141,"td")(142,"code"),rN(143,"--field-container-title-flex"),og()(),Sl(144,"td"),rN(145,"Flex do t\xEDtulo ("),Sl(146,"code"),rN(147,"flex"),og(),rN(148,")"),og(),Sl(149,"td")(150,"code"),rN(151,"1 auto"),og()()(),Sl(152,"tr")(153,"td")(154,"strong"),rN(155,"Hover"),og()(),Wl(156,"td")(157,"td"),og(),Sl(158,"tr")(159,"td")(160,"code"),rN(161,"--color-hover"),og()(),Sl(162,"td"),rN(163,"Cor principal no estado hover"),og(),Sl(164,"td")(165,"code"),rN(166,"var(--color-brand-01-dark)"),og()()(),Sl(167,"tr")(168,"td")(169,"code"),rN(170,"--background-hover"),og()(),Sl(171,"td"),rN(172,"Cor de background no estado hover"),og(),Sl(173,"td")(174,"code"),rN(175,"var(--color-brand-01-lightest)"),og()()(),Sl(176,"tr")(177,"td")(178,"strong"),rN(179,"Focused"),og()(),Wl(180,"td")(181,"td"),og(),Sl(182,"tr")(183,"td")(184,"code"),rN(185,"--color-focused"),og()(),Sl(186,"td"),rN(187,"Cor principal no estado de focus"),og(),Sl(188,"td")(189,"code"),rN(190,"var(--color-action-default)"),og()()(),Sl(191,"tr")(192,"td")(193,"code"),rN(194,"--outline-color-focused"),og()(),Sl(195,"td"),rN(196,"Cor do outline do estado de focus"),og(),Sl(197,"td")(198,"code"),rN(199,"var(--color-action-focus)"),og()()(),Sl(200,"tr")(201,"td")(202,"strong"),rN(203,"Disabled"),og()(),Wl(204,"td")(205,"td"),og(),Sl(206,"tr")(207,"td")(208,"code"),rN(209,"--color-disabled"),og()(),Sl(210,"td"),rN(211,"Cor principal no estado disabled"),og(),Sl(212,"td")(213,"code"),rN(214,"var(--color-neutral-light-30)"),og()()(),Sl(215,"tr")(216,"td")(217,"code"),rN(218,"--background-disabled"),og()(),Sl(219,"td"),rN(220,"Cor de background no estado disabled"),og(),Sl(221,"td")(222,"code"),rN(223,"var(--color-neutral-light-20)"),og()()(),Sl(224,"tr")(225,"td")(226,"code"),rN(227,"--text-color-disabled"),og()(),Sl(228,"td"),rN(229,"Cor do texto no estado disabled"),og(),Sl(230,"td")(231,"code"),rN(232,"var(--color-neutral-dark-70)"),og()()()()(),Sl(233,"p"),Wl(234,"br"),rN(235," O "),Sl(236,"code"),rN(237,"po-password"),og(),rN(238," \xE9 um input espec\xEDfico para senhas. J\xE1 possui tipo, estilo e \xEDcone predefinidos."),og()(),Sl(239,"div",8)(240,"h4",9),rN(241,"Seletor"),og(),Sl(242,"pre",10),rN(243,`<po-password
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
`),og()(),Sl(244,"h4",11),rN(245,"Propriedades"),og(),Sl(246,"table",12)(247,"tr",13)(248,"th",14),rN(249,"Nome"),og(),Sl(250,"th",14),rN(251,"Tipo"),og(),Sl(252,"th",14),rN(253,"Padr\xE3o"),og(),Sl(254,"th",14),rN(255,"Descri\xE7\xE3o"),og()(),Sl(256,"tr",15)(257,"td",16)(258,"div",17)(259,"span",18),rN(260," (p-additional-help)"),Wl(261,"br"),og()(),Sl(262,"div",19),rN(263,"Deprecated"),og()(),Sl(264,"td",20)(265,"code",21),rN(266,"EventEmitter"),og()(),Sl(267,"td",22),rN(268,"-"),og(),Sl(269,"td",23)(270,"em")(271,"strong"),rN(272,"(opcional)"),og()(),Sl(273,"p"),rN(274,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),og(),Sl(275,"blockquote")(276,"p"),rN(277,"Essa propriedade est\xE1 "),Sl(278,"strong"),rN(279,"depreciada"),og(),rN(280," e ser\xE1 removida na vers\xE3o "),Sl(281,"code"),rN(282,"23.x.x"),og(),rN(283,". Recomendamos utilizar a propriedade "),Sl(284,"code"),rN(285,"p-helper"),og(),rN(286," que oferece mais recursos e flexibilidade."),og()()()(),Sl(287,"tr",15)(288,"td",16)(289,"div",24)(290,"span",25),rN(291," p-additional-help-tooltip"),Wl(292,"br"),og()(),Sl(293,"div",19),rN(294,"Deprecated"),og()(),Sl(295,"td",20)(296,"code",26),rN(297,"string"),og()(),Sl(298,"td",22),rN(299,"-"),og(),Sl(300,"td",23)(301,"em")(302,"strong"),rN(303,"(opcional)"),og()(),Sl(304,"p"),rN(305,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),Sl(306,"code"),rN(307,"po-helper"),og(),rN(308,`.
`),Sl(309,"strong"),rN(310,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),og()(),Sl(311,"blockquote")(312,"p"),rN(313,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),og()(),Sl(314,"blockquote")(315,"p"),rN(316,"Essa propriedade est\xE1 "),Sl(317,"strong"),rN(318,"depreciada"),og(),rN(319," e ser\xE1 removida na vers\xE3o "),Sl(320,"code"),rN(321,"23.x.x"),og(),rN(322,". Recomendamos utilizar a propriedade "),Sl(323,"code"),rN(324,"p-helper"),og(),rN(325," que oferece mais recursos e flexibilidade."),og()()()(),Sl(326,"tr",15)(327,"td",16)(328,"div",24)(329,"span",25),rN(330," p-append-in-body"),Wl(331,"br"),og()()(),Sl(332,"td",20)(333,"code",27),rN(334,"boolean"),og()(),Sl(335,"td",22)(336,"p")(337,"code"),rN(338,"false"),og()()(),Sl(339,"td",23)(340,"em")(341,"strong"),rN(342,"(opcional)"),og()(),Sl(343,"p"),rN(344,"Define que o popover ("),Sl(345,"code"),rN(346,"p-helper"),og(),rN(347," e/ou "),Sl(348,"code"),rN(349,"p-error-limit"),og(),rN(350,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),og(),Sl(351,"blockquote")(352,"p"),rN(353,"Quando utilizado com "),Sl(354,"code"),rN(355,"p-helper"),og(),rN(356,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),og()()()(),Sl(357,"tr",15)(358,"td",16)(359,"div",24)(360,"span",25),rN(361," p-auto-focus"),Wl(362,"br"),og()()(),Sl(363,"td",20)(364,"code",27),rN(365,"boolean"),og()(),Sl(366,"td",22)(367,"p")(368,"code"),rN(369,"false"),og()()(),Sl(370,"td",23)(371,"em")(372,"strong"),rN(373,"(opcional)"),og()(),Sl(374,"p"),rN(375,"Aplica foco no elemento ao ser iniciado."),og(),Sl(376,"blockquote")(377,"p"),rN(378,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),og()()()(),Sl(379,"tr",15)(380,"td",16)(381,"div",17)(382,"span",18),rN(383," (p-blur)"),Wl(384,"br"),og()()(),Sl(385,"td",20)(386,"code",21),rN(387,"EventEmitter"),og()(),Sl(388,"td",22),rN(389,"-"),og(),Sl(390,"td",23)(391,"em")(392,"strong"),rN(393,"(opcional)"),og()(),Sl(394,"p"),rN(395,"Evento disparado ao sair do campo."),og()()(),Sl(396,"tr",15)(397,"td",16)(398,"div",17)(399,"span",18),rN(400," (p-change)"),Wl(401,"br"),og()()(),Sl(402,"td",20)(403,"code",21),rN(404,"EventEmitter"),og()(),Sl(405,"td",22),rN(406,"-"),og(),Sl(407,"td",23)(408,"em")(409,"strong"),rN(410,"(opcional)"),og()(),Sl(411,"p"),rN(412,"Evento disparado ao alterar valor e deixar o campo."),og()()(),Sl(413,"tr",15)(414,"td",16)(415,"div",17)(416,"span",18),rN(417," (p-change-model)"),Wl(418,"br"),og()()(),Sl(419,"td",20)(420,"code",21),rN(421,"EventEmitter"),og()(),Sl(422,"td",22),rN(423,"-"),og(),Sl(424,"td",23)(425,"em")(426,"strong"),rN(427,"(opcional)"),og()(),Sl(428,"p"),rN(429,"Evento disparado ao alterar valor do model."),og()()(),Sl(430,"tr",15)(431,"td",16)(432,"div",24)(433,"span",25),rN(434,"p-clean"),Wl(435,"br"),og()()(),Sl(436,"td",20)(437,"code",27),rN(438,"boolean"),og()(),Sl(439,"td",22),rN(440,"-"),og(),Sl(441,"td",23)(442,"em")(443,"strong"),rN(444,"(opcional)"),og()(),Sl(445,"p"),rN(446,"Se verdadeiro, o campo receber\xE1 um bot\xE3o para ser limpo."),og()()(),Sl(447,"tr",15)(448,"td",16)(449,"div",24)(450,"span",25),rN(451," p-compact-label"),Wl(452,"br"),og()()(),Sl(453,"td",20)(454,"code",27),rN(455,"boolean"),og()(),Sl(456,"td",22)(457,"p")(458,"code"),rN(459,"false"),og()()(),Sl(460,"td",23)(461,"em")(462,"strong"),rN(463,"(opcional)"),og()(),Sl(464,"p"),rN(465,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),og(),Sl(466,"p"),rN(467,"Quando habilitado ("),Sl(468,"code"),rN(469,"true"),og(),rN(470,"), o modo compacto afeta o conjunto composto por:"),og(),Sl(471,"ul")(472,"li")(473,"code"),rN(474,"po-label"),og()(),Sl(475,"li")(476,"code"),rN(477,"p-requirement (showRequired)"),og()(),Sl(478,"li")(479,"code"),rN(480,"po-helper"),og()()(),Sl(481,"p"),rN(482,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),og(),Sl(483,"p"),rN(484,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),og(),Sl(485,"ul")(486,"li")(487,"code"),rN(488,"--field-container-title-justify"),og()(),Sl(489,"li")(490,"code"),rN(491,"--field-container-title-flex"),og()()(),Sl(492,"p"),rN(493,"Exemplo:"),og(),Sl(494,"pre")(495,"code"),rN(496,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),og()(),Sl(497,"p"),rN(498,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),og()()(),Sl(499,"tr",15)(500,"td",16)(501,"div",24)(502,"span",25),rN(503,"p-disabled"),Wl(504,"br"),og()()(),Sl(505,"td",20)(506,"code",27),rN(507,"boolean"),og()(),Sl(508,"td",22)(509,"p")(510,"code"),rN(511,"false"),og()()(),Sl(512,"td",23)(513,"em")(514,"strong"),rN(515,"(opcional)"),og()(),Sl(516,"p"),rN(517,"Se verdadeiro, desabilita o campo."),og()()(),Sl(518,"tr",15)(519,"td",16)(520,"div",24)(521,"span",25),rN(522," p-emit-all-changes"),Wl(523,"br"),og()()(),Sl(524,"td",20)(525,"code",27),rN(526,"boolean"),og()(),Sl(527,"td",22)(528,"p")(529,"code"),rN(530,"false"),og()()(),Sl(531,"td",23)(532,"em")(533,"strong"),rN(534,"(opcional)"),og()(),Sl(535,"p"),rN(536,"Sempre emite as altera\xE7\xF5es do model mesmo quando o valor atual for igual ao valor anterior."),og()()(),Sl(537,"tr",15)(538,"td",16)(539,"div",17)(540,"span",18),rN(541," (p-enter)"),Wl(542,"br"),og()()(),Sl(543,"td",20)(544,"code",21),rN(545,"EventEmitter"),og()(),Sl(546,"td",22),rN(547,"-"),og(),Sl(548,"td",23)(549,"em")(550,"strong"),rN(551,"(opcional)"),og()(),Sl(552,"p"),rN(553,"Evento disparado ao entrar do campo."),og()()(),Sl(554,"tr",15)(555,"td",16)(556,"div",24)(557,"span",25),rN(558," p-error-async-properties"),Wl(559,"br"),og()()(),Sl(560,"td",20)(561,"code",28),rN(562,"ErrorAsyncProperties"),og()(),Sl(563,"td",22),rN(564,"-"),og(),Sl(565,"td",23)(566,"em")(567,"strong"),rN(568,"(opcional)"),og()(),Sl(569,"p"),rN(570,`Realiza alguma valida\xE7\xE3o customizada ass\xEDncrona no componente.
Aconselhamos a utiliza\xE7\xE3o dessa propriedade somente em componentes que n\xE3o estejam
utilizando `),Sl(571,"code"),rN(572,"Reactive Forms"),og(),rN(573,". Em formul\xE1rios reativos, pode-se utilizar o pr\xF3prio "),Sl(574,"code"),rN(575,"asyncValidators"),og(),rN(576,"."),og()()(),Sl(577,"tr",15)(578,"td",16)(579,"div",24)(580,"span",25),rN(581," p-error-limit"),Wl(582,"br"),og()()(),Sl(583,"td",20)(584,"code",27),rN(585,"boolean"),og()(),Sl(586,"td",22)(587,"p")(588,"code"),rN(589,"false"),og()()(),Sl(590,"td",23)(591,"em")(592,"strong"),rN(593,"(opcional)"),og()(),Sl(594,"p"),rN(595,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),og(),Sl(596,"blockquote")(597,"p"),rN(598,"Caso essa propriedade seja definida como "),Sl(599,"code"),rN(600,"true"),og(),rN(601,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),og()()()(),Sl(602,"tr",15)(603,"td",16)(604,"div",24)(605,"span",25),rN(606," p-error-pattern"),Wl(607,"br"),og()()(),Sl(608,"td",20)(609,"code",26),rN(610,"string"),og()(),Sl(611,"td",22),rN(612,"-"),og(),Sl(613,"td",23)(614,"em")(615,"strong"),rN(616,"(opcional)"),og()(),Sl(617,"p"),rN(618,"Mensagem que ser\xE1 apresentada quando o "),Sl(619,"code"),rN(620,"pattern"),og(),rN(621," ou a m\xE1scara n\xE3o for satisfeita."),og(),Sl(622,"blockquote")(623,"p"),rN(624,`Por padr\xE3o, esta mensagem n\xE3o \xE9 apresentada quando o campo estiver vazio, mesmo que ele seja requerido.
Para exibir a mensagem com o campo vazio, utilize a propriedade `),Sl(625,"code"),rN(626,"p-required-field-error-message"),og(),rN(627," em conjunto."),og()()()(),Sl(628,"tr",15)(629,"td",16)(630,"div",24)(631,"span",25),rN(632," p-help"),Wl(633,"br"),og()()(),Sl(634,"td",20)(635,"code",26),rN(636,"string"),og()(),Sl(637,"td",22),rN(638,"-"),og(),Sl(639,"td",23)(640,"em")(641,"strong"),rN(642,"(opcional)"),og()(),Sl(643,"p"),rN(644,"Texto de apoio do campo."),og()()(),Sl(645,"tr",15)(646,"td",16)(647,"div",24)(648,"span",25),rN(649," p-hide-password-peek"),Wl(650,"br"),og()()(),Sl(651,"td",20)(652,"code",27),rN(653,"boolean"),og()(),Sl(654,"td",22)(655,"p")(656,"code"),rN(657,"false"),og()()(),Sl(658,"td",23)(659,"em")(660,"strong"),rN(661,"(opcional)"),og()(),Sl(662,"p"),rN(663,"Permite esconder a fun\xE7\xE3o de espiar a senha digitada."),og()()(),Sl(664,"tr",15)(665,"td",16)(666,"div",24)(667,"span",25),rN(668," p-icon"),Wl(669,"br"),og()()(),Sl(670,"td",20)(671,"code",26),rN(672,"string "),og(),Sl(673,"code",29),rN(674," TemplateRef<void>"),og()(),Sl(675,"td",22),rN(676,"-"),og(),Sl(677,"td",23)(678,"em")(679,"strong"),rN(680,"(opcional)"),og()(),Sl(681,"p"),rN(682,"Define o \xEDcone que ser\xE1 exibido no in\xEDcio do campo."),og(),Sl(683,"p"),rN(684,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),Sl(685,"a",30),rN(686,"Biblioteca de \xEDcones"),og(),rN(687,". conforme exemplo abaixo:"),og(),Sl(688,"pre")(689,"code"),rN(690,`<po-input p-icon="an an-user" p-label="PO input"></po-input>
`),og()(),Sl(691,"p"),rN(692,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),Sl(693,"em"),rN(694,"Font Awesome"),og(),rN(695,", da seguinte forma:"),og(),Sl(696,"pre")(697,"code"),rN(698,`<po-input p-icon="fa fa-podcast" p-label="PO input"></po-input>
`),og()(),Sl(699,"p"),rN(700,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),Sl(701,"code"),rN(702,"TemplateRef"),og(),rN(703,", conforme exemplo abaixo:"),og(),Sl(704,"pre")(705,"code"),rN(706,`<po-input [p-icon]="template" p-label="input template ionic"></po-input>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),og()(),Sl(707,"blockquote")(708,"p"),rN(709,"Para o \xEDcone enquadrar corretamente, deve-se utilizar "),Sl(710,"code"),rN(711,"font-size: inherit"),og(),rN(712," caso o \xEDcone utilizado n\xE3o aplique-o."),og()()()(),Sl(713,"tr",15)(714,"td",16)(715,"div",17)(716,"span",18),rN(717," (p-keydown)"),Wl(718,"br"),og()()(),Sl(719,"td",20)(720,"code",21),rN(721,"EventEmitter"),og()(),Sl(722,"td",22),rN(723,"-"),og(),Sl(724,"td",23)(725,"em")(726,"strong"),rN(727,"(opcional)"),og()(),Sl(728,"p"),rN(729,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Sl(730,"code"),rN(731,"KeyboardEvent"),og(),rN(732," com informa\xE7\xF5es sobre a tecla."),og()()(),Sl(733,"tr",15)(734,"td",16)(735,"div",24)(736,"span",25),rN(737," p-label"),Wl(738,"br"),og()()(),Sl(739,"td",20)(740,"code",26),rN(741,"string"),og()(),Sl(742,"td",22),rN(743,"-"),og(),Sl(744,"td",23)(745,"em")(746,"strong"),rN(747,"(opcional)"),og()(),Sl(748,"p"),rN(749,"R\xF3tulo do campo."),og()()(),Sl(750,"tr",15)(751,"td",16)(752,"div",24)(753,"span",25),rN(754," p-label-text-wrap"),Wl(755,"br"),og()()(),Sl(756,"td",20)(757,"code",27),rN(758,"boolean"),og()(),Sl(759,"td",22)(760,"p")(761,"code"),rN(762,"false"),og()()(),Sl(763,"td",23)(764,"em")(765,"strong"),rN(766,"(opcional)"),og()(),Sl(767,"p"),rN(768,"Habilita a quebra autom\xE1tica do texto da propriedade "),Sl(769,"code"),rN(770,"p-label"),og(),rN(771,". Quando "),Sl(772,"code"),rN(773,"p-label-text-wrap"),og(),rN(774,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),og()()(),Sl(775,"tr",15)(776,"td",16)(777,"div",24)(778,"span",25),rN(779," p-loading"),Wl(780,"br"),og()()(),Sl(781,"td",20)(782,"code",27),rN(783,"boolean"),og()(),Sl(784,"td",22)(785,"p")(786,"code"),rN(787,"false"),og()()(),Sl(788,"td",23)(789,"em")(790,"strong"),rN(791,"(opcional)"),og()(),Sl(792,"p"),rN(793,"Exibe um \xEDcone de carregamento no lado direito do campo para sinalizar que uma opera\xE7\xE3o est\xE1 em andamento."),og()()(),Sl(794,"tr",15)(795,"td",16)(796,"div",24)(797,"span",25),rN(798,"p-mask"),Wl(799,"br"),og()()(),Sl(800,"td",20)(801,"code",26),rN(802,"string"),og()(),Sl(803,"td",22),rN(804,"-"),og(),Sl(805,"td",23)(806,"em")(807,"strong"),rN(808,"(opcional)"),og()(),Sl(809,"p"),rN(810,`Indica uma m\xE1scara para o campo. Exemplos: (+99) (99) 99999?-9999, 99999-999, 999.999.999-99.
A m\xE1scara gera uma valida\xE7\xE3o autom\xE1tica do campo, podendo esta ser substitu\xEDda por um REGEX espec\xEDfico
atrav\xE9s da propriedade p-pattern.
O campo ser\xE1 sinalizado e o formul\xE1rio ficar\xE1 inv\xE1lido quando o valor informado estiver fora do padr\xE3o definido,
mesmo quando desabilitado.`),og()()(),Sl(811,"tr",15)(812,"td",16)(813,"div",24)(814,"span",25),rN(815,"p-mask-format-model"),Wl(816,"br"),og()()(),Sl(817,"td",20)(818,"code",27),rN(819,"boolean"),og()(),Sl(820,"td",22)(821,"p")(822,"code"),rN(823,"false"),og()()(),Sl(824,"td",23)(825,"em")(826,"strong"),rN(827,"(opcional)"),og()(),Sl(828,"p"),rN(829,"Indica se o "),Sl(830,"code"),rN(831,"model"),og(),rN(832," receber\xE1 o valor formatado pela m\xE1scara ou apenas o valor puro (sem formata\xE7\xE3o)."),og()()(),Sl(833,"tr",15)(834,"td",16)(835,"div",24)(836,"span",25),rN(837," p-mask-no-length-validation"),Wl(838,"br"),og()()(),Sl(839,"td",20)(840,"code",27),rN(841,"boolean"),og()(),Sl(842,"td",22)(843,"p")(844,"code"),rN(845,"false"),og()()(),Sl(846,"td",23)(847,"p"),rN(848,"Controla como o componente aplica as valida\xE7\xF5es de comprimento m\xEDnimo ("),Sl(849,"code"),rN(850,"minLength"),og(),rN(851,") e m\xE1ximo ("),Sl(852,"code"),rN(853,"maxLength"),og(),rN(854,") quando h\xE1 uma m\xE1scara ("),Sl(855,"code"),rN(856,"p-mask"),og(),rN(857,") definida."),og(),Sl(858,"ul")(859,"li"),rN(860,"Quando "),Sl(861,"code"),rN(862,"true"),og(),rN(863,", apenas os caracteres alfanum\xE9ricos ser\xE3o contabilizados para a valida\xE7\xE3o dos comprimentos."),og(),Sl(864,"li"),rN(865,"Quando "),Sl(866,"code"),rN(867,"false"),og(),rN(868,", todos os caracteres, incluindo os especiais da m\xE1scara, ser\xE3o considerados na valida\xE7\xE3o."),og()(),Sl(869,"blockquote")(870,"p"),rN(871,"Esta propriedade \xE9 ignorada quando utilizada em conjunto com "),Sl(872,"code"),rN(873,"p-mask-format-model"),og(),rN(874,"."),og()(),Sl(875,"p"),rN(876,"Exemplo:"),og(),Sl(877,"pre")(878,"code"),rN(879,`<po-input
  p-mask="999-999"
  p-maxlength="6"
  p-minlength="4"
  p-mask-no-length-validation="true"
></po-input>
`),og()(),Sl(880,"ul")(881,"li"),rN(882,"Entrada: "),Sl(883,"code"),rN(884,"123-456"),og(),rN(885," \u2192 Valida\xE7\xE3o ser\xE1 aplicada somente aos n\xFAmeros, ignorando o caractere especial "),Sl(886,"code"),rN(887,"-"),og(),rN(888,"."),og()()()(),Sl(889,"tr",15)(890,"td",16)(891,"div",24)(892,"span",25),rN(893," p-maxlength"),Wl(894,"br"),og()()(),Sl(895,"td",20)(896,"code",31),rN(897,"number"),og()(),Sl(898,"td",22),rN(899,"-"),og(),Sl(900,"td",23)(901,"em")(902,"strong"),rN(903,"(opcional)"),og()(),Sl(904,"p"),rN(905,"Indica a quantidade m\xE1xima de caracteres que o campo aceita."),og()()(),Sl(906,"tr",15)(907,"td",16)(908,"div",24)(909,"span",25),rN(910," p-minlength"),Wl(911,"br"),og()()(),Sl(912,"td",20)(913,"code",31),rN(914,"number"),og()(),Sl(915,"td",22),rN(916,"-"),og(),Sl(917,"td",23)(918,"em")(919,"strong"),rN(920,"(opcional)"),og()(),Sl(921,"p"),rN(922,"Indica a quantidade m\xEDnima de caracteres que o campo aceita."),og()()(),Sl(923,"tr",15)(924,"td",16)(925,"div",24)(926,"span",25),rN(927," name"),Wl(928,"br"),og()()(),Sl(929,"td",20)(930,"code",26),rN(931,"string"),og()(),Sl(932,"td",22),rN(933,"-"),og(),Sl(934,"td",23)(935,"p"),rN(936,"Nome e identificador do campo."),og()()(),Sl(937,"tr",15)(938,"td",16)(939,"div",24)(940,"span",25),rN(941," p-no-autocomplete"),Wl(942,"br"),og()()(),Sl(943,"td",20)(944,"code",27),rN(945,"boolean"),og()(),Sl(946,"td",22)(947,"p")(948,"code"),rN(949,"false"),og()()(),Sl(950,"td",23)(951,"em")(952,"strong"),rN(953,"(opcional)"),og()(),Sl(954,"p"),rN(955,"Define a propriedade nativa "),Sl(956,"code"),rN(957,"autocomplete"),og(),rN(958," do campo como "),Sl(959,"code"),rN(960,"off"),og(),rN(961,"."),og(),Sl(962,"blockquote")(963,"p"),rN(964,"No componente "),Sl(965,"code"),rN(966,"po-password"),og(),rN(967," ser\xE1 definido como "),Sl(968,"code"),rN(969,"new-password"),og(),rN(970,"."),og()(),Sl(971,"p"),rN(972,"Nos componentes "),Sl(973,"code"),rN(974,"po-password"),og(),rN(975," e "),Sl(976,"code"),rN(977,"po-login"),og(),rN(978," o valor padr\xE3o ser\xE1 "),Sl(979,"code"),rN(980,"true"),og(),rN(981,"."),og()()(),Sl(982,"tr",15)(983,"td",16)(984,"div",24)(985,"span",25),rN(986," p-optional"),Wl(987,"br"),og()()(),Sl(988,"td",20)(989,"code",27),rN(990,"boolean"),og()(),Sl(991,"td",22)(992,"p")(993,"code"),rN(994,"false"),og()()(),Sl(995,"td",23)(996,"em")(997,"strong"),rN(998,"(opcional)"),og()(),Sl(999,"p"),rN(1e3,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),og(),Sl(1001,"blockquote")(1002,"p"),rN(1003,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),og()(),Sl(1004,"ul")(1005,"li"),rN(1006,"O campo conter "),Sl(1007,"code"),rN(1008,"p-required"),og(),rN(1009,";"),og(),Sl(1010,"li"),rN(1011,"N\xE3o possuir "),Sl(1012,"code"),rN(1013,"p-help"),og(),rN(1014," e/ou "),Sl(1015,"code"),rN(1016,"p-label"),og(),rN(1017,"."),og()()()(),Sl(1018,"tr",15)(1019,"td",16)(1020,"div",24)(1021,"span",25),rN(1022,"p-pattern"),Wl(1023,"br"),og()()(),Sl(1024,"td",20)(1025,"code",26),rN(1026,"string"),og()(),Sl(1027,"td",22),rN(1028,"-"),og(),Sl(1029,"td",23)(1030,"em")(1031,"strong"),rN(1032,"(opcional)"),og()(),Sl(1033,"p"),rN(1034,`Express\xE3o regular para validar o campo.
Quando o campo possuir uma m\xE1scara `),Sl(1035,"code"),rN(1036,"(p-mask)"),og(),rN(1037,` ser\xE1 automaticamente validado por ela, por\xE9m
\xE9 poss\xEDvel definir um p-pattern para substituir a valida\xE7\xE3o da m\xE1scara.`),og()()(),Sl(1038,"tr",15)(1039,"td",16)(1040,"div",24)(1041,"span",25),rN(1042," p-placeholder"),Wl(1043,"br"),og()()(),Sl(1044,"td",20)(1045,"code",26),rN(1046,"string"),og()(),Sl(1047,"td",22)(1048,"p"),rN(1049,"''"),og()(),Sl(1050,"td",23)(1051,"em")(1052,"strong"),rN(1053,"(opcional)"),og()(),Sl(1054,"p"),rN(1055,"Mensagem que aparecer\xE1 enquanto o campo n\xE3o estiver preenchido."),og()()(),Sl(1056,"tr",15)(1057,"td",16)(1058,"div",24)(1059,"span",25),rN(1060," p-helper"),Wl(1061,"br"),og()()(),Sl(1062,"td",20)(1063,"code",32),rN(1064,"PoHelperOptions "),og(),Sl(1065,"code",26),rN(1066," string"),og()(),Sl(1067,"td",22),rN(1068,"-"),og(),Sl(1069,"td",23)(1070,"em")(1071,"strong"),rN(1072,"(opcional)"),og()(),Sl(1073,"p"),rN(1074,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label quando a propriedade "),Sl(1075,"code"),rN(1076,"p-label"),og(),rN(1077," for definida, ou, ao lado do componente na aus\xEAncia da propriedade "),Sl(1078,"code"),rN(1079,"p-label"),og(),rN(1080,"."),og(),Sl(1081,"blockquote")(1082,"p"),rN(1083,"Para mais informa\xE7\xF5es acesse: "),Sl(1084,"a",33),rN(1085,"https://po-ui.io/documentation/po-helper"),og(),rN(1086,"."),og()(),Sl(1087,"blockquote")(1088,"p"),rN(1089,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),Sl(1090,"code"),rN(1091,"p-additional-help-tooltip"),og(),rN(1092," e "),Sl(1093,"code"),rN(1094,"p-additional-help"),og(),rN(1095,") ser\xE1 ignorado."),og()()()(),Sl(1096,"tr",15)(1097,"td",16)(1098,"div",24)(1099,"span",25),rN(1100,"p-readonly"),Wl(1101,"br"),og()()(),Sl(1102,"td",20)(1103,"code",27),rN(1104,"boolean"),og()(),Sl(1105,"td",22),rN(1106,"-"),og(),Sl(1107,"td",23)(1108,"em")(1109,"strong"),rN(1110,"(opcional)"),og()(),Sl(1111,"p"),rN(1112,"Indica que o campo ser\xE1 somente leitura."),og()()(),Sl(1113,"tr",15)(1114,"td",16)(1115,"div",24)(1116,"span",25),rN(1117,"p-required"),Wl(1118,"br"),og()()(),Sl(1119,"td",20)(1120,"code",27),rN(1121,"boolean"),og()(),Sl(1122,"td",22)(1123,"p")(1124,"code"),rN(1125,"false"),og()()(),Sl(1126,"td",23)(1127,"em")(1128,"strong"),rN(1129,"(opcional)"),og()(),Sl(1130,"p"),rN(1131,"Define que o campo ser\xE1 obrigat\xF3rio."),og(),Sl(1132,"blockquote")(1133,"p"),rN(1134,"Esta propriedade \xE9 desconsiderada quando o input est\xE1 desabilitado "),Sl(1135,"code"),rN(1136,"(p-disabled)"),og(),rN(1137,"."),og()()()(),Sl(1138,"tr",15)(1139,"td",16)(1140,"div",24)(1141,"span",25),rN(1142," p-required-field-error-message"),Wl(1143,"br"),og()()(),Sl(1144,"td",20)(1145,"code",27),rN(1146,"boolean"),og()(),Sl(1147,"td",22)(1148,"p")(1149,"code"),rN(1150,"false"),og()()(),Sl(1151,"td",23)(1152,"em")(1153,"strong"),rN(1154,"(opcional)"),og()(),Sl(1155,"p"),rN(1156,"Exibe a mensagem setada na propriedade "),Sl(1157,"code"),rN(1158,"p-error-pattern"),og(),rN(1159," se o campo estiver vazio e for requerido."),og(),Sl(1160,"blockquote")(1161,"p"),rN(1162,"Necess\xE1rio que a propriedade "),Sl(1163,"code"),rN(1164,"p-required"),og(),rN(1165," esteja habilitada."),og()()()(),Sl(1166,"tr",15)(1167,"td",16)(1168,"div",24)(1169,"span",25),rN(1170," p-show-required"),Wl(1171,"br"),og()()(),Sl(1172,"td",20)(1173,"code",27),rN(1174,"boolean"),og()(),Sl(1175,"td",22),rN(1176,"-"),og(),Sl(1177,"td",23)(1178,"p"),rN(1179,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),og(),Sl(1180,"blockquote")(1181,"p"),rN(1182,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),og()(),Sl(1183,"ul")(1184,"li"),rN(1185,"N\xE3o possuir "),Sl(1186,"code"),rN(1187,"p-help"),og(),rN(1188," e/ou "),Sl(1189,"code"),rN(1190,"p-label"),og(),rN(1191,"."),og()()()(),Sl(1192,"tr",15)(1193,"td",16)(1194,"div",24)(1195,"span",25),rN(1196," p-size"),Wl(1197,"br"),og()()(),Sl(1198,"td",20)(1199,"code",26),rN(1200,"string"),og()(),Sl(1201,"td",22)(1202,"p")(1203,"code"),rN(1204,"medium"),og()()(),Sl(1205,"td",23)(1206,"em")(1207,"strong"),rN(1208,"(opcional)"),og()(),Sl(1209,"p"),rN(1210,"Define o tamanho do componente:"),og(),Sl(1211,"ul")(1212,"li")(1213,"code"),rN(1214,"small"),og(),rN(1215,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),og(),Sl(1216,"li")(1217,"code"),rN(1218,"medium"),og(),rN(1219,": altura do input como 44px."),og()(),Sl(1220,"blockquote")(1221,"p"),rN(1222,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Sl(1223,"code"),rN(1224,"medium"),og(),rN(1225,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Sl(1226,"a",34),rN(1227,"po-theme"),og(),rN(1228,"."),og()()()(),Sl(1229,"tr",15)(1230,"td",16)(1231,"div",24)(1232,"span",25),rN(1233," p-upper-case"),Wl(1234,"br"),og()()(),Sl(1235,"td",20)(1236,"code",27),rN(1237,"boolean"),og()(),Sl(1238,"td",22),rN(1239,"-"),og(),Sl(1240,"td",23)(1241,"p"),rN(1242,"Converte o conte\xFAdo do campo em mai\xFAsulo automaticamente."),og()()()(),Sl(1243,"h3",11),rN(1244,"M\xE9todos"),og(),Sl(1245,"table",35)(1246,"tr",15)(1247,"th",36)(1248,"div",24)(1249,"h4")(1250,"span",25),rN(1251," showAdditionalHelp "),og()()()()(),Sl(1252,"tr",23)(1253,"td",23)(1254,"p"),rN(1255,"M\xE9todo que exibe "),Sl(1256,"code"),rN(1257,"p-helper"),og(),rN(1258," ou executa a a\xE7\xE3o definida em "),Sl(1259,"code"),rN(1260,"p-helper{eventOnClick}"),og(),rN(1261," ou em "),Sl(1262,"code"),rN(1263,"p-additionalHelp"),og(),rN(1264,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Sl(1265,"code"),rN(1266,"p-keydown"),og(),rN(1267,"."),og(),Sl(1268,"blockquote")(1269,"p"),rN(1270,"Exibe ou oculta o conte\xFAdo do componente "),Sl(1271,"code"),rN(1272,"po-helper"),og(),rN(1273," quando o componente estiver com foco."),og()(),Sl(1274,"pre")(1275,"code"),rN(1276,`// Exemplo com p-label e p-helper
<po-nome-component
 #component
 ...
 p-label="Label do componente"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, component)"
></po-nome-component>
`),og()(),Sl(1277,"pre")(1278,"code"),rN(1279,`...
onKeyDown(event: KeyboardEvent, inp: PoNomeDoComponente): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),og()()()()(),Wl(1280,"br"),Sl(1281,"table",35)(1282,"tr",15)(1283,"th",36)(1284,"div",24)(1285,"h4")(1286,"span",25),rN(1287," focus "),og()()()()(),Sl(1288,"tr",23)(1289,"td",23)(1290,"p"),rN(1291,"Fun\xE7\xE3o que atribui foco ao componente."),og(),Sl(1292,"p"),rN(1293,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),og(),Sl(1294,"pre")(1295,"code"),rN(1296,`import { PoNomeDoComponenteComponent } from '@po-ui/ng-components';

...

@ViewChild(PoNomeDoComponenteComponent, { static: true }) nomeDoComponente: PoNomeDoComponenteComponent;

focusComponent() {
  this.nomeDoComponente.focus();
}
`),og()()()()(),Wl(1297,"br"),Sl(1298,"h3"),rN(1299,"Interfaces"),og(),Sl(1300,"h4",37)(1301,"code",5),rN(1302,"ErrorAsyncProperties"),og()(),Sl(1303,"div",2)(1304,"p"),rN(1305,"Interface para realizar uma valida\xE7\xE3o ass\xEDncrona no componente."),og()(),Sl(1306,"h4",11),rN(1307,"Propriedades"),og(),Sl(1308,"table",12)(1309,"tr",13)(1310,"th",14),rN(1311,"Nome"),og(),Sl(1312,"th",14),rN(1313,"Tipo"),og(),Sl(1314,"th",14),rN(1315,"Descri\xE7\xE3o"),og()(),Sl(1316,"tr",15)(1317,"td",16)(1318,"div",24)(1319,"span",25),rN(1320," errorAsync"),Wl(1321,"br"),og()()(),Sl(1322,"td",20)(1323,"code",38),rN(1324,"(value) => Observable<boolean>"),og()(),Sl(1325,"td",23)(1326,"p"),rN(1327,`Fun\xE7\xE3o obrigat\xF3ria executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),Sl(1328,"code"),rN(1329,"change"),og(),rN(1330," ou "),Sl(1331,"code"),rN(1332,"change-model"),og(),rN(1333,", dependendo do valor da propriedade "),Sl(1334,"code"),rN(1335,"triggerMode"),og(),rN(1336,"."),og()()(),Sl(1337,"tr",15)(1338,"td",16)(1339,"div",24)(1340,"span",25),rN(1341," triggerMode"),Wl(1342,"br"),og()()(),Sl(1343,"td",20)(1344,"code",39),rN(1345,"'change' "),og(),Sl(1346,"code",40),rN(1347," 'changeModel'"),og()(),Sl(1348,"td",23)(1349,"em")(1350,"strong"),rN(1351,"(opcional)"),og()(),Sl(1352,"p"),rN(1353,"Controla se o m\xE9todo ser\xE1 executado no disparo do output "),Sl(1354,"code"),rN(1355,"change"),og(),rN(1356," ou "),Sl(1357,"code"),rN(1358,"change-model"),og(),rN(1359,"."),og()()()()());},dependencies:[Ka],encapsulation:2,changeDetection:1})}return a})();var ce=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(p,l){this.route=p,this.router=l;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let l=p.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:"merge"}),this.activeTab=p;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(l){return new(l||a)(w(Xn),w(En))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Password",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,i){l&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return i.changeTab("doc")}),Wl(3,"sample-po-password-doc"),og(),Sl(4,"po-tab",3),ft("p-click",function(){return i.changeTab("web")}),Wl(5,"sample-po-password-basic-view")(6,"sample-po-password-labs-view")(7,"sample-po-password-reset-view"),og()()()),l&2&&(rw("p-actions",i.actions),Lp(2),rw("p-active",i.activeTab==="doc"),Lp(2),rw("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[sNe,Ume,$me,re,de,me,se],encapsulation:2,changeDetection:1})}return a})();var ye=[{path:"",component:ce}],ue=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=fe({type:a});static \u0275inj=ue$1({imports:[mL.forChild(ye),mL]})}return a})();var $e=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=fe({type:a});static \u0275inj=ue$1({imports:[sr,ue]})}return a})();export{$e as DocPoPasswordModule};