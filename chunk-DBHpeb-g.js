import {f as fe,u as ue,s as sr,h as hL,w,c3 as Xn,E as En,U as Un,a as f,ae as Be$1,n as nb,G,I,Y as Yz,H as Wl,Q as nw,bs as fN,a7 as dN,an as CO,aH as Ka,b8 as Bme,b9 as qme,F as Sl,z as eN,J as og,a1 as ft,L as Lp,ar as $x,au as dg,aX as Z9,aF as G9,aY as q9,aG as _k,aZ as mk,b0 as Qt,cs as Upe,b1 as mv,b4 as L3,cp as Rhe,c8 as wde,aJ as Hhe,bH as M3,cX as I3,c9 as Ghe,a3 as rNe,aB as wx,aM as ww,aN as e0,a2 as JE,aO as Ew,aP as n0,av as ql,aw as lo,ax as uo,dk as Rw,dl as hNe,R as we$1,br as sN,aD as Ky,aT as nN,aE as Xy}from'./main-WP3NAV7C.js';var ke=()=>({label:"PO UI - Angular Framework",link:"/"}),Le=a=>[a],xe=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-menu-basic"]],standalone:false,decls:1,vars:4,consts:[[3,"p-menus"]],template:function(r,i){r&1&&Wl(0,"po-menu",0),r&2&&nw("p-menus",fN(2,Le,dN(1,ke)));},dependencies:[Yz],encapsulation:2,changeDetection:1})}return a})();var De=a=>({"docs-sample-code-tabs":a}),ve=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-menu-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Menu Basic"),og(),Sl(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-menu-basic/sample-po-menu-basic.component.html"),og(),Sl(13,"pre",7),eN(14,`<po-menu [p-menus]="[{ label: 'PO UI - Angular Framework', link: '/' }]"></po-menu>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-menu-basic/sample-po-menu-basic.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-menu-basic',
  templateUrl: './sample-po-menu-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoMenuBasicComponent {}
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-menu-basic"),og(),Wl(23,"hr")),r&2&&(Lp(5),$x("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,De,i.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,xe],encapsulation:2})}return a})();function Re(a,W){if(a&1&&(Sl(0,"div"),Wl(1,"span"),Sl(2,"span",26),eN(3),og()()),a&2){let m=W.$implicit;Lp(),$x(sN("sample-menu-circle sample-menu-vertical-middle po-",m.value)),Lp(2),dg(" ",m.label," ");}}var Ce=(()=>{class a{changeDetector=f(Be$1);menu;badgeColor;badgeValue;buttons=[{label:"Collapse",action:this.collapse.bind(this)},{label:"Expand",action:this.expand.bind(this)},{label:"Toggle",action:this.toggle.bind(this)}];componentsSize;filter;icon;label;link;logo;logoLink;maxBadgeValue=999999999999999;menuItems;menuItemSelected;menuParams;params;parent;parentList;service;shortLabel;shortLogo;searchTreeItems;badgeColorList=[{label:"color-01",value:"color-01"},{label:"color-02",value:"color-02"},{label:"color-03",value:"color-03"},{label:"color-04",value:"color-04"},{label:"color-05",value:"color-05"},{label:"color-06",value:"color-06"},{label:"color-07",value:"color-07"},{label:"color-08",value:"color-08"},{label:"color-09",value:"color-09"},{label:"color-10",value:"color-10"},{label:"color-11",value:"color-11"},{label:"color-12",value:"color-12"}];componentsSizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];iconsOptions=[{label:"an an-newspaper",value:"an an-newspaper"},{label:"an an-camera",value:"an an-camera"},{label:"an an-calendar-dots",value:"an an-calendar-dots"},{label:"an an-user",value:"an an-user"},{label:"an an-chat",value:"an an-chat"},{label:"an an-package",value:"an an-package"},{value:"fa fa-calculator",label:"fa fa-calculator"},{value:"fa fa-podcast",label:"fa fa-podcast"}];ngOnInit(){this.restore();}addMenuItem(){if(this.label){if(!this.parent)this.menuItems.push({action:this.changeMenuSelected.bind(this),icon:this.icon,label:this.label,link:this.link,shortLabel:this.shortLabel,badge:{value:this.badgeValue,color:this.badgeColor}});else {let m=this.getMenuParent(this.menuItems,this.parent);m.subItems||(m.subItems=[]),m.subItems.push({action:this.changeMenuSelected.bind(this),label:this.label,link:this.link,badge:{value:this.badgeValue,color:this.badgeColor}});}this.formReset(),this.updateMenuItems();}}onChangeParams(m){try{this.params=JSON.parse(m);}catch(r){this.params=void 0;}}restore(){this.formReset(),this.filter=false,this.menuItemSelected=void 0,this.badgeColor=void 0,this.badgeValue=void 0,this.logo=void 0,this.logoLink=void 0,this.params=void 0,this.parentList=[],this.menuItems=[],this.menuParams=void 0,this.service="",this.shortLogo=void 0,this.searchTreeItems=false,this.updateMenuItems();}changeMenuSelected(m){this.menuItemSelected=m.label;}collapse(){this.menu.collapse();}expand(){this.menu.expand();}formReset(){this.badgeColor=void 0,this.badgeValue=void 0,this.componentsSize="medium",this.icon=void 0,this.label="PO Menu",this.link=void 0,this.parent=void 0,this.shortLabel="Menu";}getMenuParent(m,r){let i;if(m){for(let s of m)if(s.id===r){i=s;break}else i||(i=this.getMenuParent(s.subItems,r));return i}}toggle(){this.menu.toggle();}updateMenuItems(){this.changeDetector.detectChanges(),this.parentList=[],this.menuItems.forEach(m=>{this.parentList.push({label:m.label,value:m.id}),m.subItems&&m.subItems.forEach(r=>{this.parentList.push({label:`- ${r.label}`,value:r.id}),r.subItems&&r.subItems.forEach(i=>{this.parentList.push({label:`-- ${i.label}`,value:i.id});});});});}onFilterChange(m){this.filter=m,!this.filter&&this.searchTreeItems&&(this.searchTreeItems=false);}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-menu-labs"]],viewQuery:function(r,i){if(r&1&&ql(Yz,7),r&2){let s;lo(s=uo())&&(i.menu=s.first);}},standalone:false,decls:32,vars:33,consts:[["f","ngForm"],[1,"po-wrapper"],[3,"p-components-size","p-filter","p-logo","p-logo-link","p-menus","p-params","p-service","p-short-logo","p-search-tree-items"],["p-title","PO Menu"],[1,"po-row"],["p-label","Methods","p-value","Only if all menu items have icon and short label.",1,"po-lg-12"],[1,"po-lg-12",3,"p-buttons"],["p-label","Menu Item Selected",3,"p-value"],["name","filterMenu","p-label","Filter","p-label-off","Disabled","p-label-on","Enabled",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","searchTreeItems","p-label","Filter Search Tree Items","p-label-off","Disabled","p-label-on","Enabled",1,"po-lg-6",3,"ngModelChange","ngModel","p-disabled"],["name","parent","p-label","Parent","p-placeholder","Add new menu at root level",1,"po-md-4",3,"ngModelChange","ngModel","p-options"],["name","label","p-label","Label","p-required","",1,"po-md-4",3,"ngModelChange","ngModel"],["name","shortLabel","p-label","Short Label","p-required","",1,"po-md-4",3,"ngModelChange","ngModel"],["name","link","p-label","External link","p-placeholder","http://",1,"po-md-4",3,"ngModelChange","ngModel"],["name","badgeColor","p-label","Badge color","p-placeholder","Select a color of badge",1,"po-md-4",3,"ngModelChange","ngModel","p-options"],["p-select-option-template",""],["name","badgeValue","p-label","Badge value","p-required","",1,"po-md-4",3,"ngModelChange","ngModel","p-max"],["name","icon","p-label","Icon",1,"po-md-4",3,"ngModelChange","ngModel","p-disabled","p-options"],["p-label","Add",1,"po-xl-2","po-md-4",3,"p-click"],["name","service","p-clean","","p-label","Service","p-help","https://po-sample-api.onrender.com/v1/menus",1,"po-md-6",3,"ngModelChange","ngModel"],["name","menuParams","p-clean","","p-label","Params","p-help",'Enter a value to be sent as a parameter. Ex: { "departament": "technology" }',1,"po-md-6",3,"ngModelChange","p-change-model","ngModel"],["name","logo","p-clean","","p-help","https://po-ui.io/assets/graphics/po.png","p-label","Logo",1,"po-md-6",3,"ngModelChange","ngModel"],["name","shortLogo","p-clean","","p-help","https://po-ui.io/assets/graphics/logo-dgeni.png","p-label","Short Logo",1,"po-md-6",3,"ngModelChange","ngModel"],["name","logo link","p-clean","","p-help","ex.: '/documentation/po-menu','https://github.com/po-ui/po-angular/blob/master/CONTRIBUTING.md'","p-label","Logo link",1,"po-md-12",3,"ngModelChange","ngModel"],["name","size","p-columns","4","p-label","Components size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-xl-3","po-md-5",3,"p-click"],[1,"sample-menu-vertical-middle"]],template:function(r,i){if(r&1){let s=wx();Sl(0,"div",1),Wl(1,"po-menu",2),Sl(2,"po-page-default",3)(3,"div",4),Wl(4,"po-info",5)(5,"po-button-group",6),og(),Wl(6,"po-divider"),Sl(7,"div",4),Wl(8,"po-info",7),Sl(9,"form",null,0)(11,"po-switch",8),ww("ngModelChange",function(l){return Ky(s),nN(i.filter,l)||(i.filter=l),Xy(l)}),ft("ngModelChange",function(l){return i.onFilterChange(l)}),og(),e0(),Sl(12,"po-switch",9),ww("ngModelChange",function(l){return Ky(s),nN(i.searchTreeItems,l)||(i.searchTreeItems=l),Xy(l)}),og(),e0(),Sl(13,"po-select",10),ww("ngModelChange",function(l){return Ky(s),nN(i.parent,l)||(i.parent=l),Xy(l)}),og(),e0(),Sl(14,"po-input",11),ww("ngModelChange",function(l){return Ky(s),nN(i.label,l)||(i.label=l),Xy(l)}),og(),e0(),Sl(15,"po-input",12),ww("ngModelChange",function(l){return Ky(s),nN(i.shortLabel,l)||(i.shortLabel=l),Xy(l)}),og(),e0(),Sl(16,"po-url",13),ww("ngModelChange",function(l){return Ky(s),nN(i.link,l)||(i.link=l),Xy(l)}),og(),e0(),Sl(17,"po-select",14),ww("ngModelChange",function(l){return Ky(s),nN(i.badgeColor,l)||(i.badgeColor=l),Xy(l)}),JE(18,Re,4,4,"ng-template",15),og(),e0(),Sl(19,"po-number",16),ww("ngModelChange",function(l){return Ky(s),nN(i.badgeValue,l)||(i.badgeValue=l),Xy(l)}),og(),e0(),Sl(20,"po-select",17),ww("ngModelChange",function(l){return Ky(s),nN(i.icon,l)||(i.icon=l),Xy(l)}),og(),e0(),Sl(21,"div",4)(22,"po-button",18),ft("p-click",function(){return i.addMenuItem()}),og()(),Wl(23,"po-divider"),Sl(24,"po-input",19),ww("ngModelChange",function(l){return Ky(s),nN(i.service,l)||(i.service=l),Xy(l)}),og(),e0(),Sl(25,"po-input",20),ww("ngModelChange",function(l){return Ky(s),nN(i.menuParams,l)||(i.menuParams=l),Xy(l)}),ft("p-change-model",function(l){return i.onChangeParams(l)}),og(),e0(),Sl(26,"po-input",21),ww("ngModelChange",function(l){return Ky(s),nN(i.logo,l)||(i.logo=l),Xy(l)}),og(),e0(),Sl(27,"po-input",22),ww("ngModelChange",function(l){return Ky(s),nN(i.shortLogo,l)||(i.shortLogo=l),Xy(l)}),og(),e0(),Sl(28,"po-input",23),ww("ngModelChange",function(l){return Ky(s),nN(i.logoLink,l)||(i.logoLink=l),Xy(l)}),og(),e0(),Sl(29,"po-radio-group",24),ww("ngModelChange",function(l){return Ky(s),nN(i.componentsSize,l)||(i.componentsSize=l),Xy(l)}),og(),e0(),Sl(30,"div",4)(31,"po-button",25),ft("p-click",function(){return i.restore()}),og()()()()()();}r&2&&(Lp(),nw("p-components-size",i.componentsSize)("p-filter",i.filter)("p-logo",i.logo)("p-logo-link",i.logoLink)("p-menus",i.menuItems)("p-params",i.params)("p-service",i.service)("p-short-logo",i.shortLogo)("p-search-tree-items",i.searchTreeItems),Lp(4),nw("p-buttons",i.buttons),Lp(3),nw("p-value",i.menuItemSelected),Lp(3),Ew("ngModel",i.filter),n0(),Lp(),Ew("ngModel",i.searchTreeItems),nw("p-disabled",!i.filter),n0(),Lp(),Ew("ngModel",i.parent),nw("p-options",i.parentList),n0(),Lp(),Ew("ngModel",i.label),n0(),Lp(),Ew("ngModel",i.shortLabel),n0(),Lp(),Ew("ngModel",i.link),n0(),Lp(),Ew("ngModel",i.badgeColor),nw("p-options",i.badgeColorList),n0(),Lp(2),Ew("ngModel",i.badgeValue),nw("p-max",i.maxBadgeValue),n0(),Lp(),Ew("ngModel",i.icon),nw("p-disabled",i.parent)("p-options",i.iconsOptions),n0(),Lp(4),Ew("ngModel",i.service),n0(),Lp(),Ew("ngModel",i.menuParams),n0(),Lp(),Ew("ngModel",i.logo),n0(),Lp(),Ew("ngModel",i.shortLogo),n0(),Lp(),Ew("ngModel",i.logoLink),n0(),Lp(),Ew("ngModel",i.componentsSize),nw("p-options",i.componentsSizeOptions),n0());},dependencies:[Z9,G9,q9,_k,mk,Qt,Upe,mv,L3,Rhe,wde,Hhe,M3,I3,Ghe,Yz,rNe],styles:[".sample-menu-circle[_ngcontent-%COMP%]{border-radius:14px;display:inline-block;height:20px;width:20px}.sample-menu-vertical-middle[_ngcontent-%COMP%]{vertical-align:middle}"],changeDetection:1})}return a})();var qe=a=>({"docs-sample-code-tabs":a}),Me=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-menu-labs-view"]],standalone:false,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Menu Labs"),og(),Sl(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-menu-labs/sample-po-menu-labs.component.html"),og(),Sl(13,"pre",7),eN(14,`<div class="po-wrapper">
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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-menu-labs/sample-po-menu-labs.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { ChangeDetectorRef, Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()(),Sl(21,"po-tab",10)(22,"div")(23,"label",6),eN(24,"sample-po-menu-labs/sample-po-menu-labs.component.css"),og(),Sl(25,"pre",11),eN(26,`.sample-menu-circle {
  border-radius: 14px;
  display: inline-block;
  height: 20px;
  width: 20px;
}

.sample-menu-vertical-middle {
  vertical-align: middle;
}
`),og()()()()(),Sl(27,"div",12),Wl(28,"sample-po-menu-labs"),og(),Wl(29,"hr")),r&2&&(Lp(5),$x("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,qe,i.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,Ce],encapsulation:2})}return a})();var O=(()=>{class a{http=f(nb);url="https://po-sample-api.onrender.com/v1/menus";getFilteredData(m){let r={search:m};return this.http.get(this.url,{params:r}).pipe(G(i=>i.items))}static \u0275fac=function(r){return new(r||a)};static \u0275prov=I({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();function Be(a,W){a&1&&(Sl(0,"div",5)(1,"p"),eN(2,"Welcome,"),og(),Sl(3,"p")(4,"b"),eN(5," John Doe "),og()()());}var Pe=(()=>{class a{samplePoMenuHumanResourcesService=f(O);menuItemSelected;menus=[{label:"Register user",action:this.printMenuAction.bind(this),icon:"an an-user",shortLabel:"Register"},{label:"Timekeeping",action:this.printMenuAction.bind(this),icon:"an an-clock",shortLabel:"Timekeeping",badge:{value:1}},{label:"Useful links",icon:"an an-share",shortLabel:"Links",subItems:[{label:"Ministry of Labour",action:this.printMenuAction.bind(this),link:"http://trabalho.gov.br/"},{label:"SindPD Syndicate",action:this.printMenuAction.bind(this),link:"http://www.sindpd.com.br/"}]},{label:"Benefits",icon:"an an-star",shortLabel:"Benefits",subItems:[{label:"Meal tickets",subItems:[{label:"Acceptance network ",action:this.printMenuAction.bind(this)},{label:"Extracts",action:this.printMenuAction.bind(this),subItems:[{label:"Monthly",action:this.printMenuAction.bind(this),badge:{value:3,color:"color-03"}},{label:"Custom",action:this.printMenuAction.bind(this)}]}]},{label:"Transportation tickets",action:this.printMenuAction.bind(this),badge:{value:12}}]}];printMenuAction(m){this.menuItemSelected=m.label;}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-menu-human-resources"]],standalone:false,features:[we$1([O])],decls:5,vars:5,consts:[[1,"po-wrapper"],["p-collapsed","","p-filter","",3,"p-menus","p-service","p-automatic-toggle"],["class","po-p-2 po-font-title sample-menu-header-text-color",4,"p-menu-header-template"],["p-title","PO - Human Resources",3,"p-show-notification"],[3,"p-title"],[1,"po-p-2","po-font-title","sample-menu-header-text-color"]],template:function(r,i){r&1&&(Sl(0,"div",0)(1,"po-menu",1),JE(2,Be,6,0,"div",2),og(),Wl(3,"po-toolbar",3)(4,"po-page-default",4),og()),r&2&&(Lp(),nw("p-menus",i.menus)("p-service",i.samplePoMenuHumanResourcesService)("p-automatic-toggle",true),Lp(2),nw("p-show-notification",false),Lp(),nw("p-title",i.menuItemSelected));},dependencies:[Yz,Rw,rNe,hNe],styles:[".sample-menu-header-text-color[_ngcontent-%COMP%]{color:#9da7a9}"],changeDetection:1})}return a})();var Oe=a=>({"docs-sample-code-tabs":a}),ye=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-menu-human-resources-view"]],standalone:false,decls:34,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Menu - Human Resources"),og(),Sl(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-menu-human-resources/sample-po-menu-human-resources.component.html"),og(),Sl(13,"pre",7),eN(14,`<div class="po-wrapper">
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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-menu-human-resources/sample-po-menu-human-resources.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),og(),Sl(21,"label",6),eN(22,"sample-po-menu-human-resources/sample-po-menu-human-resources.service.ts"),og(),Sl(23,"pre",9),eN(24,`import { HttpClient } from '@angular/common/http';
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
`),og()()(),Sl(25,"po-tab",10)(26,"div")(27,"label",6),eN(28,"sample-po-menu-human-resources/sample-po-menu-human-resources.component.css"),og(),Sl(29,"pre",11),eN(30,`.sample-menu-header-text-color {
  color: #9da7a9;
}
`),og()()()()(),Sl(31,"div",12),Wl(32,"sample-po-menu-human-resources"),og(),Wl(33,"hr")),r&2&&(Lp(5),$x("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,Oe,i.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,Pe],encapsulation:2})}return a})();var we=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-menu-doc"]],standalone:false,decls:1201,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],["href","/documentation/po-menu-header-template"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["href","documentation/po-menu#colapseMethod"],["href","documentation/po-menu#expandMethod"],["href","documentation/po-menu#toggleMethod"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","PoMenuItem[]"],["pan","",1,"docs-api-property-type","any"],["pan","",1,"docs-api-property-type","PoMenuFilter"],["href","https://po-ui.io/guides/api"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"language-html"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],["id","colapseMethod"],["id","expandMethod"],["id","toggleMethod"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type"],[1,"dot","po-color-01"],[1,"dot","po-color-02"],[1,"dot","po-color-03"],[1,"dot","po-color-04"],[1,"dot","po-color-05"],[1,"dot","po-color-06"],[1,"dot","po-color-07"],[1,"dot","po-color-08"],[1,"dot","po-color-09"],[1,"dot","po-color-10"],[1,"dot","po-color-11"],[1,"dot","po-color-12"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","()","=>","void"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","PoMenuItemBadge"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","Array<PoMenuItem>"]],template:function(r,i){r&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),eN(3,"import { PoMenuModule } from '@po-ui/ng-components';"),og()(),Sl(4,"div",2)(5,"p"),eN(6,"M\xF3dulo do componente po-menu."),og()(),Sl(7,"h3",3),eN(8,"Componente"),og(),Sl(9,"h4",4)(10,"code",5),eN(11,"PoMenuComponent"),og()(),Sl(12,"div",2)(13,"p"),eN(14,"Este \xE9 um componente de menu lateral que \xE9 utilizado para navega\xE7\xE3o nas p\xE1ginas de uma aplica\xE7\xE3o."),og(),Sl(15,"p"),eN(16,"O componente po-menu recebe uma lista de objetos do tipo "),Sl(17,"code"),eN(18,"MenuItem"),og(),eN(19,` com as informa\xE7\xF5es dos itens de menu como
textos, links para redirecionamento, a\xE7\xF5es, at\xE9 4 n\xEDveis de menu e \xEDcones para o primeiro n\xEDvel de menu.`),og(),Sl(20,"h4"),eN(21,"Tokens customiz\xE1veis"),og(),Sl(22,"p"),eN(23,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),og(),Sl(24,"blockquote")(25,"p"),eN(26,"Para maiores informa\xE7\xF5es, acesse o guia "),Sl(27,"a",6),eN(28,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),eN(29,"."),og()(),Sl(30,"table")(31,"thead")(32,"tr")(33,"th"),eN(34,"Propriedade"),og(),Sl(35,"th"),eN(36,"Descri\xE7\xE3o"),og(),Sl(37,"th"),eN(38,"Valor Padr\xE3o"),og()()(),Sl(39,"tbody")(40,"tr")(41,"td")(42,"strong"),eN(43,"Default Values"),og()(),Wl(44,"td")(45,"td"),og(),Sl(46,"tr")(47,"td")(48,"code"),eN(49,"--border-radius"),og()(),Sl(50,"td"),eN(51,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),og(),Sl(52,"td")(53,"code"),eN(54,"var(--border-radius-md)"),og()()(),Sl(55,"tr")(56,"td")(57,"code"),eN(58,"--border-color"),og()(),Sl(59,"td"),eN(60,"Cor da borda"),og(),Sl(61,"td")(62,"code"),eN(63,"var(--color-neutral-light-20)"),og()()(),Sl(64,"tr")(65,"td")(66,"code"),eN(67,"--background-color"),og()(),Sl(68,"td"),eN(69,"Cor de background"),og(),Sl(70,"td")(71,"code"),eN(72,"Var(----color-neutral-light-05)"),og()()(),Sl(73,"tr")(74,"td")(75,"strong"),eN(76,"Menu Footer"),og()(),Wl(77,"td")(78,"td"),og(),Sl(79,"tr")(80,"td")(81,"code"),eN(82,"--color"),og()(),Sl(83,"td"),eN(84,"Cor principla do menu footer"),og(),Sl(85,"td")(86,"code"),eN(87,"var(--color-action-default)"),og()()(),Sl(88,"tr")(89,"td")(90,"code"),eN(91,"--font-size"),og()(),Sl(92,"td"),eN(93,"Tamanho da fonte"),og(),Sl(94,"td")(95,"code"),eN(96,"var(--font-size-default)"),og()()(),Sl(97,"tr")(98,"td")(99,"code"),eN(100,"--line-height"),og()(),Sl(101,"td"),eN(102,"Tamanho da label"),og(),Sl(103,"td")(104,"code"),eN(105,"var(--line-height-md)"),og()()(),Sl(106,"tr")(107,"td")(108,"code"),eN(109,"--outline-color-focused"),og()(),Sl(110,"td"),eN(111,"Cor do outline do estado de focus"),og(),Sl(112,"td")(113,"code"),eN(114,"var(--color-action-focus)"),og()()(),Sl(115,"tr")(116,"td")(117,"code"),eN(118,"--font-weight-lvl0"),og()(),Sl(119,"td"),eN(120,"Peso da fonte"),og(),Sl(121,"td")(122,"code"),eN(123,"var(--font-weight-bold)"),og()()(),Sl(124,"tr")(125,"td")(126,"strong"),eN(127,"po-menu-item"),og()(),Wl(128,"td")(129,"td"),og(),Sl(130,"tr")(131,"td")(132,"code"),eN(133,"--font-family"),og()(),Sl(134,"td"),eN(135,"Fam\xEDlia tipogr\xE1fica usada"),og(),Sl(136,"td")(137,"code"),eN(138,"var(--font-family-theme)"),og()()(),Sl(139,"tr")(140,"td")(141,"code"),eN(142,"--font-size"),og()(),Sl(143,"td"),eN(144,"Tamanho da fonte"),og(),Sl(145,"td")(146,"code"),eN(147,"var(--font-size-default)"),og()()(),Sl(148,"tr")(149,"td")(150,"code"),eN(151,"--line-height"),og()(),Sl(152,"td"),eN(153,"Tamanho da label"),og(),Sl(154,"td")(155,"code"),eN(156,"var(--line-height-md)"),og()()(),Sl(157,"tr")(158,"td")(159,"code"),eN(160,"--border-radius"),og()(),Sl(161,"td"),eN(162,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),og(),Sl(163,"td")(164,"code"),eN(165,"var(--border-radius-md)"),og()()(),Sl(166,"tr")(167,"td")(168,"code"),eN(169,"--color"),og()(),Sl(170,"td"),eN(171,"Cor principal do item"),og(),Sl(172,"td")(173,"code"),eN(174,"var(--color-action-default)"),og()()(),Sl(175,"tr")(176,"td")(177,"code"),eN(178,"--background-color"),og()(),Sl(179,"td"),eN(180,"Cor do background"),og(),Sl(181,"td")(182,"code"),eN(183,"transparent"),og()()(),Sl(184,"tr")(185,"td")(186,"strong"),eN(187,"Hover"),og()(),Wl(188,"td")(189,"td"),og(),Sl(190,"tr")(191,"td")(192,"code"),eN(193,"--color-hover"),og()(),Sl(194,"td"),eN(195,"Cor principal no estado hover"),og(),Sl(196,"td")(197,"code"),eN(198,"var(--color-brand-01-darkest)"),og()()(),Sl(199,"tr")(200,"td")(201,"code"),eN(202,"--background-color-hover"),og()(),Sl(203,"td"),eN(204,"Cor de background no estado hover"),og(),Sl(205,"td")(206,"code"),eN(207,"var(--color-brand-01-lighter)"),og()()(),Sl(208,"tr")(209,"td")(210,"strong"),eN(211,"Focused"),og()(),Wl(212,"td")(213,"td"),og(),Sl(214,"tr")(215,"td")(216,"code"),eN(217,"--outline-color-focused"),og()(),Sl(218,"td"),eN(219,"Cor do outline do estado de focus"),og(),Sl(220,"td")(221,"code"),eN(222,"var(--color-action-focus)"),og()()(),Sl(223,"tr")(224,"td")(225,"strong"),eN(226,"Pressed"),og()(),Wl(227,"td")(228,"td"),og(),Sl(229,"tr")(230,"td")(231,"code"),eN(232,"--background-color-pressed"),og(),eN(233," \xA0"),og(),Sl(234,"td"),eN(235,"Cor de background no estado de pressionado\xA0"),og(),Sl(236,"td")(237,"code"),eN(238,"var(--color-brand-01-light)"),og()()(),Sl(239,"tr")(240,"td")(241,"strong"),eN(242,"Actived"),og()(),Wl(243,"td")(244,"td"),og(),Sl(245,"tr")(246,"td")(247,"code"),eN(248,"--background-color-actived"),og()(),Sl(249,"td"),eN(250,"Cor de background no estado actived"),og(),Sl(251,"td")(252,"code"),eN(253,"var(--color-brand-01-darkest)"),og()()(),Sl(254,"tr")(255,"td")(256,"code"),eN(257,"--color-actived"),og()(),Sl(258,"td"),eN(259,"Cor principal no estado actived"),og(),Sl(260,"td")(261,"code"),eN(262,"var(--color-brand-01-lighter)"),og()()(),Sl(263,"tr")(264,"td")(265,"strong"),eN(266,"Font"),og()(),Wl(267,"td")(268,"td"),og(),Sl(269,"tr")(270,"td")(271,"code"),eN(272,"--font-weight-lvl0"),og()(),Sl(273,"td"),eN(274,"Peso da fonte bold"),og(),Sl(275,"td")(276,"code"),eN(277,"var(--font-weight-bold)"),og()()(),Sl(278,"tr")(279,"td")(280,"code"),eN(281,"--font-weight-lvl1"),og()(),Sl(282,"td"),eN(283,"Peso da fonte"),og(),Sl(284,"td")(285,"code"),eN(286,"var(--font-weight-normal)"),og()()()()(),Sl(287,"p"),Wl(288,"br"),eN(289," Aparece completo em telas com largura maior que 1200px, caso contr\xE1rio o menu \xE9 escondido e chamado por meio de um bot\xE3o."),og(),Sl(290,"p"),eN(291,`O menu tamb\xE9m pode ser colapsado. Essa op\xE7\xE3o \xE9 habilitada quando todos os itens de primeiro n\xEDvel possu\xEDrem \xEDcones e textos curtos.
Se colapsado, somente os itens de primeiro n\xEDvel ser\xE3o exibidos e, caso o item selecionado possua sub-n\xEDveis,
ent\xE3o o menu alternar\xE1 novamente para o estado aberto.`),og(),Sl(292,"p"),eN(293,"Existe a possibilidade de customizar a logomarca, que \xE9 exibida na parte superior do componente."),og(),Sl(294,"p"),eN(295,`E para adicionar um conte\xFAdo personalizado entre a logomarca e o campo de filtro,
basta adicionar este conte\xFAdo com a diretiva `),Sl(296,"a",7)(297,"strong"),eN(298,"p-menu-header-template"),og()(),eN(299,"."),og(),Sl(300,"p"),eN(301,`Caso utilizar o filtro de menus, \xE9 poss\xEDvel realizar buscas em servi\xE7o, apenas informando a URL do servi\xE7o ou a inst\xE2ncia de
um servi\xE7o customizado implementando a interface `),Sl(302,"code"),eN(303,"PoMenuFilter"),og(),eN(304,"."),og(),Sl(305,"p"),eN(306,"Para o menu funcionar corretamente \xE9 necess\xE1rio importar o "),Sl(307,"code"),eN(308,"RouterModule"),og(),eN(309," e "),Sl(310,"code"),eN(311,"Routes"),og(),eN(312," do m\xF3dulo principal de sua aplica\xE7\xE3o:"),og(),Sl(313,"pre")(314,"code"),eN(315,`import { RouterModule, Routes } from '@angular/router';

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
`),og()(),Sl(316,"p"),eN(317,"Al\xE9m disso \xE9 necess\xE1rio criar um m\xF3dulo configurando as rotas da aplica\xE7\xE3o."),og(),Sl(318,"pre")(319,"code"),eN(320,`import { NgModule } from '@angular/core';

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
`),og()()(),Sl(321,"div",8)(322,"h4",9),eN(323,"Seletor"),og(),Sl(324,"pre",10),eN(325,`<po-menu
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
`),og()(),Sl(326,"h4",11),eN(327,"Propriedades"),og(),Sl(328,"table",12)(329,"tr",13)(330,"th",14),eN(331,"Nome"),og(),Sl(332,"th",14),eN(333,"Tipo"),og(),Sl(334,"th",14),eN(335,"Padr\xE3o"),og(),Sl(336,"th",14),eN(337,"Descri\xE7\xE3o"),og()(),Sl(338,"tr",15)(339,"td",16)(340,"div",17)(341,"span",18),eN(342," p-automatic-toggle"),Wl(343,"br"),og()()(),Sl(344,"td",19)(345,"code",20),eN(346,"boolean"),og()(),Sl(347,"td",21)(348,"p")(349,"code"),eN(350,"false"),og()()(),Sl(351,"td",22)(352,"em")(353,"strong"),eN(354,"(opcional)"),og()(),Sl(355,"p"),eN(356,"Expande e Colapsa (retrai) o menu automaticamente."),og()()(),Sl(357,"tr",15)(358,"td",16)(359,"div",17)(360,"span",18),eN(361," p-collapsed"),Wl(362,"br"),og()()(),Sl(363,"td",19)(364,"code",20),eN(365,"boolean"),og()(),Sl(366,"td",21)(367,"p")(368,"code"),eN(369,"false"),og()()(),Sl(370,"td",22)(371,"em")(372,"strong"),eN(373,"(opcional)"),og()(),Sl(374,"p"),eN(375,"Colapsa (retrai) o menu e caso receba o valor "),Sl(376,"code"),eN(377,"false"),og(),eN(378," expande o menu."),og(),Sl(379,"blockquote")(380,"p"),eN(381,"Utilize esta propriedade para iniciar o menu colapsado."),og()(),Sl(382,"blockquote")(383,"p"),eN(384,"Ao utilizar os m\xE9todos "),Sl(385,"a",23)(386,"code"),eN(387,"colapse"),og()(),eN(388,", "),Sl(389,"a",24)(390,"code"),eN(391,"expand"),og()(),eN(392,` e
`),Sl(393,"a",25)(394,"code"),eN(395,"toggle"),og()(),eN(396," o valor desta propriedade n\xE3o \xE9 alterado."),og()(),Sl(397,"p")(398,"strong"),eN(399,"Importante:"),og()(),Sl(400,"blockquote")(401,"p"),eN(402,"O menu ser\xE1 colapsado/expandido apenas se todos os itens de menu tiverem valor nas propriedades "),Sl(403,"code"),eN(404,"icon"),og(),eN(405," e "),Sl(406,"code"),eN(407,"shortLabel"),og(),eN(408,"."),og()()()(),Sl(409,"tr",15)(410,"td",16)(411,"div",17)(412,"span",18),eN(413," p-components-size"),Wl(414,"br"),og()()(),Sl(415,"td",19)(416,"code",26),eN(417,"string"),og()(),Sl(418,"td",21)(419,"p")(420,"code"),eN(421,"medium"),og()()(),Sl(422,"td",22)(423,"em")(424,"strong"),eN(425,"(opcional)"),og()(),Sl(426,"p"),eN(427,"Define o tamanho dos componentes de formul\xE1rio no menu:"),og(),Sl(428,"ul")(429,"li")(430,"code"),eN(431,"small"),og(),eN(432,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),og(),Sl(433,"li")(434,"code"),eN(435,"medium"),og(),eN(436,": aplica a medida medium de cada componente."),og()(),Sl(437,"blockquote")(438,"p"),eN(439,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Sl(440,"code"),eN(441,"medium"),og(),eN(442,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Sl(443,"a",27),eN(444,"po-theme"),og(),eN(445,"."),og()()()(),Sl(446,"tr",15)(447,"td",16)(448,"div",17)(449,"span",18),eN(450," p-filter"),Wl(451,"br"),og()()(),Sl(452,"td",19)(453,"code",20),eN(454,"boolean"),og()(),Sl(455,"td",21)(456,"p")(457,"code"),eN(458,"false"),og()()(),Sl(459,"td",22)(460,"em")(461,"strong"),eN(462,"(opcional)"),og()(),Sl(463,"p"),eN(464,`Habilita um campo para pesquisa no menu.
A pesquisa \xE9 realizada em todos os n\xEDveis do menu e busca apenas pelos itens que cont\xE9m uma a\xE7\xE3o e/ou link definidos,
ou tamb\xE9m, pode ser realizada atrav\xE9s de um servi\xE7o definido na propriedade `),Sl(465,"code"),eN(466,"p-service"),og(),eN(467,"."),og(),Sl(468,"blockquote")(469,"p"),eN(470,"O campo de pesquisa \xE9 desabilitado se o menu estiver colapsado."),og()()()(),Sl(471,"tr",15)(472,"td",16)(473,"div",17)(474,"span",18),eN(475," p-logo"),Wl(476,"br"),og()()(),Sl(477,"td",19)(478,"code",26),eN(479,"string"),og()(),Sl(480,"td",21),eN(481,"-"),og(),Sl(482,"td",22)(483,"em")(484,"strong"),eN(485,"(opcional)"),og()(),Sl(486,"p"),eN(487,"Caminho para a logomarca, que ser\xE1 exibida quando o componente estiver expandido, localizada na parte superior."),og(),Sl(488,"blockquote")(489,"p")(490,"strong"),eN(491,"Importante:"),og()()(),Sl(492,"ul")(493,"li"),eN(494,"Caso esta propriedade estiver indefinida ou inv\xE1lida o espa\xE7o para logomarca ser\xE1 removido."),og(),Sl(495,"li"),eN(496,"Como boa pr\xE1tica, indica-se utilizar imagens com at\xE9 "),Sl(497,"code"),eN(498,"24px"),og(),eN(499," de altura e "),Sl(500,"code"),eN(501,"224px"),og(),eN(502,` de largura,
caso ultrapassar esses valores a imagem ser\xE1 readequada no espa\xE7o dispon\xEDvel.`),og()()()(),Sl(503,"tr",15)(504,"td",16)(505,"div",17)(506,"span",18),eN(507," p-logo-alt"),Wl(508,"br"),og()()(),Sl(509,"td",19)(510,"code",26),eN(511,"string"),og()(),Sl(512,"td",21)(513,"p")(514,"code"),eN(515,"Logomarca in\xEDcio"),og()()(),Sl(516,"td",22)(517,"em")(518,"strong"),eN(519,"(opcional)"),og()(),Sl(520,"p"),eN(521,"Define o texto alternativo para a logomarca."),og(),Sl(522,"blockquote")(523,"p")(524,"strong"),eN(525,"Importante"),og(),eN(526,`
Caso esta propriedade n\xE3o seja definida o texto padr\xE3o ser\xE1 "Logomarca in\xEDcio".`),og()()()(),Sl(527,"tr",15)(528,"td",16)(529,"div",17)(530,"span",18),eN(531," p-logo-link"),Wl(532,"br"),og()()(),Sl(533,"td",19)(534,"code",20),eN(535,"boolean "),og(),Sl(536,"code",26),eN(537," string"),og()(),Sl(538,"td",21)(539,"p")(540,"code"),eN(541,"true"),og()()(),Sl(542,"td",22)(543,"em")(544,"strong"),eN(545,"(opcional)"),og()(),Sl(546,"p"),eN(547,"Define o link para a rota ao clicar no logo do menu."),og(),Sl(548,"ul")(549,"li"),eN(550,"Se o valor for uma string, define a rota para o link informado."),og(),Sl(551,"li"),eN(552,"Se for "),Sl(553,"code"),eN(554,"false"),og(),eN(555,", o logo n\xE3o ter\xE1 link associado."),og(),Sl(556,"li"),eN(557,"Se for "),Sl(558,"code"),eN(559,"true"),og(),eN(560,", o logo ter\xE1 a rota padr\xE3o "),Sl(561,"code"),eN(562,"./"),og(),eN(563,"."),og()()()(),Sl(564,"tr",15)(565,"td",16)(566,"div",17)(567,"span",18),eN(568," p-menus"),Wl(569,"br"),og()()(),Sl(570,"td",19)(571,"code",28),eN(572,"PoMenuItem[]"),og()(),Sl(573,"td",21),eN(574,"-"),og(),Sl(575,"td",22)(576,"p"),eN(577,"Lista dos itens do menu. Se o valor estiver indefinido ou inv\xE1lido, ser\xE1 inicializado como um array vazio."),og()()(),Sl(578,"tr",15)(579,"td",16)(580,"div",17)(581,"span",18),eN(582," p-params"),Wl(583,"br"),og()()(),Sl(584,"td",19)(585,"code",29),eN(586,"any"),og()(),Sl(587,"td",21),eN(588,"-"),og(),Sl(589,"td",22)(590,"em")(591,"strong"),eN(592,"(opcional)"),og()(),Sl(593,"p"),eN(594,"Deve ser informado um objeto que deseja-se utilizar na requisi\xE7\xE3o de filtro dos itens de menu."),og(),Sl(595,"p"),eN(596,"Caso utilizado um servi\xE7o customizado, implementando a interface "),Sl(597,"code"),eN(598,"PoMenuFilter"),og(),eN(599,`, o valor desta propriedade
ser\xE1 passado como par\xE2metro, na fun\xE7\xE3o `),Sl(600,"code"),eN(601,"getFilteredData"),og(),eN(602,"."),og(),Sl(603,"p"),eN(604,"Quando utilizada uma URL de servi\xE7o, ser\xE1 realizado um "),Sl(605,"em"),eN(606,"GET"),og(),eN(607,` na URL informada, passando os valores informados
nesta propriedade em conjunto com o par\xE2metro `),Sl(608,"code"),eN(609,"search"),og(),eN(610,", veja exemplo:"),og(),Sl(611,"pre")(612,"code"),eN(613,`<po-menu p-service="/api/v1/fnd/menu" [p-params]="{ company: 1, user: 297767512 }">
</po-menu>

Requisi\xE7\xE3o: GET /api/v1/fnd/menu?search=contas&company=1&user=297767512
`),og()()()(),Sl(614,"tr",15)(615,"td",16)(616,"div",17)(617,"span",18),eN(618," p-search-tree-items"),Wl(619,"br"),og()()(),Sl(620,"td",19)(621,"code",20),eN(622,"boolean"),og()(),Sl(623,"td",21)(624,"p")(625,"code"),eN(626,"false"),og()()(),Sl(627,"td",22)(628,"em")(629,"strong"),eN(630,"(opcional)"),og()(),Sl(631,"p"),eN(632,`Quando ativado, a pesquisa tamb\xE9m retornar\xE1 itens agrupadores al\xE9m dos itens que cont\xEAm uma a\xE7\xE3o e/ou link definidos.
Isso pode ser \xFAtil quando se deseja encontrar rapidamente categorias ou se\xE7\xF5es do menu.`),og(),Sl(633,"blockquote")(634,"p"),eN(635,"\xC9 necess\xE1rio que a propriedade "),Sl(636,"code"),eN(637,"p-filter"),og(),eN(638," esteja habilitada."),og()()()(),Sl(639,"tr",15)(640,"td",16)(641,"div",17)(642,"span",18),eN(643," p-service"),Wl(644,"br"),og()()(),Sl(645,"td",19)(646,"code",26),eN(647,"string "),og(),Sl(648,"code",30),eN(649," PoMenuFilter"),og()(),Sl(650,"td",21),eN(651,"-"),og(),Sl(652,"td",22)(653,"em")(654,"strong"),eN(655,"(opcional)"),og()(),Sl(656,"p"),eN(657,`Nesta propriedade deve ser informada a URL do servi\xE7o em que ser\xE1 utilizado para realizar o filtro de itens do
menu quando realizar uma busca. Caso haja a necessidade de customiza\xE7\xE3o, pode ser informado um
servi\xE7o implementando a interface `),Sl(658,"code"),eN(659,"PoMenuFilter"),og(),eN(660,"."),og(),Sl(661,"p"),eN(662,`Caso utilizada uma URL, o servi\xE7o deve retornar os dados conforme o
`),Sl(663,"a",31),eN(664,"Guia de implementa\xE7\xE3o de APIs"),og(),eN(665," do PO UI."),og(),Sl(666,"p"),eN(667,"Quando utilizada uma URL de servi\xE7o, ser\xE1 realizado um "),Sl(668,"em"),eN(669,"GET"),og(),eN(670,` na URL informada, passando o valor digitado
no par\xE2metro `),Sl(671,"code"),eN(672,"search"),og(),eN(673,", veja exemplo:"),og(),Sl(674,"blockquote")(675,"p"),eN(676,"O filtro no servi\xE7o ser\xE1 realizado caso contenha no m\xEDnimo tr\xEAs caracteres no campo de busca, por exemplo "),Sl(677,"code"),eN(678,"tot"),og(),eN(679,"."),og()(),Sl(680,"pre")(681,"code"),eN(682,`<po-menu p-service="/api/v1/fnd/menu">
</po-menu>

Requisi\xE7\xE3o: GET /api/v1/fnd/menu?search=contas
`),og()(),Sl(683,"blockquote")(684,"p"),eN(685,"\xC9 necess\xE1rio que propriedade "),Sl(686,"code"),eN(687,"p-filter"),og(),eN(688," esteja habilitada."),og()()()(),Sl(689,"tr",15)(690,"td",16)(691,"div",17)(692,"span",18),eN(693," p-short-logo"),Wl(694,"br"),og()()(),Sl(695,"td",19)(696,"code",26),eN(697,"string"),og()(),Sl(698,"td",21),eN(699,"-"),og(),Sl(700,"td",22)(701,"em")(702,"strong"),eN(703,"(opcional)"),og()(),Sl(704,"p"),eN(705,"Caminho para a logomarca, que ser\xE1 exibida quando o componente estiver colapsado, localizada na parte superior."),og(),Sl(706,"blockquote")(707,"p")(708,"strong"),eN(709,"Importante:"),og()()(),Sl(710,"ul")(711,"li"),eN(712,"Caso esta propriedade estiver indefinida ou inv\xE1lida passa a assumir o valor informado na propriedade "),Sl(713,"code"),eN(714,"p-logo"),og(),eN(715,` e na aus\xEAncia desta o
espa\xE7o para logomarca ser\xE1 removido.`),og(),Sl(716,"li"),eN(717,"Como boa pr\xE1tica, indica-se utilizar imagens com at\xE9 "),Sl(718,"code"),eN(719,"48px"),og(),eN(720," de altura e "),Sl(721,"code"),eN(722,"48px"),og(),eN(723,` de largura,
caso ultrapassar esses valores a imagem ser\xE1 readequada no espa\xE7o dispon\xEDvel.`),og(),Sl(724,"li"),eN(725,"Caso n\xE3o informar um valor, esta propriedade passa a assumir o valor informado na propriedade "),Sl(726,"code"),eN(727,"p-logo"),og(),eN(728,"."),og()()()(),Sl(729,"tr",15)(730,"td",16)(731,"div",32)(732,"span",33),eN(733," (p-toggle)"),Wl(734,"br"),og()()(),Sl(735,"td",19)(736,"code",34),eN(737,"EventEmitter"),og()(),Sl(738,"td",21),eN(739,"-"),og(),Sl(740,"td",22)(741,"em")(742,"strong"),eN(743,"(opcional)"),og()(),Sl(744,"p"),eN(745,"Evento emitido toda vez que o estado do menu muda, enviando "),Sl(746,"code"),eN(747,"true"),og(),eN(748," quando expandido e "),Sl(749,"code"),eN(750,"false"),og(),eN(751," quando colapsado."),og(),Sl(752,"pre")(753,"code",35),eN(754,`<po-menu (p-toggle)="onMenuToggle($event)"></po-menu>
`),og()()()()(),Sl(755,"h3",11),eN(756,"M\xE9todos"),og(),Sl(757,"table",36)(758,"tr",15)(759,"th",37)(760,"div",17)(761,"h4")(762,"span",18),eN(763," collapse "),og()()()()(),Sl(764,"tr",22)(765,"td",22)(766,"p"),Wl(767,"a",38),og(),Sl(768,"p"),eN(769,"M\xE9todo para colapsar (retrair) o menu."),og()()()(),Wl(770,"br"),Sl(771,"table",36)(772,"tr",15)(773,"th",37)(774,"div",17)(775,"h4")(776,"span",18),eN(777," expand "),og()()()()(),Sl(778,"tr",22)(779,"td",22)(780,"p"),Wl(781,"a",39),og(),Sl(782,"p"),eN(783,"M\xE9todo para expandir (aumentar) o menu."),og()()()(),Wl(784,"br"),Sl(785,"table",36)(786,"tr",15)(787,"th",37)(788,"div",17)(789,"h4")(790,"span",18),eN(791," toggle "),og()()()()(),Sl(792,"tr",22)(793,"td",22)(794,"p"),Wl(795,"a",40),eN(796,`
M\xE9todo que colapsa e expande o menu alternadamente.`),og(),Sl(797,"blockquote")(798,"p"),eN(799,"Os m\xE9todos apenas v\xE3o colapsar/expandir o menu se:"),og()(),Sl(800,"ul")(801,"li"),eN(802,"Todos os itens de menu tiverem valor nas propriedades "),Sl(803,"code"),eN(804,"icon"),og(),eN(805," e "),Sl(806,"code"),eN(807,"shortLabel"),og(),eN(808,"."),og()()()()(),Wl(809,"br"),Sl(810,"h3"),eN(811,"Interfaces"),og(),Sl(812,"h4",41)(813,"code",5),eN(814,"PoMenuFilter"),og()(),Sl(815,"div",2)(816,"p"),eN(817,"Interface do servi\xE7o utilizado no componente "),Sl(818,"code"),eN(819,"po-menu"),og(),eN(820,"."),og()(),Sl(821,"h4",11),eN(822,"M\xE9todos"),og(),Sl(823,"table",36)(824,"tr",15)(825,"th",37)(826,"div",17)(827,"h4")(828,"span",18),eN(829," getFilteredData "),og()()()()(),Sl(830,"tr",22)(831,"td",22)(832,"p"),eN(833,"M\xE9todo respons\xE1vel por retornar um "),Sl(834,"em"),eN(835,"Observable"),og(),eN(836," que retorne uma lista de objetos que seguem a interface "),Sl(837,"code"),eN(838,"PoMenuItemFiltered"),og(),eN(839,`.
Ser\xE1 informado por par\xE2metro o valor a ser pesquisado e as informa\xE7\xF5es adicionais preenchidas atrav\xE9s da propriedade `),Sl(840,"code"),eN(841,"p-params"),og(),eN(842,"."),og()()()(),Sl(843,"h5")(844,"b"),eN(845,"Par\xE2metros"),og()(),Sl(846,"table",12)(847,"tr",13)(848,"th",14),eN(849,"Nome"),og(),Sl(850,"th",14),eN(851,"Tipo"),og(),Sl(852,"th",14),eN(853,"Descri\xE7\xE3o"),og()(),Sl(854,"tr",15)(855,"td",16),eN(856," search"),og(),Sl(857,"td",19)(858,"code",42),eN(859," string "),og()(),Sl(860,"td",22)(861,"p"),eN(862,"Valor informado no campo de busca dos itens de menus."),og()()(),Sl(863,"tr",15)(864,"td",16),eN(865," params"),og(),Sl(866,"td",19)(867,"code",42),eN(868," any "),og()(),Sl(869,"td",22)(870,"p"),eN(871,"Valor informado atrav\xE9s da propriedade "),Sl(872,"code"),eN(873,"p-params"),og(),eN(874,"."),og()()()(),Wl(875,"br"),Sl(876,"h4",41)(877,"code",5),eN(878,"PoMenuItemBadge"),og()(),Sl(879,"div",2)(880,"p"),eN(881,"Interface do "),Sl(882,"em"),eN(883,"badge"),og(),eN(884," utilizado no "),Sl(885,"code"),eN(886,"po-menu"),og(),eN(887,"."),og()(),Sl(888,"h4",11),eN(889,"Propriedades"),og(),Sl(890,"table",12)(891,"tr",13)(892,"th",14),eN(893,"Nome"),og(),Sl(894,"th",14),eN(895,"Tipo"),og(),Sl(896,"th",14),eN(897,"Descri\xE7\xE3o"),og()(),Sl(898,"tr",15)(899,"td",16)(900,"div",17)(901,"span",18),eN(902," color"),Wl(903,"br"),og()()(),Sl(904,"td",19)(905,"code",26),eN(906,"string"),og()(),Sl(907,"td",22)(908,"em")(909,"strong"),eN(910,"(opcional)"),og()(),Sl(911,"p"),eN(912,"Define a cor do "),Sl(913,"em"),eN(914,"badge"),og(),eN(915," e aceita os valores:"),og(),Sl(916,"p"),Wl(917,"span",43),Sl(918,"code"),eN(919,"color-01"),og()(),Sl(920,"p"),Wl(921,"span",44),Sl(922,"code"),eN(923,"color-02"),og()(),Sl(924,"p"),Wl(925,"span",45),Sl(926,"code"),eN(927,"color-03"),og()(),Sl(928,"p"),Wl(929,"span",46),Sl(930,"code"),eN(931,"color-04"),og()(),Sl(932,"p"),Wl(933,"span",47),Sl(934,"code"),eN(935,"color-05"),og()(),Sl(936,"p"),Wl(937,"span",48),Sl(938,"code"),eN(939,"color-06"),og()(),Sl(940,"p"),Wl(941,"span",49),Sl(942,"code"),eN(943,"color-07"),og()(),Sl(944,"p"),Wl(945,"span",50),Sl(946,"code"),eN(947,"color-08"),og()(),Sl(948,"p"),Wl(949,"span",51),Sl(950,"code"),eN(951,"color-09"),og()(),Sl(952,"p"),Wl(953,"span",52),Sl(954,"code"),eN(955,"color-10"),og()(),Sl(956,"p"),Wl(957,"span",53),Sl(958,"code"),eN(959,"color-11"),og()(),Sl(960,"p"),Wl(961,"span",54),Sl(962,"code"),eN(963,"color-12"),og()()()(),Sl(964,"tr",15)(965,"td",16)(966,"div",17)(967,"span",18),eN(968," value"),Wl(969,"br"),og()()(),Sl(970,"td",19)(971,"code",55),eN(972,"number"),og()(),Sl(973,"td",22)(974,"p"),eN(975,"N\xFAmero exibido no "),Sl(976,"em"),eN(977,"badge"),og(),eN(978,", caso o mesmo seja maior que "),Sl(979,"strong"),eN(980,"9"),og(),eN(981," o mesmo exibe "),Sl(982,"strong"),eN(983,"9+"),og(),eN(984,"."),og()()()(),Sl(985,"h4",41)(986,"code",5),eN(987,"PoMenuItemFiltered"),og()(),Sl(988,"div",2)(989,"p"),eN(990,"Interface do objeto que deve conter na cole\xE7\xE3o de itens filtrados no componente "),Sl(991,"code"),eN(992,"po-menu"),og(),eN(993,"."),og()(),Sl(994,"h4",11),eN(995,"Propriedades"),og(),Sl(996,"table",12)(997,"tr",13)(998,"th",14),eN(999,"Nome"),og(),Sl(1e3,"th",14),eN(1001,"Tipo"),og(),Sl(1002,"th",14),eN(1003,"Descri\xE7\xE3o"),og()(),Sl(1004,"tr",15)(1005,"td",16)(1006,"div",17)(1007,"span",18),eN(1008," action"),Wl(1009,"br"),og()()(),Sl(1010,"td",19)(1011,"code",56),eN(1012,"() => void"),og()(),Sl(1013,"td",22)(1014,"p"),eN(1015,"A\xE7\xE3o a ser executada quando o item de menu for clicado."),og()()(),Sl(1016,"tr",15)(1017,"td",16)(1018,"div",17)(1019,"span",18),eN(1020," label"),Wl(1021,"br"),og()()(),Sl(1022,"td",19)(1023,"code",26),eN(1024,"string"),og()(),Sl(1025,"td",22)(1026,"p"),eN(1027,"Texto do item de menu."),og()()(),Sl(1028,"tr",15)(1029,"td",16)(1030,"div",17)(1031,"span",18),eN(1032," link"),Wl(1033,"br"),og()()(),Sl(1034,"td",19)(1035,"code",26),eN(1036,"string"),og()(),Sl(1037,"td",22)(1038,"p"),eN(1039,"Link* para redirecionamento no clique do item do menu, podendo ser um "),Sl(1040,"em"),eN(1041,"link"),og(),eN(1042," interno ou externo."),og()()()(),Sl(1043,"h4",41)(1044,"code",5),eN(1045,"PoMenuItem"),og()(),Sl(1046,"div",2)(1047,"p"),eN(1048,"Interface para os itens de menu do componente po-menu."),og()(),Sl(1049,"h4",11),eN(1050,"Propriedades"),og(),Sl(1051,"table",12)(1052,"tr",13)(1053,"th",14),eN(1054,"Nome"),og(),Sl(1055,"th",14),eN(1056,"Tipo"),og(),Sl(1057,"th",14),eN(1058,"Descri\xE7\xE3o"),og()(),Sl(1059,"tr",15)(1060,"td",16)(1061,"div",17)(1062,"span",18),eN(1063," action"),Wl(1064,"br"),og()()(),Sl(1065,"td",19)(1066,"code",57),eN(1067,"Function"),og()(),Sl(1068,"td",22)(1069,"em")(1070,"strong"),eN(1071,"(opcional)"),og()(),Sl(1072,"p"),eN(1073,"A\xE7\xE3o personalizada para clique do item de menu."),og()()(),Sl(1074,"tr",15)(1075,"td",16)(1076,"div",17)(1077,"span",18),eN(1078," badge"),Wl(1079,"br"),og()()(),Sl(1080,"td",19)(1081,"code",58),eN(1082,"PoMenuItemBadge"),og()(),Sl(1083,"td",22)(1084,"em")(1085,"strong"),eN(1086,"(opcional)"),og()(),Sl(1087,"p"),eN(1088,"Badge do item de menu."),og(),Sl(1089,"p"),eN(1090,"Ao adicion\xE1-lo em um subitem (filho) todos os itens ascendentes (pai) ser\xE3o marcados com um ponto vermelho."),og(),Sl(1091,"blockquote")(1092,"p"),eN(1093,"O "),Sl(1094,"code"),eN(1095,"po-badge"),og(),eN(1096," s\xF3 ser\xE1 exibido caso o item do menu n\xE3o possua "),Sl(1097,"code"),eN(1098,"subItems"),og(),eN(1099," e seu valor seja maior ou igual a 0."),og()()()(),Sl(1100,"tr",15)(1101,"td",16)(1102,"div",17)(1103,"span",18),eN(1104," icon"),Wl(1105,"br"),og()()(),Sl(1106,"td",19)(1107,"code",26),eN(1108,"string "),og(),Sl(1109,"code",59),eN(1110," TemplateRef<void>"),og()(),Sl(1111,"td",22)(1112,"em")(1113,"strong"),eN(1114,"(opcional)"),og()(),Sl(1115,"p"),eN(1116,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),Sl(1117,"a",60),eN(1118,"Biblioteca de \xEDcones"),og(),eN(1119,". conforme exemplo abaixo:"),og(),Sl(1120,"pre")(1121,"code"),eN(1122,`<po-menu
 [p-menus]="[{ link: '/', label: 'PO ICON', icon: 'an an-newspaper' }]">
</po-menu>
`),og()(),Sl(1123,"p"),eN(1124,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca Font Awesome, da seguinte forma:"),og(),Sl(1125,"pre")(1126,"code"),eN(1127,`<po-menu
 [p-menus]="[{ link: '/', label: 'FA ICON', icon: 'fa fa-podcast' }]">
</po-menu>
`),og()(),Sl(1128,"p"),eN(1129,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),Sl(1130,"code"),eN(1131,"TemplateRef"),og(),eN(1132,`, conforme exemplo abaixo:
component.html:`),og(),Sl(1133,"pre")(1134,"code"),eN(1135,`<ng-template #iconTemplate>
  <ion-icon name="heart"></ion-icon>
</ng-template>

<po-menu [p-menus]="myProperty"></po-menu>
`),og()(),Sl(1136,"p"),eN(1137,"component.ts:"),og(),Sl(1138,"pre")(1139,"code"),eN(1140,`@ViewChild('iconTemplate', { static: true } ) iconTemplate : TemplateRef<void>;

myProperty = [
 {
   link: '/',
   label: 'Icon',
   icon: this.iconTemplate
 }
];
`),og()(),Sl(1141,"blockquote")(1142,"p"),eN(1143,`S\xE3o exibidos apenas no primeiro n\xEDvel de menu e ser\xE3o vis\xEDveis apenas se todos os itens de primeiro n\xEDvel possu\xEDrem \xEDcones.
O menu colapsado tamb\xE9m aparecer\xE1 somente se todos os itens de primeiro n\xEDvel de menu possu\xEDrem \xEDcones e textos curtos.`),og()()()(),Sl(1144,"tr",15)(1145,"td",16)(1146,"div",17)(1147,"span",18),eN(1148," label"),Wl(1149,"br"),og()()(),Sl(1150,"td",19)(1151,"code",26),eN(1152,"string"),og()(),Sl(1153,"td",22)(1154,"p"),eN(1155,"Texto do item de menu."),og()()(),Sl(1156,"tr",15)(1157,"td",16)(1158,"div",17)(1159,"span",18),eN(1160," link"),Wl(1161,"br"),og()()(),Sl(1162,"td",19)(1163,"code",26),eN(1164,"string"),og()(),Sl(1165,"td",22)(1166,"em")(1167,"strong"),eN(1168,"(opcional)"),og()(),Sl(1169,"p"),eN(1170,"Link para redirecionamento no click do item do menu, podendo ser um link interno ou externo."),og()()(),Sl(1171,"tr",15)(1172,"td",16)(1173,"div",17)(1174,"span",18),eN(1175," shortLabel"),Wl(1176,"br"),og()()(),Sl(1177,"td",19)(1178,"code",26),eN(1179,"string"),og()(),Sl(1180,"td",22)(1181,"em")(1182,"strong"),eN(1183,"(opcional)"),og()(),Sl(1184,"p"),eN(1185,`Texto curto exibido atrav\xE9s de um tooltip para o item que aparece quando o menu estiver colapsado.
Se colapsado, aparecer\xE1 somente se todos os itens de primeiro n\xEDvel de menu que possu\xEDrem \xEDcones e textos curtos.`),og()()(),Sl(1186,"tr",15)(1187,"td",16)(1188,"div",17)(1189,"span",18),eN(1190," subItems"),Wl(1191,"br"),og()()(),Sl(1192,"td",19)(1193,"code",61),eN(1194,"Array<PoMenuItem>"),og()(),Sl(1195,"td",22)(1196,"em")(1197,"strong"),eN(1198,"(opcional)"),og()(),Sl(1199,"p"),eN(1200,"Lista de sub-items, criando novos n\xEDveis dentro do menu. O n\xFAmero m\xE1ximo de n\xEDveis do menu \xE9 igual a 4."),og()()()()());},dependencies:[Ka],encapsulation:2})}return a})();var Ie=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,r){this.route=m,this.router=r;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let r=m.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:"merge"}),this.activeTab=m;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(r){return new(r||a)(w(Xn),w(En))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Menu",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,i){r&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return i.changeTab("doc")}),Wl(3,"sample-po-menu-doc"),og(),Sl(4,"po-tab",3),ft("p-click",function(){return i.changeTab("web")}),Wl(5,"sample-po-menu-basic-view")(6,"sample-po-menu-labs-view")(7,"sample-po-menu-human-resources-view"),og()()()),r&2&&(nw("p-actions",i.actions),Lp(2),nw("p-active",i.activeTab==="doc"),Lp(2),nw("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[rNe,Bme,qme,ve,Me,ye,we],encapsulation:2})}return a})();var je=[{path:"",component:Ie}],_e=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=fe({type:a});static \u0275inj=ue({imports:[hL.forChild(je),hL]})}return a})();var _t=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=fe({type:a});static \u0275inj=ue({imports:[sr,_e]})}return a})();export{_t as DocPoMenuModule};