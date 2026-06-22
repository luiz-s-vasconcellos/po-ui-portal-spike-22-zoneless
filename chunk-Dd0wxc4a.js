import {f as fe,u as ue$1,s as sr,h as hL,w,c3 as Xn,E as En,U as Un,a as f,c5 as Lde,aW as Yp,ce as sNe,H as Wl,an as CO,aH as Ka,b8 as Bme,b9 as qme,F as Sl,z as eN,J as og,a1 as ft,L as Lp,ar as $x,au as dg,Q as nw,bs as fN,aX as Z9,aF as G9,aY as q9,aG as _k,aZ as mk,b0 as Qt,b1 as mv,c4 as b3,b4 as L3,c8 as wde,c9 as Ghe,aB as wx,aM as ww,aN as e0,bd as Nx,aO as Ew,aP as n0,bD as Pde,cz as Pz,cp as Rhe,av as ql,aw as lo,ax as uo,a3 as rNe,aD as Ky,aT as nN,aE as Xy}from'./main-WP3NAV7C.js';var pe=(()=>{class o{static \u0275fac=function(r){return new(r||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-page-edit-basic"]],standalone:false,decls:1,vars:0,consts:[["p-title","PO Page Edit"]],template:function(r,i){r&1&&Wl(0,"po-page-edit",0);},dependencies:[sNe],encapsulation:2,changeDetection:1})}return o})();var Pe=o=>({"docs-sample-code-tabs":o}),se=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-page-edit-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Page Edit Basic"),og(),Sl(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-page-edit-basic/sample-po-page-edit-basic.component.html"),og(),Sl(13,"pre",7),eN(14,`<po-page-edit p-title="PO Page Edit"> </po-page-edit>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-page-edit-basic/sample-po-page-edit-basic.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-page-edit-basic',
  templateUrl: './sample-po-page-edit-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageEditBasicComponent {}
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-page-edit-basic"),og(),Wl(23,"hr")),r&2&&(Lp(5),$x("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,Pe,i.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,pe],encapsulation:2})}return o})();var ce=(()=>{class o{action;breadcrumb;breadcrumbItem;breadcrumbParams;componentsSize;customLiterals;literals;params;properties;title;subtitle;componentsSizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];propertiesOptions=[{value:"disableSubmit",label:"Disable Submit"}];ngOnInit(){this.restore();}addBreadcrumbItem(){this.breadcrumb.items=this.breadcrumb.items.concat([this.breadcrumbItem]),this.breadcrumbItem={label:void 0,link:void 0};}addBreadcrumbParam(){let d={[this.breadcrumbParams.property]:this.breadcrumbParams.value};this.breadcrumb.params?this.breadcrumb.params=Object.assign(this.breadcrumb.params,d):this.breadcrumb.params=d,this.breadcrumbParams={};}cancel(){this.action="Cancel";}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals);}catch(d){this.customLiterals=void 0;}}restore(){this.action="",this.breadcrumb={items:[]},this.breadcrumbItem={label:void 0,link:void 0},this.breadcrumbParams={},this.componentsSize="medium",this.customLiterals=void 0,this.literals="",this.properties=[],this.title="PO Page Edit",this.subtitle="";}save(){this.action="Save";}saveNew(){this.action="Save and new";}static \u0275fac=function(r){return new(r||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-page-edit-labs"]],standalone:false,decls:34,vars:21,consts:[["formBreadcrumbFavorite","ngForm"],["formBreadcrumbItems","ngForm"],["formBreadcrumbParams","ngForm"],[3,"p-cancel","p-save","p-save-new","p-breadcrumb","p-components-size","p-disable-submit","p-literals","p-title","p-subtitle"],[1,"po-row"],["p-label","Action",1,"po-md-12",3,"p-value"],["name","title","p-label","Title",1,"po-md-6",3,"ngModelChange","ngModel"],["name","subtitle","p-label","Subtitle",1,"po-md-6",3,"ngModelChange","ngModel"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Components size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","breadcrumbFavorite","p-clean","","p-help","https://po-sample-api.onrender.com/v1/favorite","p-label","Breadcrumb favorite",1,"po-md-6",3,"ngModelChange","ngModel"],["name","breadcrumbItemLabel","p-clean","","p-label","Breadcrumb item label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","breadcrumbItemLink","p-clean","","p-label","Breadcrumb item link","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add breadcrumb item",1,"po-md-6","po-lg-3",3,"p-click","p-disabled"],["name","breadcrumbParamsProperty","p-clean","","p-label","Breadcrumb params property","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","breadcrumbParamsValue","p-clean","","p-label","Breadcrumb params value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add breadcrumb params",1,"po-md-6","po-lg-3",3,"p-click","p-disabled"],["name","literals","p-help",'Ex.: {"cancel": "Voltar", "save": "Confirmar", "saveNew": "Confirmar e criar um novo"}',"p-label","Literals",1,"po-md-12","po-lg-6",3,"ngModelChange","p-change","ngModel"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(r,i){if(r&1){let p=wx();Sl(0,"po-page-edit",3),ft("p-cancel",function(){return i.cancel()})("p-save",function(){return i.save()})("p-save-new",function(){return i.saveNew()}),Sl(1,"div",4),Wl(2,"po-info",5),og(),Wl(3,"po-divider"),Sl(4,"form")(5,"div",4)(6,"po-input",6),ww("ngModelChange",function(a){return Ky(p),nN(i.title,a)||(i.title=a),Xy(a)}),og(),e0(),Sl(7,"po-input",7),ww("ngModelChange",function(a){return Ky(p),nN(i.subtitle,a)||(i.subtitle=a),Xy(a)}),og(),e0(),Sl(8,"po-checkbox-group",8),ww("ngModelChange",function(a){return Ky(p),nN(i.properties,a)||(i.properties=a),Xy(a)}),og(),e0(),Sl(9,"po-radio-group",9),ww("ngModelChange",function(a){return Ky(p),nN(i.componentsSize,a)||(i.componentsSize=a),Xy(a)}),og(),e0(),og(),Wl(10,"po-divider"),Sl(11,"form",null,0)(13,"div",4)(14,"po-input",10),ww("ngModelChange",function(a){return Ky(p),nN(i.breadcrumb.favorite,a)||(i.breadcrumb.favorite=a),Xy(a)}),og(),e0(),og()(),Sl(15,"form",null,1)(17,"div",4)(18,"po-input",11),ww("ngModelChange",function(a){return Ky(p),nN(i.breadcrumbItem.label,a)||(i.breadcrumbItem.label=a),Xy(a)}),og(),e0(),Sl(19,"po-input",12),ww("ngModelChange",function(a){return Ky(p),nN(i.breadcrumbItem.link,a)||(i.breadcrumbItem.link=a),Xy(a)}),og(),e0(),og(),Sl(20,"div",4)(21,"po-button",13),ft("p-click",function(){return i.addBreadcrumbItem()}),og()()(),Wl(22,"po-divider"),Sl(23,"form",null,2)(25,"div",4)(26,"po-input",14),ww("ngModelChange",function(a){return Ky(p),nN(i.breadcrumbParams.property,a)||(i.breadcrumbParams.property=a),Xy(a)}),og(),e0(),Sl(27,"po-input",15),ww("ngModelChange",function(a){return Ky(p),nN(i.breadcrumbParams.value,a)||(i.breadcrumbParams.value=a),Xy(a)}),og(),e0(),og(),Sl(28,"div",4)(29,"po-button",16),ft("p-click",function(){return i.addBreadcrumbParam()}),og()()(),Sl(30,"div",4)(31,"po-input",17),ww("ngModelChange",function(a){return Ky(p),nN(i.literals,a)||(i.literals=a),Xy(a)}),ft("p-change",function(){return i.changeLiterals()}),og(),e0(),og(),Sl(32,"div",4)(33,"po-button",18),ft("p-click",function(){return i.restore()}),og()()()();}if(r&2){let p=Nx(16),s=Nx(24);nw("p-breadcrumb",i.breadcrumb)("p-components-size",i.componentsSize)("p-disable-submit",i.properties.includes("disableSubmit"))("p-literals",i.customLiterals)("p-title",i.title)("p-subtitle",i.subtitle),Lp(2),nw("p-value",i.action),Lp(4),Ew("ngModel",i.title),n0(),Lp(),Ew("ngModel",i.subtitle),n0(),Lp(),Ew("ngModel",i.properties),nw("p-options",i.propertiesOptions),n0(),Lp(),Ew("ngModel",i.componentsSize),nw("p-options",i.componentsSizeOptions),n0(),Lp(5),Ew("ngModel",i.breadcrumb.favorite),n0(),Lp(4),Ew("ngModel",i.breadcrumbItem.label),n0(),Lp(),Ew("ngModel",i.breadcrumbItem.link),n0(),Lp(2),nw("p-disabled",p.invalid),Lp(5),Ew("ngModel",i.breadcrumbParams.property),n0(),Lp(),Ew("ngModel",i.breadcrumbParams.value),n0(),Lp(2),nw("p-disabled",s.invalid),Lp(2),Ew("ngModel",i.literals),n0();}},dependencies:[Z9,G9,q9,_k,mk,Qt,mv,b3,L3,wde,Ghe,sNe],encapsulation:2,changeDetection:1})}return o})();var ye=o=>({"docs-sample-code-tabs":o}),ue=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-page-edit-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Page Edit Labs"),og(),Sl(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-page-edit-labs/sample-po-page-edit-labs.component.html"),og(),Sl(13,"pre",7),eN(14,`<po-page-edit
  [p-breadcrumb]="breadcrumb"
  [p-components-size]="componentsSize"
  [p-disable-submit]="properties.includes('disableSubmit')"
  [p-literals]="customLiterals"
  [p-title]="title"
  (p-cancel)="cancel()"
  (p-save)="save()"
  (p-save-new)="saveNew()"
  [p-subtitle]="subtitle"
>
  <div class="po-row">
    <po-info class="po-md-12" p-label="Action" [p-value]="action"> </po-info>
  </div>

  <po-divider />

  <form>
    <div class="po-row">
      <po-input class="po-md-6" name="title" [(ngModel)]="title" p-label="Title"> </po-input>
      <po-input class="po-md-6" name="subtitle" [(ngModel)]="subtitle" p-label="Subtitle"> </po-input>

      <po-checkbox-group
        class="po-md-12"
        name="properties"
        [(ngModel)]="properties"
        p-columns="4"
        p-label="Properties"
        [p-options]="propertiesOptions"
      >
      </po-checkbox-group>

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
    </div>

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
        p-help='Ex.: {"cancel": "Voltar", "save": "Confirmar", "saveNew": "Confirmar e criar um novo"}'
        p-label="Literals"
        (p-change)="changeLiterals()"
      >
      </po-input>
    </div>

    <div class="po-row">
      <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"> </po-button>
    </div>
  </form>
</po-page-edit>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-page-edit-labs/sample-po-page-edit-labs.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { PoBreadcrumb, PoBreadcrumbItem, PoCheckboxGroupOption, PoRadioGroupOption } from '@po-ui/ng-components';

import { PoPageEditLiterals } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-page-edit-labs',
  templateUrl: './sample-po-page-edit-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageEditLabsComponent implements OnInit {
  action: string;
  breadcrumb: PoBreadcrumb;
  breadcrumbItem: PoBreadcrumbItem;
  breadcrumbParams: any;
  componentsSize: string;
  customLiterals: PoPageEditLiterals;
  literals: string;
  params: any;
  properties: Array<string>;
  title: string;
  subtitle: string;

  public readonly componentsSizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'disableSubmit', label: 'Disable Submit' }
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

  cancel() {
    this.action = 'Cancel';
  }

  changeLiterals() {
    try {
      this.customLiterals = JSON.parse(this.literals);
    } catch {
      this.customLiterals = undefined;
    }
  }

  restore() {
    this.action = '';
    this.breadcrumb = { items: [] };
    this.breadcrumbItem = { label: undefined, link: undefined };
    this.breadcrumbParams = {};
    this.componentsSize = 'medium';
    this.customLiterals = undefined;
    this.literals = '';
    this.properties = [];
    this.title = 'PO Page Edit';
    this.subtitle = '';
  }

  save() {
    this.action = 'Save';
  }

  saveNew() {
    this.action = 'Save and new';
  }
}
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-page-edit-labs"),og(),Wl(23,"hr")),r&2&&(Lp(5),$x("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,ye,i.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,ce],encapsulation:2})}return o})();var xe=["formEditUser"],ge=(()=>{class o{route=f(En);poDialog=f(Lde);poNotification=f(Yp);formEditUser;birthDate;email;fathersName;genre;graduation;mothersName;name;nationality;nickname;placeOfBirth;userId;breadcrumb={items:[{label:"Home",action:this.beforeRedirect.bind(this)},{label:"User Edit"}]};ngOnInit(){this.initialize();}cancel(){this.initialize();}initialize(){this.birthDate=new Date(1978,11,26),this.email="john.doe@po-ui.com.br",this.fathersName="Mike Doe",this.genre="male",this.graduation="College Degree",this.mothersName="Jane Doe",this.name="John Doe",this.nationality="USA",this.nickname="John",this.placeOfBirth="Colorado",this.userId=122635;}save(){this.poNotification.success("Save successfully");}beforeRedirect(d){this.formEditUser.valid?this.route.navigate(["/"]):this.poDialog.confirm({title:`Confirm redirect to ${d}`,message:"There is data that has not been saved yet. Are you sure you want to quit?",confirm:()=>this.route.navigate(["/"])});}static \u0275fac=function(r){return new(r||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-page-edit-user"]],viewQuery:function(r,i){if(r&1&&ql(xe,7),r&2){let p;lo(p=uo())&&(i.formEditUser=p.first);}},standalone:false,decls:18,vars:13,consts:[["formEditUser","ngForm"],["p-title","User Edit","p-subtitle","Fields marked with <b>*</b> are <u>required</u>",3,"p-cancel","p-save","p-breadcrumb","p-disable-submit"],[1,"po-row"],["name","userId","p-clean","","p-label","User ID","p-required","",1,"po-md-4",3,"ngModelChange","ngModel"],["name","email","p-clean","","p-label","Email","p-required","",1,"po-md-4",3,"ngModelChange","ngModel"],["name","name","p-clean","","p-label","Name","p-required","",1,"po-md-4",3,"ngModelChange","ngModel"],["name","nickname","p-clean","","p-label","Nickname",1,"po-md-4",3,"ngModelChange","ngModel"],["name","birthDate","p-clean","","p-label","Birth Date",1,"po-md-4",3,"ngModelChange","ngModel"],["name","genre","p-clean","","p-label","Genre",1,"po-md-4",3,"ngModelChange","ngModel"],["name","nationality","p-clean","","p-label","Nationality",1,"po-md-4",3,"ngModelChange","ngModel"],["name","placeOfBirth","p-clean","","p-label","Place Of Birth",1,"po-md-4",3,"ngModelChange","ngModel"],["name","graduation","p-clean","","p-label","Graduation",1,"po-md-4",3,"ngModelChange","ngModel"],["name","fathersName","p-clean","","p-label","Father's Name",1,"po-md-4",3,"ngModelChange","ngModel"],["name","mothersName","p-clean","","p-label","Mother's Name",1,"po-md-4",3,"ngModelChange","ngModel"]],template:function(r,i){if(r&1){let p=wx();Sl(0,"po-page-edit",1),ft("p-cancel",function(){return i.cancel()})("p-save",function(){return i.save()}),Sl(1,"form",null,0)(3,"div",2)(4,"po-number",3),ww("ngModelChange",function(a){return Ky(p),nN(i.userId,a)||(i.userId=a),Xy(a)}),og(),e0(),Sl(5,"po-email",4),ww("ngModelChange",function(a){return Ky(p),nN(i.email,a)||(i.email=a),Xy(a)}),og(),e0(),Sl(6,"po-input",5),ww("ngModelChange",function(a){return Ky(p),nN(i.name,a)||(i.name=a),Xy(a)}),og(),e0(),og(),Sl(7,"div",2)(8,"po-input",6),ww("ngModelChange",function(a){return Ky(p),nN(i.nickname,a)||(i.nickname=a),Xy(a)}),og(),e0(),Sl(9,"po-datepicker",7),ww("ngModelChange",function(a){return Ky(p),nN(i.birthDate,a)||(i.birthDate=a),Xy(a)}),og(),e0(),Sl(10,"po-input",8),ww("ngModelChange",function(a){return Ky(p),nN(i.genre,a)||(i.genre=a),Xy(a)}),og(),e0(),og(),Sl(11,"div",2)(12,"po-input",9),ww("ngModelChange",function(a){return Ky(p),nN(i.nationality,a)||(i.nationality=a),Xy(a)}),og(),e0(),Sl(13,"po-input",10),ww("ngModelChange",function(a){return Ky(p),nN(i.placeOfBirth,a)||(i.placeOfBirth=a),Xy(a)}),og(),e0(),Sl(14,"po-input",11),ww("ngModelChange",function(a){return Ky(p),nN(i.graduation,a)||(i.graduation=a),Xy(a)}),og(),e0(),og(),Sl(15,"div",2)(16,"po-input",12),ww("ngModelChange",function(a){return Ky(p),nN(i.fathersName,a)||(i.fathersName=a),Xy(a)}),og(),e0(),Sl(17,"po-input",13),ww("ngModelChange",function(a){return Ky(p),nN(i.mothersName,a)||(i.mothersName=a),Xy(a)}),og(),e0(),og()()();}if(r&2){let p=Nx(2);nw("p-breadcrumb",i.breadcrumb)("p-disable-submit",p.invalid),Lp(4),Ew("ngModel",i.userId),n0(),Lp(),Ew("ngModel",i.email),n0(),Lp(),Ew("ngModel",i.name),n0(),Lp(2),Ew("ngModel",i.nickname),n0(),Lp(),Ew("ngModel",i.birthDate),n0(),Lp(),Ew("ngModel",i.genre),n0(),Lp(2),Ew("ngModel",i.nationality),n0(),Lp(),Ew("ngModel",i.placeOfBirth),n0(),Lp(),Ew("ngModel",i.graduation),n0(),Lp(2),Ew("ngModel",i.fathersName),n0(),Lp(),Ew("ngModel",i.mothersName),n0();}},dependencies:[Z9,G9,q9,_k,mk,Pde,Pz,L3,Rhe,sNe],encapsulation:2,changeDetection:1})}return o})();var Be=o=>({"docs-sample-code-tabs":o}),be=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-page-edit-user-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Page Edit - User"),og(),Sl(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-page-edit-user/sample-po-page-edit-user.component.html"),og(),Sl(13,"pre",7),eN(14,`<po-page-edit
  p-title="User Edit"
  p-subtitle="Fields marked with <b>*</b> are <u>required</u>"
  [p-breadcrumb]="breadcrumb"
  [p-disable-submit]="formEditUser.invalid"
  (p-cancel)="cancel()"
  (p-save)="save()"
>
  <form #formEditUser="ngForm">
    <div class="po-row">
      <po-number class="po-md-4" name="userId" [(ngModel)]="userId" p-clean p-label="User ID" p-required> </po-number>

      <po-email class="po-md-4" name="email" [(ngModel)]="email" p-clean p-label="Email" p-required> </po-email>

      <po-input class="po-md-4" name="name" [(ngModel)]="name" p-clean p-label="Name" p-required> </po-input>
    </div>

    <div class="po-row">
      <po-input class="po-md-4" name="nickname" [(ngModel)]="nickname" p-clean p-label="Nickname"> </po-input>

      <po-datepicker class="po-md-4" name="birthDate" [(ngModel)]="birthDate" p-clean p-label="Birth Date">
      </po-datepicker>

      <po-input class="po-md-4" name="genre" [(ngModel)]="genre" p-clean p-label="Genre"> </po-input>
    </div>

    <div class="po-row">
      <po-input class="po-md-4" name="nationality" [(ngModel)]="nationality" p-clean p-label="Nationality"> </po-input>

      <po-input class="po-md-4" name="placeOfBirth" [(ngModel)]="placeOfBirth" p-clean p-label="Place Of Birth">
      </po-input>

      <po-input class="po-md-4" name="graduation" [(ngModel)]="graduation" p-clean p-label="Graduation"> </po-input>
    </div>

    <div class="po-row">
      <po-input class="po-md-4" name="fathersName" [(ngModel)]="fathersName" p-clean p-label="Father's Name">
      </po-input>

      <po-input class="po-md-4" name="mothersName" [(ngModel)]="mothersName" p-clean p-label="Mother's Name">
      </po-input>
    </div>
  </form>
</po-page-edit>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-page-edit-user/sample-po-page-edit-user.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { PoBreadcrumb } from '@po-ui/ng-components';
import { PoDialogService } from '@po-ui/ng-components';
import { PoNotificationService } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-page-edit-user',
  templateUrl: './sample-po-page-edit-user.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageEditUserComponent implements OnInit {
  private route = inject(Router);
  private poDialog = inject(PoDialogService);
  private poNotification = inject(PoNotificationService);

  @ViewChild('formEditUser', { static: true }) formEditUser: NgForm;

  birthDate: Date;
  email: string;
  fathersName: string;
  genre: string;
  graduation: string;
  mothersName: string;
  name: string;
  nationality: string;
  nickname: string;
  placeOfBirth: string;
  userId: number;

  public readonly breadcrumb: PoBreadcrumb = {
    items: [{ label: 'Home', action: this.beforeRedirect.bind(this) }, { label: 'User Edit' }]
  };

  ngOnInit() {
    this.initialize();
  }

  cancel() {
    this.initialize();
  }

  initialize() {
    this.birthDate = new Date(1978, 11, 26);
    this.email = 'john.doe@po-ui.com.br';
    this.fathersName = 'Mike Doe';
    this.genre = 'male';
    this.graduation = 'College Degree';
    this.mothersName = 'Jane Doe';
    this.name = 'John Doe';
    this.nationality = 'USA';
    this.nickname = 'John';
    this.placeOfBirth = 'Colorado';
    this.userId = 122635;
  }

  save() {
    this.poNotification.success(\`Save successfully\`);
  }

  private beforeRedirect(itemBreadcrumbLabel) {
    if (this.formEditUser.valid) {
      this.route.navigate(['/']);
    } else {
      this.poDialog.confirm({
        title: \`Confirm redirect to \${itemBreadcrumbLabel}\`,
        message: \`There is data that has not been saved yet. Are you sure you want to quit?\`,
        confirm: () => this.route.navigate(['/'])
      });
    }
  }
}
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-page-edit-user"),og(),Wl(23,"hr")),r&2&&(Lp(5),$x("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,Be,i.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,ge],encapsulation:2})}return o})();var Ee=(()=>{class o{static \u0275fac=function(r){return new(r||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-page-edit-doc"]],standalone:false,decls:605,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","PoBreadcrumb"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","PoPageEditLiterals"],["href","/documentation/po-i18n"],[1,"language-typescript"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["href","/guides/getting-started"],["pan","",1,"docs-api-property-type","Array<PoBreadcrumbItem>"],["pan","",1,"docs-api-property-type","object"]],template:function(r,i){r&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),eN(3,"import { PoPageModule } from '@po-ui/ng-components';"),og()(),Sl(4,"div",2)(5,"p"),eN(6,"M\xF3dulo respons\xE1vel pelos componentes de estrutura de p\xE1gina: "),Sl(7,"code"),eN(8,"po-page-default"),og(),eN(9,", "),Sl(10,"code"),eN(11,"po-page-detail"),og(),eN(12,`,
`),Sl(13,"code"),eN(14,"po-page-edit"),og(),eN(15,", "),Sl(16,"code"),eN(17,"po-page-list"),og(),eN(18," e "),Sl(19,"code"),eN(20,"po-page-slide"),og(),eN(21,"."),og()(),Sl(22,"h3",3),eN(23,"Componente"),og(),Sl(24,"h4",4)(25,"code",5),eN(26,"PoPageEditComponent"),og()(),Sl(27,"div",2)(28,"p"),eN(29,"O componente "),Sl(30,"strong"),eN(31,"po-page-edit"),og(),eN(32,` \xE9 utilizado como container principal para tela de edi\xE7\xE3o ou adi\xE7\xE3o de um
registro, tendo a possibilidade de usar as a\xE7\xF5es de "Salvar", "Salvar e Novo" e "Cancelar".`),og(),Sl(33,"p"),eN(34,'Os bot\xF5es "Salvar" e "Salvar e Novo" podem ser habilitados/desabilitados utilizando a propriedade '),Sl(35,"code"),eN(36,"p-disable-submit"),og(),eN(37,`.
Esta propriedade pode ser utilizada para desabilitar os bot\xF5es caso exista um formul\xE1rio inv\xE1lido na p\xE1gina ou alguma
regra de neg\xF3cio n\xE3o tenha sido atendida.`),og(),Sl(38,"h4"),eN(39,"Tokens customiz\xE1veis"),og(),Sl(40,"blockquote")(41,"p"),eN(42,"Para maiores informa\xE7\xF5es, acesse o guia "),Sl(43,"a",6),eN(44,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),eN(45,"."),og()(),Sl(46,"table")(47,"thead")(48,"tr")(49,"th"),eN(50,"Propriedade"),og(),Sl(51,"th"),eN(52,"Descri\xE7\xE3o"),og(),Sl(53,"th"),eN(54,"Valor Padr\xE3o"),og()()(),Sl(55,"tbody")(56,"tr")(57,"td")(58,"strong"),eN(59,"Header"),og()(),Wl(60,"td")(61,"td"),og(),Sl(62,"tr")(63,"td")(64,"code"),eN(65,"--padding"),og()(),Sl(66,"td"),eN(67,"Espa\xE7amento do header"),og(),Sl(68,"td")(69,"code"),eN(70,"var(--spacing-xs) var(--spacing-md)"),og()()(),Sl(71,"tr")(72,"td")(73,"code"),eN(74,"--gap"),og()(),Sl(75,"td"),eN(76,"Espa\xE7amento entre os breadcrumbs e o t\xEDtulo"),og(),Sl(77,"td")(78,"code"),eN(79,"var(--spacing-md)"),og()()(),Sl(80,"tr")(81,"td")(82,"code"),eN(83,"--gap-actions"),og()(),Sl(84,"td"),eN(85,"Espa\xE7amento entre as a\xE7\xF5es"),og(),Sl(86,"td")(87,"code"),eN(88,"var(--spacing-xs)"),og()()(),Sl(89,"tr")(90,"td")(91,"code"),eN(92,"--font-family"),og()(),Sl(93,"td"),eN(94,"Fam\xEDlia tipogr\xE1fica do t\xEDtulo"),og(),Sl(95,"td")(96,"code"),eN(97,"var(--font-family-theme)"),og()()(),Sl(98,"tr")(99,"td")(100,"strong"),eN(101,"Content"),og()(),Wl(102,"td")(103,"td"),og(),Sl(104,"tr")(105,"td")(106,"code"),eN(107,"--padding-content"),og()(),Sl(108,"td"),eN(109,"Espa\xE7amento do conte\xFAdo"),og(),Sl(110,"td")(111,"code"),eN(112,"var(--spacing-xs) var(--spacing-sm)"),og()()()()()(),Sl(113,"div",7)(114,"h4",8),eN(115,"Seletor"),og(),Sl(116,"pre",9),eN(117,`<po-page-edit
    p-breadcrumb="PoBreadcrumb"
    (p-cancel)="EventEmitter"
    p-components-size="string"
    p-disable-submit="boolean"
    p-literals="PoPageEditLiterals"
    (p-save)="EventEmitter"
    (p-save-new)="EventEmitter"
    p-subtitle="string"
    p-title="string" >
</po-page-edit>
`),og()(),Sl(118,"h4",10),eN(119,"Propriedades"),og(),Sl(120,"table",11)(121,"tr",12)(122,"th",13),eN(123,"Nome"),og(),Sl(124,"th",13),eN(125,"Tipo"),og(),Sl(126,"th",13),eN(127,"Padr\xE3o"),og(),Sl(128,"th",13),eN(129,"Descri\xE7\xE3o"),og()(),Sl(130,"tr",14)(131,"td",15)(132,"div",16)(133,"span",17),eN(134," p-breadcrumb"),Wl(135,"br"),og()()(),Sl(136,"td",18)(137,"code",19),eN(138,"PoBreadcrumb"),og()(),Sl(139,"td",20),eN(140,"-"),og(),Sl(141,"td",21)(142,"em")(143,"strong"),eN(144,"(opcional)"),og()(),Sl(145,"p"),eN(146,"Objeto com propriedades do breadcrumb."),og()()(),Sl(147,"tr",14)(148,"td",15)(149,"div",22)(150,"span",23),eN(151," (p-cancel)"),Wl(152,"br"),og()()(),Sl(153,"td",18)(154,"code",24),eN(155,"EventEmitter"),og()(),Sl(156,"td",20),eN(157,"-"),og(),Sl(158,"td",21)(159,"p"),eN(160,'Evento que ser\xE1 disparado ao clicar no bot\xE3o de "Cancelar".'),og(),Sl(161,"pre")(162,"code"),eN(163,`<po-page-edit (p-cancel)="myCancelFunction()">
</po-page-edit>
`),og()(),Sl(164,"blockquote")(165,"p"),eN(166,'Caso n\xE3o utilizar esta propriedade, o bot\xE3o de "Cancelar" n\xE3o ser\xE1 exibido.'),og()()()(),Sl(167,"tr",14)(168,"td",15)(169,"div",16)(170,"span",17),eN(171," p-components-size"),Wl(172,"br"),og()()(),Sl(173,"td",18)(174,"code",25),eN(175,"string"),og()(),Sl(176,"td",20)(177,"p")(178,"code"),eN(179,"medium"),og()()(),Sl(180,"td",21)(181,"em")(182,"strong"),eN(183,"(opcional)"),og()(),Sl(184,"p"),eN(185,"Define o tamanho dos componentes de formul\xE1rio no template:"),og(),Sl(186,"ul")(187,"li")(188,"code"),eN(189,"small"),og(),eN(190,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),og(),Sl(191,"li")(192,"code"),eN(193,"medium"),og(),eN(194,": aplica a medida medium de cada componente."),og()(),Sl(195,"blockquote")(196,"p"),eN(197,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Sl(198,"code"),eN(199,"medium"),og(),eN(200,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Sl(201,"a",26),eN(202,"po-theme"),og(),eN(203,"."),og()()()(),Sl(204,"tr",14)(205,"td",15)(206,"div",16)(207,"span",17),eN(208," p-disable-submit"),Wl(209,"br"),og()()(),Sl(210,"td",18)(211,"code",27),eN(212,"boolean"),og()(),Sl(213,"td",20),eN(214,"-"),og(),Sl(215,"td",21)(216,"em")(217,"strong"),eN(218,"(opcional)"),og()(),Sl(219,"p"),eN(220,"Desabilita bot\xF5es de submiss\xE3o (save e saveNew)"),og()()(),Sl(221,"tr",14)(222,"td",15)(223,"div",16)(224,"span",17),eN(225," p-literals"),Wl(226,"br"),og()()(),Sl(227,"td",18)(228,"code",28),eN(229,"PoPageEditLiterals"),og()(),Sl(230,"td",20),eN(231,"-"),og(),Sl(232,"td",21)(233,"em")(234,"strong"),eN(235,"(opcional)"),og()(),Sl(236,"p"),eN(237,"Objeto com as literais usadas no "),Sl(238,"code"),eN(239,"po-page-edit"),og(),eN(240,"."),og(),Sl(241,"p"),eN(242,"Existem duas maneiras de customizar o componente, passando um objeto com todas as literais dispon\xEDveis:"),og(),Sl(243,"pre")(244,"code"),eN(245,`const customLiterals: PoPageEditLiterals = {
  cancel: 'Voltar',
  save: 'Confirmar',
  saveNew: 'Confirmar e criar um novo'
};
`),og()(),Sl(246,"p"),eN(247,"Ou passando apenas as literais que deseja customizar:"),og(),Sl(248,"pre")(249,"code"),eN(250,`const customLiterals: PoPageEditLiterals = {
  cancel: 'Cancelar processo'
};
`),og()(),Sl(251,"p"),eN(252,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente."),og(),Sl(253,"pre")(254,"code"),eN(255,`<po-page-edit
  [p-literals]="customLiterals">
</po-page-edit>
`),og()(),Sl(256,"blockquote")(257,"p"),eN(258,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),Sl(259,"a",29)(260,"code"),eN(261,"PoI18nService"),og()(),eN(262," ou do browser."),og()()()(),Sl(263,"tr",14)(264,"td",15)(265,"div",22)(266,"span",23),eN(267," (p-save)"),Wl(268,"br"),og()()(),Sl(269,"td",18)(270,"code",24),eN(271,"EventEmitter"),og()(),Sl(272,"td",20),eN(273,"-"),og(),Sl(274,"td",21)(275,"p"),eN(276,'Evento que ser\xE1 disparado ao clicar no bot\xE3o de "Salvar".'),og(),Sl(277,"pre")(278,"code"),eN(279,`<po-page-edit (p-save)="mySaveFunction()">
</po-page-edit>
`),og()(),Sl(280,"blockquote")(281,"p"),eN(282,'Caso n\xE3o utilizar esta propriedade, o bot\xE3o de "Salvar" n\xE3o ser\xE1 exibido.'),og()()()(),Sl(283,"tr",14)(284,"td",15)(285,"div",22)(286,"span",23),eN(287," (p-save-new)"),Wl(288,"br"),og()()(),Sl(289,"td",18)(290,"code",24),eN(291,"EventEmitter"),og()(),Sl(292,"td",20),eN(293,"-"),og(),Sl(294,"td",21)(295,"p"),eN(296,'Evento que ser\xE1 disparado ao clicar no bot\xE3o de "Salvar e Novo".'),og(),Sl(297,"pre")(298,"code"),eN(299,`<po-page-edit (p-save-new)="mySaveNewFunction()">
</po-page-edit>
`),og()(),Sl(300,"blockquote")(301,"p"),eN(302,'Caso n\xE3o utilizar esta propriedade, o bot\xE3o de "Salvar e Novo" n\xE3o ser\xE1 exibido.'),og()()()(),Sl(303,"tr",14)(304,"td",15)(305,"div",16)(306,"span",17),eN(307," p-subtitle"),Wl(308,"br"),og()()(),Sl(309,"td",18)(310,"code",25),eN(311,"string"),og()(),Sl(312,"td",20),eN(313,"-"),og(),Sl(314,"td",21)(315,"em")(316,"strong"),eN(317,"(opcional)"),og()(),Sl(318,"p"),eN(319,"Subtitulo do Header da p\xE1gina."),og(),Sl(320,"p"),eN(321,"Suporta formata\xE7\xE3o b\xE1sica com as tags "),Sl(322,"code"),eN(323,"<b>"),og(),eN(324," (negrito), "),Sl(325,"code"),eN(326,"<strong>"),og(),eN(327," (negrito), "),Sl(328,"code"),eN(329,"<i>"),og(),eN(330," (it\xE1lico), "),Sl(331,"code"),eN(332,"<em>"),og(),eN(333,` (it\xE1lico) e
`),Sl(334,"code"),eN(335,"<u>"),og(),eN(336," (sublinhado)."),og(),Sl(337,"p"),eN(338,"Exemplo:"),og(),Sl(339,"pre")(340,"code",30),eN(341,`subtitle = 'Fields marked with <b>*</b> are <u>required</u>';
`),og()(),Sl(342,"blockquote")(343,"p"),eN(344,"Requer que "),Sl(345,"code"),eN(346,"p-title"),og(),eN(347," esteja definido."),og()()()(),Sl(348,"tr",14)(349,"td",15)(350,"div",16)(351,"span",17),eN(352," p-title"),Wl(353,"br"),og()()(),Sl(354,"td",18)(355,"code",25),eN(356,"string"),og()(),Sl(357,"td",20),eN(358,"-"),og(),Sl(359,"td",21)(360,"p"),eN(361,"T\xEDtulo da p\xE1gina."),og()()()(),Sl(362,"h3"),eN(363,"Interfaces"),og(),Sl(364,"h4",31)(365,"code",5),eN(366,"PoBreadcrumbItem"),og()(),Sl(367,"div",2)(368,"p"),eN(369,"Interface que define cada item do componente "),Sl(370,"strong"),eN(371,"po-breadcrumb"),og(),eN(372,"."),og()(),Sl(373,"h4",10),eN(374,"Propriedades"),og(),Sl(375,"table",11)(376,"tr",12)(377,"th",13),eN(378,"Nome"),og(),Sl(379,"th",13),eN(380,"Tipo"),og(),Sl(381,"th",13),eN(382,"Descri\xE7\xE3o"),og()(),Sl(383,"tr",14)(384,"td",15)(385,"div",16)(386,"span",17),eN(387," action"),Wl(388,"br"),og()()(),Sl(389,"td",18)(390,"code",32),eN(391,"Function"),og()(),Sl(392,"td",21)(393,"em")(394,"strong"),eN(395,"(opcional)"),og()(),Sl(396,"p"),eN(397,"A\xE7\xE3o executada ao clicar no item."),og(),Sl(398,"blockquote")(399,"p"),eN(400,"A fun\xE7\xE3o atribu\xEDda a esta propriedade receber\xE1 o "),Sl(401,"em"),eN(402,"label"),og(),eN(403," do item como par\xE2metro para execu\xE7\xE3o."),og()()()(),Sl(404,"tr",14)(405,"td",15)(406,"div",16)(407,"span",17),eN(408," label"),Wl(409,"br"),og()()(),Sl(410,"td",18)(411,"code",25),eN(412,"string"),og()(),Sl(413,"td",21)(414,"p"),eN(415,"R\xF3tulo do item."),og()()(),Sl(416,"tr",14)(417,"td",15)(418,"div",16)(419,"span",17),eN(420," link"),Wl(421,"br"),og()()(),Sl(422,"td",18)(423,"code",25),eN(424,"string"),og()(),Sl(425,"td",21)(426,"em")(427,"strong"),eN(428,"(opcional)"),og()(),Sl(429,"p"),eN(430,"Url do item."),og(),Sl(431,"blockquote")(432,"p"),eN(433,"Caso o item tamb\xE9m contenha uma "),Sl(434,"em"),eN(435,"action"),og(),eN(436," definida, a prefer\xEAncia de execu\xE7\xE3o ser\xE1 do "),Sl(437,"em"),eN(438,"link"),og(),eN(439,"."),og()(),Sl(440,"blockquote")(441,"p"),eN(442,`Para o correto funcionamento, \xE9 necess\xE1rio que haja uma rota referenciando seu valor.
`),Sl(443,"strong")(444,"a",33),eN(445,"Veja um exemplo de como criar rotas aqui"),og()(),eN(446,"."),og()(),Sl(447,"blockquote")(448,"p"),eN(449,"Esta propriedade \xE9 necess\xE1ria para que a propriedade "),Sl(450,"code"),eN(451,"p-favorite-service"),og(),eN(452," consiga favoritar ou desfavoritar."),og()()()()(),Sl(453,"h4",31)(454,"code",5),eN(455,"PoBreadcrumb"),og()(),Sl(456,"div",2)(457,"p"),eN(458,"Interface que define o "),Sl(459,"code"),eN(460,"po-breadcrumb"),og(),eN(461,"."),og()(),Sl(462,"h4",10),eN(463,"Propriedades"),og(),Sl(464,"table",11)(465,"tr",12)(466,"th",13),eN(467,"Nome"),og(),Sl(468,"th",13),eN(469,"Tipo"),og(),Sl(470,"th",13),eN(471,"Descri\xE7\xE3o"),og()(),Sl(472,"tr",14)(473,"td",15)(474,"div",16)(475,"span",17),eN(476," favorite"),Wl(477,"br"),og()()(),Sl(478,"td",18)(479,"code",25),eN(480,"string"),og()(),Sl(481,"td",21)(482,"em")(483,"strong"),eN(484,"(opcional)"),og()(),Sl(485,"p"),eN(486,"Permite definir uma URL para favoritar ou desfavoritar."),og(),Sl(487,"blockquote")(488,"p"),eN(489,"Para maiores informa\xE7\xF5es verificar a propriedade "),Sl(490,"code"),eN(491,"p-favorite-service"),og(),eN(492," do componente "),Sl(493,"code"),eN(494,"po-breadcrumb"),og(),eN(495,"."),og()()()(),Sl(496,"tr",14)(497,"td",15)(498,"div",16)(499,"span",17),eN(500," items"),Wl(501,"br"),og()()(),Sl(502,"td",18)(503,"code",34),eN(504,"Array<PoBreadcrumbItem>"),og()(),Sl(505,"td",21)(506,"p"),eN(507,"Lista de itens do "),Sl(508,"em"),eN(509,"breadcrumb"),og(),eN(510,"."),og(),Sl(511,"p")(512,"strong"),eN(513,"Exemplo:"),og()(),Sl(514,"pre")(515,"code"),eN(516,`{ label: 'Po Portal', link: 'portal' }
`),og()()()(),Sl(517,"tr",14)(518,"td",15)(519,"div",16)(520,"span",17),eN(521," params"),Wl(522,"br"),og()()(),Sl(523,"td",18)(524,"code",35),eN(525,"object"),og()(),Sl(526,"td",21)(527,"em")(528,"strong"),eN(529,"(opcional)"),og()(),Sl(530,"p"),eN(531,"Objeto que possibilita o envio de par\xE2metros adicionais \xE0 requisi\xE7\xE3o."),og()()()(),Sl(532,"h4",31)(533,"code",5),eN(534,"PoPageEditLiterals"),og()(),Sl(535,"div",2)(536,"p"),eN(537,"Interface para defini\xE7\xE3o das literais usadas no "),Sl(538,"code"),eN(539,"po-page-edit"),og(),eN(540,"."),og()(),Sl(541,"h4",10),eN(542,"Propriedades"),og(),Sl(543,"table",11)(544,"tr",12)(545,"th",13),eN(546,"Nome"),og(),Sl(547,"th",13),eN(548,"Tipo"),og(),Sl(549,"th",13),eN(550,"Descri\xE7\xE3o"),og()(),Sl(551,"tr",14)(552,"td",15)(553,"div",16)(554,"span",17),eN(555," cancel"),Wl(556,"br"),og()()(),Sl(557,"td",18)(558,"code",25),eN(559,"string"),og()(),Sl(560,"td",21)(561,"em")(562,"strong"),eN(563,"(opcional)"),og()(),Sl(564,"p"),eN(565,"Label da a\xE7\xE3o "),Sl(566,"code"),eN(567,"cancel"),og(),eN(568,"."),og()()(),Sl(569,"tr",14)(570,"td",15)(571,"div",16)(572,"span",17),eN(573," save"),Wl(574,"br"),og()()(),Sl(575,"td",18)(576,"code",25),eN(577,"string"),og()(),Sl(578,"td",21)(579,"em")(580,"strong"),eN(581,"(opcional)"),og()(),Sl(582,"p"),eN(583,"Label da a\xE7\xE3o "),Sl(584,"code"),eN(585,"save"),og(),eN(586,"."),og()()(),Sl(587,"tr",14)(588,"td",15)(589,"div",16)(590,"span",17),eN(591," saveNew"),Wl(592,"br"),og()()(),Sl(593,"td",18)(594,"code",25),eN(595,"string"),og()(),Sl(596,"td",21)(597,"em")(598,"strong"),eN(599,"(opcional)"),og()(),Sl(600,"p"),eN(601,"Label da a\xE7\xE3o "),Sl(602,"code"),eN(603,"saveNew"),og(),eN(604,"."),og()()()()());},dependencies:[Ka],encapsulation:2})}return o})();var he=(()=>{class o{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(d,r){this.route=d,this.router=r;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let r=d.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:"merge"}),this.activeTab=d;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(r){return new(r||o)(w(Xn),w(En))};static \u0275cmp=Un({type:o,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Page Edit",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,i){r&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return i.changeTab("doc")}),Wl(3,"sample-po-page-edit-doc"),og(),Sl(4,"po-tab",3),ft("p-click",function(){return i.changeTab("web")}),Wl(5,"sample-po-page-edit-basic-view")(6,"sample-po-page-edit-labs-view")(7,"sample-po-page-edit-user-view"),og()()()),r&2&&(nw("p-actions",i.actions),Lp(2),nw("p-active",i.activeTab==="doc"),Lp(2),nw("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[rNe,Bme,qme,se,ue,be,Ee],encapsulation:2})}return o})();var ke=[{path:"",component:he}],Se=(()=>{class o{static \u0275fac=function(r){return new(r||o)};static \u0275mod=fe({type:o});static \u0275inj=ue$1({imports:[hL.forChild(ke),hL]})}return o})();var mt=(()=>{class o{static \u0275fac=function(r){return new(r||o)};static \u0275mod=fe({type:o});static \u0275inj=ue$1({imports:[sr,Se]})}return o})();export{mt as DocPoPageEditModule};