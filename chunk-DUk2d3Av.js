import {f as fe$1,u as ue$1,s as sr,a as uL,C,c3 as Xn,E as En,U as Un,dn as sNe,J as zl,T as nw,bs as uN,a7 as lN,an as DO,aH as Ka,b8 as qme,b9 as Yme,H as Il,q as Qx,R as og,a1 as ft,A as Lp,ar as Ux,au as dg,aX as G9,aF as $9,aY as z9,aG as mk,aZ as hk,b0 as Qt,b1 as mv,b4 as F3,c8 as Dde,cX as L3,c9 as Yhe,a3 as cNe,aB as Dx,aM as ww,aN as QA,bd as Ax,aO as Ew,aP as e0,dm as vNe,aD as Xy,aT as eN,aE as Qy}from'./main-FCMDZGSJ.js';var ce=()=>({label:"PO HTML Framework",link:"/",icon:"an an-house-line"}),ue=o=>[o],te=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-menu-panel-basic"]],standalone:false,decls:1,vars:4,consts:[[3,"p-menus"]],template:function(a,i){a&1&&zl(0,"po-menu-panel",0),a&2&&nw("p-menus",uN(2,ue,lN(1,ce)));},dependencies:[sNe],encapsulation:2,changeDetection:1})}return o})();var he=o=>({"docs-sample-code-tabs":o}),ae=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-menu-panel-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Menu Panel Basic"),og(),Il(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-menu-panel-basic/sample-po-menu-panel-basic.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-menu-panel [p-menus]="[{ label: 'PO HTML Framework', link: '/', icon: 'an an-house-line' }]"></po-menu-panel>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-menu-panel-basic/sample-po-menu-panel-basic.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-menu-panel-basic',
  templateUrl: './sample-po-menu-panel-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoMenuPanelBasicComponent {}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-menu-panel-basic"),og(),zl(23,"hr")),a&2&&(Lp(5),Ux("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,he,i.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,te],encapsulation:2})}return o})();var ie=(()=>{class o{menuItem={icon:void 0,label:void 0};menuItems;menuItemSelected;logo;iconsOptions=[{label:"an an-newspaper",value:"an an-newspaper"},{label:"an an-camera",value:"an an-camera"},{label:"an an-calendar-dots",value:"an an-calendar-dots"},{label:"an an-user",value:"an an-user"},{label:"an an-chat",value:"an an-chat"},{label:"an an-package",value:"an an-package"}];ngOnInit(){this.restore();}addMenuItem(p){let a=Object.assign({},p,{action:this.onMenuItemSelected.bind(this)});this.menuItems=[...this.menuItems,a];}restore(){this.menuItems=[],this.menuItemSelected=void 0,this.logo=void 0;}onMenuItemSelected(p){this.menuItemSelected=p.label;}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-menu-panel-labs"]],standalone:false,decls:18,vars:9,consts:[["fMenuPanel","ngForm"],[1,"po-wrapper-menu-panel"],[3,"p-menus","p-logo"],["p-title","PO Menu Panel"],[1,"po-row"],["p-label","Menu Item Selected",3,"p-value"],["name","logo","p-label","Logo","p-help","Exemplo: https://po-ui.io/assets/po-logos/po_inverse.svg",1,"po-md-12",3,"ngModelChange","ngModel"],["name","label","p-label","Label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","link","p-label","External link","p-placeholder","http://",1,"po-md-6",3,"ngModelChange","ngModel"],["name","icon","p-label","Icon","p-required","",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["p-label","Add",1,"po-xl-2","po-md-4",3,"p-click","p-disabled"],["p-label","Sample Restore",1,"po-xl-3","po-md-5",3,"p-click"]],template:function(a,i){if(a&1){let c=Dx();Il(0,"div",1),zl(1,"po-menu-panel",2),Il(2,"po-page-default",3)(3,"div",4),zl(4,"po-info",5),og(),zl(5,"po-divider"),Il(6,"div",4)(7,"po-input",6),ww("ngModelChange",function(r){return Xy(c),eN(i.logo,r)||(i.logo=r),Qy(r)}),og(),QA(),og(),Il(8,"form",null,0)(10,"div",4)(11,"po-input",7),ww("ngModelChange",function(r){return Xy(c),eN(i.menuItem.label,r)||(i.menuItem.label=r),Qy(r)}),og(),QA(),Il(12,"po-url",8),ww("ngModelChange",function(r){return Xy(c),eN(i.menuItem.link,r)||(i.menuItem.link=r),Qy(r)}),og(),QA(),og(),Il(13,"div",4)(14,"po-radio-group",9),ww("ngModelChange",function(r){return Xy(c),eN(i.menuItem.icon,r)||(i.menuItem.icon=r),Qy(r)}),og(),QA(),og(),Il(15,"div",4)(16,"po-button",10),ft("p-click",function(){Xy(c);let r=Ax(9);return i.addMenuItem(i.menuItem),Qy(r.reset())}),og(),Il(17,"po-button",11),ft("p-click",function(){Xy(c);let r=Ax(9);return i.restore(),Qy(r.reset())}),og()()()()();}if(a&2){let c=Ax(9);Lp(),nw("p-menus",i.menuItems)("p-logo",i.logo),Lp(3),nw("p-value",i.menuItemSelected),Lp(3),Ew("ngModel",i.logo),e0(),Lp(4),Ew("ngModel",i.menuItem.label),e0(),Lp(),Ew("ngModel",i.menuItem.link),e0(),Lp(2),Ew("ngModel",i.menuItem.icon),nw("p-options",i.iconsOptions),e0(),Lp(2),nw("p-disabled",c.invalid);}},dependencies:[G9,$9,z9,mk,hk,Qt,mv,F3,Dde,L3,Yhe,sNe,cNe],encapsulation:2,changeDetection:1})}return o})();var fe=o=>({"docs-sample-code-tabs":o}),le=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-menu-panel-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Menu Panel Labs"),og(),Il(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-menu-panel-labs/sample-po-menu-panel-labs.component.html"),og(),Il(13,"pre",7),Qx(14,`<div class="po-wrapper-menu-panel">
  <po-menu-panel [p-menus]="menuItems" [p-logo]="logo"> </po-menu-panel>

  <po-page-default p-title="PO Menu Panel">
    <div class="po-row">
      <po-info p-label="Menu Item Selected" [p-value]="menuItemSelected"> </po-info>
    </div>

    <po-divider />

    <div class="po-row">
      <po-input
        class="po-md-12"
        name="logo"
        [(ngModel)]="logo"
        p-label="Logo"
        p-help="Exemplo: https://po-ui.io/assets/po-logos/po_inverse.svg"
      >
      </po-input>
    </div>

    <form #fMenuPanel="ngForm">
      <div class="po-row">
        <po-input class="po-md-6" name="label" [(ngModel)]="menuItem.label" p-label="Label" p-required> </po-input>

        <po-url class="po-md-6" name="link" [(ngModel)]="menuItem.link" p-label="External link" p-placeholder="http://">
        </po-url>
      </div>

      <div class="po-row">
        <po-radio-group
          class="po-lg-12"
          name="icon"
          [(ngModel)]="menuItem.icon"
          p-label="Icon"
          p-required
          [p-options]="iconsOptions"
        >
        </po-radio-group>
      </div>

      <div class="po-row">
        <po-button
          class="po-xl-2 po-md-4"
          [p-disabled]="fMenuPanel.invalid"
          p-label="Add"
          (p-click)="addMenuItem(menuItem); fMenuPanel.reset()"
        >
        </po-button>

        <po-button class="po-xl-3 po-md-5" p-label="Sample Restore" (p-click)="restore(); fMenuPanel.reset()">
        </po-button>
      </div>
    </form>
  </po-page-default>
</div>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-menu-panel-labs/sample-po-menu-panel-labs.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { PoMenuPanelItem, PoRadioGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-menu-panel-labs',
  templateUrl: './sample-po-menu-panel-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoMenuPanelLabsComponent implements OnInit {
  menuItem: PoMenuPanelItem = { icon: undefined, label: undefined };
  menuItems: Array<PoMenuPanelItem>;
  menuItemSelected: string;
  logo: string;

  public readonly iconsOptions: Array<PoRadioGroupOption> = [
    { label: 'an an-newspaper', value: 'an an-newspaper' },
    { label: 'an an-camera', value: 'an an-camera' },
    { label: 'an an-calendar-dots', value: 'an an-calendar-dots' },
    { label: 'an an-user', value: 'an an-user' },
    { label: 'an an-chat', value: 'an an-chat' },
    { label: 'an an-package', value: 'an an-package' }
  ];

  ngOnInit(): void {
    this.restore();
  }

  addMenuItem(menuItem: PoMenuPanelItem) {
    const newMenuItem = Object.assign({}, menuItem, { action: this.onMenuItemSelected.bind(this) });

    this.menuItems = [...this.menuItems, newMenuItem];
  }

  restore() {
    this.menuItems = [];
    this.menuItemSelected = undefined;
    this.logo = undefined;
  }

  private onMenuItemSelected(menu: PoMenuPanelItem) {
    this.menuItemSelected = menu.label;
  }
}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-menu-panel-labs"),og(),zl(23,"hr")),a&2&&(Lp(5),Ux("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,fe,i.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,ie],encapsulation:2})}return o})();var pe=(()=>{class o{title="Customers";menuItems=[{label:"Home",action:this.changeTitle.bind(this),icon:"an an-house-line"},{label:"Customers",action:this.changeTitle.bind(this),icon:"an an-user"},{label:"New Sale",action:this.changeTitle.bind(this),icon:"an an-money"},{label:"Reports",action:this.changeTitle.bind(this),icon:"an an-newspaper"},{label:"Settings",action:this.changeTitle.bind(this),icon:"an an-gear"}];changeTitle(p){this.title=p.label;}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-menu-panel-customer"]],standalone:false,decls:4,vars:2,consts:[[1,"po-wrapper-menu-panel"],["p-title","PO - Customers"],["p-logo","https://po-ui.io/assets/po-logos/po_color_bg.svg",3,"p-menus"],[3,"p-title"]],template:function(a,i){a&1&&(Il(0,"div",0),zl(1,"po-toolbar",1)(2,"po-menu-panel",2)(3,"po-page-default",3),og()),a&2&&(Lp(2),nw("p-menus",i.menuItems),Lp(),nw("p-title",i.title));},dependencies:[sNe,cNe,vNe],encapsulation:2,changeDetection:1})}return o})();var Me=o=>({"docs-sample-code-tabs":o}),me=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-menu-panel-customer-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Menu Panel - Customers"),og(),Il(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-menu-panel-customer/sample-po-menu-panel-customer.component.html"),og(),Il(13,"pre",7),Qx(14,`<div class="po-wrapper-menu-panel">
  <po-toolbar p-title="PO - Customers"></po-toolbar>

  <po-menu-panel [p-menus]="menuItems" p-logo="https://po-ui.io/assets/po-logos/po_color_bg.svg"></po-menu-panel>

  <po-page-default [p-title]="title"></po-page-default>
</div>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-menu-panel-customer/sample-po-menu-panel-customer.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

import { PoMenuPanelItem } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-menu-panel-customer',
  templateUrl: './sample-po-menu-panel-customer.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoMenuPanelCustomerComponent {
  title: string = 'Customers';

  public readonly menuItems: Array<PoMenuPanelItem> = [
    { label: 'Home', action: this.changeTitle.bind(this), icon: 'an an-house-line' },
    { label: 'Customers', action: this.changeTitle.bind(this), icon: 'an an-user' },
    { label: 'New Sale', action: this.changeTitle.bind(this), icon: 'an an-money' },
    { label: 'Reports', action: this.changeTitle.bind(this), icon: 'an an-newspaper' },
    { label: 'Settings', action: this.changeTitle.bind(this), icon: 'an an-gear' }
  ];

  changeTitle(menu: PoMenuPanelItem) {
    this.title = menu.label;
  }
}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-menu-panel-customer"),og(),zl(23,"hr")),a&2&&(Lp(5),Ux("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,Me,i.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,pe],encapsulation:2})}return o})();var se=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-menu-panel-doc"]],standalone:false,decls:195,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","PoMenuPanelItem[]"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["href","https://po-ui.io/icons"]],template:function(a,i){a&1&&(Il(0,"div",0)(1,"p",1)(2,"code"),Qx(3,"import { PoMenuPanelModule } from '@po-ui/ng-components';"),og()(),Il(4,"div",2)(5,"p"),Qx(6,"M\xF3dulo do componente po-menu-panel."),og()(),Il(7,"h3",3),Qx(8,"Componente"),og(),Il(9,"h4",4)(10,"code",5),Qx(11,"PoMenuPanelComponent"),og()(),Il(12,"div",2)(13,"p"),Qx(14,`Este \xE9 um componente de menu lateral composto apenas por \xEDcones e com um n\xEDvel, utilizado para navega\xE7\xE3o
em p\xE1ginas internas, externas da aplica\xE7\xE3o ou aciona uma a\xE7\xE3o.`),og(),Il(15,"p"),Qx(16,"O componente "),Il(17,"code"),Qx(18,"po-menu-panel"),og(),Qx(19," recebe uma lista de objetos do tipo "),Il(20,"code"),Qx(21,"MenuPanelItem"),og(),Qx(22,` com as informa\xE7\xF5es dos
itens de menu como textos, links para redirecionamento, a\xE7\xF5es e \xEDcones. Para o menu funcionar corretamente \xE9 necess\xE1rio importar o `),Il(23,"code"),Qx(24,"RouterModule"),og(),Qx(25," e "),Il(26,"code"),Qx(27,"Routes"),og(),Qx(28," do m\xF3dulo principal de sua aplica\xE7\xE3o:"),og(),Il(29,"pre")(30,"code"),Qx(31,`import { RouterModule, Routes } from '@angular/router';

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
`),og()(),Il(32,"p"),Qx(33,"Al\xE9m disso \xE9 necess\xE1rio criar um m\xF3dulo configurando as rotas da aplica\xE7\xE3o."),og(),Il(34,"pre")(35,"code"),Qx(36,`import { NgModule } from '@angular/core';

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
`),og()()(),Il(37,"div",6)(38,"h4",7),Qx(39,"Seletor"),og(),Il(40,"pre",8),Qx(41,`<po-menu-panel
    p-logo="string"
    p-logo-alt="string"
    p-menus="PoMenuPanelItem[]" >
</po-menu-panel>
`),og()(),Il(42,"h4",9),Qx(43,"Propriedades"),og(),Il(44,"table",10)(45,"tr",11)(46,"th",12),Qx(47,"Nome"),og(),Il(48,"th",12),Qx(49,"Tipo"),og(),Il(50,"th",12),Qx(51,"Padr\xE3o"),og(),Il(52,"th",12),Qx(53,"Descri\xE7\xE3o"),og()(),Il(54,"tr",13)(55,"td",14)(56,"div",15)(57,"span",16),Qx(58," p-logo"),zl(59,"br"),og()()(),Il(60,"td",17)(61,"code",18),Qx(62,"string"),og()(),Il(63,"td",19),Qx(64,"-"),og(),Il(65,"td",20)(66,"em")(67,"strong"),Qx(68,"(opcional)"),og()(),Il(69,"p"),Qx(70,"Caminho para a logomarca localizada na parte superior do menu."),og(),Il(71,"blockquote")(72,"p")(73,"strong"),Qx(74,"Importante"),og(),Qx(75,`
Caso seja indefinida ser\xE1 aplicada a imagem default do PO UI.`),og()()()(),Il(76,"tr",13)(77,"td",14)(78,"div",15)(79,"span",16),Qx(80," p-logo-alt"),zl(81,"br"),og()()(),Il(82,"td",17)(83,"code",18),Qx(84,"string"),og()(),Il(85,"td",19)(86,"p")(87,"code"),Qx(88,"Logomarca in\xEDcio"),og()()(),Il(89,"td",20)(90,"em")(91,"strong"),Qx(92,"(opcional)"),og()(),Il(93,"p"),Qx(94,"Define o texto alternativo para a logomarca."),og(),Il(95,"blockquote")(96,"p")(97,"strong"),Qx(98,"Importante"),og(),Qx(99,`
Caso esta propriedade n\xE3o seja definida o texto padr\xE3o ser\xE1 "Logomarca in\xEDcio".`),og()()()(),Il(100,"tr",13)(101,"td",14)(102,"div",15)(103,"span",16),Qx(104," p-menus"),zl(105,"br"),og()()(),Il(106,"td",17)(107,"code",21),Qx(108,"PoMenuPanelItem[]"),og()(),Il(109,"td",19),Qx(110,"-"),og(),Il(111,"td",20)(112,"p"),Qx(113,"Lista dos itens do "),Il(114,"code"),Qx(115,"po-menu-panel"),og(),Qx(116,". Se o valor estiver indefinido ou inv\xE1lido, ser\xE1 inicializado como um array vazio."),og()()()(),Il(117,"h3"),Qx(118,"Interfaces"),og(),Il(119,"h4",22)(120,"code",5),Qx(121,"PoMenuPanelItem"),og()(),Il(122,"div",2)(123,"p"),Qx(124,"Interface para os itens de menu do componente "),Il(125,"code"),Qx(126,"po-menu-panel"),og(),Qx(127,"."),og()(),Il(128,"h4",9),Qx(129,"Propriedades"),og(),Il(130,"table",10)(131,"tr",11)(132,"th",12),Qx(133,"Nome"),og(),Il(134,"th",12),Qx(135,"Tipo"),og(),Il(136,"th",12),Qx(137,"Descri\xE7\xE3o"),og()(),Il(138,"tr",13)(139,"td",14)(140,"div",15)(141,"span",16),Qx(142," action"),zl(143,"br"),og()()(),Il(144,"td",17)(145,"code",23),Qx(146,"Function"),og()(),Il(147,"td",20)(148,"em")(149,"strong"),Qx(150,"(opcional)"),og()(),Il(151,"p"),Qx(152,"A\xE7\xE3o personalizada para clique do item de menu."),og()()(),Il(153,"tr",13)(154,"td",14)(155,"div",15)(156,"span",16),Qx(157," icon"),zl(158,"br"),og()()(),Il(159,"td",17)(160,"code",18),Qx(161,"string"),og()(),Il(162,"td",20)(163,"p"),Qx(164,"\xCDcone para o item de menu, os "),Il(165,"a",24),Qx(166,"\xEDcones aceitos"),og(),Qx(167," s\xE3o os definidos no guia de estilo da PO."),og()()(),Il(168,"tr",13)(169,"td",14)(170,"div",15)(171,"span",16),Qx(172," label"),zl(173,"br"),og()()(),Il(174,"td",17)(175,"code",18),Qx(176,"string"),og()(),Il(177,"td",20)(178,"p"),Qx(179,"Texto do item de menu."),og()()(),Il(180,"tr",13)(181,"td",14)(182,"div",15)(183,"span",16),Qx(184," link"),zl(185,"br"),og()()(),Il(186,"td",17)(187,"code",18),Qx(188,"string"),og()(),Il(189,"td",20)(190,"em")(191,"strong"),Qx(192,"(opcional)"),og()(),Il(193,"p"),Qx(194,"Link para redirecionamento no click do item do menu, podendo ser um link interno ou externo."),og()()()()());},dependencies:[Ka],encapsulation:2})}return o})();var re=(()=>{class o{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(p,a){this.route=p,this.router=a;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let a=p.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:"merge"}),this.activeTab=p;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(a){return new(a||o)(C(Xn),C(En))};static \u0275cmp=Un({type:o,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Menu Panel",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,i){a&1&&(Il(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return i.changeTab("doc")}),zl(3,"sample-po-menu-panel-doc"),og(),Il(4,"po-tab",3),ft("p-click",function(){return i.changeTab("web")}),zl(5,"sample-po-menu-panel-basic-view")(6,"sample-po-menu-panel-labs-view")(7,"sample-po-menu-panel-customer-view"),og()()()),a&2&&(nw("p-actions",i.actions),Lp(2),nw("p-active",i.activeTab==="doc"),Lp(2),nw("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[cNe,qme,Yme,ae,le,me,se],encapsulation:2})}return o})();var we=[{path:"",component:re}],de=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=fe$1({type:o});static \u0275inj=ue$1({imports:[uL.forChild(we),uL]})}return o})();var Qe=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=fe$1({type:o});static \u0275inj=ue$1({imports:[sr,de]})}return o})();export{Qe as DocPoMenuPanelModule};