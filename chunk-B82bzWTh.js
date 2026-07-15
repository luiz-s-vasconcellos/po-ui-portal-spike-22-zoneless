import {f as fe$1,u as ue,s as sr,m as mL,w,c3 as Xn,E as En,U as Un,c as f,cM as tY,cN as lm,b5 as Ghe,F as Wl,an as SO,aH as Ka,b8 as Ume,b9 as $me,C as Sl,y as rN,J as og,a1 as ft,L as Lp,ar as Gx,au as dg,O as rw,bs as gN,aX as Q9,aF as Z9,aY as K9,aG as wk,aZ as _k,b0 as Qt,b1 as mv,c4 as b3,b4 as L3,cp as Bhe,c8 as Tde,c9 as jhe,aB as Ix,aM as Cw,aN as n0,aO as ww,aP as i0,cz as Pz,b6 as Yo,a3 as sNe,aq as px,at as gx,av as ql,aw as lo,ax as uo,cQ as xk,cR as Rk,aD as Ky,aT as oN,aE as Xy,aA as xx}from'./main-TVDUJ47Y.js';var Ee=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-textarea-basic"]],standalone:false,decls:1,vars:0,consts:[["name","textarea","p-label","PO Textarea"]],template:function(r,i){r&1&&Wl(0,"po-textarea",0);},dependencies:[Ghe],encapsulation:2,changeDetection:1})}return a})();var _e=a=>({"docs-sample-code-tabs":a}),ge=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-textarea-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),rN(3,"PO Textarea Basic"),og(),Sl(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),rN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),rN(12,"sample-po-textarea-basic/sample-po-textarea-basic.component.html"),og(),Sl(13,"pre",7),rN(14,`<po-textarea name="textarea" p-label="PO Textarea"> </po-textarea>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),rN(18,"sample-po-textarea-basic/sample-po-textarea-basic.component.ts"),og(),Sl(19,"pre",9),rN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-textarea-basic',
  templateUrl: './sample-po-textarea-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTextareaBasicComponent {}
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-textarea-basic"),og(),Wl(23,"hr")),r&2&&(Lp(5),Gx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),rw("ngClass",gN(4,_e,i.hideSampleCodeTabs)));},dependencies:[SO,Ka,Ume,$me,Ee],encapsulation:2,changeDetection:1})}return a})();var be=(()=>{class a{helperText;event;help;label;maxlength;minlength;placeholder;properties;fieldErrorMessage;rows;size;textarea;propertiesOptions=[{value:"disabled",label:"Disabled"},{value:"optional",label:"Optional"},{value:"readonly",label:"Read Only"},{value:"required",label:"Required"},{value:"showRequired",label:"Show Required"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"},{value:"compactLabel",label:"Compact Label"},{value:"loading",label:"Loading"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore();}changeEvent(m){this.event=m;}restore(){this.helperText="",this.textarea=void 0,this.label=void 0,this.help=void 0,this.minlength=void 0,this.maxlength=void 0,this.event=void 0,this.fieldErrorMessage="",this.rows=void 0,this.placeholder="",this.properties=[],this.size="medium";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-textarea-labs"]],standalone:false,decls:20,vars:33,consts:[["f","ngForm"],["name","textarea",3,"ngModelChange","p-blur","p-change","p-change-model","p-enter","p-keydown","ngModel","p-helper","p-disabled","p-help","p-label","p-loading","p-maxlength","p-minlength","p-optional","p-placeholder","p-readonly","p-required","p-field-error-message","p-show-required","p-rows","p-size","p-error-limit","p-label-text-wrap","p-compact-label"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","fieldErrorMessage","p-clean","","p-label","Field Error Message",1,"po-md-6",3,"ngModelChange","ngModel"],["name","rows","p-clean","","p-label","Rows","p-min","3",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","minlength","p-clean","","p-label","Min Length",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","maxlength","p-clean","","p-label","Max Length",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(r,i){if(r&1){let s=Ix();Sl(0,"po-textarea",1),Cw("ngModelChange",function(l){return Ky(s),oN(i.textarea,l)||(i.textarea=l),Xy(l)}),ft("p-blur",function(){return i.changeEvent("p-blur")})("p-change",function(){return i.changeEvent("p-change")})("p-change-model",function(){return i.changeEvent("p-change-model")})("p-enter",function(){return i.changeEvent("p-enter")})("p-keydown",function(){return i.changeEvent("p-keydown")}),og(),n0(),Wl(1,"po-divider"),Sl(2,"div",2),Wl(3,"po-info",3)(4,"po-info",4),og(),Wl(5,"po-divider"),Sl(6,"form",null,0)(8,"po-input",5),Cw("ngModelChange",function(l){return Ky(s),oN(i.label,l)||(i.label=l),Xy(l)}),og(),n0(),Sl(9,"po-input",6),Cw("ngModelChange",function(l){return Ky(s),oN(i.help,l)||(i.help=l),Xy(l)}),og(),n0(),Sl(10,"po-input",7),Cw("ngModelChange",function(l){return Ky(s),oN(i.helperText,l)||(i.helperText=l),Xy(l)}),og(),n0(),Sl(11,"po-input",8),Cw("ngModelChange",function(l){return Ky(s),oN(i.placeholder,l)||(i.placeholder=l),Xy(l)}),og(),n0(),Sl(12,"po-input",9),Cw("ngModelChange",function(l){return Ky(s),oN(i.fieldErrorMessage,l)||(i.fieldErrorMessage=l),Xy(l)}),og(),n0(),Sl(13,"po-number",10),Cw("ngModelChange",function(l){return Ky(s),oN(i.rows,l)||(i.rows=l),Xy(l)}),og(),n0(),Sl(14,"po-number",11),Cw("ngModelChange",function(l){return Ky(s),oN(i.minlength,l)||(i.minlength=l),Xy(l)}),og(),n0(),Sl(15,"po-number",12),Cw("ngModelChange",function(l){return Ky(s),oN(i.maxlength,l)||(i.maxlength=l),Xy(l)}),og(),n0(),Sl(16,"po-checkbox-group",13),Cw("ngModelChange",function(l){return Ky(s),oN(i.properties,l)||(i.properties=l),Xy(l)}),og(),n0(),Sl(17,"po-radio-group",14),Cw("ngModelChange",function(l){return Ky(s),oN(i.size,l)||(i.size=l),Xy(l)}),og(),n0(),Sl(18,"div",2)(19,"po-button",15),ft("p-click",function(){return i.restore()}),og()()();}r&2&&(ww("ngModel",i.textarea),rw("p-helper",i.helperText)("p-disabled",i.properties.includes("disabled"))("p-help",i.help)("p-label",i.label)("p-loading",i.properties.includes("loading"))("p-maxlength",i.maxlength)("p-minlength",i.minlength)("p-optional",i.properties.includes("optional"))("p-placeholder",i.placeholder)("p-readonly",i.properties.includes("readonly"))("p-required",i.properties.includes("required"))("p-field-error-message",i.fieldErrorMessage)("p-show-required",i.properties.includes("showRequired"))("p-rows",i.rows)("p-size",i.size)("p-error-limit",i.properties==null?null:i.properties.includes("errorLimit"))("p-label-text-wrap",i.properties==null?null:i.properties.includes("labelTextWrap"))("p-compact-label",i.properties==null?null:i.properties.includes("compactLabel")),i0(),Lp(3),rw("p-value",i.textarea),Lp(),rw("p-value",i.event),Lp(4),ww("ngModel",i.label),i0(),Lp(),ww("ngModel",i.help),i0(),Lp(),ww("ngModel",i.helperText),i0(),Lp(),ww("ngModel",i.placeholder),i0(),Lp(),ww("ngModel",i.fieldErrorMessage),i0(),Lp(),ww("ngModel",i.rows),i0(),Lp(),ww("ngModel",i.minlength),i0(),Lp(),ww("ngModel",i.maxlength),i0(),Lp(),ww("ngModel",i.properties),rw("p-options",i.propertiesOptions),i0(),Lp(),ww("ngModel",i.size),rw("p-options",i.sizeOptions),i0());},dependencies:[Q9,Z9,K9,wk,_k,Qt,mv,b3,L3,Bhe,Tde,Ghe,jhe],encapsulation:2,changeDetection:1})}return a})();var ke=a=>({"docs-sample-code-tabs":a}),he=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-textarea-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),rN(3,"PO Textarea Labs"),og(),Sl(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),rN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),rN(12,"sample-po-textarea-labs/sample-po-textarea-labs.component.html"),og(),Sl(13,"pre",7),rN(14,`<po-textarea
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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),rN(18,"sample-po-textarea-labs/sample-po-textarea-labs.component.ts"),og(),Sl(19,"pre",9),rN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-textarea-labs"),og(),Wl(23,"hr")),r&2&&(Lp(5),Gx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),rw("ngClass",gN(4,ke,i.hideSampleCodeTabs)));},dependencies:[SO,Ka,Ume,$me,be],encapsulation:2,changeDetection:1})}return a})();var Fe=["formEmail"];function Ve(a,Me){if(a&1&&(Sl(0,"div")(1,"div",8),Wl(2,"po-info",13),og(),Wl(3,"po-divider"),og()),a&2){let m=xx();Lp(2),rw("p-value",m.cc);}}var Se=(()=>{class a{formEmail;poModal;cc="";emailText="";from="";subject="";to="";pageActions;primaryAction={action:()=>{this.poModal.close(),this.reset();},label:"Ok"};getPageAction(){let m=this.formEmail?!this.formEmail.valid:true;return [{label:"Send",action:this.send.bind(this),disabled:m},{label:"Clean",action:this.reset.bind(this)}]}reset(){this.formEmail.reset();}send(){this.poModal.open();}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-textarea-email"]],viewQuery:function(r,i){if(r&1&&ql(Fe,7)(Yo,7),r&2){let s;lo(s=uo())&&(i.formEmail=s.first),lo(s=uo())&&(i.poModal=s.first);}},standalone:false,decls:19,vars:12,consts:[["formEmail","ngForm"],["p-title","Send email",3,"p-actions"],["name","from","p-clean","","p-label","From","p-required","",1,"po-sm-12",3,"ngModelChange","ngModel"],["name","to","p-clean","","p-label","To","p-required","",1,"po-sm-12",3,"ngModelChange","ngModel"],["name","cc","p-clean","","p-label","CC",1,"po-sm-12",3,"ngModelChange","ngModel"],["name","subject","p-clean","","p-label","Subject","p-required","",1,"po-sm-12",3,"ngModelChange","ngModel"],["name","emailText","p-label","E-mail","p-required","","p-rows","8",1,"po-sm-12",3,"ngModelChange","ngModel"],["p-title","Email successfully sent",3,"p-primary-action"],[1,"po-row"],["p-label","From:",1,"po-md-6",3,"p-value"],["p-label","To:",1,"po-md-6",3,"p-value"],["p-label","Subject:",1,"po-md-12",3,"p-value"],["name","text","p-label","E-mail","p-readonly","","p-rows","6",1,"po-md-12",3,"ngModelChange","ngModel"],["p-label","CC:",1,"po-md-12",3,"p-value"]],template:function(r,i){if(r&1){let s=Ix();Sl(0,"po-page-default",1)(1,"form",null,0)(3,"po-email",2),Cw("ngModelChange",function(l){return Ky(s),oN(i.from,l)||(i.from=l),Xy(l)}),og(),n0(),Sl(4,"po-email",3),Cw("ngModelChange",function(l){return Ky(s),oN(i.to,l)||(i.to=l),Xy(l)}),og(),n0(),Sl(5,"po-email",4),Cw("ngModelChange",function(l){return Ky(s),oN(i.cc,l)||(i.cc=l),Xy(l)}),og(),n0(),Sl(6,"po-input",5),Cw("ngModelChange",function(l){return Ky(s),oN(i.subject,l)||(i.subject=l),Xy(l)}),og(),n0(),Sl(7,"po-textarea",6),Cw("ngModelChange",function(l){return Ky(s),oN(i.emailText,l)||(i.emailText=l),Xy(l)}),og(),n0(),og()(),Sl(8,"po-modal",7)(9,"div",8),Wl(10,"po-info",9)(11,"po-info",10),og(),Wl(12,"po-divider"),px(13,Ve,4,1,"div"),Sl(14,"div",8),Wl(15,"po-info",11),og(),Wl(16,"po-divider"),Sl(17,"div",8)(18,"po-textarea",12),Cw("ngModelChange",function(l){return Ky(s),oN(i.emailText,l)||(i.emailText=l),Xy(l)}),og(),n0(),og()();}r&2&&(rw("p-actions",i.getPageAction()),Lp(3),ww("ngModel",i.from),i0(),Lp(),ww("ngModel",i.to),i0(),Lp(),ww("ngModel",i.cc),i0(),Lp(),ww("ngModel",i.subject),i0(),Lp(),ww("ngModel",i.emailText),i0(),Lp(),rw("p-primary-action",i.primaryAction),Lp(2),rw("p-value",i.from),Lp(),rw("p-value",i.to),Lp(2),gx(i.cc!==""?13:-1),Lp(2),rw("p-value",i.subject),Lp(3),ww("ngModel",i.emailText),i0());},dependencies:[Q9,Z9,K9,wk,_k,mv,Pz,L3,Ghe,jhe,Yo,sNe],encapsulation:2,changeDetection:1})}return a})();var We=a=>({"docs-sample-code-tabs":a}),fe=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-textarea-email-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),rN(3,"PO Textarea - Email"),og(),Sl(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),rN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),rN(12,"sample-po-textarea-email/sample-po-textarea-email.component.html"),og(),Sl(13,"pre",7),rN(14,`<po-page-default p-title="Send email" [p-actions]="getPageAction()">
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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),rN(18,"sample-po-textarea-email/sample-po-textarea-email.component.ts"),og(),Sl(19,"pre",9),rN(20,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';
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
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-textarea-email"),og(),Wl(23,"hr")),r&2&&(Lp(5),Gx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),rw("ngClass",gN(4,We,i.hideSampleCodeTabs)));},dependencies:[SO,Ka,Ume,$me,Se],encapsulation:2,changeDetection:1})}return a})();function je(a,Me){if(a&1&&(Sl(0,"div")(1,"div",8),Wl(2,"po-info",13),og(),Wl(3,"po-divider"),og()),a&2){let m=xx();Lp(2),rw("p-value",m.formEmail.get("cc").value);}}var Ce=(()=>{class a{formBuilder=f(tY);poModal;formEmail;pageActions;primaryAction={action:()=>{this.poModal.close(),this.reset();},label:"Ok"};ngOnInit(){this.formEmail=this.formBuilder.group({cc:null,from:[null,lm.required],to:[null,lm.required],emailText:[null,lm.required],subject:[null,lm.required]});}getPageAction(){let m=this.formEmail?!this.formEmail.valid:true;return [{label:"Send",action:this.send.bind(this),disabled:m},{label:"Clean",action:this.reset.bind(this)}]}reset(){this.formEmail.reset();}send(){this.poModal.open();}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-textarea-email-reactive-form"]],viewQuery:function(r,i){if(r&1&&ql(Yo,7),r&2){let s;lo(s=uo())&&(i.poModal=s.first);}},standalone:false,decls:18,vars:8,consts:[["p-title","Send email",3,"p-actions"],[3,"formGroup"],["name","from","formControlName","from","p-clean","","p-label","From","p-required","",1,"po-sm-12"],["name","to","formControlName","to","p-clean","","p-label","To","p-required","",1,"po-sm-12"],["name","cc","formControlName","cc","p-clean","","p-label","CC",1,"po-sm-12"],["name","subject","formControlName","subject","p-clean","","p-label","Subject","p-required","",1,"po-sm-12"],["name","emailText","formControlName","emailText","p-label","E-mail","p-rows","8","p-required","",1,"po-sm-12"],["p-title","Email successfully sent",3,"p-primary-action"],[1,"po-row"],["p-label","From:",1,"po-md-6",3,"p-value"],["p-label","To:",1,"po-md-6",3,"p-value"],["p-label","Subject:",1,"po-md-12",3,"p-value"],["name","text","p-label","E-mail","p-readonly","","p-required","","p-rows","6",1,"po-md-12",3,"ngModel"],["p-label","CC:",1,"po-md-12",3,"p-value"]],template:function(r,i){r&1&&(Sl(0,"po-page-default",0)(1,"form",1),Wl(2,"po-email",2),n0(),Wl(3,"po-email",3),n0(),Wl(4,"po-email",4),n0(),Wl(5,"po-input",5),n0(),Wl(6,"po-textarea",6),n0(),og()(),Sl(7,"po-modal",7)(8,"div",8),Wl(9,"po-info",9)(10,"po-info",10),og(),Wl(11,"po-divider"),px(12,je,4,1,"div"),Sl(13,"div",8),Wl(14,"po-info",11),og(),Wl(15,"po-divider"),Sl(16,"div",8),Wl(17,"po-textarea",12),n0(),og()()),r&2&&(rw("p-actions",i.getPageAction()),Lp(),rw("formGroup",i.formEmail),Lp(),i0(),Lp(),i0(),Lp(),i0(),Lp(),i0(),Lp(),i0(),Lp(),rw("p-primary-action",i.primaryAction),Lp(2),rw("p-value",i.formEmail.get("from").value),Lp(),rw("p-value",i.formEmail.get("to").value),Lp(2),gx(i.formEmail.get("cc").value?12:-1),Lp(2),rw("p-value",i.formEmail.get("subject").value),Lp(3),rw("ngModel",i.formEmail.get("emailText").value),i0());},dependencies:[Q9,Z9,K9,wk,xk,Rk,mv,Pz,L3,Ghe,jhe,Yo,sNe],encapsulation:2,changeDetection:1})}return a})();var Ne=a=>({"docs-sample-code-tabs":a}),ve=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-textarea-email-reactive-form-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),rN(3,"PO Textarea - Email Reactive Form"),og(),Sl(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),rN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),rN(12,"sample-po-textarea-email-reactive-form/sample-po-textarea-email-reactive-form.component.html"),og(),Sl(13,"pre",7),rN(14,`<po-page-default p-title="Send email" [p-actions]="getPageAction()">
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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),rN(18,"sample-po-textarea-email-reactive-form/sample-po-textarea-email-reactive-form.component.ts"),og(),Sl(19,"pre",9),rN(20,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-textarea-email-reactive-form"),og(),Wl(23,"hr")),r&2&&(Lp(5),Gx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),rw("ngClass",gN(4,Ne,i.hideSampleCodeTabs)));},dependencies:[SO,Ka,Ume,$me,Ce],encapsulation:2,changeDetection:1})}return a})();var Te=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-textarea-doc"]],standalone:false,decls:902,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://www.w3.org/WAI/WCAG21/Understanding/name-role-value"],["href","https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-enhanced"],["href","https://www.w3.org/WAI/WCAG21/Understanding/use-of-color"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-helper"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"]],template:function(r,i){r&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),rN(3,"import { PoFieldModule } from '@po-ui/ng-components';"),og()(),Sl(4,"div",2)(5,"p"),rN(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),og(),Sl(7,"blockquote")(8,"p"),rN(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),Sl(10,"code"),rN(11,"FormsModule"),og(),rN(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Sl(13,"code"),rN(14,"ReactiveFormsModule"),og(),rN(15,", ambos nativos do Angular."),og()()(),Sl(16,"h3",3),rN(17,"Componente"),og(),Sl(18,"h4",4)(19,"code",5),rN(20,"PoTextareaComponent"),og()(),Sl(21,"div",2)(22,"p"),rN(23,`Este \xE9 um componente de entrada de dados que possibilita o preechimento com m\xFAltiplas linhas.
\xC9 recomendado para observa\xE7\xF5es, detalhamentos e outras situa\xE7\xF5es onde o usu\xE1rio deva preencher com um texto.`),og(),Sl(24,"p"),rN(25,"Importante:"),og(),Sl(26,"ul")(27,"li"),rN(28,"A propriedade "),Sl(29,"code"),rN(30,"name"),og(),rN(31," \xE9 obrigat\xF3ria para que o formul\xE1rio e o "),Sl(32,"code"),rN(33,"model"),og(),rN(34,` funcionem corretamente. Do contr\xE1rio, ocorrer\xE1 um erro de
`),Sl(35,"em"),rN(36,"Angular"),og(),rN(37,", onde ser\xE1 necess\xE1rio informar o atributo "),Sl(38,"code"),rN(39,"name"),og(),rN(40," ou o atributo "),Sl(41,"code"),rN(42,'[ngModelOptions]="{standalone: true}"'),og(),rN(43,", por exemplo:"),og()(),Sl(44,"pre")(45,"code"),rN(46,`<po-textarea
  [(ngModel)]="pessoa.nome"
  [ngModelOptions]="{standalone: true}">
</po-textarea>
`),og()(),Sl(47,"h4"),rN(48,"Acessibilidade tratada no componente"),og(),Sl(49,"p"),rN(50,"Algumas diretrizes de acessibilidade j\xE1 s\xE3o tratadas no componente, internamente, e n\xE3o podem ser alteradas. S\xE3o elas:"),og(),Sl(51,"ul")(52,"li"),rN(53,`O Text area foi desenvolvido com uso de controles padr\xF5es HTML, o que permite a identifica\xE7\xE3o do mesmo na interface por tecnologias
assistivas. `),Sl(54,"a",6),rN(55,"WCAG 4.1.2: Name, Role, Value"),og()(),Sl(56,"li"),rN(57,`O foco \xE9 vis\xEDvel e possui uma espessura superior a 2 pixels CSS, n\xE3o ficando escondido por outros
elementos da tela. `),Sl(58,"a",7),rN(59,"WCAG 2.4.12: Focus Appearance)"),og()(),Sl(60,"li"),rN(61,`A identifica\xE7\xE3o do erro acontece tamb\xE9m atrav\xE9s da mudan\xE7a de cor do campo, mas tamb\xE9m de um \xEDcone
junto da mensagem. `),Sl(62,"a",8),rN(63,"WGAG 1.4.1: Use of Color, 3.2.4: Consistent Identification"),og()()(),Sl(64,"h4"),rN(65,"Tokens customiz\xE1veis"),og(),Sl(66,"p"),rN(67,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),og(),Sl(68,"blockquote")(69,"p"),rN(70,"Para maiores informa\xE7\xF5es, acesse o guia "),Sl(71,"a",9),rN(72,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),rN(73,"."),og()(),Sl(74,"table")(75,"thead")(76,"tr")(77,"th"),rN(78,"Propriedade"),og(),Sl(79,"th"),rN(80,"Descri\xE7\xE3o"),og(),Sl(81,"th"),rN(82,"Valor Padr\xE3o"),og()()(),Sl(83,"tbody")(84,"tr")(85,"td")(86,"strong"),rN(87,"Default Values"),og()(),Wl(88,"td")(89,"td"),og(),Sl(90,"tr")(91,"td")(92,"code"),rN(93,"--font-family"),og()(),Sl(94,"td"),rN(95,"Fam\xEDlia tipogr\xE1fica usada"),og(),Sl(96,"td")(97,"code"),rN(98,"var(--font-family-theme)"),og()()(),Sl(99,"tr")(100,"td")(101,"code"),rN(102,"--font-size"),og()(),Sl(103,"td"),rN(104,"Tamanho da fonte"),og(),Sl(105,"td")(106,"code"),rN(107,"var(--font-size-default)"),og()()(),Sl(108,"tr")(109,"td")(110,"code"),rN(111,"--text-color-placeholder"),og()(),Sl(112,"td"),rN(113,"Cor do texto placeholder"),og(),Sl(114,"td")(115,"code"),rN(116,"var(--color-neutral-light-30)"),og()()(),Sl(117,"tr")(118,"td")(119,"code"),rN(120,"--color"),og()(),Sl(121,"td"),rN(122,"Cor pincipal do campo"),og(),Sl(123,"td")(124,"code"),rN(125,"var(--color-neutral-dark-70)"),og()()(),Sl(126,"tr")(127,"td")(128,"code"),rN(129,"--background"),og()(),Sl(130,"td"),rN(131,"Cor de background"),og(),Sl(132,"td")(133,"code"),rN(134,"var(--color-neutral-light-05)"),og()()(),Sl(135,"tr")(136,"td")(137,"code"),rN(138,"--field-container-title-justify"),og()(),Sl(139,"td"),rN(140,"Alinhamento horizontal do t\xEDtulo ("),Sl(141,"code"),rN(142,"justify-content"),og(),rN(143,")"),og(),Sl(144,"td")(145,"code"),rN(146,"space-between"),og()()(),Sl(147,"tr")(148,"td")(149,"code"),rN(150,"--field-container-title-flex"),og()(),Sl(151,"td"),rN(152,"Flex do t\xEDtulo ("),Sl(153,"code"),rN(154,"flex"),og(),rN(155,")"),og(),Sl(156,"td")(157,"code"),rN(158,"1 auto"),og()()()()()(),Sl(159,"div",10)(160,"h4",11),rN(161,"Seletor"),og(),Sl(162,"pre",12),rN(163,`<po-textarea
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
`),og()(),Sl(164,"h4",13),rN(165,"Propriedades"),og(),Sl(166,"table",14)(167,"tr",15)(168,"th",16),rN(169,"Nome"),og(),Sl(170,"th",16),rN(171,"Tipo"),og(),Sl(172,"th",16),rN(173,"Padr\xE3o"),og(),Sl(174,"th",16),rN(175,"Descri\xE7\xE3o"),og()(),Sl(176,"tr",17)(177,"td",18)(178,"div",19)(179,"span",20),rN(180," (p-additional-help)"),Wl(181,"br"),og()(),Sl(182,"div",21),rN(183,"Deprecated"),og()(),Sl(184,"td",22)(185,"code",23),rN(186,"EventEmitter"),og()(),Sl(187,"td",24),rN(188,"-"),og(),Sl(189,"td",25)(190,"em")(191,"strong"),rN(192,"(opcional)"),og()(),Sl(193,"p"),rN(194,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),og(),Sl(195,"blockquote")(196,"p"),rN(197,"Essa propriedade est\xE1 "),Sl(198,"strong"),rN(199,"depreciada"),og(),rN(200," e ser\xE1 removida na vers\xE3o "),Sl(201,"code"),rN(202,"23.x.x"),og(),rN(203,". Recomendamos utilizar a propriedade "),Sl(204,"code"),rN(205,"p-helper"),og(),rN(206," que oferece mais recursos e flexibilidade."),og()()()(),Sl(207,"tr",17)(208,"td",18)(209,"div",26)(210,"span",27),rN(211," p-additional-help-tooltip"),Wl(212,"br"),og()(),Sl(213,"div",21),rN(214,"Deprecated"),og()(),Sl(215,"td",22)(216,"code",28),rN(217,"string"),og()(),Sl(218,"td",24),rN(219,"-"),og(),Sl(220,"td",25)(221,"em")(222,"strong"),rN(223,"(opcional)"),og()(),Sl(224,"p"),rN(225,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),Sl(226,"code"),rN(227,"po-helper"),og(),rN(228,`.
`),Sl(229,"strong"),rN(230,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),og()(),Sl(231,"blockquote")(232,"p"),rN(233,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),og()(),Sl(234,"blockquote")(235,"p"),rN(236,"Essa propriedade est\xE1 "),Sl(237,"strong"),rN(238,"depreciada"),og(),rN(239," e ser\xE1 removida na vers\xE3o "),Sl(240,"code"),rN(241,"23.x.x"),og(),rN(242,". Recomendamos utilizar a propriedade "),Sl(243,"code"),rN(244,"p-helper"),og(),rN(245," que oferece mais recursos e flexibilidade."),og()()()(),Sl(246,"tr",17)(247,"td",18)(248,"div",26)(249,"span",27),rN(250," p-append-in-body"),Wl(251,"br"),og()()(),Sl(252,"td",22)(253,"code",29),rN(254,"boolean"),og()(),Sl(255,"td",24)(256,"p")(257,"code"),rN(258,"false"),og()()(),Sl(259,"td",25)(260,"em")(261,"strong"),rN(262,"(opcional)"),og()(),Sl(263,"p"),rN(264,"Define que o popover ("),Sl(265,"code"),rN(266,"p-helper"),og(),rN(267," e/ou "),Sl(268,"code"),rN(269,"p-error-limit"),og(),rN(270,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),og(),Sl(271,"blockquote")(272,"p"),rN(273,"Quando utilizado com "),Sl(274,"code"),rN(275,"p-helper"),og(),rN(276,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),og()()()(),Sl(277,"tr",17)(278,"td",18)(279,"div",26)(280,"span",27),rN(281," p-auto-focus"),Wl(282,"br"),og()()(),Sl(283,"td",22)(284,"code",29),rN(285,"boolean"),og()(),Sl(286,"td",24)(287,"p")(288,"code"),rN(289,"false"),og()()(),Sl(290,"td",25)(291,"em")(292,"strong"),rN(293,"(opcional)"),og()(),Sl(294,"p"),rN(295,"Aplica foco no elemento ao ser iniciado."),og(),Sl(296,"blockquote")(297,"p"),rN(298,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),og()()()(),Sl(299,"tr",17)(300,"td",18)(301,"div",19)(302,"span",20),rN(303," (p-blur)"),Wl(304,"br"),og()()(),Sl(305,"td",22)(306,"code",23),rN(307,"EventEmitter"),og()(),Sl(308,"td",24),rN(309,"-"),og(),Sl(310,"td",25)(311,"em")(312,"strong"),rN(313,"(opcional)"),og()(),Sl(314,"p"),rN(315,"Evento disparado ao sair do campo."),og()()(),Sl(316,"tr",17)(317,"td",18)(318,"div",19)(319,"span",20),rN(320," (p-change)"),Wl(321,"br"),og()()(),Sl(322,"td",22)(323,"code",23),rN(324,"EventEmitter"),og()(),Sl(325,"td",24),rN(326,"-"),og(),Sl(327,"td",25)(328,"em")(329,"strong"),rN(330,"(opcional)"),og()(),Sl(331,"p"),rN(332,"Evento disparado ao alterar valor e deixar o campo."),og()()(),Sl(333,"tr",17)(334,"td",18)(335,"div",19)(336,"span",20),rN(337," (p-change-model)"),Wl(338,"br"),og()()(),Sl(339,"td",22)(340,"code",23),rN(341,"EventEmitter"),og()(),Sl(342,"td",24),rN(343,"-"),og(),Sl(344,"td",25)(345,"em")(346,"strong"),rN(347,"(opcional)"),og()(),Sl(348,"p"),rN(349,"Evento disparado ao alterar valor do model."),og()()(),Sl(350,"tr",17)(351,"td",18)(352,"div",26)(353,"span",27),rN(354," p-compact-label"),Wl(355,"br"),og()()(),Sl(356,"td",22)(357,"code",29),rN(358,"boolean"),og()(),Sl(359,"td",24)(360,"p")(361,"code"),rN(362,"false"),og()()(),Sl(363,"td",25)(364,"em")(365,"strong"),rN(366,"(opcional)"),og()(),Sl(367,"p"),rN(368,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),og(),Sl(369,"p"),rN(370,"Quando habilitado ("),Sl(371,"code"),rN(372,"true"),og(),rN(373,"), o modo compacto afeta o conjunto composto por:"),og(),Sl(374,"ul")(375,"li")(376,"code"),rN(377,"po-label"),og()(),Sl(378,"li")(379,"code"),rN(380,"p-requirement (showRequired)"),og()(),Sl(381,"li")(382,"code"),rN(383,"po-helper"),og()()(),Sl(384,"p"),rN(385,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),og(),Sl(386,"p"),rN(387,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),og(),Sl(388,"ul")(389,"li")(390,"code"),rN(391,"--field-container-title-justify"),og()(),Sl(392,"li")(393,"code"),rN(394,"--field-container-title-flex"),og()()(),Sl(395,"p"),rN(396,"Exemplo:"),og(),Sl(397,"pre")(398,"code"),rN(399,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),og()(),Sl(400,"p"),rN(401,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),og()()(),Sl(402,"tr",17)(403,"td",18)(404,"div",26)(405,"span",27),rN(406," p-disabled"),Wl(407,"br"),og()()(),Sl(408,"td",22)(409,"code",29),rN(410,"boolean"),og()(),Sl(411,"td",24)(412,"p")(413,"code"),rN(414,"false"),og()()(),Sl(415,"td",25)(416,"em")(417,"strong"),rN(418,"(opcional)"),og()(),Sl(419,"p"),rN(420,"Indica que o campo ser\xE1 desabilitado."),og()()(),Sl(421,"tr",17)(422,"td",18)(423,"div",19)(424,"span",20),rN(425," (p-enter)"),Wl(426,"br"),og()()(),Sl(427,"td",22)(428,"code",23),rN(429,"EventEmitter"),og()(),Sl(430,"td",24),rN(431,"-"),og(),Sl(432,"td",25)(433,"em")(434,"strong"),rN(435,"(opcional)"),og()(),Sl(436,"p"),rN(437,"Evento disparado ao entrar do campo."),og()()(),Sl(438,"tr",17)(439,"td",18)(440,"div",26)(441,"span",27),rN(442," p-error-limit"),Wl(443,"br"),og()()(),Sl(444,"td",22)(445,"code",29),rN(446,"boolean"),og()(),Sl(447,"td",24)(448,"p")(449,"code"),rN(450,"false"),og()()(),Sl(451,"td",25)(452,"em")(453,"strong"),rN(454,"(opcional)"),og()(),Sl(455,"p"),rN(456,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),og(),Sl(457,"blockquote")(458,"p"),rN(459,"Caso essa propriedade seja definida como "),Sl(460,"code"),rN(461,"true"),og(),rN(462,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),og()()()(),Sl(463,"tr",17)(464,"td",18)(465,"div",26)(466,"span",27),rN(467," p-field-error-message"),Wl(468,"br"),og()()(),Sl(469,"td",22)(470,"code",28),rN(471,"string"),og()(),Sl(472,"td",24),rN(473,"-"),og(),Sl(474,"td",25)(475,"em")(476,"strong"),rN(477,"(opcional)"),og()(),Sl(478,"p"),rN(479,"Exibe a mensagem setada se o campo estiver vazio e for requerido."),og(),Sl(480,"blockquote")(481,"p"),rN(482,"Necess\xE1rio que a propriedade "),Sl(483,"code"),rN(484,"p-required"),og(),rN(485," esteja habilitada."),og()()()(),Sl(486,"tr",17)(487,"td",18)(488,"div",26)(489,"span",27),rN(490," p-help"),Wl(491,"br"),og()()(),Sl(492,"td",22)(493,"code",28),rN(494,"string"),og()(),Sl(495,"td",24),rN(496,"-"),og(),Sl(497,"td",25)(498,"em")(499,"strong"),rN(500,"(opcional)"),og()(),Sl(501,"p"),rN(502,"Texto de apoio do campo."),og()()(),Sl(503,"tr",17)(504,"td",18)(505,"div",19)(506,"span",20),rN(507," (p-keydown)"),Wl(508,"br"),og()()(),Sl(509,"td",22)(510,"code",23),rN(511,"EventEmitter"),og()(),Sl(512,"td",24),rN(513,"-"),og(),Sl(514,"td",25)(515,"em")(516,"strong"),rN(517,"(opcional)"),og()(),Sl(518,"p"),rN(519,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Sl(520,"code"),rN(521,"KeyboardEvent"),og(),rN(522," com informa\xE7\xF5es sobre a tecla."),og()()(),Sl(523,"tr",17)(524,"td",18)(525,"div",26)(526,"span",27),rN(527," p-label"),Wl(528,"br"),og()()(),Sl(529,"td",22)(530,"code",28),rN(531,"string"),og()(),Sl(532,"td",24),rN(533,"-"),og(),Sl(534,"td",25)(535,"em")(536,"strong"),rN(537,"(opcional)"),og()(),Sl(538,"p"),rN(539,"Label do campo."),og()()(),Sl(540,"tr",17)(541,"td",18)(542,"div",26)(543,"span",27),rN(544," p-label-text-wrap"),Wl(545,"br"),og()()(),Sl(546,"td",22)(547,"code",29),rN(548,"boolean"),og()(),Sl(549,"td",24)(550,"p")(551,"code"),rN(552,"false"),og()()(),Sl(553,"td",25)(554,"em")(555,"strong"),rN(556,"(opcional)"),og()(),Sl(557,"p"),rN(558,"Habilita a quebra autom\xE1tica do texto da propriedade "),Sl(559,"code"),rN(560,"p-label"),og(),rN(561,". Quando "),Sl(562,"code"),rN(563,"p-label-text-wrap"),og(),rN(564,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),og()()(),Sl(565,"tr",17)(566,"td",18)(567,"div",26)(568,"span",27),rN(569," p-loading"),Wl(570,"br"),og()()(),Sl(571,"td",22)(572,"code",29),rN(573,"boolean"),og()(),Sl(574,"td",24)(575,"p")(576,"code"),rN(577,"false"),og()()(),Sl(578,"td",25)(579,"em")(580,"strong"),rN(581,"(opcional)"),og()(),Sl(582,"p"),rN(583,"Exibe um \xEDcone de carregamento no lado direito do campo para sinalizar que uma opera\xE7\xE3o est\xE1 em andamento."),og()()(),Sl(584,"tr",17)(585,"td",18)(586,"div",26)(587,"span",27),rN(588," p-maxlength"),Wl(589,"br"),og()()(),Sl(590,"td",22)(591,"code",30),rN(592,"number"),og()(),Sl(593,"td",24),rN(594,"-"),og(),Sl(595,"td",25)(596,"em")(597,"strong"),rN(598,"(opcional)"),og()(),Sl(599,"p"),rN(600,"Indica a quantidade m\xE1xima de caracteres que o campo aceita."),og()()(),Sl(601,"tr",17)(602,"td",18)(603,"div",26)(604,"span",27),rN(605," p-minlength"),Wl(606,"br"),og()()(),Sl(607,"td",22)(608,"code",30),rN(609,"number"),og()(),Sl(610,"td",24),rN(611,"-"),og(),Sl(612,"td",25)(613,"em")(614,"strong"),rN(615,"(opcional)"),og()(),Sl(616,"p"),rN(617,"Indica a quantidade m\xEDnima de caracteres que o campo aceita."),og()()(),Sl(618,"tr",17)(619,"td",18)(620,"div",26)(621,"span",27),rN(622," name"),Wl(623,"br"),og()()(),Sl(624,"td",22)(625,"code",28),rN(626,"string"),og()(),Sl(627,"td",24),rN(628,"-"),og(),Sl(629,"td",25)(630,"p"),rN(631,"Nome e Id do componente."),og()()(),Sl(632,"tr",17)(633,"td",18)(634,"div",26)(635,"span",27),rN(636," p-optional"),Wl(637,"br"),og()()(),Sl(638,"td",22)(639,"code",29),rN(640,"boolean"),og()(),Sl(641,"td",24)(642,"p")(643,"code"),rN(644,"false"),og()()(),Sl(645,"td",25)(646,"em")(647,"strong"),rN(648,"(opcional)"),og()(),Sl(649,"p"),rN(650,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),og(),Sl(651,"blockquote")(652,"p"),rN(653,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),og()(),Sl(654,"ul")(655,"li"),rN(656,"O campo conter "),Sl(657,"code"),rN(658,"p-required"),og(),rN(659,";"),og(),Sl(660,"li"),rN(661,"N\xE3o possuir "),Sl(662,"code"),rN(663,"p-help"),og(),rN(664," e/ou "),Sl(665,"code"),rN(666,"p-label"),og(),rN(667,"."),og()()()(),Sl(668,"tr",17)(669,"td",18)(670,"div",26)(671,"span",27),rN(672," p-placeholder"),Wl(673,"br"),og()()(),Sl(674,"td",22)(675,"code",28),rN(676,"string"),og()(),Sl(677,"td",24),rN(678,"-"),og(),Sl(679,"td",25)(680,"p"),rN(681,"Placeholder, mensagem que aparecer\xE1 enquanto o campo n\xE3o estiver preenchido."),og()()(),Sl(682,"tr",17)(683,"td",18)(684,"div",26)(685,"span",27),rN(686," p-helper"),Wl(687,"br"),og()()(),Sl(688,"td",22)(689,"code",31),rN(690,"PoHelperOptions "),og(),Sl(691,"code",28),rN(692," string"),og()(),Sl(693,"td",24),rN(694,"-"),og(),Sl(695,"td",25)(696,"em")(697,"strong"),rN(698,"(opcional)"),og()(),Sl(699,"p"),rN(700,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label quando a propriedade "),Sl(701,"code"),rN(702,"p-label"),og(),rN(703," for definida, ou, ao lado do componente na aus\xEAncia da propriedade "),Sl(704,"code"),rN(705,"p-label"),og(),rN(706,"."),og(),Sl(707,"blockquote")(708,"p"),rN(709,"Para mais informa\xE7\xF5es acesse: "),Sl(710,"a",32),rN(711,"https://po-ui.io/documentation/po-helper"),og(),rN(712,"."),og()(),Sl(713,"blockquote")(714,"p"),rN(715,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),Sl(716,"code"),rN(717,"p-additional-help-tooltip"),og(),rN(718," e "),Sl(719,"code"),rN(720,"p-additional-help"),og(),rN(721,") ser\xE1 ignorado."),og()()()(),Sl(722,"tr",17)(723,"td",18)(724,"div",26)(725,"span",27),rN(726," p-readonly"),Wl(727,"br"),og()()(),Sl(728,"td",22)(729,"code",29),rN(730,"boolean"),og()(),Sl(731,"td",24)(732,"p")(733,"code"),rN(734,"false"),og()()(),Sl(735,"td",25)(736,"em")(737,"strong"),rN(738,"(opcional)"),og()(),Sl(739,"p"),rN(740,"Indica que o campo ser\xE1 somente leitura."),og()()(),Sl(741,"tr",17)(742,"td",18)(743,"div",26)(744,"span",27),rN(745," p-required"),Wl(746,"br"),og()()(),Sl(747,"td",22)(748,"code",29),rN(749,"boolean"),og()(),Sl(750,"td",24)(751,"p")(752,"code"),rN(753,"false"),og()()(),Sl(754,"td",25)(755,"em")(756,"strong"),rN(757,"(opcional)"),og()(),Sl(758,"p"),rN(759,"Define que o campo ser\xE1 obrigat\xF3rio."),og(),Sl(760,"blockquote")(761,"p"),rN(762,"Esta propriedade \xE9 desconsiderada quando o input est\xE1 desabilitado "),Sl(763,"code"),rN(764,"(p-disabled)"),og(),rN(765,"."),og()()()(),Sl(766,"tr",17)(767,"td",18)(768,"div",26)(769,"span",27),rN(770," p-rows"),Wl(771,"br"),og()()(),Sl(772,"td",22)(773,"code",30),rN(774,"number"),og()(),Sl(775,"td",24)(776,"p")(777,"code"),rN(778,"3"),og()()(),Sl(779,"td",25)(780,"em")(781,"strong"),rN(782,"(opcional)"),og()(),Sl(783,"p"),rN(784,"Indica a quantidade de linhas que ser\xE3o exibidas."),og()()(),Sl(785,"tr",17)(786,"td",18)(787,"div",26)(788,"span",27),rN(789," p-show-required"),Wl(790,"br"),og()()(),Sl(791,"td",22)(792,"code",29),rN(793,"boolean"),og()(),Sl(794,"td",24),rN(795,"-"),og(),Sl(796,"td",25)(797,"p"),rN(798,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),og(),Sl(799,"blockquote")(800,"p"),rN(801,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),og()(),Sl(802,"ul")(803,"li"),rN(804,"N\xE3o possuir "),Sl(805,"code"),rN(806,"p-help"),og(),rN(807," e/ou "),Sl(808,"code"),rN(809,"p-label"),og(),rN(810,"."),og()()()(),Sl(811,"tr",17)(812,"td",18)(813,"div",26)(814,"span",27),rN(815," p-size"),Wl(816,"br"),og()()(),Sl(817,"td",22)(818,"code",28),rN(819,"string"),og()(),Sl(820,"td",24)(821,"p")(822,"code"),rN(823,"medium"),og()()(),Sl(824,"td",25)(825,"em")(826,"strong"),rN(827,"(opcional)"),og()(),Sl(828,"p"),rN(829,"Define o tamanho do componente:"),og(),Sl(830,"ul")(831,"li")(832,"code"),rN(833,"small"),og(),rN(834," (dispon\xEDvel apenas para acessibilidade AA)"),og(),Sl(835,"li")(836,"code"),rN(837,"medium"),og()()(),Sl(838,"blockquote")(839,"p"),rN(840,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Sl(841,"code"),rN(842,"medium"),og(),rN(843,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Sl(844,"a",33),rN(845,"po-theme"),og(),rN(846,"."),og()()()()(),Sl(847,"h3",13),rN(848,"M\xE9todos"),og(),Sl(849,"table",34)(850,"tr",17)(851,"th",35)(852,"div",26)(853,"h4")(854,"span",27),rN(855," focus "),og()()()()(),Sl(856,"tr",25)(857,"td",25)(858,"p"),rN(859,"Fun\xE7\xE3o que atribui foco ao componente."),og(),Sl(860,"p"),rN(861,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),og(),Sl(862,"pre")(863,"code"),rN(864,`import { PoTextareaComponent } from '@po-ui/ng-components';

...

@ViewChild(PoTextareaComponent, { static: true }) textarea: PoTextareaComponent;

focusTextarea() {
  this.textarea.focus();
}
`),og()()()()(),Wl(865,"br"),Sl(866,"table",34)(867,"tr",17)(868,"th",35)(869,"div",26)(870,"h4")(871,"span",27),rN(872," showAdditionalHelp "),og()()()()(),Sl(873,"tr",25)(874,"td",25)(875,"p"),rN(876,"M\xE9todo que exibe "),Sl(877,"code"),rN(878,"p-helper"),og(),rN(879," ou executa a a\xE7\xE3o definida em "),Sl(880,"code"),rN(881,"p-helper{eventOnClick}"),og(),rN(882," ou em "),Sl(883,"code"),rN(884,"p-additionalHelp"),og(),rN(885,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Sl(886,"code"),rN(887,"p-keydown"),og(),rN(888,"."),og(),Sl(889,"blockquote")(890,"p"),rN(891,"Exibe ou oculta o conte\xFAdo do componente "),Sl(892,"code"),rN(893,"po-helper"),og(),rN(894," quando o componente estiver com foco."),og()(),Sl(895,"pre")(896,"code"),rN(897,`//Exemplo com p-label e p-helper
<po-textarea
 #textarea
 ...
 p-label="Label do textarea"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, textarea)"
></po-textarea>
`),og()(),Sl(898,"pre")(899,"code"),rN(900,`...
onKeyDown(event: KeyboardEvent, inp: PoTextareaComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),og()()()()(),Wl(901,"br"),og());},dependencies:[Ka],encapsulation:2,changeDetection:1})}return a})();var ye=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,r){this.route=m,this.router=r;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let r=m.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:"merge"}),this.activeTab=m;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(r){return new(r||a)(w(Xn),w(En))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:9,vars:4,consts:[["p-title","Textarea",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,i){r&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return i.changeTab("doc")}),Wl(3,"sample-po-textarea-doc"),og(),Sl(4,"po-tab",3),ft("p-click",function(){return i.changeTab("web")}),Wl(5,"sample-po-textarea-basic-view")(6,"sample-po-textarea-labs-view")(7,"sample-po-textarea-email-view")(8,"sample-po-textarea-email-reactive-form-view"),og()()()),r&2&&(rw("p-actions",i.actions),Lp(2),rw("p-active",i.activeTab==="doc"),Lp(2),rw("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[sNe,Ume,$me,ge,he,fe,ve,Te],encapsulation:2,changeDetection:1})}return a})();var Re=[{path:"",component:ye}],we=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue({imports:[mL.forChild(Re),mL]})}return a})();var yt=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue({imports:[sr,we]})}return a})();export{yt as DocPoTextareaModule};