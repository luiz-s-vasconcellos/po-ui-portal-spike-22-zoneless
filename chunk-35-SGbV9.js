import {f as fe$1,u as ue,s as sr,a as uL,C,c3 as Xn,E as En,U as Un,b as f,cM as Z9,cN as lm,b5 as $he,J as zl,an as DO,aH as Ka,b8 as qme,b9 as Yme,H as Il,q as Qx,R as og,a1 as ft,A as Lp,ar as Ux,au as dg,T as nw,bs as uN,aX as G9,aF as $9,aY as z9,aG as mk,aZ as hk,b0 as Qt,b1 as mv,c4 as C3,b4 as F3,cp as Hhe,c8 as Dde,c9 as Yhe,aB as Dx,aM as ww,aN as QA,aO as Ew,aP as e0,cz as kz,b6 as Yo,a3 as cNe,aq as lx,at as ux,av as Gl,aw as co,ax as lo,cQ as Ik,cR as Ck,aD as Xy,aT as eN,aE as Qy,aA as Sx}from'./main-FCMDZGSJ.js';var Ee=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-textarea-basic"]],standalone:false,decls:1,vars:0,consts:[["name","textarea","p-label","PO Textarea"]],template:function(r,i){r&1&&zl(0,"po-textarea",0);},dependencies:[$he],encapsulation:2,changeDetection:1})}return a})();var _e=a=>({"docs-sample-code-tabs":a}),ge=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-textarea-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Textarea Basic"),og(),Il(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-textarea-basic/sample-po-textarea-basic.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-textarea name="textarea" p-label="PO Textarea"> </po-textarea>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-textarea-basic/sample-po-textarea-basic.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-textarea-basic',
  templateUrl: './sample-po-textarea-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTextareaBasicComponent {}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-textarea-basic"),og(),zl(23,"hr")),r&2&&(Lp(5),Ux("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,_e,i.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,Ee],encapsulation:2})}return a})();var be=(()=>{class a{helperText;event;help;label;maxlength;minlength;placeholder;properties;fieldErrorMessage;rows;size;textarea;propertiesOptions=[{value:"disabled",label:"Disabled"},{value:"optional",label:"Optional"},{value:"readonly",label:"Read Only"},{value:"required",label:"Required"},{value:"showRequired",label:"Show Required"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"},{value:"compactLabel",label:"Compact Label"},{value:"loading",label:"Loading"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore();}changeEvent(m){this.event=m;}restore(){this.helperText="",this.textarea=void 0,this.label=void 0,this.help=void 0,this.minlength=void 0,this.maxlength=void 0,this.event=void 0,this.fieldErrorMessage="",this.rows=void 0,this.placeholder="",this.properties=[],this.size="medium";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-textarea-labs"]],standalone:false,decls:20,vars:33,consts:[["f","ngForm"],["name","textarea",3,"ngModelChange","p-blur","p-change","p-change-model","p-enter","p-keydown","ngModel","p-helper","p-disabled","p-help","p-label","p-loading","p-maxlength","p-minlength","p-optional","p-placeholder","p-readonly","p-required","p-field-error-message","p-show-required","p-rows","p-size","p-error-limit","p-label-text-wrap","p-compact-label"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","fieldErrorMessage","p-clean","","p-label","Field Error Message",1,"po-md-6",3,"ngModelChange","ngModel"],["name","rows","p-clean","","p-label","Rows","p-min","3",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","minlength","p-clean","","p-label","Min Length",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","maxlength","p-clean","","p-label","Max Length",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(r,i){if(r&1){let s=Dx();Il(0,"po-textarea",1),ww("ngModelChange",function(l){return Xy(s),eN(i.textarea,l)||(i.textarea=l),Qy(l)}),ft("p-blur",function(){return i.changeEvent("p-blur")})("p-change",function(){return i.changeEvent("p-change")})("p-change-model",function(){return i.changeEvent("p-change-model")})("p-enter",function(){return i.changeEvent("p-enter")})("p-keydown",function(){return i.changeEvent("p-keydown")}),og(),QA(),zl(1,"po-divider"),Il(2,"div",2),zl(3,"po-info",3)(4,"po-info",4),og(),zl(5,"po-divider"),Il(6,"form",null,0)(8,"po-input",5),ww("ngModelChange",function(l){return Xy(s),eN(i.label,l)||(i.label=l),Qy(l)}),og(),QA(),Il(9,"po-input",6),ww("ngModelChange",function(l){return Xy(s),eN(i.help,l)||(i.help=l),Qy(l)}),og(),QA(),Il(10,"po-input",7),ww("ngModelChange",function(l){return Xy(s),eN(i.helperText,l)||(i.helperText=l),Qy(l)}),og(),QA(),Il(11,"po-input",8),ww("ngModelChange",function(l){return Xy(s),eN(i.placeholder,l)||(i.placeholder=l),Qy(l)}),og(),QA(),Il(12,"po-input",9),ww("ngModelChange",function(l){return Xy(s),eN(i.fieldErrorMessage,l)||(i.fieldErrorMessage=l),Qy(l)}),og(),QA(),Il(13,"po-number",10),ww("ngModelChange",function(l){return Xy(s),eN(i.rows,l)||(i.rows=l),Qy(l)}),og(),QA(),Il(14,"po-number",11),ww("ngModelChange",function(l){return Xy(s),eN(i.minlength,l)||(i.minlength=l),Qy(l)}),og(),QA(),Il(15,"po-number",12),ww("ngModelChange",function(l){return Xy(s),eN(i.maxlength,l)||(i.maxlength=l),Qy(l)}),og(),QA(),Il(16,"po-checkbox-group",13),ww("ngModelChange",function(l){return Xy(s),eN(i.properties,l)||(i.properties=l),Qy(l)}),og(),QA(),Il(17,"po-radio-group",14),ww("ngModelChange",function(l){return Xy(s),eN(i.size,l)||(i.size=l),Qy(l)}),og(),QA(),Il(18,"div",2)(19,"po-button",15),ft("p-click",function(){return i.restore()}),og()()();}r&2&&(Ew("ngModel",i.textarea),nw("p-helper",i.helperText)("p-disabled",i.properties.includes("disabled"))("p-help",i.help)("p-label",i.label)("p-loading",i.properties.includes("loading"))("p-maxlength",i.maxlength)("p-minlength",i.minlength)("p-optional",i.properties.includes("optional"))("p-placeholder",i.placeholder)("p-readonly",i.properties.includes("readonly"))("p-required",i.properties.includes("required"))("p-field-error-message",i.fieldErrorMessage)("p-show-required",i.properties.includes("showRequired"))("p-rows",i.rows)("p-size",i.size)("p-error-limit",i.properties==null?null:i.properties.includes("errorLimit"))("p-label-text-wrap",i.properties==null?null:i.properties.includes("labelTextWrap"))("p-compact-label",i.properties==null?null:i.properties.includes("compactLabel")),e0(),Lp(3),nw("p-value",i.textarea),Lp(),nw("p-value",i.event),Lp(4),Ew("ngModel",i.label),e0(),Lp(),Ew("ngModel",i.help),e0(),Lp(),Ew("ngModel",i.helperText),e0(),Lp(),Ew("ngModel",i.placeholder),e0(),Lp(),Ew("ngModel",i.fieldErrorMessage),e0(),Lp(),Ew("ngModel",i.rows),e0(),Lp(),Ew("ngModel",i.minlength),e0(),Lp(),Ew("ngModel",i.maxlength),e0(),Lp(),Ew("ngModel",i.properties),nw("p-options",i.propertiesOptions),e0(),Lp(),Ew("ngModel",i.size),nw("p-options",i.sizeOptions),e0());},dependencies:[G9,$9,z9,mk,hk,Qt,mv,C3,F3,Hhe,Dde,$he,Yhe],encapsulation:2,changeDetection:1})}return a})();var ke=a=>({"docs-sample-code-tabs":a}),he=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-textarea-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Textarea Labs"),og(),Il(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-textarea-labs/sample-po-textarea-labs.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-textarea
  name="textarea"
  [(ngModel)]="textarea"
  [p-helper]="helperText"
  [p-disabled]="properties.includes('disabled')"
  [p-help]="help"
  [p-label]="label"
  [p-loading]="properties.includes('loading')"
  [p-maxlength]="maxlength"
  [p-minlength]="minlength"
  [p-optional]="properties.includes('optional')"
  [p-placeholder]="placeholder"
  [p-readonly]="properties.includes('readonly')"
  [p-required]="properties.includes('required')"
  [p-field-error-message]="fieldErrorMessage"
  [p-show-required]="properties.includes('showRequired')"
  [p-rows]="rows"
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
</po-textarea>

<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="textarea"> </po-info>

  <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
</div>

<po-divider />

<form #f="ngForm">
  <po-input class="po-md-6" name="label" [(ngModel)]="label" p-clean p-label="Label"> </po-input>

  <po-input class="po-md-6" name="help" [(ngModel)]="help" p-clean p-label="Help"> </po-input>

  <po-input class="po-md-6" name="helperText" [(ngModel)]="helperText" p-clean p-label="Additional Help"> </po-input>

  <po-input class="po-md-6" name="placeholder" [(ngModel)]="placeholder" p-clean p-label="Placeholder"> </po-input>

  <po-input
    class="po-md-6"
    name="fieldErrorMessage"
    [(ngModel)]="fieldErrorMessage"
    p-clean
    p-label="Field Error Message"
  >
  </po-input>

  <po-number class="po-md-6 po-lg-3" name="rows" [(ngModel)]="rows" p-clean p-label="Rows" p-min="3"> </po-number>

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
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-textarea-labs/sample-po-textarea-labs.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { PoCheckboxGroupOption, PoRadioGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-textarea-labs',
  templateUrl: './sample-po-textarea-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTextareaLabsComponent implements OnInit {
  helperText: string;
  event: string;
  help: string;
  label: string;
  maxlength: number;
  minlength: number;
  placeholder: string;
  properties: Array<string>;
  fieldErrorMessage: string;
  rows: string;
  size: string;
  textarea: string;

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'disabled', label: 'Disabled' },
    { value: 'optional', label: 'Optional' },
    { value: 'readonly', label: 'Read Only' },
    { value: 'required', label: 'Required' },
    { value: 'showRequired', label: 'Show Required' },
    { value: 'errorLimit', label: 'Limit Error Message' },
    { value: 'labelTextWrap', label: 'Label Text Wrap' },
    { value: 'compactLabel', label: 'Compact Label' },
    { value: 'loading', label: 'Loading' }
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
    this.textarea = undefined;
    this.label = undefined;
    this.help = undefined;
    this.minlength = undefined;
    this.maxlength = undefined;
    this.event = undefined;
    this.fieldErrorMessage = '';
    this.rows = undefined;
    this.placeholder = '';
    this.properties = [];
    this.size = 'medium';
  }
}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-textarea-labs"),og(),zl(23,"hr")),r&2&&(Lp(5),Ux("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,ke,i.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,be],encapsulation:2})}return a})();var Fe=["formEmail"];function Ve(a,Me){if(a&1&&(Il(0,"div")(1,"div",8),zl(2,"po-info",13),og(),zl(3,"po-divider"),og()),a&2){let m=Sx();Lp(2),nw("p-value",m.cc);}}var Se=(()=>{class a{formEmail;poModal;cc="";emailText="";from="";subject="";to="";pageActions;primaryAction={action:()=>{this.poModal.close(),this.reset();},label:"Ok"};getPageAction(){let m=this.formEmail?!this.formEmail.valid:true;return [{label:"Send",action:this.send.bind(this),disabled:m},{label:"Clean",action:this.reset.bind(this)}]}reset(){this.formEmail.reset();}send(){this.poModal.open();}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-textarea-email"]],viewQuery:function(r,i){if(r&1&&Gl(Fe,7)(Yo,7),r&2){let s;co(s=lo())&&(i.formEmail=s.first),co(s=lo())&&(i.poModal=s.first);}},standalone:false,decls:19,vars:12,consts:[["formEmail","ngForm"],["p-title","Send email",3,"p-actions"],["name","from","p-clean","","p-label","From","p-required","",1,"po-sm-12",3,"ngModelChange","ngModel"],["name","to","p-clean","","p-label","To","p-required","",1,"po-sm-12",3,"ngModelChange","ngModel"],["name","cc","p-clean","","p-label","CC",1,"po-sm-12",3,"ngModelChange","ngModel"],["name","subject","p-clean","","p-label","Subject","p-required","",1,"po-sm-12",3,"ngModelChange","ngModel"],["name","emailText","p-label","E-mail","p-required","","p-rows","8",1,"po-sm-12",3,"ngModelChange","ngModel"],["p-title","Email successfully sent",3,"p-primary-action"],[1,"po-row"],["p-label","From:",1,"po-md-6",3,"p-value"],["p-label","To:",1,"po-md-6",3,"p-value"],["p-label","Subject:",1,"po-md-12",3,"p-value"],["name","text","p-label","E-mail","p-readonly","","p-rows","6",1,"po-md-12",3,"ngModelChange","ngModel"],["p-label","CC:",1,"po-md-12",3,"p-value"]],template:function(r,i){if(r&1){let s=Dx();Il(0,"po-page-default",1)(1,"form",null,0)(3,"po-email",2),ww("ngModelChange",function(l){return Xy(s),eN(i.from,l)||(i.from=l),Qy(l)}),og(),QA(),Il(4,"po-email",3),ww("ngModelChange",function(l){return Xy(s),eN(i.to,l)||(i.to=l),Qy(l)}),og(),QA(),Il(5,"po-email",4),ww("ngModelChange",function(l){return Xy(s),eN(i.cc,l)||(i.cc=l),Qy(l)}),og(),QA(),Il(6,"po-input",5),ww("ngModelChange",function(l){return Xy(s),eN(i.subject,l)||(i.subject=l),Qy(l)}),og(),QA(),Il(7,"po-textarea",6),ww("ngModelChange",function(l){return Xy(s),eN(i.emailText,l)||(i.emailText=l),Qy(l)}),og(),QA(),og()(),Il(8,"po-modal",7)(9,"div",8),zl(10,"po-info",9)(11,"po-info",10),og(),zl(12,"po-divider"),lx(13,Ve,4,1,"div"),Il(14,"div",8),zl(15,"po-info",11),og(),zl(16,"po-divider"),Il(17,"div",8)(18,"po-textarea",12),ww("ngModelChange",function(l){return Xy(s),eN(i.emailText,l)||(i.emailText=l),Qy(l)}),og(),QA(),og()();}r&2&&(nw("p-actions",i.getPageAction()),Lp(3),Ew("ngModel",i.from),e0(),Lp(),Ew("ngModel",i.to),e0(),Lp(),Ew("ngModel",i.cc),e0(),Lp(),Ew("ngModel",i.subject),e0(),Lp(),Ew("ngModel",i.emailText),e0(),Lp(),nw("p-primary-action",i.primaryAction),Lp(2),nw("p-value",i.from),Lp(),nw("p-value",i.to),Lp(2),ux(i.cc!==""?13:-1),Lp(2),nw("p-value",i.subject),Lp(3),Ew("ngModel",i.emailText),e0());},dependencies:[G9,$9,z9,mk,hk,mv,kz,F3,$he,Yhe,Yo,cNe],encapsulation:2,changeDetection:1})}return a})();var We=a=>({"docs-sample-code-tabs":a}),fe=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-textarea-email-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Textarea - Email"),og(),Il(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-textarea-email/sample-po-textarea-email.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-page-default p-title="Send email" [p-actions]="getPageAction()">
  <form #formEmail="ngForm">
    <po-email class="po-sm-12" name="from" [(ngModel)]="from" p-clean p-label="From" p-required> </po-email>

    <po-email class="po-sm-12" name="to" [(ngModel)]="to" p-clean p-label="To" p-required> </po-email>

    <po-email class="po-sm-12" name="cc" [(ngModel)]="cc" p-clean p-label="CC"> </po-email>

    <po-input class="po-sm-12" name="subject" [(ngModel)]="subject" p-clean p-label="Subject" p-required> </po-input>

    <po-textarea class="po-sm-12" name="emailText" [(ngModel)]="emailText" p-label="E-mail" p-required p-rows="8">
    </po-textarea>
  </form>
</po-page-default>

<po-modal p-title="Email successfully sent" [p-primary-action]="primaryAction">
  <div class="po-row">
    <po-info class="po-md-6" p-label="From:" [p-value]="from"> </po-info>

    <po-info class="po-md-6" p-label="To:" [p-value]="to"> </po-info>
  </div>

  <po-divider />

  @if (cc !== '') {
    <div>
      <div class="po-row">
        <po-info class="po-md-12" p-label="CC:" [p-value]="cc"> </po-info>
      </div>
      <po-divider />
    </div>
  }

  <div class="po-row">
    <po-info class="po-md-12" p-label="Subject:" [p-value]="subject"> </po-info>
  </div>

  <po-divider />

  <div class="po-row">
    <po-textarea class="po-md-12" name="text" [(ngModel)]="emailText" p-label="E-mail" p-readonly p-rows="6">
    </po-textarea>
  </div>
</po-modal>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-textarea-email/sample-po-textarea-email.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

import { PoModalAction, PoModalComponent } from '@po-ui/ng-components';
import { PoPageAction } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-textarea-email',
  templateUrl: './sample-po-textarea-email.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTextareaEmailComponent {
  @ViewChild('formEmail', { static: true }) formEmail: UntypedFormControl;
  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;

  cc: string = '';
  emailText: string = '';
  from: string = '';
  subject: string = '';
  to: string = '';

  pageActions: Array<PoPageAction>;
  primaryAction: PoModalAction = {
    action: () => {
      this.poModal.close();
      this.reset();
    },
    label: 'Ok'
  };
  getPageAction() {
    const isDisabled = this.formEmail ? !this.formEmail['valid'] : true;
    return [
      { label: 'Send', action: this.send.bind(this), disabled: isDisabled },
      { label: 'Clean', action: this.reset.bind(this) }
    ];
  }

  reset() {
    this.formEmail.reset();
  }

  send() {
    this.poModal.open();
  }
}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-textarea-email"),og(),zl(23,"hr")),r&2&&(Lp(5),Ux("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,We,i.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,Se],encapsulation:2})}return a})();function je(a,Me){if(a&1&&(Il(0,"div")(1,"div",8),zl(2,"po-info",13),og(),zl(3,"po-divider"),og()),a&2){let m=Sx();Lp(2),nw("p-value",m.formEmail.get("cc").value);}}var Ce=(()=>{class a{formBuilder=f(Z9);poModal;formEmail;pageActions;primaryAction={action:()=>{this.poModal.close(),this.reset();},label:"Ok"};ngOnInit(){this.formEmail=this.formBuilder.group({cc:null,from:[null,lm.required],to:[null,lm.required],emailText:[null,lm.required],subject:[null,lm.required]});}getPageAction(){let m=this.formEmail?!this.formEmail.valid:true;return [{label:"Send",action:this.send.bind(this),disabled:m},{label:"Clean",action:this.reset.bind(this)}]}reset(){this.formEmail.reset();}send(){this.poModal.open();}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-textarea-email-reactive-form"]],viewQuery:function(r,i){if(r&1&&Gl(Yo,7),r&2){let s;co(s=lo())&&(i.poModal=s.first);}},standalone:false,decls:18,vars:8,consts:[["p-title","Send email",3,"p-actions"],[3,"formGroup"],["name","from","formControlName","from","p-clean","","p-label","From","p-required","",1,"po-sm-12"],["name","to","formControlName","to","p-clean","","p-label","To","p-required","",1,"po-sm-12"],["name","cc","formControlName","cc","p-clean","","p-label","CC",1,"po-sm-12"],["name","subject","formControlName","subject","p-clean","","p-label","Subject","p-required","",1,"po-sm-12"],["name","emailText","formControlName","emailText","p-label","E-mail","p-rows","8","p-required","",1,"po-sm-12"],["p-title","Email successfully sent",3,"p-primary-action"],[1,"po-row"],["p-label","From:",1,"po-md-6",3,"p-value"],["p-label","To:",1,"po-md-6",3,"p-value"],["p-label","Subject:",1,"po-md-12",3,"p-value"],["name","text","p-label","E-mail","p-readonly","","p-required","","p-rows","6",1,"po-md-12",3,"ngModel"],["p-label","CC:",1,"po-md-12",3,"p-value"]],template:function(r,i){r&1&&(Il(0,"po-page-default",0)(1,"form",1),zl(2,"po-email",2),QA(),zl(3,"po-email",3),QA(),zl(4,"po-email",4),QA(),zl(5,"po-input",5),QA(),zl(6,"po-textarea",6),QA(),og()(),Il(7,"po-modal",7)(8,"div",8),zl(9,"po-info",9)(10,"po-info",10),og(),zl(11,"po-divider"),lx(12,je,4,1,"div"),Il(13,"div",8),zl(14,"po-info",11),og(),zl(15,"po-divider"),Il(16,"div",8),zl(17,"po-textarea",12),QA(),og()()),r&2&&(nw("p-actions",i.getPageAction()),Lp(),nw("formGroup",i.formEmail),Lp(),e0(),Lp(),e0(),Lp(),e0(),Lp(),e0(),Lp(),e0(),Lp(),nw("p-primary-action",i.primaryAction),Lp(2),nw("p-value",i.formEmail.get("from").value),Lp(),nw("p-value",i.formEmail.get("to").value),Lp(2),ux(i.formEmail.get("cc").value?12:-1),Lp(2),nw("p-value",i.formEmail.get("subject").value),Lp(3),nw("ngModel",i.formEmail.get("emailText").value),e0());},dependencies:[G9,$9,z9,mk,Ik,Ck,mv,kz,F3,$he,Yhe,Yo,cNe],encapsulation:2,changeDetection:1})}return a})();var Ne=a=>({"docs-sample-code-tabs":a}),ve=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-textarea-email-reactive-form-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Textarea - Email Reactive Form"),og(),Il(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-textarea-email-reactive-form/sample-po-textarea-email-reactive-form.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-page-default p-title="Send email" [p-actions]="getPageAction()">
  <form [formGroup]="formEmail">
    <po-email class="po-sm-12" name="from" formControlName="from" p-clean p-label="From" p-required> </po-email>

    <po-email class="po-sm-12" name="to" formControlName="to" p-clean p-label="To" p-required> </po-email>

    <po-email class="po-sm-12" name="cc" formControlName="cc" p-clean p-label="CC"> </po-email>

    <po-input class="po-sm-12" name="subject" formControlName="subject" p-clean p-label="Subject" p-required>
    </po-input>

    <po-textarea class="po-sm-12" name="emailText" formControlName="emailText" p-label="E-mail" p-rows="8" p-required>
    </po-textarea>
  </form>
</po-page-default>

<po-modal p-title="Email successfully sent" [p-primary-action]="primaryAction">
  <div class="po-row">
    <po-info class="po-md-6" p-label="From:" [p-value]="formEmail.get('from').value"> </po-info>

    <po-info class="po-md-6" p-label="To:" [p-value]="formEmail.get('to').value"> </po-info>
  </div>

  <po-divider />

  @if (formEmail.get('cc').value) {
    <div>
      <div class="po-row">
        <po-info class="po-md-12" p-label="CC:" [p-value]="formEmail.get('cc').value"> </po-info>
      </div>
      <po-divider />
    </div>
  }

  <div class="po-row">
    <po-info class="po-md-12" p-label="Subject:" [p-value]="formEmail.get('subject').value"> </po-info>
  </div>

  <po-divider />

  <div class="po-row">
    <po-textarea
      class="po-md-12"
      name="text"
      [ngModel]="formEmail.get('emailText').value"
      p-label="E-mail"
      p-readonly
      p-required
      p-rows="6"
    >
    </po-textarea>
  </div>
</po-modal>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-textarea-email-reactive-form/sample-po-textarea-email-reactive-form.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

import { PoModalAction, PoModalComponent } from '@po-ui/ng-components';
import { PoPageAction } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-textarea-email-reactive-form',
  templateUrl: './sample-po-textarea-email-reactive-form.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTextareaEmailReactiveFormComponent implements OnInit {
  private formBuilder = inject(UntypedFormBuilder);

  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;

  formEmail: UntypedFormGroup;
  pageActions: Array<PoPageAction>;
  primaryAction: PoModalAction = {
    action: () => {
      this.poModal.close();
      this.reset();
    },
    label: 'Ok'
  };

  ngOnInit() {
    this.formEmail = this.formBuilder.group({
      cc: null,
      from: [null, Validators.required],
      to: [null, Validators.required],
      emailText: [null, Validators.required],
      subject: [null, Validators.required]
    });
  }

  getPageAction() {
    const isDisabled = this.formEmail ? !this.formEmail.valid : true;
    return [
      { label: 'Send', action: this.send.bind(this), disabled: isDisabled },
      { label: 'Clean', action: this.reset.bind(this) }
    ];
  }

  reset() {
    this.formEmail.reset();
  }

  send() {
    this.poModal.open();
  }
}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-textarea-email-reactive-form"),og(),zl(23,"hr")),r&2&&(Lp(5),Ux("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,Ne,i.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,Ce],encapsulation:2})}return a})();var Te=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-textarea-doc"]],standalone:false,decls:902,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://www.w3.org/WAI/WCAG21/Understanding/name-role-value"],["href","https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-enhanced"],["href","https://www.w3.org/WAI/WCAG21/Understanding/use-of-color"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-helper"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"]],template:function(r,i){r&1&&(Il(0,"div",0)(1,"p",1)(2,"code"),Qx(3,"import { PoFieldModule } from '@po-ui/ng-components';"),og()(),Il(4,"div",2)(5,"p"),Qx(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),og(),Il(7,"blockquote")(8,"p"),Qx(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),Il(10,"code"),Qx(11,"FormsModule"),og(),Qx(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Il(13,"code"),Qx(14,"ReactiveFormsModule"),og(),Qx(15,", ambos nativos do Angular."),og()()(),Il(16,"h3",3),Qx(17,"Componente"),og(),Il(18,"h4",4)(19,"code",5),Qx(20,"PoTextareaComponent"),og()(),Il(21,"div",2)(22,"p"),Qx(23,`Este \xE9 um componente de entrada de dados que possibilita o preechimento com m\xFAltiplas linhas.
\xC9 recomendado para observa\xE7\xF5es, detalhamentos e outras situa\xE7\xF5es onde o usu\xE1rio deva preencher com um texto.`),og(),Il(24,"p"),Qx(25,"Importante:"),og(),Il(26,"ul")(27,"li"),Qx(28,"A propriedade "),Il(29,"code"),Qx(30,"name"),og(),Qx(31," \xE9 obrigat\xF3ria para que o formul\xE1rio e o "),Il(32,"code"),Qx(33,"model"),og(),Qx(34,` funcionem corretamente. Do contr\xE1rio, ocorrer\xE1 um erro de
`),Il(35,"em"),Qx(36,"Angular"),og(),Qx(37,", onde ser\xE1 necess\xE1rio informar o atributo "),Il(38,"code"),Qx(39,"name"),og(),Qx(40," ou o atributo "),Il(41,"code"),Qx(42,'[ngModelOptions]="{standalone: true}"'),og(),Qx(43,", por exemplo:"),og()(),Il(44,"pre")(45,"code"),Qx(46,`<po-textarea
  [(ngModel)]="pessoa.nome"
  [ngModelOptions]="{standalone: true}">
</po-textarea>
`),og()(),Il(47,"h4"),Qx(48,"Acessibilidade tratada no componente"),og(),Il(49,"p"),Qx(50,"Algumas diretrizes de acessibilidade j\xE1 s\xE3o tratadas no componente, internamente, e n\xE3o podem ser alteradas. S\xE3o elas:"),og(),Il(51,"ul")(52,"li"),Qx(53,`O Text area foi desenvolvido com uso de controles padr\xF5es HTML, o que permite a identifica\xE7\xE3o do mesmo na interface por tecnologias
assistivas. `),Il(54,"a",6),Qx(55,"WCAG 4.1.2: Name, Role, Value"),og()(),Il(56,"li"),Qx(57,`O foco \xE9 vis\xEDvel e possui uma espessura superior a 2 pixels CSS, n\xE3o ficando escondido por outros
elementos da tela. `),Il(58,"a",7),Qx(59,"WCAG 2.4.12: Focus Appearance)"),og()(),Il(60,"li"),Qx(61,`A identifica\xE7\xE3o do erro acontece tamb\xE9m atrav\xE9s da mudan\xE7a de cor do campo, mas tamb\xE9m de um \xEDcone
junto da mensagem. `),Il(62,"a",8),Qx(63,"WGAG 1.4.1: Use of Color, 3.2.4: Consistent Identification"),og()()(),Il(64,"h4"),Qx(65,"Tokens customiz\xE1veis"),og(),Il(66,"p"),Qx(67,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),og(),Il(68,"blockquote")(69,"p"),Qx(70,"Para maiores informa\xE7\xF5es, acesse o guia "),Il(71,"a",9),Qx(72,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),Qx(73,"."),og()(),Il(74,"table")(75,"thead")(76,"tr")(77,"th"),Qx(78,"Propriedade"),og(),Il(79,"th"),Qx(80,"Descri\xE7\xE3o"),og(),Il(81,"th"),Qx(82,"Valor Padr\xE3o"),og()()(),Il(83,"tbody")(84,"tr")(85,"td")(86,"strong"),Qx(87,"Default Values"),og()(),zl(88,"td")(89,"td"),og(),Il(90,"tr")(91,"td")(92,"code"),Qx(93,"--font-family"),og()(),Il(94,"td"),Qx(95,"Fam\xEDlia tipogr\xE1fica usada"),og(),Il(96,"td")(97,"code"),Qx(98,"var(--font-family-theme)"),og()()(),Il(99,"tr")(100,"td")(101,"code"),Qx(102,"--font-size"),og()(),Il(103,"td"),Qx(104,"Tamanho da fonte"),og(),Il(105,"td")(106,"code"),Qx(107,"var(--font-size-default)"),og()()(),Il(108,"tr")(109,"td")(110,"code"),Qx(111,"--text-color-placeholder"),og()(),Il(112,"td"),Qx(113,"Cor do texto placeholder"),og(),Il(114,"td")(115,"code"),Qx(116,"var(--color-neutral-light-30)"),og()()(),Il(117,"tr")(118,"td")(119,"code"),Qx(120,"--color"),og()(),Il(121,"td"),Qx(122,"Cor pincipal do campo"),og(),Il(123,"td")(124,"code"),Qx(125,"var(--color-neutral-dark-70)"),og()()(),Il(126,"tr")(127,"td")(128,"code"),Qx(129,"--background"),og()(),Il(130,"td"),Qx(131,"Cor de background"),og(),Il(132,"td")(133,"code"),Qx(134,"var(--color-neutral-light-05)"),og()()(),Il(135,"tr")(136,"td")(137,"code"),Qx(138,"--field-container-title-justify"),og()(),Il(139,"td"),Qx(140,"Alinhamento horizontal do t\xEDtulo ("),Il(141,"code"),Qx(142,"justify-content"),og(),Qx(143,")"),og(),Il(144,"td")(145,"code"),Qx(146,"space-between"),og()()(),Il(147,"tr")(148,"td")(149,"code"),Qx(150,"--field-container-title-flex"),og()(),Il(151,"td"),Qx(152,"Flex do t\xEDtulo ("),Il(153,"code"),Qx(154,"flex"),og(),Qx(155,")"),og(),Il(156,"td")(157,"code"),Qx(158,"1 auto"),og()()()()()(),Il(159,"div",10)(160,"h4",11),Qx(161,"Seletor"),og(),Il(162,"pre",12),Qx(163,`<po-textarea
    (p-additional-help)="EventEmitter"
    p-additional-help-tooltip="string"
    p-append-in-body="boolean"
    p-auto-focus="boolean"
    (p-blur)="EventEmitter"
    (p-change)="EventEmitter"
    (p-change-model)="EventEmitter"
    p-compact-label="boolean"
    p-disabled="boolean"
    (p-enter)="EventEmitter"
    p-error-limit="boolean"
    p-field-error-message="string"
    p-help="string"
    (p-keydown)="EventEmitter"
    p-label="string"
    p-label-text-wrap="boolean"
    p-loading="boolean"
    p-maxlength="number"
    p-minlength="number"
    name="string"
    p-optional="boolean"
    p-placeholder="string"
    p-helper="PoHelperOptions | string"
    p-readonly="boolean"
    p-required="boolean"
    p-rows="number"
    p-show-required="boolean"
    p-size="string" >
</po-textarea>
`),og()(),Il(164,"h4",13),Qx(165,"Propriedades"),og(),Il(166,"table",14)(167,"tr",15)(168,"th",16),Qx(169,"Nome"),og(),Il(170,"th",16),Qx(171,"Tipo"),og(),Il(172,"th",16),Qx(173,"Padr\xE3o"),og(),Il(174,"th",16),Qx(175,"Descri\xE7\xE3o"),og()(),Il(176,"tr",17)(177,"td",18)(178,"div",19)(179,"span",20),Qx(180," (p-additional-help)"),zl(181,"br"),og()(),Il(182,"div",21),Qx(183,"Deprecated"),og()(),Il(184,"td",22)(185,"code",23),Qx(186,"EventEmitter"),og()(),Il(187,"td",24),Qx(188,"-"),og(),Il(189,"td",25)(190,"em")(191,"strong"),Qx(192,"(opcional)"),og()(),Il(193,"p"),Qx(194,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),og(),Il(195,"blockquote")(196,"p"),Qx(197,"Essa propriedade est\xE1 "),Il(198,"strong"),Qx(199,"depreciada"),og(),Qx(200," e ser\xE1 removida na vers\xE3o "),Il(201,"code"),Qx(202,"23.x.x"),og(),Qx(203,". Recomendamos utilizar a propriedade "),Il(204,"code"),Qx(205,"p-helper"),og(),Qx(206," que oferece mais recursos e flexibilidade."),og()()()(),Il(207,"tr",17)(208,"td",18)(209,"div",26)(210,"span",27),Qx(211," p-additional-help-tooltip"),zl(212,"br"),og()(),Il(213,"div",21),Qx(214,"Deprecated"),og()(),Il(215,"td",22)(216,"code",28),Qx(217,"string"),og()(),Il(218,"td",24),Qx(219,"-"),og(),Il(220,"td",25)(221,"em")(222,"strong"),Qx(223,"(opcional)"),og()(),Il(224,"p"),Qx(225,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),Il(226,"code"),Qx(227,"po-helper"),og(),Qx(228,`.
`),Il(229,"strong"),Qx(230,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),og()(),Il(231,"blockquote")(232,"p"),Qx(233,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),og()(),Il(234,"blockquote")(235,"p"),Qx(236,"Essa propriedade est\xE1 "),Il(237,"strong"),Qx(238,"depreciada"),og(),Qx(239," e ser\xE1 removida na vers\xE3o "),Il(240,"code"),Qx(241,"23.x.x"),og(),Qx(242,". Recomendamos utilizar a propriedade "),Il(243,"code"),Qx(244,"p-helper"),og(),Qx(245," que oferece mais recursos e flexibilidade."),og()()()(),Il(246,"tr",17)(247,"td",18)(248,"div",26)(249,"span",27),Qx(250," p-append-in-body"),zl(251,"br"),og()()(),Il(252,"td",22)(253,"code",29),Qx(254,"boolean"),og()(),Il(255,"td",24)(256,"p")(257,"code"),Qx(258,"false"),og()()(),Il(259,"td",25)(260,"em")(261,"strong"),Qx(262,"(opcional)"),og()(),Il(263,"p"),Qx(264,"Define que o popover ("),Il(265,"code"),Qx(266,"p-helper"),og(),Qx(267," e/ou "),Il(268,"code"),Qx(269,"p-error-limit"),og(),Qx(270,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),og(),Il(271,"blockquote")(272,"p"),Qx(273,"Quando utilizado com "),Il(274,"code"),Qx(275,"p-helper"),og(),Qx(276,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),og()()()(),Il(277,"tr",17)(278,"td",18)(279,"div",26)(280,"span",27),Qx(281," p-auto-focus"),zl(282,"br"),og()()(),Il(283,"td",22)(284,"code",29),Qx(285,"boolean"),og()(),Il(286,"td",24)(287,"p")(288,"code"),Qx(289,"false"),og()()(),Il(290,"td",25)(291,"em")(292,"strong"),Qx(293,"(opcional)"),og()(),Il(294,"p"),Qx(295,"Aplica foco no elemento ao ser iniciado."),og(),Il(296,"blockquote")(297,"p"),Qx(298,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),og()()()(),Il(299,"tr",17)(300,"td",18)(301,"div",19)(302,"span",20),Qx(303," (p-blur)"),zl(304,"br"),og()()(),Il(305,"td",22)(306,"code",23),Qx(307,"EventEmitter"),og()(),Il(308,"td",24),Qx(309,"-"),og(),Il(310,"td",25)(311,"em")(312,"strong"),Qx(313,"(opcional)"),og()(),Il(314,"p"),Qx(315,"Evento disparado ao sair do campo."),og()()(),Il(316,"tr",17)(317,"td",18)(318,"div",19)(319,"span",20),Qx(320," (p-change)"),zl(321,"br"),og()()(),Il(322,"td",22)(323,"code",23),Qx(324,"EventEmitter"),og()(),Il(325,"td",24),Qx(326,"-"),og(),Il(327,"td",25)(328,"em")(329,"strong"),Qx(330,"(opcional)"),og()(),Il(331,"p"),Qx(332,"Evento disparado ao alterar valor e deixar o campo."),og()()(),Il(333,"tr",17)(334,"td",18)(335,"div",19)(336,"span",20),Qx(337," (p-change-model)"),zl(338,"br"),og()()(),Il(339,"td",22)(340,"code",23),Qx(341,"EventEmitter"),og()(),Il(342,"td",24),Qx(343,"-"),og(),Il(344,"td",25)(345,"em")(346,"strong"),Qx(347,"(opcional)"),og()(),Il(348,"p"),Qx(349,"Evento disparado ao alterar valor do model."),og()()(),Il(350,"tr",17)(351,"td",18)(352,"div",26)(353,"span",27),Qx(354," p-compact-label"),zl(355,"br"),og()()(),Il(356,"td",22)(357,"code",29),Qx(358,"boolean"),og()(),Il(359,"td",24)(360,"p")(361,"code"),Qx(362,"false"),og()()(),Il(363,"td",25)(364,"em")(365,"strong"),Qx(366,"(opcional)"),og()(),Il(367,"p"),Qx(368,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),og(),Il(369,"p"),Qx(370,"Quando habilitado ("),Il(371,"code"),Qx(372,"true"),og(),Qx(373,"), o modo compacto afeta o conjunto composto por:"),og(),Il(374,"ul")(375,"li")(376,"code"),Qx(377,"po-label"),og()(),Il(378,"li")(379,"code"),Qx(380,"p-requirement (showRequired)"),og()(),Il(381,"li")(382,"code"),Qx(383,"po-helper"),og()()(),Il(384,"p"),Qx(385,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),og(),Il(386,"p"),Qx(387,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),og(),Il(388,"ul")(389,"li")(390,"code"),Qx(391,"--field-container-title-justify"),og()(),Il(392,"li")(393,"code"),Qx(394,"--field-container-title-flex"),og()()(),Il(395,"p"),Qx(396,"Exemplo:"),og(),Il(397,"pre")(398,"code"),Qx(399,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),og()(),Il(400,"p"),Qx(401,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),og()()(),Il(402,"tr",17)(403,"td",18)(404,"div",26)(405,"span",27),Qx(406," p-disabled"),zl(407,"br"),og()()(),Il(408,"td",22)(409,"code",29),Qx(410,"boolean"),og()(),Il(411,"td",24)(412,"p")(413,"code"),Qx(414,"false"),og()()(),Il(415,"td",25)(416,"em")(417,"strong"),Qx(418,"(opcional)"),og()(),Il(419,"p"),Qx(420,"Indica que o campo ser\xE1 desabilitado."),og()()(),Il(421,"tr",17)(422,"td",18)(423,"div",19)(424,"span",20),Qx(425," (p-enter)"),zl(426,"br"),og()()(),Il(427,"td",22)(428,"code",23),Qx(429,"EventEmitter"),og()(),Il(430,"td",24),Qx(431,"-"),og(),Il(432,"td",25)(433,"em")(434,"strong"),Qx(435,"(opcional)"),og()(),Il(436,"p"),Qx(437,"Evento disparado ao entrar do campo."),og()()(),Il(438,"tr",17)(439,"td",18)(440,"div",26)(441,"span",27),Qx(442," p-error-limit"),zl(443,"br"),og()()(),Il(444,"td",22)(445,"code",29),Qx(446,"boolean"),og()(),Il(447,"td",24)(448,"p")(449,"code"),Qx(450,"false"),og()()(),Il(451,"td",25)(452,"em")(453,"strong"),Qx(454,"(opcional)"),og()(),Il(455,"p"),Qx(456,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),og(),Il(457,"blockquote")(458,"p"),Qx(459,"Caso essa propriedade seja definida como "),Il(460,"code"),Qx(461,"true"),og(),Qx(462,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),og()()()(),Il(463,"tr",17)(464,"td",18)(465,"div",26)(466,"span",27),Qx(467," p-field-error-message"),zl(468,"br"),og()()(),Il(469,"td",22)(470,"code",28),Qx(471,"string"),og()(),Il(472,"td",24),Qx(473,"-"),og(),Il(474,"td",25)(475,"em")(476,"strong"),Qx(477,"(opcional)"),og()(),Il(478,"p"),Qx(479,"Exibe a mensagem setada se o campo estiver vazio e for requerido."),og(),Il(480,"blockquote")(481,"p"),Qx(482,"Necess\xE1rio que a propriedade "),Il(483,"code"),Qx(484,"p-required"),og(),Qx(485," esteja habilitada."),og()()()(),Il(486,"tr",17)(487,"td",18)(488,"div",26)(489,"span",27),Qx(490," p-help"),zl(491,"br"),og()()(),Il(492,"td",22)(493,"code",28),Qx(494,"string"),og()(),Il(495,"td",24),Qx(496,"-"),og(),Il(497,"td",25)(498,"em")(499,"strong"),Qx(500,"(opcional)"),og()(),Il(501,"p"),Qx(502,"Texto de apoio do campo."),og()()(),Il(503,"tr",17)(504,"td",18)(505,"div",19)(506,"span",20),Qx(507," (p-keydown)"),zl(508,"br"),og()()(),Il(509,"td",22)(510,"code",23),Qx(511,"EventEmitter"),og()(),Il(512,"td",24),Qx(513,"-"),og(),Il(514,"td",25)(515,"em")(516,"strong"),Qx(517,"(opcional)"),og()(),Il(518,"p"),Qx(519,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Il(520,"code"),Qx(521,"KeyboardEvent"),og(),Qx(522," com informa\xE7\xF5es sobre a tecla."),og()()(),Il(523,"tr",17)(524,"td",18)(525,"div",26)(526,"span",27),Qx(527," p-label"),zl(528,"br"),og()()(),Il(529,"td",22)(530,"code",28),Qx(531,"string"),og()(),Il(532,"td",24),Qx(533,"-"),og(),Il(534,"td",25)(535,"em")(536,"strong"),Qx(537,"(opcional)"),og()(),Il(538,"p"),Qx(539,"Label do campo."),og()()(),Il(540,"tr",17)(541,"td",18)(542,"div",26)(543,"span",27),Qx(544," p-label-text-wrap"),zl(545,"br"),og()()(),Il(546,"td",22)(547,"code",29),Qx(548,"boolean"),og()(),Il(549,"td",24)(550,"p")(551,"code"),Qx(552,"false"),og()()(),Il(553,"td",25)(554,"em")(555,"strong"),Qx(556,"(opcional)"),og()(),Il(557,"p"),Qx(558,"Habilita a quebra autom\xE1tica do texto da propriedade "),Il(559,"code"),Qx(560,"p-label"),og(),Qx(561,". Quando "),Il(562,"code"),Qx(563,"p-label-text-wrap"),og(),Qx(564,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),og()()(),Il(565,"tr",17)(566,"td",18)(567,"div",26)(568,"span",27),Qx(569," p-loading"),zl(570,"br"),og()()(),Il(571,"td",22)(572,"code",29),Qx(573,"boolean"),og()(),Il(574,"td",24)(575,"p")(576,"code"),Qx(577,"false"),og()()(),Il(578,"td",25)(579,"em")(580,"strong"),Qx(581,"(opcional)"),og()(),Il(582,"p"),Qx(583,"Exibe um \xEDcone de carregamento no lado direito do campo para sinalizar que uma opera\xE7\xE3o est\xE1 em andamento."),og()()(),Il(584,"tr",17)(585,"td",18)(586,"div",26)(587,"span",27),Qx(588," p-maxlength"),zl(589,"br"),og()()(),Il(590,"td",22)(591,"code",30),Qx(592,"number"),og()(),Il(593,"td",24),Qx(594,"-"),og(),Il(595,"td",25)(596,"em")(597,"strong"),Qx(598,"(opcional)"),og()(),Il(599,"p"),Qx(600,"Indica a quantidade m\xE1xima de caracteres que o campo aceita."),og()()(),Il(601,"tr",17)(602,"td",18)(603,"div",26)(604,"span",27),Qx(605," p-minlength"),zl(606,"br"),og()()(),Il(607,"td",22)(608,"code",30),Qx(609,"number"),og()(),Il(610,"td",24),Qx(611,"-"),og(),Il(612,"td",25)(613,"em")(614,"strong"),Qx(615,"(opcional)"),og()(),Il(616,"p"),Qx(617,"Indica a quantidade m\xEDnima de caracteres que o campo aceita."),og()()(),Il(618,"tr",17)(619,"td",18)(620,"div",26)(621,"span",27),Qx(622," name"),zl(623,"br"),og()()(),Il(624,"td",22)(625,"code",28),Qx(626,"string"),og()(),Il(627,"td",24),Qx(628,"-"),og(),Il(629,"td",25)(630,"p"),Qx(631,"Nome e Id do componente."),og()()(),Il(632,"tr",17)(633,"td",18)(634,"div",26)(635,"span",27),Qx(636," p-optional"),zl(637,"br"),og()()(),Il(638,"td",22)(639,"code",29),Qx(640,"boolean"),og()(),Il(641,"td",24)(642,"p")(643,"code"),Qx(644,"false"),og()()(),Il(645,"td",25)(646,"em")(647,"strong"),Qx(648,"(opcional)"),og()(),Il(649,"p"),Qx(650,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),og(),Il(651,"blockquote")(652,"p"),Qx(653,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),og()(),Il(654,"ul")(655,"li"),Qx(656,"O campo conter "),Il(657,"code"),Qx(658,"p-required"),og(),Qx(659,";"),og(),Il(660,"li"),Qx(661,"N\xE3o possuir "),Il(662,"code"),Qx(663,"p-help"),og(),Qx(664," e/ou "),Il(665,"code"),Qx(666,"p-label"),og(),Qx(667,"."),og()()()(),Il(668,"tr",17)(669,"td",18)(670,"div",26)(671,"span",27),Qx(672," p-placeholder"),zl(673,"br"),og()()(),Il(674,"td",22)(675,"code",28),Qx(676,"string"),og()(),Il(677,"td",24),Qx(678,"-"),og(),Il(679,"td",25)(680,"p"),Qx(681,"Placeholder, mensagem que aparecer\xE1 enquanto o campo n\xE3o estiver preenchido."),og()()(),Il(682,"tr",17)(683,"td",18)(684,"div",26)(685,"span",27),Qx(686," p-helper"),zl(687,"br"),og()()(),Il(688,"td",22)(689,"code",31),Qx(690,"PoHelperOptions "),og(),Il(691,"code",28),Qx(692," string"),og()(),Il(693,"td",24),Qx(694,"-"),og(),Il(695,"td",25)(696,"em")(697,"strong"),Qx(698,"(opcional)"),og()(),Il(699,"p"),Qx(700,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label quando a propriedade "),Il(701,"code"),Qx(702,"p-label"),og(),Qx(703," for definida, ou, ao lado do componente na aus\xEAncia da propriedade "),Il(704,"code"),Qx(705,"p-label"),og(),Qx(706,"."),og(),Il(707,"blockquote")(708,"p"),Qx(709,"Para mais informa\xE7\xF5es acesse: "),Il(710,"a",32),Qx(711,"https://po-ui.io/documentation/po-helper"),og(),Qx(712,"."),og()(),Il(713,"blockquote")(714,"p"),Qx(715,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),Il(716,"code"),Qx(717,"p-additional-help-tooltip"),og(),Qx(718," e "),Il(719,"code"),Qx(720,"p-additional-help"),og(),Qx(721,") ser\xE1 ignorado."),og()()()(),Il(722,"tr",17)(723,"td",18)(724,"div",26)(725,"span",27),Qx(726," p-readonly"),zl(727,"br"),og()()(),Il(728,"td",22)(729,"code",29),Qx(730,"boolean"),og()(),Il(731,"td",24)(732,"p")(733,"code"),Qx(734,"false"),og()()(),Il(735,"td",25)(736,"em")(737,"strong"),Qx(738,"(opcional)"),og()(),Il(739,"p"),Qx(740,"Indica que o campo ser\xE1 somente leitura."),og()()(),Il(741,"tr",17)(742,"td",18)(743,"div",26)(744,"span",27),Qx(745," p-required"),zl(746,"br"),og()()(),Il(747,"td",22)(748,"code",29),Qx(749,"boolean"),og()(),Il(750,"td",24)(751,"p")(752,"code"),Qx(753,"false"),og()()(),Il(754,"td",25)(755,"em")(756,"strong"),Qx(757,"(opcional)"),og()(),Il(758,"p"),Qx(759,"Define que o campo ser\xE1 obrigat\xF3rio."),og(),Il(760,"blockquote")(761,"p"),Qx(762,"Esta propriedade \xE9 desconsiderada quando o input est\xE1 desabilitado "),Il(763,"code"),Qx(764,"(p-disabled)"),og(),Qx(765,"."),og()()()(),Il(766,"tr",17)(767,"td",18)(768,"div",26)(769,"span",27),Qx(770," p-rows"),zl(771,"br"),og()()(),Il(772,"td",22)(773,"code",30),Qx(774,"number"),og()(),Il(775,"td",24)(776,"p")(777,"code"),Qx(778,"3"),og()()(),Il(779,"td",25)(780,"em")(781,"strong"),Qx(782,"(opcional)"),og()(),Il(783,"p"),Qx(784,"Indica a quantidade de linhas que ser\xE3o exibidas."),og()()(),Il(785,"tr",17)(786,"td",18)(787,"div",26)(788,"span",27),Qx(789," p-show-required"),zl(790,"br"),og()()(),Il(791,"td",22)(792,"code",29),Qx(793,"boolean"),og()(),Il(794,"td",24),Qx(795,"-"),og(),Il(796,"td",25)(797,"p"),Qx(798,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),og(),Il(799,"blockquote")(800,"p"),Qx(801,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),og()(),Il(802,"ul")(803,"li"),Qx(804,"N\xE3o possuir "),Il(805,"code"),Qx(806,"p-help"),og(),Qx(807," e/ou "),Il(808,"code"),Qx(809,"p-label"),og(),Qx(810,"."),og()()()(),Il(811,"tr",17)(812,"td",18)(813,"div",26)(814,"span",27),Qx(815," p-size"),zl(816,"br"),og()()(),Il(817,"td",22)(818,"code",28),Qx(819,"string"),og()(),Il(820,"td",24)(821,"p")(822,"code"),Qx(823,"medium"),og()()(),Il(824,"td",25)(825,"em")(826,"strong"),Qx(827,"(opcional)"),og()(),Il(828,"p"),Qx(829,"Define o tamanho do componente:"),og(),Il(830,"ul")(831,"li")(832,"code"),Qx(833,"small"),og(),Qx(834," (dispon\xEDvel apenas para acessibilidade AA)"),og(),Il(835,"li")(836,"code"),Qx(837,"medium"),og()()(),Il(838,"blockquote")(839,"p"),Qx(840,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Il(841,"code"),Qx(842,"medium"),og(),Qx(843,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Il(844,"a",33),Qx(845,"po-theme"),og(),Qx(846,"."),og()()()()(),Il(847,"h3",13),Qx(848,"M\xE9todos"),og(),Il(849,"table",34)(850,"tr",17)(851,"th",35)(852,"div",26)(853,"h4")(854,"span",27),Qx(855," focus "),og()()()()(),Il(856,"tr",25)(857,"td",25)(858,"p"),Qx(859,"Fun\xE7\xE3o que atribui foco ao componente."),og(),Il(860,"p"),Qx(861,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),og(),Il(862,"pre")(863,"code"),Qx(864,`import { PoTextareaComponent } from '@po-ui/ng-components';

...

@ViewChild(PoTextareaComponent, { static: true }) textarea: PoTextareaComponent;

focusTextarea() {
  this.textarea.focus();
}
`),og()()()()(),zl(865,"br"),Il(866,"table",34)(867,"tr",17)(868,"th",35)(869,"div",26)(870,"h4")(871,"span",27),Qx(872," showAdditionalHelp "),og()()()()(),Il(873,"tr",25)(874,"td",25)(875,"p"),Qx(876,"M\xE9todo que exibe "),Il(877,"code"),Qx(878,"p-helper"),og(),Qx(879," ou executa a a\xE7\xE3o definida em "),Il(880,"code"),Qx(881,"p-helper{eventOnClick}"),og(),Qx(882," ou em "),Il(883,"code"),Qx(884,"p-additionalHelp"),og(),Qx(885,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Il(886,"code"),Qx(887,"p-keydown"),og(),Qx(888,"."),og(),Il(889,"blockquote")(890,"p"),Qx(891,"Exibe ou oculta o conte\xFAdo do componente "),Il(892,"code"),Qx(893,"po-helper"),og(),Qx(894," quando o componente estiver com foco."),og()(),Il(895,"pre")(896,"code"),Qx(897,`//Exemplo com p-label e p-helper
<po-textarea
 #textarea
 ...
 p-label="Label do textarea"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, textarea)"
></po-textarea>
`),og()(),Il(898,"pre")(899,"code"),Qx(900,`...
onKeyDown(event: KeyboardEvent, inp: PoTextareaComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),og()()()()(),zl(901,"br"),og());},dependencies:[Ka],encapsulation:2})}return a})();var ye=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,r){this.route=m,this.router=r;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let r=m.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:"merge"}),this.activeTab=m;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(r){return new(r||a)(C(Xn),C(En))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:9,vars:4,consts:[["p-title","Textarea",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,i){r&1&&(Il(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return i.changeTab("doc")}),zl(3,"sample-po-textarea-doc"),og(),Il(4,"po-tab",3),ft("p-click",function(){return i.changeTab("web")}),zl(5,"sample-po-textarea-basic-view")(6,"sample-po-textarea-labs-view")(7,"sample-po-textarea-email-view")(8,"sample-po-textarea-email-reactive-form-view"),og()()()),r&2&&(nw("p-actions",i.actions),Lp(2),nw("p-active",i.activeTab==="doc"),Lp(2),nw("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[cNe,qme,Yme,ge,he,fe,ve,Te],encapsulation:2})}return a})();var Re=[{path:"",component:ye}],we=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue({imports:[uL.forChild(Re),uL]})}return a})();var yt=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue({imports:[sr,we]})}return a})();export{yt as DocPoTextareaModule};