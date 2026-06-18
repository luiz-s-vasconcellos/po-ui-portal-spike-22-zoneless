import {f as fe$1,u as ue$1,s as sr,a as uL,C,c3 as Xn,E as En,U as Un,d5 as zp,b as f,aW as Yp,cM as Z9,bH as k3,J as zl,an as DO,aH as Ka,b8 as qme,b9 as Yme,H as Il,q as Qx,R as og,a1 as ft,A as Lp,ar as Ux,au as dg,T as nw,bs as uN,aX as G9,aF as $9,aY as z9,aG as mk,aZ as hk,b0 as Qt,b1 as mv,c4 as C3,b4 as O3,c8 as Dde,c9 as Yhe,aB as Dx,aM as ww,aN as QA,aO as Ew,aP as e0,b7 as E3,ba as yNe,B as yw,cQ as Ik,cR as Ck,a3 as cNe,aD as Xy,aT as eN,aE as Qy}from'./main-QSTLMRDK.js';var me=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-switch-basic"]],standalone:false,decls:1,vars:0,consts:[["name","switch","p-label","PO Switch"]],template:function(l,n){l&1&&zl(0,"po-switch",0);},dependencies:[k3],encapsulation:2,changeDetection:1})}return o})();var we=o=>({"docs-sample-code-tabs":o}),de=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-switch-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Switch Basic"),og(),Il(4,"a",2),ft("click",function(){return n.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-switch-basic/sample-po-switch-basic.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-switch name="switch" p-label="PO Switch"> </po-switch>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-switch-basic/sample-po-switch-basic.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-switch-basic',
  templateUrl: './sample-po-switch-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSwitchBasicComponent {}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-switch-basic"),og(),zl(23,"hr")),l&2&&(Lp(5),Ux("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,we,n.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,me],encapsulation:2})}return o})();var ce=(()=>{class o{helperText;event;fieldErrorMessage;help;label;labelOff;labelOn;labelPosition;properties;size;switch;labelPositionOptions=[{label:"Left",value:zp.Left},{label:"Right",value:zp.Right}];propertiesOptions=[{value:"disabled",label:"Disabled"},{value:"formatModel",label:"Format Model"},{value:"hideLabelStatus",label:"Hide label status"},{value:"errorLimit",label:"Limit Error Message"},{value:"invalidValue",label:"Invalid Value is On/True"},{value:"labelTextWrap",label:"Label Text Wrap"},{value:"loading",label:"Loading"},{value:"compactLabel",label:"Compact Label"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore();}changeEvent(m){this.event=m;}restore(){this.helperText="",this.event="",this.help=void 0,this.label=void 0,this.labelOn="",this.labelOff="",this.labelPosition=void 0,this.properties=[],this.size="medium",this.switch=void 0,this.fieldErrorMessage="";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-switch-labs"]],standalone:false,decls:19,vars:31,consts:[["f","ngForm"],["name","switch",3,"ngModelChange","p-change","p-keydown","ngModel","p-helper","p-disabled","p-error-limit","p-field-error-message","p-format-model","p-help","p-hide-label-status","p-invalid-value","p-label","p-label-off","p-label-on","p-label-position","p-label-text-wrap","p-loading","p-compact-label","p-size"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","labelOff","p-help","Text displayed when PO Switch is set to 'false'","p-label","Label Off",1,"po-md-6",3,"ngModelChange","ngModel"],["name","labelOn","p-help","Text displayed when PO Switch is set to 'true'","p-label","Label On",1,"po-md-6",3,"ngModelChange","ngModel"],["name","fieldErrorMessage","p-clean","","p-label","Field Error Message",1,"po-md-6",3,"ngModelChange","ngModel"],["name","labelPosition","p-label","Label Position",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","properties","p-columns","4","p-label","Properties",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(l,n){if(l&1){let s=Dx();Il(0,"po-switch",1),ww("ngModelChange",function(r){return Xy(s),eN(n.switch,r)||(n.switch=r),Qy(r)}),ft("p-change",function(){return n.changeEvent("p-change")})("p-keydown",function(){return n.changeEvent("p-keydown")}),og(),QA(),zl(1,"po-divider"),Il(2,"div",2),zl(3,"po-info",3)(4,"po-info",4),og(),zl(5,"po-divider"),Il(6,"form",null,0)(8,"po-input",5),ww("ngModelChange",function(r){return Xy(s),eN(n.label,r)||(n.label=r),Qy(r)}),og(),QA(),Il(9,"po-input",6),ww("ngModelChange",function(r){return Xy(s),eN(n.help,r)||(n.help=r),Qy(r)}),og(),QA(),Il(10,"po-input",7),ww("ngModelChange",function(r){return Xy(s),eN(n.helperText,r)||(n.helperText=r),Qy(r)}),og(),QA(),Il(11,"po-input",8),ww("ngModelChange",function(r){return Xy(s),eN(n.labelOff,r)||(n.labelOff=r),Qy(r)}),og(),QA(),Il(12,"po-input",9),ww("ngModelChange",function(r){return Xy(s),eN(n.labelOn,r)||(n.labelOn=r),Qy(r)}),og(),QA(),Il(13,"po-input",10),ww("ngModelChange",function(r){return Xy(s),eN(n.fieldErrorMessage,r)||(n.fieldErrorMessage=r),Qy(r)}),og(),QA(),Il(14,"po-radio-group",11),ww("ngModelChange",function(r){return Xy(s),eN(n.labelPosition,r)||(n.labelPosition=r),Qy(r)}),og(),QA(),Il(15,"po-checkbox-group",12),ww("ngModelChange",function(r){return Xy(s),eN(n.properties,r)||(n.properties=r),Qy(r)}),og(),QA(),Il(16,"po-radio-group",13),ww("ngModelChange",function(r){return Xy(s),eN(n.size,r)||(n.size=r),Qy(r)}),og(),QA(),Il(17,"div",2)(18,"po-button",14),ft("p-click",function(){return n.restore()}),og()()();}l&2&&(Ew("ngModel",n.switch),nw("p-helper",n.helperText)("p-disabled",n.properties.includes("disabled"))("p-error-limit",n.properties==null?null:n.properties.includes("errorLimit"))("p-field-error-message",n.fieldErrorMessage)("p-format-model",n.properties.includes("formatModel"))("p-help",n.help)("p-hide-label-status",n.properties.includes("hideLabelStatus"))("p-invalid-value",n.properties==null?null:n.properties.includes("invalidValue"))("p-label",n.label)("p-label-off",n.labelOff)("p-label-on",n.labelOn)("p-label-position",n.labelPosition)("p-label-text-wrap",n.properties.includes("labelTextWrap"))("p-loading",n.properties.includes("loading"))("p-compact-label",n.properties==null?null:n.properties.includes("compactLabel"))("p-size",n.size),e0(),Lp(3),nw("p-value",n.switch),Lp(),nw("p-value",n.event),Lp(4),Ew("ngModel",n.label),e0(),Lp(),Ew("ngModel",n.help),e0(),Lp(),Ew("ngModel",n.helperText),e0(),Lp(),Ew("ngModel",n.labelOff),e0(),Lp(),Ew("ngModel",n.labelOn),e0(),Lp(),Ew("ngModel",n.fieldErrorMessage),e0(),Lp(),Ew("ngModel",n.labelPosition),nw("p-options",n.labelPositionOptions),e0(),Lp(),Ew("ngModel",n.properties),nw("p-options",n.propertiesOptions),e0(),Lp(),Ew("ngModel",n.size),nw("p-options",n.sizeOptions),e0());},dependencies:[G9,$9,z9,mk,hk,Qt,mv,C3,O3,Dde,k3,Yhe],encapsulation:2,changeDetection:1})}return o})();var ye=o=>({"docs-sample-code-tabs":o}),ue=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-switch-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Switch Labs"),og(),Il(4,"a",2),ft("click",function(){return n.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-switch-labs/sample-po-switch-labs.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-switch
  name="switch"
  [(ngModel)]="switch"
  [p-helper]="helperText"
  [p-disabled]="properties.includes('disabled')"
  [p-error-limit]="$safeNavigationMigration(properties?.includes('errorLimit'))"
  [p-field-error-message]="fieldErrorMessage"
  [p-format-model]="properties.includes('formatModel')"
  [p-help]="help"
  [p-hide-label-status]="properties.includes('hideLabelStatus')"
  [p-invalid-value]="$safeNavigationMigration(properties?.includes('invalidValue'))"
  [p-label]="label"
  [p-label-off]="labelOff"
  [p-label-on]="labelOn"
  [p-label-position]="labelPosition"
  [p-label-text-wrap]="properties.includes('labelTextWrap')"
  [p-loading]="properties.includes('loading')"
  [p-compact-label]="$safeNavigationMigration(properties?.includes('compactLabel'))"
  [p-size]="size"
  (p-change)="changeEvent('p-change')"
  (p-keydown)="changeEvent('p-keydown')"
>
</po-switch>

<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="switch"> </po-info>

  <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
</div>

<po-divider />

<form #f="ngForm">
  <po-input class="po-md-6" name="label" [(ngModel)]="label" p-label="Label"> </po-input>

  <po-input class="po-md-6" name="help" [(ngModel)]="help" p-label="Help"> </po-input>

  <po-input class="po-md-6" name="helperText" [(ngModel)]="helperText" p-clean p-label="Additional Help"> </po-input>

  <po-input
    class="po-md-6"
    name="labelOff"
    [(ngModel)]="labelOff"
    p-help="Text displayed when PO Switch is set to 'false'"
    p-label="Label Off"
  >
  </po-input>

  <po-input
    class="po-md-6"
    name="labelOn"
    [(ngModel)]="labelOn"
    p-help="Text displayed when PO Switch is set to 'true'"
    p-label="Label On"
  >
  </po-input>
  <po-input
    class="po-md-6"
    name="fieldErrorMessage"
    [(ngModel)]="fieldErrorMessage"
    p-clean
    p-label="Field Error Message"
  >
  </po-input>

  <po-radio-group
    class="po-lg-6"
    name="labelPosition"
    [(ngModel)]="labelPosition"
    p-label="Label Position"
    [p-options]="labelPositionOptions"
  >
  </po-radio-group>

  <po-checkbox-group
    class="po-lg-12"
    name="properties"
    [(ngModel)]="properties"
    p-columns="4"
    p-label="Properties"
    [p-options]="propertiesOptions"
  >
  </po-checkbox-group>

  <po-radio-group
    class="po-lg-6"
    name="size"
    [(ngModel)]="size"
    p-label="Size"
    p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
    [p-options]="sizeOptions"
  >
  </po-radio-group>

  <div class="po-row">
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-switch-labs/sample-po-switch-labs.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { PoCheckboxGroupOption, PoRadioGroupOption, PoSwitchLabelPosition } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-switch-labs',
  templateUrl: './sample-po-switch-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSwitchLabsComponent implements OnInit {
  helperText: string;
  event: string;
  fieldErrorMessage: string;
  help: string;
  label: string;
  labelOff: string;
  labelOn: string;
  labelPosition: PoSwitchLabelPosition;
  properties: Array<string>;
  size: string;
  switch: boolean;

  public readonly labelPositionOptions: Array<PoRadioGroupOption> = [
    { label: 'Left', value: PoSwitchLabelPosition.Left },
    { label: 'Right', value: PoSwitchLabelPosition.Right }
  ];

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'disabled', label: 'Disabled' },
    { value: 'formatModel', label: 'Format Model' },
    { value: 'hideLabelStatus', label: 'Hide label status' },
    { value: 'errorLimit', label: 'Limit Error Message' },
    { value: 'invalidValue', label: 'Invalid Value is On/True' },
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

  changeEvent(event: string) {
    this.event = event;
  }

  restore() {
    this.helperText = '';
    this.event = '';
    this.help = undefined;
    this.label = undefined;
    this.labelOn = '';
    this.labelOff = '';
    this.labelPosition = undefined;
    this.properties = [];
    this.size = 'medium';
    this.switch = undefined;
    this.fieldErrorMessage = '';
  }
}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-switch-labs"),og(),zl(23,"hr")),l&2&&(Lp(5),Ux("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,ye,n.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,ce],encapsulation:2})}return o})();var he=(()=>{class o{poNotification=f(Yp);labelPosition=zp.Left;serviceFee=false;totalAmount=43;columns=[{property:"page",label:"Product"},{property:"value",label:"Value (R$)",type:"currency",format:"BRL"}];items=[{page:"Hamburger",value:"20"},{page:"Soft Drink",value:"6"},{page:"French Fries",value:"17"}];addServiceFee(){this.totalAmount=this.serviceFee?parseFloat((this.totalAmount*1.1).toFixed(2)):43;}confirm(){this.poNotification.success("Purchase done Successful!");}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-switch-order"]],standalone:false,decls:15,vars:6,consts:[["f","ngForm"],[1,"po-row"],["p-title","Order Summary",1,"po-md-6","po-lg-4"],[3,"p-columns","p-items","p-hide-table-search"],["name","serviceFee","p-label","Allow a 10% service fee?","p-label-off","No, thank you.","p-label-on","Yes, please.",3,"ngModelChange","p-change","ngModel","p-label-position"],[1,"po-pull-right"],[1,"po-font-text-large-bold"],[1,"po-font-text"],[1,"po-pull-right","po-font-title"],["p-icon","po-icon an an-check","p-label","Confirm","p-kind","primary",1,"po-md-12",3,"p-click"]],template:function(l,n){if(l&1){let s=Dx();Il(0,"div",1)(1,"po-widget",2)(2,"form",null,0),zl(4,"po-table",3),Il(5,"po-switch",4),ww("ngModelChange",function(r){return Xy(s),eN(n.serviceFee,r)||(n.serviceFee=r),Qy(r)}),ft("p-change",function(){return n.addServiceFee()}),og(),QA(),Il(6,"div",5)(7,"div",6),Qx(8,"Total value"),og(),Il(9,"span",7),Qx(10,"R$"),og(),Il(11,"span",8),Qx(12),og()(),Il(13,"div",1)(14,"po-button",9),ft("p-click",function(){return n.confirm()}),og()()()()();}l&2&&(Lp(4),nw("p-columns",n.columns)("p-items",n.items)("p-hide-table-search",false),Lp(),Ew("ngModel",n.serviceFee),nw("p-label-position",n.labelPosition),e0(),Lp(7),yw(n.totalAmount));},dependencies:[G9,$9,z9,mk,hk,Qt,k3,E3,yNe],encapsulation:2,changeDetection:1})}return o})();var Me=o=>({"docs-sample-code-tabs":o}),be=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-switch-order-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Switch - Order Summary"),og(),Il(4,"a",2),ft("click",function(){return n.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-switch-order/sample-po-switch-order.component.html"),og(),Il(13,"pre",7),Qx(14,`<div class="po-row">
  <po-widget class="po-md-6 po-lg-4" p-title="Order Summary">
    <form #f="ngForm">
      <po-table [p-columns]="columns" [p-items]="items" [p-hide-table-search]="false"> </po-table>

      <po-switch
        name="serviceFee"
        [(ngModel)]="serviceFee"
        p-label="Allow a 10% service fee?"
        p-label-off="No, thank you."
        p-label-on="Yes, please."
        [p-label-position]="labelPosition"
        (p-change)="addServiceFee()"
      >
      </po-switch>

      <div class="po-pull-right">
        <div class="po-font-text-large-bold">Total value</div>
        <span class="po-font-text">R$</span>
        <span class="po-pull-right po-font-title">{ { totalAmount }}</span>
      </div>

      <div class="po-row">
        <po-button
          class="po-md-12"
          p-icon="po-icon an an-check"
          p-label="Confirm"
          p-kind="primary"
          (p-click)="confirm()"
        >
        </po-button>
      </div>
    </form>
  </po-widget>
</div>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-switch-order/sample-po-switch-order.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

import { PoNotificationService, PoSwitchLabelPosition, PoTableColumn } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-switch-order',
  templateUrl: './sample-po-switch-order.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSwitchOrderComponent {
  private poNotification = inject(PoNotificationService);

  labelPosition: PoSwitchLabelPosition = PoSwitchLabelPosition.Left;
  serviceFee: boolean = false;
  totalAmount: number = 43;

  public readonly columns: Array<PoTableColumn> = [
    {
      property: 'page',
      label: 'Product'
    },
    {
      property: 'value',
      label: 'Value (R$)',
      type: 'currency',
      format: 'BRL'
    }
  ];

  public readonly items: Array<any> = [
    { page: 'Hamburger', value: '20' },
    { page: 'Soft Drink', value: '6' },
    { page: 'French Fries', value: '17' }
  ];

  addServiceFee() {
    const percentage: number = 1.1;
    this.totalAmount = this.serviceFee ? parseFloat((this.totalAmount * percentage).toFixed(2)) : 43;
  }

  confirm() {
    this.poNotification.success('Purchase done Successful!');
  }
}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-switch-order"),og(),zl(23,"hr")),l&2&&(Lp(5),Ux("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,Me,n.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,he],encapsulation:2})}return o})();var Se=(()=>{class o{poNotification=f(Yp);formBuilder=f(Z9);formOrderSummary;labelPosition=zp.Left;totalAmount=43;columns=[{property:"page",label:"Product"},{property:"value",label:"Value (R$)",type:"currency",format:"BRL"}];items=[{page:"Hamburger",value:"20"},{page:"Soft Drink",value:"6"},{page:"French Fries",value:"17"}];ngOnInit(){this.formOrderSummary=this.formBuilder.group({serviceFee:[false]});}addServiceFee(){let m=this.formOrderSummary.get("serviceFee").value,l=1.1;this.totalAmount=m?parseFloat((this.totalAmount*l).toFixed(2)):43;}confirm(){this.poNotification.success("Purchase done Successful!");}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-switch-order-reactive-form"]],standalone:false,decls:14,vars:6,consts:[[1,"po-row"],["p-title","Order Summary",1,"po-md-6","po-lg-4"],[3,"formGroup"],[3,"p-columns","p-items","p-hide-table-search"],["name","serviceFee","formControlName","serviceFee","p-label","Allow a 10% service fee?","p-label-off","No, thank you.","p-label-on","Yes, please.",3,"p-change","p-label-position"],[1,"po-pull-right"],[1,"po-font-text-large-bold"],[1,"po-font-text"],[1,"po-pull-right","po-font-title"],["p-icon","an an-check","p-label","Confirm","p-kind","primary",1,"po-md-12",3,"p-click"]],template:function(l,n){l&1&&(Il(0,"div",0)(1,"po-widget",1)(2,"form",2),zl(3,"po-table",3),Il(4,"po-switch",4),ft("p-change",function(){return n.addServiceFee()}),og(),QA(),Il(5,"div",5)(6,"div",6),Qx(7,"Total value"),og(),Il(8,"span",7),Qx(9,"R$"),og(),Il(10,"span",8),Qx(11),og()(),Il(12,"div",0)(13,"po-button",9),ft("p-click",function(){return n.confirm()}),og()()()()()),l&2&&(Lp(2),nw("formGroup",n.formOrderSummary),Lp(),nw("p-columns",n.columns)("p-items",n.items)("p-hide-table-search",false),Lp(),nw("p-label-position",n.labelPosition),e0(),Lp(7),yw(n.totalAmount));},dependencies:[G9,$9,z9,Ik,Ck,Qt,k3,E3,yNe],encapsulation:2,changeDetection:1})}return o})();var Fe=o=>({"docs-sample-code-tabs":o}),Ee=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-switch-order-reactive-form-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Switch - Order Summary Reactive Form"),og(),Il(4,"a",2),ft("click",function(){return n.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-switch-order-reactive-form/sample-po-switch-order-reactive-form.component.html"),og(),Il(13,"pre",7),Qx(14,`<div class="po-row">
  <po-widget class="po-md-6 po-lg-4" p-title="Order Summary">
    <form [formGroup]="formOrderSummary">
      <po-table [p-columns]="columns" [p-items]="items" [p-hide-table-search]="false"> </po-table>

      <po-switch
        name="serviceFee"
        formControlName="serviceFee"
        p-label="Allow a 10% service fee?"
        p-label-off="No, thank you."
        p-label-on="Yes, please."
        [p-label-position]="labelPosition"
        (p-change)="addServiceFee()"
      >
      </po-switch>

      <div class="po-pull-right">
        <div class="po-font-text-large-bold">Total value</div>
        <span class="po-font-text">R$</span>
        <span class="po-pull-right po-font-title">{ { totalAmount }}</span>
      </div>

      <div class="po-row">
        <po-button class="po-md-12" p-icon="an an-check" p-label="Confirm" p-kind="primary" (p-click)="confirm()">
        </po-button>
      </div>
    </form>
  </po-widget>
</div>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-switch-order-reactive-form/sample-po-switch-order-reactive-form.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';

import { PoNotificationService, PoSwitchLabelPosition, PoTableColumn } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-switch-order-reactive-form',
  templateUrl: './sample-po-switch-order-reactive-form.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSwitchOrderReactiveFormComponent implements OnInit {
  private poNotification = inject(PoNotificationService);
  private formBuilder = inject(UntypedFormBuilder);

  formOrderSummary: UntypedFormGroup;
  labelPosition: PoSwitchLabelPosition = PoSwitchLabelPosition.Left;
  totalAmount: number = 43;

  public readonly columns: Array<PoTableColumn> = [
    {
      property: 'page',
      label: 'Product'
    },
    {
      property: 'value',
      label: 'Value (R$)',
      type: 'currency',
      format: 'BRL'
    }
  ];

  public readonly items: Array<any> = [
    { page: 'Hamburger', value: '20' },
    { page: 'Soft Drink', value: '6' },
    { page: 'French Fries', value: '17' }
  ];

  ngOnInit() {
    this.formOrderSummary = this.formBuilder.group({ serviceFee: [false] });
  }

  addServiceFee() {
    const serviceFee = this.formOrderSummary.get('serviceFee').value;
    const percentage: number = 1.1;
    this.totalAmount = serviceFee ? parseFloat((this.totalAmount * percentage).toFixed(2)) : 43;
  }

  confirm() {
    this.poNotification.success('Purchase done Successful!');
  }
}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-switch-order-reactive-form"),og(),zl(23,"hr")),l&2&&(Lp(5),Ux("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,Fe,n.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,Se],encapsulation:2})}return o})();var ge=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-switch-doc"]],standalone:false,decls:911,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-checkbox-group"],["href","https://www.w3.org/WAI/ARIA/apg/patterns/switch/#keyboard-interaction-19"],["href","https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-enhanced"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","PoSwitchLabelPosition"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-helper"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"language-typescript"]],template:function(l,n){l&1&&(Il(0,"div",0)(1,"p",1)(2,"code"),Qx(3,"import { PoFieldModule } from '@po-ui/ng-components';"),og()(),Il(4,"div",2)(5,"p"),Qx(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),og(),Il(7,"blockquote")(8,"p"),Qx(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),Il(10,"code"),Qx(11,"FormsModule"),og(),Qx(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Il(13,"code"),Qx(14,"ReactiveFormsModule"),og(),Qx(15,", ambos nativos do Angular."),og()()(),Il(16,"h3",3),Qx(17,"Componente"),og(),Il(18,"h4",4)(19,"code",5),Qx(20,"PoSwitchComponent"),og()(),Il(21,"div",2)(22,"p"),Qx(23," O componente "),Il(24,"code"),Qx(25,"po-switch"),og(),Qx(26," \xE9 um "),Il(27,"a",6),Qx(28,"checkbox"),og(),Qx(29,` mais intuitivo, pois faz analogia a um interruptor.
Deve ser usado quando deseja-se transmitir a ideia de ligar / desligar uma funcionalidade espec\xEDfica.`),og(),Il(30,"p"),Qx(31,"Pode-se ligar ou desligar o switch utilizando a tecla de espa\xE7o ou o clique do mouse."),og(),Il(32,"p"),Qx(33,`O texto exibido pode ser alterado de acordo com o valor setado aumentando as possibilidades de uso do componente,
portanto, recomenda-se informar textos que contextualizem seu uso para que facilite a compreens\xE3o do usu\xE1rio.`),og(),Il(34,"blockquote")(35,"p"),Qx(36,"O componente n\xE3o altera o valor incial informado no "),Il(37,"em"),Qx(38,"model"),og(),Qx(39,", portanto indica-se inicializa-lo caso ter necessidade."),og()(),Il(40,"h4"),Qx(41,"Boas pr\xE1ticas"),og(),Il(42,"ul")(43,"li"),Qx(44,"Evite "),Il(45,"code"),Qx(46,"labels"),og(),Qx(47," extensos que quebram o layout do "),Il(48,"code"),Qx(49,"po-switch"),og(),Qx(50,", use "),Il(51,"code"),Qx(52,"labels"),og(),Qx(53," diretos, curtos e intuitivos."),og()(),Il(54,"h4"),Qx(55,"Acessibilidade tratada no componente"),og(),Il(56,"p"),Qx(57,"Algumas diretrizes de acessibilidade j\xE1 s\xE3o tratadas no componente, internamente, e n\xE3o podem ser alteradas pelo propriet\xE1rio do conte\xFAdo. S\xE3o elas:"),og(),Il(58,"ul")(59,"li"),Qx(60,"Quando em foco, o switch \xE9 ativado usando a tecla de Espa\xE7o. "),Il(61,"a",7),Qx(62,"W3C WAI-ARIA 3.5 Switch - Keyboard Interaction"),og()(),Il(63,"li"),Qx(64,"A \xE1rea do foco precisar ter uma espessura de pelo menos 2 pixels CSS e o foco n\xE3o pode ficar escondido por outros elementos da tela. "),Il(65,"a",8),Qx(66,"WCAG 2.4.12: Focus Appearance"),og()()(),Il(67,"h4"),Qx(68,"Tokens customiz\xE1veis"),og(),Il(69,"p"),Qx(70,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),og(),Il(71,"blockquote")(72,"p"),Qx(73,"Para maiores informa\xE7\xF5es, acesse o guia "),Il(74,"a",9),Qx(75,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),Qx(76,"."),og()(),Il(77,"table")(78,"thead")(79,"tr")(80,"th"),Qx(81,"Propriedade"),og(),Il(82,"th"),Qx(83,"Descri\xE7\xE3o"),og(),Il(84,"th"),Qx(85,"Valor Padr\xE3o"),og()()(),Il(86,"tbody")(87,"tr")(88,"td")(89,"strong"),Qx(90,"Unchecked"),og()(),zl(91,"td")(92,"td"),og(),Il(93,"tr")(94,"td")(95,"code"),Qx(96,"--color-unchecked"),og()(),Il(97,"td"),Qx(98,"Cor principal no estado desmarcado"),og(),Il(99,"td")(100,"code"),Qx(101,"var(--color-neutral-light-00)"),og()()(),Il(102,"tr")(103,"td")(104,"code"),Qx(105,"--border-color"),og()(),Il(106,"td"),Qx(107,"Cor da borda"),og(),Il(108,"td")(109,"code"),Qx(110,"var(--color-neutral-dark-70)"),og()()(),Il(111,"tr")(112,"td")(113,"code"),Qx(114,"--track-unchecked"),og()(),Il(115,"td"),Qx(116,"Cor principal da faixa no estado desmarcado"),og(),Il(117,"td")(118,"code"),Qx(119,"var(--color-neutral-light-20)"),og()()(),Il(120,"tr")(121,"td")(122,"strong"),Qx(123,"Checked"),og()(),zl(124,"td")(125,"td"),og(),Il(126,"tr")(127,"td")(128,"code"),Qx(129,"--color-checked"),og()(),Il(130,"td"),Qx(131,"Cor principal no estado selecionado"),og(),Il(132,"td")(133,"code"),Qx(134,"var(--color-action-default)"),og()()(),Il(135,"tr")(136,"td")(137,"code"),Qx(138,"--track-checked"),og()(),Il(139,"td"),Qx(140,"Cor da faixa no estado selecionado"),og(),Il(141,"td")(142,"code"),Qx(143,"var(--color-brand-01-light)"),og()()(),Il(144,"tr")(145,"td")(146,"strong"),Qx(147,"Hover"),og()(),zl(148,"td")(149,"td"),og(),Il(150,"tr")(151,"td")(152,"code"),Qx(153,"--color-unchecked-hover"),og()(),Il(154,"td"),Qx(155,"Cor principal no estado hover desmarcado"),og(),Il(156,"td")(157,"code"),Qx(158,"var(--color-action-pressed)"),og()()(),Il(159,"tr")(160,"td")(161,"code"),Qx(162,"--color-checked-hover"),og()(),Il(163,"td"),Qx(164,"Cor principal no estado hover marcado"),og(),Il(165,"td")(166,"code"),Qx(167,"var(--color-action-pressed)"),og()()(),Il(168,"tr")(169,"td")(170,"strong"),Qx(171,"Focused"),og()(),zl(172,"td")(173,"td"),og(),Il(174,"tr")(175,"td")(176,"code"),Qx(177,"--outline-color-focused"),og()(),Il(178,"td"),Qx(179,"Cor do outline do estado de focus"),og(),Il(180,"td")(181,"code"),Qx(182,"var(--color-action-focus)"),og()()(),Il(183,"tr")(184,"td")(185,"strong"),Qx(186,"Disabled"),og()(),zl(187,"td")(188,"td"),og(),Il(189,"tr")(190,"td")(191,"code"),Qx(192,"--color-unchecked-disabled"),og()(),Il(193,"td"),Qx(194,"Cor principal do disabled no estado desmarcado"),og(),Il(195,"td")(196,"code"),Qx(197,"var(--color-neutral-light-20)"),og()()(),Il(198,"tr")(199,"td")(200,"code"),Qx(201,"--color-checked-disabled"),og()(),Il(202,"td"),Qx(203,"Cor principal do disabled no estado marcado"),og(),Il(204,"td")(205,"code"),Qx(206,"var(--color-action-disabled)"),og()()()()()(),Il(207,"div",10)(208,"h4",11),Qx(209,"Seletor"),og(),Il(210,"pre",12),Qx(211,`<po-switch
    (p-additional-help)="EventEmitter"
    p-additional-help-tooltip="string"
    p-append-in-body="boolean"
    (p-change)="EventEmitter"
    p-compact-label="boolean"
    p-disabled="boolean"
    p-error-limit="boolean"
    p-field-error-message="string"
    p-format-model="boolean"
    p-help="string"
    p-hide-label-status="boolean"
    p-invalid-value="boolean"
    (p-keydown)="EventEmitter"
    p-label="string"
    p-label-off="string"
    p-label-on="string"
    p-label-position="PoSwitchLabelPosition"
    p-label-text-wrap="boolean"
    p-loading="boolean"
    name="string"
    p-helper="PoHelperOptions | string"
    p-size="string" >
</po-switch>
`),og()(),Il(212,"h4",13),Qx(213,"Propriedades"),og(),Il(214,"table",14)(215,"tr",15)(216,"th",16),Qx(217,"Nome"),og(),Il(218,"th",16),Qx(219,"Tipo"),og(),Il(220,"th",16),Qx(221,"Padr\xE3o"),og(),Il(222,"th",16),Qx(223,"Descri\xE7\xE3o"),og()(),Il(224,"tr",17)(225,"td",18)(226,"div",19)(227,"span",20),Qx(228," (p-additional-help)"),zl(229,"br"),og()(),Il(230,"div",21),Qx(231,"Deprecated"),og()(),Il(232,"td",22)(233,"code",23),Qx(234,"EventEmitter"),og()(),Il(235,"td",24),Qx(236,"-"),og(),Il(237,"td",25)(238,"em")(239,"strong"),Qx(240,"(opcional)"),og()(),Il(241,"p"),Qx(242,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),og(),Il(243,"blockquote")(244,"p"),Qx(245,"Essa propriedade est\xE1 "),Il(246,"strong"),Qx(247,"depreciada"),og(),Qx(248," e ser\xE1 removida na vers\xE3o "),Il(249,"code"),Qx(250,"23.x.x"),og(),Qx(251,". Recomendamos utilizar a propriedade "),Il(252,"code"),Qx(253,"p-helper"),og(),Qx(254," que oferece mais recursos e flexibilidade."),og()()()(),Il(255,"tr",17)(256,"td",18)(257,"div",26)(258,"span",27),Qx(259," p-additional-help-tooltip"),zl(260,"br"),og()(),Il(261,"div",21),Qx(262,"Deprecated"),og()(),Il(263,"td",22)(264,"code",28),Qx(265,"string"),og()(),Il(266,"td",24),Qx(267,"-"),og(),Il(268,"td",25)(269,"em")(270,"strong"),Qx(271,"(opcional)"),og()(),Il(272,"p"),Qx(273,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),Il(274,"code"),Qx(275,"po-helper"),og(),Qx(276,`.
`),Il(277,"strong"),Qx(278,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),og()(),Il(279,"blockquote")(280,"p"),Qx(281,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),og()(),Il(282,"blockquote")(283,"p"),Qx(284,"Essa propriedade est\xE1 "),Il(285,"strong"),Qx(286,"depreciada"),og(),Qx(287," e ser\xE1 removida na vers\xE3o "),Il(288,"code"),Qx(289,"23.x.x"),og(),Qx(290,". Recomendamos utilizar a propriedade "),Il(291,"code"),Qx(292,"p-helper"),og(),Qx(293," que oferece mais recursos e flexibilidade."),og()()()(),Il(294,"tr",17)(295,"td",18)(296,"div",26)(297,"span",27),Qx(298," p-append-in-body"),zl(299,"br"),og()()(),Il(300,"td",22)(301,"code",29),Qx(302,"boolean"),og()(),Il(303,"td",24)(304,"p")(305,"code"),Qx(306,"false"),og()()(),Il(307,"td",25)(308,"em")(309,"strong"),Qx(310,"(opcional)"),og()(),Il(311,"p"),Qx(312,"Define que o popover ("),Il(313,"code"),Qx(314,"p-helper"),og(),Qx(315," e/ou "),Il(316,"code"),Qx(317,"p-error-limit"),og(),Qx(318,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),og(),Il(319,"blockquote")(320,"p"),Qx(321,"Quando utilizado com "),Il(322,"code"),Qx(323,"p-helper"),og(),Qx(324,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),og()()()(),Il(325,"tr",17)(326,"td",18)(327,"div",19)(328,"span",20),Qx(329," (p-change)"),zl(330,"br"),og()()(),Il(331,"td",22)(332,"code",23),Qx(333,"EventEmitter"),og()(),Il(334,"td",24),Qx(335,"-"),og(),Il(336,"td",25)(337,"em")(338,"strong"),Qx(339,"(opcional)"),og()(),Il(340,"p"),Qx(341,"Evento disparado ao alterar valor do campo."),og()()(),Il(342,"tr",17)(343,"td",18)(344,"div",26)(345,"span",27),Qx(346," p-compact-label"),zl(347,"br"),og()()(),Il(348,"td",22)(349,"code",29),Qx(350,"boolean"),og()(),Il(351,"td",24)(352,"p")(353,"code"),Qx(354,"false"),og()()(),Il(355,"td",25)(356,"em")(357,"strong"),Qx(358,"(opcional)"),og()(),Il(359,"p"),Qx(360,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),og(),Il(361,"p"),Qx(362,"Quando habilitado ("),Il(363,"code"),Qx(364,"true"),og(),Qx(365,"), o modo compacto afeta o conjunto composto por:"),og(),Il(366,"ul")(367,"li")(368,"code"),Qx(369,"po-label"),og()(),Il(370,"li")(371,"code"),Qx(372,"p-requirement (showRequired)"),og()(),Il(373,"li")(374,"code"),Qx(375,"po-helper"),og()()(),Il(376,"p"),Qx(377,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),og(),Il(378,"p"),Qx(379,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),og(),Il(380,"ul")(381,"li")(382,"code"),Qx(383,"--field-container-title-justify"),og()(),Il(384,"li")(385,"code"),Qx(386,"--field-container-title-flex"),og()()(),Il(387,"p"),Qx(388,"Exemplo:"),og(),Il(389,"pre")(390,"code"),Qx(391,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),og()(),Il(392,"p"),Qx(393,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),og()()(),Il(394,"tr",17)(395,"td",18)(396,"div",26)(397,"span",27),Qx(398," p-disabled"),zl(399,"br"),og()()(),Il(400,"td",22)(401,"code",29),Qx(402,"boolean"),og()(),Il(403,"td",24)(404,"p")(405,"code"),Qx(406,"false"),og()()(),Il(407,"td",25)(408,"em")(409,"strong"),Qx(410,"(opcional)"),og()(),Il(411,"p"),Qx(412,"Indica se o campo ser\xE1 desabilitado."),og()()(),Il(413,"tr",17)(414,"td",18)(415,"div",26)(416,"span",27),Qx(417," p-error-limit"),zl(418,"br"),og()()(),Il(419,"td",22)(420,"code",29),Qx(421,"boolean"),og()(),Il(422,"td",24)(423,"p")(424,"code"),Qx(425,"false"),og()()(),Il(426,"td",25)(427,"em")(428,"strong"),Qx(429,"(opcional)"),og()(),Il(430,"p"),Qx(431,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),og(),Il(432,"blockquote")(433,"p"),Qx(434,"Caso essa propriedade seja definida como "),Il(435,"code"),Qx(436,"true"),og(),Qx(437,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),og()()()(),Il(438,"tr",17)(439,"td",18)(440,"div",26)(441,"span",27),Qx(442," p-field-error-message"),zl(443,"br"),og()()(),Il(444,"td",22)(445,"code",28),Qx(446,"string"),og()(),Il(447,"td",24),Qx(448,"-"),og(),Il(449,"td",25)(450,"em")(451,"strong"),Qx(452,"(opcional)"),og()(),Il(453,"p"),Qx(454,"Exibe a mensagem de erro configurada quando o campo estiver desligado(off/false)."),og()()(),Il(455,"tr",17)(456,"td",18)(457,"div",26)(458,"span",27),Qx(459," p-format-model"),zl(460,"br"),og()()(),Il(461,"td",22)(462,"code",29),Qx(463,"boolean"),og()(),Il(464,"td",24)(465,"p")(466,"code"),Qx(467,"false"),og()()(),Il(468,"td",25)(469,"em")(470,"strong"),Qx(471,"(opcional)"),og()(),Il(472,"p"),Qx(473,"Indica se o "),Il(474,"code"),Qx(475,"model"),og(),Qx(476," receber\xE1 o valor formatado pelas propriedades "),Il(477,"code"),Qx(478,"p-label-on"),og(),Qx(479," e "),Il(480,"code"),Qx(481,"p-label-off"),og(),Qx(482,` ou
apenas o valor puro (sem formata\xE7\xE3o).`),og(),Il(483,"blockquote")(484,"p"),Qx(485,"Por padr\xE3o ser\xE1 atribu\xEDdo "),Il(486,"code"),Qx(487,"false"),og(),Qx(488,"."),og()()()(),Il(489,"tr",17)(490,"td",18)(491,"div",26)(492,"span",27),Qx(493," p-help"),zl(494,"br"),og()()(),Il(495,"td",22)(496,"code",28),Qx(497,"string"),og()(),Il(498,"td",24),Qx(499,"-"),og(),Il(500,"td",25)(501,"p"),Qx(502,"Texto de apoio para o campo."),og()()(),Il(503,"tr",17)(504,"td",18)(505,"div",26)(506,"span",27),Qx(507," p-hide-label-status"),zl(508,"br"),og()()(),Il(509,"td",22)(510,"code",29),Qx(511,"boolean"),og()(),Il(512,"td",24)(513,"p")(514,"code"),Qx(515,"false"),og()()(),Il(516,"td",25)(517,"em")(518,"strong"),Qx(519,"(opcional)"),og()(),Il(520,"p"),Qx(521,"Indica se o status do "),Il(522,"code"),Qx(523,"model"),og(),Qx(524," ser\xE1 escondido visualmente ao lado do switch."),og(),Il(525,"blockquote")(526,"p"),Qx(527,"Por padr\xE3o ser\xE1 atribu\xEDdo "),Il(528,"code"),Qx(529,"false"),og(),Qx(530,"."),og()()()(),Il(531,"tr",17)(532,"td",18)(533,"div",26)(534,"span",27),Qx(535," p-invalid-value"),zl(536,"br"),og()()(),Il(537,"td",22)(538,"code",29),Qx(539,"boolean"),og()(),Il(540,"td",24)(541,"p")(542,"code"),Qx(543,"false"),og()()(),Il(544,"td",25)(545,"em")(546,"strong"),Qx(547,"(opcional)"),og()(),Il(548,"p"),Qx(549,"Define qual valor ser\xE1 considerado como inv\xE1lido para exibir a mensagem da propriedade "),Il(550,"code"),Qx(551,"p-field-error-message"),og(),Qx(552,"."),og(),Il(553,"blockquote")(554,"p"),Qx(555,"Caso essa propriedade seja definida como "),Il(556,"code"),Qx(557,"true"),og(),Qx(558,", a mensagem de erro ser\xE1 exibida quando o campo estiver ligado(on/true)."),og()()()(),Il(559,"tr",17)(560,"td",18)(561,"div",19)(562,"span",20),Qx(563," (p-keydown)"),zl(564,"br"),og()()(),Il(565,"td",22)(566,"code",23),Qx(567,"EventEmitter"),og()(),Il(568,"td",24),Qx(569,"-"),og(),Il(570,"td",25)(571,"em")(572,"strong"),Qx(573,"(opcional)"),og()(),Il(574,"p"),Qx(575,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Il(576,"code"),Qx(577,"KeyboardEvent"),og(),Qx(578," com informa\xE7\xF5es sobre a tecla."),og()()(),Il(579,"tr",17)(580,"td",18)(581,"div",26)(582,"span",27),Qx(583," p-label"),zl(584,"br"),og()()(),Il(585,"td",22)(586,"code",28),Qx(587,"string"),og()(),Il(588,"td",24),Qx(589,"-"),og(),Il(590,"td",25)(591,"p"),Qx(592,"R\xF3tulo exibido pelo componente."),og()()(),Il(593,"tr",17)(594,"td",18)(595,"div",26)(596,"span",27),Qx(597," p-label-off"),zl(598,"br"),og()()(),Il(599,"td",22)(600,"code",28),Qx(601,"string"),og()(),Il(602,"td",24)(603,"p")(604,"code"),Qx(605,"false"),og()()(),Il(606,"td",25)(607,"p"),Qx(608,"Texto exibido quando o valor do componente for "),Il(609,"code"),Qx(610,"false"),og(),Qx(611,"."),og()()(),Il(612,"tr",17)(613,"td",18)(614,"div",26)(615,"span",27),Qx(616," p-label-on"),zl(617,"br"),og()()(),Il(618,"td",22)(619,"code",28),Qx(620,"string"),og()(),Il(621,"td",24)(622,"p")(623,"code"),Qx(624,"true"),og()()(),Il(625,"td",25)(626,"p"),Qx(627,"Texto exibido quando o valor do componente for "),Il(628,"code"),Qx(629,"true"),og(),Qx(630,"."),og()()(),Il(631,"tr",17)(632,"td",18)(633,"div",26)(634,"span",27),Qx(635," p-label-position"),zl(636,"br"),og()()(),Il(637,"td",22)(638,"code",30),Qx(639,"PoSwitchLabelPosition"),og()(),Il(640,"td",24),Qx(641,"-"),og(),Il(642,"td",25)(643,"em")(644,"strong"),Qx(645,"(opcional)"),og()(),Il(646,"p"),Qx(647,"Posi\xE7\xE3o de exibi\xE7\xE3o do r\xF3tulo que fica ao lado do switch."),og(),Il(648,"blockquote")(649,"p"),Qx(650,"Por padr\xE3o exibe \xE0 direita."),og()()()(),Il(651,"tr",17)(652,"td",18)(653,"div",26)(654,"span",27),Qx(655," p-label-text-wrap"),zl(656,"br"),og()()(),Il(657,"td",22)(658,"code",29),Qx(659,"boolean"),og()(),Il(660,"td",24)(661,"p")(662,"code"),Qx(663,"false"),og()()(),Il(664,"td",25)(665,"em")(666,"strong"),Qx(667,"(opcional)"),og()(),Il(668,"p"),Qx(669,"Habilita a quebra autom\xE1tica do texto da propriedade "),Il(670,"code"),Qx(671,"p-label"),og(),Qx(672,". Quando "),Il(673,"code"),Qx(674,"p-label-text-wrap"),og(),Qx(675,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),og()()(),Il(676,"tr",17)(677,"td",18)(678,"div",26)(679,"span",27),Qx(680," p-loading"),zl(681,"br"),og()()(),Il(682,"td",22)(683,"code",29),Qx(684,"boolean"),og()(),Il(685,"td",24)(686,"p")(687,"code"),Qx(688,"false"),og()()(),Il(689,"td",25)(690,"em")(691,"strong"),Qx(692,"(opcional)"),og()(),Il(693,"p"),Qx(694,"Exibe um \xEDcone de carregamento substituindo o switch para sinalizar que uma opera\xE7\xE3o est\xE1 em andamento."),og()()(),Il(695,"tr",17)(696,"td",18)(697,"div",26)(698,"span",27),Qx(699," name"),zl(700,"br"),og()()(),Il(701,"td",22)(702,"code",28),Qx(703,"string"),og()(),Il(704,"td",24),Qx(705,"-"),og(),Il(706,"td",25)(707,"p"),Qx(708,"Nome do componente."),og()()(),Il(709,"tr",17)(710,"td",18)(711,"div",26)(712,"span",27),Qx(713," p-helper"),zl(714,"br"),og()()(),Il(715,"td",22)(716,"code",31),Qx(717,"PoHelperOptions "),og(),Il(718,"code",28),Qx(719," string"),og()(),Il(720,"td",24),Qx(721,"-"),og(),Il(722,"td",25)(723,"em")(724,"strong"),Qx(725,"(opcional)"),og()(),Il(726,"p"),Qx(727,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label quando a propriedade "),Il(728,"code"),Qx(729,"p-label"),og(),Qx(730," for definida, ou, ao lado do componente na aus\xEAncia da propriedade "),Il(731,"code"),Qx(732,"p-label"),og(),Qx(733,"."),og(),Il(734,"blockquote")(735,"p"),Qx(736,"Para mais informa\xE7\xF5es acesse: "),Il(737,"a",32),Qx(738,"https://po-ui.io/documentation/po-helper"),og(),Qx(739,"."),og()(),Il(740,"blockquote")(741,"p"),Qx(742,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),Il(743,"code"),Qx(744,"p-additional-help-tooltip"),og(),Qx(745," e "),Il(746,"code"),Qx(747,"p-additional-help"),og(),Qx(748,") ser\xE1 ignorado."),og()()()(),Il(749,"tr",17)(750,"td",18)(751,"div",26)(752,"span",27),Qx(753," p-size"),zl(754,"br"),og()()(),Il(755,"td",22)(756,"code",28),Qx(757,"string"),og()(),Il(758,"td",24)(759,"p")(760,"code"),Qx(761,"medium"),og()()(),Il(762,"td",25)(763,"em")(764,"strong"),Qx(765,"(opcional)"),og()(),Il(766,"p"),Qx(767,"Define o tamanho do componente:"),og(),Il(768,"ul")(769,"li")(770,"code"),Qx(771,"small"),og(),Qx(772,": altura de 16px (dispon\xEDvel apenas para acessibilidade AA)."),og(),Il(773,"li")(774,"code"),Qx(775,"medium"),og(),Qx(776,": altura de 24px."),og()(),Il(777,"blockquote")(778,"p"),Qx(779,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Il(780,"code"),Qx(781,"medium"),og(),Qx(782,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Il(783,"a",33),Qx(784,"po-theme"),og(),Qx(785,"."),og()()()()(),Il(786,"h3",13),Qx(787,"M\xE9todos"),og(),Il(788,"table",34)(789,"tr",17)(790,"th",35)(791,"div",26)(792,"h4")(793,"span",27),Qx(794," showAdditionalHelp "),og()()()()(),Il(795,"tr",25)(796,"td",25)(797,"p"),Qx(798,"M\xE9todo que exibe "),Il(799,"code"),Qx(800,"p-helper"),og(),Qx(801," ou executa a a\xE7\xE3o definida em "),Il(802,"code"),Qx(803,"p-helper{eventOnClick}"),og(),Qx(804," ou em "),Il(805,"code"),Qx(806,"p-additionalHelp"),og(),Qx(807,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Il(808,"code"),Qx(809,"p-keydown"),og(),Qx(810,"."),og(),Il(811,"blockquote")(812,"p"),Qx(813,"Exibe ou oculta o conte\xFAdo do componente "),Il(814,"code"),Qx(815,"po-helper"),og(),Qx(816," quando o componente estiver com foco."),og()(),Il(817,"pre")(818,"code"),Qx(819,`// Exemplo com p-label e p-helper
<po-nome-component
 #component
 ...
 p-label="Label do component"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, component)"
></po-nome-component>
`),og()(),Il(820,"pre")(821,"code"),Qx(822,`...
onKeyDown(event: KeyboardEvent, inp: PoNomeDoComponente): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),og()()()()(),zl(823,"br"),Il(824,"table",34)(825,"tr",17)(826,"th",35)(827,"div",26)(828,"h4")(829,"span",27),Qx(830," focus "),og()()()()(),Il(831,"tr",25)(832,"td",25)(833,"p"),Qx(834,"Fun\xE7\xE3o que atribui foco ao componente."),og(),Il(835,"p"),Qx(836,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),og(),Il(837,"pre")(838,"code"),Qx(839,`import { PoSwitchComponent } from '@po-ui/ng-components';

...

@ViewChild(PoSwitchComponent, { static: true }) switch: PoSwitchComponent;

focusSwitch() {
  this.switch.focus();
}
`),og()()()()(),zl(840,"br"),Il(841,"table",34)(842,"tr",17)(843,"th",35)(844,"div",26)(845,"h4")(846,"span",27),Qx(847," showAdditionalHelp "),og()()()()(),Il(848,"tr",25)(849,"td",25)(850,"p"),Qx(851,"M\xE9todo que exibe "),Il(852,"code"),Qx(853,"p-helper"),og(),Qx(854," ou executa a a\xE7\xE3o definida em "),Il(855,"code"),Qx(856,"p-helper{eventOnClick}"),og(),Qx(857," ou em "),Il(858,"code"),Qx(859,"p-additionalHelp"),og(),Qx(860,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Il(861,"code"),Qx(862,"p-keydown"),og(),Qx(863,"."),og(),Il(864,"blockquote")(865,"p"),Qx(866,"Exibe ou oculta o conte\xFAdo do componente "),Il(867,"code"),Qx(868,"po-helper"),og(),Qx(869," quando o componente estiver com foco."),og()(),Il(870,"pre")(871,"code"),Qx(872,`//Exemplo com p-label e p-helper
<po-switch
 #switch
 ...
 p-label="Label do switch"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, switch)"
></po-switch>
`),og()(),Il(873,"pre")(874,"code",36),Qx(875,`onKeyDown(event: KeyboardEvent, inp: PoSwitchComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),og()()()()(),zl(876,"br"),Il(877,"h3"),Qx(878,"Enums"),og(),Il(879,"h4",4)(880,"code",5),Qx(881,"PoSwitchLabelPosition"),og()(),Il(882,"div",2)(883,"p"),Qx(884,"Enum para posicionar o label do valor do po-switch."),og()(),Il(885,"h4",13),Qx(886,"Propriedades"),og(),Il(887,"table",14)(888,"tr",15)(889,"th",16),Qx(890,"Nome"),og(),Il(891,"th",16),Qx(892,"Descri\xE7\xE3o"),og()(),Il(893,"tr",17)(894,"td",18)(895,"div",26)(896,"span",27),Qx(897," Right"),zl(898,"br"),og()()(),Il(899,"td",25)(900,"p"),Qx(901,"Posiciona o label do lado esquerdo do switch."),og()()(),Il(902,"tr",17)(903,"td",18)(904,"div",26)(905,"span",27),Qx(906," Left"),zl(907,"br"),og()()(),Il(908,"td",25)(909,"p"),Qx(910,"Posiciona o label do lado direito do switch."),og()()()()());},dependencies:[Ka],encapsulation:2})}return o})();var fe=(()=>{class o{route;router;sub;hidePoWebSample=true;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,l){this.route=m,this.router=l;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let l=m.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:"merge"}),this.activeTab=m;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(l){return new(l||o)(C(Xn),C(En))};static \u0275cmp=Un({type:o,selectors:[["ng-component"]],standalone:false,decls:9,vars:4,consts:[["p-title","Switch",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,n){l&1&&(Il(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return n.changeTab("doc")}),zl(3,"sample-po-switch-doc"),og(),Il(4,"po-tab",3),ft("p-click",function(){return n.changeTab("web")}),zl(5,"sample-po-switch-basic-view")(6,"sample-po-switch-labs-view")(7,"sample-po-switch-order-view")(8,"sample-po-switch-order-reactive-form-view"),og()()()),l&2&&(nw("p-actions",n.actions),Lp(2),nw("p-active",n.activeTab==="doc"),Lp(2),nw("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"));},dependencies:[cNe,qme,Yme,de,ue,be,Ee,ge],encapsulation:2})}return o})();var Ae=[{path:"",component:fe}],ve=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275mod=fe$1({type:o});static \u0275inj=ue$1({imports:[uL.forChild(Ae),uL]})}return o})();var gt=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275mod=fe$1({type:o});static \u0275inj=ue$1({imports:[sr,ve]})}return o})();export{gt as DocPoSwitchModule};