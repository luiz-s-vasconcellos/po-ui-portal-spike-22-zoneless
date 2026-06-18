import {f as fe$1,u as ue,s as sr,a as uL,C,c3 as Xn,E as En,U as Un,b as f,aW as Yp,ba as yNe,J as zl,an as DO,aH as Ka,b8 as qme,b9 as Yme,H as Il,q as Qx,R as og,a1 as ft,A as Lp,ar as Ux,au as dg,T as nw,bs as uN,aX as G9,aF as $9,aY as z9,aG as mk,aZ as hk,b0 as Qt,b1 as mv,c4 as C3,b4 as F3,cp as Hhe,aJ as qhe,b5 as $he,c9 as Yhe,aB as Dx,aM as ww,aN as QA,bM as dN,aO as Ew,aP as e0,bF as Fw,b6 as Yo,b7 as E3,av as Gl,aw as co,ax as lo,cy as dde,a2 as JE,aQ as hx,aR as fx,bd as Ax,aS as px,a3 as cNe,a7 as lN,B as yw,aD as Xy,aT as eN,aE as Qy,bR as wN}from'./main-FCMDZGSJ.js';var fe=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-widget-basic"]],standalone:false,decls:1,vars:0,template:function(l,i){l&1&&zl(0,"po-widget");},dependencies:[yNe],encapsulation:2,changeDetection:1})}return o})();var Le=o=>({"docs-sample-code-tabs":o}),ye=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-widget-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Widget Basic"),og(),Il(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-widget-basic/sample-po-widget-basic.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-widget></po-widget>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-widget-basic/sample-po-widget-basic.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-widget-basic',
  templateUrl: './sample-po-widget-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoWidgetBasicComponent {}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-widget-basic"),og(),zl(23,"hr")),l&2&&(Lp(5),Ux("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,Le,i.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,fe],encapsulation:2})}return o})();var qe=(o,k)=>({src:o,size:k}),Ce=(()=>{class o{poNotification=f(Yp);action;background;content;height;help;primaryLabel;properties;secondaryLabel;tagIcon;tagLabel;title;actionPopup={action:null,label:""};myActions=[];tagPosition;avatarSrc;avatarSize;propertiesOptions=[{value:"disabled",label:"Disabled"},{value:"primaryWidget",label:"Primary Widget"},{value:"small",label:"small"}];iconList=[{label:"an an-bluetooth",value:"an an-bluetooth"},{label:"an an-heart",value:"an an-heart"},{label:"an an-lightbulb",value:"an an-lightbulb"},{label:"an an-star",value:"an an-star"},{label:"an an-gear",value:"an an-gear"},{label:"an an-globe",value:"an an-globe"},{label:"fa fa-address-card",value:"fa fa-address-card"},{label:"fa fa-bell",value:"fa fa-bell"}];listTagPosition=[{label:"right",value:"right"},{label:"top",value:"top"},{label:"bottom",value:"bottom"}];listAvatarSize=[{label:"xs",value:"xs"},{label:"sm",value:"sm"},{label:"md",value:"md"},{label:"lg",value:"lg"},{label:"xl",value:"xl"}];ngOnInit(){this.restore();}changeAction(p){this.action=p;}addAction(p){this.myActions=[...this.myActions,{label:p.label,action:this.showAction.bind(this,p.action)}],this.actionPopup={action:null,label:""};}restore(){this.background="",this.action="",this.content="",this.height=void 0,this.help="",this.title=void 0,this.primaryLabel=void 0,this.properties=[],this.myActions=[],this.secondaryLabel=void 0,this.tagLabel=void 0,this.tagIcon=void 0,this.actionPopup={action:null,label:""},this.tagPosition=void 0,this.avatarSrc=void 0,this.avatarSize=void 0;}showAction(p){this.poNotification.success(`Action clicked: ${p}`);}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-widget-labs"]],standalone:false,decls:32,vars:39,consts:[["f","ngForm"],[1,"po-row"],[1,"po-sm-12",3,"p-on-disabled","p-primary-action","p-secondary-action","p-setting","p-title-action","p-background","p-disabled","p-size","p-height","p-help","p-primary","p-primary-label","p-secondary-label","p-tag","p-tag-icon","p-tag-position","p-title","p-actions","p-avatar"],["p-label","Action",1,"po-md-6",3,"p-value"],["name","title","p-label","Title","p-clean","",1,"po-md-4",3,"ngModelChange","ngModel"],["name","help","p-label","Help","p-clean","",1,"po-md-4",3,"ngModelChange","ngModel"],["name","height","p-label","Height","p-clean","",1,"po-md-4",3,"ngModelChange","ngModel"],["name","actionAction","p-clean","","p-label","Action",1,"po-md-6",3,"ngModelChange","ngModel"],["name","actionLabel","p-label","Label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add Action",1,"po-lg-2","po-md-4",3,"p-click","p-disabled"],["name","background","p-clean","","p-help","Ex.: 'http://image.com'; '../../image.png'","p-label","Background","p-clean","",1,"po-md-12",3,"ngModelChange","ngModel"],["name","primaryLabel","p-label","Primary Label","p-clean","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","secondaryLabel","p-label","Secondary Label","p-clean","",1,"po-md-6",3,"ngModelChange","ngModel"],[1,"po-row","sample-widget-align-end"],["name","tagLabel","p-label","Label Tag","p-clean","",1,"po-md-4",3,"ngModelChange","ngModel"],["name","icon","p-label","Icon",1,"po-md-4","po-mt-2",3,"ngModelChange","ngModel","p-options"],["name","tagPosition","p-label","Tag Position",1,"po-md-4","po-mt-2",3,"ngModelChange","ngModel","p-options"],["name","avatarSrc","p-label","Avatar Src","p-help","https://picsum.photos/144/144","p-clean","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","avatarSize","p-label","Avatar Size",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","properties","p-columns","3","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","content","p-label","Content",1,"po-md-12",3,"ngModelChange","ngModel"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(l,i){if(l&1){let m=Dx();Il(0,"div",1)(1,"po-widget",2),ft("p-on-disabled",function(){return i.changeAction("p-on-disabled")})("p-primary-action",function(){return i.changeAction("p-primary-action")})("p-secondary-action",function(){return i.changeAction("p-secondary-action")})("p-setting",function(){return i.changeAction("p-setting")})("p-title-action",function(){return i.changeAction("p-title-action")}),Qx(2),og()(),zl(3,"po-divider"),Il(4,"div",1),zl(5,"po-info",3),og(),zl(6,"po-divider"),Il(7,"form",null,0)(9,"po-input",4),ww("ngModelChange",function(r){return Xy(m),eN(i.title,r)||(i.title=r),Qy(r)}),og(),QA(),Il(10,"po-input",5),ww("ngModelChange",function(r){return Xy(m),eN(i.help,r)||(i.help=r),Qy(r)}),og(),QA(),Il(11,"po-number",6),ww("ngModelChange",function(r){return Xy(m),eN(i.height,r)||(i.height=r),Qy(r)}),og(),QA(),Il(12,"div",1)(13,"po-input",7),ww("ngModelChange",function(r){return Xy(m),eN(i.actionPopup.action,r)||(i.actionPopup.action=r),Qy(r)}),og(),QA(),Il(14,"po-input",8),ww("ngModelChange",function(r){return Xy(m),eN(i.actionPopup.label,r)||(i.actionPopup.label=r),Qy(r)}),og(),QA(),og(),Il(15,"div",1)(16,"po-button",9),ft("p-click",function(){return i.addAction(i.actionPopup)}),og()(),Il(17,"po-input",10),ww("ngModelChange",function(r){return Xy(m),eN(i.background,r)||(i.background=r),Qy(r)}),og(),QA(),Il(18,"po-input",11),ww("ngModelChange",function(r){return Xy(m),eN(i.primaryLabel,r)||(i.primaryLabel=r),Qy(r)}),og(),QA(),Il(19,"po-input",12),ww("ngModelChange",function(r){return Xy(m),eN(i.secondaryLabel,r)||(i.secondaryLabel=r),Qy(r)}),og(),QA(),Il(20,"div",13)(21,"po-input",14),ww("ngModelChange",function(r){return Xy(m),eN(i.tagLabel,r)||(i.tagLabel=r),Qy(r)}),og(),QA(),Il(22,"po-select",15),ww("ngModelChange",function(r){return Xy(m),eN(i.tagIcon,r)||(i.tagIcon=r),Qy(r)}),og(),QA(),Il(23,"po-select",16),ww("ngModelChange",function(r){return Xy(m),eN(i.tagPosition,r)||(i.tagPosition=r),Qy(r)}),og(),QA(),og(),Il(24,"div",1)(25,"po-input",17),ww("ngModelChange",function(r){return Xy(m),eN(i.avatarSrc,r)||(i.avatarSrc=r),Qy(r)}),og(),QA(),Il(26,"po-select",18),ww("ngModelChange",function(r){return Xy(m),eN(i.avatarSize,r)||(i.avatarSize=r),Qy(r)}),og(),QA(),og(),Il(27,"div",1)(28,"po-checkbox-group",19),ww("ngModelChange",function(r){return Xy(m),eN(i.properties,r)||(i.properties=r),Qy(r)}),og(),QA(),og(),Il(29,"po-textarea",20),ww("ngModelChange",function(r){return Xy(m),eN(i.content,r)||(i.content=r),Qy(r)}),og(),QA(),Il(30,"div",1)(31,"po-button",21),ft("p-click",function(){return i.restore()}),og()()();}l&2&&(Lp(),nw("p-background",i.background)("p-disabled",i.properties.includes("disabled"))("p-size",i.properties.includes("small")?"small":"medium")("p-height",i.height)("p-help",i.help)("p-primary",i.properties.includes("primaryWidget"))("p-primary-label",i.primaryLabel)("p-secondary-label",i.secondaryLabel)("p-tag",i.tagLabel)("p-tag-icon",i.tagIcon)("p-tag-position",i.tagPosition)("p-title",i.title)("p-actions",i.myActions)("p-avatar",dN(36,qe,i.avatarSrc,i.avatarSize)),Lp(),dg(" ",i.content," "),Lp(3),nw("p-value",i.action),Lp(4),Ew("ngModel",i.title),e0(),Lp(),Ew("ngModel",i.help),e0(),Lp(),Ew("ngModel",i.height),e0(),Lp(2),Ew("ngModel",i.actionPopup.action),e0(),Lp(),Ew("ngModel",i.actionPopup.label),e0(),Lp(2),nw("p-disabled",!i.actionPopup.action||!i.actionPopup.label),Lp(),Ew("ngModel",i.background),e0(),Lp(),Ew("ngModel",i.primaryLabel),e0(),Lp(),Ew("ngModel",i.secondaryLabel),e0(),Lp(2),Ew("ngModel",i.tagLabel),e0(),Lp(),Ew("ngModel",i.tagIcon),nw("p-options",i.iconList),e0(),Lp(),Ew("ngModel",i.tagPosition),nw("p-options",i.listTagPosition),e0(),Lp(2),Ew("ngModel",i.avatarSrc),e0(),Lp(),Ew("ngModel",i.avatarSize),nw("p-options",i.listAvatarSize),e0(),Lp(2),Ew("ngModel",i.properties),nw("p-options",i.propertiesOptions),e0(),Lp(),Ew("ngModel",i.content),e0());},dependencies:[G9,$9,z9,mk,hk,Qt,mv,C3,F3,Hhe,qhe,$he,Yhe,yNe],styles:[".sample-widget-align-end[_ngcontent-%COMP%]{align-items:flex-end}"],changeDetection:1})}return o})();var Be=o=>({"docs-sample-code-tabs":o}),we=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-widget-labs-view"]],standalone:false,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Widget Labs"),og(),Il(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-widget-labs/sample-po-widget-labs.component.html"),og(),Il(13,"pre",7),Qx(14,`<div class="po-row">
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
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-widget-labs/sample-po-widget-labs.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()(),Il(21,"po-tab",10)(22,"div")(23,"label",6),Qx(24,"sample-po-widget-labs/sample-po-widget-labs.component.css"),og(),Il(25,"pre",11),Qx(26,`.sample-widget-align-end {
  align-items: flex-end;
}
`),og()()()()(),Il(27,"div",12),zl(28,"sample-po-widget-labs"),og(),zl(29,"hr")),l&2&&(Lp(5),Ux("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,Be,i.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,Ce],encapsulation:2})}return o})();var Ie=["detailsModal"],Pe=(()=>{class o{poNotification=f(Yp);detailsModalElement;paymentLink="https://www.google.com.br/search?q=days+to+payment";itemsDetails;titleDetailsModal;typeChart="line";myActions=[{label:"Detail",icon:"an an-align-top",action:this.showAction.bind(this)},{label:"Remove",icon:"an an-trash",type:"danger",action:this.showAction.bind(this)}];options=[{value:"poMultiselect1",label:"Admin"},{value:"poMultiselect2",label:"User"}];columnsDetails=[{property:"dateUpdate",label:"Date update",type:"date"},{property:"statement",label:"Statement",type:"currency"}];itemsAccountDetails=[{dateUpdate:"03-05-2018",statement:"-56.45"},{dateUpdate:"02-05-2018",statement:"-14.99"},{dateUpdate:"02-05-2018",statement:"-657.56"},{dateUpdate:"12-05-2017",statement:"3547.29"}];itemsSavingsDetails=[{dateUpdate:"03-05-2018",statement:"-300"},{dateUpdate:"03-05-2018",statement:"2000"},{dateUpdate:"02-05-2018",statement:"1500"},{dateUpdate:"02-05-2018",statement:"-200"},{dateUpdate:"12-05-2017",statement:"2000"}];openModal(p){switch(p){case "savings":this.titleDetailsModal="Revenue - Details",this.itemsDetails=this.itemsSavingsDetails,this.detailsModalElement.open();break;case "account":this.titleDetailsModal="Total savings - Details",this.itemsDetails=this.itemsAccountDetails,this.detailsModalElement.open();break}}openExternalLink(p){window.open(p,"_blank");}showAction(){this.poNotification.success("Action clicked");}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-widget-finance-dashboard"]],viewQuery:function(l,i){if(l&1&&Gl(Ie,7),l&2){let m;co(m=lo())&&(i.detailsModalElement=m.first);}},standalone:false,decls:43,vars:13,consts:[["detailsModal",""],[1,"po-row","sample-finance-row-gap"],["p-help","https://github.com/po-ui/po-angular/stargazers","p-title","Days to Payment","p-tag","Sales","p-tag-icon","an an-arrow-circle-up",1,"po-lg-6",3,"p-height"],[1,"sample-finance-actions"],["p-label","Cancel","p-danger",""],["p-label","Confirm",3,"p-click"],["p-title","Total savings",1,"po-lg-3",3,"p-click","p-height"],[1,"po-font-subtitle","po-text-center"],[1,"po-text-center"],["p-disabled","","p-primary-label","Details","p-secondary-label","Edit","p-title","Total checking account",1,"po-lg-3",3,"p-primary-action","p-height"],[1,"po-text-center","sample-finance-total-value"],["p-background","../../../assets/graphics/sales-statistics.png",1,"po-lg-4",3,"p-height"],[1,"po-text-center","sample-finance-padding-inline"],[1,"sample-finance-overlay-badge"],[1,"sample-finance-overlay-text"],[1,"sample-finance-padding-inline"],["name","multiselect",3,"p-options"],["p-title","Most used payment type",1,"po-lg-4",3,"p-actions","p-height"],["p-primary-label","Details","p-tag","Revenue","p-tag-icon","an an-money","p-title","Highest revenue in the month considering Marketing and Sales",1,"po-lg-4",3,"p-primary-action","p-height","p-primary"],[3,"p-title"],[3,"p-columns","p-items","p-hide-table-search"]],template:function(l,i){l&1&&(Il(0,"div",1)(1,"div",1)(2,"po-widget",2)(3,"div"),Qx(4,"Sales order"),og(),Il(5,"div"),Qx(6,"Scheduled to: "),Il(7,"strong"),Qx(8,"05/04/2018"),og()(),Il(9,"div",3),zl(10,"po-button",4),Il(11,"po-button",5),ft("p-click",function(){return i.openExternalLink("https://github.com/po-ui/po-angular/stargazers")}),og()()(),Il(12,"po-widget",6),ft("p-click",function(){return i.openModal("account")}),Il(13,"div",7),Qx(14,"$2.818,29"),og(),Il(15,"div",8),Qx(16,"Last updated at 18:34"),og()(),Il(17,"po-widget",9),ft("p-primary-action",function(){return i.openModal("account")}),Il(18,"div",10),Qx(19,"$5.000,00"),og(),Il(20,"div",8),Qx(21,"Last updated at 08:20"),og()()(),Il(22,"div",1)(23,"po-widget",11)(24,"div",12)(25,"div",13)(26,"strong",14),Qx(27,"Enter the user routine"),og()()(),Il(28,"div",15),zl(29,"po-multiselect",16),og()(),Il(30,"po-widget",17)(31,"div",7),Qx(32,"Credit card"),og(),Il(33,"div",8),Qx(34,"MasterCard - 5500 0000 0000 0004"),og()(),Il(35,"po-widget",18),ft("p-primary-action",function(){return i.openModal("savings")}),Il(36,"div",7),Qx(37,"$2.000,00"),og(),Il(38,"div",8),Qx(39,"05/03/2018"),og()()()(),Il(40,"po-modal",19,0),zl(42,"po-table",20),og()),l&2&&(Lp(2),nw("p-height",190),Lp(10),nw("p-height",190),Lp(5),nw("p-height",190),Lp(6),nw("p-height",180),Lp(6),nw("p-options",i.options),Lp(),nw("p-actions",i.myActions)("p-height",180),Lp(5),nw("p-height",180)("p-primary",true),Lp(5),nw("p-title",i.titleDetailsModal),Lp(2),nw("p-columns",i.columnsDetails)("p-items",i.itemsDetails)("p-hide-table-search",false));},dependencies:[Qt,Fw,Yo,E3,yNe],styles:[".sample-finance-row-gap[_ngcontent-%COMP%]{row-gap:1rem}.sample-finance-actions[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;gap:.5rem}.sample-finance-total-value[_ngcontent-%COMP%]{font-size:2rem;margin-bottom:.5rem}.sample-finance-padding-inline[_ngcontent-%COMP%]{padding-inline:.5rem}.sample-finance-overlay-badge[_ngcontent-%COMP%]{margin-bottom:.5rem;display:inline-block;background-color:#000;padding:.5rem;border-radius:3px;opacity:.85}.sample-finance-overlay-text[_ngcontent-%COMP%]{color:#fff}"],changeDetection:1})}return o})();var Ne=o=>({"docs-sample-code-tabs":o}),_e=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-widget-finance-dashboard-view"]],standalone:false,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Widget - Finance dashboard"),og(),Il(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-widget-finance-dashboard/sample-po-widget-finance-dashboard.component.html"),og(),Il(13,"pre",7),Qx(14,`<div class="po-row sample-finance-row-gap">
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
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-widget-finance-dashboard/sample-po-widget-finance-dashboard.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()(),Il(21,"po-tab",10)(22,"div")(23,"label",6),Qx(24,"sample-po-widget-finance-dashboard/sample-po-widget-finance-dashboard.component.css"),og(),Il(25,"pre",11),Qx(26,`.sample-finance-row-gap {
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
`),og()()()()(),Il(27,"div",12),zl(28,"sample-po-widget-finance-dashboard"),og(),zl(29,"hr")),l&2&&(Lp(5),Ux("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,Ne,i.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,Pe],encapsulation:2})}return o})();var Ue=o=>({customTemplate:o,widthCustomTemplate:"40%"}),He=()=>({hideExpand:true,hideExportCsv:true,hideExportImage:true,hideTableDetails:true}),je=o=>({header:o}),Je=()=>({label:"Angular",data:100}),Ge=()=>({label:"React",data:10}),Qe=(o,k)=>[o,k];function Ke(o,k){o&1&&zl(0,"po-chart",8),o&2&&nw("p-options",uN(3,je,lN(2,He)))("p-series",dN(7,Qe,lN(5,Je),lN(6,Ge)));}function Xe(o,k){if(o&1&&(Il(0,"li"),Qx(1),og()),o&2){let p=k.$implicit;Lp(),yw(p);}}var Te=(()=>{class o{poModal;help;label;technologies=["Angular","Typescript","React","Babel","Jasmine","Vue"];value;ngOnInit(){this.showAngular();}showAngular(){this.label="Angular",this.value=`Angular is a javascript framework mantained by Google and successor of the Angular.js.
    In this latest version, we can use all the features of the framework, for example: data bindings, components,
    modules, typescript and much more.`,this.help="https://angular.io/";}showJavascriptTechnologies(){this.poModal.open();}showTypescript(){this.label="Typescript",this.value=`Typescript allows to write JavaScript in an easier way.
    Typescript is a super set of JavaScript that compiles for simple JavaScript. Any browser.
    Any host. Any operating system. Open code.`,this.help="https://www.typescriptlang.org/";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-widget-card"]],viewQuery:function(l,i){if(l&1&&Gl(Yo,7),l&2){let m;co(m=lo())&&(i.poModal=m.first);}},standalone:false,decls:24,vars:6,consts:[["avatar",""],[1,"po-row"],["p-height","300","p-primary-label","Angular","p-secondary-label","Typescript","p-title","Javascript technologies",1,"po-lg-6",3,"p-primary-action","p-secondary-action","p-title-action","p-help"],[3,"p-label","p-value"],["p-title","Apps Enterprise","p-tag","Angular v17+","p-tag-position","top","p-height","300","p-help","https://angular.dev/",1,"po-lg-6",3,"p-avatar"],[1,"po-pl-3","po-pt-1"],["p-title","Javascript Technologies"],[1,"po-ml-3"],["p-height","260",3,"p-options","p-series"]],template:function(l,i){if(l&1&&(Il(0,"div",1)(1,"po-widget",2),ft("p-primary-action",function(){return i.showAngular()})("p-secondary-action",function(){return i.showTypescript()})("p-title-action",function(){return i.showJavascriptTechnologies()}),zl(2,"po-info",3),og(),Il(3,"po-widget",4)(4,"div"),Qx(5," Angular: The default choice for large-scale applications, such as banking and government systems, due to its structured architecture and native TypeScript support. "),Il(6,"div",5)(7,"ul")(8,"li"),Qx(9,"Out-of-the-Box"),og(),Il(10,"li"),Qx(11,"Standardized and Opinion-Based Architecture"),og(),Il(12,"li"),Qx(13,"Next Generation Reactivity (Signals)"),og(),Il(14,"li"),Qx(15,"Focus on Enterprise and Security"),og()()()(),JE(16,Ke,1,10,"ng-template",null,0,wN),og()(),Il(18,"po-modal",6),Qx(19," There are several Javascript technologies that help us in the construction of fast and dynamic screens, among them we can mention: "),Il(20,"div",7)(21,"ul"),hx(22,Xe,2,1,"li",null,fx),og()()()),l&2){let m=Ax(17);Lp(),nw("p-help",i.help),Lp(),nw("p-label",i.label)("p-value",i.value),Lp(),nw("p-avatar",uN(4,Ue,m)),Lp(19),px(i.technologies);}},dependencies:[dde,Yhe,Yo,yNe],encapsulation:2,changeDetection:1})}return o})();var Ze=o=>({"docs-sample-code-tabs":o}),Me=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-widget-card-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Widget - Card"),og(),Il(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-widget-card/sample-po-widget-card.component.html"),og(),Il(13,"pre",7),Qx(14,`<div class="po-row">
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
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-widget-card/sample-po-widget-card.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-widget-card"),og(),zl(23,"hr")),l&2&&(Lp(5),Ux("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,Ze,i.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,Te],encapsulation:2})}return o})();var De=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-widget-doc"]],standalone:false,decls:1341,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/guides/grid-system"],["href","https://www.w3.org/WAI/WCAG21/Understanding/name-role-value"],["href","https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-enhanced"],["href","https://www.w3.org/WAI/WCAG21/Understanding/keyboard"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","Array<PoPopupAction>"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","PoWidgetAvatar"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","false"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","number"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","PoTagType"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","TemplateRef<any>"]],template:function(l,i){l&1&&(Il(0,"div",0)(1,"p",1)(2,"code"),Qx(3,"import { PoWidgetModule } from '@po-ui/ng-components';"),og()(),Il(4,"div",2)(5,"p"),Qx(6,"M\xF3dulo do componente po-widget"),og()(),Il(7,"h3",3),Qx(8,"Componente"),og(),Il(9,"h4",4)(10,"code",5),Qx(11,"PoWidgetComponent"),og()(),Il(12,"div",2)(13,"p"),Qx(14,"O componente "),Il(15,"code"),Qx(16,"po-widget"),og(),Qx(17," \xE9 recomendado para exibi\xE7\xE3o de "),Il(18,"em"),Qx(19,"dashboards"),og(),Qx(20,`, podendo ser utilizado
para incluir v\xE1rios tipos de conte\xFAdo como: gr\xE1ficos, tabelas, grids e imagens.`),og(),Il(21,"p"),Qx(22,`Al\xE9m da exibi\xE7\xE3o de conte\xFAdos, este componente possibilita adicionar a\xE7\xF5es e um link
para ajuda, como tamb\xE9m possibilita ser utilizado com ou sem sombra.`),og(),Il(23,"p"),Qx(24,"Para controlar sua largura, \xE9 poss\xEDvel utilizar o "),Il(25,"a",6),Qx(26,"Grid System"),og(),Qx(27,` para um maior
controle de seu redimensionamento, assim possibilitando o tratamento para diferentes resolu\xE7\xF5es.`),og(),Il(28,"h4"),Qx(29,"Boas pr\xE1ticas"),og(),Il(30,"p"),Qx(31,"Utilize um tamanho m\xEDnimo de largura de aproximadamente "),Il(32,"code"),Qx(33,"18.75rem"),og(),Qx(34," no componente."),og(),Il(35,"h4"),Qx(36,"Acessibilidade tratada no componente"),og(),Il(37,"p"),Qx(38,"Algumas diretrizes de acessibilidade j\xE1 s\xE3o tratadas no componente, internamente, e n\xE3o podem ser alteradas. S\xE3o elas:"),og(),Il(39,"ul")(40,"li"),Qx(41,"Utiliza medidas relativas, para se adequar \xE0s prefer\xEAncias e necessidades de quem for utilizar o sistema."),og(),Il(42,"li"),Qx(43,"Desenvolvido com uso de controles padr\xF5es HTML, o que permite a identifica\xE7\xE3o na interface por tecnologias assistivas. (WCAG "),Il(44,"a",7),Qx(45,"4.1.2: Name, Role, Value"),og(),Qx(46,")"),og(),Il(47,"li"),Qx(48,"O foco \xE9 vis\xEDvel e possui uma espessura superior a 2 pixels CSS, n\xE3o ficando escondido por outros elementos da tela. (WCAG "),Il(49,"a",8),Qx(50,"2.4.12: Focus Appearance"),og(),Qx(51,")"),og(),Il(52,"li"),Qx(53,"Quando selecion\xE1vel, prev\xEA intera\xE7\xE3o por teclado, podendo ser selecionado atrav\xE9s da tecla space (WCAG "),Il(54,"a",9),Qx(55,"2.4.1 - Keyboard"),og(),Qx(56,")"),og()(),Il(57,"h4"),Qx(58,"Tokens customiz\xE1veis"),og(),Il(59,"p"),Qx(60,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),og(),Il(61,"blockquote")(62,"p"),Qx(63,"Para maiores informa\xE7\xF5es, acesse o guia "),Il(64,"a",10),Qx(65,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),Qx(66,"."),og()(),Il(67,"table")(68,"thead")(69,"tr")(70,"th"),Qx(71,"Propriedade"),og(),Il(72,"th"),Qx(73,"Descri\xE7\xE3o"),og(),Il(74,"th"),Qx(75,"Valor Padr\xE3o"),og()()(),Il(76,"tbody")(77,"tr")(78,"td")(79,"strong"),Qx(80,"Default Values"),og()(),zl(81,"td")(82,"td"),og(),Il(83,"tr")(84,"td")(85,"code"),Qx(86,"--font-family"),og()(),Il(87,"td"),Qx(88,"Fam\xEDlia tipogr\xE1fica usada"),og(),Il(89,"td")(90,"code"),Qx(91,"var(--font-family-theme) "),og()()(),Il(92,"tr")(93,"td")(94,"code"),Qx(95,"--font-size"),og()(),Il(96,"td"),Qx(97,"Tamanho da fonte"),og(),Il(98,"td")(99,"code"),Qx(100,"var(--font-size-sm)"),og()()(),Il(101,"tr")(102,"td")(103,"code"),Qx(104,"--font-weight"),og()(),Il(105,"td"),Qx(106,"Peso da fonte"),og(),Il(107,"td")(108,"code"),Qx(109,"var(--font-weight-bold)"),og()()(),Il(110,"tr")(111,"td")(112,"code"),Qx(113,"--font-color"),og()(),Il(114,"td"),Qx(115,"Cor da fonte"),og(),Il(116,"td")(117,"code"),Qx(118,"var(--color-neutral-dark-95)"),og()()(),Il(119,"tr")(120,"td")(121,"code"),Qx(122,"--padding"),og(),Qx(123," - "),Il(124,"code"),Qx(125,"@deprecated 21.x.x"),og()(),Il(126,"td"),Qx(127,"Preenchimento do componente"),og(),Il(128,"td")(129,"code"),Qx(130,"1rem"),og()()(),Il(131,"tr")(132,"td")(133,"code"),Qx(134,"--padding-header"),og()(),Il(135,"td"),Qx(136,"Preenchimento do header"),og(),Il(137,"td")(138,"code"),Qx(139,"var(--spacing-sm) var(--spacing-sm) var(--spacing-xs) var(--spacing-sm)"),og()()(),Il(140,"tr")(141,"td")(142,"code"),Qx(143,"--padding-body"),og()(),Il(144,"td"),Qx(145,"Preenchimento do body"),og(),Il(146,"td")(147,"code"),Qx(148,"var(--spacing-xs) var(--spacing-sm) var(--spacing-xs) var(--spacing-sm)"),og()()(),Il(149,"tr")(150,"td")(151,"code"),Qx(152,"--padding-avatar"),og()(),Il(153,"td"),Qx(154,"Preenchimento do avatar"),og(),Il(155,"td")(156,"code"),Qx(157,"var(--spacing-sm) 0 var(--spacing-xs) var(--spacing-sm)"),og()()(),Il(158,"tr")(159,"td")(160,"code"),Qx(161,"--padding-footer"),og()(),Il(162,"td"),Qx(163,"Preenchimento do footer"),og(),Il(164,"td")(165,"code"),Qx(166,"var(--spacing-xs) var(--spacing-sm) var(--spacing-sm) var(--spacing-sm)"),og()()(),Il(167,"tr")(168,"td")(169,"code"),Qx(170,"--border-radius"),og()(),Il(171,"td"),Qx(172,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),og(),Il(173,"td")(174,"code"),Qx(175,"var(--border-radius-md)"),og()()(),Il(176,"tr")(177,"td")(178,"code"),Qx(179,"--border-width"),og()(),Il(180,"td"),Qx(181,"Cont\xE9m o valor da largura dos cantos do elemento\xA0"),og(),Il(182,"td")(183,"code"),Qx(184,"var(--border-width-sm)"),og()()(),Il(185,"tr")(186,"td")(187,"code"),Qx(188,"--border-color"),og()(),Il(189,"td"),Qx(190,"Cor da borda"),og(),Il(191,"td")(192,"code"),Qx(193,"var(--color-neutral-light-20)"),og()()(),Il(194,"tr")(195,"td")(196,"code"),Qx(197,"--background"),og()(),Il(198,"td"),Qx(199,"Cor de background"),og(),Il(200,"td")(201,"code"),Qx(202,"var(--color-neutral-light-00)"),og()()(),Il(203,"tr")(204,"td")(205,"code"),Qx(206,"--shadow"),og()(),Il(207,"td"),Qx(208,"Cont\xE9m o valor da sombra do elemento"),og(),Il(209,"td")(210,"code"),Qx(211,"var(--shadow-md)"),og()()(),Il(212,"tr")(213,"td")(214,"strong"),Qx(215,"Hover"),og()(),zl(216,"td")(217,"td"),og(),Il(218,"tr")(219,"td")(220,"code"),Qx(221,"--border-color-hover"),og()(),Il(222,"td"),Qx(223,"Cor da borda no estado hover"),og(),Il(224,"td")(225,"code"),Qx(226,"var(--color-action-hover)"),og()()(),Il(227,"tr")(228,"td")(229,"strong"),Qx(230,"Focused"),og()(),zl(231,"td")(232,"td"),og(),Il(233,"tr")(234,"td")(235,"code"),Qx(236,"--color-focused"),og()(),Il(237,"td"),Qx(238,"Cor principal no estado de focus"),og(),Il(239,"td")(240,"code"),Qx(241,"var(--color-action-default)"),og()()(),Il(242,"tr")(243,"td")(244,"code"),Qx(245,"--outline-color-focused"),og(),Qx(246," \xA0"),og(),Il(247,"td"),Qx(248,"Cor do outline do estado de focus"),og(),Il(249,"td")(250,"code"),Qx(251,"var(--color-action-focus)"),og()()()()()(),Il(252,"div",11)(253,"h4",12),Qx(254,"Seletor"),og(),Il(255,"pre",13),Qx(256,`<po-widget
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
`),og()(),Il(257,"h4",14),Qx(258,"Propriedades"),og(),Il(259,"table",15)(260,"tr",16)(261,"th",17),Qx(262,"Nome"),og(),Il(263,"th",17),Qx(264,"Tipo"),og(),Il(265,"th",17),Qx(266,"Padr\xE3o"),og(),Il(267,"th",17),Qx(268,"Descri\xE7\xE3o"),og()(),Il(269,"tr",18)(270,"td",19)(271,"div",20)(272,"span",21),Qx(273," p-actions"),zl(274,"br"),og()()(),Il(275,"td",22)(276,"code",23),Qx(277,"Array<PoPopupAction>"),og()(),Il(278,"td",24),Qx(279,"-"),og(),Il(280,"td",25)(281,"em")(282,"strong"),Qx(283,"(opcional)"),og()(),Il(284,"p"),Qx(285,`Lista de a\xE7\xF5es exibidas no header do componente.
As propriedades das a\xE7\xF5es seguem a interface `),Il(286,"code"),Qx(287,"PoPopupAction"),og(),Qx(288,"."),og()()(),Il(289,"tr",18)(290,"td",19)(291,"div",20)(292,"span",21),Qx(293," p-avatar"),zl(294,"br"),og()()(),Il(295,"td",22)(296,"code",26),Qx(297,"PoWidgetAvatar"),og()(),Il(298,"td",24),Qx(299,"-"),og(),Il(300,"td",25)(301,"em")(302,"strong"),Qx(303,"(opcional)"),og()(),Il(304,"p"),Qx(305,"Define o avatar a ser exibido \xE0 esquerda no Widget."),og()()(),Il(306,"tr",18)(307,"td",19)(308,"div",20)(309,"span",21),Qx(310," p-background"),zl(311,"br"),og()()(),Il(312,"td",22)(313,"code",27),Qx(314,"string"),og()(),Il(315,"td",24),Qx(316,"-"),og(),Il(317,"td",25)(318,"em")(319,"strong"),Qx(320,"(opcional)"),og()(),Il(321,"p"),Qx(322,"Define uma imagem de fundo."),og(),Il(323,"blockquote")(324,"p"),Qx(325,"Se a imagem escolhida intervir na legibilidade do texto contido no "),Il(326,"code"),Qx(327,"p-widget"),og(),Qx(328,`,
pode-se utilizar a propriedade `),Il(329,"code"),Qx(330,"p-primary"),og(),Qx(331," em conjunto para que os textos fiquem na cor branca."),og()()()(),Il(332,"tr",18)(333,"td",19)(334,"div",28)(335,"span",29),Qx(336," (p-click)"),zl(337,"br"),og()()(),Il(338,"td",22)(339,"code",30),Qx(340,"EventEmitter"),og()(),Il(341,"td",24),Qx(342,"-"),og(),Il(343,"td",25)(344,"em")(345,"strong"),Qx(346,"(opcional)"),og()(),Il(347,"p"),Qx(348,"Evento disparado quando o usu\xE1rio clicar no componente."),og(),Il(349,"blockquote")(350,"p"),Qx(351,"Quando este evento est\xE1 em uso, uma sombra (shadow) \xE9 aplicada automaticamente ao componente."),og()()()(),Il(352,"tr",18)(353,"td",19)(354,"div",20)(355,"span",21),Qx(356," p-danger-primary-action"),zl(357,"br"),og()()(),Il(358,"td",22)(359,"code",31),Qx(360,"false"),og()(),Il(361,"td",24)(362,"p")(363,"code"),Qx(364,"false"),og()()(),Il(365,"td",25)(366,"em")(367,"strong"),Qx(368,"(opcional)"),og()(),Il(369,"p"),Qx(370,"Caso verdadeiro o bot\xE3o da a\xE7\xE3o "),Il(371,"code"),Qx(372,"p-primary-label"),og(),Qx(373," ativar\xE1 o modo "),Il(374,"code"),Qx(375,"danger"),og(),Qx(376,"."),og(),Il(377,"blockquote")(378,"p"),Qx(379,"Incompat\xEDvel com o tipo "),Il(380,"strong"),Qx(381,"tertiary"),og(),Qx(382," da propriedade "),Il(383,"code"),Qx(384,"p-kind-primary-action"),og(),Qx(385,"."),og()()()(),Il(386,"tr",18)(387,"td",19)(388,"div",20)(389,"span",21),Qx(390," p-danger-secondary-action"),zl(391,"br"),og()()(),Il(392,"td",22)(393,"code",31),Qx(394,"false"),og()(),Il(395,"td",24)(396,"p")(397,"code"),Qx(398,"false"),og()()(),Il(399,"td",25)(400,"em")(401,"strong"),Qx(402,"(opcional)"),og()(),Il(403,"p"),Qx(404,"Caso verdadeiro o bot\xE3o da a\xE7\xE3o "),Il(405,"code"),Qx(406,"p-secondary-label"),og(),Qx(407," ativar\xE1 o modo "),Il(408,"code"),Qx(409,"danger"),og(),Qx(410,"."),og(),Il(411,"blockquote")(412,"p"),Qx(413,"Incompat\xEDvel com o tipo "),Il(414,"strong"),Qx(415,"tertiary"),og(),Qx(416," da propriedade "),Il(417,"code"),Qx(418,"p-kind-primary-action"),og(),Qx(419,"."),og()()()(),Il(420,"tr",18)(421,"td",19)(422,"div",20)(423,"span",21),Qx(424," p-disabled"),zl(425,"br"),og()()(),Il(426,"td",22)(427,"code",32),Qx(428,"boolean"),og()(),Il(429,"td",24)(430,"p")(431,"code"),Qx(432,"false"),og()()(),Il(433,"td",25)(434,"em")(435,"strong"),Qx(436,"(opcional)"),og()(),Il(437,"p"),Qx(438,"Desabilita o componente."),og()()(),Il(439,"tr",18)(440,"td",19)(441,"div",20)(442,"span",21),Qx(443," p-height"),zl(444,"br"),og()()(),Il(445,"td",22)(446,"code",33),Qx(447,"number"),og()(),Il(448,"td",24),Qx(449,"-"),og(),Il(450,"td",25)(451,"em")(452,"strong"),Qx(453,"(opcional)"),og()(),Il(454,"p"),Qx(455,"Define a altura do componente."),og(),Il(456,"blockquote")(457,"p"),Qx(458,"Caso n\xE3o seja informado valor, a propriedade ir\xE1 assumir o tamanho do conte\xFAdo."),og()()()(),Il(459,"tr",18)(460,"td",19)(461,"div",20)(462,"span",21),Qx(463," p-help"),zl(464,"br"),og()()(),Il(465,"td",22)(466,"code",27),Qx(467,"string"),og()(),Il(468,"td",24),Qx(469,"-"),og(),Il(470,"td",25)(471,"em")(472,"strong"),Qx(473,"(opcional)"),og()(),Il(474,"p"),Qx(475,"Link de ajuda inclu\xEDdo no menu de a\xE7\xF5es do header."),og()()(),Il(476,"tr",18)(477,"td",19)(478,"div",20)(479,"span",21),Qx(480," p-kind-primary-action"),zl(481,"br"),og()()(),Il(482,"td",22)(483,"code",27),Qx(484,"string"),og()(),Il(485,"td",24)(486,"p")(487,"code"),Qx(488,"tertiary"),og()()(),Il(489,"td",25)(490,"em")(491,"strong"),Qx(492,"(opcional)"),og()(),Il(493,"p"),Qx(494,"Define o estilo do bot\xE3o da a\xE7\xE3o "),Il(495,"code"),Qx(496,"p-primary-label"),og(),Qx(497,", conforme o enum "),Il(498,"code"),Qx(499,"PoButtonKind"),og(),Qx(500,"."),og()()(),Il(501,"tr",18)(502,"td",19)(503,"div",20)(504,"span",21),Qx(505," p-kind-secondary-action"),zl(506,"br"),og()()(),Il(507,"td",22)(508,"code",27),Qx(509,"string"),og()(),Il(510,"td",24)(511,"p")(512,"code"),Qx(513,"tertiary"),og()()(),Il(514,"td",25)(515,"em")(516,"strong"),Qx(517,"(opcional)"),og()(),Il(518,"p"),Qx(519,"Define o estilo do bot\xE3o da a\xE7\xE3o "),Il(520,"code"),Qx(521,"p-secondary-label"),og(),Qx(522,", conforme o enum "),Il(523,"code"),Qx(524,"PoButtonKind"),og(),Qx(525,"."),og()()(),Il(526,"tr",18)(527,"td",19)(528,"div",20)(529,"span",21),Qx(530," p-no-shadow"),zl(531,"br"),og()()(),Il(532,"td",22)(533,"code",32),Qx(534,"boolean"),og()(),Il(535,"td",24)(536,"p")(537,"code"),Qx(538,"true"),og()()(),Il(539,"td",25)(540,"em")(541,"strong"),Qx(542,"(opcional)"),og()(),Il(543,"p"),Qx(544,"Desabilita a sombra do componente quando o mesmo for clic\xE1vel."),og(),Il(545,"blockquote")(546,"p"),Qx(547,"A sombra \xE9 exibida por padr\xE3o apenas quando o evento "),Il(548,"code"),Qx(549,"p-click"),og(),Qx(550," est\xE1 definido."),og()()()(),Il(551,"tr",18)(552,"td",19)(553,"div",28)(554,"span",29),Qx(555," (p-on-disabled)"),zl(556,"br"),og()()(),Il(557,"td",22)(558,"code",30),Qx(559,"EventEmitter"),og()(),Il(560,"td",24),Qx(561,"-"),og(),Il(562,"td",25)(563,"em")(564,"strong"),Qx(565,"(opcional)"),og()(),Il(566,"p"),Qx(567,"Evento disparado quando a propriedade "),Il(568,"code"),Qx(569,"p-disabled"),og(),Qx(570," for alterada."),og()()(),Il(571,"tr",18)(572,"td",19)(573,"div",20)(574,"span",21),Qx(575," p-primary"),zl(576,"br"),og()()(),Il(577,"td",22)(578,"code",32),Qx(579,"boolean"),og()(),Il(580,"td",24)(581,"p")(582,"code"),Qx(583,"false"),og()()(),Il(584,"td",25)(585,"em")(586,"strong"),Qx(587,"(opcional)"),og()(),Il(588,"p"),Qx(589,"Op\xE7\xE3o para que o "),Il(590,"code"),Qx(591,"po-widget"),og(),Qx(592," fique em destaque."),og()()(),Il(593,"tr",18)(594,"td",19)(595,"div",28)(596,"span",29),Qx(597," (p-primary-action)"),zl(598,"br"),og()()(),Il(599,"td",22)(600,"code",30),Qx(601,"EventEmitter"),og()(),Il(602,"td",24),Qx(603,"-"),og(),Il(604,"td",25)(605,"em")(606,"strong"),Qx(607,"(opcional)"),og()(),Il(608,"p"),Qx(609,"Evento disparado ao clicar na a\xE7\xE3o "),Il(610,"code"),Qx(611,"p-primary-label"),og(),Qx(612,"."),og()()(),Il(613,"tr",18)(614,"td",19)(615,"div",20)(616,"span",21),Qx(617," p-primary-label"),zl(618,"br"),og()()(),Il(619,"td",22)(620,"code",27),Qx(621,"string"),og()(),Il(622,"td",24),Qx(623,"-"),og(),Il(624,"td",25)(625,"em")(626,"strong"),Qx(627,"(opcional)"),og()(),Il(628,"p"),Qx(629,"Define o label e exibe a a\xE7\xE3o prim\xE1ria no footer do componente."),og()()(),Il(630,"tr",18)(631,"td",19)(632,"div",28)(633,"span",29),Qx(634," (p-secondary-action)"),zl(635,"br"),og()()(),Il(636,"td",22)(637,"code",30),Qx(638,"EventEmitter"),og()(),Il(639,"td",24),Qx(640,"-"),og(),Il(641,"td",25)(642,"em")(643,"strong"),Qx(644,"(opcional)"),og()(),Il(645,"p"),Qx(646,"Evento disparado ao clicar na a\xE7\xE3o "),Il(647,"code"),Qx(648,"p-secondary-label"),og(),Qx(649,"."),og()()(),Il(650,"tr",18)(651,"td",19)(652,"div",20)(653,"span",21),Qx(654," p-secondary-label"),zl(655,"br"),og()()(),Il(656,"td",22)(657,"code",27),Qx(658,"string"),og()(),Il(659,"td",24),Qx(660,"-"),og(),Il(661,"td",25)(662,"em")(663,"strong"),Qx(664,"(opcional)"),og()(),Il(665,"p"),Qx(666,"Define o label e exibe a a\xE7\xE3o secund\xE1ria no footer do componente."),og(),Il(667,"blockquote")(668,"p"),Qx(669,"Exibida apenas quando "),Il(670,"code"),Qx(671,"p-primary-label"),og(),Qx(672," estiver definida."),og()()()(),Il(673,"tr",18)(674,"td",19)(675,"div",28)(676,"span",29),Qx(677," (p-setting)"),zl(678,"br"),og()()(),Il(679,"td",22)(680,"code",30),Qx(681,"EventEmitter"),og()(),Il(682,"td",24),Qx(683,"-"),og(),Il(684,"td",25)(685,"em")(686,"strong"),Qx(687,"(opcional)"),og()(),Il(688,"p"),Qx(689,"Evento disparado ao clicar em "),Il(690,"strong"),Qx(691,"Configura\xE7\xF5es"),og(),Qx(692," inclu\xEDdo no menu de a\xE7\xF5es do header."),og()()(),Il(693,"tr",18)(694,"td",19)(695,"div",20)(696,"span",21),Qx(697," p-size"),zl(698,"br"),og()()(),Il(699,"td",22)(700,"code",27),Qx(701,"string"),og()(),Il(702,"td",24)(703,"p")(704,"code"),Qx(705,"medium"),og()()(),Il(706,"td",25)(707,"em")(708,"strong"),Qx(709,"(opcional)"),og()(),Il(710,"p"),Qx(711,"Define o tamanho dos bot\xF5es do componente:"),og(),Il(712,"ul")(713,"li")(714,"code"),Qx(715,"small"),og(),Qx(716,": altura de 32px (dispon\xEDvel apenas para acessibilidade AA)."),og(),Il(717,"li")(718,"code"),Qx(719,"medium"),og(),Qx(720,": altura de 44px."),og()(),Il(721,"blockquote")(722,"p"),Qx(723,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Il(724,"code"),Qx(725,"medium"),og(),Qx(726,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Il(727,"a",34),Qx(728,"po-theme"),og(),Qx(729,"."),og()()()(),Il(730,"tr",18)(731,"td",19)(732,"div",20)(733,"span",21),Qx(734," p-tag-icon"),zl(735,"br"),og()()(),Il(736,"td",22)(737,"code",27),Qx(738,"string "),og(),Il(739,"code",35),Qx(740," TemplateRef<void>"),og()(),Il(741,"td",24),Qx(742,"-"),og(),Il(743,"td",25)(744,"em")(745,"strong"),Qx(746,"(opcional)"),og()(),Il(747,"p"),Qx(748,"Define o \xEDcone exibido ao lado do label da "),Il(749,"code"),Qx(750,"p-tag"),og(),Qx(751,"."),og(),Il(752,"p"),Qx(753,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),Il(754,"a",36),Qx(755,"Biblioteca de \xEDcones PO UI"),og(),Qx(756,", conforme exemplo:"),og(),Il(757,"pre")(758,"code"),Qx(759,`<po-widget p-tag-icon="an an-user"></po-widget>
`),og()(),Il(760,"p"),Qx(761,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),Il(762,"em"),Qx(763,"Font Awesome"),og(),Qx(764,`, desde que a biblioteca
esteja carregada no projeto:`),og(),Il(765,"pre")(766,"code"),Qx(767,`<po-widget p-tag-icon="fa fa-podcast"></po-widget>
`),og()(),Il(768,"p"),Qx(769,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),Il(770,"code"),Qx(771,"TemplateRef"),og(),Qx(772,", conforme exemplo abaixo:"),og(),Il(773,"pre")(774,"code"),Qx(775,`<po-widget [p-tag-icon]="template"></po-widget>

<ng-template #template>
  <i class="fa fa-podcast" style="font-size: inherit;"></i>
</ng-template>
`),og()(),Il(776,"blockquote")(777,"p"),Qx(778,"Para o \xEDcone enquadrar corretamente, deve-se utilizar "),Il(779,"code"),Qx(780,"font-size: inherit"),og(),Qx(781," caso o \xEDcone utilizado n\xE3o aplique-o."),og()()()(),Il(782,"tr",18)(783,"td",19)(784,"div",20)(785,"span",21),Qx(786," p-tag"),zl(787,"br"),og()()(),Il(788,"td",22)(789,"code",27),Qx(790,"string"),og()(),Il(791,"td",24),Qx(792,"-"),og(),Il(793,"td",25)(794,"em")(795,"strong"),Qx(796,"(opcional)"),og()(),Il(797,"p"),Qx(798,"Label da tag exibida no header."),og(),Il(799,"blockquote")(800,"p"),Qx(801,`Quando a tag atingir uma largura m\xE1xima de 15rem (240px), ser\xE1 truncado com retic\xEAncias.
O conte\xFAdo completo poder\xE1 ser visualizado ao passar o mouse sobre a tag, por meio do tooltip.`),og()()()(),Il(802,"tr",18)(803,"td",19)(804,"div",20)(805,"span",21),Qx(806," p-tag-position"),zl(807,"br"),og()()(),Il(808,"td",22)(809,"code",27),Qx(810,"string"),og()(),Il(811,"td",24)(812,"p")(813,"code"),Qx(814,"right"),og()()(),Il(815,"td",25)(816,"em")(817,"strong"),Qx(818,"(opcional)"),og()(),Il(819,"p"),Qx(820,"Define o posicionamento da "),Il(821,"code"),Qx(822,"po-tag"),og(),Qx(823," no cabe\xE7alho do Widget:"),og(),Il(824,"ul")(825,"li")(826,"code"),Qx(827,"right"),og(),Qx(828,": posicionada no canto superior direito do cabe\xE7alho."),og(),Il(829,"li")(830,"code"),Qx(831,"top"),og(),Qx(832,": posicionada \xE0 esquerda, acima do t\xEDtulo (quando houver)."),og(),Il(833,"li")(834,"code"),Qx(835,"bottom"),og(),Qx(836,": posicionada \xE0 esquerda, abaixo do t\xEDtulo (quando houver)."),og()()()(),Il(837,"tr",18)(838,"td",19)(839,"div",20)(840,"span",21),Qx(841," p-tag-type"),zl(842,"br"),og()()(),Il(843,"td",22)(844,"code",37),Qx(845,"PoTagType "),og(),Il(846,"code",27),Qx(847," string"),og()(),Il(848,"td",24)(849,"p")(850,"code"),Qx(851,"success"),og()()(),Il(852,"td",25)(853,"em")(854,"strong"),Qx(855,"(opcional)"),og()(),Il(856,"p"),Qx(857,"Define o tipo da "),Il(858,"code"),Qx(859,"p-tag"),og(),Qx(860,", conforme o enum "),Il(861,"strong"),Qx(862,"PoTagType"),og(),Qx(863,"."),og(),Il(864,"p"),Qx(865,"Valores v\xE1lidos:"),og(),Il(866,"ul")(867,"li")(868,"code"),Qx(869,"success"),og(),Qx(870,": cor verde utilizada para simbolizar sucesso ou \xEAxito."),og(),Il(871,"li")(872,"code"),Qx(873,"warning"),og(),Qx(874,": cor amarela que representa aviso ou advert\xEAncia."),og(),Il(875,"li")(876,"code"),Qx(877,"danger"),og(),Qx(878,": cor vermelha para erro ou aviso cr\xEDtico."),og(),Il(879,"li")(880,"code"),Qx(881,"info"),og(),Qx(882,": cor azul claro que caracteriza conte\xFAdo informativo."),og(),Il(883,"li")(884,"code"),Qx(885,"neutral"),og(),Qx(886,": cor cinza claro para uso geral."),og()()()(),Il(887,"tr",18)(888,"td",19)(889,"div",20)(890,"span",21),Qx(891," p-title"),zl(892,"br"),og()()(),Il(893,"td",22)(894,"code",27),Qx(895,"string"),og()(),Il(896,"td",24),Qx(897,"-"),og(),Il(898,"td",25)(899,"em")(900,"strong"),Qx(901,"(opcional)"),og()(),Il(902,"p"),Qx(903,"T\xEDtulo do componente."),og(),Il(904,"blockquote")(905,"p"),Qx(906,`Quando o conte\xFAdo exceder o espa\xE7o dispon\xEDvel, o texto ser\xE1 truncado com retic\xEAncias. O conte\xFAdo completo poder\xE1
ser visualizado ao passar o mouse sobre a tag, por meio do tooltip.`),og()()()(),Il(907,"tr",18)(908,"td",19)(909,"div",28)(910,"span",29),Qx(911," (p-title-action)"),zl(912,"br"),og()()(),Il(913,"td",22)(914,"code",30),Qx(915,"EventEmitter"),og()(),Il(916,"td",24),Qx(917,"-"),og(),Il(918,"td",25)(919,"em")(920,"strong"),Qx(921,"(opcional)"),og()(),Il(922,"p"),Qx(923,"Evento disparado ao clicar no t\xEDtulo definido em "),Il(924,"code"),Qx(925,"p-title"),og(),Qx(926,"."),og()()()(),Il(927,"h3"),Qx(928,"Interfaces"),og(),Il(929,"h4",38)(930,"code",5),Qx(931,"PoPopupAction"),og()(),Il(932,"div",2)(933,"p"),Qx(934,"Interface para lista de a\xE7\xF5es do componente."),og()(),Il(935,"h4",14),Qx(936,"Propriedades"),og(),Il(937,"table",15)(938,"tr",16)(939,"th",17),Qx(940,"Nome"),og(),Il(941,"th",17),Qx(942,"Tipo"),og(),Il(943,"th",17),Qx(944,"Descri\xE7\xE3o"),og()(),Il(945,"tr",18)(946,"td",19)(947,"div",20)(948,"span",21),Qx(949," action"),zl(950,"br"),og()()(),Il(951,"td",22)(952,"code",39),Qx(953,"Function"),og()(),Il(954,"td",25)(955,"em")(956,"strong"),Qx(957,"(opcional)"),og()(),Il(958,"p"),Qx(959,"A\xE7\xE3o que ser\xE1 executada, sendo poss\xEDvel passar o nome ou a refer\xEAncia da fun\xE7\xE3o."),og(),Il(960,"p"),Qx(961,"A action tamb\xE9m pode ser executada para o agrupador de subitens quando a a\xE7\xE3o possuir "),Il(962,"code"),Qx(963,"subItems"),og(),Qx(964,"."),og(),Il(965,"blockquote")(966,"p"),Qx(967,"Para que a fun\xE7\xE3o seja executada no contexto do componente, utilize "),Il(968,"em"),Qx(969,"bind"),og(),Qx(970,`:
`),Il(971,"code"),Qx(972,"action: this.myFunction.bind(this)"),og()()()()(),Il(973,"tr",18)(974,"td",19)(975,"div",20)(976,"span",21),Qx(977," disabled"),zl(978,"br"),og()()(),Il(979,"td",22)(980,"code",32),Qx(981,"boolean "),og(),Il(982,"code",39),Qx(983," Function"),og()(),Il(984,"td",25)(985,"em")(986,"strong"),Qx(987,"(opcional)"),og()(),Il(988,"p"),Qx(989,"Desabilita a a\xE7\xE3o. Aceita um valor booleano ou uma fun\xE7\xE3o que retorna booleano."),og()()(),Il(990,"tr",18)(991,"td",19)(992,"div",20)(993,"span",21),Qx(994," icon"),zl(995,"br"),og()()(),Il(996,"td",22)(997,"code",27),Qx(998,"string "),og(),Il(999,"code",35),Qx(1e3," TemplateRef<void>"),og()(),Il(1001,"td",25)(1002,"em")(1003,"strong"),Qx(1004,"(opcional)"),og()(),Il(1005,"p"),Qx(1006,"\xCDcone exibido ao lado esquerdo do r\xF3tulo."),og(),Il(1007,"p"),Qx(1008,"Aceita \xEDcones da "),Il(1009,"a",36),Qx(1010,"Biblioteca de \xEDcones"),og(),Qx(1011,`, fontes externas (ex: Font Awesome)
ou um `),Il(1012,"code"),Qx(1013,"TemplateRef"),og(),Qx(1014," para \xEDcones customizados."),og(),Il(1015,"pre")(1016,"code"),Qx(1017,`{ label: 'A\xE7\xE3o', icon: 'an an-newspaper' }
`),og()()()(),Il(1018,"tr",18)(1019,"td",19)(1020,"div",20)(1021,"span",21),Qx(1022," label"),zl(1023,"br"),og()()(),Il(1024,"td",22)(1025,"code",27),Qx(1026,"string"),og()(),Il(1027,"td",25)(1028,"p"),Qx(1029,"R\xF3tulo da a\xE7\xE3o."),og(),Il(1030,"p"),Qx(1031,"A label tamb\xE9m pode representar o agrupador de subitens quando a a\xE7\xE3o possuir "),Il(1032,"code"),Qx(1033,"subItems"),og(),Qx(1034,"."),og()()(),Il(1035,"tr",18)(1036,"td",19)(1037,"div",20)(1038,"span",21),Qx(1039," selected"),zl(1040,"br"),og()()(),Il(1041,"td",22)(1042,"code",32),Qx(1043,"boolean"),og()(),Il(1044,"td",25)(1045,"em")(1046,"strong"),Qx(1047,"(opcional)"),og()(),Il(1048,"p"),Qx(1049,"Define se a a\xE7\xE3o est\xE1 selecionada."),og()()(),Il(1050,"tr",18)(1051,"td",19)(1052,"div",20)(1053,"span",21),Qx(1054," separator"),zl(1055,"br"),og()()(),Il(1056,"td",22)(1057,"code",32),Qx(1058,"boolean"),og()(),Il(1059,"td",25)(1060,"em")(1061,"strong"),Qx(1062,"(opcional)"),og()(),Il(1063,"p"),Qx(1064,"Atribui uma linha separadora acima do item."),og()()(),Il(1065,"tr",18)(1066,"td",19)(1067,"div",20)(1068,"span",21),Qx(1069," subItems"),zl(1070,"br"),og()()(),Il(1071,"td",22)(1072,"code",23),Qx(1073,"Array<PoPopupAction>"),og()(),Il(1074,"td",25)(1075,"em")(1076,"strong"),Qx(1077,"(opcional)"),og()(),Il(1078,"p"),Qx(1079,"Define uma lista de subitens para cria\xE7\xE3o de menus aninhados."),og(),Il(1080,"p"),Qx(1081,`Ao definir esta propriedade, o item exibir\xE1 um \xEDcone indicador de subn\xEDvel.
Recomenda-se utilizar no m\xE1ximo tr\xEAs n\xEDveis hier\xE1rquicos para garantir a usabilidade.`),og(),Il(1082,"blockquote")(1083,"p"),Qx(1084,"As propriedades "),Il(1085,"code"),Qx(1086,"disabled"),og(),Qx(1087,", "),Il(1088,"code"),Qx(1089,"type"),og(),Qx(1090," e "),Il(1091,"code"),Qx(1092,"visible"),og(),Qx(1093," n\xE3o s\xE3o aplicadas visualmente ao item agrupador."),og()(),Il(1094,"blockquote")(1095,"p"),Qx(1096,"Quando "),Il(1097,"code"),Qx(1098,"url"),og(),Qx(1099," \xE9 informada em um agrupador, o redirecionamento ter\xE1 prioridade e os subitens n\xE3o ser\xE3o abertos."),og()(),Il(1100,"blockquote")(1101,"p"),Qx(1102,"Em subn\xEDveis aninhados, o "),Il(1103,"code"),Qx(1104,"icon"),og(),Qx(1105," do agrupador \xE9 substitu\xEDdo pelo indicador de navega\xE7\xE3o (seta)."),og()()()(),Il(1106,"tr",18)(1107,"td",19)(1108,"div",20)(1109,"span",21),Qx(1110," type"),zl(1111,"br"),og()()(),Il(1112,"td",22)(1113,"code",27),Qx(1114,"string"),og()(),Il(1115,"td",25)(1116,"em")(1117,"strong"),Qx(1118,"(opcional)"),og()(),Il(1119,"p"),Qx(1120,"Define a cor do item."),og(),Il(1121,"p"),Qx(1122,"Valores v\xE1lidos:"),og(),Il(1123,"ul")(1124,"li")(1125,"code"),Qx(1126,"default"),og()(),Il(1127,"li")(1128,"code"),Qx(1129,"danger"),og()()()()(),Il(1130,"tr",18)(1131,"td",19)(1132,"div",20)(1133,"span",21),Qx(1134," url"),zl(1135,"br"),og()()(),Il(1136,"td",22)(1137,"code",27),Qx(1138,"string"),og()(),Il(1139,"td",25)(1140,"em")(1141,"strong"),Qx(1142,"(opcional)"),og()(),Il(1143,"p"),Qx(1144,"URL para redirecionamento. Aceita rotas internas e links externos."),og(),Il(1145,"p"),Qx(1146,`A url tamb\xE9m pode ser configurada para o agrupador de subitens.
Entretanto, quando a `),Il(1147,"code"),Qx(1148,"url"),og(),Qx(1149," \xE9 informada em um agrupador, o clique "),Il(1150,"strong"),Qx(1151,"n\xE3o abrir\xE1 os subitens"),og(),Qx(1152,`, pois o item ser\xE1
tratado como um link e o redirecionamento ter\xE1 prioridade sobre a exibi\xE7\xE3o da lista.`),og(),Il(1153,"blockquote")(1154,"p"),Qx(1155,"Quando informada, tem prioridade sobre a propriedade "),Il(1156,"code"),Qx(1157,"action"),og(),Qx(1158,"."),og()()()(),Il(1159,"tr",18)(1160,"td",19)(1161,"div",20)(1162,"span",21),Qx(1163," visible"),zl(1164,"br"),og()()(),Il(1165,"td",22)(1166,"code",32),Qx(1167,"boolean "),og(),Il(1168,"code",39),Qx(1169," Function"),og()(),Il(1170,"td",25)(1171,"em")(1172,"strong"),Qx(1173,"(opcional)"),og()(),Il(1174,"p"),Qx(1175,"Define a visibilidade da a\xE7\xE3o. Aceita um valor booleano ou uma fun\xE7\xE3o que retorna booleano."),og()()()(),Il(1176,"h4",38)(1177,"code",5),Qx(1178,"PoWidgetAvatar"),og()(),Il(1179,"div",2)(1180,"p"),Qx(1181,"Interface para defini\xE7\xE3o do avatar no "),Il(1182,"code"),Qx(1183,"po-widget"),og(),Qx(1184,"."),og()(),Il(1185,"h4",14),Qx(1186,"Propriedades"),og(),Il(1187,"table",15)(1188,"tr",16)(1189,"th",17),Qx(1190,"Nome"),og(),Il(1191,"th",17),Qx(1192,"Tipo"),og(),Il(1193,"th",17),Qx(1194,"Descri\xE7\xE3o"),og()(),Il(1195,"tr",18)(1196,"td",19)(1197,"div",20)(1198,"span",21),Qx(1199," customTemplate"),zl(1200,"br"),og()()(),Il(1201,"td",22)(1202,"code",40),Qx(1203,"TemplateRef<any>"),og()(),Il(1204,"td",25)(1205,"em")(1206,"strong"),Qx(1207,"(opcional)"),og()(),Il(1208,"p"),Qx(1209,"Permite a cria\xE7\xE3o de template customizado para o avatar"),og(),Il(1210,"pre")(1211,"code"),Qx(1212,`<po-widget
 [p-avatar]="{ customTemplate: customAvatar }"
/>

<ng-template #customAvatar>
  ...
</ng-template>
`),og()()()(),Il(1213,"tr",18)(1214,"td",19)(1215,"div",20)(1216,"span",21),Qx(1217," size"),zl(1218,"br"),og()()(),Il(1219,"td",22)(1220,"code",27),Qx(1221,"string"),og()(),Il(1222,"td",25)(1223,"em")(1224,"strong"),Qx(1225,"(opcional)"),og()(),Il(1226,"p"),Qx(1227,"Tamanho de exibi\xE7\xE3o do componente "),Il(1228,"code"),Qx(1229,"po-avatar"),og(),Qx(1230,"."),og(),Il(1231,"p"),Qx(1232,"Valores v\xE1lidos:"),og(),Il(1233,"ul")(1234,"li")(1235,"code"),Qx(1236,"xs"),og(),Qx(1237," (24x24)"),og(),Il(1238,"li")(1239,"code"),Qx(1240,"sm"),og(),Qx(1241," (32x32)"),og(),Il(1242,"li")(1243,"code"),Qx(1244,"md"),og(),Qx(1245," (64x64)"),og(),Il(1246,"li")(1247,"code"),Qx(1248,"lg"),og(),Qx(1249," (96x96)"),og(),Il(1250,"li")(1251,"code"),Qx(1252,"xl"),og(),Qx(1253," (144x144)"),og()()()(),Il(1254,"tr",18)(1255,"td",19)(1256,"div",20)(1257,"span",21),Qx(1258," src"),zl(1259,"br"),og()()(),Il(1260,"td",22)(1261,"code",27),Qx(1262,"string"),og()(),Il(1263,"td",25)(1264,"em")(1265,"strong"),Qx(1266,"(opcional)"),og()(),Il(1267,"p"),Qx(1268,"Fonte da imagem que pode ser um caminho local ("),Il(1269,"code"),Qx(1270,"./assets/images/logo-black-small.png"),og(),Qx(1271,`)
ou um servidor externo (`),Il(1272,"code"),Qx(1273,"https://po-ui.io/assets/images/logo-black-small.png"),og(),Qx(1274,")."),og()()(),Il(1275,"tr",18)(1276,"td",19)(1277,"div",20)(1278,"span",21),Qx(1279," widthCustomTemplate"),zl(1280,"br"),og()()(),Il(1281,"td",22)(1282,"code",27),Qx(1283,"string"),og()(),Il(1284,"td",25)(1285,"em")(1286,"strong"),Qx(1287,"(opcional)"),og()(),Il(1288,"p"),Qx(1289,"Define a largura em porcentagem do "),Il(1290,"code"),Qx(1291,"customTemplate"),og(),Qx(1292,"."),og(),Il(1293,"p"),Qx(1294,"O valor m\xE1ximo aceito \xE9 "),Il(1295,"code"),Qx(1296,"50%"),og(),Qx(1297,"."),og()()()(),Il(1298,"h3"),Qx(1299,"Enums"),og(),Il(1300,"h4",4)(1301,"code",5),Qx(1302,"PoButtonKind"),og()(),Il(1303,"div",2)(1304,"p"),Qx(1305,"Estilos dispon\xEDveis do button."),og()(),Il(1306,"h4",14),Qx(1307,"Propriedades"),og(),Il(1308,"table",15)(1309,"tr",16)(1310,"th",17),Qx(1311,"Nome"),og(),Il(1312,"th",17),Qx(1313,"Descri\xE7\xE3o"),og()(),Il(1314,"tr",18)(1315,"td",19)(1316,"div",20)(1317,"span",21),Qx(1318," primary"),zl(1319,"br"),og()()(),Il(1320,"td",25)(1321,"p"),Qx(1322,"Estilo prim\xE1rio, usado para a\xE7\xF5es principais que requerem maior destaque."),og()()(),Il(1323,"tr",18)(1324,"td",19)(1325,"div",20)(1326,"span",21),Qx(1327," secondary"),zl(1328,"br"),og()()(),Il(1329,"td",25)(1330,"p"),Qx(1331,"Estilo secund\xE1rio, usado como padr\xE3o, para a\xE7\xF5es comuns."),og()()(),Il(1332,"tr",18)(1333,"td",19)(1334,"div",20)(1335,"span",21),Qx(1336," tertiary"),zl(1337,"br"),og()()(),Il(1338,"td",25)(1339,"p"),Qx(1340,"Estilo terci\xE1rio, ideal para a\xE7\xF5es menos importantes, sem fundo preenchido."),og()()()()());},dependencies:[Ka],encapsulation:2})}return o})();var Ae=(()=>{class o{route;router;sub;hidePoWebSample=true;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(p,l){this.route=p,this.router=l;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let l=p.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:"merge"}),this.activeTab=p;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(l){return new(l||o)(C(Xn),C(En))};static \u0275cmp=Un({type:o,selectors:[["ng-component"]],standalone:false,decls:9,vars:4,consts:[["p-title","Widget",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,i){l&1&&(Il(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return i.changeTab("doc")}),zl(3,"sample-po-widget-doc"),og(),Il(4,"po-tab",3),ft("p-click",function(){return i.changeTab("web")}),zl(5,"sample-po-widget-basic-view")(6,"sample-po-widget-labs-view")(7,"sample-po-widget-finance-dashboard-view")(8,"sample-po-widget-card-view"),og()()()),l&2&&(nw("p-actions",i.actions),Lp(2),nw("p-active",i.activeTab==="doc"),Lp(2),nw("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[cNe,qme,Yme,ye,we,_e,Me,De],encapsulation:2})}return o})();var tt=[{path:"",component:Ae}],We=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275mod=fe$1({type:o});static \u0275inj=ue({imports:[uL.forChild(tt),uL]})}return o})();var Ot=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275mod=fe$1({type:o});static \u0275inj=ue({imports:[sr,We]})}return o})();
export{Ot as DocPoWidgetModule};