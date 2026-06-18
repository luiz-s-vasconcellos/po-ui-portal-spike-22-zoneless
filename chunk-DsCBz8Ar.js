import {f as fe$1,u as ue,s as sr,a as uL,C,c3 as Xn,E as En,U as Un,dH as ev,dI as Es,bI as Sa,J as zl,an as DO,aH as Ka,b8 as qme,b9 as Yme,H as Il,q as Qx,R as og,a1 as ft,A as Lp,ar as Ux,au as dg,T as nw,bs as uN,aX as G9,aF as $9,aY as z9,aG as mk,aZ as hk,b0 as Qt,b1 as mv,c4 as C3,b4 as O3,c8 as Dde,aJ as qhe,bH as k3,c9 as Yhe,aB as Dx,aM as ww,aN as QA,aq as lx,aO as Ew,aP as e0,at as ux,cn as a3,a3 as cNe,ba as yNe,aQ as hx,aR as fx,br as iN,aS as px,aA as Sx,cH as rN,aD as Xy,aT as eN,aE as Qy}from'./main-QSTLMRDK.js';var Se=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-tag-basic"]],standalone:false,decls:1,vars:0,consts:[["p-value","PO Tag"]],template:function(r,i){r&1&&zl(0,"po-tag",0);},dependencies:[Sa],encapsulation:2,changeDetection:1})}return a})();var ke=a=>({"docs-sample-code-tabs":a}),Ee=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-tag-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Tag Basic"),og(),Il(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-tag-basic/sample-po-tag-basic.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-tag p-value="PO Tag"> </po-tag>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-tag-basic/sample-po-tag-basic.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-tag-basic',
  templateUrl: './sample-po-tag-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTagBasicComponent {}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-tag-basic"),og(),zl(23,"hr")),r&2&&(Lp(5),Ux("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,ke,i.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,Se],encapsulation:2})}return a})();function Me(a,c){if(a&1){let l=Dx();Il(0,"po-select",14),ww("ngModelChange",function(i){Xy(l);let g=Sx();return eN(g.icon,i)||(g.icon=i),Qy(i)}),og(),QA();}if(a&2){let l=Sx();Ew("ngModel",l.icon),nw("p-options",l.iconList),e0();}}function Be(a,c){if(a&1){let l=Dx();Il(0,"po-switch",15),ww("ngModelChange",function(i){Xy(l);let g=Sx();return eN(g.icon,i)||(g.icon=i),Qy(i)}),og(),QA();}if(a&2){let l=Sx();Ew("ngModel",l.icon),e0();}}var xe=(()=>{class a{color;event;icon;textColor;label;orientation;type;value;properties;propertiesOptions=[{value:"removable",label:"Removable"}];iconList=[{label:"an an-bluetooth",value:"an an-bluetooth"},{label:"an an-heart",value:"an an-heart"},{label:"an an-lightbulb",value:"an an-lightbulb"},{label:"an an-star",value:"an an-star"},{label:"an an-gear",value:"an an-gear"},{label:"an an-globe",value:"an an-globe"},{label:"fa fa-address-card",value:"fa fa-address-card"},{label:"fa fa-bell",value:"fa fa-bell"}];orientationOptions=[{label:"Horizontal",value:ev.Horizontal},{label:"Vertical",value:ev.Vertical}];typeOptions=[{label:"None",value:void 0},{label:"Info",value:Es.Info},{label:"Danger",value:Es.Danger},{label:"Success",value:Es.Success},{label:"Warning",value:Es.Warning},{label:"Neutral",value:Es.Neutral}];ngOnInit(){this.restore();}changeEvent(l){this.event=l;}propertiesChange(l){let r=[...this.propertiesOptions];l.includes("removable")?(r[1]={value:"disabled",label:"Disabled",disabled:false},this.propertiesOptions=r):this.propertiesOptions=r.filter(i=>i.value!=="disabled");}restore(){this.color=void 0,this.icon=void 0,this.label=void 0,this.orientation=void 0,this.value="PO Tag",this.type=void 0,this.event="",this.textColor=void 0,this.properties=[];}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-tag-labs"]],standalone:false,decls:21,vars:22,consts:[["f","ngForm"],[3,"p-click","p-color","p-disabled","p-removable","p-icon","p-text-color","p-label","p-orientation","p-type","p-value"],[1,"po-row"],["p-label","Events",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","value","p-clean","","p-label","Value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","color","p-clean","","p-label","Color","p-help","color-01, caption-tag-01, red, rgb(201, 53, 125), #753399",1,"po-md-6",3,"ngModelChange","ngModel"],["name","textColor","p-clean","","p-label","Text color","p-help","color-01, red, rgb(201, 53, 125), #753399",1,"po-md-6",3,"ngModelChange","ngModel"],["name","icon","p-label","Icon",1,"po-md-6","po-mt-2",3,"ngModel","p-options"],["name","properties","p-label","Properties",1,"po-md-6","po-mt-2",3,"ngModelChange","p-change","ngModel","p-options"],["name","icon","p-label","Icon",1,"po-md-6",3,"ngModel"],["name","orientation","p-columns","1","p-label","Orientation",1,"po-md-4",3,"ngModelChange","ngModel","p-options"],["name","type","p-columns","3","p-label","Type",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"],["name","icon","p-label","Icon",1,"po-md-6","po-mt-2",3,"ngModelChange","ngModel","p-options"],["name","icon","p-label","Icon",1,"po-md-6",3,"ngModelChange","ngModel"]],template:function(r,i){if(r&1){let g=Dx();Il(0,"po-tag",1),ft("p-click",function(){return i.changeEvent("p-click")}),og(),zl(1,"po-divider"),Il(2,"div",2),zl(3,"po-info",3),og(),zl(4,"po-divider"),Il(5,"form",null,0)(7,"div",2)(8,"po-input",4),ww("ngModelChange",function(d){return Xy(g),eN(i.label,d)||(i.label=d),Qy(d)}),og(),QA(),Il(9,"po-input",5),ww("ngModelChange",function(d){return Xy(g),eN(i.value,d)||(i.value=d),Qy(d)}),og(),QA(),og(),Il(10,"div",2)(11,"po-input",6),ww("ngModelChange",function(d){return Xy(g),eN(i.color,d)||(i.color=d),Qy(d)}),og(),QA(),Il(12,"po-input",7),ww("ngModelChange",function(d){return Xy(g),eN(i.textColor,d)||(i.textColor=d),Qy(d)}),og(),QA(),lx(13,Me,1,2,"po-select",8),Il(14,"po-checkbox-group",9),ww("ngModelChange",function(d){return Xy(g),eN(i.properties,d)||(i.properties=d),Qy(d)}),ft("p-change",function(d){return i.propertiesChange(d)}),og(),QA(),lx(15,Be,1,1,"po-switch",10),og(),Il(16,"div",2)(17,"po-radio-group",11),ww("ngModelChange",function(d){return Xy(g),eN(i.orientation,d)||(i.orientation=d),Qy(d)}),og(),QA(),Il(18,"po-radio-group",12),ww("ngModelChange",function(d){return Xy(g),eN(i.type,d)||(i.type=d),Qy(d)}),og(),QA(),og(),Il(19,"div",2)(20,"po-button",13),ft("p-click",function(){return i.restore()}),og()()();}r&2&&(nw("p-color",i.color)("p-disabled",i.properties.includes("disabled"))("p-removable",i.properties.includes("removable"))("p-icon",i.icon)("p-text-color",i.textColor)("p-label",i.label)("p-orientation",i.orientation)("p-type",i.type)("p-value",i.value),Lp(3),nw("p-value",i.event),Lp(5),Ew("ngModel",i.label),e0(),Lp(),Ew("ngModel",i.value),e0(),Lp(2),Ew("ngModel",i.color),e0(),Lp(),Ew("ngModel",i.textColor),e0(),Lp(),ux(i.type?-1:13),Lp(),Ew("ngModel",i.properties),nw("p-options",i.propertiesOptions),e0(),Lp(),ux(i.type?15:-1),Lp(2),Ew("ngModel",i.orientation),nw("p-options",i.orientationOptions),e0(),Lp(),Ew("ngModel",i.type),nw("p-options",i.typeOptions),e0());},dependencies:[G9,$9,z9,mk,hk,Qt,mv,C3,O3,Dde,qhe,k3,Sa,Yhe],styles:[".sample-tag-color-circle[_ngcontent-%COMP%]{border-radius:10px;display:inline-block;height:16px;margin-right:4px;vertical-align:middle;width:16px}"],changeDetection:1})}return a})();var Fe=a=>({"docs-sample-code-tabs":a}),ve=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-tag-labs-view"]],standalone:false,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Tag Labs"),og(),Il(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-tag-labs/sample-po-tag-labs.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-tag
  [p-color]="color"
  [p-disabled]="properties.includes('disabled')"
  [p-removable]="properties.includes('removable')"
  [p-icon]="icon"
  [p-text-color]="textColor"
  [p-label]="label"
  [p-orientation]="orientation"
  [p-type]="type"
  [p-value]="value"
  (p-click)="changeEvent('p-click')"
>
</po-tag>

<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Events" [p-value]="event"> </po-info>
</div>

<po-divider />

<form #f="ngForm">
  <div class="po-row">
    <po-input class="po-md-6" name="label" [(ngModel)]="label" p-clean p-label="Label"> </po-input>

    <po-input class="po-md-6" name="value" [(ngModel)]="value" p-clean p-label="Value" p-required> </po-input>
  </div>

  <div class="po-row">
    <po-input
      class="po-md-6"
      name="color"
      [(ngModel)]="color"
      p-clean
      p-label="Color"
      p-help="color-01, caption-tag-01, red, rgb(201, 53, 125), #753399"
    >
    </po-input>

    <po-input
      class="po-md-6"
      name="textColor"
      [(ngModel)]="textColor"
      p-clean
      p-label="Text color"
      p-help="color-01, red, rgb(201, 53, 125), #753399"
    >
    </po-input>

    @if (!type) {
      <po-select class="po-md-6 po-mt-2" name="icon" [(ngModel)]="icon" p-label="Icon" [p-options]="iconList">
      </po-select>
    }

    <po-checkbox-group
      class="po-md-6 po-mt-2"
      name="properties"
      [(ngModel)]="properties"
      p-label="Properties"
      [p-options]="propertiesOptions"
      (p-change)="propertiesChange($event)"
    >
    </po-checkbox-group>

    @if (type) {
      <po-switch class="po-md-6" name="icon" [(ngModel)]="icon" p-label="Icon"> </po-switch>
    }
  </div>

  <div class="po-row">
    <po-radio-group
      class="po-md-4"
      name="orientation"
      [(ngModel)]="orientation"
      p-columns="1"
      p-label="Orientation"
      [p-options]="orientationOptions"
    >
    </po-radio-group>

    <po-radio-group
      class="po-md-6"
      name="type"
      [(ngModel)]="type"
      p-columns="3"
      p-label="Type"
      [p-options]="typeOptions"
    >
    </po-radio-group>
  </div>

  <div class="po-row">
    <po-button class="po-md-3" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-tag-labs/sample-po-tag-labs.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import {
  PoRadioGroupOption,
  PoSelectOption,
  PoTagOrientation,
  PoTagType,
  PoCheckboxGroupOption
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-tag-labs',
  templateUrl: './sample-po-tag-labs.component.html',
  styleUrls: ['./sample-po-tag-labs.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTagLabsComponent implements OnInit {
  color: string;
  event: string;
  icon: boolean | string;
  textColor: string;
  label: string;
  orientation: PoTagOrientation;
  type: PoTagType;
  value: string;
  properties: Array<string>;

  propertiesOptions: Array<PoCheckboxGroupOption> = [{ value: 'removable', label: 'Removable' }];

  public readonly iconList: Array<PoSelectOption> = [
    { label: 'an an-bluetooth', value: 'an an-bluetooth' },
    { label: 'an an-heart', value: 'an an-heart' },
    { label: 'an an-lightbulb', value: 'an an-lightbulb' },
    { label: 'an an-star', value: 'an an-star' },
    { label: 'an an-gear', value: 'an an-gear' },
    { label: 'an an-globe', value: 'an an-globe' },
    { label: 'fa fa-address-card', value: 'fa fa-address-card' },
    { label: 'fa fa-bell', value: 'fa fa-bell' }
  ];

  public readonly orientationOptions: Array<PoRadioGroupOption> = [
    { label: 'Horizontal', value: PoTagOrientation.Horizontal },
    { label: 'Vertical', value: PoTagOrientation.Vertical }
  ];

  public readonly typeOptions: Array<PoRadioGroupOption> = [
    { label: 'None', value: undefined },
    { label: 'Info', value: PoTagType.Info },
    { label: 'Danger', value: PoTagType.Danger },
    { label: 'Success', value: PoTagType.Success },
    { label: 'Warning', value: PoTagType.Warning },
    { label: 'Neutral', value: PoTagType.Neutral }
  ];

  ngOnInit() {
    this.restore();
  }

  changeEvent(event: string) {
    this.event = event;
  }

  propertiesChange(event) {
    const value = [...this.propertiesOptions];

    if (event.includes('removable')) {
      value[1] = { value: 'disabled', label: 'Disabled', disabled: false };
      this.propertiesOptions = value;
    } else {
      this.propertiesOptions = value.filter(option => option.value !== 'disabled');
    }
  }

  restore() {
    this.color = undefined;
    this.icon = undefined;
    this.label = undefined;
    this.orientation = undefined;
    this.value = 'PO Tag';
    this.type = undefined;
    this.event = '';
    this.textColor = undefined;
    this.properties = [];
  }
}
`),og()()(),Il(21,"po-tab",10)(22,"div")(23,"label",6),Qx(24,"sample-po-tag-labs/sample-po-tag-labs.component.css"),og(),Il(25,"pre",11),Qx(26,`.sample-tag-color-circle {
  border-radius: 10px;
  display: inline-block;
  height: 16px;
  margin-right: 4px;
  vertical-align: middle;
  width: 16px;
}
`),og()()()()(),Il(27,"div",12),zl(28,"sample-po-tag-labs"),og(),zl(29,"hr")),r&2&&(Lp(5),Ux("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,Fe,i.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,xe],encapsulation:2})}return a})();function Oe(a,c){if(a&1&&zl(0,"po-tag",12),a&2){let l=c.$implicit;nw("p-label",l.label)("p-type",l.type)("p-value",l.value);}}function Ie(a,c){if(a&1&&(Il(0,"po-widget",15)(1,"div",3),zl(2,"po-info",16)(3,"po-tag",17),og()()),a&2){let l=c.$implicit;Lp(2),nw("p-label",l.label)("p-value",l.value),Lp(),nw("p-type",l.type)("p-value",l.text);}}function Ve(a,c){if(a&1&&(Il(0,"po-tab",14),hx(1,Ie,4,4,"po-widget",15,fx),og()),a&2){let l=c.$implicit;nw("p-label",rN(l.month)),Lp(),px(l.details);}}var fe=(()=>{class a{investiments=[{label:"Stocks",type:"danger",value:"Low -3.50%"},{label:"Treasury bills",type:"success",value:"Growing +2.25%"},{label:"Real estate",type:"warning",value:"Risk -0.02%"},{label:"Mutual fund",type:"success",value:"Growing +3.00%"}];items=[{month:"June",details:[{label:"Automatic Payment",value:"$ 250",type:"danger",text:"Expense"},{label:"Deposit",value:"$ 500",type:"success",text:"Income"},{label:"Bank receipt",value:"$ 10",type:"info",text:"Document"},{label:"Credit Card",value:"$ 230",type:"danger",text:"Expense"},{label:"Personal Loan",value:"$ 150",type:"warning",text:"Future"}]},{month:"July",details:[{label:"Deposit",value:"$ 500",type:"success",text:"Income"},{label:"Car insurance",value:"$ 40",type:"danger",text:"Expense"},{label:"Deposit",value:"$ 200",type:"success",text:"Income"},{label:"Bank statement",value:"$ 5",type:"info",text:"Document"},{label:"Deposit",value:"$ 70",type:"success",text:"Income"}]},{month:"August",details:[{label:"Student Loan",value:"$ 250",type:"danger",text:"Expense"},{label:"Deposit",value:"$ 50",type:"success",text:"Income"},{label:"Bank receipt",value:"$ 10",type:"info",text:"Document"},{label:"Automatic Payment",value:"$ 230",type:"warning",text:"Future"},{label:"Credit Card",value:"$ 150",type:"warning",text:"Future"}]}];advantages=[{title:"Platinum Card:",description:"best card in the market. You earn points and have concierge service and cultural advice."},{title:"Exclusive agencies:",description:"environments designed to offer comfort and privacy."},{title:"Unique experience",description:"with exclusivity background in travel, culture, entertainment and much more."},{title:"Progressive discounts",description:"on service packages, according to the volume of investments."},{title:"Free tax:",description:"withdrawals and Transfers Between Unlimited Accounts."}];userData={name:"Natasha Romanova",email:"natasha.romanova@po-ui.com.br",photo:"avatar2.png"};static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-tag-bank-account"]],standalone:false,decls:20,vars:4,consts:[["p-title","Bank Statement"],[1,"po-mt-1","po-lg-7"],["p-title","User information",1,"po-md-12","po-sm-mb-1","po-mb-1","po-lg-mb-1"],[1,"po-row"],[1,"po-md-5","po-lg-4"],["p-size","xl",3,"p-src"],[1,"po-md-7","po-lg-8"],[1,"po-mb-2"],["p-label","Name",3,"p-value"],["p-value","Premium Account"],["p-label","Email",1,"po-mt-5",3,"p-value"],["p-title","My Investiments",1,"po-md-12","po-sm-mt-1","po-mt-1","po-lg-mt-1"],[1,"po-md-6","po-lg-3",3,"p-label","p-type","p-value"],["p-title","Last three month operations",1,"po-mt-1","po-lg-5"],["p-active","",3,"p-label"],[1,"po-lg-12","po-sm-mb-1","po-mb-1","po-lg-mb-1"],["p-label-size","6","p-orientation","horizontal",1,"po-lg-9","po-md-8",3,"p-label","p-value"],["p-icon","","p-orientation","horizontal",1,"po-lg-3","po-md-4",3,"p-type","p-value"]],template:function(r,i){r&1&&(Il(0,"po-page-default",0)(1,"div",1)(2,"po-widget",2)(3,"div",3)(4,"div",4),zl(5,"po-avatar",5),og(),Il(6,"div",6)(7,"div",7),zl(8,"po-info",8)(9,"po-tag",9),og(),Il(10,"div",7),zl(11,"po-info",10),og()()()(),Il(12,"po-widget",11)(13,"div",3),hx(14,Oe,1,3,"po-tag",12,fx),og()()(),Il(16,"po-widget",13)(17,"po-tabs"),hx(18,Ve,3,2,"po-tab",14,fx),og()()()),r&2&&(Lp(5),nw("p-src",iN("assets/graphics/",i.userData.photo)),Lp(3),nw("p-value",i.userData.name),Lp(3),nw("p-value",i.userData.email),Lp(3),px(i.investiments),Lp(4),px(i.items));},dependencies:[a3,Sa,Yhe,cNe,qme,Yme,yNe],encapsulation:2,changeDetection:1})}return a})();var qe=a=>({"docs-sample-code-tabs":a}),he=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-tag-bank-account-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Tag - Bank Account"),og(),Il(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-tag-bank-account/sample-po-tag-bank-account.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-page-default p-title="Bank Statement">
  <div class="po-mt-1 po-lg-7">
    <po-widget class="po-md-12 po-sm-mb-1 po-mb-1 po-lg-mb-1" p-title="User information">
      <div class="po-row">
        <div class="po-md-5 po-lg-4">
          <po-avatar p-size="xl" p-src="assets/graphics/{ { userData.photo }}"></po-avatar>
        </div>
        <div class="po-md-7 po-lg-8">
          <div class="po-mb-2">
            <po-info p-label="Name" [p-value]="userData.name"> </po-info>
            <po-tag p-value="Premium Account"> </po-tag>
          </div>
          <div class="po-mb-2">
            <po-info class="po-mt-5" p-label="Email" [p-value]="userData.email"> </po-info>
          </div>
        </div>
      </div>
    </po-widget>

    <po-widget class="po-md-12 po-sm-mt-1 po-mt-1 po-lg-mt-1" p-title="My Investiments">
      <div class="po-row">
        @for (investiment of investiments; track investiment) {
          <po-tag
            class="po-md-6 po-lg-3"
            [p-label]="investiment.label"
            [p-type]="investiment.type"
            [p-value]="investiment.value"
          >
          </po-tag>
        }
      </div>
    </po-widget>
  </div>
  <po-widget p-title="Last three month operations" class="po-mt-1 po-lg-5">
    <po-tabs>
      @for (item of items; track item) {
        <po-tab p-active p-label="{ { item.month }}">
          @for (item of item.details; track item) {
            <po-widget class="po-lg-12 po-sm-mb-1 po-mb-1 po-lg-mb-1">
              <div class="po-row">
                <po-info
                  class="po-lg-9 po-md-8"
                  p-label-size="6"
                  p-orientation="horizontal"
                  [p-label]="item.label"
                  [p-value]="item.value"
                >
                </po-info>
                <po-tag
                  class="po-lg-3 po-md-4"
                  p-icon
                  p-orientation="horizontal"
                  [p-type]="item.type"
                  [p-value]="item.text"
                >
                </po-tag>
              </div>
            </po-widget>
          }
        </po-tab>
      }
    </po-tabs>
  </po-widget>
</po-page-default>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-tag-bank-account/sample-po-tag-bank-account.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-tag-bank-account',
  templateUrl: './sample-po-tag-bank-account.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTagBankAccountComponent {
  investiments = [
    { label: 'Stocks', type: 'danger', value: 'Low -3.50%' },
    { label: 'Treasury bills', type: 'success', value: 'Growing +2.25%' },
    { label: 'Real estate', type: 'warning', value: 'Risk -0.02%' },
    { label: 'Mutual fund', type: 'success', value: 'Growing +3.00%' }
  ];

  items = [
    {
      month: 'June',
      details: [
        { label: 'Automatic Payment', value: '$ 250', type: 'danger', text: 'Expense' },
        { label: 'Deposit', value: '$ 500', type: 'success', text: 'Income' },
        { label: 'Bank receipt', value: '$ 10', type: 'info', text: 'Document' },
        { label: 'Credit Card', value: '$ 230', type: 'danger', text: 'Expense' },
        { label: 'Personal Loan', value: '$ 150', type: 'warning', text: 'Future' }
      ]
    },
    {
      month: 'July',
      details: [
        { label: 'Deposit', value: '$ 500', type: 'success', text: 'Income' },
        { label: 'Car insurance', value: '$ 40', type: 'danger', text: 'Expense' },
        { label: 'Deposit', value: '$ 200', type: 'success', text: 'Income' },
        { label: 'Bank statement', value: '$ 5', type: 'info', text: 'Document' },
        { label: 'Deposit', value: '$ 70', type: 'success', text: 'Income' }
      ]
    },
    {
      month: 'August',
      details: [
        { label: 'Student Loan', value: '$ 250', type: 'danger', text: 'Expense' },
        { label: 'Deposit', value: '$ 50', type: 'success', text: 'Income' },
        { label: 'Bank receipt', value: '$ 10', type: 'info', text: 'Document' },
        { label: 'Automatic Payment', value: '$ 230', type: 'warning', text: 'Future' },
        { label: 'Credit Card', value: '$ 150', type: 'warning', text: 'Future' }
      ]
    }
  ];

  advantages = [
    {
      title: 'Platinum Card:',
      description: 'best card in the market. You earn points and have concierge service and cultural advice.'
    },
    { title: 'Exclusive agencies:', description: 'environments designed to offer comfort and privacy.' },
    {
      title: 'Unique experience',
      description: 'with exclusivity background in travel, culture, entertainment and much more.'
    },
    { title: 'Progressive discounts', description: 'on service packages, according to the volume of investments.' },
    { title: 'Free tax:', description: 'withdrawals and Transfers Between Unlimited Accounts.' }
  ];

  userData = {
    'name': 'Natasha Romanova',
    'email': 'natasha.romanova@po-ui.com.br',
    'photo': 'avatar2.png'
  };
}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-tag-bank-account"),og(),zl(23,"hr")),r&2&&(Lp(5),Ux("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,qe,i.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,fe],encapsulation:2})}return a})();var j=(a,c)=>c.color,Ne=(a,c)=>c.name;function He(a,c){if(a&1&&zl(0,"po-tag",3),a&2){let l=c.$implicit;nw("p-color",l.color)("p-value",l.label);}}function Re(a,c){if(a&1&&zl(0,"po-tag",5),a&2){let l=c.$implicit;nw("p-color",l.color)("p-label",l.label)("p-value",l.value);}}function $e(a,c){if(a&1&&zl(0,"po-tag",7),a&2){let l=c.$implicit;nw("p-color",l.color)("p-icon",l.icon)("p-value",l.label);}}function je(a,c){if(a&1&&zl(0,"po-tag",10),a&2){let l=c.$implicit;nw("p-color",l.color)("p-value",l.label);}}function Ge(a,c){if(a&1&&(Il(0,"po-tab",9)(1,"div",2),hx(2,je,1,2,"po-tag",10,j),og()()),a&2){let l=c.$implicit;nw("p-label",l.name),Lp(2),px(l.tags);}}var Ce=(()=>{class a{captionTags=Array.from({length:35},(l,r)=>{let i=String(r+1).padStart(2,"0");return {label:`Caption Tag ${i}`,color:`caption-tag-${i}`}});statusItems=[{label:"Ativo",value:"Em operacao",color:"caption-tag-01"},{label:"Pendente",value:"Aguardando aprovacao",color:"caption-tag-06"},{label:"Em analise",value:"Verificacao interna",color:"caption-tag-11"},{label:"Concluido",value:"Finalizado com sucesso",color:"caption-tag-16"},{label:"Cancelado",value:"Operacao cancelada",color:"caption-tag-21"},{label:"Expirado",value:"Prazo excedido",color:"caption-tag-26"},{label:"Bloqueado",value:"Acesso restrito",color:"caption-tag-31"}];categories=[{label:"Financeiro",color:"caption-tag-03",icon:"an an-currency-circle-dollar"},{label:"Recursos Humanos",color:"caption-tag-08",icon:"an an-users"},{label:"Logistica",color:"caption-tag-13",icon:"an an-truck"},{label:"Vendas",color:"caption-tag-18",icon:"an an-shopping-cart-simple"},{label:"Suporte",color:"caption-tag-23",icon:"an an-headset"},{label:"Marketing",color:"caption-tag-28",icon:"an an-megaphone-simple"},{label:"TI",color:"caption-tag-33",icon:"an an-desktop-tower"}];families=[{name:"Familia 01-05",tags:[{label:"caption-tag-01",color:"caption-tag-01"},{label:"caption-tag-02",color:"caption-tag-02"},{label:"caption-tag-03",color:"caption-tag-03"},{label:"caption-tag-04",color:"caption-tag-04"},{label:"caption-tag-05",color:"caption-tag-05"}]},{name:"Familia 06-10",tags:[{label:"caption-tag-06",color:"caption-tag-06"},{label:"caption-tag-07",color:"caption-tag-07"},{label:"caption-tag-08",color:"caption-tag-08"},{label:"caption-tag-09",color:"caption-tag-09"},{label:"caption-tag-10",color:"caption-tag-10"}]},{name:"Familia 11-15",tags:[{label:"caption-tag-11",color:"caption-tag-11"},{label:"caption-tag-12",color:"caption-tag-12"},{label:"caption-tag-13",color:"caption-tag-13"},{label:"caption-tag-14",color:"caption-tag-14"},{label:"caption-tag-15",color:"caption-tag-15"}]},{name:"Familia 16-20",tags:[{label:"caption-tag-16",color:"caption-tag-16"},{label:"caption-tag-17",color:"caption-tag-17"},{label:"caption-tag-18",color:"caption-tag-18"},{label:"caption-tag-19",color:"caption-tag-19"},{label:"caption-tag-20",color:"caption-tag-20"}]},{name:"Familia 21-25",tags:[{label:"caption-tag-21",color:"caption-tag-21"},{label:"caption-tag-22",color:"caption-tag-22"},{label:"caption-tag-23",color:"caption-tag-23"},{label:"caption-tag-24",color:"caption-tag-24"},{label:"caption-tag-25",color:"caption-tag-25"}]},{name:"Familia 26-30",tags:[{label:"caption-tag-26",color:"caption-tag-26"},{label:"caption-tag-27",color:"caption-tag-27"},{label:"caption-tag-28",color:"caption-tag-28"},{label:"caption-tag-29",color:"caption-tag-29"},{label:"caption-tag-30",color:"caption-tag-30"}]},{name:"Familia 31-35",tags:[{label:"caption-tag-31",color:"caption-tag-31"},{label:"caption-tag-32",color:"caption-tag-32"},{label:"caption-tag-33",color:"caption-tag-33"},{label:"caption-tag-34",color:"caption-tag-34"},{label:"caption-tag-35",color:"caption-tag-35"}]}];static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-tag-caption-tag-colors"]],standalone:false,decls:17,vars:0,consts:[["p-title","Caption Tag Colors"],["p-title","Paleta completa - 35 cores",1,"po-md-12","po-mb-1"],[1,"po-row"],[1,"po-md-3","po-lg-2","po-mb-1",3,"p-color","p-value"],["p-title","Status de processos",1,"po-md-12","po-mb-1"],["p-orientation","horizontal",1,"po-md-4","po-lg-3","po-mb-1",3,"p-color","p-label","p-value"],["p-title","Categorias com icones",1,"po-md-12"],[1,"po-md-4","po-lg-3","po-mb-1",3,"p-color","p-icon","p-value"],["p-title","Familias de cores",1,"po-md-12","po-mb-1"],[3,"p-label"],[1,"po-md-4","po-lg-2","po-mb-1",3,"p-color","p-value"]],template:function(r,i){r&1&&(Il(0,"po-page-default",0)(1,"po-widget",1)(2,"div",2),hx(3,He,1,2,"po-tag",3,j),og()(),Il(5,"po-widget",4)(6,"div",2),hx(7,Re,1,3,"po-tag",5,j),og()(),Il(9,"po-widget",6)(10,"div",2),hx(11,$e,1,3,"po-tag",7,j),og()(),Il(13,"po-widget",8)(14,"po-tabs"),hx(15,Ge,4,1,"po-tab",9,Ne),og()()()),r&2&&(Lp(3),px(i.captionTags),Lp(4),px(i.statusItems),Lp(4),px(i.categories),Lp(4),px(i.families));},dependencies:[Sa,cNe,qme,Yme,yNe],encapsulation:2,changeDetection:1})}return a})();var Je=a=>({"docs-sample-code-tabs":a}),Te=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-tag-caption-tag-colors-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Tag - Caption Tag Colors"),og(),Il(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-tag-caption-tag-colors/sample-po-tag-caption-tag-colors.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-page-default p-title="Caption Tag Colors">
  <po-widget class="po-md-12 po-mb-1" p-title="Paleta completa - 35 cores">
    <div class="po-row">
      @for (tag of captionTags; track tag.color) {
        <po-tag class="po-md-3 po-lg-2 po-mb-1" [p-color]="tag.color" [p-value]="tag.label"> </po-tag>
      }
    </div>
  </po-widget>

  <po-widget class="po-md-12 po-mb-1" p-title="Status de processos">
    <div class="po-row">
      @for (item of statusItems; track item.color) {
        <po-tag
          class="po-md-4 po-lg-3 po-mb-1"
          [p-color]="item.color"
          [p-label]="item.label"
          [p-value]="item.value"
          p-orientation="horizontal"
        >
        </po-tag>
      }
    </div>
  </po-widget>

  <po-widget class="po-md-12" p-title="Categorias com icones">
    <div class="po-row">
      @for (cat of categories; track cat.color) {
        <po-tag class="po-md-4 po-lg-3 po-mb-1" [p-color]="cat.color" [p-icon]="cat.icon" [p-value]="cat.label">
        </po-tag>
      }
    </div>
  </po-widget>

  <po-widget class="po-md-12 po-mb-1" p-title="Familias de cores">
    <po-tabs>
      @for (family of families; track family.name) {
        <po-tab [p-label]="family.name">
          <div class="po-row">
            @for (tag of family.tags; track tag.color) {
              <po-tag class="po-md-4 po-lg-2 po-mb-1" [p-color]="tag.color" [p-value]="tag.label"> </po-tag>
            }
          </div>
        </po-tab>
      }
    </po-tabs>
  </po-widget>
</po-page-default>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-tag-caption-tag-colors/sample-po-tag-caption-tag-colors.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-tag-caption-tag-colors',
  templateUrl: './sample-po-tag-caption-tag-colors.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTagCaptionTagColorsComponent {
  captionTags = Array.from({ length: 35 }, (_, i) => {
    const index = String(i + 1).padStart(2, '0');
    return { label: \`Caption Tag \${index}\`, color: \`caption-tag-\${index}\` };
  });

  statusItems = [
    { label: 'Ativo', value: 'Em operacao', color: 'caption-tag-01' },
    { label: 'Pendente', value: 'Aguardando aprovacao', color: 'caption-tag-06' },
    { label: 'Em analise', value: 'Verificacao interna', color: 'caption-tag-11' },
    { label: 'Concluido', value: 'Finalizado com sucesso', color: 'caption-tag-16' },
    { label: 'Cancelado', value: 'Operacao cancelada', color: 'caption-tag-21' },
    { label: 'Expirado', value: 'Prazo excedido', color: 'caption-tag-26' },
    { label: 'Bloqueado', value: 'Acesso restrito', color: 'caption-tag-31' }
  ];

  categories = [
    { label: 'Financeiro', color: 'caption-tag-03', icon: 'an an-currency-circle-dollar' },
    { label: 'Recursos Humanos', color: 'caption-tag-08', icon: 'an an-users' },
    { label: 'Logistica', color: 'caption-tag-13', icon: 'an an-truck' },
    { label: 'Vendas', color: 'caption-tag-18', icon: 'an an-shopping-cart-simple' },
    { label: 'Suporte', color: 'caption-tag-23', icon: 'an an-headset' },
    { label: 'Marketing', color: 'caption-tag-28', icon: 'an an-megaphone-simple' },
    { label: 'TI', color: 'caption-tag-33', icon: 'an an-desktop-tower' }
  ];

  families = [
    {
      name: 'Familia 01-05',
      tags: [
        { label: 'caption-tag-01', color: 'caption-tag-01' },
        { label: 'caption-tag-02', color: 'caption-tag-02' },
        { label: 'caption-tag-03', color: 'caption-tag-03' },
        { label: 'caption-tag-04', color: 'caption-tag-04' },
        { label: 'caption-tag-05', color: 'caption-tag-05' }
      ]
    },
    {
      name: 'Familia 06-10',
      tags: [
        { label: 'caption-tag-06', color: 'caption-tag-06' },
        { label: 'caption-tag-07', color: 'caption-tag-07' },
        { label: 'caption-tag-08', color: 'caption-tag-08' },
        { label: 'caption-tag-09', color: 'caption-tag-09' },
        { label: 'caption-tag-10', color: 'caption-tag-10' }
      ]
    },
    {
      name: 'Familia 11-15',
      tags: [
        { label: 'caption-tag-11', color: 'caption-tag-11' },
        { label: 'caption-tag-12', color: 'caption-tag-12' },
        { label: 'caption-tag-13', color: 'caption-tag-13' },
        { label: 'caption-tag-14', color: 'caption-tag-14' },
        { label: 'caption-tag-15', color: 'caption-tag-15' }
      ]
    },
    {
      name: 'Familia 16-20',
      tags: [
        { label: 'caption-tag-16', color: 'caption-tag-16' },
        { label: 'caption-tag-17', color: 'caption-tag-17' },
        { label: 'caption-tag-18', color: 'caption-tag-18' },
        { label: 'caption-tag-19', color: 'caption-tag-19' },
        { label: 'caption-tag-20', color: 'caption-tag-20' }
      ]
    },
    {
      name: 'Familia 21-25',
      tags: [
        { label: 'caption-tag-21', color: 'caption-tag-21' },
        { label: 'caption-tag-22', color: 'caption-tag-22' },
        { label: 'caption-tag-23', color: 'caption-tag-23' },
        { label: 'caption-tag-24', color: 'caption-tag-24' },
        { label: 'caption-tag-25', color: 'caption-tag-25' }
      ]
    },
    {
      name: 'Familia 26-30',
      tags: [
        { label: 'caption-tag-26', color: 'caption-tag-26' },
        { label: 'caption-tag-27', color: 'caption-tag-27' },
        { label: 'caption-tag-28', color: 'caption-tag-28' },
        { label: 'caption-tag-29', color: 'caption-tag-29' },
        { label: 'caption-tag-30', color: 'caption-tag-30' }
      ]
    },
    {
      name: 'Familia 31-35',
      tags: [
        { label: 'caption-tag-31', color: 'caption-tag-31' },
        { label: 'caption-tag-32', color: 'caption-tag-32' },
        { label: 'caption-tag-33', color: 'caption-tag-33' },
        { label: 'caption-tag-34', color: 'caption-tag-34' },
        { label: 'caption-tag-35', color: 'caption-tag-35' }
      ]
    }
  ];
}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-tag-caption-tag-colors"),og(),zl(23,"hr")),r&2&&(Lp(5),Ux("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,Je,i.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,Ce],encapsulation:2})}return a})();var ye=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-tag-doc"]],standalone:false,decls:1168,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],[1,"dot","po-color-01"],[1,"dot","po-color-02"],[1,"dot","po-color-03"],[1,"dot","po-color-04"],[1,"dot","po-color-05"],[1,"dot","po-color-06"],[1,"dot","po-color-07"],[1,"dot","po-color-08"],[1,"dot","po-color-09"],[1,"dot","po-color-10"],[1,"dot","po-color-11"],[1,"dot","po-color-12"],[1,"dot","po-caption-tag-01"],[1,"dot","po-caption-tag-02"],[1,"dot","po-caption-tag-03"],[1,"dot","po-caption-tag-04"],[1,"dot","po-caption-tag-05"],[1,"dot","po-caption-tag-06"],[1,"dot","po-caption-tag-07"],[1,"dot","po-caption-tag-08"],[1,"dot","po-caption-tag-09"],[1,"dot","po-caption-tag-10"],[1,"dot","po-caption-tag-11"],[1,"dot","po-caption-tag-12"],[1,"dot","po-caption-tag-13"],[1,"dot","po-caption-tag-14"],[1,"dot","po-caption-tag-15"],[1,"dot","po-caption-tag-16"],[1,"dot","po-caption-tag-17"],[1,"dot","po-caption-tag-18"],[1,"dot","po-caption-tag-19"],[1,"dot","po-caption-tag-20"],[1,"dot","po-caption-tag-21"],[1,"dot","po-caption-tag-22"],[1,"dot","po-caption-tag-23"],[1,"dot","po-caption-tag-24"],[1,"dot","po-caption-tag-25"],[1,"dot","po-caption-tag-26"],[1,"dot","po-caption-tag-27"],[1,"dot","po-caption-tag-28"],[1,"dot","po-caption-tag-29"],[1,"dot","po-caption-tag-30"],[1,"dot","po-caption-tag-31"],[1,"dot","po-caption-tag-32"],[1,"dot","po-caption-tag-33"],[1,"dot","po-caption-tag-34"],[1,"dot","po-caption-tag-35"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],[1,"an","an-check"],[1,"an","an-warning-circle"],[1,"an","an-x"],[1,"an","an-info"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","PoTagLiterals"],["href","/documentation/po-i18n"],["pan","",1,"docs-api-property-type","PoTagOrientation"],["pan","",1,"docs-api-property-type","PoTagType"],[1,"docs-api-h4","docs-api-class-name"]],template:function(r,i){r&1&&(Il(0,"div",0)(1,"p",1)(2,"code"),Qx(3,"import { PoTagModule } from '@po-ui/ng-components';"),og()(),Il(4,"div",2)(5,"p"),Qx(6,"M\xF3dulo do componente "),Il(7,"code"),Qx(8,"po-tag"),og(),Qx(9,"."),og()(),Il(10,"h3",3),Qx(11,"Componente"),og(),Il(12,"h4",4)(13,"code",5),Qx(14,"PoTagComponent"),og()(),Il(15,"div",2)(16,"p"),Qx(17,`Este componente permite exibir um valor em forma de um marcador colorido, sendo poss\xEDvel definir uma legenda e realizar customiza\xE7\xF5es
na cor, iconografia e tipo.`),og(),Il(18,"p"),Qx(19,"Al\xE9m disso, \xE9 poss\xEDvel definir uma a\xE7\xE3o que ser\xE1 executada tanto ao "),Il(20,"em"),Qx(21,"click"),og(),Qx(22," quanto atrav\xE9s das teclas "),Il(23,"em"),Qx(24,"enter/space"),og(),Qx(25,` enquanto navega
utilizando a tecla `),Il(26,"em"),Qx(27,"tab"),og(),Qx(28,"."),og(),Il(29,"p"),Qx(30,"Seu uso \xE9 recomendado para informa\xE7\xF5es que necessitem de destaque em forma de marca\xE7\xE3o."),og(),Il(31,"h4"),Qx(32,"Tokens customiz\xE1veis"),og(),Il(33,"p"),Qx(34,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),og(),Il(35,"blockquote")(36,"p"),Qx(37,"Para maiores informa\xE7\xF5es, acesse o guia "),Il(38,"a",6),Qx(39,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),Qx(40,"."),og()(),Il(41,"table")(42,"thead")(43,"tr")(44,"th"),Qx(45,"Propriedade"),og(),Il(46,"th"),Qx(47,"Descri\xE7\xE3o"),og(),Il(48,"th"),Qx(49,"Valor Padr\xE3o"),og()()(),Il(50,"tbody")(51,"tr")(52,"td")(53,"strong"),Qx(54,"Default Values"),og()(),zl(55,"td")(56,"td"),og(),Il(57,"tr")(58,"td")(59,"code"),Qx(60,"--font-family"),og()(),Il(61,"td"),Qx(62,"Fam\xEDlia tipogr\xE1fica usada"),og(),Il(63,"td")(64,"code"),Qx(65,"var(--font-family-theme)"),og()()(),Il(66,"tr")(67,"td")(68,"code"),Qx(69,"--font-size"),og()(),Il(70,"td"),Qx(71,"Tamanho da fonte"),og(),Il(72,"td")(73,"code"),Qx(74,"var(--font-size-sm)"),og()()(),Il(75,"tr")(76,"td")(77,"code"),Qx(78,"--line-height"),og()(),Il(79,"td"),Qx(80,"Tamanho da label"),og(),Il(81,"td")(82,"code"),Qx(83,"var(---line-height-sm)"),og()()(),Il(84,"tr")(85,"td")(86,"code"),Qx(87,"--border-radius"),og()(),Il(88,"td"),Qx(89,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),og(),Il(90,"td")(91,"code"),Qx(92,"var(--border-radius-pill)"),og()()(),Il(93,"tr")(94,"td")(95,"code"),Qx(96,"--gap"),og()(),Il(97,"td"),Qx(98,"Espa\xE7amento entre o label e o value"),og(),Il(99,"td")(100,"code"),Qx(101,"var(--spacing-xs)"),og()()(),Il(102,"tr")(103,"td")(104,"strong"),Qx(105,"Neutral"),og()(),zl(106,"td")(107,"td"),og(),Il(108,"tr")(109,"td")(110,"code"),Qx(111,"--color-neutral"),og()(),Il(112,"td"),Qx(113,"Cor principal no estado neutral"),og(),Il(114,"td")(115,"code"),Qx(116,"var(--color-neutral-light-10)"),og()()(),Il(117,"tr")(118,"td")(119,"code"),Qx(120,"--text-color-positive"),og()(),Il(121,"td"),Qx(122,"Cor do texto no estado neutral"),og(),Il(123,"td")(124,"code"),Qx(125,"var(--color-neutral-dark-80)"),og()()(),Il(126,"tr")(127,"td")(128,"strong"),Qx(129,"Positive"),og()(),zl(130,"td")(131,"td"),og(),Il(132,"tr")(133,"td")(134,"code"),Qx(135,"--color-positive"),og()(),Il(136,"td"),Qx(137,"Cor principal no estado positive"),og(),Il(138,"td")(139,"code"),Qx(140,"var(--color-feedback-positive-lightest)"),og()()(),Il(141,"tr")(142,"td")(143,"code"),Qx(144,"--text-color-positive"),og()(),Il(145,"td"),Qx(146,"Cor do texto no estado positive"),og(),Il(147,"td")(148,"code"),Qx(149,"var(--color-feedback-positive-dark)"),og()()(),Il(150,"tr")(151,"td")(152,"strong"),Qx(153,"Negative"),og()(),zl(154,"td")(155,"td"),og(),Il(156,"tr")(157,"td")(158,"code"),Qx(159,"--color-negative"),og()(),Il(160,"td"),Qx(161,"Cor principal no estado danger"),og(),Il(162,"td")(163,"code"),Qx(164,"var(--color-feedback-negative-lightest)"),og()()(),Il(165,"tr")(166,"td")(167,"code"),Qx(168,"--text-color-negative"),og()(),Il(169,"td"),Qx(170,"Cor do texto no estado danger"),og(),Il(171,"td")(172,"code"),Qx(173,"var(--color-feedback-negative-darker)"),og()()(),Il(174,"tr")(175,"td")(176,"strong"),Qx(177,"Warning"),og()(),zl(178,"td")(179,"td"),og(),Il(180,"tr")(181,"td")(182,"code"),Qx(183,"--color-tag-warning"),og()(),Il(184,"td"),Qx(185,"Cor principal no estado warning"),og(),Il(186,"td")(187,"code"),Qx(188,"var(--color-feedback-warning-lightest)"),og()()(),Il(189,"tr")(190,"td")(191,"code"),Qx(192,"--text-color-warning"),og()(),Il(193,"td"),Qx(194,"Cor do texto no estado warning"),og(),Il(195,"td")(196,"code"),Qx(197,"var(--color-feedback-warning-darkest)"),og()()(),Il(198,"tr")(199,"td")(200,"strong"),Qx(201,"Info"),og()(),zl(202,"td")(203,"td"),og(),Il(204,"tr")(205,"td")(206,"code"),Qx(207,"--color-info"),og()(),Il(208,"td"),Qx(209,"Cor principal no estado info"),og(),Il(210,"td")(211,"code"),Qx(212,"var(--color-feedback-info-lightest)"),og()()(),Il(213,"tr")(214,"td")(215,"code"),Qx(216,"--text-color-info"),og()(),Il(217,"td"),Qx(218,"Cor do texto no estado info"),og(),Il(219,"td")(220,"code"),Qx(221,"var(--color-feedback-info-dark)"),og()()(),Il(222,"tr")(223,"td")(224,"strong"),Qx(225,"Removable"),og()(),zl(226,"td")(227,"td"),og(),Il(228,"tr")(229,"td")(230,"code"),Qx(231,"--color"),og()(),Il(232,"td"),Qx(233,"Cor principal quando removable"),og(),Il(234,"td")(235,"code"),Qx(236,"var(--color-brand-01-lightest)"),og()()(),Il(237,"tr")(238,"td")(239,"code"),Qx(240,"--border-color"),og()(),Il(241,"td"),Qx(242,"Cor de borda quando removable \xA0"),og(),Il(243,"td")(244,"code"),Qx(245,"var(--color-brand-01-lighter)"),og()()(),Il(246,"tr")(247,"td")(248,"code"),Qx(249,"--color-icon"),og()(),Il(250,"td"),Qx(251,"Cor do \xEDcone quando removable \xA0"),og(),Il(252,"td")(253,"code"),Qx(254,"var(--color-action-default)"),og()()(),Il(255,"tr")(256,"td")(257,"code"),Qx(258,"--text-color"),og()(),Il(259,"td"),Qx(260,"Cor do texto quando removable \xA0"),og(),Il(261,"td")(262,"code"),Qx(263,"var(--color-neutral-dark-80)"),og()()(),Il(264,"tr")(265,"td")(266,"code"),Qx(267,"--color-hover"),og()(),Il(268,"td"),Qx(269,"Cor do hover no estado removable \xA0"),og(),Il(270,"td")(271,"code"),Qx(272,"var(--color-brand-01-lighter)"),og()()(),Il(273,"tr")(274,"td")(275,"strong"),Qx(276,"Focused"),og()(),zl(277,"td")(278,"td"),og(),Il(279,"tr")(280,"td")(281,"code"),Qx(282,"--outline-color-focused"),og()(),Il(283,"td"),Qx(284,"Cor do outline do estado de focus"),og(),Il(285,"td")(286,"code"),Qx(287,"var(--color-action-focus)"),og()()(),Il(288,"tr")(289,"td")(290,"strong"),Qx(291,"Disabled"),og()(),zl(292,"td")(293,"td"),og(),Il(294,"tr")(295,"td")(296,"code"),Qx(297,"--color-disabled"),og()(),Il(298,"td"),Qx(299,"Cor principal no estado disabled"),og(),Il(300,"td")(301,"code"),Qx(302,"var(--color-neutral-light-20)"),og()()(),Il(303,"tr")(304,"td")(305,"code"),Qx(306,"--border-color-disabled"),og()(),Il(307,"td"),Qx(308,"Cor da borda no estado disabled \xA0"),og(),Il(309,"td")(310,"code"),Qx(311,"var(--color-action-disabled)"),og()()(),Il(312,"tr")(313,"td")(314,"code"),Qx(315,"--color-icon-disabled"),og()(),Il(316,"td"),Qx(317,"Cor do icone no estado disabled \xA0"),og(),Il(318,"td")(319,"code"),Qx(320,"var(--color-action-disabled)"),og()()(),Il(321,"tr")(322,"td")(323,"code"),Qx(324,"--text-color-disabled"),og()(),Il(325,"td"),Qx(326,"Cor do texto no estado disabled \xA0"),og(),Il(327,"td")(328,"code"),Qx(329,"var(--color-neutral-mid-60)"),og()()()()()(),Il(330,"div",7)(331,"h4",8),Qx(332,"Seletor"),og(),Il(333,"pre",9),Qx(334,`<po-tag
    (p-click)="EventEmitter"
    p-color="string"
    p-disabled="boolean"
    p-icon="string | boolean | TemplateRef<void>"
    p-label="string"
    p-literals="PoTagLiterals"
    p-orientation="PoTagOrientation"
    p-removable="boolean"
    (p-close)="EventEmitter"
    p-text-color="string"
    p-type="PoTagType"
    p-value="string" >
</po-tag>
`),og()(),Il(335,"h4",10),Qx(336,"Propriedades"),og(),Il(337,"table",11)(338,"tr",12)(339,"th",13),Qx(340,"Nome"),og(),Il(341,"th",13),Qx(342,"Tipo"),og(),Il(343,"th",13),Qx(344,"Padr\xE3o"),og(),Il(345,"th",13),Qx(346,"Descri\xE7\xE3o"),og()(),Il(347,"tr",14)(348,"td",15)(349,"div",16)(350,"span",17),Qx(351," (p-click)"),zl(352,"br"),og()()(),Il(353,"td",18)(354,"code",19),Qx(355,"EventEmitter"),og()(),Il(356,"td",20),Qx(357,"-"),og(),Il(358,"td",21)(359,"em")(360,"strong"),Qx(361,"(opcional)"),og()(),Il(362,"p"),Qx(363,"A\xE7\xE3o que ser\xE1 executada ao clicar sobre o "),Il(364,"code"),Qx(365,"po-tag"),og(),Qx(366," e que receber\xE1 como par\xE2metro um objeto contendo o seu valor e tipo."),og(),Il(367,"p"),Qx(368,"O evento de click s\xF3 funciona se a tag n\xE3o for remov\xEDvel."),og()()(),Il(369,"tr",14)(370,"td",15)(371,"div",22)(372,"span",23),Qx(373," p-color"),zl(374,"br"),og()()(),Il(375,"td",18)(376,"code",24),Qx(377,"string"),og()(),Il(378,"td",20),Qx(379,"-"),og(),Il(380,"td",21)(381,"em")(382,"strong"),Qx(383,"(opcional)"),og()(),Il(384,"p"),Qx(385,"Determina a cor da tag. As maneiras de customizar as cores s\xE3o:"),og(),Il(386,"ul")(387,"li"),Qx(388,"Hexadeximal, por exemplo "),Il(389,"code"),Qx(390,"#c64840"),og(),Qx(391,";"),og(),Il(392,"li"),Qx(393,"RGB, como "),Il(394,"code"),Qx(395,"rgb(0, 0, 165)"),og(),Qx(396,";"),og(),Il(397,"li"),Qx(398,"O nome da cor, por exemplo "),Il(399,"code"),Qx(400,"blue"),og(),Qx(401,";"),og(),Il(402,"li"),Qx(403,`Usando uma das cores do tema do PO:
Valores v\xE1lidos:`),Il(404,"ul")(405,"li"),zl(406,"span",25),Il(407,"code"),Qx(408,"color-01"),og()(),Il(409,"li"),zl(410,"span",26),Il(411,"code"),Qx(412,"color-02"),og()(),Il(413,"li"),zl(414,"span",27),Il(415,"code"),Qx(416,"color-03"),og()(),Il(417,"li"),zl(418,"span",28),Il(419,"code"),Qx(420,"color-04"),og()(),Il(421,"li"),zl(422,"span",29),Il(423,"code"),Qx(424,"color-05"),og()(),Il(425,"li"),zl(426,"span",30),Il(427,"code"),Qx(428,"color-06"),og()(),Il(429,"li"),zl(430,"span",31),Il(431,"code"),Qx(432,"color-07"),og()(),Il(433,"li"),zl(434,"span",32),Il(435,"code"),Qx(436,"color-08"),og()(),Il(437,"li"),zl(438,"span",33),Il(439,"code"),Qx(440,"color-09"),og()(),Il(441,"li"),zl(442,"span",34),Il(443,"code"),Qx(444,"color-10"),og()(),Il(445,"li"),zl(446,"span",35),Il(447,"code"),Qx(448,"color-11"),og()(),Il(449,"li"),zl(450,"span",36),Il(451,"code"),Qx(452,"color-12"),og()()()()(),Il(453,"blockquote")(454,"p"),Qx(455,"Tamb\xE9m \xE9 poss\xEDvel utilizar as 35 cores da paleta "),Il(456,"strong"),Qx(457,"Caption Tag Colors"),og(),Qx(458,":"),og()(),Il(459,"ul")(460,"li"),zl(461,"span",37),Il(462,"code"),Qx(463,"caption-tag-01"),og(),zl(464,"span",38),Il(465,"code"),Qx(466,"caption-tag-02"),og(),zl(467,"span",39),Il(468,"code"),Qx(469,"caption-tag-03"),og(),zl(470,"span",40),Il(471,"code"),Qx(472,"caption-tag-04"),og(),zl(473,"span",41),Il(474,"code"),Qx(475,"caption-tag-05"),og()(),Il(476,"li"),zl(477,"span",42),Il(478,"code"),Qx(479,"caption-tag-06"),og(),zl(480,"span",43),Il(481,"code"),Qx(482,"caption-tag-07"),og(),zl(483,"span",44),Il(484,"code"),Qx(485,"caption-tag-08"),og(),zl(486,"span",45),Il(487,"code"),Qx(488,"caption-tag-09"),og(),zl(489,"span",46),Il(490,"code"),Qx(491,"caption-tag-10"),og()(),Il(492,"li"),zl(493,"span",47),Il(494,"code"),Qx(495,"caption-tag-11"),og(),zl(496,"span",48),Il(497,"code"),Qx(498,"caption-tag-12"),og(),zl(499,"span",49),Il(500,"code"),Qx(501,"caption-tag-13"),og(),zl(502,"span",50),Il(503,"code"),Qx(504,"caption-tag-14"),og(),zl(505,"span",51),Il(506,"code"),Qx(507,"caption-tag-15"),og()(),Il(508,"li"),zl(509,"span",52),Il(510,"code"),Qx(511,"caption-tag-16"),og(),zl(512,"span",53),Il(513,"code"),Qx(514,"caption-tag-17"),og(),zl(515,"span",54),Il(516,"code"),Qx(517,"caption-tag-18"),og(),zl(518,"span",55),Il(519,"code"),Qx(520,"caption-tag-19"),og(),zl(521,"span",56),Il(522,"code"),Qx(523,"caption-tag-20"),og()(),Il(524,"li"),zl(525,"span",57),Il(526,"code"),Qx(527,"caption-tag-21"),og(),zl(528,"span",58),Il(529,"code"),Qx(530,"caption-tag-22"),og(),zl(531,"span",59),Il(532,"code"),Qx(533,"caption-tag-23"),og(),zl(534,"span",60),Il(535,"code"),Qx(536,"caption-tag-24"),og(),zl(537,"span",61),Il(538,"code"),Qx(539,"caption-tag-25"),og()(),Il(540,"li"),zl(541,"span",62),Il(542,"code"),Qx(543,"caption-tag-26"),og(),zl(544,"span",63),Il(545,"code"),Qx(546,"caption-tag-27"),og(),zl(547,"span",64),Il(548,"code"),Qx(549,"caption-tag-28"),og(),zl(550,"span",65),Il(551,"code"),Qx(552,"caption-tag-29"),og(),zl(553,"span",66),Il(554,"code"),Qx(555,"caption-tag-30"),og()(),Il(556,"li"),zl(557,"span",67),Il(558,"code"),Qx(559,"caption-tag-31"),og(),zl(560,"span",68),Il(561,"code"),Qx(562,"caption-tag-32"),og(),zl(563,"span",69),Il(564,"code"),Qx(565,"caption-tag-33"),og(),zl(566,"span",70),Il(567,"code"),Qx(568,"caption-tag-34"),og(),zl(569,"span",71),Il(570,"code"),Qx(571,"caption-tag-35"),og()()(),Il(572,"p"),Qx(573,"Exemplo de uso:"),og(),Il(574,"pre")(575,"code"),Qx(576,`<po-tag p-color="caption-tag-15" p-value="Status"></po-tag>
`),og()(),Il(577,"ul")(578,"li"),Qx(579,"Para uma melhor acessibilidade no uso do componente \xE9 recomend\xE1vel utilizar cores com um melhor contraste em rela\xE7\xE3o ao background;"),og(),Il(580,"li"),Qx(581,"Para as cores legacy ("),Il(582,"code"),Qx(583,"color-01"),og(),Qx(584," a "),Il(585,"code"),Qx(586,"color-12"),og(),Qx(587,") e cores customizadas, o componente ajusta automaticamente a cor do texto para garantir legibilidade."),og(),Il(588,"li"),Qx(589,"Para as cores "),Il(590,"strong"),Qx(591,"Caption Tag Colors"),og(),Qx(592," ("),Il(593,"code"),Qx(594,"caption-tag-01"),og(),Qx(595," a "),Il(596,"code"),Qx(597,"caption-tag-35"),og(),Qx(598,"), a cor do texto \xE9 fixa e definida via token CSS, n\xE3o sendo poss\xEDvel alter\xE1-la via "),Il(599,"code"),Qx(600,"p-text-color"),og(),Qx(601,"."),og()(),Il(602,"blockquote")(603,"p")(604,"strong"),Qx(605,"Aten\xE7\xE3o:"),og(),Qx(606," A propriedade "),Il(607,"code"),Qx(608,"p-type"),og(),Qx(609," sobrep\xF5e esta defini\xE7\xE3o."),og()()()(),Il(610,"tr",14)(611,"td",15)(612,"div",22)(613,"span",23),Qx(614," p-disabled"),zl(615,"br"),og()()(),Il(616,"td",18)(617,"code",72),Qx(618,"boolean"),og()(),Il(619,"td",20)(620,"p")(621,"code"),Qx(622,"false"),og()()(),Il(623,"td",21)(624,"em")(625,"strong"),Qx(626,"(opcional)"),og()(),Il(627,"p"),Qx(628,"Desabilita o "),Il(629,"code"),Qx(630,"po-tag"),og(),Qx(631," e n\xE3o permite que o usu\xE1rio interaja com o mesmo."),og(),Il(632,"blockquote")(633,"p"),Qx(634,"A propriedade "),Il(635,"code"),Qx(636,"p-disabled"),og(),Qx(637," somente ter\xE1 efeito caso a propriedade "),Il(638,"code"),Qx(639,"p-removable"),og(),Qx(640," esteja definida como "),Il(641,"code"),Qx(642,"true"),og(),Qx(643,"."),og()()()(),Il(644,"tr",14)(645,"td",15)(646,"div",22)(647,"span",23),Qx(648," p-icon"),zl(649,"br"),og()()(),Il(650,"td",18)(651,"code",24),Qx(652,"string "),og(),Il(653,"code",72),Qx(654," boolean "),og(),Il(655,"code",73),Qx(656," TemplateRef<void>"),og()(),Il(657,"td",20)(658,"p")(659,"code"),Qx(660,"false"),og()()(),Il(661,"td",21)(662,"em")(663,"strong"),Qx(664,"(opcional)"),og()(),Il(665,"p"),Qx(666,"Define ou ativa um \xEDcone que ser\xE1 exibido ao lado do valor da "),Il(667,"em"),Qx(668,"tag"),og(),Qx(669,"."),og(),Il(670,"p"),Qx(671,"Quando "),Il(672,"code"),Qx(673,"p-type"),og(),Qx(674," estiver definida, basta informar um valor igual a "),Il(675,"code"),Qx(676,"true"),og(),Qx(677," para que o \xEDcone seja exibido conforme descri\xE7\xF5es abaixo:"),og(),Il(678,"ul")(679,"li"),zl(680,"span",74),Qx(681," - "),Il(682,"code"),Qx(683,"success"),og()(),Il(684,"li"),zl(685,"span",75),Qx(686," - "),Il(687,"code"),Qx(688,"warning"),og()(),Il(689,"li"),zl(690,"span",76),Qx(691," - "),Il(692,"code"),Qx(693,"danger"),og()(),Il(694,"li"),zl(695,"span",77),Qx(696," - "),Il(697,"code"),Qx(698,"info"),og()()(),Il(699,"p"),Qx(700,"Tamb\xE9m \xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),Il(701,"a",78),Qx(702,"Biblioteca de \xEDcones"),og(),Qx(703,". conforme exemplo abaixo:"),og(),Il(704,"pre")(705,"code"),Qx(706,`<po-tag p-icon="an an-user" p-value="PO Tag"></po-tag>
`),og()(),Il(707,"p"),Qx(708,"como tamb\xE9m utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),Il(709,"em"),Qx(710,"Font Awesome"),og(),Qx(711,", da seguinte forma:"),og(),Il(712,"pre")(713,"code"),Qx(714,`<po-tag p-icon="fa fa-podcast" p-value="PO Tag"></po-button>
`),og()(),Il(715,"p"),Qx(716,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),Il(717,"code"),Qx(718,"TemplateRef"),og(),Qx(719,", conforme exemplo abaixo:"),og(),Il(720,"pre")(721,"code"),Qx(722,`<po-tag [p-icon]="template" p-value="Tag template ionic"></po-button>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),og()(),Il(723,"blockquote")(724,"p"),Qx(725,"Para o \xEDcone enquadrar corretamente, deve-se utilizar "),Il(726,"code"),Qx(727,"font-size: inherit"),og(),Qx(728," caso o \xEDcone utilizado n\xE3o aplique-o."),og()()()(),Il(729,"tr",14)(730,"td",15)(731,"div",22)(732,"span",23),Qx(733," p-label"),zl(734,"br"),og()()(),Il(735,"td",18)(736,"code",24),Qx(737,"string"),og()(),Il(738,"td",20),Qx(739,"-"),og(),Il(740,"td",21)(741,"em")(742,"strong"),Qx(743,"(opcional)"),og()(),Il(744,"p"),Qx(745,"Define uma legenda que ser\xE1 exibida acima ou ao lado da "),Il(746,"em"),Qx(747,"tag"),og(),Qx(748,", de acordo com a "),Il(749,"code"),Qx(750,"p-orientation"),og(),Qx(751,"."),og()()(),Il(752,"tr",14)(753,"td",15)(754,"div",22)(755,"span",23),Qx(756," p-literals"),zl(757,"br"),og()()(),Il(758,"td",18)(759,"code",79),Qx(760,"PoTagLiterals"),og()(),Il(761,"td",20),Qx(762,"-"),og(),Il(763,"td",21)(764,"em")(765,"strong"),Qx(766,"(opcional)"),og()(),Il(767,"p"),Qx(768,"Objeto com as literais usadas no "),Il(769,"code"),Qx(770,"po-tag"),og(),Qx(771,"."),og(),Il(772,"p"),Qx(773,"Para utilizar, basta passar a literal customizada:"),og(),Il(774,"pre")(775,"code"),Qx(776,`const customLiterals: PoTagLiterals = {
  remove: 'Remover itens'
};
`),og()(),Il(777,"p"),Qx(778,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente:"),og(),Il(779,"pre")(780,"code"),Qx(781,`<po-tag
  [p-literals]="customLiterals">
</po-tag>
`),og()(),Il(782,"blockquote")(783,"p"),Qx(784,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),Il(785,"a",80)(786,"code"),Qx(787,"PoI18nService"),og()(),Qx(788," ou do browser."),og()()()(),Il(789,"tr",14)(790,"td",15)(791,"div",22)(792,"span",23),Qx(793," p-orientation"),zl(794,"br"),og()()(),Il(795,"td",18)(796,"code",81),Qx(797,"PoTagOrientation"),og()(),Il(798,"td",20)(799,"p")(800,"code"),Qx(801,"vertical"),og()()(),Il(802,"td",21)(803,"em")(804,"strong"),Qx(805,"(opcional)"),og()(),Il(806,"p"),Qx(807,"Define o "),Il(808,"em"),Qx(809,"layout"),og(),Qx(810," de exibi\xE7\xE3o."),og()()(),Il(811,"tr",14)(812,"td",15)(813,"div",22)(814,"span",23),Qx(815," p-removable"),zl(816,"br"),og()()(),Il(817,"td",18)(818,"code",72),Qx(819,"boolean"),og()(),Il(820,"td",20)(821,"p")(822,"code"),Qx(823,"false"),og()()(),Il(824,"td",21)(825,"em")(826,"strong"),Qx(827,"(opcional)"),og()(),Il(828,"p"),Qx(829,"Habilita a op\xE7\xE3o de remover a tag"),og()()(),Il(830,"tr",14)(831,"td",15)(832,"div",16)(833,"span",17),Qx(834," (p-close)"),zl(835,"br"),og()()(),Il(836,"td",18)(837,"code",19),Qx(838,"EventEmitter"),og()(),Il(839,"td",20),Qx(840,"-"),og(),Il(841,"td",21)(842,"em")(843,"strong"),Qx(844,"(opcional)"),og()(),Il(845,"p"),Qx(846,"A\xE7\xE3o que sera executada quando clicar sobre o \xEDcone de remover no "),Il(847,"code"),Qx(848,"po-tag"),og()()()(),Il(849,"tr",14)(850,"td",15)(851,"div",22)(852,"span",23),Qx(853," p-text-color"),zl(854,"br"),og()()(),Il(855,"td",18)(856,"code",24),Qx(857,"string"),og()(),Il(858,"td",20),Qx(859,"-"),og(),Il(860,"td",21)(861,"em")(862,"strong"),Qx(863,"(opcional)"),og()(),Il(864,"p"),Qx(865,"Determina a cor do texto da tag. As maneiras de customizar as cores s\xE3o:"),og(),Il(866,"ul")(867,"li")(868,"p"),Qx(869,"Hexadeximal, por exemplo "),Il(870,"code"),Qx(871,"#c64840"),og(),Qx(872,";"),og()(),Il(873,"li")(874,"p"),Qx(875,"RGB, como "),Il(876,"code"),Qx(877,"rgb(0, 0, 165)"),og(),Qx(878,";"),og()(),Il(879,"li")(880,"p"),Qx(881,"O nome da cor, por exemplo "),Il(882,"code"),Qx(883,"blue"),og(),Qx(884,";"),og()(),Il(885,"li")(886,"p"),Qx(887,`Usando uma das cores do tema do PO:
Valores v\xE1lidos:`),og(),Il(888,"ul")(889,"li"),zl(890,"span",25),Il(891,"code"),Qx(892,"color-01"),og()(),Il(893,"li"),zl(894,"span",26),Il(895,"code"),Qx(896,"color-02"),og()(),Il(897,"li"),zl(898,"span",27),Il(899,"code"),Qx(900,"color-03"),og()(),Il(901,"li"),zl(902,"span",28),Il(903,"code"),Qx(904,"color-04"),og()(),Il(905,"li"),zl(906,"span",29),Il(907,"code"),Qx(908,"color-05"),og()(),Il(909,"li"),zl(910,"span",30),Il(911,"code"),Qx(912,"color-06"),og()(),Il(913,"li"),zl(914,"span",31),Il(915,"code"),Qx(916,"color-07"),og()(),Il(917,"li"),zl(918,"span",32),Il(919,"code"),Qx(920,"color-08"),og()(),Il(921,"li"),zl(922,"span",33),Il(923,"code"),Qx(924,"color-09"),og()(),Il(925,"li"),zl(926,"span",34),Il(927,"code"),Qx(928,"color-10"),og()(),Il(929,"li"),zl(930,"span",35),Il(931,"code"),Qx(932,"color-11"),og()(),Il(933,"li"),zl(934,"span",36),Il(935,"code"),Qx(936,"color-12"),og()()()(),Il(937,"li")(938,"p"),Qx(939,"Para uma melhor acessibilidade no uso do componente \xE9 recomend\xE1vel utilizar cores com um melhor contraste em rela\xE7\xE3o ao background."),og()()(),Il(940,"blockquote")(941,"p")(942,"strong"),Qx(943,"Aten\xE7\xE3o:"),og(),Qx(944," A propriedade "),Il(945,"code"),Qx(946,"p-type"),og(),Qx(947," sobrep\xF5e esta defini\xE7\xE3o."),og()(),Il(948,"blockquote")(949,"p")(950,"strong"),Qx(951,"Aten\xE7\xE3o:"),og(),Qx(952," As cores da paleta "),Il(953,"strong"),Qx(954,"Caption Tag Colors"),og(),Qx(955," ("),Il(956,"code"),Qx(957,"caption-tag-01"),og(),Qx(958," a "),Il(959,"code"),Qx(960,"caption-tag-35"),og(),Qx(961,`) n\xE3o s\xE3o aceitas nesta propriedade,
pois possuem cor de texto fixa definida via token CSS.`),og()()()(),Il(962,"tr",14)(963,"td",15)(964,"div",22)(965,"span",23),Qx(966," p-type"),zl(967,"br"),og()()(),Il(968,"td",18)(969,"code",82),Qx(970,"PoTagType"),og()(),Il(971,"td",20)(972,"p")(973,"code"),Qx(974,"info"),og()()(),Il(975,"td",21)(976,"em")(977,"strong"),Qx(978,"(opcional)"),og()(),Il(979,"p"),Qx(980,"Define o tipo da "),Il(981,"em"),Qx(982,"tag"),og(),Qx(983,"."),og(),Il(984,"p"),Qx(985,"Valores v\xE1lidos:"),og(),Il(986,"ul")(987,"li")(988,"code"),Qx(989,"success"),og(),Qx(990,": cor verde utilizada para simbolizar sucesso ou \xEAxito."),og(),Il(991,"li")(992,"code"),Qx(993,"warning"),og(),Qx(994,": cor amarela que representa aviso ou advert\xEAncia."),og(),Il(995,"li")(996,"code"),Qx(997,"danger"),og(),Qx(998,": cor vermelha para erro ou aviso cr\xEDtico."),og(),Il(999,"li")(1e3,"code"),Qx(1001,"info"),og(),Qx(1002,": cor azul claro que caracteriza conte\xFAdo informativo."),og(),Il(1003,"li")(1004,"code"),Qx(1005,"neutral"),og(),Qx(1006,": cor cinza claro para uso geral."),og()(),Il(1007,"blockquote")(1008,"p"),Qx(1009,"Quando esta propriedade for definida, ir\xE1 sobrepor a defini\xE7\xE3o de "),Il(1010,"code"),Qx(1011,"p-color"),og(),Qx(1012," e "),Il(1013,"code"),Qx(1014,"p-icon"),og(),Qx(1015," somente ser\xE1 exibido caso seja "),Il(1016,"code"),Qx(1017,"true"),og(),Qx(1018,"."),og()()()(),Il(1019,"tr",14)(1020,"td",15)(1021,"div",22)(1022,"span",23),Qx(1023," p-value"),zl(1024,"br"),og()()(),Il(1025,"td",18)(1026,"code",24),Qx(1027,"string"),og()(),Il(1028,"td",20),Qx(1029,"-"),og(),Il(1030,"td",21)(1031,"p"),Qx(1032,"Texto da tag."),og()()()(),Il(1033,"h3"),Qx(1034,"Interfaces"),og(),Il(1035,"h4",83)(1036,"code",5),Qx(1037,"PoTagLiterals"),og()(),Il(1038,"div",2)(1039,"p"),Qx(1040,"Interface para defini\xE7\xE3o das literais usadas no "),Il(1041,"code"),Qx(1042,"po-tag"),og(),Qx(1043,"."),og()(),Il(1044,"h4",10),Qx(1045,"Propriedades"),og(),Il(1046,"table",11)(1047,"tr",12)(1048,"th",13),Qx(1049,"Nome"),og(),Il(1050,"th",13),Qx(1051,"Tipo"),og(),Il(1052,"th",13),Qx(1053,"Descri\xE7\xE3o"),og()(),Il(1054,"tr",14)(1055,"td",15)(1056,"div",22)(1057,"span",23),Qx(1058," remove"),zl(1059,"br"),og()()(),Il(1060,"td",18)(1061,"code",24),Qx(1062,"string"),og()(),Il(1063,"td",21)(1064,"em")(1065,"strong"),Qx(1066,"(opcional)"),og()(),Il(1067,"p"),Qx(1068,"Texto exibido no tooltip indicando remo\xE7\xE3o da tag."),og()()()(),Il(1069,"h3"),Qx(1070,"Enums"),og(),Il(1071,"h4",4)(1072,"code",5),Qx(1073,"PoTagOrientation"),og()(),Il(1074,"div",2)(1075,"p"),Qx(1076,"Define os tipos de orienta\xE7\xF5es dispon\xEDveis para o "),Il(1077,"code"),Qx(1078,"po-tag"),og(),Qx(1079,"."),og()(),Il(1080,"h4",10),Qx(1081,"Propriedades"),og(),Il(1082,"table",11)(1083,"tr",12)(1084,"th",13),Qx(1085,"Nome"),og(),Il(1086,"th",13),Qx(1087,"Descri\xE7\xE3o"),og()(),Il(1088,"tr",14)(1089,"td",15)(1090,"div",22)(1091,"span",23),Qx(1092," Horizontal"),zl(1093,"br"),og()()(),Il(1094,"td",21)(1095,"p"),Qx(1096,"A tag ser\xE1 exibida na horizontal, ao lado direito em rela\xE7\xE3o ao label."),og()()(),Il(1097,"tr",14)(1098,"td",15)(1099,"div",22)(1100,"span",23),Qx(1101," Vertical"),zl(1102,"br"),og()()(),Il(1103,"td",21)(1104,"p"),Qx(1105,"Exibe a tag na vertical, ou seja, abaixo do label."),og()()()(),Il(1106,"h4",4)(1107,"code",5),Qx(1108,"PoTagType"),og()(),Il(1109,"div",2)(1110,"p"),Qx(1111,"Define os tipos dispon\xEDveis para o "),Il(1112,"code"),Qx(1113,"po-tag"),og(),Qx(1114,"."),og()(),Il(1115,"h4",10),Qx(1116,"Propriedades"),og(),Il(1117,"table",11)(1118,"tr",12)(1119,"th",13),Qx(1120,"Nome"),og(),Il(1121,"th",13),Qx(1122,"Descri\xE7\xE3o"),og()(),Il(1123,"tr",14)(1124,"td",15)(1125,"div",22)(1126,"span",23),Qx(1127," Danger"),zl(1128,"br"),og()()(),Il(1129,"td",21)(1130,"p"),Qx(1131,"Erro, perigo, problema ou aviso cr\xEDtico."),og()()(),Il(1132,"tr",14)(1133,"td",15)(1134,"div",22)(1135,"span",23),Qx(1136," Info"),zl(1137,"br"),og()()(),Il(1138,"td",21)(1139,"p"),Qx(1140,"Informativo ou explicativo."),og()()(),Il(1141,"tr",14)(1142,"td",15)(1143,"div",22)(1144,"span",23),Qx(1145," Success"),zl(1146,"br"),og()()(),Il(1147,"td",21)(1148,"p"),Qx(1149,"Confirma\xE7\xE3o, resultados positivos ou \xEAxito."),og()()(),Il(1150,"tr",14)(1151,"td",15)(1152,"div",22)(1153,"span",23),Qx(1154," Warning"),zl(1155,"br"),og()()(),Il(1156,"td",21)(1157,"p"),Qx(1158,"Aviso ou advert\xEAncia."),og()()(),Il(1159,"tr",14)(1160,"td",15)(1161,"div",22)(1162,"span",23),Qx(1163," Neutral"),zl(1164,"br"),og()()(),Il(1165,"td",21)(1166,"p"),Qx(1167,"De uso geral, quando os tipos Info, Warning, Success e Danger n\xE3o atendem a necessidade."),og()()()()());},dependencies:[Ka],encapsulation:2})}return a})();var Pe=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(l,r){this.route=l,this.router=r;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let r=l.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:"merge"}),this.activeTab=l;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(r){return new(r||a)(C(Xn),C(En))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:9,vars:4,consts:[["p-title","Tag",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,i){r&1&&(Il(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return i.changeTab("doc")}),zl(3,"sample-po-tag-doc"),og(),Il(4,"po-tab",3),ft("p-click",function(){return i.changeTab("web")}),zl(5,"sample-po-tag-basic-view")(6,"sample-po-tag-labs-view")(7,"sample-po-tag-bank-account-view")(8,"sample-po-tag-caption-tag-colors-view"),og()()()),r&2&&(nw("p-actions",i.actions),Lp(2),nw("p-active",i.activeTab==="doc"),Lp(2),nw("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[cNe,qme,Yme,Ee,ve,he,Te,ye],encapsulation:2})}return a})();var Ke=[{path:"",component:Pe}],we=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue({imports:[uL.forChild(Ke),uL]})}return a})();var _t=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue({imports:[sr,we]})}return a})();export{_t as DocPoTagModule};