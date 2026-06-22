import {f as fe,u as ue$1,s as sr,h as hL,w,c3 as Xn,E as En,U as Un,a as f,c5 as Lde,c6 as U,b0 as Qt,c7 as vo,aB as wx,H as Wl,F as Sl,a1 as ft,J as og,an as CO,aH as Ka,b8 as Bme,b9 as qme,z as eN,L as Lp,ar as $x,au as dg,Q as nw,bs as fN,aX as Z9,aF as G9,aY as q9,aG as _k,aZ as mk,b1 as mv,b4 as L3,c8 as wde,aJ as Hhe,c9 as Ghe,aD as Ky,aE as Xy,aM as ww,aN as e0,aO as Ew,aP as n0,av as ql,aw as lo,ax as uo,aI as dc,a3 as rNe,bd as Nx,aT as nN}from'./main-WP3NAV7C.js';var de=(()=>{class i{static \u0275fac=function(r){return new(r||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-modal-password-recovery-basic"]],standalone:false,decls:3,vars:0,consts:[["passwordRecoveryModal",""],["p-label","Open modal password recovery",3,"p-click"]],template:function(r,n){if(r&1){let p=wx();Wl(0,"po-modal-password-recovery",null,0),Sl(2,"po-button",1),ft("p-click",function(){Ky(p);let d=Nx(1);return Xy(d.open())}),og();}},dependencies:[Qt,vo],encapsulation:2,changeDetection:1})}return i})();var he=i=>({"docs-sample-code-tabs":i}),pe=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-modal-password-recovery-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Modal Password Recovery Basic"),og(),Sl(4,"a",2),ft("click",function(){return n.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-modal-password-recovery-basic/sample-po-modal-password-recovery-basic.component.html"),og(),Sl(13,"pre",7),eN(14,`<po-modal-password-recovery #passwordRecoveryModal></po-modal-password-recovery>

<po-button p-label="Open modal password recovery" (p-click)="passwordRecoveryModal.open()"> </po-button>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-modal-password-recovery-basic/sample-po-modal-password-recovery-basic.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-modal-password-recovery-basic',
  templateUrl: './sample-po-modal-password-recovery-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoModalPasswordRecoveryBasicComponent {}
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-modal-password-recovery-basic"),og(),Wl(23,"hr")),r&2&&(Lp(5),$x("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,he,n.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,de],encapsulation:2})}return i})();var me=(()=>{class i{poDialog=f(Lde);poModalPasswordRecovery;codeError;componentsSize;email;event;invalidCode=true;invalidCodeMessage;phoneMask;submitEvent;type;componentsSizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];typeOptions=[{label:"All",value:U.All},{label:"Email",value:U.Email},{label:"SMS",value:U.SMS}];ngOnInit(){this.restore();}changeEvent(l){this.event=l;}openPasswordRecoveryModal(){this.poModalPasswordRecovery.open();}restore(){this.codeError=void 0,this.componentsSize="medium",this.email=void 0,this.event=void 0,this.phoneMask=void 0,this.submitEvent=void 0,this.type=U.Email;}submit(l){this.poDialog.alert({title:"Change Password Requested By User",message:`Submitted Object: ${JSON.stringify(l)}`,ok:()=>this.advanceModal(l)});}submitCode(l){this.poDialog.alert({title:"Emitted SMS Code By User",message:`Submitted Object: ${JSON.stringify(l)}`,ok:()=>this.resendCode(l)});}advanceModal(l){l.hasOwnProperty("sms")?this.openSmsCode(l):this.openConfirmation(l);}openConfirmation(l){this.submitEvent=JSON.stringify(l),this.poModalPasswordRecovery.openConfirmation();}openSmsCode(l){this.submitEvent=JSON.stringify(l),this.poModalPasswordRecovery.openSmsCode();}resendCode(l){this.submitEvent=JSON.stringify(event),this.invalidCode&&this.invalidCodeMessage?(this.invalidCode=!this.invalidCode,this.codeError=this.invalidCodeMessage,this.poModalPasswordRecovery.openSmsCode()):(this.codeError=void 0,this.invalidCode=!this.invalidCode,this.poModalPasswordRecovery.completed());}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-modal-password-recovery-labs"]],viewQuery:function(r,n){if(r&1&&ql(vo,5),r&2){let p;lo(p=uo())&&(n.poModalPasswordRecovery=p.first);}},standalone:false,decls:17,vars:14,consts:[["f","ngForm"],[3,"p-code-submit","p-submit","p-code-error","p-components-size","p-contact-email","p-phone-mask","p-type"],["p-label","Open modal password recovery",3,"p-click"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","type","p-label","Type",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","invalidCodeMessage","p-clean","","p-label","Code Error","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","email","p-clean","","p-label","Email","p-maxlength","30","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","phoneMask","p-clean","","p-label","Phone Mask","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","componentsSize","p-label","Components size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(r,n){if(r&1){let p=wx();Sl(0,"po-modal-password-recovery",1),ft("p-code-submit",function(d){return Ky(p),n.submitCode(d),Xy(n.changeEvent("p-submit-code"))})("p-submit",function(d){return Ky(p),n.submit(d),Xy(n.changeEvent("p-submit"))}),og(),Sl(1,"po-button",2),ft("p-click",function(){return n.openPasswordRecoveryModal()}),og(),Wl(2,"po-divider"),Sl(3,"div",3),Wl(4,"po-info",4)(5,"po-info",5),og(),Wl(6,"po-divider"),Sl(7,"form",null,0)(9,"div",3)(10,"po-select",6),ww("ngModelChange",function(d){return Ky(p),nN(n.type,d)||(n.type=d),Xy(d)}),og(),e0(),Sl(11,"po-input",7),ww("ngModelChange",function(d){return Ky(p),nN(n.invalidCodeMessage,d)||(n.invalidCodeMessage=d),Xy(d)}),og(),e0(),Sl(12,"po-input",8),ww("ngModelChange",function(d){return Ky(p),nN(n.email,d)||(n.email=d),Xy(d)}),og(),e0(),Sl(13,"po-input",9),ww("ngModelChange",function(d){return Ky(p),nN(n.phoneMask,d)||(n.phoneMask=d),Xy(d)}),og(),e0(),Sl(14,"po-radio-group",10),ww("ngModelChange",function(d){return Ky(p),nN(n.componentsSize,d)||(n.componentsSize=d),Xy(d)}),og(),e0(),og(),Sl(15,"div",3)(16,"po-button",11),ft("p-click",function(){return Ky(p),Nx(8).reset(),Xy(n.restore())}),og()()();}r&2&&(nw("p-code-error",n.codeError)("p-components-size",n.componentsSize)("p-contact-email",n.email)("p-phone-mask",n.phoneMask)("p-type",n.type),Lp(4),nw("p-value",n.submitEvent),Lp(),nw("p-value",n.event),Lp(5),Ew("ngModel",n.type),nw("p-options",n.typeOptions),n0(),Lp(),Ew("ngModel",n.invalidCodeMessage),n0(),Lp(),Ew("ngModel",n.email),n0(),Lp(),Ew("ngModel",n.phoneMask),n0(),Lp(),Ew("ngModel",n.componentsSize),nw("p-options",n.componentsSizeOptions),n0());},dependencies:[Z9,G9,q9,_k,mk,Qt,mv,L3,wde,Hhe,Ghe,vo],encapsulation:2,changeDetection:1})}return i})();var we=i=>({"docs-sample-code-tabs":i}),ce=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-modal-password-recovery-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Modal Password Recovery Labs"),og(),Sl(4,"a",2),ft("click",function(){return n.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-modal-password-recovery-labs/sample-po-modal-password-recovery-labs.component.html"),og(),Sl(13,"pre",7),eN(14,`<po-modal-password-recovery
  [p-code-error]="codeError"
  [p-components-size]="componentsSize"
  [p-contact-email]="email"
  [p-phone-mask]="phoneMask"
  [p-type]="type"
  (p-code-submit)="submitCode($event); changeEvent('p-submit-code')"
  (p-submit)="submit($event); changeEvent('p-submit')"
>
</po-modal-password-recovery>

<po-button p-label="Open modal password recovery" (p-click)="openPasswordRecoveryModal()"> </po-button>

<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="submitEvent"> </po-info>

  <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
</div>

<po-divider />

<form #f="ngForm">
  <div class="po-row">
    <po-select class="po-md-6" name="type" [(ngModel)]="type" p-label="Type" [p-options]="typeOptions"> </po-select>

    <po-input
      class="po-md-6"
      name="invalidCodeMessage"
      [(ngModel)]="invalidCodeMessage"
      p-clean
      p-label="Code Error"
      p-required
    >
    </po-input>

    <po-input class="po-md-6" name="email" [(ngModel)]="email" p-clean p-label="Email" p-maxlength="30" p-required>
    </po-input>

    <po-input class="po-md-6" name="phoneMask" [(ngModel)]="phoneMask" p-clean p-label="Phone Mask" p-required>
    </po-input>

    <po-radio-group
      class="po-md-12 po-lg-6"
      name="componentsSize"
      [(ngModel)]="componentsSize"
      p-label="Components size"
      p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
      [p-options]="componentsSizeOptions"
    >
    </po-radio-group>
  </div>

  <div class="po-row">
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="f.reset(); this.restore()"> </po-button>
  </div>
</form>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-modal-password-recovery-labs/sample-po-modal-password-recovery-labs.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';

import { PoDialogService, PoRadioGroupOption, PoSelectOption } from '@po-ui/ng-components';
import {
  PoModalPasswordRecovery,
  PoModalPasswordRecoveryComponent,
  PoModalPasswordRecoveryType
} from '@po-ui/ng-templates';

@Component({
  selector: 'sample-po-modal-password-recovery-labs',
  templateUrl: './sample-po-modal-password-recovery-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoModalPasswordRecoveryLabsComponent implements OnInit {
  private poDialog = inject(PoDialogService);

  @ViewChild(PoModalPasswordRecoveryComponent) poModalPasswordRecovery: PoModalPasswordRecoveryComponent;

  codeError: string;
  componentsSize: string;
  email: string;
  event: string;
  invalidCode: boolean = true;
  invalidCodeMessage: string;
  phoneMask: string;
  submitEvent: string;
  type: PoModalPasswordRecoveryType;

  public readonly componentsSizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  typeOptions: Array<PoSelectOption> = [
    { label: 'All', value: PoModalPasswordRecoveryType.All },
    { label: 'Email', value: PoModalPasswordRecoveryType.Email },
    { label: 'SMS', value: PoModalPasswordRecoveryType.SMS }
  ];

  ngOnInit() {
    this.restore();
  }

  changeEvent(event: string) {
    this.event = event;
  }

  openPasswordRecoveryModal() {
    this.poModalPasswordRecovery.open();
  }

  restore() {
    this.codeError = undefined;
    this.componentsSize = 'medium';
    this.email = undefined;
    this.event = undefined;
    this.phoneMask = undefined;
    this.submitEvent = undefined;
    this.type = PoModalPasswordRecoveryType.Email;
  }

  submit(event: PoModalPasswordRecovery) {
    this.poDialog.alert({
      title: 'Change Password Requested By User',
      message: \`Submitted Object: \${JSON.stringify(event)}\`,
      ok: () => this.advanceModal(event)
    });
  }

  submitCode(event: PoModalPasswordRecovery) {
    this.poDialog.alert({
      title: 'Emitted SMS Code By User',
      message: \`Submitted Object: \${JSON.stringify(event)}\`,
      ok: () => this.resendCode(event)
    });
  }

  private advanceModal(event: PoModalPasswordRecovery) {
    event.hasOwnProperty('sms') ? this.openSmsCode(event) : this.openConfirmation(event);
  }

  private openConfirmation(event: PoModalPasswordRecovery) {
    this.submitEvent = JSON.stringify(event);
    this.poModalPasswordRecovery.openConfirmation();
  }

  private openSmsCode(event: PoModalPasswordRecovery) {
    this.submitEvent = JSON.stringify(event);
    this.poModalPasswordRecovery.openSmsCode();
  }

  private resendCode(eventevent: PoModalPasswordRecovery) {
    this.submitEvent = JSON.stringify(event);

    if (this.invalidCode && this.invalidCodeMessage) {
      this.invalidCode = !this.invalidCode;
      this.codeError = this.invalidCodeMessage;

      this.poModalPasswordRecovery.openSmsCode();
    } else {
      this.codeError = undefined;
      this.invalidCode = !this.invalidCode;
      this.poModalPasswordRecovery.completed();
    }
  }
}
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-modal-password-recovery-labs"),og(),Wl(23,"hr")),r&2&&(Lp(5),$x("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,we,n.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,me],encapsulation:2})}return i})();var ue=(()=>{class i{poModalPasswordRecovery;type=U.All;urlRecovery="https://po-sample-api.onrender.com/v1/users";openPasswordRecoveryModal(){this.poModalPasswordRecovery.open();}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-modal-password-recovery-request"]],viewQuery:function(r,n){if(r&1&&ql(vo,5),r&2){let p;lo(p=uo())&&(n.poModalPasswordRecovery=p.first);}},standalone:false,decls:14,vars:2,consts:[[1,"po-row"],["p-label","Data Phone","p-value","(99) 99999-9999",1,"po-md-2"],["p-label","Data Email","p-value","mail@mail.com",1,"po-md-2"],["p-label","Data SMS Code","p-value","999999",1,"po-md-2"],["src","./assets/images/expired.svg",1,"po-page-blocked-user-image","po-mb-5","po-mt-5"],[1,"po-font-title","po-text-center","po-md-12","po-mb-2"],[1,"po-font-text","po-text-center","po-md-12","po-mb-5","po-text-color-neutral-dark-40"],["p-label","Forgot your password?","p-kind","primary",1,"po-mb-5","po-offset-md-3","po-md-6","po-offset-lg-4","po-lg-4","po-offset-xl-4","po-xl-4",3,"p-click"],[3,"p-type","p-url-recovery"]],template:function(r,n){r&1&&(Sl(0,"po-container")(1,"div",0),Wl(2,"po-info",1)(3,"po-info",2)(4,"po-info",3),og()(),Sl(5,"po-container"),Wl(6,"img",4),Sl(7,"div",0)(8,"p",5),eN(9,"Oops!"),og(),Sl(10,"p",6),eN(11," Password Recovery Requested by user "),og(),Sl(12,"po-button",7),ft("p-click",function(){return n.openPasswordRecoveryModal()}),og()()(),Wl(13,"po-modal-password-recovery",8)),r&2&&(Lp(13),nw("p-type",n.type)("p-url-recovery",n.urlRecovery));},dependencies:[Qt,dc,Ghe,vo],encapsulation:2,changeDetection:1})}return i})();var xe=i=>({"docs-sample-code-tabs":i}),Ee=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-modal-password-recovery-request-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Modal Password Recovery Request"),og(),Sl(4,"a",2),ft("click",function(){return n.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-modal-password-recovery-request/sample-po-modal-password-recovery-request.component.html"),og(),Sl(13,"pre",7),eN(14,`<po-container>
  <div class="po-row">
    <po-info class="po-md-2" p-label="Data Phone" p-value="(99) 99999-9999"></po-info>
    <po-info class="po-md-2" p-label="Data Email" p-value="mail@mail.com"></po-info>
    <po-info class="po-md-2" p-label="Data SMS Code" p-value="999999"></po-info>
  </div>
</po-container>

<po-container>
  <img class="po-page-blocked-user-image po-mb-5 po-mt-5" src="./assets/images/expired.svg" />

  <div class="po-row">
    <p class="po-font-title po-text-center po-md-12 po-mb-2">Oops!</p>
    <p class="po-font-text po-text-center po-md-12 po-mb-5 po-text-color-neutral-dark-40">
      Password Recovery Requested by user
    </p>
    <po-button
      class="po-mb-5 po-offset-md-3 po-md-6 po-offset-lg-4 po-lg-4 po-offset-xl-4 po-xl-4"
      p-label="Forgot your password?"
      p-kind="primary"
      (p-click)="openPasswordRecoveryModal()"
    >
    </po-button>
  </div>
</po-container>

<po-modal-password-recovery [p-type]="type" [p-url-recovery]="urlRecovery"> </po-modal-password-recovery>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-modal-password-recovery-request/sample-po-modal-password-recovery-request.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';

import { PoModalPasswordRecoveryComponent, PoModalPasswordRecoveryType } from '@po-ui/ng-templates';

@Component({
  selector: 'sample-po-modal-password-recovery-request',
  templateUrl: './sample-po-modal-password-recovery-request.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoModalPasswordRecoveryRequestComponent {
  @ViewChild(PoModalPasswordRecoveryComponent) poModalPasswordRecovery: PoModalPasswordRecoveryComponent;

  type: PoModalPasswordRecoveryType = PoModalPasswordRecoveryType.All;
  urlRecovery: string = 'https://po-sample-api.onrender.com/v1/users';

  openPasswordRecoveryModal() {
    this.poModalPasswordRecovery.open();
  }
}
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-modal-password-recovery-request"),og(),Wl(23,"hr")),r&2&&(Lp(5),$x("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,xe,n.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,ue],encapsulation:2})}return i})();var ve=(()=>{class i{static \u0275fac=function(r){return new(r||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-modal-password-recovery-doc"]],standalone:false,decls:640,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","PoModalPasswordRecoveryType"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","number"]],template:function(r,n){r&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),eN(3,"import { PoModalPasswordRecoveryModule } from '@po-ui/ng-templates';"),og()(),Sl(4,"div",2)(5,"p"),eN(6,"M\xF3dulo do template do po-modal-password-recovery."),og()(),Sl(7,"h3",3),eN(8,"Componente"),og(),Sl(9,"h4",4)(10,"code",5),eN(11,"PoModalPasswordRecoveryComponent"),og()(),Sl(12,"div",2)(13,"p"),eN(14,"O componente "),Sl(15,"code"),eN(16,"po-modal-password-recovery"),og(),eN(17," \xE9 utilizado como template para solicita\xE7\xE3o de troca de senha."),og(),Sl(18,"p"),eN(19,"\xC9 composto por uma modal que possui tr\xEAs telas, cada uma com as seguintes caracter\xEDsticas:"),og(),Sl(20,"ul")(21,"li"),eN(22,"A primeira possui campos para preenchimento de email ou n\xFAmero de telefone;"),og(),Sl(23,"li"),eN(24,"Tela com campo para preenchimento de c\xF3digo SMS enviado para o n\xFAmero de telefone enviado;"),og(),Sl(25,"li"),eN(26,"A terceira se trata de uma confirma\xE7\xE3o de envio de link para a caixa de email do usu\xE1rio."),og()(),Sl(27,"p"),eN(28,"A propriedade "),Sl(29,"code"),eN(30,"p-url-recovery"),og(),eN(31,` automatiza a rotina do componente e simplifica o processo
para recupera\xE7\xE3o de senha, bastando definir uma url para requisi\xE7\xE3o dos recursos.
Seu detalhamento para uso pode ser visto logo abaixo em `),Sl(32,"em"),eN(33,"propriedades"),og(),eN(34,`.
Caso julgue necess\xE1rio, pode-se tamb\xE9m definir manualmente a rotina do componente.`),og(),Sl(35,"p"),eN(36,`Para a modal de digita\xE7\xE3o de c\xF3digo SMS, \xE9 poss\xEDvel definir uma mensagem de erro
customizada com a propriedade `),Sl(37,"code"),eN(38,"p-code-error"),og(),eN(39,` e h\xE1 um link para
reenvio de c\xF3digo por SMS. Ao reenviar, o evento `),Sl(40,"code"),eN(41,"p-code-submit"),og(),eN(42,` envia um objeto com o telefone do usu\xE1rio e a quantidade
de vezes em que o usu\xE1rio fez a solicita\xE7\xE3o de reenvio.`),og(),Sl(43,"blockquote")(44,"p"),eN(45,`\xC9 indicada a utiliza\xE7\xE3o da tela de digita\xE7\xE3o para envio de c\xF3digo SMS apenas
se a op\xE7\xE3o por envio SMS for disponibilizada para o usu\xE1rio.`),og()(),Sl(46,"p"),eN(47,"A modal de confirma\xE7\xE3o cont\xE9m uma a\xE7\xE3o de reenvio e o evento "),Sl(48,"code"),eN(49,"p-submit"),og(),eN(50,`
\xE9 quem passa o objeto contendo o email em conjunto com a quantidade de tentativas de reenvio.`),og(),Sl(51,"blockquote")(52,"p"),eN(53,"A tela de confirma\xE7\xE3o \xE9 indicada para quando o usu\xE1rio solicitar a troca atrav\xE9s do email."),og()(),Sl(54,"blockquote")(55,"p"),eN(56,"Os textos das modals s\xE3o pr\xE9-definidos, imut\xE1veis e s\xE3o traduzidos de acordo com o idioma do "),Sl(57,"em"),eN(58,"browser"),og(),eN(59," (pt, en e es)"),og()(),Sl(60,"p"),eN(61,`Para que as imagens sejam exibidas corretamente, \xE9 necess\xE1rio incluir o caminho delas ao projeto. Para isso, edite
o `),Sl(62,"em"),eN(63,"assets"),og(),eN(64," no arquivo "),Sl(65,"strong"),eN(66,"angular.json"),og(),eN(67," da aplica\xE7\xE3o na seguinte ordem:"),og(),Sl(68,"pre")(69,"code"),eN(70,`"assets": [
  "src/assets",
  "src/favicon.ico",
  {
    "glob": "**\\/*",
    "input": "node_modules/@po-ui/style/images",
    "output": "assets/images"
  }
]
`),og()()(),Sl(71,"div",6)(72,"h4",7),eN(73,"Seletor"),og(),Sl(74,"pre",8),eN(75,`<po-modal-password-recovery
    p-code-error="string"
    (p-code-submit)="EventEmitter"
    p-components-size="string"
    p-contact-email="string"
    p-phone-mask="string"
    (p-submit)="EventEmitter"
    p-type="PoModalPasswordRecoveryType"
    p-url-recovery="string" >
</po-modal-password-recovery>
`),og()(),Sl(76,"h4",9),eN(77,"Propriedades"),og(),Sl(78,"table",10)(79,"tr",11)(80,"th",12),eN(81,"Nome"),og(),Sl(82,"th",12),eN(83,"Tipo"),og(),Sl(84,"th",12),eN(85,"Padr\xE3o"),og(),Sl(86,"th",12),eN(87,"Descri\xE7\xE3o"),og()(),Sl(88,"tr",13)(89,"td",14)(90,"div",15)(91,"span",16),eN(92," p-code-error"),Wl(93,"br"),og()()(),Sl(94,"td",17)(95,"code",18),eN(96,"string"),og()(),Sl(97,"td",19),eN(98,"-"),og(),Sl(99,"td",20)(100,"em")(101,"strong"),eN(102,"(opcional)"),og()(),Sl(103,"p"),eN(104,"Defini\xE7\xE3o de mensagem de erro customizada para quando o usu\xE1rio passar um c\xF3digo SMS inv\xE1lido ou errado."),og()()(),Sl(105,"tr",13)(106,"td",14)(107,"div",21)(108,"span",22),eN(109," (p-code-submit)"),Wl(110,"br"),og()()(),Sl(111,"td",17)(112,"code",23),eN(113,"EventEmitter"),og()(),Sl(114,"td",19),eN(115,"-"),og(),Sl(116,"td",20)(117,"em")(118,"strong"),eN(119,"(opcional)"),og()(),Sl(120,"p"),eN(121,"A\xE7\xE3o contendo como par\xE2metro o c\xF3digo enviado por SMS e digitado pelo usu\xE1rio."),og(),Sl(122,"blockquote")(123,"p"),eN(124,"Esta propriedade ser\xE1 ignorada se for definido valor para a propriedade "),Sl(125,"code"),eN(126,"p-url-recovery"),og(),eN(127,"."),og()()()(),Sl(128,"tr",13)(129,"td",14)(130,"div",15)(131,"span",16),eN(132," p-components-size"),Wl(133,"br"),og()()(),Sl(134,"td",17)(135,"code",18),eN(136,"string"),og()(),Sl(137,"td",19)(138,"p")(139,"code"),eN(140,"medium"),og()()(),Sl(141,"td",20)(142,"em")(143,"strong"),eN(144,"(opcional)"),og()(),Sl(145,"p"),eN(146,"Define o tamanho dos componentes de formul\xE1rio no modal:"),og(),Sl(147,"ul")(148,"li")(149,"code"),eN(150,"small"),og(),eN(151,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),og(),Sl(152,"li")(153,"code"),eN(154,"medium"),og(),eN(155,": aplica a medida medium de cada componente."),og()(),Sl(156,"blockquote")(157,"p"),eN(158,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Sl(159,"code"),eN(160,"medium"),og(),eN(161,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Sl(162,"a",24),eN(163,"po-theme"),og(),eN(164,"."),og()()()(),Sl(165,"tr",13)(166,"td",14)(167,"div",15)(168,"span",16),eN(169," p-contact-email"),Wl(170,"br"),og()()(),Sl(171,"td",17)(172,"code",18),eN(173,"string"),og()(),Sl(174,"td",19),eN(175,"-"),og(),Sl(176,"td",20)(177,"em")(178,"strong"),eN(179,"(opcional)"),og()(),Sl(180,"p"),eN(181,"Defini\xE7\xE3o do e-mail que \xE9 exibido na mensagem para contato de suporte."),og()()(),Sl(182,"tr",13)(183,"td",14)(184,"div",15)(185,"span",16),eN(186," p-phone-mask"),Wl(187,"br"),og()()(),Sl(188,"td",17)(189,"code",18),eN(190,"string"),og()(),Sl(191,"td",19)(192,"p")(193,"code"),eN(194,"(99) 99999-9999"),og()()(),Sl(195,"td",20)(196,"em")(197,"strong"),eN(198,"(opcional)"),og()(),Sl(199,"p"),eN(200,"Defini\xE7\xE3o da mascara do campo de telefone."),og()()(),Sl(201,"tr",13)(202,"td",14)(203,"div",21)(204,"span",22),eN(205," (p-submit)"),Wl(206,"br"),og()()(),Sl(207,"td",17)(208,"code",23),eN(209,"EventEmitter"),og()(),Sl(210,"td",19),eN(211,"-"),og(),Sl(212,"td",20)(213,"em")(214,"strong"),eN(215,"(opcional)"),og()(),Sl(216,"p"),eN(217,"A\xE7\xE3o contendo o email como par\xE2metro e que \xE9 executada quando o usu\xE1rio clica sobres os bot\xF5es de 'enviar' e 'reenviar' e-mail."),og(),Sl(218,"blockquote")(219,"p"),eN(220,"Esta propriedade ser\xE1 ignorada se for definido valor para a propriedade "),Sl(221,"code"),eN(222,"p-url-recovery"),og(),eN(223,"."),og()()()(),Sl(224,"tr",13)(225,"td",14)(226,"div",15)(227,"span",16),eN(228," p-type"),Wl(229,"br"),og()()(),Sl(230,"td",17)(231,"code",25),eN(232,"PoModalPasswordRecoveryType"),og()(),Sl(233,"td",19)(234,"p")(235,"code"),eN(236,"PoModalPasswordRecoveryType.Email"),og()()(),Sl(237,"td",20)(238,"em")(239,"strong"),eN(240,"(opcional)"),og()(),Sl(241,"p"),eN(242,"Define o tipo de recupera\xE7\xE3o de senha que ser\xE1 exibido."),og()()(),Sl(243,"tr",13)(244,"td",14)(245,"div",15)(246,"span",16),eN(247," p-url-recovery"),Wl(248,"br"),og()()(),Sl(249,"td",17)(250,"code",18),eN(251,"string"),og()(),Sl(252,"td",19),eN(253,"-"),og(),Sl(254,"td",20)(255,"em")(256,"strong"),eN(257,"(opcional)"),og()(),Sl(258,"p"),eN(259,`Endpoint usado pelo template para requisi\xE7\xE3o do recurso. Quando preenchido,
o m\xE9todos `),Sl(260,"code"),eN(261,"p-submit"),og(),eN(262," e "),Sl(263,"code"),eN(264,"p-submit-code"),og(),eN(265,` ser\xE3o ignorados e o componente adquirir\xE1 automatiza\xE7\xE3o
para o processo de solicita\xE7\xE3o de troca de senha.`),og(),Sl(266,"h3"),eN(267,"Processos"),og(),Sl(268,"p"),eN(269,"Ao digitar um valor v\xE1lido no campo de email/telefone e pressionar "),Sl(270,"strong"),eN(271,"enviar"),og(),eN(272,`,
o componente far\xE1 uma requisi\xE7\xE3o `),Sl(273,"code"),eN(274,"POST"),og(),eN(275," na url especificada nesta propriedade passando o objeto contendo o valor definido pelo usu\xE1rio."),og(),Sl(276,"pre")(277,"code"),eN(278,`body {
 email: email,
 retry?: retry
}
`),og()(),Sl(279,"h4"),eN(280,"Recupera\xE7\xE3o por email"),og(),Sl(281,"p"),eN(282,"Para a recupera\xE7\xE3o de senha por "),Sl(283,"strong"),eN(284,"email"),og(),eN(285,", o c\xF3digo de resposta HTTP de status esperado \xE9 "),Sl(286,"code"),eN(287,"204"),og(),eN(288,"."),og(),Sl(289,"p"),eN(290,"Em caso de "),Sl(291,"strong"),eN(292,"sucesso"),og(),eN(293,", ser\xE1 exibida a modal de confirma\xE7\xE3o de e-mail para o usu\xE1rio."),og(),Sl(294,"blockquote")(295,"p"),eN(296,"A a\xE7\xE3o "),Sl(297,"strong"),eN(298,"Reenviar"),og(),eN(299,` na tela de confirma\xE7\xE3o efetua uma nova requisi\xE7\xE3o
passando-se o objeto com incremento para o valor da propriedade `),Sl(300,"strong"),eN(301,"retry"),og(),eN(302,"."),og()(),Sl(303,"p")(304,"em"),eN(305,"Processo finalizado."),og()(),Sl(306,"h4"),eN(307,"Recupera\xE7\xE3o por SMS"),og(),Sl(308,"p"),eN(309,"Se a op\xE7\xE3o de recupera\xE7\xE3o for por "),Sl(310,"strong"),eN(311,"SMS"),og(),eN(312,", o c\xF3digo de status de sucesso deve ser "),Sl(313,"code"),eN(314,"200"),og(),eN(315,`.
Em caso de `),Sl(316,"strong"),eN(317,"sucesso"),og(),eN(318,`, abre-se a modal de digita\xE7\xE3o de c\xF3digo SMS e a resposta
desta requisi\xE7\xE3o deve retornar uma defini\xE7\xE3o de dados abaixo:`),og(),Sl(319,"pre")(320,"code"),eN(321,`200:
{
  hash: hash,
  urlValidationCode?: url
}
`),og()(),Sl(322,"ul")(323,"li"),eN(324,"O "),Sl(325,"strong"),eN(326,"hash"),og(),eN(327," ser\xE1 o c\xF3digo de valida\xE7\xE3o da solicita\xE7\xE3o do SMS para ser enviado juntamente com o c\xF3digo de verifica\xE7\xE3o do SMS;"),og(),Sl(328,"li")(329,"strong"),eN(330,"urlValidationCode"),og(),eN(331," \xE9 a url usada para valida\xE7\xE3o do c\xF3digo enviado por SMS."),og()(),Sl(332,"blockquote")(333,"p"),eN(334,"Caso n\xE3o seja passado urlValidationCode, o endpoint usado para valida\xE7\xE3o do c\xF3digo ser\xE1 "),Sl(335,"code"),eN(336,"<p-url-recovery>/validation"),og(),eN(337,"."),og()(),Sl(338,"h4"),eN(339,"Valida\xE7\xE3o do c\xF3digo SMS"),og(),Sl(340,"p"),eN(341,"Ao digitar um valor v\xE1lido no campo de c\xF3digo SMS e pressionar "),Sl(342,"strong"),eN(343,"continuar"),og(),eN(344,", o componente far\xE1 uma requisi\xE7\xE3o "),Sl(345,"code"),eN(346,"POST"),og(),eN(347," contendo:"),og(),Sl(348,"pre")(349,"code"),eN(350,`POST /<p-url-recovery>/validation OU /<urlValidationCode>
Body {
 hash: hash,
 code: code
}
`),og()(),Sl(351,"p"),eN(352,"O c\xF3digo de resposta HTTP de status esperado \xE9 "),Sl(353,"code"),eN(354,"200"),og(),eN(355,"."),og(),Sl(356,"p"),eN(357,"Em caso de "),Sl(358,"strong"),eN(359,"erro"),og(),eN(360,` na valida\xE7\xE3o do c\xF3digo SMS, a modal se mant\xE9m com o campo para digita\xE7\xE3o
de c\xF3digo SMS`),og(),Sl(361,"blockquote")(362,"p"),eN(363,"Pode-se atribuir a mensagem de erro (message) para o atributo "),Sl(364,"code"),eN(365,"p-code-error"),og(),eN(366," conforme retorno abaixo:"),og()(),Sl(367,"pre")(368,"code"),eN(369,`400
{
  error {
    message: 'Error Message'
  }
}
`),og()(),Sl(370,"p"),eN(371,"Em caso de "),Sl(372,"strong"),eN(373,"sucesso"),og(),eN(374,", espera-se a resposta desta requisi\xE7\xE3o retornando a seguinte defini\xE7\xE3o:"),og(),Sl(375,"pre")(376,"code"),eN(377,`200:
{
  token: token,
  urlChangePassword?: url
}
`),og()(),Sl(378,"ul")(379,"li")(380,"strong"),eN(381,"token"),og(),eN(382,": Token de altera\xE7\xE3o de senha;"),og(),Sl(383,"li")(384,"strong"),eN(385,"urlChangePassword"),og(),eN(386,": url para o formul\xE1rio de altera\xE7\xE3o de senha."),og()(),Sl(387,"p"),eN(388,"O componente est\xE1 configurado para redirecionar para a url estabelecida em "),Sl(389,"code"),eN(390,"urlChangePassword"),og(),eN(391,"."),og(),Sl(392,"blockquote")(393,"p"),eN(394,`Caso n\xE3o seja passado valor para urlChangePassword,
a url usada para valida\xE7\xE3o ser\xE1 a `),Sl(395,"code"),eN(396,"<p-url-recovery>/changePassword?token=<token>"),og(),eN(397,"."),og()(),Sl(398,"p")(399,"em"),eN(400,"Processo finalizado."),og()()()()(),Sl(401,"h3",9),eN(402,"M\xE9todos"),og(),Sl(403,"table",26)(404,"tr",13)(405,"th",27)(406,"div",15)(407,"h4")(408,"span",16),eN(409," completed "),og()()()()(),Sl(410,"tr",20)(411,"td",20)(412,"p"),eN(413,`Ac\xE3o para conclus\xE3o de processo e fechamento da modal. Indica-se sua utiliza\xE7\xE3o
para ap\xF3s o envio e valida\xE7\xE3o do c\xF3digo SMS enviado pelo usu\xE1rio.`),og(),Sl(414,"blockquote")(415,"p"),eN(416,"Nas modals em que h\xE1 a a\xE7\xE3o de 'cancelar' dispensa-se o uso desta a\xE7\xE3o pois o componente j\xE1 trata o fechamento da modal."),og()()()()(),Wl(417,"br"),Sl(418,"table",26)(419,"tr",13)(420,"th",27)(421,"div",15)(422,"h4")(423,"span",16),eN(424," open "),og()()()()(),Sl(425,"tr",20)(426,"td",20)(427,"p"),eN(428,"Abre a modal de preenchimento de email ou n\xFAmero de telefone para solicita\xE7\xE3o de troca de senha."),og()()()(),Wl(429,"br"),Sl(430,"table",26)(431,"tr",13)(432,"th",27)(433,"div",15)(434,"h4")(435,"span",16),eN(436," openConfirmation "),og()()()()(),Sl(437,"tr",20)(438,"td",20)(439,"p"),eN(440,"Abre a modal de confirma\xE7\xE3o de envio de email."),og()()()(),Wl(441,"br"),Sl(442,"table",26)(443,"tr",13)(444,"th",27)(445,"div",15)(446,"h4")(447,"span",16),eN(448," openSmsCode "),og()()()()(),Sl(449,"tr",20)(450,"td",20)(451,"p"),eN(452,"Abre a modal de preenchimento do c\xF3digo SMS enviado ao usu\xE1rio."),og()()()(),Wl(453,"br"),Sl(454,"h3"),eN(455,"Interfaces"),og(),Sl(456,"h4",28)(457,"code",5),eN(458,"PoModalPasswordRecovery"),og()(),Sl(459,"div",2)(460,"p"),eN(461,"Interface com a defini\xE7\xE3o do objeto gerado pelo formul\xE1rio do componente "),Sl(462,"code"),eN(463,"po-modal-password-recovery"),og(),eN(464,"."),og()(),Sl(465,"h4",9),eN(466,"Propriedades"),og(),Sl(467,"table",10)(468,"tr",11)(469,"th",12),eN(470,"Nome"),og(),Sl(471,"th",12),eN(472,"Tipo"),og(),Sl(473,"th",12),eN(474,"Descri\xE7\xE3o"),og()(),Sl(475,"tr",13)(476,"td",14)(477,"div",15)(478,"span",16),eN(479," code"),Wl(480,"br"),og()()(),Sl(481,"td",17)(482,"code",18),eN(483,"string"),og()(),Sl(484,"td",20)(485,"em")(486,"strong"),eN(487,"(opcional)"),og()(),Sl(488,"p"),eN(489,"Valor contendo o c\xF3digo enviado por SMS e digitado pelo usu\xE1rio."),og()()(),Sl(490,"tr",13)(491,"td",14)(492,"div",15)(493,"span",16),eN(494," email"),Wl(495,"br"),og()()(),Sl(496,"td",17)(497,"code",18),eN(498,"string"),og()(),Sl(499,"td",20)(500,"em")(501,"strong"),eN(502,"(opcional)"),og()(),Sl(503,"p"),eN(504,"Valor contendo o email enviado pelo usu\xE1rio."),og()()(),Sl(505,"tr",13)(506,"td",14)(507,"div",15)(508,"span",16),eN(509," hash"),Wl(510,"br"),og()()(),Sl(511,"td",17)(512,"code",18),eN(513,"string"),og()(),Sl(514,"td",20)(515,"em")(516,"strong"),eN(517,"(opcional)"),og()(),Sl(518,"p"),eN(519,"C\xF3digo de valida\xE7\xE3o da solicita\xE7\xE3o do SMS para ser enviado junto com o c\xF3digo de verifica\xE7\xE3o do SMS"),og()()(),Sl(520,"tr",13)(521,"td",14)(522,"div",15)(523,"span",16),eN(524," retry"),Wl(525,"br"),og()()(),Sl(526,"td",17)(527,"code",29),eN(528,"number"),og()(),Sl(529,"td",20)(530,"em")(531,"strong"),eN(532,"(opcional)"),og()(),Sl(533,"p"),eN(534,"N\xFAmero de tentativas de reenvio."),og()()(),Sl(535,"tr",13)(536,"td",14)(537,"div",15)(538,"span",16),eN(539," sms"),Wl(540,"br"),og()()(),Sl(541,"td",17)(542,"code",18),eN(543,"string"),og()(),Sl(544,"td",20)(545,"em")(546,"strong"),eN(547,"(opcional)"),og()(),Sl(548,"p"),eN(549,"Valor contendo o n\xFAmero de telefone enviado pelo usu\xE1rio."),og()()(),Sl(550,"tr",13)(551,"td",14)(552,"div",15)(553,"span",16),eN(554," token"),Wl(555,"br"),og()()(),Sl(556,"td",17)(557,"code",18),eN(558,"string"),og()(),Sl(559,"td",20)(560,"em")(561,"strong"),eN(562,"(opcional)"),og()(),Sl(563,"p"),eN(564,"Token de altera\xE7\xE3o de senha"),og()()(),Sl(565,"tr",13)(566,"td",14)(567,"div",15)(568,"span",16),eN(569," urlChangePassword"),Wl(570,"br"),og()()(),Sl(571,"td",17)(572,"code",18),eN(573,"string"),og()(),Sl(574,"td",20)(575,"em")(576,"strong"),eN(577,"(opcional)"),og()(),Sl(578,"p"),eN(579,"URL para o formul\xE1rio de altera\xE7\xE3o de senha"),og()()(),Sl(580,"tr",13)(581,"td",14)(582,"div",15)(583,"span",16),eN(584," urlValidationCode"),Wl(585,"br"),og()()(),Sl(586,"td",17)(587,"code",18),eN(588,"string"),og()(),Sl(589,"td",20)(590,"em")(591,"strong"),eN(592,"(opcional)"),og()(),Sl(593,"p"),eN(594,"URL usada para valida\xE7\xE3o do c\xF3digo enviado por SMS"),og()()()(),Sl(595,"h3"),eN(596,"Enums"),og(),Sl(597,"h4",4)(598,"code",5),eN(599,"PoModalPasswordRecoveryType"),og()(),Sl(600,"div",2)(601,"p")(602,"em"),eN(603,"Enum"),og(),eN(604," para especifica\xE7\xE3o do tipo de recupera\xE7\xE3o de senha."),og()(),Sl(605,"h4",9),eN(606,"Propriedades"),og(),Sl(607,"table",10)(608,"tr",11)(609,"th",12),eN(610,"Nome"),og(),Sl(611,"th",12),eN(612,"Descri\xE7\xE3o"),og()(),Sl(613,"tr",13)(614,"td",14)(615,"div",15)(616,"span",16),eN(617," All"),Wl(618,"br"),og()()(),Sl(619,"td",20)(620,"p"),eN(621,"Possibilita ao usu\xE1rio optar por envio via email ou SMS"),og()()(),Sl(622,"tr",13)(623,"td",14)(624,"div",15)(625,"span",16),eN(626," Email"),Wl(627,"br"),og()()(),Sl(628,"td",20)(629,"p"),eN(630,"Defini\xE7\xE3o para recupera\xE7\xE3o apenas por email"),og()()(),Sl(631,"tr",13)(632,"td",14)(633,"div",15)(634,"span",16),eN(635," SMS"),Wl(636,"br"),og()()(),Sl(637,"td",20)(638,"p"),eN(639,"Defini\xE7\xE3o para recupera\xE7\xE3o apenas por SMS"),og()()()()());},dependencies:[Ka],encapsulation:2})}return i})();var Se=(()=>{class i{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(l,r){this.route=l,this.router=r;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let r=l.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:"merge"}),this.activeTab=l;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(r){return new(r||i)(w(Xn),w(En))};static \u0275cmp=Un({type:i,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Modal Password Recovery",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,n){r&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return n.changeTab("doc")}),Wl(3,"sample-po-modal-password-recovery-doc"),og(),Sl(4,"po-tab",3),ft("p-click",function(){return n.changeTab("web")}),Wl(5,"sample-po-modal-password-recovery-basic-view")(6,"sample-po-modal-password-recovery-labs-view")(7,"sample-po-modal-password-recovery-request-view"),og()()()),r&2&&(nw("p-actions",n.actions),Lp(2),nw("p-active",n.activeTab==="doc"),Lp(2),nw("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"));},dependencies:[rNe,Bme,qme,pe,ce,Ee,ve],encapsulation:2})}return i})();var _e=[{path:"",component:Se}],ye=(()=>{class i{static \u0275fac=function(r){return new(r||i)};static \u0275mod=fe({type:i});static \u0275inj=ue$1({imports:[hL.forChild(_e),hL]})}return i})();var rt=(()=>{class i{static \u0275fac=function(r){return new(r||i)};static \u0275mod=fe({type:i});static \u0275inj=ue$1({imports:[sr,ye]})}return i})();export{rt as DocPoModalPasswordRecoveryModule};