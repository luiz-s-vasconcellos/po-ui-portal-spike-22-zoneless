import {f as fe,u as ue$1,s as sr,a as uL,C,c3 as Xn,E as En,U as Un,b as f,c5 as Vde,aW as Yp,ce as dNe,J as zl,an as DO,aH as Ka,b8 as qme,b9 as Yme,H as Il,q as Qx,R as og,a1 as ft,A as Lp,ar as Ux,au as dg,T as nw,bs as uN,aX as G9,aF as $9,aY as z9,aG as mk,aZ as hk,b0 as Qt,b1 as mv,c4 as C3,b4 as O3,c8 as Dde,c9 as Yhe,aB as Dx,aM as ww,aN as QA,bd as Ax,aO as Ew,aP as e0,bD as Ede,cz as kz,cp as Hhe,av as Gl,aw as co,ax as lo,a3 as cNe,aD as Xy,aT as eN,aE as Qy}from'./main-QSTLMRDK.js';var pe=(()=>{class o{static \u0275fac=function(r){return new(r||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-page-edit-basic"]],standalone:false,decls:1,vars:0,consts:[["p-title","PO Page Edit"]],template:function(r,i){r&1&&zl(0,"po-page-edit",0);},dependencies:[dNe],encapsulation:2,changeDetection:1})}return o})();var Pe=o=>({"docs-sample-code-tabs":o}),se=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-page-edit-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Page Edit Basic"),og(),Il(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-page-edit-basic/sample-po-page-edit-basic.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-page-edit p-title="PO Page Edit"> </po-page-edit>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-page-edit-basic/sample-po-page-edit-basic.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-page-edit-basic',
  templateUrl: './sample-po-page-edit-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageEditBasicComponent {}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-page-edit-basic"),og(),zl(23,"hr")),r&2&&(Lp(5),Ux("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,Pe,i.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,pe],encapsulation:2})}return o})();var ce=(()=>{class o{action;breadcrumb;breadcrumbItem;breadcrumbParams;componentsSize;customLiterals;literals;params;properties;title;subtitle;componentsSizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];propertiesOptions=[{value:"disableSubmit",label:"Disable Submit"}];ngOnInit(){this.restore();}addBreadcrumbItem(){this.breadcrumb.items=this.breadcrumb.items.concat([this.breadcrumbItem]),this.breadcrumbItem={label:void 0,link:void 0};}addBreadcrumbParam(){let d={[this.breadcrumbParams.property]:this.breadcrumbParams.value};this.breadcrumb.params?this.breadcrumb.params=Object.assign(this.breadcrumb.params,d):this.breadcrumb.params=d,this.breadcrumbParams={};}cancel(){this.action="Cancel";}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals);}catch(d){this.customLiterals=void 0;}}restore(){this.action="",this.breadcrumb={items:[]},this.breadcrumbItem={label:void 0,link:void 0},this.breadcrumbParams={},this.componentsSize="medium",this.customLiterals=void 0,this.literals="",this.properties=[],this.title="PO Page Edit",this.subtitle="";}save(){this.action="Save";}saveNew(){this.action="Save and new";}static \u0275fac=function(r){return new(r||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-page-edit-labs"]],standalone:false,decls:34,vars:21,consts:[["formBreadcrumbFavorite","ngForm"],["formBreadcrumbItems","ngForm"],["formBreadcrumbParams","ngForm"],[3,"p-cancel","p-save","p-save-new","p-breadcrumb","p-components-size","p-disable-submit","p-literals","p-title","p-subtitle"],[1,"po-row"],["p-label","Action",1,"po-md-12",3,"p-value"],["name","title","p-label","Title",1,"po-md-6",3,"ngModelChange","ngModel"],["name","subtitle","p-label","Subtitle",1,"po-md-6",3,"ngModelChange","ngModel"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Components size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","breadcrumbFavorite","p-clean","","p-help","https://po-sample-api.onrender.com/v1/favorite","p-label","Breadcrumb favorite",1,"po-md-6",3,"ngModelChange","ngModel"],["name","breadcrumbItemLabel","p-clean","","p-label","Breadcrumb item label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","breadcrumbItemLink","p-clean","","p-label","Breadcrumb item link","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add breadcrumb item",1,"po-md-6","po-lg-3",3,"p-click","p-disabled"],["name","breadcrumbParamsProperty","p-clean","","p-label","Breadcrumb params property","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","breadcrumbParamsValue","p-clean","","p-label","Breadcrumb params value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add breadcrumb params",1,"po-md-6","po-lg-3",3,"p-click","p-disabled"],["name","literals","p-help",'Ex.: {"cancel": "Voltar", "save": "Confirmar", "saveNew": "Confirmar e criar um novo"}',"p-label","Literals",1,"po-md-12","po-lg-6",3,"ngModelChange","p-change","ngModel"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(r,i){if(r&1){let p=Dx();Il(0,"po-page-edit",3),ft("p-cancel",function(){return i.cancel()})("p-save",function(){return i.save()})("p-save-new",function(){return i.saveNew()}),Il(1,"div",4),zl(2,"po-info",5),og(),zl(3,"po-divider"),Il(4,"form")(5,"div",4)(6,"po-input",6),ww("ngModelChange",function(a){return Xy(p),eN(i.title,a)||(i.title=a),Qy(a)}),og(),QA(),Il(7,"po-input",7),ww("ngModelChange",function(a){return Xy(p),eN(i.subtitle,a)||(i.subtitle=a),Qy(a)}),og(),QA(),Il(8,"po-checkbox-group",8),ww("ngModelChange",function(a){return Xy(p),eN(i.properties,a)||(i.properties=a),Qy(a)}),og(),QA(),Il(9,"po-radio-group",9),ww("ngModelChange",function(a){return Xy(p),eN(i.componentsSize,a)||(i.componentsSize=a),Qy(a)}),og(),QA(),og(),zl(10,"po-divider"),Il(11,"form",null,0)(13,"div",4)(14,"po-input",10),ww("ngModelChange",function(a){return Xy(p),eN(i.breadcrumb.favorite,a)||(i.breadcrumb.favorite=a),Qy(a)}),og(),QA(),og()(),Il(15,"form",null,1)(17,"div",4)(18,"po-input",11),ww("ngModelChange",function(a){return Xy(p),eN(i.breadcrumbItem.label,a)||(i.breadcrumbItem.label=a),Qy(a)}),og(),QA(),Il(19,"po-input",12),ww("ngModelChange",function(a){return Xy(p),eN(i.breadcrumbItem.link,a)||(i.breadcrumbItem.link=a),Qy(a)}),og(),QA(),og(),Il(20,"div",4)(21,"po-button",13),ft("p-click",function(){return i.addBreadcrumbItem()}),og()()(),zl(22,"po-divider"),Il(23,"form",null,2)(25,"div",4)(26,"po-input",14),ww("ngModelChange",function(a){return Xy(p),eN(i.breadcrumbParams.property,a)||(i.breadcrumbParams.property=a),Qy(a)}),og(),QA(),Il(27,"po-input",15),ww("ngModelChange",function(a){return Xy(p),eN(i.breadcrumbParams.value,a)||(i.breadcrumbParams.value=a),Qy(a)}),og(),QA(),og(),Il(28,"div",4)(29,"po-button",16),ft("p-click",function(){return i.addBreadcrumbParam()}),og()()(),Il(30,"div",4)(31,"po-input",17),ww("ngModelChange",function(a){return Xy(p),eN(i.literals,a)||(i.literals=a),Qy(a)}),ft("p-change",function(){return i.changeLiterals()}),og(),QA(),og(),Il(32,"div",4)(33,"po-button",18),ft("p-click",function(){return i.restore()}),og()()()();}if(r&2){let p=Ax(16),s=Ax(24);nw("p-breadcrumb",i.breadcrumb)("p-components-size",i.componentsSize)("p-disable-submit",i.properties.includes("disableSubmit"))("p-literals",i.customLiterals)("p-title",i.title)("p-subtitle",i.subtitle),Lp(2),nw("p-value",i.action),Lp(4),Ew("ngModel",i.title),e0(),Lp(),Ew("ngModel",i.subtitle),e0(),Lp(),Ew("ngModel",i.properties),nw("p-options",i.propertiesOptions),e0(),Lp(),Ew("ngModel",i.componentsSize),nw("p-options",i.componentsSizeOptions),e0(),Lp(5),Ew("ngModel",i.breadcrumb.favorite),e0(),Lp(4),Ew("ngModel",i.breadcrumbItem.label),e0(),Lp(),Ew("ngModel",i.breadcrumbItem.link),e0(),Lp(2),nw("p-disabled",p.invalid),Lp(5),Ew("ngModel",i.breadcrumbParams.property),e0(),Lp(),Ew("ngModel",i.breadcrumbParams.value),e0(),Lp(2),nw("p-disabled",s.invalid),Lp(2),Ew("ngModel",i.literals),e0();}},dependencies:[G9,$9,z9,mk,hk,Qt,mv,C3,O3,Dde,Yhe,dNe],encapsulation:2,changeDetection:1})}return o})();var ye=o=>({"docs-sample-code-tabs":o}),ue=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-page-edit-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Page Edit Labs"),og(),Il(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-page-edit-labs/sample-po-page-edit-labs.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-page-edit
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
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-page-edit-labs/sample-po-page-edit-labs.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-page-edit-labs"),og(),zl(23,"hr")),r&2&&(Lp(5),Ux("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,ye,i.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,ce],encapsulation:2})}return o})();var xe=["formEditUser"],ge=(()=>{class o{route=f(En);poDialog=f(Vde);poNotification=f(Yp);formEditUser;birthDate;email;fathersName;genre;graduation;mothersName;name;nationality;nickname;placeOfBirth;userId;breadcrumb={items:[{label:"Home",action:this.beforeRedirect.bind(this)},{label:"User Edit"}]};ngOnInit(){this.initialize();}cancel(){this.initialize();}initialize(){this.birthDate=new Date(1978,11,26),this.email="john.doe@po-ui.com.br",this.fathersName="Mike Doe",this.genre="male",this.graduation="College Degree",this.mothersName="Jane Doe",this.name="John Doe",this.nationality="USA",this.nickname="John",this.placeOfBirth="Colorado",this.userId=122635;}save(){this.poNotification.success("Save successfully");}beforeRedirect(d){this.formEditUser.valid?this.route.navigate(["/"]):this.poDialog.confirm({title:`Confirm redirect to ${d}`,message:"There is data that has not been saved yet. Are you sure you want to quit?",confirm:()=>this.route.navigate(["/"])});}static \u0275fac=function(r){return new(r||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-page-edit-user"]],viewQuery:function(r,i){if(r&1&&Gl(xe,7),r&2){let p;co(p=lo())&&(i.formEditUser=p.first);}},standalone:false,decls:18,vars:13,consts:[["formEditUser","ngForm"],["p-title","User Edit","p-subtitle","Fields marked with <b>*</b> are <u>required</u>",3,"p-cancel","p-save","p-breadcrumb","p-disable-submit"],[1,"po-row"],["name","userId","p-clean","","p-label","User ID","p-required","",1,"po-md-4",3,"ngModelChange","ngModel"],["name","email","p-clean","","p-label","Email","p-required","",1,"po-md-4",3,"ngModelChange","ngModel"],["name","name","p-clean","","p-label","Name","p-required","",1,"po-md-4",3,"ngModelChange","ngModel"],["name","nickname","p-clean","","p-label","Nickname",1,"po-md-4",3,"ngModelChange","ngModel"],["name","birthDate","p-clean","","p-label","Birth Date",1,"po-md-4",3,"ngModelChange","ngModel"],["name","genre","p-clean","","p-label","Genre",1,"po-md-4",3,"ngModelChange","ngModel"],["name","nationality","p-clean","","p-label","Nationality",1,"po-md-4",3,"ngModelChange","ngModel"],["name","placeOfBirth","p-clean","","p-label","Place Of Birth",1,"po-md-4",3,"ngModelChange","ngModel"],["name","graduation","p-clean","","p-label","Graduation",1,"po-md-4",3,"ngModelChange","ngModel"],["name","fathersName","p-clean","","p-label","Father's Name",1,"po-md-4",3,"ngModelChange","ngModel"],["name","mothersName","p-clean","","p-label","Mother's Name",1,"po-md-4",3,"ngModelChange","ngModel"]],template:function(r,i){if(r&1){let p=Dx();Il(0,"po-page-edit",1),ft("p-cancel",function(){return i.cancel()})("p-save",function(){return i.save()}),Il(1,"form",null,0)(3,"div",2)(4,"po-number",3),ww("ngModelChange",function(a){return Xy(p),eN(i.userId,a)||(i.userId=a),Qy(a)}),og(),QA(),Il(5,"po-email",4),ww("ngModelChange",function(a){return Xy(p),eN(i.email,a)||(i.email=a),Qy(a)}),og(),QA(),Il(6,"po-input",5),ww("ngModelChange",function(a){return Xy(p),eN(i.name,a)||(i.name=a),Qy(a)}),og(),QA(),og(),Il(7,"div",2)(8,"po-input",6),ww("ngModelChange",function(a){return Xy(p),eN(i.nickname,a)||(i.nickname=a),Qy(a)}),og(),QA(),Il(9,"po-datepicker",7),ww("ngModelChange",function(a){return Xy(p),eN(i.birthDate,a)||(i.birthDate=a),Qy(a)}),og(),QA(),Il(10,"po-input",8),ww("ngModelChange",function(a){return Xy(p),eN(i.genre,a)||(i.genre=a),Qy(a)}),og(),QA(),og(),Il(11,"div",2)(12,"po-input",9),ww("ngModelChange",function(a){return Xy(p),eN(i.nationality,a)||(i.nationality=a),Qy(a)}),og(),QA(),Il(13,"po-input",10),ww("ngModelChange",function(a){return Xy(p),eN(i.placeOfBirth,a)||(i.placeOfBirth=a),Qy(a)}),og(),QA(),Il(14,"po-input",11),ww("ngModelChange",function(a){return Xy(p),eN(i.graduation,a)||(i.graduation=a),Qy(a)}),og(),QA(),og(),Il(15,"div",2)(16,"po-input",12),ww("ngModelChange",function(a){return Xy(p),eN(i.fathersName,a)||(i.fathersName=a),Qy(a)}),og(),QA(),Il(17,"po-input",13),ww("ngModelChange",function(a){return Xy(p),eN(i.mothersName,a)||(i.mothersName=a),Qy(a)}),og(),QA(),og()()();}if(r&2){let p=Ax(2);nw("p-breadcrumb",i.breadcrumb)("p-disable-submit",p.invalid),Lp(4),Ew("ngModel",i.userId),e0(),Lp(),Ew("ngModel",i.email),e0(),Lp(),Ew("ngModel",i.name),e0(),Lp(2),Ew("ngModel",i.nickname),e0(),Lp(),Ew("ngModel",i.birthDate),e0(),Lp(),Ew("ngModel",i.genre),e0(),Lp(2),Ew("ngModel",i.nationality),e0(),Lp(),Ew("ngModel",i.placeOfBirth),e0(),Lp(),Ew("ngModel",i.graduation),e0(),Lp(2),Ew("ngModel",i.fathersName),e0(),Lp(),Ew("ngModel",i.mothersName),e0();}},dependencies:[G9,$9,z9,mk,hk,Ede,kz,O3,Hhe,dNe],encapsulation:2,changeDetection:1})}return o})();var Be=o=>({"docs-sample-code-tabs":o}),be=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-page-edit-user-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Page Edit - User"),og(),Il(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-page-edit-user/sample-po-page-edit-user.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-page-edit
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
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-page-edit-user/sample-po-page-edit-user.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-page-edit-user"),og(),zl(23,"hr")),r&2&&(Lp(5),Ux("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,Be,i.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,ge],encapsulation:2})}return o})();var Ee=(()=>{class o{static \u0275fac=function(r){return new(r||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-page-edit-doc"]],standalone:false,decls:605,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","PoBreadcrumb"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","PoPageEditLiterals"],["href","/documentation/po-i18n"],[1,"language-typescript"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["href","/guides/getting-started"],["pan","",1,"docs-api-property-type","Array<PoBreadcrumbItem>"],["pan","",1,"docs-api-property-type","object"]],template:function(r,i){r&1&&(Il(0,"div",0)(1,"p",1)(2,"code"),Qx(3,"import { PoPageModule } from '@po-ui/ng-components';"),og()(),Il(4,"div",2)(5,"p"),Qx(6,"M\xF3dulo respons\xE1vel pelos componentes de estrutura de p\xE1gina: "),Il(7,"code"),Qx(8,"po-page-default"),og(),Qx(9,", "),Il(10,"code"),Qx(11,"po-page-detail"),og(),Qx(12,`,
`),Il(13,"code"),Qx(14,"po-page-edit"),og(),Qx(15,", "),Il(16,"code"),Qx(17,"po-page-list"),og(),Qx(18," e "),Il(19,"code"),Qx(20,"po-page-slide"),og(),Qx(21,"."),og()(),Il(22,"h3",3),Qx(23,"Componente"),og(),Il(24,"h4",4)(25,"code",5),Qx(26,"PoPageEditComponent"),og()(),Il(27,"div",2)(28,"p"),Qx(29,"O componente "),Il(30,"strong"),Qx(31,"po-page-edit"),og(),Qx(32,` \xE9 utilizado como container principal para tela de edi\xE7\xE3o ou adi\xE7\xE3o de um
registro, tendo a possibilidade de usar as a\xE7\xF5es de "Salvar", "Salvar e Novo" e "Cancelar".`),og(),Il(33,"p"),Qx(34,'Os bot\xF5es "Salvar" e "Salvar e Novo" podem ser habilitados/desabilitados utilizando a propriedade '),Il(35,"code"),Qx(36,"p-disable-submit"),og(),Qx(37,`.
Esta propriedade pode ser utilizada para desabilitar os bot\xF5es caso exista um formul\xE1rio inv\xE1lido na p\xE1gina ou alguma
regra de neg\xF3cio n\xE3o tenha sido atendida.`),og(),Il(38,"h4"),Qx(39,"Tokens customiz\xE1veis"),og(),Il(40,"blockquote")(41,"p"),Qx(42,"Para maiores informa\xE7\xF5es, acesse o guia "),Il(43,"a",6),Qx(44,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),Qx(45,"."),og()(),Il(46,"table")(47,"thead")(48,"tr")(49,"th"),Qx(50,"Propriedade"),og(),Il(51,"th"),Qx(52,"Descri\xE7\xE3o"),og(),Il(53,"th"),Qx(54,"Valor Padr\xE3o"),og()()(),Il(55,"tbody")(56,"tr")(57,"td")(58,"strong"),Qx(59,"Header"),og()(),zl(60,"td")(61,"td"),og(),Il(62,"tr")(63,"td")(64,"code"),Qx(65,"--padding"),og()(),Il(66,"td"),Qx(67,"Espa\xE7amento do header"),og(),Il(68,"td")(69,"code"),Qx(70,"var(--spacing-xs) var(--spacing-md)"),og()()(),Il(71,"tr")(72,"td")(73,"code"),Qx(74,"--gap"),og()(),Il(75,"td"),Qx(76,"Espa\xE7amento entre os breadcrumbs e o t\xEDtulo"),og(),Il(77,"td")(78,"code"),Qx(79,"var(--spacing-md)"),og()()(),Il(80,"tr")(81,"td")(82,"code"),Qx(83,"--gap-actions"),og()(),Il(84,"td"),Qx(85,"Espa\xE7amento entre as a\xE7\xF5es"),og(),Il(86,"td")(87,"code"),Qx(88,"var(--spacing-xs)"),og()()(),Il(89,"tr")(90,"td")(91,"code"),Qx(92,"--font-family"),og()(),Il(93,"td"),Qx(94,"Fam\xEDlia tipogr\xE1fica do t\xEDtulo"),og(),Il(95,"td")(96,"code"),Qx(97,"var(--font-family-theme)"),og()()(),Il(98,"tr")(99,"td")(100,"strong"),Qx(101,"Content"),og()(),zl(102,"td")(103,"td"),og(),Il(104,"tr")(105,"td")(106,"code"),Qx(107,"--padding-content"),og()(),Il(108,"td"),Qx(109,"Espa\xE7amento do conte\xFAdo"),og(),Il(110,"td")(111,"code"),Qx(112,"var(--spacing-xs) var(--spacing-sm)"),og()()()()()(),Il(113,"div",7)(114,"h4",8),Qx(115,"Seletor"),og(),Il(116,"pre",9),Qx(117,`<po-page-edit
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
`),og()(),Il(118,"h4",10),Qx(119,"Propriedades"),og(),Il(120,"table",11)(121,"tr",12)(122,"th",13),Qx(123,"Nome"),og(),Il(124,"th",13),Qx(125,"Tipo"),og(),Il(126,"th",13),Qx(127,"Padr\xE3o"),og(),Il(128,"th",13),Qx(129,"Descri\xE7\xE3o"),og()(),Il(130,"tr",14)(131,"td",15)(132,"div",16)(133,"span",17),Qx(134," p-breadcrumb"),zl(135,"br"),og()()(),Il(136,"td",18)(137,"code",19),Qx(138,"PoBreadcrumb"),og()(),Il(139,"td",20),Qx(140,"-"),og(),Il(141,"td",21)(142,"em")(143,"strong"),Qx(144,"(opcional)"),og()(),Il(145,"p"),Qx(146,"Objeto com propriedades do breadcrumb."),og()()(),Il(147,"tr",14)(148,"td",15)(149,"div",22)(150,"span",23),Qx(151," (p-cancel)"),zl(152,"br"),og()()(),Il(153,"td",18)(154,"code",24),Qx(155,"EventEmitter"),og()(),Il(156,"td",20),Qx(157,"-"),og(),Il(158,"td",21)(159,"p"),Qx(160,'Evento que ser\xE1 disparado ao clicar no bot\xE3o de "Cancelar".'),og(),Il(161,"pre")(162,"code"),Qx(163,`<po-page-edit (p-cancel)="myCancelFunction()">
</po-page-edit>
`),og()(),Il(164,"blockquote")(165,"p"),Qx(166,'Caso n\xE3o utilizar esta propriedade, o bot\xE3o de "Cancelar" n\xE3o ser\xE1 exibido.'),og()()()(),Il(167,"tr",14)(168,"td",15)(169,"div",16)(170,"span",17),Qx(171," p-components-size"),zl(172,"br"),og()()(),Il(173,"td",18)(174,"code",25),Qx(175,"string"),og()(),Il(176,"td",20)(177,"p")(178,"code"),Qx(179,"medium"),og()()(),Il(180,"td",21)(181,"em")(182,"strong"),Qx(183,"(opcional)"),og()(),Il(184,"p"),Qx(185,"Define o tamanho dos componentes de formul\xE1rio no template:"),og(),Il(186,"ul")(187,"li")(188,"code"),Qx(189,"small"),og(),Qx(190,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),og(),Il(191,"li")(192,"code"),Qx(193,"medium"),og(),Qx(194,": aplica a medida medium de cada componente."),og()(),Il(195,"blockquote")(196,"p"),Qx(197,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Il(198,"code"),Qx(199,"medium"),og(),Qx(200,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Il(201,"a",26),Qx(202,"po-theme"),og(),Qx(203,"."),og()()()(),Il(204,"tr",14)(205,"td",15)(206,"div",16)(207,"span",17),Qx(208," p-disable-submit"),zl(209,"br"),og()()(),Il(210,"td",18)(211,"code",27),Qx(212,"boolean"),og()(),Il(213,"td",20),Qx(214,"-"),og(),Il(215,"td",21)(216,"em")(217,"strong"),Qx(218,"(opcional)"),og()(),Il(219,"p"),Qx(220,"Desabilita bot\xF5es de submiss\xE3o (save e saveNew)"),og()()(),Il(221,"tr",14)(222,"td",15)(223,"div",16)(224,"span",17),Qx(225," p-literals"),zl(226,"br"),og()()(),Il(227,"td",18)(228,"code",28),Qx(229,"PoPageEditLiterals"),og()(),Il(230,"td",20),Qx(231,"-"),og(),Il(232,"td",21)(233,"em")(234,"strong"),Qx(235,"(opcional)"),og()(),Il(236,"p"),Qx(237,"Objeto com as literais usadas no "),Il(238,"code"),Qx(239,"po-page-edit"),og(),Qx(240,"."),og(),Il(241,"p"),Qx(242,"Existem duas maneiras de customizar o componente, passando um objeto com todas as literais dispon\xEDveis:"),og(),Il(243,"pre")(244,"code"),Qx(245,`const customLiterals: PoPageEditLiterals = {
  cancel: 'Voltar',
  save: 'Confirmar',
  saveNew: 'Confirmar e criar um novo'
};
`),og()(),Il(246,"p"),Qx(247,"Ou passando apenas as literais que deseja customizar:"),og(),Il(248,"pre")(249,"code"),Qx(250,`const customLiterals: PoPageEditLiterals = {
  cancel: 'Cancelar processo'
};
`),og()(),Il(251,"p"),Qx(252,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente."),og(),Il(253,"pre")(254,"code"),Qx(255,`<po-page-edit
  [p-literals]="customLiterals">
</po-page-edit>
`),og()(),Il(256,"blockquote")(257,"p"),Qx(258,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),Il(259,"a",29)(260,"code"),Qx(261,"PoI18nService"),og()(),Qx(262," ou do browser."),og()()()(),Il(263,"tr",14)(264,"td",15)(265,"div",22)(266,"span",23),Qx(267," (p-save)"),zl(268,"br"),og()()(),Il(269,"td",18)(270,"code",24),Qx(271,"EventEmitter"),og()(),Il(272,"td",20),Qx(273,"-"),og(),Il(274,"td",21)(275,"p"),Qx(276,'Evento que ser\xE1 disparado ao clicar no bot\xE3o de "Salvar".'),og(),Il(277,"pre")(278,"code"),Qx(279,`<po-page-edit (p-save)="mySaveFunction()">
</po-page-edit>
`),og()(),Il(280,"blockquote")(281,"p"),Qx(282,'Caso n\xE3o utilizar esta propriedade, o bot\xE3o de "Salvar" n\xE3o ser\xE1 exibido.'),og()()()(),Il(283,"tr",14)(284,"td",15)(285,"div",22)(286,"span",23),Qx(287," (p-save-new)"),zl(288,"br"),og()()(),Il(289,"td",18)(290,"code",24),Qx(291,"EventEmitter"),og()(),Il(292,"td",20),Qx(293,"-"),og(),Il(294,"td",21)(295,"p"),Qx(296,'Evento que ser\xE1 disparado ao clicar no bot\xE3o de "Salvar e Novo".'),og(),Il(297,"pre")(298,"code"),Qx(299,`<po-page-edit (p-save-new)="mySaveNewFunction()">
</po-page-edit>
`),og()(),Il(300,"blockquote")(301,"p"),Qx(302,'Caso n\xE3o utilizar esta propriedade, o bot\xE3o de "Salvar e Novo" n\xE3o ser\xE1 exibido.'),og()()()(),Il(303,"tr",14)(304,"td",15)(305,"div",16)(306,"span",17),Qx(307," p-subtitle"),zl(308,"br"),og()()(),Il(309,"td",18)(310,"code",25),Qx(311,"string"),og()(),Il(312,"td",20),Qx(313,"-"),og(),Il(314,"td",21)(315,"em")(316,"strong"),Qx(317,"(opcional)"),og()(),Il(318,"p"),Qx(319,"Subtitulo do Header da p\xE1gina."),og(),Il(320,"p"),Qx(321,"Suporta formata\xE7\xE3o b\xE1sica com as tags "),Il(322,"code"),Qx(323,"<b>"),og(),Qx(324," (negrito), "),Il(325,"code"),Qx(326,"<strong>"),og(),Qx(327," (negrito), "),Il(328,"code"),Qx(329,"<i>"),og(),Qx(330," (it\xE1lico), "),Il(331,"code"),Qx(332,"<em>"),og(),Qx(333,` (it\xE1lico) e
`),Il(334,"code"),Qx(335,"<u>"),og(),Qx(336," (sublinhado)."),og(),Il(337,"p"),Qx(338,"Exemplo:"),og(),Il(339,"pre")(340,"code",30),Qx(341,`subtitle = 'Fields marked with <b>*</b> are <u>required</u>';
`),og()(),Il(342,"blockquote")(343,"p"),Qx(344,"Requer que "),Il(345,"code"),Qx(346,"p-title"),og(),Qx(347," esteja definido."),og()()()(),Il(348,"tr",14)(349,"td",15)(350,"div",16)(351,"span",17),Qx(352," p-title"),zl(353,"br"),og()()(),Il(354,"td",18)(355,"code",25),Qx(356,"string"),og()(),Il(357,"td",20),Qx(358,"-"),og(),Il(359,"td",21)(360,"p"),Qx(361,"T\xEDtulo da p\xE1gina."),og()()()(),Il(362,"h3"),Qx(363,"Interfaces"),og(),Il(364,"h4",31)(365,"code",5),Qx(366,"PoBreadcrumbItem"),og()(),Il(367,"div",2)(368,"p"),Qx(369,"Interface que define cada item do componente "),Il(370,"strong"),Qx(371,"po-breadcrumb"),og(),Qx(372,"."),og()(),Il(373,"h4",10),Qx(374,"Propriedades"),og(),Il(375,"table",11)(376,"tr",12)(377,"th",13),Qx(378,"Nome"),og(),Il(379,"th",13),Qx(380,"Tipo"),og(),Il(381,"th",13),Qx(382,"Descri\xE7\xE3o"),og()(),Il(383,"tr",14)(384,"td",15)(385,"div",16)(386,"span",17),Qx(387," action"),zl(388,"br"),og()()(),Il(389,"td",18)(390,"code",32),Qx(391,"Function"),og()(),Il(392,"td",21)(393,"em")(394,"strong"),Qx(395,"(opcional)"),og()(),Il(396,"p"),Qx(397,"A\xE7\xE3o executada ao clicar no item."),og(),Il(398,"blockquote")(399,"p"),Qx(400,"A fun\xE7\xE3o atribu\xEDda a esta propriedade receber\xE1 o "),Il(401,"em"),Qx(402,"label"),og(),Qx(403," do item como par\xE2metro para execu\xE7\xE3o."),og()()()(),Il(404,"tr",14)(405,"td",15)(406,"div",16)(407,"span",17),Qx(408," label"),zl(409,"br"),og()()(),Il(410,"td",18)(411,"code",25),Qx(412,"string"),og()(),Il(413,"td",21)(414,"p"),Qx(415,"R\xF3tulo do item."),og()()(),Il(416,"tr",14)(417,"td",15)(418,"div",16)(419,"span",17),Qx(420," link"),zl(421,"br"),og()()(),Il(422,"td",18)(423,"code",25),Qx(424,"string"),og()(),Il(425,"td",21)(426,"em")(427,"strong"),Qx(428,"(opcional)"),og()(),Il(429,"p"),Qx(430,"Url do item."),og(),Il(431,"blockquote")(432,"p"),Qx(433,"Caso o item tamb\xE9m contenha uma "),Il(434,"em"),Qx(435,"action"),og(),Qx(436," definida, a prefer\xEAncia de execu\xE7\xE3o ser\xE1 do "),Il(437,"em"),Qx(438,"link"),og(),Qx(439,"."),og()(),Il(440,"blockquote")(441,"p"),Qx(442,`Para o correto funcionamento, \xE9 necess\xE1rio que haja uma rota referenciando seu valor.
`),Il(443,"strong")(444,"a",33),Qx(445,"Veja um exemplo de como criar rotas aqui"),og()(),Qx(446,"."),og()(),Il(447,"blockquote")(448,"p"),Qx(449,"Esta propriedade \xE9 necess\xE1ria para que a propriedade "),Il(450,"code"),Qx(451,"p-favorite-service"),og(),Qx(452," consiga favoritar ou desfavoritar."),og()()()()(),Il(453,"h4",31)(454,"code",5),Qx(455,"PoBreadcrumb"),og()(),Il(456,"div",2)(457,"p"),Qx(458,"Interface que define o "),Il(459,"code"),Qx(460,"po-breadcrumb"),og(),Qx(461,"."),og()(),Il(462,"h4",10),Qx(463,"Propriedades"),og(),Il(464,"table",11)(465,"tr",12)(466,"th",13),Qx(467,"Nome"),og(),Il(468,"th",13),Qx(469,"Tipo"),og(),Il(470,"th",13),Qx(471,"Descri\xE7\xE3o"),og()(),Il(472,"tr",14)(473,"td",15)(474,"div",16)(475,"span",17),Qx(476," favorite"),zl(477,"br"),og()()(),Il(478,"td",18)(479,"code",25),Qx(480,"string"),og()(),Il(481,"td",21)(482,"em")(483,"strong"),Qx(484,"(opcional)"),og()(),Il(485,"p"),Qx(486,"Permite definir uma URL para favoritar ou desfavoritar."),og(),Il(487,"blockquote")(488,"p"),Qx(489,"Para maiores informa\xE7\xF5es verificar a propriedade "),Il(490,"code"),Qx(491,"p-favorite-service"),og(),Qx(492," do componente "),Il(493,"code"),Qx(494,"po-breadcrumb"),og(),Qx(495,"."),og()()()(),Il(496,"tr",14)(497,"td",15)(498,"div",16)(499,"span",17),Qx(500," items"),zl(501,"br"),og()()(),Il(502,"td",18)(503,"code",34),Qx(504,"Array<PoBreadcrumbItem>"),og()(),Il(505,"td",21)(506,"p"),Qx(507,"Lista de itens do "),Il(508,"em"),Qx(509,"breadcrumb"),og(),Qx(510,"."),og(),Il(511,"p")(512,"strong"),Qx(513,"Exemplo:"),og()(),Il(514,"pre")(515,"code"),Qx(516,`{ label: 'Po Portal', link: 'portal' }
`),og()()()(),Il(517,"tr",14)(518,"td",15)(519,"div",16)(520,"span",17),Qx(521," params"),zl(522,"br"),og()()(),Il(523,"td",18)(524,"code",35),Qx(525,"object"),og()(),Il(526,"td",21)(527,"em")(528,"strong"),Qx(529,"(opcional)"),og()(),Il(530,"p"),Qx(531,"Objeto que possibilita o envio de par\xE2metros adicionais \xE0 requisi\xE7\xE3o."),og()()()(),Il(532,"h4",31)(533,"code",5),Qx(534,"PoPageEditLiterals"),og()(),Il(535,"div",2)(536,"p"),Qx(537,"Interface para defini\xE7\xE3o das literais usadas no "),Il(538,"code"),Qx(539,"po-page-edit"),og(),Qx(540,"."),og()(),Il(541,"h4",10),Qx(542,"Propriedades"),og(),Il(543,"table",11)(544,"tr",12)(545,"th",13),Qx(546,"Nome"),og(),Il(547,"th",13),Qx(548,"Tipo"),og(),Il(549,"th",13),Qx(550,"Descri\xE7\xE3o"),og()(),Il(551,"tr",14)(552,"td",15)(553,"div",16)(554,"span",17),Qx(555," cancel"),zl(556,"br"),og()()(),Il(557,"td",18)(558,"code",25),Qx(559,"string"),og()(),Il(560,"td",21)(561,"em")(562,"strong"),Qx(563,"(opcional)"),og()(),Il(564,"p"),Qx(565,"Label da a\xE7\xE3o "),Il(566,"code"),Qx(567,"cancel"),og(),Qx(568,"."),og()()(),Il(569,"tr",14)(570,"td",15)(571,"div",16)(572,"span",17),Qx(573," save"),zl(574,"br"),og()()(),Il(575,"td",18)(576,"code",25),Qx(577,"string"),og()(),Il(578,"td",21)(579,"em")(580,"strong"),Qx(581,"(opcional)"),og()(),Il(582,"p"),Qx(583,"Label da a\xE7\xE3o "),Il(584,"code"),Qx(585,"save"),og(),Qx(586,"."),og()()(),Il(587,"tr",14)(588,"td",15)(589,"div",16)(590,"span",17),Qx(591," saveNew"),zl(592,"br"),og()()(),Il(593,"td",18)(594,"code",25),Qx(595,"string"),og()(),Il(596,"td",21)(597,"em")(598,"strong"),Qx(599,"(opcional)"),og()(),Il(600,"p"),Qx(601,"Label da a\xE7\xE3o "),Il(602,"code"),Qx(603,"saveNew"),og(),Qx(604,"."),og()()()()());},dependencies:[Ka],encapsulation:2})}return o})();var he=(()=>{class o{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(d,r){this.route=d,this.router=r;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let r=d.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:"merge"}),this.activeTab=d;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(r){return new(r||o)(C(Xn),C(En))};static \u0275cmp=Un({type:o,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Page Edit",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,i){r&1&&(Il(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return i.changeTab("doc")}),zl(3,"sample-po-page-edit-doc"),og(),Il(4,"po-tab",3),ft("p-click",function(){return i.changeTab("web")}),zl(5,"sample-po-page-edit-basic-view")(6,"sample-po-page-edit-labs-view")(7,"sample-po-page-edit-user-view"),og()()()),r&2&&(nw("p-actions",i.actions),Lp(2),nw("p-active",i.activeTab==="doc"),Lp(2),nw("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[cNe,qme,Yme,se,ue,be,Ee],encapsulation:2})}return o})();var ke=[{path:"",component:he}],Se=(()=>{class o{static \u0275fac=function(r){return new(r||o)};static \u0275mod=fe({type:o});static \u0275inj=ue$1({imports:[uL.forChild(ke),uL]})}return o})();var mt=(()=>{class o{static \u0275fac=function(r){return new(r||o)};static \u0275mod=fe({type:o});static \u0275inj=ue$1({imports:[sr,Se]})}return o})();export{mt as DocPoPageEditModule};