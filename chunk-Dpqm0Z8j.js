import {f as fe$1,u as ue,s as sr,h as hL,w,c3 as Xn,E as En,U as Un,a as f,aW as Yp,ba as fNe,H as Wl,an as CO,aH as Ka,b8 as Bme,b9 as qme,F as Sl,z as eN,J as og,a1 as ft,L as Lp,ar as $x,au as dg,Q as nw,bs as fN,aX as Z9,aF as G9,aY as q9,aG as _k,aZ as mk,b0 as Qt,b1 as mv,c4 as b3,b4 as L3,cp as Rhe,aJ as Hhe,b5 as Whe,c9 as Ghe,aB as wx,aM as ww,aN as e0,bM as hN,aO as Ew,aP as n0,bF as Lw,b6 as Yo,b7 as k3,av as ql,aw as lo,ax as uo,cy as K3e,a2 as JE,aQ as gx,aR as px,bd as Nx,aS as mx,a3 as rNe,a7 as dN,B as yw,aD as Ky,aT as nN,aE as Xy,bR as bN}from'./main-WP3NAV7C.js';var fe=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-widget-basic"]],standalone:false,decls:1,vars:0,template:function(l,i){l&1&&Wl(0,"po-widget");},dependencies:[fNe],encapsulation:2,changeDetection:1})}return o})();var Le=o=>({"docs-sample-code-tabs":o}),ye=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-widget-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Widget Basic"),og(),Sl(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-widget-basic/sample-po-widget-basic.component.html"),og(),Sl(13,"pre",7),eN(14,`<po-widget></po-widget>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-widget-basic/sample-po-widget-basic.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-widget-basic',
  templateUrl: './sample-po-widget-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoWidgetBasicComponent {}
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-widget-basic"),og(),Wl(23,"hr")),l&2&&(Lp(5),$x("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,Le,i.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,fe],encapsulation:2})}return o})();var qe=(o,k)=>({src:o,size:k}),Ce=(()=>{class o{poNotification=f(Yp);action;background;content;height;help;primaryLabel;properties;secondaryLabel;tagIcon;tagLabel;title;actionPopup={action:null,label:""};myActions=[];tagPosition;avatarSrc;avatarSize;propertiesOptions=[{value:"disabled",label:"Disabled"},{value:"primaryWidget",label:"Primary Widget"},{value:"small",label:"small"}];iconList=[{label:"an an-bluetooth",value:"an an-bluetooth"},{label:"an an-heart",value:"an an-heart"},{label:"an an-lightbulb",value:"an an-lightbulb"},{label:"an an-star",value:"an an-star"},{label:"an an-gear",value:"an an-gear"},{label:"an an-globe",value:"an an-globe"},{label:"fa fa-address-card",value:"fa fa-address-card"},{label:"fa fa-bell",value:"fa fa-bell"}];listTagPosition=[{label:"right",value:"right"},{label:"top",value:"top"},{label:"bottom",value:"bottom"}];listAvatarSize=[{label:"xs",value:"xs"},{label:"sm",value:"sm"},{label:"md",value:"md"},{label:"lg",value:"lg"},{label:"xl",value:"xl"}];ngOnInit(){this.restore();}changeAction(p){this.action=p;}addAction(p){this.myActions=[...this.myActions,{label:p.label,action:this.showAction.bind(this,p.action)}],this.actionPopup={action:null,label:""};}restore(){this.background="",this.action="",this.content="",this.height=void 0,this.help="",this.title=void 0,this.primaryLabel=void 0,this.properties=[],this.myActions=[],this.secondaryLabel=void 0,this.tagLabel=void 0,this.tagIcon=void 0,this.actionPopup={action:null,label:""},this.tagPosition=void 0,this.avatarSrc=void 0,this.avatarSize=void 0;}showAction(p){this.poNotification.success(`Action clicked: ${p}`);}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-widget-labs"]],standalone:false,decls:32,vars:39,consts:[["f","ngForm"],[1,"po-row"],[1,"po-sm-12",3,"p-on-disabled","p-primary-action","p-secondary-action","p-setting","p-title-action","p-background","p-disabled","p-size","p-height","p-help","p-primary","p-primary-label","p-secondary-label","p-tag","p-tag-icon","p-tag-position","p-title","p-actions","p-avatar"],["p-label","Action",1,"po-md-6",3,"p-value"],["name","title","p-label","Title","p-clean","",1,"po-md-4",3,"ngModelChange","ngModel"],["name","help","p-label","Help","p-clean","",1,"po-md-4",3,"ngModelChange","ngModel"],["name","height","p-label","Height","p-clean","",1,"po-md-4",3,"ngModelChange","ngModel"],["name","actionAction","p-clean","","p-label","Action",1,"po-md-6",3,"ngModelChange","ngModel"],["name","actionLabel","p-label","Label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add Action",1,"po-lg-2","po-md-4",3,"p-click","p-disabled"],["name","background","p-clean","","p-help","Ex.: 'http://image.com'; '../../image.png'","p-label","Background","p-clean","",1,"po-md-12",3,"ngModelChange","ngModel"],["name","primaryLabel","p-label","Primary Label","p-clean","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","secondaryLabel","p-label","Secondary Label","p-clean","",1,"po-md-6",3,"ngModelChange","ngModel"],[1,"po-row","sample-widget-align-end"],["name","tagLabel","p-label","Label Tag","p-clean","",1,"po-md-4",3,"ngModelChange","ngModel"],["name","icon","p-label","Icon",1,"po-md-4","po-mt-2",3,"ngModelChange","ngModel","p-options"],["name","tagPosition","p-label","Tag Position",1,"po-md-4","po-mt-2",3,"ngModelChange","ngModel","p-options"],["name","avatarSrc","p-label","Avatar Src","p-help","https://picsum.photos/144/144","p-clean","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","avatarSize","p-label","Avatar Size",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","properties","p-columns","3","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","content","p-label","Content",1,"po-md-12",3,"ngModelChange","ngModel"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(l,i){if(l&1){let m=wx();Sl(0,"div",1)(1,"po-widget",2),ft("p-on-disabled",function(){return i.changeAction("p-on-disabled")})("p-primary-action",function(){return i.changeAction("p-primary-action")})("p-secondary-action",function(){return i.changeAction("p-secondary-action")})("p-setting",function(){return i.changeAction("p-setting")})("p-title-action",function(){return i.changeAction("p-title-action")}),eN(2),og()(),Wl(3,"po-divider"),Sl(4,"div",1),Wl(5,"po-info",3),og(),Wl(6,"po-divider"),Sl(7,"form",null,0)(9,"po-input",4),ww("ngModelChange",function(r){return Ky(m),nN(i.title,r)||(i.title=r),Xy(r)}),og(),e0(),Sl(10,"po-input",5),ww("ngModelChange",function(r){return Ky(m),nN(i.help,r)||(i.help=r),Xy(r)}),og(),e0(),Sl(11,"po-number",6),ww("ngModelChange",function(r){return Ky(m),nN(i.height,r)||(i.height=r),Xy(r)}),og(),e0(),Sl(12,"div",1)(13,"po-input",7),ww("ngModelChange",function(r){return Ky(m),nN(i.actionPopup.action,r)||(i.actionPopup.action=r),Xy(r)}),og(),e0(),Sl(14,"po-input",8),ww("ngModelChange",function(r){return Ky(m),nN(i.actionPopup.label,r)||(i.actionPopup.label=r),Xy(r)}),og(),e0(),og(),Sl(15,"div",1)(16,"po-button",9),ft("p-click",function(){return i.addAction(i.actionPopup)}),og()(),Sl(17,"po-input",10),ww("ngModelChange",function(r){return Ky(m),nN(i.background,r)||(i.background=r),Xy(r)}),og(),e0(),Sl(18,"po-input",11),ww("ngModelChange",function(r){return Ky(m),nN(i.primaryLabel,r)||(i.primaryLabel=r),Xy(r)}),og(),e0(),Sl(19,"po-input",12),ww("ngModelChange",function(r){return Ky(m),nN(i.secondaryLabel,r)||(i.secondaryLabel=r),Xy(r)}),og(),e0(),Sl(20,"div",13)(21,"po-input",14),ww("ngModelChange",function(r){return Ky(m),nN(i.tagLabel,r)||(i.tagLabel=r),Xy(r)}),og(),e0(),Sl(22,"po-select",15),ww("ngModelChange",function(r){return Ky(m),nN(i.tagIcon,r)||(i.tagIcon=r),Xy(r)}),og(),e0(),Sl(23,"po-select",16),ww("ngModelChange",function(r){return Ky(m),nN(i.tagPosition,r)||(i.tagPosition=r),Xy(r)}),og(),e0(),og(),Sl(24,"div",1)(25,"po-input",17),ww("ngModelChange",function(r){return Ky(m),nN(i.avatarSrc,r)||(i.avatarSrc=r),Xy(r)}),og(),e0(),Sl(26,"po-select",18),ww("ngModelChange",function(r){return Ky(m),nN(i.avatarSize,r)||(i.avatarSize=r),Xy(r)}),og(),e0(),og(),Sl(27,"div",1)(28,"po-checkbox-group",19),ww("ngModelChange",function(r){return Ky(m),nN(i.properties,r)||(i.properties=r),Xy(r)}),og(),e0(),og(),Sl(29,"po-textarea",20),ww("ngModelChange",function(r){return Ky(m),nN(i.content,r)||(i.content=r),Xy(r)}),og(),e0(),Sl(30,"div",1)(31,"po-button",21),ft("p-click",function(){return i.restore()}),og()()();}l&2&&(Lp(),nw("p-background",i.background)("p-disabled",i.properties.includes("disabled"))("p-size",i.properties.includes("small")?"small":"medium")("p-height",i.height)("p-help",i.help)("p-primary",i.properties.includes("primaryWidget"))("p-primary-label",i.primaryLabel)("p-secondary-label",i.secondaryLabel)("p-tag",i.tagLabel)("p-tag-icon",i.tagIcon)("p-tag-position",i.tagPosition)("p-title",i.title)("p-actions",i.myActions)("p-avatar",hN(36,qe,i.avatarSrc,i.avatarSize)),Lp(),dg(" ",i.content," "),Lp(3),nw("p-value",i.action),Lp(4),Ew("ngModel",i.title),n0(),Lp(),Ew("ngModel",i.help),n0(),Lp(),Ew("ngModel",i.height),n0(),Lp(2),Ew("ngModel",i.actionPopup.action),n0(),Lp(),Ew("ngModel",i.actionPopup.label),n0(),Lp(2),nw("p-disabled",!i.actionPopup.action||!i.actionPopup.label),Lp(),Ew("ngModel",i.background),n0(),Lp(),Ew("ngModel",i.primaryLabel),n0(),Lp(),Ew("ngModel",i.secondaryLabel),n0(),Lp(2),Ew("ngModel",i.tagLabel),n0(),Lp(),Ew("ngModel",i.tagIcon),nw("p-options",i.iconList),n0(),Lp(),Ew("ngModel",i.tagPosition),nw("p-options",i.listTagPosition),n0(),Lp(2),Ew("ngModel",i.avatarSrc),n0(),Lp(),Ew("ngModel",i.avatarSize),nw("p-options",i.listAvatarSize),n0(),Lp(2),Ew("ngModel",i.properties),nw("p-options",i.propertiesOptions),n0(),Lp(),Ew("ngModel",i.content),n0());},dependencies:[Z9,G9,q9,_k,mk,Qt,mv,b3,L3,Rhe,Hhe,Whe,Ghe,fNe],styles:[".sample-widget-align-end[_ngcontent-%COMP%]{align-items:flex-end}"],changeDetection:1})}return o})();var Be=o=>({"docs-sample-code-tabs":o}),we=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-widget-labs-view"]],standalone:false,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Widget Labs"),og(),Sl(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-widget-labs/sample-po-widget-labs.component.html"),og(),Sl(13,"pre",7),eN(14,`<div class="po-row">
  <po-widget
    class="po-sm-12"
    [p-background]="background"
    [p-disabled]="properties.includes('disabled')"
    [p-size]="properties.includes('small') ? 'small' : 'medium'"
    [p-height]="height"
    [p-help]="help"
    [p-primary]="properties.includes('primaryWidget')"
    [p-primary-label]="primaryLabel"
    [p-secondary-label]="secondaryLabel"
    [p-tag]="tagLabel"
    [p-tag-icon]="tagIcon"
    [p-tag-position]="tagPosition"
    [p-title]="title"
    [p-actions]="myActions"
    (p-on-disabled)="changeAction('p-on-disabled')"
    (p-primary-action)="changeAction('p-primary-action')"
    (p-secondary-action)="changeAction('p-secondary-action')"
    (p-setting)="changeAction('p-setting')"
    (p-title-action)="changeAction('p-title-action')"
    [p-avatar]="{ src: avatarSrc, size: avatarSize }"
  >
    { { content }}
  </po-widget>
</div>

<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Action" [p-value]="action"> </po-info>
</div>

<po-divider />

<form #f="ngForm">
  <po-input class="po-md-4" name="title" [(ngModel)]="title" p-label="Title" p-clean />

  <po-input class="po-md-4" name="help" [(ngModel)]="help" p-label="Help" p-clean />

  <po-number class="po-md-4" name="height" [(ngModel)]="height" p-label="Height" p-clean />

  <div class="po-row">
    <po-input class="po-md-6" name="actionAction" [(ngModel)]="actionPopup.action" p-clean p-label="Action" />

    <po-input class="po-md-6" name="actionLabel" [(ngModel)]="actionPopup.label" p-label="Label" p-required />
  </div>

  <div class="po-row">
    <po-button
      class="po-lg-2 po-md-4"
      p-label="Add Action"
      [p-disabled]="!actionPopup.action || !actionPopup.label"
      (p-click)="addAction(actionPopup)"
    >
    </po-button>
  </div>

  <po-input
    class="po-md-12"
    name="background"
    [(ngModel)]="background"
    p-clean
    p-help="Ex.: 'http://image.com'; '../../image.png'"
    p-label="Background"
    p-clean
  />

  <po-input class="po-md-6" name="primaryLabel" [(ngModel)]="primaryLabel" p-label="Primary Label" p-clean />

  <po-input class="po-md-6" name="secondaryLabel" [(ngModel)]="secondaryLabel" p-label="Secondary Label" p-clean />

  <div class="po-row sample-widget-align-end">
    <po-input class="po-md-4" name="tagLabel" [(ngModel)]="tagLabel" p-label="Label Tag" p-clean />

    <po-select class="po-md-4 po-mt-2" name="icon" [(ngModel)]="tagIcon" p-label="Icon" [p-options]="iconList" />

    <po-select
      class="po-md-4 po-mt-2"
      name="tagPosition"
      [(ngModel)]="tagPosition"
      p-label="Tag Position"
      [p-options]="listTagPosition"
    />
  </div>

  <div class="po-row">
    <po-input
      class="po-md-6"
      name="avatarSrc"
      [(ngModel)]="avatarSrc"
      p-label="Avatar Src"
      p-help="https://picsum.photos/144/144"
      p-clean
    />

    <po-select
      class="po-md-6"
      name="avatarSize"
      [(ngModel)]="avatarSize"
      p-label="Avatar Size"
      [p-options]="listAvatarSize"
    />
  </div>

  <div class="po-row">
    <po-checkbox-group
      class="po-md-12"
      name="properties"
      [(ngModel)]="properties"
      p-columns="3"
      p-label="Properties"
      [p-options]="propertiesOptions"
    />
  </div>

  <po-textarea class="po-md-12" [(ngModel)]="content" name="content" p-label="Content" />

  <div class="po-row">
    <po-button class="po-md-3" p-label="Sample Restore" (p-click)="restore()" />
  </div>
</form>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-widget-labs/sample-po-widget-labs.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

import { PoCheckboxGroupOption, PoNotificationService, PoPopupAction, PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-widget-labs',
  templateUrl: './sample-po-widget-labs.component.html',
  styleUrls: ['./sample-po-widget-labs.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoWidgetLabsComponent implements OnInit {
  private poNotification = inject(PoNotificationService);

  action: string;
  background: string;
  content: string;
  height: number;
  help: string;
  primaryLabel: string;
  properties: Array<string>;
  secondaryLabel: string;
  tagIcon: string;
  tagLabel: string;
  title: string;
  actionPopup: PoPopupAction = { action: null, label: '' };
  myActions: Array<PoPopupAction> = [];
  tagPosition: string;
  avatarSrc: string;
  avatarSize: string;

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'disabled', label: 'Disabled' },
    { value: 'primaryWidget', label: 'Primary Widget' },
    { value: 'small', label: 'small' }
  ];

  public readonly iconList: Array<PoSelectOption> = [
    { label: 'an an-bluetooth', value: 'an an-bluetooth' },
    { label: 'an an-heart', value: 'an an-heart' },
    { label: 'an an-lightbulb', value: 'an an-lightbulb' },
    { label: 'an an-star', value: 'an an-star' },
    { label: 'an an-gear', value: 'an an-gear' },
    { label: 'an an-globe', value: 'an an-globe' },
    { label: 'fa fa-address-card', value: 'fa fa-address-card' },
    { label: 'fa fa-bell', value: 'fa fa-bell' }
  ];

  public readonly listTagPosition: Array<PoSelectOption> = [
    { label: 'right', value: 'right' },
    { label: 'top', value: 'top' },
    { label: 'bottom', value: 'bottom' }
  ];

  public readonly listAvatarSize: Array<PoSelectOption> = [
    { label: 'xs', value: 'xs' },
    { label: 'sm', value: 'sm' },
    { label: 'md', value: 'md' },
    { label: 'lg', value: 'lg' },
    { label: 'xl', value: 'xl' }
  ];

  ngOnInit() {
    this.restore();
  }

  changeAction(action) {
    this.action = action;
  }

  addAction(action: PoPopupAction) {
    this.myActions = [...this.myActions, { label: action.label, action: this.showAction.bind(this, action.action) }];
    this.actionPopup = { action: null, label: '' };
  }

  restore() {
    this.background = '';
    this.action = '';
    this.content = '';
    this.height = undefined;
    this.help = '';
    this.title = undefined;
    this.primaryLabel = undefined;
    this.properties = [];
    this.myActions = [];
    this.secondaryLabel = undefined;
    this.tagLabel = undefined;
    this.tagIcon = undefined;
    this.actionPopup = { action: null, label: '' };
    this.tagPosition = undefined;
    this.avatarSrc = undefined;
    this.avatarSize = undefined;
  }

  private showAction(action: string): any {
    this.poNotification.success(\`Action clicked: \${action}\`);
  }
}
`),og()()(),Sl(21,"po-tab",10)(22,"div")(23,"label",6),eN(24,"sample-po-widget-labs/sample-po-widget-labs.component.css"),og(),Sl(25,"pre",11),eN(26,`.sample-widget-align-end {
  align-items: flex-end;
}
`),og()()()()(),Sl(27,"div",12),Wl(28,"sample-po-widget-labs"),og(),Wl(29,"hr")),l&2&&(Lp(5),$x("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,Be,i.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,Ce],encapsulation:2})}return o})();var Ie=["detailsModal"],Pe=(()=>{class o{poNotification=f(Yp);detailsModalElement;paymentLink="https://www.google.com.br/search?q=days+to+payment";itemsDetails;titleDetailsModal;typeChart="line";myActions=[{label:"Detail",icon:"an an-align-top",action:this.showAction.bind(this)},{label:"Remove",icon:"an an-trash",type:"danger",action:this.showAction.bind(this)}];options=[{value:"poMultiselect1",label:"Admin"},{value:"poMultiselect2",label:"User"}];columnsDetails=[{property:"dateUpdate",label:"Date update",type:"date"},{property:"statement",label:"Statement",type:"currency"}];itemsAccountDetails=[{dateUpdate:"03-05-2018",statement:"-56.45"},{dateUpdate:"02-05-2018",statement:"-14.99"},{dateUpdate:"02-05-2018",statement:"-657.56"},{dateUpdate:"12-05-2017",statement:"3547.29"}];itemsSavingsDetails=[{dateUpdate:"03-05-2018",statement:"-300"},{dateUpdate:"03-05-2018",statement:"2000"},{dateUpdate:"02-05-2018",statement:"1500"},{dateUpdate:"02-05-2018",statement:"-200"},{dateUpdate:"12-05-2017",statement:"2000"}];openModal(p){switch(p){case "savings":this.titleDetailsModal="Revenue - Details",this.itemsDetails=this.itemsSavingsDetails,this.detailsModalElement.open();break;case "account":this.titleDetailsModal="Total savings - Details",this.itemsDetails=this.itemsAccountDetails,this.detailsModalElement.open();break}}openExternalLink(p){window.open(p,"_blank");}showAction(){this.poNotification.success("Action clicked");}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-widget-finance-dashboard"]],viewQuery:function(l,i){if(l&1&&ql(Ie,7),l&2){let m;lo(m=uo())&&(i.detailsModalElement=m.first);}},standalone:false,decls:43,vars:13,consts:[["detailsModal",""],[1,"po-row","sample-finance-row-gap"],["p-help","https://github.com/po-ui/po-angular/stargazers","p-title","Days to Payment","p-tag","Sales","p-tag-icon","an an-arrow-circle-up",1,"po-lg-6",3,"p-height"],[1,"sample-finance-actions"],["p-label","Cancel","p-danger",""],["p-label","Confirm",3,"p-click"],["p-title","Total savings",1,"po-lg-3",3,"p-click","p-height"],[1,"po-font-subtitle","po-text-center"],[1,"po-text-center"],["p-disabled","","p-primary-label","Details","p-secondary-label","Edit","p-title","Total checking account",1,"po-lg-3",3,"p-primary-action","p-height"],[1,"po-text-center","sample-finance-total-value"],["p-background","../../../assets/graphics/sales-statistics.png",1,"po-lg-4",3,"p-height"],[1,"po-text-center","sample-finance-padding-inline"],[1,"sample-finance-overlay-badge"],[1,"sample-finance-overlay-text"],[1,"sample-finance-padding-inline"],["name","multiselect",3,"p-options"],["p-title","Most used payment type",1,"po-lg-4",3,"p-actions","p-height"],["p-primary-label","Details","p-tag","Revenue","p-tag-icon","an an-money","p-title","Highest revenue in the month considering Marketing and Sales",1,"po-lg-4",3,"p-primary-action","p-height","p-primary"],[3,"p-title"],[3,"p-columns","p-items","p-hide-table-search"]],template:function(l,i){l&1&&(Sl(0,"div",1)(1,"div",1)(2,"po-widget",2)(3,"div"),eN(4,"Sales order"),og(),Sl(5,"div"),eN(6,"Scheduled to: "),Sl(7,"strong"),eN(8,"05/04/2018"),og()(),Sl(9,"div",3),Wl(10,"po-button",4),Sl(11,"po-button",5),ft("p-click",function(){return i.openExternalLink("https://github.com/po-ui/po-angular/stargazers")}),og()()(),Sl(12,"po-widget",6),ft("p-click",function(){return i.openModal("account")}),Sl(13,"div",7),eN(14,"$2.818,29"),og(),Sl(15,"div",8),eN(16,"Last updated at 18:34"),og()(),Sl(17,"po-widget",9),ft("p-primary-action",function(){return i.openModal("account")}),Sl(18,"div",10),eN(19,"$5.000,00"),og(),Sl(20,"div",8),eN(21,"Last updated at 08:20"),og()()(),Sl(22,"div",1)(23,"po-widget",11)(24,"div",12)(25,"div",13)(26,"strong",14),eN(27,"Enter the user routine"),og()()(),Sl(28,"div",15),Wl(29,"po-multiselect",16),og()(),Sl(30,"po-widget",17)(31,"div",7),eN(32,"Credit card"),og(),Sl(33,"div",8),eN(34,"MasterCard - 5500 0000 0000 0004"),og()(),Sl(35,"po-widget",18),ft("p-primary-action",function(){return i.openModal("savings")}),Sl(36,"div",7),eN(37,"$2.000,00"),og(),Sl(38,"div",8),eN(39,"05/03/2018"),og()()()(),Sl(40,"po-modal",19,0),Wl(42,"po-table",20),og()),l&2&&(Lp(2),nw("p-height",190),Lp(10),nw("p-height",190),Lp(5),nw("p-height",190),Lp(6),nw("p-height",180),Lp(6),nw("p-options",i.options),Lp(),nw("p-actions",i.myActions)("p-height",180),Lp(5),nw("p-height",180)("p-primary",true),Lp(5),nw("p-title",i.titleDetailsModal),Lp(2),nw("p-columns",i.columnsDetails)("p-items",i.itemsDetails)("p-hide-table-search",false));},dependencies:[Qt,Lw,Yo,k3,fNe],styles:[".sample-finance-row-gap[_ngcontent-%COMP%]{row-gap:1rem}.sample-finance-actions[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;gap:.5rem}.sample-finance-total-value[_ngcontent-%COMP%]{font-size:2rem;margin-bottom:.5rem}.sample-finance-padding-inline[_ngcontent-%COMP%]{padding-inline:.5rem}.sample-finance-overlay-badge[_ngcontent-%COMP%]{margin-bottom:.5rem;display:inline-block;background-color:#000;padding:.5rem;border-radius:3px;opacity:.85}.sample-finance-overlay-text[_ngcontent-%COMP%]{color:#fff}"],changeDetection:1})}return o})();var Ne=o=>({"docs-sample-code-tabs":o}),_e=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-widget-finance-dashboard-view"]],standalone:false,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Widget - Finance dashboard"),og(),Sl(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-widget-finance-dashboard/sample-po-widget-finance-dashboard.component.html"),og(),Sl(13,"pre",7),eN(14,`<div class="po-row sample-finance-row-gap">
  <div class="po-row sample-finance-row-gap">
    <po-widget
      class="po-lg-6"
      p-help="https://github.com/po-ui/po-angular/stargazers"
      p-title="Days to Payment"
      p-tag="Sales"
      p-tag-icon="an an-arrow-circle-up"
      [p-height]="190"
    >
      <div>Sales order</div>
      <div>Scheduled to: <strong>05/04/2018</strong></div>
      <div class="sample-finance-actions">
        <po-button p-label="Cancel" p-danger></po-button>
        <po-button
          p-label="Confirm"
          (p-click)="openExternalLink('https://github.com/po-ui/po-angular/stargazers')"
        ></po-button>
      </div>
    </po-widget>

    <po-widget class="po-lg-3" p-title="Total savings" [p-height]="190" (p-click)="openModal('account')">
      <div class="po-font-subtitle po-text-center">$2.818,29</div>
      <div class="po-text-center">Last updated at 18:34</div>
    </po-widget>

    <po-widget
      class="po-lg-3"
      p-disabled
      p-primary-label="Details"
      p-secondary-label="Edit"
      p-title="Total checking account"
      [p-height]="190"
      (p-primary-action)="openModal('account')"
    >
      <div class="po-text-center sample-finance-total-value">$5.000,00</div>
      <div class="po-text-center">Last updated at 08:20</div>
    </po-widget>
  </div>

  <div class="po-row sample-finance-row-gap">
    <po-widget class="po-lg-4" p-background="../../../assets/graphics/sales-statistics.png" [p-height]="180">
      <div class="po-text-center sample-finance-padding-inline">
        <div class="sample-finance-overlay-badge">
          <strong class="sample-finance-overlay-text">Enter the user routine</strong>
        </div>
      </div>
      <div class="sample-finance-padding-inline">
        <po-multiselect name="multiselect" [p-options]="options"> </po-multiselect>
      </div>
    </po-widget>

    <po-widget class="po-lg-4" p-title="Most used payment type" [p-actions]="myActions" [p-height]="180">
      <div class="po-font-subtitle po-text-center">Credit card</div>
      <div class="po-text-center">MasterCard - 5500 0000 0000 0004</div>
    </po-widget>

    <po-widget
      class="po-lg-4"
      p-primary-label="Details"
      p-tag="Revenue"
      p-tag-icon="an an-money"
      p-title="Highest revenue in the month considering Marketing and Sales"
      [p-height]="180"
      [p-primary]="true"
      (p-primary-action)="openModal('savings')"
    >
      <div class="po-font-subtitle po-text-center">$2.000,00</div>
      <div class="po-text-center">05/03/2018</div>
    </po-widget>
  </div>
</div>

<po-modal #detailsModal [p-title]="titleDetailsModal">
  <po-table [p-columns]="columnsDetails" [p-items]="itemsDetails" [p-hide-table-search]="false"> </po-table>
</po-modal>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-widget-finance-dashboard/sample-po-widget-finance-dashboard.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';

import { PoModalComponent, PoMultiselectOption, PoNotificationService, PoTableColumn } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-widget-finance-dashboard',
  templateUrl: './sample-po-widget-finance-dashboard.component.html',
  styleUrls: ['./sample-po-widget-finance-dashboard.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoWidgetFinanceDashboardComponent {
  private readonly poNotification = inject(PoNotificationService);

  @ViewChild('detailsModal', { static: true }) detailsModalElement: PoModalComponent;

  paymentLink: string = 'https://www.google.com.br/search?q=days+to+payment';
  itemsDetails: Array<any>;
  titleDetailsModal: string;
  typeChart: string = 'line';
  myActions = [
    { label: 'Detail', icon: 'an an-align-top', action: this.showAction.bind(this) },
    { label: 'Remove', icon: 'an an-trash', type: 'danger', action: this.showAction.bind(this) }
  ];

  options: Array<PoMultiselectOption> = [
    { value: 'poMultiselect1', label: 'Admin' },
    { value: 'poMultiselect2', label: 'User' }
  ];

  public readonly columnsDetails: Array<PoTableColumn> = [
    { property: 'dateUpdate', label: 'Date update', type: 'date' },
    { property: 'statement', label: 'Statement', type: 'currency' }
  ];

  public readonly itemsAccountDetails: Array<any> = [
    { dateUpdate: '03-05-2018', statement: '-56.45' },
    { dateUpdate: '02-05-2018', statement: '-14.99' },
    { dateUpdate: '02-05-2018', statement: '-657.56' },
    { dateUpdate: '12-05-2017', statement: '3547.29' }
  ];

  public readonly itemsSavingsDetails: Array<any> = [
    { dateUpdate: '03-05-2018', statement: '-300' },
    { dateUpdate: '03-05-2018', statement: '2000' },
    { dateUpdate: '02-05-2018', statement: '1500' },
    { dateUpdate: '02-05-2018', statement: '-200' },
    { dateUpdate: '12-05-2017', statement: '2000' }
  ];

  openModal(type) {
    switch (type) {
      case 'savings':
        this.titleDetailsModal = 'Revenue - Details';
        this.itemsDetails = this.itemsSavingsDetails;
        this.detailsModalElement.open();
        break;
      case 'account':
        this.titleDetailsModal = 'Total savings - Details';
        this.itemsDetails = this.itemsAccountDetails;
        this.detailsModalElement.open();
        break;
    }
  }

  openExternalLink(url) {
    window.open(url, '_blank');
  }

  private showAction(): any {
    this.poNotification.success(\`Action clicked\`);
  }
}
`),og()()(),Sl(21,"po-tab",10)(22,"div")(23,"label",6),eN(24,"sample-po-widget-finance-dashboard/sample-po-widget-finance-dashboard.component.css"),og(),Sl(25,"pre",11),eN(26,`.sample-finance-row-gap {
  row-gap: 1rem;
}

.sample-finance-actions {
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
}

.sample-finance-total-value {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.sample-finance-padding-inline {
  padding-inline: 0.5rem;
}

.sample-finance-overlay-badge {
  margin-bottom: 0.5rem;
  display: inline-block;
  background-color: black;
  padding: 0.5rem;
  border-radius: 3px;
  opacity: 0.85;
}

.sample-finance-overlay-text {
  color: white;
}
`),og()()()()(),Sl(27,"div",12),Wl(28,"sample-po-widget-finance-dashboard"),og(),Wl(29,"hr")),l&2&&(Lp(5),$x("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,Ne,i.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,Pe],encapsulation:2})}return o})();var Ue=o=>({customTemplate:o,widthCustomTemplate:"40%"}),He=()=>({hideExpand:true,hideExportCsv:true,hideExportImage:true,hideTableDetails:true}),je=o=>({header:o}),Je=()=>({label:"Angular",data:100}),Ge=()=>({label:"React",data:10}),Qe=(o,k)=>[o,k];function Ke(o,k){o&1&&Wl(0,"po-chart",8),o&2&&nw("p-options",fN(3,je,dN(2,He)))("p-series",hN(7,Qe,dN(5,Je),dN(6,Ge)));}function Xe(o,k){if(o&1&&(Sl(0,"li"),eN(1),og()),o&2){let p=k.$implicit;Lp(),yw(p);}}var Te=(()=>{class o{poModal;help;label;technologies=["Angular","Typescript","React","Babel","Jasmine","Vue"];value;ngOnInit(){this.showAngular();}showAngular(){this.label="Angular",this.value=`Angular is a javascript framework mantained by Google and successor of the Angular.js.
    In this latest version, we can use all the features of the framework, for example: data bindings, components,
    modules, typescript and much more.`,this.help="https://angular.io/";}showJavascriptTechnologies(){this.poModal.open();}showTypescript(){this.label="Typescript",this.value=`Typescript allows to write JavaScript in an easier way.
    Typescript is a super set of JavaScript that compiles for simple JavaScript. Any browser.
    Any host. Any operating system. Open code.`,this.help="https://www.typescriptlang.org/";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-widget-card"]],viewQuery:function(l,i){if(l&1&&ql(Yo,7),l&2){let m;lo(m=uo())&&(i.poModal=m.first);}},standalone:false,decls:24,vars:6,consts:[["avatar",""],[1,"po-row"],["p-height","300","p-primary-label","Angular","p-secondary-label","Typescript","p-title","Javascript technologies",1,"po-lg-6",3,"p-primary-action","p-secondary-action","p-title-action","p-help"],[3,"p-label","p-value"],["p-title","Apps Enterprise","p-tag","Angular v17+","p-tag-position","top","p-height","300","p-help","https://angular.dev/",1,"po-lg-6",3,"p-avatar"],[1,"po-pl-3","po-pt-1"],["p-title","Javascript Technologies"],[1,"po-ml-3"],["p-height","260",3,"p-options","p-series"]],template:function(l,i){if(l&1&&(Sl(0,"div",1)(1,"po-widget",2),ft("p-primary-action",function(){return i.showAngular()})("p-secondary-action",function(){return i.showTypescript()})("p-title-action",function(){return i.showJavascriptTechnologies()}),Wl(2,"po-info",3),og(),Sl(3,"po-widget",4)(4,"div"),eN(5," Angular: The default choice for large-scale applications, such as banking and government systems, due to its structured architecture and native TypeScript support. "),Sl(6,"div",5)(7,"ul")(8,"li"),eN(9,"Out-of-the-Box"),og(),Sl(10,"li"),eN(11,"Standardized and Opinion-Based Architecture"),og(),Sl(12,"li"),eN(13,"Next Generation Reactivity (Signals)"),og(),Sl(14,"li"),eN(15,"Focus on Enterprise and Security"),og()()()(),JE(16,Ke,1,10,"ng-template",null,0,bN),og()(),Sl(18,"po-modal",6),eN(19," There are several Javascript technologies that help us in the construction of fast and dynamic screens, among them we can mention: "),Sl(20,"div",7)(21,"ul"),gx(22,Xe,2,1,"li",null,px),og()()()),l&2){let m=Nx(17);Lp(),nw("p-help",i.help),Lp(),nw("p-label",i.label)("p-value",i.value),Lp(),nw("p-avatar",fN(4,Ue,m)),Lp(19),mx(i.technologies);}},dependencies:[K3e,Ghe,Yo,fNe],encapsulation:2,changeDetection:1})}return o})();var Ze=o=>({"docs-sample-code-tabs":o}),Me=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-widget-card-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Widget - Card"),og(),Sl(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-widget-card/sample-po-widget-card.component.html"),og(),Sl(13,"pre",7),eN(14,`<div class="po-row">
  <po-widget
    class="po-lg-6"
    p-height="300"
    p-primary-label="Angular"
    p-secondary-label="Typescript"
    p-title="Javascript technologies"
    [p-help]="help"
    (p-primary-action)="showAngular()"
    (p-secondary-action)="showTypescript()"
    (p-title-action)="showJavascriptTechnologies()"
  >
    <po-info [p-label]="label" [p-value]="value"> </po-info>
  </po-widget>

  <po-widget
    p-title="Apps Enterprise"
    p-tag="Angular v17+"
    p-tag-position="top"
    class="po-lg-6"
    p-height="300"
    p-help="https://angular.dev/"
    [p-avatar]="{ customTemplate: avatar, widthCustomTemplate: '40%' }"
  >
    <div>
      Angular: The default choice for large-scale applications, such as banking and government systems, due to its
      structured architecture and native TypeScript support.
      <div class="po-pl-3 po-pt-1">
        <ul>
          <li>Out-of-the-Box</li>
          <li>Standardized and Opinion-Based Architecture</li>
          <li>Next Generation Reactivity (Signals)</li>
          <li>Focus on Enterprise and Security</li>
        </ul>
      </div>
    </div>

    <ng-template #avatar>
      <po-chart
        p-height="260"
        [p-options]="{
          header: { hideExpand: true, hideExportCsv: true, hideExportImage: true, hideTableDetails: true }
        }"
        [p-series]="[
          { label: 'Angular', data: 100 },
          { label: 'React', data: 10 }
        ]"
      >
      </po-chart>
    </ng-template>
  </po-widget>
</div>

<po-modal p-title="Javascript Technologies">
  There are several Javascript technologies that help us in the construction of fast and dynamic screens, among them we
  can mention:

  <div class="po-ml-3">
    <ul>
      @for (technology of technologies; track technology) {
        <li>{ { technology }}</li>
      }
    </ul>
  </div>
</po-modal>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-widget-card/sample-po-widget-card.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';

import { PoModalComponent } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-widget-card',
  templateUrl: './sample-po-widget-card.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoWidgetCardComponent implements OnInit {
  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;

  help: string;
  label: string;
  technologies: Array<string> = ['Angular', 'Typescript', 'React', 'Babel', 'Jasmine', 'Vue'];
  value: string;

  ngOnInit() {
    this.showAngular();
  }

  showAngular() {
    this.label = 'Angular';
    this.value = \`Angular is a javascript framework mantained by Google and successor of the Angular.js.
    In this latest version, we can use all the features of the framework, for example: data bindings, components,
    modules, typescript and much more.\`;
    this.help = 'https://angular.io/';
  }

  showJavascriptTechnologies() {
    this.poModal.open();
  }

  showTypescript() {
    this.label = 'Typescript';
    this.value = \`Typescript allows to write JavaScript in an easier way.
    Typescript is a super set of JavaScript that compiles for simple JavaScript. Any browser.
    Any host. Any operating system. Open code.\`;
    this.help = 'https://www.typescriptlang.org/';
  }
}
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-widget-card"),og(),Wl(23,"hr")),l&2&&(Lp(5),$x("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,Ze,i.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,Te],encapsulation:2})}return o})();var De=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-widget-doc"]],standalone:false,decls:1341,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/guides/grid-system"],["href","https://www.w3.org/WAI/WCAG21/Understanding/name-role-value"],["href","https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-enhanced"],["href","https://www.w3.org/WAI/WCAG21/Understanding/keyboard"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","Array<PoPopupAction>"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","PoWidgetAvatar"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","false"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","number"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","PoTagType"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","TemplateRef<any>"]],template:function(l,i){l&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),eN(3,"import { PoWidgetModule } from '@po-ui/ng-components';"),og()(),Sl(4,"div",2)(5,"p"),eN(6,"M\xF3dulo do componente po-widget"),og()(),Sl(7,"h3",3),eN(8,"Componente"),og(),Sl(9,"h4",4)(10,"code",5),eN(11,"PoWidgetComponent"),og()(),Sl(12,"div",2)(13,"p"),eN(14,"O componente "),Sl(15,"code"),eN(16,"po-widget"),og(),eN(17," \xE9 recomendado para exibi\xE7\xE3o de "),Sl(18,"em"),eN(19,"dashboards"),og(),eN(20,`, podendo ser utilizado
para incluir v\xE1rios tipos de conte\xFAdo como: gr\xE1ficos, tabelas, grids e imagens.`),og(),Sl(21,"p"),eN(22,`Al\xE9m da exibi\xE7\xE3o de conte\xFAdos, este componente possibilita adicionar a\xE7\xF5es e um link
para ajuda, como tamb\xE9m possibilita ser utilizado com ou sem sombra.`),og(),Sl(23,"p"),eN(24,"Para controlar sua largura, \xE9 poss\xEDvel utilizar o "),Sl(25,"a",6),eN(26,"Grid System"),og(),eN(27,` para um maior
controle de seu redimensionamento, assim possibilitando o tratamento para diferentes resolu\xE7\xF5es.`),og(),Sl(28,"h4"),eN(29,"Boas pr\xE1ticas"),og(),Sl(30,"p"),eN(31,"Utilize um tamanho m\xEDnimo de largura de aproximadamente "),Sl(32,"code"),eN(33,"18.75rem"),og(),eN(34," no componente."),og(),Sl(35,"h4"),eN(36,"Acessibilidade tratada no componente"),og(),Sl(37,"p"),eN(38,"Algumas diretrizes de acessibilidade j\xE1 s\xE3o tratadas no componente, internamente, e n\xE3o podem ser alteradas. S\xE3o elas:"),og(),Sl(39,"ul")(40,"li"),eN(41,"Utiliza medidas relativas, para se adequar \xE0s prefer\xEAncias e necessidades de quem for utilizar o sistema."),og(),Sl(42,"li"),eN(43,"Desenvolvido com uso de controles padr\xF5es HTML, o que permite a identifica\xE7\xE3o na interface por tecnologias assistivas. (WCAG "),Sl(44,"a",7),eN(45,"4.1.2: Name, Role, Value"),og(),eN(46,")"),og(),Sl(47,"li"),eN(48,"O foco \xE9 vis\xEDvel e possui uma espessura superior a 2 pixels CSS, n\xE3o ficando escondido por outros elementos da tela. (WCAG "),Sl(49,"a",8),eN(50,"2.4.12: Focus Appearance"),og(),eN(51,")"),og(),Sl(52,"li"),eN(53,"Quando selecion\xE1vel, prev\xEA intera\xE7\xE3o por teclado, podendo ser selecionado atrav\xE9s da tecla space (WCAG "),Sl(54,"a",9),eN(55,"2.4.1 - Keyboard"),og(),eN(56,")"),og()(),Sl(57,"h4"),eN(58,"Tokens customiz\xE1veis"),og(),Sl(59,"p"),eN(60,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),og(),Sl(61,"blockquote")(62,"p"),eN(63,"Para maiores informa\xE7\xF5es, acesse o guia "),Sl(64,"a",10),eN(65,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),eN(66,"."),og()(),Sl(67,"table")(68,"thead")(69,"tr")(70,"th"),eN(71,"Propriedade"),og(),Sl(72,"th"),eN(73,"Descri\xE7\xE3o"),og(),Sl(74,"th"),eN(75,"Valor Padr\xE3o"),og()()(),Sl(76,"tbody")(77,"tr")(78,"td")(79,"strong"),eN(80,"Default Values"),og()(),Wl(81,"td")(82,"td"),og(),Sl(83,"tr")(84,"td")(85,"code"),eN(86,"--font-family"),og()(),Sl(87,"td"),eN(88,"Fam\xEDlia tipogr\xE1fica usada"),og(),Sl(89,"td")(90,"code"),eN(91,"var(--font-family-theme) "),og()()(),Sl(92,"tr")(93,"td")(94,"code"),eN(95,"--font-size"),og()(),Sl(96,"td"),eN(97,"Tamanho da fonte"),og(),Sl(98,"td")(99,"code"),eN(100,"var(--font-size-sm)"),og()()(),Sl(101,"tr")(102,"td")(103,"code"),eN(104,"--font-weight"),og()(),Sl(105,"td"),eN(106,"Peso da fonte"),og(),Sl(107,"td")(108,"code"),eN(109,"var(--font-weight-bold)"),og()()(),Sl(110,"tr")(111,"td")(112,"code"),eN(113,"--font-color"),og()(),Sl(114,"td"),eN(115,"Cor da fonte"),og(),Sl(116,"td")(117,"code"),eN(118,"var(--color-neutral-dark-95)"),og()()(),Sl(119,"tr")(120,"td")(121,"code"),eN(122,"--padding"),og(),eN(123," - "),Sl(124,"code"),eN(125,"@deprecated 21.x.x"),og()(),Sl(126,"td"),eN(127,"Preenchimento do componente"),og(),Sl(128,"td")(129,"code"),eN(130,"1rem"),og()()(),Sl(131,"tr")(132,"td")(133,"code"),eN(134,"--padding-header"),og()(),Sl(135,"td"),eN(136,"Preenchimento do header"),og(),Sl(137,"td")(138,"code"),eN(139,"var(--spacing-sm) var(--spacing-sm) var(--spacing-xs) var(--spacing-sm)"),og()()(),Sl(140,"tr")(141,"td")(142,"code"),eN(143,"--padding-body"),og()(),Sl(144,"td"),eN(145,"Preenchimento do body"),og(),Sl(146,"td")(147,"code"),eN(148,"var(--spacing-xs) var(--spacing-sm) var(--spacing-xs) var(--spacing-sm)"),og()()(),Sl(149,"tr")(150,"td")(151,"code"),eN(152,"--padding-avatar"),og()(),Sl(153,"td"),eN(154,"Preenchimento do avatar"),og(),Sl(155,"td")(156,"code"),eN(157,"var(--spacing-sm) 0 var(--spacing-xs) var(--spacing-sm)"),og()()(),Sl(158,"tr")(159,"td")(160,"code"),eN(161,"--padding-footer"),og()(),Sl(162,"td"),eN(163,"Preenchimento do footer"),og(),Sl(164,"td")(165,"code"),eN(166,"var(--spacing-xs) var(--spacing-sm) var(--spacing-sm) var(--spacing-sm)"),og()()(),Sl(167,"tr")(168,"td")(169,"code"),eN(170,"--border-radius"),og()(),Sl(171,"td"),eN(172,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),og(),Sl(173,"td")(174,"code"),eN(175,"var(--border-radius-md)"),og()()(),Sl(176,"tr")(177,"td")(178,"code"),eN(179,"--border-width"),og()(),Sl(180,"td"),eN(181,"Cont\xE9m o valor da largura dos cantos do elemento\xA0"),og(),Sl(182,"td")(183,"code"),eN(184,"var(--border-width-sm)"),og()()(),Sl(185,"tr")(186,"td")(187,"code"),eN(188,"--border-color"),og()(),Sl(189,"td"),eN(190,"Cor da borda"),og(),Sl(191,"td")(192,"code"),eN(193,"var(--color-neutral-light-20)"),og()()(),Sl(194,"tr")(195,"td")(196,"code"),eN(197,"--background"),og()(),Sl(198,"td"),eN(199,"Cor de background"),og(),Sl(200,"td")(201,"code"),eN(202,"var(--color-neutral-light-00)"),og()()(),Sl(203,"tr")(204,"td")(205,"code"),eN(206,"--shadow"),og()(),Sl(207,"td"),eN(208,"Cont\xE9m o valor da sombra do elemento"),og(),Sl(209,"td")(210,"code"),eN(211,"var(--shadow-md)"),og()()(),Sl(212,"tr")(213,"td")(214,"strong"),eN(215,"Hover"),og()(),Wl(216,"td")(217,"td"),og(),Sl(218,"tr")(219,"td")(220,"code"),eN(221,"--border-color-hover"),og()(),Sl(222,"td"),eN(223,"Cor da borda no estado hover"),og(),Sl(224,"td")(225,"code"),eN(226,"var(--color-action-hover)"),og()()(),Sl(227,"tr")(228,"td")(229,"strong"),eN(230,"Focused"),og()(),Wl(231,"td")(232,"td"),og(),Sl(233,"tr")(234,"td")(235,"code"),eN(236,"--color-focused"),og()(),Sl(237,"td"),eN(238,"Cor principal no estado de focus"),og(),Sl(239,"td")(240,"code"),eN(241,"var(--color-action-default)"),og()()(),Sl(242,"tr")(243,"td")(244,"code"),eN(245,"--outline-color-focused"),og(),eN(246," \xA0"),og(),Sl(247,"td"),eN(248,"Cor do outline do estado de focus"),og(),Sl(249,"td")(250,"code"),eN(251,"var(--color-action-focus)"),og()()()()()(),Sl(252,"div",11)(253,"h4",12),eN(254,"Seletor"),og(),Sl(255,"pre",13),eN(256,`<po-widget
    p-actions="Array<PoPopupAction>"
    p-avatar="PoWidgetAvatar"
    p-background="string"
    (p-click)="EventEmitter"
    p-danger-primary-action="false"
    p-danger-secondary-action="false"
    p-disabled="boolean"
    p-height="number"
    p-help="string"
    p-kind-primary-action="string"
    p-kind-secondary-action="string"
    p-no-shadow="boolean"
    (p-on-disabled)="EventEmitter"
    p-primary="boolean"
    (p-primary-action)="EventEmitter"
    p-primary-label="string"
    (p-secondary-action)="EventEmitter"
    p-secondary-label="string"
    (p-setting)="EventEmitter"
    p-size="string"
    p-tag-icon="string | TemplateRef<void>"
    p-tag="string"
    p-tag-position="string"
    p-tag-type="PoTagType | string"
    p-title="string"
    (p-title-action)="EventEmitter" >
</po-widget>
`),og()(),Sl(257,"h4",14),eN(258,"Propriedades"),og(),Sl(259,"table",15)(260,"tr",16)(261,"th",17),eN(262,"Nome"),og(),Sl(263,"th",17),eN(264,"Tipo"),og(),Sl(265,"th",17),eN(266,"Padr\xE3o"),og(),Sl(267,"th",17),eN(268,"Descri\xE7\xE3o"),og()(),Sl(269,"tr",18)(270,"td",19)(271,"div",20)(272,"span",21),eN(273," p-actions"),Wl(274,"br"),og()()(),Sl(275,"td",22)(276,"code",23),eN(277,"Array<PoPopupAction>"),og()(),Sl(278,"td",24),eN(279,"-"),og(),Sl(280,"td",25)(281,"em")(282,"strong"),eN(283,"(opcional)"),og()(),Sl(284,"p"),eN(285,`Lista de a\xE7\xF5es exibidas no header do componente.
As propriedades das a\xE7\xF5es seguem a interface `),Sl(286,"code"),eN(287,"PoPopupAction"),og(),eN(288,"."),og()()(),Sl(289,"tr",18)(290,"td",19)(291,"div",20)(292,"span",21),eN(293," p-avatar"),Wl(294,"br"),og()()(),Sl(295,"td",22)(296,"code",26),eN(297,"PoWidgetAvatar"),og()(),Sl(298,"td",24),eN(299,"-"),og(),Sl(300,"td",25)(301,"em")(302,"strong"),eN(303,"(opcional)"),og()(),Sl(304,"p"),eN(305,"Define o avatar a ser exibido \xE0 esquerda no Widget."),og()()(),Sl(306,"tr",18)(307,"td",19)(308,"div",20)(309,"span",21),eN(310," p-background"),Wl(311,"br"),og()()(),Sl(312,"td",22)(313,"code",27),eN(314,"string"),og()(),Sl(315,"td",24),eN(316,"-"),og(),Sl(317,"td",25)(318,"em")(319,"strong"),eN(320,"(opcional)"),og()(),Sl(321,"p"),eN(322,"Define uma imagem de fundo."),og(),Sl(323,"blockquote")(324,"p"),eN(325,"Se a imagem escolhida intervir na legibilidade do texto contido no "),Sl(326,"code"),eN(327,"p-widget"),og(),eN(328,`,
pode-se utilizar a propriedade `),Sl(329,"code"),eN(330,"p-primary"),og(),eN(331," em conjunto para que os textos fiquem na cor branca."),og()()()(),Sl(332,"tr",18)(333,"td",19)(334,"div",28)(335,"span",29),eN(336," (p-click)"),Wl(337,"br"),og()()(),Sl(338,"td",22)(339,"code",30),eN(340,"EventEmitter"),og()(),Sl(341,"td",24),eN(342,"-"),og(),Sl(343,"td",25)(344,"em")(345,"strong"),eN(346,"(opcional)"),og()(),Sl(347,"p"),eN(348,"Evento disparado quando o usu\xE1rio clicar no componente."),og(),Sl(349,"blockquote")(350,"p"),eN(351,"Quando este evento est\xE1 em uso, uma sombra (shadow) \xE9 aplicada automaticamente ao componente."),og()()()(),Sl(352,"tr",18)(353,"td",19)(354,"div",20)(355,"span",21),eN(356," p-danger-primary-action"),Wl(357,"br"),og()()(),Sl(358,"td",22)(359,"code",31),eN(360,"false"),og()(),Sl(361,"td",24)(362,"p")(363,"code"),eN(364,"false"),og()()(),Sl(365,"td",25)(366,"em")(367,"strong"),eN(368,"(opcional)"),og()(),Sl(369,"p"),eN(370,"Caso verdadeiro o bot\xE3o da a\xE7\xE3o "),Sl(371,"code"),eN(372,"p-primary-label"),og(),eN(373," ativar\xE1 o modo "),Sl(374,"code"),eN(375,"danger"),og(),eN(376,"."),og(),Sl(377,"blockquote")(378,"p"),eN(379,"Incompat\xEDvel com o tipo "),Sl(380,"strong"),eN(381,"tertiary"),og(),eN(382," da propriedade "),Sl(383,"code"),eN(384,"p-kind-primary-action"),og(),eN(385,"."),og()()()(),Sl(386,"tr",18)(387,"td",19)(388,"div",20)(389,"span",21),eN(390," p-danger-secondary-action"),Wl(391,"br"),og()()(),Sl(392,"td",22)(393,"code",31),eN(394,"false"),og()(),Sl(395,"td",24)(396,"p")(397,"code"),eN(398,"false"),og()()(),Sl(399,"td",25)(400,"em")(401,"strong"),eN(402,"(opcional)"),og()(),Sl(403,"p"),eN(404,"Caso verdadeiro o bot\xE3o da a\xE7\xE3o "),Sl(405,"code"),eN(406,"p-secondary-label"),og(),eN(407," ativar\xE1 o modo "),Sl(408,"code"),eN(409,"danger"),og(),eN(410,"."),og(),Sl(411,"blockquote")(412,"p"),eN(413,"Incompat\xEDvel com o tipo "),Sl(414,"strong"),eN(415,"tertiary"),og(),eN(416," da propriedade "),Sl(417,"code"),eN(418,"p-kind-primary-action"),og(),eN(419,"."),og()()()(),Sl(420,"tr",18)(421,"td",19)(422,"div",20)(423,"span",21),eN(424," p-disabled"),Wl(425,"br"),og()()(),Sl(426,"td",22)(427,"code",32),eN(428,"boolean"),og()(),Sl(429,"td",24)(430,"p")(431,"code"),eN(432,"false"),og()()(),Sl(433,"td",25)(434,"em")(435,"strong"),eN(436,"(opcional)"),og()(),Sl(437,"p"),eN(438,"Desabilita o componente."),og()()(),Sl(439,"tr",18)(440,"td",19)(441,"div",20)(442,"span",21),eN(443," p-height"),Wl(444,"br"),og()()(),Sl(445,"td",22)(446,"code",33),eN(447,"number"),og()(),Sl(448,"td",24),eN(449,"-"),og(),Sl(450,"td",25)(451,"em")(452,"strong"),eN(453,"(opcional)"),og()(),Sl(454,"p"),eN(455,"Define a altura do componente."),og(),Sl(456,"blockquote")(457,"p"),eN(458,"Caso n\xE3o seja informado valor, a propriedade ir\xE1 assumir o tamanho do conte\xFAdo."),og()()()(),Sl(459,"tr",18)(460,"td",19)(461,"div",20)(462,"span",21),eN(463," p-help"),Wl(464,"br"),og()()(),Sl(465,"td",22)(466,"code",27),eN(467,"string"),og()(),Sl(468,"td",24),eN(469,"-"),og(),Sl(470,"td",25)(471,"em")(472,"strong"),eN(473,"(opcional)"),og()(),Sl(474,"p"),eN(475,"Link de ajuda inclu\xEDdo no menu de a\xE7\xF5es do header."),og()()(),Sl(476,"tr",18)(477,"td",19)(478,"div",20)(479,"span",21),eN(480," p-kind-primary-action"),Wl(481,"br"),og()()(),Sl(482,"td",22)(483,"code",27),eN(484,"string"),og()(),Sl(485,"td",24)(486,"p")(487,"code"),eN(488,"tertiary"),og()()(),Sl(489,"td",25)(490,"em")(491,"strong"),eN(492,"(opcional)"),og()(),Sl(493,"p"),eN(494,"Define o estilo do bot\xE3o da a\xE7\xE3o "),Sl(495,"code"),eN(496,"p-primary-label"),og(),eN(497,", conforme o enum "),Sl(498,"code"),eN(499,"PoButtonKind"),og(),eN(500,"."),og()()(),Sl(501,"tr",18)(502,"td",19)(503,"div",20)(504,"span",21),eN(505," p-kind-secondary-action"),Wl(506,"br"),og()()(),Sl(507,"td",22)(508,"code",27),eN(509,"string"),og()(),Sl(510,"td",24)(511,"p")(512,"code"),eN(513,"tertiary"),og()()(),Sl(514,"td",25)(515,"em")(516,"strong"),eN(517,"(opcional)"),og()(),Sl(518,"p"),eN(519,"Define o estilo do bot\xE3o da a\xE7\xE3o "),Sl(520,"code"),eN(521,"p-secondary-label"),og(),eN(522,", conforme o enum "),Sl(523,"code"),eN(524,"PoButtonKind"),og(),eN(525,"."),og()()(),Sl(526,"tr",18)(527,"td",19)(528,"div",20)(529,"span",21),eN(530," p-no-shadow"),Wl(531,"br"),og()()(),Sl(532,"td",22)(533,"code",32),eN(534,"boolean"),og()(),Sl(535,"td",24)(536,"p")(537,"code"),eN(538,"true"),og()()(),Sl(539,"td",25)(540,"em")(541,"strong"),eN(542,"(opcional)"),og()(),Sl(543,"p"),eN(544,"Desabilita a sombra do componente quando o mesmo for clic\xE1vel."),og(),Sl(545,"blockquote")(546,"p"),eN(547,"A sombra \xE9 exibida por padr\xE3o apenas quando o evento "),Sl(548,"code"),eN(549,"p-click"),og(),eN(550," est\xE1 definido."),og()()()(),Sl(551,"tr",18)(552,"td",19)(553,"div",28)(554,"span",29),eN(555," (p-on-disabled)"),Wl(556,"br"),og()()(),Sl(557,"td",22)(558,"code",30),eN(559,"EventEmitter"),og()(),Sl(560,"td",24),eN(561,"-"),og(),Sl(562,"td",25)(563,"em")(564,"strong"),eN(565,"(opcional)"),og()(),Sl(566,"p"),eN(567,"Evento disparado quando a propriedade "),Sl(568,"code"),eN(569,"p-disabled"),og(),eN(570," for alterada."),og()()(),Sl(571,"tr",18)(572,"td",19)(573,"div",20)(574,"span",21),eN(575," p-primary"),Wl(576,"br"),og()()(),Sl(577,"td",22)(578,"code",32),eN(579,"boolean"),og()(),Sl(580,"td",24)(581,"p")(582,"code"),eN(583,"false"),og()()(),Sl(584,"td",25)(585,"em")(586,"strong"),eN(587,"(opcional)"),og()(),Sl(588,"p"),eN(589,"Op\xE7\xE3o para que o "),Sl(590,"code"),eN(591,"po-widget"),og(),eN(592," fique em destaque."),og()()(),Sl(593,"tr",18)(594,"td",19)(595,"div",28)(596,"span",29),eN(597," (p-primary-action)"),Wl(598,"br"),og()()(),Sl(599,"td",22)(600,"code",30),eN(601,"EventEmitter"),og()(),Sl(602,"td",24),eN(603,"-"),og(),Sl(604,"td",25)(605,"em")(606,"strong"),eN(607,"(opcional)"),og()(),Sl(608,"p"),eN(609,"Evento disparado ao clicar na a\xE7\xE3o "),Sl(610,"code"),eN(611,"p-primary-label"),og(),eN(612,"."),og()()(),Sl(613,"tr",18)(614,"td",19)(615,"div",20)(616,"span",21),eN(617," p-primary-label"),Wl(618,"br"),og()()(),Sl(619,"td",22)(620,"code",27),eN(621,"string"),og()(),Sl(622,"td",24),eN(623,"-"),og(),Sl(624,"td",25)(625,"em")(626,"strong"),eN(627,"(opcional)"),og()(),Sl(628,"p"),eN(629,"Define o label e exibe a a\xE7\xE3o prim\xE1ria no footer do componente."),og()()(),Sl(630,"tr",18)(631,"td",19)(632,"div",28)(633,"span",29),eN(634," (p-secondary-action)"),Wl(635,"br"),og()()(),Sl(636,"td",22)(637,"code",30),eN(638,"EventEmitter"),og()(),Sl(639,"td",24),eN(640,"-"),og(),Sl(641,"td",25)(642,"em")(643,"strong"),eN(644,"(opcional)"),og()(),Sl(645,"p"),eN(646,"Evento disparado ao clicar na a\xE7\xE3o "),Sl(647,"code"),eN(648,"p-secondary-label"),og(),eN(649,"."),og()()(),Sl(650,"tr",18)(651,"td",19)(652,"div",20)(653,"span",21),eN(654," p-secondary-label"),Wl(655,"br"),og()()(),Sl(656,"td",22)(657,"code",27),eN(658,"string"),og()(),Sl(659,"td",24),eN(660,"-"),og(),Sl(661,"td",25)(662,"em")(663,"strong"),eN(664,"(opcional)"),og()(),Sl(665,"p"),eN(666,"Define o label e exibe a a\xE7\xE3o secund\xE1ria no footer do componente."),og(),Sl(667,"blockquote")(668,"p"),eN(669,"Exibida apenas quando "),Sl(670,"code"),eN(671,"p-primary-label"),og(),eN(672," estiver definida."),og()()()(),Sl(673,"tr",18)(674,"td",19)(675,"div",28)(676,"span",29),eN(677," (p-setting)"),Wl(678,"br"),og()()(),Sl(679,"td",22)(680,"code",30),eN(681,"EventEmitter"),og()(),Sl(682,"td",24),eN(683,"-"),og(),Sl(684,"td",25)(685,"em")(686,"strong"),eN(687,"(opcional)"),og()(),Sl(688,"p"),eN(689,"Evento disparado ao clicar em "),Sl(690,"strong"),eN(691,"Configura\xE7\xF5es"),og(),eN(692," inclu\xEDdo no menu de a\xE7\xF5es do header."),og()()(),Sl(693,"tr",18)(694,"td",19)(695,"div",20)(696,"span",21),eN(697," p-size"),Wl(698,"br"),og()()(),Sl(699,"td",22)(700,"code",27),eN(701,"string"),og()(),Sl(702,"td",24)(703,"p")(704,"code"),eN(705,"medium"),og()()(),Sl(706,"td",25)(707,"em")(708,"strong"),eN(709,"(opcional)"),og()(),Sl(710,"p"),eN(711,"Define o tamanho dos bot\xF5es do componente:"),og(),Sl(712,"ul")(713,"li")(714,"code"),eN(715,"small"),og(),eN(716,": altura de 32px (dispon\xEDvel apenas para acessibilidade AA)."),og(),Sl(717,"li")(718,"code"),eN(719,"medium"),og(),eN(720,": altura de 44px."),og()(),Sl(721,"blockquote")(722,"p"),eN(723,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Sl(724,"code"),eN(725,"medium"),og(),eN(726,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Sl(727,"a",34),eN(728,"po-theme"),og(),eN(729,"."),og()()()(),Sl(730,"tr",18)(731,"td",19)(732,"div",20)(733,"span",21),eN(734," p-tag-icon"),Wl(735,"br"),og()()(),Sl(736,"td",22)(737,"code",27),eN(738,"string "),og(),Sl(739,"code",35),eN(740," TemplateRef<void>"),og()(),Sl(741,"td",24),eN(742,"-"),og(),Sl(743,"td",25)(744,"em")(745,"strong"),eN(746,"(opcional)"),og()(),Sl(747,"p"),eN(748,"Define o \xEDcone exibido ao lado do label da "),Sl(749,"code"),eN(750,"p-tag"),og(),eN(751,"."),og(),Sl(752,"p"),eN(753,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),Sl(754,"a",36),eN(755,"Biblioteca de \xEDcones PO UI"),og(),eN(756,", conforme exemplo:"),og(),Sl(757,"pre")(758,"code"),eN(759,`<po-widget p-tag-icon="an an-user"></po-widget>
`),og()(),Sl(760,"p"),eN(761,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),Sl(762,"em"),eN(763,"Font Awesome"),og(),eN(764,`, desde que a biblioteca
esteja carregada no projeto:`),og(),Sl(765,"pre")(766,"code"),eN(767,`<po-widget p-tag-icon="fa fa-podcast"></po-widget>
`),og()(),Sl(768,"p"),eN(769,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),Sl(770,"code"),eN(771,"TemplateRef"),og(),eN(772,", conforme exemplo abaixo:"),og(),Sl(773,"pre")(774,"code"),eN(775,`<po-widget [p-tag-icon]="template"></po-widget>

<ng-template #template>
  <i class="fa fa-podcast" style="font-size: inherit;"></i>
</ng-template>
`),og()(),Sl(776,"blockquote")(777,"p"),eN(778,"Para o \xEDcone enquadrar corretamente, deve-se utilizar "),Sl(779,"code"),eN(780,"font-size: inherit"),og(),eN(781," caso o \xEDcone utilizado n\xE3o aplique-o."),og()()()(),Sl(782,"tr",18)(783,"td",19)(784,"div",20)(785,"span",21),eN(786," p-tag"),Wl(787,"br"),og()()(),Sl(788,"td",22)(789,"code",27),eN(790,"string"),og()(),Sl(791,"td",24),eN(792,"-"),og(),Sl(793,"td",25)(794,"em")(795,"strong"),eN(796,"(opcional)"),og()(),Sl(797,"p"),eN(798,"Label da tag exibida no header."),og(),Sl(799,"blockquote")(800,"p"),eN(801,`Quando a tag atingir uma largura m\xE1xima de 15rem (240px), ser\xE1 truncado com retic\xEAncias.
O conte\xFAdo completo poder\xE1 ser visualizado ao passar o mouse sobre a tag, por meio do tooltip.`),og()()()(),Sl(802,"tr",18)(803,"td",19)(804,"div",20)(805,"span",21),eN(806," p-tag-position"),Wl(807,"br"),og()()(),Sl(808,"td",22)(809,"code",27),eN(810,"string"),og()(),Sl(811,"td",24)(812,"p")(813,"code"),eN(814,"right"),og()()(),Sl(815,"td",25)(816,"em")(817,"strong"),eN(818,"(opcional)"),og()(),Sl(819,"p"),eN(820,"Define o posicionamento da "),Sl(821,"code"),eN(822,"po-tag"),og(),eN(823," no cabe\xE7alho do Widget:"),og(),Sl(824,"ul")(825,"li")(826,"code"),eN(827,"right"),og(),eN(828,": posicionada no canto superior direito do cabe\xE7alho."),og(),Sl(829,"li")(830,"code"),eN(831,"top"),og(),eN(832,": posicionada \xE0 esquerda, acima do t\xEDtulo (quando houver)."),og(),Sl(833,"li")(834,"code"),eN(835,"bottom"),og(),eN(836,": posicionada \xE0 esquerda, abaixo do t\xEDtulo (quando houver)."),og()()()(),Sl(837,"tr",18)(838,"td",19)(839,"div",20)(840,"span",21),eN(841," p-tag-type"),Wl(842,"br"),og()()(),Sl(843,"td",22)(844,"code",37),eN(845,"PoTagType "),og(),Sl(846,"code",27),eN(847," string"),og()(),Sl(848,"td",24)(849,"p")(850,"code"),eN(851,"success"),og()()(),Sl(852,"td",25)(853,"em")(854,"strong"),eN(855,"(opcional)"),og()(),Sl(856,"p"),eN(857,"Define o tipo da "),Sl(858,"code"),eN(859,"p-tag"),og(),eN(860,", conforme o enum "),Sl(861,"strong"),eN(862,"PoTagType"),og(),eN(863,"."),og(),Sl(864,"p"),eN(865,"Valores v\xE1lidos:"),og(),Sl(866,"ul")(867,"li")(868,"code"),eN(869,"success"),og(),eN(870,": cor verde utilizada para simbolizar sucesso ou \xEAxito."),og(),Sl(871,"li")(872,"code"),eN(873,"warning"),og(),eN(874,": cor amarela que representa aviso ou advert\xEAncia."),og(),Sl(875,"li")(876,"code"),eN(877,"danger"),og(),eN(878,": cor vermelha para erro ou aviso cr\xEDtico."),og(),Sl(879,"li")(880,"code"),eN(881,"info"),og(),eN(882,": cor azul claro que caracteriza conte\xFAdo informativo."),og(),Sl(883,"li")(884,"code"),eN(885,"neutral"),og(),eN(886,": cor cinza claro para uso geral."),og()()()(),Sl(887,"tr",18)(888,"td",19)(889,"div",20)(890,"span",21),eN(891," p-title"),Wl(892,"br"),og()()(),Sl(893,"td",22)(894,"code",27),eN(895,"string"),og()(),Sl(896,"td",24),eN(897,"-"),og(),Sl(898,"td",25)(899,"em")(900,"strong"),eN(901,"(opcional)"),og()(),Sl(902,"p"),eN(903,"T\xEDtulo do componente."),og(),Sl(904,"blockquote")(905,"p"),eN(906,`Quando o conte\xFAdo exceder o espa\xE7o dispon\xEDvel, o texto ser\xE1 truncado com retic\xEAncias. O conte\xFAdo completo poder\xE1
ser visualizado ao passar o mouse sobre a tag, por meio do tooltip.`),og()()()(),Sl(907,"tr",18)(908,"td",19)(909,"div",28)(910,"span",29),eN(911," (p-title-action)"),Wl(912,"br"),og()()(),Sl(913,"td",22)(914,"code",30),eN(915,"EventEmitter"),og()(),Sl(916,"td",24),eN(917,"-"),og(),Sl(918,"td",25)(919,"em")(920,"strong"),eN(921,"(opcional)"),og()(),Sl(922,"p"),eN(923,"Evento disparado ao clicar no t\xEDtulo definido em "),Sl(924,"code"),eN(925,"p-title"),og(),eN(926,"."),og()()()(),Sl(927,"h3"),eN(928,"Interfaces"),og(),Sl(929,"h4",38)(930,"code",5),eN(931,"PoPopupAction"),og()(),Sl(932,"div",2)(933,"p"),eN(934,"Interface para lista de a\xE7\xF5es do componente."),og()(),Sl(935,"h4",14),eN(936,"Propriedades"),og(),Sl(937,"table",15)(938,"tr",16)(939,"th",17),eN(940,"Nome"),og(),Sl(941,"th",17),eN(942,"Tipo"),og(),Sl(943,"th",17),eN(944,"Descri\xE7\xE3o"),og()(),Sl(945,"tr",18)(946,"td",19)(947,"div",20)(948,"span",21),eN(949," action"),Wl(950,"br"),og()()(),Sl(951,"td",22)(952,"code",39),eN(953,"Function"),og()(),Sl(954,"td",25)(955,"em")(956,"strong"),eN(957,"(opcional)"),og()(),Sl(958,"p"),eN(959,"A\xE7\xE3o que ser\xE1 executada, sendo poss\xEDvel passar o nome ou a refer\xEAncia da fun\xE7\xE3o."),og(),Sl(960,"p"),eN(961,"A action tamb\xE9m pode ser executada para o agrupador de subitens quando a a\xE7\xE3o possuir "),Sl(962,"code"),eN(963,"subItems"),og(),eN(964,"."),og(),Sl(965,"blockquote")(966,"p"),eN(967,"Para que a fun\xE7\xE3o seja executada no contexto do componente, utilize "),Sl(968,"em"),eN(969,"bind"),og(),eN(970,`:
`),Sl(971,"code"),eN(972,"action: this.myFunction.bind(this)"),og()()()()(),Sl(973,"tr",18)(974,"td",19)(975,"div",20)(976,"span",21),eN(977," disabled"),Wl(978,"br"),og()()(),Sl(979,"td",22)(980,"code",32),eN(981,"boolean "),og(),Sl(982,"code",39),eN(983," Function"),og()(),Sl(984,"td",25)(985,"em")(986,"strong"),eN(987,"(opcional)"),og()(),Sl(988,"p"),eN(989,"Desabilita a a\xE7\xE3o. Aceita um valor booleano ou uma fun\xE7\xE3o que retorna booleano."),og()()(),Sl(990,"tr",18)(991,"td",19)(992,"div",20)(993,"span",21),eN(994," icon"),Wl(995,"br"),og()()(),Sl(996,"td",22)(997,"code",27),eN(998,"string "),og(),Sl(999,"code",35),eN(1e3," TemplateRef<void>"),og()(),Sl(1001,"td",25)(1002,"em")(1003,"strong"),eN(1004,"(opcional)"),og()(),Sl(1005,"p"),eN(1006,"\xCDcone exibido ao lado esquerdo do r\xF3tulo."),og(),Sl(1007,"p"),eN(1008,"Aceita \xEDcones da "),Sl(1009,"a",36),eN(1010,"Biblioteca de \xEDcones"),og(),eN(1011,`, fontes externas (ex: Font Awesome)
ou um `),Sl(1012,"code"),eN(1013,"TemplateRef"),og(),eN(1014," para \xEDcones customizados."),og(),Sl(1015,"pre")(1016,"code"),eN(1017,`{ label: 'A\xE7\xE3o', icon: 'an an-newspaper' }
`),og()()()(),Sl(1018,"tr",18)(1019,"td",19)(1020,"div",20)(1021,"span",21),eN(1022," label"),Wl(1023,"br"),og()()(),Sl(1024,"td",22)(1025,"code",27),eN(1026,"string"),og()(),Sl(1027,"td",25)(1028,"p"),eN(1029,"R\xF3tulo da a\xE7\xE3o."),og(),Sl(1030,"p"),eN(1031,"A label tamb\xE9m pode representar o agrupador de subitens quando a a\xE7\xE3o possuir "),Sl(1032,"code"),eN(1033,"subItems"),og(),eN(1034,"."),og()()(),Sl(1035,"tr",18)(1036,"td",19)(1037,"div",20)(1038,"span",21),eN(1039," selected"),Wl(1040,"br"),og()()(),Sl(1041,"td",22)(1042,"code",32),eN(1043,"boolean"),og()(),Sl(1044,"td",25)(1045,"em")(1046,"strong"),eN(1047,"(opcional)"),og()(),Sl(1048,"p"),eN(1049,"Define se a a\xE7\xE3o est\xE1 selecionada."),og()()(),Sl(1050,"tr",18)(1051,"td",19)(1052,"div",20)(1053,"span",21),eN(1054," separator"),Wl(1055,"br"),og()()(),Sl(1056,"td",22)(1057,"code",32),eN(1058,"boolean"),og()(),Sl(1059,"td",25)(1060,"em")(1061,"strong"),eN(1062,"(opcional)"),og()(),Sl(1063,"p"),eN(1064,"Atribui uma linha separadora acima do item."),og()()(),Sl(1065,"tr",18)(1066,"td",19)(1067,"div",20)(1068,"span",21),eN(1069," subItems"),Wl(1070,"br"),og()()(),Sl(1071,"td",22)(1072,"code",23),eN(1073,"Array<PoPopupAction>"),og()(),Sl(1074,"td",25)(1075,"em")(1076,"strong"),eN(1077,"(opcional)"),og()(),Sl(1078,"p"),eN(1079,"Define uma lista de subitens para cria\xE7\xE3o de menus aninhados."),og(),Sl(1080,"p"),eN(1081,`Ao definir esta propriedade, o item exibir\xE1 um \xEDcone indicador de subn\xEDvel.
Recomenda-se utilizar no m\xE1ximo tr\xEAs n\xEDveis hier\xE1rquicos para garantir a usabilidade.`),og(),Sl(1082,"blockquote")(1083,"p"),eN(1084,"As propriedades "),Sl(1085,"code"),eN(1086,"disabled"),og(),eN(1087,", "),Sl(1088,"code"),eN(1089,"type"),og(),eN(1090," e "),Sl(1091,"code"),eN(1092,"visible"),og(),eN(1093," n\xE3o s\xE3o aplicadas visualmente ao item agrupador."),og()(),Sl(1094,"blockquote")(1095,"p"),eN(1096,"Quando "),Sl(1097,"code"),eN(1098,"url"),og(),eN(1099," \xE9 informada em um agrupador, o redirecionamento ter\xE1 prioridade e os subitens n\xE3o ser\xE3o abertos."),og()(),Sl(1100,"blockquote")(1101,"p"),eN(1102,"Em subn\xEDveis aninhados, o "),Sl(1103,"code"),eN(1104,"icon"),og(),eN(1105," do agrupador \xE9 substitu\xEDdo pelo indicador de navega\xE7\xE3o (seta)."),og()()()(),Sl(1106,"tr",18)(1107,"td",19)(1108,"div",20)(1109,"span",21),eN(1110," type"),Wl(1111,"br"),og()()(),Sl(1112,"td",22)(1113,"code",27),eN(1114,"string"),og()(),Sl(1115,"td",25)(1116,"em")(1117,"strong"),eN(1118,"(opcional)"),og()(),Sl(1119,"p"),eN(1120,"Define a cor do item."),og(),Sl(1121,"p"),eN(1122,"Valores v\xE1lidos:"),og(),Sl(1123,"ul")(1124,"li")(1125,"code"),eN(1126,"default"),og()(),Sl(1127,"li")(1128,"code"),eN(1129,"danger"),og()()()()(),Sl(1130,"tr",18)(1131,"td",19)(1132,"div",20)(1133,"span",21),eN(1134," url"),Wl(1135,"br"),og()()(),Sl(1136,"td",22)(1137,"code",27),eN(1138,"string"),og()(),Sl(1139,"td",25)(1140,"em")(1141,"strong"),eN(1142,"(opcional)"),og()(),Sl(1143,"p"),eN(1144,"URL para redirecionamento. Aceita rotas internas e links externos."),og(),Sl(1145,"p"),eN(1146,`A url tamb\xE9m pode ser configurada para o agrupador de subitens.
Entretanto, quando a `),Sl(1147,"code"),eN(1148,"url"),og(),eN(1149," \xE9 informada em um agrupador, o clique "),Sl(1150,"strong"),eN(1151,"n\xE3o abrir\xE1 os subitens"),og(),eN(1152,`, pois o item ser\xE1
tratado como um link e o redirecionamento ter\xE1 prioridade sobre a exibi\xE7\xE3o da lista.`),og(),Sl(1153,"blockquote")(1154,"p"),eN(1155,"Quando informada, tem prioridade sobre a propriedade "),Sl(1156,"code"),eN(1157,"action"),og(),eN(1158,"."),og()()()(),Sl(1159,"tr",18)(1160,"td",19)(1161,"div",20)(1162,"span",21),eN(1163," visible"),Wl(1164,"br"),og()()(),Sl(1165,"td",22)(1166,"code",32),eN(1167,"boolean "),og(),Sl(1168,"code",39),eN(1169," Function"),og()(),Sl(1170,"td",25)(1171,"em")(1172,"strong"),eN(1173,"(opcional)"),og()(),Sl(1174,"p"),eN(1175,"Define a visibilidade da a\xE7\xE3o. Aceita um valor booleano ou uma fun\xE7\xE3o que retorna booleano."),og()()()(),Sl(1176,"h4",38)(1177,"code",5),eN(1178,"PoWidgetAvatar"),og()(),Sl(1179,"div",2)(1180,"p"),eN(1181,"Interface para defini\xE7\xE3o do avatar no "),Sl(1182,"code"),eN(1183,"po-widget"),og(),eN(1184,"."),og()(),Sl(1185,"h4",14),eN(1186,"Propriedades"),og(),Sl(1187,"table",15)(1188,"tr",16)(1189,"th",17),eN(1190,"Nome"),og(),Sl(1191,"th",17),eN(1192,"Tipo"),og(),Sl(1193,"th",17),eN(1194,"Descri\xE7\xE3o"),og()(),Sl(1195,"tr",18)(1196,"td",19)(1197,"div",20)(1198,"span",21),eN(1199," customTemplate"),Wl(1200,"br"),og()()(),Sl(1201,"td",22)(1202,"code",40),eN(1203,"TemplateRef<any>"),og()(),Sl(1204,"td",25)(1205,"em")(1206,"strong"),eN(1207,"(opcional)"),og()(),Sl(1208,"p"),eN(1209,"Permite a cria\xE7\xE3o de template customizado para o avatar"),og(),Sl(1210,"pre")(1211,"code"),eN(1212,`<po-widget
 [p-avatar]="{ customTemplate: customAvatar }"
/>

<ng-template #customAvatar>
  ...
</ng-template>
`),og()()()(),Sl(1213,"tr",18)(1214,"td",19)(1215,"div",20)(1216,"span",21),eN(1217," size"),Wl(1218,"br"),og()()(),Sl(1219,"td",22)(1220,"code",27),eN(1221,"string"),og()(),Sl(1222,"td",25)(1223,"em")(1224,"strong"),eN(1225,"(opcional)"),og()(),Sl(1226,"p"),eN(1227,"Tamanho de exibi\xE7\xE3o do componente "),Sl(1228,"code"),eN(1229,"po-avatar"),og(),eN(1230,"."),og(),Sl(1231,"p"),eN(1232,"Valores v\xE1lidos:"),og(),Sl(1233,"ul")(1234,"li")(1235,"code"),eN(1236,"xs"),og(),eN(1237," (24x24)"),og(),Sl(1238,"li")(1239,"code"),eN(1240,"sm"),og(),eN(1241," (32x32)"),og(),Sl(1242,"li")(1243,"code"),eN(1244,"md"),og(),eN(1245," (64x64)"),og(),Sl(1246,"li")(1247,"code"),eN(1248,"lg"),og(),eN(1249," (96x96)"),og(),Sl(1250,"li")(1251,"code"),eN(1252,"xl"),og(),eN(1253," (144x144)"),og()()()(),Sl(1254,"tr",18)(1255,"td",19)(1256,"div",20)(1257,"span",21),eN(1258," src"),Wl(1259,"br"),og()()(),Sl(1260,"td",22)(1261,"code",27),eN(1262,"string"),og()(),Sl(1263,"td",25)(1264,"em")(1265,"strong"),eN(1266,"(opcional)"),og()(),Sl(1267,"p"),eN(1268,"Fonte da imagem que pode ser um caminho local ("),Sl(1269,"code"),eN(1270,"./assets/images/logo-black-small.png"),og(),eN(1271,`)
ou um servidor externo (`),Sl(1272,"code"),eN(1273,"https://po-ui.io/assets/images/logo-black-small.png"),og(),eN(1274,")."),og()()(),Sl(1275,"tr",18)(1276,"td",19)(1277,"div",20)(1278,"span",21),eN(1279," widthCustomTemplate"),Wl(1280,"br"),og()()(),Sl(1281,"td",22)(1282,"code",27),eN(1283,"string"),og()(),Sl(1284,"td",25)(1285,"em")(1286,"strong"),eN(1287,"(opcional)"),og()(),Sl(1288,"p"),eN(1289,"Define a largura em porcentagem do "),Sl(1290,"code"),eN(1291,"customTemplate"),og(),eN(1292,"."),og(),Sl(1293,"p"),eN(1294,"O valor m\xE1ximo aceito \xE9 "),Sl(1295,"code"),eN(1296,"50%"),og(),eN(1297,"."),og()()()(),Sl(1298,"h3"),eN(1299,"Enums"),og(),Sl(1300,"h4",4)(1301,"code",5),eN(1302,"PoButtonKind"),og()(),Sl(1303,"div",2)(1304,"p"),eN(1305,"Estilos dispon\xEDveis do button."),og()(),Sl(1306,"h4",14),eN(1307,"Propriedades"),og(),Sl(1308,"table",15)(1309,"tr",16)(1310,"th",17),eN(1311,"Nome"),og(),Sl(1312,"th",17),eN(1313,"Descri\xE7\xE3o"),og()(),Sl(1314,"tr",18)(1315,"td",19)(1316,"div",20)(1317,"span",21),eN(1318," primary"),Wl(1319,"br"),og()()(),Sl(1320,"td",25)(1321,"p"),eN(1322,"Estilo prim\xE1rio, usado para a\xE7\xF5es principais que requerem maior destaque."),og()()(),Sl(1323,"tr",18)(1324,"td",19)(1325,"div",20)(1326,"span",21),eN(1327," secondary"),Wl(1328,"br"),og()()(),Sl(1329,"td",25)(1330,"p"),eN(1331,"Estilo secund\xE1rio, usado como padr\xE3o, para a\xE7\xF5es comuns."),og()()(),Sl(1332,"tr",18)(1333,"td",19)(1334,"div",20)(1335,"span",21),eN(1336," tertiary"),Wl(1337,"br"),og()()(),Sl(1338,"td",25)(1339,"p"),eN(1340,"Estilo terci\xE1rio, ideal para a\xE7\xF5es menos importantes, sem fundo preenchido."),og()()()()());},dependencies:[Ka],encapsulation:2})}return o})();var Ae=(()=>{class o{route;router;sub;hidePoWebSample=true;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(p,l){this.route=p,this.router=l;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let l=p.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:"merge"}),this.activeTab=p;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(l){return new(l||o)(w(Xn),w(En))};static \u0275cmp=Un({type:o,selectors:[["ng-component"]],standalone:false,decls:9,vars:4,consts:[["p-title","Widget",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,i){l&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return i.changeTab("doc")}),Wl(3,"sample-po-widget-doc"),og(),Sl(4,"po-tab",3),ft("p-click",function(){return i.changeTab("web")}),Wl(5,"sample-po-widget-basic-view")(6,"sample-po-widget-labs-view")(7,"sample-po-widget-finance-dashboard-view")(8,"sample-po-widget-card-view"),og()()()),l&2&&(nw("p-actions",i.actions),Lp(2),nw("p-active",i.activeTab==="doc"),Lp(2),nw("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[rNe,Bme,qme,ye,we,_e,Me,De],encapsulation:2})}return o})();var tt=[{path:"",component:Ae}],We=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275mod=fe$1({type:o});static \u0275inj=ue({imports:[hL.forChild(tt),hL]})}return o})();var Ot=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275mod=fe$1({type:o});static \u0275inj=ue({imports:[sr,We]})}return o})();
export{Ot as DocPoWidgetModule};