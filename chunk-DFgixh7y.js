import {f as fe,u as ue,s as sr,m as mL,w,c3 as Xn,E as En,U as Un,c as f,aW as Yp,h as s,a as r$1,I,c9 as jhe,R as oNe,T as cme,C as Sl,a2 as ew,J as og,O as rw,bM as mN,a7 as pN,an as SO,aH as Ka,b8 as Ume,b9 as $me,F as Wl,y as rN,a1 as ft,L as Lp,ar as Gx,au as dg,bs as gN,aX as Q9,aF as Z9,aY as K9,aG as wk,aZ as _k,b0 as Qt,b1 as mv,c4 as b3,b4 as L3,cp as Bhe,c8 as Tde,aJ as Whe,di as pme,aB as Ix,aM as Cw,aN as n0,bd as kx,aO as ww,aP as i0,cn as o3,bI as Sa,b6 as Yo,$ as pNe,dj as FO,Q as we,av as ql,aw as lo,ax as uo,a3 as sNe,a4 as EN,cH as cN,a5 as CN,aD as Ky,aT as oN,aE as Xy}from'./main-TVDUJ47Y.js';var Oe=()=>({name:"Registro 1",email:"register@po-ui.com"}),He=()=>({name:"Registro 2",email:"register2@po-ui.com"}),Be=(a,C)=>[a,C];function je(a,C){if(a&1&&(Sl(0,"div",2),Wl(1,"po-info",3),og()),a&2){let o=C.$implicit;Lp(),rw("p-value",o.email);}}var _e=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-list-view-basic"]],standalone:false,decls:2,vars:6,consts:[["p-property-title","name",3,"p-items"],["p-list-view-content-template",""],[1,"po-row"],["p-label","Email",1,"po-md-12",3,"p-value"]],template:function(l,n){l&1&&(Sl(0,"po-list-view",0),ew(1,je,2,1,"ng-template",1),og()),l&2&&rw("p-items",mN(3,Be,pN(1,Oe),pN(2,He)));},dependencies:[jhe,oNe,cme],encapsulation:2,changeDetection:1})}return a})();var ze=a=>({"docs-sample-code-tabs":a}),Ve=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-list-view-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),rN(3,"PO List View Basic"),og(),Sl(4,"a",2),ft("click",function(){return n.toggleSampleCodeTabs()}),Wl(5,"span"),rN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),rN(12,"sample-po-list-view-basic/sample-po-list-view-basic.component.html"),og(),Sl(13,"pre",7),rN(14,`<po-list-view
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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),rN(18,"sample-po-list-view-basic/sample-po-list-view-basic.component.ts"),og(),Sl(19,"pre",9),rN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-list-view-basic',
  templateUrl: './sample-po-list-view-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoListViewBasicComponent {}
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-list-view-basic"),og(),Wl(23,"hr")),l&2&&(Lp(5),Gx("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),rw("ngClass",gN(4,ze,n.hideSampleCodeTabs)));},dependencies:[SO,Ka,Ume,$me,_e],encapsulation:2,changeDetection:1})}return a})();function We(a,C){if(a&1&&(Sl(0,"div",5),Wl(1,"po-info",22)(2,"po-info",23)(3,"po-info",24)(4,"po-info",25),og()),a&2){let o=C.$implicit;Lp(),rw("p-value",o.name),Lp(),rw("p-value",o.email),Lp(),rw("p-value",o.location),Lp(),rw("p-value",o.phone);}}function Re(a,C){if(a&1&&(Sl(0,"div",5),Wl(1,"po-info",26)(2,"po-info",27),og()),a&2){let o=C.$implicit;Lp(),rw("p-value",o.company),Lp(),rw("p-value",o.zipCode);}}var De=(()=>{class a{poNotification=f(Yp);action;actions;componentsSize="medium";customLiterals;height;items;literals;properties;propertyLink;propertyLinkValue;propertyTitle;titleAction;propertiesOptions=[{value:"select",label:"Select"},{value:"hideSelectAll",label:"Hide Select All",disabled:true},{value:"showMoreDisabled",label:"Show More Disabled"}];actionOptions=[{label:"Disabled",value:"disabled"},{label:"Separator",value:"separator"},{label:"Selected",value:"selected"},{label:"Visible",value:"visible"}];componentsSizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];iconOptions=[{value:"an an-newspaper",label:"an an-newspaper"},{value:"an an-magnifying-glass",label:"an an-magnifying-glass"},{value:"an an-globe",label:"an an-globe"},{value:"fa fa-calculator",label:"fa fa-calculator"},{value:"fa fa-podcast",label:"fa fa-podcast"}];propertyTitleOptions=[{value:"name",label:"name"},{value:"email",label:"email"},{value:"phone",label:"phone"},{value:"location",label:"location"}];typeOptions=[{label:"Default",value:"default"},{label:"Danger",value:"danger"}];ngOnInit(){this.restore();}addAction(o){let l=Object.assign({},o);l.action=l.action?this.showAction.bind(this,l.action):void 0,this.actions.push(l),this.restoreActionForm();}addItem(){this.items.push(this.generateNewItem(this.items.length+1));}changeAction(o){this.titleAction=o;}changeActionOptions(){this.propertiesOptions=this.propertiesOptions.map(o=>o.value==="hideSelectAll"?s(r$1({},o),{disabled:!this.properties.includes("select")}):o);}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals);}catch(o){this.customLiterals=void 0;}}restore(){this.actions=[],this.componentsSize="medium",this.items=[],this.height=void 0,this.literals="",this.properties=[],this.propertyLink="url",this.propertyLinkValue="",this.propertyTitle="",this.titleAction="",this.restoreActionForm();}showMore(){this.addItem();}generateNewItem(o){return {name:`Register ${o}`,email:`register${o}@po-ui.com`,phone:`(55) ${o}234567`,location:"Brazil",company:`Company ${o}`,url:this.propertyLinkValue,zipCode:`${o}221`}}restoreActionForm(){this.action={label:"",visible:null};}showAction(o){this.poNotification.success(`Action clicked: ${o}`);}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-list-view-labs"]],standalone:false,decls:35,vars:30,consts:[["propertiesForm","ngForm"],["actionForm","ngForm"],[3,"p-show-more","p-title-action","p-actions","p-components-size","p-height","p-hide-select-all","p-items","p-literals","p-property-link","p-property-title","p-select","p-show-more-disabled"],["p-list-view-content-template",""],["p-list-view-detail-template",""],[1,"po-row"],["p-label","Add Item",1,"po-md-3",3,"p-click"],["p-label","Action",1,"po-md-6",3,"p-value"],["name","propertyTitle","p-help","Ex.: email","p-label","Property title",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel","p-options"],["name","height","p-help","Ex.: 200","p-label","Height",1,"po-md-6","po-lg-3",3,"ngModelChange","p-change","ngModel"],["name","propertyLinkValue","p-help",'Ex.: "http://po.com.br"',"p-label","Title Link",1,"po-md-6",3,"ngModelChange","ngModel"],["name","literals","p-help",'Ex.: { "hideDetails": "Esconder detalhes", "showDetails": "Ver detalhes", "loadMoreData": "Ver mais", "noData": "Sem itens cadastrados" }',"p-label","Literals",1,"po-md-12","po-lg-6",3,"ngModelChange","p-change","ngModel"],["name","size","p-label","Components size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","properties","p-columns","4","p-label","Properties","p-help",'To enable the "Hide Select All" option, you must select the "Select" option first.',1,"po-md-12",3,"ngModelChange","p-change","ngModel","p-options"],["name","actionAction","p-clean","","p-label","Action",1,"po-md-6",3,"ngModelChange","ngModel"],["name","actionLabel","p-label","Label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","actionURL","p-label","URL",1,"po-md-6",3,"ngModelChange","ngModel"],["name","type","p-label","Type",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel","p-options"],["name","icon","p-label","Icon",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel","p-options"],["name","action","p-columns","4","p-indeterminate","","p-label","Action properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Add Action",1,"po-md-4","po-lg-3",3,"p-click","p-disabled"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"],["p-label","Name",1,"po-md-6","po-lg-3",3,"p-value"],["p-label","Email",1,"po-md-6","po-lg-3",3,"p-value"],["p-label","Location",1,"po-md-6","po-lg-3",3,"p-value"],["p-label","Phone",1,"po-md-6","po-lg-3",3,"p-value"],["p-label","Company",1,"po-md-6","po-lg-3",3,"p-value"],["p-label","Zip Code",1,"po-md-6","po-lg-3",3,"p-value"]],template:function(l,n){if(l&1){let d=Ix();Sl(0,"po-list-view",2),ft("p-show-more",function(){return n.showMore()})("p-title-action",function(){return n.changeAction("p-title-action")}),ew(1,We,5,4,"ng-template",3)(2,Re,3,2,"ng-template",4),og(),Wl(3,"po-divider"),Sl(4,"div",5)(5,"po-button",6),ft("p-click",function(){return n.addItem()}),og()(),Wl(6,"po-divider"),Sl(7,"div",5),Wl(8,"po-info",7),og(),Wl(9,"po-divider"),Sl(10,"form",null,0)(12,"div",5)(13,"po-select",8),Cw("ngModelChange",function(p){return Ky(d),oN(n.propertyTitle,p)||(n.propertyTitle=p),Xy(p)}),og(),n0(),Sl(14,"po-number",9),Cw("ngModelChange",function(p){return Ky(d),oN(n.height,p)||(n.height=p),Xy(p)}),ft("p-change",function(){return n.changeLiterals()}),og(),n0(),Sl(15,"po-input",10),Cw("ngModelChange",function(p){return Ky(d),oN(n.propertyLinkValue,p)||(n.propertyLinkValue=p),Xy(p)}),og(),n0(),Sl(16,"po-input",11),Cw("ngModelChange",function(p){return Ky(d),oN(n.literals,p)||(n.literals=p),Xy(p)}),ft("p-change",function(){return n.changeLiterals()}),og(),n0(),Sl(17,"po-radio-group",12),Cw("ngModelChange",function(p){return Ky(d),oN(n.componentsSize,p)||(n.componentsSize=p),Xy(p)}),og(),n0(),og(),Sl(18,"div",5)(19,"po-checkbox-group",13),Cw("ngModelChange",function(p){return Ky(d),oN(n.properties,p)||(n.properties=p),Xy(p)}),ft("p-change",function(){return n.changeActionOptions()}),og(),n0(),og()(),Wl(20,"po-divider"),Sl(21,"form",null,1)(23,"div",5)(24,"po-input",14),Cw("ngModelChange",function(p){return Ky(d),oN(n.action.action,p)||(n.action.action=p),Xy(p)}),og(),n0(),Sl(25,"po-input",15),Cw("ngModelChange",function(p){return Ky(d),oN(n.action.label,p)||(n.action.label=p),Xy(p)}),og(),n0(),Sl(26,"po-input",16),Cw("ngModelChange",function(p){return Ky(d),oN(n.action.url,p)||(n.action.url=p),Xy(p)}),og(),n0(),Sl(27,"po-select",17),Cw("ngModelChange",function(p){return Ky(d),oN(n.action.type,p)||(n.action.type=p),Xy(p)}),og(),n0(),Sl(28,"po-select",18),Cw("ngModelChange",function(p){return Ky(d),oN(n.action.icon,p)||(n.action.icon=p),Xy(p)}),og(),n0(),Sl(29,"po-checkbox-group",19),Cw("ngModelChange",function(p){return Ky(d),oN(n.action,p)||(n.action=p),Xy(p)}),og(),n0(),og(),Sl(30,"div",5)(31,"po-button",20),ft("p-click",function(){return n.addAction(n.action)}),og()()(),Wl(32,"po-divider"),Sl(33,"div",5)(34,"po-button",21),ft("p-click",function(){return Ky(d),kx(22).reset(),Xy(n.restore())}),og()();}if(l&2){let d=kx(22);rw("p-actions",n.actions)("p-components-size",n.componentsSize)("p-height",n.height)("p-hide-select-all",n.properties.includes("hideSelectAll"))("p-items",n.items)("p-literals",n.customLiterals)("p-property-link",n.propertyLink)("p-property-title",n.propertyTitle)("p-select",n.properties.includes("select"))("p-show-more-disabled",n.properties.includes("showMoreDisabled")),Lp(8),rw("p-value",n.titleAction),Lp(5),ww("ngModel",n.propertyTitle),rw("p-options",n.propertyTitleOptions),i0(),Lp(),ww("ngModel",n.height),i0(),Lp(),ww("ngModel",n.propertyLinkValue),i0(),Lp(),ww("ngModel",n.literals),i0(),Lp(),ww("ngModel",n.componentsSize),rw("p-options",n.componentsSizeOptions),i0(),Lp(2),ww("ngModel",n.properties),rw("p-options",n.propertiesOptions),i0(),Lp(5),ww("ngModel",n.action.action),i0(),Lp(),ww("ngModel",n.action.label),i0(),Lp(),ww("ngModel",n.action.url),i0(),Lp(),ww("ngModel",n.action.type),rw("p-options",n.typeOptions),i0(),Lp(),ww("ngModel",n.action.icon),rw("p-options",n.iconOptions),i0(),Lp(),ww("ngModel",n.action),rw("p-options",n.actionOptions),i0(),Lp(2),rw("p-disabled",d.invalid);}},dependencies:[Q9,Z9,K9,wk,_k,Qt,mv,b3,L3,Bhe,Tde,Whe,jhe,oNe,cme,pme],encapsulation:2,changeDetection:1})}return a})();var Ue=a=>({"docs-sample-code-tabs":a}),Ae=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-list-view-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),rN(3,"PO List View Labs"),og(),Sl(4,"a",2),ft("click",function(){return n.toggleSampleCodeTabs()}),Wl(5,"span"),rN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),rN(12,"sample-po-list-view-labs/sample-po-list-view-labs.component.html"),og(),Sl(13,"pre",7),rN(14,`<po-list-view
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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),rN(18,"sample-po-list-view-labs/sample-po-list-view-labs.component.ts"),og(),Sl(19,"pre",9),rN(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-list-view-labs"),og(),Wl(23,"hr")),l&2&&(Lp(5),Gx("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),rw("ngClass",gN(4,Ue,n.hideSampleCodeTabs)));},dependencies:[SO,Ka,Ume,$me,De],encapsulation:2,changeDetection:1})}return a})();var J=(()=>{class a{getItems(){return [{hireStatus:"hired",name:"James Johnson",city:"Ontario",age:24,idCard:"AB34lxi90",email:"james@johnson.com",telephone:"1-541-754-3010",jobDescription:"Systems Analyst",url:"https://po-ui.io/"},{hireStatus:"progress",name:"Brian Brown",city:"Buffalo",age:23,idCard:"HG56lds54",email:"brian@brown.com",telephone:"1-543-456-9876",jobDescription:"Trainee",url:"https://po-ui.io/"},{hireStatus:"canceled",name:"Mary Davis",city:"Albany",age:31,idCard:"DF23cfr65",email:"mary@davis.com",telephone:"1-521-223-3232",jobDescription:"Programmer"},{hireStatus:"progress",name:"Margaret Garcia",city:"New York",age:29,idCard:"GF45fgh34",email:"margaret@garcia.com",telephone:"1-541-344-2211",jobDescription:"Web developer",url:"https://po-ui.io/"},{hireStatus:"hired",name:"Emma Hall",city:"Ontario",age:34,idCard:"RF76jut21",email:"emma@hall.com",telephone:"1-555-321-3234",jobDescription:"Recruiter",url:"https://po-ui.io/"},{hireStatus:"progress",name:"Lucas Clark",city:"Utica",age:32,idCard:"HY21kgu65",email:"lucas@clark.com",telephone:"1-541-322-4343",jobDescription:"Consultant"},{hireStatus:"progress",name:"Ella Scott",city:"Ontario",age:24,idCard:"UL78flg68",email:"ella@scott.com",telephone:"1-229-324-3434",jobDescription:"DBA"},{hireStatus:"progress",name:"Chloe Walker",city:"Albany",age:29,idCard:"JH12oli98",email:"chloe@walker.com",telephone:"1-518-222-1212",jobDescription:"Programmer"}]}static \u0275fac=function(l){return new(l||a)};static \u0275prov=I({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();var $e=["detailsModal"];function Qe(a,C){if(a&1&&(Sl(0,"div",6),Wl(1,"po-info",14)(2,"po-info",15)(3,"po-info",16),EN(4,"uppercase"),og()),a&2){let o=C.$implicit;Lp(),rw("p-value",o.idCard),Lp(),rw("p-value",o.jobDescription),Lp(),rw("p-value",cN(CN(4,4,o.hireStatus)));}}function Ye(a,C){if(a&1&&(Sl(0,"div",6),Wl(1,"po-info",17)(2,"po-info",18),og()),a&2){let o=C.$implicit;Lp(),rw("p-value",o.age),Lp(),rw("p-value",o.city);}}var Me=(()=>{class a{poNotification=f(Yp);hiringProcessesService=f(J);detailsModalElement;hiringProcesses;hiringProcessesFiltered;labelFilter="";modalDetail=false;selectedActionItem={};titleDetailsModal="User Detail";actions=[{label:"Hire",action:this.hireCandidate.bind(this),disabled:this.isHiredOrCanceled.bind(this),icon:"an an-check"},{label:"Cancel",action:this.cancelCandidate.bind(this),disabled:this.isHiredOrCanceled.bind(this),type:"danger",icon:"an an-x"}];pageActions=[{label:"Hire selected",action:this.updateCandidates.bind(this,this.hireCandidate),disabled:this.disableHireButton.bind(this),icon:"an an-check"},{label:"Cancel selected",action:this.updateCandidates.bind(this,this.cancelCandidate),disabled:this.disableHireButton.bind(this),icon:"an an-x"}];filterSettings={action:this.hiringProcessesFilter.bind(this),placeholder:"Search"};ngOnInit(){this.hiringProcesses=this.hiringProcessesService.getItems(),this.hiringProcessesFiltered=[...this.hiringProcesses];}formatTitle(o){return `${o.idCard} - ${o.name}`}showDetail(o){return o.url}showDetailModal(o){this.setModalItem(o),this.detailsModalElement.open();}cancelCandidate(o){o.hireStatus="canceled",this.poNotification.error("Canceled candidate!");}disableHireButton(){return !this.hiringProcesses.find(o=>o.$selected)}hireCandidate(o){o.hireStatus="hired",this.poNotification.success("Hired candidate!");}hiringProcessesFilter(o){let l=typeof o=="string"?[o]:[...o];this.hiringProcessesFiltered=this.hiringProcesses.filter(n=>Object.keys(n).some(d=>!(n[d]instanceof Object)&&this.includeFilter(n[d],l)));}includeFilter(o,l){return l.some(n=>String(o).toLocaleLowerCase().includes(n.toLocaleLowerCase()))}isHiredOrCanceled(o){return o.hireStatus==="hired"||o.hireStatus==="canceled"}setModalItem(o){this.selectedActionItem=o,this.titleDetailsModal=`Get in touch with ${this.selectedActionItem.name}`;}updateCandidates(o){this.hiringProcesses.forEach(l=>{if(l.$selected){switch(l.hireStatus){case "progress":o.call(this,l);break;case "hired":this.poNotification.warning("This candidate has already been hired.");break;case "canceled":this.poNotification.error("This candidate has already been disqualified.");break}l.$selected=false;}});}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-list-view-hiring-processes"]],viewQuery:function(l,n){if(l&1&&ql($e,7),l&2){let d;lo(d=uo())&&(n.detailsModalElement=d.first);}},standalone:false,features:[we([J])],decls:16,vars:11,consts:[["detailsModal",""],["p-title","Hiring processes",3,"p-actions","p-filter"],["p-hide-select-all","","p-property-link","url","p-property-title","name","p-select","",3,"p-title-action","p-actions","p-items"],["p-list-view-content-template","",3,"p-title"],["p-list-view-detail-template","",3,"p-show-detail"],[3,"p-title"],[1,"po-row"],[1,"po-md-5","po-lg-4"],["p-size","xl","p-src","assets/graphics/avatar2.png"],[1,"po-md-7","po-lg-8"],[1,"po-mb-1"],[3,"p-value","p-type"],["p-label","Email",3,"p-value"],["p-label","Telephone",3,"p-value"],["p-label","Id Card",1,"po-lg-4",3,"p-value"],["p-label","Job description",1,"po-lg-4",3,"p-value"],["p-label","Hire status",1,"po-lg-4",3,"p-value"],["p-label","Age",1,"po-md-6",3,"p-value"],["p-label","City",1,"po-md-6",3,"p-value"]],template:function(l,n){l&1&&(Sl(0,"po-page-list",1)(1,"po-list-view",2),ft("p-title-action",function(c){return n.showDetailModal(c)}),ew(2,Qe,5,6,"ng-template",3)(3,Ye,3,2,"ng-template",4),og(),Sl(4,"po-modal",5,0)(6,"div",6)(7,"div",7),Wl(8,"po-avatar",8),og(),Sl(9,"div",9)(10,"div",10),Wl(11,"po-tag",11),og(),Sl(12,"div",10),Wl(13,"po-info",12),og(),Sl(14,"div",10),Wl(15,"po-info",13),og()()()()()),l&2&&(rw("p-actions",n.pageActions)("p-filter",n.filterSettings),Lp(),rw("p-actions",n.actions)("p-items",n.hiringProcessesFiltered),Lp(),rw("p-title",n.formatTitle),Lp(),rw("p-show-detail",n.showDetail),Lp(),rw("p-title",n.titleDetailsModal),Lp(7),rw("p-value",n.selectedActionItem.hireStatus)("p-type",n.selectedActionItem.hireStatus==="hired"?"success":"info"),Lp(2),rw("p-value",n.selectedActionItem.email),Lp(2),rw("p-value",n.selectedActionItem.telephone));},dependencies:[o3,Sa,jhe,oNe,cme,pme,Yo,pNe,FO],encapsulation:2,changeDetection:1})}return a})();var Ke=a=>({"docs-sample-code-tabs":a}),Te=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-list-view-hiring-processes-view"]],standalone:false,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),rN(3,"PO List View - Hiring Processes"),og(),Sl(4,"a",2),ft("click",function(){return n.toggleSampleCodeTabs()}),Wl(5,"span"),rN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),rN(12,"sample-po-list-view-hiring-processes/sample-po-list-view-hiring-processes.component.html"),og(),Sl(13,"pre",7),rN(14,`<po-page-list p-title="Hiring processes" [p-actions]="pageActions" [p-filter]="filterSettings">
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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),rN(18,"sample-po-list-view-hiring-processes/sample-po-list-view-hiring-processes.component.ts"),og(),Sl(19,"pre",9),rN(20,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),og(),Sl(21,"label",6),rN(22,"sample-po-list-view-hiring-processes/sample-po-list-view-hiring-processes.service.ts"),og(),Sl(23,"pre",9),rN(24,`import { Injectable } from '@angular/core';

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
`),og()()()()(),Sl(25,"div",10),Wl(26,"sample-po-list-view-hiring-processes"),og(),Wl(27,"hr")),l&2&&(Lp(5),Gx("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),rw("ngClass",gN(4,Ke,n.hideSampleCodeTabs)));},dependencies:[SO,Ka,Ume,$me,Me],encapsulation:2,changeDetection:1})}return a})();var ke=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-list-view-doc"]],standalone:false,decls:707,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-list-view-content-template"],["href","/documentation/po-list-view-detail-template"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","PoListViewAction[]"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","any[]"],["pan","",1,"docs-api-property-type","PoListViewLiterals"],["href","/documentation/po-i18n"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","Array<PoPopupAction>"]],template:function(l,n){l&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),rN(3,"import { PoListViewModule } from '@po-ui/ng-components';"),og()(),Sl(4,"div",2)(5,"p"),rN(6,"M\xF3dulo do componente "),Sl(7,"code"),rN(8,"po-list-view"),og(),rN(9,"."),og()(),Sl(10,"h3",3),rN(11,"Componente"),og(),Sl(12,"h4",4)(13,"code",5),rN(14,"PoListViewComponent"),og()(),Sl(15,"div",2)(16,"p"),rN(17,`Componente de lista que recebe um array de objetos e renderiza de forma din\xE2mica os dados de
acordo com a necessidade de cada tela e deve ser utilizado em conjunto com as diretivas de `),Sl(18,"em"),rN(19,"templates"),og(),Sl(20,"strong")(21,"a",6),rN(22,"p-list-view-content-template"),og()(),rN(23,` e
`),Sl(24,"strong")(25,"a",7),rN(26,"p-list-view-detail-template"),og()(),rN(27,"."),og(),Sl(28,"p"),rN(29,`O componente disponibiliza uma \xE1rea espec\xEDfica para exibi\xE7\xE3o informa\xE7\xF5es adicionais,
atrav\xE9s da diretiva `),Sl(30,"strong")(31,"a",7),rN(32,"p-list-view-detail-template"),og()(),rN(33,". "),og()(),Sl(34,"div",8)(35,"h4",9),rN(36,"Seletor"),og(),Sl(37,"pre",10),rN(38,`<po-list-view
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
`),og()(),Sl(39,"h4",11),rN(40,"Propriedades"),og(),Sl(41,"table",12)(42,"tr",13)(43,"th",14),rN(44,"Nome"),og(),Sl(45,"th",14),rN(46,"Tipo"),og(),Sl(47,"th",14),rN(48,"Padr\xE3o"),og(),Sl(49,"th",14),rN(50,"Descri\xE7\xE3o"),og()(),Sl(51,"tr",15)(52,"td",16)(53,"div",17)(54,"span",18),rN(55," p-actions"),Wl(56,"br"),og()()(),Sl(57,"td",19)(58,"code",20),rN(59,"PoListViewAction[]"),og()(),Sl(60,"td",21),rN(61,"-"),og(),Sl(62,"td",22)(63,"em")(64,"strong"),rN(65,"(opcional)"),og()(),Sl(66,"p"),rN(67,"Lista de a\xE7\xF5es que ser\xE3o exibidas no componente."),og()()(),Sl(68,"tr",15)(69,"td",16)(70,"div",17)(71,"span",18),rN(72," p-components-size"),Wl(73,"br"),og()()(),Sl(74,"td",19)(75,"code",23),rN(76,"string"),og()(),Sl(77,"td",21)(78,"p")(79,"code"),rN(80,"medium"),og()()(),Sl(81,"td",22)(82,"em")(83,"strong"),rN(84,"(opcional)"),og()(),Sl(85,"p"),rN(86,"Define o tamanho dos componentes de formul\xE1rio no template:"),og(),Sl(87,"ul")(88,"li")(89,"code"),rN(90,"small"),og(),rN(91,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),og(),Sl(92,"li")(93,"code"),rN(94,"medium"),og(),rN(95,": aplica a medida medium de cada componente."),og()(),Sl(96,"blockquote")(97,"p"),rN(98,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Sl(99,"code"),rN(100,"medium"),og(),rN(101,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Sl(102,"a",24),rN(103,"po-theme"),og(),rN(104,"."),og()()()(),Sl(105,"tr",15)(106,"td",16)(107,"div",17)(108,"span",18),rN(109," p-height"),Wl(110,"br"),og()()(),Sl(111,"td",19)(112,"code",25),rN(113,"number"),og()(),Sl(114,"td",21),rN(115,"-"),og(),Sl(116,"td",22)(117,"em")(118,"strong"),rN(119,"(opcional)"),og()(),Sl(120,"p"),rN(121,"Define a altura do "),Sl(122,"code"),rN(123,"po-list-view"),og(),rN(124," em "),Sl(125,"em"),rN(126,"pixels"),og(),rN(127,"."),og()()(),Sl(128,"tr",15)(129,"td",16)(130,"div",17)(131,"span",18),rN(132," p-hide-select-all"),Wl(133,"br"),og()()(),Sl(134,"td",19)(135,"code",26),rN(136,"boolean"),og()(),Sl(137,"td",21)(138,"p")(139,"code"),rN(140,"false"),og()()(),Sl(141,"td",22)(142,"p"),rN(143,"Esconde o "),Sl(144,"em"),rN(145,"checkbox"),og(),rN(146," para sele\xE7\xE3o de todos os itens."),og()()(),Sl(147,"tr",15)(148,"td",16)(149,"div",17)(150,"span",18),rN(151," p-items"),Wl(152,"br"),og()()(),Sl(153,"td",19)(154,"code",27),rN(155,"any[]"),og()(),Sl(156,"td",21),rN(157,"-"),og(),Sl(158,"td",22)(159,"p"),rN(160,"Lista de itens que ser\xE3o exibidos no componente."),og()()(),Sl(161,"tr",15)(162,"td",16)(163,"div",17)(164,"span",18),rN(165," p-literals"),Wl(166,"br"),og()()(),Sl(167,"td",19)(168,"code",28),rN(169,"PoListViewLiterals"),og()(),Sl(170,"td",21),rN(171,"-"),og(),Sl(172,"td",22)(173,"em")(174,"strong"),rN(175,"(opcional)"),og()(),Sl(176,"p"),rN(177,"Objeto com as literais usadas no "),Sl(178,"code"),rN(179,"po-list-view"),og(),rN(180,"."),og(),Sl(181,"p"),rN(182,"Existem duas maneiras de customizar o componente, passando um objeto com todas as literais dispon\xEDveis:"),og(),Sl(183,"pre")(184,"code"),rN(185,`const customLiterals: PoListViewLiterals = {
  hideDetail: 'Ocultar detalhes completamente',
  loadMoreData: 'Mais dados',
  showDetail: 'Mostrar mais detalhes',
  selectAll: 'Selecionar todos os itens'
};
`),og()(),Sl(186,"p"),rN(187,"Ou passando apenas as literais que deseja customizar:"),og(),Sl(188,"pre")(189,"code"),rN(190,`const customLiterals: PoListViewLiterals = {
  showDetail: 'Mostrar mais detalhes'
};
`),og()(),Sl(191,"p"),rN(192,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente."),og(),Sl(193,"pre")(194,"code"),rN(195,`<po-list-view
  [p-literals]="customLiterals">
</po-list-view>
`),og()(),Sl(196,"blockquote")(197,"p"),rN(198,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),Sl(199,"a",29)(200,"code"),rN(201,"PoI18nService"),og()(),rN(202," ou do browser."),og()()()(),Sl(203,"tr",15)(204,"td",16)(205,"div",17)(206,"span",18),rN(207," p-property-link"),Wl(208,"br"),og()()(),Sl(209,"td",19)(210,"code",23),rN(211,"string"),og()(),Sl(212,"td",21),rN(213,"-"),og(),Sl(214,"td",22)(215,"em")(216,"strong"),rN(217,"(opcional)"),og()(),Sl(218,"p"),rN(219,"Recebe uma propriedade que ser\xE1 utilizada para recuperar o valor do objeto que ser\xE1 usado como link para o t\xEDtulo."),og()()(),Sl(220,"tr",15)(221,"td",16)(222,"div",17)(223,"span",18),rN(224," p-property-title"),Wl(225,"br"),og()()(),Sl(226,"td",19)(227,"code",23),rN(228,"string"),og()(),Sl(229,"td",21),rN(230,"-"),og(),Sl(231,"td",22)(232,"em")(233,"strong"),rN(234,"(opcional)"),og()(),Sl(235,"p"),rN(236,"Recebe uma propriedade que ser\xE1 utilizada para recuperar o valor do objeto que ser\xE1 exibido como o t\xEDtulo de cada item."),og()()(),Sl(237,"tr",15)(238,"td",16)(239,"div",17)(240,"span",18),rN(241," p-select"),Wl(242,"br"),og()()(),Sl(243,"td",19)(244,"code",26),rN(245,"boolean"),og()(),Sl(246,"td",21)(247,"p")(248,"code"),rN(249,"false"),og()()(),Sl(250,"td",22)(251,"em")(252,"strong"),rN(253,"(opcional)"),og()(),Sl(254,"p"),rN(255,"Habilita um "),Sl(256,"em"),rN(257,"checkbox"),og(),rN(258," para cada item da lista. Todos os items possuem a propriedade din\xE2mica "),Sl(259,"code"),rN(260,"$selected"),og(),rN(261,` para identificar se o
item est\xE1 selecionado, por exemplo:`),og(),Sl(262,"pre")(263,"code"),rN(264,`item.$selected

// ou

item['$selected']
`),og()()()(),Sl(265,"tr",15)(266,"td",16)(267,"div",30)(268,"span",31),rN(269," (p-show-detail)"),Wl(270,"br"),og()()(),Sl(271,"td",19)(272,"code",32),rN(273,"EventEmitter"),og()(),Sl(274,"td",21),rN(275,"-"),og(),Sl(276,"td",22)(277,"em")(278,"strong"),rN(279,"(opcional)"),og()(),Sl(280,"p"),rN(281,"A\xE7\xE3o que ser\xE1 executada ao clicar no bot\xE3o exibir detalhes."),og(),Sl(282,"p"),rN(283,"Ao ser disparado, o m\xE9todo passa como par\xE2metros os detalhes que ser\xE3o exibidos."),og()()(),Sl(284,"tr",15)(285,"td",16)(286,"div",30)(287,"span",31),rN(288," (p-show-more)"),Wl(289,"br"),og()()(),Sl(290,"td",19)(291,"code",32),rN(292,"EventEmitter"),og()(),Sl(293,"td",21),rN(294,"-"),og(),Sl(295,"td",22)(296,"em")(297,"strong"),rN(298,"(opcional)"),og()(),Sl(299,"p"),rN(300,'Recebe uma a\xE7\xE3o, que ser\xE1 executada quando clicar no bot\xE3o "Carregar mais resultados".'),og(),Sl(301,"blockquote")(302,"p"),rN(303,"Caso nenhuma a\xE7\xE3o for definida o mesmo n\xE3o ficar\xE1 vis\xEDvel."),og()()()(),Sl(304,"tr",15)(305,"td",16)(306,"div",17)(307,"span",18),rN(308," p-show-more-disabled"),Wl(309,"br"),og()()(),Sl(310,"td",19)(311,"code",26),rN(312,"boolean"),og()(),Sl(313,"td",21),rN(314,"-"),og(),Sl(315,"td",22)(316,"em")(317,"strong"),rN(318,"(opcional)"),og()(),Sl(319,"p"),rN(320,"Indica que o bot\xE3o "),Sl(321,"code"),rN(322,"Carregar Mais Resultados"),og(),rN(323," ser\xE1 desabilitado."),og()()(),Sl(324,"tr",15)(325,"td",16)(326,"div",30)(327,"span",31),rN(328," (p-title-action)"),Wl(329,"br"),og()()(),Sl(330,"td",19)(331,"code",32),rN(332,"EventEmitter"),og()(),Sl(333,"td",21),rN(334,"-"),og(),Sl(335,"td",22)(336,"em")(337,"strong"),rN(338,"(opcional)"),og()(),Sl(339,"p"),rN(340,"A\xE7\xE3o que ser\xE1 executada ao clicar no t\xEDtulo."),og(),Sl(341,"p"),rN(342,"Ao ser disparado, o m\xE9todo inserido na a\xE7\xE3o ir\xE1 receber como par\xE2metro o item da lista clicado."),og()()()(),Sl(343,"h3"),rN(344,"Interfaces"),og(),Sl(345,"h4",33)(346,"code",5),rN(347,"PoListViewAction"),og()(),Sl(348,"div",2)(349,"p"),rN(350,"Interface que define as a\xE7\xF5es do componente "),Sl(351,"code"),rN(352,"po-list-view"),og(),rN(353,"."),og(),Sl(354,"blockquote")(355,"p"),rN(356,"As propriedades "),Sl(357,"code"),rN(358,"subItems"),og(),rN(359,", "),Sl(360,"code"),rN(361,"separator"),og(),rN(362,", "),Sl(363,"code"),rN(364,"url"),og(),rN(365," e "),Sl(366,"code"),rN(367,"selected"),og(),rN(368,` ser\xE3o vistas a partir da terceira a\xE7\xE3o e somente quando
definir quatro a\xE7\xF5es ou mais.`),og()()(),Sl(369,"h4",11),rN(370,"Propriedades"),og(),Sl(371,"table",12)(372,"tr",13)(373,"th",14),rN(374,"Nome"),og(),Sl(375,"th",14),rN(376,"Tipo"),og(),Sl(377,"th",14),rN(378,"Descri\xE7\xE3o"),og()(),Sl(379,"tr",15)(380,"td",16)(381,"div",17)(382,"span",18),rN(383," action"),Wl(384,"br"),og()()(),Sl(385,"td",19)(386,"code",34),rN(387,"Function"),og()(),Sl(388,"td",22)(389,"em")(390,"strong"),rN(391,"(opcional)"),og()(),Sl(392,"p"),rN(393,"A\xE7\xE3o que ser\xE1 executada, sendo poss\xEDvel passar o nome ou a refer\xEAncia da fun\xE7\xE3o."),og(),Sl(394,"p"),rN(395,"A action tamb\xE9m pode ser executada para o agrupador de subitens quando a a\xE7\xE3o possuir "),Sl(396,"code"),rN(397,"subItems"),og(),rN(398,"."),og(),Sl(399,"blockquote")(400,"p"),rN(401,"Para que a fun\xE7\xE3o seja executada no contexto do componente, utilize "),Sl(402,"em"),rN(403,"bind"),og(),rN(404,`:
`),Sl(405,"code"),rN(406,"action: this.myFunction.bind(this)"),og()()()()(),Sl(407,"tr",15)(408,"td",16)(409,"div",17)(410,"span",18),rN(411," disabled"),Wl(412,"br"),og()()(),Sl(413,"td",19)(414,"code",26),rN(415,"boolean "),og(),Sl(416,"code",34),rN(417," Function"),og()(),Sl(418,"td",22)(419,"em")(420,"strong"),rN(421,"(opcional)"),og()(),Sl(422,"p"),rN(423,"Desabilita a a\xE7\xE3o. Aceita um valor booleano ou uma fun\xE7\xE3o que retorna booleano."),og()()(),Sl(424,"tr",15)(425,"td",16)(426,"div",17)(427,"span",18),rN(428," icon"),Wl(429,"br"),og()()(),Sl(430,"td",19)(431,"code",23),rN(432,"string "),og(),Sl(433,"code",35),rN(434," TemplateRef<void>"),og()(),Sl(435,"td",22)(436,"em")(437,"strong"),rN(438,"(opcional)"),og()(),Sl(439,"p"),rN(440,"\xCDcone exibido ao lado esquerdo do r\xF3tulo."),og(),Sl(441,"p"),rN(442,"Aceita \xEDcones da "),Sl(443,"a",36),rN(444,"Biblioteca de \xEDcones"),og(),rN(445,`, fontes externas (ex: Font Awesome)
ou um `),Sl(446,"code"),rN(447,"TemplateRef"),og(),rN(448," para \xEDcones customizados."),og(),Sl(449,"pre")(450,"code"),rN(451,`{ label: 'A\xE7\xE3o', icon: 'an an-newspaper' }
`),og()()()(),Sl(452,"tr",15)(453,"td",16)(454,"div",17)(455,"span",18),rN(456," label"),Wl(457,"br"),og()()(),Sl(458,"td",19)(459,"code",23),rN(460,"string"),og()(),Sl(461,"td",22)(462,"p"),rN(463,"R\xF3tulo da a\xE7\xE3o."),og(),Sl(464,"p"),rN(465,"A label tamb\xE9m pode representar o agrupador de subitens quando a a\xE7\xE3o possuir "),Sl(466,"code"),rN(467,"subItems"),og(),rN(468,"."),og()()(),Sl(469,"tr",15)(470,"td",16)(471,"div",17)(472,"span",18),rN(473," selected"),Wl(474,"br"),og()()(),Sl(475,"td",19)(476,"code",26),rN(477,"boolean"),og()(),Sl(478,"td",22)(479,"em")(480,"strong"),rN(481,"(opcional)"),og()(),Sl(482,"p"),rN(483,"Define se a a\xE7\xE3o est\xE1 selecionada."),og()()(),Sl(484,"tr",15)(485,"td",16)(486,"div",17)(487,"span",18),rN(488," separator"),Wl(489,"br"),og()()(),Sl(490,"td",19)(491,"code",26),rN(492,"boolean"),og()(),Sl(493,"td",22)(494,"em")(495,"strong"),rN(496,"(opcional)"),og()(),Sl(497,"p"),rN(498,"Atribui uma linha separadora acima do item."),og()()(),Sl(499,"tr",15)(500,"td",16)(501,"div",17)(502,"span",18),rN(503," subItems"),Wl(504,"br"),og()()(),Sl(505,"td",19)(506,"code",37),rN(507,"Array<PoPopupAction>"),og()(),Sl(508,"td",22)(509,"em")(510,"strong"),rN(511,"(opcional)"),og()(),Sl(512,"p"),rN(513,"Define uma lista de subitens para cria\xE7\xE3o de menus aninhados."),og(),Sl(514,"p"),rN(515,`Ao definir esta propriedade, o item exibir\xE1 um \xEDcone indicador de subn\xEDvel.
Recomenda-se utilizar no m\xE1ximo tr\xEAs n\xEDveis hier\xE1rquicos para garantir a usabilidade.`),og(),Sl(516,"blockquote")(517,"p"),rN(518,"As propriedades "),Sl(519,"code"),rN(520,"disabled"),og(),rN(521,", "),Sl(522,"code"),rN(523,"type"),og(),rN(524," e "),Sl(525,"code"),rN(526,"visible"),og(),rN(527," n\xE3o s\xE3o aplicadas visualmente ao item agrupador."),og()(),Sl(528,"blockquote")(529,"p"),rN(530,"Quando "),Sl(531,"code"),rN(532,"url"),og(),rN(533," \xE9 informada em um agrupador, o redirecionamento ter\xE1 prioridade e os subitens n\xE3o ser\xE3o abertos."),og()(),Sl(534,"blockquote")(535,"p"),rN(536,"Em subn\xEDveis aninhados, o "),Sl(537,"code"),rN(538,"icon"),og(),rN(539," do agrupador \xE9 substitu\xEDdo pelo indicador de navega\xE7\xE3o (seta)."),og()()()(),Sl(540,"tr",15)(541,"td",16)(542,"div",17)(543,"span",18),rN(544," type"),Wl(545,"br"),og()()(),Sl(546,"td",19)(547,"code",23),rN(548,"string"),og()(),Sl(549,"td",22)(550,"em")(551,"strong"),rN(552,"(opcional)"),og()(),Sl(553,"p"),rN(554,"Define a cor do item."),og(),Sl(555,"p"),rN(556,"Valores v\xE1lidos:"),og(),Sl(557,"ul")(558,"li")(559,"code"),rN(560,"default"),og()(),Sl(561,"li")(562,"code"),rN(563,"danger"),og()()()()(),Sl(564,"tr",15)(565,"td",16)(566,"div",17)(567,"span",18),rN(568," url"),Wl(569,"br"),og()()(),Sl(570,"td",19)(571,"code",23),rN(572,"string"),og()(),Sl(573,"td",22)(574,"em")(575,"strong"),rN(576,"(opcional)"),og()(),Sl(577,"p"),rN(578,"URL para redirecionamento. Aceita rotas internas e links externos."),og(),Sl(579,"p"),rN(580,`A url tamb\xE9m pode ser configurada para o agrupador de subitens.
Entretanto, quando a `),Sl(581,"code"),rN(582,"url"),og(),rN(583," \xE9 informada em um agrupador, o clique "),Sl(584,"strong"),rN(585,"n\xE3o abrir\xE1 os subitens"),og(),rN(586,`, pois o item ser\xE1
tratado como um link e o redirecionamento ter\xE1 prioridade sobre a exibi\xE7\xE3o da lista.`),og(),Sl(587,"blockquote")(588,"p"),rN(589,"Quando informada, tem prioridade sobre a propriedade "),Sl(590,"code"),rN(591,"action"),og(),rN(592,"."),og()()()(),Sl(593,"tr",15)(594,"td",16)(595,"div",17)(596,"span",18),rN(597," visible"),Wl(598,"br"),og()()(),Sl(599,"td",19)(600,"code",26),rN(601,"boolean "),og(),Sl(602,"code",34),rN(603," Function"),og()(),Sl(604,"td",22)(605,"em")(606,"strong"),rN(607,"(opcional)"),og()(),Sl(608,"p"),rN(609,"Define a visibilidade da a\xE7\xE3o. Aceita um valor booleano ou uma fun\xE7\xE3o que retorna booleano."),og()()()(),Sl(610,"h4",33)(611,"code",5),rN(612,"PoListViewLiterals"),og()(),Sl(613,"div",2)(614,"p"),rN(615,"Interface para defini\xE7\xE3o das literais usadas no "),Sl(616,"code"),rN(617,"po-list-view"),og(),rN(618,"."),og()(),Sl(619,"h4",11),rN(620,"Propriedades"),og(),Sl(621,"table",12)(622,"tr",13)(623,"th",14),rN(624,"Nome"),og(),Sl(625,"th",14),rN(626,"Tipo"),og(),Sl(627,"th",14),rN(628,"Descri\xE7\xE3o"),og()(),Sl(629,"tr",15)(630,"td",16)(631,"div",17)(632,"span",18),rN(633," hideDetails"),Wl(634,"br"),og()()(),Sl(635,"td",19)(636,"code",23),rN(637,"string"),og()(),Sl(638,"td",22)(639,"em")(640,"strong"),rN(641,"(opcional)"),og()(),Sl(642,"p"),rN(643,"R\xF3tulo do bot\xE3o que oculta os detalhes do item."),og()()(),Sl(644,"tr",15)(645,"td",16)(646,"div",17)(647,"span",18),rN(648," loadMoreData"),Wl(649,"br"),og()()(),Sl(650,"td",19)(651,"code",23),rN(652,"string"),og()(),Sl(653,"td",22)(654,"em")(655,"strong"),rN(656,"(opcional)"),og()(),Sl(657,"p"),rN(658,"R\xF3tulo do bot\xE3o que deve carregar mais resultados."),og()()(),Sl(659,"tr",15)(660,"td",16)(661,"div",17)(662,"span",18),rN(663," noData"),Wl(664,"br"),og()()(),Sl(665,"td",19)(666,"code",23),rN(667,"string"),og()(),Sl(668,"td",22)(669,"em")(670,"strong"),rN(671,"(opcional)"),og()(),Sl(672,"p"),rN(673,"R\xF3tulo exibido quando n\xE3o existem itens para serem exibidos na lista."),og()()(),Sl(674,"tr",15)(675,"td",16)(676,"div",17)(677,"span",18),rN(678," selectAll"),Wl(679,"br"),og()()(),Sl(680,"td",19)(681,"code",23),rN(682,"string"),og()(),Sl(683,"td",22)(684,"em")(685,"strong"),rN(686,"(opcional)"),og()(),Sl(687,"p"),rN(688,"R\xF3tulo do "),Sl(689,"code"),rN(690,"checkbox"),og(),rN(691," da op\xE7\xE3o de selecionar todos."),og()()(),Sl(692,"tr",15)(693,"td",16)(694,"div",17)(695,"span",18),rN(696," showDetails"),Wl(697,"br"),og()()(),Sl(698,"td",19)(699,"code",23),rN(700,"string"),og()(),Sl(701,"td",22)(702,"em")(703,"strong"),rN(704,"(opcional)"),og()(),Sl(705,"p"),rN(706,"R\xF3tulo do bot\xE3o que exibe os detalhes do item."),og()()()()());},dependencies:[Ka],encapsulation:2,changeDetection:1})}return a})();var Fe=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(o,l){this.route=o,this.router=l;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(o=>{let l=o.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(o){this.router.navigate([],{queryParams:{view:o},queryParamsHandling:"merge"}),this.activeTab=o;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(l){return new(l||a)(w(Xn),w(En))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","List View",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,n){l&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return n.changeTab("doc")}),Wl(3,"sample-po-list-view-doc"),og(),Sl(4,"po-tab",3),ft("p-click",function(){return n.changeTab("web")}),Wl(5,"sample-po-list-view-basic-view")(6,"sample-po-list-view-labs-view")(7,"sample-po-list-view-hiring-processes-view"),og()()()),l&2&&(rw("p-actions",n.actions),Lp(2),rw("p-active",n.activeTab==="doc"),Lp(2),rw("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"));},dependencies:[sNe,Ume,$me,Ve,Ae,Te,ke],encapsulation:2,changeDetection:1})}return a})();var tt=[{path:"",component:Fe}],Ie=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=fe({type:a});static \u0275inj=ue({imports:[mL.forChild(tt),mL]})}return a})();var Bt=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=fe({type:a});static \u0275inj=ue({imports:[sr,Ie]})}return a})();export{Bt as DocPoListViewModule};