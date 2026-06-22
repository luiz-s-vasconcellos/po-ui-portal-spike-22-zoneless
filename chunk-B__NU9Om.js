import {f as fe$1,u as ue,s as sr,h as hL,w,c3 as Xn,E as En,U as Un,a as f,ae as Be,n as nb,I,aJ as Hhe,H as Wl,Q as nw,bM as hN,a7 as dN,an as CO,aH as Ka,b8 as Bme,b9 as qme,F as Sl,z as eN,J as og,a1 as ft,L as Lp,ar as $x,au as dg,bs as fN,aX as Z9,aF as G9,aY as q9,aG as _k,aZ as mk,b0 as Qt,b1 as mv,c4 as b3,b4 as L3,c8 as wde,bH as M3,c9 as Ghe,aB as wx,aM as ww,aN as e0,bd as Nx,aO as Ew,aP as n0,cn as o3,b6 as Yo,a2 as JE,R as we$1,a3 as rNe,br as sN,B as yw,aD as Ky,aT as nN,aE as Xy}from'./main-WP3NAV7C.js';var Oe=()=>({label:"Option 1",value:"1"}),Le=()=>({label:"Option 2",value:"2"}),De=(a,K)=>[a,K],he=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-select-basic"]],standalone:false,decls:1,vars:6,consts:[["name","select","p-label","PO Select",3,"p-options"]],template:function(p,i){p&1&&Wl(0,"po-select",0),p&2&&nw("p-options",hN(3,De,dN(1,Oe),dN(2,Le)));},dependencies:[Hhe],encapsulation:2,changeDetection:1})}return a})();var Ve=a=>({"docs-sample-code-tabs":a}),Ee=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-select-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,i){p&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Select Basic"),og(),Sl(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-select-basic/sample-po-select-basic.component.html"),og(),Sl(13,"pre",7),eN(14,`<po-select
  name="select"
  p-label="PO Select"
  [p-options]="[
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' }
  ]"
>
</po-select>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-select-basic/sample-po-select-basic.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-select-basic',
  templateUrl: './sample-po-select-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSelectBasicComponent {}
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-select-basic"),og(),Wl(23,"hr")),p&2&&(Lp(5),$x("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,Ve,i.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,he],encapsulation:2})}return a})();var fe=(()=>{class a{cdr=f(Be);helperText;event;help;label;option;options;optionsGroup;optionsGroupList=[];placeholder;properties;fieldErrorMessage;select;selectedOptionsGroup;selectOptionGroupSwitch;size;propertiesOptions=[{value:"disabled",label:"Disabled"},{value:"optional",label:"Optional"},{value:"required",label:"Required"},{value:"showRequired",label:"Show Required"},{value:"readonly",label:"Read Only"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"},{value:"loading",label:"Loading"},{value:"compactLabel",label:"Compact Label"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore();}addOption(){this.options=this.verifyOptionObject(this.options.concat(),this.option,this.optionsGroup),this.option={label:void 0,value:void 0},this.cdr.detectChanges();}changeEvent(r){this.event=r;}optionsGroupSelection(){this.optionsGroup=this.selectedOptionsGroup;}restore(){this.helperText="",this.event="",this.help=void 0,this.label=void 0,this.option={label:void 0,value:void 0},this.options=[],this.optionsGroup=void 0,this.optionsGroupList=[],this.placeholder="",this.properties=[],this.fieldErrorMessage="",this.select="",this.selectOptionGroupSwitch=false,this.selectedOptionsGroup=void 0,this.size="medium";}restoreSwitch(r){r||(this.selectedOptionsGroup=void 0,this.optionsGroup=void 0);}insertGroupIntoSelectInput(r){this.selectedOptionsGroup=r,this.optionsGroupList=[...this.optionsGroupList,{label:r,value:r}];}verifyOptionObject(r,p,i){let{label:m,value:d}=p;if(i){let o=r.findIndex(te=>te.label===i&&"options"in te);return o===-1?(this.insertGroupIntoSelectInput(i),[...r,{label:i,options:[{label:m,value:d}]}]):(r[o].options.push({label:m,value:d}),r)}return [...r,{label:m,value:d}]}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-select-labs"]],standalone:false,decls:33,vars:37,consts:[["fOption","ngForm"],["f","ngForm"],["name","select",1,"po-md-12",3,"ngModelChange","p-blur","p-change","p-change-model","p-enter","p-keydown","ngModel","p-helper","p-disabled","p-help","p-label","p-loading","p-options","p-optional","p-placeholder","p-readonly","p-required","p-field-error-message","p-show-required","p-size","p-error-limit","p-label-text-wrap","p-compact-label"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["p-label","Po select options group"],["name","selectOptionGroupSwitch","p-label","Select options group",1,"po-lg-2","po-md-12",3,"p-change","ngModelChange","ngModel"],["name","selectedsOptionsGroup","p-label","Options group list",1,"po-lg-4","po-md-6",3,"ngModelChange","p-change","ngModel","p-disabled","p-options"],["name","optionsGroup","p-label","New Options Group","p-required","",1,"po-lg-4","po-md-6",3,"ngModelChange","ngModel","p-disabled"],["p-label","Po select options"],["name","optionLabel","p-label","Option Label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","optionValue","p-label","Option Value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add Option",1,"po-lg-3","po-md-4",3,"p-click","p-disabled"],["name","label","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","fieldErrorMessage","p-clean","","p-label","Field Error Message",1,"po-md-6",3,"ngModelChange","ngModel"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],[1,"po-lg-3","po-md-6"],["p-label","Sample Restore",3,"p-click"]],template:function(p,i){if(p&1){let m=wx();Sl(0,"po-select",2),ww("ngModelChange",function(o){return Ky(m),nN(i.select,o)||(i.select=o),Xy(o)}),ft("p-blur",function(){return i.changeEvent("p-blur")})("p-change",function(){return i.changeEvent("p-change")})("p-change-model",function(){return i.changeEvent("p-change-model")})("p-enter",function(){return i.changeEvent("p-enter")})("p-keydown",function(){return i.changeEvent("p-keydown")}),og(),e0(),Wl(1,"po-divider"),Sl(2,"div",3),Wl(3,"po-info",4)(4,"po-info",5),og(),Wl(5,"po-divider"),Sl(6,"form",null,0),Wl(8,"po-divider",6),Sl(9,"div",3)(10,"po-switch",7),ft("p-change",function(o){return i.restoreSwitch(o)}),ww("ngModelChange",function(o){return Ky(m),nN(i.selectOptionGroupSwitch,o)||(i.selectOptionGroupSwitch=o),Xy(o)}),og(),e0(),Sl(11,"po-select",8),ww("ngModelChange",function(o){return Ky(m),nN(i.selectedOptionsGroup,o)||(i.selectedOptionsGroup=o),Xy(o)}),ft("p-change",function(){return i.optionsGroupSelection()}),og(),e0(),Sl(12,"po-input",9),ww("ngModelChange",function(o){return Ky(m),nN(i.optionsGroup,o)||(i.optionsGroup=o),Xy(o)}),og(),e0(),og(),Wl(13,"po-divider",10),Sl(14,"div",3)(15,"po-input",11),ww("ngModelChange",function(o){return Ky(m),nN(i.option.label,o)||(i.option.label=o),Xy(o)}),og(),e0(),Sl(16,"po-input",12),ww("ngModelChange",function(o){return Ky(m),nN(i.option.value,o)||(i.option.value=o),Xy(o)}),og(),e0(),og(),Sl(17,"div",3)(18,"po-button",13),ft("p-click",function(){return i.addOption()}),og()()(),Wl(19,"po-divider"),Sl(20,"form",null,1)(22,"po-input",14),ww("ngModelChange",function(o){return Ky(m),nN(i.label,o)||(i.label=o),Xy(o)}),og(),e0(),Sl(23,"po-input",15),ww("ngModelChange",function(o){return Ky(m),nN(i.help,o)||(i.help=o),Xy(o)}),og(),e0(),Sl(24,"po-input",16),ww("ngModelChange",function(o){return Ky(m),nN(i.helperText,o)||(i.helperText=o),Xy(o)}),og(),e0(),Sl(25,"po-input",17),ww("ngModelChange",function(o){return Ky(m),nN(i.placeholder,o)||(i.placeholder=o),Xy(o)}),og(),e0(),Sl(26,"po-input",18),ww("ngModelChange",function(o){return Ky(m),nN(i.fieldErrorMessage,o)||(i.fieldErrorMessage=o),Xy(o)}),og(),e0(),Sl(27,"po-checkbox-group",19),ww("ngModelChange",function(o){return Ky(m),nN(i.properties,o)||(i.properties=o),Xy(o)}),og(),e0(),Sl(28,"po-radio-group",20),ww("ngModelChange",function(o){return Ky(m),nN(i.size,o)||(i.size=o),Xy(o)}),og(),e0(),Sl(29,"div",3)(30,"div",21)(31,"po-button",22),ft("p-click",function(){return i.restore()}),og()()(),Wl(32,"form"),og();}if(p&2){let m=Nx(7);Ew("ngModel",i.select),nw("p-helper",i.helperText)("p-disabled",i.properties.includes("disabled"))("p-help",i.help)("p-label",i.label)("p-loading",i.properties.includes("loading"))("p-options",i.options)("p-optional",i.properties.includes("optional"))("p-placeholder",i.placeholder)("p-readonly",i.properties.includes("readonly"))("p-required",i.properties.includes("required"))("p-field-error-message",i.fieldErrorMessage)("p-show-required",i.properties.includes("showRequired"))("p-size",i.size)("p-error-limit",i.properties==null?null:i.properties.includes("errorLimit"))("p-label-text-wrap",i.properties==null?null:i.properties.includes("labelTextWrap"))("p-compact-label",i.properties==null?null:i.properties.includes("compactLabel")),n0(),Lp(3),nw("p-value",i.select),Lp(),nw("p-value",i.event),Lp(6),Ew("ngModel",i.selectOptionGroupSwitch),n0(),Lp(),Ew("ngModel",i.selectedOptionsGroup),nw("p-disabled",!i.selectOptionGroupSwitch)("p-options",i.optionsGroupList),n0(),Lp(),Ew("ngModel",i.optionsGroup),nw("p-disabled",!i.selectOptionGroupSwitch),n0(),Lp(3),Ew("ngModel",i.option.label),n0(),Lp(),Ew("ngModel",i.option.value),n0(),Lp(2),nw("p-disabled",m.invalid),Lp(4),Ew("ngModel",i.label),n0(),Lp(),Ew("ngModel",i.help),n0(),Lp(),Ew("ngModel",i.helperText),n0(),Lp(),Ew("ngModel",i.placeholder),n0(),Lp(),Ew("ngModel",i.fieldErrorMessage),n0(),Lp(),Ew("ngModel",i.properties),nw("p-options",i.propertiesOptions),n0(),Lp(),Ew("ngModel",i.size),nw("p-options",i.sizeOptions),n0();}},dependencies:[Z9,G9,q9,_k,mk,Qt,mv,b3,L3,wde,Hhe,M3,Ghe],encapsulation:2,changeDetection:1})}return a})();var Ge=a=>({"docs-sample-code-tabs":a}),Ce=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-select-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,i){p&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Select Labs"),og(),Sl(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-select-labs/sample-po-select-labs.component.html"),og(),Sl(13,"pre",7),eN(14,`<po-select
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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-select-labs/sample-po-select-labs.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { ChangeDetectorRef, Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-select-labs"),og(),Wl(23,"hr")),p&2&&(Lp(5),$x("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,Ge,i.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,fe],encapsulation:2})}return a})();var ee=(()=>{class a{http=f(nb);url="https://po-sample-api.onrender.com/v1/sampleSelect";getCitiesByState(r){return this.http.get(`${this.url}/getCities/${r}`)}getStates(){return this.http.get(`${this.url}/getStates`)}static \u0275fac=function(p){return new(p||a)};static \u0275prov=I({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();function ze(a,K){if(a&1&&(Sl(0,"div",17),Wl(1,"po-avatar",18),Sl(2,"div",19)(3,"div",20),eN(4),og(),Sl(5,"div",21),eN(6),og()()()),a&2){let r=K.$implicit;Lp(),nw("p-src",sN("https://po-sample-api.onrender.com/v1/sampleSelect/",r.value,".png")),Lp(3),yw(r.label),Lp(2),yw(r.value);}}var xe=(()=>{class a{sampleService=f(ee);address;city;cityOptions;document;documentLabel;documentType;mask;minLength;name;nameLabel;state;stateOptions;options=[{label:"CPF",value:"CPF"},{label:"CNPJ",value:"CNPJ"}];citiesSubscription;statesSubscription;ngOnDestroy(){this.citiesSubscription?.unsubscribe(),this.statesSubscription?.unsubscribe();}ngOnInit(){this.initialize(),this.getStates(),this.changeType(this.documentType);}changeType(r){r==="CPF"?(this.documentLabel="CPF Number",this.mask="999.999.999-99",this.minLength=14,this.nameLabel="Client Name"):(this.documentLabel="CNPJ Number",this.mask="99.999.999/9999-99",this.minLength=18,this.nameLabel="Company Name"),this.address="",this.document="",this.name="";}initialize(){this.cityOptions=[],this.stateOptions=[],this.documentType="CPF";}onChangeState(){this.getCitiesByState(this.state);}getCityByValue(r){let p=this.cityOptions.find(i=>i.value===r);return p?p.label:""}getStateByValue(r){let p=this.stateOptions.find(i=>i.value===r);return p?p.label:""}getCitiesByState(r){this.citiesSubscription=this.sampleService.getCitiesByState(r).subscribe(p=>{this.cityOptions=p.items,this.city=this.cityOptions[0].value;});}getStates(){this.statesSubscription=this.sampleService.getStates().subscribe(r=>{this.stateOptions=r.items,this.state="sp",this.getCitiesByState(this.state);});}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-select-customer-registration"]],standalone:false,features:[we$1([ee])],decls:27,vars:22,consts:[["f","ngForm"],["modal",""],[1,"po-row"],["name","documentType","p-label","Document type",1,"po-md-6",3,"ngModelChange","p-change","ngModel","p-options"],["name","document","p-mask-format-model","","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-label","p-mask","p-minlength"],["name","name","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-label"],["name","address","p-label","Address",1,"po-md-6",3,"ngModelChange","ngModel"],["name","state","p-label","State",1,"po-md-6",3,"ngModelChange","p-change","ngModel","p-options"],["p-select-option-template",""],["name","city","p-label","City",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["p-label","Send Informations",1,"po-md-4",3,"p-click","p-disabled"],["p-title","Informations"],["p-label","Document type",1,"po-md-6",3,"p-value"],[1,"po-md-6",3,"p-label","p-value"],["p-label","Address",1,"po-md-6",3,"p-value"],["p-label","State",1,"po-md-6",3,"p-value"],["p-label","City",1,"po-md-6",3,"p-value"],[1,"sample-select-option-template-container"],["p-size","xs",3,"p-src"],[1,"sample-select-option-template-margin"],[1,"sample-select-option-template-label"],[1,"sample-select-option-template-value"]],template:function(p,i){if(p&1){let m=wx();Sl(0,"form",null,0)(2,"div",2)(3,"po-radio-group",3),ww("ngModelChange",function(o){return Ky(m),nN(i.documentType,o)||(i.documentType=o),Xy(o)}),ft("p-change",function(o){return i.changeType(o)}),og(),e0(),Sl(4,"po-input",4),ww("ngModelChange",function(o){return Ky(m),nN(i.document,o)||(i.document=o),Xy(o)}),og(),e0(),og(),Sl(5,"div",2)(6,"po-input",5),ww("ngModelChange",function(o){return Ky(m),nN(i.name,o)||(i.name=o),Xy(o)}),og(),e0(),Sl(7,"po-input",6),ww("ngModelChange",function(o){return Ky(m),nN(i.address,o)||(i.address=o),Xy(o)}),og(),e0(),og(),Sl(8,"div",2)(9,"po-select",7),ww("ngModelChange",function(o){return Ky(m),nN(i.state,o)||(i.state=o),Xy(o)}),ft("p-change",function(){return i.onChangeState()}),JE(10,ze,7,4,"ng-template",8),og(),e0(),Sl(11,"po-select",9),ww("ngModelChange",function(o){return Ky(m),nN(i.city,o)||(i.city=o),Xy(o)}),og(),e0(),og(),Sl(12,"div",2)(13,"po-button",10),ft("p-click",function(){Ky(m);let o=Nx(15);return Xy(o.open())}),og()()(),Sl(14,"po-modal",11,1)(16,"div",2),Wl(17,"po-info",12)(18,"po-info",13),og(),Wl(19,"po-divider"),Sl(20,"div",2),Wl(21,"po-info",13)(22,"po-info",14),og(),Wl(23,"po-divider"),Sl(24,"div",2),Wl(25,"po-info",15)(26,"po-info",16),og()();}if(p&2){let m=Nx(1);Lp(3),Ew("ngModel",i.documentType),nw("p-options",i.options),n0(),Lp(),Ew("ngModel",i.document),nw("p-label",i.documentLabel)("p-mask",i.mask)("p-minlength",i.minLength),n0(),Lp(2),Ew("ngModel",i.name),nw("p-label",i.nameLabel),n0(),Lp(),Ew("ngModel",i.address),n0(),Lp(2),Ew("ngModel",i.state),nw("p-options",i.stateOptions),n0(),Lp(2),Ew("ngModel",i.city),nw("p-options",i.cityOptions),n0(),Lp(2),nw("p-disabled",m.invalid),Lp(4),nw("p-value",i.documentType),Lp(),nw("p-label",i.documentLabel)("p-value",i.document),Lp(3),nw("p-label",i.nameLabel)("p-value",i.name),Lp(),nw("p-value",i.address),Lp(3),nw("p-value",i.getStateByValue(i.state)),Lp(),nw("p-value",i.getCityByValue(i.city));}},dependencies:[Z9,G9,q9,_k,mk,o3,Qt,mv,L3,wde,Hhe,Ghe,Yo],styles:[".sample-select-option-template-container[_ngcontent-%COMP%]{display:inline-flex;align-items:flex-start;width:100%}.sample-select-option-template-margin[_ngcontent-%COMP%]{margin:5px}.sample-select-option-template-label[_ngcontent-%COMP%]{font-size:16px}.sample-select-option-template-value[_ngcontent-%COMP%]{font-size:12px;text-transform:uppercase}"],changeDetection:1})}return a})();var Ne=a=>({"docs-sample-code-tabs":a}),ye=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-select-customer-registration-view"]],standalone:false,decls:34,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(p,i){p&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Select - Customer registration"),og(),Sl(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-select-customer-registration/sample-po-select-customer-registration.component.html"),og(),Sl(13,"pre",7),eN(14,`<form #f="ngForm">
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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-select-customer-registration/sample-po-select-customer-registration.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, OnDestroy, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),og(),Sl(21,"label",6),eN(22,"sample-po-select-customer-registration/sample-po-select-customer-registration.service.ts"),og(),Sl(23,"pre",9),eN(24,`import { HttpClient } from '@angular/common/http';
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
`),og()()(),Sl(25,"po-tab",10)(26,"div")(27,"label",6),eN(28,"sample-po-select-customer-registration/sample-po-select-customer-registration.component.css"),og(),Sl(29,"pre",11),eN(30,`.sample-select-option-template-container {
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
`),og()()()()(),Sl(31,"div",12),Wl(32,"sample-po-select-customer-registration"),og(),Wl(33,"hr")),p&2&&(Lp(5),$x("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,Ne,i.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,xe],encapsulation:2})}return a})();var _e=(()=>{class a{select;fieldLabel="nomeFantasia";fieldValue="cnpj";empresas=[{codigo:"1",nomeFantasia:"TOTVS SA",razaoSocial:"TOTVS LTDA",label:"TOTVS COMPANY",cnpj:"01.234.567/0000-01",value:"100",id:"10",email:"totvscompany@sample.com",data:"10/03/2015",origem:"S\xE3o Paulo"},{codigo:"2",nomeFantasia:"INSTITUTO TOTVS DE ENSINO SA",razaoSocial:"INST TOTVS DE ENSINO LTDA",label:"INST TOTVS",cnpj:"02.345.678/0000-02",value:"200",id:"20",email:"insttotvs@sample.com",data:"10/10/2020",origem:"Joinville"},{codigo:"3",nomeFantasia:"TOTVS ENTERPRISE SA",razaoSocial:"TOTVS ENTERPRISE LTDA ",label:"ENT TOTVS",cnpj:"03.456.789/0000-03",value:"300",id:"30",email:"enttotvs@sample.com",data:"10/01/2022",origem:"Curitiba"}];labels=[{label:"Dados",options:[{label:"nomeFantasia",value:"nomeFantasia"},{label:"razaoSocial",value:"razaoSocial"},{label:"email",value:"email"}]},{label:"Cidade",options:[{label:"origem",value:"origem"}]}];values=[{label:"codigo",value:"codigo"},{label:"cnpj",value:"cnpj"},{label:"id",value:"id"},{label:"data",value:"data"}];onChange(r){this.select=void 0;}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-select-companies"]],standalone:false,decls:5,vars:9,consts:[["name","select","p-label","PO Select",3,"ngModelChange","ngModel","p-field-value","p-field-label","p-options"],["p-label","Model","name","selectInfo",3,"p-valueChange","p-value"],[1,"po-row"],["name","fieldLabel","p-label","p-field-label",1,"po-md-6",3,"p-change","ngModelChange","p-options","ngModel"],["name","selectValue","p-label","p-field-value",1,"po-md-6",3,"p-change","ngModelChange","p-options","ngModel"]],template:function(p,i){p&1&&(Sl(0,"po-select",0),ww("ngModelChange",function(d){return nN(i.select,d)||(i.select=d),d}),og(),e0(),Sl(1,"po-info",1),ww("p-valueChange",function(d){return nN(i.select,d)||(i.select=d),d}),og(),Sl(2,"div",2)(3,"po-select",3),ft("p-change",function(d){return i.onChange(d)}),ww("ngModelChange",function(d){return nN(i.fieldLabel,d)||(i.fieldLabel=d),d}),og(),e0(),Sl(4,"po-select",4),ft("p-change",function(d){return i.onChange(d)}),ww("ngModelChange",function(d){return nN(i.fieldValue,d)||(i.fieldValue=d),d}),og(),e0(),og()),p&2&&(Ew("ngModel",i.select),nw("p-field-value",i.fieldValue)("p-field-label",i.fieldLabel)("p-options",i.empresas),n0(),Lp(),Ew("p-value",i.select),Lp(2),nw("p-options",i.labels),Ew("ngModel",i.fieldLabel),n0(),Lp(),nw("p-options",i.values),Ew("ngModel",i.fieldValue),n0());},dependencies:[G9,_k,Hhe,Ghe],encapsulation:2,changeDetection:1})}return a})();var Re=a=>({"docs-sample-code-tabs":a}),Pe=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-select-companies-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,i){p&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Select Companies"),og(),Sl(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-select-companies/sample-po-select-companies.component.html"),og(),Sl(13,"pre",7),eN(14,`<po-select
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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-select-companies/sample-po-select-companies.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-select-companies"),og(),Wl(23,"hr")),p&2&&(Lp(5),$x("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,Re,i.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,_e],encapsulation:2})}return a})();var we=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-select-doc"]],standalone:false,decls:1068,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-combo-option-template"],["href","/documentation/po-select-option-template"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","any[]"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-helper"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"language-typescript"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Array<PoSelectOption>"],["pan","",1,"docs-api-property-type","number"]],template:function(p,i){p&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),eN(3,"import { PoFieldModule } from '@po-ui/ng-components';"),og()(),Sl(4,"div",2)(5,"p"),eN(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),og(),Sl(7,"blockquote")(8,"p"),eN(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),Sl(10,"code"),eN(11,"FormsModule"),og(),eN(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Sl(13,"code"),eN(14,"ReactiveFormsModule"),og(),eN(15,", ambos nativos do Angular."),og()()(),Sl(16,"h3",3),eN(17,"Componente"),og(),Sl(18,"h4",4)(19,"code",5),eN(20,"PoSelectComponent"),og()(),Sl(21,"div",2)(22,"p"),eN(23,` O componente po-select exibe uma lista de valores e permite que o usu\xE1rio selecione um desses valores.
Os valores listados podem ser fixos ou din\xE2micos de acordo com a necessidade do desenvolvedor, dando mais flexibilidade ao componente.
O po-select n\xE3o permite que o usu\xE1rio informe um valor diferente dos valores listados, isso garante a consist\xEAncia da informa\xE7\xE3o.
O po-select n\xE3o permite que sejam passados valores duplicados, undefined e null para as op\xE7\xF5es, excluindo-os da lista.`),og(),Sl(24,"blockquote")(25,"p"),eN(26,"Ao passar um valor para o "),Sl(27,"em"),eN(28,"model"),og(),eN(29," que n\xE3o est\xE1 na lista de op\xE7\xF5es, o mesmo ser\xE1 definido como "),Sl(30,"code"),eN(31,"undefined"),og(),eN(32,"."),og()(),Sl(33,"p"),eN(34,"Tamb\xE9m existe a possibilidade de utilizar um "),Sl(35,"em"),eN(36,"template"),og(),eN(37,` para a exibi\xE7\xE3o dos itens da lista,
veja mais em `),Sl(38,"strong")(39,"a",6),eN(40,"p-combo-option-template"),og()(),eN(41,"."),og(),Sl(42,"blockquote")(43,"p"),eN(44,"Obs: o template "),Sl(45,"strong")(46,"a",7),eN(47,"p-select-option-template"),og()(),eN(48," ser\xE1 depreciado na vers\xE3o 14.x.x."),og()(),Sl(49,"h4"),eN(50,"Tokens customiz\xE1veis"),og(),Sl(51,"p"),eN(52,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),og(),Sl(53,"blockquote")(54,"p"),eN(55,"Para maiores informa\xE7\xF5es, acesse o guia "),Sl(56,"a",8),eN(57,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),eN(58,"."),og()(),Sl(59,"table")(60,"thead")(61,"tr")(62,"th"),eN(63,"Propriedade"),og(),Sl(64,"th"),eN(65,"Descri\xE7\xE3o"),og(),Sl(66,"th"),eN(67,"Valor Padr\xE3o"),og()()(),Sl(68,"tbody")(69,"tr")(70,"td")(71,"strong"),eN(72,"Default Values"),og()(),Wl(73,"td")(74,"td"),og(),Sl(75,"tr")(76,"td")(77,"code"),eN(78,"--font-family"),og()(),Sl(79,"td"),eN(80,"Fam\xEDlia tipogr\xE1fica usada"),og(),Sl(81,"td")(82,"code"),eN(83,"var(--font-family-theme)"),og()()(),Sl(84,"tr")(85,"td")(86,"code"),eN(87,"--font-size"),og()(),Sl(88,"td"),eN(89,"Tamanho da fonte"),og(),Sl(90,"td")(91,"code"),eN(92,"var(--font-size-default)"),og()()(),Sl(93,"tr")(94,"td")(95,"code"),eN(96,"--text-color-empty"),og()(),Sl(97,"td"),eN(98,"Cor do placeholder"),og(),Sl(99,"td")(100,"code"),eN(101,"var(--color-neutral-light-30)"),og()()(),Sl(102,"tr")(103,"td")(104,"code"),eN(105,"--color"),og()(),Sl(106,"td"),eN(107,"Cor da borda"),og(),Sl(108,"td")(109,"code"),eN(110,"var(--color-neutral-dark-70)"),og()()(),Sl(111,"tr")(112,"td")(113,"code"),eN(114,"--background"),og()(),Sl(115,"td"),eN(116,"Cor de background"),og(),Sl(117,"td")(118,"code"),eN(119,"var(--color-neutral-light-05)"),og()()(),Sl(120,"tr")(121,"td")(122,"code"),eN(123,"--text-color"),og()(),Sl(124,"td"),eN(125,"Cor do texto"),og(),Sl(126,"td")(127,"code"),eN(128,"var(--color-neutral-dark-90)"),og()()(),Sl(129,"tr")(130,"td")(131,"code"),eN(132,"--padding-horizontal"),og()(),Sl(133,"td"),eN(134,"Preenchimento horizontal"),og(),Sl(135,"td")(136,"code"),eN(137,"0.5em"),og()()(),Sl(138,"tr")(139,"td")(140,"code"),eN(141,"--padding-vertical"),og()(),Sl(142,"td"),eN(143,"Preenchimento vertical"),og(),Sl(144,"td")(145,"code"),eN(146,"0.7em"),og()()(),Sl(147,"tr")(148,"td")(149,"code"),eN(150,"--field-container-title-justify"),og()(),Sl(151,"td"),eN(152,"Alinhamento horizontal do t\xEDtulo ("),Sl(153,"code"),eN(154,"justify-content"),og(),eN(155,")"),og(),Sl(156,"td")(157,"code"),eN(158,"space-between"),og()()(),Sl(159,"tr")(160,"td")(161,"code"),eN(162,"--field-container-title-flex"),og()(),Sl(163,"td"),eN(164,"Flex do t\xEDtulo ("),Sl(165,"code"),eN(166,"flex"),og(),eN(167,")"),og(),Sl(168,"td")(169,"code"),eN(170,"1 auto"),og()()(),Sl(171,"tr")(172,"td")(173,"strong"),eN(174,"Hover"),og()(),Wl(175,"td")(176,"td"),og(),Sl(177,"tr")(178,"td")(179,"code"),eN(180,"--color-hover"),og()(),Sl(181,"td"),eN(182,"Cor principal no estado hover"),og(),Sl(183,"td")(184,"code"),eN(185,"var(--color-brand-01-dark)"),og()()(),Sl(186,"tr")(187,"td")(188,"code"),eN(189,"--background-hover"),og()(),Sl(190,"td"),eN(191,"Cor de background no estado hover"),og(),Sl(192,"td")(193,"code"),eN(194,"var(--color-brand-01-lighter)"),og()()(),Sl(195,"tr")(196,"td")(197,"strong"),eN(198,"Focused"),og()(),Wl(199,"td")(200,"td"),og(),Sl(201,"tr")(202,"td")(203,"code"),eN(204,"--outline-color-focused"),og()(),Sl(205,"td"),eN(206,"Cor do outline do estado de focus"),og(),Sl(207,"td")(208,"code"),eN(209,"var(--color-action-focus)"),og()()(),Sl(210,"tr")(211,"td")(212,"code"),eN(213,"--color-focused"),og()(),Sl(214,"td"),eN(215,"Cor da borda no estado de focus"),og(),Sl(216,"td")(217,"code"),eN(218,"var(--color-action-default)"),og()()(),Sl(219,"tr")(220,"td")(221,"strong"),eN(222,"Disabled"),og()(),Wl(223,"td")(224,"td"),og(),Sl(225,"tr")(226,"td")(227,"code"),eN(228,"--color-disabled"),og()(),Sl(229,"td"),eN(230,"Cor principal no estado disabled"),og(),Sl(231,"td")(232,"code"),eN(233,"var(--color-neutral-light-30)"),og()()(),Sl(234,"tr")(235,"td")(236,"code"),eN(237,"--background-color-disabled"),og(),eN(238,"\xA0"),og(),Sl(239,"td"),eN(240,"Cor de background no estado disabled"),og(),Sl(241,"td")(242,"code"),eN(243,"var(--color-neutral-light-20)"),og()()()()()(),Sl(244,"div",9)(245,"h4",10),eN(246,"Seletor"),og(),Sl(247,"pre",11),eN(248,`<po-select
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
`),og()(),Sl(249,"h4",12),eN(250,"Propriedades"),og(),Sl(251,"table",13)(252,"tr",14)(253,"th",15),eN(254,"Nome"),og(),Sl(255,"th",15),eN(256,"Tipo"),og(),Sl(257,"th",15),eN(258,"Padr\xE3o"),og(),Sl(259,"th",15),eN(260,"Descri\xE7\xE3o"),og()(),Sl(261,"tr",16)(262,"td",17)(263,"div",18)(264,"span",19),eN(265," (p-additional-help)"),Wl(266,"br"),og()(),Sl(267,"div",20),eN(268,"Deprecated"),og()(),Sl(269,"td",21)(270,"code",22),eN(271,"EventEmitter"),og()(),Sl(272,"td",23),eN(273,"-"),og(),Sl(274,"td",24)(275,"em")(276,"strong"),eN(277,"(opcional)"),og()(),Sl(278,"p"),eN(279,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),og(),Sl(280,"blockquote")(281,"p"),eN(282,"Essa propriedade est\xE1 "),Sl(283,"strong"),eN(284,"depreciada"),og(),eN(285," e ser\xE1 removida na vers\xE3o "),Sl(286,"code"),eN(287,"23.x.x"),og(),eN(288,". Recomendamos utilizar a propriedade "),Sl(289,"code"),eN(290,"p-helper"),og(),eN(291," que oferece mais recursos e flexibilidade."),og()()()(),Sl(292,"tr",16)(293,"td",17)(294,"div",25)(295,"span",26),eN(296," p-additional-help-tooltip"),Wl(297,"br"),og()(),Sl(298,"div",20),eN(299,"Deprecated"),og()(),Sl(300,"td",21)(301,"code",27),eN(302,"string"),og()(),Sl(303,"td",23),eN(304,"-"),og(),Sl(305,"td",24)(306,"em")(307,"strong"),eN(308,"(opcional)"),og()(),Sl(309,"p"),eN(310,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),Sl(311,"code"),eN(312,"po-helper"),og(),eN(313,`.
`),Sl(314,"strong"),eN(315,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),og()(),Sl(316,"blockquote")(317,"p"),eN(318,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),og()(),Sl(319,"blockquote")(320,"p"),eN(321,"Essa propriedade est\xE1 "),Sl(322,"strong"),eN(323,"depreciada"),og(),eN(324," e ser\xE1 removida na vers\xE3o "),Sl(325,"code"),eN(326,"23.x.x"),og(),eN(327,". Recomendamos utilizar a propriedade "),Sl(328,"code"),eN(329,"p-helper"),og(),eN(330," que oferece mais recursos e flexibilidade."),og()()()(),Sl(331,"tr",16)(332,"td",17)(333,"div",25)(334,"span",26),eN(335," p-append-in-body"),Wl(336,"br"),og()()(),Sl(337,"td",21)(338,"code",28),eN(339,"boolean"),og()(),Sl(340,"td",23)(341,"p")(342,"code"),eN(343,"false"),og()()(),Sl(344,"td",24)(345,"em")(346,"strong"),eN(347,"(opcional)"),og()(),Sl(348,"p"),eN(349,"Define que o popover ("),Sl(350,"code"),eN(351,"p-helper"),og(),eN(352," e/ou "),Sl(353,"code"),eN(354,"p-error-limit"),og(),eN(355,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),og(),Sl(356,"blockquote")(357,"p"),eN(358,"Quando utilizado com "),Sl(359,"code"),eN(360,"p-helper"),og(),eN(361,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),og()()()(),Sl(362,"tr",16)(363,"td",17)(364,"div",18)(365,"span",19),eN(366," (p-blur)"),Wl(367,"br"),og()()(),Sl(368,"td",21)(369,"code",22),eN(370,"EventEmitter"),og()(),Sl(371,"td",23),eN(372,"-"),og(),Sl(373,"td",24)(374,"em")(375,"strong"),eN(376,"(opcional)"),og()(),Sl(377,"p"),eN(378,"Evento disparado ao sair do campo."),og()()(),Sl(379,"tr",16)(380,"td",17)(381,"div",18)(382,"span",19),eN(383," (p-change)"),Wl(384,"br"),og()()(),Sl(385,"td",21)(386,"code",22),eN(387,"EventEmitter"),og()(),Sl(388,"td",23),eN(389,"-"),og(),Sl(390,"td",24)(391,"em")(392,"strong"),eN(393,"(opcional)"),og()(),Sl(394,"p"),eN(395,"Evento disparado ao alterar valor do campo."),og()()(),Sl(396,"tr",16)(397,"td",17)(398,"div",25)(399,"span",26),eN(400," p-compact-label"),Wl(401,"br"),og()()(),Sl(402,"td",21)(403,"code",28),eN(404,"boolean"),og()(),Sl(405,"td",23)(406,"p")(407,"code"),eN(408,"false"),og()()(),Sl(409,"td",24)(410,"em")(411,"strong"),eN(412,"(opcional)"),og()(),Sl(413,"p"),eN(414,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),og(),Sl(415,"p"),eN(416,"Quando habilitado ("),Sl(417,"code"),eN(418,"true"),og(),eN(419,"), o modo compacto afeta o conjunto composto por:"),og(),Sl(420,"ul")(421,"li")(422,"code"),eN(423,"po-label"),og()(),Sl(424,"li")(425,"code"),eN(426,"p-requirement (showRequired)"),og()(),Sl(427,"li")(428,"code"),eN(429,"po-helper"),og()()(),Sl(430,"p"),eN(431,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),og(),Sl(432,"p"),eN(433,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),og(),Sl(434,"ul")(435,"li")(436,"code"),eN(437,"--field-container-title-justify"),og()(),Sl(438,"li")(439,"code"),eN(440,"--field-container-title-flex"),og()()(),Sl(441,"p"),eN(442,"Exemplo:"),og(),Sl(443,"pre")(444,"code"),eN(445,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),og()(),Sl(446,"p"),eN(447,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),og()()(),Sl(448,"tr",16)(449,"td",17)(450,"div",25)(451,"span",26),eN(452," p-disabled"),Wl(453,"br"),og()()(),Sl(454,"td",21)(455,"code",28),eN(456,"boolean"),og()(),Sl(457,"td",23)(458,"p")(459,"code"),eN(460,"false"),og()()(),Sl(461,"td",24)(462,"em")(463,"strong"),eN(464,"(opcional)"),og()(),Sl(465,"p"),eN(466,"Indica se o campo ser\xE1 desabilitado."),og()()(),Sl(467,"tr",16)(468,"td",17)(469,"div",25)(470,"span",26),eN(471," p-error-limit"),Wl(472,"br"),og()()(),Sl(473,"td",21)(474,"code",28),eN(475,"boolean"),og()(),Sl(476,"td",23)(477,"p")(478,"code"),eN(479,"false"),og()()(),Sl(480,"td",24)(481,"em")(482,"strong"),eN(483,"(opcional)"),og()(),Sl(484,"p"),eN(485,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),og(),Sl(486,"blockquote")(487,"p"),eN(488,"Caso essa propriedade seja definida como "),Sl(489,"code"),eN(490,"true"),og(),eN(491,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),og()()()(),Sl(492,"tr",16)(493,"td",17)(494,"div",25)(495,"span",26),eN(496," p-field-error-message"),Wl(497,"br"),og()()(),Sl(498,"td",21)(499,"code",27),eN(500,"string"),og()(),Sl(501,"td",23),eN(502,"-"),og(),Sl(503,"td",24)(504,"em")(505,"strong"),eN(506,"(opcional)"),og()(),Sl(507,"p"),eN(508,"Exibe a mensagem setada se o campo estiver vazio e for requerido."),og(),Sl(509,"blockquote")(510,"p"),eN(511,"Necess\xE1rio que a propriedade "),Sl(512,"code"),eN(513,"p-required"),og(),eN(514," esteja habilitada."),og()()()(),Sl(515,"tr",16)(516,"td",17)(517,"div",25)(518,"span",26),eN(519," p-field-label"),Wl(520,"br"),og()()(),Sl(521,"td",21)(522,"code",27),eN(523,"string"),og()(),Sl(524,"td",23)(525,"p")(526,"code"),eN(527,"label"),og()()(),Sl(528,"td",24)(529,"em")(530,"strong"),eN(531,"(opcional)"),og()(),Sl(532,"p"),eN(533,`Deve ser informado o nome da propriedade do objeto que ser\xE1 utilizado para a convers\xE3o dos itens apresentados na lista do componente
(`),Sl(534,"code"),eN(535,"p-options"),og(),eN(536,"), esta propriedade ser\xE1 respons\xE1vel pelo texto de apresenta\xE7\xE3o de cada item da lista."),og()()(),Sl(537,"tr",16)(538,"td",17)(539,"div",25)(540,"span",26),eN(541," p-field-value"),Wl(542,"br"),og()()(),Sl(543,"td",21)(544,"code",27),eN(545,"string"),og()(),Sl(546,"td",23)(547,"p")(548,"code"),eN(549,"value"),og()()(),Sl(550,"td",24)(551,"em")(552,"strong"),eN(553,"(opcional)"),og()(),Sl(554,"p"),eN(555,`Deve ser informado o nome da propriedade do objeto que ser\xE1 utilizado para a convers\xE3o dos itens apresentados na lista do componente
(`),Sl(556,"code"),eN(557,"p-options"),og(),eN(558,"), esta propriedade ser\xE1 respons\xE1vel pelo valor de cada item da lista."),og()()(),Sl(559,"tr",16)(560,"td",17)(561,"div",25)(562,"span",26),eN(563," p-help"),Wl(564,"br"),og()()(),Sl(565,"td",21)(566,"code",27),eN(567,"string"),og()(),Sl(568,"td",23),eN(569,"-"),og(),Sl(570,"td",24)(571,"p"),eN(572,"Texto de apoio para o campo."),og()()(),Sl(573,"tr",16)(574,"td",17)(575,"div",18)(576,"span",19),eN(577," (p-keydown)"),Wl(578,"br"),og()()(),Sl(579,"td",21)(580,"code",22),eN(581,"EventEmitter"),og()(),Sl(582,"td",23),eN(583,"-"),og(),Sl(584,"td",24)(585,"em")(586,"strong"),eN(587,"(opcional)"),og()(),Sl(588,"p"),eN(589,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Sl(590,"code"),eN(591,"KeyboardEvent"),og(),eN(592," com informa\xE7\xF5es sobre a tecla."),og()()(),Sl(593,"tr",16)(594,"td",17)(595,"div",25)(596,"span",26),eN(597," p-label"),Wl(598,"br"),og()()(),Sl(599,"td",21)(600,"code",27),eN(601,"string"),og()(),Sl(602,"td",23),eN(603,"-"),og(),Sl(604,"td",24)(605,"p"),eN(606,"R\xF3tulo exibido pelo componente."),og()()(),Sl(607,"tr",16)(608,"td",17)(609,"div",25)(610,"span",26),eN(611," p-label-text-wrap"),Wl(612,"br"),og()()(),Sl(613,"td",21)(614,"code",28),eN(615,"boolean"),og()(),Sl(616,"td",23)(617,"p")(618,"code"),eN(619,"false"),og()()(),Sl(620,"td",24)(621,"em")(622,"strong"),eN(623,"(opcional)"),og()(),Sl(624,"p"),eN(625,"Habilita a quebra autom\xE1tica do texto da propriedade "),Sl(626,"code"),eN(627,"p-label"),og(),eN(628,". Quando "),Sl(629,"code"),eN(630,"p-label-text-wrap"),og(),eN(631,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),og()()(),Sl(632,"tr",16)(633,"td",17)(634,"div",25)(635,"span",26),eN(636," p-loading"),Wl(637,"br"),og()()(),Sl(638,"td",21)(639,"code",28),eN(640,"boolean"),og()(),Sl(641,"td",23)(642,"p")(643,"code"),eN(644,"false"),og()()(),Sl(645,"td",24)(646,"em")(647,"strong"),eN(648,"(opcional)"),og()(),Sl(649,"p"),eN(650,"Exibe um \xEDcone de carregamento no lado direito do campo para sinalizar que uma opera\xE7\xE3o est\xE1 em andamento."),og()()(),Sl(651,"tr",16)(652,"td",17)(653,"div",25)(654,"span",26),eN(655," name"),Wl(656,"br"),og()()(),Sl(657,"td",21)(658,"code",27),eN(659,"string"),og()(),Sl(660,"td",23),eN(661,"-"),og(),Sl(662,"td",24)(663,"p"),eN(664,"Nome do componente."),og()()(),Sl(665,"tr",16)(666,"td",17)(667,"div",18)(668,"span",19),eN(669," (ngModelChange)"),Wl(670,"br"),og()()(),Sl(671,"td",21)(672,"code",22),eN(673,"EventEmitter"),og()(),Sl(674,"td",23),eN(675,"-"),og(),Sl(676,"td",24)(677,"em")(678,"strong"),eN(679,"(opcional)"),og()(),Sl(680,"p"),eN(681,"Fun\xE7\xE3o para atualizar o ngModel do componente, necess\xE1rio quando n\xE3o for utilizado dentro da tag form."),og(),Sl(682,"p"),eN(683,"Na vers\xE3o 12.2.0 do Angular a verifica\xE7\xE3o "),Sl(684,"code"),eN(685,"strictTemplates"),og(),eN(686,` vem true como default. Portanto, para utilizar
two-way binding no componente deve se utilizar da seguinte forma:`),og(),Sl(687,"pre")(688,"code"),eN(689,`<po-select ... [ngModel]="selectModel" (ngModelChange)="selectModel = $event"> </po-select>
`),og()()()(),Sl(690,"tr",16)(691,"td",17)(692,"div",25)(693,"span",26),eN(694," p-optional"),Wl(695,"br"),og()()(),Sl(696,"td",21)(697,"code",28),eN(698,"boolean"),og()(),Sl(699,"td",23)(700,"p")(701,"code"),eN(702,"false"),og()()(),Sl(703,"td",24)(704,"em")(705,"strong"),eN(706,"(opcional)"),og()(),Sl(707,"p"),eN(708,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),og(),Sl(709,"blockquote")(710,"p"),eN(711,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),og()(),Sl(712,"ul")(713,"li"),eN(714,"O campo conter "),Sl(715,"code"),eN(716,"p-required"),og(),eN(717,";"),og(),Sl(718,"li"),eN(719,"N\xE3o possuir "),Sl(720,"code"),eN(721,"p-help"),og(),eN(722," e/ou "),Sl(723,"code"),eN(724,"p-label"),og(),eN(725,"."),og()()()(),Sl(726,"tr",16)(727,"td",17)(728,"div",25)(729,"span",26),eN(730," p-options"),Wl(731,"br"),og()()(),Sl(732,"td",21)(733,"code",29),eN(734,"any[]"),og()(),Sl(735,"td",23),eN(736,"-"),og(),Sl(737,"td",24)(738,"p"),eN(739,"Nesta propriedade deve ser definido uma cole\xE7\xE3o de objetos que implementam a interface "),Sl(740,"code"),eN(741,"PoSelectOption"),og(),eN(742,`,
ou uma cole\xE7\xE3o de objetos dentro de grupos diferentes, que seriam da interface `),Sl(743,"code"),eN(744,"PoSelectOptionGroup"),og(),eN(745,"."),og(),Sl(746,"p"),eN(747,"Caso esta lista estiver vazia, o model ser\xE1 "),Sl(748,"code"),eN(749,"undefined"),og(),eN(750,"."),og(),Sl(751,"blockquote")(752,"p"),eN(753,`Essa propriedade \xE9 imut\xE1vel, ou seja, sempre que quiser atualizar a lista de op\xE7\xF5es dispon\xEDveis
atualize a refer\xEAncia do objeto:`),og()(),Sl(754,"pre")(755,"code"),eN(756,`// atualiza a refer\xEAncia do objeto garantindo a atualiza\xE7\xE3o do template
this.options = [...this.options, { value: 'x', label: 'Nova op\xE7\xE3o' }];

// evite, pois n\xE3o atualiza a refer\xEAncia do objeto podendo gerar atrasos na atualiza\xE7\xE3o do template
this.options.push({ value: 'x', label: 'Nova op\xE7\xE3o' });
`),og()(),Sl(757,"blockquote")(758,"p"),eN(759,"Para cole\xE7\xE3o de objetos dentro de grupos distintos ser\xE1 exibido a label e op\xE7\xF5es somente se a propriedade "),Sl(760,"code"),eN(761,"options"),og(),eN(762," possua valores. Sendo assim, a estrutura seguiria dessa forma:"),og()(),Sl(763,"pre")(764,"code"),eN(765,`this.options = [{
 label: 'Op\xE7\xF5es',
 options: [
   { value: 1, label: 'op\xE7\xE3o 1' },
   { value: 2, label: 'op\xE7\xE3o 2' }
 ],
}];
`),og()(),Sl(766,"p"),eN(767,`\xC9 poss\xEDvel a utiliza\xE7\xE3o de op\xE7\xF5es agrupadas e desagrupadas em conjunto, por\xE9m ser\xE1 feita a ordena\xE7\xE3o de exibir as op\xE7\xF5es
desagrupadas acima.`),og()()(),Sl(768,"tr",16)(769,"td",17)(770,"div",25)(771,"span",26),eN(772," p-placeholder"),Wl(773,"br"),og()()(),Sl(774,"td",21)(775,"code",27),eN(776,"string"),og()(),Sl(777,"td",23),eN(778,"-"),og(),Sl(779,"td",24)(780,"em")(781,"strong"),eN(782,"(opcional)"),og()(),Sl(783,"p"),eN(784,"Mensagem que aparecer\xE1 enquanto nenhuma op\xE7\xE3o estiver selecionada."),og()()(),Sl(785,"tr",16)(786,"td",17)(787,"div",25)(788,"span",26),eN(789," p-helper"),Wl(790,"br"),og()()(),Sl(791,"td",21)(792,"code",30),eN(793,"PoHelperOptions "),og(),Sl(794,"code",27),eN(795," string"),og()(),Sl(796,"td",23),eN(797,"-"),og(),Sl(798,"td",24)(799,"em")(800,"strong"),eN(801,"(opcional)"),og()(),Sl(802,"p"),eN(803,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label quando a propriedade "),Sl(804,"code"),eN(805,"p-label"),og(),eN(806," for definida, ou, ao lado do componente na aus\xEAncia da propriedade "),Sl(807,"code"),eN(808,"p-label"),og(),eN(809,"."),og(),Sl(810,"blockquote")(811,"p"),eN(812,"Para mais informa\xE7\xF5es acesse: "),Sl(813,"a",31),eN(814,"https://po-ui.io/documentation/po-helper"),og(),eN(815,"."),og()(),Sl(816,"blockquote")(817,"p"),eN(818,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),Sl(819,"code"),eN(820,"p-additional-help-tooltip"),og(),eN(821," e "),Sl(822,"code"),eN(823,"p-additional-help"),og(),eN(824,") ser\xE1 ignorado."),og()()()(),Sl(825,"tr",16)(826,"td",17)(827,"div",25)(828,"span",26),eN(829," p-readonly"),Wl(830,"br"),og()()(),Sl(831,"td",21)(832,"code",28),eN(833,"boolean"),og()(),Sl(834,"td",23)(835,"p")(836,"code"),eN(837,"false"),og()()(),Sl(838,"td",24)(839,"em")(840,"strong"),eN(841,"(opcional)"),og()(),Sl(842,"p"),eN(843,"Indica que o campo ser\xE1 somente para leitura."),og()()(),Sl(844,"tr",16)(845,"td",17)(846,"div",25)(847,"span",26),eN(848," p-required"),Wl(849,"br"),og()()(),Sl(850,"td",21)(851,"code",28),eN(852,"boolean"),og()(),Sl(853,"td",23)(854,"p")(855,"code"),eN(856,"false"),og()()(),Sl(857,"td",24)(858,"em")(859,"strong"),eN(860,"(opcional)"),og()(),Sl(861,"p"),eN(862,"Define que o campo ser\xE1 obrigat\xF3rio."),og()()(),Sl(863,"tr",16)(864,"td",17)(865,"div",25)(866,"span",26),eN(867," p-show-required"),Wl(868,"br"),og()()(),Sl(869,"td",21)(870,"code",28),eN(871,"boolean"),og()(),Sl(872,"td",23),eN(873,"-"),og(),Sl(874,"td",24)(875,"p"),eN(876,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),og(),Sl(877,"blockquote")(878,"p"),eN(879,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),og()(),Sl(880,"ul")(881,"li"),eN(882,"N\xE3o possuir "),Sl(883,"code"),eN(884,"p-help"),og(),eN(885," e/ou "),Sl(886,"code"),eN(887,"p-label"),og(),eN(888,"."),og()()()(),Sl(889,"tr",16)(890,"td",17)(891,"div",25)(892,"span",26),eN(893," p-size"),Wl(894,"br"),og()()(),Sl(895,"td",21)(896,"code",27),eN(897,"string"),og()(),Sl(898,"td",23)(899,"p")(900,"code"),eN(901,"medium"),og()()(),Sl(902,"td",24)(903,"em")(904,"strong"),eN(905,"(opcional)"),og()(),Sl(906,"p"),eN(907,"Define o tamanho do componente:"),og(),Sl(908,"ul")(909,"li")(910,"code"),eN(911,"small"),og(),eN(912,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),og(),Sl(913,"li")(914,"code"),eN(915,"medium"),og(),eN(916,": altura do input como 44px."),og()(),Sl(917,"blockquote")(918,"p"),eN(919,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Sl(920,"code"),eN(921,"medium"),og(),eN(922,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Sl(923,"a",32),eN(924,"po-theme"),og(),eN(925,"."),og()()()()(),Sl(926,"h3",12),eN(927,"M\xE9todos"),og(),Sl(928,"table",33)(929,"tr",16)(930,"th",34)(931,"div",25)(932,"h4")(933,"span",26),eN(934," focus "),og()()()()(),Sl(935,"tr",24)(936,"td",24)(937,"p"),eN(938,"Fun\xE7\xE3o que atribui foco ao componente."),og(),Sl(939,"p"),eN(940,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),og(),Sl(941,"pre")(942,"code"),eN(943,`import { PoSelectComponent } from '@po-ui/ng-components';

...

@ViewChild(PoSelectComponent, { static: true }) select: PoSelectComponent;

focusSelect() {
  this.select.focus();
}
`),og()()()()(),Wl(944,"br"),Sl(945,"table",33)(946,"tr",16)(947,"th",34)(948,"div",25)(949,"h4")(950,"span",26),eN(951," showAdditionalHelp "),og()()()()(),Sl(952,"tr",24)(953,"td",24)(954,"p"),eN(955,"M\xE9todo que exibe "),Sl(956,"code"),eN(957,"p-helper"),og(),eN(958," ou executa a a\xE7\xE3o definida em "),Sl(959,"code"),eN(960,"p-helper{eventOnClick}"),og(),eN(961," ou em "),Sl(962,"code"),eN(963,"p-additionalHelp"),og(),eN(964,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Sl(965,"code"),eN(966,"p-keydown"),og(),eN(967,"."),og(),Sl(968,"blockquote")(969,"p"),eN(970,"Exibe ou oculta o conte\xFAdo do componente "),Sl(971,"code"),eN(972,"po-helper"),og(),eN(973," quando o componente estiver com foco."),og()(),Sl(974,"pre")(975,"code"),eN(976,`//Exemplo com p-label e p-helper
<po-select
 #select
 ...
 p-label="Label do select"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, select)"
></po-select>
`),og()(),Sl(977,"pre")(978,"code",35),eN(979,`onKeyDown(event: KeyboardEvent, inp: PoSelectComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),og()()()()(),Wl(980,"br"),Sl(981,"h3"),eN(982,"Interfaces"),og(),Sl(983,"h4",36)(984,"code",5),eN(985,"PoSelectOptionGroup"),og()(),Sl(986,"div",2)(987,"p"),eN(988,"Interface da cole\xE7\xF5es de itens em grupo, utilizando uma label para o grupo e as op\xE7\xF5es do tipo "),Sl(989,"code"),eN(990,"PoSelectOption"),og(),eN(991,"."),og()(),Sl(992,"h4",12),eN(993,"Propriedades"),og(),Sl(994,"table",13)(995,"tr",14)(996,"th",15),eN(997,"Nome"),og(),Sl(998,"th",15),eN(999,"Tipo"),og(),Sl(1e3,"th",15),eN(1001,"Descri\xE7\xE3o"),og()(),Sl(1002,"tr",16)(1003,"td",17)(1004,"div",25)(1005,"span",26),eN(1006," label"),Wl(1007,"br"),og()()(),Sl(1008,"td",21)(1009,"code",27),eN(1010,"string"),og()(),Sl(1011,"td",24)(1012,"p"),eN(1013,"Label para denominar o nome do grupo."),og()()(),Sl(1014,"tr",16)(1015,"td",17)(1016,"div",25)(1017,"span",26),eN(1018," options"),Wl(1019,"br"),og()()(),Sl(1020,"td",21)(1021,"code",37),eN(1022,"Array<PoSelectOption>"),og()(),Sl(1023,"td",24)(1024,"p"),eN(1025,"Lista com as op\xE7\xF5es dispon\xEDveis em cada grupo."),og()()()(),Sl(1026,"h4",36)(1027,"code",5),eN(1028,"PoSelectOption"),og()(),Sl(1029,"div",2)(1030,"p"),eN(1031,"Interface da cole\xE7\xF5es de itens que deve ser informado no componente po-select"),og()(),Sl(1032,"h4",12),eN(1033,"Propriedades"),og(),Sl(1034,"table",13)(1035,"tr",14)(1036,"th",15),eN(1037,"Nome"),og(),Sl(1038,"th",15),eN(1039,"Tipo"),og(),Sl(1040,"th",15),eN(1041,"Descri\xE7\xE3o"),og()(),Sl(1042,"tr",16)(1043,"td",17)(1044,"div",25)(1045,"span",26),eN(1046," label"),Wl(1047,"br"),og()()(),Sl(1048,"td",21)(1049,"code",27),eN(1050,"string"),og()(),Sl(1051,"td",24)(1052,"p"),eN(1053,"Label a ser utilizada nos itens da lista."),og()()(),Sl(1054,"tr",16)(1055,"td",17)(1056,"div",25)(1057,"span",26),eN(1058," value"),Wl(1059,"br"),og()()(),Sl(1060,"td",21)(1061,"code",27),eN(1062,"string "),og(),Sl(1063,"code",38),eN(1064," number"),og()(),Sl(1065,"td",24)(1066,"p"),eN(1067,"Valor do objeto que ser\xE1 atribu\xEDdo ao model."),og()()()()());},dependencies:[Ka],encapsulation:2})}return a})();var Te=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,p){this.route=r,this.router=p;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let p=r.view;this.activeTab=p||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(p){return new(p||a)(w(Xn),w(En))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:9,vars:4,consts:[["p-title","Select",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(p,i){p&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return i.changeTab("doc")}),Wl(3,"sample-po-select-doc"),og(),Sl(4,"po-tab",3),ft("p-click",function(){return i.changeTab("web")}),Wl(5,"sample-po-select-basic-view")(6,"sample-po-select-labs-view")(7,"sample-po-select-customer-registration-view")(8,"sample-po-select-companies-view"),og()()()),p&2&&(nw("p-actions",i.actions),Lp(2),nw("p-active",i.activeTab==="doc"),Lp(2),nw("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[rNe,Bme,qme,Ee,Ce,ye,Pe,we],encapsulation:2})}return a})();var Je=[{path:"",component:Te}],Me=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue({imports:[hL.forChild(Je),hL]})}return a})();var Dt=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue({imports:[sr,Me]})}return a})();export{Dt as DocPoSelectModule};