import {f as fe$1,u as ue$1,s as sr,h as hL,w,c3 as Xn,E as En,U as Un,a as f,aW as Yp,c4 as b3,H as Wl,Q as nw,bM as hN,a7 as dN,an as CO,aH as Ka,b8 as Bme,b9 as qme,F as Sl,z as eN,J as og,a1 as ft,L as Lp,ar as $x,au as dg,bs as fN,aX as Z9,aF as G9,aY as q9,aG as _k,aZ as mk,b0 as Qt,b1 as mv,b4 as L3,c8 as wde,bH as M3,c9 as Ghe,bc as FO,aB as wx,aM as ww,aN as e0,a4 as yN,bd as Nx,aO as Ew,aP as n0,a5 as DN,cp as Rhe,a3 as rNe,aD as Ky,aT as nN,aE as Xy}from'./main-WP3NAV7C.js';var Se=()=>({value:"1",label:"Option 1"}),fe=()=>({value:"2",label:"Option 2"}),Ce=(a,ge)=>[a,ge],de=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-checkbox-group-basic"]],standalone:false,decls:1,vars:6,consts:[["name","checkboxGroup","p-label","PO Checkbox Group",3,"p-options"]],template:function(p,n){p&1&&Wl(0,"po-checkbox-group",0),p&2&&nw("p-options",hN(3,Ce,dN(1,Se),dN(2,fe)));},dependencies:[b3],encapsulation:2,changeDetection:1})}return a})();var ke=a=>({"docs-sample-code-tabs":a}),me=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-checkbox-group-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Checkbox Group Basic"),og(),Sl(4,"a",2),ft("click",function(){return n.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-checkbox-group-basic/sample-po-checkbox-group-basic.component.html"),og(),Sl(13,"pre",7),eN(14,`<po-checkbox-group
  name="checkboxGroup"
  p-label="PO Checkbox Group"
  [p-options]="[
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' }
  ]"
>
</po-checkbox-group>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-checkbox-group-basic/sample-po-checkbox-group-basic.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-checkbox-group-basic',
  templateUrl: './sample-po-checkbox-group-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoCheckboxGroupBasicComponent {}
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-checkbox-group-basic"),og(),Wl(23,"hr")),p&2&&(Lp(5),$x("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,ke,n.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,de],encapsulation:2})}return a})();var se=(()=>{class a{helperText;checkboxGroup;columns;disabled;event;help;indeterminate;label;option;options;properties;fieldErrorMessage;size;columnOptions=[{label:"1 column",value:1},{label:"2 columns",value:2},{label:"3 columns",value:3},{label:"4 columns",value:4}];propertiesOptions=[{value:"disabled",label:"Disabled"},{value:"indeterminate",label:"Indeterminate"},{value:"optional",label:"Optional"},{value:"required",label:"Required"},{value:"showRequired",label:"Show Required"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"},{value:"compactLabel",label:"Compact Label"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore();}addOption(){this.options=[...this.options,this.option],this.clearOption();}changeEvent(d){this.event=d;}restore(){this.helperText="",this.checkboxGroup=void 0,this.columns=void 0,this.disabled=false,this.event=void 0,this.help="",this.indeterminate=void 0,this.label=void 0,this.options=[],this.properties=[],this.fieldErrorMessage="",this.size="medium",this.clearOption();}clearOption(){this.option={label:void 0,value:void 0};}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-checkbox-group-labs"]],standalone:false,decls:26,vars:34,consts:[["fOption","ngForm"],["f","ngForm"],["name","checkboxGroup",3,"ngModelChange","p-change","p-keydown","ngModel","p-helper","p-columns","p-disabled","p-help","p-indeterminate","p-label","p-optional","p-options","p-required","p-field-error-message","p-error-limit","p-show-required","p-label-text-wrap","p-compact-label","p-size"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","optionValue","p-clean","","p-label","Option Value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","optionLabel","p-clean","","p-label","Option Label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","disabled","p-label","Option Disabled",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add option",1,"po-lg-2","po-md-4",3,"p-click","p-disabled"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","fieldErrorMessage","p-clean","","p-label","Field Error Message",1,"po-md-6",3,"ngModelChange","ngModel"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","columns","p-columns","4","p-label","Columns",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(p,n){if(p&1){let s=wx();Sl(0,"po-checkbox-group",2),ww("ngModelChange",function(l){return Ky(s),nN(n.checkboxGroup,l)||(n.checkboxGroup=l),Xy(l)}),ft("p-change",function(){return n.changeEvent("p-change")})("p-keydown",function(){return n.changeEvent("p-keydown")}),og(),e0(),Wl(1,"po-divider"),Sl(2,"div",3),Wl(3,"po-info",4),yN(4,"json"),Wl(5,"po-info",5),og(),Wl(6,"po-divider"),Sl(7,"form",null,0)(9,"po-input",6),ww("ngModelChange",function(l){return Ky(s),nN(n.option.value,l)||(n.option.value=l),Xy(l)}),og(),e0(),Sl(10,"po-input",7),ww("ngModelChange",function(l){return Ky(s),nN(n.option.label,l)||(n.option.label=l),Xy(l)}),og(),e0(),Sl(11,"po-switch",8),ww("ngModelChange",function(l){return Ky(s),nN(n.option.disabled,l)||(n.option.disabled=l),Xy(l)}),og(),e0(),Sl(12,"div",3)(13,"po-button",9),ft("p-click",function(){return n.addOption()}),og()()(),Wl(14,"po-divider"),Sl(15,"form",null,1)(17,"po-input",10),ww("ngModelChange",function(l){return Ky(s),nN(n.label,l)||(n.label=l),Xy(l)}),og(),e0(),Sl(18,"po-input",11),ww("ngModelChange",function(l){return Ky(s),nN(n.help,l)||(n.help=l),Xy(l)}),og(),e0(),Sl(19,"po-input",12),ww("ngModelChange",function(l){return Ky(s),nN(n.helperText,l)||(n.helperText=l),Xy(l)}),og(),e0(),Sl(20,"po-input",13),ww("ngModelChange",function(l){return Ky(s),nN(n.fieldErrorMessage,l)||(n.fieldErrorMessage=l),Xy(l)}),og(),e0(),Sl(21,"po-checkbox-group",14),ww("ngModelChange",function(l){return Ky(s),nN(n.properties,l)||(n.properties=l),Xy(l)}),og(),e0(),Sl(22,"po-radio-group",15),ww("ngModelChange",function(l){return Ky(s),nN(n.columns,l)||(n.columns=l),Xy(l)}),og(),e0(),Sl(23,"po-radio-group",16),ww("ngModelChange",function(l){return Ky(s),nN(n.size,l)||(n.size=l),Xy(l)}),og(),e0(),Sl(24,"div",3)(25,"po-button",17),ft("p-click",function(){return n.restore()}),og()()();}if(p&2){let s=Nx(8);Ew("ngModel",n.checkboxGroup),nw("p-helper",n.helperText)("p-columns",n.columns)("p-disabled",n.properties.includes("disabled"))("p-help",n.help)("p-indeterminate",n.properties.includes("indeterminate"))("p-label",n.label)("p-optional",n.properties.includes("optional"))("p-options",n.options)("p-required",n.properties.includes("required"))("p-field-error-message",n.fieldErrorMessage)("p-error-limit",n.properties==null?null:n.properties.includes("errorLimit"))("p-show-required",n.properties.includes("showRequired"))("p-label-text-wrap",n.properties.includes("labelTextWrap"))("p-compact-label",n.properties==null?null:n.properties.includes("compactLabel"))("p-size",n.size),n0(),Lp(3),nw("p-value",DN(4,32,n.checkboxGroup)),Lp(2),nw("p-value",n.event),Lp(4),Ew("ngModel",n.option.value),n0(),Lp(),Ew("ngModel",n.option.label),n0(),Lp(),Ew("ngModel",n.option.disabled),n0(),Lp(2),nw("p-disabled",s.invalid),Lp(4),Ew("ngModel",n.label),n0(),Lp(),Ew("ngModel",n.help),n0(),Lp(),Ew("ngModel",n.helperText),n0(),Lp(),Ew("ngModel",n.fieldErrorMessage),n0(),Lp(),Ew("ngModel",n.properties),nw("p-options",n.propertiesOptions),n0(),Lp(),Ew("ngModel",n.columns),nw("p-options",n.columnOptions),n0(),Lp(),Ew("ngModel",n.size),nw("p-options",n.sizeOptions),n0();}},dependencies:[Z9,G9,q9,_k,mk,Qt,mv,b3,L3,wde,M3,Ghe,FO],encapsulation:2,changeDetection:1})}return a})();var _e=a=>({"docs-sample-code-tabs":a}),ce=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-checkbox-group-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Checkbox Group Labs"),og(),Sl(4,"a",2),ft("click",function(){return n.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-checkbox-group-labs/sample-po-checkbox-group-labs.component.html"),og(),Sl(13,"pre",7),eN(14,`<po-checkbox-group
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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-checkbox-group-labs/sample-po-checkbox-group-labs.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-checkbox-group-labs"),og(),Wl(23,"hr")),p&2&&(Lp(5),$x("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,_e,n.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,se],encapsulation:2})}return a})();var ue=(()=>{class a{poNotification=f(Yp);attempts;expiration;maxAttempts;periodExpiration;auditOptions=[{value:"1",label:"Functional menu"},{value:"2",label:"Online panel"},{value:"3",label:"Internet browser"},{value:"4",label:"Browser details"},{value:"5",label:"Transparent panel"},{value:"6",label:"Browser refresh"}];systemOptions=[{value:"1",label:"Audit updates in the data dictionary"},{value:"2",label:"Audit updates in the user registry"},{value:"3",label:"Audit authentication / access"},{value:"4",label:"Audit rejection of access to resources"}];confirm(){this.poNotification.success("Settings saved successfully!");}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-checkbox-group-password-policy"]],standalone:false,decls:19,vars:7,consts:[["g","ngForm"],[1,"po-font-subtitle"],[1,"po-row"],["name","system","p-label","System features",1,"po-lg-12",3,"p-options"],["name","audit","p-label","Audit rules",1,"po-lg-12",3,"p-options"],["name","expiration","p-label","Password expiration","p-label-off","Desactive","p-label-on","Actived",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","periodExpiration","p-label","Period (in days)","p-maxlength","3",1,"po-lg-6",3,"p-disabled"],["name","attempts","p-label","Restrict access attempts","p-label-off","Desactive","p-label-on","Actived",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","maxAttempts","p-label","Maximum number of attempts","p-maxlength","3",1,"po-lg-6",3,"ngModelChange","ngModel","p-disabled"],["p-label","Apply password policy",1,"po-offset-lg-9","po-lg-3","po-offset-xl-9",3,"p-click"]],template:function(p,n){if(p&1){let s=wx();Sl(0,"div",1),eN(1,"Password Rules"),og(),Wl(2,"po-divider"),Sl(3,"form",null,0)(5,"div",2),Wl(6,"po-checkbox-group",3),og(),Wl(7,"po-divider"),Sl(8,"div",2),Wl(9,"po-checkbox-group",4),og(),Wl(10,"po-divider"),Sl(11,"div",2)(12,"po-switch",5),ww("ngModelChange",function(l){return Ky(s),nN(n.expiration,l)||(n.expiration=l),Xy(l)}),og(),e0(),Wl(13,"po-number",6),og(),Sl(14,"div",2)(15,"po-switch",7),ww("ngModelChange",function(l){return Ky(s),nN(n.attempts,l)||(n.attempts=l),Xy(l)}),og(),e0(),Sl(16,"po-number",8),ww("ngModelChange",function(l){return Ky(s),nN(n.maxAttempts,l)||(n.maxAttempts=l),Xy(l)}),og(),e0(),og(),Sl(17,"div",2)(18,"po-button",9),ft("p-click",function(){return n.confirm()}),og()()();}p&2&&(Lp(6),nw("p-options",n.systemOptions),Lp(3),nw("p-options",n.auditOptions),Lp(3),Ew("ngModel",n.expiration),n0(),Lp(),nw("p-disabled",!n.expiration),Lp(2),Ew("ngModel",n.attempts),n0(),Lp(),Ew("ngModel",n.maxAttempts),nw("p-disabled",!n.attempts),n0());},dependencies:[Z9,G9,q9,_k,mk,Qt,mv,b3,Rhe,M3],encapsulation:2,changeDetection:1})}return a})();var Te=a=>({"docs-sample-code-tabs":a}),be=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-checkbox-group-password-policy-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Checkbox Group \u2013 Security policy"),og(),Sl(4,"a",2),ft("click",function(){return n.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-checkbox-group-password-policy/sample-po-checkbox-group-password-policy.component.html"),og(),Sl(13,"pre",7),eN(14,`<div class="po-font-subtitle">Password Rules</div>

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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-checkbox-group-password-policy/sample-po-checkbox-group-password-policy.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-checkbox-group-password-policy"),og(),Wl(23,"hr")),p&2&&(Lp(5),$x("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,Te,n.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,ue],encapsulation:2})}return a})();var he=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-checkbox-group-doc"]],standalone:false,decls:867,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-radio-group"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoCheckboxGroupOption[]"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-helper"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"]],template:function(p,n){p&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),eN(3,"import { PoFieldModule } from '@po-ui/ng-components';"),og()(),Sl(4,"div",2)(5,"p"),eN(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),og(),Sl(7,"blockquote")(8,"p"),eN(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),Sl(10,"code"),eN(11,"FormsModule"),og(),eN(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Sl(13,"code"),eN(14,"ReactiveFormsModule"),og(),eN(15,", ambos nativos do Angular."),og()()(),Sl(16,"h3",3),eN(17,"Componente"),og(),Sl(18,"h4",4)(19,"code",5),eN(20,"PoCheckboxGroupComponent"),og()(),Sl(21,"div",2)(22,"p"),eN(23,"O componente "),Sl(24,"code"),eN(25,"po-checkbox-group"),og(),eN(26,` exibe uma lista de m\xFAltipla escolha onde o usu\xE1rio pode marcar e desmarcar,
utilizando a tecla de espa\xE7o ou o clique do mouse, v\xE1rias op\xE7\xF5es.`),og(),Sl(27,"blockquote")(28,"p"),eN(29,"Para sele\xE7\xE3o \xFAnica, utilize o "),Sl(30,"a",6)(31,"strong"),eN(32,"PO Radio Group"),og()(),eN(33,"."),og()(),Sl(34,"p"),eN(35,"Por padr\xE3o, o po-checkbox-group retorna um array com os valores dos itens selecionados para o model."),og(),Sl(36,"pre")(37,"code"),eN(38,`favorites = ['PO', 'Angular'];
`),og()(),Sl(39,"p"),eN(40,`Na maioria das situa\xE7\xF5es, o array com os objetos setados j\xE1 atende as necessidades mas, caso o desenvolvedor
tenha necessidade de usar um valor indeterminado (`),Sl(41,"code"),eN(42,"null"),og(),eN(43,"), ou seja, nem marcado ("),Sl(44,"code"),eN(45,"true"),og(),eN(46,") e nem desmarcado ("),Sl(47,"code"),eN(48,"false"),og(),eN(49,`),
deve setar a propriedade `),Sl(50,"code"),eN(51,"p-indeterminate"),og(),eN(52," como "),Sl(53,"code"),eN(54,"true"),og(),eN(55,"."),og(),Sl(56,"p"),eN(57,"Nesse caso, o po-checkbox-group vai retornar um objeto com todas as op\xE7\xF5es dispon\xEDveis e seus valores."),og(),Sl(58,"pre")(59,"code"),eN(60,`favorites = {
 PO: true,
 Angular: true,
 VueJS: false,
 React: null // indeterminado
};
`),og()()(),Sl(61,"div",7)(62,"h4",8),eN(63,"Seletor"),og(),Sl(64,"pre",9),eN(65,`<po-checkbox-group
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
`),og()(),Sl(66,"h4",10),eN(67,"Propriedades"),og(),Sl(68,"table",11)(69,"tr",12)(70,"th",13),eN(71,"Nome"),og(),Sl(72,"th",13),eN(73,"Tipo"),og(),Sl(74,"th",13),eN(75,"Padr\xE3o"),og(),Sl(76,"th",13),eN(77,"Descri\xE7\xE3o"),og()(),Sl(78,"tr",14)(79,"td",15)(80,"div",16)(81,"span",17),eN(82," (p-additional-help)"),Wl(83,"br"),og()(),Sl(84,"div",18),eN(85,"Deprecated"),og()(),Sl(86,"td",19)(87,"code",20),eN(88,"EventEmitter"),og()(),Sl(89,"td",21),eN(90,"-"),og(),Sl(91,"td",22)(92,"em")(93,"strong"),eN(94,"(opcional)"),og()(),Sl(95,"p"),eN(96,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),og(),Sl(97,"blockquote")(98,"p"),eN(99,"Essa propriedade est\xE1 "),Sl(100,"strong"),eN(101,"depreciada"),og(),eN(102," e ser\xE1 removida na vers\xE3o "),Sl(103,"code"),eN(104,"23.x.x"),og(),eN(105,". Recomendamos utilizar a propriedade "),Sl(106,"code"),eN(107,"p-helper"),og(),eN(108," que oferece mais recursos e flexibilidade."),og()()()(),Sl(109,"tr",14)(110,"td",15)(111,"div",23)(112,"span",24),eN(113," p-additional-help-tooltip"),Wl(114,"br"),og()(),Sl(115,"div",18),eN(116,"Deprecated"),og()(),Sl(117,"td",19)(118,"code",25),eN(119,"string"),og()(),Sl(120,"td",21),eN(121,"-"),og(),Sl(122,"td",22)(123,"em")(124,"strong"),eN(125,"(opcional)"),og()(),Sl(126,"p"),eN(127,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),Sl(128,"code"),eN(129,"po-helper"),og(),eN(130,`.
`),Sl(131,"strong"),eN(132,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),og()(),Sl(133,"blockquote")(134,"p"),eN(135,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),og()(),Sl(136,"blockquote")(137,"p"),eN(138,"Essa propriedade est\xE1 "),Sl(139,"strong"),eN(140,"depreciada"),og(),eN(141," e ser\xE1 removida na vers\xE3o "),Sl(142,"code"),eN(143,"23.x.x"),og(),eN(144,". Recomendamos utilizar a propriedade "),Sl(145,"code"),eN(146,"p-helper"),og(),eN(147," que oferece mais recursos e flexibilidade."),og()()()(),Sl(148,"tr",14)(149,"td",15)(150,"div",23)(151,"span",24),eN(152," p-append-in-body"),Wl(153,"br"),og()()(),Sl(154,"td",19)(155,"code",26),eN(156,"boolean"),og()(),Sl(157,"td",21)(158,"p")(159,"code"),eN(160,"false"),og()()(),Sl(161,"td",22)(162,"em")(163,"strong"),eN(164,"(opcional)"),og()(),Sl(165,"p"),eN(166,"Define que o popover ("),Sl(167,"code"),eN(168,"p-helper"),og(),eN(169," e/ou "),Sl(170,"code"),eN(171,"p-error-limit"),og(),eN(172,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),og(),Sl(173,"blockquote")(174,"p"),eN(175,"Quando utilizado com "),Sl(176,"code"),eN(177,"p-helper"),og(),eN(178,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),og()()()(),Sl(179,"tr",14)(180,"td",15)(181,"div",23)(182,"span",24),eN(183," p-auto-focus"),Wl(184,"br"),og()()(),Sl(185,"td",19)(186,"code",26),eN(187,"boolean"),og()(),Sl(188,"td",21)(189,"p")(190,"code"),eN(191,"false"),og()()(),Sl(192,"td",22)(193,"em")(194,"strong"),eN(195,"(opcional)"),og()(),Sl(196,"p"),eN(197,"Aplica foco no elemento ao ser iniciado."),og(),Sl(198,"blockquote")(199,"p"),eN(200,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),og()()()(),Sl(201,"tr",14)(202,"td",15)(203,"div",16)(204,"span",17),eN(205," (p-change)"),Wl(206,"br"),og()()(),Sl(207,"td",19)(208,"code",20),eN(209,"EventEmitter"),og()(),Sl(210,"td",21),eN(211,"-"),og(),Sl(212,"td",22)(213,"em")(214,"strong"),eN(215,"(opcional)"),og()(),Sl(216,"p"),eN(217,"Evento disparado ao alterar valor do campo"),og()()(),Sl(218,"tr",14)(219,"td",15)(220,"div",23)(221,"span",24),eN(222," p-columns"),Wl(223,"br"),og()()(),Sl(224,"td",19)(225,"code",27),eN(226,"number"),og()(),Sl(227,"td",21)(228,"p")(229,"code"),eN(230,"2"),og()()(),Sl(231,"td",22)(232,"em")(233,"strong"),eN(234,"(opcional)"),og()(),Sl(235,"p"),eN(236,"Possibilita definir a quantidade de colunas para exibi\xE7\xE3o dos itens do "),Sl(237,"em"),eN(238,"checkbox"),og(),eN(239,"."),og(),Sl(240,"ul")(241,"li"),eN(242,"\xC9 poss\xEDvel exibir as op\xE7\xF5es entre "),Sl(243,"code"),eN(244,"1"),og(),eN(245," e "),Sl(246,"code"),eN(247,"4"),og(),eN(248," colunas."),og(),Sl(249,"li"),eN(250,"Para resolu\xE7\xE3o "),Sl(251,"code"),eN(252,"sm"),og(),eN(253," a colunagem invariavelmente passa para "),Sl(254,"code"),eN(255,"1"),og(),eN(256," coluna."),og(),Sl(257,"li"),eN(258,"Quando se trata de resolu\xE7\xE3o "),Sl(259,"code"),eN(260,"md"),og(),eN(261," e o valor estabelecido para colunas for superior a "),Sl(262,"code"),eN(263,"2"),og(),eN(264,`,
o `),Sl(265,"em"),eN(266,"grid system"),og(),eN(267," ser\xE1 composto por "),Sl(268,"code"),eN(269,"2"),og(),eN(270," colunas."),og(),Sl(271,"li"),eN(272,"Para evitar a quebra de linha, prefira a utiliza\xE7\xE3o de "),Sl(273,"code"),eN(274,"1"),og(),eN(275," coluna para op\xE7\xF5es com textos grandes."),og()()()(),Sl(276,"tr",14)(277,"td",15)(278,"div",23)(279,"span",24),eN(280," p-compact-label"),Wl(281,"br"),og()()(),Sl(282,"td",19)(283,"code",26),eN(284,"boolean"),og()(),Sl(285,"td",21)(286,"p")(287,"code"),eN(288,"false"),og()()(),Sl(289,"td",22)(290,"em")(291,"strong"),eN(292,"(opcional)"),og()(),Sl(293,"p"),eN(294,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),og(),Sl(295,"p"),eN(296,"Quando habilitado ("),Sl(297,"code"),eN(298,"true"),og(),eN(299,"), o modo compacto afeta o conjunto composto por:"),og(),Sl(300,"ul")(301,"li")(302,"code"),eN(303,"po-label"),og()(),Sl(304,"li")(305,"code"),eN(306,"p-requirement (showRequired)"),og()(),Sl(307,"li")(308,"code"),eN(309,"po-helper"),og()()(),Sl(310,"p"),eN(311,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),og(),Sl(312,"p"),eN(313,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),og(),Sl(314,"ul")(315,"li")(316,"code"),eN(317,"--field-container-title-justify"),og()(),Sl(318,"li")(319,"code"),eN(320,"--field-container-title-flex"),og()()(),Sl(321,"p"),eN(322,"Exemplo:"),og(),Sl(323,"pre")(324,"code"),eN(325,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),og()(),Sl(326,"p"),eN(327,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),og()()(),Sl(328,"tr",14)(329,"td",15)(330,"div",23)(331,"span",24),eN(332," p-disabled"),Wl(333,"br"),og()()(),Sl(334,"td",19)(335,"code",26),eN(336,"boolean"),og()(),Sl(337,"td",21)(338,"p")(339,"code"),eN(340,"false"),og()()(),Sl(341,"td",22)(342,"em")(343,"strong"),eN(344,"(opcional)"),og()(),Sl(345,"p"),eN(346,"Desabilita todos os itens do checkbox."),og()()(),Sl(347,"tr",14)(348,"td",15)(349,"div",23)(350,"span",24),eN(351," p-error-limit"),Wl(352,"br"),og()()(),Sl(353,"td",19)(354,"code",26),eN(355,"boolean"),og()(),Sl(356,"td",21)(357,"p")(358,"code"),eN(359,"false"),og()()(),Sl(360,"td",22)(361,"em")(362,"strong"),eN(363,"(opcional)"),og()(),Sl(364,"p"),eN(365,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),og(),Sl(366,"blockquote")(367,"p"),eN(368,"Caso essa propriedade seja definida como "),Sl(369,"code"),eN(370,"true"),og(),eN(371,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),og()()()(),Sl(372,"tr",14)(373,"td",15)(374,"div",23)(375,"span",24),eN(376," p-field-error-message"),Wl(377,"br"),og()()(),Sl(378,"td",19)(379,"code",25),eN(380,"string"),og()(),Sl(381,"td",21),eN(382,"-"),og(),Sl(383,"td",22)(384,"em")(385,"strong"),eN(386,"(opcional)"),og()(),Sl(387,"p"),eN(388,"Exibe a mensagem setada se o campo estiver vazio e for requerido."),og(),Sl(389,"blockquote")(390,"p"),eN(391,"Necess\xE1rio que a propriedade "),Sl(392,"code"),eN(393,"p-required"),og(),eN(394," esteja habilitada."),og()()()(),Sl(395,"tr",14)(396,"td",15)(397,"div",23)(398,"span",24),eN(399," p-help"),Wl(400,"br"),og()()(),Sl(401,"td",19)(402,"code",25),eN(403,"string"),og()(),Sl(404,"td",21),eN(405,"-"),og(),Sl(406,"td",22)(407,"em")(408,"strong"),eN(409,"(opcional)"),og()(),Sl(410,"p"),eN(411,"Texto de apoio do campo"),og()()(),Sl(412,"tr",14)(413,"td",15)(414,"div",23)(415,"span",24),eN(416," p-indeterminate"),Wl(417,"br"),og()()(),Sl(418,"td",19)(419,"code",26),eN(420,"boolean"),og()(),Sl(421,"td",21)(422,"p")(423,"code"),eN(424,"false"),og()()(),Sl(425,"td",22)(426,"em")(427,"strong"),eN(428,"(opcional)"),og()(),Sl(429,"p"),eN(430,"Caso exista a necessidade de usar o valor indeterminado ("),Sl(431,"code"),eN(432,"null"),og(),eN(433,`) dentro da lista de op\xE7\xF5es, \xE9 necess\xE1rio setar
a propriedade `),Sl(434,"code"),eN(435,"p-indeterminate"),og(),eN(436," como "),Sl(437,"code"),eN(438,"true"),og(),eN(439,", por padr\xE3o essa propriedade vem desabilitada ("),Sl(440,"code"),eN(441,"false"),og(),eN(442,")."),og(),Sl(443,"p"),eN(444,"Quando essa propriedade \xE9 setada como "),Sl(445,"code"),eN(446,"true"),og(),eN(447,", o "),Sl(448,"em"),eN(449,"po-checkbox-group"),og(),eN(450,` passa a devolver um objeto completo para o
`),Sl(451,"code"),eN(452,"ngModel"),og(),eN(453,", diferente do array que cont\xE9m apenas os valores selecionados."),og()()(),Sl(454,"tr",14)(455,"td",15)(456,"div",16)(457,"span",17),eN(458," (p-keydown)"),Wl(459,"br"),og()()(),Sl(460,"td",19)(461,"code",20),eN(462,"EventEmitter"),og()(),Sl(463,"td",21),eN(464,"-"),og(),Sl(465,"td",22)(466,"em")(467,"strong"),eN(468,"(opcional)"),og()(),Sl(469,"p"),eN(470,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Sl(471,"code"),eN(472,"KeyboardEvent"),og(),eN(473," com informa\xE7\xF5es sobre a tecla."),og()()(),Sl(474,"tr",14)(475,"td",15)(476,"div",23)(477,"span",24),eN(478," p-label"),Wl(479,"br"),og()()(),Sl(480,"td",19)(481,"code",25),eN(482,"string"),og()(),Sl(483,"td",21),eN(484,"-"),og(),Sl(485,"td",22)(486,"em")(487,"strong"),eN(488,"(opcional)"),og()(),Sl(489,"p"),eN(490,"Label do campo"),og()()(),Sl(491,"tr",14)(492,"td",15)(493,"div",23)(494,"span",24),eN(495," p-label-text-wrap"),Wl(496,"br"),og()()(),Sl(497,"td",19)(498,"code",26),eN(499,"boolean"),og()(),Sl(500,"td",21)(501,"p")(502,"code"),eN(503,"false"),og()()(),Sl(504,"td",22)(505,"em")(506,"strong"),eN(507,"(opcional)"),og()(),Sl(508,"p"),eN(509,"Habilita a quebra autom\xE1tica do texto da propriedade "),Sl(510,"code"),eN(511,"p-label"),og(),eN(512,". Quando "),Sl(513,"code"),eN(514,"p-label-text-wrap"),og(),eN(515,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),og()()(),Sl(516,"tr",14)(517,"td",15)(518,"div",23)(519,"span",24),eN(520," name"),Wl(521,"br"),og()()(),Sl(522,"td",19)(523,"code",25),eN(524,"string"),og()(),Sl(525,"td",21),eN(526,"-"),og(),Sl(527,"td",22)(528,"p"),eN(529,"Nome dos checkboxes"),og()()(),Sl(530,"tr",14)(531,"td",15)(532,"div",16)(533,"span",17),eN(534," (ngModelChange)"),Wl(535,"br"),og()()(),Sl(536,"td",19)(537,"code",20),eN(538,"EventEmitter"),og()(),Sl(539,"td",21),eN(540,"-"),og(),Sl(541,"td",22)(542,"em")(543,"strong"),eN(544,"(opcional)"),og()(),Sl(545,"p"),eN(546,"Fun\xE7\xE3o para atualizar o "),Sl(547,"code"),eN(548,"ngModel"),og(),eN(549," do componente, necess\xE1rio quando n\xE3o for utilizado dentro da tag form."),og(),Sl(550,"p"),eN(551,"Na vers\xE3o 12.2.0 do Angular a verifica\xE7\xE3o "),Sl(552,"code"),eN(553,"strictTemplates"),og(),eN(554,` vem true como default. Portanto, para utilizar
two-way binding no componente deve se utilizar da seguinte forma:`),og(),Sl(555,"pre")(556,"code"),eN(557,`<po-checkbox-group ... [ngModel]="checkboxgroupModel" (ngModelChange)="checkboxgroupModel = $event"> </po-checkbox-group>
`),og()()()(),Sl(558,"tr",14)(559,"td",15)(560,"div",23)(561,"span",24),eN(562," p-optional"),Wl(563,"br"),og()()(),Sl(564,"td",19)(565,"code",26),eN(566,"boolean"),og()(),Sl(567,"td",21)(568,"p")(569,"code"),eN(570,"false"),og()()(),Sl(571,"td",22)(572,"em")(573,"strong"),eN(574,"(opcional)"),og()(),Sl(575,"p"),eN(576,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),og(),Sl(577,"blockquote")(578,"p"),eN(579,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),og()(),Sl(580,"ul")(581,"li"),eN(582,"O campo conter "),Sl(583,"code"),eN(584,"p-required"),og(),eN(585,";"),og(),Sl(586,"li"),eN(587,"N\xE3o possuir "),Sl(588,"code"),eN(589,"p-help"),og(),eN(590," e/ou "),Sl(591,"code"),eN(592,"p-label"),og(),eN(593,"."),og()()()(),Sl(594,"tr",14)(595,"td",15)(596,"div",23)(597,"span",24),eN(598," p-options"),Wl(599,"br"),og()()(),Sl(600,"td",19)(601,"code",28),eN(602,"PoCheckboxGroupOption[]"),og()(),Sl(603,"td",21),eN(604,"-"),og(),Sl(605,"td",22)(606,"em")(607,"strong"),eN(608,"(opcional)"),og()(),Sl(609,"p"),eN(610,`Lista de op\xE7\xF5es que ser\xE3o exibidas
Nesta propriedade deve ser definido um array de objetos que implementam a interface PoCheckboxGroupOption`),og()()(),Sl(611,"tr",14)(612,"td",15)(613,"div",23)(614,"span",24),eN(615," p-helper"),Wl(616,"br"),og()()(),Sl(617,"td",19)(618,"code",29),eN(619,"PoHelperOptions "),og(),Sl(620,"code",25),eN(621," string"),og()(),Sl(622,"td",21),eN(623,"-"),og(),Sl(624,"td",22)(625,"em")(626,"strong"),eN(627,"(opcional)"),og()(),Sl(628,"p"),eN(629,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label quando a propriedade "),Sl(630,"code"),eN(631,"p-label"),og(),eN(632," for definida, ou, ao lado do componente na aus\xEAncia da propriedade "),Sl(633,"code"),eN(634,"p-label"),og(),eN(635,"."),og(),Sl(636,"blockquote")(637,"p"),eN(638,"Para mais informa\xE7\xF5es acesse: "),Sl(639,"a",30),eN(640,"https://po-ui.io/documentation/po-helper"),og(),eN(641,"."),og()(),Sl(642,"blockquote")(643,"p"),eN(644,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),Sl(645,"code"),eN(646,"p-additional-help-tooltip"),og(),eN(647," e "),Sl(648,"code"),eN(649,"p-additional-help"),og(),eN(650,") ser\xE1 ignorado."),og()()()(),Sl(651,"tr",14)(652,"td",15)(653,"div",23)(654,"span",24),eN(655," p-required"),Wl(656,"br"),og()()(),Sl(657,"td",19)(658,"code",26),eN(659,"boolean"),og()(),Sl(660,"td",21)(661,"p")(662,"code"),eN(663,"false"),og()()(),Sl(664,"td",22)(665,"em")(666,"strong"),eN(667,"(opcional)"),og()(),Sl(668,"p"),eN(669,"Define que o campo ser\xE1 obrigat\xF3rio."),og()()(),Sl(670,"tr",14)(671,"td",15)(672,"div",23)(673,"span",24),eN(674," p-show-required"),Wl(675,"br"),og()()(),Sl(676,"td",19)(677,"code",26),eN(678,"boolean"),og()(),Sl(679,"td",21),eN(680,"-"),og(),Sl(681,"td",22)(682,"p"),eN(683,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),og(),Sl(684,"blockquote")(685,"p"),eN(686,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),og()(),Sl(687,"ul")(688,"li"),eN(689,"N\xE3o possuir "),Sl(690,"code"),eN(691,"p-help"),og(),eN(692," e/ou "),Sl(693,"code"),eN(694,"p-label"),og(),eN(695,"."),og()()()(),Sl(696,"tr",14)(697,"td",15)(698,"div",23)(699,"span",24),eN(700," p-size"),Wl(701,"br"),og()()(),Sl(702,"td",19)(703,"code",25),eN(704,"string"),og()(),Sl(705,"td",21)(706,"p")(707,"code"),eN(708,"medium"),og()()(),Sl(709,"td",22)(710,"em")(711,"strong"),eN(712,"(opcional)"),og()(),Sl(713,"p"),eN(714,"Define o tamanho dos checkboxes do componente:"),og(),Sl(715,"ul")(716,"li")(717,"code"),eN(718,"small"),og(),eN(719,": 16x16 (dispon\xEDvel apenas para acessibilidade AA)."),og(),Sl(720,"li")(721,"code"),eN(722,"medium"),og(),eN(723,": 24x24."),og()(),Sl(724,"blockquote")(725,"p"),eN(726,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Sl(727,"code"),eN(728,"medium"),og(),eN(729,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Sl(730,"a",31),eN(731,"po-theme"),og(),eN(732,"."),og()()()()(),Sl(733,"h3",10),eN(734,"M\xE9todos"),og(),Sl(735,"table",32)(736,"tr",14)(737,"th",33)(738,"div",23)(739,"h4")(740,"span",24),eN(741," focus "),og()()()()(),Sl(742,"tr",22)(743,"td",22)(744,"p"),eN(745,"Fun\xE7\xE3o que atribui foco ao componente."),og(),Sl(746,"p"),eN(747,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),og(),Sl(748,"pre")(749,"code"),eN(750,`import { PoCheckboxGroupComponent } from '@po-ui/ng-components';

...

@ViewChild(PoCheckboxGroupComponent, { static: true }) checkbox: PoCheckboxGroupComponent;

focusCheckbox() {
  this.checkbox.focus();
}
`),og()()()()(),Wl(751,"br"),Sl(752,"table",32)(753,"tr",14)(754,"th",33)(755,"div",23)(756,"h4")(757,"span",24),eN(758," showAdditionalHelp "),og()()()()(),Sl(759,"tr",22)(760,"td",22)(761,"p"),eN(762,"M\xE9todo que exibe "),Sl(763,"code"),eN(764,"p-helper"),og(),eN(765," ou executa a a\xE7\xE3o definida em "),Sl(766,"code"),eN(767,"p-helper{eventOnClick}"),og(),eN(768," ou em "),Sl(769,"code"),eN(770,"p-additionalHelp"),og(),eN(771,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Sl(772,"code"),eN(773,"p-keydown"),og(),eN(774,"."),og(),Sl(775,"blockquote")(776,"p"),eN(777,"Exibe ou oculta o conte\xFAdo do componente "),Sl(778,"code"),eN(779,"po-helper"),og(),eN(780," quando o componente estiver com foco."),og()(),Sl(781,"pre")(782,"code"),eN(783,`//Exemplo com p-label e p-helper
<po-checkbox-group
 #checkboxGroup
 ...
 p-label="Label do checkbox"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, checkboxGroup)"
></po-checkbox-group>
`),og()(),Sl(784,"pre")(785,"code"),eN(786,`...
onKeyDown(event: KeyboardEvent, inp: PoCheckboxGroupComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),og()()()()(),Wl(787,"br"),Sl(788,"h3"),eN(789,"Interfaces"),og(),Sl(790,"h4",34)(791,"code",5),eN(792,"PoCheckboxGroupOption"),og()(),Sl(793,"div",2)(794,"p"),eN(795,"Interface para as a\xE7\xF5es do componente po-checkbox-group."),og()(),Sl(796,"h4",10),eN(797,"Propriedades"),og(),Sl(798,"table",11)(799,"tr",12)(800,"th",13),eN(801,"Nome"),og(),Sl(802,"th",13),eN(803,"Tipo"),og(),Sl(804,"th",13),eN(805,"Descri\xE7\xE3o"),og()(),Sl(806,"tr",14)(807,"td",15)(808,"div",23)(809,"span",24),eN(810," disabled"),Wl(811,"br"),og()()(),Sl(812,"td",19)(813,"code",26),eN(814,"boolean"),og()(),Sl(815,"td",22)(816,"em")(817,"strong"),eN(818,"(opcional)"),og()(),Sl(819,"p"),eN(820,"Desabilita o checkbox, por padr\xE3o as op\xE7\xF5es sempre estar\xE3o habilitadas para o usu\xE1rio."),og(),Sl(821,"p"),eN(822,`Mesmo desabilitado o desenvolvedor pode alterar o valor do item via c\xF3digo, mas n\xE3o ser\xE1 permitido ao
usu\xE1rio alterar a condi\xE7\xE3o do checkbox.`),og()()(),Sl(823,"tr",14)(824,"td",15)(825,"div",23)(826,"span",24),eN(827," label"),Wl(828,"br"),og()()(),Sl(829,"td",19)(830,"code",25),eN(831,"string"),og()(),Sl(832,"td",22)(833,"p"),eN(834,"Texto exibido para o usu\xE1rio ao lado do checkbox."),og()()(),Sl(835,"tr",14)(836,"td",15)(837,"div",23)(838,"span",24),eN(839," value"),Wl(840,"br"),og()()(),Sl(841,"td",19)(842,"code",25),eN(843,"string"),og()(),Sl(844,"td",22)(845,"p"),eN(846,"Valor retornado no model."),og(),Sl(847,"p"),eN(848,"\xC9 poss\xEDvel usar os valores "),Sl(849,"code"),eN(850,"true"),og(),eN(851," e "),Sl(852,"code"),eN(853,"false"),og(),eN(854,", caso a propriedade "),Sl(855,"code"),eN(856,"p-indeterminate"),og(),eN(857," esteja setada como "),Sl(858,"code"),eN(859,"true"),og(),eN(860,`
passa a aceitar `),Sl(861,"code"),eN(862,"null"),og(),eN(863," tamb\xE9m, por padr\xE3o esse valor sempre ser\xE1 setado como "),Sl(864,"code"),eN(865,"false"),og(),eN(866,"."),og()()()()());},dependencies:[Ka],encapsulation:2})}return a})();var xe=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(d,p){this.route=d,this.router=p;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let p=d.view;this.activeTab=p||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:"merge"}),this.activeTab=d;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(p){return new(p||a)(w(Xn),w(En))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Checkbox Group",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(p,n){p&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return n.changeTab("doc")}),Wl(3,"sample-po-checkbox-group-doc"),og(),Sl(4,"po-tab",3),ft("p-click",function(){return n.changeTab("web")}),Wl(5,"sample-po-checkbox-group-basic-view")(6,"sample-po-checkbox-group-labs-view")(7,"sample-po-checkbox-group-password-policy-view"),og()()()),p&2&&(nw("p-actions",n.actions),Lp(2),nw("p-active",n.activeTab==="doc"),Lp(2),nw("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"));},dependencies:[rNe,Bme,qme,me,ce,be,he],encapsulation:2})}return a})();var qe=[{path:"",component:xe}],Ee=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue$1({imports:[hL.forChild(qe),hL]})}return a})();var pt=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue$1({imports:[sr,Ee]})}return a})();export{pt as DocPoCheckboxGroupModule};