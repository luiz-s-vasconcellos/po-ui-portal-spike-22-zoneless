import {f as fe,u as ue,s as sr,a as uL,C,c3 as Xn,E as En,U as Un,c5 as Vde,aW as Yp,b0 as Qt,H as Il,a1 as ft,R as og,an as DO,aH as Ka,b8 as qme,b9 as Yme,J as zl,q as Qx,A as Lp,ar as Ux,au as dg,T as nw,bs as uN,aX as G9,aF as $9,aY as z9,aG as mk,aZ as hk,b1 as mv,c4 as C3,b4 as O3,c8 as Dde,c9 as Yhe,aB as Dx,aM as ww,aN as QA,bd as Ax,aO as Ew,aP as e0,a3 as cNe,av as Gl,aw as co,ax as lo,aD as Xy,aT as eN,aE as Qy}from'./main-QSTLMRDK.js';var ne=(()=>{class a{poDialog;constructor(p){this.poDialog=p;}static \u0275fac=function(l){return new(l||a)(C(Vde))};static \u0275cmp=Un({type:a,selectors:[["sample-po-dialog-basic"]],standalone:false,decls:1,vars:0,consts:[["p-label","Open Dialog",3,"p-click"]],template:function(l,n){l&1&&(Il(0,"po-button",0),ft("p-click",function(){return n.poDialog.alert({title:"PO Dialog",message:"PO Dialog"})}),og());},dependencies:[Qt],encapsulation:2,changeDetection:1})}return a})();var he=a=>({"docs-sample-code-tabs":a}),le=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-dialog-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Dialog Basic"),og(),Il(4,"a",2),ft("click",function(){return n.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-dialog-basic/sample-po-dialog-basic.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-button p-label="Open Dialog" (p-click)="poDialog.alert({ title: 'PO Dialog', message: 'PO Dialog' })"> </po-button>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-dialog-basic/sample-po-dialog-basic.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

import { PoDialogService } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-dialog-basic',
  templateUrl: './sample-po-dialog-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDialogBasicComponent {
  constructor(public poDialog: PoDialogService) {}
}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-dialog-basic"),og(),zl(23,"hr")),l&2&&(Lp(5),Ux("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,he,n.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,ne],encapsulation:2})}return a})();var re=(()=>{class a{poAlert;action;actionOptions;componentsSize="medium";dialogMethod;help;literals;literalsAlert;literalsConfirm;message;title;componentsSizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];dialogActionOptions=[{label:"Ok",value:"ok"},{label:"Cancel",value:"cancel"},{label:"Confirm",value:"confirm"},{label:"Close",value:"close"}];dialogMethodOptions=[{label:"Alert",value:"alert"},{label:"Confirm",value:"confirm"}];constructor(p){this.poAlert=p;}ngOnInit(){this.restore();}alertDialog(){this.poAlert.alert({componentsSize:this.componentsSize,literals:this.literalsAlert,title:this.title,message:this.message,ok:()=>this.actionOptions.includes("ok")?this.action="OK":void 0});}changeLiterals(){let p;try{p=this.literals?JSON.parse(this.literals):void 0;}catch(l){p=void 0;}this.dialogMethod==="alert"?this.literalsAlert=p:this.dialogMethod==="confirm"&&(this.literalsConfirm=p);}changeMethod(){this.dialogMethod==="alert"?this.help='Ex: { "ok": "Conclu\xEDdo" }':this.help='Ex: { "cancel": "N\xE3o", "confirm": "Sim" }';}confirmDialog(){this.poAlert.confirm({componentsSize:this.componentsSize,literals:this.literalsConfirm,title:this.title,message:this.message,confirm:()=>this.actionOptions.includes("confirm")?this.action="Confirm":void 0,cancel:()=>this.actionOptions.includes("cancel")?this.action="Cancel":void 0,close:()=>this.actionOptions.includes("close")?this.action="Close":void 0});}openDialog(){this.action="",this.dialogMethod==="alert"?this.alertDialog():this.confirmDialog();}restore(){this.action=void 0,this.actionOptions=[],this.componentsSize="medium",this.title="PO Dialog",this.message="PO Dialog",this.dialogMethod=void 0,this.literals=void 0,this.literalsAlert=void 0,this.literalsConfirm=void 0,this.help="";}static \u0275fac=function(l){return new(l||a)(C(Vde))};static \u0275cmp=Un({type:a,selectors:[["sample-po-dialog-labs"]],standalone:false,decls:15,vars:13,consts:[["f","ngForm"],["name","openDialog","p-label","Open Dialog",3,"p-click","p-disabled"],[1,"po-row"],["p-label","Action clicked",1,"po-md-12",3,"p-value"],["name","title","p-clean","","p-label","Title","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","message","p-clean","","p-label","Message","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","dialogMethod","p-label","Dialog method",1,"po-lg-6",3,"ngModelChange","p-change","ngModel","p-options"],["name","literals","p-clean","","p-label","Literals",1,"po-md-12","po-lg-6",3,"ngModelChange","p-blur","p-change-model","ngModel","p-disabled","p-help"],["name","actionOptions","p-columns","4","p-label","Action options",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","componentsSize","p-columns","4","p-label","Components size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(l,n){if(l&1){let d=Dx();Il(0,"po-button",1),ft("p-click",function(){return n.openDialog()}),og(),zl(1,"po-divider"),Il(2,"div",2),zl(3,"po-info",3),og(),zl(4,"po-divider"),Il(5,"form",null,0)(7,"po-input",4),ww("ngModelChange",function(o){return Xy(d),eN(n.title,o)||(n.title=o),Qy(o)}),og(),QA(),Il(8,"po-input",5),ww("ngModelChange",function(o){return Xy(d),eN(n.message,o)||(n.message=o),Qy(o)}),og(),QA(),Il(9,"po-radio-group",6),ww("ngModelChange",function(o){return Xy(d),eN(n.dialogMethod,o)||(n.dialogMethod=o),Qy(o)}),ft("p-change",function(){return n.changeMethod()}),og(),QA(),Il(10,"po-input",7),ww("ngModelChange",function(o){return Xy(d),eN(n.literals,o)||(n.literals=o),Qy(o)}),ft("p-blur",function(){return n.changeLiterals()})("p-change-model",function(){return n.changeLiterals()}),og(),QA(),Il(11,"po-checkbox-group",8),ww("ngModelChange",function(o){return Xy(d),eN(n.actionOptions,o)||(n.actionOptions=o),Qy(o)}),og(),QA(),Il(12,"po-radio-group",9),ww("ngModelChange",function(o){return Xy(d),eN(n.componentsSize,o)||(n.componentsSize=o),Qy(o)}),og(),QA(),Il(13,"div",2)(14,"po-button",10),ft("p-click",function(){return n.restore()}),og()()();}if(l&2){let d=Ax(6);nw("p-disabled",d.invalid),Lp(3),nw("p-value",n.action),Lp(4),Ew("ngModel",n.title),e0(),Lp(),Ew("ngModel",n.message),e0(),Lp(),Ew("ngModel",n.dialogMethod),nw("p-options",n.dialogMethodOptions),e0(),Lp(),Ew("ngModel",n.literals),nw("p-disabled",n.dialogMethod===void 0)("p-help",n.help),e0(),Lp(),Ew("ngModel",n.actionOptions),nw("p-options",n.dialogActionOptions),e0(),Lp(),Ew("ngModel",n.componentsSize),nw("p-options",n.componentsSizeOptions),e0();}},dependencies:[G9,$9,z9,mk,hk,Qt,mv,C3,O3,Dde,Yhe],encapsulation:2,changeDetection:1})}return a})();var Se=a=>({"docs-sample-code-tabs":a}),pe=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-dialog-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Dialog Labs"),og(),Il(4,"a",2),ft("click",function(){return n.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-dialog-labs/sample-po-dialog-labs.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-button name="openDialog" p-label="Open Dialog" [p-disabled]="f.invalid" (p-click)="openDialog()"> </po-button>

<po-divider />

<div class="po-row">
  <po-info class="po-md-12" p-label="Action clicked" [p-value]="action"> </po-info>
</div>

<po-divider />

<form #f="ngForm">
  <po-input class="po-md-6" name="title" [(ngModel)]="title" p-clean p-label="Title" p-required> </po-input>

  <po-input class="po-md-6" name="message" [(ngModel)]="message" p-clean p-label="Message" p-required> </po-input>

  <po-radio-group
    class="po-lg-6"
    name="dialogMethod"
    [(ngModel)]="dialogMethod"
    p-label="Dialog method"
    [p-options]="dialogMethodOptions"
    (p-change)="changeMethod()"
  >
  </po-radio-group>

  <po-input
    class="po-md-12 po-lg-6"
    name="literals"
    [(ngModel)]="literals"
    p-clean
    p-label="Literals"
    [p-disabled]="dialogMethod === undefined"
    [p-help]="help"
    (p-blur)="changeLiterals()"
    (p-change-model)="changeLiterals()"
  >
  </po-input>

  <po-checkbox-group
    class="po-md-12"
    name="actionOptions"
    [(ngModel)]="actionOptions"
    p-columns="4"
    p-label="Action options"
    [p-options]="dialogActionOptions"
  >
  </po-checkbox-group>

  <po-radio-group
    class="po-lg-12"
    name="componentsSize"
    [(ngModel)]="componentsSize"
    p-columns="4"
    p-label="Components size"
    p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
    [p-options]="componentsSizeOptions"
  >
  </po-radio-group>

  <div class="po-row">
    <po-button class="po-md-3" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-dialog-labs/sample-po-dialog-labs.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { PoCheckboxGroupOption, PoRadioGroupOption } from '@po-ui/ng-components';

import { PoDialogAlertLiterals, PoDialogConfirmLiterals, PoDialogService } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-dialog-labs',
  templateUrl: './sample-po-dialog-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDialogLabsComponent implements OnInit {
  action: string;
  actionOptions: Array<string>;
  componentsSize: string = 'medium';
  dialogMethod: string;
  help: string;
  literals: string;
  literalsAlert: PoDialogAlertLiterals;
  literalsConfirm: PoDialogConfirmLiterals;
  message: string;
  title: string;

  public readonly componentsSizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  public readonly dialogActionOptions: Array<PoCheckboxGroupOption> = [
    { label: 'Ok', value: 'ok' },
    { label: 'Cancel', value: 'cancel' },
    { label: 'Confirm', value: 'confirm' },
    { label: 'Close', value: 'close' }
  ];

  public readonly dialogMethodOptions: Array<PoRadioGroupOption> = [
    { label: 'Alert', value: 'alert' },
    { label: 'Confirm', value: 'confirm' }
  ];

  constructor(private poAlert: PoDialogService) {}

  ngOnInit() {
    this.restore();
  }

  alertDialog() {
    this.poAlert.alert({
      componentsSize: this.componentsSize,
      literals: this.literalsAlert,
      title: this.title,
      message: this.message,
      ok: () => (this.actionOptions.includes('ok') ? (this.action = 'OK') : undefined)
    });
  }

  changeLiterals() {
    let literalsModel;
    try {
      literalsModel = this.literals ? JSON.parse(this.literals) : undefined;
    } catch (error) {
      literalsModel = undefined;
    }

    if (this.dialogMethod === 'alert') {
      this.literalsAlert = literalsModel;
    } else if (this.dialogMethod === 'confirm') {
      this.literalsConfirm = literalsModel;
    }
  }

  changeMethod() {
    if (this.dialogMethod === 'alert') {
      this.help = 'Ex: { "ok": "Conclu\xEDdo" }';
    } else {
      this.help = 'Ex: { "cancel": "N\xE3o", "confirm": "Sim" }';
    }
  }

  confirmDialog() {
    this.poAlert.confirm({
      componentsSize: this.componentsSize,
      literals: this.literalsConfirm,
      title: this.title,
      message: this.message,
      confirm: () => (this.actionOptions.includes('confirm') ? (this.action = 'Confirm') : undefined),
      cancel: () => (this.actionOptions.includes('cancel') ? (this.action = 'Cancel') : undefined),
      close: () => (this.actionOptions.includes('close') ? (this.action = 'Close') : undefined)
    });
  }

  openDialog() {
    this.action = '';
    this.dialogMethod === 'alert' ? this.alertDialog() : this.confirmDialog();
  }

  restore() {
    this.action = undefined;
    this.actionOptions = [];
    this.componentsSize = 'medium';
    this.title = 'PO Dialog';
    this.message = 'PO Dialog';
    this.dialogMethod = undefined;
    this.literals = undefined;
    this.literalsAlert = undefined;
    this.literalsConfirm = undefined;
    this.help = '';
  }
}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-dialog-labs"),og(),zl(23,"hr")),l&2&&(Lp(5),Ux("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,Se,n.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,re],encapsulation:2})}return a})();var De=["form"],se=(()=>{class a{poDialog;poNotification;form;action;address;cardNumber;cardType;city;country;name;phoneNumber;securityCode;stateProvince;zipPostalCode;cardTypeOptions=[{label:"Master Card",value:"Master"},{label:"Visa",value:"visa"},{label:"Diners",value:"diners"},{label:"Hipercard",value:"hipercard"}];statusSubscription;constructor(p,l){this.poDialog=p,this.poNotification=l;}ngOnDestroy(){this.statusSubscription.unsubscribe();}ngOnInit(){this.action=[{label:"Cancel",icon:"ICON_DELETE",action:this.openConfirmDialog.bind(this),disabled:true}],this.statusSubscription=this.form.statusChanges.subscribe(p=>this.actionDisabledCheck(p));}actionDisabledCheck(p){this.action[0].disabled=p==="INVALID";}confirmCancelation(){this.poNotification.success(`Credit card ${this.cardNumber} canceled`),this.form.reset();}openConfirmDialog(){this.poDialog.confirm({title:"Confirm",message:`<p>Hi <b>${this.name}</b>.</p> <p> Do you confirm the cancellation of the card number  <i class="po-icon an an-credit-card"></i> <b>${this.cardNumber}<b>? </p>`,confirm:()=>this.confirmCancelation()});}static \u0275fac=function(l){return new(l||a)(C(Vde),C(Yp))};static \u0275cmp=Un({type:a,selectors:[["sample-po-dialog-cancel-credit-card"]],viewQuery:function(l,n){if(l&1&&Gl(De,7),l&2){let d;co(d=lo())&&(n.form=d.first);}},standalone:false,decls:18,vars:12,consts:[["form","ngForm"],["p-title","Credit Card Cancelation",3,"p-actions"],[1,"po-row"],["name","cardType","p-label","Card type","p-required","",1,"po-md-8",3,"ngModelChange","ngModel","p-options"],["name","cardNumber","p-label","Card number","p-mask","9999 9999 9999 9999","p-mask-format-model","","p-minlength","19","p-required","",1,"po-md-8",3,"ngModelChange","ngModel"],["name","securityCode","p-label","Security code","p-mask","999","p-minlength","3","p-required","",1,"po-md-4",3,"ngModelChange","ngModel"],["name","name","p-label","Name","p-required","",1,"po-md-12",3,"ngModelChange","ngModel"],["name","address","p-label","Address",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","city","p-label","City",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","stateProvince","p-label","State/Province",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","zipPostalCode","p-label","Zip/PostalCode",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","phoneNumber","p-label","Phone number","p-mask","(99) 9?9999-9999","p-mask-format-model","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","country","p-label","Country",1,"po-md-6",3,"ngModelChange","ngModel"]],template:function(l,n){if(l&1){let d=Dx();Il(0,"po-page-default",1)(1,"form",null,0)(3,"div",2)(4,"po-radio-group",3),ww("ngModelChange",function(o){return Xy(d),eN(n.cardType,o)||(n.cardType=o),Qy(o)}),og(),QA(),og(),Il(5,"div",2)(6,"po-input",4),ww("ngModelChange",function(o){return Xy(d),eN(n.cardNumber,o)||(n.cardNumber=o),Qy(o)}),og(),QA(),Il(7,"po-input",5),ww("ngModelChange",function(o){return Xy(d),eN(n.securityCode,o)||(n.securityCode=o),Qy(o)}),og(),QA(),og(),Il(8,"div",2)(9,"po-input",6),ww("ngModelChange",function(o){return Xy(d),eN(n.name,o)||(n.name=o),Qy(o)}),og(),QA(),og(),Il(10,"div",2)(11,"po-input",7),ww("ngModelChange",function(o){return Xy(d),eN(n.address,o)||(n.address=o),Qy(o)}),og(),QA(),Il(12,"po-input",8),ww("ngModelChange",function(o){return Xy(d),eN(n.city,o)||(n.city=o),Qy(o)}),og(),QA(),Il(13,"po-input",9),ww("ngModelChange",function(o){return Xy(d),eN(n.stateProvince,o)||(n.stateProvince=o),Qy(o)}),og(),QA(),Il(14,"po-input",10),ww("ngModelChange",function(o){return Xy(d),eN(n.zipPostalCode,o)||(n.zipPostalCode=o),Qy(o)}),og(),QA(),og(),Il(15,"div",2)(16,"po-input",11),ww("ngModelChange",function(o){return Xy(d),eN(n.phoneNumber,o)||(n.phoneNumber=o),Qy(o)}),og(),QA(),Il(17,"po-input",12),ww("ngModelChange",function(o){return Xy(d),eN(n.country,o)||(n.country=o),Qy(o)}),og(),QA(),og()()();}l&2&&(nw("p-actions",n.action),Lp(4),Ew("ngModel",n.cardType),nw("p-options",n.cardTypeOptions),e0(),Lp(2),Ew("ngModel",n.cardNumber),e0(),Lp(),Ew("ngModel",n.securityCode),e0(),Lp(2),Ew("ngModel",n.name),e0(),Lp(2),Ew("ngModel",n.address),e0(),Lp(),Ew("ngModel",n.city),e0(),Lp(),Ew("ngModel",n.stateProvince),e0(),Lp(),Ew("ngModel",n.zipPostalCode),e0(),Lp(2),Ew("ngModel",n.phoneNumber),e0(),Lp(),Ew("ngModel",n.country),e0());},dependencies:[G9,$9,z9,mk,hk,O3,Dde,cNe],encapsulation:2,changeDetection:1})}return a})();var ye=a=>({"docs-sample-code-tabs":a}),de=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-dialog-cancel-credit-card-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Dialog - Cancel Credit Card"),og(),Il(4,"a",2),ft("click",function(){return n.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-dialog-cancel-credit-card/sample-po-dialog-cancel-credit-card.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-page-default p-title="Credit Card Cancelation" [p-actions]="action">
  <form #form="ngForm">
    <div class="po-row">
      <po-radio-group
        class="po-md-8"
        name="cardType"
        [(ngModel)]="cardType"
        p-label="Card type"
        p-required
        [p-options]="cardTypeOptions"
      >
      </po-radio-group>
    </div>

    <div class="po-row">
      <po-input
        class="po-md-8"
        name="cardNumber"
        [(ngModel)]="cardNumber"
        p-label="Card number"
        p-mask="9999 9999 9999 9999"
        p-mask-format-model
        p-minlength="19"
        p-required
      >
      </po-input>

      <po-input
        class="po-md-4"
        name="securityCode"
        [(ngModel)]="securityCode"
        p-label="Security code"
        p-mask="999"
        p-minlength="3"
        p-required
      >
      </po-input>
    </div>

    <div class="po-row">
      <po-input class="po-md-12" name="name" [(ngModel)]="name" p-label="Name" p-required> </po-input>
    </div>

    <div class="po-row">
      <po-input class="po-md-6 po-lg-3" name="address" [(ngModel)]="address" p-label="Address"> </po-input>

      <po-input class="po-md-6 po-lg-3" name="city" [(ngModel)]="city" p-label="City"> </po-input>

      <po-input class="po-md-6 po-lg-3" name="stateProvince" [(ngModel)]="stateProvince" p-label="State/Province">
      </po-input>

      <po-input class="po-md-6 po-lg-3" name="zipPostalCode" [(ngModel)]="zipPostalCode" p-label="Zip/PostalCode">
      </po-input>
    </div>

    <div class="po-row">
      <po-input
        class="po-md-6"
        name="phoneNumber"
        [(ngModel)]="phoneNumber"
        p-label="Phone number"
        p-mask="(99) 9?9999-9999"
        p-mask-format-model
      >
      </po-input>

      <po-input class="po-md-6" name="country" [(ngModel)]="country" p-label="Country"> </po-input>
    </div>
  </form>
</po-page-default>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-dialog-cancel-credit-card/sample-po-dialog-cancel-credit-card.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, OnDestroy, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

import { Subscription } from 'rxjs';

import { PoDialogService, PoNotificationService, PoPageAction, PoRadioGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-dialog-cancel-credit-card',
  templateUrl: './sample-po-dialog-cancel-credit-card.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDialogCancelCreditCardComponent implements OnDestroy, OnInit {
  @ViewChild('form', { static: true }) form: UntypedFormControl;

  action: Array<PoPageAction>;
  address: string;
  cardNumber: string;
  cardType: string;
  city: string;
  country: string;
  name: string;
  phoneNumber: string;
  securityCode: string;
  stateProvince: string;
  zipPostalCode: string;

  public readonly cardTypeOptions: Array<PoRadioGroupOption> = [
    { label: 'Master Card', value: 'Master' },
    { label: 'Visa', value: 'visa' },
    { label: 'Diners', value: 'diners' },
    { label: 'Hipercard', value: 'hipercard' }
  ];

  private statusSubscription: Subscription;

  constructor(
    private poDialog: PoDialogService,
    private poNotification: PoNotificationService
  ) {}

  ngOnDestroy() {
    this.statusSubscription.unsubscribe();
  }

  ngOnInit() {
    this.action = [
      {
        label: 'Cancel',
        icon: 'ICON_DELETE',
        action: this.openConfirmDialog.bind(this),
        disabled: true
      }
    ];
    this.statusSubscription = this.form.statusChanges.subscribe(status => this.actionDisabledCheck(status));
  }

  actionDisabledCheck(status: string) {
    this.action[0].disabled = status === 'INVALID';
  }

  confirmCancelation() {
    this.poNotification.success(\`Credit card \${this.cardNumber} canceled\`);
    this.form.reset();
  }

  openConfirmDialog() {
    this.poDialog.confirm({
      title: 'Confirm',
      message: \`<p>Hi <b>\${this.name}</b>.</p> <p> Do you confirm the cancellation of the card number  <i class="po-icon an an-credit-card"></i> <b>\${this.cardNumber}<b>? </p>\`,
      confirm: () => this.confirmCancelation()
    });
  }
}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-dialog-cancel-credit-card"),og(),zl(23,"hr")),l&2&&(Lp(5),Ux("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,ye,n.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,se],encapsulation:2})}return a})();var me=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-dialog-doc"]],standalone:false,decls:397,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-method-table"],[1,"docs-api-properties-row"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-property-description"],[1,"docs-api-h4","docs-api-class-name"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-name-cell"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","PoDialogAlertLiterals"],[1,"language-typescript"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","PoDialogConfirmLiterals"]],template:function(l,n){l&1&&(Il(0,"div",0)(1,"p",1)(2,"code"),Qx(3,"import { PoDialogModule } from '@po-ui/ng-components';"),og()(),zl(4,"div",2),Il(5,"h3",3),Qx(6,"Services"),og(),Il(7,"h4",4)(8,"code",5),Qx(9,"PoDialogService"),og()(),Il(10,"div",2)(11,"p"),Qx(12,`O po-dialog \xE9 um servi\xE7o para exibi\xE7\xE3o de caixas de di\xE1logo, \xE9 poss\xEDvel customiza-los passando alguns par\xE2metros de acordo com a
necessidade do desenvolvedor. `),og()(),Il(13,"h3",6),Qx(14,"M\xE9todos"),og(),Il(15,"table",7)(16,"tr",8)(17,"th",9)(18,"div",10)(19,"h4")(20,"span",11),Qx(21," confirm "),og()()()()(),Il(22,"tr",12)(23,"td",12)(24,"p"),Qx(25,"Exibe um di\xE1logo de confirma\xE7\xE3o, \xE9 poss\xEDvel definir a\xE7\xF5es para as op\xE7\xF5es de confirma\xE7\xE3o e cancelamento."),og()()()(),zl(26,"br"),Il(27,"table",7)(28,"tr",8)(29,"th",9)(30,"div",10)(31,"h4")(32,"span",11),Qx(33," alert "),og()()()()(),Il(34,"tr",12)(35,"td",12)(36,"p"),Qx(37,"Exibe um di\xE1logo de alerta."),og()()()(),zl(38,"br"),Il(39,"h3"),Qx(40,"Interfaces"),og(),Il(41,"h4",13)(42,"code",5),Qx(43,"PoDialogAlertLiterals"),og()(),Il(44,"div",2)(45,"p"),Qx(46,"Interface para defini\xE7\xE3o das literais usadas no servi\xE7o "),Il(47,"code"),Qx(48,"po-dialog"),og(),Qx(49," para o tipo alerta."),og()(),Il(50,"h4",6),Qx(51,"Propriedades"),og(),Il(52,"table",14)(53,"tr",15)(54,"th",16),Qx(55,"Nome"),og(),Il(56,"th",16),Qx(57,"Tipo"),og(),Il(58,"th",16),Qx(59,"Descri\xE7\xE3o"),og()(),Il(60,"tr",8)(61,"td",17)(62,"div",10)(63,"span",11),Qx(64," ok"),zl(65,"br"),og()()(),Il(66,"td",18)(67,"code",19),Qx(68,"string"),og()(),Il(69,"td",12)(70,"em")(71,"strong"),Qx(72,"(opcional)"),og()(),Il(73,"p"),Qx(74,'R\xF3tulo do bot\xE3o de "Ok".'),og()()()(),Il(75,"h4",13)(76,"code",5),Qx(77,"PoDialogConfirmLiterals"),og()(),Il(78,"div",2)(79,"p"),Qx(80,"Interface para defini\xE7\xE3o das literais usadas no servi\xE7o "),Il(81,"code"),Qx(82,"po-dialog"),og(),Qx(83," para o tipo confirma\xE7\xE3o."),og()(),Il(84,"h4",6),Qx(85,"Propriedades"),og(),Il(86,"table",14)(87,"tr",15)(88,"th",16),Qx(89,"Nome"),og(),Il(90,"th",16),Qx(91,"Tipo"),og(),Il(92,"th",16),Qx(93,"Descri\xE7\xE3o"),og()(),Il(94,"tr",8)(95,"td",17)(96,"div",10)(97,"span",11),Qx(98," cancel"),zl(99,"br"),og()()(),Il(100,"td",18)(101,"code",19),Qx(102,"string"),og()(),Il(103,"td",12)(104,"em")(105,"strong"),Qx(106,"(opcional)"),og()(),Il(107,"p"),Qx(108,'R\xF3tulo do bot\xE3o de "Cancelar".'),og()()(),Il(109,"tr",8)(110,"td",17)(111,"div",10)(112,"span",11),Qx(113," confirm"),zl(114,"br"),og()()(),Il(115,"td",18)(116,"code",19),Qx(117,"string"),og()(),Il(118,"td",12)(119,"em")(120,"strong"),Qx(121,"(opcional)"),og()(),Il(122,"p"),Qx(123,'R\xF3tulo do bot\xE3o de "Confirmar".'),og()()()(),Il(124,"h4",13)(125,"code",5),Qx(126,"PoDialogAlertOptions"),og()(),Il(127,"div",2)(128,"p"),Qx(129,"Interface para o t\xEDtulo e a mensagem do servi\xE7o po-dialog. Interface com as propriedades da caixa de di\xE1logo de alerta do servi\xE7o po-dialog."),og()(),Il(130,"h4",6),Qx(131,"Propriedades"),og(),Il(132,"table",14)(133,"tr",15)(134,"th",16),Qx(135,"Nome"),og(),Il(136,"th",16),Qx(137,"Tipo"),og(),Il(138,"th",16),Qx(139,"Descri\xE7\xE3o"),og()(),Il(140,"tr",8)(141,"td",17)(142,"div",10)(143,"span",11),Qx(144," componentsSize"),zl(145,"br"),og()()(),Il(146,"td",18)(147,"code",19),Qx(148,"string"),og()(),Il(149,"td",12)(150,"em")(151,"strong"),Qx(152,"(opcional)"),og()(),Il(153,"p"),Qx(154,"Define o tamanho dos componentes de formul\xE1rio no dialog:"),og(),Il(155,"ul")(156,"li")(157,"code"),Qx(158,"small"),og(),Qx(159,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),og(),Il(160,"li")(161,"code"),Qx(162,"medium"),og(),Qx(163,": aplica a medida medium de cada componente."),og()(),Il(164,"blockquote")(165,"p"),Qx(166,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Il(167,"code"),Qx(168,"medium"),og(),Qx(169,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Il(170,"a",20),Qx(171,"po-theme"),og(),Qx(172,"."),og()()()(),Il(173,"tr",8)(174,"td",17)(175,"div",10)(176,"span",11),Qx(177," literals"),zl(178,"br"),og()()(),Il(179,"td",18)(180,"code",21),Qx(181,"PoDialogAlertLiterals"),og()(),Il(182,"td",12)(183,"em")(184,"strong"),Qx(185,"(opcional)"),og()(),Il(186,"p"),Qx(187,"Objeto com as literais usadas no "),Il(188,"code"),Qx(189,"po-dialog"),og(),Qx(190," do tipo alerta."),og(),Il(191,"p"),Qx(192,"Para customizar o "),Il(193,"em"),Qx(194,"label"),og(),Qx(195,", pode ser enviado o objeto da seguinte forma:"),og(),Il(196,"pre")(197,"code",22),Qx(198,`this.poDialog.alert({
  literals: { ok: 'Close' },
  title: 'Info message',
  message: 'Message body dialog'
});
`),og()(),Il(199,"blockquote")(200,"p"),Qx(201,"O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do "),Il(202,"em"),Qx(203,"browser"),og(),Qx(204," (pt, en, es)."),og()()()(),Il(205,"tr",8)(206,"td",17)(207,"div",10)(208,"span",11),Qx(209," message"),zl(210,"br"),og()()(),Il(211,"td",18)(212,"code",19),Qx(213,"string"),og()(),Il(214,"td",12)(215,"p"),Qx(216,"Mensagem da caixa de di\xE1logo."),og(),Il(217,"blockquote")(218,"p"),Qx(219,"Pode-se informar um conte\xFAdo HTML na mensagem."),og()()()(),Il(220,"tr",8)(221,"td",17)(222,"div",10)(223,"span",11),Qx(224," ok"),zl(225,"br"),og()()(),Il(226,"td",18)(227,"code",23),Qx(228,"Function"),og()(),Il(229,"td",12)(230,"em")(231,"strong"),Qx(232,"(opcional)"),og()(),Il(233,"p"),Qx(234,'A\xE7\xE3o executada ao fechar o alerta pelo bot\xE3o "Ok".'),og()()(),Il(235,"tr",8)(236,"td",17)(237,"div",10)(238,"span",11),Qx(239," title"),zl(240,"br"),og()()(),Il(241,"td",18)(242,"code",19),Qx(243,"string"),og()(),Il(244,"td",12)(245,"p"),Qx(246,"T\xEDtulo da caixa de di\xE1logo."),og()()()(),Il(247,"h4",13)(248,"code",5),Qx(249,"PoDialogConfirmOptions"),og()(),Il(250,"div",2)(251,"p"),Qx(252,"Interface para o t\xEDtulo e a mensagem do servi\xE7o po-dialog. Interface com as propriedades da caixa de di\xE1logo de confirma\xE7\xE3o do servi\xE7o po-dialog."),og()(),Il(253,"h4",6),Qx(254,"Propriedades"),og(),Il(255,"table",14)(256,"tr",15)(257,"th",16),Qx(258,"Nome"),og(),Il(259,"th",16),Qx(260,"Tipo"),og(),Il(261,"th",16),Qx(262,"Descri\xE7\xE3o"),og()(),Il(263,"tr",8)(264,"td",17)(265,"div",10)(266,"span",11),Qx(267," cancel"),zl(268,"br"),og()()(),Il(269,"td",18)(270,"code",23),Qx(271,"Function"),og()(),Il(272,"td",12)(273,"em")(274,"strong"),Qx(275,"(opcional)"),og()(),Il(276,"p"),Qx(277,"A\xE7\xE3o de cancelamento da caixa de di\xE1logo."),og()()(),Il(278,"tr",8)(279,"td",17)(280,"div",10)(281,"span",11),Qx(282," close"),zl(283,"br"),og()()(),Il(284,"td",18)(285,"code",23),Qx(286,"Function"),og()(),Il(287,"td",12)(288,"em")(289,"strong"),Qx(290,"(opcional)"),og()(),Il(291,"p"),Qx(292,"A\xE7\xE3o de fechamento da caixa de di\xE1logo."),og()()(),Il(293,"tr",8)(294,"td",17)(295,"div",10)(296,"span",11),Qx(297," componentsSize"),zl(298,"br"),og()()(),Il(299,"td",18)(300,"code",19),Qx(301,"string"),og()(),Il(302,"td",12)(303,"em")(304,"strong"),Qx(305,"(opcional)"),og()(),Il(306,"p"),Qx(307,"Define o tamanho dos componentes de formul\xE1rio no dialog:"),og(),Il(308,"ul")(309,"li")(310,"code"),Qx(311,"small"),og(),Qx(312,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),og(),Il(313,"li")(314,"code"),Qx(315,"medium"),og(),Qx(316,": aplica a medida medium de cada componente."),og()(),Il(317,"blockquote")(318,"p"),Qx(319,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Il(320,"code"),Qx(321,"medium"),og(),Qx(322,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Il(323,"a",20),Qx(324,"po-theme"),og(),Qx(325,"."),og()()()(),Il(326,"tr",8)(327,"td",17)(328,"div",10)(329,"span",11),Qx(330," confirm"),zl(331,"br"),og()()(),Il(332,"td",18)(333,"code",23),Qx(334,"Function"),og()(),Il(335,"td",12)(336,"p"),Qx(337,"A\xE7\xE3o de confirma\xE7\xE3o da caixa de di\xE1logo."),og()()(),Il(338,"tr",8)(339,"td",17)(340,"div",10)(341,"span",11),Qx(342," literals"),zl(343,"br"),og()()(),Il(344,"td",18)(345,"code",24),Qx(346,"PoDialogConfirmLiterals"),og()(),Il(347,"td",12)(348,"em")(349,"strong"),Qx(350,"(opcional)"),og()(),Il(351,"p"),Qx(352,"Objeto com as literais usadas no "),Il(353,"code"),Qx(354,"po-dialog"),og(),Qx(355," do tipo confirma\xE7\xE3o."),og(),Il(356,"p"),Qx(357,"Para customizar os "),Il(358,"em"),Qx(359,"labels"),og(),Qx(360,", pode ser enviado o objeto da seguinte forma:"),og(),Il(361,"pre")(362,"code",22),Qx(363,`this.poDialog.confirm({
  literals: { cancel: 'No', confirm: 'Yes' },
  title: 'Confirm',
  message: 'Message body dialog',
  confirm: () => this.confirmOperation()
});
`),og()(),Il(364,"blockquote")(365,"p"),Qx(366,"O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do "),Il(367,"em"),Qx(368,"browser"),og(),Qx(369," (pt, en, es)."),og()()()(),Il(370,"tr",8)(371,"td",17)(372,"div",10)(373,"span",11),Qx(374," message"),zl(375,"br"),og()()(),Il(376,"td",18)(377,"code",19),Qx(378,"string"),og()(),Il(379,"td",12)(380,"p"),Qx(381,"Mensagem da caixa de di\xE1logo."),og(),Il(382,"blockquote")(383,"p"),Qx(384,"Pode-se informar um conte\xFAdo HTML na mensagem."),og()()()(),Il(385,"tr",8)(386,"td",17)(387,"div",10)(388,"span",11),Qx(389," title"),zl(390,"br"),og()()(),Il(391,"td",18)(392,"code",19),Qx(393,"string"),og()(),Il(394,"td",12)(395,"p"),Qx(396,"T\xEDtulo da caixa de di\xE1logo."),og()()()()());},encapsulation:2})}return a})();var ce=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(p,l){this.route=p,this.router=l;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let l=p.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:"merge"}),this.activeTab=p;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(l){return new(l||a)(C(Xn),C(En))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Dialog",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,n){l&1&&(Il(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return n.changeTab("doc")}),zl(3,"sample-po-dialog-doc"),og(),Il(4,"po-tab",3),ft("p-click",function(){return n.changeTab("web")}),zl(5,"sample-po-dialog-basic-view")(6,"sample-po-dialog-labs-view")(7,"sample-po-dialog-cancel-credit-card-view"),og()()()),l&2&&(nw("p-actions",n.actions),Lp(2),nw("p-active",n.activeTab==="doc"),Lp(2),nw("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"));},dependencies:[cNe,qme,Yme,le,pe,de,me],encapsulation:2})}return a})();var Me=[{path:"",component:ce}],ge=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=fe({type:a});static \u0275inj=ue({imports:[uL.forChild(Me),uL]})}return a})();var Ze=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=fe({type:a});static \u0275inj=ue({imports:[sr,ge]})}return a})();export{Ze as DocPoDialogModule};