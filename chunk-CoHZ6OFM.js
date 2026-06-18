import {f as fe$1,u as ue,s as sr,a as uL,C,c3 as Xn,E as En,U as Un,aW as Yp,r as r$1,e as s,aV as Ur,ae as Be$1,dd as bNe,J as zl,T as nw,an as DO,aH as Ka,b8 as qme,b9 as Yme,H as Il,q as Qx,R as og,a1 as ft$1,A as Lp,ar as Ux,au as dg,bs as uN,aX as G9,aF as $9,aY as z9,aG as mk,aZ as hk,b0 as Qt,b4 as F3,cp as Hhe,c8 as Dde,bH as k3,aB as Dx,aM as ww,aN as QA,aO as Ew,aP as e0,de as hN,a7 as lN,bM as dN,a2 as JE,av as Gl,aw as co,ax as lo,a3 as cNe,aQ as hx,aA as Sx,aS as px,aD as Xy,aT as eN,aE as Qy,bR as wN}from'./main-FCMDZGSJ.js';var he=(()=>{class a{poNotification;headerBrand={title:"Minha empresa",logo:"../../../assets/po-logos/po_color.png",action:this.myAction.bind(this,"Logo a\xE7\xE3o")};constructor(l){this.poNotification=l;}myAction(l){this.poNotification.success(`Action clicked: ${l}`);}static \u0275fac=function(r){return new(r||a)(C(Yp))};static \u0275cmp=Un({type:a,selectors:[["sample-po-header-basic"]],standalone:false,decls:1,vars:2,consts:[[3,"p-brand","p-side-menu-only-action"]],template:function(r,i){r&1&&zl(0,"po-header",0),r&2&&nw("p-brand",i.headerBrand)("p-side-menu-only-action",true);},dependencies:[bNe],styles:["po-header[_ngcontent-%COMP%]{--nav-position: flex}"],changeDetection:1})}return a})();var Pe=a=>({"docs-sample-code-tabs":a}),ge=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-header-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Header Basic"),og(),Il(4,"a",2),ft$1("click",function(){return i.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-header-basic/sample-po-header-basic.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-header [p-brand]="headerBrand" [p-side-menu-only-action]="true"></po-header>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-header-basic/sample-po-header-basic.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-header-basic"),og(),zl(23,"hr")),r&2&&(Lp(5),Ux("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,Pe,i.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,he],encapsulation:2})}return a})();var _e=()=>({label:"Positive",value:"positive"}),He=()=>({label:"Negative",value:"negative"}),Me=()=>({label:"Warning",value:"warning"}),Be=()=>({label:"Disabled",value:"disabled"}),Le=(a,A,l,r)=>[a,A,l,r],ke=()=>({label:"Medium",value:"medium"}),De=()=>({label:"Small",value:"small"}),Ne=(a,A)=>[a,A],be=(()=>{class a{poNotification;headerBrandTitle="";headerBrandLogo="";headerBrandSmallLogo="";headerBrand={};menuActionLabel="";menuActionEvent="";menuActions=[];actionNewTool={tooltip:"",icon:"",badge:null,action:null,label:""};actionNewToolEvent=false;actionTools=[];newActionUser={avatar:"",customerBrand:"",status:"positive"};actionUser={avatar:"",customerBrand:"",status:"positive"};size="medium";constructor(l){this.poNotification=l;}addBrand(){this.headerBrand={logo:this.headerBrandLogo,title:this.headerBrandTitle,smallLogo:this.headerBrandSmallLogo},this.headerBrandTitle="",this.headerBrandLogo="",this.headerBrandSmallLogo="";}addAction(){this.menuActions=[...this.menuActions,{label:this.menuActionLabel,action:this.menuActionEvent?this.showAction.bind(this,this.menuActionEvent):null}],this.menuActionLabel="",this.menuActionEvent="";}addTool(l){let r=l;l.label=`${this.actionTools.length}`,this.actionNewToolEvent&&(r.action=this.showAction.bind(this,"Tool Actions!")),this.actionTools=[...this.actionTools,l],this.actionNewTool={};}addUser(){this.actionUser=r$1({},this.newActionUser),this.newActionUser={avatar:"",customerBrand:"",status:"positive"};}showAction(l){this.poNotification.success(`Action clicked: ${l}`);}reset(){this.headerBrand={},this.menuActions=[],this.actionNewTool={},this.actionTools=[],this.actionUser={avatar:"",customerBrand:"",status:"positive"},this.newActionUser={avatar:"",customerBrand:"",status:"positive"},this.size="medium";}static \u0275fac=function(r){return new(r||a)(C(Yp))};static \u0275cmp=Un({type:a,selectors:[["sample-po-header-labs"]],standalone:false,decls:40,vars:38,consts:[["formAction","ngForm"],[3,"p-side-menu-only-action","p-brand","p-menu-items","p-actions-tools","p-header-user","p-size"],[1,"po-row","po-mt-4"],["p-clean","","p-label","T\xEDtulo da marca",1,"po-lg-6","po-md-6",3,"ngModelChange","ngModel"],["p-clean","","p-label","Logo da marca",1,"po-lg-6","po-md-6",3,"ngModelChange","ngModel"],["p-clean","","p-label","Logo da marca - small",1,"po-lg-6","po-md-6",3,"ngModelChange","ngModel"],[1,"po-row","po-mt-1"],["p-label","Add Brand",1,"po-lg-6","po-md-6",3,"p-click"],[1,"po-row","po-mt-2"],[1,"po-lg-12","po-mb-2"],["p-clean","","p-label","Action",1,"po-lg-6","po-md-6",3,"ngModelChange","ngModel"],["p-clean","","p-label","Label",1,"po-lg-6","po-md-6",3,"ngModelChange","ngModel"],["p-label","Add Action",1,"po-md-3",3,"p-click","p-disabled"],["name","icon","p-clean","","p-label","Icon",1,"po-lg-6","po-md-6",3,"ngModelChange","ngModel"],["name","tooltip","p-clean","","p-label","Tooltip",1,"po-lg-6","po-md-6",3,"ngModelChange","ngModel"],["name","badge","p-clean","","p-label","Badge",1,"po-lg-6","po-md-6",3,"ngModelChange","ngModel"],["name","switch","name","action","p-label","Action",1,"po-lg-6","po-md-6",3,"ngModelChange","ngModel"],["p-label","Add settings",1,"po-md-3",3,"p-click","p-disabled"],["name","brand","p-clean","","p-label","Logo Brand",1,"po-lg-6","po-md-6",3,"ngModelChange","ngModel"],["name","avatar","p-clean","","p-label","Avatar",1,"po-lg-6","po-md-6",3,"ngModelChange","ngModel"],["name","radioGroupBasic","p-label","Status",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12","po-lg-12",3,"ngModelChange","ngModel","p-options"],["p-label","Reset",1,"po-md-3",3,"p-click"]],template:function(r,i){if(r&1){let p=Dx();zl(0,"po-header",1),Il(1,"div",2)(2,"po-input",3),ww("ngModelChange",function(d){return Xy(p),eN(i.headerBrandTitle,d)||(i.headerBrandTitle=d),Qy(d)}),og(),QA(),Il(3,"po-input",4),ww("ngModelChange",function(d){return Xy(p),eN(i.headerBrandLogo,d)||(i.headerBrandLogo=d),Qy(d)}),og(),QA(),Il(4,"po-input",5),ww("ngModelChange",function(d){return Xy(p),eN(i.headerBrandSmallLogo,d)||(i.headerBrandSmallLogo=d),Qy(d)}),og(),QA(),Il(5,"div",6)(6,"po-button",7),ft$1("p-click",function(){return i.addBrand()}),og()()(),zl(7,"hr"),Il(8,"div",8)(9,"h3",9),Qx(10,"A\xE7\xF5es dos itens de menu"),og(),Il(11,"po-input",10),ww("ngModelChange",function(d){return Xy(p),eN(i.menuActionEvent,d)||(i.menuActionEvent=d),Qy(d)}),og(),QA(),Il(12,"po-input",11),ww("ngModelChange",function(d){return Xy(p),eN(i.menuActionLabel,d)||(i.menuActionLabel=d),Qy(d)}),og(),QA(),Il(13,"po-button",12),ft$1("p-click",function(){return i.addAction()}),og()(),zl(14,"hr"),Il(15,"h3",9),Qx(16,"A\xE7\xF5es das configura\xE7\xF5es"),og(),Il(17,"form",8,0)(19,"po-input",13),ww("ngModelChange",function(d){return Xy(p),eN(i.actionNewTool.icon,d)||(i.actionNewTool.icon=d),Qy(d)}),og(),QA(),Il(20,"po-input",14),ww("ngModelChange",function(d){return Xy(p),eN(i.actionNewTool.tooltip,d)||(i.actionNewTool.tooltip=d),Qy(d)}),og(),QA(),Il(21,"po-number",15),ww("ngModelChange",function(d){return Xy(p),eN(i.actionNewTool.badge,d)||(i.actionNewTool.badge=d),Qy(d)}),og(),QA(),Il(22,"po-switch",16),ww("ngModelChange",function(d){return Xy(p),eN(i.actionNewToolEvent,d)||(i.actionNewToolEvent=d),Qy(d)}),og(),QA(),Il(23,"po-button",17),ft$1("p-click",function(){return i.addTool(i.actionNewTool)}),og()(),zl(24,"hr"),Il(25,"h3",9),Qx(26,"A\xE7\xF5es do Usu\xE1rio"),og(),Il(27,"form",8,0)(29,"po-input",18),ww("ngModelChange",function(d){return Xy(p),eN(i.newActionUser.customerBrand,d)||(i.newActionUser.customerBrand=d),Qy(d)}),og(),QA(),Il(30,"po-input",19),ww("ngModelChange",function(d){return Xy(p),eN(i.newActionUser.avatar,d)||(i.newActionUser.avatar=d),Qy(d)}),og(),QA(),Il(31,"po-radio-group",20),ww("ngModelChange",function(d){return Xy(p),eN(i.newActionUser.status,d)||(i.newActionUser.status=d),Qy(d)}),og(),QA(),Il(32,"po-button",17),ft$1("p-click",function(){return i.addUser()}),og(),zl(33,"hr"),Il(34,"h3",9),Qx(35,"Varia\xE7\xF5es de tamanho"),og(),Il(36,"div",8)(37,"po-radio-group",21),ww("ngModelChange",function(d){return Xy(p),eN(i.size,d)||(i.size=d),Qy(d)}),og(),QA(),og(),zl(38,"hr"),Il(39,"po-button",22),ft$1("p-click",function(){return i.reset()}),og()();}r&2&&(nw("p-side-menu-only-action",true)("p-brand",i.headerBrand)("p-menu-items",i.menuActions)("p-actions-tools",i.actionTools)("p-header-user",i.actionUser)("p-size",i.size),Lp(2),Ew("ngModel",i.headerBrandTitle),e0(),Lp(),Ew("ngModel",i.headerBrandLogo),e0(),Lp(),Ew("ngModel",i.headerBrandSmallLogo),e0(),Lp(7),Ew("ngModel",i.menuActionEvent),e0(),Lp(),Ew("ngModel",i.menuActionLabel),e0(),Lp(),nw("p-disabled",!i.menuActionLabel),Lp(6),Ew("ngModel",i.actionNewTool.icon),e0(),Lp(),Ew("ngModel",i.actionNewTool.tooltip),e0(),Lp(),Ew("ngModel",i.actionNewTool.badge),e0(),Lp(),Ew("ngModel",i.actionNewToolEvent),e0(),Lp(),nw("p-disabled",i.actionTools.length>2),Lp(6),Ew("ngModel",i.newActionUser.customerBrand),e0(),Lp(),Ew("ngModel",i.newActionUser.avatar),e0(),Lp(),Ew("ngModel",i.newActionUser.status),nw("p-options",hN(28,Le,lN(24,_e),lN(25,He),lN(26,Me),lN(27,Be))),e0(),Lp(),nw("p-disabled",!i.newActionUser.avatar||i.newActionUser.customerBrand),Lp(5),Ew("ngModel",i.size),nw("p-options",dN(35,Ne,lN(33,ke),lN(34,De))),e0());},dependencies:[G9,$9,z9,mk,hk,Qt,F3,Hhe,Dde,k3,bNe],styles:["po-header[_ngcontent-%COMP%]{--nav-position: flex}"],changeDetection:1})}return a})();var Fe=a=>({"docs-sample-code-tabs":a}),xe=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-header-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Header Labs"),og(),Il(4,"a",2),ft$1("click",function(){return i.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-header-labs/sample-po-header-labs.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-header
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
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-header-labs/sample-po-header-labs.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-header-labs"),og(),zl(23,"hr")),r&2&&(Lp(5),Ux("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,Fe,i.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,be],encapsulation:2})}return a})();var Ue=["meuTemplate"],ze=(a,A)=>A.icon;function We(a,A){if(a&1&&zl(0,"po-button",4),a&2){let l=A.$implicit;nw("p-icon",l.icon);}}function qe(a,A){if(a&1&&(Il(0,"div",2)(1,"p"),Qx(2,"Meus aplicativos"),og(),zl(3,"br"),Il(4,"div",3),hx(5,We,1,1,"po-button",4,ze),og()()),a&2){let l=Sx();Lp(5),px(l.systemApps);}}var ve=(()=>{class a{poNotification;cd;meuTemplate;listItem=[{label:"A\xE7\xE3o 1",action:this.myAction.bind(this,"A\xE7\xE3o 1")},{label:"A\xE7\xE3o 2",action:this.myAction.bind(this,"A\xE7\xE3o 2")},{label:"A\xE7\xE3o 3",action:this.myAction.bind(this,"A\xE7\xE3o 3")}];headerBrand={title:"PO UI",logo:"../../../assets/po-logos/po_color.png",action:this.myAction.bind(this,"Logo a\xE7\xE3o")};menuItems=[{label:"Item 1",action:this.myAction.bind(this,"Item 1")},{label:"Item 2",action:this.myAction.bind(this,"Item 2")},{label:"Item 3",action:this.myAction.bind(this,"Item 3")}];actionTools=[{label:"Configura\xE7\xF5es",icon:"an an-gear-six",tooltip:"Configura\xE7\xF5es do sistema",action:this.myAction.bind(this,"Configura\xE7\xE3o")},{label:"Aplicativos",icon:"an an-dots-nine",tooltip:"Aplicativos do sistema",popover:{content:this.meuTemplate}},{label:"Notifica\xE7\xF5es",icon:"an an-chat-circle-dots",tooltip:"Notifica\xE7\xF5es do usu\xE1rio",badge:5,items:this.listItem}];headerUser={avatar:"../../../assets/graphics/avatar1.png",customerBrand:"../../../assets/po-logos/po_black.png",action:this.myAction.bind(this,"Meu Usu\xE1rio"),status:"positive"};systemApps=[{icon:"an an-reddit-logo",action:this.myAction.bind(this,"Aplicativo 1")},{icon:"an an-twitter-logo",action:this.myAction.bind(this,"Aplicativo 2")},{icon:"an an-twitch-logo",action:this.myAction.bind(this,"Aplicativo 3")},{icon:"an an-facebook-logo",action:this.myAction.bind(this,"Aplicativo 4")},{icon:"an an-meta-logo",action:this.myAction.bind(this,"Aplicativo 5")},{icon:"an an-amazon-logo",action:this.myAction.bind(this,"Aplicativo 6")}];constructor(l,r){this.poNotification=l,this.cd=r;}ngAfterViewInit(){this.actionTools=this.actionTools.map(l=>l.popover?s(r$1({},l),{popover:s(r$1({},l.popover),{content:this.meuTemplate})}):l),this.cd.detectChanges();}myAction(l){this.poNotification.success({message:`Action clicked: ${l}`,orientation:Ur.Top});}static \u0275fac=function(r){return new(r||a)(C(Yp),C(Be$1))};static \u0275cmp=Un({type:a,selectors:[["sample-po-header-apps"]],viewQuery:function(r,i){if(r&1&&Gl(Ue,5),r&2){let p;co(p=lo())&&(i.meuTemplate=p.first);}},standalone:false,decls:3,vars:5,consts:[["meuTemplate",""],[3,"p-brand","p-menu-items","p-actions-tools","p-header-user","p-side-menu-only-action"],[1,"custom-template"],[1,"app-wrapper"],[3,"p-icon"]],template:function(r,i){r&1&&(zl(0,"po-header",1),JE(1,qe,7,0,"ng-template",null,0,wN)),r&2&&nw("p-brand",i.headerBrand)("p-menu-items",i.menuItems)("p-actions-tools",i.actionTools)("p-header-user",i.headerUser)("p-side-menu-only-action",true);},dependencies:[Qt,bNe],styles:[".app-wrapper[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;justify-items:center}.custom-template[_ngcontent-%COMP%]{padding:.5rem}.custom-template[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:center;font-weight:700;color:var(--color-neutral-dark-90)}po-header[_ngcontent-%COMP%]{--nav-position: flex}"],changeDetection:1})}return a})();var Oe=a=>({"docs-sample-code-tabs":a}),fe=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-header-apps-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Header Apps"),og(),Il(4,"a",2),ft$1("click",function(){return i.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-header-apps/sample-po-header-apps.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-header
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
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-header-apps/sample-po-header-apps.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { AfterViewInit, ChangeDetectorRef, Component, TemplateRef, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-header-apps"),og(),zl(23,"hr")),r&2&&(Lp(5),Ux("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,Oe,i.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,ve],encapsulation:2})}return a})();var Ce=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-header-doc"]],standalone:false,decls:1371,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","Array<PoHeaderActionTool>"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoHeaderBrand"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","TemplateRef<any>"],["pan","",1,"docs-api-property-type","PoHeaderUser"],["pan","",1,"docs-api-property-type","PoHeaderLiterals"],["href","/documentation/po-i18n"],["pan","",1,"docs-api-property-type","Array<PoMenuItem>"],["pan","",1,"docs-api-property-type","Array<PoHeaderActions>"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","Array<PoHeaderActionToolItem>"],["pan","",1,"docs-api-property-type","PoHeaderActionPopoverAction"],["pan","",1,"docs-api-property-type","'positive'"],["pan","",1,"docs-api-property-type","'negative'"],["pan","",1,"docs-api-property-type","'warning'"],["pan","",1,"docs-api-property-type","'disabled'"]],template:function(r,i){r&1&&(Il(0,"div",0)(1,"p",1)(2,"code"),Qx(3,"import { PoHeaderModule } from '@po-ui/ng-components';"),og()(),Il(4,"div",2)(5,"p"),Qx(6,"M\xF3dulo do componente "),Il(7,"code"),Qx(8,"po-header"),og(),Qx(9,"."),og()(),Il(10,"h3",3),Qx(11,"Componente"),og(),Il(12,"h4",4)(13,"code",5),Qx(14,"PoHeaderComponent"),og()(),Il(15,"div",2)(16,"p"),Qx(17,"O componente "),Il(18,"code"),Qx(19,"po-header"),og(),Qx(20," \xE9 um cabe\xE7alho fixo que permite apresentar itens com a\xE7\xF5es, divididos em "),Il(21,"code"),Qx(22,"p-brand"),og(),Qx(23,", "),Il(24,"code"),Qx(25,"p-menu-items"),og(),Qx(26,", "),Il(27,"code"),Qx(28,"p-actions-tools"),og(),Qx(29," e "),Il(30,"code"),Qx(31,"p-header-user"),og(),Qx(32,"."),og(),Il(33,"ul")(34,"li")(35,"code"),Qx(36,"p-brand"),og(),Qx(37,": Possibilita a inclus\xE3o de uma imagem e o titulo do header."),og(),Il(38,"li")(39,"code"),Qx(40,"p-menu-items"),og(),Qx(41,": Possibilita a inclus\xE3o de uma lista de itens com a\xE7\xF5es ou links."),og(),Il(42,"li")(43,"code"),Qx(44,"p-actions-tools"),og(),Qx(45,": Possibilita a inclus\xE3o de at\xE9 3 bot\xF5es com a\xE7\xF5es."),og(),Il(46,"li")(47,"code"),Qx(48,"p-header-user"),og(),Qx(49,": Possibilita a inclus\xE3o de uma imagem representando a marca e avatar."),og()(),Il(50,"p"),Qx(51,"O componente "),Il(52,"code"),Qx(53,"po-header"),og(),Qx(54," pode ser usado de duas formas:"),og(),Il(55,"p"),Qx(56,"Com "),Il(57,"code"),Qx(58,"po-menu"),og(),Qx(59," definido pelo usu\xE1rio:"),og(),Il(60,"pre")(61,"code"),Qx(62,`...
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
`),og()(),Il(63,"p"),Qx(64,"Passando os itens diretamente para o "),Il(65,"code"),Qx(66,"po-header"),og(),Qx(67," pela propriedade "),Il(68,"code"),Qx(69,"p-menus"),og(),Qx(70,":"),og(),Il(71,"pre")(72,"code"),Qx(73,`...
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
`),og()(),Il(74,"h4"),Qx(75,"Tokens customiz\xE1veis"),og(),Il(76,"p"),Qx(77,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),og(),Il(78,"blockquote")(79,"p"),Qx(80,"Para maiores informa\xE7\xF5es, acesse o guia "),Il(81,"a",6),Qx(82,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),Qx(83,"."),og()(),Il(84,"table")(85,"thead")(86,"tr")(87,"th"),Qx(88,"Propriedade"),og(),Il(89,"th"),Qx(90,"Descri\xE7\xE3o"),og(),Il(91,"th"),Qx(92,"Valor Padr\xE3o"),og()()(),Il(93,"tbody")(94,"tr")(95,"td")(96,"code"),Qx(97,"--font-family"),og()(),Il(98,"td"),Qx(99,"Fam\xEDlia tipogr\xE1fica usada"),og(),Il(100,"td")(101,"code"),Qx(102,"var(--font-family-theme)"),og()()(),Il(103,"tr")(104,"td")(105,"code"),Qx(106,"--font-weight"),og()(),Il(107,"td"),Qx(108,"Peso da fonte"),og(),Il(109,"td")(110,"code"),Qx(111,"var(--font-weight-bold)"),og()()(),Il(112,"tr")(113,"td")(114,"code"),Qx(115,"--text-color"),og()(),Il(116,"td"),Qx(117,"Cor do texto"),og(),Il(118,"td")(119,"code"),Qx(120,"var(--color-neutral-dark-70)"),og()()(),Il(121,"tr")(122,"td")(123,"code"),Qx(124,"--outline-color-focused"),og()(),Il(125,"td"),Qx(126,"Cor do outline dos itens de sub-menu e customer"),og(),Il(127,"td")(128,"code"),Qx(129,"var(--color-neutral-dark-95)"),og()()(),Il(130,"tr")(131,"td")(132,"code"),Qx(133,"--object-fit-brand"),og()(),Il(134,"td"),Qx(135,"Valor do object-fit da imagem do logo"),og(),Il(136,"td")(137,"code"),Qx(138,"contain"),og()()(),Il(139,"tr")(140,"td")(141,"code"),Qx(142,"--object-fit-customer"),og()(),Il(143,"td"),Qx(144,"Valor do object-fit da imagem do logo na se\xE7\xE3o customer"),og(),Il(145,"td")(146,"code"),Qx(147,"contain"),og()()(),Il(148,"tr")(149,"td")(150,"code"),Qx(151,"--object-fit-customer-user"),og()(),Il(152,"td"),Qx(153,"Valor do object-fit da imagem do avatar"),og(),Il(154,"td")(155,"code"),Qx(156,"cover"),og()()(),Il(157,"tr")(158,"td")(159,"strong"),Qx(160,"Header"),og()(),zl(161,"td")(162,"td"),og(),Il(163,"tr")(164,"td")(165,"code"),Qx(166,"--background-color"),og()(),Il(167,"td"),Qx(168,"Cor de background do header"),og(),Il(169,"td")(170,"code"),Qx(171,"var(--color-neutral-light-05)"),og()()(),Il(172,"tr")(173,"td")(174,"code"),Qx(175,"--border-radius-bottom-left"),og()(),Il(176,"td"),Qx(177,"Valor do radius do lado esquerdo do header"),og(),Il(178,"td")(179,"code"),Qx(180,"var(--border-radius-md)"),og()()(),Il(181,"tr")(182,"td")(183,"code"),Qx(184,"--border-radius-bottom-right"),og()(),Il(185,"td"),Qx(186,"Valor do radius do lado direito do header"),og(),Il(187,"td")(188,"code"),Qx(189,"var(--border-radius-md)"),og()()(),Il(190,"tr")(191,"td")(192,"code"),Qx(193,"--base shadow"),og()(),Il(194,"td"),Qx(195,"Cor da sombra do header"),og(),Il(196,"td")(197,"code"),Qx(198,"0 1px 8px rgba(0, 0, 0, 0.1)"),og()()(),Il(199,"tr")(200,"td")(201,"code"),Qx(202,"--stroke-color"),og()(),Il(203,"td"),Qx(204,"Cor da borda inferior do header"),og(),Il(205,"td")(206,"code"),Qx(207,"var(--color-brand-01-base)"),og()()(),Il(208,"tr")(209,"td")(210,"strong"),Qx(211,"Sub-menu"),og()(),zl(212,"td")(213,"td"),og(),Il(214,"tr")(215,"td")(216,"code"),Qx(217,"--border-radius"),og()(),Il(218,"td"),Qx(219,"Valor do radius dos itens do sub-menu"),og(),Il(220,"td")(221,"code"),Qx(222,"var(--border-radius-md);"),og()()(),Il(223,"tr")(224,"td")(225,"code"),Qx(226,"--text-color-submenu"),og()(),Il(227,"td"),Qx(228,"Cor do texto dos itens do sub-menu"),og(),Il(229,"td")(230,"code"),Qx(231,"var(--color-brand-01-base)"),og()()(),Il(232,"tr")(233,"td")(234,"code"),Qx(235,"--icon-color"),og()(),Il(236,"td"),Qx(237,"Cor do \xEDcone do sub-menu com itens"),og(),Il(238,"td")(239,"code"),Qx(240,"var(--color-brand-01-base)"),og()()(),Il(241,"tr")(242,"td")(243,"code"),Qx(244,"--border-color"),og()(),Il(245,"td"),Qx(246,"Cor da borda"),og(),Il(247,"td")(248,"code"),Qx(249,"var(--color-transparent)"),og()()(),Il(250,"tr")(251,"td")(252,"code"),Qx(253,"--shadow"),og()(),Il(254,"td"),Qx(255,"Cont\xE9m o valor da sombra do elemento"),og(),Il(256,"td")(257,"code"),Qx(258,"var(--shadow-none)"),og()()(),Il(259,"tr")(260,"td")(261,"code"),Qx(262,"--font-family-submenu"),og()(),Il(263,"td"),Qx(264,"Fonte do texto dos itens de sub-menu"),og(),Il(265,"td")(266,"code"),Qx(267,"var(--font-family-theme)"),og()()(),Il(268,"tr")(269,"td")(270,"code"),Qx(271,"--font-weight-submenu"),og()(),Il(272,"td"),Qx(273,"Peso da fonte do texto dos itens de sub-menu"),og(),Il(274,"td")(275,"code"),Qx(276,"var(--font-weight-bold)"),og()()(),Il(277,"tr")(278,"td")(279,"strong"),Qx(280,"Sub-menu - Hover"),og()(),zl(281,"td")(282,"td"),og(),Il(283,"tr")(284,"td")(285,"code"),Qx(286,"--background-hover"),og()(),Il(287,"td"),Qx(288,"Cor de background dos itens do sub-menu no estado hover"),og(),Il(289,"td")(290,"code"),Qx(291,"var(--color-brand-01-lighter)"),og()()(),Il(292,"tr")(293,"td")(294,"code"),Qx(295,"--icon-color-hover"),og()(),Il(296,"td"),Qx(297,"Cor do \xEDcone dos itens de sub-menu no estado hover"),og(),Il(298,"td")(299,"code"),Qx(300,"var(--color-brand-01-darkest)"),og()()(),Il(301,"tr")(302,"td")(303,"code"),Qx(304,"--text-color-hover"),og()(),Il(305,"td"),Qx(306,"Cor do texto dos itens de sub-menu no estado hover"),og(),Il(307,"td")(308,"code"),Qx(309,"var(--color-brand-01-darkest)"),og()()(),Il(310,"tr")(311,"td")(312,"strong"),Qx(313,"Sub-menu - pressed"),og()(),zl(314,"td")(315,"td"),og(),Il(316,"tr")(317,"td")(318,"code"),Qx(319,"--background-pressed"),og()(),Il(320,"td"),Qx(321,"Cor de background dos itens do sub-menu no estado pressed"),og(),Il(322,"td")(323,"code"),Qx(324,"var(--color-brand-01-light)"),og()()(),Il(325,"tr")(326,"td")(327,"code"),Qx(328,"--icon-color-pressed"),og()(),Il(329,"td"),Qx(330,"Cor do \xEDcone dos itens de sub-menu no estado pressed"),og(),Il(331,"td")(332,"code"),Qx(333,"var(--color-brand-01-darkest)"),og()()(),Il(334,"tr")(335,"td")(336,"code"),Qx(337,"--text-color-pressed"),og()(),Il(338,"td"),Qx(339,"Cor do texto dos itens de sub-menu no estado pressed"),og(),Il(340,"td")(341,"code"),Qx(342,"var(--color-brand-01-darkest)"),og()()(),Il(343,"tr")(344,"td")(345,"strong"),Qx(346,"Sub-menu - selected"),og()(),zl(347,"td")(348,"td"),og(),Il(349,"tr")(350,"td")(351,"code"),Qx(352,"--background-selected"),og()(),Il(353,"td"),Qx(354,"Cor de background dos itens do sub-menu no estado selected"),og(),Il(355,"td")(356,"code"),Qx(357,"var(--color-brand-01-light)"),og()()(),Il(358,"tr")(359,"td")(360,"code"),Qx(361,"--icon-color-selected"),og()(),Il(362,"td"),Qx(363,"Cor do \xEDcone dos itens de sub-menu no estado selected"),og(),Il(364,"td")(365,"code"),Qx(366,"var(--color-neutral-dark-95)"),og()()(),Il(367,"tr")(368,"td")(369,"code"),Qx(370,"--text-color-selected"),og()(),Il(371,"td"),Qx(372,"Cor do texto dos itens de sub-menu no estado selected"),og(),Il(373,"td")(374,"code"),Qx(375,"var(--color-brand-01-darkest)"),og()()(),Il(376,"tr")(377,"td")(378,"strong"),Qx(379,"Customer"),og()(),zl(380,"td")(381,"td"),og(),Il(382,"tr")(383,"td")(384,"code"),Qx(385,"--background-color-customer"),og()(),Il(386,"td"),Qx(387,"Cor do background da se\xE7\xE3o customer"),og(),Il(388,"td")(389,"code"),Qx(390,"var(--color-neutral-light-00)"),og()()(),Il(391,"tr")(392,"td")(393,"code"),Qx(394,"--border-color"),og()(),Il(395,"td"),Qx(396,"Cor da borda da se\xE7\xE3o customer"),og(),Il(397,"td")(398,"code"),Qx(399,"var(--color-neutral-light-10)"),og()()(),Il(400,"tr")(401,"td")(402,"code"),Qx(403,"--border-style"),og()(),Il(404,"td"),Qx(405,"Estilo da borda da se\xE7\xE3o customer"),og(),Il(406,"td")(407,"code"),Qx(408,"solid"),og()()(),Il(409,"tr")(410,"td")(411,"code"),Qx(412,"--border-width"),og()(),Il(413,"td"),Qx(414,"Largura da borda da se\xE7\xE3o customer"),og(),Il(415,"td")(416,"code"),Qx(417,"var(--border-width-sm)"),og()()(),Il(418,"tr")(419,"td")(420,"strong"),Qx(421,"Customer - hover"),og()(),zl(422,"td")(423,"td"),og(),Il(424,"tr")(425,"td")(426,"code"),Qx(427,"--background-color-customer-hover"),og()(),Il(428,"td"),Qx(429,"Cor do background da se\xE7\xE3o customer no estado hover"),og(),Il(430,"td")(431,"code"),Qx(432,"var(--color-brand-01-lighter)"),og()()(),Il(433,"tr")(434,"td")(435,"strong"),Qx(436,"Customer - pressed"),og()(),zl(437,"td")(438,"td"),og(),Il(439,"tr")(440,"td")(441,"code"),Qx(442,"--background-color-customer-pressed"),og()(),Il(443,"td"),Qx(444,"Cor do background da se\xE7\xE3o customer no estado pressed"),og(),Il(445,"td")(446,"code"),Qx(447,"var(--color-brand-01-light)"),og()()(),Il(448,"tr")(449,"td")(450,"code"),Qx(451,"--border-width-pressed"),og()(),Il(452,"td"),Qx(453,"Largura da borda da se\xE7\xE3o customer no estado pressed"),og(),Il(454,"td")(455,"code"),Qx(456,"var(--border-width-md)"),og()()()()()(),Il(457,"div",7)(458,"h4",8),Qx(459,"Seletor"),og(),Il(460,"pre",9),Qx(461,`<po-header
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
`),og()(),Il(462,"h4",10),Qx(463,"Propriedades"),og(),Il(464,"table",11)(465,"tr",12)(466,"th",13),Qx(467,"Nome"),og(),Il(468,"th",13),Qx(469,"Tipo"),og(),Il(470,"th",13),Qx(471,"Padr\xE3o"),og(),Il(472,"th",13),Qx(473,"Descri\xE7\xE3o"),og()(),Il(474,"tr",14)(475,"td",15)(476,"div",16)(477,"span",17),Qx(478," p-actions-tools"),zl(479,"br"),og()()(),Il(480,"td",18)(481,"code",19),Qx(482,"Array<PoHeaderActionTool>"),og()(),Il(483,"td",20),Qx(484,"-"),og(),Il(485,"td",21)(486,"em")(487,"strong"),Qx(488,"(opcional)"),og()(),Il(489,"p"),Qx(490,"Propriedade para configurar a se\xE7\xE3o de tools do "),Il(491,"code"),Qx(492,"po-header"),og()(),Il(493,"blockquote")(494,"p"),Qx(495,"M\xE1ximo de 3 itens, o componente ir\xE1 ignorar os itens caso seja mandado mais itens que o suportado."),og()()()(),Il(496,"tr",14)(497,"td",15)(498,"div",16)(499,"span",17),Qx(500," p-amount-more"),zl(501,"br"),og()()(),Il(502,"td",18)(503,"code",22),Qx(504,"number"),og()(),Il(505,"td",20),Qx(506,"-"),og(),Il(507,"td",21)(508,"em")(509,"strong"),Qx(510,"(opcional)"),og()(),Il(511,"p"),Qx(512,`N\xFAmero de itens dentro do bot\xE3o de overflow. Caso a largura do header n\xE3o suportar a quantidade de itens passadas, um bot\xE3o com itens ser\xE1 criado.
Essa propriedade possibilita a escolha de quantos itens estar\xE3o dentro do bot\xE3o de overflow.`),og(),Il(513,"blockquote")(514,"p"),Qx(515,"Ao utilizar essa propriedade o "),Il(516,"code"),Qx(517,"po-header"),og(),Qx(518," n\xE3o ir\xE1 realizar o calculo automat\xEDco de itens."),og()()()(),Il(519,"tr",14)(520,"td",15)(521,"div",16)(522,"span",17),Qx(523," p-brand"),zl(524,"br"),og()()(),Il(525,"td",18)(526,"code",23),Qx(527,"PoHeaderBrand "),og(),Il(528,"code",24),Qx(529," string"),og()(),Il(530,"td",20),Qx(531,"-"),og(),Il(532,"td",21)(533,"em")(534,"strong"),Qx(535,"(opcional)"),og()(),Il(536,"p"),Qx(537,"Propriedade para configurar a se\xE7\xE3o de brand do "),Il(538,"code"),Qx(539,"po-header"),og()(),Il(540,"p"),Qx(541,"Caso seja enviada uma string, apenas o logo sera mostrado com o valor da string passada."),og()()(),Il(542,"tr",14)(543,"td",15)(544,"div",25)(545,"span",26),Qx(546," (p-colapsed-menu)"),zl(547,"br"),og()()(),Il(548,"td",18)(549,"code",27),Qx(550,"EventEmitter"),og()(),Il(551,"td",20),Qx(552,"-"),og(),Il(553,"td",21)(554,"em")(555,"strong"),Qx(556,"(opcional)"),og()(),Il(557,"p"),Qx(558,"Evento emitido ao clicar no bot\xE3o para colapsar ou expandir menu."),og()()(),Il(559,"tr",14)(560,"td",15)(561,"div",16)(562,"span",17),Qx(563," p-filter-menu"),zl(564,"br"),og()()(),Il(565,"td",18)(566,"code",28),Qx(567,"boolean"),og()(),Il(568,"td",20),Qx(569,"-"),og(),Il(570,"td",21)(571,"em")(572,"strong"),Qx(573,"(opcional)"),og()(),Il(574,"p"),Qx(575,"Habilita campo para filtrar itens no menu"),og()()(),Il(576,"tr",14)(577,"td",15)(578,"div",16)(579,"span",17),Qx(580," p-header-template"),zl(581,"br"),og()()(),Il(582,"td",18)(583,"code",29),Qx(584,"TemplateRef<any>"),og()(),Il(585,"td",20),Qx(586,"-"),og(),Il(587,"td",21)(588,"em")(589,"strong"),Qx(590,"(opcional)"),og()(),Il(591,"p"),Qx(592,"Template customiado que ser\xE1 renderizado ap\xF3s os itens definidos na propriedade "),Il(593,"code"),Qx(594,"p-menu-items"),og()()()(),Il(595,"tr",14)(596,"td",15)(597,"div",16)(598,"span",17),Qx(599," p-header-user"),zl(600,"br"),og()()(),Il(601,"td",18)(602,"code",30),Qx(603,"PoHeaderUser"),og()(),Il(604,"td",20),Qx(605,"-"),og(),Il(606,"td",21)(607,"em")(608,"strong"),Qx(609,"(opcional)"),og()(),Il(610,"p"),Qx(611,"Propriedade para configurar a se\xE7\xE3o de headerUser do "),Il(612,"code"),Qx(613,"po-header"),og()()()(),Il(614,"tr",14)(615,"td",15)(616,"div",16)(617,"span",17),Qx(618," p-hide-button-menu"),zl(619,"br"),og()()(),Il(620,"td",18)(621,"code",28),Qx(622,"boolean"),og()(),Il(623,"td",20),Qx(624,"-"),og(),Il(625,"td",21)(626,"em")(627,"strong"),Qx(628,"(opcional)"),og()(),Il(629,"p"),Qx(630,"Esconde o bot\xE3o de menu colapsado."),og()()(),Il(631,"tr",14)(632,"td",15)(633,"div",16)(634,"span",17),Qx(635," p-literals"),zl(636,"br"),og()()(),Il(637,"td",18)(638,"code",31),Qx(639,"PoHeaderLiterals"),og()(),Il(640,"td",20),Qx(641,"-"),og(),Il(642,"td",21)(643,"em")(644,"strong"),Qx(645,"(opcional)"),og()(),Il(646,"p"),Qx(647,"Objeto com a literal usada na propriedade "),Il(648,"code"),Qx(649,"p-literals"),og(),Qx(650,"."),og(),Il(651,"p"),Qx(652,"Para customizar a literal, basta declarar um objeto do tipo "),Il(653,"code"),Qx(654,"PoHeaderLiterals"),og(),Qx(655," conforme exemplo abaixo:"),og(),Il(656,"pre")(657,"code"),Qx(658,`const customLiterals: PoHeaderLiterals = {
  headerLinks: 'Itens de navega\xE7\xE3o',
  notifications: 'Mensagens'
};
`),og()(),Il(659,"p"),Qx(660,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente."),og(),Il(661,"pre")(662,"code"),Qx(663,`<po-header
  [p-literals]="customLiterals">
</po-header>
`),og()(),Il(664,"blockquote")(665,"p"),Qx(666,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),Il(667,"a",32)(668,"code"),Qx(669,"PoI18nService"),og()(),Qx(670," ou do browser."),og()()()(),Il(671,"tr",14)(672,"td",15)(673,"div",16)(674,"span",17),Qx(675," p-menus"),zl(676,"br"),og()()(),Il(677,"td",18)(678,"code",33),Qx(679,"Array<PoMenuItem>"),og()(),Il(680,"td",20),Qx(681,"-"),og(),Il(682,"td",21)(683,"em")(684,"strong"),Qx(685,"(opcional)"),og()(),Il(686,"p"),Qx(687,"Lista dos itens do menu. Se o valor estiver indefinido ou inv\xE1lido, ser\xE1 inicializado como um array vazio."),og(),Il(688,"blockquote")(689,"p"),Qx(690,"O menu poder\xE1 ser aberto via bot\xE3o hamburguer quando a tela tiver menos que 960px"),og()()()(),Il(691,"tr",14)(692,"td",15)(693,"div",16)(694,"span",17),Qx(695," p-menu-items"),zl(696,"br"),og()()(),Il(697,"td",18)(698,"code",34),Qx(699,"Array<PoHeaderActions>"),og()(),Il(700,"td",20),Qx(701,"-"),og(),Il(702,"td",21)(703,"em")(704,"strong"),Qx(705,"(opcional)"),og()(),Il(706,"p"),Qx(707,"Propriedade para configurar a se\xE7\xE3o de menu do "),Il(708,"code"),Qx(709,"po-header"),og(),Qx(710,`.
Cada item pode receber uma label e uma a\xE7\xE3o`),og(),Il(711,"blockquote")(712,"p"),Qx(713,"Os itens ir\xE3o ficar vis\xEDveis em uma tela de at\xE9 960px"),og()()()(),Il(714,"tr",14)(715,"td",15)(716,"div",16)(717,"span",17),Qx(718," p-size"),zl(719,"br"),og()()(),Il(720,"td",18)(721,"code",24),Qx(722,"string"),og()(),Il(723,"td",20)(724,"p")(725,"code"),Qx(726,"medium"),og()()(),Il(727,"td",21)(728,"em")(729,"strong"),Qx(730,"(opcional)"),og()(),Il(731,"p"),Qx(732,"Define o tamanho do componente:"),og(),Il(733,"ul")(734,"li")(735,"code"),Qx(736,"small"),og(),Qx(737,": altura de 44px (dispon\xEDvel apenas para acessibilidade AA)."),og(),Il(738,"li")(739,"code"),Qx(740,"medium"),og(),Qx(741,": altura de 56px."),og()(),Il(742,"blockquote")(743,"p"),Qx(744,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Il(745,"code"),Qx(746,"medium"),og(),Qx(747,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Il(748,"a",35),Qx(749,"po-theme"),og(),Qx(750,"."),og()()()()(),Il(751,"h3"),Qx(752,"Interfaces"),og(),Il(753,"h4",36)(754,"code",5),Qx(755,"PoHeaderActionTool"),og()(),Il(756,"div",2)(757,"p")(758,"em"),Qx(759,"Interface"),og(),Qx(760," que define a se\xE7\xE3o de Actions do header."),og(),Il(761,"p"),Qx(762,"Indica\xE7\xE3o de uso:"),og(),Il(763,"ul")(764,"li"),Qx(765,"Primeira a\xE7\xE3o destinada \xE0 app launcher."),og(),Il(766,"li"),Qx(767,"Segunda a\xE7\xE3o (terceiro \xEDcone) destinada \xE0 notifica\xE7\xF5es."),og(),Il(768,"li"),Qx(769,"Terceira a\xE7\xE3o (segundo \xEDcone) destinada para agrupamento de a\xE7\xF5es."),og()(),Il(770,"blockquote")(771,"p"),Qx(772,"Caso seja passado items e popover, o componente ir\xE1 renderizar o popover e os itens ser\xE3o ignorados."),og()()(),Il(773,"h4",10),Qx(774,"Propriedades"),og(),Il(775,"table",11)(776,"tr",12)(777,"th",13),Qx(778,"Nome"),og(),Il(779,"th",13),Qx(780,"Tipo"),og(),Il(781,"th",13),Qx(782,"Descri\xE7\xE3o"),og()(),Il(783,"tr",14)(784,"td",15)(785,"div",16)(786,"span",17),Qx(787," action"),zl(788,"br"),og()()(),Il(789,"td",18)(790,"code",37),Qx(791,"Function"),og()(),Il(792,"td",21)(793,"em")(794,"strong"),Qx(795,"(opcional)"),og()(),Il(796,"p"),Qx(797,"Evento emitido ao clicar em uma a\xE7\xE3o"),og(),Il(798,"p"),Qx(799,"Exemplo: "),Il(800,"code"),Qx(801,"action: this.myFunction.bind(this)"),og()()()(),Il(802,"tr",14)(803,"td",15)(804,"div",16)(805,"span",17),Qx(806," badge"),zl(807,"br"),og()()(),Il(808,"td",18)(809,"code",22),Qx(810,"number"),og()(),Il(811,"td",21)(812,"em")(813,"strong"),Qx(814,"(opcional)"),og()(),Il(815,"p"),Qx(816,"Valor n\xFAmerico com a repsenta\xE7\xE3o de notifica\xE7\xF5es"),og()()(),Il(817,"tr",14)(818,"td",15)(819,"div",16)(820,"span",17),Qx(821," icon"),zl(822,"br"),og()()(),Il(823,"td",18)(824,"code",24),Qx(825,"string"),og()(),Il(826,"td",21)(827,"em")(828,"strong"),Qx(829,"(opcional)"),og()(),Il(830,"p"),Qx(831,"\xCDcone do bot\xE3o de a\xE7\xE3o"),og()()(),Il(832,"tr",14)(833,"td",15)(834,"div",16)(835,"span",17),Qx(836," items"),zl(837,"br"),og()()(),Il(838,"td",18)(839,"code",38),Qx(840,"Array<PoHeaderActionToolItem>"),og()(),Il(841,"td",21)(842,"em")(843,"strong"),Qx(844,"(opcional)"),og()(),Il(845,"p"),Qx(846,"Itens de a\xE7\xF5es"),og()()(),Il(847,"tr",14)(848,"td",15)(849,"div",16)(850,"span",17),Qx(851," label"),zl(852,"br"),og()()(),Il(853,"td",18)(854,"code",24),Qx(855,"string"),og()(),Il(856,"td",21)(857,"em")(858,"strong"),Qx(859,"(opcional)"),og()(),Il(860,"p"),Qx(861,"T\xEDtulo da a\xE7\xE3o"),og()()(),Il(862,"tr",14)(863,"td",15)(864,"div",16)(865,"span",17),Qx(866," link"),zl(867,"br"),og()()(),Il(868,"td",18)(869,"code",24),Qx(870,"string"),og()(),Il(871,"td",21)(872,"em")(873,"strong"),Qx(874,"(opcional)"),og()(),Il(875,"p"),Qx(876,"link utilizado no redirecionamento das p\xE1ginas."),og()()(),Il(877,"tr",14)(878,"td",15)(879,"div",16)(880,"span",17),Qx(881," popover"),zl(882,"br"),og()()(),Il(883,"td",18)(884,"code",39),Qx(885,"PoHeaderActionPopoverAction"),og()(),Il(886,"td",21)(887,"em")(888,"strong"),Qx(889,"(opcional)"),og()(),Il(890,"p"),Qx(891,"Template que ser\xE1 utilizado na a\xE7\xE3o"),og()()(),Il(892,"tr",14)(893,"td",15)(894,"div",16)(895,"span",17),Qx(896," tooltip"),zl(897,"br"),og()()(),Il(898,"td",18)(899,"code",24),Qx(900,"string"),og()(),Il(901,"td",21)(902,"em")(903,"strong"),Qx(904,"(opcional)"),og()(),Il(905,"p"),Qx(906,"Texto que ser\xE1 apresentado na tooltip"),og()()()(),Il(907,"h4",36)(908,"code",5),Qx(909,"PoHeaderActionPopoverAction"),og()(),Il(910,"div",2)(911,"p")(912,"em"),Qx(913,"Interface"),og(),Qx(914," que define um template para uma a\xE7\xE3o."),og()(),Il(915,"h4",10),Qx(916,"Propriedades"),og(),Il(917,"table",11)(918,"tr",12)(919,"th",13),Qx(920,"Nome"),og(),Il(921,"th",13),Qx(922,"Tipo"),og(),Il(923,"th",13),Qx(924,"Descri\xE7\xE3o"),og()(),Il(925,"tr",14)(926,"td",15)(927,"div",16)(928,"span",17),Qx(929," content"),zl(930,"br"),og()()(),Il(931,"td",18)(932,"code",29),Qx(933,"TemplateRef<any>"),og()(),Il(934,"td",21)(935,"p"),Qx(936,"Template que ser\xE1 renderizado dentro do popover."),og()()(),Il(937,"tr",14)(938,"td",15)(939,"div",16)(940,"span",17),Qx(941," width"),zl(942,"br"),og()()(),Il(943,"td",18)(944,"code",22),Qx(945,"number"),og()(),Il(946,"td",21)(947,"em")(948,"strong"),Qx(949,"(opcional)"),og()(),Il(950,"p"),Qx(951,"Largura, em pixels, do template renderizado dentro do popover."),og(),Il(952,"p"),Qx(953,"Valores permitidos: de 240 a 800."),og()()()(),Il(954,"h4",36)(955,"code",5),Qx(956,"PoHeaderActionToolItem"),og()(),Il(957,"div",2)(958,"p")(959,"em"),Qx(960,"Interface"),og(),Qx(961," que define uma lista de a\xE7\xF5es."),og()(),Il(962,"h4",10),Qx(963,"Propriedades"),og(),Il(964,"table",11)(965,"tr",12)(966,"th",13),Qx(967,"Nome"),og(),Il(968,"th",13),Qx(969,"Tipo"),og(),Il(970,"th",13),Qx(971,"Descri\xE7\xE3o"),og()(),Il(972,"tr",14)(973,"td",15)(974,"div",16)(975,"span",17),Qx(976," action"),zl(977,"br"),og()()(),Il(978,"td",18)(979,"code",37),Qx(980,"Function"),og()(),Il(981,"td",21)(982,"p"),Qx(983,"Evento emitido ao clicar em uma a\xE7\xE3o"),og(),Il(984,"p"),Qx(985,"Exemplo: "),Il(986,"code"),Qx(987,"action: this.myFunction.bind(this)"),og()()()(),Il(988,"tr",14)(989,"td",15)(990,"div",16)(991,"span",17),Qx(992," label"),zl(993,"br"),og()()(),Il(994,"td",18)(995,"code",24),Qx(996,"string"),og()(),Il(997,"td",21)(998,"p"),Qx(999,"Label da a\xE7\xE3o"),og()()()(),Il(1e3,"h4",36)(1001,"code",5),Qx(1002,"PoHeaderActions"),og()(),Il(1003,"div",2)(1004,"p")(1005,"em"),Qx(1006,"Interface"),og(),Qx(1007," que define uma lista de a\xE7\xF5es no sub-menu."),og()(),Il(1008,"h4",10),Qx(1009,"Propriedades"),og(),Il(1010,"table",11)(1011,"tr",12)(1012,"th",13),Qx(1013,"Nome"),og(),Il(1014,"th",13),Qx(1015,"Tipo"),og(),Il(1016,"th",13),Qx(1017,"Descri\xE7\xE3o"),og()(),Il(1018,"tr",14)(1019,"td",15)(1020,"div",16)(1021,"span",17),Qx(1022," action"),zl(1023,"br"),og()()(),Il(1024,"td",18)(1025,"code",37),Qx(1026,"Function"),og()(),Il(1027,"td",21)(1028,"em")(1029,"strong"),Qx(1030,"(opcional)"),og()(),Il(1031,"p"),Qx(1032,"Evento da a\xE7\xE3o"),og(),Il(1033,"p"),Qx(1034," Exemplo: "),Il(1035,"code"),Qx(1036,"action: this.myFunction.bind(this)"),og()()()(),Il(1037,"tr",14)(1038,"td",15)(1039,"div",16)(1040,"span",17),Qx(1041," id"),zl(1042,"br"),og()()(),Il(1043,"td",18)(1044,"code",24),Qx(1045,"string"),og()(),Il(1046,"td",21)(1047,"em")(1048,"strong"),Qx(1049,"(opcional)"),og()(),Il(1050,"p"),Qx(1051,"Identificador da a\xE7\xE3o"),og()()(),Il(1052,"tr",14)(1053,"td",15)(1054,"div",16)(1055,"span",17),Qx(1056," label"),zl(1057,"br"),og()()(),Il(1058,"td",18)(1059,"code",24),Qx(1060,"string"),og()(),Il(1061,"td",21)(1062,"p"),Qx(1063,"Label da a\xE7\xE3o"),og()()(),Il(1064,"tr",14)(1065,"td",15)(1066,"div",16)(1067,"span",17),Qx(1068," link"),zl(1069,"br"),og()()(),Il(1070,"td",18)(1071,"code",24),Qx(1072,"string"),og()(),Il(1073,"td",21)(1074,"em")(1075,"strong"),Qx(1076,"(opcional)"),og()(),Il(1077,"p"),Qx(1078,"link utilizado no redirecionamento das p\xE1ginas."),og()()()(),Il(1079,"h4",36)(1080,"code",5),Qx(1081,"PoHeaderBrand"),og()(),Il(1082,"div",2)(1083,"p")(1084,"em"),Qx(1085,"Interface"),og(),Qx(1086," que define a se\xE7\xE3o de brand."),og()(),Il(1087,"h4",10),Qx(1088,"Propriedades"),og(),Il(1089,"table",11)(1090,"tr",12)(1091,"th",13),Qx(1092,"Nome"),og(),Il(1093,"th",13),Qx(1094,"Tipo"),og(),Il(1095,"th",13),Qx(1096,"Descri\xE7\xE3o"),og()(),Il(1097,"tr",14)(1098,"td",15)(1099,"div",16)(1100,"span",17),Qx(1101," action"),zl(1102,"br"),og()()(),Il(1103,"td",18)(1104,"code",37),Qx(1105,"Function"),og()(),Il(1106,"td",21)(1107,"em")(1108,"strong"),Qx(1109,"(opcional)"),og()(),Il(1110,"p"),Qx(1111,"Evento da a\xE7\xE3o"),og(),Il(1112,"p"),Qx(1113," Exemplo: "),Il(1114,"code"),Qx(1115,"action: this.myFunction.bind(this)"),og()()()(),Il(1116,"tr",14)(1117,"td",15)(1118,"div",16)(1119,"span",17),Qx(1120," link"),zl(1121,"br"),og()()(),Il(1122,"td",18)(1123,"code",24),Qx(1124,"string"),og()(),Il(1125,"td",21)(1126,"em")(1127,"strong"),Qx(1128,"(opcional)"),og()(),Il(1129,"p"),Qx(1130,"link utilizado no redirecionamento das p\xE1ginas."),og()()(),Il(1131,"tr",14)(1132,"td",15)(1133,"div",16)(1134,"span",17),Qx(1135," logo"),zl(1136,"br"),og()()(),Il(1137,"td",18)(1138,"code",24),Qx(1139,"string"),og()(),Il(1140,"td",21)(1141,"em")(1142,"strong"),Qx(1143,"(opcional)"),og()(),Il(1144,"p"),Qx(1145,"Imagem da marca"),og()()(),Il(1146,"tr",14)(1147,"td",15)(1148,"div",16)(1149,"span",17),Qx(1150," smallLogo"),zl(1151,"br"),og()()(),Il(1152,"td",18)(1153,"code",24),Qx(1154,"string"),og()(),Il(1155,"td",21)(1156,"em")(1157,"strong"),Qx(1158,"(opcional)"),og()(),Il(1159,"p"),Qx(1160,"Imagem da marca quando a tela \xE9 menor que 960px"),og()()(),Il(1161,"tr",14)(1162,"td",15)(1163,"div",16)(1164,"span",17),Qx(1165," title"),zl(1166,"br"),og()()(),Il(1167,"td",18)(1168,"code",24),Qx(1169,"string"),og()(),Il(1170,"td",21)(1171,"em")(1172,"strong"),Qx(1173,"(opcional)"),og()(),Il(1174,"p"),Qx(1175,"T\xEDtulo da marca"),og()()()(),Il(1176,"h4",36)(1177,"code",5),Qx(1178,"PoHeaderLiterals"),og()(),Il(1179,"div",2)(1180,"p"),Qx(1181,"Interface para defini\xE7\xE3o das literais usadas no "),Il(1182,"code"),Qx(1183,"po-header"),og(),Qx(1184,"."),og()(),Il(1185,"h4",10),Qx(1186,"Propriedades"),og(),Il(1187,"table",11)(1188,"tr",12)(1189,"th",13),Qx(1190,"Nome"),og(),Il(1191,"th",13),Qx(1192,"Tipo"),og(),Il(1193,"th",13),Qx(1194,"Descri\xE7\xE3o"),og()(),Il(1195,"tr",14)(1196,"td",15)(1197,"div",16)(1198,"span",17),Qx(1199," headerLinks"),zl(1200,"br"),og()()(),Il(1201,"td",18)(1202,"code",24),Qx(1203,"string"),og()(),Il(1204,"td",21)(1205,"em")(1206,"strong"),Qx(1207,"(opcional)"),og()(),Il(1208,"p"),Qx(1209,"Texto exibido no item de menu no qual os itens do header s\xE3o agrupados quando est\xE1 no modo responsivo."),og()()(),Il(1210,"tr",14)(1211,"td",15)(1212,"div",16)(1213,"span",17),Qx(1214," notifications"),zl(1215,"br"),og()()(),Il(1216,"td",18)(1217,"code",24),Qx(1218,"string"),og()(),Il(1219,"td",21)(1220,"em")(1221,"strong"),Qx(1222,"(opcional)"),og()(),Il(1223,"p"),Qx(1224,"Texto para indica\xE7\xE3o de notifica\xE7\xE3o, caso seja passado um valor v\xE1lido na propriedade "),Il(1225,"code"),Qx(1226,"badge"),og()()()()(),Il(1227,"h4",36)(1228,"code",5),Qx(1229,"PoHeaderUser"),og()(),Il(1230,"div",2)(1231,"p")(1232,"em"),Qx(1233,"Interface"),og(),Qx(1234," que define a se\xE7\xE3o de Customer do header."),og()(),Il(1235,"h4",10),Qx(1236,"Propriedades"),og(),Il(1237,"table",11)(1238,"tr",12)(1239,"th",13),Qx(1240,"Nome"),og(),Il(1241,"th",13),Qx(1242,"Tipo"),og(),Il(1243,"th",13),Qx(1244,"Descri\xE7\xE3o"),og()(),Il(1245,"tr",14)(1246,"td",15)(1247,"div",16)(1248,"span",17),Qx(1249," action"),zl(1250,"br"),og()()(),Il(1251,"td",18)(1252,"code",37),Qx(1253,"Function"),og()(),Il(1254,"td",21)(1255,"em")(1256,"strong"),Qx(1257,"(opcional)"),og()(),Il(1258,"p"),Qx(1259,"Evento emitido ao clicar na se\xE7\xE3o"),og(),Il(1260,"p"),Qx(1261,"Exemplo: "),Il(1262,"code"),Qx(1263,"action: this.myFunction.bind(this)"),og()()()(),Il(1264,"tr",14)(1265,"td",15)(1266,"div",16)(1267,"span",17),Qx(1268," avatar"),zl(1269,"br"),og()()(),Il(1270,"td",18)(1271,"code",24),Qx(1272,"string"),og()(),Il(1273,"td",21)(1274,"p"),Qx(1275,"Logo representando o perfil"),og()()(),Il(1276,"tr",14)(1277,"td",15)(1278,"div",16)(1279,"span",17),Qx(1280," customerBrand"),zl(1281,"br"),og()()(),Il(1282,"td",18)(1283,"code",24),Qx(1284,"string"),og()(),Il(1285,"td",21)(1286,"p"),Qx(1287,"Imagem da marca"),og()()(),Il(1288,"tr",14)(1289,"td",15)(1290,"div",16)(1291,"span",17),Qx(1292," items"),zl(1293,"br"),og()()(),Il(1294,"td",18)(1295,"code",38),Qx(1296,"Array<PoHeaderActionToolItem>"),og()(),Il(1297,"td",21)(1298,"em")(1299,"strong"),Qx(1300,"(opcional)"),og()(),Il(1301,"p"),Qx(1302,"Itens de a\xE7\xF5es"),og(),Il(1303,"blockquote")(1304,"p"),Qx(1305,"Caso seja passado items e popover, o componente ir\xE1 renderizar o popover e os itens ser\xE3o ignorados"),og()()()(),Il(1306,"tr",14)(1307,"td",15)(1308,"div",16)(1309,"span",17),Qx(1310," popover"),zl(1311,"br"),og()()(),Il(1312,"td",18)(1313,"code",39),Qx(1314,"PoHeaderActionPopoverAction"),og()(),Il(1315,"td",21)(1316,"em")(1317,"strong"),Qx(1318,"(opcional)"),og()(),Il(1319,"p"),Qx(1320,"Template que ser\xE1 utilizado na a\xE7\xE3o"),og()()(),Il(1321,"tr",14)(1322,"td",15)(1323,"div",16)(1324,"span",17),Qx(1325," status"),zl(1326,"br"),og()()(),Il(1327,"td",18)(1328,"code",40),Qx(1329,"'positive' "),og(),Il(1330,"code",41),Qx(1331," 'negative' "),og(),Il(1332,"code",42),Qx(1333," 'warning' "),og(),Il(1334,"code",43),Qx(1335," 'disabled'"),og()(),Il(1336,"td",21)(1337,"em")(1338,"strong"),Qx(1339,"(opcional)"),og()(),Il(1340,"p"),Qx(1341,`Indica\xE7\xE3o representando o estado do usu\xE1rio
Valores v\xE1lidos:`),og(),Il(1342,"ul")(1343,"li")(1344,"code"),Qx(1345,"positive"),og(),Qx(1346,": Define a cor do "),Il(1347,"code"),Qx(1348,"status"),og(),Qx(1349," com a cor de feedback positivo."),og(),Il(1350,"li")(1351,"code"),Qx(1352,"negative"),og(),Qx(1353,": Define a cor do "),Il(1354,"code"),Qx(1355,"status"),og(),Qx(1356," com a cor de feedback negative."),og(),Il(1357,"li")(1358,"code"),Qx(1359,"warning"),og(),Qx(1360,": Define a cor do "),Il(1361,"code"),Qx(1362,"status"),og(),Qx(1363," com a cor de feedback warning."),og(),Il(1364,"li")(1365,"code"),Qx(1366,"disabled"),og(),Qx(1367,": Define a cor do "),Il(1368,"code"),Qx(1369,"status"),og(),Qx(1370," com a cor de feedback disabled"),og()()()()()());},dependencies:[Ka],encapsulation:2})}return a})();var ye=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(l,r){this.route=l,this.router=r;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let r=l.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:"merge"}),this.activeTab=l;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(r){return new(r||a)(C(Xn),C(En))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Header",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,i){r&1&&(Il(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft$1("p-click",function(){return i.changeTab("doc")}),zl(3,"sample-po-header-doc"),og(),Il(4,"po-tab",3),ft$1("p-click",function(){return i.changeTab("web")}),zl(5,"sample-po-header-basic-view")(6,"sample-po-header-labs-view")(7,"sample-po-header-apps-view"),og()()()),r&2&&(nw("p-actions",i.actions),Lp(2),nw("p-active",i.activeTab==="doc"),Lp(2),nw("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[cNe,qme,Yme,ge,xe,fe,Ce],encapsulation:2})}return a})();var Qe=[{path:"",component:ye}],Ae=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue({imports:[uL.forChild(Qe),uL]})}return a})();var ft=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue({imports:[sr,Ae]})}return a})();export{ft as DocPoHeaderModule};