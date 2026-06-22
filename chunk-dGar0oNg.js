import {f as fe$1,u as ue,s as sr,h as hL,w,c3 as Xn,E as En,U as Un,a as f,cM as Q9,cN as lm,b5 as Whe,H as Wl,an as CO,aH as Ka,b8 as Bme,b9 as qme,F as Sl,z as eN,J as og,a1 as ft,L as Lp,ar as $x,au as dg,Q as nw,bs as fN,aX as Z9,aF as G9,aY as q9,aG as _k,aZ as mk,b0 as Qt,b1 as mv,c4 as b3,b4 as L3,cp as Rhe,c8 as wde,c9 as Ghe,aB as wx,aM as ww,aN as e0,aO as Ew,aP as n0,cz as Pz,b6 as Yo,a3 as rNe,aq as dx,at as fx,av as ql,aw as lo,ax as uo,cQ as Mk,cR as Sk,aD as Ky,aT as nN,aE as Xy,aA as Mx}from'./main-WP3NAV7C.js';var Ee=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-textarea-basic"]],standalone:false,decls:1,vars:0,consts:[["name","textarea","p-label","PO Textarea"]],template:function(r,i){r&1&&Wl(0,"po-textarea",0);},dependencies:[Whe],encapsulation:2,changeDetection:1})}return a})();var _e=a=>({"docs-sample-code-tabs":a}),ge=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-textarea-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Textarea Basic"),og(),Sl(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-textarea-basic/sample-po-textarea-basic.component.html"),og(),Sl(13,"pre",7),eN(14,`<po-textarea name="textarea" p-label="PO Textarea"> </po-textarea>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-textarea-basic/sample-po-textarea-basic.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-textarea-basic',
  templateUrl: './sample-po-textarea-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTextareaBasicComponent {}
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-textarea-basic"),og(),Wl(23,"hr")),r&2&&(Lp(5),$x("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,_e,i.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,Ee],encapsulation:2})}return a})();var be=(()=>{class a{helperText;event;help;label;maxlength;minlength;placeholder;properties;fieldErrorMessage;rows;size;textarea;propertiesOptions=[{value:"disabled",label:"Disabled"},{value:"optional",label:"Optional"},{value:"readonly",label:"Read Only"},{value:"required",label:"Required"},{value:"showRequired",label:"Show Required"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"},{value:"compactLabel",label:"Compact Label"},{value:"loading",label:"Loading"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore();}changeEvent(m){this.event=m;}restore(){this.helperText="",this.textarea=void 0,this.label=void 0,this.help=void 0,this.minlength=void 0,this.maxlength=void 0,this.event=void 0,this.fieldErrorMessage="",this.rows=void 0,this.placeholder="",this.properties=[],this.size="medium";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-textarea-labs"]],standalone:false,decls:20,vars:33,consts:[["f","ngForm"],["name","textarea",3,"ngModelChange","p-blur","p-change","p-change-model","p-enter","p-keydown","ngModel","p-helper","p-disabled","p-help","p-label","p-loading","p-maxlength","p-minlength","p-optional","p-placeholder","p-readonly","p-required","p-field-error-message","p-show-required","p-rows","p-size","p-error-limit","p-label-text-wrap","p-compact-label"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","fieldErrorMessage","p-clean","","p-label","Field Error Message",1,"po-md-6",3,"ngModelChange","ngModel"],["name","rows","p-clean","","p-label","Rows","p-min","3",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","minlength","p-clean","","p-label","Min Length",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","maxlength","p-clean","","p-label","Max Length",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(r,i){if(r&1){let s=wx();Sl(0,"po-textarea",1),ww("ngModelChange",function(l){return Ky(s),nN(i.textarea,l)||(i.textarea=l),Xy(l)}),ft("p-blur",function(){return i.changeEvent("p-blur")})("p-change",function(){return i.changeEvent("p-change")})("p-change-model",function(){return i.changeEvent("p-change-model")})("p-enter",function(){return i.changeEvent("p-enter")})("p-keydown",function(){return i.changeEvent("p-keydown")}),og(),e0(),Wl(1,"po-divider"),Sl(2,"div",2),Wl(3,"po-info",3)(4,"po-info",4),og(),Wl(5,"po-divider"),Sl(6,"form",null,0)(8,"po-input",5),ww("ngModelChange",function(l){return Ky(s),nN(i.label,l)||(i.label=l),Xy(l)}),og(),e0(),Sl(9,"po-input",6),ww("ngModelChange",function(l){return Ky(s),nN(i.help,l)||(i.help=l),Xy(l)}),og(),e0(),Sl(10,"po-input",7),ww("ngModelChange",function(l){return Ky(s),nN(i.helperText,l)||(i.helperText=l),Xy(l)}),og(),e0(),Sl(11,"po-input",8),ww("ngModelChange",function(l){return Ky(s),nN(i.placeholder,l)||(i.placeholder=l),Xy(l)}),og(),e0(),Sl(12,"po-input",9),ww("ngModelChange",function(l){return Ky(s),nN(i.fieldErrorMessage,l)||(i.fieldErrorMessage=l),Xy(l)}),og(),e0(),Sl(13,"po-number",10),ww("ngModelChange",function(l){return Ky(s),nN(i.rows,l)||(i.rows=l),Xy(l)}),og(),e0(),Sl(14,"po-number",11),ww("ngModelChange",function(l){return Ky(s),nN(i.minlength,l)||(i.minlength=l),Xy(l)}),og(),e0(),Sl(15,"po-number",12),ww("ngModelChange",function(l){return Ky(s),nN(i.maxlength,l)||(i.maxlength=l),Xy(l)}),og(),e0(),Sl(16,"po-checkbox-group",13),ww("ngModelChange",function(l){return Ky(s),nN(i.properties,l)||(i.properties=l),Xy(l)}),og(),e0(),Sl(17,"po-radio-group",14),ww("ngModelChange",function(l){return Ky(s),nN(i.size,l)||(i.size=l),Xy(l)}),og(),e0(),Sl(18,"div",2)(19,"po-button",15),ft("p-click",function(){return i.restore()}),og()()();}r&2&&(Ew("ngModel",i.textarea),nw("p-helper",i.helperText)("p-disabled",i.properties.includes("disabled"))("p-help",i.help)("p-label",i.label)("p-loading",i.properties.includes("loading"))("p-maxlength",i.maxlength)("p-minlength",i.minlength)("p-optional",i.properties.includes("optional"))("p-placeholder",i.placeholder)("p-readonly",i.properties.includes("readonly"))("p-required",i.properties.includes("required"))("p-field-error-message",i.fieldErrorMessage)("p-show-required",i.properties.includes("showRequired"))("p-rows",i.rows)("p-size",i.size)("p-error-limit",i.properties==null?null:i.properties.includes("errorLimit"))("p-label-text-wrap",i.properties==null?null:i.properties.includes("labelTextWrap"))("p-compact-label",i.properties==null?null:i.properties.includes("compactLabel")),n0(),Lp(3),nw("p-value",i.textarea),Lp(),nw("p-value",i.event),Lp(4),Ew("ngModel",i.label),n0(),Lp(),Ew("ngModel",i.help),n0(),Lp(),Ew("ngModel",i.helperText),n0(),Lp(),Ew("ngModel",i.placeholder),n0(),Lp(),Ew("ngModel",i.fieldErrorMessage),n0(),Lp(),Ew("ngModel",i.rows),n0(),Lp(),Ew("ngModel",i.minlength),n0(),Lp(),Ew("ngModel",i.maxlength),n0(),Lp(),Ew("ngModel",i.properties),nw("p-options",i.propertiesOptions),n0(),Lp(),Ew("ngModel",i.size),nw("p-options",i.sizeOptions),n0());},dependencies:[Z9,G9,q9,_k,mk,Qt,mv,b3,L3,Rhe,wde,Whe,Ghe],encapsulation:2,changeDetection:1})}return a})();var ke=a=>({"docs-sample-code-tabs":a}),he=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-textarea-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Textarea Labs"),og(),Sl(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-textarea-labs/sample-po-textarea-labs.component.html"),og(),Sl(13,"pre",7),eN(14,`<po-textarea
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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-textarea-labs/sample-po-textarea-labs.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-textarea-labs"),og(),Wl(23,"hr")),r&2&&(Lp(5),$x("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,ke,i.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,be],encapsulation:2})}return a})();var Fe=["formEmail"];function Ve(a,Me){if(a&1&&(Sl(0,"div")(1,"div",8),Wl(2,"po-info",13),og(),Wl(3,"po-divider"),og()),a&2){let m=Mx();Lp(2),nw("p-value",m.cc);}}var Se=(()=>{class a{formEmail;poModal;cc="";emailText="";from="";subject="";to="";pageActions;primaryAction={action:()=>{this.poModal.close(),this.reset();},label:"Ok"};getPageAction(){let m=this.formEmail?!this.formEmail.valid:true;return [{label:"Send",action:this.send.bind(this),disabled:m},{label:"Clean",action:this.reset.bind(this)}]}reset(){this.formEmail.reset();}send(){this.poModal.open();}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-textarea-email"]],viewQuery:function(r,i){if(r&1&&ql(Fe,7)(Yo,7),r&2){let s;lo(s=uo())&&(i.formEmail=s.first),lo(s=uo())&&(i.poModal=s.first);}},standalone:false,decls:19,vars:12,consts:[["formEmail","ngForm"],["p-title","Send email",3,"p-actions"],["name","from","p-clean","","p-label","From","p-required","",1,"po-sm-12",3,"ngModelChange","ngModel"],["name","to","p-clean","","p-label","To","p-required","",1,"po-sm-12",3,"ngModelChange","ngModel"],["name","cc","p-clean","","p-label","CC",1,"po-sm-12",3,"ngModelChange","ngModel"],["name","subject","p-clean","","p-label","Subject","p-required","",1,"po-sm-12",3,"ngModelChange","ngModel"],["name","emailText","p-label","E-mail","p-required","","p-rows","8",1,"po-sm-12",3,"ngModelChange","ngModel"],["p-title","Email successfully sent",3,"p-primary-action"],[1,"po-row"],["p-label","From:",1,"po-md-6",3,"p-value"],["p-label","To:",1,"po-md-6",3,"p-value"],["p-label","Subject:",1,"po-md-12",3,"p-value"],["name","text","p-label","E-mail","p-readonly","","p-rows","6",1,"po-md-12",3,"ngModelChange","ngModel"],["p-label","CC:",1,"po-md-12",3,"p-value"]],template:function(r,i){if(r&1){let s=wx();Sl(0,"po-page-default",1)(1,"form",null,0)(3,"po-email",2),ww("ngModelChange",function(l){return Ky(s),nN(i.from,l)||(i.from=l),Xy(l)}),og(),e0(),Sl(4,"po-email",3),ww("ngModelChange",function(l){return Ky(s),nN(i.to,l)||(i.to=l),Xy(l)}),og(),e0(),Sl(5,"po-email",4),ww("ngModelChange",function(l){return Ky(s),nN(i.cc,l)||(i.cc=l),Xy(l)}),og(),e0(),Sl(6,"po-input",5),ww("ngModelChange",function(l){return Ky(s),nN(i.subject,l)||(i.subject=l),Xy(l)}),og(),e0(),Sl(7,"po-textarea",6),ww("ngModelChange",function(l){return Ky(s),nN(i.emailText,l)||(i.emailText=l),Xy(l)}),og(),e0(),og()(),Sl(8,"po-modal",7)(9,"div",8),Wl(10,"po-info",9)(11,"po-info",10),og(),Wl(12,"po-divider"),dx(13,Ve,4,1,"div"),Sl(14,"div",8),Wl(15,"po-info",11),og(),Wl(16,"po-divider"),Sl(17,"div",8)(18,"po-textarea",12),ww("ngModelChange",function(l){return Ky(s),nN(i.emailText,l)||(i.emailText=l),Xy(l)}),og(),e0(),og()();}r&2&&(nw("p-actions",i.getPageAction()),Lp(3),Ew("ngModel",i.from),n0(),Lp(),Ew("ngModel",i.to),n0(),Lp(),Ew("ngModel",i.cc),n0(),Lp(),Ew("ngModel",i.subject),n0(),Lp(),Ew("ngModel",i.emailText),n0(),Lp(),nw("p-primary-action",i.primaryAction),Lp(2),nw("p-value",i.from),Lp(),nw("p-value",i.to),Lp(2),fx(i.cc!==""?13:-1),Lp(2),nw("p-value",i.subject),Lp(3),Ew("ngModel",i.emailText),n0());},dependencies:[Z9,G9,q9,_k,mk,mv,Pz,L3,Whe,Ghe,Yo,rNe],encapsulation:2,changeDetection:1})}return a})();var We=a=>({"docs-sample-code-tabs":a}),fe=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-textarea-email-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Textarea - Email"),og(),Sl(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-textarea-email/sample-po-textarea-email.component.html"),og(),Sl(13,"pre",7),eN(14,`<po-page-default p-title="Send email" [p-actions]="getPageAction()">
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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-textarea-email/sample-po-textarea-email.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';
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
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-textarea-email"),og(),Wl(23,"hr")),r&2&&(Lp(5),$x("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,We,i.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,Se],encapsulation:2})}return a})();function je(a,Me){if(a&1&&(Sl(0,"div")(1,"div",8),Wl(2,"po-info",13),og(),Wl(3,"po-divider"),og()),a&2){let m=Mx();Lp(2),nw("p-value",m.formEmail.get("cc").value);}}var Ce=(()=>{class a{formBuilder=f(Q9);poModal;formEmail;pageActions;primaryAction={action:()=>{this.poModal.close(),this.reset();},label:"Ok"};ngOnInit(){this.formEmail=this.formBuilder.group({cc:null,from:[null,lm.required],to:[null,lm.required],emailText:[null,lm.required],subject:[null,lm.required]});}getPageAction(){let m=this.formEmail?!this.formEmail.valid:true;return [{label:"Send",action:this.send.bind(this),disabled:m},{label:"Clean",action:this.reset.bind(this)}]}reset(){this.formEmail.reset();}send(){this.poModal.open();}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-textarea-email-reactive-form"]],viewQuery:function(r,i){if(r&1&&ql(Yo,7),r&2){let s;lo(s=uo())&&(i.poModal=s.first);}},standalone:false,decls:18,vars:8,consts:[["p-title","Send email",3,"p-actions"],[3,"formGroup"],["name","from","formControlName","from","p-clean","","p-label","From","p-required","",1,"po-sm-12"],["name","to","formControlName","to","p-clean","","p-label","To","p-required","",1,"po-sm-12"],["name","cc","formControlName","cc","p-clean","","p-label","CC",1,"po-sm-12"],["name","subject","formControlName","subject","p-clean","","p-label","Subject","p-required","",1,"po-sm-12"],["name","emailText","formControlName","emailText","p-label","E-mail","p-rows","8","p-required","",1,"po-sm-12"],["p-title","Email successfully sent",3,"p-primary-action"],[1,"po-row"],["p-label","From:",1,"po-md-6",3,"p-value"],["p-label","To:",1,"po-md-6",3,"p-value"],["p-label","Subject:",1,"po-md-12",3,"p-value"],["name","text","p-label","E-mail","p-readonly","","p-required","","p-rows","6",1,"po-md-12",3,"ngModel"],["p-label","CC:",1,"po-md-12",3,"p-value"]],template:function(r,i){r&1&&(Sl(0,"po-page-default",0)(1,"form",1),Wl(2,"po-email",2),e0(),Wl(3,"po-email",3),e0(),Wl(4,"po-email",4),e0(),Wl(5,"po-input",5),e0(),Wl(6,"po-textarea",6),e0(),og()(),Sl(7,"po-modal",7)(8,"div",8),Wl(9,"po-info",9)(10,"po-info",10),og(),Wl(11,"po-divider"),dx(12,je,4,1,"div"),Sl(13,"div",8),Wl(14,"po-info",11),og(),Wl(15,"po-divider"),Sl(16,"div",8),Wl(17,"po-textarea",12),e0(),og()()),r&2&&(nw("p-actions",i.getPageAction()),Lp(),nw("formGroup",i.formEmail),Lp(),n0(),Lp(),n0(),Lp(),n0(),Lp(),n0(),Lp(),n0(),Lp(),nw("p-primary-action",i.primaryAction),Lp(2),nw("p-value",i.formEmail.get("from").value),Lp(),nw("p-value",i.formEmail.get("to").value),Lp(2),fx(i.formEmail.get("cc").value?12:-1),Lp(2),nw("p-value",i.formEmail.get("subject").value),Lp(3),nw("ngModel",i.formEmail.get("emailText").value),n0());},dependencies:[Z9,G9,q9,_k,Mk,Sk,mv,Pz,L3,Whe,Ghe,Yo,rNe],encapsulation:2,changeDetection:1})}return a})();var Ne=a=>({"docs-sample-code-tabs":a}),ve=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-textarea-email-reactive-form-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Textarea - Email Reactive Form"),og(),Sl(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-textarea-email-reactive-form/sample-po-textarea-email-reactive-form.component.html"),og(),Sl(13,"pre",7),eN(14,`<po-page-default p-title="Send email" [p-actions]="getPageAction()">
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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-textarea-email-reactive-form/sample-po-textarea-email-reactive-form.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-textarea-email-reactive-form"),og(),Wl(23,"hr")),r&2&&(Lp(5),$x("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,Ne,i.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,Ce],encapsulation:2})}return a})();var Te=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-textarea-doc"]],standalone:false,decls:902,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://www.w3.org/WAI/WCAG21/Understanding/name-role-value"],["href","https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-enhanced"],["href","https://www.w3.org/WAI/WCAG21/Understanding/use-of-color"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-helper"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"]],template:function(r,i){r&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),eN(3,"import { PoFieldModule } from '@po-ui/ng-components';"),og()(),Sl(4,"div",2)(5,"p"),eN(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),og(),Sl(7,"blockquote")(8,"p"),eN(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),Sl(10,"code"),eN(11,"FormsModule"),og(),eN(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Sl(13,"code"),eN(14,"ReactiveFormsModule"),og(),eN(15,", ambos nativos do Angular."),og()()(),Sl(16,"h3",3),eN(17,"Componente"),og(),Sl(18,"h4",4)(19,"code",5),eN(20,"PoTextareaComponent"),og()(),Sl(21,"div",2)(22,"p"),eN(23,`Este \xE9 um componente de entrada de dados que possibilita o preechimento com m\xFAltiplas linhas.
\xC9 recomendado para observa\xE7\xF5es, detalhamentos e outras situa\xE7\xF5es onde o usu\xE1rio deva preencher com um texto.`),og(),Sl(24,"p"),eN(25,"Importante:"),og(),Sl(26,"ul")(27,"li"),eN(28,"A propriedade "),Sl(29,"code"),eN(30,"name"),og(),eN(31," \xE9 obrigat\xF3ria para que o formul\xE1rio e o "),Sl(32,"code"),eN(33,"model"),og(),eN(34,` funcionem corretamente. Do contr\xE1rio, ocorrer\xE1 um erro de
`),Sl(35,"em"),eN(36,"Angular"),og(),eN(37,", onde ser\xE1 necess\xE1rio informar o atributo "),Sl(38,"code"),eN(39,"name"),og(),eN(40," ou o atributo "),Sl(41,"code"),eN(42,'[ngModelOptions]="{standalone: true}"'),og(),eN(43,", por exemplo:"),og()(),Sl(44,"pre")(45,"code"),eN(46,`<po-textarea
  [(ngModel)]="pessoa.nome"
  [ngModelOptions]="{standalone: true}">
</po-textarea>
`),og()(),Sl(47,"h4"),eN(48,"Acessibilidade tratada no componente"),og(),Sl(49,"p"),eN(50,"Algumas diretrizes de acessibilidade j\xE1 s\xE3o tratadas no componente, internamente, e n\xE3o podem ser alteradas. S\xE3o elas:"),og(),Sl(51,"ul")(52,"li"),eN(53,`O Text area foi desenvolvido com uso de controles padr\xF5es HTML, o que permite a identifica\xE7\xE3o do mesmo na interface por tecnologias
assistivas. `),Sl(54,"a",6),eN(55,"WCAG 4.1.2: Name, Role, Value"),og()(),Sl(56,"li"),eN(57,`O foco \xE9 vis\xEDvel e possui uma espessura superior a 2 pixels CSS, n\xE3o ficando escondido por outros
elementos da tela. `),Sl(58,"a",7),eN(59,"WCAG 2.4.12: Focus Appearance)"),og()(),Sl(60,"li"),eN(61,`A identifica\xE7\xE3o do erro acontece tamb\xE9m atrav\xE9s da mudan\xE7a de cor do campo, mas tamb\xE9m de um \xEDcone
junto da mensagem. `),Sl(62,"a",8),eN(63,"WGAG 1.4.1: Use of Color, 3.2.4: Consistent Identification"),og()()(),Sl(64,"h4"),eN(65,"Tokens customiz\xE1veis"),og(),Sl(66,"p"),eN(67,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),og(),Sl(68,"blockquote")(69,"p"),eN(70,"Para maiores informa\xE7\xF5es, acesse o guia "),Sl(71,"a",9),eN(72,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),eN(73,"."),og()(),Sl(74,"table")(75,"thead")(76,"tr")(77,"th"),eN(78,"Propriedade"),og(),Sl(79,"th"),eN(80,"Descri\xE7\xE3o"),og(),Sl(81,"th"),eN(82,"Valor Padr\xE3o"),og()()(),Sl(83,"tbody")(84,"tr")(85,"td")(86,"strong"),eN(87,"Default Values"),og()(),Wl(88,"td")(89,"td"),og(),Sl(90,"tr")(91,"td")(92,"code"),eN(93,"--font-family"),og()(),Sl(94,"td"),eN(95,"Fam\xEDlia tipogr\xE1fica usada"),og(),Sl(96,"td")(97,"code"),eN(98,"var(--font-family-theme)"),og()()(),Sl(99,"tr")(100,"td")(101,"code"),eN(102,"--font-size"),og()(),Sl(103,"td"),eN(104,"Tamanho da fonte"),og(),Sl(105,"td")(106,"code"),eN(107,"var(--font-size-default)"),og()()(),Sl(108,"tr")(109,"td")(110,"code"),eN(111,"--text-color-placeholder"),og()(),Sl(112,"td"),eN(113,"Cor do texto placeholder"),og(),Sl(114,"td")(115,"code"),eN(116,"var(--color-neutral-light-30)"),og()()(),Sl(117,"tr")(118,"td")(119,"code"),eN(120,"--color"),og()(),Sl(121,"td"),eN(122,"Cor pincipal do campo"),og(),Sl(123,"td")(124,"code"),eN(125,"var(--color-neutral-dark-70)"),og()()(),Sl(126,"tr")(127,"td")(128,"code"),eN(129,"--background"),og()(),Sl(130,"td"),eN(131,"Cor de background"),og(),Sl(132,"td")(133,"code"),eN(134,"var(--color-neutral-light-05)"),og()()(),Sl(135,"tr")(136,"td")(137,"code"),eN(138,"--field-container-title-justify"),og()(),Sl(139,"td"),eN(140,"Alinhamento horizontal do t\xEDtulo ("),Sl(141,"code"),eN(142,"justify-content"),og(),eN(143,")"),og(),Sl(144,"td")(145,"code"),eN(146,"space-between"),og()()(),Sl(147,"tr")(148,"td")(149,"code"),eN(150,"--field-container-title-flex"),og()(),Sl(151,"td"),eN(152,"Flex do t\xEDtulo ("),Sl(153,"code"),eN(154,"flex"),og(),eN(155,")"),og(),Sl(156,"td")(157,"code"),eN(158,"1 auto"),og()()()()()(),Sl(159,"div",10)(160,"h4",11),eN(161,"Seletor"),og(),Sl(162,"pre",12),eN(163,`<po-textarea
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
`),og()(),Sl(164,"h4",13),eN(165,"Propriedades"),og(),Sl(166,"table",14)(167,"tr",15)(168,"th",16),eN(169,"Nome"),og(),Sl(170,"th",16),eN(171,"Tipo"),og(),Sl(172,"th",16),eN(173,"Padr\xE3o"),og(),Sl(174,"th",16),eN(175,"Descri\xE7\xE3o"),og()(),Sl(176,"tr",17)(177,"td",18)(178,"div",19)(179,"span",20),eN(180," (p-additional-help)"),Wl(181,"br"),og()(),Sl(182,"div",21),eN(183,"Deprecated"),og()(),Sl(184,"td",22)(185,"code",23),eN(186,"EventEmitter"),og()(),Sl(187,"td",24),eN(188,"-"),og(),Sl(189,"td",25)(190,"em")(191,"strong"),eN(192,"(opcional)"),og()(),Sl(193,"p"),eN(194,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),og(),Sl(195,"blockquote")(196,"p"),eN(197,"Essa propriedade est\xE1 "),Sl(198,"strong"),eN(199,"depreciada"),og(),eN(200," e ser\xE1 removida na vers\xE3o "),Sl(201,"code"),eN(202,"23.x.x"),og(),eN(203,". Recomendamos utilizar a propriedade "),Sl(204,"code"),eN(205,"p-helper"),og(),eN(206," que oferece mais recursos e flexibilidade."),og()()()(),Sl(207,"tr",17)(208,"td",18)(209,"div",26)(210,"span",27),eN(211," p-additional-help-tooltip"),Wl(212,"br"),og()(),Sl(213,"div",21),eN(214,"Deprecated"),og()(),Sl(215,"td",22)(216,"code",28),eN(217,"string"),og()(),Sl(218,"td",24),eN(219,"-"),og(),Sl(220,"td",25)(221,"em")(222,"strong"),eN(223,"(opcional)"),og()(),Sl(224,"p"),eN(225,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),Sl(226,"code"),eN(227,"po-helper"),og(),eN(228,`.
`),Sl(229,"strong"),eN(230,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),og()(),Sl(231,"blockquote")(232,"p"),eN(233,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),og()(),Sl(234,"blockquote")(235,"p"),eN(236,"Essa propriedade est\xE1 "),Sl(237,"strong"),eN(238,"depreciada"),og(),eN(239," e ser\xE1 removida na vers\xE3o "),Sl(240,"code"),eN(241,"23.x.x"),og(),eN(242,". Recomendamos utilizar a propriedade "),Sl(243,"code"),eN(244,"p-helper"),og(),eN(245," que oferece mais recursos e flexibilidade."),og()()()(),Sl(246,"tr",17)(247,"td",18)(248,"div",26)(249,"span",27),eN(250," p-append-in-body"),Wl(251,"br"),og()()(),Sl(252,"td",22)(253,"code",29),eN(254,"boolean"),og()(),Sl(255,"td",24)(256,"p")(257,"code"),eN(258,"false"),og()()(),Sl(259,"td",25)(260,"em")(261,"strong"),eN(262,"(opcional)"),og()(),Sl(263,"p"),eN(264,"Define que o popover ("),Sl(265,"code"),eN(266,"p-helper"),og(),eN(267," e/ou "),Sl(268,"code"),eN(269,"p-error-limit"),og(),eN(270,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),og(),Sl(271,"blockquote")(272,"p"),eN(273,"Quando utilizado com "),Sl(274,"code"),eN(275,"p-helper"),og(),eN(276,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),og()()()(),Sl(277,"tr",17)(278,"td",18)(279,"div",26)(280,"span",27),eN(281," p-auto-focus"),Wl(282,"br"),og()()(),Sl(283,"td",22)(284,"code",29),eN(285,"boolean"),og()(),Sl(286,"td",24)(287,"p")(288,"code"),eN(289,"false"),og()()(),Sl(290,"td",25)(291,"em")(292,"strong"),eN(293,"(opcional)"),og()(),Sl(294,"p"),eN(295,"Aplica foco no elemento ao ser iniciado."),og(),Sl(296,"blockquote")(297,"p"),eN(298,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),og()()()(),Sl(299,"tr",17)(300,"td",18)(301,"div",19)(302,"span",20),eN(303," (p-blur)"),Wl(304,"br"),og()()(),Sl(305,"td",22)(306,"code",23),eN(307,"EventEmitter"),og()(),Sl(308,"td",24),eN(309,"-"),og(),Sl(310,"td",25)(311,"em")(312,"strong"),eN(313,"(opcional)"),og()(),Sl(314,"p"),eN(315,"Evento disparado ao sair do campo."),og()()(),Sl(316,"tr",17)(317,"td",18)(318,"div",19)(319,"span",20),eN(320," (p-change)"),Wl(321,"br"),og()()(),Sl(322,"td",22)(323,"code",23),eN(324,"EventEmitter"),og()(),Sl(325,"td",24),eN(326,"-"),og(),Sl(327,"td",25)(328,"em")(329,"strong"),eN(330,"(opcional)"),og()(),Sl(331,"p"),eN(332,"Evento disparado ao alterar valor e deixar o campo."),og()()(),Sl(333,"tr",17)(334,"td",18)(335,"div",19)(336,"span",20),eN(337," (p-change-model)"),Wl(338,"br"),og()()(),Sl(339,"td",22)(340,"code",23),eN(341,"EventEmitter"),og()(),Sl(342,"td",24),eN(343,"-"),og(),Sl(344,"td",25)(345,"em")(346,"strong"),eN(347,"(opcional)"),og()(),Sl(348,"p"),eN(349,"Evento disparado ao alterar valor do model."),og()()(),Sl(350,"tr",17)(351,"td",18)(352,"div",26)(353,"span",27),eN(354," p-compact-label"),Wl(355,"br"),og()()(),Sl(356,"td",22)(357,"code",29),eN(358,"boolean"),og()(),Sl(359,"td",24)(360,"p")(361,"code"),eN(362,"false"),og()()(),Sl(363,"td",25)(364,"em")(365,"strong"),eN(366,"(opcional)"),og()(),Sl(367,"p"),eN(368,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),og(),Sl(369,"p"),eN(370,"Quando habilitado ("),Sl(371,"code"),eN(372,"true"),og(),eN(373,"), o modo compacto afeta o conjunto composto por:"),og(),Sl(374,"ul")(375,"li")(376,"code"),eN(377,"po-label"),og()(),Sl(378,"li")(379,"code"),eN(380,"p-requirement (showRequired)"),og()(),Sl(381,"li")(382,"code"),eN(383,"po-helper"),og()()(),Sl(384,"p"),eN(385,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),og(),Sl(386,"p"),eN(387,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),og(),Sl(388,"ul")(389,"li")(390,"code"),eN(391,"--field-container-title-justify"),og()(),Sl(392,"li")(393,"code"),eN(394,"--field-container-title-flex"),og()()(),Sl(395,"p"),eN(396,"Exemplo:"),og(),Sl(397,"pre")(398,"code"),eN(399,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),og()(),Sl(400,"p"),eN(401,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),og()()(),Sl(402,"tr",17)(403,"td",18)(404,"div",26)(405,"span",27),eN(406," p-disabled"),Wl(407,"br"),og()()(),Sl(408,"td",22)(409,"code",29),eN(410,"boolean"),og()(),Sl(411,"td",24)(412,"p")(413,"code"),eN(414,"false"),og()()(),Sl(415,"td",25)(416,"em")(417,"strong"),eN(418,"(opcional)"),og()(),Sl(419,"p"),eN(420,"Indica que o campo ser\xE1 desabilitado."),og()()(),Sl(421,"tr",17)(422,"td",18)(423,"div",19)(424,"span",20),eN(425," (p-enter)"),Wl(426,"br"),og()()(),Sl(427,"td",22)(428,"code",23),eN(429,"EventEmitter"),og()(),Sl(430,"td",24),eN(431,"-"),og(),Sl(432,"td",25)(433,"em")(434,"strong"),eN(435,"(opcional)"),og()(),Sl(436,"p"),eN(437,"Evento disparado ao entrar do campo."),og()()(),Sl(438,"tr",17)(439,"td",18)(440,"div",26)(441,"span",27),eN(442," p-error-limit"),Wl(443,"br"),og()()(),Sl(444,"td",22)(445,"code",29),eN(446,"boolean"),og()(),Sl(447,"td",24)(448,"p")(449,"code"),eN(450,"false"),og()()(),Sl(451,"td",25)(452,"em")(453,"strong"),eN(454,"(opcional)"),og()(),Sl(455,"p"),eN(456,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),og(),Sl(457,"blockquote")(458,"p"),eN(459,"Caso essa propriedade seja definida como "),Sl(460,"code"),eN(461,"true"),og(),eN(462,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),og()()()(),Sl(463,"tr",17)(464,"td",18)(465,"div",26)(466,"span",27),eN(467," p-field-error-message"),Wl(468,"br"),og()()(),Sl(469,"td",22)(470,"code",28),eN(471,"string"),og()(),Sl(472,"td",24),eN(473,"-"),og(),Sl(474,"td",25)(475,"em")(476,"strong"),eN(477,"(opcional)"),og()(),Sl(478,"p"),eN(479,"Exibe a mensagem setada se o campo estiver vazio e for requerido."),og(),Sl(480,"blockquote")(481,"p"),eN(482,"Necess\xE1rio que a propriedade "),Sl(483,"code"),eN(484,"p-required"),og(),eN(485," esteja habilitada."),og()()()(),Sl(486,"tr",17)(487,"td",18)(488,"div",26)(489,"span",27),eN(490," p-help"),Wl(491,"br"),og()()(),Sl(492,"td",22)(493,"code",28),eN(494,"string"),og()(),Sl(495,"td",24),eN(496,"-"),og(),Sl(497,"td",25)(498,"em")(499,"strong"),eN(500,"(opcional)"),og()(),Sl(501,"p"),eN(502,"Texto de apoio do campo."),og()()(),Sl(503,"tr",17)(504,"td",18)(505,"div",19)(506,"span",20),eN(507," (p-keydown)"),Wl(508,"br"),og()()(),Sl(509,"td",22)(510,"code",23),eN(511,"EventEmitter"),og()(),Sl(512,"td",24),eN(513,"-"),og(),Sl(514,"td",25)(515,"em")(516,"strong"),eN(517,"(opcional)"),og()(),Sl(518,"p"),eN(519,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Sl(520,"code"),eN(521,"KeyboardEvent"),og(),eN(522," com informa\xE7\xF5es sobre a tecla."),og()()(),Sl(523,"tr",17)(524,"td",18)(525,"div",26)(526,"span",27),eN(527," p-label"),Wl(528,"br"),og()()(),Sl(529,"td",22)(530,"code",28),eN(531,"string"),og()(),Sl(532,"td",24),eN(533,"-"),og(),Sl(534,"td",25)(535,"em")(536,"strong"),eN(537,"(opcional)"),og()(),Sl(538,"p"),eN(539,"Label do campo."),og()()(),Sl(540,"tr",17)(541,"td",18)(542,"div",26)(543,"span",27),eN(544," p-label-text-wrap"),Wl(545,"br"),og()()(),Sl(546,"td",22)(547,"code",29),eN(548,"boolean"),og()(),Sl(549,"td",24)(550,"p")(551,"code"),eN(552,"false"),og()()(),Sl(553,"td",25)(554,"em")(555,"strong"),eN(556,"(opcional)"),og()(),Sl(557,"p"),eN(558,"Habilita a quebra autom\xE1tica do texto da propriedade "),Sl(559,"code"),eN(560,"p-label"),og(),eN(561,". Quando "),Sl(562,"code"),eN(563,"p-label-text-wrap"),og(),eN(564,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),og()()(),Sl(565,"tr",17)(566,"td",18)(567,"div",26)(568,"span",27),eN(569," p-loading"),Wl(570,"br"),og()()(),Sl(571,"td",22)(572,"code",29),eN(573,"boolean"),og()(),Sl(574,"td",24)(575,"p")(576,"code"),eN(577,"false"),og()()(),Sl(578,"td",25)(579,"em")(580,"strong"),eN(581,"(opcional)"),og()(),Sl(582,"p"),eN(583,"Exibe um \xEDcone de carregamento no lado direito do campo para sinalizar que uma opera\xE7\xE3o est\xE1 em andamento."),og()()(),Sl(584,"tr",17)(585,"td",18)(586,"div",26)(587,"span",27),eN(588," p-maxlength"),Wl(589,"br"),og()()(),Sl(590,"td",22)(591,"code",30),eN(592,"number"),og()(),Sl(593,"td",24),eN(594,"-"),og(),Sl(595,"td",25)(596,"em")(597,"strong"),eN(598,"(opcional)"),og()(),Sl(599,"p"),eN(600,"Indica a quantidade m\xE1xima de caracteres que o campo aceita."),og()()(),Sl(601,"tr",17)(602,"td",18)(603,"div",26)(604,"span",27),eN(605," p-minlength"),Wl(606,"br"),og()()(),Sl(607,"td",22)(608,"code",30),eN(609,"number"),og()(),Sl(610,"td",24),eN(611,"-"),og(),Sl(612,"td",25)(613,"em")(614,"strong"),eN(615,"(opcional)"),og()(),Sl(616,"p"),eN(617,"Indica a quantidade m\xEDnima de caracteres que o campo aceita."),og()()(),Sl(618,"tr",17)(619,"td",18)(620,"div",26)(621,"span",27),eN(622," name"),Wl(623,"br"),og()()(),Sl(624,"td",22)(625,"code",28),eN(626,"string"),og()(),Sl(627,"td",24),eN(628,"-"),og(),Sl(629,"td",25)(630,"p"),eN(631,"Nome e Id do componente."),og()()(),Sl(632,"tr",17)(633,"td",18)(634,"div",26)(635,"span",27),eN(636," p-optional"),Wl(637,"br"),og()()(),Sl(638,"td",22)(639,"code",29),eN(640,"boolean"),og()(),Sl(641,"td",24)(642,"p")(643,"code"),eN(644,"false"),og()()(),Sl(645,"td",25)(646,"em")(647,"strong"),eN(648,"(opcional)"),og()(),Sl(649,"p"),eN(650,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),og(),Sl(651,"blockquote")(652,"p"),eN(653,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),og()(),Sl(654,"ul")(655,"li"),eN(656,"O campo conter "),Sl(657,"code"),eN(658,"p-required"),og(),eN(659,";"),og(),Sl(660,"li"),eN(661,"N\xE3o possuir "),Sl(662,"code"),eN(663,"p-help"),og(),eN(664," e/ou "),Sl(665,"code"),eN(666,"p-label"),og(),eN(667,"."),og()()()(),Sl(668,"tr",17)(669,"td",18)(670,"div",26)(671,"span",27),eN(672," p-placeholder"),Wl(673,"br"),og()()(),Sl(674,"td",22)(675,"code",28),eN(676,"string"),og()(),Sl(677,"td",24),eN(678,"-"),og(),Sl(679,"td",25)(680,"p"),eN(681,"Placeholder, mensagem que aparecer\xE1 enquanto o campo n\xE3o estiver preenchido."),og()()(),Sl(682,"tr",17)(683,"td",18)(684,"div",26)(685,"span",27),eN(686," p-helper"),Wl(687,"br"),og()()(),Sl(688,"td",22)(689,"code",31),eN(690,"PoHelperOptions "),og(),Sl(691,"code",28),eN(692," string"),og()(),Sl(693,"td",24),eN(694,"-"),og(),Sl(695,"td",25)(696,"em")(697,"strong"),eN(698,"(opcional)"),og()(),Sl(699,"p"),eN(700,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label quando a propriedade "),Sl(701,"code"),eN(702,"p-label"),og(),eN(703," for definida, ou, ao lado do componente na aus\xEAncia da propriedade "),Sl(704,"code"),eN(705,"p-label"),og(),eN(706,"."),og(),Sl(707,"blockquote")(708,"p"),eN(709,"Para mais informa\xE7\xF5es acesse: "),Sl(710,"a",32),eN(711,"https://po-ui.io/documentation/po-helper"),og(),eN(712,"."),og()(),Sl(713,"blockquote")(714,"p"),eN(715,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),Sl(716,"code"),eN(717,"p-additional-help-tooltip"),og(),eN(718," e "),Sl(719,"code"),eN(720,"p-additional-help"),og(),eN(721,") ser\xE1 ignorado."),og()()()(),Sl(722,"tr",17)(723,"td",18)(724,"div",26)(725,"span",27),eN(726," p-readonly"),Wl(727,"br"),og()()(),Sl(728,"td",22)(729,"code",29),eN(730,"boolean"),og()(),Sl(731,"td",24)(732,"p")(733,"code"),eN(734,"false"),og()()(),Sl(735,"td",25)(736,"em")(737,"strong"),eN(738,"(opcional)"),og()(),Sl(739,"p"),eN(740,"Indica que o campo ser\xE1 somente leitura."),og()()(),Sl(741,"tr",17)(742,"td",18)(743,"div",26)(744,"span",27),eN(745," p-required"),Wl(746,"br"),og()()(),Sl(747,"td",22)(748,"code",29),eN(749,"boolean"),og()(),Sl(750,"td",24)(751,"p")(752,"code"),eN(753,"false"),og()()(),Sl(754,"td",25)(755,"em")(756,"strong"),eN(757,"(opcional)"),og()(),Sl(758,"p"),eN(759,"Define que o campo ser\xE1 obrigat\xF3rio."),og(),Sl(760,"blockquote")(761,"p"),eN(762,"Esta propriedade \xE9 desconsiderada quando o input est\xE1 desabilitado "),Sl(763,"code"),eN(764,"(p-disabled)"),og(),eN(765,"."),og()()()(),Sl(766,"tr",17)(767,"td",18)(768,"div",26)(769,"span",27),eN(770," p-rows"),Wl(771,"br"),og()()(),Sl(772,"td",22)(773,"code",30),eN(774,"number"),og()(),Sl(775,"td",24)(776,"p")(777,"code"),eN(778,"3"),og()()(),Sl(779,"td",25)(780,"em")(781,"strong"),eN(782,"(opcional)"),og()(),Sl(783,"p"),eN(784,"Indica a quantidade de linhas que ser\xE3o exibidas."),og()()(),Sl(785,"tr",17)(786,"td",18)(787,"div",26)(788,"span",27),eN(789," p-show-required"),Wl(790,"br"),og()()(),Sl(791,"td",22)(792,"code",29),eN(793,"boolean"),og()(),Sl(794,"td",24),eN(795,"-"),og(),Sl(796,"td",25)(797,"p"),eN(798,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),og(),Sl(799,"blockquote")(800,"p"),eN(801,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),og()(),Sl(802,"ul")(803,"li"),eN(804,"N\xE3o possuir "),Sl(805,"code"),eN(806,"p-help"),og(),eN(807," e/ou "),Sl(808,"code"),eN(809,"p-label"),og(),eN(810,"."),og()()()(),Sl(811,"tr",17)(812,"td",18)(813,"div",26)(814,"span",27),eN(815," p-size"),Wl(816,"br"),og()()(),Sl(817,"td",22)(818,"code",28),eN(819,"string"),og()(),Sl(820,"td",24)(821,"p")(822,"code"),eN(823,"medium"),og()()(),Sl(824,"td",25)(825,"em")(826,"strong"),eN(827,"(opcional)"),og()(),Sl(828,"p"),eN(829,"Define o tamanho do componente:"),og(),Sl(830,"ul")(831,"li")(832,"code"),eN(833,"small"),og(),eN(834," (dispon\xEDvel apenas para acessibilidade AA)"),og(),Sl(835,"li")(836,"code"),eN(837,"medium"),og()()(),Sl(838,"blockquote")(839,"p"),eN(840,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Sl(841,"code"),eN(842,"medium"),og(),eN(843,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Sl(844,"a",33),eN(845,"po-theme"),og(),eN(846,"."),og()()()()(),Sl(847,"h3",13),eN(848,"M\xE9todos"),og(),Sl(849,"table",34)(850,"tr",17)(851,"th",35)(852,"div",26)(853,"h4")(854,"span",27),eN(855," focus "),og()()()()(),Sl(856,"tr",25)(857,"td",25)(858,"p"),eN(859,"Fun\xE7\xE3o que atribui foco ao componente."),og(),Sl(860,"p"),eN(861,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),og(),Sl(862,"pre")(863,"code"),eN(864,`import { PoTextareaComponent } from '@po-ui/ng-components';

...

@ViewChild(PoTextareaComponent, { static: true }) textarea: PoTextareaComponent;

focusTextarea() {
  this.textarea.focus();
}
`),og()()()()(),Wl(865,"br"),Sl(866,"table",34)(867,"tr",17)(868,"th",35)(869,"div",26)(870,"h4")(871,"span",27),eN(872," showAdditionalHelp "),og()()()()(),Sl(873,"tr",25)(874,"td",25)(875,"p"),eN(876,"M\xE9todo que exibe "),Sl(877,"code"),eN(878,"p-helper"),og(),eN(879," ou executa a a\xE7\xE3o definida em "),Sl(880,"code"),eN(881,"p-helper{eventOnClick}"),og(),eN(882," ou em "),Sl(883,"code"),eN(884,"p-additionalHelp"),og(),eN(885,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Sl(886,"code"),eN(887,"p-keydown"),og(),eN(888,"."),og(),Sl(889,"blockquote")(890,"p"),eN(891,"Exibe ou oculta o conte\xFAdo do componente "),Sl(892,"code"),eN(893,"po-helper"),og(),eN(894," quando o componente estiver com foco."),og()(),Sl(895,"pre")(896,"code"),eN(897,`//Exemplo com p-label e p-helper
<po-textarea
 #textarea
 ...
 p-label="Label do textarea"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, textarea)"
></po-textarea>
`),og()(),Sl(898,"pre")(899,"code"),eN(900,`...
onKeyDown(event: KeyboardEvent, inp: PoTextareaComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),og()()()()(),Wl(901,"br"),og());},dependencies:[Ka],encapsulation:2})}return a})();var ye=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,r){this.route=m,this.router=r;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let r=m.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:"merge"}),this.activeTab=m;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(r){return new(r||a)(w(Xn),w(En))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:9,vars:4,consts:[["p-title","Textarea",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,i){r&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return i.changeTab("doc")}),Wl(3,"sample-po-textarea-doc"),og(),Sl(4,"po-tab",3),ft("p-click",function(){return i.changeTab("web")}),Wl(5,"sample-po-textarea-basic-view")(6,"sample-po-textarea-labs-view")(7,"sample-po-textarea-email-view")(8,"sample-po-textarea-email-reactive-form-view"),og()()()),r&2&&(nw("p-actions",i.actions),Lp(2),nw("p-active",i.activeTab==="doc"),Lp(2),nw("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[rNe,Bme,qme,ge,he,fe,ve,Te],encapsulation:2})}return a})();var Re=[{path:"",component:ye}],we=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue({imports:[hL.forChild(Re),hL]})}return a})();var yt=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue({imports:[sr,we]})}return a})();export{yt as DocPoTextareaModule};