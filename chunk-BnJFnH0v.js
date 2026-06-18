import {f as fe,u as ue,s as sr,a as uL,C,c3 as Xn,E as En,U as Un,aW as Yp,b8 as qme,cC as gNe,H as Il,J as zl,R as og,an as DO,aH as Ka,b9 as Yme,q as Qx,a1 as ft,A as Lp,ar as Ux,au as dg,T as nw,bs as uN,aF as $9,aG as mk,b0 as Qt,b1 as mv,b2 as Jhe,c8 as Dde,aB as Dx,aQ as hx,cF as dx,aM as ww,aN as QA,bd as Ax,aS as px,aO as Ew,aP as e0,av as Gl,aw as co,ax as lo,aX as G9,aY as z9,aZ as hk,bD as Ede,b4 as F3,aJ as qhe,c9 as Yhe,cn as a3,ab as lt,a3 as cNe,ba as yNe,cG as NO,aD as Xy,aA as Sx,aE as Qy,a4 as mN,cH as rN,a6 as _N,br as iN,B as yw,aT as eN}from'./main-FCMDZGSJ.js';var Te=(()=>{class l{static \u0275fac=function(i){return new(i||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-context-tabs-basic"]],standalone:false,decls:3,vars:0,consts:[["p-label","PO Tabs 1"],["p-label","PO Tabs 2"]],template:function(i,o){i&1&&(Il(0,"po-context-tabs"),zl(1,"po-tab",0)(2,"po-tab",1),og());},dependencies:[qme,gNe],encapsulation:2,changeDetection:1})}return l})();var We=l=>({"docs-sample-code-tabs":l}),xe=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(i){return new(i||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-context-tabs-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,o){i&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Context Tabs Basic"),og(),Il(4,"a",2),ft("click",function(){return o.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-context-tabs-basic/sample-po-context-tabs-basic.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-context-tabs>
  <po-tab p-label="PO Tabs 1"></po-tab>
  <po-tab p-label="PO Tabs 2"></po-tab>
</po-context-tabs>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-context-tabs-basic/sample-po-context-tabs-basic.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-context-tabs-basic',
  templateUrl: './sample-po-context-tabs-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoContextTabsBasicComponent {}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-context-tabs-basic"),og(),zl(23,"hr")),i&2&&(Lp(5),Ux("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,We,o.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,Te],encapsulation:2})}return l})();var qe=["poTab"];function Le(l,O){if(l&1){let a=Dx();Il(0,"po-tab",9),ft("p-click",function(){let o=Xy(a).$implicit,d=Sx();return Qy(d.onClick(o))})("p-close-tab",function(){let o=Xy(a).$implicit,d=Sx();return Qy(d.onClose(o))}),Il(1,"div",10),Qx(2),og()();}if(l&2){let a=O.$implicit,i=O.$index;nw("p-active",a.active)("p-disabled",a.disabled)("p-hide",a.hide)("p-hide-close",a.hideClose)("p-label",a.label),Lp(2),dg("Tab Content ",i);}}var ye=(()=>{class l{poNotification;poTab;tabsFieldsForm=[{property:"label",divider:"TAB",required:true,gridColumns:4},{property:"click",gridColumns:4},{property:"closeTab",label:"Close Tab",gridColumns:4},{property:"active",type:"boolean",gridColumns:3},{property:"disabled",type:"boolean",gridColumns:3},{property:"hide",type:"boolean",gridColumns:3},{property:"hideClose",label:"Hide Close",type:"boolean",gridColumns:3}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];size="medium";tabs=[];properties=[];pageWidth;constructor(a){this.poNotification=a;}ngOnInit(){this.restore(),this.pageWidth=window.innerWidth;}addTab(a){let i=Object.assign({},a);i.click=i.click?this.showClick.bind(this,i.click):void 0,i.closeTab=i.closeTab?this.dispachClose.bind(this,i.closeTab):void 0,this.tabs.push(i),this.tabs.length<=4?this.poTab.setQuantityTabsButton(this.tabs.length):this.tabs.length>4&&this.poTab.setQuantityTabsButton(4);}onClick(a){a.click&&a.click();}onClose(a){a.closeTab&&a.closeTab();}restore(){this.size="medium",this.tabs=[],this.poTab.quantityTabsButton=0;}showClick(a){this.poNotification.success(`Action clicked: ${a}`);}dispachClose(a){this.poNotification.success(`Action closed: ${a}`);}static \u0275fac=function(i){return new(i||l)(C(Yp))};static \u0275cmp=Un({type:l,selectors:[["sample-po-context-tabs-labs"]],viewQuery:function(i,o){if(i&1&&Gl(qe,7),i&2){let d;co(d=lo())&&(o.poTab=d.first);}},standalone:false,decls:12,vars:6,consts:[["poTab",""],["tabsForm",""],[3,"p-size"],[3,"p-active","p-disabled","p-hide","p-hide-close","p-label"],[3,"p-fields","p-value"],[1,"po-row"],["p-label","Add Tab",1,"po-md-3",3,"p-click","p-disabled"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"],[3,"p-click","p-close-tab","p-active","p-disabled","p-hide","p-hide-close","p-label"],[1,"po-font-subtitle"]],template:function(i,o){if(i&1){let d=Dx();Il(0,"po-context-tabs",2,0),hx(2,Le,3,6,"po-tab",3,dx),og(),zl(4,"po-dynamic-form",4,1),Il(6,"div",5)(7,"po-button",6),ft("p-click",function(){Xy(d);let r=Ax(5);return o.addTab(r.form.value),Qy(r.form.reset())}),og()(),zl(8,"po-divider"),Il(9,"po-radio-group",7),ww("ngModelChange",function(r){return Xy(d),eN(o.size,r)||(o.size=r),Qy(r)}),og(),QA(),Il(10,"div",5)(11,"po-button",8),ft("p-click",function(){return o.restore()}),og()();}if(i&2){let d=Ax(5);nw("p-size",o.size),Lp(2),px(o.tabs),Lp(2),nw("p-fields",o.tabsFieldsForm)("p-value",o.tabs),Lp(3),nw("p-disabled",d.form.invalid),Lp(2),Ew("ngModel",o.size),nw("p-options",o.sizeOptions),e0();}},dependencies:[$9,mk,Qt,mv,Jhe,Dde,qme,gNe],encapsulation:2,changeDetection:1})}return l})();var ze=l=>({"docs-sample-code-tabs":l}),Ee=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(i){return new(i||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-context-tabs-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,o){i&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Context Tabs Labs"),og(),Il(4,"a",2),ft("click",function(){return o.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-context-tabs-labs/sample-po-context-tabs-labs.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-context-tabs #poTab [p-size]="size">
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
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-context-tabs-labs/sample-po-context-tabs-labs.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-context-tabs-labs"),og(),zl(23,"hr")),i&2&&(Lp(5),Ux("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,ze,o.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,ye],encapsulation:2})}return l})();var we=(()=>{class l{poNotificationService;card;cardName;classFlight;classTrain;cvv;departDate;destination;expiryMonth;expiryYear;flightCompany;origin;returnDate;totalCost;trainCompany;transportation;classFlightOptions=[{label:"Economy",value:1},{label:"Business",value:2},{label:"Comfort",value:3},{label:"First Class",value:4}];classTrainOptions=[{label:"Economy",value:1},{label:"Cabin",value:2},{label:"First Class",value:3}];flightCompanyOptions=[{label:"American Airlines",value:"american"},{label:"Avianca",value:"avianca"},{label:"Delta Airlines",value:"delta"},{label:"Emirates",value:"emirates"},{label:"Latam",value:"latam"}];trainCompanyOptions=[{label:"EuroStar",value:"eurostar"},{label:"OBB",value:"obb"},{label:"Renfe",value:"renfe"},{label:"TrenItalia",value:"trenitalia"}];transportationOptions=[{label:"Flights",value:"flight"},{label:"Trains",value:"train"}];constructor(a){this.poNotificationService=a;}bankBillet(){this.poNotificationService.warning("Bank billet sent to email");}isPaymentEnable(a,i,o){return a.valid&&this.transportation==="flight"&&o.valid||a.valid&&this.transportation==="train"&&i.valid}getTotalCost(){return this.transportation==="flight"&&this.classFlight?(this.totalCost=800*this.classFlight,`$${this.totalCost}`):this.transportation==="train"&&this.classTrain?(this.totalCost=300*this.classTrain,`$${this.totalCost}`):(this.totalCost=void 0,"Fields are missing")}payment(){this.poNotificationService.success("Order confirmed");}static \u0275fac=function(i){return new(i||l)(C(Yp))};static \u0275cmp=Un({type:l,selectors:[["sample-po-context-tabs-travel"]],standalone:false,decls:47,vars:30,consts:[["formTravel","ngForm"],["formTrain","ngForm"],["formFlight","ngForm"],["formCreditCard","ngForm"],["p-active","","p-label","Destination"],[1,"po-row"],["name","origin","p-label","Origin","p-required","",1,"po-lg-12",3,"ngModelChange","ngModel"],["name","destination","p-label","Destination","p-required","",1,"po-lg-12",3,"ngModelChange","ngModel"],["name","departDate","p-label","Depart","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","returnDate","p-label","Return","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-min-date"],["name","transportation","p-label","Transportation","p-required","",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["p-label","Trains",3,"p-hide","p-hide-close"],["name","trainCompany","p-label","Tran Company","p-required","",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","classTrain","p-label","Class","p-required","",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["p-label","Flights",3,"p-hide","p-hide-close"],["name","flightCompany","p-label","Flight Company","p-required","",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","classFlight","p-label","Class","p-required","",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["p-label","Payment",3,"p-disabled","p-hide-close"],["p-label","Total Cost",1,"po-md-6",3,"p-value"],["p-active","","p-label","Credit Card"],["name","cardName","p-clean","","p-label","Name on Card","p-required","",1,"po-md-8","po-lg-6",3,"ngModelChange","ngModel"],["name","card","p-clean","","p-label","Card Number","p-mask","9999 9999 9999 9999","p-required","",1,"po-md-8","po-lg-6",3,"ngModelChange","ngModel"],["name","expiryMonth","p-clean","","p-label","Expiry Month","p-mask","19","p-required","",1,"po-md-2",3,"ngModelChange","ngModel"],["name","expiryYear","p-clean","","p-label","Year","p-mask","2999","p-required","",1,"po-md-2",3,"ngModelChange","ngModel"],["name","cvv","p-clean","","p-label","CVV","p-mask","9999","p-required","",1,"po-md-2",3,"ngModelChange","ngModel"],["p-label","Pay now",1,"po-md-3",3,"p-click","p-disabled"],["p-label","Bank Billet",3,"p-hide-close"],["p-label","Generate Bank Billet",1,"po-md-4",3,"p-click","p-disabled"]],template:function(i,o){if(i&1){let d=Dx();Il(0,"po-context-tabs")(1,"po-tab",4)(2,"form",null,0)(4,"div",5)(5,"po-input",6),ww("ngModelChange",function(r){return Xy(d),eN(o.origin,r)||(o.origin=r),Qy(r)}),og(),QA(),og(),Il(6,"div",5)(7,"po-input",7),ww("ngModelChange",function(r){return Xy(d),eN(o.destination,r)||(o.destination=r),Qy(r)}),og(),QA(),og(),Il(8,"div",5)(9,"po-datepicker",8),ww("ngModelChange",function(r){return Xy(d),eN(o.departDate,r)||(o.departDate=r),Qy(r)}),og(),QA(),Il(10,"po-datepicker",9),ww("ngModelChange",function(r){return Xy(d),eN(o.returnDate,r)||(o.returnDate=r),Qy(r)}),og(),QA(),og(),Il(11,"div",5)(12,"po-radio-group",10),ww("ngModelChange",function(r){return Xy(d),eN(o.transportation,r)||(o.transportation=r),Qy(r)}),og(),QA(),og()()(),Il(13,"po-tab",11)(14,"form",null,1)(16,"div",5)(17,"po-select",12),ww("ngModelChange",function(r){return Xy(d),eN(o.trainCompany,r)||(o.trainCompany=r),Qy(r)}),og(),QA(),og(),Il(18,"div",5)(19,"po-select",13),ww("ngModelChange",function(r){return Xy(d),eN(o.classTrain,r)||(o.classTrain=r),Qy(r)}),og(),QA(),og()()(),Il(20,"po-tab",14)(21,"form",null,2)(23,"div",5)(24,"po-select",15),ww("ngModelChange",function(r){return Xy(d),eN(o.flightCompany,r)||(o.flightCompany=r),Qy(r)}),og(),QA(),og(),Il(25,"div",5)(26,"po-select",16),ww("ngModelChange",function(r){return Xy(d),eN(o.classFlight,r)||(o.classFlight=r),Qy(r)}),og(),QA(),og()()(),Il(27,"po-tab",17)(28,"div",5),zl(29,"po-info",18),og(),Il(30,"po-context-tabs")(31,"po-tab",19)(32,"form",null,3)(34,"div",5)(35,"po-input",20),ww("ngModelChange",function(r){return Xy(d),eN(o.cardName,r)||(o.cardName=r),Qy(r)}),og(),QA(),og(),Il(36,"div",5)(37,"po-input",21),ww("ngModelChange",function(r){return Xy(d),eN(o.card,r)||(o.card=r),Qy(r)}),og(),QA(),og(),Il(38,"div",5)(39,"po-input",22),ww("ngModelChange",function(r){return Xy(d),eN(o.expiryMonth,r)||(o.expiryMonth=r),Qy(r)}),og(),QA(),Il(40,"po-input",23),ww("ngModelChange",function(r){return Xy(d),eN(o.expiryYear,r)||(o.expiryYear=r),Qy(r)}),og(),QA(),Il(41,"po-input",24),ww("ngModelChange",function(r){return Xy(d),eN(o.cvv,r)||(o.cvv=r),Qy(r)}),og(),QA(),og(),Il(42,"div",5)(43,"po-button",25),ft("p-click",function(){return o.payment()}),og()()()(),Il(44,"po-tab",26)(45,"div",5)(46,"po-button",27),ft("p-click",function(){return o.bankBillet()}),og()()()()()();}if(i&2){let d=Ax(3),C=Ax(15),r=Ax(22),Fe=Ax(33);Lp(5),Ew("ngModel",o.origin),e0(),Lp(2),Ew("ngModel",o.destination),e0(),Lp(2),Ew("ngModel",o.departDate),e0(),Lp(),Ew("ngModel",o.returnDate),nw("p-min-date",o.departDate),e0(),Lp(2),Ew("ngModel",o.transportation),nw("p-options",o.transportationOptions),e0(),Lp(),nw("p-hide",o.transportation!=="train")("p-hide-close",true),Lp(4),Ew("ngModel",o.trainCompany),nw("p-options",o.trainCompanyOptions),e0(),Lp(2),Ew("ngModel",o.classTrain),nw("p-options",o.classTrainOptions),e0(),Lp(),nw("p-hide",o.transportation!=="flight")("p-hide-close",true),Lp(4),Ew("ngModel",o.flightCompany),nw("p-options",o.flightCompanyOptions),e0(),Lp(2),Ew("ngModel",o.classFlight),nw("p-options",o.classFlightOptions),e0(),Lp(),nw("p-disabled",o.isPaymentEnable(d,C,r)===false)("p-hide-close",true),Lp(2),nw("p-value",o.getTotalCost()),Lp(6),Ew("ngModel",o.cardName),e0(),Lp(2),Ew("ngModel",o.card),e0(),Lp(2),Ew("ngModel",o.expiryMonth),e0(),Lp(),Ew("ngModel",o.expiryYear),e0(),Lp(),Ew("ngModel",o.cvv),e0(),Lp(2),nw("p-disabled",!Fe.form.valid||!o.totalCost),Lp(),nw("p-hide-close",true),Lp(2),nw("p-disabled",!o.totalCost);}},dependencies:[G9,$9,z9,mk,hk,Qt,Ede,F3,Dde,qhe,Yhe,qme,gNe],encapsulation:2,changeDetection:1})}return l})();var He=l=>({"docs-sample-code-tabs":l}),_e=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(i){return new(i||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-context-tabs-travel-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,o){i&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Context Tabs - Travel"),og(),Il(4,"a",2),ft("click",function(){return o.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-context-tabs-travel/sample-po-context-tabs-travel.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-context-tabs>
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
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-context-tabs-travel/sample-po-context-tabs-travel.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-context-tabs-travel"),og(),zl(23,"hr")),i&2&&(Lp(5),Ux("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,He,o.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,we],encapsulation:2})}return l})();var Qe=["poTab"],Ze=(l,O)=>O.id;function Ye(l,O){if(l&1){let a=Dx();Il(0,"po-tab",2),mN(1,"date"),Il(2,"div",7)(3,"div",5)(4,"div",4)(5,"div",8)(6,"po-widget")(7,"div",4)(8,"div",9),zl(9,"po-avatar",10),og(),Il(10,"div",11)(11,"div",12),zl(12,"po-info",13),og(),Il(13,"div",12),zl(14,"po-info",14),og(),Il(15,"div",12),zl(16,"po-info",15),og()()()()(),Il(17,"div",16)(18,"po-widget",17)(19,"div",18),Qx(20,"TFace Conference Week"),og(),Il(21,"div",19),Qx(22,"From 21th September until 26th setember 2018"),og(),zl(23,"hr"),Il(24,"div",4)(25,"div",20)(26,"span",21),zl(27,"po-icon",22),og(),Il(28,"span",23),Qx(29),mN(30,"date"),og()(),Il(31,"div",20)(32,"span",21),zl(33,"po-icon",24),og(),Il(34,"span",25),Qx(35,"Av. Braz Leme, 1000, Santana"),og()()(),Il(36,"div",26)(37,"po-button",27),ft("p-click",function(){let o=Xy(a).$implicit,d=Sx();return Qy(d.confirmSubscription(o))}),og()()()()()()()();}if(l&2){let a=O.$implicit;nw("p-label",rN(_N(1,10,a.createdDate,"MMM d")))("p-active",a.id==="1")("p-hide",a.subscribe),Lp(9),nw("p-src",iN("assets/graphics/",a.photo)),Lp(3),nw("p-value",a.name),Lp(2),nw("p-value",a.email),Lp(2),nw("p-value",a.description),Lp(13),yw(_N(30,13,a.createdDate,"MM/dd/yyyy"));}}var Pe=(()=>{class l{poNotification;poTab;disableRestoreBtn=true;speakers;pageWidth;constructor(a){this.poNotification=a;}ngOnInit(){this.speakers=this.getSpeakers(),this.pageWidth=window.innerWidth,this.pageWidth<=600&&this.poTab.setQuantityTabsButton(3);}cancelSubscription(){this.disableRestoreBtn=true,this.speakers.forEach(a=>a.subscribe=false);}confirmSubscription(a){this.disableRestoreBtn=false,a.subscribe=true,this.poNotification.success("Registration completed successfully. See you soon!");}getSpeakers(){return [{id:"1",name:"Peter Benjamin Parker",email:"peter.parker@po-ui.com.br",photo:"avatar1.png",description:"Nodejs developer with 4 years experience",createdDate:"2018-09-21T20:21:06.990Z",subscribe:"false"},{id:"2",name:"Natasha Romanova",email:"natasha.romanova@po-ui.com.br",photo:"avatar2.png",description:"Angular developer with 2 years experience",createdDate:"2018-09-22T20:21:06.990Z",subscribe:"false"},{id:"3",name:"Anthony Stark",email:"anthony.stark@po-ui.com.br",photo:"avatar3.png",description:"Javascript developer with 8 years experience",createdDate:"2018-09-23T20:21:06.990Z",subscribe:"false"},{id:"4",name:"Carol Danvers",email:"carol.danvers@po-ui.com.br",photo:"avatar4.png",description:"Full stack developer with 2 years experience",createdDate:"2018-09-24T20:21:06.990Z",subscribe:"false"},{id:"5",name:"Wagner Dantas",email:"wagner.dantas@po-ui.com.br",photo:"avatar5.png",description:"Front-end Engineer developer with 8 years experience",createdDate:"2018-09-25T20:21:06.990Z",subscribe:"false"},{id:"6",name:"Kaiam Alexandre",email:"kaiam.alexandre@po-ui.com.br",photo:"avatar6.png",description:"Javascript developer with 12 years experience",createdDate:"2018-09-26T20:21:06.990Z",subscribe:"false"}]}static \u0275fac=function(i){return new(i||l)(C(Yp))};static \u0275cmp=Un({type:l,selectors:[["sample-po-context-tabs-business-conf"]],viewQuery:function(i,o){if(i&1&&Gl(Qe,7),i&2){let d;co(d=lo())&&(o.poTab=d.first);}},standalone:false,decls:10,vars:1,consts:[["poTab",""],["p-title","Check the speaker's list"],[3,"p-label","p-active","p-hide"],[1,"po-offset-lg-1","po-offset-xl-1","po-lg-10","po-mt-0"],[1,"po-row"],[1,"po-offset-lg-1","po-offset-xl-1","po-lg-10"],["p-label","Cancel Subscription",1,"po-offset-lg-8","po-offset-xl-8","po-lg-4",3,"p-click","p-disabled"],[1,"po-row","po-mt-5"],[1,"po-lg-8","po-mb-2"],[1,"po-md-5","po-lg-4"],["p-size","xl",3,"p-src"],[1,"po-md-7","po-lg-8"],[1,"po-mb-2"],["p-label","Speaker",3,"p-value"],["p-label","Email",1,"po-mt-5",3,"p-value"],["p-label","Description",1,"po-mb-5",3,"p-value"],[1,"po-lg-4","po-mb-2"],["p-title","Subscription"],[1,"po-font-subtitle","po-mb-2"],[1,"po-font-text-bold","po-mb-5"],[1,"po-md-6","po-lg-12"],[1,"po-mr-1","po-font-subtitle"],["p-icon","po-icon an an-calendar-dots"],[1,"po-font-text","po-mb-2"],["p-icon","po-icon an an-map-pin"],[1,"po-font-text"],[1,"po-mt-5"],["p-label","Subscription",1,"po-mt-5",3,"p-click"]],template:function(i,o){i&1&&(Il(0,"po-page-default",1)(1,"po-context-tabs",null,0),hx(3,Ye,38,16,"po-tab",2,Ze),og(),zl(5,"hr",3),Il(6,"div",4)(7,"div",5)(8,"div",4)(9,"po-button",6),ft("p-click",function(){return o.cancelSubscription()}),og()()()()()),i&2&&(Lp(3),px(o.speakers),Lp(6),nw("p-disabled",o.disableRestoreBtn));},dependencies:[a3,Qt,lt,Yhe,cNe,qme,gNe,yNe,NO],encapsulation:2,changeDetection:1})}return l})();var Je=l=>({"docs-sample-code-tabs":l}),ke=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(i){return new(i||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-context-tabs-business-conf-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,o){i&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Context Tabs - Business Conference"),og(),Il(4,"a",2),ft("click",function(){return o.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-context-tabs-business-conf/sample-po-context-tabs-business-conf.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-page-default p-title="Check the speaker's list">
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
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-context-tabs-business-conf/sample-po-context-tabs-business-conf.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-context-tabs-business-conf"),og(),zl(23,"hr")),i&2&&(Lp(5),Ux("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,Je,o.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,Pe],encapsulation:2})}return l})();var Me=(()=>{class l{static \u0275fac=function(i){return new(i||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-context-tabs-doc"]],standalone:false,decls:361,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],["href","/documentation/po-tab"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"]],template:function(i,o){i&1&&(Il(0,"div",0)(1,"p",1)(2,"code"),Qx(3,"import { PoContextTabsModule } from '@po-ui/ng-components';"),og()(),Il(4,"div",2)(5,"p"),Qx(6,"M\xF3dulo do componente po-context-tabs"),og()(),Il(7,"h3",3),Qx(8,"Componente"),og(),Il(9,"h4",4)(10,"code",5),Qx(11,"PoContextTabsComponent"),og()(),Il(12,"div",2)(13,"h4"),Qx(14,"Tokens customiz\xE1veis"),og(),Il(15,"p"),Qx(16,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),og(),Il(17,"blockquote")(18,"p"),Qx(19,"Para maiores informa\xE7\xF5es, acesse o guia "),Il(20,"a",6),Qx(21,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),Qx(22,"."),og()(),Il(23,"table")(24,"thead")(25,"tr")(26,"th"),Qx(27,"Propriedade"),og(),Il(28,"th"),Qx(29,"Descri\xE7\xE3o"),og(),Il(30,"th"),Qx(31,"Valor Padr\xE3o"),og()()(),Il(32,"tbody")(33,"tr")(34,"td")(35,"strong"),Qx(36,"Default Values"),og()(),zl(37,"td")(38,"td"),og(),Il(39,"tr")(40,"td")(41,"code"),Qx(42,"--background"),og()(),Il(43,"td"),Qx(44,"Cor de background"),og(),Il(45,"td")(46,"code"),Qx(47,"var(--color-transparent)"),og()()(),Il(48,"tr")(49,"td")(50,"code"),Qx(51,"--background-item-default"),og()(),Il(52,"td"),Qx(53,"Cor de background do item padr\xE3o"),og(),Il(54,"td")(55,"code"),Qx(56,"var(--color-transparent)"),og()()(),Il(57,"tr")(58,"td")(59,"code"),Qx(60,"--border-radius"),og()(),Il(61,"td"),Qx(62,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),og(),Il(63,"td")(64,"code"),Qx(65,"var(--border-radius-md)"),og()()(),Il(66,"tr")(67,"td")(68,"code"),Qx(69,"--color"),og()(),Il(70,"td"),Qx(71,"Cor da fonte padr\xE3o"),og(),Il(72,"td")(73,"code"),Qx(74,"var(--color-action-default)"),og()()(),Il(75,"tr")(76,"td")(77,"code"),Qx(78,"--color-baseline"),og()(),Il(79,"td"),Qx(80,"Cor para box-shadow"),og(),Il(81,"td")(82,"code"),Qx(83,"var(--color-neutral-light-20)"),og()()(),Il(84,"tr")(85,"td")(86,"code"),Qx(87,"--font-family"),og()(),Il(88,"td"),Qx(89,"Fam\xEDlia tipogr\xE1fica usada"),og(),Il(90,"td")(91,"code"),Qx(92,"var(--font-family-theme)"),og()()(),Il(93,"tr")(94,"td")(95,"code"),Qx(96,"--font-size"),og()(),Il(97,"td"),Qx(98,"Tamanho da fonte"),og(),Il(99,"td")(100,"code"),Qx(101,"var(--font-size-default)"),og()()(),Il(102,"tr")(103,"td")(104,"code"),Qx(105,"--font-weight"),og()(),Il(106,"td"),Qx(107,"Peso da fonte"),og(),Il(108,"td")(109,"code"),Qx(110,"var(--font-weight-bold)"),og()()(),Il(111,"tr")(112,"td")(113,"code"),Qx(114,"--margin-tabs-container-left"),og()(),Il(115,"td"),Qx(116,"Margem lateral esquerda do componente quando usado dentro de um "),Il(117,"code"),Qx(118,"page-default"),og()(),Il(119,"td")(120,"code"),Qx(121,"var(--spacing-md)"),og()()(),Il(122,"tr")(123,"td")(124,"code"),Qx(125,"--margin-tabs-container-right"),og()(),Il(126,"td"),Qx(127,"Margem lateral direita do componente quando usado dentro de um "),Il(128,"code"),Qx(129,"page-default"),og()(),Il(130,"td")(131,"code"),Qx(132,"-16px"),og()()(),Il(133,"tr")(134,"td")(135,"code"),Qx(136,"--padding-tabs-header"),og()(),Il(137,"td"),Qx(138,"Padding do valor lateral das abas"),og(),Il(139,"td")(140,"code"),Qx(141,"var(--spacing-sm)"),og()()(),Il(142,"tr")(143,"td")(144,"code"),Qx(145,"--margin-tabs-first-child"),og()(),Il(146,"td"),Qx(147,"Margem lateral da primeira aba"),og(),Il(148,"td")(149,"code"),Qx(150,"var(--spacing-md)"),og()()(),Il(151,"tr")(152,"td")(153,"code"),Qx(154,"--margin-tabs-last-child"),og()(),Il(155,"td"),Qx(156,"Margem lateral da ultima aba"),og(),Il(157,"td")(158,"code"),Qx(159,"var(--spacing-md)"),og()()(),Il(160,"tr")(161,"td")(162,"strong"),Qx(163,"Disabled"),og()(),zl(164,"td")(165,"td"),og(),Il(166,"tr")(167,"td")(168,"code"),Qx(169,"--color-disabled"),og()(),Il(170,"td"),Qx(171,"Cor da fonte no estado disabilitado"),og(),Il(172,"td")(173,"code"),Qx(174,"var(--color-action-disabled)"),og()()(),Il(175,"tr")(176,"td")(177,"code"),Qx(178,"--background-item-disabled"),og(),Qx(179,"\xA0"),og(),Il(180,"td"),Qx(181,"Cor de background do item desabilitado"),og(),Il(182,"td")(183,"code"),Qx(184,"var(--color-neutral-light-10)"),og()()(),Il(185,"tr")(186,"td")(187,"strong"),Qx(188,"Focused"),og()(),zl(189,"td")(190,"td"),og(),Il(191,"tr")(192,"td")(193,"code"),Qx(194,"--outline-color-focused"),og()(),Il(195,"td"),Qx(196,"Cor do outline do estado de focus"),og(),Il(197,"td")(198,"code"),Qx(199,"var(--color-action-focus)"),og()()(),Il(200,"tr")(201,"td")(202,"strong"),Qx(203,"Hover"),og()(),zl(204,"td")(205,"td"),og(),Il(206,"tr")(207,"td")(208,"code"),Qx(209,"--color-hover"),og()(),Il(210,"td"),Qx(211,"Cor principal no estado hover"),og(),Il(212,"td")(213,"code"),Qx(214,"var(--color-brand-01-darkest)"),og()()(),Il(215,"tr")(216,"td")(217,"code"),Qx(218,"--background-item-hover"),og()(),Il(219,"td"),Qx(220,"Cor de background no estado de hover"),og(),Il(221,"td")(222,"code"),Qx(223,"var(--color-brand-01-lightest)"),og()()(),Il(224,"tr")(225,"td")(226,"strong"),Qx(227,"Selected"),og()(),zl(228,"td")(229,"td"),og(),Il(230,"tr")(231,"td")(232,"code"),Qx(233,"--background-item-selected"),og()(),Il(234,"td"),Qx(235,"Cor de background do item selecionado"),og(),Il(236,"td")(237,"code"),Qx(238,"var(--color-brand-01-lightest)"),og()()()()(),Il(239,"p"),zl(240,"br"),Qx(241," O componente "),Il(242,"code"),Qx(243,"po-context-tabs"),og(),Qx(244," \xE9 respons\xE1vel por agrupar "),Il(245,"a",7),Qx(246,"abas"),og(),Qx(247,` dispostas numa linha horizontal,
ideal para facilitar a organiza\xE7\xE3o de conte\xFAdos.`),og(),Il(248,"p"),Qx(249,"O componente exibir\xE1 as abas enquanto houver espa\xE7o na tela, caso a aba ultrapasse o limite da tela a mesma ser\xE1 agrupada em um dropdown."),og(),Il(250,"blockquote")(251,"p"),Qx(252,"As abas que estiverem agrupadas ser\xE3o dispostas numa cascata suspensa que ser\xE1 exibida ao clicar no bot\xE3o."),og()(),Il(253,"p"),Qx(254,`\xC9 poss\xEDvel realizar a navega\xE7\xE3o entre as abas atrav\xE9s da tecla SETAS(direita e esquerda) do teclado.
Caso uma aba estiver desabilitada, n\xE3o receber\xE1 foco de navega\xE7\xE3o.`),og(),Il(255,"h4"),Qx(256,"Boas pr\xE1ticas"),og(),Il(257,"ul")(258,"li"),Qx(259,"Evite utilizar um "),Il(260,"code"),Qx(261,"po-context-tabs"),og(),Qx(262," dentro de outro "),Il(263,"code"),Qx(264,"po-context-tabs"),og(),Qx(265,";"),og(),Il(266,"li"),Qx(267,"Evite utilizar uma quantidade excessiva de abas, pois ir\xE1 gerar um "),Il(268,"em"),Qx(269,"scroll"),og(),Qx(270," muito longo no "),Il(271,"code"),Qx(272,"dropdown"),og(),Qx(273,";"),og(),Il(274,"li"),Qx(275,"Evite "),Il(276,"code"),Qx(277,"labels"),og(),Qx(278," extensos para as "),Il(279,"code"),Qx(280,"tabs"),og(),Qx(281," pois podem quebrar seu "),Il(282,"em"),Qx(283,"layout"),og(),Qx(284,", use "),Il(285,"code"),Qx(286,"labels"),og(),Qx(287," diretas, curtas e intuitivas."),og()()(),Il(288,"div",8)(289,"h4",9),Qx(290,"Seletor"),og(),Il(291,"pre",10),Qx(292,`<po-context-tabs
    p-size="string" >
</po-context-tabs>
`),og()(),Il(293,"h4",11),Qx(294,"Propriedades"),og(),Il(295,"table",12)(296,"tr",13)(297,"th",14),Qx(298,"Nome"),og(),Il(299,"th",14),Qx(300,"Tipo"),og(),Il(301,"th",14),Qx(302,"Padr\xE3o"),og(),Il(303,"th",14),Qx(304,"Descri\xE7\xE3o"),og()(),Il(305,"tr",15)(306,"td",16)(307,"div",17)(308,"span",18),Qx(309," p-size"),zl(310,"br"),og()()(),Il(311,"td",19)(312,"code",20),Qx(313,"string"),og()(),Il(314,"td",21)(315,"p")(316,"code"),Qx(317,"medium"),og()()(),Il(318,"td",22)(319,"em")(320,"strong"),Qx(321,"(opcional)"),og()(),Il(322,"p"),Qx(323,"Define o tamanho do componente:"),og(),Il(324,"ul")(325,"li")(326,"code"),Qx(327,"small"),og(),Qx(328,": altura dos tabs como 32px (dispon\xEDvel apenas para acessibilidade AA)."),og(),Il(329,"li")(330,"code"),Qx(331,"medium"),og(),Qx(332,": altura dos tabs como 44px."),og()(),Il(333,"blockquote")(334,"p"),Qx(335,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Il(336,"code"),Qx(337,"medium"),og(),Qx(338,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Il(339,"a",23),Qx(340,"po-theme"),og(),Qx(341,"."),og()()()()(),Il(342,"h3",11),Qx(343,"M\xE9todos"),og(),Il(344,"table",24)(345,"tr",15)(346,"th",25)(347,"div",17)(348,"h4")(349,"span",18),Qx(350," setQuantityTabsButton "),og()()()()(),Il(351,"tr",22)(352,"td",22)(353,"p"),Qx(354,"Fun\xE7\xE3o que atribui o n\xFAmero de tabs fora do dropdown."),og(),Il(355,"p"),Qx(356,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),og(),Il(357,"pre")(358,"code"),Qx(359,`import { PoContextTabsComponent } from '@po-ui/ng-components';

...

@ViewChild('poContextTabs', { static: true }) poContextTabs: PoContextTabsComponent;

changeQuantityTabs() {
  this.poContextTabs.setQuantityTabsButton(1); //N\xFAmero de context-tabs
}
`),og()()()()(),zl(360,"br"),og());},dependencies:[Ka],encapsulation:2})}return l})();var De=(()=>{class l{route;router;sub;hidePoWebSample=true;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(a,i){this.route=a,this.router=i;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let i=a.view;this.activeTab=i||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:"merge"}),this.activeTab=a;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(i){return new(i||l)(C(Xn),C(En))};static \u0275cmp=Un({type:l,selectors:[["ng-component"]],standalone:false,decls:9,vars:4,consts:[["p-title","Context Tabs",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(i,o){i&1&&(Il(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return o.changeTab("doc")}),zl(3,"sample-po-context-tabs-doc"),og(),Il(4,"po-tab",3),ft("p-click",function(){return o.changeTab("web")}),zl(5,"sample-po-context-tabs-basic-view")(6,"sample-po-context-tabs-labs-view")(7,"sample-po-context-tabs-travel-view")(8,"sample-po-context-tabs-business-conf-view"),og()()()),i&2&&(nw("p-actions",o.actions),Lp(2),nw("p-active",o.activeTab==="doc"),Lp(2),nw("p-hide",o.hidePoWebSample)("p-active",o.activeTab==="web"));},dependencies:[cNe,qme,Yme,xe,Ee,_e,ke,Me],encapsulation:2})}return l})();var Xe=[{path:"",component:De}],Be=(()=>{class l{static \u0275fac=function(i){return new(i||l)};static \u0275mod=fe({type:l});static \u0275inj=ue({imports:[uL.forChild(Xe),uL]})}return l})();var _t=(()=>{class l{static \u0275fac=function(i){return new(i||l)};static \u0275mod=fe({type:l});static \u0275inj=ue({imports:[sr,Be]})}return l})();export{_t as DocPoContextTabsModule};