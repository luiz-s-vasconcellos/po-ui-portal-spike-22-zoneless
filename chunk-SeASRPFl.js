import {f as fe,u as ue,s as sr,a as uL,C,c3 as Xn,E as En,U as Un,b as f,ae as Be$1,n as nb,W,w,K as Kz,J as zl,T as nw,bs as uN,a7 as lN,an as DO,aH as Ka,b8 as qme,b9 as Yme,H as Il,q as Qx,R as og,a1 as ft,A as Lp,ar as Ux,au as dg,aX as G9,aF as $9,aY as z9,aG as mk,aZ as hk,b0 as Qt,cs as qpe,b1 as mv,b4 as O3,cp as Hhe,c8 as Dde,aJ as qhe,bH as k3,cX as L3,c9 as Yhe,a3 as cNe,aB as Dx,aM as ww,aN as QA,a2 as JE,aO as Ew,aP as e0,av as Gl,aw as co,ax as lo,dl as Nw,dm as vNe,X as we$1,br as iN,aD as Xy,aT as eN,aE as Qy}from'./main-QSTLMRDK.js';var ke=()=>({label:"PO UI - Angular Framework",link:"/"}),Le=a=>[a],xe=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-menu-basic"]],standalone:false,decls:1,vars:4,consts:[[3,"p-menus"]],template:function(r,i){r&1&&zl(0,"po-menu",0),r&2&&nw("p-menus",uN(2,Le,lN(1,ke)));},dependencies:[Kz],encapsulation:2,changeDetection:1})}return a})();var De=a=>({"docs-sample-code-tabs":a}),ve=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-menu-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Menu Basic"),og(),Il(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-menu-basic/sample-po-menu-basic.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-menu [p-menus]="[{ label: 'PO UI - Angular Framework', link: '/' }]"></po-menu>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-menu-basic/sample-po-menu-basic.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-menu-basic',
  templateUrl: './sample-po-menu-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoMenuBasicComponent {}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-menu-basic"),og(),zl(23,"hr")),r&2&&(Lp(5),Ux("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,De,i.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,xe],encapsulation:2})}return a})();function Re(a,W){if(a&1&&(Il(0,"div"),zl(1,"span"),Il(2,"span",26),Qx(3),og()()),a&2){let m=W.$implicit;Lp(),Ux(iN("sample-menu-circle sample-menu-vertical-middle po-",m.value)),Lp(2),dg(" ",m.label," ");}}var Ce=(()=>{class a{changeDetector=f(Be$1);menu;badgeColor;badgeValue;buttons=[{label:"Collapse",action:this.collapse.bind(this)},{label:"Expand",action:this.expand.bind(this)},{label:"Toggle",action:this.toggle.bind(this)}];componentsSize;filter;icon;label;link;logo;logoLink;maxBadgeValue=999999999999999;menuItems;menuItemSelected;menuParams;params;parent;parentList;service;shortLabel;shortLogo;searchTreeItems;badgeColorList=[{label:"color-01",value:"color-01"},{label:"color-02",value:"color-02"},{label:"color-03",value:"color-03"},{label:"color-04",value:"color-04"},{label:"color-05",value:"color-05"},{label:"color-06",value:"color-06"},{label:"color-07",value:"color-07"},{label:"color-08",value:"color-08"},{label:"color-09",value:"color-09"},{label:"color-10",value:"color-10"},{label:"color-11",value:"color-11"},{label:"color-12",value:"color-12"}];componentsSizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];iconsOptions=[{label:"an an-newspaper",value:"an an-newspaper"},{label:"an an-camera",value:"an an-camera"},{label:"an an-calendar-dots",value:"an an-calendar-dots"},{label:"an an-user",value:"an an-user"},{label:"an an-chat",value:"an an-chat"},{label:"an an-package",value:"an an-package"},{value:"fa fa-calculator",label:"fa fa-calculator"},{value:"fa fa-podcast",label:"fa fa-podcast"}];ngOnInit(){this.restore();}addMenuItem(){if(this.label){if(!this.parent)this.menuItems.push({action:this.changeMenuSelected.bind(this),icon:this.icon,label:this.label,link:this.link,shortLabel:this.shortLabel,badge:{value:this.badgeValue,color:this.badgeColor}});else {let m=this.getMenuParent(this.menuItems,this.parent);m.subItems||(m.subItems=[]),m.subItems.push({action:this.changeMenuSelected.bind(this),label:this.label,link:this.link,badge:{value:this.badgeValue,color:this.badgeColor}});}this.formReset(),this.updateMenuItems();}}onChangeParams(m){try{this.params=JSON.parse(m);}catch(r){this.params=void 0;}}restore(){this.formReset(),this.filter=false,this.menuItemSelected=void 0,this.badgeColor=void 0,this.badgeValue=void 0,this.logo=void 0,this.logoLink=void 0,this.params=void 0,this.parentList=[],this.menuItems=[],this.menuParams=void 0,this.service="",this.shortLogo=void 0,this.searchTreeItems=false,this.updateMenuItems();}changeMenuSelected(m){this.menuItemSelected=m.label;}collapse(){this.menu.collapse();}expand(){this.menu.expand();}formReset(){this.badgeColor=void 0,this.badgeValue=void 0,this.componentsSize="medium",this.icon=void 0,this.label="PO Menu",this.link=void 0,this.parent=void 0,this.shortLabel="Menu";}getMenuParent(m,r){let i;if(m){for(let s of m)if(s.id===r){i=s;break}else i||(i=this.getMenuParent(s.subItems,r));return i}}toggle(){this.menu.toggle();}updateMenuItems(){this.changeDetector.detectChanges(),this.parentList=[],this.menuItems.forEach(m=>{this.parentList.push({label:m.label,value:m.id}),m.subItems&&m.subItems.forEach(r=>{this.parentList.push({label:`- ${r.label}`,value:r.id}),r.subItems&&r.subItems.forEach(i=>{this.parentList.push({label:`-- ${i.label}`,value:i.id});});});});}onFilterChange(m){this.filter=m,!this.filter&&this.searchTreeItems&&(this.searchTreeItems=false);}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-menu-labs"]],viewQuery:function(r,i){if(r&1&&Gl(Kz,7),r&2){let s;co(s=lo())&&(i.menu=s.first);}},standalone:false,decls:32,vars:33,consts:[["f","ngForm"],[1,"po-wrapper"],[3,"p-components-size","p-filter","p-logo","p-logo-link","p-menus","p-params","p-service","p-short-logo","p-search-tree-items"],["p-title","PO Menu"],[1,"po-row"],["p-label","Methods","p-value","Only if all menu items have icon and short label.",1,"po-lg-12"],[1,"po-lg-12",3,"p-buttons"],["p-label","Menu Item Selected",3,"p-value"],["name","filterMenu","p-label","Filter","p-label-off","Disabled","p-label-on","Enabled",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","searchTreeItems","p-label","Filter Search Tree Items","p-label-off","Disabled","p-label-on","Enabled",1,"po-lg-6",3,"ngModelChange","ngModel","p-disabled"],["name","parent","p-label","Parent","p-placeholder","Add new menu at root level",1,"po-md-4",3,"ngModelChange","ngModel","p-options"],["name","label","p-label","Label","p-required","",1,"po-md-4",3,"ngModelChange","ngModel"],["name","shortLabel","p-label","Short Label","p-required","",1,"po-md-4",3,"ngModelChange","ngModel"],["name","link","p-label","External link","p-placeholder","http://",1,"po-md-4",3,"ngModelChange","ngModel"],["name","badgeColor","p-label","Badge color","p-placeholder","Select a color of badge",1,"po-md-4",3,"ngModelChange","ngModel","p-options"],["p-select-option-template",""],["name","badgeValue","p-label","Badge value","p-required","",1,"po-md-4",3,"ngModelChange","ngModel","p-max"],["name","icon","p-label","Icon",1,"po-md-4",3,"ngModelChange","ngModel","p-disabled","p-options"],["p-label","Add",1,"po-xl-2","po-md-4",3,"p-click"],["name","service","p-clean","","p-label","Service","p-help","https://po-sample-api.onrender.com/v1/menus",1,"po-md-6",3,"ngModelChange","ngModel"],["name","menuParams","p-clean","","p-label","Params","p-help",'Enter a value to be sent as a parameter. Ex: { "departament": "technology" }',1,"po-md-6",3,"ngModelChange","p-change-model","ngModel"],["name","logo","p-clean","","p-help","https://po-ui.io/assets/graphics/po.png","p-label","Logo",1,"po-md-6",3,"ngModelChange","ngModel"],["name","shortLogo","p-clean","","p-help","https://po-ui.io/assets/graphics/logo-dgeni.png","p-label","Short Logo",1,"po-md-6",3,"ngModelChange","ngModel"],["name","logo link","p-clean","","p-help","ex.: '/documentation/po-menu','https://github.com/po-ui/po-angular/blob/master/CONTRIBUTING.md'","p-label","Logo link",1,"po-md-12",3,"ngModelChange","ngModel"],["name","size","p-columns","4","p-label","Components size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-xl-3","po-md-5",3,"p-click"],[1,"sample-menu-vertical-middle"]],template:function(r,i){if(r&1){let s=Dx();Il(0,"div",1),zl(1,"po-menu",2),Il(2,"po-page-default",3)(3,"div",4),zl(4,"po-info",5)(5,"po-button-group",6),og(),zl(6,"po-divider"),Il(7,"div",4),zl(8,"po-info",7),Il(9,"form",null,0)(11,"po-switch",8),ww("ngModelChange",function(l){return Xy(s),eN(i.filter,l)||(i.filter=l),Qy(l)}),ft("ngModelChange",function(l){return i.onFilterChange(l)}),og(),QA(),Il(12,"po-switch",9),ww("ngModelChange",function(l){return Xy(s),eN(i.searchTreeItems,l)||(i.searchTreeItems=l),Qy(l)}),og(),QA(),Il(13,"po-select",10),ww("ngModelChange",function(l){return Xy(s),eN(i.parent,l)||(i.parent=l),Qy(l)}),og(),QA(),Il(14,"po-input",11),ww("ngModelChange",function(l){return Xy(s),eN(i.label,l)||(i.label=l),Qy(l)}),og(),QA(),Il(15,"po-input",12),ww("ngModelChange",function(l){return Xy(s),eN(i.shortLabel,l)||(i.shortLabel=l),Qy(l)}),og(),QA(),Il(16,"po-url",13),ww("ngModelChange",function(l){return Xy(s),eN(i.link,l)||(i.link=l),Qy(l)}),og(),QA(),Il(17,"po-select",14),ww("ngModelChange",function(l){return Xy(s),eN(i.badgeColor,l)||(i.badgeColor=l),Qy(l)}),JE(18,Re,4,4,"ng-template",15),og(),QA(),Il(19,"po-number",16),ww("ngModelChange",function(l){return Xy(s),eN(i.badgeValue,l)||(i.badgeValue=l),Qy(l)}),og(),QA(),Il(20,"po-select",17),ww("ngModelChange",function(l){return Xy(s),eN(i.icon,l)||(i.icon=l),Qy(l)}),og(),QA(),Il(21,"div",4)(22,"po-button",18),ft("p-click",function(){return i.addMenuItem()}),og()(),zl(23,"po-divider"),Il(24,"po-input",19),ww("ngModelChange",function(l){return Xy(s),eN(i.service,l)||(i.service=l),Qy(l)}),og(),QA(),Il(25,"po-input",20),ww("ngModelChange",function(l){return Xy(s),eN(i.menuParams,l)||(i.menuParams=l),Qy(l)}),ft("p-change-model",function(l){return i.onChangeParams(l)}),og(),QA(),Il(26,"po-input",21),ww("ngModelChange",function(l){return Xy(s),eN(i.logo,l)||(i.logo=l),Qy(l)}),og(),QA(),Il(27,"po-input",22),ww("ngModelChange",function(l){return Xy(s),eN(i.shortLogo,l)||(i.shortLogo=l),Qy(l)}),og(),QA(),Il(28,"po-input",23),ww("ngModelChange",function(l){return Xy(s),eN(i.logoLink,l)||(i.logoLink=l),Qy(l)}),og(),QA(),Il(29,"po-radio-group",24),ww("ngModelChange",function(l){return Xy(s),eN(i.componentsSize,l)||(i.componentsSize=l),Qy(l)}),og(),QA(),Il(30,"div",4)(31,"po-button",25),ft("p-click",function(){return i.restore()}),og()()()()()();}r&2&&(Lp(),nw("p-components-size",i.componentsSize)("p-filter",i.filter)("p-logo",i.logo)("p-logo-link",i.logoLink)("p-menus",i.menuItems)("p-params",i.params)("p-service",i.service)("p-short-logo",i.shortLogo)("p-search-tree-items",i.searchTreeItems),Lp(4),nw("p-buttons",i.buttons),Lp(3),nw("p-value",i.menuItemSelected),Lp(3),Ew("ngModel",i.filter),e0(),Lp(),Ew("ngModel",i.searchTreeItems),nw("p-disabled",!i.filter),e0(),Lp(),Ew("ngModel",i.parent),nw("p-options",i.parentList),e0(),Lp(),Ew("ngModel",i.label),e0(),Lp(),Ew("ngModel",i.shortLabel),e0(),Lp(),Ew("ngModel",i.link),e0(),Lp(),Ew("ngModel",i.badgeColor),nw("p-options",i.badgeColorList),e0(),Lp(2),Ew("ngModel",i.badgeValue),nw("p-max",i.maxBadgeValue),e0(),Lp(),Ew("ngModel",i.icon),nw("p-disabled",i.parent)("p-options",i.iconsOptions),e0(),Lp(4),Ew("ngModel",i.service),e0(),Lp(),Ew("ngModel",i.menuParams),e0(),Lp(),Ew("ngModel",i.logo),e0(),Lp(),Ew("ngModel",i.shortLogo),e0(),Lp(),Ew("ngModel",i.logoLink),e0(),Lp(),Ew("ngModel",i.componentsSize),nw("p-options",i.componentsSizeOptions),e0());},dependencies:[G9,$9,z9,mk,hk,Qt,qpe,mv,O3,Hhe,Dde,qhe,k3,L3,Yhe,Kz,cNe],styles:[".sample-menu-circle[_ngcontent-%COMP%]{border-radius:14px;display:inline-block;height:20px;width:20px}.sample-menu-vertical-middle[_ngcontent-%COMP%]{vertical-align:middle}"],changeDetection:1})}return a})();var qe=a=>({"docs-sample-code-tabs":a}),Me=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-menu-labs-view"]],standalone:false,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Menu Labs"),og(),Il(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-menu-labs/sample-po-menu-labs.component.html"),og(),Il(13,"pre",7),Qx(14,`<div class="po-wrapper">
  <po-menu
    [p-components-size]="componentsSize"
    [p-filter]="filter"
    [p-logo]="logo"
    [p-logo-link]="logoLink"
    [p-menus]="menuItems"
    [p-params]="params"
    [p-service]="service"
    [p-short-logo]="shortLogo"
    [p-search-tree-items]="searchTreeItems"
  >
  </po-menu>

  <po-page-default p-title="PO Menu">
    <div class="po-row">
      <po-info class="po-lg-12" p-label="Methods" p-value="Only if all menu items have icon and short label.">
      </po-info>

      <po-button-group class="po-lg-12" [p-buttons]="buttons"> </po-button-group>
    </div>

    <po-divider></po-divider>

    <div class="po-row">
      <po-info p-label="Menu Item Selected" [p-value]="menuItemSelected"> </po-info>

      <form #f="ngForm">
        <po-switch
          class="po-lg-6"
          name="filterMenu"
          [(ngModel)]="filter"
          p-label="Filter"
          p-label-off="Disabled"
          p-label-on="Enabled"
          (ngModelChange)="onFilterChange($event)"
        >
        </po-switch>

        <po-switch
          class="po-lg-6"
          name="searchTreeItems"
          [(ngModel)]="searchTreeItems"
          p-label="Filter Search Tree Items"
          p-label-off="Disabled"
          p-label-on="Enabled"
          [p-disabled]="!filter"
        >
        </po-switch>

        <po-select
          class="po-md-4"
          name="parent"
          [(ngModel)]="parent"
          p-label="Parent"
          p-placeholder="Add new menu at root level"
          [p-options]="parentList"
        >
        </po-select>

        <po-input class="po-md-4" name="label" [(ngModel)]="label" p-label="Label" p-required> </po-input>

        <po-input class="po-md-4" name="shortLabel" [(ngModel)]="shortLabel" p-label="Short Label" p-required>
        </po-input>

        <po-url class="po-md-4" name="link" [(ngModel)]="link" p-label="External link" p-placeholder="http://">
        </po-url>

        <po-select
          class="po-md-4"
          name="badgeColor"
          [(ngModel)]="badgeColor"
          p-label="Badge color"
          p-placeholder="Select a color of badge"
          [p-options]="badgeColorList"
        >
          <ng-template p-select-option-template let-option>
            <div>
              <span class="sample-menu-circle sample-menu-vertical-middle po-{ { option.value }}"></span>
              <span class="sample-menu-vertical-middle"> { { option.label }} </span>
            </div>
          </ng-template>
        </po-select>

        <po-number
          class="po-md-4"
          name="badgeValue"
          [(ngModel)]="badgeValue"
          p-label="Badge value"
          p-required
          [p-max]="maxBadgeValue"
        >
        </po-number>

        <po-select
          class="po-md-4"
          name="icon"
          [(ngModel)]="icon"
          p-label="Icon"
          [p-disabled]="parent"
          [p-options]="iconsOptions"
        >
        </po-select>

        <div class="po-row">
          <po-button class="po-xl-2 po-md-4" p-label="Add" (p-click)="addMenuItem()"> </po-button>
        </div>

        <po-divider />

        <po-input
          class="po-md-6"
          name="service"
          [(ngModel)]="service"
          p-clean
          p-label="Service"
          p-help="https://po-sample-api.onrender.com/v1/menus"
        >
        </po-input>

        <po-input
          class="po-md-6"
          name="menuParams"
          [(ngModel)]="menuParams"
          p-clean
          p-label="Params"
          p-help='Enter a value to be sent as a parameter. Ex: { "departament": "technology" }'
          (p-change-model)="onChangeParams($event)"
        >
        </po-input>

        <po-input
          class="po-md-6"
          name="logo"
          [(ngModel)]="logo"
          p-clean
          p-help="https://po-ui.io/assets/graphics/po.png"
          p-label="Logo"
        >
        </po-input>

        <po-input
          class="po-md-6"
          name="shortLogo"
          [(ngModel)]="shortLogo"
          p-clean
          p-help="https://po-ui.io/assets/graphics/logo-dgeni.png"
          p-label="Short Logo"
        >
        </po-input>

        <po-input
          class="po-md-12"
          name="logo link"
          [(ngModel)]="logoLink"
          p-clean
          p-help="ex.: '/documentation/po-menu','https://github.com/po-ui/po-angular/blob/master/CONTRIBUTING.md'"
          p-label="Logo link"
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
          <po-button class="po-xl-3 po-md-5" p-label="Sample Restore" (p-click)="restore()"> </po-button>
        </div>
      </form>
    </div>
  </po-page-default>
</div>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-menu-labs/sample-po-menu-labs.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { ChangeDetectorRef, Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';

import {
  PoButtonGroupItem,
  PoMenuComponent,
  PoMenuItem,
  PoRadioGroupOption,
  PoSelectOption
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-menu-labs',
  templateUrl: './sample-po-menu-labs.component.html',
  styleUrls: ['./sample-po-menu-labs.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoMenuLabsComponent implements OnInit {
  private changeDetector = inject(ChangeDetectorRef);

  @ViewChild(PoMenuComponent, { static: true }) menu: PoMenuComponent;

  badgeColor: string;
  badgeValue: number;
  buttons: Array<PoButtonGroupItem> = [
    { label: 'Collapse', action: this.collapse.bind(this) },
    { label: 'Expand', action: this.expand.bind(this) },
    { label: 'Toggle', action: this.toggle.bind(this) }
  ];
  componentsSize: string;
  filter: boolean;
  icon: string;
  label: string;
  link: string;
  logo: string;
  logoLink: string;
  maxBadgeValue = 999999999999999;
  menuItems: Array<PoMenuItem>;
  menuItemSelected: string;
  menuParams: string;
  params: any;
  parent: string;
  parentList: Array<PoSelectOption>;
  service: string;
  shortLabel: string;
  shortLogo: string;
  searchTreeItems: boolean;

  public readonly badgeColorList: Array<PoSelectOption> = [
    { label: 'color-01', value: 'color-01' },
    { label: 'color-02', value: 'color-02' },
    { label: 'color-03', value: 'color-03' },
    { label: 'color-04', value: 'color-04' },
    { label: 'color-05', value: 'color-05' },
    { label: 'color-06', value: 'color-06' },
    { label: 'color-07', value: 'color-07' },
    { label: 'color-08', value: 'color-08' },
    { label: 'color-09', value: 'color-09' },
    { label: 'color-10', value: 'color-10' },
    { label: 'color-11', value: 'color-11' },
    { label: 'color-12', value: 'color-12' }
  ];

  public readonly componentsSizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  public readonly iconsOptions: Array<PoSelectOption> = [
    { label: 'an an-newspaper', value: 'an an-newspaper' },
    { label: 'an an-camera', value: 'an an-camera' },
    { label: 'an an-calendar-dots', value: 'an an-calendar-dots' },
    { label: 'an an-user', value: 'an an-user' },
    { label: 'an an-chat', value: 'an an-chat' },
    { label: 'an an-package', value: 'an an-package' },
    { value: 'fa fa-calculator', label: 'fa fa-calculator' },
    { value: 'fa fa-podcast', label: 'fa fa-podcast' }
  ];

  ngOnInit(): void {
    this.restore();
  }

  addMenuItem() {
    if (!this.label) {
      return;
    }

    if (!this.parent) {
      this.menuItems.push({
        action: this.changeMenuSelected.bind(this),
        icon: this.icon,
        label: this.label,
        link: this.link,
        shortLabel: this.shortLabel,
        badge: { value: this.badgeValue, color: this.badgeColor }
      });
    } else {
      const menuParent = this.getMenuParent(this.menuItems, this.parent);

      if (!menuParent.subItems) {
        menuParent.subItems = [];
      }

      menuParent.subItems.push({
        action: this.changeMenuSelected.bind(this),
        label: this.label,
        link: this.link,
        badge: { value: this.badgeValue, color: this.badgeColor }
      });
    }

    this.formReset();
    this.updateMenuItems();
  }

  onChangeParams(params: any) {
    try {
      this.params = JSON.parse(params);
    } catch (e) {
      this.params = undefined;
    }
  }

  restore() {
    this.formReset();

    this.filter = false;
    this.menuItemSelected = undefined;
    this.badgeColor = undefined;
    this.badgeValue = undefined;
    this.logo = undefined;
    this.logoLink = undefined;
    this.params = undefined;
    this.parentList = [];
    this.menuItems = [];
    this.menuParams = undefined;
    this.service = '';
    this.shortLogo = undefined;
    this.searchTreeItems = false;

    this.updateMenuItems();
  }

  private changeMenuSelected(menu: PoMenuItem) {
    this.menuItemSelected = menu.label;
  }

  private collapse() {
    this.menu.collapse();
  }

  private expand() {
    this.menu.expand();
  }

  private formReset() {
    this.badgeColor = undefined;
    this.badgeValue = undefined;
    this.componentsSize = 'medium';
    this.icon = undefined;
    this.label = 'PO Menu';
    this.link = undefined;
    this.parent = undefined;
    this.shortLabel = 'Menu';
  }

  private getMenuParent(menus: Array<PoMenuItem>, id: string): PoMenuItem {
    let menuParent;

    if (!menus) {
      return;
    }

    for (const subMenu of menus) {
      if (subMenu['id'] === id) {
        menuParent = subMenu;
        break;
      } else if (!menuParent) {
        menuParent = this.getMenuParent(subMenu.subItems, id);
      }
    }

    return menuParent;
  }

  private toggle() {
    this.menu.toggle();
  }

  private updateMenuItems() {
    this.changeDetector.detectChanges();

    this.parentList = [];

    this.menuItems.forEach(item => {
      this.parentList.push(<PoSelectOption>{ label: item.label, value: item['id'] });

      if (item.subItems) {
        item.subItems.forEach(secondItem => {
          this.parentList.push(<PoSelectOption>{ label: \`- \${secondItem.label}\`, value: secondItem['id'] });

          if (secondItem.subItems) {
            secondItem.subItems.forEach(thirdItem => {
              this.parentList.push(<PoSelectOption>{ label: \`-- \${thirdItem.label}\`, value: thirdItem['id'] });
            });
          }
        });
      }
    });
  }

  onFilterChange(newValue: boolean) {
    this.filter = newValue;
    if (!this.filter && this.searchTreeItems) {
      this.searchTreeItems = false;
    }
  }
}
`),og()()(),Il(21,"po-tab",10)(22,"div")(23,"label",6),Qx(24,"sample-po-menu-labs/sample-po-menu-labs.component.css"),og(),Il(25,"pre",11),Qx(26,`.sample-menu-circle {
  border-radius: 14px;
  display: inline-block;
  height: 20px;
  width: 20px;
}

.sample-menu-vertical-middle {
  vertical-align: middle;
}
`),og()()()()(),Il(27,"div",12),zl(28,"sample-po-menu-labs"),og(),zl(29,"hr")),r&2&&(Lp(5),Ux("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,qe,i.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,Ce],encapsulation:2})}return a})();var O=(()=>{class a{http=f(nb);url="https://po-sample-api.onrender.com/v1/menus";getFilteredData(m){let r={search:m};return this.http.get(this.url,{params:r}).pipe(W(i=>i.items))}static \u0275fac=function(r){return new(r||a)};static \u0275prov=w({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();function Be(a,W){a&1&&(Il(0,"div",5)(1,"p"),Qx(2,"Welcome,"),og(),Il(3,"p")(4,"b"),Qx(5," John Doe "),og()()());}var Pe=(()=>{class a{samplePoMenuHumanResourcesService=f(O);menuItemSelected;menus=[{label:"Register user",action:this.printMenuAction.bind(this),icon:"an an-user",shortLabel:"Register"},{label:"Timekeeping",action:this.printMenuAction.bind(this),icon:"an an-clock",shortLabel:"Timekeeping",badge:{value:1}},{label:"Useful links",icon:"an an-share",shortLabel:"Links",subItems:[{label:"Ministry of Labour",action:this.printMenuAction.bind(this),link:"http://trabalho.gov.br/"},{label:"SindPD Syndicate",action:this.printMenuAction.bind(this),link:"http://www.sindpd.com.br/"}]},{label:"Benefits",icon:"an an-star",shortLabel:"Benefits",subItems:[{label:"Meal tickets",subItems:[{label:"Acceptance network ",action:this.printMenuAction.bind(this)},{label:"Extracts",action:this.printMenuAction.bind(this),subItems:[{label:"Monthly",action:this.printMenuAction.bind(this),badge:{value:3,color:"color-03"}},{label:"Custom",action:this.printMenuAction.bind(this)}]}]},{label:"Transportation tickets",action:this.printMenuAction.bind(this),badge:{value:12}}]}];printMenuAction(m){this.menuItemSelected=m.label;}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-menu-human-resources"]],standalone:false,features:[we$1([O])],decls:5,vars:5,consts:[[1,"po-wrapper"],["p-collapsed","","p-filter","",3,"p-menus","p-service","p-automatic-toggle"],["class","po-p-2 po-font-title sample-menu-header-text-color",4,"p-menu-header-template"],["p-title","PO - Human Resources",3,"p-show-notification"],[3,"p-title"],[1,"po-p-2","po-font-title","sample-menu-header-text-color"]],template:function(r,i){r&1&&(Il(0,"div",0)(1,"po-menu",1),JE(2,Be,6,0,"div",2),og(),zl(3,"po-toolbar",3)(4,"po-page-default",4),og()),r&2&&(Lp(),nw("p-menus",i.menus)("p-service",i.samplePoMenuHumanResourcesService)("p-automatic-toggle",true),Lp(2),nw("p-show-notification",false),Lp(),nw("p-title",i.menuItemSelected));},dependencies:[Kz,Nw,cNe,vNe],styles:[".sample-menu-header-text-color[_ngcontent-%COMP%]{color:#9da7a9}"],changeDetection:1})}return a})();var Oe=a=>({"docs-sample-code-tabs":a}),ye=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-menu-human-resources-view"]],standalone:false,decls:34,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Menu - Human Resources"),og(),Il(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-menu-human-resources/sample-po-menu-human-resources.component.html"),og(),Il(13,"pre",7),Qx(14,`<div class="po-wrapper">
  <po-menu
    p-collapsed
    p-filter
    [p-menus]="menus"
    [p-service]="samplePoMenuHumanResourcesService"
    [p-automatic-toggle]="true"
  >
    <div *p-menu-header-template class="po-p-2 po-font-title sample-menu-header-text-color">
      <p>Welcome,</p>
      <p>
        <b> John Doe </b>
      </p>
    </div>
  </po-menu>

  <po-toolbar p-title="PO - Human Resources" [p-show-notification]="false"></po-toolbar>

  <po-page-default [p-title]="menuItemSelected"></po-page-default>
</div>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-menu-human-resources/sample-po-menu-human-resources.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

import { PoMenuItem } from '@po-ui/ng-components';

import { SamplePoMenuHumanResourcesService } from './sample-po-menu-human-resources.service';

@Component({
  selector: 'sample-po-menu-human-resources',
  templateUrl: './sample-po-menu-human-resources.component.html',
  providers: [SamplePoMenuHumanResourcesService],
  styleUrls: ['./sample-po-menu-human-resources.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoMenuHumanResourcesComponent {
  samplePoMenuHumanResourcesService = inject(SamplePoMenuHumanResourcesService);

  menuItemSelected: string;

  menus: Array<PoMenuItem> = [
    { label: 'Register user', action: this.printMenuAction.bind(this), icon: 'an an-user', shortLabel: 'Register' },
    {
      label: 'Timekeeping',
      action: this.printMenuAction.bind(this),
      icon: 'an an-clock',
      shortLabel: 'Timekeeping',
      badge: { value: 1 }
    },
    {
      label: 'Useful links',
      icon: 'an an-share',
      shortLabel: 'Links',
      subItems: [
        { label: 'Ministry of Labour', action: this.printMenuAction.bind(this), link: 'http://trabalho.gov.br/' },
        { label: 'SindPD Syndicate', action: this.printMenuAction.bind(this), link: 'http://www.sindpd.com.br/' }
      ]
    },
    {
      label: 'Benefits',
      icon: 'an an-star',
      shortLabel: 'Benefits',
      subItems: [
        {
          label: 'Meal tickets',
          subItems: [
            { label: 'Acceptance network ', action: this.printMenuAction.bind(this) },
            {
              label: 'Extracts',
              action: this.printMenuAction.bind(this),
              subItems: [
                { label: 'Monthly', action: this.printMenuAction.bind(this), badge: { value: 3, color: 'color-03' } },
                { label: 'Custom', action: this.printMenuAction.bind(this) }
              ]
            }
          ]
        },
        { label: 'Transportation tickets', action: this.printMenuAction.bind(this), badge: { value: 12 } }
      ]
    }
  ];

  printMenuAction(menu: PoMenuItem) {
    this.menuItemSelected = menu.label;
  }
}
`),og(),Il(21,"label",6),Qx(22,"sample-po-menu-human-resources/sample-po-menu-human-resources.service.ts"),og(),Il(23,"pre",9),Qx(24,`import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { PoMenuFilter, PoMenuItemFiltered } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class SamplePoMenuHumanResourcesService implements PoMenuFilter {
  private http = inject(HttpClient);

  private url: string = 'https://po-sample-api.onrender.com/v1/menus';

  getFilteredData(search: string): Observable<Array<PoMenuItemFiltered>> {
    const params = { search };

    return this.http.get(this.url, { params }).pipe(map((response: any) => response.items));
  }
}
`),og()()(),Il(25,"po-tab",10)(26,"div")(27,"label",6),Qx(28,"sample-po-menu-human-resources/sample-po-menu-human-resources.component.css"),og(),Il(29,"pre",11),Qx(30,`.sample-menu-header-text-color {
  color: #9da7a9;
}
`),og()()()()(),Il(31,"div",12),zl(32,"sample-po-menu-human-resources"),og(),zl(33,"hr")),r&2&&(Lp(5),Ux("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,Oe,i.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,Pe],encapsulation:2})}return a})();var we=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-menu-doc"]],standalone:false,decls:1201,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],["href","/documentation/po-menu-header-template"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["href","documentation/po-menu#colapseMethod"],["href","documentation/po-menu#expandMethod"],["href","documentation/po-menu#toggleMethod"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","PoMenuItem[]"],["pan","",1,"docs-api-property-type","any"],["pan","",1,"docs-api-property-type","PoMenuFilter"],["href","https://po-ui.io/guides/api"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"language-html"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],["id","colapseMethod"],["id","expandMethod"],["id","toggleMethod"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type"],[1,"dot","po-color-01"],[1,"dot","po-color-02"],[1,"dot","po-color-03"],[1,"dot","po-color-04"],[1,"dot","po-color-05"],[1,"dot","po-color-06"],[1,"dot","po-color-07"],[1,"dot","po-color-08"],[1,"dot","po-color-09"],[1,"dot","po-color-10"],[1,"dot","po-color-11"],[1,"dot","po-color-12"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","()","=>","void"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","PoMenuItemBadge"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","Array<PoMenuItem>"]],template:function(r,i){r&1&&(Il(0,"div",0)(1,"p",1)(2,"code"),Qx(3,"import { PoMenuModule } from '@po-ui/ng-components';"),og()(),Il(4,"div",2)(5,"p"),Qx(6,"M\xF3dulo do componente po-menu."),og()(),Il(7,"h3",3),Qx(8,"Componente"),og(),Il(9,"h4",4)(10,"code",5),Qx(11,"PoMenuComponent"),og()(),Il(12,"div",2)(13,"p"),Qx(14,"Este \xE9 um componente de menu lateral que \xE9 utilizado para navega\xE7\xE3o nas p\xE1ginas de uma aplica\xE7\xE3o."),og(),Il(15,"p"),Qx(16,"O componente po-menu recebe uma lista de objetos do tipo "),Il(17,"code"),Qx(18,"MenuItem"),og(),Qx(19,` com as informa\xE7\xF5es dos itens de menu como
textos, links para redirecionamento, a\xE7\xF5es, at\xE9 4 n\xEDveis de menu e \xEDcones para o primeiro n\xEDvel de menu.`),og(),Il(20,"h4"),Qx(21,"Tokens customiz\xE1veis"),og(),Il(22,"p"),Qx(23,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),og(),Il(24,"blockquote")(25,"p"),Qx(26,"Para maiores informa\xE7\xF5es, acesse o guia "),Il(27,"a",6),Qx(28,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),Qx(29,"."),og()(),Il(30,"table")(31,"thead")(32,"tr")(33,"th"),Qx(34,"Propriedade"),og(),Il(35,"th"),Qx(36,"Descri\xE7\xE3o"),og(),Il(37,"th"),Qx(38,"Valor Padr\xE3o"),og()()(),Il(39,"tbody")(40,"tr")(41,"td")(42,"strong"),Qx(43,"Default Values"),og()(),zl(44,"td")(45,"td"),og(),Il(46,"tr")(47,"td")(48,"code"),Qx(49,"--border-radius"),og()(),Il(50,"td"),Qx(51,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),og(),Il(52,"td")(53,"code"),Qx(54,"var(--border-radius-md)"),og()()(),Il(55,"tr")(56,"td")(57,"code"),Qx(58,"--border-color"),og()(),Il(59,"td"),Qx(60,"Cor da borda"),og(),Il(61,"td")(62,"code"),Qx(63,"var(--color-neutral-light-20)"),og()()(),Il(64,"tr")(65,"td")(66,"code"),Qx(67,"--background-color"),og()(),Il(68,"td"),Qx(69,"Cor de background"),og(),Il(70,"td")(71,"code"),Qx(72,"Var(----color-neutral-light-05)"),og()()(),Il(73,"tr")(74,"td")(75,"strong"),Qx(76,"Menu Footer"),og()(),zl(77,"td")(78,"td"),og(),Il(79,"tr")(80,"td")(81,"code"),Qx(82,"--color"),og()(),Il(83,"td"),Qx(84,"Cor principla do menu footer"),og(),Il(85,"td")(86,"code"),Qx(87,"var(--color-action-default)"),og()()(),Il(88,"tr")(89,"td")(90,"code"),Qx(91,"--font-size"),og()(),Il(92,"td"),Qx(93,"Tamanho da fonte"),og(),Il(94,"td")(95,"code"),Qx(96,"var(--font-size-default)"),og()()(),Il(97,"tr")(98,"td")(99,"code"),Qx(100,"--line-height"),og()(),Il(101,"td"),Qx(102,"Tamanho da label"),og(),Il(103,"td")(104,"code"),Qx(105,"var(--line-height-md)"),og()()(),Il(106,"tr")(107,"td")(108,"code"),Qx(109,"--outline-color-focused"),og()(),Il(110,"td"),Qx(111,"Cor do outline do estado de focus"),og(),Il(112,"td")(113,"code"),Qx(114,"var(--color-action-focus)"),og()()(),Il(115,"tr")(116,"td")(117,"code"),Qx(118,"--font-weight-lvl0"),og()(),Il(119,"td"),Qx(120,"Peso da fonte"),og(),Il(121,"td")(122,"code"),Qx(123,"var(--font-weight-bold)"),og()()(),Il(124,"tr")(125,"td")(126,"strong"),Qx(127,"po-menu-item"),og()(),zl(128,"td")(129,"td"),og(),Il(130,"tr")(131,"td")(132,"code"),Qx(133,"--font-family"),og()(),Il(134,"td"),Qx(135,"Fam\xEDlia tipogr\xE1fica usada"),og(),Il(136,"td")(137,"code"),Qx(138,"var(--font-family-theme)"),og()()(),Il(139,"tr")(140,"td")(141,"code"),Qx(142,"--font-size"),og()(),Il(143,"td"),Qx(144,"Tamanho da fonte"),og(),Il(145,"td")(146,"code"),Qx(147,"var(--font-size-default)"),og()()(),Il(148,"tr")(149,"td")(150,"code"),Qx(151,"--line-height"),og()(),Il(152,"td"),Qx(153,"Tamanho da label"),og(),Il(154,"td")(155,"code"),Qx(156,"var(--line-height-md)"),og()()(),Il(157,"tr")(158,"td")(159,"code"),Qx(160,"--border-radius"),og()(),Il(161,"td"),Qx(162,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),og(),Il(163,"td")(164,"code"),Qx(165,"var(--border-radius-md)"),og()()(),Il(166,"tr")(167,"td")(168,"code"),Qx(169,"--color"),og()(),Il(170,"td"),Qx(171,"Cor principal do item"),og(),Il(172,"td")(173,"code"),Qx(174,"var(--color-action-default)"),og()()(),Il(175,"tr")(176,"td")(177,"code"),Qx(178,"--background-color"),og()(),Il(179,"td"),Qx(180,"Cor do background"),og(),Il(181,"td")(182,"code"),Qx(183,"transparent"),og()()(),Il(184,"tr")(185,"td")(186,"strong"),Qx(187,"Hover"),og()(),zl(188,"td")(189,"td"),og(),Il(190,"tr")(191,"td")(192,"code"),Qx(193,"--color-hover"),og()(),Il(194,"td"),Qx(195,"Cor principal no estado hover"),og(),Il(196,"td")(197,"code"),Qx(198,"var(--color-brand-01-darkest)"),og()()(),Il(199,"tr")(200,"td")(201,"code"),Qx(202,"--background-color-hover"),og()(),Il(203,"td"),Qx(204,"Cor de background no estado hover"),og(),Il(205,"td")(206,"code"),Qx(207,"var(--color-brand-01-lighter)"),og()()(),Il(208,"tr")(209,"td")(210,"strong"),Qx(211,"Focused"),og()(),zl(212,"td")(213,"td"),og(),Il(214,"tr")(215,"td")(216,"code"),Qx(217,"--outline-color-focused"),og()(),Il(218,"td"),Qx(219,"Cor do outline do estado de focus"),og(),Il(220,"td")(221,"code"),Qx(222,"var(--color-action-focus)"),og()()(),Il(223,"tr")(224,"td")(225,"strong"),Qx(226,"Pressed"),og()(),zl(227,"td")(228,"td"),og(),Il(229,"tr")(230,"td")(231,"code"),Qx(232,"--background-color-pressed"),og(),Qx(233," \xA0"),og(),Il(234,"td"),Qx(235,"Cor de background no estado de pressionado\xA0"),og(),Il(236,"td")(237,"code"),Qx(238,"var(--color-brand-01-light)"),og()()(),Il(239,"tr")(240,"td")(241,"strong"),Qx(242,"Actived"),og()(),zl(243,"td")(244,"td"),og(),Il(245,"tr")(246,"td")(247,"code"),Qx(248,"--background-color-actived"),og()(),Il(249,"td"),Qx(250,"Cor de background no estado actived"),og(),Il(251,"td")(252,"code"),Qx(253,"var(--color-brand-01-darkest)"),og()()(),Il(254,"tr")(255,"td")(256,"code"),Qx(257,"--color-actived"),og()(),Il(258,"td"),Qx(259,"Cor principal no estado actived"),og(),Il(260,"td")(261,"code"),Qx(262,"var(--color-brand-01-lighter)"),og()()(),Il(263,"tr")(264,"td")(265,"strong"),Qx(266,"Font"),og()(),zl(267,"td")(268,"td"),og(),Il(269,"tr")(270,"td")(271,"code"),Qx(272,"--font-weight-lvl0"),og()(),Il(273,"td"),Qx(274,"Peso da fonte bold"),og(),Il(275,"td")(276,"code"),Qx(277,"var(--font-weight-bold)"),og()()(),Il(278,"tr")(279,"td")(280,"code"),Qx(281,"--font-weight-lvl1"),og()(),Il(282,"td"),Qx(283,"Peso da fonte"),og(),Il(284,"td")(285,"code"),Qx(286,"var(--font-weight-normal)"),og()()()()(),Il(287,"p"),zl(288,"br"),Qx(289," Aparece completo em telas com largura maior que 1200px, caso contr\xE1rio o menu \xE9 escondido e chamado por meio de um bot\xE3o."),og(),Il(290,"p"),Qx(291,`O menu tamb\xE9m pode ser colapsado. Essa op\xE7\xE3o \xE9 habilitada quando todos os itens de primeiro n\xEDvel possu\xEDrem \xEDcones e textos curtos.
Se colapsado, somente os itens de primeiro n\xEDvel ser\xE3o exibidos e, caso o item selecionado possua sub-n\xEDveis,
ent\xE3o o menu alternar\xE1 novamente para o estado aberto.`),og(),Il(292,"p"),Qx(293,"Existe a possibilidade de customizar a logomarca, que \xE9 exibida na parte superior do componente."),og(),Il(294,"p"),Qx(295,`E para adicionar um conte\xFAdo personalizado entre a logomarca e o campo de filtro,
basta adicionar este conte\xFAdo com a diretiva `),Il(296,"a",7)(297,"strong"),Qx(298,"p-menu-header-template"),og()(),Qx(299,"."),og(),Il(300,"p"),Qx(301,`Caso utilizar o filtro de menus, \xE9 poss\xEDvel realizar buscas em servi\xE7o, apenas informando a URL do servi\xE7o ou a inst\xE2ncia de
um servi\xE7o customizado implementando a interface `),Il(302,"code"),Qx(303,"PoMenuFilter"),og(),Qx(304,"."),og(),Il(305,"p"),Qx(306,"Para o menu funcionar corretamente \xE9 necess\xE1rio importar o "),Il(307,"code"),Qx(308,"RouterModule"),og(),Qx(309," e "),Il(310,"code"),Qx(311,"Routes"),og(),Qx(312," do m\xF3dulo principal de sua aplica\xE7\xE3o:"),og(),Il(313,"pre")(314,"code"),Qx(315,`import { RouterModule, Routes } from '@angular/router';

...

@NgModule({
  imports: [
    RouterModule,
    Routes,
    ...
    PoModule,
    ...
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
`),og()(),Il(316,"p"),Qx(317,"Al\xE9m disso \xE9 necess\xE1rio criar um m\xF3dulo configurando as rotas da aplica\xE7\xE3o."),og(),Il(318,"pre")(319,"code"),Qx(320,`import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { HelloWorldComponent } from './hello-world/hello-world.component';

const routes: Routes = [
  {path: 'hello-world', component: HelloWorldComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
`),og()()(),Il(321,"div",8)(322,"h4",9),Qx(323,"Seletor"),og(),Il(324,"pre",10),Qx(325,`<po-menu
    p-automatic-toggle="boolean"
    p-collapsed="boolean"
    p-components-size="string"
    p-filter="boolean"
    p-logo="string"
    p-logo-alt="string"
    p-logo-link="boolean | string"
    p-menus="PoMenuItem[]"
    p-params="any"
    p-search-tree-items="boolean"
    p-service="string | PoMenuFilter"
    p-short-logo="string"
    (p-toggle)="EventEmitter" >
</po-menu>
`),og()(),Il(326,"h4",11),Qx(327,"Propriedades"),og(),Il(328,"table",12)(329,"tr",13)(330,"th",14),Qx(331,"Nome"),og(),Il(332,"th",14),Qx(333,"Tipo"),og(),Il(334,"th",14),Qx(335,"Padr\xE3o"),og(),Il(336,"th",14),Qx(337,"Descri\xE7\xE3o"),og()(),Il(338,"tr",15)(339,"td",16)(340,"div",17)(341,"span",18),Qx(342," p-automatic-toggle"),zl(343,"br"),og()()(),Il(344,"td",19)(345,"code",20),Qx(346,"boolean"),og()(),Il(347,"td",21)(348,"p")(349,"code"),Qx(350,"false"),og()()(),Il(351,"td",22)(352,"em")(353,"strong"),Qx(354,"(opcional)"),og()(),Il(355,"p"),Qx(356,"Expande e Colapsa (retrai) o menu automaticamente."),og()()(),Il(357,"tr",15)(358,"td",16)(359,"div",17)(360,"span",18),Qx(361," p-collapsed"),zl(362,"br"),og()()(),Il(363,"td",19)(364,"code",20),Qx(365,"boolean"),og()(),Il(366,"td",21)(367,"p")(368,"code"),Qx(369,"false"),og()()(),Il(370,"td",22)(371,"em")(372,"strong"),Qx(373,"(opcional)"),og()(),Il(374,"p"),Qx(375,"Colapsa (retrai) o menu e caso receba o valor "),Il(376,"code"),Qx(377,"false"),og(),Qx(378," expande o menu."),og(),Il(379,"blockquote")(380,"p"),Qx(381,"Utilize esta propriedade para iniciar o menu colapsado."),og()(),Il(382,"blockquote")(383,"p"),Qx(384,"Ao utilizar os m\xE9todos "),Il(385,"a",23)(386,"code"),Qx(387,"colapse"),og()(),Qx(388,", "),Il(389,"a",24)(390,"code"),Qx(391,"expand"),og()(),Qx(392,` e
`),Il(393,"a",25)(394,"code"),Qx(395,"toggle"),og()(),Qx(396," o valor desta propriedade n\xE3o \xE9 alterado."),og()(),Il(397,"p")(398,"strong"),Qx(399,"Importante:"),og()(),Il(400,"blockquote")(401,"p"),Qx(402,"O menu ser\xE1 colapsado/expandido apenas se todos os itens de menu tiverem valor nas propriedades "),Il(403,"code"),Qx(404,"icon"),og(),Qx(405," e "),Il(406,"code"),Qx(407,"shortLabel"),og(),Qx(408,"."),og()()()(),Il(409,"tr",15)(410,"td",16)(411,"div",17)(412,"span",18),Qx(413," p-components-size"),zl(414,"br"),og()()(),Il(415,"td",19)(416,"code",26),Qx(417,"string"),og()(),Il(418,"td",21)(419,"p")(420,"code"),Qx(421,"medium"),og()()(),Il(422,"td",22)(423,"em")(424,"strong"),Qx(425,"(opcional)"),og()(),Il(426,"p"),Qx(427,"Define o tamanho dos componentes de formul\xE1rio no menu:"),og(),Il(428,"ul")(429,"li")(430,"code"),Qx(431,"small"),og(),Qx(432,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),og(),Il(433,"li")(434,"code"),Qx(435,"medium"),og(),Qx(436,": aplica a medida medium de cada componente."),og()(),Il(437,"blockquote")(438,"p"),Qx(439,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Il(440,"code"),Qx(441,"medium"),og(),Qx(442,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Il(443,"a",27),Qx(444,"po-theme"),og(),Qx(445,"."),og()()()(),Il(446,"tr",15)(447,"td",16)(448,"div",17)(449,"span",18),Qx(450," p-filter"),zl(451,"br"),og()()(),Il(452,"td",19)(453,"code",20),Qx(454,"boolean"),og()(),Il(455,"td",21)(456,"p")(457,"code"),Qx(458,"false"),og()()(),Il(459,"td",22)(460,"em")(461,"strong"),Qx(462,"(opcional)"),og()(),Il(463,"p"),Qx(464,`Habilita um campo para pesquisa no menu.
A pesquisa \xE9 realizada em todos os n\xEDveis do menu e busca apenas pelos itens que cont\xE9m uma a\xE7\xE3o e/ou link definidos,
ou tamb\xE9m, pode ser realizada atrav\xE9s de um servi\xE7o definido na propriedade `),Il(465,"code"),Qx(466,"p-service"),og(),Qx(467,"."),og(),Il(468,"blockquote")(469,"p"),Qx(470,"O campo de pesquisa \xE9 desabilitado se o menu estiver colapsado."),og()()()(),Il(471,"tr",15)(472,"td",16)(473,"div",17)(474,"span",18),Qx(475," p-logo"),zl(476,"br"),og()()(),Il(477,"td",19)(478,"code",26),Qx(479,"string"),og()(),Il(480,"td",21),Qx(481,"-"),og(),Il(482,"td",22)(483,"em")(484,"strong"),Qx(485,"(opcional)"),og()(),Il(486,"p"),Qx(487,"Caminho para a logomarca, que ser\xE1 exibida quando o componente estiver expandido, localizada na parte superior."),og(),Il(488,"blockquote")(489,"p")(490,"strong"),Qx(491,"Importante:"),og()()(),Il(492,"ul")(493,"li"),Qx(494,"Caso esta propriedade estiver indefinida ou inv\xE1lida o espa\xE7o para logomarca ser\xE1 removido."),og(),Il(495,"li"),Qx(496,"Como boa pr\xE1tica, indica-se utilizar imagens com at\xE9 "),Il(497,"code"),Qx(498,"24px"),og(),Qx(499," de altura e "),Il(500,"code"),Qx(501,"224px"),og(),Qx(502,` de largura,
caso ultrapassar esses valores a imagem ser\xE1 readequada no espa\xE7o dispon\xEDvel.`),og()()()(),Il(503,"tr",15)(504,"td",16)(505,"div",17)(506,"span",18),Qx(507," p-logo-alt"),zl(508,"br"),og()()(),Il(509,"td",19)(510,"code",26),Qx(511,"string"),og()(),Il(512,"td",21)(513,"p")(514,"code"),Qx(515,"Logomarca in\xEDcio"),og()()(),Il(516,"td",22)(517,"em")(518,"strong"),Qx(519,"(opcional)"),og()(),Il(520,"p"),Qx(521,"Define o texto alternativo para a logomarca."),og(),Il(522,"blockquote")(523,"p")(524,"strong"),Qx(525,"Importante"),og(),Qx(526,`
Caso esta propriedade n\xE3o seja definida o texto padr\xE3o ser\xE1 "Logomarca in\xEDcio".`),og()()()(),Il(527,"tr",15)(528,"td",16)(529,"div",17)(530,"span",18),Qx(531," p-logo-link"),zl(532,"br"),og()()(),Il(533,"td",19)(534,"code",20),Qx(535,"boolean "),og(),Il(536,"code",26),Qx(537," string"),og()(),Il(538,"td",21)(539,"p")(540,"code"),Qx(541,"true"),og()()(),Il(542,"td",22)(543,"em")(544,"strong"),Qx(545,"(opcional)"),og()(),Il(546,"p"),Qx(547,"Define o link para a rota ao clicar no logo do menu."),og(),Il(548,"ul")(549,"li"),Qx(550,"Se o valor for uma string, define a rota para o link informado."),og(),Il(551,"li"),Qx(552,"Se for "),Il(553,"code"),Qx(554,"false"),og(),Qx(555,", o logo n\xE3o ter\xE1 link associado."),og(),Il(556,"li"),Qx(557,"Se for "),Il(558,"code"),Qx(559,"true"),og(),Qx(560,", o logo ter\xE1 a rota padr\xE3o "),Il(561,"code"),Qx(562,"./"),og(),Qx(563,"."),og()()()(),Il(564,"tr",15)(565,"td",16)(566,"div",17)(567,"span",18),Qx(568," p-menus"),zl(569,"br"),og()()(),Il(570,"td",19)(571,"code",28),Qx(572,"PoMenuItem[]"),og()(),Il(573,"td",21),Qx(574,"-"),og(),Il(575,"td",22)(576,"p"),Qx(577,"Lista dos itens do menu. Se o valor estiver indefinido ou inv\xE1lido, ser\xE1 inicializado como um array vazio."),og()()(),Il(578,"tr",15)(579,"td",16)(580,"div",17)(581,"span",18),Qx(582," p-params"),zl(583,"br"),og()()(),Il(584,"td",19)(585,"code",29),Qx(586,"any"),og()(),Il(587,"td",21),Qx(588,"-"),og(),Il(589,"td",22)(590,"em")(591,"strong"),Qx(592,"(opcional)"),og()(),Il(593,"p"),Qx(594,"Deve ser informado um objeto que deseja-se utilizar na requisi\xE7\xE3o de filtro dos itens de menu."),og(),Il(595,"p"),Qx(596,"Caso utilizado um servi\xE7o customizado, implementando a interface "),Il(597,"code"),Qx(598,"PoMenuFilter"),og(),Qx(599,`, o valor desta propriedade
ser\xE1 passado como par\xE2metro, na fun\xE7\xE3o `),Il(600,"code"),Qx(601,"getFilteredData"),og(),Qx(602,"."),og(),Il(603,"p"),Qx(604,"Quando utilizada uma URL de servi\xE7o, ser\xE1 realizado um "),Il(605,"em"),Qx(606,"GET"),og(),Qx(607,` na URL informada, passando os valores informados
nesta propriedade em conjunto com o par\xE2metro `),Il(608,"code"),Qx(609,"search"),og(),Qx(610,", veja exemplo:"),og(),Il(611,"pre")(612,"code"),Qx(613,`<po-menu p-service="/api/v1/fnd/menu" [p-params]="{ company: 1, user: 297767512 }">
</po-menu>

Requisi\xE7\xE3o: GET /api/v1/fnd/menu?search=contas&company=1&user=297767512
`),og()()()(),Il(614,"tr",15)(615,"td",16)(616,"div",17)(617,"span",18),Qx(618," p-search-tree-items"),zl(619,"br"),og()()(),Il(620,"td",19)(621,"code",20),Qx(622,"boolean"),og()(),Il(623,"td",21)(624,"p")(625,"code"),Qx(626,"false"),og()()(),Il(627,"td",22)(628,"em")(629,"strong"),Qx(630,"(opcional)"),og()(),Il(631,"p"),Qx(632,`Quando ativado, a pesquisa tamb\xE9m retornar\xE1 itens agrupadores al\xE9m dos itens que cont\xEAm uma a\xE7\xE3o e/ou link definidos.
Isso pode ser \xFAtil quando se deseja encontrar rapidamente categorias ou se\xE7\xF5es do menu.`),og(),Il(633,"blockquote")(634,"p"),Qx(635,"\xC9 necess\xE1rio que a propriedade "),Il(636,"code"),Qx(637,"p-filter"),og(),Qx(638," esteja habilitada."),og()()()(),Il(639,"tr",15)(640,"td",16)(641,"div",17)(642,"span",18),Qx(643," p-service"),zl(644,"br"),og()()(),Il(645,"td",19)(646,"code",26),Qx(647,"string "),og(),Il(648,"code",30),Qx(649," PoMenuFilter"),og()(),Il(650,"td",21),Qx(651,"-"),og(),Il(652,"td",22)(653,"em")(654,"strong"),Qx(655,"(opcional)"),og()(),Il(656,"p"),Qx(657,`Nesta propriedade deve ser informada a URL do servi\xE7o em que ser\xE1 utilizado para realizar o filtro de itens do
menu quando realizar uma busca. Caso haja a necessidade de customiza\xE7\xE3o, pode ser informado um
servi\xE7o implementando a interface `),Il(658,"code"),Qx(659,"PoMenuFilter"),og(),Qx(660,"."),og(),Il(661,"p"),Qx(662,`Caso utilizada uma URL, o servi\xE7o deve retornar os dados conforme o
`),Il(663,"a",31),Qx(664,"Guia de implementa\xE7\xE3o de APIs"),og(),Qx(665," do PO UI."),og(),Il(666,"p"),Qx(667,"Quando utilizada uma URL de servi\xE7o, ser\xE1 realizado um "),Il(668,"em"),Qx(669,"GET"),og(),Qx(670,` na URL informada, passando o valor digitado
no par\xE2metro `),Il(671,"code"),Qx(672,"search"),og(),Qx(673,", veja exemplo:"),og(),Il(674,"blockquote")(675,"p"),Qx(676,"O filtro no servi\xE7o ser\xE1 realizado caso contenha no m\xEDnimo tr\xEAs caracteres no campo de busca, por exemplo "),Il(677,"code"),Qx(678,"tot"),og(),Qx(679,"."),og()(),Il(680,"pre")(681,"code"),Qx(682,`<po-menu p-service="/api/v1/fnd/menu">
</po-menu>

Requisi\xE7\xE3o: GET /api/v1/fnd/menu?search=contas
`),og()(),Il(683,"blockquote")(684,"p"),Qx(685,"\xC9 necess\xE1rio que propriedade "),Il(686,"code"),Qx(687,"p-filter"),og(),Qx(688," esteja habilitada."),og()()()(),Il(689,"tr",15)(690,"td",16)(691,"div",17)(692,"span",18),Qx(693," p-short-logo"),zl(694,"br"),og()()(),Il(695,"td",19)(696,"code",26),Qx(697,"string"),og()(),Il(698,"td",21),Qx(699,"-"),og(),Il(700,"td",22)(701,"em")(702,"strong"),Qx(703,"(opcional)"),og()(),Il(704,"p"),Qx(705,"Caminho para a logomarca, que ser\xE1 exibida quando o componente estiver colapsado, localizada na parte superior."),og(),Il(706,"blockquote")(707,"p")(708,"strong"),Qx(709,"Importante:"),og()()(),Il(710,"ul")(711,"li"),Qx(712,"Caso esta propriedade estiver indefinida ou inv\xE1lida passa a assumir o valor informado na propriedade "),Il(713,"code"),Qx(714,"p-logo"),og(),Qx(715,` e na aus\xEAncia desta o
espa\xE7o para logomarca ser\xE1 removido.`),og(),Il(716,"li"),Qx(717,"Como boa pr\xE1tica, indica-se utilizar imagens com at\xE9 "),Il(718,"code"),Qx(719,"48px"),og(),Qx(720," de altura e "),Il(721,"code"),Qx(722,"48px"),og(),Qx(723,` de largura,
caso ultrapassar esses valores a imagem ser\xE1 readequada no espa\xE7o dispon\xEDvel.`),og(),Il(724,"li"),Qx(725,"Caso n\xE3o informar um valor, esta propriedade passa a assumir o valor informado na propriedade "),Il(726,"code"),Qx(727,"p-logo"),og(),Qx(728,"."),og()()()(),Il(729,"tr",15)(730,"td",16)(731,"div",32)(732,"span",33),Qx(733," (p-toggle)"),zl(734,"br"),og()()(),Il(735,"td",19)(736,"code",34),Qx(737,"EventEmitter"),og()(),Il(738,"td",21),Qx(739,"-"),og(),Il(740,"td",22)(741,"em")(742,"strong"),Qx(743,"(opcional)"),og()(),Il(744,"p"),Qx(745,"Evento emitido toda vez que o estado do menu muda, enviando "),Il(746,"code"),Qx(747,"true"),og(),Qx(748," quando expandido e "),Il(749,"code"),Qx(750,"false"),og(),Qx(751," quando colapsado."),og(),Il(752,"pre")(753,"code",35),Qx(754,`<po-menu (p-toggle)="onMenuToggle($event)"></po-menu>
`),og()()()()(),Il(755,"h3",11),Qx(756,"M\xE9todos"),og(),Il(757,"table",36)(758,"tr",15)(759,"th",37)(760,"div",17)(761,"h4")(762,"span",18),Qx(763," collapse "),og()()()()(),Il(764,"tr",22)(765,"td",22)(766,"p"),zl(767,"a",38),og(),Il(768,"p"),Qx(769,"M\xE9todo para colapsar (retrair) o menu."),og()()()(),zl(770,"br"),Il(771,"table",36)(772,"tr",15)(773,"th",37)(774,"div",17)(775,"h4")(776,"span",18),Qx(777," expand "),og()()()()(),Il(778,"tr",22)(779,"td",22)(780,"p"),zl(781,"a",39),og(),Il(782,"p"),Qx(783,"M\xE9todo para expandir (aumentar) o menu."),og()()()(),zl(784,"br"),Il(785,"table",36)(786,"tr",15)(787,"th",37)(788,"div",17)(789,"h4")(790,"span",18),Qx(791," toggle "),og()()()()(),Il(792,"tr",22)(793,"td",22)(794,"p"),zl(795,"a",40),Qx(796,`
M\xE9todo que colapsa e expande o menu alternadamente.`),og(),Il(797,"blockquote")(798,"p"),Qx(799,"Os m\xE9todos apenas v\xE3o colapsar/expandir o menu se:"),og()(),Il(800,"ul")(801,"li"),Qx(802,"Todos os itens de menu tiverem valor nas propriedades "),Il(803,"code"),Qx(804,"icon"),og(),Qx(805," e "),Il(806,"code"),Qx(807,"shortLabel"),og(),Qx(808,"."),og()()()()(),zl(809,"br"),Il(810,"h3"),Qx(811,"Interfaces"),og(),Il(812,"h4",41)(813,"code",5),Qx(814,"PoMenuFilter"),og()(),Il(815,"div",2)(816,"p"),Qx(817,"Interface do servi\xE7o utilizado no componente "),Il(818,"code"),Qx(819,"po-menu"),og(),Qx(820,"."),og()(),Il(821,"h4",11),Qx(822,"M\xE9todos"),og(),Il(823,"table",36)(824,"tr",15)(825,"th",37)(826,"div",17)(827,"h4")(828,"span",18),Qx(829," getFilteredData "),og()()()()(),Il(830,"tr",22)(831,"td",22)(832,"p"),Qx(833,"M\xE9todo respons\xE1vel por retornar um "),Il(834,"em"),Qx(835,"Observable"),og(),Qx(836," que retorne uma lista de objetos que seguem a interface "),Il(837,"code"),Qx(838,"PoMenuItemFiltered"),og(),Qx(839,`.
Ser\xE1 informado por par\xE2metro o valor a ser pesquisado e as informa\xE7\xF5es adicionais preenchidas atrav\xE9s da propriedade `),Il(840,"code"),Qx(841,"p-params"),og(),Qx(842,"."),og()()()(),Il(843,"h5")(844,"b"),Qx(845,"Par\xE2metros"),og()(),Il(846,"table",12)(847,"tr",13)(848,"th",14),Qx(849,"Nome"),og(),Il(850,"th",14),Qx(851,"Tipo"),og(),Il(852,"th",14),Qx(853,"Descri\xE7\xE3o"),og()(),Il(854,"tr",15)(855,"td",16),Qx(856," search"),og(),Il(857,"td",19)(858,"code",42),Qx(859," string "),og()(),Il(860,"td",22)(861,"p"),Qx(862,"Valor informado no campo de busca dos itens de menus."),og()()(),Il(863,"tr",15)(864,"td",16),Qx(865," params"),og(),Il(866,"td",19)(867,"code",42),Qx(868," any "),og()(),Il(869,"td",22)(870,"p"),Qx(871,"Valor informado atrav\xE9s da propriedade "),Il(872,"code"),Qx(873,"p-params"),og(),Qx(874,"."),og()()()(),zl(875,"br"),Il(876,"h4",41)(877,"code",5),Qx(878,"PoMenuItemBadge"),og()(),Il(879,"div",2)(880,"p"),Qx(881,"Interface do "),Il(882,"em"),Qx(883,"badge"),og(),Qx(884," utilizado no "),Il(885,"code"),Qx(886,"po-menu"),og(),Qx(887,"."),og()(),Il(888,"h4",11),Qx(889,"Propriedades"),og(),Il(890,"table",12)(891,"tr",13)(892,"th",14),Qx(893,"Nome"),og(),Il(894,"th",14),Qx(895,"Tipo"),og(),Il(896,"th",14),Qx(897,"Descri\xE7\xE3o"),og()(),Il(898,"tr",15)(899,"td",16)(900,"div",17)(901,"span",18),Qx(902," color"),zl(903,"br"),og()()(),Il(904,"td",19)(905,"code",26),Qx(906,"string"),og()(),Il(907,"td",22)(908,"em")(909,"strong"),Qx(910,"(opcional)"),og()(),Il(911,"p"),Qx(912,"Define a cor do "),Il(913,"em"),Qx(914,"badge"),og(),Qx(915," e aceita os valores:"),og(),Il(916,"p"),zl(917,"span",43),Il(918,"code"),Qx(919,"color-01"),og()(),Il(920,"p"),zl(921,"span",44),Il(922,"code"),Qx(923,"color-02"),og()(),Il(924,"p"),zl(925,"span",45),Il(926,"code"),Qx(927,"color-03"),og()(),Il(928,"p"),zl(929,"span",46),Il(930,"code"),Qx(931,"color-04"),og()(),Il(932,"p"),zl(933,"span",47),Il(934,"code"),Qx(935,"color-05"),og()(),Il(936,"p"),zl(937,"span",48),Il(938,"code"),Qx(939,"color-06"),og()(),Il(940,"p"),zl(941,"span",49),Il(942,"code"),Qx(943,"color-07"),og()(),Il(944,"p"),zl(945,"span",50),Il(946,"code"),Qx(947,"color-08"),og()(),Il(948,"p"),zl(949,"span",51),Il(950,"code"),Qx(951,"color-09"),og()(),Il(952,"p"),zl(953,"span",52),Il(954,"code"),Qx(955,"color-10"),og()(),Il(956,"p"),zl(957,"span",53),Il(958,"code"),Qx(959,"color-11"),og()(),Il(960,"p"),zl(961,"span",54),Il(962,"code"),Qx(963,"color-12"),og()()()(),Il(964,"tr",15)(965,"td",16)(966,"div",17)(967,"span",18),Qx(968," value"),zl(969,"br"),og()()(),Il(970,"td",19)(971,"code",55),Qx(972,"number"),og()(),Il(973,"td",22)(974,"p"),Qx(975,"N\xFAmero exibido no "),Il(976,"em"),Qx(977,"badge"),og(),Qx(978,", caso o mesmo seja maior que "),Il(979,"strong"),Qx(980,"9"),og(),Qx(981," o mesmo exibe "),Il(982,"strong"),Qx(983,"9+"),og(),Qx(984,"."),og()()()(),Il(985,"h4",41)(986,"code",5),Qx(987,"PoMenuItemFiltered"),og()(),Il(988,"div",2)(989,"p"),Qx(990,"Interface do objeto que deve conter na cole\xE7\xE3o de itens filtrados no componente "),Il(991,"code"),Qx(992,"po-menu"),og(),Qx(993,"."),og()(),Il(994,"h4",11),Qx(995,"Propriedades"),og(),Il(996,"table",12)(997,"tr",13)(998,"th",14),Qx(999,"Nome"),og(),Il(1e3,"th",14),Qx(1001,"Tipo"),og(),Il(1002,"th",14),Qx(1003,"Descri\xE7\xE3o"),og()(),Il(1004,"tr",15)(1005,"td",16)(1006,"div",17)(1007,"span",18),Qx(1008," action"),zl(1009,"br"),og()()(),Il(1010,"td",19)(1011,"code",56),Qx(1012,"() => void"),og()(),Il(1013,"td",22)(1014,"p"),Qx(1015,"A\xE7\xE3o a ser executada quando o item de menu for clicado."),og()()(),Il(1016,"tr",15)(1017,"td",16)(1018,"div",17)(1019,"span",18),Qx(1020," label"),zl(1021,"br"),og()()(),Il(1022,"td",19)(1023,"code",26),Qx(1024,"string"),og()(),Il(1025,"td",22)(1026,"p"),Qx(1027,"Texto do item de menu."),og()()(),Il(1028,"tr",15)(1029,"td",16)(1030,"div",17)(1031,"span",18),Qx(1032," link"),zl(1033,"br"),og()()(),Il(1034,"td",19)(1035,"code",26),Qx(1036,"string"),og()(),Il(1037,"td",22)(1038,"p"),Qx(1039,"Link* para redirecionamento no clique do item do menu, podendo ser um "),Il(1040,"em"),Qx(1041,"link"),og(),Qx(1042," interno ou externo."),og()()()(),Il(1043,"h4",41)(1044,"code",5),Qx(1045,"PoMenuItem"),og()(),Il(1046,"div",2)(1047,"p"),Qx(1048,"Interface para os itens de menu do componente po-menu."),og()(),Il(1049,"h4",11),Qx(1050,"Propriedades"),og(),Il(1051,"table",12)(1052,"tr",13)(1053,"th",14),Qx(1054,"Nome"),og(),Il(1055,"th",14),Qx(1056,"Tipo"),og(),Il(1057,"th",14),Qx(1058,"Descri\xE7\xE3o"),og()(),Il(1059,"tr",15)(1060,"td",16)(1061,"div",17)(1062,"span",18),Qx(1063," action"),zl(1064,"br"),og()()(),Il(1065,"td",19)(1066,"code",57),Qx(1067,"Function"),og()(),Il(1068,"td",22)(1069,"em")(1070,"strong"),Qx(1071,"(opcional)"),og()(),Il(1072,"p"),Qx(1073,"A\xE7\xE3o personalizada para clique do item de menu."),og()()(),Il(1074,"tr",15)(1075,"td",16)(1076,"div",17)(1077,"span",18),Qx(1078," badge"),zl(1079,"br"),og()()(),Il(1080,"td",19)(1081,"code",58),Qx(1082,"PoMenuItemBadge"),og()(),Il(1083,"td",22)(1084,"em")(1085,"strong"),Qx(1086,"(opcional)"),og()(),Il(1087,"p"),Qx(1088,"Badge do item de menu."),og(),Il(1089,"p"),Qx(1090,"Ao adicion\xE1-lo em um subitem (filho) todos os itens ascendentes (pai) ser\xE3o marcados com um ponto vermelho."),og(),Il(1091,"blockquote")(1092,"p"),Qx(1093,"O "),Il(1094,"code"),Qx(1095,"po-badge"),og(),Qx(1096," s\xF3 ser\xE1 exibido caso o item do menu n\xE3o possua "),Il(1097,"code"),Qx(1098,"subItems"),og(),Qx(1099," e seu valor seja maior ou igual a 0."),og()()()(),Il(1100,"tr",15)(1101,"td",16)(1102,"div",17)(1103,"span",18),Qx(1104," icon"),zl(1105,"br"),og()()(),Il(1106,"td",19)(1107,"code",26),Qx(1108,"string "),og(),Il(1109,"code",59),Qx(1110," TemplateRef<void>"),og()(),Il(1111,"td",22)(1112,"em")(1113,"strong"),Qx(1114,"(opcional)"),og()(),Il(1115,"p"),Qx(1116,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),Il(1117,"a",60),Qx(1118,"Biblioteca de \xEDcones"),og(),Qx(1119,". conforme exemplo abaixo:"),og(),Il(1120,"pre")(1121,"code"),Qx(1122,`<po-menu
 [p-menus]="[{ link: '/', label: 'PO ICON', icon: 'an an-newspaper' }]">
</po-menu>
`),og()(),Il(1123,"p"),Qx(1124,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca Font Awesome, da seguinte forma:"),og(),Il(1125,"pre")(1126,"code"),Qx(1127,`<po-menu
 [p-menus]="[{ link: '/', label: 'FA ICON', icon: 'fa fa-podcast' }]">
</po-menu>
`),og()(),Il(1128,"p"),Qx(1129,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),Il(1130,"code"),Qx(1131,"TemplateRef"),og(),Qx(1132,`, conforme exemplo abaixo:
component.html:`),og(),Il(1133,"pre")(1134,"code"),Qx(1135,`<ng-template #iconTemplate>
  <ion-icon name="heart"></ion-icon>
</ng-template>

<po-menu [p-menus]="myProperty"></po-menu>
`),og()(),Il(1136,"p"),Qx(1137,"component.ts:"),og(),Il(1138,"pre")(1139,"code"),Qx(1140,`@ViewChild('iconTemplate', { static: true } ) iconTemplate : TemplateRef<void>;

myProperty = [
 {
   link: '/',
   label: 'Icon',
   icon: this.iconTemplate
 }
];
`),og()(),Il(1141,"blockquote")(1142,"p"),Qx(1143,`S\xE3o exibidos apenas no primeiro n\xEDvel de menu e ser\xE3o vis\xEDveis apenas se todos os itens de primeiro n\xEDvel possu\xEDrem \xEDcones.
O menu colapsado tamb\xE9m aparecer\xE1 somente se todos os itens de primeiro n\xEDvel de menu possu\xEDrem \xEDcones e textos curtos.`),og()()()(),Il(1144,"tr",15)(1145,"td",16)(1146,"div",17)(1147,"span",18),Qx(1148," label"),zl(1149,"br"),og()()(),Il(1150,"td",19)(1151,"code",26),Qx(1152,"string"),og()(),Il(1153,"td",22)(1154,"p"),Qx(1155,"Texto do item de menu."),og()()(),Il(1156,"tr",15)(1157,"td",16)(1158,"div",17)(1159,"span",18),Qx(1160," link"),zl(1161,"br"),og()()(),Il(1162,"td",19)(1163,"code",26),Qx(1164,"string"),og()(),Il(1165,"td",22)(1166,"em")(1167,"strong"),Qx(1168,"(opcional)"),og()(),Il(1169,"p"),Qx(1170,"Link para redirecionamento no click do item do menu, podendo ser um link interno ou externo."),og()()(),Il(1171,"tr",15)(1172,"td",16)(1173,"div",17)(1174,"span",18),Qx(1175," shortLabel"),zl(1176,"br"),og()()(),Il(1177,"td",19)(1178,"code",26),Qx(1179,"string"),og()(),Il(1180,"td",22)(1181,"em")(1182,"strong"),Qx(1183,"(opcional)"),og()(),Il(1184,"p"),Qx(1185,`Texto curto exibido atrav\xE9s de um tooltip para o item que aparece quando o menu estiver colapsado.
Se colapsado, aparecer\xE1 somente se todos os itens de primeiro n\xEDvel de menu que possu\xEDrem \xEDcones e textos curtos.`),og()()(),Il(1186,"tr",15)(1187,"td",16)(1188,"div",17)(1189,"span",18),Qx(1190," subItems"),zl(1191,"br"),og()()(),Il(1192,"td",19)(1193,"code",61),Qx(1194,"Array<PoMenuItem>"),og()(),Il(1195,"td",22)(1196,"em")(1197,"strong"),Qx(1198,"(opcional)"),og()(),Il(1199,"p"),Qx(1200,"Lista de sub-items, criando novos n\xEDveis dentro do menu. O n\xFAmero m\xE1ximo de n\xEDveis do menu \xE9 igual a 4."),og()()()()());},dependencies:[Ka],encapsulation:2})}return a})();var Ie=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,r){this.route=m,this.router=r;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let r=m.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:"merge"}),this.activeTab=m;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(r){return new(r||a)(C(Xn),C(En))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Menu",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,i){r&1&&(Il(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return i.changeTab("doc")}),zl(3,"sample-po-menu-doc"),og(),Il(4,"po-tab",3),ft("p-click",function(){return i.changeTab("web")}),zl(5,"sample-po-menu-basic-view")(6,"sample-po-menu-labs-view")(7,"sample-po-menu-human-resources-view"),og()()()),r&2&&(nw("p-actions",i.actions),Lp(2),nw("p-active",i.activeTab==="doc"),Lp(2),nw("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[cNe,qme,Yme,ve,Me,ye,we],encapsulation:2})}return a})();var je=[{path:"",component:Ie}],_e=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=fe({type:a});static \u0275inj=ue({imports:[uL.forChild(je),uL]})}return a})();var _t=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=fe({type:a});static \u0275inj=ue({imports:[sr,_e]})}return a})();export{_t as DocPoMenuModule};