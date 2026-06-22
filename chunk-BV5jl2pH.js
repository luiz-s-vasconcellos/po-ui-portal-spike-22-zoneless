import {f as fe,u as ue,s as sr,h as hL,w,c3 as Xn,E as En,U as Un,aW as Yp,b8 as Bme,cC as uNe,F as Sl,H as Wl,J as og,an as CO,aH as Ka,b9 as qme,z as eN,a1 as ft,L as Lp,ar as $x,au as dg,Q as nw,bs as fN,aF as G9,aG as _k,b0 as Qt,b1 as mv,b2 as Khe,c8 as wde,aB as wx,aQ as gx,cF as hx,aM as ww,aN as e0,bd as Nx,aS as mx,aO as Ew,aP as n0,av as ql,aw as lo,ax as uo,aX as Z9,aY as q9,aZ as mk,bD as Pde,b4 as L3,aJ as Hhe,c9 as Ghe,cn as o3,ab as lt,a3 as rNe,ba as fNe,cG as kO,aD as Ky,aA as Mx,aE as Xy,a4 as yN,cH as oN,a6 as EN,br as sN,B as yw,aT as nN}from'./main-WP3NAV7C.js';var Te=(()=>{class l{static \u0275fac=function(i){return new(i||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-context-tabs-basic"]],standalone:false,decls:3,vars:0,consts:[["p-label","PO Tabs 1"],["p-label","PO Tabs 2"]],template:function(i,o){i&1&&(Sl(0,"po-context-tabs"),Wl(1,"po-tab",0)(2,"po-tab",1),og());},dependencies:[Bme,uNe],encapsulation:2,changeDetection:1})}return l})();var We=l=>({"docs-sample-code-tabs":l}),xe=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(i){return new(i||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-context-tabs-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,o){i&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Context Tabs Basic"),og(),Sl(4,"a",2),ft("click",function(){return o.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-context-tabs-basic/sample-po-context-tabs-basic.component.html"),og(),Sl(13,"pre",7),eN(14,`<po-context-tabs>
  <po-tab p-label="PO Tabs 1"></po-tab>
  <po-tab p-label="PO Tabs 2"></po-tab>
</po-context-tabs>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-context-tabs-basic/sample-po-context-tabs-basic.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-context-tabs-basic',
  templateUrl: './sample-po-context-tabs-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoContextTabsBasicComponent {}
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-context-tabs-basic"),og(),Wl(23,"hr")),i&2&&(Lp(5),$x("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,We,o.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,Te],encapsulation:2})}return l})();var qe=["poTab"];function Le(l,O){if(l&1){let a=wx();Sl(0,"po-tab",9),ft("p-click",function(){let o=Ky(a).$implicit,d=Mx();return Xy(d.onClick(o))})("p-close-tab",function(){let o=Ky(a).$implicit,d=Mx();return Xy(d.onClose(o))}),Sl(1,"div",10),eN(2),og()();}if(l&2){let a=O.$implicit,i=O.$index;nw("p-active",a.active)("p-disabled",a.disabled)("p-hide",a.hide)("p-hide-close",a.hideClose)("p-label",a.label),Lp(2),dg("Tab Content ",i);}}var ye=(()=>{class l{poNotification;poTab;tabsFieldsForm=[{property:"label",divider:"TAB",required:true,gridColumns:4},{property:"click",gridColumns:4},{property:"closeTab",label:"Close Tab",gridColumns:4},{property:"active",type:"boolean",gridColumns:3},{property:"disabled",type:"boolean",gridColumns:3},{property:"hide",type:"boolean",gridColumns:3},{property:"hideClose",label:"Hide Close",type:"boolean",gridColumns:3}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];size="medium";tabs=[];properties=[];pageWidth;constructor(a){this.poNotification=a;}ngOnInit(){this.restore(),this.pageWidth=window.innerWidth;}addTab(a){let i=Object.assign({},a);i.click=i.click?this.showClick.bind(this,i.click):void 0,i.closeTab=i.closeTab?this.dispachClose.bind(this,i.closeTab):void 0,this.tabs.push(i),this.tabs.length<=4?this.poTab.setQuantityTabsButton(this.tabs.length):this.tabs.length>4&&this.poTab.setQuantityTabsButton(4);}onClick(a){a.click&&a.click();}onClose(a){a.closeTab&&a.closeTab();}restore(){this.size="medium",this.tabs=[],this.poTab.quantityTabsButton=0;}showClick(a){this.poNotification.success(`Action clicked: ${a}`);}dispachClose(a){this.poNotification.success(`Action closed: ${a}`);}static \u0275fac=function(i){return new(i||l)(w(Yp))};static \u0275cmp=Un({type:l,selectors:[["sample-po-context-tabs-labs"]],viewQuery:function(i,o){if(i&1&&ql(qe,7),i&2){let d;lo(d=uo())&&(o.poTab=d.first);}},standalone:false,decls:12,vars:6,consts:[["poTab",""],["tabsForm",""],[3,"p-size"],[3,"p-active","p-disabled","p-hide","p-hide-close","p-label"],[3,"p-fields","p-value"],[1,"po-row"],["p-label","Add Tab",1,"po-md-3",3,"p-click","p-disabled"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"],[3,"p-click","p-close-tab","p-active","p-disabled","p-hide","p-hide-close","p-label"],[1,"po-font-subtitle"]],template:function(i,o){if(i&1){let d=wx();Sl(0,"po-context-tabs",2,0),gx(2,Le,3,6,"po-tab",3,hx),og(),Wl(4,"po-dynamic-form",4,1),Sl(6,"div",5)(7,"po-button",6),ft("p-click",function(){Ky(d);let r=Nx(5);return o.addTab(r.form.value),Xy(r.form.reset())}),og()(),Wl(8,"po-divider"),Sl(9,"po-radio-group",7),ww("ngModelChange",function(r){return Ky(d),nN(o.size,r)||(o.size=r),Xy(r)}),og(),e0(),Sl(10,"div",5)(11,"po-button",8),ft("p-click",function(){return o.restore()}),og()();}if(i&2){let d=Nx(5);nw("p-size",o.size),Lp(2),mx(o.tabs),Lp(2),nw("p-fields",o.tabsFieldsForm)("p-value",o.tabs),Lp(3),nw("p-disabled",d.form.invalid),Lp(2),Ew("ngModel",o.size),nw("p-options",o.sizeOptions),n0();}},dependencies:[G9,_k,Qt,mv,Khe,wde,Bme,uNe],encapsulation:2,changeDetection:1})}return l})();var ze=l=>({"docs-sample-code-tabs":l}),Ee=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(i){return new(i||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-context-tabs-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,o){i&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Context Tabs Labs"),og(),Sl(4,"a",2),ft("click",function(){return o.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-context-tabs-labs/sample-po-context-tabs-labs.component.html"),og(),Sl(13,"pre",7),eN(14,`<po-context-tabs #poTab [p-size]="size">
  @for (tab of tabs; track $index; let i = $index) {
    <po-tab
      [p-active]="tab.active"
      [p-disabled]="tab.disabled"
      [p-hide]="tab.hide"
      [p-hide-close]="tab.hideClose"
      [p-label]="tab.label"
      (p-click)="onClick(tab)"
      (p-close-tab)="onClose(tab)"
    >
      <div class="po-font-subtitle">Tab Content { { i }}</div>
    </po-tab>
  }
</po-context-tabs>

<po-dynamic-form #tabsForm [p-fields]="tabsFieldsForm" [p-value]="tabs"> </po-dynamic-form>

<div class="po-row">
  <po-button
    class="po-md-3"
    p-label="Add Tab"
    [p-disabled]="tabsForm.form.invalid"
    (p-click)="addTab(tabsForm.form.value); tabsForm.form.reset()"
  >
  </po-button>
</div>

<po-divider></po-divider>

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
  <po-button class="po-md-3" p-label="Sample Restore" (p-click)="restore()"> </po-button>
</div>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-context-tabs-labs/sample-po-context-tabs-labs.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';

import {
  PoDynamicFormField,
  PoNotificationService,
  PoRadioGroupOption,
  PoTab,
  PoContextTabsComponent
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-context-tabs-labs',
  templateUrl: './sample-po-context-tabs-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoContextTabsLabsComponent implements OnInit {
  @ViewChild('poTab', { static: true }) poTab: PoContextTabsComponent;

  tabsFieldsForm: Array<PoDynamicFormField> = [
    { property: 'label', divider: 'TAB', required: true, gridColumns: 4 },
    { property: 'click', gridColumns: 4 },
    { property: 'closeTab', label: 'Close Tab', gridColumns: 4 },
    { property: 'active', type: 'boolean', gridColumns: 3 },
    { property: 'disabled', type: 'boolean', gridColumns: 3 },
    { property: 'hide', type: 'boolean', gridColumns: 3 },
    { property: 'hideClose', label: 'Hide Close', type: 'boolean', gridColumns: 3 }
  ];

  public sizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  size: string = 'medium';
  tabs: Array<PoTab> = [];
  properties: Array<string> = [];
  pageWidth: number;

  constructor(private poNotification: PoNotificationService) {}

  ngOnInit() {
    this.restore();
    this.pageWidth = window.innerWidth;
  }

  addTab(tab: PoTab) {
    const newTab = Object.assign({}, tab);

    newTab.click = newTab.click ? this.showClick.bind(this, newTab.click) : undefined;
    newTab.closeTab = newTab.closeTab ? this.dispachClose.bind(this, newTab.closeTab) : undefined;
    this.tabs.push(newTab);
    if (this.tabs.length <= 4) {
      this.poTab.setQuantityTabsButton(this.tabs.length);
    } else if (this.tabs.length > 4) {
      this.poTab.setQuantityTabsButton(4);
    }
  }

  onClick(tab: PoTab) {
    if (tab.click) {
      tab.click();
    }
  }

  onClose(tab: PoTab) {
    if (tab.closeTab) {
      tab.closeTab();
    }
  }

  restore() {
    this.size = 'medium';
    this.tabs = [];
    this.poTab.quantityTabsButton = 0;
  }

  private showClick(action: string): any {
    this.poNotification.success(\`Action clicked: \${action}\`);
  }

  private dispachClose(action: string): any {
    this.poNotification.success(\`Action closed: \${action}\`);
  }
}
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-context-tabs-labs"),og(),Wl(23,"hr")),i&2&&(Lp(5),$x("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,ze,o.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,ye],encapsulation:2})}return l})();var we=(()=>{class l{poNotificationService;card;cardName;classFlight;classTrain;cvv;departDate;destination;expiryMonth;expiryYear;flightCompany;origin;returnDate;totalCost;trainCompany;transportation;classFlightOptions=[{label:"Economy",value:1},{label:"Business",value:2},{label:"Comfort",value:3},{label:"First Class",value:4}];classTrainOptions=[{label:"Economy",value:1},{label:"Cabin",value:2},{label:"First Class",value:3}];flightCompanyOptions=[{label:"American Airlines",value:"american"},{label:"Avianca",value:"avianca"},{label:"Delta Airlines",value:"delta"},{label:"Emirates",value:"emirates"},{label:"Latam",value:"latam"}];trainCompanyOptions=[{label:"EuroStar",value:"eurostar"},{label:"OBB",value:"obb"},{label:"Renfe",value:"renfe"},{label:"TrenItalia",value:"trenitalia"}];transportationOptions=[{label:"Flights",value:"flight"},{label:"Trains",value:"train"}];constructor(a){this.poNotificationService=a;}bankBillet(){this.poNotificationService.warning("Bank billet sent to email");}isPaymentEnable(a,i,o){return a.valid&&this.transportation==="flight"&&o.valid||a.valid&&this.transportation==="train"&&i.valid}getTotalCost(){return this.transportation==="flight"&&this.classFlight?(this.totalCost=800*this.classFlight,`$${this.totalCost}`):this.transportation==="train"&&this.classTrain?(this.totalCost=300*this.classTrain,`$${this.totalCost}`):(this.totalCost=void 0,"Fields are missing")}payment(){this.poNotificationService.success("Order confirmed");}static \u0275fac=function(i){return new(i||l)(w(Yp))};static \u0275cmp=Un({type:l,selectors:[["sample-po-context-tabs-travel"]],standalone:false,decls:47,vars:30,consts:[["formTravel","ngForm"],["formTrain","ngForm"],["formFlight","ngForm"],["formCreditCard","ngForm"],["p-active","","p-label","Destination"],[1,"po-row"],["name","origin","p-label","Origin","p-required","",1,"po-lg-12",3,"ngModelChange","ngModel"],["name","destination","p-label","Destination","p-required","",1,"po-lg-12",3,"ngModelChange","ngModel"],["name","departDate","p-label","Depart","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","returnDate","p-label","Return","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-min-date"],["name","transportation","p-label","Transportation","p-required","",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["p-label","Trains",3,"p-hide","p-hide-close"],["name","trainCompany","p-label","Tran Company","p-required","",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","classTrain","p-label","Class","p-required","",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["p-label","Flights",3,"p-hide","p-hide-close"],["name","flightCompany","p-label","Flight Company","p-required","",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","classFlight","p-label","Class","p-required","",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["p-label","Payment",3,"p-disabled","p-hide-close"],["p-label","Total Cost",1,"po-md-6",3,"p-value"],["p-active","","p-label","Credit Card"],["name","cardName","p-clean","","p-label","Name on Card","p-required","",1,"po-md-8","po-lg-6",3,"ngModelChange","ngModel"],["name","card","p-clean","","p-label","Card Number","p-mask","9999 9999 9999 9999","p-required","",1,"po-md-8","po-lg-6",3,"ngModelChange","ngModel"],["name","expiryMonth","p-clean","","p-label","Expiry Month","p-mask","19","p-required","",1,"po-md-2",3,"ngModelChange","ngModel"],["name","expiryYear","p-clean","","p-label","Year","p-mask","2999","p-required","",1,"po-md-2",3,"ngModelChange","ngModel"],["name","cvv","p-clean","","p-label","CVV","p-mask","9999","p-required","",1,"po-md-2",3,"ngModelChange","ngModel"],["p-label","Pay now",1,"po-md-3",3,"p-click","p-disabled"],["p-label","Bank Billet",3,"p-hide-close"],["p-label","Generate Bank Billet",1,"po-md-4",3,"p-click","p-disabled"]],template:function(i,o){if(i&1){let d=wx();Sl(0,"po-context-tabs")(1,"po-tab",4)(2,"form",null,0)(4,"div",5)(5,"po-input",6),ww("ngModelChange",function(r){return Ky(d),nN(o.origin,r)||(o.origin=r),Xy(r)}),og(),e0(),og(),Sl(6,"div",5)(7,"po-input",7),ww("ngModelChange",function(r){return Ky(d),nN(o.destination,r)||(o.destination=r),Xy(r)}),og(),e0(),og(),Sl(8,"div",5)(9,"po-datepicker",8),ww("ngModelChange",function(r){return Ky(d),nN(o.departDate,r)||(o.departDate=r),Xy(r)}),og(),e0(),Sl(10,"po-datepicker",9),ww("ngModelChange",function(r){return Ky(d),nN(o.returnDate,r)||(o.returnDate=r),Xy(r)}),og(),e0(),og(),Sl(11,"div",5)(12,"po-radio-group",10),ww("ngModelChange",function(r){return Ky(d),nN(o.transportation,r)||(o.transportation=r),Xy(r)}),og(),e0(),og()()(),Sl(13,"po-tab",11)(14,"form",null,1)(16,"div",5)(17,"po-select",12),ww("ngModelChange",function(r){return Ky(d),nN(o.trainCompany,r)||(o.trainCompany=r),Xy(r)}),og(),e0(),og(),Sl(18,"div",5)(19,"po-select",13),ww("ngModelChange",function(r){return Ky(d),nN(o.classTrain,r)||(o.classTrain=r),Xy(r)}),og(),e0(),og()()(),Sl(20,"po-tab",14)(21,"form",null,2)(23,"div",5)(24,"po-select",15),ww("ngModelChange",function(r){return Ky(d),nN(o.flightCompany,r)||(o.flightCompany=r),Xy(r)}),og(),e0(),og(),Sl(25,"div",5)(26,"po-select",16),ww("ngModelChange",function(r){return Ky(d),nN(o.classFlight,r)||(o.classFlight=r),Xy(r)}),og(),e0(),og()()(),Sl(27,"po-tab",17)(28,"div",5),Wl(29,"po-info",18),og(),Sl(30,"po-context-tabs")(31,"po-tab",19)(32,"form",null,3)(34,"div",5)(35,"po-input",20),ww("ngModelChange",function(r){return Ky(d),nN(o.cardName,r)||(o.cardName=r),Xy(r)}),og(),e0(),og(),Sl(36,"div",5)(37,"po-input",21),ww("ngModelChange",function(r){return Ky(d),nN(o.card,r)||(o.card=r),Xy(r)}),og(),e0(),og(),Sl(38,"div",5)(39,"po-input",22),ww("ngModelChange",function(r){return Ky(d),nN(o.expiryMonth,r)||(o.expiryMonth=r),Xy(r)}),og(),e0(),Sl(40,"po-input",23),ww("ngModelChange",function(r){return Ky(d),nN(o.expiryYear,r)||(o.expiryYear=r),Xy(r)}),og(),e0(),Sl(41,"po-input",24),ww("ngModelChange",function(r){return Ky(d),nN(o.cvv,r)||(o.cvv=r),Xy(r)}),og(),e0(),og(),Sl(42,"div",5)(43,"po-button",25),ft("p-click",function(){return o.payment()}),og()()()(),Sl(44,"po-tab",26)(45,"div",5)(46,"po-button",27),ft("p-click",function(){return o.bankBillet()}),og()()()()()();}if(i&2){let d=Nx(3),C=Nx(15),r=Nx(22),Fe=Nx(33);Lp(5),Ew("ngModel",o.origin),n0(),Lp(2),Ew("ngModel",o.destination),n0(),Lp(2),Ew("ngModel",o.departDate),n0(),Lp(),Ew("ngModel",o.returnDate),nw("p-min-date",o.departDate),n0(),Lp(2),Ew("ngModel",o.transportation),nw("p-options",o.transportationOptions),n0(),Lp(),nw("p-hide",o.transportation!=="train")("p-hide-close",true),Lp(4),Ew("ngModel",o.trainCompany),nw("p-options",o.trainCompanyOptions),n0(),Lp(2),Ew("ngModel",o.classTrain),nw("p-options",o.classTrainOptions),n0(),Lp(),nw("p-hide",o.transportation!=="flight")("p-hide-close",true),Lp(4),Ew("ngModel",o.flightCompany),nw("p-options",o.flightCompanyOptions),n0(),Lp(2),Ew("ngModel",o.classFlight),nw("p-options",o.classFlightOptions),n0(),Lp(),nw("p-disabled",o.isPaymentEnable(d,C,r)===false)("p-hide-close",true),Lp(2),nw("p-value",o.getTotalCost()),Lp(6),Ew("ngModel",o.cardName),n0(),Lp(2),Ew("ngModel",o.card),n0(),Lp(2),Ew("ngModel",o.expiryMonth),n0(),Lp(),Ew("ngModel",o.expiryYear),n0(),Lp(),Ew("ngModel",o.cvv),n0(),Lp(2),nw("p-disabled",!Fe.form.valid||!o.totalCost),Lp(),nw("p-hide-close",true),Lp(2),nw("p-disabled",!o.totalCost);}},dependencies:[Z9,G9,q9,_k,mk,Qt,Pde,L3,wde,Hhe,Ghe,Bme,uNe],encapsulation:2,changeDetection:1})}return l})();var He=l=>({"docs-sample-code-tabs":l}),_e=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(i){return new(i||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-context-tabs-travel-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,o){i&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Context Tabs - Travel"),og(),Sl(4,"a",2),ft("click",function(){return o.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-context-tabs-travel/sample-po-context-tabs-travel.component.html"),og(),Sl(13,"pre",7),eN(14,`<po-context-tabs>
  <po-tab p-active p-label="Destination">
    <form #formTravel="ngForm">
      <div class="po-row">
        <po-input class="po-lg-12" name="origin" [(ngModel)]="origin" p-label="Origin" p-required> </po-input>
      </div>

      <div class="po-row">
        <po-input class="po-lg-12" name="destination" [(ngModel)]="destination" p-label="Destination" p-required>
        </po-input>
      </div>

      <div class="po-row">
        <po-datepicker class="po-md-6" name="departDate" [(ngModel)]="departDate" p-label="Depart" p-required>
        </po-datepicker>

        <po-datepicker
          class="po-md-6"
          name="returnDate"
          [(ngModel)]="returnDate"
          p-label="Return"
          p-required
          [p-min-date]="departDate"
        >
        </po-datepicker>
      </div>

      <div class="po-row">
        <po-radio-group
          class="po-lg-12"
          name="transportation"
          [(ngModel)]="transportation"
          p-label="Transportation"
          p-required
          [p-options]="transportationOptions"
        >
        </po-radio-group>
      </div>
    </form>
  </po-tab>
  <po-tab p-label="Trains" [p-hide]="transportation !== 'train'" [p-hide-close]="true">
    <form #formTrain="ngForm">
      <div class="po-row">
        <po-select
          class="po-lg-12"
          name="trainCompany"
          [(ngModel)]="trainCompany"
          p-label="Tran Company"
          p-required
          [p-options]="trainCompanyOptions"
        >
        </po-select>
      </div>

      <div class="po-row">
        <po-select
          class="po-lg-12"
          name="classTrain"
          [(ngModel)]="classTrain"
          p-label="Class"
          p-required
          [p-options]="classTrainOptions"
        >
        </po-select>
      </div>
    </form>
  </po-tab>
  <po-tab p-label="Flights" [p-hide]="transportation !== 'flight'" [p-hide-close]="true">
    <form #formFlight="ngForm">
      <div class="po-row">
        <po-select
          class="po-lg-12"
          name="flightCompany"
          [(ngModel)]="flightCompany"
          p-label="Flight Company"
          p-required
          [p-options]="flightCompanyOptions"
        >
        </po-select>
      </div>

      <div class="po-row">
        <po-select
          class="po-lg-12"
          name="classFlight"
          [(ngModel)]="classFlight"
          p-label="Class"
          p-required
          [p-options]="classFlightOptions"
        >
        </po-select>
      </div>
    </form>
  </po-tab>
  <po-tab
    p-label="Payment"
    [p-disabled]="isPaymentEnable(formTravel, formTrain, formFlight) === false"
    [p-hide-close]="true"
  >
    <div class="po-row">
      <po-info class="po-md-6" p-label="Total Cost" [p-value]="getTotalCost()"> </po-info>
    </div>

    <po-context-tabs>
      <po-tab p-active p-label="Credit Card">
        <form #formCreditCard="ngForm">
          <div class="po-row">
            <po-input
              class="po-md-8 po-lg-6"
              name="cardName"
              [(ngModel)]="cardName"
              p-clean
              p-label="Name on Card"
              p-required
            >
            </po-input>
          </div>

          <div class="po-row">
            <po-input
              class="po-md-8 po-lg-6"
              name="card"
              [(ngModel)]="card"
              p-clean
              p-label="Card Number"
              p-mask="9999 9999 9999 9999"
              p-required
            >
            </po-input>
          </div>

          <div class="po-row">
            <po-input
              class="po-md-2"
              name="expiryMonth"
              [(ngModel)]="expiryMonth"
              p-clean
              p-label="Expiry Month"
              p-mask="19"
              p-required
            >
            </po-input>

            <po-input
              class="po-md-2"
              name="expiryYear"
              [(ngModel)]="expiryYear"
              p-clean
              p-label="Year"
              p-mask="2999"
              p-required
            >
            </po-input>

            <po-input class="po-md-2" name="cvv" [(ngModel)]="cvv" p-clean p-label="CVV" p-mask="9999" p-required>
            </po-input>
          </div>

          <div class="po-row">
            <po-button
              class="po-md-3"
              p-label="Pay now"
              [p-disabled]="!formCreditCard.form.valid || !totalCost"
              (p-click)="payment()"
            >
            </po-button>
          </div>
        </form>
      </po-tab>

      <po-tab p-label="Bank Billet" [p-hide-close]="true">
        <div class="po-row">
          <po-button class="po-md-4" p-label="Generate Bank Billet" [p-disabled]="!totalCost" (p-click)="bankBillet()">
          </po-button>
        </div>
      </po-tab>
    </po-context-tabs>
  </po-tab>
</po-context-tabs>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-context-tabs-travel/sample-po-context-tabs-travel.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

import { PoNotificationService, PoRadioGroupOption, PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-context-tabs-travel',
  templateUrl: './sample-po-context-tabs-travel.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoContextTabsTravelComponent {
  card: number;
  cardName: string;
  classFlight: number;
  classTrain: number;
  cvv: number;
  departDate: Date;
  destination: string;
  expiryMonth: number;
  expiryYear: number;
  flightCompany: string;
  origin: string;
  returnDate: Date;
  totalCost: number;
  trainCompany: string;
  transportation: string;

  public readonly classFlightOptions: Array<PoSelectOption> = [
    { label: 'Economy', value: 1 },
    { label: 'Business', value: 2 },
    { label: 'Comfort', value: 3 },
    { label: 'First Class', value: 4 }
  ];

  public readonly classTrainOptions: Array<PoSelectOption> = [
    { label: 'Economy', value: 1 },
    { label: 'Cabin', value: 2 },
    { label: 'First Class', value: 3 }
  ];

  public readonly flightCompanyOptions: Array<PoSelectOption> = [
    { label: 'American Airlines', value: 'american' },
    { label: 'Avianca', value: 'avianca' },
    { label: 'Delta Airlines', value: 'delta' },
    { label: 'Emirates', value: 'emirates' },
    { label: 'Latam', value: 'latam' }
  ];

  public readonly trainCompanyOptions: Array<PoSelectOption> = [
    { label: 'EuroStar', value: 'eurostar' },
    { label: 'OBB', value: 'obb' },
    { label: 'Renfe', value: 'renfe' },
    { label: 'TrenItalia', value: 'trenitalia' }
  ];

  public readonly transportationOptions: Array<PoRadioGroupOption> = [
    { label: 'Flights', value: 'flight' },
    { label: 'Trains', value: 'train' }
  ];

  constructor(private poNotificationService: PoNotificationService) {}

  bankBillet() {
    this.poNotificationService.warning('Bank billet sent to email');
  }

  isPaymentEnable(formTravel, formTrain, formFlight) {
    return (
      (formTravel.valid && this.transportation === 'flight' && formFlight.valid) ||
      (formTravel.valid && this.transportation === 'train' && formTrain.valid)
    );
  }

  getTotalCost() {
    if (this.transportation === 'flight' && this.classFlight) {
      this.totalCost = 800 * this.classFlight;
      return \`$\${this.totalCost}\`;
    }

    if (this.transportation === 'train' && this.classTrain) {
      this.totalCost = 300 * this.classTrain;
      return \`$\${this.totalCost}\`;
    }

    this.totalCost = undefined;
    return 'Fields are missing';
  }

  payment() {
    this.poNotificationService.success('Order confirmed');
  }
}
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-context-tabs-travel"),og(),Wl(23,"hr")),i&2&&(Lp(5),$x("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,He,o.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,we],encapsulation:2})}return l})();var Qe=["poTab"],Ze=(l,O)=>O.id;function Ye(l,O){if(l&1){let a=wx();Sl(0,"po-tab",2),yN(1,"date"),Sl(2,"div",7)(3,"div",5)(4,"div",4)(5,"div",8)(6,"po-widget")(7,"div",4)(8,"div",9),Wl(9,"po-avatar",10),og(),Sl(10,"div",11)(11,"div",12),Wl(12,"po-info",13),og(),Sl(13,"div",12),Wl(14,"po-info",14),og(),Sl(15,"div",12),Wl(16,"po-info",15),og()()()()(),Sl(17,"div",16)(18,"po-widget",17)(19,"div",18),eN(20,"TFace Conference Week"),og(),Sl(21,"div",19),eN(22,"From 21th September until 26th setember 2018"),og(),Wl(23,"hr"),Sl(24,"div",4)(25,"div",20)(26,"span",21),Wl(27,"po-icon",22),og(),Sl(28,"span",23),eN(29),yN(30,"date"),og()(),Sl(31,"div",20)(32,"span",21),Wl(33,"po-icon",24),og(),Sl(34,"span",25),eN(35,"Av. Braz Leme, 1000, Santana"),og()()(),Sl(36,"div",26)(37,"po-button",27),ft("p-click",function(){let o=Ky(a).$implicit,d=Mx();return Xy(d.confirmSubscription(o))}),og()()()()()()()();}if(l&2){let a=O.$implicit;nw("p-label",oN(EN(1,10,a.createdDate,"MMM d")))("p-active",a.id==="1")("p-hide",a.subscribe),Lp(9),nw("p-src",sN("assets/graphics/",a.photo)),Lp(3),nw("p-value",a.name),Lp(2),nw("p-value",a.email),Lp(2),nw("p-value",a.description),Lp(13),yw(EN(30,13,a.createdDate,"MM/dd/yyyy"));}}var Pe=(()=>{class l{poNotification;poTab;disableRestoreBtn=true;speakers;pageWidth;constructor(a){this.poNotification=a;}ngOnInit(){this.speakers=this.getSpeakers(),this.pageWidth=window.innerWidth,this.pageWidth<=600&&this.poTab.setQuantityTabsButton(3);}cancelSubscription(){this.disableRestoreBtn=true,this.speakers.forEach(a=>a.subscribe=false);}confirmSubscription(a){this.disableRestoreBtn=false,a.subscribe=true,this.poNotification.success("Registration completed successfully. See you soon!");}getSpeakers(){return [{id:"1",name:"Peter Benjamin Parker",email:"peter.parker@po-ui.com.br",photo:"avatar1.png",description:"Nodejs developer with 4 years experience",createdDate:"2018-09-21T20:21:06.990Z",subscribe:"false"},{id:"2",name:"Natasha Romanova",email:"natasha.romanova@po-ui.com.br",photo:"avatar2.png",description:"Angular developer with 2 years experience",createdDate:"2018-09-22T20:21:06.990Z",subscribe:"false"},{id:"3",name:"Anthony Stark",email:"anthony.stark@po-ui.com.br",photo:"avatar3.png",description:"Javascript developer with 8 years experience",createdDate:"2018-09-23T20:21:06.990Z",subscribe:"false"},{id:"4",name:"Carol Danvers",email:"carol.danvers@po-ui.com.br",photo:"avatar4.png",description:"Full stack developer with 2 years experience",createdDate:"2018-09-24T20:21:06.990Z",subscribe:"false"},{id:"5",name:"Wagner Dantas",email:"wagner.dantas@po-ui.com.br",photo:"avatar5.png",description:"Front-end Engineer developer with 8 years experience",createdDate:"2018-09-25T20:21:06.990Z",subscribe:"false"},{id:"6",name:"Kaiam Alexandre",email:"kaiam.alexandre@po-ui.com.br",photo:"avatar6.png",description:"Javascript developer with 12 years experience",createdDate:"2018-09-26T20:21:06.990Z",subscribe:"false"}]}static \u0275fac=function(i){return new(i||l)(w(Yp))};static \u0275cmp=Un({type:l,selectors:[["sample-po-context-tabs-business-conf"]],viewQuery:function(i,o){if(i&1&&ql(Qe,7),i&2){let d;lo(d=uo())&&(o.poTab=d.first);}},standalone:false,decls:10,vars:1,consts:[["poTab",""],["p-title","Check the speaker's list"],[3,"p-label","p-active","p-hide"],[1,"po-offset-lg-1","po-offset-xl-1","po-lg-10","po-mt-0"],[1,"po-row"],[1,"po-offset-lg-1","po-offset-xl-1","po-lg-10"],["p-label","Cancel Subscription",1,"po-offset-lg-8","po-offset-xl-8","po-lg-4",3,"p-click","p-disabled"],[1,"po-row","po-mt-5"],[1,"po-lg-8","po-mb-2"],[1,"po-md-5","po-lg-4"],["p-size","xl",3,"p-src"],[1,"po-md-7","po-lg-8"],[1,"po-mb-2"],["p-label","Speaker",3,"p-value"],["p-label","Email",1,"po-mt-5",3,"p-value"],["p-label","Description",1,"po-mb-5",3,"p-value"],[1,"po-lg-4","po-mb-2"],["p-title","Subscription"],[1,"po-font-subtitle","po-mb-2"],[1,"po-font-text-bold","po-mb-5"],[1,"po-md-6","po-lg-12"],[1,"po-mr-1","po-font-subtitle"],["p-icon","po-icon an an-calendar-dots"],[1,"po-font-text","po-mb-2"],["p-icon","po-icon an an-map-pin"],[1,"po-font-text"],[1,"po-mt-5"],["p-label","Subscription",1,"po-mt-5",3,"p-click"]],template:function(i,o){i&1&&(Sl(0,"po-page-default",1)(1,"po-context-tabs",null,0),gx(3,Ye,38,16,"po-tab",2,Ze),og(),Wl(5,"hr",3),Sl(6,"div",4)(7,"div",5)(8,"div",4)(9,"po-button",6),ft("p-click",function(){return o.cancelSubscription()}),og()()()()()),i&2&&(Lp(3),mx(o.speakers),Lp(6),nw("p-disabled",o.disableRestoreBtn));},dependencies:[o3,Qt,lt,Ghe,rNe,Bme,uNe,fNe,kO],encapsulation:2,changeDetection:1})}return l})();var Je=l=>({"docs-sample-code-tabs":l}),ke=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(i){return new(i||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-context-tabs-business-conf-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,o){i&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Context Tabs - Business Conference"),og(),Sl(4,"a",2),ft("click",function(){return o.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-context-tabs-business-conf/sample-po-context-tabs-business-conf.component.html"),og(),Sl(13,"pre",7),eN(14,`<po-page-default p-title="Check the speaker's list">
  <po-context-tabs #poTab>
    @for (speaker of speakers; track speaker.id) {
      <po-tab
        p-label="{ { speaker.createdDate | date: 'MMM d' }}"
        [p-active]="speaker.id === '1'"
        [p-hide]="speaker.subscribe"
      >
        <div class="po-row po-mt-5">
          <div class="po-offset-lg-1 po-offset-xl-1 po-lg-10">
            <div class="po-row">
              <div class="po-lg-8 po-mb-2">
                <po-widget>
                  <div class="po-row">
                    <div class="po-md-5 po-lg-4">
                      <po-avatar p-size="xl" p-src="assets/graphics/{ { speaker.photo }}"></po-avatar>
                    </div>
                    <div class="po-md-7 po-lg-8">
                      <div class="po-mb-2">
                        <po-info p-label="Speaker" [p-value]="speaker.name"></po-info>
                      </div>
                      <div class="po-mb-2">
                        <po-info class="po-mt-5" p-label="Email" [p-value]="speaker.email"> </po-info>
                      </div>
                      <div class="po-mb-2">
                        <po-info class="po-mb-5" p-label="Description" [p-value]="speaker.description"> </po-info>
                      </div>
                    </div>
                  </div>
                </po-widget>
              </div>

              <div class="po-lg-4 po-mb-2">
                <po-widget p-title="Subscription">
                  <div class="po-font-subtitle po-mb-2">TFace Conference Week</div>
                  <div class="po-font-text-bold po-mb-5">From 21th September until 26th setember 2018</div>
                  <hr />
                  <div class="po-row">
                    <div class="po-md-6 po-lg-12">
                      <span class="po-mr-1 po-font-subtitle">
                        <po-icon p-icon="po-icon an an-calendar-dots"></po-icon>
                      </span>
                      <span class="po-font-text po-mb-2">{ { speaker.createdDate | date: 'MM/dd/yyyy' }}</span>
                    </div>
                    <div class="po-md-6 po-lg-12">
                      <span class="po-mr-1 po-font-subtitle">
                        <po-icon p-icon="po-icon an an-map-pin"></po-icon>
                      </span>
                      <span class="po-font-text">Av. Braz Leme, 1000, Santana</span>
                    </div>
                  </div>
                  <div class="po-mt-5">
                    <po-button class="po-mt-5" p-label="Subscription" (p-click)="confirmSubscription(speaker)">
                    </po-button>
                  </div>
                </po-widget>
              </div>
            </div>
          </div>
        </div>
      </po-tab>
    }
  </po-context-tabs>

  <hr class="po-offset-lg-1 po-offset-xl-1 po-lg-10 po-mt-0" />

  <div class="po-row">
    <div class="po-offset-lg-1 po-offset-xl-1 po-lg-10">
      <div class="po-row">
        <po-button
          class="po-offset-lg-8 po-offset-xl-8 po-lg-4"
          p-label="Cancel Subscription"
          [p-disabled]="disableRestoreBtn"
          (p-click)="cancelSubscription()"
        >
        </po-button>
      </div>
    </div>
  </div>
</po-page-default>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-context-tabs-business-conf/sample-po-context-tabs-business-conf.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';

import { PoNotificationService, PoContextTabsComponent } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-context-tabs-business-conf',
  templateUrl: './sample-po-context-tabs-business-conf.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoContextTabsBusinessConfComponent implements OnInit {
  @ViewChild('poTab', { static: true }) poTab: PoContextTabsComponent;

  disableRestoreBtn: boolean = true;
  speakers: Array<any>;
  pageWidth: number;

  constructor(private poNotification: PoNotificationService) {}

  ngOnInit() {
    this.speakers = this.getSpeakers();
    this.pageWidth = window.innerWidth;
    if (this.pageWidth <= 600) {
      this.poTab.setQuantityTabsButton(3);
    }
  }

  cancelSubscription() {
    this.disableRestoreBtn = true;
    this.speakers.forEach(item => (item.subscribe = false));
  }

  confirmSubscription(speaker) {
    this.disableRestoreBtn = false;

    speaker.subscribe = true;

    this.poNotification.success('Registration completed successfully. See you soon!');
  }

  private getSpeakers() {
    return [
      {
        'id': '1',
        'name': 'Peter Benjamin Parker',
        'email': 'peter.parker@po-ui.com.br',
        'photo': 'avatar1.png',
        'description': 'Nodejs developer with 4 years experience',
        'createdDate': '2018-09-21T20:21:06.990Z',
        'subscribe': 'false'
      },
      {
        'id': '2',
        'name': 'Natasha Romanova',
        'email': 'natasha.romanova@po-ui.com.br',
        'photo': 'avatar2.png',
        'description': 'Angular developer with 2 years experience',
        'createdDate': '2018-09-22T20:21:06.990Z',
        'subscribe': 'false'
      },
      {
        'id': '3',
        'name': 'Anthony Stark',
        'email': 'anthony.stark@po-ui.com.br',
        'photo': 'avatar3.png',
        'description': 'Javascript developer with 8 years experience',
        'createdDate': '2018-09-23T20:21:06.990Z',
        'subscribe': 'false'
      },
      {
        'id': '4',
        'name': 'Carol Danvers',
        'email': 'carol.danvers@po-ui.com.br',
        'photo': 'avatar4.png',
        'description': 'Full stack developer with 2 years experience',
        'createdDate': '2018-09-24T20:21:06.990Z',
        'subscribe': 'false'
      },
      {
        'id': '5',
        'name': 'Wagner Dantas',
        'email': 'wagner.dantas@po-ui.com.br',
        'photo': 'avatar5.png',
        'description': 'Front-end Engineer developer with 8 years experience',
        'createdDate': '2018-09-25T20:21:06.990Z',
        'subscribe': 'false'
      },
      {
        'id': '6',
        'name': 'Kaiam Alexandre',
        'email': 'kaiam.alexandre@po-ui.com.br',
        'photo': 'avatar6.png',
        'description': 'Javascript developer with 12 years experience',
        'createdDate': '2018-09-26T20:21:06.990Z',
        'subscribe': 'false'
      }
    ];
  }
}
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-context-tabs-business-conf"),og(),Wl(23,"hr")),i&2&&(Lp(5),$x("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,Je,o.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,Pe],encapsulation:2})}return l})();var Me=(()=>{class l{static \u0275fac=function(i){return new(i||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-context-tabs-doc"]],standalone:false,decls:361,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],["href","/documentation/po-tab"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"]],template:function(i,o){i&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),eN(3,"import { PoContextTabsModule } from '@po-ui/ng-components';"),og()(),Sl(4,"div",2)(5,"p"),eN(6,"M\xF3dulo do componente po-context-tabs"),og()(),Sl(7,"h3",3),eN(8,"Componente"),og(),Sl(9,"h4",4)(10,"code",5),eN(11,"PoContextTabsComponent"),og()(),Sl(12,"div",2)(13,"h4"),eN(14,"Tokens customiz\xE1veis"),og(),Sl(15,"p"),eN(16,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),og(),Sl(17,"blockquote")(18,"p"),eN(19,"Para maiores informa\xE7\xF5es, acesse o guia "),Sl(20,"a",6),eN(21,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),eN(22,"."),og()(),Sl(23,"table")(24,"thead")(25,"tr")(26,"th"),eN(27,"Propriedade"),og(),Sl(28,"th"),eN(29,"Descri\xE7\xE3o"),og(),Sl(30,"th"),eN(31,"Valor Padr\xE3o"),og()()(),Sl(32,"tbody")(33,"tr")(34,"td")(35,"strong"),eN(36,"Default Values"),og()(),Wl(37,"td")(38,"td"),og(),Sl(39,"tr")(40,"td")(41,"code"),eN(42,"--background"),og()(),Sl(43,"td"),eN(44,"Cor de background"),og(),Sl(45,"td")(46,"code"),eN(47,"var(--color-transparent)"),og()()(),Sl(48,"tr")(49,"td")(50,"code"),eN(51,"--background-item-default"),og()(),Sl(52,"td"),eN(53,"Cor de background do item padr\xE3o"),og(),Sl(54,"td")(55,"code"),eN(56,"var(--color-transparent)"),og()()(),Sl(57,"tr")(58,"td")(59,"code"),eN(60,"--border-radius"),og()(),Sl(61,"td"),eN(62,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),og(),Sl(63,"td")(64,"code"),eN(65,"var(--border-radius-md)"),og()()(),Sl(66,"tr")(67,"td")(68,"code"),eN(69,"--color"),og()(),Sl(70,"td"),eN(71,"Cor da fonte padr\xE3o"),og(),Sl(72,"td")(73,"code"),eN(74,"var(--color-action-default)"),og()()(),Sl(75,"tr")(76,"td")(77,"code"),eN(78,"--color-baseline"),og()(),Sl(79,"td"),eN(80,"Cor para box-shadow"),og(),Sl(81,"td")(82,"code"),eN(83,"var(--color-neutral-light-20)"),og()()(),Sl(84,"tr")(85,"td")(86,"code"),eN(87,"--font-family"),og()(),Sl(88,"td"),eN(89,"Fam\xEDlia tipogr\xE1fica usada"),og(),Sl(90,"td")(91,"code"),eN(92,"var(--font-family-theme)"),og()()(),Sl(93,"tr")(94,"td")(95,"code"),eN(96,"--font-size"),og()(),Sl(97,"td"),eN(98,"Tamanho da fonte"),og(),Sl(99,"td")(100,"code"),eN(101,"var(--font-size-default)"),og()()(),Sl(102,"tr")(103,"td")(104,"code"),eN(105,"--font-weight"),og()(),Sl(106,"td"),eN(107,"Peso da fonte"),og(),Sl(108,"td")(109,"code"),eN(110,"var(--font-weight-bold)"),og()()(),Sl(111,"tr")(112,"td")(113,"code"),eN(114,"--margin-tabs-container-left"),og()(),Sl(115,"td"),eN(116,"Margem lateral esquerda do componente quando usado dentro de um "),Sl(117,"code"),eN(118,"page-default"),og()(),Sl(119,"td")(120,"code"),eN(121,"var(--spacing-md)"),og()()(),Sl(122,"tr")(123,"td")(124,"code"),eN(125,"--margin-tabs-container-right"),og()(),Sl(126,"td"),eN(127,"Margem lateral direita do componente quando usado dentro de um "),Sl(128,"code"),eN(129,"page-default"),og()(),Sl(130,"td")(131,"code"),eN(132,"-16px"),og()()(),Sl(133,"tr")(134,"td")(135,"code"),eN(136,"--padding-tabs-header"),og()(),Sl(137,"td"),eN(138,"Padding do valor lateral das abas"),og(),Sl(139,"td")(140,"code"),eN(141,"var(--spacing-sm)"),og()()(),Sl(142,"tr")(143,"td")(144,"code"),eN(145,"--margin-tabs-first-child"),og()(),Sl(146,"td"),eN(147,"Margem lateral da primeira aba"),og(),Sl(148,"td")(149,"code"),eN(150,"var(--spacing-md)"),og()()(),Sl(151,"tr")(152,"td")(153,"code"),eN(154,"--margin-tabs-last-child"),og()(),Sl(155,"td"),eN(156,"Margem lateral da ultima aba"),og(),Sl(157,"td")(158,"code"),eN(159,"var(--spacing-md)"),og()()(),Sl(160,"tr")(161,"td")(162,"strong"),eN(163,"Disabled"),og()(),Wl(164,"td")(165,"td"),og(),Sl(166,"tr")(167,"td")(168,"code"),eN(169,"--color-disabled"),og()(),Sl(170,"td"),eN(171,"Cor da fonte no estado disabilitado"),og(),Sl(172,"td")(173,"code"),eN(174,"var(--color-action-disabled)"),og()()(),Sl(175,"tr")(176,"td")(177,"code"),eN(178,"--background-item-disabled"),og(),eN(179,"\xA0"),og(),Sl(180,"td"),eN(181,"Cor de background do item desabilitado"),og(),Sl(182,"td")(183,"code"),eN(184,"var(--color-neutral-light-10)"),og()()(),Sl(185,"tr")(186,"td")(187,"strong"),eN(188,"Focused"),og()(),Wl(189,"td")(190,"td"),og(),Sl(191,"tr")(192,"td")(193,"code"),eN(194,"--outline-color-focused"),og()(),Sl(195,"td"),eN(196,"Cor do outline do estado de focus"),og(),Sl(197,"td")(198,"code"),eN(199,"var(--color-action-focus)"),og()()(),Sl(200,"tr")(201,"td")(202,"strong"),eN(203,"Hover"),og()(),Wl(204,"td")(205,"td"),og(),Sl(206,"tr")(207,"td")(208,"code"),eN(209,"--color-hover"),og()(),Sl(210,"td"),eN(211,"Cor principal no estado hover"),og(),Sl(212,"td")(213,"code"),eN(214,"var(--color-brand-01-darkest)"),og()()(),Sl(215,"tr")(216,"td")(217,"code"),eN(218,"--background-item-hover"),og()(),Sl(219,"td"),eN(220,"Cor de background no estado de hover"),og(),Sl(221,"td")(222,"code"),eN(223,"var(--color-brand-01-lightest)"),og()()(),Sl(224,"tr")(225,"td")(226,"strong"),eN(227,"Selected"),og()(),Wl(228,"td")(229,"td"),og(),Sl(230,"tr")(231,"td")(232,"code"),eN(233,"--background-item-selected"),og()(),Sl(234,"td"),eN(235,"Cor de background do item selecionado"),og(),Sl(236,"td")(237,"code"),eN(238,"var(--color-brand-01-lightest)"),og()()()()(),Sl(239,"p"),Wl(240,"br"),eN(241," O componente "),Sl(242,"code"),eN(243,"po-context-tabs"),og(),eN(244," \xE9 respons\xE1vel por agrupar "),Sl(245,"a",7),eN(246,"abas"),og(),eN(247,` dispostas numa linha horizontal,
ideal para facilitar a organiza\xE7\xE3o de conte\xFAdos.`),og(),Sl(248,"p"),eN(249,"O componente exibir\xE1 as abas enquanto houver espa\xE7o na tela, caso a aba ultrapasse o limite da tela a mesma ser\xE1 agrupada em um dropdown."),og(),Sl(250,"blockquote")(251,"p"),eN(252,"As abas que estiverem agrupadas ser\xE3o dispostas numa cascata suspensa que ser\xE1 exibida ao clicar no bot\xE3o."),og()(),Sl(253,"p"),eN(254,`\xC9 poss\xEDvel realizar a navega\xE7\xE3o entre as abas atrav\xE9s da tecla SETAS(direita e esquerda) do teclado.
Caso uma aba estiver desabilitada, n\xE3o receber\xE1 foco de navega\xE7\xE3o.`),og(),Sl(255,"h4"),eN(256,"Boas pr\xE1ticas"),og(),Sl(257,"ul")(258,"li"),eN(259,"Evite utilizar um "),Sl(260,"code"),eN(261,"po-context-tabs"),og(),eN(262," dentro de outro "),Sl(263,"code"),eN(264,"po-context-tabs"),og(),eN(265,";"),og(),Sl(266,"li"),eN(267,"Evite utilizar uma quantidade excessiva de abas, pois ir\xE1 gerar um "),Sl(268,"em"),eN(269,"scroll"),og(),eN(270," muito longo no "),Sl(271,"code"),eN(272,"dropdown"),og(),eN(273,";"),og(),Sl(274,"li"),eN(275,"Evite "),Sl(276,"code"),eN(277,"labels"),og(),eN(278," extensos para as "),Sl(279,"code"),eN(280,"tabs"),og(),eN(281," pois podem quebrar seu "),Sl(282,"em"),eN(283,"layout"),og(),eN(284,", use "),Sl(285,"code"),eN(286,"labels"),og(),eN(287," diretas, curtas e intuitivas."),og()()(),Sl(288,"div",8)(289,"h4",9),eN(290,"Seletor"),og(),Sl(291,"pre",10),eN(292,`<po-context-tabs
    p-size="string" >
</po-context-tabs>
`),og()(),Sl(293,"h4",11),eN(294,"Propriedades"),og(),Sl(295,"table",12)(296,"tr",13)(297,"th",14),eN(298,"Nome"),og(),Sl(299,"th",14),eN(300,"Tipo"),og(),Sl(301,"th",14),eN(302,"Padr\xE3o"),og(),Sl(303,"th",14),eN(304,"Descri\xE7\xE3o"),og()(),Sl(305,"tr",15)(306,"td",16)(307,"div",17)(308,"span",18),eN(309," p-size"),Wl(310,"br"),og()()(),Sl(311,"td",19)(312,"code",20),eN(313,"string"),og()(),Sl(314,"td",21)(315,"p")(316,"code"),eN(317,"medium"),og()()(),Sl(318,"td",22)(319,"em")(320,"strong"),eN(321,"(opcional)"),og()(),Sl(322,"p"),eN(323,"Define o tamanho do componente:"),og(),Sl(324,"ul")(325,"li")(326,"code"),eN(327,"small"),og(),eN(328,": altura dos tabs como 32px (dispon\xEDvel apenas para acessibilidade AA)."),og(),Sl(329,"li")(330,"code"),eN(331,"medium"),og(),eN(332,": altura dos tabs como 44px."),og()(),Sl(333,"blockquote")(334,"p"),eN(335,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Sl(336,"code"),eN(337,"medium"),og(),eN(338,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Sl(339,"a",23),eN(340,"po-theme"),og(),eN(341,"."),og()()()()(),Sl(342,"h3",11),eN(343,"M\xE9todos"),og(),Sl(344,"table",24)(345,"tr",15)(346,"th",25)(347,"div",17)(348,"h4")(349,"span",18),eN(350," setQuantityTabsButton "),og()()()()(),Sl(351,"tr",22)(352,"td",22)(353,"p"),eN(354,"Fun\xE7\xE3o que atribui o n\xFAmero de tabs fora do dropdown."),og(),Sl(355,"p"),eN(356,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),og(),Sl(357,"pre")(358,"code"),eN(359,`import { PoContextTabsComponent } from '@po-ui/ng-components';

...

@ViewChild('poContextTabs', { static: true }) poContextTabs: PoContextTabsComponent;

changeQuantityTabs() {
  this.poContextTabs.setQuantityTabsButton(1); //N\xFAmero de context-tabs
}
`),og()()()()(),Wl(360,"br"),og());},dependencies:[Ka],encapsulation:2})}return l})();var De=(()=>{class l{route;router;sub;hidePoWebSample=true;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(a,i){this.route=a,this.router=i;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let i=a.view;this.activeTab=i||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:"merge"}),this.activeTab=a;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(i){return new(i||l)(w(Xn),w(En))};static \u0275cmp=Un({type:l,selectors:[["ng-component"]],standalone:false,decls:9,vars:4,consts:[["p-title","Context Tabs",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(i,o){i&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return o.changeTab("doc")}),Wl(3,"sample-po-context-tabs-doc"),og(),Sl(4,"po-tab",3),ft("p-click",function(){return o.changeTab("web")}),Wl(5,"sample-po-context-tabs-basic-view")(6,"sample-po-context-tabs-labs-view")(7,"sample-po-context-tabs-travel-view")(8,"sample-po-context-tabs-business-conf-view"),og()()()),i&2&&(nw("p-actions",o.actions),Lp(2),nw("p-active",o.activeTab==="doc"),Lp(2),nw("p-hide",o.hidePoWebSample)("p-active",o.activeTab==="web"));},dependencies:[rNe,Bme,qme,xe,Ee,_e,ke,Me],encapsulation:2})}return l})();var Xe=[{path:"",component:De}],Be=(()=>{class l{static \u0275fac=function(i){return new(i||l)};static \u0275mod=fe({type:l});static \u0275inj=ue({imports:[hL.forChild(Xe),hL]})}return l})();var _t=(()=>{class l{static \u0275fac=function(i){return new(i||l)};static \u0275mod=fe({type:l});static \u0275inj=ue({imports:[sr,Be]})}return l})();export{_t as DocPoContextTabsModule};