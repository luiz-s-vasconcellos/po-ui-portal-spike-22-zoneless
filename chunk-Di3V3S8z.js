import {f as fe$1,u as ue,s as sr,h as hL,w,c3 as Xn,E as En,U as Un,aW as Yp,aV as Ur,dI as Jn,b0 as Qt,F as Sl,a1 as ft,J as og,an as CO,aH as Ka,b8 as Bme,b9 as qme,H as Wl,z as eN,L as Lp,ar as $x,au as dg,Q as nw,bs as fN,aX as Z9,aF as G9,aY as q9,aG as _k,aZ as mk,b1 as mv,b4 as L3,cp as Rhe,c8 as wde,bH as M3,b6 as Yo,aB as wx,aM as ww,aN as e0,aO as Ew,aP as n0,R as we$1,av as ql,aw as lo,ax as uo,bC as f3,b7 as k3,dF as VO,a4 as yN,bd as Nx,a5 as DN,a3 as rNe,aD as Ky,aT as nN,aE as Xy}from'./main-WP3NAV7C.js';var de=(()=>{class a{poNotification;constructor(l){this.poNotification=l;}static \u0275fac=function(n){return new(n||a)(w(Yp))};static \u0275cmp=Un({type:a,selectors:[["sample-po-notification-basic"]],standalone:false,decls:1,vars:0,consts:[["p-label","Open Notification",3,"p-click"]],template:function(n,o){n&1&&(Sl(0,"po-button",0),ft("p-click",function(){return o.poNotification.success("PO Notification!")}),og());},dependencies:[Qt],encapsulation:2,changeDetection:1})}return a})();var ve=a=>({"docs-sample-code-tabs":a}),fe=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(n){return new(n||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-notification-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(n,o){n&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Notification Basic"),og(),Sl(4,"a",2),ft("click",function(){return o.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-notification-basic/sample-po-notification-basic.component.html"),og(),Sl(13,"pre",7),eN(14,`<po-button p-label="Open Notification" (p-click)="poNotification.success('PO Notification!')"> </po-button>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-notification-basic/sample-po-notification-basic.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

import { PoNotificationService } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-notification-basic',
  templateUrl: './sample-po-notification-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoNotificationBasicComponent {
  constructor(public poNotification: PoNotificationService) {}
}
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-notification-basic"),og(),Wl(23,"hr")),n&2&&(Lp(5),$x("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,ve,o.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,de],encapsulation:2})}return a})();var he=(()=>{class a{poNotification;poModal;action;actionLabel;message;orientation;sizeActions;type;duration;orientationOptions=[{label:"Top",value:Ur.Top},{label:"Bottom",value:Ur.Bottom}];sizeActionsOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];typeOptions=[{label:"Success",value:Jn.Success},{label:"Error",value:Jn.Error},{label:"Warning",value:Jn.Warning},{label:"Information",value:Jn.Information}];constructor(l){this.poNotification=l;}ngOnInit(){this.restore();}restore(){this.message="PO Notification",this.type=void 0,this.orientation=void 0,this.action=false,this.actionLabel="",this.duration=void 0,this.sizeActions="medium";}showNotification(){let l={message:this.message,orientation:this.orientation,action:void 0,actionLabel:this.actionLabel,duration:this.duration,sizeActions:this.sizeActions};switch(this.action&&(l.action=()=>this.poModal.open()),this.type){case Jn.Success:{this.poNotification.success(l);break}case Jn.Error:{this.poNotification.error(l);break}case Jn.Warning:{this.poNotification.warning(l);break}case Jn.Information:{this.poNotification.information(l);break}default:{this.poNotification.success(l);break}}}static \u0275fac=function(n){return new(n||a)(w(Yp))};static \u0275cmp=Un({type:a,selectors:[["sample-po-notification-labs"]],viewQuery:function(n,o){if(n&1&&ql(Yo,7),n&2){let c;lo(c=uo())&&(o.poModal=c.first);}},standalone:false,features:[we$1([Yp])],decls:16,vars:10,consts:[["f","ngForm"],["p-label","Open Notification",3,"p-click"],[1,"po-row"],["name","type","p-columns","4","p-label","Type",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","orientation","p-label","Orientation",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","message","p-clean","","p-label","Message","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","duration","p-clean","","p-label","Duration",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","action","p-label","Action",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","actionLabel","p-clean","","p-label","Action Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","size","p-columns","4","p-label","Components size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"],["p-title","PO Notification"]],template:function(n,o){if(n&1){let c=wx();Sl(0,"po-button",1),ft("p-click",function(){return o.showNotification()}),og(),Wl(1,"po-divider"),Sl(2,"div",2)(3,"form",null,0)(5,"po-radio-group",3),ww("ngModelChange",function(r){return Ky(c),nN(o.type,r)||(o.type=r),Xy(r)}),og(),e0(),Sl(6,"po-radio-group",4),ww("ngModelChange",function(r){return Ky(c),nN(o.orientation,r)||(o.orientation=r),Xy(r)}),og(),e0(),Sl(7,"po-input",5),ww("ngModelChange",function(r){return Ky(c),nN(o.message,r)||(o.message=r),Xy(r)}),og(),e0(),Sl(8,"po-number",6),ww("ngModelChange",function(r){return Ky(c),nN(o.duration,r)||(o.duration=r),Xy(r)}),og(),e0(),Sl(9,"po-switch",7),ww("ngModelChange",function(r){return Ky(c),nN(o.action,r)||(o.action=r),Xy(r)}),og(),e0(),Sl(10,"po-input",8),ww("ngModelChange",function(r){return Ky(c),nN(o.actionLabel,r)||(o.actionLabel=r),Xy(r)}),og(),e0(),Sl(11,"po-radio-group",9),ww("ngModelChange",function(r){return Ky(c),nN(o.sizeActions,r)||(o.sizeActions=r),Xy(r)}),og(),e0(),Sl(12,"div",2)(13,"po-button",10),ft("p-click",function(){return o.restore()}),og()()()(),Sl(14,"po-modal",11),eN(15," Notification Action "),og();}n&2&&(Lp(5),Ew("ngModel",o.type),nw("p-options",o.typeOptions),n0(),Lp(),Ew("ngModel",o.orientation),nw("p-options",o.orientationOptions),n0(),Lp(),Ew("ngModel",o.message),n0(),Lp(),Ew("ngModel",o.duration),n0(),Lp(),Ew("ngModel",o.action),n0(),Lp(),Ew("ngModel",o.actionLabel),n0(),Lp(),Ew("ngModel",o.sizeActions),nw("p-options",o.sizeActionsOptions),n0());},dependencies:[Z9,G9,q9,_k,mk,Qt,mv,L3,Rhe,wde,M3,Yo],encapsulation:2,changeDetection:1})}return a})();var we=a=>({"docs-sample-code-tabs":a}),be=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(n){return new(n||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-notification-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(n,o){n&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Notification Labs"),og(),Sl(4,"a",2),ft("click",function(){return o.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-notification-labs/sample-po-notification-labs.component.html"),og(),Sl(13,"pre",7),eN(14,`<po-button (p-click)="showNotification()" p-label="Open Notification"> </po-button>

<po-divider />

<div class="po-row">
  <form #f="ngForm">
    <po-radio-group
      class="po-md-12"
      name="type"
      [(ngModel)]="type"
      p-columns="4"
      p-label="Type"
      [p-options]="typeOptions"
    >
    </po-radio-group>

    <po-radio-group
      class="po-lg-6"
      name="orientation"
      [(ngModel)]="orientation"
      p-label="Orientation"
      [p-options]="orientationOptions"
    >
    </po-radio-group>

    <po-input class="po-md-6" name="message" [(ngModel)]="message" p-clean p-label="Message" p-required> </po-input>

    <po-number class="po-md-6 po-lg-3" name="duration" [(ngModel)]="duration" p-clean p-label="Duration"> </po-number>

    <po-switch class="po-md-6 po-lg-3" name="action" [(ngModel)]="action" p-label="Action"> </po-switch>

    <po-input class="po-md-6" name="actionLabel" [(ngModel)]="actionLabel" p-clean p-label="Action Label"> </po-input>

    <po-radio-group
      class="po-md-12"
      name="size"
      [(ngModel)]="sizeActions"
      p-columns="4"
      p-label="Components size"
      p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
      [p-options]="sizeActionsOptions"
    >
    </po-radio-group>

    <div class="po-row">
      <po-button class="po-md-3" p-label="Sample Restore" (p-click)="restore()"> </po-button>
    </div>
  </form>
</div>

<po-modal p-title="PO Notification"> Notification Action </po-modal>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-notification-labs/sample-po-notification-labs.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';

import {
  PoModalComponent,
  PoNotification,
  PoNotificationService,
  PoRadioGroupOption,
  PoToasterOrientation,
  PoToasterType
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-notification-labs',
  templateUrl: './sample-po-notification-labs.component.html',
  providers: [PoNotificationService],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoNotificationLabsComponent implements OnInit {
  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;

  action: boolean;
  actionLabel: string;
  message: string;
  orientation: number;
  sizeActions: string;
  type: PoToasterType;
  duration: number;

  public readonly orientationOptions: Array<PoRadioGroupOption> = [
    { label: 'Top', value: PoToasterOrientation.Top },
    { label: 'Bottom', value: PoToasterOrientation.Bottom }
  ];

  public readonly sizeActionsOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  public readonly typeOptions: Array<PoRadioGroupOption> = [
    { label: 'Success', value: PoToasterType.Success },
    { label: 'Error', value: PoToasterType.Error },
    { label: 'Warning', value: PoToasterType.Warning },
    { label: 'Information', value: PoToasterType.Information }
  ];

  constructor(private poNotification: PoNotificationService) {}

  ngOnInit() {
    this.restore();
  }

  restore() {
    this.message = 'PO Notification';
    this.type = undefined;
    this.orientation = undefined;
    this.action = false;
    this.actionLabel = '';
    this.duration = undefined;
    this.sizeActions = 'medium';
  }

  showNotification() {
    const poNotification: PoNotification = {
      message: this.message,
      orientation: this.orientation,
      action: undefined,
      actionLabel: this.actionLabel,
      duration: this.duration,
      sizeActions: this.sizeActions
    };

    if (this.action) {
      poNotification.action = () => this.poModal.open();
    }

    switch (this.type) {
      case PoToasterType.Success: {
        this.poNotification.success(poNotification);
        break;
      }
      case PoToasterType.Error: {
        this.poNotification.error(poNotification);
        break;
      }
      case PoToasterType.Warning: {
        this.poNotification.warning(poNotification);
        break;
      }
      case PoToasterType.Information: {
        this.poNotification.information(poNotification);
        break;
      }
      default: {
        this.poNotification.success(poNotification);
        break;
      }
    }
  }
}
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-notification-labs"),og(),Wl(23,"hr")),n&2&&(Lp(5),$x("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,we,o.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,he],encapsulation:2})}return a})();var ge=(()=>{class a{poNotification;name;price;product;quantity;stock;totalPrice;totalPriceSum=2500;columns=[{property:"productID",label:"Id"},{property:"productName",label:"Product"},{property:"quantity",label:"Quantity"},{property:"price",label:"Price",type:"currency",format:"BRL"},{property:"total",label:"Total Price",type:"currency",format:"BRL"}];products=[{productID:"004",productName:"Notebook",quantity:2,price:1250,total:2500}];productDetailsList=[{id:"001",price:50,stock:10},{id:"002",price:210,stock:5},{id:"003",price:998,stock:2},{id:"004",price:1250,stock:1}];productOptions=[{value:"001",label:"p-Shirt Blue"},{value:"002",label:"Clock"},{value:"003",label:"Cellphone"},{value:"004",label:"Notebook"}];constructor(l){this.poNotification=l;}addCart(){if(this.checkQuantity(),this.productOptions&&this.quantity>0){let l=this.products.findIndex(n=>n.productID===this.product);l>=0?(this.products[l].quantity+=this.quantity,this.products[l].total+=this.totalPrice):this.products.push({productID:this.product,productName:this.name,quantity:this.quantity,price:this.price,total:this.totalPrice}),this.totalPriceSum+=this.totalPrice,this.poNotification.success("Order included successfully!"),this.stockUpdate(this.product,this.quantity),this.clearFields();}}checkProduct(){let l=this.productDetailsList.findIndex(n=>n.id===this.product);if(l>=0){let n=this.productDetailsList[l];this.price=n.price,this.stock=n.stock,this.name=this.productOptions[l].label;}}checkQuantity(){this.quantity>this.stock?this.poNotification.error("Quantity not available in stock"):this.totalValue();}clearFields(){this.product="",this.price=0,this.quantity=0,this.stock=0,this.totalPrice=0;}stockUpdate(l,n){let o=this.productDetailsList.find(c=>c.id===l);o.stock=o.stock-n;}totalValue(){this.totalPrice=this.quantity*this.price;}static \u0275fac=function(n){return new(n||a)(w(Yp))};static \u0275cmp=Un({type:a,selectors:[["sample-po-notification-sales"]],standalone:false,features:[we$1([Yp])],decls:17,vars:14,consts:[["f","ngForm"],[1,"po-row"],["name","product","p-label","Product","p-placeholder","Select a Product","p-required","",1,"po-md-4",3,"ngModelChange","p-change","ngModel","p-options"],["name","quantity","p-label","Quantity","p-min","0","p-placeholder","0","p-required","",1,"po-md-2",3,"ngModelChange","p-change","ngModel","p-max"],["name","price","p-disabled","","p-label","Price","p-placeholder","0","p-required","",1,"po-md-2",3,"ngModelChange","ngModel"],["name","stock","p-disabled","","p-label","Stock","p-placeholder","0","p-required","",1,"po-md-2",3,"ngModelChange","ngModel"],["name","totalPrice","p-disabled","","p-label","Total Price","p-placeholder","0","p-required","",1,"po-md-2",3,"ngModelChange","ngModel"],["p-label","Add To Cart",1,"po-md-3",3,"p-click","p-disabled"],["p-striped","true",3,"p-columns","p-items","p-hide-table-search"],[1,"po-pull-right","po-lg-12"],[1,"po-pull-right","po-font-subtitle"]],template:function(n,o){if(n&1){let c=wx();Sl(0,"form",null,0)(2,"div",1)(3,"po-combo",2),ww("ngModelChange",function(r){return Ky(c),nN(o.product,r)||(o.product=r),Xy(r)}),ft("p-change",function(){return o.checkProduct()}),og(),e0(),Sl(4,"po-number",3),ww("ngModelChange",function(r){return Ky(c),nN(o.quantity,r)||(o.quantity=r),Xy(r)}),ft("p-change",function(){return o.checkQuantity()}),og(),e0(),Sl(5,"po-number",4),ww("ngModelChange",function(r){return Ky(c),nN(o.price,r)||(o.price=r),Xy(r)}),og(),e0(),Sl(6,"po-number",5),ww("ngModelChange",function(r){return Ky(c),nN(o.stock,r)||(o.stock=r),Xy(r)}),og(),e0(),Sl(7,"po-number",6),ww("ngModelChange",function(r){return Ky(c),nN(o.totalPrice,r)||(o.totalPrice=r),Xy(r)}),og(),e0(),og(),Sl(8,"div",1)(9,"po-button",7),ft("p-click",function(){return o.addCart()}),og()()(),Wl(10,"po-divider")(11,"po-table",8),Sl(12,"div",1)(13,"div",9)(14,"span",10),eN(15),yN(16,"currency"),og()()();}if(n&2){let c=Nx(1);Lp(3),Ew("ngModel",o.product),nw("p-options",o.productOptions),n0(),Lp(),Ew("ngModel",o.quantity),nw("p-max",o.stock),n0(),Lp(),Ew("ngModel",o.price),n0(),Lp(),Ew("ngModel",o.stock),n0(),Lp(),Ew("ngModel",o.totalPrice),n0(),Lp(2),nw("p-disabled",c.form.invalid||o.stock===0),Lp(2),nw("p-columns",o.columns)("p-items",o.products)("p-hide-table-search",false),Lp(4),dg("Total: R",DN(16,12,o.totalPriceSum)," ");}},dependencies:[Z9,G9,q9,_k,mk,Qt,mv,f3,Rhe,k3,VO],encapsulation:2,changeDetection:1})}return a})();var ke=a=>({"docs-sample-code-tabs":a}),Ee=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(n){return new(n||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-notification-sales-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(n,o){n&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Notification - Sales"),og(),Sl(4,"a",2),ft("click",function(){return o.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-notification-sales/sample-po-notification-sales.component.html"),og(),Sl(13,"pre",7),eN(14,`<form #f="ngForm">
  <div class="po-row">
    <po-combo
      class="po-md-4"
      name="product"
      [(ngModel)]="product"
      p-label="Product"
      p-placeholder="Select a Product"
      p-required
      [p-options]="productOptions"
      (p-change)="checkProduct()"
    >
    </po-combo>

    <po-number
      class="po-md-2"
      name="quantity"
      [(ngModel)]="quantity"
      p-label="Quantity"
      p-min="0"
      p-placeholder="0"
      p-required
      [p-max]="stock"
      (p-change)="checkQuantity()"
    >
    </po-number>

    <po-number class="po-md-2" name="price" [(ngModel)]="price" p-disabled p-label="Price" p-placeholder="0" p-required>
    </po-number>

    <po-number class="po-md-2" name="stock" [(ngModel)]="stock" p-disabled p-label="Stock" p-placeholder="0" p-required>
    </po-number>

    <po-number
      class="po-md-2"
      name="totalPrice"
      [(ngModel)]="totalPrice"
      p-disabled
      p-label="Total Price"
      p-placeholder="0"
      p-required
    >
    </po-number>
  </div>
  <div class="po-row">
    <po-button class="po-md-3" p-label="Add To Cart" [p-disabled]="f.form.invalid || stock === 0" (p-click)="addCart()">
    </po-button>
  </div>
</form>

<po-divider />

<po-table p-striped="true" [p-columns]="columns" [p-items]="products" [p-hide-table-search]="false"> </po-table>

<div class="po-row">
  <div class="po-pull-right po-lg-12">
    <span class="po-pull-right po-font-subtitle">Total: R{ { totalPriceSum | currency }} </span>
  </div>
</div>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-notification-sales/sample-po-notification-sales.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

import { PoComboOption, PoNotificationService, PoTableColumn } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-notification-sales',
  templateUrl: './sample-po-notification-sales.component.html',
  providers: [PoNotificationService],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoNotificationSalesComponent {
  name: string;
  price: number;
  product: string;
  quantity: number;
  stock: number;
  totalPrice: number;
  totalPriceSum = 2500;

  readonly columns: Array<PoTableColumn> = [
    { property: 'productID', label: 'Id' },
    { property: 'productName', label: 'Product' },
    { property: 'quantity', label: 'Quantity' },
    { property: 'price', label: 'Price', type: 'currency', format: 'BRL' },
    { property: 'total', label: 'Total Price', type: 'currency', format: 'BRL' }
  ];

  products: Array<any> = [{ productID: '004', productName: 'Notebook', quantity: 2, price: 1250, total: 2500 }];

  productDetailsList: Array<any> = [
    { id: '001', price: 50, stock: 10 },
    { id: '002', price: 210, stock: 5 },
    { id: '003', price: 998, stock: 2 },
    { id: '004', price: 1250, stock: 1 }
  ];

  readonly productOptions: Array<PoComboOption> = [
    { value: '001', label: 'p-Shirt Blue' },
    { value: '002', label: 'Clock' },
    { value: '003', label: 'Cellphone' },
    { value: '004', label: 'Notebook' }
  ];

  constructor(private poNotification: PoNotificationService) {}

  addCart() {
    this.checkQuantity();

    if (this.productOptions && this.quantity > 0) {
      const itemIndex = this.products.findIndex(item => item.productID === this.product);

      if (itemIndex >= 0) {
        this.products[itemIndex].quantity += this.quantity;
        this.products[itemIndex].total += this.totalPrice;
      } else {
        this.products.push({
          productID: this.product,
          productName: this.name,
          quantity: this.quantity,
          price: this.price,
          total: this.totalPrice
        });
      }

      this.totalPriceSum += this.totalPrice;
      this.poNotification.success('Order included successfully!');
      this.stockUpdate(this.product, this.quantity);
      this.clearFields();
    }
  }

  checkProduct() {
    const selectedProductIndex = this.productDetailsList.findIndex(product => product.id === this.product);

    if (selectedProductIndex >= 0) {
      const productDetails = this.productDetailsList[selectedProductIndex];
      this.price = productDetails.price;
      this.stock = productDetails.stock;
      this.name = this.productOptions[selectedProductIndex].label;
    }
  }

  checkQuantity() {
    if (this.quantity > this.stock) {
      this.poNotification.error('Quantity not available in stock');
    } else {
      this.totalValue();
    }
  }

  clearFields() {
    this.product = '';
    this.price = 0;
    this.quantity = 0;
    this.stock = 0;
    this.totalPrice = 0;
  }

  stockUpdate(selectedProduct: string, qtd: number) {
    const item = this.productDetailsList.find(product => product.id === selectedProduct);
    item.stock = item.stock - qtd;
  }

  totalValue() {
    this.totalPrice = this.quantity * this.price;
  }
}
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-notification-sales"),og(),Wl(23,"hr")),n&2&&(Lp(5),$x("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,ke,o.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,ge],encapsulation:2})}return a})();var Se=(()=>{class a{static \u0275fac=function(n){return new(n||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-notification-doc"]],standalone:false,decls:408,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-method-table"],[1,"docs-api-properties-row"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-property-description"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-name-cell"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","PoNotification"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoToasterMode"],["pan","",1,"docs-api-property-type","PoToasterOrientation"],["pan","",1,"docs-api-property-type","boolean"],["href","https://po-ui.io/documentation/po-theme"]],template:function(n,o){n&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),eN(3,"import { PoNotificationModule } from '@po-ui/ng-components';"),og()(),Wl(4,"div",2),Sl(5,"h3",3),eN(6,"Services"),og(),Sl(7,"h4",4)(8,"code",5),eN(9,"PoNotificationService"),og()(),Sl(10,"div",2)(11,"p"),eN(12,"Servi\xE7o respons\xE1vel por emitir as notifica\xE7\xF5es em uma p\xE1gina. S\xE3o disponibilizados os m\xE9todos de:"),og(),Sl(13,"ul")(14,"li"),eN(15,"success,"),og(),Sl(16,"li"),eN(17,"warning,"),og(),Sl(18,"li"),eN(19,"error,"),og(),Sl(20,"li"),eN(21,"information."),og()(),Sl(22,"p"),eN(23,"Cada um destes m\xE9todos recebe como par\xE2metro o objeto "),Sl(24,"code"),eN(25,"PoNotification"),og(),eN(26,` que cont\xE9m os dados da mensagem e o
objeto ViewContainerRef que \xE9 a representa\xE7\xE3o do container do componente onde ser\xE1 criada a notifica\xE7\xE3o.`),og(),Sl(27,"p"),eN(28,`Estas notifica\xE7\xF5es ser\xE3o exibidas durante 9 segundos por padr\xE3o, podendo ser alterada conforme necessidade.
Ap\xF3s este tempo a mesma \xE9 removida automaticamente.`),og(),Sl(29,"p"),eN(30,"Notifica\xE7\xF5es com a\xE7\xE3o ou notifica\xE7\xF5es de "),Sl(31,"code"),eN(32,"erro"),og(),eN(33," permanecer\xE3o em tela at\xE9 o usu\xE1rio fecha-l\xE1 ou clicar na a\xE7\xE3o."),og(),Sl(34,"p"),eN(35,"O servi\xE7o possui um limite de at\xE9 5 notifica\xE7\xF5es por vez, a partir do sexto a primeira notifica\xE7\xE3o ser\xE1 removida dando lugar a nova. "),og()(),Sl(36,"h3",6),eN(37,"M\xE9todos"),og(),Sl(38,"table",7)(39,"tr",8)(40,"th",9)(41,"div",10)(42,"h4")(43,"span",11),eN(44," success "),og()()()()(),Sl(45,"tr",12)(46,"td",12)(47,"p"),eN(48,"Emite uma notifica\xE7\xE3o de sucesso."),og()()()(),Sl(49,"h5")(50,"b"),eN(51,"Par\xE2metros"),og()(),Sl(52,"table",13)(53,"tr",14)(54,"th",15),eN(55,"Nome"),og(),Sl(56,"th",15),eN(57,"Tipo"),og(),Sl(58,"th",15),eN(59,"Descri\xE7\xE3o"),og()(),Sl(60,"tr",8)(61,"td",16),eN(62," notification"),og(),Sl(63,"td",17)(64,"code",18),eN(65," PoNotification "),og(),Sl(66,"code",19),eN(67," string "),og()(),Sl(68,"td",12)(69,"p"),eN(70,"Objeto com os dados da notifica\xE7\xE3o ou somente a string com a mensagem da notifica\xE7\xE3o."),og()()()(),Wl(71,"br"),Sl(72,"table",7)(73,"tr",8)(74,"th",9)(75,"div",10)(76,"h4")(77,"span",11),eN(78," warning "),og()()()()(),Sl(79,"tr",12)(80,"td",12)(81,"p"),eN(82,"Emite uma notifica\xE7\xE3o de aten\xE7\xE3o."),og()()()(),Sl(83,"h5")(84,"b"),eN(85,"Par\xE2metros"),og()(),Sl(86,"table",13)(87,"tr",14)(88,"th",15),eN(89,"Nome"),og(),Sl(90,"th",15),eN(91,"Tipo"),og(),Sl(92,"th",15),eN(93,"Descri\xE7\xE3o"),og()(),Sl(94,"tr",8)(95,"td",16),eN(96," notification"),og(),Sl(97,"td",17)(98,"code",18),eN(99," PoNotification "),og(),Sl(100,"code",19),eN(101," string "),og()(),Sl(102,"td",12)(103,"p"),eN(104,"Objeto com os dados da notifica\xE7\xE3o ou somente a string com a mensagem da notifica\xE7\xE3o"),og()()()(),Wl(105,"br"),Sl(106,"table",7)(107,"tr",8)(108,"th",9)(109,"div",10)(110,"h4")(111,"span",11),eN(112," error "),og()()()()(),Sl(113,"tr",12)(114,"td",12)(115,"p"),eN(116,"Emite uma notifica\xE7\xE3o de erro."),og()()()(),Sl(117,"h5")(118,"b"),eN(119,"Par\xE2metros"),og()(),Sl(120,"table",13)(121,"tr",14)(122,"th",15),eN(123,"Nome"),og(),Sl(124,"th",15),eN(125,"Tipo"),og(),Sl(126,"th",15),eN(127,"Descri\xE7\xE3o"),og()(),Sl(128,"tr",8)(129,"td",16),eN(130," notification"),og(),Sl(131,"td",17)(132,"code",18),eN(133," PoNotification "),og(),Sl(134,"code",19),eN(135," string "),og()(),Sl(136,"td",12)(137,"p"),eN(138,"Objeto com os dados da notifica\xE7\xE3o ou somente a string com a mensagem da notifica\xE7\xE3o"),og()()()(),Wl(139,"br"),Sl(140,"table",7)(141,"tr",8)(142,"th",9)(143,"div",10)(144,"h4")(145,"span",11),eN(146," information "),og()()()()(),Sl(147,"tr",12)(148,"td",12)(149,"p"),eN(150,"Emite uma notifica\xE7\xE3o de informa\xE7\xE3o."),og()()()(),Sl(151,"h5")(152,"b"),eN(153,"Par\xE2metros"),og()(),Sl(154,"table",13)(155,"tr",14)(156,"th",15),eN(157,"Nome"),og(),Sl(158,"th",15),eN(159,"Tipo"),og(),Sl(160,"th",15),eN(161,"Descri\xE7\xE3o"),og()(),Sl(162,"tr",8)(163,"td",16),eN(164," notification"),og(),Sl(165,"td",17)(166,"code",18),eN(167," PoNotification "),og(),Sl(168,"code",19),eN(169," string "),og()(),Sl(170,"td",12)(171,"p"),eN(172,"Objeto com os dados da notifica\xE7\xE3o ou somente a string com a mensagem da notifica\xE7\xE3o"),og()()()(),Wl(173,"br"),Sl(174,"table",7)(175,"tr",8)(176,"th",9)(177,"div",10)(178,"h4")(179,"span",11),eN(180," setDefaultDuration "),og()()()()(),Sl(181,"tr",12)(182,"td",12)(183,"p"),eN(184,"Define em milissegundos a dura\xE7\xE3o padr\xE3o para as notifica\xE7\xF5es."),og(),Sl(185,"blockquote")(186,"p"),eN(187,"Padr\xE3o 9 segundos."),og()()()()(),Sl(188,"h5")(189,"b"),eN(190,"Par\xE2metros"),og()(),Sl(191,"table",13)(192,"tr",14)(193,"th",15),eN(194,"Nome"),og(),Sl(195,"th",15),eN(196,"Tipo"),og(),Sl(197,"th",15),eN(198,"Descri\xE7\xE3o"),og()(),Sl(199,"tr",8)(200,"td",16),eN(201," defaultDuration"),og(),Sl(202,"td",17)(203,"code",20),eN(204," number "),og()(),Sl(205,"td",12)(206,"p"),eN(207,"Dura\xE7\xE3o em milisegundos"),og()()()(),Wl(208,"br"),Sl(209,"h3"),eN(210,"Interfaces"),og(),Sl(211,"h4",21)(212,"code",5),eN(213,"PoNotification"),og()(),Sl(214,"div",2)(215,"p"),eN(216,"Interface para uso do servi\xE7o PoNotification."),og()(),Sl(217,"h4",6),eN(218,"Propriedades"),og(),Sl(219,"table",13)(220,"tr",14)(221,"th",15),eN(222,"Nome"),og(),Sl(223,"th",15),eN(224,"Tipo"),og(),Sl(225,"th",15),eN(226,"Descri\xE7\xE3o"),og()(),Sl(227,"tr",8)(228,"td",16)(229,"div",10)(230,"span",11),eN(231," action"),Wl(232,"br"),og()()(),Sl(233,"td",17)(234,"code",22),eN(235,"Function"),og()(),Sl(236,"td",12)(237,"em")(238,"strong"),eN(239,"(opcional)"),og()(),Sl(240,"p"),eN(241,"A\xE7\xE3o para a notifica\xE7\xE3o."),og(),Sl(242,"p"),eN(243,"Ao utilizar esta propriedade em conjunto com a "),Sl(244,"code"),eN(245,"actionLabel"),og(),eN(246,`,
a notifica\xE7\xE3o ficar\xE1 fixa na p\xE1gina at\xE9 usu\xE1rio fech\xE1-la ou clicar nesta a\xE7\xE3o.`),og(),Sl(247,"p"),eN(248,"Caso n\xE3o informar a propriedade "),Sl(249,"code"),eN(250,"actionLabel"),og(),eN(251,' a a\xE7\xE3o ser\xE1 atribuida ao \xEDcone de "Fechar" da notifica\xE7\xE3o.'),og()()(),Sl(252,"tr",8)(253,"td",16)(254,"div",10)(255,"span",11),eN(256," actionLabel"),Wl(257,"br"),og()()(),Sl(258,"td",17)(259,"code",19),eN(260,"string"),og()(),Sl(261,"td",12)(262,"em")(263,"strong"),eN(264,"(opcional)"),og()(),Sl(265,"p"),eN(266,"Label do bot\xE3o quando houver uma a\xE7\xE3o definida."),og()()(),Sl(267,"tr",8)(268,"td",16)(269,"div",10)(270,"span",11),eN(271," duration"),Wl(272,"br"),og()()(),Sl(273,"td",17)(274,"code",23),eN(275,"number"),og()(),Sl(276,"td",12)(277,"em")(278,"strong"),eN(279,"(opcional)"),og()(),Sl(280,"p"),eN(281,"Define em milissegundos o tempo de dura\xE7\xE3o que a notifica\xE7\xE3o ficar\xE1 dispon\xEDvel em tela. O padr\xE3o \xE9 9000 milissegundos."),og(),Sl(282,"blockquote")(283,"p"),eN(284,"Caso a notifica\xE7\xE3o tenha uma a\xE7\xE3o ou seja uma notifica\xE7\xE3o de "),Sl(285,"code"),eN(286,"erro"),og(),eN(287,", a propriedade ser\xE1 ignorada."),og()()()(),Sl(288,"tr",8)(289,"td",16)(290,"div",10)(291,"span",11),eN(292," message"),Wl(293,"br"),og()()(),Sl(294,"td",17)(295,"code",19),eN(296,"string"),og()(),Sl(297,"td",12)(298,"p"),eN(299,"Mensagem a ser exibida na notifica\xE7\xE3o."),og()()(),Sl(300,"tr",8)(301,"td",16)(302,"div",10)(303,"span",11),eN(304," mode"),Wl(305,"br"),og()()(),Sl(306,"td",17)(307,"code",24),eN(308,"PoToasterMode"),og()(),Sl(309,"td",12)(310,"em")(311,"strong"),eN(312,"(opcional)"),og()(),Sl(313,"p"),eN(314,"Define o Modo/Tipo do Toaster."),og()()(),Sl(315,"tr",8)(316,"td",16)(317,"div",10)(318,"span",11),eN(319," orientation"),Wl(320,"br"),og()()(),Sl(321,"td",17)(322,"code",25),eN(323,"PoToasterOrientation"),og()(),Sl(324,"td",12)(325,"em")(326,"strong"),eN(327,"(opcional)"),og()(),Sl(328,"p"),eN(329,"Posi\xE7\xE3o da notifica\xE7\xE3o na p\xE1gina que pode ser "),Sl(330,"code"),eN(331,"Top"),og(),eN(332," (topo) ou "),Sl(333,"code"),eN(334,"Bottom"),og(),eN(335,"(rodap\xE9). A posi\xE7\xE3o padr\xE3o \xE9 "),Sl(336,"code"),eN(337,"bottom"),og(),eN(338,"."),og()()(),Sl(339,"tr",8)(340,"td",16)(341,"div",10)(342,"span",11),eN(343," showClose"),Wl(344,"br"),og()()(),Sl(345,"td",17)(346,"code",26),eN(347,"boolean"),og()(),Sl(348,"td",12)(349,"em")(350,"strong"),eN(351,"(opcional)"),og()(),Sl(352,"p"),eN(353,"Exibe o bot\xE3o de fechar a notifica\xE7\xE3o."),og(),Sl(354,"blockquote")(355,"p"),eN(356,"Caso a notifica\xE7\xE3o seja do modo "),Sl(357,"code"),eN(358,"default"),og(),eN(359,", a propriedade ser\xE1 ignorada."),og()()()(),Sl(360,"tr",8)(361,"td",16)(362,"div",10)(363,"span",11),eN(364," sizeActions"),Wl(365,"br"),og()()(),Sl(366,"td",17)(367,"code",19),eN(368,"string"),og()(),Sl(369,"td",12)(370,"em")(371,"strong"),eN(372,"(opcional)"),og()(),Sl(373,"p"),eN(374,"Define o tamanho das a\xE7\xF5es:"),og(),Sl(375,"ul")(376,"li")(377,"code"),eN(378,"small"),og(),eN(379,": aplica a medida small de cada a\xE7\xE3o (dispon\xEDvel apenas para acessibilidade AA)."),og(),Sl(380,"li")(381,"code"),eN(382,"medium"),og(),eN(383,": aplica a medida medium de cada a\xE7\xE3o."),og()(),Sl(384,"blockquote")(385,"p"),eN(386,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Sl(387,"code"),eN(388,"medium"),og(),eN(389,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Sl(390,"a",27),eN(391,"po-theme"),og(),eN(392,"."),og()()()(),Sl(393,"tr",8)(394,"td",16)(395,"div",10)(396,"span",11),eN(397," supportMessage"),Wl(398,"br"),og()()(),Sl(399,"td",17)(400,"code",19),eN(401,"string"),og()(),Sl(402,"td",12)(403,"em")(404,"strong"),eN(405,"(opcional)"),og()(),Sl(406,"p"),eN(407,"Mensagem de suporte a ser exibida na notifica\xE7\xE3o."),og()()()()());},encapsulation:2})}return a})();var Ce=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(l,n){this.route=l,this.router=n;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let n=l.view;this.activeTab=n||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:"merge"}),this.activeTab=l;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(n){return new(n||a)(w(Xn),w(En))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Notification",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(n,o){n&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return o.changeTab("doc")}),Wl(3,"sample-po-notification-doc"),og(),Sl(4,"po-tab",3),ft("p-click",function(){return o.changeTab("web")}),Wl(5,"sample-po-notification-basic-view")(6,"sample-po-notification-labs-view")(7,"sample-po-notification-sales-view"),og()()()),n&2&&(nw("p-actions",o.actions),Lp(2),nw("p-active",o.activeTab==="doc"),Lp(2),nw("p-hide",o.hidePoWebSample)("p-active",o.activeTab==="web"));},dependencies:[rNe,Bme,qme,fe,be,Ee,Se],encapsulation:2})}return a})();var Oe=[{path:"",component:Ce}],ye=(()=>{class a{static \u0275fac=function(n){return new(n||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue({imports:[hL.forChild(Oe),hL]})}return a})();var at=(()=>{class a{static \u0275fac=function(n){return new(n||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue({imports:[sr,ye]})}return a})();export{at as DocPoNotificationModule};