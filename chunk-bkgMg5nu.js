import {f as fe,u as ue,s as sr,m as mL,w,c3 as Xn,E as En,U as Un,c as f,aW as Yp,b8 as Ume,b9 as $me,C as Sl,F as Wl,J as og,an as SO,aH as Ka,y as rN,a1 as ft,L as Lp,ar as Gx,au as dg,O as rw,bs as gN,aF as Z9,aG as wk,b0 as Qt,b1 as mv,b2 as Xhe,c8 as Tde,aB as Ix,aQ as yx,aR as vx,aM as Cw,aN as n0,bd as kx,aS as _x,aO as ww,aP as i0,av as ql,aw as lo,ax as uo,aX as Q9,aY as K9,aZ as _k,bD as Mde,b4 as L3,aJ as Whe,c9 as jhe,cn as o3,ab as lt,a3 as sNe,ba as vNe,cG as VO,a4 as EN,cH as cN,a6 as bN,br as lN,_ as _w,aD as Ky,aA as xx,aE as Xy,aT as oN}from'./main-TVDUJ47Y.js';var Te=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-tabs-basic"]],standalone:false,decls:3,vars:0,consts:[["p-label","PO Tabs 1"],["p-label","PO Tabs 2"]],template:function(o,i){o&1&&(Sl(0,"po-tabs"),Wl(1,"po-tab",0)(2,"po-tab",1),og());},dependencies:[Ume,$me],encapsulation:2,changeDetection:1})}return a})();var Oe=a=>({"docs-sample-code-tabs":a}),ye=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-tabs-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),rN(3,"PO Tabs Basic"),og(),Sl(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),rN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),rN(12,"sample-po-tabs-basic/sample-po-tabs-basic.component.html"),og(),Sl(13,"pre",7),rN(14,`<po-tabs>
  <po-tab p-label="PO Tabs 1"></po-tab>
  <po-tab p-label="PO Tabs 2"></po-tab>
</po-tabs>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),rN(18,"sample-po-tabs-basic/sample-po-tabs-basic.component.ts"),og(),Sl(19,"pre",9),rN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-tabs-basic',
  templateUrl: './sample-po-tabs-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTabsBasicComponent {}
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-tabs-basic"),og(),Wl(23,"hr")),o&2&&(Lp(5),Gx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),rw("ngClass",gN(4,Oe,i.hideSampleCodeTabs)));},dependencies:[SO,Ka,Ume,$me,Te],encapsulation:2,changeDetection:1})}return a})();var Ne=["poTab"];function Le(a,q){if(a&1){let r=Ix();Sl(0,"po-tab",9),ft("p-click",function(){let i=Ky(r).$implicit,d=xx();return Xy(d.onClick(i))}),Sl(1,"div",10),rN(2),og()();}if(a&2){let r=q.$implicit,o=q.$index;rw("p-active",r.active)("p-disabled",r.disabled)("p-hide",r.hide)("p-label",r.label),Lp(2),dg("Tab Content ",o);}}var Ee=(()=>{class a{poNotification=f(Yp);poTab;tabsFieldsForm=[{property:"label",divider:"TAB",required:true,gridColumns:6},{property:"click",gridColumns:6},{property:"active",type:"boolean",gridColumns:4},{property:"disabled",type:"boolean",gridColumns:4},{property:"hide",type:"boolean",gridColumns:4}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];size="medium";tabs=[];properties=[];pageWidth;ngOnInit(){this.restore(),this.pageWidth=window.innerWidth;}addTab(r){let o=Object.assign({},r);o.click=o.click?this.showClick.bind(this,o.click):void 0,this.tabs.push(o),this.tabs.length<=4?this.poTab.setQuantityTabsButton(this.tabs.length):this.tabs.length>4&&this.poTab.setQuantityTabsButton(4);}onClick(r){r.click&&r.click();}restore(){this.size="medium",this.tabs=[],this.poTab.quantityTabsButton=0;}showClick(r){this.poNotification.success(`Action clicked: ${r}`);}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-tabs-labs"]],viewQuery:function(o,i){if(o&1&&ql(Ne,7),o&2){let d;lo(d=uo())&&(i.poTab=d.first);}},standalone:false,decls:12,vars:6,consts:[["poTab",""],["tabsForm",""],[3,"p-size"],[3,"p-active","p-disabled","p-hide","p-label"],[3,"p-fields","p-value"],[1,"po-row"],["p-label","Add Tab",1,"po-md-3",3,"p-click","p-disabled"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"],[3,"p-click","p-active","p-disabled","p-hide","p-label"],[1,"po-font-subtitle"]],template:function(o,i){if(o&1){let d=Ix();Sl(0,"po-tabs",2,0),yx(2,Le,3,5,"po-tab",3,vx),og(),Wl(4,"po-dynamic-form",4,1),Sl(6,"div",5)(7,"po-button",6),ft("p-click",function(){Ky(d);let l=kx(5);return i.addTab(l.form.value),Xy(l.form.reset())}),og()(),Wl(8,"po-divider"),Sl(9,"po-radio-group",7),Cw("ngModelChange",function(l){return Ky(d),oN(i.size,l)||(i.size=l),Xy(l)}),og(),n0(),Sl(10,"div",5)(11,"po-button",8),ft("p-click",function(){return i.restore()}),og()();}if(o&2){let d=kx(5);rw("p-size",i.size),Lp(2),_x(i.tabs),Lp(2),rw("p-fields",i.tabsFieldsForm)("p-value",i.tabs),Lp(3),rw("p-disabled",d.form.invalid),Lp(2),ww("ngModel",i.size),rw("p-options",i.sizeOptions),i0();}},dependencies:[Z9,wk,Qt,mv,Xhe,Tde,Ume,$me],encapsulation:2,changeDetection:1})}return a})();var ze=a=>({"docs-sample-code-tabs":a}),we=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-tabs-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),rN(3,"PO Tabs Labs"),og(),Sl(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),rN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),rN(12,"sample-po-tabs-labs/sample-po-tabs-labs.component.html"),og(),Sl(13,"pre",7),rN(14,`<po-tabs #poTab [p-size]="size">
  @for (tab of tabs; track tab; let i = $index) {
    <po-tab
      [p-active]="tab.active"
      [p-disabled]="tab.disabled"
      [p-hide]="tab.hide"
      [p-label]="tab.label"
      (p-click)="onClick(tab)"
    >
      <div class="po-font-subtitle">Tab Content { { i }}</div>
    </po-tab>
  }
</po-tabs>

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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),rN(18,"sample-po-tabs-labs/sample-po-tabs-labs.component.ts"),og(),Sl(19,"pre",9),rN(20,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';

import {
  PoDynamicFormField,
  PoNotificationService,
  PoRadioGroupOption,
  PoTab,
  PoTabsComponent
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-tabs-labs',
  templateUrl: './sample-po-tabs-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTabsLabsComponent implements OnInit {
  private poNotification = inject(PoNotificationService);

  @ViewChild('poTab', { static: true }) poTab: PoTabsComponent;

  tabsFieldsForm: Array<PoDynamicFormField> = [
    { property: 'label', divider: 'TAB', required: true, gridColumns: 6 },
    { property: 'click', gridColumns: 6 },
    { property: 'active', type: 'boolean', gridColumns: 4 },
    { property: 'disabled', type: 'boolean', gridColumns: 4 },
    { property: 'hide', type: 'boolean', gridColumns: 4 }
  ];

  public sizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  size: string = 'medium';
  tabs: Array<PoTab> = [];
  properties: Array<string> = [];
  pageWidth: number;

  ngOnInit() {
    this.restore();
    this.pageWidth = window.innerWidth;
  }

  addTab(tab: PoTab) {
    const newTab = Object.assign({}, tab);

    newTab.click = newTab.click ? this.showClick.bind(this, newTab.click) : undefined;
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

  restore() {
    this.size = 'medium';
    this.tabs = [];
    this.poTab.quantityTabsButton = 0;
  }

  private showClick(action: string): any {
    this.poNotification.success(\`Action clicked: \${action}\`);
  }
}
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-tabs-labs"),og(),Wl(23,"hr")),o&2&&(Lp(5),Gx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),rw("ngClass",gN(4,ze,i.hideSampleCodeTabs)));},dependencies:[SO,Ka,Ume,$me,Ee],encapsulation:2,changeDetection:1})}return a})();var _e=(()=>{class a{poNotificationService=f(Yp);card;cardName;classFlight;classTrain;cvv;departDate;destination;expiryMonth;expiryYear;flightCompany;origin;returnDate;totalCost;trainCompany;transportation;classFlightOptions=[{label:"Economy",value:1},{label:"Business",value:2},{label:"Comfort",value:3},{label:"First Class",value:4}];classTrainOptions=[{label:"Economy",value:1},{label:"Cabin",value:2},{label:"First Class",value:3}];flightCompanyOptions=[{label:"American Airlines",value:"american"},{label:"Avianca",value:"avianca"},{label:"Delta Airlines",value:"delta"},{label:"Emirates",value:"emirates"},{label:"Latam",value:"latam"}];trainCompanyOptions=[{label:"EuroStar",value:"eurostar"},{label:"OBB",value:"obb"},{label:"Renfe",value:"renfe"},{label:"TrenItalia",value:"trenitalia"}];transportationOptions=[{label:"Flights",value:"flight"},{label:"Trains",value:"train"}];bankBillet(){this.poNotificationService.warning("Bank billet sent to email");}isPaymentEnable(r,o,i){return r.valid&&this.transportation==="flight"&&i.valid||r.valid&&this.transportation==="train"&&o.valid}getTotalCost(){return this.transportation==="flight"&&this.classFlight?(this.totalCost=800*this.classFlight,`$${this.totalCost}`):this.transportation==="train"&&this.classTrain?(this.totalCost=300*this.classTrain,`$${this.totalCost}`):(this.totalCost=void 0,"Fields are missing")}payment(){this.poNotificationService.success("Order confirmed");}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-tabs-travel"]],standalone:false,decls:47,vars:26,consts:[["formTravel","ngForm"],["formTrain","ngForm"],["formFlight","ngForm"],["formCreditCard","ngForm"],["p-active","","p-label","Destination"],[1,"po-row"],["name","origin","p-label","Origin","p-required","",1,"po-lg-12",3,"ngModelChange","ngModel"],["name","destination","p-label","Destination","p-required","",1,"po-lg-12",3,"ngModelChange","ngModel"],["name","departDate","p-label","Depart","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","returnDate","p-label","Return","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-min-date"],["name","transportation","p-label","Transportation","p-required","",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["p-label","Trains",3,"p-hide"],["name","trainCompany","p-label","Tran Company","p-required","",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","classTrain","p-label","Class","p-required","",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["p-label","Flights",3,"p-hide"],["name","flightCompany","p-label","Flight Company","p-required","",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","classFlight","p-label","Class","p-required","",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["p-label","Payment",3,"p-disabled"],["p-label","Total Cost",1,"po-md-6",3,"p-value"],["p-active","","p-label","Credit Card"],["name","cardName","p-clean","","p-label","Name on Card","p-required","",1,"po-md-8","po-lg-6",3,"ngModelChange","ngModel"],["name","card","p-clean","","p-label","Card Number","p-mask","9999 9999 9999 9999","p-required","",1,"po-md-8","po-lg-6",3,"ngModelChange","ngModel"],["name","expiryMonth","p-clean","","p-label","Expiry Month","p-mask","19","p-required","",1,"po-md-2",3,"ngModelChange","ngModel"],["name","expiryYear","p-clean","","p-label","Year","p-mask","2999","p-required","",1,"po-md-2",3,"ngModelChange","ngModel"],["name","cvv","p-clean","","p-label","CVV","p-mask","9999","p-required","",1,"po-md-2",3,"ngModelChange","ngModel"],["p-label","Pay now",1,"po-md-3",3,"p-click","p-disabled"],["p-label","Bank Billet"],["p-label","Generate Bank Billet",1,"po-md-4",3,"p-click","p-disabled"]],template:function(o,i){if(o&1){let d=Ix();Sl(0,"po-tabs")(1,"po-tab",4)(2,"form",null,0)(4,"div",5)(5,"po-input",6),Cw("ngModelChange",function(l){return Ky(d),oN(i.origin,l)||(i.origin=l),Xy(l)}),og(),n0(),og(),Sl(6,"div",5)(7,"po-input",7),Cw("ngModelChange",function(l){return Ky(d),oN(i.destination,l)||(i.destination=l),Xy(l)}),og(),n0(),og(),Sl(8,"div",5)(9,"po-datepicker",8),Cw("ngModelChange",function(l){return Ky(d),oN(i.departDate,l)||(i.departDate=l),Xy(l)}),og(),n0(),Sl(10,"po-datepicker",9),Cw("ngModelChange",function(l){return Ky(d),oN(i.returnDate,l)||(i.returnDate=l),Xy(l)}),og(),n0(),og(),Sl(11,"div",5)(12,"po-radio-group",10),Cw("ngModelChange",function(l){return Ky(d),oN(i.transportation,l)||(i.transportation=l),Xy(l)}),og(),n0(),og()()(),Sl(13,"po-tab",11)(14,"form",null,1)(16,"div",5)(17,"po-select",12),Cw("ngModelChange",function(l){return Ky(d),oN(i.trainCompany,l)||(i.trainCompany=l),Xy(l)}),og(),n0(),og(),Sl(18,"div",5)(19,"po-select",13),Cw("ngModelChange",function(l){return Ky(d),oN(i.classTrain,l)||(i.classTrain=l),Xy(l)}),og(),n0(),og()()(),Sl(20,"po-tab",14)(21,"form",null,2)(23,"div",5)(24,"po-select",15),Cw("ngModelChange",function(l){return Ky(d),oN(i.flightCompany,l)||(i.flightCompany=l),Xy(l)}),og(),n0(),og(),Sl(25,"div",5)(26,"po-select",16),Cw("ngModelChange",function(l){return Ky(d),oN(i.classFlight,l)||(i.classFlight=l),Xy(l)}),og(),n0(),og()()(),Sl(27,"po-tab",17)(28,"div",5),Wl(29,"po-info",18),og(),Sl(30,"po-tabs")(31,"po-tab",19)(32,"form",null,3)(34,"div",5)(35,"po-input",20),Cw("ngModelChange",function(l){return Ky(d),oN(i.cardName,l)||(i.cardName=l),Xy(l)}),og(),n0(),og(),Sl(36,"div",5)(37,"po-input",21),Cw("ngModelChange",function(l){return Ky(d),oN(i.card,l)||(i.card=l),Xy(l)}),og(),n0(),og(),Sl(38,"div",5)(39,"po-input",22),Cw("ngModelChange",function(l){return Ky(d),oN(i.expiryMonth,l)||(i.expiryMonth=l),Xy(l)}),og(),n0(),Sl(40,"po-input",23),Cw("ngModelChange",function(l){return Ky(d),oN(i.expiryYear,l)||(i.expiryYear=l),Xy(l)}),og(),n0(),Sl(41,"po-input",24),Cw("ngModelChange",function(l){return Ky(d),oN(i.cvv,l)||(i.cvv=l),Xy(l)}),og(),n0(),og(),Sl(42,"div",5)(43,"po-button",25),ft("p-click",function(){return i.payment()}),og()()()(),Sl(44,"po-tab",26)(45,"div",5)(46,"po-button",27),ft("p-click",function(){return i.bankBillet()}),og()()()()()();}if(o&2){let d=kx(3),g=kx(15),l=kx(22),Fe=kx(33);Lp(5),ww("ngModel",i.origin),i0(),Lp(2),ww("ngModel",i.destination),i0(),Lp(2),ww("ngModel",i.departDate),i0(),Lp(),ww("ngModel",i.returnDate),rw("p-min-date",i.departDate),i0(),Lp(2),ww("ngModel",i.transportation),rw("p-options",i.transportationOptions),i0(),Lp(),rw("p-hide",i.transportation!=="train"),Lp(4),ww("ngModel",i.trainCompany),rw("p-options",i.trainCompanyOptions),i0(),Lp(2),ww("ngModel",i.classTrain),rw("p-options",i.classTrainOptions),i0(),Lp(),rw("p-hide",i.transportation!=="flight"),Lp(4),ww("ngModel",i.flightCompany),rw("p-options",i.flightCompanyOptions),i0(),Lp(2),ww("ngModel",i.classFlight),rw("p-options",i.classFlightOptions),i0(),Lp(),rw("p-disabled",i.isPaymentEnable(d,g,l)===false),Lp(2),rw("p-value",i.getTotalCost()),Lp(6),ww("ngModel",i.cardName),i0(),Lp(2),ww("ngModel",i.card),i0(),Lp(2),ww("ngModel",i.expiryMonth),i0(),Lp(),ww("ngModel",i.expiryYear),i0(),Lp(),ww("ngModel",i.cvv),i0(),Lp(2),rw("p-disabled",!Fe.form.valid||!i.totalCost),Lp(3),rw("p-disabled",!i.totalCost);}},dependencies:[Q9,Z9,K9,wk,_k,Qt,Mde,L3,Tde,Whe,jhe,Ume,$me],encapsulation:2,changeDetection:1})}return a})();var je=a=>({"docs-sample-code-tabs":a}),Pe=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-tabs-travel-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),rN(3,"PO Tabs - Travel"),og(),Sl(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),rN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),rN(12,"sample-po-tabs-travel/sample-po-tabs-travel.component.html"),og(),Sl(13,"pre",7),rN(14,`<po-tabs>
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
  <po-tab p-label="Trains" [p-hide]="transportation !== 'train'">
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
  <po-tab p-label="Flights" [p-hide]="transportation !== 'flight'">
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
  <po-tab p-label="Payment" [p-disabled]="isPaymentEnable(formTravel, formTrain, formFlight) === false">
    <div class="po-row">
      <po-info class="po-md-6" p-label="Total Cost" [p-value]="getTotalCost()"> </po-info>
    </div>

    <po-tabs>
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

      <po-tab p-label="Bank Billet">
        <div class="po-row">
          <po-button class="po-md-4" p-label="Generate Bank Billet" [p-disabled]="!totalCost" (p-click)="bankBillet()">
          </po-button>
        </div>
      </po-tab>
    </po-tabs>
  </po-tab>
</po-tabs>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),rN(18,"sample-po-tabs-travel/sample-po-tabs-travel.component.ts"),og(),Sl(19,"pre",9),rN(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

import { PoNotificationService, PoRadioGroupOption, PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-tabs-travel',
  templateUrl: './sample-po-tabs-travel.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTabsTravelComponent {
  private poNotificationService = inject(PoNotificationService);

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
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-tabs-travel"),og(),Wl(23,"hr")),o&2&&(Lp(5),Gx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),rw("ngClass",gN(4,je,i.hideSampleCodeTabs)));},dependencies:[SO,Ka,Ume,$me,_e],encapsulation:2,changeDetection:1})}return a})();var Qe=["poTab"];function Ze(a,q){if(a&1){let r=Ix();Sl(0,"po-tab",2),EN(1,"date"),Sl(2,"div",6)(3,"div",4)(4,"div",3)(5,"div",7)(6,"po-widget")(7,"div",3)(8,"div",8),Wl(9,"po-avatar",9),og(),Sl(10,"div",10)(11,"div",11),Wl(12,"po-info",12),og(),Sl(13,"div",11),Wl(14,"po-info",13),og(),Sl(15,"div",11),Wl(16,"po-info",14),og()()()()(),Sl(17,"div",15)(18,"po-widget",16)(19,"div",17),rN(20,"TFace Conference Week"),og(),Sl(21,"div",18),rN(22,"From 21th September until 26th setember 2018"),og(),Wl(23,"po-divider"),Sl(24,"div",3)(25,"div",19)(26,"span",20),Wl(27,"po-icon",21),og(),Sl(28,"span",22),rN(29),EN(30,"date"),og()(),Sl(31,"div",19)(32,"span",20),Wl(33,"po-icon",23),og(),Sl(34,"span",24),rN(35,"Av. Braz Leme, 1000, Santana"),og()()(),Sl(36,"div",25)(37,"po-button",26),ft("p-click",function(){let i=Ky(r).$implicit,d=xx();return Xy(d.confirmSubscription(i))}),og()()()()()()()();}if(a&2){let r=q.$implicit;rw("p-label",cN(bN(1,10,r.createdDate,"MMM d")))("p-active",r.id==="1")("p-hide",r.subscribe),Lp(9),rw("p-src",lN("assets/graphics/",r.photo)),Lp(3),rw("p-value",r.name),Lp(2),rw("p-value",r.email),Lp(2),rw("p-value",r.description),Lp(13),_w(bN(30,13,r.createdDate,"MM/dd/yyyy"));}}var ke=(()=>{class a{poNotification=f(Yp);poTab;disableRestoreBtn=true;speakers;pageWidth;ngOnInit(){this.speakers=this.getSpeakers(),this.pageWidth=window.innerWidth,this.pageWidth<=600&&this.poTab.setQuantityTabsButton(3);}cancelSubscription(){this.disableRestoreBtn=true,this.speakers.forEach(r=>r.subscribe=false);}confirmSubscription(r){this.disableRestoreBtn=false,r.subscribe=true,this.poNotification.success("Registration completed successfully. See you soon!");}getSpeakers(){return [{id:"1",name:"Peter Benjamin Parker",email:"peter.parker@po-ui.com.br",photo:"avatar1.png",description:"Nodejs developer with 4 years experience",createdDate:"2018-09-21T20:21:06.990Z",subscribe:"false"},{id:"2",name:"Natasha Romanova",email:"natasha.romanova@po-ui.com.br",photo:"avatar2.png",description:"Angular developer with 2 years experience",createdDate:"2018-09-22T20:21:06.990Z",subscribe:"false"},{id:"3",name:"Anthony Stark",email:"anthony.stark@po-ui.com.br",photo:"avatar3.png",description:"Javascript developer with 8 years experience",createdDate:"2018-09-23T20:21:06.990Z",subscribe:"false"},{id:"4",name:"Carol Danvers",email:"carol.danvers@po-ui.com.br",photo:"avatar4.png",description:"Full stack developer with 2 years experience",createdDate:"2018-09-24T20:21:06.990Z",subscribe:"false"},{id:"5",name:"Wagner Dantas",email:"wagner.dantas@po-ui.com.br",photo:"avatar5.png",description:"Front-end Engineer developer with 8 years experience",createdDate:"2018-09-25T20:21:06.990Z",subscribe:"false"},{id:"6",name:"Kaiam Alexandre",email:"kaiam.alexandre@po-ui.com.br",photo:"avatar6.png",description:"Javascript developer with 12 years experience",createdDate:"2018-09-26T20:21:06.990Z",subscribe:"false"}]}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-tabs-business-conf"]],viewQuery:function(o,i){if(o&1&&ql(Qe,7),o&2){let d;lo(d=uo())&&(i.poTab=d.first);}},standalone:false,decls:10,vars:1,consts:[["poTab",""],["p-title","Check the speaker's list"],[3,"p-label","p-active","p-hide"],[1,"po-row"],[1,"po-offset-lg-1","po-offset-xl-1","po-lg-10"],["p-label","Cancel Subscription",1,"po-offset-lg-8","po-offset-xl-8","po-lg-4",3,"p-click","p-disabled"],[1,"po-row","po-mt-5"],[1,"po-lg-8","po-mb-2"],[1,"po-md-5","po-lg-4"],["p-size","xl",3,"p-src"],[1,"po-md-7","po-lg-8"],[1,"po-mb-2"],["p-label","Speaker",3,"p-value"],["p-label","Email",1,"po-mt-5",3,"p-value"],["p-label","Description",1,"po-mb-5",3,"p-value"],[1,"po-lg-4","po-mb-2"],["p-title","Subscription"],[1,"po-font-subtitle","po-mb-2"],[1,"po-font-text-bold","po-mb-5"],[1,"po-md-6","po-lg-12"],[1,"po-mr-1","po-font-subtitle"],["p-icon","po-icon an an-calendar-dots"],[1,"po-font-text","po-mb-2"],["p-icon","po-icon an an-map-pin"],[1,"po-font-text"],[1,"po-mt-5"],["p-label","Subscription",1,"po-mt-5",3,"p-click"]],template:function(o,i){o&1&&(Sl(0,"po-page-default",1)(1,"po-tabs",null,0),yx(3,Ze,38,16,"po-tab",2,vx),og(),Wl(5,"po-divider"),Sl(6,"div",3)(7,"div",4)(8,"div",3)(9,"po-button",5),ft("p-click",function(){return i.cancelSubscription()}),og()()()()()),o&2&&(Lp(3),_x(i.speakers),Lp(6),rw("p-disabled",i.disableRestoreBtn));},dependencies:[o3,Qt,mv,lt,jhe,sNe,Ume,$me,vNe,VO],encapsulation:2,changeDetection:1})}return a})();var Ge=a=>({"docs-sample-code-tabs":a}),xe=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-tabs-business-conf-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),rN(3,"PO Tabs - Business Conference"),og(),Sl(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),rN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),rN(12,"sample-po-tabs-business-conf/sample-po-tabs-business-conf.component.html"),og(),Sl(13,"pre",7),rN(14,`<po-page-default p-title="Check the speaker's list">
  <po-tabs #poTab>
    @for (speaker of speakers; track speaker) {
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
                  <po-divider />
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
  </po-tabs>

  <po-divider />

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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),rN(18,"sample-po-tabs-business-conf/sample-po-tabs-business-conf.component.ts"),og(),Sl(19,"pre",9),rN(20,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';

import { PoNotificationService, PoTabsComponent } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-tabs-business-conf',
  templateUrl: './sample-po-tabs-business-conf.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTabsBusinessConfComponent implements OnInit {
  private poNotification = inject(PoNotificationService);

  @ViewChild('poTab', { static: true }) poTab: PoTabsComponent;

  disableRestoreBtn: boolean = true;
  speakers: Array<any>;
  pageWidth: number;

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
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-tabs-business-conf"),og(),Wl(23,"hr")),o&2&&(Lp(5),Gx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),rw("ngClass",gN(4,Ge,i.hideSampleCodeTabs)));},dependencies:[SO,Ka,Ume,$me,ke],encapsulation:2,changeDetection:1})}return a})();var Me=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-tabs-doc"]],standalone:false,decls:399,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],["href","/documentation/po-tab"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"]],template:function(o,i){o&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),rN(3,"import { PoTabsModule } from '@po-ui/ng-components';"),og()(),Sl(4,"div",2)(5,"p"),rN(6,"M\xF3dulo do componente po-tabs"),og()(),Sl(7,"h3",3),rN(8,"Componente"),og(),Sl(9,"h4",4)(10,"code",5),rN(11,"PoTabsComponent"),og()(),Sl(12,"div",2)(13,"h4"),rN(14,"Tokens customiz\xE1veis"),og(),Sl(15,"p"),rN(16,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),og(),Sl(17,"blockquote")(18,"p"),rN(19,"Para maiores informa\xE7\xF5es, acesse o guia "),Sl(20,"a",6),rN(21,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),rN(22,"."),og()(),Sl(23,"table")(24,"thead")(25,"tr")(26,"th"),rN(27,"Propriedade"),og(),Sl(28,"th"),rN(29,"Descri\xE7\xE3o"),og(),Sl(30,"th"),rN(31,"Valor Padr\xE3o"),og()()(),Sl(32,"tbody")(33,"tr")(34,"td")(35,"strong"),rN(36,"Default Values"),og()(),Wl(37,"td")(38,"td"),og(),Sl(39,"tr")(40,"td")(41,"code"),rN(42,"--background"),og()(),Sl(43,"td"),rN(44,"Cor de background"),og(),Sl(45,"td")(46,"code"),rN(47,"var(--color-transparent)"),og()()(),Sl(48,"tr")(49,"td")(50,"code"),rN(51,"--background-item-default"),og()(),Sl(52,"td"),rN(53,"Cor de background do item padr\xE3o"),og(),Sl(54,"td")(55,"code"),rN(56,"var(--color-transparent)"),og()()(),Sl(57,"tr")(58,"td")(59,"code"),rN(60,"--border-radius"),og()(),Sl(61,"td"),rN(62,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),og(),Sl(63,"td")(64,"code"),rN(65,"var(--border-radius-md)"),og()()(),Sl(66,"tr")(67,"td")(68,"code"),rN(69,"--color"),og()(),Sl(70,"td"),rN(71,"Cor da fonte padr\xE3o"),og(),Sl(72,"td")(73,"code"),rN(74,"var(--color-action-default)"),og()()(),Sl(75,"tr")(76,"td")(77,"code"),rN(78,"--color-baseline"),og()(),Sl(79,"td"),rN(80,"Cor para box-shadow"),og(),Sl(81,"td")(82,"code"),rN(83,"var(--color-neutral-light-20)"),og()()(),Sl(84,"tr")(85,"td")(86,"code"),rN(87,"--font-family"),og()(),Sl(88,"td"),rN(89,"Fam\xEDlia tipogr\xE1fica usada"),og(),Sl(90,"td")(91,"code"),rN(92,"var(--font-family-theme)"),og()()(),Sl(93,"tr")(94,"td")(95,"code"),rN(96,"--font-size"),og()(),Sl(97,"td"),rN(98,"Tamanho da fonte"),og(),Sl(99,"td")(100,"code"),rN(101,"var(--font-size-default)"),og()()(),Sl(102,"tr")(103,"td")(104,"code"),rN(105,"--font-weight"),og()(),Sl(106,"td"),rN(107,"Peso da fonte"),og(),Sl(108,"td")(109,"code"),rN(110,"var(--font-weight-bold)"),og()()(),Sl(111,"tr")(112,"td")(113,"code"),rN(114,"--margin-tabs-container-left"),og()(),Sl(115,"td"),rN(116,"Margem lateral esquerda do componente quando usado dentro de um "),Sl(117,"code"),rN(118,"page-default"),og()(),Sl(119,"td")(120,"code"),rN(121,"var(--spacing-md)"),og()()(),Sl(122,"tr")(123,"td")(124,"code"),rN(125,"--margin-tabs-container-right"),og()(),Sl(126,"td"),rN(127,"Margem lateral direita do componente quando usado dentro de um "),Sl(128,"code"),rN(129,"page-default"),og()(),Sl(130,"td")(131,"code"),rN(132,"-16px"),og()()(),Sl(133,"tr")(134,"td")(135,"code"),rN(136,"--padding-tabs-header"),og()(),Sl(137,"td"),rN(138,"Padding do valor lateral das abas"),og(),Sl(139,"td")(140,"code"),rN(141,"var(--spacing-sm)"),og()()(),Sl(142,"tr")(143,"td")(144,"code"),rN(145,"--margin-tabs-first-child"),og()(),Sl(146,"td"),rN(147,"Margem lateral da primeira aba"),og(),Sl(148,"td")(149,"code"),rN(150,"var(--spacing-md)"),og()()(),Sl(151,"tr")(152,"td")(153,"code"),rN(154,"--margin-tabs-last-child"),og()(),Sl(155,"td"),rN(156,"Margem lateral da ultima aba"),og(),Sl(157,"td")(158,"code"),rN(159,"var(--spacing-md)"),og()()(),Sl(160,"tr")(161,"td")(162,"strong"),rN(163,"Disabled"),og()(),Wl(164,"td")(165,"td"),og(),Sl(166,"tr")(167,"td")(168,"code"),rN(169,"--color-disabled"),og()(),Sl(170,"td"),rN(171,"Cor da fonte no estado disabilitado"),og(),Sl(172,"td")(173,"code"),rN(174,"var(--color-action-disabled)"),og()()(),Sl(175,"tr")(176,"td")(177,"code"),rN(178,"--background-item-disabled"),og(),rN(179,"\xA0"),og(),Sl(180,"td"),rN(181,"Cor de background do item desabilitado"),og(),Sl(182,"td")(183,"code"),rN(184,"var(--color-neutral-light-10)"),og()()(),Sl(185,"tr")(186,"td")(187,"strong"),rN(188,"Focused"),og()(),Wl(189,"td")(190,"td"),og(),Sl(191,"tr")(192,"td")(193,"code"),rN(194,"--outline-color-focused"),og()(),Sl(195,"td"),rN(196,"Cor do outline do estado de focus"),og(),Sl(197,"td")(198,"code"),rN(199,"var(--color-action-focus)"),og()()(),Sl(200,"tr")(201,"td")(202,"strong"),rN(203,"Hover"),og()(),Wl(204,"td")(205,"td"),og(),Sl(206,"tr")(207,"td")(208,"code"),rN(209,"--color-hover"),og()(),Sl(210,"td"),rN(211,"Cor principal no estado hover"),og(),Sl(212,"td")(213,"code"),rN(214,"var(--color-brand-01-darkest)"),og()()(),Sl(215,"tr")(216,"td")(217,"code"),rN(218,"--background-item-hover"),og()(),Sl(219,"td"),rN(220,"Cor de background no estado de hover"),og(),Sl(221,"td")(222,"code"),rN(223,"var(--color-brand-01-lightest)"),og()()(),Sl(224,"tr")(225,"td")(226,"strong"),rN(227,"Selected"),og()(),Wl(228,"td")(229,"td"),og(),Sl(230,"tr")(231,"td")(232,"code"),rN(233,"--background-item-selected"),og()(),Sl(234,"td"),rN(235,"Cor de background do item selecionado"),og(),Sl(236,"td")(237,"code"),rN(238,"var(--color-brand-01-lightest)"),og()()()()(),Sl(239,"p"),Wl(240,"br"),rN(241," O componente "),Sl(242,"code"),rN(243,"po-tabs"),og(),rN(244," \xE9 respons\xE1vel por agrupar "),Sl(245,"a",7),rN(246,"abas"),og(),rN(247,` dispostas numa linha horizontal,
ideal para facilitar a organiza\xE7\xE3o de conte\xFAdos.`),og(),Sl(248,"p"),rN(249,"O componente exibir\xE1 as abas enquanto houver espa\xE7o na tela, caso a aba ultrapasse o limite da tela a mesma ser\xE1 agrupada em um dropdown."),og(),Sl(250,"blockquote")(251,"p"),rN(252,"As abas que estiverem agrupadas ser\xE3o dispostas numa cascata suspensa que ser\xE1 exibida ao clicar no bot\xE3o."),og()(),Sl(253,"p"),rN(254,`\xC9 poss\xEDvel realizar a navega\xE7\xE3o entre as abas atrav\xE9s da tecla SETAS(direita e esquerda) do teclado.
Caso uma aba estiver desabilitada, n\xE3o receber\xE1 foco de navega\xE7\xE3o.`),og(),Sl(255,"h4"),rN(256,"Boas pr\xE1ticas"),og(),Sl(257,"ul")(258,"li"),rN(259,"Evite utilizar um "),Sl(260,"code"),rN(261,"po-tabs"),og(),rN(262," dentro de outro "),Sl(263,"code"),rN(264,"po-tabs"),og(),rN(265,";"),og(),Sl(266,"li"),rN(267,"Evite utilizar uma quantidade excessiva de abas, pois ir\xE1 gerar um "),Sl(268,"em"),rN(269,"scroll"),og(),rN(270," muito longo no "),Sl(271,"code"),rN(272,"dropdown"),og(),rN(273,";"),og(),Sl(274,"li"),rN(275,"Evite "),Sl(276,"code"),rN(277,"labels"),og(),rN(278," extensos para as "),Sl(279,"code"),rN(280,"tabs"),og(),rN(281," pois podem quebrar seu "),Sl(282,"em"),rN(283,"layout"),og(),rN(284,", use "),Sl(285,"code"),rN(286,"labels"),og(),rN(287," diretas, curtas e intuitivas."),og()()(),Sl(288,"div",8)(289,"h4",9),rN(290,"Seletor"),og(),Sl(291,"pre",10),rN(292,`<po-tabs
    p-size="string" >
</po-tabs>
`),og()(),Sl(293,"h4",11),rN(294,"Propriedades"),og(),Sl(295,"table",12)(296,"tr",13)(297,"th",14),rN(298,"Nome"),og(),Sl(299,"th",14),rN(300,"Tipo"),og(),Sl(301,"th",14),rN(302,"Padr\xE3o"),og(),Sl(303,"th",14),rN(304,"Descri\xE7\xE3o"),og()(),Sl(305,"tr",15)(306,"td",16)(307,"div",17)(308,"span",18),rN(309," p-size"),Wl(310,"br"),og()()(),Sl(311,"td",19)(312,"code",20),rN(313,"string"),og()(),Sl(314,"td",21)(315,"p")(316,"code"),rN(317,"medium"),og()()(),Sl(318,"td",22)(319,"em")(320,"strong"),rN(321,"(opcional)"),og()(),Sl(322,"p"),rN(323,"Define o tamanho do componente:"),og(),Sl(324,"ul")(325,"li")(326,"code"),rN(327,"small"),og(),rN(328,": altura dos tabs como 32px (dispon\xEDvel apenas para acessibilidade AA)."),og(),Sl(329,"li")(330,"code"),rN(331,"medium"),og(),rN(332,": altura dos tabs como 44px."),og()(),Sl(333,"blockquote")(334,"p"),rN(335,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Sl(336,"code"),rN(337,"medium"),og(),rN(338,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Sl(339,"a",23),rN(340,"po-theme"),og(),rN(341,"."),og()()()()(),Sl(342,"h3",11),rN(343,"M\xE9todos"),og(),Sl(344,"table",24)(345,"tr",15)(346,"th",25)(347,"div",17)(348,"h4")(349,"span",18),rN(350," setQuantityTabsButton "),og()()()()(),Sl(351,"tr",22)(352,"td",22)(353,"p"),rN(354,"Fun\xE7\xE3o que atribui o n\xFAmero de tabs fora do dropdown."),og(),Sl(355,"p"),rN(356,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),og(),Sl(357,"pre")(358,"code"),rN(359,`import { PoTabsComponent } from '@po-ui/ng-components';

...

@ViewChild('poTab', { static: true }) poTab: PoTabsComponent;

changeQuantityTabs() {
  this.poTab.setQuantityTabsButton(1); //N\xFAmero de tabs
}
`),og()()()()(),Wl(360,"br"),Sl(361,"table",24)(362,"tr",15)(363,"th",25)(364,"div",17)(365,"h4")(366,"span",18),rN(367," activateTab "),og()()()()(),Sl(368,"tr",22)(369,"td",22)(370,"p"),rN(371,"Ativa a aba correspondente ao "),Sl(372,"code"),rN(373,"id"),og(),rN(374," informado."),og(),Sl(375,"p"),rN(376,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),og(),Sl(377,"pre")(378,"code"),rN(379,`import { PoTabsComponent } from '@po-ui/ng-components';

...

@ViewChild('poTab', { static: true }) poTab: PoTabsComponent;

focusOnTab() {
  this.poTab.activateTab('meu-id-da-aba');
}
`),og()()()()(),Sl(380,"h5")(381,"b"),rN(382,"Par\xE2metros"),og()(),Sl(383,"table",12)(384,"tr",13)(385,"th",14),rN(386,"Nome"),og(),Sl(387,"th",14),rN(388,"Tipo"),og(),Sl(389,"th",14),rN(390,"Descri\xE7\xE3o"),og()(),Sl(391,"tr",15)(392,"td",16),rN(393," id"),og(),Wl(394,"td",19),Sl(395,"td",22)(396,"p"),rN(397,"Identificador \xFAnico da aba a ser ativada."),og()()()(),Wl(398,"br"),og());},dependencies:[Ka],encapsulation:2,changeDetection:1})}return a})();var De=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,o){this.route=r,this.router=o;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let o=r.view;this.activeTab=o||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(o){return new(o||a)(w(Xn),w(En))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:9,vars:4,consts:[["p-title","Tabs",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(o,i){o&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return i.changeTab("doc")}),Wl(3,"sample-po-tabs-doc"),og(),Sl(4,"po-tab",3),ft("p-click",function(){return i.changeTab("web")}),Wl(5,"sample-po-tabs-basic-view")(6,"sample-po-tabs-labs-view")(7,"sample-po-tabs-travel-view")(8,"sample-po-tabs-business-conf-view"),og()()()),o&2&&(rw("p-actions",i.actions),Lp(2),rw("p-active",i.activeTab==="doc"),Lp(2),rw("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[sNe,Ume,$me,ye,we,Pe,xe,Me],encapsulation:2,changeDetection:1})}return a})();var Ke=[{path:"",component:De}],Be=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275mod=fe({type:a});static \u0275inj=ue({imports:[mL.forChild(Ke),mL]})}return a})();var At=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275mod=fe({type:a});static \u0275inj=ue({imports:[sr,Be]})}return a})();export{At as DocPoTabsModule};