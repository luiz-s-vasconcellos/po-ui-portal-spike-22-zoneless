import {f as fe,u as ue$1,s as sr,h as hL,w,c3 as Xn,E as En,U as Un,a as f,aW as Yp,cY as Mz,H as Wl,an as CO,aH as Ka,b8 as Bme,b9 as qme,F as Sl,z as eN,J as og,a1 as ft,L as Lp,ar as $x,au as dg,Q as nw,bs as fN,aX as Z9,aF as G9,aY as q9,aG as _k,aZ as mk,b0 as Qt,b1 as mv,c4 as b3,b4 as L3,cp as Rhe,c8 as wde,c9 as Ghe,aB as wx,aM as ww,aN as e0,aO as Ew,aP as n0,cZ as Nhe,b6 as Yo,av as ql,aw as lo,ax as uo,a3 as rNe,aD as Ky,aT as nN,aE as Xy}from'./main-WP3NAV7C.js';var re=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-login-basic"]],standalone:false,decls:1,vars:0,consts:[["name","login","p-label","PO Login"]],template:function(l,i){l&1&&Wl(0,"po-login",0);},dependencies:[Mz],encapsulation:2,changeDetection:1})}return a})();var be=a=>({"docs-sample-code-tabs":a}),de=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-login-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Login Basic"),og(),Sl(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-login-basic/sample-po-login-basic.component.html"),og(),Sl(13,"pre",7),eN(14,`<po-login name="login" p-label="PO Login"> </po-login>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-login-basic/sample-po-login-basic.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-login-basic',
  templateUrl: './sample-po-login-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoLoginBasicComponent {}
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-login-basic"),og(),Wl(23,"hr")),l&2&&(Lp(5),$x("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,be,i.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,re],encapsulation:2})}return a})();var pe=(()=>{class a{helperText;errorPattern;event;help;label;login;maxlength;minlength;pattern;placeholder;properties;size;propertiesOptions=[{value:"clean",label:"Clean"},{value:"disabled",label:"Disabled"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"},{value:"compactLabel",label:"Compact Label"},{value:"loading",label:"Loading"},{value:"noAutocomplete",label:"No Autocomplete"},{value:"optional",label:"Optional"},{value:"readonly",label:"Read Only"},{value:"required",label:"Required"},{value:"requiredFieldErrorMessage",label:"Required Field Error Message"},{value:"showRequired",label:"Show Required"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore();}changeEvent(d){this.event=d;}restore(){this.helperText="",this.errorPattern="",this.event="",this.label=void 0,this.login="",this.help=void 0,this.maxlength=void 0,this.minlength=void 0,this.pattern="",this.placeholder="",this.properties=[],this.size="medium";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-login-labs"]],standalone:false,decls:20,vars:36,consts:[["f","ngForm"],["name","login",3,"ngModelChange","p-blur","p-change","p-change-model","p-enter","p-keydown","ngModel","p-helper","p-clean","p-disabled","p-error-pattern","p-help","p-label","p-loading","p-maxlength","p-minlength","p-no-autocomplete","p-optional","p-pattern","p-placeholder","p-readonly","p-required","p-required-field-error-message","p-show-required","p-size","p-label-text-wrap","p-compact-label","p-error-limit"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","pattern","p-clean","","p-help","Ex.: '[a-zA]{5}[Z0-9]{3}'","p-label","Pattern (Regex)",1,"po-md-6",3,"ngModelChange","ngModel"],["name","errorPattern","p-clean","","p-help","Ex.: Required field","p-label","Error pattern",1,"po-md-6",3,"ngModelChange","ngModel"],["name","minlength","p-clean","","p-label","Min length",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","maxlength","p-clean","","p-label","Max length",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(l,i){if(l&1){let s=wx();Sl(0,"po-login",1),ww("ngModelChange",function(r){return Ky(s),nN(i.login,r)||(i.login=r),Xy(r)}),ft("p-blur",function(){return i.changeEvent("p-blur")})("p-change",function(){return i.changeEvent("p-change")})("p-change-model",function(){return i.changeEvent("p-change-model")})("p-enter",function(){return i.changeEvent("p-enter")})("p-keydown",function(){return i.changeEvent("p-keydown")}),og(),e0(),Wl(1,"po-divider"),Sl(2,"div",2),Wl(3,"po-info",3)(4,"po-info",4),og(),Wl(5,"po-divider"),Sl(6,"form",null,0)(8,"po-input",5),ww("ngModelChange",function(r){return Ky(s),nN(i.label,r)||(i.label=r),Xy(r)}),og(),e0(),Sl(9,"po-input",6),ww("ngModelChange",function(r){return Ky(s),nN(i.help,r)||(i.help=r),Xy(r)}),og(),e0(),Sl(10,"po-input",7),ww("ngModelChange",function(r){return Ky(s),nN(i.placeholder,r)||(i.placeholder=r),Xy(r)}),og(),e0(),Sl(11,"po-input",8),ww("ngModelChange",function(r){return Ky(s),nN(i.helperText,r)||(i.helperText=r),Xy(r)}),og(),e0(),Sl(12,"po-input",9),ww("ngModelChange",function(r){return Ky(s),nN(i.pattern,r)||(i.pattern=r),Xy(r)}),og(),e0(),Sl(13,"po-input",10),ww("ngModelChange",function(r){return Ky(s),nN(i.errorPattern,r)||(i.errorPattern=r),Xy(r)}),og(),e0(),Sl(14,"po-number",11),ww("ngModelChange",function(r){return Ky(s),nN(i.minlength,r)||(i.minlength=r),Xy(r)}),og(),e0(),Sl(15,"po-number",12),ww("ngModelChange",function(r){return Ky(s),nN(i.maxlength,r)||(i.maxlength=r),Xy(r)}),og(),e0(),Sl(16,"po-checkbox-group",13),ww("ngModelChange",function(r){return Ky(s),nN(i.properties,r)||(i.properties=r),Xy(r)}),og(),e0(),Sl(17,"po-radio-group",14),ww("ngModelChange",function(r){return Ky(s),nN(i.size,r)||(i.size=r),Xy(r)}),og(),e0(),Sl(18,"div",2)(19,"po-button",15),ft("p-click",function(){return i.restore()}),og()()();}l&2&&(Ew("ngModel",i.login),nw("p-helper",i.helperText)("p-clean",i.properties.includes("clean"))("p-disabled",i.properties.includes("disabled"))("p-error-pattern",i.errorPattern)("p-help",i.help)("p-label",i.label)("p-loading",i.properties==null?null:i.properties.includes("loading"))("p-maxlength",i.maxlength)("p-minlength",i.minlength)("p-no-autocomplete",i.properties==null?null:i.properties.includes("noAutocomplete"))("p-optional",i.properties.includes("optional"))("p-pattern",i.pattern)("p-placeholder",i.placeholder)("p-readonly",i.properties.includes("readonly"))("p-required",i.properties.includes("required"))("p-required-field-error-message",i.properties.includes("requiredFieldErrorMessage"))("p-show-required",i.properties.includes("showRequired"))("p-size",i.size)("p-label-text-wrap",i.properties==null?null:i.properties.includes("labelTextWrap"))("p-compact-label",i.properties==null?null:i.properties.includes("compactLabel"))("p-error-limit",i.properties==null?null:i.properties.includes("errorLimit")),n0(),Lp(3),nw("p-value",i.login),Lp(),nw("p-value",i.event),Lp(4),Ew("ngModel",i.label),n0(),Lp(),Ew("ngModel",i.help),n0(),Lp(),Ew("ngModel",i.placeholder),n0(),Lp(),Ew("ngModel",i.helperText),n0(),Lp(),Ew("ngModel",i.pattern),n0(),Lp(),Ew("ngModel",i.errorPattern),n0(),Lp(),Ew("ngModel",i.minlength),n0(),Lp(),Ew("ngModel",i.maxlength),n0(),Lp(),Ew("ngModel",i.properties),nw("p-options",i.propertiesOptions),n0(),Lp(),Ew("ngModel",i.size),nw("p-options",i.sizeOptions),n0());},dependencies:[Z9,G9,q9,_k,mk,Qt,mv,b3,L3,Mz,Rhe,wde,Ghe],encapsulation:2,changeDetection:1})}return a})();var Ce=a=>({"docs-sample-code-tabs":a}),se=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-login-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Login Labs"),og(),Sl(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-login-labs/sample-po-login-labs.component.html"),og(),Sl(13,"pre",7),eN(14,`<po-login
  name="login"
  [(ngModel)]="login"
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
  [p-pattern]="pattern"
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
</po-login>

<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="login"> </po-info>

  <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
</div>

<po-divider />

<form #f="ngForm">
  <po-input class="po-md-6 po-lg-4" name="label" [(ngModel)]="label" p-clean p-label="Label"> </po-input>

  <po-input class="po-md-6 po-lg-4" name="help" [(ngModel)]="help" p-clean p-label="Help"> </po-input>

  <po-input class="po-md-6 po-lg-4" name="placeholder" [(ngModel)]="placeholder" p-clean p-label="Placeholder">
  </po-input>

  <po-input class="po-md-6" name="helperText" [(ngModel)]="helperText" p-clean p-label="Additional Help"> </po-input>

  <po-input
    class="po-md-6"
    name="pattern"
    [(ngModel)]="pattern"
    p-clean
    p-help="Ex.: '[a-zA]{5}[Z0-9]{3}'"
    p-label="Pattern (Regex)"
  >
  </po-input>

  <po-input
    class="po-md-6"
    name="errorPattern"
    [(ngModel)]="errorPattern"
    p-clean
    p-help="Ex.: Required field"
    p-label="Error pattern"
  >
  </po-input>

  <po-number class="po-md-6 po-lg-3" name="minlength" [(ngModel)]="minlength" p-clean p-label="Min length"> </po-number>

  <po-number class="po-md-6 po-lg-3" name="maxlength" [(ngModel)]="maxlength" p-clean p-label="Max length"> </po-number>

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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-login-labs/sample-po-login-labs.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { PoCheckboxGroupOption, PoRadioGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-login-labs',
  templateUrl: './sample-po-login-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoLoginLabsComponent implements OnInit {
  helperText: string;
  errorPattern: string;
  event: string;
  help: string;
  label: string;
  login: string;
  maxlength: number;
  minlength: number;
  pattern: string;
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
    this.errorPattern = '';
    this.event = '';

    this.label = undefined;
    this.login = '';

    this.help = undefined;

    this.maxlength = undefined;
    this.minlength = undefined;

    this.pattern = '';
    this.placeholder = '';
    this.properties = [];
    this.size = 'medium';
  }
}
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-login-labs"),og(),Wl(23,"hr")),l&2&&(Lp(5),$x("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,Ce,i.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,pe],encapsulation:2})}return a})();var ce=(()=>{class a{poNotification=f(Yp);poModal;userLogin;userPassword;primaryAction={label:"Confirm",action:()=>{this.confirmAction();}};openModal(){this.poModal.open();}cleanForm(){this.userLogin="",this.userPassword="";}confirmAction(){this.userLogin&&this.userPassword&&(this.poNotification.success(`Discount successfully applied to user ${this.userLogin}!`),this.poModal.close(),this.cleanForm());}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-login-confirm"]],viewQuery:function(l,i){if(l&1&&ql(Yo,7),l&2){let s;lo(s=uo())&&(i.poModal=s.first);}},standalone:false,decls:7,vars:3,consts:[[1,"po-text-center"],[1,"po-font-subtitle"],["p-label","Confirm Identity",3,"p-click"],["p-hide-close","true","p-size","auto","p-title","Confirm your identity",3,"p-primary-action"],["name","userLogin","p-clean","","p-label","User","p-maxlength","40","p-placeholder","domain\\user","p-required","",3,"ngModelChange","ngModel"],["name","userPassword","p-clean","","p-label","Password","p-placeholder","Enter your password","p-required","",3,"ngModelChange","ngModel"]],template:function(l,i){l&1&&(Sl(0,"div",0)(1,"div",1),eN(2," To gain a 25% discount on your purchases, confirm your identity with your username and password! "),og(),Sl(3,"po-button",2),ft("p-click",function(){return i.openModal()}),og()(),Sl(4,"po-modal",3)(5,"po-login",4),ww("ngModelChange",function(p){return nN(i.userLogin,p)||(i.userLogin=p),p}),og(),e0(),Sl(6,"po-password",5),ww("ngModelChange",function(p){return nN(i.userPassword,p)||(i.userPassword=p),p}),og(),e0(),og()),l&2&&(Lp(4),nw("p-primary-action",i.primaryAction),Lp(),Ew("ngModel",i.userLogin),n0(),Lp(),Ew("ngModel",i.userPassword),n0());},dependencies:[G9,_k,Qt,Mz,Nhe,Yo],encapsulation:2,changeDetection:1})}return a})();var we=a=>({"docs-sample-code-tabs":a}),ue=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-login-confirm-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Login - Confirm Identity"),og(),Sl(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-login-confirm/sample-po-login-confirm.component.html"),og(),Sl(13,"pre",7),eN(14,`<div class="po-text-center">
  <div class="po-font-subtitle">
    To gain a 25% discount on your purchases, confirm your identity with your username and password!
  </div>

  <po-button p-label="Confirm Identity" (p-click)="openModal()"> </po-button>
</div>

<po-modal p-hide-close="true" p-size="auto" p-title="Confirm your identity" [p-primary-action]="primaryAction">
  <po-login
    name="userLogin"
    [(ngModel)]="userLogin"
    p-clean
    p-label="User"
    p-maxlength="40"
    p-placeholder="domain\\user"
    p-required
  >
  </po-login>

  <po-password
    name="userPassword"
    [(ngModel)]="userPassword"
    p-clean
    p-label="Password"
    p-placeholder="Enter your password"
    p-required
  >
  </po-password>
</po-modal>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-login-confirm/sample-po-login-confirm.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';

import { PoModalAction, PoModalComponent } from '@po-ui/ng-components';
import { PoNotificationService } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-login-confirm',
  templateUrl: './sample-po-login-confirm.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoLoginConfirmComponent {
  private poNotification = inject(PoNotificationService);

  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;

  userLogin: string;
  userPassword: string;

  primaryAction: PoModalAction = {
    label: 'Confirm',
    action: () => {
      this.confirmAction();
    }
  };

  openModal() {
    this.poModal.open();
  }

  private cleanForm() {
    this.userLogin = '';
    this.userPassword = '';
  }

  private confirmAction() {
    if (this.userLogin && this.userPassword) {
      this.poNotification.success(\`Discount successfully applied to user \${this.userLogin}!\`);

      this.poModal.close();
      this.cleanForm();
    }
  }
}
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-login-confirm"),og(),Wl(23,"hr")),l&2&&(Lp(5),$x("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,we,i.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,ce],encapsulation:2})}return a})();var Ee=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-login-doc"]],standalone:false,decls:1341,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/grid-system"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","ErrorAsyncProperties"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-helper"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","(value)","=>","Observable<boolean>"],["pan","",1,"docs-api-property-type","'change'"],["pan","",1,"docs-api-property-type","'changeModel'"]],template:function(l,i){l&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),eN(3,"import { PoFieldModule } from '@po-ui/ng-components';"),og()(),Sl(4,"div",2)(5,"p"),eN(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),og(),Sl(7,"blockquote")(8,"p"),eN(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),Sl(10,"code"),eN(11,"FormsModule"),og(),eN(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Sl(13,"code"),eN(14,"ReactiveFormsModule"),og(),eN(15,", ambos nativos do Angular."),og()()(),Sl(16,"h3",3),eN(17,"Componente"),og(),Sl(18,"h4",4)(19,"code",5),eN(20,"PoLoginComponent"),og()(),Sl(21,"div",2)(22,"p"),eN(23,`Este \xE9 um componente baseado em input, com v\xE1rias propriedades do input nativo e outras
propriedades extras como: m\xE1scara, pattern, mensagem de erro e etc.
Voc\xEA deve informar a vari\xE1vel que cont\xE9m o valor como [(ngModel)]="variavel", para que o
input receba o valor da vari\xE1vel e para que ela receba as altera\xE7\xF5es do valor (two-way-databinding).
A propriedade name \xE9 obrigat\xF3ria para que o formul\xE1rio e o model funcionem corretamente.`),og(),Sl(24,"p"),eN(25,"Importante:"),og(),Sl(26,"ul")(27,"li"),eN(28,`Caso o input tenha um [(ngModel)] sem o atributo name, ocorrer\xE1 um erro de angular.
Ent\xE3o voc\xEA precisa informar o atributo name ou o atributo [ngModelOptions]="{standalone: true}".
Exemplo: [(ngModel)]="pessoa.nome" [ngModelOptions]="{standalone: true}".`),og()(),Sl(29,"h4"),eN(30,"Tokens customiz\xE1veis"),og(),Sl(31,"p"),eN(32,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS): "),Wl(33,"br"),eN(34,`
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),Sl(35,"code"),eN(36,".po-input"),og()(),Sl(37,"blockquote")(38,"p"),eN(39,"Para correto alinhamento \xE9 recomendado o uso das classes de espa\xE7amento do "),Sl(40,"a",6),eN(41,"Grid System"),og(),eN(42,"."),og()(),Sl(43,"blockquote")(44,"p"),eN(45,"Para maiores informa\xE7\xF5es, acesse o guia "),Sl(46,"a",7),eN(47,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),eN(48,"."),og()(),Sl(49,"table")(50,"thead")(51,"tr")(52,"th"),eN(53,"Propriedade"),og(),Sl(54,"th"),eN(55,"Descri\xE7\xE3o"),og(),Sl(56,"th"),eN(57,"Valor Padr\xE3o"),og()()(),Sl(58,"tbody")(59,"tr")(60,"td")(61,"strong"),eN(62,"Default Values"),og()(),Wl(63,"td")(64,"td"),og(),Sl(65,"tr")(66,"td")(67,"code"),eN(68,"--font-family"),og()(),Sl(69,"td"),eN(70,"Fam\xEDlia tipogr\xE1fica usada"),og(),Sl(71,"td")(72,"code"),eN(73,"var(--font-family-theme)"),og()()(),Sl(74,"tr")(75,"td")(76,"code"),eN(77,"--font-size"),og()(),Sl(78,"td"),eN(79,"Tamanho da fonte"),og(),Sl(80,"td")(81,"code"),eN(82,"var(--font-size-default)"),og()()(),Sl(83,"tr")(84,"td")(85,"code"),eN(86,"--text-color-placeholder"),og()(),Sl(87,"td"),eN(88,"Cor do texto placeholder"),og(),Sl(89,"td")(90,"code"),eN(91,"var(--color-neutral-light-30)"),og()()(),Sl(92,"tr")(93,"td")(94,"code"),eN(95,"--color"),og()(),Sl(96,"td"),eN(97,"Cor pincipal do input"),og(),Sl(98,"td")(99,"code"),eN(100,"var(--color-neutral-dark-70)"),og()()(),Sl(101,"tr")(102,"td")(103,"code"),eN(104,"--background"),og()(),Sl(105,"td"),eN(106,"Cor de background"),og(),Sl(107,"td")(108,"code"),eN(109,"var(--color-neutral-light-05)"),og()()(),Sl(110,"tr")(111,"td")(112,"code"),eN(113,"--padding"),og()(),Sl(114,"td"),eN(115,"Preenchimento"),og(),Sl(116,"td")(117,"code"),eN(118,"0 0.5rem"),og()()(),Sl(119,"tr")(120,"td")(121,"code"),eN(122,"--text-color"),og()(),Sl(123,"td"),eN(124,"Cor do texto"),og(),Sl(125,"td")(126,"code"),eN(127,"var(--color-neutral-dark-90)"),og()()(),Sl(128,"tr")(129,"td")(130,"code"),eN(131,"--field-container-title-justify"),og()(),Sl(132,"td"),eN(133,"Alinhamento horizontal do t\xEDtulo ("),Sl(134,"code"),eN(135,"justify-content"),og(),eN(136,")"),og(),Sl(137,"td")(138,"code"),eN(139,"space-between"),og()()(),Sl(140,"tr")(141,"td")(142,"code"),eN(143,"--field-container-title-flex"),og()(),Sl(144,"td"),eN(145,"Flex do t\xEDtulo ("),Sl(146,"code"),eN(147,"flex"),og(),eN(148,")"),og(),Sl(149,"td")(150,"code"),eN(151,"1 auto"),og()()(),Sl(152,"tr")(153,"td")(154,"strong"),eN(155,"Hover"),og()(),Wl(156,"td")(157,"td"),og(),Sl(158,"tr")(159,"td")(160,"code"),eN(161,"--color-hover"),og()(),Sl(162,"td"),eN(163,"Cor principal no estado hover"),og(),Sl(164,"td")(165,"code"),eN(166,"var(--color-brand-01-dark)"),og()()(),Sl(167,"tr")(168,"td")(169,"code"),eN(170,"--background-hover"),og()(),Sl(171,"td"),eN(172,"Cor de background no estado hover"),og(),Sl(173,"td")(174,"code"),eN(175,"var(--color-brand-01-lightest)"),og()()(),Sl(176,"tr")(177,"td")(178,"strong"),eN(179,"Focused"),og()(),Wl(180,"td")(181,"td"),og(),Sl(182,"tr")(183,"td")(184,"code"),eN(185,"--color-focused"),og()(),Sl(186,"td"),eN(187,"Cor principal no estado de focus"),og(),Sl(188,"td")(189,"code"),eN(190,"var(--color-action-default)"),og()()(),Sl(191,"tr")(192,"td")(193,"code"),eN(194,"--outline-color-focused"),og()(),Sl(195,"td"),eN(196,"Cor do outline do estado de focus"),og(),Sl(197,"td")(198,"code"),eN(199,"var(--color-action-focus)"),og()()(),Sl(200,"tr")(201,"td")(202,"strong"),eN(203,"Disabled"),og()(),Wl(204,"td")(205,"td"),og(),Sl(206,"tr")(207,"td")(208,"code"),eN(209,"--color-disabled"),og()(),Sl(210,"td"),eN(211,"Cor principal no estado disabled"),og(),Sl(212,"td")(213,"code"),eN(214,"var(--color-neutral-light-30)"),og()()(),Sl(215,"tr")(216,"td")(217,"code"),eN(218,"--background-disabled"),og()(),Sl(219,"td"),eN(220,"Cor de background no estado disabled"),og(),Sl(221,"td")(222,"code"),eN(223,"var(--color-neutral-light-20)"),og()()(),Sl(224,"tr")(225,"td")(226,"code"),eN(227,"--text-color-disabled"),og()(),Sl(228,"td"),eN(229,"Cor do texto no estado disabled"),og(),Sl(230,"td")(231,"code"),eN(232,"var(--color-neutral-dark-70)"),og()()()()(),Sl(233,"p"),Wl(234,"br"),eN(235," O "),Sl(236,"code"),eN(237,"po-login"),og(),eN(238," \xE9 um input espec\xEDfico para login. J\xE1 possui tipo, estilo e \xEDcone predefinidos."),og()(),Sl(239,"div",8)(240,"h4",9),eN(241,"Seletor"),og(),Sl(242,"pre",10),eN(243,`<po-login
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
</po-login>
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
leitura clara.`),og()()(),Sl(756,"tr",15)(757,"td",16)(758,"div",24)(759,"span",25),eN(760," p-loading"),Wl(761,"br"),og()()(),Sl(762,"td",20)(763,"code",27),eN(764,"boolean"),og()(),Sl(765,"td",22)(766,"p")(767,"code"),eN(768,"false"),og()()(),Sl(769,"td",23)(770,"em")(771,"strong"),eN(772,"(opcional)"),og()(),Sl(773,"p"),eN(774,"Exibe um \xEDcone de carregamento no lado direito do campo para sinalizar que uma opera\xE7\xE3o est\xE1 em andamento."),og()()(),Sl(775,"tr",15)(776,"td",16)(777,"div",24)(778,"span",25),eN(779,"p-mask"),Wl(780,"br"),og()()(),Sl(781,"td",20)(782,"code",26),eN(783,"string"),og()(),Sl(784,"td",22),eN(785,"-"),og(),Sl(786,"td",23)(787,"em")(788,"strong"),eN(789,"(opcional)"),og()(),Sl(790,"p"),eN(791,`Indica uma m\xE1scara para o campo. Exemplos: (+99) (99) 99999?-9999, 99999-999, 999.999.999-99.
A m\xE1scara gera uma valida\xE7\xE3o autom\xE1tica do campo, podendo esta ser substitu\xEDda por um REGEX espec\xEDfico
atrav\xE9s da propriedade p-pattern.
O campo ser\xE1 sinalizado e o formul\xE1rio ficar\xE1 inv\xE1lido quando o valor informado estiver fora do padr\xE3o definido,
mesmo quando desabilitado.`),og()()(),Sl(792,"tr",15)(793,"td",16)(794,"div",24)(795,"span",25),eN(796,"p-mask-format-model"),Wl(797,"br"),og()()(),Sl(798,"td",20)(799,"code",27),eN(800,"boolean"),og()(),Sl(801,"td",22)(802,"p")(803,"code"),eN(804,"false"),og()()(),Sl(805,"td",23)(806,"em")(807,"strong"),eN(808,"(opcional)"),og()(),Sl(809,"p"),eN(810,"Indica se o "),Sl(811,"code"),eN(812,"model"),og(),eN(813," receber\xE1 o valor formatado pela m\xE1scara ou apenas o valor puro (sem formata\xE7\xE3o)."),og()()(),Sl(814,"tr",15)(815,"td",16)(816,"div",24)(817,"span",25),eN(818," p-mask-no-length-validation"),Wl(819,"br"),og()()(),Sl(820,"td",20)(821,"code",27),eN(822,"boolean"),og()(),Sl(823,"td",22)(824,"p")(825,"code"),eN(826,"false"),og()()(),Sl(827,"td",23)(828,"p"),eN(829,"Controla como o componente aplica as valida\xE7\xF5es de comprimento m\xEDnimo ("),Sl(830,"code"),eN(831,"minLength"),og(),eN(832,") e m\xE1ximo ("),Sl(833,"code"),eN(834,"maxLength"),og(),eN(835,") quando h\xE1 uma m\xE1scara ("),Sl(836,"code"),eN(837,"p-mask"),og(),eN(838,") definida."),og(),Sl(839,"ul")(840,"li"),eN(841,"Quando "),Sl(842,"code"),eN(843,"true"),og(),eN(844,", apenas os caracteres alfanum\xE9ricos ser\xE3o contabilizados para a valida\xE7\xE3o dos comprimentos."),og(),Sl(845,"li"),eN(846,"Quando "),Sl(847,"code"),eN(848,"false"),og(),eN(849,", todos os caracteres, incluindo os especiais da m\xE1scara, ser\xE3o considerados na valida\xE7\xE3o."),og()(),Sl(850,"blockquote")(851,"p"),eN(852,"Esta propriedade \xE9 ignorada quando utilizada em conjunto com "),Sl(853,"code"),eN(854,"p-mask-format-model"),og(),eN(855,"."),og()(),Sl(856,"p"),eN(857,"Exemplo:"),og(),Sl(858,"pre")(859,"code"),eN(860,`<po-input
  p-mask="999-999"
  p-maxlength="6"
  p-minlength="4"
  p-mask-no-length-validation="true"
></po-input>
`),og()(),Sl(861,"ul")(862,"li"),eN(863,"Entrada: "),Sl(864,"code"),eN(865,"123-456"),og(),eN(866," \u2192 Valida\xE7\xE3o ser\xE1 aplicada somente aos n\xFAmeros, ignorando o caractere especial "),Sl(867,"code"),eN(868,"-"),og(),eN(869,"."),og()()()(),Sl(870,"tr",15)(871,"td",16)(872,"div",24)(873,"span",25),eN(874," p-maxlength"),Wl(875,"br"),og()()(),Sl(876,"td",20)(877,"code",31),eN(878,"number"),og()(),Sl(879,"td",22),eN(880,"-"),og(),Sl(881,"td",23)(882,"em")(883,"strong"),eN(884,"(opcional)"),og()(),Sl(885,"p"),eN(886,"Indica a quantidade m\xE1xima de caracteres que o campo aceita."),og()()(),Sl(887,"tr",15)(888,"td",16)(889,"div",24)(890,"span",25),eN(891," p-minlength"),Wl(892,"br"),og()()(),Sl(893,"td",20)(894,"code",31),eN(895,"number"),og()(),Sl(896,"td",22),eN(897,"-"),og(),Sl(898,"td",23)(899,"em")(900,"strong"),eN(901,"(opcional)"),og()(),Sl(902,"p"),eN(903,"Indica a quantidade m\xEDnima de caracteres que o campo aceita."),og()()(),Sl(904,"tr",15)(905,"td",16)(906,"div",24)(907,"span",25),eN(908," name"),Wl(909,"br"),og()()(),Sl(910,"td",20)(911,"code",26),eN(912,"string"),og()(),Sl(913,"td",22),eN(914,"-"),og(),Sl(915,"td",23)(916,"p"),eN(917,"Nome e identificador do campo."),og()()(),Sl(918,"tr",15)(919,"td",16)(920,"div",24)(921,"span",25),eN(922," p-no-autocomplete"),Wl(923,"br"),og()()(),Sl(924,"td",20)(925,"code",27),eN(926,"boolean"),og()(),Sl(927,"td",22)(928,"p")(929,"code"),eN(930,"false"),og()()(),Sl(931,"td",23)(932,"em")(933,"strong"),eN(934,"(opcional)"),og()(),Sl(935,"p"),eN(936,"Define a propriedade nativa "),Sl(937,"code"),eN(938,"autocomplete"),og(),eN(939," do campo como "),Sl(940,"code"),eN(941,"off"),og(),eN(942,"."),og(),Sl(943,"blockquote")(944,"p"),eN(945,"No componente "),Sl(946,"code"),eN(947,"po-password"),og(),eN(948," ser\xE1 definido como "),Sl(949,"code"),eN(950,"new-password"),og(),eN(951,"."),og()(),Sl(952,"p"),eN(953,"Nos componentes "),Sl(954,"code"),eN(955,"po-password"),og(),eN(956," e "),Sl(957,"code"),eN(958,"po-login"),og(),eN(959," o valor padr\xE3o ser\xE1 "),Sl(960,"code"),eN(961,"true"),og(),eN(962,"."),og()()(),Sl(963,"tr",15)(964,"td",16)(965,"div",24)(966,"span",25),eN(967," p-optional"),Wl(968,"br"),og()()(),Sl(969,"td",20)(970,"code",27),eN(971,"boolean"),og()(),Sl(972,"td",22)(973,"p")(974,"code"),eN(975,"false"),og()()(),Sl(976,"td",23)(977,"em")(978,"strong"),eN(979,"(opcional)"),og()(),Sl(980,"p"),eN(981,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),og(),Sl(982,"blockquote")(983,"p"),eN(984,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),og()(),Sl(985,"ul")(986,"li"),eN(987,"O campo conter "),Sl(988,"code"),eN(989,"p-required"),og(),eN(990,";"),og(),Sl(991,"li"),eN(992,"N\xE3o possuir "),Sl(993,"code"),eN(994,"p-help"),og(),eN(995," e/ou "),Sl(996,"code"),eN(997,"p-label"),og(),eN(998,"."),og()()()(),Sl(999,"tr",15)(1e3,"td",16)(1001,"div",24)(1002,"span",25),eN(1003,"p-pattern"),Wl(1004,"br"),og()()(),Sl(1005,"td",20)(1006,"code",26),eN(1007,"string"),og()(),Sl(1008,"td",22),eN(1009,"-"),og(),Sl(1010,"td",23)(1011,"em")(1012,"strong"),eN(1013,"(opcional)"),og()(),Sl(1014,"p"),eN(1015,`Express\xE3o regular para validar o campo.
Quando o campo possuir uma m\xE1scara `),Sl(1016,"code"),eN(1017,"(p-mask)"),og(),eN(1018,` ser\xE1 automaticamente validado por ela, por\xE9m
\xE9 poss\xEDvel definir um p-pattern para substituir a valida\xE7\xE3o da m\xE1scara.`),og()()(),Sl(1019,"tr",15)(1020,"td",16)(1021,"div",24)(1022,"span",25),eN(1023," p-placeholder"),Wl(1024,"br"),og()()(),Sl(1025,"td",20)(1026,"code",26),eN(1027,"string"),og()(),Sl(1028,"td",22)(1029,"p"),eN(1030,"''"),og()(),Sl(1031,"td",23)(1032,"em")(1033,"strong"),eN(1034,"(opcional)"),og()(),Sl(1035,"p"),eN(1036,"Mensagem que aparecer\xE1 enquanto o campo n\xE3o estiver preenchido."),og()()(),Sl(1037,"tr",15)(1038,"td",16)(1039,"div",24)(1040,"span",25),eN(1041," p-helper"),Wl(1042,"br"),og()()(),Sl(1043,"td",20)(1044,"code",32),eN(1045,"PoHelperOptions "),og(),Sl(1046,"code",26),eN(1047," string"),og()(),Sl(1048,"td",22),eN(1049,"-"),og(),Sl(1050,"td",23)(1051,"em")(1052,"strong"),eN(1053,"(opcional)"),og()(),Sl(1054,"p"),eN(1055,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label quando a propriedade "),Sl(1056,"code"),eN(1057,"p-label"),og(),eN(1058," for definida, ou, ao lado do componente na aus\xEAncia da propriedade "),Sl(1059,"code"),eN(1060,"p-label"),og(),eN(1061,"."),og(),Sl(1062,"blockquote")(1063,"p"),eN(1064,"Para mais informa\xE7\xF5es acesse: "),Sl(1065,"a",33),eN(1066,"https://po-ui.io/documentation/po-helper"),og(),eN(1067,"."),og()(),Sl(1068,"blockquote")(1069,"p"),eN(1070,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),Sl(1071,"code"),eN(1072,"p-additional-help-tooltip"),og(),eN(1073," e "),Sl(1074,"code"),eN(1075,"p-additional-help"),og(),eN(1076,") ser\xE1 ignorado."),og()()()(),Sl(1077,"tr",15)(1078,"td",16)(1079,"div",24)(1080,"span",25),eN(1081,"p-readonly"),Wl(1082,"br"),og()()(),Sl(1083,"td",20)(1084,"code",27),eN(1085,"boolean"),og()(),Sl(1086,"td",22),eN(1087,"-"),og(),Sl(1088,"td",23)(1089,"em")(1090,"strong"),eN(1091,"(opcional)"),og()(),Sl(1092,"p"),eN(1093,"Indica que o campo ser\xE1 somente leitura."),og()()(),Sl(1094,"tr",15)(1095,"td",16)(1096,"div",24)(1097,"span",25),eN(1098,"p-required"),Wl(1099,"br"),og()()(),Sl(1100,"td",20)(1101,"code",27),eN(1102,"boolean"),og()(),Sl(1103,"td",22)(1104,"p")(1105,"code"),eN(1106,"false"),og()()(),Sl(1107,"td",23)(1108,"em")(1109,"strong"),eN(1110,"(opcional)"),og()(),Sl(1111,"p"),eN(1112,"Define que o campo ser\xE1 obrigat\xF3rio."),og(),Sl(1113,"blockquote")(1114,"p"),eN(1115,"Esta propriedade \xE9 desconsiderada quando o input est\xE1 desabilitado "),Sl(1116,"code"),eN(1117,"(p-disabled)"),og(),eN(1118,"."),og()()()(),Sl(1119,"tr",15)(1120,"td",16)(1121,"div",24)(1122,"span",25),eN(1123," p-required-field-error-message"),Wl(1124,"br"),og()()(),Sl(1125,"td",20)(1126,"code",27),eN(1127,"boolean"),og()(),Sl(1128,"td",22)(1129,"p")(1130,"code"),eN(1131,"false"),og()()(),Sl(1132,"td",23)(1133,"em")(1134,"strong"),eN(1135,"(opcional)"),og()(),Sl(1136,"p"),eN(1137,"Exibe a mensagem setada na propriedade "),Sl(1138,"code"),eN(1139,"p-error-pattern"),og(),eN(1140," se o campo estiver vazio e for requerido."),og(),Sl(1141,"blockquote")(1142,"p"),eN(1143,"Necess\xE1rio que a propriedade "),Sl(1144,"code"),eN(1145,"p-required"),og(),eN(1146," esteja habilitada."),og()()()(),Sl(1147,"tr",15)(1148,"td",16)(1149,"div",24)(1150,"span",25),eN(1151," p-show-required"),Wl(1152,"br"),og()()(),Sl(1153,"td",20)(1154,"code",27),eN(1155,"boolean"),og()(),Sl(1156,"td",22),eN(1157,"-"),og(),Sl(1158,"td",23)(1159,"p"),eN(1160,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),og(),Sl(1161,"blockquote")(1162,"p"),eN(1163,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),og()(),Sl(1164,"ul")(1165,"li"),eN(1166,"N\xE3o possuir "),Sl(1167,"code"),eN(1168,"p-help"),og(),eN(1169," e/ou "),Sl(1170,"code"),eN(1171,"p-label"),og(),eN(1172,"."),og()()()(),Sl(1173,"tr",15)(1174,"td",16)(1175,"div",24)(1176,"span",25),eN(1177," p-size"),Wl(1178,"br"),og()()(),Sl(1179,"td",20)(1180,"code",26),eN(1181,"string"),og()(),Sl(1182,"td",22)(1183,"p")(1184,"code"),eN(1185,"medium"),og()()(),Sl(1186,"td",23)(1187,"em")(1188,"strong"),eN(1189,"(opcional)"),og()(),Sl(1190,"p"),eN(1191,"Define o tamanho do componente:"),og(),Sl(1192,"ul")(1193,"li")(1194,"code"),eN(1195,"small"),og(),eN(1196,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),og(),Sl(1197,"li")(1198,"code"),eN(1199,"medium"),og(),eN(1200,": altura do input como 44px."),og()(),Sl(1201,"blockquote")(1202,"p"),eN(1203,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Sl(1204,"code"),eN(1205,"medium"),og(),eN(1206,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Sl(1207,"a",34),eN(1208,"po-theme"),og(),eN(1209,"."),og()()()(),Sl(1210,"tr",15)(1211,"td",16)(1212,"div",24)(1213,"span",25),eN(1214," p-upper-case"),Wl(1215,"br"),og()()(),Sl(1216,"td",20)(1217,"code",27),eN(1218,"boolean"),og()(),Sl(1219,"td",22),eN(1220,"-"),og(),Sl(1221,"td",23)(1222,"p"),eN(1223,"Converte o conte\xFAdo do campo em mai\xFAsulo automaticamente."),og()()()(),Sl(1224,"h3",11),eN(1225,"M\xE9todos"),og(),Sl(1226,"table",35)(1227,"tr",15)(1228,"th",36)(1229,"div",24)(1230,"h4")(1231,"span",25),eN(1232," showAdditionalHelp "),og()()()()(),Sl(1233,"tr",23)(1234,"td",23)(1235,"p"),eN(1236,"M\xE9todo que exibe "),Sl(1237,"code"),eN(1238,"p-helper"),og(),eN(1239," ou executa a a\xE7\xE3o definida em "),Sl(1240,"code"),eN(1241,"p-helper{eventOnClick}"),og(),eN(1242," ou em "),Sl(1243,"code"),eN(1244,"p-additionalHelp"),og(),eN(1245,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Sl(1246,"code"),eN(1247,"p-keydown"),og(),eN(1248,"."),og(),Sl(1249,"blockquote")(1250,"p"),eN(1251,"Exibe ou oculta o conte\xFAdo do componente "),Sl(1252,"code"),eN(1253,"po-helper"),og(),eN(1254," quando o componente estiver com foco."),og()(),Sl(1255,"pre")(1256,"code"),eN(1257,`// Exemplo com p-label e p-helper
<po-nome-component
 #component
 ...
 p-label="Label do componente"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, component)"
></po-nome-component>
`),og()(),Sl(1258,"pre")(1259,"code"),eN(1260,`...
onKeyDown(event: KeyboardEvent, inp: PoNomeDoComponente): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),og()()()()(),Wl(1261,"br"),Sl(1262,"table",35)(1263,"tr",15)(1264,"th",36)(1265,"div",24)(1266,"h4")(1267,"span",25),eN(1268," focus "),og()()()()(),Sl(1269,"tr",23)(1270,"td",23)(1271,"p"),eN(1272,"Fun\xE7\xE3o que atribui foco ao componente."),og(),Sl(1273,"p"),eN(1274,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),og(),Sl(1275,"pre")(1276,"code"),eN(1277,`import { PoNomeDoComponenteComponent } from '@po-ui/ng-components';

...

@ViewChild(PoNomeDoComponenteComponent, { static: true }) nomeDoComponente: PoNomeDoComponenteComponent;

focusComponent() {
  this.nomeDoComponente.focus();
}
`),og()()()()(),Wl(1278,"br"),Sl(1279,"h3"),eN(1280,"Interfaces"),og(),Sl(1281,"h4",37)(1282,"code",5),eN(1283,"ErrorAsyncProperties"),og()(),Sl(1284,"div",2)(1285,"p"),eN(1286,"Interface para realizar uma valida\xE7\xE3o ass\xEDncrona no componente."),og()(),Sl(1287,"h4",11),eN(1288,"Propriedades"),og(),Sl(1289,"table",12)(1290,"tr",13)(1291,"th",14),eN(1292,"Nome"),og(),Sl(1293,"th",14),eN(1294,"Tipo"),og(),Sl(1295,"th",14),eN(1296,"Descri\xE7\xE3o"),og()(),Sl(1297,"tr",15)(1298,"td",16)(1299,"div",24)(1300,"span",25),eN(1301," errorAsync"),Wl(1302,"br"),og()()(),Sl(1303,"td",20)(1304,"code",38),eN(1305,"(value) => Observable<boolean>"),og()(),Sl(1306,"td",23)(1307,"p"),eN(1308,`Fun\xE7\xE3o obrigat\xF3ria executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),Sl(1309,"code"),eN(1310,"change"),og(),eN(1311," ou "),Sl(1312,"code"),eN(1313,"change-model"),og(),eN(1314,", dependendo do valor da propriedade "),Sl(1315,"code"),eN(1316,"triggerMode"),og(),eN(1317,"."),og()()(),Sl(1318,"tr",15)(1319,"td",16)(1320,"div",24)(1321,"span",25),eN(1322," triggerMode"),Wl(1323,"br"),og()()(),Sl(1324,"td",20)(1325,"code",39),eN(1326,"'change' "),og(),Sl(1327,"code",40),eN(1328," 'changeModel'"),og()(),Sl(1329,"td",23)(1330,"em")(1331,"strong"),eN(1332,"(opcional)"),og()(),Sl(1333,"p"),eN(1334,"Controla se o m\xE9todo ser\xE1 executado no disparo do output "),Sl(1335,"code"),eN(1336,"change"),og(),eN(1337," ou "),Sl(1338,"code"),eN(1339,"change-model"),og(),eN(1340,"."),og()()()()());},dependencies:[Ka],encapsulation:2})}return a})();var ge=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(d,l){this.route=d,this.router=l;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let l=d.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:"merge"}),this.activeTab=d;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(l){return new(l||a)(w(Xn),w(En))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Login",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,i){l&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return i.changeTab("doc")}),Wl(3,"sample-po-login-doc"),og(),Sl(4,"po-tab",3),ft("p-click",function(){return i.changeTab("web")}),Wl(5,"sample-po-login-basic-view")(6,"sample-po-login-labs-view")(7,"sample-po-login-confirm-view"),og()()()),l&2&&(nw("p-actions",i.actions),Lp(2),nw("p-active",i.activeTab==="doc"),Lp(2),nw("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[rNe,Bme,qme,de,se,ue,Ee],encapsulation:2})}return a})();var _e=[{path:"",component:ge}],Se=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=fe({type:a});static \u0275inj=ue$1({imports:[hL.forChild(_e),hL]})}return a})();var ot=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=fe({type:a});static \u0275inj=ue$1({imports:[sr,Se]})}return a})();export{ot as DocPoLoginModule};