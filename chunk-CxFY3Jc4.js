import {f as fe$1,u as ue$1,s as sr,a as uL,C,c3 as Xn,E as En,U as Un,w,b as f,aW as Yp,aI as dc,J as zl,an as DO,aH as Ka,b8 as qme,b9 as Yme,H as Il,q as Qx,R as og,a1 as ft,A as Lp,ar as Ux,au as dg,T as nw,bs as uN,aX as G9,aF as $9,aY as z9,aG as mk,aZ as hk,b0 as Qt,b1 as mv,c4 as C3,b4 as F3,cp as Hhe,b5 as $he,aB as Dx,aM as ww,aN as QA,aO as Ew,aP as e0,cz as kz,b6 as Yo,a3 as cNe,b7 as E3,ba as yNe,X as we,av as Gl,aw as co,ax as lo,aD as Xy,aT as eN,aE as Qy}from'./main-FCMDZGSJ.js';var me=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-container-basic"]],standalone:false,decls:1,vars:0,template:function(a,i){a&1&&zl(0,"po-container");},dependencies:[dc],encapsulation:2,changeDetection:1})}return o})();var xe=o=>({"docs-sample-code-tabs":o}),ue=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-container-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Container Basic"),og(),Il(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-container-basic/sample-po-container-basic.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-container></po-container>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-container-basic/sample-po-container-basic.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-container-basic',
  templateUrl: './sample-po-container-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoContainerBasicComponent {}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-container-basic"),og(),zl(23,"hr")),a&2&&(Lp(5),Ux("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,xe,i.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,me],encapsulation:2})}return o})();var he=(()=>{class o{content;title;height;properties;propertiesOptions=[{value:"noBorder",label:"No Border"},{value:"noPadding",label:"No Padding"}];ngOnInit(){this.restore();}restore(){this.title=void 0,this.content=void 0,this.height=void 0,this.properties=[];}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-container-labs"]],standalone:false,decls:13,vars:10,consts:[["f","ngForm"],[3,"p-title","p-height","p-no-border","p-no-padding"],[1,"po-row"],["name","title","p-label","Titulo",1,"po-md-4",3,"ngModelChange","ngModel"],["name","height","p-label","Height",1,"po-md-4",3,"ngModelChange","ngModel"],["name","properties","p-label","Properties",1,"po-md-4",3,"ngModelChange","ngModel","p-options"],["name","content","p-label","Content",1,"po-md-12",3,"ngModelChange","ngModel"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(a,i){if(a&1){let m=Dx();Il(0,"po-container",1),Qx(1),og(),zl(2,"po-divider"),Il(3,"form",null,0)(5,"div",2)(6,"po-input",3),ww("ngModelChange",function(s){return Xy(m),eN(i.title,s)||(i.title=s),Qy(s)}),og(),QA(),Il(7,"po-number",4),ww("ngModelChange",function(s){return Xy(m),eN(i.height,s)||(i.height=s),Qy(s)}),og(),QA(),Il(8,"po-checkbox-group",5),ww("ngModelChange",function(s){return Xy(m),eN(i.properties,s)||(i.properties=s),Qy(s)}),og(),QA(),og(),Il(9,"div",2)(10,"po-textarea",6),ww("ngModelChange",function(s){return Xy(m),eN(i.content,s)||(i.content=s),Qy(s)}),og(),QA(),og(),Il(11,"div",2)(12,"po-button",7),ft("p-click",function(){return i.restore()}),og()()();}a&2&&(nw("p-title",i.title)("p-height",i.height)("p-no-border",i.properties.includes("noBorder"))("p-no-padding",i.properties.includes("noPadding")),Lp(),dg(" ",i.content,`
`),Lp(5),Ew("ngModel",i.title),e0(),Lp(),Ew("ngModel",i.height),e0(),Lp(),Ew("ngModel",i.properties),nw("p-options",i.propertiesOptions),e0(),Lp(2),Ew("ngModel",i.content),e0());},dependencies:[G9,$9,z9,mk,hk,Qt,dc,mv,C3,F3,Hhe,$he],encapsulation:2,changeDetection:1})}return o})();var De=o=>({"docs-sample-code-tabs":o}),be=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-container-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Container Labs"),og(),Il(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-container-labs/sample-po-container-labs.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-container
  [p-title]="title"
  [p-height]="height"
  [p-no-border]="properties.includes('noBorder')"
  [p-no-padding]="properties.includes('noPadding')"
>
  { { content }}
</po-container>

<po-divider />

<form #f="ngForm">
  <div class="po-row">
    <po-input class="po-md-4" name="title" [(ngModel)]="title" p-label="Titulo"> </po-input>

    <po-number class="po-md-4" name="height" [(ngModel)]="height" p-label="Height"> </po-number>

    <po-checkbox-group
      class="po-md-4"
      name="properties"
      [(ngModel)]="properties"
      p-label="Properties"
      [p-options]="propertiesOptions"
    >
    </po-checkbox-group>
  </div>

  <div class="po-row">
    <po-textarea class="po-md-12" [(ngModel)]="content" name="content" p-label="Content"> </po-textarea>
  </div>

  <div class="po-row">
    <po-button class="po-md-3" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-container-labs/sample-po-container-labs.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { PoCheckboxGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-container-labs',
  templateUrl: './sample-po-container-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoContainerLabsComponent implements OnInit {
  content: string;
  title: string;
  height: number;
  properties: Array<string>;

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'noBorder', label: 'No Border' },
    { value: 'noPadding', label: 'No Padding' }
  ];

  ngOnInit() {
    this.restore();
  }

  restore() {
    this.title = undefined;
    this.content = undefined;
    this.height = undefined;
    this.properties = [];
  }
}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-container-labs"),og(),zl(23,"hr")),a&2&&(Lp(5),Ux("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,De,i.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,he],encapsulation:2})}return o})();var U=(()=>{class o{getColumns(){return [{property:"cities",label:"Cities that most downloaded PO"},{property:"packageVersion",label:"Package version"},{property:"downloads"}]}getItems(){return [{cities:"S\xE3o Paulo",packageVersion:"3.0.0-beta.1",downloads:"2000"},{cities:"Joinville",packageVersion:"2.9.1",downloads:"1000"},{cities:"Rio de Janeiro",packageVersion:"3.0.0",downloads:"250"},{cities:"Santa Catarina",packageVersion:"1.9.1",downloads:"100"},{cities:"Curitiba",packageVersion:"2.0.0-beta.2",downloads:"1040"},{cities:"Goiania",packageVersion:"1.9.1",downloads:"250"},{cities:"Londrina",packageVersion:"1.9.1",downloads:"35"},{cities:"Belo Horizonte",packageVersion:"1.9.1",downloads:"1100"}]}static \u0275fac=function(a){return new(a||o)};static \u0275prov=w({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var Me=["formShare"],ge=(()=>{class o{poNotification=f(Yp);sampleDashboardService=f(U);formShare;poModal;columns;email=void 0;isSubscribed=false;items;actions=[{label:"Share",action:this.modalOpen.bind(this),icon:"an an-share"},{label:"Disable notification",icon:"an an-bell",action:this.disableNotification.bind(this),disabled:()=>this.isSubscribed}];breadcrumb={items:[{label:"Home",link:"/"},{label:"Dashboard"}]};cancelAction={action:()=>{this.modalClose();},label:"Cancel"};shareAction={action:()=>{this.share();},label:"Share"};ngOnInit(){this.columns=this.sampleDashboardService.getColumns(),this.items=this.sampleDashboardService.getItems();}ngAfterContentChecked(){this.shareAction.danger=this.formShare.invalid;}modalClose(){this.poModal.close(),this.formShare.reset();}modalOpen(){this.poModal.open();}share(){this.formShare.valid?this.poNotification.success(`Webpage shared successfully to: ${this.email}.`):this.poNotification.error("Invalid email."),this.modalClose();}disableNotification(){this.isSubscribed=true;}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-container-dashboard"]],viewQuery:function(a,i){if(a&1&&Gl(Me,7)(Yo,5),a&2){let m;co(m=lo())&&(i.formShare=m.first),co(m=lo())&&(i.poModal=m.first);}},standalone:false,features:[we([U])],decls:38,vars:8,consts:[["formShare","ngForm"],["p-title","Dashboard",3,"p-actions","p-breadcrumb"],[1,"po-lg-6"],["p-title","Daily visitors",1,"po-lg-6","po-mb-1"],[1,"po-font-subtitle","po-text-center"],[1,"po-text-center","sample-container-dashboard"],["p-title","Most viewed page",1,"po-lg-6","po-mb-1"],["p-title","Website status",1,"po-lg-6","po-mb-1"],["p-title","NPM downloads",1,"po-lg-6","po-mb-1"],["p-title","Devforum PO questions",1,"po-lg-6","po-mb-1"],["p-title","Angular versions supported",1,"po-lg-6","po-mb-1"],["p-striped","true",3,"p-columns","p-items","p-hide-table-search"],["p-title","Share webpage",3,"p-primary-action","p-secondary-action"],["name","email","p-clean","","p-label","Type an e-mail for sharing webpage: http://www.po.com.br","p-required","",1,"po-lg-12",3,"ngModelChange","ngModel"]],template:function(a,i){if(a&1){let m=Dx();Il(0,"po-page-default",1)(1,"po-container",2)(2,"po-widget",3)(3,"div",4),Qx(4,"540"),og(),Il(5,"div",5),Qx(6,"www.po.com.br"),og()(),Il(7,"po-widget",6)(8,"div",4),Qx(9,"300 views"),og(),Il(10,"div",5),Qx(11,"https://po-ui.io"),og()(),Il(12,"po-widget",7)(13,"div",4),Qx(14,"Online"),og(),Il(15,"div",5),Qx(16,"21 days"),og()(),Il(17,"po-widget",8)(18,"div",4),Qx(19,"266"),og(),Il(20,"div",5),Qx(21,"@po-ui/ng-components - 2.0.0"),og()(),Il(22,"po-widget",9)(23,"div",4),Qx(24,"800 questions"),og(),Il(25,"div",5),Qx(26,"https://devforum.po.com.br"),og()(),Il(27,"po-widget",10)(28,"div",4),Qx(29,"AngularJS - Angular 7"),og(),Il(30,"div",5),Qx(31,"Angular 7 most downloaded"),og()()(),Il(32,"po-container",2),zl(33,"po-table",11),og()(),Il(34,"po-modal",12)(35,"form",null,0)(37,"po-email",13),ww("ngModelChange",function(s){return Xy(m),eN(i.email,s)||(i.email=s),Qy(s)}),og(),QA(),og()();}a&2&&(nw("p-actions",i.actions)("p-breadcrumb",i.breadcrumb),Lp(33),nw("p-columns",i.columns)("p-items",i.items)("p-hide-table-search",false),Lp(),nw("p-primary-action",i.shareAction)("p-secondary-action",i.cancelAction),Lp(3),Ew("ngModel",i.email),e0());},dependencies:[G9,$9,z9,mk,hk,dc,kz,Yo,cNe,E3,yNe],styles:[".sample-container-dashboard[_ngcontent-%COMP%]{color:#9da7a9;font-family:NunitoSans;font-size:14px}"],changeDetection:1})}return o})();var _e=o=>({"docs-sample-code-tabs":o}),Ce=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-container-dashboard-view"]],standalone:false,decls:34,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Container - Dashboard"),og(),Il(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-container-dashboard/sample-po-container-dashboard.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-page-default p-title="Dashboard" [p-actions]="actions" [p-breadcrumb]="breadcrumb">
  <po-container class="po-lg-6">
    <po-widget class="po-lg-6 po-mb-1" p-title="Daily visitors">
      <div class="po-font-subtitle po-text-center">540</div>
      <div class="po-text-center sample-container-dashboard">www.po.com.br</div>
    </po-widget>

    <po-widget class="po-lg-6 po-mb-1" p-title="Most viewed page">
      <div class="po-font-subtitle po-text-center">300 views</div>
      <div class="po-text-center sample-container-dashboard">https://po-ui.io</div>
    </po-widget>

    <po-widget class="po-lg-6 po-mb-1" p-title="Website status">
      <div class="po-font-subtitle po-text-center">Online</div>
      <div class="po-text-center sample-container-dashboard">21 days</div>
    </po-widget>

    <po-widget class="po-lg-6 po-mb-1" p-title="NPM downloads">
      <div class="po-font-subtitle po-text-center">266</div>
      <div class="po-text-center sample-container-dashboard">&#64;po-ui/ng-components - 2.0.0</div>
    </po-widget>

    <po-widget class="po-lg-6 po-mb-1" p-title="Devforum PO questions">
      <div class="po-font-subtitle po-text-center">800 questions</div>
      <div class="po-text-center sample-container-dashboard">https://devforum.po.com.br</div>
    </po-widget>

    <po-widget class="po-lg-6 po-mb-1" p-title="Angular versions supported">
      <div class="po-font-subtitle po-text-center">AngularJS - Angular 7</div>
      <div class="po-text-center sample-container-dashboard">Angular 7 most downloaded</div>
    </po-widget>
  </po-container>

  <po-container class="po-lg-6">
    <po-table [p-columns]="columns" [p-items]="items" p-striped="true" [p-hide-table-search]="false"> </po-table>
  </po-container>
</po-page-default>

<po-modal p-title="Share webpage" [p-primary-action]="shareAction" [p-secondary-action]="cancelAction">
  <form #formShare="ngForm">
    <po-email
      class="po-lg-12"
      name="email"
      [(ngModel)]="email"
      p-clean
      p-label="Type an e-mail for sharing webpage: http://www.po.com.br"
      p-required
    >
    </po-email>
  </form>
</po-modal>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-container-dashboard/sample-po-container-dashboard.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { AfterContentChecked, Component, ViewChild, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
import { NgForm } from '@angular/forms';

import { SampleDashboardService } from './sample-po-container-dashboard.service';

import {
  PoBreadcrumb,
  PoModalAction,
  PoModalComponent,
  PoNotificationService,
  PoPageAction,
  PoTableColumn
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-container-dashboard',
  templateUrl: './sample-po-container-dashboard.component.html',
  styleUrls: ['./sample-po-container-dashboard.component.css'],
  providers: [SampleDashboardService],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoContainerDashboardComponent implements AfterContentChecked, OnInit {
  private poNotification = inject(PoNotificationService);
  private sampleDashboardService = inject(SampleDashboardService);

  @ViewChild('formShare', { static: true }) formShare: NgForm;
  @ViewChild(PoModalComponent) poModal: PoModalComponent;

  columns: Array<PoTableColumn>;
  email: string = undefined;
  isSubscribed: boolean = false;
  items: Array<object>;

  public readonly actions: Array<PoPageAction> = [
    { label: 'Share', action: this.modalOpen.bind(this), icon: 'an an-share' },
    {
      label: 'Disable notification',
      icon: 'an an-bell',
      action: this.disableNotification.bind(this),
      disabled: () => this.isSubscribed
    }
  ];

  public readonly breadcrumb: PoBreadcrumb = {
    items: [{ label: 'Home', link: '/' }, { label: 'Dashboard' }]
  };

  public readonly cancelAction: PoModalAction = {
    action: () => {
      this.modalClose();
    },
    label: 'Cancel'
  };

  public readonly shareAction: PoModalAction = {
    action: () => {
      this.share();
    },
    label: 'Share'
  };

  ngOnInit() {
    this.columns = this.sampleDashboardService.getColumns();
    this.items = this.sampleDashboardService.getItems();
  }

  ngAfterContentChecked() {
    this.shareAction.danger = this.formShare.invalid;
  }

  modalClose() {
    this.poModal.close();
    this.formShare.reset();
  }

  modalOpen() {
    this.poModal.open();
  }

  share() {
    if (this.formShare.valid) {
      this.poNotification.success(\`Webpage shared successfully to: \${this.email}.\`);
    } else {
      this.poNotification.error(\`Invalid email.\`);
    }
    this.modalClose();
  }

  private disableNotification() {
    this.isSubscribed = true;
  }
}
`),og(),Il(21,"label",6),Qx(22,"sample-po-container-dashboard/sample-po-container-dashboard.service.ts"),og(),Il(23,"pre",9),Qx(24,`import { Injectable } from '@angular/core';

import { PoTableColumn } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class SampleDashboardService {
  getColumns(): Array<PoTableColumn> {
    return [
      { property: 'cities', label: 'Cities that most downloaded PO' },
      { property: 'packageVersion', label: 'Package version' },
      { property: 'downloads' }
    ];
  }

  getItems() {
    return [
      { cities: 'S\xE3o Paulo', packageVersion: '3.0.0-beta.1', downloads: '2000' },
      { cities: 'Joinville', packageVersion: '2.9.1', downloads: '1000' },
      { cities: 'Rio de Janeiro', packageVersion: '3.0.0', downloads: '250' },
      { cities: 'Santa Catarina', packageVersion: '1.9.1', downloads: '100' },
      { cities: 'Curitiba', packageVersion: '2.0.0-beta.2', downloads: '1040' },
      { cities: 'Goiania', packageVersion: '1.9.1', downloads: '250' },
      { cities: 'Londrina', packageVersion: '1.9.1', downloads: '35' },
      { cities: 'Belo Horizonte', packageVersion: '1.9.1', downloads: '1100' }
    ];
  }
}
`),og()()(),Il(25,"po-tab",10)(26,"div")(27,"label",6),Qx(28,"sample-po-container-dashboard/sample-po-container-dashboard.component.css"),og(),Il(29,"pre",11),Qx(30,`.sample-container-dashboard {
  color: #9da7a9;
  font-family: NunitoSans;
  font-size: 14px;
}
`),og()()()()(),Il(31,"div",12),zl(32,"sample-po-container-dashboard"),og(),zl(33,"hr")),a&2&&(Lp(5),Ux("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,_e,i.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,ge],encapsulation:2})}return o})();var Se=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-container-doc"]],standalone:false,decls:277,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/guides/grid-system"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","number"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","string"]],template:function(a,i){a&1&&(Il(0,"div",0)(1,"p",1)(2,"code"),Qx(3,"import { PoContainerModule } from '@po-ui/ng-components';"),og()(),Il(4,"div",2)(5,"p"),Qx(6,"M\xF3dulo do componente "),Il(7,"code"),Qx(8,"po-container"),og(),Qx(9,"."),og()(),Il(10,"h3",3),Qx(11,"Componente"),og(),Il(12,"h4",4)(13,"code",5),Qx(14,"PoContainerComponent"),og()(),Il(15,"div",2)(16,"p"),Qx(17,"O "),Il(18,"code"),Qx(19,"po-container"),og(),Qx(20,` \xE9 um componente que visa facilitar o agrupamento de conte\xFAdos.
Por padr\xE3o o mesmo exibe uma borda, um efeito de sombra ao seu redor e um espa\xE7amento em sua parte interna, os quais
podem ser desabilitados. Ao remover sua borda a sombra tamb\xE9m ser\xE1 removida. Al\xE9m disso, sua altura acompanha a
quantidade do conte\xFAdo, por\xE9m pode ser fixada. Para controlar sua largura, utilize o `),Il(21,"a",6),Qx(22,"Grid System"),og(),Qx(23,`,
assim possibilitando o tratamento para diferentes resolu\xE7\xF5es.`),og(),Il(24,"h4"),Qx(25,"Tokens customiz\xE1veis"),og(),Il(26,"p"),Qx(27,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),og(),Il(28,"blockquote")(29,"p"),Qx(30,"Para maiores informa\xE7\xF5es, acesse o guia "),Il(31,"a",7),Qx(32,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),Qx(33,"."),og()(),Il(34,"table")(35,"thead")(36,"tr")(37,"th"),Qx(38,"Propriedade"),og(),Il(39,"th"),Qx(40,"Descri\xE7\xE3o"),og(),Il(41,"th"),Qx(42,"Valor Padr\xE3o"),og()()(),Il(43,"tbody")(44,"tr")(45,"td")(46,"strong"),Qx(47,"Default Values - CONTENT"),og()(),zl(48,"td")(49,"td"),og(),Il(50,"tr")(51,"td")(52,"code"),Qx(53,"--padding"),og(),Qx(54," \xA0"),og(),Il(55,"td"),Qx(56,"Preenchimento"),og(),Il(57,"td")(58,"code"),Qx(59,"var(--spacing-sm)"),og()()(),Il(60,"tr")(61,"td")(62,"code"),Qx(63,"--border-radius"),og(),Qx(64," \xA0"),og(),Il(65,"td"),Qx(66,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),og(),Il(67,"td")(68,"code"),Qx(69,"var(--border-radius-md)"),og()()(),Il(70,"tr")(71,"td")(72,"code"),Qx(73,"--border-width"),og(),Qx(74," \xA0"),og(),Il(75,"td"),Qx(76,"Cont\xE9m o valor da largura dos cantos do elemento\xA0"),og(),Il(77,"td")(78,"code"),Qx(79,"var(--border-width-sm)"),og()()(),Il(80,"tr")(81,"td")(82,"code"),Qx(83,"--border-color"),og(),Qx(84," \xA0"),og(),Il(85,"td"),Qx(86,"Cor da borda"),og(),Il(87,"td")(88,"code"),Qx(89,"var(--color-neutral-light-20)"),og()()(),Il(90,"tr")(91,"td")(92,"code"),Qx(93,"--background"),og(),Qx(94," \xA0"),og(),Il(95,"td"),Qx(96,"Cor de background"),og(),Il(97,"td")(98,"code"),Qx(99,"var(--color-neutral-light-00)"),og()()(),Il(100,"tr")(101,"td")(102,"strong"),Qx(103,"Default Values - TITLE"),og()(),zl(104,"td")(105,"td"),og(),Il(106,"tr")(107,"td")(108,"code"),Qx(109,"--font-family"),og(),Qx(110," \xA0"),og(),Il(111,"td"),Qx(112,"Font aplicado ao titulo"),og(),Il(113,"td")(114,"code"),Qx(115,"var(--font-family-theme)"),og()()(),Il(116,"tr")(117,"td")(118,"code"),Qx(119,"--line-weight"),og(),Qx(120," \xA0"),og(),Il(121,"td"),Qx(122,"Espessura da Fonte a ser aplicada do titulo"),og(),Il(123,"td")(124,"code"),Qx(125,"var(--font-weight-semibold)"),og()()(),Il(126,"tr")(127,"td")(128,"code"),Qx(129,"--line-height"),og(),Qx(130," \xA0"),og(),Il(131,"td"),Qx(132,"tamanho da linha do titulo"),og(),Il(133,"td")(134,"code"),Qx(135,"var(--line-height-md)"),og()()(),Il(136,"tr")(137,"td")(138,"code"),Qx(139,"--text-color"),og(),Qx(140," \xA0"),og(),Il(141,"td"),Qx(142,"Cor do Texto do titulo"),og(),Il(143,"td")(144,"code"),Qx(145,"var(--color-neutral-dark-90)"),og()()(),Il(146,"tr")(147,"td")(148,"code"),Qx(149,"--font-size"),og(),Qx(150," \xA0"),og(),Il(151,"td"),Qx(152,"Tamanho da fonte do titulo"),og(),Il(153,"td")(154,"code"),Qx(155,"1.125rem"),og()()(),Il(156,"tr")(157,"td")(158,"code"),Qx(159,"--letter-spacing"),og(),Qx(160," \xA0"),og(),Il(161,"td"),Qx(162,"distancia entre letras do titulo"),og(),Il(163,"td")(164,"code"),Qx(165,"0.017rem"),og()()(),Il(166,"tr")(167,"td")(168,"code"),Qx(169,"--margin"),og(),Qx(170," \xA0"),og(),Il(171,"td"),Qx(172,"Margin entre o titulo e o conteudo"),og(),Il(173,"td")(174,"code"),Qx(175,"0 0 var(--spacing-xs)"),og()()()()()(),Il(176,"div",8)(177,"h4",9),Qx(178,"Seletor"),og(),Il(179,"pre",10),Qx(180,`<po-container
    p-height="number"
    p-no-border="boolean"
    p-no-padding="boolean"
    p-title="string" >
</po-container>
`),og()(),Il(181,"h4",11),Qx(182,"Propriedades"),og(),Il(183,"table",12)(184,"tr",13)(185,"th",14),Qx(186,"Nome"),og(),Il(187,"th",14),Qx(188,"Tipo"),og(),Il(189,"th",14),Qx(190,"Padr\xE3o"),og(),Il(191,"th",14),Qx(192,"Descri\xE7\xE3o"),og()(),Il(193,"tr",15)(194,"td",16)(195,"div",17)(196,"span",18),Qx(197," p-height"),zl(198,"br"),og()()(),Il(199,"td",19)(200,"code",20),Qx(201,"number"),og()(),Il(202,"td",21),Qx(203,"-"),og(),Il(204,"td",22)(205,"em")(206,"strong"),Qx(207,"(opcional)"),og()(),Il(208,"p"),Qx(209,"Define a altura do "),Il(210,"code"),Qx(211,"po-container"),og(),Qx(212,"."),og(),Il(213,"blockquote")(214,"p"),Qx(215,"Caso n\xE3o seja definido um valor, a altura se ajustar\xE1 de acordo com o conte\xFAdo."),og()()()(),Il(216,"tr",15)(217,"td",16)(218,"div",17)(219,"span",18),Qx(220," p-no-border"),zl(221,"br"),og()()(),Il(222,"td",19)(223,"code",23),Qx(224,"boolean"),og()(),Il(225,"td",21)(226,"p")(227,"code"),Qx(228,"false"),og()()(),Il(229,"td",22)(230,"em")(231,"strong"),Qx(232,"(opcional)"),og()(),Il(233,"p"),Qx(234,"Desabilita a borda e a sombra em torno do "),Il(235,"code"),Qx(236,"po-container"),og(),Qx(237,"."),og()()(),Il(238,"tr",15)(239,"td",16)(240,"div",17)(241,"span",18),Qx(242," p-no-padding"),zl(243,"br"),og()()(),Il(244,"td",19)(245,"code",23),Qx(246,"boolean"),og()(),Il(247,"td",21)(248,"p")(249,"code"),Qx(250,"false"),og()()(),Il(251,"td",22)(252,"em")(253,"strong"),Qx(254,"(opcional)"),og()(),Il(255,"p"),Qx(256,"Desabilita o espa\xE7amento interno do "),Il(257,"code"),Qx(258,"po-container"),og(),Qx(259,"."),og()()(),Il(260,"tr",15)(261,"td",16)(262,"div",17)(263,"span",18),Qx(264," p-title"),zl(265,"br"),og()()(),Il(266,"td",19)(267,"code",24),Qx(268,"string"),og()(),Il(269,"td",21),Qx(270,"-"),og(),Il(271,"td",22)(272,"em")(273,"strong"),Qx(274,"(opcional)"),og()(),Il(275,"p"),Qx(276,"T\xEDtulo do Container."),og()()()()());},dependencies:[Ka],encapsulation:2})}return o})();var fe=(()=>{class o{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(l,a){this.route=l,this.router=a;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let a=l.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:"merge"}),this.activeTab=l;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(a){return new(a||o)(C(Xn),C(En))};static \u0275cmp=Un({type:o,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Container",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,i){a&1&&(Il(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return i.changeTab("doc")}),zl(3,"sample-po-container-doc"),og(),Il(4,"po-tab",3),ft("p-click",function(){return i.changeTab("web")}),zl(5,"sample-po-container-basic-view")(6,"sample-po-container-labs-view")(7,"sample-po-container-dashboard-view"),og()()()),a&2&&(nw("p-actions",i.actions),Lp(2),nw("p-active",i.activeTab==="doc"),Lp(2),nw("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[cNe,qme,Yme,ue,be,Ce,Se],encapsulation:2})}return o})();var Be=[{path:"",component:fe}],ve=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=fe$1({type:o});static \u0275inj=ue$1({imports:[uL.forChild(Be),uL]})}return o})();var dt=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=fe$1({type:o});static \u0275inj=ue$1({imports:[sr,ve]})}return o})();export{dt as DocPoContainerModule};