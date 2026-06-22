import {f as fe$1,u as ue,s as sr,h as hL,w,c3 as Xn,E as En,U as Un,a as f,cJ as aNe,H as Wl,an as CO,aH as Ka,b8 as Bme,b9 as qme,F as Sl,z as eN,J as og,a1 as ft,L as Lp,ar as $x,au as dg,Q as nw,bs as fN,aX as Z9,aF as G9,aY as q9,aG as _k,aZ as mk,b0 as Qt,b1 as mv,b4 as L3,c8 as wde,c9 as Ghe,aB as wx,aM as ww,aN as e0,bd as Nx,aO as Ew,aP as n0,a3 as rNe,aD as Ky,aT as nN,aE as Xy}from'./main-WP3NAV7C.js';var ee=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-detail-basic"]],standalone:false,decls:1,vars:0,consts:[["p-title","PO Page Detail"]],template:function(l,n){l&1&&Wl(0,"po-page-detail",0);},dependencies:[aNe],encapsulation:2,changeDetection:1})}return a})();var se=a=>({"docs-sample-code-tabs":a}),ie=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-detail-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Page Detail Basic"),og(),Sl(4,"a",2),ft("click",function(){return n.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-page-detail-basic/sample-po-page-detail-basic.component.html"),og(),Sl(13,"pre",7),eN(14,`<po-page-detail p-title="PO Page Detail"> </po-page-detail>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-page-detail-basic/sample-po-page-detail-basic.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-page-detail-basic',
  templateUrl: './sample-po-page-detail-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageDetailBasicComponent {}
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-page-detail-basic"),og(),Wl(23,"hr")),l&2&&(Lp(5),$x("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,se,n.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,ee],encapsulation:2})}return a})();var ne=(()=>{class a{action;breadcrumb;breadcrumbItem;breadcrumbParams;componentsSize;customLiterals;literals;params;title;subtitle;componentsSizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore();}addBreadcrumbItem(){this.breadcrumb.items=this.breadcrumb.items.concat([this.breadcrumbItem]),this.breadcrumbItem={label:void 0,link:void 0};}addBreadcrumbParam(){let d={[this.breadcrumbParams.property]:this.breadcrumbParams.value};this.breadcrumb.params?this.breadcrumb.params=Object.assign(this.breadcrumb.params,d):this.breadcrumb.params=d,this.breadcrumbParams={};}back(){this.action="back";}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals);}catch(d){this.customLiterals=void 0;}}edit(){this.action="edit";}remove(){this.action="remove";}restore(){this.action="",this.breadcrumb={items:[]},this.breadcrumbItem={label:void 0,link:void 0},this.breadcrumbParams={},this.componentsSize="medium",this.customLiterals=void 0,this.literals="",this.title="PO Page Detail",this.subtitle="";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-detail-labs"]],standalone:false,decls:33,vars:18,consts:[["f","ngForm"],["formBreadcrumbFavorite","ngForm"],["formBreadcrumbItems","ngForm"],["formBreadcrumbParams","ngForm"],[3,"p-back","p-edit","p-remove","p-breadcrumb","p-components-size","p-literals","p-title","p-subtitle"],[1,"po-row"],["p-label","Action",1,"po-md-12",3,"p-value"],["name","title","p-label","Title",1,"po-md-6",3,"ngModelChange","ngModel"],["name","subtitle","p-label","Subtitle",1,"po-md-6",3,"ngModelChange","ngModel"],["name","size","p-columns","4","p-label","Components size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","breadcrumbFavorite","p-clean","","p-help","https://po-sample-api.onrender.com/v1/favorite","p-label","Breadcrumb favorite",1,"po-md-6",3,"ngModelChange","ngModel"],["name","breadcrumbItemLabel","p-clean","","p-label","Breadcrumb item label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","breadcrumbItemLink","p-clean","","p-label","Breadcrumb item link","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add breadcrumb item",1,"po-md-6","po-lg-3",3,"p-click","p-disabled"],["name","breadcrumbParamsProperty","p-clean","","p-label","Breadcrumb params property","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","breadcrumbParamsValue","p-clean","","p-label","Breadcrumb params value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add breadcrumb params",1,"po-md-6","po-lg-3",3,"p-click","p-disabled"],["name","literals","p-help",'Ex.: {"back": "Retornar", "edit": "Edi\xE7\xE3o", "remove": "Excluir registro"}',"p-label","Literals",1,"po-md-12","po-lg-6",3,"ngModelChange","p-change","ngModel"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(l,n){if(l&1){let s=wx();Sl(0,"po-page-detail",4),ft("p-back",function(){return n.back()})("p-edit",function(){return n.edit()})("p-remove",function(){return n.remove()}),Sl(1,"div",5),Wl(2,"po-info",6),og(),Wl(3,"po-divider"),Sl(4,"form",null,0)(6,"po-input",7),ww("ngModelChange",function(m){return Ky(s),nN(n.title,m)||(n.title=m),Xy(m)}),og(),e0(),Sl(7,"po-input",8),ww("ngModelChange",function(m){return Ky(s),nN(n.subtitle,m)||(n.subtitle=m),Xy(m)}),og(),e0(),Sl(8,"po-radio-group",9),ww("ngModelChange",function(m){return Ky(s),nN(n.componentsSize,m)||(n.componentsSize=m),Xy(m)}),og(),e0(),Wl(9,"po-divider"),Sl(10,"form",null,1)(12,"div",5)(13,"po-input",10),ww("ngModelChange",function(m){return Ky(s),nN(n.breadcrumb.favorite,m)||(n.breadcrumb.favorite=m),Xy(m)}),og(),e0(),og()(),Sl(14,"form",null,2)(16,"div",5)(17,"po-input",11),ww("ngModelChange",function(m){return Ky(s),nN(n.breadcrumbItem.label,m)||(n.breadcrumbItem.label=m),Xy(m)}),og(),e0(),Sl(18,"po-input",12),ww("ngModelChange",function(m){return Ky(s),nN(n.breadcrumbItem.link,m)||(n.breadcrumbItem.link=m),Xy(m)}),og(),e0(),og(),Sl(19,"div",5)(20,"po-button",13),ft("p-click",function(){return n.addBreadcrumbItem()}),og()()(),Wl(21,"po-divider"),Sl(22,"form",null,3)(24,"div",5)(25,"po-input",14),ww("ngModelChange",function(m){return Ky(s),nN(n.breadcrumbParams.property,m)||(n.breadcrumbParams.property=m),Xy(m)}),og(),e0(),Sl(26,"po-input",15),ww("ngModelChange",function(m){return Ky(s),nN(n.breadcrumbParams.value,m)||(n.breadcrumbParams.value=m),Xy(m)}),og(),e0(),og(),Sl(27,"div",5)(28,"po-button",16),ft("p-click",function(){return n.addBreadcrumbParam()}),og()()(),Sl(29,"div",5)(30,"po-input",17),ww("ngModelChange",function(m){return Ky(s),nN(n.literals,m)||(n.literals=m),Xy(m)}),ft("p-change",function(){return n.changeLiterals()}),og(),e0(),og(),Sl(31,"div",5)(32,"po-button",18),ft("p-click",function(){return n.restore()}),og()()()();}if(l&2){let s=Nx(15),c=Nx(23);nw("p-breadcrumb",n.breadcrumb)("p-components-size",n.componentsSize)("p-literals",n.customLiterals)("p-title",n.title)("p-subtitle",n.subtitle),Lp(2),nw("p-value",n.action),Lp(4),Ew("ngModel",n.title),n0(),Lp(),Ew("ngModel",n.subtitle),n0(),Lp(),Ew("ngModel",n.componentsSize),nw("p-options",n.componentsSizeOptions),n0(),Lp(5),Ew("ngModel",n.breadcrumb.favorite),n0(),Lp(4),Ew("ngModel",n.breadcrumbItem.label),n0(),Lp(),Ew("ngModel",n.breadcrumbItem.link),n0(),Lp(2),nw("p-disabled",s.invalid),Lp(5),Ew("ngModel",n.breadcrumbParams.property),n0(),Lp(),Ew("ngModel",n.breadcrumbParams.value),n0(),Lp(2),nw("p-disabled",c.invalid),Lp(2),Ew("ngModel",n.literals),n0();}},dependencies:[Z9,G9,q9,_k,mk,Qt,mv,L3,wde,Ghe,aNe],encapsulation:2,changeDetection:1})}return a})();var be=a=>({"docs-sample-code-tabs":a}),ae=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-detail-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Page Detail Labs"),og(),Sl(4,"a",2),ft("click",function(){return n.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-page-detail-labs/sample-po-page-detail-labs.component.html"),og(),Sl(13,"pre",7),eN(14,`<po-page-detail
  [p-breadcrumb]="breadcrumb"
  [p-components-size]="componentsSize"
  [p-literals]="customLiterals"
  [p-title]="title"
  (p-back)="back()"
  (p-edit)="edit()"
  (p-remove)="remove()"
  [p-subtitle]="subtitle"
>
  <div class="po-row">
    <po-info class="po-md-12" p-label="Action" [p-value]="action"> </po-info>
  </div>

  <po-divider />

  <form #f="ngForm">
    <po-input class="po-md-6" name="title" [(ngModel)]="title" p-label="Title"> </po-input>

    <po-input class="po-md-6" name="subtitle" [(ngModel)]="subtitle" p-label="Subtitle"> </po-input>

    <po-radio-group
      class="po-md-12"
      name="size"
      [(ngModel)]="componentsSize"
      p-columns="4"
      p-label="Components size"
      p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
      [p-options]="componentsSizeOptions"
    >
    </po-radio-group>

    <po-divider />

    <form #formBreadcrumbFavorite="ngForm">
      <div class="po-row">
        <po-input
          class="po-md-6"
          name="breadcrumbFavorite"
          [(ngModel)]="breadcrumb.favorite"
          p-clean
          p-help="https://po-sample-api.onrender.com/v1/favorite"
          p-label="Breadcrumb favorite"
        >
        </po-input>
      </div>
    </form>

    <form #formBreadcrumbItems="ngForm">
      <div class="po-row">
        <po-input
          class="po-md-6"
          name="breadcrumbItemLabel"
          [(ngModel)]="breadcrumbItem.label"
          p-clean
          p-label="Breadcrumb item label"
          p-required
        >
        </po-input>

        <po-input
          class="po-md-6"
          name="breadcrumbItemLink"
          [(ngModel)]="breadcrumbItem.link"
          p-clean
          p-label="Breadcrumb item link"
          p-required
        >
        </po-input>
      </div>

      <div class="po-row">
        <po-button
          class="po-md-6 po-lg-3"
          p-label="Add breadcrumb item"
          [p-disabled]="formBreadcrumbItems.invalid"
          (p-click)="addBreadcrumbItem()"
        >
        </po-button>
      </div>
    </form>

    <po-divider />

    <form #formBreadcrumbParams="ngForm">
      <div class="po-row">
        <po-input
          class="po-md-6"
          name="breadcrumbParamsProperty"
          [(ngModel)]="breadcrumbParams.property"
          p-clean
          p-label="Breadcrumb params property"
          p-required
        >
        </po-input>

        <po-input
          class="po-md-6"
          name="breadcrumbParamsValue"
          [(ngModel)]="breadcrumbParams.value"
          p-clean
          p-label="Breadcrumb params value"
          p-required
        >
        </po-input>
      </div>

      <div class="po-row">
        <po-button
          class="po-md-6 po-lg-3"
          p-label="Add breadcrumb params"
          [p-disabled]="formBreadcrumbParams.invalid"
          (p-click)="addBreadcrumbParam()"
        >
        </po-button>
      </div>
    </form>

    <div class="po-row">
      <po-input
        class="po-md-12 po-lg-6"
        name="literals"
        [(ngModel)]="literals"
        p-help='Ex.: {"back": "Retornar", "edit": "Edi\xE7\xE3o", "remove": "Excluir registro"}'
        p-label="Literals"
        (p-change)="changeLiterals()"
      >
      </po-input>
    </div>

    <div class="po-row">
      <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"> </po-button>
    </div>
  </form>
</po-page-detail>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-page-detail-labs/sample-po-page-detail-labs.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { PoBreadcrumb, PoBreadcrumbItem, PoPageDetailLiterals, PoRadioGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-page-detail-labs',
  templateUrl: './sample-po-page-detail-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageDetailLabsComponent implements OnInit {
  action: string;
  breadcrumb: PoBreadcrumb;
  breadcrumbItem: PoBreadcrumbItem;
  breadcrumbParams: any;
  componentsSize: string;
  customLiterals: PoPageDetailLiterals;
  literals: string;
  params: any;
  title: string;
  subtitle: string;

  public readonly componentsSizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  ngOnInit() {
    this.restore();
  }

  addBreadcrumbItem() {
    this.breadcrumb.items = this.breadcrumb.items.concat([this.breadcrumbItem]);
    this.breadcrumbItem = { label: undefined, link: undefined };
  }

  addBreadcrumbParam() {
    const newParam = { [this.breadcrumbParams.property]: this.breadcrumbParams.value };

    if (this.breadcrumb.params) {
      this.breadcrumb.params = Object.assign(this.breadcrumb.params, newParam);
    } else {
      this.breadcrumb.params = newParam;
    }

    this.breadcrumbParams = {};
  }

  back() {
    this.action = 'back';
  }

  changeLiterals() {
    try {
      this.customLiterals = JSON.parse(this.literals);
    } catch {
      this.customLiterals = undefined;
    }
  }

  edit() {
    this.action = 'edit';
  }

  remove() {
    this.action = 'remove';
  }

  restore() {
    this.action = '';
    this.breadcrumb = { items: [] };
    this.breadcrumbItem = { label: undefined, link: undefined };
    this.breadcrumbParams = {};
    this.componentsSize = 'medium';
    this.customLiterals = undefined;
    this.literals = '';
    this.title = 'PO Page Detail';
    this.subtitle = '';
  }
}
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-page-detail-labs"),og(),Wl(23,"hr")),l&2&&(Lp(5),$x("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,be,n.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,ne],encapsulation:2})}return a})();var oe=(()=>{class a{router=f(En);birthDate="26/12/1978";email="john.doe@po-ui.com.br";fathersName="Mike Doe";genre="male";graduation="College Degree";mothersName="Jane Doe";name="John Doe";nationality="USA";nickname="John";placeOfBirth="Colorado";userId=122635;breadcrumb={items:[{label:"Home",link:"/"},{label:"User Detail"}]};edit(){this.router.navigate(["/documentation/po-page-edit"],{queryParams:{view:"web"}});}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-detail-user"]],standalone:false,decls:19,vars:12,consts:[["p-title","User Detail","p-subtitle","Status: <b>Active</b> | Role: <i>Administrator</i>",3,"p-edit","p-breadcrumb"],[1,"po-row"],["p-label","User ID",1,"po-md-4",3,"p-value"],["p-label","E-mail",1,"po-md-4",3,"p-value"],["p-label","Name",1,"po-md-4",3,"p-value"],["p-label","Nickname",1,"po-md-4",3,"p-value"],["p-label","Birth Date",1,"po-md-4",3,"p-value"],["p-label","Genre",1,"po-md-4",3,"p-value"],["p-label","Nationality",1,"po-md-4",3,"p-value"],["p-label","Place Of Birth",1,"po-md-4",3,"p-value"],["p-label","Graduation",1,"po-md-4",3,"p-value"],["p-label","Fathers Name",1,"po-md-4",3,"p-value"],["p-label","Mothers Name",1,"po-md-4",3,"p-value"]],template:function(l,n){l&1&&(Sl(0,"po-page-detail",0),ft("p-edit",function(){return n.edit()}),Sl(1,"div",1),Wl(2,"po-info",2)(3,"po-info",3)(4,"po-info",4),og(),Wl(5,"po-divider"),Sl(6,"div",1),Wl(7,"po-info",5)(8,"po-info",6)(9,"po-info",7),og(),Wl(10,"po-divider"),Sl(11,"div",1),Wl(12,"po-info",8)(13,"po-info",9)(14,"po-info",10),og(),Wl(15,"po-divider"),Sl(16,"div",1),Wl(17,"po-info",11)(18,"po-info",12),og()()),l&2&&(nw("p-breadcrumb",n.breadcrumb),Lp(2),nw("p-value",n.userId),Lp(),nw("p-value",n.email),Lp(),nw("p-value",n.name),Lp(3),nw("p-value",n.nickname),Lp(),nw("p-value",n.birthDate),Lp(),nw("p-value",n.genre),Lp(3),nw("p-value",n.nationality),Lp(),nw("p-value",n.placeOfBirth),Lp(),nw("p-value",n.graduation),Lp(3),nw("p-value",n.fathersName),Lp(),nw("p-value",n.mothersName));},dependencies:[mv,Ghe,aNe],encapsulation:2,changeDetection:1})}return a})();var Se=a=>({"docs-sample-code-tabs":a}),le=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-detail-user-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Page Detail - User"),og(),Sl(4,"a",2),ft("click",function(){return n.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-page-detail-user/sample-po-page-detail-user.component.html"),og(),Sl(13,"pre",7),eN(14,`<po-page-detail
  p-title="User Detail"
  p-subtitle="Status: <b>Active</b> | Role: <i>Administrator</i>"
  [p-breadcrumb]="breadcrumb"
  (p-edit)="edit()"
>
  <div class="po-row">
    <po-info class="po-md-4" p-label="User ID" [p-value]="userId"> </po-info>

    <po-info class="po-md-4" p-label="E-mail" [p-value]="email"> </po-info>

    <po-info class="po-md-4" p-label="Name" [p-value]="name"> </po-info>
  </div>

  <po-divider />

  <div class="po-row">
    <po-info class="po-md-4" p-label="Nickname" [p-value]="nickname"> </po-info>

    <po-info class="po-md-4" p-label="Birth Date" [p-value]="birthDate"> </po-info>

    <po-info class="po-md-4" p-label="Genre" [p-value]="genre"> </po-info>
  </div>

  <po-divider />

  <div class="po-row">
    <po-info class="po-md-4" p-label="Nationality" [p-value]="nationality"> </po-info>

    <po-info class="po-md-4" p-label="Place Of Birth" [p-value]="placeOfBirth"> </po-info>

    <po-info class="po-md-4" p-label="Graduation" [p-value]="graduation"> </po-info>
  </div>

  <po-divider />

  <div class="po-row">
    <po-info class="po-md-4" p-label="Fathers Name" [p-value]="fathersName"> </po-info>

    <po-info class="po-md-4" p-label="Mothers Name" [p-value]="mothersName"> </po-info>
  </div>
</po-page-detail>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-page-detail-user/sample-po-page-detail-user.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

import { PoBreadcrumb } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-page-detail-user',
  templateUrl: './sample-po-page-detail-user.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageDetailUserComponent {
  private router = inject(Router);

  birthDate: string = '26/12/1978';
  email: string = 'john.doe@po-ui.com.br';
  fathersName: string = 'Mike Doe';
  genre: string = 'male';
  graduation: string = 'College Degree';
  mothersName: string = 'Jane Doe';
  name: string = 'John Doe';
  nationality: string = 'USA';
  nickname: string = 'John';
  placeOfBirth: string = 'Colorado';
  userId: number = 122635;

  public readonly breadcrumb: PoBreadcrumb = {
    items: [{ label: 'Home', link: '/' }, { label: 'User Detail' }]
  };

  edit() {
    this.router.navigate(['/documentation/po-page-edit'], { queryParams: { view: 'web' } });
  }
}
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-page-detail-user"),og(),Wl(23,"hr")),l&2&&(Lp(5),$x("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,Se,n.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,oe],encapsulation:2})}return a})();var re=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-detail-doc"]],standalone:false,decls:580,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","PoBreadcrumb"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","PoPageDetailLiterals"],["href","/documentation/po-i18n"],[1,"language-typescript"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["href","/guides/getting-started"],["pan","",1,"docs-api-property-type","Array<PoBreadcrumbItem>"],["pan","",1,"docs-api-property-type","object"]],template:function(l,n){l&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),eN(3,"import { PoPageModule } from '@po-ui/ng-components';"),og()(),Sl(4,"div",2)(5,"p"),eN(6,"M\xF3dulo respons\xE1vel pelos componentes de estrutura de p\xE1gina: "),Sl(7,"code"),eN(8,"po-page-default"),og(),eN(9,", "),Sl(10,"code"),eN(11,"po-page-detail"),og(),eN(12,`,
`),Sl(13,"code"),eN(14,"po-page-edit"),og(),eN(15,", "),Sl(16,"code"),eN(17,"po-page-list"),og(),eN(18," e "),Sl(19,"code"),eN(20,"po-page-slide"),og(),eN(21,"."),og()(),Sl(22,"h3",3),eN(23,"Componente"),og(),Sl(24,"h4",4)(25,"code",5),eN(26,"PoPageDetailComponent"),og()(),Sl(27,"div",2)(28,"p"),eN(29,"O componente "),Sl(30,"strong"),eN(31,"po-page-detail"),og(),eN(32,` \xE9 utilizado como container principal para a tela de
detalhamento de um registro, tendo a possibilidade de usar as a\xE7\xF5es de "Voltar", "Editar" e "Remover".`),og(),Sl(33,"h4"),eN(34,"Tokens customiz\xE1veis"),og(),Sl(35,"blockquote")(36,"p"),eN(37,"Para maiores informa\xE7\xF5es, acesse o guia "),Sl(38,"a",6),eN(39,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),eN(40,"."),og()(),Sl(41,"table")(42,"thead")(43,"tr")(44,"th"),eN(45,"Propriedade"),og(),Sl(46,"th"),eN(47,"Descri\xE7\xE3o"),og(),Sl(48,"th"),eN(49,"Valor Padr\xE3o"),og()()(),Sl(50,"tbody")(51,"tr")(52,"td")(53,"strong"),eN(54,"Header"),og()(),Wl(55,"td")(56,"td"),og(),Sl(57,"tr")(58,"td")(59,"code"),eN(60,"--padding"),og()(),Sl(61,"td"),eN(62,"Espa\xE7amento do header"),og(),Sl(63,"td")(64,"code"),eN(65,"var(--spacing-xs) var(--spacing-md)"),og()()(),Sl(66,"tr")(67,"td")(68,"code"),eN(69,"--gap"),og()(),Sl(70,"td"),eN(71,"Espa\xE7amento entre os breadcrumbs e o t\xEDtulo"),og(),Sl(72,"td")(73,"code"),eN(74,"var(--spacing-md)"),og()()(),Sl(75,"tr")(76,"td")(77,"code"),eN(78,"--gap-actions"),og()(),Sl(79,"td"),eN(80,"Espa\xE7amento entre as a\xE7\xF5es"),og(),Sl(81,"td")(82,"code"),eN(83,"var(--spacing-xs)"),og()()(),Sl(84,"tr")(85,"td")(86,"code"),eN(87,"--font-family"),og()(),Sl(88,"td"),eN(89,"Fam\xEDlia tipogr\xE1fica do t\xEDtulo"),og(),Sl(90,"td")(91,"code"),eN(92,"var(--font-family-theme)"),og()()(),Sl(93,"tr")(94,"td")(95,"strong"),eN(96,"Content"),og()(),Wl(97,"td")(98,"td"),og(),Sl(99,"tr")(100,"td")(101,"code"),eN(102,"--padding-content"),og()(),Sl(103,"td"),eN(104,"Espa\xE7amento do conte\xFAdo"),og(),Sl(105,"td")(106,"code"),eN(107,"var(--spacing-xs) var(--spacing-sm)"),og()()()()()(),Sl(108,"div",7)(109,"h4",8),eN(110,"Seletor"),og(),Sl(111,"pre",9),eN(112,`<po-page-detail
    (p-back)="EventEmitter"
    p-breadcrumb="PoBreadcrumb"
    p-components-size="string"
    (p-edit)="EventEmitter"
    p-literals="PoPageDetailLiterals"
    (p-remove)="EventEmitter"
    p-subtitle="string"
    p-title="string" >
</po-page-detail>
`),og()(),Sl(113,"h4",10),eN(114,"Propriedades"),og(),Sl(115,"table",11)(116,"tr",12)(117,"th",13),eN(118,"Nome"),og(),Sl(119,"th",13),eN(120,"Tipo"),og(),Sl(121,"th",13),eN(122,"Padr\xE3o"),og(),Sl(123,"th",13),eN(124,"Descri\xE7\xE3o"),og()(),Sl(125,"tr",14)(126,"td",15)(127,"div",16)(128,"span",17),eN(129," (p-back)"),Wl(130,"br"),og()()(),Sl(131,"td",18)(132,"code",19),eN(133,"EventEmitter"),og()(),Sl(134,"td",20),eN(135,"-"),og(),Sl(136,"td",21)(137,"p"),eN(138,'Evento que ser\xE1 disparado ao clicar no bot\xE3o de "Voltar".'),og(),Sl(139,"pre")(140,"code"),eN(141,`<po-page-detail (p-back)="myBackFunction()">
</po-page-detail>
`),og()(),Sl(142,"blockquote")(143,"p"),eN(144,'Caso n\xE3o utilizar esta propriedade, o bot\xE3o de "Voltar" n\xE3o ser\xE1 exibido.'),og()()()(),Sl(145,"tr",14)(146,"td",15)(147,"div",22)(148,"span",23),eN(149," p-breadcrumb"),Wl(150,"br"),og()()(),Sl(151,"td",18)(152,"code",24),eN(153,"PoBreadcrumb"),og()(),Sl(154,"td",20),eN(155,"-"),og(),Sl(156,"td",21)(157,"p"),eN(158,"Objeto com propriedades do breadcrumb."),og()()(),Sl(159,"tr",14)(160,"td",15)(161,"div",22)(162,"span",23),eN(163," p-components-size"),Wl(164,"br"),og()()(),Sl(165,"td",18)(166,"code",25),eN(167,"string"),og()(),Sl(168,"td",20)(169,"p")(170,"code"),eN(171,"medium"),og()()(),Sl(172,"td",21)(173,"em")(174,"strong"),eN(175,"(opcional)"),og()(),Sl(176,"p"),eN(177,"Define o tamanho dos componentes de formul\xE1rio no template:"),og(),Sl(178,"ul")(179,"li")(180,"code"),eN(181,"small"),og(),eN(182,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),og(),Sl(183,"li")(184,"code"),eN(185,"medium"),og(),eN(186,": aplica a medida medium de cada componente."),og()(),Sl(187,"blockquote")(188,"p"),eN(189,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Sl(190,"code"),eN(191,"medium"),og(),eN(192,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Sl(193,"a",26),eN(194,"po-theme"),og(),eN(195,"."),og()()()(),Sl(196,"tr",14)(197,"td",15)(198,"div",16)(199,"span",17),eN(200," (p-edit)"),Wl(201,"br"),og()()(),Sl(202,"td",18)(203,"code",19),eN(204,"EventEmitter"),og()(),Sl(205,"td",20),eN(206,"-"),og(),Sl(207,"td",21)(208,"p"),eN(209,'Evento que ser\xE1 disparado ao clicar no bot\xE3o de "Editar".'),og(),Sl(210,"pre")(211,"code"),eN(212,`<po-page-detail (p-edit)="myEditFunction()">
</po-page-detail>
`),og()(),Sl(213,"blockquote")(214,"p"),eN(215,'Caso n\xE3o utilizar esta propriedade, o bot\xE3o de "Editar" n\xE3o ser\xE1 exibido.'),og()()()(),Sl(216,"tr",14)(217,"td",15)(218,"div",22)(219,"span",23),eN(220," p-literals"),Wl(221,"br"),og()()(),Sl(222,"td",18)(223,"code",27),eN(224,"PoPageDetailLiterals"),og()(),Sl(225,"td",20),eN(226,"-"),og(),Sl(227,"td",21)(228,"em")(229,"strong"),eN(230,"(opcional)"),og()(),Sl(231,"p"),eN(232,"Objeto com as literais usadas no "),Sl(233,"code"),eN(234,"po-page-detail"),og(),eN(235,"."),og(),Sl(236,"p"),eN(237,"Existem duas maneiras de customizar o componente, passando um objeto com todas as literais dispon\xEDveis:"),og(),Sl(238,"pre")(239,"code"),eN(240,`const customLiterals: PoPageDetailLiterals = {
  edit: 'Edi\xE7\xE3o',
  remove: 'Exclus\xE3o',
  back: 'Menu'
};
`),og()(),Sl(241,"p"),eN(242,"Ou passando apenas as literais que deseja customizar:"),og(),Sl(243,"pre")(244,"code"),eN(245,`const customLiterals: PoPageDetailLiterals = {
  remove: 'Excluir registro permanentemente'
};
`),og()(),Sl(246,"p"),eN(247,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente."),og(),Sl(248,"pre")(249,"code"),eN(250,`<po-page-detail
  [p-literals]="customLiterals">
</po-page-detail>
`),og()(),Sl(251,"blockquote")(252,"p"),eN(253,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),Sl(254,"a",28)(255,"code"),eN(256,"PoI18nService"),og()(),eN(257," ou do browser."),og()()()(),Sl(258,"tr",14)(259,"td",15)(260,"div",16)(261,"span",17),eN(262," (p-remove)"),Wl(263,"br"),og()()(),Sl(264,"td",18)(265,"code",19),eN(266,"EventEmitter"),og()(),Sl(267,"td",20),eN(268,"-"),og(),Sl(269,"td",21)(270,"p"),eN(271,'Evento que ser\xE1 disparado ao clicar no bot\xE3o de "Remover".'),og(),Sl(272,"pre")(273,"code"),eN(274,`<po-page-detail (p-remove)="myRemoveFunction()">
</po-page-detail>
`),og()(),Sl(275,"blockquote")(276,"p"),eN(277,'Caso n\xE3o utilizar esta propriedade, o bot\xE3o de "Remover" n\xE3o ser\xE1 exibido.'),og()()()(),Sl(278,"tr",14)(279,"td",15)(280,"div",22)(281,"span",23),eN(282," p-subtitle"),Wl(283,"br"),og()()(),Sl(284,"td",18)(285,"code",25),eN(286,"string"),og()(),Sl(287,"td",20),eN(288,"-"),og(),Sl(289,"td",21)(290,"em")(291,"strong"),eN(292,"(opcional)"),og()(),Sl(293,"p"),eN(294,"Subtitulo do Header da p\xE1gina."),og(),Sl(295,"p"),eN(296,"Suporta formata\xE7\xE3o b\xE1sica com as tags "),Sl(297,"code"),eN(298,"<b>"),og(),eN(299," (negrito), "),Sl(300,"code"),eN(301,"<strong>"),og(),eN(302," (negrito), "),Sl(303,"code"),eN(304,"<i>"),og(),eN(305," (it\xE1lico), "),Sl(306,"code"),eN(307,"<em>"),og(),eN(308,` (it\xE1lico) e
`),Sl(309,"code"),eN(310,"<u>"),og(),eN(311," (sublinhado)."),og(),Sl(312,"p"),eN(313,"Exemplo:"),og(),Sl(314,"pre")(315,"code",29),eN(316,`subtitle = 'Status: <b>Active</b> | Role: <i>Administrator</i>';
`),og()(),Sl(317,"blockquote")(318,"p"),eN(319,"Requer que "),Sl(320,"code"),eN(321,"p-title"),og(),eN(322," esteja definido."),og()()()(),Sl(323,"tr",14)(324,"td",15)(325,"div",22)(326,"span",23),eN(327," p-title"),Wl(328,"br"),og()()(),Sl(329,"td",18)(330,"code",25),eN(331,"string"),og()(),Sl(332,"td",20),eN(333,"-"),og(),Sl(334,"td",21)(335,"p"),eN(336,"T\xEDtulo da p\xE1gina."),og()()()(),Sl(337,"h3"),eN(338,"Interfaces"),og(),Sl(339,"h4",30)(340,"code",5),eN(341,"PoBreadcrumbItem"),og()(),Sl(342,"div",2)(343,"p"),eN(344,"Interface que define cada item do componente "),Sl(345,"strong"),eN(346,"po-breadcrumb"),og(),eN(347,"."),og()(),Sl(348,"h4",10),eN(349,"Propriedades"),og(),Sl(350,"table",11)(351,"tr",12)(352,"th",13),eN(353,"Nome"),og(),Sl(354,"th",13),eN(355,"Tipo"),og(),Sl(356,"th",13),eN(357,"Descri\xE7\xE3o"),og()(),Sl(358,"tr",14)(359,"td",15)(360,"div",22)(361,"span",23),eN(362," action"),Wl(363,"br"),og()()(),Sl(364,"td",18)(365,"code",31),eN(366,"Function"),og()(),Sl(367,"td",21)(368,"em")(369,"strong"),eN(370,"(opcional)"),og()(),Sl(371,"p"),eN(372,"A\xE7\xE3o executada ao clicar no item."),og(),Sl(373,"blockquote")(374,"p"),eN(375,"A fun\xE7\xE3o atribu\xEDda a esta propriedade receber\xE1 o "),Sl(376,"em"),eN(377,"label"),og(),eN(378," do item como par\xE2metro para execu\xE7\xE3o."),og()()()(),Sl(379,"tr",14)(380,"td",15)(381,"div",22)(382,"span",23),eN(383," label"),Wl(384,"br"),og()()(),Sl(385,"td",18)(386,"code",25),eN(387,"string"),og()(),Sl(388,"td",21)(389,"p"),eN(390,"R\xF3tulo do item."),og()()(),Sl(391,"tr",14)(392,"td",15)(393,"div",22)(394,"span",23),eN(395," link"),Wl(396,"br"),og()()(),Sl(397,"td",18)(398,"code",25),eN(399,"string"),og()(),Sl(400,"td",21)(401,"em")(402,"strong"),eN(403,"(opcional)"),og()(),Sl(404,"p"),eN(405,"Url do item."),og(),Sl(406,"blockquote")(407,"p"),eN(408,"Caso o item tamb\xE9m contenha uma "),Sl(409,"em"),eN(410,"action"),og(),eN(411," definida, a prefer\xEAncia de execu\xE7\xE3o ser\xE1 do "),Sl(412,"em"),eN(413,"link"),og(),eN(414,"."),og()(),Sl(415,"blockquote")(416,"p"),eN(417,`Para o correto funcionamento, \xE9 necess\xE1rio que haja uma rota referenciando seu valor.
`),Sl(418,"strong")(419,"a",32),eN(420,"Veja um exemplo de como criar rotas aqui"),og()(),eN(421,"."),og()(),Sl(422,"blockquote")(423,"p"),eN(424,"Esta propriedade \xE9 necess\xE1ria para que a propriedade "),Sl(425,"code"),eN(426,"p-favorite-service"),og(),eN(427," consiga favoritar ou desfavoritar."),og()()()()(),Sl(428,"h4",30)(429,"code",5),eN(430,"PoBreadcrumb"),og()(),Sl(431,"div",2)(432,"p"),eN(433,"Interface que define o "),Sl(434,"code"),eN(435,"po-breadcrumb"),og(),eN(436,"."),og()(),Sl(437,"h4",10),eN(438,"Propriedades"),og(),Sl(439,"table",11)(440,"tr",12)(441,"th",13),eN(442,"Nome"),og(),Sl(443,"th",13),eN(444,"Tipo"),og(),Sl(445,"th",13),eN(446,"Descri\xE7\xE3o"),og()(),Sl(447,"tr",14)(448,"td",15)(449,"div",22)(450,"span",23),eN(451," favorite"),Wl(452,"br"),og()()(),Sl(453,"td",18)(454,"code",25),eN(455,"string"),og()(),Sl(456,"td",21)(457,"em")(458,"strong"),eN(459,"(opcional)"),og()(),Sl(460,"p"),eN(461,"Permite definir uma URL para favoritar ou desfavoritar."),og(),Sl(462,"blockquote")(463,"p"),eN(464,"Para maiores informa\xE7\xF5es verificar a propriedade "),Sl(465,"code"),eN(466,"p-favorite-service"),og(),eN(467," do componente "),Sl(468,"code"),eN(469,"po-breadcrumb"),og(),eN(470,"."),og()()()(),Sl(471,"tr",14)(472,"td",15)(473,"div",22)(474,"span",23),eN(475," items"),Wl(476,"br"),og()()(),Sl(477,"td",18)(478,"code",33),eN(479,"Array<PoBreadcrumbItem>"),og()(),Sl(480,"td",21)(481,"p"),eN(482,"Lista de itens do "),Sl(483,"em"),eN(484,"breadcrumb"),og(),eN(485,"."),og(),Sl(486,"p")(487,"strong"),eN(488,"Exemplo:"),og()(),Sl(489,"pre")(490,"code"),eN(491,`{ label: 'Po Portal', link: 'portal' }
`),og()()()(),Sl(492,"tr",14)(493,"td",15)(494,"div",22)(495,"span",23),eN(496," params"),Wl(497,"br"),og()()(),Sl(498,"td",18)(499,"code",34),eN(500,"object"),og()(),Sl(501,"td",21)(502,"em")(503,"strong"),eN(504,"(opcional)"),og()(),Sl(505,"p"),eN(506,"Objeto que possibilita o envio de par\xE2metros adicionais \xE0 requisi\xE7\xE3o."),og()()()(),Sl(507,"h4",30)(508,"code",5),eN(509,"PoPageDetailLiterals"),og()(),Sl(510,"div",2)(511,"p"),eN(512,"Interface para defini\xE7\xE3o das literais usadas no "),Sl(513,"code"),eN(514,"po-page-detail"),og(),eN(515,"."),og()(),Sl(516,"h4",10),eN(517,"Propriedades"),og(),Sl(518,"table",11)(519,"tr",12)(520,"th",13),eN(521,"Nome"),og(),Sl(522,"th",13),eN(523,"Tipo"),og(),Sl(524,"th",13),eN(525,"Descri\xE7\xE3o"),og()(),Sl(526,"tr",14)(527,"td",15)(528,"div",22)(529,"span",23),eN(530," back"),Wl(531,"br"),og()()(),Sl(532,"td",18)(533,"code",25),eN(534,"string"),og()(),Sl(535,"td",21)(536,"em")(537,"strong"),eN(538,"(opcional)"),og()(),Sl(539,"p"),eN(540,"Label da a\xE7\xE3o "),Sl(541,"code"),eN(542,"back"),og(),eN(543,"."),og()()(),Sl(544,"tr",14)(545,"td",15)(546,"div",22)(547,"span",23),eN(548," edit"),Wl(549,"br"),og()()(),Sl(550,"td",18)(551,"code",25),eN(552,"string"),og()(),Sl(553,"td",21)(554,"em")(555,"strong"),eN(556,"(opcional)"),og()(),Sl(557,"p"),eN(558,"Label da a\xE7\xE3o "),Sl(559,"code"),eN(560,"edit"),og(),eN(561,"."),og()()(),Sl(562,"tr",14)(563,"td",15)(564,"div",22)(565,"span",23),eN(566," remove"),Wl(567,"br"),og()()(),Sl(568,"td",18)(569,"code",25),eN(570,"string"),og()(),Sl(571,"td",21)(572,"em")(573,"strong"),eN(574,"(opcional)"),og()(),Sl(575,"p"),eN(576,"Label da a\xE7\xE3o "),Sl(577,"code"),eN(578,"remove"),og(),eN(579,"."),og()()()()());},dependencies:[Ka],encapsulation:2})}return a})();var me=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(d,l){this.route=d,this.router=l;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let l=d.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:"merge"}),this.activeTab=d;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(l){return new(l||a)(w(Xn),w(En))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Page Detail",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,n){l&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return n.changeTab("doc")}),Wl(3,"sample-po-page-detail-doc"),og(),Sl(4,"po-tab",3),ft("p-click",function(){return n.changeTab("web")}),Wl(5,"sample-po-page-detail-basic-view")(6,"sample-po-page-detail-labs-view")(7,"sample-po-page-detail-user-view"),og()()()),l&2&&(nw("p-actions",n.actions),Lp(2),nw("p-active",n.activeTab==="doc"),Lp(2),nw("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"));},dependencies:[rNe,Bme,qme,ie,ae,le,re],encapsulation:2})}return a})();var fe=[{path:"",component:me}],pe=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue({imports:[hL.forChild(fe),hL]})}return a})();var Qe=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue({imports:[sr,pe]})}return a})();export{Qe as DocPoPageDetailModule};