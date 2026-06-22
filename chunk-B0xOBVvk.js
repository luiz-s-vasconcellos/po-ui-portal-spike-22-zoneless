import {f as fe,u as ue,s as sr,h as hL,w,c3 as Xn,E as En,U as Un,a as f,aW as Yp,g as s,r as r$1,I,a3 as rNe,H as Wl,an as CO,aH as Ka,b8 as Bme,b9 as qme,F as Sl,z as eN,J as og,a1 as ft,L as Lp,ar as $x,au as dg,Q as nw,bs as fN,aX as Z9,aF as G9,aY as q9,aG as _k,aZ as mk,b0 as Qt,b1 as mv,c4 as b3,bB as cc,b4 as L3,c8 as wde,aJ as Hhe,ba as fNe,aB as wx,aM as ww,aN as e0,aq as dx,bd as Nx,a7 as dN,aO as Ew,aP as n0,at as fx,cz as Pz,b6 as Yo,b7 as k3,R as we$1,av as ql,aw as lo,ax as uo,aA as Mx,aD as Ky,aT as nN,aE as Xy}from'./main-WP3NAV7C.js';var Se=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-page-default-basic"]],standalone:false,decls:1,vars:0,consts:[["p-title","PO Page Default"]],template:function(r,i){r&1&&Wl(0,"po-page-default",0);},dependencies:[rNe],encapsulation:2,changeDetection:1})}return l})();var Ae=l=>({"docs-sample-code-tabs":l}),xe=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-page-default-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Page Default Basic"),og(),Sl(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-page-default-basic/sample-po-page-default-basic.component.html"),og(),Sl(13,"pre",7),eN(14,`<po-page-default p-title="PO Page Default"> </po-page-default>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-page-default-basic/sample-po-page-default-basic.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-page-default-basic',
  templateUrl: './sample-po-page-default-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageDefaultBasicComponent {}
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-page-default-basic"),og(),Wl(23,"hr")),r&2&&(Lp(5),$x("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,Ae,i.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,Se],encapsulation:2})}return l})();var Fe=()=>({});function Be(l,Me){if(l&1){let d=wx();Sl(0,"po-input",36),ww("ngModelChange",function(i){Ky(d);let m=Mx(2);return nN(m.helperFooterLabel,i)||(m.helperFooterLabel=i),Xy(i)}),og(),e0();}if(l&2){let d=Mx(2);Ew("ngModel",d.helperFooterLabel),n0();}}function Oe(l,Me){if(l&1){let d=wx();Sl(0,"po-widget",10)(1,"div",6)(2,"po-input",32),ww("ngModelChange",function(i){Ky(d);let m=Mx();return nN(m.helperTitle,i)||(m.helperTitle=i),Xy(i)}),og(),e0(),Sl(3,"po-input",33),ww("ngModelChange",function(i){Ky(d);let m=Mx();return nN(m.helperContent,i)||(m.helperContent=i),Xy(i)}),og(),e0(),og(),Sl(4,"div",6)(5,"po-radio-group",34),ft("ngModelChange",function(i){Ky(d);let m=Mx();return Xy(m.helperType=i)}),og(),e0(),og(),Sl(6,"div",6),dx(7,Be,1,1,"po-input",35),og()();}if(l&2){let d=Mx();Lp(2),Ew("ngModel",d.helperTitle),n0(),Lp(),Ew("ngModel",d.helperContent),n0(),Lp(2),nw("p-columns",4)("ngModel",d.helperType)("p-options",d.helperTypeOptions),n0(),Lp(2),fx(d.helperType==="help"?7:-1);}}var ve=(()=>{class l{poNotification=f(Yp);action={label:"",visible:true,disabled:false};actions=[];breadcrumb={items:[]};breadcrumbItem={label:"",link:void 0};breadcrumbParams={};componentsSize="medium";customLiterals;literals="";pageActionsLayout="default";pageHeaderType="primary";subtitle="";title="PO Page Default";helperContent="";helperFooterLabel="";helperTitle="";helperType="info";showHelper=false;helperTypeOptions=[{label:"help",value:"help"},{label:"info",value:"info"}];get helper(){if(!this.showHelper||!this.helperContent)return;let d={title:this.helperTitle,content:this.helperContent,type:this.helperType};return this.helperType==="help"&&this.helperFooterLabel&&(d.footerAction={label:this.helperFooterLabel,action:()=>this.poNotification.information("Footer action clicked")}),d}actionKindOptions=[{label:"primary",value:"primary"},{label:"secondary",value:"secondary"}];actionOptions=[{label:"Disabled",value:"disabled"},{label:"Separator",value:"separator"},{label:"Selected",value:"selected"},{label:"Visible",value:"visible"}];componentsSizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];iconOptions=[{value:"an an-newspaper",label:"an an-newspaper"},{value:"an an-magnifying-glass",label:"an an-magnifying-glass"},{value:"an an-globe",label:"an an-globe"},{value:"fa fa-podcast",label:"fa fa-podcast"}];pageActionsLayoutOptions=[{label:"default",value:"default"},{label:"dropdown",value:"dropdown"},{label:"mixed",value:"mixed"}];pageHeaderTypeOptions=[{label:"primary",value:"primary"},{label:"secondary",value:"secondary"},{label:"tertiary",value:"tertiary"}];typeOptions=[{label:"Danger",value:"danger"},{label:"Default",value:"default"}];ngOnInit(){this.restore();}addAction(d){let r=s(r$1({},d),{visible:d.visible!==void 0?d.visible:true,disabled:d.disabled!==void 0?d.disabled:false});r.action=r.action?this.showAction.bind(this,r.action):void 0,this.actions=[...this.actions,r],this.restoreActionForm();}addBreadcrumbItem(){this.breadcrumb.items=this.breadcrumb.items.concat([this.breadcrumbItem]),this.breadcrumbItem={label:"",link:void 0};}addBreadcrumbParam(){let d={[this.breadcrumbParams.property||""]:this.breadcrumbParams.value};this.breadcrumb.params?this.breadcrumb.params=Object.assign(this.breadcrumb.params,d):this.breadcrumb.params=d,this.breadcrumbParams={};}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals);}catch(d){this.customLiterals=void 0;}}onBack(){this.poNotification.information("Back button clicked (p-back event)");}restore(){this.actions=[],this.breadcrumb={items:[]},this.breadcrumbItem={label:"",link:void 0},this.breadcrumbParams={},this.componentsSize="medium",this.customLiterals=void 0,this.helperContent="",this.helperFooterLabel="",this.helperTitle="",this.helperType="info",this.literals="",this.pageActionsLayout="default",this.pageHeaderType="primary",this.showHelper=false,this.subtitle="",this.title="PO Page Default",this.restoreActionForm();}restoreActionForm(){this.action={label:"",visible:true,disabled:false};}showAction(d){this.poNotification.success(`Action clicked: ${d}`);}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-page-default-labs"]],standalone:false,decls:50,vars:43,consts:[["formPage","ngForm"],["formAction","ngForm"],["formBreadcrumbFavorite","ngForm"],["formBreadcrumbItems","ngForm"],["formBreadcrumbParams","ngForm"],[3,"p-back","p-actions","p-breadcrumb","p-components-size","p-helper","p-literals","p-page-actions-layout","p-page-header-type","p-title","p-subtitle"],[1,"po-row"],["name","title","p-label","Title","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","subtitle","p-label","Subtitle",1,"po-md-6",3,"ngModelChange","ngModel"],["name","showHelper","p-label","Helper",1,"po-md-12","po-pt-2","po-pb-2",3,"ngModelChange","ngModel"],["p-title","Helper",1,"po-md-12","po-pb-3"],["name","pageHeaderType","p-label","Page Header Type",1,"po-lg-3","po-md-6",3,"ngModelChange","ngModel","p-options"],["name","pageActionsLayout","p-label","Page Actions Layout",1,"po-lg-3","po-md-6",3,"ngModelChange","ngModel","p-options"],["name","literals","p-help",'Ex.: {"otherActions": "Mais a\xE7\xF5es"}',"p-label","Literals",1,"po-md-6",3,"ngModelChange","p-change","ngModel"],["name","size","p-label","Components size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-columns","p-options"],["p-title","Action"],["name","actionLabel","p-label","Label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","actionAction","p-clean","","p-label","Action",1,"po-md-6",3,"ngModelChange","ngModel"],["name","actionURL","p-label","URL",1,"po-md-6",3,"ngModelChange","ngModel"],["name","type","p-label","Type",1,"po-lg-3","po-md-6",3,"ngModelChange","ngModel","p-options"],["name","icon","p-label","Icon",1,"po-lg-3","po-md-6",3,"ngModelChange","ngModel","p-options"],["name","kind","p-label","Kind",1,"po-lg-3","po-md-6",3,"ngModelChange","ngModel","p-options"],["name","action","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-columns","p-indeterminate","p-options"],["p-label","Add Action",1,"po-lg-2","po-md-4",3,"p-click","p-disabled"],["name","breadcrumbFavorite","p-clean","","p-help","https://po-sample-api.onrender.com/v1/favorite","p-label","Breadcrumb favorite",1,"po-md-6",3,"ngModelChange","ngModel"],["name","breadcrumbItemLabel","p-clean","","p-label","Breadcrumb item label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","breadcrumbItemLink","p-clean","","p-label","Breadcrumb item link","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add breadcrumb item",1,"po-lg-3","po-md-4",3,"p-click","p-disabled"],["name","breadcrumbParamsProperty","p-clean","","p-label","Breadcrumb params property","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","breadcrumbParamsValue","p-clean","","p-label","Breadcrumb params value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add breadcrumb params",1,"po-lg-3","po-md-4",3,"p-click","p-disabled"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"],["name","helperTitle","p-clean","","p-label","Title",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperContent","p-clean","","p-label","Content","p-help","Consulte a <b>documenta\xE7\xE3o</b> para mais detalhes.",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperType","p-label","Type",1,"po-md-12",3,"ngModelChange","p-columns","ngModel","p-options"],["name","helperFooterLabel","p-clean","","p-label","Footer Action",1,"po-md-6",3,"ngModel"],["name","helperFooterLabel","p-clean","","p-label","Footer Action",1,"po-md-6",3,"ngModelChange","ngModel"]],template:function(r,i){if(r&1){let m=wx();Sl(0,"po-page-default",5),ft("p-back",function(){return i.onBack()}),og(),Wl(1,"po-divider"),Sl(2,"form",null,0)(4,"div",6)(5,"po-input",7),ww("ngModelChange",function(o){return Ky(m),nN(i.title,o)||(i.title=o),Xy(o)}),og(),e0(),Sl(6,"po-input",8),ww("ngModelChange",function(o){return Ky(m),nN(i.subtitle,o)||(i.subtitle=o),Xy(o)}),og(),e0(),Sl(7,"po-checkbox",9),ww("ngModelChange",function(o){return Ky(m),nN(i.showHelper,o)||(i.showHelper=o),Xy(o)}),og(),e0(),dx(8,Oe,8,6,"po-widget",10),Sl(9,"po-select",11),ft("ngModelChange",function(o){return i.pageHeaderType=o}),og(),e0(),Sl(10,"po-select",12),ft("ngModelChange",function(o){return i.pageActionsLayout=o}),og(),e0(),Sl(11,"po-input",13),ww("ngModelChange",function(o){return Ky(m),nN(i.literals,o)||(i.literals=o),Xy(o)}),ft("p-change",function(){return i.changeLiterals()}),og(),e0(),Sl(12,"po-radio-group",14),ww("ngModelChange",function(o){return Ky(m),nN(i.componentsSize,o)||(i.componentsSize=o),Xy(o)}),og(),e0(),og()(),Wl(13,"po-divider"),Sl(14,"po-widget",15)(15,"form",null,1)(17,"div",6)(18,"po-input",16),ww("ngModelChange",function(o){return Ky(m),nN(i.action.label,o)||(i.action.label=o),Xy(o)}),og(),e0(),Sl(19,"po-input",17),ww("ngModelChange",function(o){return Ky(m),nN(i.action.action,o)||(i.action.action=o),Xy(o)}),og(),e0(),Sl(20,"po-input",18),ww("ngModelChange",function(o){return Ky(m),nN(i.action.url,o)||(i.action.url=o),Xy(o)}),og(),e0(),Sl(21,"po-select",19),ft("ngModelChange",function(o){return i.action.type=o}),og(),e0(),Sl(22,"po-select",20),ft("ngModelChange",function(o){return i.action.icon=o}),og(),e0(),Sl(23,"po-select",21),ft("ngModelChange",function(o){return i.action.kind=o}),og(),e0(),Sl(24,"po-checkbox-group",22),ft("ngModelChange",function(o){return i.action=o}),og(),e0(),og(),Sl(25,"div",6)(26,"po-button",23),ft("p-click",function(){return i.addAction(i.action)}),og()()()(),Wl(27,"po-divider"),Sl(28,"form",null,2)(30,"div",6)(31,"po-input",24),ww("ngModelChange",function(o){return Ky(m),nN(i.breadcrumb.favorite,o)||(i.breadcrumb.favorite=o),Xy(o)}),og(),e0(),og()(),Sl(32,"form",null,3)(34,"div",6)(35,"po-input",25),ww("ngModelChange",function(o){return Ky(m),nN(i.breadcrumbItem.label,o)||(i.breadcrumbItem.label=o),Xy(o)}),og(),e0(),Sl(36,"po-input",26),ww("ngModelChange",function(o){return Ky(m),nN(i.breadcrumbItem.link,o)||(i.breadcrumbItem.link=o),Xy(o)}),og(),e0(),og(),Sl(37,"div",6)(38,"po-button",27),ft("p-click",function(){return i.addBreadcrumbItem()}),og()()(),Wl(39,"po-divider"),Sl(40,"form",null,4)(42,"div",6)(43,"po-input",28),ww("ngModelChange",function(o){return Ky(m),nN(i.breadcrumbParams.property,o)||(i.breadcrumbParams.property=o),Xy(o)}),og(),e0(),Sl(44,"po-input",29),ww("ngModelChange",function(o){return Ky(m),nN(i.breadcrumbParams.value,o)||(i.breadcrumbParams.value=o),Xy(o)}),og(),e0(),og(),Sl(45,"div",6)(46,"po-button",30),ft("p-click",function(){return i.addBreadcrumbParam()}),og()()(),Wl(47,"po-divider"),Sl(48,"div",6)(49,"po-button",31),ft("p-click",function(){return i.restore()}),og()();}if(r&2){let m=Nx(16),s=Nx(33),o=Nx(41);nw("p-actions",i.actions)("p-breadcrumb",i.breadcrumb)("p-components-size",i.componentsSize)("p-helper",i.helper||"")("p-literals",i.customLiterals??dN(42,Fe))("p-page-actions-layout",i.pageActionsLayout)("p-page-header-type",i.pageHeaderType)("p-title",i.title)("p-subtitle",i.subtitle),Lp(5),Ew("ngModel",i.title),n0(),Lp(),Ew("ngModel",i.subtitle),n0(),Lp(),Ew("ngModel",i.showHelper),n0(),Lp(),fx(i.showHelper?8:-1),Lp(),nw("ngModel",i.pageHeaderType)("p-options",i.pageHeaderTypeOptions),n0(),Lp(),nw("ngModel",i.pageActionsLayout)("p-options",i.pageActionsLayoutOptions),n0(),Lp(),Ew("ngModel",i.literals),n0(),Lp(),Ew("ngModel",i.componentsSize),nw("p-columns",4)("p-options",i.componentsSizeOptions),n0(),Lp(6),Ew("ngModel",i.action.label),n0(),Lp(),Ew("ngModel",i.action.action),n0(),Lp(),Ew("ngModel",i.action.url),n0(),Lp(),nw("ngModel",i.action.type)("p-options",i.typeOptions),n0(),Lp(),nw("ngModel",i.action.icon)("p-options",i.iconOptions),n0(),Lp(),nw("ngModel",i.action.kind)("p-options",i.actionKindOptions),n0(),Lp(),nw("ngModel",i.action)("p-columns",4)("p-indeterminate",true)("p-options",i.actionOptions),n0(),Lp(2),nw("p-disabled",m.form.invalid),Lp(5),Ew("ngModel",i.breadcrumb.favorite),n0(),Lp(4),Ew("ngModel",i.breadcrumbItem.label),n0(),Lp(),Ew("ngModel",i.breadcrumbItem.link),n0(),Lp(2),nw("p-disabled",s.invalid??false),Lp(5),Ew("ngModel",i.breadcrumbParams.property),n0(),Lp(),Ew("ngModel",i.breadcrumbParams.value),n0(),Lp(2),nw("p-disabled",o.invalid??false);}},dependencies:[Z9,G9,q9,_k,mk,Qt,mv,b3,cc,L3,wde,Hhe,rNe,fNe],encapsulation:2,changeDetection:1})}return l})();var qe=l=>({"docs-sample-code-tabs":l}),Pe=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-page-default-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Page Default Labs"),og(),Sl(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-page-default-labs/sample-po-page-default-labs.component.html"),og(),Sl(13,"pre",7),eN(14,`<po-page-default
  [p-actions]="actions"
  [p-breadcrumb]="breadcrumb"
  [p-components-size]="componentsSize"
  [p-helper]="helper || ''"
  [p-literals]="customLiterals ?? {}"
  [p-page-actions-layout]="pageActionsLayout"
  [p-page-header-type]="pageHeaderType"
  [p-title]="title"
  [p-subtitle]="subtitle"
  (p-back)="onBack()"
>
</po-page-default>

<po-divider></po-divider>

<form #formPage="ngForm">
  <div class="po-row">
    <po-input class="po-md-6" name="title" [(ngModel)]="title" p-label="Title" p-required> </po-input>

    <po-input class="po-md-6" name="subtitle" [(ngModel)]="subtitle" p-label="Subtitle"> </po-input>

    <po-checkbox class="po-md-12 po-pt-2 po-pb-2" name="showHelper" [(ngModel)]="showHelper" p-label="Helper">
    </po-checkbox>

    @if (showHelper) {
      <po-widget class="po-md-12 po-pb-3" p-title="Helper">
        <div class="po-row">
          <po-input class="po-md-6" name="helperTitle" [(ngModel)]="helperTitle" p-clean p-label="Title"> </po-input>

          <po-input
            class="po-md-6"
            name="helperContent"
            [(ngModel)]="helperContent"
            p-clean
            p-label="Content"
            p-help="Consulte a <b>documenta\xE7\xE3o</b> para mais detalhes."
          >
          </po-input>
        </div>

        <div class="po-row">
          <po-radio-group
            name="helperType"
            class="po-md-12"
            [p-columns]="4"
            p-label="Type"
            [ngModel]="helperType"
            (ngModelChange)="helperType = $event"
            [p-options]="helperTypeOptions"
          >
          </po-radio-group>
        </div>

        <div class="po-row">
          @if (helperType === 'help') {
            <po-input
              class="po-md-6"
              name="helperFooterLabel"
              [(ngModel)]="helperFooterLabel"
              p-clean
              p-label="Footer Action"
            >
            </po-input>
          }
        </div>
      </po-widget>
    }

    <po-select
      class="po-lg-3 po-md-6"
      name="pageHeaderType"
      [ngModel]="pageHeaderType"
      (ngModelChange)="pageHeaderType = $event"
      p-label="Page Header Type"
      [p-options]="pageHeaderTypeOptions"
    >
    </po-select>

    <po-select
      class="po-lg-3 po-md-6"
      name="pageActionsLayout"
      [ngModel]="pageActionsLayout"
      (ngModelChange)="pageActionsLayout = $event"
      p-label="Page Actions Layout"
      [p-options]="pageActionsLayoutOptions"
    >
    </po-select>

    <po-input
      class="po-md-6"
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
      [p-columns]="4"
      p-label="Components size"
      p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
      [p-options]="componentsSizeOptions"
    >
    </po-radio-group>
  </div>
</form>

<po-divider></po-divider>

<po-widget p-title="Action">
  <form #formAction="ngForm">
    <div class="po-row">
      <po-input class="po-md-6" name="actionLabel" [(ngModel)]="action.label" p-label="Label" p-required> </po-input>

      <po-input class="po-md-6" name="actionAction" [(ngModel)]="action.action" p-clean p-label="Action"> </po-input>

      <po-input class="po-md-6" name="actionURL" [(ngModel)]="action.url" p-label="URL"> </po-input>

      <po-select
        class="po-lg-3 po-md-6"
        name="type"
        [ngModel]="action.type"
        (ngModelChange)="action.type = $event"
        p-label="Type"
        [p-options]="typeOptions"
      >
      </po-select>

      <po-select
        class="po-lg-3 po-md-6"
        name="icon"
        [ngModel]="action.icon"
        (ngModelChange)="action.icon = $event"
        p-label="Icon"
        [p-options]="iconOptions"
      >
      </po-select>

      <po-select
        class="po-lg-3 po-md-6"
        name="kind"
        [ngModel]="action.kind"
        (ngModelChange)="action.kind = $event"
        p-label="Kind"
        [p-options]="actionKindOptions"
      >
      </po-select>

      <po-checkbox-group
        class="po-md-12"
        name="action"
        [ngModel]="action"
        (ngModelChange)="action = $event"
        [p-columns]="4"
        [p-indeterminate]="true"
        p-label="Properties"
        [p-options]="actionOptions"
      >
      </po-checkbox-group>
    </div>

    <div class="po-row">
      <po-button
        class="po-lg-2 po-md-4"
        p-label="Add Action"
        [p-disabled]="formAction.form.invalid"
        (p-click)="addAction(action)"
      >
      </po-button>
    </div>
  </form>
</po-widget>

<po-divider></po-divider>

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
      class="po-lg-3 po-md-4"
      p-label="Add breadcrumb item"
      [p-disabled]="formBreadcrumbItems.invalid ?? false"
      (p-click)="addBreadcrumbItem()"
    >
    </po-button>
  </div>
</form>

<po-divider></po-divider>

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
      [p-disabled]="formBreadcrumbParams.invalid ?? false"
      (p-click)="addBreadcrumbParam()"
    >
    </po-button>
  </div>
</form>

<po-divider></po-divider>

<div class="po-row">
  <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"> </po-button>
</div>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-page-default-labs/sample-po-page-default-labs.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

import {
  PoBreadcrumb,
  PoBreadcrumbItem,
  PoCheckboxGroupOption,
  PoHelperOptions,
  PoNotificationService,
  PoPageAction,
  PoPageDefaultLiterals,
  PoRadioGroupOption,
  PoSelectOption
} from '@po-ui/ng-components';

interface EditableAction extends PoPageAction {
  visible: boolean;
  disabled?: boolean;
}

@Component({
  selector: 'sample-po-page-default-labs',
  templateUrl: './sample-po-page-default-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageDefaultLabsComponent implements OnInit {
  private poNotification = inject(PoNotificationService);

  action: EditableAction = { label: '', visible: true, disabled: false };
  actions: Array<EditableAction> = [];
  breadcrumb: PoBreadcrumb = { items: [] };
  breadcrumbItem: PoBreadcrumbItem = { label: '', link: undefined };
  breadcrumbParams: { property?: string; value?: string } = {};
  componentsSize: string = 'medium';
  customLiterals: PoPageDefaultLiterals | undefined;
  literals: string = '';
  pageActionsLayout: string = 'default';
  pageHeaderType: string = 'primary';
  subtitle: string = '';
  title: string = 'PO Page Default';

  helperContent: string = '';
  helperFooterLabel: string = '';
  helperTitle: string = '';
  helperType: 'help' | 'info' = 'info';
  showHelper: boolean = false;

  public readonly helperTypeOptions: Array<PoSelectOption> = [
    { label: 'help', value: 'help' },
    { label: 'info', value: 'info' }
  ];

  get helper(): PoHelperOptions | undefined {
    if (!this.showHelper || !this.helperContent) {
      return undefined;
    }
    const options: PoHelperOptions = {
      title: this.helperTitle,
      content: this.helperContent,
      type: this.helperType
    };
    if (this.helperType === 'help' && this.helperFooterLabel) {
      options.footerAction = {
        label: this.helperFooterLabel,
        action: () => this.poNotification.information('Footer action clicked')
      };
    }
    return options;
  }

  public readonly actionKindOptions: Array<PoSelectOption> = [
    { label: 'primary', value: 'primary' },
    { label: 'secondary', value: 'secondary' }
  ];

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

  public readonly iconOptions: Array<PoSelectOption> = [
    { value: 'an an-newspaper', label: 'an an-newspaper' },
    { value: 'an an-magnifying-glass', label: 'an an-magnifying-glass' },
    { value: 'an an-globe', label: 'an an-globe' },
    { value: 'fa fa-podcast', label: 'fa fa-podcast' }
  ];

  public readonly pageActionsLayoutOptions: Array<PoSelectOption> = [
    { label: 'default', value: 'default' },
    { label: 'dropdown', value: 'dropdown' },
    { label: 'mixed', value: 'mixed' }
  ];

  public readonly pageHeaderTypeOptions: Array<PoSelectOption> = [
    { label: 'primary', value: 'primary' },
    { label: 'secondary', value: 'secondary' },
    { label: 'tertiary', value: 'tertiary' }
  ];

  public readonly typeOptions: Array<PoSelectOption> = [
    { label: 'Danger', value: 'danger' },
    { label: 'Default', value: 'default' }
  ];

  ngOnInit() {
    this.restore();
  }

  addAction(action: EditableAction) {
    const newAction: EditableAction = {
      ...action,
      visible: action.visible !== undefined ? action.visible : true,
      disabled: action.disabled !== undefined ? action.disabled : false
    };
    newAction.action = newAction.action ? this.showAction.bind(this, newAction.action) : undefined;
    this.actions = [...this.actions, newAction];

    this.restoreActionForm();
  }

  addBreadcrumbItem() {
    this.breadcrumb.items = this.breadcrumb.items.concat([this.breadcrumbItem]);
    this.breadcrumbItem = { label: '', link: undefined };
  }

  addBreadcrumbParam() {
    const newParam = {
      [this.breadcrumbParams.property || '']: this.breadcrumbParams.value
    };

    if (this.breadcrumb.params) {
      this.breadcrumb.params = Object.assign(this.breadcrumb.params, newParam);
    } else {
      this.breadcrumb.params = newParam;
    }

    this.breadcrumbParams = {};
  }

  changeLiterals() {
    try {
      this.customLiterals = JSON.parse(this.literals);
    } catch {
      this.customLiterals = undefined;
    }
  }

  onBack() {
    this.poNotification.information('Back button clicked (p-back event)');
  }

  restore() {
    this.actions = [];
    this.breadcrumb = { items: [] };
    this.breadcrumbItem = { label: '', link: undefined };
    this.breadcrumbParams = {};
    this.componentsSize = 'medium';
    this.customLiterals = undefined;
    this.helperContent = '';
    this.helperFooterLabel = '';
    this.helperTitle = '';
    this.helperType = 'info';
    this.literals = '';
    this.pageActionsLayout = 'default';
    this.pageHeaderType = 'primary';
    this.showHelper = false;
    this.subtitle = '';
    this.title = 'PO Page Default';
    this.restoreActionForm();
  }

  restoreActionForm() {
    this.action = {
      label: '',
      visible: true,
      disabled: false
    };
  }

  showAction(label: string): void {
    this.poNotification.success(\`Action clicked: \${label}\`);
  }
}
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-page-default-labs"),og(),Wl(23,"hr")),r&2&&(Lp(5),$x("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,qe,i.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,ve],encapsulation:2})}return l})();var ee=(()=>{class l{getColumns(){return [{property:"cities",label:"Cities that most downloaded PO"},{property:"package",label:"Package version"},{property:"downloads",label:"Downloads"}]}getItems(){return [{cities:"S\xE3o Paulo",package:"2.0.0-beta.2",downloads:"2000"},{cities:"Joinville",package:"1.9.1",downloads:"1000"},{cities:"Rio de Janeiro",package:"2.0.0-beta.2",downloads:"250"},{cities:"Santa Catarina",package:"1.9.1",downloads:"100"},{cities:"Curitiba",package:"2.0.0-beta.2",downloads:"1040"},{cities:"Goiania",package:"1.9.1",downloads:"250"},{cities:"Londrina",package:"1.9.1",downloads:"35"},{cities:"Belo Horizonte",package:"1.9.1",downloads:"1100"}]}static \u0275fac=function(r){return new(r||l)};static \u0275prov=I({token:l,factory:l.\u0275fac,providedIn:"root"})}return l})();var Ve=["formShare"],ye=(()=>{class l{poNotification=f(Yp);sampleDashboardService=f(ee);formShare;poModal;columns;email="";isSubscribed=false;items;actions=[{label:"Share",action:this.modalOpen.bind(this),icon:"an an-share"},{label:"GitHub",url:"https://github.com/po-ui/po-angular"},{label:"More info",subItems:[{label:"po-dropdown documentation",url:"https://po-ui.io/documentation/po-dropdown"}]},{label:"Components",url:"/documentation"},{label:"Disable notification",action:this.disableNotification.bind(this),disabled:()=>this.isSubscribed}];breadcrumb={items:[{label:"Home",link:"/"},{label:"Dashboard"}]};helper={title:"Dashboard Info",content:"View <b>real-time metrics</b> of your website. Data is updated <i>every 5 minutes</i>.",type:"info"};cancelAction={action:()=>{this.modalClose();},label:"Cancel"};shareAction={action:()=>{this.share();},label:"Share"};ngOnInit(){this.columns=this.sampleDashboardService.getColumns(),this.items=this.sampleDashboardService.getItems();}modalClose(){this.poModal.close(),this.formShare.reset();}modalOpen(){this.poModal.open();}share(){this.formShare.valid?this.poNotification.success(`Webpage shared successfully to: ${this.email}.`):this.poNotification.error("Email invalid."),this.modalClose();}disableNotification(){this.isSubscribed=true;}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-page-default-dashboard"]],viewQuery:function(r,i){if(r&1&&ql(Ve,7)(Yo,7),r&2){let m;lo(m=uo())&&(i.formShare=m.first),lo(m=uo())&&(i.poModal=m.first);}},standalone:false,features:[we$1([ee])],decls:38,vars:9,consts:[["formShare","ngForm"],["p-title","Dashboard","p-subtitle","Website analytics overview",3,"p-actions","p-breadcrumb","p-helper"],[1,"po-row"],["p-title","Daily visitors",1,"po-md-6","po-lg-4","po-mb-2"],[1,"po-font-subtitle","po-text-center"],[1,"po-text-center","sample-widget-text-subtitle"],["p-title","Most viewed page",1,"po-md-6","po-lg-4","po-mb-2"],["p-title","Website status",1,"po-md-6","po-lg-4","po-mb-2"],["p-title","NPM downloads",1,"po-md-6","po-lg-4","po-mb-2"],["p-title","Devforum PO questions",1,"po-md-6","po-lg-4","po-mb-2"],["p-title","Angular versions supported",1,"po-md-6","po-lg-4","po-mb-2"],[3,"p-columns","p-items","p-hide-table-search"],["p-title","Share webpage",3,"p-primary-action","p-secondary-action"],["name","email","p-clean","","p-label","Type an e-mail for sharing webpage: http://www.po.com.br","p-required","",1,"po-lg-12",3,"ngModelChange","ngModel"]],template:function(r,i){if(r&1){let m=wx();Sl(0,"po-page-default",1)(1,"div",2)(2,"po-widget",3)(3,"div",4),eN(4,"540"),og(),Sl(5,"div",5),eN(6,"www.po.com.br"),og()(),Sl(7,"po-widget",6)(8,"div",4),eN(9,"300 views"),og(),Sl(10,"div",5),eN(11,"https://po-ui.io"),og()(),Sl(12,"po-widget",7)(13,"div",4),eN(14,"Online"),og(),Sl(15,"div",5),eN(16,"28 days"),og()(),Sl(17,"po-widget",8)(18,"div",4),eN(19,"266"),og(),Sl(20,"div",5),eN(21,"@po-ui/ng-components - 1.10.1"),og()(),Sl(22,"po-widget",9)(23,"div",4),eN(24,"800 questions"),og(),Sl(25,"div",5),eN(26,"https://devforum.po.com.br"),og()(),Sl(27,"po-widget",10)(28,"div",4),eN(29,"AngularJS - Angular 6"),og(),Sl(30,"div",5),eN(31,"Angular 6 most downloaded"),og()()(),Wl(32,"po-divider")(33,"po-table",11),og(),Sl(34,"po-modal",12)(35,"form",null,0)(37,"po-email",13),ww("ngModelChange",function(o){return Ky(m),nN(i.email,o)||(i.email=o),Xy(o)}),og(),e0(),og()();}r&2&&(nw("p-actions",i.actions)("p-breadcrumb",i.breadcrumb)("p-helper",i.helper),Lp(33),nw("p-columns",i.columns)("p-items",i.items)("p-hide-table-search",false),Lp(),nw("p-primary-action",i.shareAction)("p-secondary-action",i.cancelAction),Lp(3),Ew("ngModel",i.email),n0());},dependencies:[Z9,G9,q9,_k,mk,mv,Pz,Yo,rNe,k3,fNe],styles:[".sample-widget-text-subtitle[_ngcontent-%COMP%]{font-family:NunitoSans;font-size:14px;text-align:center;color:#9da7a9}"],changeDetection:1})}return l})();var Ne=l=>({"docs-sample-code-tabs":l}),Ce=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-page-default-dashboard-view"]],standalone:false,decls:34,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Page Default - Dashboard"),og(),Sl(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-page-default-dashboard/sample-po-page-default-dashboard.component.html"),og(),Sl(13,"pre",7),eN(14,`<po-page-default
  p-title="Dashboard"
  p-subtitle="Website analytics overview"
  [p-actions]="actions"
  [p-breadcrumb]="breadcrumb"
  [p-helper]="helper"
>
  <div class="po-row">
    <po-widget class="po-md-6 po-lg-4 po-mb-2" p-title="Daily visitors">
      <div class="po-font-subtitle po-text-center">540</div>
      <div class="po-text-center sample-widget-text-subtitle">www.po.com.br</div>
    </po-widget>

    <po-widget class="po-md-6 po-lg-4 po-mb-2" p-title="Most viewed page">
      <div class="po-font-subtitle po-text-center">300 views</div>
      <div class="po-text-center sample-widget-text-subtitle">https://po-ui.io</div>
    </po-widget>

    <po-widget class="po-md-6 po-lg-4 po-mb-2" p-title="Website status">
      <div class="po-font-subtitle po-text-center">Online</div>
      <div class="po-text-center sample-widget-text-subtitle">28 days</div>
    </po-widget>

    <po-widget class="po-md-6 po-lg-4 po-mb-2" p-title="NPM downloads">
      <div class="po-font-subtitle po-text-center">266</div>
      <div class="po-text-center sample-widget-text-subtitle">&#64;po-ui/ng-components - 1.10.1</div>
    </po-widget>

    <po-widget class="po-md-6 po-lg-4 po-mb-2" p-title="Devforum PO questions">
      <div class="po-font-subtitle po-text-center">800 questions</div>
      <div class="po-text-center sample-widget-text-subtitle">https://devforum.po.com.br</div>
    </po-widget>

    <po-widget class="po-md-6 po-lg-4 po-mb-2" p-title="Angular versions supported">
      <div class="po-font-subtitle po-text-center">AngularJS - Angular 6</div>
      <div class="po-text-center sample-widget-text-subtitle">Angular 6 most downloaded</div>
    </po-widget>
  </div>

  <po-divider />

  <po-table [p-columns]="columns" [p-items]="items" [p-hide-table-search]="false"> </po-table>
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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-page-default-dashboard/sample-po-page-default-dashboard.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, ViewChild, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
import { NgForm } from '@angular/forms';

import {
  PoBreadcrumb,
  PoHelperOptions,
  PoModalAction,
  PoModalComponent,
  PoNotificationService,
  PoPageAction,
  PoTableColumn
} from '@po-ui/ng-components';

import { SampleDashboardService } from './sample-po-page-default-dashboard.service';

@Component({
  selector: 'sample-po-page-default-dashboard',
  templateUrl: './sample-po-page-default-dashboard.component.html',
  styleUrls: ['./sample-po-page-default-dashboard.component.css'],
  providers: [SampleDashboardService],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageDefaultDashboardComponent implements OnInit {
  private poNotification = inject(PoNotificationService);
  private sampleDashboardService = inject(SampleDashboardService);

  @ViewChild('formShare', { static: true }) formShare!: NgForm;
  @ViewChild(PoModalComponent, { static: true }) poModal!: PoModalComponent;

  columns!: Array<PoTableColumn>;
  email: string = '';
  isSubscribed: boolean = false;
  items!: Array<object>;

  public readonly actions: Array<PoPageAction> = [
    { label: 'Share', action: this.modalOpen.bind(this), icon: 'an an-share' },
    { label: 'GitHub', url: 'https://github.com/po-ui/po-angular' },
    {
      label: 'More info',
      subItems: [
        {
          label: 'po-dropdown documentation',
          url: 'https://po-ui.io/documentation/po-dropdown'
        }
      ]
    },
    { label: 'Components', url: '/documentation' },
    {
      label: 'Disable notification',
      action: this.disableNotification.bind(this),
      disabled: () => this.isSubscribed
    }
  ];

  public readonly breadcrumb: PoBreadcrumb = {
    items: [{ label: 'Home', link: '/' }, { label: 'Dashboard' }]
  };

  public readonly helper: PoHelperOptions = {
    title: 'Dashboard Info',
    content: 'View <b>real-time metrics</b> of your website. Data is updated <i>every 5 minutes</i>.',
    type: 'info'
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

  ngOnInit(): void {
    this.columns = this.sampleDashboardService.getColumns();
    this.items = this.sampleDashboardService.getItems();
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
      this.poNotification.error(\`Email invalid.\`);
    }
    this.modalClose();
  }

  private disableNotification() {
    this.isSubscribed = true;
  }
}
`),og(),Sl(21,"label",6),eN(22,"sample-po-page-default-dashboard/sample-po-page-default-dashboard.service.ts"),og(),Sl(23,"pre",9),eN(24,`import { Injectable } from '@angular/core';

import { PoTableColumn } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class SampleDashboardService {
  getColumns(): Array<PoTableColumn> {
    return [
      { property: 'cities', label: 'Cities that most downloaded PO' },
      { property: 'package', label: 'Package version' },
      { property: 'downloads', label: 'Downloads' }
    ];
  }

  getItems() {
    return [
      { cities: 'S\xE3o Paulo', package: '2.0.0-beta.2', downloads: '2000' },
      { cities: 'Joinville', package: '1.9.1', downloads: '1000' },
      { cities: 'Rio de Janeiro', package: '2.0.0-beta.2', downloads: '250' },
      { cities: 'Santa Catarina', package: '1.9.1', downloads: '100' },
      { cities: 'Curitiba', package: '2.0.0-beta.2', downloads: '1040' },
      { cities: 'Goiania', package: '1.9.1', downloads: '250' },
      { cities: 'Londrina', package: '1.9.1', downloads: '35' },
      { cities: 'Belo Horizonte', package: '1.9.1', downloads: '1100' }
    ];
  }
}
`),og()()(),Sl(25,"po-tab",10)(26,"div")(27,"label",6),eN(28,"sample-po-page-default-dashboard/sample-po-page-default-dashboard.component.css"),og(),Sl(29,"pre",11),eN(30,`.sample-widget-text-subtitle {
  font-family: NunitoSans;
  font-size: 14px;
  text-align: center;
  color: #9da7a9;
}
`),og()()()()(),Sl(31,"div",12),Wl(32,"sample-po-page-default-dashboard"),og(),Wl(33,"hr")),r&2&&(Lp(5),$x("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,Ne,i.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,ye],encapsulation:2})}return l})();var we=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-page-default-doc"]],standalone:false,decls:1308,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","Array<PoPageAction>"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","PoBreadcrumb"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","PoHelperOptions"],[1,"language-html"],["pan","",1,"docs-api-property-type","PoPageDefaultLiterals"],[1,"language-typescript"],["href","/documentation/po-i18n"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["href","/guides/getting-started"],["pan","",1,"docs-api-property-type","Array<PoBreadcrumbItem>"],["pan","",1,"docs-api-property-type","object"],["pan","",1,"docs-api-property-type","{","label:","string;","action:","Function;","}"],["pan","",1,"docs-api-property-type","'info'"],["pan","",1,"docs-api-property-type","'help'"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","Array<PoPopupAction>"]],template:function(r,i){r&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),eN(3,"import { PoPageModule } from '@po-ui/ng-components';"),og()(),Sl(4,"div",2)(5,"p"),eN(6,"M\xF3dulo respons\xE1vel pelos componentes de estrutura de p\xE1gina: "),Sl(7,"code"),eN(8,"po-page-default"),og(),eN(9,", "),Sl(10,"code"),eN(11,"po-page-detail"),og(),eN(12,`,
`),Sl(13,"code"),eN(14,"po-page-edit"),og(),eN(15,", "),Sl(16,"code"),eN(17,"po-page-list"),og(),eN(18," e "),Sl(19,"code"),eN(20,"po-page-slide"),og(),eN(21,"."),og()(),Sl(22,"h3",3),eN(23,"Componente"),og(),Sl(24,"h4",4)(25,"code",5),eN(26,"PoPageDefaultComponent"),og()(),Sl(27,"div",2)(28,"p"),eN(29,"O "),Sl(30,"code"),eN(31,"po-page-default"),og(),eN(32," \xE9 utilizado como container principal para telas sem um template definido."),og(),Sl(33,"p"),eN(34,"Oferece suporte a cabe\xE7alhos din\xE2micos via "),Sl(35,"code"),eN(36,"p-page-header-type"),og(),eN(37,", navega\xE7\xE3o por "),Sl(38,"em"),eN(39,"breadcrumb"),og(),eN(40,`
e gerenciamento de a\xE7\xF5es com agrupamento responsivo via `),Sl(41,"code"),eN(42,"p-page-actions-layout"),og(),eN(43,"."),og(),Sl(44,"h4"),eN(45,"Tokens customiz\xE1veis"),og(),Sl(46,"blockquote")(47,"p"),eN(48,"Para maiores informa\xE7\xF5es, acesse o guia "),Sl(49,"a",6),eN(50,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),eN(51,"."),og()(),Sl(52,"table")(53,"thead")(54,"tr")(55,"th"),eN(56,"Propriedade"),og(),Sl(57,"th"),eN(58,"Descri\xE7\xE3o"),og(),Sl(59,"th"),eN(60,"Valor Padr\xE3o"),og()()(),Sl(61,"tbody")(62,"tr")(63,"td")(64,"strong"),eN(65,"P\xE1gina (po-page-default)"),og()(),Wl(66,"td")(67,"td"),og(),Sl(68,"tr")(69,"td")(70,"code"),eN(71,"--background"),og()(),Sl(72,"td"),eN(73,"Background da p\xE1gina (header e body)"),og(),Sl(74,"td")(75,"code"),eN(76,"var(--color-page-background-color-page)"),og()()(),Sl(77,"tr")(78,"td")(79,"strong"),eN(80,"Header (po-page-header)"),og()(),Wl(81,"td")(82,"td"),og(),Sl(83,"tr")(84,"td")(85,"code"),eN(86,"--padding"),og()(),Sl(87,"td"),eN(88,"Espa\xE7amento do header"),og(),Sl(89,"td")(90,"code"),eN(91,"var(--spacing-xs) var(--spacing-md)"),og()()(),Sl(92,"tr")(93,"td")(94,"code"),eN(95,"--gap"),og()(),Sl(96,"td"),eN(97,"Espa\xE7amento entre os breadcrumbs e o t\xEDtulo"),og(),Sl(98,"td")(99,"code"),eN(100,"var(--spacing-md)"),og()()(),Sl(101,"tr")(102,"td")(103,"code"),eN(104,"--gap-actions"),og()(),Sl(105,"td"),eN(106,"Espa\xE7amento entre as a\xE7\xF5es"),og(),Sl(107,"td")(108,"code"),eN(109,"var(--spacing-xs)"),og()()(),Sl(110,"tr")(111,"td")(112,"strong"),eN(113,"Header (po-page-header .po-page-header-title)"),og()(),Wl(114,"td")(115,"td"),og(),Sl(116,"tr")(117,"td")(118,"code"),eN(119,"--font-family"),og()(),Sl(120,"td"),eN(121,"Fam\xEDlia tipogr\xE1fica do t\xEDtulo"),og(),Sl(122,"td")(123,"code"),eN(124,"var(--font-family-theme)"),og()()(),Sl(125,"tr")(126,"td")(127,"strong"),eN(128,"Content (po-page-content)"),og()(),Wl(129,"td")(130,"td"),og(),Sl(131,"tr")(132,"td")(133,"code"),eN(134,"--padding-content"),og()(),Sl(135,"td"),eN(136,"Espa\xE7amento do conte\xFAdo"),og(),Sl(137,"td")(138,"code"),eN(139,"var(--spacing-xs) var(--spacing-sm)"),og()()()()()(),Sl(140,"div",7)(141,"h4",8),eN(142,"Seletor"),og(),Sl(143,"pre",9),eN(144,`<po-page-default
    p-actions="Array<PoPageAction>"
    (p-back)="EventEmitter"
    p-breadcrumb="PoBreadcrumb"
    p-components-size="string"
    p-helper="PoHelperOptions | string"
    p-literals="PoPageDefaultLiterals"
    p-page-actions-layout="string"
    p-page-header-type="string"
    p-subtitle="string"
    p-title="string" >
</po-page-default>
`),og()(),Sl(145,"h4",10),eN(146,"Propriedades"),og(),Sl(147,"table",11)(148,"tr",12)(149,"th",13),eN(150,"Nome"),og(),Sl(151,"th",13),eN(152,"Tipo"),og(),Sl(153,"th",13),eN(154,"Padr\xE3o"),og(),Sl(155,"th",13),eN(156,"Descri\xE7\xE3o"),og()(),Sl(157,"tr",14)(158,"td",15)(159,"div",16)(160,"span",17),eN(161," p-actions"),Wl(162,"br"),og()()(),Sl(163,"td",18)(164,"code",19),eN(165,"Array<PoPageAction>"),og()(),Sl(166,"td",20)(167,"p")(168,"code"),eN(169,"[]"),og()()(),Sl(170,"td",21)(171,"em")(172,"strong"),eN(173,"(opcional)"),og()(),Sl(174,"p"),eN(175,"Define a lista de a\xE7\xF5es que ser\xE3o exibidas no cabe\xE7alho da p\xE1gina."),og(),Sl(176,"p"),eN(177,"Recebe um array de objetos que implementam a interface "),Sl(178,"code"),eN(179,"PoPageAction"),og(),eN(180,"."),og(),Sl(181,"blockquote")(182,"p"),eN(183,"O comportamento de exibi\xE7\xE3o pode ser customizado atrav\xE9s da propriedade "),Sl(184,"code"),eN(185,"p-page-actions-layout"),og(),eN(186,"."),og()()()(),Sl(187,"tr",14)(188,"td",15)(189,"div",22)(190,"span",23),eN(191," (p-back)"),Wl(192,"br"),og()()(),Sl(193,"td",18)(194,"code",24),eN(195,"EventEmitter"),og()(),Sl(196,"td",20),eN(197,"-"),og(),Sl(198,"td",21)(199,"em")(200,"strong"),eN(201,"(opcional)"),og()(),Sl(202,"p"),eN(203,"Evento disparado ao clicar no bot\xE3o voltar exibido no cabe\xE7alho."),og(),Sl(204,"blockquote")(205,"p"),eN(206,"Bot\xE3o exibido apenas quando a propriedade "),Sl(207,"code"),eN(208,"p-page-header-type"),og(),eN(209," est\xE1 configurada como "),Sl(210,"code"),eN(211,"secondary"),og(),eN(212,"."),og()()()(),Sl(213,"tr",14)(214,"td",15)(215,"div",16)(216,"span",17),eN(217," p-breadcrumb"),Wl(218,"br"),og()()(),Sl(219,"td",18)(220,"code",25),eN(221,"PoBreadcrumb"),og()(),Sl(222,"td",20),eN(223,"-"),og(),Sl(224,"td",21)(225,"em")(226,"strong"),eN(227,"(opcional)"),og()(),Sl(228,"p"),eN(229,"Define o sistema de navega\xE7\xE3o que indica o caminho da p\xE1gina atual na hierarquia da aplica\xE7\xE3o."),og(),Sl(230,"p"),eN(231,"Recebe um objeto que implementa a interface "),Sl(232,"code"),eN(233,"PoBreadcrumb"),og(),eN(234,"."),og(),Sl(235,"blockquote")(236,"p"),eN(237,"Compat\xEDvel com o cabe\xE7alho ("),Sl(238,"code"),eN(239,"p-page-header-type"),og(),eN(240,") do tipo "),Sl(241,"code"),eN(242,"primary"),og(),eN(243,"."),og()()()(),Sl(244,"tr",14)(245,"td",15)(246,"div",16)(247,"span",17),eN(248," p-components-size"),Wl(249,"br"),og()()(),Sl(250,"td",18)(251,"code",26),eN(252,"string"),og()(),Sl(253,"td",20)(254,"p")(255,"code"),eN(256,"medium"),og()()(),Sl(257,"td",21)(258,"em")(259,"strong"),eN(260,"(opcional)"),og()(),Sl(261,"p"),eN(262,"Define o tamanho dos componentes de formul\xE1rio no template:"),og(),Sl(263,"ul")(264,"li")(265,"code"),eN(266,"small"),og(),eN(267,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),og(),Sl(268,"li")(269,"code"),eN(270,"medium"),og(),eN(271,": aplica a medida medium de cada componente."),og()(),Sl(272,"blockquote")(273,"p"),eN(274,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Sl(275,"code"),eN(276,"medium"),og(),eN(277,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Sl(278,"a",27),eN(279,"po-theme"),og(),eN(280,"."),og()()()(),Sl(281,"tr",14)(282,"td",15)(283,"div",16)(284,"span",17),eN(285," p-helper"),Wl(286,"br"),og()()(),Sl(287,"td",18)(288,"code",28),eN(289,"PoHelperOptions "),og(),Sl(290,"code",26),eN(291," string"),og()(),Sl(292,"td",20)(293,"p")(294,"code"),eN(295,"info"),og()()(),Sl(296,"td",21)(297,"em")(298,"strong"),eN(299,"(opcional)"),og()(),Sl(300,"p"),eN(301,"Define o conte\xFAdo do po-helper informativo exibido ao lado do subt\xEDtulo da p\xE1gina."),og(),Sl(302,"p"),eN(303,"Quando n\xE3o houver subt\xEDtulo ("),Sl(304,"code"),eN(305,"p-subtitle"),og(),eN(306,"), o po-helper ser\xE1 exibido logo abaixo do t\xEDtulo."),og(),Sl(307,"p"),eN(308,"Aceita uma string simples (exibida como conte\xFAdo) ou um objeto do tipo "),Sl(309,"code"),eN(310,"PoHelperOptions"),og(),eN(311,`
para configura\xE7\xE3o avan\xE7ada (t\xEDtulo, conte\xFAdo, tipo, a\xE7\xF5es).`),og(),Sl(312,"p"),eN(313,"Exemplo de uso:"),og(),Sl(314,"pre")(315,"code",29),eN(316,`<po-page-default
  p-title="Cadastro"
  p-subtitle="Preencha os dados"
  [p-helper]="{ title: 'Ajuda', content: 'Informa\xE7\xF5es sobre o cadastro' }"
></po-page-default>
`),og()()()(),Sl(317,"tr",14)(318,"td",15)(319,"div",16)(320,"span",17),eN(321," p-literals"),Wl(322,"br"),og()()(),Sl(323,"td",18)(324,"code",30),eN(325,"PoPageDefaultLiterals"),og()(),Sl(326,"td",20),eN(327,"-"),og(),Sl(328,"td",21)(329,"em")(330,"strong"),eN(331,"(opcional)"),og()(),Sl(332,"p"),eN(333,"Permite a customiza\xE7\xE3o das literais utilizadas no componente."),og(),Sl(334,"p"),eN(335,"Para customizar, basta passar um objeto parcial ou completo que implemente a interface "),Sl(336,"code"),eN(337,"PoPageDefaultLiterals"),og(),eN(338,"."),og(),Sl(339,"p"),eN(340,"Exemplo de uso:"),og(),Sl(341,"pre")(342,"code",29),eN(343,`<po-page-default [p-literals]="customLiterals"></po-page-default>
`),og()(),Sl(344,"pre")(345,"code",31),eN(346,`const customLiterals: PoPageDefaultLiterals = {
  otherActions: 'Mais op\xE7\xF5es'
};
`),og()(),Sl(347,"blockquote")(348,"p"),eN(349,"O valor padr\xE3o ser\xE1 traduzido de acordo com o idioma configurado no "),Sl(350,"a",32)(351,"code"),eN(352,"PoI18nService"),og()(),eN(353," ou navegador."),og()()()(),Sl(354,"tr",14)(355,"td",15)(356,"div",16)(357,"span",17),eN(358," p-page-actions-layout"),Wl(359,"br"),og()()(),Sl(360,"td",18)(361,"code",26),eN(362,"string"),og()(),Sl(363,"td",20)(364,"p")(365,"code"),eN(366,"default"),og()()(),Sl(367,"td",21)(368,"em")(369,"strong"),eN(370,"(opcional)"),og()(),Sl(371,"p"),eN(372,"Define o layout de exibi\xE7\xE3o das a\xE7\xF5es no cabe\xE7alho."),og(),Sl(373,"p"),eN(374,"Aceita valores do enum "),Sl(375,"code"),eN(376,"PoPageActionsLayout"),og(),eN(377,"."),og(),Sl(378,"blockquote")(379,"p"),eN(380,"Em telas reduzidas (< 480px) as a\xE7\xF5es fora do "),Sl(381,"em"),eN(382,"dropdown"),og(),eN(383," que possuam a propriedade "),Sl(384,"code"),eN(385,"PoPageAction.icon"),og(),eN(386,` definida
exibir\xE3o apenas o \xEDcone.`),og()()()(),Sl(387,"tr",14)(388,"td",15)(389,"div",16)(390,"span",17),eN(391," p-page-header-type"),Wl(392,"br"),og()()(),Sl(393,"td",18)(394,"code",26),eN(395,"string"),og()(),Sl(396,"td",20)(397,"p")(398,"code"),eN(399,"primary"),og()()(),Sl(400,"td",21)(401,"em")(402,"strong"),eN(403,"(opcional)"),og()(),Sl(404,"p"),eN(405,"Define o tipo de cabe\xE7alho da p\xE1gina."),og(),Sl(406,"p"),eN(407,"Aceita valores do enum "),Sl(408,"code"),eN(409,"PoPageHeaderType"),og(),eN(410,"."),og()()(),Sl(411,"tr",14)(412,"td",15)(413,"div",16)(414,"span",17),eN(415," p-subtitle"),Wl(416,"br"),og()()(),Sl(417,"td",18)(418,"code",26),eN(419,"string"),og()(),Sl(420,"td",20),eN(421,"-"),og(),Sl(422,"td",21)(423,"em")(424,"strong"),eN(425,"(opcional)"),og()(),Sl(426,"p"),eN(427,"Define um texto de apoio ou informa\xE7\xF5es adicionais logo abaixo do t\xEDtulo principal."),og(),Sl(428,"p"),eN(429,"Suporta formata\xE7\xE3o b\xE1sica com as tags "),Sl(430,"code"),eN(431,"<b>"),og(),eN(432," (negrito), "),Sl(433,"code"),eN(434,"<strong>"),og(),eN(435," (negrito), "),Sl(436,"code"),eN(437,"<i>"),og(),eN(438," (it\xE1lico), "),Sl(439,"code"),eN(440,"<em>"),og(),eN(441,` (it\xE1lico) e
`),Sl(442,"code"),eN(443,"<u>"),og(),eN(444," (sublinhado)."),og(),Sl(445,"p"),eN(446,"Exemplo:"),og(),Sl(447,"pre")(448,"code",31),eN(449,`subtitle = 'Texto <b>importante</b> com <em>destaque</em> e <u>sublinhado</u>';
`),og()(),Sl(450,"blockquote")(451,"p"),eN(452,"Requer que "),Sl(453,"code"),eN(454,"p-title"),og(),eN(455," esteja definido."),og()()()(),Sl(456,"tr",14)(457,"td",15)(458,"div",16)(459,"span",17),eN(460," p-title"),Wl(461,"br"),og()()(),Sl(462,"td",18)(463,"code",26),eN(464,"string"),og()(),Sl(465,"td",20),eN(466,"-"),og(),Sl(467,"td",21)(468,"em")(469,"strong"),eN(470,"(opcional)"),og()(),Sl(471,"p"),eN(472,"Define o t\xEDtulo principal da p\xE1gina."),og()()()(),Sl(473,"h3"),eN(474,"Interfaces"),og(),Sl(475,"h4",33)(476,"code",5),eN(477,"PoBreadcrumbItem"),og()(),Sl(478,"div",2)(479,"p"),eN(480,"Interface que define cada item do componente "),Sl(481,"strong"),eN(482,"po-breadcrumb"),og(),eN(483,"."),og()(),Sl(484,"h4",10),eN(485,"Propriedades"),og(),Sl(486,"table",11)(487,"tr",12)(488,"th",13),eN(489,"Nome"),og(),Sl(490,"th",13),eN(491,"Tipo"),og(),Sl(492,"th",13),eN(493,"Descri\xE7\xE3o"),og()(),Sl(494,"tr",14)(495,"td",15)(496,"div",16)(497,"span",17),eN(498," action"),Wl(499,"br"),og()()(),Sl(500,"td",18)(501,"code",34),eN(502,"Function"),og()(),Sl(503,"td",21)(504,"em")(505,"strong"),eN(506,"(opcional)"),og()(),Sl(507,"p"),eN(508,"A\xE7\xE3o executada ao clicar no item."),og(),Sl(509,"blockquote")(510,"p"),eN(511,"A fun\xE7\xE3o atribu\xEDda a esta propriedade receber\xE1 o "),Sl(512,"em"),eN(513,"label"),og(),eN(514," do item como par\xE2metro para execu\xE7\xE3o."),og()()()(),Sl(515,"tr",14)(516,"td",15)(517,"div",16)(518,"span",17),eN(519," label"),Wl(520,"br"),og()()(),Sl(521,"td",18)(522,"code",26),eN(523,"string"),og()(),Sl(524,"td",21)(525,"p"),eN(526,"R\xF3tulo do item."),og()()(),Sl(527,"tr",14)(528,"td",15)(529,"div",16)(530,"span",17),eN(531," link"),Wl(532,"br"),og()()(),Sl(533,"td",18)(534,"code",26),eN(535,"string"),og()(),Sl(536,"td",21)(537,"em")(538,"strong"),eN(539,"(opcional)"),og()(),Sl(540,"p"),eN(541,"Url do item."),og(),Sl(542,"blockquote")(543,"p"),eN(544,"Caso o item tamb\xE9m contenha uma "),Sl(545,"em"),eN(546,"action"),og(),eN(547," definida, a prefer\xEAncia de execu\xE7\xE3o ser\xE1 do "),Sl(548,"em"),eN(549,"link"),og(),eN(550,"."),og()(),Sl(551,"blockquote")(552,"p"),eN(553,`Para o correto funcionamento, \xE9 necess\xE1rio que haja uma rota referenciando seu valor.
`),Sl(554,"strong")(555,"a",35),eN(556,"Veja um exemplo de como criar rotas aqui"),og()(),eN(557,"."),og()(),Sl(558,"blockquote")(559,"p"),eN(560,"Esta propriedade \xE9 necess\xE1ria para que a propriedade "),Sl(561,"code"),eN(562,"p-favorite-service"),og(),eN(563," consiga favoritar ou desfavoritar."),og()()()()(),Sl(564,"h4",33)(565,"code",5),eN(566,"PoBreadcrumb"),og()(),Sl(567,"div",2)(568,"p"),eN(569,"Interface que define o "),Sl(570,"code"),eN(571,"po-breadcrumb"),og(),eN(572,"."),og()(),Sl(573,"h4",10),eN(574,"Propriedades"),og(),Sl(575,"table",11)(576,"tr",12)(577,"th",13),eN(578,"Nome"),og(),Sl(579,"th",13),eN(580,"Tipo"),og(),Sl(581,"th",13),eN(582,"Descri\xE7\xE3o"),og()(),Sl(583,"tr",14)(584,"td",15)(585,"div",16)(586,"span",17),eN(587," favorite"),Wl(588,"br"),og()()(),Sl(589,"td",18)(590,"code",26),eN(591,"string"),og()(),Sl(592,"td",21)(593,"em")(594,"strong"),eN(595,"(opcional)"),og()(),Sl(596,"p"),eN(597,"Permite definir uma URL para favoritar ou desfavoritar."),og(),Sl(598,"blockquote")(599,"p"),eN(600,"Para maiores informa\xE7\xF5es verificar a propriedade "),Sl(601,"code"),eN(602,"p-favorite-service"),og(),eN(603," do componente "),Sl(604,"code"),eN(605,"po-breadcrumb"),og(),eN(606,"."),og()()()(),Sl(607,"tr",14)(608,"td",15)(609,"div",16)(610,"span",17),eN(611," items"),Wl(612,"br"),og()()(),Sl(613,"td",18)(614,"code",36),eN(615,"Array<PoBreadcrumbItem>"),og()(),Sl(616,"td",21)(617,"p"),eN(618,"Lista de itens do "),Sl(619,"em"),eN(620,"breadcrumb"),og(),eN(621,"."),og(),Sl(622,"p")(623,"strong"),eN(624,"Exemplo:"),og()(),Sl(625,"pre")(626,"code"),eN(627,`{ label: 'Po Portal', link: 'portal' }
`),og()()()(),Sl(628,"tr",14)(629,"td",15)(630,"div",16)(631,"span",17),eN(632," params"),Wl(633,"br"),og()()(),Sl(634,"td",18)(635,"code",37),eN(636,"object"),og()(),Sl(637,"td",21)(638,"em")(639,"strong"),eN(640,"(opcional)"),og()(),Sl(641,"p"),eN(642,"Objeto que possibilita o envio de par\xE2metros adicionais \xE0 requisi\xE7\xE3o."),og()()()(),Sl(643,"h4",33)(644,"code",5),eN(645,"PoHelperOptions"),og()(),Sl(646,"div",2)(647,"p"),eN(648,"Interface para configura\xE7\xE3o das op\xE7\xF5es de ajuda ("),Sl(649,"em"),eN(650,"helper"),og(),eN(651,")."),og()(),Sl(652,"h4",10),eN(653,"Propriedades"),og(),Sl(654,"table",11)(655,"tr",12)(656,"th",13),eN(657,"Nome"),og(),Sl(658,"th",13),eN(659,"Tipo"),og(),Sl(660,"th",13),eN(661,"Descri\xE7\xE3o"),og()(),Sl(662,"tr",14)(663,"td",15)(664,"div",16)(665,"span",17),eN(666," content"),Wl(667,"br"),og()()(),Sl(668,"td",18)(669,"code",26),eN(670,"string"),og()(),Sl(671,"td",21)(672,"em")(673,"strong"),eN(674,"(opcional)"),og()(),Sl(675,"p"),eN(676,"Texto explicativo exibido no popover."),og(),Sl(677,"p"),eN(678,"Suporta formata\xE7\xE3o b\xE1sica com as tags "),Sl(679,"code"),eN(680,"<b>"),og(),eN(681," (negrito), "),Sl(682,"code"),eN(683,"<strong>"),og(),eN(684," (negrito), "),Sl(685,"code"),eN(686,"<i>"),og(),eN(687," (it\xE1lico), "),Sl(688,"code"),eN(689,"<em>"),og(),eN(690,` (it\xE1lico) e
`),Sl(691,"code"),eN(692,"<u>"),og(),eN(693," (sublinhado)."),og(),Sl(694,"p"),eN(695,"Exemplo:"),og(),Sl(696,"pre")(697,"code",31),eN(698,`content: 'Texto <b>importante</b> com <em>destaque</em> e <u>sublinhado</u>'
`),og()()()(),Sl(699,"tr",14)(700,"td",15)(701,"div",16)(702,"span",17),eN(703," eventOnClick"),Wl(704,"br"),og()()(),Sl(705,"td",18)(706,"code",34),eN(707,"Function"),og()(),Sl(708,"td",21)(709,"em")(710,"strong"),eN(711,"(opcional)"),og()(),Sl(712,"p"),eN(713,"Evento disparado ao clicar no \xEDcone do helper."),og(),Sl(714,"p"),eN(715,"O conte\xFAdo do popover n\xE3o \xE9 exibido quando esta propriedade \xE9 definida, para controle total do evento pelo desenvolvedor."),og(),Sl(716,"p"),eN(717,"Pode ser uma fun\xE7\xE3o ou um "),Sl(718,"code"),eN(719,"EventEmitter"),og(),eN(720,"."),og(),Sl(721,"p"),eN(722,"Exemplo:"),og(),Sl(723,"pre")(724,"code"),eN(725,`eventOnClick: (event) => {
 alert('Clicou no helper');
 console.log(event);
}
`),og()()()(),Sl(726,"tr",14)(727,"td",15)(728,"div",16)(729,"span",17),eN(730," footerAction"),Wl(731,"br"),og()()(),Sl(732,"td",18)(733,"code",38),eN(734,`{ label: string; action: Function;
}`),og()(),Sl(735,"td",21)(736,"em")(737,"strong"),eN(738,"(opcional)"),og()(),Sl(739,"p"),eN(740,`A\xE7\xE3o customizada exibida no rodap\xE9 do popover.
Compat\xEDvel apenas com a propriedade type com o valor `),Sl(741,"code"),eN(742,"help"),og(),eN(743," e desconsiderada quando o type for "),Sl(744,"code"),eN(745,"info"),og(),eN(746,"."),og(),Sl(747,"p"),eN(748,"Deve ser um objeto com as propriedades:"),og(),Sl(749,"ul")(750,"li")(751,"code"),eN(752,"label"),og(),eN(753,": Texto do bot\xE3o."),og(),Sl(754,"li")(755,"code"),eN(756,"action"),og(),eN(757,": Fun\xE7\xE3o executada ao clicar no bot\xE3o."),og()(),Sl(758,"p"),eN(759,"Exemplo:"),og(),Sl(760,"pre")(761,"code",31),eN(762,`{ label: 'Saiba mais', action: this.footerAction.bind(this)) }
`),og()()()(),Sl(763,"tr",14)(764,"td",15)(765,"div",16)(766,"span",17),eN(767," title"),Wl(768,"br"),og()()(),Sl(769,"td",18)(770,"code",26),eN(771,"string"),og()(),Sl(772,"td",21)(773,"em")(774,"strong"),eN(775,"(opcional)"),og()(),Sl(776,"p"),eN(777,"T\xEDtulo do helper exibido no popover."),og()()(),Sl(778,"tr",14)(779,"td",15)(780,"div",16)(781,"span",17),eN(782," type"),Wl(783,"br"),og()()(),Sl(784,"td",18)(785,"code",39),eN(786,"'info' "),og(),Sl(787,"code",40),eN(788," 'help'"),og()(),Sl(789,"td",21)(790,"em")(791,"strong"),eN(792,"(opcional)"),og()(),Sl(793,"p"),eN(794,"Tipo do \xEDcone exibido: "),Sl(795,"code"),eN(796,"info"),og(),eN(797," ou "),Sl(798,"code"),eN(799,"help"),og(),eN(800,"."),og(),Sl(801,"p"),eN(802,"Quando o valor \xE9 "),Sl(803,"code"),eN(804,"info"),og(),eN(805,", o popover exibe apenas informa\xE7\xF5es e n\xE3o permite a\xE7\xF5es customizadas."),og(),Sl(806,"p"),eN(807,"Quando o valor \xE9 "),Sl(808,"code"),eN(809,"help"),og(),eN(810,", o popover pode exibir a\xE7\xF5es customizadas no rodap\xE9."),og()()()(),Sl(811,"h4",33)(812,"code",5),eN(813,"PoPageAction"),og()(),Sl(814,"div",2)(815,"p"),eN(816,"Interface para as a\xE7\xF5es dos componentes "),Sl(817,"code"),eN(818,"po-page-default"),og(),eN(819," e "),Sl(820,"code"),eN(821,"po-page-list"),og(),eN(822,"."),og(),Sl(823,"p"),eN(824,"As a\xE7\xF5es podem ser exibidas como bot\xF5es no cabe\xE7alho ou agrupadas em um "),Sl(825,"em"),eN(826,"dropdown"),og(),eN(827,`,
conforme o `),Sl(828,"code"),eN(829,"PoPageActionsLayout"),og(),eN(830," e o tamanho da tela."),og(),Sl(831,"blockquote")(832,"p"),eN(833,"As propriedades "),Sl(834,"code"),eN(835,"separator"),og(),eN(836,", "),Sl(837,"code"),eN(838,"selected"),og(),eN(839," e "),Sl(840,"code"),eN(841,"subItems"),og(),eN(842,` possuem efeito apenas quando
a a\xE7\xE3o \xE9 exibida dentro do `),Sl(843,"em"),eN(844,"dropdown"),og(),eN(845,"."),og()()(),Sl(846,"h4",10),eN(847,"Propriedades"),og(),Sl(848,"table",11)(849,"tr",12)(850,"th",13),eN(851,"Nome"),og(),Sl(852,"th",13),eN(853,"Tipo"),og(),Sl(854,"th",13),eN(855,"Descri\xE7\xE3o"),og()(),Sl(856,"tr",14)(857,"td",15)(858,"div",16)(859,"span",17),eN(860," action"),Wl(861,"br"),og()()(),Sl(862,"td",18)(863,"code",34),eN(864,"Function"),og()(),Sl(865,"td",21)(866,"em")(867,"strong"),eN(868,"(opcional)"),og()(),Sl(869,"p"),eN(870,"A\xE7\xE3o que ser\xE1 executada, sendo poss\xEDvel passar o nome ou a refer\xEAncia da fun\xE7\xE3o."),og(),Sl(871,"p"),eN(872,"A action tamb\xE9m pode ser executada para o agrupador de subitens quando a a\xE7\xE3o possuir "),Sl(873,"code"),eN(874,"subItems"),og(),eN(875,"."),og(),Sl(876,"blockquote")(877,"p"),eN(878,"Para que a fun\xE7\xE3o seja executada no contexto do componente, utilize "),Sl(879,"em"),eN(880,"bind"),og(),eN(881,`:
`),Sl(882,"code"),eN(883,"action: this.myFunction.bind(this)"),og()()()()(),Sl(884,"tr",14)(885,"td",15)(886,"div",16)(887,"span",17),eN(888," disabled"),Wl(889,"br"),og()()(),Sl(890,"td",18)(891,"code",41),eN(892,"boolean "),og(),Sl(893,"code",34),eN(894," Function"),og()(),Sl(895,"td",21)(896,"em")(897,"strong"),eN(898,"(opcional)"),og()(),Sl(899,"p"),eN(900,"Desabilita a a\xE7\xE3o. Aceita um valor booleano ou uma fun\xE7\xE3o que retorna booleano."),og()()(),Sl(901,"tr",14)(902,"td",15)(903,"div",16)(904,"span",17),eN(905," icon"),Wl(906,"br"),og()()(),Sl(907,"td",18)(908,"code",26),eN(909,"string "),og(),Sl(910,"code",42),eN(911," TemplateRef<void>"),og()(),Sl(912,"td",21)(913,"em")(914,"strong"),eN(915,"(opcional)"),og()(),Sl(916,"p"),eN(917,"\xCDcone exibido ao lado esquerdo do r\xF3tulo."),og(),Sl(918,"p"),eN(919,"Aceita \xEDcones da "),Sl(920,"a",43),eN(921,"Biblioteca de \xEDcones"),og(),eN(922,`, fontes externas (ex: Font Awesome)
ou um `),Sl(923,"code"),eN(924,"TemplateRef"),og(),eN(925," para \xEDcones customizados."),og(),Sl(926,"pre")(927,"code"),eN(928,`{ label: 'A\xE7\xE3o', icon: 'an an-newspaper' }
`),og()()()(),Sl(929,"tr",14)(930,"td",15)(931,"div",16)(932,"span",17),eN(933," kind"),Wl(934,"br"),og()()(),Sl(935,"td",18)(936,"code",26),eN(937,"string"),og()(),Sl(938,"td",21)(939,"em")(940,"strong"),eN(941,"(opcional)"),og()(),Sl(942,"p"),eN(943,"Define o estilo visual da a\xE7\xE3o quando exibida como bot\xE3o fora do "),Sl(944,"em"),eN(945,"dropdown"),og(),eN(946,"."),og(),Sl(947,"p"),eN(948,"Valores permitidos:"),og(),Sl(949,"ul")(950,"li")(951,"code"),eN(952,"primary"),og(),eN(953,": bot\xE3o com maior destaque visual."),og(),Sl(954,"li")(955,"code"),eN(956,"secondary"),og(),eN(957,": estilo padr\xE3o."),og()(),Sl(958,"blockquote")(959,"p"),eN(960,"Valores inv\xE1lidos s\xE3o ignorados e o componente aplica o estilo padr\xE3o da posi\xE7\xE3o."),og()(),Sl(961,"blockquote")(962,"p"),eN(963,"Somente uma a\xE7\xE3o pode ter "),Sl(964,"code"),eN(965,"kind"),og(),eN(966," igual a "),Sl(967,"code"),eN(968,"primary"),og(),eN(969,". Caso mais de uma defina "),Sl(970,"code"),eN(971,"primary"),og(),eN(972,`,
apenas a primeira ser\xE1 mantida e as demais receber\xE3o `),Sl(973,"code"),eN(974,"secondary"),og(),eN(975,"."),og()(),Sl(976,"blockquote")(977,"p"),eN(978,"Quando n\xE3o definido, o estilo \xE9 determinado pelo "),Sl(979,"code"),eN(980,"PoPageActionsLayout"),og(),eN(981,"."),og()()()(),Sl(982,"tr",14)(983,"td",15)(984,"div",16)(985,"span",17),eN(986," label"),Wl(987,"br"),og()()(),Sl(988,"td",18)(989,"code",26),eN(990,"string"),og()(),Sl(991,"td",21)(992,"p"),eN(993,"R\xF3tulo da a\xE7\xE3o."),og(),Sl(994,"p"),eN(995,"A label tamb\xE9m pode representar o agrupador de subitens quando a a\xE7\xE3o possuir "),Sl(996,"code"),eN(997,"subItems"),og(),eN(998,"."),og()()(),Sl(999,"tr",14)(1e3,"td",15)(1001,"div",16)(1002,"span",17),eN(1003," selected"),Wl(1004,"br"),og()()(),Sl(1005,"td",18)(1006,"code",41),eN(1007,"boolean"),og()(),Sl(1008,"td",21)(1009,"em")(1010,"strong"),eN(1011,"(opcional)"),og()(),Sl(1012,"p"),eN(1013,"Define se a a\xE7\xE3o est\xE1 selecionada."),og()()(),Sl(1014,"tr",14)(1015,"td",15)(1016,"div",16)(1017,"span",17),eN(1018," separator"),Wl(1019,"br"),og()()(),Sl(1020,"td",18)(1021,"code",41),eN(1022,"boolean"),og()(),Sl(1023,"td",21)(1024,"em")(1025,"strong"),eN(1026,"(opcional)"),og()(),Sl(1027,"p"),eN(1028,"Atribui uma linha separadora acima do item."),og()()(),Sl(1029,"tr",14)(1030,"td",15)(1031,"div",16)(1032,"span",17),eN(1033," subItems"),Wl(1034,"br"),og()()(),Sl(1035,"td",18)(1036,"code",44),eN(1037,"Array<PoPopupAction>"),og()(),Sl(1038,"td",21)(1039,"em")(1040,"strong"),eN(1041,"(opcional)"),og()(),Sl(1042,"p"),eN(1043,"Define uma lista de subitens para cria\xE7\xE3o de menus aninhados."),og(),Sl(1044,"p"),eN(1045,`Ao definir esta propriedade, o item exibir\xE1 um \xEDcone indicador de subn\xEDvel.
Recomenda-se utilizar no m\xE1ximo tr\xEAs n\xEDveis hier\xE1rquicos para garantir a usabilidade.`),og(),Sl(1046,"blockquote")(1047,"p"),eN(1048,"As propriedades "),Sl(1049,"code"),eN(1050,"disabled"),og(),eN(1051,", "),Sl(1052,"code"),eN(1053,"type"),og(),eN(1054," e "),Sl(1055,"code"),eN(1056,"visible"),og(),eN(1057," n\xE3o s\xE3o aplicadas visualmente ao item agrupador."),og()(),Sl(1058,"blockquote")(1059,"p"),eN(1060,"Quando "),Sl(1061,"code"),eN(1062,"url"),og(),eN(1063," \xE9 informada em um agrupador, o redirecionamento ter\xE1 prioridade e os subitens n\xE3o ser\xE3o abertos."),og()(),Sl(1064,"blockquote")(1065,"p"),eN(1066,"Em subn\xEDveis aninhados, o "),Sl(1067,"code"),eN(1068,"icon"),og(),eN(1069," do agrupador \xE9 substitu\xEDdo pelo indicador de navega\xE7\xE3o (seta)."),og()()()(),Sl(1070,"tr",14)(1071,"td",15)(1072,"div",16)(1073,"span",17),eN(1074," type"),Wl(1075,"br"),og()()(),Sl(1076,"td",18)(1077,"code",26),eN(1078,"string"),og()(),Sl(1079,"td",21)(1080,"em")(1081,"strong"),eN(1082,"(opcional)"),og()(),Sl(1083,"p"),eN(1084,"Define a cor do item."),og(),Sl(1085,"p"),eN(1086,"Valores v\xE1lidos:"),og(),Sl(1087,"ul")(1088,"li")(1089,"code"),eN(1090,"default"),og()(),Sl(1091,"li")(1092,"code"),eN(1093,"danger"),og()()()()(),Sl(1094,"tr",14)(1095,"td",15)(1096,"div",16)(1097,"span",17),eN(1098," url"),Wl(1099,"br"),og()()(),Sl(1100,"td",18)(1101,"code",26),eN(1102,"string"),og()(),Sl(1103,"td",21)(1104,"em")(1105,"strong"),eN(1106,"(opcional)"),og()(),Sl(1107,"p"),eN(1108,"URL para redirecionamento. Aceita rotas internas e links externos."),og(),Sl(1109,"p"),eN(1110,`A url tamb\xE9m pode ser configurada para o agrupador de subitens.
Entretanto, quando a `),Sl(1111,"code"),eN(1112,"url"),og(),eN(1113," \xE9 informada em um agrupador, o clique "),Sl(1114,"strong"),eN(1115,"n\xE3o abrir\xE1 os subitens"),og(),eN(1116,`, pois o item ser\xE1
tratado como um link e o redirecionamento ter\xE1 prioridade sobre a exibi\xE7\xE3o da lista.`),og(),Sl(1117,"blockquote")(1118,"p"),eN(1119,"Quando informada, tem prioridade sobre a propriedade "),Sl(1120,"code"),eN(1121,"action"),og(),eN(1122,"."),og()()()(),Sl(1123,"tr",14)(1124,"td",15)(1125,"div",16)(1126,"span",17),eN(1127," visible"),Wl(1128,"br"),og()()(),Sl(1129,"td",18)(1130,"code",41),eN(1131,"boolean "),og(),Sl(1132,"code",34),eN(1133," Function"),og()(),Sl(1134,"td",21)(1135,"em")(1136,"strong"),eN(1137,"(opcional)"),og()(),Sl(1138,"p"),eN(1139,"Define a visibilidade da a\xE7\xE3o. Aceita um valor booleano ou uma fun\xE7\xE3o que retorna booleano."),og()()()(),Sl(1140,"h4",33)(1141,"code",5),eN(1142,"PoPageDefaultLiterals"),og()(),Sl(1143,"div",2)(1144,"p"),eN(1145,"Interface para defini\xE7\xE3o das literais usadas no "),Sl(1146,"code"),eN(1147,"po-page-default"),og(),eN(1148,"."),og()(),Sl(1149,"h4",10),eN(1150,"Propriedades"),og(),Sl(1151,"table",11)(1152,"tr",12)(1153,"th",13),eN(1154,"Nome"),og(),Sl(1155,"th",13),eN(1156,"Tipo"),og(),Sl(1157,"th",13),eN(1158,"Descri\xE7\xE3o"),og()(),Sl(1159,"tr",14)(1160,"td",15)(1161,"div",16)(1162,"span",17),eN(1163," otherActions"),Wl(1164,"br"),og()()(),Sl(1165,"td",18)(1166,"code",26),eN(1167,"string"),og()(),Sl(1168,"td",21)(1169,"em")(1170,"strong"),eN(1171,"(opcional)"),og()(),Sl(1172,"p"),eN(1173,"Legenda do "),Sl(1174,"code"),eN(1175,"po-dropdown"),og(),eN(1176," de a\xE7\xF5es."),og()()()(),Sl(1177,"h3"),eN(1178,"Enums"),og(),Sl(1179,"h4",4)(1180,"code",5),eN(1181,"PoPageActionsLayout"),og()(),Sl(1182,"div",2)(1183,"p"),eN(1184,"Define os layouts de exibi\xE7\xE3o das a\xE7\xF5es no cabe\xE7alho do "),Sl(1185,"code"),eN(1186,"po-page-default"),og(),eN(1187,"."),og(),Sl(1188,"blockquote")(1189,"p"),eN(1190,"Compat\xEDvel com todos os valores de "),Sl(1191,"code"),eN(1192,"PoPageHeaderType"),og(),eN(1193,"."),og()()(),Sl(1194,"h4",10),eN(1195,"Propriedades"),og(),Sl(1196,"table",11)(1197,"tr",12)(1198,"th",13),eN(1199,"Nome"),og(),Sl(1200,"th",13),eN(1201,"Descri\xE7\xE3o"),og()(),Sl(1202,"tr",14)(1203,"td",15)(1204,"div",16)(1205,"span",17),eN(1206," default"),Wl(1207,"br"),og()()(),Sl(1208,"td",21)(1209,"p"),eN(1210,"Exibe as a\xE7\xF5es como bot\xF5es (at\xE9 3 em desktop e 2 em mobile), agrupando as demais no "),Sl(1211,"em"),eN(1212,"dropdown"),og(),eN(1213,"."),og(),Sl(1214,"p"),eN(1215,"Quando "),Sl(1216,"code"),eN(1217,"PoPageAction.kind"),og(),eN(1218," n\xE3o \xE9 definido, a primeira a\xE7\xE3o recebe o estilo "),Sl(1219,"code"),eN(1220,"primary"),og(),eN(1221,`
e as demais recebem `),Sl(1222,"code"),eN(1223,"secondary"),og(),eN(1224,"."),og()()(),Sl(1225,"tr",14)(1226,"td",15)(1227,"div",16)(1228,"span",17),eN(1229," dropdown"),Wl(1230,"br"),og()()(),Sl(1231,"td",21)(1232,"p"),eN(1233,"Agrupa todas as a\xE7\xF5es exclusivamente dentro do menu "),Sl(1234,"em"),eN(1235,"dropdown"),og(),eN(1236,"."),og()()(),Sl(1237,"tr",14)(1238,"td",15)(1239,"div",16)(1240,"span",17),eN(1241," mixed"),Wl(1242,"br"),og()()(),Sl(1243,"td",21)(1244,"p"),eN(1245,"Exibe a primeira a\xE7\xE3o como bot\xE3o e agrupa as demais no "),Sl(1246,"em"),eN(1247,"dropdown"),og(),eN(1248,"."),og()()()(),Sl(1249,"h4",4)(1250,"code",5),eN(1251,"PoPageHeaderType"),og()(),Sl(1252,"div",2)(1253,"p"),eN(1254,"Define os tipos de cabe\xE7alho dispon\xEDveis no "),Sl(1255,"code"),eN(1256,"po-page-default"),og(),eN(1257,"."),og()(),Sl(1258,"h4",10),eN(1259,"Propriedades"),og(),Sl(1260,"table",11)(1261,"tr",12)(1262,"th",13),eN(1263,"Nome"),og(),Sl(1264,"th",13),eN(1265,"Descri\xE7\xE3o"),og()(),Sl(1266,"tr",14)(1267,"td",15)(1268,"div",16)(1269,"span",17),eN(1270," primary"),Wl(1271,"br"),og()()(),Sl(1272,"td",21)(1273,"p"),eN(1274,"Layout padr\xE3o com suporte a "),Sl(1275,"code"),eN(1276,"p-breadcrumb"),og(),eN(1277,"."),og()()(),Sl(1278,"tr",14)(1279,"td",15)(1280,"div",16)(1281,"span",17),eN(1282," secondary"),Wl(1283,"br"),og()()(),Sl(1284,"td",21)(1285,"p"),eN(1286,"Exibe um bot\xE3o de retorno ao lado do t\xEDtulo."),og(),Sl(1287,"blockquote")(1288,"p"),eN(1289,"Incompat\xEDvel com "),Sl(1290,"code"),eN(1291,"p-breadcrumb"),og(),eN(1292,"."),og()()()(),Sl(1293,"tr",14)(1294,"td",15)(1295,"div",16)(1296,"span",17),eN(1297," tertiary"),Wl(1298,"br"),og()()(),Sl(1299,"td",21)(1300,"p"),eN(1301,"Layout simplificado sem bot\xE3o de retorno."),og(),Sl(1302,"blockquote")(1303,"p"),eN(1304,"Incompat\xEDvel com "),Sl(1305,"code"),eN(1306,"p-breadcrumb"),og(),eN(1307,"."),og()()()()()());},dependencies:[Ka],encapsulation:2})}return l})();var De=(()=>{class l{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(d,r){this.route=d,this.router=r;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let r=d.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:"merge"}),this.activeTab=d;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(r){return new(r||l)(w(Xn),w(En))};static \u0275cmp=Un({type:l,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Page Default",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,i){r&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return i.changeTab("doc")}),Wl(3,"sample-po-page-default-doc"),og(),Sl(4,"po-tab",3),ft("p-click",function(){return i.changeTab("web")}),Wl(5,"sample-po-page-default-basic-view")(6,"sample-po-page-default-labs-view")(7,"sample-po-page-default-dashboard-view"),og()()()),r&2&&(nw("p-actions",i.actions),Lp(2),nw("p-active",i.activeTab==="doc"),Lp(2),nw("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[rNe,Bme,qme,xe,Pe,Ce,we],encapsulation:2})}return l})();var Re=[{path:"",component:De}],_e=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275mod=fe({type:l});static \u0275inj=ue({imports:[hL.forChild(Re),hL]})}return l})();var Dt=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275mod=fe({type:l});static \u0275inj=ue({imports:[sr,_e]})}return l})();export{Dt as DocPoPageDefaultModule};