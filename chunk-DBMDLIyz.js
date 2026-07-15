import {f as fe$1,u as ue$1,s as sr,m as mL,w,c3 as Xn,E as En,U as Un,c as f,cM as tY,cN as lm,c8 as Tde,F as Wl,O as rw,bM as mN,a7 as pN,an as SO,aH as Ka,b8 as Ume,b9 as $me,C as Sl,y as rN,J as og,a1 as ft,L as Lp,ar as Gx,au as dg,bs as gN,aX as Q9,aF as Z9,aY as K9,aG as wk,aZ as _k,b0 as Qt,b1 as mv,c4 as b3,b4 as L3,bH as k3,c9 as jhe,aB as Ix,aM as Cw,aN as n0,bd as kx,aO as ww,aP as i0,aJ as Whe,cQ as xk,cR as Rk,a3 as sNe,aD as Ky,aT as oN,aE as Xy}from'./main-TVDUJ47Y.js';var Ce=()=>({label:"Option 1",value:"1"}),we=()=>({label:"Option 2",value:"2"}),ye=(i,ve)=>[i,ve],de=(()=>{class i{static \u0275fac=function(r){return new(r||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-radio-group-basic"]],standalone:false,decls:1,vars:6,consts:[["name","radioGroupBasic","p-label","PO Radio Group",3,"p-options"]],template:function(r,n){r&1&&Wl(0,"po-radio-group",0),r&2&&rw("p-options",mN(3,ye,pN(1,Ce),pN(2,we)));},dependencies:[Tde],encapsulation:2,changeDetection:1})}return i})();var Te=i=>({"docs-sample-code-tabs":i}),me=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-radio-group-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),rN(3,"PO Radio Group Basic"),og(),Sl(4,"a",2),ft("click",function(){return n.toggleSampleCodeTabs()}),Wl(5,"span"),rN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),rN(12,"sample-po-radio-group-basic/sample-po-radio-group-basic.component.html"),og(),Sl(13,"pre",7),rN(14,`<po-radio-group
  name="radioGroupBasic"
  p-label="PO Radio Group"
  [p-options]="[
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' }
  ]"
>
</po-radio-group>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),rN(18,"sample-po-radio-group-basic/sample-po-radio-group-basic.component.ts"),og(),Sl(19,"pre",9),rN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-radio-group-basic',
  templateUrl: './sample-po-radio-group-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoRadioGroupBasicComponent {}
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-radio-group-basic"),og(),Wl(23,"hr")),r&2&&(Lp(5),Gx("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),rw("ngClass",gN(4,Te,n.hideSampleCodeTabs)));},dependencies:[SO,Ka,Ume,$me,de],encapsulation:2,changeDetection:1})}return i})();var ue=(()=>{class i{helperText;columns;event;help;label;option;options;properties;radioGroup;fieldErrorMessage;size;columnOptions=[{label:"1 column",value:1},{label:"2 columns",value:2},{label:"3 columns",value:3},{label:"4 columns",value:4}];propertiesOptions=[{value:"disabled",label:"Disabled"},{value:"optional",label:"Optional"},{value:"required",label:"Required"},{value:"showRequired",label:"Show Required"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"},{value:"compactLabel",label:"Compact Label"}];sizesOptions=[{label:"Small",value:"small"},{label:"Medium",value:"medium"},{label:"Large",value:"large"}];ngOnInit(){this.restore();}addOption(){this.options.push(this.option),this.option=this.getNewOption();}changeEvent(d){this.event=d;}restore(){this.helperText="",this.event="",this.radioGroup=void 0,this.properties=[],this.fieldErrorMessage="",this.size="medium",this.option=this.getNewOption(),this.options=[];}getNewOption(){return {label:void 0,value:void 0}}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-radio-group-labs"]],standalone:false,decls:26,vars:31,consts:[["optionForm","ngForm"],["propertiesForm","ngForm"],["name","radioGroupLabs",3,"ngModelChange","p-change","p-keydown","ngModel","p-helper","p-columns","p-disabled","p-help","p-label","p-optional","p-options","p-required","p-field-error-message","p-show-required","p-size","p-error-limit","p-label-text-wrap","p-compact-label"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","optionLabel","p-label","Option Label","p-required","",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel"],["name","optionValue","p-label","Option Value","p-required","",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel"],["name","optionDisabled","p-label","Option Disabled",1,"po-lg-4",3,"ngModelChange","ngModel"],["p-label","Add Option",1,"po-md-6","po-lg-3",3,"p-click","p-disabled"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","fieldErrorMessage","p-clean","","p-label","Field Error Message",1,"po-md-6",3,"ngModelChange","ngModel"],["name","columns","p-columns","4","p-label","Columns",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"click"]],template:function(r,n){if(r&1){let m=Ix();Sl(0,"po-radio-group",2),Cw("ngModelChange",function(l){return Ky(m),oN(n.radioGroup,l)||(n.radioGroup=l),Xy(l)}),ft("p-change",function(){return n.changeEvent("p-change")})("p-keydown",function(){return n.changeEvent("p-keydown")}),og(),n0(),Wl(1,"po-divider"),Sl(2,"div",3),Wl(3,"po-info",4)(4,"po-info",5),og(),Wl(5,"po-divider"),Sl(6,"form",null,0)(8,"div",3)(9,"po-input",6),Cw("ngModelChange",function(l){return Ky(m),oN(n.option.label,l)||(n.option.label=l),Xy(l)}),og(),n0(),Sl(10,"po-input",7),Cw("ngModelChange",function(l){return Ky(m),oN(n.option.value,l)||(n.option.value=l),Xy(l)}),og(),n0(),Sl(11,"po-switch",8),Cw("ngModelChange",function(l){return Ky(m),oN(n.option.disabled,l)||(n.option.disabled=l),Xy(l)}),og(),n0(),og(),Sl(12,"div",3)(13,"po-button",9),ft("p-click",function(){Ky(m);let l=kx(7);return n.addOption(),Xy(l.reset())}),og()()(),Wl(14,"po-divider"),Sl(15,"form",null,1)(17,"po-input",10),Cw("ngModelChange",function(l){return Ky(m),oN(n.label,l)||(n.label=l),Xy(l)}),og(),n0(),Sl(18,"po-input",11),Cw("ngModelChange",function(l){return Ky(m),oN(n.help,l)||(n.help=l),Xy(l)}),og(),n0(),Sl(19,"po-input",12),Cw("ngModelChange",function(l){return Ky(m),oN(n.helperText,l)||(n.helperText=l),Xy(l)}),og(),n0(),Sl(20,"po-input",13),Cw("ngModelChange",function(l){return Ky(m),oN(n.fieldErrorMessage,l)||(n.fieldErrorMessage=l),Xy(l)}),og(),n0(),Sl(21,"po-radio-group",14),Cw("ngModelChange",function(l){return Ky(m),oN(n.columns,l)||(n.columns=l),Xy(l)}),og(),n0(),Sl(22,"po-checkbox-group",15),Cw("ngModelChange",function(l){return Ky(m),oN(n.properties,l)||(n.properties=l),Xy(l)}),og(),n0(),Sl(23,"po-radio-group",16),Cw("ngModelChange",function(l){return Ky(m),oN(n.size,l)||(n.size=l),Xy(l)}),og(),n0(),Sl(24,"div",3)(25,"po-button",17),ft("click",function(){return Ky(m),kx(16).reset(),Xy(n.restore())}),og()()();}if(r&2){let m=kx(7);ww("ngModel",n.radioGroup),rw("p-helper",n.helperText)("p-columns",n.columns)("p-disabled",n.properties.includes("disabled"))("p-help",n.help)("p-label",n.label)("p-optional",n.properties.includes("optional"))("p-options",n.options)("p-required",n.properties.includes("required"))("p-field-error-message",n.fieldErrorMessage)("p-show-required",n.properties.includes("showRequired"))("p-size",n.size)("p-error-limit",n.properties==null?null:n.properties.includes("errorLimit"))("p-label-text-wrap",n.properties==null?null:n.properties.includes("labelTextWrap"))("p-compact-label",n.properties==null?null:n.properties.includes("compactLabel")),i0(),Lp(3),rw("p-value",n.radioGroup),Lp(),rw("p-value",n.event),Lp(5),ww("ngModel",n.option.label),i0(),Lp(),ww("ngModel",n.option.value),i0(),Lp(),ww("ngModel",n.option.disabled),i0(),Lp(2),rw("p-disabled",m.invalid),Lp(4),ww("ngModel",n.label),i0(),Lp(),ww("ngModel",n.help),i0(),Lp(),ww("ngModel",n.helperText),i0(),Lp(),ww("ngModel",n.fieldErrorMessage),i0(),Lp(),ww("ngModel",n.columns),rw("p-options",n.columnOptions),i0(),Lp(),ww("ngModel",n.properties),rw("p-options",n.propertiesOptions),i0(),Lp(),ww("ngModel",n.size),rw("p-options",n.sizesOptions),i0();}},dependencies:[Q9,Z9,K9,wk,_k,Qt,mv,b3,L3,Tde,k3,jhe],encapsulation:2,changeDetection:1})}return i})();var Re=i=>({"docs-sample-code-tabs":i}),ce=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-radio-group-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),rN(3,"PO Radio Group Labs"),og(),Sl(4,"a",2),ft("click",function(){return n.toggleSampleCodeTabs()}),Wl(5,"span"),rN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),rN(12,"sample-po-radio-group-labs/sample-po-radio-group-labs.component.html"),og(),Sl(13,"pre",7),rN(14,`<po-radio-group
  name="radioGroupLabs"
  [(ngModel)]="radioGroup"
  [p-helper]="helperText"
  [p-columns]="columns"
  [p-disabled]="properties.includes('disabled')"
  [p-help]="help"
  [p-label]="label"
  [p-optional]="properties.includes('optional')"
  [p-options]="options"
  [p-required]="properties.includes('required')"
  [p-field-error-message]="fieldErrorMessage"
  [p-show-required]="properties.includes('showRequired')"
  [p-size]="size"
  (p-change)="changeEvent('p-change')"
  (p-keydown)="changeEvent('p-keydown')"
  [p-error-limit]="$safeNavigationMigration(properties?.includes('errorLimit'))"
  [p-label-text-wrap]="$safeNavigationMigration(properties?.includes('labelTextWrap'))"
  [p-compact-label]="$safeNavigationMigration(properties?.includes('compactLabel'))"
>
</po-radio-group>

<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="radioGroup"> </po-info>

  <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
</div>

<po-divider />

<form #optionForm="ngForm">
  <div class="po-row">
    <po-input class="po-md-6 po-lg-4" name="optionLabel" [(ngModel)]="option.label" p-label="Option Label" p-required>
    </po-input>

    <po-input class="po-md-6 po-lg-4" name="optionValue" [(ngModel)]="option.value" p-label="Option Value" p-required>
    </po-input>

    <po-switch class="po-lg-4" name="optionDisabled" [(ngModel)]="option.disabled" p-label="Option Disabled">
    </po-switch>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-6 po-lg-3"
      p-label="Add Option"
      [p-disabled]="optionForm.invalid"
      (p-click)="addOption(); optionForm.reset()"
    >
    </po-button>
  </div>
</form>

<po-divider />

<form #propertiesForm="ngForm">
  <po-input class="po-md-6" name="label" [(ngModel)]="label" p-clean p-label="Label"> </po-input>

  <po-input class="po-md-6" name="help" [(ngModel)]="help" p-clean p-label="Help"> </po-input>

  <po-input class="po-md-6" name="helperText" [(ngModel)]="helperText" p-clean p-label="Additional Help"> </po-input>

  <po-input
    class="po-md-6"
    name="fieldErrorMessage"
    [(ngModel)]="fieldErrorMessage"
    p-clean
    p-label="Field Error Message"
  >
  </po-input>

  <po-radio-group
    class="po-md-12"
    name="columns"
    [(ngModel)]="columns"
    p-columns="4"
    p-label="Columns"
    [p-options]="columnOptions"
  >
  </po-radio-group>

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
    [p-options]="sizesOptions"
  >
  </po-radio-group>

  <div class="po-row">
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (click)="propertiesForm.reset(); restore()">
    </po-button>
  </div>
</form>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),rN(18,"sample-po-radio-group-labs/sample-po-radio-group-labs.component.ts"),og(),Sl(19,"pre",9),rN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { PoCheckboxGroupOption, PoRadioGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-radio-group-labs',
  templateUrl: './sample-po-radio-group-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoRadioGroupLabsComponent implements OnInit {
  helperText: string;
  columns: number;
  event: string;
  help: string;
  label: string;
  option: PoRadioGroupOption;
  options: Array<PoRadioGroupOption>;
  properties: Array<string>;
  radioGroup: string;
  fieldErrorMessage: string;
  size: string;

  readonly columnOptions: Array<PoRadioGroupOption> = [
    { label: '1 column', value: 1 },
    { label: '2 columns', value: 2 },
    { label: '3 columns', value: 3 },
    { label: '4 columns', value: 4 }
  ];

  readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'disabled', label: 'Disabled' },
    { value: 'optional', label: 'Optional' },
    { value: 'required', label: 'Required' },
    { value: 'showRequired', label: 'Show Required' },
    { value: 'errorLimit', label: 'Limit Error Message' },
    { value: 'labelTextWrap', label: 'Label Text Wrap' },
    { value: 'compactLabel', label: 'Compact Label' }
  ];

  readonly sizesOptions: Array<PoRadioGroupOption> = [
    { label: 'Small', value: 'small' },
    { label: 'Medium', value: 'medium' },
    { label: 'Large', value: 'large' }
  ];

  ngOnInit() {
    this.restore();
  }

  addOption() {
    this.options.push(this.option);
    this.option = this.getNewOption();
  }

  changeEvent(event: string) {
    this.event = event;
  }

  restore() {
    this.helperText = '';
    this.event = '';
    this.radioGroup = undefined;
    this.properties = [];
    this.fieldErrorMessage = '';
    this.size = 'medium';
    this.option = this.getNewOption();
    this.options = [];
  }

  private getNewOption(): PoRadioGroupOption {
    return {
      label: undefined,
      value: undefined
    };
  }
}
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-radio-group-labs"),og(),Wl(23,"hr")),r&2&&(Lp(5),Gx("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),rw("ngClass",gN(4,Re,n.hideSampleCodeTabs)));},dependencies:[SO,Ka,Ume,$me,ue],encapsulation:2,changeDetection:1})}return i})();var ge=(()=>{class i{language="es";original="";translated="";languageOptions=[{label:"Spanish",value:"es"},{label:"English",value:"en"}];optionsList=[{value:"1",label:"Ol\xE1"},{value:"2",label:"Tchau"},{value:"3",label:"Estrangeiro"},{value:"4",label:"Alinhamento"},{value:"5",label:"Vis\xE3o"},{value:"6",label:"Livro"}];wordsOptions=[{id:"1",en:"Hello",es:"Hola"},{id:"2",en:"Bye",es:"Hasta luego"},{id:"3",en:"Foreign",es:"Extranjero"},{id:"4",en:"Alignment",es:"Alineaci\xF3n"},{id:"5",en:"Vision",es:"Vista"},{id:"6",en:"Book",es:"Libro"}];changeLanguage(d){let r=this.wordsOptions.find(n=>n.id===this.original);r&&(this.translated=r[d||this.language]);}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-radio-group-translator"]],standalone:false,decls:6,vars:5,consts:[["f","ngForm"],[1,"po-row"],["name","language","p-label","Select a Language","p-required","",1,"po-lg-4",3,"ngModelChange","p-change","ngModel","p-options"],["name","original","p-label","Original Text (Portuguese)","p-required","",1,"po-lg-4",3,"ngModelChange","p-change","ngModel","p-options"],["name","translated","p-label","Translated Text","p-readonly","","p-required","",1,"po-lg-4",3,"ngModelChange","ngModel"]],template:function(r,n){if(r&1){let m=Ix();Sl(0,"form",null,0)(2,"div",1)(3,"po-radio-group",2),Cw("ngModelChange",function(l){return Ky(m),oN(n.language,l)||(n.language=l),Xy(l)}),ft("p-change",function(l){return n.changeLanguage(l)}),og(),n0(),Sl(4,"po-select",3),Cw("ngModelChange",function(l){return Ky(m),oN(n.original,l)||(n.original=l),Xy(l)}),ft("p-change",function(l){return n.changeLanguage(l)}),og(),n0(),Sl(5,"po-input",4),Cw("ngModelChange",function(l){return Ky(m),oN(n.translated,l)||(n.translated=l),Xy(l)}),og(),n0(),og()();}r&2&&(Lp(3),ww("ngModel",n.language),rw("p-options",n.languageOptions),i0(),Lp(),ww("ngModel",n.original),rw("p-options",n.optionsList),i0(),Lp(),ww("ngModel",n.translated),i0());},dependencies:[Q9,Z9,K9,wk,_k,L3,Tde,Whe],encapsulation:2,changeDetection:1})}return i})();var De=i=>({"docs-sample-code-tabs":i}),Ee=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-radio-group-translator-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),rN(3,"PO Radio Group - Translator"),og(),Sl(4,"a",2),ft("click",function(){return n.toggleSampleCodeTabs()}),Wl(5,"span"),rN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),rN(12,"sample-po-radio-group-translator/sample-po-radio-group-translator.component.html"),og(),Sl(13,"pre",7),rN(14,`<form #f="ngForm">
  <div class="po-row">
    <po-radio-group
      class="po-lg-4"
      name="language"
      [(ngModel)]="language"
      p-label="Select a Language"
      p-required
      [p-options]="languageOptions"
      (p-change)="changeLanguage($event)"
    >
    </po-radio-group>

    <po-select
      class="po-lg-4"
      name="original"
      [(ngModel)]="original"
      p-label="Original Text (Portuguese)"
      p-required
      [p-options]="optionsList"
      (p-change)="changeLanguage($event)"
    >
    </po-select>

    <po-input
      class="po-lg-4"
      name="translated"
      [(ngModel)]="translated"
      p-label="Translated Text"
      p-readonly
      p-required
    >
    </po-input>
  </div>
</form>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),rN(18,"sample-po-radio-group-translator/sample-po-radio-group-translator.component.ts"),og(),Sl(19,"pre",9),rN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

import { PoRadioGroupOption, PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-radio-group-translator',
  templateUrl: './sample-po-radio-group-translator.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoRadioGroupTranslatorComponent {
  language: string = 'es';
  original: string = '';
  translated: string = '';

  readonly languageOptions: Array<PoRadioGroupOption> = [
    { label: 'Spanish', value: 'es' },
    { label: 'English', value: 'en' }
  ];

  readonly optionsList: Array<PoSelectOption> = [
    { value: '1', label: 'Ol\xE1' },
    { value: '2', label: 'Tchau' },
    { value: '3', label: 'Estrangeiro' },
    { value: '4', label: 'Alinhamento' },
    { value: '5', label: 'Vis\xE3o' },
    { value: '6', label: 'Livro' }
  ];

  readonly wordsOptions: Array<any> = [
    { id: '1', en: 'Hello', es: 'Hola' },
    { id: '2', en: 'Bye', es: 'Hasta luego' },
    { id: '3', en: 'Foreign', es: 'Extranjero' },
    { id: '4', en: 'Alignment', es: 'Alineaci\xF3n' },
    { id: '5', en: 'Vision', es: 'Vista' },
    { id: '6', en: 'Book', es: 'Libro' }
  ];

  changeLanguage(value) {
    const word = this.wordsOptions.find(item => item.id === this.original);

    if (word) {
      this.translated = word[value || this.language];
    }
  }
}
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-radio-group-translator"),og(),Wl(23,"hr")),r&2&&(Lp(5),Gx("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),rw("ngClass",gN(4,De,n.hideSampleCodeTabs)));},dependencies:[SO,Ka,Ume,$me,ge],encapsulation:2,changeDetection:1})}return i})();var be=(()=>{class i{formBuilder=f(tY);translatorForm;languageOptions=[{label:"Spanish",value:"es"},{label:"English",value:"en"}];optionsList=[{value:"1",label:"Ol\xE1"},{value:"2",label:"Tchau"},{value:"3",label:"Estrangeiro"},{value:"4",label:"Alinhamento"},{value:"5",label:"Vis\xE3o"},{value:"6",label:"Livro"}];wordsOptions=[{id:"1",en:"Hello",es:"Hola"},{id:"2",en:"Bye",es:"Hasta luego"},{id:"3",en:"Foreign",es:"Extranjero"},{id:"4",en:"Alignment",es:"Alineaci\xF3n"},{id:"5",en:"Vision",es:"Vista"},{id:"6",en:"Book",es:"Libro"}];ngOnInit(){this.translatorForm=this.formBuilder.group({language:["es",lm.required],original:[void 0,lm.required],translated:[void 0,lm.required]});}changeLanguage(){let d=this.translatorForm.value.language,r=this.translatorForm.value.original,n=this.wordsOptions.find(m=>m.id===r);n&&this.translatorForm.patchValue({translated:n[d]});}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-radio-group-translator-reactive-form"]],standalone:false,decls:5,vars:3,consts:[[3,"formGroup"],[1,"po-row"],["name","language","formControlName","language","p-label","Select a Language","p-required","",1,"po-lg-4",3,"p-change","p-options"],["name","original","formControlName","original","p-label","Original Text (Portuguese)","p-required","",1,"po-lg-4",3,"p-change","p-options"],["name","translated","formControlName","translated","p-label","Translated Text","p-readonly","","p-required","",1,"po-lg-4"]],template:function(r,n){r&1&&(Sl(0,"form",0)(1,"div",1)(2,"po-radio-group",2),ft("p-change",function(){return n.changeLanguage()}),og(),n0(),Sl(3,"po-select",3),ft("p-change",function(){return n.changeLanguage()}),og(),n0(),Wl(4,"po-input",4),n0(),og()()),r&2&&(rw("formGroup",n.translatorForm),Lp(2),rw("p-options",n.languageOptions),i0(),Lp(),rw("p-options",n.optionsList),i0(),Lp(),i0());},dependencies:[Q9,Z9,K9,xk,Rk,L3,Tde,Whe],encapsulation:2,changeDetection:1})}return i})();var ke=i=>({"docs-sample-code-tabs":i}),he=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-radio-group-translator-reactive-form-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),rN(3,"PO Radio Group - Translator Reactive Form"),og(),Sl(4,"a",2),ft("click",function(){return n.toggleSampleCodeTabs()}),Wl(5,"span"),rN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),rN(12,"sample-po-radio-group-translator-reactive-form/sample-po-radio-group-translator-reactive-form.component.html"),og(),Sl(13,"pre",7),rN(14,`<form [formGroup]="translatorForm">
  <div class="po-row">
    <po-radio-group
      class="po-lg-4"
      name="language"
      formControlName="language"
      p-label="Select a Language"
      p-required
      [p-options]="languageOptions"
      (p-change)="changeLanguage()"
    >
    </po-radio-group>

    <po-select
      class="po-lg-4"
      name="original"
      formControlName="original"
      p-label="Original Text (Portuguese)"
      p-required
      [p-options]="optionsList"
      (p-change)="changeLanguage()"
    >
    </po-select>

    <po-input
      class="po-lg-4"
      name="translated"
      formControlName="translated"
      p-label="Translated Text"
      p-readonly
      p-required
    >
    </po-input>
  </div>
</form>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),rN(18,"sample-po-radio-group-translator-reactive-form/sample-po-radio-group-translator-reactive-form.component.ts"),og(),Sl(19,"pre",9),rN(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

import { PoRadioGroupOption, PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-radio-group-translator-reactive-form',
  templateUrl: './sample-po-radio-group-translator-reactive-form.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoRadioGroupTranslatorReactiveFormComponent implements OnInit {
  private formBuilder = inject(UntypedFormBuilder);

  translatorForm: UntypedFormGroup;

  readonly languageOptions: Array<PoRadioGroupOption> = [
    { label: 'Spanish', value: 'es' },
    { label: 'English', value: 'en' }
  ];

  readonly optionsList: Array<PoSelectOption> = [
    { value: '1', label: 'Ol\xE1' },
    { value: '2', label: 'Tchau' },
    { value: '3', label: 'Estrangeiro' },
    { value: '4', label: 'Alinhamento' },
    { value: '5', label: 'Vis\xE3o' },
    { value: '6', label: 'Livro' }
  ];

  readonly wordsOptions: Array<any> = [
    { id: '1', en: 'Hello', es: 'Hola' },
    { id: '2', en: 'Bye', es: 'Hasta luego' },
    { id: '3', en: 'Foreign', es: 'Extranjero' },
    { id: '4', en: 'Alignment', es: 'Alineaci\xF3n' },
    { id: '5', en: 'Vision', es: 'Vista' },
    { id: '6', en: 'Book', es: 'Libro' }
  ];

  ngOnInit() {
    this.translatorForm = this.formBuilder.group({
      language: ['es', Validators.required],
      original: [undefined, Validators.required],
      translated: [undefined, Validators.required]
    });
  }

  changeLanguage() {
    const language = this.translatorForm.value.language;
    const original = this.translatorForm.value.original;

    const word = this.wordsOptions.find(item => item.id === original);

    if (word) {
      this.translatorForm.patchValue({
        translated: word[language]
      });
    }
  }
}
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-radio-group-translator-reactive-form"),og(),Wl(23,"hr")),r&2&&(Lp(5),Gx("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),rw("ngClass",gN(4,ke,n.hideSampleCodeTabs)));},dependencies:[SO,Ka,Ume,$me,be],encapsulation:2,changeDetection:1})}return i})();var Se=(()=>{class i{static \u0275fac=function(r){return new(r||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-radio-group-doc"]],standalone:false,decls:938,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-combo"],["href","/documentation/po-select"],["href","/documentation/po-checkbox-group"],["href","https://www.w3.org/WAI/WCAG21/Understanding/name-role-value"],["href","https://www.w3.org/WAI/WCAG21/Understanding/use-of-color"],["href","https://www.w3.org/TR/wai-aria-practices-1.1/#keyboard-interaction-3"],["href","https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-enhanced"],["href","https://doc.animaliads.io/docs/components/radio"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoRadioGroupOption[]"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-helper"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"]],template:function(r,n){r&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),rN(3,"import { PoFieldModule } from '@po-ui/ng-components';"),og()(),Sl(4,"div",2)(5,"p"),rN(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),og(),Sl(7,"blockquote")(8,"p"),rN(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),Sl(10,"code"),rN(11,"FormsModule"),og(),rN(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Sl(13,"code"),rN(14,"ReactiveFormsModule"),og(),rN(15,", ambos nativos do Angular."),og()()(),Sl(16,"h3",3),rN(17,"Componente"),og(),Sl(18,"h4",4)(19,"code",5),rN(20,"PoRadioGroupComponent"),og()(),Sl(21,"div",2)(22,"p"),rN(23,"O componente "),Sl(24,"code"),rN(25,"po-radio-group"),og(),rN(26,` deve ser utilizado para disponibilizar m\xFAltiplas op\xE7\xF5es ao usu\xE1rio, permitindo a ele que
selecione apenas uma delas. Seu uso \xE9 recomendado para um n\xFAmero pequeno de op\xE7\xF5es, caso contr\xE1rio, recomenda-se o uso
do `),Sl(27,"a",6)(28,"strong"),rN(29,"po-combo"),og()(),rN(30," ou "),Sl(31,"a",7)(32,"strong"),rN(33,"po-select"),og()(),rN(34,"."),og(),Sl(35,"p"),rN(36,`Este n\xE3o \xE9 um componente de multisele\xE7\xE3o, se for este o caso, deve-se utilizar o
`),Sl(37,"a",8)(38,"strong"),rN(39,"po-checkbox-group"),og()(),rN(40,"."),og(),Sl(41,"blockquote")(42,"p"),rN(43,"Ao passar um valor para o "),Sl(44,"em"),rN(45,"model"),og(),rN(46," que n\xE3o esteja na lista de op\xE7\xF5es, o mesmo ser\xE1 definido como "),Sl(47,"code"),rN(48,"undefined"),og(),rN(49,"."),og()(),Sl(50,"h4"),rN(51,"Acessibilidade tratada no componente interno "),Sl(52,"code"),rN(53,"po-radio"),og(),rN(54,":"),og(),Sl(55,"p"),rN(56,"Algumas diretrizes de acessibilidade j\xE1 s\xE3o tratadas no componente, internamente, e n\xE3o podem ser alteradas pelo propriet\xE1rio do conte\xFAdo. S\xE3o elas:"),og(),Sl(57,"ul")(58,"li"),rN(59,"O componente foi desenvolvido utilizando controles padr\xF5es HTML para permitir a identifica\xE7\xE3o do mesmo na interface por tecnologias assistivas. "),Sl(60,"a",9),rN(61,"WCAG 4.1.2: Name, Role, Value"),og()(),Sl(62,"li"),rN(63,"A cor n\xE3o deve ser o \xFAnico meio para diferenciar o radio button normal do selecionado, por isso deve-se manter uma diferen\xE7a visual entre os estados. "),Sl(64,"a",10),rN(65,"WGAG 1.4.1: Use of Color, 3.2.4: Consistent Identification"),og()(),Sl(66,"li"),rN(67,"Quando em foco, o componente \xE9 ativado usando as teclas de Espa\xE7o e Enter do teclado. "),Sl(68,"a",11),rN(69,"W3C WAI-ARIA 3.5 Button - Keyboard Interaction"),og()(),Sl(70,"li"),rN(71,"A \xE1rea do foco precisar ter uma espessura de pelo menos 2 pixels CSS e o foco n\xE3o pode ficar escondido por outros elementos da tela. "),Sl(72,"a",12),rN(73,"(WCAG 2.4.12: Focus Appearance"),og()()(),Sl(74,"p"),rN(75,"Conforme documenta\xE7\xE3o em: "),Sl(76,"a",13),rN(77,"https://doc.animaliads.io/docs/components/radio"),og()(),Sl(78,"h4"),rN(79,"Tokens customiz\xE1veis"),og(),Sl(80,"p"),rN(81,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS): "),Wl(82,"br"),rN(83,`
Obs: No componente Radio Group, a customiza\xE7\xE3o ocorre principalmente nos elementos `),Sl(84,"code"),rN(85,"po-radio"),og(),rN(86," que comp\xF5em o grupo de op\xE7\xF5es. "),Wl(87,"br"),rN(88,`
Portanto, ao aplicar estilos customizados, \xE9 importante focar na customiza\xE7\xE3o dos elementos `),Sl(89,"code"),rN(90,"po-radio"),og(),rN(91," em vez do pr\xF3prio "),Sl(92,"code"),rN(93,"po-radio-group"),og(),rN(94,"."),og(),Sl(95,"blockquote")(96,"p"),rN(97,"Para maiores informa\xE7\xF5es, acesse o guia "),Sl(98,"a",14),rN(99,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),rN(100,"."),og()(),Sl(101,"table")(102,"thead")(103,"tr")(104,"th"),rN(105,"Propriedade"),og(),Sl(106,"th"),rN(107,"Descri\xE7\xE3o"),og(),Sl(108,"th"),rN(109,"Valor Padr\xE3o"),og()()(),Sl(110,"tbody")(111,"tr")(112,"td")(113,"strong"),rN(114,"Default Values"),og()(),Wl(115,"td")(116,"td"),og(),Sl(117,"tr")(118,"td")(119,"code"),rN(120,"--border-color"),og()(),Sl(121,"td"),rN(122,"Cor da borda"),og(),Sl(123,"td")(124,"code"),rN(125,"var(--color-neutral-dark-70)"),og()()(),Sl(126,"tr")(127,"td")(128,"code"),rN(129,"--field-container-title-justify"),og()(),Sl(130,"td"),rN(131,"Alinhamento horizontal do t\xEDtulo ("),Sl(132,"code"),rN(133,"justify-content"),og(),rN(134,")"),og(),Sl(135,"td")(136,"code"),rN(137,"space-between"),og()()(),Sl(138,"tr")(139,"td")(140,"code"),rN(141,"--field-container-title-flex"),og()(),Sl(142,"td"),rN(143,"Flex do t\xEDtulo ("),Sl(144,"code"),rN(145,"flex"),og(),rN(146,")"),og(),Sl(147,"td")(148,"code"),rN(149,"1 auto"),og()()(),Sl(150,"tr")(151,"td")(152,"strong"),rN(153,"Hover"),og()(),Wl(154,"td")(155,"td"),og(),Sl(156,"tr")(157,"td")(158,"code"),rN(159,"--shadow-color-hover"),og()(),Sl(160,"td"),rN(161,"Cor da sombra no estado hover"),og(),Sl(162,"td")(163,"code"),rN(164,"var(--color-brand-01-lighter)"),og()()(),Sl(165,"tr")(166,"td")(167,"code"),rN(168,"--color-hover"),og()(),Sl(169,"td"),rN(170,"Cor principal no estado hover"),og(),Sl(171,"td")(172,"code"),rN(173,"var(--color-brand-01-dark)"),og()()(),Sl(174,"tr")(175,"td")(176,"strong"),rN(177,"Focused"),og()(),Wl(178,"td")(179,"td"),og(),Sl(180,"tr")(181,"td")(182,"code"),rN(183,"--outline-color-focused"),og()(),Sl(184,"td"),rN(185,"Cor do outline do estado de focus"),og(),Sl(186,"td")(187,"code"),rN(188,"var(--color-brand-01-darkest)"),og()()(),Sl(189,"tr")(190,"td")(191,"strong"),rN(192,"checked"),og()(),Wl(193,"td")(194,"td"),og(),Sl(195,"tr")(196,"td")(197,"code"),rN(198,"--color-unchecked"),og()(),Sl(199,"td"),rN(200,"Cor quando n\xE3o selecionado"),og(),Sl(201,"td")(202,"code"),rN(203,"var(--color-neutral-light-00)"),og()()(),Sl(204,"tr")(205,"td")(206,"code"),rN(207,"--color-checked"),og()(),Sl(208,"td"),rN(209,"Cor quando selecionado"),og(),Sl(210,"td")(211,"code"),rN(212,"var(--color-action-default)"),og()()(),Sl(213,"tr")(214,"td")(215,"strong"),rN(216,"Disabled"),og()(),Wl(217,"td")(218,"td"),og(),Sl(219,"tr")(220,"td")(221,"code"),rN(222,"--color-unchecked-disabled"),og()(),Sl(223,"td"),rN(224,"Cor pricipal quando n\xE3o selecionado no estado disabled"),og(),Sl(225,"td")(226,"code"),rN(227,"var(--color-neutral-light-30)"),og()()(),Sl(228,"tr")(229,"td")(230,"code"),rN(231,"--color-checked-disabled"),og()(),Sl(232,"td"),rN(233,"Cor pricipal quando selecionado no estado disabled"),og(),Sl(234,"td")(235,"code"),rN(236,"var(--color-neutral-dark-70)"),og()()()()()(),Sl(237,"div",15)(238,"h4",16),rN(239,"Seletor"),og(),Sl(240,"pre",17),rN(241,`<po-radio-group
    (p-additional-help)="EventEmitter"
    p-additional-help-tooltip="string"
    p-append-in-body="boolean"
    p-auto-focus="boolean"
    (p-change)="EventEmitter"
    p-columns="number"
    p-compact-label="boolean"
    p-disabled="boolean"
    p-error-limit="boolean"
    p-field-error-message="string"
    p-help="string"
    (p-keydown)="EventEmitter"
    p-label="string"
    p-label-text-wrap="boolean"
    name="string"
    p-optional="boolean"
    p-options="PoRadioGroupOption[]"
    p-helper="PoHelperOptions | string"
    p-required="boolean"
    p-show-required="boolean"
    p-size="string" >
</po-radio-group>
`),og()(),Sl(242,"h4",18),rN(243,"Propriedades"),og(),Sl(244,"table",19)(245,"tr",20)(246,"th",21),rN(247,"Nome"),og(),Sl(248,"th",21),rN(249,"Tipo"),og(),Sl(250,"th",21),rN(251,"Padr\xE3o"),og(),Sl(252,"th",21),rN(253,"Descri\xE7\xE3o"),og()(),Sl(254,"tr",22)(255,"td",23)(256,"div",24)(257,"span",25),rN(258," (p-additional-help)"),Wl(259,"br"),og()(),Sl(260,"div",26),rN(261,"Deprecated"),og()(),Sl(262,"td",27)(263,"code",28),rN(264,"EventEmitter"),og()(),Sl(265,"td",29),rN(266,"-"),og(),Sl(267,"td",30)(268,"em")(269,"strong"),rN(270,"(opcional)"),og()(),Sl(271,"p"),rN(272,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),og(),Sl(273,"blockquote")(274,"p"),rN(275,"Essa propriedade est\xE1 "),Sl(276,"strong"),rN(277,"depreciada"),og(),rN(278," e ser\xE1 removida na vers\xE3o "),Sl(279,"code"),rN(280,"23.x.x"),og(),rN(281,". Recomendamos utilizar a propriedade "),Sl(282,"code"),rN(283,"p-helper"),og(),rN(284," que oferece mais recursos e flexibilidade."),og()()()(),Sl(285,"tr",22)(286,"td",23)(287,"div",31)(288,"span",32),rN(289," p-additional-help-tooltip"),Wl(290,"br"),og()(),Sl(291,"div",26),rN(292,"Deprecated"),og()(),Sl(293,"td",27)(294,"code",33),rN(295,"string"),og()(),Sl(296,"td",29),rN(297,"-"),og(),Sl(298,"td",30)(299,"em")(300,"strong"),rN(301,"(opcional)"),og()(),Sl(302,"p"),rN(303,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),Sl(304,"code"),rN(305,"po-helper"),og(),rN(306,`.
`),Sl(307,"strong"),rN(308,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),og()(),Sl(309,"blockquote")(310,"p"),rN(311,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),og()(),Sl(312,"blockquote")(313,"p"),rN(314,"Essa propriedade est\xE1 "),Sl(315,"strong"),rN(316,"depreciada"),og(),rN(317," e ser\xE1 removida na vers\xE3o "),Sl(318,"code"),rN(319,"23.x.x"),og(),rN(320,". Recomendamos utilizar a propriedade "),Sl(321,"code"),rN(322,"p-helper"),og(),rN(323," que oferece mais recursos e flexibilidade."),og()()()(),Sl(324,"tr",22)(325,"td",23)(326,"div",31)(327,"span",32),rN(328," p-append-in-body"),Wl(329,"br"),og()()(),Sl(330,"td",27)(331,"code",34),rN(332,"boolean"),og()(),Sl(333,"td",29)(334,"p")(335,"code"),rN(336,"false"),og()()(),Sl(337,"td",30)(338,"em")(339,"strong"),rN(340,"(opcional)"),og()(),Sl(341,"p"),rN(342,"Define que o popover ("),Sl(343,"code"),rN(344,"p-helper"),og(),rN(345," e/ou "),Sl(346,"code"),rN(347,"p-error-limit"),og(),rN(348,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),og(),Sl(349,"blockquote")(350,"p"),rN(351,"Quando utilizado com "),Sl(352,"code"),rN(353,"p-helper"),og(),rN(354,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),og()()()(),Sl(355,"tr",22)(356,"td",23)(357,"div",31)(358,"span",32),rN(359," p-auto-focus"),Wl(360,"br"),og()()(),Sl(361,"td",27)(362,"code",34),rN(363,"boolean"),og()(),Sl(364,"td",29)(365,"p")(366,"code"),rN(367,"false"),og()()(),Sl(368,"td",30)(369,"em")(370,"strong"),rN(371,"(opcional)"),og()(),Sl(372,"p"),rN(373,"Aplica foco no elemento ao ser iniciado."),og(),Sl(374,"blockquote")(375,"p"),rN(376,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),og()()()(),Sl(377,"tr",22)(378,"td",23)(379,"div",24)(380,"span",25),rN(381," (p-change)"),Wl(382,"br"),og()()(),Sl(383,"td",27)(384,"code",28),rN(385,"EventEmitter"),og()(),Sl(386,"td",29),rN(387,"-"),og(),Sl(388,"td",30)(389,"em")(390,"strong"),rN(391,"(opcional)"),og()(),Sl(392,"p"),rN(393,"Evento ao alterar valor do campo."),og()()(),Sl(394,"tr",22)(395,"td",23)(396,"div",31)(397,"span",32),rN(398," p-columns"),Wl(399,"br"),og()()(),Sl(400,"td",27)(401,"code",35),rN(402,"number"),og()(),Sl(403,"td",29)(404,"p")(405,"code"),rN(406,"2"),og()()(),Sl(407,"td",30)(408,"em")(409,"strong"),rN(410,"(opcional)"),og()(),Sl(411,"p"),rN(412,"Define a quantidade de colunas para exibi\xE7\xE3o das op\xE7\xF5es."),og(),Sl(413,"p")(414,"strong"),rN(415,"Considera\xE7\xF5es:"),og()(),Sl(416,"ul")(417,"li"),rN(418,"\xC9 poss\xEDvel exibir as op\xE7\xF5es entre "),Sl(419,"code"),rN(420,"1"),og(),rN(421," e "),Sl(422,"code"),rN(423,"4"),og(),rN(424," colunas."),og(),Sl(425,"li"),rN(426,"O n\xFAmero m\xE1ximo de colunas \xE9 invari\xE1vel nas seguintes resolu\xE7\xF5es:"),Sl(427,"ul")(428,"li")(429,"code"),rN(430,"sm"),og(),rN(431,": "),Sl(432,"code"),rN(433,"1"),og()(),Sl(434,"li")(435,"code"),rN(436,"md"),og(),rN(437,": "),Sl(438,"code"),rN(439,"2"),og()()()()()()(),Sl(440,"tr",22)(441,"td",23)(442,"div",31)(443,"span",32),rN(444," p-compact-label"),Wl(445,"br"),og()()(),Sl(446,"td",27)(447,"code",34),rN(448,"boolean"),og()(),Sl(449,"td",29)(450,"p")(451,"code"),rN(452,"false"),og()()(),Sl(453,"td",30)(454,"em")(455,"strong"),rN(456,"(opcional)"),og()(),Sl(457,"p"),rN(458,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),og(),Sl(459,"p"),rN(460,"Quando habilitado ("),Sl(461,"code"),rN(462,"true"),og(),rN(463,"), o modo compacto afeta o conjunto composto por:"),og(),Sl(464,"ul")(465,"li")(466,"code"),rN(467,"po-label"),og()(),Sl(468,"li")(469,"code"),rN(470,"p-requirement (showRequired)"),og()(),Sl(471,"li")(472,"code"),rN(473,"po-helper"),og()()(),Sl(474,"p"),rN(475,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),og(),Sl(476,"p"),rN(477,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),og(),Sl(478,"ul")(479,"li")(480,"code"),rN(481,"--field-container-title-justify"),og()(),Sl(482,"li")(483,"code"),rN(484,"--field-container-title-flex"),og()()(),Sl(485,"p"),rN(486,"Exemplo:"),og(),Sl(487,"pre")(488,"code"),rN(489,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),og()(),Sl(490,"p"),rN(491,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),og()()(),Sl(492,"tr",22)(493,"td",23)(494,"div",31)(495,"span",32),rN(496," p-disabled"),Wl(497,"br"),og()()(),Sl(498,"td",27)(499,"code",34),rN(500,"boolean"),og()(),Sl(501,"td",29)(502,"p")(503,"code"),rN(504,"false"),og()()(),Sl(505,"td",30)(506,"em")(507,"strong"),rN(508,"(opcional)"),og()(),Sl(509,"p"),rN(510,"Indica que o campo ser\xE1 desabilitado."),og()()(),Sl(511,"tr",22)(512,"td",23)(513,"div",31)(514,"span",32),rN(515," p-error-limit"),Wl(516,"br"),og()()(),Sl(517,"td",27)(518,"code",34),rN(519,"boolean"),og()(),Sl(520,"td",29)(521,"p")(522,"code"),rN(523,"false"),og()()(),Sl(524,"td",30)(525,"em")(526,"strong"),rN(527,"(opcional)"),og()(),Sl(528,"p"),rN(529,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),og(),Sl(530,"blockquote")(531,"p"),rN(532,"Caso essa propriedade seja definida como "),Sl(533,"code"),rN(534,"true"),og(),rN(535,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),og()()()(),Sl(536,"tr",22)(537,"td",23)(538,"div",31)(539,"span",32),rN(540," p-field-error-message"),Wl(541,"br"),og()()(),Sl(542,"td",27)(543,"code",33),rN(544,"string"),og()(),Sl(545,"td",29),rN(546,"-"),og(),Sl(547,"td",30)(548,"em")(549,"strong"),rN(550,"(opcional)"),og()(),Sl(551,"p"),rN(552,"Exibe a mensagem setada se o campo estiver vazio e for requerido."),og(),Sl(553,"blockquote")(554,"p"),rN(555,"Necess\xE1rio que a propriedade "),Sl(556,"code"),rN(557,"p-required"),og(),rN(558," esteja habilitada."),og()()()(),Sl(559,"tr",22)(560,"td",23)(561,"div",31)(562,"span",32),rN(563," p-help"),Wl(564,"br"),og()()(),Sl(565,"td",27)(566,"code",33),rN(567,"string"),og()(),Sl(568,"td",29),rN(569,"-"),og(),Sl(570,"td",30)(571,"em")(572,"strong"),rN(573,"(opcional)"),og()(),Sl(574,"p"),rN(575,"Texto de apoio do campo."),og()()(),Sl(576,"tr",22)(577,"td",23)(578,"div",24)(579,"span",25),rN(580," (p-keydown)"),Wl(581,"br"),og()()(),Sl(582,"td",27)(583,"code",28),rN(584,"EventEmitter"),og()(),Sl(585,"td",29),rN(586,"-"),og(),Sl(587,"td",30)(588,"em")(589,"strong"),rN(590,"(opcional)"),og()(),Sl(591,"p"),rN(592,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Sl(593,"code"),rN(594,"KeyboardEvent"),og(),rN(595," com informa\xE7\xF5es sobre a tecla."),og()()(),Sl(596,"tr",22)(597,"td",23)(598,"div",31)(599,"span",32),rN(600," p-label"),Wl(601,"br"),og()()(),Sl(602,"td",27)(603,"code",33),rN(604,"string"),og()(),Sl(605,"td",29),rN(606,"-"),og(),Sl(607,"td",30)(608,"em")(609,"strong"),rN(610,"(opcional)"),og()(),Sl(611,"p"),rN(612,"Label do campo."),og()()(),Sl(613,"tr",22)(614,"td",23)(615,"div",31)(616,"span",32),rN(617," p-label-text-wrap"),Wl(618,"br"),og()()(),Sl(619,"td",27)(620,"code",34),rN(621,"boolean"),og()(),Sl(622,"td",29)(623,"p")(624,"code"),rN(625,"false"),og()()(),Sl(626,"td",30)(627,"em")(628,"strong"),rN(629,"(opcional)"),og()(),Sl(630,"p"),rN(631,"Habilita a quebra autom\xE1tica do texto da propriedade "),Sl(632,"code"),rN(633,"p-label"),og(),rN(634,". Quando "),Sl(635,"code"),rN(636,"p-label-text-wrap"),og(),rN(637,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),og()()(),Sl(638,"tr",22)(639,"td",23)(640,"div",31)(641,"span",32),rN(642," name"),Wl(643,"br"),og()()(),Sl(644,"td",27)(645,"code",33),rN(646,"string"),og()(),Sl(647,"td",29),rN(648,"-"),og(),Sl(649,"td",30)(650,"p"),rN(651,"Nome das op\xE7\xF5es."),og()()(),Sl(652,"tr",22)(653,"td",23)(654,"div",31)(655,"span",32),rN(656," p-optional"),Wl(657,"br"),og()()(),Sl(658,"td",27)(659,"code",34),rN(660,"boolean"),og()(),Sl(661,"td",29)(662,"p")(663,"code"),rN(664,"false"),og()()(),Sl(665,"td",30)(666,"em")(667,"strong"),rN(668,"(opcional)"),og()(),Sl(669,"p"),rN(670,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),og(),Sl(671,"blockquote")(672,"p"),rN(673,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),og()(),Sl(674,"ul")(675,"li"),rN(676,"O campo conter "),Sl(677,"code"),rN(678,"p-required"),og(),rN(679,";"),og(),Sl(680,"li"),rN(681,"N\xE3o possuir "),Sl(682,"code"),rN(683,"p-help"),og(),rN(684," e/ou "),Sl(685,"code"),rN(686,"p-label"),og(),rN(687,"."),og()()()(),Sl(688,"tr",22)(689,"td",23)(690,"div",31)(691,"span",32),rN(692," p-options"),Wl(693,"br"),og()()(),Sl(694,"td",27)(695,"code",36),rN(696,"PoRadioGroupOption[]"),og()(),Sl(697,"td",29),rN(698,"-"),og(),Sl(699,"td",30)(700,"p"),rN(701,`Lista de op\xE7\xF5es que ser\xE3o exibidas.
Nesta propriedade deve ser definido um array de objetos que implementam a interface PoRadioGroupOption.`),og()()(),Sl(702,"tr",22)(703,"td",23)(704,"div",31)(705,"span",32),rN(706," p-helper"),Wl(707,"br"),og()()(),Sl(708,"td",27)(709,"code",37),rN(710,"PoHelperOptions "),og(),Sl(711,"code",33),rN(712," string"),og()(),Sl(713,"td",29),rN(714,"-"),og(),Sl(715,"td",30)(716,"em")(717,"strong"),rN(718,"(opcional)"),og()(),Sl(719,"p"),rN(720,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label quando a propriedade "),Sl(721,"code"),rN(722,"p-label"),og(),rN(723," for definida, ou, ao lado do componente na aus\xEAncia da propriedade "),Sl(724,"code"),rN(725,"p-label"),og(),rN(726,"."),og(),Sl(727,"blockquote")(728,"p"),rN(729,"Para mais informa\xE7\xF5es acesse: "),Sl(730,"a",38),rN(731,"https://po-ui.io/documentation/po-helper"),og(),rN(732,"."),og()(),Sl(733,"blockquote")(734,"p"),rN(735,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),Sl(736,"code"),rN(737,"p-additional-help-tooltip"),og(),rN(738," e "),Sl(739,"code"),rN(740,"p-additional-help"),og(),rN(741,") ser\xE1 ignorado."),og()()()(),Sl(742,"tr",22)(743,"td",23)(744,"div",31)(745,"span",32),rN(746," p-required"),Wl(747,"br"),og()()(),Sl(748,"td",27)(749,"code",34),rN(750,"boolean"),og()(),Sl(751,"td",29)(752,"p")(753,"code"),rN(754,"false"),og()()(),Sl(755,"td",30)(756,"em")(757,"strong"),rN(758,"(opcional)"),og()(),Sl(759,"p"),rN(760,"Define que o campo ser\xE1 obrigat\xF3rio."),og()()(),Sl(761,"tr",22)(762,"td",23)(763,"div",31)(764,"span",32),rN(765," p-show-required"),Wl(766,"br"),og()()(),Sl(767,"td",27)(768,"code",34),rN(769,"boolean"),og()(),Sl(770,"td",29),rN(771,"-"),og(),Sl(772,"td",30)(773,"p"),rN(774,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),og(),Sl(775,"blockquote")(776,"p"),rN(777,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),og()(),Sl(778,"ul")(779,"li"),rN(780,"N\xE3o possuir "),Sl(781,"code"),rN(782,"p-help"),og(),rN(783," e/ou "),Sl(784,"code"),rN(785,"p-label"),og(),rN(786,"."),og()()()(),Sl(787,"tr",22)(788,"td",23)(789,"div",31)(790,"span",32),rN(791," p-size"),Wl(792,"br"),og()()(),Sl(793,"td",27)(794,"code",33),rN(795,"string"),og()(),Sl(796,"td",29)(797,"p")(798,"code"),rN(799,"medium"),og()()(),Sl(800,"td",30)(801,"em")(802,"strong"),rN(803,"(opcional)"),og()(),Sl(804,"p"),rN(805,"Define o tamanho dos radios do componente:"),og(),Sl(806,"ul")(807,"li")(808,"code"),rN(809,"small"),og(),rN(810,": 16x16 (dispon\xEDvel apenas para acessibilidade AA)."),og(),Sl(811,"li")(812,"code"),rN(813,"medium"),og(),rN(814,": 24x24."),og()(),Sl(815,"blockquote")(816,"p"),rN(817,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Sl(818,"code"),rN(819,"medium"),og(),rN(820,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Sl(821,"a",39),rN(822,"po-theme"),og(),rN(823,"."),og()()()()(),Sl(824,"h3",18),rN(825,"M\xE9todos"),og(),Sl(826,"table",40)(827,"tr",22)(828,"th",41)(829,"div",31)(830,"h4")(831,"span",32),rN(832," focus "),og()()()()(),Sl(833,"tr",30)(834,"td",30)(835,"p"),rN(836,"Fun\xE7\xE3o que atribui foco ao componente."),og(),Sl(837,"p"),rN(838,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),og(),Sl(839,"pre")(840,"code"),rN(841,`import { PoRadioGroupComponent } from '@po-ui/ng-components';

...

@ViewChild(PoRadioGroupComponent, { static: true }) radio: PoRadioGroupComponent;

focusRadio() {
  this.radio.focus();
}
`),og()()()()(),Wl(842,"br"),Sl(843,"table",40)(844,"tr",22)(845,"th",41)(846,"div",31)(847,"h4")(848,"span",32),rN(849," showAdditionalHelp "),og()()()()(),Sl(850,"tr",30)(851,"td",30)(852,"p"),rN(853,"M\xE9todo que exibe "),Sl(854,"code"),rN(855,"p-helper"),og(),rN(856," ou executa a a\xE7\xE3o definida em "),Sl(857,"code"),rN(858,"p-helper{eventOnClick}"),og(),rN(859," ou em "),Sl(860,"code"),rN(861,"p-additionalHelp"),og(),rN(862,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Sl(863,"code"),rN(864,"p-keydown"),og(),rN(865,"."),og(),Sl(866,"blockquote")(867,"p"),rN(868,"Exibe ou oculta o conte\xFAdo do componente "),Sl(869,"code"),rN(870,"po-helper"),og(),rN(871," quando o componente estiver com foco."),og()(),Sl(872,"pre")(873,"code"),rN(874,`// Exemplo com p-label e p-helper
<po-radio-group
 #radioGroup
 ...
 p-label="Label do radioGroup"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, radioGroup)"
></po-radio-group>
`),og()(),Sl(875,"pre")(876,"code"),rN(877,`...
onKeyDown(event: KeyboardEvent, inp: PoRadioGroupComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),og()()()()(),Wl(878,"br"),Sl(879,"h3"),rN(880,"Interfaces"),og(),Sl(881,"h4",42)(882,"code",5),rN(883,"PoRadioGroupOption"),og()(),Sl(884,"div",2)(885,"p"),rN(886,"Interface para as a\xE7\xF5es do componente po-radio-group."),og()(),Sl(887,"h4",18),rN(888,"Propriedades"),og(),Sl(889,"table",19)(890,"tr",20)(891,"th",21),rN(892,"Nome"),og(),Sl(893,"th",21),rN(894,"Tipo"),og(),Sl(895,"th",21),rN(896,"Descri\xE7\xE3o"),og()(),Sl(897,"tr",22)(898,"td",23)(899,"div",31)(900,"span",32),rN(901," disabled"),Wl(902,"br"),og()()(),Sl(903,"td",27)(904,"code",34),rN(905,"boolean"),og()(),Sl(906,"td",30)(907,"em")(908,"strong"),rN(909,"(opcional)"),og()(),Sl(910,"p"),rN(911,"Desabilita o radio."),og()()(),Sl(912,"tr",22)(913,"td",23)(914,"div",31)(915,"span",32),rN(916," label"),Wl(917,"br"),og()()(),Sl(918,"td",27)(919,"code",33),rN(920,"string"),og()(),Sl(921,"td",30)(922,"p"),rN(923,"Texto do radio."),og()()(),Sl(924,"tr",22)(925,"td",23)(926,"div",31)(927,"span",32),rN(928," value"),Wl(929,"br"),og()()(),Sl(930,"td",27)(931,"code",33),rN(932,"string "),og(),Sl(933,"code",35),rN(934," number"),og()(),Sl(935,"td",30)(936,"p"),rN(937,"Valor do radio."),og()()()()());},dependencies:[Ka],encapsulation:2,changeDetection:1})}return i})();var fe=(()=>{class i{route;router;sub;hidePoWebSample=true;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(d,r){this.route=d,this.router=r;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let r=d.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:"merge"}),this.activeTab=d;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(r){return new(r||i)(w(Xn),w(En))};static \u0275cmp=Un({type:i,selectors:[["ng-component"]],standalone:false,decls:9,vars:4,consts:[["p-title","Radio Group",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,n){r&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return n.changeTab("doc")}),Wl(3,"sample-po-radio-group-doc"),og(),Sl(4,"po-tab",3),ft("p-click",function(){return n.changeTab("web")}),Wl(5,"sample-po-radio-group-basic-view")(6,"sample-po-radio-group-labs-view")(7,"sample-po-radio-group-translator-view")(8,"sample-po-radio-group-translator-reactive-form-view"),og()()()),r&2&&(rw("p-actions",n.actions),Lp(2),rw("p-active",n.activeTab==="doc"),Lp(2),rw("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"));},dependencies:[sNe,Ume,$me,me,ce,Ee,he,Se],encapsulation:2,changeDetection:1})}return i})();var Be=[{path:"",component:fe}],xe=(()=>{class i{static \u0275fac=function(r){return new(r||i)};static \u0275mod=fe$1({type:i});static \u0275inj=ue$1({imports:[mL.forChild(Be),mL]})}return i})();var bt=(()=>{class i{static \u0275fac=function(r){return new(r||i)};static \u0275mod=fe$1({type:i});static \u0275inj=ue$1({imports:[sr,xe]})}return i})();export{bt as DocPoRadioGroupModule};