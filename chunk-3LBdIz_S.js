import {f as fe,u as ue,s as sr,a as uL,C,c3 as Xn,E as En,U as Un,b as f,aW as Yp,e as s,r as r$1,w,a3 as cNe,J as zl,an as DO,aH as Ka,b8 as qme,b9 as Yme,H as Il,q as Qx,R as og,a1 as ft,A as Lp,ar as Ux,au as dg,T as nw,bs as uN,aX as G9,aF as $9,aY as z9,aG as mk,aZ as hk,b0 as Qt,b1 as mv,c4 as C3,bB as cc,b4 as O3,c8 as Dde,aJ as qhe,ba as yNe,aB as Dx,aM as ww,aN as QA,aq as lx,bd as Ax,a7 as lN,aO as Ew,aP as e0,at as ux,cz as kz,b6 as Yo,b7 as E3,X as we$1,av as Gl,aw as co,ax as lo,aA as Sx,aD as Xy,aT as eN,aE as Qy}from'./main-QSTLMRDK.js';var Se=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-page-default-basic"]],standalone:false,decls:1,vars:0,consts:[["p-title","PO Page Default"]],template:function(r,i){r&1&&zl(0,"po-page-default",0);},dependencies:[cNe],encapsulation:2,changeDetection:1})}return l})();var Ae=l=>({"docs-sample-code-tabs":l}),xe=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-page-default-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Page Default Basic"),og(),Il(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-page-default-basic/sample-po-page-default-basic.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-page-default p-title="PO Page Default"> </po-page-default>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-page-default-basic/sample-po-page-default-basic.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-page-default-basic',
  templateUrl: './sample-po-page-default-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageDefaultBasicComponent {}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-page-default-basic"),og(),zl(23,"hr")),r&2&&(Lp(5),Ux("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,Ae,i.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,Se],encapsulation:2})}return l})();var Fe=()=>({});function Be(l,Me){if(l&1){let d=Dx();Il(0,"po-input",36),ww("ngModelChange",function(i){Xy(d);let m=Sx(2);return eN(m.helperFooterLabel,i)||(m.helperFooterLabel=i),Qy(i)}),og(),QA();}if(l&2){let d=Sx(2);Ew("ngModel",d.helperFooterLabel),e0();}}function Oe(l,Me){if(l&1){let d=Dx();Il(0,"po-widget",10)(1,"div",6)(2,"po-input",32),ww("ngModelChange",function(i){Xy(d);let m=Sx();return eN(m.helperTitle,i)||(m.helperTitle=i),Qy(i)}),og(),QA(),Il(3,"po-input",33),ww("ngModelChange",function(i){Xy(d);let m=Sx();return eN(m.helperContent,i)||(m.helperContent=i),Qy(i)}),og(),QA(),og(),Il(4,"div",6)(5,"po-radio-group",34),ft("ngModelChange",function(i){Xy(d);let m=Sx();return Qy(m.helperType=i)}),og(),QA(),og(),Il(6,"div",6),lx(7,Be,1,1,"po-input",35),og()();}if(l&2){let d=Sx();Lp(2),Ew("ngModel",d.helperTitle),e0(),Lp(),Ew("ngModel",d.helperContent),e0(),Lp(2),nw("p-columns",4)("ngModel",d.helperType)("p-options",d.helperTypeOptions),e0(),Lp(2),ux(d.helperType==="help"?7:-1);}}var ve=(()=>{class l{poNotification=f(Yp);action={label:"",visible:true,disabled:false};actions=[];breadcrumb={items:[]};breadcrumbItem={label:"",link:void 0};breadcrumbParams={};componentsSize="medium";customLiterals;literals="";pageActionsLayout="default";pageHeaderType="primary";subtitle="";title="PO Page Default";helperContent="";helperFooterLabel="";helperTitle="";helperType="info";showHelper=false;helperTypeOptions=[{label:"help",value:"help"},{label:"info",value:"info"}];get helper(){if(!this.showHelper||!this.helperContent)return;let d={title:this.helperTitle,content:this.helperContent,type:this.helperType};return this.helperType==="help"&&this.helperFooterLabel&&(d.footerAction={label:this.helperFooterLabel,action:()=>this.poNotification.information("Footer action clicked")}),d}actionKindOptions=[{label:"primary",value:"primary"},{label:"secondary",value:"secondary"}];actionOptions=[{label:"Disabled",value:"disabled"},{label:"Separator",value:"separator"},{label:"Selected",value:"selected"},{label:"Visible",value:"visible"}];componentsSizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];iconOptions=[{value:"an an-newspaper",label:"an an-newspaper"},{value:"an an-magnifying-glass",label:"an an-magnifying-glass"},{value:"an an-globe",label:"an an-globe"},{value:"fa fa-podcast",label:"fa fa-podcast"}];pageActionsLayoutOptions=[{label:"default",value:"default"},{label:"dropdown",value:"dropdown"},{label:"mixed",value:"mixed"}];pageHeaderTypeOptions=[{label:"primary",value:"primary"},{label:"secondary",value:"secondary"},{label:"tertiary",value:"tertiary"}];typeOptions=[{label:"Danger",value:"danger"},{label:"Default",value:"default"}];ngOnInit(){this.restore();}addAction(d){let r=s(r$1({},d),{visible:d.visible!==void 0?d.visible:true,disabled:d.disabled!==void 0?d.disabled:false});r.action=r.action?this.showAction.bind(this,r.action):void 0,this.actions=[...this.actions,r],this.restoreActionForm();}addBreadcrumbItem(){this.breadcrumb.items=this.breadcrumb.items.concat([this.breadcrumbItem]),this.breadcrumbItem={label:"",link:void 0};}addBreadcrumbParam(){let d={[this.breadcrumbParams.property||""]:this.breadcrumbParams.value};this.breadcrumb.params?this.breadcrumb.params=Object.assign(this.breadcrumb.params,d):this.breadcrumb.params=d,this.breadcrumbParams={};}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals);}catch(d){this.customLiterals=void 0;}}onBack(){this.poNotification.information("Back button clicked (p-back event)");}restore(){this.actions=[],this.breadcrumb={items:[]},this.breadcrumbItem={label:"",link:void 0},this.breadcrumbParams={},this.componentsSize="medium",this.customLiterals=void 0,this.helperContent="",this.helperFooterLabel="",this.helperTitle="",this.helperType="info",this.literals="",this.pageActionsLayout="default",this.pageHeaderType="primary",this.showHelper=false,this.subtitle="",this.title="PO Page Default",this.restoreActionForm();}restoreActionForm(){this.action={label:"",visible:true,disabled:false};}showAction(d){this.poNotification.success(`Action clicked: ${d}`);}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-page-default-labs"]],standalone:false,decls:50,vars:43,consts:[["formPage","ngForm"],["formAction","ngForm"],["formBreadcrumbFavorite","ngForm"],["formBreadcrumbItems","ngForm"],["formBreadcrumbParams","ngForm"],[3,"p-back","p-actions","p-breadcrumb","p-components-size","p-helper","p-literals","p-page-actions-layout","p-page-header-type","p-title","p-subtitle"],[1,"po-row"],["name","title","p-label","Title","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","subtitle","p-label","Subtitle",1,"po-md-6",3,"ngModelChange","ngModel"],["name","showHelper","p-label","Helper",1,"po-md-12","po-pt-2","po-pb-2",3,"ngModelChange","ngModel"],["p-title","Helper",1,"po-md-12","po-pb-3"],["name","pageHeaderType","p-label","Page Header Type",1,"po-lg-3","po-md-6",3,"ngModelChange","ngModel","p-options"],["name","pageActionsLayout","p-label","Page Actions Layout",1,"po-lg-3","po-md-6",3,"ngModelChange","ngModel","p-options"],["name","literals","p-help",'Ex.: {"otherActions": "Mais a\xE7\xF5es"}',"p-label","Literals",1,"po-md-6",3,"ngModelChange","p-change","ngModel"],["name","size","p-label","Components size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-columns","p-options"],["p-title","Action"],["name","actionLabel","p-label","Label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","actionAction","p-clean","","p-label","Action",1,"po-md-6",3,"ngModelChange","ngModel"],["name","actionURL","p-label","URL",1,"po-md-6",3,"ngModelChange","ngModel"],["name","type","p-label","Type",1,"po-lg-3","po-md-6",3,"ngModelChange","ngModel","p-options"],["name","icon","p-label","Icon",1,"po-lg-3","po-md-6",3,"ngModelChange","ngModel","p-options"],["name","kind","p-label","Kind",1,"po-lg-3","po-md-6",3,"ngModelChange","ngModel","p-options"],["name","action","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-columns","p-indeterminate","p-options"],["p-label","Add Action",1,"po-lg-2","po-md-4",3,"p-click","p-disabled"],["name","breadcrumbFavorite","p-clean","","p-help","https://po-sample-api.onrender.com/v1/favorite","p-label","Breadcrumb favorite",1,"po-md-6",3,"ngModelChange","ngModel"],["name","breadcrumbItemLabel","p-clean","","p-label","Breadcrumb item label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","breadcrumbItemLink","p-clean","","p-label","Breadcrumb item link","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add breadcrumb item",1,"po-lg-3","po-md-4",3,"p-click","p-disabled"],["name","breadcrumbParamsProperty","p-clean","","p-label","Breadcrumb params property","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","breadcrumbParamsValue","p-clean","","p-label","Breadcrumb params value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add breadcrumb params",1,"po-lg-3","po-md-4",3,"p-click","p-disabled"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"],["name","helperTitle","p-clean","","p-label","Title",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperContent","p-clean","","p-label","Content","p-help","Consulte a <b>documenta\xE7\xE3o</b> para mais detalhes.",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperType","p-label","Type",1,"po-md-12",3,"ngModelChange","p-columns","ngModel","p-options"],["name","helperFooterLabel","p-clean","","p-label","Footer Action",1,"po-md-6",3,"ngModel"],["name","helperFooterLabel","p-clean","","p-label","Footer Action",1,"po-md-6",3,"ngModelChange","ngModel"]],template:function(r,i){if(r&1){let m=Dx();Il(0,"po-page-default",5),ft("p-back",function(){return i.onBack()}),og(),zl(1,"po-divider"),Il(2,"form",null,0)(4,"div",6)(5,"po-input",7),ww("ngModelChange",function(o){return Xy(m),eN(i.title,o)||(i.title=o),Qy(o)}),og(),QA(),Il(6,"po-input",8),ww("ngModelChange",function(o){return Xy(m),eN(i.subtitle,o)||(i.subtitle=o),Qy(o)}),og(),QA(),Il(7,"po-checkbox",9),ww("ngModelChange",function(o){return Xy(m),eN(i.showHelper,o)||(i.showHelper=o),Qy(o)}),og(),QA(),lx(8,Oe,8,6,"po-widget",10),Il(9,"po-select",11),ft("ngModelChange",function(o){return i.pageHeaderType=o}),og(),QA(),Il(10,"po-select",12),ft("ngModelChange",function(o){return i.pageActionsLayout=o}),og(),QA(),Il(11,"po-input",13),ww("ngModelChange",function(o){return Xy(m),eN(i.literals,o)||(i.literals=o),Qy(o)}),ft("p-change",function(){return i.changeLiterals()}),og(),QA(),Il(12,"po-radio-group",14),ww("ngModelChange",function(o){return Xy(m),eN(i.componentsSize,o)||(i.componentsSize=o),Qy(o)}),og(),QA(),og()(),zl(13,"po-divider"),Il(14,"po-widget",15)(15,"form",null,1)(17,"div",6)(18,"po-input",16),ww("ngModelChange",function(o){return Xy(m),eN(i.action.label,o)||(i.action.label=o),Qy(o)}),og(),QA(),Il(19,"po-input",17),ww("ngModelChange",function(o){return Xy(m),eN(i.action.action,o)||(i.action.action=o),Qy(o)}),og(),QA(),Il(20,"po-input",18),ww("ngModelChange",function(o){return Xy(m),eN(i.action.url,o)||(i.action.url=o),Qy(o)}),og(),QA(),Il(21,"po-select",19),ft("ngModelChange",function(o){return i.action.type=o}),og(),QA(),Il(22,"po-select",20),ft("ngModelChange",function(o){return i.action.icon=o}),og(),QA(),Il(23,"po-select",21),ft("ngModelChange",function(o){return i.action.kind=o}),og(),QA(),Il(24,"po-checkbox-group",22),ft("ngModelChange",function(o){return i.action=o}),og(),QA(),og(),Il(25,"div",6)(26,"po-button",23),ft("p-click",function(){return i.addAction(i.action)}),og()()()(),zl(27,"po-divider"),Il(28,"form",null,2)(30,"div",6)(31,"po-input",24),ww("ngModelChange",function(o){return Xy(m),eN(i.breadcrumb.favorite,o)||(i.breadcrumb.favorite=o),Qy(o)}),og(),QA(),og()(),Il(32,"form",null,3)(34,"div",6)(35,"po-input",25),ww("ngModelChange",function(o){return Xy(m),eN(i.breadcrumbItem.label,o)||(i.breadcrumbItem.label=o),Qy(o)}),og(),QA(),Il(36,"po-input",26),ww("ngModelChange",function(o){return Xy(m),eN(i.breadcrumbItem.link,o)||(i.breadcrumbItem.link=o),Qy(o)}),og(),QA(),og(),Il(37,"div",6)(38,"po-button",27),ft("p-click",function(){return i.addBreadcrumbItem()}),og()()(),zl(39,"po-divider"),Il(40,"form",null,4)(42,"div",6)(43,"po-input",28),ww("ngModelChange",function(o){return Xy(m),eN(i.breadcrumbParams.property,o)||(i.breadcrumbParams.property=o),Qy(o)}),og(),QA(),Il(44,"po-input",29),ww("ngModelChange",function(o){return Xy(m),eN(i.breadcrumbParams.value,o)||(i.breadcrumbParams.value=o),Qy(o)}),og(),QA(),og(),Il(45,"div",6)(46,"po-button",30),ft("p-click",function(){return i.addBreadcrumbParam()}),og()()(),zl(47,"po-divider"),Il(48,"div",6)(49,"po-button",31),ft("p-click",function(){return i.restore()}),og()();}if(r&2){let m=Ax(16),s=Ax(33),o=Ax(41);nw("p-actions",i.actions)("p-breadcrumb",i.breadcrumb)("p-components-size",i.componentsSize)("p-helper",i.helper||"")("p-literals",i.customLiterals??lN(42,Fe))("p-page-actions-layout",i.pageActionsLayout)("p-page-header-type",i.pageHeaderType)("p-title",i.title)("p-subtitle",i.subtitle),Lp(5),Ew("ngModel",i.title),e0(),Lp(),Ew("ngModel",i.subtitle),e0(),Lp(),Ew("ngModel",i.showHelper),e0(),Lp(),ux(i.showHelper?8:-1),Lp(),nw("ngModel",i.pageHeaderType)("p-options",i.pageHeaderTypeOptions),e0(),Lp(),nw("ngModel",i.pageActionsLayout)("p-options",i.pageActionsLayoutOptions),e0(),Lp(),Ew("ngModel",i.literals),e0(),Lp(),Ew("ngModel",i.componentsSize),nw("p-columns",4)("p-options",i.componentsSizeOptions),e0(),Lp(6),Ew("ngModel",i.action.label),e0(),Lp(),Ew("ngModel",i.action.action),e0(),Lp(),Ew("ngModel",i.action.url),e0(),Lp(),nw("ngModel",i.action.type)("p-options",i.typeOptions),e0(),Lp(),nw("ngModel",i.action.icon)("p-options",i.iconOptions),e0(),Lp(),nw("ngModel",i.action.kind)("p-options",i.actionKindOptions),e0(),Lp(),nw("ngModel",i.action)("p-columns",4)("p-indeterminate",true)("p-options",i.actionOptions),e0(),Lp(2),nw("p-disabled",m.form.invalid),Lp(5),Ew("ngModel",i.breadcrumb.favorite),e0(),Lp(4),Ew("ngModel",i.breadcrumbItem.label),e0(),Lp(),Ew("ngModel",i.breadcrumbItem.link),e0(),Lp(2),nw("p-disabled",s.invalid??false),Lp(5),Ew("ngModel",i.breadcrumbParams.property),e0(),Lp(),Ew("ngModel",i.breadcrumbParams.value),e0(),Lp(2),nw("p-disabled",o.invalid??false);}},dependencies:[G9,$9,z9,mk,hk,Qt,mv,C3,cc,O3,Dde,qhe,cNe,yNe],encapsulation:2,changeDetection:1})}return l})();var qe=l=>({"docs-sample-code-tabs":l}),Pe=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-page-default-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Page Default Labs"),og(),Il(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-page-default-labs/sample-po-page-default-labs.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-page-default
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
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-page-default-labs/sample-po-page-default-labs.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-page-default-labs"),og(),zl(23,"hr")),r&2&&(Lp(5),Ux("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,qe,i.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,ve],encapsulation:2})}return l})();var ee=(()=>{class l{getColumns(){return [{property:"cities",label:"Cities that most downloaded PO"},{property:"package",label:"Package version"},{property:"downloads",label:"Downloads"}]}getItems(){return [{cities:"S\xE3o Paulo",package:"2.0.0-beta.2",downloads:"2000"},{cities:"Joinville",package:"1.9.1",downloads:"1000"},{cities:"Rio de Janeiro",package:"2.0.0-beta.2",downloads:"250"},{cities:"Santa Catarina",package:"1.9.1",downloads:"100"},{cities:"Curitiba",package:"2.0.0-beta.2",downloads:"1040"},{cities:"Goiania",package:"1.9.1",downloads:"250"},{cities:"Londrina",package:"1.9.1",downloads:"35"},{cities:"Belo Horizonte",package:"1.9.1",downloads:"1100"}]}static \u0275fac=function(r){return new(r||l)};static \u0275prov=w({token:l,factory:l.\u0275fac,providedIn:"root"})}return l})();var Ve=["formShare"],ye=(()=>{class l{poNotification=f(Yp);sampleDashboardService=f(ee);formShare;poModal;columns;email="";isSubscribed=false;items;actions=[{label:"Share",action:this.modalOpen.bind(this),icon:"an an-share"},{label:"GitHub",url:"https://github.com/po-ui/po-angular"},{label:"More info",subItems:[{label:"po-dropdown documentation",url:"https://po-ui.io/documentation/po-dropdown"}]},{label:"Components",url:"/documentation"},{label:"Disable notification",action:this.disableNotification.bind(this),disabled:()=>this.isSubscribed}];breadcrumb={items:[{label:"Home",link:"/"},{label:"Dashboard"}]};helper={title:"Dashboard Info",content:"View <b>real-time metrics</b> of your website. Data is updated <i>every 5 minutes</i>.",type:"info"};cancelAction={action:()=>{this.modalClose();},label:"Cancel"};shareAction={action:()=>{this.share();},label:"Share"};ngOnInit(){this.columns=this.sampleDashboardService.getColumns(),this.items=this.sampleDashboardService.getItems();}modalClose(){this.poModal.close(),this.formShare.reset();}modalOpen(){this.poModal.open();}share(){this.formShare.valid?this.poNotification.success(`Webpage shared successfully to: ${this.email}.`):this.poNotification.error("Email invalid."),this.modalClose();}disableNotification(){this.isSubscribed=true;}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-page-default-dashboard"]],viewQuery:function(r,i){if(r&1&&Gl(Ve,7)(Yo,7),r&2){let m;co(m=lo())&&(i.formShare=m.first),co(m=lo())&&(i.poModal=m.first);}},standalone:false,features:[we$1([ee])],decls:38,vars:9,consts:[["formShare","ngForm"],["p-title","Dashboard","p-subtitle","Website analytics overview",3,"p-actions","p-breadcrumb","p-helper"],[1,"po-row"],["p-title","Daily visitors",1,"po-md-6","po-lg-4","po-mb-2"],[1,"po-font-subtitle","po-text-center"],[1,"po-text-center","sample-widget-text-subtitle"],["p-title","Most viewed page",1,"po-md-6","po-lg-4","po-mb-2"],["p-title","Website status",1,"po-md-6","po-lg-4","po-mb-2"],["p-title","NPM downloads",1,"po-md-6","po-lg-4","po-mb-2"],["p-title","Devforum PO questions",1,"po-md-6","po-lg-4","po-mb-2"],["p-title","Angular versions supported",1,"po-md-6","po-lg-4","po-mb-2"],[3,"p-columns","p-items","p-hide-table-search"],["p-title","Share webpage",3,"p-primary-action","p-secondary-action"],["name","email","p-clean","","p-label","Type an e-mail for sharing webpage: http://www.po.com.br","p-required","",1,"po-lg-12",3,"ngModelChange","ngModel"]],template:function(r,i){if(r&1){let m=Dx();Il(0,"po-page-default",1)(1,"div",2)(2,"po-widget",3)(3,"div",4),Qx(4,"540"),og(),Il(5,"div",5),Qx(6,"www.po.com.br"),og()(),Il(7,"po-widget",6)(8,"div",4),Qx(9,"300 views"),og(),Il(10,"div",5),Qx(11,"https://po-ui.io"),og()(),Il(12,"po-widget",7)(13,"div",4),Qx(14,"Online"),og(),Il(15,"div",5),Qx(16,"28 days"),og()(),Il(17,"po-widget",8)(18,"div",4),Qx(19,"266"),og(),Il(20,"div",5),Qx(21,"@po-ui/ng-components - 1.10.1"),og()(),Il(22,"po-widget",9)(23,"div",4),Qx(24,"800 questions"),og(),Il(25,"div",5),Qx(26,"https://devforum.po.com.br"),og()(),Il(27,"po-widget",10)(28,"div",4),Qx(29,"AngularJS - Angular 6"),og(),Il(30,"div",5),Qx(31,"Angular 6 most downloaded"),og()()(),zl(32,"po-divider")(33,"po-table",11),og(),Il(34,"po-modal",12)(35,"form",null,0)(37,"po-email",13),ww("ngModelChange",function(o){return Xy(m),eN(i.email,o)||(i.email=o),Qy(o)}),og(),QA(),og()();}r&2&&(nw("p-actions",i.actions)("p-breadcrumb",i.breadcrumb)("p-helper",i.helper),Lp(33),nw("p-columns",i.columns)("p-items",i.items)("p-hide-table-search",false),Lp(),nw("p-primary-action",i.shareAction)("p-secondary-action",i.cancelAction),Lp(3),Ew("ngModel",i.email),e0());},dependencies:[G9,$9,z9,mk,hk,mv,kz,Yo,cNe,E3,yNe],styles:[".sample-widget-text-subtitle[_ngcontent-%COMP%]{font-family:NunitoSans;font-size:14px;text-align:center;color:#9da7a9}"],changeDetection:1})}return l})();var Ne=l=>({"docs-sample-code-tabs":l}),Ce=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-page-default-dashboard-view"]],standalone:false,decls:34,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Page Default - Dashboard"),og(),Il(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-page-default-dashboard/sample-po-page-default-dashboard.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-page-default
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
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-page-default-dashboard/sample-po-page-default-dashboard.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, ViewChild, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),og(),Il(21,"label",6),Qx(22,"sample-po-page-default-dashboard/sample-po-page-default-dashboard.service.ts"),og(),Il(23,"pre",9),Qx(24,`import { Injectable } from '@angular/core';

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
`),og()()(),Il(25,"po-tab",10)(26,"div")(27,"label",6),Qx(28,"sample-po-page-default-dashboard/sample-po-page-default-dashboard.component.css"),og(),Il(29,"pre",11),Qx(30,`.sample-widget-text-subtitle {
  font-family: NunitoSans;
  font-size: 14px;
  text-align: center;
  color: #9da7a9;
}
`),og()()()()(),Il(31,"div",12),zl(32,"sample-po-page-default-dashboard"),og(),zl(33,"hr")),r&2&&(Lp(5),Ux("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,Ne,i.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,ye],encapsulation:2})}return l})();var we=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-page-default-doc"]],standalone:false,decls:1308,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","Array<PoPageAction>"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","PoBreadcrumb"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","PoHelperOptions"],[1,"language-html"],["pan","",1,"docs-api-property-type","PoPageDefaultLiterals"],[1,"language-typescript"],["href","/documentation/po-i18n"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["href","/guides/getting-started"],["pan","",1,"docs-api-property-type","Array<PoBreadcrumbItem>"],["pan","",1,"docs-api-property-type","object"],["pan","",1,"docs-api-property-type","{","label:","string;","action:","Function;","}"],["pan","",1,"docs-api-property-type","'info'"],["pan","",1,"docs-api-property-type","'help'"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","Array<PoPopupAction>"]],template:function(r,i){r&1&&(Il(0,"div",0)(1,"p",1)(2,"code"),Qx(3,"import { PoPageModule } from '@po-ui/ng-components';"),og()(),Il(4,"div",2)(5,"p"),Qx(6,"M\xF3dulo respons\xE1vel pelos componentes de estrutura de p\xE1gina: "),Il(7,"code"),Qx(8,"po-page-default"),og(),Qx(9,", "),Il(10,"code"),Qx(11,"po-page-detail"),og(),Qx(12,`,
`),Il(13,"code"),Qx(14,"po-page-edit"),og(),Qx(15,", "),Il(16,"code"),Qx(17,"po-page-list"),og(),Qx(18," e "),Il(19,"code"),Qx(20,"po-page-slide"),og(),Qx(21,"."),og()(),Il(22,"h3",3),Qx(23,"Componente"),og(),Il(24,"h4",4)(25,"code",5),Qx(26,"PoPageDefaultComponent"),og()(),Il(27,"div",2)(28,"p"),Qx(29,"O "),Il(30,"code"),Qx(31,"po-page-default"),og(),Qx(32," \xE9 utilizado como container principal para telas sem um template definido."),og(),Il(33,"p"),Qx(34,"Oferece suporte a cabe\xE7alhos din\xE2micos via "),Il(35,"code"),Qx(36,"p-page-header-type"),og(),Qx(37,", navega\xE7\xE3o por "),Il(38,"em"),Qx(39,"breadcrumb"),og(),Qx(40,`
e gerenciamento de a\xE7\xF5es com agrupamento responsivo via `),Il(41,"code"),Qx(42,"p-page-actions-layout"),og(),Qx(43,"."),og(),Il(44,"h4"),Qx(45,"Tokens customiz\xE1veis"),og(),Il(46,"blockquote")(47,"p"),Qx(48,"Para maiores informa\xE7\xF5es, acesse o guia "),Il(49,"a",6),Qx(50,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),Qx(51,"."),og()(),Il(52,"table")(53,"thead")(54,"tr")(55,"th"),Qx(56,"Propriedade"),og(),Il(57,"th"),Qx(58,"Descri\xE7\xE3o"),og(),Il(59,"th"),Qx(60,"Valor Padr\xE3o"),og()()(),Il(61,"tbody")(62,"tr")(63,"td")(64,"strong"),Qx(65,"P\xE1gina (po-page-default)"),og()(),zl(66,"td")(67,"td"),og(),Il(68,"tr")(69,"td")(70,"code"),Qx(71,"--background"),og()(),Il(72,"td"),Qx(73,"Background da p\xE1gina (header e body)"),og(),Il(74,"td")(75,"code"),Qx(76,"var(--color-page-background-color-page)"),og()()(),Il(77,"tr")(78,"td")(79,"strong"),Qx(80,"Header (po-page-header)"),og()(),zl(81,"td")(82,"td"),og(),Il(83,"tr")(84,"td")(85,"code"),Qx(86,"--padding"),og()(),Il(87,"td"),Qx(88,"Espa\xE7amento do header"),og(),Il(89,"td")(90,"code"),Qx(91,"var(--spacing-xs) var(--spacing-md)"),og()()(),Il(92,"tr")(93,"td")(94,"code"),Qx(95,"--gap"),og()(),Il(96,"td"),Qx(97,"Espa\xE7amento entre os breadcrumbs e o t\xEDtulo"),og(),Il(98,"td")(99,"code"),Qx(100,"var(--spacing-md)"),og()()(),Il(101,"tr")(102,"td")(103,"code"),Qx(104,"--gap-actions"),og()(),Il(105,"td"),Qx(106,"Espa\xE7amento entre as a\xE7\xF5es"),og(),Il(107,"td")(108,"code"),Qx(109,"var(--spacing-xs)"),og()()(),Il(110,"tr")(111,"td")(112,"strong"),Qx(113,"Header (po-page-header .po-page-header-title)"),og()(),zl(114,"td")(115,"td"),og(),Il(116,"tr")(117,"td")(118,"code"),Qx(119,"--font-family"),og()(),Il(120,"td"),Qx(121,"Fam\xEDlia tipogr\xE1fica do t\xEDtulo"),og(),Il(122,"td")(123,"code"),Qx(124,"var(--font-family-theme)"),og()()(),Il(125,"tr")(126,"td")(127,"strong"),Qx(128,"Content (po-page-content)"),og()(),zl(129,"td")(130,"td"),og(),Il(131,"tr")(132,"td")(133,"code"),Qx(134,"--padding-content"),og()(),Il(135,"td"),Qx(136,"Espa\xE7amento do conte\xFAdo"),og(),Il(137,"td")(138,"code"),Qx(139,"var(--spacing-xs) var(--spacing-sm)"),og()()()()()(),Il(140,"div",7)(141,"h4",8),Qx(142,"Seletor"),og(),Il(143,"pre",9),Qx(144,`<po-page-default
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
`),og()(),Il(145,"h4",10),Qx(146,"Propriedades"),og(),Il(147,"table",11)(148,"tr",12)(149,"th",13),Qx(150,"Nome"),og(),Il(151,"th",13),Qx(152,"Tipo"),og(),Il(153,"th",13),Qx(154,"Padr\xE3o"),og(),Il(155,"th",13),Qx(156,"Descri\xE7\xE3o"),og()(),Il(157,"tr",14)(158,"td",15)(159,"div",16)(160,"span",17),Qx(161," p-actions"),zl(162,"br"),og()()(),Il(163,"td",18)(164,"code",19),Qx(165,"Array<PoPageAction>"),og()(),Il(166,"td",20)(167,"p")(168,"code"),Qx(169,"[]"),og()()(),Il(170,"td",21)(171,"em")(172,"strong"),Qx(173,"(opcional)"),og()(),Il(174,"p"),Qx(175,"Define a lista de a\xE7\xF5es que ser\xE3o exibidas no cabe\xE7alho da p\xE1gina."),og(),Il(176,"p"),Qx(177,"Recebe um array de objetos que implementam a interface "),Il(178,"code"),Qx(179,"PoPageAction"),og(),Qx(180,"."),og(),Il(181,"blockquote")(182,"p"),Qx(183,"O comportamento de exibi\xE7\xE3o pode ser customizado atrav\xE9s da propriedade "),Il(184,"code"),Qx(185,"p-page-actions-layout"),og(),Qx(186,"."),og()()()(),Il(187,"tr",14)(188,"td",15)(189,"div",22)(190,"span",23),Qx(191," (p-back)"),zl(192,"br"),og()()(),Il(193,"td",18)(194,"code",24),Qx(195,"EventEmitter"),og()(),Il(196,"td",20),Qx(197,"-"),og(),Il(198,"td",21)(199,"em")(200,"strong"),Qx(201,"(opcional)"),og()(),Il(202,"p"),Qx(203,"Evento disparado ao clicar no bot\xE3o voltar exibido no cabe\xE7alho."),og(),Il(204,"blockquote")(205,"p"),Qx(206,"Bot\xE3o exibido apenas quando a propriedade "),Il(207,"code"),Qx(208,"p-page-header-type"),og(),Qx(209," est\xE1 configurada como "),Il(210,"code"),Qx(211,"secondary"),og(),Qx(212,"."),og()()()(),Il(213,"tr",14)(214,"td",15)(215,"div",16)(216,"span",17),Qx(217," p-breadcrumb"),zl(218,"br"),og()()(),Il(219,"td",18)(220,"code",25),Qx(221,"PoBreadcrumb"),og()(),Il(222,"td",20),Qx(223,"-"),og(),Il(224,"td",21)(225,"em")(226,"strong"),Qx(227,"(opcional)"),og()(),Il(228,"p"),Qx(229,"Define o sistema de navega\xE7\xE3o que indica o caminho da p\xE1gina atual na hierarquia da aplica\xE7\xE3o."),og(),Il(230,"p"),Qx(231,"Recebe um objeto que implementa a interface "),Il(232,"code"),Qx(233,"PoBreadcrumb"),og(),Qx(234,"."),og(),Il(235,"blockquote")(236,"p"),Qx(237,"Compat\xEDvel com o cabe\xE7alho ("),Il(238,"code"),Qx(239,"p-page-header-type"),og(),Qx(240,") do tipo "),Il(241,"code"),Qx(242,"primary"),og(),Qx(243,"."),og()()()(),Il(244,"tr",14)(245,"td",15)(246,"div",16)(247,"span",17),Qx(248," p-components-size"),zl(249,"br"),og()()(),Il(250,"td",18)(251,"code",26),Qx(252,"string"),og()(),Il(253,"td",20)(254,"p")(255,"code"),Qx(256,"medium"),og()()(),Il(257,"td",21)(258,"em")(259,"strong"),Qx(260,"(opcional)"),og()(),Il(261,"p"),Qx(262,"Define o tamanho dos componentes de formul\xE1rio no template:"),og(),Il(263,"ul")(264,"li")(265,"code"),Qx(266,"small"),og(),Qx(267,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),og(),Il(268,"li")(269,"code"),Qx(270,"medium"),og(),Qx(271,": aplica a medida medium de cada componente."),og()(),Il(272,"blockquote")(273,"p"),Qx(274,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Il(275,"code"),Qx(276,"medium"),og(),Qx(277,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Il(278,"a",27),Qx(279,"po-theme"),og(),Qx(280,"."),og()()()(),Il(281,"tr",14)(282,"td",15)(283,"div",16)(284,"span",17),Qx(285," p-helper"),zl(286,"br"),og()()(),Il(287,"td",18)(288,"code",28),Qx(289,"PoHelperOptions "),og(),Il(290,"code",26),Qx(291," string"),og()(),Il(292,"td",20)(293,"p")(294,"code"),Qx(295,"info"),og()()(),Il(296,"td",21)(297,"em")(298,"strong"),Qx(299,"(opcional)"),og()(),Il(300,"p"),Qx(301,"Define o conte\xFAdo do po-helper informativo exibido ao lado do subt\xEDtulo da p\xE1gina."),og(),Il(302,"p"),Qx(303,"Quando n\xE3o houver subt\xEDtulo ("),Il(304,"code"),Qx(305,"p-subtitle"),og(),Qx(306,"), o po-helper ser\xE1 exibido logo abaixo do t\xEDtulo."),og(),Il(307,"p"),Qx(308,"Aceita uma string simples (exibida como conte\xFAdo) ou um objeto do tipo "),Il(309,"code"),Qx(310,"PoHelperOptions"),og(),Qx(311,`
para configura\xE7\xE3o avan\xE7ada (t\xEDtulo, conte\xFAdo, tipo, a\xE7\xF5es).`),og(),Il(312,"p"),Qx(313,"Exemplo de uso:"),og(),Il(314,"pre")(315,"code",29),Qx(316,`<po-page-default
  p-title="Cadastro"
  p-subtitle="Preencha os dados"
  [p-helper]="{ title: 'Ajuda', content: 'Informa\xE7\xF5es sobre o cadastro' }"
></po-page-default>
`),og()()()(),Il(317,"tr",14)(318,"td",15)(319,"div",16)(320,"span",17),Qx(321," p-literals"),zl(322,"br"),og()()(),Il(323,"td",18)(324,"code",30),Qx(325,"PoPageDefaultLiterals"),og()(),Il(326,"td",20),Qx(327,"-"),og(),Il(328,"td",21)(329,"em")(330,"strong"),Qx(331,"(opcional)"),og()(),Il(332,"p"),Qx(333,"Permite a customiza\xE7\xE3o das literais utilizadas no componente."),og(),Il(334,"p"),Qx(335,"Para customizar, basta passar um objeto parcial ou completo que implemente a interface "),Il(336,"code"),Qx(337,"PoPageDefaultLiterals"),og(),Qx(338,"."),og(),Il(339,"p"),Qx(340,"Exemplo de uso:"),og(),Il(341,"pre")(342,"code",29),Qx(343,`<po-page-default [p-literals]="customLiterals"></po-page-default>
`),og()(),Il(344,"pre")(345,"code",31),Qx(346,`const customLiterals: PoPageDefaultLiterals = {
  otherActions: 'Mais op\xE7\xF5es'
};
`),og()(),Il(347,"blockquote")(348,"p"),Qx(349,"O valor padr\xE3o ser\xE1 traduzido de acordo com o idioma configurado no "),Il(350,"a",32)(351,"code"),Qx(352,"PoI18nService"),og()(),Qx(353," ou navegador."),og()()()(),Il(354,"tr",14)(355,"td",15)(356,"div",16)(357,"span",17),Qx(358," p-page-actions-layout"),zl(359,"br"),og()()(),Il(360,"td",18)(361,"code",26),Qx(362,"string"),og()(),Il(363,"td",20)(364,"p")(365,"code"),Qx(366,"default"),og()()(),Il(367,"td",21)(368,"em")(369,"strong"),Qx(370,"(opcional)"),og()(),Il(371,"p"),Qx(372,"Define o layout de exibi\xE7\xE3o das a\xE7\xF5es no cabe\xE7alho."),og(),Il(373,"p"),Qx(374,"Aceita valores do enum "),Il(375,"code"),Qx(376,"PoPageActionsLayout"),og(),Qx(377,"."),og(),Il(378,"blockquote")(379,"p"),Qx(380,"Em telas reduzidas (< 480px) as a\xE7\xF5es fora do "),Il(381,"em"),Qx(382,"dropdown"),og(),Qx(383," que possuam a propriedade "),Il(384,"code"),Qx(385,"PoPageAction.icon"),og(),Qx(386,` definida
exibir\xE3o apenas o \xEDcone.`),og()()()(),Il(387,"tr",14)(388,"td",15)(389,"div",16)(390,"span",17),Qx(391," p-page-header-type"),zl(392,"br"),og()()(),Il(393,"td",18)(394,"code",26),Qx(395,"string"),og()(),Il(396,"td",20)(397,"p")(398,"code"),Qx(399,"primary"),og()()(),Il(400,"td",21)(401,"em")(402,"strong"),Qx(403,"(opcional)"),og()(),Il(404,"p"),Qx(405,"Define o tipo de cabe\xE7alho da p\xE1gina."),og(),Il(406,"p"),Qx(407,"Aceita valores do enum "),Il(408,"code"),Qx(409,"PoPageHeaderType"),og(),Qx(410,"."),og()()(),Il(411,"tr",14)(412,"td",15)(413,"div",16)(414,"span",17),Qx(415," p-subtitle"),zl(416,"br"),og()()(),Il(417,"td",18)(418,"code",26),Qx(419,"string"),og()(),Il(420,"td",20),Qx(421,"-"),og(),Il(422,"td",21)(423,"em")(424,"strong"),Qx(425,"(opcional)"),og()(),Il(426,"p"),Qx(427,"Define um texto de apoio ou informa\xE7\xF5es adicionais logo abaixo do t\xEDtulo principal."),og(),Il(428,"p"),Qx(429,"Suporta formata\xE7\xE3o b\xE1sica com as tags "),Il(430,"code"),Qx(431,"<b>"),og(),Qx(432," (negrito), "),Il(433,"code"),Qx(434,"<strong>"),og(),Qx(435," (negrito), "),Il(436,"code"),Qx(437,"<i>"),og(),Qx(438," (it\xE1lico), "),Il(439,"code"),Qx(440,"<em>"),og(),Qx(441,` (it\xE1lico) e
`),Il(442,"code"),Qx(443,"<u>"),og(),Qx(444," (sublinhado)."),og(),Il(445,"p"),Qx(446,"Exemplo:"),og(),Il(447,"pre")(448,"code",31),Qx(449,`subtitle = 'Texto <b>importante</b> com <em>destaque</em> e <u>sublinhado</u>';
`),og()(),Il(450,"blockquote")(451,"p"),Qx(452,"Requer que "),Il(453,"code"),Qx(454,"p-title"),og(),Qx(455," esteja definido."),og()()()(),Il(456,"tr",14)(457,"td",15)(458,"div",16)(459,"span",17),Qx(460," p-title"),zl(461,"br"),og()()(),Il(462,"td",18)(463,"code",26),Qx(464,"string"),og()(),Il(465,"td",20),Qx(466,"-"),og(),Il(467,"td",21)(468,"em")(469,"strong"),Qx(470,"(opcional)"),og()(),Il(471,"p"),Qx(472,"Define o t\xEDtulo principal da p\xE1gina."),og()()()(),Il(473,"h3"),Qx(474,"Interfaces"),og(),Il(475,"h4",33)(476,"code",5),Qx(477,"PoBreadcrumbItem"),og()(),Il(478,"div",2)(479,"p"),Qx(480,"Interface que define cada item do componente "),Il(481,"strong"),Qx(482,"po-breadcrumb"),og(),Qx(483,"."),og()(),Il(484,"h4",10),Qx(485,"Propriedades"),og(),Il(486,"table",11)(487,"tr",12)(488,"th",13),Qx(489,"Nome"),og(),Il(490,"th",13),Qx(491,"Tipo"),og(),Il(492,"th",13),Qx(493,"Descri\xE7\xE3o"),og()(),Il(494,"tr",14)(495,"td",15)(496,"div",16)(497,"span",17),Qx(498," action"),zl(499,"br"),og()()(),Il(500,"td",18)(501,"code",34),Qx(502,"Function"),og()(),Il(503,"td",21)(504,"em")(505,"strong"),Qx(506,"(opcional)"),og()(),Il(507,"p"),Qx(508,"A\xE7\xE3o executada ao clicar no item."),og(),Il(509,"blockquote")(510,"p"),Qx(511,"A fun\xE7\xE3o atribu\xEDda a esta propriedade receber\xE1 o "),Il(512,"em"),Qx(513,"label"),og(),Qx(514," do item como par\xE2metro para execu\xE7\xE3o."),og()()()(),Il(515,"tr",14)(516,"td",15)(517,"div",16)(518,"span",17),Qx(519," label"),zl(520,"br"),og()()(),Il(521,"td",18)(522,"code",26),Qx(523,"string"),og()(),Il(524,"td",21)(525,"p"),Qx(526,"R\xF3tulo do item."),og()()(),Il(527,"tr",14)(528,"td",15)(529,"div",16)(530,"span",17),Qx(531," link"),zl(532,"br"),og()()(),Il(533,"td",18)(534,"code",26),Qx(535,"string"),og()(),Il(536,"td",21)(537,"em")(538,"strong"),Qx(539,"(opcional)"),og()(),Il(540,"p"),Qx(541,"Url do item."),og(),Il(542,"blockquote")(543,"p"),Qx(544,"Caso o item tamb\xE9m contenha uma "),Il(545,"em"),Qx(546,"action"),og(),Qx(547," definida, a prefer\xEAncia de execu\xE7\xE3o ser\xE1 do "),Il(548,"em"),Qx(549,"link"),og(),Qx(550,"."),og()(),Il(551,"blockquote")(552,"p"),Qx(553,`Para o correto funcionamento, \xE9 necess\xE1rio que haja uma rota referenciando seu valor.
`),Il(554,"strong")(555,"a",35),Qx(556,"Veja um exemplo de como criar rotas aqui"),og()(),Qx(557,"."),og()(),Il(558,"blockquote")(559,"p"),Qx(560,"Esta propriedade \xE9 necess\xE1ria para que a propriedade "),Il(561,"code"),Qx(562,"p-favorite-service"),og(),Qx(563," consiga favoritar ou desfavoritar."),og()()()()(),Il(564,"h4",33)(565,"code",5),Qx(566,"PoBreadcrumb"),og()(),Il(567,"div",2)(568,"p"),Qx(569,"Interface que define o "),Il(570,"code"),Qx(571,"po-breadcrumb"),og(),Qx(572,"."),og()(),Il(573,"h4",10),Qx(574,"Propriedades"),og(),Il(575,"table",11)(576,"tr",12)(577,"th",13),Qx(578,"Nome"),og(),Il(579,"th",13),Qx(580,"Tipo"),og(),Il(581,"th",13),Qx(582,"Descri\xE7\xE3o"),og()(),Il(583,"tr",14)(584,"td",15)(585,"div",16)(586,"span",17),Qx(587," favorite"),zl(588,"br"),og()()(),Il(589,"td",18)(590,"code",26),Qx(591,"string"),og()(),Il(592,"td",21)(593,"em")(594,"strong"),Qx(595,"(opcional)"),og()(),Il(596,"p"),Qx(597,"Permite definir uma URL para favoritar ou desfavoritar."),og(),Il(598,"blockquote")(599,"p"),Qx(600,"Para maiores informa\xE7\xF5es verificar a propriedade "),Il(601,"code"),Qx(602,"p-favorite-service"),og(),Qx(603," do componente "),Il(604,"code"),Qx(605,"po-breadcrumb"),og(),Qx(606,"."),og()()()(),Il(607,"tr",14)(608,"td",15)(609,"div",16)(610,"span",17),Qx(611," items"),zl(612,"br"),og()()(),Il(613,"td",18)(614,"code",36),Qx(615,"Array<PoBreadcrumbItem>"),og()(),Il(616,"td",21)(617,"p"),Qx(618,"Lista de itens do "),Il(619,"em"),Qx(620,"breadcrumb"),og(),Qx(621,"."),og(),Il(622,"p")(623,"strong"),Qx(624,"Exemplo:"),og()(),Il(625,"pre")(626,"code"),Qx(627,`{ label: 'Po Portal', link: 'portal' }
`),og()()()(),Il(628,"tr",14)(629,"td",15)(630,"div",16)(631,"span",17),Qx(632," params"),zl(633,"br"),og()()(),Il(634,"td",18)(635,"code",37),Qx(636,"object"),og()(),Il(637,"td",21)(638,"em")(639,"strong"),Qx(640,"(opcional)"),og()(),Il(641,"p"),Qx(642,"Objeto que possibilita o envio de par\xE2metros adicionais \xE0 requisi\xE7\xE3o."),og()()()(),Il(643,"h4",33)(644,"code",5),Qx(645,"PoHelperOptions"),og()(),Il(646,"div",2)(647,"p"),Qx(648,"Interface para configura\xE7\xE3o das op\xE7\xF5es de ajuda ("),Il(649,"em"),Qx(650,"helper"),og(),Qx(651,")."),og()(),Il(652,"h4",10),Qx(653,"Propriedades"),og(),Il(654,"table",11)(655,"tr",12)(656,"th",13),Qx(657,"Nome"),og(),Il(658,"th",13),Qx(659,"Tipo"),og(),Il(660,"th",13),Qx(661,"Descri\xE7\xE3o"),og()(),Il(662,"tr",14)(663,"td",15)(664,"div",16)(665,"span",17),Qx(666," content"),zl(667,"br"),og()()(),Il(668,"td",18)(669,"code",26),Qx(670,"string"),og()(),Il(671,"td",21)(672,"em")(673,"strong"),Qx(674,"(opcional)"),og()(),Il(675,"p"),Qx(676,"Texto explicativo exibido no popover."),og(),Il(677,"p"),Qx(678,"Suporta formata\xE7\xE3o b\xE1sica com as tags "),Il(679,"code"),Qx(680,"<b>"),og(),Qx(681," (negrito), "),Il(682,"code"),Qx(683,"<strong>"),og(),Qx(684," (negrito), "),Il(685,"code"),Qx(686,"<i>"),og(),Qx(687," (it\xE1lico), "),Il(688,"code"),Qx(689,"<em>"),og(),Qx(690,` (it\xE1lico) e
`),Il(691,"code"),Qx(692,"<u>"),og(),Qx(693," (sublinhado)."),og(),Il(694,"p"),Qx(695,"Exemplo:"),og(),Il(696,"pre")(697,"code",31),Qx(698,`content: 'Texto <b>importante</b> com <em>destaque</em> e <u>sublinhado</u>'
`),og()()()(),Il(699,"tr",14)(700,"td",15)(701,"div",16)(702,"span",17),Qx(703," eventOnClick"),zl(704,"br"),og()()(),Il(705,"td",18)(706,"code",34),Qx(707,"Function"),og()(),Il(708,"td",21)(709,"em")(710,"strong"),Qx(711,"(opcional)"),og()(),Il(712,"p"),Qx(713,"Evento disparado ao clicar no \xEDcone do helper."),og(),Il(714,"p"),Qx(715,"O conte\xFAdo do popover n\xE3o \xE9 exibido quando esta propriedade \xE9 definida, para controle total do evento pelo desenvolvedor."),og(),Il(716,"p"),Qx(717,"Pode ser uma fun\xE7\xE3o ou um "),Il(718,"code"),Qx(719,"EventEmitter"),og(),Qx(720,"."),og(),Il(721,"p"),Qx(722,"Exemplo:"),og(),Il(723,"pre")(724,"code"),Qx(725,`eventOnClick: (event) => {
 alert('Clicou no helper');
 console.log(event);
}
`),og()()()(),Il(726,"tr",14)(727,"td",15)(728,"div",16)(729,"span",17),Qx(730," footerAction"),zl(731,"br"),og()()(),Il(732,"td",18)(733,"code",38),Qx(734,`{ label: string; action: Function;
}`),og()(),Il(735,"td",21)(736,"em")(737,"strong"),Qx(738,"(opcional)"),og()(),Il(739,"p"),Qx(740,`A\xE7\xE3o customizada exibida no rodap\xE9 do popover.
Compat\xEDvel apenas com a propriedade type com o valor `),Il(741,"code"),Qx(742,"help"),og(),Qx(743," e desconsiderada quando o type for "),Il(744,"code"),Qx(745,"info"),og(),Qx(746,"."),og(),Il(747,"p"),Qx(748,"Deve ser um objeto com as propriedades:"),og(),Il(749,"ul")(750,"li")(751,"code"),Qx(752,"label"),og(),Qx(753,": Texto do bot\xE3o."),og(),Il(754,"li")(755,"code"),Qx(756,"action"),og(),Qx(757,": Fun\xE7\xE3o executada ao clicar no bot\xE3o."),og()(),Il(758,"p"),Qx(759,"Exemplo:"),og(),Il(760,"pre")(761,"code",31),Qx(762,`{ label: 'Saiba mais', action: this.footerAction.bind(this)) }
`),og()()()(),Il(763,"tr",14)(764,"td",15)(765,"div",16)(766,"span",17),Qx(767," title"),zl(768,"br"),og()()(),Il(769,"td",18)(770,"code",26),Qx(771,"string"),og()(),Il(772,"td",21)(773,"em")(774,"strong"),Qx(775,"(opcional)"),og()(),Il(776,"p"),Qx(777,"T\xEDtulo do helper exibido no popover."),og()()(),Il(778,"tr",14)(779,"td",15)(780,"div",16)(781,"span",17),Qx(782," type"),zl(783,"br"),og()()(),Il(784,"td",18)(785,"code",39),Qx(786,"'info' "),og(),Il(787,"code",40),Qx(788," 'help'"),og()(),Il(789,"td",21)(790,"em")(791,"strong"),Qx(792,"(opcional)"),og()(),Il(793,"p"),Qx(794,"Tipo do \xEDcone exibido: "),Il(795,"code"),Qx(796,"info"),og(),Qx(797," ou "),Il(798,"code"),Qx(799,"help"),og(),Qx(800,"."),og(),Il(801,"p"),Qx(802,"Quando o valor \xE9 "),Il(803,"code"),Qx(804,"info"),og(),Qx(805,", o popover exibe apenas informa\xE7\xF5es e n\xE3o permite a\xE7\xF5es customizadas."),og(),Il(806,"p"),Qx(807,"Quando o valor \xE9 "),Il(808,"code"),Qx(809,"help"),og(),Qx(810,", o popover pode exibir a\xE7\xF5es customizadas no rodap\xE9."),og()()()(),Il(811,"h4",33)(812,"code",5),Qx(813,"PoPageAction"),og()(),Il(814,"div",2)(815,"p"),Qx(816,"Interface para as a\xE7\xF5es dos componentes "),Il(817,"code"),Qx(818,"po-page-default"),og(),Qx(819," e "),Il(820,"code"),Qx(821,"po-page-list"),og(),Qx(822,"."),og(),Il(823,"p"),Qx(824,"As a\xE7\xF5es podem ser exibidas como bot\xF5es no cabe\xE7alho ou agrupadas em um "),Il(825,"em"),Qx(826,"dropdown"),og(),Qx(827,`,
conforme o `),Il(828,"code"),Qx(829,"PoPageActionsLayout"),og(),Qx(830," e o tamanho da tela."),og(),Il(831,"blockquote")(832,"p"),Qx(833,"As propriedades "),Il(834,"code"),Qx(835,"separator"),og(),Qx(836,", "),Il(837,"code"),Qx(838,"selected"),og(),Qx(839," e "),Il(840,"code"),Qx(841,"subItems"),og(),Qx(842,` possuem efeito apenas quando
a a\xE7\xE3o \xE9 exibida dentro do `),Il(843,"em"),Qx(844,"dropdown"),og(),Qx(845,"."),og()()(),Il(846,"h4",10),Qx(847,"Propriedades"),og(),Il(848,"table",11)(849,"tr",12)(850,"th",13),Qx(851,"Nome"),og(),Il(852,"th",13),Qx(853,"Tipo"),og(),Il(854,"th",13),Qx(855,"Descri\xE7\xE3o"),og()(),Il(856,"tr",14)(857,"td",15)(858,"div",16)(859,"span",17),Qx(860," action"),zl(861,"br"),og()()(),Il(862,"td",18)(863,"code",34),Qx(864,"Function"),og()(),Il(865,"td",21)(866,"em")(867,"strong"),Qx(868,"(opcional)"),og()(),Il(869,"p"),Qx(870,"A\xE7\xE3o que ser\xE1 executada, sendo poss\xEDvel passar o nome ou a refer\xEAncia da fun\xE7\xE3o."),og(),Il(871,"p"),Qx(872,"A action tamb\xE9m pode ser executada para o agrupador de subitens quando a a\xE7\xE3o possuir "),Il(873,"code"),Qx(874,"subItems"),og(),Qx(875,"."),og(),Il(876,"blockquote")(877,"p"),Qx(878,"Para que a fun\xE7\xE3o seja executada no contexto do componente, utilize "),Il(879,"em"),Qx(880,"bind"),og(),Qx(881,`:
`),Il(882,"code"),Qx(883,"action: this.myFunction.bind(this)"),og()()()()(),Il(884,"tr",14)(885,"td",15)(886,"div",16)(887,"span",17),Qx(888," disabled"),zl(889,"br"),og()()(),Il(890,"td",18)(891,"code",41),Qx(892,"boolean "),og(),Il(893,"code",34),Qx(894," Function"),og()(),Il(895,"td",21)(896,"em")(897,"strong"),Qx(898,"(opcional)"),og()(),Il(899,"p"),Qx(900,"Desabilita a a\xE7\xE3o. Aceita um valor booleano ou uma fun\xE7\xE3o que retorna booleano."),og()()(),Il(901,"tr",14)(902,"td",15)(903,"div",16)(904,"span",17),Qx(905," icon"),zl(906,"br"),og()()(),Il(907,"td",18)(908,"code",26),Qx(909,"string "),og(),Il(910,"code",42),Qx(911," TemplateRef<void>"),og()(),Il(912,"td",21)(913,"em")(914,"strong"),Qx(915,"(opcional)"),og()(),Il(916,"p"),Qx(917,"\xCDcone exibido ao lado esquerdo do r\xF3tulo."),og(),Il(918,"p"),Qx(919,"Aceita \xEDcones da "),Il(920,"a",43),Qx(921,"Biblioteca de \xEDcones"),og(),Qx(922,`, fontes externas (ex: Font Awesome)
ou um `),Il(923,"code"),Qx(924,"TemplateRef"),og(),Qx(925," para \xEDcones customizados."),og(),Il(926,"pre")(927,"code"),Qx(928,`{ label: 'A\xE7\xE3o', icon: 'an an-newspaper' }
`),og()()()(),Il(929,"tr",14)(930,"td",15)(931,"div",16)(932,"span",17),Qx(933," kind"),zl(934,"br"),og()()(),Il(935,"td",18)(936,"code",26),Qx(937,"string"),og()(),Il(938,"td",21)(939,"em")(940,"strong"),Qx(941,"(opcional)"),og()(),Il(942,"p"),Qx(943,"Define o estilo visual da a\xE7\xE3o quando exibida como bot\xE3o fora do "),Il(944,"em"),Qx(945,"dropdown"),og(),Qx(946,"."),og(),Il(947,"p"),Qx(948,"Valores permitidos:"),og(),Il(949,"ul")(950,"li")(951,"code"),Qx(952,"primary"),og(),Qx(953,": bot\xE3o com maior destaque visual."),og(),Il(954,"li")(955,"code"),Qx(956,"secondary"),og(),Qx(957,": estilo padr\xE3o."),og()(),Il(958,"blockquote")(959,"p"),Qx(960,"Valores inv\xE1lidos s\xE3o ignorados e o componente aplica o estilo padr\xE3o da posi\xE7\xE3o."),og()(),Il(961,"blockquote")(962,"p"),Qx(963,"Somente uma a\xE7\xE3o pode ter "),Il(964,"code"),Qx(965,"kind"),og(),Qx(966," igual a "),Il(967,"code"),Qx(968,"primary"),og(),Qx(969,". Caso mais de uma defina "),Il(970,"code"),Qx(971,"primary"),og(),Qx(972,`,
apenas a primeira ser\xE1 mantida e as demais receber\xE3o `),Il(973,"code"),Qx(974,"secondary"),og(),Qx(975,"."),og()(),Il(976,"blockquote")(977,"p"),Qx(978,"Quando n\xE3o definido, o estilo \xE9 determinado pelo "),Il(979,"code"),Qx(980,"PoPageActionsLayout"),og(),Qx(981,"."),og()()()(),Il(982,"tr",14)(983,"td",15)(984,"div",16)(985,"span",17),Qx(986," label"),zl(987,"br"),og()()(),Il(988,"td",18)(989,"code",26),Qx(990,"string"),og()(),Il(991,"td",21)(992,"p"),Qx(993,"R\xF3tulo da a\xE7\xE3o."),og(),Il(994,"p"),Qx(995,"A label tamb\xE9m pode representar o agrupador de subitens quando a a\xE7\xE3o possuir "),Il(996,"code"),Qx(997,"subItems"),og(),Qx(998,"."),og()()(),Il(999,"tr",14)(1e3,"td",15)(1001,"div",16)(1002,"span",17),Qx(1003," selected"),zl(1004,"br"),og()()(),Il(1005,"td",18)(1006,"code",41),Qx(1007,"boolean"),og()(),Il(1008,"td",21)(1009,"em")(1010,"strong"),Qx(1011,"(opcional)"),og()(),Il(1012,"p"),Qx(1013,"Define se a a\xE7\xE3o est\xE1 selecionada."),og()()(),Il(1014,"tr",14)(1015,"td",15)(1016,"div",16)(1017,"span",17),Qx(1018," separator"),zl(1019,"br"),og()()(),Il(1020,"td",18)(1021,"code",41),Qx(1022,"boolean"),og()(),Il(1023,"td",21)(1024,"em")(1025,"strong"),Qx(1026,"(opcional)"),og()(),Il(1027,"p"),Qx(1028,"Atribui uma linha separadora acima do item."),og()()(),Il(1029,"tr",14)(1030,"td",15)(1031,"div",16)(1032,"span",17),Qx(1033," subItems"),zl(1034,"br"),og()()(),Il(1035,"td",18)(1036,"code",44),Qx(1037,"Array<PoPopupAction>"),og()(),Il(1038,"td",21)(1039,"em")(1040,"strong"),Qx(1041,"(opcional)"),og()(),Il(1042,"p"),Qx(1043,"Define uma lista de subitens para cria\xE7\xE3o de menus aninhados."),og(),Il(1044,"p"),Qx(1045,`Ao definir esta propriedade, o item exibir\xE1 um \xEDcone indicador de subn\xEDvel.
Recomenda-se utilizar no m\xE1ximo tr\xEAs n\xEDveis hier\xE1rquicos para garantir a usabilidade.`),og(),Il(1046,"blockquote")(1047,"p"),Qx(1048,"As propriedades "),Il(1049,"code"),Qx(1050,"disabled"),og(),Qx(1051,", "),Il(1052,"code"),Qx(1053,"type"),og(),Qx(1054," e "),Il(1055,"code"),Qx(1056,"visible"),og(),Qx(1057," n\xE3o s\xE3o aplicadas visualmente ao item agrupador."),og()(),Il(1058,"blockquote")(1059,"p"),Qx(1060,"Quando "),Il(1061,"code"),Qx(1062,"url"),og(),Qx(1063," \xE9 informada em um agrupador, o redirecionamento ter\xE1 prioridade e os subitens n\xE3o ser\xE3o abertos."),og()(),Il(1064,"blockquote")(1065,"p"),Qx(1066,"Em subn\xEDveis aninhados, o "),Il(1067,"code"),Qx(1068,"icon"),og(),Qx(1069," do agrupador \xE9 substitu\xEDdo pelo indicador de navega\xE7\xE3o (seta)."),og()()()(),Il(1070,"tr",14)(1071,"td",15)(1072,"div",16)(1073,"span",17),Qx(1074," type"),zl(1075,"br"),og()()(),Il(1076,"td",18)(1077,"code",26),Qx(1078,"string"),og()(),Il(1079,"td",21)(1080,"em")(1081,"strong"),Qx(1082,"(opcional)"),og()(),Il(1083,"p"),Qx(1084,"Define a cor do item."),og(),Il(1085,"p"),Qx(1086,"Valores v\xE1lidos:"),og(),Il(1087,"ul")(1088,"li")(1089,"code"),Qx(1090,"default"),og()(),Il(1091,"li")(1092,"code"),Qx(1093,"danger"),og()()()()(),Il(1094,"tr",14)(1095,"td",15)(1096,"div",16)(1097,"span",17),Qx(1098," url"),zl(1099,"br"),og()()(),Il(1100,"td",18)(1101,"code",26),Qx(1102,"string"),og()(),Il(1103,"td",21)(1104,"em")(1105,"strong"),Qx(1106,"(opcional)"),og()(),Il(1107,"p"),Qx(1108,"URL para redirecionamento. Aceita rotas internas e links externos."),og(),Il(1109,"p"),Qx(1110,`A url tamb\xE9m pode ser configurada para o agrupador de subitens.
Entretanto, quando a `),Il(1111,"code"),Qx(1112,"url"),og(),Qx(1113," \xE9 informada em um agrupador, o clique "),Il(1114,"strong"),Qx(1115,"n\xE3o abrir\xE1 os subitens"),og(),Qx(1116,`, pois o item ser\xE1
tratado como um link e o redirecionamento ter\xE1 prioridade sobre a exibi\xE7\xE3o da lista.`),og(),Il(1117,"blockquote")(1118,"p"),Qx(1119,"Quando informada, tem prioridade sobre a propriedade "),Il(1120,"code"),Qx(1121,"action"),og(),Qx(1122,"."),og()()()(),Il(1123,"tr",14)(1124,"td",15)(1125,"div",16)(1126,"span",17),Qx(1127," visible"),zl(1128,"br"),og()()(),Il(1129,"td",18)(1130,"code",41),Qx(1131,"boolean "),og(),Il(1132,"code",34),Qx(1133," Function"),og()(),Il(1134,"td",21)(1135,"em")(1136,"strong"),Qx(1137,"(opcional)"),og()(),Il(1138,"p"),Qx(1139,"Define a visibilidade da a\xE7\xE3o. Aceita um valor booleano ou uma fun\xE7\xE3o que retorna booleano."),og()()()(),Il(1140,"h4",33)(1141,"code",5),Qx(1142,"PoPageDefaultLiterals"),og()(),Il(1143,"div",2)(1144,"p"),Qx(1145,"Interface para defini\xE7\xE3o das literais usadas no "),Il(1146,"code"),Qx(1147,"po-page-default"),og(),Qx(1148,"."),og()(),Il(1149,"h4",10),Qx(1150,"Propriedades"),og(),Il(1151,"table",11)(1152,"tr",12)(1153,"th",13),Qx(1154,"Nome"),og(),Il(1155,"th",13),Qx(1156,"Tipo"),og(),Il(1157,"th",13),Qx(1158,"Descri\xE7\xE3o"),og()(),Il(1159,"tr",14)(1160,"td",15)(1161,"div",16)(1162,"span",17),Qx(1163," otherActions"),zl(1164,"br"),og()()(),Il(1165,"td",18)(1166,"code",26),Qx(1167,"string"),og()(),Il(1168,"td",21)(1169,"em")(1170,"strong"),Qx(1171,"(opcional)"),og()(),Il(1172,"p"),Qx(1173,"Legenda do "),Il(1174,"code"),Qx(1175,"po-dropdown"),og(),Qx(1176," de a\xE7\xF5es."),og()()()(),Il(1177,"h3"),Qx(1178,"Enums"),og(),Il(1179,"h4",4)(1180,"code",5),Qx(1181,"PoPageActionsLayout"),og()(),Il(1182,"div",2)(1183,"p"),Qx(1184,"Define os layouts de exibi\xE7\xE3o das a\xE7\xF5es no cabe\xE7alho do "),Il(1185,"code"),Qx(1186,"po-page-default"),og(),Qx(1187,"."),og(),Il(1188,"blockquote")(1189,"p"),Qx(1190,"Compat\xEDvel com todos os valores de "),Il(1191,"code"),Qx(1192,"PoPageHeaderType"),og(),Qx(1193,"."),og()()(),Il(1194,"h4",10),Qx(1195,"Propriedades"),og(),Il(1196,"table",11)(1197,"tr",12)(1198,"th",13),Qx(1199,"Nome"),og(),Il(1200,"th",13),Qx(1201,"Descri\xE7\xE3o"),og()(),Il(1202,"tr",14)(1203,"td",15)(1204,"div",16)(1205,"span",17),Qx(1206," default"),zl(1207,"br"),og()()(),Il(1208,"td",21)(1209,"p"),Qx(1210,"Exibe as a\xE7\xF5es como bot\xF5es (at\xE9 3 em desktop e 2 em mobile), agrupando as demais no "),Il(1211,"em"),Qx(1212,"dropdown"),og(),Qx(1213,"."),og(),Il(1214,"p"),Qx(1215,"Quando "),Il(1216,"code"),Qx(1217,"PoPageAction.kind"),og(),Qx(1218," n\xE3o \xE9 definido, a primeira a\xE7\xE3o recebe o estilo "),Il(1219,"code"),Qx(1220,"primary"),og(),Qx(1221,`
e as demais recebem `),Il(1222,"code"),Qx(1223,"secondary"),og(),Qx(1224,"."),og()()(),Il(1225,"tr",14)(1226,"td",15)(1227,"div",16)(1228,"span",17),Qx(1229," dropdown"),zl(1230,"br"),og()()(),Il(1231,"td",21)(1232,"p"),Qx(1233,"Agrupa todas as a\xE7\xF5es exclusivamente dentro do menu "),Il(1234,"em"),Qx(1235,"dropdown"),og(),Qx(1236,"."),og()()(),Il(1237,"tr",14)(1238,"td",15)(1239,"div",16)(1240,"span",17),Qx(1241," mixed"),zl(1242,"br"),og()()(),Il(1243,"td",21)(1244,"p"),Qx(1245,"Exibe a primeira a\xE7\xE3o como bot\xE3o e agrupa as demais no "),Il(1246,"em"),Qx(1247,"dropdown"),og(),Qx(1248,"."),og()()()(),Il(1249,"h4",4)(1250,"code",5),Qx(1251,"PoPageHeaderType"),og()(),Il(1252,"div",2)(1253,"p"),Qx(1254,"Define os tipos de cabe\xE7alho dispon\xEDveis no "),Il(1255,"code"),Qx(1256,"po-page-default"),og(),Qx(1257,"."),og()(),Il(1258,"h4",10),Qx(1259,"Propriedades"),og(),Il(1260,"table",11)(1261,"tr",12)(1262,"th",13),Qx(1263,"Nome"),og(),Il(1264,"th",13),Qx(1265,"Descri\xE7\xE3o"),og()(),Il(1266,"tr",14)(1267,"td",15)(1268,"div",16)(1269,"span",17),Qx(1270," primary"),zl(1271,"br"),og()()(),Il(1272,"td",21)(1273,"p"),Qx(1274,"Layout padr\xE3o com suporte a "),Il(1275,"code"),Qx(1276,"p-breadcrumb"),og(),Qx(1277,"."),og()()(),Il(1278,"tr",14)(1279,"td",15)(1280,"div",16)(1281,"span",17),Qx(1282," secondary"),zl(1283,"br"),og()()(),Il(1284,"td",21)(1285,"p"),Qx(1286,"Exibe um bot\xE3o de retorno ao lado do t\xEDtulo."),og(),Il(1287,"blockquote")(1288,"p"),Qx(1289,"Incompat\xEDvel com "),Il(1290,"code"),Qx(1291,"p-breadcrumb"),og(),Qx(1292,"."),og()()()(),Il(1293,"tr",14)(1294,"td",15)(1295,"div",16)(1296,"span",17),Qx(1297," tertiary"),zl(1298,"br"),og()()(),Il(1299,"td",21)(1300,"p"),Qx(1301,"Layout simplificado sem bot\xE3o de retorno."),og(),Il(1302,"blockquote")(1303,"p"),Qx(1304,"Incompat\xEDvel com "),Il(1305,"code"),Qx(1306,"p-breadcrumb"),og(),Qx(1307,"."),og()()()()()());},dependencies:[Ka],encapsulation:2})}return l})();var De=(()=>{class l{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(d,r){this.route=d,this.router=r;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let r=d.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:"merge"}),this.activeTab=d;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(r){return new(r||l)(C(Xn),C(En))};static \u0275cmp=Un({type:l,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Page Default",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,i){r&1&&(Il(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return i.changeTab("doc")}),zl(3,"sample-po-page-default-doc"),og(),Il(4,"po-tab",3),ft("p-click",function(){return i.changeTab("web")}),zl(5,"sample-po-page-default-basic-view")(6,"sample-po-page-default-labs-view")(7,"sample-po-page-default-dashboard-view"),og()()()),r&2&&(nw("p-actions",i.actions),Lp(2),nw("p-active",i.activeTab==="doc"),Lp(2),nw("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[cNe,qme,Yme,xe,Pe,Ce,we],encapsulation:2})}return l})();var Re=[{path:"",component:De}],_e=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275mod=fe({type:l});static \u0275inj=ue({imports:[uL.forChild(Re),uL]})}return l})();var Dt=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275mod=fe({type:l});static \u0275inj=ue({imports:[sr,_e]})}return l})();export{Dt as DocPoPageDefaultModule};