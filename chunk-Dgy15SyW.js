import {f as fe$1,u as ue$1,s as sr,a as uL,C,c3 as Xn,E as En,U as Un,b as f,aW as Yp,c4 as C3,J as zl,T as nw,bM as dN,a7 as lN,an as DO,aH as Ka,b8 as qme,b9 as Yme,H as Il,q as Qx,R as og,a1 as ft,A as Lp,ar as Ux,au as dg,bs as uN,aX as G9,aF as $9,aY as z9,aG as mk,aZ as hk,b0 as Qt,b1 as mv,b4 as F3,c8 as Dde,bH as k3,c9 as Yhe,bc as OO,aB as Dx,aM as ww,aN as QA,a4 as mN,bd as Ax,aO as Ew,aP as e0,a5 as yN,cp as Hhe,a3 as cNe,aD as Xy,aT as eN,aE as Qy}from'./main-FCMDZGSJ.js';var Se=()=>({value:"1",label:"Option 1"}),fe=()=>({value:"2",label:"Option 2"}),Ce=(a,ge)=>[a,ge],de=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-checkbox-group-basic"]],standalone:false,decls:1,vars:6,consts:[["name","checkboxGroup","p-label","PO Checkbox Group",3,"p-options"]],template:function(p,n){p&1&&zl(0,"po-checkbox-group",0),p&2&&nw("p-options",dN(3,Ce,lN(1,Se),lN(2,fe)));},dependencies:[C3],encapsulation:2,changeDetection:1})}return a})();var ke=a=>({"docs-sample-code-tabs":a}),me=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-checkbox-group-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Checkbox Group Basic"),og(),Il(4,"a",2),ft("click",function(){return n.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-checkbox-group-basic/sample-po-checkbox-group-basic.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-checkbox-group
  name="checkboxGroup"
  p-label="PO Checkbox Group"
  [p-options]="[
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' }
  ]"
>
</po-checkbox-group>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-checkbox-group-basic/sample-po-checkbox-group-basic.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-checkbox-group-basic',
  templateUrl: './sample-po-checkbox-group-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoCheckboxGroupBasicComponent {}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-checkbox-group-basic"),og(),zl(23,"hr")),p&2&&(Lp(5),Ux("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,ke,n.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,de],encapsulation:2})}return a})();var se=(()=>{class a{helperText;checkboxGroup;columns;disabled;event;help;indeterminate;label;option;options;properties;fieldErrorMessage;size;columnOptions=[{label:"1 column",value:1},{label:"2 columns",value:2},{label:"3 columns",value:3},{label:"4 columns",value:4}];propertiesOptions=[{value:"disabled",label:"Disabled"},{value:"indeterminate",label:"Indeterminate"},{value:"optional",label:"Optional"},{value:"required",label:"Required"},{value:"showRequired",label:"Show Required"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"},{value:"compactLabel",label:"Compact Label"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore();}addOption(){this.options=[...this.options,this.option],this.clearOption();}changeEvent(d){this.event=d;}restore(){this.helperText="",this.checkboxGroup=void 0,this.columns=void 0,this.disabled=false,this.event=void 0,this.help="",this.indeterminate=void 0,this.label=void 0,this.options=[],this.properties=[],this.fieldErrorMessage="",this.size="medium",this.clearOption();}clearOption(){this.option={label:void 0,value:void 0};}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-checkbox-group-labs"]],standalone:false,decls:26,vars:34,consts:[["fOption","ngForm"],["f","ngForm"],["name","checkboxGroup",3,"ngModelChange","p-change","p-keydown","ngModel","p-helper","p-columns","p-disabled","p-help","p-indeterminate","p-label","p-optional","p-options","p-required","p-field-error-message","p-error-limit","p-show-required","p-label-text-wrap","p-compact-label","p-size"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","optionValue","p-clean","","p-label","Option Value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","optionLabel","p-clean","","p-label","Option Label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","disabled","p-label","Option Disabled",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add option",1,"po-lg-2","po-md-4",3,"p-click","p-disabled"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","fieldErrorMessage","p-clean","","p-label","Field Error Message",1,"po-md-6",3,"ngModelChange","ngModel"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","columns","p-columns","4","p-label","Columns",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(p,n){if(p&1){let s=Dx();Il(0,"po-checkbox-group",2),ww("ngModelChange",function(l){return Xy(s),eN(n.checkboxGroup,l)||(n.checkboxGroup=l),Qy(l)}),ft("p-change",function(){return n.changeEvent("p-change")})("p-keydown",function(){return n.changeEvent("p-keydown")}),og(),QA(),zl(1,"po-divider"),Il(2,"div",3),zl(3,"po-info",4),mN(4,"json"),zl(5,"po-info",5),og(),zl(6,"po-divider"),Il(7,"form",null,0)(9,"po-input",6),ww("ngModelChange",function(l){return Xy(s),eN(n.option.value,l)||(n.option.value=l),Qy(l)}),og(),QA(),Il(10,"po-input",7),ww("ngModelChange",function(l){return Xy(s),eN(n.option.label,l)||(n.option.label=l),Qy(l)}),og(),QA(),Il(11,"po-switch",8),ww("ngModelChange",function(l){return Xy(s),eN(n.option.disabled,l)||(n.option.disabled=l),Qy(l)}),og(),QA(),Il(12,"div",3)(13,"po-button",9),ft("p-click",function(){return n.addOption()}),og()()(),zl(14,"po-divider"),Il(15,"form",null,1)(17,"po-input",10),ww("ngModelChange",function(l){return Xy(s),eN(n.label,l)||(n.label=l),Qy(l)}),og(),QA(),Il(18,"po-input",11),ww("ngModelChange",function(l){return Xy(s),eN(n.help,l)||(n.help=l),Qy(l)}),og(),QA(),Il(19,"po-input",12),ww("ngModelChange",function(l){return Xy(s),eN(n.helperText,l)||(n.helperText=l),Qy(l)}),og(),QA(),Il(20,"po-input",13),ww("ngModelChange",function(l){return Xy(s),eN(n.fieldErrorMessage,l)||(n.fieldErrorMessage=l),Qy(l)}),og(),QA(),Il(21,"po-checkbox-group",14),ww("ngModelChange",function(l){return Xy(s),eN(n.properties,l)||(n.properties=l),Qy(l)}),og(),QA(),Il(22,"po-radio-group",15),ww("ngModelChange",function(l){return Xy(s),eN(n.columns,l)||(n.columns=l),Qy(l)}),og(),QA(),Il(23,"po-radio-group",16),ww("ngModelChange",function(l){return Xy(s),eN(n.size,l)||(n.size=l),Qy(l)}),og(),QA(),Il(24,"div",3)(25,"po-button",17),ft("p-click",function(){return n.restore()}),og()()();}if(p&2){let s=Ax(8);Ew("ngModel",n.checkboxGroup),nw("p-helper",n.helperText)("p-columns",n.columns)("p-disabled",n.properties.includes("disabled"))("p-help",n.help)("p-indeterminate",n.properties.includes("indeterminate"))("p-label",n.label)("p-optional",n.properties.includes("optional"))("p-options",n.options)("p-required",n.properties.includes("required"))("p-field-error-message",n.fieldErrorMessage)("p-error-limit",n.properties==null?null:n.properties.includes("errorLimit"))("p-show-required",n.properties.includes("showRequired"))("p-label-text-wrap",n.properties.includes("labelTextWrap"))("p-compact-label",n.properties==null?null:n.properties.includes("compactLabel"))("p-size",n.size),e0(),Lp(3),nw("p-value",yN(4,32,n.checkboxGroup)),Lp(2),nw("p-value",n.event),Lp(4),Ew("ngModel",n.option.value),e0(),Lp(),Ew("ngModel",n.option.label),e0(),Lp(),Ew("ngModel",n.option.disabled),e0(),Lp(2),nw("p-disabled",s.invalid),Lp(4),Ew("ngModel",n.label),e0(),Lp(),Ew("ngModel",n.help),e0(),Lp(),Ew("ngModel",n.helperText),e0(),Lp(),Ew("ngModel",n.fieldErrorMessage),e0(),Lp(),Ew("ngModel",n.properties),nw("p-options",n.propertiesOptions),e0(),Lp(),Ew("ngModel",n.columns),nw("p-options",n.columnOptions),e0(),Lp(),Ew("ngModel",n.size),nw("p-options",n.sizeOptions),e0();}},dependencies:[G9,$9,z9,mk,hk,Qt,mv,C3,F3,Dde,k3,Yhe,OO],encapsulation:2,changeDetection:1})}return a})();var _e=a=>({"docs-sample-code-tabs":a}),ce=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-checkbox-group-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Checkbox Group Labs"),og(),Il(4,"a",2),ft("click",function(){return n.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-checkbox-group-labs/sample-po-checkbox-group-labs.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-checkbox-group
  name="checkboxGroup"
  [(ngModel)]="checkboxGroup"
  [p-helper]="helperText"
  [p-columns]="columns"
  [p-disabled]="properties.includes('disabled')"
  [p-help]="help"
  [p-indeterminate]="properties.includes('indeterminate')"
  [p-label]="label"
  [p-optional]="properties.includes('optional')"
  [p-options]="options"
  [p-required]="properties.includes('required')"
  [p-field-error-message]="fieldErrorMessage"
  [p-error-limit]="$safeNavigationMigration(properties?.includes('errorLimit'))"
  [p-show-required]="properties.includes('showRequired')"
  [p-label-text-wrap]="properties.includes('labelTextWrap')"
  [p-compact-label]="$safeNavigationMigration(properties?.includes('compactLabel'))"
  [p-size]="size"
  (p-change)="changeEvent('p-change')"
  (p-keydown)="changeEvent('p-keydown')"
>
</po-checkbox-group>

<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="checkboxGroup | json"> </po-info>

  <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
</div>

<po-divider />

<form #fOption="ngForm">
  <po-input class="po-md-6" name="optionValue" [(ngModel)]="option.value" p-clean p-label="Option Value" p-required>
  </po-input>

  <po-input class="po-md-6" name="optionLabel" [(ngModel)]="option.label" p-clean p-label="Option Label" p-required>
  </po-input>

  <po-switch class="po-md-6" name="disabled" [(ngModel)]="option.disabled" p-label="Option Disabled"> </po-switch>

  <div class="po-row">
    <po-button class="po-lg-2 po-md-4" p-label="Add option" [p-disabled]="fOption.invalid" (p-click)="addOption()">
    </po-button>
  </div>
</form>

<po-divider />

<form #f="ngForm">
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
    name="columns"
    [(ngModel)]="columns"
    p-columns="4"
    p-label="Columns"
    [p-options]="columnOptions"
  >
  </po-radio-group>

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
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-checkbox-group-labs/sample-po-checkbox-group-labs.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { PoCheckboxGroupOption, PoRadioGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-checkbox-group-labs',
  templateUrl: './sample-po-checkbox-group-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoCheckboxGroupLabsComponent implements OnInit {
  helperText: string;
  checkboxGroup: object;
  columns: number;
  disabled: boolean;
  event: string;
  help: string;
  indeterminate: boolean;
  label: string;
  option: PoCheckboxGroupOption;
  options: Array<PoCheckboxGroupOption>;
  properties: Array<string>;
  fieldErrorMessage: string;
  size: string;

  public readonly columnOptions: Array<PoRadioGroupOption> = [
    { label: '1 column', value: 1 },
    { label: '2 columns', value: 2 },
    { label: '3 columns', value: 3 },
    { label: '4 columns', value: 4 }
  ];

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'disabled', label: 'Disabled' },
    { value: 'indeterminate', label: 'Indeterminate' },
    { value: 'optional', label: 'Optional' },
    { value: 'required', label: 'Required' },
    { value: 'showRequired', label: 'Show Required' },
    { value: 'errorLimit', label: 'Limit Error Message' },
    { value: 'labelTextWrap', label: 'Label Text Wrap' },
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
    this.options = [...this.options, this.option];
    this.clearOption();
  }

  changeEvent(event: string) {
    this.event = event;
  }

  restore() {
    this.helperText = '';
    this.checkboxGroup = undefined;
    this.columns = undefined;
    this.disabled = false;
    this.event = undefined;
    this.help = '';
    this.indeterminate = undefined;
    this.label = undefined;
    this.options = [];
    this.properties = [];
    this.fieldErrorMessage = '';
    this.size = 'medium';

    this.clearOption();
  }

  private clearOption() {
    this.option = { label: undefined, value: undefined };
  }
}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-checkbox-group-labs"),og(),zl(23,"hr")),p&2&&(Lp(5),Ux("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,_e,n.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,se],encapsulation:2})}return a})();var ue=(()=>{class a{poNotification=f(Yp);attempts;expiration;maxAttempts;periodExpiration;auditOptions=[{value:"1",label:"Functional menu"},{value:"2",label:"Online panel"},{value:"3",label:"Internet browser"},{value:"4",label:"Browser details"},{value:"5",label:"Transparent panel"},{value:"6",label:"Browser refresh"}];systemOptions=[{value:"1",label:"Audit updates in the data dictionary"},{value:"2",label:"Audit updates in the user registry"},{value:"3",label:"Audit authentication / access"},{value:"4",label:"Audit rejection of access to resources"}];confirm(){this.poNotification.success("Settings saved successfully!");}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-checkbox-group-password-policy"]],standalone:false,decls:19,vars:7,consts:[["g","ngForm"],[1,"po-font-subtitle"],[1,"po-row"],["name","system","p-label","System features",1,"po-lg-12",3,"p-options"],["name","audit","p-label","Audit rules",1,"po-lg-12",3,"p-options"],["name","expiration","p-label","Password expiration","p-label-off","Desactive","p-label-on","Actived",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","periodExpiration","p-label","Period (in days)","p-maxlength","3",1,"po-lg-6",3,"p-disabled"],["name","attempts","p-label","Restrict access attempts","p-label-off","Desactive","p-label-on","Actived",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","maxAttempts","p-label","Maximum number of attempts","p-maxlength","3",1,"po-lg-6",3,"ngModelChange","ngModel","p-disabled"],["p-label","Apply password policy",1,"po-offset-lg-9","po-lg-3","po-offset-xl-9",3,"p-click"]],template:function(p,n){if(p&1){let s=Dx();Il(0,"div",1),Qx(1,"Password Rules"),og(),zl(2,"po-divider"),Il(3,"form",null,0)(5,"div",2),zl(6,"po-checkbox-group",3),og(),zl(7,"po-divider"),Il(8,"div",2),zl(9,"po-checkbox-group",4),og(),zl(10,"po-divider"),Il(11,"div",2)(12,"po-switch",5),ww("ngModelChange",function(l){return Xy(s),eN(n.expiration,l)||(n.expiration=l),Qy(l)}),og(),QA(),zl(13,"po-number",6),og(),Il(14,"div",2)(15,"po-switch",7),ww("ngModelChange",function(l){return Xy(s),eN(n.attempts,l)||(n.attempts=l),Qy(l)}),og(),QA(),Il(16,"po-number",8),ww("ngModelChange",function(l){return Xy(s),eN(n.maxAttempts,l)||(n.maxAttempts=l),Qy(l)}),og(),QA(),og(),Il(17,"div",2)(18,"po-button",9),ft("p-click",function(){return n.confirm()}),og()()();}p&2&&(Lp(6),nw("p-options",n.systemOptions),Lp(3),nw("p-options",n.auditOptions),Lp(3),Ew("ngModel",n.expiration),e0(),Lp(),nw("p-disabled",!n.expiration),Lp(2),Ew("ngModel",n.attempts),e0(),Lp(),Ew("ngModel",n.maxAttempts),nw("p-disabled",!n.attempts),e0());},dependencies:[G9,$9,z9,mk,hk,Qt,mv,C3,Hhe,k3],encapsulation:2,changeDetection:1})}return a})();var Te=a=>({"docs-sample-code-tabs":a}),be=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-checkbox-group-password-policy-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Checkbox Group \u2013 Security policy"),og(),Il(4,"a",2),ft("click",function(){return n.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-checkbox-group-password-policy/sample-po-checkbox-group-password-policy.component.html"),og(),Il(13,"pre",7),Qx(14,`<div class="po-font-subtitle">Password Rules</div>

<po-divider />

<form #g="ngForm">
  <div class="po-row">
    <po-checkbox-group class="po-lg-12" name="system" p-label="System features" [p-options]="systemOptions">
    </po-checkbox-group>
  </div>

  <po-divider />

  <div class="po-row">
    <po-checkbox-group class="po-lg-12" name="audit" p-label="Audit rules" [p-options]="auditOptions">
    </po-checkbox-group>
  </div>

  <po-divider />

  <div class="po-row">
    <po-switch
      class="po-lg-6"
      name="expiration"
      [(ngModel)]="expiration"
      p-label="Password expiration"
      p-label-off="Desactive"
      p-label-on="Actived"
    >
    </po-switch>

    <po-number
      class="po-lg-6"
      name="periodExpiration"
      p-label="Period (in days)"
      p-maxlength="3"
      [p-disabled]="!expiration"
    >
    </po-number>
  </div>

  <div class="po-row">
    <po-switch
      class="po-lg-6"
      name="attempts"
      [(ngModel)]="attempts"
      p-label="Restrict access attempts"
      p-label-off="Desactive"
      p-label-on="Actived"
    >
    </po-switch>

    <po-number
      class="po-lg-6"
      name="maxAttempts"
      [(ngModel)]="maxAttempts"
      p-label="Maximum number of attempts"
      p-maxlength="3"
      [p-disabled]="!attempts"
    >
    </po-number>
  </div>

  <div class="po-row">
    <po-button class="po-offset-lg-9 po-lg-3 po-offset-xl-9" p-label="Apply password policy" (p-click)="confirm()">
    </po-button>
  </div>
</form>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-checkbox-group-password-policy/sample-po-checkbox-group-password-policy.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

import { PoCheckboxGroupOption } from '@po-ui/ng-components';

import { PoNotificationService } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-checkbox-group-password-policy',
  templateUrl: './sample-po-checkbox-group-password-policy.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoCheckboxGroupPasswordPolicyComponent {
  private poNotification = inject(PoNotificationService);

  attempts: number;
  expiration: number;
  maxAttempts: boolean;
  periodExpiration: boolean;

  public readonly auditOptions: Array<PoCheckboxGroupOption> = [
    { value: '1', label: 'Functional menu' },
    { value: '2', label: 'Online panel' },
    { value: '3', label: 'Internet browser' },
    { value: '4', label: 'Browser details' },
    { value: '5', label: 'Transparent panel' },
    { value: '6', label: 'Browser refresh' }
  ];

  public readonly systemOptions: Array<PoCheckboxGroupOption> = [
    { value: '1', label: 'Audit updates in the data dictionary' },
    { value: '2', label: 'Audit updates in the user registry' },
    { value: '3', label: 'Audit authentication / access' },
    { value: '4', label: 'Audit rejection of access to resources' }
  ];

  confirm() {
    this.poNotification.success('Settings saved successfully!');
  }
}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-checkbox-group-password-policy"),og(),zl(23,"hr")),p&2&&(Lp(5),Ux("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,Te,n.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,ue],encapsulation:2})}return a})();var he=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-checkbox-group-doc"]],standalone:false,decls:867,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-radio-group"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoCheckboxGroupOption[]"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-helper"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"]],template:function(p,n){p&1&&(Il(0,"div",0)(1,"p",1)(2,"code"),Qx(3,"import { PoFieldModule } from '@po-ui/ng-components';"),og()(),Il(4,"div",2)(5,"p"),Qx(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),og(),Il(7,"blockquote")(8,"p"),Qx(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),Il(10,"code"),Qx(11,"FormsModule"),og(),Qx(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Il(13,"code"),Qx(14,"ReactiveFormsModule"),og(),Qx(15,", ambos nativos do Angular."),og()()(),Il(16,"h3",3),Qx(17,"Componente"),og(),Il(18,"h4",4)(19,"code",5),Qx(20,"PoCheckboxGroupComponent"),og()(),Il(21,"div",2)(22,"p"),Qx(23,"O componente "),Il(24,"code"),Qx(25,"po-checkbox-group"),og(),Qx(26,` exibe uma lista de m\xFAltipla escolha onde o usu\xE1rio pode marcar e desmarcar,
utilizando a tecla de espa\xE7o ou o clique do mouse, v\xE1rias op\xE7\xF5es.`),og(),Il(27,"blockquote")(28,"p"),Qx(29,"Para sele\xE7\xE3o \xFAnica, utilize o "),Il(30,"a",6)(31,"strong"),Qx(32,"PO Radio Group"),og()(),Qx(33,"."),og()(),Il(34,"p"),Qx(35,"Por padr\xE3o, o po-checkbox-group retorna um array com os valores dos itens selecionados para o model."),og(),Il(36,"pre")(37,"code"),Qx(38,`favorites = ['PO', 'Angular'];
`),og()(),Il(39,"p"),Qx(40,`Na maioria das situa\xE7\xF5es, o array com os objetos setados j\xE1 atende as necessidades mas, caso o desenvolvedor
tenha necessidade de usar um valor indeterminado (`),Il(41,"code"),Qx(42,"null"),og(),Qx(43,"), ou seja, nem marcado ("),Il(44,"code"),Qx(45,"true"),og(),Qx(46,") e nem desmarcado ("),Il(47,"code"),Qx(48,"false"),og(),Qx(49,`),
deve setar a propriedade `),Il(50,"code"),Qx(51,"p-indeterminate"),og(),Qx(52," como "),Il(53,"code"),Qx(54,"true"),og(),Qx(55,"."),og(),Il(56,"p"),Qx(57,"Nesse caso, o po-checkbox-group vai retornar um objeto com todas as op\xE7\xF5es dispon\xEDveis e seus valores."),og(),Il(58,"pre")(59,"code"),Qx(60,`favorites = {
 PO: true,
 Angular: true,
 VueJS: false,
 React: null // indeterminado
};
`),og()()(),Il(61,"div",7)(62,"h4",8),Qx(63,"Seletor"),og(),Il(64,"pre",9),Qx(65,`<po-checkbox-group
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
    p-indeterminate="boolean"
    (p-keydown)="EventEmitter"
    p-label="string"
    p-label-text-wrap="boolean"
    name="string"
    (ng-model-change)="EventEmitter"
    p-optional="boolean"
    p-options="PoCheckboxGroupOption[]"
    p-helper="PoHelperOptions | string"
    p-required="boolean"
    p-show-required="boolean"
    p-size="string" >
</po-checkbox-group>
`),og()(),Il(66,"h4",10),Qx(67,"Propriedades"),og(),Il(68,"table",11)(69,"tr",12)(70,"th",13),Qx(71,"Nome"),og(),Il(72,"th",13),Qx(73,"Tipo"),og(),Il(74,"th",13),Qx(75,"Padr\xE3o"),og(),Il(76,"th",13),Qx(77,"Descri\xE7\xE3o"),og()(),Il(78,"tr",14)(79,"td",15)(80,"div",16)(81,"span",17),Qx(82," (p-additional-help)"),zl(83,"br"),og()(),Il(84,"div",18),Qx(85,"Deprecated"),og()(),Il(86,"td",19)(87,"code",20),Qx(88,"EventEmitter"),og()(),Il(89,"td",21),Qx(90,"-"),og(),Il(91,"td",22)(92,"em")(93,"strong"),Qx(94,"(opcional)"),og()(),Il(95,"p"),Qx(96,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),og(),Il(97,"blockquote")(98,"p"),Qx(99,"Essa propriedade est\xE1 "),Il(100,"strong"),Qx(101,"depreciada"),og(),Qx(102," e ser\xE1 removida na vers\xE3o "),Il(103,"code"),Qx(104,"23.x.x"),og(),Qx(105,". Recomendamos utilizar a propriedade "),Il(106,"code"),Qx(107,"p-helper"),og(),Qx(108," que oferece mais recursos e flexibilidade."),og()()()(),Il(109,"tr",14)(110,"td",15)(111,"div",23)(112,"span",24),Qx(113," p-additional-help-tooltip"),zl(114,"br"),og()(),Il(115,"div",18),Qx(116,"Deprecated"),og()(),Il(117,"td",19)(118,"code",25),Qx(119,"string"),og()(),Il(120,"td",21),Qx(121,"-"),og(),Il(122,"td",22)(123,"em")(124,"strong"),Qx(125,"(opcional)"),og()(),Il(126,"p"),Qx(127,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),Il(128,"code"),Qx(129,"po-helper"),og(),Qx(130,`.
`),Il(131,"strong"),Qx(132,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),og()(),Il(133,"blockquote")(134,"p"),Qx(135,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),og()(),Il(136,"blockquote")(137,"p"),Qx(138,"Essa propriedade est\xE1 "),Il(139,"strong"),Qx(140,"depreciada"),og(),Qx(141," e ser\xE1 removida na vers\xE3o "),Il(142,"code"),Qx(143,"23.x.x"),og(),Qx(144,". Recomendamos utilizar a propriedade "),Il(145,"code"),Qx(146,"p-helper"),og(),Qx(147," que oferece mais recursos e flexibilidade."),og()()()(),Il(148,"tr",14)(149,"td",15)(150,"div",23)(151,"span",24),Qx(152," p-append-in-body"),zl(153,"br"),og()()(),Il(154,"td",19)(155,"code",26),Qx(156,"boolean"),og()(),Il(157,"td",21)(158,"p")(159,"code"),Qx(160,"false"),og()()(),Il(161,"td",22)(162,"em")(163,"strong"),Qx(164,"(opcional)"),og()(),Il(165,"p"),Qx(166,"Define que o popover ("),Il(167,"code"),Qx(168,"p-helper"),og(),Qx(169," e/ou "),Il(170,"code"),Qx(171,"p-error-limit"),og(),Qx(172,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),og(),Il(173,"blockquote")(174,"p"),Qx(175,"Quando utilizado com "),Il(176,"code"),Qx(177,"p-helper"),og(),Qx(178,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),og()()()(),Il(179,"tr",14)(180,"td",15)(181,"div",23)(182,"span",24),Qx(183," p-auto-focus"),zl(184,"br"),og()()(),Il(185,"td",19)(186,"code",26),Qx(187,"boolean"),og()(),Il(188,"td",21)(189,"p")(190,"code"),Qx(191,"false"),og()()(),Il(192,"td",22)(193,"em")(194,"strong"),Qx(195,"(opcional)"),og()(),Il(196,"p"),Qx(197,"Aplica foco no elemento ao ser iniciado."),og(),Il(198,"blockquote")(199,"p"),Qx(200,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),og()()()(),Il(201,"tr",14)(202,"td",15)(203,"div",16)(204,"span",17),Qx(205," (p-change)"),zl(206,"br"),og()()(),Il(207,"td",19)(208,"code",20),Qx(209,"EventEmitter"),og()(),Il(210,"td",21),Qx(211,"-"),og(),Il(212,"td",22)(213,"em")(214,"strong"),Qx(215,"(opcional)"),og()(),Il(216,"p"),Qx(217,"Evento disparado ao alterar valor do campo"),og()()(),Il(218,"tr",14)(219,"td",15)(220,"div",23)(221,"span",24),Qx(222," p-columns"),zl(223,"br"),og()()(),Il(224,"td",19)(225,"code",27),Qx(226,"number"),og()(),Il(227,"td",21)(228,"p")(229,"code"),Qx(230,"2"),og()()(),Il(231,"td",22)(232,"em")(233,"strong"),Qx(234,"(opcional)"),og()(),Il(235,"p"),Qx(236,"Possibilita definir a quantidade de colunas para exibi\xE7\xE3o dos itens do "),Il(237,"em"),Qx(238,"checkbox"),og(),Qx(239,"."),og(),Il(240,"ul")(241,"li"),Qx(242,"\xC9 poss\xEDvel exibir as op\xE7\xF5es entre "),Il(243,"code"),Qx(244,"1"),og(),Qx(245," e "),Il(246,"code"),Qx(247,"4"),og(),Qx(248," colunas."),og(),Il(249,"li"),Qx(250,"Para resolu\xE7\xE3o "),Il(251,"code"),Qx(252,"sm"),og(),Qx(253," a colunagem invariavelmente passa para "),Il(254,"code"),Qx(255,"1"),og(),Qx(256," coluna."),og(),Il(257,"li"),Qx(258,"Quando se trata de resolu\xE7\xE3o "),Il(259,"code"),Qx(260,"md"),og(),Qx(261," e o valor estabelecido para colunas for superior a "),Il(262,"code"),Qx(263,"2"),og(),Qx(264,`,
o `),Il(265,"em"),Qx(266,"grid system"),og(),Qx(267," ser\xE1 composto por "),Il(268,"code"),Qx(269,"2"),og(),Qx(270," colunas."),og(),Il(271,"li"),Qx(272,"Para evitar a quebra de linha, prefira a utiliza\xE7\xE3o de "),Il(273,"code"),Qx(274,"1"),og(),Qx(275," coluna para op\xE7\xF5es com textos grandes."),og()()()(),Il(276,"tr",14)(277,"td",15)(278,"div",23)(279,"span",24),Qx(280," p-compact-label"),zl(281,"br"),og()()(),Il(282,"td",19)(283,"code",26),Qx(284,"boolean"),og()(),Il(285,"td",21)(286,"p")(287,"code"),Qx(288,"false"),og()()(),Il(289,"td",22)(290,"em")(291,"strong"),Qx(292,"(opcional)"),og()(),Il(293,"p"),Qx(294,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),og(),Il(295,"p"),Qx(296,"Quando habilitado ("),Il(297,"code"),Qx(298,"true"),og(),Qx(299,"), o modo compacto afeta o conjunto composto por:"),og(),Il(300,"ul")(301,"li")(302,"code"),Qx(303,"po-label"),og()(),Il(304,"li")(305,"code"),Qx(306,"p-requirement (showRequired)"),og()(),Il(307,"li")(308,"code"),Qx(309,"po-helper"),og()()(),Il(310,"p"),Qx(311,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),og(),Il(312,"p"),Qx(313,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),og(),Il(314,"ul")(315,"li")(316,"code"),Qx(317,"--field-container-title-justify"),og()(),Il(318,"li")(319,"code"),Qx(320,"--field-container-title-flex"),og()()(),Il(321,"p"),Qx(322,"Exemplo:"),og(),Il(323,"pre")(324,"code"),Qx(325,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),og()(),Il(326,"p"),Qx(327,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),og()()(),Il(328,"tr",14)(329,"td",15)(330,"div",23)(331,"span",24),Qx(332," p-disabled"),zl(333,"br"),og()()(),Il(334,"td",19)(335,"code",26),Qx(336,"boolean"),og()(),Il(337,"td",21)(338,"p")(339,"code"),Qx(340,"false"),og()()(),Il(341,"td",22)(342,"em")(343,"strong"),Qx(344,"(opcional)"),og()(),Il(345,"p"),Qx(346,"Desabilita todos os itens do checkbox."),og()()(),Il(347,"tr",14)(348,"td",15)(349,"div",23)(350,"span",24),Qx(351," p-error-limit"),zl(352,"br"),og()()(),Il(353,"td",19)(354,"code",26),Qx(355,"boolean"),og()(),Il(356,"td",21)(357,"p")(358,"code"),Qx(359,"false"),og()()(),Il(360,"td",22)(361,"em")(362,"strong"),Qx(363,"(opcional)"),og()(),Il(364,"p"),Qx(365,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),og(),Il(366,"blockquote")(367,"p"),Qx(368,"Caso essa propriedade seja definida como "),Il(369,"code"),Qx(370,"true"),og(),Qx(371,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),og()()()(),Il(372,"tr",14)(373,"td",15)(374,"div",23)(375,"span",24),Qx(376," p-field-error-message"),zl(377,"br"),og()()(),Il(378,"td",19)(379,"code",25),Qx(380,"string"),og()(),Il(381,"td",21),Qx(382,"-"),og(),Il(383,"td",22)(384,"em")(385,"strong"),Qx(386,"(opcional)"),og()(),Il(387,"p"),Qx(388,"Exibe a mensagem setada se o campo estiver vazio e for requerido."),og(),Il(389,"blockquote")(390,"p"),Qx(391,"Necess\xE1rio que a propriedade "),Il(392,"code"),Qx(393,"p-required"),og(),Qx(394," esteja habilitada."),og()()()(),Il(395,"tr",14)(396,"td",15)(397,"div",23)(398,"span",24),Qx(399," p-help"),zl(400,"br"),og()()(),Il(401,"td",19)(402,"code",25),Qx(403,"string"),og()(),Il(404,"td",21),Qx(405,"-"),og(),Il(406,"td",22)(407,"em")(408,"strong"),Qx(409,"(opcional)"),og()(),Il(410,"p"),Qx(411,"Texto de apoio do campo"),og()()(),Il(412,"tr",14)(413,"td",15)(414,"div",23)(415,"span",24),Qx(416," p-indeterminate"),zl(417,"br"),og()()(),Il(418,"td",19)(419,"code",26),Qx(420,"boolean"),og()(),Il(421,"td",21)(422,"p")(423,"code"),Qx(424,"false"),og()()(),Il(425,"td",22)(426,"em")(427,"strong"),Qx(428,"(opcional)"),og()(),Il(429,"p"),Qx(430,"Caso exista a necessidade de usar o valor indeterminado ("),Il(431,"code"),Qx(432,"null"),og(),Qx(433,`) dentro da lista de op\xE7\xF5es, \xE9 necess\xE1rio setar
a propriedade `),Il(434,"code"),Qx(435,"p-indeterminate"),og(),Qx(436," como "),Il(437,"code"),Qx(438,"true"),og(),Qx(439,", por padr\xE3o essa propriedade vem desabilitada ("),Il(440,"code"),Qx(441,"false"),og(),Qx(442,")."),og(),Il(443,"p"),Qx(444,"Quando essa propriedade \xE9 setada como "),Il(445,"code"),Qx(446,"true"),og(),Qx(447,", o "),Il(448,"em"),Qx(449,"po-checkbox-group"),og(),Qx(450,` passa a devolver um objeto completo para o
`),Il(451,"code"),Qx(452,"ngModel"),og(),Qx(453,", diferente do array que cont\xE9m apenas os valores selecionados."),og()()(),Il(454,"tr",14)(455,"td",15)(456,"div",16)(457,"span",17),Qx(458," (p-keydown)"),zl(459,"br"),og()()(),Il(460,"td",19)(461,"code",20),Qx(462,"EventEmitter"),og()(),Il(463,"td",21),Qx(464,"-"),og(),Il(465,"td",22)(466,"em")(467,"strong"),Qx(468,"(opcional)"),og()(),Il(469,"p"),Qx(470,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Il(471,"code"),Qx(472,"KeyboardEvent"),og(),Qx(473," com informa\xE7\xF5es sobre a tecla."),og()()(),Il(474,"tr",14)(475,"td",15)(476,"div",23)(477,"span",24),Qx(478," p-label"),zl(479,"br"),og()()(),Il(480,"td",19)(481,"code",25),Qx(482,"string"),og()(),Il(483,"td",21),Qx(484,"-"),og(),Il(485,"td",22)(486,"em")(487,"strong"),Qx(488,"(opcional)"),og()(),Il(489,"p"),Qx(490,"Label do campo"),og()()(),Il(491,"tr",14)(492,"td",15)(493,"div",23)(494,"span",24),Qx(495," p-label-text-wrap"),zl(496,"br"),og()()(),Il(497,"td",19)(498,"code",26),Qx(499,"boolean"),og()(),Il(500,"td",21)(501,"p")(502,"code"),Qx(503,"false"),og()()(),Il(504,"td",22)(505,"em")(506,"strong"),Qx(507,"(opcional)"),og()(),Il(508,"p"),Qx(509,"Habilita a quebra autom\xE1tica do texto da propriedade "),Il(510,"code"),Qx(511,"p-label"),og(),Qx(512,". Quando "),Il(513,"code"),Qx(514,"p-label-text-wrap"),og(),Qx(515,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),og()()(),Il(516,"tr",14)(517,"td",15)(518,"div",23)(519,"span",24),Qx(520," name"),zl(521,"br"),og()()(),Il(522,"td",19)(523,"code",25),Qx(524,"string"),og()(),Il(525,"td",21),Qx(526,"-"),og(),Il(527,"td",22)(528,"p"),Qx(529,"Nome dos checkboxes"),og()()(),Il(530,"tr",14)(531,"td",15)(532,"div",16)(533,"span",17),Qx(534," (ngModelChange)"),zl(535,"br"),og()()(),Il(536,"td",19)(537,"code",20),Qx(538,"EventEmitter"),og()(),Il(539,"td",21),Qx(540,"-"),og(),Il(541,"td",22)(542,"em")(543,"strong"),Qx(544,"(opcional)"),og()(),Il(545,"p"),Qx(546,"Fun\xE7\xE3o para atualizar o "),Il(547,"code"),Qx(548,"ngModel"),og(),Qx(549," do componente, necess\xE1rio quando n\xE3o for utilizado dentro da tag form."),og(),Il(550,"p"),Qx(551,"Na vers\xE3o 12.2.0 do Angular a verifica\xE7\xE3o "),Il(552,"code"),Qx(553,"strictTemplates"),og(),Qx(554,` vem true como default. Portanto, para utilizar
two-way binding no componente deve se utilizar da seguinte forma:`),og(),Il(555,"pre")(556,"code"),Qx(557,`<po-checkbox-group ... [ngModel]="checkboxgroupModel" (ngModelChange)="checkboxgroupModel = $event"> </po-checkbox-group>
`),og()()()(),Il(558,"tr",14)(559,"td",15)(560,"div",23)(561,"span",24),Qx(562," p-optional"),zl(563,"br"),og()()(),Il(564,"td",19)(565,"code",26),Qx(566,"boolean"),og()(),Il(567,"td",21)(568,"p")(569,"code"),Qx(570,"false"),og()()(),Il(571,"td",22)(572,"em")(573,"strong"),Qx(574,"(opcional)"),og()(),Il(575,"p"),Qx(576,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),og(),Il(577,"blockquote")(578,"p"),Qx(579,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),og()(),Il(580,"ul")(581,"li"),Qx(582,"O campo conter "),Il(583,"code"),Qx(584,"p-required"),og(),Qx(585,";"),og(),Il(586,"li"),Qx(587,"N\xE3o possuir "),Il(588,"code"),Qx(589,"p-help"),og(),Qx(590," e/ou "),Il(591,"code"),Qx(592,"p-label"),og(),Qx(593,"."),og()()()(),Il(594,"tr",14)(595,"td",15)(596,"div",23)(597,"span",24),Qx(598," p-options"),zl(599,"br"),og()()(),Il(600,"td",19)(601,"code",28),Qx(602,"PoCheckboxGroupOption[]"),og()(),Il(603,"td",21),Qx(604,"-"),og(),Il(605,"td",22)(606,"em")(607,"strong"),Qx(608,"(opcional)"),og()(),Il(609,"p"),Qx(610,`Lista de op\xE7\xF5es que ser\xE3o exibidas
Nesta propriedade deve ser definido um array de objetos que implementam a interface PoCheckboxGroupOption`),og()()(),Il(611,"tr",14)(612,"td",15)(613,"div",23)(614,"span",24),Qx(615," p-helper"),zl(616,"br"),og()()(),Il(617,"td",19)(618,"code",29),Qx(619,"PoHelperOptions "),og(),Il(620,"code",25),Qx(621," string"),og()(),Il(622,"td",21),Qx(623,"-"),og(),Il(624,"td",22)(625,"em")(626,"strong"),Qx(627,"(opcional)"),og()(),Il(628,"p"),Qx(629,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label quando a propriedade "),Il(630,"code"),Qx(631,"p-label"),og(),Qx(632," for definida, ou, ao lado do componente na aus\xEAncia da propriedade "),Il(633,"code"),Qx(634,"p-label"),og(),Qx(635,"."),og(),Il(636,"blockquote")(637,"p"),Qx(638,"Para mais informa\xE7\xF5es acesse: "),Il(639,"a",30),Qx(640,"https://po-ui.io/documentation/po-helper"),og(),Qx(641,"."),og()(),Il(642,"blockquote")(643,"p"),Qx(644,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),Il(645,"code"),Qx(646,"p-additional-help-tooltip"),og(),Qx(647," e "),Il(648,"code"),Qx(649,"p-additional-help"),og(),Qx(650,") ser\xE1 ignorado."),og()()()(),Il(651,"tr",14)(652,"td",15)(653,"div",23)(654,"span",24),Qx(655," p-required"),zl(656,"br"),og()()(),Il(657,"td",19)(658,"code",26),Qx(659,"boolean"),og()(),Il(660,"td",21)(661,"p")(662,"code"),Qx(663,"false"),og()()(),Il(664,"td",22)(665,"em")(666,"strong"),Qx(667,"(opcional)"),og()(),Il(668,"p"),Qx(669,"Define que o campo ser\xE1 obrigat\xF3rio."),og()()(),Il(670,"tr",14)(671,"td",15)(672,"div",23)(673,"span",24),Qx(674," p-show-required"),zl(675,"br"),og()()(),Il(676,"td",19)(677,"code",26),Qx(678,"boolean"),og()(),Il(679,"td",21),Qx(680,"-"),og(),Il(681,"td",22)(682,"p"),Qx(683,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),og(),Il(684,"blockquote")(685,"p"),Qx(686,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),og()(),Il(687,"ul")(688,"li"),Qx(689,"N\xE3o possuir "),Il(690,"code"),Qx(691,"p-help"),og(),Qx(692," e/ou "),Il(693,"code"),Qx(694,"p-label"),og(),Qx(695,"."),og()()()(),Il(696,"tr",14)(697,"td",15)(698,"div",23)(699,"span",24),Qx(700," p-size"),zl(701,"br"),og()()(),Il(702,"td",19)(703,"code",25),Qx(704,"string"),og()(),Il(705,"td",21)(706,"p")(707,"code"),Qx(708,"medium"),og()()(),Il(709,"td",22)(710,"em")(711,"strong"),Qx(712,"(opcional)"),og()(),Il(713,"p"),Qx(714,"Define o tamanho dos checkboxes do componente:"),og(),Il(715,"ul")(716,"li")(717,"code"),Qx(718,"small"),og(),Qx(719,": 16x16 (dispon\xEDvel apenas para acessibilidade AA)."),og(),Il(720,"li")(721,"code"),Qx(722,"medium"),og(),Qx(723,": 24x24."),og()(),Il(724,"blockquote")(725,"p"),Qx(726,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Il(727,"code"),Qx(728,"medium"),og(),Qx(729,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Il(730,"a",31),Qx(731,"po-theme"),og(),Qx(732,"."),og()()()()(),Il(733,"h3",10),Qx(734,"M\xE9todos"),og(),Il(735,"table",32)(736,"tr",14)(737,"th",33)(738,"div",23)(739,"h4")(740,"span",24),Qx(741," focus "),og()()()()(),Il(742,"tr",22)(743,"td",22)(744,"p"),Qx(745,"Fun\xE7\xE3o que atribui foco ao componente."),og(),Il(746,"p"),Qx(747,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),og(),Il(748,"pre")(749,"code"),Qx(750,`import { PoCheckboxGroupComponent } from '@po-ui/ng-components';

...

@ViewChild(PoCheckboxGroupComponent, { static: true }) checkbox: PoCheckboxGroupComponent;

focusCheckbox() {
  this.checkbox.focus();
}
`),og()()()()(),zl(751,"br"),Il(752,"table",32)(753,"tr",14)(754,"th",33)(755,"div",23)(756,"h4")(757,"span",24),Qx(758," showAdditionalHelp "),og()()()()(),Il(759,"tr",22)(760,"td",22)(761,"p"),Qx(762,"M\xE9todo que exibe "),Il(763,"code"),Qx(764,"p-helper"),og(),Qx(765," ou executa a a\xE7\xE3o definida em "),Il(766,"code"),Qx(767,"p-helper{eventOnClick}"),og(),Qx(768," ou em "),Il(769,"code"),Qx(770,"p-additionalHelp"),og(),Qx(771,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Il(772,"code"),Qx(773,"p-keydown"),og(),Qx(774,"."),og(),Il(775,"blockquote")(776,"p"),Qx(777,"Exibe ou oculta o conte\xFAdo do componente "),Il(778,"code"),Qx(779,"po-helper"),og(),Qx(780," quando o componente estiver com foco."),og()(),Il(781,"pre")(782,"code"),Qx(783,`//Exemplo com p-label e p-helper
<po-checkbox-group
 #checkboxGroup
 ...
 p-label="Label do checkbox"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, checkboxGroup)"
></po-checkbox-group>
`),og()(),Il(784,"pre")(785,"code"),Qx(786,`...
onKeyDown(event: KeyboardEvent, inp: PoCheckboxGroupComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),og()()()()(),zl(787,"br"),Il(788,"h3"),Qx(789,"Interfaces"),og(),Il(790,"h4",34)(791,"code",5),Qx(792,"PoCheckboxGroupOption"),og()(),Il(793,"div",2)(794,"p"),Qx(795,"Interface para as a\xE7\xF5es do componente po-checkbox-group."),og()(),Il(796,"h4",10),Qx(797,"Propriedades"),og(),Il(798,"table",11)(799,"tr",12)(800,"th",13),Qx(801,"Nome"),og(),Il(802,"th",13),Qx(803,"Tipo"),og(),Il(804,"th",13),Qx(805,"Descri\xE7\xE3o"),og()(),Il(806,"tr",14)(807,"td",15)(808,"div",23)(809,"span",24),Qx(810," disabled"),zl(811,"br"),og()()(),Il(812,"td",19)(813,"code",26),Qx(814,"boolean"),og()(),Il(815,"td",22)(816,"em")(817,"strong"),Qx(818,"(opcional)"),og()(),Il(819,"p"),Qx(820,"Desabilita o checkbox, por padr\xE3o as op\xE7\xF5es sempre estar\xE3o habilitadas para o usu\xE1rio."),og(),Il(821,"p"),Qx(822,`Mesmo desabilitado o desenvolvedor pode alterar o valor do item via c\xF3digo, mas n\xE3o ser\xE1 permitido ao
usu\xE1rio alterar a condi\xE7\xE3o do checkbox.`),og()()(),Il(823,"tr",14)(824,"td",15)(825,"div",23)(826,"span",24),Qx(827," label"),zl(828,"br"),og()()(),Il(829,"td",19)(830,"code",25),Qx(831,"string"),og()(),Il(832,"td",22)(833,"p"),Qx(834,"Texto exibido para o usu\xE1rio ao lado do checkbox."),og()()(),Il(835,"tr",14)(836,"td",15)(837,"div",23)(838,"span",24),Qx(839," value"),zl(840,"br"),og()()(),Il(841,"td",19)(842,"code",25),Qx(843,"string"),og()(),Il(844,"td",22)(845,"p"),Qx(846,"Valor retornado no model."),og(),Il(847,"p"),Qx(848,"\xC9 poss\xEDvel usar os valores "),Il(849,"code"),Qx(850,"true"),og(),Qx(851," e "),Il(852,"code"),Qx(853,"false"),og(),Qx(854,", caso a propriedade "),Il(855,"code"),Qx(856,"p-indeterminate"),og(),Qx(857," esteja setada como "),Il(858,"code"),Qx(859,"true"),og(),Qx(860,`
passa a aceitar `),Il(861,"code"),Qx(862,"null"),og(),Qx(863," tamb\xE9m, por padr\xE3o esse valor sempre ser\xE1 setado como "),Il(864,"code"),Qx(865,"false"),og(),Qx(866,"."),og()()()()());},dependencies:[Ka],encapsulation:2})}return a})();var xe=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(d,p){this.route=d,this.router=p;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let p=d.view;this.activeTab=p||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:"merge"}),this.activeTab=d;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(p){return new(p||a)(C(Xn),C(En))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Checkbox Group",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(p,n){p&1&&(Il(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return n.changeTab("doc")}),zl(3,"sample-po-checkbox-group-doc"),og(),Il(4,"po-tab",3),ft("p-click",function(){return n.changeTab("web")}),zl(5,"sample-po-checkbox-group-basic-view")(6,"sample-po-checkbox-group-labs-view")(7,"sample-po-checkbox-group-password-policy-view"),og()()()),p&2&&(nw("p-actions",n.actions),Lp(2),nw("p-active",n.activeTab==="doc"),Lp(2),nw("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"));},dependencies:[cNe,qme,Yme,me,ce,be,he],encapsulation:2})}return a})();var qe=[{path:"",component:xe}],Ee=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue$1({imports:[uL.forChild(qe),uL]})}return a})();var pt=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue$1({imports:[sr,Ee]})}return a})();export{pt as DocPoCheckboxGroupModule};