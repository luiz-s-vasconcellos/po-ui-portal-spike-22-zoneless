import {f as fe$1,u as ue$1,s as sr,h as hL,w,c3 as Xn,E as En,U as Un,a as f,cM as Q9,cN as lm,c8 as wde,H as Wl,Q as nw,bM as hN,a7 as dN,an as CO,aH as Ka,b8 as Bme,b9 as qme,F as Sl,z as eN,J as og,a1 as ft,L as Lp,ar as $x,au as dg,bs as fN,aX as Z9,aF as G9,aY as q9,aG as _k,aZ as mk,b0 as Qt,b1 as mv,c4 as b3,b4 as L3,bH as M3,c9 as Ghe,aB as wx,aM as ww,aN as e0,bd as Nx,aO as Ew,aP as n0,aJ as Hhe,cQ as Mk,cR as Sk,a3 as rNe,aD as Ky,aT as nN,aE as Xy}from'./main-WP3NAV7C.js';var Ce=()=>({label:"Option 1",value:"1"}),we=()=>({label:"Option 2",value:"2"}),ye=(i,ve)=>[i,ve],de=(()=>{class i{static \u0275fac=function(r){return new(r||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-radio-group-basic"]],standalone:false,decls:1,vars:6,consts:[["name","radioGroupBasic","p-label","PO Radio Group",3,"p-options"]],template:function(r,n){r&1&&Wl(0,"po-radio-group",0),r&2&&nw("p-options",hN(3,ye,dN(1,Ce),dN(2,we)));},dependencies:[wde],encapsulation:2,changeDetection:1})}return i})();var Te=i=>({"docs-sample-code-tabs":i}),me=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-radio-group-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Radio Group Basic"),og(),Sl(4,"a",2),ft("click",function(){return n.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-radio-group-basic/sample-po-radio-group-basic.component.html"),og(),Sl(13,"pre",7),eN(14,`<po-radio-group
  name="radioGroupBasic"
  p-label="PO Radio Group"
  [p-options]="[
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' }
  ]"
>
</po-radio-group>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-radio-group-basic/sample-po-radio-group-basic.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-radio-group-basic',
  templateUrl: './sample-po-radio-group-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoRadioGroupBasicComponent {}
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-radio-group-basic"),og(),Wl(23,"hr")),r&2&&(Lp(5),$x("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,Te,n.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,de],encapsulation:2})}return i})();var ue=(()=>{class i{helperText;columns;event;help;label;option;options;properties;radioGroup;fieldErrorMessage;size;columnOptions=[{label:"1 column",value:1},{label:"2 columns",value:2},{label:"3 columns",value:3},{label:"4 columns",value:4}];propertiesOptions=[{value:"disabled",label:"Disabled"},{value:"optional",label:"Optional"},{value:"required",label:"Required"},{value:"showRequired",label:"Show Required"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"},{value:"compactLabel",label:"Compact Label"}];sizesOptions=[{label:"Small",value:"small"},{label:"Medium",value:"medium"},{label:"Large",value:"large"}];ngOnInit(){this.restore();}addOption(){this.options.push(this.option),this.option=this.getNewOption();}changeEvent(d){this.event=d;}restore(){this.helperText="",this.event="",this.radioGroup=void 0,this.properties=[],this.fieldErrorMessage="",this.size="medium",this.option=this.getNewOption(),this.options=[];}getNewOption(){return {label:void 0,value:void 0}}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-radio-group-labs"]],standalone:false,decls:26,vars:31,consts:[["optionForm","ngForm"],["propertiesForm","ngForm"],["name","radioGroupLabs",3,"ngModelChange","p-change","p-keydown","ngModel","p-helper","p-columns","p-disabled","p-help","p-label","p-optional","p-options","p-required","p-field-error-message","p-show-required","p-size","p-error-limit","p-label-text-wrap","p-compact-label"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","optionLabel","p-label","Option Label","p-required","",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel"],["name","optionValue","p-label","Option Value","p-required","",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel"],["name","optionDisabled","p-label","Option Disabled",1,"po-lg-4",3,"ngModelChange","ngModel"],["p-label","Add Option",1,"po-md-6","po-lg-3",3,"p-click","p-disabled"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","fieldErrorMessage","p-clean","","p-label","Field Error Message",1,"po-md-6",3,"ngModelChange","ngModel"],["name","columns","p-columns","4","p-label","Columns",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"click"]],template:function(r,n){if(r&1){let m=wx();Sl(0,"po-radio-group",2),ww("ngModelChange",function(l){return Ky(m),nN(n.radioGroup,l)||(n.radioGroup=l),Xy(l)}),ft("p-change",function(){return n.changeEvent("p-change")})("p-keydown",function(){return n.changeEvent("p-keydown")}),og(),e0(),Wl(1,"po-divider"),Sl(2,"div",3),Wl(3,"po-info",4)(4,"po-info",5),og(),Wl(5,"po-divider"),Sl(6,"form",null,0)(8,"div",3)(9,"po-input",6),ww("ngModelChange",function(l){return Ky(m),nN(n.option.label,l)||(n.option.label=l),Xy(l)}),og(),e0(),Sl(10,"po-input",7),ww("ngModelChange",function(l){return Ky(m),nN(n.option.value,l)||(n.option.value=l),Xy(l)}),og(),e0(),Sl(11,"po-switch",8),ww("ngModelChange",function(l){return Ky(m),nN(n.option.disabled,l)||(n.option.disabled=l),Xy(l)}),og(),e0(),og(),Sl(12,"div",3)(13,"po-button",9),ft("p-click",function(){Ky(m);let l=Nx(7);return n.addOption(),Xy(l.reset())}),og()()(),Wl(14,"po-divider"),Sl(15,"form",null,1)(17,"po-input",10),ww("ngModelChange",function(l){return Ky(m),nN(n.label,l)||(n.label=l),Xy(l)}),og(),e0(),Sl(18,"po-input",11),ww("ngModelChange",function(l){return Ky(m),nN(n.help,l)||(n.help=l),Xy(l)}),og(),e0(),Sl(19,"po-input",12),ww("ngModelChange",function(l){return Ky(m),nN(n.helperText,l)||(n.helperText=l),Xy(l)}),og(),e0(),Sl(20,"po-input",13),ww("ngModelChange",function(l){return Ky(m),nN(n.fieldErrorMessage,l)||(n.fieldErrorMessage=l),Xy(l)}),og(),e0(),Sl(21,"po-radio-group",14),ww("ngModelChange",function(l){return Ky(m),nN(n.columns,l)||(n.columns=l),Xy(l)}),og(),e0(),Sl(22,"po-checkbox-group",15),ww("ngModelChange",function(l){return Ky(m),nN(n.properties,l)||(n.properties=l),Xy(l)}),og(),e0(),Sl(23,"po-radio-group",16),ww("ngModelChange",function(l){return Ky(m),nN(n.size,l)||(n.size=l),Xy(l)}),og(),e0(),Sl(24,"div",3)(25,"po-button",17),ft("click",function(){return Ky(m),Nx(16).reset(),Xy(n.restore())}),og()()();}if(r&2){let m=Nx(7);Ew("ngModel",n.radioGroup),nw("p-helper",n.helperText)("p-columns",n.columns)("p-disabled",n.properties.includes("disabled"))("p-help",n.help)("p-label",n.label)("p-optional",n.properties.includes("optional"))("p-options",n.options)("p-required",n.properties.includes("required"))("p-field-error-message",n.fieldErrorMessage)("p-show-required",n.properties.includes("showRequired"))("p-size",n.size)("p-error-limit",n.properties==null?null:n.properties.includes("errorLimit"))("p-label-text-wrap",n.properties==null?null:n.properties.includes("labelTextWrap"))("p-compact-label",n.properties==null?null:n.properties.includes("compactLabel")),n0(),Lp(3),nw("p-value",n.radioGroup),Lp(),nw("p-value",n.event),Lp(5),Ew("ngModel",n.option.label),n0(),Lp(),Ew("ngModel",n.option.value),n0(),Lp(),Ew("ngModel",n.option.disabled),n0(),Lp(2),nw("p-disabled",m.invalid),Lp(4),Ew("ngModel",n.label),n0(),Lp(),Ew("ngModel",n.help),n0(),Lp(),Ew("ngModel",n.helperText),n0(),Lp(),Ew("ngModel",n.fieldErrorMessage),n0(),Lp(),Ew("ngModel",n.columns),nw("p-options",n.columnOptions),n0(),Lp(),Ew("ngModel",n.properties),nw("p-options",n.propertiesOptions),n0(),Lp(),Ew("ngModel",n.size),nw("p-options",n.sizesOptions),n0();}},dependencies:[Z9,G9,q9,_k,mk,Qt,mv,b3,L3,wde,M3,Ghe],encapsulation:2,changeDetection:1})}return i})();var Re=i=>({"docs-sample-code-tabs":i}),ce=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-radio-group-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Radio Group Labs"),og(),Sl(4,"a",2),ft("click",function(){return n.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-radio-group-labs/sample-po-radio-group-labs.component.html"),og(),Sl(13,"pre",7),eN(14,`<po-radio-group
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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-radio-group-labs/sample-po-radio-group-labs.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-radio-group-labs"),og(),Wl(23,"hr")),r&2&&(Lp(5),$x("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,Re,n.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,ue],encapsulation:2})}return i})();var ge=(()=>{class i{language="es";original="";translated="";languageOptions=[{label:"Spanish",value:"es"},{label:"English",value:"en"}];optionsList=[{value:"1",label:"Ol\xE1"},{value:"2",label:"Tchau"},{value:"3",label:"Estrangeiro"},{value:"4",label:"Alinhamento"},{value:"5",label:"Vis\xE3o"},{value:"6",label:"Livro"}];wordsOptions=[{id:"1",en:"Hello",es:"Hola"},{id:"2",en:"Bye",es:"Hasta luego"},{id:"3",en:"Foreign",es:"Extranjero"},{id:"4",en:"Alignment",es:"Alineaci\xF3n"},{id:"5",en:"Vision",es:"Vista"},{id:"6",en:"Book",es:"Libro"}];changeLanguage(d){let r=this.wordsOptions.find(n=>n.id===this.original);r&&(this.translated=r[d||this.language]);}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-radio-group-translator"]],standalone:false,decls:6,vars:5,consts:[["f","ngForm"],[1,"po-row"],["name","language","p-label","Select a Language","p-required","",1,"po-lg-4",3,"ngModelChange","p-change","ngModel","p-options"],["name","original","p-label","Original Text (Portuguese)","p-required","",1,"po-lg-4",3,"ngModelChange","p-change","ngModel","p-options"],["name","translated","p-label","Translated Text","p-readonly","","p-required","",1,"po-lg-4",3,"ngModelChange","ngModel"]],template:function(r,n){if(r&1){let m=wx();Sl(0,"form",null,0)(2,"div",1)(3,"po-radio-group",2),ww("ngModelChange",function(l){return Ky(m),nN(n.language,l)||(n.language=l),Xy(l)}),ft("p-change",function(l){return n.changeLanguage(l)}),og(),e0(),Sl(4,"po-select",3),ww("ngModelChange",function(l){return Ky(m),nN(n.original,l)||(n.original=l),Xy(l)}),ft("p-change",function(l){return n.changeLanguage(l)}),og(),e0(),Sl(5,"po-input",4),ww("ngModelChange",function(l){return Ky(m),nN(n.translated,l)||(n.translated=l),Xy(l)}),og(),e0(),og()();}r&2&&(Lp(3),Ew("ngModel",n.language),nw("p-options",n.languageOptions),n0(),Lp(),Ew("ngModel",n.original),nw("p-options",n.optionsList),n0(),Lp(),Ew("ngModel",n.translated),n0());},dependencies:[Z9,G9,q9,_k,mk,L3,wde,Hhe],encapsulation:2,changeDetection:1})}return i})();var Le=i=>({"docs-sample-code-tabs":i}),Ee=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-radio-group-translator-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Radio Group - Translator"),og(),Sl(4,"a",2),ft("click",function(){return n.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-radio-group-translator/sample-po-radio-group-translator.component.html"),og(),Sl(13,"pre",7),eN(14,`<form #f="ngForm">
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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-radio-group-translator/sample-po-radio-group-translator.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-radio-group-translator"),og(),Wl(23,"hr")),r&2&&(Lp(5),$x("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,Le,n.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,ge],encapsulation:2})}return i})();var be=(()=>{class i{formBuilder=f(Q9);translatorForm;languageOptions=[{label:"Spanish",value:"es"},{label:"English",value:"en"}];optionsList=[{value:"1",label:"Ol\xE1"},{value:"2",label:"Tchau"},{value:"3",label:"Estrangeiro"},{value:"4",label:"Alinhamento"},{value:"5",label:"Vis\xE3o"},{value:"6",label:"Livro"}];wordsOptions=[{id:"1",en:"Hello",es:"Hola"},{id:"2",en:"Bye",es:"Hasta luego"},{id:"3",en:"Foreign",es:"Extranjero"},{id:"4",en:"Alignment",es:"Alineaci\xF3n"},{id:"5",en:"Vision",es:"Vista"},{id:"6",en:"Book",es:"Libro"}];ngOnInit(){this.translatorForm=this.formBuilder.group({language:["es",lm.required],original:[void 0,lm.required],translated:[void 0,lm.required]});}changeLanguage(){let d=this.translatorForm.value.language,r=this.translatorForm.value.original,n=this.wordsOptions.find(m=>m.id===r);n&&this.translatorForm.patchValue({translated:n[d]});}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-radio-group-translator-reactive-form"]],standalone:false,decls:5,vars:3,consts:[[3,"formGroup"],[1,"po-row"],["name","language","formControlName","language","p-label","Select a Language","p-required","",1,"po-lg-4",3,"p-change","p-options"],["name","original","formControlName","original","p-label","Original Text (Portuguese)","p-required","",1,"po-lg-4",3,"p-change","p-options"],["name","translated","formControlName","translated","p-label","Translated Text","p-readonly","","p-required","",1,"po-lg-4"]],template:function(r,n){r&1&&(Sl(0,"form",0)(1,"div",1)(2,"po-radio-group",2),ft("p-change",function(){return n.changeLanguage()}),og(),e0(),Sl(3,"po-select",3),ft("p-change",function(){return n.changeLanguage()}),og(),e0(),Wl(4,"po-input",4),e0(),og()()),r&2&&(nw("formGroup",n.translatorForm),Lp(2),nw("p-options",n.languageOptions),n0(),Lp(),nw("p-options",n.optionsList),n0(),Lp(),n0());},dependencies:[Z9,G9,q9,Mk,Sk,L3,wde,Hhe],encapsulation:2,changeDetection:1})}return i})();var De=i=>({"docs-sample-code-tabs":i}),he=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-radio-group-translator-reactive-form-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Radio Group - Translator Reactive Form"),og(),Sl(4,"a",2),ft("click",function(){return n.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-radio-group-translator-reactive-form/sample-po-radio-group-translator-reactive-form.component.html"),og(),Sl(13,"pre",7),eN(14,`<form [formGroup]="translatorForm">
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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-radio-group-translator-reactive-form/sample-po-radio-group-translator-reactive-form.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-radio-group-translator-reactive-form"),og(),Wl(23,"hr")),r&2&&(Lp(5),$x("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,De,n.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,be],encapsulation:2})}return i})();var Se=(()=>{class i{static \u0275fac=function(r){return new(r||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-radio-group-doc"]],standalone:false,decls:938,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-combo"],["href","/documentation/po-select"],["href","/documentation/po-checkbox-group"],["href","https://www.w3.org/WAI/WCAG21/Understanding/name-role-value"],["href","https://www.w3.org/WAI/WCAG21/Understanding/use-of-color"],["href","https://www.w3.org/TR/wai-aria-practices-1.1/#keyboard-interaction-3"],["href","https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-enhanced"],["href","https://doc.animaliads.io/docs/components/radio"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoRadioGroupOption[]"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-helper"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"]],template:function(r,n){r&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),eN(3,"import { PoFieldModule } from '@po-ui/ng-components';"),og()(),Sl(4,"div",2)(5,"p"),eN(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),og(),Sl(7,"blockquote")(8,"p"),eN(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),Sl(10,"code"),eN(11,"FormsModule"),og(),eN(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Sl(13,"code"),eN(14,"ReactiveFormsModule"),og(),eN(15,", ambos nativos do Angular."),og()()(),Sl(16,"h3",3),eN(17,"Componente"),og(),Sl(18,"h4",4)(19,"code",5),eN(20,"PoRadioGroupComponent"),og()(),Sl(21,"div",2)(22,"p"),eN(23,"O componente "),Sl(24,"code"),eN(25,"po-radio-group"),og(),eN(26,` deve ser utilizado para disponibilizar m\xFAltiplas op\xE7\xF5es ao usu\xE1rio, permitindo a ele que
selecione apenas uma delas. Seu uso \xE9 recomendado para um n\xFAmero pequeno de op\xE7\xF5es, caso contr\xE1rio, recomenda-se o uso
do `),Sl(27,"a",6)(28,"strong"),eN(29,"po-combo"),og()(),eN(30," ou "),Sl(31,"a",7)(32,"strong"),eN(33,"po-select"),og()(),eN(34,"."),og(),Sl(35,"p"),eN(36,`Este n\xE3o \xE9 um componente de multisele\xE7\xE3o, se for este o caso, deve-se utilizar o
`),Sl(37,"a",8)(38,"strong"),eN(39,"po-checkbox-group"),og()(),eN(40,"."),og(),Sl(41,"blockquote")(42,"p"),eN(43,"Ao passar um valor para o "),Sl(44,"em"),eN(45,"model"),og(),eN(46," que n\xE3o esteja na lista de op\xE7\xF5es, o mesmo ser\xE1 definido como "),Sl(47,"code"),eN(48,"undefined"),og(),eN(49,"."),og()(),Sl(50,"h4"),eN(51,"Acessibilidade tratada no componente interno "),Sl(52,"code"),eN(53,"po-radio"),og(),eN(54,":"),og(),Sl(55,"p"),eN(56,"Algumas diretrizes de acessibilidade j\xE1 s\xE3o tratadas no componente, internamente, e n\xE3o podem ser alteradas pelo propriet\xE1rio do conte\xFAdo. S\xE3o elas:"),og(),Sl(57,"ul")(58,"li"),eN(59,"O componente foi desenvolvido utilizando controles padr\xF5es HTML para permitir a identifica\xE7\xE3o do mesmo na interface por tecnologias assistivas. "),Sl(60,"a",9),eN(61,"WCAG 4.1.2: Name, Role, Value"),og()(),Sl(62,"li"),eN(63,"A cor n\xE3o deve ser o \xFAnico meio para diferenciar o radio button normal do selecionado, por isso deve-se manter uma diferen\xE7a visual entre os estados. "),Sl(64,"a",10),eN(65,"WGAG 1.4.1: Use of Color, 3.2.4: Consistent Identification"),og()(),Sl(66,"li"),eN(67,"Quando em foco, o componente \xE9 ativado usando as teclas de Espa\xE7o e Enter do teclado. "),Sl(68,"a",11),eN(69,"W3C WAI-ARIA 3.5 Button - Keyboard Interaction"),og()(),Sl(70,"li"),eN(71,"A \xE1rea do foco precisar ter uma espessura de pelo menos 2 pixels CSS e o foco n\xE3o pode ficar escondido por outros elementos da tela. "),Sl(72,"a",12),eN(73,"(WCAG 2.4.12: Focus Appearance"),og()()(),Sl(74,"p"),eN(75,"Conforme documenta\xE7\xE3o em: "),Sl(76,"a",13),eN(77,"https://doc.animaliads.io/docs/components/radio"),og()(),Sl(78,"h4"),eN(79,"Tokens customiz\xE1veis"),og(),Sl(80,"p"),eN(81,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS): "),Wl(82,"br"),eN(83,`
Obs: No componente Radio Group, a customiza\xE7\xE3o ocorre principalmente nos elementos `),Sl(84,"code"),eN(85,"po-radio"),og(),eN(86," que comp\xF5em o grupo de op\xE7\xF5es. "),Wl(87,"br"),eN(88,`
Portanto, ao aplicar estilos customizados, \xE9 importante focar na customiza\xE7\xE3o dos elementos `),Sl(89,"code"),eN(90,"po-radio"),og(),eN(91," em vez do pr\xF3prio "),Sl(92,"code"),eN(93,"po-radio-group"),og(),eN(94,"."),og(),Sl(95,"blockquote")(96,"p"),eN(97,"Para maiores informa\xE7\xF5es, acesse o guia "),Sl(98,"a",14),eN(99,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),eN(100,"."),og()(),Sl(101,"table")(102,"thead")(103,"tr")(104,"th"),eN(105,"Propriedade"),og(),Sl(106,"th"),eN(107,"Descri\xE7\xE3o"),og(),Sl(108,"th"),eN(109,"Valor Padr\xE3o"),og()()(),Sl(110,"tbody")(111,"tr")(112,"td")(113,"strong"),eN(114,"Default Values"),og()(),Wl(115,"td")(116,"td"),og(),Sl(117,"tr")(118,"td")(119,"code"),eN(120,"--border-color"),og()(),Sl(121,"td"),eN(122,"Cor da borda"),og(),Sl(123,"td")(124,"code"),eN(125,"var(--color-neutral-dark-70)"),og()()(),Sl(126,"tr")(127,"td")(128,"code"),eN(129,"--field-container-title-justify"),og()(),Sl(130,"td"),eN(131,"Alinhamento horizontal do t\xEDtulo ("),Sl(132,"code"),eN(133,"justify-content"),og(),eN(134,")"),og(),Sl(135,"td")(136,"code"),eN(137,"space-between"),og()()(),Sl(138,"tr")(139,"td")(140,"code"),eN(141,"--field-container-title-flex"),og()(),Sl(142,"td"),eN(143,"Flex do t\xEDtulo ("),Sl(144,"code"),eN(145,"flex"),og(),eN(146,")"),og(),Sl(147,"td")(148,"code"),eN(149,"1 auto"),og()()(),Sl(150,"tr")(151,"td")(152,"strong"),eN(153,"Hover"),og()(),Wl(154,"td")(155,"td"),og(),Sl(156,"tr")(157,"td")(158,"code"),eN(159,"--shadow-color-hover"),og()(),Sl(160,"td"),eN(161,"Cor da sombra no estado hover"),og(),Sl(162,"td")(163,"code"),eN(164,"var(--color-brand-01-lighter)"),og()()(),Sl(165,"tr")(166,"td")(167,"code"),eN(168,"--color-hover"),og()(),Sl(169,"td"),eN(170,"Cor principal no estado hover"),og(),Sl(171,"td")(172,"code"),eN(173,"var(--color-brand-01-dark)"),og()()(),Sl(174,"tr")(175,"td")(176,"strong"),eN(177,"Focused"),og()(),Wl(178,"td")(179,"td"),og(),Sl(180,"tr")(181,"td")(182,"code"),eN(183,"--outline-color-focused"),og()(),Sl(184,"td"),eN(185,"Cor do outline do estado de focus"),og(),Sl(186,"td")(187,"code"),eN(188,"var(--color-brand-01-darkest)"),og()()(),Sl(189,"tr")(190,"td")(191,"strong"),eN(192,"checked"),og()(),Wl(193,"td")(194,"td"),og(),Sl(195,"tr")(196,"td")(197,"code"),eN(198,"--color-unchecked"),og()(),Sl(199,"td"),eN(200,"Cor quando n\xE3o selecionado"),og(),Sl(201,"td")(202,"code"),eN(203,"var(--color-neutral-light-00)"),og()()(),Sl(204,"tr")(205,"td")(206,"code"),eN(207,"--color-checked"),og()(),Sl(208,"td"),eN(209,"Cor quando selecionado"),og(),Sl(210,"td")(211,"code"),eN(212,"var(--color-action-default)"),og()()(),Sl(213,"tr")(214,"td")(215,"strong"),eN(216,"Disabled"),og()(),Wl(217,"td")(218,"td"),og(),Sl(219,"tr")(220,"td")(221,"code"),eN(222,"--color-unchecked-disabled"),og()(),Sl(223,"td"),eN(224,"Cor pricipal quando n\xE3o selecionado no estado disabled"),og(),Sl(225,"td")(226,"code"),eN(227,"var(--color-neutral-light-30)"),og()()(),Sl(228,"tr")(229,"td")(230,"code"),eN(231,"--color-checked-disabled"),og()(),Sl(232,"td"),eN(233,"Cor pricipal quando selecionado no estado disabled"),og(),Sl(234,"td")(235,"code"),eN(236,"var(--color-neutral-dark-70)"),og()()()()()(),Sl(237,"div",15)(238,"h4",16),eN(239,"Seletor"),og(),Sl(240,"pre",17),eN(241,`<po-radio-group
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
`),og()(),Sl(242,"h4",18),eN(243,"Propriedades"),og(),Sl(244,"table",19)(245,"tr",20)(246,"th",21),eN(247,"Nome"),og(),Sl(248,"th",21),eN(249,"Tipo"),og(),Sl(250,"th",21),eN(251,"Padr\xE3o"),og(),Sl(252,"th",21),eN(253,"Descri\xE7\xE3o"),og()(),Sl(254,"tr",22)(255,"td",23)(256,"div",24)(257,"span",25),eN(258," (p-additional-help)"),Wl(259,"br"),og()(),Sl(260,"div",26),eN(261,"Deprecated"),og()(),Sl(262,"td",27)(263,"code",28),eN(264,"EventEmitter"),og()(),Sl(265,"td",29),eN(266,"-"),og(),Sl(267,"td",30)(268,"em")(269,"strong"),eN(270,"(opcional)"),og()(),Sl(271,"p"),eN(272,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),og(),Sl(273,"blockquote")(274,"p"),eN(275,"Essa propriedade est\xE1 "),Sl(276,"strong"),eN(277,"depreciada"),og(),eN(278," e ser\xE1 removida na vers\xE3o "),Sl(279,"code"),eN(280,"23.x.x"),og(),eN(281,". Recomendamos utilizar a propriedade "),Sl(282,"code"),eN(283,"p-helper"),og(),eN(284," que oferece mais recursos e flexibilidade."),og()()()(),Sl(285,"tr",22)(286,"td",23)(287,"div",31)(288,"span",32),eN(289," p-additional-help-tooltip"),Wl(290,"br"),og()(),Sl(291,"div",26),eN(292,"Deprecated"),og()(),Sl(293,"td",27)(294,"code",33),eN(295,"string"),og()(),Sl(296,"td",29),eN(297,"-"),og(),Sl(298,"td",30)(299,"em")(300,"strong"),eN(301,"(opcional)"),og()(),Sl(302,"p"),eN(303,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),Sl(304,"code"),eN(305,"po-helper"),og(),eN(306,`.
`),Sl(307,"strong"),eN(308,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),og()(),Sl(309,"blockquote")(310,"p"),eN(311,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),og()(),Sl(312,"blockquote")(313,"p"),eN(314,"Essa propriedade est\xE1 "),Sl(315,"strong"),eN(316,"depreciada"),og(),eN(317," e ser\xE1 removida na vers\xE3o "),Sl(318,"code"),eN(319,"23.x.x"),og(),eN(320,". Recomendamos utilizar a propriedade "),Sl(321,"code"),eN(322,"p-helper"),og(),eN(323," que oferece mais recursos e flexibilidade."),og()()()(),Sl(324,"tr",22)(325,"td",23)(326,"div",31)(327,"span",32),eN(328," p-append-in-body"),Wl(329,"br"),og()()(),Sl(330,"td",27)(331,"code",34),eN(332,"boolean"),og()(),Sl(333,"td",29)(334,"p")(335,"code"),eN(336,"false"),og()()(),Sl(337,"td",30)(338,"em")(339,"strong"),eN(340,"(opcional)"),og()(),Sl(341,"p"),eN(342,"Define que o popover ("),Sl(343,"code"),eN(344,"p-helper"),og(),eN(345," e/ou "),Sl(346,"code"),eN(347,"p-error-limit"),og(),eN(348,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),og(),Sl(349,"blockquote")(350,"p"),eN(351,"Quando utilizado com "),Sl(352,"code"),eN(353,"p-helper"),og(),eN(354,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),og()()()(),Sl(355,"tr",22)(356,"td",23)(357,"div",31)(358,"span",32),eN(359," p-auto-focus"),Wl(360,"br"),og()()(),Sl(361,"td",27)(362,"code",34),eN(363,"boolean"),og()(),Sl(364,"td",29)(365,"p")(366,"code"),eN(367,"false"),og()()(),Sl(368,"td",30)(369,"em")(370,"strong"),eN(371,"(opcional)"),og()(),Sl(372,"p"),eN(373,"Aplica foco no elemento ao ser iniciado."),og(),Sl(374,"blockquote")(375,"p"),eN(376,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),og()()()(),Sl(377,"tr",22)(378,"td",23)(379,"div",24)(380,"span",25),eN(381," (p-change)"),Wl(382,"br"),og()()(),Sl(383,"td",27)(384,"code",28),eN(385,"EventEmitter"),og()(),Sl(386,"td",29),eN(387,"-"),og(),Sl(388,"td",30)(389,"em")(390,"strong"),eN(391,"(opcional)"),og()(),Sl(392,"p"),eN(393,"Evento ao alterar valor do campo."),og()()(),Sl(394,"tr",22)(395,"td",23)(396,"div",31)(397,"span",32),eN(398," p-columns"),Wl(399,"br"),og()()(),Sl(400,"td",27)(401,"code",35),eN(402,"number"),og()(),Sl(403,"td",29)(404,"p")(405,"code"),eN(406,"2"),og()()(),Sl(407,"td",30)(408,"em")(409,"strong"),eN(410,"(opcional)"),og()(),Sl(411,"p"),eN(412,"Define a quantidade de colunas para exibi\xE7\xE3o das op\xE7\xF5es."),og(),Sl(413,"p")(414,"strong"),eN(415,"Considera\xE7\xF5es:"),og()(),Sl(416,"ul")(417,"li"),eN(418,"\xC9 poss\xEDvel exibir as op\xE7\xF5es entre "),Sl(419,"code"),eN(420,"1"),og(),eN(421," e "),Sl(422,"code"),eN(423,"4"),og(),eN(424," colunas."),og(),Sl(425,"li"),eN(426,"O n\xFAmero m\xE1ximo de colunas \xE9 invari\xE1vel nas seguintes resolu\xE7\xF5es:"),Sl(427,"ul")(428,"li")(429,"code"),eN(430,"sm"),og(),eN(431,": "),Sl(432,"code"),eN(433,"1"),og()(),Sl(434,"li")(435,"code"),eN(436,"md"),og(),eN(437,": "),Sl(438,"code"),eN(439,"2"),og()()()()()()(),Sl(440,"tr",22)(441,"td",23)(442,"div",31)(443,"span",32),eN(444," p-compact-label"),Wl(445,"br"),og()()(),Sl(446,"td",27)(447,"code",34),eN(448,"boolean"),og()(),Sl(449,"td",29)(450,"p")(451,"code"),eN(452,"false"),og()()(),Sl(453,"td",30)(454,"em")(455,"strong"),eN(456,"(opcional)"),og()(),Sl(457,"p"),eN(458,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),og(),Sl(459,"p"),eN(460,"Quando habilitado ("),Sl(461,"code"),eN(462,"true"),og(),eN(463,"), o modo compacto afeta o conjunto composto por:"),og(),Sl(464,"ul")(465,"li")(466,"code"),eN(467,"po-label"),og()(),Sl(468,"li")(469,"code"),eN(470,"p-requirement (showRequired)"),og()(),Sl(471,"li")(472,"code"),eN(473,"po-helper"),og()()(),Sl(474,"p"),eN(475,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),og(),Sl(476,"p"),eN(477,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),og(),Sl(478,"ul")(479,"li")(480,"code"),eN(481,"--field-container-title-justify"),og()(),Sl(482,"li")(483,"code"),eN(484,"--field-container-title-flex"),og()()(),Sl(485,"p"),eN(486,"Exemplo:"),og(),Sl(487,"pre")(488,"code"),eN(489,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),og()(),Sl(490,"p"),eN(491,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),og()()(),Sl(492,"tr",22)(493,"td",23)(494,"div",31)(495,"span",32),eN(496," p-disabled"),Wl(497,"br"),og()()(),Sl(498,"td",27)(499,"code",34),eN(500,"boolean"),og()(),Sl(501,"td",29)(502,"p")(503,"code"),eN(504,"false"),og()()(),Sl(505,"td",30)(506,"em")(507,"strong"),eN(508,"(opcional)"),og()(),Sl(509,"p"),eN(510,"Indica que o campo ser\xE1 desabilitado."),og()()(),Sl(511,"tr",22)(512,"td",23)(513,"div",31)(514,"span",32),eN(515," p-error-limit"),Wl(516,"br"),og()()(),Sl(517,"td",27)(518,"code",34),eN(519,"boolean"),og()(),Sl(520,"td",29)(521,"p")(522,"code"),eN(523,"false"),og()()(),Sl(524,"td",30)(525,"em")(526,"strong"),eN(527,"(opcional)"),og()(),Sl(528,"p"),eN(529,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),og(),Sl(530,"blockquote")(531,"p"),eN(532,"Caso essa propriedade seja definida como "),Sl(533,"code"),eN(534,"true"),og(),eN(535,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),og()()()(),Sl(536,"tr",22)(537,"td",23)(538,"div",31)(539,"span",32),eN(540," p-field-error-message"),Wl(541,"br"),og()()(),Sl(542,"td",27)(543,"code",33),eN(544,"string"),og()(),Sl(545,"td",29),eN(546,"-"),og(),Sl(547,"td",30)(548,"em")(549,"strong"),eN(550,"(opcional)"),og()(),Sl(551,"p"),eN(552,"Exibe a mensagem setada se o campo estiver vazio e for requerido."),og(),Sl(553,"blockquote")(554,"p"),eN(555,"Necess\xE1rio que a propriedade "),Sl(556,"code"),eN(557,"p-required"),og(),eN(558," esteja habilitada."),og()()()(),Sl(559,"tr",22)(560,"td",23)(561,"div",31)(562,"span",32),eN(563," p-help"),Wl(564,"br"),og()()(),Sl(565,"td",27)(566,"code",33),eN(567,"string"),og()(),Sl(568,"td",29),eN(569,"-"),og(),Sl(570,"td",30)(571,"em")(572,"strong"),eN(573,"(opcional)"),og()(),Sl(574,"p"),eN(575,"Texto de apoio do campo."),og()()(),Sl(576,"tr",22)(577,"td",23)(578,"div",24)(579,"span",25),eN(580," (p-keydown)"),Wl(581,"br"),og()()(),Sl(582,"td",27)(583,"code",28),eN(584,"EventEmitter"),og()(),Sl(585,"td",29),eN(586,"-"),og(),Sl(587,"td",30)(588,"em")(589,"strong"),eN(590,"(opcional)"),og()(),Sl(591,"p"),eN(592,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Sl(593,"code"),eN(594,"KeyboardEvent"),og(),eN(595," com informa\xE7\xF5es sobre a tecla."),og()()(),Sl(596,"tr",22)(597,"td",23)(598,"div",31)(599,"span",32),eN(600," p-label"),Wl(601,"br"),og()()(),Sl(602,"td",27)(603,"code",33),eN(604,"string"),og()(),Sl(605,"td",29),eN(606,"-"),og(),Sl(607,"td",30)(608,"em")(609,"strong"),eN(610,"(opcional)"),og()(),Sl(611,"p"),eN(612,"Label do campo."),og()()(),Sl(613,"tr",22)(614,"td",23)(615,"div",31)(616,"span",32),eN(617," p-label-text-wrap"),Wl(618,"br"),og()()(),Sl(619,"td",27)(620,"code",34),eN(621,"boolean"),og()(),Sl(622,"td",29)(623,"p")(624,"code"),eN(625,"false"),og()()(),Sl(626,"td",30)(627,"em")(628,"strong"),eN(629,"(opcional)"),og()(),Sl(630,"p"),eN(631,"Habilita a quebra autom\xE1tica do texto da propriedade "),Sl(632,"code"),eN(633,"p-label"),og(),eN(634,". Quando "),Sl(635,"code"),eN(636,"p-label-text-wrap"),og(),eN(637,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),og()()(),Sl(638,"tr",22)(639,"td",23)(640,"div",31)(641,"span",32),eN(642," name"),Wl(643,"br"),og()()(),Sl(644,"td",27)(645,"code",33),eN(646,"string"),og()(),Sl(647,"td",29),eN(648,"-"),og(),Sl(649,"td",30)(650,"p"),eN(651,"Nome das op\xE7\xF5es."),og()()(),Sl(652,"tr",22)(653,"td",23)(654,"div",31)(655,"span",32),eN(656," p-optional"),Wl(657,"br"),og()()(),Sl(658,"td",27)(659,"code",34),eN(660,"boolean"),og()(),Sl(661,"td",29)(662,"p")(663,"code"),eN(664,"false"),og()()(),Sl(665,"td",30)(666,"em")(667,"strong"),eN(668,"(opcional)"),og()(),Sl(669,"p"),eN(670,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),og(),Sl(671,"blockquote")(672,"p"),eN(673,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),og()(),Sl(674,"ul")(675,"li"),eN(676,"O campo conter "),Sl(677,"code"),eN(678,"p-required"),og(),eN(679,";"),og(),Sl(680,"li"),eN(681,"N\xE3o possuir "),Sl(682,"code"),eN(683,"p-help"),og(),eN(684," e/ou "),Sl(685,"code"),eN(686,"p-label"),og(),eN(687,"."),og()()()(),Sl(688,"tr",22)(689,"td",23)(690,"div",31)(691,"span",32),eN(692," p-options"),Wl(693,"br"),og()()(),Sl(694,"td",27)(695,"code",36),eN(696,"PoRadioGroupOption[]"),og()(),Sl(697,"td",29),eN(698,"-"),og(),Sl(699,"td",30)(700,"p"),eN(701,`Lista de op\xE7\xF5es que ser\xE3o exibidas.
Nesta propriedade deve ser definido um array de objetos que implementam a interface PoRadioGroupOption.`),og()()(),Sl(702,"tr",22)(703,"td",23)(704,"div",31)(705,"span",32),eN(706," p-helper"),Wl(707,"br"),og()()(),Sl(708,"td",27)(709,"code",37),eN(710,"PoHelperOptions "),og(),Sl(711,"code",33),eN(712," string"),og()(),Sl(713,"td",29),eN(714,"-"),og(),Sl(715,"td",30)(716,"em")(717,"strong"),eN(718,"(opcional)"),og()(),Sl(719,"p"),eN(720,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label quando a propriedade "),Sl(721,"code"),eN(722,"p-label"),og(),eN(723," for definida, ou, ao lado do componente na aus\xEAncia da propriedade "),Sl(724,"code"),eN(725,"p-label"),og(),eN(726,"."),og(),Sl(727,"blockquote")(728,"p"),eN(729,"Para mais informa\xE7\xF5es acesse: "),Sl(730,"a",38),eN(731,"https://po-ui.io/documentation/po-helper"),og(),eN(732,"."),og()(),Sl(733,"blockquote")(734,"p"),eN(735,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),Sl(736,"code"),eN(737,"p-additional-help-tooltip"),og(),eN(738," e "),Sl(739,"code"),eN(740,"p-additional-help"),og(),eN(741,") ser\xE1 ignorado."),og()()()(),Sl(742,"tr",22)(743,"td",23)(744,"div",31)(745,"span",32),eN(746," p-required"),Wl(747,"br"),og()()(),Sl(748,"td",27)(749,"code",34),eN(750,"boolean"),og()(),Sl(751,"td",29)(752,"p")(753,"code"),eN(754,"false"),og()()(),Sl(755,"td",30)(756,"em")(757,"strong"),eN(758,"(opcional)"),og()(),Sl(759,"p"),eN(760,"Define que o campo ser\xE1 obrigat\xF3rio."),og()()(),Sl(761,"tr",22)(762,"td",23)(763,"div",31)(764,"span",32),eN(765," p-show-required"),Wl(766,"br"),og()()(),Sl(767,"td",27)(768,"code",34),eN(769,"boolean"),og()(),Sl(770,"td",29),eN(771,"-"),og(),Sl(772,"td",30)(773,"p"),eN(774,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),og(),Sl(775,"blockquote")(776,"p"),eN(777,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),og()(),Sl(778,"ul")(779,"li"),eN(780,"N\xE3o possuir "),Sl(781,"code"),eN(782,"p-help"),og(),eN(783," e/ou "),Sl(784,"code"),eN(785,"p-label"),og(),eN(786,"."),og()()()(),Sl(787,"tr",22)(788,"td",23)(789,"div",31)(790,"span",32),eN(791," p-size"),Wl(792,"br"),og()()(),Sl(793,"td",27)(794,"code",33),eN(795,"string"),og()(),Sl(796,"td",29)(797,"p")(798,"code"),eN(799,"medium"),og()()(),Sl(800,"td",30)(801,"em")(802,"strong"),eN(803,"(opcional)"),og()(),Sl(804,"p"),eN(805,"Define o tamanho dos radios do componente:"),og(),Sl(806,"ul")(807,"li")(808,"code"),eN(809,"small"),og(),eN(810,": 16x16 (dispon\xEDvel apenas para acessibilidade AA)."),og(),Sl(811,"li")(812,"code"),eN(813,"medium"),og(),eN(814,": 24x24."),og()(),Sl(815,"blockquote")(816,"p"),eN(817,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Sl(818,"code"),eN(819,"medium"),og(),eN(820,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Sl(821,"a",39),eN(822,"po-theme"),og(),eN(823,"."),og()()()()(),Sl(824,"h3",18),eN(825,"M\xE9todos"),og(),Sl(826,"table",40)(827,"tr",22)(828,"th",41)(829,"div",31)(830,"h4")(831,"span",32),eN(832," focus "),og()()()()(),Sl(833,"tr",30)(834,"td",30)(835,"p"),eN(836,"Fun\xE7\xE3o que atribui foco ao componente."),og(),Sl(837,"p"),eN(838,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),og(),Sl(839,"pre")(840,"code"),eN(841,`import { PoRadioGroupComponent } from '@po-ui/ng-components';

...

@ViewChild(PoRadioGroupComponent, { static: true }) radio: PoRadioGroupComponent;

focusRadio() {
  this.radio.focus();
}
`),og()()()()(),Wl(842,"br"),Sl(843,"table",40)(844,"tr",22)(845,"th",41)(846,"div",31)(847,"h4")(848,"span",32),eN(849," showAdditionalHelp "),og()()()()(),Sl(850,"tr",30)(851,"td",30)(852,"p"),eN(853,"M\xE9todo que exibe "),Sl(854,"code"),eN(855,"p-helper"),og(),eN(856," ou executa a a\xE7\xE3o definida em "),Sl(857,"code"),eN(858,"p-helper{eventOnClick}"),og(),eN(859," ou em "),Sl(860,"code"),eN(861,"p-additionalHelp"),og(),eN(862,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Sl(863,"code"),eN(864,"p-keydown"),og(),eN(865,"."),og(),Sl(866,"blockquote")(867,"p"),eN(868,"Exibe ou oculta o conte\xFAdo do componente "),Sl(869,"code"),eN(870,"po-helper"),og(),eN(871," quando o componente estiver com foco."),og()(),Sl(872,"pre")(873,"code"),eN(874,`// Exemplo com p-label e p-helper
<po-radio-group
 #radioGroup
 ...
 p-label="Label do radioGroup"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, radioGroup)"
></po-radio-group>
`),og()(),Sl(875,"pre")(876,"code"),eN(877,`...
onKeyDown(event: KeyboardEvent, inp: PoRadioGroupComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),og()()()()(),Wl(878,"br"),Sl(879,"h3"),eN(880,"Interfaces"),og(),Sl(881,"h4",42)(882,"code",5),eN(883,"PoRadioGroupOption"),og()(),Sl(884,"div",2)(885,"p"),eN(886,"Interface para as a\xE7\xF5es do componente po-radio-group."),og()(),Sl(887,"h4",18),eN(888,"Propriedades"),og(),Sl(889,"table",19)(890,"tr",20)(891,"th",21),eN(892,"Nome"),og(),Sl(893,"th",21),eN(894,"Tipo"),og(),Sl(895,"th",21),eN(896,"Descri\xE7\xE3o"),og()(),Sl(897,"tr",22)(898,"td",23)(899,"div",31)(900,"span",32),eN(901," disabled"),Wl(902,"br"),og()()(),Sl(903,"td",27)(904,"code",34),eN(905,"boolean"),og()(),Sl(906,"td",30)(907,"em")(908,"strong"),eN(909,"(opcional)"),og()(),Sl(910,"p"),eN(911,"Desabilita o radio."),og()()(),Sl(912,"tr",22)(913,"td",23)(914,"div",31)(915,"span",32),eN(916," label"),Wl(917,"br"),og()()(),Sl(918,"td",27)(919,"code",33),eN(920,"string"),og()(),Sl(921,"td",30)(922,"p"),eN(923,"Texto do radio."),og()()(),Sl(924,"tr",22)(925,"td",23)(926,"div",31)(927,"span",32),eN(928," value"),Wl(929,"br"),og()()(),Sl(930,"td",27)(931,"code",33),eN(932,"string "),og(),Sl(933,"code",35),eN(934," number"),og()(),Sl(935,"td",30)(936,"p"),eN(937,"Valor do radio."),og()()()()());},dependencies:[Ka],encapsulation:2})}return i})();var fe=(()=>{class i{route;router;sub;hidePoWebSample=true;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(d,r){this.route=d,this.router=r;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let r=d.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:"merge"}),this.activeTab=d;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(r){return new(r||i)(w(Xn),w(En))};static \u0275cmp=Un({type:i,selectors:[["ng-component"]],standalone:false,decls:9,vars:4,consts:[["p-title","Radio Group",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,n){r&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return n.changeTab("doc")}),Wl(3,"sample-po-radio-group-doc"),og(),Sl(4,"po-tab",3),ft("p-click",function(){return n.changeTab("web")}),Wl(5,"sample-po-radio-group-basic-view")(6,"sample-po-radio-group-labs-view")(7,"sample-po-radio-group-translator-view")(8,"sample-po-radio-group-translator-reactive-form-view"),og()()()),r&2&&(nw("p-actions",n.actions),Lp(2),nw("p-active",n.activeTab==="doc"),Lp(2),nw("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"));},dependencies:[rNe,Bme,qme,me,ce,Ee,he,Se],encapsulation:2})}return i})();var Be=[{path:"",component:fe}],xe=(()=>{class i{static \u0275fac=function(r){return new(r||i)};static \u0275mod=fe$1({type:i});static \u0275inj=ue$1({imports:[hL.forChild(Be),hL]})}return i})();var bt=(()=>{class i{static \u0275fac=function(r){return new(r||i)};static \u0275mod=fe$1({type:i});static \u0275inj=ue$1({imports:[sr,xe]})}return i})();export{bt as DocPoRadioGroupModule};