import {f as fe$1,u as ue$1,s as sr,m as mL,w,c3 as Xn,E as En,U as Un,I,c as f,aW as Yp,aI as dc,F as Wl,an as SO,aH as Ka,b8 as Ume,b9 as $me,C as Sl,y as rN,J as og,a1 as ft,L as Lp,ar as Gx,au as dg,O as rw,bs as gN,aX as Q9,aF as Z9,aY as K9,aG as wk,aZ as _k,b0 as Qt,b1 as mv,c4 as b3,b4 as L3,cp as Bhe,b5 as Ghe,aB as Ix,aM as Cw,aN as n0,aO as ww,aP as i0,cz as Pz,b6 as Yo,a3 as sNe,b7 as M3,ba as vNe,Q as we,av as ql,aw as lo,ax as uo,aD as Ky,aT as oN,aE as Xy}from'./main-TVDUJ47Y.js';var me=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-container-basic"]],standalone:false,decls:1,vars:0,template:function(a,i){a&1&&Wl(0,"po-container");},dependencies:[dc],encapsulation:2,changeDetection:1})}return o})();var xe=o=>({"docs-sample-code-tabs":o}),ue=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-container-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),rN(3,"PO Container Basic"),og(),Sl(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),rN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),rN(12,"sample-po-container-basic/sample-po-container-basic.component.html"),og(),Sl(13,"pre",7),rN(14,`<po-container></po-container>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),rN(18,"sample-po-container-basic/sample-po-container-basic.component.ts"),og(),Sl(19,"pre",9),rN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-container-basic',
  templateUrl: './sample-po-container-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoContainerBasicComponent {}
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-container-basic"),og(),Wl(23,"hr")),a&2&&(Lp(5),Gx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),rw("ngClass",gN(4,xe,i.hideSampleCodeTabs)));},dependencies:[SO,Ka,Ume,$me,me],encapsulation:2,changeDetection:1})}return o})();var he=(()=>{class o{content;title;height;properties;propertiesOptions=[{value:"noBorder",label:"No Border"},{value:"noPadding",label:"No Padding"}];ngOnInit(){this.restore();}restore(){this.title=void 0,this.content=void 0,this.height=void 0,this.properties=[];}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-container-labs"]],standalone:false,decls:13,vars:10,consts:[["f","ngForm"],[3,"p-title","p-height","p-no-border","p-no-padding"],[1,"po-row"],["name","title","p-label","Titulo",1,"po-md-4",3,"ngModelChange","ngModel"],["name","height","p-label","Height",1,"po-md-4",3,"ngModelChange","ngModel"],["name","properties","p-label","Properties",1,"po-md-4",3,"ngModelChange","ngModel","p-options"],["name","content","p-label","Content",1,"po-md-12",3,"ngModelChange","ngModel"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(a,i){if(a&1){let m=Ix();Sl(0,"po-container",1),rN(1),og(),Wl(2,"po-divider"),Sl(3,"form",null,0)(5,"div",2)(6,"po-input",3),Cw("ngModelChange",function(s){return Ky(m),oN(i.title,s)||(i.title=s),Xy(s)}),og(),n0(),Sl(7,"po-number",4),Cw("ngModelChange",function(s){return Ky(m),oN(i.height,s)||(i.height=s),Xy(s)}),og(),n0(),Sl(8,"po-checkbox-group",5),Cw("ngModelChange",function(s){return Ky(m),oN(i.properties,s)||(i.properties=s),Xy(s)}),og(),n0(),og(),Sl(9,"div",2)(10,"po-textarea",6),Cw("ngModelChange",function(s){return Ky(m),oN(i.content,s)||(i.content=s),Xy(s)}),og(),n0(),og(),Sl(11,"div",2)(12,"po-button",7),ft("p-click",function(){return i.restore()}),og()()();}a&2&&(rw("p-title",i.title)("p-height",i.height)("p-no-border",i.properties.includes("noBorder"))("p-no-padding",i.properties.includes("noPadding")),Lp(),dg(" ",i.content,`
`),Lp(5),ww("ngModel",i.title),i0(),Lp(),ww("ngModel",i.height),i0(),Lp(),ww("ngModel",i.properties),rw("p-options",i.propertiesOptions),i0(),Lp(2),ww("ngModel",i.content),i0());},dependencies:[Q9,Z9,K9,wk,_k,Qt,dc,mv,b3,L3,Bhe,Ghe],encapsulation:2,changeDetection:1})}return o})();var De=o=>({"docs-sample-code-tabs":o}),be=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-container-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),rN(3,"PO Container Labs"),og(),Sl(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),rN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),rN(12,"sample-po-container-labs/sample-po-container-labs.component.html"),og(),Sl(13,"pre",7),rN(14,`<po-container
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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),rN(18,"sample-po-container-labs/sample-po-container-labs.component.ts"),og(),Sl(19,"pre",9),rN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-container-labs"),og(),Wl(23,"hr")),a&2&&(Lp(5),Gx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),rw("ngClass",gN(4,De,i.hideSampleCodeTabs)));},dependencies:[SO,Ka,Ume,$me,he],encapsulation:2,changeDetection:1})}return o})();var U=(()=>{class o{getColumns(){return [{property:"cities",label:"Cities that most downloaded PO"},{property:"packageVersion",label:"Package version"},{property:"downloads"}]}getItems(){return [{cities:"S\xE3o Paulo",packageVersion:"3.0.0-beta.1",downloads:"2000"},{cities:"Joinville",packageVersion:"2.9.1",downloads:"1000"},{cities:"Rio de Janeiro",packageVersion:"3.0.0",downloads:"250"},{cities:"Santa Catarina",packageVersion:"1.9.1",downloads:"100"},{cities:"Curitiba",packageVersion:"2.0.0-beta.2",downloads:"1040"},{cities:"Goiania",packageVersion:"1.9.1",downloads:"250"},{cities:"Londrina",packageVersion:"1.9.1",downloads:"35"},{cities:"Belo Horizonte",packageVersion:"1.9.1",downloads:"1100"}]}static \u0275fac=function(a){return new(a||o)};static \u0275prov=I({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var Me=["formShare"],ge=(()=>{class o{poNotification=f(Yp);sampleDashboardService=f(U);formShare;poModal;columns;email=void 0;isSubscribed=false;items;actions=[{label:"Share",action:this.modalOpen.bind(this),icon:"an an-share"},{label:"Disable notification",icon:"an an-bell",action:this.disableNotification.bind(this),disabled:()=>this.isSubscribed}];breadcrumb={items:[{label:"Home",link:"/"},{label:"Dashboard"}]};cancelAction={action:()=>{this.modalClose();},label:"Cancel"};shareAction={action:()=>{this.share();},label:"Share"};ngOnInit(){this.columns=this.sampleDashboardService.getColumns(),this.items=this.sampleDashboardService.getItems();}ngAfterContentChecked(){this.shareAction.danger=this.formShare.invalid;}modalClose(){this.poModal.close(),this.formShare.reset();}modalOpen(){this.poModal.open();}share(){this.formShare.valid?this.poNotification.success(`Webpage shared successfully to: ${this.email}.`):this.poNotification.error("Invalid email."),this.modalClose();}disableNotification(){this.isSubscribed=true;}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-container-dashboard"]],viewQuery:function(a,i){if(a&1&&ql(Me,7)(Yo,5),a&2){let m;lo(m=uo())&&(i.formShare=m.first),lo(m=uo())&&(i.poModal=m.first);}},standalone:false,features:[we([U])],decls:38,vars:8,consts:[["formShare","ngForm"],["p-title","Dashboard",3,"p-actions","p-breadcrumb"],[1,"po-lg-6"],["p-title","Daily visitors",1,"po-lg-6","po-mb-1"],[1,"po-font-subtitle","po-text-center"],[1,"po-text-center","sample-container-dashboard"],["p-title","Most viewed page",1,"po-lg-6","po-mb-1"],["p-title","Website status",1,"po-lg-6","po-mb-1"],["p-title","NPM downloads",1,"po-lg-6","po-mb-1"],["p-title","Devforum PO questions",1,"po-lg-6","po-mb-1"],["p-title","Angular versions supported",1,"po-lg-6","po-mb-1"],["p-striped","true",3,"p-columns","p-items","p-hide-table-search"],["p-title","Share webpage",3,"p-primary-action","p-secondary-action"],["name","email","p-clean","","p-label","Type an e-mail for sharing webpage: http://www.po.com.br","p-required","",1,"po-lg-12",3,"ngModelChange","ngModel"]],template:function(a,i){if(a&1){let m=Ix();Sl(0,"po-page-default",1)(1,"po-container",2)(2,"po-widget",3)(3,"div",4),rN(4,"540"),og(),Sl(5,"div",5),rN(6,"www.po.com.br"),og()(),Sl(7,"po-widget",6)(8,"div",4),rN(9,"300 views"),og(),Sl(10,"div",5),rN(11,"https://po-ui.io"),og()(),Sl(12,"po-widget",7)(13,"div",4),rN(14,"Online"),og(),Sl(15,"div",5),rN(16,"21 days"),og()(),Sl(17,"po-widget",8)(18,"div",4),rN(19,"266"),og(),Sl(20,"div",5),rN(21,"@po-ui/ng-components - 2.0.0"),og()(),Sl(22,"po-widget",9)(23,"div",4),rN(24,"800 questions"),og(),Sl(25,"div",5),rN(26,"https://devforum.po.com.br"),og()(),Sl(27,"po-widget",10)(28,"div",4),rN(29,"AngularJS - Angular 7"),og(),Sl(30,"div",5),rN(31,"Angular 7 most downloaded"),og()()(),Sl(32,"po-container",2),Wl(33,"po-table",11),og()(),Sl(34,"po-modal",12)(35,"form",null,0)(37,"po-email",13),Cw("ngModelChange",function(s){return Ky(m),oN(i.email,s)||(i.email=s),Xy(s)}),og(),n0(),og()();}a&2&&(rw("p-actions",i.actions)("p-breadcrumb",i.breadcrumb),Lp(33),rw("p-columns",i.columns)("p-items",i.items)("p-hide-table-search",false),Lp(),rw("p-primary-action",i.shareAction)("p-secondary-action",i.cancelAction),Lp(3),ww("ngModel",i.email),i0());},dependencies:[Q9,Z9,K9,wk,_k,dc,Pz,Yo,sNe,M3,vNe],styles:[".sample-container-dashboard[_ngcontent-%COMP%]{color:#9da7a9;font-family:NunitoSans;font-size:14px}"],changeDetection:1})}return o})();var _e=o=>({"docs-sample-code-tabs":o}),Ce=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-container-dashboard-view"]],standalone:false,decls:34,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),rN(3,"PO Container - Dashboard"),og(),Sl(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),rN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),rN(12,"sample-po-container-dashboard/sample-po-container-dashboard.component.html"),og(),Sl(13,"pre",7),rN(14,`<po-page-default p-title="Dashboard" [p-actions]="actions" [p-breadcrumb]="breadcrumb">
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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),rN(18,"sample-po-container-dashboard/sample-po-container-dashboard.component.ts"),og(),Sl(19,"pre",9),rN(20,`import { AfterContentChecked, Component, ViewChild, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),og(),Sl(21,"label",6),rN(22,"sample-po-container-dashboard/sample-po-container-dashboard.service.ts"),og(),Sl(23,"pre",9),rN(24,`import { Injectable } from '@angular/core';

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
`),og()()(),Sl(25,"po-tab",10)(26,"div")(27,"label",6),rN(28,"sample-po-container-dashboard/sample-po-container-dashboard.component.css"),og(),Sl(29,"pre",11),rN(30,`.sample-container-dashboard {
  color: #9da7a9;
  font-family: NunitoSans;
  font-size: 14px;
}
`),og()()()()(),Sl(31,"div",12),Wl(32,"sample-po-container-dashboard"),og(),Wl(33,"hr")),a&2&&(Lp(5),Gx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),rw("ngClass",gN(4,_e,i.hideSampleCodeTabs)));},dependencies:[SO,Ka,Ume,$me,ge],encapsulation:2,changeDetection:1})}return o})();var Se=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-container-doc"]],standalone:false,decls:277,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/guides/grid-system"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","number"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","string"]],template:function(a,i){a&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),rN(3,"import { PoContainerModule } from '@po-ui/ng-components';"),og()(),Sl(4,"div",2)(5,"p"),rN(6,"M\xF3dulo do componente "),Sl(7,"code"),rN(8,"po-container"),og(),rN(9,"."),og()(),Sl(10,"h3",3),rN(11,"Componente"),og(),Sl(12,"h4",4)(13,"code",5),rN(14,"PoContainerComponent"),og()(),Sl(15,"div",2)(16,"p"),rN(17,"O "),Sl(18,"code"),rN(19,"po-container"),og(),rN(20,` \xE9 um componente que visa facilitar o agrupamento de conte\xFAdos.
Por padr\xE3o o mesmo exibe uma borda, um efeito de sombra ao seu redor e um espa\xE7amento em sua parte interna, os quais
podem ser desabilitados. Ao remover sua borda a sombra tamb\xE9m ser\xE1 removida. Al\xE9m disso, sua altura acompanha a
quantidade do conte\xFAdo, por\xE9m pode ser fixada. Para controlar sua largura, utilize o `),Sl(21,"a",6),rN(22,"Grid System"),og(),rN(23,`,
assim possibilitando o tratamento para diferentes resolu\xE7\xF5es.`),og(),Sl(24,"h4"),rN(25,"Tokens customiz\xE1veis"),og(),Sl(26,"p"),rN(27,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),og(),Sl(28,"blockquote")(29,"p"),rN(30,"Para maiores informa\xE7\xF5es, acesse o guia "),Sl(31,"a",7),rN(32,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),rN(33,"."),og()(),Sl(34,"table")(35,"thead")(36,"tr")(37,"th"),rN(38,"Propriedade"),og(),Sl(39,"th"),rN(40,"Descri\xE7\xE3o"),og(),Sl(41,"th"),rN(42,"Valor Padr\xE3o"),og()()(),Sl(43,"tbody")(44,"tr")(45,"td")(46,"strong"),rN(47,"Default Values - CONTENT"),og()(),Wl(48,"td")(49,"td"),og(),Sl(50,"tr")(51,"td")(52,"code"),rN(53,"--padding"),og(),rN(54," \xA0"),og(),Sl(55,"td"),rN(56,"Preenchimento"),og(),Sl(57,"td")(58,"code"),rN(59,"var(--spacing-sm)"),og()()(),Sl(60,"tr")(61,"td")(62,"code"),rN(63,"--border-radius"),og(),rN(64," \xA0"),og(),Sl(65,"td"),rN(66,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),og(),Sl(67,"td")(68,"code"),rN(69,"var(--border-radius-md)"),og()()(),Sl(70,"tr")(71,"td")(72,"code"),rN(73,"--border-width"),og(),rN(74," \xA0"),og(),Sl(75,"td"),rN(76,"Cont\xE9m o valor da largura dos cantos do elemento\xA0"),og(),Sl(77,"td")(78,"code"),rN(79,"var(--border-width-sm)"),og()()(),Sl(80,"tr")(81,"td")(82,"code"),rN(83,"--border-color"),og(),rN(84," \xA0"),og(),Sl(85,"td"),rN(86,"Cor da borda"),og(),Sl(87,"td")(88,"code"),rN(89,"var(--color-neutral-light-20)"),og()()(),Sl(90,"tr")(91,"td")(92,"code"),rN(93,"--background"),og(),rN(94," \xA0"),og(),Sl(95,"td"),rN(96,"Cor de background"),og(),Sl(97,"td")(98,"code"),rN(99,"var(--color-neutral-light-00)"),og()()(),Sl(100,"tr")(101,"td")(102,"strong"),rN(103,"Default Values - TITLE"),og()(),Wl(104,"td")(105,"td"),og(),Sl(106,"tr")(107,"td")(108,"code"),rN(109,"--font-family"),og(),rN(110," \xA0"),og(),Sl(111,"td"),rN(112,"Font aplicado ao titulo"),og(),Sl(113,"td")(114,"code"),rN(115,"var(--font-family-theme)"),og()()(),Sl(116,"tr")(117,"td")(118,"code"),rN(119,"--line-weight"),og(),rN(120," \xA0"),og(),Sl(121,"td"),rN(122,"Espessura da Fonte a ser aplicada do titulo"),og(),Sl(123,"td")(124,"code"),rN(125,"var(--font-weight-semibold)"),og()()(),Sl(126,"tr")(127,"td")(128,"code"),rN(129,"--line-height"),og(),rN(130," \xA0"),og(),Sl(131,"td"),rN(132,"tamanho da linha do titulo"),og(),Sl(133,"td")(134,"code"),rN(135,"var(--line-height-md)"),og()()(),Sl(136,"tr")(137,"td")(138,"code"),rN(139,"--text-color"),og(),rN(140," \xA0"),og(),Sl(141,"td"),rN(142,"Cor do Texto do titulo"),og(),Sl(143,"td")(144,"code"),rN(145,"var(--color-neutral-dark-90)"),og()()(),Sl(146,"tr")(147,"td")(148,"code"),rN(149,"--font-size"),og(),rN(150," \xA0"),og(),Sl(151,"td"),rN(152,"Tamanho da fonte do titulo"),og(),Sl(153,"td")(154,"code"),rN(155,"1.125rem"),og()()(),Sl(156,"tr")(157,"td")(158,"code"),rN(159,"--letter-spacing"),og(),rN(160," \xA0"),og(),Sl(161,"td"),rN(162,"distancia entre letras do titulo"),og(),Sl(163,"td")(164,"code"),rN(165,"0.017rem"),og()()(),Sl(166,"tr")(167,"td")(168,"code"),rN(169,"--margin"),og(),rN(170," \xA0"),og(),Sl(171,"td"),rN(172,"Margin entre o titulo e o conteudo"),og(),Sl(173,"td")(174,"code"),rN(175,"0 0 var(--spacing-xs)"),og()()()()()(),Sl(176,"div",8)(177,"h4",9),rN(178,"Seletor"),og(),Sl(179,"pre",10),rN(180,`<po-container
    p-height="number"
    p-no-border="boolean"
    p-no-padding="boolean"
    p-title="string" >
</po-container>
`),og()(),Sl(181,"h4",11),rN(182,"Propriedades"),og(),Sl(183,"table",12)(184,"tr",13)(185,"th",14),rN(186,"Nome"),og(),Sl(187,"th",14),rN(188,"Tipo"),og(),Sl(189,"th",14),rN(190,"Padr\xE3o"),og(),Sl(191,"th",14),rN(192,"Descri\xE7\xE3o"),og()(),Sl(193,"tr",15)(194,"td",16)(195,"div",17)(196,"span",18),rN(197," p-height"),Wl(198,"br"),og()()(),Sl(199,"td",19)(200,"code",20),rN(201,"number"),og()(),Sl(202,"td",21),rN(203,"-"),og(),Sl(204,"td",22)(205,"em")(206,"strong"),rN(207,"(opcional)"),og()(),Sl(208,"p"),rN(209,"Define a altura do "),Sl(210,"code"),rN(211,"po-container"),og(),rN(212,"."),og(),Sl(213,"blockquote")(214,"p"),rN(215,"Caso n\xE3o seja definido um valor, a altura se ajustar\xE1 de acordo com o conte\xFAdo."),og()()()(),Sl(216,"tr",15)(217,"td",16)(218,"div",17)(219,"span",18),rN(220," p-no-border"),Wl(221,"br"),og()()(),Sl(222,"td",19)(223,"code",23),rN(224,"boolean"),og()(),Sl(225,"td",21)(226,"p")(227,"code"),rN(228,"false"),og()()(),Sl(229,"td",22)(230,"em")(231,"strong"),rN(232,"(opcional)"),og()(),Sl(233,"p"),rN(234,"Desabilita a borda e a sombra em torno do "),Sl(235,"code"),rN(236,"po-container"),og(),rN(237,"."),og()()(),Sl(238,"tr",15)(239,"td",16)(240,"div",17)(241,"span",18),rN(242," p-no-padding"),Wl(243,"br"),og()()(),Sl(244,"td",19)(245,"code",23),rN(246,"boolean"),og()(),Sl(247,"td",21)(248,"p")(249,"code"),rN(250,"false"),og()()(),Sl(251,"td",22)(252,"em")(253,"strong"),rN(254,"(opcional)"),og()(),Sl(255,"p"),rN(256,"Desabilita o espa\xE7amento interno do "),Sl(257,"code"),rN(258,"po-container"),og(),rN(259,"."),og()()(),Sl(260,"tr",15)(261,"td",16)(262,"div",17)(263,"span",18),rN(264," p-title"),Wl(265,"br"),og()()(),Sl(266,"td",19)(267,"code",24),rN(268,"string"),og()(),Sl(269,"td",21),rN(270,"-"),og(),Sl(271,"td",22)(272,"em")(273,"strong"),rN(274,"(opcional)"),og()(),Sl(275,"p"),rN(276,"T\xEDtulo do Container."),og()()()()());},dependencies:[Ka],encapsulation:2,changeDetection:1})}return o})();var fe=(()=>{class o{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(l,a){this.route=l,this.router=a;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let a=l.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:"merge"}),this.activeTab=l;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(a){return new(a||o)(w(Xn),w(En))};static \u0275cmp=Un({type:o,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Container",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,i){a&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return i.changeTab("doc")}),Wl(3,"sample-po-container-doc"),og(),Sl(4,"po-tab",3),ft("p-click",function(){return i.changeTab("web")}),Wl(5,"sample-po-container-basic-view")(6,"sample-po-container-labs-view")(7,"sample-po-container-dashboard-view"),og()()()),a&2&&(rw("p-actions",i.actions),Lp(2),rw("p-active",i.activeTab==="doc"),Lp(2),rw("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[sNe,Ume,$me,ue,be,Ce,Se],encapsulation:2,changeDetection:1})}return o})();var Be=[{path:"",component:fe}],ve=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=fe$1({type:o});static \u0275inj=ue$1({imports:[mL.forChild(Be),mL]})}return o})();var dt=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=fe$1({type:o});static \u0275inj=ue$1({imports:[sr,ve]})}return o})();export{dt as DocPoContainerModule};