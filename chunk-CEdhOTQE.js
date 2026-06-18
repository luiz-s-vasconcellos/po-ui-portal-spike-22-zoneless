import {f as fe$1,u as ue$1,s as sr,a as uL,C,c3 as Xn,E as En,U as Un,b as f,cM as Z9,cN as lm,c8 as Dde,J as zl,T as nw,bM as dN,a7 as lN,an as DO,aH as Ka,b8 as qme,b9 as Yme,H as Il,q as Qx,R as og,a1 as ft,A as Lp,ar as Ux,au as dg,bs as uN,aX as G9,aF as $9,aY as z9,aG as mk,aZ as hk,b0 as Qt,b1 as mv,c4 as C3,b4 as F3,bH as k3,c9 as Yhe,aB as Dx,aM as ww,aN as QA,bd as Ax,aO as Ew,aP as e0,aJ as qhe,cQ as Ik,cR as Ck,a3 as cNe,aD as Xy,aT as eN,aE as Qy}from'./main-FCMDZGSJ.js';var Ce=()=>({label:"Option 1",value:"1"}),we=()=>({label:"Option 2",value:"2"}),ye=(i,ve)=>[i,ve],de=(()=>{class i{static \u0275fac=function(r){return new(r||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-radio-group-basic"]],standalone:false,decls:1,vars:6,consts:[["name","radioGroupBasic","p-label","PO Radio Group",3,"p-options"]],template:function(r,n){r&1&&zl(0,"po-radio-group",0),r&2&&nw("p-options",dN(3,ye,lN(1,Ce),lN(2,we)));},dependencies:[Dde],encapsulation:2,changeDetection:1})}return i})();var Te=i=>({"docs-sample-code-tabs":i}),me=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-radio-group-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Radio Group Basic"),og(),Il(4,"a",2),ft("click",function(){return n.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-radio-group-basic/sample-po-radio-group-basic.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-radio-group
  name="radioGroupBasic"
  p-label="PO Radio Group"
  [p-options]="[
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' }
  ]"
>
</po-radio-group>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-radio-group-basic/sample-po-radio-group-basic.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-radio-group-basic',
  templateUrl: './sample-po-radio-group-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoRadioGroupBasicComponent {}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-radio-group-basic"),og(),zl(23,"hr")),r&2&&(Lp(5),Ux("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,Te,n.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,de],encapsulation:2})}return i})();var ue=(()=>{class i{helperText;columns;event;help;label;option;options;properties;radioGroup;fieldErrorMessage;size;columnOptions=[{label:"1 column",value:1},{label:"2 columns",value:2},{label:"3 columns",value:3},{label:"4 columns",value:4}];propertiesOptions=[{value:"disabled",label:"Disabled"},{value:"optional",label:"Optional"},{value:"required",label:"Required"},{value:"showRequired",label:"Show Required"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"},{value:"compactLabel",label:"Compact Label"}];sizesOptions=[{label:"Small",value:"small"},{label:"Medium",value:"medium"},{label:"Large",value:"large"}];ngOnInit(){this.restore();}addOption(){this.options.push(this.option),this.option=this.getNewOption();}changeEvent(d){this.event=d;}restore(){this.helperText="",this.event="",this.radioGroup=void 0,this.properties=[],this.fieldErrorMessage="",this.size="medium",this.option=this.getNewOption(),this.options=[];}getNewOption(){return {label:void 0,value:void 0}}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-radio-group-labs"]],standalone:false,decls:26,vars:31,consts:[["optionForm","ngForm"],["propertiesForm","ngForm"],["name","radioGroupLabs",3,"ngModelChange","p-change","p-keydown","ngModel","p-helper","p-columns","p-disabled","p-help","p-label","p-optional","p-options","p-required","p-field-error-message","p-show-required","p-size","p-error-limit","p-label-text-wrap","p-compact-label"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","optionLabel","p-label","Option Label","p-required","",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel"],["name","optionValue","p-label","Option Value","p-required","",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel"],["name","optionDisabled","p-label","Option Disabled",1,"po-lg-4",3,"ngModelChange","ngModel"],["p-label","Add Option",1,"po-md-6","po-lg-3",3,"p-click","p-disabled"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","fieldErrorMessage","p-clean","","p-label","Field Error Message",1,"po-md-6",3,"ngModelChange","ngModel"],["name","columns","p-columns","4","p-label","Columns",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"click"]],template:function(r,n){if(r&1){let m=Dx();Il(0,"po-radio-group",2),ww("ngModelChange",function(l){return Xy(m),eN(n.radioGroup,l)||(n.radioGroup=l),Qy(l)}),ft("p-change",function(){return n.changeEvent("p-change")})("p-keydown",function(){return n.changeEvent("p-keydown")}),og(),QA(),zl(1,"po-divider"),Il(2,"div",3),zl(3,"po-info",4)(4,"po-info",5),og(),zl(5,"po-divider"),Il(6,"form",null,0)(8,"div",3)(9,"po-input",6),ww("ngModelChange",function(l){return Xy(m),eN(n.option.label,l)||(n.option.label=l),Qy(l)}),og(),QA(),Il(10,"po-input",7),ww("ngModelChange",function(l){return Xy(m),eN(n.option.value,l)||(n.option.value=l),Qy(l)}),og(),QA(),Il(11,"po-switch",8),ww("ngModelChange",function(l){return Xy(m),eN(n.option.disabled,l)||(n.option.disabled=l),Qy(l)}),og(),QA(),og(),Il(12,"div",3)(13,"po-button",9),ft("p-click",function(){Xy(m);let l=Ax(7);return n.addOption(),Qy(l.reset())}),og()()(),zl(14,"po-divider"),Il(15,"form",null,1)(17,"po-input",10),ww("ngModelChange",function(l){return Xy(m),eN(n.label,l)||(n.label=l),Qy(l)}),og(),QA(),Il(18,"po-input",11),ww("ngModelChange",function(l){return Xy(m),eN(n.help,l)||(n.help=l),Qy(l)}),og(),QA(),Il(19,"po-input",12),ww("ngModelChange",function(l){return Xy(m),eN(n.helperText,l)||(n.helperText=l),Qy(l)}),og(),QA(),Il(20,"po-input",13),ww("ngModelChange",function(l){return Xy(m),eN(n.fieldErrorMessage,l)||(n.fieldErrorMessage=l),Qy(l)}),og(),QA(),Il(21,"po-radio-group",14),ww("ngModelChange",function(l){return Xy(m),eN(n.columns,l)||(n.columns=l),Qy(l)}),og(),QA(),Il(22,"po-checkbox-group",15),ww("ngModelChange",function(l){return Xy(m),eN(n.properties,l)||(n.properties=l),Qy(l)}),og(),QA(),Il(23,"po-radio-group",16),ww("ngModelChange",function(l){return Xy(m),eN(n.size,l)||(n.size=l),Qy(l)}),og(),QA(),Il(24,"div",3)(25,"po-button",17),ft("click",function(){return Xy(m),Ax(16).reset(),Qy(n.restore())}),og()()();}if(r&2){let m=Ax(7);Ew("ngModel",n.radioGroup),nw("p-helper",n.helperText)("p-columns",n.columns)("p-disabled",n.properties.includes("disabled"))("p-help",n.help)("p-label",n.label)("p-optional",n.properties.includes("optional"))("p-options",n.options)("p-required",n.properties.includes("required"))("p-field-error-message",n.fieldErrorMessage)("p-show-required",n.properties.includes("showRequired"))("p-size",n.size)("p-error-limit",n.properties==null?null:n.properties.includes("errorLimit"))("p-label-text-wrap",n.properties==null?null:n.properties.includes("labelTextWrap"))("p-compact-label",n.properties==null?null:n.properties.includes("compactLabel")),e0(),Lp(3),nw("p-value",n.radioGroup),Lp(),nw("p-value",n.event),Lp(5),Ew("ngModel",n.option.label),e0(),Lp(),Ew("ngModel",n.option.value),e0(),Lp(),Ew("ngModel",n.option.disabled),e0(),Lp(2),nw("p-disabled",m.invalid),Lp(4),Ew("ngModel",n.label),e0(),Lp(),Ew("ngModel",n.help),e0(),Lp(),Ew("ngModel",n.helperText),e0(),Lp(),Ew("ngModel",n.fieldErrorMessage),e0(),Lp(),Ew("ngModel",n.columns),nw("p-options",n.columnOptions),e0(),Lp(),Ew("ngModel",n.properties),nw("p-options",n.propertiesOptions),e0(),Lp(),Ew("ngModel",n.size),nw("p-options",n.sizesOptions),e0();}},dependencies:[G9,$9,z9,mk,hk,Qt,mv,C3,F3,Dde,k3,Yhe],encapsulation:2,changeDetection:1})}return i})();var Re=i=>({"docs-sample-code-tabs":i}),ce=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-radio-group-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Radio Group Labs"),og(),Il(4,"a",2),ft("click",function(){return n.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-radio-group-labs/sample-po-radio-group-labs.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-radio-group
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
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-radio-group-labs/sample-po-radio-group-labs.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-radio-group-labs"),og(),zl(23,"hr")),r&2&&(Lp(5),Ux("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,Re,n.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,ue],encapsulation:2})}return i})();var ge=(()=>{class i{language="es";original="";translated="";languageOptions=[{label:"Spanish",value:"es"},{label:"English",value:"en"}];optionsList=[{value:"1",label:"Ol\xE1"},{value:"2",label:"Tchau"},{value:"3",label:"Estrangeiro"},{value:"4",label:"Alinhamento"},{value:"5",label:"Vis\xE3o"},{value:"6",label:"Livro"}];wordsOptions=[{id:"1",en:"Hello",es:"Hola"},{id:"2",en:"Bye",es:"Hasta luego"},{id:"3",en:"Foreign",es:"Extranjero"},{id:"4",en:"Alignment",es:"Alineaci\xF3n"},{id:"5",en:"Vision",es:"Vista"},{id:"6",en:"Book",es:"Libro"}];changeLanguage(d){let r=this.wordsOptions.find(n=>n.id===this.original);r&&(this.translated=r[d||this.language]);}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-radio-group-translator"]],standalone:false,decls:6,vars:5,consts:[["f","ngForm"],[1,"po-row"],["name","language","p-label","Select a Language","p-required","",1,"po-lg-4",3,"ngModelChange","p-change","ngModel","p-options"],["name","original","p-label","Original Text (Portuguese)","p-required","",1,"po-lg-4",3,"ngModelChange","p-change","ngModel","p-options"],["name","translated","p-label","Translated Text","p-readonly","","p-required","",1,"po-lg-4",3,"ngModelChange","ngModel"]],template:function(r,n){if(r&1){let m=Dx();Il(0,"form",null,0)(2,"div",1)(3,"po-radio-group",2),ww("ngModelChange",function(l){return Xy(m),eN(n.language,l)||(n.language=l),Qy(l)}),ft("p-change",function(l){return n.changeLanguage(l)}),og(),QA(),Il(4,"po-select",3),ww("ngModelChange",function(l){return Xy(m),eN(n.original,l)||(n.original=l),Qy(l)}),ft("p-change",function(l){return n.changeLanguage(l)}),og(),QA(),Il(5,"po-input",4),ww("ngModelChange",function(l){return Xy(m),eN(n.translated,l)||(n.translated=l),Qy(l)}),og(),QA(),og()();}r&2&&(Lp(3),Ew("ngModel",n.language),nw("p-options",n.languageOptions),e0(),Lp(),Ew("ngModel",n.original),nw("p-options",n.optionsList),e0(),Lp(),Ew("ngModel",n.translated),e0());},dependencies:[G9,$9,z9,mk,hk,F3,Dde,qhe],encapsulation:2,changeDetection:1})}return i})();var Le=i=>({"docs-sample-code-tabs":i}),Ee=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-radio-group-translator-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Radio Group - Translator"),og(),Il(4,"a",2),ft("click",function(){return n.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-radio-group-translator/sample-po-radio-group-translator.component.html"),og(),Il(13,"pre",7),Qx(14,`<form #f="ngForm">
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
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-radio-group-translator/sample-po-radio-group-translator.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-radio-group-translator"),og(),zl(23,"hr")),r&2&&(Lp(5),Ux("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,Le,n.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,ge],encapsulation:2})}return i})();var be=(()=>{class i{formBuilder=f(Z9);translatorForm;languageOptions=[{label:"Spanish",value:"es"},{label:"English",value:"en"}];optionsList=[{value:"1",label:"Ol\xE1"},{value:"2",label:"Tchau"},{value:"3",label:"Estrangeiro"},{value:"4",label:"Alinhamento"},{value:"5",label:"Vis\xE3o"},{value:"6",label:"Livro"}];wordsOptions=[{id:"1",en:"Hello",es:"Hola"},{id:"2",en:"Bye",es:"Hasta luego"},{id:"3",en:"Foreign",es:"Extranjero"},{id:"4",en:"Alignment",es:"Alineaci\xF3n"},{id:"5",en:"Vision",es:"Vista"},{id:"6",en:"Book",es:"Libro"}];ngOnInit(){this.translatorForm=this.formBuilder.group({language:["es",lm.required],original:[void 0,lm.required],translated:[void 0,lm.required]});}changeLanguage(){let d=this.translatorForm.value.language,r=this.translatorForm.value.original,n=this.wordsOptions.find(m=>m.id===r);n&&this.translatorForm.patchValue({translated:n[d]});}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-radio-group-translator-reactive-form"]],standalone:false,decls:5,vars:3,consts:[[3,"formGroup"],[1,"po-row"],["name","language","formControlName","language","p-label","Select a Language","p-required","",1,"po-lg-4",3,"p-change","p-options"],["name","original","formControlName","original","p-label","Original Text (Portuguese)","p-required","",1,"po-lg-4",3,"p-change","p-options"],["name","translated","formControlName","translated","p-label","Translated Text","p-readonly","","p-required","",1,"po-lg-4"]],template:function(r,n){r&1&&(Il(0,"form",0)(1,"div",1)(2,"po-radio-group",2),ft("p-change",function(){return n.changeLanguage()}),og(),QA(),Il(3,"po-select",3),ft("p-change",function(){return n.changeLanguage()}),og(),QA(),zl(4,"po-input",4),QA(),og()()),r&2&&(nw("formGroup",n.translatorForm),Lp(2),nw("p-options",n.languageOptions),e0(),Lp(),nw("p-options",n.optionsList),e0(),Lp(),e0());},dependencies:[G9,$9,z9,Ik,Ck,F3,Dde,qhe],encapsulation:2,changeDetection:1})}return i})();var De=i=>({"docs-sample-code-tabs":i}),he=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-radio-group-translator-reactive-form-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Radio Group - Translator Reactive Form"),og(),Il(4,"a",2),ft("click",function(){return n.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-radio-group-translator-reactive-form/sample-po-radio-group-translator-reactive-form.component.html"),og(),Il(13,"pre",7),Qx(14,`<form [formGroup]="translatorForm">
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
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-radio-group-translator-reactive-form/sample-po-radio-group-translator-reactive-form.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-radio-group-translator-reactive-form"),og(),zl(23,"hr")),r&2&&(Lp(5),Ux("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,De,n.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,be],encapsulation:2})}return i})();var Se=(()=>{class i{static \u0275fac=function(r){return new(r||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-radio-group-doc"]],standalone:false,decls:938,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-combo"],["href","/documentation/po-select"],["href","/documentation/po-checkbox-group"],["href","https://www.w3.org/WAI/WCAG21/Understanding/name-role-value"],["href","https://www.w3.org/WAI/WCAG21/Understanding/use-of-color"],["href","https://www.w3.org/TR/wai-aria-practices-1.1/#keyboard-interaction-3"],["href","https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-enhanced"],["href","https://doc.animaliads.io/docs/components/radio"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoRadioGroupOption[]"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-helper"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"]],template:function(r,n){r&1&&(Il(0,"div",0)(1,"p",1)(2,"code"),Qx(3,"import { PoFieldModule } from '@po-ui/ng-components';"),og()(),Il(4,"div",2)(5,"p"),Qx(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),og(),Il(7,"blockquote")(8,"p"),Qx(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),Il(10,"code"),Qx(11,"FormsModule"),og(),Qx(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Il(13,"code"),Qx(14,"ReactiveFormsModule"),og(),Qx(15,", ambos nativos do Angular."),og()()(),Il(16,"h3",3),Qx(17,"Componente"),og(),Il(18,"h4",4)(19,"code",5),Qx(20,"PoRadioGroupComponent"),og()(),Il(21,"div",2)(22,"p"),Qx(23,"O componente "),Il(24,"code"),Qx(25,"po-radio-group"),og(),Qx(26,` deve ser utilizado para disponibilizar m\xFAltiplas op\xE7\xF5es ao usu\xE1rio, permitindo a ele que
selecione apenas uma delas. Seu uso \xE9 recomendado para um n\xFAmero pequeno de op\xE7\xF5es, caso contr\xE1rio, recomenda-se o uso
do `),Il(27,"a",6)(28,"strong"),Qx(29,"po-combo"),og()(),Qx(30," ou "),Il(31,"a",7)(32,"strong"),Qx(33,"po-select"),og()(),Qx(34,"."),og(),Il(35,"p"),Qx(36,`Este n\xE3o \xE9 um componente de multisele\xE7\xE3o, se for este o caso, deve-se utilizar o
`),Il(37,"a",8)(38,"strong"),Qx(39,"po-checkbox-group"),og()(),Qx(40,"."),og(),Il(41,"blockquote")(42,"p"),Qx(43,"Ao passar um valor para o "),Il(44,"em"),Qx(45,"model"),og(),Qx(46," que n\xE3o esteja na lista de op\xE7\xF5es, o mesmo ser\xE1 definido como "),Il(47,"code"),Qx(48,"undefined"),og(),Qx(49,"."),og()(),Il(50,"h4"),Qx(51,"Acessibilidade tratada no componente interno "),Il(52,"code"),Qx(53,"po-radio"),og(),Qx(54,":"),og(),Il(55,"p"),Qx(56,"Algumas diretrizes de acessibilidade j\xE1 s\xE3o tratadas no componente, internamente, e n\xE3o podem ser alteradas pelo propriet\xE1rio do conte\xFAdo. S\xE3o elas:"),og(),Il(57,"ul")(58,"li"),Qx(59,"O componente foi desenvolvido utilizando controles padr\xF5es HTML para permitir a identifica\xE7\xE3o do mesmo na interface por tecnologias assistivas. "),Il(60,"a",9),Qx(61,"WCAG 4.1.2: Name, Role, Value"),og()(),Il(62,"li"),Qx(63,"A cor n\xE3o deve ser o \xFAnico meio para diferenciar o radio button normal do selecionado, por isso deve-se manter uma diferen\xE7a visual entre os estados. "),Il(64,"a",10),Qx(65,"WGAG 1.4.1: Use of Color, 3.2.4: Consistent Identification"),og()(),Il(66,"li"),Qx(67,"Quando em foco, o componente \xE9 ativado usando as teclas de Espa\xE7o e Enter do teclado. "),Il(68,"a",11),Qx(69,"W3C WAI-ARIA 3.5 Button - Keyboard Interaction"),og()(),Il(70,"li"),Qx(71,"A \xE1rea do foco precisar ter uma espessura de pelo menos 2 pixels CSS e o foco n\xE3o pode ficar escondido por outros elementos da tela. "),Il(72,"a",12),Qx(73,"(WCAG 2.4.12: Focus Appearance"),og()()(),Il(74,"p"),Qx(75,"Conforme documenta\xE7\xE3o em: "),Il(76,"a",13),Qx(77,"https://doc.animaliads.io/docs/components/radio"),og()(),Il(78,"h4"),Qx(79,"Tokens customiz\xE1veis"),og(),Il(80,"p"),Qx(81,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS): "),zl(82,"br"),Qx(83,`
Obs: No componente Radio Group, a customiza\xE7\xE3o ocorre principalmente nos elementos `),Il(84,"code"),Qx(85,"po-radio"),og(),Qx(86," que comp\xF5em o grupo de op\xE7\xF5es. "),zl(87,"br"),Qx(88,`
Portanto, ao aplicar estilos customizados, \xE9 importante focar na customiza\xE7\xE3o dos elementos `),Il(89,"code"),Qx(90,"po-radio"),og(),Qx(91," em vez do pr\xF3prio "),Il(92,"code"),Qx(93,"po-radio-group"),og(),Qx(94,"."),og(),Il(95,"blockquote")(96,"p"),Qx(97,"Para maiores informa\xE7\xF5es, acesse o guia "),Il(98,"a",14),Qx(99,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),Qx(100,"."),og()(),Il(101,"table")(102,"thead")(103,"tr")(104,"th"),Qx(105,"Propriedade"),og(),Il(106,"th"),Qx(107,"Descri\xE7\xE3o"),og(),Il(108,"th"),Qx(109,"Valor Padr\xE3o"),og()()(),Il(110,"tbody")(111,"tr")(112,"td")(113,"strong"),Qx(114,"Default Values"),og()(),zl(115,"td")(116,"td"),og(),Il(117,"tr")(118,"td")(119,"code"),Qx(120,"--border-color"),og()(),Il(121,"td"),Qx(122,"Cor da borda"),og(),Il(123,"td")(124,"code"),Qx(125,"var(--color-neutral-dark-70)"),og()()(),Il(126,"tr")(127,"td")(128,"code"),Qx(129,"--field-container-title-justify"),og()(),Il(130,"td"),Qx(131,"Alinhamento horizontal do t\xEDtulo ("),Il(132,"code"),Qx(133,"justify-content"),og(),Qx(134,")"),og(),Il(135,"td")(136,"code"),Qx(137,"space-between"),og()()(),Il(138,"tr")(139,"td")(140,"code"),Qx(141,"--field-container-title-flex"),og()(),Il(142,"td"),Qx(143,"Flex do t\xEDtulo ("),Il(144,"code"),Qx(145,"flex"),og(),Qx(146,")"),og(),Il(147,"td")(148,"code"),Qx(149,"1 auto"),og()()(),Il(150,"tr")(151,"td")(152,"strong"),Qx(153,"Hover"),og()(),zl(154,"td")(155,"td"),og(),Il(156,"tr")(157,"td")(158,"code"),Qx(159,"--shadow-color-hover"),og()(),Il(160,"td"),Qx(161,"Cor da sombra no estado hover"),og(),Il(162,"td")(163,"code"),Qx(164,"var(--color-brand-01-lighter)"),og()()(),Il(165,"tr")(166,"td")(167,"code"),Qx(168,"--color-hover"),og()(),Il(169,"td"),Qx(170,"Cor principal no estado hover"),og(),Il(171,"td")(172,"code"),Qx(173,"var(--color-brand-01-dark)"),og()()(),Il(174,"tr")(175,"td")(176,"strong"),Qx(177,"Focused"),og()(),zl(178,"td")(179,"td"),og(),Il(180,"tr")(181,"td")(182,"code"),Qx(183,"--outline-color-focused"),og()(),Il(184,"td"),Qx(185,"Cor do outline do estado de focus"),og(),Il(186,"td")(187,"code"),Qx(188,"var(--color-brand-01-darkest)"),og()()(),Il(189,"tr")(190,"td")(191,"strong"),Qx(192,"checked"),og()(),zl(193,"td")(194,"td"),og(),Il(195,"tr")(196,"td")(197,"code"),Qx(198,"--color-unchecked"),og()(),Il(199,"td"),Qx(200,"Cor quando n\xE3o selecionado"),og(),Il(201,"td")(202,"code"),Qx(203,"var(--color-neutral-light-00)"),og()()(),Il(204,"tr")(205,"td")(206,"code"),Qx(207,"--color-checked"),og()(),Il(208,"td"),Qx(209,"Cor quando selecionado"),og(),Il(210,"td")(211,"code"),Qx(212,"var(--color-action-default)"),og()()(),Il(213,"tr")(214,"td")(215,"strong"),Qx(216,"Disabled"),og()(),zl(217,"td")(218,"td"),og(),Il(219,"tr")(220,"td")(221,"code"),Qx(222,"--color-unchecked-disabled"),og()(),Il(223,"td"),Qx(224,"Cor pricipal quando n\xE3o selecionado no estado disabled"),og(),Il(225,"td")(226,"code"),Qx(227,"var(--color-neutral-light-30)"),og()()(),Il(228,"tr")(229,"td")(230,"code"),Qx(231,"--color-checked-disabled"),og()(),Il(232,"td"),Qx(233,"Cor pricipal quando selecionado no estado disabled"),og(),Il(234,"td")(235,"code"),Qx(236,"var(--color-neutral-dark-70)"),og()()()()()(),Il(237,"div",15)(238,"h4",16),Qx(239,"Seletor"),og(),Il(240,"pre",17),Qx(241,`<po-radio-group
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
`),og()(),Il(242,"h4",18),Qx(243,"Propriedades"),og(),Il(244,"table",19)(245,"tr",20)(246,"th",21),Qx(247,"Nome"),og(),Il(248,"th",21),Qx(249,"Tipo"),og(),Il(250,"th",21),Qx(251,"Padr\xE3o"),og(),Il(252,"th",21),Qx(253,"Descri\xE7\xE3o"),og()(),Il(254,"tr",22)(255,"td",23)(256,"div",24)(257,"span",25),Qx(258," (p-additional-help)"),zl(259,"br"),og()(),Il(260,"div",26),Qx(261,"Deprecated"),og()(),Il(262,"td",27)(263,"code",28),Qx(264,"EventEmitter"),og()(),Il(265,"td",29),Qx(266,"-"),og(),Il(267,"td",30)(268,"em")(269,"strong"),Qx(270,"(opcional)"),og()(),Il(271,"p"),Qx(272,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),og(),Il(273,"blockquote")(274,"p"),Qx(275,"Essa propriedade est\xE1 "),Il(276,"strong"),Qx(277,"depreciada"),og(),Qx(278," e ser\xE1 removida na vers\xE3o "),Il(279,"code"),Qx(280,"23.x.x"),og(),Qx(281,". Recomendamos utilizar a propriedade "),Il(282,"code"),Qx(283,"p-helper"),og(),Qx(284," que oferece mais recursos e flexibilidade."),og()()()(),Il(285,"tr",22)(286,"td",23)(287,"div",31)(288,"span",32),Qx(289," p-additional-help-tooltip"),zl(290,"br"),og()(),Il(291,"div",26),Qx(292,"Deprecated"),og()(),Il(293,"td",27)(294,"code",33),Qx(295,"string"),og()(),Il(296,"td",29),Qx(297,"-"),og(),Il(298,"td",30)(299,"em")(300,"strong"),Qx(301,"(opcional)"),og()(),Il(302,"p"),Qx(303,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),Il(304,"code"),Qx(305,"po-helper"),og(),Qx(306,`.
`),Il(307,"strong"),Qx(308,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),og()(),Il(309,"blockquote")(310,"p"),Qx(311,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),og()(),Il(312,"blockquote")(313,"p"),Qx(314,"Essa propriedade est\xE1 "),Il(315,"strong"),Qx(316,"depreciada"),og(),Qx(317," e ser\xE1 removida na vers\xE3o "),Il(318,"code"),Qx(319,"23.x.x"),og(),Qx(320,". Recomendamos utilizar a propriedade "),Il(321,"code"),Qx(322,"p-helper"),og(),Qx(323," que oferece mais recursos e flexibilidade."),og()()()(),Il(324,"tr",22)(325,"td",23)(326,"div",31)(327,"span",32),Qx(328," p-append-in-body"),zl(329,"br"),og()()(),Il(330,"td",27)(331,"code",34),Qx(332,"boolean"),og()(),Il(333,"td",29)(334,"p")(335,"code"),Qx(336,"false"),og()()(),Il(337,"td",30)(338,"em")(339,"strong"),Qx(340,"(opcional)"),og()(),Il(341,"p"),Qx(342,"Define que o popover ("),Il(343,"code"),Qx(344,"p-helper"),og(),Qx(345," e/ou "),Il(346,"code"),Qx(347,"p-error-limit"),og(),Qx(348,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),og(),Il(349,"blockquote")(350,"p"),Qx(351,"Quando utilizado com "),Il(352,"code"),Qx(353,"p-helper"),og(),Qx(354,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),og()()()(),Il(355,"tr",22)(356,"td",23)(357,"div",31)(358,"span",32),Qx(359," p-auto-focus"),zl(360,"br"),og()()(),Il(361,"td",27)(362,"code",34),Qx(363,"boolean"),og()(),Il(364,"td",29)(365,"p")(366,"code"),Qx(367,"false"),og()()(),Il(368,"td",30)(369,"em")(370,"strong"),Qx(371,"(opcional)"),og()(),Il(372,"p"),Qx(373,"Aplica foco no elemento ao ser iniciado."),og(),Il(374,"blockquote")(375,"p"),Qx(376,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),og()()()(),Il(377,"tr",22)(378,"td",23)(379,"div",24)(380,"span",25),Qx(381," (p-change)"),zl(382,"br"),og()()(),Il(383,"td",27)(384,"code",28),Qx(385,"EventEmitter"),og()(),Il(386,"td",29),Qx(387,"-"),og(),Il(388,"td",30)(389,"em")(390,"strong"),Qx(391,"(opcional)"),og()(),Il(392,"p"),Qx(393,"Evento ao alterar valor do campo."),og()()(),Il(394,"tr",22)(395,"td",23)(396,"div",31)(397,"span",32),Qx(398," p-columns"),zl(399,"br"),og()()(),Il(400,"td",27)(401,"code",35),Qx(402,"number"),og()(),Il(403,"td",29)(404,"p")(405,"code"),Qx(406,"2"),og()()(),Il(407,"td",30)(408,"em")(409,"strong"),Qx(410,"(opcional)"),og()(),Il(411,"p"),Qx(412,"Define a quantidade de colunas para exibi\xE7\xE3o das op\xE7\xF5es."),og(),Il(413,"p")(414,"strong"),Qx(415,"Considera\xE7\xF5es:"),og()(),Il(416,"ul")(417,"li"),Qx(418,"\xC9 poss\xEDvel exibir as op\xE7\xF5es entre "),Il(419,"code"),Qx(420,"1"),og(),Qx(421," e "),Il(422,"code"),Qx(423,"4"),og(),Qx(424," colunas."),og(),Il(425,"li"),Qx(426,"O n\xFAmero m\xE1ximo de colunas \xE9 invari\xE1vel nas seguintes resolu\xE7\xF5es:"),Il(427,"ul")(428,"li")(429,"code"),Qx(430,"sm"),og(),Qx(431,": "),Il(432,"code"),Qx(433,"1"),og()(),Il(434,"li")(435,"code"),Qx(436,"md"),og(),Qx(437,": "),Il(438,"code"),Qx(439,"2"),og()()()()()()(),Il(440,"tr",22)(441,"td",23)(442,"div",31)(443,"span",32),Qx(444," p-compact-label"),zl(445,"br"),og()()(),Il(446,"td",27)(447,"code",34),Qx(448,"boolean"),og()(),Il(449,"td",29)(450,"p")(451,"code"),Qx(452,"false"),og()()(),Il(453,"td",30)(454,"em")(455,"strong"),Qx(456,"(opcional)"),og()(),Il(457,"p"),Qx(458,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),og(),Il(459,"p"),Qx(460,"Quando habilitado ("),Il(461,"code"),Qx(462,"true"),og(),Qx(463,"), o modo compacto afeta o conjunto composto por:"),og(),Il(464,"ul")(465,"li")(466,"code"),Qx(467,"po-label"),og()(),Il(468,"li")(469,"code"),Qx(470,"p-requirement (showRequired)"),og()(),Il(471,"li")(472,"code"),Qx(473,"po-helper"),og()()(),Il(474,"p"),Qx(475,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),og(),Il(476,"p"),Qx(477,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),og(),Il(478,"ul")(479,"li")(480,"code"),Qx(481,"--field-container-title-justify"),og()(),Il(482,"li")(483,"code"),Qx(484,"--field-container-title-flex"),og()()(),Il(485,"p"),Qx(486,"Exemplo:"),og(),Il(487,"pre")(488,"code"),Qx(489,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),og()(),Il(490,"p"),Qx(491,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),og()()(),Il(492,"tr",22)(493,"td",23)(494,"div",31)(495,"span",32),Qx(496," p-disabled"),zl(497,"br"),og()()(),Il(498,"td",27)(499,"code",34),Qx(500,"boolean"),og()(),Il(501,"td",29)(502,"p")(503,"code"),Qx(504,"false"),og()()(),Il(505,"td",30)(506,"em")(507,"strong"),Qx(508,"(opcional)"),og()(),Il(509,"p"),Qx(510,"Indica que o campo ser\xE1 desabilitado."),og()()(),Il(511,"tr",22)(512,"td",23)(513,"div",31)(514,"span",32),Qx(515," p-error-limit"),zl(516,"br"),og()()(),Il(517,"td",27)(518,"code",34),Qx(519,"boolean"),og()(),Il(520,"td",29)(521,"p")(522,"code"),Qx(523,"false"),og()()(),Il(524,"td",30)(525,"em")(526,"strong"),Qx(527,"(opcional)"),og()(),Il(528,"p"),Qx(529,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),og(),Il(530,"blockquote")(531,"p"),Qx(532,"Caso essa propriedade seja definida como "),Il(533,"code"),Qx(534,"true"),og(),Qx(535,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),og()()()(),Il(536,"tr",22)(537,"td",23)(538,"div",31)(539,"span",32),Qx(540," p-field-error-message"),zl(541,"br"),og()()(),Il(542,"td",27)(543,"code",33),Qx(544,"string"),og()(),Il(545,"td",29),Qx(546,"-"),og(),Il(547,"td",30)(548,"em")(549,"strong"),Qx(550,"(opcional)"),og()(),Il(551,"p"),Qx(552,"Exibe a mensagem setada se o campo estiver vazio e for requerido."),og(),Il(553,"blockquote")(554,"p"),Qx(555,"Necess\xE1rio que a propriedade "),Il(556,"code"),Qx(557,"p-required"),og(),Qx(558," esteja habilitada."),og()()()(),Il(559,"tr",22)(560,"td",23)(561,"div",31)(562,"span",32),Qx(563," p-help"),zl(564,"br"),og()()(),Il(565,"td",27)(566,"code",33),Qx(567,"string"),og()(),Il(568,"td",29),Qx(569,"-"),og(),Il(570,"td",30)(571,"em")(572,"strong"),Qx(573,"(opcional)"),og()(),Il(574,"p"),Qx(575,"Texto de apoio do campo."),og()()(),Il(576,"tr",22)(577,"td",23)(578,"div",24)(579,"span",25),Qx(580," (p-keydown)"),zl(581,"br"),og()()(),Il(582,"td",27)(583,"code",28),Qx(584,"EventEmitter"),og()(),Il(585,"td",29),Qx(586,"-"),og(),Il(587,"td",30)(588,"em")(589,"strong"),Qx(590,"(opcional)"),og()(),Il(591,"p"),Qx(592,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Il(593,"code"),Qx(594,"KeyboardEvent"),og(),Qx(595," com informa\xE7\xF5es sobre a tecla."),og()()(),Il(596,"tr",22)(597,"td",23)(598,"div",31)(599,"span",32),Qx(600," p-label"),zl(601,"br"),og()()(),Il(602,"td",27)(603,"code",33),Qx(604,"string"),og()(),Il(605,"td",29),Qx(606,"-"),og(),Il(607,"td",30)(608,"em")(609,"strong"),Qx(610,"(opcional)"),og()(),Il(611,"p"),Qx(612,"Label do campo."),og()()(),Il(613,"tr",22)(614,"td",23)(615,"div",31)(616,"span",32),Qx(617," p-label-text-wrap"),zl(618,"br"),og()()(),Il(619,"td",27)(620,"code",34),Qx(621,"boolean"),og()(),Il(622,"td",29)(623,"p")(624,"code"),Qx(625,"false"),og()()(),Il(626,"td",30)(627,"em")(628,"strong"),Qx(629,"(opcional)"),og()(),Il(630,"p"),Qx(631,"Habilita a quebra autom\xE1tica do texto da propriedade "),Il(632,"code"),Qx(633,"p-label"),og(),Qx(634,". Quando "),Il(635,"code"),Qx(636,"p-label-text-wrap"),og(),Qx(637,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),og()()(),Il(638,"tr",22)(639,"td",23)(640,"div",31)(641,"span",32),Qx(642," name"),zl(643,"br"),og()()(),Il(644,"td",27)(645,"code",33),Qx(646,"string"),og()(),Il(647,"td",29),Qx(648,"-"),og(),Il(649,"td",30)(650,"p"),Qx(651,"Nome das op\xE7\xF5es."),og()()(),Il(652,"tr",22)(653,"td",23)(654,"div",31)(655,"span",32),Qx(656," p-optional"),zl(657,"br"),og()()(),Il(658,"td",27)(659,"code",34),Qx(660,"boolean"),og()(),Il(661,"td",29)(662,"p")(663,"code"),Qx(664,"false"),og()()(),Il(665,"td",30)(666,"em")(667,"strong"),Qx(668,"(opcional)"),og()(),Il(669,"p"),Qx(670,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),og(),Il(671,"blockquote")(672,"p"),Qx(673,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),og()(),Il(674,"ul")(675,"li"),Qx(676,"O campo conter "),Il(677,"code"),Qx(678,"p-required"),og(),Qx(679,";"),og(),Il(680,"li"),Qx(681,"N\xE3o possuir "),Il(682,"code"),Qx(683,"p-help"),og(),Qx(684," e/ou "),Il(685,"code"),Qx(686,"p-label"),og(),Qx(687,"."),og()()()(),Il(688,"tr",22)(689,"td",23)(690,"div",31)(691,"span",32),Qx(692," p-options"),zl(693,"br"),og()()(),Il(694,"td",27)(695,"code",36),Qx(696,"PoRadioGroupOption[]"),og()(),Il(697,"td",29),Qx(698,"-"),og(),Il(699,"td",30)(700,"p"),Qx(701,`Lista de op\xE7\xF5es que ser\xE3o exibidas.
Nesta propriedade deve ser definido um array de objetos que implementam a interface PoRadioGroupOption.`),og()()(),Il(702,"tr",22)(703,"td",23)(704,"div",31)(705,"span",32),Qx(706," p-helper"),zl(707,"br"),og()()(),Il(708,"td",27)(709,"code",37),Qx(710,"PoHelperOptions "),og(),Il(711,"code",33),Qx(712," string"),og()(),Il(713,"td",29),Qx(714,"-"),og(),Il(715,"td",30)(716,"em")(717,"strong"),Qx(718,"(opcional)"),og()(),Il(719,"p"),Qx(720,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label quando a propriedade "),Il(721,"code"),Qx(722,"p-label"),og(),Qx(723," for definida, ou, ao lado do componente na aus\xEAncia da propriedade "),Il(724,"code"),Qx(725,"p-label"),og(),Qx(726,"."),og(),Il(727,"blockquote")(728,"p"),Qx(729,"Para mais informa\xE7\xF5es acesse: "),Il(730,"a",38),Qx(731,"https://po-ui.io/documentation/po-helper"),og(),Qx(732,"."),og()(),Il(733,"blockquote")(734,"p"),Qx(735,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),Il(736,"code"),Qx(737,"p-additional-help-tooltip"),og(),Qx(738," e "),Il(739,"code"),Qx(740,"p-additional-help"),og(),Qx(741,") ser\xE1 ignorado."),og()()()(),Il(742,"tr",22)(743,"td",23)(744,"div",31)(745,"span",32),Qx(746," p-required"),zl(747,"br"),og()()(),Il(748,"td",27)(749,"code",34),Qx(750,"boolean"),og()(),Il(751,"td",29)(752,"p")(753,"code"),Qx(754,"false"),og()()(),Il(755,"td",30)(756,"em")(757,"strong"),Qx(758,"(opcional)"),og()(),Il(759,"p"),Qx(760,"Define que o campo ser\xE1 obrigat\xF3rio."),og()()(),Il(761,"tr",22)(762,"td",23)(763,"div",31)(764,"span",32),Qx(765," p-show-required"),zl(766,"br"),og()()(),Il(767,"td",27)(768,"code",34),Qx(769,"boolean"),og()(),Il(770,"td",29),Qx(771,"-"),og(),Il(772,"td",30)(773,"p"),Qx(774,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),og(),Il(775,"blockquote")(776,"p"),Qx(777,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),og()(),Il(778,"ul")(779,"li"),Qx(780,"N\xE3o possuir "),Il(781,"code"),Qx(782,"p-help"),og(),Qx(783," e/ou "),Il(784,"code"),Qx(785,"p-label"),og(),Qx(786,"."),og()()()(),Il(787,"tr",22)(788,"td",23)(789,"div",31)(790,"span",32),Qx(791," p-size"),zl(792,"br"),og()()(),Il(793,"td",27)(794,"code",33),Qx(795,"string"),og()(),Il(796,"td",29)(797,"p")(798,"code"),Qx(799,"medium"),og()()(),Il(800,"td",30)(801,"em")(802,"strong"),Qx(803,"(opcional)"),og()(),Il(804,"p"),Qx(805,"Define o tamanho dos radios do componente:"),og(),Il(806,"ul")(807,"li")(808,"code"),Qx(809,"small"),og(),Qx(810,": 16x16 (dispon\xEDvel apenas para acessibilidade AA)."),og(),Il(811,"li")(812,"code"),Qx(813,"medium"),og(),Qx(814,": 24x24."),og()(),Il(815,"blockquote")(816,"p"),Qx(817,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Il(818,"code"),Qx(819,"medium"),og(),Qx(820,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Il(821,"a",39),Qx(822,"po-theme"),og(),Qx(823,"."),og()()()()(),Il(824,"h3",18),Qx(825,"M\xE9todos"),og(),Il(826,"table",40)(827,"tr",22)(828,"th",41)(829,"div",31)(830,"h4")(831,"span",32),Qx(832," focus "),og()()()()(),Il(833,"tr",30)(834,"td",30)(835,"p"),Qx(836,"Fun\xE7\xE3o que atribui foco ao componente."),og(),Il(837,"p"),Qx(838,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),og(),Il(839,"pre")(840,"code"),Qx(841,`import { PoRadioGroupComponent } from '@po-ui/ng-components';

...

@ViewChild(PoRadioGroupComponent, { static: true }) radio: PoRadioGroupComponent;

focusRadio() {
  this.radio.focus();
}
`),og()()()()(),zl(842,"br"),Il(843,"table",40)(844,"tr",22)(845,"th",41)(846,"div",31)(847,"h4")(848,"span",32),Qx(849," showAdditionalHelp "),og()()()()(),Il(850,"tr",30)(851,"td",30)(852,"p"),Qx(853,"M\xE9todo que exibe "),Il(854,"code"),Qx(855,"p-helper"),og(),Qx(856," ou executa a a\xE7\xE3o definida em "),Il(857,"code"),Qx(858,"p-helper{eventOnClick}"),og(),Qx(859," ou em "),Il(860,"code"),Qx(861,"p-additionalHelp"),og(),Qx(862,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Il(863,"code"),Qx(864,"p-keydown"),og(),Qx(865,"."),og(),Il(866,"blockquote")(867,"p"),Qx(868,"Exibe ou oculta o conte\xFAdo do componente "),Il(869,"code"),Qx(870,"po-helper"),og(),Qx(871," quando o componente estiver com foco."),og()(),Il(872,"pre")(873,"code"),Qx(874,`// Exemplo com p-label e p-helper
<po-radio-group
 #radioGroup
 ...
 p-label="Label do radioGroup"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, radioGroup)"
></po-radio-group>
`),og()(),Il(875,"pre")(876,"code"),Qx(877,`...
onKeyDown(event: KeyboardEvent, inp: PoRadioGroupComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),og()()()()(),zl(878,"br"),Il(879,"h3"),Qx(880,"Interfaces"),og(),Il(881,"h4",42)(882,"code",5),Qx(883,"PoRadioGroupOption"),og()(),Il(884,"div",2)(885,"p"),Qx(886,"Interface para as a\xE7\xF5es do componente po-radio-group."),og()(),Il(887,"h4",18),Qx(888,"Propriedades"),og(),Il(889,"table",19)(890,"tr",20)(891,"th",21),Qx(892,"Nome"),og(),Il(893,"th",21),Qx(894,"Tipo"),og(),Il(895,"th",21),Qx(896,"Descri\xE7\xE3o"),og()(),Il(897,"tr",22)(898,"td",23)(899,"div",31)(900,"span",32),Qx(901," disabled"),zl(902,"br"),og()()(),Il(903,"td",27)(904,"code",34),Qx(905,"boolean"),og()(),Il(906,"td",30)(907,"em")(908,"strong"),Qx(909,"(opcional)"),og()(),Il(910,"p"),Qx(911,"Desabilita o radio."),og()()(),Il(912,"tr",22)(913,"td",23)(914,"div",31)(915,"span",32),Qx(916," label"),zl(917,"br"),og()()(),Il(918,"td",27)(919,"code",33),Qx(920,"string"),og()(),Il(921,"td",30)(922,"p"),Qx(923,"Texto do radio."),og()()(),Il(924,"tr",22)(925,"td",23)(926,"div",31)(927,"span",32),Qx(928," value"),zl(929,"br"),og()()(),Il(930,"td",27)(931,"code",33),Qx(932,"string "),og(),Il(933,"code",35),Qx(934," number"),og()(),Il(935,"td",30)(936,"p"),Qx(937,"Valor do radio."),og()()()()());},dependencies:[Ka],encapsulation:2})}return i})();var fe=(()=>{class i{route;router;sub;hidePoWebSample=true;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(d,r){this.route=d,this.router=r;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let r=d.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:"merge"}),this.activeTab=d;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(r){return new(r||i)(C(Xn),C(En))};static \u0275cmp=Un({type:i,selectors:[["ng-component"]],standalone:false,decls:9,vars:4,consts:[["p-title","Radio Group",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,n){r&1&&(Il(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return n.changeTab("doc")}),zl(3,"sample-po-radio-group-doc"),og(),Il(4,"po-tab",3),ft("p-click",function(){return n.changeTab("web")}),zl(5,"sample-po-radio-group-basic-view")(6,"sample-po-radio-group-labs-view")(7,"sample-po-radio-group-translator-view")(8,"sample-po-radio-group-translator-reactive-form-view"),og()()()),r&2&&(nw("p-actions",n.actions),Lp(2),nw("p-active",n.activeTab==="doc"),Lp(2),nw("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"));},dependencies:[cNe,qme,Yme,me,ce,Ee,he,Se],encapsulation:2})}return i})();var Be=[{path:"",component:fe}],xe=(()=>{class i{static \u0275fac=function(r){return new(r||i)};static \u0275mod=fe$1({type:i});static \u0275inj=ue$1({imports:[uL.forChild(Be),uL]})}return i})();var bt=(()=>{class i{static \u0275fac=function(r){return new(r||i)};static \u0275mod=fe$1({type:i});static \u0275inj=ue$1({imports:[sr,xe]})}return i})();export{bt as DocPoRadioGroupModule};