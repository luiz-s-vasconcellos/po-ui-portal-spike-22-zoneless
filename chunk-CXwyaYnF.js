import {f as fe$1,u as ue,s as sr,h as hL,w,c3 as Xn,E as En,U as Un,aW as Yp,r as r$1,g as s,aV as Ur,ae as Be$1,dc as gNe,H as Wl,Q as nw,an as CO,aH as Ka,b8 as Bme,b9 as qme,F as Sl,z as eN,J as og,a1 as ft$1,L as Lp,ar as $x,au as dg,bs as fN,aX as Z9,aF as G9,aY as q9,aG as _k,aZ as mk,b0 as Qt,b4 as L3,cp as Rhe,c8 as wde,bH as M3,aB as wx,aM as ww,aN as e0,aO as Ew,aP as n0,dd as gN,a7 as dN,bM as hN,a2 as JE,av as ql,aw as lo,ax as uo,a3 as rNe,aQ as gx,aA as Mx,aS as mx,aD as Ky,aT as nN,aE as Xy,bR as bN}from'./main-WP3NAV7C.js';var he=(()=>{class a{poNotification;headerBrand={title:"Minha empresa",logo:"../../../assets/po-logos/po_color.png",action:this.myAction.bind(this,"Logo a\xE7\xE3o")};constructor(l){this.poNotification=l;}myAction(l){this.poNotification.success(`Action clicked: ${l}`);}static \u0275fac=function(r){return new(r||a)(w(Yp))};static \u0275cmp=Un({type:a,selectors:[["sample-po-header-basic"]],standalone:false,decls:1,vars:2,consts:[[3,"p-brand","p-side-menu-only-action"]],template:function(r,i){r&1&&Wl(0,"po-header",0),r&2&&nw("p-brand",i.headerBrand)("p-side-menu-only-action",true);},dependencies:[gNe],styles:["po-header[_ngcontent-%COMP%]{--nav-position: flex}"],changeDetection:1})}return a})();var Pe=a=>({"docs-sample-code-tabs":a}),ge=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-header-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Header Basic"),og(),Sl(4,"a",2),ft$1("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-header-basic/sample-po-header-basic.component.html"),og(),Sl(13,"pre",7),eN(14,`<po-header [p-brand]="headerBrand" [p-side-menu-only-action]="true"></po-header>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-header-basic/sample-po-header-basic.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

import { PoHeaderBrand, PoNotificationService } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-header-basic',
  templateUrl: './sample-po-header-basic.component.html',
  standalone: false,
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: \`
    /* alterado apenas para demonstra\xE7\xE3o no portal*/
    po-header {
      --nav-position: flex;
    }
  \`
})
export class SamplePoHeaderBasicComponent {
  headerBrand: PoHeaderBrand = {
    title: 'Minha empresa',
    logo: '../../../assets/po-logos/po_color.png',
    action: this.myAction.bind(this, 'Logo a\xE7\xE3o')
  };

  constructor(private poNotification: PoNotificationService) {}

  myAction(action: string): any {
    this.poNotification.success(\`Action clicked: \${action}\`);
  }
}
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-header-basic"),og(),Wl(23,"hr")),r&2&&(Lp(5),$x("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,Pe,i.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,he],encapsulation:2})}return a})();var _e=()=>({label:"Positive",value:"positive"}),He=()=>({label:"Negative",value:"negative"}),Me=()=>({label:"Warning",value:"warning"}),Be=()=>({label:"Disabled",value:"disabled"}),Le=(a,A,l,r)=>[a,A,l,r],ke=()=>({label:"Medium",value:"medium"}),De=()=>({label:"Small",value:"small"}),Ne=(a,A)=>[a,A],be=(()=>{class a{poNotification;headerBrandTitle="";headerBrandLogo="";headerBrandSmallLogo="";headerBrand={};menuActionLabel="";menuActionEvent="";menuActions=[];actionNewTool={tooltip:"",icon:"",badge:null,action:null,label:""};actionNewToolEvent=false;actionTools=[];newActionUser={avatar:"",customerBrand:"",status:"positive"};actionUser={avatar:"",customerBrand:"",status:"positive"};size="medium";constructor(l){this.poNotification=l;}addBrand(){this.headerBrand={logo:this.headerBrandLogo,title:this.headerBrandTitle,smallLogo:this.headerBrandSmallLogo},this.headerBrandTitle="",this.headerBrandLogo="",this.headerBrandSmallLogo="";}addAction(){this.menuActions=[...this.menuActions,{label:this.menuActionLabel,action:this.menuActionEvent?this.showAction.bind(this,this.menuActionEvent):null}],this.menuActionLabel="",this.menuActionEvent="";}addTool(l){let r=l;l.label=`${this.actionTools.length}`,this.actionNewToolEvent&&(r.action=this.showAction.bind(this,"Tool Actions!")),this.actionTools=[...this.actionTools,l],this.actionNewTool={};}addUser(){this.actionUser=r$1({},this.newActionUser),this.newActionUser={avatar:"",customerBrand:"",status:"positive"};}showAction(l){this.poNotification.success(`Action clicked: ${l}`);}reset(){this.headerBrand={},this.menuActions=[],this.actionNewTool={},this.actionTools=[],this.actionUser={avatar:"",customerBrand:"",status:"positive"},this.newActionUser={avatar:"",customerBrand:"",status:"positive"},this.size="medium";}static \u0275fac=function(r){return new(r||a)(w(Yp))};static \u0275cmp=Un({type:a,selectors:[["sample-po-header-labs"]],standalone:false,decls:40,vars:38,consts:[["formAction","ngForm"],[3,"p-side-menu-only-action","p-brand","p-menu-items","p-actions-tools","p-header-user","p-size"],[1,"po-row","po-mt-4"],["p-clean","","p-label","T\xEDtulo da marca",1,"po-lg-6","po-md-6",3,"ngModelChange","ngModel"],["p-clean","","p-label","Logo da marca",1,"po-lg-6","po-md-6",3,"ngModelChange","ngModel"],["p-clean","","p-label","Logo da marca - small",1,"po-lg-6","po-md-6",3,"ngModelChange","ngModel"],[1,"po-row","po-mt-1"],["p-label","Add Brand",1,"po-lg-6","po-md-6",3,"p-click"],[1,"po-row","po-mt-2"],[1,"po-lg-12","po-mb-2"],["p-clean","","p-label","Action",1,"po-lg-6","po-md-6",3,"ngModelChange","ngModel"],["p-clean","","p-label","Label",1,"po-lg-6","po-md-6",3,"ngModelChange","ngModel"],["p-label","Add Action",1,"po-md-3",3,"p-click","p-disabled"],["name","icon","p-clean","","p-label","Icon",1,"po-lg-6","po-md-6",3,"ngModelChange","ngModel"],["name","tooltip","p-clean","","p-label","Tooltip",1,"po-lg-6","po-md-6",3,"ngModelChange","ngModel"],["name","badge","p-clean","","p-label","Badge",1,"po-lg-6","po-md-6",3,"ngModelChange","ngModel"],["name","switch","name","action","p-label","Action",1,"po-lg-6","po-md-6",3,"ngModelChange","ngModel"],["p-label","Add settings",1,"po-md-3",3,"p-click","p-disabled"],["name","brand","p-clean","","p-label","Logo Brand",1,"po-lg-6","po-md-6",3,"ngModelChange","ngModel"],["name","avatar","p-clean","","p-label","Avatar",1,"po-lg-6","po-md-6",3,"ngModelChange","ngModel"],["name","radioGroupBasic","p-label","Status",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12","po-lg-12",3,"ngModelChange","ngModel","p-options"],["p-label","Reset",1,"po-md-3",3,"p-click"]],template:function(r,i){if(r&1){let p=wx();Wl(0,"po-header",1),Sl(1,"div",2)(2,"po-input",3),ww("ngModelChange",function(d){return Ky(p),nN(i.headerBrandTitle,d)||(i.headerBrandTitle=d),Xy(d)}),og(),e0(),Sl(3,"po-input",4),ww("ngModelChange",function(d){return Ky(p),nN(i.headerBrandLogo,d)||(i.headerBrandLogo=d),Xy(d)}),og(),e0(),Sl(4,"po-input",5),ww("ngModelChange",function(d){return Ky(p),nN(i.headerBrandSmallLogo,d)||(i.headerBrandSmallLogo=d),Xy(d)}),og(),e0(),Sl(5,"div",6)(6,"po-button",7),ft$1("p-click",function(){return i.addBrand()}),og()()(),Wl(7,"hr"),Sl(8,"div",8)(9,"h3",9),eN(10,"A\xE7\xF5es dos itens de menu"),og(),Sl(11,"po-input",10),ww("ngModelChange",function(d){return Ky(p),nN(i.menuActionEvent,d)||(i.menuActionEvent=d),Xy(d)}),og(),e0(),Sl(12,"po-input",11),ww("ngModelChange",function(d){return Ky(p),nN(i.menuActionLabel,d)||(i.menuActionLabel=d),Xy(d)}),og(),e0(),Sl(13,"po-button",12),ft$1("p-click",function(){return i.addAction()}),og()(),Wl(14,"hr"),Sl(15,"h3",9),eN(16,"A\xE7\xF5es das configura\xE7\xF5es"),og(),Sl(17,"form",8,0)(19,"po-input",13),ww("ngModelChange",function(d){return Ky(p),nN(i.actionNewTool.icon,d)||(i.actionNewTool.icon=d),Xy(d)}),og(),e0(),Sl(20,"po-input",14),ww("ngModelChange",function(d){return Ky(p),nN(i.actionNewTool.tooltip,d)||(i.actionNewTool.tooltip=d),Xy(d)}),og(),e0(),Sl(21,"po-number",15),ww("ngModelChange",function(d){return Ky(p),nN(i.actionNewTool.badge,d)||(i.actionNewTool.badge=d),Xy(d)}),og(),e0(),Sl(22,"po-switch",16),ww("ngModelChange",function(d){return Ky(p),nN(i.actionNewToolEvent,d)||(i.actionNewToolEvent=d),Xy(d)}),og(),e0(),Sl(23,"po-button",17),ft$1("p-click",function(){return i.addTool(i.actionNewTool)}),og()(),Wl(24,"hr"),Sl(25,"h3",9),eN(26,"A\xE7\xF5es do Usu\xE1rio"),og(),Sl(27,"form",8,0)(29,"po-input",18),ww("ngModelChange",function(d){return Ky(p),nN(i.newActionUser.customerBrand,d)||(i.newActionUser.customerBrand=d),Xy(d)}),og(),e0(),Sl(30,"po-input",19),ww("ngModelChange",function(d){return Ky(p),nN(i.newActionUser.avatar,d)||(i.newActionUser.avatar=d),Xy(d)}),og(),e0(),Sl(31,"po-radio-group",20),ww("ngModelChange",function(d){return Ky(p),nN(i.newActionUser.status,d)||(i.newActionUser.status=d),Xy(d)}),og(),e0(),Sl(32,"po-button",17),ft$1("p-click",function(){return i.addUser()}),og(),Wl(33,"hr"),Sl(34,"h3",9),eN(35,"Varia\xE7\xF5es de tamanho"),og(),Sl(36,"div",8)(37,"po-radio-group",21),ww("ngModelChange",function(d){return Ky(p),nN(i.size,d)||(i.size=d),Xy(d)}),og(),e0(),og(),Wl(38,"hr"),Sl(39,"po-button",22),ft$1("p-click",function(){return i.reset()}),og()();}r&2&&(nw("p-side-menu-only-action",true)("p-brand",i.headerBrand)("p-menu-items",i.menuActions)("p-actions-tools",i.actionTools)("p-header-user",i.actionUser)("p-size",i.size),Lp(2),Ew("ngModel",i.headerBrandTitle),n0(),Lp(),Ew("ngModel",i.headerBrandLogo),n0(),Lp(),Ew("ngModel",i.headerBrandSmallLogo),n0(),Lp(7),Ew("ngModel",i.menuActionEvent),n0(),Lp(),Ew("ngModel",i.menuActionLabel),n0(),Lp(),nw("p-disabled",!i.menuActionLabel),Lp(6),Ew("ngModel",i.actionNewTool.icon),n0(),Lp(),Ew("ngModel",i.actionNewTool.tooltip),n0(),Lp(),Ew("ngModel",i.actionNewTool.badge),n0(),Lp(),Ew("ngModel",i.actionNewToolEvent),n0(),Lp(),nw("p-disabled",i.actionTools.length>2),Lp(6),Ew("ngModel",i.newActionUser.customerBrand),n0(),Lp(),Ew("ngModel",i.newActionUser.avatar),n0(),Lp(),Ew("ngModel",i.newActionUser.status),nw("p-options",gN(28,Le,dN(24,_e),dN(25,He),dN(26,Me),dN(27,Be))),n0(),Lp(),nw("p-disabled",!i.newActionUser.avatar||i.newActionUser.customerBrand),Lp(5),Ew("ngModel",i.size),nw("p-options",hN(35,Ne,dN(33,ke),dN(34,De))),n0());},dependencies:[Z9,G9,q9,_k,mk,Qt,L3,Rhe,wde,M3,gNe],styles:["po-header[_ngcontent-%COMP%]{--nav-position: flex}"],changeDetection:1})}return a})();var Fe=a=>({"docs-sample-code-tabs":a}),xe=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-header-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Header Labs"),og(),Sl(4,"a",2),ft$1("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-header-labs/sample-po-header-labs.component.html"),og(),Sl(13,"pre",7),eN(14,`<po-header
  [p-side-menu-only-action]="true"
  [p-brand]="headerBrand"
  [p-menu-items]="menuActions"
  [p-actions-tools]="actionTools"
  [p-header-user]="actionUser"
  [p-size]="size"
></po-header>

<div class="po-row po-mt-4">
  <po-input class="po-lg-6 po-md-6" [(ngModel)]="headerBrandTitle" p-clean p-label="T\xEDtulo da marca"> </po-input>
  <po-input class="po-lg-6 po-md-6" [(ngModel)]="headerBrandLogo" p-clean p-label="Logo da marca"> </po-input>
  <po-input class="po-lg-6 po-md-6" [(ngModel)]="headerBrandSmallLogo" p-clean p-label="Logo da marca - small">
  </po-input>
  <div class="po-row po-mt-1">
    <po-button class="po-lg-6 po-md-6" p-label="Add Brand" (p-click)="addBrand()"></po-button>
  </div>
</div>
<hr />
<div class="po-row po-mt-2">
  <h3 class="po-lg-12 po-mb-2">A\xE7\xF5es dos itens de menu</h3>
  <po-input class="po-lg-6 po-md-6" [(ngModel)]="menuActionEvent" p-clean p-label="Action"> </po-input>
  <po-input class="po-lg-6 po-md-6" [(ngModel)]="menuActionLabel" p-clean p-label="Label"> </po-input>
  <po-button [p-disabled]="!menuActionLabel" class="po-md-3" p-label="Add Action" (p-click)="addAction()"></po-button>
</div>
<hr />
<h3 class="po-lg-12 po-mb-2">A\xE7\xF5es das configura\xE7\xF5es</h3>
<form #formAction="ngForm" class="po-row po-mt-2">
  <po-input class="po-lg-6 po-md-6" name="icon" [(ngModel)]="actionNewTool.icon" p-clean p-label="Icon"> </po-input>
  <po-input class="po-lg-6 po-md-6" name="tooltip" [(ngModel)]="actionNewTool.tooltip" p-clean p-label="Tooltip">
  </po-input>
  <po-number class="po-lg-6 po-md-6" name="badge" [(ngModel)]="actionNewTool.badge" p-clean p-label="Badge">
  </po-number>
  <po-switch class="po-lg-6 po-md-6" name="switch" [(ngModel)]="actionNewToolEvent" name="action" p-label="Action">
  </po-switch>
  <po-button
    [p-disabled]="actionTools.length > 2"
    class="po-md-3"
    p-label="Add settings"
    (p-click)="addTool(actionNewTool)"
  ></po-button>
</form>
<hr />
<h3 class="po-lg-12 po-mb-2">A\xE7\xF5es do Usu\xE1rio</h3>
<form #formAction="ngForm" class="po-row po-mt-2">
  <po-input class="po-lg-6 po-md-6" name="brand" [(ngModel)]="newActionUser.customerBrand" p-clean p-label="Logo Brand">
  </po-input>
  <po-input class="po-lg-6 po-md-6" name="avatar" [(ngModel)]="newActionUser.avatar" p-clean p-label="Avatar">
  </po-input>

  <po-radio-group
    name="radioGroupBasic"
    class="po-lg-12"
    p-label="Status"
    [(ngModel)]="newActionUser.status"
    [p-options]="[
      { label: 'Positive', value: 'positive' },
      { label: 'Negative', value: 'negative' },
      { label: 'Warning', value: 'warning' },
      { label: 'Disabled', value: 'disabled' }
    ]"
  >
  </po-radio-group>
  <po-button
    [p-disabled]="!newActionUser.avatar || newActionUser.customerBrand"
    class="po-md-3"
    p-label="Add settings"
    (p-click)="addUser()"
  ></po-button>

  <hr />
  <h3 class="po-lg-12 po-mb-2">Varia\xE7\xF5es de tamanho</h3>
  <div class="po-row po-mt-2">
    <po-radio-group
      class="po-md-12 po-lg-12"
      name="size"
      [(ngModel)]="size"
      p-columns="4"
      p-label="Size"
      p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
      [p-options]="[
        { label: 'Medium', value: 'medium' },
        { label: 'Small', value: 'small' }
      ]"
    >
    </po-radio-group>
  </div>

  <hr />

  <po-button class="po-md-3" p-label="Reset" (p-click)="reset()"></po-button>
</form>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-header-labs/sample-po-header-labs.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

import {
  PoHeaderActions,
  PoHeaderActionTool,
  PoHeaderBrand,
  PoHeaderUser,
  PoNotificationService
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-header-labs',
  templateUrl: './sample-po-header-labs.component.html',
  standalone: false,
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: \`
    /* alterado apenas para demonstra\xE7\xE3o no portal*/
    po-header {
      --nav-position: flex;
    }
  \`
})
export class SamplePoHeaderLabsComponent {
  headerBrandTitle = '';
  headerBrandLogo = '';
  headerBrandSmallLogo = '';
  headerBrand: PoHeaderBrand = {};

  menuActionLabel = '';
  menuActionEvent = '';
  menuActions: Array<PoHeaderActions> = [];

  actionNewTool: PoHeaderActionTool = {
    tooltip: '',
    icon: '',
    badge: null,
    action: null,
    label: ''
  };
  actionNewToolEvent = false;
  actionTools: Array<PoHeaderActionTool> = [];

  newActionUser: any = {
    avatar: '',
    customerBrand: '',
    status: 'positive'
  };

  actionUser: PoHeaderUser = {
    avatar: '',
    customerBrand: '',
    status: 'positive'
  };

  size: string = 'medium';

  constructor(private poNotification: PoNotificationService) {}

  addBrand() {
    this.headerBrand = {
      logo: this.headerBrandLogo,
      title: this.headerBrandTitle,
      smallLogo: this.headerBrandSmallLogo
    };
    this.headerBrandTitle = '';
    this.headerBrandLogo = '';
    this.headerBrandSmallLogo = '';
  }

  addAction() {
    this.menuActions = [
      ...this.menuActions,
      {
        label: this.menuActionLabel,
        action: this.menuActionEvent ? this.showAction.bind(this, this.menuActionEvent) : null
      }
    ];
    this.menuActionLabel = '';
    this.menuActionEvent = '';
  }

  addTool(action: PoHeaderActionTool) {
    const newAction = action;
    action.label = \`\${this.actionTools.length}\`;
    if (this.actionNewToolEvent) {
      newAction.action = this.showAction.bind(this, 'Tool Actions!');
    }
    this.actionTools = [...this.actionTools, action];
    this.actionNewTool = {};
  }

  addUser() {
    this.actionUser = { ...this.newActionUser };
    this.newActionUser = {
      avatar: '',
      customerBrand: '',
      status: 'positive'
    };
  }

  private showAction(action: string): any {
    this.poNotification.success(\`Action clicked: \${action}\`);
  }

  reset() {
    this.headerBrand = {};
    this.menuActions = [];
    this.actionNewTool = {};
    this.actionTools = [];
    this.actionUser = {
      avatar: '',
      customerBrand: '',
      status: 'positive'
    };
    this.newActionUser = {
      avatar: '',
      customerBrand: '',
      status: 'positive'
    };
    this.size = 'medium';
  }
}
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-header-labs"),og(),Wl(23,"hr")),r&2&&(Lp(5),$x("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,Fe,i.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,be],encapsulation:2})}return a})();var Ue=["meuTemplate"],ze=(a,A)=>A.icon;function We(a,A){if(a&1&&Wl(0,"po-button",4),a&2){let l=A.$implicit;nw("p-icon",l.icon);}}function qe(a,A){if(a&1&&(Sl(0,"div",2)(1,"p"),eN(2,"Meus aplicativos"),og(),Wl(3,"br"),Sl(4,"div",3),gx(5,We,1,1,"po-button",4,ze),og()()),a&2){let l=Mx();Lp(5),mx(l.systemApps);}}var ve=(()=>{class a{poNotification;cd;meuTemplate;listItem=[{label:"A\xE7\xE3o 1",action:this.myAction.bind(this,"A\xE7\xE3o 1")},{label:"A\xE7\xE3o 2",action:this.myAction.bind(this,"A\xE7\xE3o 2")},{label:"A\xE7\xE3o 3",action:this.myAction.bind(this,"A\xE7\xE3o 3")}];headerBrand={title:"PO UI",logo:"../../../assets/po-logos/po_color.png",action:this.myAction.bind(this,"Logo a\xE7\xE3o")};menuItems=[{label:"Item 1",action:this.myAction.bind(this,"Item 1")},{label:"Item 2",action:this.myAction.bind(this,"Item 2")},{label:"Item 3",action:this.myAction.bind(this,"Item 3")}];actionTools=[{label:"Configura\xE7\xF5es",icon:"an an-gear-six",tooltip:"Configura\xE7\xF5es do sistema",action:this.myAction.bind(this,"Configura\xE7\xE3o")},{label:"Aplicativos",icon:"an an-dots-nine",tooltip:"Aplicativos do sistema",popover:{content:this.meuTemplate}},{label:"Notifica\xE7\xF5es",icon:"an an-chat-circle-dots",tooltip:"Notifica\xE7\xF5es do usu\xE1rio",badge:5,items:this.listItem}];headerUser={avatar:"../../../assets/graphics/avatar1.png",customerBrand:"../../../assets/po-logos/po_black.png",action:this.myAction.bind(this,"Meu Usu\xE1rio"),status:"positive"};systemApps=[{icon:"an an-reddit-logo",action:this.myAction.bind(this,"Aplicativo 1")},{icon:"an an-twitter-logo",action:this.myAction.bind(this,"Aplicativo 2")},{icon:"an an-twitch-logo",action:this.myAction.bind(this,"Aplicativo 3")},{icon:"an an-facebook-logo",action:this.myAction.bind(this,"Aplicativo 4")},{icon:"an an-meta-logo",action:this.myAction.bind(this,"Aplicativo 5")},{icon:"an an-amazon-logo",action:this.myAction.bind(this,"Aplicativo 6")}];constructor(l,r){this.poNotification=l,this.cd=r;}ngAfterViewInit(){this.actionTools=this.actionTools.map(l=>l.popover?s(r$1({},l),{popover:s(r$1({},l.popover),{content:this.meuTemplate})}):l),this.cd.detectChanges();}myAction(l){this.poNotification.success({message:`Action clicked: ${l}`,orientation:Ur.Top});}static \u0275fac=function(r){return new(r||a)(w(Yp),w(Be$1))};static \u0275cmp=Un({type:a,selectors:[["sample-po-header-apps"]],viewQuery:function(r,i){if(r&1&&ql(Ue,5),r&2){let p;lo(p=uo())&&(i.meuTemplate=p.first);}},standalone:false,decls:3,vars:5,consts:[["meuTemplate",""],[3,"p-brand","p-menu-items","p-actions-tools","p-header-user","p-side-menu-only-action"],[1,"custom-template"],[1,"app-wrapper"],[3,"p-icon"]],template:function(r,i){r&1&&(Wl(0,"po-header",1),JE(1,qe,7,0,"ng-template",null,0,bN)),r&2&&nw("p-brand",i.headerBrand)("p-menu-items",i.menuItems)("p-actions-tools",i.actionTools)("p-header-user",i.headerUser)("p-side-menu-only-action",true);},dependencies:[Qt,gNe],styles:[".app-wrapper[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;justify-items:center}.custom-template[_ngcontent-%COMP%]{padding:.5rem}.custom-template[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:center;font-weight:700;color:var(--color-neutral-dark-90)}po-header[_ngcontent-%COMP%]{--nav-position: flex}"],changeDetection:1})}return a})();var Oe=a=>({"docs-sample-code-tabs":a}),fe=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-header-apps-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Header Apps"),og(),Sl(4,"a",2),ft$1("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-header-apps/sample-po-header-apps.component.html"),og(),Sl(13,"pre",7),eN(14,`<po-header
  [p-brand]="headerBrand"
  [p-menu-items]="menuItems"
  [p-actions-tools]="actionTools"
  [p-header-user]="headerUser"
  [p-side-menu-only-action]="true"
></po-header>

<ng-template #meuTemplate>
  <div class="custom-template">
    <p>Meus aplicativos</p>
    <br />
    <div class="app-wrapper">
      @for (app of systemApps; track app.icon) {
        <po-button [p-icon]="app.icon"></po-button>
      }
    </div>
  </div>
</ng-template>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-header-apps/sample-po-header-apps.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { AfterViewInit, ChangeDetectorRef, Component, TemplateRef, ViewChild, ChangeDetectionStrategy } from '@angular/core';

import {
  PoHeaderActions,
  PoHeaderActionTool,
  PoHeaderActionToolItem,
  PoHeaderBrand,
  PoHeaderUser,
  PoNotificationService,
  PoToasterOrientation
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-header-apps',
  templateUrl: './sample-po-header-apps.component.html',
  standalone: false,
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: \`
    .app-wrapper {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 10px;
      justify-items: center;
    }

    .custom-template {
      padding: 0.5rem;
    }

    .custom-template p {
      text-align: center;
      font-weight: bold;
      color: var(--color-neutral-dark-90);
    }

    /* alterado apenas para demonstra\xE7\xE3o no portal*/
    po-header {
      --nav-position: flex;
    }
  \`
})
export class SamplePoHeaderAppsComponent implements AfterViewInit {
  @ViewChild('meuTemplate') meuTemplate!: TemplateRef<any>;

  listItem: Array<PoHeaderActionToolItem> = [
    {
      label: 'A\xE7\xE3o 1',
      action: this.myAction.bind(this, 'A\xE7\xE3o 1')
    },
    { label: 'A\xE7\xE3o 2', action: this.myAction.bind(this, 'A\xE7\xE3o 2') },
    { label: 'A\xE7\xE3o 3', action: this.myAction.bind(this, 'A\xE7\xE3o 3') }
  ];

  headerBrand: PoHeaderBrand = {
    title: 'PO UI',
    logo: '../../../assets/po-logos/po_color.png',
    action: this.myAction.bind(this, 'Logo a\xE7\xE3o')
  };

  menuItems: Array<PoHeaderActions> = [
    {
      label: 'Item 1',
      action: this.myAction.bind(this, 'Item 1')
    },
    { label: 'Item 2', action: this.myAction.bind(this, 'Item 2') },
    { label: 'Item 3', action: this.myAction.bind(this, 'Item 3') }
  ];

  actionTools: Array<PoHeaderActionTool> = [
    {
      label: 'Configura\xE7\xF5es',
      icon: 'an an-gear-six',
      tooltip: 'Configura\xE7\xF5es do sistema',
      action: this.myAction.bind(this, 'Configura\xE7\xE3o')
    },
    {
      label: 'Aplicativos',
      icon: 'an an-dots-nine',
      tooltip: 'Aplicativos do sistema',
      popover: {
        content: this.meuTemplate
      }
    },
    {
      label: 'Notifica\xE7\xF5es',
      icon: 'an an-chat-circle-dots',
      tooltip: 'Notifica\xE7\xF5es do usu\xE1rio',
      badge: 5,
      items: this.listItem
    }
  ];

  headerUser: PoHeaderUser = {
    avatar: '../../../assets/graphics/avatar1.png',
    customerBrand: '../../../assets/po-logos/po_black.png',
    action: this.myAction.bind(this, 'Meu Usu\xE1rio'),
    status: 'positive'
  };

  systemApps = [
    {
      icon: 'an an-reddit-logo',
      action: this.myAction.bind(this, 'Aplicativo 1')
    },
    {
      icon: 'an an-twitter-logo',
      action: this.myAction.bind(this, 'Aplicativo 2')
    },
    {
      icon: 'an an-twitch-logo',
      action: this.myAction.bind(this, 'Aplicativo 3')
    },
    {
      icon: 'an an-facebook-logo',
      action: this.myAction.bind(this, 'Aplicativo 4')
    },
    {
      icon: 'an an-meta-logo',
      action: this.myAction.bind(this, 'Aplicativo 5')
    },
    {
      icon: 'an an-amazon-logo',
      action: this.myAction.bind(this, 'Aplicativo 6')
    }
  ];

  constructor(
    private poNotification: PoNotificationService,
    private cd: ChangeDetectorRef
  ) {}

  ngAfterViewInit(): void {
    this.actionTools = this.actionTools.map(action => {
      if (action.popover) {
        return {
          ...action,
          popover: {
            ...action.popover,
            content: this.meuTemplate
          }
        };
      }
      return action;
    });

    this.cd.detectChanges();
  }

  myAction(action: string): any {
    this.poNotification.success({ message: \`Action clicked: \${action}\`, orientation: PoToasterOrientation.Top });
  }
}
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-header-apps"),og(),Wl(23,"hr")),r&2&&(Lp(5),$x("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,Oe,i.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,ve],encapsulation:2})}return a})();var Ce=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-header-doc"]],standalone:false,decls:1371,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","Array<PoHeaderActionTool>"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoHeaderBrand"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","TemplateRef<any>"],["pan","",1,"docs-api-property-type","PoHeaderUser"],["pan","",1,"docs-api-property-type","PoHeaderLiterals"],["href","/documentation/po-i18n"],["pan","",1,"docs-api-property-type","Array<PoMenuItem>"],["pan","",1,"docs-api-property-type","Array<PoHeaderActions>"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","Array<PoHeaderActionToolItem>"],["pan","",1,"docs-api-property-type","PoHeaderActionPopoverAction"],["pan","",1,"docs-api-property-type","'positive'"],["pan","",1,"docs-api-property-type","'negative'"],["pan","",1,"docs-api-property-type","'warning'"],["pan","",1,"docs-api-property-type","'disabled'"]],template:function(r,i){r&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),eN(3,"import { PoHeaderModule } from '@po-ui/ng-components';"),og()(),Sl(4,"div",2)(5,"p"),eN(6,"M\xF3dulo do componente "),Sl(7,"code"),eN(8,"po-header"),og(),eN(9,"."),og()(),Sl(10,"h3",3),eN(11,"Componente"),og(),Sl(12,"h4",4)(13,"code",5),eN(14,"PoHeaderComponent"),og()(),Sl(15,"div",2)(16,"p"),eN(17,"O componente "),Sl(18,"code"),eN(19,"po-header"),og(),eN(20," \xE9 um cabe\xE7alho fixo que permite apresentar itens com a\xE7\xF5es, divididos em "),Sl(21,"code"),eN(22,"p-brand"),og(),eN(23,", "),Sl(24,"code"),eN(25,"p-menu-items"),og(),eN(26,", "),Sl(27,"code"),eN(28,"p-actions-tools"),og(),eN(29," e "),Sl(30,"code"),eN(31,"p-header-user"),og(),eN(32,"."),og(),Sl(33,"ul")(34,"li")(35,"code"),eN(36,"p-brand"),og(),eN(37,": Possibilita a inclus\xE3o de uma imagem e o titulo do header."),og(),Sl(38,"li")(39,"code"),eN(40,"p-menu-items"),og(),eN(41,": Possibilita a inclus\xE3o de uma lista de itens com a\xE7\xF5es ou links."),og(),Sl(42,"li")(43,"code"),eN(44,"p-actions-tools"),og(),eN(45,": Possibilita a inclus\xE3o de at\xE9 3 bot\xF5es com a\xE7\xF5es."),og(),Sl(46,"li")(47,"code"),eN(48,"p-header-user"),og(),eN(49,": Possibilita a inclus\xE3o de uma imagem representando a marca e avatar."),og()(),Sl(50,"p"),eN(51,"O componente "),Sl(52,"code"),eN(53,"po-header"),og(),eN(54," pode ser usado de duas formas:"),og(),Sl(55,"p"),eN(56,"Com "),Sl(57,"code"),eN(58,"po-menu"),og(),eN(59," definido pelo usu\xE1rio:"),og(),Sl(60,"pre")(61,"code"),eN(62,`...
<po-header
  [p-brand]="brand"
  [p-menu-items]="items"
  [p-actions-tools]="actions"
  [p-header-user]="user"
></po-header>

<div class="po-wrapper">
  <po-menu [p-menus]="itemsMenu">
  </po-menu>

  <po-page-default>
      <router-outlet></router-outlet>
  </po-page-default>
</div>
...
`),og()(),Sl(63,"p"),eN(64,"Passando os itens diretamente para o "),Sl(65,"code"),eN(66,"po-header"),og(),eN(67," pela propriedade "),Sl(68,"code"),eN(69,"p-menus"),og(),eN(70,":"),og(),Sl(71,"pre")(72,"code"),eN(73,`...
<po-header
  [p-brand]="brand"
  [p-menu-items]="items"
  [p-actions-tools]="actions"
  [p-header-user]="user"
  [p-menus]="itensMenu"
></po-header>

<div class="po-wrapper">
  <po-page-default>
      <router-outlet></router-outlet>
  </po-page-default>
</div>
...
`),og()(),Sl(74,"h4"),eN(75,"Tokens customiz\xE1veis"),og(),Sl(76,"p"),eN(77,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),og(),Sl(78,"blockquote")(79,"p"),eN(80,"Para maiores informa\xE7\xF5es, acesse o guia "),Sl(81,"a",6),eN(82,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),eN(83,"."),og()(),Sl(84,"table")(85,"thead")(86,"tr")(87,"th"),eN(88,"Propriedade"),og(),Sl(89,"th"),eN(90,"Descri\xE7\xE3o"),og(),Sl(91,"th"),eN(92,"Valor Padr\xE3o"),og()()(),Sl(93,"tbody")(94,"tr")(95,"td")(96,"code"),eN(97,"--font-family"),og()(),Sl(98,"td"),eN(99,"Fam\xEDlia tipogr\xE1fica usada"),og(),Sl(100,"td")(101,"code"),eN(102,"var(--font-family-theme)"),og()()(),Sl(103,"tr")(104,"td")(105,"code"),eN(106,"--font-weight"),og()(),Sl(107,"td"),eN(108,"Peso da fonte"),og(),Sl(109,"td")(110,"code"),eN(111,"var(--font-weight-bold)"),og()()(),Sl(112,"tr")(113,"td")(114,"code"),eN(115,"--text-color"),og()(),Sl(116,"td"),eN(117,"Cor do texto"),og(),Sl(118,"td")(119,"code"),eN(120,"var(--color-neutral-dark-70)"),og()()(),Sl(121,"tr")(122,"td")(123,"code"),eN(124,"--outline-color-focused"),og()(),Sl(125,"td"),eN(126,"Cor do outline dos itens de sub-menu e customer"),og(),Sl(127,"td")(128,"code"),eN(129,"var(--color-neutral-dark-95)"),og()()(),Sl(130,"tr")(131,"td")(132,"code"),eN(133,"--object-fit-brand"),og()(),Sl(134,"td"),eN(135,"Valor do object-fit da imagem do logo"),og(),Sl(136,"td")(137,"code"),eN(138,"contain"),og()()(),Sl(139,"tr")(140,"td")(141,"code"),eN(142,"--object-fit-customer"),og()(),Sl(143,"td"),eN(144,"Valor do object-fit da imagem do logo na se\xE7\xE3o customer"),og(),Sl(145,"td")(146,"code"),eN(147,"contain"),og()()(),Sl(148,"tr")(149,"td")(150,"code"),eN(151,"--object-fit-customer-user"),og()(),Sl(152,"td"),eN(153,"Valor do object-fit da imagem do avatar"),og(),Sl(154,"td")(155,"code"),eN(156,"cover"),og()()(),Sl(157,"tr")(158,"td")(159,"strong"),eN(160,"Header"),og()(),Wl(161,"td")(162,"td"),og(),Sl(163,"tr")(164,"td")(165,"code"),eN(166,"--background-color"),og()(),Sl(167,"td"),eN(168,"Cor de background do header"),og(),Sl(169,"td")(170,"code"),eN(171,"var(--color-neutral-light-05)"),og()()(),Sl(172,"tr")(173,"td")(174,"code"),eN(175,"--border-radius-bottom-left"),og()(),Sl(176,"td"),eN(177,"Valor do radius do lado esquerdo do header"),og(),Sl(178,"td")(179,"code"),eN(180,"var(--border-radius-md)"),og()()(),Sl(181,"tr")(182,"td")(183,"code"),eN(184,"--border-radius-bottom-right"),og()(),Sl(185,"td"),eN(186,"Valor do radius do lado direito do header"),og(),Sl(187,"td")(188,"code"),eN(189,"var(--border-radius-md)"),og()()(),Sl(190,"tr")(191,"td")(192,"code"),eN(193,"--base shadow"),og()(),Sl(194,"td"),eN(195,"Cor da sombra do header"),og(),Sl(196,"td")(197,"code"),eN(198,"0 1px 8px rgba(0, 0, 0, 0.1)"),og()()(),Sl(199,"tr")(200,"td")(201,"code"),eN(202,"--stroke-color"),og()(),Sl(203,"td"),eN(204,"Cor da borda inferior do header"),og(),Sl(205,"td")(206,"code"),eN(207,"var(--color-brand-01-base)"),og()()(),Sl(208,"tr")(209,"td")(210,"strong"),eN(211,"Sub-menu"),og()(),Wl(212,"td")(213,"td"),og(),Sl(214,"tr")(215,"td")(216,"code"),eN(217,"--border-radius"),og()(),Sl(218,"td"),eN(219,"Valor do radius dos itens do sub-menu"),og(),Sl(220,"td")(221,"code"),eN(222,"var(--border-radius-md);"),og()()(),Sl(223,"tr")(224,"td")(225,"code"),eN(226,"--text-color-submenu"),og()(),Sl(227,"td"),eN(228,"Cor do texto dos itens do sub-menu"),og(),Sl(229,"td")(230,"code"),eN(231,"var(--color-brand-01-base)"),og()()(),Sl(232,"tr")(233,"td")(234,"code"),eN(235,"--icon-color"),og()(),Sl(236,"td"),eN(237,"Cor do \xEDcone do sub-menu com itens"),og(),Sl(238,"td")(239,"code"),eN(240,"var(--color-brand-01-base)"),og()()(),Sl(241,"tr")(242,"td")(243,"code"),eN(244,"--border-color"),og()(),Sl(245,"td"),eN(246,"Cor da borda"),og(),Sl(247,"td")(248,"code"),eN(249,"var(--color-transparent)"),og()()(),Sl(250,"tr")(251,"td")(252,"code"),eN(253,"--shadow"),og()(),Sl(254,"td"),eN(255,"Cont\xE9m o valor da sombra do elemento"),og(),Sl(256,"td")(257,"code"),eN(258,"var(--shadow-none)"),og()()(),Sl(259,"tr")(260,"td")(261,"code"),eN(262,"--font-family-submenu"),og()(),Sl(263,"td"),eN(264,"Fonte do texto dos itens de sub-menu"),og(),Sl(265,"td")(266,"code"),eN(267,"var(--font-family-theme)"),og()()(),Sl(268,"tr")(269,"td")(270,"code"),eN(271,"--font-weight-submenu"),og()(),Sl(272,"td"),eN(273,"Peso da fonte do texto dos itens de sub-menu"),og(),Sl(274,"td")(275,"code"),eN(276,"var(--font-weight-bold)"),og()()(),Sl(277,"tr")(278,"td")(279,"strong"),eN(280,"Sub-menu - Hover"),og()(),Wl(281,"td")(282,"td"),og(),Sl(283,"tr")(284,"td")(285,"code"),eN(286,"--background-hover"),og()(),Sl(287,"td"),eN(288,"Cor de background dos itens do sub-menu no estado hover"),og(),Sl(289,"td")(290,"code"),eN(291,"var(--color-brand-01-lighter)"),og()()(),Sl(292,"tr")(293,"td")(294,"code"),eN(295,"--icon-color-hover"),og()(),Sl(296,"td"),eN(297,"Cor do \xEDcone dos itens de sub-menu no estado hover"),og(),Sl(298,"td")(299,"code"),eN(300,"var(--color-brand-01-darkest)"),og()()(),Sl(301,"tr")(302,"td")(303,"code"),eN(304,"--text-color-hover"),og()(),Sl(305,"td"),eN(306,"Cor do texto dos itens de sub-menu no estado hover"),og(),Sl(307,"td")(308,"code"),eN(309,"var(--color-brand-01-darkest)"),og()()(),Sl(310,"tr")(311,"td")(312,"strong"),eN(313,"Sub-menu - pressed"),og()(),Wl(314,"td")(315,"td"),og(),Sl(316,"tr")(317,"td")(318,"code"),eN(319,"--background-pressed"),og()(),Sl(320,"td"),eN(321,"Cor de background dos itens do sub-menu no estado pressed"),og(),Sl(322,"td")(323,"code"),eN(324,"var(--color-brand-01-light)"),og()()(),Sl(325,"tr")(326,"td")(327,"code"),eN(328,"--icon-color-pressed"),og()(),Sl(329,"td"),eN(330,"Cor do \xEDcone dos itens de sub-menu no estado pressed"),og(),Sl(331,"td")(332,"code"),eN(333,"var(--color-brand-01-darkest)"),og()()(),Sl(334,"tr")(335,"td")(336,"code"),eN(337,"--text-color-pressed"),og()(),Sl(338,"td"),eN(339,"Cor do texto dos itens de sub-menu no estado pressed"),og(),Sl(340,"td")(341,"code"),eN(342,"var(--color-brand-01-darkest)"),og()()(),Sl(343,"tr")(344,"td")(345,"strong"),eN(346,"Sub-menu - selected"),og()(),Wl(347,"td")(348,"td"),og(),Sl(349,"tr")(350,"td")(351,"code"),eN(352,"--background-selected"),og()(),Sl(353,"td"),eN(354,"Cor de background dos itens do sub-menu no estado selected"),og(),Sl(355,"td")(356,"code"),eN(357,"var(--color-brand-01-light)"),og()()(),Sl(358,"tr")(359,"td")(360,"code"),eN(361,"--icon-color-selected"),og()(),Sl(362,"td"),eN(363,"Cor do \xEDcone dos itens de sub-menu no estado selected"),og(),Sl(364,"td")(365,"code"),eN(366,"var(--color-neutral-dark-95)"),og()()(),Sl(367,"tr")(368,"td")(369,"code"),eN(370,"--text-color-selected"),og()(),Sl(371,"td"),eN(372,"Cor do texto dos itens de sub-menu no estado selected"),og(),Sl(373,"td")(374,"code"),eN(375,"var(--color-brand-01-darkest)"),og()()(),Sl(376,"tr")(377,"td")(378,"strong"),eN(379,"Customer"),og()(),Wl(380,"td")(381,"td"),og(),Sl(382,"tr")(383,"td")(384,"code"),eN(385,"--background-color-customer"),og()(),Sl(386,"td"),eN(387,"Cor do background da se\xE7\xE3o customer"),og(),Sl(388,"td")(389,"code"),eN(390,"var(--color-neutral-light-00)"),og()()(),Sl(391,"tr")(392,"td")(393,"code"),eN(394,"--border-color"),og()(),Sl(395,"td"),eN(396,"Cor da borda da se\xE7\xE3o customer"),og(),Sl(397,"td")(398,"code"),eN(399,"var(--color-neutral-light-10)"),og()()(),Sl(400,"tr")(401,"td")(402,"code"),eN(403,"--border-style"),og()(),Sl(404,"td"),eN(405,"Estilo da borda da se\xE7\xE3o customer"),og(),Sl(406,"td")(407,"code"),eN(408,"solid"),og()()(),Sl(409,"tr")(410,"td")(411,"code"),eN(412,"--border-width"),og()(),Sl(413,"td"),eN(414,"Largura da borda da se\xE7\xE3o customer"),og(),Sl(415,"td")(416,"code"),eN(417,"var(--border-width-sm)"),og()()(),Sl(418,"tr")(419,"td")(420,"strong"),eN(421,"Customer - hover"),og()(),Wl(422,"td")(423,"td"),og(),Sl(424,"tr")(425,"td")(426,"code"),eN(427,"--background-color-customer-hover"),og()(),Sl(428,"td"),eN(429,"Cor do background da se\xE7\xE3o customer no estado hover"),og(),Sl(430,"td")(431,"code"),eN(432,"var(--color-brand-01-lighter)"),og()()(),Sl(433,"tr")(434,"td")(435,"strong"),eN(436,"Customer - pressed"),og()(),Wl(437,"td")(438,"td"),og(),Sl(439,"tr")(440,"td")(441,"code"),eN(442,"--background-color-customer-pressed"),og()(),Sl(443,"td"),eN(444,"Cor do background da se\xE7\xE3o customer no estado pressed"),og(),Sl(445,"td")(446,"code"),eN(447,"var(--color-brand-01-light)"),og()()(),Sl(448,"tr")(449,"td")(450,"code"),eN(451,"--border-width-pressed"),og()(),Sl(452,"td"),eN(453,"Largura da borda da se\xE7\xE3o customer no estado pressed"),og(),Sl(454,"td")(455,"code"),eN(456,"var(--border-width-md)"),og()()()()()(),Sl(457,"div",7)(458,"h4",8),eN(459,"Seletor"),og(),Sl(460,"pre",9),eN(461,`<po-header
    p-actions-tools="Array<PoHeaderActionTool>"
    p-amount-more="number"
    p-brand="PoHeaderBrand | string"
    (p-colapsed-menu)="EventEmitter"
    p-filter-menu="boolean"
    p-header-template="TemplateRef<any>"
    p-header-user="PoHeaderUser"
    p-hide-button-menu="boolean"
    p-literals="PoHeaderLiterals"
    p-menus="Array<PoMenuItem>"
    p-menu-items="Array<PoHeaderActions>"
    p-size="string" >
</po-header>
`),og()(),Sl(462,"h4",10),eN(463,"Propriedades"),og(),Sl(464,"table",11)(465,"tr",12)(466,"th",13),eN(467,"Nome"),og(),Sl(468,"th",13),eN(469,"Tipo"),og(),Sl(470,"th",13),eN(471,"Padr\xE3o"),og(),Sl(472,"th",13),eN(473,"Descri\xE7\xE3o"),og()(),Sl(474,"tr",14)(475,"td",15)(476,"div",16)(477,"span",17),eN(478," p-actions-tools"),Wl(479,"br"),og()()(),Sl(480,"td",18)(481,"code",19),eN(482,"Array<PoHeaderActionTool>"),og()(),Sl(483,"td",20),eN(484,"-"),og(),Sl(485,"td",21)(486,"em")(487,"strong"),eN(488,"(opcional)"),og()(),Sl(489,"p"),eN(490,"Propriedade para configurar a se\xE7\xE3o de tools do "),Sl(491,"code"),eN(492,"po-header"),og()(),Sl(493,"blockquote")(494,"p"),eN(495,"M\xE1ximo de 3 itens, o componente ir\xE1 ignorar os itens caso seja mandado mais itens que o suportado."),og()()()(),Sl(496,"tr",14)(497,"td",15)(498,"div",16)(499,"span",17),eN(500," p-amount-more"),Wl(501,"br"),og()()(),Sl(502,"td",18)(503,"code",22),eN(504,"number"),og()(),Sl(505,"td",20),eN(506,"-"),og(),Sl(507,"td",21)(508,"em")(509,"strong"),eN(510,"(opcional)"),og()(),Sl(511,"p"),eN(512,`N\xFAmero de itens dentro do bot\xE3o de overflow. Caso a largura do header n\xE3o suportar a quantidade de itens passadas, um bot\xE3o com itens ser\xE1 criado.
Essa propriedade possibilita a escolha de quantos itens estar\xE3o dentro do bot\xE3o de overflow.`),og(),Sl(513,"blockquote")(514,"p"),eN(515,"Ao utilizar essa propriedade o "),Sl(516,"code"),eN(517,"po-header"),og(),eN(518," n\xE3o ir\xE1 realizar o calculo automat\xEDco de itens."),og()()()(),Sl(519,"tr",14)(520,"td",15)(521,"div",16)(522,"span",17),eN(523," p-brand"),Wl(524,"br"),og()()(),Sl(525,"td",18)(526,"code",23),eN(527,"PoHeaderBrand "),og(),Sl(528,"code",24),eN(529," string"),og()(),Sl(530,"td",20),eN(531,"-"),og(),Sl(532,"td",21)(533,"em")(534,"strong"),eN(535,"(opcional)"),og()(),Sl(536,"p"),eN(537,"Propriedade para configurar a se\xE7\xE3o de brand do "),Sl(538,"code"),eN(539,"po-header"),og()(),Sl(540,"p"),eN(541,"Caso seja enviada uma string, apenas o logo sera mostrado com o valor da string passada."),og()()(),Sl(542,"tr",14)(543,"td",15)(544,"div",25)(545,"span",26),eN(546," (p-colapsed-menu)"),Wl(547,"br"),og()()(),Sl(548,"td",18)(549,"code",27),eN(550,"EventEmitter"),og()(),Sl(551,"td",20),eN(552,"-"),og(),Sl(553,"td",21)(554,"em")(555,"strong"),eN(556,"(opcional)"),og()(),Sl(557,"p"),eN(558,"Evento emitido ao clicar no bot\xE3o para colapsar ou expandir menu."),og()()(),Sl(559,"tr",14)(560,"td",15)(561,"div",16)(562,"span",17),eN(563," p-filter-menu"),Wl(564,"br"),og()()(),Sl(565,"td",18)(566,"code",28),eN(567,"boolean"),og()(),Sl(568,"td",20),eN(569,"-"),og(),Sl(570,"td",21)(571,"em")(572,"strong"),eN(573,"(opcional)"),og()(),Sl(574,"p"),eN(575,"Habilita campo para filtrar itens no menu"),og()()(),Sl(576,"tr",14)(577,"td",15)(578,"div",16)(579,"span",17),eN(580," p-header-template"),Wl(581,"br"),og()()(),Sl(582,"td",18)(583,"code",29),eN(584,"TemplateRef<any>"),og()(),Sl(585,"td",20),eN(586,"-"),og(),Sl(587,"td",21)(588,"em")(589,"strong"),eN(590,"(opcional)"),og()(),Sl(591,"p"),eN(592,"Template customiado que ser\xE1 renderizado ap\xF3s os itens definidos na propriedade "),Sl(593,"code"),eN(594,"p-menu-items"),og()()()(),Sl(595,"tr",14)(596,"td",15)(597,"div",16)(598,"span",17),eN(599," p-header-user"),Wl(600,"br"),og()()(),Sl(601,"td",18)(602,"code",30),eN(603,"PoHeaderUser"),og()(),Sl(604,"td",20),eN(605,"-"),og(),Sl(606,"td",21)(607,"em")(608,"strong"),eN(609,"(opcional)"),og()(),Sl(610,"p"),eN(611,"Propriedade para configurar a se\xE7\xE3o de headerUser do "),Sl(612,"code"),eN(613,"po-header"),og()()()(),Sl(614,"tr",14)(615,"td",15)(616,"div",16)(617,"span",17),eN(618," p-hide-button-menu"),Wl(619,"br"),og()()(),Sl(620,"td",18)(621,"code",28),eN(622,"boolean"),og()(),Sl(623,"td",20),eN(624,"-"),og(),Sl(625,"td",21)(626,"em")(627,"strong"),eN(628,"(opcional)"),og()(),Sl(629,"p"),eN(630,"Esconde o bot\xE3o de menu colapsado."),og()()(),Sl(631,"tr",14)(632,"td",15)(633,"div",16)(634,"span",17),eN(635," p-literals"),Wl(636,"br"),og()()(),Sl(637,"td",18)(638,"code",31),eN(639,"PoHeaderLiterals"),og()(),Sl(640,"td",20),eN(641,"-"),og(),Sl(642,"td",21)(643,"em")(644,"strong"),eN(645,"(opcional)"),og()(),Sl(646,"p"),eN(647,"Objeto com a literal usada na propriedade "),Sl(648,"code"),eN(649,"p-literals"),og(),eN(650,"."),og(),Sl(651,"p"),eN(652,"Para customizar a literal, basta declarar um objeto do tipo "),Sl(653,"code"),eN(654,"PoHeaderLiterals"),og(),eN(655," conforme exemplo abaixo:"),og(),Sl(656,"pre")(657,"code"),eN(658,`const customLiterals: PoHeaderLiterals = {
  headerLinks: 'Itens de navega\xE7\xE3o',
  notifications: 'Mensagens'
};
`),og()(),Sl(659,"p"),eN(660,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente."),og(),Sl(661,"pre")(662,"code"),eN(663,`<po-header
  [p-literals]="customLiterals">
</po-header>
`),og()(),Sl(664,"blockquote")(665,"p"),eN(666,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),Sl(667,"a",32)(668,"code"),eN(669,"PoI18nService"),og()(),eN(670," ou do browser."),og()()()(),Sl(671,"tr",14)(672,"td",15)(673,"div",16)(674,"span",17),eN(675," p-menus"),Wl(676,"br"),og()()(),Sl(677,"td",18)(678,"code",33),eN(679,"Array<PoMenuItem>"),og()(),Sl(680,"td",20),eN(681,"-"),og(),Sl(682,"td",21)(683,"em")(684,"strong"),eN(685,"(opcional)"),og()(),Sl(686,"p"),eN(687,"Lista dos itens do menu. Se o valor estiver indefinido ou inv\xE1lido, ser\xE1 inicializado como um array vazio."),og(),Sl(688,"blockquote")(689,"p"),eN(690,"O menu poder\xE1 ser aberto via bot\xE3o hamburguer quando a tela tiver menos que 960px"),og()()()(),Sl(691,"tr",14)(692,"td",15)(693,"div",16)(694,"span",17),eN(695," p-menu-items"),Wl(696,"br"),og()()(),Sl(697,"td",18)(698,"code",34),eN(699,"Array<PoHeaderActions>"),og()(),Sl(700,"td",20),eN(701,"-"),og(),Sl(702,"td",21)(703,"em")(704,"strong"),eN(705,"(opcional)"),og()(),Sl(706,"p"),eN(707,"Propriedade para configurar a se\xE7\xE3o de menu do "),Sl(708,"code"),eN(709,"po-header"),og(),eN(710,`.
Cada item pode receber uma label e uma a\xE7\xE3o`),og(),Sl(711,"blockquote")(712,"p"),eN(713,"Os itens ir\xE3o ficar vis\xEDveis em uma tela de at\xE9 960px"),og()()()(),Sl(714,"tr",14)(715,"td",15)(716,"div",16)(717,"span",17),eN(718," p-size"),Wl(719,"br"),og()()(),Sl(720,"td",18)(721,"code",24),eN(722,"string"),og()(),Sl(723,"td",20)(724,"p")(725,"code"),eN(726,"medium"),og()()(),Sl(727,"td",21)(728,"em")(729,"strong"),eN(730,"(opcional)"),og()(),Sl(731,"p"),eN(732,"Define o tamanho do componente:"),og(),Sl(733,"ul")(734,"li")(735,"code"),eN(736,"small"),og(),eN(737,": altura de 44px (dispon\xEDvel apenas para acessibilidade AA)."),og(),Sl(738,"li")(739,"code"),eN(740,"medium"),og(),eN(741,": altura de 56px."),og()(),Sl(742,"blockquote")(743,"p"),eN(744,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Sl(745,"code"),eN(746,"medium"),og(),eN(747,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Sl(748,"a",35),eN(749,"po-theme"),og(),eN(750,"."),og()()()()(),Sl(751,"h3"),eN(752,"Interfaces"),og(),Sl(753,"h4",36)(754,"code",5),eN(755,"PoHeaderActionTool"),og()(),Sl(756,"div",2)(757,"p")(758,"em"),eN(759,"Interface"),og(),eN(760," que define a se\xE7\xE3o de Actions do header."),og(),Sl(761,"p"),eN(762,"Indica\xE7\xE3o de uso:"),og(),Sl(763,"ul")(764,"li"),eN(765,"Primeira a\xE7\xE3o destinada \xE0 app launcher."),og(),Sl(766,"li"),eN(767,"Segunda a\xE7\xE3o (terceiro \xEDcone) destinada \xE0 notifica\xE7\xF5es."),og(),Sl(768,"li"),eN(769,"Terceira a\xE7\xE3o (segundo \xEDcone) destinada para agrupamento de a\xE7\xF5es."),og()(),Sl(770,"blockquote")(771,"p"),eN(772,"Caso seja passado items e popover, o componente ir\xE1 renderizar o popover e os itens ser\xE3o ignorados."),og()()(),Sl(773,"h4",10),eN(774,"Propriedades"),og(),Sl(775,"table",11)(776,"tr",12)(777,"th",13),eN(778,"Nome"),og(),Sl(779,"th",13),eN(780,"Tipo"),og(),Sl(781,"th",13),eN(782,"Descri\xE7\xE3o"),og()(),Sl(783,"tr",14)(784,"td",15)(785,"div",16)(786,"span",17),eN(787," action"),Wl(788,"br"),og()()(),Sl(789,"td",18)(790,"code",37),eN(791,"Function"),og()(),Sl(792,"td",21)(793,"em")(794,"strong"),eN(795,"(opcional)"),og()(),Sl(796,"p"),eN(797,"Evento emitido ao clicar em uma a\xE7\xE3o"),og(),Sl(798,"p"),eN(799,"Exemplo: "),Sl(800,"code"),eN(801,"action: this.myFunction.bind(this)"),og()()()(),Sl(802,"tr",14)(803,"td",15)(804,"div",16)(805,"span",17),eN(806," badge"),Wl(807,"br"),og()()(),Sl(808,"td",18)(809,"code",22),eN(810,"number"),og()(),Sl(811,"td",21)(812,"em")(813,"strong"),eN(814,"(opcional)"),og()(),Sl(815,"p"),eN(816,"Valor n\xFAmerico com a repsenta\xE7\xE3o de notifica\xE7\xF5es"),og()()(),Sl(817,"tr",14)(818,"td",15)(819,"div",16)(820,"span",17),eN(821," icon"),Wl(822,"br"),og()()(),Sl(823,"td",18)(824,"code",24),eN(825,"string"),og()(),Sl(826,"td",21)(827,"em")(828,"strong"),eN(829,"(opcional)"),og()(),Sl(830,"p"),eN(831,"\xCDcone do bot\xE3o de a\xE7\xE3o"),og()()(),Sl(832,"tr",14)(833,"td",15)(834,"div",16)(835,"span",17),eN(836," items"),Wl(837,"br"),og()()(),Sl(838,"td",18)(839,"code",38),eN(840,"Array<PoHeaderActionToolItem>"),og()(),Sl(841,"td",21)(842,"em")(843,"strong"),eN(844,"(opcional)"),og()(),Sl(845,"p"),eN(846,"Itens de a\xE7\xF5es"),og()()(),Sl(847,"tr",14)(848,"td",15)(849,"div",16)(850,"span",17),eN(851," label"),Wl(852,"br"),og()()(),Sl(853,"td",18)(854,"code",24),eN(855,"string"),og()(),Sl(856,"td",21)(857,"em")(858,"strong"),eN(859,"(opcional)"),og()(),Sl(860,"p"),eN(861,"T\xEDtulo da a\xE7\xE3o"),og()()(),Sl(862,"tr",14)(863,"td",15)(864,"div",16)(865,"span",17),eN(866," link"),Wl(867,"br"),og()()(),Sl(868,"td",18)(869,"code",24),eN(870,"string"),og()(),Sl(871,"td",21)(872,"em")(873,"strong"),eN(874,"(opcional)"),og()(),Sl(875,"p"),eN(876,"link utilizado no redirecionamento das p\xE1ginas."),og()()(),Sl(877,"tr",14)(878,"td",15)(879,"div",16)(880,"span",17),eN(881," popover"),Wl(882,"br"),og()()(),Sl(883,"td",18)(884,"code",39),eN(885,"PoHeaderActionPopoverAction"),og()(),Sl(886,"td",21)(887,"em")(888,"strong"),eN(889,"(opcional)"),og()(),Sl(890,"p"),eN(891,"Template que ser\xE1 utilizado na a\xE7\xE3o"),og()()(),Sl(892,"tr",14)(893,"td",15)(894,"div",16)(895,"span",17),eN(896," tooltip"),Wl(897,"br"),og()()(),Sl(898,"td",18)(899,"code",24),eN(900,"string"),og()(),Sl(901,"td",21)(902,"em")(903,"strong"),eN(904,"(opcional)"),og()(),Sl(905,"p"),eN(906,"Texto que ser\xE1 apresentado na tooltip"),og()()()(),Sl(907,"h4",36)(908,"code",5),eN(909,"PoHeaderActionPopoverAction"),og()(),Sl(910,"div",2)(911,"p")(912,"em"),eN(913,"Interface"),og(),eN(914," que define um template para uma a\xE7\xE3o."),og()(),Sl(915,"h4",10),eN(916,"Propriedades"),og(),Sl(917,"table",11)(918,"tr",12)(919,"th",13),eN(920,"Nome"),og(),Sl(921,"th",13),eN(922,"Tipo"),og(),Sl(923,"th",13),eN(924,"Descri\xE7\xE3o"),og()(),Sl(925,"tr",14)(926,"td",15)(927,"div",16)(928,"span",17),eN(929," content"),Wl(930,"br"),og()()(),Sl(931,"td",18)(932,"code",29),eN(933,"TemplateRef<any>"),og()(),Sl(934,"td",21)(935,"p"),eN(936,"Template que ser\xE1 renderizado dentro do popover."),og()()(),Sl(937,"tr",14)(938,"td",15)(939,"div",16)(940,"span",17),eN(941," width"),Wl(942,"br"),og()()(),Sl(943,"td",18)(944,"code",22),eN(945,"number"),og()(),Sl(946,"td",21)(947,"em")(948,"strong"),eN(949,"(opcional)"),og()(),Sl(950,"p"),eN(951,"Largura, em pixels, do template renderizado dentro do popover."),og(),Sl(952,"p"),eN(953,"Valores permitidos: de 240 a 800."),og()()()(),Sl(954,"h4",36)(955,"code",5),eN(956,"PoHeaderActionToolItem"),og()(),Sl(957,"div",2)(958,"p")(959,"em"),eN(960,"Interface"),og(),eN(961," que define uma lista de a\xE7\xF5es."),og()(),Sl(962,"h4",10),eN(963,"Propriedades"),og(),Sl(964,"table",11)(965,"tr",12)(966,"th",13),eN(967,"Nome"),og(),Sl(968,"th",13),eN(969,"Tipo"),og(),Sl(970,"th",13),eN(971,"Descri\xE7\xE3o"),og()(),Sl(972,"tr",14)(973,"td",15)(974,"div",16)(975,"span",17),eN(976," action"),Wl(977,"br"),og()()(),Sl(978,"td",18)(979,"code",37),eN(980,"Function"),og()(),Sl(981,"td",21)(982,"p"),eN(983,"Evento emitido ao clicar em uma a\xE7\xE3o"),og(),Sl(984,"p"),eN(985,"Exemplo: "),Sl(986,"code"),eN(987,"action: this.myFunction.bind(this)"),og()()()(),Sl(988,"tr",14)(989,"td",15)(990,"div",16)(991,"span",17),eN(992," label"),Wl(993,"br"),og()()(),Sl(994,"td",18)(995,"code",24),eN(996,"string"),og()(),Sl(997,"td",21)(998,"p"),eN(999,"Label da a\xE7\xE3o"),og()()()(),Sl(1e3,"h4",36)(1001,"code",5),eN(1002,"PoHeaderActions"),og()(),Sl(1003,"div",2)(1004,"p")(1005,"em"),eN(1006,"Interface"),og(),eN(1007," que define uma lista de a\xE7\xF5es no sub-menu."),og()(),Sl(1008,"h4",10),eN(1009,"Propriedades"),og(),Sl(1010,"table",11)(1011,"tr",12)(1012,"th",13),eN(1013,"Nome"),og(),Sl(1014,"th",13),eN(1015,"Tipo"),og(),Sl(1016,"th",13),eN(1017,"Descri\xE7\xE3o"),og()(),Sl(1018,"tr",14)(1019,"td",15)(1020,"div",16)(1021,"span",17),eN(1022," action"),Wl(1023,"br"),og()()(),Sl(1024,"td",18)(1025,"code",37),eN(1026,"Function"),og()(),Sl(1027,"td",21)(1028,"em")(1029,"strong"),eN(1030,"(opcional)"),og()(),Sl(1031,"p"),eN(1032,"Evento da a\xE7\xE3o"),og(),Sl(1033,"p"),eN(1034," Exemplo: "),Sl(1035,"code"),eN(1036,"action: this.myFunction.bind(this)"),og()()()(),Sl(1037,"tr",14)(1038,"td",15)(1039,"div",16)(1040,"span",17),eN(1041," id"),Wl(1042,"br"),og()()(),Sl(1043,"td",18)(1044,"code",24),eN(1045,"string"),og()(),Sl(1046,"td",21)(1047,"em")(1048,"strong"),eN(1049,"(opcional)"),og()(),Sl(1050,"p"),eN(1051,"Identificador da a\xE7\xE3o"),og()()(),Sl(1052,"tr",14)(1053,"td",15)(1054,"div",16)(1055,"span",17),eN(1056," label"),Wl(1057,"br"),og()()(),Sl(1058,"td",18)(1059,"code",24),eN(1060,"string"),og()(),Sl(1061,"td",21)(1062,"p"),eN(1063,"Label da a\xE7\xE3o"),og()()(),Sl(1064,"tr",14)(1065,"td",15)(1066,"div",16)(1067,"span",17),eN(1068," link"),Wl(1069,"br"),og()()(),Sl(1070,"td",18)(1071,"code",24),eN(1072,"string"),og()(),Sl(1073,"td",21)(1074,"em")(1075,"strong"),eN(1076,"(opcional)"),og()(),Sl(1077,"p"),eN(1078,"link utilizado no redirecionamento das p\xE1ginas."),og()()()(),Sl(1079,"h4",36)(1080,"code",5),eN(1081,"PoHeaderBrand"),og()(),Sl(1082,"div",2)(1083,"p")(1084,"em"),eN(1085,"Interface"),og(),eN(1086," que define a se\xE7\xE3o de brand."),og()(),Sl(1087,"h4",10),eN(1088,"Propriedades"),og(),Sl(1089,"table",11)(1090,"tr",12)(1091,"th",13),eN(1092,"Nome"),og(),Sl(1093,"th",13),eN(1094,"Tipo"),og(),Sl(1095,"th",13),eN(1096,"Descri\xE7\xE3o"),og()(),Sl(1097,"tr",14)(1098,"td",15)(1099,"div",16)(1100,"span",17),eN(1101," action"),Wl(1102,"br"),og()()(),Sl(1103,"td",18)(1104,"code",37),eN(1105,"Function"),og()(),Sl(1106,"td",21)(1107,"em")(1108,"strong"),eN(1109,"(opcional)"),og()(),Sl(1110,"p"),eN(1111,"Evento da a\xE7\xE3o"),og(),Sl(1112,"p"),eN(1113," Exemplo: "),Sl(1114,"code"),eN(1115,"action: this.myFunction.bind(this)"),og()()()(),Sl(1116,"tr",14)(1117,"td",15)(1118,"div",16)(1119,"span",17),eN(1120," link"),Wl(1121,"br"),og()()(),Sl(1122,"td",18)(1123,"code",24),eN(1124,"string"),og()(),Sl(1125,"td",21)(1126,"em")(1127,"strong"),eN(1128,"(opcional)"),og()(),Sl(1129,"p"),eN(1130,"link utilizado no redirecionamento das p\xE1ginas."),og()()(),Sl(1131,"tr",14)(1132,"td",15)(1133,"div",16)(1134,"span",17),eN(1135," logo"),Wl(1136,"br"),og()()(),Sl(1137,"td",18)(1138,"code",24),eN(1139,"string"),og()(),Sl(1140,"td",21)(1141,"em")(1142,"strong"),eN(1143,"(opcional)"),og()(),Sl(1144,"p"),eN(1145,"Imagem da marca"),og()()(),Sl(1146,"tr",14)(1147,"td",15)(1148,"div",16)(1149,"span",17),eN(1150," smallLogo"),Wl(1151,"br"),og()()(),Sl(1152,"td",18)(1153,"code",24),eN(1154,"string"),og()(),Sl(1155,"td",21)(1156,"em")(1157,"strong"),eN(1158,"(opcional)"),og()(),Sl(1159,"p"),eN(1160,"Imagem da marca quando a tela \xE9 menor que 960px"),og()()(),Sl(1161,"tr",14)(1162,"td",15)(1163,"div",16)(1164,"span",17),eN(1165," title"),Wl(1166,"br"),og()()(),Sl(1167,"td",18)(1168,"code",24),eN(1169,"string"),og()(),Sl(1170,"td",21)(1171,"em")(1172,"strong"),eN(1173,"(opcional)"),og()(),Sl(1174,"p"),eN(1175,"T\xEDtulo da marca"),og()()()(),Sl(1176,"h4",36)(1177,"code",5),eN(1178,"PoHeaderLiterals"),og()(),Sl(1179,"div",2)(1180,"p"),eN(1181,"Interface para defini\xE7\xE3o das literais usadas no "),Sl(1182,"code"),eN(1183,"po-header"),og(),eN(1184,"."),og()(),Sl(1185,"h4",10),eN(1186,"Propriedades"),og(),Sl(1187,"table",11)(1188,"tr",12)(1189,"th",13),eN(1190,"Nome"),og(),Sl(1191,"th",13),eN(1192,"Tipo"),og(),Sl(1193,"th",13),eN(1194,"Descri\xE7\xE3o"),og()(),Sl(1195,"tr",14)(1196,"td",15)(1197,"div",16)(1198,"span",17),eN(1199," headerLinks"),Wl(1200,"br"),og()()(),Sl(1201,"td",18)(1202,"code",24),eN(1203,"string"),og()(),Sl(1204,"td",21)(1205,"em")(1206,"strong"),eN(1207,"(opcional)"),og()(),Sl(1208,"p"),eN(1209,"Texto exibido no item de menu no qual os itens do header s\xE3o agrupados quando est\xE1 no modo responsivo."),og()()(),Sl(1210,"tr",14)(1211,"td",15)(1212,"div",16)(1213,"span",17),eN(1214," notifications"),Wl(1215,"br"),og()()(),Sl(1216,"td",18)(1217,"code",24),eN(1218,"string"),og()(),Sl(1219,"td",21)(1220,"em")(1221,"strong"),eN(1222,"(opcional)"),og()(),Sl(1223,"p"),eN(1224,"Texto para indica\xE7\xE3o de notifica\xE7\xE3o, caso seja passado um valor v\xE1lido na propriedade "),Sl(1225,"code"),eN(1226,"badge"),og()()()()(),Sl(1227,"h4",36)(1228,"code",5),eN(1229,"PoHeaderUser"),og()(),Sl(1230,"div",2)(1231,"p")(1232,"em"),eN(1233,"Interface"),og(),eN(1234," que define a se\xE7\xE3o de Customer do header."),og()(),Sl(1235,"h4",10),eN(1236,"Propriedades"),og(),Sl(1237,"table",11)(1238,"tr",12)(1239,"th",13),eN(1240,"Nome"),og(),Sl(1241,"th",13),eN(1242,"Tipo"),og(),Sl(1243,"th",13),eN(1244,"Descri\xE7\xE3o"),og()(),Sl(1245,"tr",14)(1246,"td",15)(1247,"div",16)(1248,"span",17),eN(1249," action"),Wl(1250,"br"),og()()(),Sl(1251,"td",18)(1252,"code",37),eN(1253,"Function"),og()(),Sl(1254,"td",21)(1255,"em")(1256,"strong"),eN(1257,"(opcional)"),og()(),Sl(1258,"p"),eN(1259,"Evento emitido ao clicar na se\xE7\xE3o"),og(),Sl(1260,"p"),eN(1261,"Exemplo: "),Sl(1262,"code"),eN(1263,"action: this.myFunction.bind(this)"),og()()()(),Sl(1264,"tr",14)(1265,"td",15)(1266,"div",16)(1267,"span",17),eN(1268," avatar"),Wl(1269,"br"),og()()(),Sl(1270,"td",18)(1271,"code",24),eN(1272,"string"),og()(),Sl(1273,"td",21)(1274,"p"),eN(1275,"Logo representando o perfil"),og()()(),Sl(1276,"tr",14)(1277,"td",15)(1278,"div",16)(1279,"span",17),eN(1280," customerBrand"),Wl(1281,"br"),og()()(),Sl(1282,"td",18)(1283,"code",24),eN(1284,"string"),og()(),Sl(1285,"td",21)(1286,"p"),eN(1287,"Imagem da marca"),og()()(),Sl(1288,"tr",14)(1289,"td",15)(1290,"div",16)(1291,"span",17),eN(1292," items"),Wl(1293,"br"),og()()(),Sl(1294,"td",18)(1295,"code",38),eN(1296,"Array<PoHeaderActionToolItem>"),og()(),Sl(1297,"td",21)(1298,"em")(1299,"strong"),eN(1300,"(opcional)"),og()(),Sl(1301,"p"),eN(1302,"Itens de a\xE7\xF5es"),og(),Sl(1303,"blockquote")(1304,"p"),eN(1305,"Caso seja passado items e popover, o componente ir\xE1 renderizar o popover e os itens ser\xE3o ignorados"),og()()()(),Sl(1306,"tr",14)(1307,"td",15)(1308,"div",16)(1309,"span",17),eN(1310," popover"),Wl(1311,"br"),og()()(),Sl(1312,"td",18)(1313,"code",39),eN(1314,"PoHeaderActionPopoverAction"),og()(),Sl(1315,"td",21)(1316,"em")(1317,"strong"),eN(1318,"(opcional)"),og()(),Sl(1319,"p"),eN(1320,"Template que ser\xE1 utilizado na a\xE7\xE3o"),og()()(),Sl(1321,"tr",14)(1322,"td",15)(1323,"div",16)(1324,"span",17),eN(1325," status"),Wl(1326,"br"),og()()(),Sl(1327,"td",18)(1328,"code",40),eN(1329,"'positive' "),og(),Sl(1330,"code",41),eN(1331," 'negative' "),og(),Sl(1332,"code",42),eN(1333," 'warning' "),og(),Sl(1334,"code",43),eN(1335," 'disabled'"),og()(),Sl(1336,"td",21)(1337,"em")(1338,"strong"),eN(1339,"(opcional)"),og()(),Sl(1340,"p"),eN(1341,`Indica\xE7\xE3o representando o estado do usu\xE1rio
Valores v\xE1lidos:`),og(),Sl(1342,"ul")(1343,"li")(1344,"code"),eN(1345,"positive"),og(),eN(1346,": Define a cor do "),Sl(1347,"code"),eN(1348,"status"),og(),eN(1349," com a cor de feedback positivo."),og(),Sl(1350,"li")(1351,"code"),eN(1352,"negative"),og(),eN(1353,": Define a cor do "),Sl(1354,"code"),eN(1355,"status"),og(),eN(1356," com a cor de feedback negative."),og(),Sl(1357,"li")(1358,"code"),eN(1359,"warning"),og(),eN(1360,": Define a cor do "),Sl(1361,"code"),eN(1362,"status"),og(),eN(1363," com a cor de feedback warning."),og(),Sl(1364,"li")(1365,"code"),eN(1366,"disabled"),og(),eN(1367,": Define a cor do "),Sl(1368,"code"),eN(1369,"status"),og(),eN(1370," com a cor de feedback disabled"),og()()()()()());},dependencies:[Ka],encapsulation:2})}return a})();var ye=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(l,r){this.route=l,this.router=r;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let r=l.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:"merge"}),this.activeTab=l;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(r){return new(r||a)(w(Xn),w(En))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Header",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,i){r&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft$1("p-click",function(){return i.changeTab("doc")}),Wl(3,"sample-po-header-doc"),og(),Sl(4,"po-tab",3),ft$1("p-click",function(){return i.changeTab("web")}),Wl(5,"sample-po-header-basic-view")(6,"sample-po-header-labs-view")(7,"sample-po-header-apps-view"),og()()()),r&2&&(nw("p-actions",i.actions),Lp(2),nw("p-active",i.activeTab==="doc"),Lp(2),nw("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[rNe,Bme,qme,ge,xe,fe,Ce],encapsulation:2})}return a})();var Qe=[{path:"",component:ye}],Ae=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue({imports:[hL.forChild(Qe),hL]})}return a})();var ft=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue({imports:[sr,Ae]})}return a})();export{ft as DocPoHeaderModule};