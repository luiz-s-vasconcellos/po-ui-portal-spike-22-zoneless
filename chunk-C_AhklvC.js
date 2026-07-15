import {f as fe$1,u as ue$1,s as sr,m as mL,w,c3 as Xn,E as En,U as Un,c as f,aW as Yp,c5 as Ode,dl as fNe,F as Wl,an as SO,aH as Ka,b8 as Ume,b9 as $me,C as Sl,y as rN,J as og,a1 as ft,L as Lp,ar as Gx,au as dg,O as rw,bs as gN,aX as Q9,aF as Z9,aY as K9,aG as wk,aZ as _k,b0 as Qt,b1 as mv,b4 as L3,cp as Bhe,c8 as Tde,aJ as Whe,bH as k3,aB as Ix,aM as Cw,aN as n0,bd as kx,aO as ww,aP as i0,ba as vNe,Q as we$1,a3 as sNe,aD as Ky,aT as oN,aE as Xy}from'./main-TVDUJ47Y.js';var le=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-toolbar-basic"]],standalone:false,decls:1,vars:0,consts:[["p-title","PO Toolbar"]],template:function(p,n){p&1&&Wl(0,"po-toolbar",0);},dependencies:[fNe],encapsulation:2,changeDetection:1})}return a})();var Se=a=>({"docs-sample-code-tabs":a}),pe=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-toolbar-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),rN(3,"PO Toolbar Basic"),og(),Sl(4,"a",2),ft("click",function(){return n.toggleSampleCodeTabs()}),Wl(5,"span"),rN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),rN(12,"sample-po-toolbar-basic/sample-po-toolbar-basic.component.html"),og(),Sl(13,"pre",7),rN(14,`<po-toolbar p-title="PO Toolbar"></po-toolbar>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),rN(18,"sample-po-toolbar-basic/sample-po-toolbar-basic.component.ts"),og(),Sl(19,"pre",9),rN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-toolbar-basic',
  templateUrl: './sample-po-toolbar-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoToolbarBasicComponent {}
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-toolbar-basic"),og(),Wl(23,"hr")),p&2&&(Lp(5),Gx("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),rw("ngClass",gN(4,Se,n.hideSampleCodeTabs)));},dependencies:[SO,Ka,Ume,$me,le],encapsulation:2,changeDetection:1})}return a})();var me=(()=>{class a{poNotification=f(Yp);action;actions;actionsIcon;notificationActions;notificationNumber;profile;profileActions;showNotification;title;toolbarActionType;actionTypes=[{value:"danger",label:"Danger"},{value:"default",label:"Default"}];iconOptions=[{value:"an an-chats",label:"an an-chats"},{value:"an an-clock",label:"an an-clock"},{value:"an an-sign-out",label:"an an-sign-out"},{value:"an an-lock",label:"an an-lock"},{value:"fa fa-calculator",label:"fa fa-calculator"},{value:"far fa-comment-alt",label:"far fa-comment-alt"}];actionsIconOptions=[{value:"an an-clock",label:"an an-clock"},{value:"an an-sign-out",label:"an an-sign-out"},{value:"an an-lock",label:"an an-lock"},{value:"an an-gear",label:"an an-gear"},{value:"far fa-comment-alt",label:"far fa-comment-alt"}];toolbarActionTypes=[{label:"Actions",value:"actions"},{label:"Profile",value:"profile"},{label:"Notification",value:"notification"}];ngOnInit(){this.restore();}addAction(l,p){let n=Object.assign({},l);n.action=n.action?this.showAction.bind(this,n.action):void 0,this.toolbarActionType==="profile"?this.profileActions.push(n):this.toolbarActionType==="notification"?this.notificationActions.push(n):this.actions.push(n),p.reset();}restore(){this.action={label:void 0},this.profile={avatar:"",subtitle:"",title:""},this.actions=[],this.actionsIcon=void 0,this.profileActions=[],this.notificationActions=[],this.notificationNumber=void 0,this.showNotification=true,this.title="PO Toolbar";}showAction(l){this.poNotification.success(`Action clicked: ${l}`);}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-toolbar-labs"]],standalone:false,decls:33,vars:27,consts:[["formAction","ngForm"],["formProfile","ngForm"],["formToolbar","ngForm"],[3,"p-actions","p-actions-icon","p-profile","p-profile-actions","p-notification-actions","p-notification-number","p-show-notification","p-title"],[1,"sample-container"],[1,"po-row"],["name","actionAction","p-clean","","p-label","Action",1,"po-md-6",3,"ngModelChange","ngModel"],["name","actionIcon","p-clean","","p-label","Action icon",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","actionLabel","p-clean","","p-label","Action label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","actionUrl","p-clean","","p-label","Action url",1,"po-md-6",3,"ngModelChange","ngModel"],["name","actionType","p-label","Action type",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","actionDisabled","p-clean","","p-label","Action separator",1,"po-md-6",3,"ngModelChange","ngModel"],["name","toolbarActionType","p-columns","3","p-label","Toolbar action type",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["p-label","Add Action",1,"po-md-3",3,"p-click","p-disabled"],["name","actionsIcon","p-clean","","p-label","Actions icon",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","profileTitle","p-clean","","p-label","Profile title","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","profileSubtitle","p-clean","","p-label","Profile subtitle",1,"po-md-6",3,"ngModelChange","ngModel"],["name","profileAvatar","p-clean","","p-label","Profile avatar",1,"po-md-6",3,"ngModelChange","ngModel"],["name","title","p-clean","","p-label","Title","p-required","",1,"po-md-4",3,"ngModelChange","ngModel"],["name","notificationNumber","p-clean","","p-label","Notification number",1,"po-md-4",3,"ngModelChange","ngModel"],["name","showNotification","p-clean","","p-label","Show notification",1,"po-md-4",3,"ngModelChange","ngModel"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(p,n){if(p&1){let s=Ix();Wl(0,"po-toolbar",3),Sl(1,"div",4)(2,"form",null,0)(4,"div",5)(5,"po-input",6),Cw("ngModelChange",function(i){return Ky(s),oN(n.action.action,i)||(n.action.action=i),Xy(i)}),og(),n0(),Sl(6,"po-select",7),Cw("ngModelChange",function(i){return Ky(s),oN(n.action.icon,i)||(n.action.icon=i),Xy(i)}),og(),n0(),Sl(7,"po-input",8),Cw("ngModelChange",function(i){return Ky(s),oN(n.action.label,i)||(n.action.label=i),Xy(i)}),og(),n0(),Sl(8,"po-input",9),Cw("ngModelChange",function(i){return Ky(s),oN(n.action.url,i)||(n.action.url=i),Xy(i)}),og(),n0(),Sl(9,"po-radio-group",10),Cw("ngModelChange",function(i){return Ky(s),oN(n.action.type,i)||(n.action.type=i),Xy(i)}),og(),n0(),Sl(10,"po-switch",11),Cw("ngModelChange",function(i){return Ky(s),oN(n.action.separator,i)||(n.action.separator=i),Xy(i)}),og(),n0(),Sl(11,"po-radio-group",12),Cw("ngModelChange",function(i){return Ky(s),oN(n.toolbarActionType,i)||(n.toolbarActionType=i),Xy(i)}),og(),n0(),og(),Sl(12,"div",5)(13,"po-button",13),ft("p-click",function(){Ky(s);let i=kx(3);return Xy(n.addAction(n.action,i))}),og()()(),Wl(14,"po-divider"),Sl(15,"div",5)(16,"po-select",14),Cw("ngModelChange",function(i){return Ky(s),oN(n.actionsIcon,i)||(n.actionsIcon=i),Xy(i)}),og(),n0(),og(),Wl(17,"po-divider"),Sl(18,"form",null,1)(20,"div",5)(21,"po-input",15),Cw("ngModelChange",function(i){return Ky(s),oN(n.profile.title,i)||(n.profile.title=i),Xy(i)}),og(),n0(),Sl(22,"po-input",16),Cw("ngModelChange",function(i){return Ky(s),oN(n.profile.subtitle,i)||(n.profile.subtitle=i),Xy(i)}),og(),n0(),Sl(23,"po-input",17),Cw("ngModelChange",function(i){return Ky(s),oN(n.profile.avatar,i)||(n.profile.avatar=i),Xy(i)}),og(),n0(),og()(),Wl(24,"po-divider"),Sl(25,"form",null,2)(27,"div",5)(28,"po-input",18),Cw("ngModelChange",function(i){return Ky(s),oN(n.title,i)||(n.title=i),Xy(i)}),og(),n0(),Sl(29,"po-number",19),Cw("ngModelChange",function(i){return Ky(s),oN(n.notificationNumber,i)||(n.notificationNumber=i),Xy(i)}),og(),n0(),Sl(30,"po-switch",20),Cw("ngModelChange",function(i){return Ky(s),oN(n.showNotification,i)||(n.showNotification=i),Xy(i)}),og(),n0(),og(),Sl(31,"div",5)(32,"po-button",21),ft("p-click",function(){Ky(s);let i=kx(3),ge=kx(19);return kx(26).reset(),ge.reset(),i.reset(),Xy(n.restore())}),og()()()();}if(p&2){let s=kx(3);rw("p-actions",n.actions)("p-actions-icon",n.actionsIcon)("p-profile",n.profile)("p-profile-actions",n.profileActions)("p-notification-actions",n.notificationActions)("p-notification-number",n.notificationNumber)("p-show-notification",n.showNotification)("p-title",n.title),Lp(5),ww("ngModel",n.action.action),i0(),Lp(),ww("ngModel",n.action.icon),rw("p-options",n.iconOptions),i0(),Lp(),ww("ngModel",n.action.label),i0(),Lp(),ww("ngModel",n.action.url),i0(),Lp(),ww("ngModel",n.action.type),rw("p-options",n.actionTypes),i0(),Lp(),ww("ngModel",n.action.separator),i0(),Lp(),ww("ngModel",n.toolbarActionType),rw("p-options",n.toolbarActionTypes),i0(),Lp(2),rw("p-disabled",s.invalid),Lp(3),ww("ngModel",n.actionsIcon),rw("p-options",n.actionsIconOptions),i0(),Lp(5),ww("ngModel",n.profile.title),i0(),Lp(),ww("ngModel",n.profile.subtitle),i0(),Lp(),ww("ngModel",n.profile.avatar),i0(),Lp(5),ww("ngModel",n.title),i0(),Lp(),ww("ngModel",n.notificationNumber),i0(),Lp(),ww("ngModel",n.showNotification),i0();}},dependencies:[Q9,Z9,K9,wk,_k,Qt,mv,L3,Bhe,Tde,Whe,k3,fNe],styles:[".sample-container[_ngcontent-%COMP%]{margin-top:50px}"],changeDetection:1})}return a})();var ve=a=>({"docs-sample-code-tabs":a}),se=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-toolbar-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),rN(3,"PO Toolbar Labs"),og(),Sl(4,"a",2),ft("click",function(){return n.toggleSampleCodeTabs()}),Wl(5,"span"),rN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),rN(12,"sample-po-toolbar-labs/sample-po-toolbar-labs.component.html"),og(),Sl(13,"pre",7),rN(14,`<style>
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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),rN(18,"sample-po-toolbar-labs/sample-po-toolbar-labs.component.ts"),og(),Sl(19,"pre",9),rN(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-toolbar-labs"),og(),Wl(23,"hr")),p&2&&(Lp(5),Gx("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),rw("ngClass",gN(4,ve,n.hideSampleCodeTabs)));},dependencies:[SO,Ka,Ume,$me,me],encapsulation:2,changeDetection:1})}return a})();var ce=(()=>{class a{poDialog=f(Ode);poNotification=f(Yp);notificationActions=[{icon:"an an-newspaper",label:"PO news, stay tuned!",type:"danger",action:l=>this.onClickNotification(l)},{icon:"an an-chat",label:"New message",type:"danger",action:l=>this.openDialog(l)}];profile={avatar:"https://via.placeholder.com/48x48?text=AVATAR",subtitle:"dev@po-ui.com.br",title:"Mr. Dev PO"};profileActions=[{icon:"an an-user",label:"User data",action:l=>this.showAction(l)},{icon:"an an-building-apartment",label:"Company data",action:l=>this.showAction(l)},{icon:"an an-gear",label:"Settings",action:l=>this.showAction(l)},{icon:"an an-sign-out",label:"Exit",type:"danger",separator:true,action:l=>this.showAction(l)}];actions=[{label:"Start cash register",action:l=>this.showAction(l)},{label:"Finalize cash register",action:l=>this.showAction(l)},{label:"Cash register options",action:l=>this.showAction(l)}];title="PO Toolbar Logged";getNotificationNumber(){return this.notificationActions.filter(l=>l.type==="danger").length}onClickNotification(l){window.open("https://github.com/po-ui/po-angular/blob/master/CHANGELOG.md","_blank"),l.type="default";}openDialog(l){this.poDialog.alert({title:"Welcome",message:"Hello Mr. Dev! Congratulations, you are a TOTVS!",ok:void 0}),l.type="default";}showAction(l){this.poNotification.success(`Action clicked: ${l.label}`);}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-toolbar-logged"]],standalone:false,features:[we$1([Yp])],decls:8,vars:7,consts:[["p-actions-icon","an an-shopping-cart-simple",3,"p-actions","p-profile","p-profile-actions","p-notification-actions","p-notification-number","p-title"],[1,"po-row"],[1,"sample-container"],[1,"po-sm-12"],[1,"po-font-title"],[1,"po-font-subtitle"]],template:function(p,n){p&1&&(Wl(0,"po-toolbar",0),Sl(1,"div",1)(2,"div",2)(3,"po-widget",3)(4,"div",4),rN(5),og(),Sl(6,"div",5),rN(7,"Let's work hard!"),og()()()()),p&2&&(rw("p-actions",n.actions)("p-profile",n.profile)("p-profile-actions",n.profileActions)("p-notification-actions",n.notificationActions)("p-notification-number",n.getNotificationNumber())("p-title",n.title),Lp(5),dg("Hello, ",n.profile.title,"."));},dependencies:[fNe,vNe],styles:[".sample-container[_ngcontent-%COMP%]{margin-top:50px}"],changeDetection:1})}return a})();var we=a=>({"docs-sample-code-tabs":a}),de=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-toolbar-logged-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),rN(3,"PO Toolbar - Logged"),og(),Sl(4,"a",2),ft("click",function(){return n.toggleSampleCodeTabs()}),Wl(5,"span"),rN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),rN(12,"sample-po-toolbar-logged/sample-po-toolbar-logged.component.html"),og(),Sl(13,"pre",7),rN(14,`<style>
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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),rN(18,"sample-po-toolbar-logged/sample-po-toolbar-logged.component.ts"),og(),Sl(19,"pre",9),rN(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-toolbar-logged"),og(),Wl(23,"hr")),p&2&&(Lp(5),Gx("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),rw("ngClass",gN(4,we,n.hideSampleCodeTabs)));},dependencies:[SO,Ka,Ume,$me,ce],encapsulation:2,changeDetection:1})}return a})();var ue=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-toolbar-doc"]],standalone:false,decls:530,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","Array<PoToolbarAction>"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoToolbarProfile"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","Array<PoPopupAction>"]],template:function(p,n){p&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),rN(3,"import { PoToolbarModule } from '@po-ui/ng-components';"),og()(),Sl(4,"div",2)(5,"p"),rN(6,"M\xF3dulo do componente po-toolbar"),og()(),Sl(7,"h3",3),rN(8,"Componente"),og(),Sl(9,"h4",4)(10,"code",5),rN(11,"PoToolbarComponent"),og()(),Sl(12,"div",2)(13,"p"),rN(14,"O componente "),Sl(15,"code"),rN(16,"po-toolbar"),og(),rN(17," \xE9 um cabe\xE7alho para o t\xEDtulo da aplica\xE7\xE3o e informa\xE7\xF5es de usu\xE1rio e notifica\xE7\xF5es quando houver necessidade. "),og()(),Sl(18,"div",6)(19,"h4",7),rN(20,"Seletor"),og(),Sl(21,"pre",8),rN(22,`<po-toolbar
    p-actions="Array<PoToolbarAction>"
    p-actions-icon="string | TemplateRef<void>"
    p-notification-actions="Array<PoToolbarAction>"
    p-notification-number="number"
    p-profile="PoToolbarProfile"
    p-profile-actions="Array<PoToolbarAction>"
    p-show-notification="boolean"
    p-title="string" >
</po-toolbar>
`),og()(),Sl(23,"h4",9),rN(24,"Propriedades"),og(),Sl(25,"table",10)(26,"tr",11)(27,"th",12),rN(28,"Nome"),og(),Sl(29,"th",12),rN(30,"Tipo"),og(),Sl(31,"th",12),rN(32,"Padr\xE3o"),og(),Sl(33,"th",12),rN(34,"Descri\xE7\xE3o"),og()(),Sl(35,"tr",13)(36,"td",14)(37,"div",15)(38,"span",16),rN(39," p-actions"),Wl(40,"br"),og()()(),Sl(41,"td",17)(42,"code",18),rN(43,"Array<PoToolbarAction>"),og()(),Sl(44,"td",19),rN(45,"-"),og(),Sl(46,"td",20)(47,"em")(48,"strong"),rN(49,"(opcional)"),og()(),Sl(50,"p"),rN(51,"Define uma lista de a\xE7\xF5es que ser\xE3o exibidas ao clicar no \xEDcone declarado em "),Sl(52,"code"),rN(53,"p-actions-icon"),og(),rN(54,"."),og()()(),Sl(55,"tr",13)(56,"td",14)(57,"div",15)(58,"span",16),rN(59," p-actions-icon"),Wl(60,"br"),og()()(),Sl(61,"td",17)(62,"code",21),rN(63,"string "),og(),Sl(64,"code",22),rN(65," TemplateRef<void>"),og()(),Sl(66,"td",19)(67,"p")(68,"code"),rN(69,"an-dots-three"),og()()(),Sl(70,"td",20)(71,"em")(72,"strong"),rN(73,"(opcional)"),og()(),Sl(74,"p"),rN(75,"Define um "),Sl(76,"a",23),rN(77,"\xEDcone"),og(),rN(78," para a propriedade "),Sl(79,"code"),rN(80,"p-actions"),og(),rN(81,"."),og(),Sl(82,"p"),rN(83,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),Sl(84,"a",23),rN(85,"Biblioteca de \xEDcones"),og(),rN(86,". conforme exemplo abaixo:"),og(),Sl(87,"pre")(88,"code"),rN(89,`<po-toolbar p-actions-icon="an an-user" [p-actions]="actions"></po-toolbar>
`),og()(),Sl(90,"p"),rN(91,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),Sl(92,"em"),rN(93,"Font Awesome"),og(),rN(94,", da seguinte forma:"),og(),Sl(95,"pre")(96,"code"),rN(97,`<po-toolbar p-actions-icon="far fa-comment-alt" [p-actions]="actions"></po-toolbar>
`),og()(),Sl(98,"p"),rN(99,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),Sl(100,"code"),rN(101,"TemplateRef"),og(),rN(102,", conforme exemplo abaixo:"),og(),Sl(103,"pre")(104,"code"),rN(105,`<po-toolbar [p-actions-icon]="template" [p-actions]="actions"></po-toolbar>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),og()(),Sl(106,"blockquote")(107,"p"),rN(108,"Para o \xEDcone enquadrar corretamente, deve-se utilizar "),Sl(109,"code"),rN(110,"font-size: inherit"),og(),rN(111," caso o \xEDcone utilizado n\xE3o aplique-o."),og()(),Sl(112,"blockquote")(113,"p"),rN(114,"Caso n\xE3o haja a\xE7\xF5es definidas em "),Sl(115,"code"),rN(116,"p-actions"),og(),rN(117,", o \xEDcone n\xE3o ser\xE1 exibido."),og()()()(),Sl(118,"tr",13)(119,"td",14)(120,"div",15)(121,"span",16),rN(122," p-notification-actions"),Wl(123,"br"),og()()(),Sl(124,"td",17)(125,"code",18),rN(126,"Array<PoToolbarAction>"),og()(),Sl(127,"td",19),rN(128,"-"),og(),Sl(129,"td",20)(130,"em")(131,"strong"),rN(132,"(opcional)"),og()(),Sl(133,"p"),rN(134,"Lista de a\xE7\xF5es da notifica\xE7\xE3o."),og()()(),Sl(135,"tr",13)(136,"td",14)(137,"div",15)(138,"span",16),rN(139," p-notification-number"),Wl(140,"br"),og()()(),Sl(141,"td",17)(142,"code",24),rN(143,"number"),og()(),Sl(144,"td",19),rN(145,"-"),og(),Sl(146,"td",20)(147,"em")(148,"strong"),rN(149,"(opcional)"),og()(),Sl(150,"p"),rN(151,"N\xFAmero de notifica\xE7\xF5es."),og()()(),Sl(152,"tr",13)(153,"td",14)(154,"div",15)(155,"span",16),rN(156," p-profile"),Wl(157,"br"),og()()(),Sl(158,"td",17)(159,"code",25),rN(160,"PoToolbarProfile"),og()(),Sl(161,"td",19),rN(162,"-"),og(),Sl(163,"td",20)(164,"em")(165,"strong"),rN(166,"(opcional)"),og()(),Sl(167,"p"),rN(168,"Define o objeto que ser\xE1 o cabe\xE7alho da lista de a\xE7\xF5es com as informa\xE7\xF5es do perfil."),og()()(),Sl(169,"tr",13)(170,"td",14)(171,"div",15)(172,"span",16),rN(173," p-profile-actions"),Wl(174,"br"),og()()(),Sl(175,"td",17)(176,"code",18),rN(177,"Array<PoToolbarAction>"),og()(),Sl(178,"td",19),rN(179,"-"),og(),Sl(180,"td",20)(181,"em")(182,"strong"),rN(183,"(opcional)"),og()(),Sl(184,"p"),rN(185,"Define uma lista de a\xE7\xF5es que ser\xE3o exibidas ao clicar no \xEDcone do perfil."),og()()(),Sl(186,"tr",13)(187,"td",14)(188,"div",15)(189,"span",16),rN(190," p-show-notification"),Wl(191,"br"),og()()(),Sl(192,"td",17)(193,"code",26),rN(194,"boolean"),og()(),Sl(195,"td",19),rN(196,"-"),og(),Sl(197,"td",20)(198,"em")(199,"strong"),rN(200,"(opcional)"),og()(),Sl(201,"p"),rN(202,"Se falso, oculta o \xEDcone de notifica\xE7\xF5es."),og()()(),Sl(203,"tr",13)(204,"td",14)(205,"div",15)(206,"span",16),rN(207," p-title"),Wl(208,"br"),og()()(),Sl(209,"td",17)(210,"code",21),rN(211,"string"),og()(),Sl(212,"td",19),rN(213,"-"),og(),Sl(214,"td",20)(215,"p"),rN(216,"T\xEDtulo do "),Sl(217,"em"),rN(218,"toolbar"),og(),rN(219," e aplica\xE7\xE3o."),og()()()(),Sl(220,"h3"),rN(221,"Interfaces"),og(),Sl(222,"h4",27)(223,"code",5),rN(224,"PoToolbarAction"),og()(),Sl(225,"div",2)(226,"p"),rN(227,"Interface para lista de a\xE7\xF5es do componente. "),og()(),Sl(228,"h4",9),rN(229,"Propriedades"),og(),Sl(230,"table",10)(231,"tr",11)(232,"th",12),rN(233,"Nome"),og(),Sl(234,"th",12),rN(235,"Tipo"),og(),Sl(236,"th",12),rN(237,"Descri\xE7\xE3o"),og()(),Sl(238,"tr",13)(239,"td",14)(240,"div",15)(241,"span",16),rN(242," action"),Wl(243,"br"),og()()(),Sl(244,"td",17)(245,"code",28),rN(246,"Function"),og()(),Sl(247,"td",20)(248,"em")(249,"strong"),rN(250,"(opcional)"),og()(),Sl(251,"p"),rN(252,"A\xE7\xE3o que ser\xE1 executada, sendo poss\xEDvel passar o nome ou a refer\xEAncia da fun\xE7\xE3o."),og(),Sl(253,"p"),rN(254,"A action tamb\xE9m pode ser executada para o agrupador de subitens quando a a\xE7\xE3o possuir "),Sl(255,"code"),rN(256,"subItems"),og(),rN(257,"."),og(),Sl(258,"blockquote")(259,"p"),rN(260,"Para que a fun\xE7\xE3o seja executada no contexto do componente, utilize "),Sl(261,"em"),rN(262,"bind"),og(),rN(263,`:
`),Sl(264,"code"),rN(265,"action: this.myFunction.bind(this)"),og()()()()(),Sl(266,"tr",13)(267,"td",14)(268,"div",15)(269,"span",16),rN(270," disabled"),Wl(271,"br"),og()()(),Sl(272,"td",17)(273,"code",26),rN(274,"boolean "),og(),Sl(275,"code",28),rN(276," Function"),og()(),Sl(277,"td",20)(278,"em")(279,"strong"),rN(280,"(opcional)"),og()(),Sl(281,"p"),rN(282,"Desabilita a a\xE7\xE3o. Aceita um valor booleano ou uma fun\xE7\xE3o que retorna booleano."),og()()(),Sl(283,"tr",13)(284,"td",14)(285,"div",15)(286,"span",16),rN(287," icon"),Wl(288,"br"),og()()(),Sl(289,"td",17)(290,"code",21),rN(291,"string "),og(),Sl(292,"code",22),rN(293," TemplateRef<void>"),og()(),Sl(294,"td",20)(295,"em")(296,"strong"),rN(297,"(opcional)"),og()(),Sl(298,"p"),rN(299,"\xCDcone exibido ao lado esquerdo do r\xF3tulo."),og(),Sl(300,"p"),rN(301,"Aceita \xEDcones da "),Sl(302,"a",23),rN(303,"Biblioteca de \xEDcones"),og(),rN(304,`, fontes externas (ex: Font Awesome)
ou um `),Sl(305,"code"),rN(306,"TemplateRef"),og(),rN(307," para \xEDcones customizados."),og(),Sl(308,"pre")(309,"code"),rN(310,`{ label: 'A\xE7\xE3o', icon: 'an an-newspaper' }
`),og()()()(),Sl(311,"tr",13)(312,"td",14)(313,"div",15)(314,"span",16),rN(315," label"),Wl(316,"br"),og()()(),Sl(317,"td",17)(318,"code",21),rN(319,"string"),og()(),Sl(320,"td",20)(321,"p"),rN(322,"R\xF3tulo da a\xE7\xE3o."),og(),Sl(323,"p"),rN(324,"A label tamb\xE9m pode representar o agrupador de subitens quando a a\xE7\xE3o possuir "),Sl(325,"code"),rN(326,"subItems"),og(),rN(327,"."),og()()(),Sl(328,"tr",13)(329,"td",14)(330,"div",15)(331,"span",16),rN(332," selected"),Wl(333,"br"),og()()(),Sl(334,"td",17)(335,"code",26),rN(336,"boolean"),og()(),Sl(337,"td",20)(338,"em")(339,"strong"),rN(340,"(opcional)"),og()(),Sl(341,"p"),rN(342,"Define se a a\xE7\xE3o est\xE1 selecionada."),og()()(),Sl(343,"tr",13)(344,"td",14)(345,"div",15)(346,"span",16),rN(347," separator"),Wl(348,"br"),og()()(),Sl(349,"td",17)(350,"code",26),rN(351,"boolean"),og()(),Sl(352,"td",20)(353,"em")(354,"strong"),rN(355,"(opcional)"),og()(),Sl(356,"p"),rN(357,"Atribui uma linha separadora acima do item."),og()()(),Sl(358,"tr",13)(359,"td",14)(360,"div",15)(361,"span",16),rN(362," subItems"),Wl(363,"br"),og()()(),Sl(364,"td",17)(365,"code",29),rN(366,"Array<PoPopupAction>"),og()(),Sl(367,"td",20)(368,"em")(369,"strong"),rN(370,"(opcional)"),og()(),Sl(371,"p"),rN(372,"Define uma lista de subitens para cria\xE7\xE3o de menus aninhados."),og(),Sl(373,"p"),rN(374,`Ao definir esta propriedade, o item exibir\xE1 um \xEDcone indicador de subn\xEDvel.
Recomenda-se utilizar no m\xE1ximo tr\xEAs n\xEDveis hier\xE1rquicos para garantir a usabilidade.`),og(),Sl(375,"blockquote")(376,"p"),rN(377,"As propriedades "),Sl(378,"code"),rN(379,"disabled"),og(),rN(380,", "),Sl(381,"code"),rN(382,"type"),og(),rN(383," e "),Sl(384,"code"),rN(385,"visible"),og(),rN(386," n\xE3o s\xE3o aplicadas visualmente ao item agrupador."),og()(),Sl(387,"blockquote")(388,"p"),rN(389,"Quando "),Sl(390,"code"),rN(391,"url"),og(),rN(392," \xE9 informada em um agrupador, o redirecionamento ter\xE1 prioridade e os subitens n\xE3o ser\xE3o abertos."),og()(),Sl(393,"blockquote")(394,"p"),rN(395,"Em subn\xEDveis aninhados, o "),Sl(396,"code"),rN(397,"icon"),og(),rN(398," do agrupador \xE9 substitu\xEDdo pelo indicador de navega\xE7\xE3o (seta)."),og()()()(),Sl(399,"tr",13)(400,"td",14)(401,"div",15)(402,"span",16),rN(403," type"),Wl(404,"br"),og()()(),Sl(405,"td",17)(406,"code",21),rN(407,"string"),og()(),Sl(408,"td",20)(409,"em")(410,"strong"),rN(411,"(opcional)"),og()(),Sl(412,"p"),rN(413,"Define a cor do item."),og(),Sl(414,"p"),rN(415,"Valores v\xE1lidos:"),og(),Sl(416,"ul")(417,"li")(418,"code"),rN(419,"default"),og()(),Sl(420,"li")(421,"code"),rN(422,"danger"),og()()()()(),Sl(423,"tr",13)(424,"td",14)(425,"div",15)(426,"span",16),rN(427," url"),Wl(428,"br"),og()()(),Sl(429,"td",17)(430,"code",21),rN(431,"string"),og()(),Sl(432,"td",20)(433,"em")(434,"strong"),rN(435,"(opcional)"),og()(),Sl(436,"p"),rN(437,"URL para redirecionamento. Aceita rotas internas e links externos."),og(),Sl(438,"p"),rN(439,`A url tamb\xE9m pode ser configurada para o agrupador de subitens.
Entretanto, quando a `),Sl(440,"code"),rN(441,"url"),og(),rN(442," \xE9 informada em um agrupador, o clique "),Sl(443,"strong"),rN(444,"n\xE3o abrir\xE1 os subitens"),og(),rN(445,`, pois o item ser\xE1
tratado como um link e o redirecionamento ter\xE1 prioridade sobre a exibi\xE7\xE3o da lista.`),og(),Sl(446,"blockquote")(447,"p"),rN(448,"Quando informada, tem prioridade sobre a propriedade "),Sl(449,"code"),rN(450,"action"),og(),rN(451,"."),og()()()(),Sl(452,"tr",13)(453,"td",14)(454,"div",15)(455,"span",16),rN(456," visible"),Wl(457,"br"),og()()(),Sl(458,"td",17)(459,"code",26),rN(460,"boolean "),og(),Sl(461,"code",28),rN(462," Function"),og()(),Sl(463,"td",20)(464,"em")(465,"strong"),rN(466,"(opcional)"),og()(),Sl(467,"p"),rN(468,"Define a visibilidade da a\xE7\xE3o. Aceita um valor booleano ou uma fun\xE7\xE3o que retorna booleano."),og()()()(),Sl(469,"h4",27)(470,"code",5),rN(471,"PoToolbarProfile"),og()(),Sl(472,"div",2)(473,"p"),rN(474,"Interface que define o perfil do "),Sl(475,"code"),rN(476,"PoToolbarComponent"),og(),rN(477,"."),og()(),Sl(478,"h4",9),rN(479,"Propriedades"),og(),Sl(480,"table",10)(481,"tr",11)(482,"th",12),rN(483,"Nome"),og(),Sl(484,"th",12),rN(485,"Tipo"),og(),Sl(486,"th",12),rN(487,"Descri\xE7\xE3o"),og()(),Sl(488,"tr",13)(489,"td",14)(490,"div",15)(491,"span",16),rN(492," avatar"),Wl(493,"br"),og()()(),Sl(494,"td",17)(495,"code",21),rN(496,"string"),og()(),Sl(497,"td",20)(498,"em")(499,"strong"),rN(500,"(opcional)"),og()(),Sl(501,"p"),rN(502,"Define o caminho da imagem do perfil."),og()()(),Sl(503,"tr",13)(504,"td",14)(505,"div",15)(506,"span",16),rN(507," subtitle"),Wl(508,"br"),og()()(),Sl(509,"td",17)(510,"code",21),rN(511,"string"),og()(),Sl(512,"td",20)(513,"em")(514,"strong"),rN(515,"(opcional)"),og()(),Sl(516,"p"),rN(517,"Define um texto com menor destaque ao lado da imagem do perfil, como por exemplo o e-mail de usu\xE1rio."),og()()(),Sl(518,"tr",13)(519,"td",14)(520,"div",15)(521,"span",16),rN(522," title"),Wl(523,"br"),og()()(),Sl(524,"td",17)(525,"code",21),rN(526,"string"),og()(),Sl(527,"td",20)(528,"p"),rN(529,"Define um texto com maior destaque ao lado da imagem do perfil, como por exemplo o nome de usu\xE1rio."),og()()()()());},dependencies:[Ka],encapsulation:2,changeDetection:1})}return a})();var be=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(l,p){this.route=l,this.router=p;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let p=l.view;this.activeTab=p||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:"merge"}),this.activeTab=l;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(p){return new(p||a)(w(Xn),w(En))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Toolbar",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(p,n){p&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return n.changeTab("doc")}),Wl(3,"sample-po-toolbar-doc"),og(),Sl(4,"po-tab",3),ft("p-click",function(){return n.changeTab("web")}),Wl(5,"sample-po-toolbar-basic-view")(6,"sample-po-toolbar-labs-view")(7,"sample-po-toolbar-logged-view"),og()()()),p&2&&(rw("p-actions",n.actions),Lp(2),rw("p-active",n.activeTab==="doc"),Lp(2),rw("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"));},dependencies:[sNe,Ume,$me,pe,se,de,ue],encapsulation:2,changeDetection:1})}return a})();var Ae=[{path:"",component:be}],fe=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue$1({imports:[mL.forChild(Ae),mL]})}return a})();var rt=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue$1({imports:[sr,fe]})}return a})();export{rt as DocPoToolbarModule};