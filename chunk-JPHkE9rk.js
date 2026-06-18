import {f as fe$1,u as ue$1,s as sr,a as uL,C,c3 as Xn,E as En,U as Un,b as f,aW as Yp,c5 as Vde,dm as vNe,J as zl,an as DO,aH as Ka,b8 as qme,b9 as Yme,H as Il,q as Qx,R as og,a1 as ft,A as Lp,ar as Ux,au as dg,T as nw,bs as uN,aX as G9,aF as $9,aY as z9,aG as mk,aZ as hk,b0 as Qt,b1 as mv,b4 as F3,cp as Hhe,c8 as Dde,aJ as qhe,bH as k3,aB as Dx,aM as ww,aN as QA,bd as Ax,aO as Ew,aP as e0,ba as yNe,X as we$1,a3 as cNe,aD as Xy,aT as eN,aE as Qy}from'./main-FCMDZGSJ.js';var le=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-toolbar-basic"]],standalone:false,decls:1,vars:0,consts:[["p-title","PO Toolbar"]],template:function(p,n){p&1&&zl(0,"po-toolbar",0);},dependencies:[vNe],encapsulation:2,changeDetection:1})}return a})();var Ee=a=>({"docs-sample-code-tabs":a}),pe=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-toolbar-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Toolbar Basic"),og(),Il(4,"a",2),ft("click",function(){return n.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-toolbar-basic/sample-po-toolbar-basic.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-toolbar p-title="PO Toolbar"></po-toolbar>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-toolbar-basic/sample-po-toolbar-basic.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-toolbar-basic',
  templateUrl: './sample-po-toolbar-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoToolbarBasicComponent {}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-toolbar-basic"),og(),zl(23,"hr")),p&2&&(Lp(5),Ux("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,Ee,n.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,le],encapsulation:2})}return a})();var me=(()=>{class a{poNotification=f(Yp);action;actions;actionsIcon;notificationActions;notificationNumber;profile;profileActions;showNotification;title;toolbarActionType;actionTypes=[{value:"danger",label:"Danger"},{value:"default",label:"Default"}];iconOptions=[{value:"an an-chats",label:"an an-chats"},{value:"an an-clock",label:"an an-clock"},{value:"an an-sign-out",label:"an an-sign-out"},{value:"an an-lock",label:"an an-lock"},{value:"fa fa-calculator",label:"fa fa-calculator"},{value:"far fa-comment-alt",label:"far fa-comment-alt"}];actionsIconOptions=[{value:"an an-clock",label:"an an-clock"},{value:"an an-sign-out",label:"an an-sign-out"},{value:"an an-lock",label:"an an-lock"},{value:"an an-gear",label:"an an-gear"},{value:"far fa-comment-alt",label:"far fa-comment-alt"}];toolbarActionTypes=[{label:"Actions",value:"actions"},{label:"Profile",value:"profile"},{label:"Notification",value:"notification"}];ngOnInit(){this.restore();}addAction(l,p){let n=Object.assign({},l);n.action=n.action?this.showAction.bind(this,n.action):void 0,this.toolbarActionType==="profile"?this.profileActions.push(n):this.toolbarActionType==="notification"?this.notificationActions.push(n):this.actions.push(n),p.reset();}restore(){this.action={label:void 0},this.profile={avatar:"",subtitle:"",title:""},this.actions=[],this.actionsIcon=void 0,this.profileActions=[],this.notificationActions=[],this.notificationNumber=void 0,this.showNotification=true,this.title="PO Toolbar";}showAction(l){this.poNotification.success(`Action clicked: ${l}`);}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-toolbar-labs"]],standalone:false,decls:33,vars:27,consts:[["formAction","ngForm"],["formProfile","ngForm"],["formToolbar","ngForm"],[3,"p-actions","p-actions-icon","p-profile","p-profile-actions","p-notification-actions","p-notification-number","p-show-notification","p-title"],[1,"sample-container"],[1,"po-row"],["name","actionAction","p-clean","","p-label","Action",1,"po-md-6",3,"ngModelChange","ngModel"],["name","actionIcon","p-clean","","p-label","Action icon",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","actionLabel","p-clean","","p-label","Action label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","actionUrl","p-clean","","p-label","Action url",1,"po-md-6",3,"ngModelChange","ngModel"],["name","actionType","p-label","Action type",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","actionDisabled","p-clean","","p-label","Action separator",1,"po-md-6",3,"ngModelChange","ngModel"],["name","toolbarActionType","p-columns","3","p-label","Toolbar action type",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["p-label","Add Action",1,"po-md-3",3,"p-click","p-disabled"],["name","actionsIcon","p-clean","","p-label","Actions icon",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","profileTitle","p-clean","","p-label","Profile title","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","profileSubtitle","p-clean","","p-label","Profile subtitle",1,"po-md-6",3,"ngModelChange","ngModel"],["name","profileAvatar","p-clean","","p-label","Profile avatar",1,"po-md-6",3,"ngModelChange","ngModel"],["name","title","p-clean","","p-label","Title","p-required","",1,"po-md-4",3,"ngModelChange","ngModel"],["name","notificationNumber","p-clean","","p-label","Notification number",1,"po-md-4",3,"ngModelChange","ngModel"],["name","showNotification","p-clean","","p-label","Show notification",1,"po-md-4",3,"ngModelChange","ngModel"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(p,n){if(p&1){let s=Dx();zl(0,"po-toolbar",3),Il(1,"div",4)(2,"form",null,0)(4,"div",5)(5,"po-input",6),ww("ngModelChange",function(i){return Xy(s),eN(n.action.action,i)||(n.action.action=i),Qy(i)}),og(),QA(),Il(6,"po-select",7),ww("ngModelChange",function(i){return Xy(s),eN(n.action.icon,i)||(n.action.icon=i),Qy(i)}),og(),QA(),Il(7,"po-input",8),ww("ngModelChange",function(i){return Xy(s),eN(n.action.label,i)||(n.action.label=i),Qy(i)}),og(),QA(),Il(8,"po-input",9),ww("ngModelChange",function(i){return Xy(s),eN(n.action.url,i)||(n.action.url=i),Qy(i)}),og(),QA(),Il(9,"po-radio-group",10),ww("ngModelChange",function(i){return Xy(s),eN(n.action.type,i)||(n.action.type=i),Qy(i)}),og(),QA(),Il(10,"po-switch",11),ww("ngModelChange",function(i){return Xy(s),eN(n.action.separator,i)||(n.action.separator=i),Qy(i)}),og(),QA(),Il(11,"po-radio-group",12),ww("ngModelChange",function(i){return Xy(s),eN(n.toolbarActionType,i)||(n.toolbarActionType=i),Qy(i)}),og(),QA(),og(),Il(12,"div",5)(13,"po-button",13),ft("p-click",function(){Xy(s);let i=Ax(3);return Qy(n.addAction(n.action,i))}),og()()(),zl(14,"po-divider"),Il(15,"div",5)(16,"po-select",14),ww("ngModelChange",function(i){return Xy(s),eN(n.actionsIcon,i)||(n.actionsIcon=i),Qy(i)}),og(),QA(),og(),zl(17,"po-divider"),Il(18,"form",null,1)(20,"div",5)(21,"po-input",15),ww("ngModelChange",function(i){return Xy(s),eN(n.profile.title,i)||(n.profile.title=i),Qy(i)}),og(),QA(),Il(22,"po-input",16),ww("ngModelChange",function(i){return Xy(s),eN(n.profile.subtitle,i)||(n.profile.subtitle=i),Qy(i)}),og(),QA(),Il(23,"po-input",17),ww("ngModelChange",function(i){return Xy(s),eN(n.profile.avatar,i)||(n.profile.avatar=i),Qy(i)}),og(),QA(),og()(),zl(24,"po-divider"),Il(25,"form",null,2)(27,"div",5)(28,"po-input",18),ww("ngModelChange",function(i){return Xy(s),eN(n.title,i)||(n.title=i),Qy(i)}),og(),QA(),Il(29,"po-number",19),ww("ngModelChange",function(i){return Xy(s),eN(n.notificationNumber,i)||(n.notificationNumber=i),Qy(i)}),og(),QA(),Il(30,"po-switch",20),ww("ngModelChange",function(i){return Xy(s),eN(n.showNotification,i)||(n.showNotification=i),Qy(i)}),og(),QA(),og(),Il(31,"div",5)(32,"po-button",21),ft("p-click",function(){Xy(s);let i=Ax(3),ge=Ax(19);return Ax(26).reset(),ge.reset(),i.reset(),Qy(n.restore())}),og()()()();}if(p&2){let s=Ax(3);nw("p-actions",n.actions)("p-actions-icon",n.actionsIcon)("p-profile",n.profile)("p-profile-actions",n.profileActions)("p-notification-actions",n.notificationActions)("p-notification-number",n.notificationNumber)("p-show-notification",n.showNotification)("p-title",n.title),Lp(5),Ew("ngModel",n.action.action),e0(),Lp(),Ew("ngModel",n.action.icon),nw("p-options",n.iconOptions),e0(),Lp(),Ew("ngModel",n.action.label),e0(),Lp(),Ew("ngModel",n.action.url),e0(),Lp(),Ew("ngModel",n.action.type),nw("p-options",n.actionTypes),e0(),Lp(),Ew("ngModel",n.action.separator),e0(),Lp(),Ew("ngModel",n.toolbarActionType),nw("p-options",n.toolbarActionTypes),e0(),Lp(2),nw("p-disabled",s.invalid),Lp(3),Ew("ngModel",n.actionsIcon),nw("p-options",n.actionsIconOptions),e0(),Lp(5),Ew("ngModel",n.profile.title),e0(),Lp(),Ew("ngModel",n.profile.subtitle),e0(),Lp(),Ew("ngModel",n.profile.avatar),e0(),Lp(5),Ew("ngModel",n.title),e0(),Lp(),Ew("ngModel",n.notificationNumber),e0(),Lp(),Ew("ngModel",n.showNotification),e0();}},dependencies:[G9,$9,z9,mk,hk,Qt,mv,F3,Hhe,Dde,qhe,k3,vNe],styles:[".sample-container[_ngcontent-%COMP%]{margin-top:50px}"],changeDetection:1})}return a})();var ve=a=>({"docs-sample-code-tabs":a}),se=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-toolbar-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Toolbar Labs"),og(),Il(4,"a",2),ft("click",function(){return n.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-toolbar-labs/sample-po-toolbar-labs.component.html"),og(),Il(13,"pre",7),Qx(14,`<style>
  .sample-container {
    margin-top: 50px;
  }
</style>

<po-toolbar
  [p-actions]="actions"
  [p-actions-icon]="actionsIcon"
  [p-profile]="profile"
  [p-profile-actions]="profileActions"
  [p-notification-actions]="notificationActions"
  [p-notification-number]="notificationNumber"
  [p-show-notification]="showNotification"
  [p-title]="title"
>
</po-toolbar>

<div class="sample-container">
  <form #formAction="ngForm">
    <div class="po-row">
      <po-input class="po-md-6" name="actionAction" [(ngModel)]="action.action" p-clean p-label="Action"> </po-input>

      <po-select
        class="po-md-6"
        name="actionIcon"
        [(ngModel)]="action.icon"
        p-clean
        p-label="Action icon"
        [p-options]="iconOptions"
      >
      </po-select>

      <po-input class="po-md-6" name="actionLabel" [(ngModel)]="action.label" p-clean p-label="Action label" p-required>
      </po-input>

      <po-input class="po-md-6" name="actionUrl" [(ngModel)]="action.url" p-clean p-label="Action url"> </po-input>

      <po-radio-group
        class="po-md-6"
        name="actionType"
        [(ngModel)]="action.type"
        p-label="Action type"
        [p-options]="actionTypes"
      >
      </po-radio-group>

      <po-switch
        class="po-md-6"
        name="actionDisabled"
        [(ngModel)]="action.separator"
        p-clean
        p-label="Action separator"
      >
      </po-switch>

      <po-radio-group
        class="po-md-6"
        name="toolbarActionType"
        [(ngModel)]="toolbarActionType"
        p-columns="3"
        p-label="Toolbar action type"
        [p-options]="toolbarActionTypes"
      >
      </po-radio-group>
    </div>

    <div class="po-row">
      <po-button
        class="po-md-3"
        p-label="Add Action"
        [p-disabled]="formAction.invalid"
        (p-click)="addAction(action, formAction)"
      >
      </po-button>
    </div>
  </form>

  <po-divider />

  <div class="po-row">
    <po-select
      class="po-md-6"
      name="actionsIcon"
      [(ngModel)]="actionsIcon"
      p-clean
      p-label="Actions icon"
      [p-options]="actionsIconOptions"
    >
    </po-select>
  </div>

  <po-divider />

  <form #formProfile="ngForm">
    <div class="po-row">
      <po-input
        class="po-md-6"
        name="profileTitle"
        [(ngModel)]="profile.title"
        p-clean
        p-label="Profile title"
        p-required
      >
      </po-input>

      <po-input
        class="po-md-6"
        name="profileSubtitle"
        [(ngModel)]="profile.subtitle"
        p-clean
        p-label="Profile subtitle"
      >
      </po-input>

      <po-input class="po-md-6" name="profileAvatar" [(ngModel)]="profile.avatar" p-clean p-label="Profile avatar">
      </po-input>
    </div>
  </form>

  <po-divider />

  <form #formToolbar="ngForm">
    <div class="po-row">
      <po-input class="po-md-4" name="title" [(ngModel)]="title" p-clean p-label="Title" p-required> </po-input>

      <po-number
        class="po-md-4"
        name="notificationNumber"
        [(ngModel)]="notificationNumber"
        p-clean
        p-label="Notification number"
      >
      </po-number>

      <po-switch
        class="po-md-4"
        name="showNotification"
        [(ngModel)]="showNotification"
        p-clean
        p-label="Show notification"
      >
      </po-switch>
    </div>

    <div class="po-row">
      <po-button
        class="po-md-3"
        p-label="Sample Restore"
        (p-click)="formToolbar.reset(); formProfile.reset(); formAction.reset(); restore()"
      >
      </po-button>
    </div>
  </form>
</div>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-toolbar-labs/sample-po-toolbar-labs.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
import { NgForm } from '@angular/forms';

import {
  PoNotificationService,
  PoRadioGroupOption,
  PoSelectOption,
  PoToolbarAction,
  PoToolbarProfile
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-toolbar-labs',
  templateUrl: './sample-po-toolbar-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoToolbarLabsComponent implements OnInit {
  private poNotification = inject(PoNotificationService);

  action: PoToolbarAction;
  actions: Array<PoToolbarAction>;
  actionsIcon: string;
  notificationActions: Array<PoToolbarAction>;
  notificationNumber: number;
  profile: PoToolbarProfile;
  profileActions: Array<PoToolbarAction>;
  showNotification: boolean;
  title: string;
  toolbarActionType: string;

  public readonly actionTypes: Array<PoRadioGroupOption> = [
    { value: 'danger', label: 'Danger' },
    { value: 'default', label: 'Default' }
  ];

  public readonly iconOptions: Array<PoSelectOption> = [
    { value: 'an an-chats', label: 'an an-chats' },
    { value: 'an an-clock', label: 'an an-clock' },
    { value: 'an an-sign-out', label: 'an an-sign-out' },
    { value: 'an an-lock', label: 'an an-lock' },
    { value: 'fa fa-calculator', label: 'fa fa-calculator' },
    { value: 'far fa-comment-alt', label: 'far fa-comment-alt' }
  ];

  public readonly actionsIconOptions: Array<PoSelectOption> = [
    { value: 'an an-clock', label: 'an an-clock' },
    { value: 'an an-sign-out', label: 'an an-sign-out' },
    { value: 'an an-lock', label: 'an an-lock' },
    { value: 'an an-gear', label: 'an an-gear' },
    { value: 'far fa-comment-alt', label: 'far fa-comment-alt' }
  ];

  public readonly toolbarActionTypes: Array<PoRadioGroupOption> = [
    { label: 'Actions', value: 'actions' },
    { label: 'Profile', value: 'profile' },
    { label: 'Notification', value: 'notification' }
  ];

  ngOnInit() {
    this.restore();
  }

  addAction(action, form: NgForm) {
    const newAction = Object.assign({}, action);

    newAction.action = newAction.action ? this.showAction.bind(this, newAction.action) : undefined;

    if (this.toolbarActionType === 'profile') {
      this.profileActions.push(newAction);
    } else if (this.toolbarActionType === 'notification') {
      this.notificationActions.push(newAction);
    } else {
      this.actions.push(newAction);
    }
    form.reset();
  }

  restore() {
    this.action = { label: undefined };
    this.profile = { avatar: '', subtitle: '', title: '' };
    this.actions = [];
    this.actionsIcon = undefined;
    this.profileActions = [];
    this.notificationActions = [];
    this.notificationNumber = undefined;
    this.showNotification = true;
    this.title = 'PO Toolbar';
  }

  showAction(label: string): void {
    this.poNotification.success(\`Action clicked: \${label}\`);
  }
}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-toolbar-labs"),og(),zl(23,"hr")),p&2&&(Lp(5),Ux("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,ve,n.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,me],encapsulation:2})}return a})();var ce=(()=>{class a{poDialog=f(Vde);poNotification=f(Yp);notificationActions=[{icon:"an an-newspaper",label:"PO news, stay tuned!",type:"danger",action:l=>this.onClickNotification(l)},{icon:"an an-chat",label:"New message",type:"danger",action:l=>this.openDialog(l)}];profile={avatar:"https://via.placeholder.com/48x48?text=AVATAR",subtitle:"dev@po-ui.com.br",title:"Mr. Dev PO"};profileActions=[{icon:"an an-user",label:"User data",action:l=>this.showAction(l)},{icon:"an an-building-apartment",label:"Company data",action:l=>this.showAction(l)},{icon:"an an-gear",label:"Settings",action:l=>this.showAction(l)},{icon:"an an-sign-out",label:"Exit",type:"danger",separator:true,action:l=>this.showAction(l)}];actions=[{label:"Start cash register",action:l=>this.showAction(l)},{label:"Finalize cash register",action:l=>this.showAction(l)},{label:"Cash register options",action:l=>this.showAction(l)}];title="PO Toolbar Logged";getNotificationNumber(){return this.notificationActions.filter(l=>l.type==="danger").length}onClickNotification(l){window.open("https://github.com/po-ui/po-angular/blob/master/CHANGELOG.md","_blank"),l.type="default";}openDialog(l){this.poDialog.alert({title:"Welcome",message:"Hello Mr. Dev! Congratulations, you are a TOTVS!",ok:void 0}),l.type="default";}showAction(l){this.poNotification.success(`Action clicked: ${l.label}`);}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-toolbar-logged"]],standalone:false,features:[we$1([Yp])],decls:8,vars:7,consts:[["p-actions-icon","an an-shopping-cart-simple",3,"p-actions","p-profile","p-profile-actions","p-notification-actions","p-notification-number","p-title"],[1,"po-row"],[1,"sample-container"],[1,"po-sm-12"],[1,"po-font-title"],[1,"po-font-subtitle"]],template:function(p,n){p&1&&(zl(0,"po-toolbar",0),Il(1,"div",1)(2,"div",2)(3,"po-widget",3)(4,"div",4),Qx(5),og(),Il(6,"div",5),Qx(7,"Let's work hard!"),og()()()()),p&2&&(nw("p-actions",n.actions)("p-profile",n.profile)("p-profile-actions",n.profileActions)("p-notification-actions",n.notificationActions)("p-notification-number",n.getNotificationNumber())("p-title",n.title),Lp(5),dg("Hello, ",n.profile.title,"."));},dependencies:[vNe,yNe],styles:[".sample-container[_ngcontent-%COMP%]{margin-top:50px}"],changeDetection:1})}return a})();var we=a=>({"docs-sample-code-tabs":a}),de=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-toolbar-logged-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Toolbar - Logged"),og(),Il(4,"a",2),ft("click",function(){return n.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-toolbar-logged/sample-po-toolbar-logged.component.html"),og(),Il(13,"pre",7),Qx(14,`<style>
  .sample-container {
    margin-top: 50px;
  }
</style>

<po-toolbar
  p-actions-icon="an an-shopping-cart-simple"
  [p-actions]="actions"
  [p-profile]="profile"
  [p-profile-actions]="profileActions"
  [p-notification-actions]="notificationActions"
  [p-notification-number]="getNotificationNumber()"
  [p-title]="title"
>
</po-toolbar>

<div class="po-row">
  <div class="sample-container">
    <po-widget class="po-sm-12">
      <div class="po-font-title">Hello, { { profile.title }}.</div>
      <div class="po-font-subtitle">Let's work hard!</div>
    </po-widget>
  </div>
</div>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-toolbar-logged/sample-po-toolbar-logged.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

import { PoDialogService, PoNotificationService, PoToolbarAction, PoToolbarProfile } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-toolbar-logged',
  templateUrl: './sample-po-toolbar-logged.component.html',
  providers: [PoNotificationService],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoToolbarLoggedComponent {
  private poDialog = inject(PoDialogService);
  private poNotification = inject(PoNotificationService);

  notificationActions: Array<PoToolbarAction> = [
    {
      icon: 'an an-newspaper',
      label: 'PO news, stay tuned!',
      type: 'danger',
      action: item => this.onClickNotification(item)
    },
    { icon: 'an an-chat', label: 'New message', type: 'danger', action: item => this.openDialog(item) }
  ];

  profile: PoToolbarProfile = {
    avatar: 'https://via.placeholder.com/48x48?text=AVATAR',
    subtitle: 'dev@po-ui.com.br',
    title: 'Mr. Dev PO'
  };

  profileActions: Array<PoToolbarAction> = [
    { icon: 'an an-user', label: 'User data', action: item => this.showAction(item) },
    { icon: 'an an-building-apartment', label: 'Company data', action: item => this.showAction(item) },
    { icon: 'an an-gear', label: 'Settings', action: item => this.showAction(item) },
    { icon: 'an an-sign-out', label: 'Exit', type: 'danger', separator: true, action: item => this.showAction(item) }
  ];

  actions: Array<PoToolbarAction> = [
    { label: 'Start cash register', action: item => this.showAction(item) },
    { label: 'Finalize cash register', action: item => this.showAction(item) },
    { label: 'Cash register options', action: item => this.showAction(item) }
  ];

  title: string = 'PO Toolbar Logged';

  getNotificationNumber() {
    return this.notificationActions.filter(not => not.type === 'danger').length;
  }

  onClickNotification(item: PoToolbarAction) {
    window.open('https://github.com/po-ui/po-angular/blob/master/CHANGELOG.md', '_blank');

    item.type = 'default';
  }

  openDialog(item: PoToolbarAction) {
    this.poDialog.alert({
      title: 'Welcome',
      message: \`Hello Mr. Dev! Congratulations, you are a TOTVS!\`,
      ok: undefined
    });

    item.type = 'default';
  }

  showAction(item: PoToolbarAction): void {
    this.poNotification.success(\`Action clicked: \${item.label}\`);
  }
}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-toolbar-logged"),og(),zl(23,"hr")),p&2&&(Lp(5),Ux("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,we,n.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,ce],encapsulation:2})}return a})();var ue=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-toolbar-doc"]],standalone:false,decls:530,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","Array<PoToolbarAction>"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoToolbarProfile"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","Array<PoPopupAction>"]],template:function(p,n){p&1&&(Il(0,"div",0)(1,"p",1)(2,"code"),Qx(3,"import { PoToolbarModule } from '@po-ui/ng-components';"),og()(),Il(4,"div",2)(5,"p"),Qx(6,"M\xF3dulo do componente po-toolbar"),og()(),Il(7,"h3",3),Qx(8,"Componente"),og(),Il(9,"h4",4)(10,"code",5),Qx(11,"PoToolbarComponent"),og()(),Il(12,"div",2)(13,"p"),Qx(14,"O componente "),Il(15,"code"),Qx(16,"po-toolbar"),og(),Qx(17," \xE9 um cabe\xE7alho para o t\xEDtulo da aplica\xE7\xE3o e informa\xE7\xF5es de usu\xE1rio e notifica\xE7\xF5es quando houver necessidade. "),og()(),Il(18,"div",6)(19,"h4",7),Qx(20,"Seletor"),og(),Il(21,"pre",8),Qx(22,`<po-toolbar
    p-actions="Array<PoToolbarAction>"
    p-actions-icon="string | TemplateRef<void>"
    p-notification-actions="Array<PoToolbarAction>"
    p-notification-number="number"
    p-profile="PoToolbarProfile"
    p-profile-actions="Array<PoToolbarAction>"
    p-show-notification="boolean"
    p-title="string" >
</po-toolbar>
`),og()(),Il(23,"h4",9),Qx(24,"Propriedades"),og(),Il(25,"table",10)(26,"tr",11)(27,"th",12),Qx(28,"Nome"),og(),Il(29,"th",12),Qx(30,"Tipo"),og(),Il(31,"th",12),Qx(32,"Padr\xE3o"),og(),Il(33,"th",12),Qx(34,"Descri\xE7\xE3o"),og()(),Il(35,"tr",13)(36,"td",14)(37,"div",15)(38,"span",16),Qx(39," p-actions"),zl(40,"br"),og()()(),Il(41,"td",17)(42,"code",18),Qx(43,"Array<PoToolbarAction>"),og()(),Il(44,"td",19),Qx(45,"-"),og(),Il(46,"td",20)(47,"em")(48,"strong"),Qx(49,"(opcional)"),og()(),Il(50,"p"),Qx(51,"Define uma lista de a\xE7\xF5es que ser\xE3o exibidas ao clicar no \xEDcone declarado em "),Il(52,"code"),Qx(53,"p-actions-icon"),og(),Qx(54,"."),og()()(),Il(55,"tr",13)(56,"td",14)(57,"div",15)(58,"span",16),Qx(59," p-actions-icon"),zl(60,"br"),og()()(),Il(61,"td",17)(62,"code",21),Qx(63,"string "),og(),Il(64,"code",22),Qx(65," TemplateRef<void>"),og()(),Il(66,"td",19)(67,"p")(68,"code"),Qx(69,"an-dots-three"),og()()(),Il(70,"td",20)(71,"em")(72,"strong"),Qx(73,"(opcional)"),og()(),Il(74,"p"),Qx(75,"Define um "),Il(76,"a",23),Qx(77,"\xEDcone"),og(),Qx(78," para a propriedade "),Il(79,"code"),Qx(80,"p-actions"),og(),Qx(81,"."),og(),Il(82,"p"),Qx(83,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),Il(84,"a",23),Qx(85,"Biblioteca de \xEDcones"),og(),Qx(86,". conforme exemplo abaixo:"),og(),Il(87,"pre")(88,"code"),Qx(89,`<po-toolbar p-actions-icon="an an-user" [p-actions]="actions"></po-toolbar>
`),og()(),Il(90,"p"),Qx(91,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),Il(92,"em"),Qx(93,"Font Awesome"),og(),Qx(94,", da seguinte forma:"),og(),Il(95,"pre")(96,"code"),Qx(97,`<po-toolbar p-actions-icon="far fa-comment-alt" [p-actions]="actions"></po-toolbar>
`),og()(),Il(98,"p"),Qx(99,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),Il(100,"code"),Qx(101,"TemplateRef"),og(),Qx(102,", conforme exemplo abaixo:"),og(),Il(103,"pre")(104,"code"),Qx(105,`<po-toolbar [p-actions-icon]="template" [p-actions]="actions"></po-toolbar>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),og()(),Il(106,"blockquote")(107,"p"),Qx(108,"Para o \xEDcone enquadrar corretamente, deve-se utilizar "),Il(109,"code"),Qx(110,"font-size: inherit"),og(),Qx(111," caso o \xEDcone utilizado n\xE3o aplique-o."),og()(),Il(112,"blockquote")(113,"p"),Qx(114,"Caso n\xE3o haja a\xE7\xF5es definidas em "),Il(115,"code"),Qx(116,"p-actions"),og(),Qx(117,", o \xEDcone n\xE3o ser\xE1 exibido."),og()()()(),Il(118,"tr",13)(119,"td",14)(120,"div",15)(121,"span",16),Qx(122," p-notification-actions"),zl(123,"br"),og()()(),Il(124,"td",17)(125,"code",18),Qx(126,"Array<PoToolbarAction>"),og()(),Il(127,"td",19),Qx(128,"-"),og(),Il(129,"td",20)(130,"em")(131,"strong"),Qx(132,"(opcional)"),og()(),Il(133,"p"),Qx(134,"Lista de a\xE7\xF5es da notifica\xE7\xE3o."),og()()(),Il(135,"tr",13)(136,"td",14)(137,"div",15)(138,"span",16),Qx(139," p-notification-number"),zl(140,"br"),og()()(),Il(141,"td",17)(142,"code",24),Qx(143,"number"),og()(),Il(144,"td",19),Qx(145,"-"),og(),Il(146,"td",20)(147,"em")(148,"strong"),Qx(149,"(opcional)"),og()(),Il(150,"p"),Qx(151,"N\xFAmero de notifica\xE7\xF5es."),og()()(),Il(152,"tr",13)(153,"td",14)(154,"div",15)(155,"span",16),Qx(156," p-profile"),zl(157,"br"),og()()(),Il(158,"td",17)(159,"code",25),Qx(160,"PoToolbarProfile"),og()(),Il(161,"td",19),Qx(162,"-"),og(),Il(163,"td",20)(164,"em")(165,"strong"),Qx(166,"(opcional)"),og()(),Il(167,"p"),Qx(168,"Define o objeto que ser\xE1 o cabe\xE7alho da lista de a\xE7\xF5es com as informa\xE7\xF5es do perfil."),og()()(),Il(169,"tr",13)(170,"td",14)(171,"div",15)(172,"span",16),Qx(173," p-profile-actions"),zl(174,"br"),og()()(),Il(175,"td",17)(176,"code",18),Qx(177,"Array<PoToolbarAction>"),og()(),Il(178,"td",19),Qx(179,"-"),og(),Il(180,"td",20)(181,"em")(182,"strong"),Qx(183,"(opcional)"),og()(),Il(184,"p"),Qx(185,"Define uma lista de a\xE7\xF5es que ser\xE3o exibidas ao clicar no \xEDcone do perfil."),og()()(),Il(186,"tr",13)(187,"td",14)(188,"div",15)(189,"span",16),Qx(190," p-show-notification"),zl(191,"br"),og()()(),Il(192,"td",17)(193,"code",26),Qx(194,"boolean"),og()(),Il(195,"td",19),Qx(196,"-"),og(),Il(197,"td",20)(198,"em")(199,"strong"),Qx(200,"(opcional)"),og()(),Il(201,"p"),Qx(202,"Se falso, oculta o \xEDcone de notifica\xE7\xF5es."),og()()(),Il(203,"tr",13)(204,"td",14)(205,"div",15)(206,"span",16),Qx(207," p-title"),zl(208,"br"),og()()(),Il(209,"td",17)(210,"code",21),Qx(211,"string"),og()(),Il(212,"td",19),Qx(213,"-"),og(),Il(214,"td",20)(215,"p"),Qx(216,"T\xEDtulo do "),Il(217,"em"),Qx(218,"toolbar"),og(),Qx(219," e aplica\xE7\xE3o."),og()()()(),Il(220,"h3"),Qx(221,"Interfaces"),og(),Il(222,"h4",27)(223,"code",5),Qx(224,"PoToolbarAction"),og()(),Il(225,"div",2)(226,"p"),Qx(227,"Interface para lista de a\xE7\xF5es do componente. "),og()(),Il(228,"h4",9),Qx(229,"Propriedades"),og(),Il(230,"table",10)(231,"tr",11)(232,"th",12),Qx(233,"Nome"),og(),Il(234,"th",12),Qx(235,"Tipo"),og(),Il(236,"th",12),Qx(237,"Descri\xE7\xE3o"),og()(),Il(238,"tr",13)(239,"td",14)(240,"div",15)(241,"span",16),Qx(242," action"),zl(243,"br"),og()()(),Il(244,"td",17)(245,"code",28),Qx(246,"Function"),og()(),Il(247,"td",20)(248,"em")(249,"strong"),Qx(250,"(opcional)"),og()(),Il(251,"p"),Qx(252,"A\xE7\xE3o que ser\xE1 executada, sendo poss\xEDvel passar o nome ou a refer\xEAncia da fun\xE7\xE3o."),og(),Il(253,"p"),Qx(254,"A action tamb\xE9m pode ser executada para o agrupador de subitens quando a a\xE7\xE3o possuir "),Il(255,"code"),Qx(256,"subItems"),og(),Qx(257,"."),og(),Il(258,"blockquote")(259,"p"),Qx(260,"Para que a fun\xE7\xE3o seja executada no contexto do componente, utilize "),Il(261,"em"),Qx(262,"bind"),og(),Qx(263,`:
`),Il(264,"code"),Qx(265,"action: this.myFunction.bind(this)"),og()()()()(),Il(266,"tr",13)(267,"td",14)(268,"div",15)(269,"span",16),Qx(270," disabled"),zl(271,"br"),og()()(),Il(272,"td",17)(273,"code",26),Qx(274,"boolean "),og(),Il(275,"code",28),Qx(276," Function"),og()(),Il(277,"td",20)(278,"em")(279,"strong"),Qx(280,"(opcional)"),og()(),Il(281,"p"),Qx(282,"Desabilita a a\xE7\xE3o. Aceita um valor booleano ou uma fun\xE7\xE3o que retorna booleano."),og()()(),Il(283,"tr",13)(284,"td",14)(285,"div",15)(286,"span",16),Qx(287," icon"),zl(288,"br"),og()()(),Il(289,"td",17)(290,"code",21),Qx(291,"string "),og(),Il(292,"code",22),Qx(293," TemplateRef<void>"),og()(),Il(294,"td",20)(295,"em")(296,"strong"),Qx(297,"(opcional)"),og()(),Il(298,"p"),Qx(299,"\xCDcone exibido ao lado esquerdo do r\xF3tulo."),og(),Il(300,"p"),Qx(301,"Aceita \xEDcones da "),Il(302,"a",23),Qx(303,"Biblioteca de \xEDcones"),og(),Qx(304,`, fontes externas (ex: Font Awesome)
ou um `),Il(305,"code"),Qx(306,"TemplateRef"),og(),Qx(307," para \xEDcones customizados."),og(),Il(308,"pre")(309,"code"),Qx(310,`{ label: 'A\xE7\xE3o', icon: 'an an-newspaper' }
`),og()()()(),Il(311,"tr",13)(312,"td",14)(313,"div",15)(314,"span",16),Qx(315," label"),zl(316,"br"),og()()(),Il(317,"td",17)(318,"code",21),Qx(319,"string"),og()(),Il(320,"td",20)(321,"p"),Qx(322,"R\xF3tulo da a\xE7\xE3o."),og(),Il(323,"p"),Qx(324,"A label tamb\xE9m pode representar o agrupador de subitens quando a a\xE7\xE3o possuir "),Il(325,"code"),Qx(326,"subItems"),og(),Qx(327,"."),og()()(),Il(328,"tr",13)(329,"td",14)(330,"div",15)(331,"span",16),Qx(332," selected"),zl(333,"br"),og()()(),Il(334,"td",17)(335,"code",26),Qx(336,"boolean"),og()(),Il(337,"td",20)(338,"em")(339,"strong"),Qx(340,"(opcional)"),og()(),Il(341,"p"),Qx(342,"Define se a a\xE7\xE3o est\xE1 selecionada."),og()()(),Il(343,"tr",13)(344,"td",14)(345,"div",15)(346,"span",16),Qx(347," separator"),zl(348,"br"),og()()(),Il(349,"td",17)(350,"code",26),Qx(351,"boolean"),og()(),Il(352,"td",20)(353,"em")(354,"strong"),Qx(355,"(opcional)"),og()(),Il(356,"p"),Qx(357,"Atribui uma linha separadora acima do item."),og()()(),Il(358,"tr",13)(359,"td",14)(360,"div",15)(361,"span",16),Qx(362," subItems"),zl(363,"br"),og()()(),Il(364,"td",17)(365,"code",29),Qx(366,"Array<PoPopupAction>"),og()(),Il(367,"td",20)(368,"em")(369,"strong"),Qx(370,"(opcional)"),og()(),Il(371,"p"),Qx(372,"Define uma lista de subitens para cria\xE7\xE3o de menus aninhados."),og(),Il(373,"p"),Qx(374,`Ao definir esta propriedade, o item exibir\xE1 um \xEDcone indicador de subn\xEDvel.
Recomenda-se utilizar no m\xE1ximo tr\xEAs n\xEDveis hier\xE1rquicos para garantir a usabilidade.`),og(),Il(375,"blockquote")(376,"p"),Qx(377,"As propriedades "),Il(378,"code"),Qx(379,"disabled"),og(),Qx(380,", "),Il(381,"code"),Qx(382,"type"),og(),Qx(383," e "),Il(384,"code"),Qx(385,"visible"),og(),Qx(386," n\xE3o s\xE3o aplicadas visualmente ao item agrupador."),og()(),Il(387,"blockquote")(388,"p"),Qx(389,"Quando "),Il(390,"code"),Qx(391,"url"),og(),Qx(392," \xE9 informada em um agrupador, o redirecionamento ter\xE1 prioridade e os subitens n\xE3o ser\xE3o abertos."),og()(),Il(393,"blockquote")(394,"p"),Qx(395,"Em subn\xEDveis aninhados, o "),Il(396,"code"),Qx(397,"icon"),og(),Qx(398," do agrupador \xE9 substitu\xEDdo pelo indicador de navega\xE7\xE3o (seta)."),og()()()(),Il(399,"tr",13)(400,"td",14)(401,"div",15)(402,"span",16),Qx(403," type"),zl(404,"br"),og()()(),Il(405,"td",17)(406,"code",21),Qx(407,"string"),og()(),Il(408,"td",20)(409,"em")(410,"strong"),Qx(411,"(opcional)"),og()(),Il(412,"p"),Qx(413,"Define a cor do item."),og(),Il(414,"p"),Qx(415,"Valores v\xE1lidos:"),og(),Il(416,"ul")(417,"li")(418,"code"),Qx(419,"default"),og()(),Il(420,"li")(421,"code"),Qx(422,"danger"),og()()()()(),Il(423,"tr",13)(424,"td",14)(425,"div",15)(426,"span",16),Qx(427," url"),zl(428,"br"),og()()(),Il(429,"td",17)(430,"code",21),Qx(431,"string"),og()(),Il(432,"td",20)(433,"em")(434,"strong"),Qx(435,"(opcional)"),og()(),Il(436,"p"),Qx(437,"URL para redirecionamento. Aceita rotas internas e links externos."),og(),Il(438,"p"),Qx(439,`A url tamb\xE9m pode ser configurada para o agrupador de subitens.
Entretanto, quando a `),Il(440,"code"),Qx(441,"url"),og(),Qx(442," \xE9 informada em um agrupador, o clique "),Il(443,"strong"),Qx(444,"n\xE3o abrir\xE1 os subitens"),og(),Qx(445,`, pois o item ser\xE1
tratado como um link e o redirecionamento ter\xE1 prioridade sobre a exibi\xE7\xE3o da lista.`),og(),Il(446,"blockquote")(447,"p"),Qx(448,"Quando informada, tem prioridade sobre a propriedade "),Il(449,"code"),Qx(450,"action"),og(),Qx(451,"."),og()()()(),Il(452,"tr",13)(453,"td",14)(454,"div",15)(455,"span",16),Qx(456," visible"),zl(457,"br"),og()()(),Il(458,"td",17)(459,"code",26),Qx(460,"boolean "),og(),Il(461,"code",28),Qx(462," Function"),og()(),Il(463,"td",20)(464,"em")(465,"strong"),Qx(466,"(opcional)"),og()(),Il(467,"p"),Qx(468,"Define a visibilidade da a\xE7\xE3o. Aceita um valor booleano ou uma fun\xE7\xE3o que retorna booleano."),og()()()(),Il(469,"h4",27)(470,"code",5),Qx(471,"PoToolbarProfile"),og()(),Il(472,"div",2)(473,"p"),Qx(474,"Interface que define o perfil do "),Il(475,"code"),Qx(476,"PoToolbarComponent"),og(),Qx(477,"."),og()(),Il(478,"h4",9),Qx(479,"Propriedades"),og(),Il(480,"table",10)(481,"tr",11)(482,"th",12),Qx(483,"Nome"),og(),Il(484,"th",12),Qx(485,"Tipo"),og(),Il(486,"th",12),Qx(487,"Descri\xE7\xE3o"),og()(),Il(488,"tr",13)(489,"td",14)(490,"div",15)(491,"span",16),Qx(492," avatar"),zl(493,"br"),og()()(),Il(494,"td",17)(495,"code",21),Qx(496,"string"),og()(),Il(497,"td",20)(498,"em")(499,"strong"),Qx(500,"(opcional)"),og()(),Il(501,"p"),Qx(502,"Define o caminho da imagem do perfil."),og()()(),Il(503,"tr",13)(504,"td",14)(505,"div",15)(506,"span",16),Qx(507," subtitle"),zl(508,"br"),og()()(),Il(509,"td",17)(510,"code",21),Qx(511,"string"),og()(),Il(512,"td",20)(513,"em")(514,"strong"),Qx(515,"(opcional)"),og()(),Il(516,"p"),Qx(517,"Define um texto com menor destaque ao lado da imagem do perfil, como por exemplo o e-mail de usu\xE1rio."),og()()(),Il(518,"tr",13)(519,"td",14)(520,"div",15)(521,"span",16),Qx(522," title"),zl(523,"br"),og()()(),Il(524,"td",17)(525,"code",21),Qx(526,"string"),og()(),Il(527,"td",20)(528,"p"),Qx(529,"Define um texto com maior destaque ao lado da imagem do perfil, como por exemplo o nome de usu\xE1rio."),og()()()()());},dependencies:[Ka],encapsulation:2})}return a})();var be=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(l,p){this.route=l,this.router=p;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let p=l.view;this.activeTab=p||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:"merge"}),this.activeTab=l;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(p){return new(p||a)(C(Xn),C(En))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Toolbar",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(p,n){p&1&&(Il(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return n.changeTab("doc")}),zl(3,"sample-po-toolbar-doc"),og(),Il(4,"po-tab",3),ft("p-click",function(){return n.changeTab("web")}),zl(5,"sample-po-toolbar-basic-view")(6,"sample-po-toolbar-labs-view")(7,"sample-po-toolbar-logged-view"),og()()()),p&2&&(nw("p-actions",n.actions),Lp(2),nw("p-active",n.activeTab==="doc"),Lp(2),nw("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"));},dependencies:[cNe,qme,Yme,pe,se,de,ue],encapsulation:2})}return a})();var Ae=[{path:"",component:be}],fe=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue$1({imports:[uL.forChild(Ae),uL]})}return a})();var rt=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue$1({imports:[sr,fe]})}return a})();export{rt as DocPoToolbarModule};