import {f as fe$1,u as ue$1,s as sr,m as mL,w,c3 as Xn,E as En,U as Un,c as f,c5 as Ode,aU as r3,h as s,a as r$1,aW as Yp,b0 as Qt,C as Sl,a1 as ft,J as og,an as SO,aH as Ka,b8 as Ume,b9 as $me,F as Wl,y as rN,L as Lp,ar as Gx,au as dg,O as rw,bs as gN,aX as Q9,aF as Z9,aY as K9,aG as wk,aZ as _k,b1 as mv,c4 as b3,b4 as L3,c8 as Tde,aB as Ix,aM as Cw,aN as n0,aO as ww,aP as i0,cn as o3,ba as vNe,aq as px,at as gx,a3 as sNe,aD as Ky,aT as oN,aE as Xy,aA as xx}from'./main-TVDUJ47Y.js';var de=(()=>{class o{onClick(){alert("Po Button!");}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-button-basic"]],standalone:false,decls:1,vars:0,consts:[["p-label","PO Button",3,"p-click"]],template:function(a,i){a&1&&(Sl(0,"po-button",0),ft("p-click",function(){return i.onClick()}),og());},dependencies:[Qt],encapsulation:2,changeDetection:1})}return o})();var fe=o=>({"docs-sample-code-tabs":o}),se=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-button-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),rN(3,"PO Button Basic"),og(),Sl(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),rN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),rN(12,"sample-po-button-basic/sample-po-button-basic.component.html"),og(),Sl(13,"pre",7),rN(14,`<po-button p-label="PO Button" (p-click)="onClick()"> </po-button>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),rN(18,"sample-po-button-basic/sample-po-button-basic.component.ts"),og(),Sl(19,"pre",9),rN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-button-basic',
  templateUrl: './sample-po-button-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoButtonBasicComponent {
  onClick() {
    alert('Po Button!');
  }
}
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-button-basic"),og(),Wl(23,"hr")),a&2&&(Lp(5),Gx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),rw("ngClass",gN(4,fe,i.hideSampleCodeTabs)));},dependencies:[SO,Ka,Ume,$me,de],encapsulation:2,changeDetection:1})}return o})();var me=(()=>{class o{poDialog=f(Ode);label;kind;icon;size;properties;type;propertiesOptions=[{value:"disabled",label:"Disabled"},{value:"loading",label:"Loading"},{value:"danger",label:"Danger"}];iconsOptions=[{label:"an an-newspaper",value:"an an-newspaper"},{label:"an an-calendar-dots",value:"an an-calendar-dots"},{label:"an an-user",value:"an an-user"},{label:"fa fa-podcast",value:"fa fa-podcast"}];kindsOptions=[{label:"primary",value:"primary"},{label:"secondary",value:"secondary"},{label:"tertiary",value:"tertiary"}];sizesOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"},{label:"large",value:"large"}];typeOptions=[{label:"button",value:r3.Button},{label:"submit",value:r3.Submit},{label:"reset",value:r3.Reset}];ngOnInit(){this.restore();}buttonClick(){this.poDialog.alert({title:"PO Button",message:"Hello PO World!!!"});}propertiesChange(r){this.kindsOptions[2]=s(r$1({},this.kindsOptions[2]),{disabled:false}),this.sizesOptions[0]=s(r$1({},this.sizesOptions[0]),{disabled:false}),this.sizesOptions[1]=s(r$1({},this.sizesOptions[1]),{disabled:false}),r&&r.forEach(a=>{a==="danger"&&this.properties.includes("danger")&&(this.kindsOptions[2]=s(r$1({},this.kindsOptions[2]),{disabled:true}));});}verifyDisabled(r){let a=[...this.propertiesOptions];r==="tertiary"?(a[2]={value:"danger",label:"Danger",disabled:true},this.propertiesOptions=a):(a[2]={value:"danger",label:"Danger",disabled:false},this.propertiesOptions=a);}restore(){this.label=void 0,this.kind="secondary",this.size="medium",this.icon=void 0,this.type=r3.Button,this.properties=[],this.kindsOptions[2]=s(r$1({},this.kindsOptions[2]),{disabled:false}),this.sizesOptions[0]=s(r$1({},this.sizesOptions[0]),{disabled:false}),this.sizesOptions[1]=s(r$1({},this.sizesOptions[1]),{disabled:false});}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-button-labs"]],standalone:false,decls:14,vars:19,consts:[["f","ngForm"],[1,"po-row"],[1,"po-sm-12",3,"p-click","p-disabled","p-icon","p-label","p-loading","p-size","p-danger","p-kind","p-type"],["name","label","p-clean","","p-label","Label",1,"po-lg-6","po-md-6",3,"ngModelChange","ngModel"],["name","properties","p-columns","4","p-label","Properties",1,"po-lg-12",3,"ngModelChange","p-change","ngModel","p-options"],["name","icon","p-columns","4","p-label","Icon",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","kind","p-columns","4","p-label","Kind",1,"po-lg-12",3,"ngModelChange","p-change","ngModel","p-options"],["name","type","p-columns","4","p-label","Type",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-lg-12",3,"ngModelChange","p-change","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(a,i){if(a&1){let u=Ix();Sl(0,"div",1)(1,"po-button",2),ft("p-click",function(){return i.buttonClick()}),og()(),Wl(2,"po-divider"),Sl(3,"form",null,0)(5,"div",1)(6,"po-input",3),Cw("ngModelChange",function(d){return Ky(u),oN(i.label,d)||(i.label=d),Xy(d)}),og(),n0(),og(),Sl(7,"po-checkbox-group",4),Cw("ngModelChange",function(d){return Ky(u),oN(i.properties,d)||(i.properties=d),Xy(d)}),ft("p-change",function(d){return i.propertiesChange(d)}),og(),n0(),Sl(8,"po-radio-group",5),Cw("ngModelChange",function(d){return Ky(u),oN(i.icon,d)||(i.icon=d),Xy(d)}),og(),n0(),Sl(9,"po-radio-group",6),Cw("ngModelChange",function(d){return Ky(u),oN(i.kind,d)||(i.kind=d),Xy(d)}),ft("p-change",function(d){return i.verifyDisabled(d)}),og(),n0(),Sl(10,"po-radio-group",7),Cw("ngModelChange",function(d){return Ky(u),oN(i.type,d)||(i.type=d),Xy(d)}),og(),n0(),Sl(11,"po-radio-group",8),Cw("ngModelChange",function(d){return Ky(u),oN(i.size,d)||(i.size=d),Xy(d)}),ft("p-change",function(d){return i.verifyDisabled(d)}),og(),n0(),Sl(12,"div",1)(13,"po-button",9),ft("p-click",function(){return i.restore()}),og()()();}a&2&&(Lp(),rw("p-disabled",i.properties.includes("disabled"))("p-icon",i.icon)("p-label",i.label)("p-loading",i.properties.includes("loading"))("p-size",i.size)("p-danger",i.properties.includes("danger"))("p-kind",i.kind)("p-type",i.type),Lp(5),ww("ngModel",i.label),i0(),Lp(),ww("ngModel",i.properties),rw("p-options",i.propertiesOptions),i0(),Lp(),ww("ngModel",i.icon),rw("p-options",i.iconsOptions),i0(),Lp(),ww("ngModel",i.kind),rw("p-options",i.kindsOptions),i0(),Lp(),ww("ngModel",i.type),rw("p-options",i.typeOptions),i0(),Lp(),ww("ngModel",i.size),rw("p-options",i.sizesOptions),i0());},dependencies:[Q9,Z9,K9,wk,_k,Qt,mv,b3,L3,Tde],encapsulation:2,changeDetection:1})}return o})();var ye=o=>({"docs-sample-code-tabs":o}),ce=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-button-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),rN(3,"PO Button Labs"),og(),Sl(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),rN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),rN(12,"sample-po-button-labs/sample-po-button-labs.component.html"),og(),Sl(13,"pre",7),rN(14,`<div class="po-row">
  <po-button
    class="po-sm-12"
    [p-disabled]="properties.includes('disabled')"
    [p-icon]="icon"
    [p-label]="label"
    [p-loading]="properties.includes('loading')"
    [p-size]="size"
    [p-danger]="properties.includes('danger')"
    [p-kind]="kind"
    (p-click)="buttonClick()"
    [p-type]="type"
  >
  </po-button>
</div>

<po-divider />

<form #f="ngForm">
  <div class="po-row">
    <po-input class="po-lg-6 po-md-6" name="label" [(ngModel)]="label" p-clean p-label="Label"> </po-input>
  </div>

  <po-checkbox-group
    class="po-lg-12"
    name="properties"
    [(ngModel)]="properties"
    p-columns="4"
    p-label="Properties"
    [p-options]="propertiesOptions"
    (p-change)="propertiesChange($event)"
  >
  </po-checkbox-group>

  <po-radio-group
    class="po-lg-12"
    name="icon"
    [(ngModel)]="icon"
    p-columns="4"
    p-label="Icon"
    [p-options]="iconsOptions"
  >
  </po-radio-group>

  <po-radio-group
    class="po-lg-12"
    name="kind"
    [(ngModel)]="kind"
    p-columns="4"
    p-label="Kind"
    [p-options]="kindsOptions"
    (p-change)="verifyDisabled($event)"
  >
  </po-radio-group>

  <po-radio-group
    class="po-lg-12"
    name="type"
    [(ngModel)]="type"
    p-columns="4"
    p-label="Type"
    [p-options]="typeOptions"
  >
  </po-radio-group>

  <po-radio-group
    class="po-lg-12"
    name="size"
    [(ngModel)]="size"
    p-columns="4"
    p-label="Size"
    p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
    [p-options]="sizesOptions"
    (p-change)="verifyDisabled($event)"
  >
  </po-radio-group>

  <div class="po-row">
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),rN(18,"sample-po-button-labs/sample-po-button-labs.component.ts"),og(),Sl(19,"pre",9),rN(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

import { PoCheckboxGroupOption, PoRadioGroupOption, PoDialogService, PoButtonType } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-button-labs',
  templateUrl: './sample-po-button-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoButtonLabsComponent implements OnInit {
  private poDialog = inject(PoDialogService);

  label: string;
  kind: string;
  icon: string;
  size: string;
  properties: Array<string>;
  type: string;

  propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'disabled', label: 'Disabled' },
    { value: 'loading', label: 'Loading' },
    { value: 'danger', label: 'Danger' }
  ];

  iconsOptions: Array<PoRadioGroupOption> = [
    { label: 'an an-newspaper', value: 'an an-newspaper' },
    { label: 'an an-calendar-dots', value: 'an an-calendar-dots' },
    { label: 'an an-user', value: 'an an-user' },
    { label: 'fa fa-podcast', value: 'fa fa-podcast' }
  ];

  kindsOptions: Array<PoRadioGroupOption> = [
    { label: 'primary', value: 'primary' },
    { label: 'secondary', value: 'secondary' },
    { label: 'tertiary', value: 'tertiary' }
  ];

  sizesOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' },
    { label: 'large', value: 'large' }
  ];

  typeOptions: Array<PoRadioGroupOption> = [
    { label: 'button', value: PoButtonType.Button },
    { label: 'submit', value: PoButtonType.Submit },
    { label: 'reset', value: PoButtonType.Reset }
  ];

  ngOnInit() {
    this.restore();
  }

  buttonClick() {
    this.poDialog.alert({ title: 'PO Button', message: 'Hello PO World!!!' });
  }

  propertiesChange(event) {
    this.kindsOptions[2] = { ...this.kindsOptions[2], disabled: false };
    this.sizesOptions[0] = { ...this.sizesOptions[0], disabled: false };
    this.sizesOptions[1] = { ...this.sizesOptions[1], disabled: false };

    if (event) {
      event.forEach(property => {
        if (property === 'danger' && this.properties.includes('danger')) {
          this.kindsOptions[2] = { ...this.kindsOptions[2], disabled: true };
        }
      });
    }
  }

  verifyDisabled(event) {
    const value = [...this.propertiesOptions];

    if (event === 'tertiary') {
      value[2] = { value: 'danger', label: 'Danger', disabled: true };
      this.propertiesOptions = value;
    } else {
      value[2] = { value: 'danger', label: 'Danger', disabled: false };
      this.propertiesOptions = value;
    }
  }

  restore() {
    this.label = undefined;
    this.kind = 'secondary';
    this.size = 'medium';
    this.icon = undefined;
    this.type = PoButtonType.Button;
    this.properties = [];
    this.kindsOptions[2] = { ...this.kindsOptions[2], disabled: false };
    this.sizesOptions[0] = { ...this.sizesOptions[0], disabled: false };
    this.sizesOptions[1] = { ...this.sizesOptions[1], disabled: false };
  }
}
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-button-labs"),og(),Wl(23,"hr")),a&2&&(Lp(5),Gx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),rw("ngClass",gN(4,ye,i.hideSampleCodeTabs)));},dependencies:[SO,Ka,Ume,$me,me],encapsulation:2,changeDetection:1})}return o})();function Pe(o,he){if(o&1){let r=Ix();Sl(0,"div",0),Wl(1,"po-avatar",2),Sl(2,"div",3)(3,"span",4),rN(4),og(),Sl(5,"span",5),rN(6),og(),Sl(7,"span",5),rN(8),og()()(),Sl(9,"div",0)(10,"po-button",6),ft("p-click",function(){Ky(r);let i=xx();return Xy(i.notification("added","success"))}),og(),Sl(11,"po-button",7),ft("p-click",function(){Ky(r);let i=xx();return Xy(i.notification("ignored","warning"))}),og(),Sl(12,"po-button",8),ft("p-click",function(){Ky(r);let i=xx();return Xy(i.notification("blocked","information"))}),og()();}if(o&2){let r=xx();Lp(),rw("p-src",r.userAvatar),Lp(3),dg(" ",r.currentFriend.name," "),Lp(2),dg(" ",r.currentFriend.mutualFriends," mutual friends "),Lp(2),dg(" Resides in ",r.currentFriend.reside," ");}}function we(o,he){o&1&&(Sl(0,"div",0)(1,"span",9),rN(2,"Congratulations TOTVS, no more requests!"),og()());}var ue=(()=>{class o{poNotification=f(Yp);currentFriend;userAvatar="https://lorempixel.com/144/144/";newFriends=[{name:"Mr. Dev PO",mutualFriends:"7",reside:"Mountain View, CA"},{name:"Mr. AI PO",mutualFriends:"99+",reside:"New York City, NY"},{name:"Mr. UX PO",mutualFriends:"14",reside:"Los Angeles, CA"}];indexFriend=0;ngOnInit(){this.setCurrentFriend(0);}notification(r,a){this.poNotification[a](`User ${r} successfully!`),this.indexFriend++,this.setCurrentFriend(this.indexFriend);}setCurrentFriend(r){this.currentFriend=this.newFriends[r];}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-button-social-network"]],standalone:false,decls:4,vars:1,consts:[[1,"po-row"],["p-title","Friend Request",1,"po-lg-6"],["p-size","lg",1,"po-md-4",3,"p-src"],[1,"po-md-8"],[1,"po-sm-12","po-font-subtitle"],[1,"po-sm-12","po-font-text"],["p-icon","fa fa-check-circle","p-label","Confirm",1,"po-md-4",3,"p-click"],["p-icon","fa fa-eye-slash","p-label","Ignore",1,"po-md-4",3,"p-click"],["p-icon","fa fa-ban","p-label","Block",1,"po-md-4",3,"p-click"],[1,"po-lg-8","po-font-subtitle"]],template:function(a,i){a&1&&(Sl(0,"div",0)(1,"po-widget",1),px(2,Pe,13,4)(3,we,3,0,"div",0),og()()),a&2&&(Lp(2),gx(i.currentFriend?2:3));},dependencies:[o3,Qt,vNe],encapsulation:2,changeDetection:1})}return o})();var Be=o=>({"docs-sample-code-tabs":o}),be=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-button-social-network-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),rN(3,"PO Button Social Network"),og(),Sl(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),rN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),rN(12,"sample-po-button-social-network/sample-po-button-social-network.component.html"),og(),Sl(13,"pre",7),rN(14,`<div class="po-row">
  <po-widget class="po-lg-6" p-title="Friend Request">
    @if (currentFriend) {
      <div class="po-row">
        <po-avatar class="po-md-4" p-size="lg" [p-src]="userAvatar"> </po-avatar>
        <div class="po-md-8">
          <span class="po-sm-12 po-font-subtitle">
            { { currentFriend.name }}
          </span>
          <span class="po-sm-12 po-font-text"> { { currentFriend.mutualFriends }} mutual friends </span>
          <span class="po-sm-12 po-font-text"> Resides in { { currentFriend.reside }} </span>
        </div>
      </div>
      <div class="po-row">
        <po-button
          class="po-md-4"
          p-icon="fa fa-check-circle"
          p-label="Confirm"
          (p-click)="notification('added', 'success')"
        ></po-button>
        <po-button
          class="po-md-4"
          p-icon="fa fa-eye-slash"
          p-label="Ignore"
          (p-click)="notification('ignored', 'warning')"
        ></po-button>
        <po-button
          class="po-md-4"
          p-icon="fa fa-ban"
          p-label="Block"
          (p-click)="notification('blocked', 'information')"
        ></po-button>
      </div>
    } @else {
      <div class="po-row">
        <span class="po-lg-8 po-font-subtitle">Congratulations TOTVS, no more requests!</span>
      </div>
    }
  </po-widget>
</div>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),rN(18,"sample-po-button-social-network/sample-po-button-social-network.component.ts"),og(),Sl(19,"pre",9),rN(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

import { PoNotificationService } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-button-social-network',
  templateUrl: './sample-po-button-social-network.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoButtonSocialNetworkComponent implements OnInit {
  private poNotification = inject(PoNotificationService);

  currentFriend: object;
  userAvatar: string = 'https://lorempixel.com/144/144/';

  public readonly newFriends: Array<object> = [
    { name: 'Mr. Dev PO', mutualFriends: '7', reside: 'Mountain View, CA' },
    { name: 'Mr. AI PO', mutualFriends: '99+', reside: 'New York City, NY' },
    { name: 'Mr. UX PO', mutualFriends: '14', reside: 'Los Angeles, CA' }
  ];

  private indexFriend: number = 0;

  ngOnInit() {
    this.setCurrentFriend(0);
  }

  notification(action: string, notificationType: string) {
    this.poNotification[notificationType](\`User \${action} successfully!\`);

    this.indexFriend++;
    this.setCurrentFriend(this.indexFriend);
  }

  private setCurrentFriend(index: number) {
    this.currentFriend = this.newFriends[index];
  }
}
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-button-social-network"),og(),Wl(23,"hr")),a&2&&(Lp(5),Gx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),rw("ngClass",gN(4,Be,i.hideSampleCodeTabs)));},dependencies:[SO,Ka,Ume,$me,ue],encapsulation:2,changeDetection:1})}return o})();var Ee=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-button-doc"]],standalone:false,decls:819,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://www.w3.org/WAI/ARIA/apg/#keyboard-interaction-3"],["href","https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-enhanced"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoButtonType"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"]],template:function(a,i){a&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),rN(3,"import { PoButtonModule } from '@po-ui/ng-components';"),og()(),Sl(4,"div",2)(5,"p"),rN(6,"M\xF3dulo do componente po-button."),og()(),Sl(7,"h3",3),rN(8,"Componente"),og(),Sl(9,"h4",4)(10,"code",5),rN(11,"PoButtonComponent"),og()(),Sl(12,"div",2)(13,"p"),rN(14,"O "),Sl(15,"code"),rN(16,"po-button"),og(),rN(17," permite que o usu\xE1rio execute a\xE7\xF5es predefinidas pelo desenvolvedor."),og(),Sl(18,"p"),rN(19,"Atrav\xE9s dos tipos, \xE9 poss\xEDvel identificar a import\xE2ncia de cada a\xE7\xE3o."),og(),Sl(20,"h4"),rN(21,"Boas pr\xE1ticas"),og(),Sl(22,"ul")(23,"li"),rN(24,"Evite "),Sl(25,"code"),rN(26,"labels"),og(),rN(27," extensos que quebram o layout do "),Sl(28,"code"),rN(29,"po-button"),og(),rN(30,", use "),Sl(31,"code"),rN(32,"labels"),og(),rN(33," diretos, curtos e intuitivos."),og(),Sl(34,"li"),rN(35,"Utilize apenas um "),Sl(36,"code"),rN(37,"po-button"),og(),rN(38," configurado como "),Sl(39,"code"),rN(40,"primary"),og(),rN(41," por p\xE1gina."),og(),Sl(42,"li"),rN(43,"Para a\xE7\xF5es irrevers\xEDveis use sempre a propriedade "),Sl(44,"code"),rN(45,"p-danger"),og(),rN(46,"."),og()(),Sl(47,"h4"),rN(48,"Acessibilidade tratada no componente"),og(),Sl(49,"p"),rN(50,"Algumas diretrizes de acessibilidade j\xE1 s\xE3o tratadas no componente, internamente, e n\xE3o podem ser alteradas pelo propriet\xE1rio do conte\xFAdo. S\xE3o elas:"),og(),Sl(51,"ul")(52,"li"),rN(53,"Quando em foco, o bot\xE3o \xE9 ativado usando as teclas de Espa\xE7o e Enter do teclado. "),Sl(54,"a",6),rN(55,"W3C WAI-ARIA 3.5 Button - Keyboard Interaction"),og()(),Sl(56,"li"),rN(57,"A \xE1rea do foco precisar ter uma espessura de pelo menos 2 pixels CSS e o foco n\xE3o pode ficar escondido por outros elementos da tela. "),Sl(58,"a",7),rN(59,"WCAG 2.4.12: Focus Appearance"),og()()(),Sl(60,"h4"),rN(61,"Tokens customiz\xE1veis"),og(),Sl(62,"p"),rN(63,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),og(),Sl(64,"blockquote")(65,"p"),rN(66,"Para maiores informa\xE7\xF5es, acesse o guia "),Sl(67,"a",8),rN(68,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),rN(69,"."),og()(),Sl(70,"table")(71,"thead")(72,"tr")(73,"th"),rN(74,"Propriedade"),og(),Sl(75,"th"),rN(76,"Descri\xE7\xE3o"),og(),Sl(77,"th"),rN(78,"Valor Padr\xE3o"),og()()(),Sl(79,"tbody")(80,"tr")(81,"td")(82,"code"),rN(83,"--font-family"),og()(),Sl(84,"td"),rN(85,"Fam\xEDlia tipogr\xE1fica usada"),og(),Sl(86,"td")(87,"code"),rN(88,"var(--font-family-theme)"),og()()(),Sl(89,"tr")(90,"td")(91,"code"),rN(92,"--font-size"),og()(),Sl(93,"td"),rN(94,"Tamanho da fonte"),og(),Sl(95,"td")(96,"code"),rN(97,"var(--font-size-default)"),og()()(),Sl(98,"tr")(99,"td")(100,"code"),rN(101,"--font-weight"),og()(),Sl(102,"td"),rN(103,"Peso da fonte"),og(),Sl(104,"td")(105,"code"),rN(106,"var(--font-weight-bold)"),og()()(),Sl(107,"tr")(108,"td")(109,"code"),rN(110,"--line-height"),og()(),Sl(111,"td"),rN(112,"Tamanho da label"),og(),Sl(113,"td")(114,"code"),rN(115,"var(--line-height-none)"),og()()(),Sl(116,"tr")(117,"td")(118,"code"),rN(119,"--border-radius"),og()(),Sl(120,"td"),rN(121,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),og(),Sl(122,"td")(123,"code"),rN(124,"var(--border-radius-md)"),og()()(),Sl(125,"tr")(126,"td")(127,"code"),rN(128,"--border-width"),og()(),Sl(129,"td"),rN(130,"Cont\xE9m o valor da largura dos cantos do elemento\xA0"),og(),Sl(131,"td")(132,"code"),rN(133,"var(--border-width-md)"),og()()(),Sl(134,"tr")(135,"td")(136,"code"),rN(137,"--padding"),og()(),Sl(138,"td"),rN(139,"Preenchimento"),og(),Sl(140,"td")(141,"code"),rN(142,"0 1em"),og()()(),Sl(143,"tr")(144,"td")(145,"strong"),rN(146,"Danger"),og()(),Wl(147,"td")(148,"td"),og(),Sl(149,"tr")(150,"td")(151,"code"),rN(152,"--text-color-danger"),og()(),Sl(153,"td"),rN(154,"Cor do texto no estado danger"),og(),Sl(155,"td")(156,"code"),rN(157,"var(--color-neutral-light-00)"),og()()(),Sl(158,"tr")(159,"td")(160,"code"),rN(161,"--color-button-danger"),og()(),Sl(162,"td"),rN(163,"Cor do bot\xE3o no estado danger"),og(),Sl(164,"td")(165,"code"),rN(166,"var(--color-feedback-negative-dark)"),og()()(),Sl(167,"tr")(168,"td")(169,"code"),rN(170,"--color-danger-hover"),og()(),Sl(171,"td"),rN(172,"Cor de hover no estado danger"),og(),Sl(173,"td")(174,"code"),rN(175,"var(--color-feedback-negative-darker)"),og()()(),Sl(176,"tr")(177,"td")(178,"code"),rN(179,"--color-danger-pressed"),og()(),Sl(180,"td"),rN(181,"Cor pressionada no estado danger"),og(),Sl(182,"td")(183,"code"),rN(184,"var(--color-feedback-negative-darkest)"),og()()(),Sl(185,"tr")(186,"td")(187,"code"),rN(188,"--background-danger-hover"),og()(),Sl(189,"td"),rN(190,"Cor de background de hover no estado danger"),og(),Sl(191,"td")(192,"code"),rN(193,"var(--color-feedback-negative-lighter)"),og()()(),Sl(194,"tr")(195,"td")(196,"code"),rN(197,"--border-color-danger-hover"),og()(),Sl(198,"td"),rN(199,"Cor da borda de hover no estado danger"),og(),Sl(200,"td")(201,"code"),rN(202,"var(--color-feedback-negative-darkest)"),og()()(),Sl(203,"tr")(204,"td")(205,"code"),rN(206,"--background-danger-pressed"),og()(),Sl(207,"td"),rN(208,"Cor de background pressionado no estado danger"),og(),Sl(209,"td")(210,"code"),rN(211,"var(--color-feedback-negative-light)"),og()()(),Sl(212,"tr")(213,"td")(214,"code"),rN(215,"--background-color-button-danger"),og(),rN(216,"\xA0"),og(),Sl(217,"td"),rN(218,"Cor de background do bot\xE3o no estado danger"),og(),Sl(219,"td")(220,"code"),rN(221,"var(--color-transparent)"),og()()(),Sl(222,"tr")(223,"td")(224,"strong"),rN(225,"Default Values"),og()(),Wl(226,"td")(227,"td"),og(),Sl(228,"tr")(229,"td")(230,"code"),rN(231,"--text-color"),og()(),Sl(232,"td"),rN(233,"Cor do texto"),og(),Sl(234,"td")(235,"code"),rN(236,"var(--color-neutral-light-00)"),og()()(),Sl(237,"tr")(238,"td")(239,"code"),rN(240,"--color"),og()(),Sl(241,"td"),rN(242,"Cor principal do bot\xE3o"),og(),Sl(243,"td")(244,"code"),rN(245,"var(--color-action-default)"),og()()(),Sl(246,"tr")(247,"td")(248,"code"),rN(249,"--background-color"),og()(),Sl(250,"td"),rN(251,"Cor de background"),og(),Sl(252,"td")(253,"code"),rN(254,"var(--color-transparent)"),og()()(),Sl(255,"tr")(256,"td")(257,"code"),rN(258,"--border-color"),og()(),Sl(259,"td"),rN(260,"Cor da borda"),og(),Sl(261,"td")(262,"code"),rN(263,"var(--color-transparent)"),og()()(),Sl(264,"tr")(265,"td")(266,"code"),rN(267,"--shadow"),og()(),Sl(268,"td"),rN(269,"Cont\xE9m o valor da sombra do elemento"),og(),Sl(270,"td")(271,"code"),rN(272,"var(--shadow-none)"),og()()(),Sl(273,"tr")(274,"td")(275,"strong"),rN(276,"Hover"),og()(),Wl(277,"td")(278,"td"),og(),Sl(279,"tr")(280,"td")(281,"code"),rN(282,"--color-hover"),og()(),Sl(283,"td"),rN(284,"Cor principal no estado hover"),og(),Sl(285,"td")(286,"code"),rN(287,"var(--color-action-hover)"),og()()(),Sl(288,"tr")(289,"td")(290,"code"),rN(291,"--background-hover"),og()(),Sl(292,"td"),rN(293,"Cor de background no estado hover"),og(),Sl(294,"td")(295,"code"),rN(296,"var(--color-brand-01-lighter)"),og()()(),Sl(297,"tr")(298,"td")(299,"code"),rN(300,"--border-color-hover"),og()(),Sl(301,"td"),rN(302,"Cor da borda no estado hover"),og(),Sl(303,"td")(304,"code"),rN(305,"var(--color-brand-01-darkest)"),og()()(),Sl(306,"tr")(307,"td")(308,"strong"),rN(309,"Focused"),og()(),Wl(310,"td")(311,"td"),og(),Sl(312,"tr")(313,"td")(314,"code"),rN(315,"--outline-color-focused"),og()(),Sl(316,"td"),rN(317,"Cor do outline do estado de focus"),og(),Sl(318,"td")(319,"code"),rN(320,"var(--color-action-focus)"),og()()(),Sl(321,"tr")(322,"td")(323,"strong"),rN(324,"Pressed"),og()(),Wl(325,"td")(326,"td"),og(),Sl(327,"tr")(328,"td")(329,"code"),rN(330,"--color-pressed"),og()(),Sl(331,"td"),rN(332,"Cor principal no estado de pressionado"),og(),Sl(333,"td")(334,"code"),rN(335,"var(--color-action-pressed)"),og()()(),Sl(336,"tr")(337,"td")(338,"code"),rN(339,"--background-pressed"),og()(),Sl(340,"td"),rN(341,"Cor de background no estado de pressionado\xA0"),og(),Sl(342,"td")(343,"code"),rN(344,"var(--color-brand-01-light)"),og()()(),Sl(345,"tr")(346,"td")(347,"strong"),rN(348,"Disabled"),og()(),Wl(349,"td")(350,"td"),og(),Sl(351,"tr")(352,"td")(353,"code"),rN(354,"--text-color-disabled"),og()(),Sl(355,"td"),rN(356,"Cor do texto no estado disabled"),og(),Sl(357,"td")(358,"code"),rN(359,"var(--color-neutral-dark-70)"),og()()(),Sl(360,"tr")(361,"td")(362,"code"),rN(363,"--color-disabled"),og()(),Sl(364,"td"),rN(365,"Cor principal no estado disabled"),og(),Sl(366,"td")(367,"code"),rN(368,"var(--color-action-disabled)"),og()()(),Sl(369,"tr")(370,"td")(371,"code"),rN(372,"--background-color-disabled"),og()(),Sl(373,"td"),rN(374,"Cor de background no estado disabled"),og(),Sl(375,"td")(376,"code"),rN(377,"var(--color-transparent)"),og()()()()()(),Sl(378,"div",9)(379,"h4",10),rN(380,"Seletor"),og(),Sl(381,"pre",11),rN(382,`<po-button
    p-aria-label="string"
    (p-click)="EventEmitter"
    p-danger="boolean"
    p-disabled="boolean"
    p-icon="string | TemplateRef<void>"
    p-kind="string"
    p-label="string"
    p-loading="boolean"
    p-size="string"
    p-tabindex="number | string"
    p-type="PoButtonType" >
</po-button>
`),og()(),Sl(383,"h4",12),rN(384,"Propriedades"),og(),Sl(385,"table",13)(386,"tr",14)(387,"th",15),rN(388,"Nome"),og(),Sl(389,"th",15),rN(390,"Tipo"),og(),Sl(391,"th",15),rN(392,"Padr\xE3o"),og(),Sl(393,"th",15),rN(394,"Descri\xE7\xE3o"),og()(),Sl(395,"tr",16)(396,"td",17)(397,"div",18)(398,"span",19),rN(399," p-aria-label"),Wl(400,"br"),og()()(),Sl(401,"td",20)(402,"code",21),rN(403,"string"),og()(),Sl(404,"td",22),rN(405,"-"),og(),Sl(406,"td",23)(407,"em")(408,"strong"),rN(409,"(opcional)"),og()(),Sl(410,"p"),rN(411,"Define um "),Sl(412,"code"),rN(413,"aria-label"),og(),rN(414," para o "),Sl(415,"code"),rN(416,"po-button"),og(),rN(417,"."),og(),Sl(418,"p"),rN(419,"Caso esta propriedade n\xE3o seja informada ser\xE1 considerada a label do bot\xE3o."),og(),Sl(420,"blockquote")(421,"p"),rN(422,"Em caso de bot\xF5es com apenas \xEDcone a atribui\xE7\xE3o de valor \xE0 esta propriedade \xE9 muito importante para acessibilidade."),og()()()(),Sl(423,"tr",16)(424,"td",17)(425,"div",24)(426,"span",25),rN(427," (p-click)"),Wl(428,"br"),og()()(),Sl(429,"td",20)(430,"code",26),rN(431,"EventEmitter"),og()(),Sl(432,"td",22),rN(433,"-"),og(),Sl(434,"td",23)(435,"p"),rN(436,"A\xE7\xE3o que ser\xE1 executada quando o usu\xE1rio clicar sobre o "),Sl(437,"code"),rN(438,"po-button"),og(),rN(439,"."),og()()(),Sl(440,"tr",16)(441,"td",17)(442,"div",18)(443,"span",19),rN(444," p-danger"),Wl(445,"br"),og()()(),Sl(446,"td",20)(447,"code",27),rN(448,"boolean"),og()(),Sl(449,"td",22),rN(450,"-"),og(),Sl(451,"td",23)(452,"em")(453,"strong"),rN(454,"(opcional)"),og()(),Sl(455,"p"),rN(456,"Deve ser usado em a\xE7\xF5es irrevers\xEDveis que o usu\xE1rio precisa ter cuidado ao execut\xE1-la, como a exclus\xE3o de um registro."),og(),Sl(457,"blockquote")(458,"p"),rN(459,"A propriedade "),Sl(460,"code"),rN(461,'p-kind="tertiary"'),og(),rN(462," ser\xE1 inativada ao utilizar esta propriedade."),og()()()(),Sl(463,"tr",16)(464,"td",17)(465,"div",18)(466,"span",19),rN(467," p-disabled"),Wl(468,"br"),og()()(),Sl(469,"td",20)(470,"code",27),rN(471,"boolean"),og()(),Sl(472,"td",22)(473,"p")(474,"code"),rN(475,"false"),og()()(),Sl(476,"td",23)(477,"em")(478,"strong"),rN(479,"(opcional)"),og()(),Sl(480,"p"),rN(481,"Desabilita o "),Sl(482,"code"),rN(483,"po-button"),og(),rN(484," e n\xE3o permite que o usu\xE1rio interaja com o mesmo."),og()()(),Sl(485,"tr",16)(486,"td",17)(487,"div",18)(488,"span",19),rN(489," p-icon"),Wl(490,"br"),og()()(),Sl(491,"td",20)(492,"code",21),rN(493,"string "),og(),Sl(494,"code",28),rN(495," TemplateRef<void>"),og()(),Sl(496,"td",22),rN(497,"-"),og(),Sl(498,"td",23)(499,"em")(500,"strong"),rN(501,"(opcional)"),og()(),Sl(502,"p"),rN(503,"\xCDcone exibido ao lado esquerdo do label do bot\xE3o."),og(),Sl(504,"p"),rN(505,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),Sl(506,"a",29),rN(507,"Biblioteca de \xEDcones"),og(),rN(508,", conforme exemplo:"),og(),Sl(509,"pre")(510,"code"),rN(511,`<po-button p-icon="an an-user" p-label="PO button"></po-button>
`),og()(),Sl(512,"p"),rN(513,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),Sl(514,"em"),rN(515,"Font Awesome"),og(),rN(516,`, desde que a biblioteca
esteja carregada no projeto:`),og(),Sl(517,"pre")(518,"code"),rN(519,`<po-button p-icon="fa fa-podcast" p-label="PO button"></po-button>
`),og()(),Sl(520,"p"),rN(521,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),Sl(522,"code"),rN(523,"TemplateRef"),og(),rN(524,", conforme exemplo abaixo:"),og(),Sl(525,"pre")(526,"code"),rN(527,`<po-button [p-icon]="template" p-label="button template ionic"></po-button>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),og()(),Sl(528,"blockquote")(529,"p"),rN(530,"Para o \xEDcone enquadrar corretamente, deve-se utilizar "),Sl(531,"code"),rN(532,"font-size: inherit"),og(),rN(533," caso o \xEDcone utilizado n\xE3o aplique-o."),og()()()(),Sl(534,"tr",16)(535,"td",17)(536,"div",18)(537,"span",19),rN(538," p-kind"),Wl(539,"br"),og()()(),Sl(540,"td",20)(541,"code",21),rN(542,"string"),og()(),Sl(543,"td",22)(544,"p")(545,"code"),rN(546,"secondary"),og()()(),Sl(547,"td",23)(548,"em")(549,"strong"),rN(550,"(opcional)"),og()(),Sl(551,"p"),rN(552,"Define o estilo visual do componente conforme valores especificados no enum "),Sl(553,"code"),rN(554,"PoButtonKind"),og(),rN(555,":"),og(),Sl(556,"ul")(557,"li")(558,"code"),rN(559,"primary"),og(),rN(560,": destaca o bot\xE3o, sendo recomendado para a\xE7\xF5es principais."),og(),Sl(561,"li")(562,"code"),rN(563,"secondary"),og(),rN(564,": estilo padr\xE3o, ideal para a\xE7\xF5es secund\xE1rias."),og(),Sl(565,"li")(566,"code"),rN(567,"tertiary"),og(),rN(568,": exibe o bot\xE3o sem preenchimento no fundo, indicado para a\xE7\xF5es opcionais."),og()()()(),Sl(569,"tr",16)(570,"td",17)(571,"div",18)(572,"span",19),rN(573," p-label"),Wl(574,"br"),og()()(),Sl(575,"td",20)(576,"code",21),rN(577,"string"),og()(),Sl(578,"td",22),rN(579,"-"),og(),Sl(580,"td",23)(581,"em")(582,"strong"),rN(583,"(opcional)"),og()(),Sl(584,"p"),rN(585,"Label do bot\xE3o."),og()()(),Sl(586,"tr",16)(587,"td",17)(588,"div",18)(589,"span",19),rN(590," p-loading"),Wl(591,"br"),og()()(),Sl(592,"td",20)(593,"code",27),rN(594,"boolean"),og()(),Sl(595,"td",22)(596,"p")(597,"code"),rN(598,"false"),og()()(),Sl(599,"td",23)(600,"em")(601,"strong"),rN(602,"(opcional)"),og()(),Sl(603,"p"),rN(604,"Exibe um \xEDcone de carregamento \xE0 esquerda do "),Sl(605,"em"),rN(606,"label"),og(),rN(607," do bot\xE3o."),og(),Sl(608,"blockquote")(609,"p"),rN(610,"Quando esta propriedade estiver habilitada, desabilitar\xE1 o bot\xE3o."),og()()()(),Sl(611,"tr",16)(612,"td",17)(613,"div",18)(614,"span",19),rN(615," p-size"),Wl(616,"br"),og()()(),Sl(617,"td",20)(618,"code",21),rN(619,"string"),og()(),Sl(620,"td",22)(621,"p")(622,"code"),rN(623,"medium"),og()()(),Sl(624,"td",23)(625,"em")(626,"strong"),rN(627,"(opcional)"),og()(),Sl(628,"p"),rN(629,"Define o tamanho do componente:"),og(),Sl(630,"ul")(631,"li")(632,"code"),rN(633,"small"),og(),rN(634,": altura de 32px (dispon\xEDvel apenas para acessibilidade AA)."),og(),Sl(635,"li")(636,"code"),rN(637,"medium"),og(),rN(638,": altura de 44px."),og(),Sl(639,"li")(640,"code"),rN(641,"large"),og(),rN(642,": altura de 56px."),og()(),Sl(643,"blockquote")(644,"p"),rN(645,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Sl(646,"code"),rN(647,"medium"),og(),rN(648,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Sl(649,"a",30),rN(650,"po-theme"),og(),rN(651,"."),og()()()(),Sl(652,"tr",16)(653,"td",17)(654,"div",18)(655,"span",19),rN(656," p-tabindex"),Wl(657,"br"),og()()(),Sl(658,"td",20)(659,"code",31),rN(660,"number "),og(),Sl(661,"code",21),rN(662," string"),og()(),Sl(663,"td",22),rN(664,"-"),og(),Sl(665,"td",23)(666,"em")(667,"strong"),rN(668,"(opcional)"),og()(),Sl(669,"p"),rN(670,"Define o "),Sl(671,"code"),rN(672,"tabindex"),og(),rN(673," do elemento "),Sl(674,"code"),rN(675,"<button>"),og(),rN(676," nativo interno."),og(),Sl(677,"p"),rN(678,"Use "),Sl(679,"code"),rN(680,'[tabindex]="-1"'),og(),rN(681," para remover o bot\xE3o da ordem de foco do teclado."),og()()(),Sl(682,"tr",16)(683,"td",17)(684,"div",18)(685,"span",19),rN(686," p-type"),Wl(687,"br"),og()()(),Sl(688,"td",20)(689,"code",32),rN(690,"PoButtonType"),og()(),Sl(691,"td",22)(692,"p")(693,"code"),rN(694,"PoButtonType.Button"),og()()(),Sl(695,"td",23)(696,"em")(697,"strong"),rN(698,"(opcional)"),og()(),Sl(699,"p"),rN(700,"Define o tipo do bot\xE3o."),og()()()(),Sl(701,"h3",12),rN(702,"M\xE9todos"),og(),Sl(703,"table",33)(704,"tr",16)(705,"th",34)(706,"div",18)(707,"h4")(708,"span",19),rN(709," focus "),og()()()()(),Sl(710,"tr",23)(711,"td",23)(712,"p"),rN(713,"Fun\xE7\xE3o que atribui foco ao componente."),og(),Sl(714,"p"),rN(715,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),og(),Sl(716,"pre")(717,"code"),rN(718,`import { PoButtonComponent } from '@po-ui/ng-components';

...

@ViewChild(PoButtonComponent, { static: true }) button: PoButtonComponent;

focusButton() {
  this.button.focus();
}
`),og()()()()(),Wl(719,"br"),Sl(720,"h3"),rN(721,"Enums"),og(),Sl(722,"h4",4)(723,"code",5),rN(724,"PoButtonKind"),og()(),Sl(725,"div",2)(726,"p"),rN(727,"Estilos dispon\xEDveis do button."),og()(),Sl(728,"h4",12),rN(729,"Propriedades"),og(),Sl(730,"table",13)(731,"tr",14)(732,"th",15),rN(733,"Nome"),og(),Sl(734,"th",15),rN(735,"Descri\xE7\xE3o"),og()(),Sl(736,"tr",16)(737,"td",17)(738,"div",18)(739,"span",19),rN(740," primary"),Wl(741,"br"),og()()(),Sl(742,"td",23)(743,"p"),rN(744,"Estilo prim\xE1rio, usado para a\xE7\xF5es principais que requerem maior destaque."),og()()(),Sl(745,"tr",16)(746,"td",17)(747,"div",18)(748,"span",19),rN(749," secondary"),Wl(750,"br"),og()()(),Sl(751,"td",23)(752,"p"),rN(753,"Estilo secund\xE1rio, usado como padr\xE3o, para a\xE7\xF5es comuns."),og()()(),Sl(754,"tr",16)(755,"td",17)(756,"div",18)(757,"span",19),rN(758," tertiary"),Wl(759,"br"),og()()(),Sl(760,"td",23)(761,"p"),rN(762,"Estilo terci\xE1rio, ideal para a\xE7\xF5es menos importantes, sem fundo preenchido."),og()()()(),Sl(763,"h4",4)(764,"code",5),rN(765,"PoButtonType"),og()(),Sl(766,"div",2)(767,"p"),rN(768,"Enumera\xE7\xE3o que define os tipos poss\xEDveis para o "),Sl(769,"code"),rN(770,"PoButtonComponent"),og(),rN(771,`. Estes tipos est\xE3o relacionados ao comportamento
do bot\xE3o quando utilizado dentro de um formul\xE1rio HTML.`),og()(),Sl(772,"h4",12),rN(773,"Propriedades"),og(),Sl(774,"table",13)(775,"tr",14)(776,"th",15),rN(777,"Nome"),og(),Sl(778,"th",15),rN(779,"Descri\xE7\xE3o"),og()(),Sl(780,"tr",16)(781,"td",17)(782,"div",18)(783,"span",19),rN(784," Submit"),Wl(785,"br"),og()()(),Sl(786,"td",23)(787,"p"),rN(788,"Define o bot\xE3o como do tipo "),Sl(789,"code"),rN(790,"submit"),og(),rN(791,`. Quando clicado, o formul\xE1rio \xE9 enviado automaticamente,
disparando o evento `),Sl(792,"code"),rN(793,"submit"),og(),rN(794,"."),og()()(),Sl(795,"tr",16)(796,"td",17)(797,"div",18)(798,"span",19),rN(799," Button"),Wl(800,"br"),og()()(),Sl(801,"td",23)(802,"p"),rN(803,"Define o bot\xE3o como do tipo "),Sl(804,"code"),rN(805,"button"),og(),rN(806,`. Este tipo de bot\xE3o n\xE3o possui comportamento padr\xE3o associado
e \xE9 utilizado principalmente para a\xE7\xF5es program\xE1ticas como cliques e disparos de eventos customizados.`),og()()(),Sl(807,"tr",16)(808,"td",17)(809,"div",18)(810,"span",19),rN(811," Reset"),Wl(812,"br"),og()()(),Sl(813,"td",23)(814,"p"),rN(815,"Define o bot\xE3o como do tipo "),Sl(816,"code"),rN(817,"reset"),og(),rN(818,`. Quando clicado, redefine os campos do formul\xE1rio ao qual pertence
para seus valores iniciais.`),og()()()()());},dependencies:[Ka],encapsulation:2,changeDetection:1})}return o})();var ge=(()=>{class o{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,a){this.route=r,this.router=a;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let a=r.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(a){return new(a||o)(w(Xn),w(En))};static \u0275cmp=Un({type:o,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Button",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,i){a&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return i.changeTab("doc")}),Wl(3,"sample-po-button-doc"),og(),Sl(4,"po-tab",3),ft("p-click",function(){return i.changeTab("web")}),Wl(5,"sample-po-button-basic-view")(6,"sample-po-button-labs-view")(7,"sample-po-button-social-network-view"),og()()()),a&2&&(rw("p-actions",i.actions),Lp(2),rw("p-active",i.activeTab==="doc"),Lp(2),rw("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[sNe,Ume,$me,se,ce,be,Ee],encapsulation:2,changeDetection:1})}return o})();var Oe=[{path:"",component:ge}],Se=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=fe$1({type:o});static \u0275inj=ue$1({imports:[mL.forChild(Oe),mL]})}return o})();var mt=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=fe$1({type:o});static \u0275inj=ue$1({imports:[sr,Se]})}return o})();export{mt as DocPoButtonModule};