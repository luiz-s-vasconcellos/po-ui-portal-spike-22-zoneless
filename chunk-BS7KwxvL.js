import {f as fe$1,u as ue$1,s as sr,h as hL,w,c3 as Xn,E as En,U as Un,d5 as zp,a as f,aW as Yp,cM as Q9,bH as M3,H as Wl,an as CO,aH as Ka,b8 as Bme,b9 as qme,F as Sl,z as eN,J as og,a1 as ft,L as Lp,ar as $x,au as dg,Q as nw,bs as fN,aX as Z9,aF as G9,aY as q9,aG as _k,aZ as mk,b0 as Qt,b1 as mv,c4 as b3,b4 as L3,c8 as wde,c9 as Ghe,aB as wx,aM as ww,aN as e0,aO as Ew,aP as n0,b7 as k3,ba as fNe,B as yw,cQ as Mk,cR as Sk,a3 as rNe,aD as Ky,aT as nN,aE as Xy}from'./main-WP3NAV7C.js';var me=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-switch-basic"]],standalone:false,decls:1,vars:0,consts:[["name","switch","p-label","PO Switch"]],template:function(l,n){l&1&&Wl(0,"po-switch",0);},dependencies:[M3],encapsulation:2,changeDetection:1})}return o})();var we=o=>({"docs-sample-code-tabs":o}),de=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-switch-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Switch Basic"),og(),Sl(4,"a",2),ft("click",function(){return n.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-switch-basic/sample-po-switch-basic.component.html"),og(),Sl(13,"pre",7),eN(14,`<po-switch name="switch" p-label="PO Switch"> </po-switch>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-switch-basic/sample-po-switch-basic.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-switch-basic',
  templateUrl: './sample-po-switch-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSwitchBasicComponent {}
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-switch-basic"),og(),Wl(23,"hr")),l&2&&(Lp(5),$x("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,we,n.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,me],encapsulation:2})}return o})();var ce=(()=>{class o{helperText;event;fieldErrorMessage;help;label;labelOff;labelOn;labelPosition;properties;size;switch;labelPositionOptions=[{label:"Left",value:zp.Left},{label:"Right",value:zp.Right}];propertiesOptions=[{value:"disabled",label:"Disabled"},{value:"formatModel",label:"Format Model"},{value:"hideLabelStatus",label:"Hide label status"},{value:"errorLimit",label:"Limit Error Message"},{value:"invalidValue",label:"Invalid Value is On/True"},{value:"labelTextWrap",label:"Label Text Wrap"},{value:"loading",label:"Loading"},{value:"compactLabel",label:"Compact Label"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore();}changeEvent(m){this.event=m;}restore(){this.helperText="",this.event="",this.help=void 0,this.label=void 0,this.labelOn="",this.labelOff="",this.labelPosition=void 0,this.properties=[],this.size="medium",this.switch=void 0,this.fieldErrorMessage="";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-switch-labs"]],standalone:false,decls:19,vars:31,consts:[["f","ngForm"],["name","switch",3,"ngModelChange","p-change","p-keydown","ngModel","p-helper","p-disabled","p-error-limit","p-field-error-message","p-format-model","p-help","p-hide-label-status","p-invalid-value","p-label","p-label-off","p-label-on","p-label-position","p-label-text-wrap","p-loading","p-compact-label","p-size"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","labelOff","p-help","Text displayed when PO Switch is set to 'false'","p-label","Label Off",1,"po-md-6",3,"ngModelChange","ngModel"],["name","labelOn","p-help","Text displayed when PO Switch is set to 'true'","p-label","Label On",1,"po-md-6",3,"ngModelChange","ngModel"],["name","fieldErrorMessage","p-clean","","p-label","Field Error Message",1,"po-md-6",3,"ngModelChange","ngModel"],["name","labelPosition","p-label","Label Position",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","properties","p-columns","4","p-label","Properties",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(l,n){if(l&1){let s=wx();Sl(0,"po-switch",1),ww("ngModelChange",function(r){return Ky(s),nN(n.switch,r)||(n.switch=r),Xy(r)}),ft("p-change",function(){return n.changeEvent("p-change")})("p-keydown",function(){return n.changeEvent("p-keydown")}),og(),e0(),Wl(1,"po-divider"),Sl(2,"div",2),Wl(3,"po-info",3)(4,"po-info",4),og(),Wl(5,"po-divider"),Sl(6,"form",null,0)(8,"po-input",5),ww("ngModelChange",function(r){return Ky(s),nN(n.label,r)||(n.label=r),Xy(r)}),og(),e0(),Sl(9,"po-input",6),ww("ngModelChange",function(r){return Ky(s),nN(n.help,r)||(n.help=r),Xy(r)}),og(),e0(),Sl(10,"po-input",7),ww("ngModelChange",function(r){return Ky(s),nN(n.helperText,r)||(n.helperText=r),Xy(r)}),og(),e0(),Sl(11,"po-input",8),ww("ngModelChange",function(r){return Ky(s),nN(n.labelOff,r)||(n.labelOff=r),Xy(r)}),og(),e0(),Sl(12,"po-input",9),ww("ngModelChange",function(r){return Ky(s),nN(n.labelOn,r)||(n.labelOn=r),Xy(r)}),og(),e0(),Sl(13,"po-input",10),ww("ngModelChange",function(r){return Ky(s),nN(n.fieldErrorMessage,r)||(n.fieldErrorMessage=r),Xy(r)}),og(),e0(),Sl(14,"po-radio-group",11),ww("ngModelChange",function(r){return Ky(s),nN(n.labelPosition,r)||(n.labelPosition=r),Xy(r)}),og(),e0(),Sl(15,"po-checkbox-group",12),ww("ngModelChange",function(r){return Ky(s),nN(n.properties,r)||(n.properties=r),Xy(r)}),og(),e0(),Sl(16,"po-radio-group",13),ww("ngModelChange",function(r){return Ky(s),nN(n.size,r)||(n.size=r),Xy(r)}),og(),e0(),Sl(17,"div",2)(18,"po-button",14),ft("p-click",function(){return n.restore()}),og()()();}l&2&&(Ew("ngModel",n.switch),nw("p-helper",n.helperText)("p-disabled",n.properties.includes("disabled"))("p-error-limit",n.properties==null?null:n.properties.includes("errorLimit"))("p-field-error-message",n.fieldErrorMessage)("p-format-model",n.properties.includes("formatModel"))("p-help",n.help)("p-hide-label-status",n.properties.includes("hideLabelStatus"))("p-invalid-value",n.properties==null?null:n.properties.includes("invalidValue"))("p-label",n.label)("p-label-off",n.labelOff)("p-label-on",n.labelOn)("p-label-position",n.labelPosition)("p-label-text-wrap",n.properties.includes("labelTextWrap"))("p-loading",n.properties.includes("loading"))("p-compact-label",n.properties==null?null:n.properties.includes("compactLabel"))("p-size",n.size),n0(),Lp(3),nw("p-value",n.switch),Lp(),nw("p-value",n.event),Lp(4),Ew("ngModel",n.label),n0(),Lp(),Ew("ngModel",n.help),n0(),Lp(),Ew("ngModel",n.helperText),n0(),Lp(),Ew("ngModel",n.labelOff),n0(),Lp(),Ew("ngModel",n.labelOn),n0(),Lp(),Ew("ngModel",n.fieldErrorMessage),n0(),Lp(),Ew("ngModel",n.labelPosition),nw("p-options",n.labelPositionOptions),n0(),Lp(),Ew("ngModel",n.properties),nw("p-options",n.propertiesOptions),n0(),Lp(),Ew("ngModel",n.size),nw("p-options",n.sizeOptions),n0());},dependencies:[Z9,G9,q9,_k,mk,Qt,mv,b3,L3,wde,M3,Ghe],encapsulation:2,changeDetection:1})}return o})();var ye=o=>({"docs-sample-code-tabs":o}),ue=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-switch-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Switch Labs"),og(),Sl(4,"a",2),ft("click",function(){return n.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-switch-labs/sample-po-switch-labs.component.html"),og(),Sl(13,"pre",7),eN(14,`<po-switch
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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-switch-labs/sample-po-switch-labs.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-switch-labs"),og(),Wl(23,"hr")),l&2&&(Lp(5),$x("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,ye,n.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,ce],encapsulation:2})}return o})();var he=(()=>{class o{poNotification=f(Yp);labelPosition=zp.Left;serviceFee=false;totalAmount=43;columns=[{property:"page",label:"Product"},{property:"value",label:"Value (R$)",type:"currency",format:"BRL"}];items=[{page:"Hamburger",value:"20"},{page:"Soft Drink",value:"6"},{page:"French Fries",value:"17"}];addServiceFee(){this.totalAmount=this.serviceFee?parseFloat((this.totalAmount*1.1).toFixed(2)):43;}confirm(){this.poNotification.success("Purchase done Successful!");}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-switch-order"]],standalone:false,decls:15,vars:6,consts:[["f","ngForm"],[1,"po-row"],["p-title","Order Summary",1,"po-md-6","po-lg-4"],[3,"p-columns","p-items","p-hide-table-search"],["name","serviceFee","p-label","Allow a 10% service fee?","p-label-off","No, thank you.","p-label-on","Yes, please.",3,"ngModelChange","p-change","ngModel","p-label-position"],[1,"po-pull-right"],[1,"po-font-text-large-bold"],[1,"po-font-text"],[1,"po-pull-right","po-font-title"],["p-icon","po-icon an an-check","p-label","Confirm","p-kind","primary",1,"po-md-12",3,"p-click"]],template:function(l,n){if(l&1){let s=wx();Sl(0,"div",1)(1,"po-widget",2)(2,"form",null,0),Wl(4,"po-table",3),Sl(5,"po-switch",4),ww("ngModelChange",function(r){return Ky(s),nN(n.serviceFee,r)||(n.serviceFee=r),Xy(r)}),ft("p-change",function(){return n.addServiceFee()}),og(),e0(),Sl(6,"div",5)(7,"div",6),eN(8,"Total value"),og(),Sl(9,"span",7),eN(10,"R$"),og(),Sl(11,"span",8),eN(12),og()(),Sl(13,"div",1)(14,"po-button",9),ft("p-click",function(){return n.confirm()}),og()()()()();}l&2&&(Lp(4),nw("p-columns",n.columns)("p-items",n.items)("p-hide-table-search",false),Lp(),Ew("ngModel",n.serviceFee),nw("p-label-position",n.labelPosition),n0(),Lp(7),yw(n.totalAmount));},dependencies:[Z9,G9,q9,_k,mk,Qt,M3,k3,fNe],encapsulation:2,changeDetection:1})}return o})();var Me=o=>({"docs-sample-code-tabs":o}),be=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-switch-order-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Switch - Order Summary"),og(),Sl(4,"a",2),ft("click",function(){return n.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-switch-order/sample-po-switch-order.component.html"),og(),Sl(13,"pre",7),eN(14,`<div class="po-row">
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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-switch-order/sample-po-switch-order.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-switch-order"),og(),Wl(23,"hr")),l&2&&(Lp(5),$x("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,Me,n.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,he],encapsulation:2})}return o})();var Se=(()=>{class o{poNotification=f(Yp);formBuilder=f(Q9);formOrderSummary;labelPosition=zp.Left;totalAmount=43;columns=[{property:"page",label:"Product"},{property:"value",label:"Value (R$)",type:"currency",format:"BRL"}];items=[{page:"Hamburger",value:"20"},{page:"Soft Drink",value:"6"},{page:"French Fries",value:"17"}];ngOnInit(){this.formOrderSummary=this.formBuilder.group({serviceFee:[false]});}addServiceFee(){let m=this.formOrderSummary.get("serviceFee").value,l=1.1;this.totalAmount=m?parseFloat((this.totalAmount*l).toFixed(2)):43;}confirm(){this.poNotification.success("Purchase done Successful!");}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-switch-order-reactive-form"]],standalone:false,decls:14,vars:6,consts:[[1,"po-row"],["p-title","Order Summary",1,"po-md-6","po-lg-4"],[3,"formGroup"],[3,"p-columns","p-items","p-hide-table-search"],["name","serviceFee","formControlName","serviceFee","p-label","Allow a 10% service fee?","p-label-off","No, thank you.","p-label-on","Yes, please.",3,"p-change","p-label-position"],[1,"po-pull-right"],[1,"po-font-text-large-bold"],[1,"po-font-text"],[1,"po-pull-right","po-font-title"],["p-icon","an an-check","p-label","Confirm","p-kind","primary",1,"po-md-12",3,"p-click"]],template:function(l,n){l&1&&(Sl(0,"div",0)(1,"po-widget",1)(2,"form",2),Wl(3,"po-table",3),Sl(4,"po-switch",4),ft("p-change",function(){return n.addServiceFee()}),og(),e0(),Sl(5,"div",5)(6,"div",6),eN(7,"Total value"),og(),Sl(8,"span",7),eN(9,"R$"),og(),Sl(10,"span",8),eN(11),og()(),Sl(12,"div",0)(13,"po-button",9),ft("p-click",function(){return n.confirm()}),og()()()()()),l&2&&(Lp(2),nw("formGroup",n.formOrderSummary),Lp(),nw("p-columns",n.columns)("p-items",n.items)("p-hide-table-search",false),Lp(),nw("p-label-position",n.labelPosition),n0(),Lp(7),yw(n.totalAmount));},dependencies:[Z9,G9,q9,Mk,Sk,Qt,M3,k3,fNe],encapsulation:2,changeDetection:1})}return o})();var Fe=o=>({"docs-sample-code-tabs":o}),Ee=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-switch-order-reactive-form-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Switch - Order Summary Reactive Form"),og(),Sl(4,"a",2),ft("click",function(){return n.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-switch-order-reactive-form/sample-po-switch-order-reactive-form.component.html"),og(),Sl(13,"pre",7),eN(14,`<div class="po-row">
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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-switch-order-reactive-form/sample-po-switch-order-reactive-form.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-switch-order-reactive-form"),og(),Wl(23,"hr")),l&2&&(Lp(5),$x("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,Fe,n.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,Se],encapsulation:2})}return o})();var ge=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-switch-doc"]],standalone:false,decls:911,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-checkbox-group"],["href","https://www.w3.org/WAI/ARIA/apg/patterns/switch/#keyboard-interaction-19"],["href","https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-enhanced"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","PoSwitchLabelPosition"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-helper"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"language-typescript"]],template:function(l,n){l&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),eN(3,"import { PoFieldModule } from '@po-ui/ng-components';"),og()(),Sl(4,"div",2)(5,"p"),eN(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),og(),Sl(7,"blockquote")(8,"p"),eN(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),Sl(10,"code"),eN(11,"FormsModule"),og(),eN(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Sl(13,"code"),eN(14,"ReactiveFormsModule"),og(),eN(15,", ambos nativos do Angular."),og()()(),Sl(16,"h3",3),eN(17,"Componente"),og(),Sl(18,"h4",4)(19,"code",5),eN(20,"PoSwitchComponent"),og()(),Sl(21,"div",2)(22,"p"),eN(23," O componente "),Sl(24,"code"),eN(25,"po-switch"),og(),eN(26," \xE9 um "),Sl(27,"a",6),eN(28,"checkbox"),og(),eN(29,` mais intuitivo, pois faz analogia a um interruptor.
Deve ser usado quando deseja-se transmitir a ideia de ligar / desligar uma funcionalidade espec\xEDfica.`),og(),Sl(30,"p"),eN(31,"Pode-se ligar ou desligar o switch utilizando a tecla de espa\xE7o ou o clique do mouse."),og(),Sl(32,"p"),eN(33,`O texto exibido pode ser alterado de acordo com o valor setado aumentando as possibilidades de uso do componente,
portanto, recomenda-se informar textos que contextualizem seu uso para que facilite a compreens\xE3o do usu\xE1rio.`),og(),Sl(34,"blockquote")(35,"p"),eN(36,"O componente n\xE3o altera o valor incial informado no "),Sl(37,"em"),eN(38,"model"),og(),eN(39,", portanto indica-se inicializa-lo caso ter necessidade."),og()(),Sl(40,"h4"),eN(41,"Boas pr\xE1ticas"),og(),Sl(42,"ul")(43,"li"),eN(44,"Evite "),Sl(45,"code"),eN(46,"labels"),og(),eN(47," extensos que quebram o layout do "),Sl(48,"code"),eN(49,"po-switch"),og(),eN(50,", use "),Sl(51,"code"),eN(52,"labels"),og(),eN(53," diretos, curtos e intuitivos."),og()(),Sl(54,"h4"),eN(55,"Acessibilidade tratada no componente"),og(),Sl(56,"p"),eN(57,"Algumas diretrizes de acessibilidade j\xE1 s\xE3o tratadas no componente, internamente, e n\xE3o podem ser alteradas pelo propriet\xE1rio do conte\xFAdo. S\xE3o elas:"),og(),Sl(58,"ul")(59,"li"),eN(60,"Quando em foco, o switch \xE9 ativado usando a tecla de Espa\xE7o. "),Sl(61,"a",7),eN(62,"W3C WAI-ARIA 3.5 Switch - Keyboard Interaction"),og()(),Sl(63,"li"),eN(64,"A \xE1rea do foco precisar ter uma espessura de pelo menos 2 pixels CSS e o foco n\xE3o pode ficar escondido por outros elementos da tela. "),Sl(65,"a",8),eN(66,"WCAG 2.4.12: Focus Appearance"),og()()(),Sl(67,"h4"),eN(68,"Tokens customiz\xE1veis"),og(),Sl(69,"p"),eN(70,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),og(),Sl(71,"blockquote")(72,"p"),eN(73,"Para maiores informa\xE7\xF5es, acesse o guia "),Sl(74,"a",9),eN(75,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),eN(76,"."),og()(),Sl(77,"table")(78,"thead")(79,"tr")(80,"th"),eN(81,"Propriedade"),og(),Sl(82,"th"),eN(83,"Descri\xE7\xE3o"),og(),Sl(84,"th"),eN(85,"Valor Padr\xE3o"),og()()(),Sl(86,"tbody")(87,"tr")(88,"td")(89,"strong"),eN(90,"Unchecked"),og()(),Wl(91,"td")(92,"td"),og(),Sl(93,"tr")(94,"td")(95,"code"),eN(96,"--color-unchecked"),og()(),Sl(97,"td"),eN(98,"Cor principal no estado desmarcado"),og(),Sl(99,"td")(100,"code"),eN(101,"var(--color-neutral-light-00)"),og()()(),Sl(102,"tr")(103,"td")(104,"code"),eN(105,"--border-color"),og()(),Sl(106,"td"),eN(107,"Cor da borda"),og(),Sl(108,"td")(109,"code"),eN(110,"var(--color-neutral-dark-70)"),og()()(),Sl(111,"tr")(112,"td")(113,"code"),eN(114,"--track-unchecked"),og()(),Sl(115,"td"),eN(116,"Cor principal da faixa no estado desmarcado"),og(),Sl(117,"td")(118,"code"),eN(119,"var(--color-neutral-light-20)"),og()()(),Sl(120,"tr")(121,"td")(122,"strong"),eN(123,"Checked"),og()(),Wl(124,"td")(125,"td"),og(),Sl(126,"tr")(127,"td")(128,"code"),eN(129,"--color-checked"),og()(),Sl(130,"td"),eN(131,"Cor principal no estado selecionado"),og(),Sl(132,"td")(133,"code"),eN(134,"var(--color-action-default)"),og()()(),Sl(135,"tr")(136,"td")(137,"code"),eN(138,"--track-checked"),og()(),Sl(139,"td"),eN(140,"Cor da faixa no estado selecionado"),og(),Sl(141,"td")(142,"code"),eN(143,"var(--color-brand-01-light)"),og()()(),Sl(144,"tr")(145,"td")(146,"strong"),eN(147,"Hover"),og()(),Wl(148,"td")(149,"td"),og(),Sl(150,"tr")(151,"td")(152,"code"),eN(153,"--color-unchecked-hover"),og()(),Sl(154,"td"),eN(155,"Cor principal no estado hover desmarcado"),og(),Sl(156,"td")(157,"code"),eN(158,"var(--color-action-pressed)"),og()()(),Sl(159,"tr")(160,"td")(161,"code"),eN(162,"--color-checked-hover"),og()(),Sl(163,"td"),eN(164,"Cor principal no estado hover marcado"),og(),Sl(165,"td")(166,"code"),eN(167,"var(--color-action-pressed)"),og()()(),Sl(168,"tr")(169,"td")(170,"strong"),eN(171,"Focused"),og()(),Wl(172,"td")(173,"td"),og(),Sl(174,"tr")(175,"td")(176,"code"),eN(177,"--outline-color-focused"),og()(),Sl(178,"td"),eN(179,"Cor do outline do estado de focus"),og(),Sl(180,"td")(181,"code"),eN(182,"var(--color-action-focus)"),og()()(),Sl(183,"tr")(184,"td")(185,"strong"),eN(186,"Disabled"),og()(),Wl(187,"td")(188,"td"),og(),Sl(189,"tr")(190,"td")(191,"code"),eN(192,"--color-unchecked-disabled"),og()(),Sl(193,"td"),eN(194,"Cor principal do disabled no estado desmarcado"),og(),Sl(195,"td")(196,"code"),eN(197,"var(--color-neutral-light-20)"),og()()(),Sl(198,"tr")(199,"td")(200,"code"),eN(201,"--color-checked-disabled"),og()(),Sl(202,"td"),eN(203,"Cor principal do disabled no estado marcado"),og(),Sl(204,"td")(205,"code"),eN(206,"var(--color-action-disabled)"),og()()()()()(),Sl(207,"div",10)(208,"h4",11),eN(209,"Seletor"),og(),Sl(210,"pre",12),eN(211,`<po-switch
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
`),og()(),Sl(212,"h4",13),eN(213,"Propriedades"),og(),Sl(214,"table",14)(215,"tr",15)(216,"th",16),eN(217,"Nome"),og(),Sl(218,"th",16),eN(219,"Tipo"),og(),Sl(220,"th",16),eN(221,"Padr\xE3o"),og(),Sl(222,"th",16),eN(223,"Descri\xE7\xE3o"),og()(),Sl(224,"tr",17)(225,"td",18)(226,"div",19)(227,"span",20),eN(228," (p-additional-help)"),Wl(229,"br"),og()(),Sl(230,"div",21),eN(231,"Deprecated"),og()(),Sl(232,"td",22)(233,"code",23),eN(234,"EventEmitter"),og()(),Sl(235,"td",24),eN(236,"-"),og(),Sl(237,"td",25)(238,"em")(239,"strong"),eN(240,"(opcional)"),og()(),Sl(241,"p"),eN(242,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),og(),Sl(243,"blockquote")(244,"p"),eN(245,"Essa propriedade est\xE1 "),Sl(246,"strong"),eN(247,"depreciada"),og(),eN(248," e ser\xE1 removida na vers\xE3o "),Sl(249,"code"),eN(250,"23.x.x"),og(),eN(251,". Recomendamos utilizar a propriedade "),Sl(252,"code"),eN(253,"p-helper"),og(),eN(254," que oferece mais recursos e flexibilidade."),og()()()(),Sl(255,"tr",17)(256,"td",18)(257,"div",26)(258,"span",27),eN(259," p-additional-help-tooltip"),Wl(260,"br"),og()(),Sl(261,"div",21),eN(262,"Deprecated"),og()(),Sl(263,"td",22)(264,"code",28),eN(265,"string"),og()(),Sl(266,"td",24),eN(267,"-"),og(),Sl(268,"td",25)(269,"em")(270,"strong"),eN(271,"(opcional)"),og()(),Sl(272,"p"),eN(273,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),Sl(274,"code"),eN(275,"po-helper"),og(),eN(276,`.
`),Sl(277,"strong"),eN(278,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),og()(),Sl(279,"blockquote")(280,"p"),eN(281,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),og()(),Sl(282,"blockquote")(283,"p"),eN(284,"Essa propriedade est\xE1 "),Sl(285,"strong"),eN(286,"depreciada"),og(),eN(287," e ser\xE1 removida na vers\xE3o "),Sl(288,"code"),eN(289,"23.x.x"),og(),eN(290,". Recomendamos utilizar a propriedade "),Sl(291,"code"),eN(292,"p-helper"),og(),eN(293," que oferece mais recursos e flexibilidade."),og()()()(),Sl(294,"tr",17)(295,"td",18)(296,"div",26)(297,"span",27),eN(298," p-append-in-body"),Wl(299,"br"),og()()(),Sl(300,"td",22)(301,"code",29),eN(302,"boolean"),og()(),Sl(303,"td",24)(304,"p")(305,"code"),eN(306,"false"),og()()(),Sl(307,"td",25)(308,"em")(309,"strong"),eN(310,"(opcional)"),og()(),Sl(311,"p"),eN(312,"Define que o popover ("),Sl(313,"code"),eN(314,"p-helper"),og(),eN(315," e/ou "),Sl(316,"code"),eN(317,"p-error-limit"),og(),eN(318,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),og(),Sl(319,"blockquote")(320,"p"),eN(321,"Quando utilizado com "),Sl(322,"code"),eN(323,"p-helper"),og(),eN(324,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),og()()()(),Sl(325,"tr",17)(326,"td",18)(327,"div",19)(328,"span",20),eN(329," (p-change)"),Wl(330,"br"),og()()(),Sl(331,"td",22)(332,"code",23),eN(333,"EventEmitter"),og()(),Sl(334,"td",24),eN(335,"-"),og(),Sl(336,"td",25)(337,"em")(338,"strong"),eN(339,"(opcional)"),og()(),Sl(340,"p"),eN(341,"Evento disparado ao alterar valor do campo."),og()()(),Sl(342,"tr",17)(343,"td",18)(344,"div",26)(345,"span",27),eN(346," p-compact-label"),Wl(347,"br"),og()()(),Sl(348,"td",22)(349,"code",29),eN(350,"boolean"),og()(),Sl(351,"td",24)(352,"p")(353,"code"),eN(354,"false"),og()()(),Sl(355,"td",25)(356,"em")(357,"strong"),eN(358,"(opcional)"),og()(),Sl(359,"p"),eN(360,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),og(),Sl(361,"p"),eN(362,"Quando habilitado ("),Sl(363,"code"),eN(364,"true"),og(),eN(365,"), o modo compacto afeta o conjunto composto por:"),og(),Sl(366,"ul")(367,"li")(368,"code"),eN(369,"po-label"),og()(),Sl(370,"li")(371,"code"),eN(372,"p-requirement (showRequired)"),og()(),Sl(373,"li")(374,"code"),eN(375,"po-helper"),og()()(),Sl(376,"p"),eN(377,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),og(),Sl(378,"p"),eN(379,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),og(),Sl(380,"ul")(381,"li")(382,"code"),eN(383,"--field-container-title-justify"),og()(),Sl(384,"li")(385,"code"),eN(386,"--field-container-title-flex"),og()()(),Sl(387,"p"),eN(388,"Exemplo:"),og(),Sl(389,"pre")(390,"code"),eN(391,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),og()(),Sl(392,"p"),eN(393,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),og()()(),Sl(394,"tr",17)(395,"td",18)(396,"div",26)(397,"span",27),eN(398," p-disabled"),Wl(399,"br"),og()()(),Sl(400,"td",22)(401,"code",29),eN(402,"boolean"),og()(),Sl(403,"td",24)(404,"p")(405,"code"),eN(406,"false"),og()()(),Sl(407,"td",25)(408,"em")(409,"strong"),eN(410,"(opcional)"),og()(),Sl(411,"p"),eN(412,"Indica se o campo ser\xE1 desabilitado."),og()()(),Sl(413,"tr",17)(414,"td",18)(415,"div",26)(416,"span",27),eN(417," p-error-limit"),Wl(418,"br"),og()()(),Sl(419,"td",22)(420,"code",29),eN(421,"boolean"),og()(),Sl(422,"td",24)(423,"p")(424,"code"),eN(425,"false"),og()()(),Sl(426,"td",25)(427,"em")(428,"strong"),eN(429,"(opcional)"),og()(),Sl(430,"p"),eN(431,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),og(),Sl(432,"blockquote")(433,"p"),eN(434,"Caso essa propriedade seja definida como "),Sl(435,"code"),eN(436,"true"),og(),eN(437,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),og()()()(),Sl(438,"tr",17)(439,"td",18)(440,"div",26)(441,"span",27),eN(442," p-field-error-message"),Wl(443,"br"),og()()(),Sl(444,"td",22)(445,"code",28),eN(446,"string"),og()(),Sl(447,"td",24),eN(448,"-"),og(),Sl(449,"td",25)(450,"em")(451,"strong"),eN(452,"(opcional)"),og()(),Sl(453,"p"),eN(454,"Exibe a mensagem de erro configurada quando o campo estiver desligado(off/false)."),og()()(),Sl(455,"tr",17)(456,"td",18)(457,"div",26)(458,"span",27),eN(459," p-format-model"),Wl(460,"br"),og()()(),Sl(461,"td",22)(462,"code",29),eN(463,"boolean"),og()(),Sl(464,"td",24)(465,"p")(466,"code"),eN(467,"false"),og()()(),Sl(468,"td",25)(469,"em")(470,"strong"),eN(471,"(opcional)"),og()(),Sl(472,"p"),eN(473,"Indica se o "),Sl(474,"code"),eN(475,"model"),og(),eN(476," receber\xE1 o valor formatado pelas propriedades "),Sl(477,"code"),eN(478,"p-label-on"),og(),eN(479," e "),Sl(480,"code"),eN(481,"p-label-off"),og(),eN(482,` ou
apenas o valor puro (sem formata\xE7\xE3o).`),og(),Sl(483,"blockquote")(484,"p"),eN(485,"Por padr\xE3o ser\xE1 atribu\xEDdo "),Sl(486,"code"),eN(487,"false"),og(),eN(488,"."),og()()()(),Sl(489,"tr",17)(490,"td",18)(491,"div",26)(492,"span",27),eN(493," p-help"),Wl(494,"br"),og()()(),Sl(495,"td",22)(496,"code",28),eN(497,"string"),og()(),Sl(498,"td",24),eN(499,"-"),og(),Sl(500,"td",25)(501,"p"),eN(502,"Texto de apoio para o campo."),og()()(),Sl(503,"tr",17)(504,"td",18)(505,"div",26)(506,"span",27),eN(507," p-hide-label-status"),Wl(508,"br"),og()()(),Sl(509,"td",22)(510,"code",29),eN(511,"boolean"),og()(),Sl(512,"td",24)(513,"p")(514,"code"),eN(515,"false"),og()()(),Sl(516,"td",25)(517,"em")(518,"strong"),eN(519,"(opcional)"),og()(),Sl(520,"p"),eN(521,"Indica se o status do "),Sl(522,"code"),eN(523,"model"),og(),eN(524," ser\xE1 escondido visualmente ao lado do switch."),og(),Sl(525,"blockquote")(526,"p"),eN(527,"Por padr\xE3o ser\xE1 atribu\xEDdo "),Sl(528,"code"),eN(529,"false"),og(),eN(530,"."),og()()()(),Sl(531,"tr",17)(532,"td",18)(533,"div",26)(534,"span",27),eN(535," p-invalid-value"),Wl(536,"br"),og()()(),Sl(537,"td",22)(538,"code",29),eN(539,"boolean"),og()(),Sl(540,"td",24)(541,"p")(542,"code"),eN(543,"false"),og()()(),Sl(544,"td",25)(545,"em")(546,"strong"),eN(547,"(opcional)"),og()(),Sl(548,"p"),eN(549,"Define qual valor ser\xE1 considerado como inv\xE1lido para exibir a mensagem da propriedade "),Sl(550,"code"),eN(551,"p-field-error-message"),og(),eN(552,"."),og(),Sl(553,"blockquote")(554,"p"),eN(555,"Caso essa propriedade seja definida como "),Sl(556,"code"),eN(557,"true"),og(),eN(558,", a mensagem de erro ser\xE1 exibida quando o campo estiver ligado(on/true)."),og()()()(),Sl(559,"tr",17)(560,"td",18)(561,"div",19)(562,"span",20),eN(563," (p-keydown)"),Wl(564,"br"),og()()(),Sl(565,"td",22)(566,"code",23),eN(567,"EventEmitter"),og()(),Sl(568,"td",24),eN(569,"-"),og(),Sl(570,"td",25)(571,"em")(572,"strong"),eN(573,"(opcional)"),og()(),Sl(574,"p"),eN(575,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Sl(576,"code"),eN(577,"KeyboardEvent"),og(),eN(578," com informa\xE7\xF5es sobre a tecla."),og()()(),Sl(579,"tr",17)(580,"td",18)(581,"div",26)(582,"span",27),eN(583," p-label"),Wl(584,"br"),og()()(),Sl(585,"td",22)(586,"code",28),eN(587,"string"),og()(),Sl(588,"td",24),eN(589,"-"),og(),Sl(590,"td",25)(591,"p"),eN(592,"R\xF3tulo exibido pelo componente."),og()()(),Sl(593,"tr",17)(594,"td",18)(595,"div",26)(596,"span",27),eN(597," p-label-off"),Wl(598,"br"),og()()(),Sl(599,"td",22)(600,"code",28),eN(601,"string"),og()(),Sl(602,"td",24)(603,"p")(604,"code"),eN(605,"false"),og()()(),Sl(606,"td",25)(607,"p"),eN(608,"Texto exibido quando o valor do componente for "),Sl(609,"code"),eN(610,"false"),og(),eN(611,"."),og()()(),Sl(612,"tr",17)(613,"td",18)(614,"div",26)(615,"span",27),eN(616," p-label-on"),Wl(617,"br"),og()()(),Sl(618,"td",22)(619,"code",28),eN(620,"string"),og()(),Sl(621,"td",24)(622,"p")(623,"code"),eN(624,"true"),og()()(),Sl(625,"td",25)(626,"p"),eN(627,"Texto exibido quando o valor do componente for "),Sl(628,"code"),eN(629,"true"),og(),eN(630,"."),og()()(),Sl(631,"tr",17)(632,"td",18)(633,"div",26)(634,"span",27),eN(635," p-label-position"),Wl(636,"br"),og()()(),Sl(637,"td",22)(638,"code",30),eN(639,"PoSwitchLabelPosition"),og()(),Sl(640,"td",24),eN(641,"-"),og(),Sl(642,"td",25)(643,"em")(644,"strong"),eN(645,"(opcional)"),og()(),Sl(646,"p"),eN(647,"Posi\xE7\xE3o de exibi\xE7\xE3o do r\xF3tulo que fica ao lado do switch."),og(),Sl(648,"blockquote")(649,"p"),eN(650,"Por padr\xE3o exibe \xE0 direita."),og()()()(),Sl(651,"tr",17)(652,"td",18)(653,"div",26)(654,"span",27),eN(655," p-label-text-wrap"),Wl(656,"br"),og()()(),Sl(657,"td",22)(658,"code",29),eN(659,"boolean"),og()(),Sl(660,"td",24)(661,"p")(662,"code"),eN(663,"false"),og()()(),Sl(664,"td",25)(665,"em")(666,"strong"),eN(667,"(opcional)"),og()(),Sl(668,"p"),eN(669,"Habilita a quebra autom\xE1tica do texto da propriedade "),Sl(670,"code"),eN(671,"p-label"),og(),eN(672,". Quando "),Sl(673,"code"),eN(674,"p-label-text-wrap"),og(),eN(675,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),og()()(),Sl(676,"tr",17)(677,"td",18)(678,"div",26)(679,"span",27),eN(680," p-loading"),Wl(681,"br"),og()()(),Sl(682,"td",22)(683,"code",29),eN(684,"boolean"),og()(),Sl(685,"td",24)(686,"p")(687,"code"),eN(688,"false"),og()()(),Sl(689,"td",25)(690,"em")(691,"strong"),eN(692,"(opcional)"),og()(),Sl(693,"p"),eN(694,"Exibe um \xEDcone de carregamento substituindo o switch para sinalizar que uma opera\xE7\xE3o est\xE1 em andamento."),og()()(),Sl(695,"tr",17)(696,"td",18)(697,"div",26)(698,"span",27),eN(699," name"),Wl(700,"br"),og()()(),Sl(701,"td",22)(702,"code",28),eN(703,"string"),og()(),Sl(704,"td",24),eN(705,"-"),og(),Sl(706,"td",25)(707,"p"),eN(708,"Nome do componente."),og()()(),Sl(709,"tr",17)(710,"td",18)(711,"div",26)(712,"span",27),eN(713," p-helper"),Wl(714,"br"),og()()(),Sl(715,"td",22)(716,"code",31),eN(717,"PoHelperOptions "),og(),Sl(718,"code",28),eN(719," string"),og()(),Sl(720,"td",24),eN(721,"-"),og(),Sl(722,"td",25)(723,"em")(724,"strong"),eN(725,"(opcional)"),og()(),Sl(726,"p"),eN(727,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label quando a propriedade "),Sl(728,"code"),eN(729,"p-label"),og(),eN(730," for definida, ou, ao lado do componente na aus\xEAncia da propriedade "),Sl(731,"code"),eN(732,"p-label"),og(),eN(733,"."),og(),Sl(734,"blockquote")(735,"p"),eN(736,"Para mais informa\xE7\xF5es acesse: "),Sl(737,"a",32),eN(738,"https://po-ui.io/documentation/po-helper"),og(),eN(739,"."),og()(),Sl(740,"blockquote")(741,"p"),eN(742,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),Sl(743,"code"),eN(744,"p-additional-help-tooltip"),og(),eN(745," e "),Sl(746,"code"),eN(747,"p-additional-help"),og(),eN(748,") ser\xE1 ignorado."),og()()()(),Sl(749,"tr",17)(750,"td",18)(751,"div",26)(752,"span",27),eN(753," p-size"),Wl(754,"br"),og()()(),Sl(755,"td",22)(756,"code",28),eN(757,"string"),og()(),Sl(758,"td",24)(759,"p")(760,"code"),eN(761,"medium"),og()()(),Sl(762,"td",25)(763,"em")(764,"strong"),eN(765,"(opcional)"),og()(),Sl(766,"p"),eN(767,"Define o tamanho do componente:"),og(),Sl(768,"ul")(769,"li")(770,"code"),eN(771,"small"),og(),eN(772,": altura de 16px (dispon\xEDvel apenas para acessibilidade AA)."),og(),Sl(773,"li")(774,"code"),eN(775,"medium"),og(),eN(776,": altura de 24px."),og()(),Sl(777,"blockquote")(778,"p"),eN(779,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Sl(780,"code"),eN(781,"medium"),og(),eN(782,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Sl(783,"a",33),eN(784,"po-theme"),og(),eN(785,"."),og()()()()(),Sl(786,"h3",13),eN(787,"M\xE9todos"),og(),Sl(788,"table",34)(789,"tr",17)(790,"th",35)(791,"div",26)(792,"h4")(793,"span",27),eN(794," showAdditionalHelp "),og()()()()(),Sl(795,"tr",25)(796,"td",25)(797,"p"),eN(798,"M\xE9todo que exibe "),Sl(799,"code"),eN(800,"p-helper"),og(),eN(801," ou executa a a\xE7\xE3o definida em "),Sl(802,"code"),eN(803,"p-helper{eventOnClick}"),og(),eN(804," ou em "),Sl(805,"code"),eN(806,"p-additionalHelp"),og(),eN(807,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Sl(808,"code"),eN(809,"p-keydown"),og(),eN(810,"."),og(),Sl(811,"blockquote")(812,"p"),eN(813,"Exibe ou oculta o conte\xFAdo do componente "),Sl(814,"code"),eN(815,"po-helper"),og(),eN(816," quando o componente estiver com foco."),og()(),Sl(817,"pre")(818,"code"),eN(819,`// Exemplo com p-label e p-helper
<po-nome-component
 #component
 ...
 p-label="Label do component"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, component)"
></po-nome-component>
`),og()(),Sl(820,"pre")(821,"code"),eN(822,`...
onKeyDown(event: KeyboardEvent, inp: PoNomeDoComponente): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),og()()()()(),Wl(823,"br"),Sl(824,"table",34)(825,"tr",17)(826,"th",35)(827,"div",26)(828,"h4")(829,"span",27),eN(830," focus "),og()()()()(),Sl(831,"tr",25)(832,"td",25)(833,"p"),eN(834,"Fun\xE7\xE3o que atribui foco ao componente."),og(),Sl(835,"p"),eN(836,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),og(),Sl(837,"pre")(838,"code"),eN(839,`import { PoSwitchComponent } from '@po-ui/ng-components';

...

@ViewChild(PoSwitchComponent, { static: true }) switch: PoSwitchComponent;

focusSwitch() {
  this.switch.focus();
}
`),og()()()()(),Wl(840,"br"),Sl(841,"table",34)(842,"tr",17)(843,"th",35)(844,"div",26)(845,"h4")(846,"span",27),eN(847," showAdditionalHelp "),og()()()()(),Sl(848,"tr",25)(849,"td",25)(850,"p"),eN(851,"M\xE9todo que exibe "),Sl(852,"code"),eN(853,"p-helper"),og(),eN(854," ou executa a a\xE7\xE3o definida em "),Sl(855,"code"),eN(856,"p-helper{eventOnClick}"),og(),eN(857," ou em "),Sl(858,"code"),eN(859,"p-additionalHelp"),og(),eN(860,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Sl(861,"code"),eN(862,"p-keydown"),og(),eN(863,"."),og(),Sl(864,"blockquote")(865,"p"),eN(866,"Exibe ou oculta o conte\xFAdo do componente "),Sl(867,"code"),eN(868,"po-helper"),og(),eN(869," quando o componente estiver com foco."),og()(),Sl(870,"pre")(871,"code"),eN(872,`//Exemplo com p-label e p-helper
<po-switch
 #switch
 ...
 p-label="Label do switch"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, switch)"
></po-switch>
`),og()(),Sl(873,"pre")(874,"code",36),eN(875,`onKeyDown(event: KeyboardEvent, inp: PoSwitchComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),og()()()()(),Wl(876,"br"),Sl(877,"h3"),eN(878,"Enums"),og(),Sl(879,"h4",4)(880,"code",5),eN(881,"PoSwitchLabelPosition"),og()(),Sl(882,"div",2)(883,"p"),eN(884,"Enum para posicionar o label do valor do po-switch."),og()(),Sl(885,"h4",13),eN(886,"Propriedades"),og(),Sl(887,"table",14)(888,"tr",15)(889,"th",16),eN(890,"Nome"),og(),Sl(891,"th",16),eN(892,"Descri\xE7\xE3o"),og()(),Sl(893,"tr",17)(894,"td",18)(895,"div",26)(896,"span",27),eN(897," Right"),Wl(898,"br"),og()()(),Sl(899,"td",25)(900,"p"),eN(901,"Posiciona o label do lado esquerdo do switch."),og()()(),Sl(902,"tr",17)(903,"td",18)(904,"div",26)(905,"span",27),eN(906," Left"),Wl(907,"br"),og()()(),Sl(908,"td",25)(909,"p"),eN(910,"Posiciona o label do lado direito do switch."),og()()()()());},dependencies:[Ka],encapsulation:2})}return o})();var fe=(()=>{class o{route;router;sub;hidePoWebSample=true;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,l){this.route=m,this.router=l;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let l=m.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:"merge"}),this.activeTab=m;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(l){return new(l||o)(w(Xn),w(En))};static \u0275cmp=Un({type:o,selectors:[["ng-component"]],standalone:false,decls:9,vars:4,consts:[["p-title","Switch",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,n){l&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return n.changeTab("doc")}),Wl(3,"sample-po-switch-doc"),og(),Sl(4,"po-tab",3),ft("p-click",function(){return n.changeTab("web")}),Wl(5,"sample-po-switch-basic-view")(6,"sample-po-switch-labs-view")(7,"sample-po-switch-order-view")(8,"sample-po-switch-order-reactive-form-view"),og()()()),l&2&&(nw("p-actions",n.actions),Lp(2),nw("p-active",n.activeTab==="doc"),Lp(2),nw("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"));},dependencies:[rNe,Bme,qme,de,ue,be,Ee,ge],encapsulation:2})}return o})();var Ae=[{path:"",component:fe}],ve=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275mod=fe$1({type:o});static \u0275inj=ue$1({imports:[hL.forChild(Ae),hL]})}return o})();var gt=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275mod=fe$1({type:o});static \u0275inj=ue$1({imports:[sr,ve]})}return o})();export{gt as DocPoSwitchModule};