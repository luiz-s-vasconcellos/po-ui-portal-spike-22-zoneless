import {f as fe$1,u as ue,s as sr,a as uL,C,c3 as Xn,E as En,U as Un,b as f,ae as Be,n as nb,w,aJ as qhe,J as zl,T as nw,bM as dN,a7 as lN,an as DO,aH as Ka,b8 as qme,b9 as Yme,H as Il,q as Qx,R as og,a1 as ft,A as Lp,ar as Ux,au as dg,bs as uN,aX as G9,aF as $9,aY as z9,aG as mk,aZ as hk,b0 as Qt,b1 as mv,c4 as C3,b4 as F3,c8 as Dde,bH as k3,c9 as Yhe,aB as Dx,aM as ww,aN as QA,bd as Ax,aO as Ew,aP as e0,cn as a3,b6 as Yo,a2 as JE,X as we$1,a3 as cNe,br as iN,B as yw,aD as Xy,aT as eN,aE as Qy}from'./main-FCMDZGSJ.js';var Oe=()=>({label:"Option 1",value:"1"}),Le=()=>({label:"Option 2",value:"2"}),De=(a,K)=>[a,K],he=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-select-basic"]],standalone:false,decls:1,vars:6,consts:[["name","select","p-label","PO Select",3,"p-options"]],template:function(p,i){p&1&&zl(0,"po-select",0),p&2&&nw("p-options",dN(3,De,lN(1,Oe),lN(2,Le)));},dependencies:[qhe],encapsulation:2,changeDetection:1})}return a})();var Ve=a=>({"docs-sample-code-tabs":a}),Ee=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-select-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,i){p&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Select Basic"),og(),Il(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-select-basic/sample-po-select-basic.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-select
  name="select"
  p-label="PO Select"
  [p-options]="[
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' }
  ]"
>
</po-select>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-select-basic/sample-po-select-basic.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-select-basic',
  templateUrl: './sample-po-select-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSelectBasicComponent {}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-select-basic"),og(),zl(23,"hr")),p&2&&(Lp(5),Ux("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,Ve,i.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,he],encapsulation:2})}return a})();var fe=(()=>{class a{cdr=f(Be);helperText;event;help;label;option;options;optionsGroup;optionsGroupList=[];placeholder;properties;fieldErrorMessage;select;selectedOptionsGroup;selectOptionGroupSwitch;size;propertiesOptions=[{value:"disabled",label:"Disabled"},{value:"optional",label:"Optional"},{value:"required",label:"Required"},{value:"showRequired",label:"Show Required"},{value:"readonly",label:"Read Only"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"},{value:"loading",label:"Loading"},{value:"compactLabel",label:"Compact Label"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore();}addOption(){this.options=this.verifyOptionObject(this.options.concat(),this.option,this.optionsGroup),this.option={label:void 0,value:void 0},this.cdr.detectChanges();}changeEvent(r){this.event=r;}optionsGroupSelection(){this.optionsGroup=this.selectedOptionsGroup;}restore(){this.helperText="",this.event="",this.help=void 0,this.label=void 0,this.option={label:void 0,value:void 0},this.options=[],this.optionsGroup=void 0,this.optionsGroupList=[],this.placeholder="",this.properties=[],this.fieldErrorMessage="",this.select="",this.selectOptionGroupSwitch=false,this.selectedOptionsGroup=void 0,this.size="medium";}restoreSwitch(r){r||(this.selectedOptionsGroup=void 0,this.optionsGroup=void 0);}insertGroupIntoSelectInput(r){this.selectedOptionsGroup=r,this.optionsGroupList=[...this.optionsGroupList,{label:r,value:r}];}verifyOptionObject(r,p,i){let{label:m,value:d}=p;if(i){let o=r.findIndex(te=>te.label===i&&"options"in te);return o===-1?(this.insertGroupIntoSelectInput(i),[...r,{label:i,options:[{label:m,value:d}]}]):(r[o].options.push({label:m,value:d}),r)}return [...r,{label:m,value:d}]}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-select-labs"]],standalone:false,decls:33,vars:37,consts:[["fOption","ngForm"],["f","ngForm"],["name","select",1,"po-md-12",3,"ngModelChange","p-blur","p-change","p-change-model","p-enter","p-keydown","ngModel","p-helper","p-disabled","p-help","p-label","p-loading","p-options","p-optional","p-placeholder","p-readonly","p-required","p-field-error-message","p-show-required","p-size","p-error-limit","p-label-text-wrap","p-compact-label"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["p-label","Po select options group"],["name","selectOptionGroupSwitch","p-label","Select options group",1,"po-lg-2","po-md-12",3,"p-change","ngModelChange","ngModel"],["name","selectedsOptionsGroup","p-label","Options group list",1,"po-lg-4","po-md-6",3,"ngModelChange","p-change","ngModel","p-disabled","p-options"],["name","optionsGroup","p-label","New Options Group","p-required","",1,"po-lg-4","po-md-6",3,"ngModelChange","ngModel","p-disabled"],["p-label","Po select options"],["name","optionLabel","p-label","Option Label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","optionValue","p-label","Option Value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add Option",1,"po-lg-3","po-md-4",3,"p-click","p-disabled"],["name","label","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","fieldErrorMessage","p-clean","","p-label","Field Error Message",1,"po-md-6",3,"ngModelChange","ngModel"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],[1,"po-lg-3","po-md-6"],["p-label","Sample Restore",3,"p-click"]],template:function(p,i){if(p&1){let m=Dx();Il(0,"po-select",2),ww("ngModelChange",function(o){return Xy(m),eN(i.select,o)||(i.select=o),Qy(o)}),ft("p-blur",function(){return i.changeEvent("p-blur")})("p-change",function(){return i.changeEvent("p-change")})("p-change-model",function(){return i.changeEvent("p-change-model")})("p-enter",function(){return i.changeEvent("p-enter")})("p-keydown",function(){return i.changeEvent("p-keydown")}),og(),QA(),zl(1,"po-divider"),Il(2,"div",3),zl(3,"po-info",4)(4,"po-info",5),og(),zl(5,"po-divider"),Il(6,"form",null,0),zl(8,"po-divider",6),Il(9,"div",3)(10,"po-switch",7),ft("p-change",function(o){return i.restoreSwitch(o)}),ww("ngModelChange",function(o){return Xy(m),eN(i.selectOptionGroupSwitch,o)||(i.selectOptionGroupSwitch=o),Qy(o)}),og(),QA(),Il(11,"po-select",8),ww("ngModelChange",function(o){return Xy(m),eN(i.selectedOptionsGroup,o)||(i.selectedOptionsGroup=o),Qy(o)}),ft("p-change",function(){return i.optionsGroupSelection()}),og(),QA(),Il(12,"po-input",9),ww("ngModelChange",function(o){return Xy(m),eN(i.optionsGroup,o)||(i.optionsGroup=o),Qy(o)}),og(),QA(),og(),zl(13,"po-divider",10),Il(14,"div",3)(15,"po-input",11),ww("ngModelChange",function(o){return Xy(m),eN(i.option.label,o)||(i.option.label=o),Qy(o)}),og(),QA(),Il(16,"po-input",12),ww("ngModelChange",function(o){return Xy(m),eN(i.option.value,o)||(i.option.value=o),Qy(o)}),og(),QA(),og(),Il(17,"div",3)(18,"po-button",13),ft("p-click",function(){return i.addOption()}),og()()(),zl(19,"po-divider"),Il(20,"form",null,1)(22,"po-input",14),ww("ngModelChange",function(o){return Xy(m),eN(i.label,o)||(i.label=o),Qy(o)}),og(),QA(),Il(23,"po-input",15),ww("ngModelChange",function(o){return Xy(m),eN(i.help,o)||(i.help=o),Qy(o)}),og(),QA(),Il(24,"po-input",16),ww("ngModelChange",function(o){return Xy(m),eN(i.helperText,o)||(i.helperText=o),Qy(o)}),og(),QA(),Il(25,"po-input",17),ww("ngModelChange",function(o){return Xy(m),eN(i.placeholder,o)||(i.placeholder=o),Qy(o)}),og(),QA(),Il(26,"po-input",18),ww("ngModelChange",function(o){return Xy(m),eN(i.fieldErrorMessage,o)||(i.fieldErrorMessage=o),Qy(o)}),og(),QA(),Il(27,"po-checkbox-group",19),ww("ngModelChange",function(o){return Xy(m),eN(i.properties,o)||(i.properties=o),Qy(o)}),og(),QA(),Il(28,"po-radio-group",20),ww("ngModelChange",function(o){return Xy(m),eN(i.size,o)||(i.size=o),Qy(o)}),og(),QA(),Il(29,"div",3)(30,"div",21)(31,"po-button",22),ft("p-click",function(){return i.restore()}),og()()(),zl(32,"form"),og();}if(p&2){let m=Ax(7);Ew("ngModel",i.select),nw("p-helper",i.helperText)("p-disabled",i.properties.includes("disabled"))("p-help",i.help)("p-label",i.label)("p-loading",i.properties.includes("loading"))("p-options",i.options)("p-optional",i.properties.includes("optional"))("p-placeholder",i.placeholder)("p-readonly",i.properties.includes("readonly"))("p-required",i.properties.includes("required"))("p-field-error-message",i.fieldErrorMessage)("p-show-required",i.properties.includes("showRequired"))("p-size",i.size)("p-error-limit",i.properties==null?null:i.properties.includes("errorLimit"))("p-label-text-wrap",i.properties==null?null:i.properties.includes("labelTextWrap"))("p-compact-label",i.properties==null?null:i.properties.includes("compactLabel")),e0(),Lp(3),nw("p-value",i.select),Lp(),nw("p-value",i.event),Lp(6),Ew("ngModel",i.selectOptionGroupSwitch),e0(),Lp(),Ew("ngModel",i.selectedOptionsGroup),nw("p-disabled",!i.selectOptionGroupSwitch)("p-options",i.optionsGroupList),e0(),Lp(),Ew("ngModel",i.optionsGroup),nw("p-disabled",!i.selectOptionGroupSwitch),e0(),Lp(3),Ew("ngModel",i.option.label),e0(),Lp(),Ew("ngModel",i.option.value),e0(),Lp(2),nw("p-disabled",m.invalid),Lp(4),Ew("ngModel",i.label),e0(),Lp(),Ew("ngModel",i.help),e0(),Lp(),Ew("ngModel",i.helperText),e0(),Lp(),Ew("ngModel",i.placeholder),e0(),Lp(),Ew("ngModel",i.fieldErrorMessage),e0(),Lp(),Ew("ngModel",i.properties),nw("p-options",i.propertiesOptions),e0(),Lp(),Ew("ngModel",i.size),nw("p-options",i.sizeOptions),e0();}},dependencies:[G9,$9,z9,mk,hk,Qt,mv,C3,F3,Dde,qhe,k3,Yhe],encapsulation:2,changeDetection:1})}return a})();var Ge=a=>({"docs-sample-code-tabs":a}),Ce=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-select-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,i){p&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Select Labs"),og(),Il(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-select-labs/sample-po-select-labs.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-select
  class="po-md-12"
  name="select"
  [(ngModel)]="select"
  [p-helper]="helperText"
  [p-disabled]="properties.includes('disabled')"
  [p-help]="help"
  [p-label]="label"
  [p-loading]="properties.includes('loading')"
  [p-options]="options"
  [p-optional]="properties.includes('optional')"
  [p-placeholder]="placeholder"
  [p-readonly]="properties.includes('readonly')"
  [p-required]="properties.includes('required')"
  [p-field-error-message]="fieldErrorMessage"
  [p-show-required]="properties.includes('showRequired')"
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
</po-select>

<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="select"> </po-info>

  <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
</div>

<po-divider />

<form #fOption="ngForm">
  <po-divider p-label="Po select options group"></po-divider>

  <div class="po-row">
    <po-switch
      class="po-lg-2 po-md-12"
      name="selectOptionGroupSwitch"
      (p-change)="restoreSwitch($event)"
      [(ngModel)]="selectOptionGroupSwitch"
      p-label="Select options group"
    >
    </po-switch>

    <po-select
      class="po-lg-4 po-md-6"
      name="selectedsOptionsGroup"
      [(ngModel)]="selectedOptionsGroup"
      p-label="Options group list"
      [p-disabled]="!selectOptionGroupSwitch"
      [p-options]="optionsGroupList"
      (p-change)="optionsGroupSelection()"
    >
    </po-select>

    <po-input
      class="po-lg-4 po-md-6"
      name="optionsGroup"
      [(ngModel)]="optionsGroup"
      p-label="New Options Group"
      [p-disabled]="!selectOptionGroupSwitch"
      p-required
    >
    </po-input>
  </div>

  <po-divider p-label="Po select options"></po-divider>
  <div class="po-row">
    <po-input class="po-md-6" name="optionLabel" [(ngModel)]="option.label" p-label="Option Label" p-required>
    </po-input>

    <po-input class="po-md-6" name="optionValue" [(ngModel)]="option.value" p-label="Option Value" p-required>
    </po-input>
  </div>

  <div class="po-row">
    <po-button class="po-lg-3 po-md-4" p-label="Add Option" [p-disabled]="fOption.invalid" (p-click)="addOption()">
    </po-button>
  </div>
</form>

<po-divider />

<form #f="ngForm">
  <po-input class="po-md-6" name="label" [(ngModel)]="label" p-label="Label"> </po-input>

  <po-input class="po-md-6" name="help" [(ngModel)]="help" p-label="Help"> </po-input>

  <po-input class="po-md-6" name="helperText" [(ngModel)]="helperText" p-clean p-label="Additional Help"> </po-input>

  <po-input class="po-md-6" name="placeholder" [(ngModel)]="placeholder" p-label="Placeholder"> </po-input>

  <po-input
    class="po-md-6"
    name="fieldErrorMessage"
    [(ngModel)]="fieldErrorMessage"
    p-clean
    p-label="Field Error Message"
  >
  </po-input>

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
    <div class="po-lg-3 po-md-6">
      <po-button p-label="Sample Restore" (p-click)="restore()"> </po-button>
    </div>
  </div>
  <form></form>
</form>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-select-labs/sample-po-select-labs.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { ChangeDetectorRef, Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

import { PoCheckboxGroupOption, PoRadioGroupOption, PoSelectOption, PoSelectOptionGroup } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-select-labs',
  templateUrl: './sample-po-select-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSelectLabsComponent implements OnInit {
  private readonly cdr = inject(ChangeDetectorRef);

  helperText: string;
  event: string;
  help: string;
  label: string;
  option: PoSelectOption;
  options: Array<PoSelectOption | PoSelectOptionGroup>;
  optionsGroup: string;
  optionsGroupList: Array<PoSelectOption> = [];
  placeholder: string;
  properties: Array<string>;
  fieldErrorMessage: string;
  select: string;
  selectedOptionsGroup: string;
  selectOptionGroupSwitch: boolean;
  size: string;

  readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'disabled', label: 'Disabled' },
    { value: 'optional', label: 'Optional' },
    { value: 'required', label: 'Required' },
    { value: 'showRequired', label: 'Show Required' },
    { value: 'readonly', label: 'Read Only' },
    { value: 'errorLimit', label: 'Limit Error Message' },
    { value: 'labelTextWrap', label: 'Label Text Wrap' },
    { value: 'loading', label: 'Loading' },
    { value: 'compactLabel', label: 'Compact Label' }
  ];

  public readonly sizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  ngOnInit() {
    this.restore();
  }

  addOption() {
    this.options = this.verifyOptionObject(this.options.concat(), this.option, this.optionsGroup);
    this.option = { label: undefined, value: undefined };
    this.cdr.detectChanges();
  }

  changeEvent(event: string) {
    this.event = event;
  }

  optionsGroupSelection() {
    this.optionsGroup = this.selectedOptionsGroup;
  }

  restore() {
    this.helperText = '';
    this.event = '';
    this.help = undefined;
    this.label = undefined;
    this.option = { label: undefined, value: undefined };
    this.options = [];
    this.optionsGroup = undefined;
    this.optionsGroupList = [];
    this.placeholder = '';
    this.properties = [];
    this.fieldErrorMessage = '';
    this.select = '';
    this.selectOptionGroupSwitch = false;
    this.selectedOptionsGroup = undefined;
    this.size = 'medium';
  }

  restoreSwitch(event: boolean) {
    if (!event) {
      this.selectedOptionsGroup = undefined;
      this.optionsGroup = undefined;
    }
  }

  private insertGroupIntoSelectInput(value: string) {
    this.selectedOptionsGroup = value;
    this.optionsGroupList = [...this.optionsGroupList, { label: value, value }];
  }

  private verifyOptionObject(
    options: Array<PoSelectOption | PoSelectOptionGroup>,
    option: PoSelectOption,
    optionsGroup?: string
  ) {
    const { label, value } = option;

    if (optionsGroup) {
      const indexItem = options.findIndex(
        (optionItem: PoSelectOptionGroup) => optionItem.label === optionsGroup && 'options' in optionItem
      );

      if (indexItem === -1) {
        this.insertGroupIntoSelectInput(optionsGroup);
        return [...options, { label: optionsGroup, options: [{ label, value }] }];
      }

      (options as Array<PoSelectOptionGroup>)[indexItem].options.push({ label, value });
      return options;
    }

    return [...options, { label, value }];
  }
}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-select-labs"),og(),zl(23,"hr")),p&2&&(Lp(5),Ux("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,Ge,i.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,fe],encapsulation:2})}return a})();var ee=(()=>{class a{http=f(nb);url="https://po-sample-api.onrender.com/v1/sampleSelect";getCitiesByState(r){return this.http.get(`${this.url}/getCities/${r}`)}getStates(){return this.http.get(`${this.url}/getStates`)}static \u0275fac=function(p){return new(p||a)};static \u0275prov=w({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();function ze(a,K){if(a&1&&(Il(0,"div",17),zl(1,"po-avatar",18),Il(2,"div",19)(3,"div",20),Qx(4),og(),Il(5,"div",21),Qx(6),og()()()),a&2){let r=K.$implicit;Lp(),nw("p-src",iN("https://po-sample-api.onrender.com/v1/sampleSelect/",r.value,".png")),Lp(3),yw(r.label),Lp(2),yw(r.value);}}var xe=(()=>{class a{sampleService=f(ee);address;city;cityOptions;document;documentLabel;documentType;mask;minLength;name;nameLabel;state;stateOptions;options=[{label:"CPF",value:"CPF"},{label:"CNPJ",value:"CNPJ"}];citiesSubscription;statesSubscription;ngOnDestroy(){this.citiesSubscription?.unsubscribe(),this.statesSubscription?.unsubscribe();}ngOnInit(){this.initialize(),this.getStates(),this.changeType(this.documentType);}changeType(r){r==="CPF"?(this.documentLabel="CPF Number",this.mask="999.999.999-99",this.minLength=14,this.nameLabel="Client Name"):(this.documentLabel="CNPJ Number",this.mask="99.999.999/9999-99",this.minLength=18,this.nameLabel="Company Name"),this.address="",this.document="",this.name="";}initialize(){this.cityOptions=[],this.stateOptions=[],this.documentType="CPF";}onChangeState(){this.getCitiesByState(this.state);}getCityByValue(r){let p=this.cityOptions.find(i=>i.value===r);return p?p.label:""}getStateByValue(r){let p=this.stateOptions.find(i=>i.value===r);return p?p.label:""}getCitiesByState(r){this.citiesSubscription=this.sampleService.getCitiesByState(r).subscribe(p=>{this.cityOptions=p.items,this.city=this.cityOptions[0].value;});}getStates(){this.statesSubscription=this.sampleService.getStates().subscribe(r=>{this.stateOptions=r.items,this.state="sp",this.getCitiesByState(this.state);});}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-select-customer-registration"]],standalone:false,features:[we$1([ee])],decls:27,vars:22,consts:[["f","ngForm"],["modal",""],[1,"po-row"],["name","documentType","p-label","Document type",1,"po-md-6",3,"ngModelChange","p-change","ngModel","p-options"],["name","document","p-mask-format-model","","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-label","p-mask","p-minlength"],["name","name","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-label"],["name","address","p-label","Address",1,"po-md-6",3,"ngModelChange","ngModel"],["name","state","p-label","State",1,"po-md-6",3,"ngModelChange","p-change","ngModel","p-options"],["p-select-option-template",""],["name","city","p-label","City",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["p-label","Send Informations",1,"po-md-4",3,"p-click","p-disabled"],["p-title","Informations"],["p-label","Document type",1,"po-md-6",3,"p-value"],[1,"po-md-6",3,"p-label","p-value"],["p-label","Address",1,"po-md-6",3,"p-value"],["p-label","State",1,"po-md-6",3,"p-value"],["p-label","City",1,"po-md-6",3,"p-value"],[1,"sample-select-option-template-container"],["p-size","xs",3,"p-src"],[1,"sample-select-option-template-margin"],[1,"sample-select-option-template-label"],[1,"sample-select-option-template-value"]],template:function(p,i){if(p&1){let m=Dx();Il(0,"form",null,0)(2,"div",2)(3,"po-radio-group",3),ww("ngModelChange",function(o){return Xy(m),eN(i.documentType,o)||(i.documentType=o),Qy(o)}),ft("p-change",function(o){return i.changeType(o)}),og(),QA(),Il(4,"po-input",4),ww("ngModelChange",function(o){return Xy(m),eN(i.document,o)||(i.document=o),Qy(o)}),og(),QA(),og(),Il(5,"div",2)(6,"po-input",5),ww("ngModelChange",function(o){return Xy(m),eN(i.name,o)||(i.name=o),Qy(o)}),og(),QA(),Il(7,"po-input",6),ww("ngModelChange",function(o){return Xy(m),eN(i.address,o)||(i.address=o),Qy(o)}),og(),QA(),og(),Il(8,"div",2)(9,"po-select",7),ww("ngModelChange",function(o){return Xy(m),eN(i.state,o)||(i.state=o),Qy(o)}),ft("p-change",function(){return i.onChangeState()}),JE(10,ze,7,4,"ng-template",8),og(),QA(),Il(11,"po-select",9),ww("ngModelChange",function(o){return Xy(m),eN(i.city,o)||(i.city=o),Qy(o)}),og(),QA(),og(),Il(12,"div",2)(13,"po-button",10),ft("p-click",function(){Xy(m);let o=Ax(15);return Qy(o.open())}),og()()(),Il(14,"po-modal",11,1)(16,"div",2),zl(17,"po-info",12)(18,"po-info",13),og(),zl(19,"po-divider"),Il(20,"div",2),zl(21,"po-info",13)(22,"po-info",14),og(),zl(23,"po-divider"),Il(24,"div",2),zl(25,"po-info",15)(26,"po-info",16),og()();}if(p&2){let m=Ax(1);Lp(3),Ew("ngModel",i.documentType),nw("p-options",i.options),e0(),Lp(),Ew("ngModel",i.document),nw("p-label",i.documentLabel)("p-mask",i.mask)("p-minlength",i.minLength),e0(),Lp(2),Ew("ngModel",i.name),nw("p-label",i.nameLabel),e0(),Lp(),Ew("ngModel",i.address),e0(),Lp(2),Ew("ngModel",i.state),nw("p-options",i.stateOptions),e0(),Lp(2),Ew("ngModel",i.city),nw("p-options",i.cityOptions),e0(),Lp(2),nw("p-disabled",m.invalid),Lp(4),nw("p-value",i.documentType),Lp(),nw("p-label",i.documentLabel)("p-value",i.document),Lp(3),nw("p-label",i.nameLabel)("p-value",i.name),Lp(),nw("p-value",i.address),Lp(3),nw("p-value",i.getStateByValue(i.state)),Lp(),nw("p-value",i.getCityByValue(i.city));}},dependencies:[G9,$9,z9,mk,hk,a3,Qt,mv,F3,Dde,qhe,Yhe,Yo],styles:[".sample-select-option-template-container[_ngcontent-%COMP%]{display:inline-flex;align-items:flex-start;width:100%}.sample-select-option-template-margin[_ngcontent-%COMP%]{margin:5px}.sample-select-option-template-label[_ngcontent-%COMP%]{font-size:16px}.sample-select-option-template-value[_ngcontent-%COMP%]{font-size:12px;text-transform:uppercase}"],changeDetection:1})}return a})();var Ne=a=>({"docs-sample-code-tabs":a}),ye=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-select-customer-registration-view"]],standalone:false,decls:34,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(p,i){p&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Select - Customer registration"),og(),Il(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-select-customer-registration/sample-po-select-customer-registration.component.html"),og(),Il(13,"pre",7),Qx(14,`<form #f="ngForm">
  <div class="po-row">
    <po-radio-group
      class="po-md-6"
      name="documentType"
      [(ngModel)]="documentType"
      p-label="Document type"
      [p-options]="options"
      (p-change)="changeType($event)"
    >
    </po-radio-group>

    <po-input
      class="po-md-6"
      name="document"
      [(ngModel)]="document"
      p-mask-format-model
      p-required
      [p-label]="documentLabel"
      [p-mask]="mask"
      [p-minlength]="minLength"
    >
    </po-input>
  </div>

  <div class="po-row">
    <po-input class="po-md-6" name="name" [(ngModel)]="name" p-required [p-label]="nameLabel"> </po-input>

    <po-input class="po-md-6" name="address" [(ngModel)]="address" p-label="Address"> </po-input>
  </div>

  <div class="po-row">
    <po-select
      class="po-md-6"
      name="state"
      [(ngModel)]="state"
      p-label="State"
      [p-options]="stateOptions"
      (p-change)="onChangeState()"
    >
      <ng-template p-select-option-template let-option>
        <div class="sample-select-option-template-container">
          <po-avatar p-size="xs" p-src="https://po-sample-api.onrender.com/v1/sampleSelect/{ { option.value }}.png">
          </po-avatar>

          <div class="sample-select-option-template-margin">
            <div class="sample-select-option-template-label">{ { option.label }}</div>
            <div class="sample-select-option-template-value">{ { option.value }}</div>
          </div>
        </div>
      </ng-template>
    </po-select>

    <po-select class="po-md-6" name="city" [(ngModel)]="city" p-label="City" [p-options]="cityOptions"> </po-select>
  </div>

  <div class="po-row">
    <po-button class="po-md-4" p-label="Send Informations" [p-disabled]="f.invalid" (p-click)="modal.open()">
    </po-button>
  </div>
</form>

<po-modal #modal p-title="Informations">
  <div class="po-row">
    <po-info class="po-md-6" p-label="Document type" [p-value]="documentType"> </po-info>

    <po-info class="po-md-6" [p-label]="documentLabel" [p-value]="document"> </po-info>
  </div>

  <po-divider />

  <div class="po-row">
    <po-info class="po-md-6" [p-label]="nameLabel" [p-value]="name"> </po-info>

    <po-info class="po-md-6" p-label="Address" [p-value]="address"> </po-info>
  </div>

  <po-divider />

  <div class="po-row">
    <po-info class="po-md-6" p-label="State" [p-value]="getStateByValue(state)"> </po-info>

    <po-info class="po-md-6" p-label="City" [p-value]="getCityByValue(city)"> </po-info>
  </div>
</po-modal>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-select-customer-registration/sample-po-select-customer-registration.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, OnDestroy, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

import { Subscription } from 'rxjs';

import { PoRadioGroupOption, PoSelectOption } from '@po-ui/ng-components';

import { SamplePoSelectCustomerRegistrationService } from './sample-po-select-customer-registration.service';

@Component({
  selector: 'sample-po-select-customer-registration',
  templateUrl: './sample-po-select-customer-registration.component.html',
  providers: [SamplePoSelectCustomerRegistrationService],
  styleUrls: ['./sample-po-select-customer-registration.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSelectCustomerRegistrationComponent implements OnDestroy, OnInit {
  private sampleService = inject(SamplePoSelectCustomerRegistrationService);

  address: string;
  city: number;
  cityOptions: Array<PoSelectOption>;
  document: string;
  documentLabel;
  documentType: string;
  mask: string;
  minLength: number;
  name: string;
  nameLabel: string;
  state: string;
  stateOptions: Array<PoSelectOption>;

  readonly options: Array<PoRadioGroupOption> = [
    { label: 'CPF', value: 'CPF' },
    { label: 'CNPJ', value: 'CNPJ' }
  ];

  private citiesSubscription: Subscription;
  private statesSubscription: Subscription;

  ngOnDestroy() {
    this.citiesSubscription?.unsubscribe();
    this.statesSubscription?.unsubscribe();
  }

  ngOnInit() {
    this.initialize();
    this.getStates();
    this.changeType(this.documentType);
  }

  changeType(documentType) {
    if (documentType === 'CPF') {
      this.documentLabel = 'CPF Number';
      this.mask = '999.999.999-99';
      this.minLength = 14;
      this.nameLabel = 'Client Name';
    } else {
      this.documentLabel = 'CNPJ Number';
      this.mask = '99.999.999/9999-99';
      this.minLength = 18;
      this.nameLabel = 'Company Name';
    }

    this.address = '';
    this.document = '';
    this.name = '';
  }

  initialize() {
    this.cityOptions = [];
    this.stateOptions = [];
    this.documentType = 'CPF';
  }

  onChangeState() {
    this.getCitiesByState(this.state);
  }

  getCityByValue(cityValue: number) {
    const cityLabel = this.cityOptions.find(city => city.value === cityValue);
    return cityLabel ? cityLabel.label : '';
  }

  getStateByValue(stateValue: string) {
    const stateLabel = this.stateOptions.find(state => state.value === stateValue);
    return stateLabel ? stateLabel.label : '';
  }

  private getCitiesByState(state: string) {
    this.citiesSubscription = this.sampleService
      .getCitiesByState(state)
      .subscribe((cities: { items: Array<PoSelectOption> }) => {
        this.cityOptions = cities.items;
        this.city = this.cityOptions[0].value as number;
      });
  }

  private getStates() {
    this.statesSubscription = this.sampleService.getStates().subscribe((states: { items: Array<PoSelectOption> }) => {
      this.stateOptions = states.items;
      this.state = 'sp';

      this.getCitiesByState(this.state);
    });
  }
}
`),og(),Il(21,"label",6),Qx(22,"sample-po-select-customer-registration/sample-po-select-customer-registration.service.ts"),og(),Il(23,"pre",9),Qx(24,`import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SamplePoSelectCustomerRegistrationService {
  private http = inject(HttpClient);

  private url: string = 'https://po-sample-api.onrender.com/v1/sampleSelect';

  getCitiesByState(uf: string) {
    return this.http.get(\`\${this.url}/getCities/\${uf}\`);
  }

  getStates() {
    return this.http.get(\`\${this.url}/getStates\`);
  }
}
`),og()()(),Il(25,"po-tab",10)(26,"div")(27,"label",6),Qx(28,"sample-po-select-customer-registration/sample-po-select-customer-registration.component.css"),og(),Il(29,"pre",11),Qx(30,`.sample-select-option-template-container {
  display: inline-flex;
  align-items: flex-start;
  width: 100%;
}

.sample-select-option-template-margin {
  margin: 5px;
}

.sample-select-option-template-label {
  font-size: 16px;
}

.sample-select-option-template-value {
  font-size: 12px;
  text-transform: uppercase;
}
`),og()()()()(),Il(31,"div",12),zl(32,"sample-po-select-customer-registration"),og(),zl(33,"hr")),p&2&&(Lp(5),Ux("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,Ne,i.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,xe],encapsulation:2})}return a})();var _e=(()=>{class a{select;fieldLabel="nomeFantasia";fieldValue="cnpj";empresas=[{codigo:"1",nomeFantasia:"TOTVS SA",razaoSocial:"TOTVS LTDA",label:"TOTVS COMPANY",cnpj:"01.234.567/0000-01",value:"100",id:"10",email:"totvscompany@sample.com",data:"10/03/2015",origem:"S\xE3o Paulo"},{codigo:"2",nomeFantasia:"INSTITUTO TOTVS DE ENSINO SA",razaoSocial:"INST TOTVS DE ENSINO LTDA",label:"INST TOTVS",cnpj:"02.345.678/0000-02",value:"200",id:"20",email:"insttotvs@sample.com",data:"10/10/2020",origem:"Joinville"},{codigo:"3",nomeFantasia:"TOTVS ENTERPRISE SA",razaoSocial:"TOTVS ENTERPRISE LTDA ",label:"ENT TOTVS",cnpj:"03.456.789/0000-03",value:"300",id:"30",email:"enttotvs@sample.com",data:"10/01/2022",origem:"Curitiba"}];labels=[{label:"Dados",options:[{label:"nomeFantasia",value:"nomeFantasia"},{label:"razaoSocial",value:"razaoSocial"},{label:"email",value:"email"}]},{label:"Cidade",options:[{label:"origem",value:"origem"}]}];values=[{label:"codigo",value:"codigo"},{label:"cnpj",value:"cnpj"},{label:"id",value:"id"},{label:"data",value:"data"}];onChange(r){this.select=void 0;}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-select-companies"]],standalone:false,decls:5,vars:9,consts:[["name","select","p-label","PO Select",3,"ngModelChange","ngModel","p-field-value","p-field-label","p-options"],["p-label","Model","name","selectInfo",3,"p-valueChange","p-value"],[1,"po-row"],["name","fieldLabel","p-label","p-field-label",1,"po-md-6",3,"p-change","ngModelChange","p-options","ngModel"],["name","selectValue","p-label","p-field-value",1,"po-md-6",3,"p-change","ngModelChange","p-options","ngModel"]],template:function(p,i){p&1&&(Il(0,"po-select",0),ww("ngModelChange",function(d){return eN(i.select,d)||(i.select=d),d}),og(),QA(),Il(1,"po-info",1),ww("p-valueChange",function(d){return eN(i.select,d)||(i.select=d),d}),og(),Il(2,"div",2)(3,"po-select",3),ft("p-change",function(d){return i.onChange(d)}),ww("ngModelChange",function(d){return eN(i.fieldLabel,d)||(i.fieldLabel=d),d}),og(),QA(),Il(4,"po-select",4),ft("p-change",function(d){return i.onChange(d)}),ww("ngModelChange",function(d){return eN(i.fieldValue,d)||(i.fieldValue=d),d}),og(),QA(),og()),p&2&&(Ew("ngModel",i.select),nw("p-field-value",i.fieldValue)("p-field-label",i.fieldLabel)("p-options",i.empresas),e0(),Lp(),Ew("p-value",i.select),Lp(2),nw("p-options",i.labels),Ew("ngModel",i.fieldLabel),e0(),Lp(),nw("p-options",i.values),Ew("ngModel",i.fieldValue),e0());},dependencies:[$9,mk,qhe,Yhe],encapsulation:2,changeDetection:1})}return a})();var Re=a=>({"docs-sample-code-tabs":a}),Pe=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-select-companies-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,i){p&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Select Companies"),og(),Il(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-select-companies/sample-po-select-companies.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-select
  name="select"
  p-label="PO Select"
  [(ngModel)]="select"
  [p-field-value]="fieldValue"
  [p-field-label]="fieldLabel"
  [p-options]="empresas"
>
</po-select>

<po-info p-label="Model" name="selectInfo" [(p-value)]="select"> </po-info>

<div class="po-row">
  <po-select
    class="po-md-6"
    name="fieldLabel"
    p-label="p-field-label"
    [p-options]="labels"
    (p-change)="onChange($event)"
    [(ngModel)]="fieldLabel"
  >
  </po-select>

  <po-select
    class="po-md-6"
    name="selectValue"
    p-label="p-field-value"
    [p-options]="values"
    (p-change)="onChange($event)"
    [(ngModel)]="fieldValue"
  >
  </po-select>
</div>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-select-companies/sample-po-select-companies.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

import { PoSelectOption, PoSelectOptionGroup } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-select-companies',
  templateUrl: './sample-po-select-companies.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSelectCompaniesComponent {
  select: Array<string>;
  fieldLabel = 'nomeFantasia';
  fieldValue = 'cnpj';

  empresas: Array<any> = [
    {
      codigo: '1',
      nomeFantasia: 'TOTVS SA',
      razaoSocial: 'TOTVS LTDA',
      label: 'TOTVS COMPANY',
      cnpj: '01.234.567/0000-01',
      value: '100',
      id: '10',
      email: 'totvscompany@sample.com',
      data: '10/03/2015',
      origem: 'S\xE3o Paulo'
    },
    {
      codigo: '2',
      nomeFantasia: 'INSTITUTO TOTVS DE ENSINO SA',
      razaoSocial: 'INST TOTVS DE ENSINO LTDA',
      label: 'INST TOTVS',
      cnpj: '02.345.678/0000-02',
      value: '200',
      id: '20',
      email: 'insttotvs@sample.com',
      data: '10/10/2020',
      origem: 'Joinville'
    },
    {
      codigo: '3',
      nomeFantasia: 'TOTVS ENTERPRISE SA',
      razaoSocial: 'TOTVS ENTERPRISE LTDA ',
      label: 'ENT TOTVS',
      cnpj: '03.456.789/0000-03',
      value: '300',
      id: '30',
      email: 'enttotvs@sample.com',
      data: '10/01/2022',
      origem: 'Curitiba'
    }
  ];

  readonly labels: Array<PoSelectOptionGroup> = [
    {
      label: 'Dados',
      options: [
        { label: 'nomeFantasia', value: 'nomeFantasia' },
        { label: 'razaoSocial', value: 'razaoSocial' },
        { label: 'email', value: 'email' }
      ]
    },
    {
      label: 'Cidade',
      options: [{ label: 'origem', value: 'origem' }]
    }
  ];

  readonly values: Array<PoSelectOption> = [
    { label: 'codigo', value: 'codigo' },
    { label: 'cnpj', value: 'cnpj' },
    { label: 'id', value: 'id' },
    { label: 'data', value: 'data' }
  ];

  onChange(event) {
    this.select = undefined;
  }
}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-select-companies"),og(),zl(23,"hr")),p&2&&(Lp(5),Ux("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,Re,i.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,_e],encapsulation:2})}return a})();var we=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-select-doc"]],standalone:false,decls:1068,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-combo-option-template"],["href","/documentation/po-select-option-template"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","any[]"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-helper"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"language-typescript"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Array<PoSelectOption>"],["pan","",1,"docs-api-property-type","number"]],template:function(p,i){p&1&&(Il(0,"div",0)(1,"p",1)(2,"code"),Qx(3,"import { PoFieldModule } from '@po-ui/ng-components';"),og()(),Il(4,"div",2)(5,"p"),Qx(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),og(),Il(7,"blockquote")(8,"p"),Qx(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),Il(10,"code"),Qx(11,"FormsModule"),og(),Qx(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Il(13,"code"),Qx(14,"ReactiveFormsModule"),og(),Qx(15,", ambos nativos do Angular."),og()()(),Il(16,"h3",3),Qx(17,"Componente"),og(),Il(18,"h4",4)(19,"code",5),Qx(20,"PoSelectComponent"),og()(),Il(21,"div",2)(22,"p"),Qx(23,` O componente po-select exibe uma lista de valores e permite que o usu\xE1rio selecione um desses valores.
Os valores listados podem ser fixos ou din\xE2micos de acordo com a necessidade do desenvolvedor, dando mais flexibilidade ao componente.
O po-select n\xE3o permite que o usu\xE1rio informe um valor diferente dos valores listados, isso garante a consist\xEAncia da informa\xE7\xE3o.
O po-select n\xE3o permite que sejam passados valores duplicados, undefined e null para as op\xE7\xF5es, excluindo-os da lista.`),og(),Il(24,"blockquote")(25,"p"),Qx(26,"Ao passar um valor para o "),Il(27,"em"),Qx(28,"model"),og(),Qx(29," que n\xE3o est\xE1 na lista de op\xE7\xF5es, o mesmo ser\xE1 definido como "),Il(30,"code"),Qx(31,"undefined"),og(),Qx(32,"."),og()(),Il(33,"p"),Qx(34,"Tamb\xE9m existe a possibilidade de utilizar um "),Il(35,"em"),Qx(36,"template"),og(),Qx(37,` para a exibi\xE7\xE3o dos itens da lista,
veja mais em `),Il(38,"strong")(39,"a",6),Qx(40,"p-combo-option-template"),og()(),Qx(41,"."),og(),Il(42,"blockquote")(43,"p"),Qx(44,"Obs: o template "),Il(45,"strong")(46,"a",7),Qx(47,"p-select-option-template"),og()(),Qx(48," ser\xE1 depreciado na vers\xE3o 14.x.x."),og()(),Il(49,"h4"),Qx(50,"Tokens customiz\xE1veis"),og(),Il(51,"p"),Qx(52,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),og(),Il(53,"blockquote")(54,"p"),Qx(55,"Para maiores informa\xE7\xF5es, acesse o guia "),Il(56,"a",8),Qx(57,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),Qx(58,"."),og()(),Il(59,"table")(60,"thead")(61,"tr")(62,"th"),Qx(63,"Propriedade"),og(),Il(64,"th"),Qx(65,"Descri\xE7\xE3o"),og(),Il(66,"th"),Qx(67,"Valor Padr\xE3o"),og()()(),Il(68,"tbody")(69,"tr")(70,"td")(71,"strong"),Qx(72,"Default Values"),og()(),zl(73,"td")(74,"td"),og(),Il(75,"tr")(76,"td")(77,"code"),Qx(78,"--font-family"),og()(),Il(79,"td"),Qx(80,"Fam\xEDlia tipogr\xE1fica usada"),og(),Il(81,"td")(82,"code"),Qx(83,"var(--font-family-theme)"),og()()(),Il(84,"tr")(85,"td")(86,"code"),Qx(87,"--font-size"),og()(),Il(88,"td"),Qx(89,"Tamanho da fonte"),og(),Il(90,"td")(91,"code"),Qx(92,"var(--font-size-default)"),og()()(),Il(93,"tr")(94,"td")(95,"code"),Qx(96,"--text-color-empty"),og()(),Il(97,"td"),Qx(98,"Cor do placeholder"),og(),Il(99,"td")(100,"code"),Qx(101,"var(--color-neutral-light-30)"),og()()(),Il(102,"tr")(103,"td")(104,"code"),Qx(105,"--color"),og()(),Il(106,"td"),Qx(107,"Cor da borda"),og(),Il(108,"td")(109,"code"),Qx(110,"var(--color-neutral-dark-70)"),og()()(),Il(111,"tr")(112,"td")(113,"code"),Qx(114,"--background"),og()(),Il(115,"td"),Qx(116,"Cor de background"),og(),Il(117,"td")(118,"code"),Qx(119,"var(--color-neutral-light-05)"),og()()(),Il(120,"tr")(121,"td")(122,"code"),Qx(123,"--text-color"),og()(),Il(124,"td"),Qx(125,"Cor do texto"),og(),Il(126,"td")(127,"code"),Qx(128,"var(--color-neutral-dark-90)"),og()()(),Il(129,"tr")(130,"td")(131,"code"),Qx(132,"--padding-horizontal"),og()(),Il(133,"td"),Qx(134,"Preenchimento horizontal"),og(),Il(135,"td")(136,"code"),Qx(137,"0.5em"),og()()(),Il(138,"tr")(139,"td")(140,"code"),Qx(141,"--padding-vertical"),og()(),Il(142,"td"),Qx(143,"Preenchimento vertical"),og(),Il(144,"td")(145,"code"),Qx(146,"0.7em"),og()()(),Il(147,"tr")(148,"td")(149,"code"),Qx(150,"--field-container-title-justify"),og()(),Il(151,"td"),Qx(152,"Alinhamento horizontal do t\xEDtulo ("),Il(153,"code"),Qx(154,"justify-content"),og(),Qx(155,")"),og(),Il(156,"td")(157,"code"),Qx(158,"space-between"),og()()(),Il(159,"tr")(160,"td")(161,"code"),Qx(162,"--field-container-title-flex"),og()(),Il(163,"td"),Qx(164,"Flex do t\xEDtulo ("),Il(165,"code"),Qx(166,"flex"),og(),Qx(167,")"),og(),Il(168,"td")(169,"code"),Qx(170,"1 auto"),og()()(),Il(171,"tr")(172,"td")(173,"strong"),Qx(174,"Hover"),og()(),zl(175,"td")(176,"td"),og(),Il(177,"tr")(178,"td")(179,"code"),Qx(180,"--color-hover"),og()(),Il(181,"td"),Qx(182,"Cor principal no estado hover"),og(),Il(183,"td")(184,"code"),Qx(185,"var(--color-brand-01-dark)"),og()()(),Il(186,"tr")(187,"td")(188,"code"),Qx(189,"--background-hover"),og()(),Il(190,"td"),Qx(191,"Cor de background no estado hover"),og(),Il(192,"td")(193,"code"),Qx(194,"var(--color-brand-01-lighter)"),og()()(),Il(195,"tr")(196,"td")(197,"strong"),Qx(198,"Focused"),og()(),zl(199,"td")(200,"td"),og(),Il(201,"tr")(202,"td")(203,"code"),Qx(204,"--outline-color-focused"),og()(),Il(205,"td"),Qx(206,"Cor do outline do estado de focus"),og(),Il(207,"td")(208,"code"),Qx(209,"var(--color-action-focus)"),og()()(),Il(210,"tr")(211,"td")(212,"code"),Qx(213,"--color-focused"),og()(),Il(214,"td"),Qx(215,"Cor da borda no estado de focus"),og(),Il(216,"td")(217,"code"),Qx(218,"var(--color-action-default)"),og()()(),Il(219,"tr")(220,"td")(221,"strong"),Qx(222,"Disabled"),og()(),zl(223,"td")(224,"td"),og(),Il(225,"tr")(226,"td")(227,"code"),Qx(228,"--color-disabled"),og()(),Il(229,"td"),Qx(230,"Cor principal no estado disabled"),og(),Il(231,"td")(232,"code"),Qx(233,"var(--color-neutral-light-30)"),og()()(),Il(234,"tr")(235,"td")(236,"code"),Qx(237,"--background-color-disabled"),og(),Qx(238,"\xA0"),og(),Il(239,"td"),Qx(240,"Cor de background no estado disabled"),og(),Il(241,"td")(242,"code"),Qx(243,"var(--color-neutral-light-20)"),og()()()()()(),Il(244,"div",9)(245,"h4",10),Qx(246,"Seletor"),og(),Il(247,"pre",11),Qx(248,`<po-select
    (p-additional-help)="EventEmitter"
    p-additional-help-tooltip="string"
    p-append-in-body="boolean"
    (p-blur)="EventEmitter"
    (p-change)="EventEmitter"
    p-compact-label="boolean"
    p-disabled="boolean"
    p-error-limit="boolean"
    p-field-error-message="string"
    p-field-label="string"
    p-field-value="string"
    p-help="string"
    (p-keydown)="EventEmitter"
    p-label="string"
    p-label-text-wrap="boolean"
    p-loading="boolean"
    name="string"
    (ng-model-change)="EventEmitter"
    p-optional="boolean"
    p-options="any[]"
    p-placeholder="string"
    p-helper="PoHelperOptions | string"
    p-readonly="boolean"
    p-required="boolean"
    p-show-required="boolean"
    p-size="string" >
</po-select>
`),og()(),Il(249,"h4",12),Qx(250,"Propriedades"),og(),Il(251,"table",13)(252,"tr",14)(253,"th",15),Qx(254,"Nome"),og(),Il(255,"th",15),Qx(256,"Tipo"),og(),Il(257,"th",15),Qx(258,"Padr\xE3o"),og(),Il(259,"th",15),Qx(260,"Descri\xE7\xE3o"),og()(),Il(261,"tr",16)(262,"td",17)(263,"div",18)(264,"span",19),Qx(265," (p-additional-help)"),zl(266,"br"),og()(),Il(267,"div",20),Qx(268,"Deprecated"),og()(),Il(269,"td",21)(270,"code",22),Qx(271,"EventEmitter"),og()(),Il(272,"td",23),Qx(273,"-"),og(),Il(274,"td",24)(275,"em")(276,"strong"),Qx(277,"(opcional)"),og()(),Il(278,"p"),Qx(279,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),og(),Il(280,"blockquote")(281,"p"),Qx(282,"Essa propriedade est\xE1 "),Il(283,"strong"),Qx(284,"depreciada"),og(),Qx(285," e ser\xE1 removida na vers\xE3o "),Il(286,"code"),Qx(287,"23.x.x"),og(),Qx(288,". Recomendamos utilizar a propriedade "),Il(289,"code"),Qx(290,"p-helper"),og(),Qx(291," que oferece mais recursos e flexibilidade."),og()()()(),Il(292,"tr",16)(293,"td",17)(294,"div",25)(295,"span",26),Qx(296," p-additional-help-tooltip"),zl(297,"br"),og()(),Il(298,"div",20),Qx(299,"Deprecated"),og()(),Il(300,"td",21)(301,"code",27),Qx(302,"string"),og()(),Il(303,"td",23),Qx(304,"-"),og(),Il(305,"td",24)(306,"em")(307,"strong"),Qx(308,"(opcional)"),og()(),Il(309,"p"),Qx(310,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),Il(311,"code"),Qx(312,"po-helper"),og(),Qx(313,`.
`),Il(314,"strong"),Qx(315,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),og()(),Il(316,"blockquote")(317,"p"),Qx(318,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),og()(),Il(319,"blockquote")(320,"p"),Qx(321,"Essa propriedade est\xE1 "),Il(322,"strong"),Qx(323,"depreciada"),og(),Qx(324," e ser\xE1 removida na vers\xE3o "),Il(325,"code"),Qx(326,"23.x.x"),og(),Qx(327,". Recomendamos utilizar a propriedade "),Il(328,"code"),Qx(329,"p-helper"),og(),Qx(330," que oferece mais recursos e flexibilidade."),og()()()(),Il(331,"tr",16)(332,"td",17)(333,"div",25)(334,"span",26),Qx(335," p-append-in-body"),zl(336,"br"),og()()(),Il(337,"td",21)(338,"code",28),Qx(339,"boolean"),og()(),Il(340,"td",23)(341,"p")(342,"code"),Qx(343,"false"),og()()(),Il(344,"td",24)(345,"em")(346,"strong"),Qx(347,"(opcional)"),og()(),Il(348,"p"),Qx(349,"Define que o popover ("),Il(350,"code"),Qx(351,"p-helper"),og(),Qx(352," e/ou "),Il(353,"code"),Qx(354,"p-error-limit"),og(),Qx(355,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),og(),Il(356,"blockquote")(357,"p"),Qx(358,"Quando utilizado com "),Il(359,"code"),Qx(360,"p-helper"),og(),Qx(361,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),og()()()(),Il(362,"tr",16)(363,"td",17)(364,"div",18)(365,"span",19),Qx(366," (p-blur)"),zl(367,"br"),og()()(),Il(368,"td",21)(369,"code",22),Qx(370,"EventEmitter"),og()(),Il(371,"td",23),Qx(372,"-"),og(),Il(373,"td",24)(374,"em")(375,"strong"),Qx(376,"(opcional)"),og()(),Il(377,"p"),Qx(378,"Evento disparado ao sair do campo."),og()()(),Il(379,"tr",16)(380,"td",17)(381,"div",18)(382,"span",19),Qx(383," (p-change)"),zl(384,"br"),og()()(),Il(385,"td",21)(386,"code",22),Qx(387,"EventEmitter"),og()(),Il(388,"td",23),Qx(389,"-"),og(),Il(390,"td",24)(391,"em")(392,"strong"),Qx(393,"(opcional)"),og()(),Il(394,"p"),Qx(395,"Evento disparado ao alterar valor do campo."),og()()(),Il(396,"tr",16)(397,"td",17)(398,"div",25)(399,"span",26),Qx(400," p-compact-label"),zl(401,"br"),og()()(),Il(402,"td",21)(403,"code",28),Qx(404,"boolean"),og()(),Il(405,"td",23)(406,"p")(407,"code"),Qx(408,"false"),og()()(),Il(409,"td",24)(410,"em")(411,"strong"),Qx(412,"(opcional)"),og()(),Il(413,"p"),Qx(414,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),og(),Il(415,"p"),Qx(416,"Quando habilitado ("),Il(417,"code"),Qx(418,"true"),og(),Qx(419,"), o modo compacto afeta o conjunto composto por:"),og(),Il(420,"ul")(421,"li")(422,"code"),Qx(423,"po-label"),og()(),Il(424,"li")(425,"code"),Qx(426,"p-requirement (showRequired)"),og()(),Il(427,"li")(428,"code"),Qx(429,"po-helper"),og()()(),Il(430,"p"),Qx(431,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),og(),Il(432,"p"),Qx(433,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),og(),Il(434,"ul")(435,"li")(436,"code"),Qx(437,"--field-container-title-justify"),og()(),Il(438,"li")(439,"code"),Qx(440,"--field-container-title-flex"),og()()(),Il(441,"p"),Qx(442,"Exemplo:"),og(),Il(443,"pre")(444,"code"),Qx(445,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),og()(),Il(446,"p"),Qx(447,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),og()()(),Il(448,"tr",16)(449,"td",17)(450,"div",25)(451,"span",26),Qx(452," p-disabled"),zl(453,"br"),og()()(),Il(454,"td",21)(455,"code",28),Qx(456,"boolean"),og()(),Il(457,"td",23)(458,"p")(459,"code"),Qx(460,"false"),og()()(),Il(461,"td",24)(462,"em")(463,"strong"),Qx(464,"(opcional)"),og()(),Il(465,"p"),Qx(466,"Indica se o campo ser\xE1 desabilitado."),og()()(),Il(467,"tr",16)(468,"td",17)(469,"div",25)(470,"span",26),Qx(471," p-error-limit"),zl(472,"br"),og()()(),Il(473,"td",21)(474,"code",28),Qx(475,"boolean"),og()(),Il(476,"td",23)(477,"p")(478,"code"),Qx(479,"false"),og()()(),Il(480,"td",24)(481,"em")(482,"strong"),Qx(483,"(opcional)"),og()(),Il(484,"p"),Qx(485,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),og(),Il(486,"blockquote")(487,"p"),Qx(488,"Caso essa propriedade seja definida como "),Il(489,"code"),Qx(490,"true"),og(),Qx(491,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),og()()()(),Il(492,"tr",16)(493,"td",17)(494,"div",25)(495,"span",26),Qx(496," p-field-error-message"),zl(497,"br"),og()()(),Il(498,"td",21)(499,"code",27),Qx(500,"string"),og()(),Il(501,"td",23),Qx(502,"-"),og(),Il(503,"td",24)(504,"em")(505,"strong"),Qx(506,"(opcional)"),og()(),Il(507,"p"),Qx(508,"Exibe a mensagem setada se o campo estiver vazio e for requerido."),og(),Il(509,"blockquote")(510,"p"),Qx(511,"Necess\xE1rio que a propriedade "),Il(512,"code"),Qx(513,"p-required"),og(),Qx(514," esteja habilitada."),og()()()(),Il(515,"tr",16)(516,"td",17)(517,"div",25)(518,"span",26),Qx(519," p-field-label"),zl(520,"br"),og()()(),Il(521,"td",21)(522,"code",27),Qx(523,"string"),og()(),Il(524,"td",23)(525,"p")(526,"code"),Qx(527,"label"),og()()(),Il(528,"td",24)(529,"em")(530,"strong"),Qx(531,"(opcional)"),og()(),Il(532,"p"),Qx(533,`Deve ser informado o nome da propriedade do objeto que ser\xE1 utilizado para a convers\xE3o dos itens apresentados na lista do componente
(`),Il(534,"code"),Qx(535,"p-options"),og(),Qx(536,"), esta propriedade ser\xE1 respons\xE1vel pelo texto de apresenta\xE7\xE3o de cada item da lista."),og()()(),Il(537,"tr",16)(538,"td",17)(539,"div",25)(540,"span",26),Qx(541," p-field-value"),zl(542,"br"),og()()(),Il(543,"td",21)(544,"code",27),Qx(545,"string"),og()(),Il(546,"td",23)(547,"p")(548,"code"),Qx(549,"value"),og()()(),Il(550,"td",24)(551,"em")(552,"strong"),Qx(553,"(opcional)"),og()(),Il(554,"p"),Qx(555,`Deve ser informado o nome da propriedade do objeto que ser\xE1 utilizado para a convers\xE3o dos itens apresentados na lista do componente
(`),Il(556,"code"),Qx(557,"p-options"),og(),Qx(558,"), esta propriedade ser\xE1 respons\xE1vel pelo valor de cada item da lista."),og()()(),Il(559,"tr",16)(560,"td",17)(561,"div",25)(562,"span",26),Qx(563," p-help"),zl(564,"br"),og()()(),Il(565,"td",21)(566,"code",27),Qx(567,"string"),og()(),Il(568,"td",23),Qx(569,"-"),og(),Il(570,"td",24)(571,"p"),Qx(572,"Texto de apoio para o campo."),og()()(),Il(573,"tr",16)(574,"td",17)(575,"div",18)(576,"span",19),Qx(577," (p-keydown)"),zl(578,"br"),og()()(),Il(579,"td",21)(580,"code",22),Qx(581,"EventEmitter"),og()(),Il(582,"td",23),Qx(583,"-"),og(),Il(584,"td",24)(585,"em")(586,"strong"),Qx(587,"(opcional)"),og()(),Il(588,"p"),Qx(589,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Il(590,"code"),Qx(591,"KeyboardEvent"),og(),Qx(592," com informa\xE7\xF5es sobre a tecla."),og()()(),Il(593,"tr",16)(594,"td",17)(595,"div",25)(596,"span",26),Qx(597," p-label"),zl(598,"br"),og()()(),Il(599,"td",21)(600,"code",27),Qx(601,"string"),og()(),Il(602,"td",23),Qx(603,"-"),og(),Il(604,"td",24)(605,"p"),Qx(606,"R\xF3tulo exibido pelo componente."),og()()(),Il(607,"tr",16)(608,"td",17)(609,"div",25)(610,"span",26),Qx(611," p-label-text-wrap"),zl(612,"br"),og()()(),Il(613,"td",21)(614,"code",28),Qx(615,"boolean"),og()(),Il(616,"td",23)(617,"p")(618,"code"),Qx(619,"false"),og()()(),Il(620,"td",24)(621,"em")(622,"strong"),Qx(623,"(opcional)"),og()(),Il(624,"p"),Qx(625,"Habilita a quebra autom\xE1tica do texto da propriedade "),Il(626,"code"),Qx(627,"p-label"),og(),Qx(628,". Quando "),Il(629,"code"),Qx(630,"p-label-text-wrap"),og(),Qx(631,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),og()()(),Il(632,"tr",16)(633,"td",17)(634,"div",25)(635,"span",26),Qx(636," p-loading"),zl(637,"br"),og()()(),Il(638,"td",21)(639,"code",28),Qx(640,"boolean"),og()(),Il(641,"td",23)(642,"p")(643,"code"),Qx(644,"false"),og()()(),Il(645,"td",24)(646,"em")(647,"strong"),Qx(648,"(opcional)"),og()(),Il(649,"p"),Qx(650,"Exibe um \xEDcone de carregamento no lado direito do campo para sinalizar que uma opera\xE7\xE3o est\xE1 em andamento."),og()()(),Il(651,"tr",16)(652,"td",17)(653,"div",25)(654,"span",26),Qx(655," name"),zl(656,"br"),og()()(),Il(657,"td",21)(658,"code",27),Qx(659,"string"),og()(),Il(660,"td",23),Qx(661,"-"),og(),Il(662,"td",24)(663,"p"),Qx(664,"Nome do componente."),og()()(),Il(665,"tr",16)(666,"td",17)(667,"div",18)(668,"span",19),Qx(669," (ngModelChange)"),zl(670,"br"),og()()(),Il(671,"td",21)(672,"code",22),Qx(673,"EventEmitter"),og()(),Il(674,"td",23),Qx(675,"-"),og(),Il(676,"td",24)(677,"em")(678,"strong"),Qx(679,"(opcional)"),og()(),Il(680,"p"),Qx(681,"Fun\xE7\xE3o para atualizar o ngModel do componente, necess\xE1rio quando n\xE3o for utilizado dentro da tag form."),og(),Il(682,"p"),Qx(683,"Na vers\xE3o 12.2.0 do Angular a verifica\xE7\xE3o "),Il(684,"code"),Qx(685,"strictTemplates"),og(),Qx(686,` vem true como default. Portanto, para utilizar
two-way binding no componente deve se utilizar da seguinte forma:`),og(),Il(687,"pre")(688,"code"),Qx(689,`<po-select ... [ngModel]="selectModel" (ngModelChange)="selectModel = $event"> </po-select>
`),og()()()(),Il(690,"tr",16)(691,"td",17)(692,"div",25)(693,"span",26),Qx(694," p-optional"),zl(695,"br"),og()()(),Il(696,"td",21)(697,"code",28),Qx(698,"boolean"),og()(),Il(699,"td",23)(700,"p")(701,"code"),Qx(702,"false"),og()()(),Il(703,"td",24)(704,"em")(705,"strong"),Qx(706,"(opcional)"),og()(),Il(707,"p"),Qx(708,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),og(),Il(709,"blockquote")(710,"p"),Qx(711,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),og()(),Il(712,"ul")(713,"li"),Qx(714,"O campo conter "),Il(715,"code"),Qx(716,"p-required"),og(),Qx(717,";"),og(),Il(718,"li"),Qx(719,"N\xE3o possuir "),Il(720,"code"),Qx(721,"p-help"),og(),Qx(722," e/ou "),Il(723,"code"),Qx(724,"p-label"),og(),Qx(725,"."),og()()()(),Il(726,"tr",16)(727,"td",17)(728,"div",25)(729,"span",26),Qx(730," p-options"),zl(731,"br"),og()()(),Il(732,"td",21)(733,"code",29),Qx(734,"any[]"),og()(),Il(735,"td",23),Qx(736,"-"),og(),Il(737,"td",24)(738,"p"),Qx(739,"Nesta propriedade deve ser definido uma cole\xE7\xE3o de objetos que implementam a interface "),Il(740,"code"),Qx(741,"PoSelectOption"),og(),Qx(742,`,
ou uma cole\xE7\xE3o de objetos dentro de grupos diferentes, que seriam da interface `),Il(743,"code"),Qx(744,"PoSelectOptionGroup"),og(),Qx(745,"."),og(),Il(746,"p"),Qx(747,"Caso esta lista estiver vazia, o model ser\xE1 "),Il(748,"code"),Qx(749,"undefined"),og(),Qx(750,"."),og(),Il(751,"blockquote")(752,"p"),Qx(753,`Essa propriedade \xE9 imut\xE1vel, ou seja, sempre que quiser atualizar a lista de op\xE7\xF5es dispon\xEDveis
atualize a refer\xEAncia do objeto:`),og()(),Il(754,"pre")(755,"code"),Qx(756,`// atualiza a refer\xEAncia do objeto garantindo a atualiza\xE7\xE3o do template
this.options = [...this.options, { value: 'x', label: 'Nova op\xE7\xE3o' }];

// evite, pois n\xE3o atualiza a refer\xEAncia do objeto podendo gerar atrasos na atualiza\xE7\xE3o do template
this.options.push({ value: 'x', label: 'Nova op\xE7\xE3o' });
`),og()(),Il(757,"blockquote")(758,"p"),Qx(759,"Para cole\xE7\xE3o de objetos dentro de grupos distintos ser\xE1 exibido a label e op\xE7\xF5es somente se a propriedade "),Il(760,"code"),Qx(761,"options"),og(),Qx(762," possua valores. Sendo assim, a estrutura seguiria dessa forma:"),og()(),Il(763,"pre")(764,"code"),Qx(765,`this.options = [{
 label: 'Op\xE7\xF5es',
 options: [
   { value: 1, label: 'op\xE7\xE3o 1' },
   { value: 2, label: 'op\xE7\xE3o 2' }
 ],
}];
`),og()(),Il(766,"p"),Qx(767,`\xC9 poss\xEDvel a utiliza\xE7\xE3o de op\xE7\xF5es agrupadas e desagrupadas em conjunto, por\xE9m ser\xE1 feita a ordena\xE7\xE3o de exibir as op\xE7\xF5es
desagrupadas acima.`),og()()(),Il(768,"tr",16)(769,"td",17)(770,"div",25)(771,"span",26),Qx(772," p-placeholder"),zl(773,"br"),og()()(),Il(774,"td",21)(775,"code",27),Qx(776,"string"),og()(),Il(777,"td",23),Qx(778,"-"),og(),Il(779,"td",24)(780,"em")(781,"strong"),Qx(782,"(opcional)"),og()(),Il(783,"p"),Qx(784,"Mensagem que aparecer\xE1 enquanto nenhuma op\xE7\xE3o estiver selecionada."),og()()(),Il(785,"tr",16)(786,"td",17)(787,"div",25)(788,"span",26),Qx(789," p-helper"),zl(790,"br"),og()()(),Il(791,"td",21)(792,"code",30),Qx(793,"PoHelperOptions "),og(),Il(794,"code",27),Qx(795," string"),og()(),Il(796,"td",23),Qx(797,"-"),og(),Il(798,"td",24)(799,"em")(800,"strong"),Qx(801,"(opcional)"),og()(),Il(802,"p"),Qx(803,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label quando a propriedade "),Il(804,"code"),Qx(805,"p-label"),og(),Qx(806," for definida, ou, ao lado do componente na aus\xEAncia da propriedade "),Il(807,"code"),Qx(808,"p-label"),og(),Qx(809,"."),og(),Il(810,"blockquote")(811,"p"),Qx(812,"Para mais informa\xE7\xF5es acesse: "),Il(813,"a",31),Qx(814,"https://po-ui.io/documentation/po-helper"),og(),Qx(815,"."),og()(),Il(816,"blockquote")(817,"p"),Qx(818,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),Il(819,"code"),Qx(820,"p-additional-help-tooltip"),og(),Qx(821," e "),Il(822,"code"),Qx(823,"p-additional-help"),og(),Qx(824,") ser\xE1 ignorado."),og()()()(),Il(825,"tr",16)(826,"td",17)(827,"div",25)(828,"span",26),Qx(829," p-readonly"),zl(830,"br"),og()()(),Il(831,"td",21)(832,"code",28),Qx(833,"boolean"),og()(),Il(834,"td",23)(835,"p")(836,"code"),Qx(837,"false"),og()()(),Il(838,"td",24)(839,"em")(840,"strong"),Qx(841,"(opcional)"),og()(),Il(842,"p"),Qx(843,"Indica que o campo ser\xE1 somente para leitura."),og()()(),Il(844,"tr",16)(845,"td",17)(846,"div",25)(847,"span",26),Qx(848," p-required"),zl(849,"br"),og()()(),Il(850,"td",21)(851,"code",28),Qx(852,"boolean"),og()(),Il(853,"td",23)(854,"p")(855,"code"),Qx(856,"false"),og()()(),Il(857,"td",24)(858,"em")(859,"strong"),Qx(860,"(opcional)"),og()(),Il(861,"p"),Qx(862,"Define que o campo ser\xE1 obrigat\xF3rio."),og()()(),Il(863,"tr",16)(864,"td",17)(865,"div",25)(866,"span",26),Qx(867," p-show-required"),zl(868,"br"),og()()(),Il(869,"td",21)(870,"code",28),Qx(871,"boolean"),og()(),Il(872,"td",23),Qx(873,"-"),og(),Il(874,"td",24)(875,"p"),Qx(876,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),og(),Il(877,"blockquote")(878,"p"),Qx(879,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),og()(),Il(880,"ul")(881,"li"),Qx(882,"N\xE3o possuir "),Il(883,"code"),Qx(884,"p-help"),og(),Qx(885," e/ou "),Il(886,"code"),Qx(887,"p-label"),og(),Qx(888,"."),og()()()(),Il(889,"tr",16)(890,"td",17)(891,"div",25)(892,"span",26),Qx(893," p-size"),zl(894,"br"),og()()(),Il(895,"td",21)(896,"code",27),Qx(897,"string"),og()(),Il(898,"td",23)(899,"p")(900,"code"),Qx(901,"medium"),og()()(),Il(902,"td",24)(903,"em")(904,"strong"),Qx(905,"(opcional)"),og()(),Il(906,"p"),Qx(907,"Define o tamanho do componente:"),og(),Il(908,"ul")(909,"li")(910,"code"),Qx(911,"small"),og(),Qx(912,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),og(),Il(913,"li")(914,"code"),Qx(915,"medium"),og(),Qx(916,": altura do input como 44px."),og()(),Il(917,"blockquote")(918,"p"),Qx(919,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Il(920,"code"),Qx(921,"medium"),og(),Qx(922,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Il(923,"a",32),Qx(924,"po-theme"),og(),Qx(925,"."),og()()()()(),Il(926,"h3",12),Qx(927,"M\xE9todos"),og(),Il(928,"table",33)(929,"tr",16)(930,"th",34)(931,"div",25)(932,"h4")(933,"span",26),Qx(934," focus "),og()()()()(),Il(935,"tr",24)(936,"td",24)(937,"p"),Qx(938,"Fun\xE7\xE3o que atribui foco ao componente."),og(),Il(939,"p"),Qx(940,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),og(),Il(941,"pre")(942,"code"),Qx(943,`import { PoSelectComponent } from '@po-ui/ng-components';

...

@ViewChild(PoSelectComponent, { static: true }) select: PoSelectComponent;

focusSelect() {
  this.select.focus();
}
`),og()()()()(),zl(944,"br"),Il(945,"table",33)(946,"tr",16)(947,"th",34)(948,"div",25)(949,"h4")(950,"span",26),Qx(951," showAdditionalHelp "),og()()()()(),Il(952,"tr",24)(953,"td",24)(954,"p"),Qx(955,"M\xE9todo que exibe "),Il(956,"code"),Qx(957,"p-helper"),og(),Qx(958," ou executa a a\xE7\xE3o definida em "),Il(959,"code"),Qx(960,"p-helper{eventOnClick}"),og(),Qx(961," ou em "),Il(962,"code"),Qx(963,"p-additionalHelp"),og(),Qx(964,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Il(965,"code"),Qx(966,"p-keydown"),og(),Qx(967,"."),og(),Il(968,"blockquote")(969,"p"),Qx(970,"Exibe ou oculta o conte\xFAdo do componente "),Il(971,"code"),Qx(972,"po-helper"),og(),Qx(973," quando o componente estiver com foco."),og()(),Il(974,"pre")(975,"code"),Qx(976,`//Exemplo com p-label e p-helper
<po-select
 #select
 ...
 p-label="Label do select"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, select)"
></po-select>
`),og()(),Il(977,"pre")(978,"code",35),Qx(979,`onKeyDown(event: KeyboardEvent, inp: PoSelectComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),og()()()()(),zl(980,"br"),Il(981,"h3"),Qx(982,"Interfaces"),og(),Il(983,"h4",36)(984,"code",5),Qx(985,"PoSelectOptionGroup"),og()(),Il(986,"div",2)(987,"p"),Qx(988,"Interface da cole\xE7\xF5es de itens em grupo, utilizando uma label para o grupo e as op\xE7\xF5es do tipo "),Il(989,"code"),Qx(990,"PoSelectOption"),og(),Qx(991,"."),og()(),Il(992,"h4",12),Qx(993,"Propriedades"),og(),Il(994,"table",13)(995,"tr",14)(996,"th",15),Qx(997,"Nome"),og(),Il(998,"th",15),Qx(999,"Tipo"),og(),Il(1e3,"th",15),Qx(1001,"Descri\xE7\xE3o"),og()(),Il(1002,"tr",16)(1003,"td",17)(1004,"div",25)(1005,"span",26),Qx(1006," label"),zl(1007,"br"),og()()(),Il(1008,"td",21)(1009,"code",27),Qx(1010,"string"),og()(),Il(1011,"td",24)(1012,"p"),Qx(1013,"Label para denominar o nome do grupo."),og()()(),Il(1014,"tr",16)(1015,"td",17)(1016,"div",25)(1017,"span",26),Qx(1018," options"),zl(1019,"br"),og()()(),Il(1020,"td",21)(1021,"code",37),Qx(1022,"Array<PoSelectOption>"),og()(),Il(1023,"td",24)(1024,"p"),Qx(1025,"Lista com as op\xE7\xF5es dispon\xEDveis em cada grupo."),og()()()(),Il(1026,"h4",36)(1027,"code",5),Qx(1028,"PoSelectOption"),og()(),Il(1029,"div",2)(1030,"p"),Qx(1031,"Interface da cole\xE7\xF5es de itens que deve ser informado no componente po-select"),og()(),Il(1032,"h4",12),Qx(1033,"Propriedades"),og(),Il(1034,"table",13)(1035,"tr",14)(1036,"th",15),Qx(1037,"Nome"),og(),Il(1038,"th",15),Qx(1039,"Tipo"),og(),Il(1040,"th",15),Qx(1041,"Descri\xE7\xE3o"),og()(),Il(1042,"tr",16)(1043,"td",17)(1044,"div",25)(1045,"span",26),Qx(1046," label"),zl(1047,"br"),og()()(),Il(1048,"td",21)(1049,"code",27),Qx(1050,"string"),og()(),Il(1051,"td",24)(1052,"p"),Qx(1053,"Label a ser utilizada nos itens da lista."),og()()(),Il(1054,"tr",16)(1055,"td",17)(1056,"div",25)(1057,"span",26),Qx(1058," value"),zl(1059,"br"),og()()(),Il(1060,"td",21)(1061,"code",27),Qx(1062,"string "),og(),Il(1063,"code",38),Qx(1064," number"),og()(),Il(1065,"td",24)(1066,"p"),Qx(1067,"Valor do objeto que ser\xE1 atribu\xEDdo ao model."),og()()()()());},dependencies:[Ka],encapsulation:2})}return a})();var Te=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,p){this.route=r,this.router=p;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let p=r.view;this.activeTab=p||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(p){return new(p||a)(C(Xn),C(En))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:9,vars:4,consts:[["p-title","Select",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(p,i){p&1&&(Il(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return i.changeTab("doc")}),zl(3,"sample-po-select-doc"),og(),Il(4,"po-tab",3),ft("p-click",function(){return i.changeTab("web")}),zl(5,"sample-po-select-basic-view")(6,"sample-po-select-labs-view")(7,"sample-po-select-customer-registration-view")(8,"sample-po-select-companies-view"),og()()()),p&2&&(nw("p-actions",i.actions),Lp(2),nw("p-active",i.activeTab==="doc"),Lp(2),nw("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[cNe,qme,Yme,Ee,Ce,ye,Pe,we],encapsulation:2})}return a})();var Je=[{path:"",component:Te}],Me=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue({imports:[uL.forChild(Je),uL]})}return a})();var Dt=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue({imports:[sr,Me]})}return a})();export{Dt as DocPoSelectModule};