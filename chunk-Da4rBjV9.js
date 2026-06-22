import {f as fe$1,u as ue,s as sr,h as hL,w,c3 as Xn,E as En,U as Un,a as f,aW as Yp,I,c5 as Lde,$ as lNe,H as Wl,an as CO,aH as Ka,b8 as Bme,b9 as qme,F as Sl,z as eN,J as og,a1 as ft,L as Lp,ar as $x,au as dg,Q as nw,bs as fN,aX as Z9,bv as gb,aF as G9,aY as q9,aG as _k,aZ as mk,b0 as Qt,b1 as mv,c4 as b3,b4 as L3,c8 as wde,aJ as Hhe,bH as M3,c9 as Ghe,aB as wx,aM as ww,aN as e0,bd as Nx,aO as Ew,aP as n0,bF as Lw,b6 as Yo,b7 as k3,R as we,av as ql,aw as lo,ax as uo,a3 as rNe,aD as Ky,aT as nN,aE as Xy}from'./main-WP3NAV7C.js';var be=(()=>{class s{static \u0275fac=function(r){return new(r||s)};static \u0275cmp=Un({type:s,selectors:[["sample-po-page-list-basic"]],standalone:false,decls:1,vars:0,consts:[["p-title","PO Page List"]],template:function(r,n){r&1&&Wl(0,"po-page-list",0);},dependencies:[lNe],encapsulation:2,changeDetection:1})}return s})();var _e=s=>({"docs-sample-code-tabs":s}),Ee=(()=>{class s{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||s)};static \u0275cmp=Un({type:s,selectors:[["sample-po-page-list-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Page List Basic"),og(),Sl(4,"a",2),ft("click",function(){return n.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-page-list-basic/sample-po-page-list-basic.component.html"),og(),Sl(13,"pre",7),eN(14,`<po-page-list p-title="PO Page List"> </po-page-list>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-page-list-basic/sample-po-page-list-basic.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-page-list-basic',
  templateUrl: './sample-po-page-list-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageListBasicComponent {}
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-page-list-basic"),og(),Wl(23,"hr")),r&2&&(Lp(5),$x("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,_e,n.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,be],encapsulation:2})}return s})();var Se=(()=>{class s{poNotification=f(Yp);action;actions;breadcrumb;breadcrumbItem;breadcrumbParams;componentsSize;customLiterals;disclaimerGroupHideRemoveAll;disclaimerGroupTitle;disclaimerHideClose;disclaimerLabel;disclaimerProperty;disclaimerValue;filterModel;literals;title;subtitle;disclaimerGroup;actionOptions=[{label:"Disabled",value:"disabled"},{label:"Separator",value:"separator"},{label:"Selected",value:"selected"},{label:"Visible",value:"visible"}];componentsSizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];filter={action:this.showAction.bind(this),advancedAction:this.showAdvanceAction.bind(this)};iconOptions=[{value:"an an-newspaper",label:"an an-newspaper"},{value:"an an-magnifying-glass",label:"an an-magnifying-glass"},{value:"an an-globe",label:"an an-globe"},{value:"fa fa-podcast",label:"fa fa-podcast"}];typeOptions=[{label:"Danger",value:"danger"},{label:"Default",value:"default"}];ngOnInit(){this.restore();}addAction(l){let r=Object.assign({},l);r.action=r.action?this.showAction.bind(this,r.action):void 0,this.actions=[...this.actions,r],this.restoreActionForm();}addBreadcrumbItem(){this.breadcrumb.items=this.breadcrumb.items.concat([this.breadcrumbItem]),this.breadcrumbItem={label:void 0,link:void 0};}addBreadcrumbParam(){let l={[this.breadcrumbParams.property]:this.breadcrumbParams.value};this.breadcrumb.params?this.breadcrumb.params=Object.assign(this.breadcrumb.params,l):this.breadcrumb.params=l,this.breadcrumbParams={};}addDisclaimer(){this.disclaimerGroup.disclaimers=[...this.disclaimerGroup.disclaimers,{label:this.disclaimerLabel,property:this.disclaimerProperty,hideClose:this.disclaimerHideClose,value:this.disclaimerValue}],this.disclaimerGroup=Object.assign({},this.disclaimerGroup),this.restoreDisclaimerModel();}addDisclaimerGroupParam(l,r){this.disclaimerGroup=Object.assign({},this.disclaimerGroup,{title:l,hideRemoveAll:r});}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals);}catch(l){this.customLiterals=void 0;}}onChangeDisclaimerGroupHideRemoveAll(l){this.addDisclaimerGroupParam(this.disclaimerGroupTitle,l);}restore(){this.actions=[],this.breadcrumb={items:[]},this.breadcrumbItem={label:void 0,link:void 0},this.breadcrumbParams={},this.componentsSize="medium",this.customLiterals=void 0,this.disclaimerGroup={title:this.disclaimerGroupTitle,disclaimers:[],hideRemoveAll:this.disclaimerGroupHideRemoveAll},this.disclaimerGroupHideRemoveAll=false,this.disclaimerGroupTitle=void 0,this.filterModel=void 0,this.filter.placeholder=void 0,this.filter.width=void 0,this.literals="",this.title="PO Page List",this.subtitle="",this.restoreDisclaimerModel(),this.restoreActionForm();}restoreActionForm(){this.action={label:void 0,visible:null};}restoreDisclaimerModel(){this.disclaimerHideClose=void 0,this.disclaimerLabel=void 0,this.disclaimerProperty=void 0,this.disclaimerValue=void 0;}showAction(l){this.poNotification.success(`Action clicked: ${l}`);}showAdvanceAction(l){this.poNotification.success(`Advance Action clicked: ${l}`);}static \u0275fac=function(r){return new(r||s)};static \u0275cmp=Un({type:s,selectors:[["sample-po-page-list-labs"]],standalone:false,decls:60,vars:40,consts:[["formAction","ngForm"],["formBreadcrumbFavorite","ngForm"],["formBreadcrumbItems","ngForm"],["formBreadcrumbParams","ngForm"],["formDisclaimers","ngForm"],["form","ngForm"],[3,"p-actions","p-breadcrumb","p-components-size","p-disclaimer-group","p-filter","p-literals","p-title","p-subtitle"],["p-label","Model",3,"p-value"],[1,"po-row"],["name","actionAction","p-clean","","p-label","Action",1,"po-md-6",3,"ngModelChange","ngModel"],["name","actionLabel","p-label","Label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","actionURL","p-label","URL",1,"po-md-6",3,"ngModelChange","ngModel"],["name","type","p-label","Type",1,"po-lg-3","po-md-6",3,"ngModelChange","ngModel","p-options"],["name","icon","p-label","Icon",1,"po-lg-3","po-md-6",3,"ngModelChange","ngModel","p-options"],["name","action","p-columns","4","p-indeterminate","","p-label","Action properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Add Action",1,"po-lg-3","po-md-4",3,"p-click","p-disabled"],["name","breadcrumbFavorite","p-clean","","p-help","https://po-sample-api.onrender.com/v1/favorite","p-label","Breadcrumb favorite",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel"],["name","breadcrumbItemLabel","p-clean","","p-label","Breadcrumb item label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","breadcrumbItemLink","p-clean","","p-label","Breadcrumb item link","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add breadcrumb item",1,"po-lg-3","po-md-4",3,"p-click","p-disabled"],["name","breadcrumbParamsProperty","p-clean","","p-label","Breadcrumb params property","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","breadcrumbParamsValue","p-clean","","p-label","Breadcrumb params value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add breadcrumb params",1,"po-lg-3","po-md-4",3,"p-click","p-disabled"],["name","disclaimerGroupTitle","p-clean","","p-label","Disclaimer group title",1,"po-md-6",3,"ngModelChange","p-change-model","ngModel"],["name","disclaimerGroupHideRemoveAll","p-label","Disclaimer group hide remove all","ngDefaultControl","",1,"po-md-6",3,"ngModelChange","p-change","ngModel"],["name","disclaimerLabel","p-clean","","p-label","Disclaimer label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","disclaimerProperty","p-clean","","p-label","Disclaimer property",1,"po-md-6",3,"ngModelChange","ngModel"],["name","disclaimerValue","p-clean","","p-label","Disclaimer value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","disclaimerHideClose","p-label","Disclaimer hide close",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add disclaimer",1,"po-lg-3","po-md-4",3,"p-click","p-disabled"],["name","title","p-label","Title","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","subtitle","p-label","Subtitle",1,"po-md-6",3,"ngModelChange","ngModel"],["name","filterPlaceholder","p-label","Filter placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","filterWidth","p-label","Filter width",1,"po-md-6",3,"ngModelChange","ngModel"],["name","literals","p-help",'Ex.: {"otherActions": "Mais a\xE7\xF5es"}',"p-label","Literals",1,"po-md-12","po-lg-6",3,"ngModelChange","p-change","ngModel"],["name","size","p-columns","4","p-label","Components size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(r,n){if(r&1){let d=wx();Sl(0,"po-page-list",6),Wl(1,"po-divider")(2,"po-info",7),og(),Wl(3,"po-divider"),Sl(4,"form",null,0)(6,"div",8)(7,"po-input",9),ww("ngModelChange",function(a){return Ky(d),nN(n.action.action,a)||(n.action.action=a),Xy(a)}),og(),e0(),Sl(8,"po-input",10),ww("ngModelChange",function(a){return Ky(d),nN(n.action.label,a)||(n.action.label=a),Xy(a)}),og(),e0(),Sl(9,"po-input",11),ww("ngModelChange",function(a){return Ky(d),nN(n.action.url,a)||(n.action.url=a),Xy(a)}),og(),e0(),Sl(10,"po-select",12),ww("ngModelChange",function(a){return Ky(d),nN(n.action.type,a)||(n.action.type=a),Xy(a)}),og(),e0(),Sl(11,"po-select",13),ww("ngModelChange",function(a){return Ky(d),nN(n.action.icon,a)||(n.action.icon=a),Xy(a)}),og(),e0(),Sl(12,"po-checkbox-group",14),ww("ngModelChange",function(a){return Ky(d),nN(n.action,a)||(n.action=a),Xy(a)}),og(),e0(),og(),Sl(13,"div",8)(14,"po-button",15),ft("p-click",function(){return n.addAction(n.action)}),og()()(),Wl(15,"po-divider"),Sl(16,"form",null,1)(18,"div",8)(19,"po-input",16),ww("ngModelChange",function(a){return Ky(d),nN(n.breadcrumb.favorite,a)||(n.breadcrumb.favorite=a),Xy(a)}),og(),e0(),og()(),Sl(20,"form",null,2)(22,"div",8)(23,"po-input",17),ww("ngModelChange",function(a){return Ky(d),nN(n.breadcrumbItem.label,a)||(n.breadcrumbItem.label=a),Xy(a)}),og(),e0(),Sl(24,"po-input",18),ww("ngModelChange",function(a){return Ky(d),nN(n.breadcrumbItem.link,a)||(n.breadcrumbItem.link=a),Xy(a)}),og(),e0(),og(),Sl(25,"div",8)(26,"po-button",19),ft("p-click",function(){return n.addBreadcrumbItem()}),og()()(),Wl(27,"po-divider"),Sl(28,"form",null,3)(30,"div",8)(31,"po-input",20),ww("ngModelChange",function(a){return Ky(d),nN(n.breadcrumbParams.property,a)||(n.breadcrumbParams.property=a),Xy(a)}),og(),e0(),Sl(32,"po-input",21),ww("ngModelChange",function(a){return Ky(d),nN(n.breadcrumbParams.value,a)||(n.breadcrumbParams.value=a),Xy(a)}),og(),e0(),og(),Sl(33,"div",8)(34,"po-button",22),ft("p-click",function(){return n.addBreadcrumbParam()}),og()()(),Wl(35,"po-divider"),Sl(36,"div",8)(37,"po-input",23),ww("ngModelChange",function(a){return Ky(d),nN(n.disclaimerGroupTitle,a)||(n.disclaimerGroupTitle=a),Xy(a)}),ft("p-change-model",function(){return n.addDisclaimerGroupParam(n.disclaimerGroupTitle,n.disclaimerGroupHideRemoveAll)}),og(),e0(),Sl(38,"po-switch",24),ww("ngModelChange",function(a){return Ky(d),nN(n.disclaimerGroupHideRemoveAll,a)||(n.disclaimerGroupHideRemoveAll=a),Xy(a)}),ft("p-change",function(a){return n.onChangeDisclaimerGroupHideRemoveAll(a)}),og(),e0(),og(),Sl(39,"form",null,4)(41,"div",8)(42,"po-input",25),ww("ngModelChange",function(a){return Ky(d),nN(n.disclaimerLabel,a)||(n.disclaimerLabel=a),Xy(a)}),og(),e0(),Sl(43,"po-input",26),ww("ngModelChange",function(a){return Ky(d),nN(n.disclaimerProperty,a)||(n.disclaimerProperty=a),Xy(a)}),og(),e0(),og(),Sl(44,"div",8)(45,"po-input",27),ww("ngModelChange",function(a){return Ky(d),nN(n.disclaimerValue,a)||(n.disclaimerValue=a),Xy(a)}),og(),e0(),Sl(46,"po-switch",28),ww("ngModelChange",function(a){return Ky(d),nN(n.disclaimerHideClose,a)||(n.disclaimerHideClose=a),Xy(a)}),og(),e0(),og(),Sl(47,"div",8)(48,"po-button",29),ft("p-click",function(){return n.addDisclaimer()}),og()()(),Wl(49,"po-divider"),Sl(50,"form",null,5)(52,"po-input",30),ww("ngModelChange",function(a){return Ky(d),nN(n.title,a)||(n.title=a),Xy(a)}),og(),e0(),Sl(53,"po-input",31),ww("ngModelChange",function(a){return Ky(d),nN(n.subtitle,a)||(n.subtitle=a),Xy(a)}),og(),e0(),Sl(54,"po-input",32),ww("ngModelChange",function(a){return Ky(d),nN(n.filter.placeholder,a)||(n.filter.placeholder=a),Xy(a)}),og(),e0(),Sl(55,"po-input",33),ww("ngModelChange",function(a){return Ky(d),nN(n.filter.width,a)||(n.filter.width=a),Xy(a)}),og(),e0(),Sl(56,"po-input",34),ww("ngModelChange",function(a){return Ky(d),nN(n.literals,a)||(n.literals=a),Xy(a)}),ft("p-change",function(){return n.changeLiterals()}),og(),e0(),Sl(57,"po-radio-group",35),ww("ngModelChange",function(a){return Ky(d),nN(n.componentsSize,a)||(n.componentsSize=a),Xy(a)}),og(),e0(),Sl(58,"div",8)(59,"po-button",36),ft("p-click",function(){return n.restore()}),og()()();}if(r&2){let d=Nx(5),p=Nx(21),a=Nx(29),Le=Nx(40);nw("p-actions",n.actions)("p-breadcrumb",n.breadcrumb)("p-components-size",n.componentsSize)("p-disclaimer-group",n.disclaimerGroup)("p-filter",n.filter)("p-literals",n.customLiterals)("p-title",n.title)("p-subtitle",n.subtitle),Lp(2),nw("p-value",n.filterModel),Lp(5),Ew("ngModel",n.action.action),n0(),Lp(),Ew("ngModel",n.action.label),n0(),Lp(),Ew("ngModel",n.action.url),n0(),Lp(),Ew("ngModel",n.action.type),nw("p-options",n.typeOptions),n0(),Lp(),Ew("ngModel",n.action.icon),nw("p-options",n.iconOptions),n0(),Lp(),Ew("ngModel",n.action),nw("p-options",n.actionOptions),n0(),Lp(2),nw("p-disabled",d.form.invalid),Lp(5),Ew("ngModel",n.breadcrumb.favorite),n0(),Lp(4),Ew("ngModel",n.breadcrumbItem.label),n0(),Lp(),Ew("ngModel",n.breadcrumbItem.link),n0(),Lp(2),nw("p-disabled",p.invalid),Lp(5),Ew("ngModel",n.breadcrumbParams.property),n0(),Lp(),Ew("ngModel",n.breadcrumbParams.value),n0(),Lp(2),nw("p-disabled",a.invalid),Lp(3),Ew("ngModel",n.disclaimerGroupTitle),n0(),Lp(),Ew("ngModel",n.disclaimerGroupHideRemoveAll),n0(),Lp(4),Ew("ngModel",n.disclaimerLabel),n0(),Lp(),Ew("ngModel",n.disclaimerProperty),n0(),Lp(2),Ew("ngModel",n.disclaimerValue),n0(),Lp(),Ew("ngModel",n.disclaimerHideClose),n0(),Lp(2),nw("p-disabled",Le.invalid),Lp(4),Ew("ngModel",n.title),n0(),Lp(),Ew("ngModel",n.subtitle),n0(),Lp(),Ew("ngModel",n.filter.placeholder),n0(),Lp(),Ew("ngModel",n.filter.width),n0(),Lp(),Ew("ngModel",n.literals),n0(),Lp(),Ew("ngModel",n.componentsSize),nw("p-options",n.componentsSizeOptions),n0();}},dependencies:[Z9,gb,G9,q9,_k,mk,Qt,mv,b3,L3,wde,Hhe,M3,Ghe,lNe],encapsulation:2,changeDetection:1})}return s})();var Te=s=>({"docs-sample-code-tabs":s}),fe=(()=>{class s{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||s)};static \u0275cmp=Un({type:s,selectors:[["sample-po-page-list-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Page List Labs"),og(),Sl(4,"a",2),ft("click",function(){return n.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-page-list-labs/sample-po-page-list-labs.component.html"),og(),Sl(13,"pre",7),eN(14,`<po-page-list
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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-page-list-labs/sample-po-page-list-labs.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-page-list-labs"),og(),Wl(23,"hr")),r&2&&(Lp(5),$x("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,Te,n.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,Se],encapsulation:2})}return s})();var K=(()=>{class s{getColumns(){return [{property:"hireStatus",label:"Status",type:"subtitle",subtitles:[{value:"hired",color:"success",label:"Hired",content:"1"},{value:"progress",color:"warning",label:"Progress",content:"2"},{value:"canceled",color:"danger",label:"Canceled",content:"3"}]},{property:"idCard",label:"Identity card",type:"string"},{property:"name",label:"Name"},{property:"age",label:"Age"},{property:"city",label:"City"},{property:"jobDescription",label:"Job description",type:"string"}]}getHireStatus(){return [{value:"hired",label:"Hired"},{value:"progress",label:"Progress"},{value:"canceled",label:"Canceled"}]}getItems(){return [{hireStatus:"hired",name:"James Johnson",city:"Ontario",age:24,idCard:"AB34lxi90",jobDescription:"Systems Analyst"},{hireStatus:"progress",name:"Brian Brown",city:"Buffalo",age:23,idCard:"HG56lds54",jobDescription:"Trainee"},{hireStatus:"canceled",name:"Mary Davis",city:"Albany",age:31,idCard:"DF23cfr65",jobDescription:"Programmer"},{hireStatus:"hired",name:"Margaret Garcia",city:"New York",age:29,idCard:"GF45fgh34",jobDescription:"Web developer"},{hireStatus:"hired",name:"Emma Hall",city:"Ontario",age:34,idCard:"RF76jut21",jobDescription:"Recruiter"},{hireStatus:"progress",name:"Lucas Clark",city:"Utica",age:32,idCard:"HY21kgu65",jobDescription:"Consultant"},{hireStatus:"hired",name:"Ella Scott",city:"Ontario",age:24,idCard:"UL78flg68",jobDescription:"DBA"},{hireStatus:"progress",name:"Chloe Walker",city:"Albany",age:29,idCard:"JH12oli98",jobDescription:"Programmer"}]}getJobs(){return [{value:"Systems Analyst",label:"Systems Analyst"},{value:"Trainee",label:"Trainee"},{value:"Programmer",label:"Programmer"},{value:"Web Developer",label:"Web developer"},{value:"Recruiter",label:"Recruiter"},{value:"Consultant",label:"Consultant"},{value:"DBA",label:"DBA"}]}static \u0275fac=function(r){return new(r||s)};static \u0275prov=I({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})();var ke=["advancedFilterModal"],Be=["poPageList"],Pe=(()=>{class s{sampleHiringProcessesService=f(K);poNotification=f(Yp);poDialog=f(Lde);router=f(En);advancedFilterModal;poPageList;disclaimerGroup;hiringProcesses;hiringProcessesColumns;hiringProcessesFiltered;jobDescription=[];jobDescriptionOptions;labelFilter="";status=[];statusOptions;actions=[{label:"Hire",action:this.hireCandidate.bind(this),disabled:this.disableHireButton.bind(this)},{label:"Legislation",url:"https://www.usa.gov/labor-laws"}];breadcrumb={items:[{label:"Home",action:this.beforeRedirect.bind(this)},{label:"Hiring processes"}]};advancedFilterPrimaryAction={action:()=>{this.poPageList.clearInputSearch(),this.advancedFilterModal.close();let l=[...this.jobDescription,...this.status];this.filterAction(l);},label:"Apply filters"};filterSettings={action:this.filterAction.bind(this),advancedAction:this.advancedFilterActionModal.bind(this),placeholder:"Search"};disclaimers=[];ngOnInit(){this.disclaimerGroup={title:"Filters",disclaimers:[],change:this.onChangeDisclaimer.bind(this),remove:this.onClearDisclaimer.bind(this)},this.hiringProcesses=this.sampleHiringProcessesService.getItems(),this.hiringProcessesColumns=this.sampleHiringProcessesService.getColumns(),this.jobDescriptionOptions=this.sampleHiringProcessesService.getJobs(),this.statusOptions=this.sampleHiringProcessesService.getHireStatus(),this.hiringProcessesFiltered=[...this.hiringProcesses];}advancedFilterActionModal(){this.advancedFilterModal.open();}disableHireButton(){return !this.hiringProcesses.find(l=>l.$selected)}filter(){let l=this.disclaimers.map(r=>r.value);l.length?this.hiringProcessesFilter(l):this.resetFilterHiringProcess();}filterAction(l){let r=typeof l=="string"?[l]:[...l];this.populateDisclaimers(r),this.filter();}hireCandidate(){let l=this.hiringProcesses.find(r=>r.$selected);switch(l.hireStatus){case "progress":l.hireStatus="hired",this.poNotification.success("Hired candidate!");break;case "hired":this.poNotification.warning("This candidate has already been hired.");break;case "canceled":this.poNotification.error("This candidate has already been disqualified.");break}}hiringProcessesFilter(l){this.hiringProcessesFiltered=this.hiringProcesses.filter(r=>Object.keys(r).some(n=>!(r[n]instanceof Object)&&this.includeFilter(r[n],l)));}includeFilter(l,r){return r.some(n=>String(l).toLocaleLowerCase().includes(n.toLocaleLowerCase()))}onChangeDisclaimer(l){this.disclaimers=l,this.filter();}onClearDisclaimer(l){l.removedDisclaimer.property==="search"&&this.poPageList.clearInputSearch(),this.disclaimers=[],this.filter();}populateDisclaimers(l){let r=l.length>1?"advanced":"search";this.disclaimers=l.map(n=>({value:n,property:r})),this.disclaimers&&this.disclaimers.length>0?this.disclaimerGroup.disclaimers=[...this.disclaimers]:this.disclaimerGroup.disclaimers=[];}resetFilterHiringProcess(){this.hiringProcessesFiltered=[...this.hiringProcesses],this.status=[],this.jobDescription=[];}beforeRedirect(l){this.hiringProcesses.some(r=>r.$selected)?this.poDialog.confirm({title:`Confirm redirect to ${l}`,message:"There is data selected. Are you sure you want to quit?",confirm:()=>this.router.navigate(["/"])}):this.router.navigate(["/"]);}static \u0275fac=function(r){return new(r||s)};static \u0275cmp=Un({type:s,selectors:[["sample-po-page-list-hiring-processes"]],viewQuery:function(r,n){if(r&1&&ql(ke,7)(Be,7),r&2){let d;lo(d=uo())&&(n.advancedFilterModal=d.first),lo(d=uo())&&(n.poPageList=d.first);}},standalone:false,features:[we([K])],decls:9,vars:15,consts:[["poPageList",""],["advancedFilterModal",""],["f","ngForm"],["p-title","Hiring processes","p-subtitle","Manage <b>active</b> and <i>pending</i> processes",3,"p-actions","p-breadcrumb","p-disclaimer-group","p-filter"],[3,"p-selectable","p-single-select","p-sort","p-striped","p-columns","p-items"],["p-title","Advanced filter",3,"p-primary-action"],["name","jobDescription","p-label","Job description",3,"ngModelChange","ngModel","p-options"],["name","status","p-label","Status",3,"ngModelChange","ngModel","p-options"]],template:function(r,n){if(r&1){let d=wx();Sl(0,"po-page-list",3,0),Wl(2,"po-table",4),og(),Sl(3,"po-modal",5,1)(5,"form",null,2)(7,"po-multiselect",6),ww("ngModelChange",function(a){return Ky(d),nN(n.jobDescription,a)||(n.jobDescription=a),Xy(a)}),og(),e0(),Sl(8,"po-checkbox-group",7),ww("ngModelChange",function(a){return Ky(d),nN(n.status,a)||(n.status=a),Xy(a)}),og(),e0(),og()();}r&2&&(nw("p-actions",n.actions)("p-breadcrumb",n.breadcrumb)("p-disclaimer-group",n.disclaimerGroup)("p-filter",n.filterSettings),Lp(2),nw("p-selectable",true)("p-single-select",true)("p-sort",true)("p-striped",true)("p-columns",n.hiringProcessesColumns)("p-items",n.hiringProcessesFiltered),Lp(),nw("p-primary-action",n.advancedFilterPrimaryAction),Lp(4),Ew("ngModel",n.jobDescription),nw("p-options",n.jobDescriptionOptions),n0(),Lp(),Ew("ngModel",n.status),nw("p-options",n.statusOptions),n0());},dependencies:[Z9,G9,q9,_k,mk,b3,Lw,Yo,lNe,k3],encapsulation:2,changeDetection:1})}return s})();var je=s=>({"docs-sample-code-tabs":s}),xe=(()=>{class s{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||s)};static \u0275cmp=Un({type:s,selectors:[["sample-po-page-list-hiring-processes-view"]],standalone:false,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Page List - Hiring Processes"),og(),Sl(4,"a",2),ft("click",function(){return n.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-page-list-hiring-processes/sample-po-page-list-hiring-processes.component.html"),og(),Sl(13,"pre",7),eN(14,`<po-page-list
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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-page-list-hiring-processes/sample-po-page-list-hiring-processes.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),og(),Sl(21,"label",6),eN(22,"sample-po-page-list-hiring-processes/sample-po-page-list-hiring-processes.service.ts"),og(),Sl(23,"pre",9),eN(24,`import { Injectable } from '@angular/core';

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
`),og()()()()(),Sl(25,"div",10),Wl(26,"sample-po-page-list-hiring-processes"),og(),Wl(27,"hr")),r&2&&(Lp(5),$x("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,je,n.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,Pe],encapsulation:2})}return s})();var ve=(()=>{class s{static \u0275fac=function(r){return new(r||s)};static \u0275cmp=Un({type:s,selectors:[["sample-po-page-list-doc"]],standalone:false,decls:1318,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/icons"],["href","/documentation/po-disclaimer-group"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","Array<PoPageAction>"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","PoBreadcrumb"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","PoDisclaimerGroup"],["pan","",1,"docs-api-property-type","PoPageFilter"],["pan","",1,"docs-api-property-type","PoPageListLiterals"],["href","/documentation/po-i18n"],[1,"language-typescript"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["href","/guides/getting-started"],["pan","",1,"docs-api-property-type","Array<PoBreadcrumbItem>"],["pan","",1,"docs-api-property-type","object"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","any"],["pan","",1,"docs-api-property-type","Array<PoDisclaimer>"],["pan","",1,"docs-api-property-type","PoDisclaimer"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["pan","",1,"docs-api-property-type","Array<PoPopupAction>"],["pan","",1,"docs-api-property-type","number"]],template:function(r,n){r&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),eN(3,"import { PoPageModule } from '@po-ui/ng-components';"),og()(),Sl(4,"div",2)(5,"p"),eN(6,"M\xF3dulo respons\xE1vel pelos componentes de estrutura de p\xE1gina: "),Sl(7,"code"),eN(8,"po-page-default"),og(),eN(9,", "),Sl(10,"code"),eN(11,"po-page-detail"),og(),eN(12,`,
`),Sl(13,"code"),eN(14,"po-page-edit"),og(),eN(15,", "),Sl(16,"code"),eN(17,"po-page-list"),og(),eN(18," e "),Sl(19,"code"),eN(20,"po-page-slide"),og(),eN(21,"."),og()(),Sl(22,"h3",3),eN(23,"Componente"),og(),Sl(24,"h4",4)(25,"code",5),eN(26,"PoPageListComponent"),og()(),Sl(27,"div",2)(28,"p"),eN(29,"O componente "),Sl(30,"code"),eN(31,"po-page-list"),og(),eN(32,` \xE9 utilizado como o container principal para as telas de listagem de dados,
podendo ser apresentado como lista ou tabela.`),og(),Sl(33,"p"),eN(34,`Este componente possibilita realizar filtro dos dados, no qual permite que seja atribuido uma fun\xE7\xE3o que ser\xE1 executada no momento
da filtragem. Este comportamento pode ser acionado tanto ao `),Sl(35,"em"),eN(36,"click"),og(),eN(37," do \xEDcone "),Sl(38,"a",6),eN(39,"an-magnifying-glass"),og(),eN(40,`
quanto ao pressionar da tecla `),Sl(41,"em"),eN(42,"ENTER"),og(),eN(43," quando o foco estiver no campo de pesquisa."),og(),Sl(44,"p"),eN(45,`Para facilitar a manipula\xE7\xE3o e visualiza\xE7\xE3o dos filtros aplicados, \xE9 poss\xEDvel tamb\xE9m utilizar o componente
`),Sl(46,"a",7)(47,"code"),eN(48,"po-disclaimer-group"),og()(),eN(49,"."),og(),Sl(50,"h4"),eN(51,"Tokens customiz\xE1veis"),og(),Sl(52,"blockquote")(53,"p"),eN(54,"Para maiores informa\xE7\xF5es, acesse o guia "),Sl(55,"a",8),eN(56,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),eN(57,"."),og()(),Sl(58,"table")(59,"thead")(60,"tr")(61,"th"),eN(62,"Propriedade"),og(),Sl(63,"th"),eN(64,"Descri\xE7\xE3o"),og(),Sl(65,"th"),eN(66,"Valor Padr\xE3o"),og()()(),Sl(67,"tbody")(68,"tr")(69,"td")(70,"strong"),eN(71,"Header"),og()(),Wl(72,"td")(73,"td"),og(),Sl(74,"tr")(75,"td")(76,"code"),eN(77,"--padding"),og()(),Sl(78,"td"),eN(79,"Espa\xE7amento do header"),og(),Sl(80,"td")(81,"code"),eN(82,"var(--spacing-xs) var(--spacing-md)"),og()()(),Sl(83,"tr")(84,"td")(85,"code"),eN(86,"--gap"),og()(),Sl(87,"td"),eN(88,"Espa\xE7amento entre os breadcrumbs e o t\xEDtulo"),og(),Sl(89,"td")(90,"code"),eN(91,"var(--spacing-md)"),og()()(),Sl(92,"tr")(93,"td")(94,"code"),eN(95,"--gap-actions"),og()(),Sl(96,"td"),eN(97,"Espa\xE7amento entre as a\xE7\xF5es"),og(),Sl(98,"td")(99,"code"),eN(100,"var(--spacing-xs)"),og()()(),Sl(101,"tr")(102,"td")(103,"code"),eN(104,"--font-family"),og()(),Sl(105,"td"),eN(106,"Fam\xEDlia tipogr\xE1fica do t\xEDtulo"),og(),Sl(107,"td")(108,"code"),eN(109,"var(--font-family-theme)"),og()()(),Sl(110,"tr")(111,"td")(112,"strong"),eN(113,"Content"),og()(),Wl(114,"td")(115,"td"),og(),Sl(116,"tr")(117,"td")(118,"code"),eN(119,"--padding-content"),og()(),Sl(120,"td"),eN(121,"Espa\xE7amento do conte\xFAdo"),og(),Sl(122,"td")(123,"code"),eN(124,"var(--spacing-xs) var(--spacing-sm)"),og()()()()()(),Sl(125,"div",9)(126,"h4",10),eN(127,"Seletor"),og(),Sl(128,"pre",11),eN(129,`<po-page-list
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
`),og()(),Sl(130,"h4",12),eN(131,"Propriedades"),og(),Sl(132,"table",13)(133,"tr",14)(134,"th",15),eN(135,"Nome"),og(),Sl(136,"th",15),eN(137,"Tipo"),og(),Sl(138,"th",15),eN(139,"Padr\xE3o"),og(),Sl(140,"th",15),eN(141,"Descri\xE7\xE3o"),og()(),Sl(142,"tr",16)(143,"td",17)(144,"div",18)(145,"span",19),eN(146," p-actions"),Wl(147,"br"),og()()(),Sl(148,"td",20)(149,"code",21),eN(150,"Array<PoPageAction>"),og()(),Sl(151,"td",22),eN(152,"-"),og(),Sl(153,"td",23)(154,"em")(155,"strong"),eN(156,"(opcional)"),og()(),Sl(157,"p"),eN(158,"Nesta propriedade deve ser definido um array de objetos que implementam a interface "),Sl(159,"code"),eN(160,"PoPageAction"),og(),eN(161,"."),og()()(),Sl(162,"tr",16)(163,"td",17)(164,"div",18)(165,"span",19),eN(166," p-breadcrumb"),Wl(167,"br"),og()()(),Sl(168,"td",20)(169,"code",24),eN(170,"PoBreadcrumb"),og()(),Sl(171,"td",22),eN(172,"-"),og(),Sl(173,"td",23)(174,"em")(175,"strong"),eN(176,"(opcional)"),og()(),Sl(177,"p"),eN(178,"Objeto que implementa as propriedades da interface "),Sl(179,"code"),eN(180,"PoBreadcrumb"),og(),eN(181,"."),og()()(),Sl(182,"tr",16)(183,"td",17)(184,"div",18)(185,"span",19),eN(186," p-components-size"),Wl(187,"br"),og()()(),Sl(188,"td",20)(189,"code",25),eN(190,"string"),og()(),Sl(191,"td",22)(192,"p")(193,"code"),eN(194,"medium"),og()()(),Sl(195,"td",23)(196,"em")(197,"strong"),eN(198,"(opcional)"),og()(),Sl(199,"p"),eN(200,"Define o tamanho dos componentes de formul\xE1rio no template:"),og(),Sl(201,"ul")(202,"li")(203,"code"),eN(204,"small"),og(),eN(205,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),og(),Sl(206,"li")(207,"code"),eN(208,"medium"),og(),eN(209,": aplica a medida medium de cada componente."),og()(),Sl(210,"blockquote")(211,"p"),eN(212,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Sl(213,"code"),eN(214,"medium"),og(),eN(215,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Sl(216,"a",26),eN(217,"po-theme"),og(),eN(218,"."),og()()()(),Sl(219,"tr",16)(220,"td",17)(221,"div",18)(222,"span",19),eN(223," p-disclaimer-group"),Wl(224,"br"),og()()(),Sl(225,"td",20)(226,"code",27),eN(227,"PoDisclaimerGroup"),og()(),Sl(228,"td",22),eN(229,"-"),og(),Sl(230,"td",23)(231,"em")(232,"strong"),eN(233,"(opcional)"),og()(),Sl(234,"p"),eN(235,"Objeto que implementa as propriedades da interface "),Sl(236,"code"),eN(237,"PoDisclaimerGroup"),og(),eN(238,"."),og()()(),Sl(239,"tr",16)(240,"td",17)(241,"div",18)(242,"span",19),eN(243," p-filter"),Wl(244,"br"),og()()(),Sl(245,"td",20)(246,"code",28),eN(247,"PoPageFilter"),og()(),Sl(248,"td",22),eN(249,"-"),og(),Sl(250,"td",23)(251,"p"),eN(252,"Objeto que implementa as propriedades da interface "),Sl(253,"code"),eN(254,"PoPageFilter"),og(),eN(255,"."),og()()(),Sl(256,"tr",16)(257,"td",17)(258,"div",18)(259,"span",19),eN(260," p-literals"),Wl(261,"br"),og()()(),Sl(262,"td",20)(263,"code",29),eN(264,"PoPageListLiterals"),og()(),Sl(265,"td",22),eN(266,"-"),og(),Sl(267,"td",23)(268,"em")(269,"strong"),eN(270,"(opcional)"),og()(),Sl(271,"p"),eN(272,"Objeto com as literais usadas no "),Sl(273,"code"),eN(274,"po-page-list"),og(),eN(275,"."),og(),Sl(276,"p"),eN(277,"Existem duas maneiras de customizar o componente, passando um objeto com todas as literais dispon\xEDveis:"),og(),Sl(278,"pre")(279,"code"),eN(280,`const customLiterals: PoPageListLiterals = {
  otherActions: 'Mais a\xE7\xF5es'
};
`),og()(),Sl(281,"p"),eN(282,"Ou passando apenas as literais que deseja customizar:"),og(),Sl(283,"pre")(284,"code"),eN(285,`const customLiterals: PoPageListLiterals = {
  otherActions: 'A\xE7\xF5es da p\xE1gina'
};
`),og()(),Sl(286,"p"),eN(287,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente."),og(),Sl(288,"pre")(289,"code"),eN(290,`<po-page-list
  [p-literals]="customLiterals">
</po-page-list>
`),og()(),Sl(291,"blockquote")(292,"p"),eN(293,"O valor padr\xE3o ser\xE1 traduzido de acordo com o idioma configurado no "),Sl(294,"a",30)(295,"code"),eN(296,"PoI18nService"),og()(),eN(297," ou "),Sl(298,"em"),eN(299,"browser"),og(),eN(300,"."),og()()()(),Sl(301,"tr",16)(302,"td",17)(303,"div",18)(304,"span",19),eN(305," p-quick-search-value"),Wl(306,"br"),og()()(),Sl(307,"td",20)(308,"code",25),eN(309,"string"),og()(),Sl(310,"td",22),eN(311,"-"),og(),Sl(312,"td",23)(313,"em")(314,"strong"),eN(315,"(opcional)"),og()(),Sl(316,"p"),eN(317,"Valor padr\xE3o na busca r\xE1pida ao inicializar o componente"),og()()(),Sl(318,"tr",16)(319,"td",17)(320,"div",18)(321,"span",19),eN(322," p-subtitle"),Wl(323,"br"),og()()(),Sl(324,"td",20)(325,"code",25),eN(326,"string"),og()(),Sl(327,"td",22),eN(328,"-"),og(),Sl(329,"td",23)(330,"em")(331,"strong"),eN(332,"(opcional)"),og()(),Sl(333,"p"),eN(334,"Subtitulo do Header da p\xE1gina."),og(),Sl(335,"p"),eN(336,"Suporta formata\xE7\xE3o b\xE1sica com as tags "),Sl(337,"code"),eN(338,"<b>"),og(),eN(339," (negrito), "),Sl(340,"code"),eN(341,"<strong>"),og(),eN(342," (negrito), "),Sl(343,"code"),eN(344,"<i>"),og(),eN(345," (it\xE1lico), "),Sl(346,"code"),eN(347,"<em>"),og(),eN(348,` (it\xE1lico) e
`),Sl(349,"code"),eN(350,"<u>"),og(),eN(351," (sublinhado)."),og(),Sl(352,"p"),eN(353,"Exemplo:"),og(),Sl(354,"pre")(355,"code",31),eN(356,`subtitle = 'Manage <b>active</b> and <i>pending</i> processes';
`),og()(),Sl(357,"blockquote")(358,"p"),eN(359,"Requer que "),Sl(360,"code"),eN(361,"p-title"),og(),eN(362," esteja definido."),og()()()(),Sl(363,"tr",16)(364,"td",17)(365,"div",18)(366,"span",19),eN(367," p-title"),Wl(368,"br"),og()()(),Sl(369,"td",20)(370,"code",25),eN(371,"string"),og()(),Sl(372,"td",22),eN(373,"-"),og(),Sl(374,"td",23)(375,"p"),eN(376,"T\xEDtulo da p\xE1gina."),og()()()(),Sl(377,"h3",12),eN(378,"M\xE9todos"),og(),Sl(379,"table",32)(380,"tr",16)(381,"th",33)(382,"div",18)(383,"h4")(384,"span",19),eN(385," clearInputSearch "),og()()()()(),Sl(386,"tr",23)(387,"td",23)(388,"p"),eN(389,"Limpa o campo de pesquisa."),og()()()(),Wl(390,"br"),Sl(391,"h3"),eN(392,"Interfaces"),og(),Sl(393,"h4",34)(394,"code",5),eN(395,"PoBreadcrumbItem"),og()(),Sl(396,"div",2)(397,"p"),eN(398,"Interface que define cada item do componente "),Sl(399,"strong"),eN(400,"po-breadcrumb"),og(),eN(401,"."),og()(),Sl(402,"h4",12),eN(403,"Propriedades"),og(),Sl(404,"table",13)(405,"tr",14)(406,"th",15),eN(407,"Nome"),og(),Sl(408,"th",15),eN(409,"Tipo"),og(),Sl(410,"th",15),eN(411,"Descri\xE7\xE3o"),og()(),Sl(412,"tr",16)(413,"td",17)(414,"div",18)(415,"span",19),eN(416," action"),Wl(417,"br"),og()()(),Sl(418,"td",20)(419,"code",35),eN(420,"Function"),og()(),Sl(421,"td",23)(422,"em")(423,"strong"),eN(424,"(opcional)"),og()(),Sl(425,"p"),eN(426,"A\xE7\xE3o executada ao clicar no item."),og(),Sl(427,"blockquote")(428,"p"),eN(429,"A fun\xE7\xE3o atribu\xEDda a esta propriedade receber\xE1 o "),Sl(430,"em"),eN(431,"label"),og(),eN(432," do item como par\xE2metro para execu\xE7\xE3o."),og()()()(),Sl(433,"tr",16)(434,"td",17)(435,"div",18)(436,"span",19),eN(437," label"),Wl(438,"br"),og()()(),Sl(439,"td",20)(440,"code",25),eN(441,"string"),og()(),Sl(442,"td",23)(443,"p"),eN(444,"R\xF3tulo do item."),og()()(),Sl(445,"tr",16)(446,"td",17)(447,"div",18)(448,"span",19),eN(449," link"),Wl(450,"br"),og()()(),Sl(451,"td",20)(452,"code",25),eN(453,"string"),og()(),Sl(454,"td",23)(455,"em")(456,"strong"),eN(457,"(opcional)"),og()(),Sl(458,"p"),eN(459,"Url do item."),og(),Sl(460,"blockquote")(461,"p"),eN(462,"Caso o item tamb\xE9m contenha uma "),Sl(463,"em"),eN(464,"action"),og(),eN(465," definida, a prefer\xEAncia de execu\xE7\xE3o ser\xE1 do "),Sl(466,"em"),eN(467,"link"),og(),eN(468,"."),og()(),Sl(469,"blockquote")(470,"p"),eN(471,`Para o correto funcionamento, \xE9 necess\xE1rio que haja uma rota referenciando seu valor.
`),Sl(472,"strong")(473,"a",36),eN(474,"Veja um exemplo de como criar rotas aqui"),og()(),eN(475,"."),og()(),Sl(476,"blockquote")(477,"p"),eN(478,"Esta propriedade \xE9 necess\xE1ria para que a propriedade "),Sl(479,"code"),eN(480,"p-favorite-service"),og(),eN(481," consiga favoritar ou desfavoritar."),og()()()()(),Sl(482,"h4",34)(483,"code",5),eN(484,"PoBreadcrumb"),og()(),Sl(485,"div",2)(486,"p"),eN(487,"Interface que define o "),Sl(488,"code"),eN(489,"po-breadcrumb"),og(),eN(490,"."),og()(),Sl(491,"h4",12),eN(492,"Propriedades"),og(),Sl(493,"table",13)(494,"tr",14)(495,"th",15),eN(496,"Nome"),og(),Sl(497,"th",15),eN(498,"Tipo"),og(),Sl(499,"th",15),eN(500,"Descri\xE7\xE3o"),og()(),Sl(501,"tr",16)(502,"td",17)(503,"div",18)(504,"span",19),eN(505," favorite"),Wl(506,"br"),og()()(),Sl(507,"td",20)(508,"code",25),eN(509,"string"),og()(),Sl(510,"td",23)(511,"em")(512,"strong"),eN(513,"(opcional)"),og()(),Sl(514,"p"),eN(515,"Permite definir uma URL para favoritar ou desfavoritar."),og(),Sl(516,"blockquote")(517,"p"),eN(518,"Para maiores informa\xE7\xF5es verificar a propriedade "),Sl(519,"code"),eN(520,"p-favorite-service"),og(),eN(521," do componente "),Sl(522,"code"),eN(523,"po-breadcrumb"),og(),eN(524,"."),og()()()(),Sl(525,"tr",16)(526,"td",17)(527,"div",18)(528,"span",19),eN(529," items"),Wl(530,"br"),og()()(),Sl(531,"td",20)(532,"code",37),eN(533,"Array<PoBreadcrumbItem>"),og()(),Sl(534,"td",23)(535,"p"),eN(536,"Lista de itens do "),Sl(537,"em"),eN(538,"breadcrumb"),og(),eN(539,"."),og(),Sl(540,"p")(541,"strong"),eN(542,"Exemplo:"),og()(),Sl(543,"pre")(544,"code"),eN(545,`{ label: 'Po Portal', link: 'portal' }
`),og()()()(),Sl(546,"tr",16)(547,"td",17)(548,"div",18)(549,"span",19),eN(550," params"),Wl(551,"br"),og()()(),Sl(552,"td",20)(553,"code",38),eN(554,"object"),og()(),Sl(555,"td",23)(556,"em")(557,"strong"),eN(558,"(opcional)"),og()(),Sl(559,"p"),eN(560,"Objeto que possibilita o envio de par\xE2metros adicionais \xE0 requisi\xE7\xE3o."),og()()()(),Sl(561,"h4",34)(562,"code",5),eN(563,"PoDisclaimer"),og()(),Sl(564,"div",2)(565,"p"),eN(566,"Interface que representa o objeto "),Sl(567,"code"),eN(568,"po-disclaimer"),og(),eN(569,"."),og()(),Sl(570,"h4",12),eN(571,"Propriedades"),og(),Sl(572,"table",13)(573,"tr",14)(574,"th",15),eN(575,"Nome"),og(),Sl(576,"th",15),eN(577,"Tipo"),og(),Sl(578,"th",15),eN(579,"Descri\xE7\xE3o"),og()(),Sl(580,"tr",16)(581,"td",17)(582,"div",18)(583,"span",19),eN(584," hideClose"),Wl(585,"br"),og()()(),Sl(586,"td",20)(587,"code",39),eN(588,"boolean"),og()(),Sl(589,"td",23)(590,"em")(591,"strong"),eN(592,"(opcional)"),og()(),Sl(593,"p"),eN(594,"Se verdadeiro, oculta o bot\xE3o para fechar o "),Sl(595,"em"),eN(596,"disclaimer"),og(),eN(597,"."),og()()(),Sl(598,"tr",16)(599,"td",17)(600,"div",18)(601,"span",19),eN(602," label"),Wl(603,"br"),og()()(),Sl(604,"td",20)(605,"code",25),eN(606,"string"),og()(),Sl(607,"td",23)(608,"em")(609,"strong"),eN(610,"(opcional)"),og()(),Sl(611,"p"),eN(612,"Texto de exibi\xE7\xE3o do objeto."),og()()(),Sl(613,"tr",16)(614,"td",17)(615,"div",18)(616,"span",19),eN(617," property"),Wl(618,"br"),og()()(),Sl(619,"td",20)(620,"code",25),eN(621,"string"),og()(),Sl(622,"td",23)(623,"em")(624,"strong"),eN(625,"(opcional)"),og()(),Sl(626,"p"),eN(627,"Nome da propriedade vinculada ao objeto "),Sl(628,"em"),eN(629,"disclaimer"),og(),eN(630,"."),og()()(),Sl(631,"tr",16)(632,"td",17)(633,"div",18)(634,"span",19),eN(635," value"),Wl(636,"br"),og()()(),Sl(637,"td",20)(638,"code",40),eN(639,"any"),og()(),Sl(640,"td",23)(641,"p"),eN(642,"Valor do objeto."),og()()()(),Sl(643,"h4",34)(644,"code",5),eN(645,"PoDisclaimerGroupRemoveAction"),og()(),Sl(646,"div",2)(647,"p"),eN(648,"Estrutura do objeto representando o estado dos "),Sl(649,"em"),eN(650,"disclaimers"),og(),eN(651," ap\xF3s a remo\xE7\xE3o."),og()(),Sl(652,"h4",12),eN(653,"Propriedades"),og(),Sl(654,"table",13)(655,"tr",14)(656,"th",15),eN(657,"Nome"),og(),Sl(658,"th",15),eN(659,"Tipo"),og(),Sl(660,"th",15),eN(661,"Descri\xE7\xE3o"),og()(),Sl(662,"tr",16)(663,"td",17)(664,"div",18)(665,"span",19),eN(666," currentDisclaimers"),Wl(667,"br"),og()()(),Sl(668,"td",20)(669,"code",41),eN(670,"Array<PoDisclaimer>"),og()(),Sl(671,"td",23)(672,"p"),eN(673,"Lista com os "),Sl(674,"em"),eN(675,"disclaimers"),og(),eN(676," atuais (restantes)."),og()()(),Sl(677,"tr",16)(678,"td",17)(679,"div",18)(680,"span",19),eN(681," removedDisclaimer"),Wl(682,"br"),og()()(),Sl(683,"td",20)(684,"code",42),eN(685,"PoDisclaimer"),og()(),Sl(686,"td",23)(687,"p")(688,"em"),eN(689,"Disclaimer"),og(),eN(690," que foi removido."),og()()()(),Sl(691,"h4",34)(692,"code",5),eN(693,"PoDisclaimerGroup"),og()(),Sl(694,"div",2)(695,"p"),eN(696,"Interface que representa o objeto "),Sl(697,"code"),eN(698,"po-disclaimer-group"),og(),eN(699,"."),og()(),Sl(700,"h4",12),eN(701,"Propriedades"),og(),Sl(702,"table",13)(703,"tr",14)(704,"th",15),eN(705,"Nome"),og(),Sl(706,"th",15),eN(707,"Tipo"),og(),Sl(708,"th",15),eN(709,"Descri\xE7\xE3o"),og()(),Sl(710,"tr",16)(711,"td",17)(712,"div",18)(713,"span",19),eN(714," change"),Wl(715,"br"),og()()(),Sl(716,"td",20)(717,"code",35),eN(718,"Function"),og()(),Sl(719,"td",23)(720,"em")(721,"strong"),eN(722,"(opcional)"),og()(),Sl(723,"p"),eN(724,"Fun\xE7\xE3o que ser\xE1 disparada quando a lista de "),Sl(725,"em"),eN(726,"disclaimers"),og(),eN(727,` for modificada.
Ser\xE1 passado por par\xE2metro a nova lista de `),Sl(728,"em"),eN(729,"disclaimers"),og(),eN(730,"."),og()()(),Sl(731,"tr",16)(732,"td",17)(733,"div",18)(734,"span",19),eN(735," disclaimers"),Wl(736,"br"),og()()(),Sl(737,"td",20)(738,"code",41),eN(739,"Array<PoDisclaimer>"),og()(),Sl(740,"td",23)(741,"p"),eN(742,"Lista de "),Sl(743,"em"),eN(744,"disclaimers"),og(),eN(745,"."),og(),Sl(746,"p"),eN(747,"Exemplo:"),og(),Sl(748,"pre")(749,"code"),eN(750,`disclaimers: [
  { property: 'type', label: 'Hotel', value: 'hotel' },
  { property: 'cost', label: '$500,00', value: '500'  },
  { property: 'dates', label: '10/05/2018 - 15/05/2018', value: '10/05/2018|15/05/2018'  }
 ]
`),og()(),Sl(751,"p"),eN(752,"Para que a lista de "),Sl(753,"em"),eN(754,"disclaimers"),og(),eN(755," seja atualizada dinamicamente deve-se passar uma nova refer\xEAncia do array de "),Sl(756,"code"),eN(757,"PoDisclaimer"),og(),eN(758,"."),og(),Sl(759,"p"),eN(760,"Exemplo:"),og(),Sl(761,"pre")(762,"code"),eN(763,`this.disclaimerGroup.disclaimers = [...this.disclaimers];
`),og()()()(),Sl(764,"tr",16)(765,"td",17)(766,"div",18)(767,"span",19),eN(768," hideRemoveAll"),Wl(769,"br"),og()()(),Sl(770,"td",20)(771,"code",39),eN(772,"boolean"),og()(),Sl(773,"td",23)(774,"em")(775,"strong"),eN(776,"(opcional)"),og()(),Sl(777,"p"),eN(778,"Oculta o bot\xE3o para remover todos os "),Sl(779,"em"),eN(780,"disclaimers"),og(),eN(781," do grupo."),og(),Sl(782,"blockquote")(783,"p"),eN(784,"Por padr\xE3o, o mesmo \xE9 exibido \xE0 partir de dois ou mais "),Sl(785,"em"),eN(786,"disclaimers"),og(),eN(787," com a op\xE7\xE3o "),Sl(788,"code"),eN(789,"hideClose"),og(),eN(790," habilitada."),og()()()(),Sl(791,"tr",16)(792,"td",17)(793,"div",18)(794,"span",19),eN(795," remove"),Wl(796,"br"),og()()(),Sl(797,"td",20)(798,"code",35),eN(799,"Function"),og()(),Sl(800,"td",23)(801,"em")(802,"strong"),eN(803,"(opcional)"),og()(),Sl(804,"p"),eN(805,"Fun\xE7\xE3o que ser\xE1 disparada quando um "),Sl(806,"em"),eN(807,"disclaimer"),og(),eN(808,` for removido da lista de
`),Sl(809,"em"),eN(810,"disclaimers"),og(),eN(811," pelo usu\xE1rio."),og(),Sl(812,"p"),eN(813,"Recebe como par\xE2metro um objeto conforme a interface "),Sl(814,"code"),eN(815,"PoDisclaimerGroupRemoveAction"),og(),eN(816,"."),og()()(),Sl(817,"tr",16)(818,"td",17)(819,"div",18)(820,"span",19),eN(821," removeAll"),Wl(822,"br"),og()()(),Sl(823,"td",20)(824,"code",35),eN(825,"Function"),og()(),Sl(826,"td",23)(827,"em")(828,"strong"),eN(829,"(opcional)"),og()(),Sl(830,"p"),eN(831,"Fun\xE7\xE3o que ser\xE1 disparada quando todos os "),Sl(832,"em"),eN(833,"disclaimers"),og(),eN(834," forem removidos da lista de "),Sl(835,"em"),eN(836,"disclaimers"),og(),eN(837,` pelo usu\xE1rio,
utilizando o bot\xE3o "remover todos".`),og(),Sl(838,"p"),eN(839,"Recebe como par\xE2metro uma lista contendo todos os "),Sl(840,"code"),eN(841,"disclaimers"),og(),eN(842," removidos."),og()()(),Sl(843,"tr",16)(844,"td",17)(845,"div",18)(846,"span",19),eN(847," title"),Wl(848,"br"),og()()(),Sl(849,"td",20)(850,"code",25),eN(851,"string"),og()(),Sl(852,"td",23)(853,"em")(854,"strong"),eN(855,"(opcional)"),og()(),Sl(856,"p"),eN(857,"T\xEDtulo do grupo de "),Sl(858,"em"),eN(859,"disclaimers"),og(),eN(860,"."),og()()()(),Sl(861,"h4",34)(862,"code",5),eN(863,"PoPageAction"),og()(),Sl(864,"div",2)(865,"p"),eN(866,"Interface para as a\xE7\xF5es dos componentes "),Sl(867,"code"),eN(868,"po-page-default"),og(),eN(869," e "),Sl(870,"code"),eN(871,"po-page-list"),og(),eN(872,"."),og(),Sl(873,"p"),eN(874,"As a\xE7\xF5es podem ser exibidas como bot\xF5es no cabe\xE7alho ou agrupadas em um "),Sl(875,"em"),eN(876,"dropdown"),og(),eN(877,`,
conforme o `),Sl(878,"code"),eN(879,"PoPageActionsLayout"),og(),eN(880," e o tamanho da tela."),og(),Sl(881,"blockquote")(882,"p"),eN(883,"As propriedades "),Sl(884,"code"),eN(885,"separator"),og(),eN(886,", "),Sl(887,"code"),eN(888,"selected"),og(),eN(889," e "),Sl(890,"code"),eN(891,"subItems"),og(),eN(892,` possuem efeito apenas quando
a a\xE7\xE3o \xE9 exibida dentro do `),Sl(893,"em"),eN(894,"dropdown"),og(),eN(895,"."),og()()(),Sl(896,"h4",12),eN(897,"Propriedades"),og(),Sl(898,"table",13)(899,"tr",14)(900,"th",15),eN(901,"Nome"),og(),Sl(902,"th",15),eN(903,"Tipo"),og(),Sl(904,"th",15),eN(905,"Descri\xE7\xE3o"),og()(),Sl(906,"tr",16)(907,"td",17)(908,"div",18)(909,"span",19),eN(910," action"),Wl(911,"br"),og()()(),Sl(912,"td",20)(913,"code",35),eN(914,"Function"),og()(),Sl(915,"td",23)(916,"em")(917,"strong"),eN(918,"(opcional)"),og()(),Sl(919,"p"),eN(920,"A\xE7\xE3o que ser\xE1 executada, sendo poss\xEDvel passar o nome ou a refer\xEAncia da fun\xE7\xE3o."),og(),Sl(921,"p"),eN(922,"A action tamb\xE9m pode ser executada para o agrupador de subitens quando a a\xE7\xE3o possuir "),Sl(923,"code"),eN(924,"subItems"),og(),eN(925,"."),og(),Sl(926,"blockquote")(927,"p"),eN(928,"Para que a fun\xE7\xE3o seja executada no contexto do componente, utilize "),Sl(929,"em"),eN(930,"bind"),og(),eN(931,`:
`),Sl(932,"code"),eN(933,"action: this.myFunction.bind(this)"),og()()()()(),Sl(934,"tr",16)(935,"td",17)(936,"div",18)(937,"span",19),eN(938," disabled"),Wl(939,"br"),og()()(),Sl(940,"td",20)(941,"code",39),eN(942,"boolean "),og(),Sl(943,"code",35),eN(944," Function"),og()(),Sl(945,"td",23)(946,"em")(947,"strong"),eN(948,"(opcional)"),og()(),Sl(949,"p"),eN(950,"Desabilita a a\xE7\xE3o. Aceita um valor booleano ou uma fun\xE7\xE3o que retorna booleano."),og()()(),Sl(951,"tr",16)(952,"td",17)(953,"div",18)(954,"span",19),eN(955," icon"),Wl(956,"br"),og()()(),Sl(957,"td",20)(958,"code",25),eN(959,"string "),og(),Sl(960,"code",43),eN(961," TemplateRef<void>"),og()(),Sl(962,"td",23)(963,"em")(964,"strong"),eN(965,"(opcional)"),og()(),Sl(966,"p"),eN(967,"\xCDcone exibido ao lado esquerdo do r\xF3tulo."),og(),Sl(968,"p"),eN(969,"Aceita \xEDcones da "),Sl(970,"a",6),eN(971,"Biblioteca de \xEDcones"),og(),eN(972,`, fontes externas (ex: Font Awesome)
ou um `),Sl(973,"code"),eN(974,"TemplateRef"),og(),eN(975," para \xEDcones customizados."),og(),Sl(976,"pre")(977,"code"),eN(978,`{ label: 'A\xE7\xE3o', icon: 'an an-newspaper' }
`),og()()()(),Sl(979,"tr",16)(980,"td",17)(981,"div",18)(982,"span",19),eN(983," kind"),Wl(984,"br"),og()()(),Sl(985,"td",20)(986,"code",25),eN(987,"string"),og()(),Sl(988,"td",23)(989,"em")(990,"strong"),eN(991,"(opcional)"),og()(),Sl(992,"p"),eN(993,"Define o estilo visual da a\xE7\xE3o quando exibida como bot\xE3o fora do "),Sl(994,"em"),eN(995,"dropdown"),og(),eN(996,"."),og(),Sl(997,"p"),eN(998,"Valores permitidos:"),og(),Sl(999,"ul")(1e3,"li")(1001,"code"),eN(1002,"primary"),og(),eN(1003,": bot\xE3o com maior destaque visual."),og(),Sl(1004,"li")(1005,"code"),eN(1006,"secondary"),og(),eN(1007,": estilo padr\xE3o."),og()(),Sl(1008,"blockquote")(1009,"p"),eN(1010,"Valores inv\xE1lidos s\xE3o ignorados e o componente aplica o estilo padr\xE3o da posi\xE7\xE3o."),og()(),Sl(1011,"blockquote")(1012,"p"),eN(1013,"Somente uma a\xE7\xE3o pode ter "),Sl(1014,"code"),eN(1015,"kind"),og(),eN(1016," igual a "),Sl(1017,"code"),eN(1018,"primary"),og(),eN(1019,". Caso mais de uma defina "),Sl(1020,"code"),eN(1021,"primary"),og(),eN(1022,`,
apenas a primeira ser\xE1 mantida e as demais receber\xE3o `),Sl(1023,"code"),eN(1024,"secondary"),og(),eN(1025,"."),og()(),Sl(1026,"blockquote")(1027,"p"),eN(1028,"Quando n\xE3o definido, o estilo \xE9 determinado pelo "),Sl(1029,"code"),eN(1030,"PoPageActionsLayout"),og(),eN(1031,"."),og()()()(),Sl(1032,"tr",16)(1033,"td",17)(1034,"div",18)(1035,"span",19),eN(1036," label"),Wl(1037,"br"),og()()(),Sl(1038,"td",20)(1039,"code",25),eN(1040,"string"),og()(),Sl(1041,"td",23)(1042,"p"),eN(1043,"R\xF3tulo da a\xE7\xE3o."),og(),Sl(1044,"p"),eN(1045,"A label tamb\xE9m pode representar o agrupador de subitens quando a a\xE7\xE3o possuir "),Sl(1046,"code"),eN(1047,"subItems"),og(),eN(1048,"."),og()()(),Sl(1049,"tr",16)(1050,"td",17)(1051,"div",18)(1052,"span",19),eN(1053," selected"),Wl(1054,"br"),og()()(),Sl(1055,"td",20)(1056,"code",39),eN(1057,"boolean"),og()(),Sl(1058,"td",23)(1059,"em")(1060,"strong"),eN(1061,"(opcional)"),og()(),Sl(1062,"p"),eN(1063,"Define se a a\xE7\xE3o est\xE1 selecionada."),og()()(),Sl(1064,"tr",16)(1065,"td",17)(1066,"div",18)(1067,"span",19),eN(1068," separator"),Wl(1069,"br"),og()()(),Sl(1070,"td",20)(1071,"code",39),eN(1072,"boolean"),og()(),Sl(1073,"td",23)(1074,"em")(1075,"strong"),eN(1076,"(opcional)"),og()(),Sl(1077,"p"),eN(1078,"Atribui uma linha separadora acima do item."),og()()(),Sl(1079,"tr",16)(1080,"td",17)(1081,"div",18)(1082,"span",19),eN(1083," subItems"),Wl(1084,"br"),og()()(),Sl(1085,"td",20)(1086,"code",44),eN(1087,"Array<PoPopupAction>"),og()(),Sl(1088,"td",23)(1089,"em")(1090,"strong"),eN(1091,"(opcional)"),og()(),Sl(1092,"p"),eN(1093,"Define uma lista de subitens para cria\xE7\xE3o de menus aninhados."),og(),Sl(1094,"p"),eN(1095,`Ao definir esta propriedade, o item exibir\xE1 um \xEDcone indicador de subn\xEDvel.
Recomenda-se utilizar no m\xE1ximo tr\xEAs n\xEDveis hier\xE1rquicos para garantir a usabilidade.`),og(),Sl(1096,"blockquote")(1097,"p"),eN(1098,"As propriedades "),Sl(1099,"code"),eN(1100,"disabled"),og(),eN(1101,", "),Sl(1102,"code"),eN(1103,"type"),og(),eN(1104," e "),Sl(1105,"code"),eN(1106,"visible"),og(),eN(1107," n\xE3o s\xE3o aplicadas visualmente ao item agrupador."),og()(),Sl(1108,"blockquote")(1109,"p"),eN(1110,"Quando "),Sl(1111,"code"),eN(1112,"url"),og(),eN(1113," \xE9 informada em um agrupador, o redirecionamento ter\xE1 prioridade e os subitens n\xE3o ser\xE3o abertos."),og()(),Sl(1114,"blockquote")(1115,"p"),eN(1116,"Em subn\xEDveis aninhados, o "),Sl(1117,"code"),eN(1118,"icon"),og(),eN(1119," do agrupador \xE9 substitu\xEDdo pelo indicador de navega\xE7\xE3o (seta)."),og()()()(),Sl(1120,"tr",16)(1121,"td",17)(1122,"div",18)(1123,"span",19),eN(1124," type"),Wl(1125,"br"),og()()(),Sl(1126,"td",20)(1127,"code",25),eN(1128,"string"),og()(),Sl(1129,"td",23)(1130,"em")(1131,"strong"),eN(1132,"(opcional)"),og()(),Sl(1133,"p"),eN(1134,"Define a cor do item."),og(),Sl(1135,"p"),eN(1136,"Valores v\xE1lidos:"),og(),Sl(1137,"ul")(1138,"li")(1139,"code"),eN(1140,"default"),og()(),Sl(1141,"li")(1142,"code"),eN(1143,"danger"),og()()()()(),Sl(1144,"tr",16)(1145,"td",17)(1146,"div",18)(1147,"span",19),eN(1148," url"),Wl(1149,"br"),og()()(),Sl(1150,"td",20)(1151,"code",25),eN(1152,"string"),og()(),Sl(1153,"td",23)(1154,"em")(1155,"strong"),eN(1156,"(opcional)"),og()(),Sl(1157,"p"),eN(1158,"URL para redirecionamento. Aceita rotas internas e links externos."),og(),Sl(1159,"p"),eN(1160,`A url tamb\xE9m pode ser configurada para o agrupador de subitens.
Entretanto, quando a `),Sl(1161,"code"),eN(1162,"url"),og(),eN(1163," \xE9 informada em um agrupador, o clique "),Sl(1164,"strong"),eN(1165,"n\xE3o abrir\xE1 os subitens"),og(),eN(1166,`, pois o item ser\xE1
tratado como um link e o redirecionamento ter\xE1 prioridade sobre a exibi\xE7\xE3o da lista.`),og(),Sl(1167,"blockquote")(1168,"p"),eN(1169,"Quando informada, tem prioridade sobre a propriedade "),Sl(1170,"code"),eN(1171,"action"),og(),eN(1172,"."),og()()()(),Sl(1173,"tr",16)(1174,"td",17)(1175,"div",18)(1176,"span",19),eN(1177," visible"),Wl(1178,"br"),og()()(),Sl(1179,"td",20)(1180,"code",39),eN(1181,"boolean "),og(),Sl(1182,"code",35),eN(1183," Function"),og()(),Sl(1184,"td",23)(1185,"em")(1186,"strong"),eN(1187,"(opcional)"),og()(),Sl(1188,"p"),eN(1189,"Define a visibilidade da a\xE7\xE3o. Aceita um valor booleano ou uma fun\xE7\xE3o que retorna booleano."),og()()()(),Sl(1190,"h4",34)(1191,"code",5),eN(1192,"PoPageFilter"),og()(),Sl(1193,"div",2)(1194,"p"),eN(1195,"Interface para o atributo "),Sl(1196,"code"),eN(1197,"filter"),og(),eN(1198," do componente "),Sl(1199,"code"),eN(1200,"po-page-list"),og(),eN(1201,"."),og()(),Sl(1202,"h4",12),eN(1203,"Propriedades"),og(),Sl(1204,"table",13)(1205,"tr",14)(1206,"th",15),eN(1207,"Nome"),og(),Sl(1208,"th",15),eN(1209,"Tipo"),og(),Sl(1210,"th",15),eN(1211,"Descri\xE7\xE3o"),og()(),Sl(1212,"tr",16)(1213,"td",17)(1214,"div",18)(1215,"span",19),eN(1216," action"),Wl(1217,"br"),og()()(),Sl(1218,"td",20)(1219,"code",35),eN(1220,"Function"),og()(),Sl(1221,"td",23)(1222,"em")(1223,"strong"),eN(1224,"(opcional)"),og()(),Sl(1225,"p"),eN(1226,"A\xE7\xE3o a ser executada."),og()()(),Sl(1227,"tr",16)(1228,"td",17)(1229,"div",18)(1230,"span",19),eN(1231," advancedAction"),Wl(1232,"br"),og()()(),Sl(1233,"td",20)(1234,"code",35),eN(1235,"Function"),og()(),Sl(1236,"td",23)(1237,"em")(1238,"strong"),eN(1239,"(opcional)"),og()(),Sl(1240,"p"),eN(1241,`A\xE7\xE3o a ser executada quando for disparado o
evento de `),Sl(1242,"em"),eN(1243,"click"),og(),eN(1244," atrav\xE9s do r\xF3tulo "),Sl(1245,"strong"),eN(1246,"Busca Avan\xE7ada"),og(),eN(1247,"."),og()()(),Sl(1248,"tr",16)(1249,"td",17)(1250,"div",18)(1251,"span",19),eN(1252," placeholder"),Wl(1253,"br"),og()()(),Sl(1254,"td",20)(1255,"code",25),eN(1256,"string"),og()(),Sl(1257,"td",23)(1258,"em")(1259,"strong"),eN(1260,"(opcional)"),og()(),Sl(1261,"p"),eN(1262,"Texto de instru\xE7\xE3o exibido dentro do campo de filtro."),og()()(),Sl(1263,"tr",16)(1264,"td",17)(1265,"div",18)(1266,"span",19),eN(1267," width"),Wl(1268,"br"),og()()(),Sl(1269,"td",20)(1270,"code",45),eN(1271,"number"),og()(),Sl(1272,"td",23)(1273,"em")(1274,"strong"),eN(1275,"(opcional)"),og()(),Sl(1276,"p"),eN(1277,"Tamanho do filtro em tela, utilizando o "),Sl(1278,"em"),eN(1279,"Grid System"),og(),eN(1280,`,
e limitado ao m\xE1ximo de 6 colunas. O tamanho m\xEDnimo \xE9 controlado
conforme resolu\xE7\xE3o de tela para manter a consist\xEAncia do layout.`),og()()()(),Sl(1281,"h4",34)(1282,"code",5),eN(1283,"PoPageListLiterals"),og()(),Sl(1284,"div",2)(1285,"p"),eN(1286,"Interface para defini\xE7\xE3o das literais usadas no "),Sl(1287,"code"),eN(1288,"po-page-list"),og(),eN(1289,"."),og()(),Sl(1290,"h4",12),eN(1291,"Propriedades"),og(),Sl(1292,"table",13)(1293,"tr",14)(1294,"th",15),eN(1295,"Nome"),og(),Sl(1296,"th",15),eN(1297,"Tipo"),og(),Sl(1298,"th",15),eN(1299,"Descri\xE7\xE3o"),og()(),Sl(1300,"tr",16)(1301,"td",17)(1302,"div",18)(1303,"span",19),eN(1304," otherActions"),Wl(1305,"br"),og()()(),Sl(1306,"td",20)(1307,"code",25),eN(1308,"string"),og()(),Sl(1309,"td",23)(1310,"em")(1311,"strong"),eN(1312,"(opcional)"),og()(),Sl(1313,"p"),eN(1314,"Legenda do "),Sl(1315,"code"),eN(1316,"po-dropdown"),og(),eN(1317," de a\xE7\xF5es."),og()()()()());},dependencies:[Ka],encapsulation:2})}return s})();var Ce=(()=>{class s{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(l,r){this.route=l,this.router=r;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let r=l.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:"merge"}),this.activeTab=l;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(r){return new(r||s)(w(Xn),w(En))};static \u0275cmp=Un({type:s,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Page List",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,n){r&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return n.changeTab("doc")}),Wl(3,"sample-po-page-list-doc"),og(),Sl(4,"po-tab",3),ft("p-click",function(){return n.changeTab("web")}),Wl(5,"sample-po-page-list-basic-view")(6,"sample-po-page-list-labs-view")(7,"sample-po-page-list-hiring-processes-view"),og()()()),r&2&&(nw("p-actions",n.actions),Lp(2),nw("p-active",n.activeTab==="doc"),Lp(2),nw("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"));},dependencies:[rNe,Bme,qme,Ee,fe,xe,ve],encapsulation:2})}return s})();var Ge=[{path:"",component:Ce}],ye=(()=>{class s{static \u0275fac=function(r){return new(r||s)};static \u0275mod=fe$1({type:s});static \u0275inj=ue({imports:[hL.forChild(Ge),hL]})}return s})();var vt=(()=>{class s{static \u0275fac=function(r){return new(r||s)};static \u0275mod=fe$1({type:s});static \u0275inj=ue({imports:[sr,ye]})}return s})();export{vt as DocPoPageListModule};