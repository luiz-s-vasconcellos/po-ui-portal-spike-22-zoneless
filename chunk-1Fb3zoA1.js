import {f as fe,u as ue,s as sr,a as uL,C,c3 as Xn,E as En,U as Un,b as f,aW as Yp,e as s,r as r$1,w,c9 as Yhe,Y as aNe,_ as dme,H as Il,a2 as JE,R as og,T as nw,bM as dN,a7 as lN,an as DO,aH as Ka,b8 as qme,b9 as Yme,J as zl,q as Qx,a1 as ft,A as Lp,ar as Ux,au as dg,bs as uN,aX as G9,aF as $9,aY as z9,aG as mk,aZ as hk,b0 as Qt,b1 as mv,c4 as C3,b4 as O3,cp as Hhe,c8 as Dde,aJ as qhe,dj as ume,aB as Dx,aM as ww,aN as QA,bd as Ax,aO as Ew,aP as e0,cn as a3,bI as Sa,b6 as Yo,$ as uNe,dk as AO,X as we,av as Gl,aw as co,ax as lo,a3 as cNe,a4 as mN,cH as rN,a5 as yN,aD as Xy,aT as eN,aE as Qy}from'./main-QSTLMRDK.js';var Oe=()=>({name:"Registro 1",email:"register@po-ui.com"}),He=()=>({name:"Registro 2",email:"register2@po-ui.com"}),Be=(a,C)=>[a,C];function je(a,C){if(a&1&&(Il(0,"div",2),zl(1,"po-info",3),og()),a&2){let o=C.$implicit;Lp(),nw("p-value",o.email);}}var _e=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-list-view-basic"]],standalone:false,decls:2,vars:6,consts:[["p-property-title","name",3,"p-items"],["p-list-view-content-template",""],[1,"po-row"],["p-label","Email",1,"po-md-12",3,"p-value"]],template:function(l,n){l&1&&(Il(0,"po-list-view",0),JE(1,je,2,1,"ng-template",1),og()),l&2&&nw("p-items",dN(3,Be,lN(1,Oe),lN(2,He)));},dependencies:[Yhe,aNe,dme],encapsulation:2,changeDetection:1})}return a})();var ze=a=>({"docs-sample-code-tabs":a}),Ve=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-list-view-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO List View Basic"),og(),Il(4,"a",2),ft("click",function(){return n.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-list-view-basic/sample-po-list-view-basic.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-list-view
  p-property-title="name"
  [p-items]="[
    { name: 'Registro 1', email: 'register@po-ui.com' },
    { name: 'Registro 2', email: 'register2@po-ui.com' }
  ]"
>
  <ng-template p-list-view-content-template let-item>
    <div class="po-row">
      <po-info class="po-md-12" p-label="Email" [p-value]="item.email"></po-info>
    </div>
  </ng-template>
</po-list-view>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-list-view-basic/sample-po-list-view-basic.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-list-view-basic',
  templateUrl: './sample-po-list-view-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoListViewBasicComponent {}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-list-view-basic"),og(),zl(23,"hr")),l&2&&(Lp(5),Ux("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,ze,n.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,_e],encapsulation:2})}return a})();function We(a,C){if(a&1&&(Il(0,"div",5),zl(1,"po-info",22)(2,"po-info",23)(3,"po-info",24)(4,"po-info",25),og()),a&2){let o=C.$implicit;Lp(),nw("p-value",o.name),Lp(),nw("p-value",o.email),Lp(),nw("p-value",o.location),Lp(),nw("p-value",o.phone);}}function Re(a,C){if(a&1&&(Il(0,"div",5),zl(1,"po-info",26)(2,"po-info",27),og()),a&2){let o=C.$implicit;Lp(),nw("p-value",o.company),Lp(),nw("p-value",o.zipCode);}}var De=(()=>{class a{poNotification=f(Yp);action;actions;componentsSize="medium";customLiterals;height;items;literals;properties;propertyLink;propertyLinkValue;propertyTitle;titleAction;propertiesOptions=[{value:"select",label:"Select"},{value:"hideSelectAll",label:"Hide Select All",disabled:true},{value:"showMoreDisabled",label:"Show More Disabled"}];actionOptions=[{label:"Disabled",value:"disabled"},{label:"Separator",value:"separator"},{label:"Selected",value:"selected"},{label:"Visible",value:"visible"}];componentsSizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];iconOptions=[{value:"an an-newspaper",label:"an an-newspaper"},{value:"an an-magnifying-glass",label:"an an-magnifying-glass"},{value:"an an-globe",label:"an an-globe"},{value:"fa fa-calculator",label:"fa fa-calculator"},{value:"fa fa-podcast",label:"fa fa-podcast"}];propertyTitleOptions=[{value:"name",label:"name"},{value:"email",label:"email"},{value:"phone",label:"phone"},{value:"location",label:"location"}];typeOptions=[{label:"Default",value:"default"},{label:"Danger",value:"danger"}];ngOnInit(){this.restore();}addAction(o){let l=Object.assign({},o);l.action=l.action?this.showAction.bind(this,l.action):void 0,this.actions.push(l),this.restoreActionForm();}addItem(){this.items.push(this.generateNewItem(this.items.length+1));}changeAction(o){this.titleAction=o;}changeActionOptions(){this.propertiesOptions=this.propertiesOptions.map(o=>o.value==="hideSelectAll"?s(r$1({},o),{disabled:!this.properties.includes("select")}):o);}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals);}catch(o){this.customLiterals=void 0;}}restore(){this.actions=[],this.componentsSize="medium",this.items=[],this.height=void 0,this.literals="",this.properties=[],this.propertyLink="url",this.propertyLinkValue="",this.propertyTitle="",this.titleAction="",this.restoreActionForm();}showMore(){this.addItem();}generateNewItem(o){return {name:`Register ${o}`,email:`register${o}@po-ui.com`,phone:`(55) ${o}234567`,location:"Brazil",company:`Company ${o}`,url:this.propertyLinkValue,zipCode:`${o}221`}}restoreActionForm(){this.action={label:"",visible:null};}showAction(o){this.poNotification.success(`Action clicked: ${o}`);}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-list-view-labs"]],standalone:false,decls:35,vars:30,consts:[["propertiesForm","ngForm"],["actionForm","ngForm"],[3,"p-show-more","p-title-action","p-actions","p-components-size","p-height","p-hide-select-all","p-items","p-literals","p-property-link","p-property-title","p-select","p-show-more-disabled"],["p-list-view-content-template",""],["p-list-view-detail-template",""],[1,"po-row"],["p-label","Add Item",1,"po-md-3",3,"p-click"],["p-label","Action",1,"po-md-6",3,"p-value"],["name","propertyTitle","p-help","Ex.: email","p-label","Property title",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel","p-options"],["name","height","p-help","Ex.: 200","p-label","Height",1,"po-md-6","po-lg-3",3,"ngModelChange","p-change","ngModel"],["name","propertyLinkValue","p-help",'Ex.: "http://po.com.br"',"p-label","Title Link",1,"po-md-6",3,"ngModelChange","ngModel"],["name","literals","p-help",'Ex.: { "hideDetails": "Esconder detalhes", "showDetails": "Ver detalhes", "loadMoreData": "Ver mais", "noData": "Sem itens cadastrados" }',"p-label","Literals",1,"po-md-12","po-lg-6",3,"ngModelChange","p-change","ngModel"],["name","size","p-label","Components size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","properties","p-columns","4","p-label","Properties","p-help",'To enable the "Hide Select All" option, you must select the "Select" option first.',1,"po-md-12",3,"ngModelChange","p-change","ngModel","p-options"],["name","actionAction","p-clean","","p-label","Action",1,"po-md-6",3,"ngModelChange","ngModel"],["name","actionLabel","p-label","Label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","actionURL","p-label","URL",1,"po-md-6",3,"ngModelChange","ngModel"],["name","type","p-label","Type",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel","p-options"],["name","icon","p-label","Icon",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel","p-options"],["name","action","p-columns","4","p-indeterminate","","p-label","Action properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Add Action",1,"po-md-4","po-lg-3",3,"p-click","p-disabled"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"],["p-label","Name",1,"po-md-6","po-lg-3",3,"p-value"],["p-label","Email",1,"po-md-6","po-lg-3",3,"p-value"],["p-label","Location",1,"po-md-6","po-lg-3",3,"p-value"],["p-label","Phone",1,"po-md-6","po-lg-3",3,"p-value"],["p-label","Company",1,"po-md-6","po-lg-3",3,"p-value"],["p-label","Zip Code",1,"po-md-6","po-lg-3",3,"p-value"]],template:function(l,n){if(l&1){let d=Dx();Il(0,"po-list-view",2),ft("p-show-more",function(){return n.showMore()})("p-title-action",function(){return n.changeAction("p-title-action")}),JE(1,We,5,4,"ng-template",3)(2,Re,3,2,"ng-template",4),og(),zl(3,"po-divider"),Il(4,"div",5)(5,"po-button",6),ft("p-click",function(){return n.addItem()}),og()(),zl(6,"po-divider"),Il(7,"div",5),zl(8,"po-info",7),og(),zl(9,"po-divider"),Il(10,"form",null,0)(12,"div",5)(13,"po-select",8),ww("ngModelChange",function(p){return Xy(d),eN(n.propertyTitle,p)||(n.propertyTitle=p),Qy(p)}),og(),QA(),Il(14,"po-number",9),ww("ngModelChange",function(p){return Xy(d),eN(n.height,p)||(n.height=p),Qy(p)}),ft("p-change",function(){return n.changeLiterals()}),og(),QA(),Il(15,"po-input",10),ww("ngModelChange",function(p){return Xy(d),eN(n.propertyLinkValue,p)||(n.propertyLinkValue=p),Qy(p)}),og(),QA(),Il(16,"po-input",11),ww("ngModelChange",function(p){return Xy(d),eN(n.literals,p)||(n.literals=p),Qy(p)}),ft("p-change",function(){return n.changeLiterals()}),og(),QA(),Il(17,"po-radio-group",12),ww("ngModelChange",function(p){return Xy(d),eN(n.componentsSize,p)||(n.componentsSize=p),Qy(p)}),og(),QA(),og(),Il(18,"div",5)(19,"po-checkbox-group",13),ww("ngModelChange",function(p){return Xy(d),eN(n.properties,p)||(n.properties=p),Qy(p)}),ft("p-change",function(){return n.changeActionOptions()}),og(),QA(),og()(),zl(20,"po-divider"),Il(21,"form",null,1)(23,"div",5)(24,"po-input",14),ww("ngModelChange",function(p){return Xy(d),eN(n.action.action,p)||(n.action.action=p),Qy(p)}),og(),QA(),Il(25,"po-input",15),ww("ngModelChange",function(p){return Xy(d),eN(n.action.label,p)||(n.action.label=p),Qy(p)}),og(),QA(),Il(26,"po-input",16),ww("ngModelChange",function(p){return Xy(d),eN(n.action.url,p)||(n.action.url=p),Qy(p)}),og(),QA(),Il(27,"po-select",17),ww("ngModelChange",function(p){return Xy(d),eN(n.action.type,p)||(n.action.type=p),Qy(p)}),og(),QA(),Il(28,"po-select",18),ww("ngModelChange",function(p){return Xy(d),eN(n.action.icon,p)||(n.action.icon=p),Qy(p)}),og(),QA(),Il(29,"po-checkbox-group",19),ww("ngModelChange",function(p){return Xy(d),eN(n.action,p)||(n.action=p),Qy(p)}),og(),QA(),og(),Il(30,"div",5)(31,"po-button",20),ft("p-click",function(){return n.addAction(n.action)}),og()()(),zl(32,"po-divider"),Il(33,"div",5)(34,"po-button",21),ft("p-click",function(){return Xy(d),Ax(22).reset(),Qy(n.restore())}),og()();}if(l&2){let d=Ax(22);nw("p-actions",n.actions)("p-components-size",n.componentsSize)("p-height",n.height)("p-hide-select-all",n.properties.includes("hideSelectAll"))("p-items",n.items)("p-literals",n.customLiterals)("p-property-link",n.propertyLink)("p-property-title",n.propertyTitle)("p-select",n.properties.includes("select"))("p-show-more-disabled",n.properties.includes("showMoreDisabled")),Lp(8),nw("p-value",n.titleAction),Lp(5),Ew("ngModel",n.propertyTitle),nw("p-options",n.propertyTitleOptions),e0(),Lp(),Ew("ngModel",n.height),e0(),Lp(),Ew("ngModel",n.propertyLinkValue),e0(),Lp(),Ew("ngModel",n.literals),e0(),Lp(),Ew("ngModel",n.componentsSize),nw("p-options",n.componentsSizeOptions),e0(),Lp(2),Ew("ngModel",n.properties),nw("p-options",n.propertiesOptions),e0(),Lp(5),Ew("ngModel",n.action.action),e0(),Lp(),Ew("ngModel",n.action.label),e0(),Lp(),Ew("ngModel",n.action.url),e0(),Lp(),Ew("ngModel",n.action.type),nw("p-options",n.typeOptions),e0(),Lp(),Ew("ngModel",n.action.icon),nw("p-options",n.iconOptions),e0(),Lp(),Ew("ngModel",n.action),nw("p-options",n.actionOptions),e0(),Lp(2),nw("p-disabled",d.invalid);}},dependencies:[G9,$9,z9,mk,hk,Qt,mv,C3,O3,Hhe,Dde,qhe,Yhe,aNe,dme,ume],encapsulation:2,changeDetection:1})}return a})();var Ue=a=>({"docs-sample-code-tabs":a}),Ae=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-list-view-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO List View Labs"),og(),Il(4,"a",2),ft("click",function(){return n.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-list-view-labs/sample-po-list-view-labs.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-list-view
  [p-actions]="actions"
  [p-components-size]="componentsSize"
  [p-height]="height"
  [p-hide-select-all]="properties.includes('hideSelectAll')"
  [p-items]="items"
  [p-literals]="customLiterals"
  [p-property-link]="propertyLink"
  [p-property-title]="propertyTitle"
  [p-select]="properties.includes('select')"
  [p-show-more-disabled]="properties.includes('showMoreDisabled')"
  (p-show-more)="showMore()"
  (p-title-action)="changeAction('p-title-action')"
>
  <ng-template p-list-view-content-template let-item>
    <div class="po-row">
      <po-info class="po-md-6 po-lg-3" p-label="Name" [p-value]="item.name"> </po-info>

      <po-info class="po-md-6 po-lg-3" p-label="Email" [p-value]="item.email"> </po-info>

      <po-info class="po-md-6 po-lg-3" p-label="Location" [p-value]="item.location"> </po-info>

      <po-info class="po-md-6 po-lg-3" p-label="Phone" [p-value]="item.phone"> </po-info>
    </div>
  </ng-template>

  <ng-template p-list-view-detail-template let-item>
    <div class="po-row">
      <po-info class="po-md-6 po-lg-3" p-label="Company" [p-value]="item.company"> </po-info>

      <po-info class="po-md-6 po-lg-3" p-label="Zip Code" [p-value]="item.zipCode"> </po-info>
    </div>
  </ng-template>
</po-list-view>

<po-divider />

<div class="po-row">
  <po-button class="po-md-3" p-label="Add Item" (p-click)="addItem()"> </po-button>
</div>

<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Action" [p-value]="titleAction"> </po-info>
</div>

<po-divider />

<form #propertiesForm="ngForm">
  <div class="po-row">
    <po-select
      class="po-md-6 po-lg-3"
      name="propertyTitle"
      [(ngModel)]="propertyTitle"
      p-help="Ex.: email"
      p-label="Property title"
      [p-options]="propertyTitleOptions"
    >
    </po-select>

    <po-number
      class="po-md-6 po-lg-3"
      name="height"
      [(ngModel)]="height"
      p-help="Ex.: 200"
      p-label="Height"
      (p-change)="changeLiterals()"
    >
    </po-number>

    <po-input
      class="po-md-6"
      name="propertyLinkValue"
      [(ngModel)]="propertyLinkValue"
      p-help='Ex.: "http://po.com.br"'
      p-label="Title Link"
    >
    </po-input>

    <po-input
      class="po-md-12 po-lg-6"
      name="literals"
      [(ngModel)]="literals"
      p-help='Ex.: { "hideDetails": "Esconder detalhes", "showDetails": "Ver detalhes", "loadMoreData": "Ver mais", "noData": "Sem itens cadastrados" }'
      p-label="Literals"
      (p-change)="changeLiterals()"
    >
    </po-input>

    <po-radio-group
      class="po-lg-6"
      name="size"
      [(ngModel)]="componentsSize"
      p-label="Components size"
      p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
      [p-options]="componentsSizeOptions"
    >
    </po-radio-group>
  </div>

  <div class="po-row">
    <po-checkbox-group
      class="po-md-12"
      name="properties"
      [(ngModel)]="properties"
      p-columns="4"
      p-label="Properties"
      p-help='To enable the "Hide Select All" option, you must select the "Select" option first.'
      [p-options]="propertiesOptions"
      (p-change)="changeActionOptions()"
    >
    </po-checkbox-group>
  </div>
</form>

<po-divider />

<form #actionForm="ngForm">
  <div class="po-row">
    <po-input class="po-md-6" name="actionAction" [(ngModel)]="action.action" p-clean p-label="Action"> </po-input>

    <po-input class="po-md-6" name="actionLabel" [(ngModel)]="action.label" p-label="Label" p-required> </po-input>

    <po-input class="po-md-6" name="actionURL" [(ngModel)]="action.url" p-label="URL"> </po-input>

    <po-select class="po-md-6 po-lg-3" name="type" [(ngModel)]="action.type" p-label="Type" [p-options]="typeOptions">
    </po-select>

    <po-select class="po-md-6 po-lg-3" name="icon" [(ngModel)]="action.icon" p-label="Icon" [p-options]="iconOptions">
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
      class="po-md-4 po-lg-3"
      p-label="Add Action"
      [p-disabled]="actionForm.invalid"
      (p-click)="addAction(action)"
    >
    </po-button>
  </div>
</form>

<po-divider />

<div class="po-row">
  <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="actionForm.reset(); restore()"> </po-button>
</div>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-list-view-labs/sample-po-list-view-labs.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

import {
  PoCheckboxGroupOption,
  PoListViewAction,
  PoListViewLiterals,
  PoNotificationService,
  PoRadioGroupOption,
  PoSelectOption
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-list-view-labs',
  templateUrl: './sample-po-list-view-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoListViewLabsComponent implements OnInit {
  private poNotification = inject(PoNotificationService);

  action: PoListViewAction;
  actions: Array<PoListViewAction>;
  componentsSize: string = 'medium';
  customLiterals: PoListViewLiterals;
  height: number;
  items: Array<any>;
  literals: string;
  properties: Array<string>;
  propertyLink: string;
  propertyLinkValue: string;
  propertyTitle: string;
  titleAction: string;

  propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'select', label: 'Select' },
    { value: 'hideSelectAll', label: 'Hide Select All', disabled: true },
    { value: 'showMoreDisabled', label: 'Show More Disabled' }
  ];

  readonly actionOptions: Array<PoCheckboxGroupOption> = [
    { label: 'Disabled', value: 'disabled' },
    { label: 'Separator', value: 'separator' },
    { label: 'Selected', value: 'selected' },
    { label: 'Visible', value: 'visible' }
  ];

  readonly componentsSizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  readonly iconOptions: Array<PoSelectOption> = [
    { value: 'an an-newspaper', label: 'an an-newspaper' },
    { value: 'an an-magnifying-glass', label: 'an an-magnifying-glass' },
    { value: 'an an-globe', label: 'an an-globe' },
    { value: 'fa fa-calculator', label: 'fa fa-calculator' },
    { value: 'fa fa-podcast', label: 'fa fa-podcast' }
  ];

  readonly propertyTitleOptions: Array<PoSelectOption> = [
    { value: 'name', label: 'name' },
    { value: 'email', label: 'email' },
    { value: 'phone', label: 'phone' },
    { value: 'location', label: 'location' }
  ];

  readonly typeOptions: Array<PoSelectOption> = [
    { label: 'Default', value: 'default' },
    { label: 'Danger', value: 'danger' }
  ];

  ngOnInit() {
    this.restore();
  }

  addAction(action: PoListViewAction) {
    const newAction = Object.assign({}, action);
    newAction.action = newAction.action ? this.showAction.bind(this, newAction.action) : undefined;

    this.actions.push(newAction);
    this.restoreActionForm();
  }

  addItem() {
    this.items.push(this.generateNewItem(this.items.length + 1));
  }

  changeAction(action) {
    this.titleAction = action;
  }

  changeActionOptions() {
    this.propertiesOptions = this.propertiesOptions.map(propertyOption => {
      if (propertyOption.value === 'hideSelectAll') {
        return { ...propertyOption, disabled: !this.properties.includes('select') };
      } else {
        return propertyOption;
      }
    });
  }

  changeLiterals() {
    try {
      this.customLiterals = JSON.parse(this.literals);
    } catch {
      this.customLiterals = undefined;
    }
  }

  restore() {
    this.actions = [];
    this.componentsSize = 'medium';
    this.items = [];
    this.height = undefined;
    this.literals = '';
    this.properties = [];
    this.propertyLink = 'url';
    this.propertyLinkValue = '';
    this.propertyTitle = '';
    this.titleAction = '';
    this.restoreActionForm();
  }

  showMore() {
    this.addItem();
  }

  private generateNewItem(index) {
    return {
      name: \`Register \${index}\`,
      email: \`register\${index}@po-ui.com\`,
      phone: \`(55) \${index}234567\`,
      location: 'Brazil',
      company: \`Company \${index}\`,
      url: this.propertyLinkValue,
      zipCode: \`\${index}221\`
    };
  }

  private restoreActionForm() {
    this.action = {
      label: '',
      visible: null
    };
  }

  private showAction(action: string): any {
    this.poNotification.success(\`Action clicked: \${action}\`);
  }
}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-list-view-labs"),og(),zl(23,"hr")),l&2&&(Lp(5),Ux("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,Ue,n.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,De],encapsulation:2})}return a})();var J=(()=>{class a{getItems(){return [{hireStatus:"hired",name:"James Johnson",city:"Ontario",age:24,idCard:"AB34lxi90",email:"james@johnson.com",telephone:"1-541-754-3010",jobDescription:"Systems Analyst",url:"https://po-ui.io/"},{hireStatus:"progress",name:"Brian Brown",city:"Buffalo",age:23,idCard:"HG56lds54",email:"brian@brown.com",telephone:"1-543-456-9876",jobDescription:"Trainee",url:"https://po-ui.io/"},{hireStatus:"canceled",name:"Mary Davis",city:"Albany",age:31,idCard:"DF23cfr65",email:"mary@davis.com",telephone:"1-521-223-3232",jobDescription:"Programmer"},{hireStatus:"progress",name:"Margaret Garcia",city:"New York",age:29,idCard:"GF45fgh34",email:"margaret@garcia.com",telephone:"1-541-344-2211",jobDescription:"Web developer",url:"https://po-ui.io/"},{hireStatus:"hired",name:"Emma Hall",city:"Ontario",age:34,idCard:"RF76jut21",email:"emma@hall.com",telephone:"1-555-321-3234",jobDescription:"Recruiter",url:"https://po-ui.io/"},{hireStatus:"progress",name:"Lucas Clark",city:"Utica",age:32,idCard:"HY21kgu65",email:"lucas@clark.com",telephone:"1-541-322-4343",jobDescription:"Consultant"},{hireStatus:"progress",name:"Ella Scott",city:"Ontario",age:24,idCard:"UL78flg68",email:"ella@scott.com",telephone:"1-229-324-3434",jobDescription:"DBA"},{hireStatus:"progress",name:"Chloe Walker",city:"Albany",age:29,idCard:"JH12oli98",email:"chloe@walker.com",telephone:"1-518-222-1212",jobDescription:"Programmer"}]}static \u0275fac=function(l){return new(l||a)};static \u0275prov=w({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();var $e=["detailsModal"];function Qe(a,C){if(a&1&&(Il(0,"div",6),zl(1,"po-info",14)(2,"po-info",15)(3,"po-info",16),mN(4,"uppercase"),og()),a&2){let o=C.$implicit;Lp(),nw("p-value",o.idCard),Lp(),nw("p-value",o.jobDescription),Lp(),nw("p-value",rN(yN(4,4,o.hireStatus)));}}function Ye(a,C){if(a&1&&(Il(0,"div",6),zl(1,"po-info",17)(2,"po-info",18),og()),a&2){let o=C.$implicit;Lp(),nw("p-value",o.age),Lp(),nw("p-value",o.city);}}var Me=(()=>{class a{poNotification=f(Yp);hiringProcessesService=f(J);detailsModalElement;hiringProcesses;hiringProcessesFiltered;labelFilter="";modalDetail=false;selectedActionItem={};titleDetailsModal="User Detail";actions=[{label:"Hire",action:this.hireCandidate.bind(this),disabled:this.isHiredOrCanceled.bind(this),icon:"an an-check"},{label:"Cancel",action:this.cancelCandidate.bind(this),disabled:this.isHiredOrCanceled.bind(this),type:"danger",icon:"an an-x"}];pageActions=[{label:"Hire selected",action:this.updateCandidates.bind(this,this.hireCandidate),disabled:this.disableHireButton.bind(this),icon:"an an-check"},{label:"Cancel selected",action:this.updateCandidates.bind(this,this.cancelCandidate),disabled:this.disableHireButton.bind(this),icon:"an an-x"}];filterSettings={action:this.hiringProcessesFilter.bind(this),placeholder:"Search"};ngOnInit(){this.hiringProcesses=this.hiringProcessesService.getItems(),this.hiringProcessesFiltered=[...this.hiringProcesses];}formatTitle(o){return `${o.idCard} - ${o.name}`}showDetail(o){return o.url}showDetailModal(o){this.setModalItem(o),this.detailsModalElement.open();}cancelCandidate(o){o.hireStatus="canceled",this.poNotification.error("Canceled candidate!");}disableHireButton(){return !this.hiringProcesses.find(o=>o.$selected)}hireCandidate(o){o.hireStatus="hired",this.poNotification.success("Hired candidate!");}hiringProcessesFilter(o){let l=typeof o=="string"?[o]:[...o];this.hiringProcessesFiltered=this.hiringProcesses.filter(n=>Object.keys(n).some(d=>!(n[d]instanceof Object)&&this.includeFilter(n[d],l)));}includeFilter(o,l){return l.some(n=>String(o).toLocaleLowerCase().includes(n.toLocaleLowerCase()))}isHiredOrCanceled(o){return o.hireStatus==="hired"||o.hireStatus==="canceled"}setModalItem(o){this.selectedActionItem=o,this.titleDetailsModal=`Get in touch with ${this.selectedActionItem.name}`;}updateCandidates(o){this.hiringProcesses.forEach(l=>{if(l.$selected){switch(l.hireStatus){case "progress":o.call(this,l);break;case "hired":this.poNotification.warning("This candidate has already been hired.");break;case "canceled":this.poNotification.error("This candidate has already been disqualified.");break}l.$selected=false;}});}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-list-view-hiring-processes"]],viewQuery:function(l,n){if(l&1&&Gl($e,7),l&2){let d;co(d=lo())&&(n.detailsModalElement=d.first);}},standalone:false,features:[we([J])],decls:16,vars:11,consts:[["detailsModal",""],["p-title","Hiring processes",3,"p-actions","p-filter"],["p-hide-select-all","","p-property-link","url","p-property-title","name","p-select","",3,"p-title-action","p-actions","p-items"],["p-list-view-content-template","",3,"p-title"],["p-list-view-detail-template","",3,"p-show-detail"],[3,"p-title"],[1,"po-row"],[1,"po-md-5","po-lg-4"],["p-size","xl","p-src","assets/graphics/avatar2.png"],[1,"po-md-7","po-lg-8"],[1,"po-mb-1"],[3,"p-value","p-type"],["p-label","Email",3,"p-value"],["p-label","Telephone",3,"p-value"],["p-label","Id Card",1,"po-lg-4",3,"p-value"],["p-label","Job description",1,"po-lg-4",3,"p-value"],["p-label","Hire status",1,"po-lg-4",3,"p-value"],["p-label","Age",1,"po-md-6",3,"p-value"],["p-label","City",1,"po-md-6",3,"p-value"]],template:function(l,n){l&1&&(Il(0,"po-page-list",1)(1,"po-list-view",2),ft("p-title-action",function(c){return n.showDetailModal(c)}),JE(2,Qe,5,6,"ng-template",3)(3,Ye,3,2,"ng-template",4),og(),Il(4,"po-modal",5,0)(6,"div",6)(7,"div",7),zl(8,"po-avatar",8),og(),Il(9,"div",9)(10,"div",10),zl(11,"po-tag",11),og(),Il(12,"div",10),zl(13,"po-info",12),og(),Il(14,"div",10),zl(15,"po-info",13),og()()()()()),l&2&&(nw("p-actions",n.pageActions)("p-filter",n.filterSettings),Lp(),nw("p-actions",n.actions)("p-items",n.hiringProcessesFiltered),Lp(),nw("p-title",n.formatTitle),Lp(),nw("p-show-detail",n.showDetail),Lp(),nw("p-title",n.titleDetailsModal),Lp(7),nw("p-value",n.selectedActionItem.hireStatus)("p-type",n.selectedActionItem.hireStatus==="hired"?"success":"info"),Lp(2),nw("p-value",n.selectedActionItem.email),Lp(2),nw("p-value",n.selectedActionItem.telephone));},dependencies:[a3,Sa,Yhe,aNe,dme,ume,Yo,uNe,AO],encapsulation:2,changeDetection:1})}return a})();var Ke=a=>({"docs-sample-code-tabs":a}),Te=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-list-view-hiring-processes-view"]],standalone:false,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO List View - Hiring Processes"),og(),Il(4,"a",2),ft("click",function(){return n.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-list-view-hiring-processes/sample-po-list-view-hiring-processes.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-page-list p-title="Hiring processes" [p-actions]="pageActions" [p-filter]="filterSettings">
  <po-list-view
    p-hide-select-all
    p-property-link="url"
    p-property-title="name"
    p-select
    [p-actions]="actions"
    [p-items]="hiringProcessesFiltered"
    (p-title-action)="showDetailModal($event)"
  >
    <ng-template p-list-view-content-template let-item [p-title]="formatTitle">
      <div class="po-row">
        <po-info class="po-lg-4" p-label="Id Card" [p-value]="item.idCard"></po-info>

        <po-info class="po-lg-4" p-label="Job description" [p-value]="item.jobDescription"></po-info>

        <po-info class="po-lg-4" p-label="Hire status" p-value="{ { item.hireStatus | uppercase }}"></po-info>
      </div>
    </ng-template>

    <ng-template p-list-view-detail-template let-item [p-show-detail]="showDetail">
      <div class="po-row">
        <po-info class="po-md-6" p-label="Age" [p-value]="item.age"></po-info>

        <po-info class="po-md-6" p-label="City" [p-value]="item.city"></po-info>
      </div>
    </ng-template>
  </po-list-view>

  <po-modal #detailsModal [p-title]="titleDetailsModal">
    <div class="po-row">
      <div class="po-md-5 po-lg-4">
        <po-avatar p-size="xl" p-src="assets/graphics/avatar2.png"></po-avatar>
      </div>
      <div class="po-md-7 po-lg-8">
        <div class="po-mb-1">
          <po-tag
            [p-value]="selectedActionItem['hireStatus']"
            [p-type]="selectedActionItem['hireStatus'] === 'hired' ? 'success' : 'info'"
          >
          </po-tag>
        </div>
        <div class="po-mb-1">
          <po-info p-label="Email" [p-value]="selectedActionItem['email']"> </po-info>
        </div>
        <div class="po-mb-1">
          <po-info p-label="Telephone" [p-value]="selectedActionItem['telephone']"> </po-info>
        </div>
      </div>
    </div>
  </po-modal>
</po-page-list>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-list-view-hiring-processes/sample-po-list-view-hiring-processes.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';

import {
  PoListViewAction,
  PoModalComponent,
  PoNotificationService,
  PoPageAction,
  PoPageFilter
} from '@po-ui/ng-components';

import { SamplePoListViewHiringProcessesService } from './sample-po-list-view-hiring-processes.service';

@Component({
  selector: 'sample-po-list-view-hiring-processes',
  templateUrl: 'sample-po-list-view-hiring-processes.component.html',
  providers: [SamplePoListViewHiringProcessesService],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoListViewHiringProcessesComponent implements OnInit {
  private poNotification = inject(PoNotificationService);
  private hiringProcessesService = inject(SamplePoListViewHiringProcessesService);

  @ViewChild('detailsModal', { static: true }) detailsModalElement: PoModalComponent;

  hiringProcesses: Array<any>;
  hiringProcessesFiltered: Array<object>;
  labelFilter: string = '';
  modalDetail: boolean = false;
  selectedActionItem = {};
  titleDetailsModal: string = 'User Detail';

  readonly actions: Array<PoListViewAction> = [
    {
      label: 'Hire',
      action: this.hireCandidate.bind(this),
      disabled: this.isHiredOrCanceled.bind(this),
      icon: 'an an-check'
    },
    {
      label: 'Cancel',
      action: this.cancelCandidate.bind(this),
      disabled: this.isHiredOrCanceled.bind(this),
      type: 'danger',
      icon: 'an an-x'
    }
  ];

  readonly pageActions: Array<PoPageAction> = [
    {
      label: 'Hire selected',
      action: this.updateCandidates.bind(this, this.hireCandidate),
      disabled: this.disableHireButton.bind(this),
      icon: 'an an-check'
    },
    {
      label: 'Cancel selected',
      action: this.updateCandidates.bind(this, this.cancelCandidate),
      disabled: this.disableHireButton.bind(this),
      icon: 'an an-x'
    }
  ];

  readonly filterSettings: PoPageFilter = {
    action: this.hiringProcessesFilter.bind(this),
    placeholder: 'Search'
  };

  ngOnInit() {
    this.hiringProcesses = this.hiringProcessesService.getItems();
    this.hiringProcessesFiltered = [...this.hiringProcesses];
  }

  formatTitle(item) {
    return \`\${item.idCard} - \${item.name}\`;
  }

  showDetail(item) {
    return item.url;
  }

  showDetailModal(item) {
    this.setModalItem(item);
    this.detailsModalElement.open();
  }

  private cancelCandidate(selectedCandidate) {
    selectedCandidate['hireStatus'] = 'canceled';
    this.poNotification.error('Canceled candidate!');
  }

  private disableHireButton() {
    return !this.hiringProcesses.find(candidate => candidate['$selected']);
  }

  private hireCandidate(selectedCandidate) {
    selectedCandidate['hireStatus'] = 'hired';
    this.poNotification.success('Hired candidate!');
  }

  private hiringProcessesFilter(labelFilter: string | Array<string>) {
    const filters = typeof labelFilter === 'string' ? [labelFilter] : [...labelFilter];

    this.hiringProcessesFiltered = this.hiringProcesses.filter(item =>
      Object.keys(item).some(key => !(item[key] instanceof Object) && this.includeFilter(item[key], filters))
    );
  }

  private includeFilter(item, filters) {
    return filters.some(filter => String(item).toLocaleLowerCase().includes(filter.toLocaleLowerCase()));
  }

  private isHiredOrCanceled(candidate): boolean {
    return candidate['hireStatus'] === 'hired' || candidate['hireStatus'] === 'canceled';
  }

  private setModalItem(listItem) {
    this.selectedActionItem = listItem;
    this.titleDetailsModal = \`Get in touch with \${this.selectedActionItem['name']}\`;
  }

  private updateCandidates(action: Function) {
    this.hiringProcesses.forEach(candidate => {
      if (candidate['$selected']) {
        switch (candidate['hireStatus']) {
          case 'progress':
            action.call(this, candidate);
            break;

          case 'hired':
            this.poNotification.warning('This candidate has already been hired.');
            break;

          case 'canceled':
            this.poNotification.error('This candidate has already been disqualified.');
            break;
        }

        candidate['$selected'] = false;
      }
    });
  }
}
`),og(),Il(21,"label",6),Qx(22,"sample-po-list-view-hiring-processes/sample-po-list-view-hiring-processes.service.ts"),og(),Il(23,"pre",9),Qx(24,`import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SamplePoListViewHiringProcessesService {
  getItems() {
    return [
      {
        hireStatus: 'hired',
        name: 'James Johnson',
        city: 'Ontario',
        age: 24,
        idCard: 'AB34lxi90',
        email: 'james@johnson.com',
        telephone: '1-541-754-3010',
        jobDescription: 'Systems Analyst',
        url: 'https://po-ui.io/'
      },
      {
        hireStatus: 'progress',
        name: 'Brian Brown',
        city: 'Buffalo',
        age: 23,
        idCard: 'HG56lds54',
        email: 'brian@brown.com',
        telephone: '1-543-456-9876',
        jobDescription: 'Trainee',
        url: 'https://po-ui.io/'
      },
      {
        hireStatus: 'canceled',
        name: 'Mary Davis',
        city: 'Albany',
        age: 31,
        idCard: 'DF23cfr65',
        email: 'mary@davis.com',
        telephone: '1-521-223-3232',
        jobDescription: 'Programmer'
      },
      {
        hireStatus: 'progress',
        name: 'Margaret Garcia',
        city: 'New York',
        age: 29,
        idCard: 'GF45fgh34',
        email: 'margaret@garcia.com',
        telephone: '1-541-344-2211',
        jobDescription: 'Web developer',
        url: 'https://po-ui.io/'
      },
      {
        hireStatus: 'hired',
        name: 'Emma Hall',
        city: 'Ontario',
        age: 34,
        idCard: 'RF76jut21',
        email: 'emma@hall.com',
        telephone: '1-555-321-3234',
        jobDescription: 'Recruiter',
        url: 'https://po-ui.io/'
      },
      {
        hireStatus: 'progress',
        name: 'Lucas Clark',
        city: 'Utica',
        age: 32,
        idCard: 'HY21kgu65',
        email: 'lucas@clark.com',
        telephone: '1-541-322-4343',
        jobDescription: 'Consultant'
      },
      {
        hireStatus: 'progress',
        name: 'Ella Scott',
        city: 'Ontario',
        age: 24,
        idCard: 'UL78flg68',
        email: 'ella@scott.com',
        telephone: '1-229-324-3434',
        jobDescription: 'DBA'
      },
      {
        hireStatus: 'progress',
        name: 'Chloe Walker',
        city: 'Albany',
        age: 29,
        idCard: 'JH12oli98',
        email: 'chloe@walker.com',
        telephone: '1-518-222-1212',
        jobDescription: 'Programmer'
      }
    ];
  }
}
`),og()()()()(),Il(25,"div",10),zl(26,"sample-po-list-view-hiring-processes"),og(),zl(27,"hr")),l&2&&(Lp(5),Ux("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,Ke,n.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,Me],encapsulation:2})}return a})();var ke=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-list-view-doc"]],standalone:false,decls:707,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-list-view-content-template"],["href","/documentation/po-list-view-detail-template"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","PoListViewAction[]"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","any[]"],["pan","",1,"docs-api-property-type","PoListViewLiterals"],["href","/documentation/po-i18n"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","Array<PoPopupAction>"]],template:function(l,n){l&1&&(Il(0,"div",0)(1,"p",1)(2,"code"),Qx(3,"import { PoListViewModule } from '@po-ui/ng-components';"),og()(),Il(4,"div",2)(5,"p"),Qx(6,"M\xF3dulo do componente "),Il(7,"code"),Qx(8,"po-list-view"),og(),Qx(9,"."),og()(),Il(10,"h3",3),Qx(11,"Componente"),og(),Il(12,"h4",4)(13,"code",5),Qx(14,"PoListViewComponent"),og()(),Il(15,"div",2)(16,"p"),Qx(17,`Componente de lista que recebe um array de objetos e renderiza de forma din\xE2mica os dados de
acordo com a necessidade de cada tela e deve ser utilizado em conjunto com as diretivas de `),Il(18,"em"),Qx(19,"templates"),og(),Il(20,"strong")(21,"a",6),Qx(22,"p-list-view-content-template"),og()(),Qx(23,` e
`),Il(24,"strong")(25,"a",7),Qx(26,"p-list-view-detail-template"),og()(),Qx(27,"."),og(),Il(28,"p"),Qx(29,`O componente disponibiliza uma \xE1rea espec\xEDfica para exibi\xE7\xE3o informa\xE7\xF5es adicionais,
atrav\xE9s da diretiva `),Il(30,"strong")(31,"a",7),Qx(32,"p-list-view-detail-template"),og()(),Qx(33,". "),og()(),Il(34,"div",8)(35,"h4",9),Qx(36,"Seletor"),og(),Il(37,"pre",10),Qx(38,`<po-list-view
    p-actions="PoListViewAction[]"
    p-components-size="string"
    p-height="number"
    p-hide-select-all="boolean"
    p-items="any[]"
    p-literals="PoListViewLiterals"
    p-property-link="string"
    p-property-title="string"
    p-select="boolean"
    (p-show-detail)="EventEmitter"
    (p-show-more)="EventEmitter"
    p-show-more-disabled="boolean"
    (p-title-action)="EventEmitter" >
</po-list-view>
`),og()(),Il(39,"h4",11),Qx(40,"Propriedades"),og(),Il(41,"table",12)(42,"tr",13)(43,"th",14),Qx(44,"Nome"),og(),Il(45,"th",14),Qx(46,"Tipo"),og(),Il(47,"th",14),Qx(48,"Padr\xE3o"),og(),Il(49,"th",14),Qx(50,"Descri\xE7\xE3o"),og()(),Il(51,"tr",15)(52,"td",16)(53,"div",17)(54,"span",18),Qx(55," p-actions"),zl(56,"br"),og()()(),Il(57,"td",19)(58,"code",20),Qx(59,"PoListViewAction[]"),og()(),Il(60,"td",21),Qx(61,"-"),og(),Il(62,"td",22)(63,"em")(64,"strong"),Qx(65,"(opcional)"),og()(),Il(66,"p"),Qx(67,"Lista de a\xE7\xF5es que ser\xE3o exibidas no componente."),og()()(),Il(68,"tr",15)(69,"td",16)(70,"div",17)(71,"span",18),Qx(72," p-components-size"),zl(73,"br"),og()()(),Il(74,"td",19)(75,"code",23),Qx(76,"string"),og()(),Il(77,"td",21)(78,"p")(79,"code"),Qx(80,"medium"),og()()(),Il(81,"td",22)(82,"em")(83,"strong"),Qx(84,"(opcional)"),og()(),Il(85,"p"),Qx(86,"Define o tamanho dos componentes de formul\xE1rio no template:"),og(),Il(87,"ul")(88,"li")(89,"code"),Qx(90,"small"),og(),Qx(91,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),og(),Il(92,"li")(93,"code"),Qx(94,"medium"),og(),Qx(95,": aplica a medida medium de cada componente."),og()(),Il(96,"blockquote")(97,"p"),Qx(98,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Il(99,"code"),Qx(100,"medium"),og(),Qx(101,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Il(102,"a",24),Qx(103,"po-theme"),og(),Qx(104,"."),og()()()(),Il(105,"tr",15)(106,"td",16)(107,"div",17)(108,"span",18),Qx(109," p-height"),zl(110,"br"),og()()(),Il(111,"td",19)(112,"code",25),Qx(113,"number"),og()(),Il(114,"td",21),Qx(115,"-"),og(),Il(116,"td",22)(117,"em")(118,"strong"),Qx(119,"(opcional)"),og()(),Il(120,"p"),Qx(121,"Define a altura do "),Il(122,"code"),Qx(123,"po-list-view"),og(),Qx(124," em "),Il(125,"em"),Qx(126,"pixels"),og(),Qx(127,"."),og()()(),Il(128,"tr",15)(129,"td",16)(130,"div",17)(131,"span",18),Qx(132," p-hide-select-all"),zl(133,"br"),og()()(),Il(134,"td",19)(135,"code",26),Qx(136,"boolean"),og()(),Il(137,"td",21)(138,"p")(139,"code"),Qx(140,"false"),og()()(),Il(141,"td",22)(142,"p"),Qx(143,"Esconde o "),Il(144,"em"),Qx(145,"checkbox"),og(),Qx(146," para sele\xE7\xE3o de todos os itens."),og()()(),Il(147,"tr",15)(148,"td",16)(149,"div",17)(150,"span",18),Qx(151," p-items"),zl(152,"br"),og()()(),Il(153,"td",19)(154,"code",27),Qx(155,"any[]"),og()(),Il(156,"td",21),Qx(157,"-"),og(),Il(158,"td",22)(159,"p"),Qx(160,"Lista de itens que ser\xE3o exibidos no componente."),og()()(),Il(161,"tr",15)(162,"td",16)(163,"div",17)(164,"span",18),Qx(165," p-literals"),zl(166,"br"),og()()(),Il(167,"td",19)(168,"code",28),Qx(169,"PoListViewLiterals"),og()(),Il(170,"td",21),Qx(171,"-"),og(),Il(172,"td",22)(173,"em")(174,"strong"),Qx(175,"(opcional)"),og()(),Il(176,"p"),Qx(177,"Objeto com as literais usadas no "),Il(178,"code"),Qx(179,"po-list-view"),og(),Qx(180,"."),og(),Il(181,"p"),Qx(182,"Existem duas maneiras de customizar o componente, passando um objeto com todas as literais dispon\xEDveis:"),og(),Il(183,"pre")(184,"code"),Qx(185,`const customLiterals: PoListViewLiterals = {
  hideDetail: 'Ocultar detalhes completamente',
  loadMoreData: 'Mais dados',
  showDetail: 'Mostrar mais detalhes',
  selectAll: 'Selecionar todos os itens'
};
`),og()(),Il(186,"p"),Qx(187,"Ou passando apenas as literais que deseja customizar:"),og(),Il(188,"pre")(189,"code"),Qx(190,`const customLiterals: PoListViewLiterals = {
  showDetail: 'Mostrar mais detalhes'
};
`),og()(),Il(191,"p"),Qx(192,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente."),og(),Il(193,"pre")(194,"code"),Qx(195,`<po-list-view
  [p-literals]="customLiterals">
</po-list-view>
`),og()(),Il(196,"blockquote")(197,"p"),Qx(198,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),Il(199,"a",29)(200,"code"),Qx(201,"PoI18nService"),og()(),Qx(202," ou do browser."),og()()()(),Il(203,"tr",15)(204,"td",16)(205,"div",17)(206,"span",18),Qx(207," p-property-link"),zl(208,"br"),og()()(),Il(209,"td",19)(210,"code",23),Qx(211,"string"),og()(),Il(212,"td",21),Qx(213,"-"),og(),Il(214,"td",22)(215,"em")(216,"strong"),Qx(217,"(opcional)"),og()(),Il(218,"p"),Qx(219,"Recebe uma propriedade que ser\xE1 utilizada para recuperar o valor do objeto que ser\xE1 usado como link para o t\xEDtulo."),og()()(),Il(220,"tr",15)(221,"td",16)(222,"div",17)(223,"span",18),Qx(224," p-property-title"),zl(225,"br"),og()()(),Il(226,"td",19)(227,"code",23),Qx(228,"string"),og()(),Il(229,"td",21),Qx(230,"-"),og(),Il(231,"td",22)(232,"em")(233,"strong"),Qx(234,"(opcional)"),og()(),Il(235,"p"),Qx(236,"Recebe uma propriedade que ser\xE1 utilizada para recuperar o valor do objeto que ser\xE1 exibido como o t\xEDtulo de cada item."),og()()(),Il(237,"tr",15)(238,"td",16)(239,"div",17)(240,"span",18),Qx(241," p-select"),zl(242,"br"),og()()(),Il(243,"td",19)(244,"code",26),Qx(245,"boolean"),og()(),Il(246,"td",21)(247,"p")(248,"code"),Qx(249,"false"),og()()(),Il(250,"td",22)(251,"em")(252,"strong"),Qx(253,"(opcional)"),og()(),Il(254,"p"),Qx(255,"Habilita um "),Il(256,"em"),Qx(257,"checkbox"),og(),Qx(258," para cada item da lista. Todos os items possuem a propriedade din\xE2mica "),Il(259,"code"),Qx(260,"$selected"),og(),Qx(261,` para identificar se o
item est\xE1 selecionado, por exemplo:`),og(),Il(262,"pre")(263,"code"),Qx(264,`item.$selected

// ou

item['$selected']
`),og()()()(),Il(265,"tr",15)(266,"td",16)(267,"div",30)(268,"span",31),Qx(269," (p-show-detail)"),zl(270,"br"),og()()(),Il(271,"td",19)(272,"code",32),Qx(273,"EventEmitter"),og()(),Il(274,"td",21),Qx(275,"-"),og(),Il(276,"td",22)(277,"em")(278,"strong"),Qx(279,"(opcional)"),og()(),Il(280,"p"),Qx(281,"A\xE7\xE3o que ser\xE1 executada ao clicar no bot\xE3o exibir detalhes."),og(),Il(282,"p"),Qx(283,"Ao ser disparado, o m\xE9todo passa como par\xE2metros os detalhes que ser\xE3o exibidos."),og()()(),Il(284,"tr",15)(285,"td",16)(286,"div",30)(287,"span",31),Qx(288," (p-show-more)"),zl(289,"br"),og()()(),Il(290,"td",19)(291,"code",32),Qx(292,"EventEmitter"),og()(),Il(293,"td",21),Qx(294,"-"),og(),Il(295,"td",22)(296,"em")(297,"strong"),Qx(298,"(opcional)"),og()(),Il(299,"p"),Qx(300,'Recebe uma a\xE7\xE3o, que ser\xE1 executada quando clicar no bot\xE3o "Carregar mais resultados".'),og(),Il(301,"blockquote")(302,"p"),Qx(303,"Caso nenhuma a\xE7\xE3o for definida o mesmo n\xE3o ficar\xE1 vis\xEDvel."),og()()()(),Il(304,"tr",15)(305,"td",16)(306,"div",17)(307,"span",18),Qx(308," p-show-more-disabled"),zl(309,"br"),og()()(),Il(310,"td",19)(311,"code",26),Qx(312,"boolean"),og()(),Il(313,"td",21),Qx(314,"-"),og(),Il(315,"td",22)(316,"em")(317,"strong"),Qx(318,"(opcional)"),og()(),Il(319,"p"),Qx(320,"Indica que o bot\xE3o "),Il(321,"code"),Qx(322,"Carregar Mais Resultados"),og(),Qx(323," ser\xE1 desabilitado."),og()()(),Il(324,"tr",15)(325,"td",16)(326,"div",30)(327,"span",31),Qx(328," (p-title-action)"),zl(329,"br"),og()()(),Il(330,"td",19)(331,"code",32),Qx(332,"EventEmitter"),og()(),Il(333,"td",21),Qx(334,"-"),og(),Il(335,"td",22)(336,"em")(337,"strong"),Qx(338,"(opcional)"),og()(),Il(339,"p"),Qx(340,"A\xE7\xE3o que ser\xE1 executada ao clicar no t\xEDtulo."),og(),Il(341,"p"),Qx(342,"Ao ser disparado, o m\xE9todo inserido na a\xE7\xE3o ir\xE1 receber como par\xE2metro o item da lista clicado."),og()()()(),Il(343,"h3"),Qx(344,"Interfaces"),og(),Il(345,"h4",33)(346,"code",5),Qx(347,"PoListViewAction"),og()(),Il(348,"div",2)(349,"p"),Qx(350,"Interface que define as a\xE7\xF5es do componente "),Il(351,"code"),Qx(352,"po-list-view"),og(),Qx(353,"."),og(),Il(354,"blockquote")(355,"p"),Qx(356,"As propriedades "),Il(357,"code"),Qx(358,"subItems"),og(),Qx(359,", "),Il(360,"code"),Qx(361,"separator"),og(),Qx(362,", "),Il(363,"code"),Qx(364,"url"),og(),Qx(365," e "),Il(366,"code"),Qx(367,"selected"),og(),Qx(368,` ser\xE3o vistas a partir da terceira a\xE7\xE3o e somente quando
definir quatro a\xE7\xF5es ou mais.`),og()()(),Il(369,"h4",11),Qx(370,"Propriedades"),og(),Il(371,"table",12)(372,"tr",13)(373,"th",14),Qx(374,"Nome"),og(),Il(375,"th",14),Qx(376,"Tipo"),og(),Il(377,"th",14),Qx(378,"Descri\xE7\xE3o"),og()(),Il(379,"tr",15)(380,"td",16)(381,"div",17)(382,"span",18),Qx(383," action"),zl(384,"br"),og()()(),Il(385,"td",19)(386,"code",34),Qx(387,"Function"),og()(),Il(388,"td",22)(389,"em")(390,"strong"),Qx(391,"(opcional)"),og()(),Il(392,"p"),Qx(393,"A\xE7\xE3o que ser\xE1 executada, sendo poss\xEDvel passar o nome ou a refer\xEAncia da fun\xE7\xE3o."),og(),Il(394,"p"),Qx(395,"A action tamb\xE9m pode ser executada para o agrupador de subitens quando a a\xE7\xE3o possuir "),Il(396,"code"),Qx(397,"subItems"),og(),Qx(398,"."),og(),Il(399,"blockquote")(400,"p"),Qx(401,"Para que a fun\xE7\xE3o seja executada no contexto do componente, utilize "),Il(402,"em"),Qx(403,"bind"),og(),Qx(404,`:
`),Il(405,"code"),Qx(406,"action: this.myFunction.bind(this)"),og()()()()(),Il(407,"tr",15)(408,"td",16)(409,"div",17)(410,"span",18),Qx(411," disabled"),zl(412,"br"),og()()(),Il(413,"td",19)(414,"code",26),Qx(415,"boolean "),og(),Il(416,"code",34),Qx(417," Function"),og()(),Il(418,"td",22)(419,"em")(420,"strong"),Qx(421,"(opcional)"),og()(),Il(422,"p"),Qx(423,"Desabilita a a\xE7\xE3o. Aceita um valor booleano ou uma fun\xE7\xE3o que retorna booleano."),og()()(),Il(424,"tr",15)(425,"td",16)(426,"div",17)(427,"span",18),Qx(428," icon"),zl(429,"br"),og()()(),Il(430,"td",19)(431,"code",23),Qx(432,"string "),og(),Il(433,"code",35),Qx(434," TemplateRef<void>"),og()(),Il(435,"td",22)(436,"em")(437,"strong"),Qx(438,"(opcional)"),og()(),Il(439,"p"),Qx(440,"\xCDcone exibido ao lado esquerdo do r\xF3tulo."),og(),Il(441,"p"),Qx(442,"Aceita \xEDcones da "),Il(443,"a",36),Qx(444,"Biblioteca de \xEDcones"),og(),Qx(445,`, fontes externas (ex: Font Awesome)
ou um `),Il(446,"code"),Qx(447,"TemplateRef"),og(),Qx(448," para \xEDcones customizados."),og(),Il(449,"pre")(450,"code"),Qx(451,`{ label: 'A\xE7\xE3o', icon: 'an an-newspaper' }
`),og()()()(),Il(452,"tr",15)(453,"td",16)(454,"div",17)(455,"span",18),Qx(456," label"),zl(457,"br"),og()()(),Il(458,"td",19)(459,"code",23),Qx(460,"string"),og()(),Il(461,"td",22)(462,"p"),Qx(463,"R\xF3tulo da a\xE7\xE3o."),og(),Il(464,"p"),Qx(465,"A label tamb\xE9m pode representar o agrupador de subitens quando a a\xE7\xE3o possuir "),Il(466,"code"),Qx(467,"subItems"),og(),Qx(468,"."),og()()(),Il(469,"tr",15)(470,"td",16)(471,"div",17)(472,"span",18),Qx(473," selected"),zl(474,"br"),og()()(),Il(475,"td",19)(476,"code",26),Qx(477,"boolean"),og()(),Il(478,"td",22)(479,"em")(480,"strong"),Qx(481,"(opcional)"),og()(),Il(482,"p"),Qx(483,"Define se a a\xE7\xE3o est\xE1 selecionada."),og()()(),Il(484,"tr",15)(485,"td",16)(486,"div",17)(487,"span",18),Qx(488," separator"),zl(489,"br"),og()()(),Il(490,"td",19)(491,"code",26),Qx(492,"boolean"),og()(),Il(493,"td",22)(494,"em")(495,"strong"),Qx(496,"(opcional)"),og()(),Il(497,"p"),Qx(498,"Atribui uma linha separadora acima do item."),og()()(),Il(499,"tr",15)(500,"td",16)(501,"div",17)(502,"span",18),Qx(503," subItems"),zl(504,"br"),og()()(),Il(505,"td",19)(506,"code",37),Qx(507,"Array<PoPopupAction>"),og()(),Il(508,"td",22)(509,"em")(510,"strong"),Qx(511,"(opcional)"),og()(),Il(512,"p"),Qx(513,"Define uma lista de subitens para cria\xE7\xE3o de menus aninhados."),og(),Il(514,"p"),Qx(515,`Ao definir esta propriedade, o item exibir\xE1 um \xEDcone indicador de subn\xEDvel.
Recomenda-se utilizar no m\xE1ximo tr\xEAs n\xEDveis hier\xE1rquicos para garantir a usabilidade.`),og(),Il(516,"blockquote")(517,"p"),Qx(518,"As propriedades "),Il(519,"code"),Qx(520,"disabled"),og(),Qx(521,", "),Il(522,"code"),Qx(523,"type"),og(),Qx(524," e "),Il(525,"code"),Qx(526,"visible"),og(),Qx(527," n\xE3o s\xE3o aplicadas visualmente ao item agrupador."),og()(),Il(528,"blockquote")(529,"p"),Qx(530,"Quando "),Il(531,"code"),Qx(532,"url"),og(),Qx(533," \xE9 informada em um agrupador, o redirecionamento ter\xE1 prioridade e os subitens n\xE3o ser\xE3o abertos."),og()(),Il(534,"blockquote")(535,"p"),Qx(536,"Em subn\xEDveis aninhados, o "),Il(537,"code"),Qx(538,"icon"),og(),Qx(539," do agrupador \xE9 substitu\xEDdo pelo indicador de navega\xE7\xE3o (seta)."),og()()()(),Il(540,"tr",15)(541,"td",16)(542,"div",17)(543,"span",18),Qx(544," type"),zl(545,"br"),og()()(),Il(546,"td",19)(547,"code",23),Qx(548,"string"),og()(),Il(549,"td",22)(550,"em")(551,"strong"),Qx(552,"(opcional)"),og()(),Il(553,"p"),Qx(554,"Define a cor do item."),og(),Il(555,"p"),Qx(556,"Valores v\xE1lidos:"),og(),Il(557,"ul")(558,"li")(559,"code"),Qx(560,"default"),og()(),Il(561,"li")(562,"code"),Qx(563,"danger"),og()()()()(),Il(564,"tr",15)(565,"td",16)(566,"div",17)(567,"span",18),Qx(568," url"),zl(569,"br"),og()()(),Il(570,"td",19)(571,"code",23),Qx(572,"string"),og()(),Il(573,"td",22)(574,"em")(575,"strong"),Qx(576,"(opcional)"),og()(),Il(577,"p"),Qx(578,"URL para redirecionamento. Aceita rotas internas e links externos."),og(),Il(579,"p"),Qx(580,`A url tamb\xE9m pode ser configurada para o agrupador de subitens.
Entretanto, quando a `),Il(581,"code"),Qx(582,"url"),og(),Qx(583," \xE9 informada em um agrupador, o clique "),Il(584,"strong"),Qx(585,"n\xE3o abrir\xE1 os subitens"),og(),Qx(586,`, pois o item ser\xE1
tratado como um link e o redirecionamento ter\xE1 prioridade sobre a exibi\xE7\xE3o da lista.`),og(),Il(587,"blockquote")(588,"p"),Qx(589,"Quando informada, tem prioridade sobre a propriedade "),Il(590,"code"),Qx(591,"action"),og(),Qx(592,"."),og()()()(),Il(593,"tr",15)(594,"td",16)(595,"div",17)(596,"span",18),Qx(597," visible"),zl(598,"br"),og()()(),Il(599,"td",19)(600,"code",26),Qx(601,"boolean "),og(),Il(602,"code",34),Qx(603," Function"),og()(),Il(604,"td",22)(605,"em")(606,"strong"),Qx(607,"(opcional)"),og()(),Il(608,"p"),Qx(609,"Define a visibilidade da a\xE7\xE3o. Aceita um valor booleano ou uma fun\xE7\xE3o que retorna booleano."),og()()()(),Il(610,"h4",33)(611,"code",5),Qx(612,"PoListViewLiterals"),og()(),Il(613,"div",2)(614,"p"),Qx(615,"Interface para defini\xE7\xE3o das literais usadas no "),Il(616,"code"),Qx(617,"po-list-view"),og(),Qx(618,"."),og()(),Il(619,"h4",11),Qx(620,"Propriedades"),og(),Il(621,"table",12)(622,"tr",13)(623,"th",14),Qx(624,"Nome"),og(),Il(625,"th",14),Qx(626,"Tipo"),og(),Il(627,"th",14),Qx(628,"Descri\xE7\xE3o"),og()(),Il(629,"tr",15)(630,"td",16)(631,"div",17)(632,"span",18),Qx(633," hideDetails"),zl(634,"br"),og()()(),Il(635,"td",19)(636,"code",23),Qx(637,"string"),og()(),Il(638,"td",22)(639,"em")(640,"strong"),Qx(641,"(opcional)"),og()(),Il(642,"p"),Qx(643,"R\xF3tulo do bot\xE3o que oculta os detalhes do item."),og()()(),Il(644,"tr",15)(645,"td",16)(646,"div",17)(647,"span",18),Qx(648," loadMoreData"),zl(649,"br"),og()()(),Il(650,"td",19)(651,"code",23),Qx(652,"string"),og()(),Il(653,"td",22)(654,"em")(655,"strong"),Qx(656,"(opcional)"),og()(),Il(657,"p"),Qx(658,"R\xF3tulo do bot\xE3o que deve carregar mais resultados."),og()()(),Il(659,"tr",15)(660,"td",16)(661,"div",17)(662,"span",18),Qx(663," noData"),zl(664,"br"),og()()(),Il(665,"td",19)(666,"code",23),Qx(667,"string"),og()(),Il(668,"td",22)(669,"em")(670,"strong"),Qx(671,"(opcional)"),og()(),Il(672,"p"),Qx(673,"R\xF3tulo exibido quando n\xE3o existem itens para serem exibidos na lista."),og()()(),Il(674,"tr",15)(675,"td",16)(676,"div",17)(677,"span",18),Qx(678," selectAll"),zl(679,"br"),og()()(),Il(680,"td",19)(681,"code",23),Qx(682,"string"),og()(),Il(683,"td",22)(684,"em")(685,"strong"),Qx(686,"(opcional)"),og()(),Il(687,"p"),Qx(688,"R\xF3tulo do "),Il(689,"code"),Qx(690,"checkbox"),og(),Qx(691," da op\xE7\xE3o de selecionar todos."),og()()(),Il(692,"tr",15)(693,"td",16)(694,"div",17)(695,"span",18),Qx(696," showDetails"),zl(697,"br"),og()()(),Il(698,"td",19)(699,"code",23),Qx(700,"string"),og()(),Il(701,"td",22)(702,"em")(703,"strong"),Qx(704,"(opcional)"),og()(),Il(705,"p"),Qx(706,"R\xF3tulo do bot\xE3o que exibe os detalhes do item."),og()()()()());},dependencies:[Ka],encapsulation:2})}return a})();var Fe=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(o,l){this.route=o,this.router=l;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(o=>{let l=o.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(o){this.router.navigate([],{queryParams:{view:o},queryParamsHandling:"merge"}),this.activeTab=o;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(l){return new(l||a)(C(Xn),C(En))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","List View",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,n){l&1&&(Il(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return n.changeTab("doc")}),zl(3,"sample-po-list-view-doc"),og(),Il(4,"po-tab",3),ft("p-click",function(){return n.changeTab("web")}),zl(5,"sample-po-list-view-basic-view")(6,"sample-po-list-view-labs-view")(7,"sample-po-list-view-hiring-processes-view"),og()()()),l&2&&(nw("p-actions",n.actions),Lp(2),nw("p-active",n.activeTab==="doc"),Lp(2),nw("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"));},dependencies:[cNe,qme,Yme,Ve,Ae,Te,ke],encapsulation:2})}return a})();var tt=[{path:"",component:Fe}],Ie=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=fe({type:a});static \u0275inj=ue({imports:[uL.forChild(tt),uL]})}return a})();var Bt=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=fe({type:a});static \u0275inj=ue({imports:[sr,Ie]})}return a})();export{Bt as DocPoListViewModule};