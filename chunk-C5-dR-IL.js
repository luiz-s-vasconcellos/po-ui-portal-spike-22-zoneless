import {f as fe$1,u as ue,s as sr,m as mL,w,c3 as Xn,E as En,U as Un,dG as ev,dH as Es,bI as Sa,F as Wl,an as SO,aH as Ka,b8 as Ume,b9 as $me,C as Sl,y as rN,J as og,a1 as ft,L as Lp,ar as Gx,au as dg,O as rw,bs as gN,aX as Q9,aF as Z9,aY as K9,aG as wk,aZ as _k,b0 as Qt,b1 as mv,c4 as b3,b4 as L3,c8 as Tde,aJ as Whe,bH as k3,c9 as jhe,aB as Ix,aM as Cw,aN as n0,aq as px,aO as ww,aP as i0,at as gx,cn as o3,a3 as sNe,ba as vNe,aQ as yx,aR as vx,br as lN,aS as _x,aA as xx,cH as cN,aD as Ky,aT as oN,aE as Xy}from'./main-TVDUJ47Y.js';var Se=(()=>{class o{static \u0275fac=function(r){return new(r||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-tag-basic"]],standalone:false,decls:1,vars:0,consts:[["p-value","PO Tag"]],template:function(r,i){r&1&&Wl(0,"po-tag",0);},dependencies:[Sa],encapsulation:2,changeDetection:1})}return o})();var ke=o=>({"docs-sample-code-tabs":o}),Ee=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-tag-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),rN(3,"PO Tag Basic"),og(),Sl(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),rN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),rN(12,"sample-po-tag-basic/sample-po-tag-basic.component.html"),og(),Sl(13,"pre",7),rN(14,`<po-tag p-value="PO Tag"> </po-tag>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),rN(18,"sample-po-tag-basic/sample-po-tag-basic.component.ts"),og(),Sl(19,"pre",9),rN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-tag-basic',
  templateUrl: './sample-po-tag-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTagBasicComponent {}
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-tag-basic"),og(),Wl(23,"hr")),r&2&&(Lp(5),Gx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),rw("ngClass",gN(4,ke,i.hideSampleCodeTabs)));},dependencies:[SO,Ka,Ume,$me,Se],encapsulation:2,changeDetection:1})}return o})();function Me(o,c){if(o&1){let l=Ix();Sl(0,"po-select",14),Cw("ngModelChange",function(i){Ky(l);let g=xx();return oN(g.icon,i)||(g.icon=i),Xy(i)}),og(),n0();}if(o&2){let l=xx();ww("ngModel",l.icon),rw("p-options",l.iconList),i0();}}function Be(o,c){if(o&1){let l=Ix();Sl(0,"po-switch",15),Cw("ngModelChange",function(i){Ky(l);let g=xx();return oN(g.icon,i)||(g.icon=i),Xy(i)}),og(),n0();}if(o&2){let l=xx();ww("ngModel",l.icon),i0();}}var xe=(()=>{class o{color;event;icon;textColor;label;orientation;type;value;properties;propertiesOptions=[{value:"removable",label:"Removable"}];iconList=[{label:"an an-bluetooth",value:"an an-bluetooth"},{label:"an an-heart",value:"an an-heart"},{label:"an an-lightbulb",value:"an an-lightbulb"},{label:"an an-star",value:"an an-star"},{label:"an an-gear",value:"an an-gear"},{label:"an an-globe",value:"an an-globe"},{label:"fa fa-address-card",value:"fa fa-address-card"},{label:"fa fa-bell",value:"fa fa-bell"}];orientationOptions=[{label:"Horizontal",value:ev.Horizontal},{label:"Vertical",value:ev.Vertical}];typeOptions=[{label:"None",value:void 0},{label:"Info",value:Es.Info},{label:"Danger",value:Es.Danger},{label:"Success",value:Es.Success},{label:"Warning",value:Es.Warning},{label:"Neutral",value:Es.Neutral}];ngOnInit(){this.restore();}changeEvent(l){this.event=l;}propertiesChange(l){let r=[...this.propertiesOptions];l.includes("removable")?(r[1]={value:"disabled",label:"Disabled",disabled:false},this.propertiesOptions=r):this.propertiesOptions=r.filter(i=>i.value!=="disabled");}restore(){this.color=void 0,this.icon=void 0,this.label=void 0,this.orientation=void 0,this.value="PO Tag",this.type=void 0,this.event="",this.textColor=void 0,this.properties=[];}static \u0275fac=function(r){return new(r||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-tag-labs"]],standalone:false,decls:21,vars:22,consts:[["f","ngForm"],[3,"p-click","p-color","p-disabled","p-removable","p-icon","p-text-color","p-label","p-orientation","p-type","p-value"],[1,"po-row"],["p-label","Events",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","value","p-clean","","p-label","Value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","color","p-clean","","p-label","Color","p-help","color-01, caption-tag-01, red, rgb(201, 53, 125), #753399",1,"po-md-6",3,"ngModelChange","ngModel"],["name","textColor","p-clean","","p-label","Text color","p-help","color-01, red, rgb(201, 53, 125), #753399",1,"po-md-6",3,"ngModelChange","ngModel"],["name","icon","p-label","Icon",1,"po-md-6","po-mt-2",3,"ngModel","p-options"],["name","properties","p-label","Properties",1,"po-md-6","po-mt-2",3,"ngModelChange","p-change","ngModel","p-options"],["name","icon","p-label","Icon",1,"po-md-6",3,"ngModel"],["name","orientation","p-columns","1","p-label","Orientation",1,"po-md-4",3,"ngModelChange","ngModel","p-options"],["name","type","p-columns","3","p-label","Type",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"],["name","icon","p-label","Icon",1,"po-md-6","po-mt-2",3,"ngModelChange","ngModel","p-options"],["name","icon","p-label","Icon",1,"po-md-6",3,"ngModelChange","ngModel"]],template:function(r,i){if(r&1){let g=Ix();Sl(0,"po-tag",1),ft("p-click",function(){return i.changeEvent("p-click")}),og(),Wl(1,"po-divider"),Sl(2,"div",2),Wl(3,"po-info",3),og(),Wl(4,"po-divider"),Sl(5,"form",null,0)(7,"div",2)(8,"po-input",4),Cw("ngModelChange",function(d){return Ky(g),oN(i.label,d)||(i.label=d),Xy(d)}),og(),n0(),Sl(9,"po-input",5),Cw("ngModelChange",function(d){return Ky(g),oN(i.value,d)||(i.value=d),Xy(d)}),og(),n0(),og(),Sl(10,"div",2)(11,"po-input",6),Cw("ngModelChange",function(d){return Ky(g),oN(i.color,d)||(i.color=d),Xy(d)}),og(),n0(),Sl(12,"po-input",7),Cw("ngModelChange",function(d){return Ky(g),oN(i.textColor,d)||(i.textColor=d),Xy(d)}),og(),n0(),px(13,Me,1,2,"po-select",8),Sl(14,"po-checkbox-group",9),Cw("ngModelChange",function(d){return Ky(g),oN(i.properties,d)||(i.properties=d),Xy(d)}),ft("p-change",function(d){return i.propertiesChange(d)}),og(),n0(),px(15,Be,1,1,"po-switch",10),og(),Sl(16,"div",2)(17,"po-radio-group",11),Cw("ngModelChange",function(d){return Ky(g),oN(i.orientation,d)||(i.orientation=d),Xy(d)}),og(),n0(),Sl(18,"po-radio-group",12),Cw("ngModelChange",function(d){return Ky(g),oN(i.type,d)||(i.type=d),Xy(d)}),og(),n0(),og(),Sl(19,"div",2)(20,"po-button",13),ft("p-click",function(){return i.restore()}),og()()();}r&2&&(rw("p-color",i.color)("p-disabled",i.properties.includes("disabled"))("p-removable",i.properties.includes("removable"))("p-icon",i.icon)("p-text-color",i.textColor)("p-label",i.label)("p-orientation",i.orientation)("p-type",i.type)("p-value",i.value),Lp(3),rw("p-value",i.event),Lp(5),ww("ngModel",i.label),i0(),Lp(),ww("ngModel",i.value),i0(),Lp(2),ww("ngModel",i.color),i0(),Lp(),ww("ngModel",i.textColor),i0(),Lp(),gx(i.type?-1:13),Lp(),ww("ngModel",i.properties),rw("p-options",i.propertiesOptions),i0(),Lp(),gx(i.type?15:-1),Lp(2),ww("ngModel",i.orientation),rw("p-options",i.orientationOptions),i0(),Lp(),ww("ngModel",i.type),rw("p-options",i.typeOptions),i0());},dependencies:[Q9,Z9,K9,wk,_k,Qt,mv,b3,L3,Tde,Whe,k3,Sa,jhe],styles:[".sample-tag-color-circle[_ngcontent-%COMP%]{border-radius:10px;display:inline-block;height:16px;margin-right:4px;vertical-align:middle;width:16px}"],changeDetection:1})}return o})();var Fe=o=>({"docs-sample-code-tabs":o}),ve=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-tag-labs-view"]],standalone:false,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),rN(3,"PO Tag Labs"),og(),Sl(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),rN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),rN(12,"sample-po-tag-labs/sample-po-tag-labs.component.html"),og(),Sl(13,"pre",7),rN(14,`<po-tag
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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),rN(18,"sample-po-tag-labs/sample-po-tag-labs.component.ts"),og(),Sl(19,"pre",9),rN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()(),Sl(21,"po-tab",10)(22,"div")(23,"label",6),rN(24,"sample-po-tag-labs/sample-po-tag-labs.component.css"),og(),Sl(25,"pre",11),rN(26,`.sample-tag-color-circle {
  border-radius: 10px;
  display: inline-block;
  height: 16px;
  margin-right: 4px;
  vertical-align: middle;
  width: 16px;
}
`),og()()()()(),Sl(27,"div",12),Wl(28,"sample-po-tag-labs"),og(),Wl(29,"hr")),r&2&&(Lp(5),Gx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),rw("ngClass",gN(4,Fe,i.hideSampleCodeTabs)));},dependencies:[SO,Ka,Ume,$me,xe],encapsulation:2,changeDetection:1})}return o})();function Oe(o,c){if(o&1&&Wl(0,"po-tag",12),o&2){let l=c.$implicit;rw("p-label",l.label)("p-type",l.type)("p-value",l.value);}}function Ie(o,c){if(o&1&&(Sl(0,"po-widget",15)(1,"div",3),Wl(2,"po-info",16)(3,"po-tag",17),og()()),o&2){let l=c.$implicit;Lp(2),rw("p-label",l.label)("p-value",l.value),Lp(),rw("p-type",l.type)("p-value",l.text);}}function Ve(o,c){if(o&1&&(Sl(0,"po-tab",14),yx(1,Ie,4,4,"po-widget",15,vx),og()),o&2){let l=c.$implicit;rw("p-label",cN(l.month)),Lp(),_x(l.details);}}var fe=(()=>{class o{investiments=[{label:"Stocks",type:"danger",value:"Low -3.50%"},{label:"Treasury bills",type:"success",value:"Growing +2.25%"},{label:"Real estate",type:"warning",value:"Risk -0.02%"},{label:"Mutual fund",type:"success",value:"Growing +3.00%"}];items=[{month:"June",details:[{label:"Automatic Payment",value:"$ 250",type:"danger",text:"Expense"},{label:"Deposit",value:"$ 500",type:"success",text:"Income"},{label:"Bank receipt",value:"$ 10",type:"info",text:"Document"},{label:"Credit Card",value:"$ 230",type:"danger",text:"Expense"},{label:"Personal Loan",value:"$ 150",type:"warning",text:"Future"}]},{month:"July",details:[{label:"Deposit",value:"$ 500",type:"success",text:"Income"},{label:"Car insurance",value:"$ 40",type:"danger",text:"Expense"},{label:"Deposit",value:"$ 200",type:"success",text:"Income"},{label:"Bank statement",value:"$ 5",type:"info",text:"Document"},{label:"Deposit",value:"$ 70",type:"success",text:"Income"}]},{month:"August",details:[{label:"Student Loan",value:"$ 250",type:"danger",text:"Expense"},{label:"Deposit",value:"$ 50",type:"success",text:"Income"},{label:"Bank receipt",value:"$ 10",type:"info",text:"Document"},{label:"Automatic Payment",value:"$ 230",type:"warning",text:"Future"},{label:"Credit Card",value:"$ 150",type:"warning",text:"Future"}]}];advantages=[{title:"Platinum Card:",description:"best card in the market. You earn points and have concierge service and cultural advice."},{title:"Exclusive agencies:",description:"environments designed to offer comfort and privacy."},{title:"Unique experience",description:"with exclusivity background in travel, culture, entertainment and much more."},{title:"Progressive discounts",description:"on service packages, according to the volume of investments."},{title:"Free tax:",description:"withdrawals and Transfers Between Unlimited Accounts."}];userData={name:"Natasha Romanova",email:"natasha.romanova@po-ui.com.br",photo:"avatar2.png"};static \u0275fac=function(r){return new(r||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-tag-bank-account"]],standalone:false,decls:20,vars:4,consts:[["p-title","Bank Statement"],[1,"po-mt-1","po-lg-7"],["p-title","User information",1,"po-md-12","po-sm-mb-1","po-mb-1","po-lg-mb-1"],[1,"po-row"],[1,"po-md-5","po-lg-4"],["p-size","xl",3,"p-src"],[1,"po-md-7","po-lg-8"],[1,"po-mb-2"],["p-label","Name",3,"p-value"],["p-value","Premium Account"],["p-label","Email",1,"po-mt-5",3,"p-value"],["p-title","My Investiments",1,"po-md-12","po-sm-mt-1","po-mt-1","po-lg-mt-1"],[1,"po-md-6","po-lg-3",3,"p-label","p-type","p-value"],["p-title","Last three month operations",1,"po-mt-1","po-lg-5"],["p-active","",3,"p-label"],[1,"po-lg-12","po-sm-mb-1","po-mb-1","po-lg-mb-1"],["p-label-size","6","p-orientation","horizontal",1,"po-lg-9","po-md-8",3,"p-label","p-value"],["p-icon","","p-orientation","horizontal",1,"po-lg-3","po-md-4",3,"p-type","p-value"]],template:function(r,i){r&1&&(Sl(0,"po-page-default",0)(1,"div",1)(2,"po-widget",2)(3,"div",3)(4,"div",4),Wl(5,"po-avatar",5),og(),Sl(6,"div",6)(7,"div",7),Wl(8,"po-info",8)(9,"po-tag",9),og(),Sl(10,"div",7),Wl(11,"po-info",10),og()()()(),Sl(12,"po-widget",11)(13,"div",3),yx(14,Oe,1,3,"po-tag",12,vx),og()()(),Sl(16,"po-widget",13)(17,"po-tabs"),yx(18,Ve,3,2,"po-tab",14,vx),og()()()),r&2&&(Lp(5),rw("p-src",lN("assets/graphics/",i.userData.photo)),Lp(3),rw("p-value",i.userData.name),Lp(3),rw("p-value",i.userData.email),Lp(3),_x(i.investiments),Lp(4),_x(i.items));},dependencies:[o3,Sa,jhe,sNe,Ume,$me,vNe],encapsulation:2,changeDetection:1})}return o})();var qe=o=>({"docs-sample-code-tabs":o}),he=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-tag-bank-account-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),rN(3,"PO Tag - Bank Account"),og(),Sl(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),rN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),rN(12,"sample-po-tag-bank-account/sample-po-tag-bank-account.component.html"),og(),Sl(13,"pre",7),rN(14,`<po-page-default p-title="Bank Statement">
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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),rN(18,"sample-po-tag-bank-account/sample-po-tag-bank-account.component.ts"),og(),Sl(19,"pre",9),rN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-tag-bank-account"),og(),Wl(23,"hr")),r&2&&(Lp(5),Gx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),rw("ngClass",gN(4,qe,i.hideSampleCodeTabs)));},dependencies:[SO,Ka,Ume,$me,fe],encapsulation:2,changeDetection:1})}return o})();var j=(o,c)=>c.color,Ne=(o,c)=>c.name;function He(o,c){if(o&1&&Wl(0,"po-tag",3),o&2){let l=c.$implicit;rw("p-color",l.color)("p-value",l.label);}}function Re(o,c){if(o&1&&Wl(0,"po-tag",5),o&2){let l=c.$implicit;rw("p-color",l.color)("p-label",l.label)("p-value",l.value);}}function $e(o,c){if(o&1&&Wl(0,"po-tag",7),o&2){let l=c.$implicit;rw("p-color",l.color)("p-icon",l.icon)("p-value",l.label);}}function je(o,c){if(o&1&&Wl(0,"po-tag",10),o&2){let l=c.$implicit;rw("p-color",l.color)("p-value",l.label);}}function Ge(o,c){if(o&1&&(Sl(0,"po-tab",9)(1,"div",2),yx(2,je,1,2,"po-tag",10,j),og()()),o&2){let l=c.$implicit;rw("p-label",l.name),Lp(2),_x(l.tags);}}var Ce=(()=>{class o{captionTags=Array.from({length:35},(l,r)=>{let i=String(r+1).padStart(2,"0");return {label:`Caption Tag ${i}`,color:`caption-tag-${i}`}});statusItems=[{label:"Ativo",value:"Em operacao",color:"caption-tag-01"},{label:"Pendente",value:"Aguardando aprovacao",color:"caption-tag-06"},{label:"Em analise",value:"Verificacao interna",color:"caption-tag-11"},{label:"Concluido",value:"Finalizado com sucesso",color:"caption-tag-16"},{label:"Cancelado",value:"Operacao cancelada",color:"caption-tag-21"},{label:"Expirado",value:"Prazo excedido",color:"caption-tag-26"},{label:"Bloqueado",value:"Acesso restrito",color:"caption-tag-31"}];categories=[{label:"Financeiro",color:"caption-tag-03",icon:"an an-currency-circle-dollar"},{label:"Recursos Humanos",color:"caption-tag-08",icon:"an an-users"},{label:"Logistica",color:"caption-tag-13",icon:"an an-truck"},{label:"Vendas",color:"caption-tag-18",icon:"an an-shopping-cart-simple"},{label:"Suporte",color:"caption-tag-23",icon:"an an-headset"},{label:"Marketing",color:"caption-tag-28",icon:"an an-megaphone-simple"},{label:"TI",color:"caption-tag-33",icon:"an an-desktop-tower"}];families=[{name:"Familia 01-05",tags:[{label:"caption-tag-01",color:"caption-tag-01"},{label:"caption-tag-02",color:"caption-tag-02"},{label:"caption-tag-03",color:"caption-tag-03"},{label:"caption-tag-04",color:"caption-tag-04"},{label:"caption-tag-05",color:"caption-tag-05"}]},{name:"Familia 06-10",tags:[{label:"caption-tag-06",color:"caption-tag-06"},{label:"caption-tag-07",color:"caption-tag-07"},{label:"caption-tag-08",color:"caption-tag-08"},{label:"caption-tag-09",color:"caption-tag-09"},{label:"caption-tag-10",color:"caption-tag-10"}]},{name:"Familia 11-15",tags:[{label:"caption-tag-11",color:"caption-tag-11"},{label:"caption-tag-12",color:"caption-tag-12"},{label:"caption-tag-13",color:"caption-tag-13"},{label:"caption-tag-14",color:"caption-tag-14"},{label:"caption-tag-15",color:"caption-tag-15"}]},{name:"Familia 16-20",tags:[{label:"caption-tag-16",color:"caption-tag-16"},{label:"caption-tag-17",color:"caption-tag-17"},{label:"caption-tag-18",color:"caption-tag-18"},{label:"caption-tag-19",color:"caption-tag-19"},{label:"caption-tag-20",color:"caption-tag-20"}]},{name:"Familia 21-25",tags:[{label:"caption-tag-21",color:"caption-tag-21"},{label:"caption-tag-22",color:"caption-tag-22"},{label:"caption-tag-23",color:"caption-tag-23"},{label:"caption-tag-24",color:"caption-tag-24"},{label:"caption-tag-25",color:"caption-tag-25"}]},{name:"Familia 26-30",tags:[{label:"caption-tag-26",color:"caption-tag-26"},{label:"caption-tag-27",color:"caption-tag-27"},{label:"caption-tag-28",color:"caption-tag-28"},{label:"caption-tag-29",color:"caption-tag-29"},{label:"caption-tag-30",color:"caption-tag-30"}]},{name:"Familia 31-35",tags:[{label:"caption-tag-31",color:"caption-tag-31"},{label:"caption-tag-32",color:"caption-tag-32"},{label:"caption-tag-33",color:"caption-tag-33"},{label:"caption-tag-34",color:"caption-tag-34"},{label:"caption-tag-35",color:"caption-tag-35"}]}];static \u0275fac=function(r){return new(r||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-tag-caption-tag-colors"]],standalone:false,decls:17,vars:0,consts:[["p-title","Caption Tag Colors"],["p-title","Paleta completa - 35 cores",1,"po-md-12","po-mb-1"],[1,"po-row"],[1,"po-md-3","po-lg-2","po-mb-1",3,"p-color","p-value"],["p-title","Status de processos",1,"po-md-12","po-mb-1"],["p-orientation","horizontal",1,"po-md-4","po-lg-3","po-mb-1",3,"p-color","p-label","p-value"],["p-title","Categorias com icones",1,"po-md-12"],[1,"po-md-4","po-lg-3","po-mb-1",3,"p-color","p-icon","p-value"],["p-title","Familias de cores",1,"po-md-12","po-mb-1"],[3,"p-label"],[1,"po-md-4","po-lg-2","po-mb-1",3,"p-color","p-value"]],template:function(r,i){r&1&&(Sl(0,"po-page-default",0)(1,"po-widget",1)(2,"div",2),yx(3,He,1,2,"po-tag",3,j),og()(),Sl(5,"po-widget",4)(6,"div",2),yx(7,Re,1,3,"po-tag",5,j),og()(),Sl(9,"po-widget",6)(10,"div",2),yx(11,$e,1,3,"po-tag",7,j),og()(),Sl(13,"po-widget",8)(14,"po-tabs"),yx(15,Ge,4,1,"po-tab",9,Ne),og()()()),r&2&&(Lp(3),_x(i.captionTags),Lp(4),_x(i.statusItems),Lp(4),_x(i.categories),Lp(4),_x(i.families));},dependencies:[Sa,sNe,Ume,$me,vNe],encapsulation:2,changeDetection:1})}return o})();var Je=o=>({"docs-sample-code-tabs":o}),Te=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-tag-caption-tag-colors-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),rN(3,"PO Tag - Caption Tag Colors"),og(),Sl(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),rN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),rN(12,"sample-po-tag-caption-tag-colors/sample-po-tag-caption-tag-colors.component.html"),og(),Sl(13,"pre",7),rN(14,`<po-page-default p-title="Caption Tag Colors">
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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),rN(18,"sample-po-tag-caption-tag-colors/sample-po-tag-caption-tag-colors.component.ts"),og(),Sl(19,"pre",9),rN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-tag-caption-tag-colors"),og(),Wl(23,"hr")),r&2&&(Lp(5),Gx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),rw("ngClass",gN(4,Je,i.hideSampleCodeTabs)));},dependencies:[SO,Ka,Ume,$me,Ce],encapsulation:2,changeDetection:1})}return o})();var ye=(()=>{class o{static \u0275fac=function(r){return new(r||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-tag-doc"]],standalone:false,decls:1168,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],[1,"dot","po-color-01"],[1,"dot","po-color-02"],[1,"dot","po-color-03"],[1,"dot","po-color-04"],[1,"dot","po-color-05"],[1,"dot","po-color-06"],[1,"dot","po-color-07"],[1,"dot","po-color-08"],[1,"dot","po-color-09"],[1,"dot","po-color-10"],[1,"dot","po-color-11"],[1,"dot","po-color-12"],[1,"dot","po-caption-tag-01"],[1,"dot","po-caption-tag-02"],[1,"dot","po-caption-tag-03"],[1,"dot","po-caption-tag-04"],[1,"dot","po-caption-tag-05"],[1,"dot","po-caption-tag-06"],[1,"dot","po-caption-tag-07"],[1,"dot","po-caption-tag-08"],[1,"dot","po-caption-tag-09"],[1,"dot","po-caption-tag-10"],[1,"dot","po-caption-tag-11"],[1,"dot","po-caption-tag-12"],[1,"dot","po-caption-tag-13"],[1,"dot","po-caption-tag-14"],[1,"dot","po-caption-tag-15"],[1,"dot","po-caption-tag-16"],[1,"dot","po-caption-tag-17"],[1,"dot","po-caption-tag-18"],[1,"dot","po-caption-tag-19"],[1,"dot","po-caption-tag-20"],[1,"dot","po-caption-tag-21"],[1,"dot","po-caption-tag-22"],[1,"dot","po-caption-tag-23"],[1,"dot","po-caption-tag-24"],[1,"dot","po-caption-tag-25"],[1,"dot","po-caption-tag-26"],[1,"dot","po-caption-tag-27"],[1,"dot","po-caption-tag-28"],[1,"dot","po-caption-tag-29"],[1,"dot","po-caption-tag-30"],[1,"dot","po-caption-tag-31"],[1,"dot","po-caption-tag-32"],[1,"dot","po-caption-tag-33"],[1,"dot","po-caption-tag-34"],[1,"dot","po-caption-tag-35"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],[1,"an","an-check"],[1,"an","an-warning-circle"],[1,"an","an-x"],[1,"an","an-info"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","PoTagLiterals"],["href","/documentation/po-i18n"],["pan","",1,"docs-api-property-type","PoTagOrientation"],["pan","",1,"docs-api-property-type","PoTagType"],[1,"docs-api-h4","docs-api-class-name"]],template:function(r,i){r&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),rN(3,"import { PoTagModule } from '@po-ui/ng-components';"),og()(),Sl(4,"div",2)(5,"p"),rN(6,"M\xF3dulo do componente "),Sl(7,"code"),rN(8,"po-tag"),og(),rN(9,"."),og()(),Sl(10,"h3",3),rN(11,"Componente"),og(),Sl(12,"h4",4)(13,"code",5),rN(14,"PoTagComponent"),og()(),Sl(15,"div",2)(16,"p"),rN(17,`Este componente permite exibir um valor em forma de um marcador colorido, sendo poss\xEDvel definir uma legenda e realizar customiza\xE7\xF5es
na cor, iconografia e tipo.`),og(),Sl(18,"p"),rN(19,"Al\xE9m disso, \xE9 poss\xEDvel definir uma a\xE7\xE3o que ser\xE1 executada tanto ao "),Sl(20,"em"),rN(21,"click"),og(),rN(22," quanto atrav\xE9s das teclas "),Sl(23,"em"),rN(24,"enter/space"),og(),rN(25,` enquanto navega
utilizando a tecla `),Sl(26,"em"),rN(27,"tab"),og(),rN(28,"."),og(),Sl(29,"p"),rN(30,"Seu uso \xE9 recomendado para informa\xE7\xF5es que necessitem de destaque em forma de marca\xE7\xE3o."),og(),Sl(31,"h4"),rN(32,"Tokens customiz\xE1veis"),og(),Sl(33,"p"),rN(34,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),og(),Sl(35,"blockquote")(36,"p"),rN(37,"Para maiores informa\xE7\xF5es, acesse o guia "),Sl(38,"a",6),rN(39,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),rN(40,"."),og()(),Sl(41,"table")(42,"thead")(43,"tr")(44,"th"),rN(45,"Propriedade"),og(),Sl(46,"th"),rN(47,"Descri\xE7\xE3o"),og(),Sl(48,"th"),rN(49,"Valor Padr\xE3o"),og()()(),Sl(50,"tbody")(51,"tr")(52,"td")(53,"strong"),rN(54,"Default Values"),og()(),Wl(55,"td")(56,"td"),og(),Sl(57,"tr")(58,"td")(59,"code"),rN(60,"--font-family"),og()(),Sl(61,"td"),rN(62,"Fam\xEDlia tipogr\xE1fica usada"),og(),Sl(63,"td")(64,"code"),rN(65,"var(--font-family-theme)"),og()()(),Sl(66,"tr")(67,"td")(68,"code"),rN(69,"--font-size"),og()(),Sl(70,"td"),rN(71,"Tamanho da fonte"),og(),Sl(72,"td")(73,"code"),rN(74,"var(--font-size-sm)"),og()()(),Sl(75,"tr")(76,"td")(77,"code"),rN(78,"--line-height"),og()(),Sl(79,"td"),rN(80,"Tamanho da label"),og(),Sl(81,"td")(82,"code"),rN(83,"var(---line-height-sm)"),og()()(),Sl(84,"tr")(85,"td")(86,"code"),rN(87,"--border-radius"),og()(),Sl(88,"td"),rN(89,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),og(),Sl(90,"td")(91,"code"),rN(92,"var(--border-radius-pill)"),og()()(),Sl(93,"tr")(94,"td")(95,"code"),rN(96,"--gap"),og()(),Sl(97,"td"),rN(98,"Espa\xE7amento entre o label e o value"),og(),Sl(99,"td")(100,"code"),rN(101,"var(--spacing-xs)"),og()()(),Sl(102,"tr")(103,"td")(104,"strong"),rN(105,"Neutral"),og()(),Wl(106,"td")(107,"td"),og(),Sl(108,"tr")(109,"td")(110,"code"),rN(111,"--color-neutral"),og()(),Sl(112,"td"),rN(113,"Cor principal no estado neutral"),og(),Sl(114,"td")(115,"code"),rN(116,"var(--color-neutral-light-10)"),og()()(),Sl(117,"tr")(118,"td")(119,"code"),rN(120,"--text-color-positive"),og()(),Sl(121,"td"),rN(122,"Cor do texto no estado neutral"),og(),Sl(123,"td")(124,"code"),rN(125,"var(--color-neutral-dark-80)"),og()()(),Sl(126,"tr")(127,"td")(128,"strong"),rN(129,"Positive"),og()(),Wl(130,"td")(131,"td"),og(),Sl(132,"tr")(133,"td")(134,"code"),rN(135,"--color-positive"),og()(),Sl(136,"td"),rN(137,"Cor principal no estado positive"),og(),Sl(138,"td")(139,"code"),rN(140,"var(--color-feedback-positive-lightest)"),og()()(),Sl(141,"tr")(142,"td")(143,"code"),rN(144,"--text-color-positive"),og()(),Sl(145,"td"),rN(146,"Cor do texto no estado positive"),og(),Sl(147,"td")(148,"code"),rN(149,"var(--color-feedback-positive-dark)"),og()()(),Sl(150,"tr")(151,"td")(152,"strong"),rN(153,"Negative"),og()(),Wl(154,"td")(155,"td"),og(),Sl(156,"tr")(157,"td")(158,"code"),rN(159,"--color-negative"),og()(),Sl(160,"td"),rN(161,"Cor principal no estado danger"),og(),Sl(162,"td")(163,"code"),rN(164,"var(--color-feedback-negative-lightest)"),og()()(),Sl(165,"tr")(166,"td")(167,"code"),rN(168,"--text-color-negative"),og()(),Sl(169,"td"),rN(170,"Cor do texto no estado danger"),og(),Sl(171,"td")(172,"code"),rN(173,"var(--color-feedback-negative-darker)"),og()()(),Sl(174,"tr")(175,"td")(176,"strong"),rN(177,"Warning"),og()(),Wl(178,"td")(179,"td"),og(),Sl(180,"tr")(181,"td")(182,"code"),rN(183,"--color-tag-warning"),og()(),Sl(184,"td"),rN(185,"Cor principal no estado warning"),og(),Sl(186,"td")(187,"code"),rN(188,"var(--color-feedback-warning-lightest)"),og()()(),Sl(189,"tr")(190,"td")(191,"code"),rN(192,"--text-color-warning"),og()(),Sl(193,"td"),rN(194,"Cor do texto no estado warning"),og(),Sl(195,"td")(196,"code"),rN(197,"var(--color-feedback-warning-darkest)"),og()()(),Sl(198,"tr")(199,"td")(200,"strong"),rN(201,"Info"),og()(),Wl(202,"td")(203,"td"),og(),Sl(204,"tr")(205,"td")(206,"code"),rN(207,"--color-info"),og()(),Sl(208,"td"),rN(209,"Cor principal no estado info"),og(),Sl(210,"td")(211,"code"),rN(212,"var(--color-feedback-info-lightest)"),og()()(),Sl(213,"tr")(214,"td")(215,"code"),rN(216,"--text-color-info"),og()(),Sl(217,"td"),rN(218,"Cor do texto no estado info"),og(),Sl(219,"td")(220,"code"),rN(221,"var(--color-feedback-info-dark)"),og()()(),Sl(222,"tr")(223,"td")(224,"strong"),rN(225,"Removable"),og()(),Wl(226,"td")(227,"td"),og(),Sl(228,"tr")(229,"td")(230,"code"),rN(231,"--color"),og()(),Sl(232,"td"),rN(233,"Cor principal quando removable"),og(),Sl(234,"td")(235,"code"),rN(236,"var(--color-brand-01-lightest)"),og()()(),Sl(237,"tr")(238,"td")(239,"code"),rN(240,"--border-color"),og()(),Sl(241,"td"),rN(242,"Cor de borda quando removable \xA0"),og(),Sl(243,"td")(244,"code"),rN(245,"var(--color-brand-01-lighter)"),og()()(),Sl(246,"tr")(247,"td")(248,"code"),rN(249,"--color-icon"),og()(),Sl(250,"td"),rN(251,"Cor do \xEDcone quando removable \xA0"),og(),Sl(252,"td")(253,"code"),rN(254,"var(--color-action-default)"),og()()(),Sl(255,"tr")(256,"td")(257,"code"),rN(258,"--text-color"),og()(),Sl(259,"td"),rN(260,"Cor do texto quando removable \xA0"),og(),Sl(261,"td")(262,"code"),rN(263,"var(--color-neutral-dark-80)"),og()()(),Sl(264,"tr")(265,"td")(266,"code"),rN(267,"--color-hover"),og()(),Sl(268,"td"),rN(269,"Cor do hover no estado removable \xA0"),og(),Sl(270,"td")(271,"code"),rN(272,"var(--color-brand-01-lighter)"),og()()(),Sl(273,"tr")(274,"td")(275,"strong"),rN(276,"Focused"),og()(),Wl(277,"td")(278,"td"),og(),Sl(279,"tr")(280,"td")(281,"code"),rN(282,"--outline-color-focused"),og()(),Sl(283,"td"),rN(284,"Cor do outline do estado de focus"),og(),Sl(285,"td")(286,"code"),rN(287,"var(--color-action-focus)"),og()()(),Sl(288,"tr")(289,"td")(290,"strong"),rN(291,"Disabled"),og()(),Wl(292,"td")(293,"td"),og(),Sl(294,"tr")(295,"td")(296,"code"),rN(297,"--color-disabled"),og()(),Sl(298,"td"),rN(299,"Cor principal no estado disabled"),og(),Sl(300,"td")(301,"code"),rN(302,"var(--color-neutral-light-20)"),og()()(),Sl(303,"tr")(304,"td")(305,"code"),rN(306,"--border-color-disabled"),og()(),Sl(307,"td"),rN(308,"Cor da borda no estado disabled \xA0"),og(),Sl(309,"td")(310,"code"),rN(311,"var(--color-action-disabled)"),og()()(),Sl(312,"tr")(313,"td")(314,"code"),rN(315,"--color-icon-disabled"),og()(),Sl(316,"td"),rN(317,"Cor do icone no estado disabled \xA0"),og(),Sl(318,"td")(319,"code"),rN(320,"var(--color-action-disabled)"),og()()(),Sl(321,"tr")(322,"td")(323,"code"),rN(324,"--text-color-disabled"),og()(),Sl(325,"td"),rN(326,"Cor do texto no estado disabled \xA0"),og(),Sl(327,"td")(328,"code"),rN(329,"var(--color-neutral-mid-60)"),og()()()()()(),Sl(330,"div",7)(331,"h4",8),rN(332,"Seletor"),og(),Sl(333,"pre",9),rN(334,`<po-tag
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
`),og()(),Sl(335,"h4",10),rN(336,"Propriedades"),og(),Sl(337,"table",11)(338,"tr",12)(339,"th",13),rN(340,"Nome"),og(),Sl(341,"th",13),rN(342,"Tipo"),og(),Sl(343,"th",13),rN(344,"Padr\xE3o"),og(),Sl(345,"th",13),rN(346,"Descri\xE7\xE3o"),og()(),Sl(347,"tr",14)(348,"td",15)(349,"div",16)(350,"span",17),rN(351," (p-click)"),Wl(352,"br"),og()()(),Sl(353,"td",18)(354,"code",19),rN(355,"EventEmitter"),og()(),Sl(356,"td",20),rN(357,"-"),og(),Sl(358,"td",21)(359,"em")(360,"strong"),rN(361,"(opcional)"),og()(),Sl(362,"p"),rN(363,"A\xE7\xE3o que ser\xE1 executada ao clicar sobre o "),Sl(364,"code"),rN(365,"po-tag"),og(),rN(366," e que receber\xE1 como par\xE2metro um objeto contendo o seu valor e tipo."),og(),Sl(367,"p"),rN(368,"O evento de click s\xF3 funciona se a tag n\xE3o for remov\xEDvel."),og()()(),Sl(369,"tr",14)(370,"td",15)(371,"div",22)(372,"span",23),rN(373," p-color"),Wl(374,"br"),og()()(),Sl(375,"td",18)(376,"code",24),rN(377,"string"),og()(),Sl(378,"td",20),rN(379,"-"),og(),Sl(380,"td",21)(381,"em")(382,"strong"),rN(383,"(opcional)"),og()(),Sl(384,"p"),rN(385,"Determina a cor da tag. As maneiras de customizar as cores s\xE3o:"),og(),Sl(386,"ul")(387,"li"),rN(388,"Hexadeximal, por exemplo "),Sl(389,"code"),rN(390,"#c64840"),og(),rN(391,";"),og(),Sl(392,"li"),rN(393,"RGB, como "),Sl(394,"code"),rN(395,"rgb(0, 0, 165)"),og(),rN(396,";"),og(),Sl(397,"li"),rN(398,"O nome da cor, por exemplo "),Sl(399,"code"),rN(400,"blue"),og(),rN(401,";"),og(),Sl(402,"li"),rN(403,`Usando uma das cores do tema do PO:
Valores v\xE1lidos:`),Sl(404,"ul")(405,"li"),Wl(406,"span",25),Sl(407,"code"),rN(408,"color-01"),og()(),Sl(409,"li"),Wl(410,"span",26),Sl(411,"code"),rN(412,"color-02"),og()(),Sl(413,"li"),Wl(414,"span",27),Sl(415,"code"),rN(416,"color-03"),og()(),Sl(417,"li"),Wl(418,"span",28),Sl(419,"code"),rN(420,"color-04"),og()(),Sl(421,"li"),Wl(422,"span",29),Sl(423,"code"),rN(424,"color-05"),og()(),Sl(425,"li"),Wl(426,"span",30),Sl(427,"code"),rN(428,"color-06"),og()(),Sl(429,"li"),Wl(430,"span",31),Sl(431,"code"),rN(432,"color-07"),og()(),Sl(433,"li"),Wl(434,"span",32),Sl(435,"code"),rN(436,"color-08"),og()(),Sl(437,"li"),Wl(438,"span",33),Sl(439,"code"),rN(440,"color-09"),og()(),Sl(441,"li"),Wl(442,"span",34),Sl(443,"code"),rN(444,"color-10"),og()(),Sl(445,"li"),Wl(446,"span",35),Sl(447,"code"),rN(448,"color-11"),og()(),Sl(449,"li"),Wl(450,"span",36),Sl(451,"code"),rN(452,"color-12"),og()()()()(),Sl(453,"blockquote")(454,"p"),rN(455,"Tamb\xE9m \xE9 poss\xEDvel utilizar as 35 cores da paleta "),Sl(456,"strong"),rN(457,"Caption Tag Colors"),og(),rN(458,":"),og()(),Sl(459,"ul")(460,"li"),Wl(461,"span",37),Sl(462,"code"),rN(463,"caption-tag-01"),og(),Wl(464,"span",38),Sl(465,"code"),rN(466,"caption-tag-02"),og(),Wl(467,"span",39),Sl(468,"code"),rN(469,"caption-tag-03"),og(),Wl(470,"span",40),Sl(471,"code"),rN(472,"caption-tag-04"),og(),Wl(473,"span",41),Sl(474,"code"),rN(475,"caption-tag-05"),og()(),Sl(476,"li"),Wl(477,"span",42),Sl(478,"code"),rN(479,"caption-tag-06"),og(),Wl(480,"span",43),Sl(481,"code"),rN(482,"caption-tag-07"),og(),Wl(483,"span",44),Sl(484,"code"),rN(485,"caption-tag-08"),og(),Wl(486,"span",45),Sl(487,"code"),rN(488,"caption-tag-09"),og(),Wl(489,"span",46),Sl(490,"code"),rN(491,"caption-tag-10"),og()(),Sl(492,"li"),Wl(493,"span",47),Sl(494,"code"),rN(495,"caption-tag-11"),og(),Wl(496,"span",48),Sl(497,"code"),rN(498,"caption-tag-12"),og(),Wl(499,"span",49),Sl(500,"code"),rN(501,"caption-tag-13"),og(),Wl(502,"span",50),Sl(503,"code"),rN(504,"caption-tag-14"),og(),Wl(505,"span",51),Sl(506,"code"),rN(507,"caption-tag-15"),og()(),Sl(508,"li"),Wl(509,"span",52),Sl(510,"code"),rN(511,"caption-tag-16"),og(),Wl(512,"span",53),Sl(513,"code"),rN(514,"caption-tag-17"),og(),Wl(515,"span",54),Sl(516,"code"),rN(517,"caption-tag-18"),og(),Wl(518,"span",55),Sl(519,"code"),rN(520,"caption-tag-19"),og(),Wl(521,"span",56),Sl(522,"code"),rN(523,"caption-tag-20"),og()(),Sl(524,"li"),Wl(525,"span",57),Sl(526,"code"),rN(527,"caption-tag-21"),og(),Wl(528,"span",58),Sl(529,"code"),rN(530,"caption-tag-22"),og(),Wl(531,"span",59),Sl(532,"code"),rN(533,"caption-tag-23"),og(),Wl(534,"span",60),Sl(535,"code"),rN(536,"caption-tag-24"),og(),Wl(537,"span",61),Sl(538,"code"),rN(539,"caption-tag-25"),og()(),Sl(540,"li"),Wl(541,"span",62),Sl(542,"code"),rN(543,"caption-tag-26"),og(),Wl(544,"span",63),Sl(545,"code"),rN(546,"caption-tag-27"),og(),Wl(547,"span",64),Sl(548,"code"),rN(549,"caption-tag-28"),og(),Wl(550,"span",65),Sl(551,"code"),rN(552,"caption-tag-29"),og(),Wl(553,"span",66),Sl(554,"code"),rN(555,"caption-tag-30"),og()(),Sl(556,"li"),Wl(557,"span",67),Sl(558,"code"),rN(559,"caption-tag-31"),og(),Wl(560,"span",68),Sl(561,"code"),rN(562,"caption-tag-32"),og(),Wl(563,"span",69),Sl(564,"code"),rN(565,"caption-tag-33"),og(),Wl(566,"span",70),Sl(567,"code"),rN(568,"caption-tag-34"),og(),Wl(569,"span",71),Sl(570,"code"),rN(571,"caption-tag-35"),og()()(),Sl(572,"p"),rN(573,"Exemplo de uso:"),og(),Sl(574,"pre")(575,"code"),rN(576,`<po-tag p-color="caption-tag-15" p-value="Status"></po-tag>
`),og()(),Sl(577,"ul")(578,"li"),rN(579,"Para uma melhor acessibilidade no uso do componente \xE9 recomend\xE1vel utilizar cores com um melhor contraste em rela\xE7\xE3o ao background;"),og(),Sl(580,"li"),rN(581,"Para as cores legacy ("),Sl(582,"code"),rN(583,"color-01"),og(),rN(584," a "),Sl(585,"code"),rN(586,"color-12"),og(),rN(587,") e cores customizadas, o componente ajusta automaticamente a cor do texto para garantir legibilidade."),og(),Sl(588,"li"),rN(589,"Para as cores "),Sl(590,"strong"),rN(591,"Caption Tag Colors"),og(),rN(592," ("),Sl(593,"code"),rN(594,"caption-tag-01"),og(),rN(595," a "),Sl(596,"code"),rN(597,"caption-tag-35"),og(),rN(598,"), a cor do texto \xE9 fixa e definida via token CSS, n\xE3o sendo poss\xEDvel alter\xE1-la via "),Sl(599,"code"),rN(600,"p-text-color"),og(),rN(601,"."),og()(),Sl(602,"blockquote")(603,"p")(604,"strong"),rN(605,"Aten\xE7\xE3o:"),og(),rN(606," A propriedade "),Sl(607,"code"),rN(608,"p-type"),og(),rN(609," sobrep\xF5e esta defini\xE7\xE3o."),og()()()(),Sl(610,"tr",14)(611,"td",15)(612,"div",22)(613,"span",23),rN(614," p-disabled"),Wl(615,"br"),og()()(),Sl(616,"td",18)(617,"code",72),rN(618,"boolean"),og()(),Sl(619,"td",20)(620,"p")(621,"code"),rN(622,"false"),og()()(),Sl(623,"td",21)(624,"em")(625,"strong"),rN(626,"(opcional)"),og()(),Sl(627,"p"),rN(628,"Desabilita o "),Sl(629,"code"),rN(630,"po-tag"),og(),rN(631," e n\xE3o permite que o usu\xE1rio interaja com o mesmo."),og(),Sl(632,"blockquote")(633,"p"),rN(634,"A propriedade "),Sl(635,"code"),rN(636,"p-disabled"),og(),rN(637," somente ter\xE1 efeito caso a propriedade "),Sl(638,"code"),rN(639,"p-removable"),og(),rN(640," esteja definida como "),Sl(641,"code"),rN(642,"true"),og(),rN(643,"."),og()()()(),Sl(644,"tr",14)(645,"td",15)(646,"div",22)(647,"span",23),rN(648," p-icon"),Wl(649,"br"),og()()(),Sl(650,"td",18)(651,"code",24),rN(652,"string "),og(),Sl(653,"code",72),rN(654," boolean "),og(),Sl(655,"code",73),rN(656," TemplateRef<void>"),og()(),Sl(657,"td",20)(658,"p")(659,"code"),rN(660,"false"),og()()(),Sl(661,"td",21)(662,"em")(663,"strong"),rN(664,"(opcional)"),og()(),Sl(665,"p"),rN(666,"Define ou ativa um \xEDcone que ser\xE1 exibido ao lado do valor da "),Sl(667,"em"),rN(668,"tag"),og(),rN(669,"."),og(),Sl(670,"p"),rN(671,"Quando "),Sl(672,"code"),rN(673,"p-type"),og(),rN(674," estiver definida, basta informar um valor igual a "),Sl(675,"code"),rN(676,"true"),og(),rN(677," para que o \xEDcone seja exibido conforme descri\xE7\xF5es abaixo:"),og(),Sl(678,"ul")(679,"li"),Wl(680,"span",74),rN(681," - "),Sl(682,"code"),rN(683,"success"),og()(),Sl(684,"li"),Wl(685,"span",75),rN(686," - "),Sl(687,"code"),rN(688,"warning"),og()(),Sl(689,"li"),Wl(690,"span",76),rN(691," - "),Sl(692,"code"),rN(693,"danger"),og()(),Sl(694,"li"),Wl(695,"span",77),rN(696," - "),Sl(697,"code"),rN(698,"info"),og()()(),Sl(699,"p"),rN(700,"Tamb\xE9m \xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),Sl(701,"a",78),rN(702,"Biblioteca de \xEDcones"),og(),rN(703,". conforme exemplo abaixo:"),og(),Sl(704,"pre")(705,"code"),rN(706,`<po-tag p-icon="an an-user" p-value="PO Tag"></po-tag>
`),og()(),Sl(707,"p"),rN(708,"como tamb\xE9m utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),Sl(709,"em"),rN(710,"Font Awesome"),og(),rN(711,", da seguinte forma:"),og(),Sl(712,"pre")(713,"code"),rN(714,`<po-tag p-icon="fa fa-podcast" p-value="PO Tag"></po-button>
`),og()(),Sl(715,"p"),rN(716,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),Sl(717,"code"),rN(718,"TemplateRef"),og(),rN(719,", conforme exemplo abaixo:"),og(),Sl(720,"pre")(721,"code"),rN(722,`<po-tag [p-icon]="template" p-value="Tag template ionic"></po-button>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),og()(),Sl(723,"blockquote")(724,"p"),rN(725,"Para o \xEDcone enquadrar corretamente, deve-se utilizar "),Sl(726,"code"),rN(727,"font-size: inherit"),og(),rN(728," caso o \xEDcone utilizado n\xE3o aplique-o."),og()()()(),Sl(729,"tr",14)(730,"td",15)(731,"div",22)(732,"span",23),rN(733," p-label"),Wl(734,"br"),og()()(),Sl(735,"td",18)(736,"code",24),rN(737,"string"),og()(),Sl(738,"td",20),rN(739,"-"),og(),Sl(740,"td",21)(741,"em")(742,"strong"),rN(743,"(opcional)"),og()(),Sl(744,"p"),rN(745,"Define uma legenda que ser\xE1 exibida acima ou ao lado da "),Sl(746,"em"),rN(747,"tag"),og(),rN(748,", de acordo com a "),Sl(749,"code"),rN(750,"p-orientation"),og(),rN(751,"."),og()()(),Sl(752,"tr",14)(753,"td",15)(754,"div",22)(755,"span",23),rN(756," p-literals"),Wl(757,"br"),og()()(),Sl(758,"td",18)(759,"code",79),rN(760,"PoTagLiterals"),og()(),Sl(761,"td",20),rN(762,"-"),og(),Sl(763,"td",21)(764,"em")(765,"strong"),rN(766,"(opcional)"),og()(),Sl(767,"p"),rN(768,"Objeto com as literais usadas no "),Sl(769,"code"),rN(770,"po-tag"),og(),rN(771,"."),og(),Sl(772,"p"),rN(773,"Para utilizar, basta passar a literal customizada:"),og(),Sl(774,"pre")(775,"code"),rN(776,`const customLiterals: PoTagLiterals = {
  remove: 'Remover itens'
};
`),og()(),Sl(777,"p"),rN(778,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente:"),og(),Sl(779,"pre")(780,"code"),rN(781,`<po-tag
  [p-literals]="customLiterals">
</po-tag>
`),og()(),Sl(782,"blockquote")(783,"p"),rN(784,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),Sl(785,"a",80)(786,"code"),rN(787,"PoI18nService"),og()(),rN(788," ou do browser."),og()()()(),Sl(789,"tr",14)(790,"td",15)(791,"div",22)(792,"span",23),rN(793," p-orientation"),Wl(794,"br"),og()()(),Sl(795,"td",18)(796,"code",81),rN(797,"PoTagOrientation"),og()(),Sl(798,"td",20)(799,"p")(800,"code"),rN(801,"vertical"),og()()(),Sl(802,"td",21)(803,"em")(804,"strong"),rN(805,"(opcional)"),og()(),Sl(806,"p"),rN(807,"Define o "),Sl(808,"em"),rN(809,"layout"),og(),rN(810," de exibi\xE7\xE3o."),og()()(),Sl(811,"tr",14)(812,"td",15)(813,"div",22)(814,"span",23),rN(815," p-removable"),Wl(816,"br"),og()()(),Sl(817,"td",18)(818,"code",72),rN(819,"boolean"),og()(),Sl(820,"td",20)(821,"p")(822,"code"),rN(823,"false"),og()()(),Sl(824,"td",21)(825,"em")(826,"strong"),rN(827,"(opcional)"),og()(),Sl(828,"p"),rN(829,"Habilita a op\xE7\xE3o de remover a tag"),og()()(),Sl(830,"tr",14)(831,"td",15)(832,"div",16)(833,"span",17),rN(834," (p-close)"),Wl(835,"br"),og()()(),Sl(836,"td",18)(837,"code",19),rN(838,"EventEmitter"),og()(),Sl(839,"td",20),rN(840,"-"),og(),Sl(841,"td",21)(842,"em")(843,"strong"),rN(844,"(opcional)"),og()(),Sl(845,"p"),rN(846,"A\xE7\xE3o que sera executada quando clicar sobre o \xEDcone de remover no "),Sl(847,"code"),rN(848,"po-tag"),og()()()(),Sl(849,"tr",14)(850,"td",15)(851,"div",22)(852,"span",23),rN(853," p-text-color"),Wl(854,"br"),og()()(),Sl(855,"td",18)(856,"code",24),rN(857,"string"),og()(),Sl(858,"td",20),rN(859,"-"),og(),Sl(860,"td",21)(861,"em")(862,"strong"),rN(863,"(opcional)"),og()(),Sl(864,"p"),rN(865,"Determina a cor do texto da tag. As maneiras de customizar as cores s\xE3o:"),og(),Sl(866,"ul")(867,"li")(868,"p"),rN(869,"Hexadeximal, por exemplo "),Sl(870,"code"),rN(871,"#c64840"),og(),rN(872,";"),og()(),Sl(873,"li")(874,"p"),rN(875,"RGB, como "),Sl(876,"code"),rN(877,"rgb(0, 0, 165)"),og(),rN(878,";"),og()(),Sl(879,"li")(880,"p"),rN(881,"O nome da cor, por exemplo "),Sl(882,"code"),rN(883,"blue"),og(),rN(884,";"),og()(),Sl(885,"li")(886,"p"),rN(887,`Usando uma das cores do tema do PO:
Valores v\xE1lidos:`),og(),Sl(888,"ul")(889,"li"),Wl(890,"span",25),Sl(891,"code"),rN(892,"color-01"),og()(),Sl(893,"li"),Wl(894,"span",26),Sl(895,"code"),rN(896,"color-02"),og()(),Sl(897,"li"),Wl(898,"span",27),Sl(899,"code"),rN(900,"color-03"),og()(),Sl(901,"li"),Wl(902,"span",28),Sl(903,"code"),rN(904,"color-04"),og()(),Sl(905,"li"),Wl(906,"span",29),Sl(907,"code"),rN(908,"color-05"),og()(),Sl(909,"li"),Wl(910,"span",30),Sl(911,"code"),rN(912,"color-06"),og()(),Sl(913,"li"),Wl(914,"span",31),Sl(915,"code"),rN(916,"color-07"),og()(),Sl(917,"li"),Wl(918,"span",32),Sl(919,"code"),rN(920,"color-08"),og()(),Sl(921,"li"),Wl(922,"span",33),Sl(923,"code"),rN(924,"color-09"),og()(),Sl(925,"li"),Wl(926,"span",34),Sl(927,"code"),rN(928,"color-10"),og()(),Sl(929,"li"),Wl(930,"span",35),Sl(931,"code"),rN(932,"color-11"),og()(),Sl(933,"li"),Wl(934,"span",36),Sl(935,"code"),rN(936,"color-12"),og()()()(),Sl(937,"li")(938,"p"),rN(939,"Para uma melhor acessibilidade no uso do componente \xE9 recomend\xE1vel utilizar cores com um melhor contraste em rela\xE7\xE3o ao background."),og()()(),Sl(940,"blockquote")(941,"p")(942,"strong"),rN(943,"Aten\xE7\xE3o:"),og(),rN(944," A propriedade "),Sl(945,"code"),rN(946,"p-type"),og(),rN(947," sobrep\xF5e esta defini\xE7\xE3o."),og()(),Sl(948,"blockquote")(949,"p")(950,"strong"),rN(951,"Aten\xE7\xE3o:"),og(),rN(952," As cores da paleta "),Sl(953,"strong"),rN(954,"Caption Tag Colors"),og(),rN(955," ("),Sl(956,"code"),rN(957,"caption-tag-01"),og(),rN(958," a "),Sl(959,"code"),rN(960,"caption-tag-35"),og(),rN(961,`) n\xE3o s\xE3o aceitas nesta propriedade,
pois possuem cor de texto fixa definida via token CSS.`),og()()()(),Sl(962,"tr",14)(963,"td",15)(964,"div",22)(965,"span",23),rN(966," p-type"),Wl(967,"br"),og()()(),Sl(968,"td",18)(969,"code",82),rN(970,"PoTagType"),og()(),Sl(971,"td",20)(972,"p")(973,"code"),rN(974,"info"),og()()(),Sl(975,"td",21)(976,"em")(977,"strong"),rN(978,"(opcional)"),og()(),Sl(979,"p"),rN(980,"Define o tipo da "),Sl(981,"em"),rN(982,"tag"),og(),rN(983,"."),og(),Sl(984,"p"),rN(985,"Valores v\xE1lidos:"),og(),Sl(986,"ul")(987,"li")(988,"code"),rN(989,"success"),og(),rN(990,": cor verde utilizada para simbolizar sucesso ou \xEAxito."),og(),Sl(991,"li")(992,"code"),rN(993,"warning"),og(),rN(994,": cor amarela que representa aviso ou advert\xEAncia."),og(),Sl(995,"li")(996,"code"),rN(997,"danger"),og(),rN(998,": cor vermelha para erro ou aviso cr\xEDtico."),og(),Sl(999,"li")(1e3,"code"),rN(1001,"info"),og(),rN(1002,": cor azul claro que caracteriza conte\xFAdo informativo."),og(),Sl(1003,"li")(1004,"code"),rN(1005,"neutral"),og(),rN(1006,": cor cinza claro para uso geral."),og()(),Sl(1007,"blockquote")(1008,"p"),rN(1009,"Quando esta propriedade for definida, ir\xE1 sobrepor a defini\xE7\xE3o de "),Sl(1010,"code"),rN(1011,"p-color"),og(),rN(1012," e "),Sl(1013,"code"),rN(1014,"p-icon"),og(),rN(1015," somente ser\xE1 exibido caso seja "),Sl(1016,"code"),rN(1017,"true"),og(),rN(1018,"."),og()()()(),Sl(1019,"tr",14)(1020,"td",15)(1021,"div",22)(1022,"span",23),rN(1023," p-value"),Wl(1024,"br"),og()()(),Sl(1025,"td",18)(1026,"code",24),rN(1027,"string"),og()(),Sl(1028,"td",20),rN(1029,"-"),og(),Sl(1030,"td",21)(1031,"p"),rN(1032,"Texto da tag."),og()()()(),Sl(1033,"h3"),rN(1034,"Interfaces"),og(),Sl(1035,"h4",83)(1036,"code",5),rN(1037,"PoTagLiterals"),og()(),Sl(1038,"div",2)(1039,"p"),rN(1040,"Interface para defini\xE7\xE3o das literais usadas no "),Sl(1041,"code"),rN(1042,"po-tag"),og(),rN(1043,"."),og()(),Sl(1044,"h4",10),rN(1045,"Propriedades"),og(),Sl(1046,"table",11)(1047,"tr",12)(1048,"th",13),rN(1049,"Nome"),og(),Sl(1050,"th",13),rN(1051,"Tipo"),og(),Sl(1052,"th",13),rN(1053,"Descri\xE7\xE3o"),og()(),Sl(1054,"tr",14)(1055,"td",15)(1056,"div",22)(1057,"span",23),rN(1058," remove"),Wl(1059,"br"),og()()(),Sl(1060,"td",18)(1061,"code",24),rN(1062,"string"),og()(),Sl(1063,"td",21)(1064,"em")(1065,"strong"),rN(1066,"(opcional)"),og()(),Sl(1067,"p"),rN(1068,"Texto exibido no tooltip indicando remo\xE7\xE3o da tag."),og()()()(),Sl(1069,"h3"),rN(1070,"Enums"),og(),Sl(1071,"h4",4)(1072,"code",5),rN(1073,"PoTagOrientation"),og()(),Sl(1074,"div",2)(1075,"p"),rN(1076,"Define os tipos de orienta\xE7\xF5es dispon\xEDveis para o "),Sl(1077,"code"),rN(1078,"po-tag"),og(),rN(1079,"."),og()(),Sl(1080,"h4",10),rN(1081,"Propriedades"),og(),Sl(1082,"table",11)(1083,"tr",12)(1084,"th",13),rN(1085,"Nome"),og(),Sl(1086,"th",13),rN(1087,"Descri\xE7\xE3o"),og()(),Sl(1088,"tr",14)(1089,"td",15)(1090,"div",22)(1091,"span",23),rN(1092," Horizontal"),Wl(1093,"br"),og()()(),Sl(1094,"td",21)(1095,"p"),rN(1096,"A tag ser\xE1 exibida na horizontal, ao lado direito em rela\xE7\xE3o ao label."),og()()(),Sl(1097,"tr",14)(1098,"td",15)(1099,"div",22)(1100,"span",23),rN(1101," Vertical"),Wl(1102,"br"),og()()(),Sl(1103,"td",21)(1104,"p"),rN(1105,"Exibe a tag na vertical, ou seja, abaixo do label."),og()()()(),Sl(1106,"h4",4)(1107,"code",5),rN(1108,"PoTagType"),og()(),Sl(1109,"div",2)(1110,"p"),rN(1111,"Define os tipos dispon\xEDveis para o "),Sl(1112,"code"),rN(1113,"po-tag"),og(),rN(1114,"."),og()(),Sl(1115,"h4",10),rN(1116,"Propriedades"),og(),Sl(1117,"table",11)(1118,"tr",12)(1119,"th",13),rN(1120,"Nome"),og(),Sl(1121,"th",13),rN(1122,"Descri\xE7\xE3o"),og()(),Sl(1123,"tr",14)(1124,"td",15)(1125,"div",22)(1126,"span",23),rN(1127," Danger"),Wl(1128,"br"),og()()(),Sl(1129,"td",21)(1130,"p"),rN(1131,"Erro, perigo, problema ou aviso cr\xEDtico."),og()()(),Sl(1132,"tr",14)(1133,"td",15)(1134,"div",22)(1135,"span",23),rN(1136," Info"),Wl(1137,"br"),og()()(),Sl(1138,"td",21)(1139,"p"),rN(1140,"Informativo ou explicativo."),og()()(),Sl(1141,"tr",14)(1142,"td",15)(1143,"div",22)(1144,"span",23),rN(1145," Success"),Wl(1146,"br"),og()()(),Sl(1147,"td",21)(1148,"p"),rN(1149,"Confirma\xE7\xE3o, resultados positivos ou \xEAxito."),og()()(),Sl(1150,"tr",14)(1151,"td",15)(1152,"div",22)(1153,"span",23),rN(1154," Warning"),Wl(1155,"br"),og()()(),Sl(1156,"td",21)(1157,"p"),rN(1158,"Aviso ou advert\xEAncia."),og()()(),Sl(1159,"tr",14)(1160,"td",15)(1161,"div",22)(1162,"span",23),rN(1163," Neutral"),Wl(1164,"br"),og()()(),Sl(1165,"td",21)(1166,"p"),rN(1167,"De uso geral, quando os tipos Info, Warning, Success e Danger n\xE3o atendem a necessidade."),og()()()()());},dependencies:[Ka],encapsulation:2,changeDetection:1})}return o})();var Pe=(()=>{class o{route;router;sub;hidePoWebSample=true;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(l,r){this.route=l,this.router=r;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let r=l.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:"merge"}),this.activeTab=l;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(r){return new(r||o)(w(Xn),w(En))};static \u0275cmp=Un({type:o,selectors:[["ng-component"]],standalone:false,decls:9,vars:4,consts:[["p-title","Tag",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,i){r&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return i.changeTab("doc")}),Wl(3,"sample-po-tag-doc"),og(),Sl(4,"po-tab",3),ft("p-click",function(){return i.changeTab("web")}),Wl(5,"sample-po-tag-basic-view")(6,"sample-po-tag-labs-view")(7,"sample-po-tag-bank-account-view")(8,"sample-po-tag-caption-tag-colors-view"),og()()()),r&2&&(rw("p-actions",i.actions),Lp(2),rw("p-active",i.activeTab==="doc"),Lp(2),rw("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[sNe,Ume,$me,Ee,ve,he,Te,ye],encapsulation:2,changeDetection:1})}return o})();var Ke=[{path:"",component:Pe}],we=(()=>{class o{static \u0275fac=function(r){return new(r||o)};static \u0275mod=fe$1({type:o});static \u0275inj=ue({imports:[mL.forChild(Ke),mL]})}return o})();var _t=(()=>{class o{static \u0275fac=function(r){return new(r||o)};static \u0275mod=fe$1({type:o});static \u0275inj=ue({imports:[sr,we]})}return o})();export{_t as DocPoTagModule};