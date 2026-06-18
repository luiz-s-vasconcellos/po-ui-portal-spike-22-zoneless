import {f as fe,u as ue$1,s as sr,a as uL,C,c3 as Xn,E as En,U as Un,b as f,c5 as Vde,c6 as U,b0 as Qt,c7 as vo,aB as Dx,J as zl,H as Il,a1 as ft,R as og,an as DO,aH as Ka,b8 as qme,b9 as Yme,q as Qx,A as Lp,ar as Ux,au as dg,T as nw,bs as uN,aX as G9,aF as $9,aY as z9,aG as mk,aZ as hk,b1 as mv,b4 as O3,c8 as Dde,aJ as qhe,c9 as Yhe,aD as Xy,aE as Qy,aM as ww,aN as QA,aO as Ew,aP as e0,av as Gl,aw as co,ax as lo,aI as dc,a3 as cNe,bd as Ax,aT as eN}from'./main-QSTLMRDK.js';var de=(()=>{class i{static \u0275fac=function(r){return new(r||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-modal-password-recovery-basic"]],standalone:false,decls:3,vars:0,consts:[["passwordRecoveryModal",""],["p-label","Open modal password recovery",3,"p-click"]],template:function(r,n){if(r&1){let p=Dx();zl(0,"po-modal-password-recovery",null,0),Il(2,"po-button",1),ft("p-click",function(){Xy(p);let d=Ax(1);return Qy(d.open())}),og();}},dependencies:[Qt,vo],encapsulation:2,changeDetection:1})}return i})();var he=i=>({"docs-sample-code-tabs":i}),pe=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-modal-password-recovery-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Modal Password Recovery Basic"),og(),Il(4,"a",2),ft("click",function(){return n.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-modal-password-recovery-basic/sample-po-modal-password-recovery-basic.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-modal-password-recovery #passwordRecoveryModal></po-modal-password-recovery>

<po-button p-label="Open modal password recovery" (p-click)="passwordRecoveryModal.open()"> </po-button>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-modal-password-recovery-basic/sample-po-modal-password-recovery-basic.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-modal-password-recovery-basic',
  templateUrl: './sample-po-modal-password-recovery-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoModalPasswordRecoveryBasicComponent {}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-modal-password-recovery-basic"),og(),zl(23,"hr")),r&2&&(Lp(5),Ux("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,he,n.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,de],encapsulation:2})}return i})();var me=(()=>{class i{poDialog=f(Vde);poModalPasswordRecovery;codeError;componentsSize;email;event;invalidCode=true;invalidCodeMessage;phoneMask;submitEvent;type;componentsSizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];typeOptions=[{label:"All",value:U.All},{label:"Email",value:U.Email},{label:"SMS",value:U.SMS}];ngOnInit(){this.restore();}changeEvent(l){this.event=l;}openPasswordRecoveryModal(){this.poModalPasswordRecovery.open();}restore(){this.codeError=void 0,this.componentsSize="medium",this.email=void 0,this.event=void 0,this.phoneMask=void 0,this.submitEvent=void 0,this.type=U.Email;}submit(l){this.poDialog.alert({title:"Change Password Requested By User",message:`Submitted Object: ${JSON.stringify(l)}`,ok:()=>this.advanceModal(l)});}submitCode(l){this.poDialog.alert({title:"Emitted SMS Code By User",message:`Submitted Object: ${JSON.stringify(l)}`,ok:()=>this.resendCode(l)});}advanceModal(l){l.hasOwnProperty("sms")?this.openSmsCode(l):this.openConfirmation(l);}openConfirmation(l){this.submitEvent=JSON.stringify(l),this.poModalPasswordRecovery.openConfirmation();}openSmsCode(l){this.submitEvent=JSON.stringify(l),this.poModalPasswordRecovery.openSmsCode();}resendCode(l){this.submitEvent=JSON.stringify(event),this.invalidCode&&this.invalidCodeMessage?(this.invalidCode=!this.invalidCode,this.codeError=this.invalidCodeMessage,this.poModalPasswordRecovery.openSmsCode()):(this.codeError=void 0,this.invalidCode=!this.invalidCode,this.poModalPasswordRecovery.completed());}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-modal-password-recovery-labs"]],viewQuery:function(r,n){if(r&1&&Gl(vo,5),r&2){let p;co(p=lo())&&(n.poModalPasswordRecovery=p.first);}},standalone:false,decls:17,vars:14,consts:[["f","ngForm"],[3,"p-code-submit","p-submit","p-code-error","p-components-size","p-contact-email","p-phone-mask","p-type"],["p-label","Open modal password recovery",3,"p-click"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","type","p-label","Type",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","invalidCodeMessage","p-clean","","p-label","Code Error","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","email","p-clean","","p-label","Email","p-maxlength","30","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","phoneMask","p-clean","","p-label","Phone Mask","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","componentsSize","p-label","Components size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(r,n){if(r&1){let p=Dx();Il(0,"po-modal-password-recovery",1),ft("p-code-submit",function(d){return Xy(p),n.submitCode(d),Qy(n.changeEvent("p-submit-code"))})("p-submit",function(d){return Xy(p),n.submit(d),Qy(n.changeEvent("p-submit"))}),og(),Il(1,"po-button",2),ft("p-click",function(){return n.openPasswordRecoveryModal()}),og(),zl(2,"po-divider"),Il(3,"div",3),zl(4,"po-info",4)(5,"po-info",5),og(),zl(6,"po-divider"),Il(7,"form",null,0)(9,"div",3)(10,"po-select",6),ww("ngModelChange",function(d){return Xy(p),eN(n.type,d)||(n.type=d),Qy(d)}),og(),QA(),Il(11,"po-input",7),ww("ngModelChange",function(d){return Xy(p),eN(n.invalidCodeMessage,d)||(n.invalidCodeMessage=d),Qy(d)}),og(),QA(),Il(12,"po-input",8),ww("ngModelChange",function(d){return Xy(p),eN(n.email,d)||(n.email=d),Qy(d)}),og(),QA(),Il(13,"po-input",9),ww("ngModelChange",function(d){return Xy(p),eN(n.phoneMask,d)||(n.phoneMask=d),Qy(d)}),og(),QA(),Il(14,"po-radio-group",10),ww("ngModelChange",function(d){return Xy(p),eN(n.componentsSize,d)||(n.componentsSize=d),Qy(d)}),og(),QA(),og(),Il(15,"div",3)(16,"po-button",11),ft("p-click",function(){return Xy(p),Ax(8).reset(),Qy(n.restore())}),og()()();}r&2&&(nw("p-code-error",n.codeError)("p-components-size",n.componentsSize)("p-contact-email",n.email)("p-phone-mask",n.phoneMask)("p-type",n.type),Lp(4),nw("p-value",n.submitEvent),Lp(),nw("p-value",n.event),Lp(5),Ew("ngModel",n.type),nw("p-options",n.typeOptions),e0(),Lp(),Ew("ngModel",n.invalidCodeMessage),e0(),Lp(),Ew("ngModel",n.email),e0(),Lp(),Ew("ngModel",n.phoneMask),e0(),Lp(),Ew("ngModel",n.componentsSize),nw("p-options",n.componentsSizeOptions),e0());},dependencies:[G9,$9,z9,mk,hk,Qt,mv,O3,Dde,qhe,Yhe,vo],encapsulation:2,changeDetection:1})}return i})();var we=i=>({"docs-sample-code-tabs":i}),ce=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-modal-password-recovery-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Modal Password Recovery Labs"),og(),Il(4,"a",2),ft("click",function(){return n.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-modal-password-recovery-labs/sample-po-modal-password-recovery-labs.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-modal-password-recovery
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
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-modal-password-recovery-labs/sample-po-modal-password-recovery-labs.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-modal-password-recovery-labs"),og(),zl(23,"hr")),r&2&&(Lp(5),Ux("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,we,n.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,me],encapsulation:2})}return i})();var ue=(()=>{class i{poModalPasswordRecovery;type=U.All;urlRecovery="https://po-sample-api.onrender.com/v1/users";openPasswordRecoveryModal(){this.poModalPasswordRecovery.open();}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-modal-password-recovery-request"]],viewQuery:function(r,n){if(r&1&&Gl(vo,5),r&2){let p;co(p=lo())&&(n.poModalPasswordRecovery=p.first);}},standalone:false,decls:14,vars:2,consts:[[1,"po-row"],["p-label","Data Phone","p-value","(99) 99999-9999",1,"po-md-2"],["p-label","Data Email","p-value","mail@mail.com",1,"po-md-2"],["p-label","Data SMS Code","p-value","999999",1,"po-md-2"],["src","./assets/images/expired.svg",1,"po-page-blocked-user-image","po-mb-5","po-mt-5"],[1,"po-font-title","po-text-center","po-md-12","po-mb-2"],[1,"po-font-text","po-text-center","po-md-12","po-mb-5","po-text-color-neutral-dark-40"],["p-label","Forgot your password?","p-kind","primary",1,"po-mb-5","po-offset-md-3","po-md-6","po-offset-lg-4","po-lg-4","po-offset-xl-4","po-xl-4",3,"p-click"],[3,"p-type","p-url-recovery"]],template:function(r,n){r&1&&(Il(0,"po-container")(1,"div",0),zl(2,"po-info",1)(3,"po-info",2)(4,"po-info",3),og()(),Il(5,"po-container"),zl(6,"img",4),Il(7,"div",0)(8,"p",5),Qx(9,"Oops!"),og(),Il(10,"p",6),Qx(11," Password Recovery Requested by user "),og(),Il(12,"po-button",7),ft("p-click",function(){return n.openPasswordRecoveryModal()}),og()()(),zl(13,"po-modal-password-recovery",8)),r&2&&(Lp(13),nw("p-type",n.type)("p-url-recovery",n.urlRecovery));},dependencies:[Qt,dc,Yhe,vo],encapsulation:2,changeDetection:1})}return i})();var xe=i=>({"docs-sample-code-tabs":i}),Ee=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-modal-password-recovery-request-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Modal Password Recovery Request"),og(),Il(4,"a",2),ft("click",function(){return n.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-modal-password-recovery-request/sample-po-modal-password-recovery-request.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-container>
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
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-modal-password-recovery-request/sample-po-modal-password-recovery-request.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-modal-password-recovery-request"),og(),zl(23,"hr")),r&2&&(Lp(5),Ux("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,xe,n.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,ue],encapsulation:2})}return i})();var ve=(()=>{class i{static \u0275fac=function(r){return new(r||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-modal-password-recovery-doc"]],standalone:false,decls:640,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","PoModalPasswordRecoveryType"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","number"]],template:function(r,n){r&1&&(Il(0,"div",0)(1,"p",1)(2,"code"),Qx(3,"import { PoModalPasswordRecoveryModule } from '@po-ui/ng-templates';"),og()(),Il(4,"div",2)(5,"p"),Qx(6,"M\xF3dulo do template do po-modal-password-recovery."),og()(),Il(7,"h3",3),Qx(8,"Componente"),og(),Il(9,"h4",4)(10,"code",5),Qx(11,"PoModalPasswordRecoveryComponent"),og()(),Il(12,"div",2)(13,"p"),Qx(14,"O componente "),Il(15,"code"),Qx(16,"po-modal-password-recovery"),og(),Qx(17," \xE9 utilizado como template para solicita\xE7\xE3o de troca de senha."),og(),Il(18,"p"),Qx(19,"\xC9 composto por uma modal que possui tr\xEAs telas, cada uma com as seguintes caracter\xEDsticas:"),og(),Il(20,"ul")(21,"li"),Qx(22,"A primeira possui campos para preenchimento de email ou n\xFAmero de telefone;"),og(),Il(23,"li"),Qx(24,"Tela com campo para preenchimento de c\xF3digo SMS enviado para o n\xFAmero de telefone enviado;"),og(),Il(25,"li"),Qx(26,"A terceira se trata de uma confirma\xE7\xE3o de envio de link para a caixa de email do usu\xE1rio."),og()(),Il(27,"p"),Qx(28,"A propriedade "),Il(29,"code"),Qx(30,"p-url-recovery"),og(),Qx(31,` automatiza a rotina do componente e simplifica o processo
para recupera\xE7\xE3o de senha, bastando definir uma url para requisi\xE7\xE3o dos recursos.
Seu detalhamento para uso pode ser visto logo abaixo em `),Il(32,"em"),Qx(33,"propriedades"),og(),Qx(34,`.
Caso julgue necess\xE1rio, pode-se tamb\xE9m definir manualmente a rotina do componente.`),og(),Il(35,"p"),Qx(36,`Para a modal de digita\xE7\xE3o de c\xF3digo SMS, \xE9 poss\xEDvel definir uma mensagem de erro
customizada com a propriedade `),Il(37,"code"),Qx(38,"p-code-error"),og(),Qx(39,` e h\xE1 um link para
reenvio de c\xF3digo por SMS. Ao reenviar, o evento `),Il(40,"code"),Qx(41,"p-code-submit"),og(),Qx(42,` envia um objeto com o telefone do usu\xE1rio e a quantidade
de vezes em que o usu\xE1rio fez a solicita\xE7\xE3o de reenvio.`),og(),Il(43,"blockquote")(44,"p"),Qx(45,`\xC9 indicada a utiliza\xE7\xE3o da tela de digita\xE7\xE3o para envio de c\xF3digo SMS apenas
se a op\xE7\xE3o por envio SMS for disponibilizada para o usu\xE1rio.`),og()(),Il(46,"p"),Qx(47,"A modal de confirma\xE7\xE3o cont\xE9m uma a\xE7\xE3o de reenvio e o evento "),Il(48,"code"),Qx(49,"p-submit"),og(),Qx(50,`
\xE9 quem passa o objeto contendo o email em conjunto com a quantidade de tentativas de reenvio.`),og(),Il(51,"blockquote")(52,"p"),Qx(53,"A tela de confirma\xE7\xE3o \xE9 indicada para quando o usu\xE1rio solicitar a troca atrav\xE9s do email."),og()(),Il(54,"blockquote")(55,"p"),Qx(56,"Os textos das modals s\xE3o pr\xE9-definidos, imut\xE1veis e s\xE3o traduzidos de acordo com o idioma do "),Il(57,"em"),Qx(58,"browser"),og(),Qx(59," (pt, en e es)"),og()(),Il(60,"p"),Qx(61,`Para que as imagens sejam exibidas corretamente, \xE9 necess\xE1rio incluir o caminho delas ao projeto. Para isso, edite
o `),Il(62,"em"),Qx(63,"assets"),og(),Qx(64," no arquivo "),Il(65,"strong"),Qx(66,"angular.json"),og(),Qx(67," da aplica\xE7\xE3o na seguinte ordem:"),og(),Il(68,"pre")(69,"code"),Qx(70,`"assets": [
  "src/assets",
  "src/favicon.ico",
  {
    "glob": "**\\/*",
    "input": "node_modules/@po-ui/style/images",
    "output": "assets/images"
  }
]
`),og()()(),Il(71,"div",6)(72,"h4",7),Qx(73,"Seletor"),og(),Il(74,"pre",8),Qx(75,`<po-modal-password-recovery
    p-code-error="string"
    (p-code-submit)="EventEmitter"
    p-components-size="string"
    p-contact-email="string"
    p-phone-mask="string"
    (p-submit)="EventEmitter"
    p-type="PoModalPasswordRecoveryType"
    p-url-recovery="string" >
</po-modal-password-recovery>
`),og()(),Il(76,"h4",9),Qx(77,"Propriedades"),og(),Il(78,"table",10)(79,"tr",11)(80,"th",12),Qx(81,"Nome"),og(),Il(82,"th",12),Qx(83,"Tipo"),og(),Il(84,"th",12),Qx(85,"Padr\xE3o"),og(),Il(86,"th",12),Qx(87,"Descri\xE7\xE3o"),og()(),Il(88,"tr",13)(89,"td",14)(90,"div",15)(91,"span",16),Qx(92," p-code-error"),zl(93,"br"),og()()(),Il(94,"td",17)(95,"code",18),Qx(96,"string"),og()(),Il(97,"td",19),Qx(98,"-"),og(),Il(99,"td",20)(100,"em")(101,"strong"),Qx(102,"(opcional)"),og()(),Il(103,"p"),Qx(104,"Defini\xE7\xE3o de mensagem de erro customizada para quando o usu\xE1rio passar um c\xF3digo SMS inv\xE1lido ou errado."),og()()(),Il(105,"tr",13)(106,"td",14)(107,"div",21)(108,"span",22),Qx(109," (p-code-submit)"),zl(110,"br"),og()()(),Il(111,"td",17)(112,"code",23),Qx(113,"EventEmitter"),og()(),Il(114,"td",19),Qx(115,"-"),og(),Il(116,"td",20)(117,"em")(118,"strong"),Qx(119,"(opcional)"),og()(),Il(120,"p"),Qx(121,"A\xE7\xE3o contendo como par\xE2metro o c\xF3digo enviado por SMS e digitado pelo usu\xE1rio."),og(),Il(122,"blockquote")(123,"p"),Qx(124,"Esta propriedade ser\xE1 ignorada se for definido valor para a propriedade "),Il(125,"code"),Qx(126,"p-url-recovery"),og(),Qx(127,"."),og()()()(),Il(128,"tr",13)(129,"td",14)(130,"div",15)(131,"span",16),Qx(132," p-components-size"),zl(133,"br"),og()()(),Il(134,"td",17)(135,"code",18),Qx(136,"string"),og()(),Il(137,"td",19)(138,"p")(139,"code"),Qx(140,"medium"),og()()(),Il(141,"td",20)(142,"em")(143,"strong"),Qx(144,"(opcional)"),og()(),Il(145,"p"),Qx(146,"Define o tamanho dos componentes de formul\xE1rio no modal:"),og(),Il(147,"ul")(148,"li")(149,"code"),Qx(150,"small"),og(),Qx(151,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),og(),Il(152,"li")(153,"code"),Qx(154,"medium"),og(),Qx(155,": aplica a medida medium de cada componente."),og()(),Il(156,"blockquote")(157,"p"),Qx(158,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Il(159,"code"),Qx(160,"medium"),og(),Qx(161,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Il(162,"a",24),Qx(163,"po-theme"),og(),Qx(164,"."),og()()()(),Il(165,"tr",13)(166,"td",14)(167,"div",15)(168,"span",16),Qx(169," p-contact-email"),zl(170,"br"),og()()(),Il(171,"td",17)(172,"code",18),Qx(173,"string"),og()(),Il(174,"td",19),Qx(175,"-"),og(),Il(176,"td",20)(177,"em")(178,"strong"),Qx(179,"(opcional)"),og()(),Il(180,"p"),Qx(181,"Defini\xE7\xE3o do e-mail que \xE9 exibido na mensagem para contato de suporte."),og()()(),Il(182,"tr",13)(183,"td",14)(184,"div",15)(185,"span",16),Qx(186," p-phone-mask"),zl(187,"br"),og()()(),Il(188,"td",17)(189,"code",18),Qx(190,"string"),og()(),Il(191,"td",19)(192,"p")(193,"code"),Qx(194,"(99) 99999-9999"),og()()(),Il(195,"td",20)(196,"em")(197,"strong"),Qx(198,"(opcional)"),og()(),Il(199,"p"),Qx(200,"Defini\xE7\xE3o da mascara do campo de telefone."),og()()(),Il(201,"tr",13)(202,"td",14)(203,"div",21)(204,"span",22),Qx(205," (p-submit)"),zl(206,"br"),og()()(),Il(207,"td",17)(208,"code",23),Qx(209,"EventEmitter"),og()(),Il(210,"td",19),Qx(211,"-"),og(),Il(212,"td",20)(213,"em")(214,"strong"),Qx(215,"(opcional)"),og()(),Il(216,"p"),Qx(217,"A\xE7\xE3o contendo o email como par\xE2metro e que \xE9 executada quando o usu\xE1rio clica sobres os bot\xF5es de 'enviar' e 'reenviar' e-mail."),og(),Il(218,"blockquote")(219,"p"),Qx(220,"Esta propriedade ser\xE1 ignorada se for definido valor para a propriedade "),Il(221,"code"),Qx(222,"p-url-recovery"),og(),Qx(223,"."),og()()()(),Il(224,"tr",13)(225,"td",14)(226,"div",15)(227,"span",16),Qx(228," p-type"),zl(229,"br"),og()()(),Il(230,"td",17)(231,"code",25),Qx(232,"PoModalPasswordRecoveryType"),og()(),Il(233,"td",19)(234,"p")(235,"code"),Qx(236,"PoModalPasswordRecoveryType.Email"),og()()(),Il(237,"td",20)(238,"em")(239,"strong"),Qx(240,"(opcional)"),og()(),Il(241,"p"),Qx(242,"Define o tipo de recupera\xE7\xE3o de senha que ser\xE1 exibido."),og()()(),Il(243,"tr",13)(244,"td",14)(245,"div",15)(246,"span",16),Qx(247," p-url-recovery"),zl(248,"br"),og()()(),Il(249,"td",17)(250,"code",18),Qx(251,"string"),og()(),Il(252,"td",19),Qx(253,"-"),og(),Il(254,"td",20)(255,"em")(256,"strong"),Qx(257,"(opcional)"),og()(),Il(258,"p"),Qx(259,`Endpoint usado pelo template para requisi\xE7\xE3o do recurso. Quando preenchido,
o m\xE9todos `),Il(260,"code"),Qx(261,"p-submit"),og(),Qx(262," e "),Il(263,"code"),Qx(264,"p-submit-code"),og(),Qx(265,` ser\xE3o ignorados e o componente adquirir\xE1 automatiza\xE7\xE3o
para o processo de solicita\xE7\xE3o de troca de senha.`),og(),Il(266,"h3"),Qx(267,"Processos"),og(),Il(268,"p"),Qx(269,"Ao digitar um valor v\xE1lido no campo de email/telefone e pressionar "),Il(270,"strong"),Qx(271,"enviar"),og(),Qx(272,`,
o componente far\xE1 uma requisi\xE7\xE3o `),Il(273,"code"),Qx(274,"POST"),og(),Qx(275," na url especificada nesta propriedade passando o objeto contendo o valor definido pelo usu\xE1rio."),og(),Il(276,"pre")(277,"code"),Qx(278,`body {
 email: email,
 retry?: retry
}
`),og()(),Il(279,"h4"),Qx(280,"Recupera\xE7\xE3o por email"),og(),Il(281,"p"),Qx(282,"Para a recupera\xE7\xE3o de senha por "),Il(283,"strong"),Qx(284,"email"),og(),Qx(285,", o c\xF3digo de resposta HTTP de status esperado \xE9 "),Il(286,"code"),Qx(287,"204"),og(),Qx(288,"."),og(),Il(289,"p"),Qx(290,"Em caso de "),Il(291,"strong"),Qx(292,"sucesso"),og(),Qx(293,", ser\xE1 exibida a modal de confirma\xE7\xE3o de e-mail para o usu\xE1rio."),og(),Il(294,"blockquote")(295,"p"),Qx(296,"A a\xE7\xE3o "),Il(297,"strong"),Qx(298,"Reenviar"),og(),Qx(299,` na tela de confirma\xE7\xE3o efetua uma nova requisi\xE7\xE3o
passando-se o objeto com incremento para o valor da propriedade `),Il(300,"strong"),Qx(301,"retry"),og(),Qx(302,"."),og()(),Il(303,"p")(304,"em"),Qx(305,"Processo finalizado."),og()(),Il(306,"h4"),Qx(307,"Recupera\xE7\xE3o por SMS"),og(),Il(308,"p"),Qx(309,"Se a op\xE7\xE3o de recupera\xE7\xE3o for por "),Il(310,"strong"),Qx(311,"SMS"),og(),Qx(312,", o c\xF3digo de status de sucesso deve ser "),Il(313,"code"),Qx(314,"200"),og(),Qx(315,`.
Em caso de `),Il(316,"strong"),Qx(317,"sucesso"),og(),Qx(318,`, abre-se a modal de digita\xE7\xE3o de c\xF3digo SMS e a resposta
desta requisi\xE7\xE3o deve retornar uma defini\xE7\xE3o de dados abaixo:`),og(),Il(319,"pre")(320,"code"),Qx(321,`200:
{
  hash: hash,
  urlValidationCode?: url
}
`),og()(),Il(322,"ul")(323,"li"),Qx(324,"O "),Il(325,"strong"),Qx(326,"hash"),og(),Qx(327," ser\xE1 o c\xF3digo de valida\xE7\xE3o da solicita\xE7\xE3o do SMS para ser enviado juntamente com o c\xF3digo de verifica\xE7\xE3o do SMS;"),og(),Il(328,"li")(329,"strong"),Qx(330,"urlValidationCode"),og(),Qx(331," \xE9 a url usada para valida\xE7\xE3o do c\xF3digo enviado por SMS."),og()(),Il(332,"blockquote")(333,"p"),Qx(334,"Caso n\xE3o seja passado urlValidationCode, o endpoint usado para valida\xE7\xE3o do c\xF3digo ser\xE1 "),Il(335,"code"),Qx(336,"<p-url-recovery>/validation"),og(),Qx(337,"."),og()(),Il(338,"h4"),Qx(339,"Valida\xE7\xE3o do c\xF3digo SMS"),og(),Il(340,"p"),Qx(341,"Ao digitar um valor v\xE1lido no campo de c\xF3digo SMS e pressionar "),Il(342,"strong"),Qx(343,"continuar"),og(),Qx(344,", o componente far\xE1 uma requisi\xE7\xE3o "),Il(345,"code"),Qx(346,"POST"),og(),Qx(347," contendo:"),og(),Il(348,"pre")(349,"code"),Qx(350,`POST /<p-url-recovery>/validation OU /<urlValidationCode>
Body {
 hash: hash,
 code: code
}
`),og()(),Il(351,"p"),Qx(352,"O c\xF3digo de resposta HTTP de status esperado \xE9 "),Il(353,"code"),Qx(354,"200"),og(),Qx(355,"."),og(),Il(356,"p"),Qx(357,"Em caso de "),Il(358,"strong"),Qx(359,"erro"),og(),Qx(360,` na valida\xE7\xE3o do c\xF3digo SMS, a modal se mant\xE9m com o campo para digita\xE7\xE3o
de c\xF3digo SMS`),og(),Il(361,"blockquote")(362,"p"),Qx(363,"Pode-se atribuir a mensagem de erro (message) para o atributo "),Il(364,"code"),Qx(365,"p-code-error"),og(),Qx(366," conforme retorno abaixo:"),og()(),Il(367,"pre")(368,"code"),Qx(369,`400
{
  error {
    message: 'Error Message'
  }
}
`),og()(),Il(370,"p"),Qx(371,"Em caso de "),Il(372,"strong"),Qx(373,"sucesso"),og(),Qx(374,", espera-se a resposta desta requisi\xE7\xE3o retornando a seguinte defini\xE7\xE3o:"),og(),Il(375,"pre")(376,"code"),Qx(377,`200:
{
  token: token,
  urlChangePassword?: url
}
`),og()(),Il(378,"ul")(379,"li")(380,"strong"),Qx(381,"token"),og(),Qx(382,": Token de altera\xE7\xE3o de senha;"),og(),Il(383,"li")(384,"strong"),Qx(385,"urlChangePassword"),og(),Qx(386,": url para o formul\xE1rio de altera\xE7\xE3o de senha."),og()(),Il(387,"p"),Qx(388,"O componente est\xE1 configurado para redirecionar para a url estabelecida em "),Il(389,"code"),Qx(390,"urlChangePassword"),og(),Qx(391,"."),og(),Il(392,"blockquote")(393,"p"),Qx(394,`Caso n\xE3o seja passado valor para urlChangePassword,
a url usada para valida\xE7\xE3o ser\xE1 a `),Il(395,"code"),Qx(396,"<p-url-recovery>/changePassword?token=<token>"),og(),Qx(397,"."),og()(),Il(398,"p")(399,"em"),Qx(400,"Processo finalizado."),og()()()()(),Il(401,"h3",9),Qx(402,"M\xE9todos"),og(),Il(403,"table",26)(404,"tr",13)(405,"th",27)(406,"div",15)(407,"h4")(408,"span",16),Qx(409," completed "),og()()()()(),Il(410,"tr",20)(411,"td",20)(412,"p"),Qx(413,`Ac\xE3o para conclus\xE3o de processo e fechamento da modal. Indica-se sua utiliza\xE7\xE3o
para ap\xF3s o envio e valida\xE7\xE3o do c\xF3digo SMS enviado pelo usu\xE1rio.`),og(),Il(414,"blockquote")(415,"p"),Qx(416,"Nas modals em que h\xE1 a a\xE7\xE3o de 'cancelar' dispensa-se o uso desta a\xE7\xE3o pois o componente j\xE1 trata o fechamento da modal."),og()()()()(),zl(417,"br"),Il(418,"table",26)(419,"tr",13)(420,"th",27)(421,"div",15)(422,"h4")(423,"span",16),Qx(424," open "),og()()()()(),Il(425,"tr",20)(426,"td",20)(427,"p"),Qx(428,"Abre a modal de preenchimento de email ou n\xFAmero de telefone para solicita\xE7\xE3o de troca de senha."),og()()()(),zl(429,"br"),Il(430,"table",26)(431,"tr",13)(432,"th",27)(433,"div",15)(434,"h4")(435,"span",16),Qx(436," openConfirmation "),og()()()()(),Il(437,"tr",20)(438,"td",20)(439,"p"),Qx(440,"Abre a modal de confirma\xE7\xE3o de envio de email."),og()()()(),zl(441,"br"),Il(442,"table",26)(443,"tr",13)(444,"th",27)(445,"div",15)(446,"h4")(447,"span",16),Qx(448," openSmsCode "),og()()()()(),Il(449,"tr",20)(450,"td",20)(451,"p"),Qx(452,"Abre a modal de preenchimento do c\xF3digo SMS enviado ao usu\xE1rio."),og()()()(),zl(453,"br"),Il(454,"h3"),Qx(455,"Interfaces"),og(),Il(456,"h4",28)(457,"code",5),Qx(458,"PoModalPasswordRecovery"),og()(),Il(459,"div",2)(460,"p"),Qx(461,"Interface com a defini\xE7\xE3o do objeto gerado pelo formul\xE1rio do componente "),Il(462,"code"),Qx(463,"po-modal-password-recovery"),og(),Qx(464,"."),og()(),Il(465,"h4",9),Qx(466,"Propriedades"),og(),Il(467,"table",10)(468,"tr",11)(469,"th",12),Qx(470,"Nome"),og(),Il(471,"th",12),Qx(472,"Tipo"),og(),Il(473,"th",12),Qx(474,"Descri\xE7\xE3o"),og()(),Il(475,"tr",13)(476,"td",14)(477,"div",15)(478,"span",16),Qx(479," code"),zl(480,"br"),og()()(),Il(481,"td",17)(482,"code",18),Qx(483,"string"),og()(),Il(484,"td",20)(485,"em")(486,"strong"),Qx(487,"(opcional)"),og()(),Il(488,"p"),Qx(489,"Valor contendo o c\xF3digo enviado por SMS e digitado pelo usu\xE1rio."),og()()(),Il(490,"tr",13)(491,"td",14)(492,"div",15)(493,"span",16),Qx(494," email"),zl(495,"br"),og()()(),Il(496,"td",17)(497,"code",18),Qx(498,"string"),og()(),Il(499,"td",20)(500,"em")(501,"strong"),Qx(502,"(opcional)"),og()(),Il(503,"p"),Qx(504,"Valor contendo o email enviado pelo usu\xE1rio."),og()()(),Il(505,"tr",13)(506,"td",14)(507,"div",15)(508,"span",16),Qx(509," hash"),zl(510,"br"),og()()(),Il(511,"td",17)(512,"code",18),Qx(513,"string"),og()(),Il(514,"td",20)(515,"em")(516,"strong"),Qx(517,"(opcional)"),og()(),Il(518,"p"),Qx(519,"C\xF3digo de valida\xE7\xE3o da solicita\xE7\xE3o do SMS para ser enviado junto com o c\xF3digo de verifica\xE7\xE3o do SMS"),og()()(),Il(520,"tr",13)(521,"td",14)(522,"div",15)(523,"span",16),Qx(524," retry"),zl(525,"br"),og()()(),Il(526,"td",17)(527,"code",29),Qx(528,"number"),og()(),Il(529,"td",20)(530,"em")(531,"strong"),Qx(532,"(opcional)"),og()(),Il(533,"p"),Qx(534,"N\xFAmero de tentativas de reenvio."),og()()(),Il(535,"tr",13)(536,"td",14)(537,"div",15)(538,"span",16),Qx(539," sms"),zl(540,"br"),og()()(),Il(541,"td",17)(542,"code",18),Qx(543,"string"),og()(),Il(544,"td",20)(545,"em")(546,"strong"),Qx(547,"(opcional)"),og()(),Il(548,"p"),Qx(549,"Valor contendo o n\xFAmero de telefone enviado pelo usu\xE1rio."),og()()(),Il(550,"tr",13)(551,"td",14)(552,"div",15)(553,"span",16),Qx(554," token"),zl(555,"br"),og()()(),Il(556,"td",17)(557,"code",18),Qx(558,"string"),og()(),Il(559,"td",20)(560,"em")(561,"strong"),Qx(562,"(opcional)"),og()(),Il(563,"p"),Qx(564,"Token de altera\xE7\xE3o de senha"),og()()(),Il(565,"tr",13)(566,"td",14)(567,"div",15)(568,"span",16),Qx(569," urlChangePassword"),zl(570,"br"),og()()(),Il(571,"td",17)(572,"code",18),Qx(573,"string"),og()(),Il(574,"td",20)(575,"em")(576,"strong"),Qx(577,"(opcional)"),og()(),Il(578,"p"),Qx(579,"URL para o formul\xE1rio de altera\xE7\xE3o de senha"),og()()(),Il(580,"tr",13)(581,"td",14)(582,"div",15)(583,"span",16),Qx(584," urlValidationCode"),zl(585,"br"),og()()(),Il(586,"td",17)(587,"code",18),Qx(588,"string"),og()(),Il(589,"td",20)(590,"em")(591,"strong"),Qx(592,"(opcional)"),og()(),Il(593,"p"),Qx(594,"URL usada para valida\xE7\xE3o do c\xF3digo enviado por SMS"),og()()()(),Il(595,"h3"),Qx(596,"Enums"),og(),Il(597,"h4",4)(598,"code",5),Qx(599,"PoModalPasswordRecoveryType"),og()(),Il(600,"div",2)(601,"p")(602,"em"),Qx(603,"Enum"),og(),Qx(604," para especifica\xE7\xE3o do tipo de recupera\xE7\xE3o de senha."),og()(),Il(605,"h4",9),Qx(606,"Propriedades"),og(),Il(607,"table",10)(608,"tr",11)(609,"th",12),Qx(610,"Nome"),og(),Il(611,"th",12),Qx(612,"Descri\xE7\xE3o"),og()(),Il(613,"tr",13)(614,"td",14)(615,"div",15)(616,"span",16),Qx(617," All"),zl(618,"br"),og()()(),Il(619,"td",20)(620,"p"),Qx(621,"Possibilita ao usu\xE1rio optar por envio via email ou SMS"),og()()(),Il(622,"tr",13)(623,"td",14)(624,"div",15)(625,"span",16),Qx(626," Email"),zl(627,"br"),og()()(),Il(628,"td",20)(629,"p"),Qx(630,"Defini\xE7\xE3o para recupera\xE7\xE3o apenas por email"),og()()(),Il(631,"tr",13)(632,"td",14)(633,"div",15)(634,"span",16),Qx(635," SMS"),zl(636,"br"),og()()(),Il(637,"td",20)(638,"p"),Qx(639,"Defini\xE7\xE3o para recupera\xE7\xE3o apenas por SMS"),og()()()()());},dependencies:[Ka],encapsulation:2})}return i})();var Se=(()=>{class i{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(l,r){this.route=l,this.router=r;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let r=l.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:"merge"}),this.activeTab=l;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(r){return new(r||i)(C(Xn),C(En))};static \u0275cmp=Un({type:i,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Modal Password Recovery",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,n){r&1&&(Il(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return n.changeTab("doc")}),zl(3,"sample-po-modal-password-recovery-doc"),og(),Il(4,"po-tab",3),ft("p-click",function(){return n.changeTab("web")}),zl(5,"sample-po-modal-password-recovery-basic-view")(6,"sample-po-modal-password-recovery-labs-view")(7,"sample-po-modal-password-recovery-request-view"),og()()()),r&2&&(nw("p-actions",n.actions),Lp(2),nw("p-active",n.activeTab==="doc"),Lp(2),nw("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"));},dependencies:[cNe,qme,Yme,pe,ce,Ee,ve],encapsulation:2})}return i})();var _e=[{path:"",component:Se}],ye=(()=>{class i{static \u0275fac=function(r){return new(r||i)};static \u0275mod=fe({type:i});static \u0275inj=ue$1({imports:[uL.forChild(_e),uL]})}return i})();var rt=(()=>{class i{static \u0275fac=function(r){return new(r||i)};static \u0275mod=fe({type:i});static \u0275inj=ue$1({imports:[sr,ye]})}return i})();export{rt as DocPoModalPasswordRecoveryModule};