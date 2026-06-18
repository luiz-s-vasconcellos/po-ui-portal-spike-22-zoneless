import {f as fe$1,u as ue,s as sr,a as uL,C,c3 as Xn,E as En,U as Un,b as f,aW as Yp,w,c5 as Vde,$ as uNe,J as zl,an as DO,aH as Ka,b8 as qme,b9 as Yme,H as Il,q as Qx,R as og,a1 as ft,A as Lp,ar as Ux,au as dg,T as nw,bs as uN,aX as G9,bv as gb,aF as $9,aY as z9,aG as mk,aZ as hk,b0 as Qt,b1 as mv,c4 as C3,b4 as O3,c8 as Dde,aJ as qhe,bH as k3,c9 as Yhe,aB as Dx,aM as ww,aN as QA,bd as Ax,aO as Ew,aP as e0,bF as Ow,b6 as Yo,b7 as E3,X as we,av as Gl,aw as co,ax as lo,a3 as cNe,aD as Xy,aT as eN,aE as Qy}from'./main-QSTLMRDK.js';var be=(()=>{class s{static \u0275fac=function(r){return new(r||s)};static \u0275cmp=Un({type:s,selectors:[["sample-po-page-list-basic"]],standalone:false,decls:1,vars:0,consts:[["p-title","PO Page List"]],template:function(r,n){r&1&&zl(0,"po-page-list",0);},dependencies:[uNe],encapsulation:2,changeDetection:1})}return s})();var _e=s=>({"docs-sample-code-tabs":s}),Ee=(()=>{class s{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||s)};static \u0275cmp=Un({type:s,selectors:[["sample-po-page-list-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Page List Basic"),og(),Il(4,"a",2),ft("click",function(){return n.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-page-list-basic/sample-po-page-list-basic.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-page-list p-title="PO Page List"> </po-page-list>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-page-list-basic/sample-po-page-list-basic.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-page-list-basic',
  templateUrl: './sample-po-page-list-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageListBasicComponent {}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-page-list-basic"),og(),zl(23,"hr")),r&2&&(Lp(5),Ux("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,_e,n.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,be],encapsulation:2})}return s})();var Se=(()=>{class s{poNotification=f(Yp);action;actions;breadcrumb;breadcrumbItem;breadcrumbParams;componentsSize;customLiterals;disclaimerGroupHideRemoveAll;disclaimerGroupTitle;disclaimerHideClose;disclaimerLabel;disclaimerProperty;disclaimerValue;filterModel;literals;title;subtitle;disclaimerGroup;actionOptions=[{label:"Disabled",value:"disabled"},{label:"Separator",value:"separator"},{label:"Selected",value:"selected"},{label:"Visible",value:"visible"}];componentsSizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];filter={action:this.showAction.bind(this),advancedAction:this.showAdvanceAction.bind(this)};iconOptions=[{value:"an an-newspaper",label:"an an-newspaper"},{value:"an an-magnifying-glass",label:"an an-magnifying-glass"},{value:"an an-globe",label:"an an-globe"},{value:"fa fa-podcast",label:"fa fa-podcast"}];typeOptions=[{label:"Danger",value:"danger"},{label:"Default",value:"default"}];ngOnInit(){this.restore();}addAction(l){let r=Object.assign({},l);r.action=r.action?this.showAction.bind(this,r.action):void 0,this.actions=[...this.actions,r],this.restoreActionForm();}addBreadcrumbItem(){this.breadcrumb.items=this.breadcrumb.items.concat([this.breadcrumbItem]),this.breadcrumbItem={label:void 0,link:void 0};}addBreadcrumbParam(){let l={[this.breadcrumbParams.property]:this.breadcrumbParams.value};this.breadcrumb.params?this.breadcrumb.params=Object.assign(this.breadcrumb.params,l):this.breadcrumb.params=l,this.breadcrumbParams={};}addDisclaimer(){this.disclaimerGroup.disclaimers=[...this.disclaimerGroup.disclaimers,{label:this.disclaimerLabel,property:this.disclaimerProperty,hideClose:this.disclaimerHideClose,value:this.disclaimerValue}],this.disclaimerGroup=Object.assign({},this.disclaimerGroup),this.restoreDisclaimerModel();}addDisclaimerGroupParam(l,r){this.disclaimerGroup=Object.assign({},this.disclaimerGroup,{title:l,hideRemoveAll:r});}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals);}catch(l){this.customLiterals=void 0;}}onChangeDisclaimerGroupHideRemoveAll(l){this.addDisclaimerGroupParam(this.disclaimerGroupTitle,l);}restore(){this.actions=[],this.breadcrumb={items:[]},this.breadcrumbItem={label:void 0,link:void 0},this.breadcrumbParams={},this.componentsSize="medium",this.customLiterals=void 0,this.disclaimerGroup={title:this.disclaimerGroupTitle,disclaimers:[],hideRemoveAll:this.disclaimerGroupHideRemoveAll},this.disclaimerGroupHideRemoveAll=false,this.disclaimerGroupTitle=void 0,this.filterModel=void 0,this.filter.placeholder=void 0,this.filter.width=void 0,this.literals="",this.title="PO Page List",this.subtitle="",this.restoreDisclaimerModel(),this.restoreActionForm();}restoreActionForm(){this.action={label:void 0,visible:null};}restoreDisclaimerModel(){this.disclaimerHideClose=void 0,this.disclaimerLabel=void 0,this.disclaimerProperty=void 0,this.disclaimerValue=void 0;}showAction(l){this.poNotification.success(`Action clicked: ${l}`);}showAdvanceAction(l){this.poNotification.success(`Advance Action clicked: ${l}`);}static \u0275fac=function(r){return new(r||s)};static \u0275cmp=Un({type:s,selectors:[["sample-po-page-list-labs"]],standalone:false,decls:60,vars:40,consts:[["formAction","ngForm"],["formBreadcrumbFavorite","ngForm"],["formBreadcrumbItems","ngForm"],["formBreadcrumbParams","ngForm"],["formDisclaimers","ngForm"],["form","ngForm"],[3,"p-actions","p-breadcrumb","p-components-size","p-disclaimer-group","p-filter","p-literals","p-title","p-subtitle"],["p-label","Model",3,"p-value"],[1,"po-row"],["name","actionAction","p-clean","","p-label","Action",1,"po-md-6",3,"ngModelChange","ngModel"],["name","actionLabel","p-label","Label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","actionURL","p-label","URL",1,"po-md-6",3,"ngModelChange","ngModel"],["name","type","p-label","Type",1,"po-lg-3","po-md-6",3,"ngModelChange","ngModel","p-options"],["name","icon","p-label","Icon",1,"po-lg-3","po-md-6",3,"ngModelChange","ngModel","p-options"],["name","action","p-columns","4","p-indeterminate","","p-label","Action properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Add Action",1,"po-lg-3","po-md-4",3,"p-click","p-disabled"],["name","breadcrumbFavorite","p-clean","","p-help","https://po-sample-api.onrender.com/v1/favorite","p-label","Breadcrumb favorite",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel"],["name","breadcrumbItemLabel","p-clean","","p-label","Breadcrumb item label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","breadcrumbItemLink","p-clean","","p-label","Breadcrumb item link","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add breadcrumb item",1,"po-lg-3","po-md-4",3,"p-click","p-disabled"],["name","breadcrumbParamsProperty","p-clean","","p-label","Breadcrumb params property","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","breadcrumbParamsValue","p-clean","","p-label","Breadcrumb params value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add breadcrumb params",1,"po-lg-3","po-md-4",3,"p-click","p-disabled"],["name","disclaimerGroupTitle","p-clean","","p-label","Disclaimer group title",1,"po-md-6",3,"ngModelChange","p-change-model","ngModel"],["name","disclaimerGroupHideRemoveAll","p-label","Disclaimer group hide remove all","ngDefaultControl","",1,"po-md-6",3,"ngModelChange","p-change","ngModel"],["name","disclaimerLabel","p-clean","","p-label","Disclaimer label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","disclaimerProperty","p-clean","","p-label","Disclaimer property",1,"po-md-6",3,"ngModelChange","ngModel"],["name","disclaimerValue","p-clean","","p-label","Disclaimer value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","disclaimerHideClose","p-label","Disclaimer hide close",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add disclaimer",1,"po-lg-3","po-md-4",3,"p-click","p-disabled"],["name","title","p-label","Title","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","subtitle","p-label","Subtitle",1,"po-md-6",3,"ngModelChange","ngModel"],["name","filterPlaceholder","p-label","Filter placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","filterWidth","p-label","Filter width",1,"po-md-6",3,"ngModelChange","ngModel"],["name","literals","p-help",'Ex.: {"otherActions": "Mais a\xE7\xF5es"}',"p-label","Literals",1,"po-md-12","po-lg-6",3,"ngModelChange","p-change","ngModel"],["name","size","p-columns","4","p-label","Components size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(r,n){if(r&1){let d=Dx();Il(0,"po-page-list",6),zl(1,"po-divider")(2,"po-info",7),og(),zl(3,"po-divider"),Il(4,"form",null,0)(6,"div",8)(7,"po-input",9),ww("ngModelChange",function(a){return Xy(d),eN(n.action.action,a)||(n.action.action=a),Qy(a)}),og(),QA(),Il(8,"po-input",10),ww("ngModelChange",function(a){return Xy(d),eN(n.action.label,a)||(n.action.label=a),Qy(a)}),og(),QA(),Il(9,"po-input",11),ww("ngModelChange",function(a){return Xy(d),eN(n.action.url,a)||(n.action.url=a),Qy(a)}),og(),QA(),Il(10,"po-select",12),ww("ngModelChange",function(a){return Xy(d),eN(n.action.type,a)||(n.action.type=a),Qy(a)}),og(),QA(),Il(11,"po-select",13),ww("ngModelChange",function(a){return Xy(d),eN(n.action.icon,a)||(n.action.icon=a),Qy(a)}),og(),QA(),Il(12,"po-checkbox-group",14),ww("ngModelChange",function(a){return Xy(d),eN(n.action,a)||(n.action=a),Qy(a)}),og(),QA(),og(),Il(13,"div",8)(14,"po-button",15),ft("p-click",function(){return n.addAction(n.action)}),og()()(),zl(15,"po-divider"),Il(16,"form",null,1)(18,"div",8)(19,"po-input",16),ww("ngModelChange",function(a){return Xy(d),eN(n.breadcrumb.favorite,a)||(n.breadcrumb.favorite=a),Qy(a)}),og(),QA(),og()(),Il(20,"form",null,2)(22,"div",8)(23,"po-input",17),ww("ngModelChange",function(a){return Xy(d),eN(n.breadcrumbItem.label,a)||(n.breadcrumbItem.label=a),Qy(a)}),og(),QA(),Il(24,"po-input",18),ww("ngModelChange",function(a){return Xy(d),eN(n.breadcrumbItem.link,a)||(n.breadcrumbItem.link=a),Qy(a)}),og(),QA(),og(),Il(25,"div",8)(26,"po-button",19),ft("p-click",function(){return n.addBreadcrumbItem()}),og()()(),zl(27,"po-divider"),Il(28,"form",null,3)(30,"div",8)(31,"po-input",20),ww("ngModelChange",function(a){return Xy(d),eN(n.breadcrumbParams.property,a)||(n.breadcrumbParams.property=a),Qy(a)}),og(),QA(),Il(32,"po-input",21),ww("ngModelChange",function(a){return Xy(d),eN(n.breadcrumbParams.value,a)||(n.breadcrumbParams.value=a),Qy(a)}),og(),QA(),og(),Il(33,"div",8)(34,"po-button",22),ft("p-click",function(){return n.addBreadcrumbParam()}),og()()(),zl(35,"po-divider"),Il(36,"div",8)(37,"po-input",23),ww("ngModelChange",function(a){return Xy(d),eN(n.disclaimerGroupTitle,a)||(n.disclaimerGroupTitle=a),Qy(a)}),ft("p-change-model",function(){return n.addDisclaimerGroupParam(n.disclaimerGroupTitle,n.disclaimerGroupHideRemoveAll)}),og(),QA(),Il(38,"po-switch",24),ww("ngModelChange",function(a){return Xy(d),eN(n.disclaimerGroupHideRemoveAll,a)||(n.disclaimerGroupHideRemoveAll=a),Qy(a)}),ft("p-change",function(a){return n.onChangeDisclaimerGroupHideRemoveAll(a)}),og(),QA(),og(),Il(39,"form",null,4)(41,"div",8)(42,"po-input",25),ww("ngModelChange",function(a){return Xy(d),eN(n.disclaimerLabel,a)||(n.disclaimerLabel=a),Qy(a)}),og(),QA(),Il(43,"po-input",26),ww("ngModelChange",function(a){return Xy(d),eN(n.disclaimerProperty,a)||(n.disclaimerProperty=a),Qy(a)}),og(),QA(),og(),Il(44,"div",8)(45,"po-input",27),ww("ngModelChange",function(a){return Xy(d),eN(n.disclaimerValue,a)||(n.disclaimerValue=a),Qy(a)}),og(),QA(),Il(46,"po-switch",28),ww("ngModelChange",function(a){return Xy(d),eN(n.disclaimerHideClose,a)||(n.disclaimerHideClose=a),Qy(a)}),og(),QA(),og(),Il(47,"div",8)(48,"po-button",29),ft("p-click",function(){return n.addDisclaimer()}),og()()(),zl(49,"po-divider"),Il(50,"form",null,5)(52,"po-input",30),ww("ngModelChange",function(a){return Xy(d),eN(n.title,a)||(n.title=a),Qy(a)}),og(),QA(),Il(53,"po-input",31),ww("ngModelChange",function(a){return Xy(d),eN(n.subtitle,a)||(n.subtitle=a),Qy(a)}),og(),QA(),Il(54,"po-input",32),ww("ngModelChange",function(a){return Xy(d),eN(n.filter.placeholder,a)||(n.filter.placeholder=a),Qy(a)}),og(),QA(),Il(55,"po-input",33),ww("ngModelChange",function(a){return Xy(d),eN(n.filter.width,a)||(n.filter.width=a),Qy(a)}),og(),QA(),Il(56,"po-input",34),ww("ngModelChange",function(a){return Xy(d),eN(n.literals,a)||(n.literals=a),Qy(a)}),ft("p-change",function(){return n.changeLiterals()}),og(),QA(),Il(57,"po-radio-group",35),ww("ngModelChange",function(a){return Xy(d),eN(n.componentsSize,a)||(n.componentsSize=a),Qy(a)}),og(),QA(),Il(58,"div",8)(59,"po-button",36),ft("p-click",function(){return n.restore()}),og()()();}if(r&2){let d=Ax(5),p=Ax(21),a=Ax(29),Le=Ax(40);nw("p-actions",n.actions)("p-breadcrumb",n.breadcrumb)("p-components-size",n.componentsSize)("p-disclaimer-group",n.disclaimerGroup)("p-filter",n.filter)("p-literals",n.customLiterals)("p-title",n.title)("p-subtitle",n.subtitle),Lp(2),nw("p-value",n.filterModel),Lp(5),Ew("ngModel",n.action.action),e0(),Lp(),Ew("ngModel",n.action.label),e0(),Lp(),Ew("ngModel",n.action.url),e0(),Lp(),Ew("ngModel",n.action.type),nw("p-options",n.typeOptions),e0(),Lp(),Ew("ngModel",n.action.icon),nw("p-options",n.iconOptions),e0(),Lp(),Ew("ngModel",n.action),nw("p-options",n.actionOptions),e0(),Lp(2),nw("p-disabled",d.form.invalid),Lp(5),Ew("ngModel",n.breadcrumb.favorite),e0(),Lp(4),Ew("ngModel",n.breadcrumbItem.label),e0(),Lp(),Ew("ngModel",n.breadcrumbItem.link),e0(),Lp(2),nw("p-disabled",p.invalid),Lp(5),Ew("ngModel",n.breadcrumbParams.property),e0(),Lp(),Ew("ngModel",n.breadcrumbParams.value),e0(),Lp(2),nw("p-disabled",a.invalid),Lp(3),Ew("ngModel",n.disclaimerGroupTitle),e0(),Lp(),Ew("ngModel",n.disclaimerGroupHideRemoveAll),e0(),Lp(4),Ew("ngModel",n.disclaimerLabel),e0(),Lp(),Ew("ngModel",n.disclaimerProperty),e0(),Lp(2),Ew("ngModel",n.disclaimerValue),e0(),Lp(),Ew("ngModel",n.disclaimerHideClose),e0(),Lp(2),nw("p-disabled",Le.invalid),Lp(4),Ew("ngModel",n.title),e0(),Lp(),Ew("ngModel",n.subtitle),e0(),Lp(),Ew("ngModel",n.filter.placeholder),e0(),Lp(),Ew("ngModel",n.filter.width),e0(),Lp(),Ew("ngModel",n.literals),e0(),Lp(),Ew("ngModel",n.componentsSize),nw("p-options",n.componentsSizeOptions),e0();}},dependencies:[G9,gb,$9,z9,mk,hk,Qt,mv,C3,O3,Dde,qhe,k3,Yhe,uNe],encapsulation:2,changeDetection:1})}return s})();var Te=s=>({"docs-sample-code-tabs":s}),fe=(()=>{class s{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||s)};static \u0275cmp=Un({type:s,selectors:[["sample-po-page-list-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Page List Labs"),og(),Il(4,"a",2),ft("click",function(){return n.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-page-list-labs/sample-po-page-list-labs.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-page-list
  [p-actions]="actions"
  [p-breadcrumb]="breadcrumb"
  [p-components-size]="componentsSize"
  [p-disclaimer-group]="disclaimerGroup"
  [p-filter]="filter"
  [p-literals]="customLiterals"
  [p-title]="title"
  [p-subtitle]="subtitle"
>
  <po-divider />

  <po-info p-label="Model" [p-value]="filterModel"> </po-info>
</po-page-list>

<po-divider />

<form #formAction="ngForm">
  <div class="po-row">
    <po-input class="po-md-6" name="actionAction" [(ngModel)]="action.action" p-clean p-label="Action"> </po-input>

    <po-input class="po-md-6" name="actionLabel" [(ngModel)]="action.label" p-label="Label" p-required> </po-input>

    <po-input class="po-md-6" name="actionURL" [(ngModel)]="action.url" p-label="URL"> </po-input>

    <po-select class="po-lg-3 po-md-6" name="type" [(ngModel)]="action.type" p-label="Type" [p-options]="typeOptions">
    </po-select>

    <po-select class="po-lg-3 po-md-6" name="icon" [(ngModel)]="action.icon" p-label="Icon" [p-options]="iconOptions">
    </po-select>

    <po-checkbox-group
      class="po-md-12"
      name="action"
      [(ngModel)]="action"
      p-columns="4"
      p-indeterminate
      p-label="Action properties"
      [p-options]="actionOptions"
    >
    </po-checkbox-group>
  </div>

  <div class="po-row">
    <po-button
      class="po-lg-3 po-md-4"
      p-label="Add Action"
      [p-disabled]="formAction.form.invalid"
      (p-click)="addAction(action)"
    >
    </po-button>
  </div>
</form>

<po-divider />

<form #formBreadcrumbFavorite="ngForm">
  <div class="po-row">
    <po-input
      class="po-md-12 po-lg-6"
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
      class="po-lg-3 po-md-4"
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
      class="po-lg-3 po-md-4"
      p-label="Add breadcrumb params"
      [p-disabled]="formBreadcrumbParams.invalid"
      (p-click)="addBreadcrumbParam()"
    >
    </po-button>
  </div>
</form>

<po-divider />

<div class="po-row">
  <po-input
    class="po-md-6"
    name="disclaimerGroupTitle"
    [(ngModel)]="disclaimerGroupTitle"
    p-clean
    p-label="Disclaimer group title"
    (p-change-model)="addDisclaimerGroupParam(disclaimerGroupTitle, disclaimerGroupHideRemoveAll)"
  >
  </po-input>

  <po-switch
    class="po-md-6"
    name="disclaimerGroupHideRemoveAll"
    [(ngModel)]="disclaimerGroupHideRemoveAll"
    p-label="Disclaimer group hide remove all"
    (p-change)="onChangeDisclaimerGroupHideRemoveAll($event)"
    ngDefaultControl
  >
  </po-switch>
</div>

<form #formDisclaimers="ngForm">
  <div class="po-row">
    <po-input class="po-md-6" name="disclaimerLabel" [(ngModel)]="disclaimerLabel" p-clean p-label="Disclaimer label">
    </po-input>

    <po-input
      class="po-md-6"
      name="disclaimerProperty"
      [(ngModel)]="disclaimerProperty"
      p-clean
      p-label="Disclaimer property"
    >
    </po-input>
  </div>

  <div class="po-row">
    <po-input
      class="po-md-6"
      name="disclaimerValue"
      [(ngModel)]="disclaimerValue"
      p-clean
      p-label="Disclaimer value"
      p-required
    >
    </po-input>

    <po-switch
      class="po-md-6"
      name="disclaimerHideClose"
      [(ngModel)]="disclaimerHideClose"
      p-label="Disclaimer hide close"
    >
    </po-switch>
  </div>

  <div class="po-row">
    <po-button
      class="po-lg-3 po-md-4"
      p-label="Add disclaimer"
      [p-disabled]="formDisclaimers.invalid"
      (p-click)="addDisclaimer()"
    >
    </po-button>
  </div>
</form>

<po-divider />

<form #form="ngForm">
  <po-input class="po-md-6" name="title" [(ngModel)]="title" p-label="Title" p-required> </po-input>
  <po-input class="po-md-6" name="subtitle" [(ngModel)]="subtitle" p-label="Subtitle"> </po-input>

  <po-input class="po-md-6" name="filterPlaceholder" [(ngModel)]="filter.placeholder" p-label="Filter placeholder">
  </po-input>

  <po-input class="po-md-6" name="filterWidth" [(ngModel)]="filter.width" p-label="Filter width"> </po-input>

  <po-input
    class="po-md-12 po-lg-6"
    name="literals"
    [(ngModel)]="literals"
    p-help='Ex.: {"otherActions": "Mais a\xE7\xF5es"}'
    p-label="Literals"
    (p-change)="changeLiterals()"
  >
  </po-input>

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

  <div class="po-row">
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-page-list-labs/sample-po-page-list-labs.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

import {
  PoBreadcrumb,
  PoBreadcrumbItem,
  PoCheckboxGroupOption,
  PoRadioGroupOption,
  PoSelectOption
} from '@po-ui/ng-components';

import { PoNotificationService, PoPageAction, PoPageFilter, PoPageListLiterals } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-page-list-labs',
  templateUrl: './sample-po-page-list-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageListLabsComponent implements OnInit {
  private poNotification = inject(PoNotificationService);

  action: PoPageAction;
  actions: Array<PoPageAction>;
  breadcrumb: PoBreadcrumb;
  breadcrumbItem: PoBreadcrumbItem;
  breadcrumbParams: any;
  componentsSize: string;
  customLiterals: PoPageListLiterals;
  disclaimerGroupHideRemoveAll: boolean;
  disclaimerGroupTitle: string;
  disclaimerHideClose: boolean;
  disclaimerLabel: string;
  disclaimerProperty: string;
  disclaimerValue: string;
  filterModel: string;
  literals: string;
  title: string;
  subtitle: string;

  public disclaimerGroup;

  public readonly actionOptions: Array<PoCheckboxGroupOption> = [
    { label: 'Disabled', value: 'disabled' },
    { label: 'Separator', value: 'separator' },
    { label: 'Selected', value: 'selected' },
    { label: 'Visible', value: 'visible' }
  ];

  public readonly componentsSizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  public readonly filter: PoPageFilter = {
    action: this.showAction.bind(this),
    advancedAction: this.showAdvanceAction.bind(this)
  };

  public readonly iconOptions: Array<PoSelectOption> = [
    { value: 'an an-newspaper', label: 'an an-newspaper' },
    { value: 'an an-magnifying-glass', label: 'an an-magnifying-glass' },
    { value: 'an an-globe', label: 'an an-globe' },
    { value: 'fa fa-podcast', label: 'fa fa-podcast' }
  ];

  public readonly typeOptions: Array<PoSelectOption> = [
    { label: 'Danger', value: 'danger' },
    { label: 'Default', value: 'default' }
  ];

  ngOnInit() {
    this.restore();
  }

  addAction(action: PoPageAction) {
    const newAction = Object.assign({}, action);
    newAction.action = newAction.action ? this.showAction.bind(this, newAction.action) : undefined;
    this.actions = [...this.actions, newAction];

    this.restoreActionForm();
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

  addDisclaimer() {
    this.disclaimerGroup.disclaimers = [
      ...this.disclaimerGroup.disclaimers,
      {
        label: this.disclaimerLabel,
        property: this.disclaimerProperty,
        hideClose: this.disclaimerHideClose,
        value: this.disclaimerValue
      }
    ];

    this.disclaimerGroup = Object.assign({}, this.disclaimerGroup);

    this.restoreDisclaimerModel();
  }

  addDisclaimerGroupParam(title, hideRemoveAll) {
    this.disclaimerGroup = Object.assign({}, this.disclaimerGroup, {
      title,
      hideRemoveAll
    });
  }

  changeLiterals() {
    try {
      this.customLiterals = JSON.parse(this.literals);
    } catch {
      this.customLiterals = undefined;
    }
  }

  onChangeDisclaimerGroupHideRemoveAll(hideRemoveAll: boolean) {
    this.addDisclaimerGroupParam(this.disclaimerGroupTitle, hideRemoveAll);
  }

  restore() {
    this.actions = [];
    this.breadcrumb = { items: [] };
    this.breadcrumbItem = { label: undefined, link: undefined };
    this.breadcrumbParams = {};
    this.componentsSize = 'medium';
    this.customLiterals = undefined;
    this.disclaimerGroup = {
      title: this.disclaimerGroupTitle,
      disclaimers: [],
      hideRemoveAll: this.disclaimerGroupHideRemoveAll
    };
    this.disclaimerGroupHideRemoveAll = false;
    this.disclaimerGroupTitle = undefined;
    this.filterModel = undefined;
    this.filter.placeholder = undefined;
    this.filter.width = undefined;
    this.literals = '';
    this.title = 'PO Page List';
    this.subtitle = '';

    this.restoreDisclaimerModel();
    this.restoreActionForm();
  }

  restoreActionForm() {
    this.action = {
      label: undefined,
      visible: null
    };
  }

  restoreDisclaimerModel() {
    this.disclaimerHideClose = undefined;
    this.disclaimerLabel = undefined;
    this.disclaimerProperty = undefined;
    this.disclaimerValue = undefined;
  }

  showAction(filter) {
    this.poNotification.success(\`Action clicked: \${filter}\`);
  }

  showAdvanceAction(filter) {
    this.poNotification.success(\`Advance Action clicked: \${filter}\`);
  }
}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-page-list-labs"),og(),zl(23,"hr")),r&2&&(Lp(5),Ux("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,Te,n.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,Se],encapsulation:2})}return s})();var K=(()=>{class s{getColumns(){return [{property:"hireStatus",label:"Status",type:"subtitle",subtitles:[{value:"hired",color:"success",label:"Hired",content:"1"},{value:"progress",color:"warning",label:"Progress",content:"2"},{value:"canceled",color:"danger",label:"Canceled",content:"3"}]},{property:"idCard",label:"Identity card",type:"string"},{property:"name",label:"Name"},{property:"age",label:"Age"},{property:"city",label:"City"},{property:"jobDescription",label:"Job description",type:"string"}]}getHireStatus(){return [{value:"hired",label:"Hired"},{value:"progress",label:"Progress"},{value:"canceled",label:"Canceled"}]}getItems(){return [{hireStatus:"hired",name:"James Johnson",city:"Ontario",age:24,idCard:"AB34lxi90",jobDescription:"Systems Analyst"},{hireStatus:"progress",name:"Brian Brown",city:"Buffalo",age:23,idCard:"HG56lds54",jobDescription:"Trainee"},{hireStatus:"canceled",name:"Mary Davis",city:"Albany",age:31,idCard:"DF23cfr65",jobDescription:"Programmer"},{hireStatus:"hired",name:"Margaret Garcia",city:"New York",age:29,idCard:"GF45fgh34",jobDescription:"Web developer"},{hireStatus:"hired",name:"Emma Hall",city:"Ontario",age:34,idCard:"RF76jut21",jobDescription:"Recruiter"},{hireStatus:"progress",name:"Lucas Clark",city:"Utica",age:32,idCard:"HY21kgu65",jobDescription:"Consultant"},{hireStatus:"hired",name:"Ella Scott",city:"Ontario",age:24,idCard:"UL78flg68",jobDescription:"DBA"},{hireStatus:"progress",name:"Chloe Walker",city:"Albany",age:29,idCard:"JH12oli98",jobDescription:"Programmer"}]}getJobs(){return [{value:"Systems Analyst",label:"Systems Analyst"},{value:"Trainee",label:"Trainee"},{value:"Programmer",label:"Programmer"},{value:"Web Developer",label:"Web developer"},{value:"Recruiter",label:"Recruiter"},{value:"Consultant",label:"Consultant"},{value:"DBA",label:"DBA"}]}static \u0275fac=function(r){return new(r||s)};static \u0275prov=w({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})();var ke=["advancedFilterModal"],Be=["poPageList"],Pe=(()=>{class s{sampleHiringProcessesService=f(K);poNotification=f(Yp);poDialog=f(Vde);router=f(En);advancedFilterModal;poPageList;disclaimerGroup;hiringProcesses;hiringProcessesColumns;hiringProcessesFiltered;jobDescription=[];jobDescriptionOptions;labelFilter="";status=[];statusOptions;actions=[{label:"Hire",action:this.hireCandidate.bind(this),disabled:this.disableHireButton.bind(this)},{label:"Legislation",url:"https://www.usa.gov/labor-laws"}];breadcrumb={items:[{label:"Home",action:this.beforeRedirect.bind(this)},{label:"Hiring processes"}]};advancedFilterPrimaryAction={action:()=>{this.poPageList.clearInputSearch(),this.advancedFilterModal.close();let l=[...this.jobDescription,...this.status];this.filterAction(l);},label:"Apply filters"};filterSettings={action:this.filterAction.bind(this),advancedAction:this.advancedFilterActionModal.bind(this),placeholder:"Search"};disclaimers=[];ngOnInit(){this.disclaimerGroup={title:"Filters",disclaimers:[],change:this.onChangeDisclaimer.bind(this),remove:this.onClearDisclaimer.bind(this)},this.hiringProcesses=this.sampleHiringProcessesService.getItems(),this.hiringProcessesColumns=this.sampleHiringProcessesService.getColumns(),this.jobDescriptionOptions=this.sampleHiringProcessesService.getJobs(),this.statusOptions=this.sampleHiringProcessesService.getHireStatus(),this.hiringProcessesFiltered=[...this.hiringProcesses];}advancedFilterActionModal(){this.advancedFilterModal.open();}disableHireButton(){return !this.hiringProcesses.find(l=>l.$selected)}filter(){let l=this.disclaimers.map(r=>r.value);l.length?this.hiringProcessesFilter(l):this.resetFilterHiringProcess();}filterAction(l){let r=typeof l=="string"?[l]:[...l];this.populateDisclaimers(r),this.filter();}hireCandidate(){let l=this.hiringProcesses.find(r=>r.$selected);switch(l.hireStatus){case "progress":l.hireStatus="hired",this.poNotification.success("Hired candidate!");break;case "hired":this.poNotification.warning("This candidate has already been hired.");break;case "canceled":this.poNotification.error("This candidate has already been disqualified.");break}}hiringProcessesFilter(l){this.hiringProcessesFiltered=this.hiringProcesses.filter(r=>Object.keys(r).some(n=>!(r[n]instanceof Object)&&this.includeFilter(r[n],l)));}includeFilter(l,r){return r.some(n=>String(l).toLocaleLowerCase().includes(n.toLocaleLowerCase()))}onChangeDisclaimer(l){this.disclaimers=l,this.filter();}onClearDisclaimer(l){l.removedDisclaimer.property==="search"&&this.poPageList.clearInputSearch(),this.disclaimers=[],this.filter();}populateDisclaimers(l){let r=l.length>1?"advanced":"search";this.disclaimers=l.map(n=>({value:n,property:r})),this.disclaimers&&this.disclaimers.length>0?this.disclaimerGroup.disclaimers=[...this.disclaimers]:this.disclaimerGroup.disclaimers=[];}resetFilterHiringProcess(){this.hiringProcessesFiltered=[...this.hiringProcesses],this.status=[],this.jobDescription=[];}beforeRedirect(l){this.hiringProcesses.some(r=>r.$selected)?this.poDialog.confirm({title:`Confirm redirect to ${l}`,message:"There is data selected. Are you sure you want to quit?",confirm:()=>this.router.navigate(["/"])}):this.router.navigate(["/"]);}static \u0275fac=function(r){return new(r||s)};static \u0275cmp=Un({type:s,selectors:[["sample-po-page-list-hiring-processes"]],viewQuery:function(r,n){if(r&1&&Gl(ke,7)(Be,7),r&2){let d;co(d=lo())&&(n.advancedFilterModal=d.first),co(d=lo())&&(n.poPageList=d.first);}},standalone:false,features:[we([K])],decls:9,vars:15,consts:[["poPageList",""],["advancedFilterModal",""],["f","ngForm"],["p-title","Hiring processes","p-subtitle","Manage <b>active</b> and <i>pending</i> processes",3,"p-actions","p-breadcrumb","p-disclaimer-group","p-filter"],[3,"p-selectable","p-single-select","p-sort","p-striped","p-columns","p-items"],["p-title","Advanced filter",3,"p-primary-action"],["name","jobDescription","p-label","Job description",3,"ngModelChange","ngModel","p-options"],["name","status","p-label","Status",3,"ngModelChange","ngModel","p-options"]],template:function(r,n){if(r&1){let d=Dx();Il(0,"po-page-list",3,0),zl(2,"po-table",4),og(),Il(3,"po-modal",5,1)(5,"form",null,2)(7,"po-multiselect",6),ww("ngModelChange",function(a){return Xy(d),eN(n.jobDescription,a)||(n.jobDescription=a),Qy(a)}),og(),QA(),Il(8,"po-checkbox-group",7),ww("ngModelChange",function(a){return Xy(d),eN(n.status,a)||(n.status=a),Qy(a)}),og(),QA(),og()();}r&2&&(nw("p-actions",n.actions)("p-breadcrumb",n.breadcrumb)("p-disclaimer-group",n.disclaimerGroup)("p-filter",n.filterSettings),Lp(2),nw("p-selectable",true)("p-single-select",true)("p-sort",true)("p-striped",true)("p-columns",n.hiringProcessesColumns)("p-items",n.hiringProcessesFiltered),Lp(),nw("p-primary-action",n.advancedFilterPrimaryAction),Lp(4),Ew("ngModel",n.jobDescription),nw("p-options",n.jobDescriptionOptions),e0(),Lp(),Ew("ngModel",n.status),nw("p-options",n.statusOptions),e0());},dependencies:[G9,$9,z9,mk,hk,C3,Ow,Yo,uNe,E3],encapsulation:2,changeDetection:1})}return s})();var je=s=>({"docs-sample-code-tabs":s}),xe=(()=>{class s{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||s)};static \u0275cmp=Un({type:s,selectors:[["sample-po-page-list-hiring-processes-view"]],standalone:false,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Page List - Hiring Processes"),og(),Il(4,"a",2),ft("click",function(){return n.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-page-list-hiring-processes/sample-po-page-list-hiring-processes.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-page-list
  #poPageList
  p-title="Hiring processes"
  p-subtitle="Manage <b>active</b> and <i>pending</i> processes"
  [p-actions]="actions"
  [p-breadcrumb]="breadcrumb"
  [p-disclaimer-group]="disclaimerGroup"
  [p-filter]="filterSettings"
>
  <po-table
    [p-selectable]="true"
    [p-single-select]="true"
    [p-sort]="true"
    [p-striped]="true"
    [p-columns]="hiringProcessesColumns"
    [p-items]="hiringProcessesFiltered"
  >
  </po-table>
</po-page-list>

<po-modal #advancedFilterModal p-title="Advanced filter" [p-primary-action]="advancedFilterPrimaryAction">
  <form #f="ngForm">
    <po-multiselect
      name="jobDescription"
      [(ngModel)]="jobDescription"
      p-label="Job description"
      [p-options]="jobDescriptionOptions"
    >
    </po-multiselect>

    <po-checkbox-group name="status" [(ngModel)]="status" p-label="Status" [p-options]="statusOptions">
    </po-checkbox-group>
  </form>
</po-modal>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-page-list-hiring-processes/sample-po-page-list-hiring-processes.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

import { PoBreadcrumb } from '@po-ui/ng-components';
import { PoCheckboxGroupOption, PoMultiselectOption } from '@po-ui/ng-components';

import { PoDialogService } from '@po-ui/ng-components';
import { PoModalAction, PoModalComponent } from '@po-ui/ng-components';
import { PoNotificationService } from '@po-ui/ng-components';
import { PoPageAction, PoPageFilter } from '@po-ui/ng-components';
import { PoTableColumn } from '@po-ui/ng-components';
import { PoPageListComponent } from '@po-ui/ng-components';

import { SamplePoPageListHiringProcessesService } from './sample-po-page-list-hiring-processes.service';

@Component({
  selector: 'sample-po-page-list-hiring-processes',
  templateUrl: './sample-po-page-list-hiring-processes.component.html',
  providers: [SamplePoPageListHiringProcessesService],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageListHiringProcessesComponent implements OnInit {
  private sampleHiringProcessesService = inject(SamplePoPageListHiringProcessesService);
  private poNotification = inject(PoNotificationService);
  private poDialog = inject(PoDialogService);
  private router = inject(Router);

  @ViewChild('advancedFilterModal', { static: true }) advancedFilterModal: PoModalComponent;
  @ViewChild('poPageList', { static: true }) poPageList: PoPageListComponent;

  disclaimerGroup;
  hiringProcesses: Array<object>;
  hiringProcessesColumns: Array<PoTableColumn>;
  hiringProcessesFiltered: Array<object>;
  jobDescription: Array<string> = [];
  jobDescriptionOptions: Array<PoMultiselectOption>;
  labelFilter: string = '';
  status: Array<string> = [];
  statusOptions: Array<PoCheckboxGroupOption>;

  public readonly actions: Array<PoPageAction> = [
    { label: 'Hire', action: this.hireCandidate.bind(this), disabled: this.disableHireButton.bind(this) },
    { label: 'Legislation', url: 'https://www.usa.gov/labor-laws' }
  ];

  public readonly breadcrumb: PoBreadcrumb = {
    items: [{ label: 'Home', action: this.beforeRedirect.bind(this) }, { label: 'Hiring processes' }]
  };

  public readonly advancedFilterPrimaryAction: PoModalAction = {
    action: () => {
      this.poPageList.clearInputSearch();
      this.advancedFilterModal.close();
      const filters = [...this.jobDescription, ...this.status];
      this.filterAction(filters);
    },
    label: 'Apply filters'
  };

  public readonly filterSettings: PoPageFilter = {
    action: this.filterAction.bind(this),
    advancedAction: this.advancedFilterActionModal.bind(this),
    placeholder: 'Search'
  };

  private disclaimers = [];

  ngOnInit() {
    this.disclaimerGroup = {
      title: 'Filters',
      disclaimers: [],
      change: this.onChangeDisclaimer.bind(this),
      remove: this.onClearDisclaimer.bind(this)
    };

    this.hiringProcesses = this.sampleHiringProcessesService.getItems();
    this.hiringProcessesColumns = this.sampleHiringProcessesService.getColumns();
    this.jobDescriptionOptions = this.sampleHiringProcessesService.getJobs();
    this.statusOptions = this.sampleHiringProcessesService.getHireStatus();

    this.hiringProcessesFiltered = [...this.hiringProcesses];
  }

  advancedFilterActionModal() {
    this.advancedFilterModal.open();
  }

  disableHireButton() {
    return !this.hiringProcesses.find(candidate => candidate['$selected']);
  }

  filter() {
    const filters = this.disclaimers.map(disclaimer => disclaimer.value);
    filters.length ? this.hiringProcessesFilter(filters) : this.resetFilterHiringProcess();
  }

  filterAction(labelFilter: string | Array<string>) {
    const filter = typeof labelFilter === 'string' ? [labelFilter] : [...labelFilter];
    this.populateDisclaimers(filter);
    this.filter();
  }

  hireCandidate() {
    const selectedCandidate = this.hiringProcesses.find(candidate => candidate['$selected']);
    switch (selectedCandidate['hireStatus']) {
      case 'progress':
        selectedCandidate['hireStatus'] = 'hired';
        this.poNotification.success('Hired candidate!');
        break;

      case 'hired':
        this.poNotification.warning('This candidate has already been hired.');
        break;

      case 'canceled':
        this.poNotification.error('This candidate has already been disqualified.');
        break;
    }
  }

  hiringProcessesFilter(filters) {
    this.hiringProcessesFiltered = this.hiringProcesses.filter(item =>
      Object.keys(item).some(key => !(item[key] instanceof Object) && this.includeFilter(item[key], filters))
    );
  }

  includeFilter(item, filters) {
    return filters.some(filter => String(item).toLocaleLowerCase().includes(filter.toLocaleLowerCase()));
  }

  onChangeDisclaimer(disclaimers) {
    this.disclaimers = disclaimers;
    this.filter();
  }

  onClearDisclaimer(disclaimers) {
    if (disclaimers.removedDisclaimer.property === 'search') {
      this.poPageList.clearInputSearch();
    }
    this.disclaimers = [];
    this.filter();
  }

  populateDisclaimers(filters: Array<any>) {
    const property = filters.length > 1 ? 'advanced' : 'search';
    this.disclaimers = filters.map(value => ({ value, property }));

    if (this.disclaimers && this.disclaimers.length > 0) {
      this.disclaimerGroup.disclaimers = [...this.disclaimers];
    } else {
      this.disclaimerGroup.disclaimers = [];
    }
  }

  resetFilterHiringProcess() {
    this.hiringProcessesFiltered = [...this.hiringProcesses];
    this.status = [];
    this.jobDescription = [];
  }

  private beforeRedirect(itemBreadcrumbLabel) {
    if (this.hiringProcesses.some(candidate => candidate['$selected'])) {
      this.poDialog.confirm({
        title: \`Confirm redirect to \${itemBreadcrumbLabel}\`,
        message: \`There is data selected. Are you sure you want to quit?\`,
        confirm: () => this.router.navigate(['/'])
      });
    } else {
      this.router.navigate(['/']);
    }
  }
}
`),og(),Il(21,"label",6),Qx(22,"sample-po-page-list-hiring-processes/sample-po-page-list-hiring-processes.service.ts"),og(),Il(23,"pre",9),Qx(24,`import { Injectable } from '@angular/core';

import { PoTableColumn } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class SamplePoPageListHiringProcessesService {
  getColumns(): Array<PoTableColumn> {
    return [
      {
        property: 'hireStatus',
        label: 'Status',
        type: 'subtitle',
        subtitles: [
          { value: 'hired', color: 'success', label: 'Hired', content: '1' },
          { value: 'progress', color: 'warning', label: 'Progress', content: '2' },
          { value: 'canceled', color: 'danger', label: 'Canceled', content: '3' }
        ]
      },
      { property: 'idCard', label: 'Identity card', type: 'string' },
      { property: 'name', label: 'Name' },
      { property: 'age', label: 'Age' },
      { property: 'city', label: 'City' },
      { property: 'jobDescription', label: 'Job description', type: 'string' }
    ];
  }

  getHireStatus() {
    return [
      { value: 'hired', label: 'Hired' },
      { value: 'progress', label: 'Progress' },
      { value: 'canceled', label: 'Canceled' }
    ];
  }

  getItems() {
    return [
      {
        hireStatus: 'hired',
        name: 'James Johnson',
        city: 'Ontario',
        age: 24,
        idCard: 'AB34lxi90',
        jobDescription: 'Systems Analyst'
      },
      {
        hireStatus: 'progress',
        name: 'Brian Brown',
        city: 'Buffalo',
        age: 23,
        idCard: 'HG56lds54',
        jobDescription: 'Trainee'
      },
      {
        hireStatus: 'canceled',
        name: 'Mary Davis',
        city: 'Albany',
        age: 31,
        idCard: 'DF23cfr65',
        jobDescription: 'Programmer'
      },
      {
        hireStatus: 'hired',
        name: 'Margaret Garcia',
        city: 'New York',
        age: 29,
        idCard: 'GF45fgh34',
        jobDescription: 'Web developer'
      },
      {
        hireStatus: 'hired',
        name: 'Emma Hall',
        city: 'Ontario',
        age: 34,
        idCard: 'RF76jut21',
        jobDescription: 'Recruiter'
      },
      {
        hireStatus: 'progress',
        name: 'Lucas Clark',
        city: 'Utica',
        age: 32,
        idCard: 'HY21kgu65',
        jobDescription: 'Consultant'
      },
      { hireStatus: 'hired', name: 'Ella Scott', city: 'Ontario', age: 24, idCard: 'UL78flg68', jobDescription: 'DBA' },
      {
        hireStatus: 'progress',
        name: 'Chloe Walker',
        city: 'Albany',
        age: 29,
        idCard: 'JH12oli98',
        jobDescription: 'Programmer'
      }
    ];
  }

  getJobs() {
    return [
      { value: 'Systems Analyst', label: 'Systems Analyst' },
      { value: 'Trainee', label: 'Trainee' },
      { value: 'Programmer', label: 'Programmer' },
      { value: 'Web Developer', label: 'Web developer' },
      { value: 'Recruiter', label: 'Recruiter' },
      { value: 'Consultant', label: 'Consultant' },
      { value: 'DBA', label: 'DBA' }
    ];
  }
}
`),og()()()()(),Il(25,"div",10),zl(26,"sample-po-page-list-hiring-processes"),og(),zl(27,"hr")),r&2&&(Lp(5),Ux("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,je,n.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,Pe],encapsulation:2})}return s})();var ve=(()=>{class s{static \u0275fac=function(r){return new(r||s)};static \u0275cmp=Un({type:s,selectors:[["sample-po-page-list-doc"]],standalone:false,decls:1318,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/icons"],["href","/documentation/po-disclaimer-group"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","Array<PoPageAction>"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","PoBreadcrumb"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","PoDisclaimerGroup"],["pan","",1,"docs-api-property-type","PoPageFilter"],["pan","",1,"docs-api-property-type","PoPageListLiterals"],["href","/documentation/po-i18n"],[1,"language-typescript"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["href","/guides/getting-started"],["pan","",1,"docs-api-property-type","Array<PoBreadcrumbItem>"],["pan","",1,"docs-api-property-type","object"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","any"],["pan","",1,"docs-api-property-type","Array<PoDisclaimer>"],["pan","",1,"docs-api-property-type","PoDisclaimer"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["pan","",1,"docs-api-property-type","Array<PoPopupAction>"],["pan","",1,"docs-api-property-type","number"]],template:function(r,n){r&1&&(Il(0,"div",0)(1,"p",1)(2,"code"),Qx(3,"import { PoPageModule } from '@po-ui/ng-components';"),og()(),Il(4,"div",2)(5,"p"),Qx(6,"M\xF3dulo respons\xE1vel pelos componentes de estrutura de p\xE1gina: "),Il(7,"code"),Qx(8,"po-page-default"),og(),Qx(9,", "),Il(10,"code"),Qx(11,"po-page-detail"),og(),Qx(12,`,
`),Il(13,"code"),Qx(14,"po-page-edit"),og(),Qx(15,", "),Il(16,"code"),Qx(17,"po-page-list"),og(),Qx(18," e "),Il(19,"code"),Qx(20,"po-page-slide"),og(),Qx(21,"."),og()(),Il(22,"h3",3),Qx(23,"Componente"),og(),Il(24,"h4",4)(25,"code",5),Qx(26,"PoPageListComponent"),og()(),Il(27,"div",2)(28,"p"),Qx(29,"O componente "),Il(30,"code"),Qx(31,"po-page-list"),og(),Qx(32,` \xE9 utilizado como o container principal para as telas de listagem de dados,
podendo ser apresentado como lista ou tabela.`),og(),Il(33,"p"),Qx(34,`Este componente possibilita realizar filtro dos dados, no qual permite que seja atribuido uma fun\xE7\xE3o que ser\xE1 executada no momento
da filtragem. Este comportamento pode ser acionado tanto ao `),Il(35,"em"),Qx(36,"click"),og(),Qx(37," do \xEDcone "),Il(38,"a",6),Qx(39,"an-magnifying-glass"),og(),Qx(40,`
quanto ao pressionar da tecla `),Il(41,"em"),Qx(42,"ENTER"),og(),Qx(43," quando o foco estiver no campo de pesquisa."),og(),Il(44,"p"),Qx(45,`Para facilitar a manipula\xE7\xE3o e visualiza\xE7\xE3o dos filtros aplicados, \xE9 poss\xEDvel tamb\xE9m utilizar o componente
`),Il(46,"a",7)(47,"code"),Qx(48,"po-disclaimer-group"),og()(),Qx(49,"."),og(),Il(50,"h4"),Qx(51,"Tokens customiz\xE1veis"),og(),Il(52,"blockquote")(53,"p"),Qx(54,"Para maiores informa\xE7\xF5es, acesse o guia "),Il(55,"a",8),Qx(56,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),Qx(57,"."),og()(),Il(58,"table")(59,"thead")(60,"tr")(61,"th"),Qx(62,"Propriedade"),og(),Il(63,"th"),Qx(64,"Descri\xE7\xE3o"),og(),Il(65,"th"),Qx(66,"Valor Padr\xE3o"),og()()(),Il(67,"tbody")(68,"tr")(69,"td")(70,"strong"),Qx(71,"Header"),og()(),zl(72,"td")(73,"td"),og(),Il(74,"tr")(75,"td")(76,"code"),Qx(77,"--padding"),og()(),Il(78,"td"),Qx(79,"Espa\xE7amento do header"),og(),Il(80,"td")(81,"code"),Qx(82,"var(--spacing-xs) var(--spacing-md)"),og()()(),Il(83,"tr")(84,"td")(85,"code"),Qx(86,"--gap"),og()(),Il(87,"td"),Qx(88,"Espa\xE7amento entre os breadcrumbs e o t\xEDtulo"),og(),Il(89,"td")(90,"code"),Qx(91,"var(--spacing-md)"),og()()(),Il(92,"tr")(93,"td")(94,"code"),Qx(95,"--gap-actions"),og()(),Il(96,"td"),Qx(97,"Espa\xE7amento entre as a\xE7\xF5es"),og(),Il(98,"td")(99,"code"),Qx(100,"var(--spacing-xs)"),og()()(),Il(101,"tr")(102,"td")(103,"code"),Qx(104,"--font-family"),og()(),Il(105,"td"),Qx(106,"Fam\xEDlia tipogr\xE1fica do t\xEDtulo"),og(),Il(107,"td")(108,"code"),Qx(109,"var(--font-family-theme)"),og()()(),Il(110,"tr")(111,"td")(112,"strong"),Qx(113,"Content"),og()(),zl(114,"td")(115,"td"),og(),Il(116,"tr")(117,"td")(118,"code"),Qx(119,"--padding-content"),og()(),Il(120,"td"),Qx(121,"Espa\xE7amento do conte\xFAdo"),og(),Il(122,"td")(123,"code"),Qx(124,"var(--spacing-xs) var(--spacing-sm)"),og()()()()()(),Il(125,"div",9)(126,"h4",10),Qx(127,"Seletor"),og(),Il(128,"pre",11),Qx(129,`<po-page-list
    p-actions="Array<PoPageAction>"
    p-breadcrumb="PoBreadcrumb"
    p-components-size="string"
    p-disclaimer-group="PoDisclaimerGroup"
    p-filter="PoPageFilter"
    p-literals="PoPageListLiterals"
    p-quick-search-value="string"
    p-subtitle="string"
    p-title="string" >
</po-page-list>
`),og()(),Il(130,"h4",12),Qx(131,"Propriedades"),og(),Il(132,"table",13)(133,"tr",14)(134,"th",15),Qx(135,"Nome"),og(),Il(136,"th",15),Qx(137,"Tipo"),og(),Il(138,"th",15),Qx(139,"Padr\xE3o"),og(),Il(140,"th",15),Qx(141,"Descri\xE7\xE3o"),og()(),Il(142,"tr",16)(143,"td",17)(144,"div",18)(145,"span",19),Qx(146," p-actions"),zl(147,"br"),og()()(),Il(148,"td",20)(149,"code",21),Qx(150,"Array<PoPageAction>"),og()(),Il(151,"td",22),Qx(152,"-"),og(),Il(153,"td",23)(154,"em")(155,"strong"),Qx(156,"(opcional)"),og()(),Il(157,"p"),Qx(158,"Nesta propriedade deve ser definido um array de objetos que implementam a interface "),Il(159,"code"),Qx(160,"PoPageAction"),og(),Qx(161,"."),og()()(),Il(162,"tr",16)(163,"td",17)(164,"div",18)(165,"span",19),Qx(166," p-breadcrumb"),zl(167,"br"),og()()(),Il(168,"td",20)(169,"code",24),Qx(170,"PoBreadcrumb"),og()(),Il(171,"td",22),Qx(172,"-"),og(),Il(173,"td",23)(174,"em")(175,"strong"),Qx(176,"(opcional)"),og()(),Il(177,"p"),Qx(178,"Objeto que implementa as propriedades da interface "),Il(179,"code"),Qx(180,"PoBreadcrumb"),og(),Qx(181,"."),og()()(),Il(182,"tr",16)(183,"td",17)(184,"div",18)(185,"span",19),Qx(186," p-components-size"),zl(187,"br"),og()()(),Il(188,"td",20)(189,"code",25),Qx(190,"string"),og()(),Il(191,"td",22)(192,"p")(193,"code"),Qx(194,"medium"),og()()(),Il(195,"td",23)(196,"em")(197,"strong"),Qx(198,"(opcional)"),og()(),Il(199,"p"),Qx(200,"Define o tamanho dos componentes de formul\xE1rio no template:"),og(),Il(201,"ul")(202,"li")(203,"code"),Qx(204,"small"),og(),Qx(205,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),og(),Il(206,"li")(207,"code"),Qx(208,"medium"),og(),Qx(209,": aplica a medida medium de cada componente."),og()(),Il(210,"blockquote")(211,"p"),Qx(212,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Il(213,"code"),Qx(214,"medium"),og(),Qx(215,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Il(216,"a",26),Qx(217,"po-theme"),og(),Qx(218,"."),og()()()(),Il(219,"tr",16)(220,"td",17)(221,"div",18)(222,"span",19),Qx(223," p-disclaimer-group"),zl(224,"br"),og()()(),Il(225,"td",20)(226,"code",27),Qx(227,"PoDisclaimerGroup"),og()(),Il(228,"td",22),Qx(229,"-"),og(),Il(230,"td",23)(231,"em")(232,"strong"),Qx(233,"(opcional)"),og()(),Il(234,"p"),Qx(235,"Objeto que implementa as propriedades da interface "),Il(236,"code"),Qx(237,"PoDisclaimerGroup"),og(),Qx(238,"."),og()()(),Il(239,"tr",16)(240,"td",17)(241,"div",18)(242,"span",19),Qx(243," p-filter"),zl(244,"br"),og()()(),Il(245,"td",20)(246,"code",28),Qx(247,"PoPageFilter"),og()(),Il(248,"td",22),Qx(249,"-"),og(),Il(250,"td",23)(251,"p"),Qx(252,"Objeto que implementa as propriedades da interface "),Il(253,"code"),Qx(254,"PoPageFilter"),og(),Qx(255,"."),og()()(),Il(256,"tr",16)(257,"td",17)(258,"div",18)(259,"span",19),Qx(260," p-literals"),zl(261,"br"),og()()(),Il(262,"td",20)(263,"code",29),Qx(264,"PoPageListLiterals"),og()(),Il(265,"td",22),Qx(266,"-"),og(),Il(267,"td",23)(268,"em")(269,"strong"),Qx(270,"(opcional)"),og()(),Il(271,"p"),Qx(272,"Objeto com as literais usadas no "),Il(273,"code"),Qx(274,"po-page-list"),og(),Qx(275,"."),og(),Il(276,"p"),Qx(277,"Existem duas maneiras de customizar o componente, passando um objeto com todas as literais dispon\xEDveis:"),og(),Il(278,"pre")(279,"code"),Qx(280,`const customLiterals: PoPageListLiterals = {
  otherActions: 'Mais a\xE7\xF5es'
};
`),og()(),Il(281,"p"),Qx(282,"Ou passando apenas as literais que deseja customizar:"),og(),Il(283,"pre")(284,"code"),Qx(285,`const customLiterals: PoPageListLiterals = {
  otherActions: 'A\xE7\xF5es da p\xE1gina'
};
`),og()(),Il(286,"p"),Qx(287,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente."),og(),Il(288,"pre")(289,"code"),Qx(290,`<po-page-list
  [p-literals]="customLiterals">
</po-page-list>
`),og()(),Il(291,"blockquote")(292,"p"),Qx(293,"O valor padr\xE3o ser\xE1 traduzido de acordo com o idioma configurado no "),Il(294,"a",30)(295,"code"),Qx(296,"PoI18nService"),og()(),Qx(297," ou "),Il(298,"em"),Qx(299,"browser"),og(),Qx(300,"."),og()()()(),Il(301,"tr",16)(302,"td",17)(303,"div",18)(304,"span",19),Qx(305," p-quick-search-value"),zl(306,"br"),og()()(),Il(307,"td",20)(308,"code",25),Qx(309,"string"),og()(),Il(310,"td",22),Qx(311,"-"),og(),Il(312,"td",23)(313,"em")(314,"strong"),Qx(315,"(opcional)"),og()(),Il(316,"p"),Qx(317,"Valor padr\xE3o na busca r\xE1pida ao inicializar o componente"),og()()(),Il(318,"tr",16)(319,"td",17)(320,"div",18)(321,"span",19),Qx(322," p-subtitle"),zl(323,"br"),og()()(),Il(324,"td",20)(325,"code",25),Qx(326,"string"),og()(),Il(327,"td",22),Qx(328,"-"),og(),Il(329,"td",23)(330,"em")(331,"strong"),Qx(332,"(opcional)"),og()(),Il(333,"p"),Qx(334,"Subtitulo do Header da p\xE1gina."),og(),Il(335,"p"),Qx(336,"Suporta formata\xE7\xE3o b\xE1sica com as tags "),Il(337,"code"),Qx(338,"<b>"),og(),Qx(339," (negrito), "),Il(340,"code"),Qx(341,"<strong>"),og(),Qx(342," (negrito), "),Il(343,"code"),Qx(344,"<i>"),og(),Qx(345," (it\xE1lico), "),Il(346,"code"),Qx(347,"<em>"),og(),Qx(348,` (it\xE1lico) e
`),Il(349,"code"),Qx(350,"<u>"),og(),Qx(351," (sublinhado)."),og(),Il(352,"p"),Qx(353,"Exemplo:"),og(),Il(354,"pre")(355,"code",31),Qx(356,`subtitle = 'Manage <b>active</b> and <i>pending</i> processes';
`),og()(),Il(357,"blockquote")(358,"p"),Qx(359,"Requer que "),Il(360,"code"),Qx(361,"p-title"),og(),Qx(362," esteja definido."),og()()()(),Il(363,"tr",16)(364,"td",17)(365,"div",18)(366,"span",19),Qx(367," p-title"),zl(368,"br"),og()()(),Il(369,"td",20)(370,"code",25),Qx(371,"string"),og()(),Il(372,"td",22),Qx(373,"-"),og(),Il(374,"td",23)(375,"p"),Qx(376,"T\xEDtulo da p\xE1gina."),og()()()(),Il(377,"h3",12),Qx(378,"M\xE9todos"),og(),Il(379,"table",32)(380,"tr",16)(381,"th",33)(382,"div",18)(383,"h4")(384,"span",19),Qx(385," clearInputSearch "),og()()()()(),Il(386,"tr",23)(387,"td",23)(388,"p"),Qx(389,"Limpa o campo de pesquisa."),og()()()(),zl(390,"br"),Il(391,"h3"),Qx(392,"Interfaces"),og(),Il(393,"h4",34)(394,"code",5),Qx(395,"PoBreadcrumbItem"),og()(),Il(396,"div",2)(397,"p"),Qx(398,"Interface que define cada item do componente "),Il(399,"strong"),Qx(400,"po-breadcrumb"),og(),Qx(401,"."),og()(),Il(402,"h4",12),Qx(403,"Propriedades"),og(),Il(404,"table",13)(405,"tr",14)(406,"th",15),Qx(407,"Nome"),og(),Il(408,"th",15),Qx(409,"Tipo"),og(),Il(410,"th",15),Qx(411,"Descri\xE7\xE3o"),og()(),Il(412,"tr",16)(413,"td",17)(414,"div",18)(415,"span",19),Qx(416," action"),zl(417,"br"),og()()(),Il(418,"td",20)(419,"code",35),Qx(420,"Function"),og()(),Il(421,"td",23)(422,"em")(423,"strong"),Qx(424,"(opcional)"),og()(),Il(425,"p"),Qx(426,"A\xE7\xE3o executada ao clicar no item."),og(),Il(427,"blockquote")(428,"p"),Qx(429,"A fun\xE7\xE3o atribu\xEDda a esta propriedade receber\xE1 o "),Il(430,"em"),Qx(431,"label"),og(),Qx(432," do item como par\xE2metro para execu\xE7\xE3o."),og()()()(),Il(433,"tr",16)(434,"td",17)(435,"div",18)(436,"span",19),Qx(437," label"),zl(438,"br"),og()()(),Il(439,"td",20)(440,"code",25),Qx(441,"string"),og()(),Il(442,"td",23)(443,"p"),Qx(444,"R\xF3tulo do item."),og()()(),Il(445,"tr",16)(446,"td",17)(447,"div",18)(448,"span",19),Qx(449," link"),zl(450,"br"),og()()(),Il(451,"td",20)(452,"code",25),Qx(453,"string"),og()(),Il(454,"td",23)(455,"em")(456,"strong"),Qx(457,"(opcional)"),og()(),Il(458,"p"),Qx(459,"Url do item."),og(),Il(460,"blockquote")(461,"p"),Qx(462,"Caso o item tamb\xE9m contenha uma "),Il(463,"em"),Qx(464,"action"),og(),Qx(465," definida, a prefer\xEAncia de execu\xE7\xE3o ser\xE1 do "),Il(466,"em"),Qx(467,"link"),og(),Qx(468,"."),og()(),Il(469,"blockquote")(470,"p"),Qx(471,`Para o correto funcionamento, \xE9 necess\xE1rio que haja uma rota referenciando seu valor.
`),Il(472,"strong")(473,"a",36),Qx(474,"Veja um exemplo de como criar rotas aqui"),og()(),Qx(475,"."),og()(),Il(476,"blockquote")(477,"p"),Qx(478,"Esta propriedade \xE9 necess\xE1ria para que a propriedade "),Il(479,"code"),Qx(480,"p-favorite-service"),og(),Qx(481," consiga favoritar ou desfavoritar."),og()()()()(),Il(482,"h4",34)(483,"code",5),Qx(484,"PoBreadcrumb"),og()(),Il(485,"div",2)(486,"p"),Qx(487,"Interface que define o "),Il(488,"code"),Qx(489,"po-breadcrumb"),og(),Qx(490,"."),og()(),Il(491,"h4",12),Qx(492,"Propriedades"),og(),Il(493,"table",13)(494,"tr",14)(495,"th",15),Qx(496,"Nome"),og(),Il(497,"th",15),Qx(498,"Tipo"),og(),Il(499,"th",15),Qx(500,"Descri\xE7\xE3o"),og()(),Il(501,"tr",16)(502,"td",17)(503,"div",18)(504,"span",19),Qx(505," favorite"),zl(506,"br"),og()()(),Il(507,"td",20)(508,"code",25),Qx(509,"string"),og()(),Il(510,"td",23)(511,"em")(512,"strong"),Qx(513,"(opcional)"),og()(),Il(514,"p"),Qx(515,"Permite definir uma URL para favoritar ou desfavoritar."),og(),Il(516,"blockquote")(517,"p"),Qx(518,"Para maiores informa\xE7\xF5es verificar a propriedade "),Il(519,"code"),Qx(520,"p-favorite-service"),og(),Qx(521," do componente "),Il(522,"code"),Qx(523,"po-breadcrumb"),og(),Qx(524,"."),og()()()(),Il(525,"tr",16)(526,"td",17)(527,"div",18)(528,"span",19),Qx(529," items"),zl(530,"br"),og()()(),Il(531,"td",20)(532,"code",37),Qx(533,"Array<PoBreadcrumbItem>"),og()(),Il(534,"td",23)(535,"p"),Qx(536,"Lista de itens do "),Il(537,"em"),Qx(538,"breadcrumb"),og(),Qx(539,"."),og(),Il(540,"p")(541,"strong"),Qx(542,"Exemplo:"),og()(),Il(543,"pre")(544,"code"),Qx(545,`{ label: 'Po Portal', link: 'portal' }
`),og()()()(),Il(546,"tr",16)(547,"td",17)(548,"div",18)(549,"span",19),Qx(550," params"),zl(551,"br"),og()()(),Il(552,"td",20)(553,"code",38),Qx(554,"object"),og()(),Il(555,"td",23)(556,"em")(557,"strong"),Qx(558,"(opcional)"),og()(),Il(559,"p"),Qx(560,"Objeto que possibilita o envio de par\xE2metros adicionais \xE0 requisi\xE7\xE3o."),og()()()(),Il(561,"h4",34)(562,"code",5),Qx(563,"PoDisclaimer"),og()(),Il(564,"div",2)(565,"p"),Qx(566,"Interface que representa o objeto "),Il(567,"code"),Qx(568,"po-disclaimer"),og(),Qx(569,"."),og()(),Il(570,"h4",12),Qx(571,"Propriedades"),og(),Il(572,"table",13)(573,"tr",14)(574,"th",15),Qx(575,"Nome"),og(),Il(576,"th",15),Qx(577,"Tipo"),og(),Il(578,"th",15),Qx(579,"Descri\xE7\xE3o"),og()(),Il(580,"tr",16)(581,"td",17)(582,"div",18)(583,"span",19),Qx(584," hideClose"),zl(585,"br"),og()()(),Il(586,"td",20)(587,"code",39),Qx(588,"boolean"),og()(),Il(589,"td",23)(590,"em")(591,"strong"),Qx(592,"(opcional)"),og()(),Il(593,"p"),Qx(594,"Se verdadeiro, oculta o bot\xE3o para fechar o "),Il(595,"em"),Qx(596,"disclaimer"),og(),Qx(597,"."),og()()(),Il(598,"tr",16)(599,"td",17)(600,"div",18)(601,"span",19),Qx(602," label"),zl(603,"br"),og()()(),Il(604,"td",20)(605,"code",25),Qx(606,"string"),og()(),Il(607,"td",23)(608,"em")(609,"strong"),Qx(610,"(opcional)"),og()(),Il(611,"p"),Qx(612,"Texto de exibi\xE7\xE3o do objeto."),og()()(),Il(613,"tr",16)(614,"td",17)(615,"div",18)(616,"span",19),Qx(617," property"),zl(618,"br"),og()()(),Il(619,"td",20)(620,"code",25),Qx(621,"string"),og()(),Il(622,"td",23)(623,"em")(624,"strong"),Qx(625,"(opcional)"),og()(),Il(626,"p"),Qx(627,"Nome da propriedade vinculada ao objeto "),Il(628,"em"),Qx(629,"disclaimer"),og(),Qx(630,"."),og()()(),Il(631,"tr",16)(632,"td",17)(633,"div",18)(634,"span",19),Qx(635," value"),zl(636,"br"),og()()(),Il(637,"td",20)(638,"code",40),Qx(639,"any"),og()(),Il(640,"td",23)(641,"p"),Qx(642,"Valor do objeto."),og()()()(),Il(643,"h4",34)(644,"code",5),Qx(645,"PoDisclaimerGroupRemoveAction"),og()(),Il(646,"div",2)(647,"p"),Qx(648,"Estrutura do objeto representando o estado dos "),Il(649,"em"),Qx(650,"disclaimers"),og(),Qx(651," ap\xF3s a remo\xE7\xE3o."),og()(),Il(652,"h4",12),Qx(653,"Propriedades"),og(),Il(654,"table",13)(655,"tr",14)(656,"th",15),Qx(657,"Nome"),og(),Il(658,"th",15),Qx(659,"Tipo"),og(),Il(660,"th",15),Qx(661,"Descri\xE7\xE3o"),og()(),Il(662,"tr",16)(663,"td",17)(664,"div",18)(665,"span",19),Qx(666," currentDisclaimers"),zl(667,"br"),og()()(),Il(668,"td",20)(669,"code",41),Qx(670,"Array<PoDisclaimer>"),og()(),Il(671,"td",23)(672,"p"),Qx(673,"Lista com os "),Il(674,"em"),Qx(675,"disclaimers"),og(),Qx(676," atuais (restantes)."),og()()(),Il(677,"tr",16)(678,"td",17)(679,"div",18)(680,"span",19),Qx(681," removedDisclaimer"),zl(682,"br"),og()()(),Il(683,"td",20)(684,"code",42),Qx(685,"PoDisclaimer"),og()(),Il(686,"td",23)(687,"p")(688,"em"),Qx(689,"Disclaimer"),og(),Qx(690," que foi removido."),og()()()(),Il(691,"h4",34)(692,"code",5),Qx(693,"PoDisclaimerGroup"),og()(),Il(694,"div",2)(695,"p"),Qx(696,"Interface que representa o objeto "),Il(697,"code"),Qx(698,"po-disclaimer-group"),og(),Qx(699,"."),og()(),Il(700,"h4",12),Qx(701,"Propriedades"),og(),Il(702,"table",13)(703,"tr",14)(704,"th",15),Qx(705,"Nome"),og(),Il(706,"th",15),Qx(707,"Tipo"),og(),Il(708,"th",15),Qx(709,"Descri\xE7\xE3o"),og()(),Il(710,"tr",16)(711,"td",17)(712,"div",18)(713,"span",19),Qx(714," change"),zl(715,"br"),og()()(),Il(716,"td",20)(717,"code",35),Qx(718,"Function"),og()(),Il(719,"td",23)(720,"em")(721,"strong"),Qx(722,"(opcional)"),og()(),Il(723,"p"),Qx(724,"Fun\xE7\xE3o que ser\xE1 disparada quando a lista de "),Il(725,"em"),Qx(726,"disclaimers"),og(),Qx(727,` for modificada.
Ser\xE1 passado por par\xE2metro a nova lista de `),Il(728,"em"),Qx(729,"disclaimers"),og(),Qx(730,"."),og()()(),Il(731,"tr",16)(732,"td",17)(733,"div",18)(734,"span",19),Qx(735," disclaimers"),zl(736,"br"),og()()(),Il(737,"td",20)(738,"code",41),Qx(739,"Array<PoDisclaimer>"),og()(),Il(740,"td",23)(741,"p"),Qx(742,"Lista de "),Il(743,"em"),Qx(744,"disclaimers"),og(),Qx(745,"."),og(),Il(746,"p"),Qx(747,"Exemplo:"),og(),Il(748,"pre")(749,"code"),Qx(750,`disclaimers: [
  { property: 'type', label: 'Hotel', value: 'hotel' },
  { property: 'cost', label: '$500,00', value: '500'  },
  { property: 'dates', label: '10/05/2018 - 15/05/2018', value: '10/05/2018|15/05/2018'  }
 ]
`),og()(),Il(751,"p"),Qx(752,"Para que a lista de "),Il(753,"em"),Qx(754,"disclaimers"),og(),Qx(755," seja atualizada dinamicamente deve-se passar uma nova refer\xEAncia do array de "),Il(756,"code"),Qx(757,"PoDisclaimer"),og(),Qx(758,"."),og(),Il(759,"p"),Qx(760,"Exemplo:"),og(),Il(761,"pre")(762,"code"),Qx(763,`this.disclaimerGroup.disclaimers = [...this.disclaimers];
`),og()()()(),Il(764,"tr",16)(765,"td",17)(766,"div",18)(767,"span",19),Qx(768," hideRemoveAll"),zl(769,"br"),og()()(),Il(770,"td",20)(771,"code",39),Qx(772,"boolean"),og()(),Il(773,"td",23)(774,"em")(775,"strong"),Qx(776,"(opcional)"),og()(),Il(777,"p"),Qx(778,"Oculta o bot\xE3o para remover todos os "),Il(779,"em"),Qx(780,"disclaimers"),og(),Qx(781," do grupo."),og(),Il(782,"blockquote")(783,"p"),Qx(784,"Por padr\xE3o, o mesmo \xE9 exibido \xE0 partir de dois ou mais "),Il(785,"em"),Qx(786,"disclaimers"),og(),Qx(787," com a op\xE7\xE3o "),Il(788,"code"),Qx(789,"hideClose"),og(),Qx(790," habilitada."),og()()()(),Il(791,"tr",16)(792,"td",17)(793,"div",18)(794,"span",19),Qx(795," remove"),zl(796,"br"),og()()(),Il(797,"td",20)(798,"code",35),Qx(799,"Function"),og()(),Il(800,"td",23)(801,"em")(802,"strong"),Qx(803,"(opcional)"),og()(),Il(804,"p"),Qx(805,"Fun\xE7\xE3o que ser\xE1 disparada quando um "),Il(806,"em"),Qx(807,"disclaimer"),og(),Qx(808,` for removido da lista de
`),Il(809,"em"),Qx(810,"disclaimers"),og(),Qx(811," pelo usu\xE1rio."),og(),Il(812,"p"),Qx(813,"Recebe como par\xE2metro um objeto conforme a interface "),Il(814,"code"),Qx(815,"PoDisclaimerGroupRemoveAction"),og(),Qx(816,"."),og()()(),Il(817,"tr",16)(818,"td",17)(819,"div",18)(820,"span",19),Qx(821," removeAll"),zl(822,"br"),og()()(),Il(823,"td",20)(824,"code",35),Qx(825,"Function"),og()(),Il(826,"td",23)(827,"em")(828,"strong"),Qx(829,"(opcional)"),og()(),Il(830,"p"),Qx(831,"Fun\xE7\xE3o que ser\xE1 disparada quando todos os "),Il(832,"em"),Qx(833,"disclaimers"),og(),Qx(834," forem removidos da lista de "),Il(835,"em"),Qx(836,"disclaimers"),og(),Qx(837,` pelo usu\xE1rio,
utilizando o bot\xE3o "remover todos".`),og(),Il(838,"p"),Qx(839,"Recebe como par\xE2metro uma lista contendo todos os "),Il(840,"code"),Qx(841,"disclaimers"),og(),Qx(842," removidos."),og()()(),Il(843,"tr",16)(844,"td",17)(845,"div",18)(846,"span",19),Qx(847," title"),zl(848,"br"),og()()(),Il(849,"td",20)(850,"code",25),Qx(851,"string"),og()(),Il(852,"td",23)(853,"em")(854,"strong"),Qx(855,"(opcional)"),og()(),Il(856,"p"),Qx(857,"T\xEDtulo do grupo de "),Il(858,"em"),Qx(859,"disclaimers"),og(),Qx(860,"."),og()()()(),Il(861,"h4",34)(862,"code",5),Qx(863,"PoPageAction"),og()(),Il(864,"div",2)(865,"p"),Qx(866,"Interface para as a\xE7\xF5es dos componentes "),Il(867,"code"),Qx(868,"po-page-default"),og(),Qx(869," e "),Il(870,"code"),Qx(871,"po-page-list"),og(),Qx(872,"."),og(),Il(873,"p"),Qx(874,"As a\xE7\xF5es podem ser exibidas como bot\xF5es no cabe\xE7alho ou agrupadas em um "),Il(875,"em"),Qx(876,"dropdown"),og(),Qx(877,`,
conforme o `),Il(878,"code"),Qx(879,"PoPageActionsLayout"),og(),Qx(880," e o tamanho da tela."),og(),Il(881,"blockquote")(882,"p"),Qx(883,"As propriedades "),Il(884,"code"),Qx(885,"separator"),og(),Qx(886,", "),Il(887,"code"),Qx(888,"selected"),og(),Qx(889," e "),Il(890,"code"),Qx(891,"subItems"),og(),Qx(892,` possuem efeito apenas quando
a a\xE7\xE3o \xE9 exibida dentro do `),Il(893,"em"),Qx(894,"dropdown"),og(),Qx(895,"."),og()()(),Il(896,"h4",12),Qx(897,"Propriedades"),og(),Il(898,"table",13)(899,"tr",14)(900,"th",15),Qx(901,"Nome"),og(),Il(902,"th",15),Qx(903,"Tipo"),og(),Il(904,"th",15),Qx(905,"Descri\xE7\xE3o"),og()(),Il(906,"tr",16)(907,"td",17)(908,"div",18)(909,"span",19),Qx(910," action"),zl(911,"br"),og()()(),Il(912,"td",20)(913,"code",35),Qx(914,"Function"),og()(),Il(915,"td",23)(916,"em")(917,"strong"),Qx(918,"(opcional)"),og()(),Il(919,"p"),Qx(920,"A\xE7\xE3o que ser\xE1 executada, sendo poss\xEDvel passar o nome ou a refer\xEAncia da fun\xE7\xE3o."),og(),Il(921,"p"),Qx(922,"A action tamb\xE9m pode ser executada para o agrupador de subitens quando a a\xE7\xE3o possuir "),Il(923,"code"),Qx(924,"subItems"),og(),Qx(925,"."),og(),Il(926,"blockquote")(927,"p"),Qx(928,"Para que a fun\xE7\xE3o seja executada no contexto do componente, utilize "),Il(929,"em"),Qx(930,"bind"),og(),Qx(931,`:
`),Il(932,"code"),Qx(933,"action: this.myFunction.bind(this)"),og()()()()(),Il(934,"tr",16)(935,"td",17)(936,"div",18)(937,"span",19),Qx(938," disabled"),zl(939,"br"),og()()(),Il(940,"td",20)(941,"code",39),Qx(942,"boolean "),og(),Il(943,"code",35),Qx(944," Function"),og()(),Il(945,"td",23)(946,"em")(947,"strong"),Qx(948,"(opcional)"),og()(),Il(949,"p"),Qx(950,"Desabilita a a\xE7\xE3o. Aceita um valor booleano ou uma fun\xE7\xE3o que retorna booleano."),og()()(),Il(951,"tr",16)(952,"td",17)(953,"div",18)(954,"span",19),Qx(955," icon"),zl(956,"br"),og()()(),Il(957,"td",20)(958,"code",25),Qx(959,"string "),og(),Il(960,"code",43),Qx(961," TemplateRef<void>"),og()(),Il(962,"td",23)(963,"em")(964,"strong"),Qx(965,"(opcional)"),og()(),Il(966,"p"),Qx(967,"\xCDcone exibido ao lado esquerdo do r\xF3tulo."),og(),Il(968,"p"),Qx(969,"Aceita \xEDcones da "),Il(970,"a",6),Qx(971,"Biblioteca de \xEDcones"),og(),Qx(972,`, fontes externas (ex: Font Awesome)
ou um `),Il(973,"code"),Qx(974,"TemplateRef"),og(),Qx(975," para \xEDcones customizados."),og(),Il(976,"pre")(977,"code"),Qx(978,`{ label: 'A\xE7\xE3o', icon: 'an an-newspaper' }
`),og()()()(),Il(979,"tr",16)(980,"td",17)(981,"div",18)(982,"span",19),Qx(983," kind"),zl(984,"br"),og()()(),Il(985,"td",20)(986,"code",25),Qx(987,"string"),og()(),Il(988,"td",23)(989,"em")(990,"strong"),Qx(991,"(opcional)"),og()(),Il(992,"p"),Qx(993,"Define o estilo visual da a\xE7\xE3o quando exibida como bot\xE3o fora do "),Il(994,"em"),Qx(995,"dropdown"),og(),Qx(996,"."),og(),Il(997,"p"),Qx(998,"Valores permitidos:"),og(),Il(999,"ul")(1e3,"li")(1001,"code"),Qx(1002,"primary"),og(),Qx(1003,": bot\xE3o com maior destaque visual."),og(),Il(1004,"li")(1005,"code"),Qx(1006,"secondary"),og(),Qx(1007,": estilo padr\xE3o."),og()(),Il(1008,"blockquote")(1009,"p"),Qx(1010,"Valores inv\xE1lidos s\xE3o ignorados e o componente aplica o estilo padr\xE3o da posi\xE7\xE3o."),og()(),Il(1011,"blockquote")(1012,"p"),Qx(1013,"Somente uma a\xE7\xE3o pode ter "),Il(1014,"code"),Qx(1015,"kind"),og(),Qx(1016," igual a "),Il(1017,"code"),Qx(1018,"primary"),og(),Qx(1019,". Caso mais de uma defina "),Il(1020,"code"),Qx(1021,"primary"),og(),Qx(1022,`,
apenas a primeira ser\xE1 mantida e as demais receber\xE3o `),Il(1023,"code"),Qx(1024,"secondary"),og(),Qx(1025,"."),og()(),Il(1026,"blockquote")(1027,"p"),Qx(1028,"Quando n\xE3o definido, o estilo \xE9 determinado pelo "),Il(1029,"code"),Qx(1030,"PoPageActionsLayout"),og(),Qx(1031,"."),og()()()(),Il(1032,"tr",16)(1033,"td",17)(1034,"div",18)(1035,"span",19),Qx(1036," label"),zl(1037,"br"),og()()(),Il(1038,"td",20)(1039,"code",25),Qx(1040,"string"),og()(),Il(1041,"td",23)(1042,"p"),Qx(1043,"R\xF3tulo da a\xE7\xE3o."),og(),Il(1044,"p"),Qx(1045,"A label tamb\xE9m pode representar o agrupador de subitens quando a a\xE7\xE3o possuir "),Il(1046,"code"),Qx(1047,"subItems"),og(),Qx(1048,"."),og()()(),Il(1049,"tr",16)(1050,"td",17)(1051,"div",18)(1052,"span",19),Qx(1053," selected"),zl(1054,"br"),og()()(),Il(1055,"td",20)(1056,"code",39),Qx(1057,"boolean"),og()(),Il(1058,"td",23)(1059,"em")(1060,"strong"),Qx(1061,"(opcional)"),og()(),Il(1062,"p"),Qx(1063,"Define se a a\xE7\xE3o est\xE1 selecionada."),og()()(),Il(1064,"tr",16)(1065,"td",17)(1066,"div",18)(1067,"span",19),Qx(1068," separator"),zl(1069,"br"),og()()(),Il(1070,"td",20)(1071,"code",39),Qx(1072,"boolean"),og()(),Il(1073,"td",23)(1074,"em")(1075,"strong"),Qx(1076,"(opcional)"),og()(),Il(1077,"p"),Qx(1078,"Atribui uma linha separadora acima do item."),og()()(),Il(1079,"tr",16)(1080,"td",17)(1081,"div",18)(1082,"span",19),Qx(1083," subItems"),zl(1084,"br"),og()()(),Il(1085,"td",20)(1086,"code",44),Qx(1087,"Array<PoPopupAction>"),og()(),Il(1088,"td",23)(1089,"em")(1090,"strong"),Qx(1091,"(opcional)"),og()(),Il(1092,"p"),Qx(1093,"Define uma lista de subitens para cria\xE7\xE3o de menus aninhados."),og(),Il(1094,"p"),Qx(1095,`Ao definir esta propriedade, o item exibir\xE1 um \xEDcone indicador de subn\xEDvel.
Recomenda-se utilizar no m\xE1ximo tr\xEAs n\xEDveis hier\xE1rquicos para garantir a usabilidade.`),og(),Il(1096,"blockquote")(1097,"p"),Qx(1098,"As propriedades "),Il(1099,"code"),Qx(1100,"disabled"),og(),Qx(1101,", "),Il(1102,"code"),Qx(1103,"type"),og(),Qx(1104," e "),Il(1105,"code"),Qx(1106,"visible"),og(),Qx(1107," n\xE3o s\xE3o aplicadas visualmente ao item agrupador."),og()(),Il(1108,"blockquote")(1109,"p"),Qx(1110,"Quando "),Il(1111,"code"),Qx(1112,"url"),og(),Qx(1113," \xE9 informada em um agrupador, o redirecionamento ter\xE1 prioridade e os subitens n\xE3o ser\xE3o abertos."),og()(),Il(1114,"blockquote")(1115,"p"),Qx(1116,"Em subn\xEDveis aninhados, o "),Il(1117,"code"),Qx(1118,"icon"),og(),Qx(1119," do agrupador \xE9 substitu\xEDdo pelo indicador de navega\xE7\xE3o (seta)."),og()()()(),Il(1120,"tr",16)(1121,"td",17)(1122,"div",18)(1123,"span",19),Qx(1124," type"),zl(1125,"br"),og()()(),Il(1126,"td",20)(1127,"code",25),Qx(1128,"string"),og()(),Il(1129,"td",23)(1130,"em")(1131,"strong"),Qx(1132,"(opcional)"),og()(),Il(1133,"p"),Qx(1134,"Define a cor do item."),og(),Il(1135,"p"),Qx(1136,"Valores v\xE1lidos:"),og(),Il(1137,"ul")(1138,"li")(1139,"code"),Qx(1140,"default"),og()(),Il(1141,"li")(1142,"code"),Qx(1143,"danger"),og()()()()(),Il(1144,"tr",16)(1145,"td",17)(1146,"div",18)(1147,"span",19),Qx(1148," url"),zl(1149,"br"),og()()(),Il(1150,"td",20)(1151,"code",25),Qx(1152,"string"),og()(),Il(1153,"td",23)(1154,"em")(1155,"strong"),Qx(1156,"(opcional)"),og()(),Il(1157,"p"),Qx(1158,"URL para redirecionamento. Aceita rotas internas e links externos."),og(),Il(1159,"p"),Qx(1160,`A url tamb\xE9m pode ser configurada para o agrupador de subitens.
Entretanto, quando a `),Il(1161,"code"),Qx(1162,"url"),og(),Qx(1163," \xE9 informada em um agrupador, o clique "),Il(1164,"strong"),Qx(1165,"n\xE3o abrir\xE1 os subitens"),og(),Qx(1166,`, pois o item ser\xE1
tratado como um link e o redirecionamento ter\xE1 prioridade sobre a exibi\xE7\xE3o da lista.`),og(),Il(1167,"blockquote")(1168,"p"),Qx(1169,"Quando informada, tem prioridade sobre a propriedade "),Il(1170,"code"),Qx(1171,"action"),og(),Qx(1172,"."),og()()()(),Il(1173,"tr",16)(1174,"td",17)(1175,"div",18)(1176,"span",19),Qx(1177," visible"),zl(1178,"br"),og()()(),Il(1179,"td",20)(1180,"code",39),Qx(1181,"boolean "),og(),Il(1182,"code",35),Qx(1183," Function"),og()(),Il(1184,"td",23)(1185,"em")(1186,"strong"),Qx(1187,"(opcional)"),og()(),Il(1188,"p"),Qx(1189,"Define a visibilidade da a\xE7\xE3o. Aceita um valor booleano ou uma fun\xE7\xE3o que retorna booleano."),og()()()(),Il(1190,"h4",34)(1191,"code",5),Qx(1192,"PoPageFilter"),og()(),Il(1193,"div",2)(1194,"p"),Qx(1195,"Interface para o atributo "),Il(1196,"code"),Qx(1197,"filter"),og(),Qx(1198," do componente "),Il(1199,"code"),Qx(1200,"po-page-list"),og(),Qx(1201,"."),og()(),Il(1202,"h4",12),Qx(1203,"Propriedades"),og(),Il(1204,"table",13)(1205,"tr",14)(1206,"th",15),Qx(1207,"Nome"),og(),Il(1208,"th",15),Qx(1209,"Tipo"),og(),Il(1210,"th",15),Qx(1211,"Descri\xE7\xE3o"),og()(),Il(1212,"tr",16)(1213,"td",17)(1214,"div",18)(1215,"span",19),Qx(1216," action"),zl(1217,"br"),og()()(),Il(1218,"td",20)(1219,"code",35),Qx(1220,"Function"),og()(),Il(1221,"td",23)(1222,"em")(1223,"strong"),Qx(1224,"(opcional)"),og()(),Il(1225,"p"),Qx(1226,"A\xE7\xE3o a ser executada."),og()()(),Il(1227,"tr",16)(1228,"td",17)(1229,"div",18)(1230,"span",19),Qx(1231," advancedAction"),zl(1232,"br"),og()()(),Il(1233,"td",20)(1234,"code",35),Qx(1235,"Function"),og()(),Il(1236,"td",23)(1237,"em")(1238,"strong"),Qx(1239,"(opcional)"),og()(),Il(1240,"p"),Qx(1241,`A\xE7\xE3o a ser executada quando for disparado o
evento de `),Il(1242,"em"),Qx(1243,"click"),og(),Qx(1244," atrav\xE9s do r\xF3tulo "),Il(1245,"strong"),Qx(1246,"Busca Avan\xE7ada"),og(),Qx(1247,"."),og()()(),Il(1248,"tr",16)(1249,"td",17)(1250,"div",18)(1251,"span",19),Qx(1252," placeholder"),zl(1253,"br"),og()()(),Il(1254,"td",20)(1255,"code",25),Qx(1256,"string"),og()(),Il(1257,"td",23)(1258,"em")(1259,"strong"),Qx(1260,"(opcional)"),og()(),Il(1261,"p"),Qx(1262,"Texto de instru\xE7\xE3o exibido dentro do campo de filtro."),og()()(),Il(1263,"tr",16)(1264,"td",17)(1265,"div",18)(1266,"span",19),Qx(1267," width"),zl(1268,"br"),og()()(),Il(1269,"td",20)(1270,"code",45),Qx(1271,"number"),og()(),Il(1272,"td",23)(1273,"em")(1274,"strong"),Qx(1275,"(opcional)"),og()(),Il(1276,"p"),Qx(1277,"Tamanho do filtro em tela, utilizando o "),Il(1278,"em"),Qx(1279,"Grid System"),og(),Qx(1280,`,
e limitado ao m\xE1ximo de 6 colunas. O tamanho m\xEDnimo \xE9 controlado
conforme resolu\xE7\xE3o de tela para manter a consist\xEAncia do layout.`),og()()()(),Il(1281,"h4",34)(1282,"code",5),Qx(1283,"PoPageListLiterals"),og()(),Il(1284,"div",2)(1285,"p"),Qx(1286,"Interface para defini\xE7\xE3o das literais usadas no "),Il(1287,"code"),Qx(1288,"po-page-list"),og(),Qx(1289,"."),og()(),Il(1290,"h4",12),Qx(1291,"Propriedades"),og(),Il(1292,"table",13)(1293,"tr",14)(1294,"th",15),Qx(1295,"Nome"),og(),Il(1296,"th",15),Qx(1297,"Tipo"),og(),Il(1298,"th",15),Qx(1299,"Descri\xE7\xE3o"),og()(),Il(1300,"tr",16)(1301,"td",17)(1302,"div",18)(1303,"span",19),Qx(1304," otherActions"),zl(1305,"br"),og()()(),Il(1306,"td",20)(1307,"code",25),Qx(1308,"string"),og()(),Il(1309,"td",23)(1310,"em")(1311,"strong"),Qx(1312,"(opcional)"),og()(),Il(1313,"p"),Qx(1314,"Legenda do "),Il(1315,"code"),Qx(1316,"po-dropdown"),og(),Qx(1317," de a\xE7\xF5es."),og()()()()());},dependencies:[Ka],encapsulation:2})}return s})();var Ce=(()=>{class s{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(l,r){this.route=l,this.router=r;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let r=l.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:"merge"}),this.activeTab=l;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(r){return new(r||s)(C(Xn),C(En))};static \u0275cmp=Un({type:s,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Page List",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,n){r&1&&(Il(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return n.changeTab("doc")}),zl(3,"sample-po-page-list-doc"),og(),Il(4,"po-tab",3),ft("p-click",function(){return n.changeTab("web")}),zl(5,"sample-po-page-list-basic-view")(6,"sample-po-page-list-labs-view")(7,"sample-po-page-list-hiring-processes-view"),og()()()),r&2&&(nw("p-actions",n.actions),Lp(2),nw("p-active",n.activeTab==="doc"),Lp(2),nw("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"));},dependencies:[cNe,qme,Yme,Ee,fe,xe,ve],encapsulation:2})}return s})();var Ge=[{path:"",component:Ce}],ye=(()=>{class s{static \u0275fac=function(r){return new(r||s)};static \u0275mod=fe$1({type:s});static \u0275inj=ue({imports:[uL.forChild(Ge),uL]})}return s})();var vt=(()=>{class s{static \u0275fac=function(r){return new(r||s)};static \u0275mod=fe$1({type:s});static \u0275inj=ue({imports:[sr,ye]})}return s})();export{vt as DocPoPageListModule};