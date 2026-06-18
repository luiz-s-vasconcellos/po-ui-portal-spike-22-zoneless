import {f as fe$1,u as ue,s as sr,a as uL,C,c3 as Xn,E as En,U as Un,aW as Yp,aV as Ur,dJ as Jn,b0 as Qt,H as Il,a1 as ft,R as og,an as DO,aH as Ka,b8 as qme,b9 as Yme,J as zl,q as Qx,A as Lp,ar as Ux,au as dg,T as nw,bs as uN,aX as G9,aF as $9,aY as z9,aG as mk,aZ as hk,b1 as mv,b4 as O3,cp as Hhe,c8 as Dde,bH as k3,b6 as Yo,aB as Dx,aM as ww,aN as QA,aO as Ew,aP as e0,X as we$1,av as Gl,aw as co,ax as lo,bC as v3,b7 as E3,dG as kO,a4 as mN,bd as Ax,a5 as yN,a3 as cNe,aD as Xy,aT as eN,aE as Qy}from'./main-QSTLMRDK.js';var de=(()=>{class a{poNotification;constructor(l){this.poNotification=l;}static \u0275fac=function(n){return new(n||a)(C(Yp))};static \u0275cmp=Un({type:a,selectors:[["sample-po-notification-basic"]],standalone:false,decls:1,vars:0,consts:[["p-label","Open Notification",3,"p-click"]],template:function(n,o){n&1&&(Il(0,"po-button",0),ft("p-click",function(){return o.poNotification.success("PO Notification!")}),og());},dependencies:[Qt],encapsulation:2,changeDetection:1})}return a})();var ve=a=>({"docs-sample-code-tabs":a}),fe=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(n){return new(n||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-notification-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(n,o){n&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Notification Basic"),og(),Il(4,"a",2),ft("click",function(){return o.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-notification-basic/sample-po-notification-basic.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-button p-label="Open Notification" (p-click)="poNotification.success('PO Notification!')"> </po-button>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-notification-basic/sample-po-notification-basic.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-notification-basic"),og(),zl(23,"hr")),n&2&&(Lp(5),Ux("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,ve,o.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,de],encapsulation:2})}return a})();var he=(()=>{class a{poNotification;poModal;action;actionLabel;message;orientation;sizeActions;type;duration;orientationOptions=[{label:"Top",value:Ur.Top},{label:"Bottom",value:Ur.Bottom}];sizeActionsOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];typeOptions=[{label:"Success",value:Jn.Success},{label:"Error",value:Jn.Error},{label:"Warning",value:Jn.Warning},{label:"Information",value:Jn.Information}];constructor(l){this.poNotification=l;}ngOnInit(){this.restore();}restore(){this.message="PO Notification",this.type=void 0,this.orientation=void 0,this.action=false,this.actionLabel="",this.duration=void 0,this.sizeActions="medium";}showNotification(){let l={message:this.message,orientation:this.orientation,action:void 0,actionLabel:this.actionLabel,duration:this.duration,sizeActions:this.sizeActions};switch(this.action&&(l.action=()=>this.poModal.open()),this.type){case Jn.Success:{this.poNotification.success(l);break}case Jn.Error:{this.poNotification.error(l);break}case Jn.Warning:{this.poNotification.warning(l);break}case Jn.Information:{this.poNotification.information(l);break}default:{this.poNotification.success(l);break}}}static \u0275fac=function(n){return new(n||a)(C(Yp))};static \u0275cmp=Un({type:a,selectors:[["sample-po-notification-labs"]],viewQuery:function(n,o){if(n&1&&Gl(Yo,7),n&2){let c;co(c=lo())&&(o.poModal=c.first);}},standalone:false,features:[we$1([Yp])],decls:16,vars:10,consts:[["f","ngForm"],["p-label","Open Notification",3,"p-click"],[1,"po-row"],["name","type","p-columns","4","p-label","Type",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","orientation","p-label","Orientation",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","message","p-clean","","p-label","Message","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","duration","p-clean","","p-label","Duration",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","action","p-label","Action",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","actionLabel","p-clean","","p-label","Action Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","size","p-columns","4","p-label","Components size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"],["p-title","PO Notification"]],template:function(n,o){if(n&1){let c=Dx();Il(0,"po-button",1),ft("p-click",function(){return o.showNotification()}),og(),zl(1,"po-divider"),Il(2,"div",2)(3,"form",null,0)(5,"po-radio-group",3),ww("ngModelChange",function(r){return Xy(c),eN(o.type,r)||(o.type=r),Qy(r)}),og(),QA(),Il(6,"po-radio-group",4),ww("ngModelChange",function(r){return Xy(c),eN(o.orientation,r)||(o.orientation=r),Qy(r)}),og(),QA(),Il(7,"po-input",5),ww("ngModelChange",function(r){return Xy(c),eN(o.message,r)||(o.message=r),Qy(r)}),og(),QA(),Il(8,"po-number",6),ww("ngModelChange",function(r){return Xy(c),eN(o.duration,r)||(o.duration=r),Qy(r)}),og(),QA(),Il(9,"po-switch",7),ww("ngModelChange",function(r){return Xy(c),eN(o.action,r)||(o.action=r),Qy(r)}),og(),QA(),Il(10,"po-input",8),ww("ngModelChange",function(r){return Xy(c),eN(o.actionLabel,r)||(o.actionLabel=r),Qy(r)}),og(),QA(),Il(11,"po-radio-group",9),ww("ngModelChange",function(r){return Xy(c),eN(o.sizeActions,r)||(o.sizeActions=r),Qy(r)}),og(),QA(),Il(12,"div",2)(13,"po-button",10),ft("p-click",function(){return o.restore()}),og()()()(),Il(14,"po-modal",11),Qx(15," Notification Action "),og();}n&2&&(Lp(5),Ew("ngModel",o.type),nw("p-options",o.typeOptions),e0(),Lp(),Ew("ngModel",o.orientation),nw("p-options",o.orientationOptions),e0(),Lp(),Ew("ngModel",o.message),e0(),Lp(),Ew("ngModel",o.duration),e0(),Lp(),Ew("ngModel",o.action),e0(),Lp(),Ew("ngModel",o.actionLabel),e0(),Lp(),Ew("ngModel",o.sizeActions),nw("p-options",o.sizeActionsOptions),e0());},dependencies:[G9,$9,z9,mk,hk,Qt,mv,O3,Hhe,Dde,k3,Yo],encapsulation:2,changeDetection:1})}return a})();var we=a=>({"docs-sample-code-tabs":a}),be=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(n){return new(n||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-notification-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(n,o){n&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Notification Labs"),og(),Il(4,"a",2),ft("click",function(){return o.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-notification-labs/sample-po-notification-labs.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-button (p-click)="showNotification()" p-label="Open Notification"> </po-button>

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
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-notification-labs/sample-po-notification-labs.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-notification-labs"),og(),zl(23,"hr")),n&2&&(Lp(5),Ux("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,we,o.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,he],encapsulation:2})}return a})();var ge=(()=>{class a{poNotification;name;price;product;quantity;stock;totalPrice;totalPriceSum=2500;columns=[{property:"productID",label:"Id"},{property:"productName",label:"Product"},{property:"quantity",label:"Quantity"},{property:"price",label:"Price",type:"currency",format:"BRL"},{property:"total",label:"Total Price",type:"currency",format:"BRL"}];products=[{productID:"004",productName:"Notebook",quantity:2,price:1250,total:2500}];productDetailsList=[{id:"001",price:50,stock:10},{id:"002",price:210,stock:5},{id:"003",price:998,stock:2},{id:"004",price:1250,stock:1}];productOptions=[{value:"001",label:"p-Shirt Blue"},{value:"002",label:"Clock"},{value:"003",label:"Cellphone"},{value:"004",label:"Notebook"}];constructor(l){this.poNotification=l;}addCart(){if(this.checkQuantity(),this.productOptions&&this.quantity>0){let l=this.products.findIndex(n=>n.productID===this.product);l>=0?(this.products[l].quantity+=this.quantity,this.products[l].total+=this.totalPrice):this.products.push({productID:this.product,productName:this.name,quantity:this.quantity,price:this.price,total:this.totalPrice}),this.totalPriceSum+=this.totalPrice,this.poNotification.success("Order included successfully!"),this.stockUpdate(this.product,this.quantity),this.clearFields();}}checkProduct(){let l=this.productDetailsList.findIndex(n=>n.id===this.product);if(l>=0){let n=this.productDetailsList[l];this.price=n.price,this.stock=n.stock,this.name=this.productOptions[l].label;}}checkQuantity(){this.quantity>this.stock?this.poNotification.error("Quantity not available in stock"):this.totalValue();}clearFields(){this.product="",this.price=0,this.quantity=0,this.stock=0,this.totalPrice=0;}stockUpdate(l,n){let o=this.productDetailsList.find(c=>c.id===l);o.stock=o.stock-n;}totalValue(){this.totalPrice=this.quantity*this.price;}static \u0275fac=function(n){return new(n||a)(C(Yp))};static \u0275cmp=Un({type:a,selectors:[["sample-po-notification-sales"]],standalone:false,features:[we$1([Yp])],decls:17,vars:14,consts:[["f","ngForm"],[1,"po-row"],["name","product","p-label","Product","p-placeholder","Select a Product","p-required","",1,"po-md-4",3,"ngModelChange","p-change","ngModel","p-options"],["name","quantity","p-label","Quantity","p-min","0","p-placeholder","0","p-required","",1,"po-md-2",3,"ngModelChange","p-change","ngModel","p-max"],["name","price","p-disabled","","p-label","Price","p-placeholder","0","p-required","",1,"po-md-2",3,"ngModelChange","ngModel"],["name","stock","p-disabled","","p-label","Stock","p-placeholder","0","p-required","",1,"po-md-2",3,"ngModelChange","ngModel"],["name","totalPrice","p-disabled","","p-label","Total Price","p-placeholder","0","p-required","",1,"po-md-2",3,"ngModelChange","ngModel"],["p-label","Add To Cart",1,"po-md-3",3,"p-click","p-disabled"],["p-striped","true",3,"p-columns","p-items","p-hide-table-search"],[1,"po-pull-right","po-lg-12"],[1,"po-pull-right","po-font-subtitle"]],template:function(n,o){if(n&1){let c=Dx();Il(0,"form",null,0)(2,"div",1)(3,"po-combo",2),ww("ngModelChange",function(r){return Xy(c),eN(o.product,r)||(o.product=r),Qy(r)}),ft("p-change",function(){return o.checkProduct()}),og(),QA(),Il(4,"po-number",3),ww("ngModelChange",function(r){return Xy(c),eN(o.quantity,r)||(o.quantity=r),Qy(r)}),ft("p-change",function(){return o.checkQuantity()}),og(),QA(),Il(5,"po-number",4),ww("ngModelChange",function(r){return Xy(c),eN(o.price,r)||(o.price=r),Qy(r)}),og(),QA(),Il(6,"po-number",5),ww("ngModelChange",function(r){return Xy(c),eN(o.stock,r)||(o.stock=r),Qy(r)}),og(),QA(),Il(7,"po-number",6),ww("ngModelChange",function(r){return Xy(c),eN(o.totalPrice,r)||(o.totalPrice=r),Qy(r)}),og(),QA(),og(),Il(8,"div",1)(9,"po-button",7),ft("p-click",function(){return o.addCart()}),og()()(),zl(10,"po-divider")(11,"po-table",8),Il(12,"div",1)(13,"div",9)(14,"span",10),Qx(15),mN(16,"currency"),og()()();}if(n&2){let c=Ax(1);Lp(3),Ew("ngModel",o.product),nw("p-options",o.productOptions),e0(),Lp(),Ew("ngModel",o.quantity),nw("p-max",o.stock),e0(),Lp(),Ew("ngModel",o.price),e0(),Lp(),Ew("ngModel",o.stock),e0(),Lp(),Ew("ngModel",o.totalPrice),e0(),Lp(2),nw("p-disabled",c.form.invalid||o.stock===0),Lp(2),nw("p-columns",o.columns)("p-items",o.products)("p-hide-table-search",false),Lp(4),dg("Total: R",yN(16,12,o.totalPriceSum)," ");}},dependencies:[G9,$9,z9,mk,hk,Qt,mv,v3,Hhe,E3,kO],encapsulation:2,changeDetection:1})}return a})();var ke=a=>({"docs-sample-code-tabs":a}),Ee=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(n){return new(n||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-notification-sales-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(n,o){n&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Notification - Sales"),og(),Il(4,"a",2),ft("click",function(){return o.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-notification-sales/sample-po-notification-sales.component.html"),og(),Il(13,"pre",7),Qx(14,`<form #f="ngForm">
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
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-notification-sales/sample-po-notification-sales.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-notification-sales"),og(),zl(23,"hr")),n&2&&(Lp(5),Ux("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,ke,o.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,ge],encapsulation:2})}return a})();var Se=(()=>{class a{static \u0275fac=function(n){return new(n||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-notification-doc"]],standalone:false,decls:408,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-method-table"],[1,"docs-api-properties-row"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-property-description"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-name-cell"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","PoNotification"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoToasterMode"],["pan","",1,"docs-api-property-type","PoToasterOrientation"],["pan","",1,"docs-api-property-type","boolean"],["href","https://po-ui.io/documentation/po-theme"]],template:function(n,o){n&1&&(Il(0,"div",0)(1,"p",1)(2,"code"),Qx(3,"import { PoNotificationModule } from '@po-ui/ng-components';"),og()(),zl(4,"div",2),Il(5,"h3",3),Qx(6,"Services"),og(),Il(7,"h4",4)(8,"code",5),Qx(9,"PoNotificationService"),og()(),Il(10,"div",2)(11,"p"),Qx(12,"Servi\xE7o respons\xE1vel por emitir as notifica\xE7\xF5es em uma p\xE1gina. S\xE3o disponibilizados os m\xE9todos de:"),og(),Il(13,"ul")(14,"li"),Qx(15,"success,"),og(),Il(16,"li"),Qx(17,"warning,"),og(),Il(18,"li"),Qx(19,"error,"),og(),Il(20,"li"),Qx(21,"information."),og()(),Il(22,"p"),Qx(23,"Cada um destes m\xE9todos recebe como par\xE2metro o objeto "),Il(24,"code"),Qx(25,"PoNotification"),og(),Qx(26,` que cont\xE9m os dados da mensagem e o
objeto ViewContainerRef que \xE9 a representa\xE7\xE3o do container do componente onde ser\xE1 criada a notifica\xE7\xE3o.`),og(),Il(27,"p"),Qx(28,`Estas notifica\xE7\xF5es ser\xE3o exibidas durante 9 segundos por padr\xE3o, podendo ser alterada conforme necessidade.
Ap\xF3s este tempo a mesma \xE9 removida automaticamente.`),og(),Il(29,"p"),Qx(30,"Notifica\xE7\xF5es com a\xE7\xE3o ou notifica\xE7\xF5es de "),Il(31,"code"),Qx(32,"erro"),og(),Qx(33," permanecer\xE3o em tela at\xE9 o usu\xE1rio fecha-l\xE1 ou clicar na a\xE7\xE3o."),og(),Il(34,"p"),Qx(35,"O servi\xE7o possui um limite de at\xE9 5 notifica\xE7\xF5es por vez, a partir do sexto a primeira notifica\xE7\xE3o ser\xE1 removida dando lugar a nova. "),og()(),Il(36,"h3",6),Qx(37,"M\xE9todos"),og(),Il(38,"table",7)(39,"tr",8)(40,"th",9)(41,"div",10)(42,"h4")(43,"span",11),Qx(44," success "),og()()()()(),Il(45,"tr",12)(46,"td",12)(47,"p"),Qx(48,"Emite uma notifica\xE7\xE3o de sucesso."),og()()()(),Il(49,"h5")(50,"b"),Qx(51,"Par\xE2metros"),og()(),Il(52,"table",13)(53,"tr",14)(54,"th",15),Qx(55,"Nome"),og(),Il(56,"th",15),Qx(57,"Tipo"),og(),Il(58,"th",15),Qx(59,"Descri\xE7\xE3o"),og()(),Il(60,"tr",8)(61,"td",16),Qx(62," notification"),og(),Il(63,"td",17)(64,"code",18),Qx(65," PoNotification "),og(),Il(66,"code",19),Qx(67," string "),og()(),Il(68,"td",12)(69,"p"),Qx(70,"Objeto com os dados da notifica\xE7\xE3o ou somente a string com a mensagem da notifica\xE7\xE3o."),og()()()(),zl(71,"br"),Il(72,"table",7)(73,"tr",8)(74,"th",9)(75,"div",10)(76,"h4")(77,"span",11),Qx(78," warning "),og()()()()(),Il(79,"tr",12)(80,"td",12)(81,"p"),Qx(82,"Emite uma notifica\xE7\xE3o de aten\xE7\xE3o."),og()()()(),Il(83,"h5")(84,"b"),Qx(85,"Par\xE2metros"),og()(),Il(86,"table",13)(87,"tr",14)(88,"th",15),Qx(89,"Nome"),og(),Il(90,"th",15),Qx(91,"Tipo"),og(),Il(92,"th",15),Qx(93,"Descri\xE7\xE3o"),og()(),Il(94,"tr",8)(95,"td",16),Qx(96," notification"),og(),Il(97,"td",17)(98,"code",18),Qx(99," PoNotification "),og(),Il(100,"code",19),Qx(101," string "),og()(),Il(102,"td",12)(103,"p"),Qx(104,"Objeto com os dados da notifica\xE7\xE3o ou somente a string com a mensagem da notifica\xE7\xE3o"),og()()()(),zl(105,"br"),Il(106,"table",7)(107,"tr",8)(108,"th",9)(109,"div",10)(110,"h4")(111,"span",11),Qx(112," error "),og()()()()(),Il(113,"tr",12)(114,"td",12)(115,"p"),Qx(116,"Emite uma notifica\xE7\xE3o de erro."),og()()()(),Il(117,"h5")(118,"b"),Qx(119,"Par\xE2metros"),og()(),Il(120,"table",13)(121,"tr",14)(122,"th",15),Qx(123,"Nome"),og(),Il(124,"th",15),Qx(125,"Tipo"),og(),Il(126,"th",15),Qx(127,"Descri\xE7\xE3o"),og()(),Il(128,"tr",8)(129,"td",16),Qx(130," notification"),og(),Il(131,"td",17)(132,"code",18),Qx(133," PoNotification "),og(),Il(134,"code",19),Qx(135," string "),og()(),Il(136,"td",12)(137,"p"),Qx(138,"Objeto com os dados da notifica\xE7\xE3o ou somente a string com a mensagem da notifica\xE7\xE3o"),og()()()(),zl(139,"br"),Il(140,"table",7)(141,"tr",8)(142,"th",9)(143,"div",10)(144,"h4")(145,"span",11),Qx(146," information "),og()()()()(),Il(147,"tr",12)(148,"td",12)(149,"p"),Qx(150,"Emite uma notifica\xE7\xE3o de informa\xE7\xE3o."),og()()()(),Il(151,"h5")(152,"b"),Qx(153,"Par\xE2metros"),og()(),Il(154,"table",13)(155,"tr",14)(156,"th",15),Qx(157,"Nome"),og(),Il(158,"th",15),Qx(159,"Tipo"),og(),Il(160,"th",15),Qx(161,"Descri\xE7\xE3o"),og()(),Il(162,"tr",8)(163,"td",16),Qx(164," notification"),og(),Il(165,"td",17)(166,"code",18),Qx(167," PoNotification "),og(),Il(168,"code",19),Qx(169," string "),og()(),Il(170,"td",12)(171,"p"),Qx(172,"Objeto com os dados da notifica\xE7\xE3o ou somente a string com a mensagem da notifica\xE7\xE3o"),og()()()(),zl(173,"br"),Il(174,"table",7)(175,"tr",8)(176,"th",9)(177,"div",10)(178,"h4")(179,"span",11),Qx(180," setDefaultDuration "),og()()()()(),Il(181,"tr",12)(182,"td",12)(183,"p"),Qx(184,"Define em milissegundos a dura\xE7\xE3o padr\xE3o para as notifica\xE7\xF5es."),og(),Il(185,"blockquote")(186,"p"),Qx(187,"Padr\xE3o 9 segundos."),og()()()()(),Il(188,"h5")(189,"b"),Qx(190,"Par\xE2metros"),og()(),Il(191,"table",13)(192,"tr",14)(193,"th",15),Qx(194,"Nome"),og(),Il(195,"th",15),Qx(196,"Tipo"),og(),Il(197,"th",15),Qx(198,"Descri\xE7\xE3o"),og()(),Il(199,"tr",8)(200,"td",16),Qx(201," defaultDuration"),og(),Il(202,"td",17)(203,"code",20),Qx(204," number "),og()(),Il(205,"td",12)(206,"p"),Qx(207,"Dura\xE7\xE3o em milisegundos"),og()()()(),zl(208,"br"),Il(209,"h3"),Qx(210,"Interfaces"),og(),Il(211,"h4",21)(212,"code",5),Qx(213,"PoNotification"),og()(),Il(214,"div",2)(215,"p"),Qx(216,"Interface para uso do servi\xE7o PoNotification."),og()(),Il(217,"h4",6),Qx(218,"Propriedades"),og(),Il(219,"table",13)(220,"tr",14)(221,"th",15),Qx(222,"Nome"),og(),Il(223,"th",15),Qx(224,"Tipo"),og(),Il(225,"th",15),Qx(226,"Descri\xE7\xE3o"),og()(),Il(227,"tr",8)(228,"td",16)(229,"div",10)(230,"span",11),Qx(231," action"),zl(232,"br"),og()()(),Il(233,"td",17)(234,"code",22),Qx(235,"Function"),og()(),Il(236,"td",12)(237,"em")(238,"strong"),Qx(239,"(opcional)"),og()(),Il(240,"p"),Qx(241,"A\xE7\xE3o para a notifica\xE7\xE3o."),og(),Il(242,"p"),Qx(243,"Ao utilizar esta propriedade em conjunto com a "),Il(244,"code"),Qx(245,"actionLabel"),og(),Qx(246,`,
a notifica\xE7\xE3o ficar\xE1 fixa na p\xE1gina at\xE9 usu\xE1rio fech\xE1-la ou clicar nesta a\xE7\xE3o.`),og(),Il(247,"p"),Qx(248,"Caso n\xE3o informar a propriedade "),Il(249,"code"),Qx(250,"actionLabel"),og(),Qx(251,' a a\xE7\xE3o ser\xE1 atribuida ao \xEDcone de "Fechar" da notifica\xE7\xE3o.'),og()()(),Il(252,"tr",8)(253,"td",16)(254,"div",10)(255,"span",11),Qx(256," actionLabel"),zl(257,"br"),og()()(),Il(258,"td",17)(259,"code",19),Qx(260,"string"),og()(),Il(261,"td",12)(262,"em")(263,"strong"),Qx(264,"(opcional)"),og()(),Il(265,"p"),Qx(266,"Label do bot\xE3o quando houver uma a\xE7\xE3o definida."),og()()(),Il(267,"tr",8)(268,"td",16)(269,"div",10)(270,"span",11),Qx(271," duration"),zl(272,"br"),og()()(),Il(273,"td",17)(274,"code",23),Qx(275,"number"),og()(),Il(276,"td",12)(277,"em")(278,"strong"),Qx(279,"(opcional)"),og()(),Il(280,"p"),Qx(281,"Define em milissegundos o tempo de dura\xE7\xE3o que a notifica\xE7\xE3o ficar\xE1 dispon\xEDvel em tela. O padr\xE3o \xE9 9000 milissegundos."),og(),Il(282,"blockquote")(283,"p"),Qx(284,"Caso a notifica\xE7\xE3o tenha uma a\xE7\xE3o ou seja uma notifica\xE7\xE3o de "),Il(285,"code"),Qx(286,"erro"),og(),Qx(287,", a propriedade ser\xE1 ignorada."),og()()()(),Il(288,"tr",8)(289,"td",16)(290,"div",10)(291,"span",11),Qx(292," message"),zl(293,"br"),og()()(),Il(294,"td",17)(295,"code",19),Qx(296,"string"),og()(),Il(297,"td",12)(298,"p"),Qx(299,"Mensagem a ser exibida na notifica\xE7\xE3o."),og()()(),Il(300,"tr",8)(301,"td",16)(302,"div",10)(303,"span",11),Qx(304," mode"),zl(305,"br"),og()()(),Il(306,"td",17)(307,"code",24),Qx(308,"PoToasterMode"),og()(),Il(309,"td",12)(310,"em")(311,"strong"),Qx(312,"(opcional)"),og()(),Il(313,"p"),Qx(314,"Define o Modo/Tipo do Toaster."),og()()(),Il(315,"tr",8)(316,"td",16)(317,"div",10)(318,"span",11),Qx(319," orientation"),zl(320,"br"),og()()(),Il(321,"td",17)(322,"code",25),Qx(323,"PoToasterOrientation"),og()(),Il(324,"td",12)(325,"em")(326,"strong"),Qx(327,"(opcional)"),og()(),Il(328,"p"),Qx(329,"Posi\xE7\xE3o da notifica\xE7\xE3o na p\xE1gina que pode ser "),Il(330,"code"),Qx(331,"Top"),og(),Qx(332," (topo) ou "),Il(333,"code"),Qx(334,"Bottom"),og(),Qx(335,"(rodap\xE9). A posi\xE7\xE3o padr\xE3o \xE9 "),Il(336,"code"),Qx(337,"bottom"),og(),Qx(338,"."),og()()(),Il(339,"tr",8)(340,"td",16)(341,"div",10)(342,"span",11),Qx(343," showClose"),zl(344,"br"),og()()(),Il(345,"td",17)(346,"code",26),Qx(347,"boolean"),og()(),Il(348,"td",12)(349,"em")(350,"strong"),Qx(351,"(opcional)"),og()(),Il(352,"p"),Qx(353,"Exibe o bot\xE3o de fechar a notifica\xE7\xE3o."),og(),Il(354,"blockquote")(355,"p"),Qx(356,"Caso a notifica\xE7\xE3o seja do modo "),Il(357,"code"),Qx(358,"default"),og(),Qx(359,", a propriedade ser\xE1 ignorada."),og()()()(),Il(360,"tr",8)(361,"td",16)(362,"div",10)(363,"span",11),Qx(364," sizeActions"),zl(365,"br"),og()()(),Il(366,"td",17)(367,"code",19),Qx(368,"string"),og()(),Il(369,"td",12)(370,"em")(371,"strong"),Qx(372,"(opcional)"),og()(),Il(373,"p"),Qx(374,"Define o tamanho das a\xE7\xF5es:"),og(),Il(375,"ul")(376,"li")(377,"code"),Qx(378,"small"),og(),Qx(379,": aplica a medida small de cada a\xE7\xE3o (dispon\xEDvel apenas para acessibilidade AA)."),og(),Il(380,"li")(381,"code"),Qx(382,"medium"),og(),Qx(383,": aplica a medida medium de cada a\xE7\xE3o."),og()(),Il(384,"blockquote")(385,"p"),Qx(386,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Il(387,"code"),Qx(388,"medium"),og(),Qx(389,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Il(390,"a",27),Qx(391,"po-theme"),og(),Qx(392,"."),og()()()(),Il(393,"tr",8)(394,"td",16)(395,"div",10)(396,"span",11),Qx(397," supportMessage"),zl(398,"br"),og()()(),Il(399,"td",17)(400,"code",19),Qx(401,"string"),og()(),Il(402,"td",12)(403,"em")(404,"strong"),Qx(405,"(opcional)"),og()(),Il(406,"p"),Qx(407,"Mensagem de suporte a ser exibida na notifica\xE7\xE3o."),og()()()()());},encapsulation:2})}return a})();var Ce=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(l,n){this.route=l,this.router=n;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let n=l.view;this.activeTab=n||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:"merge"}),this.activeTab=l;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(n){return new(n||a)(C(Xn),C(En))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Notification",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(n,o){n&1&&(Il(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return o.changeTab("doc")}),zl(3,"sample-po-notification-doc"),og(),Il(4,"po-tab",3),ft("p-click",function(){return o.changeTab("web")}),zl(5,"sample-po-notification-basic-view")(6,"sample-po-notification-labs-view")(7,"sample-po-notification-sales-view"),og()()()),n&2&&(nw("p-actions",o.actions),Lp(2),nw("p-active",o.activeTab==="doc"),Lp(2),nw("p-hide",o.hidePoWebSample)("p-active",o.activeTab==="web"));},dependencies:[cNe,qme,Yme,fe,be,Ee,Se],encapsulation:2})}return a})();var Oe=[{path:"",component:Ce}],ye=(()=>{class a{static \u0275fac=function(n){return new(n||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue({imports:[uL.forChild(Oe),uL]})}return a})();var at=(()=>{class a{static \u0275fac=function(n){return new(n||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue({imports:[sr,ye]})}return a})();export{at as DocPoNotificationModule};