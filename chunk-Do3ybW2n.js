import {f as fe$1,u as ue,s as sr,m as mL,w,c3 as Xn,E as En,U as Un,c as f,aW as Yp,I,c5 as Ode,$ as pNe,F as Wl,an as SO,aH as Ka,b8 as Ume,b9 as $me,C as Sl,y as rN,J as og,a1 as ft,L as Lp,ar as Gx,au as dg,O as rw,bs as gN,aX as Q9,bv as mb,aF as Z9,aY as K9,aG as wk,aZ as _k,b0 as Qt,b1 as mv,c4 as b3,b4 as L3,c8 as Tde,aJ as Whe,bH as k3,c9 as jhe,aB as Ix,aM as Cw,aN as n0,bd as kx,aO as ww,aP as i0,bF as Fw,b6 as Yo,b7 as M3,Q as we,av as ql,aw as lo,ax as uo,a3 as sNe,aD as Ky,aT as oN,aE as Xy}from'./main-TVDUJ47Y.js';var be=(()=>{class s{static \u0275fac=function(r){return new(r||s)};static \u0275cmp=Un({type:s,selectors:[["sample-po-page-list-basic"]],standalone:false,decls:1,vars:0,consts:[["p-title","PO Page List"]],template:function(r,n){r&1&&Wl(0,"po-page-list",0);},dependencies:[pNe],encapsulation:2,changeDetection:1})}return s})();var _e=s=>({"docs-sample-code-tabs":s}),Ee=(()=>{class s{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||s)};static \u0275cmp=Un({type:s,selectors:[["sample-po-page-list-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),rN(3,"PO Page List Basic"),og(),Sl(4,"a",2),ft("click",function(){return n.toggleSampleCodeTabs()}),Wl(5,"span"),rN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),rN(12,"sample-po-page-list-basic/sample-po-page-list-basic.component.html"),og(),Sl(13,"pre",7),rN(14,`<po-page-list p-title="PO Page List"> </po-page-list>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),rN(18,"sample-po-page-list-basic/sample-po-page-list-basic.component.ts"),og(),Sl(19,"pre",9),rN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-page-list-basic',
  templateUrl: './sample-po-page-list-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageListBasicComponent {}
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-page-list-basic"),og(),Wl(23,"hr")),r&2&&(Lp(5),Gx("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),rw("ngClass",gN(4,_e,n.hideSampleCodeTabs)));},dependencies:[SO,Ka,Ume,$me,be],encapsulation:2,changeDetection:1})}return s})();var Se=(()=>{class s{poNotification=f(Yp);action;actions;breadcrumb;breadcrumbItem;breadcrumbParams;componentsSize;customLiterals;disclaimerGroupHideRemoveAll;disclaimerGroupTitle;disclaimerHideClose;disclaimerLabel;disclaimerProperty;disclaimerValue;filterModel;literals;title;subtitle;disclaimerGroup;actionOptions=[{label:"Disabled",value:"disabled"},{label:"Separator",value:"separator"},{label:"Selected",value:"selected"},{label:"Visible",value:"visible"}];componentsSizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];filter={action:this.showAction.bind(this),advancedAction:this.showAdvanceAction.bind(this)};iconOptions=[{value:"an an-newspaper",label:"an an-newspaper"},{value:"an an-magnifying-glass",label:"an an-magnifying-glass"},{value:"an an-globe",label:"an an-globe"},{value:"fa fa-podcast",label:"fa fa-podcast"}];typeOptions=[{label:"Danger",value:"danger"},{label:"Default",value:"default"}];ngOnInit(){this.restore();}addAction(l){let r=Object.assign({},l);r.action=r.action?this.showAction.bind(this,r.action):void 0,this.actions=[...this.actions,r],this.restoreActionForm();}addBreadcrumbItem(){this.breadcrumb.items=this.breadcrumb.items.concat([this.breadcrumbItem]),this.breadcrumbItem={label:void 0,link:void 0};}addBreadcrumbParam(){let l={[this.breadcrumbParams.property]:this.breadcrumbParams.value};this.breadcrumb.params?this.breadcrumb.params=Object.assign(this.breadcrumb.params,l):this.breadcrumb.params=l,this.breadcrumbParams={};}addDisclaimer(){this.disclaimerGroup.disclaimers=[...this.disclaimerGroup.disclaimers,{label:this.disclaimerLabel,property:this.disclaimerProperty,hideClose:this.disclaimerHideClose,value:this.disclaimerValue}],this.disclaimerGroup=Object.assign({},this.disclaimerGroup),this.restoreDisclaimerModel();}addDisclaimerGroupParam(l,r){this.disclaimerGroup=Object.assign({},this.disclaimerGroup,{title:l,hideRemoveAll:r});}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals);}catch(l){this.customLiterals=void 0;}}onChangeDisclaimerGroupHideRemoveAll(l){this.addDisclaimerGroupParam(this.disclaimerGroupTitle,l);}restore(){this.actions=[],this.breadcrumb={items:[]},this.breadcrumbItem={label:void 0,link:void 0},this.breadcrumbParams={},this.componentsSize="medium",this.customLiterals=void 0,this.disclaimerGroup={title:this.disclaimerGroupTitle,disclaimers:[],hideRemoveAll:this.disclaimerGroupHideRemoveAll},this.disclaimerGroupHideRemoveAll=false,this.disclaimerGroupTitle=void 0,this.filterModel=void 0,this.filter.placeholder=void 0,this.filter.width=void 0,this.literals="",this.title="PO Page List",this.subtitle="",this.restoreDisclaimerModel(),this.restoreActionForm();}restoreActionForm(){this.action={label:void 0,visible:null};}restoreDisclaimerModel(){this.disclaimerHideClose=void 0,this.disclaimerLabel=void 0,this.disclaimerProperty=void 0,this.disclaimerValue=void 0;}showAction(l){this.poNotification.success(`Action clicked: ${l}`);}showAdvanceAction(l){this.poNotification.success(`Advance Action clicked: ${l}`);}static \u0275fac=function(r){return new(r||s)};static \u0275cmp=Un({type:s,selectors:[["sample-po-page-list-labs"]],standalone:false,decls:60,vars:40,consts:[["formAction","ngForm"],["formBreadcrumbFavorite","ngForm"],["formBreadcrumbItems","ngForm"],["formBreadcrumbParams","ngForm"],["formDisclaimers","ngForm"],["form","ngForm"],[3,"p-actions","p-breadcrumb","p-components-size","p-disclaimer-group","p-filter","p-literals","p-title","p-subtitle"],["p-label","Model",3,"p-value"],[1,"po-row"],["name","actionAction","p-clean","","p-label","Action",1,"po-md-6",3,"ngModelChange","ngModel"],["name","actionLabel","p-label","Label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","actionURL","p-label","URL",1,"po-md-6",3,"ngModelChange","ngModel"],["name","type","p-label","Type",1,"po-lg-3","po-md-6",3,"ngModelChange","ngModel","p-options"],["name","icon","p-label","Icon",1,"po-lg-3","po-md-6",3,"ngModelChange","ngModel","p-options"],["name","action","p-columns","4","p-indeterminate","","p-label","Action properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Add Action",1,"po-lg-3","po-md-4",3,"p-click","p-disabled"],["name","breadcrumbFavorite","p-clean","","p-help","https://po-sample-api.onrender.com/v1/favorite","p-label","Breadcrumb favorite",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel"],["name","breadcrumbItemLabel","p-clean","","p-label","Breadcrumb item label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","breadcrumbItemLink","p-clean","","p-label","Breadcrumb item link","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add breadcrumb item",1,"po-lg-3","po-md-4",3,"p-click","p-disabled"],["name","breadcrumbParamsProperty","p-clean","","p-label","Breadcrumb params property","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","breadcrumbParamsValue","p-clean","","p-label","Breadcrumb params value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add breadcrumb params",1,"po-lg-3","po-md-4",3,"p-click","p-disabled"],["name","disclaimerGroupTitle","p-clean","","p-label","Disclaimer group title",1,"po-md-6",3,"ngModelChange","p-change-model","ngModel"],["name","disclaimerGroupHideRemoveAll","p-label","Disclaimer group hide remove all","ngDefaultControl","",1,"po-md-6",3,"ngModelChange","p-change","ngModel"],["name","disclaimerLabel","p-clean","","p-label","Disclaimer label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","disclaimerProperty","p-clean","","p-label","Disclaimer property",1,"po-md-6",3,"ngModelChange","ngModel"],["name","disclaimerValue","p-clean","","p-label","Disclaimer value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","disclaimerHideClose","p-label","Disclaimer hide close",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add disclaimer",1,"po-lg-3","po-md-4",3,"p-click","p-disabled"],["name","title","p-label","Title","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","subtitle","p-label","Subtitle",1,"po-md-6",3,"ngModelChange","ngModel"],["name","filterPlaceholder","p-label","Filter placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","filterWidth","p-label","Filter width",1,"po-md-6",3,"ngModelChange","ngModel"],["name","literals","p-help",'Ex.: {"otherActions": "Mais a\xE7\xF5es"}',"p-label","Literals",1,"po-md-12","po-lg-6",3,"ngModelChange","p-change","ngModel"],["name","size","p-columns","4","p-label","Components size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(r,n){if(r&1){let d=Ix();Sl(0,"po-page-list",6),Wl(1,"po-divider")(2,"po-info",7),og(),Wl(3,"po-divider"),Sl(4,"form",null,0)(6,"div",8)(7,"po-input",9),Cw("ngModelChange",function(a){return Ky(d),oN(n.action.action,a)||(n.action.action=a),Xy(a)}),og(),n0(),Sl(8,"po-input",10),Cw("ngModelChange",function(a){return Ky(d),oN(n.action.label,a)||(n.action.label=a),Xy(a)}),og(),n0(),Sl(9,"po-input",11),Cw("ngModelChange",function(a){return Ky(d),oN(n.action.url,a)||(n.action.url=a),Xy(a)}),og(),n0(),Sl(10,"po-select",12),Cw("ngModelChange",function(a){return Ky(d),oN(n.action.type,a)||(n.action.type=a),Xy(a)}),og(),n0(),Sl(11,"po-select",13),Cw("ngModelChange",function(a){return Ky(d),oN(n.action.icon,a)||(n.action.icon=a),Xy(a)}),og(),n0(),Sl(12,"po-checkbox-group",14),Cw("ngModelChange",function(a){return Ky(d),oN(n.action,a)||(n.action=a),Xy(a)}),og(),n0(),og(),Sl(13,"div",8)(14,"po-button",15),ft("p-click",function(){return n.addAction(n.action)}),og()()(),Wl(15,"po-divider"),Sl(16,"form",null,1)(18,"div",8)(19,"po-input",16),Cw("ngModelChange",function(a){return Ky(d),oN(n.breadcrumb.favorite,a)||(n.breadcrumb.favorite=a),Xy(a)}),og(),n0(),og()(),Sl(20,"form",null,2)(22,"div",8)(23,"po-input",17),Cw("ngModelChange",function(a){return Ky(d),oN(n.breadcrumbItem.label,a)||(n.breadcrumbItem.label=a),Xy(a)}),og(),n0(),Sl(24,"po-input",18),Cw("ngModelChange",function(a){return Ky(d),oN(n.breadcrumbItem.link,a)||(n.breadcrumbItem.link=a),Xy(a)}),og(),n0(),og(),Sl(25,"div",8)(26,"po-button",19),ft("p-click",function(){return n.addBreadcrumbItem()}),og()()(),Wl(27,"po-divider"),Sl(28,"form",null,3)(30,"div",8)(31,"po-input",20),Cw("ngModelChange",function(a){return Ky(d),oN(n.breadcrumbParams.property,a)||(n.breadcrumbParams.property=a),Xy(a)}),og(),n0(),Sl(32,"po-input",21),Cw("ngModelChange",function(a){return Ky(d),oN(n.breadcrumbParams.value,a)||(n.breadcrumbParams.value=a),Xy(a)}),og(),n0(),og(),Sl(33,"div",8)(34,"po-button",22),ft("p-click",function(){return n.addBreadcrumbParam()}),og()()(),Wl(35,"po-divider"),Sl(36,"div",8)(37,"po-input",23),Cw("ngModelChange",function(a){return Ky(d),oN(n.disclaimerGroupTitle,a)||(n.disclaimerGroupTitle=a),Xy(a)}),ft("p-change-model",function(){return n.addDisclaimerGroupParam(n.disclaimerGroupTitle,n.disclaimerGroupHideRemoveAll)}),og(),n0(),Sl(38,"po-switch",24),Cw("ngModelChange",function(a){return Ky(d),oN(n.disclaimerGroupHideRemoveAll,a)||(n.disclaimerGroupHideRemoveAll=a),Xy(a)}),ft("p-change",function(a){return n.onChangeDisclaimerGroupHideRemoveAll(a)}),og(),n0(),og(),Sl(39,"form",null,4)(41,"div",8)(42,"po-input",25),Cw("ngModelChange",function(a){return Ky(d),oN(n.disclaimerLabel,a)||(n.disclaimerLabel=a),Xy(a)}),og(),n0(),Sl(43,"po-input",26),Cw("ngModelChange",function(a){return Ky(d),oN(n.disclaimerProperty,a)||(n.disclaimerProperty=a),Xy(a)}),og(),n0(),og(),Sl(44,"div",8)(45,"po-input",27),Cw("ngModelChange",function(a){return Ky(d),oN(n.disclaimerValue,a)||(n.disclaimerValue=a),Xy(a)}),og(),n0(),Sl(46,"po-switch",28),Cw("ngModelChange",function(a){return Ky(d),oN(n.disclaimerHideClose,a)||(n.disclaimerHideClose=a),Xy(a)}),og(),n0(),og(),Sl(47,"div",8)(48,"po-button",29),ft("p-click",function(){return n.addDisclaimer()}),og()()(),Wl(49,"po-divider"),Sl(50,"form",null,5)(52,"po-input",30),Cw("ngModelChange",function(a){return Ky(d),oN(n.title,a)||(n.title=a),Xy(a)}),og(),n0(),Sl(53,"po-input",31),Cw("ngModelChange",function(a){return Ky(d),oN(n.subtitle,a)||(n.subtitle=a),Xy(a)}),og(),n0(),Sl(54,"po-input",32),Cw("ngModelChange",function(a){return Ky(d),oN(n.filter.placeholder,a)||(n.filter.placeholder=a),Xy(a)}),og(),n0(),Sl(55,"po-input",33),Cw("ngModelChange",function(a){return Ky(d),oN(n.filter.width,a)||(n.filter.width=a),Xy(a)}),og(),n0(),Sl(56,"po-input",34),Cw("ngModelChange",function(a){return Ky(d),oN(n.literals,a)||(n.literals=a),Xy(a)}),ft("p-change",function(){return n.changeLiterals()}),og(),n0(),Sl(57,"po-radio-group",35),Cw("ngModelChange",function(a){return Ky(d),oN(n.componentsSize,a)||(n.componentsSize=a),Xy(a)}),og(),n0(),Sl(58,"div",8)(59,"po-button",36),ft("p-click",function(){return n.restore()}),og()()();}if(r&2){let d=kx(5),p=kx(21),a=kx(29),Le=kx(40);rw("p-actions",n.actions)("p-breadcrumb",n.breadcrumb)("p-components-size",n.componentsSize)("p-disclaimer-group",n.disclaimerGroup)("p-filter",n.filter)("p-literals",n.customLiterals)("p-title",n.title)("p-subtitle",n.subtitle),Lp(2),rw("p-value",n.filterModel),Lp(5),ww("ngModel",n.action.action),i0(),Lp(),ww("ngModel",n.action.label),i0(),Lp(),ww("ngModel",n.action.url),i0(),Lp(),ww("ngModel",n.action.type),rw("p-options",n.typeOptions),i0(),Lp(),ww("ngModel",n.action.icon),rw("p-options",n.iconOptions),i0(),Lp(),ww("ngModel",n.action),rw("p-options",n.actionOptions),i0(),Lp(2),rw("p-disabled",d.form.invalid),Lp(5),ww("ngModel",n.breadcrumb.favorite),i0(),Lp(4),ww("ngModel",n.breadcrumbItem.label),i0(),Lp(),ww("ngModel",n.breadcrumbItem.link),i0(),Lp(2),rw("p-disabled",p.invalid),Lp(5),ww("ngModel",n.breadcrumbParams.property),i0(),Lp(),ww("ngModel",n.breadcrumbParams.value),i0(),Lp(2),rw("p-disabled",a.invalid),Lp(3),ww("ngModel",n.disclaimerGroupTitle),i0(),Lp(),ww("ngModel",n.disclaimerGroupHideRemoveAll),i0(),Lp(4),ww("ngModel",n.disclaimerLabel),i0(),Lp(),ww("ngModel",n.disclaimerProperty),i0(),Lp(2),ww("ngModel",n.disclaimerValue),i0(),Lp(),ww("ngModel",n.disclaimerHideClose),i0(),Lp(2),rw("p-disabled",Le.invalid),Lp(4),ww("ngModel",n.title),i0(),Lp(),ww("ngModel",n.subtitle),i0(),Lp(),ww("ngModel",n.filter.placeholder),i0(),Lp(),ww("ngModel",n.filter.width),i0(),Lp(),ww("ngModel",n.literals),i0(),Lp(),ww("ngModel",n.componentsSize),rw("p-options",n.componentsSizeOptions),i0();}},dependencies:[Q9,mb,Z9,K9,wk,_k,Qt,mv,b3,L3,Tde,Whe,k3,jhe,pNe],encapsulation:2,changeDetection:1})}return s})();var Te=s=>({"docs-sample-code-tabs":s}),fe=(()=>{class s{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||s)};static \u0275cmp=Un({type:s,selectors:[["sample-po-page-list-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),rN(3,"PO Page List Labs"),og(),Sl(4,"a",2),ft("click",function(){return n.toggleSampleCodeTabs()}),Wl(5,"span"),rN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),rN(12,"sample-po-page-list-labs/sample-po-page-list-labs.component.html"),og(),Sl(13,"pre",7),rN(14,`<po-page-list
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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),rN(18,"sample-po-page-list-labs/sample-po-page-list-labs.component.ts"),og(),Sl(19,"pre",9),rN(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-page-list-labs"),og(),Wl(23,"hr")),r&2&&(Lp(5),Gx("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),rw("ngClass",gN(4,Te,n.hideSampleCodeTabs)));},dependencies:[SO,Ka,Ume,$me,Se],encapsulation:2,changeDetection:1})}return s})();var K=(()=>{class s{getColumns(){return [{property:"hireStatus",label:"Status",type:"subtitle",subtitles:[{value:"hired",color:"success",label:"Hired",content:"1"},{value:"progress",color:"warning",label:"Progress",content:"2"},{value:"canceled",color:"danger",label:"Canceled",content:"3"}]},{property:"idCard",label:"Identity card",type:"string"},{property:"name",label:"Name"},{property:"age",label:"Age"},{property:"city",label:"City"},{property:"jobDescription",label:"Job description",type:"string"}]}getHireStatus(){return [{value:"hired",label:"Hired"},{value:"progress",label:"Progress"},{value:"canceled",label:"Canceled"}]}getItems(){return [{hireStatus:"hired",name:"James Johnson",city:"Ontario",age:24,idCard:"AB34lxi90",jobDescription:"Systems Analyst"},{hireStatus:"progress",name:"Brian Brown",city:"Buffalo",age:23,idCard:"HG56lds54",jobDescription:"Trainee"},{hireStatus:"canceled",name:"Mary Davis",city:"Albany",age:31,idCard:"DF23cfr65",jobDescription:"Programmer"},{hireStatus:"hired",name:"Margaret Garcia",city:"New York",age:29,idCard:"GF45fgh34",jobDescription:"Web developer"},{hireStatus:"hired",name:"Emma Hall",city:"Ontario",age:34,idCard:"RF76jut21",jobDescription:"Recruiter"},{hireStatus:"progress",name:"Lucas Clark",city:"Utica",age:32,idCard:"HY21kgu65",jobDescription:"Consultant"},{hireStatus:"hired",name:"Ella Scott",city:"Ontario",age:24,idCard:"UL78flg68",jobDescription:"DBA"},{hireStatus:"progress",name:"Chloe Walker",city:"Albany",age:29,idCard:"JH12oli98",jobDescription:"Programmer"}]}getJobs(){return [{value:"Systems Analyst",label:"Systems Analyst"},{value:"Trainee",label:"Trainee"},{value:"Programmer",label:"Programmer"},{value:"Web Developer",label:"Web developer"},{value:"Recruiter",label:"Recruiter"},{value:"Consultant",label:"Consultant"},{value:"DBA",label:"DBA"}]}static \u0275fac=function(r){return new(r||s)};static \u0275prov=I({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})();var ke=["advancedFilterModal"],Be=["poPageList"],Pe=(()=>{class s{sampleHiringProcessesService=f(K);poNotification=f(Yp);poDialog=f(Ode);router=f(En);advancedFilterModal;poPageList;disclaimerGroup;hiringProcesses;hiringProcessesColumns;hiringProcessesFiltered;jobDescription=[];jobDescriptionOptions;labelFilter="";status=[];statusOptions;actions=[{label:"Hire",action:this.hireCandidate.bind(this),disabled:this.disableHireButton.bind(this)},{label:"Legislation",url:"https://www.usa.gov/labor-laws"}];breadcrumb={items:[{label:"Home",action:this.beforeRedirect.bind(this)},{label:"Hiring processes"}]};advancedFilterPrimaryAction={action:()=>{this.poPageList.clearInputSearch(),this.advancedFilterModal.close();let l=[...this.jobDescription,...this.status];this.filterAction(l);},label:"Apply filters"};filterSettings={action:this.filterAction.bind(this),advancedAction:this.advancedFilterActionModal.bind(this),placeholder:"Search"};disclaimers=[];ngOnInit(){this.disclaimerGroup={title:"Filters",disclaimers:[],change:this.onChangeDisclaimer.bind(this),remove:this.onClearDisclaimer.bind(this)},this.hiringProcesses=this.sampleHiringProcessesService.getItems(),this.hiringProcessesColumns=this.sampleHiringProcessesService.getColumns(),this.jobDescriptionOptions=this.sampleHiringProcessesService.getJobs(),this.statusOptions=this.sampleHiringProcessesService.getHireStatus(),this.hiringProcessesFiltered=[...this.hiringProcesses];}advancedFilterActionModal(){this.advancedFilterModal.open();}disableHireButton(){return !this.hiringProcesses.find(l=>l.$selected)}filter(){let l=this.disclaimers.map(r=>r.value);l.length?this.hiringProcessesFilter(l):this.resetFilterHiringProcess();}filterAction(l){let r=typeof l=="string"?[l]:[...l];this.populateDisclaimers(r),this.filter();}hireCandidate(){let l=this.hiringProcesses.find(r=>r.$selected);switch(l.hireStatus){case "progress":l.hireStatus="hired",this.poNotification.success("Hired candidate!");break;case "hired":this.poNotification.warning("This candidate has already been hired.");break;case "canceled":this.poNotification.error("This candidate has already been disqualified.");break}}hiringProcessesFilter(l){this.hiringProcessesFiltered=this.hiringProcesses.filter(r=>Object.keys(r).some(n=>!(r[n]instanceof Object)&&this.includeFilter(r[n],l)));}includeFilter(l,r){return r.some(n=>String(l).toLocaleLowerCase().includes(n.toLocaleLowerCase()))}onChangeDisclaimer(l){this.disclaimers=l,this.filter();}onClearDisclaimer(l){l.removedDisclaimer.property==="search"&&this.poPageList.clearInputSearch(),this.disclaimers=[],this.filter();}populateDisclaimers(l){let r=l.length>1?"advanced":"search";this.disclaimers=l.map(n=>({value:n,property:r})),this.disclaimers&&this.disclaimers.length>0?this.disclaimerGroup.disclaimers=[...this.disclaimers]:this.disclaimerGroup.disclaimers=[];}resetFilterHiringProcess(){this.hiringProcessesFiltered=[...this.hiringProcesses],this.status=[],this.jobDescription=[];}beforeRedirect(l){this.hiringProcesses.some(r=>r.$selected)?this.poDialog.confirm({title:`Confirm redirect to ${l}`,message:"There is data selected. Are you sure you want to quit?",confirm:()=>this.router.navigate(["/"])}):this.router.navigate(["/"]);}static \u0275fac=function(r){return new(r||s)};static \u0275cmp=Un({type:s,selectors:[["sample-po-page-list-hiring-processes"]],viewQuery:function(r,n){if(r&1&&ql(ke,7)(Be,7),r&2){let d;lo(d=uo())&&(n.advancedFilterModal=d.first),lo(d=uo())&&(n.poPageList=d.first);}},standalone:false,features:[we([K])],decls:9,vars:15,consts:[["poPageList",""],["advancedFilterModal",""],["f","ngForm"],["p-title","Hiring processes","p-subtitle","Manage <b>active</b> and <i>pending</i> processes",3,"p-actions","p-breadcrumb","p-disclaimer-group","p-filter"],[3,"p-selectable","p-single-select","p-sort","p-striped","p-columns","p-items"],["p-title","Advanced filter",3,"p-primary-action"],["name","jobDescription","p-label","Job description",3,"ngModelChange","ngModel","p-options"],["name","status","p-label","Status",3,"ngModelChange","ngModel","p-options"]],template:function(r,n){if(r&1){let d=Ix();Sl(0,"po-page-list",3,0),Wl(2,"po-table",4),og(),Sl(3,"po-modal",5,1)(5,"form",null,2)(7,"po-multiselect",6),Cw("ngModelChange",function(a){return Ky(d),oN(n.jobDescription,a)||(n.jobDescription=a),Xy(a)}),og(),n0(),Sl(8,"po-checkbox-group",7),Cw("ngModelChange",function(a){return Ky(d),oN(n.status,a)||(n.status=a),Xy(a)}),og(),n0(),og()();}r&2&&(rw("p-actions",n.actions)("p-breadcrumb",n.breadcrumb)("p-disclaimer-group",n.disclaimerGroup)("p-filter",n.filterSettings),Lp(2),rw("p-selectable",true)("p-single-select",true)("p-sort",true)("p-striped",true)("p-columns",n.hiringProcessesColumns)("p-items",n.hiringProcessesFiltered),Lp(),rw("p-primary-action",n.advancedFilterPrimaryAction),Lp(4),ww("ngModel",n.jobDescription),rw("p-options",n.jobDescriptionOptions),i0(),Lp(),ww("ngModel",n.status),rw("p-options",n.statusOptions),i0());},dependencies:[Q9,Z9,K9,wk,_k,b3,Fw,Yo,pNe,M3],encapsulation:2,changeDetection:1})}return s})();var je=s=>({"docs-sample-code-tabs":s}),xe=(()=>{class s{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||s)};static \u0275cmp=Un({type:s,selectors:[["sample-po-page-list-hiring-processes-view"]],standalone:false,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),rN(3,"PO Page List - Hiring Processes"),og(),Sl(4,"a",2),ft("click",function(){return n.toggleSampleCodeTabs()}),Wl(5,"span"),rN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),rN(12,"sample-po-page-list-hiring-processes/sample-po-page-list-hiring-processes.component.html"),og(),Sl(13,"pre",7),rN(14,`<po-page-list
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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),rN(18,"sample-po-page-list-hiring-processes/sample-po-page-list-hiring-processes.component.ts"),og(),Sl(19,"pre",9),rN(20,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),og(),Sl(21,"label",6),rN(22,"sample-po-page-list-hiring-processes/sample-po-page-list-hiring-processes.service.ts"),og(),Sl(23,"pre",9),rN(24,`import { Injectable } from '@angular/core';

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
`),og()()()()(),Sl(25,"div",10),Wl(26,"sample-po-page-list-hiring-processes"),og(),Wl(27,"hr")),r&2&&(Lp(5),Gx("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),rw("ngClass",gN(4,je,n.hideSampleCodeTabs)));},dependencies:[SO,Ka,Ume,$me,Pe],encapsulation:2,changeDetection:1})}return s})();var ve=(()=>{class s{static \u0275fac=function(r){return new(r||s)};static \u0275cmp=Un({type:s,selectors:[["sample-po-page-list-doc"]],standalone:false,decls:1318,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/icons"],["href","/documentation/po-disclaimer-group"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","Array<PoPageAction>"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","PoBreadcrumb"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","PoDisclaimerGroup"],["pan","",1,"docs-api-property-type","PoPageFilter"],["pan","",1,"docs-api-property-type","PoPageListLiterals"],["href","/documentation/po-i18n"],[1,"language-typescript"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["href","/guides/getting-started"],["pan","",1,"docs-api-property-type","Array<PoBreadcrumbItem>"],["pan","",1,"docs-api-property-type","object"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","any"],["pan","",1,"docs-api-property-type","Array<PoDisclaimer>"],["pan","",1,"docs-api-property-type","PoDisclaimer"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["pan","",1,"docs-api-property-type","Array<PoPopupAction>"],["pan","",1,"docs-api-property-type","number"]],template:function(r,n){r&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),rN(3,"import { PoPageModule } from '@po-ui/ng-components';"),og()(),Sl(4,"div",2)(5,"p"),rN(6,"M\xF3dulo respons\xE1vel pelos componentes de estrutura de p\xE1gina: "),Sl(7,"code"),rN(8,"po-page-default"),og(),rN(9,", "),Sl(10,"code"),rN(11,"po-page-detail"),og(),rN(12,`,
`),Sl(13,"code"),rN(14,"po-page-edit"),og(),rN(15,", "),Sl(16,"code"),rN(17,"po-page-list"),og(),rN(18," e "),Sl(19,"code"),rN(20,"po-page-slide"),og(),rN(21,"."),og()(),Sl(22,"h3",3),rN(23,"Componente"),og(),Sl(24,"h4",4)(25,"code",5),rN(26,"PoPageListComponent"),og()(),Sl(27,"div",2)(28,"p"),rN(29,"O componente "),Sl(30,"code"),rN(31,"po-page-list"),og(),rN(32,` \xE9 utilizado como o container principal para as telas de listagem de dados,
podendo ser apresentado como lista ou tabela.`),og(),Sl(33,"p"),rN(34,`Este componente possibilita realizar filtro dos dados, no qual permite que seja atribuido uma fun\xE7\xE3o que ser\xE1 executada no momento
da filtragem. Este comportamento pode ser acionado tanto ao `),Sl(35,"em"),rN(36,"click"),og(),rN(37," do \xEDcone "),Sl(38,"a",6),rN(39,"an-magnifying-glass"),og(),rN(40,`
quanto ao pressionar da tecla `),Sl(41,"em"),rN(42,"ENTER"),og(),rN(43," quando o foco estiver no campo de pesquisa."),og(),Sl(44,"p"),rN(45,`Para facilitar a manipula\xE7\xE3o e visualiza\xE7\xE3o dos filtros aplicados, \xE9 poss\xEDvel tamb\xE9m utilizar o componente
`),Sl(46,"a",7)(47,"code"),rN(48,"po-disclaimer-group"),og()(),rN(49,"."),og(),Sl(50,"h4"),rN(51,"Tokens customiz\xE1veis"),og(),Sl(52,"blockquote")(53,"p"),rN(54,"Para maiores informa\xE7\xF5es, acesse o guia "),Sl(55,"a",8),rN(56,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),rN(57,"."),og()(),Sl(58,"table")(59,"thead")(60,"tr")(61,"th"),rN(62,"Propriedade"),og(),Sl(63,"th"),rN(64,"Descri\xE7\xE3o"),og(),Sl(65,"th"),rN(66,"Valor Padr\xE3o"),og()()(),Sl(67,"tbody")(68,"tr")(69,"td")(70,"strong"),rN(71,"Header"),og()(),Wl(72,"td")(73,"td"),og(),Sl(74,"tr")(75,"td")(76,"code"),rN(77,"--padding"),og()(),Sl(78,"td"),rN(79,"Espa\xE7amento do header"),og(),Sl(80,"td")(81,"code"),rN(82,"var(--spacing-xs) var(--spacing-md)"),og()()(),Sl(83,"tr")(84,"td")(85,"code"),rN(86,"--gap"),og()(),Sl(87,"td"),rN(88,"Espa\xE7amento entre os breadcrumbs e o t\xEDtulo"),og(),Sl(89,"td")(90,"code"),rN(91,"var(--spacing-md)"),og()()(),Sl(92,"tr")(93,"td")(94,"code"),rN(95,"--gap-actions"),og()(),Sl(96,"td"),rN(97,"Espa\xE7amento entre as a\xE7\xF5es"),og(),Sl(98,"td")(99,"code"),rN(100,"var(--spacing-xs)"),og()()(),Sl(101,"tr")(102,"td")(103,"code"),rN(104,"--font-family"),og()(),Sl(105,"td"),rN(106,"Fam\xEDlia tipogr\xE1fica do t\xEDtulo"),og(),Sl(107,"td")(108,"code"),rN(109,"var(--font-family-theme)"),og()()(),Sl(110,"tr")(111,"td")(112,"strong"),rN(113,"Content"),og()(),Wl(114,"td")(115,"td"),og(),Sl(116,"tr")(117,"td")(118,"code"),rN(119,"--padding-content"),og()(),Sl(120,"td"),rN(121,"Espa\xE7amento do conte\xFAdo"),og(),Sl(122,"td")(123,"code"),rN(124,"var(--spacing-xs) var(--spacing-sm)"),og()()()()()(),Sl(125,"div",9)(126,"h4",10),rN(127,"Seletor"),og(),Sl(128,"pre",11),rN(129,`<po-page-list
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
`),og()(),Sl(130,"h4",12),rN(131,"Propriedades"),og(),Sl(132,"table",13)(133,"tr",14)(134,"th",15),rN(135,"Nome"),og(),Sl(136,"th",15),rN(137,"Tipo"),og(),Sl(138,"th",15),rN(139,"Padr\xE3o"),og(),Sl(140,"th",15),rN(141,"Descri\xE7\xE3o"),og()(),Sl(142,"tr",16)(143,"td",17)(144,"div",18)(145,"span",19),rN(146," p-actions"),Wl(147,"br"),og()()(),Sl(148,"td",20)(149,"code",21),rN(150,"Array<PoPageAction>"),og()(),Sl(151,"td",22),rN(152,"-"),og(),Sl(153,"td",23)(154,"em")(155,"strong"),rN(156,"(opcional)"),og()(),Sl(157,"p"),rN(158,"Nesta propriedade deve ser definido um array de objetos que implementam a interface "),Sl(159,"code"),rN(160,"PoPageAction"),og(),rN(161,"."),og()()(),Sl(162,"tr",16)(163,"td",17)(164,"div",18)(165,"span",19),rN(166," p-breadcrumb"),Wl(167,"br"),og()()(),Sl(168,"td",20)(169,"code",24),rN(170,"PoBreadcrumb"),og()(),Sl(171,"td",22),rN(172,"-"),og(),Sl(173,"td",23)(174,"em")(175,"strong"),rN(176,"(opcional)"),og()(),Sl(177,"p"),rN(178,"Objeto que implementa as propriedades da interface "),Sl(179,"code"),rN(180,"PoBreadcrumb"),og(),rN(181,"."),og()()(),Sl(182,"tr",16)(183,"td",17)(184,"div",18)(185,"span",19),rN(186," p-components-size"),Wl(187,"br"),og()()(),Sl(188,"td",20)(189,"code",25),rN(190,"string"),og()(),Sl(191,"td",22)(192,"p")(193,"code"),rN(194,"medium"),og()()(),Sl(195,"td",23)(196,"em")(197,"strong"),rN(198,"(opcional)"),og()(),Sl(199,"p"),rN(200,"Define o tamanho dos componentes de formul\xE1rio no template:"),og(),Sl(201,"ul")(202,"li")(203,"code"),rN(204,"small"),og(),rN(205,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),og(),Sl(206,"li")(207,"code"),rN(208,"medium"),og(),rN(209,": aplica a medida medium de cada componente."),og()(),Sl(210,"blockquote")(211,"p"),rN(212,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Sl(213,"code"),rN(214,"medium"),og(),rN(215,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Sl(216,"a",26),rN(217,"po-theme"),og(),rN(218,"."),og()()()(),Sl(219,"tr",16)(220,"td",17)(221,"div",18)(222,"span",19),rN(223," p-disclaimer-group"),Wl(224,"br"),og()()(),Sl(225,"td",20)(226,"code",27),rN(227,"PoDisclaimerGroup"),og()(),Sl(228,"td",22),rN(229,"-"),og(),Sl(230,"td",23)(231,"em")(232,"strong"),rN(233,"(opcional)"),og()(),Sl(234,"p"),rN(235,"Objeto que implementa as propriedades da interface "),Sl(236,"code"),rN(237,"PoDisclaimerGroup"),og(),rN(238,"."),og()()(),Sl(239,"tr",16)(240,"td",17)(241,"div",18)(242,"span",19),rN(243," p-filter"),Wl(244,"br"),og()()(),Sl(245,"td",20)(246,"code",28),rN(247,"PoPageFilter"),og()(),Sl(248,"td",22),rN(249,"-"),og(),Sl(250,"td",23)(251,"p"),rN(252,"Objeto que implementa as propriedades da interface "),Sl(253,"code"),rN(254,"PoPageFilter"),og(),rN(255,"."),og()()(),Sl(256,"tr",16)(257,"td",17)(258,"div",18)(259,"span",19),rN(260," p-literals"),Wl(261,"br"),og()()(),Sl(262,"td",20)(263,"code",29),rN(264,"PoPageListLiterals"),og()(),Sl(265,"td",22),rN(266,"-"),og(),Sl(267,"td",23)(268,"em")(269,"strong"),rN(270,"(opcional)"),og()(),Sl(271,"p"),rN(272,"Objeto com as literais usadas no "),Sl(273,"code"),rN(274,"po-page-list"),og(),rN(275,"."),og(),Sl(276,"p"),rN(277,"Existem duas maneiras de customizar o componente, passando um objeto com todas as literais dispon\xEDveis:"),og(),Sl(278,"pre")(279,"code"),rN(280,`const customLiterals: PoPageListLiterals = {
  otherActions: 'Mais a\xE7\xF5es'
};
`),og()(),Sl(281,"p"),rN(282,"Ou passando apenas as literais que deseja customizar:"),og(),Sl(283,"pre")(284,"code"),rN(285,`const customLiterals: PoPageListLiterals = {
  otherActions: 'A\xE7\xF5es da p\xE1gina'
};
`),og()(),Sl(286,"p"),rN(287,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente."),og(),Sl(288,"pre")(289,"code"),rN(290,`<po-page-list
  [p-literals]="customLiterals">
</po-page-list>
`),og()(),Sl(291,"blockquote")(292,"p"),rN(293,"O valor padr\xE3o ser\xE1 traduzido de acordo com o idioma configurado no "),Sl(294,"a",30)(295,"code"),rN(296,"PoI18nService"),og()(),rN(297," ou "),Sl(298,"em"),rN(299,"browser"),og(),rN(300,"."),og()()()(),Sl(301,"tr",16)(302,"td",17)(303,"div",18)(304,"span",19),rN(305," p-quick-search-value"),Wl(306,"br"),og()()(),Sl(307,"td",20)(308,"code",25),rN(309,"string"),og()(),Sl(310,"td",22),rN(311,"-"),og(),Sl(312,"td",23)(313,"em")(314,"strong"),rN(315,"(opcional)"),og()(),Sl(316,"p"),rN(317,"Valor padr\xE3o na busca r\xE1pida ao inicializar o componente"),og()()(),Sl(318,"tr",16)(319,"td",17)(320,"div",18)(321,"span",19),rN(322," p-subtitle"),Wl(323,"br"),og()()(),Sl(324,"td",20)(325,"code",25),rN(326,"string"),og()(),Sl(327,"td",22),rN(328,"-"),og(),Sl(329,"td",23)(330,"em")(331,"strong"),rN(332,"(opcional)"),og()(),Sl(333,"p"),rN(334,"Subtitulo do Header da p\xE1gina."),og(),Sl(335,"p"),rN(336,"Suporta formata\xE7\xE3o b\xE1sica com as tags "),Sl(337,"code"),rN(338,"<b>"),og(),rN(339," (negrito), "),Sl(340,"code"),rN(341,"<strong>"),og(),rN(342," (negrito), "),Sl(343,"code"),rN(344,"<i>"),og(),rN(345," (it\xE1lico), "),Sl(346,"code"),rN(347,"<em>"),og(),rN(348,` (it\xE1lico) e
`),Sl(349,"code"),rN(350,"<u>"),og(),rN(351," (sublinhado)."),og(),Sl(352,"p"),rN(353,"Exemplo:"),og(),Sl(354,"pre")(355,"code",31),rN(356,`subtitle = 'Manage <b>active</b> and <i>pending</i> processes';
`),og()(),Sl(357,"blockquote")(358,"p"),rN(359,"Requer que "),Sl(360,"code"),rN(361,"p-title"),og(),rN(362," esteja definido."),og()()()(),Sl(363,"tr",16)(364,"td",17)(365,"div",18)(366,"span",19),rN(367," p-title"),Wl(368,"br"),og()()(),Sl(369,"td",20)(370,"code",25),rN(371,"string"),og()(),Sl(372,"td",22),rN(373,"-"),og(),Sl(374,"td",23)(375,"p"),rN(376,"T\xEDtulo da p\xE1gina."),og()()()(),Sl(377,"h3",12),rN(378,"M\xE9todos"),og(),Sl(379,"table",32)(380,"tr",16)(381,"th",33)(382,"div",18)(383,"h4")(384,"span",19),rN(385," clearInputSearch "),og()()()()(),Sl(386,"tr",23)(387,"td",23)(388,"p"),rN(389,"Limpa o campo de pesquisa."),og()()()(),Wl(390,"br"),Sl(391,"h3"),rN(392,"Interfaces"),og(),Sl(393,"h4",34)(394,"code",5),rN(395,"PoBreadcrumbItem"),og()(),Sl(396,"div",2)(397,"p"),rN(398,"Interface que define cada item do componente "),Sl(399,"strong"),rN(400,"po-breadcrumb"),og(),rN(401,"."),og()(),Sl(402,"h4",12),rN(403,"Propriedades"),og(),Sl(404,"table",13)(405,"tr",14)(406,"th",15),rN(407,"Nome"),og(),Sl(408,"th",15),rN(409,"Tipo"),og(),Sl(410,"th",15),rN(411,"Descri\xE7\xE3o"),og()(),Sl(412,"tr",16)(413,"td",17)(414,"div",18)(415,"span",19),rN(416," action"),Wl(417,"br"),og()()(),Sl(418,"td",20)(419,"code",35),rN(420,"Function"),og()(),Sl(421,"td",23)(422,"em")(423,"strong"),rN(424,"(opcional)"),og()(),Sl(425,"p"),rN(426,"A\xE7\xE3o executada ao clicar no item."),og(),Sl(427,"blockquote")(428,"p"),rN(429,"A fun\xE7\xE3o atribu\xEDda a esta propriedade receber\xE1 o "),Sl(430,"em"),rN(431,"label"),og(),rN(432," do item como par\xE2metro para execu\xE7\xE3o."),og()()()(),Sl(433,"tr",16)(434,"td",17)(435,"div",18)(436,"span",19),rN(437," label"),Wl(438,"br"),og()()(),Sl(439,"td",20)(440,"code",25),rN(441,"string"),og()(),Sl(442,"td",23)(443,"p"),rN(444,"R\xF3tulo do item."),og()()(),Sl(445,"tr",16)(446,"td",17)(447,"div",18)(448,"span",19),rN(449," link"),Wl(450,"br"),og()()(),Sl(451,"td",20)(452,"code",25),rN(453,"string"),og()(),Sl(454,"td",23)(455,"em")(456,"strong"),rN(457,"(opcional)"),og()(),Sl(458,"p"),rN(459,"Url do item."),og(),Sl(460,"blockquote")(461,"p"),rN(462,"Caso o item tamb\xE9m contenha uma "),Sl(463,"em"),rN(464,"action"),og(),rN(465," definida, a prefer\xEAncia de execu\xE7\xE3o ser\xE1 do "),Sl(466,"em"),rN(467,"link"),og(),rN(468,"."),og()(),Sl(469,"blockquote")(470,"p"),rN(471,`Para o correto funcionamento, \xE9 necess\xE1rio que haja uma rota referenciando seu valor.
`),Sl(472,"strong")(473,"a",36),rN(474,"Veja um exemplo de como criar rotas aqui"),og()(),rN(475,"."),og()(),Sl(476,"blockquote")(477,"p"),rN(478,"Esta propriedade \xE9 necess\xE1ria para que a propriedade "),Sl(479,"code"),rN(480,"p-favorite-service"),og(),rN(481," consiga favoritar ou desfavoritar."),og()()()()(),Sl(482,"h4",34)(483,"code",5),rN(484,"PoBreadcrumb"),og()(),Sl(485,"div",2)(486,"p"),rN(487,"Interface que define o "),Sl(488,"code"),rN(489,"po-breadcrumb"),og(),rN(490,"."),og()(),Sl(491,"h4",12),rN(492,"Propriedades"),og(),Sl(493,"table",13)(494,"tr",14)(495,"th",15),rN(496,"Nome"),og(),Sl(497,"th",15),rN(498,"Tipo"),og(),Sl(499,"th",15),rN(500,"Descri\xE7\xE3o"),og()(),Sl(501,"tr",16)(502,"td",17)(503,"div",18)(504,"span",19),rN(505," favorite"),Wl(506,"br"),og()()(),Sl(507,"td",20)(508,"code",25),rN(509,"string"),og()(),Sl(510,"td",23)(511,"em")(512,"strong"),rN(513,"(opcional)"),og()(),Sl(514,"p"),rN(515,"Permite definir uma URL para favoritar ou desfavoritar."),og(),Sl(516,"blockquote")(517,"p"),rN(518,"Para maiores informa\xE7\xF5es verificar a propriedade "),Sl(519,"code"),rN(520,"p-favorite-service"),og(),rN(521," do componente "),Sl(522,"code"),rN(523,"po-breadcrumb"),og(),rN(524,"."),og()()()(),Sl(525,"tr",16)(526,"td",17)(527,"div",18)(528,"span",19),rN(529," items"),Wl(530,"br"),og()()(),Sl(531,"td",20)(532,"code",37),rN(533,"Array<PoBreadcrumbItem>"),og()(),Sl(534,"td",23)(535,"p"),rN(536,"Lista de itens do "),Sl(537,"em"),rN(538,"breadcrumb"),og(),rN(539,"."),og(),Sl(540,"p")(541,"strong"),rN(542,"Exemplo:"),og()(),Sl(543,"pre")(544,"code"),rN(545,`{ label: 'Po Portal', link: 'portal' }
`),og()()()(),Sl(546,"tr",16)(547,"td",17)(548,"div",18)(549,"span",19),rN(550," params"),Wl(551,"br"),og()()(),Sl(552,"td",20)(553,"code",38),rN(554,"object"),og()(),Sl(555,"td",23)(556,"em")(557,"strong"),rN(558,"(opcional)"),og()(),Sl(559,"p"),rN(560,"Objeto que possibilita o envio de par\xE2metros adicionais \xE0 requisi\xE7\xE3o."),og()()()(),Sl(561,"h4",34)(562,"code",5),rN(563,"PoDisclaimer"),og()(),Sl(564,"div",2)(565,"p"),rN(566,"Interface que representa o objeto "),Sl(567,"code"),rN(568,"po-disclaimer"),og(),rN(569,"."),og()(),Sl(570,"h4",12),rN(571,"Propriedades"),og(),Sl(572,"table",13)(573,"tr",14)(574,"th",15),rN(575,"Nome"),og(),Sl(576,"th",15),rN(577,"Tipo"),og(),Sl(578,"th",15),rN(579,"Descri\xE7\xE3o"),og()(),Sl(580,"tr",16)(581,"td",17)(582,"div",18)(583,"span",19),rN(584," hideClose"),Wl(585,"br"),og()()(),Sl(586,"td",20)(587,"code",39),rN(588,"boolean"),og()(),Sl(589,"td",23)(590,"em")(591,"strong"),rN(592,"(opcional)"),og()(),Sl(593,"p"),rN(594,"Se verdadeiro, oculta o bot\xE3o para fechar o "),Sl(595,"em"),rN(596,"disclaimer"),og(),rN(597,"."),og()()(),Sl(598,"tr",16)(599,"td",17)(600,"div",18)(601,"span",19),rN(602," label"),Wl(603,"br"),og()()(),Sl(604,"td",20)(605,"code",25),rN(606,"string"),og()(),Sl(607,"td",23)(608,"em")(609,"strong"),rN(610,"(opcional)"),og()(),Sl(611,"p"),rN(612,"Texto de exibi\xE7\xE3o do objeto."),og()()(),Sl(613,"tr",16)(614,"td",17)(615,"div",18)(616,"span",19),rN(617," property"),Wl(618,"br"),og()()(),Sl(619,"td",20)(620,"code",25),rN(621,"string"),og()(),Sl(622,"td",23)(623,"em")(624,"strong"),rN(625,"(opcional)"),og()(),Sl(626,"p"),rN(627,"Nome da propriedade vinculada ao objeto "),Sl(628,"em"),rN(629,"disclaimer"),og(),rN(630,"."),og()()(),Sl(631,"tr",16)(632,"td",17)(633,"div",18)(634,"span",19),rN(635," value"),Wl(636,"br"),og()()(),Sl(637,"td",20)(638,"code",40),rN(639,"any"),og()(),Sl(640,"td",23)(641,"p"),rN(642,"Valor do objeto."),og()()()(),Sl(643,"h4",34)(644,"code",5),rN(645,"PoDisclaimerGroupRemoveAction"),og()(),Sl(646,"div",2)(647,"p"),rN(648,"Estrutura do objeto representando o estado dos "),Sl(649,"em"),rN(650,"disclaimers"),og(),rN(651," ap\xF3s a remo\xE7\xE3o."),og()(),Sl(652,"h4",12),rN(653,"Propriedades"),og(),Sl(654,"table",13)(655,"tr",14)(656,"th",15),rN(657,"Nome"),og(),Sl(658,"th",15),rN(659,"Tipo"),og(),Sl(660,"th",15),rN(661,"Descri\xE7\xE3o"),og()(),Sl(662,"tr",16)(663,"td",17)(664,"div",18)(665,"span",19),rN(666," currentDisclaimers"),Wl(667,"br"),og()()(),Sl(668,"td",20)(669,"code",41),rN(670,"Array<PoDisclaimer>"),og()(),Sl(671,"td",23)(672,"p"),rN(673,"Lista com os "),Sl(674,"em"),rN(675,"disclaimers"),og(),rN(676," atuais (restantes)."),og()()(),Sl(677,"tr",16)(678,"td",17)(679,"div",18)(680,"span",19),rN(681," removedDisclaimer"),Wl(682,"br"),og()()(),Sl(683,"td",20)(684,"code",42),rN(685,"PoDisclaimer"),og()(),Sl(686,"td",23)(687,"p")(688,"em"),rN(689,"Disclaimer"),og(),rN(690," que foi removido."),og()()()(),Sl(691,"h4",34)(692,"code",5),rN(693,"PoDisclaimerGroup"),og()(),Sl(694,"div",2)(695,"p"),rN(696,"Interface que representa o objeto "),Sl(697,"code"),rN(698,"po-disclaimer-group"),og(),rN(699,"."),og()(),Sl(700,"h4",12),rN(701,"Propriedades"),og(),Sl(702,"table",13)(703,"tr",14)(704,"th",15),rN(705,"Nome"),og(),Sl(706,"th",15),rN(707,"Tipo"),og(),Sl(708,"th",15),rN(709,"Descri\xE7\xE3o"),og()(),Sl(710,"tr",16)(711,"td",17)(712,"div",18)(713,"span",19),rN(714," change"),Wl(715,"br"),og()()(),Sl(716,"td",20)(717,"code",35),rN(718,"Function"),og()(),Sl(719,"td",23)(720,"em")(721,"strong"),rN(722,"(opcional)"),og()(),Sl(723,"p"),rN(724,"Fun\xE7\xE3o que ser\xE1 disparada quando a lista de "),Sl(725,"em"),rN(726,"disclaimers"),og(),rN(727,` for modificada.
Ser\xE1 passado por par\xE2metro a nova lista de `),Sl(728,"em"),rN(729,"disclaimers"),og(),rN(730,"."),og()()(),Sl(731,"tr",16)(732,"td",17)(733,"div",18)(734,"span",19),rN(735," disclaimers"),Wl(736,"br"),og()()(),Sl(737,"td",20)(738,"code",41),rN(739,"Array<PoDisclaimer>"),og()(),Sl(740,"td",23)(741,"p"),rN(742,"Lista de "),Sl(743,"em"),rN(744,"disclaimers"),og(),rN(745,"."),og(),Sl(746,"p"),rN(747,"Exemplo:"),og(),Sl(748,"pre")(749,"code"),rN(750,`disclaimers: [
  { property: 'type', label: 'Hotel', value: 'hotel' },
  { property: 'cost', label: '$500,00', value: '500'  },
  { property: 'dates', label: '10/05/2018 - 15/05/2018', value: '10/05/2018|15/05/2018'  }
 ]
`),og()(),Sl(751,"p"),rN(752,"Para que a lista de "),Sl(753,"em"),rN(754,"disclaimers"),og(),rN(755," seja atualizada dinamicamente deve-se passar uma nova refer\xEAncia do array de "),Sl(756,"code"),rN(757,"PoDisclaimer"),og(),rN(758,"."),og(),Sl(759,"p"),rN(760,"Exemplo:"),og(),Sl(761,"pre")(762,"code"),rN(763,`this.disclaimerGroup.disclaimers = [...this.disclaimers];
`),og()()()(),Sl(764,"tr",16)(765,"td",17)(766,"div",18)(767,"span",19),rN(768," hideRemoveAll"),Wl(769,"br"),og()()(),Sl(770,"td",20)(771,"code",39),rN(772,"boolean"),og()(),Sl(773,"td",23)(774,"em")(775,"strong"),rN(776,"(opcional)"),og()(),Sl(777,"p"),rN(778,"Oculta o bot\xE3o para remover todos os "),Sl(779,"em"),rN(780,"disclaimers"),og(),rN(781," do grupo."),og(),Sl(782,"blockquote")(783,"p"),rN(784,"Por padr\xE3o, o mesmo \xE9 exibido \xE0 partir de dois ou mais "),Sl(785,"em"),rN(786,"disclaimers"),og(),rN(787," com a op\xE7\xE3o "),Sl(788,"code"),rN(789,"hideClose"),og(),rN(790," habilitada."),og()()()(),Sl(791,"tr",16)(792,"td",17)(793,"div",18)(794,"span",19),rN(795," remove"),Wl(796,"br"),og()()(),Sl(797,"td",20)(798,"code",35),rN(799,"Function"),og()(),Sl(800,"td",23)(801,"em")(802,"strong"),rN(803,"(opcional)"),og()(),Sl(804,"p"),rN(805,"Fun\xE7\xE3o que ser\xE1 disparada quando um "),Sl(806,"em"),rN(807,"disclaimer"),og(),rN(808,` for removido da lista de
`),Sl(809,"em"),rN(810,"disclaimers"),og(),rN(811," pelo usu\xE1rio."),og(),Sl(812,"p"),rN(813,"Recebe como par\xE2metro um objeto conforme a interface "),Sl(814,"code"),rN(815,"PoDisclaimerGroupRemoveAction"),og(),rN(816,"."),og()()(),Sl(817,"tr",16)(818,"td",17)(819,"div",18)(820,"span",19),rN(821," removeAll"),Wl(822,"br"),og()()(),Sl(823,"td",20)(824,"code",35),rN(825,"Function"),og()(),Sl(826,"td",23)(827,"em")(828,"strong"),rN(829,"(opcional)"),og()(),Sl(830,"p"),rN(831,"Fun\xE7\xE3o que ser\xE1 disparada quando todos os "),Sl(832,"em"),rN(833,"disclaimers"),og(),rN(834," forem removidos da lista de "),Sl(835,"em"),rN(836,"disclaimers"),og(),rN(837,` pelo usu\xE1rio,
utilizando o bot\xE3o "remover todos".`),og(),Sl(838,"p"),rN(839,"Recebe como par\xE2metro uma lista contendo todos os "),Sl(840,"code"),rN(841,"disclaimers"),og(),rN(842," removidos."),og()()(),Sl(843,"tr",16)(844,"td",17)(845,"div",18)(846,"span",19),rN(847," title"),Wl(848,"br"),og()()(),Sl(849,"td",20)(850,"code",25),rN(851,"string"),og()(),Sl(852,"td",23)(853,"em")(854,"strong"),rN(855,"(opcional)"),og()(),Sl(856,"p"),rN(857,"T\xEDtulo do grupo de "),Sl(858,"em"),rN(859,"disclaimers"),og(),rN(860,"."),og()()()(),Sl(861,"h4",34)(862,"code",5),rN(863,"PoPageAction"),og()(),Sl(864,"div",2)(865,"p"),rN(866,"Interface para as a\xE7\xF5es dos componentes "),Sl(867,"code"),rN(868,"po-page-default"),og(),rN(869," e "),Sl(870,"code"),rN(871,"po-page-list"),og(),rN(872,"."),og(),Sl(873,"p"),rN(874,"As a\xE7\xF5es podem ser exibidas como bot\xF5es no cabe\xE7alho ou agrupadas em um "),Sl(875,"em"),rN(876,"dropdown"),og(),rN(877,`,
conforme o `),Sl(878,"code"),rN(879,"PoPageActionsLayout"),og(),rN(880," e o tamanho da tela."),og(),Sl(881,"blockquote")(882,"p"),rN(883,"As propriedades "),Sl(884,"code"),rN(885,"separator"),og(),rN(886,", "),Sl(887,"code"),rN(888,"selected"),og(),rN(889," e "),Sl(890,"code"),rN(891,"subItems"),og(),rN(892,` possuem efeito apenas quando
a a\xE7\xE3o \xE9 exibida dentro do `),Sl(893,"em"),rN(894,"dropdown"),og(),rN(895,"."),og()()(),Sl(896,"h4",12),rN(897,"Propriedades"),og(),Sl(898,"table",13)(899,"tr",14)(900,"th",15),rN(901,"Nome"),og(),Sl(902,"th",15),rN(903,"Tipo"),og(),Sl(904,"th",15),rN(905,"Descri\xE7\xE3o"),og()(),Sl(906,"tr",16)(907,"td",17)(908,"div",18)(909,"span",19),rN(910," action"),Wl(911,"br"),og()()(),Sl(912,"td",20)(913,"code",35),rN(914,"Function"),og()(),Sl(915,"td",23)(916,"em")(917,"strong"),rN(918,"(opcional)"),og()(),Sl(919,"p"),rN(920,"A\xE7\xE3o que ser\xE1 executada, sendo poss\xEDvel passar o nome ou a refer\xEAncia da fun\xE7\xE3o."),og(),Sl(921,"p"),rN(922,"A action tamb\xE9m pode ser executada para o agrupador de subitens quando a a\xE7\xE3o possuir "),Sl(923,"code"),rN(924,"subItems"),og(),rN(925,"."),og(),Sl(926,"blockquote")(927,"p"),rN(928,"Para que a fun\xE7\xE3o seja executada no contexto do componente, utilize "),Sl(929,"em"),rN(930,"bind"),og(),rN(931,`:
`),Sl(932,"code"),rN(933,"action: this.myFunction.bind(this)"),og()()()()(),Sl(934,"tr",16)(935,"td",17)(936,"div",18)(937,"span",19),rN(938," disabled"),Wl(939,"br"),og()()(),Sl(940,"td",20)(941,"code",39),rN(942,"boolean "),og(),Sl(943,"code",35),rN(944," Function"),og()(),Sl(945,"td",23)(946,"em")(947,"strong"),rN(948,"(opcional)"),og()(),Sl(949,"p"),rN(950,"Desabilita a a\xE7\xE3o. Aceita um valor booleano ou uma fun\xE7\xE3o que retorna booleano."),og()()(),Sl(951,"tr",16)(952,"td",17)(953,"div",18)(954,"span",19),rN(955," icon"),Wl(956,"br"),og()()(),Sl(957,"td",20)(958,"code",25),rN(959,"string "),og(),Sl(960,"code",43),rN(961," TemplateRef<void>"),og()(),Sl(962,"td",23)(963,"em")(964,"strong"),rN(965,"(opcional)"),og()(),Sl(966,"p"),rN(967,"\xCDcone exibido ao lado esquerdo do r\xF3tulo."),og(),Sl(968,"p"),rN(969,"Aceita \xEDcones da "),Sl(970,"a",6),rN(971,"Biblioteca de \xEDcones"),og(),rN(972,`, fontes externas (ex: Font Awesome)
ou um `),Sl(973,"code"),rN(974,"TemplateRef"),og(),rN(975," para \xEDcones customizados."),og(),Sl(976,"pre")(977,"code"),rN(978,`{ label: 'A\xE7\xE3o', icon: 'an an-newspaper' }
`),og()()()(),Sl(979,"tr",16)(980,"td",17)(981,"div",18)(982,"span",19),rN(983," kind"),Wl(984,"br"),og()()(),Sl(985,"td",20)(986,"code",25),rN(987,"string"),og()(),Sl(988,"td",23)(989,"em")(990,"strong"),rN(991,"(opcional)"),og()(),Sl(992,"p"),rN(993,"Define o estilo visual da a\xE7\xE3o quando exibida como bot\xE3o fora do "),Sl(994,"em"),rN(995,"dropdown"),og(),rN(996,"."),og(),Sl(997,"p"),rN(998,"Valores permitidos:"),og(),Sl(999,"ul")(1e3,"li")(1001,"code"),rN(1002,"primary"),og(),rN(1003,": bot\xE3o com maior destaque visual."),og(),Sl(1004,"li")(1005,"code"),rN(1006,"secondary"),og(),rN(1007,": estilo padr\xE3o."),og()(),Sl(1008,"blockquote")(1009,"p"),rN(1010,"Valores inv\xE1lidos s\xE3o ignorados e o componente aplica o estilo padr\xE3o da posi\xE7\xE3o."),og()(),Sl(1011,"blockquote")(1012,"p"),rN(1013,"Somente uma a\xE7\xE3o pode ter "),Sl(1014,"code"),rN(1015,"kind"),og(),rN(1016," igual a "),Sl(1017,"code"),rN(1018,"primary"),og(),rN(1019,". Caso mais de uma defina "),Sl(1020,"code"),rN(1021,"primary"),og(),rN(1022,`,
apenas a primeira ser\xE1 mantida e as demais receber\xE3o `),Sl(1023,"code"),rN(1024,"secondary"),og(),rN(1025,"."),og()(),Sl(1026,"blockquote")(1027,"p"),rN(1028,"Quando n\xE3o definido, o estilo \xE9 determinado pelo "),Sl(1029,"code"),rN(1030,"PoPageActionsLayout"),og(),rN(1031,"."),og()()()(),Sl(1032,"tr",16)(1033,"td",17)(1034,"div",18)(1035,"span",19),rN(1036," label"),Wl(1037,"br"),og()()(),Sl(1038,"td",20)(1039,"code",25),rN(1040,"string"),og()(),Sl(1041,"td",23)(1042,"p"),rN(1043,"R\xF3tulo da a\xE7\xE3o."),og(),Sl(1044,"p"),rN(1045,"A label tamb\xE9m pode representar o agrupador de subitens quando a a\xE7\xE3o possuir "),Sl(1046,"code"),rN(1047,"subItems"),og(),rN(1048,"."),og()()(),Sl(1049,"tr",16)(1050,"td",17)(1051,"div",18)(1052,"span",19),rN(1053," selected"),Wl(1054,"br"),og()()(),Sl(1055,"td",20)(1056,"code",39),rN(1057,"boolean"),og()(),Sl(1058,"td",23)(1059,"em")(1060,"strong"),rN(1061,"(opcional)"),og()(),Sl(1062,"p"),rN(1063,"Define se a a\xE7\xE3o est\xE1 selecionada."),og()()(),Sl(1064,"tr",16)(1065,"td",17)(1066,"div",18)(1067,"span",19),rN(1068," separator"),Wl(1069,"br"),og()()(),Sl(1070,"td",20)(1071,"code",39),rN(1072,"boolean"),og()(),Sl(1073,"td",23)(1074,"em")(1075,"strong"),rN(1076,"(opcional)"),og()(),Sl(1077,"p"),rN(1078,"Atribui uma linha separadora acima do item."),og()()(),Sl(1079,"tr",16)(1080,"td",17)(1081,"div",18)(1082,"span",19),rN(1083," subItems"),Wl(1084,"br"),og()()(),Sl(1085,"td",20)(1086,"code",44),rN(1087,"Array<PoPopupAction>"),og()(),Sl(1088,"td",23)(1089,"em")(1090,"strong"),rN(1091,"(opcional)"),og()(),Sl(1092,"p"),rN(1093,"Define uma lista de subitens para cria\xE7\xE3o de menus aninhados."),og(),Sl(1094,"p"),rN(1095,`Ao definir esta propriedade, o item exibir\xE1 um \xEDcone indicador de subn\xEDvel.
Recomenda-se utilizar no m\xE1ximo tr\xEAs n\xEDveis hier\xE1rquicos para garantir a usabilidade.`),og(),Sl(1096,"blockquote")(1097,"p"),rN(1098,"As propriedades "),Sl(1099,"code"),rN(1100,"disabled"),og(),rN(1101,", "),Sl(1102,"code"),rN(1103,"type"),og(),rN(1104," e "),Sl(1105,"code"),rN(1106,"visible"),og(),rN(1107," n\xE3o s\xE3o aplicadas visualmente ao item agrupador."),og()(),Sl(1108,"blockquote")(1109,"p"),rN(1110,"Quando "),Sl(1111,"code"),rN(1112,"url"),og(),rN(1113," \xE9 informada em um agrupador, o redirecionamento ter\xE1 prioridade e os subitens n\xE3o ser\xE3o abertos."),og()(),Sl(1114,"blockquote")(1115,"p"),rN(1116,"Em subn\xEDveis aninhados, o "),Sl(1117,"code"),rN(1118,"icon"),og(),rN(1119," do agrupador \xE9 substitu\xEDdo pelo indicador de navega\xE7\xE3o (seta)."),og()()()(),Sl(1120,"tr",16)(1121,"td",17)(1122,"div",18)(1123,"span",19),rN(1124," type"),Wl(1125,"br"),og()()(),Sl(1126,"td",20)(1127,"code",25),rN(1128,"string"),og()(),Sl(1129,"td",23)(1130,"em")(1131,"strong"),rN(1132,"(opcional)"),og()(),Sl(1133,"p"),rN(1134,"Define a cor do item."),og(),Sl(1135,"p"),rN(1136,"Valores v\xE1lidos:"),og(),Sl(1137,"ul")(1138,"li")(1139,"code"),rN(1140,"default"),og()(),Sl(1141,"li")(1142,"code"),rN(1143,"danger"),og()()()()(),Sl(1144,"tr",16)(1145,"td",17)(1146,"div",18)(1147,"span",19),rN(1148," url"),Wl(1149,"br"),og()()(),Sl(1150,"td",20)(1151,"code",25),rN(1152,"string"),og()(),Sl(1153,"td",23)(1154,"em")(1155,"strong"),rN(1156,"(opcional)"),og()(),Sl(1157,"p"),rN(1158,"URL para redirecionamento. Aceita rotas internas e links externos."),og(),Sl(1159,"p"),rN(1160,`A url tamb\xE9m pode ser configurada para o agrupador de subitens.
Entretanto, quando a `),Sl(1161,"code"),rN(1162,"url"),og(),rN(1163," \xE9 informada em um agrupador, o clique "),Sl(1164,"strong"),rN(1165,"n\xE3o abrir\xE1 os subitens"),og(),rN(1166,`, pois o item ser\xE1
tratado como um link e o redirecionamento ter\xE1 prioridade sobre a exibi\xE7\xE3o da lista.`),og(),Sl(1167,"blockquote")(1168,"p"),rN(1169,"Quando informada, tem prioridade sobre a propriedade "),Sl(1170,"code"),rN(1171,"action"),og(),rN(1172,"."),og()()()(),Sl(1173,"tr",16)(1174,"td",17)(1175,"div",18)(1176,"span",19),rN(1177," visible"),Wl(1178,"br"),og()()(),Sl(1179,"td",20)(1180,"code",39),rN(1181,"boolean "),og(),Sl(1182,"code",35),rN(1183," Function"),og()(),Sl(1184,"td",23)(1185,"em")(1186,"strong"),rN(1187,"(opcional)"),og()(),Sl(1188,"p"),rN(1189,"Define a visibilidade da a\xE7\xE3o. Aceita um valor booleano ou uma fun\xE7\xE3o que retorna booleano."),og()()()(),Sl(1190,"h4",34)(1191,"code",5),rN(1192,"PoPageFilter"),og()(),Sl(1193,"div",2)(1194,"p"),rN(1195,"Interface para o atributo "),Sl(1196,"code"),rN(1197,"filter"),og(),rN(1198," do componente "),Sl(1199,"code"),rN(1200,"po-page-list"),og(),rN(1201,"."),og()(),Sl(1202,"h4",12),rN(1203,"Propriedades"),og(),Sl(1204,"table",13)(1205,"tr",14)(1206,"th",15),rN(1207,"Nome"),og(),Sl(1208,"th",15),rN(1209,"Tipo"),og(),Sl(1210,"th",15),rN(1211,"Descri\xE7\xE3o"),og()(),Sl(1212,"tr",16)(1213,"td",17)(1214,"div",18)(1215,"span",19),rN(1216," action"),Wl(1217,"br"),og()()(),Sl(1218,"td",20)(1219,"code",35),rN(1220,"Function"),og()(),Sl(1221,"td",23)(1222,"em")(1223,"strong"),rN(1224,"(opcional)"),og()(),Sl(1225,"p"),rN(1226,"A\xE7\xE3o a ser executada."),og()()(),Sl(1227,"tr",16)(1228,"td",17)(1229,"div",18)(1230,"span",19),rN(1231," advancedAction"),Wl(1232,"br"),og()()(),Sl(1233,"td",20)(1234,"code",35),rN(1235,"Function"),og()(),Sl(1236,"td",23)(1237,"em")(1238,"strong"),rN(1239,"(opcional)"),og()(),Sl(1240,"p"),rN(1241,`A\xE7\xE3o a ser executada quando for disparado o
evento de `),Sl(1242,"em"),rN(1243,"click"),og(),rN(1244," atrav\xE9s do r\xF3tulo "),Sl(1245,"strong"),rN(1246,"Busca Avan\xE7ada"),og(),rN(1247,"."),og()()(),Sl(1248,"tr",16)(1249,"td",17)(1250,"div",18)(1251,"span",19),rN(1252," placeholder"),Wl(1253,"br"),og()()(),Sl(1254,"td",20)(1255,"code",25),rN(1256,"string"),og()(),Sl(1257,"td",23)(1258,"em")(1259,"strong"),rN(1260,"(opcional)"),og()(),Sl(1261,"p"),rN(1262,"Texto de instru\xE7\xE3o exibido dentro do campo de filtro."),og()()(),Sl(1263,"tr",16)(1264,"td",17)(1265,"div",18)(1266,"span",19),rN(1267," width"),Wl(1268,"br"),og()()(),Sl(1269,"td",20)(1270,"code",45),rN(1271,"number"),og()(),Sl(1272,"td",23)(1273,"em")(1274,"strong"),rN(1275,"(opcional)"),og()(),Sl(1276,"p"),rN(1277,"Tamanho do filtro em tela, utilizando o "),Sl(1278,"em"),rN(1279,"Grid System"),og(),rN(1280,`,
e limitado ao m\xE1ximo de 6 colunas. O tamanho m\xEDnimo \xE9 controlado
conforme resolu\xE7\xE3o de tela para manter a consist\xEAncia do layout.`),og()()()(),Sl(1281,"h4",34)(1282,"code",5),rN(1283,"PoPageListLiterals"),og()(),Sl(1284,"div",2)(1285,"p"),rN(1286,"Interface para defini\xE7\xE3o das literais usadas no "),Sl(1287,"code"),rN(1288,"po-page-list"),og(),rN(1289,"."),og()(),Sl(1290,"h4",12),rN(1291,"Propriedades"),og(),Sl(1292,"table",13)(1293,"tr",14)(1294,"th",15),rN(1295,"Nome"),og(),Sl(1296,"th",15),rN(1297,"Tipo"),og(),Sl(1298,"th",15),rN(1299,"Descri\xE7\xE3o"),og()(),Sl(1300,"tr",16)(1301,"td",17)(1302,"div",18)(1303,"span",19),rN(1304," otherActions"),Wl(1305,"br"),og()()(),Sl(1306,"td",20)(1307,"code",25),rN(1308,"string"),og()(),Sl(1309,"td",23)(1310,"em")(1311,"strong"),rN(1312,"(opcional)"),og()(),Sl(1313,"p"),rN(1314,"Legenda do "),Sl(1315,"code"),rN(1316,"po-dropdown"),og(),rN(1317," de a\xE7\xF5es."),og()()()()());},dependencies:[Ka],encapsulation:2,changeDetection:1})}return s})();var Ce=(()=>{class s{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(l,r){this.route=l,this.router=r;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let r=l.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:"merge"}),this.activeTab=l;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(r){return new(r||s)(w(Xn),w(En))};static \u0275cmp=Un({type:s,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Page List",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,n){r&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return n.changeTab("doc")}),Wl(3,"sample-po-page-list-doc"),og(),Sl(4,"po-tab",3),ft("p-click",function(){return n.changeTab("web")}),Wl(5,"sample-po-page-list-basic-view")(6,"sample-po-page-list-labs-view")(7,"sample-po-page-list-hiring-processes-view"),og()()()),r&2&&(rw("p-actions",n.actions),Lp(2),rw("p-active",n.activeTab==="doc"),Lp(2),rw("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"));},dependencies:[sNe,Ume,$me,Ee,fe,xe,ve],encapsulation:2,changeDetection:1})}return s})();var Ge=[{path:"",component:Ce}],ye=(()=>{class s{static \u0275fac=function(r){return new(r||s)};static \u0275mod=fe$1({type:s});static \u0275inj=ue({imports:[mL.forChild(Ge),mL]})}return s})();var vt=(()=>{class s{static \u0275fac=function(r){return new(r||s)};static \u0275mod=fe$1({type:s});static \u0275inj=ue({imports:[sr,ye]})}return s})();export{vt as DocPoPageListModule};