import {f as fe$1,u as ue,s as sr,a as uL,C,c3 as Xn,E as En,U as Un,b as f,cJ as pNe,J as zl,an as DO,aH as Ka,b8 as qme,b9 as Yme,H as Il,q as Qx,R as og,a1 as ft,A as Lp,ar as Ux,au as dg,T as nw,bs as uN,aX as G9,aF as $9,aY as z9,aG as mk,aZ as hk,b0 as Qt,b1 as mv,b4 as O3,c8 as Dde,c9 as Yhe,aB as Dx,aM as ww,aN as QA,bd as Ax,aO as Ew,aP as e0,a3 as cNe,aD as Xy,aT as eN,aE as Qy}from'./main-QSTLMRDK.js';var ee=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-detail-basic"]],standalone:false,decls:1,vars:0,consts:[["p-title","PO Page Detail"]],template:function(l,n){l&1&&zl(0,"po-page-detail",0);},dependencies:[pNe],encapsulation:2,changeDetection:1})}return a})();var se=a=>({"docs-sample-code-tabs":a}),ie=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-detail-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Page Detail Basic"),og(),Il(4,"a",2),ft("click",function(){return n.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-page-detail-basic/sample-po-page-detail-basic.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-page-detail p-title="PO Page Detail"> </po-page-detail>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-page-detail-basic/sample-po-page-detail-basic.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-page-detail-basic',
  templateUrl: './sample-po-page-detail-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageDetailBasicComponent {}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-page-detail-basic"),og(),zl(23,"hr")),l&2&&(Lp(5),Ux("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,se,n.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,ee],encapsulation:2})}return a})();var ne=(()=>{class a{action;breadcrumb;breadcrumbItem;breadcrumbParams;componentsSize;customLiterals;literals;params;title;subtitle;componentsSizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore();}addBreadcrumbItem(){this.breadcrumb.items=this.breadcrumb.items.concat([this.breadcrumbItem]),this.breadcrumbItem={label:void 0,link:void 0};}addBreadcrumbParam(){let d={[this.breadcrumbParams.property]:this.breadcrumbParams.value};this.breadcrumb.params?this.breadcrumb.params=Object.assign(this.breadcrumb.params,d):this.breadcrumb.params=d,this.breadcrumbParams={};}back(){this.action="back";}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals);}catch(d){this.customLiterals=void 0;}}edit(){this.action="edit";}remove(){this.action="remove";}restore(){this.action="",this.breadcrumb={items:[]},this.breadcrumbItem={label:void 0,link:void 0},this.breadcrumbParams={},this.componentsSize="medium",this.customLiterals=void 0,this.literals="",this.title="PO Page Detail",this.subtitle="";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-detail-labs"]],standalone:false,decls:33,vars:18,consts:[["f","ngForm"],["formBreadcrumbFavorite","ngForm"],["formBreadcrumbItems","ngForm"],["formBreadcrumbParams","ngForm"],[3,"p-back","p-edit","p-remove","p-breadcrumb","p-components-size","p-literals","p-title","p-subtitle"],[1,"po-row"],["p-label","Action",1,"po-md-12",3,"p-value"],["name","title","p-label","Title",1,"po-md-6",3,"ngModelChange","ngModel"],["name","subtitle","p-label","Subtitle",1,"po-md-6",3,"ngModelChange","ngModel"],["name","size","p-columns","4","p-label","Components size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","breadcrumbFavorite","p-clean","","p-help","https://po-sample-api.onrender.com/v1/favorite","p-label","Breadcrumb favorite",1,"po-md-6",3,"ngModelChange","ngModel"],["name","breadcrumbItemLabel","p-clean","","p-label","Breadcrumb item label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","breadcrumbItemLink","p-clean","","p-label","Breadcrumb item link","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add breadcrumb item",1,"po-md-6","po-lg-3",3,"p-click","p-disabled"],["name","breadcrumbParamsProperty","p-clean","","p-label","Breadcrumb params property","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","breadcrumbParamsValue","p-clean","","p-label","Breadcrumb params value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add breadcrumb params",1,"po-md-6","po-lg-3",3,"p-click","p-disabled"],["name","literals","p-help",'Ex.: {"back": "Retornar", "edit": "Edi\xE7\xE3o", "remove": "Excluir registro"}',"p-label","Literals",1,"po-md-12","po-lg-6",3,"ngModelChange","p-change","ngModel"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(l,n){if(l&1){let s=Dx();Il(0,"po-page-detail",4),ft("p-back",function(){return n.back()})("p-edit",function(){return n.edit()})("p-remove",function(){return n.remove()}),Il(1,"div",5),zl(2,"po-info",6),og(),zl(3,"po-divider"),Il(4,"form",null,0)(6,"po-input",7),ww("ngModelChange",function(m){return Xy(s),eN(n.title,m)||(n.title=m),Qy(m)}),og(),QA(),Il(7,"po-input",8),ww("ngModelChange",function(m){return Xy(s),eN(n.subtitle,m)||(n.subtitle=m),Qy(m)}),og(),QA(),Il(8,"po-radio-group",9),ww("ngModelChange",function(m){return Xy(s),eN(n.componentsSize,m)||(n.componentsSize=m),Qy(m)}),og(),QA(),zl(9,"po-divider"),Il(10,"form",null,1)(12,"div",5)(13,"po-input",10),ww("ngModelChange",function(m){return Xy(s),eN(n.breadcrumb.favorite,m)||(n.breadcrumb.favorite=m),Qy(m)}),og(),QA(),og()(),Il(14,"form",null,2)(16,"div",5)(17,"po-input",11),ww("ngModelChange",function(m){return Xy(s),eN(n.breadcrumbItem.label,m)||(n.breadcrumbItem.label=m),Qy(m)}),og(),QA(),Il(18,"po-input",12),ww("ngModelChange",function(m){return Xy(s),eN(n.breadcrumbItem.link,m)||(n.breadcrumbItem.link=m),Qy(m)}),og(),QA(),og(),Il(19,"div",5)(20,"po-button",13),ft("p-click",function(){return n.addBreadcrumbItem()}),og()()(),zl(21,"po-divider"),Il(22,"form",null,3)(24,"div",5)(25,"po-input",14),ww("ngModelChange",function(m){return Xy(s),eN(n.breadcrumbParams.property,m)||(n.breadcrumbParams.property=m),Qy(m)}),og(),QA(),Il(26,"po-input",15),ww("ngModelChange",function(m){return Xy(s),eN(n.breadcrumbParams.value,m)||(n.breadcrumbParams.value=m),Qy(m)}),og(),QA(),og(),Il(27,"div",5)(28,"po-button",16),ft("p-click",function(){return n.addBreadcrumbParam()}),og()()(),Il(29,"div",5)(30,"po-input",17),ww("ngModelChange",function(m){return Xy(s),eN(n.literals,m)||(n.literals=m),Qy(m)}),ft("p-change",function(){return n.changeLiterals()}),og(),QA(),og(),Il(31,"div",5)(32,"po-button",18),ft("p-click",function(){return n.restore()}),og()()()();}if(l&2){let s=Ax(15),c=Ax(23);nw("p-breadcrumb",n.breadcrumb)("p-components-size",n.componentsSize)("p-literals",n.customLiterals)("p-title",n.title)("p-subtitle",n.subtitle),Lp(2),nw("p-value",n.action),Lp(4),Ew("ngModel",n.title),e0(),Lp(),Ew("ngModel",n.subtitle),e0(),Lp(),Ew("ngModel",n.componentsSize),nw("p-options",n.componentsSizeOptions),e0(),Lp(5),Ew("ngModel",n.breadcrumb.favorite),e0(),Lp(4),Ew("ngModel",n.breadcrumbItem.label),e0(),Lp(),Ew("ngModel",n.breadcrumbItem.link),e0(),Lp(2),nw("p-disabled",s.invalid),Lp(5),Ew("ngModel",n.breadcrumbParams.property),e0(),Lp(),Ew("ngModel",n.breadcrumbParams.value),e0(),Lp(2),nw("p-disabled",c.invalid),Lp(2),Ew("ngModel",n.literals),e0();}},dependencies:[G9,$9,z9,mk,hk,Qt,mv,O3,Dde,Yhe,pNe],encapsulation:2,changeDetection:1})}return a})();var be=a=>({"docs-sample-code-tabs":a}),ae=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-detail-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Page Detail Labs"),og(),Il(4,"a",2),ft("click",function(){return n.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-page-detail-labs/sample-po-page-detail-labs.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-page-detail
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
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-page-detail-labs/sample-po-page-detail-labs.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-page-detail-labs"),og(),zl(23,"hr")),l&2&&(Lp(5),Ux("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,be,n.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,ne],encapsulation:2})}return a})();var oe=(()=>{class a{router=f(En);birthDate="26/12/1978";email="john.doe@po-ui.com.br";fathersName="Mike Doe";genre="male";graduation="College Degree";mothersName="Jane Doe";name="John Doe";nationality="USA";nickname="John";placeOfBirth="Colorado";userId=122635;breadcrumb={items:[{label:"Home",link:"/"},{label:"User Detail"}]};edit(){this.router.navigate(["/documentation/po-page-edit"],{queryParams:{view:"web"}});}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-detail-user"]],standalone:false,decls:19,vars:12,consts:[["p-title","User Detail","p-subtitle","Status: <b>Active</b> | Role: <i>Administrator</i>",3,"p-edit","p-breadcrumb"],[1,"po-row"],["p-label","User ID",1,"po-md-4",3,"p-value"],["p-label","E-mail",1,"po-md-4",3,"p-value"],["p-label","Name",1,"po-md-4",3,"p-value"],["p-label","Nickname",1,"po-md-4",3,"p-value"],["p-label","Birth Date",1,"po-md-4",3,"p-value"],["p-label","Genre",1,"po-md-4",3,"p-value"],["p-label","Nationality",1,"po-md-4",3,"p-value"],["p-label","Place Of Birth",1,"po-md-4",3,"p-value"],["p-label","Graduation",1,"po-md-4",3,"p-value"],["p-label","Fathers Name",1,"po-md-4",3,"p-value"],["p-label","Mothers Name",1,"po-md-4",3,"p-value"]],template:function(l,n){l&1&&(Il(0,"po-page-detail",0),ft("p-edit",function(){return n.edit()}),Il(1,"div",1),zl(2,"po-info",2)(3,"po-info",3)(4,"po-info",4),og(),zl(5,"po-divider"),Il(6,"div",1),zl(7,"po-info",5)(8,"po-info",6)(9,"po-info",7),og(),zl(10,"po-divider"),Il(11,"div",1),zl(12,"po-info",8)(13,"po-info",9)(14,"po-info",10),og(),zl(15,"po-divider"),Il(16,"div",1),zl(17,"po-info",11)(18,"po-info",12),og()()),l&2&&(nw("p-breadcrumb",n.breadcrumb),Lp(2),nw("p-value",n.userId),Lp(),nw("p-value",n.email),Lp(),nw("p-value",n.name),Lp(3),nw("p-value",n.nickname),Lp(),nw("p-value",n.birthDate),Lp(),nw("p-value",n.genre),Lp(3),nw("p-value",n.nationality),Lp(),nw("p-value",n.placeOfBirth),Lp(),nw("p-value",n.graduation),Lp(3),nw("p-value",n.fathersName),Lp(),nw("p-value",n.mothersName));},dependencies:[mv,Yhe,pNe],encapsulation:2,changeDetection:1})}return a})();var Se=a=>({"docs-sample-code-tabs":a}),le=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-detail-user-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Page Detail - User"),og(),Il(4,"a",2),ft("click",function(){return n.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-page-detail-user/sample-po-page-detail-user.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-page-detail
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
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-page-detail-user/sample-po-page-detail-user.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-page-detail-user"),og(),zl(23,"hr")),l&2&&(Lp(5),Ux("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,Se,n.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,oe],encapsulation:2})}return a})();var re=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-detail-doc"]],standalone:false,decls:580,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","PoBreadcrumb"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","PoPageDetailLiterals"],["href","/documentation/po-i18n"],[1,"language-typescript"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["href","/guides/getting-started"],["pan","",1,"docs-api-property-type","Array<PoBreadcrumbItem>"],["pan","",1,"docs-api-property-type","object"]],template:function(l,n){l&1&&(Il(0,"div",0)(1,"p",1)(2,"code"),Qx(3,"import { PoPageModule } from '@po-ui/ng-components';"),og()(),Il(4,"div",2)(5,"p"),Qx(6,"M\xF3dulo respons\xE1vel pelos componentes de estrutura de p\xE1gina: "),Il(7,"code"),Qx(8,"po-page-default"),og(),Qx(9,", "),Il(10,"code"),Qx(11,"po-page-detail"),og(),Qx(12,`,
`),Il(13,"code"),Qx(14,"po-page-edit"),og(),Qx(15,", "),Il(16,"code"),Qx(17,"po-page-list"),og(),Qx(18," e "),Il(19,"code"),Qx(20,"po-page-slide"),og(),Qx(21,"."),og()(),Il(22,"h3",3),Qx(23,"Componente"),og(),Il(24,"h4",4)(25,"code",5),Qx(26,"PoPageDetailComponent"),og()(),Il(27,"div",2)(28,"p"),Qx(29,"O componente "),Il(30,"strong"),Qx(31,"po-page-detail"),og(),Qx(32,` \xE9 utilizado como container principal para a tela de
detalhamento de um registro, tendo a possibilidade de usar as a\xE7\xF5es de "Voltar", "Editar" e "Remover".`),og(),Il(33,"h4"),Qx(34,"Tokens customiz\xE1veis"),og(),Il(35,"blockquote")(36,"p"),Qx(37,"Para maiores informa\xE7\xF5es, acesse o guia "),Il(38,"a",6),Qx(39,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),Qx(40,"."),og()(),Il(41,"table")(42,"thead")(43,"tr")(44,"th"),Qx(45,"Propriedade"),og(),Il(46,"th"),Qx(47,"Descri\xE7\xE3o"),og(),Il(48,"th"),Qx(49,"Valor Padr\xE3o"),og()()(),Il(50,"tbody")(51,"tr")(52,"td")(53,"strong"),Qx(54,"Header"),og()(),zl(55,"td")(56,"td"),og(),Il(57,"tr")(58,"td")(59,"code"),Qx(60,"--padding"),og()(),Il(61,"td"),Qx(62,"Espa\xE7amento do header"),og(),Il(63,"td")(64,"code"),Qx(65,"var(--spacing-xs) var(--spacing-md)"),og()()(),Il(66,"tr")(67,"td")(68,"code"),Qx(69,"--gap"),og()(),Il(70,"td"),Qx(71,"Espa\xE7amento entre os breadcrumbs e o t\xEDtulo"),og(),Il(72,"td")(73,"code"),Qx(74,"var(--spacing-md)"),og()()(),Il(75,"tr")(76,"td")(77,"code"),Qx(78,"--gap-actions"),og()(),Il(79,"td"),Qx(80,"Espa\xE7amento entre as a\xE7\xF5es"),og(),Il(81,"td")(82,"code"),Qx(83,"var(--spacing-xs)"),og()()(),Il(84,"tr")(85,"td")(86,"code"),Qx(87,"--font-family"),og()(),Il(88,"td"),Qx(89,"Fam\xEDlia tipogr\xE1fica do t\xEDtulo"),og(),Il(90,"td")(91,"code"),Qx(92,"var(--font-family-theme)"),og()()(),Il(93,"tr")(94,"td")(95,"strong"),Qx(96,"Content"),og()(),zl(97,"td")(98,"td"),og(),Il(99,"tr")(100,"td")(101,"code"),Qx(102,"--padding-content"),og()(),Il(103,"td"),Qx(104,"Espa\xE7amento do conte\xFAdo"),og(),Il(105,"td")(106,"code"),Qx(107,"var(--spacing-xs) var(--spacing-sm)"),og()()()()()(),Il(108,"div",7)(109,"h4",8),Qx(110,"Seletor"),og(),Il(111,"pre",9),Qx(112,`<po-page-detail
    (p-back)="EventEmitter"
    p-breadcrumb="PoBreadcrumb"
    p-components-size="string"
    (p-edit)="EventEmitter"
    p-literals="PoPageDetailLiterals"
    (p-remove)="EventEmitter"
    p-subtitle="string"
    p-title="string" >
</po-page-detail>
`),og()(),Il(113,"h4",10),Qx(114,"Propriedades"),og(),Il(115,"table",11)(116,"tr",12)(117,"th",13),Qx(118,"Nome"),og(),Il(119,"th",13),Qx(120,"Tipo"),og(),Il(121,"th",13),Qx(122,"Padr\xE3o"),og(),Il(123,"th",13),Qx(124,"Descri\xE7\xE3o"),og()(),Il(125,"tr",14)(126,"td",15)(127,"div",16)(128,"span",17),Qx(129," (p-back)"),zl(130,"br"),og()()(),Il(131,"td",18)(132,"code",19),Qx(133,"EventEmitter"),og()(),Il(134,"td",20),Qx(135,"-"),og(),Il(136,"td",21)(137,"p"),Qx(138,'Evento que ser\xE1 disparado ao clicar no bot\xE3o de "Voltar".'),og(),Il(139,"pre")(140,"code"),Qx(141,`<po-page-detail (p-back)="myBackFunction()">
</po-page-detail>
`),og()(),Il(142,"blockquote")(143,"p"),Qx(144,'Caso n\xE3o utilizar esta propriedade, o bot\xE3o de "Voltar" n\xE3o ser\xE1 exibido.'),og()()()(),Il(145,"tr",14)(146,"td",15)(147,"div",22)(148,"span",23),Qx(149," p-breadcrumb"),zl(150,"br"),og()()(),Il(151,"td",18)(152,"code",24),Qx(153,"PoBreadcrumb"),og()(),Il(154,"td",20),Qx(155,"-"),og(),Il(156,"td",21)(157,"p"),Qx(158,"Objeto com propriedades do breadcrumb."),og()()(),Il(159,"tr",14)(160,"td",15)(161,"div",22)(162,"span",23),Qx(163," p-components-size"),zl(164,"br"),og()()(),Il(165,"td",18)(166,"code",25),Qx(167,"string"),og()(),Il(168,"td",20)(169,"p")(170,"code"),Qx(171,"medium"),og()()(),Il(172,"td",21)(173,"em")(174,"strong"),Qx(175,"(opcional)"),og()(),Il(176,"p"),Qx(177,"Define o tamanho dos componentes de formul\xE1rio no template:"),og(),Il(178,"ul")(179,"li")(180,"code"),Qx(181,"small"),og(),Qx(182,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),og(),Il(183,"li")(184,"code"),Qx(185,"medium"),og(),Qx(186,": aplica a medida medium de cada componente."),og()(),Il(187,"blockquote")(188,"p"),Qx(189,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Il(190,"code"),Qx(191,"medium"),og(),Qx(192,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Il(193,"a",26),Qx(194,"po-theme"),og(),Qx(195,"."),og()()()(),Il(196,"tr",14)(197,"td",15)(198,"div",16)(199,"span",17),Qx(200," (p-edit)"),zl(201,"br"),og()()(),Il(202,"td",18)(203,"code",19),Qx(204,"EventEmitter"),og()(),Il(205,"td",20),Qx(206,"-"),og(),Il(207,"td",21)(208,"p"),Qx(209,'Evento que ser\xE1 disparado ao clicar no bot\xE3o de "Editar".'),og(),Il(210,"pre")(211,"code"),Qx(212,`<po-page-detail (p-edit)="myEditFunction()">
</po-page-detail>
`),og()(),Il(213,"blockquote")(214,"p"),Qx(215,'Caso n\xE3o utilizar esta propriedade, o bot\xE3o de "Editar" n\xE3o ser\xE1 exibido.'),og()()()(),Il(216,"tr",14)(217,"td",15)(218,"div",22)(219,"span",23),Qx(220," p-literals"),zl(221,"br"),og()()(),Il(222,"td",18)(223,"code",27),Qx(224,"PoPageDetailLiterals"),og()(),Il(225,"td",20),Qx(226,"-"),og(),Il(227,"td",21)(228,"em")(229,"strong"),Qx(230,"(opcional)"),og()(),Il(231,"p"),Qx(232,"Objeto com as literais usadas no "),Il(233,"code"),Qx(234,"po-page-detail"),og(),Qx(235,"."),og(),Il(236,"p"),Qx(237,"Existem duas maneiras de customizar o componente, passando um objeto com todas as literais dispon\xEDveis:"),og(),Il(238,"pre")(239,"code"),Qx(240,`const customLiterals: PoPageDetailLiterals = {
  edit: 'Edi\xE7\xE3o',
  remove: 'Exclus\xE3o',
  back: 'Menu'
};
`),og()(),Il(241,"p"),Qx(242,"Ou passando apenas as literais que deseja customizar:"),og(),Il(243,"pre")(244,"code"),Qx(245,`const customLiterals: PoPageDetailLiterals = {
  remove: 'Excluir registro permanentemente'
};
`),og()(),Il(246,"p"),Qx(247,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente."),og(),Il(248,"pre")(249,"code"),Qx(250,`<po-page-detail
  [p-literals]="customLiterals">
</po-page-detail>
`),og()(),Il(251,"blockquote")(252,"p"),Qx(253,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),Il(254,"a",28)(255,"code"),Qx(256,"PoI18nService"),og()(),Qx(257," ou do browser."),og()()()(),Il(258,"tr",14)(259,"td",15)(260,"div",16)(261,"span",17),Qx(262," (p-remove)"),zl(263,"br"),og()()(),Il(264,"td",18)(265,"code",19),Qx(266,"EventEmitter"),og()(),Il(267,"td",20),Qx(268,"-"),og(),Il(269,"td",21)(270,"p"),Qx(271,'Evento que ser\xE1 disparado ao clicar no bot\xE3o de "Remover".'),og(),Il(272,"pre")(273,"code"),Qx(274,`<po-page-detail (p-remove)="myRemoveFunction()">
</po-page-detail>
`),og()(),Il(275,"blockquote")(276,"p"),Qx(277,'Caso n\xE3o utilizar esta propriedade, o bot\xE3o de "Remover" n\xE3o ser\xE1 exibido.'),og()()()(),Il(278,"tr",14)(279,"td",15)(280,"div",22)(281,"span",23),Qx(282," p-subtitle"),zl(283,"br"),og()()(),Il(284,"td",18)(285,"code",25),Qx(286,"string"),og()(),Il(287,"td",20),Qx(288,"-"),og(),Il(289,"td",21)(290,"em")(291,"strong"),Qx(292,"(opcional)"),og()(),Il(293,"p"),Qx(294,"Subtitulo do Header da p\xE1gina."),og(),Il(295,"p"),Qx(296,"Suporta formata\xE7\xE3o b\xE1sica com as tags "),Il(297,"code"),Qx(298,"<b>"),og(),Qx(299," (negrito), "),Il(300,"code"),Qx(301,"<strong>"),og(),Qx(302," (negrito), "),Il(303,"code"),Qx(304,"<i>"),og(),Qx(305," (it\xE1lico), "),Il(306,"code"),Qx(307,"<em>"),og(),Qx(308,` (it\xE1lico) e
`),Il(309,"code"),Qx(310,"<u>"),og(),Qx(311," (sublinhado)."),og(),Il(312,"p"),Qx(313,"Exemplo:"),og(),Il(314,"pre")(315,"code",29),Qx(316,`subtitle = 'Status: <b>Active</b> | Role: <i>Administrator</i>';
`),og()(),Il(317,"blockquote")(318,"p"),Qx(319,"Requer que "),Il(320,"code"),Qx(321,"p-title"),og(),Qx(322," esteja definido."),og()()()(),Il(323,"tr",14)(324,"td",15)(325,"div",22)(326,"span",23),Qx(327," p-title"),zl(328,"br"),og()()(),Il(329,"td",18)(330,"code",25),Qx(331,"string"),og()(),Il(332,"td",20),Qx(333,"-"),og(),Il(334,"td",21)(335,"p"),Qx(336,"T\xEDtulo da p\xE1gina."),og()()()(),Il(337,"h3"),Qx(338,"Interfaces"),og(),Il(339,"h4",30)(340,"code",5),Qx(341,"PoBreadcrumbItem"),og()(),Il(342,"div",2)(343,"p"),Qx(344,"Interface que define cada item do componente "),Il(345,"strong"),Qx(346,"po-breadcrumb"),og(),Qx(347,"."),og()(),Il(348,"h4",10),Qx(349,"Propriedades"),og(),Il(350,"table",11)(351,"tr",12)(352,"th",13),Qx(353,"Nome"),og(),Il(354,"th",13),Qx(355,"Tipo"),og(),Il(356,"th",13),Qx(357,"Descri\xE7\xE3o"),og()(),Il(358,"tr",14)(359,"td",15)(360,"div",22)(361,"span",23),Qx(362," action"),zl(363,"br"),og()()(),Il(364,"td",18)(365,"code",31),Qx(366,"Function"),og()(),Il(367,"td",21)(368,"em")(369,"strong"),Qx(370,"(opcional)"),og()(),Il(371,"p"),Qx(372,"A\xE7\xE3o executada ao clicar no item."),og(),Il(373,"blockquote")(374,"p"),Qx(375,"A fun\xE7\xE3o atribu\xEDda a esta propriedade receber\xE1 o "),Il(376,"em"),Qx(377,"label"),og(),Qx(378," do item como par\xE2metro para execu\xE7\xE3o."),og()()()(),Il(379,"tr",14)(380,"td",15)(381,"div",22)(382,"span",23),Qx(383," label"),zl(384,"br"),og()()(),Il(385,"td",18)(386,"code",25),Qx(387,"string"),og()(),Il(388,"td",21)(389,"p"),Qx(390,"R\xF3tulo do item."),og()()(),Il(391,"tr",14)(392,"td",15)(393,"div",22)(394,"span",23),Qx(395," link"),zl(396,"br"),og()()(),Il(397,"td",18)(398,"code",25),Qx(399,"string"),og()(),Il(400,"td",21)(401,"em")(402,"strong"),Qx(403,"(opcional)"),og()(),Il(404,"p"),Qx(405,"Url do item."),og(),Il(406,"blockquote")(407,"p"),Qx(408,"Caso o item tamb\xE9m contenha uma "),Il(409,"em"),Qx(410,"action"),og(),Qx(411," definida, a prefer\xEAncia de execu\xE7\xE3o ser\xE1 do "),Il(412,"em"),Qx(413,"link"),og(),Qx(414,"."),og()(),Il(415,"blockquote")(416,"p"),Qx(417,`Para o correto funcionamento, \xE9 necess\xE1rio que haja uma rota referenciando seu valor.
`),Il(418,"strong")(419,"a",32),Qx(420,"Veja um exemplo de como criar rotas aqui"),og()(),Qx(421,"."),og()(),Il(422,"blockquote")(423,"p"),Qx(424,"Esta propriedade \xE9 necess\xE1ria para que a propriedade "),Il(425,"code"),Qx(426,"p-favorite-service"),og(),Qx(427," consiga favoritar ou desfavoritar."),og()()()()(),Il(428,"h4",30)(429,"code",5),Qx(430,"PoBreadcrumb"),og()(),Il(431,"div",2)(432,"p"),Qx(433,"Interface que define o "),Il(434,"code"),Qx(435,"po-breadcrumb"),og(),Qx(436,"."),og()(),Il(437,"h4",10),Qx(438,"Propriedades"),og(),Il(439,"table",11)(440,"tr",12)(441,"th",13),Qx(442,"Nome"),og(),Il(443,"th",13),Qx(444,"Tipo"),og(),Il(445,"th",13),Qx(446,"Descri\xE7\xE3o"),og()(),Il(447,"tr",14)(448,"td",15)(449,"div",22)(450,"span",23),Qx(451," favorite"),zl(452,"br"),og()()(),Il(453,"td",18)(454,"code",25),Qx(455,"string"),og()(),Il(456,"td",21)(457,"em")(458,"strong"),Qx(459,"(opcional)"),og()(),Il(460,"p"),Qx(461,"Permite definir uma URL para favoritar ou desfavoritar."),og(),Il(462,"blockquote")(463,"p"),Qx(464,"Para maiores informa\xE7\xF5es verificar a propriedade "),Il(465,"code"),Qx(466,"p-favorite-service"),og(),Qx(467," do componente "),Il(468,"code"),Qx(469,"po-breadcrumb"),og(),Qx(470,"."),og()()()(),Il(471,"tr",14)(472,"td",15)(473,"div",22)(474,"span",23),Qx(475," items"),zl(476,"br"),og()()(),Il(477,"td",18)(478,"code",33),Qx(479,"Array<PoBreadcrumbItem>"),og()(),Il(480,"td",21)(481,"p"),Qx(482,"Lista de itens do "),Il(483,"em"),Qx(484,"breadcrumb"),og(),Qx(485,"."),og(),Il(486,"p")(487,"strong"),Qx(488,"Exemplo:"),og()(),Il(489,"pre")(490,"code"),Qx(491,`{ label: 'Po Portal', link: 'portal' }
`),og()()()(),Il(492,"tr",14)(493,"td",15)(494,"div",22)(495,"span",23),Qx(496," params"),zl(497,"br"),og()()(),Il(498,"td",18)(499,"code",34),Qx(500,"object"),og()(),Il(501,"td",21)(502,"em")(503,"strong"),Qx(504,"(opcional)"),og()(),Il(505,"p"),Qx(506,"Objeto que possibilita o envio de par\xE2metros adicionais \xE0 requisi\xE7\xE3o."),og()()()(),Il(507,"h4",30)(508,"code",5),Qx(509,"PoPageDetailLiterals"),og()(),Il(510,"div",2)(511,"p"),Qx(512,"Interface para defini\xE7\xE3o das literais usadas no "),Il(513,"code"),Qx(514,"po-page-detail"),og(),Qx(515,"."),og()(),Il(516,"h4",10),Qx(517,"Propriedades"),og(),Il(518,"table",11)(519,"tr",12)(520,"th",13),Qx(521,"Nome"),og(),Il(522,"th",13),Qx(523,"Tipo"),og(),Il(524,"th",13),Qx(525,"Descri\xE7\xE3o"),og()(),Il(526,"tr",14)(527,"td",15)(528,"div",22)(529,"span",23),Qx(530," back"),zl(531,"br"),og()()(),Il(532,"td",18)(533,"code",25),Qx(534,"string"),og()(),Il(535,"td",21)(536,"em")(537,"strong"),Qx(538,"(opcional)"),og()(),Il(539,"p"),Qx(540,"Label da a\xE7\xE3o "),Il(541,"code"),Qx(542,"back"),og(),Qx(543,"."),og()()(),Il(544,"tr",14)(545,"td",15)(546,"div",22)(547,"span",23),Qx(548," edit"),zl(549,"br"),og()()(),Il(550,"td",18)(551,"code",25),Qx(552,"string"),og()(),Il(553,"td",21)(554,"em")(555,"strong"),Qx(556,"(opcional)"),og()(),Il(557,"p"),Qx(558,"Label da a\xE7\xE3o "),Il(559,"code"),Qx(560,"edit"),og(),Qx(561,"."),og()()(),Il(562,"tr",14)(563,"td",15)(564,"div",22)(565,"span",23),Qx(566," remove"),zl(567,"br"),og()()(),Il(568,"td",18)(569,"code",25),Qx(570,"string"),og()(),Il(571,"td",21)(572,"em")(573,"strong"),Qx(574,"(opcional)"),og()(),Il(575,"p"),Qx(576,"Label da a\xE7\xE3o "),Il(577,"code"),Qx(578,"remove"),og(),Qx(579,"."),og()()()()());},dependencies:[Ka],encapsulation:2})}return a})();var me=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(d,l){this.route=d,this.router=l;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let l=d.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:"merge"}),this.activeTab=d;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(l){return new(l||a)(C(Xn),C(En))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Page Detail",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,n){l&1&&(Il(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return n.changeTab("doc")}),zl(3,"sample-po-page-detail-doc"),og(),Il(4,"po-tab",3),ft("p-click",function(){return n.changeTab("web")}),zl(5,"sample-po-page-detail-basic-view")(6,"sample-po-page-detail-labs-view")(7,"sample-po-page-detail-user-view"),og()()()),l&2&&(nw("p-actions",n.actions),Lp(2),nw("p-active",n.activeTab==="doc"),Lp(2),nw("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"));},dependencies:[cNe,qme,Yme,ie,ae,le,re],encapsulation:2})}return a})();var fe=[{path:"",component:me}],pe=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue({imports:[uL.forChild(fe),uL]})}return a})();var Qe=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue({imports:[sr,pe]})}return a})();export{Qe as DocPoPageDetailModule};